---
layout: exam
---

# Examen de pratique 20

1. Quel service AWS aide à identifier les activités malveillantes ou non autorisées dans les comptes AWS et les charges de travail ?
    - A. Amazon Rekognition
    - B. AWS Trusted Advisor
    - C. Amazon GuardDuty
    - D. Amazon CloudWatch

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon GuardDuty** : Service de détection de menaces qui surveille en continu les activités malveillantes et non autorisées.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Rekognition** : Service de vision par ordinateur pour l'analyse d'images et de vidéos.
      - **B. AWS Trusted Advisor** : Fournit des recommandations d'optimisation.
      - **D. Amazon CloudWatch** : Service de surveillance des performances.
    </details>

2. Une entreprise veut essayer une solution de commerce électronique tierce avant de décider de l'utiliser à long terme. <br/> Quel service ou outil AWS prendra en charge cet effort ?
    - A. AWS Marketplace
    - B. AWS Partner Network (APN)
    - C. AWS Managed Services
    - D. AWS Service Catalog

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Marketplace** : Permet d'essayer, d'acheter et de déployer des logiciels tiers, souvent avec des options d'essai.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Partner Network (APN)** : Réseau de partenaires, pas une plateforme d'essai de logiciels.
      - **C. AWS Managed Services** : Service de gestion d'infrastructure.
      - **D. AWS Service Catalog** : Pour créer des catalogues de services IT approuvés.
    </details>

3. Quel service AWS est une base de données NoSQL managée ?
    - A. Amazon Redshift
    - B. Amazon DynamoDB
    - C. Amazon Aurora
    - D. Amazon RDS for MariaDB

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon DynamoDB** : Base de données NoSQL clé-valeur et document entièrement managée.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Redshift** : Entrepôt de données.
      - **C. Amazon Aurora** : Base de données relationnelle.
      - **D. Amazon RDS for MariaDB** : Service de base de données relationnelle managée.
    </details>

4. Quel service AWS doit être utilisé pour créer une alarme de facturation ?
    - A. AWS Trusted Advisor
    - B. AWS CloudTrail
    - C. Amazon CloudWatch
    - D. Amazon QuickSight

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon CloudWatch** : Permet de créer des alarmes de facturation basées sur les coûts estimés.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Trusted Advisor** : Recommande des optimisations, mais ne crée pas d'alarmes de facturation.
      - **B. AWS CloudTrail** : Journalise les appels d'API.
      - **D. Amazon QuickSight** : Service de business intelligence.
    </details>

5. Une entreprise héberge une application web dans un conteneur Docker sur Amazon EC2. <br/> AWS est responsable de laquelle des tâches suivantes ?
    - A. Mettre à l'échelle l'application web et les services développés avec Docker
    - B. Provisionner ou planifier des conteneurs à exécuter sur des clusters et maintenir leur disponibilité
    - C. Effectuer la maintenance matérielle dans les installations AWS qui exécutent le cloud AWS
    - D. Gérer le système d'exploitation invité, y compris les mises à jour et les correctifs de sécurité

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Effectuer la maintenance matérielle dans les installations AWS qui exécutent le cloud AWS** : AWS est responsable de l'infrastructure physique.
    - **Autres options incorrectes** ❌ :
      - **A. Mettre à l'échelle l'application web et les services développés avec Docker** : Responsabilité du client.
      - **B. Provisionner ou planifier des conteneurs à exécuter sur des clusters et maintenir leur disponibilité** : Responsabilité du client (ou utilisez des services comme ECS).
      - **D. Gérer le système d'exploitation invité, y compris les mises à jour et les correctifs de sécurité** : Responsabilité du client sur EC2.
    </details>

6. Les utilisateurs signalent une latence lors de la connexion à un site web ayant une clientèle mondiale. <br/> Quel service AWS améliorera l'expérience client en réduisant la latence ?
    - A. Amazon CloudFront
    - B. AWS Direct Connect
    - C. Amazon EC2 Auto Scaling
    - D. AWS Transit Gateway

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon CloudFront** : CDN qui diffuse le contenu depuis des edge locations proches des utilisateurs, réduisant la latence.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Direct Connect** : Connexion dédiée entre le centre de données et AWS, pas pour les utilisateurs finaux.
      - **C. Amazon EC2 Auto Scaling** : Ajuste la capacité de calcul, ne réduit pas directement la latence mondiale.
      - **D. AWS Transit Gateway** : Pour interconnecter des VPC, pas pour réduire la latence des utilisateurs finaux.
    </details>

7. Quelles actions représentent les meilleures pratiques pour utiliser AWS IAM ? (Choisissez deux.)
    - A. Configurer une politique de mot de passe forte
    - B. Partager les informations d'identification de sécurité parmi les utilisateurs de comptes AWS qui sont dans la même région
    - C. Utiliser des clés d'accès pour se connecter à la console de gestion AWS
    - D. Faire tourner les clés d'accès régulièrement
    - E. Éviter d'utiliser les rôles IAM pour déléguer des permissions

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A, D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. Configurer une politique de mot de passe forte** : Exiger des mots de passe complexes.
      - **D. Faire tourner les clés d'accès régulièrement** : Meilleure pratique de sécurité.
    - **Autres options incorrectes** ❌ :
      - **B. Partager les informations d'identification de sécurité** : Mauvaise pratique ; chaque utilisateur doit avoir ses propres identifiants.
      - **C. Utiliser des clés d'accès pour se connecter à la console** : Les clés d'accès sont pour l'accès programmatique (API/CLI) ; la console utilise un nom d'utilisateur/mot de passe.
      - **E. Éviter d'utiliser les rôles IAM pour déléguer des permissions** : Mauvaise pratique ; les rôles sont recommandés pour déléguer des permissions.
    </details>

8. Quelle fonctionnalité ou service AWS peut être utilisé pour capturer des informations sur le trafic entrant et sortant dans une infrastructure VPC AWS ?
    - A. AWS Config
    - B. Journaux de flux VPC
    - C. AWS Trusted Advisor
    - D. AWS CloudTrail

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Journaux de flux VPC** : Capture des métadonnées sur le trafic IP dans votre VPC.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Config** : Audite la configuration des ressources.
      - **C. AWS Trusted Advisor** : Fournit des recommandations.
      - **D. AWS CloudTrail** : Journalise l'activité des API.
    </details>

9. Une entreprise veut utiliser un service AWS pour surveiller l'état de santé des points de terminaison d'application, avec la capacité d'acheminer le trafic vers des points de terminaison régionaux sains pour améliorer la disponibilité de l'application. <br/> Quel service prendra en charge ces exigences ?
    - A. Amazon Inspector
    - B. Amazon CloudWatch
    - C. AWS Global Accelerator
    - D. Amazon CloudFront

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Global Accelerator** : Surveille la santé des points de terminaison et achemine le trafic vers les plus sains.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Inspector** : Évaluation de sécurité.
      - **B. Amazon CloudWatch** : Surveillance des métriques, mais ne route pas le trafic.
      - **D. Amazon CloudFront** : CDN pour la diffusion de contenu, pas pour le routage basé sur la santé des applications.
    </details>

10. Selon le AWS Well-Architected Framework, quelles étapes de gestion du changement doivent être prises pour atteindre la fiabilité dans le cloud AWS ? (Choisissez deux.)
    - A. Utiliser AWS Config pour générer un inventaire des ressources AWS
    - B. Utiliser des limites de service pour empêcher les utilisateurs de créer ou de modifier des ressources AWS
    - C. Utiliser AWS CloudTrail pour enregistrer les appels d'API AWS dans un fichier journal auditable
    - D. Utiliser AWS Certificate Manager pour mettre sur liste blanche les ressources et services AWS approuvés
    - E. Utiliser Amazon GuardDuty pour valider les changements de configuration apportés aux ressources AWS

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A, C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. Utiliser AWS Config pour générer un inventaire des ressources AWS** : Suit les changements de configuration.
      - **C. Utiliser AWS CloudTrail pour enregistrer les appels d'API AWS dans un fichier journal auditable** : Fournit un audit trail des actions.
    - **Autres options incorrectes** ❌ :
      - **B. Utiliser des limites de service pour empêcher les utilisateurs de créer ou de modifier des ressources AWS** : Les limites de service sont pour éviter les dépassements involontaires, pas pour la gestion du changement.
      - **D. Utiliser AWS Certificate Manager** : Gère les certificats SSL, pas la gestion du changement.
      - **E. Utiliser Amazon GuardDuty** : Détection de menaces, pas validation des changements.
    </details>

11. Quel service peut être utilisé pour surveiller et recevoir des alertes pour les événements de connexion à la console de gestion AWS de l'utilisateur racine du compte ?
    - A. Amazon CloudWatch
    - B. AWS Config
    - C. AWS Trusted Advisor
    - D. AWS IAM

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon CloudWatch** : Peut déclencher des alarmes basées sur les événements de connexion (via CloudTrail).
    - **Autres options incorrectes** ❌ :
      - **B. AWS Config** : Audite la configuration.
      - **C. AWS Trusted Advisor** : Recommandations.
      - **D. AWS IAM** : Gère les identités, mais ne surveille pas les connexions en temps réel.
    </details>

12. Quel principe de conception doit être considéré lors de l'architecturation dans le cloud AWS ?
    - A. Considérer les serveurs comme des ressources non jetables
    - B. Utiliser l'intégration synchrone de services
    - C. Concevoir des composants faiblement couplés
    - D. Implémenter les règles les moins permissives pour les groupes de sécurité

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Concevoir des composants faiblement couplés** : Réduit les interdépendances et augmente la résilience.
    - **Autres options incorrectes** ❌ :
      - **A. Considérer les serveurs comme des ressources non jetables** : Mauvaise pratique ; traitez-les comme du bétail, pas comme des animaux de compagnie.
      - **B. Utiliser l'intégration synchrone de services** : Peut créer des dépendances et réduire la résilience.
      - **D. Implémenter les règles les moins permissives pour les groupes de sécurité** : Bonne pratique de sécurité, mais pas un principe de conception architecturale principal.
    </details>

13. Quels services AWS peuvent être utilisés pour déplacer des données de centres de données sur site vers AWS ? (Choisissez deux.)
    - A. AWS Snowball
    - B. AWS Lambda
    - C. AWS ElastiCache
    - D. AWS Database Migration Service (AWS DMS)
    - E. Amazon API Gateway

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A, D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS Snowball** : Appareil physique pour transférer de grandes quantités de données.
      - **D. AWS Database Migration Service (AWS DMS)** : Migre des bases de données vers AWS.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Lambda** : Calcul serverless, pas pour le transfert de données.
      - **C. AWS ElastiCache** : Service de cache en mémoire.
      - **E. Amazon API Gateway** : Service pour créer, publier et gérer des API.
    </details>

14. Une charge de travail par lots prend 5 heures à terminer sur une instance Amazon EC2. La quantité de données à traiter double chaque mois et le temps de traitement est proportionnel. <br/> Quelle est la meilleure architecture cloud pour répondre à cette demande croissante de manière cohérente ?
    - A. Exécuter l'application sur une plus grande taille d'instance EC2.
    - B. Passer à une famille d'instances EC2 qui correspond mieux aux exigences par lots.
    - C. Distribuer l'application sur plusieurs instances EC2 et exécuter la charge de travail en parallèle.
    - D. Exécuter l'application sur une instance EC2 bare metal.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Distribuer l'application sur plusieurs instances EC2 et exécuter la charge de travail en parallèle** : Mise à l'échelle horizontale pour gérer la croissance.
    - **Autres options incorrectes** ❌ :
      - **A. Exécuter l'application sur une plus grande taille d'instance EC2** : Mise à l'échelle verticale, limitée et coûteuse.
      - **B. Passer à une famille d'instances EC2** : Peut aider, mais ne résout pas fondamentalement le problème de croissance exponentielle.
      - **D. Exécuter l'application sur une instance EC2 bare metal** : N'améliore pas l'évolutivité.
    </details>

15. Chaque département d'une entreprise a son propre compte AWS indépendant et sa propre méthode de paiement. La nouvelle direction de l'entreprise veut centraliser la gouvernance départementale et consolider les paiements. <br/> Comment cela peut-il être réalisé en utilisant des services ou fonctionnalités AWS ?
    - A. Transférer les factures mensuelles de chaque compte. Ensuite créer des rôles IAM pour permettre l'accès inter-comptes.
    - B. Créer un nouveau compte AWS. Ensuite configurer AWS Organizations et inviter tous les comptes existants à rejoindre.
    - C. Configurer AWS Organizations dans chacun des comptes existants. Ensuite lier tous les comptes ensemble.
    - D. Utiliser Cost Explorer pour combiner les coûts de tous les comptes. Ensuite répliquer les politiques IAM à travers les comptes.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Créer un nouveau compte AWS. Ensuite configurer AWS Organizations et inviter tous les comptes existants à rejoindre.** : AWS Organizations permet de gérer plusieurs comptes avec facturation consolidée et politiques centralisées.
    - **Autres options incorrectes** ❌ :
      - **A. Transférer les factures mensuelles de chaque compte** : Manuel et ne centralise pas la gouvernance.
      - **C. Configurer AWS Organizations dans chacun des comptes existants** : Organizations est configuré dans un compte maître, pas dans tous.
      - **D. Utiliser Cost Explorer** : Pour l'analyse des coûts, pas pour la gouvernance centrale.
    </details>

16. La capacité de mettre à l'échelle horizontalement les instances Amazon EC2 en fonction de la demande est un exemple de quel concept dans la proposition de valeur du cloud AWS ?
    - A. Économie d'échelle
    - B. Élasticité
    - C. Haute disponibilité
    - D. Agilité

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Élasticité** : Capacité à augmenter ou diminuer les ressources pour répondre à la demande.
    - **Autres options incorrectes** ❌ :
      - **A. Économie d'échelle** : Réduction des coûts grâce au volume.
      - **C. Haute disponibilité** : Capacité à rester opérationnel.
      - **D. Agilité** : Rapidité de provisionnement.
    </details>

17. Une entreprise de commerce électronique anticipe une énorme augmentation du trafic web pour deux jours de shopping populaires à venir. <br/> Quel service ou fonctionnalité AWS peut être configuré pour ajuster dynamiquement les ressources pour répondre à ce changement de demande ?
    - A. AWS CloudTrail
    - B. Amazon EC2 Auto Scaling
    - C. Amazon Forecast
    - D. AWS Config

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon EC2 Auto Scaling** : Ajuste automatiquement le nombre d'instances EC2 en fonction de la demande.
    - **Autres options incorrectes** ❌ :
      - **A. AWS CloudTrail** : Journalisation d'API.
      - **C. Amazon Forecast** : Service de prévision basé sur le machine learning.
      - **D. AWS Config** : Audite la configuration.
    </details>

18. Quel service AWS permet aux utilisateurs de se connecter de manière sécurisée aux ressources AWS sur l'Internet public ?
    - A. Peering VPC
    - B. AWS Direct Connect
    - C. AWS VPN
    - D. Amazon Pinpoint

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS VPN** : Établit une connexion sécurisée (tunnel IPsec) sur Internet.
    - **Autres options incorrectes** ❌ :
      - **A. Peering VPC** : Connecte deux VPC dans la même région ou entre régions.
      - **B. AWS Direct Connect** : Connexion dédiée, pas sur Internet public.
      - **D. Amazon Pinpoint** : Service d'engagement client et de messagerie.
    </details>

19. Quel outil est utilisé pour prévoir les dépenses AWS ?
    - A. AWS Trusted Advisor
    - B. AWS Organizations
    - C. Cost Explorer
    - D. Amazon Inspector

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Cost Explorer** : Permet de prévoir les coûts futurs basés sur l'utilisation historique.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Trusted Advisor** : Recommande des optimisations de coûts.
      - **B. AWS Organizations** : Gestion de plusieurs comptes.
      - **D. Amazon Inspector** : Évaluation de sécurité.
    </details>

20. Une entreprise exécute une application de commerce électronique hébergée en Europe. Pour diminuer la latence pour les utilisateurs qui accèdent au site web depuis d'autres parties du monde, l'entreprise aimerait mettre en cache le contenu statique fréquemment consulté plus près des utilisateurs. <br/> Quel service AWS prendra en charge ces exigences ?
    - A. Amazon ElastiCache
    - B. Amazon CloudFront
    - C. Amazon Elastic File System (Amazon EFS)
    - D. Amazon Elastic Block Store (Amazon EBS)

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon CloudFront** : CDN mondial qui met en cache le contenu statique dans des edge locations.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon ElastiCache** : Cache en mémoire pour les bases de données, pas pour le contenu web statique mondial.
      - **C. Amazon Elastic File System (Amazon EFS)** : Système de fichiers partagé pour EC2.
      - **D. Amazon Elastic Block Store (Amazon EBS)** : Stockage par blocs pour EC2.
    </details>

21. Lequel des éléments suivants est un composant de l'infrastructure globale d'AWS ?
    - A. Amazon Alexa
    - B. Régions AWS
    - C. Amazon Lightsail
    - D. AWS Organizations

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Régions AWS** : Composant fondamental de l'infrastructure globale.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Alexa** : Assistant vocal, pas une infrastructure.
      - **C. Amazon Lightsail** : Service de cloud simplifié.
      - **D. AWS Organizations** : Service de gestion de comptes.
    </details>

22. Quel service AWS aidera les utilisateurs à déterminer si une application exécutée sur une instance Amazon EC2 a une capacité CPU suffisante ?
    - A. Amazon CloudWatch
    - B. AWS Config
    - C. AWS CloudTrail
    - D. Amazon Inspector

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon CloudWatch** : Fournit des métriques comme l'utilisation du CPU des instances EC2.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Config** : Audite la configuration.
      - **C. AWS CloudTrail** : Journalise les API.
      - **D. Amazon Inspector** : Évalue la sécurité.
    </details>

23. Pourquoi est-il bénéfique d'utiliser des Elastic Load Balancers avec des applications ?
    - A. Ils permettent la conversion des Application Load Balancers en Classic Load Balancers.
    - B. Ils sont capables de gérer les changements constants des modèles de trafic réseau.
    - C. Ils ajustent automatiquement la capacité.
    - D. Ils sont fournis gratuitement aux utilisateurs.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Ils sont capables de gérer les changements constants des modèles de trafic réseau** : Distribuent le trafic de manière élastique.
    - **Autres options incorrectes** ❌ :
      - **A. Ils permettent la conversion des Application Load Balancers en Classic Load Balancers** : Non, ce sont des types différents.
      - **C. Ils ajustent automatiquement la capacité** : C'est le rôle d'Auto Scaling ; les ELB répartissent le trafic.
      - **D. Ils sont fournis gratuitement aux utilisateurs** : Non, il y a un coût pour les ELB.
    </details>

24. Quelles tâches sont de la responsabilité du client dans le modèle de responsabilité partagée d'AWS ? (Choisissez deux.)
    - A. Gestion de l'accès aux installations d'infrastructure
    - B. Gestion du cycle de vie du matériel d'infrastructure cloud
    - C. Gestion de la configuration des applications de l'utilisateur
    - D. Protection de l'infrastructure réseau
    - E. Configuration des groupes de sécurité

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C, E

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **C. Gestion de la configuration des applications de l'utilisateur** : Le client gère ses applications.
      - **E. Configuration des groupes de sécurité** : Le client configure les règles de pare-feu.
    - **Autres options incorrectes** ❌ :
      - **A. Gestion de l'accès aux installations d'infrastructure** : AWS.
      - **B. Gestion du cycle de vie du matériel d'infrastructure cloud** : AWS.
      - **D. Protection de l'infrastructure réseau** : AWS.
    </details>

25. Les systèmes IT doivent être conçus pour réduire les interdépendances, de sorte qu'un changement ou un échec dans un composant ne se propage pas à d'autres composants. <br/> C'est un exemple de quel principe de conception d'architecture cloud ?
    - A. Évolutivité
    - B. Couplage lâche
    - C. Automatisation
    - D. Mise à l'échelle automatique

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Couplage lâche** : Réduit les dépendances entre les composants.
    - **Autres options incorrectes** ❌ :
      - **A. Évolutivité** : Capacité à gérer une charge accrue.
      - **C. Automatisation** : Exécution de tâches sans intervention humaine.
      - **D. Mise à l'échelle automatique** : Ajustement automatique des ressources.
    </details>

26. Quels services ou fonctionnalités AWS peuvent améliorer la sécurité réseau en bloquant les requêtes d'un réseau particulier pour une application web sur AWS ? (Choisissez deux.)
    - A. AWS WAF
    - B. AWS Trusted Advisor
    - C. AWS Direct Connect
    - D. AWS Organizations
    - E. ACL réseau

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A, E

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS WAF** : Peut bloquer des requêtes basées sur des adresses IP.
      - **E. ACL réseau** : Filtre le trafic au niveau du sous-réseau basé sur des règles d'adresse IP.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Trusted Advisor** : Recommande, ne bloque pas.
      - **C. AWS Direct Connect** : Connexion dédiée.
      - **D. AWS Organizations** : Gestion de comptes.
    </details>

27. Une application s'exécute sur plusieurs instances Amazon EC2 qui accèdent simultanément à un système de fichiers partagé. <br/> Quel service de stockage AWS doit être utilisé ?
    - A. Amazon EBS
    - B. Amazon EFS
    - C. Amazon S3
    - D. AWS Artifact

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon EFS** : Système de fichiers élastique et partagé accessible par plusieurs instances EC2.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EBS** : Volumes par blocs attachés à une seule instance.
      - **C. Amazon S3** : Stockage d'objets, pas un système de fichiers partagé.
      - **D. AWS Artifact** : Portail de conformité.
    </details>

28. Une application web est hébergée sur AWS en utilisant un Elastic Load Balancer, plusieurs instances Amazon EC2 et Amazon RDS. <br/> Quelles mesures de sécurité relèvent de la responsabilité d'AWS ? (Choisissez deux.)
    - A. Exécuter un scan de virus sur les instances EC2
    - B. Protéger contre l'usurpation d'IP et le reniflage de paquets
    - C. Installer les derniers correctifs de sécurité sur l'instance RDS
    - D. Chiffrer la communication entre les instances EC2 et l'Elastic Load Balancer
    - E. Configurer un groupe de sécurité et une liste de contrôle d'accès réseau (NACL) pour EC2

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B, C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. Protéger contre l'usurpation d'IP et le reniflage de paquets** : AWS sécurise l'infrastructure réseau sous-jacente.
      - **C. Installer les derniers correctifs de sécurité sur l'instance RDS** : Pour RDS (service managé), AWS applique les correctifs du moteur de base de données.
    - **Autres options incorrectes** ❌ :
      - **A. Exécuter un scan de virus sur les instances EC2** : Responsabilité du client.
      - **D. Chiffrer la communication entre les instances EC2 et l'ELB** : Le client peut configurer TLS/SSL ; AWS fournit l'infrastructure.
      - **E. Configurer un groupe de sécurité et une NACL pour EC2** : Responsabilité du client.
    </details>

29. Quel est l'avantage de l'élasticité dans le cloud AWS ?
    - A. Assurer que le trafic web est automatiquement réparti sur plusieurs régions AWS.
    - B. Minimiser les coûts de stockage en archivant automatiquement les données de journal.
    - C. Permettre à AWS de sélectionner automatiquement les services les plus rentables.
    - D. Ajuster automatiquement la capacité de calcul requise pour maintenir des performances constantes.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Ajuster automatiquement la capacité de calcul requise pour maintenir des performances constantes** : Définition de l'élasticité.
    - **Autres options incorrectes** ❌ :
      - **A. Assurer que le trafic web est automatiquement réparti sur plusieurs régions AWS** : C'est le rôle de Global Accelerator ou Route 53.
      - **B. Minimiser les coûts de stockage en archivant automatiquement les données de journal** : C'est le rôle des politiques de cycle de vie S3.
      - **C. Permettre à AWS de sélectionner automatiquement les services les plus rentables** : Non, le client choisit les services.
    </details>

30. La réduction continue des prix du cloud AWS est due à :
    - A. la tarification à l'usage
    - B. l'infrastructure globale d'AWS
    - C. les économies d'échelle
    - D. la tarification réservée du stockage

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. les économies d'échelle** : AWS bénéficie d'économies d'échelle massives qu'il répercute sur les clients.
    - **Autres options incorrectes** ❌ :
      - **A. la tarification à l'usage** : Modèle de facturation, pas la raison des réductions continues.
      - **B. l'infrastructure globale d'AWS** : Permet la distribution, mais pas directement la réduction des prix.
      - **D. la tarification réservée du stockage** : Option de tarification, pas la cause des réductions.
    </details>

31. Une entreprise a besoin d'un bucket Amazon S3 qui ne peut avoir aucun objet public en raison d'exigences de conformité. <br/> Comment cela peut-il être accompli ?
    - A. Activer S3 Block Public Access depuis la console de gestion AWS.
    - B. Tenir une réunion d'équipe pour discuter de l'importance de ne télécharger que des objets S3 privés.
    - C. Exiger que tous les objets S3 soient approuvés manuellement avant le téléchargement.
    - D. Créer un service pour surveiller tous les téléchargements S3 et supprimer tout téléchargement public.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Activer S3 Block Public Access depuis la console de gestion AWS** : Fonctionnalité qui bloque toutes les politiques d'accès public.
    - **Autres options incorrectes** ❌ :
      - **B. Tenir une réunion d'équipe** : Non technique et non fiable.
      - **C. Exiger que tous les objets S3 soient approuvés manuellement** : Manuel, sujet aux erreurs.
      - **D. Créer un service pour surveiller** : Complexe et réactif ; Block Public Access est préventif.
    </details>

32. Un Cloud Practitioner identifie un problème de facturation après avoir examiné le rapport AWS Cost and Usage dans la console de gestion AWS. <br/> Quelle action peut être prise pour résoudre cela ?
    - A. Ouvrir un cas détaillé lié à la facturation et le soumettre à AWS Support pour obtenir de l'aide.
    - B. Télécharger des données décrivant le problème vers un nouvel objet dans un bucket Amazon S3 privé.
    - C. Créer une application de tarification et la déployer sur une instance Amazon EC2 de taille appropriée pour plus d'informations.
    - D. Procéder à la création d'un nouveau tableau de bord dans Amazon QuickSight.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Ouvrir un cas détaillé lié à la facturation et le soumettre à AWS Support pour obtenir de l'aide.** : Pour les questions de facturation, contacter le support AWS est la bonne démarche.
    - **Autres options incorrectes** ❌ :
      - **B. Télécharger des données décrivant le problème vers un nouvel objet dans un bucket Amazon S3 privé** : Ne résout pas le problème.
      - **C. Créer une application de tarification** : Inutilement complexe.
      - **D. Procéder à la création d'un nouveau tableau de bord dans Amazon QuickSight** : Pour la visualisation, pas pour résoudre un problème de facturation.
    </details>

33. Que fait le AWS Simple Monthly Calculator ?
    - A. Compare les coûts sur site aux environnements de colocation
    - B. Estime la facturation mensuelle basée sur l'utilisation projetée
    - C. Estime la consommation d'énergie dans les centres de données existants
    - D. Estime l'utilisation du CPU

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Estime la facturation mensuelle basée sur l'utilisation projetée** : Outil pour estimer les coûts AWS futurs.
    - **Autres options incorrectes** ❌ :
      - **A. Compare les coûts sur site aux environnements de colocation** : Non, c'est le rôle du TCO Calculator.
      - **C. Estime la consommation d'énergie dans les centres de données existants** : Non.
      - **D. Estime l'utilisation du CPU** : Non.
    </details>

34. Qui est responsable de l'application des correctifs sur le système d'exploitation invité pour Amazon RDS ?
    - A. L'équipe produit AWS
    - B. L'administrateur de base de données client
    - C. Les partenaires managés
    - D. AWS Support

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. L'administrateur de base de données client** : Pour RDS, AWS applique les correctifs du moteur de base de données, mais le client est responsable de la gestion du système d'exploitation invité dans certains contextes. En réalité, pour RDS (service managé), AWS gère les correctifs du système d'exploitation sous-jacent, mais le client peut contrôler le moment de la mise à jour. La question semble ambiguë, mais dans le modèle de responsabilité partagée pour RDS, AWS assume une grande partie de la responsabilité des correctifs.
    - **Autres options incorrectes** ❌ :
      - **A. L'équipe produit AWS** : Non spécifique.
      - **C. Les partenaires managés** : Non.
      - **D. AWS Support** : Non, c'est une responsabilité opérationnelle, pas de support.
    </details>

35. Quels services AWS peuvent être mis à l'échelle en utilisant AWS Auto Scaling ? (Choisissez deux.)
    - A. Amazon EC2
    - B. Amazon DynamoDB
    - C. Amazon S3
    - D. Amazon Route 53
    - E. Amazon Redshift

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A, B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. Amazon EC2** : Auto Scaling peut ajuster le nombre d'instances EC2.
      - **B. Amazon DynamoDB** : Auto Scaling peut ajuster la capacité de lecture/écriture provisionnée.
    - **Autres options incorrectes** ❌ :
      - **C. Amazon S3** : S3 est automatiquement scalable, pas via Auto Scaling.
      - **D. Amazon Route 53** : Service DNS, pas scalable via Auto Scaling.
      - **E. Amazon Redshift** : Peut être redimensionné manuellement ou via d'autres mécanismes, pas typiquement via Auto Scaling.
    </details>

36. Lesquels des éléments suivants sont des avantages d'AWS Global Accelerator ? (Choisissez deux.)
    - A. Réduction des coûts pour exécuter des services sur AWS
    - B. Amélioration de la disponibilité des applications déployées sur AWS
    - C. Durabilité plus élevée des données stockées sur AWS
    - D. Latence réduite pour atteindre les applications déployées sur AWS
    - E. Sécurité plus élevée des données stockées sur AWS

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B, D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. Amélioration de la disponibilité des applications déployées sur AWS** : Route le trafic vers des points de terminaison sains.
      - **D. Latence réduite pour atteindre les applications déployées sur AWS** : Utilise le réseau mondial d'AWS pour des chemins optimisés.
    - **Autres options incorrectes** ❌ :
      - **A. Réduction des coûts pour exécuter des services sur AWS** : Pas un avantage principal.
      - **C. Durabilité plus élevée des données stockées sur AWS** : Non, c'est pour les services de stockage.
      - **E. Sécurité plus élevée des données stockées sur AWS** : Non, il améliore la performance et la disponibilité.
    </details>

37. Un utilisateur qui veut obtenir de l'aide pour la facturation et réactiver un compte suspendu devrait soumettre une demande de compte et de facturation à :
    - A. le forum AWS Support
    - B. AWS Abuse
    - C. un architecte de solutions AWS
    - D. AWS Support

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Support** : Pour les questions de facturation et de compte.
    - **Autres options incorrectes** ❌ :
      - **A. le forum AWS Support** : Communauté, pas officiel pour la facturation.
      - **B. AWS Abuse** : Pour signaler des utilisations abusives.
      - **C. un architecte de solutions AWS** : Pour l'architecture, pas la facturation.
    </details>

38. Quelle pratique cloud AWS utilise l'élasticité et l'agilité du cloud computing ?
    - A. Provisionner la capacité basée sur l'utilisation passée et les pics théoriques
    - B. Mettre à l'échelle dynamiquement et de manière prévisionnelle pour répondre aux demandes d'utilisation
    - C. Construire l'application et l'infrastructure dans un centre de données qui accorde un accès physique
    - D. Décomposer l'application en composants faiblement couplés

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Mettre à l'échelle dynamiquement et de manière prévisionnelle pour répondre aux demandes d'utilisation** : Utilise l'élasticité pour s'adapter à la charge réelle.
    - **Autres options incorrectes** ❌ :
      - **A. Provisionner la capacité basée sur l'utilisation passée et les pics théoriques** : Approche traditionnelle, non élastique.
      - **C. Construire l'application et l'infrastructure dans un centre de données qui accorde un accès physique** : Non cloud.
      - **D. Décomposer l'application en composants faiblement couplés** : Bonne pratique d'architecture, mais pas spécifiquement liée à l'élasticité.
    </details>

39. Quelle méthode aide à optimiser les coûts des utilisateurs migrant vers le cloud AWS ?
    - A. Payer uniquement pour ce qui est utilisé
    - B. Acheter du matériel avant qu'il ne soit nécessaire
    - C. Provisionner manuellement les ressources cloud
    - D. Acheter pour la charge maximale possible

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Payer uniquement pour ce qui est utilisé** : Modèle de paiement à l'usage, cœur de l'optimisation des coûts cloud.
    - **Autres options incorrectes** ❌ :
      - **B. Acheter du matériel avant qu'il ne soit nécessaire** : Approche CapEx traditionnelle.
      - **C. Provisionner manuellement les ressources cloud** : Peut mener au gaspillage.
      - **D. Acheter pour la charge maximale possible** : Provisionnement excessif, coûteux.
    </details>

40. Selon le modèle de responsabilité partagée d'AWS, lequel des éléments suivants est une responsabilité du client ?
    - A. Installer des correctifs de sécurité pour les hyperviseurs Xen et KVM
    - B. Installer des correctifs de sécurité du système d'exploitation pour Amazon DynamoDB
    - C. Installer des correctifs de sécurité du système d'exploitation pour les instances de base de données Amazon EC2
    - D. Installer des correctifs de sécurité du système d'exploitation pour les instances de base de données Amazon RDS

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Installer des correctifs de sécurité du système d'exploitation pour les instances de base de données Amazon EC2** : Sur EC2, le client gère le système d'exploitation invité.
    - **Autres options incorrectes** ❌ :
      - **A. Installer des correctifs de sécurité pour les hyperviseurs Xen et KVM** : AWS.
      - **B. Installer des correctifs de sécurité du système d'exploitation pour Amazon DynamoDB** : AWS (service managé).
      - **D. Installer des correctifs de sécurité du système d'exploitation pour les instances de base de données Amazon RDS** : AWS gère les correctifs pour RDS.
    </details>

41. Les outils AWS Cost Management donnent aux utilisateurs la capacité de faire lesquels des éléments suivants ? (Choisissez deux.)
    - A. Résilier automatiquement toutes les ressources AWS si les seuils budgétaires sont dépassés.
    - B. Décomposer les coûts AWS par jour, service et compte AWS lié.
    - C. Créer des budgets et recevoir des notifications si l'utilisation réelle ou prévue dépasse les budgets.
    - D. Passer automatiquement aux instances réservées ou spot, selon le plus rentable.
    - E. Déplacer les données stockées dans Amazon S3 vers une classe de stockage plus rentable.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B, C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. Décomposer les coûts AWS par jour, service et compte AWS lié** : Cost Explorer permet cette analyse.
      - **C. Créer des budgets et recevoir des notifications si l'utilisation réelle ou prévue dépasse les budgets** : AWS Budgets.
    - **Autres options incorrectes** ❌ :
      - **A. Résilier automatiquement toutes les ressources AWS** : Non, cela serait dangereux.
      - **D. Passer automatiquement aux instances réservées ou spot** : Non, l'utilisateur décide des achats.
      - **E. Déplacer les données stockées dans Amazon S3 vers une classe de stockage plus rentable** : C'est le rôle des politiques de cycle de vie S3, pas directement des outils Cost Management.
    </details>

42. Selon le modèle de responsabilité partagée d'AWS, la sécurité et l'application des correctifs du système d'exploitation invité sont de la responsabilité de :
    - A. AWS Support
    - B. le client
    - C. AWS Systems Manager
    - D. AWS Config

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. le client** : Pour les services IaaS comme EC2, le client gère le système d'exploitation invité.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Support** : Fournit de l'aide, mais n'assume pas la responsabilité opérationnelle.
      - **C. AWS Systems Manager** : Outil pour aider à gérer les correctifs, mais la responsabilité reste au client.
      - **D. AWS Config** : Audite la configuration.
    </details>

43. Quel service AWS facilite la création et la gestion des utilisateurs et groupes AWS, et leur fournit un accès sécurisé aux ressources AWS gratuitement ?
    - A. AWS Direct Connect
    - B. Amazon Connect
    - C. AWS Identity and Access Management (IAM)
    - D. AWS Firewall Manager

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Identity and Access Management (IAM)** : Service gratuit de gestion des identités et des accès.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Direct Connect** : Connexion dédiée, payante.
      - **B. Amazon Connect** : Service de centre de contact.
      - **D. AWS Firewall Manager** : Gestion centralisée des règles de pare-feu.
    </details>

44. Quel service AWS fournit à la demande de la documentation de sécurité et de conformité AWS ?
    - A. AWS Directory Service
    - B. AWS Artifact
    - C. AWS Trusted Advisor
    - D. Amazon Inspector

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Artifact** : Portail pour accéder aux rapports de conformité et aux accords AWS.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Directory Service** : Service d'annuaire.
      - **C. AWS Trusted Advisor** : Recommandations d'optimisation.
      - **D. Amazon Inspector** : Évaluation de sécurité.
    </details>

45. Quel service AWS peut être utilisé pour transformer du texte en parole réaliste ?
    - A. Amazon Polly
    - B. Amazon Transcribe
    - C. Amazon Rekognition
    - D. Amazon Lex

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon Polly** : Service de synthèse vocale qui convertit le texte en parole naturelle.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Transcribe** : Transcription automatique de la parole en texte.
      - **C. Amazon Rekognition** : Analyse d'images et de vidéos.
      - **D. Amazon Lex** : Service de chatbots avec reconnaissance vocale.
    </details>

46. Quel est l'un des principes fondamentaux à suivre lors de la conception d'une application hautement disponible dans le cloud AWS ?
    - A. Concevoir en utilisant une architecture serverless
    - B. Supposer que tous les composants d'une application peuvent échouer
    - C. Intégrer AWS Auto Scaling dans chaque application
    - D. Concevoir tous les composants en utilisant du code open-source

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Supposer que tous les composants d'une application peuvent échouer** : Principe de conception pour la résilience.
    - **Autres options incorrectes** ❌ :
      - **A. Concevoir en utilisant une architecture serverless** : Peut aider, mais n'est pas un principe fondamental.
      - **C. Intégrer AWS Auto Scaling dans chaque application** : Utile, mais pas toujours applicable.
      - **D. Concevoir tous les composants en utilisant du code open-source** : Sans rapport avec la haute disponibilité.
    </details>

47. Un utilisateur a besoin de générer un rapport qui décrit l'état des vérifications de sécurité clés dans un compte AWS. Le rapport doit inclure :
    <br/> (L'état des permissions des buckets Amazon S3, Si l'authentification multi-facteurs est activée pour l'utilisateur racine du compte AWS, Si des groupes de sécurité sont configurés pour permettre un accès non restreint.) <br/> Où peuvent toutes ces informations être trouvées en un seul endroit ?
    - A. Tableau de bord Amazon QuickSight
    - B. Traces AWS CloudTrail
    - C. Rapport AWS Trusted Advisor
    - D. Rapport d'identification IAM

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Rapport AWS Trusted Advisor** : Fournit des vérifications de sécurité incluant ces points.
    - **Autres options incorrectes** ❌ :
      - **A. Tableau de bord Amazon QuickSight** : Pour la visualisation de données.
      - **B. Traces AWS CloudTrail** : Journalise les API, ne résume pas l'état de sécurité.
      - **D. Rapport d'identification IAM** : Liste les utilisateurs et leurs clés, pas les vérifications de sécurité mentionnées.
    </details>

48. Quel modèle de tarification Amazon EC2 doit être utilisé pour se conformer aux exigences de licence logicielle par cœur ?
    - A. Hôtes dédiés
    - B. Instances à la demande
    - C. Instances Spot
    - D. Instances réservées

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Hôtes dédiés** : Permettent d'utiliser des licences logicielles existantes basées sur des cœurs physiques.
    - **Autres options incorrectes** ❌ :
      - **B. Instances à la demande** : Les licences sont généralement incluses, pas pour BYOL par cœur.
      - **C. Instances Spot** : Non adaptées aux exigences de licence stables.
      - **D. Instances réservées** : Modèle de facturation, pas de licence.
    </details>

49. Lequel des éléments de l'infrastructure globale d'AWS est utilisé pour mettre en cache des copies de contenu pour une livraison plus rapide aux utilisateurs à travers le globe ?
    - A. Régions AWS
    - B. Zones de disponibilité
    - C. Emplacements périphériques
    - D. Centres de données

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Emplacements périphériques** : Utilisés par CloudFront pour la mise en cache de contenu.
    - **Autres options incorrectes** ❌ :
      - **A. Régions AWS** : Pour le déploiement de ressources.
      - **B. Zones de disponibilité** : Pour la haute disponibilité au sein d'une région.
      - **D. Centres de données** : Composant physique.
    </details>

50. Utiliser AWS Config pour enregistrer, auditer et évaluer les changements apportés aux ressources AWS pour permettre la traçabilité est un exemple de quel pilier du AWS Well-Architected Framework ?
    - A. Sécurité
    - B. Excellence opérationnelle
    - C. Efficacité des performances
    - D. Optimisation des coûts

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Sécurité** : La traçabilité et l'audit sont des aspects clés du pilier Sécurité.
    - **Autres options incorrectes** ❌ :
      - **B. Excellence opérationnelle** : Concerne les processus et la surveillance.
      - **C. Efficacité des performances** : Concerne l'utilisation efficace des ressources.
      - **D. Optimisation des coûts** : Concerne la réduction des coûts.
    </details>