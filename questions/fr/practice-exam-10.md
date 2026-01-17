---
layout: exam
---

# Examen de pratique 10

1. Lequel des éléments suivants un client AWS peut-il utiliser pour lancer un nouveau cluster Amazon Relational Database Service (Amazon RDS) ? (Choisissez DEUX)
    - A. AWS Concierge.
    - B. AWS CloudFormation.
    - C. Amazon Simple Storage Service (Amazon S3).
    - D. Amazon EC2 Auto Scaling.
    - E. AWS Management Console.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. AWS CloudFormation** : Permet de provisionner des ressources AWS via des modèles, y compris des clusters RDS.
      - **E. AWS Management Console** : Interface web pour créer et gérer des ressources RDS manuellement.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Concierge** : Service de support pour les questions de facturation et de compte (plan Enterprise).
      - **C. Amazon S3** : Service de stockage d'objets, ne lance pas de clusters RDS.
      - **D. Amazon EC2 Auto Scaling** : Pour ajuster le nombre d'instances EC2, pas pour RDS.
    </details>

2. Lequel des modèles de tarification d'instances réservées (RI) offre les économies moyennes les plus importantes par rapport au tarif à la demande ?
    - A. Un an, pas de paiement initial, RI standard.
    - B. Un an, paiement total initial, RI convertible.
    - C. Trois ans, paiement total initial, RI standard.
    - D. Trois ans, pas de paiement initial, RI convertible.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Trois ans, paiement total initial, RI standard** : L'engagement le plus long avec paiement total initial offre la remise la plus élevée.
    - **Autres options incorrectes** ❌ :
      - **A. Un an, pas de paiement initial** : Remise inférieure à un an avec paiement initial.
      - **B. Un an, paiement total initial, convertible** : Les RI convertibles ont une remise inférieure aux RI standard.
      - **D. Trois ans, pas de paiement initial, convertible** : RI convertible et pas de paiement initial, donc remise moindre.
    </details>

3. Lesquelles des fonctionnalités suivantes sont des caractéristiques d'Amazon CloudWatch Logs ? (Choisissez DEUX)
    - A. Résumés par Amazon Simple Notification Service (Amazon SNS).
    - B. Analyse gratuite par Amazon Elasticsearch Service.
    - C. Fourni gratuitement.
    - D. Surveillance en temps réel.
    - E. Rétention ajustable.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : D, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **D. Surveillance en temps réel** : CloudWatch Logs peut surveiller les logs en temps réel.
      - **E. Rétention ajustable** : Vous pouvez définir la période de rétention des logs (de 1 jour à 10 ans).
    - **Autres options incorrectes** ❌ :
      - **A. Résumés par SNS** : SNS est un service de notification, pas une fonctionnalité de CloudWatch Logs.
      - **B. Analyse gratuite par Elasticsearch** : L'intégration avec Elasticsearch (via Amazon ES) est payante.
      - **C. Fourni gratuitement** : CloudWatch Logs a des frais pour l'ingestion, le stockage et la diffusion.
    </details>

4. Lequel des éléments suivants est un service de calcul managé par AWS ?
    - A. Amazon SWF.
    - B. Amazon EC2.
    - C. AWS Lambda.
    - D. Amazon Aurora.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Lambda** : Service de calcul sans serveur entièrement géré où AWS gère l'infrastructure sous-jacente.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon SWF** : Service de flux de travail, pas un service de calcul principal.
      - **B. Amazon EC2** : Service IaaS où le client gère le système d'exploitation et les applications.
      - **D. Amazon Aurora** : Service de base de données relationnelle managée, pas de calcul.
    </details>

5. Une entreprise veut réduire l'empreinte de calcul physique que les développeurs utilisent pour exécuter du code. Quel service répondrait à ce besoin en permettant des architectures sans serveur ?
    - A. Amazon Elastic Compute Cloud (Amazon EC2).
    - B. AWS Lambda.
    - C. Amazon DynamoDB.
    - D. AWS CodeCommit.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Lambda** : Exécute du code sans provisionner ni gérer des serveurs, réduisant ainsi l'empreinte physique.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EC2** : Nécessite la gestion de serveurs virtuels.
      - **C. Amazon DynamoDB** : Base de données, pas de calcul.
      - **D. AWS CodeCommit** : Service de gestion de code source.
    </details>

6. Lequel des éléments suivants est de la responsabilité du client selon le modèle de responsabilité partagée d'AWS ?
    - A. Appliquer des correctifs à l'infrastructure sous-jacente.
    - B. Sécurité physique.
    - C. Appliquer des correctifs aux instances Amazon EC2.
    - D. Appliquer des correctifs à l'infrastructure réseau.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Appliquer des correctifs aux instances Amazon EC2** : Pour les instances EC2 (IaaS), le client est responsable du système d'exploitation invité et des applications.
    - **Autres options incorrectes** ❌ :
      - **A. Correctifs de l'infrastructure sous-jacente** : Responsabilité d'AWS.
      - **B. Sécurité physique** : Responsabilité d'AWS.
      - **D. Correctifs de l'infrastructure réseau** : Responsabilité d'AWS.
    </details>

7. Selon le modèle de responsabilité partagée d'AWS, qui est responsable de la gestion de la configuration ?
    - A. C'est uniquement la responsabilité du client.
    - B. C'est uniquement la responsabilité d'AWS.
    - C. C'est partagé entre AWS et le client.
    - D. Cela ne fait pas partie du modèle de responsabilité partagée d'AWS.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Partagé entre AWS et le client** : AWS gère la configuration de l'infrastructure sous-jacente, le client gère la configuration de ses ressources (OS, applications, etc.).
    - **Autres options incorrectes** ❌ :
      - **A. Uniquement le client** : Faux, AWS a une part de responsabilité.
      - **B. Uniquement AWS** : Faux, le client a une part.
      - **D. Ne fait pas partie du modèle** : Faux, c'est un contrôle partagé.
    </details>

8. Quel service de sécurité reconnaît et classe automatiquement les données sensibles ou la propriété intellectuelle sur AWS ?
    - A. Amazon GuardDuty.
    - B. Amazon Macie.
    - C. Amazon Inspector.
    - D. AWS Shield.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon Macie** : Utilise le machine learning pour découvrir et protéger les données sensibles stockées dans S3.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon GuardDuty** : Service de détection de menaces intelligent.
      - **C. Amazon Inspector** : Évalue la sécurité des applications déployées sur EC2.
      - **D. AWS Shield** : Protection contre les attaques DDoS.
    </details>

9. Lesquels des éléments suivants décrivent le mieux le modèle de tarification d'AWS ? (Choisissez DEUX)
    - A. À terme fixe.
    - B. Paiement à l'usage.
    - C. Colocalisation.
    - D. Planifié.
    - E. Coût variable.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Paiement à l'usage** : Vous payez uniquement pour les services que vous utilisez.
      - **E. Coût variable** : Les coûts varient en fonction de l'utilisation, pas de frais fixes.
    - **Autres options incorrectes** ❌ :
      - **A. À terme fixe** : S'applique aux instances réservées, mais le modèle général est le paiement à l'usage.
      - **C. Colocalisation** : Modèle de centre de données traditionnel, pas AWS.
      - **D. Planifié** : Non, le cloud est élastique et à la demande.
    </details>

10. Selon le modèle de responsabilité partagée, lesquelles des tâches suivantes sont de la responsabilité du client AWS ? (Choisissez DEUX)
    - A. S'assurer que les données de l'application sont chiffrées au repos.
    - B. S'assurer que les serveurs NTP d'AWS sont réglés sur l'heure correcte.
    - C. S'assurer que les utilisateurs ont reçu une formation à la sécurité sur l'utilisation des services AWS.
    - D. S'assurer que l'accès aux centres de données est restreint.
    - E. S'assurer que le matériel est éliminé correctement.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Chiffrement des données au repos** : Le client doit activer et gérer le chiffrement.
      - **C. Formation des utilisateurs à la sécurité** : Le client est responsable de la formation de son personnel.
    - **Autres options incorrectes** ❌ :
      - **B. Serveurs NTP d'AWS** : Géré par AWS.
      - **D. Accès aux centres de données** : Responsabilité d'AWS.
      - **E. Élimination du matériel** : Responsabilité d'AWS.
    </details>

11. Un client utilise plusieurs comptes AWS avec une facturation séparée. Comment le client peut-il profiter des remises volume avec un impact minimal sur les ressources AWS ?
    - A. Créer un compte AWS global et déplacer toutes les ressources AWS vers ce compte.
    - B. S'inscrire à trois ans de tarification d'instances réservées avec paiement initial.
    - C. Utiliser la fonctionnalité de facturation consolidée d'AWS Organizations.
    - D. S'inscrire au plan de support AWS Enterprise pour obtenir des remises volume.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Facturation consolidée via AWS Organizations** : Combine l'utilisation de tous les comptes pour bénéficier des remises volume.
    - **Autres options incorrectes** ❌ :
      - **A. Créer un compte global** : Non nécessaire et perturbateur.
      - **B. Instances réservées pour 3 ans** : Cela réduit les coûts, mais ne regroupe pas l'utilisation de plusieurs comptes.
      - **D. Support Enterprise** : Offre d'autres avantages, mais pas des remises volume automatiques.
    </details>

12. Quel modèle de tarification d'Amazon EC2 offre la remise la plus significative par rapport aux instances à la demande ?
    - A. Instances réservées avec paiement partiel initial pour un terme d'un an.
    - B. Instances réservées avec paiement total initial pour un terme d'un an.
    - C. Instances réservées avec paiement total initial pour un terme de trois ans.
    - D. Instances réservées sans paiement initial pour un terme de trois ans.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Paiement total initial, trois ans** : L'engagement le plus long avec le plus de paiement initial donne la plus grande remise.
    - **Autres options incorrectes** ❌ :
      - **A. Paiement partiel, un an** : Remise inférieure.
      - **B. Paiement total, un an** : Remise inférieure à trois ans.
      - **D. Sans paiement initial, trois ans** : Remise inférieure à celle avec paiement initial.
    </details>

13. Quels services AWS doivent être utilisés pour la lecture/écriture de données en constante évolution ? (Choisissez DEUX)
    - A. Amazon Glacier.
    - B. Amazon RDS.
    - C. AWS Snowball.
    - D. Amazon Redshift.
    - E. Amazon EFS.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Amazon RDS** : Base de données relationnelle pour des données transactionnelles fréquemment mises à jour.
      - **E. Amazon EFS** : Système de fichiers élastique pour partager des données entre instances, avec accès en lecture/écriture.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Glacier** : Archivage à long terme, accès rare.
      - **C. AWS Snowball** : Transfert de données physique.
      - **D. Amazon Redshift** : Entrepôt de données pour l'analyse, pas pour des transactions en temps réel.
    </details>

14. Quel service AWS permet aux utilisateurs d'identifier les modifications apportées à une ressource au fil du temps ?
    - A. Amazon Inspector.
    - B. AWS Config.
    - C. AWS Service Catalog.
    - D. AWS IAM.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Config** : Suit les changements de configuration des ressources et fournit un historique.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Inspector** : Évalue la sécurité des applications.
      - **C. AWS Service Catalog** : Catalogue de services informatiques approuvés.
      - **D. AWS IAM** : Gestion des identités et des accès.
    </details>

15. Selon les meilleures pratiques, comment une application doit-elle être conçue pour s'exécuter dans le cloud AWS ?
    - A. Utiliser des composants étroitement couplés.
    - B. Utiliser des composants faiblement couplés.
    - C. Utiliser des composants rarement couplés.
    - D. Utiliser des composants fréquemment couplés.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Composants faiblement couplés** : Le découplage améliore la résilience, l'évolutivité et la maintenabilité.
    - **Autres options incorrectes** ❌ :
      - **A. Composants étroitement couplés** : Crée des dépendances fortes et des points de défaillance.
      - **C. Rarement couplés** : Terme non standard.
      - **D. Fréquemment couplés** : Terme non standard.
    </details>

16. Quels avantages sont inclus dans le plan de support AWS Business ? (Choisissez DEUX)
    - A. Assistance 24/7 par chat en direct ou appel téléphonique.
    - B. Support d'un Technical Account Manager (TAM) dédié AWS.
    - C. Un nombre illimité de cas et de contacts.
    - D. Temps de réponse de 15 minutes pour les cas d'interruption de système de production.
    - E. Revues opérationnelles annuelles avec des Solutions Architects AWS.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Assistance 24/7 par chat/téléphone** : Inclus dans le plan Business.
      - **C. Nombre illimité de cas et contacts** : Également inclus.
    - **Autres options incorrectes** ❌ :
      - **B. TAM dédié** : Disponible uniquement avec le plan Enterprise.
      - **D. Réponse en 15 minutes** : Pour les cas critiques dans le plan Enterprise (Business a 1 heure).
      - **E. Revues opérationnelles annuelles** : Plan Enterprise.
    </details>

17. Lequel des éléments suivants est un service web de système de noms de domaine (DNS) managé par AWS ?
    - A. Amazon Route 53.
    - B. Amazon Neptune.
    - C. Amazon SageMaker.
    - D. Amazon Lightsail.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon Route 53** : Service DNS scalable et hautement disponible.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Neptune** : Base de données de graphe.
      - **C. Amazon SageMaker** : Service de machine learning.
      - **D. Amazon Lightsail** : Service cloud simplifié avec plans prédéfinis.
    </details>

18. Un utilisateur doit répondre à des exigences de conformité et de licence logicielle qui stipulent qu'une charge de travail doit être hébergée sur un serveur physique. Quelle option de tarification d'instance Amazon EC2 répondra à ces exigences ?
    - A. Hôtes dédiés.
    - B. Instances dédiées.
    - C. Instances Spot.
    - D. Instances réservées.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Hôtes dédiés** : Serveurs physiques dédiés à votre usage, permettant d'utiliser vos licences existantes (BYOL) et de répondre aux exigences de placement physique.
    - **Autres options incorrectes** ❌ :
      - **B. Instances dédiées** : Exécutées sur du matériel dédié, mais ne donnent pas un contrôle au niveau du serveur physique comme les hôtes dédiés.
      - **C. Instances Spot** : Peuvent être interrompues et ne garantissent pas de serveur physique dédié.
      - **D. Instances réservées** : Modèle de facturation, pas de garantie de matériel dédié.
    </details>

19. Lequel des modèles de tarification d'instances réservées (RI) peut changer les attributs du RI tant que l'échange aboutit à la création de RIs de valeur égale ou supérieure ?
    - A. RIs dédiés.
    - B. RIs planifiés.
    - C. RIs convertibles.
    - D. RIs standard.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. RIs convertibles** : Permettent d'échanger l'instance réservée contre une autre avec des attributs différents (famille, OS, location).
    - **Autres options incorrectes** ❌ :
      - **A. RIs dédiés** : Pour les instances dédiées, pas d'échange flexible.
      - **B. RIs planifiés** : Pour des charges de travail prévisibles avec des fenêtres de temps, pas d'échange.
      - **D. RIs standard** : Offrent la remise la plus élevée mais ne permettent pas l'échange (sauf modifications limitées).
    </details>

20. Quel service est le meilleur pour stocker les résultats de requêtes de base de données courantes, ce qui aide à alléger la charge d'accès à la base de données ?
    - A. Amazon Machine Learning.
    - B. Amazon SQS.
    - C. Amazon ElastiCache.
    - D. Stockage d'instance Amazon EC2.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon ElastiCache** : Service de cache en mémoire (Redis/Memcached) pour stocker les résultats de requêtes fréquentes.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Machine Learning** : Service de machine learning (maintenant remplacé par SageMaker).
      - **B. Amazon SQS** : File d'attente de messages.
      - **D. Stockage d'instance EC2** : Stockage temporaire attaché à une instance, non persistant et non partagé.
    </details>

21. Quand une entreprise doit-elle envisager d'utiliser des instances Spot Amazon EC2 ? (Choisissez DEUX)
    - A. Pour des applications non productives.
    - B. Pour des charges de travail avec état.
    - C. Pour des applications qui ne peuvent pas avoir d'interruptions.
    - D. Pour des applications flexibles tolérantes aux pannes.
    - E. Pour des applications de base de données sensibles.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : A, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Applications non productives** : Idéal pour les environnements de test, développement.
      - **D. Applications flexibles tolérantes aux pannes** : Les instances Spot peuvent être interrompues, donc l'application doit être conçue pour cela.
    - **Autres options incorrectes** ❌ :
      - **B. Charges de travail avec état** : Les interruptions peuvent entraîner une perte de données ; nécessite une conception spéciale.
      - **C. Applications sans interruption** : Non adapté.
      - **E. Bases de données sensibles** : Généralement pas adapté en raison du risque d'interruption.
    </details>

22. Quels outils AWS aident à estimer les coûts ? (Choisissez trois)
    - A. Rapport de facturation détaillé.
    - B. Étiquettes d'allocation des coûts.
    - C. AWS Simple Monthly Calculator.
    - D. Calculateur de coût total de possession (TCO) AWS.
    - E. Estimateur de coûts.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : B, C, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Étiquettes d'allocation des coûts** : Permettent de catégoriser les coûts pour une meilleure analyse.
      - **C. AWS Simple Monthly Calculator** : Outil pour estimer les coûts mensuels basés sur l'utilisation prévue.
      - **D. Calculateur TCO AWS** : Compare les coûts entre un environnement sur site et AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Rapport de facturation détaillé** : Montre les coûts passés, pas pour l'estimation future.
      - **E. Estimateur de coûts** : Terme générique, pas un outil AWS spécifique.
    </details>

23. Une entreprise veut se concentrer sur les activités commerciales au lieu de gérer le calcul et la capacité. Quel service AWS peut être utilisé pour ajouter ou supprimer automatiquement des instances Amazon EC2 en fonction de la demande ?
    - A. Elastic Load Balancer.
    - B. Amazon EC2 Auto Scaling.
    - C. Amazon Route 53.
    - D. Amazon CloudFront.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon EC2 Auto Scaling** : Ajuste automatiquement le nombre d'instances EC2 pour répondre à la demande.
    - **Autres options incorrectes** ❌ :
      - **A. Elastic Load Balancer** : Répartit le trafic, mais ne provisionne pas d'instances.
      - **C. Amazon Route 53** : Service DNS.
      - **D. Amazon CloudFront** : CDN.
    </details>

24. Quel est le plan de support AWS minimum qui inclut la gestion des événements d'infrastructure sans frais supplémentaires ?
    - A. Enterprise.
    - B. Business.
    - C. Developer.
    - D. Basic.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Enterprise** : Le plan Enterprise Support inclut Infrastructure Event Management (IEM) sans frais supplémentaires.
    - **Autres options incorrectes** ❌ :
      - **B. Business** : N'inclut pas IEM.
      - **C. Developer** : N'inclut pas IEM.
      - **D. Basic** : N'inclut pas IEM.
    </details>

25. Les clés d'accès dans AWS Identity and Access Management (IAM) sont utilisées pour :
    - A. Se connecter à la console AWS Management Console.
    - B. Effectuer des appels programmatiques à AWS à partir des API AWS.
    - C. Se connecter aux instances Amazon EC2.
    - D. S'authentifier auprès des dépôts AWS CodeCommit.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Appels programmatiques aux API AWS** : Les clés d'accès (ID de clé et clé secrète) authentifient les appels API via CLI, SDK, etc.
    - **Autres options incorrectes** ❌ :
      - **A. Connexion à la console** : Utilise un nom d'utilisateur et un mot de passe (ou MFA).
      - **C. Connexion aux instances EC2** : Utilise des paires de clés SSH (Linux) ou des mots de passe (Windows).
      - **D. Authentification à CodeCommit** : Peut utiliser des clés d'accès, mais aussi des credentials Git.
    </details>

26. Quel service AWS peut être utilisé pour interroger directement des jeux de données stockés dans Amazon S3 à l'aide de SQL standard ?
    - A. AWS Glue.
    - B. AWS Data Pipeline.
    - C. Amazon CloudSearch.
    - D. Amazon Athena.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon Athena** : Service de requête interactive sans serveur qui utilise SQL standard pour analyser des données dans S3.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Glue** : Service ETL (Extract, Transform, Load).
      - **B. AWS Data Pipeline** : Orchestration de données pour le traitement et le déplacement.
      - **C. Amazon CloudSearch** : Service de recherche géré.
    </details>

27. Comment AWS réduit-il le temps de provisionnement des ressources informatiques ?
    - A. Il fournit une plateforme de tickets informatiques en ligne pour les demandes de ressources.
    - B. Il prend en charge les services de validation automatique de code.
    - C. Il permet de provisionner par programme des ressources existantes.
    - D. Il automatise le processus de demande de ressources à partir de la liste des fournisseurs informatiques d'une entreprise.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Provisionnement programmatique de ressources existantes** : AWS fournit des API et des outils d'automatisation comme CloudFormation pour provisionner rapidement des ressources.
    - **Autres options incorrectes** ❌ :
      - **A. Plateforme de tickets** : Non, AWS n'impose pas de tickets.
      - **B. Validation automatique de code** : C'est le rôle des services de développement comme CodeBuild.
      - **D. Automatisation des demandes aux fournisseurs** : AWS est le fournisseur ; le provisionnement est direct via API.
    </details>

28. Quels services AWS peuvent être utilisés pour recueillir des informations sur l'activité du compte AWS ? (Choisissez DEUX)
    - A. Amazon CloudFront.
    - B. AWS Cloud9.
    - C. AWS CloudTrail.
    - D. AWS CloudHSM.
    - E. Amazon CloudWatch.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : C, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. AWS CloudTrail** : Journalise les appels d'API et les actions de gestion.
      - **E. Amazon CloudWatch** : Surveille les métriques et les logs, peut suivre l'activité des ressources.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon CloudFront** : CDN.
      - **B. AWS Cloud9** : IDE cloud.
      - **D. AWS CloudHSM** : Module de sécurité matériel pour le chiffrement.
    </details>

29. Lesquelles des caractéristiques suivantes sont celles d'Amazon S3 ? (Choisissez DEUX)
    - A. Un système de fichiers global.
    - B. Un magasin d'objets.
    - C. Un magasin de fichiers local.
    - D. Un système de fichiers réseau.
    - E. Un système de stockage durable.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Un magasin d'objets** : S3 stocke des objets (fichiers) avec des métadonnées.
      - **E. Un système de stockage durable** : Conçu pour une durabilité de 99,999999999 %.
    - **Autres options incorrectes** ❌ :
      - **A. Système de fichiers global** : Non, S3 n'est pas un système de fichiers montable comme EFS.
      - **C. Magasin de fichiers local** : Non, c'est un service cloud.
      - **D. Système de fichiers réseau** : Décrit EFS ou des systèmes NFS.
    </details>

30. Un utilisateur veut des conseils sur les économies possibles lors de la migration d'un environnement sur site vers AWS. Quel outil est adapté à ce scénario ?
    - A. AWS Budgets.
    - B. Cost Explorer.
    - C. Calculateur de coût total de possession (TCO) AWS.
    - D. Outil AWS Well-Architected.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Calculateur TCO AWS** : Spécialement conçu pour comparer les coûts sur site et AWS.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Budgets** : Pour définir des budgets et des alertes.
      - **B. Cost Explorer** : Pour analyser les coûts passés et actuels d'AWS.
      - **D. Outil Well-Architected** : Pour évaluer l'architecture, pas les coûts.
    </details>

31. Lequel des services suivants est dans la catégorie de plateforme sans serveur d'AWS ?
    - A. Amazon EMR.
    - B. Elastic Load Balancing.
    - C. AWS Lambda.
    - D. AWS Mobile Hub.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Lambda** : Service de calcul sans serveur phare d'AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EMR** : Service de big data, nécessite des clusters.
      - **B. Elastic Load Balancing** : Service de réseau, nécessite une configuration.
      - **D. AWS Mobile Hub** : Plateforme pour les applications mobiles, pas entièrement sans serveur.
    </details>

32. L'utilisation de quelle fonctionnalité ou service AWS permet aux entreprises de suivre et de catégoriser les dépenses de manière détaillée ?
    - A. Étiquettes d'allocation des coûts.
    - B. Facturation consolidée.
    - C. AWS Budgets.
    - D. AWS Marketplace.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Étiquettes d'allocation des coûts** : Permettent d'attribuer des coûts à différents projets, départements, etc.
    - **Autres options incorrectes** ❌ :
      - **B. Facturation consolidée** : Combine les factures de plusieurs comptes, mais ne catégorise pas les dépenses.
      - **C. AWS Budgets** : Définit des budgets, ne catégorise pas les dépenses.
      - **D. AWS Marketplace** : Marché pour acheter des logiciels tiers.
    </details>

33. Lequel des éléments suivants inspecte les environnements AWS pour trouver des opportunités qui peuvent économiser de l'argent pour les utilisateurs et améliorer les performances du système ?
    - A. AWS Cost Explorer.
    - B. AWS Trusted Advisor.
    - C. Facturation consolidée.
    - D. Facturation détaillée.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Trusted Advisor** : Fournit des recommandations dans les domaines coût, performance, sécurité, etc.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Cost Explorer** : Analyse les coûts, mais ne fournit pas de recommandations d'optimisation.
      - **C. Facturation consolidée** : Regroupe les factures, pas d'optimisation.
      - **D. Facturation détaillée** : Données de coûts brutes, pas d'optimisation.
    </details>

34. Des serveurs web exécutés sur Amazon EC2 accèdent à une application héritée fonctionnant dans un centre de données d'entreprise. Quel terme décrirait ce modèle ?
    - A. Cloud-native.
    - B. Réseau de partenaires.
    - C. Architecture hybride.
    - D. Infrastructure as a service.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Architecture hybride** : Combine des ressources cloud (EC2) et des ressources sur site (application héritée).
    - **Autres options incorrectes** ❌ :
      - **A. Cloud-native** : Application conçue pour le cloud, pas pour l'héritage.
      - **B. Réseau de partenaires** : Non pertinent.
      - **D. Infrastructure as a service** : Décrit EC2, mais pas l'ensemble de l'architecture.
    </details>

35. Quelle technologie permet à la capacité de calcul de s'ajuster en fonction des changements de charge ?
    - A. Équilibrage de charge.
    - B. Basculement automatique.
    - C. Tourniquet (round robin).
    - D. Auto Scaling.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Auto Scaling** : Ajuste automatiquement le nombre d'instances en fonction de la demande.
    - **Autres options incorrectes** ❌ :
      - **A. Équilibrage de charge** : Répartit le trafic, mais n'ajuste pas la capacité.
      - **B. Basculement automatique** : Pour la haute disponibilité, pas pour l'ajustement de capacité.
      - **C. Tourniquet** : Méthode de répartition de charge, pas d'ajustement de capacité.
    </details>

36. Quel service AWS est une base de données NoSQL managée ?
    - A. Amazon Redshift.
    - B. Amazon DynamoDB.
    - C. Amazon Aurora.
    - D. Amazon RDS pour MariaDB.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon DynamoDB** : Base de données NoSQL clé-valeur et document entièrement gérée.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Redshift** : Entrepôt de données relationnel.
      - **C. Amazon Aurora** : Base de données relationnelle.
      - **D. Amazon RDS pour MariaDB** : Base de données relationnelle.
    </details>

37. Lequel des éléments suivants est une relation correcte entre les régions, les zones de disponibilité et les emplacements périphériques ?
    - A. Les centres de données contiennent des régions.
    - B. Les régions contiennent des zones de disponibilité.
    - C. Les zones de disponibilité contiennent des emplacements périphériques.
    - D. Les emplacements périphériques contiennent des régions.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Les régions contiennent des zones de disponibilité** : Une région est une zone géographique avec plusieurs AZ isolées.
    - **Autres options incorrectes** ❌ :
      - **A. Les centres de données contiennent des régions** : Non, une région contient plusieurs centres de données (AZ).
      - **C. Les AZ contiennent des emplacements périphériques** : Non, les edge locations sont des sites distincts pour CloudFront.
      - **D. Les edge locations contiennent des régions** : Non, c'est l'inverse.
    </details>

38. Quelle approche pour transcoder un grand nombre de fichiers vidéo individuels adhère aux principes d'architecture AWS ?
    - A. Utiliser de nombreuses instances en parallèle.
    - B. Utiliser une seule grande instance pendant les heures creuses.
    - C. Utiliser du matériel dédié.
    - D. Utiliser un type d'instance GPU grande.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Utiliser de nombreuses instances en parallèle** : Principe de parallélisation et d'élasticité ; traiter plusieurs fichiers simultanément avec des instances multiples.
    - **Autres options incorrectes** ❌ :
      - **B. Une seule grande instance** : Non élastique et non parallèle.
      - **C. Matériel dédié** : Contraire à l'approche cloud élastique.
      - **D. Grande instance GPU** : Peut être approprié pour le traitement vidéo, mais ne suit pas nécessairement le principe de parallélisation.
    </details>

39. Quels services AWS peuvent héberger une base de données Microsoft SQL Server ? (Choisissez DEUX)
    - A. Amazon EC2.
    - B. Amazon Relational Database Service (Amazon RDS).
    - C. Amazon Aurora.
    - D. Amazon Redshift.
    - E. Amazon S3.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonnes réponses : A, B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Amazon EC2** : Installez et gérez vous-même SQL Server sur une instance EC2.
      - **B. Amazon RDS** : Service managé qui prend en charge SQL Server comme moteur de base de données.
    - **Autres options incorrectes** ❌ :
      - **C. Amazon Aurora** : Compatible MySQL et PostgreSQL, pas SQL Server.
      - **D. Amazon Redshift** : Entrepôt de données, pas pour SQL Server transactionnel.
      - **E. Amazon S3** : Stockage d'objets, pas de base de données.
    </details>

40. Quelle fonctionnalité AWS IAM permet aux développeurs d'accéder aux services AWS via l'AWS CLI ?
    - A. Clés API.
    - B. Clés d'accès.
    - C. Noms d'utilisateur/Mots de passe.
    - D. Clés SSH.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Clés d'accès** : Composées d'un ID de clé d'accès et d'une clé secrète, utilisées pour authentifier les appels CLI/API.
    - **Autres options incorrectes** ❌ :
      - **A. Clés API** : Terme générique ; les clés d'accès sont le type spécifique.
      - **C. Noms d'utilisateur/Mots de passe** : Pour la console, pas CLI.
      - **D. Clés SSH** : Pour se connecter aux instances EC2.
    </details>

41. L'utilisateur est entièrement responsable de quelle action lors de l'exécution de charges de travail sur AWS ?
    - A. Appliquer des correctifs aux composants d'infrastructure.
    - B. Maintenir les composants d'infrastructure sous-jacents.
    - C. Maintenir les contrôles physiques et environnementaux.
    - D. Mettre en œuvre des contrôles pour router le trafic applicatif.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Contrôles de routage du trafic applicatif** : Le client configure les groupes de sécurité, les règles de routage, les équilibreurs de charge, etc.
    - **Autres options incorrectes** ❌ :
      - **A. Correctifs des composants d'infrastructure** : Responsabilité d'AWS.
      - **B. Maintenance de l'infrastructure sous-jacente** : Responsabilité d'AWS.
      - **C. Contrôles physiques et environnementaux** : Responsabilité d'AWS.
    </details>

42. Quel plan de support AWS inclut un Technical Account Manager dédié ?
    - A. Developer.
    - B. Enterprise.
    - C. Business.
    - D. Basic.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Enterprise** : Le plan Enterprise Support fournit un TAM dédié.
    - **Autres options incorrectes** ❌ :
      - **A. Developer** : Pas de TAM.
      - **C. Business** : Pas de TAM.
      - **D. Basic** : Pas de TAM.
    </details>

43. Quel avantage de gain de temps est offert avec l'utilisation d'Amazon Rekognition ?
    - A. Amazon Rekognition fournit un watermarking automatique des images.
    - B. Amazon Rekognition fournit une détection automatique des objets apparaissant dans les images.
    - C. Amazon Rekognition permet de redimensionner automatiquement des millions d'images.
    - D. Amazon Rekognition utilise Amazon Mechanical Turk pour permettre aux humains de soumissionner sur des travaux de détection d'objets.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Détection automatique d'objets dans les images** : Rekognition utilise le machine learning pour analyser des images et détecter des objets, visages, textes, etc.
    - **Autres options incorrectes** ❌ :
      - **A. Watermarking automatique** : Non, ce n'est pas une fonctionnalité principale.
      - **C. Redimensionnement d'images** : C'est le rôle d'autres services (par exemple, AWS Lambda avec bibliothèques de traitement d'images).
      - **D. Utilisation de Mechanical Turk** : Non, Rekognition est entièrement automatisé.
    </details>

44. Quel service AWS peut être utilisé pour mettre automatiquement à l'échelle une application vers le haut et vers le bas sans prendre de décisions de planification de capacité ?
    - A. Amazon AutoScaling.
    - B. Amazon Redshift.
    - C. AWS CloudTrail.
    - D. AWS Lambda.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon AutoScaling** : Ajuste automatiquement le nombre d'instances EC2 en fonction de la demande.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Redshift** : Entrepôt de données, pas de mise à l'échelle automatique d'applications.
      - **C. AWS CloudTrail** : Journalisation.
      - **D. AWS Lambda** : Mise à l'échelle automatique, mais pour des fonctions, pas pour des applications générales sur EC2.
    </details>

45. Amazon Relational Database Service (Amazon RDS) offre lequel des avantages suivants par rapport à la gestion de base de données traditionnelle ?
    - A. AWS gère les données stockées dans les tables Amazon RDS.
    - B. AWS gère la maintenance du système d'exploitation.
    - C. AWS met automatiquement à l'échelle les types d'instances à la demande.
    - D. AWS gère le type de base de données.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS gère la maintenance du système d'exploitation** : RDS applique les correctifs du système d'exploitation sous-jacent et du moteur de base de données.
    - **Autres options incorrectes** ❌ :
      - **A. AWS gère les données** : Non, le client gère les données et le schéma.
      - **C. Mise à l'échelle automatique des types d'instances** : Non, le client doit modifier le type d'instance manuellement ou via scripts.
      - **D. AWS gère le type de base de données** : Le client choisit le moteur (MySQL, PostgreSQL, etc.).
    </details>

46. L'application web d'une entreprise a actuellement de légères dépendances sur les composants sous-jacents, de sorte que lorsqu'un composant échoue, l'ensemble de l'application web échoue. L'application de quel principe de conception du cloud AWS résoudra le problème de conception actuel ?
    - A. Mettre en œuvre l'élasticité permettant à l'application de monter ou descendre en puissance selon les changements de demande.
    - B. Permettre à plusieurs instances EC2 de s'exécuter en parallèle pour obtenir de meilleures performances.
    - C. Se concentrer sur le découplage des composants en les isolant et en s'assurant que les composants individuels peuvent fonctionner lorsque d'autres composants tombent en panne.
    - D. Doubler les ressources de calcul EC2 pour augmenter la tolérance aux pannes du système.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Découplage des composants** : Réduit les interdépendances, rendant l'application plus résiliente aux défaillances individuelles.
    - **Autres options incorrectes** ❌ :
      - **A. Élasticité** : Pour l'ajustement de capacité, pas pour la tolérance aux pannes.
      - **B. Instances en parallèle** : Améliore les performances, mais ne résout pas les dépendances.
      - **D. Doubler les ressources** : Augmente la capacité, mais pas la résilience si les composants sont toujours couplés.
    </details>

47. Un client souhaite concevoir et construire une nouvelle charge de travail sur le cloud AWS mais ne dispose pas de l'expertise technique logicielle liée à AWS en interne. Lequel des programmes AWS suivants le client peut-il utiliser pour atteindre cet objectif ?
    - A. AWS Partner Network Technology Partners.
    - B. AWS Marketplace.
    - C. AWS Partner Network Consulting Partners.
    - D. AWS Service Catalog.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Partner Network Consulting Partners** : Partenaires de conseil qui aident à concevoir, architecturer, migrer et gérer des charges de travail sur AWS.
    - **Autres options incorrectes** ❌ :
      - **A. APN Technology Partners** : Fournissent des logiciels fonctionnant sur AWS.
      - **B. AWS Marketplace** : Marché pour acheter des logiciels tiers.
      - **D. AWS Service Catalog** : Permet de créer des catalogues de services IT approuvés.
    </details>

48. Quel service stocke des objets, fournit un accès en temps réel à ces objets et offre des capacités de versioning et de cycle de vie ?
    - A. Amazon Glacier.
    - B. AWS Storage Gateway.
    - C. Amazon S3.
    - D. Amazon EBS.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon S3** : Offre le stockage d'objets avec accès en temps réel, versioning des objets et règles de cycle de vie pour transitionner vers des classes de stockage moins chères.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Glacier** : Archivage, pas d'accès en temps réel.
      - **B. AWS Storage Gateway** : Connecteur de stockage hybride.
      - **D. Amazon EBS** : Stockage par blocs pour EC2, pas d'objets ni de versioning.
    </details>

49. La distribution des charges de travail sur plusieurs zones de disponibilité soutient quel principe de conception d'architecture cloud ?
    - A. Mettre en œuvre l'automatisation.
    - B. Concevoir pour l'agilité.
    - C. Concevoir pour l'échec.
    - D. Mettre en œuvre l'élasticité.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Concevoir pour l'échec** : En répartissant sur plusieurs AZ, vous prévoyez la défaillance d'une zone.
    - **Autres options incorrectes** ❌ :
      - **A. Automatisation** : Non directement lié à l'utilisation de plusieurs AZ.
      - **B. Agilité** : Capacité à répondre rapidement aux changements.
      - **D. Élasticité** : Ajustement de la capacité.
    </details>

50. Quel service un client doit-il utiliser pour consolider et gérer centralement plusieurs comptes AWS ?
    - A. AWS IAM.
    - B. AWS Organizations.
    - C. AWS Schema Conversion Tool.
    - D. AWS Config.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Bonne réponse : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Organizations** : Service de gestion de plusieurs comptes AWS avec facturation consolidée et politiques centralisées.
    - **Autres options incorrectes** ❌ :
      - **A. AWS IAM** : Gère les accès au sein d'un compte.
      - **C. AWS Schema Conversion Tool** : Aide à migrer des schémas de base de données.
      - **D. AWS Config** : Audite la configuration des ressources.
    </details>