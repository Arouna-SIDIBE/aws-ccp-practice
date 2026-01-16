# AWS CCP Practice Platform

## 🌐 Vue d'ensemble

**AWS CCP Practice** est une plateforme web interactive de préparation à la certification **AWS Certified Cloud Practitioner**. Développée initialement pour accompagner ma formation à l'Orange Digital Center (ODC) du Mali, cette plateforme est désormais ouverte à tous les apprenants souhaitant tester et renforcer leurs connaissances sur AWS.

**Lien du site :** [https://arouna-sidibe.github.io/aws-ccp-practice/](https://arouna-sidibe.github.io/aws-ccp-practice/)

## 🎯 Objectifs du projet

### Objectif principal
- Fournir une plateforme complète de révision pour la certification AWS Cloud Practitioner
- Permettre aux apprenants de s'entraîner avec des questions pratiques similaires à l'examen réel

### Objectifs spécifiques
- Centraliser plus de 350 questions de pratique
- Offrir des tests chronométrés dans des conditions d'examen réalistes
- Permettre le suivi de la progression avec des statistiques détaillées
- Faciliter l'apprentissage avec des corrections et explications claires

## 📚 Source des questions

Les questions utilisées dans cette plateforme proviennent du repository GitHub suivant :
- **Repository source :** [https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes](https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes)
- **Auteur :** Kanani Nirav - Développeur Ruby on Rails passionné par le cloud AWS
- **Contenu :** 23 examens pratiques complets avec plus de 350 questions

### À propos de Kanani Nirav
```
Hi 👋, I'm Kanani Nirav
Professional Ruby On Rails Developer
Software Engineer 💻 Passionate about continuous growth and development.

🌱 I'm currently learning React JS and AWS Cloud
📝 I regularly write articles on https://medium.com/@kanani-nirav
📫 How to reach me: kananinirav0@gmail.com
```

## 🚀 Fonctionnalités principales

### 1. **Examens structurés**
- 23 examens pratiques complets
- 50 questions par examen (sauf exceptions)
- Chronomètre intégré (90 minutes par examen)
- Interface intuitive et responsive

### 2. **Mode Challenge**
- 65 questions sélectionnées aléatoirement parmi toutes les bases
- Génération unique à chaque tentative
- Temps recommandé : 110 minutes
- Simulation réaliste de l'examen final

### 3. **Système de suivi**
- Sauvegarde automatique de la progression
- Historique complet des tentatives
- Statistiques détaillées (score moyen, meilleur score, temps passé)
- Progression visualisable graphiquement

### 4. **Corrections détaillées**
- Affichage des réponses avec explications complètes
- Comparaison côte à côte : votre réponse vs réponse correcte
- Explications contextuelles pour chaque question
- Recommandations personnalisées basées sur le score

### 5. **Gestion du temps**
- Chronomètre intelligent avec sauvegarde automatique
- Temps par question et temps total
- Alertes de gestion du temps
- Pause/reprise possible

## 📱 Pages du site

### 🏠 **Accueil (`index.html`)**
- Présentation de la plateforme
- Statistiques globales (350+ questions, 7+ examens, etc.)
- Fonctionnalités principales expliquées
- Guide pas à pas pour commencer

### 📝 **Examens (`tests.html`)**
- Liste complète de tous les examens disponibles
- Informations sur chaque examen (nombre de questions, durée)
- Bouton de démarrage direct
- Historique des derniers tests passés

### ⚡ **Challenge (`challenge.html`)**
- Interface dédiée au mode challenge aléatoire
- Statistiques spécifiques au challenge
- Derniers challenges réalisés
- Bouton de démarrage avec recommandations

### 🧪 **Test en cours (`test.html`)**
- Interface complète de passage de test
- Affichage d'une question à la fois
- Navigation fluide entre les questions
- Sauvegarde automatique toutes les 30 secondes
- Grille de navigation visuelle
- Chronomètre en temps réel

### 📊 **Résultats (`results.html`)**
- Score final avec indicateur visuel
- Détail question par question
- Explications des réponses correctes/incorrectes
- Recommandations pour l'amélioration
- Options de reprise ou de nouveau test

## 🔧 Comment fonctionne la plateforme

### Architecture technique
```
Frontend : HTML5, CSS3, JavaScript vanilla
Stockage : localStorage pour la persistance des données
Styles : CSS personnalisé avec Font Awesome
Conversion : Node.js pour le traitement des questions
```

### Flux d'utilisation
1. **Sélection** : Choisir un examen spécifique ou le mode challenge
2. **Exécution** : Répondre aux questions dans le temps imparti
3. **Sauvegarde** : La progression est sauvegardée automatiquement
4. **Correction** : Obtenir un score détaillé avec explications
5. **Amélioration** : Utiliser les statistiques pour cibler les révisions

### Système de scoring
- **Score minimum** : 70% pour réussir (simulation de l'examen réel)
- **Calcul** : Nombre de réponses correctes / nombre total de questions
- **Historique** : Conservation des 50 derniers tests

## 🛠️ Installation et utilisation locale

### Prérequis
- Navigateur web moderne (Chrome, Firefox, Edge, Safari)
- Serveur web local (optionnel, peut fonctionner en file://)
- Node.js (seulement pour la conversion des questions)

### Installation simple
1. Téléchargez les fichiers du projet
2. Ouvrez `index.html` dans votre navigateur
3. Commencez immédiatement à vous entraîner

### Installation avancée (avec conversion)
```bash
# Clonez le repository
git clone https://github.com/Arouna-SIDIBE/aws-ccp-practice.git

# Accédez au dossier
cd aws-ccp-practice

# Installez les dépendances (si nécessaire)
npm install

# Convertissez les fichiers MD en JSON
node convert.js

# Ouvrez index.html dans votre navigateur
```

## 🔄 Conversion des questions

### Processus de conversion
Le système utilise un script Node.js (`convert.js`) pour transformer les fichiers Markdown en JSON utilisable par l'application.

### Étapes de conversion
1. **Lecture** : Lecture de tous les fichiers `.md` du dossier `questions/`
2. **Parsing** : Extraction structurée des questions, options et réponses
3. **Nettoyage** : Suppression des balises HTML, formatage uniforme
4. **Génération** : Création du fichier `data.js` avec toutes les données

### Exécution de la conversion
```bash
# Positionnez-vous dans le dossier du projet
cd /chemin/vers/aws-ccp-practice

# Exécutez le script de conversion
node convert.js

# Résultat attendu
✅ CONVERSION TERMINÉE AVEC SUCCÈS !
📄 Fichier généré: data.js
📈 Taille du fichier: 450 KB
📊 23 examens convertis, 1150 questions totales
```

### Structure des fichiers MD source
```
# Practice Exam 1

1. Question text...
- A. Option A
- B. Option B
- C. Option C
- D. Option D

<details markdown=1>
<summary>Answer</summary>

Correct answer: A
Explanation: Detailed explanation here...
</details>
```

## 📁 Structure du projet

```
aws-ccp-practice/
│
├── index.html          # Page d'accueil
├── tests.html          # Liste des examens
├── test.html           # Interface de test
├── results.html        # Page des résultats
├── challenge.html      # Page du challenge
│
├── styles.css          # Feuille de style principale
├── script.js           # Logique JavaScript principale
├── data.js             # Questions générées (auto-généré)
├── convert.js          # Script de conversion
│
├── questions/          # Dossier des questions source
│   ├── practice-exam-1.md
│   ├── practice-exam-2.md
│   └── ...
│
├── README.md           # Ce fichier
└── (autres assets si nécessaires)
```

## 🎨 Technologies utilisées

- **HTML5** : Structure sémantique et accessibilité
- **CSS3** : Styles modernes avec variables CSS et flexbox/grid
- **JavaScript ES6+** : Logique métier et interactions
- **Font Awesome** : Icônes et éléments visuels
- **localStorage API** : Persistance des données côté client
- **Node.js** : Conversion des données (côté développement)

## 📊 Statistiques du projet

- **23** examens pratiques complets
- **350+** questions disponibles
- **65** questions par challenge aléatoire
- **90** minutes par examen standard
- **110** minutes pour le challenge
- **100%** des questions avec corrections détaillées

## 👨‍💻 Contexte de développement

### Formation Orange Digital Center (ODC) Mali
Ce projet a été initié dans le cadre de ma formation en cloud computing à l'ODC Mali, avec pour objectif initial de créer un outil personnel de révision pour la certification AWS Cloud Practitioner.

### Évolution du projet
1. **Phase 1** : Outil personnel de révision
2. **Phase 2** : Plateforme web interactive
3. **Phase 3** : Ouverture à la communauté

### Valeur ajoutée
- **Pour les apprenants** : Accès gratuit à des centaines de questions pratiques
- **Pour la communauté** : Contribution à l'écosystème éducatif AWS
- **Pour les formateurs** : Outil complémentaire pour les formations

## 🤝 Contribution

### Amélioration des questions
Si vous trouvez des erreurs ou souhaitez ajouter des questions :
1. Modifiez les fichiers Markdown dans le dossier `questions/`
2. Exécutez `node convert.js` pour regénérer `data.js`
3. Testez les changements

### Développement
Les contributions au code sont les bienvenues :
1. Forkez le repository
2. Créez une branche pour votre fonctionnalité
3. Soumettez une pull request

### Signalement de bugs
Utilisez les issues GitHub pour signaler tout problème rencontré.

## 📝 Licence et attribution

### Questions
Les questions sont utilisées avec reconnaissance depuis le repository de [Kanani Nirav](https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes).

### Code
Le code de cette plateforme est ouvert et peut être utilisé pour des projets éducatifs.

### Attribution
Si vous utilisez ce projet, merci de mentionner :
- La source des questions : Kanani Nirav
- Ce projet : AWS CCP Practice by Arouna SIDIBE

## 📞 Contact et support

Pour toute question, suggestion ou problème :
- **GitHub Issues** : [https://github.com/Arouna-SIDIBE/aws-ccp-practice/issues](https://github.com/Arouna-SIDIBE/aws-ccp-practice/issues)
- **Email** : [arousidibe20@gmail.com](mailto:arousidibe20@gmail.com)

## 🌟 Remerciements

- **Kanani Nirav** pour le partage de ses notes et questions AWS
- **Orange Digital Center Mali** pour la formation et l'inspiration
- **La communauté AWS** pour les ressources et le support
- **Tous les contributeurs** qui améliorent cette plateforme

---

**🚀 Prêt à réussir votre certification AWS Cloud Practitioner ?**

[Commencer l'entraînement maintenant →](https://arouna-sidibe.github.io/aws-ccp-practice/)

*Bonne chance pour votre préparation ! ☁️🎯*