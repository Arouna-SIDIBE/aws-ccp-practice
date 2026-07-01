// scripts/verify-data.js
// Vérifie l'intégrité de data.js après la conversion.

const fs = require('fs');
const path = require('path');

const DATA_FILE = path.resolve(__dirname, '..', 'data.js');

if (!fs.existsSync(DATA_FILE)) {
    console.error('data.js introuvable. Lance d\'abord `npm run build`.');
    process.exit(1);
}

const raw = fs.readFileSync(DATA_FILE, 'utf8');
const wrapped = new Function('module', raw + '\nreturn typeof allExams !== "undefined" ? allExams : module.exports.allExams;');
let allExams;
try {
    allExams = wrapped({ exports: {} });
} catch (err) {
    console.error('data.js ne se charge pas :', err.message);
    process.exit(1);
}

if (!Array.isArray(allExams) || allExams.length === 0) {
    console.error('Aucun examen trouvé dans data.js.');
    process.exit(1);
}

let errors = 0;
let warnings = 0;
let totalQuestions = 0;

for (const exam of allExams) {
    if (!exam.id || !exam.name || !Array.isArray(exam.questions)) {
        console.error(`Examen mal formé : ${JSON.stringify(exam).slice(0, 100)}`);
        errors++;
        continue;
    }
    totalQuestions += exam.questions.length;
    for (const q of exam.questions) {
        if (!q.id || !q.text || !Array.isArray(q.options) || !Array.isArray(q.correctAnswers)) {
            console.error(`Question mal formée (examen ${exam.id}) : ${q.id || '?'}`);
            errors++;
            continue;
        }
        if (q.options.length < 2) {
            console.error(`Question ${q.id} : moins de 2 options.`);
            errors++;
        }
        if (q.correctAnswers.length === 0) {
            console.error(`Question ${q.id} : aucune bonne réponse.`);
            errors++;
        }
        for (const letter of q.correctAnswers) {
            if (!q.options.find(o => o.letter === letter)) {
                console.error(`Question ${q.id} : réponse "${letter}" absente des options.`);
                errors++;
            }
        }
        if (!q.explanation || q.explanation.length < 20) {
            warnings++;
        }
    }
}

console.log(`\nRésumé :`);
console.log(`  Examens : ${allExams.length}`);
console.log(`  Questions totales : ${totalQuestions}`);
console.log(`  Erreurs : ${errors}`);
console.log(`  Warnings : ${warnings}`);

if (errors > 0) {
    console.error(`\nVérification échouée : ${errors} erreur(s).`);
    process.exit(1);
}
console.log(`\nVérification OK.`);
