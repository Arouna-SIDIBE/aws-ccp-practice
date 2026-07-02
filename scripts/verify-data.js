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
const wrapped = new Function('module', raw + '\nreturn typeof allExamsData !== "undefined" ? allExamsData : { fr: allExams };');
let allExamsData;
try {
    allExamsData = wrapped({ exports: {} });
} catch (err) {
    console.error('data.js ne se charge pas :', err.message);
    process.exit(1);
}

let errors = 0, warnings = 0;
const stats = {};

for (const lang of Object.keys(allExamsData)) {
    const exams = allExamsData[lang];
    if (!Array.isArray(exams) || exams.length === 0) {
        console.error(`Langue ${lang} : aucun examen.`);
        errors++;
        continue;
    }
    let langQuestions = 0;
    for (const exam of exams) {
        if (!exam.id || !exam.name || !Array.isArray(exam.questions)) {
            console.error(`[${lang}] Examen mal formé`);
            errors++;
            continue;
        }
        langQuestions += exam.questions.length;
        for (const q of exam.questions) {
            if (!q.id || !q.text || !Array.isArray(q.options) || !Array.isArray(q.correctAnswers)) {
                console.error(`[${lang}] Question mal formée : ${q.id || '?'}`);
                errors++;
                continue;
            }
            if (q.options.length < 2) { console.error(`[${lang}] ${q.id} : < 2 options`); errors++; }
            if (q.correctAnswers.length === 0) { console.error(`[${lang}] ${q.id} : 0 réponse`); errors++; }
            for (const letter of q.correctAnswers) {
                if (!q.options.find(o => o.letter === letter)) {
                    console.error(`[${lang}] ${q.id} : réponse "${letter}" absente`);
                    errors++;
                }
            }
            if (!q.explanation || q.explanation.length < 20) warnings++;
        }
    }
    stats[lang] = { exams: exams.length, questions: langQuestions };
}

console.log('\nRésumé :');
Object.entries(stats).forEach(([lang, s]) => {
    console.log(`  ${lang.toUpperCase()} : ${s.exams} examens, ${s.questions} questions`);
});
console.log(`  Erreurs : ${errors}`);
console.log(`  Warnings : ${warnings}`);
if (errors > 0) { console.error(`\nÉchec.`); process.exit(1); }
console.log('\nVérification OK.');
