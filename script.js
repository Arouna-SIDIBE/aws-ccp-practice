// Variables globales
let currentTest = null;
let currentQuestionIndex = 0;
let userAnswers = {};
let testStartTime = null;
let timerInterval = null;
let timeSpent = 0;

// Utiliser allExams si disponible, sinon utiliser un tableau vide
let exams = typeof allExams !== 'undefined' ? allExams : [];

// Fonctions utilitaires
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    } else if (minutes > 0) {
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    } else {
        return `00:${secs.toString().padStart(2, '0')}`;
    }
}

function startTimer() {
    testStartTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    if (testStartTime) {
        timeSpent = Math.floor((Date.now() - testStartTime) / 1000);
    }
}

function updateTimer() {
    if (!testStartTime) return;
    
    const elapsed = Math.floor((Date.now() - testStartTime) / 1000);
    const timerElement = document.getElementById('timer');
    if (timerElement) {
        timerElement.textContent = formatTime(elapsed);
    }
}

// Fonctions de gestion des tests
function startExam(examId) {
    const exam = exams.find(e => e.id === examId);
    if (!exam) {
        alert("Examen non trouvé");
        return;
    }
    
    currentTest = exam;
    currentQuestionIndex = 0;
    userAnswers = {};
    timeSpent = 0;
    
    // Sauvegarder l'état du test
    localStorage.setItem('currentTest', JSON.stringify({
        examId,
        startTime: Date.now(),
        questionIndex: 0,
        answers: {}
    }));
    
    // Rediriger vers la page de test
    window.location.href = 'test.html';
}

function startChallenge() {
    // Collecter toutes les questions de tous les examens
    let allQuestions = [];
    exams.forEach(exam => {
        if (exam.questions && exam.questions.length > 0) {
            allQuestions = allQuestions.concat(exam.questions);
        }
    });
    
    if (allQuestions.length < 65) {
        alert("Pas assez de questions disponibles pour le challenge");
        return;
    }
    
    // Mélanger les questions
    for (let i = allQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }
    
    // Sélectionner 65 questions
    const challengeQuestions = allQuestions.slice(0, 65);
    
    currentTest = {
        id: 'challenge',
        name: 'Challenge Aléatoire',
        description: '65 questions sélectionnées aléatoirement',
        questionCount: 65,
        duration: 110,
        questions: challengeQuestions
    };
    
    currentQuestionIndex = 0;
    userAnswers = {};
    timeSpent = 0;
    
    // Sauvegarder l'état du challenge
    localStorage.setItem('currentTest', JSON.stringify({
        examId: 'challenge',
        startTime: Date.now(),
        questionIndex: 0,
        answers: {}
    }));
    
    // Rediriger vers la page de test
    window.location.href = 'test.html';
}

function displayQuestion(index) {
    if (!currentTest || !currentTest.questions || !currentTest.questions[index]) return;
    
    const question = currentTest.questions[index];
    const container = document.getElementById('questionContainer');
    
    let html = `
        <div class="question-card">
            <div class="question-header">
                <span class="question-number">Question ${index + 1}</span>
                ${question.correctAnswers && question.correctAnswers.length > 1 ? 
                    '<span class="multiple-choice"><i class="fas fa-check-double"></i> Choix multiple</span>' : ''}
            </div>
            
            <div class="question-text">${question.text}</div>
            
            <div class="options-container">
    `;
    
    // Afficher les options
    if (question.options && question.options.length > 0) {
        question.options.forEach((option) => {
            const isSelected = userAnswers[index] && userAnswers[index].includes(option.letter);
            const optionClass = isSelected ? 'option selected' : 'option';
            
            html += `
                <div class="${optionClass}" onclick="selectOption(${index}, '${option.letter}')">
                    <span class="option-label">${option.letter}.</span>
                    <span class="option-text">${option.text}</span>
                </div>
            `;
        });
    }
    
    html += `
            </div>
        </div>
    `;
    
    if (container) {
        container.innerHTML = html;
    }
    
    // Mettre à jour la progression
    updateProgress();
    
    // Mettre à jour les boutons de navigation
    updateNavigationButtons();
    
    // Mettre à jour la grille de navigation
    if (typeof generateQuestionGrid === 'function') {
        generateQuestionGrid();
    }
}

function selectOption(questionIndex, optionLetter) {
    if (!currentTest || !currentTest.questions[questionIndex]) return;
    
    if (!userAnswers[questionIndex]) {
        userAnswers[questionIndex] = [];
    }
    
    const question = currentTest.questions[questionIndex];
    const isMultipleChoice = question.correctAnswers && question.correctAnswers.length > 1;
    
    if (isMultipleChoice) {
        // Pour les questions à choix multiple
        const index = userAnswers[questionIndex].indexOf(optionLetter);
        if (index > -1) {
            userAnswers[questionIndex].splice(index, 1);
        } else {
            userAnswers[questionIndex].push(optionLetter);
        }
    } else {
        // Pour les questions à choix unique
        userAnswers[questionIndex] = [optionLetter];
    }
    
    // Mettre à jour l'affichage
    displayQuestion(questionIndex);
    
    // Sauvegarder la réponse
    saveProgress();
}

function nextQuestion() {
    if (currentQuestionIndex < currentTest.questionCount - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
    }
}

function saveProgress() {
    if (!currentTest) return;
    
    const progress = {
        examId: currentTest.id,
        questionIndex: currentQuestionIndex,
        answers: userAnswers,
        timeSpent: testStartTime ? Math.floor((Date.now() - testStartTime) / 1000) : 0
    };
    
    localStorage.setItem('testProgress', JSON.stringify(progress));
}

function updateProgress() {
    if (!currentTest) return;
    
    const answered = Object.keys(userAnswers).filter(key => 
        userAnswers[key] && userAnswers[key].length > 0
    ).length;
    
    const percentage = Math.round((answered / currentTest.questionCount) * 100);
    
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const answeredCount = document.getElementById('answeredCount');
    const totalQuestions = document.getElementById('totalQuestions');
    
    if (progressFill) {
        progressFill.style.width = `${percentage}%`;
    }
    if (progressText) {
        progressText.textContent = `${percentage}% complété`;
    }
    if (answeredCount) {
        answeredCount.textContent = answered;
    }
    if (totalQuestions) {
        totalQuestions.textContent = currentTest.questionCount;
    }
    
    // Mettre à jour le compteur de questions
    const questionCounter = document.getElementById('questionCounter');
    if (questionCounter) {
        questionCounter.textContent = `Question ${currentQuestionIndex + 1} sur ${currentTest.questionCount}`;
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    if (prevBtn) {
        prevBtn.disabled = currentQuestionIndex === 0;
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentQuestionIndex === currentTest.questionCount - 1;
        nextBtn.style.display = currentQuestionIndex === currentTest.questionCount - 1 ? 'none' : 'block';
    }
    
    if (submitBtn) {
        submitBtn.style.display = currentQuestionIndex === currentTest.questionCount - 1 ? 'block' : 'none';
    }
}

function submitTest() {
    stopTimer();
    
    if (!currentTest) {
        alert("Aucun test en cours");
        return;
    }
    
    // Calculer le score
    let correct = 0;
    const results = [];
    
    currentTest.questions.forEach((question, index) => {
        const userAnswer = userAnswers[index] ? [...userAnswers[index]].sort() : [];
        const correctAnswer = question.correctAnswers ? [...question.correctAnswers].sort() : [];
        const isCorrect = JSON.stringify(userAnswer) === JSON.stringify(correctAnswer);
        
        if (isCorrect) correct++;
        
        results.push({
            question: question.text,
            userAnswer: userAnswer.join(', '),
            correctAnswer: correctAnswer.join(', '),
            isCorrect,
            explanation: question.explanation || "Pas d'explication disponible"
        });
    });
    
    const score = Math.round((correct / currentTest.questionCount) * 100);
    
    // Sauvegarder les résultats
    const testResult = {
        examId: currentTest.id,
        examName: currentTest.name,
        date: new Date().toISOString(),
        score,
        correctAnswers: correct,
        totalQuestions: currentTest.questionCount,
        timeSpent: formatTime(timeSpent),
        results
    };
    
    // Sauvegarder dans l'historique
    let history = JSON.parse(localStorage.getItem('testHistory') || '[]');
    history.push(testResult);
    localStorage.setItem('testHistory', JSON.stringify(history));
    
    // Nettoyer le test en cours
    localStorage.removeItem('currentTest');
    localStorage.removeItem('testProgress');
    
    // Rediriger vers la page de résultats
    localStorage.setItem('lastTestResult', JSON.stringify(testResult));
    window.location.href = 'results.html';
}

// Fonction pour afficher les résultats
function displayResults() {
    const result = JSON.parse(localStorage.getItem('lastTestResult'));
    const container = document.getElementById('resultsContainer');
    
    if (!result) {
        if (container) {
            container.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-exclamation-circle"></i>
                    <h2>Aucun résultat trouvé</h2>
                    <p>Vous n'avez pas encore complété de test.</p>
                    <a href="tests.html" class="btn btn-primary">Commencer un test</a>
                </div>
            `;
        }
        return;
    }
    
    const scorePercentage = result.score;
    const passed = scorePercentage >= 70; // 70% pour réussir l'examen AWS CCP
    
    if (container) {
        container.innerHTML = `
            <div class="results-summary">
                <div class="score-circle" style="--score-percentage: ${scorePercentage}%">
                    <div class="score-text">${scorePercentage}%</div>
                </div>
                
                <h1>${passed ? '🎉 Félicitations !' : '📝 Presque !'}</h1>
                <h2>${result.examName}</h2>
                <p class="score-status ${passed ? 'passed' : 'failed'}">
                    ${passed ? 'Vous avez réussi le test !' : 'Continuez à pratiquer !'}
                </p>
                
                <div class="results-stats">
                    <div class="stat-card">
                        <h3>${result.correctAnswers}/${result.totalQuestions}</h3>
                        <p>Questions correctes</p>
                    </div>
                    <div class="stat-card">
                        <h3>${result.timeSpent}</h3>
                        <p>Temps total</p>
                    </div>
                    <div class="stat-card">
                        <h3>${result.score}%</h3>
                        <p>Score final</p>
                    </div>
                    <div class="stat-card">
                        <h3>${new Date(result.date).toLocaleDateString()}</h3>
                        <p>Date du test</p>
                    </div>
                </div>
                
                <div class="action-buttons">
                    <button class="action-btn retry-btn" onclick="retryTest()">
                        <i class="fas fa-redo"></i> Recommencer
                    </button>
                    <button class="action-btn review-btn" onclick="toggleReview()">
                        <i class="fas fa-list"></i> Voir les détails
                    </button>
                    <a href="tests.html" class="action-btn home-btn">
                        <i class="fas fa-home"></i> Retour aux examens
                    </a>
                </div>
            </div>
            
            <div class="results-details" id="resultsDetails" style="display: none;">
                <h2><i class="fas fa-chart-bar"></i> Détail des questions</h2>
                ${generateResultsDetails(result.results)}
            </div>
            
            <div class="recommendations">
                <h3><i class="fas fa-lightbulb"></i> Recommandations</h3>
                <p>${getRecommendations(result.score)}</p>
            </div>
        `;
    }
}

function generateResultsDetails(results) {
    if (!results || !Array.isArray(results)) return '<p>Aucun détail disponible</p>';
    
    let html = '<div class="questions-review">';
    
    results.forEach((item, index) => {
        const itemClass = item.isCorrect ? 'review-item correct' : 'review-item incorrect';
        const icon = item.isCorrect ? '✓' : '✗';
        
        html += `
            <div class="${itemClass}">
                <div class="review-header">
                    <span class="review-status">${icon} Question ${index + 1}</span>
                    <span class="review-score">${item.isCorrect ? 'Correcte' : 'Incorrecte'}</span>
                </div>
                <div class="review-question">${item.question}</div>
                <div class="review-answers">
                    <div class="review-answer">
                        <strong>Votre réponse:</strong> ${item.userAnswer || 'Non répondue'}
                    </div>
                    <div class="review-answer">
                        <strong>Réponse correcte:</strong> ${item.correctAnswer}
                    </div>
                </div>
                ${item.explanation ? `
                    <div class="review-explanation">
                        <strong>Explication:</strong> ${item.explanation}
                    </div>
                ` : ''}
            </div>
        `;
    });
    
    html += '</div>';
    return html;
}

function getRecommendations(score) {
    if (score >= 90) {
        return "Excellent travail ! Vous êtes prêt pour l'examen officiel. Continuez à pratiquer pour maintenir vos compétences.";
    } else if (score >= 70) {
        return "Bon score ! Revoyez les questions que vous avez manquées et pratiquez encore un peu avant de passer l'examen officiel.";
    } else if (score >= 50) {
        return "Continuez à pratiquer ! Concentrez-vous sur les domaines où vous avez des difficultés et refaites les examens.";
    } else {
        return "Prenez le temps d'étudier les concepts de base d'AWS. Utilisez les explications pour comprendre vos erreurs.";
    }
}

function toggleReview() {
    const details = document.getElementById('resultsDetails');
    if (details) {
        if (details.style.display === 'none') {
            details.style.display = 'block';
        } else {
            details.style.display = 'none';
        }
    }
}

function retryTest() {
    if (currentTest) {
        if (currentTest.id === 'challenge') {
            startChallenge();
        } else {
            startExam(currentTest.id);
        }
    } else {
        window.location.href = 'tests.html';
    }
}

// Charger l'historique des tests
function loadTestHistory() {
    const history = JSON.parse(localStorage.getItem('testHistory') || '[]');
    const historyElement = document.getElementById('testHistory');
    
    if (historyElement && history.length > 0) {
        let html = '<h3>Historique des tests</h3>';
        
        history.slice(-5).reverse().forEach(test => {
            html += `
                <div class="history-item">
                    <p><strong>${test.examName}</strong> - ${new Date(test.date).toLocaleDateString()}</p>
                    <p>Score: ${test.score}% (${test.correctAnswers}/${test.totalQuestions})</p>
                    <p>Temps: ${test.timeSpent}</p>
                </div>
            `;
        });
        
        historyElement.innerHTML = html;
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser la page actuelle
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'test.html') {
        // Récupérer l'état du test depuis le localStorage
        const savedTest = localStorage.getItem('currentTest');
        
        if (savedTest) {
            const testData = JSON.parse(savedTest);
            const examId = testData.examId;
            
            if (examId === 'challenge') {
                // Reconstruire le challenge
                let allQuestions = [];
                exams.forEach(exam => {
                    if (exam.questions && exam.questions.length > 0) {
                        allQuestions = allQuestions.concat(exam.questions);
                    }
                });
                
                // Mélanger et prendre 65 questions
                for (let i = allQuestions.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
                }
                
                currentTest = {
                    id: 'challenge',
                    name: 'Challenge Aléatoire',
                    description: '65 questions sélectionnées aléatoirement',
                    questionCount: 65,
                    duration: 110,
                    questions: allQuestions.slice(0, 65)
                };
            } else {
                // Charger l'examen spécifique
                const exam = exams.find(e => e.id === parseInt(examId));
                if (exam) {
                    currentTest = exam;
                }
            }
            
            if (currentTest) {
                // Restaurer les réponses si elles existent
                if (testData.answers) {
                    userAnswers = testData.answers;
                }
                
                // Restaurer l'index de la question
                currentQuestionIndex = testData.questionIndex || 0;
                
                // Afficher la question actuelle
                displayQuestion(currentQuestionIndex);
                
                // Mettre à jour le titre
                const testTitle = document.getElementById('testTitle');
                const examName = document.getElementById('examName');
                if (testTitle) testTitle.textContent = currentTest.name;
                if (examName) examName.textContent = currentTest.name;
                
                // Démarrer le chronomètre
                startTimer();
            }
        } else {
            // Pas de test en cours, rediriger vers la page des examens
            window.location.href = 'tests.html';
        }
    } else if (currentPage === 'results.html') {
        displayResults();
    }
    
    // Charger l'historique des tests
    loadTestHistory();
});

// Exposer les fonctions au scope global
window.startExam = startExam;
window.startChallenge = startChallenge;
window.nextQuestion = nextQuestion;
window.prevQuestion = prevQuestion;
window.submitTest = submitTest;
window.selectOption = selectOption;
window.retryTest = retryTest;
window.toggleReview = toggleReview;