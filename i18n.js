// i18n.js — Traductions et helpers de langue.
// Chargé avant script.js pour que t() et currentLang() soient dispos.

const translations = {
    fr: {
        // Navigation
        'nav.home': 'Accueil',
        'nav.exams': 'Examens',
        'nav.challenge': 'Challenge',
        'nav.review': 'Révision',
        'nav.stats': 'Statistiques',

        // Common
        'common.questions': 'questions',
        'common.minutes': 'minutes',
        'common.start': 'Commencer',
        'common.start_exam': 'Commencer l\'examen',
        'common.previous': 'Précédent',
        'common.next': 'Suivant',
        'common.submit': 'Soumettre le test',
        'common.cancel': 'Annuler',
        'common.confirm': 'Confirmer',
        'common.retry': 'Recommencer',
        'common.close': 'Fermer',
        'common.multiple_choice': 'Choix multiple',
        'common.select_n': 'Sélectionnez {n} réponses parmi les options ci-dessous.',
        'common.answered': 'Répondue',
        'common.not_answered': 'Non répondue',
        'common.current': 'Actuelle',

        // Home
        'home.title': 'Préparez-vous à la certification',
        'home.title_highlight': 'AWS Cloud Practitioner',
        'home.subtitle': 'Plateforme complète bilingue avec plus de 1250 questions, examens chronométrés, mode révision et suivi détaillé de progression.',
        'home.cta_challenge': 'Démarrer un Challenge',
        'home.cta_review': 'Mode Révision',
        'home.cta_exams': 'Voir les examens',
        'home.stats.exams': 'Examens complets',
        'home.stats.questions': 'Questions disponibles',
        'home.stats.per_challenge': 'Questions par challenge',
        'home.stats.bilingual': 'Bilingue FR/EN',
        'home.features.title': 'Pourquoi utiliser notre plateforme ?',
        'home.features.timer.title': 'Chronomètre intelligent',
        'home.features.timer.desc': 'Tests chronométrés avec sauvegarde automatique de votre progression.',
        'home.features.random.title': 'Questions aléatoires',
        'home.features.random.desc': 'Challenge unique à chaque tentative avec 65 questions sélectionnées aléatoirement.',
        'home.features.review.title': 'Mode Révision',
        'home.features.review.desc': 'Apprenez à votre rythme avec les réponses et explications immédiatement disponibles.',
        'home.features.bilingual.title': 'Bilingue',
        'home.features.bilingual.desc': 'Basculez entre français et anglais à tout moment, même en cours de test.',
        'home.how.title': 'Comment ça marche ?',
        'home.how.step1.title': 'Choisissez votre mode',
        'home.how.step1.desc': 'Test chronométré, challenge aléatoire ou révision libre.',
        'home.how.step2.title': 'Étudiez les questions',
        'home.how.step2.desc': 'Accédez à plus de 1250 questions avec corrections détaillées.',
        'home.how.step3.title': 'Testez vos connaissances',
        'home.how.step3.desc': 'Passez des examens complets dans des conditions réelles.',
        'home.how.step4.title': 'Améliorez-vous',
        'home.how.step4.desc': 'Utilisez vos statistiques pour cibler vos révisions.',
        'home.modes.title': 'Trois modes d\'apprentissage',
        'home.modes.test.title': 'Mode Test',
        'home.modes.challenge.title': 'Mode Challenge',
        'home.modes.review.title': 'Mode Révision',

        // Tests page
        'tests.title': 'Examens Pratiques AWS CCP',
        'tests.subtitle': 'Sélectionnez un examen pour commencer votre préparation.',
        'tests.challenge.title': 'Challenge Aléatoire',
        'tests.challenge.desc': '65 questions sélectionnées aléatoirement parmi tous les examens.',

        // Challenge page
        'challenge.title': 'Challenge Aléatoire AWS CCP',
        'challenge.desc': 'Testez vos connaissances avec 65 questions sélectionnées aléatoirement parmi plus de 1257 questions. Chaque tentative génère un test unique.',
        'challenge.info.random.title': 'Questions Aléatoires',
        'challenge.info.time.title': '110 Minutes',
        'challenge.info.score.title': 'Score Détaillé',
        'challenge.info.history.title': 'Historique',
        'challenge.stats.title': 'Vos statistiques de challenge',
        'challenge.stats.empty': 'Commence ton premier challenge pour voir tes statistiques ici.',
        'challenge.stats.attempted': 'Challenges tentés',
        'challenge.stats.avg': 'Score moyen',
        'challenge.stats.best': 'Meilleur score',
        'challenge.start_btn': 'DÉMARRER LE CHALLENGE',
        'challenge.tip': 'Conseil : Prévoyez un temps calme de 110 minutes sans interruption.',
        'challenge.recent.title': 'Derniers challenges',
        'challenge.recent.empty': 'Aucun challenge complété pour le moment.',

        // Review page
        'review.title': 'Mode Révision AWS CCP',
        'review.desc': 'Étudiez à votre rythme avec accès immédiat aux réponses et explications.',
        'review.select_exam': 'Sélectionnez un examen à réviser',

        // Test in progress
        'test.question_x_of_y': 'Question {n} sur {total}',
        'test.progress_percent': '{p}% complété',
        'test.instructions.title': 'Instructions',
        'test.instructions.1': 'Cliquez sur une réponse pour la sélectionner.',
        'test.instructions.2': 'Utilisez les boutons "Précédent" et "Suivant" pour naviguer.',
        'test.instructions.3': 'Le temps est enregistré automatiquement.',
        'test.instructions.4': 'Vous pouvez revenir à n\'importe quelle question avant de soumettre.',
        'test.submit_modal.title': 'Confirmer la soumission',
        'test.submit_modal.body': 'Êtes-vous sûr de vouloir soumettre votre test ?',
        'test.submit_modal.answered': 'Vous avez répondu à {n} questions sur {total}.',

        // Results
        'results.congrats': 'Félicitations !',
        'results.almost': 'Presque !',
        'results.passed_msg': 'Vous avez réussi le test !',
        'results.failed_msg': 'Continuez à pratiquer !',
        'results.correct': 'Questions correctes',
        'results.time_total': 'Temps total',
        'results.final_score': 'Score final',
        'results.date': 'Date du test',
        'results.see_details': 'Voir les détails',
        'results.back_to_exams': 'Retour aux examens',
        'results.your_answer': 'Votre réponse',
        'results.correct_answer': 'Réponse correcte',
        'results.not_answered': 'Non répondue',
        'results.explanation': 'Explication détaillée',
        'results.recommendations': 'Recommandations',

        // Footer
        'footer.tagline': 'Plateforme bilingue de préparation à la certification AWS Certified Cloud Practitioner.',
        'footer.developed_by': 'Développé dans le cadre de la formation Orange Digital Center Mali.',
        'footer.rights': 'Tous droits réservés',
        'footer.quick_links': 'Liens rapides',
        'footer.contact': 'Contact',

        // Language / theme
        'lang.toggle_to_en': 'Switch to English',
        'lang.toggle_to_fr': 'Passer en français',
        'theme.toggle': 'Basculer le thème'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.exams': 'Exams',
        'nav.challenge': 'Challenge',
        'nav.review': 'Review',
        'nav.stats': 'Statistics',

        // Common
        'common.questions': 'questions',
        'common.minutes': 'minutes',
        'common.start': 'Start',
        'common.start_exam': 'Start exam',
        'common.previous': 'Previous',
        'common.next': 'Next',
        'common.submit': 'Submit test',
        'common.cancel': 'Cancel',
        'common.confirm': 'Confirm',
        'common.retry': 'Retry',
        'common.close': 'Close',
        'common.multiple_choice': 'Multiple choice',
        'common.select_n': 'Select {n} answers from the options below.',
        'common.answered': 'Answered',
        'common.not_answered': 'Not answered',
        'common.current': 'Current',

        // Home
        'home.title': 'Prepare for the',
        'home.title_highlight': 'AWS Cloud Practitioner certification',
        'home.subtitle': 'Complete bilingual platform with over 1250 questions, timed exams, review mode and detailed progress tracking.',
        'home.cta_challenge': 'Start a Challenge',
        'home.cta_review': 'Review Mode',
        'home.cta_exams': 'View exams',
        'home.stats.exams': 'Full exams',
        'home.stats.questions': 'Questions available',
        'home.stats.per_challenge': 'Questions per challenge',
        'home.stats.bilingual': 'Bilingual FR/EN',
        'home.features.title': 'Why use our platform?',
        'home.features.timer.title': 'Smart timer',
        'home.features.timer.desc': 'Timed tests with automatic progress saving.',
        'home.features.random.title': 'Random questions',
        'home.features.random.desc': 'Unique challenge every attempt, 65 randomly selected questions.',
        'home.features.review.title': 'Review mode',
        'home.features.review.desc': 'Learn at your own pace with answers and explanations immediately available.',
        'home.features.bilingual.title': 'Bilingual',
        'home.features.bilingual.desc': 'Switch between French and English anytime, even mid-test.',
        'home.how.title': 'How it works',
        'home.how.step1.title': 'Choose your mode',
        'home.how.step1.desc': 'Timed test, random challenge or free review.',
        'home.how.step2.title': 'Study the questions',
        'home.how.step2.desc': 'Access over 1250 questions with detailed corrections.',
        'home.how.step3.title': 'Test your knowledge',
        'home.how.step3.desc': 'Take full exams under real conditions.',
        'home.how.step4.title': 'Improve',
        'home.how.step4.desc': 'Use your statistics to target your revisions.',
        'home.modes.title': 'Three learning modes',
        'home.modes.test.title': 'Test Mode',
        'home.modes.challenge.title': 'Challenge Mode',
        'home.modes.review.title': 'Review Mode',

        // Tests page
        'tests.title': 'AWS CCP Practice Exams',
        'tests.subtitle': 'Select an exam to start your preparation.',
        'tests.challenge.title': 'Random Challenge',
        'tests.challenge.desc': '65 questions randomly selected from all exams.',

        // Challenge page
        'challenge.title': 'AWS CCP Random Challenge',
        'challenge.desc': 'Test your knowledge with 65 questions randomly selected from over 1257 questions. Each attempt generates a unique test.',
        'challenge.info.random.title': 'Random Questions',
        'challenge.info.time.title': '110 Minutes',
        'challenge.info.score.title': 'Detailed Score',
        'challenge.info.history.title': 'History',
        'challenge.stats.title': 'Your challenge statistics',
        'challenge.stats.empty': 'Start your first challenge to see your stats here.',
        'challenge.stats.attempted': 'Challenges attempted',
        'challenge.stats.avg': 'Average score',
        'challenge.stats.best': 'Best score',
        'challenge.start_btn': 'START THE CHALLENGE',
        'challenge.tip': 'Tip: Plan 110 minutes of quiet time without interruptions.',
        'challenge.recent.title': 'Recent challenges',
        'challenge.recent.empty': 'No challenge completed yet.',

        // Review page
        'review.title': 'AWS CCP Review Mode',
        'review.desc': 'Study at your own pace with immediate access to answers and explanations.',
        'review.select_exam': 'Select an exam to review',

        // Test in progress
        'test.question_x_of_y': 'Question {n} of {total}',
        'test.progress_percent': '{p}% completed',
        'test.instructions.title': 'Instructions',
        'test.instructions.1': 'Click an answer to select it.',
        'test.instructions.2': 'Use "Previous" and "Next" to navigate.',
        'test.instructions.3': 'Time is recorded automatically.',
        'test.instructions.4': 'You can return to any question before submitting.',
        'test.submit_modal.title': 'Confirm submission',
        'test.submit_modal.body': 'Are you sure you want to submit your test?',
        'test.submit_modal.answered': 'You answered {n} out of {total} questions.',

        // Results
        'results.congrats': 'Congratulations!',
        'results.almost': 'Almost!',
        'results.passed_msg': 'You passed the test!',
        'results.failed_msg': 'Keep practicing!',
        'results.correct': 'Correct answers',
        'results.time_total': 'Total time',
        'results.final_score': 'Final score',
        'results.date': 'Test date',
        'results.see_details': 'See details',
        'results.back_to_exams': 'Back to exams',
        'results.your_answer': 'Your answer',
        'results.correct_answer': 'Correct answer',
        'results.not_answered': 'Not answered',
        'results.explanation': 'Detailed explanation',
        'results.recommendations': 'Recommendations',

        // Footer
        'footer.tagline': 'Bilingual platform to prepare for the AWS Certified Cloud Practitioner certification.',
        'footer.developed_by': 'Developed as part of the Orange Digital Center Mali training program.',
        'footer.rights': 'All rights reserved',
        'footer.quick_links': 'Quick links',
        'footer.contact': 'Contact',

        // Language / theme
        'lang.toggle_to_en': 'Switch to English',
        'lang.toggle_to_fr': 'Passer en français',
        'theme.toggle': 'Toggle theme'
    }
};

// Détecter la langue courante
function currentLang() {
    const stored = localStorage.getItem('lang');
    if (stored && translations[stored]) return stored;
    const nav = (navigator.language || 'fr').toLowerCase();
    return nav.startsWith('en') ? 'en' : 'fr';
}

// Traduire une clé, avec substitution de placeholders {name}
function t(key, params) {
    const lang = currentLang();
    let str = (translations[lang] && translations[lang][key])
           || (translations.fr && translations.fr[key])
           || key;
    if (params) {
        Object.keys(params).forEach(k => {
            str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), params[k]);
        });
    }
    return str;
}

// Appliquer les traductions aux éléments avec data-i18n
function applyI18n() {
    document.documentElement.lang = currentLang();
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
        // Format: "attr:cle,attr2:cle2"
        const spec = el.getAttribute('data-i18n-attr');
        spec.split(',').forEach(pair => {
            const [attr, key] = pair.split(':').map(s => s.trim());
            if (attr && key) el.setAttribute(attr, t(key));
        });
    });
    // Titre de la page
    const titleKey = document.documentElement.getAttribute('data-page-title-key');
    if (titleKey) document.title = t(titleKey) + ' — AWS CCP Practice';
    // Meta description dynamique
    const descKey = document.documentElement.getAttribute('data-page-desc-key');
    if (descKey) {
        let meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', t(descKey));
    }
}

// Récupérer les examens de la langue courante
function getExams() {
    if (typeof allExamsData !== 'undefined') {
        return allExamsData[currentLang()] || allExamsData.fr || [];
    }
    return typeof allExams !== 'undefined' ? allExams : [];
}

// Basculer de langue et recharger
function toggleLang() {
    const next = currentLang() === 'fr' ? 'en' : 'fr';
    localStorage.setItem('lang', next);
    window.location.reload();
}

// Appliquer dès que le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyI18n);
} else {
    applyI18n();
}
