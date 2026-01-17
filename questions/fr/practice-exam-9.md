---
layout: exam
---

# Examen de pratique 9

1. Un administrateur doit déployer rapidement une solution informatique populaire et commencer à l'utiliser immédiatement. Où l'administrateur peut-il trouver de l'aide ?
    - A. Documentation AWS Well-Architected Framework.
    - B. Amazon CloudFront.
    - C. AWS CodeCommit.
    - D. AWS Quick Start reference deployments.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Quick Start reference deployments** : Ce sont des modèles CloudFormation préconstruits qui permettent de déployer rapidement des solutions logicielles populaires sur AWS avec des architectures conformes aux meilleures pratiques.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Well-Architected Framework documentation** : Fournit des conseils pour concevoir des architectures sécures et efficaces, mais ne déploie pas de solutions.
      - **B. Amazon CloudFront** : Service CDN pour la diffusion de contenu.
      - **C. AWS CodeCommit** : Service de gestion de code source.
    </details>

2. Quel est l'un des avantages d'Amazon Relational Database Service (Amazon RDS) ?
    - A. Il simplifie les tâches d'administration des bases de données relationnelles.
    - B. Il offre une fiabilité et une durabilité de 99,99999999999 %.
    - C. Il met automatiquement à l'échelle les bases de données en fonction de la charge.
    - D. Il permet aux utilisateurs d'ajuster dynamiquement les ressources CPU et RAM.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Il simplifie les tâches d'administration des bases de données relationnelles** : Amazon RDS est un service managé qui automatise les tâches comme les sauvegardes, les correctifs et la mise à l'échelle.
    - **Autres options incorrectes** ❌ :
      - **B. Fiabilité de 99,99999999999%** : Ce niveau de durabilité est celui d'Amazon S3, pas de RDS.
      - **C. Mise à l'échelle automatique** : RDS peut mettre à l'échelle le stockage (Aurora) et les instances (manuellement ou via Auto Scaling), mais pas entièrement automatique pour toutes les charges.
      - **D. Ajustement dynamique CPU/RAM** : Pour changer CPU/RAM, il faut modifier le type d'instance (manuellement).
    </details>

3. Lequel des services cloud AWS suivants peut être utilisé pour exécuter une base de données relationnelle gérée par le client ?
    - A. Amazon EC2.
    - B. Amazon Route 53.
    - C. Amazon ElastiCache.
    - D. Amazon DynamoDB.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon EC2** : Permet d'installer et de gérer votre propre base de données relationnelle (comme MySQL, PostgreSQL) sur une instance virtuelle.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Route 53** : Service DNS.
      - **C. Amazon ElastiCache** : Service de cache en mémoire, pas de base de données relationnelle.
      - **D. Amazon DynamoDB** : Base de données NoSQL, pas relationnelle.
    </details>

4. Un utilisateur prévoit de lancer deux instances Amazon EC2 supplémentaires pour augmenter la disponibilité. Quelle action doit-il entreprendre ?
    - A. Lancer les instances dans plusieurs zones de disponibilité d'une seule région AWS.
    - B. Lancer les instances en tant qu'instances réservées EC2 dans la même région AWS et la même zone de disponibilité.
    - C. Lancer les instances dans plusieurs régions AWS mais dans la même zone de disponibilité.
    - D. Lancer les instances en tant qu'instances Spot EC2 dans la même région AWS mais dans différentes zones de disponibilité.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Lancer les instances dans plusieurs zones de disponibilité** : Cela assure la redondance et la haute disponibilité en cas de défaillance d'une zone.
    - **Autres options incorrectes** ❌ :
      - **B. Instances réservées dans la même AZ** : Les instances réservées sont un modèle de facturation, pas une stratégie de haute disponibilité.
      - **C. Plusieurs régions, même AZ** : La haute disponibilité dans une région est mieux assurée par plusieurs AZ, pas plusieurs régions (plus complexe et coûteux).
      - **D. Instances Spot dans différentes AZ** : Les instances Spot peuvent être interrompues, ce qui ne garantit pas la haute disponibilité.
    </details>

5. Lequel des éléments suivants peut limiter l'accès aux compartiments Amazon Simple Storage Service (Amazon S3) à des utilisateurs spécifiques ?
    - A. Une paire de clés publique et privée.
    - B. Amazon Inspector.
    - C. Politiques AWS Identity and Access Management (IAM).
    - D. Groupes de sécurité.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Politiques IAM** : Permettent de contrôler finement les accès aux ressources AWS, y compris les compartiments S3.
    - **Autres options incorrectes** ❌ :
      - **A. Paire de clés** : Utilisée pour l'authentification SSH ou les clés d'accès API, pas pour les autorisations S3.
      - **B. Amazon Inspector** : Service d'évaluation de sécurité, pas de contrôle d'accès.
      - **D. Groupes de sécurité** : Contrôlent le trafic réseau pour les instances EC2, pas les accès S3.
    </details>

6. Quel service AWS permet aux entreprises de connecter un Amazon VPC à un centre de données sur site ? (Choisissez DEUX)
    - A. AWS VPN.
    - B. Amazon Redshift.
    - C. API Gateway.
    - D. Amazon Direct Connect.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : A, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS VPN** : Établit une connexion sécurisée via Internet entre votre réseau et un VPC.
      - **D. Amazon Direct Connect** : Établit une connexion réseau dédiée entre votre infrastructure et AWS.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Redshift** : Entrepôt de données, pas de connectivité hybride.
      - **C. API Gateway** : Service pour créer, publier et gérer des API.
    </details>

7. Quel service ou quelle fonctionnalité AWS peut être utilisé pour surveiller l'utilisation du CPU ?
    - A. AWS CloudTrail.
    - B. Journaux de flux VPC.
    - C. Amazon CloudWatch.
    - D. AWS Config.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon CloudWatch** : Collecte des métriques de performance, y compris l'utilisation du CPU des instances EC2.
    - **Autres options incorrectes** ❌ :
      - **A. AWS CloudTrail** : Journalise les appels API pour l'audit.
      - **B. Journaux de flux VPC** : Capture des informations sur le trafic IP.
      - **D. AWS Config** : Audite la configuration des ressources.
    </details>

8. Quelle tâche est de la responsabilité d'AWS dans le modèle de responsabilité partagée pour la sécurité et la conformité ?
    - A. Accorder l'accès aux individus et aux services.
    - B. Chiffrer les données en transit.
    - C. Mettre à jour le micrologiciel de l'hôte Amazon EC2.
    - D. Mettre à jour les systèmes d'exploitation.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Mettre à jour le micrologiciel de l'hôte Amazon EC2** : AWS est responsable de la sécurité de l'infrastructure sous-jacente, y compris le matériel et l'hyperviseur.
    - **Autres options incorrectes** ❌ :
      - **A. Accorder l'accès** : Responsabilité du client via IAM.
      - **B. Chiffrer les données en transit** : Partagé ; le client doit activer le chiffrement (HTTPS, TLS).
      - **D. Mettre à jour les systèmes d'exploitation** : Pour les instances EC2, c'est la responsabilité du client.
    </details>

9. Lesquelles des actions suivantes liées à la sécurité sont disponibles gratuitement ?
    - A. Appeler le support AWS.
    - B. Contacter AWS Professional Services pour demander un atelier.
    - C. Accéder aux forums, blogs et livres blancs.
    - D. Suivre des cours AWS dans une université locale.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Accéder aux forums, blogs et livres blancs** : Ces ressources sont gratuites et accessibles à tous.
    - **Autres options incorrectes** ❌ :
      - **A. Appeler le support AWS** : Nécessite un plan de support payant (sauf Basic qui ne donne pas d'accès téléphonique).
      - **B. Contacter AWS Professional Services** : Service payant.
      - **D. Cours AWS à l'université** : Généralement payants.
    </details>

10. Quel service de stockage peut être utilisé comme option à faible coût pour héberger des sites web statiques ?
    - A. Amazon Glacier.
    - B. Amazon DynamoDB.
    - C. Amazon Elastic File System (Amazon EFS).
    - D. Amazon Simple Storage Service (Amazon S3).

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon S3** : Offre un hébergement de site web statique économique, durable et évolutif.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Glacier** : Service d'archivage, pas adapté à l'hébergement web.
      - **B. Amazon DynamoDB** : Base de données NoSQL, pas d'hébergement web.
      - **C. Amazon EFS** : Stockage de fichiers pour instances EC2, pas optimisé pour l'hébergement web statique.
    </details>

11. Selon le modèle de responsabilité partagée d'AWS, quelle est la responsabilité exclusive d'AWS ?
    - A. Sécurité des applications.
    - B. Gestion des emplacements périphériques.
    - C. Gestion des correctifs.
    - D. Données côté client.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Gestion des emplacements périphériques** : AWS est entièrement responsable de l'infrastructure des emplacements périphériques (Edge Locations).
    - **Autres options incorrectes** ❌ :
      - **A. Sécurité des applications** : Responsabilité partagée ; le client sécurise son application.
      - **C. Gestion des correctifs** : Partagé ; AWS corrige l'infrastructure, le client corrige le système d'exploitation invité et les applications.
      - **D. Données côté client** : Responsabilité du client.
    </details>

12. Lesquels des éléments suivants sont des piliers du AWS Well-Architected Framework ? (Choisissez DEUX)
    - A. Zones de disponibilité multiples.
    - B. Efficacité des performances.
    - C. Sécurité.
    - D. Utilisation du chiffrement.
    - E. Haute disponibilité.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : B, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Efficacité des performances** : Utiliser les ressources de manière efficace.
      - **C. Sécurité** : Protéger les informations et les systèmes.
    - **Autres options incorrectes** ❌ :
      - **A. Zones de disponibilité multiples** : C'est une pratique pour la fiabilité, pas un pilier.
      - **D. Utilisation du chiffrement** : C'est une pratique de sécurité, pas un pilier.
      - **E. Haute disponibilité** : Relève du pilier de fiabilité.
    </details>

13. Quel service AWS identifie les groupes de sécurité qui autorisent un accès non restreint aux ressources AWS d'un utilisateur ?
    - A. AWS Trusted Advisor.
    - B. Amazon Inspector.
    - C. Amazon CloudWatch.
    - D. AWS CloudTrail.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Trusted Advisor** : Vérifie les meilleures pratiques, y compris les groupes de sécurité trop permissifs.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Inspector** : Évalue la sécurité des applications.
      - **C. Amazon CloudWatch** : Surveillance des performances.
      - **D. AWS CloudTrail** : Journalisation des activités.
    </details>

14. Quels principes de conception pour l'architecture cloud sont recommandés lors de la refonte d'une grande application monolithique ? (Choisissez DEUX)
    - A. Utiliser une surveillance manuelle.
    - B. Utiliser des serveurs fixes.
    - C. Mettre en œuvre un découplage lâche.
    - D. S'appuyer sur des composants individuels.
    - E. Concevoir pour l'évolutivité.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : C, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Découplage lâche** : Permet aux composants d'évoluer et de tomber en panne indépendamment.
      - **E. Concevoir pour l'évolutivité** : Permet à l'application de gérer des charges variables.
    - **Autres options incorrectes** ❌ :
      - **A. Surveillance manuelle** : Non recommandé ; l'automatisation est préférée.
      - **B. Serveurs fixes** : Contraire de l'élasticité du cloud.
      - **D. S'appuyer sur des composants individuels** : Cela crée des points de défaillance unique.
    </details>

15. Lors de la conception d'applications cloud, lequel des éléments suivants est un principe de conception clé ?
    - A. Utiliser la plus grande instance possible.
    - B. Provisionner la capacité pour la charge de pointe.
    - C. Utiliser le processus de développement Scrum.
    - D. Mettre en œuvre l'élasticité.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Mettre en œuvre l'élasticité** : Ajuster automatiquement les ressources en fonction de la demande.
    - **Autres options incorrectes** ❌ :
      - **A. Plus grande instance possible** : Peut entraîner un gaspillage de ressources.
      - **B. Provisionner pour la charge de pointe** : Coûteux ; mieux vaut utiliser l'élasticité.
      - **C. Processus Scrum** : Méthode de développement, pas un principe d'architecture cloud.
    </details>

16. Une entreprise a déployé plusieurs bases de données relationnelles sur des instances Amazon EC2. Chaque mois, le fournisseur du logiciel de base de données publie de nouveaux correctifs de sécurité qui doivent être appliqués aux bases de données. Quelle est la façon la PLUS efficace d'appliquer les correctifs de sécurité ?
    - A. Se connecter à chaque instance de base de données mensuellement et télécharger et appliquer les correctifs de sécurité nécessaires depuis le fournisseur.
    - B. Activer la mise à jour automatique des correctifs pour les instances à l'aide de la console Amazon RDS.
    - C. Dans AWS Config, configurer une règle pour les instances et le niveau de correctif requis.
    - D. Utiliser AWS Systems Manager pour automatiser l'application des correctifs de base de données selon un calendrier.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Systems Manager** : Permet d'automatiser les tâches de gestion comme l'application de correctifs sur un groupe d'instances.
    - **Autres options incorrectes** ❌ :
      - **A. Manuellement chaque mois** : Fastidieux et sujet aux erreurs.
      - **B. Console Amazon RDS** : Ces bases de données sont sur EC2, pas sur RDS.
      - **C. AWS Config** : Service d'audit, pas d'automatisation de correctifs.
    </details>

17. Quel mécanisme permet aux développeurs d'accéder aux services AWS depuis le code d'application ?
    - A. AWS Software Development Kit.
    - B. AWS Management Console.
    - C. AWS CodePipeline.
    - D. AWS Config.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS SDK** : Fournit des API pour interagir avec AWS dans divers langages de programmation.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Management Console** : Interface web, pas d'accès programmatique.
      - **C. AWS CodePipeline** : Service de livraison continue.
      - **D. AWS Config** : Service d'audit.
    </details>

18. Quelle fonctionnalité AWS réduira le coût total de possession (TCO) du client ?
    - A. Modèle de responsabilité partagée pour la sécurité.
    - B. Monolocation (single tenancy).
    - C. Calcul élastique.
    - D. Chiffrement.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Calcul élastique** : Permet de payer uniquement pour les ressources utilisées, réduisant ainsi les coûts.
    - **Autres options incorrectes** ❌ :
      - **A. Responsabilité partagée** : Répartit les responsabilités de sécurité, mais ne réduit pas directement le TCO.
      - **B. Monolocation** : Augmente les coûts (instances dédiées plus chères).
      - **D. Chiffrement** : Important pour la sécurité, mais peut ajouter des coûts de gestion.
    </details>

19. Lequel des éléments suivants est un avantage de l'utilisation du cloud AWS ?
    - A. Une sécurité permissive supprime la charge administrative.
    - B. Capacité à se concentrer sur des activités génératrices de revenus.
    - C. Contrôle du matériel réseau cloud.
    - D. Choix de fournisseurs de matériel cloud spécifiques.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Se concentrer sur des activités génératrices de revenus** : AWS gère l'infrastructure, permettant aux entreprises de se concentrer sur leur cœur de métier.
    - **Autres options incorrectes** ❌ :
      - **A. Sécurité permissive** : Faux ; la sécurité est une responsabilité partagée.
      - **C. Contrôle du matériel réseau** : AWS gère le matériel sous-jacent.
      - **D. Choix de fournisseurs de matériel** : AWS utilise son propre matériel standardisé.
    </details>

20. Lesquelles des catégories suivantes font partie d'AWS Trusted Advisor ? (Choisissez DEUX)
    - A. Tolérance aux pannes.
    - B. Utilisation des instances.
    - C. Infrastructure.
    - D. Performances.
    - E. Capacité de stockage.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : A, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Tolérance aux pannes** : Recommandations pour améliorer la résilience.
      - **D. Performances** : Optimisation des performances des ressources.
    - **Autres options incorrectes** ❌ :
      - **B. Utilisation des instances** : Non, les catégories sont : coût, performance, sécurité, tolérance aux pannes, limites de service.
      - **C. Infrastructure** : Trop vague.
      - **E. Capacité de stockage** : Fait partie des recommandations de coût ou de performance.
    </details>

21. Qu'est-ce qu'Amazon CloudWatch ?
    - A. Un dépôt de code avec des fonctionnalités de build personnalisables et de validation d'équipe.
    - B. Un dépôt de métriques avec des seuils et canaux de notification personnalisables.
    - C. Un dépôt de configuration de sécurité avec analyse des menaces.
    - D. Un dépôt de règles de pare-feu d'application web avec des fonctionnalités de prévention automatisée des vulnérabilités.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Dépôt de métriques avec notifications** : CloudWatch collecte des métriques, permet de définir des alarmes et d'envoyer des notifications.
    - **Autres options incorrectes** ❌ :
      - **A. Dépôt de code** : Décrit AWS CodeCommit.
      - **C. Configuration de sécurité** : Décrit AWS Security Hub ou Amazon Inspector.
      - **D. Pare-feu d'application web** : Décrit AWS WAF.
    </details>

22. Selon le modèle de responsabilité partagée, lesquelles des activités suivantes sont de la responsabilité du client ? (Choisissez DEUX)
    - A. Appliquer des correctifs aux composants du système d'exploitation pour Amazon Relational Database Server (Amazon RDS).
    - B. Chiffrer les données côté client.
    - C. Former le personnel du centre de données.
    - D. Configurer les listes de contrôle d'accès réseau (ACL).
    - E. Maintenir les contrôles environnementaux dans un centre de données.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : B, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Chiffrer les données côté client** : Le client décide du chiffrement de ses données.
      - **D. Configurer les NACL** : Le client configure les règles de filtrage réseau dans son VPC.
    - **Autres options incorrectes** ❌ :
      - **A. Correctifs pour RDS** : Pour RDS managé, AWS applique les correctifs du moteur de base de données.
      - **C. Former le personnel du centre de données** : Responsabilité d'AWS.
      - **E. Contrôles environnementaux** : Responsabilité d'AWS.
    </details>

23. Selon le modèle de responsabilité partagée, lequel des éléments suivants est un contrôle partagé entre un client et AWS ?
    - A. Contrôles physiques.
    - B. Gestion des correctifs.
    - C. Sécurité de la zone.
    - D. Audit du centre de données.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Gestion des correctifs** : AWS corrige l'infrastructure, le client corrige le système d'exploitation invité et les applications.
    - **Autres options incorrectes** ❌ :
      - **A. Contrôles physiques** : Responsabilité exclusive d'AWS.
      - **C. Sécurité de la zone** : Responsabilité d'AWS.
      - **D. Audit du centre de données** : Responsabilité d'AWS.
    </details>

24. Quel service AWS est utilisé pour payer les factures AWS et surveiller l'utilisation et les coûts budgétés ?
    - A. AWS Billing and Cost Management.
    - B. Facturation consolidée.
    - C. Amazon CloudWatch.
    - D. Amazon QuickSight.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Billing and Cost Management** : Portail pour gérer la facturation, les paiements et les rapports de coûts.
    - **Autres options incorrectes** ❌ :
      - **B. Facturation consolidée** : Fonctionnalité d'AWS Organizations, pas un service complet de gestion des coûts.
      - **C. Amazon CloudWatch** : Surveillance des performances, pas de facturation.
      - **D. Amazon QuickSight** : Service de business intelligence.
    </details>

25. Comment les clients bénéficient-ils des économies d'échelle massives d'Amazon ?
    - A. Des réductions de prix périodiques résultant des efficacités opérationnelles d'Amazon.
    - B. De nouveaux types d'instances Amazon EC2 fournissant le matériel le plus récent.
    - C. La capacité de monter et descendre en puissance lorsque nécessaire.
    - D. Une fiabilité accrue du matériel sous-jacent des instances Amazon EC2.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Réductions de prix périodiques** : AWS transfère les économies d'échelle aux clients par des baisses de prix.
    - **Autres options incorrectes** ❌ :
      - **B. Nouveaux types d'instances** : Améliorent les performances, mais ne sont pas directement liés aux économies d'échelle.
      - **C. Capacité de mise à l'échelle** : C'est l'élasticité, pas une économie d'échelle.
      - **D. Fiabilité accrue** : Améliore la disponibilité, mais pas une économie d'échelle.
    </details>

26. Quelle fonctionnalité AWS permet à une entreprise de profiter des paliers d'utilisation pour les services sur plusieurs comptes membres ?
    - A. Politiques de contrôle de service (SCP).
    - B. Facturation consolidée.
    - C. Instances réservées avec paiement total initial.
    - D. AWS Cost Explorer.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Facturation consolidée** : Combine l'utilisation de tous les comptes pour bénéficier des remises volume.
    - **Autres options incorrectes** ❌ :
      - **A. SCP** : Contrôle les autorisations, pas les remises.
      - **C. Instances réservées avec paiement total initial** : Modèle d'achat, pas de regroupement de comptes.
      - **D. AWS Cost Explorer** : Outil d'analyse des coûts, pas de regroupement pour remises.
    </details>

27. Quels services AWS peuvent être utilisés pour étendre une architecture sur site vers le cloud AWS ? (Choisissez DEUX)
    - A. Amazon EBS.
    - B. Amazon Connect.
    - C. AWS Storage Gateway.
    - D. Amazon CloudFront.
    - E. AWS Direct Connect.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : C, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. AWS Storage Gateway** : Connecte les environnements sur site au stockage cloud.
      - **E. AWS Direct Connect** : Connexion réseau dédiée entre le centre de données et AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EBS** : Stockage par blocs pour EC2, pas d'extension hybride.
      - **B. Amazon Connect** : Centre de contact cloud.
      - **D. Amazon CloudFront** : CDN, pas d'extension hybride.
    </details>

28. Lequel des services suivants mettra automatiquement à l'échelle avec une augmentation attendue du trafic web ?
    - A. AWS CodePipeline.
    - B. Elastic Load Balancing.
    - C. Amazon EBS.
    - D. AWS Direct Connect.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Elastic Load Balancing** : Répartit le trafic et peut être combiné avec Auto Scaling pour ajuster le nombre d'instances.
    - **Autres options incorrectes** ❌ :
      - **A. AWS CodePipeline** : Livraison continue.
      - **C. Amazon EBS** : Stockage, pas de mise à l'échelle automatique.
      - **D. AWS Direct Connect** : Connexion réseau, pas de mise à l'échelle.
    </details>

29. Quel service fournit une quantité virtuellement illimitée de stockage d'objets en ligne hautement durable ?
    - A. Amazon Redshift.
    - B. Amazon Elastic File System (Amazon EFS).
    - C. Amazon Elastic Container Service (Amazon ECS).
    - D. Amazon S3.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon S3** : Stockage d'objets illimité avec une durabilité de 99,999999999 %.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Redshift** : Entrepôt de données.
      - **B. Amazon EFS** : Stockage de fichiers, pas d'objets.
      - **C. Amazon ECS** : Service de conteneurs.
    </details>

30. Quelle fonctionnalité AWS un client doit-il utiliser pour atteindre une haute disponibilité d'une application ?
    - A. AWS Direct Connect.
    - B. Zones de disponibilité.
    - C. Centres de données.
    - D. Amazon Virtual Private Cloud (Amazon VPC).

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Zones de disponibilité** : Déployer sur plusieurs AZ protège contre les défaillances d'une seule zone.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Direct Connect** : Connexion réseau, pas de haute disponibilité intrinsèque.
      - **C. Centres de données** : Trop générique ; les AZ sont des centres de données distincts.
      - **D. Amazon VPC** : Réseau privé virtuel, nécessaire mais pas suffisant pour la haute disponibilité.
    </details>

31. Quel service ou quelle fonctionnalité AWS peut améliorer la sécurité réseau en bloquant les requêtes d'un réseau particulier pour une application web sur AWS ? (Choisissez DEUX)
    - A. AWS WAF.
    - B. AWS Trusted Advisor.
    - C. AWS Direct Connect.
    - D. AWS Organizations.
    - E. Listes de contrôle d'accès réseau (Network ACLs).

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : A, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS WAF** : Pare-feu d'application web qui peut bloquer des adresses IP spécifiques.
      - **E. Network ACLs** : Contrôle le trafic au niveau du sous-réseau basé sur les règles d'adresse IP.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Trusted Advisor** : Fournit des recommandations, pas de filtrage.
      - **C. AWS Direct Connect** : Connexion réseau, pas de filtrage.
      - **D. AWS Organizations** : Gestion de comptes multiples.
    </details>

32. Lequel des éléments suivants est un principe de conception architecturale cloud ?
    - A. Monter en puissance, pas en extensibilité.
    - B. Découpler les composants de manière lâche.
    - C. Construire des systèmes monolithiques.
    - D. Utiliser des logiciels de base de données commerciaux.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Découplage lâche** : Principe clé pour la résilience et l'évolutivité.
    - **Autres options incorrectes** ❌ :
      - **A. Monter en puissance** : La mise à l'échelle horizontale (scale out) est préférée dans le cloud.
      - **C. Systèmes monolithiques** : Non recommandés ; les microservices sont préférés.
      - **D. Logiciels de base de données commerciaux** : Choix technique, pas un principe de conception cloud.
    </details>

33. Quel service permet l'audit des risques en surveillant et en journalisant continuellement l'activité du compte, y compris les actions des utilisateurs dans la console AWS Management Console et les SDK AWS ?
    - A. Amazon CloudWatch.
    - B. AWS CloudTrail.
    - C. AWS Config.
    - D. AWS Health.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS CloudTrail** : Journalise les appels d'API et les actions de gestion pour l'audit et la conformité.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon CloudWatch** : Surveillance des performances.
      - **C. AWS Config** : Audite la configuration des ressources.
      - **D. AWS Health** : Fournit des informations sur l'état des services AWS.
    </details>

34. Où peut-on télécharger les rapports de conformité et de certification d'AWS ?
    - A. AWS Artifact.
    - B. AWS Concierge.
    - C. AWS Certificate Manager.
    - D. AWS Trusted Advisor.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Artifact** : Portail central pour les rapports de conformité et les accords.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Concierge** : Service de support pour les clients Enterprise.
      - **C. AWS Certificate Manager** : Gère les certificats SSL/TLS.
      - **D. AWS Trusted Advisor** : Recommandations d'optimisation.
    </details>

35. Les avantages financiers de l'utilisation d'AWS sont : (Choisissez DEUX)
    - A. Réduction du coût total de possession (TCO).
    - B. Augmentation des dépenses d'investissement (capex).
    - C. Réduction des dépenses d'exploitation (opex).
    - D. Plans de paiement différé pour les startups.
    - E. Lignes de crédit commercial pour les startups.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Réduction du TCO** : Moins de coûts d'infrastructure et de maintenance.
      - **C. Réduction de l'opex** : Passage d'un modèle CapEx à un modèle OpEx.
    - **Autres options incorrectes** ❌ :
      - **B. Augmentation du capex** : Faux ; le cloud réduit le capex.
      - **D. Paiement différé** : Non, AWS facture à l'usage.
      - **E. Lignes de crédit** : Non fourni par AWS.
    </details>

36. Quel service AWS peut servir un site web statique ?
    - A. Amazon S3.
    - B. Amazon Route 53.
    - C. Amazon QuickSight.
    - D. AWS X-Ray.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon S3** : Hébergement de sites web statiques avec une option intégrée.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Route 53** : Service DNS, peut pointer vers un site S3.
      - **C. Amazon QuickSight** : Service de business intelligence.
      - **D. AWS X-Ray** : Traçage d'applications.
    </details>

37. Quels sont les avantages de l'utilisation du cloud AWS pour les entreprises ayant des clients dans de nombreux pays à travers le monde ? (Choisissez DEUX)
    - A. Les entreprises peuvent déployer des applications dans plusieurs régions AWS pour réduire la latence.
    - B. Amazon Translate traduit automatiquement les interfaces de sites web tiers en plusieurs langues.
    - C. Amazon CloudFront a de nombreux emplacements périphériques dans le monde pour réduire la latence.
    - D. Amazon Comprehend permet aux utilisateurs de créer des applications qui peuvent répondre aux requêtes des utilisateurs dans de nombreuses langues.
    - E. Elastic Load Balancing peut distribuer le trafic web des applications vers plusieurs régions AWS dans le monde, ce qui réduit la latence.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Déploiement multi-régions** : Place les ressources plus près des utilisateurs finaux.
      - **C. CloudFront edge locations** : Met en cache le contenu près des utilisateurs.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Translate** : Service de traduction, mais ne traduit pas automatiquement les interfaces de sites web tiers.
      - **D. Amazon Comprehend** : Traitement du langage naturel, pas de réduction de latence.
      - **E. Elastic Load Balancing** : Répartit le trafic au sein d'une région, pas entre régions (sauf avec Global Accelerator).
    </details>

38. Lesquels des éléments suivants sont les principaux composants de l'infrastructure mondiale d'AWS ? (Choisissez DEUX)
    - A. Groupes de ressources.
    - B. Zones de disponibilité.
    - C. Groupes de sécurité.
    - D. Régions.
    - E. Amazon Machine Images (AMIs).

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : B, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Zones de disponibilité** : Centres de données isolés dans une région.
      - **D. Régions** : Zones géographiques contenant plusieurs AZ.
    - **Autres options incorrectes** ❌ :
      - **A. Groupes de ressources** : Organisation logique des ressources dans un compte, pas un composant physique.
      - **C. Groupes de sécurité** : Firewall au niveau de l'instance, pas d'infrastructure mondiale.
      - **E. AMIs** : Modèles d'instances EC2, pas d'infrastructure physique.
    </details>

39. Selon le modèle de responsabilité partagée d'AWS, de quoi le client AWS est-il responsable ?
    - A. Contrôles d'accès physiques.
    - B. Chiffrement des données.
    - C. Destruction sécurisée des dispositifs de stockage.
    - D. Gestion des risques environnementaux.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Chiffrement des données** : Le client décide du chiffrement de ses données au repos et en transit.
    - **Autres options incorrectes** ❌ :
      - **A. Contrôles d'accès physiques** : Responsabilité d'AWS.
      - **C. Destruction des dispositifs** : Responsabilité d'AWS.
      - **D. Risques environnementaux** : Responsabilité d'AWS.
    </details>

40. Si chaque service d'une entreprise a son propre compte AWS, quelle est une façon d'activer la facturation consolidée ?
    - A. Utiliser AWS Budgets sur chaque compte pour ne payer que le budget.
    - B. Contacter le support AWS pour une facture mensuelle.
    - C. Créer une organisation AWS à partir du compte payeur et inviter les autres comptes à rejoindre.
    - D. Mettre toutes les factures dans un compartiment Amazon Simple Storage Service (Amazon S3), charger les données dans Amazon Redshift, puis exécuter un rapport de facturation.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Créer une organisation AWS** : AWS Organizations permet la facturation consolidée et la gestion centralisée.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Budgets** : Définit des budgets, ne consolide pas la facturation.
      - **B. Contacter le support** : Impossible ; la facturation consolidée se configure via Organizations.
      - **D. Stocker les factures dans S3** : Analyse manuelle, pas de facturation consolidée automatique.
    </details>

41. Quels coûts sont inclus lors de la comparaison du coût total de possession (TCO) d'AWS avec le TCO sur site ?
    - A. Gestion de projet.
    - B. Licence de logiciel antivirus.
    - C. Sécurité du centre de données.
    - D. Développement logiciel.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Sécurité du centre de données** : Coût important sur site, pris en charge par AWS dans le cloud.
    - **Autres options incorrectes** ❌ :
      - **A. Gestion de projet** : Similaire dans les deux modèles.
      - **B. Licence antivirus** : Coût logiciel, peut exister dans les deux modèles.
      - **D. Développement logiciel** : Non affecté par le choix d'infrastructure.
    </details>

42. Quel est l'avantage d'utiliser les services managés AWS, tels qu'Amazon ElastiCache et Amazon Relational Database Service (Amazon RDS) ?
    - A. Ils nécessitent que le client surveille et remplace les instances défaillantes.
    - B. Ils offrent de meilleures performances que les services gérés par le client.
    - C. Ils simplifient l'application des correctifs et la mise à jour des systèmes d'exploitation sous-jacents.
    - D. Ils ne nécessitent pas que le client optimise le type ou la taille des instances.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Simplifient les correctifs et mises à jour** : AWS gère la maintenance du système d'exploitation et des logiciels sous-jacents.
    - **Autres options incorrectes** ❌ :
      - **A. Surveiller et remplacer les instances** : C'est le cas pour les services non managés ; les services managés le font automatiquement.
      - **B. Meilleures performances** : Non garanti ; les performances dépendent de la configuration.
      - **D. Pas d'optimisation de type d'instance** : Le client doit toujours choisir le type d'instance approprié.
    </details>

43. Quels services peuvent être utilisés dans des architectures cloud hybrides AWS ? (Choisissez DEUX)
    - A. Amazon Route 53.
    - B. Passerelle privée virtuelle.
    - C. Classic Load Balancer.
    - D. Auto Scaling.
    - E. Métriques par défaut d'Amazon CloudWatch.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : A, B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Amazon Route 53** : Service DNS mondial utilisable pour les environnements hybrides.
      - **B. Passerelle privée virtuelle** : Composant VPC pour connecter un réseau sur site via VPN ou Direct Connect.
    - **Autres options incorrectes** ❌ :
      - **C. Classic Load Balancer** : Équilibreur de charge pour ressources AWS, pas spécifiquement hybride.
      - **D. Auto Scaling** : Pour ressources AWS, pas pour on-premise.
      - **E. Métriques CloudWatch par défaut** : Surveillance des ressources AWS, pas hybride.
    </details>

44. Quelle affirmation décrit le mieux Elastic Load Balancing ?
    - A. Il traduit un nom de domaine en adresse IP à l'aide de DNS.
    - B. Il distribue le trafic d'application entrant sur une ou plusieurs instances Amazon EC2.
    - C. Il collecte des métriques sur les instances Amazon EC2 connectées.
    - D. Il ajuste automatiquement le nombre d'instances Amazon EC2 pour supporter le trafic entrant.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Distribue le trafic entrant** : Fonction principale d'un équilibreur de charge.
    - **Autres options incorrectes** ❌ :
      - **A. Traduction de nom de domaine** : C'est le rôle de Route 53.
      - **C. Collecte de métriques** : CloudWatch le fait.
      - **D. Ajuste automatiquement le nombre d'instances** : C'est le rôle d'Auto Scaling.
    </details>

45. Lequel des éléments suivants est une base de données NoSQL rapide et fiable ?
    - A. Amazon Redshift.
    - B. Amazon RDS.
    - C. Amazon DynamoDB.
    - D. Amazon S3.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon DynamoDB** : Base de données NoSQL entièrement gérée avec performances millisecondes.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Redshift** : Entrepôt de données relationnel.
      - **B. Amazon RDS** : Service de base de données relationnelle.
      - **D. Amazon S3** : Stockage d'objets, pas une base de données NoSQL.
    </details>

46. Quel service AWS utiliseriez-vous pour obtenir des rapports de conformité et des certificats ?
    - A. AWS Artifact.
    - B. AWS Lambda.
    - C. Amazon Inspector.
    - D. AWS Certificate Manager.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Artifact** : Portail pour les rapports de conformité et les accords.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Lambda** : Calcul sans serveur.
      - **C. Amazon Inspector** : Évaluation de sécurité.
      - **D. AWS Certificate Manager** : Gère les certificats SSL/TLS.
    </details>

47. Quels services AWS sont définis comme globaux plutôt que régionaux ? (Choisissez DEUX)
    - A. Amazon Route 53.
    - B. Amazon EC2.
    - C. Amazon S3.
    - D. Amazon CloudFront.
    - E. Amazon DynamoDB.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : A, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Amazon Route 53** : Service DNS global.
      - **D. Amazon CloudFront** : CDN global avec edge locations.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon EC2** : Service régional (les instances sont lancées dans une région spécifique).
      - **C. Amazon S3** : Les compartiments sont créés dans une région spécifique.
      - **E. Amazon DynamoDB** : Les tables sont créées dans une région spécifique (bien que Global Tables permette la réplication multi-régions).
    </details>

48. Comment un client AWS peut-il facilement appliquer des contrôles d'accès communs à un grand ensemble d'utilisateurs ?
    - A. Appliquer une politique IAM à un groupe IAM.
    - B. Appliquer une politique IAM à un rôle IAM.
    - C. Appliquer la même politique IAM à tous les utilisateurs IAM ayant accès à la même charge de travail.
    - D. Appliquer une politique IAM à un pool d'utilisateurs Amazon Cognito.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Appliquer une politique à un groupe IAM** : Les groupes permettent de gérer les permissions pour plusieurs utilisateurs facilement.
    - **Autres options incorrectes** ❌ :
      - **B. Rôle IAM** : Pour délégation à des services ou utilisateurs temporaires, pas pour gérer des utilisateurs réguliers.
      - **C. Même politique à chaque utilisateur** : Fastidieux et difficile à maintenir.
      - **D. Amazon Cognito** : Pour la gestion des identités des applications mobiles/web, pas pour les utilisateurs IAM internes.
    </details>

49. Lequel des éléments suivants est un principe de conception architecturale important lors de la conception d'applications cloud ?
    - A. Utiliser plusieurs zones de disponibilité.
    - B. Utiliser des composants étroitement couplés.
    - C. Utiliser des logiciels open source.
    - D. Provisionner une capacité supplémentaire.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Utiliser plusieurs zones de disponibilité** : Assure la haute disponibilité et la tolérance aux pannes.
    - **Autres options incorrectes** ❌ :
      - **B. Composants étroitement couplés** : Non recommandé ; le découplage est préférable.
      - **C. Logiciels open source** : Choix technique, pas un principe de conception.
      - **D. Capacité supplémentaire** : Contraire à l'élasticité ; mieux vaut ajuster dynamiquement.
    </details>

50. Quel service permet à une entreprise avec plusieurs comptes AWS de combiner son utilisation pour obtenir des remises volume ?
    - A. AWS Server Migration Service.
    - B. AWS Organizations.
    - C. AWS Budgets.
    - D. AWS Trusted Advisor.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Organizations** : Permet la facturation consolidée et le regroupement des achats pour des remises volume.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Server Migration Service** : Migration de serveurs vers AWS.
      - **C. AWS Budgets** : Définition de budgets et alertes de coûts.
      - **D. AWS Trusted Advisor** : Recommandations d'optimisation.
    </details>