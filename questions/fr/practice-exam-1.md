---
layout: exam
---

# Examen de pratique 1

1. AWS permet aux utilisateurs de gérer leurs ressources via une interface utilisateur web. Comment s'appelle cette interface ?
    - A. AWS CLI.
    - B. AWS API.
    - C. AWS SDK.
    - D. AWS Management Console.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Management Console** : C'est l'interface web graphique qui permet de gérer et d'interagir avec les services AWS de manière visuelle, sans avoir à écrire de commandes.
    - **Autres options incorrectes** ❌ :
      - **A. AWS CLI** : Interface en ligne de commande pour interagir avec AWS via des commandes texte, pas une interface web.
      - **B. AWS API** : Interfaces de programmation permettant d'effectuer des appels HTTP/HTTPS pour gérer AWS, mais ce n'est pas une interface utilisateur web.
      - **C. AWS SDK** : Kits de développement logiciel (Software Development Kits) pour intégrer AWS dans des applications, pas une interface web de gestion.
    </details>

2. Lequel des exemples suivants correspond à une mise à l'échelle horizontale (horizontal scaling) dans le cloud AWS ?
    - A. Remplacer une instance EC2 existante par une instance plus grande et plus puissante.
    - B. Augmenter la capacité de calcul d'une seule instance EC2 pour répondre à la demande croissante d'une application.
    - C. Ajouter plus de capacité RAM à une instance EC2.
    - D. Ajouter plus d'instances EC2 de la même taille pour gérer une augmentation du trafic.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Ajouter plus d'instances EC2 de la même taille pour gérer une augmentation du trafic** : La mise à l'échelle horizontale consiste à ajouter ou supprimer des instances (ou nœuds) pour adapter la capacité, plutôt que de modifier la taille d'une instance existante.
    - **Autres options incorrectes** ❌ :
      - **A. Remplacer une instance EC2 existante par une instance plus grande et plus puissante** : C'est de la mise à l'échelle verticale (vertical scaling), qui modifie la taille/puissance d'une instance.
      - **B. Augmenter la capacité de calcul d'une seule instance EC2** : Également de la mise à l'échelle verticale.
      - **C. Ajouter plus de capacité RAM à une instance EC2** : Encore une fois, de la mise à l'échelle verticale.
    </details>

3. Vous avez remarqué que plusieurs instances Amazon EC2 critiques ont été terminées. Lequel des services AWS suivants vous aiderait à déterminer qui a effectué cette action ?
    - A. Amazon Inspector.
    - B. AWS CloudTrail.
    - C. AWS Trusted Advisor.
    - D. EC2 Instance Usage Report.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS CloudTrail** : Ce service enregistre l'historique des appels d'API et des actions de gestion effectuées sur votre compte AWS, vous permettant de savoir qui a fait quoi, quand et depuis où.
    - **Autres options incorrectes** ❌ :
      - **A. Amazon Inspector** : Service d'évaluation de sécurité automatisé pour les applications déployées sur EC2, pas pour l'audit des actions utilisateur.
      - **C. AWS Trusted Advisor** : Fournit des recommandations pour optimiser coûts, performances, sécurité et fiabilité, mais ne journalise pas les actions.
      - **D. EC2 Instance Usage Report** : Rapport sur l'utilisation des instances EC2 (heures, coûts), pas sur les actions d'administration.
    </details>

4. Lesquelles des options ci-dessous sont liées à la fiabilité (reliability) d'AWS ? (Choisissez DEUX)
    - A. Appliquer le principe du moindre privilège à toutes les ressources AWS.
    - B. Provisionner automatiquement de nouvelles ressources pour répondre à la demande.
    - C. Tous les services AWS sont considérés comme des services globaux, et cette conception aide les clients à servir leurs utilisateurs internationaux.
    - D. Fournir une compensation aux clients en cas de problèmes.
    - E. Capacité à récupérer rapidement après des défaillances.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **B. Provisionner automatiquement de nouvelles ressources pour répondre à la demande** : L'élasticité est un principe clé de la fiabilité, permettant au système de s'adapter à la charge.
      - **E. Capacité à récupérer rapidement après des défaillances** : La capacité de résilience et de reprise après sinistre est au cœur de la fiabilité.
    - **Autres options incorrectes** ❌ :
      - **A. Appliquer le principe du moindre privilège** : Il s'agit d'un principe de sécurité, pas de fiabilité.
      - **C. Tous les services AWS sont considérés comme des services globaux** : Ce n'est pas vrai. De nombreux services sont régionaux. Même si certains services sont globaux, cela relève plus de la portée mondiale que de la fiabilité intrinsèque.
      - **D. Fournir une compensation aux clients** : Il s'agit d'une clause de niveau de service (SLA), pas d'une caractéristique de fiabilité architecturale.
    </details>

5. Quelle affirmation est vraie concernant le modèle de responsabilité partagée (Shared Responsibility Model) d'AWS ?
    - A. Les responsabilités varient selon les services utilisés.
    - B. La sécurité des services IaaS est la responsabilité d'AWS.
    - C. L'application des correctifs sur le système d'exploitation invité (guest OS) est toujours la responsabilité d'AWS.
    - D. La sécurité des services managés est la responsabilité du client.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **A. Les responsabilités varient selon les services utilisés** : Le modèle de responsabilité partagée définit que la répartition des responsabilités (sécurité *du* cloud vs sécurité *dans* le cloud) dépend du type de service (IaaS, PaaS, SaaS). AWS est toujours responsable de l'infrastructure sous-jacente, mais la part de responsabilité du client varie.
    - **Autres options incorrectes** ❌ :
      - **B. La sécurité des services IaaS est la responsabilité d'AWS** : Pour les services IaaS (comme EC2), AWS est responsable de la sécurité *du* cloud (infrastructure physique, hyperviseur), mais le client est responsable de la sécurité *dans* le cloud (système d'exploitation invité, applications, données).
      - **C. L'application des correctifs sur le système d'exploitation invité est toujours la responsabilité d'AWS** : C'est faux. Pour les services de type IaaS, c'est la responsabilité du client. Pour les services managés (PaaS, SaaS), AWS peut en assumer une partie.
      - **D. La sécurité des services managés est la responsabilité du client** : Pour les services managés (comme RDS, DynamoDB), AWS assume une plus grande part de responsabilité (par exemple, correction des vulnérabilités du système d'exploitation et du logiciel de base de données).
    </details>

6. Vous avez configuré la facturation consolidée (consolidated billing) pour plusieurs comptes AWS. L'un des comptes a acheté un certain nombre d'instances réservées (Reserved Instances) pour 3 ans. Lequel des énoncés suivants est vrai dans ce scénario ?
    - A. Les remises des instances réservées ne peuvent être partagées qu'avec le compte maître.
    - B. Tous les comptes peuvent bénéficier de l'avantage de coût horaire des instances réservées.
    - C. Les instances achetées auront de meilleures performances que les instances à la demande (On-demand).
    - D. Il n'y a aucun avantage de coût à utiliser la facturation consolidée ; elle est uniquement à des fins d'information.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Tous les comptes peuvent bénéficier de l'avantage de coût horaire des instances réservées** : Avec la facturation consolidée d'AWS Organizations, les remises d'utilisation des instances réservées (RI) et des Savings Plans sont partagées automatiquement entre tous les comptes membres de l'organisation.
    - **Autres options incorrectes** ❌ :
      - **A. Les remises des instances réservées ne peuvent être partagées qu'avec le compte maître** : Faux. Elles sont partagées avec tous les comptes membres.
      - **C. Les instances achetées auront de meilleures performances que les instances à la demande** : Les instances réservées sont un modèle de facturation, pas un type d'instance différent. Les performances sont identiques aux instances à la demande du même type.
      - **D. Il n'y a aucun avantage de coût à utiliser la facturation consolidée** : Faux. La facturation consolidée permet justement de regrouper les achats pour bénéficier de remises volume et de partager les avantages tarifaires des RI.
    </details>

7. Une entreprise a développé une application web de commerce électronique sur AWS. Que doivent-ils faire pour garantir le plus haut niveau de disponibilité pour l'application ?
    - A. Déployer l'application sur plusieurs zones de disponibilité (Availability Zones) et emplacements périphériques (Edge Locations).
    - B. Déployer l'application sur plusieurs zones de disponibilité et sous-réseaux (subnets).
    - C. Déployer l'application sur plusieurs régions (Regions) et zones de disponibilité.
    - D. Déployer l'application sur plusieurs VPC et sous-réseaux.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Déployer l'application sur plusieurs régions (Regions) et zones de disponibilité** : C'est le niveau de redondance le plus élevé. Le déploiement multi-régions protège contre les défaillances à l'échelle d'une région, tandis que le multi-AZ protège contre les défaillances d'une zone de disponibilité.
    - **Autres options incorrectes** ❌ :
      - **A. Déployer l'application sur plusieurs zones de disponibilité et emplacements périphériques** : Les emplacements périphériques (Edge Locations) sont utilisés par CloudFront pour la mise en cache de contenu, pas pour l'exécution d'applications complètes. Ils ne fournissent pas de haute disponibilité pour une application dynamique.
      - **B. Déployer l'application sur plusieurs zones de disponibilité et sous-réseaux** : Le déploiement multi-AZ est une bonne pratique, mais il ne protège pas contre une défaillance régionale.
      - **D. Déployer l'application sur plusieurs VPC et sous-réseaux** : Cela peut augmenter la complexité et la gestion, mais ne garantit pas la haute disponibilité si tous les VPC sont dans la même région.
    </details>

8. Que fournit AWS Snowball ? (Choisissez DEUX)
    - A. Des capacités de calcul intégrées qui permettent aux clients de traiter des données localement.
    - B. Un catalogue de solutions logicielles tierces dont les clients ont besoin pour créer des solutions et gérer leur entreprise.
    - C. Un stockage cloud hybride entre les environnements sur site et le cloud AWS.
    - D. Un service de transfert de données à l'échelle de l'exaoctet qui vous permet de déplacer des quantités extrêmement importantes de données vers AWS.
    - E. Transfert sécurisé de grandes quantités de données vers et depuis AWS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Des capacités de calcul intégrées qui permettent aux clients de traiter des données localement** : AWS Snowball Edge (une variante) offre des capacités de calcul en bordure (edge computing) pour le prétraitement des données.
      - **E. Transfert sécurisé de grandes quantités de données vers et depuis AWS** : Snowball est un service de transfert de données physique sécurisé pour déplacer des téraoctets ou des pétaoctets de données.
    - **Autres options incorrectes** ❌ :
      - **B. Un catalogue de solutions logicielles tierces** : C'est la description d'AWS Marketplace, pas de Snowball.
      - **C. Un stockage cloud hybride entre les environnements sur site et le cloud AWS** : C'est plutôt le rôle d'AWS Storage Gateway.
      - **D. Un service de transfert de données à l'échelle de l'exaoctet** : Cela décrit AWS Snowmobile (camion), pas Snowball (appareil plus petit). Snowball est adapté aux pétaoctets, Snowmobile aux exaoctets.
    </details>

9. Une entreprise a un plan de support AWS Enterprise. Ils veulent des conseils rapides et efficaces pour leurs requêtes de facturation et de compte. Lequel des éléments suivants l'entreprise devrait-elle utiliser ?
    - A. AWS Health Dashboard.
    - B. AWS Support Concierge.
    - C. AWS Customer Service.
    - D. AWS Operations Support.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Support Concierge** : Ce service, inclus dans le plan Enterprise Support, fournit une assistance personnalisée pour les questions de facturation, de compte et d'intégration AWS.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Health Dashboard** : Fournit des informations sur l'état des services AWS et les événements affectant vos ressources, pas d'assistance pour la facturation.
      - **C. AWS Customer Service** : C'est un terme générique. Le Support Concierge est le service spécifique du plan Enterprise pour ce type de requêtes.
      - **D. AWS Operations Support** : Ce n'est pas un service AWS nommé spécifiquement. Les plans de support offrent différents niveaux d'assistance opérationnelle.
    </details>

10. Une entreprise japonaise héberge ses applications sur des instances Amazon EC2 dans la région de Tokyo. L'entreprise a ouvert de nouvelles succursales aux États-Unis, et les utilisateurs américains se plaignent d'une latence élevée. Que peut faire l'entreprise pour réduire la latence pour les utilisateurs aux États-Unis tout en minimisant les coûts ?
    - A. Appliquer la politique de routage basée sur la latence d'Amazon Connect.
    - B. Enregistrer un nouveau nom de domaine américain pour servir les utilisateurs aux États-Unis.
    - C. Construire un nouveau datacenter aux États-Unis et mettre en œuvre un modèle hybride.
    - D. Déployer de nouvelles instances Amazon EC2 dans une région située aux États-Unis.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. Déployer de nouvelles instances Amazon EC2 dans une région située aux États-Unis** : Déployer des ressources dans une région géographiquement proche des utilisateurs finaux est le moyen le plus direct de réduire la latence. C'est également économique car vous utilisez le modèle de paiement à l'usage d'AWS sans investissement initial.
    - **Autres options incorrectes** ❌ :
      - **A. Appliquer la politique de routage basée sur la latence d'Amazon Connect** : Amazon Connect est un service de centre de contact, pas de routage global. Le routage basé sur la latence est une fonctionnalité d'Amazon Route 53, mais cela ne réduirait pas la latence si l'application elle-même est toujours hébergée uniquement au Japon.
      - **B. Enregistrer un nouveau nom de domaine américain** : Cela ne change pas l'emplacement physique des serveurs, donc n'affecte pas la latence.
      - **C. Construire un nouveau datacenter aux États-Unis** : Cela impliquerait des coûts en capital élevés et une complexité de gestion, ce qui n'est pas économique ni agile par rapport à l'utilisation d'AWS.
    </details>

11. Une organisation a un grand nombre d'employés techniques qui opèrent son infrastructure cloud AWS. Qu'est-ce qu'AWS fournit pour les organiser en équipes, puis attribuer les autorisations appropriées à chaque équipe ?
    - A. Rôles IAM.
    - B. Utilisateurs IAM.
    - C. Groupes d'utilisateurs IAM.
    - D. AWS Organizations.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Groupes d'utilisateurs IAM** : Les groupes IAM permettent de regrouper des utilisateurs IAM et d'attacher des politiques d'autorisations au groupe, facilitant ainsi la gestion des permissions par équipe.
    - **Autres options incorrectes** ❌ :
      - **A. Rôles IAM** : Les rôles sont destinés à attribuer des autorisations à des entités AWS (comme des services, des applications) ou pour la fédération, pas pour organiser des utilisateurs en équipes.
      - **B. Utilisateurs IAM** : Ce sont des identités individuelles. Les gérer individuellement pour chaque employé serait fastidieux sans les regrouper.
      - **D. AWS Organizations** : Service pour gérer plusieurs comptes AWS, centraliser la facturation et appliquer des politiques au niveau du compte, pas pour gérer les autorisations des utilisateurs à l'intérieur d'un compte.
    </details>

12. Une entreprise a décidé de migrer sa base de données Oracle vers AWS. Quel service AWS peut aider à réaliser cela sans affecter négativement la fonctionnalité de la base de données source ?
    - A. AWS OpsWorks.
    - B. AWS Database Migration Service.
    - C. AWS Server Migration Service.
    - D. AWS Application Discovery Service.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. AWS Database Migration Service** : AWS DMS est conçu pour migrer des bases de données vers AWS de manière sécurisée et avec un temps d'arrêt minimal. Il prend en charge les migrations homogènes (même moteur) et hétérogènes (moteurs différents) et peut effectuer une réplication continue pour minimiser l'impact.
    - **Autres options incorrectes** ❌ :
      - **A. AWS OpsWorks** : Service de gestion de configuration et de déploiement d'applications à l'aide de Chef ou Puppet, pas pour la migration de bases de données.
      - **C. AWS Server Migration Service** : Automatise la migration de serveurs physiques ou virtuels vers AWS (principalement pour les machines, pas spécifiquement pour les bases de données).
      - **D. AWS Application Discovery Service** : Aide à planifier les migrations en découvrant les applications sur site et leurs dépendances, mais ne migre pas les données.
    </details>

13. Ajuster dynamiquement la capacité de calcul pour réduire les coûts est une mise en œuvre de quelle meilleure pratique cloud AWS ?
    - A. Intégrer la sécurité à chaque couche.
    - B. Paralléliser les tâches.
    - C. Mettre en œuvre l'élasticité.
    - D. Adopter une architecture monolithique.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **C. Mettre en œuvre l'élasticité** : L'élasticité est la capacité de provisionner et de désaffecter dynamiquement des ressources de calcul pour correspondre à la demande, optimisant ainsi les coûts et les performances.
    - **Autres options incorrectes** ❌ :
      - **A. Intégrer la sécurité à chaque couche** : Principe de sécurité important, mais non directement lié à l'ajustement de la capacité de calcul.
      - **B. Paralléliser les tâches** : Technique pour améliorer les performances, mais pas spécifiquement une meilleure pratique cloud pour réduire les coûts via l'ajustement dynamique.
      - **D. Adopter une architecture monolithique** : C'est souvent l'inverse d'une bonne pratique cloud. Les architectures découplées et basées sur des microservices sont recommandées pour l'agilité et l'élasticité.
    </details>

14. Quels sont les avantages d'avoir une infrastructure hébergée sur AWS ? (Choisissez DEUX)
    - A. Augmenter la vitesse et l'agilité.
    - B. Pas besoin de se soucier de la sécurité.
    - C. Obtenir un contrôle total sur l'infrastructure physique.
    - D. Exploiter des applications pour le compte des clients.
    - E. Toute la sécurité physique et la plupart de la sécurité des données/réseau sont prises en charge pour vous.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, E
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Options correctes** ✅ :
      - **A. Augmenter la vitesse et l'agilité** : AWS permet de provisionner des ressources en quelques minutes, accélérant ainsi l'innovation et le time-to-market.
      - **E. Toute la sécurité physique et la plupart de la sécurité des données/réseau sont prises en charge pour vous** : Selon le modèle de responsabilité partagée, AWS est responsable de la sécurité *du* cloud (infrastructure physique, réseau sous-jacent, virtualisation). Le client est responsable de la sécurité *dans* le cloud (données, applications, configurations de sécurité).
    - **Autres options incorrectes** ❌ :
      - **B. Pas besoin de se soucier de la sécurité** : Faux. Le client doit toujours se soucier de la sécurité de ses applications, données et configurations. La sécurité est une responsabilité partagée.
      - **C. Obtenir un contrôle total sur l'infrastructure physique** : C'est l'inverse. AWS gère l'infrastructure physique, le client bénéficie d'une abstraction.
      - **D. Exploiter des applications pour le compte des clients** : AWS fournit l'infrastructure et les services, mais c'est au client de déployer et d'exploiter ses applications.
    </details>

15. Quel est l'avantage de la pratique recommandée par AWS de "découpler" (decoupling) les applications ?
    - A. Permet de traiter une application comme une unité unique et cohésive.
    - B. Réduit les interdépendances afin que les défaillances n'affectent pas d'autres composants de l'application.
    - C. Permet de mettre à jour rapidement et facilement toute application monolithique.
    - D. Permet de suivre tout appel d'API effectué à n'importe quel service AWS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **B. Réduit les interdépendances afin que les défaillances n'affectent pas d'autres composants de l'application** : Le découplage permet de concevoir des systèmes plus résilients où un composant peut échouer sans entraîner l'échec de l'ensemble du système.
    - **Autres options incorrectes** ❌ :
      - **A. Permet de traiter une application comme une unité unique et cohésive** : Cela décrit une architecture monolithique, à l'opposé du découplage.
      - **C. Permet de mettre à jour rapidement et facilement toute application monolithique** : Les applications monolithiques sont souvent difficiles à mettre à jour rapidement. Le découplage (via des microservices) facilite les mises à jour indépendantes.
      - **D. Permet de suivre tout appel d'API** : C'est la fonction de services comme AWS CloudTrail, pas du découplage.
    </details>

16. Lequel des éléments suivants aide un client à visualiser l'activité de facturation d'Amazon EC2 pour le mois dernier ?
    - A. AWS Budgets.
    - B. AWS Pricing Calculator.
    - C. AWS Systems Manager.
    - D. AWS Cost & Usage Reports.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
    - **Option correcte** ✅ :
      - **D. AWS Cost & Usage Reports** : Fournit les données détaillées les plus granulaires sur les coûts et l'utilisation d'AWS, y compris les coûts par service (comme EC2), avec des rapports historiques.
    - **Autres options incorrectes** ❌ :
      - **A. AWS Budgets** : Permet de définir des budgets et des alertes de coût, mais ne fournit pas de rapport détaillé historique.
      - **B. AWS Pricing Calculator** : Outil pour estimer les coûts futurs basés sur une architecture planifiée, pas pour voir la facturation passée.
      - **C. AWS Systems Manager** : Service pour gérer les ressources AWS et hybrides, pas pour la facturation.
    </details>

17. Que gagnez-vous en configurant la facturation consolidée (consolidated billing) pour cinq comptes AWS différents sous un autre compte maître ?
    - A. Les coûts des services AWS seront réduits de moitié par rapport au prix d'origine.
    - B. La fonctionnalité de facturation consolidée est uniquement à des fins d'organisation.
    - C. Chaque compte AWS bénéficie de remises volume.
    - D. Chaque compte AWS obtient cinq fois la capacité des services gratuits (free-tier).

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
    <details markdown=1><summary markdown='span'>Explication</summary>
- **Option correcte** ✅ :
  - **C. Chaque compte AWS bénéficie de remises volume** : La facturation consolidée combine l'utilisation de tous les comptes membres, ce qui peut permettre d'atteindre des seuils de volume plus rapidement et ainsi bénéficier de remises tarifaires (par exemple, pour S3, data transfer). De plus, les avantages des instances réservées et des Savings Plans sont partagés.
- **Autres options incorrectes** ❌ :
  - **A. Les coûts des services AWS seront réduits de moitié** : Faux. Les remises volume ne sont pas nécessairement de 50%. Elles dépendent de l'utilisation totale agrégée.
  - **B. La fonctionnalité de facturation consolidée est uniquement à des fins d'organisation** : Faux. Elle offre des avantages financiers concrets.
  - **D. Chaque compte AWS obtient cinq fois la capacité des services gratuits** : Faux. L'offre gratuite (free tier) s'applique par compte, pas de manière multiplicative.
</details>

18. Que devez-vous faire pour garder les données sur les volumes EBS en sécurité ? (Choisissez DEUX)
    - A. Mettre régulièrement à jour le micrologiciel (firmware) sur les appareils EBS.
    - B. Créer des snapshots EBS.
    - C. S'assurer que les données EBS sont chiffrées au repos.
    - D. Stocker une sauvegarde quotidienne sur un disque externe.
    - E. Empêcher tout accès non autorisé aux datacenters AWS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, C
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Options correctes** ✅ :
  - **B. Créer des snapshots EBS** : Les snapshots sont des sauvegardes ponctuelles incrémentielles des volumes EBS, essentielles pour la récupération après sinistre.
  - **C. S'assurer que les données EBS sont chiffrées au repos** : Le chiffrement au repos protège les données contre tout accès non autorisé en cas de compromission du stockage sous-jacent.
- **Autres options incorrectes** ❌ :
  - **A. Mettre régulièrement à jour le micrologiciel (firmware) sur les appareils EBS** : La maintenance du matériel et du firmware est gérée par AWS, pas par le client (responsabilité partagée).
  - **D. Stocker une sauvegarde quotidienne sur un disque externe** : Cela va à l'encontre de l'utilisation du cloud. Les snapshots EBS sont stockés de manière durable sur S3 et sont la méthode recommandée.
  - **E. Empêcher tout accès non autorisé aux datacenters AWS** : C'est la responsabilité d'AWS, pas du client.
</details>

19. L'une des meilleures pratiques AWS les plus importantes à suivre est le principe d'architecture cloud d'élasticité. Comment ce principe améliore-t-il la conception de votre architecture ?
    - A. En mettant automatiquement à l'échelle vos ressources sur site en fonction des changements de la demande.
    - B. En mettant automatiquement à l'échelle vos ressources AWS à l'aide d'un Elastic Load Balancer.
    - C. En réduisant les interdépendances entre les composants d'application autant que possible.
    - D. En provisionnant automatiquement les ressources AWS requises en fonction des changements de la demande.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Option correcte** ✅ :
  - **D. En provisionnant automatiquement les ressources AWS requises en fonction des changements de la demande** : L'élasticité est la capacité d'un système à augmenter ou diminuer automatiquement les ressources de calcul en fonction de la charge, optimisant ainsi les coûts et les performances.
- **Autres options incorrectes** ❌ :
  - **A. En mettant automatiquement à l'échelle vos ressources sur site** : L'élasticité dans le cloud concerne les ressources cloud, pas sur site.
  - **B. En mettant automatiquement à l'échelle vos ressources AWS à l'aide d'un Elastic Load Balancer** : L'ELB répartit la charge, mais ne provisionne pas automatiquement de nouvelles ressources. L'Auto Scaling est le service qui provisionne/désalloue des instances EC2.
  - **C. En réduisant les interdépendances** : C'est le principe de découplage (loose coupling), pas d'élasticité.
</details>

20. Une startup fonctionne avec des fonds limités et est extrêmement préoccupée par les dépassements de coûts. Laquelle des options ci-dessous peut être utilisée pour notifier l'entreprise lorsque sa facture AWS mensuelle dépasse 2000 $ ? (Choisissez DEUX)
    - A. Configurer une alarme de facturation CloudWatch qui déclenche une notification SNS lorsque le seuil est dépassé.
    - B. Configurer Amazon Simple Email Service pour envoyer des alertes de facturation à leur adresse e-mail quotidiennement.
    - C. Configurer le service AWS Budgets pour alerter l'entreprise lorsque le seuil est dépassé.
    - D. Configurer AWS CloudTrail pour supprimer automatiquement toutes les ressources AWS lorsque le seuil est dépassé.
    - E. Configurer le service Amazon Connect pour alerter l'entreprise lorsque le seuil est dépassé.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Options correctes** ✅ :
  - **A. Configurer une alarme de facturation CloudWatch qui déclenche une notification SNS lorsque le seuil est dépassé** : CloudWatch Billing Alarms permet de surveiller les coûts estimés et d'envoyer des alertes via SNS.
  - **C. Configurer le service AWS Budgets pour alerter l'entreprise lorsque le seuil est dépassé** : AWS Budgets permet de définir des budgets personnalisés et de configurer des alertes lorsque les coûts réels ou prévus dépassent un seuil.
- **Autres options incorrectes** ❌ :
  - **B. Configurer Amazon Simple Email Service pour envoyer des alertes de facturation** : Amazon SES est un service d'envoi d'e-mails transactionnels, mais il n'est pas conçu pour surveiller les coûts AWS. Les alertes de facturation doivent être configurées via CloudWatch ou AWS Budgets.
  - **D. Configurer AWS CloudTrail pour supprimer automatiquement toutes les ressources AWS** : CloudTrail est un service de journalisation, pas d'automatisation de suppression. Une telle automatisation serait risquée et non recommandée.
  - **E. Configurer le service Amazon Connect** : Amazon Connect est un centre de contact cloud, sans rapport avec la surveillance des coûts.
</details>

21. Qu'est-ce qu'Amazon CloudFront utilise pour distribuer le contenu aux utilisateurs mondiaux avec une faible latence ?
    - A. AWS Global Accelerator.
    - B. AWS Regions.
    - C. AWS Edge Locations.
    - D. AWS Availability Zones.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Option correcte** ✅ :
  - **C. AWS Edge Locations** : CloudFront, le réseau de diffusion de contenu (CDN) d'AWS, utilise des emplacements périphériques (Edge Locations) répartis dans le monde entier pour mettre en cache le contenu et le servir aux utilisateurs finaux avec une latence minimale.
- **Autres options incorrectes** ❌ :
  - **A. AWS Global Accelerator** : Améliore la disponibilité et les performances des applications en utilisant le réseau mondial d'AWS, mais n'est pas un CDN de mise en cache.
  - **B. AWS Regions** : Zones géographiques contenant plusieurs zones de disponibilité, utilisées pour déployer des ressources principales, pas pour la diffusion de contenu en bordure.
  - **D. AWS Availability Zones** : Centres de données isolés à l'intérieur d'une région, pour la haute disponibilité, pas pour la distribution de contenu mondial.
</details>

22. À quoi se réfère le "Principe du moindre privilège" (Principle of Least Privilege) ?
    - A. Vous devriez accorder à vos utilisateurs uniquement les permissions dont ils ont besoin quand ils en ont besoin, et rien de plus.
    - B. Tous les utilisateurs IAM devraient avoir au moins les permissions nécessaires pour accéder aux services AWS de base.
    - C. Tous les utilisateurs IAM de confiance devraient avoir accès à n'importe quel service AWS dans le compte AWS respectif.
    - D. Les utilisateurs IAM ne devraient recevoir aucune permission ; pour garder votre compte en sécurité.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Option correcte** ✅ :
  - **A. Vous devriez accorder à vos utilisateurs uniquement les permissions dont ils ont besoin quand ils en ont besoin, et rien de plus** : C'est la définition exacte du principe du moindre privilège : restreindre les autorisations au minimum nécessaire pour accomplir une tâche.
- **Autres options incorrectes** ❌ :
  - **B. Tous les utilisateurs IAM devraient avoir au moins les permissions nécessaires pour accéder aux services AWS de base** : Cela pourrait être trop large. Le principe exige des permissions minimales spécifiques, pas un ensemble de base pour tous.
  - **C. Tous les utilisateurs IAM de confiance devraient avoir accès à n'importe quel service AWS** : C'est l'opposé du principe du moindre privilège.
  - **D. Les utilisateurs IAM ne devraient recevoir aucune permission** : Cela rendrait les comptes inutiles. Les permissions doivent être accordées de manière granulaire, pas totalement refusées.
</details>

23. Lequel des éléments suivants N'APPARTIENT PAS aux modèles de cloud computing AWS ?
    - A. Platform as a Service (PaaS).
    - B. Infrastructure as a Service (IaaS).
    - C. Software as a Service (SaaS).
    - D. Networking as a Service (NaaS).

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Option correcte** ✅ :
  - **D. Networking as a Service (NaaS)** : N'est pas un modèle de cloud computing standard reconnu par AWS. Les trois modèles principaux sont IaaS, PaaS et SaaS.
- **Autres options incorrectes** ❌ :
  - **A. Platform as a Service (PaaS)** : Modèle cloud où le fournisseur fournit une plateforme pour développer, exécuter et gérer des applications (ex: Elastic Beanstalk).
  - **B. Infrastructure as a Service (IaaS)** : Modèle cloud fournissant une infrastructure de calcul virtualisée (ex: EC2, EBS, VPC).
  - **C. Software as a Service (SaaS)** : Modèle cloud où le logiciel est fourni comme un service via internet (ex: Salesforce, Gmail). AWS propose aussi des services SaaS.
</details>

24. Le processus d'identification d'une société de services financiers en ligne exige que les nouveaux utilisateurs passent un entretien en ligne avec leur équipe de sécurité. Les enregistrements vidéo des entretiens ne sont requis qu'en cas de problème juridique ou de violation de conformité réglementaire. Quel est le service le plus économique pour stocker les vidéos enregistrées ?
    - A. S3 Intelligent-Tiering.
    - B. AWS Marketplace.
    - C. Amazon S3 Glacier Deep Archive.
    - D. Amazon EBS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Option correcte** ✅ :
  - **C. Amazon S3 Glacier Deep Archive** : Cette classe de stockage est conçue pour l'archivage à long terme (avec des délais de restauration de 12 heures) et offre le coût de stockage le plus bas par Go. Parfait pour des données rarement consultées, comme des enregistrements à des fins légales.
- **Autres options incorrectes** ❌ :
  - **A. S3 Intelligent-Tiering** : Optimisé pour les données avec des modèles d'accès inconnus ou changeants, mais a un coût de stockage plus élevé que Glacier Deep Archive.
  - **B. AWS Marketplace** : Plateforme pour acheter des logiciels tiers, pas un service de stockage.
  - **D. Amazon EBS** : Stockage de bloc pour les instances EC2, non adapté à l'archivage à long terme et coûteux par Go.
</details>

25. Quel service fournit le DNS dans le cloud AWS ?
    - A. Route 53.
    - B. AWS Config.
    - C. Amazon CloudFront.
    - D. Amazon EMR.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Option correcte** ✅ :
  - **A. Route 53** : Service DNS (Domain Name System) scalable et hautement disponible d'AWS, utilisé pour l'enregistrement de domaines, le routage du trafic et la santé des ressources.
- **Autres options incorrectes** ❌ :
  - **B. AWS Config** : Service d'évaluation, d'audit et d'évaluation de la configuration des ressources.
  - **C. Amazon CloudFront** : Réseau de diffusion de contenu (CDN), pas un service DNS de base.
  - **D. Amazon EMR** : Service de big data pour le traitement de grands ensembles de données.
</details>

26. Des centaines de milliers d'attaques DDoS sont enregistrées chaque mois dans le monde entier. Quel service AWS fournit pour aider à protéger les clients AWS contre ces attaques ? (Choisissez DEUX)
    - A. AWS Shield.
    - B. AWS Config.
    - C. Amazon Cognito.
    - D. AWS WAF.
    - E. AWS KMS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, D
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Options correctes** ✅ :
  - **A. AWS Shield** : Service de protection contre les attaques DDoS (Distributed Denial of Service) managé. Shield Standard est inclus pour tous les clients, Shield Advanced offre une protection avancée.
  - **D. AWS WAF** : Web Application Firewall qui protège les applications web contre les exploits courants (injections SQL, XSS) et peut être utilisé pour atténuer certains types d'attaques DDoS au niveau de la couche application (layer 7).
- **Autres options incorrectes** ❌ :
  - **B. AWS Config** : Service d'audit de configuration, pas de protection DDoS.
  - **C. Amazon Cognito** : Service de gestion des identités utilisateur pour les applications web/mobiles.
  - **E. AWS KMS** : Service de gestion des clés de chiffrement.
</details>

27. Une entreprise déploie une nouvelle application web à deux niveaux dans AWS. Où les données les plus fréquemment consultées doivent-elles être stockées pour que le temps de réponse de l'application soit optimal ?
    - A. AWS OpsWorks.
    - B. AWS Storage Gateway.
    - C. Amazon EBS volume.
    - D. Amazon ElastiCache.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Option correcte** ✅ :
  - **D. Amazon ElastiCache** : Service de cache en mémoire (compatible Redis ou Memcached) conçu pour fournir des performances sub-millisecondes pour les données fréquemment consultées, réduisant ainsi la charge sur les bases de données principales.
- **Autres options incorrectes** ❌ :
  - **A. AWS OpsWorks** : Service de gestion de configuration et de déploiement d'applications, pas un stockage de cache.
  - **B. AWS Storage Gateway** : Service de stockage hybrre qui connecte les environnements sur site au stockage cloud, pas pour le cache.
  - **C. Amazon EBS volume** : Stockage de bloc pour les instances EC2. Bien que performant, il n'atteint pas la latence d'un cache en mémoire et est moins adapté pour les données très fréquemment lues.
</details>

28. Vous voulez exécuter une application de questionnaire pendant seulement un jour (sans interruption). Quelle option d'achat Amazon EC2 devez-vous utiliser ?
    - A. Instances réservées (Reserved instances).
    - B. Instances Spot.
    - C. Instances dédiées (Dedicated instances).
    - D. Instances à la demande (On-demand instances).

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Option correcte** ✅ :
  - **D. Instances à la demande (On-demand instances)** : Parfaites pour des charges de travail courtes et imprévisibles, sans engagement à long terme. Vous payez à l'heure ou à la seconde et pouvez les arrêter quand vous voulez.
- **Autres options incorrectes** ❌ :
  - **A. Instances réservées** : Conçues pour des charges de travail stables prévues sur 1 ou 3 ans, avec un engagement à long terme. Non économiques pour un jour.
  - **B. Instances Spot** : Peuvent être très économiques mais peuvent être interrompues avec un préavis de 2 minutes, ce qui ne convient pas à une exécution sans interruption.
  - **C. Instances dédiées** : Exécutées sur du matériel dédié à un seul client, généralement pour des exigences de conformité, et plus coûteuses. Pas nécessaire pour une simple application d'un jour.
</details>

29. Vous travaillez sur un projet qui implique la création de miniatures (thumbnails) de millions d'images. La disponibilité continue n'est pas un problème, et un traitement continu n'est pas requis. Quelle option d'achat EC2 serait la plus économique ?
    - A. Instances réservées.
    - B. Instances à la demande.
    - C. Instances dédiées.
    - D. Instances Spot.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Option correcte** ✅ :
  - **D. Instances Spot** : Idéales pour les charges de travail flexibles, tolérantes aux interruptions et à forte intensité de calcul, comme le traitement d'images par lots. Elles offrent des économies importantes (jusqu'à 90 % par rapport aux instances à la demande).
- **Autres options incorrectes** ❌ :
  - **A. Instances réservées** : Économiques pour des charges de travail continues et prévisibles, pas pour un traitement par lots occasionnel.
  - **B. Instances à la demande** : Plus chères que les instances Spot pour ce type de charge de travail tolérant aux interruptions.
  - **C. Instances dédiées** : Matériel dédié à un prix plus élevé, non justifié pour ce cas.
</details>

30. Lequel des services suivants peut être décrit comme un réseau de diffusion de contenu (CDN) mondial ?
    - A. AWS VPN.
    - B. AWS Direct Connect.
    - C. AWS Regions.
    - D. Amazon CloudFront.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Option correcte** ✅ :
  - **D. Amazon CloudFront** : C'est le service CDN mondial d'AWS, qui diffuse du contenu (pages web, vidéos, API) avec une faible latence et des débits élevés en utilisant un réseau mondial d'emplacements périphériques.
- **Autres options incorrectes** ❌ :
  - **A. AWS VPN** : Établit une connexion sécurisée entre votre réseau et un VPC AWS, pas un CDN.
  - **B. AWS Direct Connect** : Établit une connexion réseau dédiée entre votre datacenter et AWS, pas un CDN.
  - **C. AWS Regions** : Zones géographiques où AWS possède des centres de données, pas un service de diffusion de contenu.
</details>

31. Lequel des services suivants permet aux clients de gérer leurs accords avec AWS ?
    - A. AWS Artifact.
    - B. AWS Certificate Manager.
    - C. AWS Systems Manager.
    - D. AWS Organizations.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Option correcte** ✅ :
  - **A. AWS Artifact** : Portail centralisé où les clients peuvent consulter et accepter des accords (comme le AWS Business Associate Addendum - BAA) et télécharger des rapports de conformité et des certifications.
- **Autres options incorrectes** ❌ :
  - **B. AWS Certificate Manager** : Gère les certificats SSL/TLS.
  - **C. AWS Systems Manager** : Service pour gérer les ressources AWS et hybrides.
  - **D. AWS Organizations** : Service de gestion de plusieurs comptes AWS et de facturation consolidée.
</details>

32. Lesquels des services suivants sont des exemples de services managés par AWS, où AWS est responsable des charges opérationnelles et de maintenance d'exécution du service ? (Choisissez DEUX)
    - A. Amazon VPC.
    - B. Amazon DynamoDB.
    - C. Amazon Elastic MapReduce.
    - D. AWS IAM.
    - E. Amazon Elastic Compute Cloud.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, C
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Options correctes** ✅ :
  - **B. Amazon DynamoDB** : Base de données NoSQL entièrement managée. AWS gère l'infrastructure, la mise à l'échelle, les correctifs et les sauvegardes.
  - **C. Amazon Elastic MapReduce (EMR)** : Service managé pour le traitement de big data à l'aide de frameworks comme Apache Spark et Hadoop. AWS gère le provisionnement, la configuration et l'ajustement de l'infrastructure.
- **Autres options incorrectes** ❌ :
  - **A. Amazon VPC** : Service de réseau virtuel. Le client est largement responsable de la configuration et de la gestion (sous-réseaux, tables de routage, etc.). AWS gère l'infrastructure sous-jacente.
  - **D. AWS IAM** : Service de gestion des identités et des accès. C'est un service managé, mais il est souvent considéré comme un service de sécurité fondamental. La question demande des exemples de services où AWS prend en charge la charge opérationnelle d'exécution. IAM est managé, mais les options B et C sont de meilleurs exemples de services de calcul ou de données entièrement managés.
  - **E. Amazon Elastic Compute Cloud (EC2)** : Service d'infrastructure as a service (IaaS). Le client a la responsabilité significative de la gestion du système d'exploitation, des applications, etc.
</details>

33. Votre entreprise a une application de stockage de données qui nécessite l'accès à une base de données NoSQL. Quelle offre de base de données AWS répondrait à cette exigence ?
    - A. Amazon Aurora.
    - B. Amazon DynamoDB.
    - C. Amazon Elastic Block Store.
    - D. Amazon Redshift.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Option correcte** ✅ :
  - **B. Amazon DynamoDB** : Base de données NoSQL clé-valeur et document entièrement managée, conçue pour des performances élevées à n'importe quelle échelle.
- **Autres options incorrectes** ❌ :
  - **A. Amazon Aurora** : Base de données relationnelle compatible MySQL et PostgreSQL, pas NoSQL.
  - **C. Amazon Elastic Block Store (EBS)** : Service de stockage par blocs pour EC2, pas une base de données.
  - **D. Amazon Redshift** : Entrepôt de données (data warehouse) pour l'analyse, pas une base de données NoSQL transactionnelle.
</details>

34. Dans le cadre du plan de support Enterprise, qui est le point de contact principal pour les besoins de support continus ?
    - A. Utilisateur AWS Identity and Access Management (IAM).
    - B. Ingénieur Infrastructure Event Management (IEM).
    - C. Partenaires de consultation AWS (AWS Consulting Partners).
    - D. Technical Account Manager (TAM).

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Option correcte** ✅ :
  - **D. Technical Account Manager (TAM)** : Dans le plan Enterprise Support, le TAM est votre point de contact principal dédié, qui fournit des conseils proactifs, des revues d'architecture et coordonne l'accès aux programmes et services de support.
- **Autres options incorrectes** ❌ :
  - **A. Utilisateur AWS IAM** : Tout utilisateur IAM peut ouvrir des cas de support, mais n'est pas le point de contact principal dédié du plan Enterprise.
  - **B. Ingénieur Infrastructure Event Management (IEM)** : L'IEM est un service disponible (généralement contre des frais supplémentaires) pour planifier et gérer des événements spéciaux (comme des lancements), pas le point de contact quotidien.
  - **C. Partenaires de consultation AWS** : Sociétés tierces qui peuvent aider à la conception et à la migration, mais ne font pas partie du support direct d'AWS.
</details>

35. Comment pouvez-vous visualiser la répartition des dépenses AWS dans l'un de vos comptes AWS ?
    - A. En utilisant la console Amazon VPC.
    - B. En contactant l'équipe AWS Support.
    - C. En utilisant AWS Cost Explorer.
    - D. En contactant l'équipe AWS Finance.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Option correcte** ✅ :
  - **C. En utilisant AWS Cost Explorer** : Outil de visualisation des coûts qui permet d'analyser les dépenses AWS au fil du temps, de les décomposer par service, compte, région, balises, etc.
- **Autres options incorrectes** ❌ :
  - **A. Console Amazon VPC** : Pour gérer les réseaux privés virtuels, pas les coûts.
  - **B. Équipe AWS Support** : Peut aider avec des questions de facturation, mais ne fournit pas un outil de visualisation en libre-service.
  - **D. Équipe AWS Finance** : Non, les clients utilisent les outils en libre-service comme Cost Explorer ou les rapports détaillés.
</details>

36. Lequel des éléments suivants un utilisateur IAM doit-il fournir pour interagir avec les services AWS à l'aide de l'interface de ligne de commande AWS (AWS CLI) ?
    - A. Clés d'accès (Access keys).
    - B. Jeton secret (Secret token).
    - C. Identifiant utilisateur (UserID).
    - D. Nom d'utilisateur et mot de passe.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Option correcte** ✅ :
  - **A. Clés d'accès (Access keys)** : Composées d'un ID de clé d'accès et d'une clé d'accès secrète, elles sont utilisées pour signer les requêtes API programmatiques, y compris celles effectuées via AWS CLI.
- **Autres options incorrectes** ❌ :
  - **B. Jeton secret** : Terme générique ; les clés d'accès sont le type spécifique d'informations d'identification pour l'accès programmatique.
  - **C. Identifiant utilisateur (UserID)** : Fait partie de l'identité IAM, mais n'est pas utilisé directement pour l'authentification CLI.
  - **D. Nom d'utilisateur et mot de passe** : Utilisés pour se connecter à la console AWS Management Console, pas pour AWS CLI.
</details>

37. Vous disposez du support AWS Basic, et vous avez découvert que certaines ressources AWS sont utilisées de manière malveillante et pourraient potentiellement compromettre vos données. Que devez-vous faire ?
    - A. Contacter l'équipe AWS Customer Service.
    - B. Contacter l'équipe AWS Abuse.
    - C. Contacter l'équipe AWS Concierge.
    - D. Contacter l'équipe AWS Security.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Option correcte** ✅ :
  - **B. Contacter l'équipe AWS Abuse** : L'équipe Abuse est celle à contacter pour signaler une utilisation abusive ou malveillante des ressources AWS, y compris les violations des conditions d'utilisation.
- **Autres options incorrectes** ❌ :
  - **A. Équipe AWS Customer Service** : Généralement pour les questions de facturation et de compte, pas spécifiquement pour les abus.
  - **C. Équipe AWS Concierge** : Disponible uniquement pour les clients Enterprise Support, pour des questions de facturation et de compte.
  - **D. Équipe AWS Security** : AWS fournit des outils de sécurité, mais pour signaler des abus, il faut contacter l'équipe Abuse.
</details>

38. Sélectionnez DEUX exemples de contrôles partagés AWS.
    - A. Gestion des correctifs (Patch Management).
    - B. Gestion IAM.
    - C. Gestion VPC.
    - D. Gestion de la configuration (Configuration Management).
    - E. Opérations du centre de données.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, D
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Options correctes** ✅ :
  - **A. Gestion des correctifs (Patch Management)** : Exemple de contrôle partagé. AWS est responsable de la mise à jour de l'infrastructure sous-jacente, tandis que le client est responsable de la mise à jour du système d'exploitation invité et des applications.
  - **D. Gestion de la configuration (Configuration Management)** : AWS est responsable de la configuration de l'infrastructure sous-jacente, tandis que le client est responsable de la configuration des systèmes d'exploitation, des bases de données et des applications.
- **Autres options incorrectes** ❌ :
  - **B. Gestion IAM** : Principalement la responsabilité du client (création d'utilisateurs, politiques). AWS gère la fiabilité et la disponibilité du service IAM lui-même.
  - **C. Gestion VPC** : Le client est largement responsable de la configuration des VPC (sous-réseaux, tables de routage, etc.). AWS gère l'infrastructure réseau physique.
  - **E. Opérations du centre de données** : Contrôle entièrement hérité par AWS (responsabilité d'AWS).
</details>

39. Afin de mettre en œuvre les meilleures pratiques lors de la gestion d'un "point de défaillance unique" (Single Point of Failure), vous devriez essayer de construire autant d'automatisation que possible à la fois pour détecter et réagir aux défaillances. Lequel des services AWS suivants vous aiderait ? (Choisissez DEUX)
    - A. ELB.
    - B. Auto Scaling.
    - C. Amazon Athen.
    - D. ECR.
    - E. Amazon EC2.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, B
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Options correctes** ✅ :
  - **A. ELB (Elastic Load Balancer)** : Répartit le trafic entre plusieurs instances saines, aidant à éviter qu'une instance défaillante ne devienne un point de défaillance unique.
  - **B. Auto Scaling** : Permet de remplacer automatiquement les instances défaillantes et d'ajuster le nombre d'instances en fonction de la demande, assurant ainsi la disponibilité.
- **Autres options incorrectes** ❌ :
  - **C. Amazon Athen** : Service de requête interactive de données sur S3, sans rapport avec la haute disponibilité et la tolérance aux pannes.
  - **D. ECR (Elastic Container Registry)** : Registre de conteneurs Docker managé, pour stocker des images, pas pour gérer la haute disponibilité.
  - **E. Amazon EC2** : Service de calcul de base, mais en lui-même ne fournit pas d'automatisation pour détecter et réagir aux défaillances. Il est utilisé en conjonction avec ELB et Auto Scaling.
</details>

40. Une entreprise prévoit d'héberger un site web éducatif sur AWS. Leurs cours vidéo seront diffusés dans le monde entier. Lequel des services AWS suivants permettra d'atteindre des vitesses de transfert élevées ?
    - A. Amazon SNS.
    - B. Amazon Kinesis Video Streams.
    - C. AWS CloudFormation.
    - D. Amazon CloudFront.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Option correcte** ✅ :
  - **D. Amazon CloudFront** : En tant que CDN, CloudFront diffuse du contenu multimédia à partir d'emplacements périphériques proches des utilisateurs finaux, offrant ainsi des vitesses de transfert élevées et une faible latence à l'échelle mondiale.
- **Autres options incorrectes** ❌ :
  - **A. Amazon SNS** : Service de notification et de messagerie, pas pour la diffusion de contenu.
  - **B. Amazon Kinesis Video Streams** : Permet d'ingérer et de traiter des flux vidéo en temps réel, mais n'est pas optimisé pour la diffusion mondiale à grande échelle de contenu vidéo à la demande.
  - **C. AWS CloudFormation** : Service d'infrastructure as code, pas pour la diffusion de contenu.
</details>

41. Un développeur prévoit de construire une application web à deux niveaux qui a une couche de base de données MySQL. Lequel des services de base de données AWS suivants fournirait des sauvegardes automatisées pour l'application ?
    - A. Une base de données MySQL installée sur une instance EC2.
    - B. Amazon Aurora.
    - C. Amazon DynamoDB.
    - D. Amazon Neptune.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Option correcte** ✅ :
  - **B. Amazon Aurora** : Base de données relationnelle compatible MySQL (et PostgreSQL) entièrement managée qui offre des sauvegardes automatisées, des restaurations ponctuelles et une réplication continue vers S3.
- **Autres options incorrectes** ❌ :
  - **A. Une base de données MySQL installée sur une instance EC2** : Le client serait responsable de la mise en œuvre de ses propres sauvegardes automatisées.
  - **C. Amazon DynamoDB** : Base de données NoSQL avec sauvegarde et restauration intégrées, mais la question spécifie une application MySQL. DynamoDB n'est pas relationnel.
  - **D. Amazon Neptune** : Base de données de graphe, pas compatible MySQL et non adaptée à une application web à deux niveaux standard.
</details>

42. Quel est le service AWS qui permet aux architectes AWS de gérer l'infrastructure sous forme de code ?
    - A. AWS CloudFormation.
    - B. AWS Config.
    - C. Amazon SES.
    - D. Amazon EMR.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Option correcte** ✅ :
  - **A. AWS CloudFormation** : Service qui permet de modéliser, provisionner et gérer les ressources AWS et tierces en utilisant des modèles texte (JSON ou YAML), traitant l'infrastructure comme du code.
- **Autres options incorrectes** ❌ :
  - **B. AWS Config** : Évalue et audite la configuration des ressources, mais ne les provisionne pas.
  - **C. Amazon SES** : Service de courrier électronique transactionnel.
  - **D. Amazon EMR** : Service de big data managé.
</details>

43. Selon le modèle de responsabilité partagée, lequel des éléments suivants est de la responsabilité d'AWS ?
    - A. Chiffrement côté client.
    - B. Configuration des dispositifs d'infrastructure.
    - C. Chiffrement côté serveur.
    - D. Filtrage du trafic avec les groupes de sécurité (Security Groups).

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Option correcte** ✅ :
  - **B. Configuration des dispositifs d'infrastructure** : AWS est responsable de la configuration et de la maintenance de l'infrastructure matérielle et logicielle sous-jacente (serveurs, routeurs, commutateurs, hyperviseurs) qui exécute les services cloud.
- **Autres options incorrectes** ❌ :
  - **A. Chiffrement côté client** : Responsabilité du client.
  - **C. Chiffrement côté serveur** : Cela peut être une responsabilité partagée. AWS fournit des outils (comme SSE-S3), mais le client doit les activer et gérer les clés dans certains cas.
  - **D. Filtrage du trafic avec les groupes de sécurité** : Responsabilité du client (configuration des règles).
</details>

44. Que fournit le tableau de bord AWS Health ? (Choisissez DEUX)
    - A. Des conseils de dépannage détaillés pour résoudre les événements AWS impactant vos ressources.
    - B. Des contrôles de santé pour les instances Auto Scaling.
    - C. Des recommandations pour l'optimisation des coûts.
    - D. Un tableau de bord détaillant les vulnérabilités dans vos applications.
    - E. Une vue personnalisée de l'état de santé des services AWS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, E
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Options correctes** ✅ :
  - **A. Des conseils de dépannage détaillés pour résoudre les événements AWS impactant vos ressources** : AWS Health fournit des informations spécifiques et des conseils d'action lorsqu'un événement AWS affecte vos ressources.
  - **E. Une vue personnalisée de l'état de santé des services AWS** : Il offre une vue personnalisée de l'état de performance et de disponibilité des services AWS que vous utilisez, avec des alertes et des notifications.
- **Autres options incorrectes** ❌ :
  - **B. Des contrôles de santé pour les instances Auto Scaling** : Ces contrôles sont effectués par le service Auto Scaling lui-même ou par un ELB, pas par AWS Health.
  - **C. Des recommandations pour l'optimisation des coûts** : C'est le rôle d'AWS Trusted Advisor ou AWS Cost Explorer.
  - **D. Un tableau de bord détaillant les vulnérabilités dans vos applications** : C'est le rôle de services comme Amazon Inspector ou AWS Security Hub.
</details>

45. Vous avez déployé votre application sur plusieurs instances Amazon EC2. Vos clients se plaignent que parfois ils ne peuvent pas atteindre votre application. Quel service AWS vous permet de surveiller les performances de vos instances EC2 pour aider à résoudre ces problèmes ?
    - A. AWS Lambda.
    - B. AWS Config.
    - C. Amazon CloudWatch.
    - D. AWS CloudTrail.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Option correcte** ✅ :
  - **C. Amazon CloudWatch** : Service de surveillance qui collecte des métriques (comme l'utilisation du CPU, l'état de l'instance) et des logs, permettant de définir des alarmes et de diagnostiquer les problèmes de performance et de disponibilité.
- **Autres options incorrectes** ❌ :
  - **A. AWS Lambda** : Service de calcul serverless, pas de surveillance.
  - **B. AWS Config** : Audite la configuration des ressources, pas les performances en temps réel.
  - **D. AWS CloudTrail** : Journalise l'activité des API pour la gouvernance, la conformité et l'audit, pas pour la surveillance des performances.
</details>

46. Votre entreprise développe une application web critique dans AWS, et la sécurité de l'application est une priorité absolue. Lequel des services AWS suivants fournira des recommandations d'optimisation de la sécurité de l'infrastructure ?
    - A. AWS Shield.
    - B. AWS Management Console.
    - C. AWS Secrets Manager.
    - D. AWS Trusted Advisor.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Option correcte** ✅ :
  - **D. AWS Trusted Advisor** : Analyse votre environnement AWS et fournit des recommandations en temps réel dans cinq catégories : coût, performance, sécurité, tolérance aux pannes et limites de service. Les vérifications de sécurité incluent des conseils sur les groupes de sécurité, les configurations IAM, etc.
- **Autres options incorrectes** ❌ :
  - **A. AWS Shield** : Service de protection DDoS, ne fournit pas de recommandations d'optimisation de sécurité générale.
  - **B. AWS Management Console** : Interface web pour accéder à AWS, pas un service de conseil.
  - **C. AWS Secrets Manager** : Aide à sécuriser les secrets (mots de passe, clés API), mais ne fournit pas de recommandations d'optimisation de l'infrastructure.
</details>

47. Lequel des énoncés suivants n'est PAS un avantage d'Amazon S3 ? (Choisissez DEUX)
    - A. Amazon S3 fournit un stockage illimité pour tout type de données.
    - B. Amazon S3 peut exécuter n'importe quel type d'application ou système backend.
    - C. Amazon S3 stocke n'importe quel nombre d'objets, mais avec des limites de taille d'objet.
    - D. Amazon S3 peut être mis à l'échelle manuellement pour stocker et récupérer n'importe quelle quantité de données de n'importe où.
    - E. Amazon S3 fournit une durabilité des données de 99,999999999 % (11 9).

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, D
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Options correctes** ✅ (ceux qui ne sont PAS des avantages) :
  - **B. Amazon S3 peut exécuter n'importe quel type d'application ou système backend** : S3 est un service de stockage d'objets, pas un service de calcul. Il ne peut pas exécuter d'applications.
  - **D. Amazon S3 peut être mis à l'échelle manuellement pour stocker et récupérer n'importe quelle quantité de données** : S3 est conçu pour une mise à l'échelle automatique et illimitée. Il n'y a pas besoin de le mettre à l'échelle manuellement.
- **Autres options incorrectes** ❌ (ceux qui SONT des avantages) :
  - **A. Amazon S3 fournit un stockage illimité pour tout type de données** : Vrai, S3 offre un stockage illimité pour pratiquement n'importe quel type de données.
  - **C. Amazon S3 stocke n'importe quel nombre d'objets, mais avec des limites de taille d'objet** : Vrai, vous pouvez stocker un nombre illimité d'objets, mais la taille d'un objet individuel est limitée (jusqu'à 5 To).
  - **E. Amazon S3 fournit une durabilité des données de 99,999999999 % (11 9)** : Vrai, c'est la durabilité conçue pour S3 Standard.
</details>

48. Dans le modèle de responsabilité partagée AWS, lesquels des éléments suivants sont de la responsabilité du client ? (Choisissez DEUX)
    - A. Destruction des disques.
    - B. Contrôle de l'accès physique aux ressources de calcul.
    - C. Application des correctifs sur l'infrastructure réseau.
    - D. Définition des règles de complexité des mots de passe.
    - E. Configuration des règles d'accès réseau.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D, E
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Options correctes** ✅ :
  - **D. Définition des règles de complexité des mots de passe** : Le client est responsable de la politique de mots de passe pour ses utilisateurs IAM.
  - **E. Configuration des règles d'accès réseau** : Le client est responsable de la configuration des groupes de sécurité (Security Groups) et des listes de contrôle d'accès réseau (NACLs) pour contrôler le trafic.
- **Autres options incorrectes** ❌ :
  - **A. Destruction des disques** : AWS est responsable de la destruction sécurisée des supports de stockage physiques en fin de vie.
  - **B. Contrôle de l'accès physique aux ressources de calcul** : C'est la responsabilité d'AWS (sécurité des centres de données).
  - **C. Application des correctifs sur l'infrastructure réseau** : AWS est responsable de la mise à jour et de la maintenance de l'infrastructure réseau physique.
</details>

49. Qu'est-ce qu'AWS fournit pour déployer des technologies populaires telles qu'IBM MQ sur AWS avec le moins d'effort et de temps ?
    - A. Amazon Aurora.
    - B. Amazon CloudWatch.
    - C. AWS Quick Start reference deployments.
    - D. AWS OpsWorks.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Option correcte** ✅ :
  - **C. AWS Quick Start reference deployments** : Ce sont des guides et des modèles CloudFormation préconstruits qui aident à déployer rapidement des solutions logicielles courantes sur AWS, comme IBM MQ, avec des architectures best practices.
- **Autres options incorrectes** ❌ :
  - **A. Amazon Aurora** : Base de données relationnelle managée.
  - **B. Amazon CloudWatch** : Service de surveillance.
  - **D. AWS OpsWorks** : Service de gestion de configuration et de déploiement d'applications à l'aide de Chef ou Puppet, mais pas spécifiquement pour déployer rapidement des solutions tierces pré-packagées.
</details>

50. Une organisation a décidé d'acheter une instance Amazon EC2 réservée (RI) pour trois ans afin de réduire les coûts. Il est possible que les charges de travail applicatives changent pendant la période de réservation. Quel est le type d'instance réservée (RI) qui permettra à l'entreprise d'échanger l'instance réservée achetée contre une autre instance réservée avec une puissance de calcul supérieure si nécessaire ?
    - A. RI Élastique.
    - B. RI Premium.
    - C. RI Standard.
    - D. RI Convertible.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>
<details markdown=1><summary markdown='span'>Explication</summary>
- **Option correcte** ✅ :
  - **D. RI Convertible** : Les instances réservées Convertibles offrent la flexibilité d'échanger l'instance réservée contre une autre instance réservée Convertible avec des attributs différents (famille d'instance, système d'exploitation, type de location), y compris une puissance de calcul supérieure.
- **Autres options incorrectes** ❌ :
  - **A. RI Élastique** : Ce n'est pas un type d'instance réservée existant.
  - **B. RI Premium** : N'existe pas. Les types sont Standard et Convertible.
  - **C. RI Standard** : Offre la remise la plus élevée mais ne permet pas d'échanger l'instance réservée (sauf dans certaines conditions limitées de modification de la zone de disponibilité, de la taille de l'instance dans la même famille, ou du type de réseau).
</details>