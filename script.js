// Données des examens (simplifiées - voir data.js pour la version complète)
let exams = [
    {
        id: 1,
        name: "Practice Exam 1",
        description: "Premier examen pratique complet",
        questionCount: 50,
        duration: 90,
        questions: [] // Rempli par data.js
    },
    {
        id: 10,
        name: "Practice Exam 10",
        description: "Dixième examen pratique",
        questionCount: 50,
        duration: 90,
        questions: []
    }
];

// Variables globales
let currentTest = null;
let currentQuestionIndex = 0;
let userAnswers = {};
let testStartTime = null;
let timerInterval = null;
let timeSpent = 0;

// Fonctions utilitaires
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
        return `${hours}h ${minutes}m ${secs}s`;
    } else if (minutes > 0) {
        return `${minutes}m ${secs}s`;
    } else {
        return `${secs}s`;
    }
}

function startTimer() {
    testStartTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
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
    if (!exam) return;
    
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
        allQuestions = allQuestions.concat(exam.questions);
    });
    
    // Mélanger les questions
    allQuestions.sort(() => Math.random() - 0.5);
    
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

function loadExamPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const examId = urlParams.get('exam') || 'challenge';
    
    if (examId === 'challenge') {
        startChallenge();
    } else {
        startExam(parseInt(examId));
    }
}

// Fonction pour afficher une question
function displayQuestion(index) {
    if (!currentTest || !currentTest.questions[index]) return;
    
    const question = currentTest.questions[index];
    const container = document.getElementById('questionContainer');
    
    let html = `
        <div class="question-container">
            <div class="question-counter">
                Question ${index + 1} sur ${currentTest.questionCount}
            </div>
            <div class="question-text">${question.text}</div>
            <div class="options-container">
    `;
    
    // Afficher les options
    question.options.forEach((option, i) => {
        const isSelected = userAnswers[index] && userAnswers[index].includes(option.letter);
        const optionClass = isSelected ? 'option selected' : 'option';
        
        html += `
            <div class="${optionClass}" onclick="selectOption(${index}, '${option.letter}')">
                <span class="option-label">${option.letter}.</span>
                ${option.text}
            </div>
        `;
    });
    
    html += `
            </div>
            <div class="test-controls">
                ${index > 0 ? '<button class="nav-btn" onclick="prevQuestion()">Question précédente</button>' : '<div></div>'}
                ${index < currentTest.questionCount - 1 ? 
                    '<button class="nav-btn" onclick="nextQuestion()">Question suivante</button>' : 
                    '<button class="nav-btn submit-btn" onclick="submitTest()">Soumettre le test</button>'}
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

function selectOption(questionIndex, optionLetter) {
    if (!userAnswers[questionIndex]) {
        userAnswers[questionIndex] = [];
    }
    
    const question = currentTest.questions[questionIndex];
    const isMultipleChoice = question.correctAnswers.length > 1;
    
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
    const progress = {
        examId: currentTest.id,
        questionIndex: currentQuestionIndex,
        answers: userAnswers,
        timeSpent: Math.floor((Date.now() - testStartTime) / 1000)
    };
    
    localStorage.setItem('testProgress', JSON.stringify(progress));
}

function submitTest() {
    stopTimer();
    
    // Calculer le score
    let correct = 0;
    const results = [];
    
    currentTest.questions.forEach((question, index) => {
        const userAnswer = userAnswers[index] ? [...userAnswers[index]].sort() : [];
        const correctAnswer = [...question.correctAnswers].sort();
        const isCorrect = JSON.stringify(userAnswer) === JSON.stringify(correctAnswer);
        
        if (isCorrect) correct++;
        
        results.push({
            question: question.text,
            userAnswer: userAnswer.join(', '),
            correctAnswer: correctAnswer.join(', '),
            isCorrect,
            explanation: question.explanation
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
    
    let history = JSON.parse(localStorage.getItem('testHistory') || '[]');
    history.push(testResult);
    localStorage.setItem('testHistory', JSON.stringify(history));
    
    // Rediriger vers la page de résultats
    localStorage.setItem('lastTestResult', JSON.stringify(testResult));
    window.location.href = 'results.html';
}

// Fonction pour afficher les résultats
function displayResults() {
    const result = JSON.parse(localStorage.getItem('lastTestResult'));
    if (!result) {
        window.location.href = 'index.html';
        return;
    }
    
    const container = document.getElementById('resultsContainer');
    const scorePercentage = result.score;
    
    let html = `
        <div class="results-container">
            <div class="score-display">
                <div class="score-circle" style="--score-percentage: ${scorePercentage}%">
                    <div class="score-text">${scorePercentage}%</div>
                </div>
                <h2>${result.examName}</h2>
                <p>Score : ${result.correctAnswers} / ${result.totalQuestions}</p>
                <p>Temps : ${result.timeSpent}</p>
                <p>Date : ${new Date(result.date).toLocaleDateString()}</p>
            </div>
            
            <div class="stats-grid">
                <div class="stat-box">
                    <h3>Score</h3>
                    <p>${scorePercentage}%</p>
                </div>
                <div class="stat-box">
                    <h3>Temps</h3>
                    <p>${result.timeSpent}</p>
                </div>
                <div class="stat-box">
                    <h3>Correctes</h3>
                    <p>${result.correctAnswers}</p>
                </div>
                <div class="stat-box">
                    <h3>Incorrectes</h3>
                    <p>${result.totalQuestions - result.correctAnswers}</p>
                </div>
            </div>
            
            <div class="question-review">
                <h3>Détail des questions</h3>
    `;
    
    result.results.forEach((item, index) => {
        const itemClass = item.isCorrect ? 'review-item correct' : 'review-item incorrect';
        
        html += `
            <div class="${itemClass}">
                <p><strong>Question ${index + 1}:</strong> ${item.question}</p>
                <p><strong>Votre réponse:</strong> ${item.userAnswer || 'Non répondue'}</p>
                <p><strong>Réponse correcte:</strong> ${item.correctAnswer}</p>
                ${item.explanation ? `<p><strong>Explication:</strong> ${item.explanation}</p>` : ''}
            </div>
        `;
    });
    
    html += `
            </div>
            
            <div class="test-controls">
                <button class="nav-btn" onclick="window.location.href='tests.html'">
                    Retour aux examens
                </button>
                <button class="nav-btn submit-btn" onclick="retryTest()">
                    Recommencer
                </button>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

function retryTest() {
    if (currentTest.id === 'challenge') {
        startChallenge();
    } else {
        startExam(currentTest.id);
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Charger les examens depuis data.js
    if (typeof allExams !== 'undefined') {
        exams = allExams;
    }
    
    // Initialiser la page actuelle
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('test.html')) {
        loadExamPage();
        startTimer();
    } else if (currentPage.includes('results.html')) {
        displayResults();
    }
    
    // Charger l'historique des tests
    loadTestHistory();
});

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