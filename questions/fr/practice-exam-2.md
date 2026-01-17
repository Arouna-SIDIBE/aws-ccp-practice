---
layout: exam
---

# Examen de pratique 2

1. Une entreprise mondiale possédant un grand nombre de comptes AWS cherche un moyen de gérer centralement la facturation et les politiques de sécurité sur tous les comptes. Quel service AWS les aidera à atteindre ces objectifs ?
    - A. AWS Organizations.
    - B. AWS Trusted Advisor.
    - C. Groupes d'utilisateurs IAM.
    - D. AWS Config.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Organizations** : Ce service permet de gérer plusieurs comptes AWS dans une organisation centralisée, avec facturation consolidée, politiques de contrôle de service (SCP) pour la sécurité et automatisation de la création de comptes.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Trusted Advisor** : Fournit des recommandations pour optimiser coûts, performances, sécurité et fiabilité, mais ne gère pas la facturation ou les politiques entre plusieurs comptes.
      - **C. Groupes d'utilisateurs IAM** : Permettent de gérer les autorisations des utilisateurs à l'intérieur d'un seul compte, pas de gérer plusieurs comptes.
      - **D. AWS Config** : Service d'audit et d'évaluation de la configuration des ressources, pas de gestion de comptes multiples.
    </details>

2. Quel service fournit un stockage au niveau objet dans AWS ?
    - A. Amazon EBS.
    - B. Amazon Instance Store.
    - C. Amazon EFS.
    - D. Amazon S3.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon S3** : Amazon Simple Storage Service (S3) est un service de stockage d'objets offrant une évolutivité, une disponibilité et une durabilité élevées.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EBS** : Service de stockage par blocs pour les instances EC2.
      - **B. Amazon Instance Store** : Stockage temporaire par bloc attaché directement à l'instance EC2.
      - **C. Amazon EFS** : Service de stockage de fichiers (NFS) élastique et géré.
    </details>

3. Une entreprise craint de dépenser de l'argent pour des ressources de calcul sous-utilisées dans AWS. Quelle fonctionnalité AWS aidera à s'assurer que ses applications ajoutent/suppriment automatiquement la capacité de calcul EC2 pour correspondre étroitement à la demande requise ?
    - A. AWS Elastic Load Balancer.
    - B. AWS Budgets.
    - C. AWS Auto Scaling.
    - D. AWS Cost Explorer.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Auto Scaling** : Permet de surveiller vos applications et d'ajuster automatiquement la capacité pour maintenir des performances stables et prévisibles au coût le plus bas.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Elastic Load Balancer** : Répartit le trafic entrant sur plusieurs cibles, mais ne provisionne pas de nouvelles instances automatiquement.
      - **B. AWS Budgets** : Permet de définir des budgets personnalisés et de recevoir des alertes lorsque les coûts dépassent un seuil, mais ne gère pas la capacité de calcul.
      - **D. AWS Cost Explorer** : Outil de visualisation des coûts, pas d'ajustement automatique de capacité.
    </details>

4. Quelle classe de stockage S3 est la meilleure pour les données avec des modèles d'accès imprévisibles ?
    - A. Amazon S3 Intelligent-Tiering.
    - B. Amazon S3 Glacier Flexible Retrieval.
    - C. Amazon S3 Standard.
    - D. Amazon S3 Standard-Infrequent Access.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon S3 Intelligent-Tiering** : Déplace automatiquement les objets entre deux niveaux d'accès (fréquent et peu fréquent) en fonction des modèles d'accès, sans frais de récupération ni surcoût de surveillance.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon S3 Glacier Flexible Retrieval** : Service d'archivage pour données rarement consultées, avec des délais de restauration de quelques minutes à plusieurs heures.
      - **C. Amazon S3 Standard** : Pour les données fréquemment consultées, mais coûte plus cher si l'accès diminue.
      - **D. Amazon S3 Standard-Infrequent Access** : Pour les données peu fréquemment consultées, mais des frais de récupération s'appliquent.
    </details>

5. Quel est le service de base de données AWS qui vous permet de charger des données structurées au format clé-valeur ?
    - A. Amazon DynamoDB.
    - B. Amazon Aurora.
    - C. Amazon Redshift.
    - D. Amazon RDS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon DynamoDB** : Base de données NoSQL entièrement gérée prenant en charge les modèles de documents et de paires clé-valeur.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Aurora** : Base de données relationnelle compatible MySQL et PostgreSQL.
      - **C. Amazon Redshift** : Entrepôt de données (data warehouse) pour l'analyse.
      - **D. Amazon RDS** : Service de base de données relationnelle gérée prenant en charge plusieurs moteurs (MySQL, PostgreSQL, etc.).
    </details>

6. Laquelle des affirmations suivantes n'est PAS correcte concernant les instances Amazon EC2 à la demande (On-demand) ?
    - A. Vous devez payer des frais de démarrage lorsque vous lancez une nouvelle instance pour la première fois.
    - B. Les instances à la demande suivent le modèle de tarification à l'usage d'AWS.
    - C. Avec les instances à la demande, aucun engagement à long terme ni paiement anticipé n'est nécessaire.
    - D. Lorsque vous utilisez des instances Linux à la demande, vous êtes facturé à la seconde sur la base d'un tarif horaire.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ (celle qui est fausse) :
      - **A. Vous devez payer des frais de démarrage lorsque vous lancez une nouvelle instance pour la première fois** : Faux. Il n'y a pas de frais de démarrage pour les instances à la demande. Vous payez uniquement pour le temps de calcul utilisé.
    - **Autres options incorrectes** ❌ (celles qui sont vraies) :
      - **B. Les instances à la demande suivent le modèle de tarification à l'usage d'AWS** : Vrai.
      - **C. Avec les instances à la demande, aucun engagement à long terme ni paiement anticipé n'est nécessaire** : Vrai.
      - **D. Lorsque vous utilisez des instances Linux à la demande, vous êtes facturé à la seconde sur la base d'un tarif horaire** : Vrai (avec une durée minimale de 60 secondes).
    </details>

7. Une entreprise a récemment migré vers AWS. Lequel des services AWS suivants aidera à s'assurer qu'elle dispose des paramètres de sécurité appropriés ? (Choisissez DEUX)
    - A. AWS Trusted Advisor.
    - B. Amazon Inspector.
    - C. Amazon SNS.
    - D. Amazon CloudWatch.
    - E. Équipe de support Concierge.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS Trusted Advisor** : Fournit des recommandations de meilleures pratiques pour optimiser la sécurité, les coûts, les performances, etc.
      - **B. Amazon Inspector** : Évalue automatiquement les applications pour détecter les vulnérabilités de sécurité et les écarts par rapport aux meilleures pratiques.
    - **Autres options incorrectes** ❌ :
      - **C. Amazon SNS** : Service de notification et de messagerie, pas de sécurité.
      - **D. Amazon CloudWatch** : Service de surveillance des performances, pas de vérification de sécurité.
      - **E. Équipe de support Concierge** : Disponible uniquement pour le plan Enterprise Support, pour des questions de facturation et de compte, pas de configuration de sécurité.
    </details>

8. Quelle est la fonctionnalité AWS qui fournit un niveau de sécurité supplémentaire au-dessus du mécanisme d'authentification par défaut des noms d'utilisateur et mots de passe ?
    - A. Clés chiffrées.
    - B. Vérification par e-mail.
    - C. AWS KMS.
    - D. AWS MFA.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS MFA** : Multi-Factor Authentication ajoute une deuxième couche de sécurité en exigeant un code d'authentification unique à partir d'un dispositif physique ou virtuel.
    - **Autres options incorrectes** ❌ :
      - **A. Clés chiffrées** : Terme générique, pas un service AWS spécifique.
      - **B. Vérification par e-mail** : Méthode d'authentification possible, mais pas le service AWS dédié.
      - **C. AWS KMS** : Service de gestion des clés de chiffrement, pas d'authentification multi-facteurs.
    </details>

9. Une entreprise lance un nouveau produit auprès de ses clients et s'attend à un afflux de trafic vers son application web. Dans le cadre de son plan de support Enterprise, lequel des éléments suivants fournit à l'entreprise des conseils architecturaux et de mise à l'échelle ?
    - A. AWS Knowledge Center.
    - B. AWS Health Dashboard.
    - C. Infrastructure Event Management.
    - D. AWS Support Concierge Service.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Infrastructure Event Management** : Service inclus dans le plan Enterprise Support qui fournit une assistance proactive pour planifier et exécuter des événements critiques comme des lancements de produits.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Knowledge Center** : Base de connaissances contenant des articles et des questions fréquentes, mais pas de conseils personnalisés.
      - **B. AWS Health Dashboard** : Fournit des informations sur l'état des services AWS, pas de conseils architecturaux.
      - **D. AWS Support Concierge Service** : Assistance pour les questions de facturation et de compte, pas pour l'architecture.
    </details>

10. Vous travaillez comme DBA MySQL sur site. Le travail de configuration de la base de données, de sauvegarde, de mise à jour corrective et de reprise après sinistre peut être long et répétitif. Votre entreprise a décidé de migrer vers le cloud AWS. Lequel des éléments suivants peut aider à gagner du temps sur la maintenance de la base de données afin que vous puissiez vous concentrer sur l'architecture des données et les performances ?
    - A. Amazon RDS.
    - B. Amazon Redshift.
    - C. Amazon DynamoDB.
    - D. Amazon CloudWatch.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon RDS** : Service de base de données relationnelle gérée qui automatise les tâches administratives telles que la configuration matérielle, les correctifs, les sauvegardes et la récupération.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Redshift** : Entrepôt de données pour l'analyse, pas pour les bases de données transactionnelles MySQL.
      - **C. Amazon DynamoDB** : Base de données NoSQL, pas relationnelle comme MySQL.
      - **D. Amazon CloudWatch** : Service de surveillance, pas de gestion de base de données.
    </details>

11. Laquelle des affirmations suivantes est une meilleure pratique lors de la conception de solutions sur AWS ?
    - A. Investir massivement dans l'architecture de votre environnement, car il n'est pas facile de modifier votre conception ultérieurement.
    - B. Utiliser les réservations AWS pour réduire les coûts lors du test de votre environnement de production.
    - C. Automatiser autant que possible pour faciliter l'expérimentation architecturale.
    - D. Provisionner une grande capacité de calcul pour gérer tout pic de charge.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Automatiser autant que possible pour faciliter l'expérimentation architecturale** : L'automatisation est une meilleure pratique clé du cloud, permettant des déploiements rapides, reproductibles et évolutifs.
    - **Autres options incorrectes** ❌ :
      - **A. Investir massivement dans l'architecture...** : Contraire à la philosophie du cloud agile ; vous pouvez affiner votre architecture au fil du temps.
      - **B. Utiliser les réservations AWS pour réduire les coûts lors du test** : Les réservations sont pour les charges de travail stables et prévisibles, pas pour les environnements de test temporaires.
      - **D. Provisionner une grande capacité de calcul pour gérer tout pic** : Cela entraîne un gaspillage de ressources. Utilisez plutôt l'élasticité pour ajuster la capacité à la demande.
    </details>

12. Selon la politique d'utilisation acceptable d'AWS, laquelle des affirmations suivantes est vraie concernant les tests de pénétration des instances EC2 ?
    - A. Les tests de pénétration ne sont pas autorisés dans AWS.
    - B. Les tests de pénétration sont effectués automatiquement par AWS pour déterminer les vulnérabilités de votre infrastructure AWS.
    - C. Les tests de pénétration peuvent être effectués par le client sur ses propres instances sans autorisation préalable d'AWS.
    - D. Les clients AWS ne sont autorisés à effectuer des tests de pénétration que sur les services gérés par AWS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Les tests de pénétration peuvent être effectués par le client sur ses propres instances sans autorisation préalable d'AWS** : AWS autorise les tests de pénétration sur vos propres instances EC2, ainsi que sur d'autres services de votre propre infrastructure, sans approbation préalable (sous réserve de respecter les conditions d'utilisation).
    - **Autres options incorrectes** ❌ :
      - **A. Les tests de pénétration ne sont pas autorisés** : Faux, ils sont autorisés avec certaines limitations.
      - **B. Les tests de pénétration sont effectués automatiquement par AWS** : Non, AWS ne fait pas de tests de pénétration sur votre infrastructure. Vous êtes responsable de vos propres tests.
      - **D. Les clients AWS ne sont autorisés à effectuer des tests de pénétration que sur les services gérés par AWS** : Faux, vous pouvez tester vos propres instances EC2 et autres ressources.
    </details>

13. Quel service est utilisé pour s'assurer que les messages entre les composants logiciels ne sont pas perdus si un ou plusieurs composants échouent ?
    - A. Amazon SQS.
    - B. Amazon SES.
    - C. AWS Direct Connect.
    - D. Amazon Connect.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon SQS** : Service de file d'attente de messages entièrement géré qui permet de découpler et de mettre à l'échelle les microservices, les systèmes distribués et les applications sans serveur. Les messages sont conservés jusqu'à ce qu'ils soient traités.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon SES** : Service de courrier électronique transactionnel.
      - **C. AWS Direct Connect** : Service de connexion réseau dédiée entre votre datacenter et AWS.
      - **D. Amazon Connect** : Service de centre de contact cloud.
    </details>

14. Le principe "concevoir pour l'échec et rien n'échouera" est très important lors de la conception de votre architecture cloud AWS. Lequel des éléments suivants aiderait à respecter ce principe ? (Choisissez DEUX)
    - A. Authentification multi-facteurs.
    - B. Zones de disponibilité.
    - C. Équilibrage de charge élastique.
    - D. Tests de pénétration.
    - E. Mise à l'échelle verticale.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Zones de disponibilité** : Utiliser plusieurs zones de disponibilité permet de concevoir des applications tolérantes aux pannes en répartissant les ressources sur des emplacements physiques distincts.
      - **C. Équilibrage de charge élastique** : Répartit le trafic sur plusieurs instances saines et peut détecter les instances défaillantes.
    - **Autres options incorrectes** ❌ :
      - **A. Authentification multi-facteurs** : Améliore la sécurité, mais ne contribue pas directement à la tolérance aux pannes.
      - **D. Tests de pénétration** : Évalue la sécurité, pas la tolérance aux pannes.
      - **E. Mise à l'échelle verticale** : Augmente la taille d'une instance, mais ne protège pas contre les défaillances.
    </details>

15. Quel est le service AWS qui fournit un réseau virtuel dédié à votre compte AWS ?
    - A. AWS VPN.
    - B. Sous-réseaux AWS.
    - C. Hôtes dédiés AWS.
    - D. Amazon VPC.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon VPC** : Amazon Virtual Private Cloud vous permet de provisionner une section isolée du cloud AWS où vous pouvez lancer des ressources AWS dans un réseau virtuel que vous définissez.
    - **Autres options incorrectes** ❌ :
      - **A. AWS VPN** : Connexion sécurisée entre votre réseau et un VPC, mais pas le service de réseau virtuel lui-même.
      - **B. Sous-réseaux AWS** : Composant d'un VPC, pas le service complet.
      - **C. Hôtes dédiés AWS** : Serveurs physiques dédiés à votre usage, mais pas un réseau virtuel.
    </details>

16. Selon le modèle de responsabilité partagée d'AWS, lesquels des éléments suivants sont de la responsabilité du client ? (Choisissez DEUX)
    - A. Gérer les événements environnementaux des centres de données AWS.
    - B. Protéger la confidentialité des données en transit dans Amazon S3.
    - C. Contrôler l'accès physique aux régions AWS.
    - D. S'assurer que l'hôte EC2 sous-jacent est correctement configuré.
    - E. Appliquer des correctifs aux applications installées sur Amazon EC2.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Protéger la confidentialité des données en transit dans Amazon S3** : Le client est responsable du chiffrement des données en transit (par exemple, en utilisant HTTPS).
      - **E. Appliquer des correctifs aux applications installées sur Amazon EC2** : Le client est responsable de la gestion du système d'exploitation invité et des applications.
    - **Autres options incorrectes** ❌ :
      - **A. Gérer les événements environnementaux des centres de données AWS** : Responsabilité d'AWS.
      - **C. Contrôler l'accès physique aux régions AWS** : Responsabilité d'AWS.
      - **D. S'assurer que l'hôte EC2 sous-jacent est correctement configuré** : Responsabilité d'AWS (infrastructure sous-jacente).
    </details>

17. Lequel des services AWS suivants peut être utilisé comme ressource de calcul ? (Choisissez DEUX)
    - A. Amazon VPC.
    - B. Amazon CloudWatch.
    - C. Amazon S3.
    - D. Amazon EC2.
    - E. AWS Lambda.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **D. Amazon EC2** : Service de calcul élastique qui fournit des instances virtuelles serveurs.
      - **E. AWS Lambda** : Service de calcul sans serveur qui exécute du code en réponse à des événements.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon VPC** : Service de réseau virtuel, pas de calcul.
      - **B. Amazon CloudWatch** : Service de surveillance, pas de calcul.
      - **C. Amazon S3** : Service de stockage d'objets, pas de calcul.
    </details>

18. Votre entreprise conçoit une nouvelle application qui stockera et récupérera des photos et des vidéos. Lequel des services suivants recommanderiez-vous comme mécanisme de stockage sous-jacent ?
    - A. Amazon EBS.
    - B. Amazon SQS.
    - C. Amazon S3.
    - D. Stockage d'instance Amazon.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon S3** : Idéal pour stocker et récupérer des objets multimédias (photos, vidéos) à grande échelle, avec une durabilité et une disponibilité élevées.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EBS** : Stockage par blocs pour les instances EC2, pas adapté au stockage d'objets multimédias à grande échelle.
      - **B. Amazon SQS** : Service de file d'attente de messages, pas de stockage.
      - **D. Stockage d'instance Amazon** : Stockage temporaire par bloc attaché à une instance EC2, non persistant.
    </details>

19. Lequel des éléments suivants est équivalent à un nom d'utilisateur et un mot de passe et est utilisé pour authentifier votre accès programmatique aux services et API AWS ?
    - A. Mot de passe d'instance.
    - B. Paires de clés.
    - C. Clés d'accès.
    - D. MFA.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Clés d'accès** : Composées d'un ID de clé d'accès et d'une clé d'accès secrète, elles sont utilisées pour signer les requêtes API programmatiques.
    - **Autres options incorrectes** ❌ :
      - **A. Mot de passe d'instance** : Utilisé pour se connecter à une instance Windows EC2, pas pour l'authentification API.
      - **B. Paires de clés** : Utilisées pour se connecter à des instances EC2 Linux/Unix via SSH, pas pour l'authentification API.
      - **D. MFA** : Authentification multi-facteurs pour un niveau de sécurité supplémentaire, pas pour l'accès programmatique de base.
    </details>

20. Que fournit Amazon ElastiCache ?
    - A. Mise en cache en mémoire pour les applications à forte intensité de lecture.
    - B. Un magasin de données en mémoire compatible Ehcache.
    - C. Une boutique de logiciels en ligne qui permet aux clients de lancer des logiciels préconfigurés en quelques clics.
    - D. Un système de noms de domaine dans le cloud.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Mise en cache en mémoire pour les applications à forte intensité de lecture** : ElastiCache est un service de cache en mémoire géré compatible avec Redis ou Memcached, utilisé pour améliorer les performances des applications en réduisant la charge sur les bases de données.
    - **Autres options incorrectes** ❌ :
      - **B. Un magasin de données en mémoire compatible Ehcache** : ElastiCache est compatible avec Redis et Memcached, pas spécifiquement Ehcache.
      - **C. Une boutique de logiciels en ligne** : C'est la description d'AWS Marketplace.
      - **D. Un système de noms de domaine dans le cloud** : C'est Amazon Route 53.
    </details>

21. Quel est le service AWS qui vous permet de gérer tous vos comptes AWS à partir d'un seul compte maître ?
    - A. AWS WAF.
    - B. AWS Trusted Advisor.
    - C. AWS Organizations.
    - D. Amazon Config.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Organizations** : Service qui permet de gérer plusieurs comptes AWS dans une organisation avec facturation consolidée et politiques de contrôle de service.
    - **Autres options incorrectes** ❌ :
      - **A. AWS WAF** : Web Application Firewall pour protéger les applications web.
      - **B. AWS Trusted Advisor** : Fournit des recommandations d'optimisation.
      - **D. Amazon Config** : Service d'audit de configuration des ressources.
    </details>

22. Laquelle des options d'achat d'instances EC2 suivantes prend en charge le modèle Bring Your Own License (BYOL) pour presque tous les scénarios BYOL ?
    - A. Instances dédiées.
    - B. Hôtes dédiés.
    - C. Instances à la demande.
    - D. Instances réservées.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Hôtes dédiés** : Serveurs physiques dédiés à votre usage, vous permettant d'utiliser vos licences logicielles existantes (BYOL) pour des produits comme Windows Server, SQL Server, etc.
    - **Autres options incorrectes** ❌ :
      - **A. Instances dédiées** : Exécutées sur du matériel dédié, mais ne donnent pas un contrôle aussi granulaire que les hôtes dédiés pour le BYOL.
      - **C. Instances à la demande** : Ne prennent pas en charge le BYOL de la même manière ; les licences sont généralement incluses dans le prix.
      - **D. Instances réservées** : Modèle de facturation, pas un type d'hôte physique.
    </details>

23. Lequel des éléments suivants est l'un des avantages de la migration de l'infrastructure d'un centre de données sur site vers AWS ?
    - A. Support gratuit pour tous les clients enterprise.
    - B. Protection automatique des données.
    - C. Réduction des dépenses d'investissement (CapEx).
    - D. AWS assume la responsabilité de la gestion des applications client.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Réduction des dépenses d'investissement (CapEx)** : Avec le cloud, vous évitez les coûts initiaux élevés d'achat de matériel et passez à un modèle de dépenses d'exploitation (OpEx) à l'usage.
    - **Autres options incorrectes** ❌ :
      - **A. Support gratuit pour tous les clients enterprise** : Le support a des coûts ; il existe un plan Basic gratuit, mais les plans supérieurs sont payants.
      - **B. Protection automatique des données** : La protection des données est une responsabilité partagée ; le client doit configurer les sauvegardes et le chiffrement.
      - **D. AWS assume la responsabilité de la gestion des applications client** : Faux. Selon le modèle de responsabilité partagée, le client gère ses applications et données.
    </details>

24. Lesquels des éléments suivants sont des principes de conception importants que vous devriez adopter lors de la conception de systèmes sur AWS ? (Choisissez DEUX)
    - A. Utilisez toujours des services globaux dans votre architecture plutôt que des services régionaux.
    - B. Choisissez toujours de payer à l'usage.
    - C. Traitez les serveurs comme des ressources fixes.
    - D. Automatisez autant que possible.
    - E. Supprimez les points de défaillance uniques.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **D. Automatisez autant que possible** : L'automatisation permet la reproductibilité, la rapidité et la réduction des erreurs humaines.
      - **E. Supprimez les points de défaillance uniques** : Concevez des architectures redondantes pour garantir la haute disponibilité.
    - **Autres options incorrectes** ❌ :
      - **A. Utilisez toujours des services globaux...** : Les services régionaux sont souvent nécessaires pour la latence, la conformité, etc. Le choix dépend des besoins.
      - **B. Choisissez toujours de payer à l'usage** : Bien que le paiement à l'usage soit un avantage du cloud, d'autres modèles (comme les instances réservées) peuvent être plus économiques pour des charges de travail stables.
      - **C. Traitez les serveurs comme des ressources fixes** : C'est l'opposé de la mentalité cloud ; traitez les serveurs comme du bétail, pas comme des animaux de compagnie (disposables).
    </details>

25. Quel service AWS peut être utilisé pour établir une connexion réseau privée et dédiée entre AWS et votre centre de données ?
    - A. AWS Direct Connect.
    - B. Amazon CloudFront.
    - C. AWS Snowball.
    - D. Amazon Route 53.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Direct Connect** : Établit une connexion réseau dédiée entre votre infrastructure sur site et AWS, ce qui peut réduire les coûts de bande passante et fournir une expérience réseau plus cohérente.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon CloudFront** : CDN pour la diffusion de contenu.
      - **C. AWS Snowball** : Appareil de transfert de données physique.
      - **D. Amazon Route 53** : Service DNS.
    </details>

26. Vous travaillez sur deux projets qui nécessitent des configurations réseau complètement différentes. Quel service ou quelle fonctionnalité AWS vous permettra d'isoler les ressources et les configurations réseau ?
    - A. Passerelles Internet.
    - B. Virtual Private Cloud.
    - C. Groupes de sécurité.
    - D. Amazon CloudFront.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Virtual Private Cloud** : Amazon VPC vous permet de créer des réseaux virtuels isolés les uns des autres, parfait pour séparer les environnements par projet.
    - **Autres options incorrectes** ❌ :
      - **A. Passerelles Internet** : Permettent à un VPC d'accéder à Internet, mais ne fournissent pas d'isolation entre projets.
      - **C. Groupes de sécurité** : Agissent comme des firewalls au niveau de l'instance, mais ne fournissent pas d'isolation réseau au niveau du projet.
      - **D. Amazon CloudFront** : CDN, pas d'isolation réseau.
    </details>

27. Lequel des services suivants peut aider à protéger vos applications web contre les injections SQL et autres vulnérabilités dans votre code d'application ?
    - A. Amazon Cognito.
    - B. AWS IAM.
    - C. Amazon Aurora.
    - D. AWS WAF.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS WAF** : Web Application Firewall vous aide à protéger vos applications web contre les exploits courants comme les injections SQL et les scripts intersites (XSS).
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Cognito** : Service de gestion des identités utilisateur pour les applications web/mobiles.
      - **B. AWS IAM** : Service de gestion des identités et des accès pour les ressources AWS.
      - **C. Amazon Aurora** : Base de données relationnelle gérée.
    </details>

28. Une organisation a besoin d'analyser et de traiter un grand nombre d'ensembles de données. Quel service AWS devrait-elle utiliser ?
    - A. Amazon EMR.
    - B. Amazon MQ.
    - C. Amazon SNS.
    - D. Amazon SQS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon EMR** : Service de big data géré qui facilite l'exécution de frameworks comme Apache Spark et Hadoop pour traiter de grandes quantités de données.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon MQ** : Service de courtier de messages géré pour Apache ActiveMQ.
      - **C. Amazon SNS** : Service de notification et de messagerie.
      - **D. Amazon SQS** : Service de file d'attente de messages.
    </details>

29. Sur la base du modèle de responsabilité partagée d'AWS, lesquels des éléments suivants sont de la seule responsabilité d'AWS ? (Choisissez DEUX)
    - A. Surveillance des performances réseau.
    - B. Installation de logiciels sur les instances EC2.
    - C. Création d'hyperviseurs.
    - D. Configuration des listes de contrôle d'accès (ACL).
    - E. Maintenance matérielle.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Création d'hyperviseurs** : AWS est responsable de l'infrastructure de virtualisation (hyperviseur).
      - **E. Maintenance matérielle** : AWS est responsable de la maintenance du matériel physique dans les centres de données.
    - **Autres options incorrectes** ❌ :
      - **A. Surveillance des performances réseau** : Partagé. AWS surveille le réseau sous-jacent, mais le client surveille son propre trafic réseau et ses configurations.
      - **B. Installation de logiciels sur les instances EC2** : Responsabilité du client (système d'exploitation invité et applications).
      - **D. Configuration des listes de contrôle d'accès (ACL)** : Le client configure les NACL (Network ACL) dans son VPC.
    </details>

30. Quel est le service AWS qui vous offre le plus haut niveau de contrôle sur l'infrastructure virtuelle sous-jacente ?
    - A. Amazon Redshift.
    - B. Amazon DynamoDB.
    - C. Amazon EC2.
    - D. Amazon RDS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon EC2** : En tant que service IaaS (Infrastructure as a Service), EC2 vous donne un contrôle maximal sur le système d'exploitation, les applications et les configurations réseau.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Redshift** : Service d'entrepôt de données managé (PaaS).
      - **B. Amazon DynamoDB** : Base de données NoSQL entièrement managée (PaaS).
      - **D. Amazon RDS** : Service de base de données relationnelle managée (PaaS).
    </details>

31. Quelles sont les informations d'identification de sécurité par défaut requises pour accéder à la console de gestion AWS pour un compte d'utilisateur IAM ?
    - A. MFA.
    - B. Jetons de sécurité.
    - C. Un nom d'utilisateur et un mot de passe.
    - D. Clés d'accès.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Un nom d'utilisateur et un mot de passe** : Pour se connecter à la console AWS Management Console, un utilisateur IAM a besoin d'un nom d'utilisateur et d'un mot de passe.
    - **Autres options incorrectes** ❌ :
      - **A. MFA** : Authentification multi-facteurs est facultative pour une sécurité renforcée.
      - **B. Jetons de sécurité** : Utilisés pour l'authentification temporaire (par exemple, avec AWS STS), pas pour la connexion console par défaut.
      - **D. Clés d'accès** : Utilisées pour l'accès programmatique (API/CLI), pas pour la console.
    </details>

32. Dans votre environnement sur site, vous pouvez créer autant de serveurs virtuels que nécessaire à partir d'un seul modèle. Que pouvez-vous utiliser pour effectuer la même chose dans AWS ?
    - A. IAM.
    - B. Une passerelle Internet.
    - C. Snapshot EBS.
    - D. AMI.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AMI** : Amazon Machine Image est un modèle qui contient les informations nécessaires pour lancer une instance EC2 (système d'exploitation, applications, configurations).
    - **Autres options incorrectes** ❌ :
      - **A. IAM** : Service de gestion des identités et des accès.
      - **B. Passerelle Internet** : Permet à un VPC d'accéder à Internet.
      - **C. Snapshot EBS** : Sauvegarde d'un volume EBS, pas un modèle complet d'instance.
    </details>

33. Quels sont deux avantages de l'utilisation du cloud computing par rapport à l'utilisation de centres de données traditionnels ? (Choisissez DEUX)
    - A. Capacité de calcul réservée.
    - B. Élimination des points de défaillance uniques (SPOF).
    - C. Infrastructure distribuée.
    - D. Ressources de calcul virtualisées.
    - E. Hébergement dédié.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Élimination des points de défaillance uniques (SPOF)** : Le cloud permet de concevoir des architectures redondantes sur plusieurs zones de disponibilité et régions.
      - **C. Infrastructure distribuée** : AWS a une infrastructure mondiale répartie dans de nombreuses régions, ce qui améliore la latence et la résilience.
    - **Autres options incorrectes** ❌ :
      - **A. Capacité de calcul réservée** : Les centres de données traditionnels peuvent également avoir une capacité réservée. Ce n'est pas un avantage unique au cloud.
      - **D. Ressources de calcul virtualisées** : La virtualisation est également utilisée dans les centres de données sur site.
      - **E. Hébergement dédié** : Disponible à la fois dans le cloud et sur site, pas un avantage unique.
    </details>

34. Lesquels des aspects suivants de la sécurité sont gérés par AWS ? (Choisissez DEUX)
    - A. Chiffrement des volumes EBS.
    - B. Sécurité VPC.
    - C. Autorisations d'accès.
    - D. Mise à jour corrective du matériel.
    - E. Sécurisation de l'infrastructure physique mondiale.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **D. Mise à jour corrective du matériel** : AWS est responsable de la mise à jour du matériel physique.
      - **E. Sécurisation de l'infrastructure physique mondiale** : AWS est responsable de la sécurité physique des centres de données.
    - **Autres options incorrectes** ❌ :
      - **A. Chiffrement des volumes EBS** : Le client doit activer et gérer le chiffrement EBS (bien qu'AWS fournisse le service de clés).
      - **B. Sécurité VPC** : Le client est responsable de la configuration des groupes de sécurité, NACL, etc.
      - **C. Autorisations d'accès** : Le client gère les politiques IAM pour contrôler les accès.
    </details>

35. Quelle affirmation décrit le mieux le pilier d'excellence opérationnelle du AWS Well-Architected Framework ?
    - A. La capacité d'un système à récupérer gracieusement après un échec.
    - B. L'utilisation efficace des ressources de calcul pour répondre aux exigences.
    - C. La capacité de surveiller les systèmes et d'améliorer les processus et procédures de support.
    - D. La capacité de gérer les opérations du centre de données plus efficacement.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. La capacité de surveiller les systèmes et d'améliorer les processus et procédures de support** : L'excellence opérationnelle concerne l'exécution et la surveillance des systèmes pour fournir de la valeur commerciale, et l'amélioration continue des processus et procédures.
    - **Autres options incorrectes** ❌ :
      - **A. La capacité d'un système à récupérer gracieusement après un échec** : Cela relève du pilier de fiabilité.
      - **B. L'utilisation efficace des ressources de calcul pour répondre aux exigences** : Cela relève du pilier d'efficacité des performances.
      - **D. La capacité de gérer les opérations du centre de données plus efficacement** : Trop spécifique aux centres de données ; l'excellence opérationnelle est plus large.
    </details>

36. AWS a créé un grand nombre d'emplacements périphériques (Edge Locations) dans le cadre de son infrastructure mondiale. Lequel des avantages suivants n'est PAS un avantage de l'utilisation des emplacements périphériques ?
    - A. Les emplacements périphériques sont utilisés par CloudFront pour mettre en cache les réponses les plus récentes.
    - B. Les emplacements périphériques sont utilisés par CloudFront pour améliorer l'expérience de vos utilisateurs finaux lors du téléchargement de fichiers.
    - C. Les emplacements périphériques sont utilisés par CloudFront pour répartir le trafic sur plusieurs instances pour réduire la latence.
    - D. Les emplacements périphériques sont utilisés par CloudFront pour distribuer du contenu aux utilisateurs mondiaux avec une faible latence.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ (celle qui est fausse) :
      - **C. Les emplacements périphériques sont utilisés par CloudFront pour répartir le trafic sur plusieurs instances pour réduire la latence** : C'est faux. La répartition du trafic sur plusieurs instances est effectuée par un équilibreur de charge (ELB), pas par les emplacements périphériques de CloudFront.
    - **Autres options incorrectes** ❌ (celles qui sont vraies) :
      - **A. Les emplacements périphériques sont utilisés par CloudFront pour mettre en cache les réponses les plus récentes** : Vrai.
      - **B. Les emplacements périphériques sont utilisés par CloudFront pour améliorer l'expérience de vos utilisateurs finaux lors du téléchargement de fichiers** : Vrai, via S3 Transfer Acceleration.
      - **D. Les emplacements périphériques sont utilisés par CloudFront pour distribuer du contenu aux utilisateurs mondiaux avec une faible latence** : Vrai.
    </details>

37. Quels sont les outils de gestion des changements qui aident les clients AWS à auditer et surveiller tous les changements de ressources dans leur environnement AWS ? (Choisissez DEUX)
    - A. AWS CloudTrail.
    - B. Amazon Comprehend.
    - C. AWS Transit Gateway.
    - D. AWS X-Ray.
    - E. AWS Config.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS CloudTrail** : Enregistre l'historique des appels d'API et des actions de gestion pour la gouvernance, la conformité et l'audit.
      - **E. AWS Config** : Évalue, audite et évalue la configuration des ressources, et enregistre les changements de configuration au fil du temps.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Comprehend** : Service de traitement du langage naturel (NLP) pour extraire des informations.
      - **C. AWS Transit Gateway** : Service de réseau pour connecter plusieurs VPC.
      - **D. AWS X-Ray** : Service de traçage distribué pour les applications.
    </details>

38. Lequel des services suivants vous permet d'exécuter des applications conteneurisées sur un cluster d'instances EC2 ?
    - A. Amazon ECS.
    - B. AWS Data Pipeline.
    - C. AWS Cloud9.
    - D. AWS Personal Health Dashboard.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon ECS** : Amazon Elastic Container Service est un service de gestion de conteneurs entièrement géré qui prend en charge Docker et vous permet d'exécuter des applications sur un cluster d'instances EC2.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Data Pipeline** : Service d'orchestration de données pour le traitement et le déplacement des données.
      - **C. AWS Cloud9** : Environnement de développement intégré (IDE) cloud.
      - **D. AWS Personal Health Dashboard** : Fournit des alertes personnalisées sur l'état des services AWS.
    </details>

39. Lequel des services suivants aidera les entreprises à garantir la conformité dans AWS ?
    - A. CloudFront.
    - B. CloudEndure Migration.
    - C. CloudWatch.
    - D. CloudTrail.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. CloudTrail** : Fournit un historique d'audit des appels d'API, ce qui est essentiel pour la conformité réglementaire et la gouvernance.
    - **Autres options incorrectes** ❌ :
      - **A. CloudFront** : CDN pour la diffusion de contenu.
      - **B. CloudEndure Migration** : Service de migration de serveurs (maintenant intégré à AWS Application Migration Service).
      - **C. CloudWatch** : Service de surveillance des performances.
    </details>

40. Laquelle des procédures suivantes vous aidera à réduire vos coûts Amazon S3 ?
    - A. Utilisez la fonctionnalité Import/Export pour déplacer automatiquement les anciens fichiers vers Amazon Glacier.
    - B. Utilisez la bonne combinaison de classes de stockage en fonction des différents cas d'utilisation.
    - C. Choisissez la bonne zone de disponibilité pour votre compartiment S3.
    - D. Déplacez toutes les données stockées dans S3 standard vers EBS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Utilisez la bonne combinaison de classes de stockage en fonction des différents cas d'utilisation** : S3 propose plusieurs classes de stockage (Standard, Intelligent-Tiering, Standard-IA, Glacier, etc.) avec des prix différents. Choisir la classe appropriée en fonction des modèles d'accès permet d'optimiser les coûts.
    - **Autres options incorrectes** ❌ :
      - **A. Utilisez la fonctionnalité Import/Export** : Il s'agit d'un service physique de transfert de données (remplacé par Snowball), pas d'une fonctionnalité de gestion du cycle de vie S3.
      - **C. Choisissez la bonne zone de disponibilité pour votre compartiment S3** : Les compartiments S3 sont régionaux, pas liés à une zone de disponibilité spécifique.
      - **D. Déplacez toutes les données stockées dans S3 standard vers EBS** : EBS est plus cher pour le stockage d'objets à grande échelle et n'est pas conçu pour le même usage.
    </details>

41. Quels sont les services/fonctionnalités AWS qui peuvent vous aider à maintenir une architecture hautement disponible et tolérante aux pannes dans AWS ? (Choisissez DEUX)
    - A. AWS Direct Connect.
    - B. Amazon EC2 Auto Scaling.
    - C. Elastic Load Balancer.
    - D. CloudFormation.
    - E. Network ACLs.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Amazon EC2 Auto Scaling** : Assure que le nombre d'instances EC2 s'ajuste automatiquement pour maintenir la disponibilité et la performance.
      - **C. Elastic Load Balancer** : Répartit le trafic sur plusieurs instances saines et détecte les instances défaillantes.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Direct Connect** : Connexion réseau dédiée, n'assure pas directement la haute disponibilité des applications.
      - **D. CloudFormation** : Service d'infrastructure as code, utile pour le déploiement reproductible mais pas directement pour la haute disponibilité en temps réel.
      - **E. Network ACLs** : Contrôle d'accès réseau au niveau du sous-réseau, pas un service de haute disponibilité.
    </details>

42. Laquelle des activités suivantes peut aider à réduire vos coûts mensuels AWS ?
    - A. Activer Amazon EC2 Auto Scaling pour toutes vos charges de travail.
    - B. Utiliser l'AWS Network Load Balancer (NLB) pour équilibrer la charge des requêtes HTTP entrantes.
    - C. Supprimer toutes vos étiquettes d'allocation des coûts.
    - D. Déployer vos ressources AWS sur plusieurs zones de disponibilité.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Activer Amazon EC2 Auto Scaling pour toutes vos charges de travail** : Auto Scaling ajuste la capacité en fonction de la demande, évitant le surprovisionnement et réduisant les coûts.
    - **Autres options incorrectes** ❌ :
      - **B. Utiliser l'AWS Network Load Balancer (NLB) pour équilibrer la charge des requêtes HTTP entrantes** : Le NLB est adapté au trafic de couche 4 (TCP/UDP). Pour HTTP, l'Application Load Balancer (ALB) est souvent plus approprié. Le choix du type d'équilibreur n'affecte pas directement les coûts de manière significative.
      - **C. Supprimer toutes vos étiquettes d'allocation des coûts** : Les étiquettes aident à analyser les coûts par projet, etc. Les supprimer n'économise pas d'argent.
      - **D. Déployer vos ressources AWS sur plusieurs zones de disponibilité** : Augmente la fiabilité mais aussi les coûts (transfert de données entre AZ, instances multiples).
    </details>

43. Quel est le service/fonctionnalité AWS qui tire parti des emplacements périphériques mondiaux d'Amazon CloudFront pour transférer des fichiers vers S3 avec des vitesses de téléchargement plus élevées ?
    - A. S3 Transfer Acceleration.
    - B. AWS WAF.
    - C. AWS Snowmobile.
    - D. AWS Snowball.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. S3 Transfer Acceleration** : Utilise les emplacements périphériques de CloudFront pour accélérer les transferts de fichiers vers S3 sur de longues distances.
    - **Autres options incorrectes** ❌ :
      - **B. AWS WAF** : Web Application Firewall.
      - **C. AWS Snowmobile** : Camion pour le transfert de données à l'échelle de l'exaoctet.
      - **D. AWS Snowball** : Appareil de transfert de données physique.
    </details>

44. Laquelle des fonctionnalités de sécurité AWS suivantes est associée à une instance EC2 et fonctionne pour filtrer les requêtes de trafic entrant ?
    - A. AWS X-Ray.
    - B. Network ACL.
    - C. Groupes de sécurité.
    - D. Journaux de flux VPC.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Groupes de sécurité** : Agissent comme un firewall au niveau de l'instance pour contrôler le trafic entrant et sortant.
    - **Autres options incorrectes** ❌ :
      - **A. AWS X-Ray** : Service de traçage distribué pour les applications.
      - **B. Network ACL** : Contrôle d'accès au niveau du sous-réseau, pas au niveau de l'instance.
      - **D. Journaux de flux VPC** : Capture des informations sur le trafic IP dans votre VPC, pas un mécanisme de filtrage.
    </details>

45. Quels services AWS peuvent être utilisés pour améliorer les performances d'une application mondiale et réduire la latence pour ses utilisateurs ? (Choisissez DEUX)
    - A. AWS KMS.
    - B. AWS Global Accelerator.
    - C. AWS Direct Connect.
    - D. AWS Glue.
    - E. Amazon CloudFront.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. AWS Global Accelerator** : Dirige le trafic utilisateur vers le point de terminaison AWS optimal en utilisant le réseau mondial d'AWS, améliorant ainsi les performances et la disponibilité.
      - **E. Amazon CloudFront** : CDN qui diffuse le contenu depuis des emplacements périphériques proches des utilisateurs, réduisant la latence.
    - **Autres options incorrectes** ❌ :
      - **A. AWS KMS** : Service de gestion des clés de chiffrement.
      - **C. AWS Direct Connect** : Connexion réseau dédiée entre votre datacenter et AWS, n'améliore pas directement la latence pour les utilisateurs mondiaux.
      - **D. AWS Glue** : Service d'intégration de données (ETL).
    </details>

46. L'utilisation d'Amazon RDS relève du modèle de responsabilité partagée. Lesquelles des responsabilités suivantes incombent au client ? (Choisissez DEUX)
    - A. Construire le schéma de la base de données relationnelle.
    - B. Effectuer des sauvegardes.
    - C. Gérer les paramètres de la base de données.
    - D. Appliquer des correctifs au logiciel de base de données.
    - E. Installer le logiciel de base de données.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Construire le schéma de la base de données relationnelle** : Le client conçoit et crée les tables, index, etc.
      - **C. Gérer les paramètres de la base de données** : Le client configure les paramètres du groupe de paramètres de la base de données (paramètres DB).
    - **Autres options incorrectes** ❌ :
      - **B. Effectuer des sauvegardes** : Amazon RDS effectue des sauvegardes automatisées (selon la configuration du client), mais le client peut également initier des sauvegardes manuelles. Cependant, la gestion des sauvegardes automatisées est partagée (AWS fournit le mécanisme, le client l'active).
      - **D. Appliquer des correctifs au logiciel de base de données** : AWS est responsable de l'application des correctifs du moteur de base de données (mais le client peut contrôler le moment de la mise à jour).
      - **E. Installer le logiciel de base de données** : AWS installe et maintient le logiciel de base de données.
    </details>

47. Une entreprise possède une grande quantité de données structurées stockées dans son centre de données sur site. Elle prévoit de migrer toutes les données vers AWS. Quelle est l'option de base de données AWS la plus appropriée ?
    - A. Amazon DynamoDB.
    - B. Amazon SNS.
    - C. Amazon RDS.
    - D. Amazon ElastiCache.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon RDS** : Service de base de données relationnelle gérée, idéal pour les données structurées (tables avec schéma défini) provenant d'applications traditionnelles.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon DynamoDB** : Base de données NoSQL, mieux adaptée aux données non relationnelles ou semi-structurées.
      - **B. Amazon SNS** : Service de notification, pas de base de données.
      - **D. Amazon ElastiCache** : Service de cache en mémoire, pas de stockage persistant principal.
    </details>

48. Une entreprise a créé une solution qui aide les clients AWS à améliorer leurs architectures sur AWS. Quel programme AWS peut soutenir cette entreprise ?
    - A. APN Consulting Partners.
    - B. AWS TAM.
    - C. APN Technology Partners.
    - D. AWS Professional Services.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. APN Consulting Partners** : Partenaires de conseil AWS qui aident les clients à concevoir, architecturer, construire, migrer et gérer leurs charges de travail sur AWS.
    - **Autres options incorrectes** ❌ :
      - **B. AWS TAM** : Technical Account Manager est un rôle du support Enterprise d'AWS, pas un programme de partenariat.
      - **C. APN Technology Partners** : Partenaires technologiques qui fournissent des logiciels fonctionnant sur ou avec AWS.
      - **D. AWS Professional Services** : Équipe de consultants d'AWS qui aident les clients, mais pas un programme de partenariat pour les entreprises externes.
    </details>

49. Quel est le service sans serveur AWS qui vous permet d'exécuter vos applications sans aucune charge administrative ?
    - A. Amazon LightSail.
    - B. AWS Lambda.
    - C. Instances Amazon RDS.
    - D. Instances Amazon EC2.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Lambda** : Service de calcul sans serveur qui exécute votre code en réponse à des événements et gère automatiquement les ressources de calcul sous-jacentes.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon LightSail** : Service de cloud simple avec des plans prédéfinis, mais vous gérez toujours les instances.
      - **C. Instances Amazon RDS** : Service de base de données gérée, mais vous devez gérer les paramètres, les sauvegardes, etc.
      - **D. Instances Amazon EC2** : Service IaaS où vous êtes responsable de la gestion du système d'exploitation et des applications.
    </details>

50. Jessica gère une application web de commerce électronique dans AWS. L'application est hébergée sur six instances EC2. Un jour, trois des instances ont planté ; mais aucun de ses clients n'a été affecté. Qu'a fait Jessica correctement dans ce scénario ?
    - A. Elle a correctement construit un système élastique.
    - B. Elle a correctement construit un système tolérant aux pannes.
    - C. Elle a correctement construit un système chiffré.
    - D. Elle a correctement construit un système évolutif.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Elle a correctement construit un système tolérant aux pannes** : La tolérance aux pannes est la capacité d'un système à continuer de fonctionner en cas de défaillance de certains de ses composants. Ici, la défaillance de trois instances n'a pas affecté les clients, ce qui indique une redondance et une tolérance aux pannes.
    - **Autres options incorrectes** ❌ :
      - **A. Elle a correctement construit un système élastique** : L'élasticité se réfère à la capacité de s'adapter à la charge en ajoutant ou supprimant des ressources, pas nécessairement à la tolérance aux pannes.
      - **C. Elle a correctement construit un système chiffré** : Le chiffrement protège la confidentialité des données, pas la disponibilité.
      - **D. Elle a correctement construit un système évolutif** : L'évolutivité est la capacité de gérer une charge accrue, pas de résister aux pannes.
    </details>