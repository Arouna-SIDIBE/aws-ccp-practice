---
layout: exam
---

# Examen de pratique 17

1. Quel avantage en termes de gain de temps est offert par l'utilisation d'Amazon Rekognition ?
    - A. Amazon Rekognition fournit un filigrane automatique des images.
    - B. Amazon Rekognition fournit la détection automatique des objets apparaissant dans les images.
    - C. Amazon Rekognition fournit la capacité de redimensionner automatiquement des millions d'images.
    - D. Amazon Rekognition utilise Amazon Mechanical Turk pour permettre aux humains de faire des offres sur des travaux de détection d'objets.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon Rekognition fournit la détection automatique des objets apparaissant dans les images** : Rekognition Image est un service de reconnaissance d'images qui détecte les objets, scènes et visages ; extrait le texte ; reconnaît les célébrités ; et identifie les contenus inappropriés.
    - **Autres options incorrectes** ❌ :
      - **A. Filigrane automatique** : Non, Rekognition ne fait pas de filigrane.
      - **C. Redimensionnement d'images** : Ce n'est pas sa fonction.
      - **D. Utilisation d'Amazon Mechanical Turk** : Rekognition utilise l'apprentissage automatique, pas le crowdsourcing.
    </details>

2. Lors de la comparaison d'AWS avec le coût total de possession (TCO) sur site, quels coûts sont inclus ?
    - A. Sécurité du centre de données
    - B. Analyse métier
    - C. Gestion de projet
    - D. Administration du système d'exploitation

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Sécurité du centre de données** : Le TCO Calculator inclut les coûts de sécurité physique des centres de données sur site.
    - **Autres options incorrectes** ❌ :
      - **B. Analyse métier** : Coût indirect, non inclus dans le TCO.
      - **C. Gestion de projet** : Coût indirect.
      - **D. Administration du système d'exploitation** : Responsabilité du client dans les deux modèles, mais peut être réduite avec des services managés.
    </details>

3. Selon le modèle de responsabilité partagée d'AWS, de quoi AWS est-il responsable ?
    - A. Configuration d'Amazon VPC
    - B. Gestion du code d'application
    - C. Maintenance du trafic d'application
    - D. Gestion de l'infrastructure réseau

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Gestion de l'infrastructure réseau** : AWS est responsable de l'infrastructure réseau physique (routeurs, commutateurs, câbles).
    - **Autres options incorrectes** ❌ :
      - **A. Configuration d'Amazon VPC** : Le client configure son VPC.
      - **B. Gestion du code d'application** : Responsabilité du client.
      - **C. Maintenance du trafic d'application** : Le client gère son trafic d'application.
    </details>

4. Quel service doit être utilisé pour estimer les coûts d'exécution d'un nouveau projet sur AWS ?
    - A. AWS TCO Calculator
    - B. AWS Simple Monthly Calculator
    - C. AWS Cost Explorer API
    - D. AWS Budgets

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Cost Explorer API** : Cost Explorer permet de prévoir les coûts en utilisant des étiquettes d'allocation de coûts pour regrouper les ressources et estimer les coûts par groupe.
    - **Autres options incorrectes** ❌ :
      - **A. AWS TCO Calculator** : Compare les coûts sur site et cloud, pas pour estimer les coûts d'un nouveau projet.
      - **B. AWS Simple Monthly Calculator** : Outil manuel pour estimer les coûts, moins précis que Cost Explorer.
      - **D. AWS Budgets** : Pour définir des budgets et des alertes, pas pour estimer les coûts initiaux.
    </details>

5. Quel outil AWS identifiera les groupes de sécurité qui accordent un accès Internet sans restriction à une liste limitée de ports ?
    - A. AWS Organizations
    - B. AWS Trusted Advisor
    - C. AWS Usage Report
    - D. Amazon EC2 dashboard

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Trusted Advisor** : Vérifie les groupes de sécurité ayant des règles trop permissives (par exemple, accès ouvert à Internet) et fournit des recommandations.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Organizations** : Pour gérer plusieurs comptes, pas pour auditer les groupes de sécurité.
      - **C. AWS Usage Report** : Rapport d'utilisation, pas de sécurité.
      - **D. Amazon EC2 dashboard** : Permet de voir manuellement les groupes de sécurité, mais pas d'analyse automatisée.
    </details>

6. Quel service AWS peut être utilisé pour générer des alertes basées sur une facture mensuelle estimée ?
    - A. AWS Config
    - B. Amazon CloudWatch
    - C. AWS X-Ray
    - D. AWS CloudTrail

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon CloudWatch** : Permet de surveiller les frais estimés d'AWS et de créer des alarmes de facturation qui envoient des notifications via SNS lorsque des seuils sont dépassés.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Config** : Audit de configuration.
      - **C. AWS X-Ray** : Traçage d'applications.
      - **D. AWS CloudTrail** : Journalisation des API.
    </details>

7. Quel modèle de tarification Amazon EC2 offre la remise la PLUS significative par rapport aux instances à la demande ?
    - A. Instances réservées partiellement payées d'avance pour un terme de 1 an
    - B. Instances réservées entièrement payées d'avance pour un terme de 1 an
    - C. Instances réservées entièrement payées d'avance pour un terme de 3 ans
    - D. Instances réservées sans paiement initial pour un terme de 3 ans

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Instances réservées entièrement payées d'avance pour un terme de 3 ans** : Offre la remise la plus élevée car vous vous engagez pour une durée plus longue et payez tout d'avance.
    - **Autres options incorrectes** ❌ :
      - **A. Instances réservées partiellement payées d'avance pour 1 an** : Remise inférieure à celle d'un paiement complet.
      - **B. Instances réservées entièrement payées d'avance pour 1 an** : Remise inférieure à celle d'un engagement de 3 ans.
      - **D. Instances réservées sans paiement initial pour 3 ans** : Remise inférieure à celle d'un paiement initial.
    </details>

8. Lequel des éléments suivants est de la responsabilité d'AWS ?
    - A. Configurer les utilisateurs et groupes AWS Identity and Access Management (IAM)
    - B. Détruire physiquement les supports de stockage en fin de vie
    - C. Appliquer des correctifs aux systèmes d'exploitation invités
    - D. Configurer les paramètres de sécurité sur les instances Amazon EC2

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Détruire physiquement les supports de stockage en fin de vie** : AWS suit des procédures strictes (comme NIST 800-88) pour la décommission sécurisée des médias.
    - **Autres options incorrectes** ❌ :
      - **A. Configurer IAM** : Responsabilité du client.
      - **C. Appliquer des correctifs aux OS invités** : Responsabilité du client.
      - **D. Configurer les paramètres de sécurité EC2** : Responsabilité du client.
    </details>

9. Lequel des éléments suivants est un avantage de l'utilisation d'AWS ?
    - A. AWS audite les données utilisateur.
    - B. Les données sont automatiquement sécurisées.
    - C. Il n'y a pas à deviner les besoins en capacité.
    - D. AWS gère les besoins de conformité.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Il n'y a pas à deviner les besoins en capacité** : AWS permet d'accéder à autant ou aussi peu de capacité que nécessaire et de monter ou descendre en charge en quelques minutes.
    - **Autres options incorrectes** ❌ :
      - **A. AWS audite les données utilisateur** : Non, le client est responsable de ses données.
      - **B. Les données sont automatiquement sécurisées** : La sécurité est une responsabilité partagée ; le client doit configurer les mesures de sécurité.
      - **D. AWS gère les besoins de conformité** : AWS fournit des environnements conformes, mais le client doit assurer la conformité de ses applications.
    </details>

10. Quel service AWS un client utiliserait-il avec un site web statique pour obtenir une faible latence et des vitesses de transfert élevées ?
    - A. AWS Lambda
    - B. Amazon DynamoDB Accelerator
    - C. Amazon Route 53
    - D. Amazon CloudFront

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon CloudFront** : CDN qui diffuse du contenu statique et dynamique avec faible latence et vitesses élevées grâce à des emplacements périphériques mondiaux.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Lambda** : Calcul sans serveur, pas pour la diffusion de contenu.
      - **B. Amazon DynamoDB Accelerator** : Cache en mémoire pour DynamoDB.
      - **C. Amazon Route 53** : Service DNS.
    </details>

11. Quels services gèrent et automatisent les déploiements d'applications sur AWS ? (Choisissez deux.)
    - A. AWS Elastic Beanstalk
    - B. AWS CodeCommit
    - C. AWS Data Pipeline
    - D. AWS CloudFormation
    - E. AWS Config

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A, D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS Elastic Beanstalk** : Automatise le déploiement, le provisionnement de capacité, l'équilibrage de charge, la mise à l'échelle et la surveillance.
      - **D. AWS CloudFormation** : Automatise le provisionnement d'infrastructure via des modèles (infrastructure as code).
    - **Autres options incorrectes** ❌ :
      - **B. AWS CodeCommit** : Contrôle de version de code.
      - **C. AWS Data Pipeline** : Orchestration de données.
      - **E. AWS Config** : Audit de configuration.
    </details>

12. Un utilisateur veut des conseils sur les économies possibles lors de la migration du sur site vers AWS. <br/> Quel outil convient à ce scénario ?
    - A. AWS Budgets
    - B. Cost Explorer
    - C. AWS Total Cost of Ownership (TCO) Calculator
    - D. AWS Well-Architected Tool

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Total Cost of Ownership (TCO) Calculator** : Fournit des indications sur les économies potentielles lors du déploiement d'AWS par rapport à un environnement sur site.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Budgets** : Pour gérer les budgets AWS.
      - **B. Cost Explorer** : Pour analyser les coûts AWS.
      - **D. AWS Well-Architected Tool** : Pour évaluer l'architecture des charges de travail.
    </details>

13. Quels principes sont utilisés pour architecturer des applications pour la fiabilité sur le cloud AWS ? (Choisissez deux.)
    - A. Concevoir pour la reprise automatique après défaillance
    - B. Utiliser plusieurs zones de disponibilité
    - C. Gérer les changements via des processus documentés
    - D. Tester pour une demande modérée pour garantir la fiabilité
    - E. Sauvegarder la récupération vers un environnement sur site

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A, B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. Concevoir pour la reprise automatique après défaillance** : La fiabilité inclut la capacité à récupérer automatiquement des défaillances.
      - **B. Utiliser plusieurs zones de disponibilité** : Répartir les ressources sur plusieurs AZ augmente la disponibilité et la tolérance aux pannes.
    - **Autres options incorrectes** ❌ :
      - **C. Gérer les changements via des processus documentés** : Relève de l'excellence opérationnelle.
      - **D. Tester pour une demande modérée** : Non, il faut tester pour les pics.
      - **E. Sauvegarder vers un environnement sur site** : Pas une pratique cloud typique ; privilégier le cloud.
    </details>

14. Quelles tâches un client doit-il effectuer lorsqu'il soupçonne qu'un compte AWS a été compromis ? (Choisissez deux.)
    - A. Faire tourner les mots de passe et les clés d'accès.
    - B. Supprimer les jetons MFA.
    - C. Déplacer les ressources vers une autre région AWS.
    - D. Supprimer les ressources AWS CloudTrail.
    - E. Contacter le support AWS.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A, E
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. Faire tourner les mots de passe et les clés d'accès** : Pour invalider les anciennes informations d'identification compromises.
      - **E. Contacter le support AWS** : Pour obtenir de l'aide et signaler l'incident.
    - **Autres options incorrectes** ❌ :
      - **B. Supprimer les jetons MFA** : Cela réduirait la sécurité ; il faut plutôt réinitialiser MFA.
      - **C. Déplacer les ressources vers une autre région** : Non, cela n'aide pas à résoudre la compromission.
      - **D. Supprimer les ressources CloudTrail** : Cela supprimerait les journaux d'audit, ce qui est contre-productif.
    </details>

15. Qu'est-ce qu'un exemple de haute disponibilité dans le cloud AWS ?
    - A. Consulter le support technique AWS à tout moment, jour et nuit
    - B. S'assurer qu'une application reste accessible, même si une ressource échoue
    - C. Rendre n'importe quel service AWS disponible à l'utilisation en payant à la demande
    - D. Déployer dans n'importe quelle partie du monde en utilisant les régions AWS

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. S'assurer qu'une application reste accessible, même si une ressource échoue** : La haute disponibilité est la capacité d'un système à rester opérationnel malgré des défaillances de composants.
    - **Autres options incorrectes** ❌ :
      - **A. Support technique 24/7** : C'est un service de support, pas de la haute disponibilité.
      - **C. Paiement à la demande** : Modèle de tarification.
      - **D. Déploiement mondial** : Portée globale, pas nécessairement haute disponibilité.
    </details>

16. Quel service de sécurité AWS protège les applications contre les attaques par déni de service distribué avec une détection toujours active et des atténuations en ligne automatiques ?
    - A. Amazon Inspector
    - B. AWS Web Application Firewall (AWS WAF)
    - C. Elastic Load Balancing (ELB)
    - D. AWS Shield

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Shield** : Service de protection DDoS managé avec détection toujours active et atténuation automatique. Shield Standard est inclus gratuitement ; Shield Advanced offre une protection avancée.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Inspector** : Évaluation de sécurité automatisée.
      - **B. AWS WAF** : Pare-feu d'application web pour protéger contre les exploits courants (couche 7).
      - **C. Elastic Load Balancing** : Répartit le trafic, mais ne protège pas spécifiquement contre les DDoS.
    </details>

17. Une entreprise veut surveiller l'utilisation du CPU de ses ressources Amazon EC2. <br/> Quel service AWS l'entreprise doit-elle utiliser ?
    - A. AWS CloudTrail
    - B. Amazon CloudWatch
    - C. AWS Cost and Usage report
    - D. Amazon Simple Notification Service (Amazon SNS)

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon CloudWatch** : Collecte des métriques (comme l'utilisation du CPU) et permet de définir des alarmes et des tableaux de bord.
    - **Autres options incorrectes** ❌ :
      - **A. AWS CloudTrail** : Journalisation des API.
      - **C. AWS Cost and Usage report** : Rapports de coûts.
      - **D. Amazon SNS** : Service de notification.
    </details>

18. Qu'est-ce qu'un rôle AWS Identity and Access Management (IAM) ?
    - A. Un utilisateur associé à une ressource AWS
    - B. Un groupe associé à une ressource AWS
    - C. Une entité qui définit un ensemble d'autorisations pour une utilisation avec une ressource AWS
    - D. Une information d'authentification associée à un jeton d'authentification multi-facteurs (MFA)

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Une entité qui définit un ensemble d'autorisations pour une utilisation avec une ressource AWS** : Un rôle IAM est une identité avec des politiques d'autorisations qui peut être assumée par des utilisateurs, applications ou services AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Un utilisateur associé à une ressource** : Un utilisateur IAM est une identité humaine ou système.
      - **B. Un groupe associé à une ressource** : Un groupe IAM contient des utilisateurs.
      - **D. Information d'authentification associée à MFA** : MFA est un dispositif de sécurité.
    </details>

19. Quels sont les avantages des instances réservées ? (Choisissez deux.)
    - A. Elles offrent une remise par rapport aux tarifs à la demande.
    - B. Elles donnent accès à des types d'instances supplémentaires.
    - C. Elles fournissent des capacités de réseautage supplémentaires.
    - D. Les clients peuvent mettre à niveau les instances à mesure que de nouveaux types deviennent disponibles.
    - E. Les clients peuvent réserver de la capacité dans une zone de disponibilité.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A, E
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. Elles offrent une remise par rapport aux tarifs à la demande** : Jusqu'à 75 % de réduction.
      - **E. Les clients peuvent réserver de la capacité dans une zone de disponibilité** : Les instances réservées offrent une réservation de capacité dans une AZ spécifique (pour les instances réservées zonales).
    - **Autres options incorrectes** ❌ :
      - **B. Accès à des types d'instances supplémentaires** : Non, mêmes types que les instances à la demande.
      - **C. Capacités de réseautage supplémentaires** : Non.
      - **D. Mise à niveau des instances** : Les instances réservées standard ne permettent pas de changer de famille d'instance ; les instances convertibles le permettent avec certaines limitations.
    </details>

20. Comment les groupes de mise à l'échelle automatique Amazon EC2 aident-ils à atteindre une haute disponibilité pour une application web ?
    - A. Ils ajoutent automatiquement plus d'instances dans plusieurs régions AWS en fonction de la demande mondiale de l'application.
    - B. Ils ajoutent ou remplacent automatiquement des instances dans plusieurs zones de disponibilité lorsque l'application en a besoin.
    - C. Ils permettent au contenu statique de l'application de résider plus près des utilisateurs finaux.
    - D. Ils sont capables de distribuer les requêtes entrantes sur un niveau d'instances de serveur web.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Ils ajoutent ou remplacent automatiquement des instances dans plusieurs zones de disponibilité lorsque l'application en a besoin** : Auto Scaling maintient le nombre d'instances souhaité et les répartit sur plusieurs AZ pour la tolérance aux pannes.
    - **Autres options incorrectes** ❌ :
      - **A. Ajout d'instances dans plusieurs régions** : Auto Scaling fonctionne au niveau de la région, pas multi-régions.
      - **C. Contenu statique plus proche des utilisateurs** : C'est le rôle de CloudFront.
      - **D. Distribution des requêtes entrantes** : C'est le rôle de l'équilibreur de charge.
    </details>

21. Comment un compte AWS peut-il utiliser des instances réservées d'un autre compte AWS ?
    - A. En utilisant des instances dédiées Amazon EC2
    - B. En utilisant la facturation consolidée d'AWS Organizations
    - C. En utilisant l'outil AWS Cost Explorer
    - D. En utilisant AWS Budgets

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. En utilisant la facturation consolidée d'AWS Organizations** : Les remises des instances réservées sont partagées entre tous les comptes membres d'une organisation.
    - **Autres options incorrectes** ❌ :
      - **A. Instances dédiées** : Matériel dédié, pas de partage de remises.
      - **C. AWS Cost Explorer** : Analyse des coûts, pas de partage.
      - **D. AWS Budgets** : Gestion des budgets.
    </details>

22. Un client exécute une instance Amazon Linux EC2 à la demande pendant 3 heures, 5 minutes et 6 secondes. <br/> Pendant combien de temps le client sera-t-il facturé ?
    - A. 3 heures, 5 minutes
    - B. 3 heures, 5 minutes et 6 secondes
    - C. 3 heures, 6 minutes
    - D. 4 heures

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. 3 heures, 5 minutes et 6 secondes** : Pour les instances Linux, la facturation est à la seconde (avec un minimum de 60 secondes).
    - **Autres options incorrectes** ❌ :
      - **A. 3 heures, 5 minutes** : Pas à la seconde.
      - **C. 3 heures, 6 minutes** : Arrondi à la minute supérieure.
      - **D. 4 heures** : Arrondi à l'heure supérieure.
    </details>

23. Lesquels des services AWS suivants fournissent des ressources de calcul ? (Choisissez deux.)
    - A. AWS Lambda
    - B. Amazon Elastic Container Service (Amazon ECS)
    - C. AWS CodeDeploy
    - D. Amazon Glacier
    - E. AWS Organizations

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A, B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS Lambda** : Calcul sans serveur.
      - **B. Amazon Elastic Container Service (Amazon ECS)** : Service de gestion de conteneurs pour exécuter des applications conteneurisées.
    - **Autres options incorrectes** ❌ :
      - **C. AWS CodeDeploy** : Automatisation des déploiements.
      - **D. Amazon Glacier** : Service d'archivage.
      - **E. AWS Organizations** : Gestion de comptes multiples.
    </details>

24. Quel service AWS permet aux utilisateurs de déployer l'infrastructure sous forme de code en automatisant le processus de provisionnement des ressources ?
    - A. Amazon GameLift
    - B. AWS CloudFormation
    - C. AWS Data Pipeline
    - D. AWS Glue

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS CloudFormation** : Service qui permet de modéliser et de provisionner des ressources AWS et tierces à l'aide de modèles (JSON ou YAML).
    - **Autres options incorrectes** ❌ :
      - **A. Amazon GameLift** : Service pour héberger des jeux multi-joueurs.
      - **C. AWS Data Pipeline** : Orchestration de données.
      - **D. AWS Glue** : Service ETL (Extract, Transform, Load).
    </details>

25. Quels services AWS fournissent un moyen d'étendre une architecture sur site vers le cloud AWS ? (Choisissez deux.)
    - A. Amazon EBS
    - B. AWS Direct Connect
    - C. Amazon CloudFront
    - D. AWS Storage Gateway
    - E. Amazon Connect

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B, D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. AWS Direct Connect** : Connexion réseau dédiée entre le réseau sur site et AWS.
      - **D. AWS Storage Gateway** : Connecte le stockage sur site au stockage cloud AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EBS** : Stockage par bloc pour EC2.
      - **C. Amazon CloudFront** : CDN.
      - **E. Amazon Connect** : Centre de contact cloud.
    </details>

26. Lequel des éléments suivants permet aux utilisateurs de provisionner une connexion réseau dédiée de leur réseau interne vers AWS ?
    - A. AWS CloudHSM
    - B. AWS Direct Connect
    - C. AWS VPN
    - D. Amazon Connect

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Direct Connect** : Établit une connexion réseau dédiée entre votre réseau et un emplacement AWS Direct Connect.
    - **Autres options incorrectes** ❌ :
      - **A. AWS CloudHSM** : Module de sécurité matériel (HSM) cloud.
      - **C. AWS VPN** : Connexion sécurisée via Internet, pas dédiée.
      - **D. Amazon Connect** : Centre de contact.
    </details>

27. Quels services utilisent les emplacements périphériques AWS ? (Choisissez deux.)
    - A. Amazon CloudFront
    - B. AWS Shield
    - C. Amazon EC2
    - D. Amazon RDS
    - E. Amazon ElastiCache

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A, B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. Amazon CloudFront** : Utilise les emplacements périphériques pour mettre en cache le contenu.
      - **B. AWS Shield** : Utilise l'infrastructure périphérique pour atténuer les DDoS.
    - **Autres options incorrectes** ❌ :
      - **C. Amazon EC2** : S'exécute dans les régions/zones de disponibilité.
      - **D. Amazon RDS** : S'exécute dans les régions/zones de disponibilité.
      - **E. Amazon ElastiCache** : S'exécute dans les régions/zones de disponibilité.
    </details>

28. Quel service fournirait une connectivité réseau dans une architecture hybride incluant le cloud AWS ?
    - A. Amazon VPC
    - B. AWS Direct Connect
    - C. AWS Directory Service
    - D. Amazon API Gateway

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. Amazon VPC** : Permet de créer un réseau virtuel isolé dans AWS, qui peut être connecté à un réseau sur site via VPN ou Direct Connect.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Direct Connect** : Connexion physique, mais le VPC est nécessaire pour héberger les ressources.
      - **C. AWS Directory Service** : Service d'annuaire managé.
      - **D. Amazon API Gateway** : Pour créer, publier et gérer des API.
    </details>

29. Quel outil peut être utilisé pour comparer les coûts d'exécution d'une application web dans un environnement d'hébergement traditionnel à son exécution sur AWS ?
    - A. AWS Cost Explorer
    - B. AWS Budgets
    - C. AWS Cost and Usage report
    - D. AWS Total Cost of Ownership (TCO) Calculator

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Total Cost of Ownership (TCO) Calculator** : Compare les coûts d'exécution d'applications dans un environnement sur site ou en colocation à AWS.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Cost Explorer** : Analyse les coûts AWS.
      - **B. AWS Budgets** : Gère les budgets AWS.
      - **C. AWS Cost and Usage report** : Rapports détaillés des coûts AWS.
    </details>

30. Quelle est la valeur de l'utilisation de logiciels tiers depuis AWS Marketplace au lieu d'installer des logiciels tiers sur Amazon EC2 ? (Choisissez deux.)
    - A. Les utilisateurs paient le logiciel à l'heure ou au mois selon la licence.
    - B. AWS Marketplace permet à l'utilisateur de lancer des applications en 1 clic.
    - C. Le chiffrement des données AWS Marketplace est géré par un fournisseur tiers.
    - D. AWS Marketplace élimine le besoin de mettre à niveau vers des versions logicielles plus récentes.
    - E. Les utilisateurs peuvent déployer des logiciels tiers sans tests.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A, B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. Paiement à l'heure ou au mois** : Modèle de paiement flexible basé sur l'utilisation.
      - **B. Lancement en 1 clic** : Provisionnement rapide et simplifié.
    - **Autres options incorrectes** ❌ :
      - **C. Chiffrement géré par un tiers** : Non, AWS gère l'infrastructure.
      - **D. Élimine les mises à niveau** : Les mises à jour sont toujours nécessaires.
      - **E. Déploiement sans tests** : Les tests sont toujours recommandés.
    </details>

31. Lequel des éléments suivants est un principe de conception d'architecture cloud ?
    - A. Monter en puissance, pas en largeur.
    - B. Découpler les composants.
    - C. Construire des systèmes monolithiques.
    - D. Utiliser des logiciels de base de données commerciaux.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Découpler les composants** : Le découplage réduit les interdépendances, permettant une plus grande résilience et évolutivité.
    - **Autres options incorrectes** ❌ :
      - **A. Monter en puissance, pas en largeur** : Dans le cloud, on privilégie la mise à l'échelle horizontale (scale-out).
      - **C. Systèmes monolithiques** : Architecture non recommandée pour le cloud.
      - **D. Logiciels de base de données commerciaux** : Pas un principe de conception.
    </details>

32. Selon le modèle de responsabilité partagée, lesquels des domaines suivants sont de la responsabilité du client ? (Choisissez deux.)
    - A. Mises à niveau du microprogramme de l'infrastructure réseau
    - B. Application de correctifs aux systèmes d'exploitation
    - C. Application de correctifs à l'hyperviseur sous-jacent
    - D. Sécurité physique des centres de données
    - E. Configuration du groupe de sécurité

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B, E
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **B. Application de correctifs aux systèmes d'exploitation** : Pour les instances EC2, le client est responsable de l'OS invité.
      - **E. Configuration du groupe de sécurité** : Le client configure les règles des groupes de sécurité.
    - **Autres options incorrectes** ❌ :
      - **A. Mises à niveau du microprogramme réseau** : Responsabilité d'AWS.
      - **C. Correctifs de l'hyperviseur** : Responsabilité d'AWS.
      - **D. Sécurité physique des centres de données** : Responsabilité d'AWS.
    </details>

33. Quel service permet aux clients d'auditer et de surveiller les changements dans les ressources AWS ?
    - A. AWS Trusted Advisor
    - B. Amazon GuardDuty
    - C. Amazon Inspector
    - D. AWS Config

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Config** : Service qui évalue, audite et évalue les configurations des ressources AWS et enregistre les changements de configuration au fil du temps.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Trusted Advisor** : Fournit des recommandations.
      - **B. Amazon GuardDuty** : Détection des menaces.
      - **C. Amazon Inspector** : Évaluation de sécurité automatisée.
    </details>

34. Quel service AWS identifie les groupes de sécurité qui autorisent un accès sans restriction aux ressources AWS d'un utilisateur ?
    - A. AWS CloudTrail
    - B. AWS Trusted Advisor
    - C. Amazon CloudWatch
    - D. Amazon Inspector

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Trusted Advisor** : Vérifie les groupes de sécurité ayant des règles trop permissives et fournit des alertes.
    - **Autres options incorrectes** ❌ :
      - **A. AWS CloudTrail** : Journalisation des API.
      - **C. Amazon CloudWatch** : Surveillance.
      - **D. Amazon Inspector** : Évaluation de sécurité.
    </details>

35. Selon le modèle de responsabilité partagée d'AWS, qui est responsable de la gestion de la configuration ?
    - A. C'est uniquement la responsabilité du client.
    - B. C'est uniquement la responsabilité d'AWS.
    - C. C'est partagé entre AWS et le client.
    - D. Cela ne fait pas partie du modèle de responsabilité partagée d'AWS.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. C'est partagé entre AWS et le client** : AWS gère la configuration de son infrastructure, le client gère la configuration de ses systèmes d'exploitation, bases de données et applications.
    - **Autres options incorrectes** ❌ :
      - **A. Uniquement le client** : Faux.
      - **B. Uniquement AWS** : Faux.
      - **D. Ne fait pas partie du modèle** : Faux, c'est un contrôle partagé.
    </details>

36. Quel service AWS est un réseau de diffusion de contenu qui diffuse de manière sécurisée des données, vidéos et applications aux utilisateurs mondiaux avec une faible latence et des vitesses élevées ?
    - A. AWS CloudFormation
    - B. AWS Direct Connect
    - C. Amazon CloudFront
    - D. Amazon Pinpoint

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon CloudFront** : CDN mondial qui diffuse du contenu avec faible latence et vitesses élevées.
    - **Autres options incorrectes** ❌ :
      - **A. AWS CloudFormation** : Infrastructure as code.
      - **B. AWS Direct Connect** : Connexion dédiée.
      - **D. Amazon Pinpoint** : Service d'engagement des utilisateurs.
    </details>

37. Quel avantage du cloud AWS prend en charge l'ajustement de l'offre de ressources aux demandes changeantes des charges de travail ?
    - A. Sécurité
    - B. Fiabilité
    - C. Élasticité
    - D. Haute disponibilité

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Élasticité** : Capacité à augmenter ou diminuer les ressources de calcul en fonction de la demande.
    - **Autres options incorrectes** ❌ :
      - **A. Sécurité** : Protection des données et des systèmes.
      - **B. Fiabilité** : Disponibilité et résilience.
      - **D. Haute disponibilité** : Fonctionnement continu malgré les défaillances.
    </details>

38. Un utilisateur exécute une application sur AWS et remarque qu'une ou plusieurs adresses IP appartenant à AWS sont impliquées dans une attaque par déni de service distribué (DDoS). <br/> Qui l'utilisateur doit-il contacter en PREMIER à propos de cette situation ?
    - A. AWS Premium Support
    - B. AWS Technical Account Manager
    - C. AWS Solutions Architect
    - D. Équipe AWS Abuse

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. Équipe AWS Abuse** : Pour signaler une utilisation abusive ou malveillante des ressources AWS, y compris les attaques DDoS provenant d'adresses IP AWS.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Premium Support** : Pour l'assistance technique, mais l'équipe Abuse est le point de contact pour les abus.
      - **B. AWS Technical Account Manager** : Disponible uniquement pour les clients Enterprise.
      - **C. AWS Solutions Architect** : Pour l'architecture, pas pour signaler des abus.
    </details>

39. Lesquels des éléments suivants sont des avantages de l'hébergement d'infrastructure dans le cloud AWS ? (Choisissez deux.)
    - A. Il n'y a pas d'engagement initial.
    - B. AWS gère toute la sécurité dans le cloud.
    - C. Les utilisateurs ont la capacité de provisionner des ressources à la demande.
    - D. Les utilisateurs ont accès à un stockage gratuit et illimité.
    - E. Les utilisateurs ont le contrôle de l'infrastructure physique.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A, C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. Il n'y a pas d'engagement initial** : Modèle de paiement à l'usage sans frais initiaux.
      - **C. Provisionnement de ressources à la demande** : Agilité pour provisionner rapidement des ressources.
    - **Autres options incorrectes** ❌ :
      - **B. AWS gère toute la sécurité** : Faux, sécurité partagée.
      - **D. Stockage gratuit et illimité** : Faux, payant avec des limites.
      - **E. Contrôle de l'infrastructure physique** : Faux, AWS gère l'infrastructure physique.
    </details>

40. Quel service AWS serait utilisé pour gérer centralement les politiques d'accès AWS entre plusieurs comptes ?
    - A. AWS Service Catalog
    - B. AWS Config
    - C. AWS Trusted Advisor
    - D. AWS Organizations

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Organizations** : Permet de gouverner centralement votre environnement, y compris le contrôle d'accès via les politiques de contrôle de service (SCP) sur plusieurs comptes.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Service Catalog** : Catalogue de services IT.
      - **B. AWS Config** : Audit de configuration.
      - **C. AWS Trusted Advisor** : Recommandations.
    </details>

41. Qu'est-ce qu'AWS Trusted Advisor ?
    - A. C'est un membre du personnel AWS qui fournit des recommandations et des meilleures pratiques sur l'utilisation d'AWS.
    - B. C'est un réseau de partenaires AWS qui fournissent des recommandations et des meilleures pratiques sur l'utilisation d'AWS.
    - C. C'est un outil en ligne avec un ensemble de vérifications automatisées qui fournit des recommandations sur l'optimisation des coûts, les performances et la sécurité.
    - D. C'est un autre nom pour les Technical Account Managers d'AWS qui fournissent des recommandations sur l'optimisation des coûts, les performances et la sécurité.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. C'est un outil en ligne avec des vérifications automatisées** : Trusted Advisor analyse votre environnement AWS et fournit des recommandations en temps réel dans cinq catégories : coût, performance, sécurité, tolérance aux pannes et limites de service.
    - **Autres options incorrectes** ❌ :
      - **A. Membre du personnel AWS** : Non, c'est un outil automatisé.
      - **B. Partenaires AWS** : Non.
      - **D. Technical Account Managers** : Les TAM sont des personnes, pas un outil.
    </details>

42. Quel service ou fonctionnalité AWS permet à une entreprise de visualiser, comprendre et gérer les coûts et l'utilisation d'AWS au fil du temps ?
    - A. AWS Budgets
    - B. AWS Cost Explorer
    - C. AWS Organizations
    - D. Facturation consolidée

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Cost Explorer** : Interface facile à utiliser pour visualiser, comprendre et gérer les coûts et l'utilisation AWS au fil du temps.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Budgets** : Pour définir des budgets et des alertes.
      - **C. AWS Organizations** : Pour gérer plusieurs comptes.
      - **D. Facturation consolidée** : Pour regrouper la facturation de plusieurs comptes.
    </details>

43. Quel service AWS offre un accès à la demande aux rapports de sécurité et de conformité d'AWS ?
    - A. AWS CloudTrail
    - B. AWS Artifact
    - C. AWS Health
    - D. Amazon CloudWatch

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Artifact** : Portail pour accéder à la demande aux rapports de sécurité et de conformité d'AWS (SOC, PCI, etc.) et à certains accords.
    - **Autres options incorrectes** ❌ :
      - **A. AWS CloudTrail** : Journalisation des API.
      - **C. AWS Health** : Informations sur l'état des services AWS.
      - **D. Amazon CloudWatch** : Surveillance.
    </details>

44. Quels sont les avantages de l'utilisation du cloud AWS pour les entreprises ayant des clients dans de nombreux pays à travers le monde ? (Choisissez deux.)
    - A. Les entreprises peuvent déployer des applications dans plusieurs régions AWS pour réduire la latence.
    - B. Amazon Translate traduit automatiquement les interfaces de sites web tiers dans plusieurs langues.
    - C. Amazon CloudFront a plusieurs emplacements périphériques à travers le monde pour réduire la latence.
    - D. Amazon Comprehend permet aux utilisateurs de créer des applications qui peuvent répondre aux demandes des utilisateurs dans de nombreuses langues.
    - E. Elastic Load Balancing peut distribuer le trafic web d'application vers plusieurs régions AWS à travers le monde, ce qui réduit la latence.

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A, C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Options correctes** ✅ :
      - **A. Déployer dans plusieurs régions AWS** : Réduit la latence en rapprochant les ressources des utilisateurs.
      - **C. CloudFront avec emplacements périphériques mondiaux** : Diffuse le contenu depuis des emplacements proches des utilisateurs.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Translate** : Service de traduction, pas directement lié à la latence.
      - **D. Amazon Comprehend** : NLP, pas de latence.
      - **E. Elastic Load Balancing** : Distribue le trafic au sein d'une région, pas entre régions.
    </details>

45. Quel service AWS gère les détails de déploiement de provisionnement de capacité, d'équilibrage de charge, de mise à l'échelle automatique et de surveillance de la santé des applications ?
    - A. AWS Config
    - B. AWS Elastic Beanstalk
    - C. Amazon Route 53
    - D. Amazon CloudFront

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Elastic Beanstalk** : Service qui automatise le déploiement, le provisionnement de capacité, l'équilibrage de charge, la mise à l'échelle automatique et la surveillance de la santé.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Config** : Audit de configuration.
      - **C. Amazon Route 53** : DNS.
      - **D. Amazon CloudFront** : CDN.
    </details>

46. Quel service AWS fournit des listes de contrôle d'accès réseau (ACL) entrantes et sortantes pour durcir la connectivité externe vers Amazon EC2 ?
    - A. AWS IAM
    - B. Amazon Connect
    - C. Amazon VPC
    - D. Amazon API Gateway

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon VPC** : Les NACL sont une fonctionnalité de VPC qui agit comme un pare-feu au niveau du sous-réseau pour contrôler le trafic entrant et sortant.
    - **Autres options incorrectes** ❌ :
      - **A. AWS IAM** : Gestion des identités et des accès.
      - **B. Amazon Connect** : Centre de contact.
      - **D. Amazon API Gateway** : Gestion des API.
    </details>

47. Lorsqu'une entreprise provisionne des serveurs web dans plusieurs régions AWS, qu'est-ce qui est augmenté ?
    - A. Couplage
    - B. Disponibilité
    - C. Sécurité
    - D. Durabilité

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Disponibilité** : Le déploiement multi-régions améliore la disponibilité en protégeant contre les défaillances régionales.
    - **Autres options incorrectes** ❌ :
      - **A. Couplage** : Non, cela peut augmenter la complexité mais pas le couplage.
      - **C. Sécurité** : Peut être amélioré, mais pas la réponse principale.
      - **D. Durabilité** : Pour les données, pas directement pour les serveurs web.
    </details>

48. Le modèle de tarification à l'usage pour les services AWS :
    - A. réduit les dépenses d'investissement (CapEx).
    - B. nécessite un paiement à l'avance pour les services AWS.
    - C. est pertinent uniquement pour Amazon EC2, Amazon S3 et Amazon RDS.
    - D. réduit les dépenses opérationnelles (OpEx).

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **A. réduit les dépenses d'investissement (CapEx)** : Le paiement à l'usage élimine les investissements initiaux en matériel, les remplaçant par des dépenses opérationnelles variables.
    - **Autres options incorrectes** ❌ :
      - **B. Paiement à l'avance** : Non, paiement après utilisation.
      - **C. Pertinent uniquement pour certains services** : Faux, applicable à la plupart des services.
      - **D. Réduit les OpEx** : Les OpEx peuvent augmenter car vous payez pour ce que vous utilisez, mais elles remplacent les CapEx élevés.
    </details>

49. Selon le modèle de responsabilité partagée d'AWS, AWS est responsable de quelle tâche de sécurité ?
    - A. Gestion du cycle de vie des informations d'identification IAM
    - B. Sécurité physique de l'infrastructure mondiale
    - C. Chiffrement des volumes Amazon EBS
    - D. Configuration du pare-feu

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. Sécurité physique de l'infrastructure mondiale** : AWS est responsable de la sécurité physique des centres de données.
    - **Autres options incorrectes** ❌ :
      - **A. Gestion du cycle de vie des informations d'identification IAM** : Responsabilité du client.
      - **C. Chiffrement des volumes EBS** : Le client doit activer le chiffrement.
      - **D. Configuration du pare-feu** : Responsabilité du client (groupes de sécurité, NACL).
    </details>

50. Quel service AWS permet aux utilisateurs de consolider la facturation sur plusieurs comptes ?
    - A. Amazon QuickSight
    - B. AWS Organizations
    - C. AWS Budgets
    - D. Amazon Forecast

    <details markdown=1><summary markdown="span">Réponse</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown="span">Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Organizations** : Fournit la fonctionnalité de facturation consolidée pour regrouper la facturation de plusieurs comptes.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon QuickSight** : Service de BI.
      - **C. AWS Budgets** : Gestion des budgets.
      - **D. Amazon Forecast** : Service de prévision.
    </details>