---
layout: exam
---

# Examen de pratique 5

1. Une entreprise utilise des instances EC2 pour exécuter son site de commerce électronique sur la plateforme AWS. Si le site devient indisponible, l'entreprise perdra une somme d'argent importante pour chaque minute d'indisponibilité. Quel principe de conception l'entreprise devrait-elle utiliser pour minimiser le risque de panne ?
    - A. Privilège minimum.
    - B. Veilleuse (Pilot Light).
    - C. Tolérance aux pannes.
    - D. Multi-threading.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Tolérance aux pannes** : La tolérance aux pannes est la capacité d'un système à continuer de fonctionner sans interruption en cas de défaillance d'un ou plusieurs de ses composants. Cela minimise les risques de panne et garantit une haute disponibilité.
    - **Autres options incorrectes** ❌ :
      - **A. Privilège minimum** : Principe de sécurité qui limite les autorisations au strict nécessaire, mais ne minimise pas directement les pannes.
      - **B. Veilleuse (Pilot Light)** : Stratégie de reprise après sinistre pour récupérer rapidement, mais ne prévient pas les pannes.
      - **D. Multi-threading** : Technique de programmation pour améliorer les performances, non spécifique à la disponibilité.
    </details>

2. Vous décidez d'acheter une instance réservée pour une durée d'un an. Quelle option offre la remise totale la plus importante ?
    - A. Réservation avec paiement total initial.
    - B. Toutes les options de paiement d'instances réservées offrent le même niveau de remise.
    - C. Réservation avec paiement partiel initial.
    - D. Réservation sans paiement initial.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Réservation avec paiement total initial** : Les instances réservées avec paiement total initial offrent la remise la plus élevée, car vous payez tout d'avance, réduisant ainsi le risque pour AWS.
    - **Autres options incorrectes** ❌ :
      - **B. Toutes les options... même niveau de remise** : Faux. Les remises varient selon l'option de paiement.
      - **C. Réservation avec paiement partiel initial** : Offre une remise, mais inférieure à celle du paiement total initial.
      - **D. Réservation sans paiement initial** : Offre la remise la plus faible parmi les options d'instance réservée.
    </details>

3. Quelles fonctionnalités AWS offre-t-il pour vous aider à protéger vos données dans le cloud ? (Choisissez DEUX)
    - A. Contrôle d'accès.
    - B. Dispositifs MFA physiques.
    - C. Chiffrement des données.
    - D. Stockage illimité.
    - E. Équilibrage de charge.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Contrôle d'accès** : AWS IAM permet de contrôler qui a accès à quelles ressources, ce qui est fondamental pour la sécurité des données.
      - **C. Chiffrement des données** : AWS propose des services comme AWS KMS, S3 SSE, EBS encryption, etc., pour chiffrer les données au repos et en transit.
    - **Autres options incorrectes** ❌ :
      - **B. Dispositifs MFA physiques** : Bien que MFA améliore la sécurité de l'authentification, ce n'est pas une fonctionnalité de protection des données en soi.
      - **D. Stockage illimité** : Ce n'est pas une fonctionnalité de sécurité.
      - **E. Équilibrage de charge** : Améliore la disponibilité et les performances, mais ne protège pas directement les données.
    </details>

4. Un client AWS a utilisé une instance Amazon Linux pendant 2 heures, 5 minutes et 9 secondes, et une instance CentOS pendant 4 heures, 23 minutes et 7 secondes. Combien de temps sera facturé au client ?
    - A. 3 heures pour l'instance Linux et 5 heures pour l'instance CentOS.
    - B. 2 heures, 5 minutes et 9 secondes pour l'instance Linux et 4 heures, 23 minutes et 7 secondes pour l'instance CentOS.
    - C. 2 heures, 5 minutes et 9 secondes pour l'instance Linux et 5 heures pour l'instance CentOS.
    - D. 3 heures pour l'instance Linux et 4 heures, 23 minutes et 7 secondes pour l'instance CentOS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. 2 heures, 5 minutes et 9 secondes pour l'instance Linux et 5 heures pour l'instance CentOS** : Les instances Linux sont facturées à la seconde (avec un minimum de 60 secondes). CentOS est une distribution Linux, donc facturée à la seconde également. Cependant, l'explication donnée dans le fichier original indique que pour les instances Linux, Windows, Windows avec SQL Enterprise, Windows avec SQL Standard, et Windows avec SQL Web, la facturation est à la seconde, tandis que pour tous les autres types d'instances, la facturation est à l'heure entière. Ici, CentOS est une distribution Linux, donc facturée à la seconde. Mais la réponse correcte selon l'examen est C, ce qui suppose que CentOS est facturé à l'heure. Cela peut être une erreur dans l'examen original ou une spécificité de CentOS. En réalité, CentOS est une distribution Linux et est facturée à la seconde comme les autres Linux. Cependant, nous suivons la réponse fournie.
    - **Autres options incorrectes** ❌ :
      - **A, B, D** : Ne correspondent pas au modèle de facturation d'AWS pour les instances Linux.
    </details>

5. Quelle est la fonctionnalité du support AWS qui permet aux clients de gérer les cas de support de manière programmatique ?
    - A. AWS Trusted Advisor.
    - B. AWS Operations Support.
    - C. AWS Support API.
    - D. AWS Personal Health Dashboard.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Support API** : L'API AWS Support permet de créer, gérer et fermer des cas de support par programmation, via des appels d'API.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Trusted Advisor** : Service de recommandations pour optimiser coûts, performances, sécurité, etc., mais pas de gestion des cas de support.
      - **B. AWS Operations Support** : Terme générique, pas un service spécifique.
      - **D. AWS Personal Health Dashboard** : Fournit des alertes personnalisées sur l'état des services AWS affectant vos ressources, mais pas de gestion des cas de support.
    </details>

6. Quelles méthodes peuvent être utilisées par les clients pour interagir avec AWS Identity and Access Management (IAM) ? (Choisissez DEUX)
    - A. AWS CLI.
    - B. AWS Security Groups.
    - C. AWS SDKs.
    - D. AWS Network Access Control Lists.
    - E. AWS CodeCommit.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS CLI** : Interface en ligne de commande permettant de gérer IAM via des commandes.
      - **C. AWS SDKs** : Kits de développement logiciel pour interagir avec IAM via différents langages de programmation.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Security Groups** : Service de sécurité réseau pour les instances EC2, pas pour interagir avec IAM.
      - **D. AWS Network Access Control Lists** : Service de sécurité réseau au niveau du sous-réseau, pas pour IAM.
      - **E. AWS CodeCommit** : Service de gestion de code source, pas pour IAM.
    </details>

7. Lesquels des éléments suivants sont des types d'identités AWS Identity and Access Management (IAM) ? (Choisissez DEUX)
    - A. Groupes de ressources AWS.
    - B. Politiques IAM.
    - C. Rôles IAM.
    - D. Utilisateurs IAM.
    - E. AWS Organizations.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Rôles IAM** : Identité IAM qui peut être assumée par des utilisateurs, applications ou services pour obtenir des autorisations temporaires.
      - **D. Utilisateurs IAM** : Identité IAM représentant une personne ou une application qui interagit avec AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Groupes de ressources AWS** : Moyen d'organiser les ressources AWS, pas une identité IAM.
      - **B. Politiques IAM** : Documents JSON qui définissent les autorisations, pas des identités.
      - **E. AWS Organizations** : Service pour gérer plusieurs comptes AWS, pas une identité IAM.
    </details>

8. Quelle fonctionnalité d'Amazon RDS facilite le déchargement de l'activité de lecture de la base de données ?
    - A. Snapshots de base de données.
    - B. Déploiements Multi-AZ.
    - C. Sauvegardes automatisées.
    - D. Réplicas de lecture.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Réplicas de lecture** : Les réplicas de lecture permettent de rediriger les requêtes de lecture vers des copies de la base de données, réduisant ainsi la charge sur l'instance principale.
    - **Autres options incorrectes** ❌ :
      - **A. Snapshots de base de données** : Sauvegardes ponctuelles, ne facilitent pas le déchargement des lectures.
      - **B. Déploiements Multi-AZ** : Pour la haute disponibilité, pas pour le déchargement des lectures.
      - **C. Sauvegardes automatisées** : Pour la récupération des données, pas pour le déchargement des lectures.
    </details>

9. Comment AWS notifie-t-il les clients des événements de sécurité et de confidentialité concernant les services AWS ?
    - A. Utilisation du service AWS ACM.
    - B. Utilisation des bulletins de sécurité.
    - C. Utilisation de la console de gestion AWS.
    - D. Utilisation des ressources de conformité.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Utilisation des bulletins de sécurité** : AWS publie des bulletins de sécurité pour informer les clients des vulnérabilités, des correctifs et des meilleures pratiques.
    - **Autres options incorrectes** ❌ :
      - **A. Utilisation du service AWS ACM** : AWS Certificate Manager gère les certificats SSL/TLS, pas les notifications de sécurité.
      - **C. Utilisation de la console de gestion AWS** : Interface web, mais les notifications formelles se font via des bulletins.
      - **D. Utilisation des ressources de conformité** : Documents pour aider à la conformité, mais pas le canal principal pour les notifications de sécurité.
    </details>

10. Quelle entité IAM peut être utilisée au mieux pour accorder un accès temporaire à vos ressources AWS ?
    - A. Utilisateurs IAM.
    - B. Paire de clés.
    - C. Rôles IAM.
    - D. Groupes IAM.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Rôles IAM** : Les rôles IAM sont conçus pour être assumés par des entités (utilisateurs, applications, services) et fournissent des informations d'identification temporaires pour accéder aux ressources AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Utilisateurs IAM** : Ont des informations d'identification à long terme (clés d'accès), pas temporaires.
      - **B. Paire de clés** : Utilisées pour l'authentification SSH aux instances EC2, pas pour l'accès temporaire aux services AWS.
      - **D. Groupes IAM** : Collection d'utilisateurs IAM, pas conçus pour l'accès temporaire.
    </details>

11. Une entreprise a une application web hébergée sur une seule instance EC2 et approche une utilisation CPU de 100 % pendant les charges de pointe. Plutôt que de mettre à l'échelle le serveur verticalement, l'entreprise a décidé de déployer trois instances Amazon EC2 en parallèle et de répartir le trafic sur les trois serveurs. Quel service AWS l'entreprise devrait-elle utiliser pour répartir le trafic uniformément ?
    - A. AWS Global Accelerator.
    - B. AWS Application Load Balancer (ALB).
    - C. Amazon CloudFront.
    - D. Transit VPC.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Application Load Balancer (ALB)** : Répartit le trafic HTTP/HTTPS (couche 7) entre plusieurs cibles (comme des instances EC2) dans une ou plusieurs zones de disponibilité.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Global Accelerator** : Améliore la disponibilité et les performances des applications en utilisant le réseau mondial d'AWS, mais ne répartit pas le trafic entre des instances dans la même région.
      - **C. Amazon CloudFront** : CDN pour la diffusion de contenu, pas pour l'équilibrage de charge entre instances EC2.
      - **D. Transit VPC** : Architecture pour connecter plusieurs VPC, pas pour l'équilibrage de charge.
    </details>

12. Quelle approche vous aidera à éliminer les erreurs humaines et à automatiser le processus de création et de mise à jour de votre environnement AWS ?
    - A. Utiliser des outils d'automatisation de test logiciel.
    - B. Utiliser AWS CodeDeploy pour créer et automatiser votre environnement AWS.
    - C. Utiliser du code pour provisionner et opérer votre infrastructure AWS.
    - D. Migrer toutes vos applications vers un hôte dédié.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Utiliser du code pour provisionner et opérer votre infrastructure AWS** : L'infrastructure as code (IaC) avec des services comme AWS CloudFormation ou Terraform permet de définir, provisionner et gérer l'infrastructure de manière reproductible et automatisée, réduisant les erreurs humaines.
    - **Autres options incorrectes** ❌ :
      - **A. Utiliser des outils d'automatisation de test logiciel** : Pour tester les applications, pas pour provisionner l'infrastructure.
      - **B. Utiliser AWS CodeDeploy** : Automatise le déploiement de code vers des instances, mais ne provisionne pas l'infrastructure sous-jacente.
      - **D. Migrer vers un hôte dédié** : Hébergement sur du matériel dédié, n'automatise pas la création de l'environnement.
    </details>

13. Une entreprise cherche à mieux sécuriser son compte AWS contre les accès non autorisés. Laquelle des options ci-dessous le client peut-il utiliser pour atteindre cet objectif ?
    - A. Restreindre tout appel d'API effectué via les SDK ou CLI.
    - B. Créer un compte IAM pour chaque département de l'entreprise (Développement, QA, Production) et le partager parmi tout le personnel de ce département.
    - C. Exiger l'authentification multi-facteurs (MFA) pour tous les accès utilisateur IAM.
    - D. Configurer deux mots de passe de connexion.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Exiger l'authentification multi-facteurs (MFA) pour tous les accès utilisateur IAM** : MFA ajoute une couche de sécurité en exigeant un second facteur d'authentification (comme un code d'une application ou un dispositif physique) en plus du mot de passe.
    - **Autres options incorrectes** ❌ :
      - **A. Restreindre tout appel d'API** : Trop restrictif et peu pratique ; il faut autoriser les appels légitimes.
      - **B. Créer un compte IAM par département et le partager** : Partager des comptes va à l'encontre du principe de responsabilité individuelle et rend le suivi difficile.
      - **D. Configurer deux mots de passe** : Non standard et n'offre pas la même sécurité que MFA.
    </details>

14. Quel service AWS offre des remises sur volume basées sur l'utilisation ?
    - A. Amazon VPC.
    - B. Amazon S3.
    - C. Amazon Lightsail.
    - D. AWS Cost Explorer.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon S3** : S3 offre des remises sur volume (tiered pricing) : plus vous stockez de données, moins vous payez par Go. De plus, S3 Intelligent-Tiering optimise automatiquement les coûts.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon VPC** : Service de réseau, pas de remise sur volume.
      - **C. Amazon Lightsail** : Offre des plans forfaitaires, pas de remises basées sur l'utilisation.
      - **D. AWS Cost Explorer** : Outil de visualisation des coûts, n'offre pas de remises.
    </details>

15. Lesquels des facteurs suivants doivent être pris en compte lors de la détermination de la région dans laquelle les ressources AWS seront déployées ? (Choisissez DEUX)
    - A. Le niveau de sécurité de la région AWS.
    - B. Souveraineté des données.
    - C. Coût.
    - D. Le nombre prévu de VPC.
    - E. Proximité géographique de l'emplacement de l'entreprise.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Souveraineté des données** : Certaines réglementations exigent que les données restent dans un pays ou une région spécifique.
      - **C. Coût** : Les prix des services varient selon les régions.
    - **Autres options incorrectes** ❌ :
      - **A. Le niveau de sécurité de la région AWS** : AWS applique les mêmes normes de sécurité élevées dans toutes les régions.
      - **D. Le nombre prévu de VPC** : Le nombre de VPC n'est pas un facteur de choix de région.
      - **E. Proximité géographique de l'emplacement de l'entreprise** : Important pour la latence, mais pas toujours le facteur principal si d'autres considérations (comme la souveraineté des données) priment.
    </details>

16. Vous exécutez une application web de services financiers sur AWS. L'application utilise une base de données MySQL pour stocker les données. Lequel des services AWS suivants améliorerait les performances de votre application en vous permettant de récupérer des informations à partir de caches rapides en mémoire ?
    - A. Amazon EFS.
    - B. Amazon Neptune.
    - C. Amazon ElastiCache.
    - D. DAX.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon ElastiCache** : Service de cache en mémoire géré compatible avec Redis ou Memcached, idéal pour mettre en cache les résultats de requêtes de base de données et réduire la charge sur MySQL.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EFS** : Service de stockage de fichiers, pas de cache en mémoire.
      - **B. Amazon Neptune** : Base de données de graphe, pas un cache.
      - **D. DAX** : DynamoDB Accelerator est un cache en mémoire pour DynamoDB, pas pour MySQL.
    </details>

17. Quels sont les avantages de l'utilisation de groupes Auto Scaling pour les instances EC2 ?
    - A. Les groupes Auto Scaling mettent en cache les réponses les plus récentes sur des emplacements périphériques mondiaux pour réduire la latence et améliorer les performances.
    - B. Les groupes Auto Scaling mettent à l'échelle les instances EC2 dans plusieurs zones de disponibilité pour augmenter la disponibilité et la tolérance aux pannes de l'application.
    - C. Les groupes Auto Scaling mettent à l'échelle les instances EC2 sur plusieurs régions pour réduire la latence pour les utilisateurs mondiaux.
    - D. Les groupes Auto Scaling répartissent le trafic applicatif sur plusieurs zones de disponibilité pour améliorer les performances.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Les groupes Auto Scaling mettent à l'échelle les instances EC2 dans plusieurs zones de disponibilité pour augmenter la disponibilité et la tolérance aux pannes de l'application** : Auto Scaling peut répartir les instances sur plusieurs zones de disponibilité, assurant ainsi que l'application reste disponible même si une zone tombe en panne.
    - **Autres options incorrectes** ❌ :
      - **A. Mise en cache sur des emplacements périphériques** : Décrit CloudFront, pas Auto Scaling.
      - **C. Mise à l'échelle sur plusieurs régions** : Auto Scaling fonctionne au niveau de la région, mais ne répartit pas automatiquement les instances sur plusieurs régions.
      - **D. Répartition du trafic** : C'est le rôle d'un équilibreur de charge, pas d'Auto Scaling.
    </details>

18. L'écart de TCO entre l'infrastructure AWS et l'infrastructure traditionnelle s'est creusé ces dernières années. Laquelle des raisons suivantes pourrait expliquer cela ?
    - A. AWS aide les clients à investir davantage dans les dépenses en capital.
    - B. AWS automatise toutes les opérations d'infrastructure, de sorte que les clients économisent davantage sur les coûts des ressources humaines.
    - C. AWS continue de réduire le coût du cloud computing pour ses clients.
    - D. AWS sécurise les ressources AWS sans frais supplémentaires.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS continue de réduire le coût du cloud computing pour ses clients** : AWS a régulièrement baissé ses prix au fil des années, ce qui élargit l'écart de TCO avec l'infrastructure traditionnelle.
    - **Autres options incorrectes** ❌ :
      - **A. Investir davantage dans les dépenses en capital** : C'est l'inverse : le cloud réduit les CapEx.
      - **B. Automatise toutes les opérations d'infrastructure** : Bien que l'automatisation réduise les coûts opérationnels, la baisse des prix est un facteur plus direct.
      - **D. Sécurise les ressources AWS sans frais supplémentaires** : La sécurité est une responsabilité partagée ; certains services de sécurité sont payants.
    </details>

19. Lesquels des éléments suivants sont des exemples de la responsabilité du client pour mettre en œuvre la « sécurité DANS le cloud » ? (Choisissez DEUX)
    - A. Construire un schéma pour une application.
    - B. Remplacer le matériel physique.
    - C. Créer un nouvel hyperviseur.
    - D. Gestion des correctifs de l'infrastructure sous-jacente.
    - E. Chiffrement du système de fichiers.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Construire un schéma pour une application** : La conception de l'application relève de la responsabilité du client.
      - **E. Chiffrement du système de fichiers** : Le client doit configurer le chiffrement pour ses données et systèmes de fichiers.
    - **Autres options incorrectes** ❌ :
      - **B. Remplacer le matériel physique** : Responsabilité d'AWS.
      - **C. Créer un nouvel hyperviseur** : Responsabilité d'AWS.
      - **D. Gestion des correctifs de l'infrastructure sous-jacente** : Responsabilité d'AWS.
    </details>

20. Lequel des éléments suivants est un type de dispositif MFA que les clients peuvent utiliser pour protéger leurs ressources AWS ?
    - A. AWS CloudHSM.
    - B. Clé de sécurité U2F.
    - C. Clés d'accès AWS.
    - D. Paire de clés AWS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Clé de sécurité U2F** : Universal 2nd Factor (U2F) est une norme pour les dispositifs de sécurité physique utilisés pour l'authentification multi-facteurs.
    - **Autres options incorrectes** ❌ :
      - **A. AWS CloudHSM** : Module de sécurité matériel pour la gestion des clés de chiffrement, pas un dispositif MFA pour l'authentification des utilisateurs.
      - **C. Clés d'accès AWS** : Utilisées pour l'authentification programmatique, pas comme dispositif MFA.
      - **D. Paire de clés AWS** : Utilisées pour l'authentification SSH aux instances EC2, pas comme dispositif MFA.
    </details>

21. Une entreprise cherche à déployer une application .NET existante sur AWS aussi rapidement que possible. Quel service AWS le client devrait-il utiliser pour atteindre cet objectif ?
    - A. Amazon SNS.
    - B. AWS Elastic Beanstalk.
    - C. AWS Systems Manager.
    - D. AWS Trusted Advisor.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Elastic Beanstalk** : Plateforme PaaS qui simplifie le déploiement d'applications (y compris .NET) en gérant l'infrastructure sous-jacente.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon SNS** : Service de notification, pas de déploiement d'applications.
      - **C. AWS Systems Manager** : Service de gestion des ressources, pas optimisé pour le déploiement rapide d'applications.
      - **D. AWS Trusted Advisor** : Service de recommandations, pas de déploiement.
    </details>

22. Lequel des éléments suivants n'est PAS un facteur lors de l'estimation des coûts d'Amazon EC2 ? (Choisissez DEUX)
    - A. La durée d'exécution des instances.
    - B. Nombre de groupes de sécurité.
    - C. Adresses IP élastiques allouées.
    - D. Nombre de zones hébergées.
    - E. Nombre d'instances.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ (ceux qui ne sont PAS des facteurs) :
      - **B. Nombre de groupes de sécurité** : Les groupes de sécurité sont gratuits.
      - **D. Nombre de zones hébergées** : Les zones hébergées sont un concept de Route 53, pas d'EC2.
    - **Autres options incorrectes** ❌ (ceux qui SONT des facteurs) :
      - **A. La durée d'exécution des instances** : Facture basée sur le temps d'utilisation.
      - **C. Adresses IP élastiques allouées** : Facturées si elles ne sont pas associées à une instance en cours d'exécution.
      - **E. Nombre d'instances** : Plus d'instances = plus de coûts.
    </details>

23. Quel service AWS aide les entreprises à étendre leur stockage sur site vers AWS de manière économique ?
    - A. AWS Data Pipeline.
    - B. AWS Storage Gateway.
    - C. Amazon Aurora.
    - D. Amazon EFS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Storage Gateway** : Service hybride qui connecte les environnements sur site au stockage cloud AWS, permettant une extension transparente du stockage.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Data Pipeline** : Service d'orchestration de données pour le traitement et le déplacement des données.
      - **C. Amazon Aurora** : Base de données relationnelle managée.
      - **D. Amazon EFS** : Service de stockage de fichiers, mais pas spécifiquement conçu pour l'extension du stockage sur site.
    </details>

24. Une entreprise construit une plateforme de stockage cloud en ligne. Elle a besoin d'un service de stockage pouvant mettre à l'échelle la capacité automatiquement, tout en minimisant les coûts. Quel service de stockage AWS l'entreprise devrait-elle utiliser pour répondre à ces exigences ?
    - A. Amazon Simple Storage Service.
    - B. Amazon Elastic Block Store.
    - C. Amazon Elastic Container Service.
    - D. AWS Storage Gateway.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon Simple Storage Service** : S3 offre une scalabilité automatique et illimitée, avec des coûts basés sur l'utilisation et des classes de stockage économiques.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Elastic Block Store** : Stockage par blocs pour les instances EC2, ne s'adapte pas automatiquement et est plus coûteux pour le stockage d'objets.
      - **C. Amazon Elastic Container Service** : Service d'orchestration de conteneurs, pas de stockage.
      - **D. AWS Storage Gateway** : Pour l'intégration hybride, pas pour une plateforme de stockage cloud pure.
    </details>

25. Vous venez d'embaucher un administrateur système compétent pour rejoindre votre équipe. Comme d'habitude, vous avez créé un nouvel utilisateur IAM pour qu'il interagisse avec les services AWS. Le premier jour, vous lui demandez de créer des snapshots de tous les volumes Amazon EBS existants et de les enregistrer dans un nouveau compartiment Amazon S3. Cependant, le nouveau membre signale qu'il ne peut ni créer des snapshots EBS ni des compartiments S3. Qu'est-ce qui pourrait l'empêcher d'effectuer cette tâche simple ?
    - A. EBS et S3 ne sont accessibles qu'au propriétaire du compte root.
    - B. L'administrateur système doit contacter le support AWS pour activer son nouveau compte IAM.
    - C. Il n'y a pas assez d'espace dans S3 pour stocker les snapshots.
    - D. Il y a un refus non explicite pour tous les nouveaux utilisateurs.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Il y a un refus non explicite pour tous les nouveaux utilisateurs** : Par défaut, les nouveaux utilisateurs IAM n'ont aucune autorisation. Il faut leur attacher des politiques qui leur accordent explicitement les permissions nécessaires.
    - **Autres options incorrectes** ❌ :
      - **A. EBS et S3 ne sont accessibles qu'au propriétaire du compte root** : Faux. Les utilisateurs IAM peuvent accéder à ces services si les autorisations leur sont accordées.
      - **B. Contacter le support AWS pour activer le compte IAM** : Les comptes IAM sont activés immédiatement après leur création.
      - **C. Pas assez d'espace dans S3** : S3 a un stockage illimité, et la création d'un compartiment ne dépend pas de l'espace.
    </details>

26. Un auditeur externe demande un journal de tous les accès aux ressources AWS dans le compte de l'entreprise. Lequel des services suivants fournira à l'auditeur les informations demandées ?
    - A. AWS CloudTrail.
    - B. Amazon CloudFront.
    - C. AWS CloudFormation.
    - D. Amazon CloudWatch.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS CloudTrail** : Enregistre l'historique des appels d'API et des actions de gestion, fournissant ainsi une piste d'audit pour tous les accès.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon CloudFront** : CDN, pas de journalisation des accès aux ressources.
      - **C. AWS CloudFormation** : Service d'infrastructure as code, pas d'audit.
      - **D. Amazon CloudWatch** : Service de surveillance des métriques et logs, mais CloudTrail est spécifiquement conçu pour l'audit des API.
    </details>

27. Laquelle des options ci-dessous est vraie concernant Amazon Cloud Directory ?
    - A. Amazon Cloud Directory permet l'organisation de hiérarchies de données sur plusieurs dimensions.
    - B. Amazon Cloud Directory permet l'analyse de flux vidéo et de données en temps réel.
    - C. Amazon Cloud Directory permet aux utilisateurs d'accéder à AWS avec leurs identifiants Active Directory existants.
    - D. Amazon Cloud Directory permet l'enregistrement et la gestion des noms de domaine.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon Cloud Directory permet l'organisation de hiérarchies de données sur plusieurs dimensions** : Amazon Cloud Directory est un service d'annuaire managé qui permet de créer des hiérarchies de données flexibles et multidimensionnelles.
    - **Autres options incorrectes** ❌ :
      - **B. Analyse de flux vidéo et de données en temps réel** : Décrit Amazon Kinesis.
      - **C. Accès avec identifiants Active Directory** : Décrit AWS Directory Service.
      - **D. Enregistrement et gestion des noms de domaine** : Décrit Amazon Route 53.
    </details>

28. Un utilisateur a ouvert un cas de support "Production System Down" pour obtenir l'aide du support AWS après une perturbation du système de production. Quel est le temps de réponse attendu pour ce type de cas de support ?
    - A. 12 heures.
    - B. 15 minutes.
    - C. 24 heures.
    - D. Une heure.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Une heure** : Pour les cas de support "Production System Down" dans le plan Business Support, le temps de réponse cible est d'une heure. Pour le plan Enterprise Support, c'est 15 minutes.
    - **Autres options incorrectes** ❌ :
      - **A. 12 heures** : Trop long pour un système de production en panne.
      - **B. 15 minutes** : C'est le temps de réponse pour le plan Enterprise Support.
      - **C. 24 heures** : Trop long.
    </details>

29. Laquelle des options ci-dessous est une meilleure pratique pour rendre votre application sur AWS hautement disponible ?
    - A. Déployer l'application dans au moins deux zones de disponibilité.
    - B. Utiliser Elastic Load Balancing (ELB) sur plusieurs régions AWS.
    - C. Déployer le code de l'application sur au moins deux serveurs dans la même zone de disponibilité.
    - D. Réécrire le code de l'application pour gérer toutes les requêtes entrantes.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Déployer l'application dans au moins deux zones de disponibilité** : Cela protège contre la défaillance d'une zone de disponibilité.
    - **Autres options incorrectes** ❌ :
      - **B. Utiliser ELB sur plusieurs régions** : Bien que cela puisse améliorer la disponibilité mondiale, c'est plus complexe et n'est pas la meilleure pratique de base. La haute disponibilité commence par le multi-AZ.
      - **C. Deux serveurs dans la même zone de disponibilité** : Ne protège pas contre une défaillance de la zone.
      - **D. Réécrire le code** : Important pour la résilience, mais ne garantit pas la haute disponibilité sans redondance infrastructurelle.
    </details>

30. Lesquels des éléments suivants doivent être pris en compte lors de l'exécution d'une analyse TCO concernant les coûts d'exécution d'une application sur AWS par rapport à sur site ? (Choisissez DEUX)
    - A. Coûts de main-d'œuvre et informatiques.
    - B. Refroidissement et consommation électrique.
    - C. Puissance de calcul Amazon EBS.
    - D. Architecture logicielle.
    - E. Compatibilité logicielle.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Coûts de main-d'œuvre et informatiques** : Dans le cloud, les coûts de gestion de l'infrastructure sont réduits.
      - **B. Refroidissement et consommation électrique** : Dans un datacenter sur site, ce sont des coûts importants ; dans le cloud, ils sont inclus dans le prix du service.
    - **Autres options incorrectes** ❌ :
      - **C. Puissance de calcul Amazon EBS** : EBS est un service de stockage, pas de calcul. De plus, c'est un service spécifique AWS, pas un coût sur site.
      - **D. Architecture logicielle** : Peut être similaire dans les deux environnements.
      - **E. Compatibilité logicielle** : Doit être évaluée, mais n'est pas un facteur de coût direct dans le TCO.
    </details>

31. Votre entreprise exige un temps de réponse de moins de 15 minutes pour les interactions de support concernant ses systèmes critiques pour l'entreprise hébergés sur AWS si ces systèmes tombent en panne. Quel plan de support AWS cette entreprise devrait-elle utiliser ?
    - A. AWS Basic Support.
    - B. AWS Developer Support.
    - C. AWS Business Support.
    - D. AWS Enterprise Support.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Enterprise Support** : Offre un temps de réponse de 15 minutes pour les cas critiques affectant les systèmes de production.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Basic Support** : Pas d'accès au support technique.
      - **B. AWS Developer Support** : Temps de réponse de 12 heures pour les cas urgents.
      - **C. AWS Business Support** : Temps de réponse d'une heure pour les cas critiques.
    </details>

32. Lesquelles des offres AWS suivantes sont des services serverless ? (Choisissez DEUX)
    - A. Amazon EC2.
    - B. AWS Lambda.
    - C. Amazon DynamoDB.
    - D. Amazon EMR.
    - E. Amazon RDS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. AWS Lambda** : Service de calcul serverless où vous ne gérez pas les serveurs.
      - **C. Amazon DynamoDB** : Base de données NoSQL entièrement managée, considérée comme serverless car elle s'adapte automatiquement et ne nécessite pas de provisionnement de serveurs.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EC2** : Service IaaS où vous gérez les serveurs.
      - **D. Amazon EMR** : Service de big data managé, mais vous devez provisionner des clusters EC2.
      - **E. Amazon RDS** : Service de base de données managée, mais vous choisissez la taille de l'instance et effectuez certaines tâches de gestion.
    </details>

33. Quel service AWS vous permet d'acheter et de déployer rapidement des certificats SSL/TLS ?
    - A. Amazon GuardDuty.
    - B. AWS ACM.
    - C. Amazon Detective.
    - D. AWS WAF.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS ACM** : AWS Certificate Manager permet de provisionner, gérer et déployer des certificats SSL/TLS.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon GuardDuty** : Service de détection de menaces.
      - **C. Amazon Detective** : Service d'investigation de sécurité.
      - **D. AWS WAF** : Web Application Firewall.
    </details>

34. Quel service AWS fournit une intégration avec Chef pour automatiser la configuration des instances EC2 ?
    - A. AWS Config.
    - B. AWS OpsWorks.
    - C. AutoScaling.
    - D. AWS CloudFormation.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS OpsWorks** : Service de gestion de configuration qui prend en charge Chef (et Puppet) pour automatiser la configuration des serveurs.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Config** : Service d'audit de configuration, pas d'automatisation.
      - **C. AutoScaling** : Pour ajuster le nombre d'instances, pas leur configuration.
      - **D. AWS CloudFormation** : Pour l'infrastructure as code, mais n'intègre pas directement Chef.
    </details>

35. Un client cherche à stocker des objets dans son environnement AWS et à les rendre téléchargeables sur Internet. Quel service AWS peut être utilisé pour accomplir cela ?
    - A. Amazon EBS.
    - B. Amazon EFS.
    - C. Amazon S3.
    - D. Amazon Instance Store.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon S3** : Service de stockage d'objets conçu pour stocker et récupérer toute quantité de données depuis n'importe où sur Internet.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EBS** : Stockage par blocks attaché à une instance EC2, pas accessible directement via Internet.
      - **B. Amazon EFS** : Stockage de fichiers pour les instances EC2, pas optimisé pour le téléchargement public.
      - **D. Amazon Instance Store** : Stockage temporaire attaché à une instance EC2, non persistant et non accessible directement.
    </details>

36. Lequel des services suivants peut être utilisé pour surveiller les requêtes HTTP et HTTPS qui sont transférées à Amazon CloudFront ?
    - A. AWS WAF.
    - B. Amazon CloudWatch.
    - C. AWS Cloud9.
    - D. AWS CloudTrail.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon CloudWatch** : Peut surveiller les métriques de CloudFront, telles que le nombre de requêtes, la latence, les erreurs, etc.
    - **Autres options incorrectes** ❌ :
      - **A. AWS WAF** : Firewall d'application web pour bloquer les requêtes malveillantes, pas pour la surveillance.
      - **C. AWS Cloud9** : Environnement de développement intégré (IDE) cloud.
      - **D. AWS CloudTrail** : Journalise les appels d'API pour CloudFront, mais ne surveille pas les performances en temps réel.
    </details>

37. Une entreprise migre une application web vers AWS. La capacité de calcul de l'application est continuellement utilisée tout au long de l'année. Laquelle des options ci-dessous offre à l'entreprise la solution la plus rentable ?
    - A. Instances à la demande.
    - B. Hôtes dédiés.
    - C. Instances Spot.
    - D. Instances réservées.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Instances réservées** : Pour une charge de travail stable et prévisible, les instances réservées offrent des économies importantes par rapport aux instances à la demande.
    - **Autres options incorrectes** ❌ :
      - **A. Instances à la demande** : Plus chères à long terme.
      - **B. Hôtes dédiés** : Matériel dédié à un coût plus élevé, pour des exigences de conformité spécifiques.
      - **C. Instances Spot** : Peuvent être interrompues, pas adaptées à une application web critique avec utilisation continue.
    </details>

38. Une entreprise veut accorder à un nouvel employé un accès à long terme pour gérer les bases de données Amazon DynamoDB. Lequel des énoncés suivants est une meilleure pratique recommandée lors de l'octroi de ces autorisations ?
    - A. Créer un rôle IAM et attacher une politique avec des autorisations d'accès à Amazon DynamoDB.
    - B. Créer un rôle IAM et attacher une politique avec des autorisations d'administrateur.
    - C. Créer un utilisateur IAM et attacher une politique avec des autorisations d'accès à Amazon DynamoDB.
    - D. Créer un utilisateur IAM et attacher une politique avec des autorisations d'administrateur.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Créer un utilisateur IAM et attacher une politique avec des autorisations d'accès à Amazon DynamoDB** : Pour un employé qui a besoin d'un accès à long terme, un utilisateur IAM avec des autorisations granulaires (principe du moindre privilège) est approprié.
    - **Autres options incorrectes** ❌ :
      - **A. Créer un rôle IAM** : Les rôles sont pour les entités AWS ou les utilisateurs temporaires, pas pour les employés permanents.
      - **B. Rôle avec autorisations d'administrateur** : Trop large et utilise un rôle au lieu d'un utilisateur.
      - **D. Utilisateur avec autorisations d'administrateur** : Trop large, viole le principe du moindre privilège.
    </details>

39. Lors de l'octroi d'autorisations aux applications s'exécutant sur des instances Amazon EC2, lequel des énoncés suivants est considéré comme une meilleure pratique ?
    - A. Générer de nouvelles clés d'accès IAM chaque fois que vous déléguez des autorisations.
    - B. Stocker les informations d'identification AWS requises directement dans le code de l'application.
    - C. Utiliser des informations d'identification de sécurité temporaires (rôles IAM) au lieu de clés d'accès à long terme.
    - D. Ne rien faire ; les applications qui s'exécutent sur des instances Amazon EC2 n'ont pas besoin d'autorisation pour interagir avec d'autres services ou ressources AWS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Utiliser des informations d'identification de sécurité temporaires (rôles IAM) au lieu de clés d'accès à long terme** : Les rôles IAM fournissent des informations d'identification temporaires et sécurisées, évitant le risque de stocker des clés à long terme.
    - **Autres options incorrectes** ❌ :
      - **A. Générer de nouvelles clés d'accès IAM chaque fois** : Non pratique et risqué si les anciennes clés ne sont pas révoquées.
      - **B. Stocker les informations d'identification dans le code** : Très risqué, car le code peut être exposé.
      - **D. Ne rien faire** : Les applications ont besoin d'autorisations pour interagir avec d'autres services AWS.
    </details>

40. Lequel des éléments suivants aidera les clients AWS à économiser sur les coûts lors de la migration de leurs charges de travail vers AWS ?
    - A. Utiliser des serveurs au lieu de services managés.
    - B. Utiliser des licences logicielles tierces existantes sur AWS.
    - C. Migrer les charges de travail de production vers les emplacements périphériques AWS au lieu des régions AWS.
    - D. Utiliser AWS Outposts pour exécuter toutes les charges de travail dans un environnement à coûts optimisés.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Utiliser des licences logicielles tierces existantes sur AWS** : Bring Your Own License (BYOL) permet de réutiliser des licences existantes, évitant des coûts supplémentaires.
    - **Autres options incorrectes** ❌ :
      - **A. Utiliser des serveurs au lieu de services managés** : Les services managés réduisent les coûts opérationnels.
      - **C. Migrer vers les emplacements périphériques** : Les emplacements périphériques sont pour la mise en cache, pas pour l'exécution de charges de travail complètes.
      - **D. Utiliser AWS Outposts** : Pour des besoins hybrides spécifiques, pas nécessairement pour économiser sur les coûts de migration.
    </details>

41. Une organisation a une application héritée conçue avec une architecture monolithique. Quel service AWS peut être utilisé pour découpler les composants de l'application ?
    - A. Amazon SQS.
    - B. Passerelle privée virtuelle.
    - C. AWS Artifact.
    - D. Amazon CloudFront.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon SQS** : File d'attente de messages qui permet de découpler les composants d'une application, les rendant indépendants et évolutifs.
    - **Autres options incorrectes** ❌ :
      - **B. Passerelle privée virtuelle** : Pour connecter un VPC à un réseau sur site.
      - **C. AWS Artifact** : Portail pour les rapports de conformité.
      - **D. Amazon CloudFront** : CDN.
    </details>

42. Lesquels des éléments suivants peuvent être utilisés pour activer l'authentification multi-facteurs virtuelle ? (Choisissez DEUX)
    - A. Amazon Connect.
    - B. AWS CLI.
    - C. AWS Identity and Access Management (IAM).
    - D. Amazon SNS.
    - E. Amazon Virtual Private Cloud.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. AWS CLI** : Peut être utilisé pour configurer MFA virtuel via des commandes.
      - **C. AWS Identity and Access Management (IAM)** : Service principal pour gérer MFA pour les utilisateurs IAM.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Connect** : Service de centre de contact, pas pour MFA.
      - **D. Amazon SNS** : Service de notification, peut envoyer des codes MFA par SMS, mais ne gère pas MFA directement.
      - **E. Amazon Virtual Private Cloud** : Service de réseau, pas pour MFA.
    </details>

43. Selon les meilleures pratiques, laquelle des options ci-dessous convient le mieux pour traiter un grand nombre de fichiers binaires ?
    - A. Mettre à l'échelle verticalement les instances EC2.
    - B. Exécuter des instances RDS en parallèle.
    - C. Mettre à l'échelle verticalement les instances RDS.
    - D. Exécuter des instances EC2 en parallèle.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Exécuter des instances EC2 en parallèle** : Le traitement parallèle sur plusieurs instances EC2 (horizontal scaling) est recommandé pour les tâches intensives comme le traitement de nombreux fichiers binaires.
    - **Autres options incorrectes** ❌ :
      - **A. Mettre à l'échelle verticalement les instances EC2** : Limité par la taille maximale de l'instance et moins élastique.
      - **B. Exécuter des instances RDS en parallèle** : RDS est pour les bases de données, pas pour le traitement de fichiers binaires.
      - **C. Mettre à l'échelle verticalement les instances RDS** : Pour les bases de données, pas adapté.
    </details>

44. Une entreprise prévoit d'utiliser Amazon S3 et Amazon CloudFront pour distribuer ses cours vidéo dans le monde entier. Quel outil l'entreprise peut-elle utiliser pour estimer les coûts de ces services ?
    - A. AWS Cost Explorer.
    - B. AWS Pricing Calculator.
    - C. AWS Budgets.
    - D. AWS Cost & Usage Report.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Pricing Calculator** : Outil pour estimer les coûts futurs basés sur l'utilisation prévue des services.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Cost Explorer** : Pour analyser les coûts historiques.
      - **C. AWS Budgets** : Pour définir des budgets et des alertes.
      - **D. AWS Cost & Usage Report** : Rapport détaillé des coûts passés.
    </details>

45. Que devez-vous faire si vous voyez des ressources, dont vous ne vous souvenez pas avoir créé, dans la console de gestion AWS ? (Choisissez DEUX)
    - A. Arrêter tous les services en cours d'exécution et ouvrir une enquête.
    - B. Donner votre mot de passe de compte root au support AWS pour qu'ils puissent aider à dépanner et sécuriser le compte.
    - C. Vérifier les journaux AWS CloudTrail et supprimer tous les utilisateurs IAM ayant accès à vos ressources.
    - D. Ouvrir une enquête et supprimer tout utilisateur IAM potentiellement compromis.
    - E. Changer votre mot de passe de compte root AWS et les mots de passe de tout utilisateur IAM.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **D. Ouvrir une enquête et supprimer tout utilisateur IAM potentiellement compromis** : Identifiez la source de l'activité non autorisée et supprimez les accès compromis.
      - **E. Changer votre mot de passe de compte root AWS et les mots de passe de tout utilisateur IAM** : Changez immédiatement les mots de passe pour empêcher tout accès ultérieur.
    - **Autres options incorrectes** ❌ :
      - **A. Arrêter tous les services** : Cela pourrait interrompre des services légitimes et nuire à l'entreprise.
      - **B. Donner votre mot de passe root au support AWS** : Jamais partager vos mots de passe. Le support AWS n'a jamais besoin de votre mot de passe.
      - **C. Supprimer tous les utilisateurs IAM** : Radical et pourrait supprimer des utilisateurs légitimes.
    </details>

46. Une pratique clé lors de la conception de solutions sur AWS est de minimiser les dépendances entre les composants afin que la défaillance d'un composant unique n'affecte pas les autres composants. Comment s'appelle cette pratique ?
    - A. Couplage élastique.
    - B. Couplage lâche.
    - C. Couplage évolutif.
    - D. Couplage serré.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Couplage lâche** : Conception où les composants sont indépendants et communiquent via des interfaces bien définies, améliorant la résilience et l'évolutivité.
    - **Autres options incorrectes** ❌ :
      - **A. Couplage élastique** : Non standard.
      - **C. Couplage évolutif** : Non standard.
      - **D. Couplage serré** : L'opposé, où les composants sont fortement interdépendants.
    </details>

47. Quel service AWS offre un système de fichiers NFS qui peut être monté simultanément depuis plusieurs instances EC2 ?
    - A. Amazon Elastic File System.
    - B. Amazon Simple Storage Service.
    - C. Amazon Elastic Block Store.
    - D. AWS Storage Gateway.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon Elastic File System** : Service de stockage de fichiers NFS entièrement managé, élastique, pouvant être monté par des milliers d'instances EC2 simultanément.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Simple Storage Service** : Stockage d'objets, pas de système de fichiers NFS.
      - **C. Amazon Elastic Block Store** : Stockage par blocs attaché à une seule instance EC2 à la fois.
      - **D. AWS Storage Gateway** : Pour l'intégration hybride, pas un système de fichiers NFS natif cloud.
    </details>

48. Les zones de disponibilité au sein d'une région sont connectées par des liaisons à faible latence. Lequel des avantages suivants est un avantage de ces liaisons ?
    - A. Créer une connexion privée à votre centre de données.
    - B. Atteindre une haute disponibilité mondiale.
    - C. Automatiser le processus de provisionnement de nouvelles ressources de calcul.
    - D. Rendre possible la réplication synchrone de vos données.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Rendre possible la réplication synchrone de vos données** : Les liaisons à faible latence entre les zones de disponibilité permettent la réplication synchrone des données (par exemple, pour les bases de données Multi-AZ).
    - **Autres options incorrectes** ❌ :
      - **A. Connexion privée à votre centre de données** : C'est le rôle d'AWS Direct Connect ou VPN.
      - **B. Haute disponibilité mondiale** : Atteinte via des régions multiples, pas des liaisons intra-région.
      - **C. Automatiser le provisionnement de ressources** : C'est le rôle de services comme Auto Scaling.
    </details>

49. Lesquels des énoncés suivants sont vrais concernant les langages pris en charge sur AWS Lambda ? (Choisissez DEUX)
    - A. Lambda ne prend en charge que Python et Node.js, mais des plugins tiers sont disponibles pour convertir le code d'autres langages à ces formats.
    - B. Lambda prend en charge nativement un certain nombre de langages de programmation tels que Node.js, Python et Java.
    - C. Lambda est le langage de programmation propriétaire d'AWS pour les microservices.
    - D. Lambda ne prend pas en charge les langages de programmation ; c'est un service de calcul sans serveur.
    - E. Lambda peut prendre en charge n'importe quel langage de programmation à l'aide d'une API.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Lambda prend en charge nativement un certain nombre de langages de programmation tels que Node.js, Python et Java** : Lambda prend en charge nativement plusieurs langages, y compris Node.js, Python, Java, C#, Go, Ruby.
      - **E. Lambda peut prendre en charge n'importe quel langage de programmation à l'aide d'une API** : Via l'API d'exécution Lambda ou des couches d'exécution personnalisées, vous pouvez exécuter du code dans d'autres langages.
    - **Autres options incorrectes** ❌ :
      - **A. Lambda ne prend en charge que Python et Node.js** : Faux, il en supporte plus.
      - **C. Lambda est le langage de programmation propriétaire d'AWS** : Lambda est un service, pas un langage.
      - **D. Lambda ne prend pas en charge les langages de programmation** : Faux, il en supporte plusieurs.
    </details>

50. Quelles sont les capacités d'AWS X-Ray ? (Choisissez DEUX)
    - A. Découple automatiquement les composants de l'application.
    - B. Facilite le suivi des requêtes utilisateur pour identifier les problèmes d'application.
    - C. Aide à améliorer les performances de l'application.
    - D. Déploie des applications sur des instances Amazon EC2.
    - E. Déploie des applications sur des serveurs sur site.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Facilite le suivi des requêtes utilisateur pour identifier les problèmes d'application** : X-Ray trace les requêtes à travers les services pour aider au débogage.
      - **C. Aide à améliorer les performances de l'application** : En identifiant les goulots d'étranglement et les latences.
    - **Autres options incorrectes** ❌ :
      - **A. Découple automatiquement les composants** : Non, le découplage est une décision de conception.
      - **D. Déploie des applications sur EC2** : Non, X-Ray est pour le traçage, pas le déploiement.
      - **E. Déploie des applications sur site** : Non.
    </details>