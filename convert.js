// convert.js - Script pour convertir les fichiers MD en JSON
const fs = require('fs');
const path = require('path');

// Dossier contenant les fichiers MD
const QUESTIONS_DIR = './questions';
const OUTPUT_FILE = './data.js';

// Fonction pour extraire le numéro de l'examen depuis le nom du fichier
function getExamNumber(filename) {
    const match = filename.match(/practice-exam-(\d+)\.md/);
    return match ? parseInt(match[1]) : null;
}

// Fonction pour parser une question depuis le texte MD
function parseQuestion(questionText, questionNumber, examNumber) {
    const lines = questionText.trim().split('\n');
    
    // Extraire le texte de la question (première ligne après le numéro)
    const questionLine = lines[0].replace(/^\d+\.\s*/, '').trim();
    
    // Extraire les options (commencent par "-")
    const options = [];
    let correctAnswers = [];
    let explanation = '';
    let inDetails = false;
    
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        
        // Détecter les options (commencent par - A., - B., etc.)
        const optionMatch = line.match(/^-\s*([A-D])\.\s*(.+)/);
        if (optionMatch) {
            options.push({
                letter: optionMatch[1],
                text: optionMatch[2].trim()
            });
        }
        
        // Détecter le début de la section Answer
        if (line.includes('<details markdown=1>') || line.includes('<details markdown="1">')) {
            inDetails = true;
        }
        
        // Extraire les réponses correctes
        if (inDetails && line.includes('Correct answer:')) {
            const answerMatch = line.match(/Correct answer:\s*([A-D](?:,\s*[A-D])*)/);
            if (answerMatch) {
                correctAnswers = answerMatch[1].split(',').map(a => a.trim());
            }
        }
        
        // Extraire l'explication (si présente)
        if (inDetails && line.includes('Explanation:')) {
            explanation = line.replace('Explanation:', '').trim();
        }
        
        // Fin de la section Answer
        if (inDetails && line.includes('</details>')) {
            inDetails = false;
        }
    }
    
    return {
        id: `${examNumber}_${questionNumber}`,
        text: questionLine,
        options: options,
        correctAnswers: correctAnswers,
        explanation: explanation || `Réponse correcte: ${correctAnswers.join(', ')}`
    };
}

// Fonction pour parser un fichier d'examen complet
function parseExamFile(filePath, examNumber) {
    try {
        console.log(`Traitement du fichier: ${filePath}`);
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Extraire le titre
        const titleMatch = content.match(/# Practice Exam (\d+)/);
        const title = titleMatch ? `Practice Exam ${titleMatch[1]}` : `Practice Exam ${examNumber}`;
        
        // Diviser le contenu en questions (chaque question commence par un numéro suivi d'un point)
        const questionSections = content.split(/\n(?=\d+\.)/);
        
        // Ignorer la première section si elle ne contient pas de question (le titre)
        let questions = [];
        let questionNumber = 1;
        
        for (let section of questionSections) {
            section = section.trim();
            
            // Vérifier si c'est une vraie question (contient des options)
            if (section.includes('- A.') && section.includes('Answer</summary>')) {
                const question = parseQuestion(section, questionNumber, examNumber);
                if (question.options.length >= 2) { // Au moins 2 options
                    questions.push(question);
                    questionNumber++;
                }
            }
        }
        
        return {
            id: examNumber,
            name: title,
            description: `${title} - ${questions.length} questions`,
            questionCount: questions.length,
            duration: 90, // Par défaut 90 minutes
            questions: questions
        };
    } catch (error) {
        console.error(`Erreur lors du traitement de ${filePath}:`, error.message);
        return null;
    }
}

// Fonction principale de conversion
function convertAllExams() {
    console.log('Début de la conversion des fichiers MD en JSON...');
    
    // Lire tous les fichiers MD dans le dossier questions
    const files = fs.readdirSync(QUESTIONS_DIR).filter(file => file.endsWith('.md'));
    console.log(`${files.length} fichiers MD trouvés.`);
    
    const allExams = [];
    
    for (const file of files) {
        const examNumber = getExamNumber(file);
        if (examNumber) {
            const filePath = path.join(QUESTIONS_DIR, file);
            const exam = parseExamFile(filePath, examNumber);
            
            if (exam && exam.questions.length > 0) {
                console.log(`✓ ${exam.name}: ${exam.questions.length} questions extraites`);
                allExams.push(exam);
            } else {
                console.log(`✗ ${file}: Aucune question valide trouvée`);
            }
        }
    }
    
    // Trier les examens par numéro
    allExams.sort((a, b) => a.id - b.id);
    
    // Générer le contenu du fichier data.js
    const jsContent = `// Structure de données pour les examens
// Ce fichier est généré automatiquement par convert.js
const allExams = ${JSON.stringify(allExams, null, 2)};

// Exporter les données pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { allExams };
}`;
    
    // Écrire dans le fichier data.js
    fs.writeFileSync(OUTPUT_FILE, jsContent, 'utf8');
    
    console.log('\n✅ Conversion terminée !');
    console.log(`📊 Total d'examens: ${allExams.length}`);
    console.log(`📝 Total de questions: ${allExams.reduce((sum, exam) => sum + exam.questions.length, 0)}`);
    console.log(`📁 Fichier généré: ${OUTPUT_FILE}`);
}

// Exécuter la conversion
convertAllExams();