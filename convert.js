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

// Fonction pour nettoyer le texte (enlever les balises HTML inutiles)
function cleanText(text) {
    if (!text) return '';
    
    // Remplacer les sauts de ligne multiples
    text = text.replace(/\n{2,}/g, '\n');
    
    // Supprimer les balises HTML non désirées mais garder le formatage de base
    text = text.replace(/<br\s*\/?>/gi, '\n');
    text = text.replace(/<\/?[^>]+(>|$)/g, '');
    
    // Nettoyer les espaces multiples
    text = text.replace(/\s{2,}/g, ' ');
    
    return text.trim();
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
    let collectingExplanation = false;
    let explanationLines = [];
    
    for (let i = 1; i < lines.length; i++) {
        let line = lines[i].trim();
        
        // Détecter les options (commencent par - A., - B., etc.)
        const optionMatch = line.match(/^-\s*([A-D])\.\s*(.+)/);
        if (optionMatch) {
            options.push({
                letter: optionMatch[1],
                text: cleanText(optionMatch[2].trim())
            });
        }
        
        // Détecter le début de la section Answer
        if (line.includes('<details markdown=1>') || line.includes('<details markdown="1">')) {
            inDetails = true;
            continue;
        }
        
        // Détecter la balise de fermeture Answer
        if (line.includes('</summary>')) {
            continue; // Ignorer la balise </summary>
        }
        
        // Extraire les réponses correctes
        if (inDetails && line.toLowerCase().includes('correct answer:')) {
            const answerMatch = line.match(/correct answer:\s*([A-D](?:,\s*[A-D])*)/i);
            if (answerMatch) {
                correctAnswers = answerMatch[1].split(',').map(a => a.trim());
            }
            continue;
        }
        
        // Détecter le début de l'explication
        if (inDetails && line.toLowerCase().includes('explanation:')) {
            collectingExplanation = true;
            // Extraire le texte après "Explanation:"
            const explanationStart = line.toLowerCase().indexOf('explanation:');
            if (explanationStart !== -1) {
                const explanationText = line.substring(explanationStart + 11).trim();
                if (explanationText) {
                    explanationLines.push(cleanText(explanationText));
                }
            }
            continue;
        }
        
        // Collecter les lignes d'explication
        if (collectingExplanation && inDetails && !line.includes('</details>')) {
            if (line.trim()) {
                explanationLines.push(cleanText(line));
            }
            continue;
        }
        
        // Fin de la section Answer
        if (inDetails && line.includes('</details>')) {
            inDetails = false;
            collectingExplanation = false;
            
            // Nettoyer et formater l'explication
            if (explanationLines.length > 0) {
                explanation = explanationLines
                    .join(' ')
                    .replace(/\s{2,}/g, ' ')
                    .trim();
                
                // Ajouter un point si manquant
                if (!explanation.endsWith('.') && !explanation.endsWith('!') && !explanation.endsWith('?')) {
                    explanation += '.';
                }
            }
            
            // Si pas d'explication, créer une explication par défaut
            if (!explanation || explanation.trim() === '') {
                const correctOptions = correctAnswers.map(letter => {
                    const option = options.find(opt => opt.letter === letter);
                    return option ? `${letter}. ${option.text}` : letter;
                }).join(', ');
                
                explanation = `La réponse correcte est ${correctAnswers.length > 1 ? 'les options' : 'l\'option'} ${correctOptions}.`;
            }
        }
    }
    
    // Vérifier que nous avons au moins 2 options
    if (options.length < 2) {
        console.warn(`Question ${questionNumber} de l'examen ${examNumber} n'a pas assez d'options: ${options.length}`);
        return null;
    }
    
    // Vérifier que nous avons des réponses correctes
    if (correctAnswers.length === 0) {
        console.warn(`Question ${questionNumber} de l'examen ${examNumber} n'a pas de réponse correcte définie`);
        return null;
    }
    
    return {
        id: `${examNumber}_${questionNumber}`,
        text: cleanText(questionLine),
        options: options,
        correctAnswers: correctAnswers,
        explanation: explanation
    };
}

// Fonction pour parser un fichier d'examen complet
function parseExamFile(filePath, examNumber) {
    try {
        console.log(`Traitement du fichier: ${filePath}`);
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Extraire le titre
        const titleMatch = content.match(/# Practice Exam (\d+)/);
        const title = titleMatch ? `Examen Pratique ${titleMatch[1]}` : `Examen Pratique ${examNumber}`;
        
        // Diviser le contenu en questions (chaque question commence par un numéro suivi d'un point)
        const questionSections = content.split(/\n(?=\d+\.)/);
        
        // Ignorer la première section si elle ne contient pas de question (le titre)
        let questions = [];
        let questionNumber = 1;
        
        console.log(`  Sections trouvées: ${questionSections.length}`);
        
        for (let section of questionSections) {
            section = section.trim();
            
            // Vérifier si c'est une vraie question (contient des options et des détails)
            if (section.includes('- A.') && (section.includes('<details') || section.includes('Answer:'))) {
                const question = parseQuestion(section, questionNumber, examNumber);
                if (question && question.options.length >= 2) {
                    questions.push(question);
                    questionNumber++;
                } else {
                    console.warn(`  Question ${questionNumber} ignorée (format incorrect ou données manquantes)`);
                }
            } else if (section.match(/^\d+\./)) {
                // C'est une question mais peut-être mal formatée
                console.warn(`  Question ${questionNumber} détectée mais format suspect: ${section.substring(0, 100)}...`);
            }
        }
        
        if (questions.length === 0) {
            console.error(`  Aucune question valide trouvée dans ${filePath}`);
            return null;
        }
        
        return {
            id: examNumber,
            name: title,
            description: `${title} - ${questions.length} questions`,
            questionCount: questions.length,
            duration: 90, // Par défaut 90 minutes pour AWS CCP
            questions: questions
        };
    } catch (error) {
        console.error(`Erreur lors du traitement de ${filePath}:`, error.message);
        return null;
    }
}

// Fonction principale de conversion
function convertAllExams() {
    console.log('🚀 Début de la conversion des fichiers MD en JSON...\n');
    
    // Vérifier si le dossier questions existe
    if (!fs.existsSync(QUESTIONS_DIR)) {
        console.error(`❌ Le dossier ${QUESTIONS_DIR} n'existe pas !`);
        process.exit(1);
    }
    
    // Lire tous les fichiers MD dans le dossier questions
    const files = fs.readdirSync(QUESTIONS_DIR).filter(file => file.endsWith('.md'));
    console.log(`📂 ${files.length} fichiers MD trouvés dans ${QUESTIONS_DIR}`);
    
    if (files.length === 0) {
        console.error('❌ Aucun fichier MD trouvé !');
        process.exit(1);
    }
    
    const allExams = [];
    let totalQuestions = 0;
    
    for (const file of files) {
        const examNumber = getExamNumber(file);
        if (examNumber) {
            const filePath = path.join(QUESTIONS_DIR, file);
            const exam = parseExamFile(filePath, examNumber);
            
            if (exam && exam.questions.length > 0) {
                console.log(`✅ ${exam.name}: ${exam.questions.length} questions extraites`);
                allExams.push(exam);
                totalQuestions += exam.questions.length;
            } else {
                console.log(`❌ ${file}: Aucune question valide trouvée`);
            }
        } else {
            console.log(`⚠️  ${file}: Nom de fichier non reconnu (ignoré)`);
        }
    }
    
    // Trier les examens par numéro
    allExams.sort((a, b) => a.id - b.id);
    
    // Statistiques détaillées
    console.log('\n📊 STATISTIQUES DE CONVERSION:');
    console.log('='.repeat(40));
    console.log(`📁 Examens convertis: ${allExams.length}`);
    console.log(`❓ Questions totales: ${totalQuestions}`);
    
    // Afficher le détail par examen
    allExams.forEach(exam => {
        console.log(`  - ${exam.name}: ${exam.questions.length} questions`);
    });
    
    // Vérifier la cohérence des données
    let warnings = 0;
    allExams.forEach(exam => {
        exam.questions.forEach((question, index) => {
            if (!question.explanation || question.explanation.trim() === '') {
                warnings++;
                console.warn(`  ⚠️  Question ${question.id} sans explication`);
            }
            if (question.correctAnswers.length === 0) {
                warnings++;
                console.warn(`  ⚠️  Question ${question.id} sans réponse correcte`);
            }
        });
    });
    
    if (warnings > 0) {
        console.log(`\n⚠️  ${warnings} avertissements détectés`);
    }
    
    // Générer le contenu du fichier data.js
    const jsContent = `// Structure de données pour les examens AWS CCP
// Ce fichier est généré automatiquement par convert.js
// Date de génération: ${new Date().toISOString().split('T')[0]}
// Nombre d'examens: ${allExams.length}
// Nombre total de questions: ${totalQuestions}

const allExams = ${JSON.stringify(allExams, null, 2)};

// Exporter les données pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { allExams };
}`;
    
    // Écrire dans le fichier data.js
    fs.writeFileSync(OUTPUT_FILE, jsContent, 'utf8');
    
    console.log('\n✅ CONVERSION TERMINÉE AVEC SUCCÈS !');
    console.log('='.repeat(40));
    console.log(`📄 Fichier généré: ${OUTPUT_FILE}`);
    console.log(`📈 Taille du fichier: ${Math.round(jsContent.length / 1024)} KB`);
    
    // Afficher des instructions pour l'utilisation
    console.log('\n📋 INSTRUCTIONS:');
    console.log('='.repeat(40));
    console.log('1. Copiez le fichier data.js dans le même dossier que vos fichiers HTML');
    console.log('2. Assurez-vous que script.js et data.js sont inclus dans le bon ordre');
    console.log('3. Ouvrez index.html dans votre navigateur pour tester');
    console.log('\n🎯 Testez maintenant avec:');
    console.log('   - Ouvrez tests.html pour voir la liste des examens');
    console.log('   - Ouvrez challenge.html pour le mode challenge aléatoire');
    console.log('   - Les résultats seront sauvegardés dans localStorage');
}

// Exécuter la conversion si le script est appelé directement
if (require.main === module) {
    convertAllExams();
} else {
    // Exporter pour les tests
    module.exports = {
        parseQuestion,
        parseExamFile,
        convertAllExams
    };
}