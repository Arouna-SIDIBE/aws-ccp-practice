---
layout: exam
---

# Examen de pratique 12

1. Lequel des composants suivants de l'infrastructure mondiale AWS est constitué d'un ou plusieurs centres de données discrets interconnectés par des liaisons à faible latence ?
    - A. Zone de disponibilité.
    - B. Emplacement périphérique.
    - C. Région.
    - D. Réseau privé.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Zone de disponibilité** : Une zone de disponibilité (AZ) est un emplacement physique distinct composé d'un ou plusieurs centres de données avec une alimentation, un réseau et un refroidissement indépendants.
    - **Autres options incorrectes** ❌ :
      - **B. Emplacement périphérique** : Point de présence (PoP) utilisé par CloudFront et Route 53 pour la mise en cache et la diffusion de contenu.
      - **C. Région** : Zone géographique contenant plusieurs zones de disponibilité.
      - **D. Réseau privé** : Terme générique, pas un composant spécifique de l'infrastructure AWS.
    </details>

2. Un avantage du tarif à la demande d'Amazon Elastic Compute Cloud (Amazon EC2) est :
    - A. La possibilité d'enchérir pour un coût horaire inférieur.
    - B. Payer un tarif journalier quel que soit le temps utilisé.
    - C. Payer uniquement pour le temps utilisé.
    - D. Payer à l'avance pour les instances et payer un tarif horaire inférieur.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Payer uniquement pour le temps utilisé** : Les instances à la demande sont facturées à la seconde (avec un minimum de 60 secondes) pour les instances Linux, sans engagement à long terme.
    - **Autres options incorrectes** ❌ :
      - **A. La possibilité d'enchérir pour un coût horaire inférieur** : C'est le modèle des instances Spot.
      - **B. Payer un tarif journalier quel que soit le temps utilisé** : Faux, la facturation est à la seconde/heure.
      - **D. Payer à l'avance pour les instances et payer un tarif horaire inférieur** : C'est le modèle des instances réservées.
    </details>

3. Qu'est-ce qui peut aider à évaluer une application pour la migration vers le cloud ? (Choisissez DEUX)
    - A. AWS Trusted Advisor.
    - B. AWS Professional Services.
    - C. AWS Systems Manager.
    - D. AWS Partner Network (APN).
    - E. AWS Secrets Manager.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. AWS Professional Services** : Équipe de consultants AWS qui peut aider à l'évaluation et à la migration.
      - **D. AWS Partner Network (APN)** : Partenaires AWS certifiés qui fournissent des services de migration et de conseil.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Trusted Advisor** : Fournit des recommandations d'optimisation, pas spécifiquement pour l'évaluation de migration.
      - **C. AWS Systems Manager** : Service de gestion des ressources, pas d'évaluation de migration.
      - **E. AWS Secrets Manager** : Gère les secrets, pas l'évaluation de migration.
    </details>

4. Une caractéristique des emplacements périphériques est qu'ils :
    - A. Hébergent des instances Amazon EC2 plus près des utilisateurs.
    - B. Aident à réduire la latence et à améliorer les performances pour les utilisateurs.
    - C. Metttent en cache les données fréquemment modifiées sans atteindre le serveur d'origine.
    - D. Actualisent les modifications de données quotidiennement.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Aident à réduire la latence et à améliorer les performances pour les utilisateurs** : Les emplacements périphériques mettent en cache le contenu et le servent depuis des emplacements géographiquement proches des utilisateurs finaux.
    - **Autres options incorrectes** ❌ :
      - **A. Hébergent des instances Amazon EC2 plus près des utilisateurs** : Les instances EC2 sont hébergées dans des régions/zones de disponibilité, pas dans les emplacements périphériques.
      - **C. Metttent en cache les données fréquemment modifiées sans atteindre le serveur d'origine** : Les emplacements périphériques mettent en cache, mais pour les données dynamiques, ils doivent souvent contacter l'origine.
      - **D. Actualisent les modifications de données quotidiennement** : Le rafraîchissement du cache dépend de la TTL (durée de vie) définie, pas quotidiennement par défaut.
    </details>

5. Lesquelles des méthodes suivantes sont des moyens valides pour un client d'interagir avec les services AWS ? (Choisissez DEUX)
    - A. Interface en ligne de commande.
    - B. Sur site.
    - C. Kits de développement logiciel (SDK).
    - D. Logiciel en tant que service (SaaS).
    - E. Hybride.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Interface en ligne de commande** : AWS CLI.
      - **C. Kits de développement logiciel (SDK)** : AWS SDK pour différents langages de programmation.
    - **Autres options incorrectes** ❌ :
      - **B. Sur site** : Cela décrit un lieu, pas une méthode d'interaction.
      - **D. Logiciel en tant que service (SaaS)** : Modèle de cloud, pas une méthode d'interaction avec AWS.
      - **E. Hybride** : Type d'architecture, pas une méthode d'interaction.
    </details>

6. Quelle est une proposition de valeur du cloud AWS ?
    - A. AWS est responsable de la sécurité dans le cloud AWS.
    - B. Aucun contrat à long terme n'est requis.
    - C. Provisionner de nouveaux serveurs en quelques jours.
    - D. AWS gère les applications utilisateur dans le cloud AWS.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Aucun contrat à long terme n'est requis** : AWS offre un modèle de paiement à l'usage sans engagement à long terme (bien que des engagements puissent permettre des économies).
    - **Autres options incorrectes** ❌ :
      - **A. AWS est responsable de la sécurité dans le cloud AWS** : La sécurité est une responsabilité partagée ; le client est responsable de la sécurité dans le cloud.
      - **C. Provisionner de nouveaux serveurs en quelques jours** : Dans le cloud, le provisionnement se fait en quelques minutes.
      - **D. AWS gère les applications utilisateur dans le cloud AWS** : Le client est responsable de la gestion de ses applications.
    </details>

7. Une entreprise migre une application qui exécute des charges de travail non interruptibles sur une période de trois ans. Quel modèle de tarification fournirait la solution la PLUS rentable ?
    - A. Instances Spot Amazon EC2.
    - B. Instances dédiées Amazon EC2.
    - C. Instances à la demande Amazon EC2.
    - D. Instances réservées Amazon EC2.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Instances réservées Amazon EC2** : Pour des charges de travail prévisibles et à long terme, les instances réservées offrent des remises importantes (jusqu'à 75 %) par rapport aux instances à la demande.
    - **Autres options incorrectes** ❌ :
      - **A. Instances Spot Amazon EC2** : Risque d'interruption, non adapté aux charges de travail non interruptibles.
      - **B. Instances dédiées Amazon EC2** : Matériel dédié à un coût plus élevé, non nécessaire pour la rentabilité.
      - **C. Instances à la demande Amazon EC2** : Plus chères sur trois ans.
    </details>

8. Quel service AWS est utilisé pour suivre, enregistrer et auditer les changements de configuration apportés aux ressources AWS ?
    - A. AWS Shield.
    - B. AWS Config.
    - C. AWS IAM.
    - D. Amazon Inspector.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Config** : Service qui évalue, audite et évalue la configuration des ressources AWS et enregistre les changements au fil du temps.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Shield** : Service de protection DDoS.
      - **C. AWS IAM** : Gestion des identités et des accès.
      - **D. Amazon Inspector** : Évaluation de sécurité automatisée pour les applications.
    </details>

9. Quelle caractéristique du cloud AWS prendra en charge l'exigence d'une entreprise internationale pour une faible latence auprès de tous ses clients ?
    - A. Tolérance aux pannes.
    - B. Portée mondiale.
    - C. Tarification à l'usage.
    - D. Haute disponibilité.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Portée mondiale** : AWS a des régions et des emplacements périphériques dans le monde entier, permettant de déployer des ressources plus près des utilisateurs pour réduire la latence.
    - **Autres options incorrectes** ❌ :
      - **A. Tolérance aux pannes** : Capacité à résister aux défaillances, pas directement liée à la latence.
      - **C. Tarification à l'usage** : Modèle de facturation, pas de performance.
      - **D. Haute disponibilité** : Réduction des temps d'arrêt, pas de latence.
    </details>

10. Comment un compte AWS peut-il utiliser des instances réservées d'un autre compte AWS ?
    - A. En utilisant des instances dédiées Amazon EC2.
    - B. En utilisant la facturation consolidée d'AWS Organizations.
    - C. En utilisant l'outil AWS Cost Explorer.
    - D. En utilisant AWS Budgets.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. En utilisant la facturation consolidée d'AWS Organizations** : Les remises des instances réservées et des Savings Plans sont partagées entre tous les comptes membres d'une organisation.
    - **Autres options incorrectes** ❌ :
      - **A. En utilisant des instances dédiées Amazon EC2** : Les instances dédiées ne partagent pas les avantages de facturation.
      - **C. En utilisant l'outil AWS Cost Explorer** : Outil de visualisation des coûts, ne permet pas de partager des instances réservées.
      - **D. En utilisant AWS Budgets** : Service de budgétisation, ne permet pas de partager des instances réservées.
    </details>

11. Quels sont les avantages de développer et d'exécuter une nouvelle application dans le cloud AWS par rapport à sur site ? (Choisissez DEUX)
    - A. AWS distribue automatiquement les données globalement pour une durabilité plus élevée.
    - B. AWS s'occupera de l'exploitation de l'application.
    - C. AWS facilite l'architecture pour la haute disponibilité.
    - D. AWS peut facilement s'adapter aux changements de demande de l'application.
    - E. AWS s'occupe de la mise à jour corrective de sécurité de l'application.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. AWS facilite l'architecture pour la haute disponibilité** : Services comme les zones de disponibilité, ELB, Auto Scaling facilitent la conception d'applications hautement disponibles.
      - **D. AWS peut facilement s'adapter aux changements de demande de l'application** : L'élasticité du cloud permet de mettre à l'échelle les ressources en fonction de la demande.
    - **Autres options incorrectes** ❌ :
      - **A. AWS distribue automatiquement les données globalement pour une durabilité plus élevée** : Certains services comme S3 répliquent les données dans une région, mais la distribution globale n'est pas automatique.
      - **B. AWS s'occupera de l'exploitation de l'application** : Le client est responsable de l'exploitation de son application.
      - **E. AWS s'occupe de la mise à jour corrective de sécurité de l'application** : Le client est responsable des correctifs de son application.
    </details>

12. Lequel des services suivants relève de la responsabilité du client pour maintenir la configuration du système d'exploitation, les correctifs de sécurité et la mise en réseau ?
    - A. Amazon RDS.
    - B. Amazon EC2.
    - C. Amazon ElastiCache.
    - D. AWS Fargate.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon EC2** : Service IaaS où le client est responsable du système d'exploitation, des correctifs, des applications et de la configuration réseau de l'instance.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon RDS** : Service de base de données managé ; AWS s'occupe du système d'exploitation et des correctifs du moteur de base de données.
      - **C. Amazon ElastiCache** : Service de cache managé ; AWS gère l'infrastructure.
      - **D. AWS Fargate** : Moteur de calcul sans serveur pour les conteneurs ; AWS gère l'infrastructure sous-jacente.
    </details>

13. AWS prend en charge lesquelles des méthodes suivantes pour ajouter de la sécurité aux utilisateurs Identity and Access Management (IAM) ? (Choisissez DEUX)
    - A. Mettre en œuvre Amazon Rekognition.
    - B. Utiliser des ressources protégées par AWS Shield.
    - C. Bloquer l'accès avec des groupes de sécurité.
    - D. Utiliser l'authentification multi-facteurs (MFA).
    - E. Appliquer la force et l'expiration des mots de passe.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **D. Utiliser l'authentification multi-facteurs (MFA)** : Ajoute une deuxième couche d'authentification pour les utilisateurs IAM.
      - **E. Appliquer la force et l'expiration des mots de passe** : Les politiques de mot de passe IAM permettent de définir des exigences de complexité et de rotation.
    - **Autres options incorrectes** ❌ :
      - **A. Mettre en œuvre Amazon Rekognition** : Service de vision par ordinateur, pas pour la sécurité IAM.
      - **B. Utiliser des ressources protégées par AWS Shield** : Protection DDoS, pas pour la sécurité IAM.
      - **C. Bloquer l'accès avec des groupes de sécurité** : Les groupes de sécurité contrôlent le trafic réseau, pas l'accès IAM.
    </details>

14. Quel service fournit un service de stockage hybride qui permet aux applications sur site d'utiliser de manière transparente le stockage cloud ?
    - A. Amazon Glacier.
    - B. AWS Snowball.
    - C. AWS Storage Gateway.
    - D. Amazon Elastic Block Storage (Amazon EBS).

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Storage Gateway** : Service hybride qui connecte les environnements sur site au stockage cloud AWS (S3, Glacier, EBS).
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Glacier** : Service d'archivage cloud.
      - **B. AWS Snowball** : Appareil de transfert de données physique.
      - **D. Amazon Elastic Block Storage (Amazon EBS)** : Stockage par blocs pour EC2, non conçu pour une utilisation hybride directe.
    </details>

15. Où une entreprise doit-elle se rendre pour rechercher des listes de logiciels de fournisseurs de logiciels indépendants pour trouver, tester, acheter et déployer des logiciels qui s'exécutent sur AWS ?
    - A. AWS Marketplace.
    - B. Amazon Lumberyard.
    - C. AWS Artifact.
    - D. Amazon CloudSearch.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Marketplace** : Catalogue en ligne de logiciels tiers préconfigurés pour s'exécuter sur AWS.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Lumberyard** : Moteur de jeu, pas un marché.
      - **C. AWS Artifact** : Portail pour les rapports de conformité.
      - **D. Amazon CloudSearch** : Service de recherche géré.
    </details>

16. Lequel des éléments suivants est un composant de l'infrastructure mondiale AWS ?
    - A. Amazon Alexa.
    - B. AWS Regions.
    - C. Amazon Lightsail.
    - D. AWS Organizations.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Regions** : Les régions AWS sont des zones géographiques qui contiennent plusieurs zones de disponibilité.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Alexa** : Assistant vocal, pas un composant d'infrastructure.
      - **C. Amazon Lightsail** : Service de cloud simplifié, pas un composant d'infrastructure mondiale.
      - **D. AWS Organizations** : Service de gestion de plusieurs comptes.
    </details>

17. Quel modèle de tarification Amazon EC2 s'ajuste en fonction de l'offre et de la demande des instances EC2 ?
    - A. Instances à la demande.
    - B. Instances réservées.
    - C. Instances Spot.
    - D. Instances réservées convertibles.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Instances Spot** : Le prix des instances Spot varie en fonction de la capacité disponible (offre et demande).
    - **Autres options incorrectes** ❌ :
      - **A. Instances à la demande** : Prix fixe.
      - **B. Instances réservées** : Prix fixe avec remise.
      - **D. Instances réservées convertibles** : Prix fixe avec remise, mais possibilité d'échanger l'instance.
    </details>

18. Une entreprise veut migrer ses applications vers un VPC sur AWS. Ces applications devront accéder à des ressources sur site. Quelle combinaison d'actions permettra à l'entreprise d'atteindre cet objectif ? (Choisissez DEUX)
    - A. Utiliser AWS Service Catalog pour identifier une liste de ressources sur site pouvant être migrées.
    - B. Construire une connexion VPN entre un appareil sur site et une passerelle privée virtuelle dans le nouveau VPC.
    - C. Utiliser Amazon Athena pour interroger les données des serveurs de bases de données sur site.
    - D. Connecter le centre de données sur site de l'entreprise à AWS en utilisant AWS Direct Connect.
    - E. Tirer parti d'Amazon CloudFront pour restreindre l'accès au contenu web statique fourni par les serveurs web sur site de l'entreprise.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Construire une connexion VPN entre un appareil sur site et une passerelle privée virtuelle dans le nouveau VPC** : VPN Site-to-Site pour une connexion sécurisée via Internet.
      - **D. Connecter le centre de données sur site de l'entreprise à AWS en utilisant AWS Direct Connect** : Connexion réseau dédiée pour des performances plus élevées et une latence plus faible.
    - **Autres options incorrectes** ❌ :
      - **A. Utiliser AWS Service Catalog** : Service pour créer et gérer des catalogues de services informatiques, pas pour identifier les ressources à migrer.
      - **C. Utiliser Amazon Athena** : Service de requête interactive de données sur S3, pas pour interroger des bases de données sur site directement.
      - **E. Tirer parti d'Amazon CloudFront** : CDN pour la diffusion de contenu, pas pour connecter des ressources sur site à un VPC.
    </details>

19. Un praticien du cloud doit déterminer si des groupes de sécurité dans un compte AWS ont été provisionnés pour autoriser un accès non restreint pour des ports spécifiques. Quelle est la façon la PLUS SIMPLE de le faire ?
    - A. Examiner les règles entrantes de chaque groupe de sécurité dans la console de gestion Amazon EC2 pour vérifier le port 0.0.0.0/0.
    - B. Exécuter AWS Trusted Advisor et examiner les résultats.
    - C. Ouvrir la console AWS IAM et vérifier les filtres de règles entrantes pour l'accès ouvert.
    - D. Dans AWS Config, créer une règle personnalisée qui invoque une fonction AWS Lambda pour examiner les règles de pare-feu pour l'accès entrant.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Exécuter AWS Trusted Advisor et examiner les résultats** : Trusted Advisor dispose d'une vérification de sécurité qui identifie les groupes de sécurité avec des règles trop permissives (par exemple, 0.0.0.0/0).
    - **Autres options incorrectes** ❌ :
      - **A. Examiner les règles entrantes de chaque groupe de sécurité** : Manuelle et fastidieuse si nombreux groupes.
      - **C. Ouvrir la console AWS IAM** : IAM ne gère pas les groupes de sécurité.
      - **D. Dans AWS Config, créer une règle personnalisée** : Possible mais plus complexe que d'utiliser Trusted Advisor.
    </details>

20. Lesquels des services liés à la sécurité suivants AWS propose-t-il ? (Choisissez DEUX)
    - A. Jetons physiques d'authentification multi-facteurs.
    - B. Vérifications de sécurité AWS Trusted Advisor.
    - C. Chiffrement des données.
    - D. Tests d'intrusion automatisés.
    - E. Détection de contenu protégé par le droit d'auteur sur Amazon S3.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Vérifications de sécurité AWS Trusted Advisor** : Trusted Advisor fournit des recommandations de sécurité.
      - **C. Chiffrement des données** : AWS propose des services de chiffrement (par exemple, AWS KMS, S3 SSE) et des outils pour chiffrer les données.
    - **Autres options incorrectes** ❌ :
      - **A. Jetons physiques d'authentification multi-facteurs** : AWS propose MFA virtuel (application) et matériel, mais pas spécifiquement des jetons physiques comme service.
      - **D. Tests d'intrusion automatisés** : AWS n'effectue pas de tests d'intrusion automatisés pour les clients. Les clients peuvent effectuer leurs propres tests (avec autorisation).
      - **E. Détection de contenu protégé par le droit d'auteur sur Amazon S3** : Ce n'est pas un service AWS natif. Des services tiers ou Amazon Rekognition peuvent être utilisés.
    </details>

21. Lesquels des services suivants ont des fonctionnalités d'atténuation des attaques par déni de service distribué (DDoS) ? (Choisissez DEUX)
    - A. AWS WAF.
    - B. Amazon DynamoDB.
    - C. Amazon EC2.
    - D. Amazon CloudFront.
    - E. Amazon Inspector.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS WAF** : Peut atténuer les attaques DDoS de couche 7 (application) en bloquant les requêtes malveillantes.
      - **D. Amazon CloudFront** : Distribue le trafic et peut absorber certaines attaques DDoS grâce à sa grande capacité et à son intégration avec AWS Shield.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon DynamoDB** : Base de données managée, n'a pas de fonctionnalités d'atténuation DDoS spécifiques (bien qu'elle soit scalable).
      - **C. Amazon EC2** : Les instances EC2 elles-mêmes ne fournissent pas d'atténuation DDoS ; il faut utiliser AWS Shield, WAF, etc.
      - **E. Amazon Inspector** : Évaluation de sécurité, pas d'atténuation DDoS.
    </details>

22. Laquelle des fonctionnalités AWS suivantes permet à un utilisateur de lancer une instance Amazon Elastic Compute Cloud (Amazon EC2) préconfigurée ?
    - A. Amazon Elastic Block Store (Amazon EBS).
    - B. Amazon Machine Image.
    - C. Amazon EC2 Systems Manager.
    - D. Amazon AppStream 2.0.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon Machine Image** : Une AMI est un modèle qui contient la configuration logicielle nécessaire pour lancer une instance.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Elastic Block Store (Amazon EBS)** : Stockage par blocs pour EC2.
      - **C. Amazon EC2 Systems Manager** : Service de gestion des ressources EC2.
      - **D. Amazon AppStream 2.0** : Service de streaming d'applications de bureau.
    </details>

23. Une solution capable de supporter la croissance des utilisateurs, du trafic ou de la taille des données sans baisse de performance correspond à quel principe d'architecture cloud ?
    - A. Penser parallèle.
    - B. Mettre en œuvre l'élasticité.
    - C. Découpler vos composants.
    - D. Concevoir pour l'échec.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Mettre en œuvre l'élasticité** : L'élasticité est la capacité d'un système à s'adapter à la charge en ajoutant ou supprimant des ressources automatiquement.
    - **Autres options incorrectes** ❌ :
      - **A. Penser parallèle** : Technique pour améliorer les performances en traitant les tâches en parallèle.
      - **C. Découpler vos composants** : Réduit les interdépendances pour améliorer la résilience.
      - **D. Concevoir pour l'échec** : Prépare le système à gérer les défaillances.
    </details>

24. Quel avantage du cloud AWS élimine le besoin pour les utilisateurs d'estimer l'utilisation future de l'infrastructure ?
    - A. Déploiement facile et rapide d'applications dans plusieurs régions du monde.
    - B. Sécurité du cloud AWS.
    - C. Élasticité du cloud AWS.
    - D. Coûts variables inférieurs grâce aux économies d'échelle massives.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Élasticité du cloud AWS** : L'élasticité permet de provisionner des ressources à la demande, éliminant ainsi le besoin de prévision précise de la capacité.
    - **Autres options incorrectes** ❌ :
      - **A. Déploiement facile et rapide d'applications dans plusieurs régions** : Avantage de la portée mondiale, mais n'élimine pas l'estimation de capacité.
      - **B. Sécurité du cloud AWS** : Important, mais pas directement lié à l'estimation de capacité.
      - **D. Coûts variables inférieurs** : Économies d'échelle, mais n'élimine pas l'estimation.
    </details>

25. Que peuvent consulter les utilisateurs sur AWS Artifact ?
    - A. Documents de sécurité et de conformité AWS.
    - B. Un téléchargement des détails de gestion de configuration pour toutes les ressources AWS.
    - C. Matériel de formation pour les services AWS.
    - D. Une évaluation de sécurité des applications déployées dans le cloud AWS.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Documents de sécurité et de conformité AWS** : AWS Artifact fournit l'accès aux rapports de conformité (SOC, PCI, ISO, etc.) et aux accords (BAA).
    - **Autres options incorrectes** ❌ :
      - **B. Un téléchargement des détails de gestion de configuration** : C'est le rôle d'AWS Config.
      - **C. Matériel de formation** : Disponible via AWS Training.
      - **D. Une évaluation de sécurité des applications** : C'est le rôle d'Amazon Inspector ou d'AWS Security Hub.
    </details>

26. Par rapport aux coûts dans les centres de données traditionnels et virtualisés, AWS a :
    - A. Des coûts variables plus élevés et des coûts initiaux plus élevés.
    - B. Des coûts d'utilisation fixes et des coûts initiaux inférieurs.
    - C. Des coûts variables inférieurs et des coûts initiaux plus élevés.
    - D. Des coûts variables inférieurs et des coûts initiaux inférieurs.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Des coûts variables inférieurs et des coûts initiaux inférieurs** : Le cloud AWS élimine les coûts initiaux élevés (CapEx) et offre des coûts variables (OpEx) inférieurs grâce aux économies d'échelle.
    - **Autres options incorrectes** ❌ :
      - **A. Des coûts variables plus élevés et des coûts initiaux plus élevés** : C'est l'inverse.
      - **B. Des coûts d'utilisation fixes et des coûts initiaux inférieurs** : Les coûts d'utilisation sont variables, pas fixes.
      - **C. Des coûts variables inférieurs et des coûts initiaux plus élevés** : Les coûts initiaux sont inférieurs (pas d'investissement matériel).
    </details>

27. Quel service AWS un client utiliserait-il avec un site web statique pour obtenir une latence plus faible et des vitesses de transfert élevées ?
    - A. AWS Lambda.
    - B. Amazon DynamoDB Accelerator.
    - C. Amazon Route 53.
    - D. Amazon CloudFront.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon CloudFront** : CDN qui diffuse le contenu statique depuis des emplacements périphériques, réduisant la latence et améliorant les vitesses de transfert.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Lambda** : Calcul sans serveur, pas pour l'hébergement de sites statiques.
      - **B. Amazon DynamoDB Accelerator** : Cache en mémoire pour DynamoDB.
      - **C. Amazon Route 53** : Service DNS, ne réduit pas directement la latence de transfert.
    </details>

28. Comment les groupes Auto Scaling Amazon EC2 aident-ils à atteindre une haute disponibilité pour une application web ?
    - A. Ils ajoutent automatiquement plus d'instances sur plusieurs régions AWS en fonction de la demande mondiale de l'application.
    - B. Ils ajoutent ou remplacent automatiquement des instances sur plusieurs zones de disponibilité lorsque l'application en a besoin.
    - C. Ils permettent au contenu statique de l'application de résider plus près des utilisateurs finaux.
    - D. Ils sont capables de distribuer les requêtes entrantes sur un niveau d'instances de serveur web.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Ils ajoutent ou remplacent automatiquement des instances sur plusieurs zones de disponibilité lorsque l'application en a besoin** : Auto Scaling assure que le nombre d'instances est maintenu et peut remplacer les instances défaillantes, améliorant la disponibilité.
    - **Autres options incorrectes** ❌ :
      - **A. Ils ajoutent automatiquement plus d'instances sur plusieurs régions AWS** : Auto Scaling fonctionne au niveau de la région, pas multi-régions automatiquement.
      - **C. Ils permettent au contenu statique de l'application de résider plus près des utilisateurs finaux** : C'est le rôle de CloudFront.
      - **D. Ils sont capables de distribuer les requêtes entrantes sur un niveau d'instances de serveur web** : C'est le rôle de l'Elastic Load Balancer.
    </details>

29. Lequel des éléments suivants peut limiter l'accès à un compartiment Amazon Simple Storage Service (Amazon S3) à des utilisateurs spécifiques ?
    - A. Une paire de clés publique et privée.
    - B. Amazon Inspector.
    - C. Politiques AWS Identity and Access Management (IAM).
    - D. Groupes de sécurité.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Politiques AWS Identity and Access Management (IAM)** : Les politiques IAM peuvent accorder ou refuser des autorisations sur des compartiments S3 spécifiques à des utilisateurs, groupes ou rôles.
    - **Autres options incorrectes** ❌ :
      - **A. Une paire de clés publique et privée** : Utilisée pour le chiffrement ou l'authentification SSH, pas pour contrôler l'accès S3.
      - **B. Amazon Inspector** : Évaluation de sécurité, pas de contrôle d'accès.
      - **D. Groupes de sécurité** : Pour le trafic réseau des instances EC2, pas pour S3.
    </details>

30. Comment un client peut-il prévoir les coûts futurs pour l'exécution d'une nouvelle application web ?
    - A. Amazon Aurora Backtrack.
    - B. Amazon CloudWatch Billing Alarms.
    - C. AWS Simple Monthly Calculator.
    - D. AWS Cost and Usage report.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Simple Monthly Calculator** (maintenant AWS Pricing Calculator) : Outil pour estimer les coûts mensuels basés sur l'architecture planifiée.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Aurora Backtrack** : Fonctionnalité de restauration ponctuelle pour Aurora, pas pour l'estimation des coûts.
      - **B. Amazon CloudWatch Billing Alarms** : Alertes de facturation, pas d'estimation.
      - **D. AWS Cost and Usage report** : Rapport détaillé des coûts passés, pas pour la prévision future.
    </details>

31. Où se trouvent les documents de conformité AWS, tels qu'un rapport SOC 1 ?
    - A. Amazon Inspector.
    - B. AWS CloudTrail.
    - C. AWS Artifact.
    - D. AWS Certificate Manager.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Artifact** : Portail central pour accéder aux rapports de conformité AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Inspector** : Évaluation de sécurité.
      - **B. AWS CloudTrail** : Journalisation des API.
      - **D. AWS Certificate Manager** : Gestion des certificats SSL/TLS.
    </details>

32. Lequel des éléments suivants est de la responsabilité d'AWS ?
    - A. Chiffrement des données côté client.
    - B. Configuration des rôles AWS Identity and Access Management (IAM).
    - C. Sécurisation de l'hyperviseur Amazon EC2.
    - D. Définition des politiques de mot de passe utilisateur.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Sécurisation de l'hyperviseur Amazon EC2** : AWS est responsable de la sécurité de l'infrastructure sous-jacente, y compris l'hyperviseur.
    - **Autres options incorrectes** ❌ :
      - **A. Chiffrement des données côté client** : Responsabilité du client.
      - **B. Configuration des rôles AWS IAM** : Responsabilité du client.
      - **D. Définition des politiques de mot de passe utilisateur** : Responsabilité du client.
    </details>

33. Selon le modèle de responsabilité partagée, lesquels des domaines suivants sont de la responsabilité du client ? (Choisissez DEUX)
    - A. Mises à niveau du microprogramme de l'infrastructure réseau.
    - B. Application de correctifs aux systèmes d'exploitation.
    - C. Application de correctifs à l'hyperviseur sous-jacent.
    - D. Sécurité physique des centres de données.
    - E. Configuration du groupe de sécurité.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Application de correctifs aux systèmes d'exploitation** : Pour les instances EC2, le client est responsable des correctifs du système d'exploitation invité.
      - **E. Configuration du groupe de sécurité** : Le client configure les règles des groupes de sécurité.
    - **Autres options incorrectes** ❌ :
      - **A. Mises à niveau du microprogramme de l'infrastructure réseau** : AWS est responsable.
      - **C. Application de correctifs à l'hyperviseur sous-jacent** : AWS est responsable.
      - **D. Sécurité physique des centres de données** : AWS est responsable.
    </details>

34. Une entreprise recherche une solution d'entrepôt de données évolutive. Laquelle des solutions AWS suivantes répondrait aux besoins de l'entreprise ?
    - A. Amazon Simple Storage Service (Amazon S3).
    - B. Amazon DynamoDB.
    - C. Amazon Kinesis.
    - D. Amazon Redshift.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon Redshift** : Entrepôt de données petaoctet-scale entièrement géré.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Simple Storage Service (Amazon S3)** : Stockage d'objets, peut être utilisé avec des services d'analyse mais n'est pas un entrepôt de données.
      - **B. Amazon DynamoDB** : Base de données NoSQL, pas un entrepôt de données.
      - **C. Amazon Kinesis** : Service d'analyse de flux en temps réel.
    </details>

35. Quels services AWS fournissent un moyen d'étendre une architecture sur site au cloud AWS ? (Choisissez DEUX)
    - A. Amazon EBS.
    - B. AWS Direct Connect.
    - C. Amazon CloudFront.
    - D. AWS Storage Gateway.
    - E. Amazon Connect.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. AWS Direct Connect** : Connexion réseau dédiée entre le centre de données sur site et AWS.
      - **D. AWS Storage Gateway** : Service de stockage hybride qui connecte les environnements sur site au stockage cloud.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EBS** : Stockage par blocs pour EC2, pas hybride.
      - **C. Amazon CloudFront** : CDN, pas pour l'extension hybride.
      - **E. Amazon Connect** : Centre de contact cloud, pas hybride.
    </details>

36. Quels sont les avantages du cloud AWS ? (Choisissez DEUX)
    - A. Coût mensuel fixe.
    - B. Pas besoin de deviner les exigences de capacité.
    - C. Vitesse de mise sur le marché accrue.
    - D. Dépenses en capital initiales accrues.
    - E. Accès physique aux centres de données cloud.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Pas besoin de deviner les exigences de capacité** : L'élasticité permet d'ajuster la capacité à la demande.
      - **C. Vitesse de mise sur le marché accrue** : Le cloud permet un déploiement rapide des ressources et des applications.
    - **Autres options incorrectes** ❌ :
      - **A. Coût mensuel fixe** : Les coûts sont variables (sauf pour les engagements).
      - **D. Dépenses en capital initiales accrues** : C'est l'inverse ; le cloud réduit les CapEx.
      - **E. Accès physique aux centres de données cloud** : Les clients n'ont pas accès aux centres de données AWS.
    </details>

37. Comment le cloud AWS peut-il augmenter la productivité de la main-d'œuvre utilisateur après la migration d'un centre de données sur site ?
    - A. Les utilisateurs n'ont pas à attendre le provisionnement de l'infrastructure.
    - B. L'infrastructure cloud AWS est beaucoup plus rapide que l'infrastructure d'un centre de données sur site.
    - C. AWS prend en charge la gestion de la configuration des applications pour le compte des utilisateurs.
    - D. Les utilisateurs n'ont pas besoin de traiter les problèmes de sécurité et de conformité.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Les utilisateurs n'ont pas à attendre le provisionnement de l'infrastructure** : Le cloud permet un provisionnement rapide (en quelques minutes), éliminant les longs délais d'approvisionnement.
    - **Autres options incorrectes** ❌ :
      - **B. L'infrastructure cloud AWS est beaucoup plus rapide** : La performance dépend de la conception, mais l'avantage principal est l'agilité, pas nécessairement la vitesse brute.
      - **C. AWS prend en charge la gestion de la configuration des applications** : Le client est responsable de la gestion de ses applications.
      - **D. Les utilisateurs n'ont pas besoin de traiter les problèmes de sécurité et de conformité** : La sécurité est une responsabilité partagée ; le client doit toujours s'en occuper.
    </details>

38. Lesquels des services suivants pourraient être utilisés pour déployer une application sur des serveurs exécutés sur site ? (Choisissez DEUX)
    - A. AWS Elastic Beanstalk.
    - B. AWS OpsWorks.
    - C. AWS CodeDeploy.
    - D. AWS Batch.
    - E. AWS X-Ray.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. AWS OpsWorks** : Service de gestion de configuration et de déploiement d'applications qui prend en charge les environnements hybrides.
      - **C. AWS CodeDeploy** : Automatise le déploiement d'applications vers des instances EC2 ou sur site.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Elastic Beanstalk** : Service PaaS pour AWS, pas pour les déploiements sur site.
      - **D. AWS Batch** : Traitement par lots sur AWS.
      - **E. AWS X-Ray** : Traçage distribué pour les applications.
    </details>

39. Qu'est-ce qui est un exemple d'agilité dans le cloud AWS ?
    - A. Accès à plusieurs types d'instances.
    - B. Accès à des services managés.
    - C. Utilisation de la facturation consolidée pour produire une seule facture.
    - D. Temps d'acquisition réduit pour les nouvelles ressources de calcul.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Temps d'acquisition réduit pour les nouvelles ressources de calcul** : L'agilité fait référence à la rapidité avec laquelle on peut provisionner et mettre à l'échelle des ressources.
    - **Autres options incorrectes** ❌ :
      - **A. Accès à plusieurs types d'instances** : Cela concerne le choix, pas spécifiquement l'agilité.
      - **B. Accès à des services managés** : Cela réduit la charge opérationnelle, mais ne définit pas directement l'agilité.
      - **C. Utilisation de la facturation consolidée** : Avantage de gestion financière, pas d'agilité.
    </details>

40. Quel service de sécurité AWS protège les applications des attaques par déni de service distribué avec une détection toujours active et des atténuations automatiques en ligne ?
    - A. Amazon Inspector.
    - B. AWS Web Application Firewall (AWS WAF).
    - C. Elastic Load Balancing (ELB).
    - D. AWS Shield.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Shield** : Service de protection DDoS managé. Shield Standard est inclus pour tous les clients, Shield Advanced offre une détection et une atténuation avancées.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Inspector** : Évaluation de sécurité automatisée.
      - **B. AWS Web Application Firewall (AWS WAF)** : Protège contre les exploits web, mais n'est pas spécifiquement un service DDoS (bien qu'il puisse aider).
      - **C. Elastic Load Balancing (ELB)** : Répartit le trafic, mais n'a pas de fonctionnalités de protection DDoS intégrées (bien qu'il puisse être utilisé avec Shield).
    </details>

41. Quels sont les avantages de la facturation consolidée AWS ? (Choisissez deux)
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
      - **A. La possibilité de recevoir une seule facture pour plusieurs comptes** : La facturation consolidée regroupe les frais de tous les comptes membres.
      - **D. Des remises volume potentielles, car l'utilisation de tous les comptes est combinée** : L'utilisation agrégée peut atteindre des seuils de volume plus élevés, permettant des remises.
    - **Autres options incorrectes** ❌ :
      - **B. L'augmentation par défaut des limites de service dans tous les comptes** : Les limites de service ne sont pas augmentées automatiquement.
      - **C. Une remise fixe sur la facture mensuelle** : Il n'y a pas de remise fixe ; les remises dépendent de l'utilisation.
      - **E. L'extension automatique du plan de support AWS du compte maître à tous les comptes** : Les plans de support sont par compte.
    </details>

42. Une entreprise envisage d'utiliser AWS pour une base de données auto-hébergée qui nécessite un arrêt nocturne pour maintenance et économie de coûts. Quel service l'entreprise doit-elle utiliser ?
    - A. Amazon Redshift.
    - B. Amazon DynamoDB.
    - C. Amazon Elastic Compute Cloud (Amazon EC2) avec le stockage d'instance Amazon EC2.
    - D. Amazon EC2 avec Amazon Elastic Block Store (Amazon EBS).

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon EC2 avec Amazon Elastic Block Store (Amazon EBS)** : Permet d'arrêter l'instance EC2 (arrêt de la facturation du calcul) tout en conservant les données sur le volume EBS persistant. Redémarrage ultérieur possible.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Redshift** : Entrepôt de données managé ; l'arrêt/redémarrage est possible mais plus complexe et pas aussi flexible que EC2.
      - **B. Amazon DynamoDB** : Base de données NoSQL entièrement managée ; pas d'arrêt pour économie de coûts (vous payez pour le stockage et la capacité provisionnée).
      - **C. Amazon EC2 avec le stockage d'instance Amazon EC2** : Le stockage d'instance est éphémère ; les données seraient perdues à l'arrêt.
    </details>