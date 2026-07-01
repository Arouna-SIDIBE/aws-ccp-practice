# Contribuer à AWS CCP Practice

Merci de vouloir contribuer ! Ce projet est communautaire et gratuit — chaque
amélioration profite à toute la communauté francophone qui prépare la
certification AWS Certified Cloud Practitioner.

## Types de contribution acceptés

- Corrections de traduction ou de qualité linguistique
- Corrections de réponses erronées (avec source officielle AWS)
- Ajout de questions dans les examens existants ou nouveaux
- Corrections de bugs du site
- Nouvelles fonctionnalités (discute-en d'abord dans une issue)
- Améliorations de la documentation
- Améliorations d'accessibilité

## Prérequis

- Node.js 18+
- Un navigateur moderne
- Git

Installation :

    git clone https://github.com/Arouna-SIDIBE/aws-ccp-practice.git
    cd aws-ccp-practice
    npm run serve

## Corriger ou améliorer une question

Toutes les questions vivent dans `questions/fr/practice-exam-N.md`.

Règles :

- La réponse doit être justifiable par la documentation officielle AWS.
- Français correct : évite les traductions littérales.
- Ne modifie pas `questions/en/` : conservé pour créditer la source.
- Après modification, régénère `data.js` :

      npm run build
      npm run verify

- Inclus le `.md` modifié ET `data.js` dans le même commit.

## Corriger un bug ou ajouter une fonctionnalité

- Pour un bug : ouvre une issue si elle n'existe pas.
- Pour une feature : ouvre une issue de discussion avant de coder.

## Standards de code

- HTML sémantique, `lang="fr"`.
- CSS : réutilise les variables existantes (`--primary-color`, etc.).
- JavaScript vanilla, pas de nouvelle dépendance sans discussion.
- Sécurité : jamais de `innerHTML` avec du contenu non échappé.
- Accessibilité : `<button>` pour les actions cliquables, `aria-label` si
  nécessaire.

## Pull Request

1. Fork
2. Branche depuis `main` : `git checkout -b fix/description-courte`
3. Modifications
4. `npm run check`
5. Commit clair
6. Push et PR en remplissant le template

## Signaler un bug

Ouvre une issue en choisissant le template approprié.

## Code de conduite

Sois respectueux. Toute contribution constructive est bienvenue,
indépendamment du niveau technique.
