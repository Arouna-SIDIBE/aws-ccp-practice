---
layout: exam
---

# Examen de pratique 23

1. Un utilisateur prévoit de migrer une charge de travail applicative vers le cloud AWS. <br/> Quel contrôle devient la responsabilité d'AWS une fois la migration terminée ?
    - A. Appliquer les correctifs sur le système d'exploitation invité
    - B. Maintenir les contrôles physiques et environnementaux
    - C. Protéger les communications et maintenir la sécurité des zones
    - D. Appliquer les correctifs sur des applications spécifiques

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Maintenir les contrôles physiques et environnementaux** : Selon le modèle de responsabilité partagée, AWS est responsable de la sécurité physique des centres de données.
    - **Autres options incorrectes** ❌ :
      - **A. Appliquer les correctifs sur le système d'exploitation invité** : Responsabilité du client pour les services IaaS.
      - **C. Protéger les communications et maintenir la sécurité des zones** : Partagé - AWS sécurise le réseau sous-jacent, le client sécurise son trafic.
      - **D. Appliquer les correctifs sur des applications spécifiques** : Responsabilité du client.
    </details>

2. Quels services peuvent être utilisés pour déployer des applications sur AWS ? (Choisissez deux.)
    - A. AWS Elastic Beanstalk
    - B. AWS Config
    - C. AWS OpsWorks
    - D. AWS Application Discovery Service
    - E. Amazon Kinesis

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS Elastic Beanstalk** : Service PaaS (Platform as a Service) pour déployer et mettre à l'échelle des applications.
      - **C. AWS OpsWorks** : Service de gestion de configuration qui utilise Chef ou Puppet pour automatiser le déploiement.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Config** : Service d'audit de configuration des ressources.
      - **D. AWS Application Discovery Service** : Aide à planifier les migrations en découvrant les applications sur site.
      - **E. Amazon Kinesis** : Service pour l'analyse de flux de données en temps réel.
    </details>

3. Quel service AWS peut fournir un centre de contact cloud à la demande ?
    - A. AWS Direct Connect
    - B. Amazon Connect
    - C. AWS Support Center
    - D. AWS Managed Services

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon Connect** : Service de centre de contact cloud entièrement géré, facile à configurer et à mettre à l'échelle.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Direct Connect** : Connexion réseau dédiée.
      - **C. AWS Support Center** : Portail de support technique AWS.
      - **D. AWS Managed Services** : Service de gestion d'infrastructure AWS.
    </details>

4. Quel outil permet aux clients sans compte AWS d'estimer les coûts pour presque tous les services AWS ?
    - A. Cost Explorer
    - B. TCO Calculator
    - C. AWS Budgets
    - D. AWS Pricing Calculator

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Pricing Calculator** : Outil en ligne gratuit permettant d'estimer les coûts AWS sans avoir de compte.
    - **Autres options incorrectes** ❌ :
      - **A. Cost Explorer** : Nécessite un compte AWS pour accéder.
      - **B. TCO Calculator** : Compare les coûts avec un environnement sur site.
      - **C. AWS Budgets** : Nécessite un compte AWS.
    </details>

5. Quel composant doit être attaché à un VPC pour permettre l'accès Internet entrant ?
    - A. Passerelle NAT
    - B. Point de terminaison VPC
    - C. Connexion VPN
    - D. Passerelle Internet

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Passerelle Internet** : Composant qui permet la communication entre les instances dans un VPC et Internet.
    - **Autres options incorrectes** ❌ :
      - **A. Passerelle NAT** : Permet aux instances dans un sous-réseau privé d'accéder à Internet, mais pas l'inverse.
      - **B. Point de terminaison VPC** : Permet une connexion privée à des services AWS sans passer par Internet.
      - **C. Connexion VPN** : Connecte votre réseau à un VPC, pas spécifiquement pour l'accès Internet entrant.
    </details>

6. Quel modèle de tarification entraînerait des économies maximales sur Amazon Elastic Compute Cloud (EC2) pour un serveur de base de données qui doit être en ligne pendant un an ?
    - A. Instance Spot
    - B. Instance à la demande
    - C. Instance réservée avec paiement partiel anticipé
    - D. Instance réservée sans paiement anticipé

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Instance réservée avec paiement partiel anticipé** : Offre la plus grande remise (jusqu'à 75%) pour les charges de travail prévisibles sur 1 ou 3 ans.
    - **Autres options incorrectes** ❌ :
      - **A. Instance Spot** : Peut être interrompue, non adaptée à une base de données critique.
      - **B. Instance à la demande** : Plus chère sur un an.
      - **D. Instance réservée sans paiement anticipé** : Remise inférieure à celle avec paiement anticipé.
    </details>

7. Une entreprise a une base de données MySQL s'exécutant sur une seule instance Amazon EC2. L'entreprise nécessite maintenant une plus haute disponibilité en cas de panne. <br/> Quel ensemble de tâches répondrait à cette exigence ?
    - A. Ajouter un Application Load Balancer devant l'instance EC2
    - B. Configurer EC2 Auto Recovery pour déplacer l'instance vers une autre zone de disponibilité
    - C. Migrer vers Amazon RDS et activer Multi-AZ
    - D. Activer la protection contre la terminaison pour l'instance EC2 pour éviter les pannes

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Migrer vers Amazon RDS et activer Multi-AZ** : RDS Multi-AZ maintient une copie de secours synchronisée dans une autre zone de disponibilité pour la haute disponibilité.
    - **Autres options incorrectes** ❌ :
      - **A. Ajouter un ALB** : Répartit le trafic, mais ne rend pas la base de données haute disponibilité.
      - **B. EC2 Auto Recovery** : Déplace l'instance vers un autre hôte, mais ne fournit pas de basculement automatique pour la base de données.
      - **D. Protection contre la terminaison** : Empêche la suppression accidentelle, mais ne protège pas contre les pannes.
    </details>

8. Une entreprise veut s'assurer que les utilisateurs de la console de gestion AWS respectent les exigences de complexité des mots de passe. <br/> Comment l'entreprise peut-elle configurer la complexité des mots de passe ?
    - A. Utiliser une politique utilisateur IAM AWS
    - B. Utiliser une politique de contrôle de service (SCP) d'AWS Organizations
    - C. Utiliser une politique de mot de passe de compte IAM AWS
    - D. Utiliser un insight managé d'AWS Security Hub

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Utiliser une politique de mot de passe de compte IAM** : Permet de définir des exigences de complexité, d'expiration, etc., pour tous les mots de passe utilisateur IAM.
    - **Autres options incorrectes** ❌ :
      - **A. Politique utilisateur IAM** : Contrôle les permissions, pas les mots de passe.
      - **B. SCP d'AWS Organizations** : Contrôle les autorisations au niveau de l'organisation, pas les mots de passe.
      - **D. AWS Security Hub** : Service de sécurité centralisé, ne configure pas les politiques de mots de passe.
    </details>

9. Selon le modèle de responsabilité partagée d'AWS, lequel des éléments suivants est de la responsabilité du client ?
    - A. Appliquer les correctifs sur le système d'exploitation invité et les applications
    - B. Appliquer les correctifs et corriger les défauts de l'infrastructure
    - C. Contrôles physiques et environnementaux
    - D. Configuration des dispositifs d'infrastructure AWS

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Appliquer les correctifs sur le système d'exploitation invité et les applications** : Pour les services IaaS comme EC2, le client est responsable du système d'exploitation et des applications.
    - **Autres options incorrectes** ❌ :
      - **B. Appliquer les correctifs sur l'infrastructure** : Responsabilité d'AWS.
      - **C. Contrôles physiques** : Responsabilité d'AWS.
      - **D. Configuration des dispositifs d'infrastructure** : Responsabilité d'AWS.
    </details>

10. Laquelle des tâches suivantes est requise pour déployer une charge de travail conforme PCI sur AWS ?
    - A. Utiliser n'importe quel service AWS et implémenter les contrôles PCI au niveau applicatif
    - B. Utiliser un service AWS qui est dans le champ d'application de la conformité PCI et ouvrir un ticket de support AWS pour activer la conformité PCI au niveau applicatif
    - C. Utiliser n'importe quel service AWS et ouvrir un ticket de support AWS pour activer la conformité PCI sur ce service
    - D. Utiliser un service AWS qui est dans le champ d'application de la conformité PCI et appliquer les contrôles PCI au niveau applicatif

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Utiliser un service AWS dans le champ d'application PCI et appliquer les contrôles PCI au niveau applicatif** : Le client doit utiliser des services AWS conformes PCI et implémenter les contrôles nécessaires dans son application.
    - **Autres options incorrectes** ❌ :
      - **A. Utiliser n'importe quel service AWS** : Doit être un service dans le champ d'application PCI.
      - **B. Ouvrir un ticket de support** : AWS ne configure pas la conformité PCI pour le client.
      - **C. Utiliser n'importe quel service et ouvrir un ticket** : Même erreur que A et B.
    </details>

11. Une entreprise construit une application qui nécessite la capacité d'envoyer, stocker et recevoir des messages entre les composants de l'application. L'entreprise a une autre exigence de traiter les messages dans l'ordre premier entré, premier sorti (FIFO). <br/> Quel service AWS l'entreprise devrait-elle utiliser ?
    - A. AWS Step Functions
    - B. Amazon Simple Notification Service (SNS)
    - C. Amazon Kinesis Data Streams
    - D. Amazon Simple Queue Service (SQS)

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon Simple Queue Service (SQS)** : File d'attente de messages gérée qui prend en charge les files d'attente FIFO pour l'ordre strict des messages.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Step Functions** : Service d'orchestration de workflows serverless.
      - **B. Amazon SNS** : Service de notification push, ne stocke pas les messages.
      - **C. Amazon Kinesis Data Streams** : Pour l'analyse de flux de données en temps réel, pas principalement pour la messagerie entre composants.
    </details>

12. AnyCompany a récemment acheté Example Corp. Les deux entreprises utilisent des ressources AWS, et AnyCompany veut une seule facture agrégée. <br/> Quelle option permet à AnyCompany de recevoir une seule facture ?
    - A. Example Corp. doit soumettre une demande à son architecte solutions AWS ou à son gestionnaire de compte technique AWS pour lier les comptes et consolider la facturation.
    - B. AnyCompany doit créer un nouveau cas de support dans l'AWS Support Center demandant que les deux factures soient combinées.
    - C. Envoyer une invitation à rejoindre l'organisation depuis le compte maître AWS Organizations d'AnyCompany à Example Corp.
    - D. Migrer les VPCs, instances Amazon EC2 et autres ressources d'Example Corp. dans le compte AWS d'AnyCompany.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Envoyer une invitation à rejoindre l'organisation** : AWS Organizations permet d'inviter des comptes existants à rejoindre une organisation pour la facturation consolidée.
    - **Autres options incorrectes** ❌ :
      - **A. Soumettre une demande à un SA/TAM** : Non, le processus se fait via AWS Organizations.
      - **B. Créer un cas de support** : Non, utilisez AWS Organizations.
      - **D. Migrer les ressources** : Complexe et inutile, AWS Organizations permet la facturation consolidée sans migration.
    </details>

13. Quel outil peut être utilisé pour créer des alertes lorsque le coût réel ou prévu des services AWS dépasse un certain seuil ?
    - A. Cost Explorer
    - B. AWS Budgets
    - C. AWS Cost and Usage Report
    - D. AWS CloudTrail

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Budgets** : Permet de définir des budgets et des alertes lorsque les coûts réels ou prévus dépassent un seuil.
    - **Autres options incorrectes** ❌ :
      - **A. Cost Explorer** : Visualise les coûts mais ne crée pas d'alertes.
      - **C. AWS Cost and Usage Report** : Fournit des données détaillées sur les coûts, pas d'alertes.
      - **D. AWS CloudTrail** : Journalise l'activité des API, pas les coûts.
    </details>

14. Un utilisateur a une connaissance limitée des services AWS, mais veut déployer rapidement une application Node.js évolutive dans le cloud AWS. <br/> Quel service devrait être utilisé pour déployer l'application ?
    - A. AWS CloudFormation
    - B. AWS Elastic Beanstalk
    - C. Amazon EC2
    - D. AWS OpsWorks

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Elastic Beanstalk** : Service PaaS qui gère automatiquement le déploiement, la mise à l'échelle et la supervision des applications.
    - **Autres options incorrectes** ❌ :
      - **A. AWS CloudFormation** : Service d'infrastructure as code, nécessite plus d'expertise.
      - **C. Amazon EC2** : Nécessite de gérer l'infrastructure manuellement.
      - **D. AWS OpsWorks** : Basé sur Chef/Puppet, plus complexe.
    </details>

15. Quelle vérification d'AWS Trusted Advisor est disponible pour tous les utilisateurs AWS ?
    - A. Vérifications de base
    - B. Toutes les vérifications
    - C. Vérifications d'optimisation des coûts
    - D. Vérifications de tolérance aux pannes

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Vérifications de base** : Incluses avec tous les comptes AWS (plan Basic Support).
    - **Autres options incorrectes** ❌ :
      - **B. Toutes les vérifications** : Seuls les plans Business, Enterprise, et Enterprise On-Ramp ont accès à toutes les vérifications.
      - **C. Vérifications d'optimisation des coûts** : Fait partie des vérifications complètes.
      - **D. Vérifications de tolérance aux pannes** : Fait partie des vérifications complètes.
    </details>

16. Un développeur web craint qu'une attaque DDoS ne cible une application. <br/> Quels services ou fonctionnalités AWS peuvent aider à protéger contre une telle attaque ? (Choisissez deux.)
    - A. AWS Shield
    - B. AWS CloudTrail
    - C. Amazon CloudFront
    - D. AWS Support Center
    - E. AWS Service Health Dashboard

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS Shield** : Service de protection DDoS managé.
      - **C. Amazon CloudFront** : Le réseau mondial de CloudFront absorbe et atténue les attaques DDoS de couche 3 et 4.
    - **Autres options incorrectes** ❌ :
      - **B. AWS CloudTrail** : Journalisation des API, pas de protection DDoS.
      - **D. AWS Support Center** : Portail de support.
      - **E. AWS Service Health Dashboard** : Montre l'état des services AWS.
    </details>

17. Quel service AWS donne aux utilisateurs un accès à la demande et en libre-service aux rapports de contrôle de conformité AWS ?
    - A. AWS Config
    - B. Amazon GuardDuty
    - C. AWS Trusted Advisor
    - D. AWS Artifact

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Artifact** : Portail centralisé pour télécharger des rapports de conformité à la demande.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Config** : Audite la configuration des ressources.
      - **B. Amazon GuardDuty** : Détection des menaces intelligente.
      - **C. AWS Trusted Advisor** : Recommandations d'optimisation.
    </details>

18. Une entreprise veut fournir à l'un de ses employés l'accès à Amazon RDS. L'entreprise veut également limiter l'interaction à seulement l'AWS CLI et les SDK AWS. <br/> Quelle combinaison d'actions l'entreprise devrait-elle prendre pour répondre à ces exigences tout en suivant les principes du moindre privilège ? (Choisissez deux.)
    - A. Créer un utilisateur IAM et fournir un accès à la console de gestion AWS uniquement.
    - B. Créer un utilisateur IAM et fournir un accès programmatique uniquement.
    - C. Créer un rôle IAM et fournir un accès à la console de gestion AWS uniquement.
    - D. Créer une politique IAM avec un accès administrateur et l'attacher à l'utilisateur IAM.
    - E. Créer une politique IAM avec un accès Amazon RDS et l'attacher à l'utilisateur IAM.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Créer un utilisateur IAM avec accès programmatique uniquement** : Correspond à l'exigence de n'utiliser que CLI/SDK.
      - **E. Créer une politique IAM avec accès Amazon RDS** : Applique le principe du moindre privilège en ne donnant que l'accès nécessaire.
    - **Autres options incorrectes** ❌ :
      - **A. Accès console uniquement** : Non, l'employé a besoin d'un accès programmatique.
      - **C. Rôle IAM avec accès console** : Rôle généralement pour les services, et accès console non requis.
      - **D. Politique administrateur** : Donne trop de permissions, violation du moindre privilège.
    </details>

19. Une entreprise a une exigence de conformité pour enregistrer et évaluer les changements de configuration, ainsi que pour effectuer des actions de remédiation sur les ressources AWS. <br/> Quel service AWS l'entreprise devrait-elle utiliser ?
    - A. AWS Config
    - B. AWS Secrets Manager
    - C. AWS CloudTrail
    - D. AWS Trusted Advisor

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Config** : Enregistre les changements de configuration et permet de définir des règles pour évaluer la conformité et déclencher des actions de remédiation.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Secrets Manager** : Gère les secrets.
      - **C. AWS CloudTrail** : Enregistre l'activité des API, pas les changements de configuration.
      - **D. AWS Trusted Advisor** : Fournit des recommandations.
    </details>

20. Quels sont les avantages de déployer une application avec des instances Amazon EC2 dans plusieurs zones de disponibilité ? (Choisissez deux.)
    - A. Prévenir un point de défaillance unique
    - B. Réduire les coûts opérationnels de l'application
    - C. Permettre à l'application de servir des utilisateurs inter-régions avec une faible latence
    - D. Augmenter la disponibilité de l'application
    - E. Augmenter la charge de l'application

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Prévenir un point de défaillance unique** : Si une zone de disponibilité tombe en panne, l'application peut continuer dans l'autre.
      - **D. Augmenter la disponibilité** : La redondance multi-AZ améliore la disponibilité globale.
    - **Autres options incorrectes** ❌ :
      - **B. Réduire les coûts opérationnels** : Multi-AZ augmente généralement les coûts (plus d'instances).
      - **C. Servir des utilisateurs inter-régions avec faible latence** : Multi-AZ est dans une région, pour la latence inter-régions, il faut multi-régions.
      - **E. Augmenter la charge** : Multi-AZ améliore la disponibilité, pas la capacité de charge (cela relève de la mise à l'échelle).
    </details>

21. Une charge de travail sur AWS s'exécutera pour un avenir prévisible en utilisant un nombre constant d'instances Amazon EC2. <br/> Quel modèle de tarification minimisera le coût tout en garantissant que les ressources de calcul restent disponibles ?
    - A. Hôtes dédiés
    - B. Instances à la demande
    - C. Instances Spot
    - D. Instances réservées

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Instances réservées** : Offrent les plus grandes économies pour des charges de travail stables et prévisibles.
    - **Autres options incorrectes** ❌ :
      - **A. Hôtes dédiés** : Serveurs physiques dédiés, plus coûteux.
      - **B. Instances à la demande** : Plus chères sur le long terme.
      - **C. Instances Spot** : Peuvent être interrompues, non garanties pour une charge de travail critique.
    </details>

22. Quel outil peut être utilisé pour identifier les changements planifiés de l'infrastructure AWS ?
    - A. AWS Personal Health Dashboard
    - B. AWS Trusted Advisor
    - C. Billing Dashboard
    - D. AWS Config

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Personal Health Dashboard** : Fournit des alertes personnalisées sur les événements planifiés affectant vos ressources.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Trusted Advisor** : Recommandations d'optimisation.
      - **C. Billing Dashboard** : Informations de facturation.
      - **D. AWS Config** : Audite la configuration des ressources.
    </details>

23. Lequel des éléments suivants est de la responsabilité du client lors de l'utilisation d'Amazon RDS ?
    - A. Appliquer les correctifs sur le système d'exploitation du matériel sous-jacent
    - B. Contrôler le trafic vers et depuis la base de données via les groupes de sécurité
    - C. Exécuter des sauvegardes qui permettent une récupération à un instant donné d'une instance de base de données
    - D. Remplacer les instances de base de données défaillantes

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Contrôler le trafic via les groupes de sécurité** : Le client configure les groupes de sécurité pour autoriser l'accès à la base de données.
    - **Autres options incorrectes** ❌ :
      - **A. Appliquer les correctifs sur le système d'exploitation sous-jacent** : Responsabilité d'AWS pour RDS.
      - **C. Exécuter des sauvegardes** : RDS effectue des sauvegardes automatisées (mais le client peut initier des sauvegardes manuelles).
      - **D. Remplacer les instances défaillantes** : RDS gère automatiquement le basculement en Multi-AZ.
    </details>

24. Quelle est la responsabilité du client lors de l'utilisation d'AWS Lambda ?
    - A. Configuration du système d'exploitation
    - B. Gestion de l'application
    - C. Gestion de la plateforme
    - D. Chiffrement du code

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Gestion de l'application** : Le client est responsable du code, des dépendances, et de la configuration de l'application.
    - **Autres options incorrectes** ❌ :
      - **A. Configuration du système d'exploitation** : AWS gère le système d'exploitation sous-jacent.
      - **C. Gestion de la plateforme** : AWS gère la plateforme d'exécution.
      - **D. Chiffrement du code** : AWS chiffre le code au repos par défaut, mais le client peut gérer des clés de chiffrement.
    </details>

25. Une entreprise veut être notifiée lorsque ses coûts ou son utilisation du cloud AWS dépassent des seuils définis. <br/> Quel service AWS répondra à ces exigences ?
    - A. AWS Budgets
    - B. Cost Explorer
    - C. AWS CloudTrail
    - D. Amazon Macie

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Budgets** : Permet de définir des budgets et des alertes basés sur les coûts ou l'utilisation.
    - **Autres options incorrectes** ❌ :
      - **B. Cost Explorer** : Visualise les coûts mais ne crée pas d'alertes.
      - **C. AWS CloudTrail** : Journalise l'activité des API.
      - **D. Amazon Macie** : Découverte de données sensibles.
    </details>

26. Quel service AWS fournit la capacité d'héberger une base de données NoSQL dans le cloud AWS ?
    - A. Amazon Aurora
    - B. Amazon DynamoDB
    - C. Amazon RDS
    - D. Amazon Redshift

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon DynamoDB** : Base de données NoSQL clé-valeur et document entièrement gérée.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Aurora** : Base de données relationnelle compatible MySQL/PostgreSQL.
      - **C. Amazon RDS** : Service de base de données relationnelle.
      - **D. Amazon Redshift** : Entrepôt de données.
    </details>

27. Quel service AWS permet aux clients d'acheter de la capacité Amazon EC2 inutilisée à un tarif souvent réduit ?
    - A. Instances réservées
    - B. Instances à la demande
    - C. Instances dédiées
    - D. Instances Spot

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Instances Spot** : Permettent d'enchérir sur la capacité EC2 excédentaire à des prix réduits.
    - **Autres options incorrectes** ❌ :
      - **A. Instances réservées** : Engagement à long terme pour des instances réservées.
      - **B. Instances à la demande** : Tarif standard sans réduction.
      - **C. Instances dédiées** : Matériel dédié à un client.
    </details>

28. Quel service ou fonctionnalité AWS nécessite un fournisseur d'accès à Internet (FAI) et une installation de colocalisation pour être mis en œuvre ?
    - A. AWS VPN
    - B. Amazon Connect
    - C. AWS Direct Connect
    - D. Passerelle Internet

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Direct Connect** : Nécessite une connexion physique dans un centre de colocalisation partenaire AWS.
    - **Autres options incorrectes** ❌ :
      - **A. AWS VPN** : Peut être établi via Internet sans installation physique.
      - **B. Amazon Connect** : Service cloud purement logiciel.
      - **D. Passerelle Internet** : Composant virtuel dans un VPC.
    </details>

29. Quels services AWS offrent des capacités de calcul ? (Choisissez deux.)
    - A. Amazon EC2
    - B. Amazon S3
    - C. Amazon Elastic Block Store (EBS)
    - D. Amazon Cognito
    - E. AWS Lambda

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Amazon EC2** : Service de calcul élastique basé sur des instances virtuelles.
      - **E. AWS Lambda** : Service de calcul serverless.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon S3** : Service de stockage d'objets.
      - **C. Amazon EBS** : Stockage par blocs pour EC2.
      - **D. Amazon Cognito** : Service de gestion des identités utilisateur.
    </details>

30. Quel service AWS peut être utilisé pour stocker et gérer en privé des versions de code source ?
    - A. AWS CodeBuild
    - B. AWS CodeCommit
    - C. AWS CodePipeline
    - D. AWS CodeStar

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS CodeCommit** : Service de contrôle de code source géré, compatible Git.
    - **Autres options incorrectes** ❌ :
      - **A. AWS CodeBuild** : Service de build et test continu.
      - **C. AWS CodePipeline** : Service d'intégration et livraison continues.
      - **D. AWS CodeStar** : Service de développement collaboratif.
    </details>

31. Quel service AWS un praticien cloud devrait-il utiliser pour identifier les vulnérabilités de sécurité d'un compte AWS ?
    - A. AWS Secrets Manager
    - B. Amazon Cognito
    - C. Amazon Macie
    - D. AWS Trusted Advisor

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Trusted Advisor** : Fournit des vérifications de sécurité qui identifient les configurations à risque.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Secrets Manager** : Gère les secrets.
      - **B. Amazon Cognito** : Gestion des identités utilisateur.
      - **C. Amazon Macie** : Découverte de données sensibles.
    </details>

32. Une entreprise veut s'assurer que son infrastructure est conçue pour la tolérance aux pannes et la continuité des activités en cas de perturbation environnementale. <br/> Quel composant d'infrastructure AWS l'entreprise devrait-elle répliquer ?
    - A. Emplacements périphériques
    - B. Zones de disponibilité
    - C. Régions
    - D. Amazon Route 53

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Zones de disponibilité** : Des centres de données distincts au sein d'une région, conçus pour être isolés des défaillances.
    - **Autres options incorrectes** ❌ :
      - **A. Emplacements périphériques** : Pour la mise en cache de contenu, pas pour l'exécution d'applications.
      - **C. Régions** : La réplication multi-régions est pour la reprise après sinistre à l'échelle régionale, mais plus coûteuse.
      - **D. Amazon Route 53** : Service DNS, pas un composant d'infrastructure à répliquer.
    </details>

33. Quel service ou fonctionnalité AWS est utilisé pour envoyer à la fois des messages texte et des e-mails depuis des applications distribuées ?
    - A. Amazon Simple Notification Service (SNS)
    - B. Amazon Simple Email Service (SES)
    - C. Alertes Amazon CloudWatch
    - D. Amazon Simple Queue Service (SQS)

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon Simple Notification Service (SNS)** : Service de notification push qui prend en charge SMS, e-mail, HTTP, etc.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Simple Email Service (SES)** : Service d'envoi d'e-mails transactionnels uniquement.
      - **C. Alertes Amazon CloudWatch** : Notifications basées sur des métriques, pas pour l'envoi de messages texte/e-mail généraux.
      - **D. Amazon Simple Queue Service (SQS)** : File d'attente de messages pour la communication découplée.
    </details>

34. Quels principes de conception du cloud AWS peuvent aider à augmenter la fiabilité ? (Choisissez deux.)
    - A. Utiliser une architecture monolithique
    - B. Mesurer l'efficacité globale
    - C. Tester les procédures de récupération
    - D. Adopter un modèle de consommation
    - E. Récupérer automatiquement après une défaillance

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Tester les procédures de récupération** : Essentiel pour s'assurer que la reprise après sinistre fonctionne.
      - **E. Récupérer automatiquement après une défaillance** : L'automatisation de la récupération améliore la fiabilité.
    - **Autres options incorrectes** ❌ :
      - **A. Utiliser une architecture monolithique** : Généralement moins fiable qu'une architecture microservices découplée.
      - **B. Mesurer l'efficacité globale** : Relève de l'efficacité des performances.
      - **D. Adopter un modèle de consommation** : Avantage économique, pas directement lié à la fiabilité.
    </details>

35. Une entreprise prévoit de lancer un site de commerce électronique dans une seule région AWS pour une base d'utilisateurs mondiale. <br/> Quels services AWS permettront à l'entreprise d'atteindre les utilisateurs et de fournir une faible latence et des vitesses de transfert élevées ? (Choisissez deux.)
    - A. Application Load Balancer
    - B. AWS Global Accelerator
    - C. AWS Direct Connect
    - D. Amazon CloudFront
    - E. AWS Lambda

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. AWS Global Accelerator** : Dirige le trafic utilisateur vers le point de terminaison AWS optimal via le réseau mondial d'AWS.
      - **D. Amazon CloudFront** : CDN qui diffuse le contenu depuis des emplacements périphériques proches des utilisateurs.
    - **Autres options incorrectes** ❌ :
      - **A. Application Load Balancer** : Répartit le trafic au sein d'une région.
      - **C. AWS Direct Connect** : Connexion dédiée entre votre centre de données et AWS, pas pour les utilisateurs finaux.
      - **E. AWS Lambda** : Service de calcul serverless.
    </details>

36. Une entreprise veut se connecter à AWS via une connexion privée à faible latence depuis son bureau distant. <br/> Quelle est la méthode recommandée pour répondre à ces exigences ?
    - A. Créer un tunnel VPN
    - B. Se connecter via l'Internet public
    - C. Utiliser le peering VPC pour créer une connexion.
    - D. Utiliser AWS Direct Connect.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Utiliser AWS Direct Connect** : Fournit une connexion réseau dédiée et privée avec une latence plus prévisible que l'Internet public.
    - **Autres options incorrectes** ❌ :
      - **A. Créer un tunnel VPN** : Passe par Internet, donc latence variable.
      - **B. Se connecter via Internet** : Non privé et latence variable.
      - **C. Peering VPC** : Connecte deux VPCs, pas un bureau distant à AWS.
    </details>

37. Quel service AWS peut être utilisé pour récupérer des rapports de conformité à la demande ?
    - A. AWS Secrets Manager
    - B. AWS Artifact
    - C. AWS Security Hub
    - D. AWS Certificate Manager

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Artifact** : Portail pour télécharger des rapports de conformité à la demande.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Secrets Manager** : Gère les secrets.
      - **C. AWS Security Hub** : Service de sécurité centralisé.
      - **D. AWS Certificate Manager** : Gère les certificats SSL/TLS.
    </details>

38. Une entreprise a un site web hébergé sur AWS derrière un Application Load Balancer. L'entreprise veut protéger le site web contre les injections SQL ou le cross-site scripting. <br/> Quel service AWS l'entreprise devrait-elle utiliser ?
    - A. Amazon GuardDuty
    - B. AWS WAF
    - C. AWS Trusted Advisor
    - D. Amazon Inspector

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS WAF** : Web Application Firewall qui protège contre les vulnérabilités web courantes comme SQL injection et XSS.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon GuardDuty** : Détection des menaces intelligente.
      - **C. AWS Trusted Advisor** : Recommandations d'optimisation.
      - **D. Amazon Inspector** : Évalue la sécurité des applications déployées sur EC2.
    </details>

39. Comment une application web devrait-elle être déployée pour assurer une haute disponibilité dans le cloud AWS ?
    - A. Déployer plusieurs instances de l'application dans plusieurs zones de disponibilité.
    - B. Déployer plusieurs instances de l'application dans une seule zone de disponibilité.
    - C. Déployer l'application sur une instance Amazon EC2 optimisée pour le calcul dans une seule zone de disponibilité.
    - D. Déployer l'application dans une instance Amazon EC2 dans un groupe Auto Scaling.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Déployer plusieurs instances dans plusieurs zones de disponibilité** : Protège contre les défaillances au niveau de la zone de disponibilité.
    - **Autres options incorrectes** ❌ :
      - **B. Plusieurs instances dans une seule zone** : Pas de protection contre une défaillance de la zone.
      - **C. Instance optimisée pour le calcul dans une seule zone** : Aucune redondance.
      - **D. Une instance dans un groupe Auto Scaling** : Auto Scaling peut remplacer une instance défaillante, mais si la zone tombe en panne, toutes les instances de cette zone sont affectées.
    </details>

40. Une entreprise exécute une base de données Oracle auto-gérée directement sur Amazon EC2 pour sa base de données en régime permanent. L'entreprise veut réduire les coûts de calcul. <br/> Quelle option l'entreprise devrait-elle utiliser pour maximiser les économies sur une période de 3 ans ?
    - A. Instances EC2 dédiées
    - B. Instances EC2 Spot
    - C. Instances EC2 réservées
    - D. Instances EC2 à la demande

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Instances EC2 réservées** : Offrent les plus grandes économies (jusqu'à 75%) pour des charges de travail stables sur 1 ou 3 ans.
    - **Autres options incorrectes** ❌ :
      - **A. Instances EC2 dédiées** : Matériel dédié, plus coûteux.
      - **B. Instances EC2 Spot** : Peuvent être interrompues, non adaptées à une base de données critique.
      - **D. Instances EC2 à la demande** : Plus chères sur 3 ans.
    </details>

41. Un auditeur externe a demandé à une entreprise de fournir une liste de tous ses utilisateurs IAM, y compris l'état des identifiants et des clés d'accès des utilisateurs. <br/> Quelle est la façon la PLUS SIMPLE de fournir cette information ?
    - A. Créer un compte utilisateur IAM pour l'auditeur, en accordant à l'auditeur des permissions d'administrateur.
    - B. Prendre une capture d'écran de la page de chaque utilisateur dans la console de gestion AWS, puis fournir les captures d'écran à l'auditeur.
    - C. Télécharger le rapport d'identifiants IAM, puis fournir le rapport à l'auditeur.
    - D. Télécharger le rapport AWS Trusted Advisor, puis fournir le rapport à l'auditeur.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Télécharger le rapport d'identifiants IAM** : Génère un rapport CSV contenant l'état de tous les utilisateurs IAM et de leurs clés d'accès.
    - **Autres options incorrectes** ❌ :
      - **A. Créer un utilisateur IAM avec permissions d'administrateur** : Donne trop d'accès, violation de sécurité.
      - **B. Captures d'écran** : Fastidieux et peu pratique pour un grand nombre d'utilisateurs.
      - **D. Rapport AWS Trusted Advisor** : Ne contient pas ces informations détaillées.
    </details>

42. Quels sont les avantages de la facturation consolidée pour les services cloud AWS ? (Choisissez deux.)
    - A. Remises volume
    - B. Des frais supplémentaires minimes pour l'utilisation
    - C. Une seule facture pour plusieurs comptes
    - D. Options de paiement en plusieurs fois
    - E. Création de budgets personnalisés pour les coûts et l'utilisation

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Remises volume** : L'utilisation agrégée de tous les comptes peut atteindre des seuils de volume plus rapidement.
      - **C. Une seule facture pour plusieurs comptes** : Simplifie la gestion financière.
    - **Autres options incorrectes** ❌ :
      - **B. Frais supplémentaires minimes** : La facturation consolidée est gratuite.
      - **D. Paiement en plusieurs fois** : Non offert par la facturation consolidée.
      - **E. Création de budgets personnalisés** : Fait via AWS Budgets, pas spécifique à la facturation consolidée.
    </details>

43. Une entreprise s'attend à un pic de trafic Internet à court terme pour son application. Pendant l'augmentation du trafic, l'application ne peut pas être interrompue. L'entreprise doit également minimiser les coûts et maximiser la flexibilité. <br/> Quel type d'instance Amazon EC2 l'entreprise devrait-elle utiliser pour répondre à ces exigences ?
    - A. Instances à la demande
    - B. Instances Spot
    - C. Instances réservées
    - D. Hôtes dédiés

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Instances à la demande** : Parfaites pour les pics de trafic à court terme sans engagement, et garanties de ne pas être interrompues.
    - **Autres options incorrectes** ❌ :
      - **B. Instances Spot** : Peuvent être interrompues, ne répondent pas à l'exigence de non-interruption.
      - **C. Instances réservées** : Pour des charges de travail stables à long terme, pas flexibles pour un pic à court terme.
      - **D. Hôtes dédiés** : Coûteux et non flexibles.
    </details>

44. Une entreprise veut suivre les changements de configuration des ressources AWS pour des raisons de conformité. <br/> Quelle fonctionnalité AWS peut être utilisée pour répondre à cette exigence ?
    - A. AWS Cost and Usage Report
    - B. Politiques de contrôle de service (SCP) d'AWS Organizations
    - C. Règles AWS Config
    - D. Journaux de flux VPC

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Règles AWS Config** : Permettent d'évaluer si les configurations des ressources sont conformes aux règles définies.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Cost and Usage Report** : Données de coûts, pas de configuration.
      - **B. SCP d'AWS Organizations** : Contrôlent les autorisations au niveau de l'organisation.
      - **D. Journaux de flux VPC** : Capturent le trafic réseau, pas les changements de configuration.
    </details>

45. Une entreprise construit une application qui doit diffuser des images et des vidéos globalement avec une latence minimale. <br/> Quelle approche l'entreprise peut-elle utiliser pour accomplir cela de manière rentable ?
    - A. Diffuser le contenu via Amazon CloudFront.
    - B. Stocker le contenu sur Amazon S3 et activer la réplication inter-régions S3.
    - C. Implémenter un VPN à travers plusieurs régions AWS.
    - D. Diffuser le contenu via AWS PrivateLink.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Diffuser via Amazon CloudFront** : CDN mondial qui diffuse le contenu depuis des emplacements périphériques proches des utilisateurs.
    - **Autres options incorrectes** ❌ :
      - **B. Réplication inter-régions S3** : Réplique les données vers d'autres régions, mais ne fournit pas de diffusion optimisée comme un CDN.
      - **C. VPN multi-régions** : Connecte des réseaux, pas pour la diffusion de contenu.
      - **D. AWS PrivateLink** : Permet un accès privé aux services AWS, pas pour la diffusion de contenu.
    </details>

46. La meilleure pratique IAM AWS pour accorder le moindre privilège est de :
    - A. appliquer une politique IAM à un groupe IAM et limiter la taille du groupe.
    - B. exiger l'authentification multi-facteurs (MFA) pour tous les utilisateurs IAM.
    - C. exiger que chaque utilisateur IAM ayant des permissions différentes ait plusieurs mots de passe.
    - D. appliquer une politique IAM uniquement aux utilisateurs IAM qui en ont besoin.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Appliquer une politique IAM uniquement aux utilisateurs qui en ont besoin** : Le principe du moindre privilège consiste à accorder uniquement les permissions nécessaires à chaque utilisateur.
    - **Autres options incorrectes** ❌ :
      - **A. Appliquer à un groupe et limiter la taille** : La taille du groupe n'affecte pas les privilèges.
      - **B. Exiger MFA** : Améliore la sécurité, mais ne concerne pas directement le moindre privilège.
      - **C. Plusieurs mots de passe** : Non, chaque utilisateur a un seul mot de passe.
    </details>

47. Quel avantage du cloud computing AWS démontre sa capacité à offrir des coûts variables plus bas grâce à des volumes d'achat élevés ?
    - A. Tarification à l'usage
    - B. Haute disponibilité
    - C. Portée mondiale
    - D. Économies d'échelle

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Économies d'échelle** : AWS bénéficie d'économies d'échelle en achetant en gros et en passant les économies aux clients.
    - **Autres options incorrectes** ❌ :
      - **A. Tarification à l'usage** : Modèle de facturation, pas spécifiquement lié aux volumes.
      - **B. Haute disponibilité** : Capacité à rester opérationnel.
      - **C. Portée mondiale** : Présence dans le monde entier.
    </details>

48. Une entreprise pharmaceutique opère son infrastructure dans une seule région AWS. L'entreprise a des milliers de VPCs dans divers comptes AWS qu'elle veut interconnecter. <br/> Quel service ou fonctionnalité AWS l'entreprise devrait-elle utiliser pour aider à simplifier la gestion et réduire les coûts opérationnels ?
    - A. Point de terminaison VPC
    - B. AWS Direct Connect
    - C. AWS Transit Gateway
    - D. Peering VPC

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Transit Gateway** : Service de réseau centralisé pour connecter plusieurs VPCs et réseaux sur site, simplifiant la gestion.
    - **Autres options incorrectes** ❌ :
      - **A. Point de terminaison VPC** : Permet un accès privé à des services AWS, pas pour interconnecter des VPCs.
      - **B. AWS Direct Connect** : Connecte votre centre de données à AWS.
      - **D. Peering VPC** : Connexion point à point entre deux VPCs, difficile à gérer à grande échelle (n² connexions).
    </details>

49. Comment AWS peut-il permettre à une entreprise de contrôler les dépenses lorsque l'utilisation d'une application change de manière imprévisible ?
    - A. AWS remboursera la différence de coût si un client passe à des serveurs plus grands.
    - B. L'application peut être construite pour monter ou descendre en charge automatiquement selon les besoins en ressources
    - C. Les instances Spot seront automatiquement utilisées si le prix est inférieur aux instances à la demande.
    - D. Amazon CloudWatch prédira automatiquement quelles ressources sont nécessaires.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. L'application peut être construite pour s'ajuster automatiquement** : L'élasticité du cloud permet de faire évoluer les ressources en fonction de la demande, contrôlant ainsi les coûts.
    - **Autres options incorrectes** ❌ :
      - **A. AWS remboursera la différence** : Non, AWS n'offre pas cela.
      - **C. Instances Spot automatiquement utilisées** : Non, le client doit choisir le type d'instance.
      - **D. CloudWatch prédira** : CloudWatch surveille, mais ne prédit pas automatiquement les besoins.
    </details>

50. Quel service ou fonctionnalité AWS peut être utilisé pour prévenir les attaques par injection SQL ?
    - A. Groupes de sécurité
    - B. ACL réseau
    - C. AWS WAF
    - D. Politique IAM

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS WAF** : Web Application Firewall qui peut bloquer les requêtes contenant des motifs d'injection SQL.
    - **Autres options incorrectes** ❌ :
      - **A. Groupes de sécurité** : Firewall au niveau de l'instance pour contrôler le trafic réseau, pas le contenu des requêtes.
      - **B. ACL réseau** : Contrôle d'accès au niveau du sous-réseau, pas le contenu des requêtes.
      - **D. Politique IAM** : Contrôle l'accès aux ressources AWS, pas aux vulnérabilités applicatives.
    </details>