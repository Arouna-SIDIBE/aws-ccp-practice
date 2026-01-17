---
layout: exam
---

# Examen de pratique 8

1. Quel est le principal avantage d'attacher des groupes de sécurité à une instance Amazon RDS ?
    - A. Gère l'accès des utilisateurs et les clés de chiffrement.
    - B. Contrôle les plages d'adresses IP qui peuvent se connecter à votre instance de base de données.
    - C. Déploie des certificats SSL/TLS à utiliser avec votre instance de base de données.
    - D. Répartit le trafic entrant sur plusieurs cibles.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Contrôle les plages d'adresses IP qui peuvent se connecter à votre instance de base de données** : Les groupes de sécurité agissent comme un pare-feu virtuel pour contrôler le trafic entrant et sortant de votre instance RDS.
    - **Autres options incorrectes** ❌ :
      - **A. Gère l'accès des utilisateurs et les clés de chiffrement** : C'est le rôle d'IAM et d'AWS KMS.
      - **C. Déploie des certificats SSL/TLS** : RDS prend en charge SSL/TLS, mais les groupes de sécurité ne gèrent pas les certificats.
      - **D. Répartit le trafic entrant sur plusieurs cibles** : C'est le rôle d'un équilibreur de charge (ELB).
    </details>

2. Une entreprise souhaite utiliser Amazon Elastic Container Service (Amazon ECS) pour exécuter ses applications conteneurisées. Pour des raisons de conformité, l'entreprise souhaite conserver une visibilité et un contrôle complets sur le cluster de serveurs sous-jacent. Quel type de lancement Amazon ECS satisfera ces exigences ?
    - A. Type de lancement EC2.
    - B. Type de lancement Fargate.
    - C. Type de lancement Lightsail.
    - D. Type de lancement Lambda.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Type de lancement EC2** : Avec le type de lancement EC2, vous gérez votre propre cluster d'instances EC2, offrant un contrôle complet sur le système d'exploitation, les configurations réseau et la maintenance.
    - **Autres options incorrectes** ❌ :
      - **B. Type de lancement Fargate** : Fargate est serverless - AWS gère l'infrastructure sous-jacente, donc moins de contrôle.
      - **C. Type de lancement Lightsail** : Lightsail est un service de cloud simple avec des plans prédéfinis, pas un type de lancement ECS.
      - **D. Type de lancement Lambda** : Lambda est un service de calcul serverless, pas un type de lancement ECS.
    </details>

3. Vous disposez de plusieurs comptes AWS autonomes et vous souhaitez réduire vos charges mensuelles AWS. Que devriez-vous faire ?
    - A. Essayez de supprimer les comptes AWS inutiles.
    - B. Ajoutez les comptes à une organisation AWS et utilisez la facturation consolidée.
    - C. Suivez les frais AWS encourus par les comptes membres.
    - D. Activez la tarification à paliers AWS avant de provisionner des ressources.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Ajoutez les comptes à une organisation AWS et utilisez la facturation consolidée** : La facturation consolidée permet de regrouper l'utilisation de tous les comptes, ce qui peut permettre de bénéficier de remises volume et de partager les avantages des instances réservées.
    - **Autres options incorrectes** ❌ :
      - **A. Essayez de supprimer les comptes AWS inutiles** : Cela pourrait résoudre le problème, mais n'est pas la meilleure pratique pour gérer plusieurs comptes légitimes.
      - **C. Suivez les frais AWS encourus par les comptes membres** : Le suivi des coûts est important, mais ne réduit pas directement les coûts.
      - **D. Activez la tarification à paliers AWS** : AWS utilise déjà une tarification à paliers (plus vous utilisez, moins vous payez par unité). La facturation consolidée permet d'atteindre ces paliers plus rapidement.
    </details>

4. Vous avez été chargé d'auditer la sécurité de votre VPC. Dans le cadre de ce processus, vous devez commencer par analyser le trafic entrant et sortant autorisé sur vos instances EC2. Quelles sont les deux parties du VPC que vous devez vérifier pour accomplir cette tâche ?
    - A. NACL et Traffic Manager.
    - B. NACL et sous-réseaux.
    - C. Groupes de sécurité et passerelles Internet.
    - D. Groupes de sécurité et NACL.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Groupes de sécurité et NACL** : Les groupes de sécurité agissent au niveau de l'instance (couche 4), tandis que les NACL (Network Access Control Lists) agissent au niveau du sous-réseau (couche 4 également). Les deux contrôlent le trafic réseau.
    - **Autres options incorrectes** ❌ :
      - **A. NACL et Traffic Manager** : AWS Traffic Manager n'existe pas. Peut-être une confusion avec Route 53 Traffic Flow.
      - **B. NACL et sous-réseaux** : Les sous-réseaux sont des divisions logiques du VPC, mais ne sont pas des mécanismes de contrôle de trafic.
      - **C. Groupes de sécurité et passerelles Internet** : Les passerelles Internet permettent la connectivité Internet, mais ne contrôlent pas le trafic de manière granulaire.
    </details>

5. Que fournit le plan de support AWS "Business" ? (Choisissez DEUX)
    - A. Accès à l'ensemble complet des vérifications de Trusted Advisor.
    - B. Service de conciergerie de support (Support Concierge Service).
    - C. Temps de réponse de moins de 15 minutes si votre système critique pour l'entreprise tombe en panne.
    - D. API de support AWS.
    - E. Gestion technique proactive du compte (Proactive Technical Account Management).

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Accès à l'ensemble complet des vérifications de Trusted Advisor** : Le plan Business donne accès à toutes les vérifications de Trusted Advisor (plus de 50).
      - **D. API de support AWS** : Permet d'automatiser les interactions avec le support AWS.
    - **Autres options incorrectes** ❌ :
      - **B. Service de conciergerie de support** : Disponible uniquement avec le plan Enterprise.
      - **C. Temps de réponse de moins de 15 minutes** : Le plan Business offre un temps de réponse de moins d'une heure pour les cas critiques, pas 15 minutes (c'est le plan Enterprise).
      - **E. Gestion technique proactive du compte** : Disponible uniquement avec le plan Enterprise (via le Technical Account Manager).
    </details>

6. Vous venez de terminer d'écrire le code de votre application. Quel service peut être utilisé pour automatiser le déploiement et la mise à l'échelle de votre application ?
    - A. Amazon Simple Storage Service.
    - B. AWS Elastic Beanstalk.
    - C. AWS CodeCommit.
    - D. Amazon Elastic File System.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Elastic Beanstalk** : Service PaaS (Platform as a Service) qui automatise le déploiement, la mise à l'échelle et la gestion des applications.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Simple Storage Service** : Service de stockage d'objets, pas de déploiement d'applications.
      - **C. AWS CodeCommit** : Service de contrôle de source, pas de déploiement.
      - **D. Amazon Elastic File System** : Service de stockage de fichiers, pas de déploiement d'applications.
    </details>

7. Quelle affirmation est vraie en relation avec la sécurité dans AWS ?
    - A. AWS gère tout ce qui concerne les systèmes d'exploitation EC2.
    - B. Les clients AWS sont responsables de l'application des correctifs de tout logiciel de base de données exécuté sur Amazon EC2.
    - C. Le chiffrement côté serveur est de la responsabilité d'AWS.
    - D. AWS est responsable de la sécurité de votre application.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Les clients AWS sont responsables de l'application des correctifs de tout logiciel de base de données exécuté sur Amazon EC2** : Selon le modèle de responsabilité partagée, pour EC2 (IaaS), le client est responsable du système d'exploitation invité, des applications et des correctifs associés.
    - **Autres options incorrectes** ❌ :
      - **A. AWS gère tout ce qui concerne les systèmes d'exploitation EC2** : Faux. Le client gère le système d'exploitation invité.
      - **C. Le chiffrement côté serveur est de la responsabilité d'AWS** : Cela dépend du service. Pour certains services managés, AWS fournit des options de chiffrement, mais le client doit les activer et gérer les clés.
      - **D. AWS est responsable de la sécurité de votre application** : Faux. Le client est responsable de la sécurité dans le cloud (applications, données, configurations).
    </details>

8. Les instances Amazon EC2 sont conceptuellement très similaires aux serveurs traditionnels. Cependant, utiliser des instances de serveur Amazon EC2 de la même manière que les instances de serveur matériel traditionnel n'est qu'un point de départ. Quels sont les principaux avantages d'utiliser les instances EC2 AWS au lieu des serveurs traditionnels ? (Choisissez DEUX)
    - A. Améliore la tolérance aux pannes.
    - B. Fournit à votre entreprise une accessibilité à distance transparente.
    - C. Empêche les utilisateurs non autorisés d'entrer dans votre réseau.
    - D. Fournit des sauvegardes automatiques des données.
    - E. Peut être mis à l'échelle manuellement en moins de temps.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Améliore la tolérance aux pannes** : AWS fournit des fonctionnalités comme les zones de disponibilité, Auto Scaling, etc., pour concevoir des architectures tolérantes aux pannes.
      - **E. Peut être mis à l'échelle manuellement en moins de temps** : Les instances EC2 peuvent être lancées ou terminées en quelques minutes, contrairement aux serveurs physiques qui prennent des jours ou des semaines.
    - **Autres options incorrectes** ❌ :
      - **B. Fournit à votre entreprise une accessibilité à distance transparente** : Les serveurs traditionnels peuvent également être accessibles à distance.
      - **C. Empêche les utilisateurs non autorisés d'entrer dans votre réseau** : La sécurité réseau est une responsabilité partagée ; AWS fournit des outils, mais le client doit les configurer.
      - **D. Fournit des sauvegardes automatiques des données** : Les sauvegardes automatiques ne sont pas fournies par défaut pour EC2 ; le client doit configurer des snapshots EBS ou utiliser d'autres services.
    </details>

9. Quelle affirmation est vraie concernant la tarification AWS ? (Choisissez DEUX)
    - A. Avec le modèle de tarification à l'usage d'AWS, vous n'avez pas à payer de frais initiaux.
    - B. Vous n'avez aucune responsabilité concernant les coûts de licence des logiciels tiers.
    - C. Vous ne payez que pour les services individuels dont vous avez besoin, sans contrat à long terme.
    - D. Pour certains services, vous devez payer des frais de démarrage pour que le service fonctionne.
    - E. Il n'y a pas de réservations sur AWS, vous payez uniquement ce que vous utilisez.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Avec le modèle de tarification à l'usage d'AWS, vous n'avez pas à payer de frais initiaux** : C'est vrai pour les instances à la demande.
      - **C. Vous ne payez que pour les services individuels dont vous avez besoin, sans contrat à long terme** : C'est le principe du paiement à l'usage.
    - **Autres options incorrectes** ❌ :
      - **B. Vous n'avez aucune responsabilité concernant les coûts de licence des logiciels tiers** : Faux. Pour les logiciels exécutés sur EC2, le client est responsable des licences (sauf pour les services managés où la licence est incluse).
      - **D. Pour certains services, vous devez payer des frais de démarrage** : Faux. Aucun service AWS ne nécessite de frais de démarrage.
      - **E. Il n'y a pas de réservations sur AWS** : Faux. AWS propose des instances réservées et des Savings Plans pour des engagements à long terme.
    </details>

10. Quel service AWS fournit le MOYEN le PLUS SIMPLE de configurer et de gérer un environnement AWS multi-comptes sécurisé et bien architecturé ?
    - A. AWS Control Tower.
    - B. Amazon Macie.
    - C. AWS Systems Manager Patch Manager.
    - D. AWS Security Hub.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Control Tower** : Service qui simplifie la configuration et la gouvernance d'un environnement AWS multi-comptes sécurisé et conforme.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Macie** : Service de sécurité qui utilise le machine learning pour découvrir et protéger les données sensibles.
      - **C. AWS Systems Manager Patch Manager** : Automatise l'application des correctifs sur les instances.
      - **D. AWS Security Hub** : Service de gestion de la sécurité qui agrège les alertes de sécurité.
    </details>

11. Une entreprise exécute une grande application web qui doit toujours être disponible. L'application a tendance à ralentir lorsque l'utilisation du CPU est supérieure à 60 %. Comment peuvent-ils suivre quand l'utilisation du CPU dépasse 60 % pour l'une des instances EC2 de leur compte ?
    - A. Utiliser CloudFront pour surveiller l'utilisation du CPU.
    - B. Définir le seuil de CPU d'AWS Config à 60 % pour recevoir une notification lorsque l'utilisation d'EC2 dépasse cette valeur.
    - C. Utiliser les alarmes CloudWatch pour surveiller le CPU et alerter lorsque l'utilisation du CPU est >= 60 %.
    - D. Utiliser SNS pour surveiller l'utilisation du serveur.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Utiliser les alarmes CloudWatch** : CloudWatch collecte les métriques (comme l'utilisation du CPU) et permet de définir des alarmes qui déclenchent des notifications lorsque des seuils sont dépassés.
    - **Autres options incorrectes** ❌ :
      - **A. Utiliser CloudFront pour surveiller l'utilisation du CPU** : CloudFront est un CDN, pas un service de surveillance.
      - **B. Définir le seuil de CPU d'AWS Config** : AWS Config évalue la configuration des ressources, pas les métriques de performance en temps réel.
      - **D. Utiliser SNS pour surveiller l'utilisation du serveur** : SNS est un service de notification, pas de surveillance. Il peut recevoir des notifications d'alarmes CloudWatch.
    </details>

12. Quelle est l'option de stockage recommandée lors de l'hébergement d'une base de données fréquemment modifiée sur une instance Amazon EC2 ?
    - A. Amazon EBS.
    - B. Amazon RDS.
    - C. Vous ne pouvez pas exécuter une base de données dans une instance Amazon EC2.
    - D. Amazon DynamoDB.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon EBS** : Les volumes EBS offrent un stockage par blocs persistant et performant, adapté aux bases de données transactionnelles.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon RDS** : C'est un service de base de données managé, mais la question demande spécifiquement une base de données sur une instance EC2.
      - **C. Vous ne pouvez pas exécuter une base de données dans une instance Amazon EC2** : Faux. Vous pouvez installer et exécuter n'importe quel logiciel sur EC2, y compris des bases de données.
      - **D. Amazon DynamoDB** : Base de données NoSQL managée, pas exécutée sur une instance EC2.
    </details>

13. Vous travaillez comme ingénieur de fiabilité de site (SRE) dans un environnement AWS. Lequel des services suivants vous aide à surveiller vos applications ?
    - A. Amazon CloudWatch.
    - B. Amazon CloudSearch.
    - C. Amazon Elastic MapReduce.
    - D. Amazon CloudHSM.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon CloudWatch** : Service de surveillance et d'observabilité pour les ressources et applications AWS.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon CloudSearch** : Service de recherche géré.
      - **C. Amazon Elastic MapReduce** : Service de big data pour le traitement de grands ensembles de données.
      - **D. Amazon CloudHSM** : Module de sécurité matériel pour le chiffrement.
    </details>

14. Quels facteurs déterminent comment vous êtes facturé lorsque vous utilisez AWS Lambda ? (Choisissez DEUX)
    - A. Stockage consommé.
    - B. Nombre de requêtes vers vos fonctions.
    - C. Nombre de volumes.
    - D. Groupes de placement.
    - E. Temps de calcul consommé.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Nombre de requêtes vers vos fonctions** : Vous payez pour le nombre total de requêtes (appels) à vos fonctions Lambda.
      - **E. Temps de calcul consommé** : Vous payez pour la durée d'exécution de votre code, facturée par milliseconde.
    - **Autres options incorrectes** ❌ :
      - **A. Stockage consommé** : Lambda n'a pas de coût de stockage pour le code (stocké dans S3 ou ECR), mais ce n'est pas un facteur de facturation principal.
      - **C. Nombre de volumes** : Non applicable à Lambda.
      - **D. Groupes de placement** : Non applicable à Lambda.
    </details>

15. Quelles sont les principales différences entre un utilisateur IAM et un rôle IAM dans AWS ? (Choisissez DEUX)
    - A. Un utilisateur IAM est associé de manière unique à une seule personne, tandis qu'un rôle est destiné à être assumé par toute personne qui en a besoin.
    - B. Un utilisateur IAM a des identifiants permanents associés, tandis qu'un rôle a des identifiants temporaires associés.
    - C. Les utilisateurs IAM sont plus rentables que les rôles IAM.
    - D. Un rôle est associé de manière unique à une seule personne, tandis qu'un utilisateur IAM est destiné à être assumé par toute personne qui en a besoin.
    - E. Un utilisateur IAM a des identifiants temporaires associés, tandis qu'un rôle a des identifiants permanents associés.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Un utilisateur IAM est associé de manière unique à une seule personne, tandis qu'un rôle est destiné à être assumé par toute personne qui en a besoin** : Les rôles peuvent être assumés par des utilisateurs, des services AWS ou des identités fédérées.
      - **B. Un utilisateur IAM a des identifiants permanents associés, tandis qu'un rôle a des identifiants temporaires associés** : Les utilisateurs IAM ont des clés d'accès longues ou des mots de passe, tandis que les rôles fournissent des jetons de sécurité temporaires.
    - **Autres options incorrectes** ❌ :
      - **C. Les utilisateurs IAM sont plus rentables que les rôles IAM** : Les deux sont gratuits, pas de différence de coût.
      - **D. Un rôle est associé de manière unique à une seule personne** : Faux. Les rôles ne sont pas associés à une personne spécifique.
      - **E. Un utilisateur IAM a des identifiants temporaires associés** : Faux. Les utilisateurs IAM ont des identifiants permanents (bien que les clés d'accès puissent être régulièrement).
    </details>

16. Lesquelles des actions suivantes peuvent réduire les coûts d'Amazon EBS ? (Choisissez DEUX)
    - A. Supprimer les compartiments inutilisés.
    - B. Utiliser des réservations.
    - C. Supprimer les snapshots inutiles.
    - D. Changer le type de volume.
    - E. Répartir les requêtes sur plusieurs volumes.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Supprimer les snapshots inutiles** : Les snapshots EBS sont facturés en fonction de l'espace utilisé, donc supprimer les anciens snapshots réduit les coûts.
      - **D. Changer le type de volume** : Passer à des types de volume moins chers (par exemple, de gp3 à st1 pour le stockage de débit) peut réduire les coûts.
    - **Autres options incorrectes** ❌ :
      - **A. Supprimer les compartiments inutilisés** : Les compartiments sont associés à S3, pas à EBS.
      - **B. Utiliser des réservations** : EBS ne propose pas de réservations de capacité. Les instances réservées s'appliquent à EC2, pas directement à EBS.
      - **E. Répartir les requêtes sur plusieurs volumes** : Cela pourrait améliorer les performances, mais n'économise pas nécessairement de l'argent.
    </details>

17. Que fait Amazon GuardDuty pour protéger les comptes et les charges de travail AWS ?
    - A. Notifie les clients AWS sur les événements d'abus une fois qu'ils sont signalés.
    - B. Surveille continuellement l'infrastructure AWS et aide à détecter les menaces telles que la reconnaissance d'attaquants ou la compromission de compte.
    - C. Aide les clients AWS à identifier la cause racine des problèmes de sécurité potentiels.
    - D. Vérifie les groupes de sécurité pour les règles qui autorisent un accès non restreint aux ressources AWS.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Surveille continuellement l'infrastructure AWS et aide à détecter les menaces** : GuardDuty est un service de détection des menaces intelligent qui utilise le machine learning pour identifier les activités malveillantes.
    - **Autres options incorrectes** ❌ :
      - **A. Notifie les clients AWS sur les événements d'abus** : C'est le rôle de l'équipe AWS Abuse.
      - **C. Aide les clients AWS à identifier la cause racine** : GuardDuty détecte les menaces, mais l'investigation approfondie peut nécessiter d'autres services comme Detective.
      - **D. Vérifie les groupes de sécurité pour les règles qui autorisent un accès non restreint** : C'est le rôle de Trusted Advisor ou d'outils de sécurité tiers.
    </details>

18. Quel service de base de données devez-vous utiliser si votre application et son schéma de données nécessitent des "jointures" (joins) ou des transactions complexes ?
    - A. Amazon RDS.
    - B. AWS Outposts.
    - C. Amazon DocumentDB.
    - D. Amazon DynamoDB.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon RDS** : Les bases de données relationnelles (comme celles prises en charge par RDS) sont conçues pour les requêtes complexes avec des jointures et les transactions ACID.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Outposts** : Service pour exécuter une infrastructure AWS sur site, pas un service de base de données.
      - **C. Amazon DocumentDB** : Base de données document compatible MongoDB, pas optimisée pour les jointures complexes.
      - **D. Amazon DynamoDB** : Base de données NoSQL clé-valeur, ne prend pas en charge les jointures ni les transactions complexes multi-éléments.
    </details>

19. Lequel des éléments suivants facilite la catégorisation, la gestion et le filtrage de vos ressources ?
    - A. Amazon CloudWatch.
    - B. AWS Service Catalog.
    - C. AWS Directory Service.
    - D. AWS Tagging.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Tagging** : Les balises (tags) sont des paires clé-valeur que vous pouvez attribuer aux ressources AWS pour les organiser, les suivre et les gérer.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon CloudWatch** : Service de surveillance.
      - **B. AWS Service Catalog** : Permet de créer et de gérer des catalogues de services informatiques approuvés.
      - **C. AWS Directory Service** : Service d'annuaire managé.
    </details>

20. Que devez-vous considérer lors du stockage de données dans Amazon Glacier ?
    - A. Amazon Glacier n'accepte que les données dans un format compressé.
    - B. Glacier ne peut être utilisé que pour stocker des données fréquemment consultées et des archives de données.
    - C. Amazon Glacier ne fournit pas de récupération immédiate des données.
    - D. Attacher Glacier à une instance EC2 pour pouvoir stocker des données.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon Glacier ne fournit pas de récupération immédiate des données** : Glacier est conçu pour l'archivage à long terme avec des délais de restauration allant de quelques minutes à plusieurs heures.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Glacier n'accepte que les données dans un format compressé** : Faux. Glacier accepte n'importe quel type de données, compressées ou non.
      - **B. Glacier ne peut être utilisé que pour stocker des données fréquemment consultées** : Faux. Glacier est pour les données rarement consultées.
      - **D. Attacher Glacier à une instance EC2** : Glacier est un service de stockage d'objets, pas un volume qui peut être attaché à une instance.
    </details>

21. Les ingénieurs perdent beaucoup de temps et d'efforts à gérer des logiciels de traitement par lots dans les centres de données traditionnels. Lequel des services AWS suivants leur permet d'exécuter facilement des milliers de travaux de traitement par lots ?
    - A. Amazon EC2.
    - B. AWS Batch.
    - C. Lambda@Edge.
    - D. AWS Fargate.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Batch** : Service entièrement managé qui exécute des travaux de traitement par lots à grande échelle, en provisionnant dynamiquement les ressources de calcul.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EC2** : Nécessite une gestion manuelle des clusters de calcul pour les travaux par lots.
      - **C. Lambda@Edge** : Exécute du code Lambda sur des emplacements périphériques CloudFront, pas pour le traitement par lots.
      - **D. AWS Fargate** : Moteur de calcul serverless pour les conteneurs, mais AWS Batch peut utiliser Fargate comme backend.
    </details>

22. Comment pouvez-vous augmenter la tolérance aux pannes de votre application lorsqu'elle est hébergée dans AWS ?
    - A. Déployez votre application sur plusieurs instances EC2.
    - B. Déployez votre application sur plusieurs zones de disponibilité.
    - C. Hébergez votre application sur un type d'instance EC2 puissant au lieu de plusieurs instances plus petites.
    - D. Déployez les ressources sous-jacentes de l'application sur plusieurs sous-réseaux.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Déployez votre application sur plusieurs zones de disponibilité** : Cela protège contre les défaillances d'une zone de disponibilité entière.
    - **Autres options incorrectes** ❌ :
      - **A. Déployez votre application sur plusieurs instances EC2** : Cela améliore l'évolutivité et la disponibilité, mais si toutes les instances sont dans la même zone de disponibilité, elles restent vulnérables à une défaillance de zone.
      - **C. Hébergez votre application sur un type d'instance EC2 puissant** : Cela crée un point de défaillance unique.
      - **D. Déployez les ressources sur plusieurs sous-réseaux** : Les sous-réseaux sont généralement dans la même zone de disponibilité, donc pas de tolérance aux pannes à l'échelle de la zone.
    </details>

23. Lequel des plans de support AWS suivants vous donne un accès 24h/24 et 7j/7 aux ingénieurs du support cloud par e-mail et téléphone ? (Choisissez DEUX)
    - A. Developer.
    - B. Premium.
    - C. Enterprise.
    - D. Standard.
    - E. Business.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Enterprise** : Accès 24/7 au support technique par téléphone, chat et e-mail.
      - **E. Business** : Accès 24/7 au support technique par téléphone, chat et e-mail.
    - **Autres options incorrectes** ❌ :
      - **A. Developer** : Accès par e-mail uniquement pendant les heures de bureau.
      - **B. Premium** : Il n'existe pas de plan "Premium". Les plans sont Basic, Developer, Business et Enterprise.
      - **D. Standard** : Il n'existe pas de plan "Standard". Les plans sont Basic, Developer, Business et Enterprise.
    </details>

24. Lesquels des éléments suivants nécessitent un ID de clé d'accès et une clé d'accès secrète pour obtenir un accès programmatique à long terme aux ressources AWS ? (Choisissez DEUX)
    - A. Groupe IAM.
    - B. Utilisateur IAM.
    - C. Rôle IAM.
    - D. Utilisateur racine du compte AWS.
    - E. TAM.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Utilisateur IAM** : Les utilisateurs IAM peuvent avoir des clés d'accès pour l'accès programmatique.
      - **D. Utilisateur racine du compte AWS** : L'utilisateur racine peut également générer des clés d'accès, bien que cela ne soit pas recommandé.
    - **Autres options incorrectes** ❌ :
      - **A. Groupe IAM** : Les groupes ne peuvent pas avoir d'identifiants.
      - **C. Rôle IAM** : Les rôles utilisent des jetons de sécurité temporaires, pas des clés d'accès à long terme.
      - **E. TAM** : Technical Account Manager est une personne, pas une identité AWS.
    </details>

25. Quel est l'avantage du principe d'architecture "Couplage lâche" (Loose Coupling) ?
    - A. Il élimine le besoin de gestion des changements.
    - B. Il permet la réplication inter-régions.
    - C. Il aide les clients AWS à réduire l'accès privilégié aux ressources AWS.
    - D. Il permet de modifier des composants ou services d'application individuels sans affecter d'autres composants.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Il permet de modifier des composants ou services d'application individuels sans affecter d'autres composants** : Le couplage lâche réduit les interdépendances, ce qui rend le système plus résilient et plus facile à maintenir.
    - **Autres options incorrectes** ❌ :
      - **A. Il élimine le besoin de gestion des changements** : Faux. La gestion des changements est toujours nécessaire.
      - **B. Il permet la réplication inter-régions** : La réplication inter-régions est une fonctionnalité spécifique, pas un avantage direct du couplage lâche.
      - **C. Il aide les clients AWS à réduire l'accès privilégié** : Le couplage lâche n'est pas directement lié à la gestion des accès.
    </details>

26. Une entreprise doit héberger une application de big data sur AWS en utilisant des instances EC2. Lequel des services de stockage AWS suivants choisirait-elle pour obtenir automatiquement un débit élevé vers plusieurs nœuds de calcul ?
    - A. Amazon Elastic Block Store.
    - B. AWS Storage Gateway.
    - C. Amazon Elastic File System.
    - D. S3.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon Elastic File System** : EFS est un service de stockage de fichiers élastique et partagé qui peut être monté simultanément sur des milliers d'instances EC2, offrant un débit élevé pour les applications de big data.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Elastic Block Store** : EBS est un stockage par blocs attaché à une seule instance, non partagé.
      - **B. AWS Storage Gateway** : Service de stockage hybrre qui connecte les environnements sur site au stockage cloud.
      - **D. S3** : Stockage d'objets, pas un système de fichiers partagé montable directement sur des instances EC2.
    </details>

27. Lequel des modèles de déploiement de cloud computing suivants élimine le besoin d'exécuter et de maintenir des centres de données physiques ?
    - A. Sur site (On-premises).
    - B. IaaS.
    - C. PaaS.
    - D. Cloud.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Cloud** : Le cloud computing en général élimine la nécessité de gérer une infrastructure physique.
    - **Autres options incorrectes** ❌ :
      - **A. Sur site** : C'est l'opposé, vous gérez vos propres centres de données.
      - **B. IaaS** : Un modèle de service cloud, mais le modèle de déploiement est le cloud.
      - **C. PaaS** : Un modèle de service cloud, mais le modèle de déploiement est le cloud.
    </details>

28. Quels sont les avantages du service AWS Marketplace ? (Choisissez DEUX)
    - A. Protège les clients en effectuant des contrôles de sécurité périodiques sur les produits listés.
    - B. Facturation à la seconde.
    - C. Fournit des options moins chères pour l'achat d'instances EC2 à la demande.
    - D. Fournit des options de tarification flexibles qui conviennent à la plupart des besoins des clients.
    - E. Fournit des solutions logicielles qui s'exécutent sur AWS ou tout autre fournisseur de cloud.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **D. Fournit des options de tarification flexibles** : AWS Marketplace propose diverses options de tarification (à l'usage, forfaitaires, etc.).
      - **E. Fournit des solutions logicielles qui s'exécutent sur AWS ou tout autre fournisseur de cloud** : Les solutions du Marketplace sont conçues pour s'exécuter sur AWS, mais certaines peuvent également être déployées ailleurs.
    - **Autres options incorrectes** ❌ :
      - **A. Protège les clients en effectuant des contrôles de sécurité périodiques** : AWS Marketplace ne garantit pas la sécurité des produits tiers.
      - **B. Facturation à la seconde** : La facturation à la seconde est une caractéristique de certains services AWS (comme EC2), pas spécifique au Marketplace.
      - **C. Fournit des options moins chères pour l'achat d'instances EC2 à la demande** : Les instances EC2 achetées via le Marketplace peuvent inclure des frais de licence logicielle, pas nécessairement moins chers.
    </details>

29. Quel est l'avantage des volumes Amazon EBS étant automatiquement répliqués dans la même zone de disponibilité ?
    - A. Élasticité.
    - B. Durabilité.
    - C. Traçabilité.
    - D. Accessibilité.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Durabilité** : La réplication dans la même zone de disponibilité protège contre les défaillances de composants matériels, offrant une durabilité élevée (99,999 %).
    - **Autres options incorrectes** ❌ :
      - **A. Élasticité** : L'élasticité fait référence à la capacité de mise à l'échelle, pas à la réplication.
      - **C. Traçabilité** : La traçabilité fait référence à la capacité de suivre les événements, pas à la réplication.
      - **D. Accessibilité** : L'accessibilité fait référence à la disponibilité, mais la réplication dans la même AZ ne protège pas contre une défaillance de la zone entière.
    </details>

30. Vous prévoyez de lancer une campagne publicitaire au cours du week-end à venir pour promouvoir un nouveau produit numérique. Il est prévu qu'il y aura des pics de charge importants pendant la période de campagne, et vous ne pouvez vous permettre aucun temps d'arrêt. Vous avez besoin de ressources de calcul supplémentaires pour gérer la charge supplémentaire. Quelle est l'option d'achat d'instance EC2 la plus rentable pour ce travail ?
    - A. Savings Plans.
    - B. Instances Spot.
    - C. Instances réservées.
    - D. Instances à la demande.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Instances à la demande** : Pour une charge de travail courte (un week-end) et imprévisible, les instances à la demande sont les plus appropriées car elles ne nécessitent aucun engagement et peuvent être lancées et terminées à tout moment.
    - **Autres options incorrectes** ❌ :
      - **A. Savings Plans** : Engagement à long terme (1 ou 3 ans), pas adapté pour un week-end.
      - **B. Instances Spot** : Peuvent être interrompues, ce qui n'est pas acceptable pour une campagne critique sans temps d'arrêt.
      - **C. Instances réservées** : Engagement à long terme, pas adapté pour un week-end.
    </details>

31. Lequel des services AWS suivants s'intègre avec AWS Shield et AWS Web Application Firewall (AWS WAF) pour protéger contre les attaques DDoS au niveau réseau et application ?
    - A. Amazon EFS.
    - B. AWS Secrets Manager.
    - C. AWS Systems Manager.
    - D. Amazon CloudFront.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon CloudFront** : CloudFront s'intègre avec AWS Shield Standard (protection DDoS) et AWS WAF pour protéger les applications web.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EFS** : Service de stockage de fichiers.
      - **B. AWS Secrets Manager** : Service de gestion des secrets.
      - **C. AWS Systems Manager** : Service de gestion des ressources.
    </details>

32. Lequel des services suivants est utilisé lors du chiffrement des volumes EBS ?
    - A. AWS WAF.
    - B. AWS KMS.
    - C. Amazon Macie.
    - D. Amazon GuardDuty.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS KMS** : AWS Key Management Service gère les clés de chiffrement utilisées pour chiffrer les volumes EBS.
    - **Autres options incorrectes** ❌ :
      - **A. AWS WAF** : Pare-feu d'application web.
      - **C. Amazon Macie** : Service de découverte et de protection des données sensibles.
      - **D. Amazon GuardDuty** : Service de détection des menaces.
    </details>

33. L'administrateur du compte AWS de votre entreprise a été licencié. Avec les permissions qui lui étaient accordées en tant qu'administrateur, il a pu créer plusieurs comptes d'utilisateurs IAM et des clés d'accès. De plus, vous n'êtes pas sûr qu'il ait accès au compte racine AWS ou non. Que devez-vous faire immédiatement pour protéger votre infrastructure AWS ? (Choisissez DEUX)
    - A. Télécharger toutes les politiques attachées dans un endroit sûr.
    - B. Supprimer tous les comptes IAM et les recréer.
    - C. Utiliser le service CloudWatch pour vérifier tous les appels d'API qui ont été effectués dans votre compte depuis le licenciement de l'administrateur.
    - D. Faire tourner (rotater) toutes les clés d'accès.
    - E. Changer l'adresse e-mail et le mot de passe de l'utilisateur racine et activer l'authentification multi-facteurs (MFA).

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **D. Faire tourner toutes les clés d'accès** : Cela invalide les anciennes clés d'accès que l'administrateur aurait pu créer.
      - **E. Changer l'adresse e-mail et le mot de passe de l'utilisateur racine et activer MFA** : Protège le compte racine, qui a un accès complet à toutes les ressources.
    - **Autres options incorrectes** ❌ :
      - **A. Télécharger toutes les politiques attachées** : Cela ne protège pas contre un accès malveillant.
      - **B. Supprimer tous les comptes IAM et les recréer** : Cela interromprait les opérations légitimes. Il vaut mieux désactiver les comptes suspects et révoquer leurs autorisations.
      - **C. Utiliser CloudWatch pour vérifier tous les appels d'API** : CloudWatch ne journalise pas les appels d'API ; c'est le rôle de CloudTrail. De plus, c'est réactif, pas une mesure de protection immédiate.
    </details>

34. À quoi sert le service Amazon ElastiCache ? (Choisissez DEUX)
    - A. Fournir un service de stockage de données en mémoire.
    - B. Réduire les coûts de livraison en utilisant des emplacements périphériques.
    - C. Améliorer les performances des applications web.
    - D. Fournir un cache compatible Chef pour accélérer la réponse des applications.
    - E. Répartir les requêtes sur plusieurs instances.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Fournir un service de stockage de données en mémoire** : ElastiCache est un service de cache en mémoire compatible Redis ou Memcached.
      - **C. Améliorer les performances des applications web** : En mettant en cache les données fréquemment consultées, ElastiCache réduit la charge sur les bases de données et améliore les temps de réponse.
    - **Autres options incorrectes** ❌ :
      - **B. Réduire les coûts de livraison en utilisant des emplacements périphériques** : C'est le rôle de CloudFront.
      - **D. Fournir un cache compatible Chef** : Chef est un outil de gestion de configuration, pas un moteur de cache.
      - **E. Répartir les requêtes sur plusieurs instances** : C'est le rôle d'un équilibreur de charge.
    </details>

35. L'élasticité du cloud AWS permet aux clients d'économiser des coûts par rapport aux hébergeurs traditionnels. Que peuvent faire les clients AWS pour bénéficier de l'élasticité du cloud AWS ? (Choisissez DEUX)
    - A. Déployer vos ressources sur plusieurs zones de disponibilité.
    - B. Utiliser Amazon EC2 Auto Scaling.
    - C. Déployer vos ressources dans une autre région.
    - D. Utiliser Elastic Load Balancing.
    - E. Utiliser le calcul serverless (Serverless Computing) chaque fois que possible.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Utiliser Amazon EC2 Auto Scaling** : Ajuste automatiquement la capacité de calcul en fonction de la demande, optimisant les coûts.
      - **E. Utiliser le calcul serverless chaque fois que possible** : Les services serverless comme Lambda ne facturent que lorsque le code s'exécute, offrant une élasticité parfaite.
    - **Autres options incorrectes** ❌ :
      - **A. Déployer vos ressources sur plusieurs zones de disponibilité** : Améliore la disponibilité, pas directement l'élasticité.
      - **C. Déployer vos ressources dans une autre région** : Améliore la redondance géographique, pas l'élasticité.
      - **D. Utiliser Elastic Load Balancing** : Répartit la charge, mais ne provisionne pas automatiquement de nouvelles ressources.
    </details>

36. Quels sont certains des avantages de l'utilisation des instances EC2 à la demande ? (Choisissez DEUX)
    - A. Elles fournissent une capacité gratuite lorsque vous testez vos nouvelles applications.
    - B. Elles sont moins chères que toutes les autres options EC2.
    - C. Elles éliminent le besoin d'acheter une capacité de "filet de sécurité" pour gérer les pics de trafic périodiques.
    - D. Elles ne nécessitent que 1-2 jours pour la configuration.
    - E. Vous pouvez augmenter ou diminuer votre capacité de calcul en fonction des exigences de votre application.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Elles éliminent le besoin d'acheter une capacité de "filet de sécurité"** : Avec l'élasticité du cloud, vous pouvez provisionner des ressources à la demande sans surprovisionnement.
      - **E. Vous pouvez augmenter ou diminuer votre capacité de calcul** : C'est la définition de l'élasticité.
    - **Autres options incorrectes** ❌ :
      - **A. Elles fournissent une capacité gratuite** : L'offre gratuite d'AWS est limitée et n'est pas spécifique aux instances à la demande.
      - **B. Elles sont moins chères que toutes les autres options EC2** : Faux. Les instances réservées et Spot sont moins chères pour des cas d'utilisation spécifiques.
      - **D. Elles ne nécessitent que 1-2 jours pour la configuration** : Les instances EC2 peuvent être lancées en quelques minutes.
    </details>

37. Chaque région AWS est composée de plusieurs zones de disponibilité. Lequel des énoncés suivants décrit le mieux ce qu'est une zone de disponibilité ?
    - A. C'est un centre de données conçu pour être complètement isolé des autres centres de données de la même région.
    - B. C'est une collection de centres de données distribués dans plusieurs pays.
    - C. C'est un réseau logiquement isolé du cloud AWS.
    - D. C'est un emplacement distinct dans une région qui est isolé des défaillances dans d'autres zones de disponibilité.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. C'est un emplacement distinct dans une région qui est isolé des défaillances dans d'autres zones de disponibilité** : Les zones de disponibilité sont des centres de données distincts avec une alimentation, un refroidissement et un réseau indépendants.
    - **Autres options incorrectes** ❌ :
      - **A. C'est un centre de données conçu pour être complètement isolé** : Une zone de disponibilité peut contenir plusieurs centres de données.
      - **B. C'est une collection de centres de données distribués dans plusieurs pays** : Les zones de disponibilité sont à l'intérieur d'une région géographique.
      - **C. C'est un réseau logiquement isolé** : Cela décrirait plutôt un VPC.
    </details>

38. AWS fournit une capacité de reprise après sinistre en permettant aux clients de déployer une infrastructure dans plusieurs [...].
    - A. Régions.
    - B. Dispositifs de transport.
    - C. Plans de support.
    - D. Emplacements périphériques.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Régions** : Le déploiement multi-régions protège contre les sinistres à l'échelle d'une région.
    - **Autres options incorrectes** ❌ :
      - **B. Dispositifs de transport** : Non pertinent.
      - **C. Plans de support** : Les plans de support fournissent de l'assistance, pas de la reprise après sinistre.
      - **D. Emplacements périphériques** : Utilisés pour la mise en cache, pas pour l'exécution d'applications complètes.
    </details>

39. Une entreprise de services financiers décide de migrer une de ses applications vers AWS. L'application traite des données sensibles, telles que des informations de carte de crédit, et doit s'exécuter dans un environnement conforme PCI. Lequel des éléments suivants est de la responsabilité de l'entreprise lors de la construction d'un environnement conforme PCI dans AWS ? (Choisissez DEUX)
    - A. Démarrer immédiatement le processus de migration car tous les services AWS sont conformes PCI.
    - B. S'assurer que les services AWS sont configurés correctement pour répondre à toutes les normes PCI DSS.
    - C. Restreindre tout accès aux données des titulaires de carte et créer une politique qui aborde la sécurité de l'information pour tout le personnel.
    - D. Configurer l'infrastructure sous-jacente des services AWS pour répondre à toutes les exigences PCI DSS.
    - E. S'assurer que toutes les exigences de sécurité physique PCI DSS sont satisfaites.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. S'assurer que les services AWS sont configurés correctement** : Le client est responsable de la configuration sécurisée de ses ressources AWS.
      - **C. Restreindre tout accès aux données des titulaires de carte** : Le client est responsable de la protection des données et du contrôle d'accès.
    - **Autres options incorrectes** ❌ :
      - **A. Démarrer immédiatement le processus de migration** : La conformité nécessite une planification et une configuration appropriées.
      - **D. Configurer l'infrastructure sous-jacente** : C'est la responsabilité d'AWS (sécurité du cloud).
      - **E. S'assurer que toutes les exigences de sécurité physique PCI DSS sont satisfaites** : C'est la responsabilité d'AWS (centres de données physiques).
    </details>

40. Quelle est la quantité maximale de données pouvant être stockée dans S3 dans un seul compte AWS ?
    - A. 100 Pétaoctets.
    - B. Un stockage virtuellement illimité.
    - C. 5 Téraoctets.
    - D. 10 Exaoctets.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Un stockage virtuellement illimité** : S3 est conçu pour une évolutivité illimitée. Il n'y a pas de limite pratique à la quantité de données que vous pouvez stocker.
    - **Autres options incorrectes** ❌ :
      - **A. 100 Pétaoctets** : Faux, S3 peut stocker bien plus.
      - **C. 5 Téraoctets** : C'est la limite de taille d'un objet individuel, pas la capacité totale.
      - **D. 10 Exaoctets** : Spécifique à AWS Snowmobile pour le transfert de données, pas la capacité de stockage S3.
    </details>

41. Quel pilier du AWS Well-Architected Framework fournit des recommandations pour aider les clients à sélectionner les bonnes ressources de calcul en fonction des exigences de la charge de travail ?
    - A. Excellence opérationnelle.
    - B. Sécurité.
    - C. Efficacité des performances.
    - D. Fiabilité.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Efficacité des performances** : Ce pilier se concentre sur l'utilisation efficace des ressources de calcul pour répondre aux exigences et maintenir cette efficacité à mesure que la demande change.
    - **Autres options incorrectes** ❌ :
      - **A. Excellence opérationnelle** : Se concentre sur l'exécution et la surveillance des systèmes.
      - **B. Sécurité** : Se concentre sur la protection des informations et des systèmes.
      - **D. Fiabilité** : Se concentre sur la capacité d'un système à récupérer des défaillances.
    </details>

42. Quel service AWS distribue des données, des vidéos, des applications et des API aux utilisateurs mondiaux avec une faible latence et des vitesses de transfert élevées ?
    - A. Amazon Route 53.
    - B. Amazon Connect.
    - C. Amazon CloudFront.
    - D. Amazon EC2.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon CloudFront** : Réseau de diffusion de contenu (CDN) mondial d'AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Route 53** : Service DNS.
      - **B. Amazon Connect** : Service de centre de contact cloud.
      - **D. Amazon EC2** : Service de calcul.
    </details>

43. Laquelle des étapes suivantes doit être prise par un client lors de la réalisation de tests d'intrusion sur AWS ?
    - A. Effectuer des tests d'intrusion en utilisant Amazon Inspector, puis notifier le support AWS.
    - B. Demander et attendre l'approbation de l'équipe de sécurité interne du client, puis effectuer les tests.
    - C. Notifier le support AWS, puis effectuer les tests immédiatement.
    - D. Demander et attendre l'approbation du support AWS, puis effectuer les tests.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Demander et attendre l'approbation du support AWS, puis effectuer les tests** : AWS exige une autorisation préalable pour certains types de tests d'intrusion (comme les tests de charge). Pour les tests sur vos propres instances EC2, l'autorisation n'est plus requise, mais il est recommandé de consulter la politique d'utilisation acceptable. La réponse la plus sûre ici est D, car c'était la procédure historique et elle s'applique toujours à certains scénarios.
    - **Autres options incorrectes** ❌ :
      - **A. Effectuer des tests d'intrusion en utilisant Amazon Inspector** : Inspector est un service d'évaluation de sécurité automatisé, pas un outil de test d'intrusion.
      - **B. Demander l'approbation de l'équipe de sécurité interne** : Nécessaire en interne, mais AWS exige également une notification/approbation.
      - **C. Notifier le support AWS, puis effectuer les tests immédiatement** : Vous devez attendre l'approbation, pas seulement notifier.
    </details>

44. Quel outil de gestion des coûts AWS vous permet de visualiser les données les plus granulaires sur votre facture AWS ?
    - A. AWS Cost Explorer.
    - B. AWS Budgets.
    - C. AWS Cost and Usage report.
    - D. AWS Billing dashboard.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Cost and Usage report** : Fournit les données les plus détaillées sur les coûts et l'utilisation, avec des fichiers CSV pouvant être analysés dans des outils comme Amazon QuickSight.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Cost Explorer** : Interface de visualisation avec des graphiques et des tableaux, mais moins granulaire que le rapport Cost and Usage.
      - **B. AWS Budgets** : Pour définir des budgets et des alertes, pas pour visualiser des données détaillées.
      - **D. AWS Billing dashboard** : Vue d'ensemble des coûts, pas les données les plus granulaires.
    </details>

45. Quel élément de l'infrastructure mondiale AWS est constitué d'un ou plusieurs centres de données discrets, chacun avec une alimentation, une mise en réseau et une connectivité redondantes, et qui sont hébergés dans des installations séparées ?
    - A. Régions AWS.
    - B. Zones de disponibilité.
    - C. Emplacements périphériques.
    - D. Amazon CloudFront.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Zones de disponibilité** : Description exacte des zones de disponibilité.
    - **Autres options incorrectes** ❌ :
      - **A. Régions AWS** : Les régions sont des zones géographiques contenant plusieurs zones de disponibilité.
      - **C. Emplacements périphériques** : Points de présence utilisés par CloudFront, plus petits que des centres de données complets.
      - **D. Amazon CloudFront** : Service CDN, pas un élément d'infrastructure.
    </details>

46. Sur combien de zones de disponibilité les ressources de calcul doivent-elles être provisionnées pour atteindre une haute disponibilité ?
    - A. Un minimum d'une.
    - B. Un minimum de deux.
    - C. Un minimum de trois.
    - D. Un minimum de quatre ou plus.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Un minimum de deux** : Déployer sur au moins deux zones de disponibilité permet de protéger contre la défaillance d'une seule zone.
    - **Autres options incorrectes** ❌ :
      - **A. Un minimum d'une** : Pas de haute disponibilité en cas de défaillance de la zone.
      - **C. Un minimum de trois** : Bien que possible, deux zones suffisent pour la haute disponibilité de base.
      - **D. Un minimum de quatre ou plus** : Non nécessaire pour la haute disponibilité de base.
    </details>

47. Les multiples régions du cloud AWS sont un exemple de :
    - A. Agilité.
    - B. Infrastructure mondiale.
    - C. Élasticité.
    - D. Tarification à l'usage.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Infrastructure mondiale** : La présence d'AWS dans de nombreuses régions géographiques démontre son infrastructure mondiale.
    - **Autres options incorrectes** ❌ :
      - **A. Agilité** : Capacité à provisionner rapidement des ressources.
      - **C. Élasticité** : Capacité à mettre à l'échelle les ressources.
      - **D. Tarification à l'usage** : Modèle de facturation.
    </details>

48. Quel service AWS peut être utilisé pour lancer manuellement des instances en fonction des exigences de ressources ?
    - A. Amazon EBS.
    - B. Amazon S3.
    - C. Amazon EC2.
    - D. Amazon ECS.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon EC2** : Service de calcul qui permet de lancer des instances virtuelles serveurs.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EBS** : Service de stockage par blocs.
      - **B. Amazon S3** : Service de stockage d'objets.
      - **D. Amazon ECS** : Service de gestion de conteneurs.
    </details>

49. Quel est un modèle recommandé pour concevoir une architecture hautement disponible sur AWS ?
    - A. S'assurer que les composants ont une connectivité réseau à faible latence.
    - B. Exécuter suffisamment d'instances Amazon EC2 pour fonctionner à charge de pointe.
    - C. S'assurer que l'application est conçue pour accommoder la défaillance de n'importe quel composant.
    - D. Utiliser une application monolithique qui gère toutes les opérations.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. S'assurer que l'application est conçue pour accommoder la défaillance de n'importe quel composant** : C'est le principe de conception pour la haute disponibilité et la tolérance aux pannes.
    - **Autres options incorrectes** ❌ :
      - **A. S'assurer que les composants ont une connectivité réseau à faible latence** : Important pour les performances, pas spécifiquement pour la haute disponibilité.
      - **B. Exécuter suffisamment d'instances Amazon EC2 pour fonctionner à charge de pointe** : Cela peut être coûteux ; il vaut mieux utiliser l'élasticité.
      - **D. Utiliser une application monolithique** : Les architectures monolithiques sont moins résilientes que les architectures découplées.
    </details>

50. Quelles caractéristiques AWS rendent AWS rentable pour une charge de travail avec une demande utilisateur dynamique ? (Sélectionnez DEUX)
    - A. Haute disponibilité.
    - B. Modèle de sécurité partagée.
    - C. Élasticité.
    - D. Tarification à l'usage.
    - E. Fiabilité.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Élasticité** : Permet d'ajuster automatiquement les ressources en fonction de la demande.
      - **D. Tarification à l'usage** : Vous ne payez que pour les ressources que vous utilisez, évitant le surprovisionnement coûteux.
    - **Autres options incorrectes** ❌ :
      - **A. Haute disponibilité** : Important pour la continuité des activités, mais pas directement lié à la rentabilité pour les charges de travail dynamiques.
      - **B. Modèle de sécurité partagée** : Important pour la sécurité, pas pour la rentabilité.
      - **E. Fiabilité** : Important pour la continuité, pas directement lié à la rentabilité.
    </details>