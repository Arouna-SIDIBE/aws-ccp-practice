// convert.js - Script amélioré pour convertir les fichiers MD en JSON
const fs = require('fs');
const path = require('path');

// Dossier contenant les fichiers MD (français)
const QUESTIONS_DIR = './questions/fr';
const OUTPUT_FILE = './data.js';

// Fonction pour extraire le numéro de l'examen
function getExamNumber(filename) {
    const match = filename.match(/practice-exam-(\d+)\.md/);
    return match ? parseInt(match[1]) : null;
}

// Fonction pour détecter les réponses dans différents formats
function extractCorrectAnswers(text) {
    const patterns = [
        // Format anglais
        /Correct answer:\s*([A-D](?:,\s*[A-D])*)/i,
        /Answer:\s*([A-D](?:,\s*[A-D])*)/i,
        
        // Format français
        /Bonne réponse\s*:\s*([A-D](?:,\s*[A-D])*)/i,
        /Réponse\s*:\s*([A-D](?:,\s*[A-D])*)/i,
        /Réponses?\s*correctes?\s*:\s*([A-D](?:,\s*[A-D])*)/i,
        
        // Format dans les balises <details>
        /<summary[^>]*>.*?(?:Answer|Réponse)[^<]*<\/summary>\s*([A-D](?:,\s*[A-D])*)/i,
        
        // Format avec emojis
        /✅\s*([A-D](?:,\s*[A-D])*)/i,
        /Correct\s*:\s*([A-D](?:,\s*[A-D])*)/i
    ];
    
    for (const pattern of patterns) {
        const match = text.match(pattern);
        if (match) {
            return match[1].split(',').map(a => a.trim());
        }
    }
    
    return [];
}

// Fonction pour extraire les explications
function extractExplanation(text) {
    // Chercher les explications dans les balises <details>
    const detailsRegex = /<details[^>]*>[\s\S]*?<\/details>/g;
    const detailsMatches = text.match(detailsRegex) || [];
    
    for (const details of detailsMatches) {
        // Vérifier si c'est une explication
        if (details.toLowerCase().includes('explication') || 
            details.toLowerCase().includes('explanation') ||
            details.includes('✅') ||
            details.includes('❌')) {
            
            // Extraire le contenu
            let content = details;
            
            // Supprimer les balises <details> et <summary>
            content = content.replace(/<details[^>]*>/g, '');
            content = content.replace(/<\/details>/g, '');
            content = content.replace(/<summary[^>]*>[\s\S]*?<\/summary>/g, '');
            
            // Nettoyer
            content = content.trim();
            
            if (content && content.length > 10) {
                return formatExplanation(content);
            }
        }
    }
    
    // Chercher l'explication après les options
    const lines = text.split('\n');
    let inExplanation = false;
    let explanationLines = [];
    
    for (const line of lines) {
        const trimmedLine = line.trim();
        
        if (trimmedLine.includes('Explication') || 
            trimmedLine.includes('✅') || 
            trimmedLine.includes('❌') ||
            (trimmedLine.startsWith('-') && trimmedLine.includes('**'))) {
            inExplanation = true;
        }
        
        if (inExplanation && trimmedLine && 
            !trimmedLine.match(/^-\s*[A-D]\./) && 
            !trimmedLine.includes('Correct answer') &&
            !trimmedLine.includes('Bonne réponse')) {
            explanationLines.push(trimmedLine);
        }
    }
    
    if (explanationLines.length > 0) {
        return formatExplanation(explanationLines.join('\n'));
    }
    
    return '';
}

// Fonction pour formater les explications - VERSION CORRIGÉE
function formatExplanation(explanationText) {
    if (!explanationText) return '';
    
    let explanation = explanationText;
    
    // Remplacer les emojis par du HTML
    explanation = explanation.replace(/✅/g, '<span class="correct-marker">✅</span>');
    explanation = explanation.replace(/❌/g, '<span class="incorrect-marker">❌</span>');
    
    // Convertir le markdown en HTML de base
    explanation = explanation.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    explanation = explanation.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Traitement spécial pour les titres des sections
    // On va séparer le traitement des titres des sections des éléments de liste
    
    const lines = explanation.split('\n');
    let formattedLines = [];
    let inList = false;
    let currentSection = null;
    
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        
        if (!line) {
            if (inList) {
                formattedLines.push('</ul>');
                inList = false;
            }
            continue;
        }
        
        // Détecter les titres de sections (Option correcte, Autres options incorrectes, etc.)
        const isSectionTitle = line.match(/^-\s*\*\*(Option|Options|Réponse|Réponses|Bonne(?:s)? réponse(?:s)?|Correct(?:e)?(?:s)?|Autres?\s*(?:options?|réponses?)\s*(?:incorrectes?|fausses?))\s*\*\*\s*(?:[:：]?\s*(?:✅|❌)?)?$/i);
        
        if (isSectionTitle) {
            // Fermer la liste précédente si elle existe
            if (inList) {
                formattedLines.push('</ul>');
                inList = false;
            }
            
            // Extraire le titre sans le tiret
            const title = line.replace(/^-\s*\*\*/, '').replace(/\*\*\s*$/, '');
            
            // Déterminer la classe CSS en fonction du type de section
            const isCorrectSection = title.toLowerCase().includes('correct') || 
                                   title.toLowerCase().includes('bonne') || 
                                   title.toLowerCase().includes('réponse');
            const isIncorrectSection = title.toLowerCase().includes('incorrect') || 
                                     title.toLowerCase().includes('fausse');
            
            let sectionClass = 'explanation-section';
            if (isCorrectSection) sectionClass = 'correct-section';
            if (isIncorrectSection) sectionClass = 'incorrect-section';
            
            // Ajouter le titre de section
            formattedLines.push(`<div class="${sectionClass}">`);
            formattedLines.push(`<strong>${title}</strong>`);
            
            // Vérifier s'il y a un emoji dans la ligne originale
            if (line.includes('✅')) {
                formattedLines.push(' <span class="correct-marker">✅</span>');
            } else if (line.includes('❌')) {
                formattedLines.push(' <span class="incorrect-marker">❌</span>');
            }
            
            currentSection = sectionClass;
            continue;
        }
        
        // Détecter les éléments de liste (commençant par -)
        if (line.startsWith('- ')) {
            if (!inList) {
                formattedLines.push('<ul>');
                inList = true;
            }
            
            // Nettoyer le tiret et convertir le markdown
            let listItem = line.replace(/^-\s*/, '');
            listItem = listItem.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            listItem = listItem.replace(/\*(.*?)\*/g, '<em>$1</em>');
            listItem = listItem.replace(/✅/g, '<span class="correct-marker">✅</span>');
            listItem = listItem.replace(/❌/g, '<span class="incorrect-marker">❌</span>');
            
            formattedLines.push(`<li>${listItem}</li>`);
        } else {
            // Si ce n'est pas une liste et qu'on était dans une liste, fermer la liste
            if (inList) {
                formattedLines.push('</ul>');
                inList = false;
                
                // Si on était dans une section, fermer la section
                if (currentSection) {
                    formattedLines.push('</div>');
                    currentSection = null;
                }
            }
            
            // Si c'est du texte normal, l'ajouter comme paragraphe
            if (line) {
                formattedLines.push(`<p>${line}</p>`);
            }
        }
    }
    
    // Fermer les éléments ouverts
    if (inList) {
        formattedLines.push('</ul>');
    }
    if (currentSection) {
        formattedLines.push('</div>');
    }
    
    explanation = formattedLines.join('');
    
    // Si l'explication est vide, retourner une explication par défaut
    if (!explanation.trim()) {
        return '<div class="basic-explanation"><em>Explication non disponible pour cette question</em></div>';
    }
    
    // Ajouter le conteneur principal
    explanation = `<div class="explanation-content">${explanation}</div>`;
    
    return explanation;
}

// Fonction pour parser une question
function parseQuestion(questionText, questionNumber, examNumber) {
    try {
        const lines = questionText.trim().split('\n');
        
        // Extraire le texte de la question
        const questionLine = lines[0].replace(/^\d+\.\s*/, '').trim();
        
        // Extraire les options
        const options = [];
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            const optionMatch = line.match(/^-\s*([A-D])\.\s*(.+)/);
            if (optionMatch) {
                options.push({
                    letter: optionMatch[1],
                    text: optionMatch[2].trim()
                });
            }
        }
        
        // Extraire la réponse correcte
        const fullText = questionText;
        const correctAnswers = extractCorrectAnswers(fullText);
        
        // Extraire l'explication
        const explanation = extractExplanation(fullText);
        
        // Validation
        if (options.length < 2) {
            console.warn(`⚠️  Question ${questionNumber} de l'examen ${examNumber}: Moins de 2 options`);
            return null;
        }
        
        if (correctAnswers.length === 0) {
            // Essayer de deviner en cherchant des indices
            const guessMatch = fullText.match(/(?:✅|correcte?|bonne)\s*[:\s]*([A-D])/i);
            if (guessMatch) {
                console.log(`  ➤ Deviné pour Q${questionNumber}: ${guessMatch[1]}`);
                return {
                    id: `${examNumber}_${questionNumber}`,
                    text: questionLine,
                    options: options,
                    correctAnswers: [guessMatch[1]],
                    explanation: explanation || '<div class="basic-explanation"><em>Explication non disponible pour cette question</em></div>'
                };
            } else {
                console.warn(`⚠️  Question ${questionNumber} de l'examen ${examNumber}: Pas de réponse correcte trouvée`);
                return null;
            }
        }
        
        return {
            id: `${examNumber}_${questionNumber}`,
            text: questionLine,
            options: options,
            correctAnswers: correctAnswers,
            explanation: explanation || '<div class="basic-explanation"><em>Explication non disponible pour cette question</em></div>'
        };
        
    } catch (error) {
        console.error(`❌ Erreur parsing question ${questionNumber}:`, error.message);
        return null;
    }
}

// Fonction pour parser un fichier d'examen
function parseExamFile(filePath, examNumber) {
    try {
        console.log(`📄 Traitement: ${filePath}`);
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Extraire le titre
        const titleMatch = content.match(/# (?:Examen de pratique|Practice Exam|Examen Pratique) (\d+)/i);
        const title = titleMatch ? `Examen Pratique ${titleMatch[1]}` : `Examen Pratique ${examNumber}`;
        
        // Diviser en questions
        const questionSections = content.split(/\n(?=\d+\.\s)/);
        
        const questions = [];
        let questionNumber = 1;
        
        for (let section of questionSections) {
            section = section.trim();
            
            // Vérifier si c'est une vraie question
            if (section.match(/^\d+\./) && section.includes('- A.')) {
                const question = parseQuestion(section, questionNumber, examNumber);
                
                if (question) {
                    questions.push(question);
                    questionNumber++;
                }
            }
        }
        
        if (questions.length === 0) {
            console.error(`  ❌ Aucune question valide trouvée`);
            return null;
        }
        
        console.log(`  ✅ ${questions.length} questions extraites`);
        
        return {
            id: examNumber,
            name: title,
            description: `${title} - ${questions.length} questions`,
            questionCount: questions.length,
            duration: 90,
            questions: questions
        };
        
    } catch (error) {
        console.error(`❌ Erreur fichier ${filePath}:`, error.message);
        return null;
    }
}

// Fonction principale
function convertAllExams() {
    console.log('🚀 DÉBUT DE LA CONVERSION AMÉLIORÉE\n');
    
    if (!fs.existsSync(QUESTIONS_DIR)) {
        console.error(`❌ Dossier non trouvé: ${QUESTIONS_DIR}`);
        process.exit(1);
    }
    
    const files = fs.readdirSync(QUESTIONS_DIR)
        .filter(file => file.endsWith('.md'))
        .sort((a, b) => {
            const numA = getExamNumber(a) || 0;
            const numB = getExamNumber(b) || 0;
            return numA - numB;
        });
    
    console.log(`📂 ${files.length} fichiers trouvés`);
    
    const allExams = [];
    let totalQuestions = 0;
    
    for (const file of files) {
        const examNumber = getExamNumber(file);
        if (!examNumber) continue;
        
        const filePath = path.join(QUESTIONS_DIR, file);
        const exam = parseExamFile(filePath, examNumber);
        
        if (exam) {
            allExams.push(exam);
            totalQuestions += exam.questions.length;
        }
    }
    
    // Statistiques
    console.log('\n📊 STATISTIQUES FINALES:');
    console.log('='.repeat(50));
    console.log(`📁 Examens convertis: ${allExams.length}`);
    console.log(`❓ Questions totales: ${totalQuestions}`);
    
    // Afficher le résumé par examen
    allExams.sort((a, b) => a.id - b.id);
    allExams.forEach(exam => {
        console.log(`  - Examen ${exam.id}: ${exam.questions.length} questions`);
    });
    
    // Générer le fichier data.js
    const jsContent = `// Structure de données générée automatiquement
// Date: ${new Date().toISOString().split('T')[0]}
// Examens: ${allExams.length}
// Questions: ${totalQuestions}

const allExams = ${JSON.stringify(allExams, null, 2)};

// Exporter pour usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { allExams };
}`;
    
    fs.writeFileSync(OUTPUT_FILE, jsContent, 'utf8');
    
    console.log('\n✅ CONVERSION TERMINÉE !');
    console.log('='.repeat(50));
    console.log(`📄 Fichier généré: ${OUTPUT_FILE}`);
    console.log(`📏 Taille: ${Math.round(jsContent.length / 1024)} KB`);
    
    // Tester quelques explications pour vérifier le formatage
    console.log('\n🔍 Test des explications formatées:');
    if (allExams.length > 0 && allExams[0].questions.length > 0) {
        const sampleQuestion = allExams[0].questions[0];
        console.log('Structure de l\'explication pour la première question:');
        if (sampleQuestion.explanation) {
            // Afficher un extrait propre
            const cleanExcerpt = sampleQuestion.explanation
                .replace(/<[^>]*>/g, ' ')
                .replace(/\s+/g, ' ')
                .substring(0, 200);
            console.log(`"${cleanExcerpt}..."`);
        } else {
            console.log('Pas d\'explication');
        }
    }
}

// Exécuter
if (require.main === module) {
    convertAllExams();
}