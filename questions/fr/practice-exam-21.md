---
layout: exam
---

# Examen de pratique 21

1. Un utilisateur a besoin de déployer rapidement une base de données non relationnelle sur AWS. L'utilisateur ne veut pas gérer le matériel sous-jacent ou le logiciel de base de données. <br/> Quel service AWS peut être utilisé pour accomplir cela ?
    - A. Amazon RDS
    - B. Amazon DynamoDB
    - C. Amazon Aurora
    - D. Amazon Redshift

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon DynamoDB** : Base de données NoSQL entièrement managée, sans serveur à gérer.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon RDS** : Base de données relationnelle managée.
      - **C. Amazon Aurora** : Base de données relationnelle compatible MySQL/PostgreSQL.
      - **D. Amazon Redshift** : Entrepôt de données.
    </details>

2. Un Cloud Practitioner développe un plan de reprise après sinistre et prévoit de répliquer des données entre plusieurs zones géographiques.<br/> Lequel des éléments suivants répond à ces exigences ?
    - A. Comptes AWS
    - B. Régions AWS
    - C. Zones de disponibilité
    - D. Emplacements périphériques

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Régions AWS** : La réplication inter-régions fournit une redondance géographique pour la reprise après sinistre.
    - **Autres options incorrectes** ❌ :
      - **A. Comptes AWS** : Pour l'isolation, pas la réplication géographique.
      - **C. Zones de disponibilité** : Au sein d'une même région, pas géographiquement distantes.
      - **D. Emplacements périphériques** : Pour la mise en cache de contenu, pas la réplication de données complètes.
    </details>

3. Quelles fonctionnalités et avantages le service AWS Organizations fournit-il ? (Choisissez deux.)
    - A. Établir des communications en temps réel entre les membres d'une équipe interne
    - B. Faciliter l'utilisation des bases de données NoSQL
    - C. Fournir des vérifications de sécurité automatisées
    - D. Mettre en œuvre la facturation consolidée
    - E. Appliquer la gouvernance des comptes AWS

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D, E

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **D. Mettre en œuvre la facturation consolidée** : Combine la facturation de plusieurs comptes.
      - **E. Appliquer la gouvernance des comptes AWS** : Permet d'appliquer des politiques via SCP.
    - **Autres options incorrectes** ❌ :
      - **A. Établir des communications en temps réel entre les membres d'une équipe interne** : Non, c'est le rôle de services comme Amazon Chime.
      - **B. Faciliter l'utilisation des bases de données NoSQL** : Non, c'est le rôle de DynamoDB.
      - **C. Fournir des vérifications de sécurité automatisées** : C'est le rôle d'AWS Trusted Advisor.
    </details>

4. Quel service AWS est utilisé pour automatiser la gestion de configuration en utilisant Chef et Puppet ?
    - A. AWS Config
    - B. AWS OpsWorks
    - C. AWS CloudFormation
    - D. AWS Systems Manager

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS OpsWorks** : Service de gestion de configuration qui supporte Chef et Puppet.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Config** : Audite la configuration.
      - **C. AWS CloudFormation** : Infrastructure as code.
      - **D. AWS Systems Manager** : Gestion des ressources.
    </details>

5. Quel outil est le mieux adapté pour combiner la facturation de comptes AWS qui étaient auparavant indépendants les uns des autres ?
    - A. Rapport de facturation détaillé
    - B. Facturation consolidée
    - C. AWS Cost and Usage report
    - D. Rapport d'allocation des coûts

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Facturation consolidée** : Fonctionnalité d'AWS Organizations pour regrouper la facturation.
    - **Autres options incorrectes** ❌ :
      - **A. Rapport de facturation détaillé** : Montre les détails, mais ne combine pas la facturation.
      - **C. AWS Cost and Usage report** : Rapport détaillé des coûts.
      - **D. Rapport d'allocation des coûts** : Pour attribuer des coûts à des balises.
    </details>

6. Le AWS Total Cost of Ownership (TCO) Calculator est utilisé pour :
    - A. recevoir des rapports qui décomposent les coûts de calcul du cloud AWS par durée, ressource ou balises
    - B. estimer les économies lors de la comparaison du cloud AWS à un environnement sur site
    - C. estimer une facture mensuelle pour les ressources cloud AWS qui seront utilisées
    - D. activer des alertes de facturation pour surveiller les coûts AWS réels par rapport aux coûts estimés

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. estimer les économies lors de la comparaison du cloud AWS à un environnement sur site** : Outil pour calculer les économies de migration.
    - **Autres options incorrectes** ❌ :
      - **A. recevoir des rapports qui décomposent les coûts de calcul** : C'est le rôle de Cost Explorer.
      - **C. estimer une facture mensuelle** : C'est le rôle du Simple Monthly Calculator.
      - **D. activer des alertes de facturation** : C'est le rôle d'AWS Budgets.
    </details>

7. Quels services AWS peuvent être utilisés pour fournir une connectivité réseau entre un réseau sur site et un VPC ? (Choisissez deux.)
    - A. Amazon Route 53
    - B. AWS Direct Connect
    - C. AWS Data Pipeline
    - D. AWS VPN
    - E. Amazon Connect

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B, D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. AWS Direct Connect** : Connexion dédiée.
      - **D. AWS VPN** : Connexion sécurisée sur Internet.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Route 53** : Service DNS.
      - **C. AWS Data Pipeline** : Orchestration de données.
      - **E. Amazon Connect** : Centre de contact.
    </details>

8. Selon le modèle de responsabilité partagée d'AWS, lesquels des éléments suivants sont des responsabilités du client ? (Choisissez deux.)
    - A. Configurer le chiffrement côté serveur sur un bucket Amazon S3
    - B. Appliquer des correctifs sur l'instance Amazon RDS
    - C. Configurations réseau et pare-feu
    - D. Sécurité physique des installations des centres de données
    - E. Disponibilité de la capacité de calcul

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A, C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. Configurer le chiffrement côté serveur sur un bucket Amazon S3** : Le client active et gère le chiffrement.
      - **C. Configurations réseau et pare-feu** : Le client configure les groupes de sécurité, NACL, etc.
    - **Autres options incorrectes** ❌ :
      - **B. Appliquer des correctifs sur l'instance Amazon RDS** : AWS applique les correctifs pour RDS.
      - **D. Sécurité physique des installations des centres de données** : AWS.
      - **E. Disponibilité de la capacité de calcul** : AWS garantit la disponibilité de l'infrastructure.
    </details>

9. Quel est le NIVEAU MINIMAL du plan de support AWS qui fournira aux utilisateurs un accès à l'API AWS Support ?
    - A. Developer
    - B. Enterprise
    - C. Business
    - D. Basic

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Business** : Le plan Business (et Enterprise) donne accès à l'API Support.
    - **Autres options incorrectes** ❌ :
      - **A. Developer** : N'inclut pas l'API Support.
      - **B. Enterprise** : Inclut l'API, mais ce n'est pas le niveau minimal.
      - **D. Basic** : Pas d'accès API.
    </details>

10. Une entreprise a déployé plusieurs bases de données relationnelles sur des instances Amazon EC2. Chaque mois, l'éditeur du logiciel de base de données publie de nouveaux correctifs de sécurité qui doivent être appliqués aux bases de données. <br/> Quelle est la manière la PLUS efficace d'appliquer les correctifs de sécurité ?
    - A. Se connecter à chaque instance de base de données mensuellement, et télécharger et appliquer les correctifs de sécurité nécessaires de l'éditeur.
    - B. Activer la mise à jour automatique des correctifs pour les instances en utilisant la console Amazon RDS.
    - C. Dans AWS Config, configurer une règle pour les instances et le niveau de correctif requis.
    - D. Utiliser AWS Systems Manager pour automatiser la mise à jour des correctifs de la base de données selon un calendrier.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Utiliser AWS Systems Manager pour automatiser la mise à jour des correctifs de la base de données selon un calendrier** : Automatise la gestion des correctifs pour les instances EC2.
    - **Autres options incorrectes** ❌ :
      - **A. Se connecter à chaque instance de base de données mensuellement** : Manuel, sujet aux erreurs.
      - **B. Activer la mise à jour automatique des correctifs pour les instances en utilisant la console Amazon RDS** : Impossible, car les bases de données sont sur EC2, pas sur RDS.
      - **C. Dans AWS Config, configurer une règle** : AWS Config audite, n'applique pas de correctifs.
    </details>

11. Une entreprise veut utiliser Amazon Elastic Compute Cloud (Amazon EC2) pour déployer une application commerciale mondiale. La solution de déploiement doit être construite avec la plus haute redondance et tolérance aux pannes. <br/> Sur la base de cette situation, les instances Amazon EC2 doivent être déployées :
    - A. dans une seule zone de disponibilité dans une région AWS
    - B. avec plusieurs interfaces réseau élastiques appartenant à différents sous-réseaux
    - C. sur plusieurs zones de disponibilité dans une région AWS
    - D. sur plusieurs zones de disponibilité dans deux régions AWS

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. sur plusieurs zones de disponibilité dans une région AWS** : Fournit une haute disponibilité contre les défaillances d'une zone.
    - **Autres options incorrectes** ❌ :
      - **A. dans une seule zone de disponibilité dans une région AWS** : Pas de redondance.
      - **B. avec plusieurs interfaces réseau élastiques appartenant à différents sous-réseaux** : Améliore la connectivité réseau, pas la tolérance aux pannes.
      - **D. sur plusieurs zones de disponibilité dans deux régions AWS** : Plus coûteux et complexe ; le multi-régions est pour la reprise après sinistre, pas nécessairement pour la "plus haute redondance" dans une seule région.
    </details>

12. Une entreprise a une application avec des utilisateurs en Australie et au Brésil. Toutes les infrastructures de l'entreprise sont actuellement provisionnées dans la région Asia Pacific (Sydney) en Australie, et les utilisateurs brésiliens rencontrent une latence élevée. <br/> Que doit faire l'entreprise pour réduire la latence ?
    - A. Implémenter AWS Direct Connect pour les utilisateurs au Brésil
    - B. Provisionner des ressources dans la région South America (São Paulo) au Brésil.
    - C. Utiliser AWS Transit Gateway pour acheminer rapidement les utilisateurs du Brésil vers l'application
    - D. Lancer des instances Amazon EC2 supplémentaires à Sydney pour gérer la demande

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Provisionner des ressources dans la région South America (São Paulo) au Brésil.** : Déployer des ressources géographiquement proches des utilisateurs réduit la latence.
    - **Autres options incorrectes** ❌ :
      - **A. Implémenter AWS Direct Connect pour les utilisateurs au Brésil** : Direct Connect connecte les centres de données à AWS, pas les utilisateurs finaux.
      - **C. Utiliser AWS Transit Gateway** : Pour interconnecter des VPC, pas réduire la latence des utilisateurs finaux.
      - **D. Lancer des instances Amazon EC2 supplémentaires à Sydney** : N'aidera pas les utilisateurs brésiliens éloignés.
    </details>

13. Une instance Amazon EC2 s'exécute uniquement lorsque nécessaire mais doit rester active pendant la durée du processus. <br/> Quelle est l'option d'achat la plus appropriée ?
    - A. Instances dédiées
    - B. Instances Spot
    - C. Instances à la demande
    - D. Instances réservées

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Instances à la demande** : Parfaites pour des charges de travail courtes et imprévisibles, sans interruption.
    - **Autres options incorrectes** ❌ :
      - **A. Instances dédiées** : Pour l'isolation matérielle, plus chères.
      - **B. Instances Spot** : Peuvent être interrompues, ne conviennent pas.
      - **D. Instances réservées** : Pour des charges de travail stables sur 1 ou 3 ans.
    </details>

14. Quel tableau de bord AWS affiche des informations pertinentes et opportunes pour aider les utilisateurs à gérer les événements en cours, et fournit des notifications proactives pour aider à planifier les activités programmées ?
    - A. AWS Service Health Dashboard
    - B. AWS Personal Health Dashboard
    - C. AWS Trusted Advisor dashboard
    - D. Amazon CloudWatch dashboard

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Personal Health Dashboard** : Fournit des alertes personnalisées sur les événements affectant vos ressources.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Service Health Dashboard** : Affiche l'état général des services AWS.
      - **C. AWS Trusted Advisor dashboard** : Recommandations d'optimisation.
      - **D. Amazon CloudWatch dashboard** : Surveillance des métriques.
    </details>

15. Quel service de stockage hybride AWS permet aux applications sur site d'utiliser de manière transparente le stockage cloud AWS ?
    - A. AWS Backup
    - B. Amazon Connect
    - C. AWS Direct Connect
    - D. AWS Storage Gateway

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Storage Gateway** : Connecte les environnements sur site au stockage cloud AWS.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Backup** : Service de sauvegarde centralisé.
      - **B. Amazon Connect** : Centre de contact.
      - **C. AWS Direct Connect** : Connexion réseau dédiée.
    </details>

16. Lequel des éléments suivants agit comme un pare-feu virtuel au niveau de l'instance Amazon EC2 pour contrôler le trafic pour une ou plusieurs instances ?
    - A. Clés d'accès
    - B. Passerelles privées virtuelles
    - C. Groupes de sécurité
    - D. Listes de contrôle d'accès (ACL)

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Groupes de sécurité** : Pare-feu au niveau de l'instance.
    - **Autres options incorrectes** ❌ :
      - **A. Clés d'accès** : Pour l'authentification API.
      - **B. Passerelles privées virtuelles** : Pour les connexions VPN.
      - **D. Listes de contrôle d'accès (ACL)** : Pare-feu au niveau du sous-réseau.
    </details>

17. Quelle est la manière la plus efficace d'établir une connectivité réseau du site vers plusieurs VPC dans différentes régions AWS ?
    - A. Utiliser AWS Direct Connect
    - B. Utiliser AWS VPN
    - C. Utiliser AWS Client VPN
    - D. Utiliser un AWS Transit Gateway

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Utiliser un AWS Transit Gateway** : Centralise la connectivité vers plusieurs VPC et régions.
    - **Autres options incorrectes** ❌ :
      - **A. Utiliser AWS Direct Connect** : Nécessiterait plusieurs connexions ou un Direct Connect Gateway.
      - **B. Utiliser AWS VPN** : Nécessiterait plusieurs tunnels VPN.
      - **C. Utiliser AWS Client VPN** : Pour les utilisateurs distants, pas pour la connectivité site-to-VPC.
    </details>

18. Quel plan de support AWS fournit un accès à des revues architecturales et opérationnelles, ainsi qu'un accès 24/7 à des ingénieurs de support cloud seniors par e-mail, chat en ligne et téléphone ?
    - A. Basic
    - B. Business
    - C. Developer
    - D. Enterprise

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Enterprise** : Inclut des revues architecturales, un TAM dédié et un accès 24/7 à des ingénieurs seniors.
    - **Autres options incorrectes** ❌ :
      - **A. Basic** : Gratuit, support communautaire uniquement.
      - **B. Business** : Accès 24/7 au support technique, mais pas aux revues architecturales.
      - **C. Developer** : Support commercial pendant les heures de bureau.
    </details>

19. Quel service ou fonctionnalité AWS aide à restreindre les services AWS, les ressources et les actions API individuelles que les utilisateurs et les rôles dans chaque compte membre peuvent accéder ?
    - A. Amazon Cognito
    - B. AWS Organizations
    - C. AWS Shield
    - D. AWS Firewall Manager

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Organizations** : Permet de définir des Service Control Policies (SCP) pour restreindre les actions au niveau du compte.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Cognito** : Gestion des identités utilisateur pour les applications.
      - **C. AWS Shield** : Protection DDoS.
      - **D. AWS Firewall Manager** : Gestion centralisée des règles de pare-feu.
    </details>

20. Quelle est la meilleure ressource pour qu'un utilisateur trouve des informations et des rapports liés à la conformité concernant AWS ?
    - A. AWS Artifact
    - B. AWS Marketplace
    - C. Amazon Inspector
    - D. AWS Support

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Artifact** : Portail central pour les rapports de conformité et les accords.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Marketplace** : Pour les logiciels tiers.
      - **C. Amazon Inspector** : Évaluation de sécurité.
      - **D. AWS Support** : Assistance technique.
    </details>

21. Quelle classe de stockage Amazon S3 est optimisée pour fournir un accès aux données avec des exigences de résilience plus faibles, mais un accès rapide lorsque nécessaire, comme pour les sauvegardes dupliquées ?
    - A. Amazon S3 Standard
    - B. Amazon S3 Glacier Deep Archive
    - C. Amazon S3 One Zone-Infrequent Access
    - D. Amazon S3 Glacier

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon S3 One Zone-Infrequent Access** : Stocke les données dans une seule zone de disponibilité, coût inférieur, pour des données peu fréquemment consultées mais nécessitant un accès rapide.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon S3 Standard** : Haute durabilité et disponibilité, plus chère.
      - **B. Amazon S3 Glacier Deep Archive** : Archivage à très long terme, restauration lente.
      - **D. Amazon S3 Glacier** : Archivage, restauration en quelques heures.
    </details>

22. Qu'est-ce qu'une zone de disponibilité dans AWS ?
    - A. Un ou plusieurs centres de données physiques
    - B. Un emplacement géographique complètement isolé
    - C. Un ou plusieurs emplacements périphériques basés dans le monde entier
    - D. Un emplacement de centre de données avec une seule source d'alimentation et de mise en réseau

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Un ou plusieurs centres de données physiques** : Chaque AZ est constituée d'un ou plusieurs centres de données avec redondance.
    - **Autres options incorrectes** ❌ :
      - **B. Un emplacement géographique complètement isolé** : C'est une région.
      - **C. Un ou plusieurs emplacements périphériques** : Ce sont des points de présence pour CloudFront.
      - **D. Un emplacement de centre de données avec une seule source d'alimentation et de mise en réseau** : Les AZ ont des sources multiples et redondantes.
    </details>

23. Quels services AWS peuvent être utilisés comme outils d'automatisation d'infrastructure ? (Choisissez deux.)
    - A. AWS CloudFormation
    - B. Amazon CloudFront
    - C. AWS Batch
    - D. AWS OpsWorks
    - E. Amazon QuickSight

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A, D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS CloudFormation** : Infrastructure as code.
      - **D. AWS OpsWorks** : Automatisation de configuration avec Chef/Puppet.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon CloudFront** : CDN.
      - **C. AWS Batch** : Traitement par lots.
      - **E. Amazon QuickSight** : Business intelligence.
    </details>

24. Quel service AWS permet aux utilisateurs de créer des copies de ressources à travers les régions AWS ?
    - A. Amazon ElastiCache
    - B. AWS CloudFormation
    - C. AWS CloudTrail
    - D. AWS Systems Manager

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS CloudFormation** : Peut déployer des piles dans plusieurs régions en utilisant des modèles.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon ElastiCache** : Service de cache.
      - **C. AWS CloudTrail** : Journalisation d'API.
      - **D. AWS Systems Manager** : Gestion des ressources.
    </details>

25. Un utilisateur aimerait chiffrer les données qui sont reçues, stockées et gérées par AWS CloudTrail. <br/> Quel service AWS fournira cette capacité ?
    - A. AWS Secrets Manager
    - B. AWS Systems Manager
    - C. AWS Key Management Service (AWS KMS)
    - D. AWS Certificate Manager

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Key Management Service (AWS KMS)** : Gère les clés de chiffrement pour CloudTrail logs.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Secrets Manager** : Gère les secrets.
      - **B. AWS Systems Manager** : Gestion des ressources.
      - **D. AWS Certificate Manager** : Gère les certificats SSL.
    </details>

26. Quel avantage du cloud AWS élimine le besoin pour les utilisateurs d'essayer d'estimer l'utilisation future de l'infrastructure ?
    - A. Déploiement facile et rapide d'applications dans plusieurs régions à travers le monde
    - B. Sécurité du cloud AWS
    - C. Élasticité du cloud AWS
    - D. Coûts variables inférieurs dus aux économies d'échelle massives

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Élasticité du cloud AWS** : Permet d'ajuster la capacité à la demande, éliminant le besoin de prévision précise.
    - **Autres options incorrectes** ❌ :
      - **A. Déploiement facile et rapide d'applications** : Agilité, pas liée à l'estimation.
      - **B. Sécurité du cloud AWS** : Important, mais pas lié à l'estimation de capacité.
      - **D. Coûts variables inférieurs** : Économique, mais ne supprime pas le besoin d'estimation.
    </details>

27. Quels composants d'identification sont nécessaires pour obtenir un accès programmatique à un compte AWS ? (Choisissez deux.)
    - A. Un ID de clé d'accès
    - B. Une clé primaire
    - C. Une clé d'accès secrète
    - D. Un ID utilisateur
    - E. Une clé secondaire

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A, C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. Un ID de clé d'accès** : Identifiant public.
      - **C. Une clé d'accès secrète** : Secret privé.
    - **Autres options incorrectes** ❌ :
      - **B. Une clé primaire** : Terme non utilisé.
      - **D. Un ID utilisateur** : Pour IAM, pas pour l'authentification API.
      - **E. Une clé secondaire** : Terme non utilisé.
    </details>

28. Lesquels des services suivants sont des services de calcul AWS ? (Sélectionnez deux.)
    - A. Amazon Lightsail
    - B. AWS Systems Manager
    - C. AWS CloudFormation
    - D. AWS Batch
    - E. Amazon Inspector

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A, D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. Amazon Lightsail** : Service de calcul simplifié (VPS).
      - **D. AWS Batch** : Service de calcul pour les charges de travail par lots.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Systems Manager** : Service de gestion.
      - **C. AWS CloudFormation** : Infrastructure as code.
      - **E. Amazon Inspector** : Évaluation de sécurité.
    </details>

29. Comment une entreprise peut-elle séparer les coûts pour le trafic réseau, Amazon EC2, Amazon S3 et d'autres services AWS par département ?
    - A. Ajouter des balises spécifiques au département à chaque ressource
    - B. Créer un VPC séparé pour chaque département
    - C. Créer un compte AWS séparé pour chaque département
    - D. Utiliser AWS Organizations

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Créer un compte AWS séparé pour chaque département** : Isolation complète des coûts et des ressources.
    - **Autres options incorrectes** ❌ :
      - **A. Ajouter des balises spécifiques au département à chaque ressource** : Permet l'allocation des coûts, mais pas une séparation stricte.
      - **B. Créer un VPC séparé pour chaque département** : Isolement réseau, pas des coûts.
      - **D. Utiliser AWS Organizations** : Permet la facturation consolidée, mais la séparation par compte est plus claire.
    </details>

30. Quel est un avantage de la facturation consolidée pour les comptes AWS ?
    - A. Accès à AWS Personal Health Dashboard
    - B. Remises volume combinées
    - C. Sécurité de compte améliorée
    - D. IAM AWS centralisé

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Remises volume combinées** : L'utilisation agrégée de tous les comptes peut atteindre des seuils de volume plus élevés, entraînant des remises.
    - **Autres options incorrectes** ❌ :
      - **A. Accès à AWS Personal Health Dashboard** : Disponible pour tous les comptes.
      - **C. Sécurité de compte améliorée** : Non directement.
      - **D. IAM AWS centralisé** : IAM est par compte ; Organizations aide à la gouvernance, pas à la centralisation d'IAM.
    </details>

31. Quel service AWS permettra à un utilisateur de définir des limites de coût et d'utilisation personnalisées, et alertera lorsque les seuils sont dépassés ?
    - A. AWS Organizations
    - B. AWS Budgets
    - C. Cost Explorer
    - D. AWS Trusted Advisor

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Budgets** : Permet de définir des budgets et des alertes.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Organizations** : Gestion de comptes.
      - **C. Cost Explorer** : Analyse des coûts.
      - **D. AWS Trusted Advisor** : Recommandations.
    </details>

32. Quel service AWS fournit la capacité de détecter les fuites de données involontaires d'informations personnellement identifiables (PII) et de données d'identification utilisateur ?
    - A. Amazon GuardDuty
    - B. Amazon Inspector
    - C. Amazon Macie
    - D. AWS Shield

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon Macie** : Détecte et classifie les données sensibles comme les PII.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon GuardDuty** : Détection de menaces.
      - **B. Amazon Inspector** : Évaluation de sécurité des applications.
      - **D. AWS Shield** : Protection DDoS.
    </details>

33. Quel outil peut être utilisé pour surveiller les limites de service AWS ?
    - A. AWS Total Cost of Ownership (TCO) Calculator
    - B. AWS Trusted Advisor
    - C. AWS Personal Health Dashboard
    - D. AWS Cost and Usage report

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Trusted Advisor** : Vérifie l'utilisation des limites de service.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Total Cost of Ownership (TCO) Calculator** : Estime les économies.
      - **C. AWS Personal Health Dashboard** : Alertes personnalisées sur les événements.
      - **D. AWS Cost and Usage report** : Détails des coûts.
    </details>

34. Une entreprise a distribué sa charge de travail à la fois sur le cloud AWS et sur certains serveurs sur site. <br/> Quel type d'architecture est-ce ?
    - A. Réseau privé virtuel
    - B. Cloud privé virtuel
    - C. Cloud hybride
    - D. Cloud privé

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Cloud hybride** : Combinaison de cloud (AWS) et d'infrastructure sur site.
    - **Autres options incorrectes** ❌ :
      - **A. Réseau privé virtuel** : Technologie de réseau.
      - **B. Cloud privé virtuel** : Réseau isolé dans AWS.
      - **D. Cloud privé** : Infrastructure cloud dédiée à une seule organisation.
    </details>

35. Lequel des éléments suivants décrit une meilleure pratique de sécurité qui peut être mise en œuvre en utilisant AWS IAM ?
    - A. Désactiver l'accès à la console de gestion AWS pour tous les utilisateurs
    - B. Générer des clés secrètes pour chaque utilisateur IAM
    - C. Accorder des permissions uniquement aux utilisateurs qui doivent effectuer une tâche donnée
    - D. Stocker les identifiants AWS dans les instances Amazon EC2

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Accorder des permissions uniquement aux utilisateurs qui doivent effectuer une tâche donnée** : Principe du moindre privilège.
    - **Autres options incorrectes** ❌ :
      - **A. Désactiver l'accès à la console de gestion AWS pour tous les utilisateurs** : Non pratique.
      - **B. Générer des clés secrètes pour chaque utilisateur IAM** : Seulement si nécessaire pour l'accès programmatique.
      - **D. Stocker les identifiants AWS dans les instances Amazon EC2** : Mauvaise pratique ; utilisez des rôles IAM à la place.
    </details>

36. Qu'est-ce qui peut être utilisé pour automatiser et gérer des environnements AWS multi-comptes sécurisés et bien architecturés ?
    - A. Modèle de responsabilité partagée d'AWS
    - B. AWS Control Tower
    - C. AWS Security Hub
    - D. AWS Well-Architected Tool

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Control Tower** : Service pour configurer et gérer un environnement multi-comptes conforme aux meilleures pratiques.
    - **Autres options incorrectes** ❌ :
      - **A. Modèle de responsabilité partagée d'AWS** : Cadre de sécurité, pas un outil d'automatisation.
      - **C. AWS Security Hub** : Service de sécurité centralisé.
      - **D. AWS Well-Architected Tool** : Évalue les charges de travail contre le framework.
    </details>

37. Quel service ou fonctionnalité AWS permet à un utilisateur de mettre à l'échelle facilement la connectivité parmi des milliers de VPC ?
    - A. Peering VPC
    - B. AWS Transit Gateway
    - C. AWS Direct Connect
    - D. AWS Global Accelerator

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Transit Gateway** : Centralise la connectivité entre VPC et réseaux on-premises.
    - **Autres options incorrectes** ❌ :
      - **A. Peering VPC** : Connexion point-à-point, ne scale pas à des milliers.
      - **C. AWS Direct Connect** : Connexion dédiée.
      - **D. AWS Global Accelerator** : Améliore la disponibilité et la latence des applications.
    </details>

38. Une entreprise a besoin d'une protection contre les attaques par déni de service distribué (DDoS) étendues sur son site web et d'une assistance d'experts AWS pendant de tels événements. <br/> Quel service managé AWS répondra à ces exigences ?
    - A. AWS Shield Advanced
    - B. AWS Firewall Manager
    - C. AWS WAF
    - D. Amazon GuardDuty

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Shield Advanced** : Fournit une protection DDoS avancée et un accès à l'équipe de réponse aux DDoS (DRT).
    - **Autres options incorrectes** ❌ :
      - **B. AWS Firewall Manager** : Gestion centralisée des règles de pare-feu.
      - **C. AWS WAF** : Protège contre les vulnérabilités web, mais pas spécifiquement DDoS avancé.
      - **D. Amazon GuardDuty** : Détection de menaces.
    </details>

39. L'application d'une entreprise a des heures de début et de fin flexibles. <br/> Quel modèle de tarification Amazon EC2 sera le PLUS rentable ?
    - A. Instances à la demande
    - B. Instances Spot
    - C. Instances réservées
    - D. Hôtes dédiés

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Instances Spot** : Jusqu'à 90 % de réduction, idéal pour les charges de travail flexibles et interruptibles.
    - **Autres options incorrectes** ❌ :
      - **A. Instances à la demande** : Plus chères.
      - **C. Instances réservées** : Pour des charges de travail stables sur 1 ou 3 ans.
      - **D. Hôtes dédiés** : Pour l'isolation matérielle, plus chers.
    </details>

40. Selon le modèle de responsabilité partagée d'AWS, quelles sont les responsabilités du client ? (Choisissez deux.)
    - A. Sécurité physique et environnementale
    - B. Dispositifs réseau physiques incluant les pare-feu
    - C. Désactivation des dispositifs de stockage
    - D. Sécurité des données en transit
    - E. Authentification de l'intégrité des données

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D, E

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **D. Sécurité des données en transit** : Le client doit chiffrer les données en transit.
      - **E. Authentification de l'intégrité des données** : Le client est responsable de l'intégrité des données.
    - **Autres options incorrectes** ❌ :
      - **A. Sécurité physique et environnementale** : AWS.
      - **B. Dispositifs réseau physiques incluant les pare-feu** : AWS.
      - **C. Désactivation des dispositifs de stockage** : AWS.
    </details>

41. Un Cloud Practitioner a une charge de travail d'analyse de données qui est exécutée rarement et peut être interrompue sans dommage. Pour optimiser les coûts, quelle option d'achat Amazon EC2 doit être utilisée ?
    - A. Instances à la demande
    - B. Instances réservées
    - C. Instances Spot
    - D. Hôtes dédiés

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Instances Spot** : Idéal pour les charges de travail tolérantes aux interruptions.
    - **Autres options incorrectes** ❌ :
      - **A. Instances à la demande** : Plus chères.
      - **B. Instances réservées** : Pour des charges de travail stables.
      - **D. Hôtes dédiés** : Trop chers.
    </details>

42. Quel service de conteneurs AWS aidera un utilisateur à installer, exploiter et mettre à l'échelle l'infrastructure de gestion de cluster ?
    - A. Amazon Elastic Container Registry (Amazon ECR)
    - B. AWS Elastic Beanstalk
    - C. Amazon Elastic Container Service (Amazon ECS)
    - D. Amazon Elastic Block Store (Amazon EBS)

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon Elastic Container Service (Amazon ECS)** : Service de gestion de conteneurs qui gère l'infrastructure sous-jacente.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Elastic Container Registry (Amazon ECR)** : Registre de conteneurs.
      - **B. AWS Elastic Beanstalk** : Service de déploiement d'applications.
      - **D. Amazon Elastic Block Store (Amazon EBS)** : Stockage par blocs.
    </details>

43. Lequel des éléments suivants permet à une application exécutée sur une instance Amazon EC2 d'écrire des données en toute sécurité dans un bucket Amazon S3 sans utiliser d'identifiants à long terme ?
    - A. Amazon Cognito
    - B. AWS Shield
    - C. Rôle IAM AWS
    - D. Clé d'accès utilisateur IAM

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Rôle IAM AWS** : Les rôles IAM fournissent des permissions temporaires aux instances EC2.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Cognito** : Gestion des identités utilisateur.
      - **B. AWS Shield** : Protection DDoS.
      - **D. Clé d'accès utilisateur IAM** : Identifiants à long terme, non recommandés sur les instances.
    </details>

44. Une entreprise avec un plan de support AWS Developer a provisionné une base de données Amazon RDS et ne peut pas s'y connecter. <br/> Qui le développeur devrait-il contacter pour ce niveau de support ?
    - A. AWS Support en utilisant un cas de support
    - B. AWS Professional Services
    - C. Technical account manager AWS
    - D. Partenaires de conseil AWS

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Support en utilisant un cas de support** : Le plan Developer permet d'ouvrir des cas de support (avec des temps de réponse limités).
    - **Autres options incorrectes** ❌ :
      - **B. AWS Professional Services** : Service de conseil payant.
      - **C. Technical account manager AWS** : Disponible uniquement dans le plan Enterprise.
      - **D. Partenaires de conseil AWS** : Partenaires tiers.
    </details>

45. Quel est le but d'avoir une passerelle Internet dans un VPC ?
    - A. Créer une connexion VPN vers le VPC
    - B. Permettre la communication entre le VPC et Internet
    - C. Imposer des contraintes de bande passante sur le trafic Internet
    - D. Équilibrer la charge du trafic d'Internet sur les instances Amazon EC2

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Permettre la communication entre le VPC et Internet** : La passerelle Internet est le composant qui permet au VPC de se connecter à Internet.
    - **Autres options incorrectes** ❌ :
      - **A. Créer une connexion VPN vers le VPC** : C'est le rôle d'une passerelle privée virtuelle (VGW).
      - **C. Imposer des contraintes de bande passante** : Non, c'est le rôle d'autres services.
      - **D. Équilibrer la charge du trafic d'Internet** : C'est le rôle d'un Elastic Load Balancer.
    </details>

46. Une entreprise doit s'assurer que son point de terminaison pour une instance de base de données reste le même après une interruption de service d'une seule zone de disponibilité. L'application doit reprendre les opérations de base de données sans besoin d'intervention administrative manuelle. <br/> Comment ces exigences peuvent-elles être satisfaites ?
    - A. Utiliser plusieurs routes Amazon Route 53 vers le point de terminaison de l'instance de base de données de secours hébergé sur AWS Storage Gateway.
    - B. Configurer des déploiements Amazon RDS Multi-Availability Zone avec basculement automatique vers la base de secours.
    - C. Ajouter plusieurs Application Load Balancers et déployer l'instance de base de données avec AWS Elastic Beanstalk.
    - D. Déployer un seul Network Load Balancer pour distribuer le trafic entrant sur plusieurs origines Amazon CloudFront.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Configurer des déploiements Amazon RDS Multi-Availability Zone avec basculement automatique vers la base de secours.** : RDS Multi-AZ maintient le même endpoint DNS et bascule automatiquement.
    - **Autres options incorrectes** ❌ :
      - **A. Utiliser plusieurs routes Amazon Route 53** : Complexe et ne garantit pas la cohérence de l'endpoint.
      - **C. Ajouter plusieurs Application Load Balancers** : Non adapté pour les bases de données.
      - **D. Déployer un seul Network Load Balancer** : Pour le trafic réseau, pas pour les bases de données.
    </details>

47. Quel service managé AWS peut être utilisé pour distribuer le trafic entre une ou plusieurs instances Amazon EC2 ?
    - A. Passerelle NAT
    - B. Elastic Load Balancing
    - C. Amazon Athena
    - D. AWS PrivateLink

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Elastic Load Balancing** : Distribue le trafic entre plusieurs instances.
    - **Autres options incorrectes** ❌ :
      - **A. Passerelle NAT** : Permet aux instances d'un sous-réseau privé d'accéder à Internet.
      - **C. Amazon Athena** : Requête interactive.
      - **D. AWS PrivateLink** : Accès privé aux services AWS.
    </details>

48. AWS Trusted Advisor fournit des recommandations sur lesquels des éléments suivants ? (Choisissez deux.)
    - A. Optimisation des coûts
    - B. Audit
    - C. Architecture serverless
    - D. Performance
    - E. Évolutivité

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A, D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. Optimisation des coûts** : Recommande des économies.
      - **D. Performance** : Recommande des améliorations de performance.
    - **Autres options incorrectes** ❌ :
      - **B. Audit** : Non, c'est le rôle d'AWS Config/CloudTrail.
      - **C. Architecture serverless** : Non spécifique.
      - **E. Évolutivité** : Non spécifique.
    </details>

49. Lesquelles des tâches suivantes ne peuvent être effectuées qu'après s'être connecté avec les identifiants de l'utilisateur racine du compte AWS ? (Choisissez deux.)
    - A. Fermer un compte AWS
    - B. Créer une nouvelle politique IAM
    - C. Changer les plans de support AWS
    - D. Attacher un rôle à une instance Amazon EC2
    - E. Générer des clés d'accès pour les utilisateurs IAM

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A, C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. Fermer un compte AWS** : Nécessite l'utilisateur racine.
      - **C. Changer les plans de support AWS** : Nécessite l'utilisateur racine.
    - **Autres options incorrectes** ❌ :
      - **B. Créer une nouvelle politique IAM** : Peut être fait par un utilisateur IAM avec permissions.
      - **D. Attacher un rôle à une instance Amazon EC2** : Peut être fait par un utilisateur IAM avec permissions.
      - **E. Générer des clés d'accès pour les utilisateurs IAM** : Peut être fait par un utilisateur IAM avec permissions.
    </details>

50. La tolérance aux pannes fait référence à :
    - A. la capacité d'une application à accommoder la croissance sans changer la conception
    - B. à quel point et à quelle vitesse l'environnement d'une application peut restaurer des données perdues
    - C. à quel point votre application est sécurisée
    - D. la redondance intégrée des composants d'une application

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. la redondance intégrée des composants d'une application** : Capacité à continuer de fonctionner malgré des défaillances de composants.
    - **Autres options incorrectes** ❌ :
      - **A. la capacité d'une application à accommoder la croissance** : C'est l'évolutivité.
      - **B. à quel point et à quelle vitesse l'environnement d'une application peut restaurer des données perdues** : C'est la reprise après sinistre.
      - **C. à quel point votre application est sécurisée** : C'est la sécurité.
    </details>