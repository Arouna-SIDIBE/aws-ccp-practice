---
layout: exam
---

# Examen de pratique 15

1. Comment les clients bénéficient-ils des économies d'échelle massives d'Amazon ?
    - A. Des réductions de prix périodiques résultant des efficacités opérationnelles d'Amazon.
    - B. De nouveaux types d'instances Amazon EC2 fournissant le matériel le plus récent.
    - C. La capacité de monter en charge et de descendre en charge lorsque cela est nécessaire.
    - D. Une fiabilité accrue du matériel sous-jacent des instances Amazon EC2.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Des réductions de prix périodiques résultant des efficacités opérationnelles d'Amazon** : Grâce à ses énormes économies d'échelle, Amazon est en mesure de réduire régulièrement les prix pour ses clients, tout en améliorant continuellement l'efficacité de ses services.
    - **Autres options incorrectes** ❌ :
      - **B. De nouveaux types d'instances Amazon EC2** : Cela fait partie de l'innovation continue d'AWS, mais ce n'est pas le principal avantage des économies d'échelle.
      - **C. La capacité de monter en charge et de descendre en charge** : C'est un avantage de l'élasticité du cloud, pas directement lié aux économies d'échelle.
      - **D. Une fiabilité accrue du matériel sous-jacent** : AWS investit dans la fiabilité, mais ce n'est pas l'avantage principal des économies d'échelle.
    </details>

2. Quels services AWS peuvent être utilisés pour recueillir des informations sur l'activité d'un compte AWS ? (Choisissez DEUX.)
    - A. Amazon CloudFront
    - B. AWS Cloud9
    - C. AWS CloudTrail
    - D. AWS CloudHSM
    - E. Amazon CloudWatch

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C, E
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **C. AWS CloudTrail** : Service qui enregistre l'historique des appels d'API et des actions de gestion pour la gouvernance, la conformité et l'audit.
      - **E. Amazon CloudWatch** : Service de surveillance qui collecte des métriques et des logs, permettant de surveiller l'utilisation et les performances.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon CloudFront** : Réseau de diffusion de contenu (CDN), pas pour la collecte d'activité de compte.
      - **B. AWS Cloud9** : Environnement de développement intégré (IDE) cloud, pas pour la surveillance d'activité.
      - **D. AWS CloudHSM** : Module de sécurité matériel (HSM) pour la gestion des clés de chiffrement, pas pour la collecte d'activité.
    </details>

3. Parmi les tâches informatiques courantes suivantes, lesquelles AWS peut-il prendre en charge pour libérer les ressources informatiques de l'entreprise ? (Choisissez DEUX.)
    - A. Appliquer des correctifs aux logiciels de base de données.
    - B. Tester les versions d'applications.
    - C. Sauvegarder les bases de données.
    - D. Créer le schéma de la base de données.
    - E. Exécuter des tests de pénétration.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A, C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. Appliquer des correctifs aux logiciels de base de données** : Pour les services managés comme Amazon RDS, AWS gère les correctifs du moteur de base de données.
      - **C. Sauvegarder les bases de données** : AWS propose des sauvegardes automatisées pour des services comme RDS, Aurora, DynamoDB, etc.
    - **Autres options incorrectes** ❌ :
      - **B. Tester les versions d'applications** : C'est la responsabilité du client.
      - **D. Créer le schéma de la base de données** : C'est la responsabilité du client (conception des tables, relations).
      - **E. Exécuter des tests de pénétration** : Le client peut effectuer des tests sur ses propres ressources, mais AWS ne le fait pas à sa place.
    </details>

4. Dans quel scénario les instances Amazon EC2 Spot doivent-elles être utilisées ?
    - A. Une entreprise souhaite déplacer son site web principal vers AWS depuis un serveur web sur site.
    - B. Une entreprise dispose d'un certain nombre de services d'application dont l'accord de niveau de service (SLA) exige une disponibilité de 99,999 %.
    - C. Une base de données héritée très utilisée fonctionne actuellement sur site.
    - D. Une entreprise dispose d'un certain nombre de travaux non fréquents et interrompibles qui utilisent actuellement des instances à la demande.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Une entreprise dispose d'un certain nombre de travaux non fréquents et interrompibles** : Les instances Spot sont idéales pour les charges de travail flexibles, tolérantes aux interruptions et à forte intensité de calcul, comme le traitement par lots. Elles offrent des économies importantes (jusqu'à 90 % par rapport aux instances à la demande) mais peuvent être interrompues avec un préavis de 2 minutes.
    - **Autres options incorrectes** ❌ :
      - **A. Déplacer son site web principal** : Pour un site web critique, les instances à la demande ou réservées sont plus appropriées en raison de la nécessité de stabilité.
      - **B. SLA de 99,999 %** : Les instances Spot ne conviennent pas aux charges de travail nécessitant une haute disponibilité et une fiabilité extrême en raison de leur nature interruptible.
      - **C. Base de données héritée très utilisée** : Les bases de données critiques nécessitent une disponibilité continue et des performances prévisibles, donc les instances Spot ne sont pas recommandées.
    </details>

5. Quelle fonctionnalité AWS un client doit-il utiliser pour atteindre une haute disponibilité d'une application ?
    - A. AWS Direct Connect
    - B. Zones de disponibilité
    - C. Centres de données
    - D. Amazon Virtual Private Cloud (Amazon VPC)

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Zones de disponibilité** : Le déploiement d'une application sur plusieurs zones de disponibilité (AZ) au sein d'une même région AWS permet de protéger contre les défaillances d'une seule zone. C'est une meilleure pratique fondamentale pour la haute disponibilité.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Direct Connect** : Service de connexion réseau dédiée entre votre datacenter et AWS, pas pour la haute disponibilité des applications.
      - **C. Centres de données** : Terme générique. AWS gère les centres de données, mais le client doit concevoir l'architecture pour la haute disponibilité en utilisant les AZ.
      - **D. Amazon VPC** : Service de réseau privé virtuel, nécessaire pour l'isolation, mais ne garantit pas à lui seul la haute disponibilité.
    </details>

6. Quel est le plan de support AWS minimum qui inclut la gestion des événements d'infrastructure sans frais supplémentaires ?
    - A. Enterprise
    - B. Business
    - C. Developer
    - D. Basic

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Enterprise** : Le plan Enterprise Support inclut l'Infrastructure Event Management (IEM) sans frais supplémentaires. L'IEM fournit une assistance proactive pour planifier et exécuter des événements critiques comme des lancements de produits.
    - **Autres options incorrectes** ❌ :
      - **B. Business** : N'inclut pas l'IEM sans frais supplémentaires.
      - **C. Developer** : N'inclut pas l'IEM.
      - **D. Basic** : Plan gratuit, n'inclut pas l'IEM.
    </details>

7. Quel service AWS peut héberger un site web statique ?
    - A. Amazon S3
    - B. Amazon Route 53
    - C. Amazon QuickSight
    - D. AWS X-Ray

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon S3** : Amazon Simple Storage Service (S3) peut héberger des sites web statiques (HTML, CSS, JavaScript, images) de manière économique et hautement scalable.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Route 53** : Service DNS, pas d'hébergement de site web.
      - **C. Amazon QuickSight** : Service de business intelligence et de visualisation de données.
      - **D. AWS X-Ray** : Service de traçage distribué pour les applications.
    </details>

8. Comment AWS raccourcit-il le temps de provisionnement des ressources informatiques ?
    - A. Il fournit une plateforme de tickets informatiques en ligne pour les demandes de ressources.
    - B. Il prend en charge les services de validation automatique du code.
    - C. Il offre la capacité de provisionner programmatiquement des ressources existantes.
    - D. Il automatise le processus de demande de ressources à partir de la liste des fournisseurs informatiques de l'entreprise.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Il offre la capacité de provisionner programmatiquement des ressources existantes** : AWS permet de provisionner des ressources via des appels d'API, l'interface en ligne de commande (CLI) ou des outils d'infrastructure as code comme AWS CloudFormation, réduisant ainsi le temps de provisionnement de plusieurs semaines ou mois à quelques minutes.
    - **Autres options incorrectes** ❌ :
      - **A. Plateforme de tickets informatiques** : Non, AWS fournit des outils d'automatisation, pas un système de ticketing.
      - **B. Validation automatique du code** : AWS propose des services de développement, mais ce n'est pas la principale raison du provisionnement rapide.
      - **D. Automatisation de la demande auprès des fournisseurs** : Non, AWS élimine le besoin de passer par des fournisseurs de matériel traditionnels.
    </details>

9. À quoi peuvent servir les emplacements périphériques (edge locations) AWS ? (Choisissez DEUX.)
    - A. Héberger des applications.
    - B. Diffuser du contenu plus près des utilisateurs.
    - C. Exécuter des services de mise en cache de bases de données NoSQL.
    - D. Réduire le trafic sur le serveur en mettant en cache les réponses.
    - E. Envoyer des messages de notification aux utilisateurs finaux.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B, D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. Diffuser du contenu plus près des utilisateurs** : Les emplacements périphériques sont utilisés par Amazon CloudFront (CDN) pour mettre en cache et diffuser du contenu (pages web, vidéos, API) à partir d'emplacements géographiquement proches des utilisateurs finaux, réduisant ainsi la latence.
      - **D. Réduire le trafic sur le serveur en mettant en cache les réponses** : La mise en cache au niveau des emplacements périphériques réduit la charge sur les serveurs d'origine en servant directement le contenu mis en cache.
    - **Autres options incorrectes** ❌ :
      - **A. Héberger des applications** : Les applications sont hébergées sur des instances EC2, des conteneurs, etc., dans des régions AWS, pas dans les emplacements périphériques.
      - **C. Exécuter des services de mise en cache de bases de données NoSQL** : La mise en cache NoSQL est fournie par Amazon ElastiCache, qui s'exécute dans des régions AWS, pas dans les emplacements périphériques.
      - **E. Envoyer des messages de notification** : Cela est géré par des services comme Amazon SNS ou Amazon Pinpoint, pas par les emplacements périphériques.
    </details>

10. Lequel des éléments suivants peut limiter l'accès à un compartiment Amazon Simple Storage Service (Amazon S3) à des utilisateurs spécifiques ?
    - A. Une paire de clés publique et privée.
    - B. Amazon Inspector.
    - C. Politiques AWS Identity and Access Management (IAM).
    - D. Groupes de sécurité.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Politiques AWS Identity and Access Management (IAM)** : Les politiques IAM permettent de contrôler finement quels utilisateurs, groupes ou rôles peuvent effectuer quelles actions sur quelles ressources S3. Elles peuvent être attachées à des utilisateurs, groupes, rôles ou directement à un compartiment S3 (via une politique de compartiment).
    - **Autres options incorrectes** ❌ :
      - **A. Une paire de clés publique et privée** : Utilisées pour le chiffrement ou l'authentification SSH, pas pour contrôler l'accès à S3.
      - **B. Amazon Inspector** : Service d'évaluation de sécurité automatisée pour les applications, pas pour le contrôle d'accès.
      - **D. Groupes de sécurité** : Agissent comme des pare-feu au niveau de l'instance pour Amazon EC2, pas pour S3.
    </details>

11. Une solution capable de supporter la croissance des utilisateurs, du trafic ou de la taille des données sans baisse de performance correspond à quel principe d'architecture cloud ?
    - A. Penser parallèle.
    - B. Mettre en œuvre l'élasticité.
    - C. Découpler vos composants.
    - D. Concevoir pour l'échec.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Mettre en œuvre l'élasticité** : L'élasticité est la capacité d'un système à adapter automatiquement sa capacité de calcul (monter en charge/descendre en charge) en fonction de la demande, permettant ainsi de gérer la croissance sans perte de performance.
    - **Autres options incorrectes** ❌ :
      - **A. Penser parallèle** : Technique pour améliorer les performances en traitant les tâches en parallèle, mais ne décrit pas directement l'adaptation à la croissance.
      - **C. Découpler vos composants** : Principe de conception pour réduire les interdépendances et améliorer la résilience, mais pas spécifiquement lié à la mise à l'échelle.
      - **D. Concevoir pour l'échec** : Principe visant à rendre le système résilient aux défaillances, pas directement lié à la croissance.
    </details>

12. Parmi les tâches suivantes, laquelle est de la responsabilité d'AWS ?
    - A. Chiffrer les données côté client.
    - B. Configurer les rôles AWS Identity and Access Management (IAM).
    - C. Sécuriser l'hyperviseur Amazon EC2.
    - D. Définir les politiques de mot de passe utilisateur.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Sécuriser l'hyperviseur Amazon EC2** : Selon le modèle de responsabilité partagée, AWS est responsable de la sécurité *du* cloud, ce qui inclut l'infrastructure physique, le réseau, l'hyperviseur et la virtualisation.
    - **Autres options incorrectes** ❌ :
      - **A. Chiffrer les données côté client** : Responsabilité du client (sécurité *dans* le cloud).
      - **B. Configurer les rôles IAM** : Responsabilité du client.
      - **D. Définir les politiques de mot de passe utilisateur** : Responsabilité du client (gestion des identités et accès).
    </details>

13. Un avantage du tarif à la demande d'Amazon Elastic Compute Cloud (Amazon EC2) est :
    - A. la possibilité d'enchérir pour un coût horaire inférieur.
    - B. payer un tarif journalier quel que soit le temps utilisé.
    - C. payer uniquement pour le temps utilisé.
    - D. prépayer pour les instances et payer un tarif horaire réduit.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Payer uniquement pour le temps utilisé** : Les instances à la demande suivent un modèle de paiement à l'usage : vous payez pour la capacité de calcul par heure ou par seconde (selon l'instance) sans engagement à long terme ni paiement anticipé.
    - **Autres options incorrectes** ❌ :
      - **A. Possibilité d'enchérir pour un coût horaire inférieur** : C'est le modèle des instances Spot, pas à la demande.
      - **B. Tarif journalier quel que soit le temps utilisé** : Faux, vous payez à la seconde/heure d'utilisation.
      - **D. Prépayer pour un tarif réduit** : C'est le modèle des instances réservées, pas à la demande.
    </details>

14. Un administrateur doit déployer rapidement une solution informatique populaire et commencer à l'utiliser immédiatement. <br/> Où l'administrateur peut-il trouver de l'aide ?
    - A. Documentation du AWS Well-Architected Framework.
    - B. Amazon CloudFront.
    - C. AWS CodeCommit.
    - D. Déploiements de référence AWS Quick Start.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Déploiements de référence AWS Quick Start** : Les Quick Starts sont des guides et des modèles CloudFormation préconstruits qui aident à déployer rapidement des solutions logicielles courantes sur AWS en suivant les meilleures pratiques.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Well-Architected Framework** : Ensemble de meilleures pratiques pour concevoir des architectures, pas des déploiements rapides de solutions spécifiques.
      - **B. Amazon CloudFront** : CDN, pas pour le déploiement d'applications.
      - **C. AWS CodeCommit** : Service de gestion de code source, pas pour déployer des solutions complètes rapidement.
    </details>

15. Lequel des services suivants appartient à la catégorie de plateforme serverless d'AWS ?
    - A. Amazon EMR
    - B. Elastic Load Balancing
    - C. AWS Lambda
    - D. AWS Mobile Hub

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Lambda** : Service de calcul serverless qui exécute du code en réponse à des événements sans provisionner ni gérer de serveurs. C'est un élément clé de la plateforme serverless d'AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EMR** : Service de big data managé (basé sur des clusters EC2), pas serverless.
      - **B. Elastic Load Balancing** : Service de répartition de charge qui nécessite des ressources réseau gérées, pas entièrement serverless.
      - **D. AWS Mobile Hub** : Service pour créer, tester et surveiller des applications mobiles, mais n'est pas un service de calcul serverless comme Lambda.
    </details>

16. Quels services font partie de la plateforme serverless d'AWS ?
    - A. Amazon EC2, Amazon S3, Amazon Athena
    - B. Amazon Kinesis, Amazon SQS, Amazon EMR
    - C. AWS Step Functions, Amazon DynamoDB, Amazon SNS
    - D. Amazon Athena, Amazon Cognito, Amazon EC2

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Step Functions, Amazon DynamoDB, Amazon SNS** : Ces services sont des composants de la plateforme serverless d'AWS. Step Functions orchestre les workflows serverless, DynamoDB est une base de données NoSQL entièrement managée, et SNS est un service de notification et de messagerie entièrement managé.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EC2, Amazon S3, Amazon Athena** : EC2 est un service IaaS (non serverless), S3 est un service de stockage d'objets (peut être utilisé dans des architectures serverless mais n'est pas un service de calcul), Athena est un service de requête interactive serverless.
      - **B. Amazon Kinesis, Amazon SQS, Amazon EMR** : Kinesis et SQS sont des services de streaming et de file d'attente entièrement managés (serverless), mais EMR est un service de big data basé sur des clusters (non serverless).
      - **D. Amazon Athena, Amazon Cognito, Amazon EC2** : Athena et Cognito peuvent être utilisés dans des architectures serverless, mais EC2 est un service IaaS (non serverless).
    </details>

17. Selon le modèle de responsabilité partagée, lequel des éléments suivants est un contrôle partagé entre un client et AWS ?
    - A. Contrôles physiques.
    - B. Gestion des correctifs.
    - C. Sécurité de zone.
    - D. Audit du centre de données.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Gestion des correctifs** : Exemple classique de contrôle partagé. AWS est responsable de la mise à jour de l'infrastructure sous-jacente (hyperviseur, matériel), tandis que le client est responsable de la mise à jour du système d'exploitation invité et des applications sur ses instances EC2.
    - **Autres options incorrectes** ❌ :
      - **A. Contrôles physiques** : Entièrement responsabilité d'AWS (sécurité des centres de données).
      - **C. Sécurité de zone** : Cela peut être partagé, mais la gestion des correctifs est l'exemple le plus direct.
      - **D. Audit du centre de données** : Responsabilité d'AWS.
    </details>

18. À quoi peuvent servir les emplacements périphériques AWS ? (Choisissez DEUX.)
    - A. Héberger des applications.
    - B. Diffuser du contenu plus près des utilisateurs.
    - C. Exécuter des services de mise en cache de bases de données NoSQL.
    - D. Réduire le trafic sur le serveur en mettant en cache les réponses.
    - E. Envoyer des messages de notification aux utilisateurs finaux.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B, D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. Diffuser du contenu plus près des utilisateurs** : Les emplacements périphériques sont utilisés par Amazon CloudFront (CDN) pour mettre en cache et diffuser du contenu à partir d'emplacements géographiquement proches des utilisateurs finaux, réduisant ainsi la latence.
      - **D. Réduire le trafic sur le serveur en mettant en cache les réponses** : La mise en cache au niveau des emplacements périphériques réduit la charge sur les serveurs d'origine en servant directement le contenu mis en cache.
    - **Autres options incorrectes** ❌ :
      - **A. Héberger des applications** : Les applications sont hébergées sur des instances EC2, des conteneurs, etc., dans des régions AWS, pas dans les emplacements périphériques.
      - **C. Exécuter des services de mise en cache de bases de données NoSQL** : La mise en cache NoSQL est fournie par Amazon ElastiCache, qui s'exécute dans des régions AWS, pas dans les emplacements périphériques.
      - **E. Envoyer des messages de notification** : Cela est géré par des services comme Amazon SNS ou Amazon Pinpoint, pas par les emplacements périphériques.
    </details>

19. Quelle technologie permet à la capacité de calcul de s'ajuster en fonction des changements de charge ?
    - A. Équilibrage de charge.
    - B. Basculement automatique.
    - C. Tourniquet (round robin).
    - D. Mise à l'échelle automatique.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Mise à l'échelle automatique** : AWS Auto Scaling (ou EC2 Auto Scaling) surveille vos applications et ajuste automatiquement la capacité (nombre d'instances EC2) pour maintenir des performances stables au coût le plus bas.
    - **Autres options incorrectes** ❌ :
      - **A. Équilibrage de charge** : Répartit le trafic entre plusieurs instances, mais ne provisionne pas de nouvelles instances.
      - **B. Basculement automatique** : Redirige le trafic vers des ressources saines en cas de défaillance, mais n'ajuste pas la capacité.
      - **C. Tourniquet (round robin)** : Algorithme de répartition de charge, pas d'ajustement de capacité.
    </details>

20. Parmi les services AWS suivants, lesquels sont définis comme globaux plutôt que régionaux ? (Choisissez DEUX.)
    - A. Amazon Route 53
    - B. Amazon EC2
    - C. Amazon S3
    - D. Amazon CloudFront
    - E. Amazon DynamoDB

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A, D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. Amazon Route 53** : Service DNS global. Bien que vous puissiez choisir une région pour héberger vos zones DNS, le service lui-même est global.
      - **D. Amazon CloudFront** : CDN global qui utilise des emplacements périphériques dans le monde entier.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon EC2** : Service régional. Vous lancez des instances dans une région spécifique.
      - **C. Amazon S3** : Service régional. Vous créez des compartiments dans une région spécifique (bien que certains éléments comme les noms de compartiment soient globaux).
      - **E. Amazon DynamoDB** : Service régional. Vous créez des tables dans une région spécifique.
    </details>

21. Quel service AWS utiliseriez-vous pour obtenir des rapports et certificats de conformité ?
    - A. AWS Artifact
    - B. AWS Lambda
    - C. Amazon Inspector
    - D. AWS Certificate Manager

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Artifact** : Portail centralisé où les clients peuvent consulter et télécharger des rapports de conformité (SOC, PCI, ISO, etc.) et des accords (BAA, NDA) directement depuis la console AWS.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Lambda** : Service de calcul serverless, pas de conformité.
      - **C. Amazon Inspector** : Service d'évaluation de sécurité automatisée pour les applications, pas de rapports de conformité.
      - **D. AWS Certificate Manager** : Gère les certificats SSL/TLS, pas les rapports de conformité.
    </details>

22. Selon le modèle de responsabilité partagée, lesquelles des tâches suivantes sont de la responsabilité du client AWS ? (Choisissez DEUX.)
    - A. S'assurer que les données d'application sont chiffrées au repos.
    - B. S'assurer que les serveurs NTP AWS sont réglés sur l'heure correcte.
    - C. S'assurer que les utilisateurs ont reçu une formation à la sécurité sur l'utilisation des services AWS.
    - D. S'assurer que l'accès aux centres de données est restreint.
    - E. S'assurer que le matériel est éliminé correctement.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A, C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. S'assurer que les données d'application sont chiffrées au repos** : Le client est responsable du chiffrement des données qu'il stocke dans AWS (bien qu'AWS fournisse des outils comme AWS KMS, S3 SSE, etc.).
      - **C. S'assurer que les utilisateurs ont reçu une formation à la sécurité** : La sensibilisation et la formation sont une responsabilité partagée, mais la formation des employés du client relève de sa responsabilité.
    - **Autres options incorrectes** ❌ :
      - **B. Serveurs NTP AWS** : Gérés par AWS (infrastructure sous-jacente).
      - **D. Accès physique aux centres de données** : Responsabilité d'AWS.
      - **E. Élimination du matériel** : Responsabilité d'AWS.
    </details>

23. Quel service AWS peut être utilisé pour lancer manuellement des instances en fonction des exigences de ressources ?
    - A. Amazon EBS
    - B. Amazon S3
    - C. Amazon EC2
    - D. Amazon ECS

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon EC2** : Service de calcul élastique qui permet de lancer des instances virtuelles serveurs (VM) manuellement via la console, l'API, le CLI ou des outils d'automatisation.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EBS** : Service de stockage par blocs pour EC2, pas pour lancer des instances.
      - **B. Amazon S3** : Service de stockage d'objets.
      - **D. Amazon ECS** : Service de gestion de conteneurs, qui utilise EC2 sous le capot mais n'est pas le service de base pour lancer des instances.
    </details>

24. Une entreprise migre une application exécutant des charges de travail non interrompibles pour une période de trois ans. <br/> Quel modèle de tarification fournirait la solution la PLUS rentable ?
    - A. Instances Spot Amazon EC2
    - B. Instances dédiées Amazon EC2
    - C. Instances à la demande Amazon EC2
    - D. Instances réservées Amazon EC2

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Instances réservées Amazon EC2** : Pour des charges de travail stables et prévisibles sur une longue période (1 ou 3 ans), les instances réservées offrent des remises importantes (jusqu'à 75 %) par rapport aux instances à la demande.
    - **Autres options incorrectes** ❌ :
      - **A. Instances Spot** : Risque d'interruption, ne convient pas aux charges de travail non interrompibles.
      - **B. Instances dédiées** : Matériel dédié à un coût plus élevé, pas nécessairement le plus rentable.
      - **C. Instances à la demande** : Plus chères que les réservées pour une utilisation à long terme.
    </details>

25. Les avantages financiers de l'utilisation d'AWS sont : (Choisissez DEUX.)
    - A. réduction du coût total de possession (TCO).
    - B. augmentation des dépenses en capital (capex).
    - C. réduction des dépenses opérationnelles (opex).
    - D. plans de paiement différé pour les startups.
    - E. lignes de crédit commercial pour les startups.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A, C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. Réduction du coût total de possession (TCO)** : En éliminant les coûts d'achat de matériel, de maintenance, de consommation électrique, etc., le TCO est généralement réduit.
      - **C. Réduction des dépenses opérationnelles (opex)** : Le modèle de paiement à l'usage transforme les dépenses en capital (capex) en dépenses opérationnelles variables, souvent plus faibles.
    - **Autres options incorrectes** ❌ :
      - **B. Augmentation des capex** : C'est l'inverse : AWS réduit les capex.
      - **D. Plans de paiement différé** : AWS n'offre pas de plans de paiement différé standard (bien qu'il existe des options de financement via des partenaires).
      - **E. Lignes de crédit commercial** : Non fourni par AWS directement.
    </details>

26. Selon le modèle de responsabilité partagée d'AWS, lequel des éléments suivants relève entièrement de la responsabilité d'AWS ?
    - A. Application de correctifs sur le système d'exploitation invité.
    - B. Sensibilisation et formation à la sécurité.
    - C. Contrôles physiques et environnementaux.
    - D. Développement d'une politique de mot de passe IAM.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Contrôles physiques et environnementaux** : AWS est entièrement responsable de la sécurité physique des centres de données (accès, alimentation, refroidissement, etc.).
    - **Autres options incorrectes** ❌ :
      - **A. Correctifs du système d'exploitation invité** : Responsabilité du client pour les instances EC2 (IaaS).
      - **B. Sensibilisation et formation à la sécurité** : Partagé. AWS forme ses employés, le client forme les siens.
      - **D. Politique de mot de passe IAM** : Responsabilité du client.
    </details>

27. Quel service AWS permet aux entreprises de connecter un Amazon VPC à un centre de données sur site ? (Choisissez DEUX)
    - A. AWS VPN
    - B. Amazon Redshift
    - C. API Gateway
    - D. AWS Direct Connect

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A, D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS VPN** : Établit une connexion IPsec sécurisée entre votre réseau et un VPC via Internet.
      - **D. AWS Direct Connect** : Établit une connexion réseau dédiée privée entre votre datacenter et AWS, offrant une bande passante élevée et une latence plus faible.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Redshift** : Entrepôt de données, pas de connectivité réseau.
      - **C. API Gateway** : Service pour créer, publier et gérer des API, pas pour la connectivité hybride.
    </details>

28. Une entreprise souhaite réduire l'empreinte de calcul physique que les développeurs utilisent pour exécuter du code. <br/> Quel service répondrait à ce besoin en permettant des architectures serverless ?
    - A. Amazon Elastic Compute Cloud (Amazon EC2)
    - B. AWS Lambda
    - C. Amazon DynamoDB
    - D. AWS CodeCommit

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Lambda** : Service de calcul serverless qui exécute du code sans provisionner ni gérer de serveurs, réduisant ainsi l'empreinte de calcul physique.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EC2** : Nécessite la gestion de serveurs virtuels, donc une empreinte de calcul.
      - **C. Amazon DynamoDB** : Base de données serverless, mais pas pour l'exécution de code.
      - **D. AWS CodeCommit** : Service de gestion de code source, pas d'exécution de code.
    </details>

29. Quel service AWS fournit des alertes lorsqu'un événement AWS peut impacter les ressources AWS d'une entreprise ?
    - A. AWS Personal Health Dashboard
    - B. AWS Service Health Dashboard
    - C. AWS Trusted Advisor
    - D. AWS Infrastructure Event Management

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Personal Health Dashboard** : Fournit des alertes et des conseils de remédiation personnalisés lorsque AWS connaît des événements susceptibles d'affecter vos ressources spécifiques.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Service Health Dashboard** : Affiche l'état général des services AWS, mais n'est pas personnalisé.
      - **C. AWS Trusted Advisor** : Fournit des recommandations d'optimisation, pas des alertes d'événements.
      - **D. AWS Infrastructure Event Management** : Service du plan Enterprise Support pour planifier des événements critiques, pas pour les alertes.
    </details>

30. Parmi les catégories suivantes d'AWS Trusted Advisor, lesquelles existent ? (Choisissez DEUX.)
    - A. Tolérance aux pannes
    - B. Utilisation des instances
    - C. Infrastructure
    - D. Performance
    - E. Capacité de stockage

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A, D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. Tolérance aux pannes** : L'une des cinq catégories de Trusted Advisor (avec optimisation des coûts, performance, sécurité et limites de service).
      - **D. Performance** : Une autre catégorie de Trusted Advisor.
    - **Autres options incorrectes** ❌ :
      - **B. Utilisation des instances** : Non, ce n'est pas une catégorie.
      - **C. Infrastructure** : Non, ce n'est pas une catégorie.
      - **E. Capacité de stockage** : Non, ce n'est pas une catégorie.
    </details>

31. Parmi les services suivants, lequel relève de la responsabilité du client en matière de maintenance de la configuration du système d'exploitation, des correctifs de sécurité et de la mise en réseau ?
    - A. Amazon RDS
    - B. Amazon EC2
    - C. Amazon ElastiCache
    - D. AWS Fargate

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon EC2** : En tant que service IaaS, le client est responsable du système d'exploitation invité, des correctifs, des applications et de la configuration réseau (groupes de sécurité, etc.).
    - **Autres options incorrectes** ❌ :
      - **A. Amazon RDS** : Service managé, AWS gère le système d'exploitation, les correctifs de la base de données, etc.
      - **C. Amazon ElastiCache** : Service de cache managé, AWS gère la maintenance.
      - **D. AWS Fargate** : Service de calcul serverless pour conteneurs, AWS gère l'infrastructure sous-jacente.
    </details>

32. Une entreprise passera d'un centre de données sur site au cloud AWS. <br/> Quelle serait une différence financière après le déménagement ?
    - A. Passer de dépenses opérationnelles variables (opex) à des dépenses en capital initiales (capex).
    - B. Passer de dépenses en capital initiales (capex) à des dépenses en capital variables (capex).
    - C. Passer de dépenses en capital initiales (capex) à des dépenses opérationnelles variables (opex).
    - D. Élimination des dépenses en capital initiales (capex) et élimination des dépenses opérationnelles variables (opex).

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Passer de dépenses en capital initiales (capex) à des dépenses opérationnelles variables (opex)** : Avec le cloud, vous évitez les investissements initiaux importants en matériel (capex) et passez à un modèle de paiement à l'usage (opex variable).
    - **Autres options incorrectes** ❌ :
      - **A. Passer d'opex variables à capex** : C'est l'inverse du cloud.
      - **B. Passer de capex à capex variables** : Le cloud ne transforme pas le capex en capex variable.
      - **D. Élimination totale de capex et opex** : Faux, il y a toujours des opex (coûts d'utilisation).
    </details>

33. Comment un client peut-il prévoir les coûts futurs pour l'exécution d'une nouvelle application web ?
    - A. Amazon Aurora Backtrack
    - B. Amazon CloudWatch Billing Alarms
    - C. AWS Simple Monthly Calculator
    - D. AWS Cost and Usage report

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Simple Monthly Calculator** : Outil qui permet d'estimer les coûts mensuels basés sur la configuration prévue des ressources AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Aurora Backtrack** : Fonctionnalité de restauration ponctuelle pour Aurora, pas de prévision de coûts.
      - **B. Amazon CloudWatch Billing Alarms** : Permet de définir des alertes sur les coûts estimés, mais ne prévoit pas les coûts futurs basés sur une architecture.
      - **D. AWS Cost and Usage report** : Rapport détaillé des coûts passés, pas un outil de prévision.
    </details>

34. Quel est le plan de support AWS MINIMUM qui fournit un support technique par téléphone ?
    - A. Enterprise
    - B. Business
    - C. Developer
    - D. Basic

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Business** : Le plan Business Support inclut un support technique par téléphone 24/7 pour les cas urgents.
    - **Autres options incorrectes** ❌ :
      - **A. Enterprise** : Inclut également le support téléphonique, mais c'est un plan supérieur.
      - **C. Developer** : Support par email uniquement (pas de téléphone).
      - **D. Basic** : Support gratuit limité aux forums et à la documentation.
    </details>

35. Selon le modèle de responsabilité partagée d'AWS, quelle est la responsabilité exclusive d'AWS ?
    - A. Sécurité des applications.
    - B. Gestion des emplacements périphériques.
    - C. Gestion des correctifs.
    - D. Données côté client.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Gestion des emplacements périphériques** : AWS est entièrement responsable de l'infrastructure globale, y compris les emplacements périphériques (Edge Locations) utilisés par CloudFront.
    - **Autres options incorrectes** ❌ :
      - **A. Sécurité des applications** : Responsabilité du client.
      - **C. Gestion des correctifs** : Partagé (AWS pour l'infrastructure, client pour le système d'exploitation invité et les applications).
      - **D. Données côté client** : Responsabilité du client.
    </details>

36. Quelle fonctionnalité AWS IAM est utilisée pour associer un ensemble d'autorisations à plusieurs utilisateurs ?
    - A. Authentification multi-facteurs.
    - B. Groupes.
    - C. Politiques de mot de passe.
    - D. Clés d'accès.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Groupes** : Les groupes IAM permettent de regrouper des utilisateurs et d'attacher des politiques d'autorisations au groupe, facilitant la gestion des permissions pour plusieurs utilisateurs.
    - **Autres options incorrectes** ❌ :
      - **A. Authentification multi-facteurs** : Ajoute une couche de sécurité supplémentaire, pas pour grouper des autorisations.
      - **C. Politiques de mot de passe** : Définissent les exigences de complexité des mots de passe, pas pour grouper des utilisateurs.
      - **D. Clés d'accès** : Identifiants pour l'accès programmatique, pas pour grouper des autorisations.
    </details>

37. Parmi les avantages suivants du cloud AWS, lesquels en sont ? (Choisissez deux.)
    - A. Disponibilité illimitée.
    - B. Élasticité.
    - C. Agilité.
    - D. Colocalisation.
    - E. Dépenses en capital.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B, C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. Élasticité** : Capacité de monter en charge et de descendre en charge rapidement en fonction de la demande.
      - **C. Agilité** : Capacité de développer, tester et déployer des applications plus rapidement grâce à l'automatisation et aux services managés.
    - **Autres options incorrectes** ❌ :
      - **A. Disponibilité illimitée** : Aucun service n'offre une disponibilité illimitée ; AWS conçoit pour une haute disponibilité.
      - **D. Colocalisation** : Ce n'est pas un avantage spécifique d'AWS ; le cloud public va au-delà de la simple colocation.
      - **E. Dépenses en capital** : Le cloud réduit les capex, ce n'est donc pas un avantage.
    </details>

38. Lequel des éléments suivants permet à un client d'activer l'authentification unique (SSO) vers la console AWS ?
    - A. Amazon Connect
    - B. AWS Directory Service
    - C. Amazon Pinpoint
    - D. Amazon Rekognition

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Directory Service** : Fournit des annuaires managés (comme AWS Managed Microsoft AD) qui peuvent être utilisés pour l'authentification unique (SSO) vers la console AWS et les applications.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Connect** : Service de centre de contact cloud.
      - **C. Amazon Pinpoint** : Service d'engagement client et de messagerie.
      - **D. Amazon Rekognition** : Service d'analyse d'images et de vidéos.
    </details>

39. Comment appelle-t-on les multiples emplacements isolés au sein d'une région AWS, connectés par des réseaux à faible latence ?
    - A. AWS Direct Connects
    - B. Amazon VPCs
    - C. Emplacements périphériques
    - D. Zones de disponibilité

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Zones de disponibilité** : Ce sont des emplacements physiquement distincts au sein d'une région AWS, chacune composée d'un ou plusieurs centres de données, avec une alimentation, un refroidissement et un réseau redondants. Elles sont connectées par des liens à faible latence.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Direct Connects** : Service de connexion dédiée, pas des emplacements isolés.
      - **B. Amazon VPCs** : Réseaux privés virtuels au sein d'AWS.
      - **C. Emplacements périphériques** : Points de présence utilisés par CloudFront pour la mise en cache, pas des zones de disponibilité.
    </details>

40. Quels avantages le programme de conformité AWS fournit-il aux clients AWS ? (Choisissez deux.)
    - A. Il vérifie que les charges de travail hébergées sont automatiquement conformes aux contrôles des cadres de conformité pris en charge.
    - B. AWS est responsable de la maintenance de la documentation commune des cadres de conformité.
    - C. Il assure aux clients qu'AWS maintient la sécurité physique et la protection des données.
    - D. Il garantit l'utilisation de cadres de conformité utilisés par d'autres fournisseurs de cloud.
    - E. Il adoptera de nouveaux cadres de conformité dès qu'ils deviendront pertinents pour les charges de travail des clients.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B, C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. AWS est responsable de la maintenance de la documentation commune des cadres de conformité** : AWS maintient et met à jour les documents de conformité (SOC, ISO, etc.) accessibles via AWS Artifact.
      - **C. Il assure aux clients qu'AWS maintient la sécurité physique et la protection des données** : Le programme de conformité démontre qu'AWS respecte des normes rigoureuses en matière de sécurité physique et de protection des données.
    - **Autres options incorrectes** ❌ :
      - **A. Vérifie que les charges de travail hébergées sont automatiquement conformes** : La conformité des charges de travail est une responsabilité partagée ; le client doit configurer ses ressources conformément aux exigences.
      - **D. Garantit l'utilisation de cadres utilisés par d'autres fournisseurs** : Non, AWS a ses propres cadres et certifications.
      - **E. Adoptera de nouveaux cadres dès qu'ils deviendront pertinents** : AWS ajoute de nouvelles certifications, mais ce n'est pas un avantage garanti comme B et C.
    </details>

41. Parmi les services suivants, lequel fournit un accès à la demande aux rapports de conformité d'AWS ?
    - A. AWS IAM
    - B. AWS Artifact
    - C. Amazon GuardDuty
    - D. AWS KMS

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Artifact** : Portail centralisé pour accéder aux rapports de conformité et aux accords AWS à la demande.
    - **Autres options incorrectes** ❌ :
      - **A. AWS IAM** : Service de gestion des identités et des accès.
      - **C. Amazon GuardDuty** : Service de détection des menaces.
      - **D. AWS KMS** : Service de gestion des clés de chiffrement.
    </details>

42. Dans le cadre du modèle de responsabilité partagée, lesquels des contrôles opérationnels suivants les utilisateurs héritent-ils entièrement d'AWS ?
    - A. Gestion de la sécurité du centre de données.
    - B. Gestion des correctifs.
    - C. Gestion de la configuration.
    - D. Gestion des utilisateurs et des accès.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Gestion des utilisateurs et des accès** : Le client est entièrement responsable de la gestion des utilisateurs IAM, des rôles, des politiques et des autorisations.
    - **Autres options incorrectes** ❌ :
      - **A. Gestion de la sécurité du centre de données** : Responsabilité d'AWS.
      - **B. Gestion des correctifs** : Partagé.
      - **C. Gestion de la configuration** : Partagé (AWS pour l'infrastructure, client pour les ressources).
    </details>

43. Lors de la comparaison du cloud AWS avec le coût total de possession (TCO) sur site, quelles dépenses doivent être prises en compte ? (Choisissez deux.)
    - A. Développement logiciel.
    - B. Gestion de projet.
    - C. Matériel de stockage.
    - D. Serveurs physiques.
    - E. Licence de logiciel antivirus.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C, D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **C. Matériel de stockage** : Coûts d'achat et de maintenance des baies de stockage sur site.
      - **D. Serveurs physiques** : Coûts d'achat, de mise à niveau et de maintenance des serveurs sur site.
    - **Autres options incorrectes** ❌ :
      - **A. Développement logiciel** : Coût similaire dans le cloud et sur site.
      - **B. Gestion de projet** : Coût similaire.
      - **E. Licence de logiciel antivirus** : Peut être un coût sur site, mais dans le cloud, des services de sécurité managés peuvent réduire ce besoin.
    </details>

44. Selon le modèle de responsabilité partagée, lesquelles des tâches suivantes sont de la responsabilité du client ? (Choisissez deux.)
    - A. Maintenir le matériel Amazon EC2 sous-jacent.
    - B. Gérer les listes de contrôle d'accès réseau du VPC.
    - C. Chiffrer les données en transit et au repos.
    - D. Remplacer les disques durs défaillants.
    - E. Déployer du matériel dans différentes zones de disponibilité.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B, C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. Gérer les listes de contrôle d'accès réseau du VPC** : Le client configure les NACL (Network ACL) pour contrôler le trafic au niveau du sous-réseau.
      - **C. Chiffrer les données en transit et au repos** : Le client est responsable du chiffrement de ses données, bien qu'AWS fournisse des outils (KMS, certificats, etc.).
    - **Autres options incorrectes** ❌ :
      - **A. Maintenir le matériel Amazon EC2 sous-jacent** : Responsabilité d'AWS.
      - **D. Remplacer les disques durs défaillants** : Responsabilité d'AWS.
      - **E. Déployer du matériel dans différentes zones de disponibilité** : AWS gère l'infrastructure physique ; le client choisit où déployer ses ressources.
    </details>

45. Quels scénarios représentent le concept d'élasticité sur AWS ? (Choisissez deux.)
    - A. Ajuster le nombre d'instances Amazon EC2 en fonction du trafic.
    - B. Redimensionner les instances Amazon RDS en fonction des besoins commerciaux.
    - C. Diriger automatiquement le trafic vers des instances Amazon EC2 moins utilisées.
    - D. Utiliser des documents de conformité AWS pour accélérer le processus de conformité.
    - E. Avoir la capacité de créer et de gouverner des environnements à l'aide de code.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A, B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. Ajuster le nombre d'instances Amazon EC2 en fonction du trafic** : C'est l'essence de l'élasticité : augmenter ou diminuer la capacité de calcul automatiquement en fonction de la demande.
      - **B. Redimensionner les instances Amazon RDS en fonction des besoins commerciaux** : Bien que le redimensionnement d'une instance RDS soit plus vertical qu'horizontal, cela représente une forme d'ajustement de capacité pour répondre aux changements de charge.
    - **Autres options incorrectes** ❌ :
      - **C. Diriger automatiquement le trafic vers des instances moins utilisées** : C'est la fonction d'un équilibreur de charge, pas de l'élasticité.
      - **D. Utiliser des documents de conformité** : Rien à voir avec l'élasticité.
      - **E. Créer et gouverner des environnements avec du code** : C'est l'infrastructure as code, pas spécifiquement l'élasticité.
    </details>

46. Quand est-il avantageux pour une entreprise d'utiliser une instance Spot ?
    - A. Lorsqu'il y a une flexibilité dans le moment où une application doit s'exécuter.
    - B. Lorsqu'il y a des charges de travail critiques.
    - C. Lorsqu'une capacité dédiée est nécessaire.
    - D. Lorsqu'une instance ne doit pas être arrêtée.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Lorsqu'il y a une flexibilité dans le moment où une application doit s'exécuter** : Les instances Spot sont idéales pour les charges de travail flexibles, pouvant être interrompues (traitement par lots, rendu, simulations scientifiques) et où le timing exact n'est pas critique.
    - **Autres options incorrectes** ❌ :
      - **B. Charges de travail critiques** : Les instances Spot peuvent être interrompues, donc ne conviennent pas aux charges de travail critiques nécessitant une haute disponibilité.
      - **C. Capacité dédiée nécessaire** : Les instances dédiées ou les hôtes dédiés sont plus appropriés.
      - **D. Instance ne doit pas être arrêtée** : Les instances Spot peuvent être interrompues avec un préavis de 2 minutes.
    </details>

47. Une entreprise envisage de déplacer son centre de données sur site vers AWS. Quels facteurs doivent être inclus dans une analyse du coût total de possession (TCO) ? (Choisissez deux.)
    - A. Disponibilité des instances Amazon EC2.
    - B. Consommation électrique du centre de données.
    - C. Coûts de main-d'œuvre pour remplacer les anciens serveurs.
    - D. Temps des développeurs d'applications.
    - E. Capacité du moteur de base de données.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B, C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. Consommation électrique du centre de données** : Coût opérationnel important sur site.
      - **C. Coûts de main-d'œuvre pour remplacer les anciens serveurs** : Coûts de maintenance et de renouvellement du matériel.
    - **Autres options incorrectes** ❌ :
      - **A. Disponibilité des instances Amazon EC2** : C'est un attribut du cloud, pas un coût sur site à comparer.
      - **D. Temps des développeurs d'applications** : Similaire dans les deux environnements.
      - **E. Capacité du moteur de base de données** : Attribut technique, pas un coût.
    </details>

48. Comment AWS facture-t-il AWS Lambda ?
    - A. Les utilisateurs enchérissent sur le prix maximum qu'ils sont prêts à payer par heure.
    - B. Les utilisateurs choisissent un engagement de paiement initial de 1, 3 ou 5 ans.
    - C. Les utilisateurs paient pour le stockage permanent requis sur un système de fichiers ou dans une base de données.
    - D. Les utilisateurs paient en fonction du nombre de requêtes et des ressources de calcul consommées.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Les utilisateurs paient en fonction du nombre de requêtes et des ressources de calcul consommées** : Avec Lambda, vous payez pour le nombre d'invocations (requêtes) et la durée d'exécution (calcul), mesurée en gigaoctet-secondes.
    - **Autres options incorrectes** ❌ :
      - **A. Enchères sur le prix maximum** : C'est le modèle des instances Spot.
      - **B. Engagement de 1, 3 ou 5 ans** : C'est le modèle des instances réservées.
      - **C. Paiement pour stockage permanent** : Lambda n'a pas de stockage permanent intégré ; vous payez pour l'exécution.
    </details>

49. Quelle fonction les groupes de sécurité remplissent-ils en ce qui concerne la sécurité des instances Amazon Elastic Compute Cloud (Amazon EC2) ?
    - A. Agir comme un pare-feu virtuel pour l'instance Amazon EC2.
    - B. Sécuriser les comptes utilisateur AWS avec des politiques AWS Identity and Access Management (IAM).
    - C. Fournir une protection DDoS avec AWS Shield.
    - D. Utiliser Amazon CloudFront pour protéger l'instance Amazon EC2.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Agir comme un pare-feu virtuel pour l'instance Amazon EC2** : Les groupes de sécurité contrôlent le trafic entrant et sortant au niveau de l'instance (règles d'autorisation).
    - **Autres options incorrectes** ❌ :
      - **B. Sécuriser les comptes utilisateur AWS avec des politiques IAM** : C'est le rôle d'IAM, pas des groupes de sécurité.
      - **C. Fournir une protection DDoS** : AWS Shield et AWS WAF fournissent une protection DDoS.
      - **D. Utiliser Amazon CloudFront** : CDN pour la diffusion de contenu, pas pour protéger directement une instance EC2.
    </details>

50. Quel scénario de reprise après sinistre offre la probabilité la plus faible de temps d'arrêt ?
    - A. Sauvegarde et restauration.
    - B. Pilote automatique (pilot light).
    - C. Veille active (warm standby).
    - D. Multi-site actif-actif.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Multi-site actif-actif** : Aussi appelé "hot standby", ce scénario implique d'exécuter l'application en parallèle dans plusieurs sites (régions) et de répartir la charge entre eux. En cas de sinistre, tout le trafic est basculé vers le site restant, entraînant un temps d'arrêt minimal (voire nul).
    - **Autres options incorrectes** ❌ :
      - **A. Sauvegarde et restauration** : Temps de restauration long (heures ou jours).
      - **B. Pilote automatique (pilot light)** : Temps de restauration modéré (quelques heures).
      - **C. Veille active (warm standby)** : Temps de restauration plus rapide (minutes à heures), mais toujours un certain temps d'arrêt.
    </details>