# Examen de pratique 3

1. Où pouvez-vous stocker des fichiers dans AWS ? (Choisissez DEUX)
    - A. Amazon EFS.
    - B. Amazon SNS.
    - C. Amazon EBS.
    - D. Amazon ECS.
    - E. Amazon EMR.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Amazon EFS** : Service de stockage de fichiers élastique et géré (NFS) pour les instances EC2.
      - **C. Amazon EBS** : Service de stockage par blocs pour les instances EC2, permettant de stocker des fichiers sous forme de volumes persistants.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon SNS** : Service de notification et de messagerie, pas de stockage de fichiers.
      - **D. Amazon ECS** : Service de gestion de conteneurs, pas de stockage.
      - **E. Amazon EMR** : Service de big data pour le traitement de grands ensembles de données, pas de stockage de fichiers de base.
    </details>

2. Quel service AWS peut être utilisé pour stocker et livrer de manière fiable des messages entre des systèmes distribués ?
    - A. Amazon Simple Queue Service.
    - B. AWS Storage Gateway.
    - C. Amazon Simple Email Service.
    - D. Amazon Simple Storage Service.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon Simple Queue Service (SQS)** : Service de file d'attente de messages entièrement géré qui découple et met à l'échelle les microservices, les systèmes distribués et les applications sans serveur.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Storage Gateway** : Service de stockage hybrre qui connecte les environnements sur site au stockage cloud.
      - **C. Amazon Simple Email Service (SES)** : Service de courrier électronique transactionnel.
      - **D. Amazon Simple Storage Service (S3)** : Service de stockage d'objets.
    </details>

3. Lequel des éléments suivants décrit le modèle de paiement qu'AWS met à disposition pour les clients qui peuvent s'engager à utiliser Amazon EC2 sur une période d'un ou trois ans pour réduire leurs coûts informatiques totaux ?
    - A. Payez moins à mesure qu'AWS grandit.
    - B. Payez à l'usage.
    - C. Payez moins en utilisant plus.
    - D. Économisez lorsque vous réservez.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Économisez lorsque vous réservez** : Les instances réservées (Reserved Instances) offrent une remise importante par rapport aux instances à la demande en échange d'un engagement d'un ou trois ans.
    - **Autres options incorrectes** ❌ :
      - **A. Payez moins à mesure qu'AWS grandit** : Référence aux économies d'échelle d'AWS, mais pas un modèle de paiement spécifique.
      - **B. Payez à l'usage** : Modèle de paiement standard pour les instances à la demande, sans engagement.
      - **C. Payez moins en utilisant plus** : Référence aux remises volume, mais pas spécifique aux engagements à long terme.
    </details>

4. Une entreprise migre sa base de données sur site vers Amazon RDS. Que doit faire l'entreprise pour s'assurer que les coûts d'Amazon RDS sont minimisés ?
    - A. Dimensionner correctement avant et après la migration.
    - B. Utiliser une architecture Multi-Région Active-Passive.
    - C. Combiner des réservations de capacité à la demande avec des Savings Plans.
    - D. Utiliser une architecture Multi-Région Active-Active.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Dimensionner correctement avant et après la migration** : Choisir la bonne taille d'instance et classe de stockage en fonction des besoins réels de performance et de capacité est essentiel pour optimiser les coûts.
    - **Autres options incorrectes** ❌ :
      - **B. Utiliser une architecture Multi-Région Active-Passive** : Augmente les coûts et la complexité, utilisé pour la haute disponibilité et la reprise après sinistre, pas pour réduire les coûts.
      - **C. Combiner des réservations de capacité à la demande avec des Savings Plans** : Les réservations de capacité à la demande sont pour EC2, pas pour RDS. Pour RDS, on utilise des instances réservées.
      - **D. Utiliser une architecture Multi-Région Active-Active** : Encore plus coûteux et complexe, utilisé pour la haute disponibilité mondiale.
    </details>

5. Quel est le service de stockage principal utilisé par les instances de base de données Amazon RDS ?
    - A. Amazon Glacier.
    - B. Amazon EBS.
    - C. Amazon EFS.
    - D. Amazon S3.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon EBS** : Amazon RDS utilise des volumes Amazon EBS (Elastic Block Store) pour le stockage des données et des journaux.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Glacier** : Service d'archivage à long terme.
      - **C. Amazon EFS** : Stockage de fichiers, non utilisé par RDS.
      - **D. Amazon S3** : Stockage d'objets, utilisé par RDS pour les sauvegardes et les snapshots, mais pas pour le stockage principal en temps réel.
    </details>

6. Une entreprise développe une nouvelle application utilisant un framework de microservices. La nouvelle application rencontre des problèmes de performance et de latence. Quel service AWS doit être utilisé pour résoudre ces problèmes ?
    - A. AWS CodePipeline.
    - B. AWS X-Ray.
    - C. Amazon Inspector.
    - D. AWS CloudTrail.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS X-Ray** : Service de traçage distribué qui aide les développeurs à analyser et déboguer les applications distribuées, telles que celles construites avec une architecture de microservices.
    - **Autres options incorrectes** ❌ :
      - **A. AWS CodePipeline** : Service de livraison continue pour automatiser les pipelines de release.
      - **C. Amazon Inspector** : Service d'évaluation de sécurité automatisé pour les applications.
      - **D. AWS CloudTrail** : Service de journalisation des appels d'API pour la gouvernance et l'audit.
    </details>

7. Lequel des services AWS suivants est conçu avec une tolérance aux pannes Multi-AZ native à l'esprit ? (Choisissez DEUX)
    - A. Amazon Redshift.
    - B. AWS Snowball.
    - C. Amazon Simple Storage Service.
    - D. Amazon EBS.
    - E. Amazon DynamoDB.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Amazon Simple Storage Service (S3)** : Conçu pour une durabilité de 99,999999999% (11 9) et une disponibilité de 99,99% en stockant les données sur plusieurs installations et dispositifs dans une région.
      - **E. Amazon DynamoDB** : Base de données NoSQL entièrement gérée qui réplique automatiquement les données sur trois zones de disponibilité dans une région.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Redshift** : Entrepôt de données qui peut être configuré pour la haute disponibilité, mais nécessite une configuration manuelle (comme le déploiement multi-AZ).
      - **B. AWS Snowball** : Appareil de transfert de données physique, pas un service cloud avec tolérance aux pannes native.
      - **D. Amazon EBS** : Les volumes EBS sont liés à une zone de disponibilité spécifique. Pour la tolérance aux pannes, vous devez créer des snapshots et les restaurer dans une autre AZ.
    </details>

8. Quelles sont les fonctionnalités d'Amazon RDS qui peuvent être utilisées pour améliorer la disponibilité de votre base de données ? (Choisissez DEUX)
    - A. Régions AWS.
    - B. Déploiement Multi-AZ.
    - C. Mise à jour corrective automatique.
    - D. Réplicas de lecture.
    - E. Emplacements périphériques.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Déploiement Multi-AZ** : Synchronise les données vers une instance de secours dans une autre zone de disponibilité pour la reprise en cas de défaillance.
      - **D. Réplicas de lecture** : Permettent de mettre à l'échelle les lectures et peuvent être promus en base de données principale en cas de défaillance.
    - **Autres options incorrectes** ❌ :
      - **A. Régions AWS** : Amazon RDS est un service régional, mais la haute disponibilité multi-région nécessite une configuration manuelle (par exemple, avec la réplication entre régions).
      - **C. Mise à jour corrective automatique** : Améliore la sécurité et la stabilité, mais n'augmente pas directement la disponibilité.
      - **E. Emplacements périphériques** : Utilisés par CloudFront pour la mise en cache, pas par RDS.
    </details>

9. Sarah a déployé une application dans la région de Californie du Nord (us-west-1). Après avoir examiné le trafic de l'application, elle remarque qu'environ 30 % du trafic provient d'Asie. Que peut-elle faire pour réduire la latence pour les utilisateurs en Asie ?
    - A. Répliquer les ressources actuelles sur plusieurs zones de disponibilité dans la même région.
    - B. Migrer l'application vers un hébergeur en Asie.
    - C. Recréer le contenu du site web.
    - D. Créer un CDN avec CloudFront, de sorte que le contenu soit mis en cache dans des emplacements périphériques proches de l'Asie et en Asie.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Créer un CDN avec CloudFront** : Amazon CloudFront met en cache le contenu (statique et dynamique) dans des emplacements périphériques à travers le monde, réduisant ainsi la latence pour les utilisateurs finaux.
    - **Autres options incorrectes** ❌ :
      - **A. Répliquer les ressources... dans la même région** : Cela améliore la disponibilité, mais ne réduit pas la latence pour les utilisateurs en Asie.
      - **B. Migrer l'application vers un hébergeur en Asie** : Cela impliquerait de quitter AWS, ce qui n'est pas nécessaire. AWS a des régions en Asie.
      - **C. Recréer le contenu du site web** : Ne résout pas le problème de latence.
    </details>

10. Une organisation exécute de nombreux systèmes et utilise de nombreux produits AWS. Lequel des services suivants leur permet de contrôler la façon dont chaque développeur interagit avec ces produits ?
    - A. AWS Identity and Access Management.
    - B. Amazon RDS.
    - C. Listes de contrôle d'accès réseau.
    - D. Amazon EMR.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Identity and Access Management (IAM)** : Service qui vous permet de gérer les accès aux services et ressources AWS de manière sécurisée.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon RDS** : Service de base de données relationnelle.
      - **C. Listes de contrôle d'accès réseau (NACL)** : Contrôle le trafic au niveau du sous-réseau, pas des utilisateurs.
      - **D. Amazon EMR** : Service de big data.
    </details>

11. L'utilisation d'Amazon EC2 relève de quel modèle de cloud computing ?
    - A. IaaS & SaaS.
    - B. IaaS.
    - C. SaaS.
    - D. PaaS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. IaaS (Infrastructure as a Service)** : Amazon EC2 fournit une infrastructure de calcul virtualisée où le client a le contrôle sur le système d'exploitation, le stockage et les applications déployées.
    - **Autres options incorrectes** ❌ :
      - **A. IaaS & SaaS** : EC2 n'est pas un Software as a Service.
      - **C. SaaS** : Logiciel en tant que service, comme Salesforce ou Gmail.
      - **D. PaaS** : Plateforme en tant que service, comme Elastic Beanstalk, où le fournisseur gère plus de couches.
    </details>

12. Laquelle des affirmations suivantes est une meilleure pratique lors de la création d'applications sur AWS ?
    - A. Renforcer la sécurité physique en appliquant le principe du moindre privilège.
    - B. S'assurer que l'application s'exécute sur du matériel de fournisseurs de confiance.
    - C. Utiliser les politiques IAM pour maintenir les performances.
    - D. Découpler les composants de l'application afin qu'ils s'exécutent indépendamment.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Découpler les composants de l'application** : Le découplage (loose coupling) réduit les interdépendances, améliore la résilience, la scalabilité et la facilité de maintenance.
    - **Autres options incorrectes** ❌ :
      - **A. Renforcer la sécurité physique...** : La sécurité physique est de la responsabilité d'AWS. Le principe du moindre privilège s'applique aux autorisations logiques, pas physiques.
      - **B. S'assurer que l'application s'exécute sur du matériel de fournisseurs de confiance** : AWS gère le matériel, le client n'a pas à s'en soucier.
      - **C. Utiliser les politiques IAM pour maintenir les performances** : Les politiques IAM contrôlent les accès, pas les performances.
    </details>

13. Votre entreprise conçoit une nouvelle application qui stockera et récupérera des photos et des vidéos. Lequel des services suivants recommanderiez-vous comme mécanisme de stockage sous-jacent ?
    - A. Amazon EBS.
    - B. Amazon SQS.
    - C. Stockage d'instance Amazon.
    - D. Amazon S3.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon S3** : Idéal pour stocker et récupérer des objets multimédias à grande échelle, avec une durabilité, une disponibilité et une scalabilité élevées.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EBS** : Stockage par blocs pour les instances EC2, pas adapté au stockage d'objets multimédias à grande échelle.
      - **B. Amazon SQS** : Service de file d'attente de messages.
      - **C. Stockage d'instance Amazon** : Stockage temporaire par bloc attaché à une instance EC2, non persistant.
    </details>

14. Amazon Glacier est une classe de stockage Amazon S3 adaptée au stockage de [...] et [...]. (Choisissez DEUX)
    - A. Archives actives.
    - B. Ressources de sites web dynamiques.
    - C. Données d'analyse à long terme.
    - D. Bases de données actives.
    - E. Données en cache.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Archives actives** : Données archivées auxquelles on peut accéder occasionnellement, mais qui doivent être conservées à long terme.
      - **C. Données d'analyse à long terme** : Données historiques utilisées pour l'analyse, rarement consultées.
    - **Autres options incorrectes** ❌ :
      - **B. Ressources de sites web dynamiques** : Les ressources de sites web dynamiques sont généralement servies depuis S3 Standard ou CloudFront.
      - **D. Bases de données actives** : Les bases de données actives nécessitent un accès à faible latence, pas un service d'archivage.
      - **E. Données en cache** : Les données en cache sont stockées dans des services comme ElastiCache ou CloudFront.
    </details>

15. Que fournit Amazon Elastic Beanstalk ?
    - A. Une solution PaaS pour automatiser le déploiement d'applications.
    - B. Un moteur de calcul pour Amazon ECS.
    - C. Une solution de stockage de fichiers évolutive à utiliser avec AWS et les serveurs sur site.
    - D. Un service de base de données NoSQL.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Une solution PaaS pour automatiser le déploiement d'applications** : Elastic Beanstalk est une plateforme as a service (PaaS) qui simplifie le déploiement et la mise à l'échelle d'applications.
    - **Autres options incorrectes** ❌ :
      - **B. Un moteur de calcul pour Amazon ECS** : ECS utilise EC2 ou Fargate comme moteur de calcul.
      - **C. Une solution de stockage de fichiers évolutive** : Cela décrirait Amazon EFS.
      - **D. Un service de base de données NoSQL** : Cela décrirait Amazon DynamoDB.
    </details>

16. Quel est le service AWS qui effectue des évaluations réseau automatisées des instances Amazon EC2 pour vérifier les vulnérabilités ?
    - A. Amazon Kinesis.
    - B. Groupes de sécurité.
    - C. Amazon Inspector.
    - D. Listes de contrôle d'accès réseau AWS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon Inspector** : Service d'évaluation de sécurité automatisé qui analyse les vulnérabilités des applications et des systèmes d'exploitation sur EC2.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Kinesis** : Service pour l'analyse de flux de données en temps réel.
      - **B. Groupes de sécurité** : Firewall au niveau de l'instance, pas un service d'évaluation automatisée.
      - **D. Listes de contrôle d'accès réseau (NACL)** : Contrôle d'accès au niveau du sous-réseau.
    </details>

17. Selon le modèle de responsabilité partagée, lesquels des contrôles suivants les clients héritent-ils entièrement d'AWS ? (Choisissez DEUX)
    - A. Contrôles de gestion des correctifs.
    - B. Contrôles de base de données.
    - C. Sensibilisation et formation.
    - D. Contrôles environnementaux.
    - E. Contrôles physiques.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **D. Contrôles environnementaux** : AWS est responsable des contrôles environnementaux (climatisation, alimentation, etc.) dans les centres de données.
      - **E. Contrôles physiques** : AWS est responsable de la sécurité physique des centres de données (accès, surveillance, etc.).
    - **Autres options incorrectes** ❌ :
      - **A. Contrôles de gestion des correctifs** : Partagé. AWS corrige l'infrastructure sous-jacente, le client corrige le système d'exploitation invité et les applications.
      - **B. Contrôles de base de données** : Partagé. Pour un service managé comme RDS, AWS corrige le moteur de base de données, mais le client est responsable de la configuration et des données.
      - **C. Sensibilisation et formation** : Responsabilité du client.
    </details>

18. Une entreprise a besoin d'héberger une base de données dans Amazon RDS pendant au moins trois ans. Laquelle des options suivantes serait la solution la plus rentable ?
    - A. Instances réservées - Aucun paiement initial.
    - B. Instances réservées - Paiement partiel initial.
    - C. Instances à la demande.
    - D. Instances Spot.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Instances réservées - Paiement partiel initial** : Pour un engagement de trois ans, les instances réservées avec paiement partiel initial offrent un taux d'actualisation plus élevé que celles sans paiement initial, et sont beaucoup moins chères que les instances à la demande.
    - **Autres options incorrectes** ❌ :
      - **A. Instances réservées - Aucun paiement initial** : Moins de remise que le paiement partiel initial.
      - **C. Instances à la demande** : Les plus chères pour une utilisation à long terme.
      - **D. Instances Spot** : Non disponibles pour RDS. RDS ne prend en charge que les instances à la demande et réservées.
    </details>

19. Votre application a récemment connu une croissance mondiale significative, et les utilisateurs internationaux se plaignent d'une latence élevée. Quelle est la caractéristique AWS qui peut aider à améliorer l'expérience de vos utilisateurs internationaux ?
    - A. Élasticité.
    - B. Portée mondiale.
    - C. Durabilité des données.
    - D. Haute disponibilité.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Portée mondiale** : AWS a une infrastructure mondiale avec des régions et des emplacements périphériques dans le monde entier, permettant de déployer des ressources plus près des utilisateurs finaux.
    - **Autres options incorrectes** ❌ :
      - **A. Élasticité** : Capacité de mise à l'échelle des ressources, mais ne réduit pas directement la latence géographique.
      - **C. Durabilité des données** : Protection contre la perte de données.
      - **D. Haute disponibilité** : Réduction des temps d'arrêt, mais pas spécifiquement la latence.
    </details>

20. Les Savings Plans sont disponibles pour lesquels des services de calcul AWS suivants ? (Choisissez DEUX)
    - A. AWS Batch.
    - B. AWS Outposts.
    - C. Amazon Lightsail.
    - D. Amazon EC2.
    - E. AWS Lambda.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **D. Amazon EC2** : Les Savings Plans s'appliquent à l'utilisation d'EC2.
      - **E. AWS Lambda** : Les Savings Plans s'appliquent également à l'utilisation de Lambda.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Batch** : Non éligible aux Savings Plans.
      - **B. AWS Outposts** : Non éligible aux Savings Plans (les ressources Outposts sont facturées différemment).
      - **C. Amazon Lightsail** : Offre des plans forfaitaires, pas de Savings Plans.
    </details>

21. Une entreprise a des charges de travail critiques pour l'entreprise hébergées sur AWS et elle n'accepte aucun temps d'arrêt. Lequel des éléments suivants est une meilleure pratique recommandée pour protéger ses charges de travail en cas de catastrophe naturelle imprévue ?
    - A. Répliquer les données sur plusieurs emplacements périphériques dans le monde et utiliser Amazon CloudFront pour effectuer un basculement automatique en cas de panne.
    - B. Déployer des ressources AWS sur plusieurs zones de disponibilité dans la même région AWS.
    - C. Créer des sauvegardes ponctuelles dans un autre sous-réseau et récupérer ces données lorsqu'une catastrophe se produit.
    - D. Déployer des ressources AWS dans une autre région AWS et mettre en œuvre une stratégie de reprise après sinistre Active-Active.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Déployer des ressources AWS dans une autre région AWS et mettre en œuvre une stratégie de reprise après sinistre Active-Active** : Pour se protéger contre une catastrophe à l'échelle d'une région, il faut une architecture multi-régions. Le mode Active-Active offre une disponibilité continue.
    - **Autres options incorrectes** ❌ :
      - **A. Répliquer les données sur plusieurs emplacements périphériques...** : Les emplacements périphériques sont pour la mise en cache, pas pour l'exécution d'applications complètes. CloudFront ne gère pas le basculement d'applications.
      - **B. Déployer sur plusieurs zones de disponibilité dans la même région** : Protège contre les défaillances d'une zone de disponibilité, mais pas d'une région entière.
      - **C. Créer des sauvegardes ponctuelles dans un autre sous-réseau** : Un sous-réseau est dans la même zone de disponibilité, donc ne protège pas contre une catastrophe régionale.
    </details>

22. Quelle affirmation est correcte concernant les limites de service AWS ? (Choisissez DEUX)
    - A. Vous pouvez contacter le support AWS pour augmenter les limites de service.
    - B. Chaque utilisateur IAM a les mêmes limites de service.
    - C. Il n'y a pas de limites de service sur AWS.
    - D. Vous pouvez utiliser AWS Trusted Advisor pour surveiller vos limites de service.
    - E. Le Amazon Simple Email Service est responsable de l'envoi de notifications par e-mail lorsque l'utilisation approche une limite de service.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Vous pouvez contacter le support AWS pour augmenter les limites de service** : De nombreuses limites de service peuvent être augmentées sur demande.
      - **D. Vous pouvez utiliser AWS Trusted Advisor pour surveiller vos limites de service** : Trusted Advisor fournit une vérification des limites de service et alerte lorsque l'utilisation approche des limites.
    - **Autres options incorrectes** ❌ :
      - **B. Chaque utilisateur IAM a les mêmes limites de service** : Les limites de service s'appliquent généralement au compte AWS, pas par utilisateur IAM.
      - **C. Il n'y a pas de limites de service sur AWS** : Faux. AWS impose des limites pour protéger les clients et le système.
      - **E. Le Amazon Simple Email Service est responsable de l'envoi de notifications par e-mail...** : C'est Trusted Advisor ou Service Quotas qui envoie des alertes, pas SES.
    </details>

23. Quel est l'outil AWS qui vous permet d'utiliser des scripts pour gérer tous les services et ressources AWS ?
    - A. Console AWS.
    - B. AWS Service Catalog.
    - C. AWS OpsWorks.
    - D. AWS CLI.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS CLI** : Interface en ligne de commande qui permet d'interagir avec les services AWS à l'aide de commandes dans un shell.
    - **Autres options incorrectes** ❌ :
      - **A. Console AWS** : Interface web graphique, pas basée sur des scripts.
      - **B. AWS Service Catalog** : Service qui permet de créer et de gérer des catalogues de services informatiques approuvés.
      - **C. AWS OpsWorks** : Service de gestion de configuration et de déploiement d'applications.
    </details>

24. Quelles sont les options de connectivité qui peuvent être utilisées pour construire des architectures cloud hybrides ? (Choisissez DEUX)
    - A. AWS Artifact.
    - B. AWS Cloud9.
    - C. AWS Direct Connect.
    - D. AWS CloudTrail.
    - E. AWS VPN.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. AWS Direct Connect** : Connexion réseau dédiée entre votre datacenter et AWS.
      - **E. AWS VPN** : Connexion sécurisée via Internet entre votre réseau et un VPC AWS.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Artifact** : Portail pour les rapports de conformité et les accords.
      - **B. AWS Cloud9** : Environnement de développement intégré (IDE) cloud.
      - **D. AWS CloudTrail** : Service de journalisation des appels d'API.
    </details>

25. Une entreprise a déployé une nouvelle application web sur plusieurs instances Amazon EC2. Lequel des éléments suivants doit-elle utiliser pour s'assurer que le trafic HTTP entrant est réparti uniformément sur les instances ?
    - A. AWS EC2 Auto Recovery.
    - B. AWS Auto Scaling.
    - C. AWS Network Load Balancer.
    - D. AWS Application Load Balancer.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Application Load Balancer** : Répartit le trafic HTTP/HTTPS (couche 7) et prend en charge le routage basé sur le contenu, idéal pour les applications web.
    - **Autres options incorrectes** ❌ :
      - **A. AWS EC2 Auto Recovery** : Fonctionnalité qui redémarre automatiquement une instance EC2 en cas d'échec matériel, mais ne répartit pas le trafic.
      - **B. AWS Auto Scaling** : Ajuste le nombre d'instances, mais ne répartit pas le trafic.
      - **C. AWS Network Load Balancer** : Répartit le trafic TCP/UDP (couche 4), moins adapté au routage HTTP avancé.
    </details>

26. Laquelle des offres AWS suivantes est un service de base de données relationnelle compatible MySQL qui peut mettre à l'échelle la capacité automatiquement en fonction de la demande ?
    - A. Amazon Neptune.
    - B. Amazon Aurora.
    - C. Amazon RDS pour SQL Server.
    - D. Amazon RDS pour PostgreSQL.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon Aurora** : Base de données relationnelle compatible MySQL et PostgreSQL, avec une mise à l'échelle automatique du stockage jusqu'à 128 To et des performances élevées.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Neptune** : Base de données de graphe.
      - **C. Amazon RDS pour SQL Server** : Service managé pour SQL Server, mais ne met pas à l'échelle automatiquement le stockage comme Aurora.
      - **D. Amazon RDS pour PostgreSQL** : Service managé pour PostgreSQL, mais encore une fois, la mise à l'échelle automatique du stockage est une caractéristique d'Aurora.
    </details>

27. Lequel des éléments suivants peut aider à protéger vos instances EC2 contre les attaques DDoS ? (Choisissez DEUX)
    - A. AWS CloudHSM.
    - B. Groupes de sécurité.
    - C. AWS Batch.
    - D. AWS IAM.
    - E. Listes de contrôle d'accès réseau (Network ACLs).

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Groupes de sécurité** : Peuvent limiter le trafic autorisé vers les instances, réduisant la surface d'attaque.
      - **E. Listes de contrôle d'accès réseau (Network ACLs)** : Contrôle le trafic au niveau du sous-réseau, offrant une couche de défense supplémentaire.
    - **Autres options incorrectes** ❌ :
      - **A. AWS CloudHSM** : Module de sécurité matériel pour le chiffrement, pas pour la protection DDoS.
      - **C. AWS Batch** : Service de traitement par lots, pas de sécurité.
      - **D. AWS IAM** : Gestion des identités et des accès, pas de protection réseau.
    </details>

28. Quel est le service d'entrepôt de données AWS qui prend en charge un haut niveau de performance des requêtes sur de grandes quantités de jeux de données ?
    - A. Amazon Redshift.
    - B. Amazon Kinesis.
    - C. Amazon DynamoDB.
    - D. Amazon RDS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon Redshift** : Entrepôt de données (data warehouse) petaoctet-scale conçu pour l'analyse de grands ensembles de données.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Kinesis** : Service pour l'analyse de flux de données en temps réel.
      - **C. Amazon DynamoDB** : Base de données NoSQL pour les charges de travail transactionnelles.
      - **D. Amazon RDS** : Service de base de données relationnelle pour les charges de travail transactionnelles, pas d'entrepôt de données.
    </details>

29. Lequel des éléments suivants doit être pris en compte lors de l'exécution d'une analyse TCO pour comparer les coûts d'exécution d'une application sur AWS par rapport à sur site ?
    - A. Développement d'applications.
    - B. Recherche de marché.
    - C. Analyse commerciale.
    - D. Matériel physique.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Matériel physique** : Dans le cloud, vous évitez les coûts d'achat et de maintenance du matériel physique, ce qui est un facteur clé du TCO.
    - **Autres options incorrectes** ❌ :
      - **A. Développement d'applications** : Les coûts de développement sont généralement similaires.
      - **B. Recherche de marché** : Non directement lié au TCO.
      - **C. Analyse commerciale** : Non directement lié au TCO.
    </details>

30. Comment les clients AWS sont-ils facturés pour l'utilisation d'Amazon EC2 basé sur Linux ?
    - A. Les instances EC2 seront facturées par incréments d'une seconde, avec un minimum d'une minute.
    - B. Les instances EC2 seront facturées par incréments d'une heure, avec un minimum d'un jour.
    - C. Les instances EC2 seront facturées par incréments d'une minute, avec un minimum d'une heure.
    - D. Les instances EC2 seront facturées par incréments d'un jour, avec un minimum d'un mois.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Les instances EC2 seront facturées par incréments d'une seconde, avec un minimum d'une minute** : Pour les instances Linux, la facturation est à la seconde, après la première minute.
    - **Autres options incorrectes** ❌ :
      - **B. Facturées par heure avec un minimum d'un jour** : Faux, c'est l'ancien modèle.
      - **C. Facturées par minute avec un minimum d'une heure** : Faux.
      - **D. Facturées par jour avec un minimum d'un mois** : Faux.
    </details>

31. Lequel des éléments suivants affectera le prix payé pour une instance EC2 ? (Choisissez DEUX)
    - A. Type d'instance.
    - B. La zone de disponibilité où l'instance est provisionnée.
    - C. Équilibrage de charge.
    - D. Nombre de compartiments.
    - E. Nombre d'IP privées.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Type d'instance** : Différents types (par exemple, t3.micro, m5.large) ont des prix différents.
      - **B. La zone de disponibilité où l'instance est provisionnée** : Les prix peuvent varier légèrement entre les zones de disponibilité d'une même région.
    - **Autres options incorrectes** ❌ :
      - **C. Équilibrage de charge** : L'ELB a son propre coût, mais n'affecte pas le prix de l'instance EC2 elle-même.
      - **D. Nombre de compartiments** : Les compartiments S3 sont facturés séparément.
      - **E. Nombre d'IP privées** : Les IP privées sont gratuites.
    </details>

32. Un client a passé beaucoup de temps à configurer une instance Amazon EC2 nouvellement déployée. Après l'augmentation de la charge de travail, le client décide de provisionner une autre instance EC2 avec une configuration identique. Comment le client peut-il y parvenir ?
    - A. En créant un modèle AWS Config à partir de l'ancienne instance et en lançant une nouvelle instance à partir de celui-ci.
    - B. En créant un snapshot EBS de l'ancienne instance.
    - C. En installant Aurora sur EC2 et en lançant une nouvelle instance à partir de celui-ci.
    - D. En créant une AMI à partir de l'ancienne instance et en lançant une nouvelle instance à partir de celle-ci.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. En créant une AMI à partir de l'ancienne instance** : Une Amazon Machine Image (AMI) capture la configuration de l'instance (système d'exploitation, applications, paramètres) et permet de lancer de nouvelles instances identiques.
    - **Autres options incorrectes** ❌ :
      - **A. En créant un modèle AWS Config** : AWS Config est pour l'audit de configuration, pas pour créer des images d'instance.
      - **B. En créant un snapshot EBS** : Un snapshot capture un volume EBS, mais pas toute l'instance (par exemple, les paramètres d'instance, les rôles IAM, etc.). Une AMI inclut les snapshots EBS et d'autres métadonnées.
      - **C. En installant Aurora sur EC2** : Aurora est un service de base de données managé, pas une méthode pour cloner une instance EC2.
    </details>

33. Une entreprise utilise AWS Organizations pour gérer tous ses comptes AWS. Lequel des éléments suivants permet à l'entreprise de restreindre les services et actions autorisés dans chaque compte individuel ?
    - A. Principaux IAM.
    - B. Politiques de contrôle de service AWS (SCP).
    - C. Politiques IAM.
    - D. AWS Fargate.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Politiques de contrôle de service AWS (SCP)** : Les SCP sont des politiques de contrôle d'accès centrées sur les comptes qui définissent les autorisations maximales pour les comptes membres d'une organisation.
    - **Autres options incorrectes** ❌ :
      - **A. Principaux IAM** : Les principaux IAM (utilisateurs, rôles) sont des identités auxquelles des politiques peuvent être attachées, mais ils ne restreignent pas les services au niveau du compte.
      - **C. Politiques IAM** : Les politiques IAM s'appliquent aux identités IAM (utilisateurs, groupes, rôles) à l'intérieur d'un compte, pas au niveau du compte dans Organizations.
      - **D. AWS Fargate** : Moteur de calcul sans serveur pour les conteneurs, sans rapport avec la gestion des comptes.
    </details>

34. Laquelle des affirmations suivantes décrit l'agilité du cloud AWS ?
    - A. AWS vous permet d'héberger vos applications dans plusieurs régions du monde.
    - B. AWS fournit du matériel personnalisable au plus bas coût possible.
    - C. AWS vous permet de provisionner des ressources en quelques minutes.
    - D. AWS vous permet de payer à l'avance pour réduire les coûts.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS vous permet de provisionner des ressources en quelques minutes** : L'agilité fait référence à la vitesse à laquelle vous pouvez déployer et mettre à l'échelle des ressources.
    - **Autres options incorrectes** ❌ :
      - **A. Héberger dans plusieurs régions** : Cela concerne la portée mondiale, pas spécifiquement l'agilité.
      - **B. Matériel personnalisable au plus bas coût** : Le cloud offre des ressources standardisées, pas du matériel personnalisé.
      - **D. Payer à l'avance pour réduire les coûts** : Cela concerne l'optimisation des coûts, pas l'agilité.
    </details>

35. Quels sont les avantages de l'utilisation d'Amazon Relational Database Service ? (Choisissez DEUX)
    - A. Charge administrative réduite.
    - B. Contrôle total sur l'hôte sous-jacent.
    - C. Capacité de calcul redimensionnable.
    - D. Met à l'échelle automatiquement vers des types d'instance plus grands ou plus petits.
    - E. Prend en charge les structures de données document et clé-valeur.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Charge administrative réduite** : RDS gère les tâches courantes comme les sauvegardes, les correctifs et la réplication.
      - **C. Capacité de calcul redimensionnable** : Vous pouvez modifier les types d'instance pour augmenter ou diminuer les performances.
    - **Autres options incorrectes** ❌ :
      - **B. Contrôle total sur l'hôte sous-jacent** : C'est l'inverse. RDS est un service managé, donc vous avez moins de contrôle que sur une instance EC2 auto-gérée.
      - **D. Met à l'échelle automatiquement vers des types d'instance plus grands ou plus petits** : RDS ne met pas à l'échelle automatiquement la taille de l'instance ; vous devez le faire manuellement ou via des scripts.
      - **E. Prend en charge les structures de données document et clé-valeur** : Cela décrit DynamoDB, pas RDS.
    </details>

36. Quelle est l'option de connectivité qui utilise Internet Protocol Security (IPSec) pour établir une connectivité chiffrée entre un réseau sur site et le cloud AWS ?
    - A. Passerelle Internet.
    - B. AWS IQ.
    - C. AWS Direct Connect.
    - D. AWS Site-to-Site VPN.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Site-to-Site VPN** : Crée un tunnel VPN IPSec sécurisé entre votre réseau sur site et un VPC AWS via Internet.
    - **Autres options incorrectes** ❌ :
      - **A. Passerelle Internet** : Permet à un VPC d'accéder à Internet, pas de connectivité hybride.
      - **B. AWS IQ** : Plateforme pour engager des experts AWS, pas une option de connectivité.
      - **C. AWS Direct Connect** : Connexion réseau dédiée, n'utilise pas IPSec sur Internet.
    </details>

37. Quel est le niveau minimum de support AWS qui fournit un accès 24x7 aux ingénieurs du support technique par téléphone et chat ?
    - A. Support Enterprise.
    - B. Support Développeur.
    - C. Support Basique.
    - D. Support Business.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Support Business** : Offre un accès 24x7 au support technique par téléphone, chat et e-mail.
    - **Autres options incorrectes** ❌ :
      - **A. Support Enterprise** : Inclut également un accès 24x7, mais c'est un niveau supérieur (plus cher) avec des services supplémentaires.
      - **B. Support Développeur** : Accès par e-mail seulement pendant les heures de bureau.
      - **C. Support Basique** : Accès aux forums et à la documentation, pas d'accès direct au support technique.
    </details>

38. Lequel des éléments suivants est utilisé pour contrôler le trafic réseau dans AWS ? (Choisissez DEUX)
    - A. Listes de contrôle d'accès réseau (NACLs).
    - B. Paires de clés.
    - C. Clés d'accès.
    - D. Politiques IAM.
    - E. Groupes de sécurité.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Listes de contrôle d'accès réseau (NACLs)** : Contrôle le trafic entrant et sortant au niveau du sous-réseau (stateless).
      - **E. Groupes de sécurité** : Contrôle le trafic entrant et sortant au niveau de l'instance (stateful).
    - **Autres options incorrectes** ❌ :
      - **B. Paires de clés** : Utilisées pour l'authentification SSH aux instances EC2.
      - **C. Clés d'accès** : Utilisées pour l'authentification programmatique aux API AWS.
      - **D. Politiques IAM** : Contrôlent les autorisations d'accès aux ressources AWS, pas le trafic réseau.
    </details>

39. Une entreprise a développé une application de transcodage multimédia dans AWS. L'application est conçue pour récupérer rapidement après des défaillances matérielles. Lequel des types d'instance suivants serait le choix le plus rentable à utiliser ?
    - A. Instances réservées.
    - B. Instances Spot.
    - C. Instances à la demande.
    - D. Instances dédiées.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Instances Spot** : Pour les charges de travail tolérantes aux interruptions comme le transcodage, les instances Spot offrent des économies importantes (jusqu'à 90 %). L'application est conçue pour récupérer rapidement, ce qui correspond bien aux interruptions possibles des instances Spot.
    - **Autres options incorrectes** ❌ :
      - **A. Instances réservées** : Économiques pour les charges de travail continues, mais pas aussi flexibles ni aussi bon marché que les Spot pour les charges de travail tolérantes aux interruptions.
      - **C. Instances à la demande** : Plus chères que les Spot.
      - **D. Instances dédiées** : Matériel dédié à un prix plus élevé, non nécessaire pour cette charge de travail.
    </details>

40. Quel service AWS fournit l'état actuel de tous les services AWS dans toutes les régions AWS ?
    - A. AWS Service Health Dashboard.
    - B. AWS Management Console.
    - C. Amazon CloudWatch.
    - D. AWS Personal Health Dashboard.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Service Health Dashboard** : Affiche l'état de tous les services AWS dans toutes les régions (vue globale).
    - **Autres options incorrectes** ❌ :
      - **B. AWS Management Console** : Interface web pour accéder aux services, pas un tableau de bord d'état.
      - **C. Amazon CloudWatch** : Service de surveillance pour vos ressources spécifiques.
      - **D. AWS Personal Health Dashboard** : Fournit des alertes personnalisées sur les services AWS qui affectent vos ressources, pas une vue globale.
    </details>

41. Quel service ou quelle fonctionnalité AWS peut être utilisé pour appeler les services AWS à partir de différents langages de programmation ?
    - A. AWS Software Development Kit.
    - B. AWS Command Line Interface.
    - C. AWS CodeDeploy.
    - D. AWS Management Console.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Software Development Kit (SDK)** : Fournit des API pour interagir avec les services AWS à partir de différents langages de programmation (Java, Python, JavaScript, etc.).
    - **Autres options incorrectes** ❌ :
      - **B. AWS Command Line Interface (CLI)** : Outil en ligne de commande, pas spécifique à un langage de programmation.
      - **C. AWS CodeDeploy** : Service de déploiement automatisé.
      - **D. AWS Management Console** : Interface web.
    </details>

42. Quel service AWS peut être utilisé pour enregistrer un nouveau nom de domaine ?
    - A. Amazon Personalize.
    - B. Amazon Route 53.
    - C. AWS KMS.
    - D. AWS Config.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon Route 53** : Service DNS qui inclut également l'enregistrement de noms de domaine.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Personalize** : Service de recommandation machine learning.
      - **C. AWS KMS** : Service de gestion des clés de chiffrement.
      - **D. AWS Config** : Service d'audit de configuration.
    </details>

43. Les entreprises de développement d'applications déplacent leurs activités vers AWS pour réduire le time-to-market et améliorer la satisfaction des clients. Quels sont les outils d'automatisation AWS qui les aident à déployer leurs applications plus rapidement ? (Choisissez DEUX)
    - A. AWS CloudFormation.
    - B. AWS Migration Hub.
    - C. AWS IAM.
    - D. AWS Elastic Beanstalk.
    - E. Amazon Macie.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS CloudFormation** : Permet de modéliser et de provisionner l'infrastructure AWS de manière reproductible avec des modèles.
      - **D. AWS Elastic Beanstalk** : Plateforme PaaS qui automatise le déploiement, la mise à l'échelle et la gestion des applications.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Migration Hub** : Service pour suivre les migrations d'applications vers AWS.
      - **C. AWS IAM** : Service de gestion des identités et des accès.
      - **E. Amazon Macie** : Service de sécurité qui utilise le machine learning pour découvrir et protéger les données sensibles.
    </details>

44. Quel service AWS fournit des recommandations d'optimisation des coûts ?
    - A. AWS Trusted Advisor.
    - B. AWS Pricing Calculator.
    - C. Amazon QuickSight.
    - D. AWS X-Ray.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Trusted Advisor** : Fournit des recommandations dans cinq catégories, y compris l'optimisation des coûts.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Pricing Calculator** : Outil pour estimer les coûts, pas pour fournir des recommandations d'optimisation.
      - **C. Amazon QuickSight** : Service de business intelligence (BI).
      - **D. AWS X-Ray** : Service de traçage distribué.
    </details>

45. Une entreprise possède des centaines de VPC dans plusieurs régions AWS dans le monde. Quel service AWS offre-t-elle pour simplifier la gestion des connexions entre les VPC ?
    - A. VPC Peering.
    - B. AWS Transit Gateway.
    - C. Amazon Connect.
    - D. Groupes de sécurité.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Transit Gateway** : Service qui permet de connecter des milliers de VPC et de réseaux sur site via un hub central.
    - **Autres options incorrectes** ❌ :
      - **A. VPC Peering** : Connexion directe entre deux VPC, mais ne s'adapte pas bien à des centaines de VPC (peering full mesh complexe).
      - **C. Amazon Connect** : Service de centre de contact cloud.
      - **D. Groupes de sécurité** : Firewall au niveau de l'instance, pas de connexion VPC.
    </details>

46. Quel est un avantage et un inconvénient de l'achat d'une instance EC2 réservée ? (Sélectionnez DEUX)
    - A. Les instances peuvent être arrêtées par AWS à tout moment sans préavis.
    - B. Les instances réservées nécessitent un engagement tarifaire d'au moins un an.
    - C. Il n'y a pas de frais supplémentaires pour l'utilisation d'instances dédiées.
    - D. Les instances réservées offrent une remise importante par rapport aux instances à la demande.
    - E. Les instances réservées sont mieux adaptées aux charges de travail périodiques.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Les instances réservées nécessitent un engagement tarifaire d'au moins un an** : Inconvénient : engagement à long terme.
      - **D. Les instances réservées offrent une remise importante par rapport aux instances à la demande** : Avantage : économies de coûts.
    - **Autres options incorrectes** ❌ :
      - **A. Les instances peuvent être arrêtées par AWS à tout moment sans préavis** : C'est le cas des instances Spot, pas des instances réservées.
      - **C. Il n'y a pas de frais supplémentaires pour l'utilisation d'instances dédiées** : Les instances dédiées ont un coût supplémentaire.
      - **E. Les instances réservées sont mieux adaptées aux charges de travail périodiques** : Faux. Les instances réservées sont pour les charges de travail stables et prévisibles. Les charges de travail périodiques peuvent utiliser des instances à la demande ou Spot.
    </details>

47. Pourquoi chaque région AWS contient-elle plusieurs zones de disponibilité ?
    - A. Plusieurs zones de disponibilité vous permettent de construire des architectures résilientes et hautement disponibles.
    - B. Plusieurs zones de disponibilité entraînent un coût total inférieur par rapport à un déploiement dans une seule zone de disponibilité.
    - C. Plusieurs zones de disponibilité permettent la réplication des données et la portée mondiale.
    - D. Plusieurs zones de disponibilité dans une région augmentent la capacité de stockage disponible dans cette région.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Plusieurs zones de disponibilité vous permettent de construire des architectures résilientes et hautement disponibles** : Les zones de disponibilité sont des centres de données distincts avec une alimentation, un refroidissement et une réseau indépendants, permettant de concevoir des applications tolérantes aux pannes.
    - **Autres options incorrectes** ❌ :
      - **B. Coût total inférieur** : Déployer sur plusieurs zones de disponibilité augmente généralement les coûts (plus d'instances, transfert de données entre AZ).
      - **C. Réplication des données et portée mondiale** : La réplication des données est possible, mais la portée mondiale est obtenue via des régions multiples, pas des AZ multiples dans une région.
      - **D. Augmente la capacité de stockage** : La capacité de stockage n'est pas liée au nombre d'AZ.
    </details>

48. Quelle est l'option d'achat la plus rentable pour exécuter un ensemble d'instances EC2 qui doivent toujours être disponibles pendant une période de deux mois ?
    - A. Instances à la demande.
    - B. Instances Spot.
    - C. Instances réservées - Paiement total initial.
    - D. Instances réservées - Aucun paiement initial.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Instances à la demande** : Pour une période courte (deux mois) et sans engagement, les instances à la demande sont les plus économiques car les instances réservées nécessitent un engagement d'un ou trois ans.
    - **Autres options incorrectes** ❌ :
      - **B. Instances Spot** : Peuvent être interrompues, donc ne conviennent pas pour une disponibilité continue.
      - **C. Instances réservées - Paiement total initial** : Engagement à long terme, pas rentable pour deux mois.
      - **D. Instances réservées - Aucun paiement initial** : Engagement à long terme, pas rentable pour deux mois.
    </details>

49. Lequel des éléments suivants est un avantage de l'exécution d'une application dans plusieurs zones de disponibilité ?
    - A. Permet de dépasser les limites de service AWS.
    - B. Réduit le temps de réponse de l'application entre les serveurs et les utilisateurs mondiaux.
    - C. Augmente la capacité de calcul disponible.
    - D. Augmente la disponibilité de votre application.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Augmente la disponibilité de votre application** : En répartissant l'application sur plusieurs zones de disponibilité, vous protégez contre les défaillances d'une seule zone.
    - **Autres options incorrectes** ❌ :
      - **A. Permet de dépasser les limites de service AWS** : Faux. Les limites s'appliquent par région ou compte.
      - **B. Réduit le temps de réponse... utilisateurs mondiaux** : La latence pour les utilisateurs mondiaux est réduite en utilisant des régions multiples ou un CDN, pas des AZ multiples dans une région.
      - **C. Augmente la capacité de calcul disponible** : Cela peut être fait en ajoutant plus d'instances dans une seule AZ. L'avantage principal du multi-AZ est la redondance, pas la capacité.
    </details>

50. La sécurité des données est l'une des principales priorités d'AWS. Comment AWS traite-t-il les anciens dispositifs de stockage qui ont atteint la fin de leur vie utile ?
    - A. AWS vend les anciens appareils à d'autres hébergeurs.
    - B. AWS détruit les anciens appareils conformément aux pratiques standard de l'industrie.
    - C. AWS envoie les anciens appareils pour être remanufacturés.
    - D. AWS stocke les anciens appareils dans un endroit sécurisé.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS détruit les anciens appareils conformément aux pratiques standard de l'industrie** : AWS a des procédures strictes pour la destruction sécurisée des supports de stockage en fin de vie.
    - **Autres options incorrectes** ❌ :
      - **A. AWS vend les anciens appareils à d'autres hébergeurs** : Non, pour des raisons de sécurité, les dispositifs sont détruits.
      - **C. AWS envoie les anciens appareils pour être remanufacturés** : Non, ils sont détruits.
      - **D. AWS stocke les anciens appareils dans un endroit sécurisé** : Non, ils sont détruits.
    </details>