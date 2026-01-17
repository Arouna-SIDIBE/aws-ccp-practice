---
layout: exam
---

# Examen de pratique 19

1. Quelle offre AWS permet aux clients de trouver, acheter et démarrer immédiatement des solutions logicielles dans leur environnement AWS ?
    - A. AWS Config
    - B. AWS OpsWorks
    - C. AWS SDK
    - D. AWS Marketplace

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Marketplace** : Plateforme où les clients peuvent trouver, acheter et déployer rapidement des logiciels tiers qui s'exécutent sur AWS.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Config** : Service d'audit de configuration.
      - **B. AWS OpsWorks** : Service de gestion de configuration.
      - **C. AWS SDK** : Kits de développement logiciel pour intégrer AWS dans des applications.
    </details>

2. Quel service de mise en réseau AWS permet à une entreprise de créer un réseau virtuel au sein d'AWS ?
    - A. AWS Config
    - B. Amazon Route 53
    - C. AWS Direct Connect
    - D. Amazon Virtual Private Cloud (Amazon VPC)

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon Virtual Private Cloud (Amazon VPC)** : Permet de provisionner une section isolée du cloud AWS où vous pouvez lancer des ressources dans un réseau virtuel que vous définissez.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Config** : Service d'audit de configuration.
      - **B. Amazon Route 53** : Service DNS.
      - **C. AWS Direct Connect** : Connexion réseau dédiée entre votre centre de données et AWS.
    </details>

3. Lequel des éléments suivants est de la responsabilité d'AWS selon le modèle de responsabilité partagée ?
    - A. Configurer des applications tierces
    - B. Maintenir le matériel physique
    - C. Sécuriser l'accès aux applications et aux données
    - D. Gérer des Amazon Machine Images (AMIs) personnalisées

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Maintenir le matériel physique** : AWS est responsable de l'infrastructure physique sous-jacente.
    - **Autres options incorrectes** ❌ :
      - **A. Configurer des applications tierces** : Responsabilité du client.
      - **C. Sécuriser l'accès aux applications et aux données** : Partagé, mais principalement client.
      - **D. Gérer des Amazon Machine Images (AMIs) personnalisées** : Responsabilité du client.
    </details>

4. Quel composant de l'infrastructure globale d'AWS Amazon CloudFront utilise-t-il pour assurer une livraison à faible latence ?
    - A. Régions AWS
    - B. Emplacements périphériques AWS
    - C. Zones de disponibilité AWS
    - D. Amazon Virtual Private Cloud (Amazon VPC)

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Emplacements périphériques AWS** : CloudFront utilise des edge locations répartis dans le monde entier pour mettre en cache le contenu et le servir avec une faible latence.
    - **Autres options incorrectes** ❌ :
      - **A. Régions AWS** : Pour le déploiement de ressources principales.
      - **C. Zones de disponibilité AWS** : Pour la haute disponibilité au sein d'une région.
      - **D. Amazon Virtual Private Cloud (Amazon VPC)** : Pour les réseaux privés virtuels.
    </details>

5. Comment un administrateur système peut-il ajouter une couche supplémentaire de sécurité de connexion à la console de gestion AWS d'un utilisateur ?
    - A. Utiliser AWS Cloud Directory
    - B. Auditer les rôles AWS Identity and Access Management (IAM)
    - C. Activer l'authentification multi-facteurs
    - D. Activer AWS CloudTrail

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Activer l'authentification multi-facteurs** : MFA ajoute une deuxième couche d'authentification pour sécuriser l'accès à la console.
    - **Autres options incorrectes** ❌ :
      - **A. Utiliser AWS Cloud Directory** : Service d'annuaire managé, pas pour l'authentification console.
      - **B. Auditer les rôles AWS IAM** : Pour la gouvernance, pas pour l'authentification supplémentaire.
      - **D. Activer AWS CloudTrail** : Pour l'audit des appels d'API, pas pour l'authentification.
    </details>

6. Quel service peut identifier l'utilisateur qui a effectué l'appel API lorsqu'une instance Amazon Elastic Compute Cloud (Amazon EC2) est terminée ?
    - A. Amazon CloudWatch
    - B. AWS CloudTrail
    - C. AWS X-Ray
    - D. AWS Identity and Access Management (AWS IAM)

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS CloudTrail** : Journalise tous les appels d'API, y compris qui a terminé une instance EC2.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon CloudWatch** : Service de surveillance, pas d'audit d'API.
      - **C. AWS X-Ray** : Service de traçage d'applications.
      - **D. AWS Identity and Access Management (AWS IAM)** : Gère les identités et permissions, mais ne journalise pas les actions.
    </details>

7. Quel service utiliseriez-vous pour envoyer des alertes basées sur des alarmes Amazon CloudWatch ?
    - A. Amazon Simple Notification Service (Amazon SNS)
    - B. AWS CloudTrail
    - C. AWS Trusted Advisor
    - D. Amazon Route 53

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon Simple Notification Service (Amazon SNS)** : Permet d'envoyer des notifications (e-mails, SMS, etc.) déclenchées par des alarmes CloudWatch.
    - **Autres options incorrectes** ❌ :
      - **B. AWS CloudTrail** : Service de journalisation d'API.
      - **C. AWS Trusted Advisor** : Service de recommandations.
      - **D. Amazon Route 53** : Service DNS.
    </details>

8. Où un client peut-il trouver des informations sur les actions interdites sur l'infrastructure AWS ?
    - A. AWS Trusted Advisor
    - B. AWS Identity and Access Management (IAM)
    - C. AWS Billing Console
    - D. Politique d'utilisation acceptable d'AWS

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Politique d'utilisation acceptable d'AWS** : Document officiel qui décrit les utilisations autorisées et interdites des services AWS.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Trusted Advisor** : Fournit des recommandations d'optimisation.
      - **B. AWS Identity and Access Management (IAM)** : Gère les accès, mais ne liste pas les actions interdites.
      - **C. AWS Billing Console** : Pour la facturation.
    </details>

9. Lequel des éléments suivants est un exemple de comment le passage au cloud AWS réduit les coûts initiaux ?
    - A. En remplaçant de grands coûts variables par des investissements en capital plus faibles
    - B. En remplaçant de grands investissements en capital par des coûts variables plus faibles
    - C. En permettant le provisionnement du calcul et du stockage à un niveau fixe pour répondre à la demande de pointe
    - D. En remplaçant la mise à l'échelle répétée des serveurs virtuels par un modèle à échelle fixe plus simple

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. En remplaçant de grands investissements en capital par des coûts variables plus faibles** : Passage d'un modèle CapEx (investissement) à un modèle OpEx (dépenses opérationnelles) basé sur l'utilisation.
    - **Autres options incorrectes** ❌ :
      - **A. En remplaçant de grands coûts variables par des investissements en capital plus faibles** : C'est l'inverse du modèle cloud.
      - **C. En permettant le provisionnement du calcul et du stockage à un niveau fixe pour répondre à la demande de pointe** : Cela entraînerait du gaspillage.
      - **D. En remplaçant la mise à l'échelle répétée des serveurs virtuels par un modèle à échelle fixe plus simple** : Non, le cloud permet une mise à l'échelle élastique.
    </details>

10. Lors de la conception d'une application web typique à trois niveaux, quels services et/ou fonctionnalités AWS améliorent la disponibilité et réduisent l'impact des défaillances ? (Choisissez deux.)
    - A. AWS Auto Scaling pour les instances Amazon EC2
    - B. Les ACL de sous-réseau Amazon VPC pour vérifier l'état de santé d'un service
    - C. Des ressources distribuées sur plusieurs zones de disponibilité
    - D. AWS Server Migration Service (AWS SMS) pour déplacer des instances Amazon EC2 dans une autre région
    - E. Des ressources distribuées sur plusieurs points de présence AWS

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A, C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS Auto Scaling pour les instances Amazon EC2** : Ajuste automatiquement le nombre d'instances pour maintenir la disponibilité.
      - **C. Des ressources distribuées sur plusieurs zones de disponibilité** : Protège contre les défaillances d'une zone.
    - **Autres options incorrectes** ❌ :
      - **B. Les ACL de sous-réseau Amazon VPC pour vérifier l'état de santé d'un service** : Les ACL filtrent le trafic, ne vérifient pas la santé.
      - **D. AWS Server Migration Service (AWS SMS) pour déplacer des instances Amazon EC2 dans une autre région** : Pour la migration, pas pour la haute disponibilité en temps réel.
      - **E. Des ressources distribuées sur plusieurs points de présence AWS** : Les points de présence sont pour CloudFront (CDN), pas pour l'exécution d'applications complètes.
    </details>

11. Quel principe de conception cloud s'aligne sur les meilleures pratiques du cloud AWS ?
    - A. Créer des dépendances fixes entre les composants d'application
    - B. Agréger les services sur une seule instance
    - C. Déployer des applications dans une seule zone de disponibilité
    - D. Distribuer la charge de calcul sur plusieurs ressources

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Distribuer la charge de calcul sur plusieurs ressources** : Permet d'utiliser l'élasticité et d'éviter les points de défaillance uniques.
    - **Autres options incorrectes** ❌ :
      - **A. Créer des dépendances fixes entre les composants d'application** : Mauvaise pratique ; il faut un couplage lâche.
      - **B. Agréger les services sur une seule instance** : Mauvaise pratique ; cela crée un point de défaillance unique.
      - **C. Déployer des applications dans une seule zone de disponibilité** : Mauvaise pratique pour la haute disponibilité.
    </details>

12. Lesquelles des pratiques suivantes sont recommandées pour gérer les utilisateurs IAM ? (Choisissez deux.)
    - A. Exiger que les utilisateurs IAM changent leurs mots de passe après une période spécifiée
    - B. Empêcher les utilisateurs IAM de réutiliser d'anciens mots de passe
    - C. Recommander d'utiliser le même mot de passe sur AWS et d'autres sites
    - D. Exiger que les utilisateurs IAM stockent leurs mots de passe en texte brut
    - E. Désactiver l'authentification multi-facteurs (MFA) pour les utilisateurs IAM

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A, B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. Exiger que les utilisateurs IAM changent leurs mots de passe après une période spécifiée** : Meilleure pratique de sécurité.
      - **B. Empêcher les utilisateurs IAM de réutiliser d'anciens mots de passe** : Meilleure pratique de sécurité.
    - **Autres options incorrectes** ❌ :
      - **C. Recommander d'utiliser le même mot de passe sur AWS et d'autres sites** : Très mauvaise pratique.
      - **D. Exiger que les utilisateurs IAM stockent leurs mots de passe en texte brut** : Très mauvaise pratique.
      - **E. Désactiver l'authentification multi-facteurs (MFA) pour les utilisateurs IAM** : Mauvaise pratique ; il faut activer MFA.
    </details>

13. Une entreprise migre de centres de données sur site vers le cloud AWS et recherche une aide pratique pour le projet. <br/> Comment l'entreprise peut-elle obtenir ce support ? (Choisissez deux.)
    - A. Demander un devis à l'équipe AWS Marketplace pour effectuer une migration dans le compte AWS de l'entreprise.
    - B. Contacter AWS Support et ouvrir un cas d'assistance
    - C. Utiliser AWS Professional Services pour fournir des conseils et mettre en place une AWS Landing Zone dans le compte AWS de l'entreprise
    - D. Sélectionner un partenaire de l'AWS Partner Network (APN) pour aider à la migration
    - E. Utiliser Amazon Connect pour créer une nouvelle demande de proposition (RFP) pour une assistance experte dans la migration vers le cloud AWS.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C, D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **C. Utiliser AWS Professional Services** : Équipe de consultants AWS qui peut aider à la migration.
      - **D. Sélectionner un partenaire de l'AWS Partner Network (APN)** : Partenaires certifiés qui peuvent fournir des services de migration.
    - **Autres options incorrectes** ❌ :
      - **A. Demander un devis à l'équipe AWS Marketplace** : Marketplace est pour l'achat de logiciels, pas pour les services de migration.
      - **B. Contacter AWS Support et ouvrir un cas d'assistance** : Support technique, mais pas nécessairement pour une migration complète.
      - **E. Utiliser Amazon Connect** : Service de centre de contact, pas pour la migration.
    </details>

14. Comment l'équipe AWS Enterprise Support Concierge aide-t-elle les utilisateurs ?
    - A. Support au développement d'applications
    - B. Conseils architecturaux
    - C. Réponses aux questions de facturation et de compte
    - D. Réponses aux questions concernant les cas de support technique

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Réponses aux questions de facturation et de compte** : Le service Concierge du plan Enterprise fournit une assistance personnalisée pour la facturation et les comptes.
    - **Autres options incorrectes** ❌ :
      - **A. Support au développement d'applications** : Non, ce n'est pas le rôle principal.
      - **B. Conseils architecturaux** : Fournis par les Technical Account Managers (TAM) ou les Solutions Architects.
      - **D. Réponses aux questions concernant les cas de support technique** : Géré par le support technique standard.
    </details>

15. Une application conçue pour s'étendre sur plusieurs zones de disponibilité est décrite comme :
    - A. étant hautement disponible
    - B. ayant une portée globale
    - C. utilisant une économie d'échelle
    - D. ayant une élasticité

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. étant hautement disponible** : Le déploiement multi-AZ augmente la disponibilité en tolérant les défaillances d'une zone.
    - **Autres options incorrectes** ❌ :
      - **B. ayant une portée globale** : Cela nécessiterait un déploiement multi-régions.
      - **C. utilisant une économie d'échelle** : Réduction des coûts grâce au volume, pas lié au multi-AZ.
      - **D. ayant une élasticité** : Capacité à s'adapter à la charge, pas directement lié au multi-AZ.
    </details>

16. Un nouveau service utilisant AWS doit être hautement disponible. Cependant, en raison d'exigences réglementaires, toutes ses instances Amazon EC2 doivent être situées dans une seule zone géographique. <br/> Selon les meilleures pratiques, pour répondre à ces exigences, les instances EC2 doivent être placées dans au moins deux :
    - A. Régions AWS
    - B. Zones de disponibilité
    - C. Sous-réseaux
    - D. Groupes de placement

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Zones de disponibilité** : Les AZ sont des emplacements distincts au sein d'une même région, permettant la haute disponibilité tout en restant dans la même zone géographique.
    - **Autres options incorrectes** ❌ :
      - **A. Régions AWS** : Différentes régions sont géographiquement distinctes, ce qui violerait l'exigence.
      - **C. Sous-réseaux** : Peuvent être dans la même AZ, donc ne fournissent pas de redondance.
      - **D. Groupes de placement** : Pour la proximité réseau ou la partition, pas pour la haute disponibilité.
    </details>

17. Quel outil AWS est utilisé pour comparer le coût d'exécution d'une application sur site à celui de son exécution dans le cloud AWS ?
    - A. AWS Trusted Advisor
    - B. AWS Simple Monthly Calculator
    - C. AWS Pricing Calculator
    - D. Cost Explorer

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Pricing Calculator** : Anciennement TCO Calculator, il permet d'estimer les économies lors de la migration vers AWS.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Trusted Advisor** : Fournit des recommandations d'optimisation.
      - **B. AWS Simple Monthly Calculator** : Pour estimer les coûts AWS, pas pour comparer avec sur site.
      - **D. Cost Explorer** : Pour analyser les coûts AWS historiques.
    </details>

18. Une entreprise a plusieurs comptes AWS au sein d'AWS Organizations et veut appliquer l'avantage des instances réservées Amazon EC2 à un seul compte. <br/> Quelle action doit être entreprise ?
    - A. Acheter les instances réservées depuis le compte payeur maître et désactiver le partage des instances réservées.
    - B. Activer les alertes de facturation dans la console AWS Billing and Cost Management.
    - C. Acheter les instances réservées dans des comptes liés individuels et désactiver le partage des instances réservées au niveau du payeur.
    - D. Activer le partage des instances réservées dans la console AWS Billing and Cost Management.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Acheter les instances réservées depuis le compte payeur maître et désactiver le partage des instances réservées.** : Par défaut, les RI sont partagées dans une organisation. Pour les limiter à un compte, il faut désactiver le partage.
    - **Autres options incorrectes** ❌ :
      - **B. Activer les alertes de facturation** : Sans rapport avec le partage des RI.
      - **C. Acheter les instances réservées dans des comptes liés individuels** : Si le partage est activé, elles seront partagées. De plus, l'achat depuis le compte payeur est recommandé.
      - **D. Activer le partage des instances réservées** : Cela permettrait le partage, pas la restriction.
    </details>

19. Quelle situation doit être signalée à l'équipe AWS Abuse ?
    - A. Une zone de disponibilité a une interruption de service
    - B. Une tentative d'intrusion est faite à partir d'une adresse IP AWS
    - C. Un utilisateur a du mal à accéder à un bucket Amazon S3 depuis une adresse IP AWS
    - D. Un utilisateur a besoin de changer de méthode de paiement en raison d'une compromission

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Une tentative d'intrusion est faite à partir d'une adresse IP AWS** : L'équipe Abuse traite les utilisations malveillantes des ressources AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Une zone de disponibilité a une interruption de service** : À surveiller via le tableau de bord d'état AWS.
      - **C. Un utilisateur a du mal à accéder à un bucket Amazon S3 depuis une adresse IP AWS** : Problème de configuration ou de réseau, pas nécessairement un abus.
      - **D. Un utilisateur a besoin de changer de méthode de paiement en raison d'une compromission** : Contacter le support AWS.
    </details>

20. Une entreprise prévoit de lancer un site de commerce électronique dans une seule région AWS pour une base d'utilisateurs mondiale. <br/> Quels services AWS permettront à l'entreprise d'atteindre les utilisateurs et de fournir une faible latence et des vitesses de transfert élevées ? (Choisissez deux.)
    - A. Application Load Balancer
    - B. AWS Global Accelerator
    - C. AWS Direct Connect
    - D. Amazon CloudFront
    - E. AWS Lambda

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B, D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. AWS Global Accelerator** : Améliore la disponibilité et les performances en utilisant le réseau mondial d'AWS.
      - **D. Amazon CloudFront** : CDN qui diffuse le contenu depuis des edge locations proches des utilisateurs.
    - **Autres options incorrectes** ❌ :
      - **A. Application Load Balancer** : Répartit le trafic au sein d'une région, pas global.
      - **C. AWS Direct Connect** : Connexion dédiée entre le centre de données et AWS, pas pour les utilisateurs finaux.
      - **E. AWS Lambda** : Service de calcul serverless, pas pour la diffusion de contenu.
    </details>

21. Quel service ou ressource AWS est serverless ?
    - A. AWS Lambda
    - B. Instances Amazon EC2
    - C. Amazon Lightsail
    - D. Amazon ElastiCache

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Lambda** : Exécute du code sans provisionner ni gérer des serveurs.
    - **Autres options incorrectes** ❌ :
      - **B. Instances Amazon EC2** : Serveurs virtuels à gérer.
      - **C. Amazon Lightsail** : Serveurs privés virtuels (VPS) gérés.
      - **D. Amazon ElastiCache** : Service de cache managé, mais nécessite la gestion des nœuds de cache.
    </details>

22. Lesquels des éléments suivants sont des composants d'Amazon VPC ? (Choisissez deux.)
    - A. Objets
    - B. Sous-réseaux
    - C. Buckets
    - D. Passerelles Internet
    - E. Clé d'accès

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B, D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. Sous-réseaux** : Division d'un VPC en segments IP.
      - **D. Passerelles Internet** : Permet à un VPC de se connecter à Internet.
    - **Autres options incorrectes** ❌ :
      - **A. Objets** : Terme associé à S3, pas à VPC.
      - **C. Buckets** : Conteneurs S3, pas VPC.
      - **E. Clé d'accès** : Identifiants IAM, pas composant VPC.
    </details>

23. AWS Budgets peut être utilisé pour :
    - A. empêcher un utilisateur donné de créer une ressource
    - B. envoyer une alerte lorsque l'utilisation des instances réservées tombe en dessous d'un certain pourcentage
    - C. définir des limites de ressources dans les comptes AWS pour éviter les dépenses excessives
    - D. diviser une facture AWS sur plusieurs formes de paiement

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. définir des limites de ressources dans les comptes AWS pour éviter les dépenses excessives** : AWS Budgets permet de définir des budgets et des alertes pour contrôler les coûts.
    - **Autres options incorrectes** ❌ :
      - **A. empêcher un utilisateur donné de créer une ressource** : C'est le rôle des politiques IAM ou SCP.
      - **B. envoyer une alerte lorsque l'utilisation des instances réservées tombe en dessous d'un certain pourcentage** : AWS Budgets peut alerter sur les coûts, mais pas spécifiquement sur l'utilisation des RI.
      - **D. diviser une facture AWS sur plusieurs formes de paiement** : Non, cela se fait via les paramètres de facturation.
    </details>

24. Lesquels des éléments suivants améliorent la sécurité d'accès à la console de gestion AWS ? (Choisissez deux.)
    - A. AWS Secrets Manager
    - B. AWS Certificate Manager
    - C. AWS Multi-Factor Authentication (AWS MFA)
    - D. Groupes de sécurité
    - E. Politiques de mots de passe

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C, E

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **C. AWS Multi-Factor Authentication (AWS MFA)** : Ajoute une deuxième couche d'authentification.
      - **E. Politiques de mots de passe** : Exigent des mots de passe forts et leur rotation.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Secrets Manager** : Gère les secrets (mots de passe, clés API), pas l'accès console.
      - **B. AWS Certificate Manager** : Gère les certificats SSL/TLS.
      - **D. Groupes de sécurité** : Pare-feu pour les instances EC2, pas pour la console.
    </details>

25. Les vérifications d'AWS Trusted Advisor incluent des recommandations concernant lesquels des éléments suivants ? (Choisissez deux.)
    - A. Informations sur les permissions des buckets Amazon S3
    - B. Pannes de service AWS
    - C. Authentification multi-facteurs activée sur l'utilisateur racine du compte AWS
    - D. Correctifs logiciels disponibles
    - E. Nombre d'utilisateurs dans le compte

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A, C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. Informations sur les permissions des buckets Amazon S3** : Vérifie les buckets publics.
      - **C. Authentification multi-facteurs activée sur l'utilisateur racine du compte AWS** : Recommande d'activer MFA.
    - **Autres options incorrectes** ❌ :
      - **B. Pannes de service AWS** : Non, c'est le rôle du tableau de bord d'état AWS.
      - **D. Correctifs logiciels disponibles** : Non, c'est le rôle de l'utilisateur ou de services comme Systems Manager.
      - **E. Nombre d'utilisateurs dans le compte** : Non, ce n'est pas une vérification de Trusted Advisor.
    </details>

26. Quelles fonctions les utilisateurs peuvent-ils effectuer en utilisant AWS KMS ?
    - A. Créer et gérer des clés d'accès AWS pour l'utilisateur racine du compte AWS
    - B. Créer et gérer des clés d'accès AWS pour un utilisateur IAM d'un compte AWS
    - C. Créer et gérer des clés pour le chiffrement et le déchiffrement des données
    - D. Créer et gérer des clés pour l'authentification multi-facteurs

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Créer et gérer des clés pour le chiffrement et le déchiffrement des données** : AWS KMS est un service de gestion des clés de chiffrement.
    - **Autres options incorrectes** ❌ :
      - **A. Créer et gérer des clés d'accès AWS pour l'utilisateur racine** : Les clés d'accès sont gérées via IAM.
      - **B. Créer et gérer des clés d'accès AWS pour un utilisateur IAM** : Géré via IAM.
      - **D. Créer et gérer des clés pour l'authentification multi-facteurs** : Les dispositifs MFA sont gérés via IAM.
    </details>

27. Comment AWS Trusted Advisor fournit-il des conseils aux utilisateurs du cloud AWS ? (Choisissez deux.)
    - A. Il identifie les vulnérabilités logicielles dans les applications exécutées sur AWS
    - B. Il fournit une liste de recommandations d'optimisation des coûts basées sur l'utilisation actuelle d'AWS
    - C. Il détecte les vulnérabilités de sécurité potentielles causées par les paramètres de permissions sur les ressources du compte
    - D. Il corrige automatiquement les problèmes de sécurité potentiels causés par les paramètres de permissions sur les ressources du compte
    - E. Il fournit une alerte proactive chaque fois qu'une instance Amazon EC2 a été compromise

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B, C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. Il fournit une liste de recommandations d'optimisation des coûts basées sur l'utilisation actuelle d'AWS** : Trusted Advisor analyse l'utilisation et suggère des économies.
      - **C. Il détecte les vulnérabilités de sécurité potentielles causées par les paramètres de permissions sur les ressources du compte** : Vérifie les configurations de sécurité.
    - **Autres options incorrectes** ❌ :
      - **A. Il identifie les vulnérabilités logicielles dans les applications exécutées sur AWS** : Non, c'est le rôle d'Amazon Inspector.
      - **D. Il corrige automatiquement les problèmes de sécurité potentiels** : Non, il fournit des recommandations, ne corrige pas automatiquement.
      - **E. Il fournit une alerte proactive chaque fois qu'une instance Amazon EC2 a été compromise** : Non, c'est le rôle de services de détection de menaces comme GuardDuty.
    </details>

28. Lesquels des éléments suivants sont des avantages du cloud AWS ? (Choisissez deux.)
    - A. AWS gère la maintenance de l'infrastructure cloud
    - B. AWS gère la sécurité des applications construites sur AWS
    - C. AWS gère la planification de la capacité pour les serveurs physiques
    - D. AWS gère le développement d'applications sur AWS
    - E. AWS gère la planification des coûts pour les serveurs virtuels

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A, C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS gère la maintenance de l'infrastructure cloud** : AWS est responsable de l'infrastructure sous-jacente.
      - **C. AWS gère la planification de la capacité pour les serveurs physiques** : AWS gère la capacité des centres de données.
    - **Autres options incorrectes** ❌ :
      - **B. AWS gère la sécurité des applications construites sur AWS** : Non, c'est une responsabilité partagée ; le client sécurise ses applications.
      - **D. AWS gère le développement d'applications sur AWS** : Non, le client développe ses applications.
      - **E. AWS gère la planification des coûts pour les serveurs virtuels** : Non, le client est responsable de la gestion des coûts.
    </details>

29. Un utilisateur déploie une instance de base de données Amazon RDS dans plusieurs zones de disponibilité. <br/> Cette stratégie implique quel pilier du AWS Well-Architected Framework ?
    - A. Efficacité des performances
    - B. Fiabilité
    - C. Optimisation des coûts
    - D. Sécurité

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Fiabilité** : Le déploiement multi-AZ augmente la disponibilité et la tolérance aux pannes, ce qui relève de la fiabilité.
    - **Autres options incorrectes** ❌ :
      - **A. Efficacité des performances** : Concerne l'utilisation efficace des ressources.
      - **C. Optimisation des coûts** : Concerne la réduction des coûts.
      - **D. Sécurité** : Concerne la protection des informations.
    </details>

30. Quels services AWS fournissent une connectivité entre le cloud AWS et les ressources sur site ? (Choisissez deux.)
    - A. AWS VPN
    - B. Amazon Connect
    - C. Amazon Cognito
    - D. AWS Direct Connect
    - E. AWS Managed Services

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A, D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS VPN** : Établit une connexion sécurisée sur Internet.
      - **D. AWS Direct Connect** : Connexion réseau dédiée.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Connect** : Service de centre de contact.
      - **C. Amazon Cognito** : Service de gestion des identités utilisateur.
      - **E. AWS Managed Services** : Service de gestion d'infrastructure.
    </details>

31. Quel service AWS est utilisé pour payer les factures AWS, et surveiller l'utilisation et les coûts budgétaires ?
    - A. AWS Billing and Cost Management
    - B. Facturation consolidée
    - C. Amazon CloudWatch
    - D. Amazon QuickSight

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Billing and Cost Management** : Console pour gérer la facturation, les paiements et analyser les coûts.
    - **Autres options incorrectes** ❌ :
      - **B. Facturation consolidée** : Fonctionnalité d'AWS Organizations pour regrouper la facturation de plusieurs comptes.
      - **C. Amazon CloudWatch** : Service de surveillance.
      - **D. Amazon QuickSight** : Service de business intelligence.
    </details>

32. Quel élément de l'infrastructure globale d'AWS consiste en un ou plusieurs centres de données discrets, chacun avec une alimentation, une mise en réseau et une connectivité redondantes, hébergés dans des installations séparées ?
    - A. Régions AWS
    - B. Zones de disponibilité
    - C. Emplacements périphériques
    - D. Amazon CloudFront

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Zones de disponibilité** : Chaque AZ est un ou plusieurs centres de données avec redondance, situés dans des installations distinctes.
    - **Autres options incorrectes** ❌ :
      - **A. Régions AWS** : Regroupement de plusieurs AZ.
      - **C. Emplacements périphériques** : Points de présence pour CloudFront.
      - **D. Amazon CloudFront** : Service CDN.
    </details>

33. Quelle fonctionnalité d'Amazon VPC permet aux utilisateurs de capturer des informations sur le trafic IP qui atteint les instances Amazon EC2 ?
    - A. Groupes de sécurité
    - B. Interfaces réseau élastiques
    - C. ACL réseau
    - D. Journaux de flux VPC

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Journaux de flux VPC** : Capture des informations sur le trafic IP entrant et sortant des interfaces réseau.
    - **Autres options incorrectes** ❌ :
      - **A. Groupes de sécurité** : Pare-feu au niveau de l'instance.
      - **B. Interfaces réseau élastiques** : Cartes réseau virtuelles.
      - **C. ACL réseau** : Pare-feu au niveau du sous-réseau.
    </details>

34. Quel service AWS peut être utilisé pour mettre automatiquement à l'échelle une application vers le haut et vers le bas sans prendre de décisions de planification de capacité ?
    - A. Amazon AutoScaling
    - B. Amazon Redshift
    - C. AWS CloudTrail
    - D. AWS Lambda

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon AutoScaling** : Ajuste automatiquement le nombre d'instances EC2 en fonction de la demande.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Redshift** : Entrepôt de données.
      - **C. AWS CloudTrail** : Journalisation d'API.
      - **D. AWS Lambda** : Calcul serverless, mais ne met pas à l'échelle des applications traditionnelles de cette manière.
    </details>

35. Les utilisateurs d'AWS Enterprise Support ont accès à quel service ou fonctionnalité qui n'est pas disponible pour les utilisateurs ayant d'autres plans de support AWS ?
    - A. AWS Trusted Advisor
    - B. Cas de support AWS
    - C. Équipe Concierge
    - D. Amazon Connect

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Équipe Concierge** : Service dédié pour les questions de facturation et de compte, uniquement dans le plan Enterprise.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Trusted Advisor** : Disponible dans tous les plans (avec des fonctionnalités limitées dans Basic).
      - **B. Cas de support AWS** : Disponible dans tous les plans payants.
      - **D. Amazon Connect** : Service de centre de contact, pas lié au support.
    </details>

36. Une entreprise veut migrer une base de données MySQL vers AWS mais n'a pas le budget pour des administrateurs de base de données pour gérer les tâches de routine, y compris le provisionnement, l'application de correctifs et les sauvegardes. <br/> Quel service AWS prendra en charge ce cas d'utilisation ?
    - A. Amazon RDS
    - B. Amazon DynamoDB
    - C. Amazon DocumentDB
    - D. Amazon ElastiCache

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon RDS** : Service de base de données relationnelle managée qui automatise les tâches administratives pour MySQL.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon DynamoDB** : Base de données NoSQL, pas compatible MySQL.
      - **C. Amazon DocumentDB** : Base de données de documents compatible MongoDB, pas MySQL.
      - **D. Amazon ElastiCache** : Service de cache en mémoire, pas de base de données persistante.
    </details>

37. Une entreprise veut s'étendre d'une région AWS à une deuxième région AWS. <br/> Que doit faire l'entreprise pour commencer à supporter la nouvelle région ?
    - A. Contacter un gestionnaire de compte AWS pour signer un nouveau contrat
    - B. Déplacer une zone de disponibilité vers la nouvelle région
    - C. Commencer à déployer des ressources dans la deuxième région
    - D. Télécharger la console de gestion AWS pour la nouvelle région

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Commencer à déployer des ressources dans la deuxième région** : Les régions sont indépendantes ; il suffit de déployer des ressources dans la nouvelle région.
    - **Autres options incorrectes** ❌ :
      - **A. Contacter un gestionnaire de compte AWS pour signer un nouveau contrat** : Non, les régions sont incluses dans le même compte.
      - **B. Déplacer une zone de disponibilité vers la nouvelle région** : Impossible, les AZ sont fixes dans une région.
      - **D. Télécharger la console de gestion AWS pour la nouvelle région** : La console est unique et permet d'accéder à toutes les régions.
    </details>

38. Un utilisateur doit répondre à des exigences de conformité et de licence logicielles qui stipulent qu'une charge de travail doit être hébergée sur un serveur physique. <br/> Quelle option de tarification d'instance Amazon EC2 répondra à ces exigences ?
    - A. Hôtes dédiés
    - B. Instances dédiées
    - C. Instances Spot
    - D. Instances réservées

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Hôtes dédiés** : Serveurs physiques dédiés à votre usage, permettant d'utiliser des licences logicielles existantes (BYOL).
    - **Autres options incorrectes** ❌ :
      - **B. Instances dédiées** : Exécutées sur du matériel dédié, mais ne donnent pas un contrôle aussi granulaire que les hôtes dédiés.
      - **C. Instances Spot** : Peuvent être interrompues, pas adaptées aux exigences de licence.
      - **D. Instances réservées** : Modèle de facturation, pas un type d'hôte physique.
    </details>

39. Quels services AWS fourniront un moyen de générer des clés de chiffrement qui peuvent être utilisées pour chiffrer des données ? (Choisissez deux.)
    - A. Amazon Macie
    - B. AWS Certificate Manager
    - C. AWS Key Management Service (AWS KMS)
    - D. AWS Secrets Manager
    - E. AWS CloudHSM

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C, E

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **C. AWS Key Management Service (AWS KMS)** : Service managé pour créer et contrôler des clés de chiffrement.
      - **E. AWS CloudHSM** : Module de sécurité matériel (HSM) dédié pour la gestion des clés.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Macie** : Découverte et classification des données sensibles.
      - **B. AWS Certificate Manager** : Gère les certificats SSL/TLS.
      - **D. AWS Secrets Manager** : Gère les secrets (mots de passe, clés API), mais ne génère pas de clés de chiffrement.
    </details>

40. Une entreprise prévoit de migrer du sur site vers le cloud AWS. <br/> Quel outil ou service AWS fournit des rapports détaillés sur les économies de coûts estimées après la migration ?
    - A. AWS Total Cost of Ownership (TCO) Calculator
    - B. Cost Explorer
    - C. AWS Budgets
    - D. AWS Migration Hub

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Total Cost of Ownership (TCO) Calculator** : Estime les économies en comparant les coûts sur site aux coûts AWS.
    - **Autres options incorrectes** ❌ :
      - **B. Cost Explorer** : Analyse les coûts AWS historiques.
      - **C. AWS Budgets** : Définit des budgets et des alertes.
      - **D. AWS Migration Hub** : Suit la progression des migrations.
    </details>

41. Qu'est-ce qui peut aider à évaluer une application pour la migration vers le cloud ? (Choisissez deux.)
    - A. AWS Trusted Advisor
    - B. AWS Professional Services
    - C. AWS Systems Manager
    - D. AWS Partner Network (APN)
    - E. AWS Secrets Manager

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B, D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. AWS Professional Services** : Équipe de consultants AWS qui peut aider à l'évaluation.
      - **D. AWS Partner Network (APN)** : Partenaires certifiés qui fournissent des services d'évaluation et de migration.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Trusted Advisor** : Fournit des recommandations sur l'utilisation AWS, pas pour l'évaluation de migration.
      - **C. AWS Systems Manager** : Service de gestion des ressources.
      - **E. AWS Secrets Manager** : Gère les secrets.
    </details>

42. Quel service AWS aide les utilisateurs à répondre aux exigences contractuelles et réglementaires de conformité pour la sécurité des données en utilisant des appliances matérielles dédiées dans le cloud AWS ?
    - A. AWS Secrets Manager
    - B. AWS CloudHSM
    - C. AWS Key Management Service (AWS KMS)
    - D. AWS Directory Service

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS CloudHSM** : Fournit des modules de sécurité matériels (HSM) dédiés pour le stockage sécurisé des clés de chiffrement, répondant à des exigences de conformité strictes.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Secrets Manager** : Gère les secrets, mais pas avec des HSM dédiés.
      - **C. AWS Key Management Service (AWS KMS)** : Service managé de clés, mais pas avec des HSM dédiés.
      - **D. AWS Directory Service** : Service d'annuaire managé.
    </details>

43. Selon le modèle de responsabilité partagée, lesquels des éléments suivants sont gérés par le client ? (Choisissez deux.)
    - A. Désactivation des dispositifs de stockage physiques
    - B. Configuration des groupes de sécurité et des ACL
    - C. Gestion des correctifs du système d'exploitation d'une instance Amazon RDS
    - D. Contrôle de l'accès physique aux centres de données
    - E. Gestion des correctifs du système d'exploitation d'une instance Amazon EC2

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B, E

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. Configuration des groupes de sécurité et des ACL** : Le client configure les règles de pare-feu.
      - **E. Gestion des correctifs du système d'exploitation d'une instance Amazon EC2** : Le client est responsable du système d'exploitation invité sur EC2.
    - **Autres options incorrectes** ❌ :
      - **A. Désactivation des dispositifs de stockage physiques** : Responsabilité d'AWS.
      - **C. Gestion des correctifs du système d'exploitation d'une instance Amazon RDS** : AWS gère les correctifs du moteur de base de données et du système d'exploitation sous-jacent pour RDS.
      - **D. Contrôle de l'accès physique aux centres de données** : Responsabilité d'AWS.
    </details>

44. Quel service AWS est adapté à une charge de travail pilotée par des événements ?
    - A. Amazon EC2
    - B. AWS Elastic Beanstalk
    - C. AWS Lambda
    - D. Amazon Lumberyard

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Lambda** : Exécute du code en réponse à des événements (changements dans S3, messages dans SQS, etc.).
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EC2** : Serveurs virtuels, pas spécifiquement événementiel.
      - **B. AWS Elastic Beanstalk** : Service de déploiement d'applications.
      - **D. Amazon Lumberyard** : Moteur de jeu, sans rapport.
    </details>

45. Quelle est une proposition de valeur du cloud AWS ?
    - A. AWS est responsable de la sécurité dans le cloud AWS
    - B. Aucun contrat à long terme n'est requis
    - C. Provisionner de nouveaux serveurs en quelques jours
    - D. AWS gère les applications utilisateur dans le cloud AWS

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Aucun contrat à long terme n'est requis** : Modèle de paiement à l'usage sans engagement.
    - **Autres options incorrectes** ❌ :
      - **A. AWS est responsable de la sécurité dans le cloud AWS** : Partiellement, mais c'est une responsabilité partagée.
      - **C. Provisionner de nouveaux serveurs en quelques jours** : En quelques minutes, pas jours.
      - **D. AWS gère les applications utilisateur dans le cloud AWS** : Non, le client gère ses applications.
    </details>

46. Qu'est-ce qui caractérise la réplication inter-régions d'Amazon S3 ?
    - A. Les buckets S3 source et destination doivent avoir le versioning désactivé
    - B. Les buckets S3 source et destination ne peuvent pas être dans différentes régions AWS
    - C. Les buckets S3 configurés pour la réplication inter-régions peuvent être détenus par un seul compte AWS ou par des comptes différents
    - D. Le propriétaire du bucket S3 source doit avoir les régions AWS source et destination désactivées pour son compte

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Les buckets S3 configurés pour la réplication inter-régions peuvent être détenus par un seul compte AWS ou par des comptes différents** : La réplication peut être configurée entre buckets du même compte ou de comptes différents.
    - **Autres options incorrectes** ❌ :
      - **A. Les buckets S3 source et destination doivent avoir le versioning désactivé** : Faux, le versioning doit être activé.
      - **B. Les buckets S3 source et destination ne peuvent pas être dans différentes régions AWS** : Faux, c'est justement l'objet de la réplication inter-régions.
      - **D. Le propriétaire du bucket S3 source doit avoir les régions AWS source et destination désactivées pour son compte** : Faux, aucune désactivation de région n'est requise.
    </details>

47. De quoi un utilisateur est-il responsable lors de l'exécution d'une application dans le cloud AWS ?
    - A. Gestion du matériel physique
    - B. Mise à jour de l'hyperviseur sous-jacent
    - C. Fourniture d'une liste d'utilisateurs autorisés à accéder au centre de données
    - D. Gestion des mises à jour logicielles de l'application

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Gestion des mises à jour logicielles de l'application** : Le client est responsable de la gestion de son application et de ses mises à jour.
    - **Autres options incorrectes** ❌ :
      - **A. Gestion du matériel physique** : Responsabilité d'AWS.
      - **B. Mise à jour de l'hyperviseur sous-jacent** : Responsabilité d'AWS.
      - **C. Fourniture d'une liste d'utilisateurs autorisés à accéder au centre de données** : Responsabilité d'AWS.
    </details>

48. Une entreprise qui fait des affaires en ligne a besoin de livrer rapidement de nouvelles fonctionnalités de manière itérative, en minimisant le temps de mise sur le marché. <br/> Quelle caractéristique du cloud AWS peut fournir cela ?
    - A. Élasticité
    - B. Haute disponibilité
    - C. Agilité
    - D. Fiabilité

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Agilité** : Capacité à provisionner rapidement des ressources et à itérer rapidement.
    - **Autres options incorrectes** ❌ :
      - **A. Élasticité** : Capacité à s'adapter à la charge.
      - **B. Haute disponibilité** : Capacité à rester opérationnel.
      - **D. Fiabilité** : Capacité à fonctionner correctement et à résister aux défaillances.
    </details>

49. Quelles fonctionnalités ou services peuvent être utilisés pour surveiller les coûts et les dépenses d'un compte AWS ? (Choisissez deux.)
    - A. AWS Cost and Usage report
    - B. Pages produits AWS
    - C. AWS Simple Monthly Calculator
    - D. Alertes de facturation et alarmes Amazon CloudWatch
    - E. AWS Price List API

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A, D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS Cost and Usage report** : Rapport détaillé des coûts et de l'utilisation.
      - **D. Alertes de facturation et alarmes Amazon CloudWatch** : Permet de définir des alertes sur les coûts estimés.
    - **Autres options incorrectes** ❌ :
      - **B. Pages produits AWS** : Pour la documentation et les prix, pas pour la surveillance.
      - **C. AWS Simple Monthly Calculator** : Pour estimer les coûts futurs, pas surveiller les coûts actuels.
      - **E. AWS Price List API** : Pour obtenir les prix des services, pas pour la surveillance des coûts.
    </details>

50. Amazon Route 53 permet aux utilisateurs de :
    - A. chiffrer les données en transit
    - B. enregistrer des noms de domaine DNS
    - C. générer et gérer des certificats SSL
    - D. établir une connexion réseau dédiée à AWS

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. enregistrer des noms de domaine DNS** : Route 53 est un service DNS qui permet d'enregistrer des domaines.
    - **Autres options incorrectes** ❌ :
      - **A. chiffrer les données en transit** : C'est le rôle de services comme SSL/TLS ou VPN.
      - **C. générer et gérer des certificats SSL** : C'est le rôle d'AWS Certificate Manager.
      - **D. établir une connexion réseau dédiée à AWS** : C'est le rôle d'AWS Direct Connect.
    </details>