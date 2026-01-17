---
layout: exam
---

# Examen de pratique 16

1. Qu'est-ce qui aidera une entreprise à réaliser une analyse coûts-avantages de la migration vers le cloud AWS ?
    - A. Cost Explorer
    - B. AWS Total Cost of Ownership (TCO) Calculator
    - C. AWS Simple Monthly Calculator
    - D. AWS Trusted Advisor

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Total Cost of Ownership (TCO) Calculator** : Cet outil permet d'estimer les économies de coûts lors de l'utilisation d'AWS et fournit des rapports détaillés pouvant être utilisés dans des présentations exécutives. Il offre également la possibilité de modifier les hypothèses pour mieux répondre aux besoins métier.
    - **Autres options incorrectes** ❌ :
      - **A. Cost Explorer** : Outil de visualisation et d'analyse des coûts AWS, mais pas spécifiquement conçu pour l'analyse coûts-avantages de migration.
      - **C. AWS Simple Monthly Calculator** : Permet d'estimer les coûts mensuels AWS, mais pas de comparer avec les coûts sur site.
      - **D. AWS Trusted Advisor** : Fournit des recommandations d'optimisation (coûts, performances, sécurité, etc.), mais ne compare pas les coûts sur site et cloud.
    </details>

2. Lequel des éléments suivants permet de partager les avantages de coût des instances réservées entre plusieurs comptes AWS ?
    - A. AWS Cost Explorer entre les comptes AWS
    - B. Comptes liés et facturation consolidée
    - C. Amazon Elastic Compute Cloud (Amazon EC2) Reserved Instance Utilization Report
    - D. Amazon EC2 Instance Usage Report entre les comptes AWS

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Comptes liés et facturation consolidée** : Avec la facturation consolidée via AWS Organizations, les remises des instances réservées sont partagées entre tous les comptes membres de l'organisation (par défaut). La réservation de capacité s'applique uniquement au compte ayant acheté l'instance réservée.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Cost Explorer entre les comptes AWS** : Permet d'analyser les coûts mais ne partage pas les avantages des instances réservées.
      - **C. Amazon EC2 Reserved Instance Utilization Report** : Rapport sur l'utilisation des instances réservées, pas de partage entre comptes.
      - **D. Amazon EC2 Instance Usage Report entre les comptes AWS** : Rapport d'utilisation des instances, pas de partage des remises.
    </details>

3. Une entreprise a plusieurs comptes AWS et souhaite simplifier et consolider son processus de facturation. <br/>Quel service AWS permettra d'atteindre cet objectif ?
    - A. AWS Cost and Usage Reports
    - B. AWS Organizations
    - C. AWS Cost Explorer
    - D. AWS Budgets

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Organizations** : Ce service permet d'utiliser la fonctionnalité de facturation consolidée pour regrouper la facturation et le paiement de plusieurs comptes AWS. L'organisation a un compte maître (payeur) qui paie les frais de tous les comptes membres.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Cost and Usage Reports** : Fournit des rapports détaillés sur les coûts et l'utilisation, mais ne consolide pas la facturation.
      - **C. AWS Cost Explorer** : Outil de visualisation des coûts, pas de consolidation.
      - **D. AWS Budgets** : Permet de définir des budgets et des alertes, pas de consolider la facturation.
    </details>

4. Une entreprise conçoit une application hébergée dans une seule région AWS desservant des utilisateurs finaux répartis dans le monde entier. L'entreprise souhaite fournir aux utilisateurs finaux un accès à faible latence aux données de l'application. <br/> Lequel des services suivants aidera à répondre à cette exigence ?
    - A. Amazon CloudFront
    - B. AWS Direct Connect
    - C. Amazon Route 53 global DNS
    - D. Amazon Simple Storage Service (Amazon S3) transfer acceleration

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon CloudFront** : C'est un réseau de diffusion de contenu (CDN) qui distribue les données à partir de plusieurs emplacements dans le monde, fournissant un accès à faible latence aux utilisateurs finaux.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Direct Connect** : Connexion réseau dédiée entre le centre de données sur site et AWS, pas pour réduire la latence mondiale.
      - **C. Amazon Route 53 global DNS** : Service DNS mondial, mais ne réduit pas directement la latence des données d'application.
      - **D. Amazon S3 transfer acceleration** : Accélère les transferts vers S3, pas la diffusion d'applications.
    </details>

5. Lequel des modèles de déploiement suivants permet aux clients d'échanger entièrement leurs dépenses d'investissement informatique contre des dépenses opérationnelles ?
    - A. Sur site (On-premises)
    - B. Hybride
    - C. Cloud
    - D. Platform as a service

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Cloud** : Le cloud permet d'échanger des dépenses en capital (comme les centres de données et les serveurs physiques) contre des dépenses variables, et de ne payer l'informatique que lorsque vous la consommez. De plus, les dépenses variables sont beaucoup plus faibles grâce aux économies d'échelle.
    - **Autres options incorrectes** ❌ :
      - **A. Sur site** : Implique des investissements initiaux élevés en matériel et infrastructure.
      - **B. Hybride** : Combine cloud et sur site, donc pas un échange complet.
      - **D. Platform as a service** : C'est un modèle de cloud, mais la question porte sur le modèle de déploiement général (cloud vs sur site).
    </details>

6. En quoi la gestion des actifs sur AWS est-elle plus facile que dans un centre de données physique ?
    - A. AWS fournit une base de données de gestion de configuration que les utilisateurs peuvent maintenir.
    - B. AWS effectue des scans de découverte d'infrastructure pour le compte du client.
    - C. Amazon EC2 génère automatiquement un rapport d'actifs et le place dans le compartiment Amazon S3 spécifié par le client.
    - D. Les utilisateurs peuvent collecter des métadonnées d'actifs de manière fiable avec quelques appels d'API.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS effectue des scans de découverte d'infrastructure pour le compte du client** : Les actifs AWS sont gérés de manière centralisée via un système de gestion d'inventaire qui stocke et suit les informations propriétaire, emplacement, état, maintenance, etc. Après l'acquisition, les actifs sont scannés et suivis.
    - **Autres options incorrectes** ❌ :
      - **A. AWS fournit une base de données de gestion de configuration** : AWS Config existe, mais ce n'est pas la raison principale de la facilité de gestion des actifs.
      - **C. Amazon EC2 génère automatiquement un rapport d'actifs** : Non, cela n'existe pas en standard.
      - **D. Les utilisateurs peuvent collecter des métadonnées d'actifs avec quelques appels d'API** : Possible, mais pas la raison principale.
    </details>

7. Quelle fonctionnalité d'Amazon RDS aide à créer des bases de données globalement redondantes ?
    - A. Snapshots
    - B. Mise à jour corrective et mise à jour automatique
    - C. Réplicas de lecture inter-régions
    - D. IOPS provisionnés

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Réplicas de lecture inter-régions** : Permet de créer des réplicas de lecture dans différentes régions AWS pour la redondance géographique et la récupération d'urgence.
    - **Autres options incorrectes** ❌ :
      - **A. Snapshots** : Sauvegardes ponctuelles, pas de redondance globale.
      - **B. Mise à jour corrective et mise à jour automatique** : Maintenance, pas de redondance géographique.
      - **D. IOPS provisionnés** : Type de stockage pour des performances prévisibles, pas de redondance globale.
    </details>

8. Utiliser AWS Identity and Access Management (IAM) pour accorder l'accès uniquement aux ressources nécessaires pour effectuer une tâche est un concept connu sous le nom de :
    - A. accès restreint.
    - B. accès selon les besoins.
    - C. principe du moindre privilège.
    - D. accès par jeton.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. principe du moindre privilège** : Lorsque vous créez des politiques IAM, suivez le conseil de sécurité standard d'accorder le moindre privilège, c'est-à-dire d'accorder uniquement les autorisations nécessaires pour effectuer une tâche.
    - **Autres options incorrectes** ❌ :
      - **A. accès restreint** : Terme générique, pas le terme standard.
      - **B. accès selon les besoins** : Similaire, mais pas le terme officiel.
      - **D. accès par jeton** : Méthode d'authentification, pas un principe d'autorisation.
    </details>

9. Quelles méthodes peuvent être utilisées pour identifier les coûts AWS par département ? (Choisissez deux.)
    - A. Activer l'authentification multi-facteurs pour l'utilisateur racine du compte AWS.
    - B. Créer des comptes séparés pour chaque département.
    - C. Utiliser des instances réservées chaque fois que possible.
    - D. Utiliser des étiquettes (tags) pour associer chaque instance à un département particulier.
    - E. Payer les factures à l'aide de bons de commande.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B, D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. Créer des comptes séparés pour chaque département** : Chaque compte aura sa propre facturation.
      - **D. Utiliser des étiquettes (tags) pour associer chaque instance à un département particulier** : Les étiquettes sont des paires clé-valeur qui permettent d'organiser les ressources AWS en groupes. Vous pouvez les utiliser pour visualiser les coûts par département via Cost Explorer et les rapports de coûts.
    - **Autres options incorrectes** ❌ :
      - **A. Activer l'authentification multi-facteurs** : Améliore la sécurité, pas la gestion des coûts.
      - **C. Utiliser des instances réservées** : Réduit les coûts mais n'aide pas à les identifier par département.
      - **E. Payer les factures à l'aide de bons de commande** : Méthode de paiement, pas d'identification des coûts.
    </details>

10. Selon le modèle de responsabilité partagée d'AWS, les responsabilités du client incluent laquelle des suivantes ?
    - A. Sécuriser le matériel, les logiciels, les installations et les réseaux qui exécutent tous les produits et services.
    - B. Fournir des certificats, rapports et autres documents directement aux clients AWS sous NDA.
    - C. Configurer le système d'exploitation, le réseau et le pare-feu.
    - D. Obtenir des certifications sectorielles et des attestations de tierces parties indépendantes.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Configurer le système d'exploitation, le réseau et le pare-feu** : Le client est responsable de la sécurité *dans* le cloud, y compris la configuration du système d'exploitation invité, des groupes de sécurité, des pare-feux, etc.
    - **Autres options incorrectes** ❌ :
      - **A. Sécuriser le matériel, les logiciels, les installations et les réseaux** : C'est la responsabilité d'AWS (sécurité *du* cloud).
      - **B. Fournir des certificats, rapports** : AWS fournit des rapports de conformité via AWS Artifact.
      - **D. Obtenir des certifications sectorielles** : AWS obtient des certifications pour son infrastructure, mais le client doit assurer la conformité de ses applications.
    </details>

11. Quel service AWS managé fournit des conseils en temps réel sur les meilleures pratiques de sécurité AWS ?
    - A. AWS X-Ray
    - B. AWS Trusted Advisor
    - C. Amazon CloudWatch
    - D. AWS Systems Manager

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Trusted Advisor** : Service qui fournit des conseils en temps réel pour réduire les coûts, augmenter les performances et améliorer la sécurité.
    - **Autres options incorrectes** ❌ :
      - **A. AWS X-Ray** : Service de traçage distribué pour les applications.
      - **C. Amazon CloudWatch** : Service de surveillance des performances et des ressources.
      - **D. AWS Systems Manager** : Service de gestion des ressources AWS et hybrides.
    </details>

12. Quelle fonctionnalité AWS ajoute de l'élasticité aux instances Amazon EC2 pour gérer la demande changeante des charges de travail ?
    - A. Groupes de ressources
    - B. Politiques de cycle de vie
    - C. Application Load Balancer
    - D. Amazon EC2 Auto Scaling

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon EC2 Auto Scaling** : Permet de surveiller les applications et d'ajuster automatiquement la capacité pour maintenir des performances stables et prévisibles au coût le plus bas. Il peut être associé à un équilibreur de charge pour répartir le trafic.
    - **Autres options incorrectes** ❌ :
      - **A. Groupes de ressources** : Permettent de grouper des ressources, mais n'ajustent pas la capacité.
      - **B. Politiques de cycle de vie** : Pour la gestion du cycle de vie des objets S3, pas des instances EC2.
      - **C. Application Load Balancer** : Répartit le trafic, mais ne provisionne pas de nouvelles instances.
    </details>

13. Selon le modèle de responsabilité partagée d'AWS, les clients sont responsables de quels aspects de la sécurité dans le cloud ? (Choisissez deux.)
    - A. Gestion de la virtualisation
    - B. Gestion du matériel
    - C. Gestion du chiffrement
    - D. Gestion des installations
    - E. Gestion du pare-feu

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C, E
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **C. Gestion du chiffrement** : Le client est responsable du chiffrement des données (côté client et serveur) et de la protection du trafic réseau.
      - **E. Gestion du pare-feu** : Le client configure les groupes de sécurité et les listes de contrôle d'accès réseau (NACL).
    - **Autres options incorrectes** ❌ :
      - **A. Gestion de la virtualisation** : Responsabilité d'AWS (hyperviseur).
      - **B. Gestion du matériel** : Responsabilité d'AWS.
      - **D. Gestion des installations** : Responsabilité d'AWS (centres de données).
    </details>

14. Quel service de stockage hybride AWS permet aux applications sur site d'utiliser de manière transparente le stockage cloud AWS via des protocoles de stockage de fichiers standard ?
    - A. AWS Direct Connect
    - B. AWS Snowball
    - C. AWS Storage Gateway
    - D. AWS Snowball Edge

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Storage Gateway** : Ce service permet un stockage cloud hybride entre les environnements sur site et le cloud AWS. Il intègre de manière transparente les applications d'entreprise sur site avec les services de stockage cloud d'Amazon via des protocoles de stockage standard.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Direct Connect** : Connexion réseau dédiée, pas de stockage.
      - **B. AWS Snowball** : Appareil de transfert de données physique.
      - **D. AWS Snowball Edge** : Appareil de transfert avec capacités de calcul en bordure.
    </details>

15. Quelle est une responsabilité d'AWS dans le modèle de responsabilité partagée ?
    - A. Mettre à jour les listes de contrôle d'accès réseau (NACL) pour bloquer le trafic vers les ports vulnérables.
    - B. Appliquer des correctifs aux systèmes d'exploitation exécutés sur les instances Amazon EC2.
    - C. Mettre à jour le microprogramme des hôtes EC2 sous-jacents.
    - D. Mettre à jour les règles des groupes de sécurité pour bloquer le trafic vers les ports vulnérables.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Mettre à jour le microprogramme des hôtes EC2 sous-jacents** : AWS est responsable de la maintenance du matériel et du microprogramme de l'infrastructure sous-jacente.
    - **Autres options incorrectes** ❌ :
      - **A. Mettre à jour les NACL** : Responsabilité du client.
      - **B. Appliquer des correctifs aux systèmes d'exploitation des instances EC2** : Responsabilité du client (système d'exploitation invité).
      - **D. Mettre à jour les règles des groupes de sécurité** : Responsabilité du client.
    </details>

16. Quel principe architectural est utilisé lors du déploiement d'une instance Amazon Relational Database Service (Amazon RDS) en mode Multi-Availability Zone ?
    - A. Implémenter un couplage lâche.
    - B. Concevoir pour l'échec.
    - C. Automatiser tout ce qui peut être automatisé.
    - D. Utiliser des services, pas des serveurs.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Concevoir pour l'échec** : Les déploiements Multi-AZ d'Amazon RDS fournissent une disponibilité et une durabilité améliorées en répliquant les données de manière synchrone vers une instance de secours dans une autre zone de disponibilité. En cas de défaillance, un basculement automatique est effectué.
    - **Autres options incorrectes** ❌ :
      - **A. Implémenter un couplage lâche** : Principe de conception pour réduire les interdépendances, pas spécifique à la haute disponibilité.
      - **C. Automatiser tout ce qui peut être automatisé** : Bonne pratique, mais pas le principe direct derrière Multi-AZ.
      - **D. Utiliser des services, pas des serveurs** : Approche de gestion, pas de haute disponibilité.
    </details>

17. Que signifie accorder le moindre privilège aux utilisateurs AWS IAM ?
    - A. C'est accorder des autorisations à un seul utilisateur uniquement.
    - B. C'est accorder des autorisations en utilisant uniquement des politiques IAM AWS.
    - C. C'est accorder les autorisations de la politique AdministratorAccess aux utilisateurs de confiance.
    - D. C'est accorder uniquement les autorisations nécessaires pour effectuer une tâche donnée.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. C'est accorder uniquement les autorisations nécessaires pour effectuer une tâche donnée** : Le principe du moindre privilège consiste à accorder uniquement les autorisations requises pour effectuer une tâche spécifique.
    - **Autres options incorrectes** ❌ :
      - **A. C'est accorder des autorisations à un seul utilisateur** : Ce n'est pas la définition.
      - **B. C'est accorder des autorisations en utilisant uniquement des politiques IAM** : Les politiques IAM sont le mécanisme, mais ne définissent pas le principe.
      - **C. C'est accorder les autorisations de la politique AdministratorAccess** : C'est l'opposé du moindre privilège.
    </details>

18. Quel est l'avantage du couplage lâche en tant que principe de conception d'architecture cloud ?
    - A. Il facilite la gestion des requêtes à faible latence.
    - B. Il permet aux applications d'avoir des workflows dépendants.
    - C. Il empêche les défaillances en cascade entre différents composants.
    - D. Il permet aux entreprises de se concentrer sur les opérations de leur centre de données physique.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Il empêche les défaillances en cascade entre différents composants** : Le couplage lâche réduit les interdépendances, de sorte qu'un changement ou une défaillance dans un composant n'affecte pas les autres composants.
    - **Autres options incorrectes** ❌ :
      - **A. Il facilite la gestion des requêtes à faible latence** : Pas directement lié.
      - **B. Il permet aux applications d'avoir des workflows dépendants** : C'est l'inverse du couplage lâche.
      - **D. Il permet aux entreprises de se concentrer sur les opérations de leur centre de données physique** : Non, le couplage lâche est un principe de conception d'application.
    </details>

19. Un directeur a pour mission d'étudier une architecture cloud hybride. L'entreprise accède actuellement à AWS via l'Internet public.<br/>Quel service facilitera une connectivité hybride privée ?
    - A. Amazon Virtual Private Cloud (Amazon VPC) NAT Gateway
    - B. AWS Direct Connect
    - C. Amazon Simple Storage Service (Amazon S3) Transfer Acceleration
    - D. AWS Web Application Firewall (AWS WAF)

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Direct Connect** : Permet d'établir une connexion réseau dédiée entre votre réseau sur site et AWS, offrant une connexion privée à haute bande passante.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon VPC NAT Gateway** : Permet aux instances d'un sous-réseau privé de se connecter à Internet, mais pas de connectivité hybride.
      - **C. Amazon S3 Transfer Acceleration** : Accélère les transferts vers S3, pas de connectivité hybride.
      - **D. AWS WAF** : Pare-feu d'application web, pas de connectivité.
    </details>

20. L'application web d'une entreprise a actuellement des dépendances étroites avec les composants sous-jacents, de sorte que lorsqu'un composant échoue, toute l'application web échoue. <br> Appliquer quel principe de conception cloud AWS résoudra le problème de conception actuel ?
    - A. Mettre en œuvre l'élasticité, permettant à l'application de monter ou descendre en charge en fonction des changements de demande.
    - B. Permettre à plusieurs instances EC2 de fonctionner en parallèle pour obtenir de meilleures performances.
    - C. Se concentrer sur le découplage des composants en les isolant et en veillant à ce que chaque composant puisse fonctionner lorsque d'autres composants échouent.
    - D. Doubler les ressources de calcul EC2 pour augmenter la tolérance aux pannes du système.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Se concentrer sur le découplage des composants** : Le découplage réduit les interdépendances, permettant à chaque composant de fonctionner de manière indépendante et d'éviter les défaillances en cascade.
    - **Autres options incorrectes** ❌ :
      - **A. Mettre en œuvre l'élasticité** : Ajuste la capacité, mais ne résout pas les dépendances étroites.
      - **B. Permettre à plusieurs instances EC2 de fonctionner en parallèle** : Améliore les performances, mais pas la tolérance aux pannes si les composants sont étroitement couplés.
      - **D. Doubler les ressources de calcul EC2** : Surdimensionnement, pas une bonne pratique cloud.
    </details>

21. Comment un client peut-il augmenter la sécurité des connexions au compte AWS ? (Choisissez deux.)
    - A. Configurer AWS Certificate Manager
    - B. Activer l'authentification multi-facteurs (MFA)
    - C. Utiliser Amazon Cognito pour gérer l'accès
    - D. Configurer une politique de mot de passe forte
    - E. Activer AWS Organizations

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B, D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. Activer l'authentification multi-facteurs (MFA)** : Ajoute une deuxième couche de sécurité en exigeant un code d'authentification unique.
      - **D. Configurer une politique de mot de passe forte** : Exige des mots de passe complexes et une rotation régulière.
    - **Autres options incorrectes** ❌ :
      - **A. Configurer AWS Certificate Manager** : Gère les certificats SSL/TLS, pas l'authentification des comptes.
      - **C. Utiliser Amazon Cognito** : Service de gestion des identités utilisateur pour les applications, pas pour les comptes AWS.
      - **E. Activer AWS Organizations** : Pour gérer plusieurs comptes, pas directement la sécurité des connexions.
    </details>

22. Quel service AWS permettrait de gérer centralement l'accès AWS entre plusieurs comptes ?
    - A. AWS Service Catalog
    - B. AWS Config
    - C. AWS Trusted Advisor
    - D. AWS Organizations

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Organizations** : Permet de créer des groupes de comptes et d'attacher des politiques pour appliquer des contrôles d'accès centralisés sur plusieurs comptes.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Service Catalog** : Permet de créer des catalogues de services IT approuvés.
      - **B. AWS Config** : Audite la configuration des ressources.
      - **C. AWS Trusted Advisor** : Fournit des recommandations d'optimisation.
    </details>

23. Quel service AWS un client peut-il utiliser pour configurer une notification d'alerte lorsque le compte approche d'un montant en dollars particulier ?
    - A. AWS Cost and Usage reports
    - B. AWS Budgets
    - C. AWS Cost Explorer
    - D. AWS Trusted Advisor

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Budgets** : Permet de définir des budgets personnalisés et de configurer des alertes lorsque les coûts réels ou prévus dépassent un seuil.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Cost and Usage reports** : Fournit des rapports détaillés, mais pas d'alertes en temps réel.
      - **C. AWS Cost Explorer** : Outil de visualisation des coûts, avec des fonctionnalités de prévision mais pas d'alertes directes.
      - **D. AWS Trusted Advisor** : Recommande des optimisations de coûts, mais ne fournit pas d'alertes de budget.
    </details>

24. À quoi les utilisateurs peuvent-ils accéder via AWS Artifact ?
    - A. Documents de sécurité et de conformité AWS
    - B. Un téléchargement des détails de gestion de configuration pour toutes les ressources AWS
    - C. Matériel de formation pour les services AWS
    - D. Une évaluation de sécurité des applications déployées dans le cloud AWS

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Documents de sécurité et de conformité AWS** : AWS Artifact fournit un accès à la demande aux documents de sécurité et de conformité d'AWS, tels que les certifications ISO, PCI, SOC, etc.
    - **Autres options incorrectes** ❌ :
      - **B. Détails de gestion de configuration** : C'est le rôle d'AWS Config.
      - **C. Matériel de formation** : Disponible via AWS Training and Certification.
      - **D. Évaluation de sécurité des applications** : Services comme Amazon Inspector ou AWS Security Hub.
    </details>

25. Quel est le plan de support AWS MINIMUM qui fournit des Technical Account Managers désignés ?
    - A. Enterprise
    - B. Business
    - C. Developer
    - D. Basic

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Enterprise** : Le plan Enterprise Support inclut un Technical Account Manager (TAM) dédié comme point de contact principal.
    - **Autres options incorrectes** ❌ :
      - **B. Business** : Inclut un accès aux ingénieurs du support cloud, mais pas de TAM dédié.
      - **C. Developer** : Support technique par email pendant les heures de bureau.
      - **D. Basic** : Support gratuit pour les questions de compte et de facturation.
    </details>

26. Lequel des éléments suivants est un principe de conception du cadre AWS Well-Architected lié à la fiabilité ?
    - A. Déploiement dans une seule zone de disponibilité
    - B. Capacité à récupérer après une défaillance
    - C. Conception pour l'optimisation des coûts
    - D. Effectuer les opérations sous forme de code

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Capacité à récupérer après une défaillance** : La fiabilité inclut la capacité d'un système à récupérer après des défaillances et à répondre aux demandes.
    - **Autres options incorrectes** ❌ :
      - **A. Déploiement dans une seule zone de disponibilité** : Réduit la fiabilité.
      - **C. Conception pour l'optimisation des coûts** : Pilier distinct.
      - **D. Effectuer les opérations sous forme de code** : Relève de l'excellence opérationnelle.
    </details>

27. Quel type de stockage AWS est éphémère et est supprimé lorsqu'une instance est arrêtée ou terminée ?
    - A. Amazon EBS
    - B. Amazon EC2 instance store
    - C. Amazon EFS
    - D. Amazon S3

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon EC2 instance store** : Stockage temporaire par bloc directement attaché à l'instance EC2. Les données sont perdues lorsque l'instance est arrêtée ou terminée.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EBS** : Stockage par bloc persistant qui persiste indépendamment de l'instance.
      - **C. Amazon EFS** : Stockage de fichiers élastique et persistant.
      - **D. Amazon S3** : Stockage d'objets persistant.
    </details>

28. Quel est un avantage de l'utilisation du cloud AWS par rapport à une solution sur site traditionnelle ?
    - A. Les utilisateurs n'ont pas à deviner les besoins futurs en capacité.
    - B. Les utilisateurs peuvent utiliser des contrats matériels existants pour les achats.
    - C. Les utilisateurs peuvent fixer les coûts quelle que soit leur charge de trafic.
    - D. Les utilisateurs peuvent éviter les audits en utilisant les rapports d'AWS.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Les utilisateurs n'ont pas à deviner les besoins futurs en capacité** : Avec le cloud, vous pouvez provisionner de la capacité à la demande et ajuster en fonction des besoins réels, éliminant le besoin de prévision à long terme.
    - **Autres options incorrectes** ❌ :
      - **B. Utiliser des contrats matériels existants** : Le cloud réduit le besoin d'achat de matériel.
      - **C. Fixer les coûts quelle que soit la charge de trafic** : Les coûts cloud sont variables et basés sur l'utilisation.
      - **D. Éviter les audits** : Les clients sont toujours responsables des audits de conformité.
    </details>

29. Lequel des services suivants est un service de calcul géré par AWS ?
    - A. Amazon SWF
    - B. Amazon EC2
    - C. AWS Lambda
    - D. Amazon Aurora

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Lambda** : Service de calcul sans serveur entièrement géré où AWS gère l'infrastructure sous-jacente.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon SWF** : Service de workflow, pas de calcul.
      - **B. Amazon EC2** : Service de calcul IaaS où le client gère le système d'exploitation.
      - **D. Amazon Aurora** : Service de base de données relationnelle gérée.
    </details>

30. Lequel des éléments suivants est un principe de conception architectural important lors de la conception d'applications cloud ?
    - A. Stocker les données et les sauvegardes dans la même région.
    - B. Concevoir des composants système étroitement couplés.
    - C. Éviter le multi-threading.
    - D. Concevoir pour l'échec

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Concevoir pour l'échec** : C'est un principe clé du cloud : anticiper les défaillances et concevoir des systèmes résilients.
    - **Autres options incorrectes** ❌ :
      - **A. Stocker les données et les sauvegardes dans la même région** : Risque de perte en cas de sinistre régional. Il est recommandé de sauvegarder dans une autre région.
      - **B. Concevoir des composants étroitement couplés** : C'est une mauvaise pratique ; il faut viser un couplage lâche.
      - **C. Éviter le multi-threading** : Pas un principe de conception cloud.
    </details>

31. Quel mécanisme permet aux développeurs d'accéder aux services AWS à partir du code d'application ?
    - A. AWS Software Development Kit
    - B. AWS Management Console
    - C. AWS CodePipeline
    - D. AWS Config

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Software Development Kit** : Les SDK AWS fournissent des API pour interagir avec les services AWS à partir de code d'application dans divers langages de programmation.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Management Console** : Interface web graphique pour gérer AWS.
      - **C. AWS CodePipeline** : Service de livraison continue.
      - **D. AWS Config** : Service d'audit de configuration.
    </details>

32. Quel modèle de tarification Amazon EC2 est le PLUS économique pour une charge de travail non interrompue qui s'exécute une fois par an pendant 24 heures ?
    - A. Instances à la demande
    - B. Instances réservées
    - C. Instances Spot
    - D. Instances dédiées

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Instances à la demande** : Parfaites pour des charges de travail courtes et imprévisibles. Aucun engagement à long terme, paiement à l'heure ou à la seconde.
    - **Autres options incorrectes** ❌ :
      - **B. Instances réservées** : Pour des charges de travail stables sur 1 ou 3 ans, pas économiques pour une utilisation ponctuelle.
      - **C. Instances Spot** : Peuvent être interrompues, ne conviennent pas à une charge de travail non interrompue.
      - **D. Instances dédiées** : Matériel dédié, plus coûteux.
    </details>

33. Lequel des services suivants est une base de données compatible MySQL qui augmente automatiquement le stockage selon les besoins ?
    - A. Amazon Elastic Compute Cloud (Amazon EC2)
    - B. Amazon Relational Database Service (Amazon RDS) for MySQL
    - C. Amazon Lightsail
    - D. Amazon Aurora

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon Aurora** : Base de données relationnelle compatible MySQL qui augmente automatiquement la taille du volume de stockage jusqu'à 64 To selon les besoins.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EC2** : Service de calcul, pas de base de données.
      - **B. Amazon RDS for MySQL** : Base de données MySQL gérée, mais la croissance automatique du stockage n'est pas aussi transparente qu'Aurora.
      - **C. Amazon Lightsail** : Service cloud simplifié avec des plans prédéfinis.
    </details>

34. Quelle fonctionnalité Amazon Virtual Private Cloud (Amazon VPC) permet aux utilisateurs de connecter deux VPC entre eux ?
    - A. Amazon VPC endpoints
    - B. Amazon Elastic Compute Cloud (Amazon EC2) ClassicLink
    - C. Amazon VPC peering
    - D. AWS Direct Connect

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon VPC peering** : Connexion réseau entre deux VPC permettant de router le trafic via des adresses IP privées. Les instances peuvent communiquer comme si elles étaient sur le même réseau.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon VPC endpoints** : Permet une connectivité privée entre un VPC et des services AWS sans passer par Internet.
      - **B. Amazon EC2 ClassicLink** : Permet de connecter des instances EC2-Classic à un VPC (déprécié).
      - **D. AWS Direct Connect** : Connexion dédiée entre le réseau sur site et AWS.
    </details>

35. Quel service a pour objectif PRINCIPAL le contrôle de version logiciel ?
    - A. Amazon CodeStar
    - B. AWS Command Line Interface (AWS CLI)
    - C. Amazon Cognito
    - D. AWS CodeCommit

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS CodeCommit** : Service de contrôle de version hébergé qui permet de stocker et de gérer des actifs (code source, documents) de manière privée dans le cloud.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon CodeStar** : Service de développement d'applications qui inclut CodeCommit mais n'est pas exclusivement dédié au contrôle de version.
      - **B. AWS CLI** : Interface en ligne de commande pour interagir avec AWS.
      - **C. Amazon Cognito** : Service de gestion des identités utilisateur.
    </details>

36. Une entreprise envisage de migrer ses applications vers AWS. L'entreprise souhaite comparer le coût d'exécution de la charge de travail sur site à l'exécution de la charge de travail équivalente sur la plateforme AWS. <br/>Quel outil peut être utilisé pour effectuer cette comparaison ?
    - A. AWS Simple Monthly Calculator
    - B. AWS Total Cost of Ownership (TCO) Calculator
    - C. AWS Billing and Cost Management console
    - D. Cost Explorer

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Total Cost of Ownership (TCO) Calculator** : Compare le coût d'exécution d'applications dans un environnement sur site ou en colocation à AWS.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Simple Monthly Calculator** : Estime les coûts AWS, mais ne compare pas avec les coûts sur site.
      - **C. AWS Billing and Cost Management console** : Pour gérer la facturation AWS, pas pour les comparaisons.
      - **D. Cost Explorer** : Analyse les coûts AWS, pas les coûts sur site.
    </details>

37. Quel service AWS fournit un moyen sécurisé, rapide et économique de migrer ou de transporter des jeux de données à l'échelle de l'exaoctet vers AWS ?
    - A. AWS Batch
    - B. AWS Snowball
    - C. AWS Migration Hub
    - D. AWS Snowmobile

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Snowmobile** : Service de transfert de données à l'échelle de l'exaoctet (jusqu'à 100 PB par conteneur) pour déplacer de très grandes quantités de données vers AWS de manière sécurisée.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Batch** : Service de traitement par lots, pas de transfert de données.
      - **B. AWS Snowball** : Appareil de transfert de données physique pour des volumes de l'ordre du pétaoctet.
      - **C. AWS Migration Hub** : Pour suivre les migrations d'applications, pas de transfert de données massif.
    </details>

38. Lequel des éléments suivants décrit le mieux le modèle de tarification AWS ? (Choisissez deux.)
    - A. À terme fixe
    - B. Paiement à l'usage
    - C. Colocation
    - D. Planifié
    - E. Coût variable

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B, E
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. Paiement à l'usage** : Vous payez uniquement pour les services que vous utilisez, sans engagement à long terme.
      - **E. Coût variable** : Les coûts varient en fonction de l'utilisation, contrairement aux coûts fixes traditionnels.
    - **Autres options incorrectes** ❌ :
      - **A. À terme fixe** : AWS propose des instances réservées, mais le modèle général est flexible.
      - **C. Colocation** : Modèle d'hébergement physique, pas le modèle cloud d'AWS.
      - **D. Planifié** : Pas un terme utilisé pour décrire le modèle de tarification.
    </details>

39. Quels types d'équilibreurs de charge sont disponibles avec Elastic Load Balancing (ELB) ? (Choisissez deux.)
    - A. Équilibreurs de charge publics avec capacités de mise à l'échelle automatique AWS Application Auto Scaling
    - B. Équilibreurs de charge F5 Big-IP et Citrix NetScaler
    - C. Classic Load Balancers
    - D. Équilibreurs de charge cross-zone avec IPs publiques et privées
    - E. Application Load Balancers

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C, E
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **C. Classic Load Balancers** : Ancienne génération, fonctionne au niveau de la couche 4 (TCP/SSL) et de la couche 7 (HTTP/HTTPS).
      - **E. Application Load Balancers** : Nouvelle génération, fonctionne au niveau de la couche 7 (HTTP/HTTPS) avec des fonctionnalités avancées.
    - **Autres options incorrectes** ❌ :
      - **A. Équilibreurs de charge publics avec capacités de mise à l'échelle automatique** : Les ELB peuvent être intégrés à Auto Scaling, mais ce n'est pas un type distinct.
      - **B. F5 Big-IP et Citrix NetScaler** : Solutions tierces, pas des services ELB natifs AWS.
      - **D. Équilibreurs de charge cross-zone avec IPs publiques et privées** : Cross-zone load balancing est une fonctionnalité, pas un type.
    </details>

40. Pourquoi une entreprise devrait-elle choisir AWS plutôt qu'un centre de données traditionnel ?
    - A. AWS fournit aux utilisateurs un contrôle total sur les ressources sous-jacentes.
    - B. AWS ne nécessite pas de contrats à long terme et fournit un modèle de paiement à l'usage.
    - C. AWS offre des emplacements périphériques dans chaque pays, supportant une portée mondiale.
    - D. AWS n'a pas de limites sur le nombre de ressources qui peuvent être créées.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS ne nécessite pas de contrats à long terme et fournit un modèle de paiement à l'usage** : C'est un avantage clé du cloud : pas d'engagement à long terme, paiement uniquement pour ce que vous utilisez.
    - **Autres options incorrectes** ❌ :
      - **A. Contrôle total sur les ressources sous-jacentes** : AWS gère l'infrastructure sous-jacente, le client a un contrôle limité.
      - **C. Emplacements périphériques dans chaque pays** : AWS a de nombreux emplacements périphériques, mais pas dans chaque pays.
      - **D. Pas de limites sur le nombre de ressources** : AWS a des limites de service par défaut (qui peuvent être augmentées sur demande).
    </details>

41. Quelle solution fournit les temps de réponse d'application les PLUS RAPIDES pour les données fréquemment consultées par des utilisateurs dans plusieurs régions AWS ?
    - A. AWS CloudTrail sur plusieurs zones de disponibilité
    - B. Amazon CloudFront vers les emplacements périphériques
    - C. AWS CloudFormation dans plusieurs régions
    - D. Une passerelle privée virtuelle via AWS Direct Connect

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon CloudFront vers les emplacements périphériques** : CloudFront, en tant que CDN, met en cache le contenu dans des emplacements périphériques proches des utilisateurs finaux, réduisant la latence et accélérant les temps de réponse.
    - **Autres options incorrectes** ❌ :
      - **A. AWS CloudTrail** : Service de journalisation d'API, pas de performance.
      - **C. AWS CloudFormation** : Service d'infrastructure as code, pas de performance.
      - **D. Passerelle privée virtuelle via AWS Direct Connect** : Connexion dédiée, mais ne réduit pas la latence pour les utilisateurs mondiaux comme un CDN.
    </details>

42. Quel service AWS fournit un portail en libre-service pour l'accès à la demande aux rapports de conformité AWS ?
    - A. AWS Config
    - B. AWS Certificate Manager
    - C. Amazon Inspector
    - D. AWS Artifact

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Artifact** : Portail centralisé pour accéder aux rapports de sécurité et de conformité AWS (SOC, PCI, etc.) et à certains accords en ligne.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Config** : Service d'audit de configuration.
      - **B. AWS Certificate Manager** : Gère les certificats SSL/TLS.
      - **C. Amazon Inspector** : Évaluation de sécurité automatisée pour les applications.
    </details>

43. Lequel des services AWS suivants peut être utilisé pour exécuter une base de données auto-gérée ?
    - A. Amazon Route 53
    - B. AWS X-Ray
    - C. AWS Snowmobile
    - D. Amazon Elastic Compute Cloud (Amazon EC2)

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon Elastic Compute Cloud (Amazon EC2)** : En tant que service IaaS, EC2 permet d'installer et de gérer sa propre base de données sur une instance virtuelle.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Route 53** : Service DNS.
      - **B. AWS X-Ray** : Service de traçage distribué.
      - **C. AWS Snowmobile** : Service de transfert de données physique.
    </details>

44. Quel avantage exclusif est fourni aux utilisateurs avec le support Enterprise ?
    - A. Accès à un Technical Project Manager
    - B. Accès à un Technical Account Manager
    - C. Accès à un Cloud Support Engineer
    - D. Accès à un Solutions Architect

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Accès à un Technical Account Manager** : Le plan Enterprise Support inclut un TAM dédié comme point de contact principal pour une assistance proactive.
    - **Autres options incorrectes** ❌ :
      - **A. Technical Project Manager** : Non inclus.
      - **C. Cloud Support Engineer** : Disponible dans les plans Business et Enterprise.
      - **D. Solutions Architect** : Disponible via AWS Professional Services ou partenaires, pas directement via le support.
    </details>

45. Comment un utilisateur peut-il se protéger contre les perturbations de service AWS si une catastrophe naturelle affecte une zone géographique entière ?
    - A. Déployer des applications sur plusieurs zones de disponibilité dans une région AWS.
    - B. Utiliser un modèle de déploiement cloud hybride dans la zone géographique.
    - C. Déployer des applications sur plusieurs régions AWS.
    - D. Stocker les artefacts d'application à l'aide d'AWS Artifact et les répliquer sur plusieurs régions AWS.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Déployer des applications sur plusieurs régions AWS** : Pour se protéger contre une défaillance régionale (catastrophe naturelle), il faut déployer dans plusieurs régions géographiquement séparées.
    - **Autres options incorrectes** ❌ :
      - **A. Déployer sur plusieurs zones de disponibilité** : Protège contre la défaillance d'une zone, pas d'une région entière.
      - **B. Modèle hybride** : Combine cloud et sur site, mais ne protège pas spécifiquement contre les sinistres régionaux.
      - **D. AWS Artifact** : Pour les rapports de conformité, pas la réplication d'applications.
    </details>

46. Comment AWS réduit-il le PLUS EFFICACEMENT les coûts de calcul pour une start-up en croissance ?
    - A. Il fournit des ressources à la demande pour les pics d'utilisation.
    - B. Il automatise le provisionnement des environnements de développement individuels.
    - C. Il automatise la gestion de la relation client.
    - D. Il met en œuvre un budget de calcul mensuel fixe.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Il fournit des ressources à la demande pour les pics d'utilisation** : L'élasticité d'AWS permet de provisionner des ressources pour les pics et de les réduire lorsque la demande baisse, optimisant ainsi les coûts.
    - **Autres options incorrectes** ❌ :
      - **B. Automatiser le provisionnement des environnements de développement** : Améliore l'agilité mais n'est pas la principale réduction de coût.
      - **C. Automatiser la gestion de la relation client** : Non pertinent.
      - **D. Budget de calcul mensuel fixe** : Ce n'est pas le modèle de tarification d'AWS ; les coûts sont variables.
    </details>

47. Une startup travaille sur une nouvelle application qui doit arriver rapidement sur le marché. Les exigences de l'application peuvent devoir être ajustées dans un avenir proche. <br/> Laquelle des caractéristiques suivantes du cloud AWS répond à ce besoin spécifique ?
    - A. Élasticité
    - B. Fiabilité
    - C. Performance
    - D. Agilité

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Agilité** : L'agilité du cloud permet de provisionner rapidement des ressources, d'expérimenter et de s'adapter aux changements des exigences, réduisant ainsi le time-to-market.
    - **Autres options incorrectes** ❌ :
      - **A. Élasticité** : Capacité à ajuster la capacité, liée mais pas spécifiquement à l'ajustement des exigences.
      - **B. Fiabilité** : Disponibilité et résilience.
      - **C. Performance** : Vitesse et efficacité.
    </details>

48. Quel plan de support AWS fournit l'ensemble complet des vérifications d'AWS Trusted Advisor ?
    - A. Business et Developer Support
    - B. Business et Basic Support
    - C. Enterprise et Developer Support
    - D. Enterprise et Business Support

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Enterprise et Business Support** : Les plans Business et Enterprise offrent l'accès complet aux vérifications de Trusted Advisor. Le plan Basic n'en fournit que quelques-unes.
    - **Autres options incorrectes** ❌ :
      - **A. Business et Developer Support** : Developer n'a pas l'accès complet.
      - **B. Business et Basic Support** : Basic n'a pas l'accès complet.
      - **C. Enterprise et Developer Support** : Developer n'a pas l'accès complet.
    </details>

49. Lequel des services suivants possède des fonctionnalités d'atténuation des attaques par déni de service distribué (DDoS) ? (Choisissez deux.)
    - A. AWS WAF
    - B. Amazon DynamoDB
    - C. Amazon EC2
    - D. Amazon CloudFront
    - E. Amazon Inspector

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A, D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS WAF** : Pare-feu d'application web qui peut atténuer certains types d'attaques DDoS de couche 7.
      - **D. Amazon CloudFront** : En tant que CDN, il peut absorber et atténuer certains types d'attaques DDoS grâce à sa taille de réseau et à l'intégration avec AWS Shield.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon DynamoDB** : Base de données NoSQL, pas de fonctionnalité DDoS spécifique.
      - **C. Amazon EC2** : Le client doit mettre en place ses propres mesures.
      - **E. Amazon Inspector** : Évaluation de sécurité automatisée, pas d'atténuation DDoS.
    </details>

50. Lors de la construction d'un modèle de coût total de possession (TCO) cloud, quels éléments de coût doivent être pris en compte pour les charges de travail exécutées sur AWS ? (Choisissez trois.)
    - A. Coûts de calcul
    - B. Coûts d'installations
    - C. Coûts de stockage
    - D. Coûts de transfert de données
    - E. Coûts d'infrastructure réseau
    - F. Coûts de cycle de vie du matériel

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A, C, D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. Coûts de calcul** : Coûts des instances EC2, Lambda, etc.
      - **C. Coûts de stockage** : Coûts de S3, EBS, EFS, etc.
      - **D. Coûts de transfert de données** : Coûts pour le transfert de données entrant/sortant d'AWS.
    - **Autres options incorrectes** ❌ :
      - **B. Coûts d'installations** : Gérés par AWS, non inclus dans les coûts du client.
      - **E. Coûts d'infrastructure réseau** : Gérés par AWS, non inclus.
      - **F. Coûts de cycle de vie du matériel** : Gérés par AWS, non inclus.
    </details>