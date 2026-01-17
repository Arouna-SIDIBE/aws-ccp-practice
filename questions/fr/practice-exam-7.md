---
layout: exam
---

# Examen de pratique 7

1. Lequel des éléments suivants peut aider à sécuriser vos données sensibles dans Amazon S3 ? (Choisissez DEUX)
    - A. Supprimer les clés de chiffrement une fois vos données chiffrées.
    - B. Avec AWS, vous n'avez pas à vous soucier du chiffrement.
    - C. Activer le chiffrement S3.
    - D. Chiffrer les données avant de les télécharger.
    - E. Supprimer tous les utilisateurs IAM ayant accès à S3.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Activer le chiffrement S3** : AWS fournit plusieurs options de chiffrement pour S3 (SSE-S3, SSE-KMS, SSE-C) qui protègent les données au repos.
      - **D. Chiffrer les données avant de les télécharger** : Le chiffrement côté client (client-side encryption) offre un niveau de sécurité supplémentaire car les données sont déjà chiffrées avant d'arriver chez AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Supprimer les clés de chiffrement une fois vos données chiffrées** : Cela rendrait les données irrécupérables car vous ne pourriez plus les déchiffrer.
      - **B. Avec AWS, vous n'avez pas à vous soucier du chiffrement** : Faux. Selon le modèle de responsabilité partagée, le client est responsable du chiffrement de ses données.
      - **E. Supprimer tous les utilisateurs IAM ayant accès à S3** : Cela interromprait les opérations légitimes. Il faut plutôt appliquer le principe du moindre privilège.
    </details>

2. Quel service AWS aide les développeurs à compiler et tester leur code ?
    - A. AWS CodeDeploy.
    - B. AWS CodeCommit.
    - C. CloudEndure.
    - D. AWS CodeBuild.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS CodeBuild** : Service de compilation et de test entièrement géré qui compile le code source, exécute les tests et produit des artefacts prêts au déploiement.
    - **Autres options incorrectes** ❌ :
      - **A. AWS CodeDeploy** : Automatise le déploiement d'applications vers divers services de calcul AWS.
      - **B. AWS CodeCommit** : Service de contrôle de source Git managé pour héberger des dépôts de code.
      - **C. CloudEndure** : Service de migration et de reprise après sinistre (maintenant intégré à AWS Application Migration Service).
    </details>

3. Lequel des éléments suivants affectera le montant que vous payez pour stocker des objets dans S3 ? (Choisissez DEUX)
    - A. Utiliser le chiffrement par défaut pour n'importe quel nombre de compartiments S3.
    - B. Le nombre de volumes EBS attachés à vos instances.
    - C. La classe de stockage utilisée pour les objets stockés.
    - D. Créer et supprimer des compartiments S3.
    - E. La taille totale en gigaoctets de tous les objets stockés.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. La classe de stockage utilisée pour les objets stockés** : Différentes classes de stockage S3 (Standard, Intelligent-Tiering, Standard-IA, Glacier, etc.) ont des prix différents par Go.
      - **E. La taille totale en gigaoctets de tous les objets stockés** : Les coûts de stockage S3 sont basés sur la quantité totale de données stockées, facturées par Go.
    - **Autres options incorrectes** ❌ :
      - **A. Utiliser le chiffrement par défaut pour n'importe quel nombre de compartiments S3** : Le chiffrement par défaut n'entraîne pas de frais supplémentaires.
      - **B. Le nombre de volumes EBS attachés à vos instances** : EBS est un service distinct facturé séparément, non lié aux coûts de S3.
      - **D. Créer et supprimer des compartiments S3** : La création/suppression de compartiments S3 est gratuite.
    </details>

4. Que fournit le service Amazon CloudFront ? (Choisissez DEUX)
    - A. Suit l'activité des utilisateurs et l'utilisation des API.
    - B. Augmente la disponibilité des applications grâce à la mise en cache en périphérie.
    - C. Permet une reprise après sinistre plus rapide.
    - D. Stocke des données archivées à très faible coût.
    - E. Distribue le contenu aux utilisateurs finaux avec une faible latence.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Augmente la disponibilité des applications grâce à la mise en cache en périphérie** : CloudFront met en cache le contenu sur des emplacements périphériques mondiaux, réduisant la charge sur l'origine et améliorant la disponibilité.
      - **E. Distribue le contenu aux utilisateurs finaux avec une faible latence** : En servant le contenu depuis des emplacements géographiquement proches des utilisateurs, CloudFront réduit la latence.
    - **Autres options incorrectes** ❌ :
      - **A. Suit l'activité des utilisateurs et l'utilisation des API** : C'est le rôle de services comme AWS CloudTrail ou Amazon CloudWatch.
      - **C. Permet une reprise après sinistre plus rapide** : CloudFront n'est pas un service de reprise après sinistre.
      - **D. Stocke des données archivées à très faible coût** : C'est le rôle d'Amazon S3 Glacier.
    </details>

5. Vous rencontrez de nombreux problèmes avec votre centre de contact actuel. Quel service fournit un centre de contact basé sur le cloud qui peut offrir un meilleur service à vos clients ?
    - A. Amazon Lightsail.
    - B. Amazon Connect.
    - C. AWS Direct Connect.
    - D. AWS Elastic Beanstalk.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon Connect** : Service de centre de contact cloud entièrement managé, facile à configurer et à mettre à l'échelle.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Lightsail** : Service de cloud simple avec des plans prédéfinis pour les applications simples.
      - **C. AWS Direct Connect** : Service de connexion réseau dédiée entre votre datacenter et AWS.
      - **D. AWS Elastic Beanstalk** : Service PaaS pour déployer et mettre à l'échelle des applications.
    </details>

6. Vous avez récemment migré votre application vers AWS. Comment pouvez-vous visualiser les coûts AWS appliqués à votre compte ?
    - A. En utilisant le rapport AWS Cost & Usage.
    - B. En utilisant le tableau de bord AWS Total Cost of Ownership (TCO).
    - C. En utilisant le tableau de bord des journaux AWS CloudWatch.
    - D. En utilisant le tableau de bord Amazon VPC.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. En utilisant le rapport AWS Cost & Usage** : Fournit les données détaillées les plus granulaires sur l'utilisation et les coûts AWS.
    - **Autres options incorrectes** ❌ :
      - **B. En utilisant le tableau de bord AWS Total Cost of Ownership (TCO)** : L'AWS TCO Calculator est un outil d'estimation des coûts, pas pour visualiser les coûts réels.
      - **C. En utilisant le tableau de bord des journaux AWS CloudWatch** : CloudWatch est pour la surveillance des performances et des journaux, pas pour les coûts.
      - **D. En utilisant le tableau de bord Amazon VPC** : Pour gérer les réseaux privés virtuels, pas les coûts.
    </details>

7. Lesquels des suivants sont des types valides d'instances réservées Amazon EC2 ? (Choisissez DEUX)
    - A. Convertible.
    - B. Expedited.
    - C. Bulk.
    - D. Spot.
    - E. Standard.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Convertible** : Offre la possibilité d'échanger l'instance réservée contre une autre avec des attributs différents.
      - **E. Standard** : Offre la remise la plus élevée mais sans flexibilité d'échange.
    - **Autres options incorrectes** ❌ :
      - **B. Expedited** : Ce n'est pas un type d'instance réservée.
      - **C. Bulk** : Ce n'est pas un type d'instance réservée.
      - **D. Spot** : Type d'instance à prix réduit mais pouvant être interrompue, pas une instance réservée.
    </details>

8. Lequel des services suivants vous donne accès à tous les rapports et certifications émis par des auditeurs AWS ?
    - A. AWS Artifact.
    - B. AWS Config.
    - C. Amazon CloudWatch.
    - D. AWS CloudTrail.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Artifact** : Portail centralisé où les clients peuvent consulter et télécharger des rapports de conformité, des certifications et des accords AWS.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Config** : Service d'audit et d'évaluation de la configuration des ressources.
      - **C. Amazon CloudWatch** : Service de surveillance des performances et des journaux.
      - **D. AWS CloudTrail** : Service de journalisation des appels d'API pour la gouvernance et l'audit.
    </details>

9. Vous gérez un blog sur AWS avec différents environnements : développement, test et production. Que pouvez-vous utiliser pour créer une console personnalisée pour chaque environnement afin de visualiser et gérer facilement vos ressources ?
    - A. AWS Resource Groups.
    - B. AWS Placement Groups.
    - C. AWS Management Console.
    - D. AWS Tag Editor.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Resource Groups** : Permet de créer des groupes de ressources basés sur des balises, offrant des vues personnalisées dans la console AWS.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Placement Groups** : Stratégies de placement pour regrouper des instances EC2 à faible latence, pas pour organiser les vues console.
      - **C. AWS Management Console** : L'interface web générale d'AWS, pas une console personnalisée par environnement.
      - **D. AWS Tag Editor** : Outil pour gérer les balises sur les ressources, pas pour créer des vues console personnalisées.
    </details>

10. Quel service AWS collecte les métriques des instances EC2 en cours d'exécution ?
    - A. Amazon Inspector.
    - B. Amazon CloudWatch.
    - C. AWS CloudFormation.
    - D. AWS CloudTrail.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon CloudWatch** : Service de surveillance qui collecte des métriques (CPU, mémoire, réseau, etc.) des instances EC2 et d'autres ressources AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Inspector** : Service d'évaluation de sécurité automatisé pour les applications.
      - **C. AWS CloudFormation** : Service d'infrastructure as code.
      - **D. AWS CloudTrail** : Service de journalisation des appels d'API.
    </details>

11. Votre application web rencontre actuellement des problèmes de performance et souffre de longs temps de chargement. Lequel des services AWS suivants pourrait aider à résoudre ces problèmes et améliorer les performances ?
    - A. Amazon Detective.
    - B. AWS X-Ray.
    - C. AWS Security Hub.
    - D. AWS Shield.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS X-Ray** : Service de traçage distribué qui aide les développeurs à analyser et déboguer les applications, en identifiant les goulots d'étranglement de performance.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Detective** : Service d'investigation de sécurité pour analyser les causes profondes des problèmes de sécurité.
      - **C. AWS Security Hub** : Service de gestion de la sécurité qui agrège les alertes de sécurité.
      - **D. AWS Shield** : Service de protection contre les attaques DDoS.
    </details>

12. Lesquelles des ressources de calcul suivantes sont serverless (sans serveur) ? (Choisissez DEUX)
    - A. Amazon EC2.
    - B. AWS Fargate.
    - C. AWS Lambda.
    - D. Amazon ECS.
    - E. Amazon EMR.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. AWS Fargate** : Moteur de calcul serverless pour les conteneurs, gère l'infrastructure sous-jacente.
      - **C. AWS Lambda** : Service de calcul serverless qui exécute du code en réponse à des événements sans provisionner de serveurs.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EC2** : Service d'infrastructure as a service (IaaS) où vous gérez les serveurs virtuels.
      - **D. Amazon ECS** : Service de gestion de conteneurs qui peut s'exécuter sur EC2 (non serverless) ou Fargate (serverless).
      - **E. Amazon EMR** : Service de big data qui s'exécute généralement sur des clusters EC2.
    </details>

13. Pour des raisons de conformité et réglementaires, une agence gouvernementale exige que ses applications s'exécutent sur du matériel qui leur est dédié uniquement. Comment pouvez-vous répondre à cette exigence ?
    - A. Utiliser des hôtes dédiés EC2 (EC2 Dedicated Hosts).
    - B. Utiliser des instances réservées EC2.
    - C. Utiliser des instances Spot EC2.
    - D. Utiliser des instances à la demande EC2.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Utiliser des hôtes dédiés EC2** : Les hôtes dédiés sont des serveurs physiques dédiés à un seul client, répondant aux exigences de licence et de conformité.
    - **Autres options incorrectes** ❌ :
      - **B. Utiliser des instances réservées EC2** : Modèle de facturation, pas de matériel dédié.
      - **C. Utiliser des instances Spot EC2** : Instances à prix réduit pouvant être interrompues, pas de matériel dédié.
      - **D. Utiliser des instances à la demande EC2** : Instances standard partageant le matériel avec d'autres clients AWS.
    </details>

14. Quelle meilleure pratique de gouvernance des coûts AWS recommande d'affiner régulièrement les charges de travail pour tirer le meilleur parti des ressources AWS existantes et réduire les coûts ?
    - A. Application des balises (Tagging Enforcement).
    - B. Optimisation de l'architecture (Architecture Optimization).
    - C. Processus de budgétisation (Budgeting Processes).
    - D. Contrôles des ressources (Resource Controls).

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Optimisation de l'architecture** : Réviser et optimiser continuellement l'architecture pour utiliser les services AWS de manière plus efficace et réduire les coûts.
    - **Autres options incorrectes** ❌ :
      - **A. Application des balises** : Important pour l'attribution des coûts, mais pas spécifiquement pour l'optimisation de l'architecture.
      - **C. Processus de budgétisation** : Pour planifier et suivre les dépenses, pas pour optimiser l'architecture.
      - **D. Contrôles des ressources** : Pour limiter la création de ressources, pas pour optimiser l'architecture existante.
    </details>

15. Une organisation doit construire une application financière qui nécessite la prise en charge des transactions ACID. Quel service de base de données AWS est le plus approprié dans ce cas ?
    - A. RedShift.
    - B. RDS.
    - C. CloudHSM.
    - D. DMS.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. RDS** : Amazon RDS est un service de base de données relationnelle qui prend en charge les transactions ACID (Atomicité, Cohérence, Isolation, Durabilité).
    - **Autres options incorrectes** ❌ :
      - **A. RedShift** : Entrepôt de données pour l'analyse, pas optimisé pour les transactions OLTP.
      - **C. CloudHSM** : Module de sécurité matériel pour le chiffrement, pas une base de données.
      - **D. DMS** : Service de migration de base de données, pas de base de données opérationnelle.
    </details>

16. Que pouvez-vous utiliser pour attribuer des permissions directement à un utilisateur IAM ?
    - A. Identité IAM.
    - B. Groupe IAM.
    - C. Rôle IAM.
    - D. Politique IAM.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Politique IAM** : Les politiques IAM sont des documents JSON qui définissent les autorisations et peuvent être attachées directement aux utilisateurs, groupes ou rôles.
    - **Autres options incorrectes** ❌ :
      - **A. Identité IAM** : Terme générique pour les utilisateurs, groupes et rôles IAM.
      - **B. Groupe IAM** : Collection d'utilisateurs IAM pour faciliter la gestion des permissions, mais les permissions sont attachées via des politiques.
      - **C. Rôle IAM** : Identité avec des permissions temporaires, généralement utilisée par des services AWS ou pour la fédération.
    </details>

17. Le propriétaire d'une application de commerce électronique constate que les besoins en capacité de calcul varient fortement d'un moment à l'autre. Qu'est-ce qui rend AWS plus économique que les centres de données traditionnels pour ce type d'application ?
    - A. AWS permet aux clients de lancer des instances EC2 puissantes pour gérer les pics de charge.
    - B. AWS permet aux clients de payer à l'avance pour obtenir des remises plus importantes.
    - C. AWS permet aux clients de lancer et de terminer des instances EC2 en fonction de la demande.
    - D. AWS permet aux clients de choisir des types d'instances EC2 moins chers qui correspondent le mieux à leurs besoins.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS permet aux clients de lancer et de terminer des instances EC2 en fonction de la demande** : L'élasticité du cloud permet de provisionner et de désaffecter des ressources dynamiquement, évitant le gaspillage lié au surdimensionnement permanent.
    - **Autres options incorrectes** ❌ :
      - **A. AWS permet aux clients de lancer des instances EC2 puissantes pour gérer les pics de charge** : C'est possible, mais ce n'est pas spécifiquement l'aspect économique.
      - **B. AWS permet aux clients de payer à l'avance pour obtenir des remises plus importantes** : C'est vrai pour les instances réservées, mais ce n'est pas la principale raison de l'économie pour les charges de travail variables.
      - **D. AWS permet aux clients de choisir des types d'instances EC2 moins chers** : C'est vrai, mais l'élasticité (ajustement dynamique) est l'avantage clé pour les charges de travail variables.
    </details>

18. Amazon RDS prend en charge plusieurs moteurs de base de données. Lequel des suivants n'en fait pas partie ?
    - A. PostgreSQL.
    - B. Oracle.
    - C. Microsoft SQL Server.
    - D. Teradata.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Teradata** : Teradata est un entrepôt de données, mais n'est pas pris en charge comme moteur géré par Amazon RDS.
    - **Autres options incorrectes** ❌ :
      - **A. PostgreSQL** : Pris en charge par RDS.
      - **B. Oracle** : Pris en charge par RDS.
      - **C. Microsoft SQL Server** : Pris en charge par RDS.
    </details>

19. Lequel des services AWS suivants vous aiderait à migrer des bases de données sur site vers AWS ?
    - A. AWS DMS.
    - B. Amazon S3 Transfer Acceleration.
    - C. AWS Directory Service.
    - D. AWS Transit Gateway.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS DMS** : AWS Database Migration Service est conçu pour migrer des bases de données vers AWS avec un temps d'arrêt minimal.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon S3 Transfer Acceleration** : Accélère les transferts de fichiers vers S3, pas pour la migration de bases de données.
      - **C. AWS Directory Service** : Service d'annuaire managé, pas de migration.
      - **D. AWS Transit Gateway** : Service de réseau pour connecter des VPC, pas de migration.
    </details>

20. Pour les nouveaux clients AWS, quelle est la méthode la PLUS SIMPLE pour lancer un site WordPress simple sur AWS ?
    - A. Exécuter WordPress sur une instance Amazon Lightsail.
    - B. Installer WordPress sur une instance Amazon EC2.
    - C. Utiliser la fonction d'hébergement web d'Amazon S3.
    - D. Héberger le site directement sur AWS Cloud Development Kit (AWS CDK).

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Exécuter WordPress sur une instance Amazon Lightsail** : Lightsail offre des plans tout-en-un avec WordPress préinstallé, idéal pour les débutants.
    - **Autres options incorrectes** ❌ :
      - **B. Installer WordPress sur une instance Amazon EC2** : Nécessite une configuration manuelle, moins simple que Lightsail.
      - **C. Utiliser la fonction d'hébergement web d'Amazon S3** : S3 ne peut héberger que des sites statiques, pas des sites dynamiques comme WordPress.
      - **D. Héberger le site directement sur AWS Cloud Development Kit (AWS CDK)** : AWS CDK est un framework de développement, pas un service d'hébergement simple.
    </details>

21. Lequel des éléments suivants utiliseriez-vous pour gérer vos clés de chiffrement dans le cloud AWS ? (Choisissez DEUX)
    - A. AWS KMS.
    - B. AWS Certificate Manager.
    - C. AWS CodeDeploy.
    - D. AWS CodeCommit.
    - E. CloudHSM.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS KMS** : Service de gestion des clés entièrement managé pour créer et contrôler les clés de chiffrement.
      - **E. CloudHSM** : Module de sécurité matériel dédié pour la génération et le stockage sécurisé des clés de chiffrement.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Certificate Manager** : Gère les certificats SSL/TLS, pas les clés de chiffrement générales.
      - **C. AWS CodeDeploy** : Service de déploiement automatisé.
      - **D. AWS CodeCommit** : Service de contrôle de source.
    </details>

22. Lequel des services suivants vous permet d'installer et d'exécuter un logiciel de base de données relationnelle personnalisé ?
    - A. Amazon EC2.
    - B. Amazon Cognito.
    - C. Amazon RDS.
    - D. Amazon Inspector.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon EC2** : En tant que service IaaS, EC2 vous donne un contrôle total pour installer et configurer n'importe quel logiciel, y compris des bases de données relationnelles personnalisées.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Cognito** : Service de gestion des identités utilisateur.
      - **C. Amazon RDS** : Service de base de données relationnelle managée avec des moteurs prédéfinis, ne permet pas d'installer un logiciel personnalisé.
      - **D. Amazon Inspector** : Service d'évaluation de sécurité.
    </details>

23. Les besoins en CPU et RAM de votre application changent de manière imprévisible. Quel service peut être utilisé pour ajuster dynamiquement ces ressources en fonction de la charge ?
    - A. Auto Scaling.
    - B. ELB.
    - C. Amazon Route53.
    - D. Amazon Elastic Container Service.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Auto Scaling** : Permet de surveiller vos applications et d'ajuster automatiquement la capacité pour maintenir des performances stables.
    - **Autres options incorrectes** ❌ :
      - **B. ELB** : Répartit le trafic, mais ne provisionne pas de nouvelles instances.
      - **C. Amazon Route53** : Service DNS, pas de mise à l'échelle automatique.
      - **D. Amazon Elastic Container Service** : Service de gestion de conteneurs, la mise à l'échelle automatique peut être configurée mais Auto Scaling est le service dédié.
    </details>

24. Une entreprise a une infrastructure hébergée dans un centre de données sur site. Elle dispose actuellement d'une équipe opérationnelle qui s'occupe de la gestion des identités. Si elle décide de migrer vers le cloud AWS, lequel des services suivants l'aiderait à effectuer le même rôle dans AWS ?
    - A. AWS IAM.
    - B. AWS Outposts.
    - C. AWS Federation.
    - D. Amazon Redshift.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS IAM** : Service de gestion des identités et des accès qui permet de contrôler l'accès aux ressources AWS.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Outposts** : Service pour exécuter une infrastructure AWS sur site.
      - **C. AWS Federation** : Fait référence à la fédération d'identité (comme SAML), qui est une fonctionnalité d'IAM, pas un service distinct.
      - **D. Amazon Redshift** : Entrepôt de données.
    </details>

25. Quels sont les principes de conception clés pour concevoir des systèmes dans le cloud public ? (Choisissez DEUX)
    - A. Capacité réservée au lieu de capacité à la demande.
    - B. Couplage lâche (loose coupling) plutôt que couplage serré.
    - C. Serveurs au lieu de services managés.
    - D. Ressources jetables au lieu de serveurs fixes.
    - E. Déploiements multi-AZ au lieu de déploiements multi-régions.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Couplage lâche (loose coupling) plutôt que couplage serré** : Permet une plus grande résilience et évolutivité.
      - **D. Ressources jetables au lieu de serveurs fixes** : Traiter les serveurs comme du bétail (disposables) plutôt que comme des animaux de compagnie (pets).
    - **Autres options incorrectes** ❌ :
      - **A. Capacité réservée au lieu de capacité à la demande** : C'est un modèle d'achat, pas un principe de conception.
      - **C. Serveurs au lieu de services managés** : Les services managés sont recommandés pour réduire la charge opérationnelle.
      - **E. Déploiements multi-AZ au lieu de déploiements multi-régions** : Le choix dépend des besoins de haute disponibilité et de reprise après sinistre.
    </details>

26. Où les propriétaires de compte AWS peuvent-ils obtenir une liste de tous les utilisateurs de leur compte, y compris l'état de leurs identifiants AWS ?
    - A. AWS CloudTrail Trails.
    - B. Rapport d'identification IAM (IAM Credential Report).
    - C. Rapports AWS Artifact.
    - D. Rapport AWS Cost and Usage.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Rapport d'identification IAM** : Génère un rapport détaillé sur tous les utilisateurs IAM et l'état de leurs identifiants (clés d'accès, mots de passe, MFA).
    - **Autres options incorrectes** ❌ :
      - **A. AWS CloudTrail Trails** : Journalise l'activité des API, pas la liste des utilisateurs.
      - **C. Rapports AWS Artifact** : Pour les rapports de conformité et les accords.
      - **D. Rapport AWS Cost and Usage** : Pour les coûts et l'utilisation, pas les utilisateurs IAM.
    </details>

27. Lequel des services suivants vous permet de générer et d'utiliser facilement vos propres clés de chiffrement dans le cloud AWS ?
    - A. AWS Shield.
    - B. AWS Certificate Manager.
    - C. AWS CloudHSM.
    - D. AWS WAF.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS CloudHSM** : Module de sécurité matériel dédié qui vous donne un contrôle exclusif sur vos clés de chiffrement.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Shield** : Service de protection DDoS.
      - **B. AWS Certificate Manager** : Gère les certificats SSL/TLS.
      - **D. AWS WAF** : Pare-feu d'application web.
    </details>

28. Vous avez développé une application web ciblant un public mondial. Lequel des éléments suivants vous aidera à obtenir la plus grande redondance et tolérance aux pannes du point de vue de l'infrastructure ?
    - A. Il n'est pas nécessaire de concevoir pour ces capacités dans AWS, car AWS est redondant par défaut.
    - B. Déployer l'application dans une seule zone de disponibilité.
    - C. Déployer l'application dans plusieurs zones de disponibilité dans une seule région AWS.
    - D. Déployer l'application dans plusieurs zones de disponibilité dans plusieurs régions AWS.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Déployer l'application dans plusieurs zones de disponibilité dans plusieurs régions AWS** : C'est le niveau de redondance le plus élevé, protégeant contre les défaillances à l'échelle d'une région.
    - **Autres options incorrectes** ❌ :
      - **A. Il n'est pas nécessaire de concevoir pour ces capacités dans AWS, car AWS est redondant par défaut** : Faux. Le client doit concevoir son architecture pour la redondance.
      - **B. Déployer l'application dans une seule zone de disponibilité** : Aucune redondance.
      - **C. Déployer l'application dans plusieurs zones de disponibilité dans une seule région AWS** : Bonne redondance, mais ne protège pas contre une défaillance régionale.
    </details>

29. Pour certains services, AWS réplique automatiquement les données sur plusieurs zones de disponibilité pour fournir une tolérance aux pannes en cas de défaillance d'un serveur ou d'une zone de disponibilité. Sélectionnez DEUX services qui répliquent automatiquement les données sur plusieurs zones de disponibilité.
    - A. Instance Store.
    - B. S3.
    - C. DynamoDB.
    - D. Amazon Route 53.
    - E. AWS VPN.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. S3** : Stocke automatiquement les données sur plusieurs installations dans une région, offrant une durabilité de 99,999999999 %.
      - **C. DynamoDB** : Réplique automatiquement les données sur trois zones de disponibilité dans une région.
    - **Autres options incorrectes** ❌ :
      - **A. Instance Store** : Stockage temporaire attaché à une instance EC2, non répliqué.
      - **D. Amazon Route 53** : Service DNS global, mais ne stocke pas de données d'application.
      - **E. AWS VPN** : Connexion VPN, pas de réplication de données.
    </details>

30. Lequel des facteurs suivants affecte le coût d'Amazon CloudFront ? (Choisissez DEUX)
    - A. Nombre de requêtes.
    - B. Distribution du trafic.
    - C. Nombre de volumes.
    - D. Type d'instance.
    - E. Classe de stockage.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Nombre de requêtes** : CloudFront facture en fonction du nombre de requêtes HTTP/HTTPS.
      - **B. Distribution du trafic** : Les coûts de transfert de données sortantes (de CloudFront vers l'internet) varient selon la région géographique.
    - **Autres options incorrectes** ❌ :
      - **C. Nombre de volumes** : Non applicable, CloudFront n'utilise pas de volumes.
      - **D. Type d'instance** : CloudFront est un service de CDN, pas de calcul.
      - **E. Classe de stockage** : CloudFront n'a pas de classes de stockage.
    </details>

31. Lequel des ressources suivantes un client AWS peut-il utiliser pour en savoir plus sur les utilisations interdites des services offerts par AWS ?
    - A. Politiques de contrôle de service AWS (SCP).
    - B. AWS Artifact.
    - C. AWS Budgets.
    - D. Politique d'utilisation acceptable AWS (AWS Acceptable Use Policy).

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Politique d'utilisation acceptable AWS** : Document qui définit les utilisations interdites des services AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Politiques de contrôle de service AWS (SCP)** : Pour restreindre les autorisations dans AWS Organizations, pas la politique d'utilisation acceptable.
      - **B. AWS Artifact** : Pour les rapports de conformité.
      - **C. AWS Budgets** : Pour la gestion des coûts.
    </details>

32. Lesquelles des ressources de sécurité suivantes sont disponibles gratuitement pour tous les utilisateurs ? (Choisissez DEUX)
    - A. Bulletins AWS (AWS Bulletins).
    - B. AWS TAM.
    - C. API de support AWS (AWS Support API).
    - D. Blog de sécurité AWS (AWS Security Blog).
    - E. Formation en classe AWS (AWS Classroom Training).

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Bulletins AWS** : Informations de sécurité publiées par AWS, disponibles gratuitement.
      - **D. Blog de sécurité AWS** : Articles sur les meilleures pratiques de sécurité, disponibles gratuitement.
    - **Autres options incorrectes** ❌ :
      - **B. AWS TAM** : Technical Account Manager est inclus dans le plan Enterprise Support (payant).
      - **C. API de support AWS** : Pour les clients avec un plan de support payant.
      - **E. Formation en classe AWS** : Cours payants (bien qu'il existe des formations gratuites en ligne).
    </details>

33. Comment pouvez-vous protéger les données stockées sur Amazon S3 contre une suppression accidentelle ?
    - A. En activant le versioning S3.
    - B. En configurant des politiques de compartiment S3.
    - C. En configurant des politiques de cycle de vie S3.
    - D. En désactivant la réplication inter-régions S3 (CRR).

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. En activant le versioning S3** : Conserve toutes les versions d'un objet, permettant de restaurer une version précédente en cas de suppression accidentelle.
    - **Autres options incorrectes** ❌ :
      - **B. En configurant des politiques de compartiment S3** : Contrôlent l'accès, mais ne protègent pas directement contre la suppression.
      - **C. En configurant des politiques de cycle de vie S3** : Automatisent la transition vers des classes de stockage moins chères ou la suppression, ne protègent pas contre les suppressions accidentelles.
      - **D. En désactivant la réplication inter-régions S3** : La réplication inter-régions copie les objets vers une autre région, mais ne protège pas contre la suppression dans la région source.
    </details>

34. Lequel des éléments suivants est de la responsabilité d'AWS selon le modèle de responsabilité partagée AWS ?
    - A. Sécuriser les régions et les emplacements périphériques.
    - B. Effectuer des tâches d'audit.
    - C. Surveiller l'utilisation des ressources AWS.
    - D. Sécuriser l'accès aux ressources AWS.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Sécuriser les régions et les emplacements périphériques** : AWS est responsable de la sécurité de l'infrastructure physique (centres de données, réseaux, matériel).
    - **Autres options incorrectes** ❌ :
      - **B. Effectuer des tâches d'audit** : Le client est responsable de l'audit de ses applications et données.
      - **C. Surveiller l'utilisation des ressources AWS** : Le client utilise des services comme CloudWatch pour surveiller ses ressources.
      - **D. Sécuriser l'accès aux ressources AWS** : Le client gère les politiques IAM pour contrôler l'accès.
    </details>

35. Lequel des plans de support AWS suivants donne accès uniquement aux sept vérifications de base d'AWS Trusted Advisor ?
    - A. Support Business & Enterprise.
    - B. Support Basic & Developer.
    - C. Support Developer & Enterprise.
    - D. Support Developer & Business.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Support Basic & Developer** : Seuls les plans Basic et Developer n'ont accès qu'aux 7 vérifications de base de Trusted Advisor. Les plans Business et Enterprise ont accès à toutes les vérifications.
    - **Autres options incorrectes** ❌ :
      - **A. Support Business & Enterprise** : Ces plans donnent accès à toutes les vérifications.
      - **C. Support Developer & Enterprise** : Developer n'a que les vérifications de base, Enterprise a toutes.
      - **D. Support Developer & Business** : Developer n'a que les vérifications de base, Business a toutes.
    </details>

36. Lequel des éléments suivants N'EST PAS un avantage d'utiliser AWS Lambda ?
    - A. AWS Lambda exécute du code sans provisionner ni gérer de serveurs.
    - B. AWS Lambda fournit une capacité de calcul redimensionnable dans le cloud.
    - C. Il n'y a pas de frais lorsque votre code AWS Lambda ne s'exécute pas.
    - D. AWS Lambda peut être appelé directement depuis n'importe quelle application mobile.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ (celle qui n'est PAS un avantage) :
      - **D. AWS Lambda peut être appelé directement depuis n'importe quelle application mobile** : Lambda ne peut pas être appelé directement depuis une application mobile sans une API Gateway ou un autre service intermédiaire pour la sécurité et la gestion.
    - **Autres options incorrectes** ❌ (celles qui SONT des avantages) :
      - **A. AWS Lambda exécute du code sans provisionner ni gérer de serveurs** : Vrai, c'est la définition du serverless.
      - **B. AWS Lambda fournit une capacité de calcul redimensionnable dans le cloud** : Vrai, Lambda met à l'échelle automatiquement.
      - **C. Il n'y a pas de frais lorsque votre code AWS Lambda ne s'exécute pas** : Vrai, vous payez uniquement pour le temps d'exécution.
    </details>

37. Comment AWS aide-t-il les clients à atteindre la conformité dans le cloud ?
    - A. Il n'est pas possible de répondre aux exigences de conformité réglementaire dans le Cloud.
    - B. AWS applique les normes de sécurité cloud les plus courantes et est responsable de la conformité aux lois et réglementations applicables des clients.
    - C. AWS dispose de nombreuses certifications d'assurance courantes telles que ISO 9001 et HIPAA.
    - D. De nombreux services AWS sont évalués régulièrement pour se conformer aux lois et réglementations locales.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS dispose de nombreuses certifications d'assurance courantes telles que ISO 9001 et HIPAA** : AWS obtient des certifications de conformité pour son infrastructure, ce qui aide les clients dans leurs propres efforts de conformité.
    - **Autres options incorrectes** ❌ :
      - **A. Il n'est pas possible de répondre aux exigences de conformité réglementaire dans le Cloud** : Faux, de nombreux clients atteignent la conformité sur AWS.
      - **B. AWS applique les normes de sécurité cloud les plus courantes...** : AWS est responsable de la sécurité de l'infrastructure, mais le client est responsable de la conformité de ses applications et données.
      - **D. De nombreux services AWS sont évalués régulièrement...** : C'est vrai, mais l'option C est plus précise et complète.
    </details>

38. Qui est responsable de la mise à l'échelle d'une base de données DynamoDB dans le modèle de responsabilité partagée AWS ?
    - A. Votre équipe de sécurité.
    - B. Votre équipe de développement.
    - C. AWS.
    - D. Votre équipe DevOps interne.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS** : DynamoDB est un service entièrement managé ; AWS gère la mise à l'échelle automatique de la capacité de lecture/écriture et du stockage.
    - **Autres options incorrectes** ❌ :
      - **A. Votre équipe de sécurité** : Non, la mise à l'échelle est gérée par AWS.
      - **B. Votre équipe de développement** : Non, la mise à l'échelle est gérée par AWS.
      - **D. Votre équipe DevOps interne** : Non, la mise à l'échelle est gérée par AWS.
    </details>

39. Vous travaillez comme développeur d'applications web. Vous rencontrez actuellement des problèmes de lecture multimédia sur les appareils mobiles car votre format multimédia n'est pas pris en charge. Lequel des services AWS suivants peut vous aider à convertir votre média dans un autre format ?
    - A. Amazon Elastic Transcoder.
    - B. Amazon Pinpoint.
    - C. Amazon S3.
    - D. Amazon Rekognition.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon Elastic Transcoder** : Service de transcodage de médias qui convertit les fichiers multimédias d'un format à un autre.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Pinpoint** : Service d'engagement et d'analyse des utilisateurs.
      - **C. Amazon S3** : Service de stockage d'objets, pas de transcodage.
      - **D. Amazon Rekognition** : Service d'analyse d'images et de vidéos basé sur l'IA.
    </details>

40. Quels sont les avantages du service AWS Organizations ? (Choisissez DEUX)
    - A. Contrôler l'accès aux services AWS.
    - B. Aider les organisations à concevoir et maintenir un chemin accéléré vers une adoption réussie du cloud.
    - C. Gérer les méthodes de paiement de votre organisation.
    - D. Aider l'organisation à atteindre les résultats commerciaux souhaités avec AWS.
    - E. Consolider la facturation sur plusieurs comptes AWS.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Contrôler l'accès aux services AWS** : Grâce aux politiques de contrôle de service (SCP), vous pouvez restreindre les services et actions autorisés dans les comptes membres.
      - **E. Consolider la facturation sur plusieurs comptes AWS** : La facturation consolidée regroupe les frais de tous les comptes membres.
    - **Autres options incorrectes** ❌ :
      - **B. Aider les organisations à concevoir et maintenir un chemin accéléré...** : C'est le rôle d'AWS Control Tower ou des partenaires AWS.
      - **C. Gérer les méthodes de paiement de votre organisation** : La gestion des méthodes de paiement se fait dans le compte de facturation, mais pas spécifiquement une fonctionnalité d'Organizations.
      - **D. Aider l'organisation à atteindre les résultats commerciels souhaités avec AWS** : Trop générique, pas une fonctionnalité spécifique d'Organizations.
    </details>

41. Quel service AWS permet de construire un entrepôt de données dans le cloud ?
    - A. AWS Shield.
    - B. Amazon Redshift.
    - C. Amazon RDS.
    - D. Amazon Comprehend.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon Redshift** : Entrepôt de données petaoctet-scale entièrement managé.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Shield** : Service de protection DDoS.
      - **C. Amazon RDS** : Service de base de données relationnelle pour les transactions, pas l'analyse de données à grande échelle.
      - **D. Amazon Comprehend** : Service de traitement du langage naturel (NLP).
    </details>

42. Quel service AWS permet d'acheter des solutions logicielles et des services tiers qui s'exécutent sur des ressources AWS ?
    - A. AWS Application Discovery service.
    - B. Amazon DevPay.
    - C. AWS Marketplace.
    - D. Resource Groups.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Marketplace** : Catalogue numérique avec des logiciels tiers préconfigurés qui s'exécutent sur AWS.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Application Discovery service** : Aide à planifier les migrations en découvrant les applications sur site.
      - **B. Amazon DevPay** : Ancien service de facturation pour les développeurs, maintenant remplacé par AWS Marketplace.
      - **D. Resource Groups** : Pour organiser et gérer les ressources AWS.
    </details>

43. Lequel des services suivants est un système de gestion de référentiel AWS qui permet de stocker, versionner et gérer votre code d'application ?
    - A. AWS CodePipeline.
    - B. AWS CodeCommit.
    - C. AWS X-Ray.
    - D. Amazon Inspector.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS CodeCommit** : Service de contrôle de source Git entièrement managé pour héberger des dépôts de code privés.
    - **Autres options incorrectes** ❌ :
      - **A. AWS CodePipeline** : Service d'intégration et de livraison continues (CI/CD).
      - **C. AWS X-Ray** : Service de traçage distribué pour les applications.
      - **D. Amazon Inspector** : Service d'évaluation de sécurité automatisé.
    </details>

44. Quel service AWS peut être utilisé pour acheminer les utilisateurs finaux vers la région AWS la plus proche afin de réduire la latence ?
    - A. Amazon Cognito.
    - B. AWS Systems Manager.
    - C. AWS Cloud9.
    - D. Amazon Route 53.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon Route 53** : Service DNS qui propose le routage basé sur la latence pour diriger les utilisateurs vers la région avec la latence la plus faible.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Cognito** : Service de gestion des identités utilisateur.
      - **B. AWS Systems Manager** : Service de gestion des ressources AWS et hybrides.
      - **C. AWS Cloud9** : Environnement de développement intégré (IDE) cloud.
    </details>

45. Quelle fonctionnalité permet aux utilisateurs de se connecter à leurs comptes AWS avec leurs identifiants d'entreprise existants ?
    - A. Fédération (Federation).
    - B. Clés d'accès.
    - C. Permissions IAM.
    - D. Règles WAF.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Fédération** : Permet l'authentification unique (SSO) en utilisant des identités externes (comme Active Directory) via des standards comme SAML.
    - **Autres options incorrectes** ❌ :
      - **B. Clés d'accès** : Pour l'accès programmatique, pas pour la connexion avec des identifiants d'entreprise.
      - **C. Permissions IAM** : Définissent ce qu'un utilisateur peut faire, pas comment il s'authentifie.
      - **D. Règles WAF** : Pour la sécurité des applications web, pas l'authentification.
    </details>

46. Selon le modèle de responsabilité partagée AWS, quels sont les contrôles que les clients héritent entièrement d'AWS ? (Choisissez DEUX)
    - A. Sensibilisation et formation.
    - B. Contrôles des communications.
    - C. Contrôles de sécurité des centres de données.
    - D. Contrôles environnementaux.
    - E. Gestion de la configuration des ressources.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Contrôles de sécurité des centres de données** : AWS est responsable de la sécurité physique des centres de données.
      - **D. Contrôles environnementaux** : AWS est responsable des contrôles environnementaux (climatisation, alimentation, etc.).
    - **Autres options incorrectes** ❌ :
      - **A. Sensibilisation et formation** : Responsabilité du client.
      - **B. Contrôles des communications** : Partagé ; AWS sécurise le réseau sous-jacent, le client sécurise ses données en transit.
      - **E. Gestion de la configuration des ressources** : Partagé ; AWS gère la configuration de l'infrastructure, le client gère la configuration de ses ressources.
    </details>

47. À quoi pouvez-vous accéder en visitant l'URL : <http://status.aws.amazon.com> ?
    - A. Tableau de bord de facturation AWS.
    - B. Tableau de bord des coûts AWS.
    - C. Tableau de bord de l'état des services AWS (AWS Service Health Dashboard).
    - D. Tableau de bord de sécurité AWS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Tableau de bord de l'état des services AWS** : Affiche l'état de tous les services AWS dans toutes les régions.
    - **Autres options incorrectes** ❌ :
      - **A. Tableau de bord de facturation AWS** : Accessible via la console AWS.
      - **B. Tableau de bord des coûts AWS** : Accessible via AWS Cost Explorer.
      - **D. Tableau de bord de sécurité AWS** : Accessible via AWS Security Hub.
    </details>

48. Lequel des procédures suivantes peut réduire la latence lorsque vos utilisateurs finaux récupèrent des données ? (Choisissez DEUX)
    - A. Stocker les ressources multimédias dans la région la plus proche de vos utilisateurs finaux.
    - B. Stocker les ressources multimédias sur un volume EBS supplémentaire et augmenter la capacité de votre serveur.
    - C. Répliquer les ressources multimédias sur au moins deux zones de disponibilité.
    - D. Réduire la taille des ressources multimédias à l'aide d'Amazon Elastic Transcoder.
    - E. Stocker les ressources multimédias dans S3 et utiliser CloudFront pour distribuer ces ressources.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Stocker les ressources multimédias dans la région la plus proche de vos utilisateurs finaux** : Réduit la distance réseau et donc la latence.
      - **E. Stocker les ressources multimédias dans S3 et utiliser CloudFront pour distribuer ces ressources** : CloudFront met en cache le contenu sur des emplacements périphériques mondiaux, réduisant la latence.
    - **Autres options incorrectes** ❌ :
      - **B. Stocker les ressources multimédias sur un volume EBS supplémentaire...** : N'affecte pas directement la latence pour les utilisateurs distants.
      - **C. Répliquer les ressources multimédias sur au moins deux zones de disponibilité** : Améliore la disponibilité, pas la latence.
      - **D. Réduire la taille des ressources multimédias...** : Peut réduire le temps de téléchargement, mais ne réduit pas la latence réseau.
    </details>

49. Lesquels des éléments suivants font partie des sept principes de conception pour la sécurité dans le cloud ? (Choisissez DEUX)
    - A. Utiliser des techniques de surveillance manuelle pour protéger vos ressources AWS.
    - B. Utiliser des rôles IAM pour accorder un accès temporaire au lieu d'identifiants à long terme.
    - C. Mettre à l'échelle horizontalement pour se protéger des défaillances.
    - D. Activer la traçabilité en temps réel.
    - E. Ne jamais stocker de données sensibles dans le cloud.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Utiliser des rôles IAM pour accorder un accès temporaire au lieu d'identifiants à long terme** : Réduit le risque de compromission des identifiants.
      - **D. Activer la traçabilité en temps réel** : Permet de détecter et répondre rapidement aux incidents de sécurité.
    - **Autres options incorrectes** ❌ :
      - **A. Utiliser des techniques de surveillance manuelle** : L'automatisation est recommandée.
      - **C. Mettre à l'échelle horizontalement pour se protéger des défaillances** : C'est un principe de fiabilité, pas spécifiquement de sécurité.
      - **E. Ne jamais stocker de données sensibles dans le cloud** : Les données sensibles peuvent être stockées en toute sécurité dans le cloud avec le chiffrement et les contrôles appropriés.
    </details>

50. Une entreprise migre des charges de travail de production vers AWS et s'inquiète de la gestion des coûts entre différents départements. Quelle option l'entreprise doit-elle mettre en œuvre pour catégoriser et suivre les dépenses AWS ?
    - A. Utiliser le service AWS Pricing Calculator pour surveiller les coûts encourus par chaque département.
    - B. Utiliser Amazon Aurora pour prévoir les dépenses AWS en fonction de l'utilisation.
    - C. Appliquer des balises d'allocation des coûts pour segmenter les coûts AWS par différents projets et départements.
    - D. Configurer l'API AWS Price List pour recevoir automatiquement des mises à jour de facturation pour chaque département.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Appliquer des balises d'allocation des coûts** : Les balises permettent de catégoriser les ressources et de suivre les coûts par département, projet, etc.
    - **Autres options incorrectes** ❌ :
      - **A. Utiliser le service AWS Pricing Calculator** : Outil d'estimation des coûts futurs, pas pour suivre les coûts réels.
      - **B. Utiliser Amazon Aurora** : Base de données relationnelle, pas de gestion des coûts.
      - **D. Configurer l'API AWS Price List** : Fournit les prix des services AWS, pas la facturation par département.
    </details>