---
layout: exam
---

# Examen de pratique 25

1. Quel est un avantage de déplacer une base de données sur site vers Amazon Relational Database Service (RDS) ?
    - A. Il n'est pas nécessaire de gérer les systèmes d'exploitation.
    - B. Vous pouvez mettre à l'échelle verticalement sans temps d'arrêt.
    - C. Aucune administration de base de données n'est requise.
    - D. Vous pouvez exécuter n'importe quel moteur de base de données.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Il n'est pas nécessaire de gérer les systèmes d'exploitation** : Avec Amazon RDS, qui est un service managé, vous n'avez pas besoin de gérer les systèmes d'exploitation. Cela réduit les coûts opérationnels.
    - **Autres options incorrectes** ❌ :
      - **B. Vous pouvez mettre à l'échelle verticalement sans temps d'arrêt** : Faux. Lors de la mise à l'échelle avec RDS, vous devez changer le type d'instance, ce qui nécessite une courte période d'arrêt pendant le redémarrage du système d'exploitation de l'instance.
      - **C. Aucune administration de base de données n'est requise** : Faux. Il y a toujours une administration de base de données requise dans le cloud. Vous ne gérez pas le système d'exploitation sous-jacent, mais vous devez toujours gérer vos propres tables et données dans la base de données.
      - **D. Vous pouvez exécuter n'importe quel moteur de base de données** : Faux. Les options sont MySQL, Microsoft SQL, MariaDB, Oracle, PostgreSQL et Aurora.
    </details>

2. Quelle entité IAM est associée à un identifiant de clé d'accès et une clé d'accès secrète ?
    - A. Groupe IAM.
    - B. Rôle IAM.
    - C. Politique IAM.
    - D. Utilisateur IAM.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Utilisateur IAM** : Un identifiant de clé d'accès et une clé d'accès secrète sont utilisés pour signer les requêtes programmatiques vers AWS. Ils sont associés à un utilisateur IAM.
    - **Autres options incorrectes** ❌ :
      - **A. Groupe IAM** : Les groupes IAM ne sont pas associés à des clés d'accès.
      - **B. Rôle IAM** : Les rôles IAM ne sont pas associés à des clés d'accès ; ils sont utilisés pour déléguer des permissions.
      - **C. Politique IAM** : Les politiques IAM définissent les permissions, mais ne sont pas associées à des clés d'accès.
    </details>

3. Quel service peut être utilisé pour déplacer des exaoctets de données vers AWS de manière économique ?
    - A. AWS Snowmobile.
    - B. AWS Snowball.
    - C. S3 Transfer Acceleration.
    - D. S3 Cross-Region Replication (CRR).

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Snowmobile** : Avec AWS Snowmobile, vous pouvez déplacer 100 Po par snowmobile. AWS appelle cela un "service de transfert de données à l'échelle de l'exaoctet".
    - **Autres options incorrectes** ❌ :
      - **B. AWS Snowball** : Avec AWS Snowball, vous pouvez déplacer jusqu'à 80 To par appareil. AWS appelle cela un "service de transfert de données à l'échelle du pétaoctet".
      - **C. S3 Transfer Acceleration** : Conçu pour accélérer les téléversements vers Amazon S3, mais ne serait pas utilisé pour des exaoctets de données.
      - **D. S3 Cross-Region Replication (CRR)** : Utilisé pour copier des données entre régions, pas vers AWS. Il est également inadapté pour déplacer une telle quantité énorme de données.
    </details>

4. Quel service peut être utilisé pour créer facilement plusieurs comptes ?
    - A. Amazon IAM.
    - B. AWS CloudFormation.
    - C. AWS Organizations.
    - D. Amazon Connect.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Organizations** : AWS Organizations peut être utilisé pour automatiser la création de comptes AWS via l'API Organizations.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon IAM** : Vous ne pouvez pas utiliser IAM pour créer des comptes.
      - **B. AWS CloudFormation** : Vous pourriez théoriquement utiliser AWS CloudFormation pour automatiser la création de comptes avec des scripts, mais ce n'est certainement pas le moyen le plus facile d'atteindre ce résultat.
      - **D. Amazon Connect** : Amazon Connect est un service de centre de contact auto-géré, basé sur le cloud, qui permet aux entreprises de fournir un meilleur service client à un coût inférieur.
    </details>

5. Vous exécutez une instance Amazon EC2 on-demand sous Linux pendant 4 heures, 5 minutes et 6 secondes. Combien de temps serez-vous facturé ?
    - A. 5 heures.
    - B. 4 heures, 6 minutes.
    - C. 4 heures, 5 minutes et 6 secondes.
    - D. 4 heures.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. 4 heures, 5 minutes et 6 secondes** : Les instances Amazon EC2 Linux on-demand, réservées et spot sont facturées à la seconde avec un minimum de 1 minute. Par conséquent, comme le minimum a été dépassé, exactement 4 heures, 5 minutes et 6 secondes seront facturées.
    - **Autres options incorrectes** ❌ :
      - **A. 5 heures** : Faux, la facturation est à la seconde.
      - **B. 4 heures, 6 minutes** : Faux, les secondes sont comptées.
      - **D. 4 heures** : Faux, les minutes et secondes supplémentaires sont facturées.
    </details>

6. Quels sont les avantages d'utiliser des instances réservées ? (Choisissez DEUX)
    - A. Coût réduit.
    - B. Plus de flexibilité.
    - C. Réserver de la capacité.
    - D. Utilise du matériel dédié.
    - E. Haute disponibilité.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Coût réduit** : Avec les instances réservées, vous vous engagez sur un terme de 1 ou 3 ans et obtenez une remise significative par rapport au tarif on-demand.
      - **C. Réserver de la capacité** : Vous pouvez également réserver de la capacité dans une zone de disponibilité avec des instances réservées.
    - **Autres options incorrectes** ❌ :
      - **B. Plus de flexibilité** : Faux. Si vous avez besoin de flexibilité, les instances on-demand sont meilleures mais plus coûteuses.
      - **D. Utilise du matériel dédié** : Faux. Les instances réservées sont différentes des instances dédiées. Les instances dédiées et les hôtes dédiés utilisent du matériel dédié, mais pas les instances réservées.
      - **E. Haute disponibilité** : Faux. Vous n'obtenez pas de haute disponibilité avec les instances réservées ; c'est un modèle de tarification.
    </details>

7. Quelle entité IAM peut être utilisée pour attribuer des permissions aux services AWS ?
    - A. Identifiant de clé d'accès et clé d'accès secrète IAM.
    - B. Politique IAM.
    - C. Rôle IAM.
    - D. Service de jeton de sécurité (STS).

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Rôle IAM** : Avec les rôles IAM, vous pouvez déléguer des permissions à des ressources pour des utilisateurs et des services sans utiliser d'informations d'identification permanentes. Vous pouvez créer un rôle et y attacher une politique IAM.
    - **Autres options incorrectes** ❌ :
      - **A. Identifiant de clé d'accès et clé d'accès secrète IAM** : Sont attribués aux utilisateurs IAM et utilisés pour l'accès programmatique via l'API ou la CLI.
      - **B. Politique IAM** : Est un document de politique utilisé pour définir des permissions qui peuvent être appliquées aux utilisateurs, groupes et rôles. Vous n'appliquez pas la politique au service, vous l'appliquez au rôle.
      - **D. Service de jeton de sécurité (STS)** : Permet de demander des informations d'identification temporaires et à privilèges limités.
    </details>

8. Votre CTO veut migrer vers le cloud. Quels sont les avantages en termes de coûts ?
    - A. Vous provisionnez uniquement ce dont vous avez besoin et vous ajustez à la charge de pointe.
    - B. Vous pouvez réduire vos coûts marketing.
    - C. Vous n'avez pas besoin de payer les licences logicielles.
    - D. Vous bénéficiez d'un transfert de données gratuit vers et depuis le cloud.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Vous provisionnez uniquement ce dont vous avez besoin et vous ajustez à la charge de pointe** : L'un des meilleurs avantages du cloud est que vous pouvez lancer ce dont vous avez besoin et ajuster automatiquement vos ressources en fonction de la demande. Cela signifie que vous ne payez que ce que vous utilisez.
    - **Autres options incorrectes** ❌ :
      - **B. Vous pouvez réduire vos coûts marketing** : Faux. Votre organisation a toujours besoin de faire la même quantité de marketing.
      - **C. Vous n'avez pas besoin de payer les licences logicielles** : Faux. Vous payez toujours pour vos licences logicielles lorsque vous exécutez sur Amazon EC2.
      - **D. Vous bénéficiez d'un transfert de données gratuit vers et depuis le cloud** : Faux. AWS facture le transfert de données sortant.
    </details>

9. Que doit faire une organisation pour migrer vers une autre région AWS ?
    - A. Demander un autre compte AWS dans cette région.
    - B. Créer un compte IAM séparé pour cette région.
    - C. Soumettre une demande pour étendre son compte à la région supplémentaire.
    - D. Commencer simplement à déployer des ressources dans la région supplémentaire.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Commencer simplement à déployer des ressources dans la région supplémentaire** : Avec le cloud AWS, vous pouvez utiliser n'importe quelle région dans le monde à tout moment. Il n'y a pas besoin d'un compte séparé, et IAM est un service global.
    - **Autres options incorrectes** ❌ :
      - **A. Demander un autre compte AWS dans cette région** : Inutile, vous pouvez utiliser plusieurs régions avec un seul compte.
      - **B. Créer un compte IAM séparé pour cette région** : IAM est global, pas régional.
      - **C. Soumettre une demande pour étendre son compte** : Aucune demande n'est nécessaire.
    </details>

10. Une organisation a un cloud sur site et accède à son cloud AWS via Internet. Comment peut-elle créer une connexion hybride privée ?
    - A. AWS Managed VPN.
    - B. AWS VPN CloudHub.
    - C. AWS Direct Connect.
    - D. AWS VPC Endpoint.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Direct Connect** : AWS Direct Connect est une connexion privée à faible latence et à haute bande passante vers AWS. Elle peut être utilisée pour créer une connexion hybride privée entre l'environnement sur site et le cloud AWS.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Managed VPN** et **B. AWS VPN CloudHub** : Utilisent tous deux Internet pour les connexions réseau, donc ne créent pas une connexion privée. La connexion est sécurisée mais utilise Internet.
      - **D. AWS VPC Endpoint** : Une connexion PrivateLink qui connecte un service public AWS à un VPC via une connexion privée. Cela ne connecte pas les environnements sur site à AWS.
    </details>

11. Lesquels des éléments suivants doivent être inclus dans une analyse du coût total de possession (TCO) ? (Choisissez DEUX)
    - A. Coûts de sécurité du centre de données.
    - B. Marketing à l'échelle de l'entreprise.
    - C. Développement d'applications.
    - D. Installation d'équipements de locaux.
    - E. Salaire du responsable informatique.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Coûts de sécurité du centre de données** : Fait partie des coûts d'exploitation actuels de l'infrastructure sur site.
      - **D. Installation d'équipements de locaux** : Fait également partie des coûts d'infrastructure sur site.
    - **Autres options incorrectes** ❌ :
      - **B. Marketing à l'échelle de l'entreprise** : Non affecté par la migration vers le cloud.
      - **C. Développement d'applications** : Doit se poursuivre dans le cloud.
      - **E. Salaire du responsable informatique** : Devrait toujours être payé après la migration.
    </details>

12. Lesquelles des suivantes sont des bonnes pratiques architecturales pour le cloud AWS ? (Choisissez DEUX)
    - A. Déployer dans plusieurs zones de disponibilité.
    - B. Concevoir pour la tolérance aux pannes.
    - C. Créer des architectures monolithiques.
    - D. Déployer dans une seule zone de disponibilité.
    - E. Couplage étroit.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Déployer dans plusieurs zones de disponibilité** : Meilleure pratique pour la haute disponibilité.
      - **B. Concevoir pour la tolérance aux pannes** : Meilleure pratique pour assurer la continuité des opérations.
    - **Autres options incorrectes** ❌ :
      - **C. Créer des architectures monolithiques** : Non recommandé. Les microservices sont préférés.
      - **D. Déployer dans une seule zone de disponibilité** : Risque de défaillance unique.
      - **E. Couplage étroit** : Non recommandé. Le découplage est préférable.
    </details>

13. Que pouvez-vous utiliser pour connecter rapidement et de manière sécurisée votre bureau à votre Amazon VPC ?
    - A. AWS Managed VPN.
    - B. Direct Connect.
    - C. Internet Gateway.
    - D. Table de routage.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Managed VPN** : Peut être utilisé pour connecter rapidement un bureau à un Amazon VPC via une connexion VPN sécurisée.
    - **Autres options incorrectes** ❌ :
      - **B. Direct Connect** : Fournit une connectivité à haute bande passante et faible latence, mais prend des semaines à des mois à mettre en place (et est beaucoup plus cher).
      - **C. Internet Gateway** : Utilisé pour connecter un sous-réseau public à Internet (sortie).
      - **D. Table de routage** : Fait partie d'un VPC et est utilisée pour contrôler le routage du trafic au sein du VPC.
    </details>

14. Selon le modèle de responsabilité partagée AWS, de quoi le client est-il responsable ? (Choisissez DEUX)
    - A. Gestion des correctifs de l'infrastructure.
    - B. Remplacement et élimination des disques durs.
    - C. Sécurité physique du centre de données.
    - D. Configuration des groupes de sécurité.
    - E. Chiffrement des données client.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **D. Configuration des groupes de sécurité** : Responsabilité du client.
      - **E. Chiffrement des données client** : Responsabilité du client.
    - **Autres options incorrectes** ❌ :
      - **A. Gestion des correctifs de l'infrastructure** : Responsabilité d'AWS.
      - **B. Remplacement et élimination des disques durs** : Responsabilité d'AWS.
      - **C. Sécurité physique du centre de données** : Responsabilité d'AWS.
    </details>

15. Quels avantages obtenez-vous en utilisant le cloud AWS ? (Choisissez DEUX)
    - A. Arrêtez de deviner la capacité nécessaire.
    - B. Dépenses en capital accrues.
    - C. Conformité à tous les programmes de sécurité locaux.
    - D. Gain d'un plus grand contrôle de la couche d'infrastructure.
    - E. Échangez les dépenses en capital contre des dépenses variables.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Arrêtez de deviner la capacité nécessaire** : Un des 6 avantages du cloud.
      - **E. Échangez les dépenses en capital contre des dépenses variables** : Un des 6 avantages du cloud.
    - **Autres options incorrectes** ❌ :
      - **B. Dépenses en capital accrues** : Faux. Le cloud réduit les dépenses en capital.
      - **C. Conformité à tous les programmes de sécurité locaux** : Non garanti, mais AWS est conforme à de nombreux programmes.
      - **D. Gain d'un plus grand contrôle de la couche d'infrastructure** : Faux. AWS contrôle largement l'infrastructure.
    </details>

16. Quels services AWS sont utilisés pour l'analytique ? (Choisissez DEUX)
    - A. Amazon Athena.
    - B. Amazon S3.
    - C. Amazon EMR.
    - D. Amazon ElastiCache.
    - E. Amazon RDS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Amazon Athena** : Service de requête interactif qui facilite l'analyse des données dans Amazon S3 à l'aide de SQL standard.
      - **C. Amazon EMR** : Fournit un framework Hadoop managé pour traiter de vastes quantités de données.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon S3** : Utilisé pour le stockage d'objets.
      - **D. Amazon ElastiCache** : Service de mise en cache de données pour améliorer les performances.
      - **E. Amazon RDS** : Base de données relationnelle principalement utilisée pour les charges de travail transactionnelles.
    </details>

17. Quel service de base de données est une base de données NoSQL entièrement managée ?
    - A. Amazon DynamoDB.
    - B. Amazon RDS.
    - C. Amazon RedShift.
    - D. Amazon ElastiCache.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon DynamoDB** : Base de données NoSQL entièrement managée d'Amazon.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon RDS** : Base de données relationnelle (SQL).
      - **C. Amazon RedShift** : Entrepôt de données analysable avec des outils SQL.
      - **D. Amazon ElastiCache** : Service de mise en cache de données pour améliorer les performances.
    </details>

18. Quel est le plan de support le plus économique qui devrait être sélectionné pour fournir un temps de réponse d'au plus 1 heure pour une panne de système de production ?
    - A. Enterprise.
    - B. Basic.
    - C. Business.
    - D. Developer.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Business** : Fournit des temps de réponse < 1 heure pour une panne de système de production.
    - **Autres options incorrectes** ❌ :
      - **A. Enterprise** : Fournit également des temps de réponse < 1 heure mais est plus cher.
      - **B. Basic** : Ne fournit aucun support technique.
      - **D. Developer** : Fournit un accès par e-mail pendant les heures de bureau.
    </details>

19. Quelle fonctionnalité d'Amazon Rekognition peut aider à gagner du temps ?
    - A. Fournit un accès à la demande à des informations liées à la conformité.
    - B. Identification de la langue du texte dans un document.
    - C. Identification d'objets dans des images et vidéos.
    - D. Ajoute la reconnaissance vocale automatique aux applications.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Identification d'objets dans des images et vidéos** : Amazon Rekognition facilite l'ajout d'analyse d'images et de vidéos à vos applications. Le service peut identifier les objets, personnes, textes, scènes et activités.
    - **Autres options incorrectes** ❌ :
      - **A. Fournit un accès à la demande à des informations liées à la conformité** : Description d'AWS Artifact.
      - **B. Identification de la langue du texte dans un document** : Fonctionnalité d'Amazon Comprehend.
      - **D. Ajoute la reconnaissance vocale automatique aux applications** : Description d'Amazon Transcribe.
    </details>

20. L'infrastructure globale AWS est composée de ? (Choisissez DEUX)
    - A. Zones de défaillance.
    - B. Zones de disponibilité.
    - C. Clusters.
    - D. Régions.
    - E. Sous-réseaux IP.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Zones de disponibilité** : Un ou plusieurs centres de données discrets avec alimentation, réseau et connectivité redondants.
      - **D. Régions** : Emplacements physiques dans le monde où AWS dispose de plusieurs zones de disponibilité.
    - **Autres options incorrectes** ❌ :
      - **A. Zones de défaillance** : N'existe pas dans la terminologie AWS.
      - **C. Clusters** : Non, l'infrastructure est basée sur des régions et des AZ.
      - **E. Sous-réseaux IP** : Composants réseau au sein d'un VPC, pas de l'infrastructure globale.
    </details>

21. Quelle technologie de stockage AWS peut être considérée comme un "disque dur virtuel dans le cloud" ?
    - A. Archive Amazon Glacier.
    - B. Objet Amazon S3.
    - C. Volume Amazon Elastic Block Storage (EBS).
    - D. Système de fichiers Amazon Elastic File Storage (EFS).

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Volume Amazon Elastic Block Storage (EBS)** : Un périphérique de stockage par blocs qui, lorsqu'il est attaché à une instance, apparaît comme un disque local pouvant héberger un système d'exploitation ou être formaté.
    - **Autres options incorrectes** ❌ :
      - **A. Archive Amazon Glacier** : Solution d'archivage pour les objets S3.
      - **B. Objet Amazon S3** : Système de stockage d'objets, ne peut pas être monté comme un disque dur.
      - **D. Système de fichiers Amazon Elastic File Storage (EFS)** : Système de fichiers réseau monté via NFS, pas un disque dur local.
    </details>

22. Quel type de déploiement cloud permet aux clients de tirer parti des avantages du cloud public tout en coexistant avec une infrastructure sur site ?
    - A. Cloud privé.
    - B. Cloud hybride.
    - C. Infrastructure informatique héritée.
    - D. Cloud public.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Cloud hybride** : Un déploiement hybride connecte l'infrastructure et les applications entre des ressources basées sur le cloud et des ressources existantes non localisées dans le cloud.
    - **Autres options incorrectes** ❌ :
      - **A. Cloud privé** : Déploiement de ressources sur site utilisant la virtualisation, ne fournit pas tous les avantages du cloud computing.
      - **C. Infrastructure informatique héritée** : Systèmes non virtualisés ou sans couche de gestion cloud.
      - **D. Cloud public** : Application entièrement déployée dans le cloud.
    </details>

23. Quel service AWS peut être utilisé pour convertir des fichiers vidéo et audio de leur format source en versions lisibles sur des appareils comme smartphones, tablettes et PC ?
    - A. Elastic Transcoder.
    - B. Elastic Beanstalk.
    - C. Auto Scaling.
    - D. Elastic Load Balancer.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Elastic Transcoder** : Service hautement évolutif et économique pour convertir des fichiers vidéo et audio.
    - **Autres options incorrectes** ❌ :
      - **B. Elastic Beanstalk** : Utilisé pour déployer et gérer rapidement des applications dans le cloud AWS.
      - **C. Auto Scaling** : Utilisé pour ajuster automatiquement le nombre d'instances EC2.
      - **D. Elastic Load Balancer** : Distribue les connexions entrantes vers des instances EC2.
    </details>

24. Lesquelles des affirmations suivantes sont exactes concernant les compartiments Amazon S3 ? (Choisissez DEUX)
    - A. Les compartiments sont spécifiques à une région.
    - B. Les compartiments peuvent contenir d'autres compartiments.
    - C. Les noms de compartiments doivent être uniques globalement.
    - D. Les compartiments sont répliqués globalement.
    - E. Les noms de compartiments doivent être uniques régionalement.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Les compartiments sont spécifiques à une région** : Vous créez des compartiments dans une région et les données ne quittent pas cette région sauf configuration explicite.
      - **C. Les noms de compartiments doivent être uniques globalement** : S3 utilise un espace de noms global universel.
    - **Autres options incorrectes** ❌ :
      - **B. Les compartiments peuvent contenir d'autres compartiments** : Faux, vous ne pouvez pas créer de compartiments imbriqués.
      - **D. Les compartiments sont répliqués globalement** : Faux, les objets sont répliqués au sein d'une région sur plusieurs AZ (sauf One-Zone IA).
      - **E. Les noms de compartiments doivent être uniques régionalement** : Faux, ils doivent être uniques globalement.
    </details>

25. Quel est le terme décrivant l'action d'exécuter automatiquement des scripts sur des instances Amazon EC2 lors de leur lancement pour installer des logiciels ?
    - A. Images dorées.
    - B. Amorçage (Bootstrapping).
    - C. Conteneurisation.
    - D. Automatisation des flux de travail.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amorçage (Bootstrapping)** : Exécution d'actions automatisées (généralement des scripts) lors du lancement d'instances pour configurer le logiciel.
    - **Autres options incorrectes** ❌ :
      - **A. Images dorées** : Snapshots de volumes EBS pré-configurés utilisés pour lancer de nouvelles instances.
      - **C. Conteneurisation** : Logiciel empaqueté s'exécutant dans une image Docker.
      - **D. Automatisation des flux de travail** : Processus d'orchestration d'actions automatisées associé à des services comme Chef, Puppet ou AWS OpsWorks.
    </details>

26. Quelle fonctionnalité d'AWS vous permet de déployer une nouvelle application dont les exigences peuvent changer avec le temps ?
    - A. Ressources jetables.
    - B. Tolérance aux pannes.
    - C. Haute disponibilité.
    - D. Élasticité.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Élasticité** : Permet de déployer une application sans se soucier de ses besoins futurs en ressources. L'infrastructure peut évoluer à la demande.
    - **Autres options incorrectes** ❌ :
      - **A. Ressources jetables** : Principe architectural où les serveurs sont traités comme des ressources temporaires.
      - **B. Tolérance aux pannes** et **C. Haute disponibilité** : Mécanismes pour assurer la disponibilité de l'application et se protéger contre les défaillances.
    </details>

27. Quel service de stockage permet de connecter plusieurs instances EC2 simultanément à l'aide de protocoles de niveau fichier ?
    - A. Amazon Glacier.
    - B. Amazon EFS.
    - C. Amazon EBS.
    - D. Amazon S3.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon EFS** : Amazon Elastic File System permet de connecter des centaines ou des milliers d'instances EC2 simultanément et est accessible via le protocole NFS (niveau fichier).
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Glacier** : Utilisé pour l'archivage d'objets S3.
      - **C. Amazon EBS** : Fournit des volumes de niveau bloc à des instances EC2 individuelles (ne peut pas connecter plusieurs instances à un seul volume EBS).
      - **D. Amazon S3** : Système de stockage d'objets.
    </details>

28. Lequel des éléments suivants est une méthode de sauvegarde disponible dans le cloud AWS ?
    - A. Snapshots EBS.
    - B. Enregistrement Alias Route 53.
    - C. Systèmes de fichiers EFS.
    - D. Zones de disponibilité.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Snapshots EBS** : Copies ponctuelles de volumes EBS, utilisées pour sauvegarder vos données.
    - **Autres options incorrectes** ❌ :
      - **B. Enregistrement Alias Route 53** : Type d'enregistrement DNS mappant un nom de domaine public à une cible de service AWS.
      - **C. Systèmes de fichiers EFS** : Service de stockage, pas une méthode de sauvegarde.
      - **D. Zones de disponibilité** : Partie de l'infrastructure globale AWS pour la haute disponibilité, pas une solution de sauvegarde.
    </details>

29. Une entreprise souhaite maximiser ses remises volume et sur les instances réservées sur plusieurs comptes et appliquer des politiques de contrôle des services sur les comptes membres. Quel service ou outil peut-elle utiliser pour bénéficier de ces avantages ?
    - A. AWS Budgets.
    - B. AWS Organizations.
    - C. AWS Cost Explorer.
    - D. AWS IAM.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Organizations** : Permet de créer des groupes de comptes AWS et de gérer centralement les politiques sur ces comptes. Fournit la facturation consolidée et permet d'appliquer des remises volume.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Budgets** : Permet de définir des budgets personnalisés et des alertes de coût.
      - **C. AWS Cost Explorer** : Outil gratuit permettant de visualiser des graphiques de vos coûts.
      - **D. AWS IAM** : Permet de gérer l'accès aux services et ressources AWS.
    </details>

30. Quels types de politiques tarifaires AWS offre-t-il ? (Choisissez DEUX)
    - A. Économisez lorsque vous réservez.
    - B. Remises d'utilisation globale.
    - C. Remises en heures creuses.
    - D. Accord de licence d'entreprise (ELA).
    - E. Paiement à l'usage.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Économisez lorsque vous réservez** : Modèle d'instances réservées.
      - **E. Paiement à l'usage** : Modèle de paiement à l'heure ou à la seconde sans engagement.
    - **Autres options incorrectes** ❌ :
      - **B. Remises d'utilisation globale** : Non offert par AWS.
      - **C. Remises en heures creuses** : Non offert par AWS.
      - **D. Accord de licence d'entreprise (ELA)** : Non offert par AWS.
    </details>

31. Quel modèle de tarification devez-vous utiliser pour des instances EC2 qui seront utilisées dans un environnement de laboratoire pendant plusieurs heures un week-end et doivent s'exécuter sans interruption ?
    - A. Instance dédiée.
    - B. Réservée.
    - C. À la demande.
    - D. Spot.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. À la demande** : Meilleur choix pour cette situation car c'est l'option la plus économique qui garantit aucune interruption.
    - **Autres options incorrectes** ❌ :
      - **A. Instance dédiée** : Instances EC2 exécutées sur du matériel dédié à un seul client.
      - **B. Réservée** : Bon pour les exigences à long terme et statiques car vous devez vous engager pour 1 ou 3 ans.
      - **D. Spot** : Bonnes pour les exigences à court terme car très économiques, mais peuvent être interrompues si le prix du marché spot évolue.
    </details>

32. Quelle stratégie peut aider à attribuer des métadonnées aux ressources AWS pour le suivi des coûts et la visibilité ?
    - A. Étiquetage.
    - B. Catégorisation.
    - C. Marquage (Tagging).
    - D. Contrôle d'accès.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Marquage (Tagging)** : AWS permet aux clients d'attribuer des métadonnées à leurs ressources AWS sous forme d'étiquettes (tags). Chaque étiquette est une simple étiquette composée d'une clé définie par le client et d'une valeur facultative.
    - **Autres options incorrectes** ❌ :
      - **A. Étiquetage** : Terme similaire, mais le terme AWS spécifique est "tagging".
      - **B. Catégorisation** : Non une méthode d'ajout de métadonnées à une ressource AWS.
      - **D. Contrôle d'accès** : Méthode de gestion des autorisations, pas d'ajout de métadonnées.
    </details>

33. Quels éléments peuvent être configurés à partir de la console de gestion VPC ? (Choisissez DEUX)
    - A. Régions.
    - B. Sous-réseaux.
    - C. Groupes de sécurité.
    - D. Équilibrage de charge.
    - E. Mise à l'échelle automatique.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Sous-réseaux** : Peuvent être configurés dans la console VPC.
      - **C. Groupes de sécurité** : Peuvent être configurés dans la console VPC.
    - **Autres options incorrectes** ❌ :
      - **A. Régions** : Non configurées, les ressources au sein des régions sont configurées.
      - **D. Équilibrage de charge** et **E. Mise à l'échelle automatique** : Configurés depuis la console EC2.
    </details>

34. Comment une organisation peut-elle comparer le coût d'exécution d'applications dans un environnement sur site ou en colocation par rapport au cloud AWS ?
    - A. AWS Budgets.
    - B. AWS Simple Monthly Calculator.
    - C. Calculateur TCO.
    - D. AWS Cost Explorer.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Calculateur TCO** : Outil gratuit fourni par AWS qui permet d'estimer les économies de coûts liées à l'utilisation du cloud AWS par rapport à l'utilisation d'un centre de données sur site.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Budgets** : Permet de définir des budgets personnalisés et des alertes de coût.
      - **B. AWS Simple Monthly Calculator** : Aide les clients à estimer leur facture mensuelle AWS plus efficacement.
      - **D. AWS Cost Explorer** : Outil gratuit permettant de visualiser des graphiques de vos coûts.
    </details>

35. Quelle fonctionnalité pouvez-vous utiliser pour accorder un accès en lecture/écriture à un compartiment Amazon S3 ?
    - A. Rôle IAM.
    - B. Utilisateur IAM.
    - C. Groupe IAM.
    - D. Politique IAM.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Politique IAM** : Les politiques IAM sont des documents qui définissent les permissions et peuvent être appliqués aux utilisateurs, groupes et rôles. Vous pouvez écrire des politiques IAM pour accorder l'accès aux compartiments S3.
    - **Autres options incorrectes** ❌ :
      - **A. Rôle IAM** : Créés puis "assumés" par des entités de confiance et définissent un ensemble d'autorisations pour effectuer des requêtes de service AWS.
      - **B. Utilisateur IAM** : Entité qui représente une personne ou un service.
      - **C. Groupe IAM** : Collections d'utilisateurs avec des politiques attachées.
    </details>

36. Pour quels services Amazon ne facture-t-il pas les clients ? (Choisissez DEUX)
    - A. Amazon CloudFormation.
    - B. Amazon EBS.
    - C. Amazon VPC.
    - D. Amazon S3.
    - E. Amazon SNS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Amazon CloudFormation** : Gratuit, cependant vous payez pour les ressources qu'il crée.
      - **C. Amazon VPC** : Gratuit.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon EBS**, **D. Amazon S3**, **E. Amazon SNS** : Tous facturables.
    </details>

37. Selon le modèle de responsabilité partagée, quels sont des exemples de contrôles partagés ? (Choisissez DEUX)
    - A. Gestion de la configuration.
    - B. Physique et environnemental.
    - C. Protection des services et des communications.
    - D. Gestion des correctifs.
    - E. Application des correctifs du système de stockage.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Gestion de la configuration** : AWS est responsable de la configuration de ses dispositifs d'infrastructure, mais un client est responsable de la configuration de ses systèmes d'exploitation invités, bases de données et applications.
      - **D. Gestion des correctifs** : AWS est responsable de l'application des correctifs et de la correction des failles au sein de l'infrastructure, mais les clients sont responsables de l'application des correctifs sur leur système d'exploitation invité et leurs applications.
    - **Autres options incorrectes** ❌ :
      - **B. Physique et environnemental** : Exemple de contrôle hérité (entièrement par AWS).
      - **C. Protection des services et des communications** : Exemple de contrôle spécifique au client.
      - **E. Application des correctifs du système de stockage** : Responsabilité d'AWS.
    </details>

38. Quel service de base de données AWS prend en charge les requêtes complexes et les jointures et convient à un déploiement de base de données transactionnelle ?
    - A. Amazon RDS.
    - B. Amazon EMR.
    - C. Amazon DynamoDB.
    - D. Amazon RedShift.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon RDS** : Prend en charge les requêtes complexes et les jointures et convient à un déploiement de base de données transactionnelle.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon EMR** : Service Hadoop non adapté aux bases de données transactionnelles.
      - **C. Amazon DynamoDB** : Base de données NoSQL qui ne prend pas en charge les requêtes complexes et les jointures.
      - **D. Amazon RedShift** : Entrepôt de données utilisé pour l'analyse, pas pour les bases de données transactionnelles.
    </details>

39. Quelle est la portée d'un VPC au sein d'une région ?
    - A. S'étend sur toutes les zones de disponibilité globalement.
    - B. S'étend sur toutes les zones de disponibilité au sein de la région.
    - C. Au moins 2 centres de données par région.
    - D. Au moins 2 sous-réseaux par région.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. S'étend sur toutes les zones de disponibilité au sein de la région** : Un VPC s'étend sur toutes les zones de disponibilité d'une région.
    - **Autres options incorrectes** ❌ :
      - **A. S'étend sur toutes les zones de disponibilité globalement** : Faux. Les VPC ne s'étendent pas sur les régions.
      - **C. Au moins 2 centres de données par région** : Non pertinent pour la portée d'un VPC.
      - **D. Au moins 2 sous-réseaux par région** : Non, les sous-réseaux sont créés au sein des AZ et vous pouvez avoir de nombreux sous-réseaux dans une AZ.
    </details>

40. Comment AWS aide-t-il les organisations à gérer leurs besoins en capacité ?
    - A. Vous n'avez pas besoin de deviner vos besoins en capacité.
    - B. Avec AWS, vous ne payez pas pour les centres de données.
    - C. Avec AWS, vous ne payez que ce que vous utilisez.
    - D. Vous ne possédez pas l'infrastructure.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Vous n'avez pas besoin de deviner vos besoins en capacité** : La capacité de s'adapter à la demande est l'avantage clé qui peut les aider ici, car ils peuvent déployer ce dont ils ont besoin aujourd'hui et le faire évoluer demain.
    - **Autres options incorrectes** ❌ :
      - **B. Avec AWS, vous ne payez pas pour les centres de données** : Vrai, mais ne répond pas spécifiquement à la question sur la gestion de la capacité.
      - **C. Avec AWS, vous ne payez que ce que vous utilisez** : Vrai, mais ne répond pas spécifiquement à la question sur la gestion de la capacité.
      - **D. Vous ne possédez pas l'infrastructure** : Vrai, mais ne répond pas spécifiquement à la question sur la gestion de la capacité.
    </details>

41. Quel service prend en charge la résolution des noms de domaine publics en adresses IP ou en ressources AWS ?
    - A. Zones hébergées.
    - B. Amazon SNS.
    - C. Amazon CloudFront.
    - D. Amazon Route 53.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon Route 53** : Service DNS hautement disponible et évolutif.
    - **Autres options incorrectes** ❌ :
      - **A. Zones hébergées** : Collection d'enregistrements pour un domaine spécifié dans Route 53.
      - **B. Amazon SNS** : Utilisé pour envoyer des notifications sur plusieurs protocoles de transport.
      - **C. Amazon CloudFront** : Réseau de diffusion de contenu (CDN) permettant de stocker (mettre en cache) votre contenu sur des "emplacements périphériques".
    </details>

42. Quelles sont les considérations lors du choix de la région à utiliser ? (Choisissez DEUX)
    - A. Tarification en monnaie locale.
    - B. Latence.
    - C. Capacité de stockage disponible.
    - D. Capacité de calcul disponible.
    - E. Souveraineté des données.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Latence** : Vous pouvez choisir une région pour réduire la latence.
      - **E. Souveraineté des données** : Pour répondre aux exigences réglementaires concernant l'emplacement des données.
    - **Autres options incorrectes** ❌ :
      - **A. Tarification en monnaie locale** : Les prix des services AWS sont en USD.
      - **C. Capacité de stockage disponible** et **D. Capacité de calcul disponible** : Généralement non préoccupant car AWS dispose d'un vaste pool de ressources et ne divulgue pas la capacité disponible dans chaque région.
    </details>

43. Quelle meilleure pratique architecturale vise à réduire les interdépendances entre les services ?
    - A. Découplage.
    - B. Suppression des points de défaillance uniques.
    - C. Services, pas serveurs.
    - D. Automatisation.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Découplage** : Le concept de découplage comprend des "interfaces bien définies" qui réduisent les interdépendances dans un système en permettant l'interaction uniquement par des interfaces spécifiques et agnostiques de la technologie.
    - **Autres options incorrectes** ❌ :
      - **B. Suppression des points de défaillance uniques** : Principe de haute disponibilité.
      - **C. Services, pas serveurs** : Approche de conception orientée services.
      - **D. Automatisation** : Principe de gestion de l'infrastructure.
    </details>

44. Identifiez les services qui ont une portée globale (plutôt que régionale) ? (Choisissez DEUX)
    - A. AWS Lambda.
    - B. Amazon CloudFront.
    - C. Amazon S3.
    - D. Amazon EC2.
    - E. Amazon Route 53.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Amazon CloudFront** : CDN avec portée globale.
      - **E. Amazon Route 53** : Service DNS avec portée globale.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Lambda** : Service régional.
      - **C. Amazon S3** : Utilise un espace de noms global mais les compartiments et objets sont créés dans une région.
      - **D. Amazon EC2** : Service régional.
    </details>

45. Quel type d'Amazon Elastic Load Balancer opère au niveau 7 du modèle OSI ?
    - A. Classic Load Balancer.
    - B. F5 Load Balancer.
    - C. Application Load Balancer.
    - D. Network Load Balancer.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Application Load Balancer (ALB)** : Équilibreur de charge de niveau 7 qui achemine les connexions en fonction du contenu de la requête.
    - **Autres options incorrectes** ❌ :
      - **A. Classic Load Balancer (CLB)** : Le plus ancien des trois, fournit un équilibrage de charge basique aux niveaux 4 et 7.
      - **B. F5 Load Balancer** : N'est pas un équilibreur de charge Amazon.
      - **D. Network Load Balancer (NLB)** : Équilibreur de charge de niveau 4 qui achemine les connexions en fonction des données de protocole IP.
    </details>

46. Quels avantages Amazon CloudFront fournit-il ? (Choisissez DEUX)
    - A. Le contenu est mis en cache aux emplacements périphériques pour une distribution rapide aux clients.
    - B. Protection intégrée contre les attaques par déni de service distribué (DDoS).
    - C. Fournit un service DNS distribué dans le monde entier.
    - D. Permet d'enregistrer des noms de domaine.
    - E. Utilisé pour permettre aux instances de sous-réseau privé d'accéder à Internet.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Le contenu est mis en cache aux emplacements périphériques pour une distribution rapide aux clients** : CloudFront est un réseau de diffusion de contenu (CDN) qui permet de stocker (mettre en cache) votre contenu sur des "emplacements périphériques" situés dans le monde entier.
      - **B. Protection intégrée contre les attaques par déni de service distribué (DDoS)** : Fournit une sécurité contre les attaques DDoS.
    - **Autres options incorrectes** ❌ :
      - **C. Fournit un service DNS distribué dans le monde entier** : C'est le rôle d'Amazon Route 53.
      - **D. Permet d'enregistrer des noms de domaine** : C'est le rôle d'Amazon Route 53.
      - **E. Utilisé pour permettre aux instances de sous-réseau privé d'accéder à Internet** : C'est le rôle d'une passerelle NAT, pas de CloudFront.
    </details>

47. Une entreprise prévoit de créer une architecture cloud hybride. Quelle technologie leur permettra de créer un cloud hybride ?
    - A. Peering VPC.
    - B. Internet Gateway.
    - C. Interface réseau élastique.
    - D. AWS Direct Connect.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Direct Connect** : Fournit une connexion à faible latence et à haute bande passante pour connecter les environnements sur site au cloud AWS, leur permettant de créer une architecture cloud "hybride".
    - **Autres options incorrectes** ❌ :
      - **A. Peering VPC** : Moyen de permettre le routage entre les VPC dans différents comptes AWS.
      - **B. Internet Gateway** : Utilisé pour connecter des sous-réseaux publics à Internet (sortie).
      - **C. Interface réseau élastique (ENI)** : Composant réseau logique dans un VPC qui représente une carte réseau virtuelle.
    </details>

48. Quel service peut être utilisé pour suivre l'utilisation du CPU d'une instance EC2 ?
    - A. Amazon CloudFront.
    - B. Amazon CloudFormation.
    - C. Amazon CloudWatch.
    - D. Amazon CloudTrail.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon CloudWatch** : Service de surveillance pour les ressources cloud AWS et les applications que vous exécutez sur AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon CloudFront** : Réseau de diffusion de contenu (CDN) qui met en cache le contenu.
      - **B. Amazon CloudFormation** : Utilisé pour le provisionnement automatisé de l'infrastructure.
      - **D. Amazon CloudTrail** : Utilisé pour l'audit des appels d'API.
    </details>

49. Quel service enregistre l'activité des API sur votre compte et fournit des fichiers journaux à un compartiment Amazon S3 ?
    - A. Amazon CloudWatch.
    - B. Amazon S3 Event Notifications.
    - C. Amazon CloudTrail.
    - D. Amazon CloudWatch Logs.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon CloudTrail** : Service web qui enregistre l'activité effectuée sur votre compte et fournit des fichiers journaux à un compartiment Amazon S3.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon CloudWatch** : Pour la surveillance des performances.
      - **B. Amazon S3 Event Notifications** : Fonctionnalité qui vous notifie lorsque certains événements se produisent dans vos compartiments S3, n'enregistre pas l'activité des API au niveau du compte.
      - **D. Amazon CloudWatch Logs** : Vous permet de surveiller et de dépanner vos systèmes et applications en utilisant vos fichiers journaux système, d'application et personnalisés existants.
    </details>

50. Quels sont deux avantages que peut obtenir une organisation en migrant vers le cloud AWS ? (Choisissez DEUX)
    - A. Passer à un modèle CAPEX.
    - B. Augmenter la vitesse et l'agilité.
    - C. Amortir les actifs sur une période plus longue.
    - D. Arrêter de deviner la capacité nécessaire.
    - E. Obtenir un plus grand contrôle de la sécurité du centre de données.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Augmenter la vitesse et l'agilité** : Dans un environnement cloud, de nouvelles ressources informatiques sont à un clic, ce qui réduit le délai de mise à disposition de ces ressources pour vos développeurs de plusieurs semaines à quelques minutes.
      - **D. Arrêter de deviner la capacité nécessaire** : Lorsque vous prenez une décision de capacité avant de déployer une application, vous vous retrouvez souvent avec des ressources chères inutilisées ou avec une capacité limitée. Avec le cloud computing, ces problèmes disparaissent.
    - **Autres options incorrectes** ❌ :
      - **A. Passer à un modèle CAPEX** : Le cloud est basé sur un modèle de dépenses opérationnelles (OPEX), pas un modèle de dépenses en capital (CAPEX).
      - **C. Amortir les actifs sur une période plus longue** : Le cloud ne fournit pas la capacité d'amortir les actifs sur une période plus longue car vous ne possédez généralement pas les actifs.
      - **E. Obtenir un plus grand contrôle de la sécurité du centre de données** : Bien que le cloud AWS fournisse des normes de sécurité importantes pour le centre de données, vous n'obtenez pas plus de contrôle car c'est une responsabilité d'AWS.
    </details>