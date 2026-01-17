---
layout: exam
---

# Examen de pratique 11

1. Comment une entreprise peut-elle réduire son Coût Total de Possession (TCO) en utilisant AWS ?
    - A. En minimisant les dépenses d'investissement importantes.
    - B. En n'ayant aucune responsabilité pour les coûts de licences tierces.
    - C. En n'ayant aucune dépense opérationnelle.
    - D. En laissant AWS gérer les applications.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. En minimisant les dépenses d'investissement importantes** : Le cloud AWS permet de passer d'un modèle de dépenses en capital (CapEx) élevé à un modèle de dépenses opérationnelles (OpEx) variable, réduisant ainsi le besoin d'investissements initiaux importants.
    - **Autres options incorrectes** ❌ :
      - **B. En n'ayant aucune responsabilité pour les coûts de licences tierces** : Les clients restent responsables des coûts de licences logicielles tierces, sauf si elles sont incluses dans le service AWS.
      - **C. En n'ayant aucune dépense opérationnelle** : Les dépenses opérationnelles existent toujours, mais elles deviennent variables et basées sur l'utilisation.
      - **D. En laissant AWS gérer les applications** : AWS ne gère pas les applications des clients par défaut. Selon le modèle de responsabilité partagée, le client est responsable de la gestion de ses applications.
    </details>

2. Quelles options AWS met à disposition des clients qui souhaitent se former à la sécurité dans le cloud dans un cadre dirigé par un instructeur ? (Choisissez DEUX)
    - A. AWS Trusted Advisor.
    - B. AWS Online Tech Talks.
    - C. AWS Blog.
    - D. AWS Forums.
    - E. AWS Classroom Training.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. AWS Online Tech Talks** : Webinaires en ligne gratuits couvrant divers sujets AWS, y compris la sécurité.
      - **E. AWS Classroom Training** : Formations en présentiel ou virtuelles avec instructeur, proposées par AWS Training.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Trusted Advisor** : Outil de recommandation automatisé, pas une formation dirigée par un instructeur.
      - **C. AWS Blog** : Ressource écrite pour les articles techniques et les annonces.
      - **D. AWS Forums** : Plateforme communautaire pour poser des questions et partager des connaissances.
    </details>

3. Lesquels des éléments suivants améliorent la sécurité d'accès à la console de gestion AWS ? (Choisissez DEUX)
    - A. AWS Secrets Manager.
    - B. AWS Certificate Manager.
    - C. AWS Multi-Factor Authentication (AWS MFA).
    - D. Groupes de sécurité.
    - E. Politiques de mot de passe.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. AWS Multi-Factor Authentication (AWS MFA)** : Ajoute une couche de sécurité supplémentaire en exigeant un code unique en plus du mot de passe.
      - **E. Politiques de mot de passe** : Permettent d'imposer des exigences de complexité et de rotation des mots de passe pour les utilisateurs IAM.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Secrets Manager** : Gère les secrets (mots de passe, clés API) pour les applications, pas pour l'authentification console.
      - **B. AWS Certificate Manager** : Gère les certificats SSL/TLS, pas l'authentification console.
      - **D. Groupes de sécurité** : Firewall au niveau de l'instance pour le trafic réseau, pas pour l'accès console.
    </details>

4. Quelles fonctionnalités peuvent être configurées via le tableau de bord Amazon Virtual Private Cloud (Amazon VPC) ? (Choisissez DEUX)
    - A. Distributions Amazon CloudFront.
    - B. Amazon Route 53.
    - C. Groupes de sécurité.
    - D. Sous-réseaux.
    - E. Elastic Load Balancing.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Groupes de sécurité** : Firewall au niveau de l'instance, configurables dans l'onglet "Security Groups" du tableau de bord VPC.
      - **D. Sous-réseaux** : Subdivisions d'un VPC, configurables dans l'onglet "Subnets".
    - **Autres options incorrectes** ❌ :
      - **A. Distributions Amazon CloudFront** : Configurées via le service CloudFront, pas dans le tableau de bord VPC.
      - **B. Amazon Route 53** : Service DNS, configuré via son propre tableau de bord.
      - **E. Elastic Load Balancing** : Configuré via le service ELB, bien qu'il soit étroitement lié au VPC, sa configuration n'est pas dans le tableau de bord VPC principal.
    </details>

5. Pour quel processus d'audit AWS a-t-elle l'unique responsabilité ?
    - A. Politiques AWS IAM.
    - B. Sécurité physique.
    - C. Politiques de compartiment Amazon S3.
    - D. Journaux AWS CloudTrail.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Sécurité physique** : Selon le modèle de responsabilité partagée, AWS est responsable de la sécurité physique des centres de données, y compris les contrôles d'accès, la surveillance et la protection environnementale.
    - **Autres options incorrectes** ❌ :
      - **A. Politiques AWS IAM** : Le client est responsable de la création et de la gestion des politiques IAM.
      - **C. Politiques de compartiment Amazon S3** : Le client est responsable de la configuration des politiques de compartiment S3.
      - **D. Journaux AWS CloudTrail** : AWS fournit le service, mais le client est responsable de l'activation, de la configuration et de la protection des journaux.
    </details>

6. Quels sont les avantages de la facturation consolidée AWS ? (Choisissez DEUX)
    - A. La possibilité de recevoir une seule facture pour plusieurs comptes.
    - B. L'augmentation par défaut des limites de service dans tous les comptes.
    - C. Une remise fixe sur la facture mensuelle.
    - D. Des remises volume potentielles, car l'utilisation de tous les comptes est combinée.
    - E. L'extension automatique du plan de support AWS du compte maître à tous les comptes.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. La possibilité de recevoir une seule facture pour plusieurs comptes** : La facturation consolidée regroupe les frais de tous les comptes membres en une seule facture.
      - **D. Des remises volume potentielles, car l'utilisation de tous les comptes est combinée** : L'utilisation agrégée peut atteindre des seuils de volume plus élevés, permettant des remises (par exemple, pour S3, transfert de données).
    - **Autres options incorrectes** ❌ :
      - **B. L'augmentation par défaut des limites de service dans tous les comptes** : Les limites de service ne sont pas augmentées automatiquement. Il faut faire une demande de relèvement de limite.
      - **C. Une remise fixe sur la facture mensuelle** : Il n'y a pas de remise fixe. Les remises dépendent de l'utilisation agrégée.
      - **E. L'extension automatique du plan de support AWS du compte maître à tous les comptes** : Les plans de support sont par compte. La facturation consolidée ne partage pas les plans de support.
    </details>

7. Quelles tâches IT courantes AWS peut-elle prendre en charge pour libérer les ressources IT de l'entreprise ? (Choisissez DEUX)
    - A. Appliquer des correctifs aux logiciels de base de données.
    - B. Tester les versions d'applications.
    - C. Sauvegarder les bases de données.
    - D. Créer un schéma de base de données.
    - E. Exécuter des tests d'intrusion.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Appliquer des correctifs aux logiciels de base de données** : Pour les services managés comme Amazon RDS, AWS applique les correctifs au moteur de base de données.
      - **C. Sauvegarder les bases de données** : Les services managés comme RDS offrent des sauvegardes automatisées.
    - **Autres options incorrectes** ❌ :
      - **B. Tester les versions d'applications** : Le client est responsable des tests de ses applications.
      - **D. Créer un schéma de base de données** : Le client conçoit et crée le schéma de la base de données.
      - **E. Exécuter des tests d'intrusion** : Le client peut effectuer ses propres tests d'intrusion (avec certaines limites), mais AWS ne les exécute pas à sa place.
    </details>

8. Une entreprise souhaite s'étendre d'une région AWS à une deuxième région AWS. Que doit-elle faire pour commencer à prendre en charge la nouvelle région ?
    - A. Contacter un gestionnaire de compte AWS pour signer un nouveau contrat.
    - B. Déplacer une zone de disponibilité vers la nouvelle région.
    - C. Commencer à déployer des ressources dans la deuxième région.
    - D. Télécharger la console de gestion AWS pour la nouvelle région.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Commencer à déployer des ressources dans la deuxième région** : Les clients peuvent déployer des ressources dans n'importe quelle région AWS sans avoir à signer de nouveau contrat. Il suffit de sélectionner la région dans la console.
    - **Autres options incorrectes** ❌ :
      - **A. Contacter un gestionnaire de compte AWS pour signer un nouveau contrat** : Aucun nouveau contrat n'est nécessaire. L'accès à toutes les régions est inclus dans le compte AWS.
      - **B. Déplacer une zone de disponibilité vers la nouvelle région** : Les zones de disponibilité sont fixes dans une région. On ne peut pas les déplacer.
      - **D. Télécharger la console de gestion AWS pour la nouvelle région** : La console AWS est une interface web unique qui permet de sélectionner la région.
    </details>

9. Pourquoi est-il avantageux d'utiliser les équilibreurs de charge élastiques avec les applications ?
    - A. Ils permettent la conversion d'Application Load Balancers en Classic Load Balancers.
    - B. Ils sont capables de gérer les changements constants des modèles de trafic réseau.
    - C. Ils ajustent automatiquement la capacité.
    - D. Ils sont fournis gratuitement aux utilisateurs.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Ils ajustent automatiquement la capacité** : Les Elastic Load Balancers (ELB) peuvent automatiquement adapter leur capacité pour gérer les variations de trafic.
    - **Autres options incorrectes** ❌ :
      - **A. Ils permettent la conversion d'Application Load Balancers en Classic Load Balancers** : Ce n'est pas une fonctionnalité standard ni un avantage principal.
      - **B. Ils sont capables de gérer les changements constants des modèles de trafic réseau** : Bien que partiellement vrai, l'ajustement automatique de la capacité (C) est plus précis et un avantage clé.
      - **D. Ils sont fournis gratuitement aux utilisateurs** : Les ELB sont facturés à l'usage (par heure et par Go de données traitées).
    </details>

10. Quel est le plan de support AWS MINIMUM qui permet un temps de réponse cible d'une heure pour les cas de support ?
    - A. Enterprise.
    - B. Business.
    - C. Developer.
    - D. Basic.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Business** : Le plan Business Support offre un temps de réponse cible d'une heure pour les cas de support système interrompu.
    - **Autres options incorrectes** ❌ :
      - **A. Enterprise** : Offre un temps de réponse encore plus rapide (15 minutes) mais est plus cher. Business est le minimum pour une heure.
      - **C. Developer** : Temps de réponse de 12 heures pour les cas système interrompu.
      - **D. Basic** : Ne donne pas accès au support technique par téléphone/chat.
    </details>

11. Quelle est l'option de stockage durable la moins coûteuse pour conserver des sauvegardes de bases de données en vue d'une récupération immédiate ?
    - A. Amazon S3.
    - B. Amazon Glacier.
    - C. Amazon EBS.
    - D. Stockage d'instance Amazon EC2.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon S3** : Amazon S3 Standard-IA (Infrequent Access) offre un stockage durable à faible coût pour les données rarement consultées, avec des temps de récupération immédiats.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Glacier** : Coût encore plus bas, mais avec des temps de restauration de quelques minutes à plusieurs heures, pas immédiat.
      - **C. Amazon EBS** : Stockage par blocks pour EC2, plus cher que S3 pour l'archivage.
      - **D. Stockage d'instance Amazon EC2** : Stockage éphémère, non durable et supprimé à l'arrêt de l'instance.
    </details>

12. Quelle équipe AWS aide les clients à accélérer l'adoption du cloud grâce à des engagements rémunérés dans plusieurs domaines de spécialité ?
    - A. AWS Enterprise Support.
    - B. AWS Solutions Architects.
    - C. AWS Professional Services.
    - D. AWS Account Managers.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Professional Services** : Une équipe de consultants AWS qui fournit des engagements rémunérés pour aider à la migration, l'architecture, l'optimisation, etc.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Enterprise Support** : Plan de support technique, pas une équipe de conseil rémunérée.
      - **B. AWS Solutions Architects** : Fournissent des conseils architecturaux gratuits (dans le cadre des comptes AWS), mais pas des engagements rémunérés dédiés.
      - **D. AWS Account Managers** : Gèrent la relation commerciale, mais ne fournissent pas de services de conseil techniques.
    </details>

13. Une entreprise a besoin d'un accès 24h/24 et 7j/7 par téléphone, e-mail et chat avec un temps de réponse de moins d'une heure en cas d'interruption d'un système de production. Quel plan de support AWS répond à ces exigences au coût le PLUS BAS ?
    - A. Basic.
    - B. Developer.
    - C. Business.
    - D. Enterprise.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Business** : Offre un accès 24/7 au support technique par téléphone, chat et e-mail, avec un temps de réponse cible d'une heure pour les cas système interrompu. C'est le plan le moins cher offrant ces fonctionnalités.
    - **Autres options incorrectes** ❌ :
      - **A. Basic** : Pas d'accès au support technique direct.
      - **B. Developer** : Accès par e-mail uniquement, temps de réponse de 12 heures pour les cas système interrompu.
      - **D. Enterprise** : Offre des temps de réponse plus rapides et des services supplémentaires, mais à un coût plus élevé.
    </details>

14. Si un client doit auditer la gestion des changements des ressources AWS, lequel des services AWS suivants doit-il utiliser ?
    - A. AWS Config.
    - B. AWS Trusted Advisor.
    - C. Amazon CloudWatch.
    - D. Amazon Inspector.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Config** : Service qui évalue, audite et enregistre les changements de configuration des ressources AWS au fil du temps.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Trusted Advisor** : Fournit des recommandations d'optimisation, pas un audit détaillé des changements.
      - **C. Amazon CloudWatch** : Service de surveillance des performances et des logs.
      - **D. Amazon Inspector** : Évaluation de sécurité automatisée pour les applications.
    </details>

15. Comment AWS Trusted Advisor fournit-il des conseils aux utilisateurs du cloud AWS ? (Choisissez DEUX)
    - A. Il identifie les vulnérabilités logicielles dans les applications exécutées sur AWS.
    - B. Il fournit une liste de recommandations d'optimisation des coûts basées sur l'utilisation actuelle d'AWS.
    - C. Il détecte les vulnérabilités de sécurité potentielles causées par les paramètres d'autorisation sur les ressources du compte.
    - D. Il corrige automatiquement les problèmes de sécurité potentiels causés par les paramètres d'autorisation sur les ressources du compte.
    - E. Il fournit une alerte proactive chaque fois qu'une instance Amazon EC2 a été compromise.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Il fournit une liste de recommandations d'optimisation des coûts basées sur l'utilisation actuelle d'AWS** : Trusted Advisor analyse l'utilisation et fournit des recommandations pour réduire les coûts.
      - **C. Il détecte les vulnérabilités de sécurité potentielles causées par les paramètres d'autorisation sur les ressources du compte** : Par exemple, il vérifie les groupes de sécurité trop permissifs, les accès IAM, etc.
    - **Autres options incorrectes** ❌ :
      - **A. Il identifie les vulnérabilités logicielles dans les applications** : C'est le rôle d'Amazon Inspector, pas de Trusted Advisor.
      - **D. Il corrige automatiquement les problèmes de sécurité potentiels** : Trusted Advisor ne corrige pas automatiquement ; il fournit des recommandations que l'utilisateur doit appliquer.
      - **E. Il fournit une alerte proactive chaque fois qu'une instance Amazon EC2 a été compromise** : Ce n'est pas une fonctionnalité de Trusted Advisor. AWS GuardDuty ou Security Hub peuvent détecter les compromissions.
    </details>

16. Quel service AWS géré est utilisé pour héberger des bases de données ?
    - A. AWS Batch.
    - B. AWS Artifact.
    - C. AWS Data Pipeline.
    - D. Amazon RDS.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon RDS** : Service de base de données relationnelle entièrement géré prenant en charge plusieurs moteurs (MySQL, PostgreSQL, etc.).
    - **Autres options incorrectes** ❌ :
      - **A. AWS Batch** : Service de traitement par lots.
      - **B. AWS Artifact** : Portail pour les rapports de conformité et les accords.
      - **C. AWS Data Pipeline** : Service d'orchestration de données pour le traitement et le déplacement des données.
    </details>

17. Quelle entité Identity and Access Management (IAM) est associée à un ID de clé d'accès et une clé d'accès secrète lors de l'utilisation de AWS Command Line Interface (AWS CLI) ?
    - A. Groupe IAM.
    - B. Utilisateur IAM.
    - C. Rôle IAM.
    - D. Politique IAM.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Utilisateur IAM** : Les utilisateurs IAM peuvent avoir des clés d'accès (access key ID et secret access key) pour l'accès programmatique (API/CLI).
    - **Autres options incorrectes** ❌ :
      - **A. Groupe IAM** : Les groupes ne peuvent pas avoir de clés d'accès ; ils sont utilisés pour regrouper des utilisateurs.
      - **C. Rôle IAM** : Les rôles sont destinés à être assumés par des entités (utilisateurs, services) et utilisent des jetons de sécurité temporaires, pas des clés d'accès permanentes.
      - **D. Politique IAM** : Les politiques définissent les autorisations, mais ne sont pas associées à des clés d'accès.
    </details>

18. Selon le modèle de responsabilité partagée, lequel des éléments suivants est de la responsabilité du client ?
    - A. S'assurer que les disques durs sont effacés après utilisation.
    - B. S'assurer que le microprogramme est mis à jour sur les appareils matériels.
    - C. S'assurer que les données sont chiffrées au repos.
    - D. S'assurer que les câbles réseau sont de catégorie six ou supérieure.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. S'assurer que les données sont chiffrées au repos** : Le client est responsable de la sécurité des données dans le cloud, y compris le chiffrement au repos.
    - **Autres options incorrectes** ❌ :
      - **A. S'assurer que les disques durs sont effacés après utilisation** : AWS est responsable de la destruction sécurisée des supports de stockage physiques.
      - **B. S'assurer que le microprogramme est mis à jour sur les appareils matériels** : AWS est responsable de la maintenance du matériel sous-jacent.
      - **D. S'assurer que les câbles réseau sont de catégorie six ou supérieure** : AWS est responsable de l'infrastructure réseau physique.
    </details>

19. Quel service AWS fournit une solution de stockage de fichiers partagé simple et évolutive à utiliser avec les serveurs AWS et sur site basés sur Linux ?
    - A. Amazon S3.
    - B. Amazon Glacier.
    - C. Amazon EBS.
    - D. Amazon EFS.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon EFS** : Service de stockage de fichiers élastique et géré (NFS) qui peut être monté sur des instances EC2 Linux et des serveurs sur site via AWS Direct Connect ou VPN.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon S3** : Stockage d'objets, pas un système de fichiers partagé.
      - **B. Amazon Glacier** : Service d'archivage.
      - **C. Amazon EBS** : Stockage par blocs attaché à une instance EC2, pas partagé entre plusieurs serveurs.
    </details>

20. Quels composants d'identification sont requis pour obtenir un accès programmatique à un compte AWS ? (Choisissez DEUX)
    - A. Un ID de clé d'accès.
    - B. Une clé primaire.
    - C. Une clé d'accès secrète.
    - D. Un ID utilisateur.
    - E. Une clé secondaire.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Un ID de clé d'accès** : Identifiant public utilisé avec la clé secrète pour signer les requêtes API.
      - **C. Une clé d'accès secrète** : Clé secrète utilisée avec l'ID de clé d'accès pour signer les requêtes API.
    - **Autres options incorrectes** ❌ :
      - **B. Une clé primaire** : Terme non standard pour l'accès AWS.
      - **D. Un ID utilisateur** : Utilisé pour l'authentification console, pas programmatique.
      - **E. Une clé secondaire** : Terme non standard.
    </details>

21. Lequel des éléments suivants est un contrôle partagé entre le client et AWS ?
    - A. Fournir une clé pour le chiffrement côté client Amazon S3.
    - B. Configuration d'une instance Amazon EC2.
    - C. Contrôles environnementaux des centres de données physiques AWS.
    - D. Sensibilisation.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Sensibilisation** : La sensibilisation à la sécurité est une responsabilité partagée ; AWS forme son personnel, le client doit former ses employés.
    - **Autres options incorrectes** ❌ :
      - **A. Fournir une clé pour le chiffrement côté client Amazon S3** : Le client est entièrement responsable de la gestion des clés de chiffrement côté client.
      - **B. Configuration d'une instance Amazon EC2** : Le client est responsable de la configuration du système d'exploitation et des applications sur l'instance.
      - **C. Contrôles environnementaux des centres de données physiques AWS** : AWS est entièrement responsable.
    </details>

22. Quel type de stockage AWS est éphémère et est supprimé lorsqu'une instance est arrêtée ou terminée ?
    - A. Amazon EBS.
    - B. Stockage d'instance Amazon EC2.
    - C. Amazon EFS.
    - D. Amazon S3.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Stockage d'instance Amazon EC2** : Stockage temporaire directement attaché à l'instance, perdu lors de l'arrêt ou de la résiliation.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EBS** : Stockage persistant qui survit à l'arrêt de l'instance.
      - **C. Amazon EFS** : Stockage de fichiers persistant et partagé.
      - **D. Amazon S3** : Stockage d'objets persistant et durable.
    </details>

23. Lequel des éléments suivants est un avantage de la facturation consolidée sur AWS ?
    - A. Qualification pour des prix volume.
    - B. Partage des autorisations d'accès.
    - C. Factures multiples par compte.
    - D. Élimine le besoin d'étiquetage.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Qualification pour des prix volume** : L'utilisation agrégée de tous les comptes membres peut atteindre des seuils de volume plus élevés, ce qui peut entraîner des remises.
    - **Autres options incorrectes** ❌ :
      - **B. Partage des autorisations d'accès** : La facturation consolidée ne partage pas les autorisations ; elle est uniquement pour la facturation.
      - **C. Factures multiples par compte** : C'est l'inverse ; la facturation consolidée produit une seule facture.
      - **D. Élimine le besoin d'étiquetage** : L'étiquetage est toujours nécessaire pour l'allocation des coûts au sein de l'organisation.
    </details>

24. Quels services font partie de la plateforme sans serveur AWS ?
    - A. Amazon EC2, Amazon S3, Amazon Athena.
    - B. Amazon Kinesis, Amazon SQS, Amazon EMR.
    - C. AWS Step Functions, Amazon DynamoDB, Amazon SNS.
    - D. Amazon Athena, Amazon Cognito, Amazon EC2.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Step Functions, Amazon DynamoDB, Amazon SNS** : Ces services sont entièrement gérés et suivent le modèle sans serveur (pas de provisionnement de serveur, mise à l'échelle automatique).
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EC2** : Service IaaS où vous gérez les serveurs.
      - **B. Amazon EMR** : Service managé mais nécessite la gestion de clusters.
      - **D. Amazon EC2** : Encore une fois, pas sans serveur.
    </details>

25. Quel modèle de tarification Amazon EC2 permet aux clients d'utiliser leurs licences logicielles existantes liées à un serveur ?
    - A. Instances Spot.
    - B. Instances réservées.
    - C. Hôtes dédiés.
    - D. Instances à la demande.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Hôtes dédiés** : Serveurs physiques dédiés qui permettent d'utiliser des licences logicielles existantes (BYOL - Bring Your Own License) pour des produits comme Windows Server, SQL Server, etc.
    - **Autres options incorrectes** ❌ :
      - **A. Instances Spot** : Ne permettent pas de contrôler le matériel sous-jacent de manière à supporter BYOL de la même façon.
      - **B. Instances réservées** : Modèle de facturation, pas un type d'hôte physique.
      - **D. Instances à la demande** : Les licences sont généralement incluses dans le prix, pas BYOL.
    </details>

26. Quelles mesures de sécurité protègent l'accès à un compte AWS ? (Choisissez DEUX)
    - A. Activer AWS CloudTrail.
    - B. Accorder un accès de moindre privilège aux utilisateurs IAM.
    - C. Créer un utilisateur IAM et le partager avec de nombreux développeurs et utilisateurs.
    - D. Activer Amazon CloudFront.
    - E. Activer l'authentification multi-facteurs (MFA) pour les utilisateurs privilégiés.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Accorder un accès de moindre privilège aux utilisateurs IAM** : Limite les autorisations au strict nécessaire.
      - **E. Activer l'authentification multi-facteurs (MFA) pour les utilisateurs privilégiés** : Ajoute une deuxième couche de sécurité pour les comptes sensibles.
    - **Autres options incorrectes** ❌ :
      - **A. Activer AWS CloudTrail** : Important pour l'audit, mais ne protège pas directement l'accès.
      - **C. Créer un utilisateur IAM et le partager** : Mauvaise pratique ; chaque utilisateur doit avoir son propre compte.
      - **D. Activer Amazon CloudFront** : CDN, pas de sécurité d'accès au compte.
    </details>

27. Quel service AWS fournit la capacité de gérer l'infrastructure sous forme de code ?
    - A. AWS CodePipeline.
    - B. AWS CodeDeploy.
    - C. AWS Direct Connect.
    - D. AWS CloudFormation.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS CloudFormation** : Service qui permet de modéliser, provisionner et gérer les ressources AWS à l'aide de modèles (JSON ou YAML).
    - **Autres options incorrectes** ❌ :
      - **A. AWS CodePipeline** : Service de livraison continue.
      - **B. AWS CodeDeploy** : Automatise le déploiement d'applications.
      - **C. AWS Direct Connect** : Connexion réseau dédiée.
    </details>

28. Quel est un avantage du déploiement d'une application sur plusieurs zones de disponibilité ?
    - A. Il y a un risque plus faible de défaillance de service si une catastrophe naturelle provoque une interruption de service dans une région AWS donnée.
    - B. L'application aura une disponibilité plus élevée car elle peut résister à une interruption de service dans une zone de disponibilité.
    - C. Il y aura une meilleure couverture car les zones de disponibilité sont géographiquement éloignées et peuvent servir une zone plus large.
    - D. Il y aura une latence d'application réduite qui améliorera l'expérience utilisateur.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. L'application aura une disponibilité plus élevée car elle peut résister à une interruption de service dans une zone de disponibilité** : Le déploiement multi-AZ protège contre les défaillances au niveau d'une zone de disponibilité.
    - **Autres options incorrectes** ❌ :
      - **A. Il y a un risque plus faible de défaillance de service si une catastrophe naturelle provoque une interruption de service dans une région AWS donnée** : Pour se protéger contre une défaillance régionale, il faut un déploiement multi-régions.
      - **C. Il y aura une meilleure couverture car les zones de disponibilité sont géographiquement éloignées** : Les zones de disponibilité sont séparées mais à proximité (généralement <100 km). La couverture géographique est assurée par les régions.
      - **D. Il y aura une latence d'application réduite** : La latence entre les zones de disponibilité est faible, mais le déploiement multi-AZ n'est pas destiné à réduire la latence pour les utilisateurs finaux.
    </details>

29. Un client a besoin d'exécuter une base de données MySQL qui s'adapte facilement. Quel service AWS doit-il utiliser ?
    - A. Amazon Aurora.
    - B. Amazon Redshift.
    - C. Amazon DynamoDB.
    - D. Amazon ElastiCache.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon Aurora** : Base de données relationnelle compatible MySQL, entièrement gérée, avec mise à l'échelle automatique du stockage et des réplicas de lecture.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Redshift** : Entrepôt de données, pas une base de données transactionnelle MySQL.
      - **C. Amazon DynamoDB** : Base de données NoSQL, pas relationnelle.
      - **D. Amazon ElastiCache** : Service de cache en mémoire, pas de base de données persistante.
    </details>

30. Lequel des éléments suivants est un principe de conception d'architecture cloud AWS ?
    - A. Mettre en œuvre des points de défaillance uniques.
    - B. Mettre en œuvre un couplage lâche.
    - C. Mettre en œuvre une conception monolithique.
    - D. Mettre en œuvre une mise à l'échelle verticale.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Mettre en œuvre un couplage lâche** : Le couplage lâche (loose coupling) réduit les interdépendances entre les composants, améliorant la résilience et la scalabilité.
    - **Autres options incorrectes** ❌ :
      - **A. Mettre en œuvre des points de défaillance uniques** : C'est l'opposé d'une bonne pratique.
      - **C. Mettre en œuvre une conception monolithique** : Les architectures monolithiques sont moins flexibles et plus difficiles à mettre à l'échelle.
      - **D. Mettre en œuvre une mise à l'échelle verticale** : La mise à l'échelle verticale a des limites ; le cloud favorise la mise à l'échelle horizontale.
    </details>

31. Les utilisateurs du support AWS Enterprise ont accès à quel service ou fonctionnalité qui n'est pas disponible pour les utilisateurs avec d'autres plans de support AWS ?
    - A. AWS Trusted Advisor.
    - B. Cas de support AWS.
    - C. Équipe Concierge.
    - D. Amazon Connect.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Équipe Concierge** : Service dédié pour les questions de facturation, de compte et d'intégration, disponible uniquement avec le plan Enterprise Support.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Trusted Advisor** : Disponible pour tous les plans (avec des vérifications limitées pour Basic et Developer).
      - **B. Cas de support AWS** : Tous les plans (sauf Basic) peuvent ouvrir des cas.
      - **D. Amazon Connect** : Service de centre de contact cloud, indépendant des plans de support.
    </details>

32. Une entreprise va passer d'un centre de données sur site au cloud AWS. Quelle serait une différence financière après le déménagement ?
    - A. Passer d'une dépense opérationnelle variable (opex) à une dépense en capital initiale (capex).
    - B. Passer d'une dépense en capital initiale (capex) à une dépense en capital variable (capex).
    - C. Passer d'une dépense en capital initiale (capex) à une dépense opérationnelle variable (opex).
    - D. Élimination de la dépense en capital initiale (capex) et élimination de la dépense opérationnelle variable (opex).

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Passer d'une dépense en capital initiale (capex) à une dépense opérationnelle variable (opex)** : Le cloud permet d'éviter les investissements initiaux en matériel et de payer uniquement pour ce que l'on utilise.
    - **Autres options incorrectes** ❌ :
      - **A. Passer d'une dépense opérationnelle variable (opex) à une dépense en capital initiale (capex)** : C'est l'inverse du cloud.
      - **B. Passer d'une dépense en capital initiale (capex) à une dépense en capital variable (capex)** : Le cloud n'implique pas de capex variable.
      - **D. Élimination de la dépense en capital initiale (capex) et élimination de la dépense opérationnelle variable (opex)** : Les dépenses opérationnelles variables existent toujours.
    </details>

33. Lors de l'exécution d'une analyse de coûts qui prend en charge l'isolement physique d'une charge de travail client, quel modèle d'hébergement de calcul doit être pris en compte dans le Coût Total de Possession (TCO) ?
    - A. Hôtes dédiés.
    - B. Instances réservées.
    - C. Instances à la demande.
    - D. Instances réservées sans paiement initial.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Hôtes dédiés** : Fournissent un serveur physique dédié pour l'isolement physique, ce qui a un impact sur le coût.
    - **Autres options incorrectes** ❌ :
      - **B. Instances réservées** : Modèle de facturation, pas d'isolement physique garanti.
      - **C. Instances à la demande** : Pas d'isolement physique.
      - **D. Instances réservées sans paiement initial** : Modèle de facturation, pas d'isolement physique.
    </details>

34. Quel service AWS doit être utilisé pour le stockage à long terme et à faible coût des sauvegardes de données ?
    - A. Amazon RDS.
    - B. Amazon Glacier.
    - C. AWS Snowball.
    - D. AWS EBS.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon Glacier** (maintenant Amazon S3 Glacier) : Service d'archivage conçu pour un stockage à long terme à très faible coût.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon RDS** : Service de base de données, pas pour l'archivage.
      - **C. AWS Snowball** : Appareil de transfert de données physique, pas de stockage cloud.
      - **D. AWS EBS** : Stockage par blocs pour EC2, coûteux pour l'archivage à long terme.
    </details>

35. Quel est le plan de support AWS MINIMUM qui fournit un support technique par téléphone ?
    - A. Enterprise.
    - B. Business.
    - C. Developer.
    - D. Basic.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Business** : Offre un support technique 24/7 par téléphone, chat et e-mail.
    - **Autres options incorrectes** ❌ :
      - **A. Enterprise** : Offre également le support téléphonique, mais c'est un niveau supérieur (plus cher).
      - **C. Developer** : Support par e-mail uniquement.
      - **D. Basic** : Pas de support téléphonique.
    </details>

36. Quel modèle de tarification d'instance Amazon EC2 peut fournir des remises allant jusqu'à 90 % ?
    - A. Instances réservées.
    - B. À la demande.
    - C. Hôtes dédiés.
    - D. Instances Spot.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Instances Spot** : Peuvent offrir des remises importantes (jusqu'à 90 %) par rapport aux instances à la demande, mais peuvent être interrompues.
    - **Autres options incorrectes** ❌ :
      - **A. Instances réservées** : Remises allant jusqu'à 75 %.
      - **B. À la demande** : Pas de remise.
      - **C. Hôtes dédiés** : Généralement plus chers, pas de remise importante.
    </details>

37. Lesquels des services AWS suivants peuvent être utilisés pour diffuser de grandes quantités de contenu vidéo en ligne avec la latence la plus faible possible ? (Choisissez DEUX)
    - A. appGateway.
    - B. Amazon S3.
    - C. Amazon Elastic File System (EFS).
    - D. Amazon Glacier.
    - E. Amazon CloudFront.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Amazon S3** : Stockage durable et scalable pour les fichiers vidéo.
      - **E. Amazon CloudFront** : CDN qui diffuse le contenu depuis des emplacements périphériques proches des utilisateurs, réduisant la latence.
    - **Autres options incorrectes** ❌ :
      - **A. appGateway** : N'existe pas dans AWS.
      - **C. Amazon Elastic File System (EFS)** : Stockage de fichiers, pas optimisé pour la diffusion de vidéos à grande échelle.
      - **D. Amazon Glacier** : Service d'archivage, latence élevée.
    </details>

38. À quoi peuvent servir les emplacements périphériques AWS ? (Choisissez DEUX)
    - A. Héberger des applications.
    - B. Livrer du contenu plus près des utilisateurs.
    - C. Exécuter des services de mise en cache de bases de données NoSQL.
    - D. Réduire le trafic sur le serveur en mettant en cache les réponses.
    - E. Envoyer des messages de notification aux utilisateurs finaux.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Livrer du contenu plus près des utilisateurs** : Les emplacements périphériques sont utilisés par CloudFront pour mettre en cache le contenu.
      - **D. Réduire le trafic sur le serveur en mettant en cache les réponses** : La mise en cache réduit les requêtes vers l'origine.
    - **Autres options incorrectes** ❌ :
      - **A. Héberger des applications** : Les applications sont hébergées dans des régions/zones de disponibilité, pas dans les emplacements périphériques.
      - **C. Exécuter des services de mise en cache de bases de données NoSQL** : Ce n'est pas la fonction des emplacements périphériques. Les caches NoSQL utilisent ElastiCache.
      - **E. Envoyer des messages de notification aux utilisateurs finaux** : Ce n'est pas leur rôle.
    </details>

39. Une entreprise prévoit de migrer du site vers le cloud AWS. Quel outil ou service AWS fournit des rapports détaillés sur les économies de coûts estimées après la migration ?
    - A. Calculateur de Coût Total de Possession (TCO) AWS.
    - B. Cost Explorer.
    - C. AWS Budgets.
    - D. AWS Migration Hub.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Calculateur de Coût Total de Possession (TCO) AWS** : Outil qui permet de comparer les coûts d'une infrastructure sur site avec AWS et d'estimer les économies.
    - **Autres options incorrectes** ❌ :
      - **B. Cost Explorer** : Analyse les coûts actuels et passés d'AWS.
      - **C. AWS Budgets** : Définit des budgets et des alertes.
      - **D. AWS Migration Hub** : Suit l'état des migrations, mais n'estime pas les économies.
    </details>

40. Quel service AWS fournit une vue personnalisée de l'état de santé des services AWS spécifiques qui alimentent les charges de travail d'un client exécutées sur AWS ?
    - A. AWS Service Health Dashboard.
    - B. AWS X-Ray.
    - C. AWS Personal Health Dashboard.
    - D. Amazon CloudWatch.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Personal Health Dashboard** : Fournit des alertes personnalisées et des informations sur l'état des services AWS qui affectent vos ressources.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Service Health Dashboard** : Affiche l'état général de tous les services AWS dans toutes les régions (non personnalisé).
      - **B. AWS X-Ray** : Traçage distribué pour les applications.
      - **D. Amazon CloudWatch** : Surveillance des performances et des logs.
    </details>

41. L'un des avantages de déplacer l'infrastructure d'un centre de données sur site vers le cloud AWS est :
    - A. Il permet à l'entreprise d'éliminer les factures IT.
    - B. Il permet à l'entreprise de mettre un serveur dans le centre de données de chaque client.
    - C. Il permet à l'entreprise de se concentrer sur les activités commerciales.
    - D. Il permet à l'entreprise de laisser les serveurs non corrigés.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Il permet à l'entreprise de se concentrer sur les activités commerciales** : En externalisant la gestion de l'infrastructure à AWS, l'entreprise peut se concentrer sur son cœur de métier.
    - **Autres options incorrectes** ❌ :
      - **A. Il permet à l'entreprise d'éliminer les factures IT** : Les coûts IT existent toujours, mais deviennent variables.
      - **B. Il permet à l'entreprise de mettre un serveur dans le centre de données de chaque client** : Ce n'est pas un avantage du cloud.
      - **D. Il permet à l'entreprise de laisser les serveurs non corrigés** : La responsabilité des correctifs dépend du service ; pour EC2, le client doit patcher.
    </details>

42. Comment un utilisateur AWS avec un plan de support AWS Basic peut-il obtenir une assistance technique d'AWS ?
    - A. Ingénieurs de support senior AWS.
    - B. Technical Account Managers AWS.
    - C. AWS Trusted Advisor.
    - D. Forums de discussion AWS.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Forums de discussion AWS** : Le plan Basic ne donne pas accès au support technique direct, mais les utilisateurs peuvent poser des questions sur les forums communautaires.
    - **Autres options incorrectes** ❌ :
      - **A. Ingénieurs de support senior AWS** : Accès réservé aux plans payants.
      - **B. Technical Account Managers AWS** : Uniquement pour le plan Enterprise.
      - **C. AWS Trusted Advisor** : Fournit des recommandations, mais pas d'assistance technique personnalisée.
    </details>

43. Comment un utilisateur peut-il se protéger contre les interruptions de service AWS si une catastrophe naturelle affecte une zone géographique entière ?
    - A. Déployer des applications sur plusieurs zones de disponibilité dans une région AWS.
    - B. Utiliser un modèle de déploiement cloud hybride dans la zone géographique.
    - C. Déployer des applications sur plusieurs régions AWS.
    - D. Stocker les artefacts d'application à l'aide d'AWS Artifact et les répliquer sur plusieurs régions AWS.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Déployer des applications sur plusieurs régions AWS** : Pour se protéger contre une catastrophe à l'échelle d'une région, il faut une architecture multi-régions.
    - **Autres options incorrectes** ❌ :
      - **A. Déployer des applications sur plusieurs zones de disponibilité dans une région AWS** : Protège contre les défaillances d'une zone de disponibilité, pas d'une région entière.
      - **B. Utiliser un modèle de déploiement cloud hybride dans la zone géographique** : N'offre pas de protection si la catastrophe affecte toute la zone.
      - **D. Stocker les artefacts d'application à l'aide d'AWS Artifact** : AWS Artifact est pour les documents de conformité, pas pour les artefacts d'application.
    </details>

44. Quelle activité est de la responsabilité du client dans le cloud AWS selon le modèle de responsabilité partagée AWS ?
    - A. Assurer la connectivité réseau d'AWS à Internet.
    - B. Appliquer des correctifs et corriger les failles au sein de l'infrastructure cloud AWS.
    - C. Assurer la sécurité physique des centres de données cloud.
    - D. S'assurer que les volumes Amazon EBS sont sauvegardés.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. S'assurer que les volumes Amazon EBS sont sauvegardés** : Le client est responsable de la sauvegarde de ses données, y compris les snapshots EBS.
    - **Autres options incorrectes** ❌ :
      - **A. Assurer la connectivité réseau d'AWS à Internet** : AWS est responsable de la connectivité Internet de son infrastructure.
      - **B. Appliquer des correctifs et corriger les failles au sein de l'infrastructure cloud AWS** : AWS est responsable de la maintenance de l'infrastructure sous-jacente.
      - **C. Assurer la sécurité physique des centres de données cloud** : AWS est responsable.
    </details>

45. Dans quel scénario les instances Spot Amazon EC2 doivent-elles être utilisées ?
    - A. Une entreprise veut déplacer son site web principal vers AWS depuis un serveur web sur site.
    - B. Une entreprise a un certain nombre de services d'application dont le contrat de niveau de service (SLA) nécessite une disponibilité de 99,999 %.
    - C. La base de données héritée très utilisée d'une entreprise fonctionne actuellement sur site.
    - D. Une entreprise a un certain nombre de travaux peu fréquents et interruptibles qui utilisent actuellement des instances à la demande.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Une entreprise a un certain nombre de travaux peu fréquents et interruptibles qui utilisent actuellement des instances à la demande** : Les instances Spot sont idéales pour les charges de travail flexibles, tolérantes aux interruptions et à forte intensité de calcul.
    - **Autres options incorrectes** ❌ :
      - **A. Une entreprise veut déplacer son site web principal vers AWS** : Pour une charge de travail critique, les instances à la demande ou réservées sont plus appropriées.
      - **B. Une entreprise a un certain nombre de services d'application dont le SLA nécessite une disponibilité de 99,999 %** : Les instances Spot peuvent être interrompues, donc ne conviennent pas.
      - **C. La base de données héritée très utilisée d'une entreprise fonctionne actuellement sur site** : Les bases de données critiques nécessitent une disponibilité élevée et des performances stables, donc pas d'instances Spot.
    </details>

46. Un client déploie une nouvelle application et doit choisir une région AWS. Parmi les facteurs suivants, lesquels pourraient influencer la décision du client ? (Choisissez DEUX)
    - A. Latence réduite pour les utilisateurs.
    - B. La présentation de l'application dans la langue locale.
    - C. Conformité à la souveraineté des données.
    - D. Coûts de refroidissement dans les climats plus chauds.
    - E. Proximité du bureau du client pour des visites sur site.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Latence réduite pour les utilisateurs** : Choisir une région proche des utilisateurs finaux réduit la latence.
      - **C. Conformité à la souveraineté des données** : Certaines régulations exigent que les données restent dans un pays ou une région spécifique.
    - **Autres options incorrectes** ❌ :
      - **B. La présentation de l'application dans la langue locale** : La localisation de l'application est gérée au niveau du code, pas du choix de la région.
      - **D. Coûts de refroidissement dans les climats plus chauds** : AWS gère les coûts d'infrastructure ; le client ne paie pas directement ces coûts.
      - **E. Proximité du bureau du client pour des visites sur site** : Les centres de données AWS ne sont pas accessibles aux clients.
    </details>

47. Quel service AWS fournit des alertes lorsqu'un événement AWS peut affecter les ressources AWS d'une entreprise ?
    - A. AWS Personal Health Dashboard.
    - B. AWS Service Health Dashboard.
    - C. AWS Trusted Advisor.
    - D. AWS Infrastructure Event Management.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Personal Health Dashboard** : Fournit des alertes personnalisées et proactives sur les événements AWS qui affectent vos ressources.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Service Health Dashboard** : Affiche l'état général des services AWS, pas d'alertes personnalisées.
      - **C. AWS Trusted Advisor** : Recommandations d'optimisation, pas d'alertes d'événements.
      - **D. AWS Infrastructure Event Management** : Service du plan Enterprise Support pour planifier des événements critiques, pas pour les alertes.
    </details>

48. Quel scénario de reprise après sinistre offre la probabilité la plus faible de temps d'arrêt ?
    - A. Sauvegarde et restauration.
    - B. Pilote automatique (pilot light).
    - C. Veille active (warm standby).
    - D. Multi-site actif-actif.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Multi-site actif-actif** : Les deux sites (régions) traitent le trafic en temps normal, offrant la plus haute disponibilité et le temps de reprise le plus court.
    - **Autres options incorrectes** ❌ :
      - **A. Sauvegarde et restauration** : Temps de reprise long (heures à jours).
      - **B. Pilote automatique (pilot light)** : Temps de reprise modéré (minutes à heures).
      - **C. Veille active (warm standby)** : Temps de reprise plus court (minutes), mais pas aussi rapide qu'actif-actif.
    </details>

49. Quel service a pour PRINCIPAL objectif le contrôle de version des logiciels ?
    - A. Amazon CodeStar.
    - B. AWS Command Line Interface (AWS CLI).
    - C. Amazon Cognito.
    - D. AWS CodeCommit.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS CodeCommit** : Service de contrôle de code source hébergé (compatible Git).
    - **Autres options incorrectes** ❌ :
      - **A. Amazon CodeStar** : Service de développement DevOps intégré, incluant CodeCommit mais pas uniquement.
      - **B. AWS Command Line Interface (AWS CLI)** : Outil en ligne de commande pour interagir avec AWS.
      - **C. Amazon Cognito** : Service de gestion des identités utilisateur.
    </details>

50. Comment un client peut-il augmenter la sécurité des connexions au compte AWS ? (Choisissez DEUX)
    - A. Configurer AWS Certificate Manager.
    - B. Activer l'authentification multi-facteurs (MFA).
    - C. Utiliser Amazon Cognito pour gérer l'accès.
    - D. Configurer une politique de mot de passe forte.
    - E. Activer AWS Organizations.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Activer l'authentification multi-facteurs (MFA)** : Ajoute une deuxième couche d'authentification.
      - **D. Configurer une politique de mot de passe forte** : Exige des mots de passe complexes et une rotation régulière.
    - **Autres options incorrectes** ❌ :
      - **A. Configurer AWS Certificate Manager** : Gère les certificats SSL/TLS, pas l'authentification du compte.
      - **C. Utiliser Amazon Cognito pour gérer l'accès** : Gère les identités utilisateur pour les applications web/mobiles, pas pour l'accès au compte AWS.
      - **E. Activer AWS Organizations** : Pour gérer plusieurs comptes, pas spécifiquement pour sécuriser les connexions.
    </details>