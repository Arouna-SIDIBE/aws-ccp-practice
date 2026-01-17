---
layout: exam
---

# Examen de pratique 4

1. Un développeur doit configurer un certificat de sécurité SSL pour le site web de commerce électronique d'un client afin d'utiliser le protocole HTTPS. Lequel des services AWS suivants peut être utilisé pour déployer les certificats de serveur SSL requis ? (Choisissez DEUX)
    - A. Amazon Route 53.
    - B. AWS ACM.
    - C. AWS Directory Service.
    - D. AWS Identity & Access Management.
    - E. AWS Data Pipeline.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Amazon Route 53** : Route 53 est le service DNS d'AWS. Il peut être utilisé pour gérer les enregistrements DNS nécessaires pour valider et associer un certificat SSL, bien qu'il ne délivre pas directement les certificats.
      - **B. AWS ACM** : AWS Certificate Manager est un service qui permet de provisionner, gérer et déployer des certificats SSL/TLS pour une utilisation avec les services AWS. Il peut délivrer gratuitement des certificats publics.
    - **Autres options incorrectes** ❌ :
      - **C. AWS Directory Service** : Service d'annuaire managé (comme Active Directory), pas pour les certificats SSL.
      - **D. AWS Identity & Access Management** : Service de gestion des identités et des accès, pas pour les certificats SSL.
      - **E. AWS Data Pipeline** : Service d'orchestration de données pour le traitement et le déplacement des données, pas pour les certificats SSL.
    </details>

2. Lesquels des services AWS suivants se mettent à l'échelle automatiquement sans votre intervention ? (Choisissez DEUX)
    - A. Amazon EC2.
    - B. Amazon S3.
    - C. AWS Lambda.
    - D. Amazon EMR.
    - E. Amazon EBS.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Amazon S3** : S3 est conçu pour une mise à l'échelle automatique et illimitée. Vous n'avez pas à provisionner de capacité de stockage à l'avance ; elle s'adapte automatiquement à votre utilisation.
      - **C. AWS Lambda** : Lambda est un service serverless qui met automatiquement à l'échelle le nombre d'exécutions de fonctions en fonction du nombre d'événements, sans intervention de l'utilisateur.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EC2** : Nécessite une configuration manuelle ou l'utilisation d'Auto Scaling pour ajuster la capacité. Ne se met pas à l'échelle automatiquement par défaut.
      - **D. Amazon EMR** : Service de big data managé, mais nécessite une configuration pour ajuster la taille du cluster (bien que des options d'autoscaling existent, ce n'est pas totalement automatique sans configuration).
      - **E. Amazon EBS** : Le stockage par blocs attaché aux instances EC2 doit être provisionné manuellement et ne se met pas à l'échelle automatiquement.
    </details>

3. Une entreprise prévoit de migrer une application d'Amazon EC2 vers AWS Lambda pour utiliser une architecture serverless. Lequel des éléments suivants sera de la responsabilité d'AWS après la migration ? (Choisissez DEUX)
    - A. Gestion de l'application.
    - B. Gestion de la capacité.
    - C. Contrôle d'accès.
    - D. Maintenance du système d'exploitation.
    - E. Gestion des données.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Gestion de la capacité** : Avec Lambda, AWS gère automatiquement la mise à l'échelle de l'infrastructure sous-jacente en fonction du nombre d'invocations.
      - **D. Maintenance du système d'exploitation** : AWS est responsable de la maintenance du système d'exploitation et de l'environnement d'exécution sous-jacent pour Lambda.
    - **Autres options incorrectes** ❌ :
      - **A. Gestion de l'application** : Le client reste responsable de la logique métier, du code et de la configuration de l'application.
      - **C. Contrôle d'accès** : Le client gère les autorisations via IAM pour contrôler qui peut appeler la fonction Lambda.
      - **E. Gestion des données** : Le client est responsable de la gestion des données que son application traite et stocke.
    </details>

4. Comment les ELB améliorent-ils la fiabilité de votre application ?
    - A. En distribuant le trafic sur plusieurs compartiments S3.
    - B. En répliquant les données sur plusieurs zones de disponibilité.
    - C. En créant des réplicas de lecture de base de données.
    - D. En veillant à ce que seules les cibles saines reçoivent du trafic.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. En veillant à ce que seules les cibles saines reçoivent du trafic** : Les Elastic Load Balancers effectuent des contrôles de santé réguliers sur les instances cibles et acheminent le trafic uniquement vers les instances considérées comme saines, améliorant ainsi la disponibilité de l'application.
    - **Autres options incorrectes** ❌ :
      - **A. En distribuant le trafic sur plusieurs compartiments S3** : Les ELB distribuent le trafic vers des instances EC2, des conteneurs ou des adresses IP, pas vers des compartiments S3.
      - **B. En répliquant les données sur plusieurs zones de disponibilité** : Bien que les ELB puissent être déployés sur plusieurs zones de disponibilité, ils ne répliquent pas les données. La réplication des données est gérée par d'autres services (par ex., RDS Multi-AZ, S3).
      - **C. En créant des réplicas de lecture de base de données** : C'est une fonctionnalité des bases de données comme Amazon RDS ou Aurora, pas des ELB.
    </details>

5. Une entreprise doit migrer son site web de son infrastructure locale vers AWS. La sécurité est une préoccupation majeure pour eux, ils ont donc besoin d'héberger leur site web sur du matériel qui n'est PAS partagé avec d'autres clients AWS. Lequel des options d'instance EC2 suivantes répond à cette exigence ?
    - A. Instances à la demande.
    - B. Instances Spot.
    - C. Instances dédiées.
    - D. Instances réservées.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Instances dédiées** : Les instances dédiées sont exécutées sur du matériel dédié à un seul client AWS. Elles sont physiquement isolées des instances d'autres clients.
    - **Autres options incorrectes** ❌ :
      - **A. Instances à la demande** : Exécutées sur du matériel partagé avec d'autres clients AWS (multi-locataires).
      - **B. Instances Spot** : Utilisent une capacité EC2 inutilisée, également sur du matériel partagé.
      - **D. Instances réservées** : Un modèle de facturation, pas un type d'isolation physique. Elles peuvent être exécutées sur du matériel partagé ou dédié selon le type d'instance choisi.
    </details>

6. Un client prévoit de transférer des milliards d'images et de vidéos pour les stocker sur Amazon S3. Le client a environ 60 pétaoctets de données à transférer. Lequel des services AWS suivants est le meilleur choix pour transférer les données vers AWS ?
    - A. Snowball.
    - B. S3 Transfer Acceleration.
    - C. Snowmobile.
    - D. Amazon VPC.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Snowmobile** : Snowmobile est un conteneur de 45 pieds transporté par camion, conçu pour transférer des quantités de données extrêmement importantes (de l'ordre de l'exaoctet). Pour 60 Po, Snowmobile est le service le plus adapté.
    - **Autres options incorrectes** ❌ :
      - **A. Snowball** : Appareil de transfert de données physique pour des volumes de l'ordre du pétaoctet. Plusieurs appareils Snowball seraient nécessaires pour 60 Po, ce qui serait moins pratique que Snowmobile.
      - **B. S3 Transfer Acceleration** : Utilise le réseau CloudFront pour accélérer les transferts sur Internet, mais n'est pas adapté à des volumes aussi massifs en raison des contraintes de bande passante et de coût.
      - **D. Amazon VPC** : Service de réseau virtuel, pas un service de transfert de données.
    </details>

7. Une entreprise prévoit de migrer une grande quantité de données archivées vers AWS. Les données archivées doivent être conservées pendant une période de 5 ans et doivent être récupérables dans les 5 heures suivant une demande. Quel est le service de stockage AWS le plus économique à utiliser ?
    - A. Amazon S3 Glacier.
    - B. Amazon EFS.
    - C. Amazon S3 Standard.
    - D. Amazon EBS.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon S3 Glacier** : Conçu pour l'archivage à long terme à faible coût. Les options de récupération (comme Standard Retrieval) offrent généralement une restauration en quelques heures, ce qui correspond à l'exigence de 5 heures.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon EFS** : Système de fichiers élastique pour les systèmes de fichiers partagés, coûteux pour l'archivage à long terme.
      - **C. Amazon S3 Standard** : Conçu pour un accès fréquent, beaucoup plus coûteux que Glacier pour l'archivage.
      - **D. Amazon EBS** : Stockage par blocs pour les instances EC2, non adapté à l'archivage de grandes quantités de données.
    </details>

8. Quel service AWS est utilisé pour gérer les autorisations des utilisateurs ?
    - A. Groupes de sécurité.
    - B. Amazon ECS.
    - C. AWS IAM.
    - D. AWS Support.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS IAM** : AWS Identity and Access Management (IAM) permet de gérer les utilisateurs, les groupes, les rôles et leurs autorisations d'accès aux services et ressources AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Groupes de sécurité** : Agissent comme un firewall au niveau de l'instance pour contrôler le trafic réseau, pas pour gérer les autorisations des utilisateurs.
      - **B. Amazon ECS** : Service de gestion de conteneurs.
      - **D. AWS Support** : Service de support technique.
    </details>

9. Quel plan de support inclut le service AWS Support Concierge ?
    - A. Support Premium.
    - B. Support Business.
    - C. Support Enterprise.
    - D. Support Standard.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Support Enterprise** : Le plan Enterprise Support inclut le service Concierge, qui fournit une assistance personnalisée pour les questions de facturation, de compte et d'intégration.
    - **Autres options incorrectes** ❌ :
      - **A. Support Premium** : Ce n'est pas un nom de plan de support AWS standard. Les plans sont Basic, Developer, Business et Enterprise.
      - **B. Support Business** : N'inclut pas le service Concierge ; celui-ci est réservé au plan Enterprise.
      - **D. Support Standard** : N'existe pas ; le plan de base est appelé "Basic Support".
    </details>

10. Une entreprise doit suivre les changements de ressources à l'aide de l'historique des appels d'API. Quel service AWS peut aider l'entreprise à atteindre cet objectif ?
    - A. AWS Config.
    - B. Amazon CloudWatch.
    - C. AWS CloudTrail.
    - D. AWS CloudFormation.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS CloudTrail** : Enregistre l'historique des appels d'API et des actions de gestion effectuées sur votre compte AWS, fournissant ainsi une piste d'audit.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Config** : Évalue et audite la configuration des ressources, mais ne se concentre pas sur l'historique des appels d'API.
      - **B. Amazon CloudWatch** : Service de surveillance des métriques et des logs, pas d'audit des appels d'API.
      - **D. AWS CloudFormation** : Service d'infrastructure as code pour provisionner des ressources, pas pour l'audit.
    </details>

11. Quels sont les avantages de l'utilisation d'un service managé par AWS ? (Choisissez DEUX)
    - A. Fournit un contrôle complet sur l'infrastructure virtuelle.
    - B. Permet aux clients de fournir de nouvelles solutions plus rapidement.
    - C. Réduit la complexité opérationnelle.
    - D. Élimine le besoin de chiffrer les données.
    - E. Permet aux développeurs de contrôler toutes les activités de correction.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Permet aux clients de fournir de nouvelles solutions plus rapidement** : Les services managés réduisent le temps de provisionnement et de configuration, accélérant ainsi le time-to-market.
      - **C. Réduit la complexité opérationnelle** : AWS gère les tâches d'exploitation telles que la mise à l'échelle, les correctifs et la sauvegarde, permettant aux clients de se concentrer sur leur activité.
    - **Autres options incorrectes** ❌ :
      - **A. Fournit un contrôle complet sur l'infrastructure virtuelle** : C'est l'inverse ; les services managés abstraient une partie de l'infrastructure, réduisant le contrôle de l'utilisateur.
      - **D. Élimine le besoin de chiffrer les données** : Le chiffrement reste une responsabilité partagée ; le client doit configurer le chiffrement pour ses données.
      - **E. Permet aux développeurs de contrôler toutes les activités de correction** : Dans les services managés, AWS est responsable de la correction de l'infrastructure sous-jacente ; le client peut toujours être responsable de la correction des applications.
    </details>

12. Lesquels des cas d'utilisation suivants sont des cas d'utilisation pour Amazon S3 ? (Choisissez DEUX)
    - A. Héberger des sites web statiques.
    - B. Héberger des sites web nécessitant une utilisation élevée et soutenue du CPU.
    - C. Stockage économique de bases de données et de journaux.
    - D. Un magasin de média pour le service CloudFront.
    - E. Traiter des flux de données à n'importe quelle échelle.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Héberger des sites web statiques** : S3 peut héberger des sites web statiques (HTML, CSS, JavaScript, images) avec une haute disponibilité et une faible latence.
      - **D. Un magasin de média pour le service CloudFront** : S3 est souvent utilisé comme origine pour CloudFront, stockant des objets multimédias (vidéos, images) diffusés via le CDN.
    - **Autres options incorrectes** ❌ :
      - **B. Héberger des sites web nécessitant une utilisation élevée et soutenue du CPU** : S3 ne fournit pas de capacité de calcul ; pour les sites web dynamiques, il faut utiliser EC2, Lambda, ou d'autres services de calcul.
      - **C. Stockage économique de bases de données et de journaux** : S3 peut stocker des sauvegardes de bases de données et des journaux, mais n'est pas une base de données transactionnelle. Il est plus adapté au stockage d'objets qu'aux opérations de base de données en temps réel.
      - **E. Traiter des flux de données à n'importe quelle échelle** : Le traitement de flux de données est géré par des services comme Amazon Kinesis ou AWS Glue, pas par S3.
    </details>

13. Quelle est la recommandation d'AWS concernant les clés d'accès ?
    - A. Supprimer toutes les clés d'accès et utiliser des mots de passe à la place.
    - B. Ne les partager qu'avec des personnes de confiance.
    - C. Les faire tourner régulièrement.
    - D. Les enregistrer dans le code de votre application.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Les faire tourner régulièrement** : AWS recommande de faire tourner régulièrement les clés d'accès (c'est-à-dire de les remplacer par de nouvelles) pour réduire le risque en cas de compromission.
    - **Autres options incorrectes** ❌ :
      - **A. Supprimer toutes les clés d'accès et utiliser des mots de passe à la place** : Les clés d'accès sont nécessaires pour l'accès programmatique (API/CLI) ; les mots de passe sont pour la console. Les deux ont leur utilité.
      - **B. Ne les partager qu'avec des personnes de confiance** : Bien que cela soit une bonne pratique, ce n'est pas la recommandation principale ; la rotation est plus importante.
      - **D. Les enregistrer dans le code de votre application** : C'est une mauvaise pratique car cela expose les clés d'accès. Il faut utiliser des rôles IAM ou des services comme AWS Secrets Manager.
    </details>

14. Quelle est la fonctionnalité d'AWS IAM qui fournit une couche de sécurité supplémentaire au-dessus de l'authentification par nom d'utilisateur et mot de passe ?
    - A. Paire de clés.
    - B. Clés d'accès.
    - C. SDK.
    - D. MFA.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. MFA** : Multi-Factor Authentication ajoute une deuxième méthode d'authentification (comme un code à partir d'un appareil physique ou virtuel) en plus du nom d'utilisateur et du mot de passe.
    - **Autres options incorrectes** ❌ :
      - **A. Paire de clés** : Utilisée pour l'authentification SSH aux instances EC2, pas pour l'authentification IAM.
      - **B. Clés d'accès** : Utilisées pour l'authentification programmatique, mais ne sont pas une couche supplémentaire au-dessus du nom d'utilisateur/mot de passe.
      - **C. SDK** : Kit de développement logiciel pour interagir avec AWS via du code.
    </details>

15. Quel est l'avantage d'utiliser une API pour accéder aux services AWS ?
    - A. Cela améliore les performances des ressources AWS.
    - B. Cela réduit le temps nécessaire pour provisionner des ressources AWS.
    - C. Cela réduit le nombre de développeurs nécessaires.
    - D. Cela permet une gestion programmatique des ressources AWS.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Cela permet une gestion programmatique des ressources AWS** : Les API permettent d'automatiser et d'intégrer la gestion des ressources AWS dans des scripts et des applications.
    - **Autres options incorrectes** ❌ :
      - **A. Cela améliore les performances des ressources AWS** : Les API ne modifient pas directement les performances des ressources.
      - **B. Cela réduit le temps nécessaire pour provisionner des ressources AWS** : L'automatisation via les API peut accélérer le provisionnement, mais ce n'est pas l'avantage principal ; c'est plutôt la capacité de gestion programmatique.
      - **C. Cela réduit le nombre de développeurs nécessaires** : Non, les API ne réduisent pas nécessairement le nombre de développeurs.
    </details>

16. Une entreprise prévoit de migrer une base de données avec une activité de lecture/écriture élevée vers AWS. Quelle est la meilleure option de stockage à utiliser ?
    - A. AWS Storage Gateway.
    - B. Amazon S3.
    - C. Amazon EBS.
    - D. Amazon Glacier.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon EBS** : Fournit un stockage par blocks à faible latence pour les instances EC2, adapté aux bases de données transactionnelles nécessitant des performances élevées en lecture/écriture.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Storage Gateway** : Service de stockage hybride pour connecter des environnements sur site à AWS, pas pour une base de données haute performance dans le cloud.
      - **B. Amazon S3** : Stockage d'objets avec une latence plus élevée, non adapté aux opérations de base de données transactionnelles.
      - **D. Amazon Glacier** : Service d'archivage avec des temps de récupération longs, pas pour une base de données active.
    </details>

17. Comment les clients AWS peuvent-ils suivre et éviter les dépenses excessives sur les instances réservées sous-utilisées ?
    - A. Les clients peuvent ajouter tous les comptes AWS à une AWS Organization, activer la facturation consolidée et désactiver le partage d'instances réservées.
    - B. Les clients peuvent utiliser Amazon Neptune pour suivre et analyser leurs modèles d'utilisation, détecter les instances réservées sous-utilisées, puis les vendre sur l'Amazon EC2 Reserved Instance Marketplace.
    - C. Les clients peuvent utiliser le service AWS Budgets pour suivre l'utilisation des instances réservées et configurer des notifications d'alerte lorsque leur utilisation tombe en dessous du seuil qu'ils définissent.
    - D. Les clients peuvent utiliser Amazon CloudTrail pour vérifier automatiquement les réservations inutilisées et obtenir des recommandations pour réduire leur facture.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Les clients peuvent utiliser le service AWS Budgets pour suivre l'utilisation des instances réservées et configurer des notifications d'alerte** : AWS Budgets permet de définir des budgets personnalisés et des alertes basées sur l'utilisation ou les coûts, y compris pour les instances réservées.
    - **Autres options incorrectes** ❌ :
      - **A. ...désactiver le partage d'instances réservées** : Le partage d'instances réservées via la facturation consolidée est un avantage ; le désactiver n'aiderait pas à suivre la sous-utilisation.
      - **B. Utiliser Amazon Neptune** : Neptune est une base de données de graphe, pas un outil de gestion des coûts.
      - **D. Utiliser Amazon CloudTrail** : CloudTrail est pour l'audit des API, pas pour la gestion des coûts.
    </details>

18. Quel est le service AWS qui fournit cinq fois les performances d'une base de données MySQL standard ?
    - A. Amazon Aurora.
    - B. Amazon Redshift.
    - C. Amazon DynamoDB.
    - D. Amazon Neptune.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon Aurora** : Aurora est une base de données relationnelle compatible MySQL et PostgreSQL, conçue pour offrir des performances supérieures (jusqu'à 5 fois celles de MySQL standard) avec une disponibilité et une fiabilité élevées.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Redshift** : Entrepôt de données pour l'analyse, pas une base de données transactionnelle MySQL.
      - **C. Amazon DynamoDB** : Base de données NoSQL, pas compatible MySQL.
      - **D. Amazon Neptune** : Base de données de graphe.
    </details>

19. Que fournit AWS Service Catalog ?
    - A. Il permet aux clients de trouver rapidement des descriptions et des cas d'utilisation pour les services AWS.
    - B. Il permet aux clients d'explorer les différents catalogues de services AWS.
    - C. Il simplifie l'organisation et la gouvernance des services informatiques couramment déployés.
    - D. Il permet aux développeurs de déployer une infrastructure sur AWS en utilisant des langages de programmation familiers.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Il simplifie l'organisation et la gouvernance des services informatiques couramment déployés** : AWS Service Catalog permet aux organisations de créer et de gérer des catalogues de services informatiques approuvés qui sont standardisés pour la conformité et la gouvernance.
    - **Autres options incorrectes** ❌ :
      - **A. Permet de trouver rapidement des descriptions et des cas d'utilisation** : Cela décrit plutôt la documentation AWS ou le site web.
      - **B. Explorer les différents catalogues de services AWS** : Pas le but principal de Service Catalog.
      - **D. Déployer une infrastructure avec des langages familiers** : Cela décrit AWS Cloud Development Kit (CDK), pas Service Catalog.
    </details>

20. Pour les services managés comme Amazon DynamoDB, lequel des éléments suivants est de la responsabilité d'AWS ? (Choisissez DEUX)
    - A. Protéger les identifiants.
    - B. Journaliser l'activité d'accès.
    - C. Appliquer des correctifs au logiciel de base de données.
    - D. Maintenance du système d'exploitation.
    - E. Créer des politiques d'accès.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Appliquer des correctifs au logiciel de base de données** : Pour DynamoDB, AWS gère les correctifs du logiciel de base de données sous-jacent.
      - **D. Maintenance du système d'exploitation** : AWS est responsable de la maintenance du système d'exploitation et de l'infrastructure sous-jacente.
    - **Autres options incorrectes** ❌ :
      - **A. Protéger les identifiants** : Le client est responsable de la gestion sécurisée de ses identifiants (clés d'accès, mots de passe).
      - **B. Journaliser l'activité d'accès** : Le client peut utiliser AWS CloudTrail pour journaliser les appels d'API, mais AWS ne gère pas la journalisation applicative du client.
      - **E. Créer des politiques d'accès** : Le client crée et gère les politiques IAM pour contrôler l'accès à DynamoDB.
    </details>

21. Lequel des services AWS suivants aide à planifier la migration d'applications vers le cloud AWS ?
    - A. AWS Snowball Migration Service.
    - B. AWS Application Discovery Service.
    - C. AWS DMS.
    - D. AWS Migration Hub.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Application Discovery Service** : Aide à découvrir les applications sur site, leurs dépendances et les données de performance pour planifier les migrations vers AWS.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Snowball Migration Service** : Snowball est un service de transfert de données physique, pas un service de découverte et de planification.
      - **C. AWS DMS** : Database Migration Service pour migrer des bases de données, pas pour la découverte d'applications.
      - **D. AWS Migration Hub** : Permet de suivre la progression des migrations, mais ne fait pas de découverte d'applications.
    </details>

22. Une entreprise essaie d'analyser les coûts appliqués à son compte AWS récemment. Lequel des éléments suivants leur fournit les données les plus granulaires sur leurs coûts et leur utilisation AWS ?
    - A. Amazon Machine Image.
    - B. AWS Cost Explorer.
    - C. AWS Cost & Usage Report.
    - D. Amazon CloudWatch.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Cost & Usage Report** : Fournit des données détaillées et granulaires sur les coûts et l'utilisation, avec des rapports historiques complets. C'est le niveau de détail le plus élevé.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Machine Image** : Modèle pour lancer des instances EC2, pas de données de coût.
      - **B. AWS Cost Explorer** : Outil de visualisation avec des données agrégées, mais moins détaillé que le Cost & Usage Report.
      - **D. Amazon CloudWatch** : Service de surveillance des performances, pas des coûts.
    </details>

23. Quelle affirmation décrit le mieux le concept d'une région AWS ?
    - A. Une région AWS est un emplacement géographique avec une collection d'emplacements périphériques.
    - B. Une région AWS est un réseau virtuel dédié uniquement à un seul client AWS.
    - C. Une région AWS est un emplacement géographique avec une collection de zones de disponibilité.
    - D. Une région AWS représente le pays où l'infrastructure AWS existe.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Une région AWS est un emplacement géographique avec une collection de zones de disponibilité** : Une région est une zone géographique distincte qui contient plusieurs zones de disponibilité isolées.
    - **Autres options incorrectes** ❌ :
      - **A. ...avec une collection d'emplacements périphériques** : Les emplacements périphériques sont utilisés par CloudFront et sont répartis dans le monde, pas regroupés dans une région.
      - **B. Un réseau virtuel dédié uniquement à un seul client** : Cela décrit un VPC dédié ou des instances dédiées, pas une région.
      - **D. Représente le pays où l'infrastructure AWS existe** : Une région peut couvrir plusieurs pays ou une partie d'un pays ; ce n'est pas une représentation exacte.
    </details>

24. Une entreprise a découvert que plusieurs compartiments S3 ont été supprimés, mais on ne sait pas qui les a supprimés. Lequel des éléments suivants l'entreprise peut-elle utiliser pour déterminer l'identité qui a supprimé les compartiments ?
    - A. Journaux SNS.
    - B. Journaux SQS.
    - C. Journaux CloudWatch.
    - D. Journaux CloudTrail.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Journaux CloudTrail** : CloudTrail enregistre les appels d'API, y compris les actions de suppression sur les compartiments S3, avec l'identité de l'appelant.
    - **Autres options incorrectes** ❌ :
      - **A. Journaux SNS** : SNS est un service de notification, pas d'audit.
      - **B. Journaux SQS** : SQS est une file d'attente de messages, pas d'audit.
      - **C. Journaux CloudWatch** : CloudWatch surveille les métriques et les logs, mais ne suit pas les appels d'API de gestion.
    </details>

25. Lesquels des facteurs suivants déterminent la technologie de base de données appropriée à utiliser pour une charge de travail spécifique ? (Choisissez DEUX)
    - A. Zones de disponibilité.
    - B. Souveraineté des données.
    - C. Le nombre de lectures et d'écritures par seconde.
    - D. La nature des requêtes.
    - E. Bogues logiciels.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Le nombre de lectures et d'écritures par seconde** : Les performances en termes de débit (IOPS) sont un facteur clé pour choisir une base de données.
      - **D. La nature des requêtes** : Le type de requêtes (par exemple, transactions complexes, jointures, recherche de texte) influence le choix entre relationnel, NoSQL, etc.
    - **Autres options incorrectes** ❌ :
      - **A. Zones de disponibilité** : La disponibilité est importante, mais ce n'est pas un facteur déterminant pour le type de base de données ; la plupart des services de base de données AWS peuvent être déployés sur plusieurs AZ.
      - **B. Souveraineté des données** : Concerne l'emplacement géographique des données, mais n'est pas spécifique au choix de la technologie de base de données.
      - **E. Bogues logiciels** : Non pertinent pour le choix de la technologie.
    </details>

26. Quels sont les avantages de la mise en œuvre d'une stratégie d'étiquetage pour les ressources AWS ? (Choisissez DEUX)
    - A. Identifier rapidement les ressources qui appartiennent à un projet spécifique.
    - B. Identifier rapidement les solutions logicielles sur AWS.
    - C. Suivre les appels d'API dans votre compte AWS.
    - D. Identifier rapidement les ressources supprimées et leurs métadonnées.
    - E. Suivre les dépenses AWS sur plusieurs ressources.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Identifier rapidement les ressources qui appartiennent à un projet spécifique** : Les étiquettes permettent d'organiser les ressources par projet, département, environnement, etc.
      - **E. Suivre les dépenses AWS sur plusieurs ressources** : Les étiquettes peuvent être utilisées dans AWS Cost Explorer pour analyser les coûts par projet, service, etc.
    - **Autres options incorrectes** ❌ :
      - **B. Identifier rapidement les solutions logicielles sur AWS** : Les étiquettes ne sont pas conçues pour identifier des solutions logicielles spécifiques.
      - **C. Suivre les appels d'API dans votre compte AWS** : C'est le rôle d'AWS CloudTrail.
      - **D. Identifier rapidement les ressources supprimées et leurs métadonnées** : Les étiquettes ne sont pas conservées après la suppression des ressources.
    </details>

27. Que sont les contrôles partagés AWS ?
    - A. Contrôles qui sont uniquement de la responsabilité du client en fonction de l'application qu'il déploie dans les services AWS.
    - B. Contrôles qu'un client hérite d'AWS.
    - C. Contrôles qui s'appliquent à la fois à la couche d'infrastructure et aux couches client.
    - D. Contrôles sur lesquels le client et AWS collaborent pour sécuriser l'infrastructure.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Contrôles sur lesquels le client et AWS collaborent pour sécuriser l'infrastructure** : Les contrôles partagés sont des responsabilités partagées entre AWS et le client, comme la gestion des correctifs, la configuration, etc.
    - **Autres options incorrectes** ❌ :
      - **A. Contrôles uniquement de la responsabilité du client** : Ce sont des contrôles client, pas partagés.
      - **B. Contrôles qu'un client hérite d'AWS** : Ce sont des contrôles hérités (comme la sécurité physique), pas partagés.
      - **C. Contrôles qui s'appliquent à la fois à la couche d'infrastructure et aux couches client** : Cela décrit la portée, mais pas la nature de la collaboration.
    </details>

28. Quels principes de conception se rapportent à l'efficacité des performances dans AWS ? (Choisissez DEUX)
    - A. Construire des architectures multi-régions pour mieux servir les clients mondiaux.
    - B. Appliquer la sécurité à toutes les couches.
    - C. Mettre en œuvre des contrôles d'identité et d'accès robustes.
    - D. Utiliser des architectures serverless.
    - E. Activer la journalisation d'audit.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Construire des architectures multi-régions pour mieux servir les clients mondiaux** : Améliore les performances en réduisant la latence pour les utilisateurs finaux.
      - **D. Utiliser des architectures serverless** : Les services serverless comme Lambda et Fargate peuvent améliorer l'efficacité des performances en éliminant la nécessité de gérer des serveurs et en permettant une mise à l'échelle automatique.
    - **Autres options incorrectes** ❌ :
      - **B. Appliquer la sécurité à toutes les couches** : Principe de sécurité, pas d'efficacité des performances.
      - **C. Mettre en œuvre des contrôles d'identité et d'accès robustes** : Principe de sécurité.
      - **E. Activer la journalisation d'audit** : Principe de gouvernance et de conformité.
    </details>

29. Lesquels des éléments ci-dessous sont des responsabilités du client lors de l'utilisation d'Amazon EC2 ? (Choisissez DEUX)
    - A. Protéger les données sensibles.
    - B. Appliquer des correctifs à l'infrastructure sous-jacente.
    - C. Configuration et exploitation de bases de données managées.
    - D. Maintenir des composants matériels cohérents.
    - E. Installer et configurer des logiciels tiers.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Protéger les données sensibles** : Le client est responsable de la sécurité de ses données, y compris le chiffrement et la gestion des accès.
      - **E. Installer et configurer des logiciels tiers** : Le client gère le système d'exploitation invité et les applications installées sur l'instance EC2.
    - **Autres options incorrectes** ❌ :
      - **B. Appliquer des correctifs à l'infrastructure sous-jacente** : C'est la responsabilité d'AWS (hyperviseur, matériel).
      - **C. Configuration et exploitation de bases de données managées** : Pour un service managé comme RDS, AWS gère une grande partie de l'exploitation, mais le client est responsable de la configuration de la base de données. Cependant, la question porte sur EC2, pas sur les services managés.
      - **D. Maintenir des composants matériels cohérents** : C'est la responsabilité d'AWS.
    </details>

30. Pourquoi une organisation déciderait-elle d'utiliser AWS plutôt qu'un centre de données sur site ? (Choisissez DEUX)
    - A. Licences logicielles commerciales gratuites.
    - B. Support technique gratuit.
    - C. Ressources élastiques.
    - D. Visites sur site pour l'audit.
    - E. Économies de coûts.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Ressources élastiques** : AWS permet de mettre à l'échelle les ressources de calcul rapidement et à la demande.
      - **E. Économies de coûts** : Le modèle de paiement à l'usage et l'absence de coûts d'investissement initiaux permettent de réduire les coûts par rapport à un centre de données sur site.
    - **Autres options incorrectes** ❌ :
      - **A. Licences logicielles commerciales gratuites** : AWS ne fournit pas de licences logicielles commerciales gratuites.
      - **B. Support technique gratuit** : Seul le support Basic est gratuit ; les plans supérieurs sont payants.
      - **D. Visites sur site pour l'audit** : AWS n'offre généralement pas de visites sur site pour les clients ; des audits à distance sont possibles via des rapports de conformité.
    </details>

31. Lesquels des services AWS suivants peuvent vous aider à effectuer une analyse de sécurité et un audit de conformité réglementaire ? (Choisissez DEUX)
    - A. Amazon Inspector.
    - B. AWS Virtual Private Gateway.
    - C. AWS Batch.
    - D. Amazon ECS.
    - E. AWS Config.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Amazon Inspector** : Évalue automatiquement les applications pour les vulnérabilités de sécurité et les écarts par rapport aux meilleures pratiques.
      - **E. AWS Config** : Audite et évalue la configuration des ressources pour la conformité aux règles internes et aux réglementations.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Virtual Private Gateway** : Composant VPN pour connecter un VPC à un réseau distant, pas d'analyse de sécurité.
      - **C. AWS Batch** : Service de traitement par lots, pas de sécurité.
      - **D. Amazon ECS** : Service de gestion de conteneurs.
    </details>

32. Lequel des éléments suivants n'est PAS une caractéristique d'Amazon Elastic Compute Cloud (Amazon EC2) ?
    - A. Amazon EC2 est considéré comme un service web serverless.
    - B. Amazon EC2 élimine le besoin d'investir dans du matériel à l'avance.
    - C. Amazon EC2 peut lancer autant de serveurs virtuels que nécessaire.
    - D. Amazon EC2 offre une informatique évolutive.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ (celle qui est fausse) :
      - **A. Amazon EC2 est considéré comme un service web serverless** : EC2 n'est pas serverless ; c'est un service d'infrastructure as a service (IaaS) où le client gère les serveurs. AWS Lambda est un exemple de service serverless.
    - **Autres options incorrectes** ❌ (celles qui sont vraies) :
      - **B. Amazon EC2 élimine le besoin d'investir dans du matériel à l'avance** : Vrai, c'est un avantage du cloud.
      - **C. Amazon EC2 peut lancer autant de serveurs virtuels que nécessaire** : Vrai, l'élasticité est une caractéristique clé.
      - **D. Amazon EC2 offre une informatique évolutive** : Vrai, via Auto Scaling.
    </details>

33. Quel est le service de calcul AWS qui exécute du code uniquement lorsqu'il est déclenché par des événements ?
    - A. AWS Lambda.
    - B. Amazon CloudWatch.
    - C. AWS Transit Gateway.
    - D. Amazon EC2.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Lambda** : Service de calcul serverless qui exécute du code en réponse à des événements (par exemple, modifications dans S3, messages dans SQS, appels d'API).
    - **Autres options incorrectes** ❌ :
      - **B. Amazon CloudWatch** : Service de surveillance, pas de calcul.
      - **C. AWS Transit Gateway** : Service de réseau pour connecter des VPC.
      - **D. Amazon EC2** : Service de calcul avec des instances persistantes, pas basé uniquement sur des événements.
    </details>

34. À la fois AWS et les distributeurs informatiques traditionnels fournissent une large gamme de serveurs virtuels pour répondre aux exigences de leurs clients. Quel est le nom de ces serveurs virtuels dans AWS ?
    - A. Snapshots EBS Amazon.
    - B. Amazon VPC.
    - C. Serveurs managés AWS.
    - D. Instances Amazon EC2.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Instances Amazon EC2** : Les instances EC2 sont les serveurs virtuels fournis par AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Snapshots EBS Amazon** : Sauvegardes de volumes EBS, pas des serveurs virtuels.
      - **B. Amazon VPC** : Réseau virtuel privé.
      - **C. Serveurs managés AWS** : Terme générique, pas le nom spécifique du service.
    </details>

35. Quel est le cadre créé par AWS Professional Services qui aide les organisations à concevoir une feuille de route pour une adoption réussie du cloud ?
    - A. AWS Secrets Manager.
    - B. AWS WAF.
    - C. AWS CAF.
    - D. Amazon EFS.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS CAF** : AWS Cloud Adoption Framework (CAF) fournit des conseils et des bonnes pratiques pour accélérer l'adoption du cloud.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Secrets Manager** : Service de gestion des secrets (mots de passe, clés API).
      - **B. AWS WAF** : Web Application Firewall.
      - **D. Amazon EFS** : Système de fichiers élastique.
    </details>

36. TYMO Cloud Corp prévoit de migrer l'intégralité de son centre de données sur site vers AWS. Quel outil peuvent-ils utiliser pour effectuer une analyse coûts-avantages du passage au cloud AWS ?
    - A. AWS Cost Explorer.
    - B. AWS TCO Calculator.
    - C. AWS Budgets.
    - D. AWS Pricing Calculator.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS TCO Calculator** : L'outil Total Cost of Ownership (TCO) d'AWS permet de comparer les coûts d'exécution d'une charge de travail sur site avec ceux d'AWS.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Cost Explorer** : Analyse les coûts AWS passés et présents, pas une comparaison avec l'on-premise.
      - **C. AWS Budgets** : Permet de définir des budgets et des alertes de coût.
      - **D. AWS Pricing Calculator** : Estime les coûts futurs sur AWS, mais ne compare pas avec l'on-premise.
    </details>

37. Laquelle des activités suivantes soutient le pilier d'excellence opérationnelle du AWS Well-Architected Framework ?
    - A. Utiliser AWS Trusted Advisor pour trouver des ressources sous-utilisées.
    - B. Utiliser AWS CloudTrail pour enregistrer les activités des utilisateurs.
    - C. Utiliser AWS CloudFormation pour gérer l'infrastructure sous forme de code.
    - D. Déployer une application dans plusieurs zones de disponibilité.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Utiliser AWS CloudFormation pour gérer l'infrastructure sous forme de code** : L'excellence opérationnelle comprend l'automatisation et la gestion de l'infrastructure en tant que code pour des déploiements reproductibles et fiables.
    - **Autres options incorrectes** ❌ :
      - **A. Utiliser AWS Trusted Advisor pour trouver des ressources sous-utilisées** : Cela relève du pilier d'optimisation des coûts.
      - **B. Utiliser AWS CloudTrail pour enregistrer les activités des utilisateurs** : Cela relève du pilier de sécurité.
      - **D. Déployer une application dans plusieurs zones de disponibilité** : Cela relève du pilier de fiabilité.
    </details>

38. Pourquoi de nombreuses startups préfèrent-elles AWS aux solutions traditionnelles sur site ? (Choisissez DEUX)
    - A. AWS leur permet de payer plus tard lorsque leur entreprise réussit.
    - B. AWS peut construire des centres de données complets plus rapidement que tout autre fournisseur de cloud.
    - C. En utilisant AWS, elles peuvent réduire le time-to-market en se concentrant sur les activités commerciales plutôt que sur la construction et la gestion de centres de données.
    - D. AWS supprime le besoin d'investir dans les dépenses d'exploitation.
    - E. L'utilisation d'AWS permet aux entreprises de remplacer les dépenses d'investissement importantes par des coûts variables faibles.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Réduire le time-to-market en se concentrant sur les activités commerciales** : AWS permet de se concentrer sur le développement de produits plutôt que sur l'infrastructure.
      - **E. Remplacer les dépenses d'investissement (CapEx) par des coûts variables faibles (OpEx)** : Le modèle de paiement à l'usage élimine les coûts initiaux élevés.
    - **Autres options incorrectes** ❌ :
      - **A. Payer plus tard lorsque leur entreprise réussit** : AWS facture à l'usage, pas de paiement différé.
      - **B. Construire des centres de données plus rapidement** : Bien qu'AWS ait une infrastructure mondiale, ce n'est pas la raison principale pour les startups.
      - **D. Supprime le besoin d'investir dans les dépenses d'exploitation** : Les dépenses d'exploitation (OpEx) existent toujours, mais elles sont variables et généralement plus faibles.
    </details>

39. Quels sont les avantages de l'utilisation de DynamoDB ? (Choisissez DEUX)
    - A. Se met à l'échelle automatiquement pour répondre à la capacité de débit requise.
    - B. Fournit des instances redimensionnables pour correspondre à la demande actuelle.
    - C. Prend en charge à la fois les modèles de données relationnels et non relationnels.
    - D. Offre une latence extrêmement faible (millisecondes à un chiffre).
    - E. Prend en charge les moteurs de base de données NoSQL les plus populaires tels que CouchDB et MongoDB.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Se met à l'échelle automatiquement pour répondre à la capacité de débit requise** : DynamoDB peut mettre à l'échelle automatiquement le débit en lecture/écriture en fonction de la charge.
      - **D. Offre une latence extrêmement faible (millisecondes à un chiffre)** : DynamoDB est conçu pour des performances à faible latence, même à grande échelle.
    - **Autres options incorrectes** ❌ :
      - **B. Fournit des instances redimensionnables** : DynamoDB est un service entièrement managé sans notion d'instances à redimensionner ; la mise à l'échelle est automatique.
      - **C. Prend en charge à la fois les modèles de données relationnels et non relationnels** : DynamoDB est une base de données NoSQL (clé-valeur et document) et ne prend pas en charge les modèles relationnels traditionnels.
      - **E. Prend en charge les moteurs de base de données NoSQL les plus populaires** : DynamoDB est un service propriétaire d'AWS ; il n'utilise pas de moteurs tiers comme CouchDB ou MongoDB.
    </details>

40. Lequel des éléments suivants peut être utilisé pour protéger les données au repos sur Amazon S3 ? (Choisissez DEUX)
    - A. Versioning.
    - B. Déduplication.
    - C. Permissions.
    - D. Déchiffrement.
    - E. Conversion.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Versioning** : Le versioning permet de conserver plusieurs versions d'un objet, protégeant contre les suppressions ou écrasements accidentels.
      - **C. Permissions** : Les autorisations (via les politiques IAM et les politiques de compartiment) contrôlent qui peut accéder aux objets S3, protégeant contre les accès non autorisés.
    - **Autres options incorrectes** ❌ :
      - **B. Déduplication** : La déduplication n'est pas une fonctionnalité native de S3 pour la protection des données.
      - **D. Déchiffrement** : Le déchiffrement est l'inverse de la protection ; le chiffrement est utilisé pour protéger les données au repos.
      - **E. Conversion** : Non pertinent.
    </details>

41. Dans le cadre du programme d'accélération des migrations AWS (MAP), qu'est-ce qu'AWS fournit pour accélérer l'adoption d'AWS par les entreprises ? (Choisissez DEUX)
    - A. Partenaires AWS.
    - B. AWS Artifact.
    - C. AWS Professional Services.
    - D. Amazon Athena.
    - E. Amazon PinPoint.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Partenaires AWS** : Les partenaires de l'AWS Partner Network (APN) fournissent des services de conseil et de migration.
      - **C. AWS Professional Services** : L'équipe de consultants d'AWS qui aide les entreprises à planifier et exécuter des migrations.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Artifact** : Portail pour les rapports de conformité et les accords, pas spécifiquement pour l'accélération des migrations.
      - **D. Amazon Athena** : Service de requête interactive de données sur S3.
      - **E. Amazon PinPoint** : Service d'engagement et d'analyse des clients.
    </details>

42. AWS recommande certaines pratiques pour aider les organisations à éviter des frais inattendus sur leur facture. Laquelle des pratiques suivantes n'en fait PAS partie ?
    - A. Supprimer les volumes EBS inutilisés après la résiliation d'une instance EC2.
    - B. Supprimer les configurations de lancement AutoScaling inutilisées.
    - C. Supprimer les équilibreurs de charge élastiques inutilisés.
    - D. Libérer les IP élastiques inutilisées après la résiliation d'une instance EC2.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ (celle qui n'est PAS une pratique recommandée) :
      - **B. Supprimer les configurations de lancement AutoScaling inutilisées** : Les configurations de lancement AutoScaling ne génèrent pas de coûts par elles-mêmes. Elles sont stockées gratuitement. La suppression n'est pas nécessaire pour éviter des frais.
    - **Autres options incorrectes** ❌ (celles qui SONT des pratiques recommandées) :
      - **A. Supprimer les volumes EBS inutilisés** : Les volumes EBS facturent en fonction de l'espace provisionné, même s'ils ne sont pas attachés.
      - **C. Supprimer les équilibreurs de charge élastiques inutilisés** : Les ELB facturent à l'heure (ou partielle) et par quantité de données traitées.
      - **D. Libérer les IP élastiques inutilisées** : Les IP élastiques sont gratuites lorsqu'elles sont associées à une instance en cours d'exécution, mais facturent des frais horaires si elles ne sont pas associées.
    </details>

43. Quel est l'outil AWS qui peut aider une entreprise à visualiser ses dépenses AWS au cours des derniers mois ?
    - A. AWS Cost Explorer.
    - B. AWS Pricing Calculator.
    - C. AWS Budgets.
    - D. AWS Consolidated Billing.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Cost Explorer** : Outil de visualisation des coûts qui permet d'analyser les dépenses AWS au fil du temps avec des graphiques et des tableaux.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Pricing Calculator** : Outil pour estimer les coûts futurs basés sur une architecture planifiée.
      - **C. AWS Budgets** : Permet de définir des budgets et des alertes, mais la visualisation historique est limitée.
      - **D. AWS Consolidated Billing** : Fonctionnalité d'AWS Organizations pour regrouper la facturation de plusieurs comptes, pas un outil de visualisation.
    </details>

44. Lors de l'exécution d'une charge de travail dans AWS, le client n'est PAS responsable de : (Sélectionnez DEUX)
    - A. Exécuter des tests d'intrusion.
    - B. Réserver de la capacité.
    - C. Opérations du centre de données.
    - D. Audit et conformité réglementaire.
    - E. Sécurité de l'infrastructure.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Opérations du centre de données** : AWS est responsable de l'exploitation des centres de données (alimentation, refroidissement, sécurité physique).
      - **E. Sécurité de l'infrastructure** : AWS est responsable de la sécurité de l'infrastructure sous-jacente (matériel, réseau, virtualisation).
    - **Autres options incorrectes** ❌ :
      - **A. Exécuter des tests d'intrusion** : Le client peut effectuer des tests d'intrusion sur ses propres instances avec certaines restrictions.
      - **B. Réserver de la capacité** : Le client peut choisir de réserver de la capacité avec des instances réservées ou des Savings Plans.
      - **D. Audit et conformité réglementaire** : Le client est responsable de la conformité de ses charges de travail et de ses données, bien qu'AWS fournisse des rapports et des certifications.
    </details>

45. Quel service AWS peut être utilisé pour envoyer des messages texte promotionnels (SMS) à plus de 200 pays dans le monde ?
    - A. Amazon Simple Email Service (Amazon SES).
    - B. Amazon Simple Storage Service (Amazon S3).
    - C. Amazon Simple Notification Service (Amazon SNS).
    - D. Amazon Simple Queue Service (Amazon SQS).

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon Simple Notification Service (Amazon SNS)** : SNS prend en charge l'envoi de notifications SMS à l'échelle mondiale.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Simple Email Service (Amazon SES)** : Pour les e-mails transactionnels, pas les SMS.
      - **B. Amazon Simple Storage Service (Amazon S3)** : Stockage d'objets.
      - **D. Amazon Simple Queue Service (Amazon SQS)** : File d'attente de messages.
    </details>

46. Lequel des éléments suivants permet de créer de nouvelles instances RDS ? (Choisissez DEUX)
    - A. AWS CodeDeploy.
    - B. AWS Quick Starts.
    - C. AWS CloudFormation.
    - D. AWS DMS.
    - E. AWS Management Console.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. AWS CloudFormation** : Permet de provisionner des ressources RDS via des modèles d'infrastructure as code.
      - **E. AWS Management Console** : Interface web pour créer et gérer des instances RDS manuellement.
    - **Autres options incorrectes** ❌ :
      - **A. AWS CodeDeploy** : Service de déploiement d'applications, pas de provisionnement de base de données.
      - **B. AWS Quick Starts** : Guides et modèles CloudFormation pour déployer rapidement des solutions, mais ne crée pas directement des instances RDS (bien que des modèles puissent inclure RDS).
      - **D. AWS DMS** : Database Migration Service pour migrer des bases de données, pas pour créer de nouvelles instances RDS.
    </details>

47. L'un des principaux avantages de l'utilisation d'AWS est la réduction des coûts. Qu'est-ce qu'AWS fournit pour réduire le coût d'exécution des instances Amazon EC2 ?
    - A. Faibles coûts mensuels de maintenance des instances.
    - B. Étiquetage d'instances à faible coût.
    - C. Facturation à la seconde des instances.
    - D. Faibles frais de démarrage des instances.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Facturation à la seconde des instances** : Pour les instances Linux, la facturation à la seconde (après la première minute) permet de payer uniquement pour le temps de calcul utilisé, réduisant ainsi les coûts.
    - **Autres options incorrectes** ❌ :
      - **A. Faibles coûts mensuels de maintenance** : AWS ne facture pas de frais de maintenance mensuels pour EC2.
      - **B. Étiquetage d'instances à faible coût** : L'étiquetage est gratuit.
      - **D. Faibles frais de démarrage des instances** : Il n'y a pas de frais de démarrage pour les instances EC2.
    </details>

48. Quel groupe AWS aide les clients à atteindre leurs objectifs commerciaux souhaités ?
    - A. Équipe de sécurité AWS.
    - B. AWS Professional Services.
    - C. AWS Trusted Advisor.
    - D. Équipe de support Concierge AWS.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Professional Services** : Équipe de consultants d'AWS qui aide les clients à concevoir, architecturer et optimiser leurs environnements AWS pour atteindre des objectifs commerciaux.
    - **Autres options incorrectes** ❌ :
      - **A. Équipe de sécurité AWS** : Responsable de la sécurité de l'infrastructure AWS, pas de conseil commercial.
      - **C. AWS Trusted Advisor** : Fournit des recommandations d'optimisation automatisées.
      - **D. Équipe de support Concierge AWS** : Assistance pour les questions de facturation et de compte, principalement pour le support Enterprise.
    </details>

49. Quel service ou quelle fonctionnalité AWS est utilisé pour gérer les clés utilisées pour chiffrer les données client ?
    - A. AWS KMS.
    - B. Politiques de contrôle de service AWS (SCP).
    - C. Authentification multi-facteurs (MFA).
    - D. Amazon Macie.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS KMS** : AWS Key Management Service permet de créer et de gérer des clés de chiffrement utilisées pour protéger les données.
    - **Autres options incorrectes** ❌ :
      - **B. Politiques de contrôle de service AWS (SCP)** : Utilisées dans AWS Organizations pour restreindre les autorisations au niveau du compte, pas pour gérer les clés de chiffrement.
      - **C. Authentification multi-facteurs (MFA)** : Pour l'authentification des utilisateurs, pas la gestion des clés.
      - **D. Amazon Macie** : Service de sécurité qui utilise le machine learning pour découvrir et protéger les données sensibles, mais ne gère pas les clés de chiffrement.
    </details>

50. Quel service AWS permet aux clients de télécharger les rapports SOC et PCI d'AWS ?
    - A. AWS Well-Architected Tool.
    - B. AWS Artifact.
    - C. AWS Glue.
    - D. Amazon Chime.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Artifact** : Portail centralisé où les clients peuvent accéder aux rapports de conformité d'AWS, tels que SOC, PCI, ISO, etc.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Well-Architected Tool** : Outil pour évaluer les architectures selon le framework Well-Architected.
      - **C. AWS Glue** : Service d'intégration de données (ETL).
      - **D. Amazon Chime** : Service de communication (visioconférence, chat).
    </details>