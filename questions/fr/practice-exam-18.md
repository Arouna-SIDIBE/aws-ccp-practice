---
layout: exam
---

# Examen de pratique 18

1. Selon le modèle de responsabilité partagée d'AWS, lequel des éléments suivants est un exemple de sécurité *dans* le cloud AWS ?
    - A. Gestion des emplacements périphériques (edge locations)
    - B. Sécurité physique
    - C. Configuration du pare-feu
    - D. Infrastructure globale

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Configuration du pare-feu** : La configuration des pare-feu (comme les groupes de sécurité) est la responsabilité du client dans le modèle de responsabilité partagée (sécurité *dans* le cloud).
    - **Autres options incorrectes** ❌ :
      - **A. Gestion des emplacements périphériques** : AWS gère l'infrastructure des emplacements périphériques.
      - **B. Sécurité physique** : AWS est responsable de la sécurité physique des centres de données.
      - **D. Infrastructure globale** : AWS est responsable de l'infrastructure globale.
    </details>

2. Comment un utilisateur AWS avec un plan de support AWS Basic peut-il obtenir une assistance technique d'AWS ?
    - A. Ingénieurs de support senior d'AWS
    - B. Technical Account Managers d'AWS
    - C. AWS Trusted Advisor
    - D. Forums de discussion AWS

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Forums de discussion AWS** : Avec le plan Basic, l'assistance communautaire via les forums est disponible gratuitement.
    - **Autres options incorrectes** ❌ :
      - **A. Ingénieurs de support senior d'AWS** : Disponibles uniquement dans les plans payants (Business, Enterprise).
      - **B. Technical Account Managers** : Disponibles uniquement dans le plan Enterprise.
      - **C. AWS Trusted Advisor** : Seules les vérifications de base sont disponibles gratuitement ; l'accès complet nécessite un plan Business ou Enterprise.
    </details>

3. Lesquels des éléments suivants sont des piliers du AWS Well-Architected Framework ? (Choisissez deux.)
    - A. Zones de disponibilité multiples
    - B. Efficacité des performances
    - C. Sécurité
    - D. Utilisation du chiffrement
    - E. Haute disponibilité

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B, C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. Efficacité des performances** : Utiliser les ressources informatiques de manière efficace.
      - **C. Sécurité** : Protéger les informations et les systèmes.
    - **Autres options incorrectes** ❌ :
      - **A. Zones de disponibilité multiples** : C'est une pratique de conception, pas un pilier.
      - **D. Utilisation du chiffrement** : C'est une pratique de sécurité, pas un pilier.
      - **E. Haute disponibilité** : C'est un objectif de conception, pas un pilier.
    </details>

4. Après avoir sélectionné une réservation d'hôte dédié Amazon EC2, quelle option de tarification offrirait la plus grande remise ?
    - A. Paiement sans acompte
    - B. Paiement horaire à la demande
    - C. Paiement partiel anticipé
    - D. Paiement total anticipé

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Paiement total anticipé** : Offre la remise la plus élevée car vous payez l'intégralité du coût sur 1 ou 3 ans à l'avance.
    - **Autres options incorrectes** ❌ :
      - **A. Paiement sans acompte** : Aucune remise pour les hôtes dédiés.
      - **B. Paiement horaire à la demande** : Pas de remise.
      - **C. Paiement partiel anticipé** : Une remise, mais inférieure au paiement total anticipé.
    </details>

5. Quel est un avantage de déployer une application sur plusieurs zones de disponibilité ?
    - A. Il y a un risque plus faible de défaillance de service si une catastrophe naturelle provoque une interruption de service dans une région AWS donnée.
    - B. L'application aura une disponibilité plus élevée car elle peut résister à une interruption de service dans une zone de disponibilité.
    - C. Il y aura une meilleure couverture car les zones de disponibilité sont géographiquement éloignées et peuvent servir une zone plus large.
    - D. Il y aura une latence d'application réduite qui améliorera l'expérience utilisateur.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. L'application aura une disponibilité plus élevée car elle peut résister à une interruption de service dans une zone de disponibilité** : Le déploiement multi-AZ protège contre les défaillances au niveau d'une zone de disponibilité.
    - **Autres options incorrectes** ❌ :
      - **A. Il y a un risque plus faible de défaillance de service si une catastrophe naturelle provoque une interruption de service dans une région AWS donnée** : Le multi-AZ ne protège pas contre les défaillances régionales.
      - **C. Il y aura une meilleure couverture car les zones de disponibilité sont géographiquement éloignées** : Les AZ sont isolées mais proches (typiquement < 100 km), pas destinées à la couverture géographique large.
      - **D. Il y aura une latence d'application réduite** : Le multi-AZ n'améliore pas nécessairement la latence ; il améliore la disponibilité.
    </details>

6. Un Cloud Practitioner est interrogé sur la manière d'estimer le coût d'utilisation d'une nouvelle application sur AWS. <br/> Quelle est la réponse la PLUS appropriée ?
    - A. Informer l'utilisateur que la tarification AWS permet une tarification à la demande.
    - B. Diriger l'utilisateur vers le AWS Simple Monthly Calculator pour une estimation.
    - C. Utiliser Amazon QuickSight pour analyser les dépenses actuelles sur site.
    - D. Utiliser Amazon AppStream 2.0 pour des analyses de tarification en temps réel.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Diriger l'utilisateur vers le AWS Simple Monthly Calculator pour une estimation** : C'est l'outil conçu pour estimer les coûts AWS en fonction de l'utilisation prévue.
    - **Autres options incorrectes** ❌ :
      - **A. Informer l'utilisateur que la tarification AWS permet une tarification à la demande** : Vrai, mais ne fournit pas d'estimation.
      - **C. Utiliser Amazon QuickSight** : Service de business intelligence, pas d'estimation de coûts.
      - **D. Utiliser Amazon AppStream 2.0** : Service de streaming d'applications, sans rapport.
    </details>

7. Une entreprise veut migrer ses applications vers un VPC sur AWS. Ces applications devront accéder à des ressources sur site. <br/> Quelle combinaison d'actions permettra à l'entreprise d'atteindre cet objectif ? (Choisissez deux.)
    - A. Utiliser AWS Service Catalog pour identifier une liste de ressources sur site pouvant être migrées.
    - B. Construire une connexion VPN entre un dispositif sur site et une passerelle privée virtuelle dans le nouveau VPC.
    - C. Utiliser Amazon Athena pour interroger des données des serveurs de base de données sur site.
    - D. Connecter le centre de données sur site de l'entreprise à AWS en utilisant AWS Direct Connect.
    - E. Tirer parti d'Amazon CloudFront pour restreindre l'accès au contenu web statique fourni par les serveurs web sur site de l'entreprise.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B, D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. Construire une connexion VPN entre un dispositif sur site et une passerelle privée virtuelle dans le nouveau VPC** : Établit une connexion sécurisée sur Internet.
      - **D. Connecter le centre de données sur site de l'entreprise à AWS en utilisant AWS Direct Connect** : Établit une connexion réseau dédiée.
    - **Autres options incorrectes** ❌ :
      - **A. Utiliser AWS Service Catalog** : Service de catalogue de services IT, pas pour la connectivité.
      - **C. Utiliser Amazon Athena** : Service de requête interactive, pas pour la connectivité.
      - **E. Tirer parti d'Amazon CloudFront** : CDN pour la diffusion de contenu, pas pour la connectivité hybride.
    </details>

8. Une application web exécutée sur AWS a été spamée avec des requêtes malveillantes provenant d'un ensemble récurrent d'adresses IP. <br/> Quel service AWS peut aider à sécuriser l'application et bloquer le trafic malveillant ?
    - A. AWS IAM
    - B. Amazon GuardDuty
    - C. Amazon Simple Notification Service (Amazon SNS)
    - D. AWS WAF

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS WAF** : Web Application Firewall qui permet de créer des règles pour bloquer le trafic basé sur des adresses IP, etc.
    - **Autres options incorrectes** ❌ :
      - **A. AWS IAM** : Service de gestion des identités et accès, pas de filtrage de trafic.
      - **B. Amazon GuardDuty** : Service de détection de menaces, pas de blocage en temps réel.
      - **C. Amazon Simple Notification Service (Amazon SNS)** : Service de notification, pas de sécurité.
    </details>

9. Traiter l'infrastructure comme du code dans le cloud AWS permet aux utilisateurs de :
    - A. automatiser la migration du matériel sur site vers les centres de données AWS.
    - B. laisser un tiers automatiser un audit de l'infrastructure AWS.
    - C. remettre le code d'application à AWS pour qu'il s'exécute sur l'infrastructure AWS.
    - D. automatiser le processus de provisionnement de l'infrastructure.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. automatiser le processus de provisionnement de l'infrastructure** : L'infrastructure comme code (ex: CloudFormation) permet de définir et provisionner des ressources de manière reproductible et automatisée.
    - **Autres options incorrectes** ❌ :
      - **A. automatiser la migration du matériel sur site** : Pas le but principal.
      - **B. laisser un tiers automatiser un audit** : Pas le but principal.
      - **C. remettre le code d'application à AWS** : Ce n'est pas ce que signifie l'infrastructure comme code.
    </details>

10. Une entreprise nécessite une connexion réseau dédiée entre ses serveurs sur site et le cloud AWS. <br/> Quel service AWS doit être utilisé ?
    - A. AWS VPN
    - B. AWS Direct Connect
    - C. Amazon API Gateway
    - D. Amazon Connect

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Direct Connect** : Établit une connexion réseau privée et dédiée entre le centre de données sur site et AWS.
    - **Autres options incorrectes** ❌ :
      - **A. AWS VPN** : Connexion sécurisée sur Internet, pas dédiée.
      - **C. Amazon API Gateway** : Service pour créer, publier et gérer des API.
      - **D. Amazon Connect** : Service de centre de contact cloud.
    </details>

11. Quel service AWS peut être utilisé pour interroger des ensembles de données stockés directement depuis Amazon S3 en utilisant SQL standard ?
    - A. AWS Glue
    - B. AWS Data Pipeline
    - C. Amazon CloudSearch
    - D. Amazon Athena

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon Athena** : Service de requête interactive sans serveur qui permet d'interroger des données dans S3 avec SQL.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Glue** : Service ETL (extraction, transformation, chargement).
      - **B. AWS Data Pipeline** : Service d'orchestration de données.
      - **C. Amazon CloudSearch** : Service de recherche managé.
    </details>

12. AWS CloudFormation est conçu pour aider l'utilisateur à :
    - A. modéliser et provisionner des ressources.
    - B. mettre à jour le code d'application.
    - C. mettre en place des data lakes.
    - D. créer des rapports de facturation.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. modéliser et provisionner des ressources** : CloudFormation permet de définir l'infrastructure sous forme de code (modèles JSON/YAML) et de la déployer de manière reproductible.
    - **Autres options incorrectes** ❌ :
      - **B. mettre à jour le code d'application** : Ce n'est pas son rôle.
      - **C. mettre en place des data lakes** : Possible via des modèles, mais ce n'est pas l'objectif principal.
      - **D. créer des rapports de facturation** : Non, c'est le rôle d'AWS Cost Explorer ou des rapports détaillés.
    </details>

13. Lequel des services suivants est un service de base de données AWS ?
    - A. Amazon Redshift
    - B. Amazon Elastic Block Store (Amazon EBS)
    - C. Amazon S3 Glacier
    - D. AWS Snowball

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon Redshift** : Entrepôt de données (data warehouse) managé.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Elastic Block Store (Amazon EBS)** : Service de stockage par blocs pour EC2.
      - **C. Amazon S3 Glacier** : Service d'archivage à long terme.
      - **D. AWS Snowball** : Appareil de transfert de données physique.
    </details>

14. Un Cloud Practitioner doit déterminer si des groupes de sécurité dans un compte AWS ont été configurés pour autoriser un accès non restreint pour des ports spécifiques. <br/> Quelle est la manière la PLUS SIMPLE de faire cela ?
    - A. Examiner les règles entrantes pour chaque groupe de sécurité dans la console de gestion Amazon EC2 pour vérifier le port 0.0.0.0/0.
    - B. Exécuter AWS Trusted Advisor et examiner les résultats.
    - C. Ouvrir la console AWS IAM et vérifier les filtres de règles entrantes pour l'accès ouvert.
    - D. Dans AWS Config, créer une règle personnalisée qui invoque une fonction AWS Lambda pour examiner les règles d'accès entrant.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Exécuter AWS Trusted Advisor et examiner les résultats** : Trusted Advisor vérifie les groupes de sécurité avec des règles trop permissives et fournit des recommandations.
    - **Autres options incorrectes** ❌ :
      - **A. Examiner les règles entrantes pour chaque groupe de sécurité** : Manuel et fastidieux si nombreux groupes.
      - **C. Ouvrir la console AWS IAM** : IAM ne gère pas les groupes de sécurité.
      - **D. Dans AWS Config, créer une règle personnalisée** : Possible mais plus complexe que Trusted Advisor.
    </details>

15. Quels sont les avantages de développer et exécuter une nouvelle application dans le cloud AWS par rapport à sur site ? (Choisissez deux.)
    - A. AWS distribue automatiquement les données globalement pour une durabilité plus élevée.
    - B. AWS s'occupera de l'exploitation de l'application.
    - C. AWS facilite la conception pour la haute disponibilité.
    - D. AWS peut facilement s'adapter aux changements de demande de l'application.
    - E. AWS s'occupe de l'application des correctifs de sécurité.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C, D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **C. AWS facilite la conception pour la haute disponibilité** : Services multi-AZ, ELB, Auto Scaling, etc.
      - **D. AWS peut facilement s'adapter aux changements de demande de l'application** : Élasticité et mise à l'échelle automatique.
    - **Autres options incorrectes** ❌ :
      - **A. AWS distribue automatiquement les données globalement** : Non, le client doit configurer la réplication.
      - **B. AWS s'occupera de l'exploitation de l'application** : Non, c'est la responsabilité du client (modèle de responsabilité partagée).
      - **E. AWS s'occupe de l'application des correctifs de sécurité** : Pour l'infrastructure sous-jacente, mais pas pour le système d'exploitation invité ou l'application (sauf services managés).
    </details>

16. Un utilisateur a besoin d'un rapport d'évaluation de sécurité automatisé qui identifiera les accès réseau non intentionnels aux instances Amazon EC2 et les vulnérabilités sur ces instances. <br/> Quel service AWS fournira ce rapport d'évaluation ?
    - A. Groupes de sécurité EC2
    - B. AWS Config
    - C. Amazon Macie
    - D. Amazon Inspector

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon Inspector** : Service d'évaluation de sécurité automatisé pour les applications déployées sur EC2, qui identifie les vulnérabilités et les écarts par rapport aux meilleures pratiques.
    - **Autres options incorrectes** ❌ :
      - **A. Groupes de sécurité EC2** : Mécanisme de pare-feu, pas d'évaluation automatisée.
      - **B. AWS Config** : Service d'audit de configuration, pas d'évaluation de vulnérabilités.
      - **C. Amazon Macie** : Service de découverte et classification des données sensibles, pas d'évaluation de sécurité des instances.
    </details>

17. Comment une entreprise peut-elle isoler les coûts des charges de travail de production et de non-production sur AWS ?
    - A. Créer des rôles IAM pour les charges de travail de production et de non-production.
    - B. Utiliser des comptes différents pour les dépenses de production et de non-production.
    - C. Utiliser Amazon EC2 pour les charges de travail de non-production et d'autres services pour les charges de travail de production.
    - D. Utiliser Amazon CloudWatch pour surveiller l'utilisation des services.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Utiliser des comptes différents pour les dépenses de production et de non-production** : Séparation claire des coûts et des ressources.
    - **Autres options incorrectes** ❌ :
      - **A. Créer des rôles IAM** : IAM gère les autorisations, pas l'isolation des coûts.
      - **C. Utiliser Amazon EC2 pour les charges de travail de non-production** : Pas une bonne pratique d'isolation.
      - **D. Utiliser Amazon CloudWatch** : Surveillance, pas isolation des coûts.
    </details>

18. Où les utilisateurs peuvent-ils trouver un catalogue de fournisseurs reconnus par AWS de solutions de sécurité tierces ?
    - A. AWS Service Catalog
    - B. AWS Marketplace
    - C. AWS Quick Start
    - D. AWS CodeDeploy

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Marketplace** : Plateforme où les clients peuvent trouver, acheter et déployer des logiciels et services tiers qui s'exécutent sur AWS, y compris des solutions de sécurité.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Service Catalog** : Permet aux organisations de créer et gérer des catalogues de services IT approuvés.
      - **C. AWS Quick Start** : Guides de déploiement rapide pour des architectures courantes.
      - **D. AWS CodeDeploy** : Service de déploiement automatisé.
    </details>

19. Un Cloud Practitioner doit stocker des données pendant 7 ans pour répondre à des exigences réglementaires. <br/> Quel service AWS répondra à cette exigence au COÛT le PLUS BAS ?
    - A. Amazon S3
    - B. AWS Snowball
    - C. Amazon Redshift
    - D. Amazon S3 Glacier

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon S3 Glacier** : Classe de stockage d'archivage à très faible coût pour des données rarement consultées.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon S3** : Standard est plus cher pour l'archivage à long terme.
      - **B. AWS Snowball** : Appareil de transfert de données, pas de stockage à long terme.
      - **C. Amazon Redshift** : Entrepôt de données, pas adapté à l'archivage.
    </details>

20. Quels sont les avantages immédiats de l'utilisation du cloud AWS ? (Choisissez deux.)
    - A. Personnel IT accru.
    - B. Les dépenses en capital sont remplacées par des dépenses variables.
    - C. Contrôle de l'infrastructure par l'utilisateur.
    - D. Agilité accrue.
    - E. AWS assume la responsabilité de la sécurité dans le cloud.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B, D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. Les dépenses en capital sont remplacées par des dépenses variables** : Modèle de paiement à l'usage.
      - **D. Agilité accrue** : Provisionnement rapide des ressources.
    - **Autres options incorrectes** ❌ :
      - **A. Personnel IT accru** : Non, le cloud peut réduire le besoin en personnel d'infrastructure.
      - **C. Contrôle de l'infrastructure par l'utilisateur** : Moins de contrôle sur l'infrastructure physique, mais plus de contrôle sur les ressources logiques.
      - **E. AWS assume la responsabilité de la sécurité dans le cloud** : Faux, c'est une responsabilité partagée.
    </details>

21. Quel service de sécurité reconnaît et classe automatiquement les données sensibles ou la propriété intellectuelle sur AWS ?
    - A. Amazon GuardDuty
    - B. Amazon Macie
    - C. Amazon Inspector
    - D. AWS Shield

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon Macie** : Utilise l'apprentissage automatique pour découvrir et classer les données sensibles (PII, propriété intellectuelle).
    - **Autres options incorrectes** ❌ :
      - **A. Amazon GuardDuty** : Service de détection de menaces.
      - **C. Amazon Inspector** : Évaluation de sécurité des applications.
      - **D. AWS Shield** : Protection DDoS.
    </details>

22. Quel est le but d'AWS Storage Gateway ?
    - A. Il garantit que le stockage de données sur site est durable à 99,999999999 %.
    - B. Il transporte des pétaoctets de données vers et depuis AWS.
    - C. Il se connecte à plusieurs instances Amazon EC2.
    - D. Il connecte le stockage de données sur site au cloud AWS.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Il connecte le stockage de données sur site au cloud AWS** : Service de stockage hybride qui intègre les environnements sur site avec le stockage cloud AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Il garantit que le stockage de données sur site est durable à 99,999999999 %** : Non, c'est la durabilité de S3.
      - **B. Il transporte des pétaoctets de données vers et depuis AWS** : C'est le rôle d'AWS Snowball.
      - **C. Il se connecte à plusieurs instances Amazon EC2** : Non, il se connecte aux ressources sur site.
    </details>

23. Que doivent faire les utilisateurs s'ils veulent installer une application dans des emplacements géographiquement isolés ?
    - A. Installer l'application en utilisant plusieurs passerelles Internet.
    - B. Déployer l'application dans un Amazon VPC.
    - C. Déployer l'application dans plusieurs régions AWS.
    - D. Configurer l'application en utilisant plusieurs passerelles NAT.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Déployer l'application dans plusieurs régions AWS** : Pour la redondance géographique et la proximité avec les utilisateurs mondiaux.
    - **Autres options incorrectes** ❌ :
      - **A. Installer l'application en utilisant plusieurs passerelles Internet** : Pas pour l'isolation géographique.
      - **B. Déployer l'application dans un Amazon VPC** : Un VPC est régional, pas global.
      - **D. Configurer l'application en utilisant plusieurs passerelles NAT** : Pour l'accès à Internet, pas pour l'isolation géographique.
    </details>

24. Un système dans le cloud AWS est conçu pour résister à la défaillance d'un ou plusieurs composants. <br/> De quoi s'agit-il ?
    - A. Élasticité
    - B. Haute disponibilité
    - C. Évolutivité
    - D. Agilité

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Haute disponibilité** : Capacité d'un système à rester opérationnel malgré les défaillances.
    - **Autres options incorrectes** ❌ :
      - **A. Élasticité** : Capacité à s'adapter à la charge.
      - **C. Évolutivité** : Capacité à gérer une charge accrue.
      - **D. Agilité** : Rapidité de provisionnement et d'innovation.
    </details>

25. Un Cloud Practitioner a besoin d'une connexion dédiée et cohérente entre les ressources AWS et un système sur site. <br/> Quel service AWS peut satisfaire cette exigence ?
    - A. AWS Direct Connect
    - B. AWS VPN
    - C. Amazon Connect
    - D. AWS Data Pipeline

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Direct Connect** : Connexion réseau dédiée entre le centre de données sur site et AWS.
    - **Autres options incorrectes** ❌ :
      - **B. AWS VPN** : Connexion sécurisée sur Internet, pas dédiée.
      - **C. Amazon Connect** : Service de centre de contact.
      - **D. AWS Data Pipeline** : Service d'orchestration de données.
    </details>

26. Dans le modèle de responsabilité partagée d'AWS, qui est responsable de la sécurité et de la conformité ?
    - A. Le client est responsable.
    - B. AWS est responsable.
    - C. AWS et le client partagent la responsabilité.
    - D. AWS partage la responsabilité avec l'organisme de réglementation pertinent.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS et le client partagent la responsabilité** : C'est le principe de base du modèle de responsabilité partagée.
    - **Autres options incorrectes** ❌ :
      - **A. Le client est responsable** : Partiellement, mais pas entièrement.
      - **B. AWS est responsable** : Partiellement, mais pas entièrement.
      - **D. AWS partage la responsabilité avec l'organisme de réglementation** : Non, c'est avec le client.
    </details>

27. Pour utiliser l'AWS CLI, les utilisateurs doivent générer :
    - A. une politique de mot de passe.
    - B. une clé d'accès/secrète.
    - C. une politique gérée.
    - D. une clé API.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. une clé d'accès/secrète** : Identifiants pour l'authentification programmatique.
    - **Autres options incorrectes** ❌ :
      - **A. une politique de mot de passe** : Pour les utilisateurs console, pas CLI.
      - **C. une politique gérée** : Définit les permissions, pas pour l'authentification CLI.
      - **D. une clé API** : Terme générique ; les clés d'accès sont spécifiques à AWS.
    </details>

28. Quel service AWS est utilisé pour fournir le chiffrement pour Amazon EBS ?
    - A. AWS Certificate Manager
    - B. AWS Systems Manager
    - C. AWS KMS
    - D. AWS Config

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS KMS** : Key Management Service gère les clés de chiffrement utilisées par EBS.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Certificate Manager** : Gère les certificats SSL/TLS.
      - **B. AWS Systems Manager** : Service de gestion des ressources.
      - **D. AWS Config** : Service d'audit de configuration.
    </details>

29. Comment AWS facture-t-il l'utilisation d'AWS Lambda une fois le niveau gratuit dépassé ? (Choisissez deux.)
    - A. Par le temps d'exécution de la fonction Lambda.
    - B. Par le nombre de versions d'une fonction Lambda spécifique.
    - C. Par le nombre de requêtes pour une fonction Lambda donnée.
    - D. Par le langage de programmation utilisé pour la fonction Lambda.
    - E. Par le nombre total de fonctions Lambda dans un compte AWS.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A, C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. Par le temps d'exécution de la fonction Lambda** : Facturation à la milliseconde.
      - **C. Par le nombre de requêtes pour une fonction Lambda donnée** : Facturation par nombre d'invocations.
    - **Autres options incorrectes** ❌ :
      - **B. Par le nombre de versions** : Non, les versions ne sont pas facturées.
      - **D. Par le langage de programmation** : Non, le prix ne dépend pas du langage.
      - **E. Par le nombre total de fonctions Lambda** : Non, seule l'exécution est facturée.
    </details>

30. Lequel des énoncés suivants décrit les relations entre les régions AWS, les zones de disponibilité et les emplacements périphériques ? (Choisissez deux.)
    - A. Il y a plus de régions AWS que de zones de disponibilité.
    - B. Il y a plus d'emplacements périphériques que de régions AWS.
    - C. Un emplacement périphérique est une zone de disponibilité.
    - D. Il y a plus de régions AWS que d'emplacements périphériques.
    - E. Il y a plus de zones de disponibilité que de régions AWS.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B, E

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. Il y a plus d'emplacements périphériques que de régions AWS** : Des centaines d'edge locations vs des dizaines de régions.
      - **E. Il y a plus de zones de disponibilité que de régions AWS** : Plusieurs AZ par région.
    - **Autres options incorrectes** ❌ :
      - **A. Il y a plus de régions AWS que de zones de disponibilité** : Faux.
      - **C. Un emplacement périphérique est une zone de disponibilité** : Non, ce sont des infrastructures distinctes.
      - **D. Il y a plus de régions AWS que d'emplacements périphériques** : Faux.
    </details>

31. Que fournit AWS Shield Standard ?
    - A. Règles WAF
    - B. Protection DDoS
    - C. Permissions IAM et accès aux ressources
    - D. Chiffrement des données

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Protection DDoS** : AWS Shield Standard fournit une protection DDoS de base pour tous les clients AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Règles WAF** : AWS WAF est un service séparé.
      - **C. Permissions IAM et accès aux ressources** : C'est le rôle d'IAM.
      - **D. Chiffrement des données** : Fourni par d'autres services (KMS, etc.).
    </details>

32. Une entreprise veut construire ses nouvelles charges de travail applicatives dans le cloud AWS au lieu d'utiliser des ressources sur site. <br/> Quelle dépense peut être réduite en utilisant le cloud AWS ?
    - A. Le coût d'écriture de code Java ou Node.js sur mesure
    - B. Les tests de pénétration pour la sécurité
    - C. Le matériel requis pour supporter les nouvelles applications
    - D. L'écriture de cas de test spécifiques pour les applications tierces.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Le matériel requis pour supporter les nouvelles applications** : Réduction des dépenses en capital (CapEx) grâce au modèle opérationnel (OpEx) du cloud.
    - **Autres options incorrectes** ❌ :
      - **A. Le coût d'écriture de code** : Non, cela dépend du développement.
      - **B. Les tests de pénétration** : Toujours nécessaires, mais facilités par des services AWS.
      - **D. L'écriture de cas de test** : Toujours nécessaires.
    </details>

33. Que permet AWS Marketplace aux utilisateurs de faire ? (Choisissez deux.)
    - A. Vendre des instances Spot Amazon EC2 inutilisées.
    - B. Vendre des solutions à d'autres utilisateurs AWS.
    - C. Acheter des logiciels tiers qui s'exécutent sur AWS.
    - D. Acheter des documents de sécurité et de conformité AWS.
    - E. Commander AWS Snowball.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B, C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. Vendre des solutions à d'autres utilisateurs AWS** : Les éditeurs peuvent vendre leurs solutions.
      - **C. Acheter des logiciels tiers qui s'exécutent sur AWS** : Les clients peuvent acheter et déployer des logiciels.
    - **Autres options incorrectes** ❌ :
      - **A. Vendre des instances Spot Amazon EC2 inutilisées** : Non, le marché Spot est différent.
      - **D. Acheter des documents de sécurité et de conformité AWS** : Ces documents sont disponibles via AWS Artifact.
      - **E. Commander AWS Snowball** : Se fait via la console AWS, pas via Marketplace.
    </details>

34. Que signifie le déploiement d'une architecture cloud hybride sur AWS ?
    - A. Toutes les ressources s'exécutent sur une infrastructure sur site.
    - B. Certaines ressources s'exécutent sur site et certaines dans un centre de colocation.
    - C. Toutes les ressources s'exécutent dans le cloud AWS.
    - D. Certaines ressources s'exécutent sur site et certaines dans le cloud AWS.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Certaines ressources s'exécutent sur site et certaines dans le cloud AWS** : Définition de l'hybride.
    - **Autres options incorrectes** ❌ :
      - **A. Toutes les ressources s'exécutent sur une infrastructure sur site** : C'est entièrement sur site.
      - **B. Certaines ressources s'exécutent sur site et certaines dans un centre de colocation** : Pas nécessairement AWS.
      - **C. Toutes les ressources s'exécutent dans le cloud AWS** : C'est entièrement cloud.
    </details>

35. Quel service AWS permet aux utilisateurs d'identifier les modifications apportées à une ressource au fil du temps ?
    - A. Amazon Inspector
    - B. AWS Config
    - C. AWS Service Catalog
    - D. AWS IAM

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Config** : Suit les changements de configuration des ressources AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Inspector** : Évaluation de sécurité.
      - **C. AWS Service Catalog** : Gestion des catalogues de services IT.
      - **D. AWS IAM** : Gestion des identités et accès.
    </details>

36. Comment une entreprise peut-elle réduire son coût total de possession (TCO) en utilisant AWS ?
    - A. En minimisant les grandes dépenses d'investissement
    - B. En n'ayant aucune responsabilité pour les coûts de licence tiers
    - C. En n'ayant aucune dépense opérationnelle
    - D. En laissant AWS gérer les applications

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. En minimisant les grandes dépenses d'investissement** : Passage d'un modèle CapEx à un modèle OpEx.
    - **Autres options incorrectes** ❌ :
      - **B. En n'ayant aucune responsabilité pour les coûts de licence tiers** : Faux, le client est toujours responsable des licences logicielles.
      - **C. En n'ayant aucune dépense opérationnelle** : Faux, il y a des dépenses opérationnelles (OpEx).
      - **D. En laissant AWS gérer les applications** : Faux, le client gère ses applications (sauf services SaaS).
    </details>

37. Quelle activité est une responsabilité du client dans le cloud AWS selon le modèle de responsabilité partagée d'AWS ?
    - A. Assurer la connectivité réseau d'AWS à Internet
    - B. Appliquer des correctifs et corriger les failles dans l'infrastructure du cloud AWS
    - C. Assurer la sécurité physique des centres de données cloud
    - D. Assurer la sauvegarde des volumes Amazon EBS

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Assurer la sauvegarde des volumes Amazon EBS** : Le client est responsable de la sauvegarde de ses données.
    - **Autres options incorrectes** ❌ :
      - **A. Assurer la connectivité réseau d'AWS à Internet** : AWS gère l'infrastructure réseau.
      - **B. Appliquer des correctifs et corriger les failles dans l'infrastructure du cloud AWS** : AWS est responsable de l'infrastructure sous-jacente.
      - **C. Assurer la sécurité physique des centres de données cloud** : AWS est responsable.
    </details>

38. Quels sont les avantages du cloud AWS ? (Choisissez deux.)
    - A. Coût mensuel fixe
    - B. Pas besoin de deviner les besoins en capacité
    - C. Temps de mise sur le marché accru
    - D. Dépenses d'investissement initial accrues
    - E. Accès physique aux centres de données cloud

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B, C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. Pas besoin de deviner les besoins en capacité** : Élasticité et mise à l'échelle à la demande.
      - **C. Temps de mise sur le marché accru** : Agilité et provisionnement rapide.
    - **Autres options incorrectes** ❌ :
      - **A. Coût mensuel fixe** : Non, c'est un modèle de paiement à l'usage variable.
      - **D. Dépenses d'investissement initial accrues** : Au contraire, réduites.
      - **E. Accès physique aux centres de données cloud** : Non, AWS gère les centres de données.
    </details>

39. Lors de la comparaison du coût total de possession (TCO) d'une infrastructure sur site à une architecture cloud, quels coûts doivent être pris en compte ? (Choisissez deux.)
    - A. Les frais de traitement des cartes de crédit pour les transactions d'application dans le cloud.
    - B. Le coût d'achat et d'installation du matériel serveur dans le centre de données sur site.
    - C. Le coût d'administration de l'infrastructure, y compris les installations du système d'exploitation et des logiciels, les correctifs, les sauvegardes et la récupération après des défaillances.
    - D. Les coûts des tests de pénétration tiers.
    - E. Les coûts publicitaires associés à une campagne permanente à l'échelle de l'entreprise.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B, C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. Le coût d'achat et d'installation du matériel serveur** : CapEx significatif sur site.
      - **C. Le coût d'administration de l'infrastructure** : Coûts opérationnels importants sur site.
    - **Autres options incorrectes** ❌ :
      - **A. Les frais de traitement des cartes de crédit** : Non spécifique au TCO.
      - **D. Les coûts des tests de pénétration tiers** : Peuvent exister dans les deux modèles.
      - **E. Les coûts publicitaires** : Non liés à l'infrastructure.
    </details>

40. Quelle fonctionnalité AWS permet à une entreprise de profiter des paliers d'utilisation pour les services sur plusieurs comptes membres ?
    - A. Politiques de contrôle de service (SCP)
    - B. Facturation consolidée
    - C. Instances réservées avec paiement total anticipé
    - D. AWS Cost Explorer

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Facturation consolidée** : Combine l'utilisation de tous les comptes membres pour bénéficier de remises volume.
    - **Autres options incorrectes** ❌ :
      - **A. Politiques de contrôle de service (SCP)** : Pour la gouvernance, pas les remises.
      - **C. Instances réservées avec paiement total anticipé** : Modèle d'achat, pas de regroupement.
      - **D. AWS Cost Explorer** : Outil d'analyse des coûts.
    </details>

41. Quelle est l'une des responsabilités du client selon le modèle de responsabilité partagée d'AWS ?
    - A. Infrastructure de virtualisation
    - B. Infrastructure réseau
    - C. Sécurité des applications
    - D. Sécurité physique du matériel

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Sécurité des applications** : Le client est responsable de la sécurité de ses applications et données.
    - **Autres options incorrectes** ❌ :
      - **A. Infrastructure de virtualisation** : AWS est responsable.
      - **B. Infrastructure réseau** : AWS est responsable de l'infrastructure réseau physique.
      - **D. Sécurité physique du matériel** : AWS est responsable.
    </details>

42. Qu'est-ce qui aide une entreprise à fournir une expérience à faible latence à ses utilisateurs mondiaux ?
    - A. Utiliser une région AWS centrale à tous les utilisateurs
    - B. Utiliser une deuxième zone de disponibilité dans la région AWS utilisée
    - C. Activer la mise en cache dans la région AWS utilisée
    - D. Utiliser des emplacements périphériques pour rapprocher le contenu de tous les utilisateurs

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : D

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Utiliser des emplacements périphériques pour rapprocher le contenu de tous les utilisateurs** : Amazon CloudFront utilise des edge locations pour diffuser le contenu avec une faible latence.
    - **Autres options incorrectes** ❌ :
      - **A. Utiliser une région AWS centrale** : Peut ne pas être optimale pour tous les utilisateurs.
      - **B. Utiliser une deuxième zone de disponibilité** : Améliore la disponibilité, pas la latence mondiale.
      - **C. Activer la mise en cache dans la région AWS utilisée** : Aide, mais moins efficace que les edge locations.
    </details>

43. Comment le cloud AWS peut-il augmenter la productivité de la main-d'œuvre utilisateur après la migration d'un centre de données sur site ?
    - A. Les utilisateurs n'ont pas à attendre le provisionnement de l'infrastructure.
    - B. L'infrastructure du cloud AWS est beaucoup plus rapide que l'infrastructure d'un centre de données sur site.
    - C. AWS prend en charge la gestion de la configuration des applications au nom des utilisateurs.
    - D. Les utilisateurs n'ont pas besoin de traiter les problèmes de sécurité et de conformité.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Les utilisateurs n'ont pas à attendre le provisionnement de l'infrastructure** : Provisionnement rapide et automatisation.
    - **Autres options incorrectes** ❌ :
      - **B. L'infrastructure du cloud AWS est beaucoup plus rapide** : Pas nécessairement, mais plus élastique.
      - **C. AWS prend en charge la gestion de la configuration des applications** : Non, c'est la responsabilité du client.
      - **D. Les utilisateurs n'ont pas besoin de traiter les problèmes de sécurité et de conformité** : Faux, la sécurité est une responsabilité partagée.
    </details>

44. Quel service AWS fournit un moyen rapide et automatisé de créer et gérer des comptes AWS ?
    - A. AWS QuickSight
    - B. Amazon Lightsail
    - C. AWS Organizations
    - D. Amazon Connect

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Organizations** : Permet de créer et gérer plusieurs comptes AWS de manière centralisée.
    - **Autres options incorrectes** ❌ :
      - **A. AWS QuickSight** : Service de business intelligence.
      - **B. Amazon Lightsail** : Service cloud simplifié avec instances prédéfinies.
      - **D. Amazon Connect** : Service de centre de contact.
    </details>

45. Quelle fonctionnalité d'Amazon RDS peut être utilisée pour atteindre la haute disponibilité ?
    - A. Zones de disponibilité multiples
    - B. Instances réservées Amazon
    - C. Stockage Provisionned IOPS
    - D. Surveillance améliorée

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Zones de disponibilité multiples** : Déploiement Multi-AZ pour la redondance et le basculement automatique.
    - **Autres options incorrectes** ❌ :
      - **B. Instances réservées Amazon** : Modèle de facturation, pas de haute disponibilité.
      - **C. Stockage Provisionned IOPS** : Pour les performances d'E/S, pas la haute disponibilité.
      - **D. Surveillance améliorée** : Pour la surveillance, pas la haute disponibilité.
    </details>

46. Où les utilisateurs doivent-ils signaler que des ressources AWS sont utilisées à des fins malveillantes ?
    - A. Équipe AWS Abuse
    - B. AWS Shield
    - C. AWS Support
    - D. Forums développeurs AWS

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Équipe AWS Abuse** : Spécialisée dans les signalements d'utilisation abusive.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Shield** : Protection DDoS.
      - **C. AWS Support** : Pour l'assistance technique, pas spécifiquement pour les abus.
      - **D. Forums développeurs AWS** : Communauté, pas officiel pour les signalements.
    </details>

47. Quel service AWS doit être activé pour suivre tous les changements de compte utilisateur dans la console de gestion AWS ?
    - A. AWS CloudTrail
    - B. Amazon Simple Notification Service (Amazon SNS)
    - C. Journaux de flux VPC
    - D. AWS CloudHSM

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : A

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS CloudTrail** : Journalise les appels d'API et les actions de gestion, y compris les connexions à la console.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Simple Notification Service (Amazon SNS)** : Service de notification.
      - **C. Journaux de flux VPC** : Capture le trafic réseau.
      - **D. AWS CloudHSM** : Module de sécurité matériel.
    </details>

48. Quelle est une meilleure pratique de conception du cloud AWS ?
    - A. Couplage serré des composants
    - B. Point de défaillance unique
    - C. Haute disponibilité
    - D. Surprovisionnement des ressources

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Haute disponibilité** : Concevoir pour la résilience et éviter les points de défaillance uniques.
    - **Autres options incorrectes** ❌ :
      - **A. Couplage serré des composants** : C'est une mauvaise pratique.
      - **B. Point de défaillance unique** : À éviter.
      - **D. Surprovisionnement des ressources** : Gaspilleur ; utilisez l'élasticité à la place.
    </details>

49. Pourquoi AWS est-il plus économique que les centres de données traditionnels pour les applications avec des charges de travail de calcul variables ?
    - A. Les coûts d'Amazon Elastic Compute Cloud (Amazon EC2) sont facturés mensuellement.
    - B. Les clients conservent un accès administratif complet à leurs instances Amazon EC2.
    - C. Les instances Amazon EC2 peuvent être lancées à la demande lorsque nécessaire.
    - D. Les clients peuvent exécuter en permanence suffisamment d'instances pour gérer les charges de travail de pointe.

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : C

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Les instances Amazon EC2 peuvent être lancées à la demande lorsque nécessaire** : Paiement à l'usage et élasticité permettent d'économiser sur les charges de travail variables.
    - **Autres options incorrectes** ❌ :
      - **A. Les coûts d'Amazon EC2 sont facturés mensuellement** : Non, c'est à l'heure ou à la seconde.
      - **B. Les clients conservent un accès administratif complet** : Vrai, mais pas lié à l'économie.
      - **D. Les clients peuvent exécuter en permanence suffisamment d'instances pour gérer les charges de pointe** : Ce serait coûteux et non économique.
    </details>

50. Quel service AWS simplifierait la migration d'une base de données vers AWS ?
    - A. AWS Storage Gateway
    - B. AWS Database Migration Service (AWS DMS)
    - C. Amazon Elastic Compute Cloud (Amazon EC2)
    - D. Amazon AppStream 2.0

    <details markdown=1><summary markdown="span">Réponse</summary>

    Réponse correcte : B

    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Database Migration Service (AWS DMS)** : Service conçu pour migrer des bases de données vers AWS avec un temps d'arrêt minimal.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Storage Gateway** : Pour le stockage hybride.
      - **C. Amazon Elastic Compute Cloud (Amazon EC2)** : Service de calcul, pas de migration de base de données.
      - **D. Amazon AppStream 2.0** : Streaming d'applications.
    </details>