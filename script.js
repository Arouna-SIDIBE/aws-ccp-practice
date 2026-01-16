// Variables globales
let currentTest = null;
let currentQuestionIndex = 0;
let userAnswers = {};
let testStartTime = null;
let timerInterval = null;
let timeSpent = 0;

// Utiliser allExams si disponible, sinon utiliser un tableau vide
let exams = typeof allExams !== 'undefined' ? allExams : [];

// Fonction pour sauvegarder l'état du test
function saveProgress() {
    if (!currentTest) return;
    
    const progress = {
        examId: currentTest.id,
        startTime: testStartTime,
        questionIndex: currentQuestionIndex,
        answers: userAnswers,
        timeSpent: timeSpent
    };
    
    localStorage.setItem('currentTest', JSON.stringify(progress));
}

// Fonction pour démarrer un examen
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
    testStartTime = Date.now();
    
    // Sauvegarder l'état du test
    saveProgress();
    
    // Rediriger vers la page de test
    window.location.href = 'test.html';
}

// Fonction pour démarrer un challenge
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
    
    currentTest = {
        id: 'challenge',
        name: 'Challenge Aléatoire',
        description: '65 questions sélectionnées aléatoirement',
        questionCount: 65,
        duration: 110,
        questions: allQuestions.slice(0, 65)
    };
    
    currentQuestionIndex = 0;
    userAnswers = {};
    timeSpent = 0;
    testStartTime = Date.now();
    
    // Sauvegarder l'état du challenge
    saveProgress();
    
    // Rediriger vers la page de test
    window.location.href = 'test.html';
}

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
    if (testStartTime) {
        // Si le test était en pause, calculer le temps déjà écoulé
        timeSpent = Math.floor((Date.now() - testStartTime) / 1000);
    } else {
        testStartTime = Date.now();
        timeSpent = 0;
    }
    
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    if (testStartTime) {
        timeSpent = Math.floor((Date.now() - testStartTime) / 1000);
    }
}

function updateTimer() {
    if (!testStartTime) return;
    
    timeSpent = Math.floor((Date.now() - testStartTime) / 1000);
    const timerElement = document.getElementById('timer');
    if (timerElement) {
        timerElement.textContent = formatTime(timeSpent);
    }
}

// Fonctions de gestion des tests
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
        saveProgress();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
        saveProgress();
    }
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
    }
    
    if (submitBtn) {
        submitBtn.style.display = 'block';
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
        
        // Récupérer le texte des réponses de l'utilisateur
        let userAnswerText = [];
        if (userAnswer.length > 0) {
            userAnswer.forEach(letter => {
                const option = question.options.find(opt => opt.letter === letter);
                if (option) {
                    userAnswerText.push(`${letter}. ${option.text}`);
                }
            });
        }
        
        // Récupérer le texte des réponses correctes
        let correctAnswerText = [];
        if (correctAnswer.length > 0) {
            correctAnswer.forEach(letter => {
                const option = question.options.find(opt => opt.letter === letter);
                if (option) {
                    correctAnswerText.push(`${letter}. ${option.text}`);
                }
            });
        }
        
        results.push({
            question: question.text,
            userAnswer: userAnswer.join(', '),
            userAnswerText: userAnswerText.join(' | '),
            correctAnswer: correctAnswer.join(', '),
            correctAnswerText: correctAnswerText.join(' | '),
            isCorrect,
            explanation: question.explanation || "Pas d'explication disponible",
            options: question.options // On stocke aussi les options pour l'affichage
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
        results,
        questions: currentTest.questions // On stocke toutes les questions pour l'affichage des résultats
    };
    
    // Sauvegarder dans l'historique
    let history = JSON.parse(localStorage.getItem('testHistory') || '[]');
    history.push(testResult);
    localStorage.setItem('testHistory', JSON.stringify(history));
    
    // Nettoyer le test en cours
    localStorage.removeItem('currentTest');
    
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
    const passed = scorePercentage >= 70;
    
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

// Fonction pour générer les détails des résultats (AMÉLIORÉE)
function generateResultsDetails(results) {
    if (!results || !Array.isArray(results)) return '<p>Aucun détail disponible</p>';
    
    let html = '<div class="questions-review">';
    
    results.forEach((item, index) => {
        const itemClass = item.isCorrect ? 'review-item correct' : 'review-item incorrect';
        const icon = item.isCorrect ? '✓' : '✗';
        const statusText = item.isCorrect ? 'Correcte' : 'Incorrecte';
        
        html += `
            <div class="${itemClass}">
                <div class="review-header">
                    <span class="review-status">${icon} Question ${index + 1}</span>
                    <span class="review-score">${statusText}</span>
                </div>
                
                <div class="review-question">${item.question}</div>
                
                <div class="review-answers-grid">
                    <div class="review-answer user-answer">
                        <div class="answer-header">
                            <i class="fas fa-user-circle"></i>
                            <strong>Votre réponse:</strong>
                        </div>
                        <div class="answer-content">
                            ${item.userAnswerText ? formatAnswerText(item.userAnswerText) : '<em>Non répondue</em>'}
                        </div>
                    </div>
                    
                    <div class="review-answer correct-answer">
                        <div class="answer-header">
                            <i class="fas fa-check-circle"></i>
                            <strong>Réponse correcte:</strong>
                        </div>
                        <div class="answer-content">
                            ${formatAnswerText(item.correctAnswerText)}
                        </div>
                    </div>
                </div>
                
                ${item.explanation ? `
                    <div class="review-explanation">
                        <div class="explanation-header">
                            <i class="fas fa-info-circle"></i>
                            <strong>Explication:</strong>
                        </div>
                        <div class="explanation-content">
                            ${item.explanation}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    });
    
    html += '</div>';
    return html;
}

// Fonction utilitaire pour formater le texte des réponses
function formatAnswerText(answerText) {
    if (!answerText) return '';
    
    // Séparer les réponses multiples par " | "
    const answers = answerText.split(' | ');
    
    if (answers.length === 1) {
        return `<div class="single-answer">${answers[0]}</div>`;
    } else {
        let html = '<ul class="multiple-answers">';
        answers.forEach(answer => {
            html += `<li>${answer}</li>`;
        });
        html += '</ul>';
        return html;
    }
}

function getRecommendations(score) {
    if (score >= 90) {
        return "Excellent travail ! Vous êtes prêt pour l'examen officiel. Concentrez-vous sur la révision des quelques questions manquées.";
    } else if (score >= 70) {
        return "Bon score ! Revoyez attentivement les questions que vous avez manquées et refaites des tests de pratique.";
    } else if (score >= 50) {
        return "Continuez à pratiquer ! Étudiez les explications des réponses et concentrez-vous sur les domaines où vous avez des difficultés.";
    } else {
        return "Prenez le temps d'étudier les concepts de base d'AWS. Revenez aux fondamentaux et utilisez les explications pour comprendre vos erreurs.";
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
    const result = JSON.parse(localStorage.getItem('lastTestResult'));
    if (result) {
        if (result.examId === 'challenge') {
            startChallenge();
        } else {
            startExam(parseInt(result.examId));
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
        // Restaurer le test
        const savedTest = localStorage.getItem('currentTest');
        
        if (savedTest) {
            const testData = JSON.parse(savedTest);
            const examId = testData.examId;
            
            if (examId === 'challenge') {
                // Pour le challenge, recréer avec les mêmes règles
                let allQuestions = [];
                allExams.forEach(exam => {
                    if (exam.questions && exam.questions.length > 0) {
                        allQuestions = allQuestions.concat(exam.questions);
                    }
                });
                
                // Mélanger de la même manière
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
                const exam = allExams.find(e => e.id === parseInt(examId));
                if (exam) {
                    currentTest = exam;
                }
            }
            
            if (currentTest) {
                currentQuestionIndex = testData.questionIndex || 0;
                userAnswers = testData.answers || {};
                testStartTime = testData.startTime || Date.now();
                
                displayQuestion(currentQuestionIndex);
                
                const testTitle = document.getElementById('testTitle');
                const examName = document.getElementById('examName');
                if (testTitle) testTitle.textContent = currentTest.name;
                if (examName) examName.textContent = currentTest.name;
                
                startTimer();
            } else {
                window.location.href = 'tests.html';
            }
        } else {
            window.location.href = 'tests.html';
        }
    } else if (currentPage === 'results.html') {
        displayResults();
    }
    
    loadTestHistory();
});

// ========== FONCTIONS POUR LE MODE RÉVISION ==========

// Charger l'historique des tests dans la page review
function loadReviewHistory() {
    const history = JSON.parse(localStorage.getItem('testHistory') || '[]');
    const historyElement = document.getElementById('reviewHistory');
    
    if (historyElement && history.length > 0) {
        let html = '<h3>Vos derniers tests</h3>';
        
        history.slice(-3).reverse().forEach(test => {
            html += `
                <div class="history-item">
                    <p><strong>${test.examName}</strong> - ${new Date(test.date).toLocaleDateString()}</p>
                    <p>Score: ${test.score}% (${test.correctAnswers}/${test.totalQuestions})</p>
                    <a href="#" onclick="reviewTestResults('${test.examId}')" class="review-link">
                        <i class="fas fa-book-open"></i> Réviser ce test
                    </a>
                </div>
            `;
        });
        
        historyElement.innerHTML = html;
    }
}

// Réviser les résultats d'un test spécifique
function reviewTestResults(examId) {
    // Cette fonction peut être étendue pour charger un test spécifique
    localStorage.setItem('reviewExam', examId);
    window.location.href = 'review-exam.html';
}

// ========== MODIFICATION DE L'INITIALISATION ==========

// Mettre à jour l'initialisation pour inclure la page review
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser la page actuelle
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'test.html') {
        // Code existant pour test.html...
    } else if (currentPage === 'results.html') {
        displayResults();
    } else if (currentPage === 'review.html') {
        // Charger l'historique pour la page review
        loadReviewHistory();
    }
    
    // Charger l'historique des tests (pour toutes les pages)
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