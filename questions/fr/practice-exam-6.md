---
layout: exam
---

# Examen de pratique 6

1. Laquelle des affirmations suivantes est vraie concernant les zones de disponibilité et les emplacements périphériques d'AWS ?
    - A. Les emplacements périphériques sont situés dans des zones de disponibilité distinctes à travers le monde pour servir les clients mondiaux.
    - B. Une zone de disponibilité existe au sein d'un emplacement périphérique pour distribuer du contenu mondialement avec une faible latence.
    - C. Une zone de disponibilité est un emplacement géographique où AWS fournit plusieurs emplacements périphériques physiquement séparés et isolés.
    - D. Une zone de disponibilité AWS est un emplacement isolé au sein d'une région AWS, tandis que les emplacements périphériques sont situés dans de multiples villes à travers le monde.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Une zone de disponibilité AWS est un emplacement isolé au sein d'une région AWS, tandis que les emplacements périphériques sont situés dans de multiples villes à travers le monde** : Une région AWS est une zone géographique distincte (comme Paris), qui contient plusieurs zones de disponibilité (AZ) isolées les unes des autres. Les emplacements périphériques (Edge Locations) sont des sites distincts, beaucoup plus nombreux et dispersés dans le monde, utilisés par CloudFront et Route 53 pour mettre en cache le contenu et réduire la latence.
    - **Autres options incorrectes** ❌ :
      - **A. Les emplacements périphériques sont situés dans des zones de disponibilité distinctes...** : Faux. Les emplacements périphériques sont des sites distincts, ils ne sont pas *dans* des zones de disponibilité.
      - **B. Une zone de disponibilité existe au sein d'un emplacement périphérique...** : Faux. C'est l'inverse : les zones de disponibilité sont des centres de données à grande échelle, tandis que les emplacements périphériques sont des sites de mise en cache plus petits.
      - **C. Une zone de disponibilité est un emplacement géographique où AWS fournit plusieurs emplacements périphériques...** : Faux. Une région AWS contient plusieurs AZ. Les emplacements périphériques sont indépendants des régions et AZ.
    </details>

2. Quelles fonctionnalités sont incluses dans le plan de support AWS Business ? (Choisissez DEUX)
    - A. Accès 24h/24 et 7j/7 au service client.
    - B. Accès aux ingénieurs du support cloud uniquement par e-mail pendant les heures de bureau.
    - C. Accès à la fonctionnalité Infrastructure Event Management (IEM) moyennant des frais supplémentaires.
    - D. Accès 24h/24 et 7j/7 à la fonctionnalité TAM.
    - E. Accès partiel aux vérifications de base de Trusted Advisor.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Accès 24h/24 et 7j/7 au service client** : Le plan Business Support offre un accès 24/7 au support client par téléphone, chat et e-mail.
      - **C. Accès à la fonctionnalité Infrastructure Event Management (IEM) moyennant des frais supplémentaires** : L'IEM est disponible en tant que service complémentaire payant pour les clients des plans Business et Enterprise.
    - **Autres options incorrectes** ❌ :
      - **B. Accès aux ingénieurs du support cloud uniquement par e-mail pendant les heures de bureau** : C'est la description du plan Developer Support.
      - **D. Accès 24h/24 et 7j/7 à la fonctionnalité TAM** : Le Technical Account Manager (TAM) est une fonctionnalité exclusive du plan Enterprise Support.
      - **E. Accès partiel aux vérifications de base de Trusted Advisor** : Le plan Business Support donne accès à l'ensemble des vérifications de Trusted Advisor (contrairement au plan Developer qui n'en a qu'un sous-ensemble).
    </details>

3. Une entreprise développe une application mobile et souhaite permettre aux utilisateurs d'utiliser leurs identités Amazon, Apple, Facebook ou Google pour s'authentifier à l'application. Quel service AWS l'entreprise doit-elle utiliser à cette fin ?
    - A. Amazon GuardDuty.
    - B. Amazon Personalize.
    - C. Amazon Cognito.
    - D. AWS IAM.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon Cognito** : Ce service fournit une authentification, une autorisation et une gestion des utilisateurs pour les applications web et mobiles. Il prend en charge la fédération d'identité avec des fournisseurs d'identité sociaux (Amazon, Facebook, Google, Apple) ainsi qu'avec SAML 2.0 et OpenID Connect.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon GuardDuty** : Service de détection de menaces intelligente qui surveille les activités malveillantes et les comportements non autorisés.
      - **B. Amazon Personalize** : Service de recommandation basé sur le machine learning, pas d'authentification.
      - **D. AWS IAM** : Service de gestion des identités et des accès pour les ressources AWS, mais il n'est pas conçu pour l'authentification des utilisateurs finaux d'une application mobile via des fournisseurs d'identité sociaux.
    </details>

4. Quel service AWS permet aux clients de créer un modèle qui définit de manière programmatique les politiques et configurations de toutes les ressources AWS sous forme de code, de sorte que le même modèle puisse être réutilisé entre plusieurs projets ?
    - A. AWS CloudFormation.
    - B. AWS Config.
    - C. AWS CloudTrail.
    - D. AWS Auto Scaling.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS CloudFormation** : C'est le service d'infrastructure as code (IaC) d'AWS. Il permet de modéliser, provisionner et gérer les ressources AWS et tierces via des modèles JSON ou YAML, qui peuvent être versionnés et réutilisés.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Config** : Service d'audit et d'évaluation de la configuration des ressources, pas de provisionnement.
      - **C. AWS CloudTrail** : Service de journalisation des appels d'API pour la gouvernance, la conformité et l'audit.
      - **D. AWS Auto Scaling** : Service pour ajuster automatiquement la capacité de calcul, pas pour modéliser l'ensemble de l'infrastructure.
    </details>

5. Lesquels des éléments suivants sont des avantages de l'utilisation d'AWS en tant que fournisseur de cloud computing ? (Choisissez DEUX)
    - A. Élimine le besoin de surveiller les serveurs et les applications.
    - B. Gère toutes les tâches de conformité et d'audit.
    - C. Fournit du matériel personnalisé pour répondre à toute spécification.
    - D. Élimine le besoin de deviner les besoins en capacité d'infrastructure.
    - E. Permet aux clients d'échanger leurs dépenses d'investissement (CapEx) contre des dépenses d'exploitation (OpEx).

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : D, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **D. Élimine le besoin de deviner les besoins en capacité d'infrastructure** : Grâce à l'élasticité du cloud, vous pouvez provisionner de la capacité en fonction de la demande, évitant ainsi le surapprovisionnement coûteux ou le sous-approvisionnement risqué.
      - **E. Permet aux clients d'échanger leurs dépenses d'investissement (CapEx) contre des dépenses d'exploitation (OpEx)** : Avec le cloud, vous évitez les investissements initiaux importants en matériel et payez uniquement pour ce que vous utilisez, transformant ainsi les coûts en dépenses opérationnelles variables.
    - **Autres options incorrectes** ❌ :
      - **A. Élimine le besoin de surveiller les serveurs et les applications** : Faux. La surveillance reste une responsabilité partagée. AWS surveille l'infrastructure sous-jacente, mais le client doit surveiller ses applications et systèmes d'exploitation.
      - **B. Gère toutes les tâches de conformité et d'audit** : Faux. AWS est responsable de la conformité *du* cloud (infrastructure), mais le client est responsable de la conformité *dans* le cloud (ses applications et données).
      - **C. Fournit du matériel personnalisé pour répondre à toute spécification** : Faux. AWS propose une gamme standardisée d'instances et de matériel. Pour des besoins très spécifiques, il existe des options comme les instances à accélération matérielle ou les hôtes dédiés, mais ce n'est pas une personnalisation complète sur mesure.
    </details>

6. Un client prévoit de migrer ses bases de données Microsoft SQL Server vers AWS. Quels services AWS le client peut-il utiliser pour exécuter sa base de données Microsoft SQL Server sur AWS ? (Choisissez DEUX)
    - A. AWS Fargate.
    - B. Amazon Elastic Compute Cloud.
    - C. Amazon RDS.
    - D. AWS Database Migration Service (DMS).
    - E. AWS Lambda.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : B, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Amazon Elastic Compute Cloud (EC2)** : Vous pouvez installer et exécuter votre propre instance de SQL Server sur une instance EC2, ce qui vous donne un contrôle total mais aussi la responsabilité de la gestion.
      - **C. Amazon RDS** : Amazon RDS propose une option managée pour SQL Server, où AWS gère les tâches administratives courantes (sauvegarde, correctifs, réplication).
    - **Autres options incorrectes** ❌ :
      - **A. AWS Fargate** : Service de calcul sans serveur pour les conteneurs. SQL Server peut être exécuté dans un conteneur, mais ce n'est pas l'option la plus courante ou managée spécifiquement pour SQL Server.
      - **D. AWS Database Migration Service (DMS)** : Service pour migrer des bases de données vers AWS, pas pour les exécuter en production de manière permanente.
      - **E. AWS Lambda** : Service de calcul sans serveur pour exécuter du code en réponse à des événements, pas pour héberger une base de données SQL Server.
    </details>

7. Quel service AWS peut effectuer des contrôles d'intégrité (health checks) sur les instances Amazon EC2 ?
    - A. AWS CloudFormation.
    - B. Amazon Route 53.
    - C. Amazon Chime.
    - D. Amazon Aurora.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon Route 53** : En tant que service DNS, Route 53 peut effectuer des contrôles d'intégrité sur des points de terminaison tels que des instances EC2, et router le trafic uniquement vers les instances saines.
    - **Autres options incorrectes** ❌ :
      - **A. AWS CloudFormation** : Service de provisionnement d'infrastructure, pas de surveillance d'intégrité.
      - **C. Amazon Chime** : Service de communication (visioconférence, chat), sans rapport.
      - **D. Amazon Aurora** : Service de base de données relationnelle.
    </details>

8. Une entreprise développe une application qui exploitera la reconnaissance faciale pour automatiser l'étiquetage des photos. Quel service AWS l'entreprise doit-elle utiliser pour la reconnaissance faciale ?
    - A. Amazon Comprehend.
    - B. AWS IAM.
    - C. Amazon Polly.
    - D. Amazon Rekognition.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon Rekognition** : Service de vision par ordinateur qui permet d'ajouter des fonctionnalités d'analyse d'images et de vidéos, y compris la détection et la reconnaissance de visages.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Comprehend** : Service de traitement du langage naturel (NLP) pour extraire des informations à partir de texte.
      - **B. AWS IAM** : Service de gestion des identités et des accès.
      - **C. Amazon Polly** : Service de synthèse vocale qui convertit le texte en parole réaliste.
    </details>

9. Lesquels des éléments suivants sont des exemples de bases de données managées par AWS ? (Choisissez DEUX)
    - A. Amazon Neptune.
    - B. Amazon CloudSearch.
    - C. Microsoft SQL Server sur Amazon EC2.
    - D. MySQL sur Amazon EC2.
    - E. Amazon RDS pour MySQL.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : A, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Amazon Neptune** : Base de données de graphe entièrement managée.
      - **E. Amazon RDS pour MySQL** : Version managée de MySQL via le service Amazon RDS.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon CloudSearch** : Service de recherche managé, mais pas traditionnellement classé comme une base de données de production transactionnelle.
      - **C. Microsoft SQL Server sur Amazon EC2** : Ce n'est pas un service managé par AWS ; le client est responsable de la gestion de la base de données sur l'instance EC2.
      - **D. MySQL sur Amazon EC2** : Même raison : auto-géré, non managé par AWS.
    </details>

10. Le workflow d'une entreprise nécessite d'effectuer périodiquement des traitements à grande échelle d'images et de vidéos. Le client cherche à minimiser les coûts et a déclaré que le temps nécessaire pour traiter ces travaux n'est pas critique, mais que la minimisation des coûts est le facteur le plus important dans la conception de la solution. Quelle classe d'instances EC2 est la plus adaptée à ce traitement ?
    - A. Instances EC2 à la demande.
    - B. Instances EC2 réservées - sans paiement initial.
    - C. Instances EC2 Spot.
    - D. Instances EC2 réservées - paiement total initial.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Instances EC2 Spot** : Elles offrent jusqu'à 90 % de réduction par rapport aux instances à la demande et sont idéales pour les charges de travail flexibles, tolérantes aux interruptions et à forte intensité de calcul, comme le traitement par lots d'images/vidéos où le temps n'est pas critique.
    - **Autres options incorrectes** ❌ :
      - **A. Instances EC2 à la demande** : Plus chères que les instances Spot pour ce type de charge de travail.
      - **B. Instances EC2 réservées - sans paiement initial** : Conçues pour des charges de travail stables et prévisibles sur le long terme (1 ou 3 ans). Pas adaptées à un traitement périodique par lots.
      - **D. Instances EC2 réservées - paiement total initial** : Même raison, engagement à long terme et pas adapté à une charge de travail variable et périodique.
    </details>

11. Il est nécessaire d'accorder à une équipe DevOps un accès administratif complet à toutes les ressources d'un compte AWS. Qui peut leur accorder ces autorisations ?
    - A. Le propriétaire du compte AWS.
    - B. Le Technical Account Manager (TAM) AWS.
    - C. L'équipe de sécurité AWS.
    - D. Les ingénieurs du support cloud AWS.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Le propriétaire du compte AWS** : Le compte racine (root) a un accès complet et peut créer des utilisateurs IAM et leur attribuer des autorisations, y compris des politiques administratives.
    - **Autres options incorrectes** ❌ :
      - **B. Le Technical Account Manager (TAM) AWS** : Le TAM fournit des conseils et une assistance, mais ne gère pas les autorisations IAM des comptes clients.
      - **C. L'équipe de sécurité AWS** : AWS est responsable de la sécurité *du* cloud, pas de la gestion des accès *dans* le compte client.
      - **D. Les ingénieurs du support cloud AWS** : Ils peuvent aider à résoudre des problèmes, mais ne peuvent pas modifier les autorisations IAM d'un compte client.
    </details>

12. Vous devez migrer un grand nombre de charges de travail sur site vers AWS. Quel service AWS est le plus approprié ?
    - A. AWS File Transfer Acceleration.
    - B. AWS Server Migration Service.
    - C. AWS Database Migration Service.
    - D. AWS Application Discovery Service.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Server Migration Service (SMS)** : Automatise la migration de serveurs physiques ou virtuels sur site vers AWS. Il est conçu pour migrer des charges de travail entières (systèmes d'exploitation, applications, données).
    - **Autres options incorrectes** ❌ :
      - **A. AWS File Transfer Acceleration** : Fonctionnalité de S3 pour accélérer les transferts de fichiers sur Internet, pas pour la migration de serveurs.
      - **C. AWS Database Migration Service (DMS)** : Service pour migrer des bases de données, pas des serveurs complets.
      - **D. AWS Application Discovery Service** : Aide à planifier les migrations en découvrant les applications et leurs dépendances, mais ne migre pas les serveurs lui-même.
    </details>

13. Quels sont les principaux avantages de l'utilisation d'AWS CloudFormation ? (Choisissez DEUX)
    - A. Il aide les clients AWS à déployer leurs applications sans se soucier de l'infrastructure sous-jacente.
    - B. Il applique automatiquement des fonctionnalités de sécurité IAM avancées.
    - C. Il automatise le provisionnement et la mise à jour de votre infrastructure de manière sûre et contrôlée.
    - D. Il vous permet de modéliser toute votre infrastructure dans un simple fichier texte.
    - E. Il compile et construit le code d'application en temps opportun.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : C, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Il automatise le provisionnement et la mise à jour de votre infrastructure de manière sûre et contrôlée** : CloudFormation gère les dépendances et effectue des mises à jour de manière ordonnée.
      - **D. Il vous permet de modéliser toute votre infrastructure dans un simple fichier texte** : Les modèles CloudFormation (JSON/YAML) décrivent l'ensemble des ressources et leurs configurations.
    - **Autres options incorrectes** ❌ :
      - **A. Il aide les clients AWS à déployer leurs applications sans se soucier de l'infrastructure sous-jacente** : Cela décrit plutôt un service PaaS comme Elastic Beanstalk. CloudFormation modélise l'infrastructure, donc le client doit la définir.
      - **B. Il applique automatiquement des fonctionnalités de sécurité IAM avancées** : CloudFormation peut créer des ressources IAM selon votre modèle, mais n'applique pas automatiquement des politiques avancées sans que vous les ayez définies.
      - **E. Il compile et construit le code d'application** : CloudFormation est un service d'infrastructure as code, pas un outil de build ou de compilation.
    </details>

14. Lequel des modèles de déploiement de cloud computing connecte l'infrastructure et les applications entre des ressources cloud et des ressources existantes non situées dans le cloud ?
    - A. Sur site (On-premises).
    - B. Mixte.
    - C. Hybride.
    - D. Cloud.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Hybride** : Un environnement hybride combine des ressources cloud (comme AWS) avec des infrastructures sur site (datacenters privés).
    - **Autres options incorrectes** ❌ :
      - **A. Sur site (On-premises)** : Toutes les ressources sont localisées dans les locaux de l'entreprise.
      - **B. Mixte** : Ce n'est pas un terme standard de déploiement cloud.
      - **D. Cloud** : Toutes les ressources sont dans le cloud.
    </details>

15. Une entreprise héberge des charges de travail critiques pour l'entreprise dans une région AWS. Pour se protéger contre la perte de données et assurer la continuité des activités, une image miroir de l'environnement AWS actuel doit être créée dans une autre région AWS. La politique de l'entreprise exige que l'environnement de secours soit disponible en quelques minutes en cas de panne dans la région AWS principale. Quel service AWS peut être utilisé pour répondre à ces exigences ?
    - A. CloudEndure Disaster Recovery.
    - B. CloudEndure Migration.
    - C. AWS Backup.
    - D. AWS Glue.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. CloudEndure Disaster Recovery** : Ce service (maintenant intégré à AWS Elastic Disaster Recovery) fournit une reprise après sinistre rapide et fiable vers AWS, avec des objectifs de point de reprise (RPO) et de temps de reprise (RTO) faibles, permettant un basculement en quelques minutes.
    - **Autres options incorrectes** ❌ :
      - **B. CloudEndure Migration** : Service conçu pour la migration de serveurs, pas spécifiquement pour la reprise après sinistre avec basculement rapide.
      - **C. AWS Backup** : Service centralisé pour gérer les sauvegardes, mais ne fournit pas automatiquement un environnement de secours opérationnel en quelques minutes.
      - **D. AWS Glue** : Service d'intégration de données (ETL), sans rapport.
    </details>

16. Laquelle des classes de stockage S3 suivantes est la plus appropriée pour héberger des ressources statiques pour un site web de commerce électronique populaire avec des modèles d'accès stables ?
    - A. S3 Standard-IA.
    - B. S3 Intelligent-Tiering.
    - C. S3 Glacier Deep Archive.
    - D. S3 Standard.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. S3 Standard** : Conçue pour les données fréquemment consultées (faible latence, haut débit). Parfaite pour les actifs statiques de sites web (images, CSS, JS) qui sont chargés à chaque visite.
    - **Autres options incorrectes** ❌ :
      - **A. S3 Standard-IA (Infrequent Access)** : Pour les données moins fréquemment consultées, avec des frais de récupération. Non optimal pour des actifs de site web populaires.
      - **B. S3 Intelligent-Tiering** : Bon pour les données avec des modèles d'accès inconnus ou changeants, mais inutile pour des modèles d'accès stables et fréquents.
      - **C. S3 Glacier Deep Archive** : Pour l'archivage à long terme avec des délais de restauration de plusieurs heures. Totalement inadapté à un site web en direct.
    </details>

17. Vous souhaitez créer une sauvegarde de vos données dans un autre emplacement géographique. Où devez-vous créer cette sauvegarde ?
    - A. Dans un autre emplacement périphérique.
    - B. Dans une autre région.
    - C. Dans un autre VPC.
    - D. Dans une autre zone de disponibilité.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Dans une autre région** : La réplication inter-régions protège contre les catastrophes à l'échelle d'une région (par exemple, sinistre naturel, panne majeure). C'est le niveau de résilience géographique le plus élevé.
    - **Autres options incorrectes** ❌ :
      - **A. Dans un autre emplacement périphérique** : Les emplacements périphériques sont pour la mise en cache, pas pour la sauvegarde.
      - **C. Dans un autre VPC** : Un VPC peut être dans la même région, donc ne fournit pas de résilience géographique.
      - **D. Dans une autre zone de disponibilité** : Les AZ sont à l'intérieur d'une même région et partagent des risques régionaux. Cela protège contre les défaillances d'un centre de données, mais pas d'une région entière.
    </details>

18. Quelle affirmation est vraie en relation avec la sécurité d'Amazon EC2 ?
    - A. Vous devez utiliser des volumes de stockage d'instance (instance store) pour stocker les données de connexion.
    - B. Vous devez régulièrement appliquer des correctifs au système d'exploitation et aux applications sur vos instances EC2.
    - C. Vous devez déployer les composants critiques de votre application dans la zone de disponibilité que vous considérez comme fiable.
    - D. Vous pouvez suivre tous les appels d'API à l'aide d'Amazon Athena.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Vous devez régulièrement appliquer des correctifs au système d'exploitation et aux applications sur vos instances EC2** : Dans le modèle de responsabilité partagée, le client est responsable de la gestion des correctifs du système d'exploitation invité et des applications.
    - **Autres options incorrectes** ❌ :
      - **A. Vous devez utiliser des volumes de stockage d'instance pour stocker les données de connexion** : Faux. Le stockage d'instance est temporaire et effacé à l'arrêt/redémarrage. Il ne faut pas l'utiliser pour des données persistantes ou sensibles.
      - **C. Vous devez déployer les composants critiques dans la zone de disponibilité que vous considérez comme fiable** : Toutes les zones de disponibilité sont conçues pour être fiables. La meilleure pratique est de déployer sur plusieurs AZ pour la haute disponibilité, pas d'en choisir une seule.
      - **D. Vous pouvez suivre tous les appels d'API à l'aide d'Amazon Athena** : Le suivi des appels d'API se fait avec AWS CloudTrail. Amazon Athena est un service de requête interactive de données sur S3.
    </details>

19. Qu'est-ce qu'AWS Cost Explorer fournit pour aider à gérer vos dépenses AWS ?
    - A. Des comparaisons de coûts entre les environnements cloud AWS et les environnements sur site.
    - B. Des estimations précises des coûts des services AWS basées sur votre utilisation prévue.
    - C. La facturation consolidée.
    - D. Des prévisions de coûts très précises jusqu'à 12 mois à l'avance.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Des prévisions de coûts très précises jusqu'à 12 mois à l'avance** : Cost Explorer permet de visualiser, comprendre et gérer les coûts AWS au fil du temps, et inclut des fonctionnalités de prévision basées sur l'utilisation historique.
    - **Autres options incorrectes** ❌ :
      - **A. Des comparaisons de coûts entre les environnements cloud AWS et les environnements sur site** : C'est le rôle de l'AWS TCO Calculator, pas de Cost Explorer.
      - **B. Des estimations précises des coûts des services AWS basées sur votre utilisation prévue** : C'est le rôle de l'AWS Pricing Calculator.
      - **C. La facturation consolidée** : C'est une fonctionnalité d'AWS Organizations, pas de Cost Explorer.
    </details>

20. Quelle est la fonctionnalité d'Amazon RDS qui effectue un basculement automatique lorsque la base de données principale ne répond pas ?
    - A. RDS Single-AZ.
    - B. RDS Write Replica.
    - C. RDS Snapshots.
    - D. RDS Multi-AZ.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. RDS Multi-AZ** : Dans un déploiement Multi-AZ, RDS maintient une instance de secours synchronisée dans une autre zone de disponibilité. En cas de défaillance de l'instance principale, RDS bascule automatiquement vers la base de données secondaire.
    - **Autres options incorrectes** ❌ :
      - **A. RDS Single-AZ** : Déploiement sur une seule zone de disponibilité, pas de basculement automatique.
      - **B. RDS Write Replica** : Les réplicas de lecture sont utilisés pour la scalabilité en lecture et peuvent être promus manuellement, mais le basculement n'est pas automatique.
      - **C. RDS Snapshots** : Sauvegardes manuelles ou automatisées, pas de basculement automatique.
    </details>

21. Vous utilisez plusieurs instances EC2 à la demande pour exécuter votre environnement de développement. Quel est le meilleur moyen de réduire vos frais lorsque ces instances ne sont pas utilisées ?
    - A. Supprimer tous les volumes EBS attachés aux instances.
    - B. Vous ne pouvez pas minimiser les frais pour les instances à la demande.
    - C. Terminer les instances.
    - D. Arrêter les instances.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Arrêter les instances** : Lorsque vous arrêtez une instance EC2, vous ne payez plus pour le calcul (heure d'instance), mais vous continuez de payer pour le stockage EBS attaché et les adresses IP élastiques éventuelles. C'est idéal pour les environnements de développement utilisés seulement pendant les heures de travail.
    - **Autres options incorrectes** ❌ :
      - **A. Supprimer tous les volumes EBS attachés aux instances** : Cela supprimerait les données de manière permanente. De plus, si vous arrêtez l'instance, vous n'avez pas besoin de supprimer les volumes EBS pour économiser sur les coûts de calcul.
      - **B. Vous ne pouvez pas minimiser les frais pour les instances à la demande** : Faux, l'arrêt des instances permet d'économiser sur les frais de calcul.
      - **C. Terminer les instances** : Cela détruit l'instance et, par défaut, son stockage EBS root. Vous perdriez tout état et configuration, ce qui n'est pas pratique pour un environnement de développement que vous souhaitez réutiliser.
    </details>

22. Laquelle des stratégies suivantes aide à protéger votre compte racine AWS ?
    - A. Supprimez les clés d'accès de l'utilisateur racine si vous n'en avez pas besoin.
    - B. Appliquez l'authentification multi-facteur (MFA) pour le compte racine et utilisez-le pour tout votre travail.
    - C. Accédez au compte racine uniquement depuis votre téléphone portable personnel.
    - D. Partagez votre mot de passe ou vos clés d'accès AWS uniquement avec des personnes de confiance.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Supprimez les clés d'accès de l'utilisateur racine si vous n'en avez pas besoin** : Le compte racine a un accès complet. Les clés d'accès programmatiques pour le compte racine sont très dangereuses si elles fuient. Il est fortement recommandé de ne pas les utiliser et de les supprimer.
    - **Autres options incorrectes** ❌ :
      - **B. Appliquez l'authentification multi-facteur (MFA) pour le compte racine et utilisez-le pour tout votre travail** : L'application du MFA est une bonne pratique, mais vous ne devez *pas* utiliser le compte racine pour le travail quotidien. Utilisez des utilisateurs IAM avec le principe du moindre privilège.
      - **C. Accédez au compte racine uniquement depuis votre téléphone portable personnel** : Ce n'est pas une pratique sécurisée recommandée. L'accès doit être sécurisé avec MFA et limité, peu importe l'appareil.
      - **D. Partagez votre mot de passe ou vos clés d'accès AWS uniquement avec des personnes de confiance** : Il ne faut *jamais* partager les identifiants du compte racine. Utilisez IAM pour créer des utilisateurs distincts.
    </details>

23. Lesquels des facteurs suivants doivent être pris en compte pour la tarification d'Amazon EBS ? (Choisissez DEUX)
    - A. La taille des volumes provisionnés par mois.
    - B. La capacité de calcul que vous consommez.
    - C. La quantité de données que vous avez stockées dans les snapshots.
    - D. Le temps de calcul que vous consommez.
    - E. Le nombre d'appareils de stockage Snowball que vous demandez.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. La taille des volumes provisionnés par mois** : Vous payez pour la quantité de stockage provisionnée (en Go/mois), quel que soit l'utilisation réelle.
      - **C. La quantité de données que vous avez stockées dans les snapshots** : Les snapshots EBS sont stockés dans S3 et vous êtes facturé pour l'espace utilisé.
    - **Autres options incorrectes** ❌ :
      - **B. La capacité de calcul que vous consommez** : C'est le coût d'EC2, pas d'EBS.
      - **D. Le temps de calcul que vous consommez** : Idem, coût d'EC2.
      - **E. Le nombre d'appareils de stockage Snowball que vous demandez** : Snowball est un service de transfert de données distinct.
    </details>

24. Vous venez de configurer votre environnement AWS et avez créé six comptes utilisateur IAM pour l'équipe DevOps. Quelle est la recommandation AWS lors de l'attribution d'autorisations à ces comptes IAM ?
    - A. Attachez une politique IAM distincte pour chaque compte individuel.
    - B. Appliquez le principe du moindre privilège.
    - C. Pour des raisons de sécurité, vous ne devez accorder aucune autorisation à l'équipe DevOps.
    - D. Créez six mots de passe IAM différents.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Appliquez le principe du moindre privilège** : Accordez uniquement les autorisations nécessaires pour effectuer une tâche. C'est une meilleure pratique fondamentale de sécurité.
    - **Autres options incorrectes** ❌ :
      - **A. Attachez une politique IAM distincte pour chaque compte individuel** : Cela peut être fait, mais ce n'est pas la recommandation principale. Il est préférable de regrouper les utilisateurs dans des groupes et d'attacher des politiques au groupe pour une gestion simplifiée.
      - **C. Pour des raisons de sécurité, vous ne devez accorder aucune autorisation** : Cela rendrait les comptes inutiles. Il faut accorder des autorisations minimales nécessaires.
      - **D. Créez six mots de passe IAM différents** : C'est évident (chaque utilisateur doit avoir ses propres identifiants), mais ce n'est pas la recommandation principale concernant l'attribution d'autorisations.
    </details>

25. Lesquels des éléments suivants ont le plus grand impact sur le coût ? (Choisissez DEUX)
    - A. Les frais de calcul.
    - B. Le nombre de services utilisés.
    - C. Les frais de transfert de données entrant (Data Transfer In).
    - D. Les frais de transfert de données sortant (Data Transfer Out).
    - E. Le nombre de rôles IAM provisionnés.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : A, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Les frais de calcul** : Les instances EC2, les services managés comme RDS, Lambda, etc., représentent généralement une part importante de la facture.
      - **D. Les frais de transfert de données sortant (Data Transfer Out)** : Le transfert de données hors d'AWS (vers Internet) est souvent facturé et peut devenir coûteux, surtout pour les applications avec beaucoup d'utilisateurs ou de contenu distribué.
    - **Autres options incorrectes** ❌ :
      - **B. Le nombre de services utilisés** : Ce n'est pas le nombre, mais l'utilisation de chaque service qui compte. Un service peu utilisé peut coûter moins cher qu'une utilisation intensive d'un seul service.
      - **C. Les frais de transfert de données entrant** : Généralement gratuits ou à très faible coût.
      - **E. Le nombre de rôles IAM provisionnés** : IAM est gratuit, aucun impact sur les coûts.
    </details>

26. Qui parmi les suivants obtiendra la plus grande remise ?
    - A. Un utilisateur qui choisit d'acheter des instances à la demande, convertibles, avec paiement partiel initial.
    - B. Un utilisateur qui choisit d'acheter des instances réservées, convertibles, avec paiement total initial.
    - C. Un utilisateur qui choisit d'acheter des instances réservées, standard, sans paiement initial.
    - D. Un utilisateur qui choisit d'acheter des instances réservées, standard, avec paiement total initial.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Un utilisateur qui choisit d'acheter des instances réservées, standard, avec paiement total initial** : Les instances réservées standard offrent la remise la plus élevée (par rapport aux convertibles). Le paiement total initial réduit davantage le taux horaire effectif.
    - **Autres options incorrectes** ❌ :
      - **A. Un utilisateur qui choisit d'acheter des instances à la demande...** : Les instances à la demande n'offrent aucune remise.
      - **B. Un utilisateur qui choisit d'acheter des instances réservées, convertibles, avec paiement total initial** : Les convertibles offrent moins de remise que les standard.
      - **C. Un utilisateur qui choisit d'acheter des instances réservées, standard, sans paiement initial** : Le paiement initial réduit le coût horaire, donc "sans paiement initial" est moins avantageux que "paiement total initial".
    </details>

27. Laquelle des options suivantes est disponible lors de l'achat d'instances Amazon EC2 ?
    - A. La possibilité d'enchérir pour obtenir les prix les plus bas possibles.
    - B. La possibilité d'enregistrer des instances EC2 pour obtenir des remises volume sur chaque heure d'exécution des instances.
    - C. La possibilité d'acheter des instances dédiées avec jusqu'à 90 % de remise.
    - D. La possibilité de payer à l'avance pour obtenir des coûts horaires plus bas.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. La possibilité de payer à l'avance pour obtenir des coûts horaires plus bas** : C'est le principe des instances réservées avec paiement initial (partiel ou total) qui réduit le taux horaire.
    - **Autres options incorrectes** ❌ :
      - **A. La possibilité d'enchérir pour obtenir les prix les plus bas possibles** : Cela décrit les instances Spot, mais le terme "enchérir" n'est plus utilisé ; vous définissez un prix maximum.
      - **B. La possibilité d'enregistrer des instances EC2 pour obtenir des remises volume** : Les remises volume pour EC2 s'appliquent via la facturation consolidée (Organizations) ou les Savings Plans, pas par "enregistrement" d'instances.
      - **C. La possibilité d'acheter des instances dédiées avec jusqu'à 90 % de remise** : Les instances dédiées sont plus chères, pas moins chères. Les remises importantes s'appliquent aux instances réservées ou Spot.
    </details>

28. Que signifie le terme "Économies d'échelle" (Economies of scale) ?
    - A. Cela signifie que vous économisez plus lorsque vous consommez plus.
    - B. Cela signifie qu'avec le temps, en utilisant AWS, vous payez plus pour ses services.
    - C. Cela signifie qu'AWS baissera continuellement les coûts à mesure qu'il grandit.
    - D. Cela signifie que vous avez la capacité de payer à l'usage.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Cela signifie qu'AWS baissera continuellement les coûts à mesure qu'il grandit** : Grâce aux économies d'échelle, AWS peut réduire ses coûts d'infrastructure et répercuter ces économies sur les clients sous forme de réductions de prix.
    - **Autres options incorrectes** ❌ :
      - **A. Cela signifie que vous économisez plus lorsque vous consommez plus** : Cela décrit les remises volume, qui sont une conséquence des économies d'échelle, mais pas la définition du terme.
      - **B. Cela signifie qu'avec le temps, en utilisant AWS, vous payez plus** : Faux, les prix tendent à baisser.
      - **D. Cela signifie que vous avez la capacité de payer à l'usage** : C'est le modèle de paiement à l'usage, pas les économies d'échelle.
    </details>

29. Une entreprise connaît des fluctuations dans les modèles de trafic vers son site web de commerce électronique lors de ventes flash. Quel service peut aider l'entreprise à faire correspondre dynamiquement la capacité de calcul requise pour gérer les pics de trafic pendant les ventes flash ?
    - A. AWS Auto Scaling.
    - B. Amazon Elastic Compute Cloud.
    - C. Amazon Elastic File System.
    - D. Amazon ElastiCache.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Auto Scaling** : Ce service surveille vos applications et ajuste automatiquement la capacité pour maintenir des performances stables et prévisibles au moindre coût. Il est parfait pour gérer les pics de trafic soudains.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Elastic Compute Cloud (EC2)** : C'est le service de calcul de base, mais en lui-même, il ne met pas à l'échelle automatiquement. Il est utilisé avec Auto Scaling.
      - **C. Amazon Elastic File System (EFS)** : Service de stockage de fichiers élastique, pas de mise à l'échelle de calcul.
      - **D. Amazon ElastiCache** : Service de cache en mémoire, utilisé pour améliorer les performances, mais pas pour ajuster la capacité de calcul.
    </details>

30. Laquelle des options ci-dessous est vraie concernant Amazon VPC ?
    - A. Amazon VPC permet aux clients de contrôler les interactions des utilisateurs avec toutes les autres ressources AWS.
    - B. Les clients AWS ont un contrôle complet sur leur environnement de réseau virtuel Amazon VPC.
    - C. AWS est responsable de tous les détails de gestion et de configuration d'Amazon VPC.
    - D. Amazon VPC aide les clients à examiner leur architecture AWS et à adopter les meilleures pratiques.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Les clients AWS ont un contrôle complet sur leur environnement de réseau virtuel Amazon VPC** : Le client définit son espace d'adressage IP, crée des sous-réseaux, configure des tables de routage, des passerelles Internet, etc.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon VPC permet aux clients de contrôler les interactions des utilisateurs avec toutes les autres ressources AWS** : Le contrôle des interactions des utilisateurs se fait via IAM, pas VPC.
      - **C. AWS est responsable de tous les détails de gestion et de configuration d'Amazon VPC** : C'est l'inverse ; le client est largement responsable de la configuration de son VPC.
      - **D. Amazon VPC aide les clients à examiner leur architecture AWS et à adopter les meilleures pratiques** : C'est le rôle de services comme AWS Trusted Advisor ou Well-Architected Tool.
    </details>

31. Quel outil un non-client AWS peut-il utiliser pour comparer le coût des ressources d'un environnement sur site à AWS ?
    - A. AWS Cost Explorer.
    - B. AWS Pricing Calculator.
    - C. AWS Budgets.
    - D. AWS TCO Calculator.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS TCO Calculator** : Cet outil est conçu spécifiquement pour estimer les économies de coût lorsque vous migrez de votre infrastructure sur site vers AWS (Total Cost of Ownership).
    - **Autres options incorrectes** ❌ :
      - **A. AWS Cost Explorer** : Outil pour analyser les coûts historiques et prévisionnels d'un compte AWS existant. Nécessite d'être client AWS.
      - **B. AWS Pricing Calculator** : Permet d'estimer le coût futur de services AWS basé sur une architecture planifiée, mais ne compare pas directement avec les coûts sur site.
      - **C. AWS Budgets** : Pour définir des budgets et des alertes sur les coûts AWS, nécessite un compte AWS.
    </details>

32. Lesquels des services suivants fournissent un audit en temps réel pour la conformité et les vulnérabilités ? (Choisissez DEUX)
    - A. AWS Config.
    - B. Amazon Redshift.
    - C. Amazon MQ.
    - D. AWS Trusted Advisor.
    - E. Amazon Cognito.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : A, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS Config** : Évalue, audite et évalue la configuration de vos ressources AWS, et vérifie la conformité par rapport aux règles que vous définissez.
      - **D. AWS Trusted Advisor** : Inspecte votre environnement AWS et fournit des recommandations en temps réel dans cinq catégories : coût, performance, sécurité, tolérance aux pannes et limites de service. Les vérifications de sécurité et de conformité font partie de ces catégories.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Redshift** : Entrepôt de données, pas d'audit.
      - **C. Amazon MQ** : Service de messagerie managé, pas d'audit.
      - **E. Amazon Cognito** : Service de gestion des identités utilisateur, pas d'audit de conformité.
    </details>

33. Lequel des services AWS suivants utilise Puppet pour automatiser la configuration des instances EC2 ?
    - A. AWS OpsWorks.
    - B. AWS CloudFormation.
    - C. AWS Quick Starts.
    - D. AWS CloudTrail.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS OpsWorks** : Service de gestion de configuration qui utilise Chef et Puppet pour automatiser le déploiement et la configuration des serveurs.
    - **Autres options incorrectes** ❌ :
      - **B. AWS CloudFormation** : Utilise des modèles JSON/YAML pour provisionner l'infrastructure, mais ne gère pas la configuration des applications à l'intérieur des instances via Puppet.
      - **C. AWS Quick Starts** : Guides et modèles CloudFormation préconstruits pour déployer rapidement des solutions, pas spécifiquement lié à Puppet.
      - **D. AWS CloudTrail** : Service de journalisation, pas de gestion de configuration.
    </details>

34. Une organisation utilise une architecture cloud hybride pour faire fonctionner son entreprise. Quel service AWS lui permet de déployer ses applications sur n'importe quel serveur AWS ou sur site ?
    - A. Amazon Kinesis.
    - B. Amazon QuickSight.
    - C. AWS CodeDeploy.
    - D. Amazon Athena.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS CodeDeploy** : Service de déploiement automatisé qui fonctionne avec des instances EC2, des instances sur site, des services serverless (Lambda) et des conteneurs (ECS/EKS). Il est donc adapté aux environnements hybrides.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Kinesis** : Service d'analyse de flux de données en temps réel.
      - **B. Amazon QuickSight** : Service de business intelligence.
      - **D. Amazon Athena** : Service de requête interactive de données sur S3.
    </details>

35. Sélectionnez les services qui sont basés sur des serveurs : (Choisissez DEUX)
    - A. Amazon RDS.
    - B. Amazon DynamoDB.
    - C. AWS Lambda.
    - D. AWS Fargate.
    - E. Amazon EMR.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : A, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Amazon RDS** : Service de base de données relationnelle managée qui s'exécute sur des instances EC2 managées par AWS.
      - **E. Amazon EMR** : Service de big data qui s'exécute sur un cluster d'instances EC2.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon DynamoDB** : Base de données NoSQL entièrement managée, considérée comme serverless car vous ne provisionnez pas de serveurs.
      - **C. AWS Lambda** : Service de calcul serverless par excellence.
      - **D. AWS Fargate** : Moteur de calcul serverless pour les conteneurs (fait partie d'ECS/EKS).
    </details>

36. Quelle description correspond le mieux aux tests d'intrusion (penetration testing) ?
    - A. Tester le temps de réponse de votre application depuis différents emplacements.
    - B. Tester votre réseau pour trouver des vulnérabilités de sécurité qu'un attaquant pourrait exploiter.
    - C. Tester vos instances pour vérifier celles qui sont défaillantes.
    - D. Tester votre logiciel pour détecter les bogues et les erreurs.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Tester votre réseau pour trouver des vulnérabilités de sécurité qu'un attaquant pourrait exploiter** : Les tests d'intrusion sont des tests de sécurité autorisés qui simulent une attaque pour évaluer la sécurité d'un système.
    - **Autres options incorrectes** ❌ :
      - **A. Tester le temps de réponse de votre application** : Cela relève des tests de performance.
      - **C. Tester vos instances pour vérifier celles qui sont défaillantes** : Cela relève de la surveillance ou des contrôles d'intégrité.
      - **D. Tester votre logiciel pour détecter les bogues** : Cela relève des tests logiciels (QA) ou de sécurité des applications (mais pas spécifiquement des tests d'intrusion réseau).
    </details>

37. Lesquels des éléments suivants sont des cas d'utilisation d'Amazon EMR ? (Choisissez DEUX)
    - A. Vous permet de sauvegarder des quantités extrêmement importantes de données à très faible coût.
    - B. Vous permet de déplacer des données à l'échelle de l'exaoctet depuis des centres de données sur site vers AWS.
    - C. Vous permet d'analyser et de traiter des quantités extrêmement importantes de données en temps opportun.
    - D. Vous permet d'exécuter et de mettre à l'échelle facilement Apache Spark, Hadoop et d'autres frameworks Big Data.
    - E. Vous permet d'exécuter et de gérer facilement des conteneurs Docker.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : C, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Vous permet d'analyser et de traiter des quantités extrêmement importantes de données en temps opportun** : EMR est conçu pour le traitement de grands ensembles de données (big data) à des fins d'analyse.
      - **D. Vous permet d'exécuter et de mettre à l'échelle facilement Apache Spark, Hadoop et d'autres frameworks Big Data** : EMR est un service managé qui simplifie la configuration, la gestion et la mise à l'échelle de ces frameworks.
    - **Autres options incorrectes** ❌ :
      - **A. Vous permet de sauvegarder des quantités extrêmement importantes de données à très faible coût** : Ceci est plutôt le rôle des services de stockage comme S3 Glacier.
      - **B. Vous permet de déplacer des données à l'échelle de l'exaoctet** : Ceci est le rôle d'AWS Snowmobile.
      - **E. Vous permet d'exécuter et de gérer facilement des conteneurs Docker** : Ceci est le rôle d'Amazon ECS ou EKS.
    </details>

38. Votre DSI vous a demandé de contacter le support AWS en utilisant la fonctionnalité de chat pour demander des conseils relatifs à EBS. Cependant, lorsque vous ouvrez le centre de support AWS, vous ne voyez pas de moyen de contacter le support via le chat. Que devez-vous faire ?
    - A. Il n'y a pas de fonctionnalité de chat dans le support AWS.
    - B. La fonctionnalité de chat est disponible pour tous les plans moyennant des frais supplémentaires, mais vous devez d'abord en faire la demande.
    - C. Au minimum, passez au plan de support Business.
    - D. Passez du plan de support Basic au plan Developer Support.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Au minimum, passez au plan de support Business** : Le support par chat est disponible pour les plans Business et Enterprise. Le plan Basic et Developer n'offrent pas de chat.
    - **Autres options incorrectes** ❌ :
      - **A. Il n'y a pas de fonctionnalité de chat dans le support AWS** : Faux, il y a du chat pour les plans payants.
      - **B. La fonctionnalité de chat est disponible pour tous les plans moyennant des frais supplémentaires** : Non, elle est incluse dans les plans Business et Enterprise, pas disponible pour les plans inférieurs.
      - **D. Passez du plan de support Basic au plan Developer Support** : Le plan Developer n'offre pas non plus de chat.
    </details>

39. Un développeur veut déployer et gérer rapidement son application dans le cloud AWS, mais il n'a aucune expérience du cloud computing. Lequel des services AWS suivants aiderait le développeur à atteindre son objectif ?
    - A. AWS Fargate.
    - B. AWS Batch.
    - C. Amazon Personalize.
    - D. AWS Elastic Beanstalk.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Elastic Beanstalk** : C'est un service PaaS (Platform as a Service) qui simplifie le déploiement et la mise à l'échelle d'applications. Le développeur télécharge simplement son code, et Beanstalk gère le déploiement, la configuration, la mise à l'échelle et la surveillance.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Fargate** : Moteur de calcul serverless pour conteneurs, nécessite de connaître les conteneurs.
      - **B. AWS Batch** : Service d'orchestration de travaux par lots, pas pour déployer une application web générale.
      - **C. Amazon Personalize** : Service de recommandation ML, pas pour déployer des applications.
    </details>

40. Quelle affirmation décrit le mieux le modèle de tarification Pay-As-You-Go d'AWS ?
    - A. Avec AWS, vous remplacez de faibles dépenses initiales par des paiements variables importants.
    - B. Avec AWS, vous remplacez de faibles dépenses initiales par des paiements fixes importants.
    - C. Avec AWS, vous remplacez des dépenses d'investissement importantes par de faibles paiements fixes.
    - D. Avec AWS, vous remplacez des dépenses d'investissement importantes par de faibles paiements variables.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Avec AWS, vous remplacez des dépenses d'investissement importantes par de faibles paiements variables** : Le cloud permet de passer d'un modèle CapEx (investissement initial en matériel) à un modèle OpEx (paiement à l'usage, variable en fonction de la consommation).
    - **Autres options incorrectes** ❌ :
      - **A. Avec AWS, vous remplacez de faibles dépenses initiales par des paiements variables importants** : C'est l'inverse du modèle cloud.
      - **B. Avec AWS, vous remplacez de faibles dépenses initiales par des paiements fixes importants** : Idem.
      - **C. Avec AWS, vous remplacez des dépenses d'investissement importantes par de faibles paiements fixes** : Les paiements sont variables, pas fixes.
    </details>

41. Pour les bases de données Amazon RDS, qu'est-ce qu'AWS effectue en votre nom ? (Choisissez DEUX)
    - A. La configuration de la base de données.
    - B. La protection du trafic réseau.
    - C. La gestion du système d'exploitation.
    - D. La gestion des accès.
    - E. La gestion des règles de pare-feu.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. La configuration de la base de données** : AWS provisionne l'instance de base de données et effectue l'installation initiale du moteur de base de données.
      - **C. La gestion du système d'exploitation** : AWS est responsable des correctifs et de la maintenance du système d'exploitation sous-jacent de l'instance RDS.
    - **Autres options incorrectes** ❌ :
      - **B. La protection du trafic réseau** : Le client est responsable de la configuration des groupes de sécurité (Security Groups) pour contrôler le trafic vers la base de données.
      - **D. La gestion des accès** : Le client gère les comptes d'utilisateurs et les autorisations au sein de la base de données.
      - **E. La gestion des règles de pare-feu** : Comme pour B, le client configure les groupes de sécurité.
    </details>

42. Laquelle des stratégies suivantes aide à analyser les coûts dans AWS ?
    - A. Utiliser des balises (tags) pour regrouper les ressources.
    - B. Utiliser AWS CloudFormation pour automatiser le déploiement des ressources.
    - C. Déployer des ressources du même type dans différentes régions.
    - D. Configurer Amazon Inspector pour analyser automatiquement les coûts et envoyer des rapports par e-mail.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Utiliser des balises (tags) pour regrouper les ressources** : Les balises sont des métadonnées que vous pouvez attribuer aux ressources AWS. Elles vous permettent ensuite de filtrer et de regrouper les coûts dans des outils comme Cost Explorer par projet, département, environnement, etc.
    - **Autres options incorrectes** ❌ :
      - **B. Utiliser AWS CloudFormation pour automatiser le déploiement** : Cela aide à la reproductibilité et à la gouvernance, mais n'est pas une méthode d'analyse des coûts en soi.
      - **C. Déployer des ressources du même type dans différentes régions** : Cela peut augmenter les coûts (transfert de données) et compliquer l'analyse.
      - **D. Configurer Amazon Inspector pour analyser automatiquement les coûts** : Amazon Inspector est un service d'évaluation de sécurité, pas d'analyse des coûts.
    </details>

43. Une entreprise de médias a une application qui nécessite le transfert de grands ensembles de données vers et depuis AWS chaque jour. Ces données sont critiques pour l'entreprise et doivent être transférées via une connexion fiable. Quel service AWS l'entreprise doit-elle utiliser ?
    - A. AWS Direct Connect.
    - B. Amazon Comprehend.
    - C. AWS Snowmobile.
    - D. AWS VPN.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Direct Connect** : Établit une connexion réseau privée et dédiée entre le centre de données de l'entreprise et AWS, offrant une bande passante plus élevée et plus cohérente qu'une connexion Internet, et réduisant les coûts de transfert de données.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Comprehend** : Service de traitement du langage naturel, sans rapport.
      - **C. AWS Snowmobile** : Camion pour transférer des exaoctets de données physiquement, pas pour des transferts quotidiens.
      - **D. AWS VPN** : Connexion cryptée via Internet, mais la bande passante et la latence peuvent varier, et les coûts de transfert de données sont plus élevés que via Direct Connect.
    </details>

44. Quel est le principal avantage du service AWS Storage Gateway ?
    - A. Il automatise le processus de construction, de maintenance et d'exécution des travaux ETL.
    - B. Il fournit des appareils physiques pour migrer des données depuis les locaux vers AWS.
    - C. Il permet l'intégration des environnements informatiques sur site avec le stockage cloud.
    - D. Il fournit un stockage matériel de clés pour la conformité réglementaire.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Il permet l'intégration des environnements informatiques sur site avec le stockage cloud** : Storage Gateway est un service hybride qui fournit une connectivité entre les applications sur site et le stockage cloud AWS (S3, Glacier, EBS). Il se présente sous forme d'appliance virtuelle ou matérielle.
    - **Autres options incorrectes** ❌ :
      - **A. Il automatise le processus de construction, de maintenance et d'exécution des travaux ETL** : Cela décrit AWS Glue.
      - **B. Il fournit des appareils physiques pour migrer des données** : Cela décrit AWS Snowball.
      - **D. Il fournit un stockage matériel de clés** : Cela décrit AWS CloudHSM.
    </details>

45. Pour vous protéger contre la perte de données, vous devez sauvegarder régulièrement votre base de données. Quelle est l'option de stockage la plus rentable qui permet une récupération immédiate de vos sauvegardes ?
    - A. Amazon S3 Glacier Deep Archive.
    - B. Amazon S3 Standard-Infrequent Access.
    - C. Amazon S3 Glacier.
    - D. Stockage d'instance (Instance Store).

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon S3 Standard-Infrequent Access (S3 Standard-IA)** : Conçu pour les données peu fréquemment consultées mais qui nécessitent un accès rapide lorsqu'elles sont nécessaires. Le coût de stockage est inférieur à S3 Standard, et la récupération est immédiate (contrairement à Glacier).
    - **Autres options incorrectes** ❌ :
      - **A. Amazon S3 Glacier Deep Archive** : Le stockage le moins cher, mais avec des délais de restauration de 12 heures, pas immédiat.
      - **C. Amazon S3 Glacier** : Délais de restauration de quelques minutes à plusieurs heures, pas immédiat.
      - **D. Stockage d'instance** : Stockage temporaire attaché à une instance EC2, non persistant et non adapté aux sauvegardes.
    </details>

46. Quel service pouvez-vous utiliser pour acheminer le trafic vers le point de terminaison qui offre les meilleures performances d'application pour vos utilisateurs dans le monde entier ?
    - A. AWS Global Accelerator.
    - B. AWS Data Pipeline.
    - C. AWS DAX Accelerator.
    - D. AWS Transfer Acceleration.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Global Accelerator** : Améliore la disponibilité et les performances de vos applications en utilisant le réseau mondial d'AWS pour acheminer le trafic vers le point de terminaison optimal (basé sur la santé, la proximité géographique, les politiques de routage).
    - **Autres options incorrectes** ❌ :
      - **B. AWS Data Pipeline** : Service d'orchestration de données pour le traitement et le déplacement des données.
      - **C. AWS DAX Accelerator** : DAX signifie DynamoDB Accelerator, un cache en mémoire pour DynamoDB.
      - **D. AWS Transfer Acceleration** : Fonctionnalité de S3 pour accélérer les transferts de fichiers sur de longues distances.
    </details>

47. Pourquoi les architectures sans serveur (Serverless) sont-elles plus économiques que les architectures basées sur des serveurs ?
    - A. Les architectures sans serveur utilisent de nouveaux appareils de calcul puissants.
    - B. Avec les architectures basées sur des serveurs, les ressources de calcul continuent de fonctionner tout le temps, alors qu'avec l'architecture sans serveur, les ressources de calcul ne sont utilisées que lorsque le code est exécuté.
    - C. Lorsque vous réservez de la capacité sans serveur, vous obtiendrez de fortes remises par rapport à la réservation de serveurs.
    - D. Avec les architectures sans serveur, vous avez la capacité de monter ou descendre en charge automatiquement en fonction de l'évolution de la demande.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Avec les architectures basées sur des serveurs, les ressources de calcul continuent de fonctionner tout le temps...** : Avec un serveur (même une instance EC2), vous payez pour le temps où le serveur fonctionne, que vous l'utilisiez ou non. Avec serverless (comme Lambda), vous ne payez que pour le temps d'exécution de votre code, à la milliseconde près.
    - **Autres options incorrectes** ❌ :
      - **A. Les architectures sans serveur utilisent de nouveaux appareils de calcul puissants** : Ce n'est pas la raison de l'économie.
      - **C. Lorsque vous réservez de la capacité sans serveur...** : Il n'y a pas de réservation de capacité pour Lambda de la même manière que pour EC2. Les modèles de tarification sont différents.
      - **D. Avec les architectures sans serveur, vous avez la capacité de monter ou descendre en charge automatiquement** : C'est un avantage de l'élasticité, mais cela n'explique pas directement l'économie (l'Auto Scaling pour EC2 permet aussi de s'adapter à la demande). L'économie vient du fait que vous ne payez que pendant l'exécution.
    </details>

48. Lesquelles des options ci-dessous sont des cas d'utilisation du service Amazon Route 53 ? (Choisissez DEUX)
    - A. Connectivité point à point entre un centre de données sur site et AWS.
    - B. Détecte les changements de configuration dans l'environnement AWS.
    - C. Configuration et gestion DNS.
    - D. Gère le trafic des applications mondiales grâce à une variété de types de routage.
    - E. Fournit des recommandations d'optimisation de la sécurité de l'infrastructure.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : C, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Configuration et gestion DNS** : Route 53 est un service DNS scalable et hautement disponible.
      - **D. Gère le trafic des applications mondiales grâce à une variété de types de routage** : Route 53 offre plusieurs politiques de routage (latence, géolocalisation, pondérée, basée sur la santé) pour acheminer le trafic vers différents points de terminaison.
    - **Autres options incorrectes** ❌ :
      - **A. Connectivité point à point entre un centre de données sur site et AWS** : C'est le rôle d'AWS Direct Connect ou VPN.
      - **B. Détecte les changements de configuration dans l'environnement AWS** : C'est le rôle d'AWS Config.
      - **E. Fournit des recommandations d'optimisation de la sécurité de l'infrastructure** : C'est le rôle d'AWS Trusted Advisor.
    </details>

49. Vous voulez transférer 200 To de données d'emplacements sur site vers le cloud AWS. Lequel des éléments suivants peut faire le travail de manière rentable ?
    - A. AWS Snowmobile.
    - B. AWS Import/Export.
    - C. AWS DMS.
    - D. AWS Snowball.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Snowball** : Appareil de transfert de données physique sécurisé conçu pour transférer des dizaines de téraoctets à des pétaoctets de données. Pour 200 To, Snowball est le plus adapté.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Snowmobile** : Camion pour transférer des exaoctets (milliers de pétaoctets). Surdimensionné pour 200 To.
      - **B. AWS Import/Export** : Ancien nom du service Snowball (désormais obsolète).
      - **C. AWS DMS (Database Migration Service)** : Service pour migrer des bases de données avec un temps d'arrêt minimal, mais pas pour transférer de grands volumes de données brutes hors base de données.
    </details>

50. Vous avez une application IoT en temps réel qui nécessite une latence inférieure à la milliseconde. Lequel des services suivants devez-vous utiliser ?
    - A. Amazon Redshift.
    - B. Amazon Athena.
    - C. AWS Cloud9.
    - D. Amazon ElastiCache for Redis.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon ElastiCache for Redis** : Service de cache en mémoire compatible Redis, offrant des performances sub-millisecondes, parfait pour les applications IoT en temps réel nécessitant une latence extrêmement faible.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Redshift** : Entrepôt de données pour l'analyse, pas pour le traitement en temps réel à faible latence.
      - **B. Amazon Athena** : Service de requête interactive sur S3, latence de plusieurs secondes.
      - **C. AWS Cloud9** : Environnement de développement intégré (IDE) cloud, sans rapport.
    </details>