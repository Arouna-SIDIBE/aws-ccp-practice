---
layout: exam
---

# Examen de pratique 13

1. L'utilisation de quelle fonctionnalité ou service AWS permet aux entreprises de suivre et de catégoriser les dépenses de manière détaillée ?
    - A. Balises d'allocation des coûts
    - B. Facturation consolidée
    - C. AWS Budgets
    - D. AWS Marketplace

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Balises d'allocation des coûts** : Les balises d'allocation des coûts permettent de suivre et de catégoriser les coûts AWS en ajoutant des métadonnées (balises) aux ressources, ce qui facilite l'analyse détaillée des dépenses.
    - **Autres options incorrectes** ❌ :
      - **B. Facturation consolidée** : Permet de regrouper la facturation de plusieurs comptes, mais n'offre pas de catégorisation détaillée au niveau des ressources.
      - **C. AWS Budgets** : Permet de définir des budgets et des alertes, mais n'est pas principalement conçu pour le suivi détaillé des catégories de dépenses.
      - **D. AWS Marketplace** : Place de marché pour acheter des logiciels tiers, sans rapport avec le suivi des dépenses.
    </details>

2. Quel service stocke des objets, fournit un accès en temps réel à ces objets et offre des capacités de versioning et de cycle de vie ?
    - A. Amazon Glacier
    - B. AWS Storage Gateway
    - C. Amazon S3
    - D. Amazon EBS

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon S3** : Amazon Simple Storage Service (S3) est un service de stockage d'objets qui offre un accès en temps réel, le versioning des objets et des règles de cycle de vie pour automatiser la transition vers des classes de stockage moins chères.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Glacier** : Service d'archivage à long terme, avec des temps de récupération plus longs, pas d'accès en temps réel.
      - **B. AWS Storage Gateway** : Service hybride pour connecter des environnements sur site au stockage cloud, pas un service de stockage d'objets principal.
      - **D. Amazon EBS** : Service de stockage par blocs pour les instances EC2, pas de stockage d'objets ni de versioning.
    </details>

3. Quelle équipe AWS aide les clients à accélérer l'adoption du cloud grâce à des engagements rémunérés dans l'un des plusieurs domaines de spécialité ?
    - A. AWS Enterprise Support
    - B. AWS Solutions Architects
    - C. AWS Professional Services
    - D. AWS Account Managers

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Professional Services** : Il s'agit d'une équipe mondiale d'experts qui aide les clients à accélérer leur parcours cloud grâce à des engagements rémunérés couvrant diverses spécialités (migration, sécurité, optimisation, etc.).
    - **Autres options incorrectes** ❌ :
      - **A. AWS Enterprise Support** : Plan de support offrant une assistance technique et des services, mais pas des engagements de conseil rémunérés comme AWS Professional Services.
      - **B. AWS Solutions Architects** : Fournissent des conseils architecturaux gratuits dans le cadre des interactions commerciales, mais ne sont pas des engagements rémunérés dédiés.
      - **D. AWS Account Managers** : Gèrent la relation commerciale, mais ne fournissent pas de services de conseil spécialisés.
    </details>

4. Un client souhaite concevoir et construire une nouvelle charge de travail sur AWS Cloud mais ne dispose pas de l'expertise technique logicielle liée à AWS en interne. <br/>Lequel des programmes AWS suivants le client peut-il utiliser pour atteindre cet objectif ?
    - A. AWS Partner Network Technology Partners
    - B. AWS Marketplace
    - C. AWS Partner Network Consulting Partners
    - D. AWS Service Catalog

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Partner Network Consulting Partners** : Ce sont des partenaires de conseil certifiés AWS qui aident les clients à concevoir, architecturer, construire, migrer et gérer leurs charges de travail sur AWS.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Partner Network Technology Partners** : Fournissent des logiciels fonctionnant sur ou avec AWS, pas des services de conseil.
      - **B. AWS Marketplace** : Plateforme pour acheter des logiciels tiers, pas pour obtenir de l'aide à la conception.
      - **D. AWS Service Catalog** : Service pour créer et gérer des catalogues de services informatiques approuvés, pas pour obtenir de l'expertise externe.
    </details>

5. La répartition des charges de travail sur plusieurs zones de disponibilité soutient quel principe de conception d'architecture cloud ?
    - A. Mettre en œuvre l'automatisation.
    - B. Concevoir pour l'agilité.
    - C. Concevoir pour l'échec.
    - D. Mettre en œuvre l'élasticité.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Concevoir pour l'échec** : La répartition sur plusieurs zones de disponibilité permet de concevoir des architectures tolérantes aux pannes, où la défaillance d'une zone n'affecte pas la disponibilité globale.
    - **Autres options incorrectes** ❌ :
      - **A. Mettre en œuvre l'automatisation** : L'automatisation concerne l'utilisation d'outils pour réduire l'intervention manuelle, pas spécifiquement la haute disponibilité.
      - **B. Concevoir pour l'agilité** : L'agilité concerne la capacité à s'adapter et à innover rapidement, pas la résilience.
      - **D. Mettre en œuvre l'élasticité** : L'élasticité concerne l'ajustement dynamique des ressources, pas la redondance géographique.
    </details>

6. Quels services AWS peuvent héberger une base de données Microsoft SQL Server ? (Choisissez DEUX)
    - A. Amazon EC2
    - B. Amazon Relational Database Service (Amazon RDS)
    - C. Amazon Aurora
    - D. Amazon Redshift
    - E. Amazon S3

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: A, B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Amazon EC2** : Vous pouvez installer et exécuter SQL Server sur une instance EC2.
      - **B. Amazon RDS** : Offre une instance managée de SQL Server.
    - **Autres options incorrectes** ❌ :
      - **C. Amazon Aurora** : Base de données relationnelle compatible MySQL et PostgreSQL, pas SQL Server.
      - **D. Amazon Redshift** : Entrepôt de données, pas une base de données transactionnelle SQL Server.
      - **E. Amazon S3** : Service de stockage d'objets, pas de base de données.
    </details>

7. Lequel des éléments suivants inspecte les environnements AWS pour trouver des opportunités permettant d'économiser de l'argent aux utilisateurs et d'améliorer les performances du système ?
    - A. AWS Cost Explorer
    - B. AWS Trusted Advisor
    - C. Facturation consolidée
    - D. Facturation détaillée

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Trusted Advisor** : Analyse votre environnement AWS et fournit des recommandations en temps réel dans cinq catégories : coût, performance, sécurité, tolérance aux pannes et limites de service.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Cost Explorer** : Outil de visualisation et d'analyse des coûts, mais ne fournit pas de recommandations proactives.
      - **C. Facturation consolidée** : Regroupe la facturation de plusieurs comptes, pas d'analyse des performances ou des coûts.
      - **D. Facturation détaillée** : Fournit des données détaillées sur l'utilisation, mais pas d'analyse automatique.
    </details>

8. Lequel des modèles de tarification Amazon EC2 suivants permet aux clients d'utiliser des licences logicielles liées à un serveur existant ?
    - A. Instances Spot
    - B. Instances réservées
    - C. Hôtes dédiés
    - D. Instances à la demande

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Hôtes dédiés** : Les hôtes dédiés sont des serveurs physiques dédiés à votre usage, vous permettant d'utiliser vos licences logicielles existantes (BYOL - Bring Your Own License) pour des produits comme Windows Server, SQL Server, etc.
    - **Autres options incorrectes** ❌ :
      - **A. Instances Spot** : Ne prennent pas en charge le BYOL de la même manière.
      - **B. Instances réservées** : Modèle de facturation, pas un type d'hôte physique.
      - **D. Instances à la demande** : Les licences sont généralement incluses dans le prix, pas de BYOL natif.
    </details>

9. Quelles caractéristiques AWS rendent AWS rentable pour une charge de travail avec une demande utilisateur dynamique ? (Choisissez DEUX)
    - A. Haute disponibilité
    - B. Modèle de sécurité partagée
    - C. Élasticité
    - D. Tarification à l'usage
    - E. Fiabilité

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: C, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Élasticité** : Permet d'ajuster automatiquement les ressources en fonction de la demande, évitant le surprovisionnement.
      - **D. Tarification à l'usage** : Vous ne payez que pour les ressources que vous utilisez, ce qui est idéal pour les charges de travail à demande variable.
    - **Autres options incorrectes** ❌ :
      - **A. Haute disponibilité** : Améliore la fiabilité mais n'est pas directement liée à la rentabilité.
      - **B. Modèle de sécurité partagée** : Important pour la sécurité, pas pour l'optimisation des coûts.
      - **E. Fiabilité** : Caractéristique importante, mais pas spécifiquement liée à la rentabilité des charges de travail dynamiques.
    </details>

10. Quel service permet l'audit des risques en surveillant et en journalisant continuellement l'activité du compte, y compris les actions des utilisateurs dans la console de gestion AWS et les SDK AWS ?
    - A. Amazon CloudWatch
    - B. AWS CloudTrail
    - C. AWS Config
    - D. AWS Health

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS CloudTrail** : Enregistre l'historique des appels d'API et des actions de gestion pour la gouvernance, la conformité et l'audit des risques.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon CloudWatch** : Service de surveillance des performances et des ressources, pas de journalisation des actions utilisateur.
      - **C. AWS Config** : Évalue et audite la configuration des ressources, pas les actions utilisateur.
      - **D. AWS Health** : Fournit des informations sur l'état des services AWS, pas d'audit des actions.
    </details>

11. Lesquelles des caractéristiques suivantes sont propres à Amazon S3 ? (Choisissez DEUX.)
    - A. Un système de fichiers global
    - B. Un magasin d'objets
    - C. Un magasin de fichiers local
    - D. Un système de fichiers réseau
    - E. Un système de stockage durable

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Un magasin d'objets** : S3 est un service de stockage d'objets, pas un système de fichiers traditionnel.
      - **E. Un système de stockage durable** : Conçu pour une durabilité de 99,999999999 % (11 9).
    - **Autres options incorrectes** ❌ :
      - **A. Un système de fichiers global** : Ce n'est pas un système de fichiers. Amazon EFS est un système de fichiers réseau.
      - **C. Un magasin de fichiers local** : Non, S3 est un service cloud.
      - **D. Un système de fichiers réseau** : Cela décrit Amazon EFS.
    </details>

12. Quels services peuvent être utilisés dans des architectures cloud hybrides AWS ? (Choisissez DEUX.)
    - A. Amazon Route 53
    - B. Passerelle privée virtuelle
    - C. Classic Load Balancer
    - D. Auto Scaling
    - E. Mesures par défaut d'Amazon CloudWatch

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: A, B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Amazon Route 53** : Service DNS pouvant router le trafic vers des ressources sur site et cloud.
      - **B. Passerelle privée virtuelle** : Composant d'un VPN site à site AWS pour connecter votre réseau sur site à un VPC.
    - **Autres options incorrectes** ❌ :
      - **C. Classic Load Balancer** : Équilibreur de charge pour les ressources dans AWS, pas spécifiquement hybride.
      - **D. Auto Scaling** : Service pour ajuster la capacité dans AWS, pas pour les environnements hybrides.
      - **E. Mesures par défaut d'Amazon CloudWatch** : CloudWatch peut surveiller les ressources hybrides avec l'agent CloudWatch, mais les mesures par défaut sont pour les ressources AWS.
    </details>

13. Quels coûts sont inclus lors de la comparaison du coût total de possession (TCO) AWS avec le TCO sur site ?
    - A. Gestion de projet
    - B. Licences de logiciels antivirus
    - C. Sécurité du centre de données
    - D. Développement logiciel

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Sécurité du centre de données** : Dans le TCO, on compare les coûts d'infrastructure, y compris la sécurité physique et logique des centres de données.
    - **Autres options incorrectes** ❌ :
      - **A. Gestion de projet** : Coût indirect, non spécifique à l'infrastructure.
      - **B. Licences de logiciels antivirus** : Coût logiciel, généralement inclus dans les coûts d'exploitation.
      - **D. Développement logiciel** : Coût de développement, non inclus dans le TCO d'infrastructure.
    </details>

14. Une entreprise envisage d'utiliser AWS pour une base de données auto-hébergée qui nécessite un arrêt nocturne pour maintenance et économies. <br/> Quel service l'entreprise devrait-elle utiliser ?
    - A. Amazon Redshift
    - B. Amazon DynamoDB
    - C. Amazon Elastic Compute Cloud (Amazon EC2) avec Amazon EC2 instance store
    - D. Amazon EC2 avec Amazon Elastic Block Store (Amazon EBS)

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon EC2 avec Amazon Elastic Block Store (Amazon EBS)** : EC2 vous donne le contrôle pour arrêter/démarrer l'instance, et EBS fournit un stockage persistant pour la base de données.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Redshift** : Entrepôt de données managé, pas facilement arrêtable.
      - **B. Amazon DynamoDB** : Base de données NoSQL entièrement managée, pas conçue pour des arrêts réguliers.
      - **C. Amazon EC2 avec Amazon EC2 instance store** : Le stockage d'instance est temporaire, les données seraient perdues à l'arrêt.
    </details>

15. Laquelle des relations suivantes entre les régions, les zones de disponibilité et les emplacements périphériques est correcte ?
    - A. Les centres de données contiennent des régions.
    - B. Les régions contiennent des zones de disponibilité.
    - C. Les zones de disponibilité contiennent des emplacements périphériques.
    - D. Les emplacements périphériques contiennent des régions.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Les régions contiennent des zones de disponibilité** : Une région AWS est une zone géographique qui contient plusieurs zones de disponibilité (AZ). Chaque AZ est un ou plusieurs centres de données.
    - **Autres options incorrectes** ❌ :
      - **A. Les centres de données contiennent des régions** : C'est l'inverse : les régions contiennent des centres de données.
      - **C. Les zones de disponibilité contiennent des emplacements périphériques** : Non, les emplacements périphériques sont distincts et répartis mondialement.
      - **D. Les emplacements périphériques contiennent des régions** : Absurde, les emplacements périphériques sont des points de présence distincts.
    </details>

16. Quels outils AWS aident à estimer les coûts ? (Choisissez trois.)
    - A. Rapport de facturation détaillé
    - B. Balises d'allocation des coûts
    - C. AWS Simple Monthly Calculator
    - D. AWS Total Cost of Ownership (TCO) Calculator
    - E. Cost Eliminator

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: B, C, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Balises d'allocation des coûts** : Aident à catégoriser les coûts pour une meilleure estimation et analyse.
      - **C. AWS Simple Monthly Calculator** : Outil pour estimer les coûts mensuels basés sur l'utilisation prévue.
      - **D. AWS Total Cost of Ownership (TCO) Calculator** : Compare les coûts d'exécution d'une infrastructure sur AWS vs sur site.
    - **Autres options incorrectes** ❌ :
      - **A. Rapport de facturation détaillé** : Fournit des données historiques, pas pour l'estimation future.
      - **E. Cost Eliminator** : N'existe pas comme outil AWS.
    </details>

17. Lesquels des avantages suivants sont des avantages de la facturation consolidée AWS ? (Choisissez DEUX.)
    - A. La possibilité de recevoir une seule facture pour plusieurs comptes
    - B. L'augmentation par défaut des limites de service dans tous les comptes
    - C. Une réduction fixe sur la facture mensuelle
    - D. Des remises volume potentielles, car l'utilisation de tous les comptes est combinée
    - E. L'extension automatique du plan de support AWS du compte maître à tous les comptes

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: A, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. La possibilité de recevoir une seule facture pour plusieurs comptes** : C'est l'objectif principal de la facturation consolidée.
      - **D. Des remises volume potentielles, car l'utilisation de tous les comptes est combinée** : L'utilisation agrégée peut atteindre des seuils de volume plus rapidement, offrant des remises.
    - **Autres options incorrectes** ❌ :
      - **B. L'augmentation par défaut des limites de service** : Faux, les limites ne sont pas automatiquement augmentées.
      - **C. Une réduction fixe sur la facture mensuelle** : Non, les remises dépendent de l'utilisation.
      - **E. L'extension automatique du plan de support** : Faux, chaque compte a son propre plan de support.
    </details>

18. Lequel des modèles de tarification d'instance réservée (RI) suivants offre les économies moyennes les plus élevées par rapport au tarif à la demande ?
    - A. Un an, aucun paiement initial, tarif RI standard
    - B. Un an, paiement total initial, tarif RI convertible
    - C. Trois ans, paiement total initial, tarif RI standard
    - D. Trois ans, aucun paiement initial, tarif RI convertible

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Trois ans, paiement total initial, tarif RI standard** : Plus l'engagement est long et plus le paiement initial est élevé, plus la remise est importante. Le tarif standard offre des remises plus élevées que le convertible.
    - **Autres options incorrectes** ❌ :
      - **A. Un an, aucun paiement initial** : Moins d'économies qu'avec un engagement de trois ans.
      - **B. Un an, paiement total initial** : Engagement plus court et tarif convertible (moins de remise).
      - **D. Trois ans, aucun paiement initial** : Bonnes économies, mais moins qu'avec paiement total initial.
    </details>

19. Comparé aux coûts dans les centres de données traditionnels et virtualisés, AWS a :
    - A. des coûts variables plus élevés et des coûts initiaux plus élevés.
    - B. des coûts d'utilisation fixes et des coûts initiaux plus bas.
    - C. des coûts variables plus bas et des coûts initiaux plus élevés.
    - D. des coûts variables plus bas et des coûts initiaux plus bas.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. des coûts variables plus bas et des coûts initiaux plus bas** : Avec AWS, vous évitez les coûts initiaux élevés (CapEx) et payez uniquement à l'usage (OpEx), ce qui réduit les coûts variables grâce aux économies d'échelle d'AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Coûts variables plus élevés** : Faux, AWS offre des coûts variables plus bas.
      - **B. Coûts d'utilisation fixes** : Non, le modèle est à l'usage.
      - **C. Coûts initiaux plus élevés** : Faux, il n'y a pas de coûts initiaux importants.
    </details>

20. Une caractéristique des emplacements périphériques est qu'ils :
    - A. hébergent des instances Amazon EC2 plus près des utilisateurs.
    - B. aident à réduire la latence et à améliorer les performances pour les utilisateurs.
    - C. mettent en cache les données changeant fréquemment sans atteindre le serveur d'origine.
    - D. actualisent les changements de données quotidiennement.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. aident à réduire la latence et à améliorer les performances pour les utilisateurs** : Les emplacements périphériques sont des sites distribués mondialement utilisés par CloudFront pour mettre en cache le contenu et le servir avec une faible latence.
    - **Autres options incorrectes** ❌ :
      - **A. hébergent des instances Amazon EC2** : Faux, les instances EC2 sont hébergées dans des régions/zones de disponibilité.
      - **C. mettent en cache les données changeant fréquemment** : CloudFront met en cache, mais les données très dynamiques peuvent ne pas être mises en cache.
      - **D. actualisent les changements de données quotidiennement** : Non, la mise en cache est gérée en temps réel avec des TTL.
    </details>

21. Lequel des éléments suivants peut limiter l'accès à un compartiment Amazon S3 à des utilisateurs spécifiques ?
    - A. Une paire de clés publique et privée
    - B. Amazon Inspector
    - C. Politiques AWS Identity and Access Management (IAM)
    - D. Groupes de sécurité

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Politiques AWS Identity and Access Management (IAM)** : Les politiques IAM peuvent être utilisées pour accorder ou refuser des autorisations à des utilisateurs, groupes ou rôles spécifiques pour accéder à des compartiments S3.
    - **Autres options incorrectes** ❌ :
      - **A. Une paire de clés publique et privée** : Utilisée pour le chiffrement ou l'authentification SSH, pas pour contrôler l'accès S3.
      - **B. Amazon Inspector** : Service d'évaluation de sécurité, pas de contrôle d'accès.
      - **D. Groupes de sécurité** : Contrôlent le trafic réseau pour les instances EC2, pas l'accès S3.
    </details>

22. Lesquelles des actions de sécurité suivantes sont disponibles gratuitement ?
    - A. Appeler le support AWS
    - B. Contacter AWS Professional Services pour demander un atelier
    - C. Accéder aux forums, blogs et livres blancs
    - D. Assister à des classes AWS dans une université locale

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Accéder aux forums, blogs et livres blancs** : Ces ressources sont disponibles gratuitement sur le site AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Appeler le support AWS** : Nécessite un plan de support payant.
      - **B. Contacter AWS Professional Services** : Services payants.
      - **D. Assister à des classes AWS** : Généralement payantes (formation AWS Training).
    </details>

23. Lequel des modèles de tarification d'instance réservée (RI) peut changer les attributs de la RI tant que l'échange aboutit à la création de RIs de valeur égale ou supérieure ?
    - A. RIs dédiées
    - B. RIs planifiées
    - C. RIs convertibles
    - D. RIs standard

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. RIs convertibles** : Les instances réservées convertibles peuvent être échangées contre d'autres RIs convertibles avec des attributs différents (famille d'instance, OS, location).
    - **Autres options incorrectes** ❌ :
      - **A. RIs dédiées** : Ne peuvent pas être échangées.
      - **B. RIs planifiées** : Pour des charges de travail prévisibles, pas d'échange.
      - **D. RIs standard** : Permettent des modifications limitées (taille dans la même famille, AZ), mais pas d'échange comme les convertibles.
    </details>

24. Quelle caractéristique AWS réduira le coût total de possession (TCO) du client ?
    - A. Modèle de responsabilité partagée en matière de sécurité
    - B. Monolocation
    - C. Calcul élastique
    - D. Chiffrement

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Calcul élastique** : L'élasticité permet d'ajuster les ressources à la demande, évitant le surprovisionnement et réduisant les coûts.
    - **Autres options incorrectes** ❌ :
      - **A. Modèle de responsabilité partagée** : Important pour la sécurité, pas pour réduire le TCO.
      - **B. Monolocation** : Cela peut augmenter les coûts (hôtes dédiés).
      - **D. Chiffrement** : Sécurité, pas de réduction de coûts.
    </details>

25. Lequel des services suivants se mettra automatiquement à l'échelle avec une augmentation attendue du trafic web ?
    - A. AWS CodePipeline
    - B. Elastic Load Balancing
    - C. Amazon EBS
    - D. AWS Direct Connect

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Elastic Load Balancing** : Les équilibreurs de charge élastiques (ELB) peuvent gérer automatiquement l'augmentation du trafic en répartissant la charge sur plusieurs cibles.
    - **Autres options incorrectes** ❌ :
      - **A. AWS CodePipeline** : Service de livraison continue, pas de mise à l'échelle automatique.
      - **C. Amazon EBS** : Stockage par blocs, ne se met pas à l'échelle automatiquement avec le trafic.
      - **D. AWS Direct Connect** : Connexion réseau dédiée, pas de mise à l'échelle automatique.
    </details>

26. Où se trouvent les documents de conformité AWS, tels qu'un rapport SOC 1 ?
    - A. Amazon Inspector
    - B. AWS CloudTrail
    - C. AWS Artifact
    - D. AWS Certificate Manager

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Artifact** : Portail centralisé où les clients peuvent télécharger des rapports de conformité (SOC, PCI, ISO, etc.) et des accords.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Inspector** : Service d'évaluation de sécurité.
      - **B. AWS CloudTrail** : Journalisation des API.
      - **D. AWS Certificate Manager** : Gestion des certificats SSL/TLS.
    </details>

27. Selon le modèle de responsabilité partagée AWS, lesquelles des activités suivantes sont de la responsabilité du client ? (Choisissez DEUX.)
    - A. Appliquer des correctifs aux composants du système d'exploitation pour Amazon Relational Database Server (Amazon RDS)
    - B. Chiffrer les données côté client
    - C. Former le personnel du centre de données
    - D. Configurer les listes de contrôle d'accès réseau (ACL)
    - E. Maintenir les contrôles environnementaux dans un centre de données

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: B, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Chiffrer les données côté client** : Le client est responsable du chiffrement de ses données en transit et au repos.
      - **D. Configurer les listes de contrôle d'accès réseau (ACL)** : Le client configure les NACL dans son VPC.
    - **Autres options incorrectes** ❌ :
      - **A. Appliquer des correctifs aux composants du système d'exploitation pour Amazon RDS** : AWS est responsable des correctifs du système d'exploitation sous-jacent pour RDS (service managé).
      - **C. Former le personnel du centre de données** : Responsabilité d'AWS.
      - **E. Maintenir les contrôles environnementaux** : Responsabilité d'AWS.
    </details>

28. Quel est un modèle recommandé pour concevoir une architecture hautement disponible sur AWS ?
    - A. S'assurer que les composants ont une connectivité réseau à faible latence.
    - B. Exécuter suffisamment d'instances Amazon EC2 pour fonctionner à charge de pointe.
    - C. S'assurer que l'application est conçue pour accommoder la défaillance de n'importe quel composant.
    - D. Utiliser une application monolithique qui gère toutes les opérations.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. S'assurer que l'application est conçue pour accommoder la défaillance de n'importe quel composant** : C'est le principe de conception pour la haute disponibilité : prévoir les défaillances et avoir des redondances.
    - **Autres options incorrectes** ❌ :
      - **A. Connectivité à faible latence** : Important mais pas un modèle de haute disponibilité.
      - **B. Exécuter suffisamment d'instances à charge de pointe** : Coûteux et pas élastique.
      - **D. Application monolithique** : Contraire aux meilleures pratiques cloud (découplage).
    </details>

29. Selon les meilleures pratiques, comment une application doit-elle être conçue pour s'exécuter dans le cloud AWS ?
    - A. Utiliser des composants fortement couplés.
    - B. Utiliser des composants faiblement couplés.
    - C. Utiliser des composants rarement couplés.
    - D. Utiliser des composants fréquemment couplés.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Utiliser des composants faiblement couplés** : Le découplage permet une plus grande résilience, évolutivité et facilité de maintenance.
    - **Autres options incorrectes** ❌ :
      - **A. Composants fortement couplés** : Rend le système fragile et difficile à mettre à l'échelle.
      - **C. Composants rarement couplés** : Terme non standard.
      - **D. Composants fréquemment couplés** : Similaire au couplage fort, non recommandé.
    </details>

30. AWS prend en charge lesquelles des méthodes suivantes pour ajouter de la sécurité aux utilisateurs IAM ? (Choisissez DEUX.)
    - A. Mettre en œuvre Amazon Rekognition
    - B. Utiliser des ressources protégées par AWS Shield
    - C. Bloquer l'accès avec les groupes de sécurité
    - D. Utiliser l'authentification multifacteur (MFA)
    - E. Appliquer la force et l'expiration des mots de passe

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: D, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **D. Utiliser l'authentification multifacteur (MFA)** : Ajoute une couche de sécurité en exigeant un second facteur d'authentification.
      - **E. Appliquer la force et l'expiration des mots de passe** : Politiques de mot de passe pour renforcer la sécurité des comptes IAM.
    - **Autres options incorrectes** ❌ :
      - **A. Mettre en œuvre Amazon Rekognition** : Service de vision par ordinateur, pas de sécurité IAM.
      - **B. Utiliser des ressources protégées par AWS Shield** : Protection DDoS, pas de sécurité IAM.
      - **C. Bloquer l'accès avec les groupes de sécurité** : Les groupes de sécurité contrôlent le trafic réseau, pas l'accès IAM.
    </details>

31. Quels services AWS doivent être utilisés pour la lecture/écriture de données en constante évolution ? (Choisissez DEUX.)
    - A. Amazon Glacier
    - B. Amazon RDS
    - C. AWS Snowball
    - D. Amazon Redshift
    - E. Amazon EFS

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Amazon RDS** : Base de données relationnelle pour les données transactionnelles en constante évolution.
      - **E. Amazon EFS** : Système de fichiers élastique pour partager des données entre instances, prenant en charge les mises à jour fréquentes.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Glacier** : Archivage, pas pour des données fréquemment mises à jour.
      - **C. AWS Snowball** : Transfert de données physique, pas de stockage actif.
      - **D. Amazon Redshift** : Entrepôt de données pour l'analyse, pas pour les transactions en temps réel.
    </details>

32. Quel est l'un des avantages d'Amazon Relational Database Service (Amazon RDS) ?
    - A. Il simplifie les tâches d'administration des bases de données relationnelles.
    - B. Il fournit 99,99999999999 % de fiabilité et de durabilité.
    - C. Il met automatiquement à l'échelle les bases de données pour les charges.
    - D. Il permet aux utilisateurs d'ajuster dynamiquement les ressources CPU et RAM.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Il simplifie les tâches d'administration des bases de données relationnelles** : RDS automatise les tâches courantes comme les sauvegardes, les correctifs, la surveillance et les réplications.
    - **Autres options incorrectes** ❌ :
      - **B. Il fournit 99,99999999999 % de fiabilité** : Exagéré, la durabilité d'Aurora est de 99,999999999 % (11 9).
      - **C. Il met automatiquement à l'échelle les bases de données** : RDS ne met pas à l'échelle automatiquement la capacité de calcul ; vous devez modifier le type d'instance.
      - **D. Il permet d'ajuster dynamiquement les ressources CPU et RAM** : Non, vous devez changer le type d'instance (temps d'arrêt).
    </details>

33. Un client a besoin d'exécuter une base de données MySQL qui s'adapte facilement. <br/>Quel service AWS doivent-ils utiliser ?
    - A. Amazon Aurora
    - B. Amazon Redshift
    - C. Amazon DynamoDB
    - D. Amazon ElastiCache

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon Aurora** : Base de données relationnelle compatible MySQL avec une mise à l'échelle automatique du stockage jusqu'à 128 To et des performances élevées.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Redshift** : Entrepôt de données, pas MySQL.
      - **C. Amazon DynamoDB** : Base de données NoSQL, pas relationnelle.
      - **D. Amazon ElastiCache** : Cache en mémoire, pas une base de données persistante.
    </details>

34. Lequel des composants suivants de l'infrastructure mondiale AWS est constitué d'un ou plusieurs centres de données distincts interconnectés par des liaisons à faible latence ?
    - A. Zone de disponibilité
    - B. Emplacement périphérique
    - C. Région
    - D. Réseau privé

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Zone de disponibilité** : Chaque zone de disponibilité (AZ) est un ou plusieurs centres de données avec une alimentation, un refroidissement et un réseau indépendants, interconnectés par des liens à faible latence.
    - **Autres options incorrectes** ❌ :
      - **B. Emplacement périphérique** : Points de présence pour CloudFront, pas des centres de données complets.
      - **C. Région** : Contient plusieurs AZ.
      - **D. Réseau privé** : Terme générique, pas un composant spécifique de l'infrastructure AWS.
    </details>

35. Lequel des éléments suivants est un contrôle partagé entre le client et AWS ?
    - A. Fournir une clé pour le chiffrement côté client d'Amazon S3
    - B. Configuration d'une instance Amazon EC2
    - C. Contrôles environnementaux des centres de données physiques AWS
    - D. Sensibilisation et formation

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Sensibilisation et formation** : AWS est responsable de la formation de son personnel, mais le client est responsable de la formation de ses propres employés.
    - **Autres options incorrectes** ❌ :
      - **A. Fournir une clé pour le chiffrement côté client** : Responsabilité du client.
      - **B. Configuration d'une instance Amazon EC2** : Responsabilité du client.
      - **C. Contrôles environnementaux** : Responsabilité d'AWS.
    </details>

36. Sur combien de zones de disponibilité les ressources de calcul doivent-elles être provisionnées pour atteindre une haute disponibilité ?
    - A. Un minimum d'une
    - B. Un minimum de deux
    - C. Un minimum de trois
    - D. Un minimum de quatre ou plus

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Un minimum de deux** : La haute disponibilité nécessite au moins deux zones de disponibilité pour se protéger contre la défaillance d'une seule AZ.
    - **Autres options incorrectes** ❌ :
      - **A. Un minimum d'une** : Pas de redondance.
      - **C. Un minimum de trois** : Peut être utilisé pour une résilience encore plus grande, mais deux suffisent pour la haute disponibilité.
      - **D. Un minimum de quatre** : Non requis pour la haute disponibilité de base.
    </details>

37. L'un des avantages de déplacer l'infrastructure d'un centre de données sur site vers le cloud AWS est :
    - A. cela permet à l'entreprise d'éliminer les factures informatiques.
    - B. cela permet à l'entreprise de mettre un serveur dans le centre de données de chaque client.
    - C. cela permet à l'entreprise de se concentrer sur les activités commerciales.
    - D. cela permet à l'entreprise de laisser les serveurs non corrigés.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. cela permet à l'entreprise de se concentrer sur les activités commerciales** : AWS gère l'infrastructure sous-jacente, permettant aux entreprises de se concentrer sur leur cœur de métier.
    - **Autres options incorrectes** ❌ :
      - **A. éliminer les factures informatiques** : Les coûts existent toujours, mais sous forme de dépenses d'exploitation (OpEx).
      - **B. mettre un serveur dans chaque centre de données client** : Non pertinent.
      - **D. laisser les serveurs non corrigés** : Mauvaise pratique, le client est toujours responsable des correctifs pour certains services.
    </details>

38. Quelle est l'option de stockage la moins chère et durable pour conserver des sauvegardes de base de données pour une récupération immédiate ?
    - A. Amazon S3
    - B. Amazon Glacier
    - C. Amazon EBS
    - D. Amazon EC2 Instance Store

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon S3** : S3 Standard offre une durabilité élevée et un accès immédiat, avec un coût raisonnable pour des sauvegardes fréquemment accessibles.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Glacier** : Moins cher, mais avec des temps de récupération de quelques minutes à plusieurs heures.
      - **C. Amazon EBS** : Plus cher que S3 pour le stockage de sauvegardes.
      - **D. Amazon EC2 Instance Store** : Stockage temporaire, non persistant.
    </details>

39. Quelle fonctionnalité AWS IAM permet aux développeurs d'accéder aux services AWS via l'AWS CLI ?
    - A. Clés API
    - B. Clés d'accès
    - C. Noms d'utilisateur/Mots de passe
    - D. Clés SSH

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Clés d'accès** : Composées d'un ID de clé d'accès et d'une clé d'accès secrète, utilisées pour authentifier les requêtes API via AWS CLI ou SDK.
    - **Autres options incorrectes** ❌ :
      - **A. Clés API** : Terme générique, les clés d'accès sont le type spécifique.
      - **C. Noms d'utilisateur/Mots de passe** : Utilisés pour la console AWS, pas pour CLI.
      - **D. Clés SSH** : Utilisées pour se connecter aux instances EC2, pas pour l'authentification AWS API.
    </details>

40. Lequel des éléments suivants est une base de données NoSQL rapide et fiable ?
    - A. Amazon Redshift
    - B. Amazon RDS
    - C. Amazon DynamoDB
    - D. Amazon S3

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon DynamoDB** : Base de données NoSQL entièrement gérée, rapide et scalable.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Redshift** : Entrepôt de données.
      - **B. Amazon RDS** : Base de données relationnelle.
      - **D. Amazon S3** : Stockage d'objets, pas une base de données.
    </details>

41. Qu'est-ce qu'un exemple d'agilité dans le cloud AWS ?
    - A. Accès à plusieurs types d'instances
    - B. Accès à des services managés
    - C. Utiliser la facturation consolidée pour produire une seule facture
    - D. Temps d'acquisition réduit pour de nouvelles ressources de calcul

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Temps d'acquisition réduit pour de nouvelles ressources de calcul** : L'agilité fait référence à la vitesse à laquelle vous pouvez provisionner des ressources (en quelques minutes vs semaines/mois sur site).
    - **Autres options incorrectes** ❌ :
      - **A. Accès à plusieurs types d'instances** : C'est la flexibilité, pas spécifiquement l'agilité.
      - **B. Accès à des services managés** : Réduit la charge opérationnelle, mais pas directement l'agilité.
      - **C. Facturation consolidée** : Avantage de gestion financière, pas d'agilité.
    </details>

42. Quel service un client doit-il utiliser pour consolider et gérer centralement plusieurs comptes AWS ?
    - A. AWS IAM
    - B. AWS Organizations
    - C. AWS Schema Conversion Tool
    - D. AWS Config

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Organizations** : Service pour gérer plusieurs comptes AWS, avec facturation consolidée et politiques de contrôle de service.
    - **Autres options incorrectes** ❌ :
      - **A. AWS IAM** : Gère les identités dans un seul compte.
      - **C. AWS Schema Conversion Tool** : Aide à migrer des schémas de base de données.
      - **D. AWS Config** : Audite la configuration des ressources.
    </details>

43. Quelle approche de transcodage d'un grand nombre de fichiers vidéo individuels adhère aux principes d'architecture AWS ?
    - A. Utiliser de nombreuses instances en parallèle
    - B. Utiliser une seule grande instance pendant les heures creuses
    - C. Utiliser du matériel dédié
    - D. Utiliser un type d'instance GPU large

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Utiliser de nombreuses instances en parallèle** : Le parallélisme et l'élasticité sont des principes clés du cloud pour traiter des charges de travail importantes rapidement.
    - **Autres options incorrectes** ❌ :
      - **B. Utiliser une seule grande instance** : Ne tire pas parti de l'élasticité et du parallélisme.
      - **C. Utiliser du matériel dédié** : Contraire à l'approche cloud élastique.
      - **D. Utiliser un type d'instance GPU large** : Peut être approprié pour le transcodage, mais ne maximise pas le parallélisme.
    </details>

44. Pour quel processus d'audit AWS a-t-il l'entière responsabilité ?
    - A. Politiques AWS IAM
    - B. Sécurité physique
    - C. Politiques de compartiment Amazon S3
    - D. Journaux AWS CloudTrail

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Sécurité physique** : AWS est entièrement responsable de la sécurité physique de ses centres de données.
    - **Autres options incorrectes** ❌ :
      - **A. Politiques AWS IAM** : Responsabilité du client.
      - **C. Politiques de compartiment Amazon S3** : Responsabilité du client.
      - **D. Journaux AWS CloudTrail** : AWS fournit le service, mais le client est responsable de l'activation et de la gestion des journaux.
    </details>

45. Quelle caractéristique du cloud AWS soutiendra l'exigence d'une entreprise internationale pour une faible latence auprès de tous ses clients ?
    - A. Tolérance aux pannes
    - B. Portée mondiale
    - C. Tarification à l'usage
    - D. Haute disponibilité

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Portée mondiale** : AWS a une infrastructure mondiale avec des régions et des emplacements périphériques, permettant de déployer des ressources près des utilisateurs pour réduire la latence.
    - **Autres options incorrectes** ❌ :
      - **A. Tolérance aux pannes** : Important pour la disponibilité, pas directement pour la latence.
      - **C. Tarification à l'usage** : Modèle de coût, pas de performance.
      - **D. Haute disponibilité** : Réduit les temps d'arrêt, mais n'améliore pas nécessairement la latence.
    </details>

46. Lequel des éléments suivants est de la responsabilité du client selon le modèle de responsabilité partagée AWS ?
    - A. Appliquer des correctifs à l'infrastructure sous-jacente
    - B. Sécurité physique
    - C. Appliquer des correctifs aux instances Amazon EC2
    - D. Appliquer des correctifs à l'infrastructure réseau

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Appliquer des correctifs aux instances Amazon EC2** : Pour les services IaaS comme EC2, le client est responsable du système d'exploitation invité et des applications.
    - **Autres options incorrectes** ❌ :
      - **A. Appliquer des correctifs à l'infrastructure sous-jacente** : Responsabilité d'AWS.
      - **B. Sécurité physique** : Responsabilité d'AWS.
      - **D. Appliquer des correctifs à l'infrastructure réseau** : Responsabilité d'AWS.
    </details>

47. Un client utilise plusieurs comptes AWS avec une facturation séparée. <br/>Comment le client peut-il profiter des remises volume avec un impact minimal sur les ressources AWS ?
    - A. Créer un compte AWS global et déplacer toutes les ressources AWS vers ce compte.
    - B. S'inscrire à trois ans de tarification d'instance réservée d'avance.
    - C. Utiliser la fonctionnalité de facturation consolidée d'AWS Organizations.
    - D. S'inscrire au plan de support AWS Enterprise pour obtenir des remises volume.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Utiliser la fonctionnalité de facturation consolidée d'AWS Organizations** : Combine l'utilisation de tous les comptes membres, permettant d'atteindre des seuils de volume pour des remises, sans déplacer les ressources.
    - **Autres options incorrectes** ❌ :
      - **A. Créer un compte global et déplacer les ressources** : Complexe et perturbateur.
      - **B. S'inscrire à des instances réservées** : Nécessite un engagement financier, pas directement des remises volume.
      - **D. Plan de support Enterprise** : Offre des avantages de support, pas des remises volume spécifiques.
    </details>

48. Lesquelles des fonctionnalités suivantes sont des caractéristiques d'Amazon CloudWatch Logs ? (Choisissez DEUX.)
    - A. Résumés par Amazon Simple Notification Service (Amazon SNS)
    - B. Analytics gratuits d'Amazon Elasticsearch Service
    - C. Fournis gratuitement
    - D. Surveillance en temps réel
    - E. Rétention ajustable

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: D, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **D. Surveillance en temps réel** : CloudWatch Logs peut surveiller les logs en temps réel et déclencher des alarmes.
      - **E. Rétention ajustable** : Vous pouvez définir la période de rétention des logs (de 1 jour à 10 ans).
    - **Autres options incorrectes** ❌ :
      - **A. Résumés par Amazon SNS** : CloudWatch Logs peut envoyer des notifications via SNS, mais ne fournit pas de résumés.
      - **B. Analytics gratuits d'Amazon Elasticsearch Service** : Non, Elasticsearch Service est un service séparé.
      - **C. Fournis gratuitement** : CloudWatch Logs a des coûts (ingestion, stockage, etc.).
    </details>

49. Lequel des éléments suivants est un service DNS (Domain Name System) managé par AWS ?
    - A. Amazon Route 53
    - B. Amazon Neptune
    - C. Amazon SageMaker
    - D. Amazon Lightsail

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon Route 53** : Service DNS scalable et hautement disponible.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Neptune** : Base de données de graphe.
      - **C. Amazon SageMaker** : Service de machine learning.
      - **D. Amazon Lightsail** : Service cloud simple avec plans prédéfinis.
    </details>

50. Un client déploie une nouvelle application et doit choisir une région AWS. <br/>Lequel des facteurs suivants pourrait influencer la décision du client ? (Choisissez DEUX.)
    - A. Latence réduite pour les utilisateurs
    - B. La présentation de l'application dans la langue locale
    - C. Conformité à la souveraineté des données
    - D. Coûts de refroidissement dans les climats plus chauds
    - E. Proximité du bureau du client pour des visites sur site

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Correct answer: A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Latence réduite pour les utilisateurs** : Choisir une région proche des utilisateurs finaux réduit la latence.
      - **C. Conformité à la souveraineté des données** : Certaines réglementations exigent que les données restent dans un pays ou une région spécifique.
    - **Autres options incorrectes** ❌ :
      - **B. Présentation dans la langue locale** : Non lié au choix de la région.
      - **D. Coûts de refroidissement** : Gérés par AWS, non un facteur client.
      - **E. Proximité du bureau** : Non pertinent pour les performances de l'application.
    </details>