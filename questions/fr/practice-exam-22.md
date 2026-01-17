---
layout: exam
---

# Examen de pratique 22

1. Une entreprise opérant dans le cloud AWS nécessite des factures séparées pour des environnements spécifiques, tels que développement, test et production. <br/> Comment cela peut-il être réalisé ?
    - A. Utiliser plusieurs comptes AWS
    - B. Utiliser le tagging des ressources
    - C. Utiliser plusieurs VPCs
    - D. Utiliser Cost Explorer

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Utiliser plusieurs comptes AWS** : Chaque compte AWS génère sa propre facture, ce qui permet d'avoir des factures séparées par environnement.
    - **Autres options incorrectes** ❌ :
      - **B. Utiliser le tagging des ressources** : Le tagging permet d'organiser et de suivre les coûts, mais ne génère pas de factures séparées.
      - **C. Utiliser plusieurs VPCs** : Les VPCs permettent d'isoler les réseaux, pas de générer des factures distinctes.
      - **D. Utiliser Cost Explorer** : C'est un outil d'analyse des coûts, pas un mécanisme pour créer des factures séparées.
    </details>

2. Quel service AWS peut être utilisé dans le processus de déploiement d'applications ?
    - A. AWS AppSync
    - B. AWS Batch
    - C. AWS CodePipeline
    - D. AWS DataSync

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS CodePipeline** : C'est un service d'intégration et de livraison continues (CI/CD) qui automatise le processus de déploiement d'applications.
    - **Autres options incorrectes** ❌ :
      - **A. AWS AppSync** : Service pour développer des API GraphQL, pas spécifiquement pour le déploiement.
      - **B. AWS Batch** : Service pour exécuter des travaux par lots, pas pour le déploiement continu.
      - **D. AWS DataSync** : Service pour transférer des données, pas pour déployer des applications.
    </details>

3. Qu'est-ce qui peut être utilisé pour réduire le coût d'exécution des instances Amazon EC2 ? (Choisissez deux.)
    - A. Instances Spot pour les charges de travail sans état et flexibles
    - B. Instances optimisées pour la mémoire pour les charges de travail à calcul intensif
    - C. Instances à la demande pour les charges de travail à coût élevé et soutenues
    - D. Instances réservées pour les charges de travail soutenues
    - E. Limites de dépenses définies avec AWS Budgets

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Instances Spot pour les charges de travail sans état et flexibles** : Les instances Spot offrent des économies importantes (jusqu'à 90%) pour les charges de travail qui peuvent tolérer des interruptions.
      - **D. Instances réservées pour les charges de travail soutenues** : Les instances réservées offrent des réductions de prix significatives (jusqu'à 75%) pour les charges de travail prévisibles et continues.
    - **Autres options incorrectes** ❌ :
      - **B. Instances optimisées pour la mémoire** : Ce type d'instance est conçu pour des besoins spécifiques, pas pour réduire les coûts généraux.
      - **C. Instances à la demande pour les charges de travail à coût élevé** : Les instances à la demande sont les plus chères pour une utilisation prolongée.
      - **E. Limites de dépenses avec AWS Budgets** : AWS Budgets permet de surveiller les coûts mais ne les réduit pas directement.
    </details>

4. Une entreprise lance un site de commerce électronique qui stockera et traitera des données de cartes de crédit. L'entreprise a besoin d'informations sur les rapports de conformité AWS et les accords AWS. <br/> Quel service AWS fournit un accès à la demande à ces éléments ?
    - A. AWS Certificate Manager
    - B. AWS Config
    - C. AWS Artifact
    - D. AWS CloudTrail

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Artifact** : Portail centralisé qui permet d'accéder à la demande aux rapports de conformité, certifications et accords AWS.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Certificate Manager** : Gère les certificats SSL/TLS.
      - **B. AWS Config** : Évalue et audite la configuration des ressources.
      - **D. AWS CloudTrail** : Enregistre l'activité des API pour l'audit et la gouvernance.
    </details>

5. Quel service ou fonctionnalité AWS permet à l'utilisateur de gérer le trafic applicatif inter-régions ?
    - A. Amazon AppStream 2.0
    - B. Amazon VPC
    - C. Elastic Load Balancer
    - D. Amazon Route 53

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Amazon Route 53** : Service DNS mondial qui peut router le trafic vers différentes régions en fonction de la latence, de la santé des ressources, etc.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon AppStream 2.0** : Service de streaming d'applications de bureau.
      - **B. Amazon VPC** : Réseau privé virtuel au sein d'une région.
      - **C. Elastic Load Balancer** : Répartit le trafic au sein d'une région, pas entre régions.
    </details>

6. Quel service AWS peut être utilisé pour suivre les appels API non autorisés ?
    - A. AWS Config
    - B. AWS CloudTrail
    - C. AWS Trusted Advisor
    - D. Amazon Inspector

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS CloudTrail** : Enregistre tous les appels d'API effectués sur votre compte AWS, ce qui permet de détecter les activités non autorisées.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Config** : Audite la configuration des ressources.
      - **C. AWS Trusted Advisor** : Fournit des recommandations d'optimisation.
      - **D. Amazon Inspector** : Évalue la sécurité des applications déployées sur EC2.
    </details>

7. Un utilisateur doit régulièrement auditer et évaluer la configuration de toutes les ressources AWS, identifier les comptes non conformes et être notifié lorsqu'une ressource change. <br/> Quel service AWS peut être utilisé pour répondre à ces exigences ?
    - A. AWS Trusted Advisor
    - B. AWS Config
    - C. AWS Resource Access Manager
    - D. AWS Systems Manager

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Config** : Service qui évalue, audite et évalue la configuration des ressources, et peut notifier des changements.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Trusted Advisor** : Fournit des recommandations mais ne suit pas les changements de configuration.
      - **C. AWS Resource Access Manager** : Partage des ressources entre comptes AWS.
      - **D. AWS Systems Manager** : Service de gestion opérationnelle pour les ressources AWS et hybrides.
    </details>

8. Un utilisateur prévoit de lancer deux instances Amazon EC2 supplémentaires pour augmenter la disponibilité. <br/> Quelle action l'utilisateur doit-il entreprendre ?
    - A. Lancer les instances dans plusieurs zones de disponibilité d'une seule région AWS.
    - B. Lancer les instances en tant qu'instances réservées EC2 dans la même région AWS et la même zone de disponibilité.
    - C. Lancer les instances dans plusieurs régions AWS, mais dans la même zone de disponibilité.
    - D. Lancer les instances en tant qu'instances Spot EC2 dans la même région AWS, mais dans différentes zones de disponibilité.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Lancer les instances dans plusieurs zones de disponibilité d'une seule région AWS** : Cela protège contre les défaillances d'une zone de disponibilité tout en conservant une faible latence.
    - **Autres options incorrectes** ❌ :
      - **B. Lancer les instances en tant qu'instances réservées** : Les instances réservées concernent la facturation, pas la haute disponibilité.
      - **C. Lancer dans plusieurs régions** : Augmente la complexité et la latence, pas nécessaire pour la haute disponibilité intra-région.
      - **D. Utiliser des instances Spot** : Les instances Spot peuvent être interrompues, ce qui n'est pas idéal pour la haute disponibilité.
    </details>

9. Une entreprise doit stocker des données métier critiques dans Amazon S3 avec une sauvegarde vers une autre région AWS. <br/> Comment cela peut-il être réalisé ?
    - A. Utiliser un réseau de diffusion de contenu (CDN) Amazon CloudFront pour mettre en cache les données globalement
    - B. Configurer la réplication inter-régions d'Amazon S3 vers une autre région AWS
    - C. Configurer le service AWS Backup pour sauvegarder les données vers une autre région AWS
    - D. Prendre des snapshots de bucket Amazon S3 et copier ces données vers une autre région AWS

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Configurer la réplication inter-régions d'Amazon S3** : Fonctionnalité native de S3 qui réplique automatiquement les objets vers un bucket dans une autre région.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon CloudFront** : CDN pour la diffusion de contenu, pas pour la sauvegarde.
      - **C. AWS Backup** : Service de sauvegarde centralisé, mais S3 a sa propre réplication.
      - **D. Snapshots S3** : S3 n'a pas de fonctionnalité de snapshot comme EBS.
    </details>

10. Quel service cloud AWS peut envoyer des alertes aux clients si des seuils de dépenses personnalisés sont dépassés ?
    - A. AWS Budgets
    - B. AWS Cost Explorer
    - C. AWS Cost Allocation Tags
    - D. AWS Organizations

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Budgets** : Permet de définir des budgets personnalisés et de configurer des alertes lorsque les coûts réels ou prévus dépassent un seuil.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Cost Explorer** : Outil de visualisation des coûts, mais ne génère pas d'alertes.
      - **C. AWS Cost Allocation Tags** : Permettent d'organiser les coûts par balises, pas d'alertes.
      - **D. AWS Organizations** : Service de gestion de plusieurs comptes AWS.
    </details>

11. Quelle est la méthode recommandée pour demander des tests d'intrusion sur les ressources AWS ?
    - A. Ouvrir un cas de support
    - B. Remplir le formulaire de demande de test d'intrusion
    - C. Demander un test d'intrusion à votre gestionnaire de compte technique
    - D. Contacter votre représentant commercial AWS

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Remplir le formulaire de demande de test d'intrusion** : AWS exige que les clients remplissent un formulaire pour autoriser les tests d'intrusion.
    - **Autres options incorrectes** ❌ :
      - **A. Ouvrir un cas de support** : Non, il y a un processus spécifique.
      - **C. Demander à votre TAM** : Le TAM peut guider, mais le formulaire est requis.
      - **D. Contacter le représentant commercial** : Non, le processus passe par le formulaire.
    </details>

12. Un utilisateur doit automatiquement découvrir, classer et protéger les données sensibles stockées dans Amazon S3. <br/> Quel service AWS peut répondre à ces exigences ?
    - A. Amazon Inspector
    - B. Amazon Macie
    - C. Amazon GuardDuty
    - D. AWS Secrets Manager

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon Macie** : Service de sécurité entièrement géré qui utilise l'apprentissage automatique pour découvrir et protéger les données sensibles dans S3.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Inspector** : Évalue la sécurité des applications déployées sur EC2.
      - **C. Amazon GuardDuty** : Service de détection des menaces intelligent.
      - **D. AWS Secrets Manager** : Gère les secrets tels que les mots de passe et les clés API.
    </details>

13. Quels composants sont requis pour établir une connexion VPN site à site sur AWS ? (Choisissez deux.)
    - A. Passerelle Internet
    - B. Passerelle NAT
    - C. Passerelle client
    - D. Passerelle de transit
    - E. Passerelle privée virtuelle

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Passerelle client** : Représente le dispositif VPN côté client (ou le logiciel) dans AWS.
      - **E. Passerelle privée virtuelle** : Composant côté AWS qui sert de point de terminaison pour la connexion VPN.
    - **Autres options incorrectes** ❌ :
      - **A. Passerelle Internet** : Permet l'accès à Internet pour un VPC, pas nécessaire pour un VPN site à site.
      - **B. Passerelle NAT** : Permet aux instances dans un sous-réseau privé d'accéder à Internet.
      - **D. Passerelle de transit** : Service de réseau pour connecter plusieurs VPC, pas spécifiquement pour VPN site à site.
    </details>

14. Quelle option de tarification Amazon EC2 est la mieux adaptée aux applications avec des charges de travail à court terme, irrégulières ou imprévisibles qui ne peuvent pas être interrompues ?
    - A. Instances Spot
    - B. Hôtes dédiés
    - C. Instances à la demande
    - D. Instances réservées

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Instances à la demande** : Idéales pour les charges de travail irrégulières qui ne peuvent pas être interrompues, sans engagement à long terme.
    - **Autres options incorrectes** ❌ :
      - **A. Instances Spot** : Peuvent être interrompues avec un préavis de 2 minutes.
      - **B. Hôtes dédiés** : Serveurs physiques dédiés, coûteux et non nécessaires pour ce scénario.
      - **D. Instances réservées** : Pour les charges de travail stables et prévisibles sur 1 ou 3 ans.
    </details>

15. Quel principe d'architecture cloud AWS stipule que les systèmes doivent réduire les interdépendances ?
    - A. Évolutivité
    - B. Services, pas serveurs
    - C. Suppression des points de défaillance uniques
    - D. Découplage lâche

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Découplage lâche** : Principe de conception qui réduit les interdépendances entre les composants, améliorant la résilience et la maintenabilité.
    - **Autres options incorrectes** ❌ :
      - **A. Évolutivité** : Capacité à gérer une charge accrue.
      - **B. Services, pas serveurs** : Approche serverless.
      - **C. Suppression des points de défaillance uniques** : Concerne la haute disponibilité, pas spécifiquement le découplage.
    </details>

16. Quelle est la ressource la PLUS efficace pour se tenir au courant des annonces de sécurité AWS ?
    - A. AWS Personal Health Dashboard
    - B. AWS Secrets Manager
    - C. AWS Security Bulletins
    - D. Amazon Inspector

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Security Bulletins** : Canal officiel pour les annonces de sécurité AWS, y compris les vulnérabilités et les correctifs.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Personal Health Dashboard** : Fournit des alertes personnalisées sur l'état des services AWS affectant vos ressources.
      - **B. AWS Secrets Manager** : Gère les secrets.
      - **D. Amazon Inspector** : Évalue la sécurité des applications.
    </details>

17. Quel service AWS offre un stockage persistant pour un système de fichiers ?
    - A. Amazon S3
    - B. Stockage d'instance Amazon EC2
    - C. Amazon Elastic Block Store (Amazon EBS)
    - D. Amazon ElastiCache

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon Elastic Block Store (EBS)** : Service de stockage par blocs persistant pour les instances EC2, qui peut être utilisé comme système de fichiers.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon S3** : Stockage d'objets, pas de système de fichiers.
      - **B. Stockage d'instance Amazon EC2** : Stockage temporaire non persistant.
      - **D. Amazon ElastiCache** : Service de cache en mémoire.
    </details>

18. Lequel des éléments suivants permet aux utilisateurs AWS de gérer les allocations de coûts pour la facturation ?
    - A. Tagging des ressources
    - B. Limiter qui peut créer des ressources
    - C. Ajouter un mode de paiement secondaire
    - D. Exécuter toutes les opérations sur un seul compte AWS

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Tagging des ressources** : Les balises (tags) permettent de catégoriser les ressources et d'allouer les coûts par projet, département, etc.
    - **Autres options incorrectes** ❌ :
      - **B. Limiter qui peut créer des ressources** : Cela contrôle l'accès, pas l'allocation des coûts.
      - **C. Ajouter un mode de paiement secondaire** : Non lié à l'allocation des coûts.
      - **D. Exécuter sur un seul compte** : Complique l'allocation des coûts par département ou projet.
    </details>

19. Quel service AWS permet aux utilisateurs de télécharger à la demande des rapports de sécurité et de conformité sur l'infrastructure AWS ?
    - A. Amazon GuardDuty
    - B. AWS Security Hub
    - C. AWS Artifact
    - D. AWS Shield

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Artifact** : Portail qui fournit un accès à la demande aux rapports de conformité et certifications AWS.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon GuardDuty** : Service de détection des menaces.
      - **B. AWS Security Hub** : Service de sécurité centralisé qui agrège les alertes.
      - **D. AWS Shield** : Service de protection DDoS.
    </details>

20. Parmi les services AWS suivants, lesquels sont serverless ? (Choisissez deux.)
    - A. AWS Lambda
    - B. Amazon Elasticsearch Service
    - C. AWS Elastic Beanstalk
    - D. Amazon DynamoDB
    - E. Amazon Redshift

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS Lambda** : Service de calcul serverless qui exécute du code sans provisionner de serveurs.
      - **D. Amazon DynamoDB** : Base de données NoSQL entièrement gérée, considérée comme serverless.
    - **Autres options incorrectes** ❌ :
      - **B. Amazon Elasticsearch Service** : Service géré pour Elasticsearch, mais nécessite la gestion des instances sous-jacentes.
      - **C. AWS Elastic Beanstalk** : Plateforme as a Service (PaaS) qui gère l'infrastructure, mais repose sur des instances EC2.
      - **E. Amazon Redshift** : Entrepôt de données géré, mais nécessite le provisionnement de clusters.
    </details>

21. Quels services AWS gérés peuvent être utilisés pour étendre un centre de données sur site au réseau AWS ? (Choisissez deux.)
    - A. AWS VPN
    - B. Passerelle NAT
    - C. AWS Direct Connect
    - D. Amazon Connect
    - E. Amazon Route 53

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. AWS VPN** : Établit une connexion sécurisée entre votre réseau sur site et un VPC AWS via Internet.
      - **C. AWS Direct Connect** : Établit une connexion réseau dédiée entre votre centre de données et AWS.
    - **Autres options incorrectes** ❌ :
      - **B. Passerelle NAT** : Permet aux instances dans un sous-réseau privé d'accéder à Internet.
      - **D. Amazon Connect** : Service de centre de contact cloud.
      - **E. Amazon Route 53** : Service DNS.
    </details>

22. Quelle exigence doit être remplie pour qu'un compte membre soit dissocié d'un compte AWS Organizations ?
    - A. Le compte lié doit être activement conforme aux contrôles SOC (System and Organization Controls) d'AWS.
    - B. Le compte payeur et le compte lié doivent tous deux créer des cas de support AWS pour demander que le compte membre soit dissocié de l'organisation.
    - C. Le compte membre doit remplir les conditions d'un compte autonome.
    - D. Le compte payeur doit être utilisé pour supprimer le compte lié de l'organisation.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Le compte membre doit remplir les conditions d'un compte autonome** : Un compte membre doit être en mesure de fonctionner comme un compte autonome, avec ses propres méthodes de paiement et contacts.
    - **Autres options incorrectes** ❌ :
      - **A. Conformité SOC** : Non requis pour la dissociation.
      - **B. Créer des cas de support** : Non, le processus se fait via la console AWS Organizations.
      - **D. Le compte payeur doit supprimer le compte** : Vrai, mais l'exigence préalable est que le compte membre soit autonome.
    </details>

23. Quel avantage AWS fait référence à la capacité d'un client à déployer des applications qui montent en charge et descendent en charge pour répondre à une demande variable ?
    - A. Élasticité
    - B. Agilité
    - C. Sécurité
    - D. Évolutivité

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Élasticité** : Capacité à ajuster automatiquement les ressources en fonction de la demande.
    - **Autres options incorrectes** ❌ :
      - **B. Agilité** : Rapidité de déploiement et d'innovation.
      - **C. Sécurité** : Protection des données et des systèmes.
      - **D. Évolutivité** : Capacité à gérer une charge croissante, mais pas nécessairement de manière automatique et bidirectionnelle.
    </details>

24. Lors d'un audit de conformité, un des auditeurs demande une copie du rapport SOC 2 d'AWS. <br/> Quel service doit être utilisé pour soumettre cette demande ?
    - A. AWS Personal Health Dashboard
    - B. AWS Trusted Advisor
    - C. AWS Artifact
    - D. Amazon S3

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. AWS Artifact** : Portail où les clients peuvent télécharger à la demande des rapports de conformité comme SOC 2.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Personal Health Dashboard** : Alertes personnalisées sur l'état des services.
      - **B. AWS Trusted Advisor** : Recommandations d'optimisation.
      - **D. Amazon S3** : Service de stockage d'objets.
    </details>

25. Une entreprise veut mettre en place une charge de travail hautement disponible dans AWS avec un plan de reprise d'activité qui permettra à l'entreprise de récupérer en cas d'interruption de service régionale. <br/> Quelle configuration répondra à ces exigences ?
    - A. Exécuter sur deux zones de disponibilité dans une région AWS, en utilisant les zones de disponibilité supplémentaires dans la région AWS pour le site de reprise d'activité.
    - B. Exécuter sur deux zones de disponibilité dans une région AWS, en utilisant une autre région AWS pour le site de reprise d'activité.
    - C. Exécuter sur deux zones de disponibilité dans une région AWS, en utilisant une région AWS locale pour le site de reprise d'activité.
    - D. Exécuter sur deux régions AWS, en utilisant une troisième région AWS pour le site de reprise d'activité.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Exécuter sur deux zones de disponibilité dans une région AWS, en utilisant une autre région AWS pour le site de reprise d'activité** : Cela protège contre les défaillances au niveau de la zone de disponibilité et de la région.
    - **Autres options incorrectes** ❌ :
      - **A. Utiliser des zones de disponibilité supplémentaires dans la même région** : Ne protège pas contre une défaillance régionale.
      - **C. Région AWS locale** : Terme ambigu, probablement la même région.
      - **D. Utiliser trois régions** : Augmente la complexité et le coût, non nécessaire pour la plupart des scénarios de reprise d'activité.
    </details>

26. Une entreprise a un référentiel d'images de 500 To qui doit être transporté vers AWS pour traitement. <br/> Quel service AWS peut importer ces données de manière la PLUS rentable ?
    - A. AWS Snowball
    - B. AWS Direct Connect
    - C. AWS VPN
    - D. Amazon S3

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Snowball** : Appareil de transfert de données physique pour déplacer de grandes quantités de données (To/Po) de manière sécurisée et économique.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Direct Connect** : Connexion réseau dédiée, mais coûteuse pour 500 To de transfert initial.
      - **C. AWS VPN** : Connexion via Internet, lente et coûteuse pour 500 To.
      - **D. Amazon S3** : Destination, pas la méthode de transfert.
    </details>

27. Quel service AWS peut exécuter une base de données PostgreSQL gérée qui fournit du traitement transactionnel en ligne (OLTP) ?
    - A. Amazon DynamoDB
    - B. Amazon Athena
    - C. Amazon RDS
    - D. Amazon EMR

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Amazon RDS** : Service de base de données relationnelle gérée qui prend en charge PostgreSQL pour les charges de travail OLTP.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon DynamoDB** : Base de données NoSQL, pas relationnelle.
      - **B. Amazon Athena** : Service de requête interactive pour S3, pas base de données OLTP.
      - **D. Amazon EMR** : Service de big data pour le traitement de grands ensembles de données.
    </details>

28. Lesquels des éléments suivants aident à identifier les coûts par département ? (Choisissez deux.)
    - A. Utiliser des tags sur les ressources
    - B. Utiliser plusieurs comptes AWS
    - C. Utiliser un gestionnaire de compte
    - D. Utiliser AWS Trusted Advisor
    - E. Utiliser la facturation consolidée

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Utiliser des tags sur les ressources** : Permet de catégoriser les coûts par département, projet, etc.
      - **B. Utiliser plusieurs comptes AWS** : Chaque département peut avoir son propre compte, facilitant le suivi des coûts.
    - **Autres options incorrectes** ❌ :
      - **C. Utiliser un gestionnaire de compte** : Rôle commercial, pas un outil de suivi des coûts.
      - **D. Utiliser AWS Trusted Advisor** : Fournit des recommandations, mais ne suit pas les coûts par département.
      - **E. Utiliser la facturation consolidée** : Combine les factures de plusieurs comptes, mais ne segmente pas par département sans tags ou comptes séparés.
    </details>

29. Une entreprise veut autoriser un accès complet à un bucket Amazon S3 pour un utilisateur particulier. <br/> Quel élément dans la politique de bucket S3 contient les détails de l'utilisateur qui décrit qui a besoin d'accéder au bucket S3 ?
    - A. Principal
    - B. Action
    - C. Ressource
    - D. Énoncé

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Principal** : Spécifie l'utilisateur, le compte ou le service auquel la politique accorde ou refuse l'accès.
    - **Autres options incorrectes** ❌ :
      - **B. Action** : Décrit les actions (comme s3:GetObject) qui sont autorisées ou refusées.
      - **C. Ressource** : Spécifie le bucket S3 ou les objets auxquels la politique s'applique.
      - **D. Énoncé** : Conteneur pour les autres éléments, mais ne spécifie pas l'utilisateur.
    </details>

30. Quel service AWS permet une gestion efficace des coûts de plusieurs comptes AWS ?
    - A. AWS Organizations
    - B. AWS Trusted Advisor
    - C. AWS Direct Connect
    - D. Amazon Connect

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. AWS Organizations** : Permet de gérer plusieurs comptes avec facturation consolidée, remises volume et politiques de contrôle des coûts.
    - **Autres options incorrectes** ❌ :
      - **B. AWS Trusted Advisor** : Fournit des recommandations d'optimisation des coûts, mais ne gère pas plusieurs comptes.
      - **C. AWS Direct Connect** : Connexion réseau dédiée.
      - **D. Amazon Connect** : Service de centre de contact cloud.
    </details>

31. Une entreprise teste une nouvelle application client sur Amazon Elastic Compute Cloud (EC2) pendant un mois. <br/> Quel modèle de tarification est approprié ?
    - A. Instances réservées
    - B. Instances Spot
    - C. Instances à la demande
    - D. Hôtes dédiés

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Instances à la demande** : Idéales pour les charges de travail courtes et imprévisibles sans engagement.
    - **Autres options incorrectes** ❌ :
      - **A. Instances réservées** : Pour des charges de travail stables sur 1 ou 3 ans.
      - **B. Instances Spot** : Peuvent être interrompues, pas idéales pour une application client critique.
      - **D. Hôtes dédiés** : Serveurs physiques dédiés, coûteux et non nécessaires pour un test d'un mois.
    </details>

32. Quels outils AWS prévoient automatiquement les futurs coûts AWS ?
    - A. AWS Support Center
    - B. AWS Total Cost of Ownership (TCO) Calculator
    - C. AWS Simple Monthly Calculator
    - D. Cost Explorer

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Cost Explorer** : Outil d'analyse des coûts avec fonctionnalité de prévision basée sur l'historique d'utilisation.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Support Center** : Portail de support technique.
      - **B. AWS TCO Calculator** : Compare les coûts entre un environnement sur site et AWS.
      - **C. AWS Simple Monthly Calculator** : Estime les coûts basés sur une architecture, mais ne prévoit pas automatiquement.
    </details>

33. Selon le modèle de responsabilité partagée d'AWS, lequel des éléments suivants est de la responsabilité d'AWS ?
    - A. Activer le chiffrement côté serveur pour les objets stockés dans S3
    - B. Appliquer les politiques de sécurité IAM
    - C. Appliquer les correctifs sur le système d'exploitation d'une instance Amazon EC2
    - D. Appliquer les mises à jour sur l'hyperviseur

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Appliquer les mises à jour sur l'hyperviseur** : AWS est responsable de la mise à jour et de la maintenance de l'infrastructure sous-jacente, y compris l'hyperviseur.
    - **Autres options incorrectes** ❌ :
      - **A. Activer le chiffrement côté serveur pour S3** : Le client doit activer et gérer le chiffrement.
      - **B. Appliquer les politiques IAM** : Le client crée et gère les politiques IAM.
      - **C. Appliquer les correctifs sur le système d'exploitation d'une instance EC2** : Responsabilité du client pour les instances IaaS.
    </details>

34. Un utilisateur peut configurer un compte payeur principal pour afficher les rapports de facturation consolidés via :
    - A. AWS Budgets.
    - B. Amazon Macie.
    - C. Amazon QuickSight.
    - D. AWS Organizations.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Organizations** : Service qui permet la facturation consolidée pour plusieurs comptes.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Budgets** : Gère les budgets et alertes de coûts.
      - **B. Amazon Macie** : Service de sécurité pour la découverte de données sensibles.
      - **C. Amazon QuickSight** : Service de business intelligence.
    </details>

35. Exécuter des opérations sous forme de code est un principe de conception qui soutient quel pilier du AWS Well-Architected Framework ?
    - A. Efficacité des performances
    - B. Excellence opérationnelle
    - C. Fiabilité
    - D. Sécurité

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Excellence opérationnelle** : L'automatisation des opérations via le code est un principe clé de l'excellence opérationnelle.
    - **Autres options incorrectes** ❌ :
      - **A. Efficacité des performances** : Se concentre sur l'utilisation efficace des ressources.
      - **C. Fiabilité** : Capacité à récupérer après des défaillances.
      - **D. Sécurité** : Protection des données et des systèmes.
    </details>

36. Quel principe de conception est atteint en suivant le pilier de fiabilité du AWS Well-Architected Framework ?
    - A. Mise à l'échelle verticale
    - B. Récupération manuelle après défaillance
    - C. Test des procédures de récupération
    - D. Modification manuelle de l'infrastructure

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Test des procédures de récupération** : Le pilier de fiabilité recommande de tester régulièrement les procédures de reprise après sinistre.
    - **Autres options incorrectes** ❌ :
      - **A. Mise à l'échelle verticale** : Concerne les performances, pas la fiabilité.
      - **B. Récupération manuelle** : La fiabilité favorise l'automatisation de la récupération.
      - **D. Modification manuelle de l'infrastructure** : Favorise l'automatisation.
    </details>

37. Quelle est une caractéristique des instances réservées convertibles (RIs) ?
    - A. Les utilisateurs peuvent échanger des RIs convertibles contre d'autres RIs convertibles d'une famille d'instance différente avec une valeur égale ou supérieure à celle des instances réservées convertibles qu'ils échangent.
    - B. Les utilisateurs peuvent échanger des RIs convertibles contre d'autres RIs convertibles dans différentes régions AWS.
    - C. Les utilisateurs peuvent vendre et acheter des RIs convertibles sur AWS Marketplace.
    - D. Les utilisateurs peuvent raccourcir la durée de leurs RIs convertibles en les fusionnant avec d'autres RIs convertibles.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Échanger contre d'autres RIs convertibles d'une famille différente avec une valeur égale ou supérieure** : Les RIs convertibles permettent d'échanger contre une autre RI convertible de caractéristiques différentes, tant que la valeur est égale ou supérieure.
    - **Autres options incorrectes** ❌ :
      - **B. Échanger dans différentes régions** : Non, l'échange est limité à la même région.
      - **C. Vendre/acheter sur AWS Marketplace** : Seules les RIs standard peuvent être vendues sur le Marketplace.
      - **D. Raccourcir la durée** : Non, la durée reste la même (1 ou 3 ans).
    </details>

38. L'utilisateur est pleinement responsable de quelle action lors de l'exécution de charges de travail sur AWS ?
    - A. Appliquer les correctifs sur les composants d'infrastructure
    - B. Implémenter des contrôles pour router le trafic applicatif
    - C. Maintenir les contrôles physiques et environnementaux
    - D. Maintenir les composants d'infrastructure sous-jacents

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Implémenter des contrôles pour router le trafic applicatif** : Le client est responsable de la configuration des routeurs, équilibreurs de charge, et autres contrôles de trafic au niveau applicatif.
    - **Autres options incorrectes** ❌ :
      - **A. Appliquer les correctifs sur l'infrastructure** : Responsabilité d'AWS.
      - **C. Maintenir les contrôles physiques** : Responsabilité d'AWS.
      - **D. Maintenir l'infrastructure sous-jacente** : Responsabilité d'AWS.
    </details>

39. Une conception d'architecture inclut Amazon EC2, un Elastic Load Balancer et Amazon RDS. <br/> Quelle est la MEILLEURE façon d'obtenir une estimation des coûts mensuels pour cette architecture ?
    - A. Ouvrir un cas de support AWS, fournir la proposition d'architecture et demander une estimation des coûts mensuels.
    - B. Collecter les prix publiés des services AWS et calculer l'estimation mensuelle.
    - C. Utiliser l'AWS Simple Monthly Calculator pour estimer le coût mensuel.
    - D. Utiliser l'AWS Total Cost of Ownership (TCO) Calculator pour estimer le coût mensuel.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Utiliser l'AWS Simple Monthly Calculator** : Outil en ligne qui permet d'estimer les coûts basés sur les services et leur utilisation.
    - **Autres options incorrectes** ❌ :
      - **A. Ouvrir un cas de support** : Le support ne fournit pas d'estimations de coûts.
      - **B. Collecter les prix publiés** : Fastidieux et sujet aux erreurs.
      - **D. AWS TCO Calculator** : Compare les coûts avec un environnement sur site, pas pour estimer les coûts mensuels d'une architecture spécifique.
    </details>

40. Quels sont les avantages d'utiliser Amazon RDS par rapport à Amazon EC2 lors de l'exécution de bases de données relationnelles sur AWS ? (Choisissez deux.)
    - A. Sauvegardes automatisées
    - B. Gestion du schéma
    - C. Indexation des tables
    - D. Application des correctifs logiciels
    - E. Gestion ETL (extract, transform, load)

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Sauvegardes automatisées** : RDS effectue des sauvegardes automatiques.
      - **D. Application des correctifs logiciels** : RDS applique les correctifs du moteur de base de données.
    - **Autres options incorrectes** ❌ :
      - **B. Gestion du schéma** : Responsabilité du client, même avec RDS.
      - **C. Indexation des tables** : Responsabilité du client.
      - **E. Gestion ETL** : Non fourni par RDS.
    </details>

41. Que propose la classe de stockage Amazon S3 Intelligent-Tiering ?
    - A. Flexibilité de paiement en réservant de la capacité de stockage
    - B. Rétention à long terme des données en copiant les données vers un volume Amazon Elastic Block Store (EBS) chiffré
    - C. Économies de coûts automatiques en déplaçant les objets entre les niveaux en fonction des changements de modèle d'accès
    - D. Stockage sécurisé, durable et le moins coûteux pour l'archivage de données

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Économies de coûts automatiques en déplaçant les objets entre les niveaux** : S3 Intelligent-Tiering déplace automatiquement les objets entre les niveaux d'accès fréquent et peu fréquent en fonction des modèles d'accès.
    - **Autres options incorrectes** ❌ :
      - **A. Réservation de capacité** : S3 est un service à la demande, pas de réservation.
      - **B. Copie vers EBS** : Non, les données restent dans S3.
      - **D. Stockage le moins coûteux pour l'archivage** : C'est S3 Glacier Deep Archive.
    </details>

42. Une entreprise a plusieurs sources de données à travers l'organisation et veut consolider les données dans un seul entrepôt de données. <br/> Quel service AWS peut être utilisé pour répondre à cette exigence ?
    - A. Amazon DynamoDB
    - B. Amazon Redshift
    - C. Amazon Athena
    - D. Amazon QuickSight

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon Redshift** : Entrepôt de données (data warehouse) conçu pour l'analyse de grandes quantités de données.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon DynamoDB** : Base de données NoSQL pour charges de travail transactionnelles.
      - **C. Amazon Athena** : Service de requête interactive pour S3, pas un entrepôt de données.
      - **D. Amazon QuickSight** : Service de business intelligence et de visualisation.
    </details>

43. Quel service AWS peut être utilisé pour suivre les changements de ressources et établir la conformité ?
    - A. Amazon CloudWatch
    - B. AWS Config
    - C. AWS CloudTrail
    - D. AWS Trusted Advisor

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Config** : Évalue, audite et évalue la configuration des ressources, et suit les changements pour la conformité.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon CloudWatch** : Service de surveillance des performances.
      - **C. AWS CloudTrail** : Enregistre l'activité des API, pas la configuration des ressources.
      - **D. AWS Trusted Advisor** : Fournit des recommandations.
    </details>

44. Un utilisateur a des ressources sous-utilisées sur site. <br/> Quel concept du cloud AWS peut LE MIEUX résoudre ce problème ?
    - A. Haute disponibilité
    - B. Élasticité
    - C. Sécurité
    - D. Découplage lâche

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Élasticité** : Permet d'ajuster dynamiquement les ressources à la demande, évitant le surprovisionnement.
    - **Autres options incorrectes** ❌ :
      - **A. Haute disponibilité** : Garantit que le système est opérationnel.
      - **C. Sécurité** : Protège les données et les systèmes.
      - **D. Découplage lâche** : Réduit les interdépendances entre composants.
    </details>

45. Un utilisateur a une charge de travail avec état qui s'exécutera sur Amazon EC2 pendant les 3 prochaines années. <br/> Quel est le modèle de tarification le PLUS rentable pour cette charge de travail ?
    - A. Instances à la demande
    - B. Instances réservées
    - C. Instances dédiées
    - D. Instances Spot

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Instances réservées** : Offrent les plus grandes économies (jusqu'à 75%) pour les charges de travail stables et prévisibles sur 1 ou 3 ans.
    - **Autres options incorrectes** ❌ :
      - **A. Instances à la demande** : Plus chères sur le long terme.
      - **C. Instances dédiées** : Matériel dédié, plus coûteux.
      - **D. Instances Spot** : Peuvent être interrompues, non adaptées aux charges de travail avec état continues.
    </details>

46. Un praticien cloud a besoin d'une instance Amazon EC2 pour démarrer et s'exécuter pendant 7 heures sans interruptions. <br/> Quelle est l'option la plus adaptée et la plus rentable pour cette tâche ?
    - A. Instance à la demande
    - B. Instance réservée
    - C. Hôte dédié
    - D. Instance Spot

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Instance à la demande** : Parfaites pour des charges de travail courtes et imprévisibles sans engagement.
    - **Autres options incorrectes** ❌ :
      - **B. Instance réservée** : Pour des charges de travail continues sur 1 ou 3 ans.
      - **C. Hôte dédié** : Coûteux et non nécessaire.
      - **D. Instance Spot** : Risque d'interruption, pas adapté pour une exécution sans interruption de 7 heures.
    </details>

47. Quels sont les avantages d'utiliser AWS Trusted Advisor ? (Choisissez deux.)
    - A. Fournir une orchestration de conteneurs haute performance
    - B. Créer et faire tourner des clés de chiffrement
    - C. Détecter les ressources sous-utilisées pour économiser des coûts
    - D. Améliorer la sécurité en surveillant proactivement l'environnement AWS
    - E. Implémenter le tagging obligatoire sur les ressources AWS

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : C, D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **C. Détecter les ressources sous-utilisées** : Trusted Advisor identifie les instances EC2 sous-utilisées, les volumes EBS non attachés, etc.
      - **D. Améliorer la sécurité** : Vérifie les configurations de sécurité comme les groupes de sécurité trop permissifs.
    - **Autres options incorrectes** ❌ :
      - **A. Orchestration de conteneurs** : C'est le rôle d'Amazon ECS ou EKS.
      - **B. Gestion des clés de chiffrement** : C'est le rôle d'AWS KMS.
      - **E. Tagging obligatoire** : Trusted Advisor peut vérifier le tagging, mais ne l'implémente pas.
    </details>

48. Un développeur a été embauché par une grande entreprise et a besoin d'identifiants AWS. <br/> Quelles sont les meilleures pratiques de sécurité à suivre ? (Choisissez deux.)
    - A. Accorder au développeur l'accès uniquement aux ressources AWS nécessaires pour effectuer son travail.
    - B. Partager les identifiants de l'utilisateur root du compte AWS avec le développeur.
    - C. Ajouter le développeur au groupe des administrateurs dans AWS IAM.
    - D. Configurer une politique de mot de passe qui empêche le développeur de changer son mot de passe.
    - E. S'assurer que la politique de mot de passe du compte exige une longueur minimale.

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : A, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Principe du moindre privilège** : Accorder uniquement les permissions nécessaires.
      - **E. Exiger une longueur minimale de mot de passe** : Meilleure pratique de sécurité pour les mots de passe.
    - **Autres options incorrectes** ❌ :
      - **B. Partager les identifiants root** : Jamais partager les identifiants root.
      - **C. Ajouter au groupe administrateur** : Donne trop de permissions, violation du moindre privilège.
      - **D. Empêcher le changement de mot de passe** : Les utilisateurs doivent pouvoir changer leurs mots de passe.
    </details>

49. Quel service de stockage AWS est conçu pour transférer des pétaoctets de données vers et depuis le cloud ?
    - A. AWS Storage Gateway
    - B. Amazon S3 Glacier Deep Archive
    - C. Amazon Lightsail
    - D. AWS Snowball

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Snowball** : Appareil physique pour transférer de grandes quantités de données (To/Po) de manière sécurisée et économique.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Storage Gateway** : Service de stockage hybrre.
      - **B. Amazon S3 Glacier Deep Archive** : Classe de stockage d'archivage à bas coût.
      - **C. Amazon Lightsail** : Service cloud simple avec plans prédéfinis.
    </details>

50. Quel service fournit à un utilisateur la capacité d'entreposer des données dans le cloud AWS ?
    - A. Amazon EFS
    - B. Amazon Redshift
    - C. Amazon RDS
    - D. Amazon VPC

    <details markdown=1><summary markdown='span'>Réponse</summary>
      Réponse correcte : B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Amazon Redshift** : Entrepôt de données (data warehouse) pour l'analyse de grandes quantités de données.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon EFS** : Service de stockage de fichiers élastique.
      - **C. Amazon RDS** : Service de base de données relationnelle.
      - **D. Amazon VPC** : Réseau privé virtuel.
    </details>