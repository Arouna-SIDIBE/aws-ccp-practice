---
layout: exam
---

# Examen de pratique 14

1. Quel service de stockage peut être utilisé comme option à faible coût pour héberger des sites web statiques ?
    - A. Amazon Glacier
    - B. Amazon DynamoDB
    - C. Amazon Elastic File System (Amazon EFS)
    - D. Amazon Simple Storage Service (Amazon S3)

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon Simple Storage Service (Amazon S3)** : S3 est idéal pour héberger des sites web statiques de manière économique, avec une haute disponibilité et une évolutivité automatique.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Glacier** : Service d'archivage à long terme avec des temps de récupération plus longs, non adapté à l'hébergement de sites web.
      - **B. Amazon DynamoDB** : Base de données NoSQL, pas un service de stockage d'objets pour l'hébergement web.
      - **C. Amazon Elastic File System (Amazon EFS)** : Service de stockage de fichiers pour instances EC2, non optimisé pour l'hébergement web statique.
    </details>

2. Quel modèle de tarification des instances Amazon EC2 peut fournir des remises allant jusqu'à 90 % ?
    - A. Instances réservées
    - B. À la demande
    - C. Hôtes dédiés
    - D. Instances Spot

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Instances Spot** : Les instances Spot permettent de profiter de la capacité inutilisée d'EC2 à des prix pouvant atteindre 90 % de réduction par rapport aux instances à la demande.
    - **Autres options incorrectes** ❌ :
      - **A. Instances réservées** : Offrent des remises importantes (jusqu'à 75 %) mais pas aussi élevées que les instances Spot.
      - **B. À la demande** : Prix standard sans remise significative.
      - **C. Hôtes dédiés** : Matériel physique dédié, généralement plus cher, pas de remises importantes.
    </details>

3. Selon le modèle de responsabilité partagée d'AWS, de quoi le client AWS est-il responsable ?
    - A. Contrôles d'accès physique
    - B. Chiffrement des données
    - C. Destruction sécurisée des dispositifs de stockage
    - D. Gestion des risques environnementaux

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Chiffrement des données** : Le client est responsable du chiffrement de ses données (au repos et en transit).
    - **Autres options incorrectes** ❌ :
      - **A. Contrôles d'accès physique** : Responsabilité d'AWS.
      - **C. Destruction sécurisée des dispositifs de stockage** : Responsabilité d'AWS.
      - **D. Gestion des risques environnementaux** : Responsabilité d'AWS.
    </details>

4. Lequel des services cloud AWS suivants peut être utilisé pour exécuter une base de données relationnelle gérée par le client ?
    - A. Amazon EC2
    - B. Amazon Route 53
    - C. Amazon ElastiCache
    - D. Amazon DynamoDB

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon EC2** : Permet d'installer et gérer votre propre base de données relationnelle sur une instance virtuelle.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Route 53** : Service DNS, pas de base de données.
      - **C. Amazon ElastiCache** : Service de cache en mémoire, pas une base de données relationnelle complète.
      - **D. Amazon DynamoDB** : Base de données NoSQL managée, pas relationnelle auto-gérée.
    </details>

5. Une entreprise recherche une solution d'entrepôt de données évolutive. <br/> Laquelle des solutions AWS suivantes répondrait aux besoins de l'entreprise ?
    - A. Amazon Simple Storage Service (Amazon S3)
    - B. Amazon DynamoDB
    - C. Amazon Kinesis
    - D. Amazon Redshift

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon Redshift** : Entrepôt de données pétabyte-scale conçu pour l'analyse de grands volumes de données.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Simple Storage Service (Amazon S3)** : Stockage d'objets, pas un entrepôt de données.
      - **B. Amazon DynamoDB** : Base de données NoSQL transactionnelle, pas d'entrepôt de données.
      - **C. Amazon Kinesis** : Traitement de flux de données en temps réel, pas d'entrepôt de données.
    </details>

6. Quelle affirmation décrit le mieux l'Elastic Load Balancing ?
    - A. Il traduit un nom de domaine en une adresse IP en utilisant le DNS.
    - B. Il répartit le trafic d'application entrant sur une ou plusieurs instances Amazon EC2.
    - C. Il collecte des métriques sur les instances Amazon EC2 connectées.
    - D. Il ajuste automatiquement le nombre d'instances Amazon EC2 pour supporter le trafic entrant.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Il répartit le trafic d'application entrant sur une ou plusieurs instances Amazon EC2** : C'est la fonction principale d'un équilibreur de charge.
    - **Autres options incorrectes** ❌ :
      - **A. Il traduit un nom de domaine en une adresse IP** : C'est la fonction de Route 53 (DNS).
      - **C. Il collecte des métriques sur les instances** : C'est la fonction de CloudWatch.
      - **D. Il ajuste automatiquement le nombre d'instances** : C'est la fonction d'Auto Scaling.
    </details>

7. Quelles sont les méthodes valides pour qu'un client interagisse avec les services AWS ? (Sélectionnez DEUX.)
    - A. Interface en ligne de commande
    - B. Sur site
    - C. Kits de développement logiciel (SDK)
    - D. Logiciel en tant que service
    - E. Hybride

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponses correctes : A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Interface en ligne de commande** : AWS CLI permet d'interagir avec AWS via des commandes.
      - **C. Kits de développement logiciel (SDK)** : Les AWS SDK permettent d'intégrer AWS dans des applications.
    - **Autres options incorrectes** ❌ :
      - **B. Sur site** : Ce n'est pas une méthode d'interaction avec AWS.
      - **D. Logiciel en tant que service** : Modèle de cloud, pas une méthode d'interaction.
      - **E. Hybride** : Architecture de déploiement, pas une méthode d'interaction.
    </details>

8. Les multiples régions du cloud AWS sont un exemple de :
    - A. agilité.
    - B. infrastructure mondiale.
    - C. élasticité.
    - D. tarification à l'usage.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. infrastructure mondiale** : Les régions AWS font partie de l'infrastructure mondiale distribuée d'AWS.
    - **Autres options incorrectes** ❌ :
      - **A. agilité** : Capacité à provisionner rapidement des ressources.
      - **C. élasticité** : Capacité à ajuster les ressources selon la demande.
      - **D. tarification à l'usage** : Modèle de facturation.
    </details>

9. Lequel des services AWS suivants peut être utilisé pour diffuser de grandes quantités de contenu vidéo en ligne avec la latence la plus faible possible ? (Sélectionnez DEUX.)
    - A. AWS Storage Gateway
    - B. Amazon S3
    - C. Amazon Elastic File System (EFS)
    - D. Amazon Glacier
    - E. Amazon CloudFront

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponses correctes : B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Amazon S3** : Stockage durable et évolutif pour le contenu vidéo.
      - **E. Amazon CloudFront** : CDN qui diffuse le contenu depuis des emplacements périphériques proches des utilisateurs, réduisant la latence.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Storage Gateway** : Service de stockage hybride, pas optimisé pour la diffusion vidéo.
      - **C. Amazon Elastic File System (EFS)** : Stockage de fichiers pour instances EC2, pas un CDN.
      - **D. Amazon Glacier** : Archivage à long terme avec temps de récupération élevés.
    </details>

10. Des serveurs web exécutés sur Amazon EC2 accèdent à une application legacy exécutée dans un centre de données d'entreprise. <br/> Quel terme décrirait ce modèle ?
    - A. Cloud-natif
    - B. Réseau de partenaires
    - C. Architecture hybride
    - D. Infrastructure en tant que service

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Architecture hybride** : Combinaison d'infrastructure cloud (AWS) et sur site.
    - **Autres options incorrectes** ❌ :
      - **A. Cloud-natif** : Applications conçues spécifiquement pour le cloud.
      - **B. Réseau de partenaires** : Programme de partenariat AWS, pas un modèle d'architecture.
      - **D. Infrastructure en tant que service** : Modèle de cloud, pas spécifiquement hybride.
    </details>

11. Quel est l'avantage d'utiliser des services managés AWS, tels qu'Amazon ElastiCache et Amazon Relational Database Service (Amazon RDS) ?
    - A. Ils nécessitent que le client surveille et remplace les instances défaillantes.
    - B. Ils offrent de meilleures performances que les services gérés par le client.
    - C. Ils simplifient l'application des correctifs et la mise à jour des systèmes d'exploitation sous-jacents.
    - D. Ils ne nécessitent pas que le client optimise le choix du type ou de la taille des instances.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Ils simplifient l'application des correctifs et la mise à jour des systèmes d'exploitation sous-jacents** : AWS gère ces tâches administratives.
    - **Autres options incorrectes** ❌ :
      - **A. Ils nécessitent que le client surveille et remplace les instances** : C'est l'inverse, AWS gère cela pour les services managés.
      - **B. Ils offrent de meilleures performances** : Les performances dépendent de nombreux facteurs, pas uniquement du fait qu'un service soit managé.
      - **D. Ils ne nécessitent pas que le client optimise le choix des instances** : Le client doit toujours choisir les types d'instances appropriés.
    </details>

12. Quel service fournit une quantité virtuellement illimitée de stockage d'objets en ligne hautement durable ?
    - A. Amazon Redshift
    - B. Amazon Elastic File System (Amazon EFS)
    - C. Amazon Elastic Container Service (Amazon ECS)
    - D. Amazon S3

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon S3** : Offre un stockage d'objets illimité avec une durabilité de 99,999999999 %.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Redshift** : Entrepôt de données, pas un stockage d'objets général.
      - **B. Amazon Elastic File System (Amazon EFS)** : Stockage de fichiers, limité en capacité par rapport à S3.
      - **C. Amazon Elastic Container Service (Amazon ECS)** : Service d'orchestration de conteneurs, pas de stockage.
    </details>

13. Quelle entité Identity and Access Management (IAM) est associée à un ID de clé d'accès et une clé d'accès secrète lors de l'utilisation de l'interface en ligne de commande AWS (AWS CLI) ?
    - A. Groupe IAM
    - B. Utilisateur IAM
    - C. Rôle IAM
    - D. Politique IAM

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Utilisateur IAM** : Les clés d'accès sont associées à des utilisateurs IAM pour l'accès programmatique.
    - **Autres options incorrectes** ❌ :
      - **A. Groupe IAM** : Les groupes ne peuvent pas avoir de clés d'accès directes.
      - **C. Rôle IAM** : Les rôles utilisent des jetons de sécurité temporaires, pas des clés d'accès long terme.
      - **D. Politique IAM** : Les politiques définissent des permissions, mais n'ont pas de clés d'accès.
    </details>

14. Parmi les services liés à la sécurité suivants, lesquels AWS propose-t-il ? (Sélectionnez DEUX.)
    - A. Jetons physiques d'authentification multi-facteurs
    - B. Vérifications de sécurité AWS Trusted Advisor
    - C. Chiffrement des données
    - D. Tests de pénétration automatisés
    - E. Détection de contenu protégé par copyright sur Amazon S3

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponses correctes : B, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Vérifications de sécurité AWS Trusted Advisor** : Fournit des recommandations de sécurité.
      - **C. Chiffrement des données** : AWS propose divers services et outils de chiffrement.
    - **Autres options incorrectes** ❌ :
      - **A. Jetons physiques d'authentification multi-facteurs** : AWS propose MFA virtuel, pas de jetons physiques (sauf via des partenaires).
      - **D. Tests de pénétration automatisés** : Les clients peuvent effectuer leurs propres tests, mais AWS ne propose pas ce service automatisé.
      - **E. Détection de contenu protégé par copyright sur Amazon S3** : Non, ce n'est pas un service AWS standard.
    </details>

15. Quel service AWS managé est utilisé pour héberger des bases de données ?
    - A. AWS Batch
    - B. AWS Artifact
    - C. AWS Data Pipeline
    - D. Amazon RDS

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon RDS** : Service de base de données relationnelle entièrement géré.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Batch** : Service de traitement par lots.
      - **B. AWS Artifact** : Portail pour les rapports de conformité.
      - **C. AWS Data Pipeline** : Service d'orchestration de données.
    </details>

16. Quel service AWS fournit une solution de stockage de fichiers partagés simple et évolutive à utiliser avec les serveurs AWS et sur site basés sur Linux ?
    - A. Amazon S3
    - B. Amazon Glacier
    - C. Amazon EBS
    - D. Amazon EFS

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon EFS** : Service de stockage de fichiers NFS élastique et géré pour Linux.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon S3** : Stockage d'objets, pas un système de fichiers partagés.
      - **B. Amazon Glacier** : Service d'archivage.
      - **C. Amazon EBS** : Stockage par blocs pour instances EC2 individuelles.
    </details>

17. Lors de la conception d'applications cloud, lequel des principes de conception suivants est clé ?
    - A. Utiliser la plus grande instance possible
    - B. Provisionner la capacité pour la charge de pointe
    - C. Utiliser le processus de développement Scrum
    - D. Mettre en œuvre l'élasticité

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Mettre en œuvre l'élasticité** : Ajuster automatiquement les ressources selon la demande.
    - **Autres options incorrectes** ❌ :
      - **A. Utiliser la plus grande instance possible** : Peut entraîner un gaspillage de ressources.
      - **B. Provisionner la capacité pour la charge de pointe** : Peut être coûteux ; l'élasticité est préférable.
      - **C. Utiliser le processus de développement Scrum** : Méthodologie de développement, pas un principe de conception cloud.
    </details>

18. Quel service AWS devrait être utilisé pour le stockage à long terme et à faible coût des sauvegardes de données ?
    - A. Amazon RDS
    - B. Amazon Glacier
    - C. AWS Snowball
    - D. AWS EBS

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon Glacier** : Service d'archivage conçu pour le stockage à long terme à très faible coût.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon RDS** : Service de base de données, pas pour l'archivage.
      - **C. AWS Snowball** : Appareil de transfert de données physique.
      - **D. AWS EBS** : Stockage par blocs pour instances EC2, coûteux pour l'archivage.
    </details>

19. Quelle tâche AWS est-elle responsable dans le modèle de responsabilité partagée pour la sécurité et la conformité ?
    - A. Accorder l'accès aux individus et aux services
    - B. Chiffrer les données en transit
    - C. Mettre à jour le micrologiciel de l'hôte Amazon EC2
    - D. Mettre à jour les systèmes d'exploitation

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Chiffrer les données en transit** : AWS fournit l'infrastructure pour le chiffrement (ex : TLS), mais le client doit l'activer.
    - **Autres options incorrectes** ❌ :
      - **A. Accorder l'accès aux individus et aux services** : Responsabilité du client via IAM.
      - **C. Mettre à jour le micrologiciel de l'hôte Amazon EC2** : Responsabilité d'AWS.
      - **D. Mettre à jour les systèmes d'exploitation** : Pour EC2, c'est la responsabilité du client ; pour les services managés, AWS en assume une partie.
    </details>

20. Où une entreprise devrait-elle se rendre pour rechercher des listes de logiciels de fournisseurs de logiciels indépendants afin de trouver, tester, acheter et déployer des logiciels exécutés sur AWS ?
    - A. AWS Marketplace
    - B. Amazon Lumberyard
    - C. AWS Artifact
    - D. Amazon CloudSearch

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Marketplace** : Catalogue numérique de solutions logicielles tierces préconfigurées pour AWS.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Lumberyard** : Moteur de jeu, pas un marketplace.
      - **C. AWS Artifact** : Portail pour les rapports de conformité.
      - **D. Amazon CloudSearch** : Service de recherche géré.
    </details>

21. Lequel des éléments suivants est un avantage de l'utilisation du cloud AWS ?
    - A. La sécurité permissive supprime la charge administrative.
    - B. Capacité à se concentrer sur des activités génératrices de revenus.
    - C. Contrôle sur le matériel réseau du cloud.
    - D. Choix de fournisseurs de matériel cloud spécifiques.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Capacité à se concentrer sur des activités génératrices de revenus** : AWS réduit le travail d'infrastructure, permettant aux équipes de se concentrer sur la valeur commerciale.
    - **Autres options incorrectes** ❌ :
      - **A. La sécurité permissive supprime la charge administrative** : La sécurité est une responsabilité partagée, pas "permissive".
      - **C. Contrôle sur le matériel réseau du cloud** : AWS gère le matériel sous-jacent.
      - **D. Choix de fournisseurs de matériel cloud spécifiques** : AWS utilise son propre matériel standardisé.
    </details>

22. Lors de l'exécution d'une analyse de coût qui prend en charge l'isolation physique d'une charge de travail client, quel modèle d'hébergement de calcul doit être pris en compte dans le coût total de possession (TCO) ?
    - A. Hôtes dédiés
    - B. Instances réservées
    - C. Instances à la demande
    - D. Instances réservées sans paiement initial

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Hôtes dédiés** : Serveurs physiques dédiés à un seul client, offrant l'isolation physique.
    - **Autres options incorrectes** ❌ :
      - **B. Instances réservées** : Modèle de facturation, pas d'isolation physique garantie.
      - **C. Instances à la demande** : Pas d'isolation physique.
      - **D. Instances réservées sans paiement initial** : Modèle de facturation, pas d'isolation physique.
    </details>

23. Quel service AWS fournit la capacité de gérer l'infrastructure sous forme de code ?
    - A. AWS CodePipeline
    - B. AWS CodeDeploy
    - C. AWS Direct Connect
    - D. AWS CloudFormation

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS CloudFormation** : Permet de modéliser, provisionner et gérer les ressources AWS via des modèles texte.
    - **Autres options incorrectes** ❌ :
      - **A. AWS CodePipeline** : Service de livraison continue.
      - **B. AWS CodeDeploy** : Automatise les déploiements d'applications.
      - **C. AWS Direct Connect** : Connexion réseau dédiée.
    </details>

24. Si un client a besoin d'auditer la gestion des changements des ressources AWS, lequel des services AWS suivants devrait-il utiliser ?
    - A. AWS Config
    - B. AWS Trusted Advisor
    - C. Amazon CloudWatch
    - D. Amazon Inspector

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Config** : Service d'audit et de suivi des changements de configuration des ressources.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Trusted Advisor** : Fournit des recommandations d'optimisation.
      - **C. Amazon CloudWatch** : Surveillance des performances et des métriques.
      - **D. Amazon Inspector** : Évaluation de sécurité automatisée.
    </details>

25. Qu'est-ce qu'Amazon CloudWatch ?
    - A. Un référentiel de code avec des fonctionnalités de construction personnalisables et de validation d'équipe.
    - B. Un référentiel de métriques avec des seuils et canaux de notification personnalisables.
    - C. Un référentiel de configuration de sécurité avec analytique des menaces.
    - D. Un référentiel de règles de pare-feu d'application web avec des fonctionnalités de prévention automatisée des vulnérabilités.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Un référentiel de métriques avec des seuils et canaux de notification personnalisables** : CloudWatch collecte des métriques et permet de définir des alarmes.
    - **Autres options incorrectes** ❌ :
      - **A. Un référentiel de code** : Décrit AWS CodeCommit.
      - **C. Un référentiel de configuration de sécurité** : Décrit AWS Security Hub ou AWS Config.
      - **D. Un référentiel de règles de pare-feu d'application web** : Décrit AWS WAF.
    </details>

26. Quel service permet à une entreprise avec plusieurs comptes AWS de combiner son utilisation pour obtenir des remises volume ?
    - A. AWS Server Migration Service
    - B. AWS Organizations
    - C. AWS Budgets
    - D. AWS Trusted Advisor

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Organizations** : Permet la facturation consolidée et le regroupement de l'utilisation pour les remises volume.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Server Migration Service** : Service de migration de serveurs.
      - **C. AWS Budgets** : Gestion des budgets et alertes de coût.
      - **D. AWS Trusted Advisor** : Recommandations d'optimisation.
    </details>

27. Lequel des services suivants pourrait être utilisé pour déployer une application sur des serveurs exécutés sur site ? (Sélectionnez DEUX.)
    - A. AWS Elastic Beanstalk
    - B. AWS OpsWorks
    - C. AWS CodeDeploy
    - D. AWS Batch
    - E. AWS X-Ray

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponses correctes : B, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. AWS OpsWorks** : Peut gérer des instances sur site.
      - **C. AWS CodeDeploy** : Peut déployer sur des instances sur site.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Elastic Beanstalk** : Plateforme PaaS pour AWS uniquement.
      - **D. AWS Batch** : Traitement par lots sur AWS.
      - **E. AWS X-Ray** : Traçage d'applications distribuées.
    </details>

28. Quel modèle de tarification Amazon EC2 s'ajuste en fonction de l'offre et de la demande des instances EC2 ?
    - A. Instances à la demande
    - B. Instances réservées
    - C. Instances Spot
    - D. Instances réservées convertibles

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Instances Spot** : Les prix varient en fonction de la capacité inutilisée disponible.
    - **Autres options incorrectes** ❌ :
      - **A. Instances à la demande** : Prix fixes.
      - **B. Instances réservées** : Prix fixes avec engagement.
      - **D. Instances réservées convertibles** : Prix fixes avec possibilité d'échange.
    </details>

29. Quels principes de conception pour l'architecture cloud sont recommandés lors de la refonte d'une grande application monolithique ? (Sélectionnez DEUX.)
    - A. Utiliser une surveillance manuelle.
    - B. Utiliser des serveurs fixes.
    - C. Mettre en œuvre un couplage lâche.
    - D. Compter sur des composants individuels.
    - E. Concevoir pour l'évolutivité.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponses correctes : C, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Mettre en œuvre un couplage lâche** : Réduit les interdépendances entre les composants.
      - **E. Concevoir pour l'évolutivité** : Permet à l'application de s'adapter à la charge.
    - **Autres options incorrectes** ❌ :
      - **A. Utiliser une surveillance manuelle** : L'automatisation est recommandée.
      - **B. Utiliser des serveurs fixes** : L'élasticité est préférable.
      - **D. Compter sur des composants individuels** : Conception résiliente avec redondance est préférable.
    </details>

30. Quel est le plan de support AWS MINIMUM qui permet un temps de réponse cible d'une heure pour les cas de support ?
    - A. Enterprise
    - B. Business
    - C. Developer
    - D. Basic

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Business** : Offre un temps de réponse de 1 heure pour les cas critiques.
    - **Autres options incorrectes** ❌ :
      - **A. Enterprise** : Temps de réponse plus rapides (15 minutes pour critique).
      - **C. Developer** : Temps de réponse de 12 heures pour les cas critiques.
      - **D. Basic** : Pas d'accès au support technique.
    </details>

31. Où peut-on télécharger les rapports de conformité et de certification AWS ?
    - A. AWS Artifact
    - B. AWS Concierge
    - C. AWS Certificate Manager
    - D. AWS Trusted Advisor

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Artifact** : Portail central pour les rapports de conformité et les accords.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Concierge** : Service de support pour les clients Enterprise.
      - **C. AWS Certificate Manager** : Gestion des certificats SSL/TLS.
      - **D. AWS Trusted Advisor** : Recommandations d'optimisation.
    </details>

32. Quel service AWS fournit une vue personnalisée de l'état de santé des services AWS spécifiques qui alimentent les charges de travail d'un client exécutées sur AWS ?
    - A. AWS Service Health Dashboard
    - B. AWS X-Ray
    - C. AWS Personal Health Dashboard
    - D. Amazon CloudWatch

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Personal Health Dashboard** : Fournit des alertes personnalisées sur les services AWS affectant vos ressources.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Service Health Dashboard** : Vue générale de l'état de tous les services AWS.
      - **B. AWS X-Ray** : Traçage d'applications distribuées.
      - **D. Amazon CloudWatch** : Surveillance des métriques et des performances.
    </details>

33. Lequel des éléments suivants est un avantage de la facturation consolidée sur AWS ?
    - A. Qualification aux tarifs volume
    - B. Partage des permissions d'accès
    - C. Factures multiples par compte
    - D. Élimine le besoin d'étiquetage

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Qualification aux tarifs volume** : L'utilisation combinée de plusieurs comptes peut atteindre des seuils de volume pour des remises.
    - **Autres options incorrectes** ❌ :
      - **B. Partage des permissions d'accès** : Non, les permissions sont gérées par IAM, pas par la facturation consolidée.
      - **C. Factures multiples par compte** : C'est l'inverse : une seule facture consolidée.
      - **D. Élimine le besoin d'étiquetage** : L'étiquetage reste utile pour l'allocation des coûts.
    </details>

34. Laquelle des étapes suivantes doit être suivie par un client lors de la réalisation de tests de pénétration sur AWS ?
    - A. Effectuer des tests de pénétration à l'aide d'Amazon Inspector, puis notifier le support AWS.
    - B. Demander et attendre l'approbation de l'équipe de sécurité interne du client, puis effectuer les tests.
    - C. Notifier le support AWS, puis effectuer les tests immédiatement.
    - D. Demander et attendre l'approbation du support AWS, puis effectuer les tests.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Demander et attendre l'approbation du support AWS, puis effectuer les tests** : Pour certains services, une autorisation préalable d'AWS est requise.
    - **Autres options incorrectes** ❌ :
      - **A. Effectuer des tests avec Amazon Inspector** : Inspector est un service d'évaluation de sécurité automatisé, pas un outil de test de pénétration manuel.
      - **B. Attendre l'approbation interne uniquement** : L'approbation d'AWS est également nécessaire.
      - **C. Notifier et tester immédiatement** : Il faut attendre l'approbation pour certains services.
    </details>

35. Quelle fonctionnalité AWS permet à un utilisateur de lancer une instance Amazon Elastic Compute Cloud (Amazon EC2) préconfigurée ?
    - A. Amazon Elastic Block Store (Amazon EBS)
    - B. Amazon Machine Image
    - C. Amazon EC2 Systems Manager
    - D. Amazon AppStream 2.0

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon Machine Image** : Modèle qui contient la configuration logicielle nécessaire pour lancer une instance.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Elastic Block Store (Amazon EBS)** : Stockage par blocs pour instances EC2.
      - **C. Amazon EC2 Systems Manager** : Service de gestion des ressources EC2.
      - **D. Amazon AppStream 2.0** : Service de streaming d'applications.
    </details>

36. Comment un client AWS pourrait-il facilement appliquer des contrôles d'accès communs à un grand ensemble d'utilisateurs ?
    - A. Appliquer une politique IAM à un groupe IAM.
    - B. Appliquer une politique IAM à un rôle IAM.
    - C. Appliquer la même politique IAM à tous les utilisateurs IAM ayant accès à la même charge de travail.
    - D. Appliquer une politique IAM à un groupe d'utilisateurs Amazon Cognito.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Appliquer une politique IAM à un groupe IAM** : Les groupes permettent de gérer efficacement les permissions pour plusieurs utilisateurs.
    - **Autres options incorrectes** ❌ :
      - **B. Appliquer une politique IAM à un rôle IAM** : Les rôles sont pour les services et la fédération, pas pour regrouper des utilisateurs.
      - **C. Appliquer la même politique à tous les utilisateurs** : Fastidieux et difficile à maintenir.
      - **D. Appliquer une politique à un groupe Cognito** : Cognito gère les utilisateurs d'applications, pas l'accès aux ressources AWS.
    </details>

37. Quel outil de gestion des coûts AWS vous permet de voir les données les plus granulaires sur votre facture AWS ?
    - A. AWS Cost Explorer
    - B. AWS Budgets
    - C. AWS Cost and Usage report
    - D. AWS Billing dashboard

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Cost and Usage report** : Fournit les données de coût et d'utilisation les plus détaillées.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Cost Explorer** : Outil de visualisation avec des données agrégées.
      - **B. AWS Budgets** : Définition de budgets et alertes.
      - **D. AWS Billing dashboard** : Vue d'ensemble de la facturation, pas de données granulaires.
    </details>

38. Lequel des éléments suivants un client AWS peut-il utiliser pour lancer un nouveau cluster Amazon Relational Database Service (Amazon RDS) ? (Sélectionnez DEUX.)
    - A. AWS Concierge
    - B. AWS CloudFormation
    - C. Amazon Simple Storage Service (Amazon S3)
    - D. Amazon EC2 Auto Scaling
    - E. AWS Management Console

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponses correctes : B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. AWS CloudFormation** : Infrastructure as code pour provisionner des ressources.
      - **E. AWS Management Console** : Interface web pour gérer les ressources AWS.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Concierge** : Service de support pour clients Enterprise, pas pour provisionner des ressources.
      - **C. Amazon Simple Storage Service (Amazon S3)** : Service de stockage, pas pour lancer des clusters RDS.
      - **D. Amazon EC2 Auto Scaling** : Pour ajuster le nombre d'instances EC2, pas pour lancer des clusters RDS.
    </details>

39. Lequel des éléments suivants est un principe de conception d'architecture cloud AWS ?
    - A. Mettre en œuvre des points de défaillance uniques.
    - B. Mettre en œuvre un couplage lâche.
    - C. Mettre en œuvre une conception monolithique.
    - D. Mettre en œuvre une mise à l'échelle verticale.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Mettre en œuvre un couplage lâche** : Réduit les interdépendances pour une meilleure résilience.
    - **Autres options incorrectes** ❌ :
      - **A. Mettre en œuvre des points de défaillance uniques** : Anti-modèle ; il faut éviter les SPOF.
      - **C. Mettre en œuvre une conception monolithique** : Les architectures modulaires et microservices sont préférées.
      - **D. Mettre en œuvre une mise à l'échelle verticale** : La mise à l'échelle horizontale est généralement préférée dans le cloud.
    </details>

40. Quelles mesures de sécurité protègent l'accès à un compte AWS ? (Sélectionnez DEUX.)
    - A. Activer AWS CloudTrail.
    - B. Accorder un accès au moindre privilège aux utilisateurs IAM.
    - C. Créer un seul utilisateur IAM et le partager avec de nombreux développeurs et utilisateurs.
    - D. Activer Amazon CloudFront.
    - E. Activer l'authentification multi-facteurs (MFA) pour les utilisateurs privilégiés.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponses correctes : B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Accorder un accès au moindre privilège aux utilisateurs IAM** : Limite les permissions au strict nécessaire.
      - **E. Activer l'authentification multi-facteurs (MFA) pour les utilisateurs privilégiés** : Ajoute une couche de sécurité supplémentaire.
    - **Autres options incorrectes** ❌ :
      - **A. Activer AWS CloudTrail** : Journalisation des API, important pour l'audit mais ne protège pas directement l'accès.
      - **C. Créer un seul utilisateur IAM et le partager** : Mauvaise pratique ; chaque utilisateur doit avoir son propre compte.
      - **D. Activer Amazon CloudFront** : CDN pour la diffusion de contenu, pas pour la sécurité de l'accès au compte.
    </details>

41. Quel service fournit un service de stockage hybride qui permet aux applications sur site d'utiliser de manière transparente le stockage cloud ?
    - A. Amazon Glacier
    - B. AWS Snowball
    - C. AWS Storage Gateway
    - D. Amazon Elastic Block Storage (Amazon EBS)

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Storage Gateway** : Connecte les environnements sur site au stockage cloud AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Glacier** : Service d'archivage cloud uniquement.
      - **B. AWS Snowball** : Appareil de transfert de données physique.
      - **D. Amazon Elastic Block Storage (Amazon EBS)** : Stockage par blocs pour instances EC2 uniquement.
    </details>

42. Lequel des services suivants relève de la responsabilité du client pour maintenir la configuration du système d'exploitation, les correctifs de sécurité et la mise en réseau ?
    - A. Amazon RDS
    - B. Amazon EC2
    - C. Amazon ElastiCache
    - D. AWS Fargate

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon EC2** : Service IaaS où le client est responsable du système d'exploitation invité.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon RDS** : Service de base de données managé, AWS gère le système d'exploitation et les correctifs.
      - **C. Amazon ElastiCache** : Service de cache managé.
      - **D. AWS Fargate** : Moteur de calcul serverless pour conteneurs, AWS gère l'infrastructure.
    </details>

43. Lequel des éléments suivants est un principe de conception architecturale important lors de la conception d'applications cloud ?
    - A. Utiliser plusieurs zones de disponibilité.
    - B. Utiliser des composants étroitement couplés.
    - C. Utiliser des logiciels open source.
    - D. Provisionner une capacité supplémentaire.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Utiliser plusieurs zones de disponibilité** : Améliore la disponibilité et la tolérance aux pannes.
    - **Autres options incorrectes** ❌ :
      - **B. Utiliser des composants étroitement couplés** : Le couplage lâche est recommandé.
      - **C. Utiliser des logiciels open source** : Choix d'implémentation, pas un principe de conception architecturale.
      - **D. Provisionner une capacité supplémentaire** : L'élasticité est préférable au surprovisionnement.
    </details>

44. Quel plan de support AWS inclut un Technical Account Manager dédié ?
    - A. Developer
    - B. Enterprise
    - C. Business
    - D. Basic

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Enterprise** : Seul le plan Enterprise Support inclut un TAM dédié.
    - **Autres options incorrectes** ❌ :
      - **A. Developer** : Pas de TAM.
      - **C. Business** : Pas de TAM dédié.
      - **D. Basic** : Pas de support technique.
    </details>

45. Amazon Relational Database Service (Amazon RDS) offre lequel des avantages suivants par rapport à la gestion de base de données traditionnelle ?
    - A. AWS gère les données stockées dans les tables Amazon RDS.
    - B. AWS gère la maintenance du système d'exploitation.
    - C. AWS met automatiquement à l'échelle les types d'instances à la demande.
    - D. AWS gère le type de base de données.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS gère la maintenance du système d'exploitation** : RDS est un service managé où AWS applique les correctifs du système d'exploitation sous-jacent.
    - **Autres options incorrectes** ❌ :
      - **A. AWS gère les données** : Le client est responsable de ses données.
      - **C. AWS met automatiquement à l'échelle les types d'instances** : Le client doit modifier manuellement le type d'instance.
      - **D. AWS gère le type de base de données** : Le client choisit le moteur de base de données (MySQL, PostgreSQL, etc.).
    </details>

46. Quel service est le meilleur pour stocker les résultats de requêtes de base de données courantes, ce qui aide à réduire la charge d'accès à la base de données ?
    - A. Amazon Machine Learning
    - B. Amazon SQS
    - C. Amazon ElastiCache
    - D. Amazon EC2 Instance Store

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon ElastiCache** : Service de cache en mémoire pour les résultats de requêtes fréquentes.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Machine Learning** : Service de machine learning.
      - **B. Amazon SQS** : File d'attente de messages.
      - **D. Amazon EC2 Instance Store** : Stockage temporaire d'instance.
    </details>

47. Lequel des éléments suivants est un composant du modèle de responsabilité partagée géré entièrement par AWS ?
    - A. Application des correctifs du logiciel du système d'exploitation
    - B. Chiffrement des données
    - C. Application de l'authentification multi-facteurs
    - D. Audit des actifs physiques du centre de données

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Audit des actifs physiques du centre de données** : AWS est entièrement responsable de l'infrastructure physique.
    - **Autres options incorrectes** ❌ :
      - **A. Application des correctifs du système d'exploitation** : Partagé (client pour EC2, AWS pour les services managés).
      - **B. Chiffrement des données** : Partagé (AWS fournit des outils, le client les active).
      - **C. Application de l'authentification multi-facteurs** : Responsabilité du client pour ses utilisateurs IAM.
    </details>

48. Quelles options AWS met à disposition pour les clients qui souhaitent se former à la sécurité dans le cloud dans un cadre dirigé par un instructeur ? (Sélectionnez DEUX.)
    - A. AWS Trusted Advisor
    - B. AWS Online Tech Talks
    - C. AWS Blog
    - D. AWS Forums
    - E. AWS Classroom Training

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponses correctes : B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. AWS Online Tech Talks** : Sessions en ligne dirigées par des experts.
      - **E. AWS Classroom Training** : Formation en classe avec instructeur.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Trusted Advisor** : Outil de recommandations, pas de formation.
      - **C. AWS Blog** : Articles en ligne, pas de formation dirigée.
      - **D. AWS Forums** : Forums de discussion communautaires.
    </details>

49. Parmi les fonctionnalités suivantes, lesquelles peuvent être configurées via le tableau de bord Amazon Virtual Private Cloud (Amazon VPC) ? (Sélectionnez DEUX.)
    - A. Distributions Amazon CloudFront
    - B. Amazon Route 53
    - C. Groupes de sécurité
    - D. Sous-réseaux
    - E. Elastic Load Balancing

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponses correctes : C, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Groupes de sécurité** : Firewall au niveau de l'instance, configurable dans VPC.
      - **D. Sous-réseaux** : Division d'un VPC, configurable dans VPC.
    - **Autres options incorrectes** ❌ :
      - **A. Distributions Amazon CloudFront** : Configuré via le service CloudFront.
      - **B. Amazon Route 53** : Service DNS séparé.
      - **E. Elastic Load Balancing** : Configuré via le service ELB.
    </details>

50. Si chaque service d'une entreprise possède son propre compte AWS, quelle est une façon d'activer la facturation consolidée ?
    - A. Utiliser AWS Budgets sur chaque compte pour ne payer que selon le budget.
    - B. Contacter le support AWS pour une facture mensuelle.
    - C. Créer une organisation AWS à partir du compte payeur et inviter les autres comptes à rejoindre.
    - D. Mettre toutes les factures dans un bucket Amazon Simple Storage Service (Amazon S3), charger les données dans Amazon Redshift, puis exécuter un rapport de facturation.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Créer une organisation AWS à partir du compte payeur et inviter les autres comptes à rejoindre** : AWS Organizations permet de gérer plusieurs comptes avec facturation consolidée.
    - **Autres options incorrectes** ❌ :
      - **A. Utiliser AWS Budgets** : Pour la gestion des budgets, pas la facturation consolidée.
      - **B. Contacter le support AWS** : La facturation consolidée se configure via AWS Organizations, pas via le support.
      - **D. Mettre les factures dans S3 et analyser avec Redshift** : Approche manuelle complexe, pas la méthode recommandée.
    </details>