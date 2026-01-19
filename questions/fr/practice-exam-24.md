---
layout: exam
---

# Examen de pratique 24

1. Une multinationale souhaite obtenir des conseils professionnels d'experts sur la migration vers AWS et la gestion de ses applications sur le cloud AWS. Quelle entité recommanderiez-vous pour cet engagement ?
    - A. APN Consulting Partner
    - B. APN Technology Partner
    - C. AWS Trusted Advisor
    - D. Concierge Support Team

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. APN Consulting Partner** : Le programme APN (AWS Partner Network) comprend des partenaires de conseil qui aident les clients à concevoir, architeurer, migrer et gérer leurs charges de travail sur AWS. Ce sont des sociétés de services professionnels spécialisées dans l'accompagnement des migrations.
    - **Autres options incorrectes** ❌ :
      - **B. APN Technology Partner** : Fournissent du matériel, des services de connectivité ou des solutions logicielles hébergées sur AWS, mais n'aident pas directement à la migration et à la gestion des applications.
      - **C. AWS Trusted Advisor** : Outil en ligne fournissant des conseils en temps réel sur l'optimisation des coûts, la sécurité, la tolérance aux pannes, etc. Ne peut pas être utilisé pour la migration et la gestion.
      - **D. Concierge Support Team** : Équipe de support de facturation et de compte disponible uniquement pour le plan Enterprise Support, ne gère pas la migration ou la gestion des applications.
    </details>

2. Une entreprise souhaite améliorer la résilience de son application phare en passant de son système de base de données traditionnel à un service de base de données NoSQL managé AWS pour supporter une configuration active-active dans les régions AWS Est et Ouest des États-Unis. La configuration active-active avec support multi-région est le critère principal. Quel service de base de données AWS convient le mieux à cette exigence ?
    - A. Amazon DynamoDB avec DynamoDB Accelerator
    - B. Amazon DynamoDB avec global tables
    - C. Amazon Aurora avec multi-master clusters
    - D. Amazon Relational Database Service (RDS) pour MySQL

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon DynamoDB avec global tables** : DynamoDB est une base de données NoSQL clé-valeur entièrement managée. Les "global tables" répliquent automatiquement les données dans plusieurs régions AWS et offrent un support actif-actif avec des performances de lecture/écriture en millisecondes.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon DynamoDB avec DynamoDB Accelerator** : DAX est un cache en mémoire pour améliorer les performances de lecture, mais ne fournit pas de configuration active-active multi-région.
      - **C. Amazon Aurora avec multi-master clusters** : Aurora est une base de données relationnelle, pas NoSQL. De plus, bien que les clusters multi-master offrent une haute disponibilité, ils ne sont pas conçus pour une réplication active-active multi-région comme DynamoDB Global Tables.
      - **D. Amazon RDS pour MySQL** : Service de base de données relationnelle managée, pas une solution NoSQL.
    </details>

3. Une société de services financiers souhaite garantir que l'activité de son compte AWS respecte les normes de gouvernance, de conformité et d'audit. En tant que Cloud Practitioner, quel service AWS recommanderiez-vous pour ce cas d'usage ?
    - A. AWS Trusted Advisor
    - B. AWS Config
    - C. Amazon CloudWatch
    - D. AWS CloudTrail

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS CloudTrail** : Service qui journalise, surveille et conserve l'historique des activités du compte AWS (actions via la console, CLI, SDK). Essentiel pour l'audit, la gouvernance et la conformité.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Trusted Advisor** : Fournit des recommandations de bonnes pratiques, pas un journal d'audit.
      - **B. AWS Config** : Évalue et audite la configuration des ressources AWS, pas l'activité du compte.
      - **C. Amazon CloudWatch** : Service de surveillance des performances et des événements, pas d'audit d'activité.
    </details>

4. L'équipe DevOps d'une entreprise de commerce électronique tente de déboguer des problèmes de performance pour son application serverless construite avec une architecture microservices. En tant que Cloud Practitioner, quel service AWS recommanderiez-vous pour ce cas d'usage ?
    - A. AWS Trusted Advisor
    - B. Amazon Pinpoint
    - C. AWS X-Ray
    - D. AWS CloudFormation

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS X-Ray** : Service qui aide à analyser et déboguer les applications distribuées et serverless (comme les microservices) en traçant les requêtes et en identifiant les goulots d'étranglement.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Trusted Advisor** : Fournit des recommandations d'optimisation, pas de débogage détaillé.
      - **B. Amazon Pinpoint** : Service d'engagement client et de marketing, pas de débogage.
      - **D. AWS CloudFormation** : Service d'infrastructure as code, pas de débogage de performance.
    </details>

5. Une startup de santé basée dans la Silicon Valley stocke des données de santé anonymisées sur Amazon S3. Le CTO veut s'assurer que toute donnée sensible sur S3 est découverte et identifiée pour prévenir les fuites. En tant que Cloud Practitioner, quel service AWS recommanderiez-vous ?
    - A. AWS Glue
    - B. Amazon Polly
    - C. Amazon Macie
    - D. AWS Secrets Manager

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon Macie** : Service entièrement managé qui utilise le machine learning pour découvrir, classifier et protéger les données sensibles (comme les informations personnelles) stockées dans S3.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Glue** : Service ETL (Extract, Transform, Load) pour préparer les données à des fins d'analyse, pas pour la découverte de données sensibles.
      - **B. Amazon Polly** : Service de synthèse vocale (text-to-speech).
      - **D. AWS Secrets Manager** : Gère les secrets (mots de passe, clés API), pas la découverte de données sensibles dans S3.
    </details>

6. Une startup licorne construit une application analytique avec support d'une interface vocale. L'application acceptera une entrée vocale des utilisateurs puis communiquera les résultats par la voix. En tant que Cloud Practitioner, quelle solution recommanderiez-vous ?
    - A. Utiliser Amazon Polly pour convertir la parole en texte pour l'analyse, puis utiliser Amazon Transcribe pour transmettre les résultats par la parole.
    - B. Utiliser Amazon Translate pour convertir la parole en texte pour l'analyse, puis utiliser Amazon Polly pour transmettre les résultats par la parole.
    - C. Utiliser Amazon Transcribe pour convertir la parole en texte pour l'analyse, puis utiliser Amazon Polly pour transmettre les résultats par la parole.
    - D. Utiliser Amazon Polly pour convertir la parole en texte pour l'analyse, puis utiliser Amazon Translate pour transmettre les résultats par la parole.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Utiliser Amazon Transcribe pour convertir la parole en texte pour l'analyse, puis utiliser Amazon Polly pour transmettre les résultats par la parole** : Amazon Transcribe est un service de speech-to-text, Amazon Polly est un service de text-to-speech.
    - **Autres options incorrectes** ❌ :
      - **A et D** : Amazon Polly ne peut pas convertir la parole en texte.
      - **B** : Amazon Translate est un service de traduction de langue, pas de speech-to-text.
    </details>

7. Une entreprise utilise des instances EC2 réservées dans plusieurs unités, chaque unité ayant son propre compte AWS. Cependant, certaines unités sous-utilisent leurs instances réservées tandis que d'autres en ont besoin de plus. En tant que Cloud Practitioner, quelle solution la plus rentable recommanderiez-vous ?
    - A. Utiliser AWS Trusted Advisor pour gérer les comptes AWS de toutes les unités, puis partager les instances EC2 réservées.
    - B. Utiliser AWS Systems Manager pour gérer les comptes AWS de toutes les unités, puis partager les instances EC2 réservées.
    - C. Utiliser AWS Cost Explorer pour gérer les comptes AWS de toutes les unités, puis partager les instances EC2 réservées.
    - D. Utiliser AWS Organizations pour gérer les comptes AWS de toutes les unités, puis partager les instances EC2 réservées.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Organizations** : Permet de gérer plusieurs comptes AWS, de centraliser la facturation et de partager des ressources (comme les instances réservées) entre les comptes membres.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Trusted Advisor** : Outil de recommandation, ne permet pas de partager des instances réservées.
      - **B. AWS Systems Manager** : Service de gestion opérationnelle, ne permet pas de partager des instances réservées.
      - **C. AWS Cost Explorer** : Outil d'analyse des coûts, ne permet pas de partager des instances réservées.
    </details>

8. Une startup veut provisionner une instance EC2 au coût le plus bas possible pour une durée à long terme, mais doit s'assurer que l'instance ne serait jamais interrompue. En tant que Cloud Practitioner, quelle option recommanderiez-vous ?
    - A. Instance EC2 Spot
    - B. Instance EC2 réservée (RI)
    - C. EC2 Dedicated Host
    - D. Instance EC2 à la demande

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Instance EC2 réservée** : Offre une réduction de coût importante (jusqu'à 75 %) par rapport au tarif à la demande pour un engagement de 1 ou 3 ans, sans risque d'interruption.
    - **Autres options incorrectes** ❌ :
      - **A. Instance EC2 Spot** : Très économique mais peut être interrompue à tout moment.
      - **C. EC2 Dedicated Host** : Serveur physique dédié, généralement plus cher, utilisé pour des besoins de licence spécifiques.
      - **D. Instance EC2 à la demande** : Pas de réduction de coût à long terme.
    </details>

9. Quelle classe de stockage Amazon S3 prend le plus de temps pour récupérer les données (également appelé latence du premier octet) ?
    - A. Amazon S3 Standard
    - B. Amazon S3 Intelligent-Tiering
    - C. Amazon S3 Glacier Flexible Retrieval
    - D. Amazon S3 Glacier Deep Archive

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon S3 Glacier Deep Archive** : Conçu pour l'archivage à très long terme, avec un temps de restauration de 12 à 48 heures.
    - **Autres options incorrectes** ❌ :
      - **A et B** : Latence de l'ordre des millisecondes.
      - **C** : Temps de restauration de quelques minutes à plusieurs heures, mais plus rapide que Deep Archive.
    </details>

10. Un stagiaire dans une entreprise informatique a provisionné une instance EC2 Linux à la demande avec facturation à la seconde, mais l'a arrêtée au bout de 30 secondes car il voulait provisionner un autre type d'instance. Quelle est la durée de facturation de cette instance ?
    - A. 30 secondes
    - B. 300 secondes
    - C. 600 secondes
    - D. 60 secondes

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. 60 secondes** : AWS applique une facturation minimale d'une minute pour les instances EC2 Linux, même si elles sont arrêtées avant.
    </details>

11. Une entreprise d'analyse de données exécute une application propriétaire d'analyse par lots sur AWS et souhaite utiliser un service de stockage accessible simultanément par des centaines d'instances EC2 pour ajouter des données à des fichiers existants. En tant que Cloud Practitioner, quel service AWS suggéreriez-vous ?
    - A. Amazon Elastic File System (EFS)
    - B. Instance Store
    - C. Amazon Elastic Block Store (EBS)
    - D. Amazon Simple Storage Service (S3)

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon EFS** : Service de stockage de fichiers entièrement managé, compatible avec NFS, qui peut être monté simultanément par des milliers d'instances EC2 dans plusieurs zones de disponibilité.
    - **Autres options incorrectes** ❌ :
      - **B. Instance Store** : Stockage temporaire attaché à une instance EC2 spécifique, non partageable.
      - **C. Amazon EBS** : Volume de stockage par blocks attaché à une seule instance EC2 à la fois.
      - **D. Amazon S3** : Stockage objet, ne supporte pas les opérations d'ajout de fichier (append) comme un système de fichiers.
    </details>

12. Quelle politique de routage AWS Route 53 utiliseriez-vous pour router le trafic vers plusieurs ressources et choisir la proportion de trafic dirigée vers chaque ressource ?
    - A. Simple routing
    - B. Failover routing
    - C. Weighted routing
    - D. Latency-based routing

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Weighted routing** : Permet d'attribuer un poids à chaque enregistrement pour contrôler la proportion de trafic envoyée à chaque ressource.
    - **Autres options incorrectes** ❌ :
      - **A. Simple routing** : Routage basique vers une seule ressource.
      - **B. Failover routing** : Pour la bascule active-passive.
      - **D. Latency-based routing** : Route le trafic vers la région offrant la latence la plus faible.
    </details>

13. Quelle option est un rôle de partie prenante courant pour la perspective "Plateforme" du AWS Cloud Adoption Framework (CAF) ? (Sélectionnez deux)
    - A. Chief Product Officer (CPO)
    - B. Chief Data Officer (CDO)
    - C. Chief Information Officer (CIO)
    - D. Engineer
    - E. Chief Technology Officer (CTO)

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **D. Engineer** et **E. Chief Technology Officer (CTO)** : La perspective "Plateforme" du CAF se concentre sur l'accélération de la livraison des charges de travail via un environnement cloud hybride évolutif. Les parties prenantes typiques incluent le CTO, les leaders technologiques, les architectes et les ingénieurs.
    - **Autres options incorrectes** ❌ :
      - **A, B, C** : Ces rôles sont plus associés à d'autres perspectives du CAF (Business, People, Governance).
    </details>

14. Pour des raisons de conformité réglementaire, une organisation doit utiliser un appareil matériel pour toute opération de chiffrement de données dans le cloud. Quel service AWS peut être utilisé pour répondre à cette exigence ?
    - A. AWS Key Management Service (KMS)
    - B. AWS CloudHSM
    - C. AWS Secrets Manager
    - D. AWS Trusted Advisor

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS CloudHSM** : Service de module de sécurité matériel (HSM) managé dans le cloud, permettant de générer et utiliser des clés de chiffrement dans un appareil matériel validé FIPS 140-2 Level 3.
    - **Autres options incorrectes** ❌ :
      - **A. AWS KMS** : Service de gestion de clés utilisant des HSM, mais le client ne contrôle pas l'appareil physique.
      - **C. AWS Secrets Manager** : Gère les secrets, pas le chiffrement matériel.
      - **D. AWS Trusted Advisor** : Outil de recommandation.
    </details>

15. L'application phare d'une entreprise s'exécute sur une flotte d'instances Amazon EC2. Selon les nouvelles politiques, les administrateurs système recherchent le meilleur moyen de fournir un accès shell sécurisé aux instances EC2 sans ouvrir de nouveaux ports ou utiliser d'adresses IP publiques. Quel outil/service vous aidera à répondre à cette exigence ?
    - A. AWS Systems Manager Session Manager
    - B. Amazon EC2 Instance Connect
    - C. Amazon Inspector
    - D. Amazon Route 53

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Systems Manager Session Manager** : Permet d'établir une session shell sécurisée vers des instances EC2 sans avoir à ouvrir le port 22, sans bastion hosts et sans gérer de clés SSH.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon EC2 Instance Connect** : Nécessite que le port 22 soit ouvert.
      - **C. Amazon Inspector** : Service d'évaluation de sécurité automatisé.
      - **D. Amazon Route 53** : Service DNS.
    </details>

16. Une application web de partage de photos veut stocker des miniatures d'images téléchargées par les utilisateurs sur Amazon S3. Les miniatures sont rarement utilisées mais doivent être immédiatement accessibles. Elles peuvent être régénérées facilement si elles sont perdues. Quelle est la manière la plus rentable de stocker ces miniatures ?
    - A. Utiliser Amazon S3 One Zone-Infrequent Access (One Zone-IA)
    - B. Utiliser Amazon S3 Standard-Infrequent Access (Standard-IA)
    - C. Utiliser Amazon S3 Standard
    - D. Utiliser Amazon S3 Glacier Flexible Retrieval

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. S3 One Zone-IA** : Stockage peu coûteux pour les données rarement consultées mais nécessitant un accès rapide. Coûte 20 % de moins que S3 Standard-IA car les données sont stockées dans une seule zone de disponibilité.
    - **Autres options incorrectes** ❌ :
      - **B. S3 Standard-IA** : Plus cher que One Zone-IA.
      - **C. S3 Standard** : Conçu pour des données fréquemment consultées, plus cher.
      - **D. S3 Glacier Flexible Retrieval** : Temps de restauration plus long (minutes à heures), pas adapté à un accès immédiat.
    </details>

17. Quel est le principal avantage de déployer une base de données Amazon RDS Multi-AZ avec un standby ?
    - A. Amazon RDS Multi-AZ améliore la disponibilité de la base de données.
    - B. Amazon RDS Multi-AZ réduit les coûts d'utilisation de la base de données.
    - C. Amazon RDS Multi-AZ protège la base de données d'une défaillance régionale.
    - D. Amazon RDS Multi-AZ améliore les performances de la base de données pour les charges de travail en lecture intensive.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Améliore la disponibilité** : Une déploiement Multi-AZ crée une instance de standby synchronisée dans une autre zone de disponibilité, permettant un basculement automatique en cas de défaillance de l'instance primaire.
    - **Autres options incorrectes** ❌ :
      - **B. Réduit les coûts** : Faux, cela augmente les coûts (instance supplémentaire).
      - **C. Protège d'une défaillance régionale** : Non, Multi-AZ est dans la même région. Pour la protection régionale, il faut utiliser d'autres méthodes (réplication inter-région).
      - **D. Améliore les performances en lecture** : Le standby dans Multi-AZ n'est pas accessible en lecture. Pour cela, il faut utiliser des Read Replicas.
    </details>

18. Quel service donne une vue personnalisée de l'état des services AWS faisant partie de votre architecture cloud, afin que vous puissiez rapidement évaluer l'impact sur votre entreprise lorsque des services AWS rencontrent des problèmes ?
    - A. Amazon Inspector
    - B. AWS Health - Your Account Health Dashboard
    - C. Amazon CloudWatch
    - D. AWS Health - Service Health Dashboard

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Health - Your Account Health Dashboard** : Fournit des alertes et des conseils personnalisés lorsque AWS rencontre des événements pouvant impacter vos ressources spécifiques.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Inspector** : Service d'évaluation de sécurité automatisé.
      - **C. Amazon CloudWatch** : Surveillance des performances et des événements.
      - **D. AWS Health - Service Health Dashboard** : Affiche l'état général des services AWS, pas une vue personnalisée pour votre compte.
    </details>

19. Une organisation déploie son infrastructure IT dans une combinaison de son datacenter sur site et du cloud AWS. Comment catégoriser ce modèle de déploiement ?
    - A. Cloud deployment
    - B. Private deployment
    - C. Hybrid deployment
    - D. Mixed deployment

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Hybrid deployment** : Modèle de déploiement hybride qui connecte l'infrastructure sur site au cloud.
    - **Autres options incorrectes** ❌ :
      - **A. Cloud deployment** : Déploiement entièrement dans le cloud.
      - **B. Private deployment** : Déploiement sur site (privé).
      - **D. Mixed deployment** : Option fictive.
    </details>

20. Quelle politique décrit les utilisations interdites des services web offerts par Amazon Web Services ?
    - A. AWS Fair Use Policy
    - B. AWS Acceptable Use Policy
    - C. AWS Applicable Use Policy
    - D. AWS Trusted Advisor

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Acceptable Use Policy** : Décrit les utilisations interdites des services AWS.
    - **Autres options incorrectes** ❌ :
      - **A et C** : Options fictives.
      - **D. AWS Trusted Advisor** : Outil de recommandation.
    </details>

21. Parmi les services AWS suivants, lesquels sont toujours gratuits d'utilisation ? (Sélectionnez deux)
    - A. AWS Identity and Access Management (IAM)
    - B. AWS Auto Scaling
    - C. Amazon Elastic Compute Cloud (EC2)
    - D. Amazon Simple Storage Service (S3)
    - E. Amazon DynamoDB

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS IAM** : Service de gestion des identités et des accès, gratuit.
      - **B. AWS Auto Scaling** : Service de mise à l'échelle automatique, gratuit (vous payez seulement les ressources sous-jacentes).
    - **Autres options incorrectes** ❌ :
      - **C, D, E** : Ces services sont payants selon l'utilisation.
    </details>

22. AWS Compute Optimizer fournit des recommandations pour lesquelles des ressources AWS suivantes ? (Sélectionnez deux)
    - A. Instances Amazon EC2, groupes Auto Scaling EC2
    - B. Volumes Amazon EBS, fonctions AWS Lambda
    - C. Instances Amazon EC2, Amazon Elastic File System (EFS)
    - D. Amazon EFS, fonctions AWS Lambda
    - E. Fonctions AWS Lambda, Amazon S3

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Instances EC2 et groupes Auto Scaling EC2**
      - **B. Volumes EBS et fonctions Lambda** : AWS Compute Optimizer analyse l'utilisation historique pour recommander des types d'instances EC2 optimaux, des configurations de volumes EBS et des tailles de mémoire Lambda.
    - **Autres options incorrectes** ❌ :
      - **C, D, E** : Compute Optimizer ne fournit pas de recommandations pour EFS et S3.
    </details>

23. Le déploiement Multi-AZ est un exemple de quoi ?
    - A. Scale up
    - B. Performance Efficiency
    - C. Scale out
    - D. High Availability

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. High Availability** : Multi-AZ augmente la disponibilité en répliquant les données dans une autre zone de disponibilité pour le basculement.
    - **Autres options incorrectes** ❌ :
      - **A. Scale up** : Augmentation verticale des ressources d'une instance.
      - **B. Performance Efficiency** : Pilier du Well-Architected Framework concernant l'efficacité des performances.
      - **C. Scale out** : Augmentation horizontale en ajoutant plus d'instances.
    </details>

24. Une entreprise de commerce électronique souhaite stocker les données d'un moteur de recommandation dans une base de données. En tant que Cloud Practitioner, quel service AWS recommanderiez-vous pour fournir cette fonctionnalité avec le MOINDRE surcharge opérationnelle et à toute échelle ?
    - A. Amazon Relational Database Service (RDS)
    - B. Amazon Simple Storage Service (S3)
    - C. Amazon DynamoDB
    - D. Amazon Neptune

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon DynamoDB** : Base de données NoSQL entièrement managée, sans serveur, conçue pour des performances à l'échelle avec une surcharge opérationnelle minimale.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon RDS** : Base de données relationnelle managée, nécessite plus de gestion (mises à jour, scaling) que DynamoDB.
      - **B. Amazon S3** : Stockage objet, pas une base de données.
      - **D. Amazon Neptune** : Base de données de graphe, plus spécialisée et pas nécessairement adaptée à un moteur de recommandation simple.
    </details>

25. Une entreprise de jeux vidéo recherche une technologie/service pouvant offrir une expérience de jeu à faible latence constante pour garantir une grande expérience utilisateur aux joueurs dans diverses localisations. Quelle technologie/service AWS fournira l'accès à faible latence nécessaire aux utilisateurs finaux ?
    - A. AWS Edge Locations
    - B. AWS Wavelength
    - C. AWS Direct Connect
    - D. AWS Local Zones

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Local Zones** : Emplacements qui étendent les régions AWS pour exécuter des services de calcul, de stockage et de base de données plus près des utilisateurs finaux, offrant une latence très faible.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Edge Locations** : Utilisés par CloudFront pour la mise en cache de contenu, pas pour exécuter des applications complètes.
      - **B. AWS Wavelength** : Intègre AWS aux réseaux 5G des opérateurs pour des applications ultra-basse latence, mais plus spécifique aux cas d'usage mobile.
      - **C. AWS Direct Connect** : Connexion réseau dédiée entre le datacenter sur site et AWS, pas pour les utilisateurs finaux géodistribués.
    </details>

26. Une entreprise informatique souhaite exécuter un processus de sauvegarde de logs tous les lundis à 2h du matin. Le temps d'exécution habituel est de 5 minutes. En tant que Cloud Practitioner, quels services AWS recommanderiez-vous pour construire une solution serverless pour ce cas d'usage ? (Sélectionnez deux)
    - A. Amazon EventBridge
    - B. AWS Lambda
    - C. Amazon Elastic Compute Cloud (EC2)
    - D. AWS Systems Manager
    - E. AWS Step Function

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Amazon EventBridge** : Peut déclencher des événements selon un planning (cron) pour démarrer le processus.
      - **B. AWS Lambda** : Exécute le code de sauvegarde sans provisionner de serveurs, parfait pour une tâche courte (5 minutes).
    - **Autres options incorrectes** ❌ :
      - **C. Amazon EC2** : Nécessite la gestion d'un serveur, pas serverless.
      - **D. AWS Systems Manager** : Pour la gestion opérationnelle, pas pour exécuter des tâches planifiées de manière serverless.
      - **E. AWS Step Function** : Pour orchestrer des workflows, pas nécessaire pour une simple tâche planifiée.
    </details>

27. Quel service AWS peut être utilisé pour automatiser le déploiement de code sur des instances Amazon EC2 ainsi que sur des instances sur site ?
    - A. AWS CodeDeploy
    - B. AWS CodeCommit
    - C. AWS CloudFormation
    - D. AWS CodePipeline

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS CodeDeploy** : Automatise le déploiement d'applications vers des instances EC2 et sur site.
    - **Autres options incorrectes** ❌ :
      - **B. AWS CodeCommit** : Service de contrôle de source Git.
      - **C. AWS CloudFormation** : Provisionnement d'infrastructure.
      - **D. AWS CodePipeline** : Pipeline d'intégration et de livraison continues, mais utilise CodeDeploy pour les déploiements.
    </details>

28. Une entreprise informatique est en phase d'optimisation des coûts et souhaite identifier toutes les instances Amazon EC2 sous-utilisées. Quels services AWS peuvent être utilisés prêts à l'emploi pour répondre à ce cas d'usage sans configuration manuelle ? (Sélectionnez deux)
    - A. AWS Cost Explorer
    - B. AWS Cost & Usage Report (CUR)
    - C. AWS Trusted Advisor
    - D. Amazon CloudWatch
    - E. AWS Budgets

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS Cost Explorer** : Inclut des recommandations de "rightsizing" pour identifier les instances EC2 sous-utilisées.
      - **C. AWS Trusted Advisor** : Vérifie l'utilisation des instances EC2 et signale celles ayant une faible utilisation de CPU et de réseau.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Cost & Usage Report** : Données brutes de coût, nécessite une analyse manuelle.
      - **D. Amazon CloudWatch** : Surveille les métriques, mais nécessite la configuration d'alarmes pour détecter la sous-utilisation.
      - **E. AWS Budgets** : Pour définir des budgets et des alertes de coût, pas pour identifier les instances sous-utilisées.
    </details>

29. Quel pilier du AWS Well-Architected Framework recommande de maintenir l'infrastructure sous forme de code (IaC) ?
    - A. Cost Optimization
    - B. Performance Efficiency
    - C. Security
    - D. Operational Excellence

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Operational Excellence** : Ce pilier inclut la capacité d'exécuter et de surveiller les systèmes, et de continuer à améliorer les processus. L'infrastructure as code (IaC) est une meilleure pratique clé pour automatiser les déploiements et les changements.
    - **Autres options incorrectes** ❌ :
      - **A. Cost Optimization** : Se concentre sur la réduction des coûts.
      - **B. Performance Efficiency** : Se concentre sur l'utilisation efficace des ressources informatiques.
      - **C. Security** : Se concentre sur la protection des informations et des systèmes.
    </details>

30. Une startup exécute son application propriétaire sur des conteneurs Docker. En tant que Cloud Practitioner, quel service AWS recommanderiez-vous pour que la startup puisse exécuter des conteneurs tout en ayant accès aux serveurs sous-jacents ?
    - A. Amazon Elastic Container Service (ECS)
    - B. AWS Lambda
    - C. AWS Fargate
    - D. Amazon Elastic Container Registry (ECR)

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon ECS** : Service de gestion de conteneurs qui permet de gérer un cluster d'instances EC2 sous-jacentes, donnant ainsi un contrôle sur les serveurs.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Lambda** : Calcul serverless, ne supporte pas les conteneurs Docker directement (sauf via les conteneurs Lambda, mais sans accès aux serveurs).
      - **C. AWS Fargate** : Moteur de calcul serverless pour conteneurs, vous n'avez pas à gérer les serveurs sous-jacents.
      - **D. Amazon ECR** : Registre de conteneurs pour stocker des images, pas pour exécuter des conteneurs.
    </details>

31. Quel est le principal avantage de déployer une base de données Amazon RDS dans une configuration Read Replica ?
    - A. Read Replica améliore la disponibilité de la base de données.
    - B. Read Replica réduit les coûts d'utilisation de la base de données.
    - C. Read Replica protège la base de données d'une défaillance régionale.
    - D. Read Replica améliore la scalabilité de la base de données.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Améliore la scalabilité** : Les Read Replicas permettent de distribuer les charges de travail de lecture, améliorant ainsi les performances et la scalabilité des applications en lecture intensive.
    - **Autres options incorrectes** ❌ :
      - **A. Améliore la disponibilité** : Non, c'est le rôle de Multi-AZ. Un Read Replica n'est pas un standby pour le basculement.
      - **B. Réduit les coûts** : Non, cela ajoute un coût supplémentaire.
      - **C. Protège d'une défaillance régionale** : Possible si le Read Replica est dans une autre région, mais ce n'est pas le principal avantage ; la scalabilité en lecture est l'objectif principal.
    </details>

32. Une entreprise informatique a une architecture cloud hybride et souhaite centraliser les logs serveur de ses instances Amazon EC2 et de ses serveurs sur site. Quelle option est la PLUS efficace pour ce cas d'usage ?
    - A. Utiliser Amazon CloudWatch Logs pour l'instance EC2 et les serveurs sur site.
    - B. Utiliser Amazon CloudWatch Logs pour l'instance EC2 et AWS CloudTrail pour les serveurs sur site.
    - C. Utiliser AWS CloudTrail pour l'instance EC2 et Amazon CloudWatch Logs pour les serveurs sur site.
    - D. Utiliser AWS Lambda pour envoyer les logs de l'instance EC2 et des serveurs sur site vers Amazon CloudWatch Logs.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon CloudWatch Logs** : Peut collecter et centraliser les logs à la fois des instances EC2 (via l'agent CloudWatch Logs Agent) et des serveurs sur site (via le même agent ou l'API).
    - **Autres options incorrectes** ❌ :
      - **B et C** : AWS CloudTrail journalise l'activité des API AWS, pas les logs serveur système.
      - **D** : Bien que possible, c'est plus complexe que d'utiliser directement CloudWatch Logs avec l'agent.
    </details>

33. Parmi les services AWS suivants, lesquels offrent du stockage au niveau bloc (block-level storage) ? (Sélectionnez deux)
    - A. Amazon Elastic File System (EFS)
    - B. Amazon Elastic Block Store (EBS)
    - C. Amazon Elastic Container Service (ECS)
    - D. Amazon Simple Storage Service (S3)
    - E. Instance Store

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Amazon EBS** : Stockage par blocs pour les instances EC2.
      - **E. Instance Store** : Stockage par blocs temporaire directement attaché à l'hôte EC2.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EFS** : Stockage de fichiers (file-level).
      - **C. Amazon ECS** : Service de conteneurs, pas de stockage.
      - **D. Amazon S3** : Stockage objet (object-level).
    </details>

34. Un utilisateur AWS tente de lancer une instance Amazon EC2 dans une région donnée. Quelle contrainte spécifique à la région l'Amazon Machine Image (AMI) doit-elle respecter pour pouvoir être utilisée pour cette instance ?
    - A. Vous devez utiliser une AMI de la même région que l'instance EC2. La région de l'AMI n'a pas d'impact sur les performances de l'instance EC2.
    - B. Vous pouvez utiliser une AMI d'une région différente, mais cela dégrade les performances de l'instance EC2.
    - C. Vous devriez utiliser une AMI de la même région, car cela améliore les performances de l'instance EC2.
    - D. Une AMI est une entité globale, donc la région n'est pas applicable.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. L'AMI doit être dans la même région** : Les AMI sont spécifiques à une région. Vous pouvez copier une AMI vers une autre région, mais pour lancer une instance, l'AMI doit être présente dans cette région. La région n'affecte pas les performances.
    </details>

35. Une entreprise de dispositifs médicaux recherche un moyen durable et rentable de stocker ses données historiques. Pour des raisons de conformité, les données doivent être conservées pendant 10 ans. Quelle solution de stockage AWS suggéreriez-vous ?
    - A. Amazon S3 Glacier Deep Archive
    - B. Amazon S3 Glacier Flexible Retrieval
    - C. AWS Storage Gateway
    - D. Amazon Elastic File System (EFS)

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon S3 Glacier Deep Archive** : Classe de stockage la moins chère d'AWS pour l'archivage à long terme (7-10 ans ou plus), avec une durabilité élevée et un coût très bas.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon S3 Glacier Flexible Retrieval** : Moins cher que S3 Standard, mais plus cher que Deep Archive.
      - **C. AWS Storage Gateway** : Service de stockage hybride pour connecter des environnements sur site à AWS, pas pour l'archivage à long terme.
      - **D. Amazon EFS** : Système de fichiers élastique pour des charges de travail nécessitant un accès fréquent, coûteux pour l'archivage.
    </details>

36. Une entreprise de services financiers prévoit d'activer l'authentification multifacteur (MFA) pour ses employés. Pour faciliter les déplacements, ils préfèrent ne pas utiliser d'appareils physiques. Quelle option convient le mieux à ce cas d'usage ?
    - A. U2F security key
    - B. Virtual MFA device
    - C. Hardware MFA device
    - D. Soft Token MFA device

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Virtual MFA device** : Application logicielle (comme Google Authenticator) qui s'exécute sur un smartphone, ne nécessitant pas d'appareil physique dédié.
    - **Autres options incorrectes** ❌ :
      - **A. U2F security key** : Clé physique à brancher sur un port USB.
      - **C. Hardware MFA device** : Appareil matériel dédié.
      - **D. Soft Token MFA device** : Option fictive.
    </details>

37. Une agence de cybersécurité utilise AWS Cloud et souhaite effectuer des évaluations de sécurité sur sa propre infrastructure AWS sans approbation préalable d'AWS. Quelle pratique cela décrit/facilite-t-il ?
    - A. Network Stress Testing
    - B. Amazon Inspector
    - C. Penetration Testing
    - D. AWS Secrets Manager

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Penetration Testing** : AWS autorise les clients à effectuer des tests de pénétration sur leur propre infrastructure AWS sans approbation préalable, sous certaines conditions.
    - **Autres options incorrectes** ❌ :
      - **A. Network Stress Testing** : Tests de charge réseau, nécessitent une autorisation d'AWS.
      - **B. Amazon Inspector** : Service d'évaluation de sécurité automatisé, pas un test de pénétration manuel.
      - **D. AWS Secrets Manager** : Gestion des secrets.
    </details>

38. Parmi les affirmations suivantes concernant le modèle de responsabilité partagée AWS, lesquelles sont correctes ? (Sélectionnez deux)
    - A. AWS est responsable de la sécurité "du" cloud.
    - B. Pour un service comme Amazon EC2 (IaaS), AWS est responsable de la maintenance du système d'exploitation invité.
    - C. Pour des services abstraits comme Amazon S3, AWS opère la couche d'infrastructure, le système d'exploitation et les plateformes.
    - D. La gestion de la configuration est la responsabilité du client.
    - E. AWS est responsable de la formation des employés AWS et des clients sur les produits et services AWS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS est responsable de la sécurité "du" cloud** : AWS sécurise l'infrastructure qui exécute tous les services cloud.
      - **C. Pour des services abstraits comme Amazon S3, AWS opère la couche d'infrastructure, le système d'exploitation et les plateformes** : Pour les services managés (PaaS, SaaS), AWS assume plus de responsabilités.
    - **Autres options incorrectes** ❌ :
      - **B. Pour EC2 (IaaS), le client est responsable du SE invité**.
      - **D. La gestion de la configuration est partagée** : AWS gère la configuration de l'infrastructure sous-jacente, le client gère la configuration de ses ressources.
      - **E. La formation des employés clients est la responsabilité du client**.
    </details>

39. Parmi les services AWS suivants, lesquels ont le chiffrement des données activé automatiquement ? (Sélectionnez deux)
    - A. Amazon Elastic Block Store (EBS)
    - B. Amazon Simple Storage Service (S3)
    - C. Amazon Redshift
    - D. AWS Storage Gateway
    - E. Amazon Elastic File System (EFS)

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Amazon S3** : Chiffrement automatique avec SSE-S3 (clés gérées par S3) pour tous les nouveaux objets.
      - **D. AWS Storage Gateway** : Chiffre automatiquement les données en transit entre la passerelle et le stockage AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EBS** : Le chiffrement n'est pas activé par défaut (sauf si configuré au niveau du compte).
      - **C. Amazon Redshift** : Le chiffrement est optionnel.
      - **E. Amazon EFS** : Le chiffrement au repos est optionnel.
    </details>

40. AWS Marketplace facilite quels cas d'usage ? (Sélectionnez deux)
    - A. Vendre des solutions SaaS (Software as a Service) aux clients AWS.
    - B. Les clients AWS peuvent acheter des logiciels regroupés dans des AMI personnalisées par les vendeurs AWS Marketplace.
    - C. Acheter des documents de conformité auprès de fournisseurs tiers.
    - D. Acheter des instances EC2 réservées standard (RI).
    - E. Demander l'achat d'une connexion AWS Direct Connect.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Vendre des solutions SaaS** : AWS Marketplace permet aux éditeurs de logiciels de vendre leurs solutions SaaS.
      - **B. Acheter des logiciels via des AMI** : Les vendeurs peuvent proposer des logiciels préinstallés sur des AMI.
    - **Autres options incorrectes** ❌ :
      - **C. Documents de conformité** : C'est le rôle d'AWS Artifact.
      - **D. Acheter des instances réservées** : Se fait via la console EC2.
      - **E. Demander une connexion Direct Connect** : Se fait via la console Direct Connect.
    </details>

41. Une société de services financiers souhaite migrer de son datacenter sur site vers AWS Cloud. En tant que Cloud Practitioner, quel service AWS recommanderiez-vous pour que l'entreprise puisse comparer le coût d'exécution de son infrastructure sur site par rapport à AWS Cloud ?
    - A. AWS Trusted Advisor
    - B. AWS Budgets
    - C. AWS Cost Explorer
    - D. AWS Pricing Calculator

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Pricing Calculator** : Permet d'estimer le coût d'utilisation d'AWS basé sur votre architecture prévue, et de comparer avec les coûts sur site.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Trusted Advisor** : Recommande des optimisations pour des ressources AWS existantes.
      - **B. AWS Budgets** : Définit des budgets et des alertes pour les coûts AWS.
      - **C. AWS Cost Explorer** : Analyse les coûts et l'utilisation AWS passés.
    </details>

42. Quel service AWS peut vous aider à analyser votre infrastructure pour identifier les volumes EBS élastiques non attachés ou sous-utilisés ?
    - A. AWS Config
    - B. Amazon CloudWatch
    - C. Amazon Inspector
    - D. AWS Trusted Advisor

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Trusted Advisor** : Vérifie les volumes EBS non attachés ou à faible activité d'écriture et fournit des recommandations de coût.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Config** : Audite la configuration des ressources.
      - **B. Amazon CloudWatch** : Surveille les métriques et les logs.
      - **C. Amazon Inspector** : Évalue la sécurité des applications.
    </details>

43. Quel service AWS utiliserez-vous pour provisionner la même infrastructure AWS dans plusieurs comptes AWS et régions ?
    - A. AWS CloudFormation
    - B. AWS CodeDeploy
    - C. AWS OpsWorks
    - D. AWS Systems Manager

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS CloudFormation** : Avec CloudFormation StackSets, vous pouvez déployer des stacks dans plusieurs comptes et régions à partir d'un modèle unique.
    - **Autres options incorrectes** ❌ :
      - **B. AWS CodeDeploy** : Déploie des applications, pas de l'infrastructure.
      - **C. AWS OpsWorks** : Gestion de configuration avec Chef/Puppet.
      - **D. AWS Systems Manager** : Gestion opérationnelle des ressources.
    </details>

44. Une organisation maintient un VPC séparé pour chacune de ses unités métier. Deux unités doivent partager des données de manière privée. Quelle est la manière la plus optimale de partager des données de manière privée entre les deux VPC ?
    - A. VPC peering connection
    - B. AWS Site-to-Site VPN
    - C. AWS Direct Connect
    - D. VPC Endpoint

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. VPC peering connection** : Connexion privée directe entre deux VPC, permettant le routage du trafic entre eux sans passer par Internet.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Site-to-Site VPN** : Connecte un réseau sur site à un VPC via Internet, pas entre VPC.
      - **C. AWS Direct Connect** : Connexion dédiée entre un datacenter sur site et AWS.
      - **D. VPC Endpoint** : Permet une connexion privée à des services AWS, pas entre VPC.
    </details>

45. Quel avantage du cloud computing permet à AWS d'offrir des tarifs à la demande plus bas, car l'utilisation de centaines de milliers de clients est agrégée dans le cloud ?
    - A. Trade capital expense for variable expense
    - B. Increased speed and agility
    - C. Go global in minutes
    - D. Massive economies of scale

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Massive economies of scale** : Les économies d'échelle massives permettent à AWS d'offrir des prix plus bas car les coûts d'infrastructure sont répartis sur une large base de clients.
    </details>

46. Parmi les services suivants, lesquels sont des services de calcul serverless offerts par AWS ? (Sélectionnez deux)
    - A. Amazon Elastic Compute Cloud (EC2)
    - B. AWS Lambda
    - C. AWS Elastic Beanstalk
    - D. AWS Fargate
    - E. Amazon Lightsail

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. AWS Lambda** : Calcul serverless pour exécuter du code sans provisionner de serveurs.
      - **D. AWS Fargate** : Moteur de calcul serverless pour conteneurs (avec ECS ou EKS).
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EC2** : IaaS, nécessite la gestion des serveurs.
      - **C. AWS Elastic Beanstalk** : PaaS, provisionne des serveurs sous-jacents.
      - **E. Amazon Lightsail** : Offre des serveurs privés virtuels (VPS) simplifiés, pas serverless.
    </details>

47. Parmi les services AWS suivants, lequel peut être utilisé pour prévoir l'utilisation et les coûts de votre compte AWS ?
    - A. AWS Budgets
    - B. AWS Cost Explorer
    - C. AWS Pricing Calculator
    - D. AWS Cost & Usage Report (CUR)

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Cost Explorer** : Offre des fonctionnalités de prévision (forecasting) basées sur les données historiques d'utilisation et de coût.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Budgets** : Définit des budgets et des alertes, mais ne fait pas de prévisions détaillées.
      - **C. AWS Pricing Calculator** : Estime les coûts futurs basés sur une architecture modélisée, pas sur l'utilisation historique.
      - **D. AWS Cost & Usage Report** : Rapport détaillé des coûts, mais sans fonction de prévision intégrée.
    </details>

48. Parmi les options suivantes, laquelle est un service de conteneurs d'AWS ?
    - A. AWS Elastic Beanstalk
    - B. Amazon Simple Notification Service (SNS)
    - C. AWS Fargate
    - D. Amazon SageMaker

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Fargate** : Moteur de calcul serverless pour exécuter des conteneurs sans gérer les serveurs sous-jacents.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Elastic Beanstalk** : Service PaaS pour déployer des applications, peut utiliser des conteneurs mais n'est pas un service de conteneurs pur.
      - **B. Amazon SNS** : Service de messagerie pub/sub.
      - **D. Amazon SageMaker** : Service de machine learning.
    </details>

49. Parmi les mécanismes d'authentification AWS suivants, lequel prend en charge un appareil MFA AWS que vous pouvez brancher sur un port USB de votre ordinateur ?
    - A. Virtual MFA device
    - B. U2F security key
    - C. Hardware MFA device
    - D. SMS text message-based MFA

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. U2F security key** : Clé de sécurité physique (comme une clé YubiKey) qui se branche sur un port USB.
    - **Autres options incorrectes** ❌ :
      - **A. Virtual MFA device** : Application sur smartphone.
      - **C. Hardware MFA device** : Appareil matériel dédié générant des codes, mais pas nécessairement branché en USB (peut être un token autonome).
      - **D. SMS text message-based MFA** : Code envoyé par SMS.
    </details>

50. AWS Organizations fournit quels avantages ? (Sélectionnez deux)
    - A. Vérifier les vulnérabilités sur les instances EC2 dans les comptes membres.
    - B. Déployer des correctifs sur les instances EC2 dans les comptes membres.
    - C. Provisionner des instances EC2 Spot dans les comptes membres.
    - D. Remises volume pour Amazon EC2 et Amazon S3 agrégées sur les comptes membres.
    - E. Partager les instances EC2 réservées entre les comptes membres.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **D. Remises volume agrégées** : La facturation consolidée combine l'utilisation de tous les comptes, permettant des remises volume.
      - **E. Partager les instances EC2 réservées** : Les avantages de facturation des instances réservées peuvent être partagés entre les comptes membres.
    - **Autres options incorrectes** ❌ :
      - **A, B, C** : AWS Organizations ne fournit pas ces fonctionnalités directement ; d'autres services comme Inspector, Systems Manager, ou EC2 sont utilisés.
    </details>

51. Quel service AWS choisiriez-vous pour un projet de traitement de données nécessitant une base de données sans schéma (schemaless) ?
    - A. Amazon RedShift
    - B. Amazon Aurora
    - C. Amazon Relational Database Service (RDS)
    - D. Amazon DynamoDB

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon DynamoDB** : Base de données NoSQL clé-valeur et document, sans schéma prédéfini.
    - **Autres options incorrectes** ❌ :
      - **A, B, C** : Sont des bases de données relationnelles qui nécessitent un schéma défini.
    </details>

52. Quelle entité assure que votre application sur Amazon EC2 a toujours la bonne capacité pour gérer la demande de trafic actuelle ?
    - A. Multi-AZ deployment
    - B. Amazon EC2 Auto Scaling
    - C. Network Load Balancer
    - D. Application Load Balancer

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon EC2 Auto Scaling** : Surveille votre application et ajuste automatiquement le nombre d'instances EC2 pour maintenir les performances et réduire les coûts.
    - **Autres options incorrectes** ❌ :
      - **A. Multi-AZ deployment** : Pour la haute disponibilité, pas pour l'ajustement de capacité.
      - **C et D** : Répartissent le trafic, mais ne provisionnent pas automatiquement de nouvelles instances.
    </details>

53. Laquelle des affirmations suivantes est la PLUS précise pour décrire AWS Elastic Beanstalk ?
    - A. C'est une Infrastructure as Code (IaC) qui vous permet de modéliser et provisionner les ressources nécessaires pour une application.
    - B. C'est un Platform as a Service (PaaS) qui vous permet de modéliser et provisionner les ressources nécessaires pour une application.
    - C. C'est une Infrastructure as a Service (IaaS) qui vous permet de déployer et mettre à l'échelle des applications web.
    - D. C'est un Platform as a Service (PaaS) qui vous permet de déployer et mettre à l'échelle des applications web.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. PaaS pour déployer et mettre à l'échelle des applications web** : Elastic Beanstalk est un service PaaS qui gère le déploiement, la mise à l'échelle et la surveillance des applications, tandis que le développeur se concentre sur le code.
    - **Autres options incorrectes** ❌ :
      - **A et B** : La modélisation et le provisionnement d'infrastructure sont le rôle d'AWS CloudFormation (IaC).
      - **C** : Elastic Beanstalk n'est pas un IaaS ; il abstrait l'infrastructure sous-jacente.
    </details>

54. Parmi les options suivantes, lesquelles sont des avantages d'utiliser AWS Elastic Load Balancing (ELB) ? (Sélectionnez deux)
    - A. High availability
    - B. Fault tolerance
    - C. Agility
    - D. Less costly
    - E. Storage

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. High availability** : Répartit le trafic entre plusieurs instances saines dans plusieurs zones de disponibilité.
      - **B. Fault tolerance** : Détecte les instances défaillantes et redirige le trafic vers des instances saines.
    - **Autres options incorrectes** ❌ :
      - **C, D, E** : Ne sont pas des avantages directs d'ELB.
    </details>

55. Quel service AWS peut être utilisé pour s'abonner à un flux RSS pour être notifié de l'état de toutes les interruptions de service AWS ?
    - A. Amazon Simple Notification Service (SNS)
    - B. AWS Health Dashboard - Your Account Health
    - C. AWS Health Dashboard - Service Health
    - D. AWS Lambda

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Health Dashboard - Service Health** : Fournit un flux RSS pour les interruptions de service AWS générales.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon SNS** : Service de notification, mais pas spécifiquement pour les statuts de service.
      - **B. AWS Health Dashboard - Your Account Health** : Vue personnalisée pour votre compte.
      - **D. AWS Lambda** : Calcul serverless.
    </details>

56. Un développeur souhaite automatiser les opérations sur son environnement sur site en utilisant Chef et Puppet. Quel service AWS peut aider à cette tâche ?
    - A. AWS CloudFormation
    - B. AWS CodeDeploy
    - C. AWS Batch
    - D. AWS OpsWorks

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS OpsWorks** : Service de gestion de configuration qui fournit des instances managées de Chef et Puppet pour automatiser la configuration des serveurs sur AWS et sur site.
    - **Autres options incorrectes** ❌ :
      - **A. AWS CloudFormation** : Provisionnement d'infrastructure.
      - **B. AWS CodeDeploy** : Déploiement d'applications.
      - **C. AWS Batch** : Traitement par lots.
    </details>

57. Parmi les options suivantes, lesquelles sont des meilleures pratiques lors de l'utilisation d'AWS Organizations ? (Sélectionnez deux)
    - A. Créer des comptes AWS par département.
    - B. Ne jamais utiliser de balises pour la facturation.
    - C. Désactiver AWS CloudTrail sur plusieurs comptes.
    - D. Ne pas utiliser AWS Organizations pour automatiser la création de comptes AWS.
    - E. Restreindre les privilèges des comptes à l'aide de Service Control Policies (SCP).

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Créer des comptes par département** : Pour l'isolation des ressources et la gestion des limites.
      - **E. Utiliser des SCP pour restreindre les privilèges** : Les SCP permettent d'appliquer des garde-fous de permissions au niveau de l'organisation.
    - **Autres options incorrectes** ❌ :
      - **B. Ne pas utiliser de balises** : Faux, les balises sont recommandées pour la catégorisation et la facturation.
      - **C. Désactiver CloudTrail** : Faux, CloudTrail doit être activé pour l'audit.
      - **D. Ne pas utiliser Organizations pour automatiser** : Faux, Organizations permet d'automatiser la création de comptes.
    </details>

58. Un Cloud Practitioner souhaite obtenir des insights opérationnels sur ses ressources pour identifier rapidement tout problème pouvant impacter les applications utilisant ces ressources. Quel service AWS peut aider à cette tâche ?
    - A. Amazon Inspector
    - B. AWS Systems Manager
    - C. AWS Health Dashboard - Your Account Health
    - D. AWS Trusted Advisor

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Systems Manager** : Fournit une vue unifiée des données opérationnelles de multiples services AWS, permettant de surveiller, dépanner et agir sur des groupes de ressources.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Inspector** : Évaluation de sécurité automatisée.
      - **C. AWS Health Dashboard** : Alertes sur les événements AWS impactant vos ressources.
      - **D. AWS Trusted Advisor** : Recommandations d'optimisation.
    </details>

59. Parmi les options suivantes, laquelle N'EST PAS une fonctionnalité d'Amazon Inspector ?
    - A. Automatiser les évaluations de sécurité.
    - B. Analyser contre l'accessibilité réseau non intentionnelle.
    - C. Suivre les changements de configuration.
    - D. Inspecter les systèmes d'exploitation en cours d'exécution contre les vulnérabilités connues.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Suivre les changements de configuration** : C'est une fonctionnalité d'AWS Config.
    - **Autres options incorrectes** ❌ :
      - **A, B, D** : Sont des fonctionnalités d'Amazon Inspector.
    </details>

60. Un Cloud Practitioner souhaite déployer des ressources identiques dans toutes les régions et comptes AWS à l'aide de modèles tout en estimant les coûts. Quel service AWS peut aider à cette tâche ?
    - A. AWS Directory Service for Microsoft Active Directory
    - B. Amazon Lightsail
    - C. AWS CodeDeploy
    - D. AWS CloudFormation

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS CloudFormation** : Permet de modéliser et provisionner des ressources AWS dans plusieurs comptes et régions via des templates, et d'estimer les coûts.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Directory Service** : Service d'annuaire managé.
      - **B. Amazon Lightsail** : Service simplifié de VPS, pas pour des déploiements multi-comptes/régions.
      - **C. AWS CodeDeploy** : Déploiement d'applications.
    </details>

61. Une entreprise souhaite simplifier la gestion des accès à plusieurs comptes AWS et faciliter l'accès par Single Sign-On (SSO) à ses comptes AWS. En tant que Cloud Practitioner, quel service utiliseriez-vous ?
    - A. AWS IAM Identity Center
    - B. AWS Cognito
    - C. AWS Identity and Access Management (IAM)
    - D. AWS Command Line Interface (CLI)

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS IAM Identity Center** (anciennement AWS SSO) : Permet de gérer l'accès centralisé à plusieurs comptes AWS et applications cloud avec SSO.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Cognito** : Gestion des identités utilisateur pour les applications web/mobiles (B2C/B2B).
      - **C. AWS IAM** : Gère les utilisateurs et permissions au sein d'un compte unique.
      - **D. AWS CLI** : Interface en ligne de commande.
    </details>

62. Une entreprise souhaite séparer les coûts des services AWS par département pour l'allocation des coûts. Quelle est la manière la plus simple d'atteindre cet objectif ?
    - A. Créer des comptes différents pour chaque département.
    - B. Créer des balises pour chaque département.
    - C. Créer un compte unique pour tous les départements et le partager.
    - D. Créer des VPC différents pour chaque département.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Créer des balises** : Les balises (tags) permettent de catégoriser les ressources par département, puis d'utiliser AWS Cost Explorer ou les rapports de coût pour allouer les coûts.
    - **Autres options incorrectes** ❌ :
      - **A. Créer des comptes différents** : Possible mais plus complexe à gérer.
      - **C. Partager un compte** : Non recommandé pour des raisons de sécurité et de gouvernance.
      - **D. Créer des VPC différents** : N'aide pas directement à la séparation des coûts.
    </details>

63. Parmi les options suivantes, lesquelles sont des avantages d'utiliser le cloud AWS ? (Sélectionnez deux)
    - A. Scaling limité
    - B. AWS est responsable de la sécurité dans le cloud
    - C. Augmenter la vitesse et l'agilité
    - D. Arrêter de deviner la capacité
    - E. Échanger les dépenses opérationnelles contre des dépenses en capital

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Augmenter la vitesse et l'agilité** : Provisionnement rapide des ressources.
      - **D. Arrêter de deviner la capacité** : Mise à l'échelle élastique selon la demande.
    - **Autres options incorrectes** ❌ :
      - **A. Scaling limité** : Faux, le cloud offre un scaling illimité.
      - **B. AWS est responsable de la sécurité dans le cloud** : Faux, c'est un modèle de responsabilité partagée.
      - **E. Échanger les dépenses opérationnelles contre des dépenses en capital** : C'est l'inverse : on échange les CAPEX (investissements initiaux) contre des OPEX (coûts variables).
    </details>

64. Une entreprise souhaite optimiser les coûts d'Amazon EC2. Quelles actions peuvent aider à cette tâche ? (Sélectionnez deux)
    - A. Configurer des groupes Auto Scaling pour aligner le nombre d'instances avec la demande.
    - B. Mettre à l'échelle verticalement les instances EC2.
    - C. Opter pour un plan de support AWS plus élevé.
    - D. Acheter des instances EC2 réservées (RI).
    - E. Construire ses propres serveurs.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Auto Scaling** : Ajuste automatiquement la capacité pour éviter la sur-provisionnement.
      - **D. Instances réservées** : Réduction de coût pour des charges de travail prévisibles à long terme.
    - **Autres options incorrectes** ❌ :
      - **B. Mise à l'échelle verticale** : Peut être coûteuse et limitée.
      - **C. Plan de support plus élevé** : N'affecte pas directement les coûts d'EC2.
      - **E. Construire ses serveurs** : Généralement plus coûteux que d'utiliser EC2.
    </details>

65. Une startup souhaite déployer rapidement une technologie populaire sur AWS. En tant que Cloud Practitioner, quel outil AWS utiliseriez-vous pour cette tâche ?
    - A. AWS Forums
    - B. AWS Partner Solutions (anciennement Quick Starts)
    - C. AWS CodeDeploy
    - D. AWS Whitepapers

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Partner Solutions (Quick Starts)** : Références de déploiement automatisées pour des technologies populaires sur AWS, avec des modèles CloudFormation et des guides de meilleures pratiques.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Forums** : Communauté d'entraide.
      - **C. AWS CodeDeploy** : Déploiement d'applications.
      - **D. AWS Whitepapers** : Documentation technique.
    </details>