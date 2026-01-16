// Structure de données pour les examens AWS CCP
// Ce fichier est généré automatiquement par convert.js
// Date de génération: 2026-01-16
// Nombre d'examens: 23
// Nombre total de questions: 1142

const allExams = [
  {
    "id": 1,
    "name": "Examen Pratique 1",
    "description": "Examen Pratique 1 - 50 questions",
    "questionCount": 50,
    "duration": 90,
    "questions": [
      {
        "id": "1_1",
        "text": "AWS allows users to manage their resources using a web based user interface. What is the name of this interface?",
        "options": [
          {
            "letter": "A",
            "text": "AWS CLI."
          },
          {
            "letter": "B",
            "text": "AWS API."
          },
          {
            "letter": "C",
            "text": "AWS SDK."
          },
          {
            "letter": "D",
            "text": "AWS Management Console."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. AWS Management Console.."
      },
      {
        "id": "1_2",
        "text": "Which of the following is an example of horizontal scaling in the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "Replacing an existing EC2 instance with a larger, more powerful one."
          },
          {
            "letter": "B",
            "text": "Increasing the compute capacity of a single EC2 instance to address the growing demands of an application."
          },
          {
            "letter": "C",
            "text": "Adding more RAM capacity to an EC2 instance."
          },
          {
            "letter": "D",
            "text": "Adding more EC2 instances of the same size to handle an increase in traffic."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Adding more EC2 instances of the same size to handle an increase in traffic.."
      },
      {
        "id": "1_3",
        "text": "You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Inspector."
          },
          {
            "letter": "B",
            "text": "AWS CloudTrail."
          },
          {
            "letter": "C",
            "text": "AWS Trusted Advisor."
          },
          {
            "letter": "D",
            "text": "EC2 Instance Usage Report."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS CloudTrail.."
      },
      {
        "id": "1_4",
        "text": "Which of the below options are related to the reliability of AWS? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Applying the principle of least privilege to all AWS resources."
          },
          {
            "letter": "B",
            "text": "Automatically provisioning new resources to meet demand."
          },
          {
            "letter": "C",
            "text": "All AWS services are considered Global Services, and this design helps customers serve their international users."
          },
          {
            "letter": "D",
            "text": "Providing compensation to customers if issues occur."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Automatically provisioning new resources to meet demand.."
      },
      {
        "id": "1_5",
        "text": "Which statement is true regarding the AWS Shared Responsibility Model?",
        "options": [
          {
            "letter": "A",
            "text": "Responsibilities vary depending on the services used."
          },
          {
            "letter": "B",
            "text": "Security of the IaaS services is the responsibility of AWS."
          },
          {
            "letter": "C",
            "text": "Patching the guest OS is always the responsibility of AWS."
          },
          {
            "letter": "D",
            "text": "Security of the managed services is the responsibility of the customer."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Responsibilities vary depending on the services used.."
      },
      {
        "id": "1_6",
        "text": "You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?",
        "options": [
          {
            "letter": "A",
            "text": "The Reserved Instance discounts can only be shared with the master account."
          },
          {
            "letter": "B",
            "text": "All accounts can receive the hourly cost benefit of the Reserved Instances."
          },
          {
            "letter": "C",
            "text": "The purchased instances will have better performance than On-demand instances."
          },
          {
            "letter": "D",
            "text": "There are no cost benefits from using consolidated billing; It is for informational purposes only."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. All accounts can receive the hourly cost benefit of the Reserved Instances.."
      },
      {
        "id": "1_7",
        "text": "A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?",
        "options": [
          {
            "letter": "A",
            "text": "Deploy the application across multiple Availability Zones and Edge locations."
          },
          {
            "letter": "B",
            "text": "Deploy the application across multiple Availability Zones and subnets."
          },
          {
            "letter": "C",
            "text": "Deploy the application across multiple Regions and Availability Zones."
          },
          {
            "letter": "D",
            "text": "Deploy the application across multiple VPC’s and subnets."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Deploy the application across multiple Regions and Availability Zones.."
      },
      {
        "id": "1_8",
        "text": "What does AWS Snowball provide? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Built-in computing capabilities that allow customers to process data locally."
          },
          {
            "letter": "B",
            "text": "A catalog of third-party software solutions that customers need to build solutions and run their businesses."
          },
          {
            "letter": "C",
            "text": "A hybrid cloud storage between on-premises environments and the AWS Cloud."
          },
          {
            "letter": "D",
            "text": "An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Built-in computing capabilities that allow customers to process data locally.."
      },
      {
        "id": "1_9",
        "text": "A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Health Dashboard."
          },
          {
            "letter": "B",
            "text": "AWS Support Concierge."
          },
          {
            "letter": "C",
            "text": "AWS Customer Service."
          },
          {
            "letter": "D",
            "text": "AWS Operations Support."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Support Concierge.."
      },
      {
        "id": "1_10",
        "text": "A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?",
        "options": [
          {
            "letter": "A",
            "text": "Applying the Amazon Connect latency-based routing policy."
          },
          {
            "letter": "B",
            "text": "Registering a new US domain name to serve the users in the US."
          },
          {
            "letter": "C",
            "text": "Building a new data center in the US and implementing a hybrid model."
          },
          {
            "letter": "D",
            "text": "Deploying new Amazon EC2 instances in a Region located in the US."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Deploying new Amazon EC2 instances in a Region located in the US.."
      },
      {
        "id": "1_11",
        "text": "An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?",
        "options": [
          {
            "letter": "A",
            "text": "IAM roles."
          },
          {
            "letter": "B",
            "text": "IAM users."
          },
          {
            "letter": "C",
            "text": "IAM user groups."
          },
          {
            "letter": "D",
            "text": "AWS Organizations."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. IAM user groups.."
      },
      {
        "id": "1_12",
        "text": "A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?",
        "options": [
          {
            "letter": "A",
            "text": "AWS OpsWorks."
          },
          {
            "letter": "B",
            "text": "AWS Database Migration Service."
          },
          {
            "letter": "C",
            "text": "AWS Server Migration Service."
          },
          {
            "letter": "D",
            "text": "AWS Application Discovery Service."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Database Migration Service.."
      },
      {
        "id": "1_13",
        "text": "Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?",
        "options": [
          {
            "letter": "A",
            "text": "Build security in every layer."
          },
          {
            "letter": "B",
            "text": "Parallelize tasks."
          },
          {
            "letter": "C",
            "text": "Implement elasticity."
          },
          {
            "letter": "D",
            "text": "Adopt monolithic architecture."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Implement elasticity.."
      },
      {
        "id": "1_14",
        "text": "What are the benefits of having infrastructure hosted in AWS? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Increasing speed and agility."
          },
          {
            "letter": "B",
            "text": "There is no need to worry about security."
          },
          {
            "letter": "C",
            "text": "Gaining complete control over the physical infrastructure."
          },
          {
            "letter": "D",
            "text": "Operating applications on behalf of customers."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Increasing speed and agility.."
      },
      {
        "id": "1_15",
        "text": "What is the advantage of the AWS-recommended practice of \"decoupling\" applications?",
        "options": [
          {
            "letter": "A",
            "text": "Allows treating an application as a single, cohesive unit."
          },
          {
            "letter": "B",
            "text": "Reduces inter-dependencies so that failures do not impact other components of the application."
          },
          {
            "letter": "C",
            "text": "Allows updates of any monolithic application quickly and easily."
          },
          {
            "letter": "D",
            "text": "Allows tracking of any API call made to any AWS service."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Reduces inter-dependencies so that failures do not impact other components of the application.."
      },
      {
        "id": "1_16",
        "text": "Which of the following helps a customer view the Amazon EC2 billing activity for the past month?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Budgets."
          },
          {
            "letter": "B",
            "text": "AWS Pricing Calculator."
          },
          {
            "letter": "C",
            "text": "AWS Systems Manager."
          },
          {
            "letter": "D",
            "text": "AWS Cost & Usage Reports."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. AWS Cost & Usage Reports.."
      },
      {
        "id": "1_17",
        "text": "What do you gain from setting up consolidated billing for five different AWS accounts under another master account?",
        "options": [
          {
            "letter": "A",
            "text": "AWS services’ costs will be reduced to half the original price."
          },
          {
            "letter": "B",
            "text": "The consolidated billing feature is just for organizational purpose."
          },
          {
            "letter": "C",
            "text": "Each AWS account gets volume discounts."
          },
          {
            "letter": "D",
            "text": "Each AWS account gets five times the free-tier services capacity."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Each AWS account gets volume discounts.."
      },
      {
        "id": "1_18",
        "text": "What should you do in order to keep the data on EBS volumes safe? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Regularly update firmware on EBS devices."
          },
          {
            "letter": "B",
            "text": "Create EBS snapshots."
          },
          {
            "letter": "C",
            "text": "Ensure that EBS data is encrypted at rest."
          },
          {
            "letter": "D",
            "text": "Store a backup daily in an external drive."
          }
        ],
        "correctAnswers": [
          "B",
          "C"
        ],
        "explanation": "La réponse correcte est les options B. Create EBS snapshots., C. Ensure that EBS data is encrypted at rest.."
      },
      {
        "id": "1_19",
        "text": "One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture’s design?",
        "options": [
          {
            "letter": "A",
            "text": "By automatically scaling your on-premises resources based on changes in demand."
          },
          {
            "letter": "B",
            "text": "By automatically scaling your AWS resources using an Elastic Load Balancer."
          },
          {
            "letter": "C",
            "text": "By reducing interdependencies between application components wherever possible."
          },
          {
            "letter": "D",
            "text": "By automatically provisioning the required AWS resources based on changes in demand."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. By automatically provisioning the required AWS resources based on changes in demand.."
      },
      {
        "id": "1_20",
        "text": "A startup company is operating on limited funds and is extremely concerned about cost overruns. Which of the below options can be used to notify the company when their monthly AWS bill exceeds $2000? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded."
          },
          {
            "letter": "B",
            "text": "Configure the Amazon Simple Email Service to send billing alerts to their email address on a daily basis."
          },
          {
            "letter": "C",
            "text": "Configure the AWS Budgets Service to alert the company when the threshold is exceeded."
          },
          {
            "letter": "D",
            "text": "Configure AWS CloudTrail to automatically delete all AWS resources when the threshold is exceeded."
          }
        ],
        "correctAnswers": [
          "A",
          "C"
        ],
        "explanation": "La réponse correcte est les options A. Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded., C. Configure the AWS Budgets Service to alert the company when the threshold is exceeded.."
      },
      {
        "id": "1_21",
        "text": "What does Amazon CloudFront use to distribute content to global users with low latency?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Global Accelerator."
          },
          {
            "letter": "B",
            "text": "AWS Regions."
          },
          {
            "letter": "C",
            "text": "AWS Edge Locations."
          },
          {
            "letter": "D",
            "text": "AWS Availability Zones."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Edge Locations.."
      },
      {
        "id": "1_22",
        "text": "What does the \"Principle of Least Privilege\" refer to?",
        "options": [
          {
            "letter": "A",
            "text": "You should grant your users only the permissions they need when they need them and nothing more."
          },
          {
            "letter": "B",
            "text": "All IAM users should have at least the necessary permissions to access the core AWS services."
          },
          {
            "letter": "C",
            "text": "All trusted IAM users should have access to any AWS service in the respective AWS account."
          },
          {
            "letter": "D",
            "text": "IAM users should not be granted any permissions; to keep your account safe."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. You should grant your users only the permissions they need when they need them and nothing more.."
      },
      {
        "id": "1_23",
        "text": "Which of the following does NOT belong to the AWS Cloud Computing models?",
        "options": [
          {
            "letter": "A",
            "text": "Platform as a Service (PaaS)."
          },
          {
            "letter": "B",
            "text": "Infrastructure as a Service (IaaS)."
          },
          {
            "letter": "C",
            "text": "Software as a Service (SaaS)."
          },
          {
            "letter": "D",
            "text": "Networking as a Service (NaaS)."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Networking as a Service (NaaS).."
      },
      {
        "id": "1_24",
        "text": "The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?",
        "options": [
          {
            "letter": "A",
            "text": "S3 Intelligent-Tiering."
          },
          {
            "letter": "B",
            "text": "AWS Marketplace."
          },
          {
            "letter": "C",
            "text": "Amazon S3 Glacier Deep Archive."
          },
          {
            "letter": "D",
            "text": "Amazon EBS."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Amazon S3 Glacier Deep Archive.."
      },
      {
        "id": "1_25",
        "text": "Which service provides DNS in the AWS cloud?",
        "options": [
          {
            "letter": "A",
            "text": "Route 53."
          },
          {
            "letter": "B",
            "text": "AWS Config."
          },
          {
            "letter": "C",
            "text": "Amazon CloudFront."
          },
          {
            "letter": "D",
            "text": "Amazon EMR."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Route 53.."
      },
      {
        "id": "1_26",
        "text": "Hundreds of thousands of DDoS attacks are recorded every month worldwide. What service does AWS provide to help protect AWS Customers from these attacks? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Shield."
          },
          {
            "letter": "B",
            "text": "AWS Config."
          },
          {
            "letter": "C",
            "text": "Amazon Cognito."
          },
          {
            "letter": "D",
            "text": "AWS WAF."
          }
        ],
        "correctAnswers": [
          "A",
          "D"
        ],
        "explanation": "La réponse correcte est les options A. AWS Shield., D. AWS WAF.."
      },
      {
        "id": "1_27",
        "text": "A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application’s response time is optimal?",
        "options": [
          {
            "letter": "A",
            "text": "AWS OpsWorks."
          },
          {
            "letter": "B",
            "text": "AWS Storage Gateway."
          },
          {
            "letter": "C",
            "text": "Amazon EBS volume."
          },
          {
            "letter": "D",
            "text": "Amazon ElastiCache."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Amazon ElastiCache.."
      },
      {
        "id": "1_28",
        "text": "You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?",
        "options": [
          {
            "letter": "A",
            "text": "Reserved instances."
          },
          {
            "letter": "B",
            "text": "Spot instances."
          },
          {
            "letter": "C",
            "text": "Dedicated instances."
          },
          {
            "letter": "D",
            "text": "On-demand instances."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. On-demand instances.."
      },
      {
        "id": "1_29",
        "text": "You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?",
        "options": [
          {
            "letter": "A",
            "text": "Reserved Instances."
          },
          {
            "letter": "B",
            "text": "On-demand Instances."
          },
          {
            "letter": "C",
            "text": "Dedicated Instances."
          },
          {
            "letter": "D",
            "text": "Spot Instances."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Spot Instances.."
      },
      {
        "id": "1_30",
        "text": "Which of the following can be described as a global content delivery network (CDN) service?",
        "options": [
          {
            "letter": "A",
            "text": "AWS VPN."
          },
          {
            "letter": "B",
            "text": "AWS Direct Connect."
          },
          {
            "letter": "C",
            "text": "AWS Regions."
          },
          {
            "letter": "D",
            "text": "Amazon CloudFront."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Amazon CloudFront.."
      },
      {
        "id": "1_31",
        "text": "Which of the following services allows customers to manage their agreements with AWS?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Artifact."
          },
          {
            "letter": "B",
            "text": "AWS Certificate Manager."
          },
          {
            "letter": "C",
            "text": "AWS Systems Manager."
          },
          {
            "letter": "D",
            "text": "AWS Organizations."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Artifact.."
      },
      {
        "id": "1_32",
        "text": "Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon VPC."
          },
          {
            "letter": "B",
            "text": "Amazon DynamoDB."
          },
          {
            "letter": "C",
            "text": "Amazon Elastic MapReduce."
          },
          {
            "letter": "D",
            "text": "AWS IAM."
          }
        ],
        "correctAnswers": [
          "B",
          "C"
        ],
        "explanation": "La réponse correcte est les options B. Amazon DynamoDB., C. Amazon Elastic MapReduce.."
      },
      {
        "id": "1_33",
        "text": "Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Aurora."
          },
          {
            "letter": "B",
            "text": "Amazon DynamoDB."
          },
          {
            "letter": "C",
            "text": "Amazon Elastic Block Store."
          },
          {
            "letter": "D",
            "text": "Amazon Redshift."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Amazon DynamoDB.."
      },
      {
        "id": "1_34",
        "text": "As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Identity and Access Management (IAM) user."
          },
          {
            "letter": "B",
            "text": "Infrastructure Event Management (IEM) engineer."
          },
          {
            "letter": "C",
            "text": "AWS Consulting Partners."
          },
          {
            "letter": "D",
            "text": "Technical Account Manager (TAM)."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Technical Account Manager (TAM).."
      },
      {
        "id": "1_35",
        "text": "How can you view the distribution of AWS spending in one of your AWS accounts?",
        "options": [
          {
            "letter": "A",
            "text": "By using Amazon VPC console."
          },
          {
            "letter": "B",
            "text": "By contacting the AWS Support team."
          },
          {
            "letter": "C",
            "text": "By using AWS Cost Explorer."
          },
          {
            "letter": "D",
            "text": "By contacting the AWS Finance team."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. By using AWS Cost Explorer.."
      },
      {
        "id": "1_36",
        "text": "Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?",
        "options": [
          {
            "letter": "A",
            "text": "Access keys."
          },
          {
            "letter": "B",
            "text": "Secret token."
          },
          {
            "letter": "C",
            "text": "UserID."
          },
          {
            "letter": "D",
            "text": "User name and password."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Access keys.."
      },
      {
        "id": "1_37",
        "text": "You have AWS Basic support, and you have discovered that some AWS resources are being used maliciously, and those resources could potentially compromise your data. What should you do?",
        "options": [
          {
            "letter": "A",
            "text": "Contact the AWS Customer Service team."
          },
          {
            "letter": "B",
            "text": "Contact the AWS Abuse team."
          },
          {
            "letter": "C",
            "text": "Contact the AWS Concierge team."
          },
          {
            "letter": "D",
            "text": "Contact the AWS Security team."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Contact the AWS Abuse team.."
      },
      {
        "id": "1_38",
        "text": "Select TWO examples of the AWS shared controls.",
        "options": [
          {
            "letter": "A",
            "text": "Patch Management."
          },
          {
            "letter": "B",
            "text": "IAM Management."
          },
          {
            "letter": "C",
            "text": "VPC Management."
          },
          {
            "letter": "D",
            "text": "Configuration Management."
          }
        ],
        "correctAnswers": [
          "A",
          "D"
        ],
        "explanation": "La réponse correcte est les options A. Patch Management., D. Configuration Management.."
      },
      {
        "id": "1_39",
        "text": "In order to implement best practices when dealing with a “Single Point of Failure,” you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "ELB."
          },
          {
            "letter": "B",
            "text": "Auto Scaling."
          },
          {
            "letter": "C",
            "text": "Amazon Athen."
          },
          {
            "letter": "D",
            "text": "ECR."
          }
        ],
        "correctAnswers": [
          "A",
          "B"
        ],
        "explanation": "La réponse correcte est les options A. ELB., B. Auto Scaling.."
      },
      {
        "id": "1_40",
        "text": "A company is planning to host an educational website on AWS. Their video courses will be streamed all around the world. Which of the following AWS services will help achieve high transfer speeds?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon SNS."
          },
          {
            "letter": "B",
            "text": "Amazon Kinesis Video Streams."
          },
          {
            "letter": "C",
            "text": "AWS CloudFormation."
          },
          {
            "letter": "D",
            "text": "Amazon CloudFront."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Amazon CloudFront.."
      },
      {
        "id": "1_41",
        "text": "A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?",
        "options": [
          {
            "letter": "A",
            "text": "A MySQL database installed on an EC2 instance."
          },
          {
            "letter": "B",
            "text": "Amazon Aurora."
          },
          {
            "letter": "C",
            "text": "Amazon DynamoDB."
          },
          {
            "letter": "D",
            "text": "Amazon Neptune."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Amazon Aurora.."
      },
      {
        "id": "1_42",
        "text": "What is the AWS service that enables AWS architects to manage infrastructure as code?",
        "options": [
          {
            "letter": "A",
            "text": "AWS CloudFormation."
          },
          {
            "letter": "B",
            "text": "AWS Config."
          },
          {
            "letter": "C",
            "text": "Amazon SES."
          },
          {
            "letter": "D",
            "text": "Amazon EMR."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS CloudFormation.."
      },
      {
        "id": "1_43",
        "text": "Under the shared responsibility model, which of the following is the responsibility of AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Client-side encryption."
          },
          {
            "letter": "B",
            "text": "Configuring infrastructure devices."
          },
          {
            "letter": "C",
            "text": "Server-side encryption."
          },
          {
            "letter": "D",
            "text": "Filtering traffic with Security Groups."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Configuring infrastructure devices.."
      },
      {
        "id": "1_44",
        "text": "What does the AWS Health Dashboard provide? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Detailed troubleshooting guidance to address AWS events impacting your resources."
          },
          {
            "letter": "B",
            "text": "Health checks for Auto Scaling instances."
          },
          {
            "letter": "C",
            "text": "Recommendations for Cost Optimization."
          },
          {
            "letter": "D",
            "text": "A dashboard detailing vulnerabilities in your applications."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Detailed troubleshooting guidance to address AWS events impacting your resources.."
      },
      {
        "id": "1_45",
        "text": "You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can’t reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Lambda."
          },
          {
            "letter": "B",
            "text": "AWS Config."
          },
          {
            "letter": "C",
            "text": "Amazon CloudWatch."
          },
          {
            "letter": "D",
            "text": "AWS CloudTrail."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Amazon CloudWatch.."
      },
      {
        "id": "1_46",
        "text": "Your company is developing a critical web application in AWS, and the security of the application is a top priority. Which of the following AWS services will provide infrastructure security optimization recommendations?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Shield."
          },
          {
            "letter": "B",
            "text": "AWS Management Console."
          },
          {
            "letter": "C",
            "text": "AWS Secrets Manager."
          },
          {
            "letter": "D",
            "text": "AWS Trusted Advisor."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. AWS Trusted Advisor.."
      },
      {
        "id": "1_47",
        "text": "Which of the following is not a benefit of Amazon S3? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon S3 provides unlimited storage for any type of data."
          },
          {
            "letter": "B",
            "text": "Amazon S3 can run any type of application or backend system."
          },
          {
            "letter": "C",
            "text": "Amazon S3 stores any number of objects, but with object size limits."
          },
          {
            "letter": "D",
            "text": "Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere."
          }
        ],
        "correctAnswers": [
          "B",
          "D"
        ],
        "explanation": "La réponse correcte est les options B. Amazon S3 can run any type of application or backend system., D. Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere.."
      },
      {
        "id": "1_48",
        "text": "In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Disk disposal."
          },
          {
            "letter": "B",
            "text": "Controlling physical access to compute resources."
          },
          {
            "letter": "C",
            "text": "Patching the Network infrastructure."
          },
          {
            "letter": "D",
            "text": "Setting password complexity rules."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Setting password complexity rules.."
      },
      {
        "id": "1_49",
        "text": "What does AWS provide to deploy popular technologies such as IBM MQ on AWS with the least amount of effort and time?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Aurora."
          },
          {
            "letter": "B",
            "text": "Amazon CloudWatch."
          },
          {
            "letter": "C",
            "text": "AWS Quick Start reference deployments."
          },
          {
            "letter": "D",
            "text": "AWS OpsWorks."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Quick Start reference deployments.."
      },
      {
        "id": "1_50",
        "text": "An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?",
        "options": [
          {
            "letter": "A",
            "text": "Elastic RI."
          },
          {
            "letter": "B",
            "text": "Premium RI."
          },
          {
            "letter": "C",
            "text": "Standard RI."
          },
          {
            "letter": "D",
            "text": "Convertible RI."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Convertible RI.."
      }
    ]
  },
  {
    "id": 2,
    "name": "Examen Pratique 2",
    "description": "Examen Pratique 2 - 50 questions",
    "questionCount": 50,
    "duration": 90,
    "questions": [
      {
        "id": "2_1",
        "text": "A global company with a large number of AWS accounts is seeking a way in which they can centrally manage billing and security policies across all accounts. Which AWS Service will assist them in meeting these goals?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Organizations."
          },
          {
            "letter": "B",
            "text": "AWS Trusted Advisor."
          },
          {
            "letter": "C",
            "text": "IAM User Groups."
          },
          {
            "letter": "D",
            "text": "AWS Config."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Organizations.."
      },
      {
        "id": "2_2",
        "text": "Which service provides object-level storage in AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EBS."
          },
          {
            "letter": "B",
            "text": "Amazon Instance Store."
          },
          {
            "letter": "C",
            "text": "Amazon EFS."
          },
          {
            "letter": "D",
            "text": "Amazon S3."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Amazon S3.."
      },
      {
        "id": "2_3",
        "text": "A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding/removing EC2 compute capacity to closely match the required demand?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Elastic Load Balancer."
          },
          {
            "letter": "B",
            "text": "AWS Budgets."
          },
          {
            "letter": "C",
            "text": "AWS Auto Scaling."
          },
          {
            "letter": "D",
            "text": "AWS Cost Explorer."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Auto Scaling.."
      },
      {
        "id": "2_4",
        "text": "Which S3 storage class is best for data with unpredictable access patterns?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon S3 Intelligent-Tiering."
          },
          {
            "letter": "B",
            "text": "Amazon S3 Glacier Flexible Retrieval."
          },
          {
            "letter": "C",
            "text": "Amazon S3 Standard."
          },
          {
            "letter": "D",
            "text": "Amazon S3 Standard-Infrequent Access."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon S3 Intelligent-Tiering.."
      },
      {
        "id": "2_5",
        "text": "What is the AWS database service that allows you to upload data structured in key-value format?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon DynamoDB."
          },
          {
            "letter": "B",
            "text": "Amazon Aurora."
          },
          {
            "letter": "C",
            "text": "Amazon Redshift."
          },
          {
            "letter": "D",
            "text": "Amazon RDS."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon DynamoDB.."
      },
      {
        "id": "2_6",
        "text": "Which of the following is NOT correct regarding Amazon EC2 On-demand instances?",
        "options": [
          {
            "letter": "A",
            "text": "You have to pay a start-up fee when launching a new instance for the first time."
          },
          {
            "letter": "B",
            "text": "The on-demand instances follow the AWS pay-as-you-go pricing model."
          },
          {
            "letter": "C",
            "text": "With on-demand instances, no longer-term commitments or upfront payments are needed."
          },
          {
            "letter": "D",
            "text": "When using on-demand Linux instances, you are charged per second based on an hourly rate."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. You have to pay a start-up fee when launching a new instance for the first time.."
      },
      {
        "id": "2_7",
        "text": "A company has moved to AWS recently. Which of the following AWS Services will help ensure that they have the proper security settings? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Trusted Advisor."
          },
          {
            "letter": "B",
            "text": "Amazon Inspector."
          },
          {
            "letter": "C",
            "text": "Amazon SNS."
          },
          {
            "letter": "D",
            "text": "Amazon CloudWatch."
          }
        ],
        "correctAnswers": [
          "A",
          "B"
        ],
        "explanation": "La réponse correcte est les options A. AWS Trusted Advisor., B. Amazon Inspector.."
      },
      {
        "id": "2_8",
        "text": "What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?",
        "options": [
          {
            "letter": "A",
            "text": "Encrypted keys."
          },
          {
            "letter": "B",
            "text": "Email verification."
          },
          {
            "letter": "C",
            "text": "AWS KMS."
          },
          {
            "letter": "D",
            "text": "AWS MFA."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. AWS MFA.."
      },
      {
        "id": "2_9",
        "text": "A company is introducing a new product to their customers, and is expecting a surge in traffic to their web application. As part of their Enterprise Support plan, which of the following provides the company with architectural and scaling guidance?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Knowledge Center."
          },
          {
            "letter": "B",
            "text": "AWS Health Dashboard."
          },
          {
            "letter": "C",
            "text": "Infrastructure Event Management."
          },
          {
            "letter": "D",
            "text": "AWS Support Concierge Service."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Infrastructure Event Management.."
      },
      {
        "id": "2_10",
        "text": "You work as an on-premises MySQL DBA. The work of database configuration, backups, patching, and DR can be time-consuming and repetitive. Your company has decided to migrate to the AWS Cloud. Which of the following can help save time on database maintenance so you can focus on data architecture and performance?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon RDS."
          },
          {
            "letter": "B",
            "text": "Amazon Redshift."
          },
          {
            "letter": "C",
            "text": "Amazon DynamoDB."
          },
          {
            "letter": "D",
            "text": "Amazon CloudWatch."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon RDS.."
      },
      {
        "id": "2_11",
        "text": "Which of the below is a best-practice when designing solutions on AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Invest heavily in architecting your environment, as it is not easy to change your design later."
          },
          {
            "letter": "B",
            "text": "Use AWS reservations to reduce costs when testing your production environment."
          },
          {
            "letter": "C",
            "text": "Automate wherever possible to make architectural (© ) experimentation easier."
          },
          {
            "letter": "D",
            "text": "Provision a large compute capacity to handle any spikes in load"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Automate wherever possible to make architectural (© ) experimentation easier.."
      },
      {
        "id": "2_12",
        "text": "According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?",
        "options": [
          {
            "letter": "A",
            "text": "Penetration testing is not allowed in AWS."
          },
          {
            "letter": "B",
            "text": "Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure."
          },
          {
            "letter": "C",
            "text": "Penetration testing can be performed by the customer on their own instances without prior authorization from AWS."
          },
          {
            "letter": "D",
            "text": "The AWS customers are only allowed to perform penetration testing on services managed by AWS."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Penetration testing can be performed by the customer on their own instances without prior authorization from AWS.."
      },
      {
        "id": "2_13",
        "text": "Which service is used to ensure that messages between software components are not lost if one or more components fail?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon SQS."
          },
          {
            "letter": "B",
            "text": "Amazon SES."
          },
          {
            "letter": "C",
            "text": "AWS Direct Connect."
          },
          {
            "letter": "D",
            "text": "Amazon Connect."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon SQS.."
      },
      {
        "id": "2_14",
        "text": "The principle “design for failure and nothing will fail” is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Multi-factor authentication."
          },
          {
            "letter": "B",
            "text": "Availability Zones."
          },
          {
            "letter": "C",
            "text": "Elastic Load Balancing."
          },
          {
            "letter": "D",
            "text": "Penetration testing."
          }
        ],
        "correctAnswers": [
          "B",
          "C"
        ],
        "explanation": "La réponse correcte est les options B. Availability Zones., C. Elastic Load Balancing.."
      },
      {
        "id": "2_15",
        "text": "What is the AWS service that provides a virtual network dedicated to your AWS account?",
        "options": [
          {
            "letter": "A",
            "text": "AWS VPN."
          },
          {
            "letter": "B",
            "text": "AWS Subnets."
          },
          {
            "letter": "C",
            "text": "AWS Dedicated Hosts."
          },
          {
            "letter": "D",
            "text": "Amazon VPC."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Amazon VPC.."
      },
      {
        "id": "2_16",
        "text": "According to the AWS Shared responsibility model, which of the following are the responsibility of the customer? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Managing environmental events of AWS data centers."
          },
          {
            "letter": "B",
            "text": "Protecting the confidentiality of data in transit in Amazon S3."
          },
          {
            "letter": "C",
            "text": "Controlling physical access to AWS Regions."
          },
          {
            "letter": "D",
            "text": "Ensuring that the underlying EC2 host is configured properly."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Protecting the confidentiality of data in transit in Amazon S3.."
      },
      {
        "id": "2_17",
        "text": "Which of the following AWS services can be used as a compute resource? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon VPC."
          },
          {
            "letter": "B",
            "text": "Amazon CloudWatch."
          },
          {
            "letter": "C",
            "text": "Amazon S3."
          },
          {
            "letter": "D",
            "text": "Amazon EC2."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Amazon EC2.."
      },
      {
        "id": "2_18",
        "text": "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EBS."
          },
          {
            "letter": "B",
            "text": "Amazon SQS."
          },
          {
            "letter": "C",
            "text": "Amazon S3."
          },
          {
            "letter": "D",
            "text": "Amazon Instance store."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Amazon S3.."
      },
      {
        "id": "2_19",
        "text": "Which of the following is equivalent to a user name and password and is used to authenticate your programmatic access to AWS services and APIs?",
        "options": [
          {
            "letter": "A",
            "text": "Instance Password."
          },
          {
            "letter": "B",
            "text": "Key pairs."
          },
          {
            "letter": "C",
            "text": "Access Keys."
          },
          {
            "letter": "D",
            "text": "MFA."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Access Keys.."
      },
      {
        "id": "2_20",
        "text": "What does Amazon ElastiCache provide?",
        "options": [
          {
            "letter": "A",
            "text": "In-memory caching for read-heavy applications."
          },
          {
            "letter": "B",
            "text": "An Ehcache compatible in-memory data store."
          },
          {
            "letter": "C",
            "text": "An online software store that allows Customers to launch pre-configured software with just few clicks."
          },
          {
            "letter": "D",
            "text": "A domain name system in the cloud."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. In-memory caching for read-heavy applications.."
      },
      {
        "id": "2_21",
        "text": "What is the AWS service that enables you to manage all of your AWS accounts from a single master account?",
        "options": [
          {
            "letter": "A",
            "text": "AWS WAF."
          },
          {
            "letter": "B",
            "text": "AWS Trusted Advisor."
          },
          {
            "letter": "C",
            "text": "AWS Organizations."
          },
          {
            "letter": "D",
            "text": "Amazon Config."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Organizations.."
      },
      {
        "id": "2_22",
        "text": "Which of the following EC2 instance purchasing options supports the Bring Your Own License (BYOL) model for almost every BYOL scenario?",
        "options": [
          {
            "letter": "A",
            "text": "Dedicated Instances."
          },
          {
            "letter": "B",
            "text": "Dedicated Hosts."
          },
          {
            "letter": "C",
            "text": "On-demand Instances."
          },
          {
            "letter": "D",
            "text": "Reserved Instances."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Dedicated Hosts.."
      },
      {
        "id": "2_23",
        "text": "Which of the following is one of the benefits of moving infrastructure from an on-premises data center to AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Free support for all enterprise customers."
          },
          {
            "letter": "B",
            "text": "Automatic data protection."
          },
          {
            "letter": "C",
            "text": "Reduced Capital Expenditure (CapEx)."
          },
          {
            "letter": "D",
            "text": "AWS holds responsibility for managing customer applications."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Reduced Capital Expenditure (CapEx).."
      },
      {
        "id": "2_24",
        "text": "Which of the following are important design principles you should adopt when designing systems on AWS? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Always use Global Services in your architecture rather than Regional Services."
          },
          {
            "letter": "B",
            "text": "Always choose to pay as you go."
          },
          {
            "letter": "C",
            "text": "Treat servers as fixed resources."
          },
          {
            "letter": "D",
            "text": "Automate wherever possible."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Automate wherever possible.."
      },
      {
        "id": "2_25",
        "text": "Which AWS Service can be used to establish a dedicated, private network connection between AWS and your datacenter?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Direct Connect."
          },
          {
            "letter": "B",
            "text": "Amazon CloudFront."
          },
          {
            "letter": "C",
            "text": "AWS Snowball."
          },
          {
            "letter": "D",
            "text": "Amazon Route 53."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Direct Connect.."
      },
      {
        "id": "2_26",
        "text": "You are working on two projects that require completely different network configurations. Which AWS service or feature will allow you to isolate resources and network configurations?",
        "options": [
          {
            "letter": "A",
            "text": "Internet gateways."
          },
          {
            "letter": "B",
            "text": "Virtual Private Cloud."
          },
          {
            "letter": "C",
            "text": "Security Groups."
          },
          {
            "letter": "D",
            "text": "Amazon CloudFront."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Virtual Private Cloud.."
      },
      {
        "id": "2_27",
        "text": "Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Cognito."
          },
          {
            "letter": "B",
            "text": "AWS IAM."
          },
          {
            "letter": "C",
            "text": "Amazon Aurora."
          },
          {
            "letter": "D",
            "text": "AWS WAF."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. AWS WAF.."
      },
      {
        "id": "2_28",
        "text": "An organization needs to analyze and process a large number of data sets. Which AWS service should they use?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EMR."
          },
          {
            "letter": "B",
            "text": "Amazon MQ."
          },
          {
            "letter": "C",
            "text": "Amazon SNS."
          },
          {
            "letter": "D",
            "text": "Amazon SQS."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon EMR.."
      },
      {
        "id": "2_29",
        "text": "Based on the AWS Shared Responsibility Model, which of the following are the sole responsibility of AWS? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Monitoring network performance."
          },
          {
            "letter": "B",
            "text": "Installing software on EC2 instances."
          },
          {
            "letter": "C",
            "text": "Creating hypervisors."
          },
          {
            "letter": "D",
            "text": "Configuring Access Control Lists (ACLs)."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Creating hypervisors.."
      },
      {
        "id": "2_30",
        "text": "What is the AWS service that provides you the highest level of control over the underlying virtual infrastructure?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Redshift."
          },
          {
            "letter": "B",
            "text": "Amazon DynamoDB."
          },
          {
            "letter": "C",
            "text": "Amazon EC2."
          },
          {
            "letter": "D",
            "text": "Amazon RDS."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Amazon EC2.."
      },
      {
        "id": "2_31",
        "text": "What are the default security credentials that are required to access the AWS management console for an IAM user account?",
        "options": [
          {
            "letter": "A",
            "text": "MFA."
          },
          {
            "letter": "B",
            "text": "Security tokens."
          },
          {
            "letter": "C",
            "text": "A user name and password."
          },
          {
            "letter": "D",
            "text": "Access keys."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. A user name and password.."
      },
      {
        "id": "2_32",
        "text": "In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?",
        "options": [
          {
            "letter": "A",
            "text": "IAM."
          },
          {
            "letter": "B",
            "text": "An internet gateway."
          },
          {
            "letter": "C",
            "text": "EBS Snapshot."
          },
          {
            "letter": "D",
            "text": "AMI."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. AMI.."
      },
      {
        "id": "2_33",
        "text": "What are two advantages of using Cloud Computing over using traditional data centers? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Reserved Compute capacity."
          },
          {
            "letter": "B",
            "text": "Eliminating Single Points of Failure (SPOFs)."
          },
          {
            "letter": "C",
            "text": "Distributed infrastructure."
          },
          {
            "letter": "D",
            "text": "Virtualized compute resources."
          }
        ],
        "correctAnswers": [
          "B",
          "C"
        ],
        "explanation": "La réponse correcte est les options B. Eliminating Single Points of Failure (SPOFs)., C. Distributed infrastructure.."
      },
      {
        "id": "2_34",
        "text": "Which of the following aspects of security are managed by AWS? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Encryption of EBS volumes."
          },
          {
            "letter": "B",
            "text": "VPC security."
          },
          {
            "letter": "C",
            "text": "Access permissions."
          },
          {
            "letter": "D",
            "text": "Hardware patching."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Hardware patching.."
      },
      {
        "id": "2_35",
        "text": "Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?",
        "options": [
          {
            "letter": "A",
            "text": "The ability of a system to recover gracefully from failure."
          },
          {
            "letter": "B",
            "text": "The efficient use of computing resources to meet requirements."
          },
          {
            "letter": "C",
            "text": "The ability to monitor systems and improve supporting processes and procedures."
          },
          {
            "letter": "D",
            "text": "The ability to manage datacenter operations more efficiently."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. The ability to monitor systems and improve supporting processes and procedures.."
      },
      {
        "id": "2_36",
        "text": "AWS has created a large number of Edge Locations as part of its Global Infrastructure. Which of the following is NOT a benefit of using Edge Locations?",
        "options": [
          {
            "letter": "A",
            "text": "Edge locations are used by CloudFront to cache the most recent responses."
          },
          {
            "letter": "B",
            "text": "Edge locations are used by CloudFront to improve your end users’ experience when uploading files."
          },
          {
            "letter": "C",
            "text": "Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency."
          },
          {
            "letter": "D",
            "text": "Edge locations are used by CloudFront to distribute content to global users with low latency."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency.."
      },
      {
        "id": "2_37",
        "text": "What are the change management tools that helps AWS customers audit and monitor all resource changes in their AWS environment? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS CloudTrail."
          },
          {
            "letter": "B",
            "text": "Amazon Comprehend."
          },
          {
            "letter": "C",
            "text": "AWS Transit Gateway."
          },
          {
            "letter": "D",
            "text": "AWS X-Ray."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS CloudTrail.."
      },
      {
        "id": "2_38",
        "text": "Which of the following services allows you to run containerized applications on a cluster of EC2 instances?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon ECS."
          },
          {
            "letter": "B",
            "text": "AWS Data Pipeline."
          },
          {
            "letter": "C",
            "text": "AWS Cloud9."
          },
          {
            "letter": "D",
            "text": "AWS Personal Health Dashboard."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon ECS.."
      },
      {
        "id": "2_39",
        "text": "Which of the following services will help businesses ensure compliance in AWS?",
        "options": [
          {
            "letter": "A",
            "text": "CloudFront."
          },
          {
            "letter": "B",
            "text": "CloudEndure Migration."
          },
          {
            "letter": "C",
            "text": "CloudWatch."
          },
          {
            "letter": "D",
            "text": "CloudTrail."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. CloudTrail.."
      },
      {
        "id": "2_40",
        "text": "Which of the following procedures will help reduce your Amazon S3 costs?",
        "options": [
          {
            "letter": "A",
            "text": "Use the Import/Export feature to move old files automatically to Amazon Glacier."
          },
          {
            "letter": "B",
            "text": "Use the right combination of storage classes based on different use cases."
          },
          {
            "letter": "C",
            "text": "Pick the right Availability Zone for your S3 bucket."
          },
          {
            "letter": "D",
            "text": "Move all the data stored in S3 standard to EBS."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Use the right combination of storage classes based on different use cases.."
      },
      {
        "id": "2_41",
        "text": "What are the AWS services/features that can help you maintain a highly available and fault-tolerant architecture in AWS? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Direct Connect."
          },
          {
            "letter": "B",
            "text": "Amazon EC2 Auto Scaling."
          },
          {
            "letter": "C",
            "text": "Elastic Load Balancer."
          },
          {
            "letter": "D",
            "text": "CloudFormation."
          }
        ],
        "correctAnswers": [
          "B",
          "C"
        ],
        "explanation": "La réponse correcte est les options B. Amazon EC2 Auto Scaling., C. Elastic Load Balancer.."
      },
      {
        "id": "2_42",
        "text": "Which of the following activities may help reduce your AWS monthly costs?",
        "options": [
          {
            "letter": "A",
            "text": "Enabling Amazon EC2 Auto Scaling for all of your workloads."
          },
          {
            "letter": "B",
            "text": "Using the AWS Network Load Balancer (NLB) to load balance the incoming HTTP requests."
          },
          {
            "letter": "C",
            "text": "Removing all of your Cost Allocation Tags."
          },
          {
            "letter": "D",
            "text": "Deploying your AWS resources across multiple Availability Zones."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Enabling Amazon EC2 Auto Scaling for all of your workloads.."
      },
      {
        "id": "2_43",
        "text": "What is the AWS service/feature that takes advantage of Amazon CloudFront’s globally distributed edge locations to transfer files to S3 with higher upload speeds?",
        "options": [
          {
            "letter": "A",
            "text": "S3 Transfer Acceleration."
          },
          {
            "letter": "B",
            "text": "AWS WAF."
          },
          {
            "letter": "C",
            "text": "AWS Snowmobile."
          },
          {
            "letter": "D",
            "text": "AWS Snowball."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. S3 Transfer Acceleration.."
      },
      {
        "id": "2_44",
        "text": "Which of the following AWS security features is associated with an EC2 instance and functions to filter incoming traffic requests?",
        "options": [
          {
            "letter": "A",
            "text": "AWS X-Ray."
          },
          {
            "letter": "B",
            "text": "Network ACL."
          },
          {
            "letter": "C",
            "text": "Security Groups."
          },
          {
            "letter": "D",
            "text": "VPC Flow logs."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Security Groups.."
      },
      {
        "id": "2_45",
        "text": "Which AWS services can be used to improve the performance of a global application and reduce latency for its users? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS KMS."
          },
          {
            "letter": "B",
            "text": "AWS Global accelerator."
          },
          {
            "letter": "C",
            "text": "AWS Direct Connect."
          },
          {
            "letter": "D",
            "text": "AWS Glue."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Global accelerator.."
      },
      {
        "id": "2_46",
        "text": "Using Amazon RDS falls under the shared responsibility model. Which of the following are customer responsibilities? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Building the relational database schema."
          },
          {
            "letter": "B",
            "text": "Performing backups."
          },
          {
            "letter": "C",
            "text": "Managing the database settings."
          },
          {
            "letter": "D",
            "text": "Patching the database software."
          }
        ],
        "correctAnswers": [
          "A",
          "C"
        ],
        "explanation": "La réponse correcte est les options A. Building the relational database schema., C. Managing the database settings.."
      },
      {
        "id": "2_47",
        "text": "A company has a large amount of structured data stored in their on-premises data center. They are planning to migrate all the data to AWS, what is the most appropriate AWS database option?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon DynamoDB."
          },
          {
            "letter": "B",
            "text": "Amazon SNS."
          },
          {
            "letter": "C",
            "text": "Amazon RDS."
          },
          {
            "letter": "D",
            "text": "Amazon ElastiCache."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Amazon RDS.."
      },
      {
        "id": "2_48",
        "text": "A company has created a solution that helps AWS customers improve their architectures on AWS. Which AWS program may support this company?",
        "options": [
          {
            "letter": "A",
            "text": "APN Consulting Partners."
          },
          {
            "letter": "B",
            "text": "AWS TAM."
          },
          {
            "letter": "C",
            "text": "APN Technology Partners."
          },
          {
            "letter": "D",
            "text": "AWS Professional Services."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. APN Consulting Partners.."
      },
      {
        "id": "2_49",
        "text": "What is the AWS serverless service that allows you to run your applications without any administrative burden?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon LightSail."
          },
          {
            "letter": "B",
            "text": "AWS Lambda."
          },
          {
            "letter": "C",
            "text": "Amazon RDS instances."
          },
          {
            "letter": "D",
            "text": "Amazon EC2 instances."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Lambda.."
      },
      {
        "id": "2_50",
        "text": "Jessica is managing an e-commerce web application in AWS. The application is hosted on six EC2 instances. One day, three of the instances crashed; but none of her customers were affected. What has Jessica done correctly in this scenario?",
        "options": [
          {
            "letter": "A",
            "text": "She has properly built an elastic system."
          },
          {
            "letter": "B",
            "text": "She has properly built a fault tolerant system."
          },
          {
            "letter": "C",
            "text": "She has properly built an encrypted system."
          },
          {
            "letter": "D",
            "text": "She has properly built a scalable system."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. She has properly built a fault tolerant system.."
      }
    ]
  },
  {
    "id": 3,
    "name": "Examen Pratique 3",
    "description": "Examen Pratique 3 - 50 questions",
    "questionCount": 50,
    "duration": 90,
    "questions": [
      {
        "id": "3_1",
        "text": "Where can you store files in AWS? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EFS."
          },
          {
            "letter": "B",
            "text": "Amazon SNS."
          },
          {
            "letter": "C",
            "text": "Amazon EBS."
          },
          {
            "letter": "D",
            "text": "Amazon ECS."
          }
        ],
        "correctAnswers": [
          "A",
          "C"
        ],
        "explanation": "La réponse correcte est les options A. Amazon EFS., C. Amazon EBS.."
      },
      {
        "id": "3_2",
        "text": "Which AWS service can be used to store and reliably deliver messages across distributed systems?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Simple Queue Service."
          },
          {
            "letter": "B",
            "text": "AWS Storage Gateway."
          },
          {
            "letter": "C",
            "text": "Amazon Simple Email Service."
          },
          {
            "letter": "D",
            "text": "Amazon Simple Storage Service."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon Simple Queue Service.."
      },
      {
        "id": "3_3",
        "text": "Which of the following describes the payment model that AWS makes available for customers that can commit to using Amazon EC2 over a one or 3-year term to reduce their total computing costs?",
        "options": [
          {
            "letter": "A",
            "text": "Pay less as AWS grows."
          },
          {
            "letter": "B",
            "text": "Pay as you go."
          },
          {
            "letter": "C",
            "text": "Pay less by using more."
          },
          {
            "letter": "D",
            "text": "Save when you reserve."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Save when you reserve.."
      },
      {
        "id": "3_4",
        "text": "A company is migrating its on-premises database to Amazon RDS. What should the company do to ensure Amazon RDS costs are kept to a minimum?",
        "options": [
          {
            "letter": "A",
            "text": "Right-size before and after migration."
          },
          {
            "letter": "B",
            "text": "Use a Multi-Region Active-Passive architecture."
          },
          {
            "letter": "C",
            "text": "Combine On-demand Capacity Reservations with Saving Plans."
          },
          {
            "letter": "D",
            "text": "Use a Multi-Region Active-Active architecture."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Right-size before and after migration.."
      },
      {
        "id": "3_5",
        "text": "What is the primary storage service used by Amazon RDS database instances?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Glacier."
          },
          {
            "letter": "B",
            "text": "Amazon EBS."
          },
          {
            "letter": "C",
            "text": "Amazon EFS."
          },
          {
            "letter": "D",
            "text": "Amazon S3."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Amazon EBS.."
      },
      {
        "id": "3_6",
        "text": "A company is developing a new application using a microservices framework. The new application is having performance and latency issues. Which AWS Service should be used to troubleshoot these issues?",
        "options": [
          {
            "letter": "A",
            "text": "AWS CodePipeline."
          },
          {
            "letter": "B",
            "text": "AWS X-Ray."
          },
          {
            "letter": "C",
            "text": "Amazon Inspector."
          },
          {
            "letter": "D",
            "text": "AWS CloudTrail."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS X-Ray.."
      },
      {
        "id": "3_7",
        "text": "Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Redshift."
          },
          {
            "letter": "B",
            "text": "AWS Snowball."
          },
          {
            "letter": "C",
            "text": "Amazon Simple Storage Service."
          },
          {
            "letter": "D",
            "text": "Amazon EBS."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Amazon Simple Storage Service.."
      },
      {
        "id": "3_8",
        "text": "What are the Amazon RDS features that can be used to improve the availability of your database? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Regions."
          },
          {
            "letter": "B",
            "text": "Multi-AZ Deployment."
          },
          {
            "letter": "C",
            "text": "Automatic patching."
          },
          {
            "letter": "D",
            "text": "Read Replicas."
          }
        ],
        "correctAnswers": [
          "B",
          "D"
        ],
        "explanation": "La réponse correcte est les options B. Multi-AZ Deployment., D. Read Replicas.."
      },
      {
        "id": "3_9",
        "text": "Sarah has deployed an application in the Northern California (us-west-1) region. After examining the application’s traffic, she notices that about 30% of the traffic is coming from Asia. What can she do to reduce latency for the users in Asia?",
        "options": [
          {
            "letter": "A",
            "text": "Replicate the current resources across multiple Availability Zones within the same region."
          },
          {
            "letter": "B",
            "text": "Migrate the application to a hosting provider in Asia."
          },
          {
            "letter": "C",
            "text": "Recreate the website content."
          },
          {
            "letter": "D",
            "text": "Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia.."
      },
      {
        "id": "3_10",
        "text": "An organization runs many systems and uses many AWS products. Which of the following services enables them to control how each developer interacts with these products?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Identity and Access Management."
          },
          {
            "letter": "B",
            "text": "Amazon RDS."
          },
          {
            "letter": "C",
            "text": "Network Access Control Lists."
          },
          {
            "letter": "D",
            "text": "Amazon EMR."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Identity and Access Management.."
      },
      {
        "id": "3_11",
        "text": "Using Amazon EC2 falls under which of the following cloud computing models?",
        "options": [
          {
            "letter": "A",
            "text": "Iaas & SaaS."
          },
          {
            "letter": "B",
            "text": "IaaS."
          },
          {
            "letter": "C",
            "text": "SaaS."
          },
          {
            "letter": "D",
            "text": "PaaS."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. IaaS.."
      },
      {
        "id": "3_12",
        "text": "Which of the below is a best-practice when building applications on AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Strengthen physical security by applying the principle of least privilege."
          },
          {
            "letter": "B",
            "text": "Ensure that the application runs on hardware from trusted vendors."
          },
          {
            "letter": "C",
            "text": "Use IAM policies to maintain performance."
          },
          {
            "letter": "D",
            "text": "Decouple the components of the application so that they run independently."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Decouple the components of the application so that they run independently.."
      },
      {
        "id": "3_13",
        "text": "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EBS."
          },
          {
            "letter": "B",
            "text": "Amazon SQS."
          },
          {
            "letter": "C",
            "text": "Amazon Instance store."
          },
          {
            "letter": "D",
            "text": "Amazon S3."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Amazon S3.."
      },
      {
        "id": "3_14",
        "text": "Amazon Glacier is an Amazon S3 storage class that is suitable for storing [...] & [...]. (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Active archives."
          },
          {
            "letter": "B",
            "text": "Dynamic websites’ assets."
          },
          {
            "letter": "C",
            "text": "Long-term analytic data."
          },
          {
            "letter": "D",
            "text": "Active databases."
          }
        ],
        "correctAnswers": [
          "A",
          "C"
        ],
        "explanation": "La réponse correcte est les options A. Active archives., C. Long-term analytic data.."
      },
      {
        "id": "3_15",
        "text": "What does Amazon Elastic Beanstalk provide?",
        "options": [
          {
            "letter": "A",
            "text": "A PaaS solution to automate application deployment."
          },
          {
            "letter": "B",
            "text": "A compute engine for Amazon ECS."
          },
          {
            "letter": "C",
            "text": "A scalable file storage solution for use with AWS and on-premises servers."
          },
          {
            "letter": "D",
            "text": "A NoSQL database service."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. A PaaS solution to automate application deployment.."
      },
      {
        "id": "3_16",
        "text": "What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Kinesis."
          },
          {
            "letter": "B",
            "text": "Security groups."
          },
          {
            "letter": "C",
            "text": "Amazon Inspector."
          },
          {
            "letter": "D",
            "text": "AWS Network Access Control Lists."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Amazon Inspector.."
      },
      {
        "id": "3_17",
        "text": "Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Patch management controls."
          },
          {
            "letter": "B",
            "text": "Database controls."
          },
          {
            "letter": "C",
            "text": "Awareness & Training."
          },
          {
            "letter": "D",
            "text": "Environmental controls."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Environmental controls.."
      },
      {
        "id": "3_18",
        "text": "A company needs to host a database in Amazon RDS for at least three years. Which of the following options would be the most cost-effective solution?",
        "options": [
          {
            "letter": "A",
            "text": "Reserved instances - No Upfront."
          },
          {
            "letter": "B",
            "text": "Reserved instances - Partial Upfront."
          },
          {
            "letter": "C",
            "text": "On-Demand instances."
          },
          {
            "letter": "D",
            "text": "Spot Instances."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Reserved instances - Partial Upfront.."
      },
      {
        "id": "3_19",
        "text": "Your application has recently experienced significant global growth, and international users are complaining of high latency. What is the AWS characteristic that can help improve your international users’ experience?",
        "options": [
          {
            "letter": "A",
            "text": "Elasticity."
          },
          {
            "letter": "B",
            "text": "Global reach."
          },
          {
            "letter": "C",
            "text": "Data durability."
          },
          {
            "letter": "D",
            "text": "High availability."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Global reach.."
      },
      {
        "id": "3_20",
        "text": "Savings Plans are available for which of the following AWS compute services? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Batch."
          },
          {
            "letter": "B",
            "text": "AWS Outposts."
          },
          {
            "letter": "C",
            "text": "Amazon Lightsail."
          },
          {
            "letter": "D",
            "text": "Amazon EC2."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Amazon EC2.."
      },
      {
        "id": "3_21",
        "text": "A company has business critical workloads hosted on AWS and they are unwilling to accept any downtime. Which of the following is a recommended best practice to protect their workloads in the event of an unexpected natural disaster?",
        "options": [
          {
            "letter": "A",
            "text": "Replicate data across multiple Edge Locations worldwide and use Amazon CloudFront to perform automatic failover in the event of an outage."
          },
          {
            "letter": "B",
            "text": "Deploy AWS resources across multiple Availability Zones within the same AWS Region."
          },
          {
            "letter": "C",
            "text": "Create point-in-time backups in another subnet and recover this data when a disaster occurs."
          },
          {
            "letter": "D",
            "text": "Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy.."
      },
      {
        "id": "3_22",
        "text": "Which statement is correct with regards to AWS service limits? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "You can contact AWS support to increase the service limits."
          },
          {
            "letter": "B",
            "text": "Each IAM user has the same service limit."
          },
          {
            "letter": "C",
            "text": "There are no service limits on AWS."
          },
          {
            "letter": "D",
            "text": "You can use the AWS Trusted Advisor to monitor your service limits."
          }
        ],
        "correctAnswers": [
          "A",
          "D"
        ],
        "explanation": "La réponse correcte est les options A. You can contact AWS support to increase the service limits., D. You can use the AWS Trusted Advisor to monitor your service limits.."
      },
      {
        "id": "3_23",
        "text": "What is the AWS tool that enables you to use scripts to manage all AWS services and resources?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Console."
          },
          {
            "letter": "B",
            "text": "AWS Service Catalog."
          },
          {
            "letter": "C",
            "text": "AWS OpsWorks."
          },
          {
            "letter": "D",
            "text": "AWS CLI."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. AWS CLI.."
      },
      {
        "id": "3_24",
        "text": "What are the connectivity options that can be used to build hybrid cloud architectures? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Artifact."
          },
          {
            "letter": "B",
            "text": "AWS Cloud9."
          },
          {
            "letter": "C",
            "text": "AWS Direct Connect."
          },
          {
            "letter": "D",
            "text": "AWS CloudTrail."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Direct Connect.."
      },
      {
        "id": "3_25",
        "text": "A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?",
        "options": [
          {
            "letter": "A",
            "text": "AWS EC2 Auto Recovery."
          },
          {
            "letter": "B",
            "text": "AWS Auto Scaling."
          },
          {
            "letter": "C",
            "text": "AWS Network Load Balancer."
          },
          {
            "letter": "D",
            "text": "AWS Application Load Balancer."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. AWS Application Load Balancer.."
      },
      {
        "id": "3_26",
        "text": "Which of the following AWS offerings is a MySQL-compatible relational database service that can scale capacity automatically based on demand?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Neptune."
          },
          {
            "letter": "B",
            "text": "Amazon Aurora."
          },
          {
            "letter": "C",
            "text": "Amazon RDS for SQL Server."
          },
          {
            "letter": "D",
            "text": "Amazon RDS for PostgreSQL."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Amazon Aurora.."
      },
      {
        "id": "3_27",
        "text": "Which of the following can help protect your EC2 instances from DDoS attacks? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS CloudHSM."
          },
          {
            "letter": "B",
            "text": "Security Groups."
          },
          {
            "letter": "C",
            "text": "AWS Batch."
          },
          {
            "letter": "D",
            "text": "AWS IAM."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Security Groups.."
      },
      {
        "id": "3_28",
        "text": "What is the AWS data warehouse service that supports a high level of query performance on large amounts of datasets?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Redshift."
          },
          {
            "letter": "B",
            "text": "Amazon Kinesis."
          },
          {
            "letter": "C",
            "text": "Amazon DynamoDB."
          },
          {
            "letter": "D",
            "text": "Amazon RDS."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon Redshift.."
      },
      {
        "id": "3_29",
        "text": "Which of the following should be considered when performing a TCO analysis to compare the costs of running an application on AWS instead of on-premises?",
        "options": [
          {
            "letter": "A",
            "text": "Application development."
          },
          {
            "letter": "B",
            "text": "Market research."
          },
          {
            "letter": "C",
            "text": "Business analysis."
          },
          {
            "letter": "D",
            "text": "Physical hardware."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Physical hardware.."
      },
      {
        "id": "3_30",
        "text": "How are AWS customers billed for Linux-based Amazon EC2 usage?",
        "options": [
          {
            "letter": "A",
            "text": "EC2 instances will be billed on one second increments, with a minimum of one minute."
          },
          {
            "letter": "B",
            "text": "EC2 instances will be billed on one hour increments, with a minimum of one day."
          },
          {
            "letter": "C",
            "text": "EC2 instances will be billed on one minute increments, with a minimum of one hour."
          },
          {
            "letter": "D",
            "text": "EC2 instances will be billed on one day increments, with a minimum of one month."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. EC2 instances will be billed on one second increments, with a minimum of one minute.."
      },
      {
        "id": "3_31",
        "text": "Which of the following will impact the price paid for an EC2 instance? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Instance type."
          },
          {
            "letter": "B",
            "text": "The Availability Zone where the instance is provisioned."
          },
          {
            "letter": "C",
            "text": "Load balancing."
          },
          {
            "letter": "D",
            "text": "Number of buckets."
          }
        ],
        "correctAnswers": [
          "A",
          "B"
        ],
        "explanation": "La réponse correcte est les options A. Instance type., B. The Availability Zone where the instance is provisioned.."
      },
      {
        "id": "3_32",
        "text": "A customer spent a lot of time configuring a newly deployed Amazon EC2 instance. After the workload increases, the customer decides to provision another EC2 instance with an identical configuration. How can the customer achieve this?",
        "options": [
          {
            "letter": "A",
            "text": "By creating an AWS Config template from the old instance and launching a new instance from it."
          },
          {
            "letter": "B",
            "text": "By creating an EBS Snapshot of the old instance."
          },
          {
            "letter": "C",
            "text": "By installing Aurora on EC2 and launching a new instance from it."
          },
          {
            "letter": "D",
            "text": "By creating an AMI from the old instance and launching a new instance from it."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. By creating an AMI from the old instance and launching a new instance from it.."
      },
      {
        "id": "3_33",
        "text": "A company uses AWS Organizations to manage all of its AWS accounts. Which of the following allows the company to restrict what services and actions are allowed in each individual account?",
        "options": [
          {
            "letter": "A",
            "text": "IAM Principals."
          },
          {
            "letter": "B",
            "text": "AWS Service Control Policies (SCPs)."
          },
          {
            "letter": "C",
            "text": "IAM policies."
          },
          {
            "letter": "D",
            "text": "AWS Fargate."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Service Control Policies (SCPs).."
      },
      {
        "id": "3_34",
        "text": "Which of the following statements describes the AWS Cloud’s agility?",
        "options": [
          {
            "letter": "A",
            "text": "AWS allows you to host your applications in multiple regions around the world."
          },
          {
            "letter": "B",
            "text": "AWS provides customizable hardware at the lowest possible cost."
          },
          {
            "letter": "C",
            "text": "AWS allows you to provision resources in minutes."
          },
          {
            "letter": "D",
            "text": "AWS allows you to pay upfront to reduce costs."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS allows you to provision resources in minutes.."
      },
      {
        "id": "3_35",
        "text": "What are the benefits of using the Amazon Relational Database Service? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Lower administrative burden."
          },
          {
            "letter": "B",
            "text": "Complete control over the underlying host."
          },
          {
            "letter": "C",
            "text": "Resizable compute capacity."
          },
          {
            "letter": "D",
            "text": "Scales automatically to larger or smaller instance types."
          }
        ],
        "correctAnswers": [
          "A",
          "C"
        ],
        "explanation": "La réponse correcte est les options A. Lower administrative burden., C. Resizable compute capacity.."
      },
      {
        "id": "3_36",
        "text": "What is the connectivity option that uses Internet Protocol Security (IPSec) to establish encrypted connectivity between an on-premises network and the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "Internet Gateway."
          },
          {
            "letter": "B",
            "text": "AWS IQ."
          },
          {
            "letter": "C",
            "text": "AWS Direct Connect."
          },
          {
            "letter": "D",
            "text": "AWS Site-to-Site VPN."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. AWS Site-to-Site VPN.."
      },
      {
        "id": "3_37",
        "text": "What is the minimum level of AWS support that provides 24x7 access to technical support engineers via phone and chat?",
        "options": [
          {
            "letter": "A",
            "text": "Enterprise Support."
          },
          {
            "letter": "B",
            "text": "Developer Support."
          },
          {
            "letter": "C",
            "text": "Basic Support."
          },
          {
            "letter": "D",
            "text": "Business Support."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Business Support.."
      },
      {
        "id": "3_38",
        "text": "Which of the following is used to control network traffic in AWS? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Network Access Control Lists (NACLs)."
          },
          {
            "letter": "B",
            "text": "Key Pairs."
          },
          {
            "letter": "C",
            "text": "Access Keys."
          },
          {
            "letter": "D",
            "text": "IAM Policies."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Network Access Control Lists (NACLs).."
      },
      {
        "id": "3_39",
        "text": "A company has developed a media transcoding application in AWS. The application is designed to recover quickly from hardware failures. Which one of the following types of instance would be the most cost-effective choice to use?",
        "options": [
          {
            "letter": "A",
            "text": "Reserved instances."
          },
          {
            "letter": "B",
            "text": "Spot Instances."
          },
          {
            "letter": "C",
            "text": "On-Demand instances."
          },
          {
            "letter": "D",
            "text": "Dedicated instances."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Spot Instances.."
      },
      {
        "id": "3_40",
        "text": "Which AWS Service provides the current status of all AWS Services in all AWS Regions?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Service Health Dashboard."
          },
          {
            "letter": "B",
            "text": "AWS Management Console."
          },
          {
            "letter": "C",
            "text": "Amazon CloudWatch."
          },
          {
            "letter": "D",
            "text": "AWS Personal Health Dashboard."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Service Health Dashboard.."
      },
      {
        "id": "3_41",
        "text": "Which AWS service or feature can be used to call AWS Services from different programming languages?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Software Development Kit."
          },
          {
            "letter": "B",
            "text": "AWS Command Line Interface."
          },
          {
            "letter": "C",
            "text": "AWS CodeDeploy."
          },
          {
            "letter": "D",
            "text": "AWS Management Console."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Software Development Kit.."
      },
      {
        "id": "3_42",
        "text": "Which AWS Service can be used to register a new domain name?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Personalize."
          },
          {
            "letter": "B",
            "text": "Amazon Route 53."
          },
          {
            "letter": "C",
            "text": "AWS KMS."
          },
          {
            "letter": "D",
            "text": "AWS Config."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Amazon Route 53.."
      },
      {
        "id": "3_43",
        "text": "App development companies move their business to AWS to reduce time-to-market and improve customer satisfaction, what are the AWS automation tools that help them deploy their applications faster? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS CloudFormation."
          },
          {
            "letter": "B",
            "text": "AWS Migration Hub."
          },
          {
            "letter": "C",
            "text": "AWS IAM."
          },
          {
            "letter": "D",
            "text": "AWS Elastic Beanstalk."
          }
        ],
        "correctAnswers": [
          "A",
          "D"
        ],
        "explanation": "La réponse correcte est les options A. AWS CloudFormation., D. AWS Elastic Beanstalk.."
      },
      {
        "id": "3_44",
        "text": "Which AWS service provides cost-optimization recommendations?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Trusted Advisor."
          },
          {
            "letter": "B",
            "text": "AWS Pricing Calculator."
          },
          {
            "letter": "C",
            "text": "Amazon QuickSight."
          },
          {
            "letter": "D",
            "text": "AWS X-Ray."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Trusted Advisor.."
      },
      {
        "id": "3_45",
        "text": "A company has hundreds of VPCs in multiple AWS Regions worldwide. What service does AWS offer to simplify the connection management among the VPCs?",
        "options": [
          {
            "letter": "A",
            "text": "VPC Peering."
          },
          {
            "letter": "B",
            "text": "AWS Transit Gateway."
          },
          {
            "letter": "C",
            "text": "Amazon Connect."
          },
          {
            "letter": "D",
            "text": "Security Groups."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Transit Gateway.."
      },
      {
        "id": "3_46",
        "text": "What is one benefit and one drawback of buying a reserved EC2 instance? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Instances can be shut down by AWS at any time with no notification."
          },
          {
            "letter": "B",
            "text": "Reserved instances require at least a one-year pricing commitment."
          },
          {
            "letter": "C",
            "text": "There is no additional charge for using dedicated instances."
          },
          {
            "letter": "D",
            "text": "Reserved instances provide a significant discount compared to on-demand instances."
          }
        ],
        "correctAnswers": [
          "B",
          "D"
        ],
        "explanation": "La réponse correcte est les options B. Reserved instances require at least a one-year pricing commitment., D. Reserved instances provide a significant discount compared to on-demand instances.."
      },
      {
        "id": "3_47",
        "text": "Why does every AWS Region contain multiple Availability Zones?",
        "options": [
          {
            "letter": "A",
            "text": "Multiple Availability Zones allows you to build resilient and highly available architectures."
          },
          {
            "letter": "B",
            "text": "Multiple Availability Zones results in lower total cost compared to deploying in a single Availability Zone."
          },
          {
            "letter": "C",
            "text": "Multiple Availability Zones allows for data replication and global reach."
          },
          {
            "letter": "D",
            "text": "Multiple Availability Zones within a region increases the storage capacity available in that region."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Multiple Availability Zones allows you to build resilient and highly available architectures.."
      },
      {
        "id": "3_48",
        "text": "What is the most cost-effective purchasing option for running a set of EC2 instances that must always be available for a period of two months?",
        "options": [
          {
            "letter": "A",
            "text": "On-Demand Instances."
          },
          {
            "letter": "B",
            "text": "Spot Instances."
          },
          {
            "letter": "C",
            "text": "Reserved Instances - All Upfront."
          },
          {
            "letter": "D",
            "text": "Reserved Instances - No Upfront."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. On-Demand Instances.."
      },
      {
        "id": "3_49",
        "text": "Which of the following is a benefit of running an application in multiple Availability Zones?",
        "options": [
          {
            "letter": "A",
            "text": "Allows you to exceed AWS service limits."
          },
          {
            "letter": "B",
            "text": "Reduces application response time between servers and global users."
          },
          {
            "letter": "C",
            "text": "Increases available compute capacity."
          },
          {
            "letter": "D",
            "text": "Increases the availability of your application."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Increases the availability of your application.."
      },
      {
        "id": "3_50",
        "text": "Data security is one of the top priorities of AWS. How does AWS deal with old storage devices that have reached the end of their useful life?",
        "options": [
          {
            "letter": "A",
            "text": "AWS sells the old devices to other hosting providers."
          },
          {
            "letter": "B",
            "text": "AWS destroys the old devices in accordance with industry-standard practices."
          },
          {
            "letter": "C",
            "text": "AWS sends the old devices for remanufacturing."
          },
          {
            "letter": "D",
            "text": "AWS stores the old devices in a secure place."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS destroys the old devices in accordance with industry-standard practices.."
      }
    ]
  },
  {
    "id": 4,
    "name": "Examen Pratique 4",
    "description": "Examen Pratique 4 - 50 questions",
    "questionCount": 50,
    "duration": 90,
    "questions": [
      {
        "id": "4_1",
        "text": "A developer needs to set up an SSL security certificate for a client's eCommerce website in order to use the HTTPS protocol. Which of the following AWS services can be used to deploy the required SSL server certificates? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Route 53."
          },
          {
            "letter": "B",
            "text": "AWS ACM."
          },
          {
            "letter": "C",
            "text": "AWS Directory Service."
          },
          {
            "letter": "D",
            "text": "AWS Identity & Access Management."
          }
        ],
        "correctAnswers": [
          "A",
          "B"
        ],
        "explanation": "La réponse correcte est les options A. Amazon Route 53., B. AWS ACM.."
      },
      {
        "id": "4_2",
        "text": "Which of the following AWS services scale automatically without your intervention? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EC2."
          },
          {
            "letter": "B",
            "text": "Amazon S3."
          },
          {
            "letter": "C",
            "text": "AWS Lambda."
          },
          {
            "letter": "D",
            "text": "Amazon EMR."
          }
        ],
        "correctAnswers": [
          "B",
          "C"
        ],
        "explanation": "La réponse correcte est les options B. Amazon S3., C. AWS Lambda.."
      },
      {
        "id": "4_3",
        "text": "A company is planning to migrate an application from Amazon EC2 to AWS Lambda to use a serverless architecture. Which of the following will be the responsibility of AWS after migration? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Application management."
          },
          {
            "letter": "B",
            "text": "Capacity management."
          },
          {
            "letter": "C",
            "text": "Access control."
          },
          {
            "letter": "D",
            "text": "Operating system maintenance."
          }
        ],
        "correctAnswers": [
          "B",
          "D"
        ],
        "explanation": "La réponse correcte est les options B. Capacity management., D. Operating system maintenance.."
      },
      {
        "id": "4_4",
        "text": "How do ELBs improve the reliability of your application?",
        "options": [
          {
            "letter": "A",
            "text": "By distributing traffic across multiple S3 buckets."
          },
          {
            "letter": "B",
            "text": "By replicating data to multiple availability zones."
          },
          {
            "letter": "C",
            "text": "By creating database Read Replicas."
          },
          {
            "letter": "D",
            "text": "By ensuring that only healthy targets receive traffic."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. By ensuring that only healthy targets receive traffic.."
      },
      {
        "id": "4_5",
        "text": "A company needs to migrate their website from on-premises to AWS. Security is a major concern for them, so they need to host their website on hardware that is NOT shared with other AWS customers. Which of the following EC2 instance options meets this requirement?",
        "options": [
          {
            "letter": "A",
            "text": "On-demand instances."
          },
          {
            "letter": "B",
            "text": "Spot instances."
          },
          {
            "letter": "C",
            "text": "Dedicated instances."
          },
          {
            "letter": "D",
            "text": "Reserved instances."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Dedicated instances.."
      },
      {
        "id": "4_6",
        "text": "A customer is planning to move billions of images and videos to be stored on Amazon S3. The customer has approximately 60 Petabytes of data to move. Which of the following AWS Services is the best choice to transfer the data to AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Snowball."
          },
          {
            "letter": "B",
            "text": "S3 Transfer Acceleration."
          },
          {
            "letter": "C",
            "text": "Snowmobile."
          },
          {
            "letter": "D",
            "text": "Amazon VPC."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Snowmobile.."
      },
      {
        "id": "4_7",
        "text": "A company plans to migrate a large amount of archived data to AWS. The archived data must be maintained for a period of 5 years and must be retrievable within 5 hours of a request. What is the most cost-effective AWS storage service to use?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon S3 Glacier."
          },
          {
            "letter": "B",
            "text": "Amazon EFS."
          },
          {
            "letter": "C",
            "text": "Amazon S3 Standard."
          },
          {
            "letter": "D",
            "text": "Amazon EBS."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon S3 Glacier.."
      },
      {
        "id": "4_8",
        "text": "Which AWS Service is used to manage user permissions?",
        "options": [
          {
            "letter": "A",
            "text": "Security Groups."
          },
          {
            "letter": "B",
            "text": "Amazon ECS."
          },
          {
            "letter": "C",
            "text": "AWS IAM."
          },
          {
            "letter": "D",
            "text": "AWS Support."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS IAM.."
      },
      {
        "id": "4_9",
        "text": "Which support plan includes AWS Support Concierge Service?",
        "options": [
          {
            "letter": "A",
            "text": "Premium Support."
          },
          {
            "letter": "B",
            "text": "Business Support."
          },
          {
            "letter": "C",
            "text": "Enterprise Support."
          },
          {
            "letter": "D",
            "text": "Standard Support."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Enterprise Support.."
      },
      {
        "id": "4_10",
        "text": "A company needs to track resource changes using the API call history. Which AWS service can help the company achieve this goal?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Config."
          },
          {
            "letter": "B",
            "text": "Amazon CloudWatch."
          },
          {
            "letter": "C",
            "text": "AWS CloudTrail."
          },
          {
            "letter": "D",
            "text": "AWS CloudFormation."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS CloudTrail.."
      },
      {
        "id": "4_11",
        "text": "What are the benefits of using an AWS-managed service? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Provides complete control over the virtual infrastructure."
          },
          {
            "letter": "B",
            "text": "Allows customers to deliver new solutions faster."
          },
          {
            "letter": "C",
            "text": "Lowers operational complexity."
          },
          {
            "letter": "D",
            "text": "Eliminates the need to encrypt data."
          }
        ],
        "correctAnswers": [
          "B",
          "C"
        ],
        "explanation": "La réponse correcte est les options B. Allows customers to deliver new solutions faster., C. Lowers operational complexity.."
      },
      {
        "id": "4_12",
        "text": "Which of the following are use cases for Amazon S3? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Hosting static websites."
          },
          {
            "letter": "B",
            "text": "Hosting websites that require sustained high CPU utilization."
          },
          {
            "letter": "C",
            "text": "Cost-effective database and log storage."
          },
          {
            "letter": "D",
            "text": "A media store for the CloudFront service."
          }
        ],
        "correctAnswers": [
          "A",
          "D"
        ],
        "explanation": "La réponse correcte est les options A. Hosting static websites., D. A media store for the CloudFront service.."
      },
      {
        "id": "4_13",
        "text": "What is the AWS’ recommendation regarding access keys?",
        "options": [
          {
            "letter": "A",
            "text": "Delete all access keys and use passwords instead."
          },
          {
            "letter": "B",
            "text": "Only share them with trusted people."
          },
          {
            "letter": "C",
            "text": "Rotate them regularly."
          },
          {
            "letter": "D",
            "text": "Save them within your application code."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Rotate them regularly.."
      },
      {
        "id": "4_14",
        "text": "What is the AWS IAM feature that provides an additional layer of security on top of user-name and password authentication?",
        "options": [
          {
            "letter": "A",
            "text": "Key Pair."
          },
          {
            "letter": "B",
            "text": "Access Keys."
          },
          {
            "letter": "C",
            "text": "SDK."
          },
          {
            "letter": "D",
            "text": "MFA."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. MFA.."
      },
      {
        "id": "4_15",
        "text": "What is the benefit of using an API to access AWS Services?",
        "options": [
          {
            "letter": "A",
            "text": "It improves the performance of AWS resources."
          },
          {
            "letter": "B",
            "text": "It reduces the time needed to provision AWS resources."
          },
          {
            "letter": "C",
            "text": "It reduces the number of developers necessary."
          },
          {
            "letter": "D",
            "text": "It allows for programmatic management of AWS resources."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. It allows for programmatic management of AWS resources.."
      },
      {
        "id": "4_16",
        "text": "A company is planning to migrate a database with high read/write activity to AWS. What is the best storage option to use?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Storage Gateway."
          },
          {
            "letter": "B",
            "text": "Amazon S3."
          },
          {
            "letter": "C",
            "text": "Amazon EBS."
          },
          {
            "letter": "D",
            "text": "Amazon Glacier."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Amazon EBS.."
      },
      {
        "id": "4_17",
        "text": "How can AWS customers track and avoid over-spending on underutilized reserved instances?",
        "options": [
          {
            "letter": "A",
            "text": "Customers can add all AWS accounts to an AWS Organization, enable Consolidated Billing, and turn off Reserved Instance sharing."
          },
          {
            "letter": "B",
            "text": "Customers can use Amazon Neptune to track and analyze their usage patterns, detect underutilized reserved instances, and then sell them on the Amazon EC2 Reserved Instance Marketplace."
          },
          {
            "letter": "C",
            "text": "Customers can use the AWS Budgets service to track the reserved instances usage and set up alert notifications when their utilization drops below the threshold that they define."
          },
          {
            "letter": "D",
            "text": "Customers can use Amazon CloudTrail to automatically check for unused reservations and get recommendations to reduce their bill."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Customers can use the AWS Budgets service to track the reserved instances usage and set up alert notifications when their utilization drops below the threshold that they define.."
      },
      {
        "id": "4_18",
        "text": "What is the AWS service that provides five times the performance of a standard MySQL database?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Aurora."
          },
          {
            "letter": "B",
            "text": "Amazon Redshift."
          },
          {
            "letter": "C",
            "text": "Amazon DynamoDB."
          },
          {
            "letter": "D",
            "text": "Amazon Neptune."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon Aurora.."
      },
      {
        "id": "4_19",
        "text": "What does AWS Service Catalog provide?",
        "options": [
          {
            "letter": "A",
            "text": "It enables customers to quickly find descriptions and use cases for AWS services."
          },
          {
            "letter": "B",
            "text": "It enables customers to explore the different catalogs of AWS services."
          },
          {
            "letter": "C",
            "text": "It simplifies organizing and governing commonly deployed IT services."
          },
          {
            "letter": "D",
            "text": "It allows developers to deploy infrastructure on AWS using familiar programming languages."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. It simplifies organizing and governing commonly deployed IT services.."
      },
      {
        "id": "4_20",
        "text": "For managed services like Amazon DynamoDB, which of the below is AWS responsible for? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Protecting credentials."
          },
          {
            "letter": "B",
            "text": "Logging access activity."
          },
          {
            "letter": "C",
            "text": "Patching the database software."
          },
          {
            "letter": "D",
            "text": "Operating system maintenance."
          }
        ],
        "correctAnswers": [
          "C",
          "D"
        ],
        "explanation": "La réponse correcte est les options C. Patching the database software., D. Operating system maintenance.."
      },
      {
        "id": "4_21",
        "text": "Which of the following AWS Services helps with planning application migration to the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Snowball Migration Service."
          },
          {
            "letter": "B",
            "text": "AWS Application Discovery Service."
          },
          {
            "letter": "C",
            "text": "AWS DMS."
          },
          {
            "letter": "D",
            "text": "AWS Migration Hub."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Application Discovery Service.."
      },
      {
        "id": "4_22",
        "text": "A company is trying to analyze the costs applied to their AWS account recently. Which of the following provides them the most granular data about their AWS costs and usage?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Machine Image."
          },
          {
            "letter": "B",
            "text": "AWS Cost Explorer."
          },
          {
            "letter": "C",
            "text": "AWS Cost & Usage Report."
          },
          {
            "letter": "D",
            "text": "Amazon CloudWatch."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Cost & Usage Report.."
      },
      {
        "id": "4_23",
        "text": "Which statement best describes the concept of an AWS region?",
        "options": [
          {
            "letter": "A",
            "text": "An AWS Region is a geographical location with a collection of Edge locations."
          },
          {
            "letter": "B",
            "text": "An AWS Region is a virtual network dedicated only to a single AWS customer."
          },
          {
            "letter": "C",
            "text": "An AWS Region is a geographical location with a collection of Availability Zones."
          },
          {
            "letter": "D",
            "text": "An AWS Region represents the country where the AWS infrastructure exist."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. An AWS Region is a geographical location with a collection of Availability Zones.."
      },
      {
        "id": "4_24",
        "text": "A company has discovered that multiple S3 buckets were deleted, but it is unclear who deleted the buckets. Which of the following can the company use to determine the identity that deleted the buckets?",
        "options": [
          {
            "letter": "A",
            "text": "SNS logs."
          },
          {
            "letter": "B",
            "text": "SQS logs."
          },
          {
            "letter": "C",
            "text": "CloudWatch Logs."
          },
          {
            "letter": "D",
            "text": "CloudTrail logs."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. CloudTrail logs.."
      },
      {
        "id": "4_25",
        "text": "Which of the following are factors in determining the appropriate database technology to use for a specific workload? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Availability Zones."
          },
          {
            "letter": "B",
            "text": "Data sovereignty."
          },
          {
            "letter": "C",
            "text": "The number of reads and writes per second."
          },
          {
            "letter": "D",
            "text": "The nature of the queries."
          }
        ],
        "correctAnswers": [
          "C",
          "D"
        ],
        "explanation": "La réponse correcte est les options C. The number of reads and writes per second., D. The nature of the queries.."
      },
      {
        "id": "4_26",
        "text": "What are the benefits of implementing a tagging strategy for AWS resources? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Quickly identify resources that belong to a specific project."
          },
          {
            "letter": "B",
            "text": "Quickly identify software solutions on AWS."
          },
          {
            "letter": "C",
            "text": "Track API calls in your AWS account."
          },
          {
            "letter": "D",
            "text": "Quickly identify deleted resources and their metadata."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Quickly identify resources that belong to a specific project.."
      },
      {
        "id": "4_27",
        "text": "What are AWS shared controls?",
        "options": [
          {
            "letter": "A",
            "text": "Controls that are solely the responsibility of the customer based on the application they are deploying within AWS services."
          },
          {
            "letter": "B",
            "text": "Controls that a customer inherits from AWS."
          },
          {
            "letter": "C",
            "text": "Controls that apply to both the infrastructure layer and customer layers."
          },
          {
            "letter": "D",
            "text": "Controls that the customer and AWS collaborate together upon to secure the infrastructure."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Controls that the customer and AWS collaborate together upon to secure the infrastructure.."
      },
      {
        "id": "4_28",
        "text": "Which design principles relate to performance efficiency in AWS? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Build multi-region architectures to better serve global customers."
          },
          {
            "letter": "B",
            "text": "Apply security at all layers."
          },
          {
            "letter": "C",
            "text": "Implement strong Identity and Access controls."
          },
          {
            "letter": "D",
            "text": "Use serverless architectures."
          }
        ],
        "correctAnswers": [
          "A",
          "D"
        ],
        "explanation": "La réponse correcte est les options A. Build multi-region architectures to better serve global customers., D. Use serverless architectures.."
      },
      {
        "id": "4_29",
        "text": "Which of the below are responsibilities of the customer when using Amazon EC2? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Protecting sensitive data."
          },
          {
            "letter": "B",
            "text": "Patching of the underlying infrastructure."
          },
          {
            "letter": "C",
            "text": "Setup and operation of managed databases."
          },
          {
            "letter": "D",
            "text": "Maintaining consistent hardware components."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Protecting sensitive data.."
      },
      {
        "id": "4_30",
        "text": "Why would an organization decide to use AWS over an on-premises data center? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Free commercial software licenses."
          },
          {
            "letter": "B",
            "text": "Free technical support."
          },
          {
            "letter": "C",
            "text": "Elastic resources."
          },
          {
            "letter": "D",
            "text": "On-site visits for auditing."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Elastic resources.."
      },
      {
        "id": "4_31",
        "text": "Which of the following AWS services can help you perform security analysis and regulatory compliance auditing? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Inspector."
          },
          {
            "letter": "B",
            "text": "AWS Virtual Private Gateway."
          },
          {
            "letter": "C",
            "text": "AWS Batch."
          },
          {
            "letter": "D",
            "text": "Amazon ECS."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon Inspector.."
      },
      {
        "id": "4_32",
        "text": "Which of the following is NOT a characteristic of Amazon Elastic Compute Cloud (Amazon EC2)?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EC2 is considered a Serverless Web Service."
          },
          {
            "letter": "B",
            "text": "Amazon EC2 eliminates the need to invest in hardware upfront."
          },
          {
            "letter": "C",
            "text": "Amazon EC2 can launch as many or as few virtual servers as needed."
          },
          {
            "letter": "D",
            "text": "Amazon EC2 offers scalable computing."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon EC2 is considered a Serverless Web Service.."
      },
      {
        "id": "4_33",
        "text": "What is the AWS Compute service that executes code only when triggered by events?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Lambda."
          },
          {
            "letter": "B",
            "text": "Amazon CloudWatch."
          },
          {
            "letter": "C",
            "text": "AWS Transit Gateway."
          },
          {
            "letter": "D",
            "text": "Amazon EC2."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Lambda.."
      },
      {
        "id": "4_34",
        "text": "Both AWS and traditional IT distributors provide a wide range of virtual servers to meet their customers’ requirements. What is the name of these virtual servers in AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EBS Snapshots."
          },
          {
            "letter": "B",
            "text": "Amazon VPC."
          },
          {
            "letter": "C",
            "text": "AWS Managed Servers."
          },
          {
            "letter": "D",
            "text": "Amazon EC2 Instances."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Amazon EC2 Instances.."
      },
      {
        "id": "4_35",
        "text": "What is the framework created by AWS Professional Services that helps organizations design a road map to successful cloud adoption?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Secrets Manager."
          },
          {
            "letter": "B",
            "text": "AWS WAF."
          },
          {
            "letter": "C",
            "text": "AWS CAF."
          },
          {
            "letter": "D",
            "text": "Amazon EFS."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS CAF.."
      },
      {
        "id": "4_36",
        "text": "TYMO Cloud Corp is looking forward to migrating their entire on-premises data center to AWS. What tool can they use to perform a cost-benefit analysis of moving to the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Cost Explorer."
          },
          {
            "letter": "B",
            "text": "AWS TCO Calculator."
          },
          {
            "letter": "C",
            "text": "AWS Budgets."
          },
          {
            "letter": "D",
            "text": "AWS Pricing Calculator."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS TCO Calculator.."
      },
      {
        "id": "4_37",
        "text": "Which of the following activities supports the Operational Excellence pillar of the AWS Well-Architected Framework?",
        "options": [
          {
            "letter": "A",
            "text": "Using AWS Trusted Advisor to find underutilized resources."
          },
          {
            "letter": "B",
            "text": "Using AWS CloudTrail to record user activities."
          },
          {
            "letter": "C",
            "text": "Using AWS CloudFormation to manage infrastructure as code."
          },
          {
            "letter": "D",
            "text": "Deploying an application in multiple Availability Zones."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Using AWS CloudFormation to manage infrastructure as code.."
      },
      {
        "id": "4_38",
        "text": "Why do many startup companies prefer AWS over traditional on-premises solutions? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS allows them to pay later when their business succeed."
          },
          {
            "letter": "B",
            "text": "AWS can build complete data centers faster than any other Cloud provider."
          },
          {
            "letter": "C",
            "text": "Using AWS, they can reduce time-to-market by focusing on business activities rather than on building and managing data centers."
          },
          {
            "letter": "D",
            "text": "AWS removes the need to invest in operational expenditure."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Using AWS, they can reduce time-to-market by focusing on business activities rather than on building and managing data centers.."
      },
      {
        "id": "4_39",
        "text": "What are the benefits of using DynamoDB? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Automatically scales to meet required throughput capacity."
          },
          {
            "letter": "B",
            "text": "Provides resizable instances to match the current demand."
          },
          {
            "letter": "C",
            "text": "Supports both relational and non-relational data models."
          },
          {
            "letter": "D",
            "text": "Offers extremely low (single-digit millisecond) latency."
          }
        ],
        "correctAnswers": [
          "A",
          "D"
        ],
        "explanation": "La réponse correcte est les options A. Automatically scales to meet required throughput capacity., D. Offers extremely low (single-digit millisecond) latency.."
      },
      {
        "id": "4_40",
        "text": "Which of the following can be used to protect data at rest on Amazon S3? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Versioning."
          },
          {
            "letter": "B",
            "text": "Deduplication."
          },
          {
            "letter": "C",
            "text": "Permissions."
          },
          {
            "letter": "D",
            "text": "Decryption."
          }
        ],
        "correctAnswers": [
          "A",
          "C"
        ],
        "explanation": "La réponse correcte est les options A. Versioning., C. Permissions.."
      },
      {
        "id": "4_41",
        "text": "As part of the AWS Migration Acceleration Program (MAP), what does AWS provide to accelerate Enterprise adoption of AWS? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Partners."
          },
          {
            "letter": "B",
            "text": "AWS Artifact."
          },
          {
            "letter": "C",
            "text": "AWS Professional Services."
          },
          {
            "letter": "D",
            "text": "Amazon Athena."
          }
        ],
        "correctAnswers": [
          "A",
          "C"
        ],
        "explanation": "La réponse correcte est les options A. AWS Partners., C. AWS Professional Services.."
      },
      {
        "id": "4_42",
        "text": "AWS recommends some practices to help organizations avoid unexpected charges on their bill. Which of the following is NOT one of these practices?",
        "options": [
          {
            "letter": "A",
            "text": "Deleting unused EBS volumes after terminating an EC2instance."
          },
          {
            "letter": "B",
            "text": "Deleting unused AutoScaling launch configuration."
          },
          {
            "letter": "C",
            "text": "Deleting unused Elastic Load Balancers."
          },
          {
            "letter": "D",
            "text": "Releasing unused Elastic IPs after terminating an EC2instance."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Deleting unused AutoScaling launch configuration.."
      },
      {
        "id": "4_43",
        "text": "What is the AWS tool that can help a company visualize their AWS spending in the last few months?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Cost Explorer."
          },
          {
            "letter": "B",
            "text": "AWS Pricing Calculator."
          },
          {
            "letter": "C",
            "text": "AWS Budgets."
          },
          {
            "letter": "D",
            "text": "AWS Consolidated Billing."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Cost Explorer.."
      },
      {
        "id": "4_44",
        "text": "When running a workload in AWS, the customer is NOT responsible for: (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Running penetration tests."
          },
          {
            "letter": "B",
            "text": "Reserving capacity."
          },
          {
            "letter": "C",
            "text": "Data center operations."
          },
          {
            "letter": "D",
            "text": "Auditing and regulatory compliance."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Data center operations.."
      },
      {
        "id": "4_45",
        "text": "Which AWS service can be used to send promotional text messages (SMS) to more than 200 countries worldwide?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Simple Email Service (Amazon SES)."
          },
          {
            "letter": "B",
            "text": "Amazon Simple Storage Service (Amazon S3)."
          },
          {
            "letter": "C",
            "text": "Amazon Simple Notification Service (Amazon SNS)."
          },
          {
            "letter": "D",
            "text": "Amazon Simple Queue Service (Amazon SQS)."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Amazon Simple Notification Service (Amazon SNS).."
      },
      {
        "id": "4_46",
        "text": "Which of the following allows you to create new RDS instances? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS CodeDeploy."
          },
          {
            "letter": "B",
            "text": "AWS Quick Starts."
          },
          {
            "letter": "C",
            "text": "AWS CloudFormation."
          },
          {
            "letter": "D",
            "text": "AWS DMS."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS CloudFormation.."
      },
      {
        "id": "4_47",
        "text": "One of the major advantages of using AWS is cost savings. What does AWS provide to reduce the cost of running Amazon EC2 instances?",
        "options": [
          {
            "letter": "A",
            "text": "Low monthly instance maintenance costs."
          },
          {
            "letter": "B",
            "text": "Low-cost instance tagging."
          },
          {
            "letter": "C",
            "text": "Per-second instance billing."
          },
          {
            "letter": "D",
            "text": "Low instance start-up fees."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Per-second instance billing.."
      },
      {
        "id": "4_48",
        "text": "Which AWS Group assists customers in achieving their desired business outcomes?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Security Team."
          },
          {
            "letter": "B",
            "text": "AWS Professional Services."
          },
          {
            "letter": "C",
            "text": "AWS Trusted Advisor."
          },
          {
            "letter": "D",
            "text": "AWS Concierge Support Team."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Professional Services.."
      },
      {
        "id": "4_49",
        "text": "Which AWS service or feature is used to manage the keys used to encrypt customer data?",
        "options": [
          {
            "letter": "A",
            "text": "AWS KMS."
          },
          {
            "letter": "B",
            "text": "AWS Service Control Policies (SCPs)."
          },
          {
            "letter": "C",
            "text": "Multi-Factor Authentication (MFA)."
          },
          {
            "letter": "D",
            "text": "Amazon Macie."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS KMS.."
      },
      {
        "id": "4_50",
        "text": "Which AWS Service allows customers to download AWS SOC & PCI reports?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Well-Architected Tool."
          },
          {
            "letter": "B",
            "text": "AWS Artifact."
          },
          {
            "letter": "C",
            "text": "AWS Glue."
          },
          {
            "letter": "D",
            "text": "Amazon Chime."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Artifact.."
      }
    ]
  },
  {
    "id": 5,
    "name": "Examen Pratique 5",
    "description": "Examen Pratique 5 - 50 questions",
    "questionCount": 50,
    "duration": 90,
    "questions": [
      {
        "id": "5_1",
        "text": "A company is using EC2 Instances to run their e-commerce site on the AWS platform. If the site becomes unavailable, the company will lose a significant amount of money for each minute the site is unavailable. Which design principle should the company use to minimize the risk of an outage?",
        "options": [
          {
            "letter": "A",
            "text": "Least Privilege."
          },
          {
            "letter": "B",
            "text": "Pilot Light."
          },
          {
            "letter": "C",
            "text": "Fault Tolerance."
          },
          {
            "letter": "D",
            "text": "Multi-threading."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Fault Tolerance.."
      },
      {
        "id": "5_2",
        "text": "You decide to buy a reserved instance for a term of one year. Which option provides the largest total discount?",
        "options": [
          {
            "letter": "A",
            "text": "All up-front reservation."
          },
          {
            "letter": "B",
            "text": "All reserved instance payment options provide the same discount level."
          },
          {
            "letter": "C",
            "text": "Partial up-front reservation."
          },
          {
            "letter": "D",
            "text": "No up-front reservation."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. All up-front reservation.."
      },
      {
        "id": "5_3",
        "text": "What features does AWS offer to help protect your data in the Cloud? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Access control."
          },
          {
            "letter": "B",
            "text": "Physical MFA devices."
          },
          {
            "letter": "C",
            "text": "Data encryption."
          },
          {
            "letter": "D",
            "text": "Unlimited storage."
          }
        ],
        "correctAnswers": [
          "A",
          "C"
        ],
        "explanation": "La réponse correcte est les options A. Access control., C. Data encryption.."
      },
      {
        "id": "5_4",
        "text": "An AWS customer has used one Amazon Linux instance for 2 hours, 5 minutes and 9 seconds, and one CentOS instance for 4 hours, 23 minutes and 7 seconds. How much time will the customer be billed for?",
        "options": [
          {
            "letter": "A",
            "text": "3 hours for the Linux instance and 5 hours for the CentOS instance."
          },
          {
            "letter": "B",
            "text": "2 hours, 5 minutes and 9 seconds for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance."
          },
          {
            "letter": "C",
            "text": "2 hours, 5 minutes and 9 seconds for the Linux instance and 5 hours for the CentOS instance."
          },
          {
            "letter": "D",
            "text": "3 hours for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - Pricing is per instance-hour consumed for each instance, from the time an instance is launched until it is terminated or stopped. - Each partial instance-hour consumed will be billed per-second for Linux, Windows, Windows with SQL Enterprise, Windows with SQL Standard, and Windows with SQL Web Instances, and as a full hour for all other instance types."
      },
      {
        "id": "5_5",
        "text": "What is the AWS Support feature that allows customers to manage support cases programmatically?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Trusted Advisor."
          },
          {
            "letter": "B",
            "text": "AWS Operations Support."
          },
          {
            "letter": "C",
            "text": "AWS Support API."
          },
          {
            "letter": "D",
            "text": "AWS Personal Health Dashboard."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Support API.."
      },
      {
        "id": "5_6",
        "text": "Which methods can be used by customers to interact with AWS Identity and Access Management (IAM)? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS CLI."
          },
          {
            "letter": "B",
            "text": "AWS Security Groups."
          },
          {
            "letter": "C",
            "text": "AWS SDKs."
          },
          {
            "letter": "D",
            "text": "AWS Network Access Control Lists."
          }
        ],
        "correctAnswers": [
          "A",
          "C"
        ],
        "explanation": "La réponse correcte est les options A. AWS CLI., C. AWS SDKs.."
      },
      {
        "id": "5_7",
        "text": "Which of the following are types of AWS Identity and Access Management (IAM) identities? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Resource Groups."
          },
          {
            "letter": "B",
            "text": "IAM Policies."
          },
          {
            "letter": "C",
            "text": "IAM Roles."
          },
          {
            "letter": "D",
            "text": "IAM Users."
          }
        ],
        "correctAnswers": [
          "C",
          "D"
        ],
        "explanation": "La réponse correcte est les options C. IAM Roles., D. IAM Users.."
      },
      {
        "id": "5_8",
        "text": "Which of the following Amazon RDS features facilitates offloading of database read activity?",
        "options": [
          {
            "letter": "A",
            "text": "Database Snapshots."
          },
          {
            "letter": "B",
            "text": "Multi-AZ Deployments."
          },
          {
            "letter": "C",
            "text": "Automated Backups."
          },
          {
            "letter": "D",
            "text": "Read Replicas."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Read Replicas.."
      },
      {
        "id": "5_9",
        "text": "How does AWS notify customers about security and privacy events pertaining to AWS services?",
        "options": [
          {
            "letter": "A",
            "text": "Using the AWS ACM service."
          },
          {
            "letter": "B",
            "text": "Using Security Bulletins."
          },
          {
            "letter": "C",
            "text": "Using the AWS Management Console."
          },
          {
            "letter": "D",
            "text": "Using Compliance Resources."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Using Security Bulletins.."
      },
      {
        "id": "5_10",
        "text": "Which IAM entity can best be used to grant temporary access to your AWS resources?",
        "options": [
          {
            "letter": "A",
            "text": "IAM Users."
          },
          {
            "letter": "B",
            "text": "Key Pair."
          },
          {
            "letter": "C",
            "text": "IAM Roles."
          },
          {
            "letter": "D",
            "text": "IAM Groups."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. IAM Roles.."
      },
      {
        "id": "5_11",
        "text": "A company has a web application that is hosted on a single EC2 instance and is approaching 100 percent CPU Utilization during peak loads. Rather than scaling the server vertically, the company has decided to deploy three Amazon EC2 instances in parallel and to distribute traffic across the three servers. What AWS Service should the company use to distribute the traffic evenly?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Global Accelerator."
          },
          {
            "letter": "B",
            "text": "AWS Application Load Balancer (ALB)."
          },
          {
            "letter": "C",
            "text": "Amazon CloudFront."
          },
          {
            "letter": "D",
            "text": "Transit VPC."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Application Load Balancer (ALB).."
      },
      {
        "id": "5_12",
        "text": "Which of the following approaches will help you eliminate human error and automate the process of creating and updating your AWS environment?",
        "options": [
          {
            "letter": "A",
            "text": "Use Software test automation tools."
          },
          {
            "letter": "B",
            "text": "Use AWS CodeDeploy to build and automate your AWS environment."
          },
          {
            "letter": "C",
            "text": "Use code to provision and operate your AWS infrastructure."
          },
          {
            "letter": "D",
            "text": "Migrate all of your applications to a dedicated host."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Use code to provision and operate your AWS infrastructure.."
      },
      {
        "id": "5_13",
        "text": "A company is seeking to better secure its AWS account from unauthorized access. Which of the below options can the customer use to achieve this goal?",
        "options": [
          {
            "letter": "A",
            "text": "Restrict any API call made through SDKs or CLI."
          },
          {
            "letter": "B",
            "text": "Create one IAM account for each department in the company (Development, QA, Production), and share it across all staff in that department."
          },
          {
            "letter": "C",
            "text": "Require Multi-Factor Authentication (MFA) for all IAM User access."
          },
          {
            "letter": "D",
            "text": "Set up two login passwords."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Require Multi-Factor Authentication (MFA) for all IAM User access.."
      },
      {
        "id": "5_14",
        "text": "Which AWS Service offers volume discounts based on usage?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon VPC."
          },
          {
            "letter": "B",
            "text": "Amazon S3."
          },
          {
            "letter": "C",
            "text": "Amazon Lightsail."
          },
          {
            "letter": "D",
            "text": "AWS Cost Explorer."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Amazon S3.."
      },
      {
        "id": "5_15",
        "text": "Which of the following factors should be considered when determining the region in which AWS Resources will be deployed? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "The AWS Region’s security level."
          },
          {
            "letter": "B",
            "text": "Data sovereignty."
          },
          {
            "letter": "C",
            "text": "Cost."
          },
          {
            "letter": "D",
            "text": "The planned number of VPCs."
          }
        ],
        "correctAnswers": [
          "B",
          "C"
        ],
        "explanation": "La réponse correcte est les options B. Data sovereignty., C. Cost.."
      },
      {
        "id": "5_16",
        "text": "You are running a financial services web application on AWS. The application uses a MySQL database to store the data. Which of the following AWS services would improve the performance of your application by allowing you to retrieve information from fast in-memory caches?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EFS."
          },
          {
            "letter": "B",
            "text": "Amazon Neptune."
          },
          {
            "letter": "C",
            "text": "Amazon ElastiCache."
          },
          {
            "letter": "D",
            "text": "DAX."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Amazon ElastiCache.."
      },
      {
        "id": "5_17",
        "text": "What are the advantages of using Auto Scaling Groups for EC2 instances?",
        "options": [
          {
            "letter": "A",
            "text": "Auto Scaling Groups caches the most recent responses at global edge locations to reduce latency and improve performance."
          },
          {
            "letter": "B",
            "text": "Auto Scaling Groups scales EC2 instances in multiple Availability Zones to increase application availability and fault tolerance."
          },
          {
            "letter": "C",
            "text": "Auto Scaling Groups scales EC2 instances across multiple regions to reduce latency for global users."
          },
          {
            "letter": "D",
            "text": "Auto Scaling Groups distributes application traffic across multiple Availability Zones to enhance performance."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Auto Scaling Groups scales EC2 instances in multiple Availability Zones to increase application availability and fault tolerance.."
      },
      {
        "id": "5_18",
        "text": "The TCO gap between AWS infrastructure and traditional infrastructure has widened over the recent years. Which of the following could be the reason for that?",
        "options": [
          {
            "letter": "A",
            "text": "AWS helps customers invest more in capital expenditures."
          },
          {
            "letter": "B",
            "text": "AWS automates all infrastructure operations, so customers save more on human resources costs."
          },
          {
            "letter": "C",
            "text": "AWS continues to lower the cost of cloud computing for its customers."
          },
          {
            "letter": "D",
            "text": "AWS secures AWS resources at no additional charge."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS continues to lower the cost of cloud computing for its customers.."
      },
      {
        "id": "5_19",
        "text": "Which of the following are examples of the customer’s responsibility to implement “security IN the cloud”? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Building a schema for an application."
          },
          {
            "letter": "B",
            "text": "Replacing physical hardware."
          },
          {
            "letter": "C",
            "text": "Creating a new hypervisor."
          },
          {
            "letter": "D",
            "text": "Patch management of the underlying infrastructure."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Building a schema for an application.."
      },
      {
        "id": "5_20",
        "text": "Which of the following is a type of MFA device that customers can use to protect their AWS resources?",
        "options": [
          {
            "letter": "A",
            "text": "AWS CloudHSM."
          },
          {
            "letter": "B",
            "text": "U2F Security Key."
          },
          {
            "letter": "C",
            "text": "AWS Access Keys."
          },
          {
            "letter": "D",
            "text": "AWS Key Pair."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. U2F Security Key.."
      },
      {
        "id": "5_21",
        "text": "A company is seeking to deploy an existing .NET application onto AWS as quickly as possible. Which AWS Service should the customer use to achieve this goal?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon SNS."
          },
          {
            "letter": "B",
            "text": "AWS Elastic Beanstalk."
          },
          {
            "letter": "C",
            "text": "AWS Systems Manager."
          },
          {
            "letter": "D",
            "text": "AWS Trusted Advisor."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Elastic Beanstalk.."
      },
      {
        "id": "5_22",
        "text": "Which of the following is NOT a factor when estimating the costs of Amazon EC2? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "The amount of time the instances will be running."
          },
          {
            "letter": "B",
            "text": "Number of security groups."
          },
          {
            "letter": "C",
            "text": "Allocated Elastic IP Addresses."
          },
          {
            "letter": "D",
            "text": "Number of Hosted Zones."
          }
        ],
        "correctAnswers": [
          "B",
          "D"
        ],
        "explanation": "La réponse correcte est les options B. Number of security groups., D. Number of Hosted Zones.."
      },
      {
        "id": "5_23",
        "text": "Which AWS Service helps enterprises extend their on-premises storage to AWS in a cost-effective manner?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Data Pipeline."
          },
          {
            "letter": "B",
            "text": "AWS Storage Gateway."
          },
          {
            "letter": "C",
            "text": "Amazon Aurora."
          },
          {
            "letter": "D",
            "text": "Amazon EFS."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Storage Gateway.."
      },
      {
        "id": "5_24",
        "text": "A company is building an online cloud storage platform. They need a storage service that can scale capacity automatically, while minimizing cost. Which AWS storage service should the company use to meet these requirements?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Simple Storage Service."
          },
          {
            "letter": "B",
            "text": "Amazon Elastic Block Store."
          },
          {
            "letter": "C",
            "text": "Amazon Elastic Container Service."
          },
          {
            "letter": "D",
            "text": "AWS Storage Gateway."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon Simple Storage Service.."
      },
      {
        "id": "5_25",
        "text": "You have just hired a skilled sys-admin to join your team. As usual, you have created a new IAM user for him to interact with AWS services. On his first day, you ask him to create snapshots of all existing Amazon EBS volumes and save them in a new Amazon S3 bucket. However, the new member reports back that he is unable to create neither EBS snapshots nor S3 buckets. What might prevent him from doing this simple task?",
        "options": [
          {
            "letter": "A",
            "text": "EBS and S3 are accessible only to the root account owner."
          },
          {
            "letter": "B",
            "text": "The systems administrator must contact AWS Support first to activate his new IAM account."
          },
          {
            "letter": "C",
            "text": "There is not enough space in S3 to store the snapshots."
          },
          {
            "letter": "D",
            "text": "There is a non-explicit deny to all new users."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. There is a non-explicit deny to all new users.."
      },
      {
        "id": "5_26",
        "text": "An external auditor is requesting a log of all accesses to the AWS resources in the company’s account. Which of the following services will provide the auditor with the requested information?",
        "options": [
          {
            "letter": "A",
            "text": "AWS CloudTrail."
          },
          {
            "letter": "B",
            "text": "Amazon CloudFront."
          },
          {
            "letter": "C",
            "text": "AWS CloudFormation."
          },
          {
            "letter": "D",
            "text": "Amazon CloudWatch."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS CloudTrail.."
      },
      {
        "id": "5_27",
        "text": "Which of the below options is true of Amazon Cloud Directory?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Cloud Directory allows the organization of hierarchies of data across multiple dimensions."
          },
          {
            "letter": "B",
            "text": "Amazon Cloud Directory enables the analysis of video and data streams in real time."
          },
          {
            "letter": "C",
            "text": "Amazon Cloud Directory allows users to access AWS with their existing Active Directory credentials."
          },
          {
            "letter": "D",
            "text": "Amazon Cloud Directory allows for registration and management of domain names."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon Cloud Directory allows the organization of hierarchies of data across multiple dimensions.."
      },
      {
        "id": "5_28",
        "text": "A user has opened a \"Production System Down\" support case to get help from AWS Support after a production system disruption. What is the expected response time for this type of support case?",
        "options": [
          {
            "letter": "A",
            "text": "12 hours."
          },
          {
            "letter": "B",
            "text": "15 minutes."
          },
          {
            "letter": "C",
            "text": "24 hours."
          },
          {
            "letter": "D",
            "text": "One hour."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. One hour.."
      },
      {
        "id": "5_29",
        "text": "Which of the below options is a best practice for making your application on AWS highly available?",
        "options": [
          {
            "letter": "A",
            "text": "Deploy the application to at least two Availability Zones."
          },
          {
            "letter": "B",
            "text": "Use Elastic Load Balancing (ELB) across multiple AWS Regions."
          },
          {
            "letter": "C",
            "text": "Deploy the application code on at least two servers in the same Availability Zone."
          },
          {
            "letter": "D",
            "text": "Rewrite the application code to handle all incoming requests."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Deploy the application to at least two Availability Zones.."
      },
      {
        "id": "5_30",
        "text": "Which of the following should be taken into account when performing a TCO analysis regarding the costs of running an application on AWS VS on-premises? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Labor and IT costs."
          },
          {
            "letter": "B",
            "text": "Cooling and power consumption."
          },
          {
            "letter": "C",
            "text": "Amazon EBS computing power."
          },
          {
            "letter": "D",
            "text": "Software architecture."
          }
        ],
        "correctAnswers": [
          "A",
          "B"
        ],
        "explanation": "La réponse correcte est les options A. Labor and IT costs., B. Cooling and power consumption.."
      },
      {
        "id": "5_31",
        "text": "Your company requires a response time of less than 15 minutes from support interactions about their business-critical systems that are hosted on AWS if those systems go down. Which AWS Support Plan should this company use?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Basic Support."
          },
          {
            "letter": "B",
            "text": "AWS Developer Support."
          },
          {
            "letter": "C",
            "text": "AWS Business Support."
          },
          {
            "letter": "D",
            "text": "AWS Enterprise Support."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. AWS Enterprise Support.."
      },
      {
        "id": "5_32",
        "text": "Which of the following AWS offerings are serverless services? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EC2."
          },
          {
            "letter": "B",
            "text": "AWS Lambda."
          },
          {
            "letter": "C",
            "text": "Amazon DynamoDB."
          },
          {
            "letter": "D",
            "text": "Amazon EMR."
          }
        ],
        "correctAnswers": [
          "B",
          "C"
        ],
        "explanation": "La réponse correcte est les options B. AWS Lambda., C. Amazon DynamoDB.."
      },
      {
        "id": "5_33",
        "text": "Which AWS service enables you to quickly purchase and deploy SSL/TLS certificates?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon GuardDuty."
          },
          {
            "letter": "B",
            "text": "AWS ACM."
          },
          {
            "letter": "C",
            "text": "Amazon Detective."
          },
          {
            "letter": "D",
            "text": "AWS WAF."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS ACM.."
      },
      {
        "id": "5_34",
        "text": "Which AWS Service provides integration with Chef to automate the configuration of EC2 instances?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Config."
          },
          {
            "letter": "B",
            "text": "AWS OpsWorks."
          },
          {
            "letter": "C",
            "text": "AutoScaling."
          },
          {
            "letter": "D",
            "text": "AWS CloudFormation."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS OpsWorks.."
      },
      {
        "id": "5_35",
        "text": "A customer is seeking to store objects in their AWS environment and to make those objects downloadable over the internet. Which AWS Service can be used to accomplish this?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EBS."
          },
          {
            "letter": "B",
            "text": "Amazon EFS."
          },
          {
            "letter": "C",
            "text": "Amazon S3."
          },
          {
            "letter": "D",
            "text": "Amazon Instance Store."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Amazon S3.."
      },
      {
        "id": "5_36",
        "text": "Which of the following services can be used to monitor the HTTP and HTTPS requests that are forwarded to Amazon CloudFront?",
        "options": [
          {
            "letter": "A",
            "text": "AWS WAF."
          },
          {
            "letter": "B",
            "text": "Amazon CloudWatch."
          },
          {
            "letter": "C",
            "text": "AWS Cloud9."
          },
          {
            "letter": "D",
            "text": "AWS CloudTrail."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Amazon CloudWatch.."
      },
      {
        "id": "5_37",
        "text": "A company is migrating a web application to AWS. The application’s compute capacity is continually utilized throughout the year. Which of the below options offers the company the most cost-effective solution?",
        "options": [
          {
            "letter": "A",
            "text": "On-demand Instances."
          },
          {
            "letter": "B",
            "text": "Dedicated Hosts."
          },
          {
            "letter": "C",
            "text": "Spot Instances."
          },
          {
            "letter": "D",
            "text": "Reserved Instances."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Reserved Instances.."
      },
      {
        "id": "5_38",
        "text": "A company wants to grant a new employee long-term access to manage Amazon DynamoDB databases. Which of the following is a recommended best-practice when granting these permissions?",
        "options": [
          {
            "letter": "A",
            "text": "Create an IAM role and attach a policy with Amazon DynamoDB access permissions."
          },
          {
            "letter": "B",
            "text": "Create an IAM role and attach a policy with Administrator access permissions."
          },
          {
            "letter": "C",
            "text": "Create an IAM user and attach a policy with Amazon DynamoDB access permissions."
          },
          {
            "letter": "D",
            "text": "Create an IAM user and attach a policy with Administrator access permissions."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Create an IAM user and attach a policy with Amazon DynamoDB access permissions.."
      },
      {
        "id": "5_39",
        "text": "When granting permissions to applications running on Amazon EC2 instances, which of the following is considered best practice?",
        "options": [
          {
            "letter": "A",
            "text": "Generate new IAM access keys every time you delegate permissions."
          },
          {
            "letter": "B",
            "text": "Store the required AWS credentials directly within the application code."
          },
          {
            "letter": "C",
            "text": "Use temporary security credentials (IAM roles) instead of long-term access keys."
          },
          {
            "letter": "D",
            "text": "Do nothing; Applications that run on Amazon EC2 instances do not need permission to interact with other AWS services or resources."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Use temporary security credentials (IAM roles) instead of long-term access keys.."
      },
      {
        "id": "5_40",
        "text": "Which of the following will help AWS customers save on costs when migrating their workloads to AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Use servers instead of managed services."
          },
          {
            "letter": "B",
            "text": "Use existing third-party software licenses on AWS."
          },
          {
            "letter": "C",
            "text": "Migrate production workloads to AWS edge locations instead of AWS Regions."
          },
          {
            "letter": "D",
            "text": "Use AWS Outposts to run all workloads in a cost-optimized environment."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Use existing third-party software licenses on AWS.."
      },
      {
        "id": "5_41",
        "text": "An organization has a legacy application designed using monolithic-based architecture. Which AWS Service can be used to decouple the components of the application?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon SQS."
          },
          {
            "letter": "B",
            "text": "Virtual Private Gateway."
          },
          {
            "letter": "C",
            "text": "AWS Artifact."
          },
          {
            "letter": "D",
            "text": "Amazon CloudFront."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon SQS.."
      },
      {
        "id": "5_42",
        "text": "Which of the following can be used to enable the Virtual Multi-Factor Authentication? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Connect."
          },
          {
            "letter": "B",
            "text": "AWS CLI."
          },
          {
            "letter": "C",
            "text": "AWS Identity and Access Management (IAM)."
          },
          {
            "letter": "D",
            "text": "Amazon SNS."
          }
        ],
        "correctAnswers": [
          "B",
          "C"
        ],
        "explanation": "La réponse correcte est les options B. AWS CLI., C. AWS Identity and Access Management (IAM).."
      },
      {
        "id": "5_43",
        "text": "According to best practices, which of the below options is best suited for processing a large number of binary files?",
        "options": [
          {
            "letter": "A",
            "text": "Vertically scaling EC2 instances."
          },
          {
            "letter": "B",
            "text": "Running RDS instances in parallel."
          },
          {
            "letter": "C",
            "text": "Vertically scaling RDS instances."
          },
          {
            "letter": "D",
            "text": "Running EC2 instances in parallel."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Running EC2 instances in parallel.."
      },
      {
        "id": "5_44",
        "text": "A company is planning to use Amazon S3 and Amazon CloudFront to distribute its video courses globally. What tool can the company use to estimate the costs of these services?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Cost Explorer."
          },
          {
            "letter": "B",
            "text": "AWS Pricing Calculator."
          },
          {
            "letter": "C",
            "text": "AWS Budgets."
          },
          {
            "letter": "D",
            "text": "AWS Cost & Usage Report."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Pricing Calculator.."
      },
      {
        "id": "5_45",
        "text": "What should you do if you see resources, which you don’t remember creating, in the AWS Management Console? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Stop all running services and open an investigation."
          },
          {
            "letter": "B",
            "text": "Give your root account password to AWS Support so that they can assist in troubleshooting and securing the account."
          },
          {
            "letter": "C",
            "text": "Check the AWS CloudTrail logs and delete all IAM users that have access to your resources."
          },
          {
            "letter": "D",
            "text": "Open an investigation and delete any potentially compromised IAM users."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Open an investigation and delete any potentially compromised IAM users.."
      },
      {
        "id": "5_46",
        "text": "A key practice when designing solutions on AWS is to minimize dependencies between components so that the failure of a single component does not impact other components. What is this practice called?",
        "options": [
          {
            "letter": "A",
            "text": "Elastic coupling."
          },
          {
            "letter": "B",
            "text": "Loosely coupling."
          },
          {
            "letter": "C",
            "text": "Scalable coupling."
          },
          {
            "letter": "D",
            "text": "Tightly coupling."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Loosely coupling.."
      },
      {
        "id": "5_47",
        "text": "Which AWS Service offers an NFS file system that can be mounted concurrently from multiple EC2 instances?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Elastic File System."
          },
          {
            "letter": "B",
            "text": "Amazon Simple Storage Service."
          },
          {
            "letter": "C",
            "text": "Amazon Elastic Block Store."
          },
          {
            "letter": "D",
            "text": "AWS Storage Gateway."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon Elastic File System.."
      },
      {
        "id": "5_48",
        "text": "Availability Zones within a Region are connected over low-latency links. Which of the following is a benefit of these links?",
        "options": [
          {
            "letter": "A",
            "text": "Create private connection to your data center."
          },
          {
            "letter": "B",
            "text": "Achieve global high availability."
          },
          {
            "letter": "C",
            "text": "Automate the process of provisioning new compute resources."
          },
          {
            "letter": "D",
            "text": "Make synchronous replication of your data possible."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Make synchronous replication of your data possible.."
      },
      {
        "id": "5_49",
        "text": "Which of the following are true regarding the languages that are supported on AWS Lambda? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Lambda only supports Python and Node.js, but third party plugins are available to convert code in other languages to these formats."
          },
          {
            "letter": "B",
            "text": "Lambda natively supports a number of programming languages such as Node.js, Python, and Java."
          },
          {
            "letter": "C",
            "text": "Lambda is AWS’ proprietary programming language for microservices."
          },
          {
            "letter": "D",
            "text": "Lambda doesn’t support programming languages; it is a serverless compute service."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Lambda natively supports a number of programming languages such as Node.js, Python, and Java.."
      },
      {
        "id": "5_50",
        "text": "What are the capabilities of AWS X-Ray? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Automatically decouples application components."
          },
          {
            "letter": "B",
            "text": "Facilitates tracking of user requests to identify application issues."
          },
          {
            "letter": "C",
            "text": "Helps improve application performance."
          },
          {
            "letter": "D",
            "text": "Deploys applications to Amazon EC2 instances."
          }
        ],
        "correctAnswers": [
          "B",
          "C"
        ],
        "explanation": "La réponse correcte est les options B. Facilitates tracking of user requests to identify application issues., C. Helps improve application performance.."
      }
    ]
  },
  {
    "id": 6,
    "name": "Examen Pratique 6",
    "description": "Examen Pratique 6 - 50 questions",
    "questionCount": 50,
    "duration": 90,
    "questions": [
      {
        "id": "6_1",
        "text": "Which of the following is true regarding the AWS availability zones and edge locations?",
        "options": [
          {
            "letter": "A",
            "text": "Edge locations are located in separate Availability Zones worldwide to serve global customers."
          },
          {
            "letter": "B",
            "text": "An availability zone exists within an edge location to distribute content globally with low latency."
          },
          {
            "letter": "C",
            "text": "An Availability Zone is a geographic location where AWS provides multiple, physically separated and isolated edge locations."
          },
          {
            "letter": "D",
            "text": "An AWS Availability Zone is an isolated location within an AWS Region, however edge locations are located in multiple cities worldwide."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. An AWS Availability Zone is an isolated location within an AWS Region, however edge locations are located in multiple cities worldwide.."
      },
      {
        "id": "6_2",
        "text": "Which features are included in the AWS Business Support Plan? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "24x7 access to customer service."
          },
          {
            "letter": "B",
            "text": "Access to Cloud Support Engineers via email only during business hours."
          },
          {
            "letter": "C",
            "text": "Access to the Infrastructure Event Management (IEM) feature for additional fee."
          },
          {
            "letter": "D",
            "text": "24x7 access to the TAM feature."
          }
        ],
        "correctAnswers": [
          "A",
          "C"
        ],
        "explanation": "La réponse correcte est les options A. 24x7 access to customer service., C. Access to the Infrastructure Event Management (IEM) feature for additional fee.."
      },
      {
        "id": "6_3",
        "text": "A company is developing a mobile application and wants to allow users to use their Amazon, Apple, Facebook, or Google identities to authenticate to the application. Which AWS Service should the company use for this purpose?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon GuardDuty."
          },
          {
            "letter": "B",
            "text": "Amazon Personalize."
          },
          {
            "letter": "C",
            "text": "Amazon Cognito."
          },
          {
            "letter": "D",
            "text": "AWS IAM."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Amazon Cognito.."
      },
      {
        "id": "6_4",
        "text": "Which AWS Service allows customers to create a template that programmatically defines policies and configurations of all AWS resources as code and so that the same template can be reused among multiple projects?",
        "options": [
          {
            "letter": "A",
            "text": "AWS CloudFormation."
          },
          {
            "letter": "B",
            "text": "AWS Config."
          },
          {
            "letter": "C",
            "text": "AWS CloudTrail."
          },
          {
            "letter": "D",
            "text": "AWS Auto Scaling."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS CloudFormation.."
      },
      {
        "id": "6_5",
        "text": "Which of the following are advantages of using AWS as a cloud computing provider? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Eliminates the need to monitor servers and applications."
          },
          {
            "letter": "B",
            "text": "Manages all the compliance and auditing tasks."
          },
          {
            "letter": "C",
            "text": "Provides custom hardware to meet any specification."
          },
          {
            "letter": "D",
            "text": "Eliminates the need to guess on infrastructure capacity needs."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Eliminates the need to guess on infrastructure capacity needs.."
      },
      {
        "id": "6_6",
        "text": "A customer is planning to migrate their Microsoft SQL Server databases to AWS. Which AWS Services can the customer use to run their Microsoft SQL Server database on AWS? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Fargate."
          },
          {
            "letter": "B",
            "text": "Amazon Elastic Compute Cloud."
          },
          {
            "letter": "C",
            "text": "Amazon RDS."
          },
          {
            "letter": "D",
            "text": "AWS Database Migration service (DMS)."
          }
        ],
        "correctAnswers": [
          "B",
          "C"
        ],
        "explanation": "La réponse correcte est les options B. Amazon Elastic Compute Cloud., C. Amazon RDS.."
      },
      {
        "id": "6_7",
        "text": "Which AWS Service can perform health checks on Amazon EC2 instances?",
        "options": [
          {
            "letter": "A",
            "text": "AWS CloudFormation."
          },
          {
            "letter": "B",
            "text": "Amazon Route 53."
          },
          {
            "letter": "C",
            "text": "Amazon Chime."
          },
          {
            "letter": "D",
            "text": "Amazon Aurora."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Amazon Route 53.."
      },
      {
        "id": "6_8",
        "text": "A company is developing an application that will leverage facial recognition to automate photo tagging. Which AWS Service should the company use for facial recognition?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Comprehend."
          },
          {
            "letter": "B",
            "text": "AWS IAM."
          },
          {
            "letter": "C",
            "text": "Amazon Polly."
          },
          {
            "letter": "D",
            "text": "Amazon Rekognition."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Amazon Rekognition.."
      },
      {
        "id": "6_9",
        "text": "Which of the following are examples of AWS-managed databases? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Neptune."
          },
          {
            "letter": "B",
            "text": "Amazon CloudSearch."
          },
          {
            "letter": "C",
            "text": "Microsoft SQL Server on Amazon EC2."
          },
          {
            "letter": "D",
            "text": "MySQL on Amazon EC2."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon Neptune.."
      },
      {
        "id": "6_10",
        "text": "A company’s AWS workflow requires that it periodically perform large-scale image and video processing jobs. The customer is seeking to minimize cost and has stated that the amount of time it takes to process these jobs is not critical, but that cost minimization is the most important factor in designing the solution. Which EC2 instance class is best suited for this processing?",
        "options": [
          {
            "letter": "A",
            "text": "EC2 On-Demand Instances."
          },
          {
            "letter": "B",
            "text": "EC2 Reserved Instances - No Upfront."
          },
          {
            "letter": "C",
            "text": "EC2 Spot Instances."
          },
          {
            "letter": "D",
            "text": "EC2 Reserved Instances - All Upfront."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. EC2 Spot Instances.."
      },
      {
        "id": "6_11",
        "text": "There is a requirement to grant a DevOps team full administrative access to all resources in an AWS account. Who can grant them these permissions?",
        "options": [
          {
            "letter": "A",
            "text": "AWS account owner."
          },
          {
            "letter": "B",
            "text": "AWS technical account manager."
          },
          {
            "letter": "C",
            "text": "AWS security team."
          },
          {
            "letter": "D",
            "text": "AWS cloud support engineers."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS account owner.."
      },
      {
        "id": "6_12",
        "text": "You need to migrate a large number of on-premises workloads to AWS. Which AWS service is the most appropriate?",
        "options": [
          {
            "letter": "A",
            "text": "AWS File Transfer Acceleration."
          },
          {
            "letter": "B",
            "text": "AWS Server Migration Service."
          },
          {
            "letter": "C",
            "text": "AWS Database Migration Service."
          },
          {
            "letter": "D",
            "text": "AWS Application Discovery Service."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Server Migration Service.."
      },
      {
        "id": "6_13",
        "text": "What are some key benefits of using AWS CloudFormation? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "It helps AWS customers deploy their applications without worrying about the underlying infrastructure."
          },
          {
            "letter": "B",
            "text": "It applies advanced IAM security features automatically."
          },
          {
            "letter": "C",
            "text": "It automates the provisioning and updating of your infrastructure in a safe and controlled manner."
          },
          {
            "letter": "D",
            "text": "It allows you to model your entire infrastructure in just a text file."
          }
        ],
        "correctAnswers": [
          "C",
          "D"
        ],
        "explanation": "La réponse correcte est les options C. It automates the provisioning and updating of your infrastructure in a safe and controlled manner., D. It allows you to model your entire infrastructure in just a text file.."
      },
      {
        "id": "6_14",
        "text": "Which of the following is a cloud computing deployment model that connects infrastructure and applications between cloud-based resources and existing resources not located in the cloud?",
        "options": [
          {
            "letter": "A",
            "text": "On-premises."
          },
          {
            "letter": "B",
            "text": "Mixed."
          },
          {
            "letter": "C",
            "text": "Hybrid."
          },
          {
            "letter": "D",
            "text": "Cloud."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Hybrid.."
      },
      {
        "id": "6_15",
        "text": "A company is hosting business critical workloads in an AWS Region. To protect against data loss and ensure business continuity, a mirror image of the current AWS environment should be created in another AWS Region. Company policy requires that the standby environment must be available in minutes in case of an outage in the primary AWS Region. Which AWS service can be used to meet these requirements?",
        "options": [
          {
            "letter": "A",
            "text": "CloudEndure Disaster Recovery."
          },
          {
            "letter": "B",
            "text": "CloudEndure Migration."
          },
          {
            "letter": "C",
            "text": "AWS Backup."
          },
          {
            "letter": "D",
            "text": "AWS Glue."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. CloudEndure Disaster Recovery.."
      },
      {
        "id": "6_16",
        "text": "Which of the following S3 storage classes is most appropriate to host static assets for a popular e-commerce website with stable access patterns?",
        "options": [
          {
            "letter": "A",
            "text": "S3 Standard-IA."
          },
          {
            "letter": "B",
            "text": "S3 Intelligent-Tiering."
          },
          {
            "letter": "C",
            "text": "S3 Glacier Deep Archive."
          },
          {
            "letter": "D",
            "text": "S3 Standard."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. S3 Standard.."
      },
      {
        "id": "6_17",
        "text": "You want to create a backup of your data in another geographical location. Where should you create this backup?",
        "options": [
          {
            "letter": "A",
            "text": "In another Edge location."
          },
          {
            "letter": "B",
            "text": "In another Region."
          },
          {
            "letter": "C",
            "text": "In another VPC."
          },
          {
            "letter": "D",
            "text": "In another Availability Zone."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. In another Region.."
      },
      {
        "id": "6_18",
        "text": "Which statement is true in relation to the security of Amazon EC2?",
        "options": [
          {
            "letter": "A",
            "text": "You should use instance store volumes to store login data."
          },
          {
            "letter": "B",
            "text": "You should regularly patch the operating system and applications on your EC2 instances."
          },
          {
            "letter": "C",
            "text": "You should deploy critical components of your application in the Availability Zone that you trust."
          },
          {
            "letter": "D",
            "text": "You can track all API calls using Amazon Athena."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. You should regularly patch the operating system and applications on your EC2 instances.."
      },
      {
        "id": "6_19",
        "text": "What does AWS Cost Explorer provide to help manage your AWS spend?",
        "options": [
          {
            "letter": "A",
            "text": "Cost comparisons between AWS Cloud environments and on-premises environments."
          },
          {
            "letter": "B",
            "text": "Accurate estimates of AWS service costs based on your expected usage."
          },
          {
            "letter": "C",
            "text": "Consolidated billing."
          },
          {
            "letter": "D",
            "text": "Highly accurate cost forecasts for up to 12 months ahead."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Highly accurate cost forecasts for up to 12 months ahead.."
      },
      {
        "id": "6_20",
        "text": "Which of the following is a feature of Amazon RDS that performs automatic failover when the primary database fails to respond?",
        "options": [
          {
            "letter": "A",
            "text": "RDS Single-AZ."
          },
          {
            "letter": "B",
            "text": "RDS Write Replica."
          },
          {
            "letter": "C",
            "text": "RDS Snapshots."
          },
          {
            "letter": "D",
            "text": "RDS Multi-AZ."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. RDS Multi-AZ.."
      },
      {
        "id": "6_21",
        "text": "You are using several on-demand EC2 Instances to run your development environment. What is the best way to reduce your charges when these instances are not in use?",
        "options": [
          {
            "letter": "A",
            "text": "Deleting all EBS volumes attached to the instances."
          },
          {
            "letter": "B",
            "text": "You cannot minimize charges for on-demand instances."
          },
          {
            "letter": "C",
            "text": "Terminating the instances."
          },
          {
            "letter": "D",
            "text": "Stopping the instances."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Stopping the instances.."
      },
      {
        "id": "6_22",
        "text": "Which of the following strategies helps protect your AWS root account?",
        "options": [
          {
            "letter": "A",
            "text": "Delete root user access keys if you do not need them."
          },
          {
            "letter": "B",
            "text": "Apply MFA for the root account and use it for all of your work."
          },
          {
            "letter": "C",
            "text": "Access the root account only from your personal Mobile Phone."
          },
          {
            "letter": "D",
            "text": "Only share your AWS account password or access keys with trusted persons."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Delete root user access keys if you do not need them.."
      },
      {
        "id": "6_23",
        "text": "Which of the following are factors should be considered for Amazon EBS pricing? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "The size of volumes provisioned per month."
          },
          {
            "letter": "B",
            "text": "The compute capacity you consume."
          },
          {
            "letter": "C",
            "text": "The amount of data you have stored in snapshots."
          },
          {
            "letter": "D",
            "text": "The compute time you consume."
          }
        ],
        "correctAnswers": [
          "A",
          "C"
        ],
        "explanation": "La réponse correcte est les options A. The size of volumes provisioned per month., C. The amount of data you have stored in snapshots.."
      },
      {
        "id": "6_24",
        "text": "You have just set up your AWS environment and have created six IAM user accounts for the DevOps team. What is the AWS recommendation when granting permissions to these IAM accounts?",
        "options": [
          {
            "letter": "A",
            "text": "Attach a separate IAM policy for each individual account."
          },
          {
            "letter": "B",
            "text": "Apply the Principle of Least Privilege."
          },
          {
            "letter": "C",
            "text": "For security purposes, you should not grant any permission to the DevOps team."
          },
          {
            "letter": "D",
            "text": "Create six different IAM passwords."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Apply the Principle of Least Privilege.."
      },
      {
        "id": "6_25",
        "text": "Which of the following has the greatest impact on cost? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Compute charges."
          },
          {
            "letter": "B",
            "text": "The number of services used."
          },
          {
            "letter": "C",
            "text": "Data Transfer In charges."
          },
          {
            "letter": "D",
            "text": "Data Transfer Out charges."
          }
        ],
        "correctAnswers": [
          "A",
          "D"
        ],
        "explanation": "La réponse correcte est les options A. Compute charges., D. Data Transfer Out charges.."
      },
      {
        "id": "6_26",
        "text": "Who from the following will get the largest discount?",
        "options": [
          {
            "letter": "A",
            "text": "A user who chooses to buy On-demand, Convertible, Partial upfront instances."
          },
          {
            "letter": "B",
            "text": "A user who chooses to buy Reserved, Convertible, All upfront instances."
          },
          {
            "letter": "C",
            "text": "A user who chooses to buy Reserved, Standard, No upfront instances."
          },
          {
            "letter": "D",
            "text": "A user who chooses to buy Reserved, Standard, All upfront instances."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. A user who chooses to buy Reserved, Standard, All upfront instances.."
      },
      {
        "id": "6_27",
        "text": "Which of the following is an available option when purchasing Amazon EC2 instances?",
        "options": [
          {
            "letter": "A",
            "text": "The ability to bid to get the lowest possible prices."
          },
          {
            "letter": "B",
            "text": "The ability to register EC2 instances to get volume discounts on every hour the instances are running."
          },
          {
            "letter": "C",
            "text": "The ability to buy Dedicated Instances for up to 90% discount."
          },
          {
            "letter": "D",
            "text": "The ability to pay upfront to get lower hourly costs."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. The ability to pay upfront to get lower hourly costs.."
      },
      {
        "id": "6_28",
        "text": "What does the term “Economies of scale” mean?",
        "options": [
          {
            "letter": "A",
            "text": "It means that you save more when you consume more."
          },
          {
            "letter": "B",
            "text": "It means as more time passes using AWS, you pay more for its services."
          },
          {
            "letter": "C",
            "text": "It means that AWS will continuously lower costs as it grows."
          },
          {
            "letter": "D",
            "text": "It means that you have the ability to pay as you go."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. It means that AWS will continuously lower costs as it grows.."
      },
      {
        "id": "6_29",
        "text": "A company experiences fluctuations in traffic patterns to their e-commerce website when running flash sales. What service can help the company dynamically match the required compute capacity to handle spikes in traffic during flash sales?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Auto Scaling."
          },
          {
            "letter": "B",
            "text": "Amazon Elastic Compute Cloud."
          },
          {
            "letter": "C",
            "text": "Amazon Elastic File System."
          },
          {
            "letter": "D",
            "text": "Amazon ElastiCache."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Auto Scaling.."
      },
      {
        "id": "6_30",
        "text": "Which of the below options is true of Amazon VPC?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon VPC allows customers to control user interactions with all other AWS resources."
          },
          {
            "letter": "B",
            "text": "AWS Customers have complete control over their Amazon VPC virtual networking environment."
          },
          {
            "letter": "C",
            "text": "AWS is responsible for all the management and configuration details of Amazon VPC."
          },
          {
            "letter": "D",
            "text": "Amazon VPC helps customers to review their AWS architecture and adopt best practices."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Customers have complete control over their Amazon VPC virtual networking environment.."
      },
      {
        "id": "6_31",
        "text": "Which tool can a non-AWS customer use to compare the cost of on-premises environment resources to AWS?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Cost Explorer."
          },
          {
            "letter": "B",
            "text": "AWS Pricing Calculator."
          },
          {
            "letter": "C",
            "text": "AWS Budgets."
          },
          {
            "letter": "D",
            "text": "AWS TCO Calculator."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. AWS TCO Calculator.."
      },
      {
        "id": "6_32",
        "text": "Which of the following services provide real-time auditing for compliance and vulnerabilities? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Config."
          },
          {
            "letter": "B",
            "text": "Amazon Redshift."
          },
          {
            "letter": "C",
            "text": "Amazon MQ."
          },
          {
            "letter": "D",
            "text": "AWS Trusted Advisor."
          }
        ],
        "correctAnswers": [
          "A",
          "D"
        ],
        "explanation": "La réponse correcte est les options A. AWS Config., D. AWS Trusted Advisor.."
      },
      {
        "id": "6_33",
        "text": "Which of the following AWS services uses Puppet to automate how EC2 instances are configured?",
        "options": [
          {
            "letter": "A",
            "text": "AWS OpsWorks."
          },
          {
            "letter": "B",
            "text": "AWS CloudFormation."
          },
          {
            "letter": "C",
            "text": "AWS Quick Starts."
          },
          {
            "letter": "D",
            "text": "AWS CloudTrail."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS OpsWorks.."
      },
      {
        "id": "6_34",
        "text": "An organization uses a hybrid cloud architecture to run their business. Which AWS service enables them to deploy their applications to any AWS or on-premises server?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Kinesis."
          },
          {
            "letter": "B",
            "text": "Amazon QuickSight."
          },
          {
            "letter": "C",
            "text": "AWS CodeDeploy."
          },
          {
            "letter": "D",
            "text": "Amazon Athena."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS CodeDeploy.."
      },
      {
        "id": "6_35",
        "text": "Select the services that are server-based: (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon RDS."
          },
          {
            "letter": "B",
            "text": "Amazon DynamoDB."
          },
          {
            "letter": "C",
            "text": "AWS Lambda."
          },
          {
            "letter": "D",
            "text": "AWS Fargate."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon RDS.."
      },
      {
        "id": "6_36",
        "text": "What best describes penetration testing?",
        "options": [
          {
            "letter": "A",
            "text": "Testing your application’s response time from different locations."
          },
          {
            "letter": "B",
            "text": "Testing your network to find security vulnerabilities that an attacker could exploit."
          },
          {
            "letter": "C",
            "text": "Testing your instances to check for the unhealthy ones."
          },
          {
            "letter": "D",
            "text": "Testing your software for bugs and errors."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Testing your network to find security vulnerabilities that an attacker could exploit.."
      },
      {
        "id": "6_37",
        "text": "Which of the following are use cases for Amazon EMR? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Enables you to backup extremely large amounts of data at very low costs."
          },
          {
            "letter": "B",
            "text": "Enables you to move Exabyte-scale data from on-premises datacenters into AWS."
          },
          {
            "letter": "C",
            "text": "Enables you to analyze and process extremely large amounts of data in a timely manner."
          },
          {
            "letter": "D",
            "text": "Enables you to easily run and scale Apache Spark, Hadoop,and other Big Data frameworks."
          }
        ],
        "correctAnswers": [
          "C",
          "D"
        ],
        "explanation": "La réponse correcte est les options C. Enables you to analyze and process extremely large amounts of data in a timely manner., D. Enables you to easily run and scale Apache Spark, Hadoop,and other Big Data frameworks.."
      },
      {
        "id": "6_38",
        "text": "Your CTO has asked you to contact AWS support using the chat feature to ask for guidance related to EBS. However, when you open the AWS support center you can't see a way to contact support via Chat. What should you do?",
        "options": [
          {
            "letter": "A",
            "text": "There is no chat feature in AWS support."
          },
          {
            "letter": "B",
            "text": "The chat feature is available for all plans for an additional fee, but you have to request it first."
          },
          {
            "letter": "C",
            "text": "At a minimum, upgrade to Business support plan."
          },
          {
            "letter": "D",
            "text": "Upgrade from the Basic Support plan to Developer Support."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. At a minimum, upgrade to Business support plan.."
      },
      {
        "id": "6_39",
        "text": "A developer wants to quickly deploy and manage his application in the AWS Cloud, but he doesn’t have any experience with cloud computing. Which of the following AWS services would help the developer achieve his goal?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Fargate."
          },
          {
            "letter": "B",
            "text": "AWS Batch."
          },
          {
            "letter": "C",
            "text": "Amazon Personalize."
          },
          {
            "letter": "D",
            "text": "AWS Elastic Beanstalk."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. AWS Elastic Beanstalk.."
      },
      {
        "id": "6_40",
        "text": "Which statement best describes the AWS Pay-As-You-Go pricing model?",
        "options": [
          {
            "letter": "A",
            "text": "With AWS, you replace low upfront expenses with large variable payments."
          },
          {
            "letter": "B",
            "text": "With AWS, you replace low upfront expenses with large fixed payments."
          },
          {
            "letter": "C",
            "text": "With AWS, you replace large upfront expenses with low fixed payments."
          },
          {
            "letter": "D",
            "text": "With AWS, you replace large capital expenses with low variable payments."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. With AWS, you replace large capital expenses with low variable payments.."
      },
      {
        "id": "6_41",
        "text": "For Amazon RDS databases, what does AWS perform on your behalf? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Database setup."
          },
          {
            "letter": "B",
            "text": "Network traffic protection."
          },
          {
            "letter": "C",
            "text": "Management of the operating system."
          },
          {
            "letter": "D",
            "text": "Access management."
          }
        ],
        "correctAnswers": [
          "A",
          "C"
        ],
        "explanation": "La réponse correcte est les options A. Database setup., C. Management of the operating system.."
      },
      {
        "id": "6_42",
        "text": "Which of the following strategies help analyze costs in AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Using tags to group resources."
          },
          {
            "letter": "B",
            "text": "Using AWS CloudFormation to automate the deployment of resources."
          },
          {
            "letter": "C",
            "text": "Deploying resources of the same type in different regions."
          },
          {
            "letter": "D",
            "text": "Configuring Amazon Inspector to automatically analyze costs and email reports."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Using tags to group resources.."
      },
      {
        "id": "6_43",
        "text": "A media company has an application that requires the transfer of large data sets to and from AWS every day. This data is business critical and should be transferred over a consistent connection. Which AWS service should the company use?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Direct Connect."
          },
          {
            "letter": "B",
            "text": "Amazon Comprehend."
          },
          {
            "letter": "C",
            "text": "AWS Snowmobile."
          },
          {
            "letter": "D",
            "text": "AWS VPN."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Direct Connect.."
      },
      {
        "id": "6_44",
        "text": "What is the main benefit of the AWS Storage Gateway service?",
        "options": [
          {
            "letter": "A",
            "text": "It automates the process of building, maintaining, and running ETL jobs."
          },
          {
            "letter": "B",
            "text": "It provides physical devices to migrate data from on premises to AWS."
          },
          {
            "letter": "C",
            "text": "It allows integration of on-premises IT environments with Cloud Storage."
          },
          {
            "letter": "D",
            "text": "It provides hardware-based key storage for regulatory compliance."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. It allows integration of on-premises IT environments with Cloud Storage.."
      },
      {
        "id": "6_45",
        "text": "To protect against data loss, you need to backup your database regularly. What is the most cost-effective storage option that provides immediate retrieval of your backups?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon S3 Glacier Deep Archive."
          },
          {
            "letter": "B",
            "text": "Amazon S3 Standard-Infrequent Access."
          },
          {
            "letter": "C",
            "text": "Amazon S3 Glacier."
          },
          {
            "letter": "D",
            "text": "Instance Store."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Amazon S3 Standard-Infrequent Access.."
      },
      {
        "id": "6_46",
        "text": "Which service can you use to route traffic to the endpoint that provides the best application performance for your users worldwide?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Global Accelerator."
          },
          {
            "letter": "B",
            "text": "AWS Data Pipeline."
          },
          {
            "letter": "C",
            "text": "AWS DAX Accelerator."
          },
          {
            "letter": "D",
            "text": "AWS Transfer Acceleration."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Global Accelerator.."
      },
      {
        "id": "6_47",
        "text": "Why are Serverless Architectures more economical than Server-based Architectures?",
        "options": [
          {
            "letter": "A",
            "text": "Serverless Architectures use new powerful computing devices."
          },
          {
            "letter": "B",
            "text": "With the Server-based Architectures, compute resources continue to run all the time but with serverless architecture, compute resources are only used when code is being executed."
          },
          {
            "letter": "C",
            "text": "When you reserve serverless capacity, you will get large discounts compared to server reservation."
          },
          {
            "letter": "D",
            "text": "With Serverless Architectures you have the ability to scale automatically up or down as demand changes."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. With the Server-based Architectures, compute resources continue to run all the time but with serverless architecture, compute resources are only used when code is being executed.."
      },
      {
        "id": "6_48",
        "text": "Which of the below options are use cases of the Amazon Route 53 service? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Point-to-point connectivity between an on-premises data center and AWS."
          },
          {
            "letter": "B",
            "text": "Detects configuration changes in the AWS environment."
          },
          {
            "letter": "C",
            "text": "DNS configuration and management."
          },
          {
            "letter": "D",
            "text": "Manages global application traffic through a variety of routing types."
          }
        ],
        "correctAnswers": [
          "C",
          "D"
        ],
        "explanation": "La réponse correcte est les options C. DNS configuration and management., D. Manages global application traffic through a variety of routing types.."
      },
      {
        "id": "6_49",
        "text": "You want to transfer 200 Terabytes of data from on-premises locations to the AWS Cloud, which of the following can do the job in a cost-effective way?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Snowmobile."
          },
          {
            "letter": "B",
            "text": "AWS Import/Export."
          },
          {
            "letter": "C",
            "text": "AWS DMS."
          },
          {
            "letter": "D",
            "text": "AWS Snowball."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. AWS Snowball.."
      },
      {
        "id": "6_50",
        "text": "You have a real-time IoT application that requires sub-millisecond latency. Which of the following services should you use?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Redshift."
          },
          {
            "letter": "B",
            "text": "Amazon Athena."
          },
          {
            "letter": "C",
            "text": "AWS Cloud9."
          },
          {
            "letter": "D",
            "text": "Amazon ElastiCache for Redis."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Amazon ElastiCache for Redis.."
      }
    ]
  },
  {
    "id": 7,
    "name": "Examen Pratique 7",
    "description": "Examen Pratique 7 - 50 questions",
    "questionCount": 50,
    "duration": 90,
    "questions": [
      {
        "id": "7_1",
        "text": "Which of the following can help secure your sensitive data in Amazon S3? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Delete the encryption keys once your data is encrypted."
          },
          {
            "letter": "B",
            "text": "With AWS you do not need to worry about encryption."
          },
          {
            "letter": "C",
            "text": "Enable S3 Encryption."
          },
          {
            "letter": "D",
            "text": "Encrypt the data prior to uploading it."
          }
        ],
        "correctAnswers": [
          "C",
          "D"
        ],
        "explanation": "La réponse correcte est les options C. Enable S3 Encryption., D. Encrypt the data prior to uploading it.."
      },
      {
        "id": "7_2",
        "text": "Which AWS service helps developers compile and test their code?",
        "options": [
          {
            "letter": "A",
            "text": "AWS CodeDeploy."
          },
          {
            "letter": "B",
            "text": "AWS CodeCommit."
          },
          {
            "letter": "C",
            "text": "CloudEndure."
          },
          {
            "letter": "D",
            "text": "AWS CodeBuild."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. AWS CodeBuild.."
      },
      {
        "id": "7_3",
        "text": "Which of the following will affect how much you are charged for storing objects in S3? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Using default encryption for any number of S3 buckets."
          },
          {
            "letter": "B",
            "text": "The number of EBS volumes attached to your instances."
          },
          {
            "letter": "C",
            "text": "The storage class used for the objects stored."
          },
          {
            "letter": "D",
            "text": "Creating and deleting S3 buckets."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. The storage class used for the objects stored.."
      },
      {
        "id": "7_4",
        "text": "What does the Amazon CloudFront service provide? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Tracks user activity and APl usage."
          },
          {
            "letter": "B",
            "text": "Increases application availability by caching at the edge."
          },
          {
            "letter": "C",
            "text": "Enables faster disaster recovery."
          },
          {
            "letter": "D",
            "text": "Stores archived data at very low costs."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Increases application availability by caching at the edge.."
      },
      {
        "id": "7_5",
        "text": "You are facing a lot of problems with your current contact center. Which service provides a cloud-based contact center that can deliver a better service for your customers?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Lightsail."
          },
          {
            "letter": "B",
            "text": "Amazon Connect."
          },
          {
            "letter": "C",
            "text": "AWS Direct Connect."
          },
          {
            "letter": "D",
            "text": "AWS Elastic Beanstalk."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Amazon Connect.."
      },
      {
        "id": "7_6",
        "text": "You have migrated your application to AWS recently. How can you view the AWS costs applied to your account?",
        "options": [
          {
            "letter": "A",
            "text": "Using the AWS Cost & Usage Report."
          },
          {
            "letter": "B",
            "text": "Using the AWS Total Cost of Ownership (TCO) dashboard."
          },
          {
            "letter": "C",
            "text": "Using the AWS CloudWatch logs dashboard."
          },
          {
            "letter": "D",
            "text": "Using the Amazon VPC dashboard."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Using the AWS Cost & Usage Report.."
      },
      {
        "id": "7_7",
        "text": "Which of the following are valid Amazon EC2 Reserved Instance types? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Convertible."
          },
          {
            "letter": "B",
            "text": "Expedited."
          },
          {
            "letter": "C",
            "text": "Bulk."
          },
          {
            "letter": "D",
            "text": "Spot."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Convertible.."
      },
      {
        "id": "7_8",
        "text": "Which of the following services gives you access to all AWS auditor-issued reports and certifications?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Artifact."
          },
          {
            "letter": "B",
            "text": "AWS Config."
          },
          {
            "letter": "C",
            "text": "Amazon CloudWatch."
          },
          {
            "letter": "D",
            "text": "AWS CloudTrail."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Artifact.."
      },
      {
        "id": "7_9",
        "text": "You manage a blog on AWS that has different environments: development, testing, and production. What can you use to create a custom console for each environment to view and manage your resources easily?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Resource Groups."
          },
          {
            "letter": "B",
            "text": "AWS Placement Groups."
          },
          {
            "letter": "C",
            "text": "AWS Management Console."
          },
          {
            "letter": "D",
            "text": "AWS Tag Editor."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Resource Groups.."
      },
      {
        "id": "7_10",
        "text": "Which AWS service collects metrics from running EC2 instances?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Inspector."
          },
          {
            "letter": "B",
            "text": "Amazon CloudWatch."
          },
          {
            "letter": "C",
            "text": "AWS CloudFormation."
          },
          {
            "letter": "D",
            "text": "AWS CloudTrail."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Amazon CloudWatch.."
      },
      {
        "id": "7_11",
        "text": "Your web application currently faces performance issues and suffers from long load times. Which of the following AWS services could help fix these issues and improve performance?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Detective."
          },
          {
            "letter": "B",
            "text": "AWS X-Ray."
          },
          {
            "letter": "C",
            "text": "AWS Security Hub."
          },
          {
            "letter": "D",
            "text": "AWS Shield."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS X-Ray.."
      },
      {
        "id": "7_12",
        "text": "Which of the following compute resources are serverless? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EC2."
          },
          {
            "letter": "B",
            "text": "AWS Fargate."
          },
          {
            "letter": "C",
            "text": "AWS Lambda."
          },
          {
            "letter": "D",
            "text": "Amazon ECS."
          }
        ],
        "correctAnswers": [
          "B",
          "C"
        ],
        "explanation": "La réponse correcte est les options B. AWS Fargate., C. AWS Lambda.."
      },
      {
        "id": "7_13",
        "text": "For compliance and regulatory purposes, a government agency requires that their applications must run on hardware that is dedicated to them only. How can you meet this requirement?",
        "options": [
          {
            "letter": "A",
            "text": "Use EC2 Dedicated Hosts."
          },
          {
            "letter": "B",
            "text": "Use EC2 Reserved Instances."
          },
          {
            "letter": "C",
            "text": "Use EC2 Spot Instances."
          },
          {
            "letter": "D",
            "text": "Use EC2 On-demand Instances."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Use EC2 Dedicated Hosts.."
      },
      {
        "id": "7_14",
        "text": "Which AWS Cost Governance best practice recommends refining workloads regularly to make the most of existing AWS resources and reduce costs?",
        "options": [
          {
            "letter": "A",
            "text": "Tagging Enforcement."
          },
          {
            "letter": "B",
            "text": "Architecture Optimization."
          },
          {
            "letter": "C",
            "text": "Budgeting Processes."
          },
          {
            "letter": "D",
            "text": "Resource Controls."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Architecture Optimization.."
      },
      {
        "id": "7_15",
        "text": "An organization needs to build a financial application that requires support for ACID transactions. Which AWS database service is most appropriate in this case?",
        "options": [
          {
            "letter": "A",
            "text": "RedShift."
          },
          {
            "letter": "B",
            "text": "RDS."
          },
          {
            "letter": "C",
            "text": "CloudHSM."
          },
          {
            "letter": "D",
            "text": "DMS."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. RDS.."
      },
      {
        "id": "7_16",
        "text": "What can you use to assign permissions directly to an IAM user?",
        "options": [
          {
            "letter": "A",
            "text": "IAM Identity."
          },
          {
            "letter": "B",
            "text": "IAM Group."
          },
          {
            "letter": "C",
            "text": "IAM Role."
          },
          {
            "letter": "D",
            "text": "IAM Policy."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. IAM Policy.."
      },
      {
        "id": "7_17",
        "text": "The owner of an E-Commerce application notices that the compute capacity requirements vary heavily from time to time. What makes AWS more economical than traditional data centers for this type of application?",
        "options": [
          {
            "letter": "A",
            "text": "AWS allows customers to launch powerful EC2 instances to handle spikes in load."
          },
          {
            "letter": "B",
            "text": "AWS allows customers to pay upfront to get bigger discounts."
          },
          {
            "letter": "C",
            "text": "AWS allows customers to launch and terminate EC2 instances based on demand."
          },
          {
            "letter": "D",
            "text": "AWS allows customers to choose cheaper types of EC2 instances that best fit their needs."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS allows customers to launch and terminate EC2 instances based on demand.."
      },
      {
        "id": "7_18",
        "text": "Amazon RDS supports multiple database engines to choose from. Which of the following is not one of them?",
        "options": [
          {
            "letter": "A",
            "text": "PostgreSQL."
          },
          {
            "letter": "B",
            "text": "Oracle."
          },
          {
            "letter": "C",
            "text": "Microsoft SQL Server."
          },
          {
            "letter": "D",
            "text": "Teradata."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Teradata.."
      },
      {
        "id": "7_19",
        "text": "Which of the following AWS services would help you migrate on-premise databases to AWS?",
        "options": [
          {
            "letter": "A",
            "text": "AWS DMS."
          },
          {
            "letter": "B",
            "text": "Amazon S3 Transfer Acceleration."
          },
          {
            "letter": "C",
            "text": "AWS Directory Service."
          },
          {
            "letter": "D",
            "text": "AWS Transit Gateway."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS DMS.."
      },
      {
        "id": "7_20",
        "text": "For new AWS customers, what is the EASIEST way to launch a simple WordPress website on AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Run WordPress on an Amazon Lightsail instance."
          },
          {
            "letter": "B",
            "text": "Install WordPress on an Amazon EC2 instance."
          },
          {
            "letter": "C",
            "text": "Use the Amazon S3 Web hosting feature."
          },
          {
            "letter": "D",
            "text": "Host the website directly on AWS Cloud Development Kit (AWS CDK)."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Run WordPress on an Amazon Lightsail instance.."
      },
      {
        "id": "7_21",
        "text": "Which of the following would you use to manage your encryption keys in the AWS Cloud? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS KMS."
          },
          {
            "letter": "B",
            "text": "AWS Certificate Manager."
          },
          {
            "letter": "C",
            "text": "AWS CodeDeploy."
          },
          {
            "letter": "D",
            "text": "AWS CodeCommit."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS KMS.."
      },
      {
        "id": "7_22",
        "text": "Which of the following services allows you to install and run custom relational database software?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EC2."
          },
          {
            "letter": "B",
            "text": "Amazon Cognito."
          },
          {
            "letter": "C",
            "text": "Amazon RDS."
          },
          {
            "letter": "D",
            "text": "Amazon Inspector."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon EC2.."
      },
      {
        "id": "7_23",
        "text": "Your application requirements for CPU and RAM are changing in an unpredictable way. Which service can be used to dynamically adjust these resources based on load?",
        "options": [
          {
            "letter": "A",
            "text": "Auto Scaling."
          },
          {
            "letter": "B",
            "text": "ELB."
          },
          {
            "letter": "C",
            "text": "Amazon Route53."
          },
          {
            "letter": "D",
            "text": "Amazon Elastic Container Service."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Auto Scaling.."
      },
      {
        "id": "7_24",
        "text": "A company has infrastructure hosted in an on-premises data center. They currently have an operations team that takes care of identity management. If they decide to migrate to the AWS cloud, which of the following services would help them perform the same role in AWS?",
        "options": [
          {
            "letter": "A",
            "text": "AWS IAM."
          },
          {
            "letter": "B",
            "text": "AWS Outposts."
          },
          {
            "letter": "C",
            "text": "AWS Federation."
          },
          {
            "letter": "D",
            "text": "Amazon Redshift."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS IAM.."
      },
      {
        "id": "7_25",
        "text": "What are some key design principles for designing public cloud systems? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Reserved capacity instead of on demand."
          },
          {
            "letter": "B",
            "text": "Loose coupling over tight coupling."
          },
          {
            "letter": "C",
            "text": "Servers instead of managed services."
          },
          {
            "letter": "D",
            "text": "Disposable resources instead of fixed servers."
          }
        ],
        "correctAnswers": [
          "B",
          "D"
        ],
        "explanation": "La réponse correcte est les options B. Loose coupling over tight coupling., D. Disposable resources instead of fixed servers.."
      },
      {
        "id": "7_26",
        "text": "Where can AWS account owners get a list of all users in their account, including the status of their AWS credentials?",
        "options": [
          {
            "letter": "A",
            "text": "AWS CloudTrail Trails."
          },
          {
            "letter": "B",
            "text": "IAM Credential Report."
          },
          {
            "letter": "C",
            "text": "AWS Artifact reports."
          },
          {
            "letter": "D",
            "text": "AWS Cost and Usage Report."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. IAM Credential Report.."
      },
      {
        "id": "7_27",
        "text": "Which of the following services enables you to easily generate and use your own encryption keys in the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Shield."
          },
          {
            "letter": "B",
            "text": "AWS Certificate Manager."
          },
          {
            "letter": "C",
            "text": "AWS CloudHSM."
          },
          {
            "letter": "D",
            "text": "AWS WAF."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS CloudHSM.."
      },
      {
        "id": "7_28",
        "text": "You have developed a web application targeting a global audience. Which of the following will help you achieve the highest redundancy and fault tolerance from an infrastructure perspective?",
        "options": [
          {
            "letter": "A",
            "text": "There is no need to architect for these capabilities in AWS, as AWS is redundant by default."
          },
          {
            "letter": "B",
            "text": "Deploy the application in a single Availability Zone."
          },
          {
            "letter": "C",
            "text": "Deploy the application in multiple Availability Zones in a single AWS region."
          },
          {
            "letter": "D",
            "text": "Deploy the application in multiple Availability Zones in multiple AWS regions."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Deploy the application in multiple Availability Zones in multiple AWS regions.."
      },
      {
        "id": "7_29",
        "text": "For some services, AWS automatically replicates data across multiple Availability Zones to provide fault tolerance in the event of a server failure or Availability Zone outage. Select TWO services that automatically replicate data across Availability Zones.",
        "options": [
          {
            "letter": "A",
            "text": "Instance Store."
          },
          {
            "letter": "B",
            "text": "S3."
          },
          {
            "letter": "C",
            "text": "DynamoDB."
          },
          {
            "letter": "D",
            "text": "Amazon Route 53."
          }
        ],
        "correctAnswers": [
          "B",
          "C"
        ],
        "explanation": "La réponse correcte est les options B. S3., C. DynamoDB.."
      },
      {
        "id": "7_30",
        "text": "Which of the following factors affect Amazon CloudFront cost? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Number of Requests."
          },
          {
            "letter": "B",
            "text": "Traffic Distribution."
          },
          {
            "letter": "C",
            "text": "Number of Volumes."
          },
          {
            "letter": "D",
            "text": "Instance type."
          }
        ],
        "correctAnswers": [
          "A",
          "B"
        ],
        "explanation": "La réponse correcte est les options A. Number of Requests., B. Traffic Distribution.."
      },
      {
        "id": "7_31",
        "text": "Which of the following resources can an AWS customer use to learn more about prohibited uses of the services offered by AWS?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Service Control Policies (SCPs)."
          },
          {
            "letter": "B",
            "text": "AWS Artifact."
          },
          {
            "letter": "C",
            "text": "AWS Budgets."
          },
          {
            "letter": "D",
            "text": "AWS Acceptable Use Policy."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. AWS Acceptable Use Policy.."
      },
      {
        "id": "7_32",
        "text": "Which of the following security resources are available to any user for free? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Bulletins."
          },
          {
            "letter": "B",
            "text": "AWS TAM."
          },
          {
            "letter": "C",
            "text": "AWS Support APl."
          },
          {
            "letter": "D",
            "text": "AWS Security Blog."
          }
        ],
        "correctAnswers": [
          "A",
          "D"
        ],
        "explanation": "La réponse correcte est les options A. AWS Bulletins., D. AWS Security Blog.."
      },
      {
        "id": "7_33",
        "text": "How can you protect data stored on Amazon S3 from accidental deletion?",
        "options": [
          {
            "letter": "A",
            "text": "By enabling S3 Versioning."
          },
          {
            "letter": "B",
            "text": "By configuring S3 Bucket Policies."
          },
          {
            "letter": "C",
            "text": "By configuring S3 Lifecycle Policies."
          },
          {
            "letter": "D",
            "text": "By disabling S3 Cross-Region Replication (CRR)."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. By enabling S3 Versioning.."
      },
      {
        "id": "7_34",
        "text": "Which of the following is the responsibility of AWS according to the AWS Shared Responsibility Model?",
        "options": [
          {
            "letter": "A",
            "text": "Securing regions and edge locations."
          },
          {
            "letter": "B",
            "text": "Performing auditing tasks."
          },
          {
            "letter": "C",
            "text": "Monitoring AWS resources usage."
          },
          {
            "letter": "D",
            "text": "Securing access to AWS resources."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Securing regions and edge locations.."
      },
      {
        "id": "7_35",
        "text": "Which of the following AWS support plans provides access to only the seven core AWS Trusted Advisor checks?",
        "options": [
          {
            "letter": "A",
            "text": "Business & Enterprise Support."
          },
          {
            "letter": "B",
            "text": "Basic & Developer Support."
          },
          {
            "letter": "C",
            "text": "Developer & Enterprise Support."
          },
          {
            "letter": "D",
            "text": "Developer & Business Support."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Basic & Developer Support.."
      },
      {
        "id": "7_36",
        "text": "Which of the following is NOT a benefit of using AWS Lambda?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Lambda runs code without provisioning or managing servers."
          },
          {
            "letter": "B",
            "text": "AWS Lambda provides resizable compute capacity in the cloud."
          },
          {
            "letter": "C",
            "text": "There is no charge when your AWS Lambda code is not running."
          },
          {
            "letter": "D",
            "text": "AWS Lambda can be called directly from any mobile app."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. AWS Lambda can be called directly from any mobile app.."
      },
      {
        "id": "7_37",
        "text": "How does AWS help customers achieve compliance in the cloud?",
        "options": [
          {
            "letter": "A",
            "text": "It's not possible to meet regulatory compliance requirements in the Cloud."
          },
          {
            "letter": "B",
            "text": "AWS applies the most common Cloud security standards, and is responsible for complying with customers’ applicable laws and regulations."
          },
          {
            "letter": "C",
            "text": "AWS has many common assurance certifications such as ISO 9001 and HIPAA."
          },
          {
            "letter": "D",
            "text": "Many AWS services are assessed regularly to comply with local laws and regulations."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS has many common assurance certifications such as ISO 9001 and HIPAA.."
      },
      {
        "id": "7_38",
        "text": "Who is responsible for scaling a DynamoDB database in the AWS Shared Responsibility Model?",
        "options": [
          {
            "letter": "A",
            "text": "Your security team."
          },
          {
            "letter": "B",
            "text": "Your development team."
          },
          {
            "letter": "C",
            "text": "AWS."
          },
          {
            "letter": "D",
            "text": "Your internal DevOps team."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS.."
      },
      {
        "id": "7_39",
        "text": "You are working as a web app developer. You are currently facing issues in media playback for mobile devices because your media format is not supported. Which of the following AWS services can help you convert your media into another format?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Elastic Transcoder."
          },
          {
            "letter": "B",
            "text": "Amazon Pinpoint."
          },
          {
            "letter": "C",
            "text": "AmazonS3."
          },
          {
            "letter": "D",
            "text": "Amazon Rekognition."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon Elastic Transcoder.."
      },
      {
        "id": "7_40",
        "text": "What are the benefits of the AWS Organizations service? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Control access to AWS services."
          },
          {
            "letter": "B",
            "text": "Help organizations design and maintain an accelerated path to successful cloud adoption."
          },
          {
            "letter": "C",
            "text": "Manage your organization’s payment methods."
          },
          {
            "letter": "D",
            "text": "Help organization achieve their desired business outcomes with AWS."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Control access to AWS services.."
      },
      {
        "id": "7_41",
        "text": "Which AWS service allows you to build a data warehouse in the cloud?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Shield."
          },
          {
            "letter": "B",
            "text": "Amazon Redshift."
          },
          {
            "letter": "C",
            "text": "Amazon RDS."
          },
          {
            "letter": "D",
            "text": "Amazon Comprehend."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Amazon Redshift.."
      },
      {
        "id": "7_42",
        "text": "What AWS service allows you to buy third-party software solutions and services that run on AWS resources?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Application Discovery service."
          },
          {
            "letter": "B",
            "text": "Amazon DevPay."
          },
          {
            "letter": "C",
            "text": "AWS Marketplace."
          },
          {
            "letter": "D",
            "text": "Resource Groups."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Marketplace.."
      },
      {
        "id": "7_43",
        "text": "Which of the following services is an AWS repository management system that allows for storing, versioning, and managing your application code?",
        "options": [
          {
            "letter": "A",
            "text": "AWS CodePipeline."
          },
          {
            "letter": "B",
            "text": "AWS CodeCommit."
          },
          {
            "letter": "C",
            "text": "AWS X-Ray."
          },
          {
            "letter": "D",
            "text": "Amazon Inspector."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS CodeCommit.."
      },
      {
        "id": "7_44",
        "text": "Which AWS service can be used to route end users to the nearest AWS Region to reduce latency?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Cognito."
          },
          {
            "letter": "B",
            "text": "AWS Systems Manager."
          },
          {
            "letter": "C",
            "text": "AWS Cloud9."
          },
          {
            "letter": "D",
            "text": "Amazon Route 53."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Amazon Route 53.."
      },
      {
        "id": "7_45",
        "text": "Which feature enables users to sign into their AWS accounts with their existing corporate credentials?",
        "options": [
          {
            "letter": "A",
            "text": "Federation."
          },
          {
            "letter": "B",
            "text": "Access keys."
          },
          {
            "letter": "C",
            "text": "IAM Permissions."
          },
          {
            "letter": "D",
            "text": "WAF rules."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Federation.."
      },
      {
        "id": "7_46",
        "text": "According to the AWS shared responsibility model, what are the controls that customers fully inherit from AWS? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Awareness and Training."
          },
          {
            "letter": "B",
            "text": "Communications controls."
          },
          {
            "letter": "C",
            "text": "Data center security controls."
          },
          {
            "letter": "D",
            "text": "Environmental controls."
          }
        ],
        "correctAnswers": [
          "C",
          "D"
        ],
        "explanation": "La réponse correcte est les options C. Data center security controls., D. Environmental controls.."
      },
      {
        "id": "7_47",
        "text": "What can you access by visiting the URL: ?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Billing Dashboard."
          },
          {
            "letter": "B",
            "text": "AWS Cost Dashboard."
          },
          {
            "letter": "C",
            "text": "AWS Service Health Dashboard."
          },
          {
            "letter": "D",
            "text": "AWS Security Dashboard."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Service Health Dashboard.."
      },
      {
        "id": "7_48",
        "text": "Which of the following procedures can reduce latency when your end users are retrieving data? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Store media assets in the region closest to your end users."
          },
          {
            "letter": "B",
            "text": "Store media assets on an additional EBS volume and increase the capacity of your server."
          },
          {
            "letter": "C",
            "text": "Replicate media assets to at least two availability zones."
          },
          {
            "letter": "D",
            "text": "Reduce the size of media assets using the Amazon Elastic Transcoder."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Store media assets in the region closest to your end users.."
      },
      {
        "id": "7_49",
        "text": "Which of the following are part of the seven design principles for security in the cloud? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Use manual monitoring techniques to protect your AWS resources."
          },
          {
            "letter": "B",
            "text": "Use IAM roles to grant temporary access instead of long-term credentials."
          },
          {
            "letter": "C",
            "text": "Scale horizontally to protect from failures."
          },
          {
            "letter": "D",
            "text": "Enable real-time traceability."
          }
        ],
        "correctAnswers": [
          "B",
          "D"
        ],
        "explanation": "La réponse correcte est les options B. Use IAM roles to grant temporary access instead of long-term credentials., D. Enable real-time traceability.."
      },
      {
        "id": "7_50",
        "text": "A company is migrating production workloads to AWS, and they are concerned about cost management across different departments. Which option should the company implement to categorize and track AWS spending?",
        "options": [
          {
            "letter": "A",
            "text": "Use the AWS Pricing Calculator service to monitor the costs incurred by each department."
          },
          {
            "letter": "B",
            "text": "Use Amazon Aurora to forecast AWS spending based on usage."
          },
          {
            "letter": "C",
            "text": "Apply cost allocation tags to segment AWS costs by different e projects and departments."
          },
          {
            "letter": "D",
            "text": "Configure AWS Price List API to receive billing updates for each department automatically."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Apply cost allocation tags to segment AWS costs by different e projects and departments.."
      }
    ]
  },
  {
    "id": 8,
    "name": "Examen Pratique 8",
    "description": "Examen Pratique 8 - 50 questions",
    "questionCount": 50,
    "duration": 90,
    "questions": [
      {
        "id": "8_1",
        "text": "What is the main benefit of attaching security groups to an Amazon RDS instance?",
        "options": [
          {
            "letter": "A",
            "text": "Manages user access and encryption keys."
          },
          {
            "letter": "B",
            "text": "Controls what IP address ranges can connect to your database instance."
          },
          {
            "letter": "C",
            "text": "Deploys SSL/TLS certificates for use with your database instance."
          },
          {
            "letter": "D",
            "text": "Distributes incoming traffic across multiple targets."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Controls what IP address ranges can connect to your database instance.."
      },
      {
        "id": "8_2",
        "text": "A company wants to use Amazon Elastic Container Service (Amazon ECS) to run its containerized applications. For compliance reasons, the company wants to retain complete visibility and control over the underlying server cluster. Which Amazon ECS launch type will satisfy these requirements?",
        "options": [
          {
            "letter": "A",
            "text": "EC2 launch type."
          },
          {
            "letter": "B",
            "text": "Fargate launch type."
          },
          {
            "letter": "C",
            "text": "Lightsail launch type."
          },
          {
            "letter": "D",
            "text": "Lambda launch type."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. EC2 launch type.."
      },
      {
        "id": "8_3",
        "text": "You have multiple standalone AWS accounts and you want to decrease your AWS monthly charges. What should you do?",
        "options": [
          {
            "letter": "A",
            "text": "Try to remove unnecessary AWS accounts."
          },
          {
            "letter": "B",
            "text": "Add the accounts to an AWS Organization and use Consolidated Billing."
          },
          {
            "letter": "C",
            "text": "Track the AWS charges that are incurred by the member accounts."
          },
          {
            "letter": "D",
            "text": "Enable AWS tiered-pricing before provisioning resources."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Add the accounts to an AWS Organization and use Consolidated Billing.."
      },
      {
        "id": "8_4",
        "text": "You have been tasked with auditing the security of your VPC. As part of this process, you need to start by analyzing what inbound and outbound traffic is allowed on your EC2 instances. What two parts of the VPC do you need to check to accomplish this task?",
        "options": [
          {
            "letter": "A",
            "text": "Network ACLs and Traffic Manager."
          },
          {
            "letter": "B",
            "text": "Network ACLs and Subnets."
          },
          {
            "letter": "C",
            "text": "Security Groups and Internet Gateways."
          },
          {
            "letter": "D",
            "text": "Security Groups and Network ACLs."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Security Groups and Network ACLs.."
      },
      {
        "id": "8_5",
        "text": "What does the AWS \"Business\" support plan provide? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Access to the full set of Trusted Advisor checks."
          },
          {
            "letter": "B",
            "text": "Support Concierge Service."
          },
          {
            "letter": "C",
            "text": "Less than 15 minutes response-time support if your business critical system goes down."
          },
          {
            "letter": "D",
            "text": "AWS Support API."
          }
        ],
        "correctAnswers": [
          "A",
          "D"
        ],
        "explanation": "La réponse correcte est les options A. Access to the full set of Trusted Advisor checks., D. AWS Support API.."
      },
      {
        "id": "8_6",
        "text": "You have just finished writing your application code. Which service can be used to automate the deployment and scaling of your application?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Simple Storage Service."
          },
          {
            "letter": "B",
            "text": "AWS Elastic Beanstalk."
          },
          {
            "letter": "C",
            "text": "AWS CodeCommit."
          },
          {
            "letter": "D",
            "text": "Amazon Elastic File System."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Elastic Beanstalk.."
      },
      {
        "id": "8_7",
        "text": "Which statement is true in relation to security in AWS?",
        "options": [
          {
            "letter": "A",
            "text": "AWS manages everything related to EC2 operating systems."
          },
          {
            "letter": "B",
            "text": "AWS customers are responsible for patching any database software running on Amazon EC2."
          },
          {
            "letter": "C",
            "text": "Server side encryption is the responsibility of AWS."
          },
          {
            "letter": "D",
            "text": "AWS is responsible for the security of your application."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS customers are responsible for patching any database software running on Amazon EC2.."
      },
      {
        "id": "8_8",
        "text": "Amazon EC2 instances are conceptually very similar to traditional servers. However, using Amazon EC2 server instances in the same manner as traditional hardware server instances is only a starting point. What are the main benefits of using the AWS EC2 instances instead of traditional servers? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Improves Fault-Tolerance."
          },
          {
            "letter": "B",
            "text": "Provides your business with a seamless remote accessibility."
          },
          {
            "letter": "C",
            "text": "Prevents unauthorized users from getting into your network."
          },
          {
            "letter": "D",
            "text": "Provides automatic data backups."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Improves Fault-Tolerance.."
      },
      {
        "id": "8_9",
        "text": "Which statement is true regarding AWS pricing? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "With the AWS pay-as-you-go pricing model, you don't have to pay any upfront fee."
          },
          {
            "letter": "B",
            "text": "You have no responsibility for third-party software license costs."
          },
          {
            "letter": "C",
            "text": "You only pay for the individual services that you need with no long-term contracts."
          },
          {
            "letter": "D",
            "text": "For some services, you have to pay a startup fee in order to get the service running."
          }
        ],
        "correctAnswers": [
          "A",
          "C"
        ],
        "explanation": "La réponse correcte est les options A. With the AWS pay-as-you-go pricing model, you don't have to pay any upfront fee., C. You only pay for the individual services that you need with no long-term contracts.."
      },
      {
        "id": "8_10",
        "text": "Which AWS service provides the EASIEST way to set up and manage a secure, well-architected, multi-account AWS environment?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Control Tower."
          },
          {
            "letter": "B",
            "text": "Amazon Macie."
          },
          {
            "letter": "C",
            "text": "AWS Systems Manager Patch Manager."
          },
          {
            "letter": "D",
            "text": "AWS Security Hub."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Control Tower.."
      },
      {
        "id": "8_11",
        "text": "A company is running a large web application that needs to always be available. The application tends to slow down when CPU usage is greater than 60%. How can they track when CPU usage goes above 60% for any of the EC2 Instances in their account?",
        "options": [
          {
            "letter": "A",
            "text": "Use CloudFront to monitor the CPU usage."
          },
          {
            "letter": "B",
            "text": "Set the AWS Config CPU threshold to 60% to receive a notification when EC2 usage exceeds that value."
          },
          {
            "letter": "C",
            "text": "Use CloudWatch Alarms to monitor the CPU and alert when the CPU usage is >= 60%."
          },
          {
            "letter": "D",
            "text": "Use SNS to monitor the utilization of the server."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Use CloudWatch Alarms to monitor the CPU and alert when the CPU usage is >= 60%.."
      },
      {
        "id": "8_12",
        "text": "What is the recommended storage option when hosting an often-changing database on an Amazon EC2 instance?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EBS."
          },
          {
            "letter": "B",
            "text": "Amazon RDS."
          },
          {
            "letter": "C",
            "text": "You can't run a database inside an Amazon EC2 instance."
          },
          {
            "letter": "D",
            "text": "Amazon DynamoDB."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon EBS.."
      },
      {
        "id": "8_13",
        "text": "You are working as a site reliability engineer (SRE) in an AWS environment, which of the following services helps monitor your applications?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon CloudWatch."
          },
          {
            "letter": "B",
            "text": "Amazon CloudSearch."
          },
          {
            "letter": "C",
            "text": "Amazon Elastic MapReduce."
          },
          {
            "letter": "D",
            "text": "Amazon CloudHSM."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon CloudWatch.."
      },
      {
        "id": "8_14",
        "text": "What factors determine how you are charged when using AWS Lambda? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Storage consumed."
          },
          {
            "letter": "B",
            "text": "Number of requests to your functions."
          },
          {
            "letter": "C",
            "text": "Number of volumes."
          },
          {
            "letter": "D",
            "text": "Placement groups."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Number of requests to your functions.."
      },
      {
        "id": "8_15",
        "text": "What are the main differences between an IAM user and an IAM role in AWS? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "An IAM user is uniquely associated with only one person, however a role is intended to be assumable by anyone who needs it."
          },
          {
            "letter": "B",
            "text": "An IAM user has permanent credentials associated with it, however a role has temporary credentials associated with it."
          },
          {
            "letter": "C",
            "text": "IAM users are more cost effective than IAM roles."
          },
          {
            "letter": "D",
            "text": "A role is uniquely associated with only one person, however an IAM user is intended to be assumable by anyone who needs it."
          }
        ],
        "correctAnswers": [
          "A",
          "B"
        ],
        "explanation": "La réponse correcte est les options A. An IAM user is uniquely associated with only one person, however a role is intended to be assumable by anyone who needs it., B. An IAM user has permanent credentials associated with it, however a role has temporary credentials associated with it.."
      },
      {
        "id": "8_16",
        "text": "Which of the following actions may reduce Amazon EBS costs? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Deleting unused buckets."
          },
          {
            "letter": "B",
            "text": "Using reservations."
          },
          {
            "letter": "C",
            "text": "Deleting unnecessary snapshots."
          },
          {
            "letter": "D",
            "text": "Changing the type of the volume."
          }
        ],
        "correctAnswers": [
          "C",
          "D"
        ],
        "explanation": "La réponse correcte est les options C. Deleting unnecessary snapshots., D. Changing the type of the volume.."
      },
      {
        "id": "8_17",
        "text": "What does Amazon GuardDuty do to protect AWS accounts and workloads?",
        "options": [
          {
            "letter": "A",
            "text": "Notifies AWS customers about abuse events once they are reported."
          },
          {
            "letter": "B",
            "text": "Continuously monitors AWS infrastructure and helps detect threats such as attacker reconnaissance or account compromise."
          },
          {
            "letter": "C",
            "text": "Helps AWS customers identify the root cause of potential security issues."
          },
          {
            "letter": "D",
            "text": "Checks security groups for rules that allow unrestricted access to AWS. resources."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Continuously monitors AWS infrastructure and helps detect threats such as attacker reconnaissance or account compromise.."
      },
      {
        "id": "8_18",
        "text": "Which database service should you use if your application and data schema require \"joins\" or complex transactions?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon RDS."
          },
          {
            "letter": "B",
            "text": "AWS Outposts."
          },
          {
            "letter": "C",
            "text": "Amazon DocumentDB."
          },
          {
            "letter": "D",
            "text": "Amazon DynamoDB."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon RDS.."
      },
      {
        "id": "8_19",
        "text": "Which of the following makes it easier for you to categorize, manage and filter your resources?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon CloudWatch."
          },
          {
            "letter": "B",
            "text": "AWS Service Catalog."
          },
          {
            "letter": "C",
            "text": "AWS Directory Service."
          },
          {
            "letter": "D",
            "text": "AWS Tagging."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. AWS Tagging.."
      },
      {
        "id": "8_20",
        "text": "What should you consider when storing data in Amazon Glacier?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Glacier only accepts data in a compressed format."
          },
          {
            "letter": "B",
            "text": "Glacier can only be used to store frequently accessed data and data archives."
          },
          {
            "letter": "C",
            "text": "Amazon Glacier does not provide immediate retrieval of data."
          },
          {
            "letter": "D",
            "text": "Attach Glacier to an EC2 Instance to be able to store data."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Amazon Glacier does not provide immediate retrieval of data.."
      },
      {
        "id": "8_21",
        "text": "Engineers are wasting a lot of time and effort managing batch computing software in traditional data centers. Which of the following AWS services allows them to easily run thousands of batch computing jobs?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EC2."
          },
          {
            "letter": "B",
            "text": "AWS Batch."
          },
          {
            "letter": "C",
            "text": "Lambda@Edge."
          },
          {
            "letter": "D",
            "text": "AWS Fargate."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Batch.."
      },
      {
        "id": "8_22",
        "text": "How can you increase your application’s fault-tolerance while it is being hosted in AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Deploy your application across multiple EC2 instances."
          },
          {
            "letter": "B",
            "text": "Deploy your application across multiple Availability Zones."
          },
          {
            "letter": "C",
            "text": "Host your application on one powerful EC2 instance type instead of multiple smaller instances."
          },
          {
            "letter": "D",
            "text": "Deploy the underlying application resources across multiple subnets."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Deploy your application across multiple Availability Zones.."
      },
      {
        "id": "8_23",
        "text": "Which of the following AWS Support Plans gives you 24/7 access to Cloud Support Engineers via email & phone? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Developer."
          },
          {
            "letter": "B",
            "text": "Premium."
          },
          {
            "letter": "C",
            "text": "Enterprise."
          },
          {
            "letter": "D",
            "text": "Standard."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Enterprise.."
      },
      {
        "id": "8_24",
        "text": "Which of the following requires an access key ID and a secret access key to get long-lived programmatic access to AWS resources? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "IAM group."
          },
          {
            "letter": "B",
            "text": "IAM user."
          },
          {
            "letter": "C",
            "text": "IAM role."
          },
          {
            "letter": "D",
            "text": "AWS account root user."
          }
        ],
        "correctAnswers": [
          "B",
          "D"
        ],
        "explanation": "La réponse correcte est les options B. IAM user., D. AWS account root user.."
      },
      {
        "id": "8_25",
        "text": "Which of the following is a benefit of the \"Loose Coupling\" architecture principle?",
        "options": [
          {
            "letter": "A",
            "text": "It eliminates the need for change management."
          },
          {
            "letter": "B",
            "text": "It allows for Cross-Region Replication."
          },
          {
            "letter": "C",
            "text": "It helps AWS customers reduce Privileged Access to AWS resources."
          },
          {
            "letter": "D",
            "text": "It allows individual application components or services to be modified without affecting other components."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. It allows individual application components or services to be modified without affecting other components.."
      },
      {
        "id": "8_26",
        "text": "A company needs to host a big data application on AWS using EC2 instances. Which of the following AWS Storage services would they choose to automatically get high throughput to multiple compute nodes?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Elastic Block Store."
          },
          {
            "letter": "B",
            "text": "AWS Storage Gateway."
          },
          {
            "letter": "C",
            "text": "Amazon Elastic File System."
          },
          {
            "letter": "D",
            "text": "S3."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Amazon Elastic File System.."
      },
      {
        "id": "8_27",
        "text": "Which of the following Cloud Computing deployment models eliminates the need to run and maintain physical data centers?",
        "options": [
          {
            "letter": "A",
            "text": "On-premises."
          },
          {
            "letter": "B",
            "text": "IaaS."
          },
          {
            "letter": "C",
            "text": "PaaS."
          },
          {
            "letter": "D",
            "text": "Cloud."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Cloud.."
      },
      {
        "id": "8_28",
        "text": "What are the benefits of the AWS Marketplace service? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Protects customers by performing periodic security checks on listed products."
          },
          {
            "letter": "B",
            "text": "Per-second billing."
          },
          {
            "letter": "C",
            "text": "Provides cheaper options for purchasing Amazon EC2 on-demand instances."
          },
          {
            "letter": "D",
            "text": "Provides flexible pricing options that suit most customer needs."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Provides flexible pricing options that suit most customer needs.."
      },
      {
        "id": "8_29",
        "text": "What is the benefit of Amazon EBS volumes being automatically replicated within the same availability zone?",
        "options": [
          {
            "letter": "A",
            "text": "Elasticity."
          },
          {
            "letter": "B",
            "text": "Durability."
          },
          {
            "letter": "C",
            "text": "Traceability."
          },
          {
            "letter": "D",
            "text": "Accessibility."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Durability.."
      },
      {
        "id": "8_30",
        "text": "You are planning to launch an advertising campaign over the coming weekend to promote a new digital product. It is expected that there will be heavy spikes in load during the campaign period, and you can’t afford any downtime. You need additional compute resources to handle the additional load. What is the most cost-effective EC2 instance purchasing option for this job?",
        "options": [
          {
            "letter": "A",
            "text": "Savings Plans."
          },
          {
            "letter": "B",
            "text": "Spot Instances."
          },
          {
            "letter": "C",
            "text": "Reserved Instances."
          },
          {
            "letter": "D",
            "text": "On-Demand Instances."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. On-Demand Instances.."
      },
      {
        "id": "8_31",
        "text": "Which of the following AWS services integrates with AWS Shield and AWS Web Application Firewall (AWS WAF) to protect against network and application layer DDoS attacks?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EFS."
          },
          {
            "letter": "B",
            "text": "AWS Secrets Manager."
          },
          {
            "letter": "C",
            "text": "AWS Systems Manager."
          },
          {
            "letter": "D",
            "text": "Amazon CloudFront."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Amazon CloudFront.."
      },
      {
        "id": "8_32",
        "text": "Which of the following services is used when encrypting EBS volumes?",
        "options": [
          {
            "letter": "A",
            "text": "AWS WAF."
          },
          {
            "letter": "B",
            "text": "AWS KMS."
          },
          {
            "letter": "C",
            "text": "Amazon Macie."
          },
          {
            "letter": "D",
            "text": "Amazon GuardDuty."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS KMS.."
      },
      {
        "id": "8_33",
        "text": "The AWS account administrator of your company has been fired. With the permissions granted to him as an administrator, he was able to create multiple IAM user accounts and access keys. Additionally, you are not sure whether he has access to the AWS root account or not. What should you do immediately to protect your AWS infrastructure? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Download all the attached policies in a safe place."
          },
          {
            "letter": "B",
            "text": "Delete all IAM accounts and recreate them."
          },
          {
            "letter": "C",
            "text": "Use the CloudWatch service to check all API calls that have been made in your account since the administrator was fired."
          },
          {
            "letter": "D",
            "text": "Rotate all access keys."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Rotate all access keys.."
      },
      {
        "id": "8_34",
        "text": "What is the Amazon ElastiCache service used for? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Provide an in-memory data storage service."
          },
          {
            "letter": "B",
            "text": "Reduce delivery costs using Edge Locations."
          },
          {
            "letter": "C",
            "text": "Improve web application performance."
          },
          {
            "letter": "D",
            "text": "Provide a Chef-compatible cache to speed up application response."
          }
        ],
        "correctAnswers": [
          "A",
          "C"
        ],
        "explanation": "La réponse correcte est les options A. Provide an in-memory data storage service., C. Improve web application performance.."
      },
      {
        "id": "8_35",
        "text": "The elasticity of the AWS Cloud enables customers to save costs when compared to traditional hosting providers. What can AWS customers do to benefit from the elasticity of the AWS Cloud? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Deploy your resources across multiple Availability Zones."
          },
          {
            "letter": "B",
            "text": "Use Amazon EC2 Auto Scaling."
          },
          {
            "letter": "C",
            "text": "Deploy your resources in another region."
          },
          {
            "letter": "D",
            "text": "Use Elastic Load Balancing."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Use Amazon EC2 Auto Scaling.."
      },
      {
        "id": "8_36",
        "text": "What are some of the benefits of using On-Demand EC2 instances? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "They provide free capacity when testing your new applications."
          },
          {
            "letter": "B",
            "text": "They are cheaper than all other EC2 options."
          },
          {
            "letter": "C",
            "text": "They remove the need to buy “safety net” capacity to handle periodic traffic spikes."
          },
          {
            "letter": "D",
            "text": "They only require 1-2 days for setup and configuration."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. They remove the need to buy “safety net” capacity to handle periodic traffic spikes.."
      },
      {
        "id": "8_37",
        "text": "Each AWS Region is composed of multiple Availability Zones. Which of the following best describes what an Availability Zone is?",
        "options": [
          {
            "letter": "A",
            "text": "It is a data center designed to be completely isolated from other data centers in the same region."
          },
          {
            "letter": "B",
            "text": "It is a collection of data centers distributed in multiple countries."
          },
          {
            "letter": "C",
            "text": "It is a logically isolated network of the AWS Cloud."
          },
          {
            "letter": "D",
            "text": "It is a distinct location within a region that is insulated from « failures in other Availability Zones."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. It is a distinct location within a region that is insulated from « failures in other Availability Zones.."
      },
      {
        "id": "8_38",
        "text": "AWS provides disaster recovery capability by allowing customers to deploy infrastructure into multiple [...].",
        "options": [
          {
            "letter": "A",
            "text": "Regions."
          },
          {
            "letter": "B",
            "text": "Transportation devices."
          },
          {
            "letter": "C",
            "text": "Support plans."
          },
          {
            "letter": "D",
            "text": "Edge locations."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Regions.."
      },
      {
        "id": "8_39",
        "text": "A financial services company decides to migrate one of its applications to AWS. The application deals with sensitive data, such as credit card information, and must run on a PCI-compliant environment. Which of the following is the company’s responsibility when building a PCI-compliant environment in AWS? (Choose TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Start the migration process immediately as all AWS services are PCI compliant."
          },
          {
            "letter": "B",
            "text": "Ensure that AWS services are configured properly to meet all PCI DSS standards."
          },
          {
            "letter": "C",
            "text": "Restrict any access to cardholder data and create a policy that addresses information security for all personnel."
          },
          {
            "letter": "D",
            "text": "Configure the underlying infrastructure of AWS services to meet all PCI DSS requirements."
          }
        ],
        "correctAnswers": [
          "B",
          "C"
        ],
        "explanation": "La réponse correcte est les options B. Ensure that AWS services are configured properly to meet all PCI DSS standards., C. Restrict any access to cardholder data and create a policy that addresses information security for all personnel.."
      },
      {
        "id": "8_40",
        "text": "What is the maximum amount of data that can be stored in S3 in a single AWS account?",
        "options": [
          {
            "letter": "A",
            "text": "100 PetaBytes."
          },
          {
            "letter": "B",
            "text": "Virtually unlimited storage."
          },
          {
            "letter": "C",
            "text": "5TeraBytes."
          },
          {
            "letter": "D",
            "text": "10 Exabytes."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Virtually unlimited storage.."
      },
      {
        "id": "8_41",
        "text": "Which pillar of the AWS Well-Architected Framework provides recommendations to help customers select the right compute resources based on workload requirements?",
        "options": [
          {
            "letter": "A",
            "text": "Operational Excellence."
          },
          {
            "letter": "B",
            "text": "Security."
          },
          {
            "letter": "C",
            "text": "Performance Efficiency."
          },
          {
            "letter": "D",
            "text": "Reliability."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Performance Efficiency.."
      },
      {
        "id": "8_42",
        "text": "Which AWS service delivers data, videos, applications, and APIs to users globally with low latency and high transfer speeds?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Route 53."
          },
          {
            "letter": "B",
            "text": "Amazon Connect."
          },
          {
            "letter": "C",
            "text": "Amazon CloudFront."
          },
          {
            "letter": "D",
            "text": "Amazon EC2."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Amazon CloudFront.."
      },
      {
        "id": "8_43",
        "text": "Which of the following steps should be taken by a customer when conducting penetration testing on AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Conduct penetration testing using Amazon Inspector, and then notify AWS support."
          },
          {
            "letter": "B",
            "text": "Request and wait for approval from the customer’s internal security team, and then conduct testing."
          },
          {
            "letter": "C",
            "text": "Notify AWS support, and then conduct testing immediately."
          },
          {
            "letter": "D",
            "text": "Request and wait for approval from AWS support, and then conduct testing."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Request and wait for approval from AWS support, and then conduct testing.."
      },
      {
        "id": "8_44",
        "text": "Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Cost Explorer."
          },
          {
            "letter": "B",
            "text": "AWS Budgets."
          },
          {
            "letter": "C",
            "text": "AWS Cost and Usage report."
          },
          {
            "letter": "D",
            "text": "AWS Billing dashboard."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Cost and Usage report.."
      },
      {
        "id": "8_45",
        "text": "Which element of the AWS global infrastructure consists of one or more discrete data centers each with redundant power networking and connectivity which are housed in separate facilities?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Regions."
          },
          {
            "letter": "B",
            "text": "Availability Zones."
          },
          {
            "letter": "C",
            "text": "Edge locations."
          },
          {
            "letter": "D",
            "text": "Amazon CloudFront."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Availability Zones.."
      },
      {
        "id": "8_46",
        "text": "How many Availability Zones should compute resources be provisioned across to achieve high availability?",
        "options": [
          {
            "letter": "A",
            "text": "A minimum of one."
          },
          {
            "letter": "B",
            "text": "A minimum of two."
          },
          {
            "letter": "C",
            "text": "A minimum of three."
          },
          {
            "letter": "D",
            "text": "A minimum of four or more."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. A minimum of two.."
      },
      {
        "id": "8_47",
        "text": "The AWS Cloud’s multiple Regions are an example of:",
        "options": [
          {
            "letter": "A",
            "text": "Agility."
          },
          {
            "letter": "B",
            "text": "Global infrastructure."
          },
          {
            "letter": "C",
            "text": "Elasticity."
          },
          {
            "letter": "D",
            "text": "Pay-as-you-go pricing."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Global infrastructure.."
      },
      {
        "id": "8_48",
        "text": "Which AWS service can be used to manually launch instances based on resource requirements?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EBS."
          },
          {
            "letter": "B",
            "text": "Amazon S3."
          },
          {
            "letter": "C",
            "text": "Amazon EC2."
          },
          {
            "letter": "D",
            "text": "Amazon ECS."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Amazon EC2.."
      },
      {
        "id": "8_49",
        "text": "Which is a recommended pattern for designing a highly available architecture on AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Ensure that components have low-latency network connectivity."
          },
          {
            "letter": "B",
            "text": "Run enough Amazon EC2 instances to operate at peak load."
          },
          {
            "letter": "C",
            "text": "Ensure that the application is designed to accommodate failure of any single component."
          },
          {
            "letter": "D",
            "text": "Use a monolithic application that handles all operations."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Ensure that the application is designed to accommodate failure of any single component.."
      },
      {
        "id": "8_50",
        "text": "Which AWS characteristics make AWS cost effective for a workload with dynamic user demand? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "High availability."
          },
          {
            "letter": "B",
            "text": "Shared security model."
          },
          {
            "letter": "C",
            "text": "Elasticity."
          },
          {
            "letter": "D",
            "text": "Pay-as-you-go pricing."
          }
        ],
        "correctAnswers": [
          "C",
          "D"
        ],
        "explanation": "La réponse correcte est les options C. Elasticity., D. Pay-as-you-go pricing.."
      }
    ]
  },
  {
    "id": 9,
    "name": "Examen Pratique 9",
    "description": "Examen Pratique 9 - 50 questions",
    "questionCount": 50,
    "duration": 90,
    "questions": [
      {
        "id": "9_1",
        "text": "An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Well-Architected Framework documentation."
          },
          {
            "letter": "B",
            "text": "Amazon CloudFront."
          },
          {
            "letter": "C",
            "text": "AWS CodeCommit."
          },
          {
            "letter": "D",
            "text": "AWS Quick Start reference deployments."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. AWS Quick Start reference deployments.."
      },
      {
        "id": "9_2",
        "text": "What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?",
        "options": [
          {
            "letter": "A",
            "text": "It simplifies relational database administration tasks."
          },
          {
            "letter": "B",
            "text": "It provides 99.99999999999% reliability and durability."
          },
          {
            "letter": "C",
            "text": "It automatically scales databases for loads."
          },
          {
            "letter": "D",
            "text": "It enables users to dynamically adjust CPU and RAM resources."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. It simplifies relational database administration tasks.."
      },
      {
        "id": "9_3",
        "text": "Which of the following AWS Cloud services can be used to run a customer-managed relational database?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EC2."
          },
          {
            "letter": "B",
            "text": "Amazon Route 53."
          },
          {
            "letter": "C",
            "text": "Amazon ElastiCache."
          },
          {
            "letter": "D",
            "text": "Amazon DynamoDB."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon EC2.."
      },
      {
        "id": "9_4",
        "text": "A user is planning to launch two additional Amazon EC2 instances to increase availability. Which action should the user take?",
        "options": [
          {
            "letter": "A",
            "text": "Launch the instances across multiple Availability Zones in a single AWS Region."
          },
          {
            "letter": "B",
            "text": "Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone."
          },
          {
            "letter": "C",
            "text": "Launch the instances in multiple AWS Regions but in the same Availability Zone."
          },
          {
            "letter": "D",
            "text": "Launch the instances as EC2 Spot Instances in the same AWS Region but in different Availability Zones."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Launch the instances across multiple Availability Zones in a single AWS Region.."
      },
      {
        "id": "9_5",
        "text": "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
        "options": [
          {
            "letter": "A",
            "text": "A public and private key-pair."
          },
          {
            "letter": "B",
            "text": "Amazon Inspector."
          },
          {
            "letter": "C",
            "text": "AWS Identity and Access Management (IAM) policies."
          },
          {
            "letter": "D",
            "text": "Security Groups."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Identity and Access Management (IAM) policies.."
      },
      {
        "id": "9_6",
        "text": "Which AWS service allows companies to connect an Amazon VPC to an on-premises data center? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS VPN."
          },
          {
            "letter": "B",
            "text": "Amazon Redshift."
          },
          {
            "letter": "C",
            "text": "API Gateway."
          },
          {
            "letter": "D",
            "text": "Amazon Direct Connect."
          }
        ],
        "correctAnswers": [
          "A",
          "D"
        ],
        "explanation": "La réponse correcte est les options A. AWS VPN., D. Amazon Direct Connect.."
      },
      {
        "id": "9_7",
        "text": "Which AWS service or feature can be used to monitor CPU usage?",
        "options": [
          {
            "letter": "A",
            "text": "AWS CloudTrail."
          },
          {
            "letter": "B",
            "text": "VPC Flow Logs."
          },
          {
            "letter": "C",
            "text": "Amazon CloudWatch."
          },
          {
            "letter": "D",
            "text": "AWS Config."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Amazon CloudWatch.."
      },
      {
        "id": "9_8",
        "text": "Which task is AWS responsible for in the shared responsibility model for security and compliance?",
        "options": [
          {
            "letter": "A",
            "text": "Granting access to individuals and services."
          },
          {
            "letter": "B",
            "text": "Encrypting data in transit."
          },
          {
            "letter": "C",
            "text": "Updating Amazon EC2 host firmware."
          },
          {
            "letter": "D",
            "text": "Updating operating systems."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Updating Amazon EC2 host firmware.."
      },
      {
        "id": "9_9",
        "text": "Which of the following security-related actions are available at no cost?",
        "options": [
          {
            "letter": "A",
            "text": "Calling AWS Support."
          },
          {
            "letter": "B",
            "text": "Contacting AWS Professional Services to request a workshop."
          },
          {
            "letter": "C",
            "text": "Accessing forums, blogs, and whitepapers."
          },
          {
            "letter": "D",
            "text": "Attending AWS classes at a local university."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Accessing forums, blogs, and whitepapers.."
      },
      {
        "id": "9_10",
        "text": "Which storage service can be used as a low-cost option for hosting static websites?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Glacier."
          },
          {
            "letter": "B",
            "text": "Amazon DynamoDB."
          },
          {
            "letter": "C",
            "text": "Amazon Elastic File System (Amazon EFS)."
          },
          {
            "letter": "D",
            "text": "Amazon Simple Storage Service (Amazon S3)."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Amazon Simple Storage Service (Amazon S3).."
      },
      {
        "id": "9_11",
        "text": "According to the AWS shared responsibility model what is the sole responsibility of AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Application security."
          },
          {
            "letter": "B",
            "text": "Edge location management."
          },
          {
            "letter": "C",
            "text": "Patch management."
          },
          {
            "letter": "D",
            "text": "Client-side data."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Edge location management.."
      },
      {
        "id": "9_12",
        "text": "Which of the following are pillars of the AWS Well-Architected Framework? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Multiple Availability Zones."
          },
          {
            "letter": "B",
            "text": "Performance efficiency."
          },
          {
            "letter": "C",
            "text": "Security."
          },
          {
            "letter": "D",
            "text": "Encryption usage."
          }
        ],
        "correctAnswers": [
          "B",
          "C"
        ],
        "explanation": "La réponse correcte est les options B. Performance efficiency., C. Security.."
      },
      {
        "id": "9_13",
        "text": "Which AWS service identifies security groups that allow unrestricted access to a user’s AWS resources?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Trusted Advisor."
          },
          {
            "letter": "B",
            "text": "Amazon Inspector."
          },
          {
            "letter": "C",
            "text": "Amazon CloudWatch."
          },
          {
            "letter": "D",
            "text": "AWS CloudTrail."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Trusted Advisor.."
      },
      {
        "id": "9_14",
        "text": "Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Use manual monitoring."
          },
          {
            "letter": "B",
            "text": "Use fixed servers."
          },
          {
            "letter": "C",
            "text": "Implement loose coupling."
          },
          {
            "letter": "D",
            "text": "Rely on individual components."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Implement loose coupling.."
      },
      {
        "id": "9_15",
        "text": "When architecting cloud applications, which of the following are a key design principle?",
        "options": [
          {
            "letter": "A",
            "text": "Use the largest instance possible."
          },
          {
            "letter": "B",
            "text": "Provision capacity for peak load."
          },
          {
            "letter": "C",
            "text": "Use the Scrum development process."
          },
          {
            "letter": "D",
            "text": "Implement elasticity."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Implement elasticity.."
      },
      {
        "id": "9_16",
        "text": "A company has deployed several relational databases on Amazon EC2 instances. Every month the database software vendor releases new security patches that need to be applied to the databases. What is the MOST efficient way to apply the security patches?",
        "options": [
          {
            "letter": "A",
            "text": "Connect to each database instance on a monthly basis and download and apply the necessary security patches from the vendor."
          },
          {
            "letter": "B",
            "text": "Enable automate patching for the instances using the Amazon RDS console."
          },
          {
            "letter": "C",
            "text": "In AWS Config. configure a rule for the instances and the required patch level."
          },
          {
            "letter": "D",
            "text": "Use AWS Systems Manager to automate database patching according to a schedule."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Use AWS Systems Manager to automate database patching according to a schedule.."
      },
      {
        "id": "9_17",
        "text": "Which mechanism allows developers to access AWS services from application code?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Software Development Kit."
          },
          {
            "letter": "B",
            "text": "AWS Management Console."
          },
          {
            "letter": "C",
            "text": "AWS CodePipeline."
          },
          {
            "letter": "D",
            "text": "AWS Config."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Software Development Kit.."
      },
      {
        "id": "9_18",
        "text": "Which AWS feature will reduce the customer’s total cost of ownership (TCO)?",
        "options": [
          {
            "letter": "A",
            "text": "Shared responsibility security model."
          },
          {
            "letter": "B",
            "text": "Single tenancy."
          },
          {
            "letter": "C",
            "text": "Elastic computing."
          },
          {
            "letter": "D",
            "text": "Encryption."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Elastic computing.."
      },
      {
        "id": "9_19",
        "text": "Which of the following is a benefit of using the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "Permissive security removes the administrative burden."
          },
          {
            "letter": "B",
            "text": "Ability to focus on revenue-generating activities."
          },
          {
            "letter": "C",
            "text": "Control over cloud network hardware."
          },
          {
            "letter": "D",
            "text": "Choice of specific cloud hardware vendors."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Ability to focus on revenue-generating activities.."
      },
      {
        "id": "9_20",
        "text": "Which of the following are categories of AWS Trusted Advisor? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Fault Tolerance."
          },
          {
            "letter": "B",
            "text": "Instance Usage."
          },
          {
            "letter": "C",
            "text": "Infrastructure."
          },
          {
            "letter": "D",
            "text": "Performance."
          }
        ],
        "correctAnswers": [
          "A",
          "D"
        ],
        "explanation": "La réponse correcte est les options A. Fault Tolerance., D. Performance.."
      },
      {
        "id": "9_21",
        "text": "What is Amazon CloudWatch?",
        "options": [
          {
            "letter": "A",
            "text": "A code repository with customizable build and team commit features."
          },
          {
            "letter": "B",
            "text": "A metrics repository with customizable notification thresholds and channels."
          },
          {
            "letter": "C",
            "text": "A security configuration repository with threat analytics."
          },
          {
            "letter": "D",
            "text": "A rule repository of a web application firewall with automated vulnerability prevention features."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. A metrics repository with customizable notification thresholds and channels.."
      },
      {
        "id": "9_22",
        "text": "Under the AWS shared responsibility model, which of the following activities are the customer’s responsibility? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Patching operating system components for Amazon Relational Database Server (Amazon RDS)."
          },
          {
            "letter": "B",
            "text": "Encrypting data on the client-side."
          },
          {
            "letter": "C",
            "text": "Training the data center staff."
          },
          {
            "letter": "D",
            "text": "Configuring Network Access Control Lists (ACL)."
          }
        ],
        "correctAnswers": [
          "B",
          "D"
        ],
        "explanation": "La réponse correcte est les options B. Encrypting data on the client-side., D. Configuring Network Access Control Lists (ACL).."
      },
      {
        "id": "9_23",
        "text": "Under the shared responsibility model, which of the following is a shared control between a customer and AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Physical controls."
          },
          {
            "letter": "B",
            "text": "Patch management."
          },
          {
            "letter": "C",
            "text": "Zone security."
          },
          {
            "letter": "D",
            "text": "Data center auditing."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Patch management.."
      },
      {
        "id": "9_24",
        "text": "Which AWS service is used to pay AWS bills, and monitor usage and budget costs?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Billing and Cost Management."
          },
          {
            "letter": "B",
            "text": "Consolidated billing."
          },
          {
            "letter": "C",
            "text": "Amazon CloudWatch."
          },
          {
            "letter": "D",
            "text": "Amazon QuickSight."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Billing and Cost Management.."
      },
      {
        "id": "9_25",
        "text": "How do customers benefit from Amazon’s massive economies of scale?",
        "options": [
          {
            "letter": "A",
            "text": "Periodic price reductions as the result of Amazon’s operational efficiencies."
          },
          {
            "letter": "B",
            "text": "New Amazon EC2 instance types providing the latest hardware."
          },
          {
            "letter": "C",
            "text": "The ability to scale up and down when needed."
          },
          {
            "letter": "D",
            "text": "Increased reliability in the underlying hardware of Amazon EC2 instances."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Periodic price reductions as the result of Amazon’s operational efficiencies.."
      },
      {
        "id": "9_26",
        "text": "Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?",
        "options": [
          {
            "letter": "A",
            "text": "Service control policies (SCPs)."
          },
          {
            "letter": "B",
            "text": "Consolidated billing."
          },
          {
            "letter": "C",
            "text": "All Upfront Reserved Instances."
          },
          {
            "letter": "D",
            "text": "AWS Cost Explorer."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Consolidated billing.."
      },
      {
        "id": "9_27",
        "text": "Which AWS services provide a way to extend an on-premises architecture to the aws cloud? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EBS."
          },
          {
            "letter": "B",
            "text": "Amazon Connect."
          },
          {
            "letter": "C",
            "text": "AWS Storage Gateway."
          },
          {
            "letter": "D",
            "text": "Amazon CloudFront."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Storage Gateway.."
      },
      {
        "id": "9_28",
        "text": "Which of the following services will automatically scale with an expected increase in web traffic?",
        "options": [
          {
            "letter": "A",
            "text": "AWS CodePipeline."
          },
          {
            "letter": "B",
            "text": "Elastic Load Balancing."
          },
          {
            "letter": "C",
            "text": "Amazon EBS."
          },
          {
            "letter": "D",
            "text": "AWS Direct Connect."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Elastic Load Balancing.."
      },
      {
        "id": "9_29",
        "text": "Which service provides a virtually unlimited amount of online highly durable object storage?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Redshift."
          },
          {
            "letter": "B",
            "text": "Amazon Elastic File System (Amazon EFS)."
          },
          {
            "letter": "C",
            "text": "Amazon Elastic Container Service (Amazon ECS)."
          },
          {
            "letter": "D",
            "text": "Amazon S3."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Amazon S3.."
      },
      {
        "id": "9_30",
        "text": "Which AWS feature should a customer leverage to achieve high availability of an application?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Direct Connect."
          },
          {
            "letter": "B",
            "text": "Availability Zones."
          },
          {
            "letter": "C",
            "text": "Data centers."
          },
          {
            "letter": "D",
            "text": "Amazon Virtual Private Cloud (Amazon VPC)."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Availability Zones.."
      },
      {
        "id": "9_31",
        "text": "Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS WAF."
          },
          {
            "letter": "B",
            "text": "AWS Trusted Advisor."
          },
          {
            "letter": "C",
            "text": "AWS Direct Connect."
          },
          {
            "letter": "D",
            "text": "AWS Organizations."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS WAF.."
      },
      {
        "id": "9_32",
        "text": "Which of the following is a cloud architectural design principle?",
        "options": [
          {
            "letter": "A",
            "text": "Scale up not out."
          },
          {
            "letter": "B",
            "text": "Loosely couple components."
          },
          {
            "letter": "C",
            "text": "Build monolithic systems."
          },
          {
            "letter": "D",
            "text": "Use commercial database software."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Loosely couple components.."
      },
      {
        "id": "9_33",
        "text": "Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon CloudWatch."
          },
          {
            "letter": "B",
            "text": "AWS CloudTrail."
          },
          {
            "letter": "C",
            "text": "AWS Config."
          },
          {
            "letter": "D",
            "text": "AWS Health."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS CloudTrail.."
      },
      {
        "id": "9_34",
        "text": "Where can AWS compliance and certification reports be downloaded?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Artifact."
          },
          {
            "letter": "B",
            "text": "AWS Concierge."
          },
          {
            "letter": "C",
            "text": "AWS Certificate Manager."
          },
          {
            "letter": "D",
            "text": "AWS Trusted Advisor."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Artifact.."
      },
      {
        "id": "9_35",
        "text": "The financial benefits of using AWS are: (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Reduced Total Cost of Ownership (TCO)."
          },
          {
            "letter": "B",
            "text": "Increased capital expenditure (capex)."
          },
          {
            "letter": "C",
            "text": "Reduced operational expenditure ( opex )."
          },
          {
            "letter": "D",
            "text": "Deferred payment plans for startups."
          }
        ],
        "correctAnswers": [
          "A",
          "C"
        ],
        "explanation": "La réponse correcte est les options A. Reduced Total Cost of Ownership (TCO)., C. Reduced operational expenditure ( opex ).."
      },
      {
        "id": "9_36",
        "text": "Which AWS service can serve a static website?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon S3."
          },
          {
            "letter": "B",
            "text": "Amazon Route 53."
          },
          {
            "letter": "C",
            "text": "Amazon QuickSight."
          },
          {
            "letter": "D",
            "text": "AWS X-Ray."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon S3.."
      },
      {
        "id": "9_37",
        "text": "What are the benefits of using the AWS Cloud for companies with customers in many countries around the world (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Companies can deploy applications in multiple AWS Regions to reduce latency."
          },
          {
            "letter": "B",
            "text": "Amazon Translate automatically translates third-party website interfaces into multiple languages."
          },
          {
            "letter": "C",
            "text": "Amazon CloudFront has multiple edge locations around the world to reduce latency."
          },
          {
            "letter": "D",
            "text": "Amazon Comprehend allows users to build applications that can respond to user requests in many languages."
          }
        ],
        "correctAnswers": [
          "A",
          "C"
        ],
        "explanation": "La réponse correcte est les options A. Companies can deploy applications in multiple AWS Regions to reduce latency., C. Amazon CloudFront has multiple edge locations around the world to reduce latency.."
      },
      {
        "id": "9_38",
        "text": "Which of the following are main components of the AWS global infrastructure? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Resource groups."
          },
          {
            "letter": "B",
            "text": "Availability Zones."
          },
          {
            "letter": "C",
            "text": "Security groups."
          },
          {
            "letter": "D",
            "text": "Regions."
          }
        ],
        "correctAnswers": [
          "B",
          "D"
        ],
        "explanation": "La réponse correcte est les options B. Availability Zones., D. Regions.."
      },
      {
        "id": "9_39",
        "text": "What is the AWS customer responsible for according to the AWS shared responsibility model?",
        "options": [
          {
            "letter": "A",
            "text": "Physical access controls."
          },
          {
            "letter": "B",
            "text": "Data encryption."
          },
          {
            "letter": "C",
            "text": "Secure disposal of storage devices."
          },
          {
            "letter": "D",
            "text": "Environmental risk management."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Data encryption.."
      },
      {
        "id": "9_40",
        "text": "If each department within a company has its own AWS account, what is one way to enable consolidated billing?",
        "options": [
          {
            "letter": "A",
            "text": "Use AWS Budgets on each account to pay only to budget."
          },
          {
            "letter": "B",
            "text": "Contact AWS Support for a monthly bill."
          },
          {
            "letter": "C",
            "text": "Create an AWS Organization from the payer account and invite the other accounts to join."
          },
          {
            "letter": "D",
            "text": "Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Create an AWS Organization from the payer account and invite the other accounts to join.."
      },
      {
        "id": "9_41",
        "text": "What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?",
        "options": [
          {
            "letter": "A",
            "text": "Project management."
          },
          {
            "letter": "B",
            "text": "Antivirus software licensing."
          },
          {
            "letter": "C",
            "text": "Data center security."
          },
          {
            "letter": "D",
            "text": "Software development."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Data center security.."
      },
      {
        "id": "9_42",
        "text": "What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?",
        "options": [
          {
            "letter": "A",
            "text": "They require the customer to monitor and replace failing instances."
          },
          {
            "letter": "B",
            "text": "They have better performance than customer-managed services."
          },
          {
            "letter": "C",
            "text": "They simplify patching and updating underlying OSs."
          },
          {
            "letter": "D",
            "text": "They do not require the customer to optimize instance type or size selections."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - AWS Managed Services takes care of all of your patching and backup activities to help keep your resources current and secure. When updates or patches are released by OS vendors, AWS Managed Services applies them in a timely and consistent manner to minimize the impact on your business - Critical security patches are applied immediately, while others are applied based on the patch schedule you request. Backups of Stacks are automated using Amazon Elastic Block Store (EBS) and RDS snapshots, and can be restored in the event of a failure or outage, ensuring business continuity."
      },
      {
        "id": "9_43",
        "text": "Which services can be used across hybrid AWS Cloud architectures? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Route 53."
          },
          {
            "letter": "B",
            "text": "Virtual Private Gateway."
          },
          {
            "letter": "C",
            "text": "Classic Load Balancer."
          },
          {
            "letter": "D",
            "text": "Auto Scaling."
          }
        ],
        "correctAnswers": [
          "A",
          "B"
        ],
        "explanation": "La réponse correcte est les options A. Amazon Route 53., B. Virtual Private Gateway.."
      },
      {
        "id": "9_44",
        "text": "Which statement best describes Elastic Load Balancing?",
        "options": [
          {
            "letter": "A",
            "text": "It translates a domain name into an IP address using DNC."
          },
          {
            "letter": "B",
            "text": "It distributes incoming application traffic across one or more Amazon EC2 instances."
          },
          {
            "letter": "C",
            "text": "It collects metrics on connected Amazon EC2 instances."
          },
          {
            "letter": "D",
            "text": "It automatically adjusts the number of Amazon EC2 instances to support incoming traffic."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. It distributes incoming application traffic across one or more Amazon EC2 instances.."
      },
      {
        "id": "9_45",
        "text": "Which of the following is a fast and reliable NoSQL database service?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Redshift."
          },
          {
            "letter": "B",
            "text": "Amazon RDS."
          },
          {
            "letter": "C",
            "text": "Amazon DynamoDB."
          },
          {
            "letter": "D",
            "text": "Amazon S3."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Amazon DynamoDB.."
      },
      {
        "id": "9_46",
        "text": "Which AWS service would you use to obtain compliance reports and certificates?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Artifact."
          },
          {
            "letter": "B",
            "text": "AWS Lambda."
          },
          {
            "letter": "C",
            "text": "Amazon Inspector."
          },
          {
            "letter": "D",
            "text": "AWS Certificate Manager."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Artifact.."
      },
      {
        "id": "9_47",
        "text": "Which AWS services are defined as global instead of regional? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Route 53."
          },
          {
            "letter": "B",
            "text": "Amazon EC2."
          },
          {
            "letter": "C",
            "text": "Amazon S3."
          },
          {
            "letter": "D",
            "text": "Amazon CloudFront."
          }
        ],
        "correctAnswers": [
          "A",
          "D"
        ],
        "explanation": "La réponse correcte est les options A. Amazon Route 53., D. Amazon CloudFront.."
      },
      {
        "id": "9_48",
        "text": "How would an AWS customer easily apply common access controls to a large set of users?",
        "options": [
          {
            "letter": "A",
            "text": "Apply an IAM policy to an IAM group."
          },
          {
            "letter": "B",
            "text": "Apply an IAM policy to an IAM role."
          },
          {
            "letter": "C",
            "text": "Apply the same IAM policy to all IAM users with access to the same workload."
          },
          {
            "letter": "D",
            "text": "Apply an IAM policy to an Amazon Cognito user pool."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Apply an IAM policy to an IAM group.."
      },
      {
        "id": "9_49",
        "text": "Which of the following is an important architectural design principle when designing cloud applications?",
        "options": [
          {
            "letter": "A",
            "text": "Use multiple Availability Zones."
          },
          {
            "letter": "B",
            "text": "Use tightly coupled components."
          },
          {
            "letter": "C",
            "text": "Use open source software."
          },
          {
            "letter": "D",
            "text": "Provision extra capacity."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Use multiple Availability Zones.."
      },
      {
        "id": "9_50",
        "text": "Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Server Migration Service."
          },
          {
            "letter": "B",
            "text": "AWS Organizations."
          },
          {
            "letter": "C",
            "text": "AWS Budgets."
          },
          {
            "letter": "D",
            "text": "AWS Trusted Advisor."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Organizations.."
      }
    ]
  },
  {
    "id": 10,
    "name": "Examen Pratique 10",
    "description": "Examen Pratique 10 - 50 questions",
    "questionCount": 50,
    "duration": 90,
    "questions": [
      {
        "id": "10_1",
        "text": "Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Concierge."
          },
          {
            "letter": "B",
            "text": "AWS CloudFormation."
          },
          {
            "letter": "C",
            "text": "Amazon Simple Storage Service (Amazon S3)."
          },
          {
            "letter": "D",
            "text": "Amazon EC2 Auto Scaling."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS CloudFormation.."
      },
      {
        "id": "10_2",
        "text": "Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?",
        "options": [
          {
            "letter": "A",
            "text": "One-year, No Upfront, Standard RI pricing."
          },
          {
            "letter": "B",
            "text": "One-year, All Upfront, Convertible RI pricing."
          },
          {
            "letter": "C",
            "text": "Three-year, All Upfront, Standard RI pricing."
          },
          {
            "letter": "D",
            "text": "Three-year, No Upfront, Convertible RI pricing."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Three-year, All Upfront, Standard RI pricing.."
      },
      {
        "id": "10_3",
        "text": "Which of the following are features of Amazon CloudWatch Logs? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Summaries by Amazon Simple Notification Service (Amazon SNS)."
          },
          {
            "letter": "B",
            "text": "Free Amazon Elasticsearch Service analytics."
          },
          {
            "letter": "C",
            "text": "Provided at no charge."
          },
          {
            "letter": "D",
            "text": "Real-time monitoring."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Real-time monitoring.."
      },
      {
        "id": "10_4",
        "text": "Which of the following is an AWS-managed compute service?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon SWF."
          },
          {
            "letter": "B",
            "text": "Amazon EC2."
          },
          {
            "letter": "C",
            "text": "AWS Lambda."
          },
          {
            "letter": "D",
            "text": "Amazon Aurora."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Lambda.."
      },
      {
        "id": "10_5",
        "text": "A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Elastic Compute Cloud (Amazon EC2)."
          },
          {
            "letter": "B",
            "text": "AWS Lambda."
          },
          {
            "letter": "C",
            "text": "Amazon DynamoDB."
          },
          {
            "letter": "D",
            "text": "AWS CodeCommit."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Lambda.."
      },
      {
        "id": "10_6",
        "text": "Which of the following is the customer’s responsibility under the AWS shared responsibility model?",
        "options": [
          {
            "letter": "A",
            "text": "Patching underlying infrastructure"
          },
          {
            "letter": "B",
            "text": "Physical security"
          },
          {
            "letter": "C",
            "text": "Patching Amazon EC2 instances"
          },
          {
            "letter": "D",
            "text": "Patching network infrastructure"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Patching Amazon EC2 instances."
      },
      {
        "id": "10_7",
        "text": "According to the AWS shared responsibility model who is responsible for configuration management?",
        "options": [
          {
            "letter": "A",
            "text": "It is solely the responsibility of the customer."
          },
          {
            "letter": "B",
            "text": "It is solely the responsibility of AWS."
          },
          {
            "letter": "C",
            "text": "It is shared between AWS and the customer."
          },
          {
            "letter": "D",
            "text": "It is not part of the AWS shared responsibility model."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. It is shared between AWS and the customer.."
      },
      {
        "id": "10_8",
        "text": "Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon GuardDuty."
          },
          {
            "letter": "B",
            "text": "Amazon Macie."
          },
          {
            "letter": "C",
            "text": "Amazon Inspector."
          },
          {
            "letter": "D",
            "text": "AWS Shield."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Amazon Macie.."
      },
      {
        "id": "10_9",
        "text": "Which of the following BEST describe the AWS pricing model? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Fixed-term."
          },
          {
            "letter": "B",
            "text": "Pay-as-you-go."
          },
          {
            "letter": "C",
            "text": "Colocation."
          },
          {
            "letter": "D",
            "text": "Planned."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Pay-as-you-go.."
      },
      {
        "id": "10_10",
        "text": "Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Ensuring that application data is encrypted at rest."
          },
          {
            "letter": "B",
            "text": "Ensuring that AWS NTP servers are set to the correct time."
          },
          {
            "letter": "C",
            "text": "Ensuring that users have received security training in the use of AWS services."
          },
          {
            "letter": "D",
            "text": "Ensuring that access to data centers is restricted."
          }
        ],
        "correctAnswers": [
          "A",
          "C"
        ],
        "explanation": "La réponse correcte est les options A. Ensuring that application data is encrypted at rest., C. Ensuring that users have received security training in the use of AWS services.."
      },
      {
        "id": "10_11",
        "text": "A customer is using multiple AWS accounts with separate billing. How can the customer take advantage of volume discounts with minimal impact to the AWS resources?",
        "options": [
          {
            "letter": "A",
            "text": "Create one global AWS account and move all AWS resources to that account."
          },
          {
            "letter": "B",
            "text": "Sign up for three years of Reserved Instance pricing up front."
          },
          {
            "letter": "C",
            "text": "Use the consolidated billing feature from AWS Organizations."
          },
          {
            "letter": "D",
            "text": "Sign up for the AWS Enterprise support plan to get volume discounts."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Use the consolidated billing feature from AWS Organizations.."
      },
      {
        "id": "10_12",
        "text": "Which Amazon EC2 pricing model offers the MOST significant discount when compared to OnDemand Instances?",
        "options": [
          {
            "letter": "A",
            "text": "A Partial Upfront Reserved Instances for a 1-year term."
          },
          {
            "letter": "B",
            "text": "All Upfront Reserved instances for a 1 year form."
          },
          {
            "letter": "C",
            "text": "All Upfront Reserved Instances for a 3 year term."
          },
          {
            "letter": "D",
            "text": "No Upfront Reserved Instances for a 3 year term."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. All Upfront Reserved Instances for a 3 year term.."
      },
      {
        "id": "10_13",
        "text": "Which AWS services should be used for read/write of constantly changing data? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Glacier."
          },
          {
            "letter": "B",
            "text": "Amazon RDS."
          },
          {
            "letter": "C",
            "text": "AWS Snowball."
          },
          {
            "letter": "D",
            "text": "Amazon Redshift."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Amazon RDS.."
      },
      {
        "id": "10_14",
        "text": "Which AWS service allows users to identify the changes made to a resource over time?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Inspector."
          },
          {
            "letter": "B",
            "text": "AWS Config."
          },
          {
            "letter": "C",
            "text": "AWS Service Catalog."
          },
          {
            "letter": "D",
            "text": "AWS IAM."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Config.."
      },
      {
        "id": "10_15",
        "text": "According to best practices, how should an application be designed to run in the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "Use tightly coupled components."
          },
          {
            "letter": "B",
            "text": "Use loosely coupled components."
          },
          {
            "letter": "C",
            "text": "Use infrequently coupled components."
          },
          {
            "letter": "D",
            "text": "Use frequently coupled components."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Use loosely coupled components.."
      },
      {
        "id": "10_16",
        "text": "Which benefits are included with the AWS Business Support plan? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "24/7 assistance by way of live chat or a telephone call."
          },
          {
            "letter": "B",
            "text": "Support from a dedicated AWS Technical Account Manager."
          },
          {
            "letter": "C",
            "text": "An unlimited number of cases and contacts."
          },
          {
            "letter": "D",
            "text": "15-minute response time for production system interruption cases."
          }
        ],
        "correctAnswers": [
          "A",
          "C"
        ],
        "explanation": "La réponse correcte est les options A. 24/7 assistance by way of live chat or a telephone call., C. An unlimited number of cases and contacts.."
      },
      {
        "id": "10_17",
        "text": "Which of the following is an AWS managed Domain Name System (DNS) web service?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Route 53."
          },
          {
            "letter": "B",
            "text": "Amazon Neptune."
          },
          {
            "letter": "C",
            "text": "Amazon SageMaker."
          },
          {
            "letter": "D",
            "text": "Amazon Lightsail."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon Route 53.."
      },
      {
        "id": "10_18",
        "text": "A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. When Amazon EC2 instance pricing option will meet these requirements?",
        "options": [
          {
            "letter": "A",
            "text": "Dedicated Hosts."
          },
          {
            "letter": "B",
            "text": "Dedicated Instances."
          },
          {
            "letter": "C",
            "text": "Spot Instances."
          },
          {
            "letter": "D",
            "text": "Reserved Instances."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Dedicated Hosts.."
      },
      {
        "id": "10_19",
        "text": "Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?",
        "options": [
          {
            "letter": "A",
            "text": "Dedicated RIs."
          },
          {
            "letter": "B",
            "text": "Scheduled RIs."
          },
          {
            "letter": "C",
            "text": "Convertible RIs."
          },
          {
            "letter": "D",
            "text": "Standard RIs."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Convertible RIs.."
      },
      {
        "id": "10_20",
        "text": "Which service is best for storing common database query results, which helps to alleviate database access load?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Machine Learning."
          },
          {
            "letter": "B",
            "text": "Amazon SQS."
          },
          {
            "letter": "C",
            "text": "Amazon ElastiCache."
          },
          {
            "letter": "D",
            "text": "Amazon EC2 Instance Store."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Amazon ElastiCache.."
      },
      {
        "id": "10_21",
        "text": "When should a company consider using Amazon EC2 Spot Instances? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "For non-production applications."
          },
          {
            "letter": "B",
            "text": "For stateful workloads."
          },
          {
            "letter": "C",
            "text": "For applications that cannot have interruptions."
          },
          {
            "letter": "D",
            "text": "For fault-tolerant flexible applications."
          }
        ],
        "correctAnswers": [
          "A",
          "D"
        ],
        "explanation": "La réponse correcte est les options A. For non-production applications., D. For fault-tolerant flexible applications.."
      },
      {
        "id": "10_22",
        "text": "Which AWS tools assist with estimating costs? (Select three)",
        "options": [
          {
            "letter": "A",
            "text": "Detailed billing report."
          },
          {
            "letter": "B",
            "text": "Cost allocation tags."
          },
          {
            "letter": "C",
            "text": "AWS Simple Monthly Calculator."
          },
          {
            "letter": "D",
            "text": "AWS Total Cost of Ownership (TCO) Calculator."
          }
        ],
        "correctAnswers": [
          "B",
          "C",
          "D"
        ],
        "explanation": "La réponse correcte est les options B. Cost allocation tags., C. AWS Simple Monthly Calculator., D. AWS Total Cost of Ownership (TCO) Calculator.."
      },
      {
        "id": "10_23",
        "text": "A company wants to focus on business activities instead of managing compute and capacity. Which AWS service can be used to automatically add or remove Amazon EC2 instances based on demand?",
        "options": [
          {
            "letter": "A",
            "text": "Elastic Load Balancer."
          },
          {
            "letter": "B",
            "text": "Amazon EC2 Auto Scaling."
          },
          {
            "letter": "C",
            "text": "Amazon Route 53."
          },
          {
            "letter": "D",
            "text": "Amazon CloudFront."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Amazon EC2 Auto Scaling.."
      },
      {
        "id": "10_24",
        "text": "Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?",
        "options": [
          {
            "letter": "A",
            "text": "Enterprise."
          },
          {
            "letter": "B",
            "text": "Business."
          },
          {
            "letter": "C",
            "text": "Developer."
          },
          {
            "letter": "D",
            "text": "Basic."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Enterprise.."
      },
      {
        "id": "10_25",
        "text": "Access keys in AWS Identity and Access Management (IM1) are used to:",
        "options": [
          {
            "letter": "A",
            "text": "Log in to the AWS Management Console."
          },
          {
            "letter": "B",
            "text": "Make programmatic calls to AWS from AWS APIs."
          },
          {
            "letter": "C",
            "text": "Log in to Amazon EC2 instances."
          },
          {
            "letter": "D",
            "text": "Authenticate to AWS CodeCommit repositories."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Make programmatic calls to AWS from AWS APIs.."
      },
      {
        "id": "10_26",
        "text": "Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Glue."
          },
          {
            "letter": "B",
            "text": "AWS Data Pipeline."
          },
          {
            "letter": "C",
            "text": "Amazon CloudSearch."
          },
          {
            "letter": "D",
            "text": "Amazon Athena."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Amazon Athena.."
      },
      {
        "id": "10_27",
        "text": "How does AWS shorten the time to provision IT resources?",
        "options": [
          {
            "letter": "A",
            "text": "It supplies an online IT ticketing platform for resource requests."
          },
          {
            "letter": "B",
            "text": "It supports automatic code validation services."
          },
          {
            "letter": "C",
            "text": "It provides the ability to programmatically provision existing resources."
          },
          {
            "letter": "D",
            "text": "It automates the resource request process from a company’s IT vendor list."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. It provides the ability to programmatically provision existing resources.."
      },
      {
        "id": "10_28",
        "text": "Which AWS services can be used to gather information about AWS account activity? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon CloudFront."
          },
          {
            "letter": "B",
            "text": "AWS Cloud9."
          },
          {
            "letter": "C",
            "text": "AWS CloudTrail."
          },
          {
            "letter": "D",
            "text": "AWS CloudHSM."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS CloudTrail.."
      },
      {
        "id": "10_29",
        "text": "Which of the following are characteristics of Amazon S3? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "A global file system."
          },
          {
            "letter": "B",
            "text": "An object store."
          },
          {
            "letter": "C",
            "text": "A local file store."
          },
          {
            "letter": "D",
            "text": "A network file system."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. An object store.."
      },
      {
        "id": "10_30",
        "text": "A user wants guidance on possible savings when migrating from on-premises to AWS. Which tool is suitable for this scenario?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Budgets."
          },
          {
            "letter": "B",
            "text": "Cost Explorer."
          },
          {
            "letter": "C",
            "text": "AWS Total Cost of Ownership (TCO) Calculator."
          },
          {
            "letter": "D",
            "text": "AWS Well-Architected Tool."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Total Cost of Ownership (TCO) Calculator.."
      },
      {
        "id": "10_31",
        "text": "Which of the following services is in the category of AWS serverless platform?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EMR."
          },
          {
            "letter": "B",
            "text": "Elastic Load Balancing."
          },
          {
            "letter": "C",
            "text": "AWS Lambda."
          },
          {
            "letter": "D",
            "text": "AWS Mobile Hub."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Lambda.."
      },
      {
        "id": "10_32",
        "text": "The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?",
        "options": [
          {
            "letter": "A",
            "text": "Cost allocation tags."
          },
          {
            "letter": "B",
            "text": "Consolidated billing."
          },
          {
            "letter": "C",
            "text": "AWS Budgets."
          },
          {
            "letter": "D",
            "text": "AWS Marketplace."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Cost allocation tags.."
      },
      {
        "id": "10_33",
        "text": "Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Cost Explorer."
          },
          {
            "letter": "B",
            "text": "AWS Trusted Advisor."
          },
          {
            "letter": "C",
            "text": "Consolidated billing."
          },
          {
            "letter": "D",
            "text": "Detailed billing."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Trusted Advisor.."
      },
      {
        "id": "10_34",
        "text": "Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?",
        "options": [
          {
            "letter": "A",
            "text": "Cloud-native."
          },
          {
            "letter": "B",
            "text": "Partner network."
          },
          {
            "letter": "C",
            "text": "Hybrid architecture."
          },
          {
            "letter": "D",
            "text": "Infrastructure as a service."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Hybrid architecture.."
      },
      {
        "id": "10_35",
        "text": "What technology enables compute capacity to adjust as loads change?",
        "options": [
          {
            "letter": "A",
            "text": "Load balancing."
          },
          {
            "letter": "B",
            "text": "Automatic failover."
          },
          {
            "letter": "C",
            "text": "Round robin."
          },
          {
            "letter": "D",
            "text": "Auto Scaling."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Auto Scaling.."
      },
      {
        "id": "10_36",
        "text": "Which AWS service is a managed NoSQL database?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Redshift."
          },
          {
            "letter": "B",
            "text": "Amazon DynamoDB."
          },
          {
            "letter": "C",
            "text": "Amazon Aurora."
          },
          {
            "letter": "D",
            "text": "Amazon RDS for ManaDB."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Amazon DynamoDB.."
      },
      {
        "id": "10_37",
        "text": "Which of the following is a correct relationship between regions, Availability Zones, and edge locations?",
        "options": [
          {
            "letter": "A",
            "text": "Data centers contain regions."
          },
          {
            "letter": "B",
            "text": "Regions contain Availability Zones."
          },
          {
            "letter": "C",
            "text": "Availability Zones contain edge locations."
          },
          {
            "letter": "D",
            "text": "Edge locations contain regions."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Regions contain Availability Zones.."
      },
      {
        "id": "10_38",
        "text": "What approach to transcoding a large number of individual video files adheres to AWS architecture principles?",
        "options": [
          {
            "letter": "A",
            "text": "Using many instances in parallel."
          },
          {
            "letter": "B",
            "text": "Using a single large instance during off-peak hours."
          },
          {
            "letter": "C",
            "text": "Using dedicated hardware."
          },
          {
            "letter": "D",
            "text": "Using a large GPU instance type."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Using many instances in parallel.."
      },
      {
        "id": "10_39",
        "text": "Which AWS services can host a Microsoft SQL Server database? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EC2."
          },
          {
            "letter": "B",
            "text": "Amazon Relational Database Service (Amazon RDS)."
          },
          {
            "letter": "C",
            "text": "Amazon Aurora."
          },
          {
            "letter": "D",
            "text": "Amazon Redshift."
          }
        ],
        "correctAnswers": [
          "A",
          "B"
        ],
        "explanation": "La réponse correcte est les options A. Amazon EC2., B. Amazon Relational Database Service (Amazon RDS).."
      },
      {
        "id": "10_40",
        "text": "Which AWS IAM feature allows developers to access AWS services through the AWS CLI?",
        "options": [
          {
            "letter": "A",
            "text": "API keys."
          },
          {
            "letter": "B",
            "text": "Access keys."
          },
          {
            "letter": "C",
            "text": "User names/Passwords."
          },
          {
            "letter": "D",
            "text": "SSH keys."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Access keys.."
      },
      {
        "id": "10_41",
        "text": "The user is fully responsible for which action when running workloads on AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Patching the infrastructure components."
          },
          {
            "letter": "B",
            "text": "Maintaining the underlying infrastructure components."
          },
          {
            "letter": "C",
            "text": "Maintaining physical and environmental controls."
          },
          {
            "letter": "D",
            "text": "Implementing controls to route application traffic."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Implementing controls to route application traffic.."
      },
      {
        "id": "10_42",
        "text": "Which AWS support plan includes a dedicated Technical Account Manager?",
        "options": [
          {
            "letter": "A",
            "text": "Developer."
          },
          {
            "letter": "B",
            "text": "Enterprise."
          },
          {
            "letter": "C",
            "text": "Business."
          },
          {
            "letter": "D",
            "text": "Basic."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Enterprise.."
      },
      {
        "id": "10_43",
        "text": "What time-savings advantage is offered with the use of Amazon Rekognition?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Rekognition provides automatic watermarking of images."
          },
          {
            "letter": "B",
            "text": "Amazon Rekognition provides automatic detection of objects appearing in pictures."
          },
          {
            "letter": "C",
            "text": "Amazon Recognition provides the ability to resize millions of images automatically."
          },
          {
            "letter": "D",
            "text": "Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Amazon Rekognition provides automatic detection of objects appearing in pictures.."
      },
      {
        "id": "10_44",
        "text": "Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon AutoScaling."
          },
          {
            "letter": "B",
            "text": "Amazon Redshift."
          },
          {
            "letter": "C",
            "text": "AWS CloudTrail."
          },
          {
            "letter": "D",
            "text": "AWS Lambda."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon AutoScaling.."
      },
      {
        "id": "10_45",
        "text": "Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?",
        "options": [
          {
            "letter": "A",
            "text": "AWS manages the data stored in Amazon RDS tables."
          },
          {
            "letter": "B",
            "text": "AWS manages the maintenance of the operating system."
          },
          {
            "letter": "C",
            "text": "AWS automatically scales up instance types on demand."
          },
          {
            "letter": "D",
            "text": "AWS manages the database type."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS manages the maintenance of the operating system.."
      },
      {
        "id": "10_46",
        "text": "A company’s web application currently has light dependencies on underlying components so when one component fails the entire web application fails. Applying which AWS Cloud design principle will address the current design issue?",
        "options": [
          {
            "letter": "A",
            "text": "Implementing elasticity enabling the application to scale up or scale down as demand changes."
          },
          {
            "letter": "B",
            "text": "Enabling several EC2 instances to run in parallel to achieve better performance."
          },
          {
            "letter": "C",
            "text": "Focusing on decoupling components by isolating them and ensuring individual components can function when other components."
          },
          {
            "letter": "D",
            "text": "Doubling EC2 computing resources to increase system fault tolerance."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Focusing on decoupling components by isolating them and ensuring individual components can function when other components.."
      },
      {
        "id": "10_47",
        "text": "A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Partner Network Technology Partners."
          },
          {
            "letter": "B",
            "text": "AWS Marketplace."
          },
          {
            "letter": "C",
            "text": "AWS Partner Network Consulting Partners."
          },
          {
            "letter": "D",
            "text": "AWS Service Catalog."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Partner Network Consulting Partners.."
      },
      {
        "id": "10_48",
        "text": "Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Glacier."
          },
          {
            "letter": "B",
            "text": "AWS Storage Gateway."
          },
          {
            "letter": "C",
            "text": "Amazon S3."
          },
          {
            "letter": "D",
            "text": "Amazon EBS."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Amazon S3.."
      },
      {
        "id": "10_49",
        "text": "Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?",
        "options": [
          {
            "letter": "A",
            "text": "Implement automation."
          },
          {
            "letter": "B",
            "text": "Design for agility."
          },
          {
            "letter": "C",
            "text": "Design for failure."
          },
          {
            "letter": "D",
            "text": "Implement elasticity."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Design for failure.."
      },
      {
        "id": "10_50",
        "text": "Which service should a customer use to consolidate and centrally manage multiple AWS accounts?",
        "options": [
          {
            "letter": "A",
            "text": "AWS IAM."
          },
          {
            "letter": "B",
            "text": "AWS Organizations."
          },
          {
            "letter": "C",
            "text": "AWS Schema Conversion Tool."
          },
          {
            "letter": "D",
            "text": "AWS Config."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Organizations.."
      }
    ]
  },
  {
    "id": 11,
    "name": "Examen Pratique 11",
    "description": "Examen Pratique 11 - 50 questions",
    "questionCount": 50,
    "duration": 90,
    "questions": [
      {
        "id": "11_1",
        "text": "How can a company reduce its Total Cost of Ownership (TCO) using AWS?",
        "options": [
          {
            "letter": "A",
            "text": "By minimizing large capital expenditures."
          },
          {
            "letter": "B",
            "text": "By having no responsibility for third-party license costs."
          },
          {
            "letter": "C",
            "text": "By having no operational expenditures."
          },
          {
            "letter": "D",
            "text": "By having AWS manage applications."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. By minimizing large capital expenditures.."
      },
      {
        "id": "11_2",
        "text": "Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Trusted Advisor."
          },
          {
            "letter": "B",
            "text": "AWS Online Tech Talks."
          },
          {
            "letter": "C",
            "text": "AWS Blog."
          },
          {
            "letter": "D",
            "text": "AWS Forums."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Online Tech Talks.."
      },
      {
        "id": "11_3",
        "text": "Which of the following will enhance the security of access to the AWS Management Console’? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Secrets Manager."
          },
          {
            "letter": "B",
            "text": "AWS Certificate Manager."
          },
          {
            "letter": "C",
            "text": "AWS Multi-Factor Authentication (AWS MFA)."
          },
          {
            "letter": "D",
            "text": "Security groups."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Multi-Factor Authentication (AWS MFA).."
      },
      {
        "id": "11_4",
        "text": "Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon CloudFront distributions."
          },
          {
            "letter": "B",
            "text": "Amazon Route 53."
          },
          {
            "letter": "C",
            "text": "Security Groups."
          },
          {
            "letter": "D",
            "text": "Subnets."
          }
        ],
        "correctAnswers": [
          "C",
          "D"
        ],
        "explanation": "La réponse correcte est les options C. Security Groups., D. Subnets.."
      },
      {
        "id": "11_5",
        "text": "For which auditing process does AWS have sole responsibility?",
        "options": [
          {
            "letter": "A",
            "text": "AWS IAM policies."
          },
          {
            "letter": "B",
            "text": "Physical security."
          },
          {
            "letter": "C",
            "text": "Amazon S3 bucket policies."
          },
          {
            "letter": "D",
            "text": "AWS CloudTrail Logs."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Physical security.."
      },
      {
        "id": "11_6",
        "text": "Which of the following are advantages of AWS consolidated billing? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "The ability to receive one bill for multiple accounts."
          },
          {
            "letter": "B",
            "text": "Service limits increasing by default in all accounts."
          },
          {
            "letter": "C",
            "text": "A fixed discount on the monthly bill."
          },
          {
            "letter": "D",
            "text": "Potential volume discounts, as usage in all accounts is combined."
          }
        ],
        "correctAnswers": [
          "A",
          "D"
        ],
        "explanation": "La réponse correcte est les options A. The ability to receive one bill for multiple accounts., D. Potential volume discounts, as usage in all accounts is combined.."
      },
      {
        "id": "11_7",
        "text": "Which of the following common IT tasks can AWS cover to free up company IT resources? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Patching databases software."
          },
          {
            "letter": "B",
            "text": "Testing application releases."
          },
          {
            "letter": "C",
            "text": "Backing up databases."
          },
          {
            "letter": "D",
            "text": "Creating database schema."
          }
        ],
        "correctAnswers": [
          "A",
          "C"
        ],
        "explanation": "La réponse correcte est les options A. Patching databases software., C. Backing up databases.."
      },
      {
        "id": "11_8",
        "text": "A company wants to expand from one AWS Region into a second AWS Region. What does the company need to do to start supporting the new Region?",
        "options": [
          {
            "letter": "A",
            "text": "Contact an AWS Account Manager to sign a new contract."
          },
          {
            "letter": "B",
            "text": "Move an Availability Zone to the new Region."
          },
          {
            "letter": "C",
            "text": "Begin deploying resources in the second Region."
          },
          {
            "letter": "D",
            "text": "Download the AWS Management Console for the new Region."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Begin deploying resources in the second Region.."
      },
      {
        "id": "11_9",
        "text": "Why is it beneficial to use Elastic Load Balancers with applications?",
        "options": [
          {
            "letter": "A",
            "text": "They allow for the conversion from Application Load."
          },
          {
            "letter": "B",
            "text": "Balancers to Classic Load Balancers."
          },
          {
            "letter": "C",
            "text": "They are capable of handling constant changes in network traffic patterns."
          },
          {
            "letter": "D",
            "text": "They automatically adjust capacity. They are provided at no charge to users."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. They are capable of handling constant changes in network traffic patterns.."
      },
      {
        "id": "11_10",
        "text": "Which is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?",
        "options": [
          {
            "letter": "A",
            "text": "Enterprise."
          },
          {
            "letter": "B",
            "text": "Business."
          },
          {
            "letter": "C",
            "text": "Developer"
          },
          {
            "letter": "D",
            "text": "Basic"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Business.."
      },
      {
        "id": "11_11",
        "text": "What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon S3."
          },
          {
            "letter": "B",
            "text": "Amazon Glacier."
          },
          {
            "letter": "C",
            "text": "Amazon EBS."
          },
          {
            "letter": "D",
            "text": "Amazon EC2 Instance Store."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon S3.."
      },
      {
        "id": "11_12",
        "text": "What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice areas?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Enterprise Support."
          },
          {
            "letter": "B",
            "text": "AWS Solutions Architects."
          },
          {
            "letter": "C",
            "text": "AWS Professional Services."
          },
          {
            "letter": "D",
            "text": "AWS Account Managers."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Professional Services.."
      },
      {
        "id": "11_13",
        "text": "A company needs 24/7 phone email and chat access with a response time of less than 1 hour if a production system has a service interruption Which AWS Support plan meets these requirements at the LOWEST cost?",
        "options": [
          {
            "letter": "A",
            "text": "Basic."
          },
          {
            "letter": "B",
            "text": "Developer."
          },
          {
            "letter": "C",
            "text": "Business."
          },
          {
            "letter": "D",
            "text": "Enterprise."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Business.."
      },
      {
        "id": "11_14",
        "text": "If a customer needs to audit the change management of AWS resources, which of the following AWS services should the customer use?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Config."
          },
          {
            "letter": "B",
            "text": "AWS Trusted Advisor."
          },
          {
            "letter": "C",
            "text": "Amazon CloudWatch."
          },
          {
            "letter": "D",
            "text": "Amazon Inspector."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Config.."
      },
      {
        "id": "11_15",
        "text": "How does AWS Trusted Advisor provide guidance to users of the AWS Cloud? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "It identifies software vulnerabilities in applications running on AWS."
          },
          {
            "letter": "B",
            "text": "It provides a list of cost optimization recommendations based on current AWS usage."
          },
          {
            "letter": "C",
            "text": "It detects potential security vulnerabilities caused by permissions settings on account resources."
          },
          {
            "letter": "D",
            "text": "It automatically corrects potential security issues caused by permissions settings on account resources."
          }
        ],
        "correctAnswers": [
          "B",
          "C"
        ],
        "explanation": "La réponse correcte est les options B. It provides a list of cost optimization recommendations based on current AWS usage., C. It detects potential security vulnerabilities caused by permissions settings on account resources.."
      },
      {
        "id": "11_16",
        "text": "Which AWS managed service is used to host databases?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Batch."
          },
          {
            "letter": "B",
            "text": "AWS Artifact."
          },
          {
            "letter": "C",
            "text": "AWS Data Pipeline."
          },
          {
            "letter": "D",
            "text": "Amazon RDS."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Amazon RDS.."
      },
      {
        "id": "11_17",
        "text": "Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?",
        "options": [
          {
            "letter": "A",
            "text": "IAM group."
          },
          {
            "letter": "B",
            "text": "IAM user."
          },
          {
            "letter": "C",
            "text": "IAM role."
          },
          {
            "letter": "D",
            "text": "IAM policy."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. IAM user.."
      },
      {
        "id": "11_18",
        "text": "Under the shared responsibility model, which of the following is the customer responsible for?",
        "options": [
          {
            "letter": "A",
            "text": "Ensuring that disk drives are wiped after use."
          },
          {
            "letter": "B",
            "text": "Ensuring that firmware is updated on hardware devices."
          },
          {
            "letter": "C",
            "text": "Ensuring that data is encrypted at rest."
          },
          {
            "letter": "D",
            "text": "Ensuring that network cables are category six or higher."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Ensuring that data is encrypted at rest.."
      },
      {
        "id": "11_19",
        "text": "Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon S3."
          },
          {
            "letter": "B",
            "text": "Amazon Glacier."
          },
          {
            "letter": "C",
            "text": "Amazon EBS."
          },
          {
            "letter": "D",
            "text": "Amazon EFS."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Amazon EFS.."
      },
      {
        "id": "11_20",
        "text": "What credential components are required to gain programmatic access to an AWS account? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "An access key ID."
          },
          {
            "letter": "B",
            "text": "A primary key."
          },
          {
            "letter": "C",
            "text": "A secret access key."
          },
          {
            "letter": "D",
            "text": "A user ID."
          }
        ],
        "correctAnswers": [
          "A",
          "C"
        ],
        "explanation": "La réponse correcte est les options A. An access key ID., C. A secret access key.."
      },
      {
        "id": "11_21",
        "text": "Which of the following is a shared control between the customer and AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Providing a key for Amazon S3 client-side encryption."
          },
          {
            "letter": "B",
            "text": "Configuration of an Amazon EC2 instance."
          },
          {
            "letter": "C",
            "text": "Environmental controls of physical AWS data centers."
          },
          {
            "letter": "D",
            "text": "Awareness."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Awareness.."
      },
      {
        "id": "11_22",
        "text": "Which type of AWS storage is ephemeral and is deleted when an instance is stopped Of terminated?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EBS."
          },
          {
            "letter": "B",
            "text": "Amazon EC2 instance store."
          },
          {
            "letter": "C",
            "text": "Amazon EFS."
          },
          {
            "letter": "D",
            "text": "Amazon S3."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Amazon EC2 instance store.."
      },
      {
        "id": "11_23",
        "text": "Which of the following is an advantage of consolidated billing on AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Volume pricing qualification."
          },
          {
            "letter": "B",
            "text": "Shared access permissions."
          },
          {
            "letter": "C",
            "text": "Multiple bills per account."
          },
          {
            "letter": "D",
            "text": "Eliminates the need for tagging."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Volume pricing qualification.."
      },
      {
        "id": "11_24",
        "text": "Which services are parts of the AWS serverless platform?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EC2, Amazon S3, Amazon Athena."
          },
          {
            "letter": "B",
            "text": "Amazon Kinesis, Amazon SQS, Amazon EMR."
          },
          {
            "letter": "C",
            "text": "AWS Step Functions, Amazon DynamoDB, Amazon SNS."
          },
          {
            "letter": "D",
            "text": "Amazon Athena, Amazon Cognito, Amazon EC2."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Step Functions, Amazon DynamoDB, Amazon SNS.."
      },
      {
        "id": "11_25",
        "text": "Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software licenses?",
        "options": [
          {
            "letter": "A",
            "text": "Spot Instances."
          },
          {
            "letter": "B",
            "text": "Reserved Instances."
          },
          {
            "letter": "C",
            "text": "Dedicated Hosts."
          },
          {
            "letter": "D",
            "text": "On-Demand Instances."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Dedicated Hosts.."
      },
      {
        "id": "11_26",
        "text": "Which of the following security measures protect access to an AWS account? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Enable AWS CloudTrail."
          },
          {
            "letter": "B",
            "text": "Grant least privilege access to IAM users."
          },
          {
            "letter": "C",
            "text": "Create one IAM user and share with many developers and users."
          },
          {
            "letter": "D",
            "text": "Enable Amazon CloudFront."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Grant least privilege access to IAM users.."
      },
      {
        "id": "11_27",
        "text": "Which AWS service provides the ability to manage infrastructure as code?",
        "options": [
          {
            "letter": "A",
            "text": "AWS CodePipeline."
          },
          {
            "letter": "B",
            "text": "AWS CodeDeploy."
          },
          {
            "letter": "C",
            "text": "AWS Direct Connect."
          },
          {
            "letter": "D",
            "text": "AWS CloudFormation."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. AWS CloudFormation.."
      },
      {
        "id": "11_28",
        "text": "What is an advantage of deploying an application across multiple Availability Zones?",
        "options": [
          {
            "letter": "A",
            "text": "There is a lower risk of service failure if a natural disaster causes a service disruption in a given AWS Region."
          },
          {
            "letter": "B",
            "text": "The application will have higher availability because it can withstand a service disruption in one Availability Zone."
          },
          {
            "letter": "C",
            "text": "There will be better coverage as Availability Zones are geographical^ distant and can serve a wider area."
          },
          {
            "letter": "D",
            "text": "There will be decreased application latency that will improve the user experience."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. The application will have higher availability because it can withstand a service disruption in one Availability Zone.."
      },
      {
        "id": "11_29",
        "text": "A customer needs to run a MySQL database that easily scales. Which AWS service should they use?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Aurora."
          },
          {
            "letter": "B",
            "text": "Amazon Redshift."
          },
          {
            "letter": "C",
            "text": "Amazon DynamoDB."
          },
          {
            "letter": "D",
            "text": "Amazon ElastiCache."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon Aurora.."
      },
      {
        "id": "11_30",
        "text": "Which of the following is an AWS Cloud architecture design principle?",
        "options": [
          {
            "letter": "A",
            "text": "Implement single points of failure."
          },
          {
            "letter": "B",
            "text": "Implement loose coupling."
          },
          {
            "letter": "C",
            "text": "Implement monolithic design."
          },
          {
            "letter": "D",
            "text": "Implement vertical scaling."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Implement loose coupling.."
      },
      {
        "id": "11_31",
        "text": "AWS Enterprise Support users have access to which service or feature that is not available to users with other AWS Support plans?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Trusted Advisor."
          },
          {
            "letter": "B",
            "text": "AWS Support case."
          },
          {
            "letter": "C",
            "text": "Concierge team."
          },
          {
            "letter": "D",
            "text": "Amazon Connect."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Concierge team.."
      },
      {
        "id": "11_32",
        "text": "A company will be moving from an on-premises data center to the AWS Cloud. What would be one financial difference after the move?",
        "options": [
          {
            "letter": "A",
            "text": "Moving from variable operational expense ( opex ) to upfront capital expense (capex)."
          },
          {
            "letter": "B",
            "text": "Moving from upfront capital expense (capex) to variable capital expense (capex)."
          },
          {
            "letter": "C",
            "text": "Moving from upfront capital expense (capex) to variable operational expense ( opex )."
          },
          {
            "letter": "D",
            "text": "Elimination of upfront capital expense (capex) and elimination of variable operational expense ( opex )."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Moving from upfront capital expense (capex) to variable operational expense ( opex ).."
      },
      {
        "id": "11_33",
        "text": "When performing a cost analysis that supports physical isolation of a customer workload, which compute hosting model should be accounted for in the Total Cost of Ownership (TCO)?",
        "options": [
          {
            "letter": "A",
            "text": "Dedicated Hosts"
          },
          {
            "letter": "B",
            "text": "Reserved Instances"
          },
          {
            "letter": "C",
            "text": "On-Demand Instances"
          },
          {
            "letter": "D",
            "text": "No Upfront Reserved Instances"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Dedicated Hosts."
      },
      {
        "id": "11_34",
        "text": "Which AWS service should be used for long-term, low-cost storage of data backups?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon RDS."
          },
          {
            "letter": "B",
            "text": "Amazon Glacier."
          },
          {
            "letter": "C",
            "text": "AWS Snowball."
          },
          {
            "letter": "D",
            "text": "AWS EBS."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Amazon Glacier.."
      },
      {
        "id": "11_35",
        "text": "Which is the MINIMUM AWS Support plan that provides technical support through phone calls?",
        "options": [
          {
            "letter": "A",
            "text": "Enterprise."
          },
          {
            "letter": "B",
            "text": "Business."
          },
          {
            "letter": "C",
            "text": "Developer."
          },
          {
            "letter": "D",
            "text": "Basic."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Business.."
      },
      {
        "id": "11_36",
        "text": "Which Amazon EC2 instance pricing model can provide discounts of up to 90%?",
        "options": [
          {
            "letter": "A",
            "text": "Reserved Instances."
          },
          {
            "letter": "B",
            "text": "On-Demand."
          },
          {
            "letter": "C",
            "text": "Dedicated Hosts."
          },
          {
            "letter": "D",
            "text": "Spot Instances."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Spot Instances.."
      },
      {
        "id": "11_37",
        "text": "Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "appGateway."
          },
          {
            "letter": "B",
            "text": "Amazon S3."
          },
          {
            "letter": "C",
            "text": "Amazon Elastic File System (EFS)."
          },
          {
            "letter": "D",
            "text": "Amazon Glacier."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Amazon S3.."
      },
      {
        "id": "11_38",
        "text": "What can AWS edge locations be used for? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Hosting applications."
          },
          {
            "letter": "B",
            "text": "Delivering content closer to users."
          },
          {
            "letter": "C",
            "text": "Running NoSQL database caching services."
          },
          {
            "letter": "D",
            "text": "Reducing traffic on the server by caching responses."
          }
        ],
        "correctAnswers": [
          "B",
          "D"
        ],
        "explanation": "La réponse correcte est les options B. Delivering content closer to users., D. Reducing traffic on the server by caching responses.."
      },
      {
        "id": "11_39",
        "text": "A company is planning to migrate from on-premises to the AWS Cloud. When AWS tool or service provides detailed reports on estimated cost savings after migration?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Total Cost of Ownership (TCO) Calculator."
          },
          {
            "letter": "B",
            "text": "Cost Explorer."
          },
          {
            "letter": "C",
            "text": "AWS Budgets."
          },
          {
            "letter": "D",
            "text": "AWS Migration Hub."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Total Cost of Ownership (TCO) Calculator.."
      },
      {
        "id": "11_40",
        "text": "Which AWS service provides a customized view of the health of specific AWS services that power a customer’s workloads running on AWS?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Service Health Dashboard."
          },
          {
            "letter": "B",
            "text": "AWS X-Ray."
          },
          {
            "letter": "C",
            "text": "AWS Personal Health Dashboard."
          },
          {
            "letter": "D",
            "text": "Amazon CloudWatch."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Personal Health Dashboard.."
      },
      {
        "id": "11_41",
        "text": "One of the advantages to moving infrastructure from an on-premises data center to the AWS Cloud is:",
        "options": [
          {
            "letter": "A",
            "text": "It allows the business to eliminate IT bills."
          },
          {
            "letter": "B",
            "text": "It allows the business to put a server in each customer’s data center."
          },
          {
            "letter": "C",
            "text": "It allows the business to focus on business activities."
          },
          {
            "letter": "D",
            "text": "It allows the business to leave servers unpatched."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. It allows the business to focus on business activities.."
      },
      {
        "id": "11_42",
        "text": "How can an AWS user with an AWS Basic Support plan obtain technical assistance from AWS?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Senior Support Engineers."
          },
          {
            "letter": "B",
            "text": "AWS Technical Account Managers."
          },
          {
            "letter": "C",
            "text": "AWS Trusted Advisor."
          },
          {
            "letter": "D",
            "text": "AWS Discussion Forums."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. AWS Discussion Forums.."
      },
      {
        "id": "11_43",
        "text": "How can a user protect against AWS service disruptions if a natural disaster affects an entire geographic area?",
        "options": [
          {
            "letter": "A",
            "text": "Deploy applications across multiple Availability Zones within an AWS Region."
          },
          {
            "letter": "B",
            "text": "Use a hybrid cloud computing deployment model within the geographic area."
          },
          {
            "letter": "C",
            "text": "Deploy applications across multiple AWS Regions."
          },
          {
            "letter": "D",
            "text": "Store application artifacts using AWS Artifact and replicate them across multiple AWS Regions."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Deploy applications across multiple AWS Regions.."
      },
      {
        "id": "11_44",
        "text": "Which activity is a customer responsibility in the AWS Cloud according to the AWS shared responsibility model?",
        "options": [
          {
            "letter": "A",
            "text": "Ensuring network connectivity from AWS to the internet."
          },
          {
            "letter": "B",
            "text": "Patching and fixing flaws within the AWS Cloud infrastructure."
          },
          {
            "letter": "C",
            "text": "Ensuring the physical security of cloud data centers."
          },
          {
            "letter": "D",
            "text": "Ensuring Amazon EBS volumes are backed up."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Ensuring Amazon EBS volumes are backed up.."
      },
      {
        "id": "11_45",
        "text": "In which scenario should Amazon EC2 Spot Instances be used?",
        "options": [
          {
            "letter": "A",
            "text": "A company wants to move its main website to AWS from an on-premises web server."
          },
          {
            "letter": "B",
            "text": "A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime."
          },
          {
            "letter": "C",
            "text": "A company’s heavily used legacy database is currently running on-premises."
          },
          {
            "letter": "D",
            "text": "A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances.."
      },
      {
        "id": "11_46",
        "text": "A customer is deploying a new application and needs to choose an AWS Region. Which of the following factors could influence the customer’s decision? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Reduced latency to users."
          },
          {
            "letter": "B",
            "text": "The application’s presentation in the local language."
          },
          {
            "letter": "C",
            "text": "Data sovereignty compliance."
          },
          {
            "letter": "D",
            "text": "Cooling costs in hotter climates."
          }
        ],
        "correctAnswers": [
          "A",
          "C"
        ],
        "explanation": "La réponse correcte est les options A. Reduced latency to users., C. Data sovereignty compliance.."
      },
      {
        "id": "11_47",
        "text": "Which AWS service provides alerts when an AWS event may impact a company’s AWS resources?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Personal Health Dashboard."
          },
          {
            "letter": "B",
            "text": "AWS Service Health Dashboard."
          },
          {
            "letter": "C",
            "text": "AWS Trusted Advisor."
          },
          {
            "letter": "D",
            "text": "AWS Infrastructure Event Management."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Personal Health Dashboard.."
      },
      {
        "id": "11_48",
        "text": "Which disaster recovery scenario offers the lowest probability of down time?",
        "options": [
          {
            "letter": "A",
            "text": "Backup and restore."
          },
          {
            "letter": "B",
            "text": "Pilot light."
          },
          {
            "letter": "C",
            "text": "Warm standby."
          },
          {
            "letter": "D",
            "text": "Multi-site active-active."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Multi-site active-active.."
      },
      {
        "id": "11_49",
        "text": "Which service’s PRIMARY purpose is software version control?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon CodeStar."
          },
          {
            "letter": "B",
            "text": "AWS Command Line Interface (AWS CLI)."
          },
          {
            "letter": "C",
            "text": "Amazon Cognito."
          },
          {
            "letter": "D",
            "text": "AWS CodeCommit."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. AWS CodeCommit.."
      },
      {
        "id": "11_50",
        "text": "How can a customer increase security to AWS account logons? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Configure AWS Certificate Manager"
          },
          {
            "letter": "B",
            "text": "Enable Multi-Factor Authentication (MFA)"
          },
          {
            "letter": "C",
            "text": "Use Amazon Cognito to manage access"
          },
          {
            "letter": "D",
            "text": "Configure a strong password policy"
          }
        ],
        "correctAnswers": [
          "B",
          "D"
        ],
        "explanation": "La réponse correcte est les options B. Enable Multi-Factor Authentication (MFA), D. Configure a strong password policy."
      }
    ]
  },
  {
    "id": 12,
    "name": "Examen Pratique 12",
    "description": "Examen Pratique 12 - 42 questions",
    "questionCount": 42,
    "duration": 90,
    "questions": [
      {
        "id": "12_1",
        "text": "Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?",
        "options": [
          {
            "letter": "A",
            "text": "Availability Zone"
          },
          {
            "letter": "B",
            "text": "Edge location"
          },
          {
            "letter": "C",
            "text": "Region"
          },
          {
            "letter": "D",
            "text": "Private networking"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Availability Zone."
      },
      {
        "id": "12_2",
        "text": "One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:",
        "options": [
          {
            "letter": "A",
            "text": "The ability to bid for a lower hourly cost."
          },
          {
            "letter": "B",
            "text": "Paying a daily rate regardless of time used."
          },
          {
            "letter": "C",
            "text": "Paying only for time used."
          },
          {
            "letter": "D",
            "text": "Pre-paying for instances and paying a lower hourly rate."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Paying only for time used.."
      },
      {
        "id": "12_3",
        "text": "What can assist in evaluating an application for migration to the cloud? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Trusted Advisor."
          },
          {
            "letter": "B",
            "text": "AWS Professional Services."
          },
          {
            "letter": "C",
            "text": "AWS Systems Manager."
          },
          {
            "letter": "D",
            "text": "AWS Partner Network (APN)."
          }
        ],
        "correctAnswers": [
          "B",
          "D"
        ],
        "explanation": "La réponse correcte est les options B. AWS Professional Services., D. AWS Partner Network (APN).."
      },
      {
        "id": "12_4",
        "text": "A characteristic of edge locations is that they:",
        "options": [
          {
            "letter": "A",
            "text": "Host Amazon EC2 instances closer to users."
          },
          {
            "letter": "B",
            "text": "Help lower latency and improve performance for users."
          },
          {
            "letter": "C",
            "text": "Cache frequently changing data without reaching the origin server."
          },
          {
            "letter": "D",
            "text": "Refresh data changes daily."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Help lower latency and improve performance for users.."
      },
      {
        "id": "12_5",
        "text": "Which of the following are valid ways for a customer to interact with AWS services? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Command line interface."
          },
          {
            "letter": "B",
            "text": "On-premises."
          },
          {
            "letter": "C",
            "text": "Software Development Kits."
          },
          {
            "letter": "D",
            "text": "Software-as-a-service."
          }
        ],
        "correctAnswers": [
          "A",
          "C"
        ],
        "explanation": "La réponse correcte est les options A. Command line interface., C. Software Development Kits.."
      },
      {
        "id": "12_6",
        "text": "What is a value proposition of the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "AWS is responsible for security in the AWS Cloud."
          },
          {
            "letter": "B",
            "text": "No long-term contract is required."
          },
          {
            "letter": "C",
            "text": "Provision new servers in days."
          },
          {
            "letter": "D",
            "text": "AWS manages user applications in the AWS Cloud."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. No long-term contract is required.."
      },
      {
        "id": "12_7",
        "text": "A company is migrating an application that is running non-interruptible workloads for a three-year time frame. Which pricing construct would provide the MOST cost-effective solution?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EC2 Spot Instances."
          },
          {
            "letter": "B",
            "text": "Amazon EC2 Dedicated Instances."
          },
          {
            "letter": "C",
            "text": "Amazon EC2 On-Demand Instances."
          },
          {
            "letter": "D",
            "text": "Amazon EC2 Reserved Instances."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Amazon EC2 Reserved Instances.."
      },
      {
        "id": "12_8",
        "text": "Which AWS service is used to track record, and audit configuration changes made to AWS resources?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Shield."
          },
          {
            "letter": "B",
            "text": "AWS Config."
          },
          {
            "letter": "C",
            "text": "AWS IAM."
          },
          {
            "letter": "D",
            "text": "Amazon Inspector."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Config.."
      },
      {
        "id": "12_9",
        "text": "Which feature of the AWS Cloud will support an international company’s requirement for low latency to all of its customers?",
        "options": [
          {
            "letter": "A",
            "text": "Fault tolerance."
          },
          {
            "letter": "B",
            "text": "Global reach."
          },
          {
            "letter": "C",
            "text": "Pay-as-you-go pricing."
          },
          {
            "letter": "D",
            "text": "High availability."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Global reach.."
      },
      {
        "id": "12_10",
        "text": "How can one AWS account use Reserved Instances from another AWS account?",
        "options": [
          {
            "letter": "A",
            "text": "By using Amazon EC2 Dedicated Instances."
          },
          {
            "letter": "B",
            "text": "By using AWS Organizations consolidated billing."
          },
          {
            "letter": "C",
            "text": "By using the AWS Cost Explorer tool."
          },
          {
            "letter": "D",
            "text": "By using AWS Budgets."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. By using AWS Organizations consolidated billing.."
      },
      {
        "id": "12_11",
        "text": "What are the benefits of developing and running a new application in the AWS Cloud compared to on-premises? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS automatically distributes the data globally for higher durability."
          },
          {
            "letter": "B",
            "text": "AWS will take care of operating the application."
          },
          {
            "letter": "C",
            "text": "AWS makes it easy to architect for high availability."
          },
          {
            "letter": "D",
            "text": "AWS can easily accommodate application demand changes."
          }
        ],
        "correctAnswers": [
          "C",
          "D"
        ],
        "explanation": "La réponse correcte est les options C. AWS makes it easy to architect for high availability., D. AWS can easily accommodate application demand changes.."
      },
      {
        "id": "12_12",
        "text": "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon RDS."
          },
          {
            "letter": "B",
            "text": "Amazon EC2."
          },
          {
            "letter": "C",
            "text": "Amazon ElastiCache."
          },
          {
            "letter": "D",
            "text": "AWS Fargate."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Amazon EC2.."
      },
      {
        "id": "12_13",
        "text": "AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Implementing Amazon Rekognition."
          },
          {
            "letter": "B",
            "text": "Using AWS Shield-protected resources."
          },
          {
            "letter": "C",
            "text": "Blocking access with Security Groups."
          },
          {
            "letter": "D",
            "text": "Using Multi-Factor Authentication (MFA)."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Using Multi-Factor Authentication (MFA).."
      },
      {
        "id": "12_14",
        "text": "Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Glacier"
          },
          {
            "letter": "B",
            "text": "AWS Snowball"
          },
          {
            "letter": "C",
            "text": "AWS Storage Gateway"
          },
          {
            "letter": "D",
            "text": "Amazon Elastic Block Storage (Amazon EBS)"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Storage Gateway."
      },
      {
        "id": "12_15",
        "text": "Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Marketplace."
          },
          {
            "letter": "B",
            "text": "Amazon Lumberyard."
          },
          {
            "letter": "C",
            "text": "AWS Artifact."
          },
          {
            "letter": "D",
            "text": "Amazon CloudSearch."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Marketplace.."
      },
      {
        "id": "12_16",
        "text": "Which of the following is a component of the AWS Global Infrastructure?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Alexa."
          },
          {
            "letter": "B",
            "text": "AWS Regions."
          },
          {
            "letter": "C",
            "text": "Amazon Lightsail."
          },
          {
            "letter": "D",
            "text": "AWS Organizations."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Regions.."
      },
      {
        "id": "12_17",
        "text": "Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?",
        "options": [
          {
            "letter": "A",
            "text": "On-Demand Instances."
          },
          {
            "letter": "B",
            "text": "Reserved Instances."
          },
          {
            "letter": "C",
            "text": "Spot Instances."
          },
          {
            "letter": "D",
            "text": "Convertible Reserved Instances."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Spot Instances.."
      },
      {
        "id": "12_18",
        "text": "A company wants to migrate its applications to a VPC on AWS These applications will need to access on-premises resources. What combination of actions will enable the company to accomplish this goals? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Use the AWS Service Catalog to identify a list of on-premises resources that can be migrated"
          },
          {
            "letter": "B",
            "text": "Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC"
          },
          {
            "letter": "C",
            "text": "Use Amazon Athena to query data from the on-premises database servers"
          },
          {
            "letter": "D",
            "text": "Connect the company’s on-premises data center to AWS using AWS Direct Connect"
          }
        ],
        "correctAnswers": [
          "B",
          "D"
        ],
        "explanation": "La réponse correcte est les options B. Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC, D. Connect the company’s on-premises data center to AWS using AWS Direct Connect."
      },
      {
        "id": "12_19",
        "text": "A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports. What is the SIMPLEST way to do this?",
        "options": [
          {
            "letter": "A",
            "text": "Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0."
          },
          {
            "letter": "B",
            "text": "Run AWS Trusted Advisor and review the findings."
          },
          {
            "letter": "C",
            "text": "Open the AWS IAM console and check the inbound rule filters for open access."
          },
          {
            "letter": "D",
            "text": "In AWS Config, create a custom rule that invokes an AWS Lambda function to review firewall rules for inbound access."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Run AWS Trusted Advisor and review the findings.."
      },
      {
        "id": "12_20",
        "text": "Which of the following security-related services does AWS offer? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Multi-factor authentication physical tokens."
          },
          {
            "letter": "B",
            "text": "AWS Trusted Advisor security checks."
          },
          {
            "letter": "C",
            "text": "Data encryption."
          },
          {
            "letter": "D",
            "text": "Automated penetration testing."
          }
        ],
        "correctAnswers": [
          "B",
          "C"
        ],
        "explanation": "La réponse correcte est les options B. AWS Trusted Advisor security checks., C. Data encryption.."
      },
      {
        "id": "12_21",
        "text": "Which of the following services have Distributed Denial of Service (DDoS) mitigation features? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS WAF."
          },
          {
            "letter": "B",
            "text": "Amazon DynamoDB."
          },
          {
            "letter": "C",
            "text": "Amazon EC2."
          },
          {
            "letter": "D",
            "text": "Amazon CloudFront."
          }
        ],
        "correctAnswers": [
          "A",
          "D"
        ],
        "explanation": "La réponse correcte est les options A. AWS WAF., D. Amazon CloudFront.."
      },
      {
        "id": "12_22",
        "text": "Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Elastic Block Store (Amazon EBS)."
          },
          {
            "letter": "B",
            "text": "Amazon Machine Image."
          },
          {
            "letter": "C",
            "text": "Amazon EC2 Systems Manager."
          },
          {
            "letter": "D",
            "text": "Amazon AppStream 2.0."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Amazon Machine Image.."
      },
      {
        "id": "12_23",
        "text": "A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?",
        "options": [
          {
            "letter": "A",
            "text": "Think parallel."
          },
          {
            "letter": "B",
            "text": "Implement elasticity."
          },
          {
            "letter": "C",
            "text": "Decouple your components."
          },
          {
            "letter": "D",
            "text": "Design for failure."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Implement elasticity.."
      },
      {
        "id": "12_24",
        "text": "Which AWS Cloud benefit eliminates the need for users to try estimating future infrastructure usage?",
        "options": [
          {
            "letter": "A",
            "text": "Easy and fast deployment of applications in multiple Regions around the world."
          },
          {
            "letter": "B",
            "text": "Security of the AWS Cloud."
          },
          {
            "letter": "C",
            "text": "Elasticity of the AWS Cloud."
          },
          {
            "letter": "D",
            "text": "Lower variable costs due to massive economies of scale."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Elasticity of the AWS Cloud.."
      },
      {
        "id": "12_25",
        "text": "What can users access from AWS Artifact?",
        "options": [
          {
            "letter": "A",
            "text": "AWS security and compliance documents."
          },
          {
            "letter": "B",
            "text": "A download of configuration management details for all AWS resources."
          },
          {
            "letter": "C",
            "text": "Training materials for AWS services."
          },
          {
            "letter": "D",
            "text": "A security assessment of the applications deployed in the AWS Cloud."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS security and compliance documents.."
      },
      {
        "id": "12_26",
        "text": "Compared with costs in traditional and virtualized data centers, AWS has:",
        "options": [
          {
            "letter": "A",
            "text": "Greater variable costs and greater upfront costs."
          },
          {
            "letter": "B",
            "text": "Fixed usage costs and lower upfront costs."
          },
          {
            "letter": "C",
            "text": "Lower variable costs and greater upfront costs."
          },
          {
            "letter": "D",
            "text": "Lower variable costs and lower upfront costs."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Lower variable costs and lower upfront costs.."
      },
      {
        "id": "12_27",
        "text": "Which AWS service would a customer use with a static website to achieve tower latency and high transfer speeds?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Lambda."
          },
          {
            "letter": "B",
            "text": "Amazon DynamoDB Accelerator."
          },
          {
            "letter": "C",
            "text": "Amazon Route 53."
          },
          {
            "letter": "D",
            "text": "Amazon CloudFront."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Amazon CloudFront.."
      },
      {
        "id": "12_28",
        "text": "How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?",
        "options": [
          {
            "letter": "A",
            "text": "They automatically add more instances across multiple AWS Regions based on global demand of the application."
          },
          {
            "letter": "B",
            "text": "They automatically add or replace instances across multiple Availability Zones when the application needs it."
          },
          {
            "letter": "C",
            "text": "They enable the application’s stalk: content to reside closer to end users."
          },
          {
            "letter": "D",
            "text": "They are able to distribute incoming requests across a tier of web server instances."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. They automatically add or replace instances across multiple Availability Zones when the application needs it.."
      },
      {
        "id": "12_29",
        "text": "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
        "options": [
          {
            "letter": "A",
            "text": "A public and private key-pair."
          },
          {
            "letter": "B",
            "text": "Amazon Inspector."
          },
          {
            "letter": "C",
            "text": "AWS Identity and Access Management (IAM) policies."
          },
          {
            "letter": "D",
            "text": "Security Groups."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Identity and Access Management (IAM) policies.."
      },
      {
        "id": "12_30",
        "text": "How should a customer forecast the future costs for running a new web application?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Aurora Backtrack."
          },
          {
            "letter": "B",
            "text": "Amazon CloudWatch Billing Alarms."
          },
          {
            "letter": "C",
            "text": "AWS Simple Monthly Calculator."
          },
          {
            "letter": "D",
            "text": "AWS Cost and Usage report."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Simple Monthly Calculator.."
      },
      {
        "id": "12_31",
        "text": "Where are AWS compliance documents, such as an SOC 1 report, located?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Inspector."
          },
          {
            "letter": "B",
            "text": "AWS CloudTrail."
          },
          {
            "letter": "C",
            "text": "AWS Artifact."
          },
          {
            "letter": "D",
            "text": "AWS Certificate Manager."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Artifact.."
      },
      {
        "id": "12_32",
        "text": "Which of the following tasks is the responsibility of AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Encrypting client-side data."
          },
          {
            "letter": "B",
            "text": "Configuring AWS Identity and Access Management (IAM) roles."
          },
          {
            "letter": "C",
            "text": "Securing the Amazon EC2 hypervisor."
          },
          {
            "letter": "D",
            "text": "Setting user password policies."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Securing the Amazon EC2 hypervisor.."
      },
      {
        "id": "12_33",
        "text": "Under the shared responsibility model which of the following areas are the customer’s responsibility? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Firmware upgrades of network infrastructure."
          },
          {
            "letter": "B",
            "text": "Patching of operating systems."
          },
          {
            "letter": "C",
            "text": "Patching of the underlying hypervisor."
          },
          {
            "letter": "D",
            "text": "Physical security of data centers."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Patching of operating systems.."
      },
      {
        "id": "12_34",
        "text": "A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company’s needs?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Simple Storage Service (Amazon S3)."
          },
          {
            "letter": "B",
            "text": "Amazon DynamoDB."
          },
          {
            "letter": "C",
            "text": "Amazon Kinesis."
          },
          {
            "letter": "D",
            "text": "Amazon Redshift."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Amazon Redshift.."
      },
      {
        "id": "12_35",
        "text": "Which AWS services provide a way to extend an on-premises architecture to the AWS Cloud? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EBS."
          },
          {
            "letter": "B",
            "text": "AWS Direct Connect."
          },
          {
            "letter": "C",
            "text": "Amazon CloudFront."
          },
          {
            "letter": "D",
            "text": "AWS Storage Gateway."
          }
        ],
        "correctAnswers": [
          "B",
          "D"
        ],
        "explanation": "La réponse correcte est les options B. AWS Direct Connect., D. AWS Storage Gateway.."
      },
      {
        "id": "12_36",
        "text": "What are the advantages of the AWS Cloud (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Fixed rate monthly cost."
          },
          {
            "letter": "B",
            "text": "No need to guess capacity requirements."
          },
          {
            "letter": "C",
            "text": "Increased speed to market."
          },
          {
            "letter": "D",
            "text": "Increased upfront capital expenditure."
          }
        ],
        "correctAnswers": [
          "B",
          "C"
        ],
        "explanation": "La réponse correcte est les options B. No need to guess capacity requirements., C. Increased speed to market.."
      },
      {
        "id": "12_37",
        "text": "How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?",
        "options": [
          {
            "letter": "A",
            "text": "Users do not have to wait for infrastructure provisioning."
          },
          {
            "letter": "B",
            "text": "The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure."
          },
          {
            "letter": "C",
            "text": "AWS takes over application configuration management on behalf of users."
          },
          {
            "letter": "D",
            "text": "Users do not need to address security and compliance issues."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Users do not have to wait for infrastructure provisioning.."
      },
      {
        "id": "12_38",
        "text": "Which of the following services could be used to deploy an application to servers running on-premises? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Elastic Beanstalk."
          },
          {
            "letter": "B",
            "text": "AWS OpsWorks."
          },
          {
            "letter": "C",
            "text": "AWS CodeDeploy."
          },
          {
            "letter": "D",
            "text": "AWS Batch."
          }
        ],
        "correctAnswers": [
          "B",
          "C"
        ],
        "explanation": "La réponse correcte est les options B. AWS OpsWorks., C. AWS CodeDeploy.."
      },
      {
        "id": "12_39",
        "text": "What is an example of agility in the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "Access to multiple instance types."
          },
          {
            "letter": "B",
            "text": "Access to managed services."
          },
          {
            "letter": "C",
            "text": "Using Consolidated Billing to produce one bill."
          },
          {
            "letter": "D",
            "text": "Decreased acquisition time for new compute resources."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Decreased acquisition time for new compute resources.."
      },
      {
        "id": "12_40",
        "text": "Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Inspector."
          },
          {
            "letter": "B",
            "text": "AWS Web Application Firewall (AWS WAF)."
          },
          {
            "letter": "C",
            "text": "Elastic Load Balancing (ELB)."
          },
          {
            "letter": "D",
            "text": "AWS Shield."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. AWS Shield.."
      },
      {
        "id": "12_41",
        "text": "Which of the following are advantages of AWS consolidated billing? (Choose two)",
        "options": [
          {
            "letter": "A",
            "text": "The ability to receive one bill for multiple accounts."
          },
          {
            "letter": "B",
            "text": "Service limits increasing by default in all accounts."
          },
          {
            "letter": "C",
            "text": "A fixed discount on the monthly bill."
          },
          {
            "letter": "D",
            "text": "Potential volume discounts, as usage in all accounts is combined."
          }
        ],
        "correctAnswers": [
          "A",
          "D"
        ],
        "explanation": "La réponse correcte est les options A. The ability to receive one bill for multiple accounts., D. Potential volume discounts, as usage in all accounts is combined.."
      },
      {
        "id": "12_42",
        "text": "A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Redshift."
          },
          {
            "letter": "B",
            "text": "Amazon DynamoDB."
          },
          {
            "letter": "C",
            "text": "Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store."
          },
          {
            "letter": "D",
            "text": "Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Amazon EC2 with Amazon Elastic Block Store (Amazon EBS).."
      }
    ]
  },
  {
    "id": 13,
    "name": "Examen Pratique 13",
    "description": "Examen Pratique 13 - 50 questions",
    "questionCount": 50,
    "duration": 90,
    "questions": [
      {
        "id": "13_1",
        "text": "The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?",
        "options": [
          {
            "letter": "A",
            "text": "Cost allocation tags"
          },
          {
            "letter": "B",
            "text": "Consolidated billing"
          },
          {
            "letter": "C",
            "text": "AWS Budgets"
          },
          {
            "letter": "D",
            "text": "AWS Marketplace"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "13_2",
        "text": "Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Glacier"
          },
          {
            "letter": "B",
            "text": "AWS Storage Gateway"
          },
          {
            "letter": "C",
            "text": "Amazon S3"
          },
          {
            "letter": "D",
            "text": "Amazon EBS"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "13_3",
        "text": "What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice area ?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Enterprise Support"
          },
          {
            "letter": "B",
            "text": "AWS Solutions Architects"
          },
          {
            "letter": "C",
            "text": "AWS Professional Services"
          },
          {
            "letter": "D",
            "text": "AWS Account Managers"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "13_4",
        "text": "A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Partner Network Technology Partners"
          },
          {
            "letter": "B",
            "text": "AWS Marketplace"
          },
          {
            "letter": "C",
            "text": "AWS Partner Network Consulting Partners"
          },
          {
            "letter": "D",
            "text": "AWS Service Catalog"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Partner Network Consulting Partners."
      },
      {
        "id": "13_5",
        "text": "Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?",
        "options": [
          {
            "letter": "A",
            "text": "Implement automation."
          },
          {
            "letter": "B",
            "text": "Design for agility."
          },
          {
            "letter": "C",
            "text": "Design for failure."
          },
          {
            "letter": "D",
            "text": "Implement elasticity."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Design for failure.."
      },
      {
        "id": "13_6",
        "text": "Which AWS services can host a Microsoft SQL Server database? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EC2"
          },
          {
            "letter": "B",
            "text": "Amazon Relational Database Service (Amazon RDS)"
          },
          {
            "letter": "C",
            "text": "Amazon Aurora"
          },
          {
            "letter": "D",
            "text": "Amazon Redshift"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "13_7",
        "text": "Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance ?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Cost Explorer"
          },
          {
            "letter": "B",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "C",
            "text": "Consolidated billing"
          },
          {
            "letter": "D",
            "text": "Detailed billing"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Trusted Advisor."
      },
      {
        "id": "13_8",
        "text": "Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software license ?",
        "options": [
          {
            "letter": "A",
            "text": "Spot Instances"
          },
          {
            "letter": "B",
            "text": "Reserved Instances"
          },
          {
            "letter": "C",
            "text": "Dedicated Hosts"
          },
          {
            "letter": "D",
            "text": "On-Demand Instances"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "13_9",
        "text": "Which AWS characteristics make AWS cost effective for a workload with dynamic user demand? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "High availability"
          },
          {
            "letter": "B",
            "text": "Shared security model"
          },
          {
            "letter": "C",
            "text": "Elasticity"
          },
          {
            "letter": "D",
            "text": "Pay-as-you-go pricing"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Elasticity."
      },
      {
        "id": "13_10",
        "text": "Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon CloudWatch"
          },
          {
            "letter": "B",
            "text": "AWS CloudTrail"
          },
          {
            "letter": "C",
            "text": "AWS Config"
          },
          {
            "letter": "D",
            "text": "AWS Health"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "13_11",
        "text": "Which of the following are characteristics of Amazon S3? (Select TWO.)",
        "options": [
          {
            "letter": "A",
            "text": "A global file system"
          },
          {
            "letter": "B",
            "text": "An object store"
          },
          {
            "letter": "C",
            "text": "A local file store"
          },
          {
            "letter": "D",
            "text": "A network file system"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. An object store."
      },
      {
        "id": "13_12",
        "text": "Which services can be used across hybrid AWS Cloud architectures? (Select TWO.)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Route 53"
          },
          {
            "letter": "B",
            "text": "Virtual Private Gateway"
          },
          {
            "letter": "C",
            "text": "Classic Load Balancer"
          },
          {
            "letter": "D",
            "text": "Auto Scaling"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - - You can also use CloudWatch in hybrid cloud architectures by using the CloudWatch Agent or API to monitor your on-premises resources."
      },
      {
        "id": "13_13",
        "text": "What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?",
        "options": [
          {
            "letter": "A",
            "text": "Project management"
          },
          {
            "letter": "B",
            "text": "Antivirus software licensing"
          },
          {
            "letter": "C",
            "text": "Data center security"
          },
          {
            "letter": "D",
            "text": "Software development"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "13_14",
        "text": "A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Redshift"
          },
          {
            "letter": "B",
            "text": "Amazon DynamoDB"
          },
          {
            "letter": "C",
            "text": "Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store"
          },
          {
            "letter": "D",
            "text": "Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)."
      },
      {
        "id": "13_15",
        "text": "Which of the following is a correct relationship between regions, Availability Zones, and edge locations?",
        "options": [
          {
            "letter": "A",
            "text": "Data centers contain regions."
          },
          {
            "letter": "B",
            "text": "Regions contain Availability Zones."
          },
          {
            "letter": "C",
            "text": "Availability Zones contain edge locations."
          },
          {
            "letter": "D",
            "text": "Edge locations contain regions."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "13_16",
        "text": "Which AWS tools assist with estimating costs? (Select three.)",
        "options": [
          {
            "letter": "A",
            "text": "Detailed billing report"
          },
          {
            "letter": "B",
            "text": "Cost allocation tags"
          },
          {
            "letter": "C",
            "text": "AWS Simple Monthly Calculator"
          },
          {
            "letter": "D",
            "text": "AWS Total Cost of Ownership (TCO) Calculator"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "13_17",
        "text": "Which of the following are advantages of AWS consolidated billing? (Select TWO.)",
        "options": [
          {
            "letter": "A",
            "text": "The ability to receive one bill for multiple accounts"
          },
          {
            "letter": "B",
            "text": "Service limits increasing by default in all accounts"
          },
          {
            "letter": "C",
            "text": "A fixed discount on the monthly bill"
          },
          {
            "letter": "D",
            "text": "Potential volume discounts, as usage in all accounts is combined"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "13_18",
        "text": "Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?",
        "options": [
          {
            "letter": "A",
            "text": "One-year, No Upfront, Standard RI pricing"
          },
          {
            "letter": "B",
            "text": "One-year, All Upfront, Convertible RI pricing"
          },
          {
            "letter": "C",
            "text": "Three-year, All Upfront, Standard RI pricing"
          },
          {
            "letter": "D",
            "text": "Three-year, No Upfront, Convertible RI pricing"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "13_19",
        "text": "Compared with costs in traditional and virtualized data centers, AWS has:",
        "options": [
          {
            "letter": "A",
            "text": "greater variable costs and greater upfront costs."
          },
          {
            "letter": "B",
            "text": "fixed usage costs and lower upfront costs."
          },
          {
            "letter": "C",
            "text": "lower variable costs and greater upfront costs."
          },
          {
            "letter": "D",
            "text": "lower variable costs and lower upfront costs."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": (10)."
      },
      {
        "id": "13_20",
        "text": "A characteristic of edge locations is that they:",
        "options": [
          {
            "letter": "A",
            "text": "host Amazon EC2 instances closer to users."
          },
          {
            "letter": "B",
            "text": "help lower latency and improve performance for users."
          },
          {
            "letter": "C",
            "text": "cache frequently changing data without reaching the origin server."
          },
          {
            "letter": "D",
            "text": "refresh data changes daily."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. help lower latency and improve performance for users.."
      },
      {
        "id": "13_21",
        "text": "Which of the following can limit Amazon Storage Service (Amazon S3) bucket access to specific users?",
        "options": [
          {
            "letter": "A",
            "text": "A public and private key-pair"
          },
          {
            "letter": "B",
            "text": "Amazon Inspector"
          },
          {
            "letter": "C",
            "text": "AWS Identity and Access Management (IAM) policies"
          },
          {
            "letter": "D",
            "text": "Security Groups"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "13_22",
        "text": "Which of the following security-related actions are available at no cost?",
        "options": [
          {
            "letter": "A",
            "text": "Calling AWS Support"
          },
          {
            "letter": "B",
            "text": "Contacting AWS Professional Services to request a workshop"
          },
          {
            "letter": "C",
            "text": "Accessing forums, blogs, and whitepapers"
          },
          {
            "letter": "D",
            "text": "Attending AWS classes at a local university"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Accessing forums, blogs, and whitepapers."
      },
      {
        "id": "13_23",
        "text": "Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?",
        "options": [
          {
            "letter": "A",
            "text": "Dedicated RIs"
          },
          {
            "letter": "B",
            "text": "Scheduled RIs"
          },
          {
            "letter": "C",
            "text": "Convertible RIs"
          },
          {
            "letter": "D",
            "text": "Standard RIs"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "13_24",
        "text": "Which AWS feature will reduce the customer's total cost of ownership (TCO)?",
        "options": [
          {
            "letter": "A",
            "text": "Shared responsibility security model"
          },
          {
            "letter": "B",
            "text": "Single tenancy"
          },
          {
            "letter": "C",
            "text": "Elastic computing"
          },
          {
            "letter": "D",
            "text": "Encryption"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Elastic computing."
      },
      {
        "id": "13_25",
        "text": "Which of the following services will automatically scale with an expected increase in web traffic?",
        "options": [
          {
            "letter": "A",
            "text": "AWS CodePipeline"
          },
          {
            "letter": "B",
            "text": "Elastic Load Balancing"
          },
          {
            "letter": "C",
            "text": "Amazon EBS"
          },
          {
            "letter": "D",
            "text": "AWS Direct Connect"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "13_26",
        "text": "Where are AWS compliance documents, such as an SOC 1 report, located?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Inspector"
          },
          {
            "letter": "B",
            "text": "AWS CloudTrail"
          },
          {
            "letter": "C",
            "text": "AWS Artifact"
          },
          {
            "letter": "D",
            "text": "AWS Certificate Manager"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "13_27",
        "text": "Under the AWS shared responsibility model, which of the following activities are the customer's responsibility? (Select TWO.)",
        "options": [
          {
            "letter": "A",
            "text": "Patching operating system components for Amazon Relational Database Server (Amazon RDS)"
          },
          {
            "letter": "B",
            "text": "Encrypting data on the client-side"
          },
          {
            "letter": "C",
            "text": "Training the data center staff"
          },
          {
            "letter": "D",
            "text": "Configuring Network Access Control Lists (ACL)"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "13_28",
        "text": "Which is a recommended pattern for designing a highly available architecture on AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Ensure that components have low-latency network connectivity."
          },
          {
            "letter": "B",
            "text": "Run enough Amazon EC2 instances to operate at peak load."
          },
          {
            "letter": "C",
            "text": "Ensure that the application is designed to accommodate failure of any single component."
          },
          {
            "letter": "D",
            "text": "Use a monolithic application that handles all operations."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Ensure that the application is designed to accommodate failure of any single component.."
      },
      {
        "id": "13_29",
        "text": "According to best practices, how should an application be designed to run in the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "Use tightly coupled components."
          },
          {
            "letter": "B",
            "text": "Use loosely coupled components."
          },
          {
            "letter": "C",
            "text": "Use infrequently coupled components."
          },
          {
            "letter": "D",
            "text": "Use frequently coupled components."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "13_30",
        "text": "AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Select TWO.)",
        "options": [
          {
            "letter": "A",
            "text": "Implementing Amazon Rekognition"
          },
          {
            "letter": "B",
            "text": "Using AWS Shield-protected resources"
          },
          {
            "letter": "C",
            "text": "Blocking access with Security Groups"
          },
          {
            "letter": "D",
            "text": "Using Multi-Factor Authentication (MFA)"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Using Multi-Factor Authentication (MFA)."
      },
      {
        "id": "13_31",
        "text": "Which AWS services should be used for read/write of constantly changing data? (Select TWO.)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Glacier"
          },
          {
            "letter": "B",
            "text": "Amazon RDS"
          },
          {
            "letter": "C",
            "text": "AWS Snowball"
          },
          {
            "letter": "D",
            "text": "Amazon Redshift"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Amazon RDS."
      },
      {
        "id": "13_32",
        "text": "What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?",
        "options": [
          {
            "letter": "A",
            "text": "It simplifies relational database administration tasks."
          },
          {
            "letter": "B",
            "text": "It provides 99.99999999999% reliability and durability."
          },
          {
            "letter": "C",
            "text": "It automatically scales databases for loads."
          },
          {
            "letter": "D",
            "text": "It enabled users to dynamically adjust CPU and RAM resources."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - In the main RDS page though, Lower administrative burden is listed as part of the benefits. -."
      },
      {
        "id": "13_33",
        "text": "A customer needs to run a MySQL database that easily scales.\nWhich AWS service should they use?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Aurora"
          },
          {
            "letter": "B",
            "text": "Amazon Redshift"
          },
          {
            "letter": "C",
            "text": "Amazon DynamoDB"
          },
          {
            "letter": "D",
            "text": "Amazon ElastiCache"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "13_34",
        "text": "Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?",
        "options": [
          {
            "letter": "A",
            "text": "Availability Zone"
          },
          {
            "letter": "B",
            "text": "Edge location"
          },
          {
            "letter": "C",
            "text": "Region"
          },
          {
            "letter": "D",
            "text": "Private networking"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "13_35",
        "text": "Which of the following is a shared control between the customer and AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Providing a key for Amazon S3 client-side encryption"
          },
          {
            "letter": "B",
            "text": "Configuration of an Amazon EC2 instance"
          },
          {
            "letter": "C",
            "text": "Environmental controls of physical AWS data centers"
          },
          {
            "letter": "D",
            "text": "Awareness and training"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "13_36",
        "text": "How many Availability Zones should compute resources be provisioned across to achieve high availability?",
        "options": [
          {
            "letter": "A",
            "text": "A minimum of one"
          },
          {
            "letter": "B",
            "text": "A minimum of two"
          },
          {
            "letter": "C",
            "text": "A minimum of three"
          },
          {
            "letter": "D",
            "text": "A minimum of four or more"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. A minimum of two."
      },
      {
        "id": "13_37",
        "text": "One of the advantages to moving infrastructure from an on-premises data center to the AWS Cloud is:",
        "options": [
          {
            "letter": "A",
            "text": "it allows the business to eliminate IT bills."
          },
          {
            "letter": "B",
            "text": "it allows the business to put a server in each customer's data center."
          },
          {
            "letter": "C",
            "text": "it allows the business to focus on business activities."
          },
          {
            "letter": "D",
            "text": "it allows the business to leave servers unpatched."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. it allows the business to focus on business activities.."
      },
      {
        "id": "13_38",
        "text": "What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon S3"
          },
          {
            "letter": "B",
            "text": "Amazon Glacier"
          },
          {
            "letter": "C",
            "text": "Amazon EBS"
          },
          {
            "letter": "D",
            "text": "Amazon EC2 Instance Store"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon S3."
      },
      {
        "id": "13_39",
        "text": "Which AWS IAM feature allows developers to access AWS services through the AWS CLI?",
        "options": [
          {
            "letter": "A",
            "text": "API keys"
          },
          {
            "letter": "B",
            "text": "Access keys"
          },
          {
            "letter": "C",
            "text": "User names/Passwords"
          },
          {
            "letter": "D",
            "text": "SSH keys"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "13_40",
        "text": "Which of the following is a fast and reliable NoSQL database service?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Redshift"
          },
          {
            "letter": "B",
            "text": "Amazon RDS"
          },
          {
            "letter": "C",
            "text": "Amazon DynamoDB"
          },
          {
            "letter": "D",
            "text": "Amazon S3"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "13_41",
        "text": "What is an example of agility in the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "Access to multiple instance types"
          },
          {
            "letter": "B",
            "text": "Access to managed services"
          },
          {
            "letter": "C",
            "text": "Using Consolidated Billing to produce one bill"
          },
          {
            "letter": "D",
            "text": "Decreased acquisition time for new compute resources"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "13_42",
        "text": "Which service should a customer use to consolidate and centrally manage multiple AWS accounts?",
        "options": [
          {
            "letter": "A",
            "text": "AWS IAM"
          },
          {
            "letter": "B",
            "text": "AWS Organizations"
          },
          {
            "letter": "C",
            "text": "AWS Schema Conversion Tool"
          },
          {
            "letter": "D",
            "text": "AWS Config"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "13_43",
        "text": "What approach to transcoding a large number of individual video files adheres to AWS architecture principles?",
        "options": [
          {
            "letter": "A",
            "text": "Using many instances in parallel"
          },
          {
            "letter": "B",
            "text": "Using a single large instance during off-peak hours"
          },
          {
            "letter": "C",
            "text": "Using dedicated hardware"
          },
          {
            "letter": "D",
            "text": "Using a large GPU instance type"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "13_44",
        "text": "For which auditing process does AWS have sole responsibility?",
        "options": [
          {
            "letter": "A",
            "text": "AWS IAM policies"
          },
          {
            "letter": "B",
            "text": "Physical security"
          },
          {
            "letter": "C",
            "text": "Amazon S3 bucket policies"
          },
          {
            "letter": "D",
            "text": "AWS CloudTrail Logs"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Physical security."
      },
      {
        "id": "13_45",
        "text": "Which feature of the AWS Cloud will support an international company's requirement for low latency to all of its customers?",
        "options": [
          {
            "letter": "A",
            "text": "Fault tolerance"
          },
          {
            "letter": "B",
            "text": "Global reach"
          },
          {
            "letter": "C",
            "text": "Pay-as-you-go pricing"
          },
          {
            "letter": "D",
            "text": "High availability"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - Global Reach will support an international company using Cloud-Front."
      },
      {
        "id": "13_46",
        "text": "Which of the following is the customer's responsibility under the AWS shared responsibility model?",
        "options": [
          {
            "letter": "A",
            "text": "Patching underlying infrastructure"
          },
          {
            "letter": "B",
            "text": "Physical security"
          },
          {
            "letter": "C",
            "text": "Patching Amazon EC2 instances"
          },
          {
            "letter": "D",
            "text": "Patching network infrastructure"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "13_47",
        "text": "A customer is using multiple AWS accounts with separate billing. How can the customer take advantage of volume discounts with minimal impact to the AWS resources?",
        "options": [
          {
            "letter": "A",
            "text": "Create one global AWS account and move all AWS resources to that account."
          },
          {
            "letter": "B",
            "text": "Sign up for three years of Reserved Instance pricing up front."
          },
          {
            "letter": "C",
            "text": "Use the consolidated billing feature from AWS Organizations."
          },
          {
            "letter": "D",
            "text": "Sign up for the AWS Enterprise support plan to get volume discounts."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "13_48",
        "text": "Which of the following are features of Amazon CloudWatch Logs? (Select TWO.)",
        "options": [
          {
            "letter": "A",
            "text": "Summaries by Amazon Simple Notification Service (Amazon SNS)"
          },
          {
            "letter": "B",
            "text": "Free Amazon Elasticsearch Service analytics"
          },
          {
            "letter": "C",
            "text": "Provided at no charge"
          },
          {
            "letter": "D",
            "text": "Real-time monitoring"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Real-time monitoring."
      },
      {
        "id": "13_49",
        "text": "Which of the following is an AWS managed Domain Name System (DNS) web service?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Route 53"
          },
          {
            "letter": "B",
            "text": "Amazon Neptune"
          },
          {
            "letter": "C",
            "text": "Amazon SageMaker"
          },
          {
            "letter": "D",
            "text": "Amazon Lightsail"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "13_50",
        "text": "A customer is deploying a new application and needs to choose an AWS Region. Which of the following factors could influence the customer's decision? (Select TWO.)",
        "options": [
          {
            "letter": "A",
            "text": "Reduced latency to users"
          },
          {
            "letter": "B",
            "text": "The application's presentation in the local language"
          },
          {
            "letter": "C",
            "text": "Data sovereignty compliance"
          },
          {
            "letter": "D",
            "text": "Cooling costs in hotter climates"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Reduced latency to users."
      }
    ]
  },
  {
    "id": 14,
    "name": "Examen Pratique 14",
    "description": "Examen Pratique 14 - 50 questions",
    "questionCount": 50,
    "duration": 90,
    "questions": [
      {
        "id": "14_1",
        "text": "Which storage service can be used as a low-cost option for hosting static websites?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Glacier"
          },
          {
            "letter": "B",
            "text": "Amazon DynamoDB"
          },
          {
            "letter": "C",
            "text": "Amazon Elastic File System (Amazon EFS)"
          },
          {
            "letter": "D",
            "text": "Amazon Simple Storage Service (Amazon S3)"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "14_2",
        "text": "Which Amazon EC2 instance pricing model can provide discounts of up to 90%?",
        "options": [
          {
            "letter": "A",
            "text": "Reserved Instances"
          },
          {
            "letter": "B",
            "text": "On-Demand"
          },
          {
            "letter": "C",
            "text": "Dedicated Hosts"
          },
          {
            "letter": "D",
            "text": "Spot Instances"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "14_3",
        "text": "What is the AWS customer responsible for according to the AWS shared responsibility model?",
        "options": [
          {
            "letter": "A",
            "text": "Physical access controls"
          },
          {
            "letter": "B",
            "text": "Data encryption"
          },
          {
            "letter": "C",
            "text": "Secure disposal of storage devices"
          },
          {
            "letter": "D",
            "text": "Environmental risk management"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Data encryption."
      },
      {
        "id": "14_4",
        "text": "Which of the following AWS Cloud services can be used to run a customer-managed relational database?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EC2"
          },
          {
            "letter": "B",
            "text": "Amazon Route 53"
          },
          {
            "letter": "C",
            "text": "Amazon ElastiCache"
          },
          {
            "letter": "D",
            "text": "Amazon DynamoDB"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Amazon EC2."
      },
      {
        "id": "14_5",
        "text": "A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company's needs?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Simple Storage Service (Amazon S3)"
          },
          {
            "letter": "B",
            "text": "Amazon DynamoDB"
          },
          {
            "letter": "C",
            "text": "Amazon Kinesis"
          },
          {
            "letter": "D",
            "text": "Amazon Redshift"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "14_6",
        "text": "Which statement best describes Elastic Load Balancing?",
        "options": [
          {
            "letter": "A",
            "text": "It translates a domain name into an IP address using DNS."
          },
          {
            "letter": "B",
            "text": "It distributes incoming application traffic across one or more Amazon EC2 instances."
          },
          {
            "letter": "C",
            "text": "It collects metrics on connected Amazon EC2 instances."
          },
          {
            "letter": "D",
            "text": "It automatically adjusts the number of Amazon EC2 instances to support incoming traffic."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "14_7",
        "text": "Which of the following are valid ways for a customer to interact with AWS services? (Select TWO.)",
        "options": [
          {
            "letter": "A",
            "text": "Command line interface"
          },
          {
            "letter": "B",
            "text": "On-premises"
          },
          {
            "letter": "C",
            "text": "Software Development Kits"
          },
          {
            "letter": "D",
            "text": "Software-as-a-service"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Command line interface."
      },
      {
        "id": "14_8",
        "text": "The AWS Cloud's multiple Regions are an example of:",
        "options": [
          {
            "letter": "A",
            "text": "agility."
          },
          {
            "letter": "B",
            "text": "global infrastructure."
          },
          {
            "letter": "C",
            "text": "elasticity."
          },
          {
            "letter": "D",
            "text": "pay-as-you-go pricing."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. global infrastructure.."
      },
      {
        "id": "14_9",
        "text": "Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Select TWO.)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Storage Gateway"
          },
          {
            "letter": "B",
            "text": "Amazon S3"
          },
          {
            "letter": "C",
            "text": "Amazon Elastic File System (EFS)"
          },
          {
            "letter": "D",
            "text": "Amazon Glacier"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - -."
      },
      {
        "id": "14_10",
        "text": "Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?",
        "options": [
          {
            "letter": "A",
            "text": "Cloud-native"
          },
          {
            "letter": "B",
            "text": "Partner network"
          },
          {
            "letter": "C",
            "text": "Hybrid architecture"
          },
          {
            "letter": "D",
            "text": "Infrastructure as a service"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "14_11",
        "text": "What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?",
        "options": [
          {
            "letter": "A",
            "text": "They require the customer to monitor and replace failing instances."
          },
          {
            "letter": "B",
            "text": "They have better performance than customer-managed services."
          },
          {
            "letter": "C",
            "text": "They simplify patching and updating underlying OSs."
          },
          {
            "letter": "D",
            "text": "They do not require the customer to optimize instance type or size selections."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - AWS Managed Services takes care of all of your patching and backup activities to help keep your resources current and secure. When updates or patches are released by OS vendors, AWS Managed Services applies them in a timely and consistent manner to minimize the impact on your business - Critical security patches are applied immediately, while others are applied based on the patch schedule you request. Backups of Stacks are automated using Amazon Elastic Block Store (EBS) and RDS snapshots, and can be restored in the event of a failure or outage, ensuring business continuity."
      },
      {
        "id": "14_12",
        "text": "Which service provides a virtually unlimited amount of online highly durable object storage?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Redshift"
          },
          {
            "letter": "B",
            "text": "Amazon Elastic File System (Amazon EFS)"
          },
          {
            "letter": "C",
            "text": "Amazon Elastic Container Service (Amazon ECS)"
          },
          {
            "letter": "D",
            "text": "Amazon S3"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "14_13",
        "text": "Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?",
        "options": [
          {
            "letter": "A",
            "text": "IAM group"
          },
          {
            "letter": "B",
            "text": "IAM user"
          },
          {
            "letter": "C",
            "text": "IAM role"
          },
          {
            "letter": "D",
            "text": "IAM policy"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - Access keys are long-term credentials for an IAM user or the AWS account root user. - You can use access keys to sign programmatic requests to the AWS CLI or API (directly or using the AWS SDK). - For more information, see Signing AWS API Requests in the Amazon Web Services General Reference."
      },
      {
        "id": "14_14",
        "text": "Which of the following security-related services does AWS offer? (Select TWO.)",
        "options": [
          {
            "letter": "A",
            "text": "Multi-factor authentication physical tokens"
          },
          {
            "letter": "B",
            "text": "AWS Trusted Advisor security checks"
          },
          {
            "letter": "C",
            "text": "Data encryption"
          },
          {
            "letter": "D",
            "text": "Automated penetration testing"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - Penetration testing is not correct, because it can be done by customers on their own resources."
      },
      {
        "id": "14_15",
        "text": "Which AWS managed service is used to host databases?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Batch"
          },
          {
            "letter": "B",
            "text": "AWS Artifact"
          },
          {
            "letter": "C",
            "text": "AWS Data Pipeline"
          },
          {
            "letter": "D",
            "text": "Amazon RDS"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - Amazon Relational Database Service (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud. - It provides cost-efficient and resizable capacity while automating time-consuming administration tasks such as hardware provisioning, database setup, patching and backups. - It frees you to focus on your applications so you can give them the fast performance, high availability, security and compatibility they need. Reference:."
      },
      {
        "id": "14_16",
        "text": "Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon S3"
          },
          {
            "letter": "B",
            "text": "Amazon Glacier"
          },
          {
            "letter": "C",
            "text": "Amazon EBS"
          },
          {
            "letter": "D",
            "text": "Amazon EFS"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - Amazon Elastic File System (Amazon EFS) provides a simple, scalable, fully managed elastic NFS file system for use with AWS Cloud services and on-premises resources. - It is built to scale on demand to petabytes without disrupting applications, growing and shrinking automatically as you add and remove files, eliminating the need to provision and manage capacity to accommodate growth. - Amazon EFS is designed to provide the throughput, IOPS, and low latency needed for Linux workloads. - Throughput and IOPS scale as a file system grows and can burst to higher throughput levels for short periods of time to support the unpredictable performance needs of file workloads. - For the most demanding workloads, Amazon EFS can support performance over 10 GB/sec and up to 500,000 IOPS."
      },
      {
        "id": "14_17",
        "text": "When architecting cloud applications, which of the following are a key design principle?",
        "options": [
          {
            "letter": "A",
            "text": "Use the largest instance possible"
          },
          {
            "letter": "B",
            "text": "Provision capacity for peak load"
          },
          {
            "letter": "C",
            "text": "Use the Scrum development process"
          },
          {
            "letter": "D",
            "text": "Implement elasticity"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - \"Provisioning for peaks\" is a characteristic of a traditional computing environment, per the AWS Best Practices: \"you provision capacity based on an estimate of a theoretical maximum peak.\" -."
      },
      {
        "id": "14_18",
        "text": "Which AWS service should be used for long-term, low-cost storage of data backups?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon RDS"
          },
          {
            "letter": "B",
            "text": "Amazon Glacier"
          },
          {
            "letter": "C",
            "text": "AWS Snowball"
          },
          {
            "letter": "D",
            "text": "AWS EBS"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - Amazon S3 Glacier is a secure, durable, and low-cost storage class of S3 for data archiving and long-term backup. Customers can store large or small amounts of data for as little as $0.004 per gigabyte per month. - The S3 Glacier storage class is ideal for archives where data is regularly retrieved and some of the data may be needed in minutes. - Amazon RDS is a relational database service that hosts databases. It helps you create and manage databases. - Amazon Snowball is a petabyte-scale data transfer service that provides cost efficient data transfer to AWS from tamper proof physical devices. Similarly, Elastic block storage offers persistent block storage volumes for EC2 instances. Reference:."
      },
      {
        "id": "14_19",
        "text": "Which task is AWS responsible for in the shared responsibility model for security and compliance?",
        "options": [
          {
            "letter": "A",
            "text": "Granting access to individuals and services"
          },
          {
            "letter": "B",
            "text": "Encrypting data in transit"
          },
          {
            "letter": "C",
            "text": "Updating Amazon EC2 host firmware"
          },
          {
            "letter": "D",
            "text": "Updating operating systems"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - AWS Compliance enables customers to establish and operate in an AWS security control environment The shared responsibility model is part of AWS Compliance - The Security of the cloud is managed by Amazon AWS provider - The Security in the cloud is responsibility of the customer - The customer is responsible for their information and data, their secure transmission, integrity, and encryption Also, the customer is responsible for managing, support, patching and control of the guest operating system and AWS services provided like EC2 - AWS customers retain control and ownership of their data - The AWS network provides significant protection against traditional network security issues and the customer can implement further protection Reference:."
      },
      {
        "id": "14_20",
        "text": "Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Marketplace"
          },
          {
            "letter": "B",
            "text": "Amazon Lumberyard"
          },
          {
            "letter": "C",
            "text": "AWS Artifact"
          },
          {
            "letter": "D",
            "text": "Amazon CloudSearch"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that make it easy to find, test, buy, and deploy software that runs on AWS. Reference:."
      },
      {
        "id": "14_21",
        "text": "Which of the following is a benefit of using the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "Permissive security removes the administrative burden."
          },
          {
            "letter": "B",
            "text": "Ability to focus on revenue-generating activities."
          },
          {
            "letter": "C",
            "text": "Control over cloud network hardware."
          },
          {
            "letter": "D",
            "text": "Choice of specific cloud hardware vendors."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - Developer and IT staff productivity accounted for nearly 30% of overall financial benefits. - The remaining benefits were driven by the flexibility and agility of Amazon cloud infrastructure services, which make it easier to trial new business models, support revenue-generating applications, and provide more reliable services to end users. Reference:."
      },
      {
        "id": "14_22",
        "text": "When performing a cost analysis that supports physical isolation of a customer workload, which compute hosting model should be accounted for in the Total Cost of Ownership (TCO)?",
        "options": [
          {
            "letter": "A",
            "text": "Dedicated Hosts"
          },
          {
            "letter": "B",
            "text": "Reserved Instances"
          },
          {
            "letter": "C",
            "text": "On-Demand Instances"
          },
          {
            "letter": "D",
            "text": "No Upfront Reserved Instances"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - Use Dedicated Hosts to launch Amazon EC2 instances on physical servers that are dedicated for your use. - Dedicated Hosts give you additional visibility and control over how instances are placed on a physical server, and you can reliably use the same physical server over time. - As a result, Dedicated Hosts enable you to use your existing server-bound software licenses like Windows Server and address corporate compliance and regulatory requirements."
      },
      {
        "id": "14_23",
        "text": "Which AWS service provides the ability to manage infrastructure as code?",
        "options": [
          {
            "letter": "A",
            "text": "AWS CodePipeline"
          },
          {
            "letter": "B",
            "text": "AWS CodeDeploy"
          },
          {
            "letter": "C",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "D",
            "text": "AWS CloudFormation"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - AWS CloudFormation provides a common language for you to describe and provision all the infrastructure resources in your cloud environment. - CloudFormation allows you to use a simple text file to model and provision, in an automated and secure manner, all the resources needed for your applications across all regions and accounts. - This file serves as the single source of truth for your cloud environment. Reference:."
      },
      {
        "id": "14_24",
        "text": "If a customer needs to audit the change management of AWS resources, which of the following AWS services should the customer use?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Config"
          },
          {
            "letter": "B",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "C",
            "text": "Amazon CloudWatch"
          },
          {
            "letter": "D",
            "text": "Amazon Inspector"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. - Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations. - With Config, you can review changes in configurations and relationships between AWS resources, dive into detailed resource configuration histories, and determine your overall compliance against the configurations specified in your internal guidelines. - This enables you to simplify compliance auditing, security analysis, change management, and operational troubleshooting. Reference:."
      },
      {
        "id": "14_25",
        "text": "What is Amazon CloudWatch?",
        "options": [
          {
            "letter": "A",
            "text": "A code repository with customizable build and team commit features."
          },
          {
            "letter": "B",
            "text": "A metrics repository with customizable notification thresholds and channels."
          },
          {
            "letter": "C",
            "text": "A security configuration repository with threat analytics."
          },
          {
            "letter": "D",
            "text": "A rule repository of a web application firewall with automated vulnerability prevention features."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - Amazon CloudWatch is basically a metrics repository. - An AWS service -- such as Amazon EC2 -- puts metrics into the repository, and you retrieve statistics based on those metrics. - If you put your own custom metrics into the repository, you can retrieve statistics on these metrics as well. Reference: cloudwatch_architecture.html."
      },
      {
        "id": "14_26",
        "text": "Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Server Migration Service"
          },
          {
            "letter": "B",
            "text": "AWS Organizations"
          },
          {
            "letter": "C",
            "text": "AWS Budgets"
          },
          {
            "letter": "D",
            "text": "AWS Trusted Advisor"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - use the consolidated billing feature in AWS Organizations to consolidate billing and payment for multiple AWS accounts or multiple Amazon Internet Services Pvt. Ltd (AISPL) accounts. - Every organization in AWS Organizations has a master account that pays the charges of all the member accounts. - Consolidated billing has the following benefits: - One bill You get one bill for multiple accounts. - Easy tracking You can track the charges across multiple accounts and download the combined cost and usage data. - Combined usage You can combine the usage across all accounts in the organization to share the volume pricing discounts and Reserved Instance discounts. This can result in a lower charge for your project, department, or company than with individual standalone accounts. For more information, see Volume Discounts. - No extra fee Consolidated billing is offered at no additional cost."
      },
      {
        "id": "14_27",
        "text": "Which of the following services could be used to deploy an application to servers running on-premises? (Select TWO.)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Elastic Beanstalk"
          },
          {
            "letter": "B",
            "text": "AWS OpsWorks"
          },
          {
            "letter": "C",
            "text": "AWS CodeDeploy"
          },
          {
            "letter": "D",
            "text": "AWS Batch"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - -."
      },
      {
        "id": "14_28",
        "text": "Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?",
        "options": [
          {
            "letter": "A",
            "text": "On-Demand Instances"
          },
          {
            "letter": "B",
            "text": "Reserved Instances"
          },
          {
            "letter": "C",
            "text": "Spot Instances"
          },
          {
            "letter": "D",
            "text": "Convertible Reserved Instances"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - In the new model, the Spot prices are more predictable, updated less frequently, and are determined by supply and demand for Amazon EC2 spare capacity, not bid prices. Reference:."
      },
      {
        "id": "14_29",
        "text": "Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO.)",
        "options": [
          {
            "letter": "A",
            "text": "Use manual monitoring."
          },
          {
            "letter": "B",
            "text": "Use fixed servers."
          },
          {
            "letter": "C",
            "text": "Implement loose coupling."
          },
          {
            "letter": "D",
            "text": "Rely on individual components."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Implement loose coupling.."
      },
      {
        "id": "14_30",
        "text": "Which is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?",
        "options": [
          {
            "letter": "A",
            "text": "Enterprise"
          },
          {
            "letter": "B",
            "text": "Business"
          },
          {
            "letter": "C",
            "text": "Developer"
          },
          {
            "letter": "D",
            "text": "Basic"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "14_31",
        "text": "Where can AWS compliance and certification reports be downloaded?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Artifact"
          },
          {
            "letter": "B",
            "text": "AWS Concierge"
          },
          {
            "letter": "C",
            "text": "AWS Certificate Manager"
          },
          {
            "letter": "D",
            "text": "AWS Trusted Advisor"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - AWS Artifact is your go-to, central resource for compliance-related information that matters to you. - It provides on-demand access to AWS's security and compliance reports and select online agreements. - The AWS SOC 2 report is particularly helpful for completing questionnaires because it provides a comprehensive description of the implementation and operating effectiveness of AWS security controls. - Another useful document is the Executive Briefing within the AWS FedRAMP Partner Package. Reference:."
      },
      {
        "id": "14_32",
        "text": "Which AWS service provides a customized view of the health of specific AWS services that power a customer's workloads running on AWS?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Service Health Dashboard"
          },
          {
            "letter": "B",
            "text": "AWS X-Ray"
          },
          {
            "letter": "C",
            "text": "AWS Personal Health Dashboard"
          },
          {
            "letter": "D",
            "text": "Amazon CloudWatch"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Personal Health Dashboard."
      },
      {
        "id": "14_33",
        "text": "Which of the following is an advantage of consolidated billing on AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Volume pricing qualification"
          },
          {
            "letter": "B",
            "text": "Shared access permissions"
          },
          {
            "letter": "C",
            "text": "Multiple bills per account"
          },
          {
            "letter": "D",
            "text": "Eliminates the need for tagging"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - If you have multiple standalone accounts, your charges might decrease if you add the accounts to an organization. - AWS combines usage from all accounts in the organization to qualify you for volume pricing discounts. Reference:."
      },
      {
        "id": "14_34",
        "text": "Which of the following steps should be taken by a customer when conducting penetration testing on AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Conduct penetration testing using Amazon Inspector, and then notify AWS support."
          },
          {
            "letter": "B",
            "text": "Request and wait for approval from the customer's internal security team, and then conduct testing."
          },
          {
            "letter": "C",
            "text": "Notify AWS support, and then conduct testing immediately."
          },
          {
            "letter": "D",
            "text": "Request and wait for approval from AWS support, and then conduct testing."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - AWS customers are welcome to carry out security assessments or penetration tests against their AWS infrastructure without prior approval for 8 services. Reference:."
      },
      {
        "id": "14_35",
        "text": "Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Elastic Block Store (Amazon EBS)"
          },
          {
            "letter": "B",
            "text": "Amazon Machine Image"
          },
          {
            "letter": "C",
            "text": "Amazon EC2 Systems Manager"
          },
          {
            "letter": "D",
            "text": "Amazon AppStream 2.0"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - To use Amazon EC2, you simply: - Select a pre-configured, templated Amazon Machine Image (AMI) to get up and running immediately. Or create an AMI containing your applications, libraries, data, and associated configuration settings. - Configure security and network access on your Amazon EC2 instance. - Choose which instance type(s) you want, then start, terminate, and monitor as many instances of your AMI as needed, using the web service APIs or the variety of management tools provided. - Determine whether you want to run in multiple locations, utilize static IP endpoints, or attach persistent block storage to your instances. - Pay only for the resources that you actually consume, like instance-hours or data transfer. Reference:."
      },
      {
        "id": "14_36",
        "text": "How would an AWS customer easily apply common access controls to a large set of users?",
        "options": [
          {
            "letter": "A",
            "text": "Apply an IAM policy to an IAM group."
          },
          {
            "letter": "B",
            "text": "Apply an IAM policy to an IAM role."
          },
          {
            "letter": "C",
            "text": "Apply the same IAM policy to all IAM users with access to the same workload."
          },
          {
            "letter": "D",
            "text": "Apply an IAM policy to an Amazon Cognito user pool."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - Instead of defining permissions for individual IAM users, it's usually more convenient to create groups that relate to job functions (administrators, developers, accounting, etc.). - Next, define the relevant permissions for each group. Finally, assign IAM users to those groups. All the users in an IAM group inherit the permissions assigned to the group. - That way, you can make changes for everyone in a group in just one place. As people move around in your company, you can simply change what IAM group their IAM user belongs to. Reference:."
      },
      {
        "id": "14_37",
        "text": "Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Cost Explorer"
          },
          {
            "letter": "B",
            "text": "AWS Budgets"
          },
          {
            "letter": "C",
            "text": "AWS Cost and Usage report"
          },
          {
            "letter": "D",
            "text": "AWS Billing dashboard"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - The Cost & Usage Report is your one-stop-shop for accessing the most granular data about your AWS costs and usage. - You can also load your cost and usage information into Amazon Athena, Amazon Redshift, AWS QuickSight, or a tool of your choice. Reference:."
      },
      {
        "id": "14_38",
        "text": "Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO.)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Concierge"
          },
          {
            "letter": "B",
            "text": "AWS CloudFormation"
          },
          {
            "letter": "C",
            "text": "Amazon Simple Storage Service (Amazon S3)"
          },
          {
            "letter": "D",
            "text": "Amazon EC2 Auto Scaling"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS CloudFormation."
      },
      {
        "id": "14_39",
        "text": "Which of the following is an AWS Cloud architecture design principle?",
        "options": [
          {
            "letter": "A",
            "text": "Implement single points of failure."
          },
          {
            "letter": "B",
            "text": "Implement loose coupling."
          },
          {
            "letter": "C",
            "text": "Implement monolithic design."
          },
          {
            "letter": "D",
            "text": "Implement vertical scaling."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - Loose coupling between services can also be done through asynchronous integration. It involves one component that generates events and another that consumes them. - The two components do not integrate through direct point-to-point interaction, but usually through an intermediate durable storage layer. - This approach decouples the two components and introduces additional resiliency. - So, for example, if a process that is reading messages from the queue fails, messages can still be added to the queue to be processed when the system recovers. Reference:."
      },
      {
        "id": "14_40",
        "text": "Which of the following security measures protect access to an AWS account? (Select TWO.)",
        "options": [
          {
            "letter": "A",
            "text": "Enable AWS CloudTrail."
          },
          {
            "letter": "B",
            "text": "Grant least privilege access to IAM users."
          },
          {
            "letter": "C",
            "text": "Create one IAM user and share with many developers and users."
          },
          {
            "letter": "D",
            "text": "Enable Amazon CloudFront."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - If you decided to create service accounts (that is, accounts used for programmatic access by applications running outside of the AWS environment) and generate access keys for them, you should create a dedicated service account for each use case. - This will allow you to restrict the associated policy to only the permissions needed for the particular use case, limiting the blast radius if the credentials are compromised. - For example, if a monitoring tool and a release management tool both require access to your AWS environment, create two separate service accounts with two separate policies that define the minimum set of permissions for each tool. Reference:."
      },
      {
        "id": "14_41",
        "text": "Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Glacier"
          },
          {
            "letter": "B",
            "text": "AWS Snowball"
          },
          {
            "letter": "C",
            "text": "AWS Storage Gateway"
          },
          {
            "letter": "D",
            "text": "Amazon Elastic Block Storage (Amazon EBS)"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - AWS Storage Gateway is a hybrid cloud storage service that gives you on-premises access to virtually unlimited cloud storage. Customers use Storage Gateway to simplify storage management and reduce costs for key hybrid cloud storage use cases. - These include moving tape backups to the cloud, reducing on-premises storage with cloud-backed file shares, providing low latency access to data in AWS for on- premises applications, as well as various migration, archiving, processing, and disaster recovery use cases. Reference:."
      },
      {
        "id": "14_42",
        "text": "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon RDS"
          },
          {
            "letter": "B",
            "text": "Amazon EC2"
          },
          {
            "letter": "C",
            "text": "Amazon ElastiCache"
          },
          {
            "letter": "D",
            "text": "AWS Fargate"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - The customer is responsible for managing, support, patching and control of the guest operating system and AWS services provided like EC2. Reference:."
      },
      {
        "id": "14_43",
        "text": "Which of the following is an important architectural design principle when designing cloud applications?",
        "options": [
          {
            "letter": "A",
            "text": "Use multiple Availability Zones."
          },
          {
            "letter": "B",
            "text": "Use tightly coupled components."
          },
          {
            "letter": "C",
            "text": "Use open source software."
          },
          {
            "letter": "D",
            "text": "Provision extra capacity."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - Data Center resilience is practiced through Availability Zones across data centers that reduce the impact of failures. - Fault isolation improvement can be made to traditional horizontal scaling by sharding (a method of grouping instances into groups called shards, instead of sending the traffic from all users to every node like in the traditional IT structure.) Reference:."
      },
      {
        "id": "14_44",
        "text": "Which AWS support plan includes a dedicated Technical Account Manager?",
        "options": [
          {
            "letter": "A",
            "text": "Developer"
          },
          {
            "letter": "B",
            "text": "Enterprise"
          },
          {
            "letter": "C",
            "text": "Business"
          },
          {
            "letter": "D",
            "text": "Basic"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - The enterprise support plans supports technical account manager. Developer and business support plans are devoid of this facility. Reference:."
      },
      {
        "id": "14_45",
        "text": "Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?",
        "options": [
          {
            "letter": "A",
            "text": "AWS manages the data stored in Amazon RDS tables."
          },
          {
            "letter": "B",
            "text": "AWS manages the maintenance of the operating system."
          },
          {
            "letter": "C",
            "text": "AWS automatically scales up instance types on demand."
          },
          {
            "letter": "D",
            "text": "AWS manages the database type."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS manages the maintenance of the operating system.."
      },
      {
        "id": "14_46",
        "text": "Which service is best for storing common database query results, which helps to alleviate database access load?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Machine Learning"
          },
          {
            "letter": "B",
            "text": "Amazon SQS"
          },
          {
            "letter": "C",
            "text": "Amazon ElastiCache"
          },
          {
            "letter": "D",
            "text": "Amazon EC2 Instance Store"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - Amazon ElastiCache for Redis is a great choice for implementing a highly available, distributed, and secure in-memory cache to decrease access latency, increase throughput, and ease the load off your relational or NoSQL databases and applications. - ElastiCache can serve frequently requested items at sub- millisecond response times, and enables you to easily scale for higher loads without growing the costlier backend databases. - Database query results caching, persistent session caching, and full-page caching are all popular examples of caching with ElastiCache for Redis. Reference:."
      },
      {
        "id": "14_47",
        "text": "Which of the following is a component of the shared responsibility model managed entirely by AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Patching operating system software"
          },
          {
            "letter": "B",
            "text": "Encrypting data"
          },
          {
            "letter": "C",
            "text": "Enforcing multi-factor authentication"
          },
          {
            "letter": "D",
            "text": "Auditing physical data center assets"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - Of course, Amazon is responsible for auditing physical data center assets and resources since it is the property of Amazon Inc. Customers have no access to physical sites, hence they are not responsible for maintaining physical data center assets."
      },
      {
        "id": "14_48",
        "text": "Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Select TWO.)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "B",
            "text": "AWS Online Tech Talks"
          },
          {
            "letter": "C",
            "text": "AWS Blog"
          },
          {
            "letter": "D",
            "text": "AWS Forums"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - AWS Training and Certification builds your competence, confidence, and credibility through practical cloud skills that help you innovate and build your future. - Our content is built by experts at AWS and updated regularly so you're always learning the latest and keeping your cloud skills fresh. - Amazon offer both digital and classroom training including private on-site training. You can choose to learn online at your own pace or learn from an accredited AWS instructor. - Whether you're just starting out, building on existing IT skills, or sharpening your cloud knowledge, AWS Training and Certification can help you be more effective and do more in the cloud. Reference:."
      },
      {
        "id": "14_49",
        "text": "Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Select TWO.)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon CloudFront distributions"
          },
          {
            "letter": "B",
            "text": "Amazon Route 53"
          },
          {
            "letter": "C",
            "text": "Security Groups"
          },
          {
            "letter": "D",
            "text": "Subnets"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - Amazon Virtual Private Cloud (Amazon VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define. - You have complete control over your virtual networking environment, including selection of your own IP address range, creation of subnets, and configuration of route tables and network gateways. - You can use both IPv4 and IPv6 in your VPC for secure and easy access to resources and applications. - You can easily customize the network configuration for your Amazon VPC. - For example, you can create a public-facing subnet for your web servers that has access to the Internet, and place your backend systems such as databases or application servers in a private-facing subnet with no Internet access. - You can leverage multiple layers of security, including security groups and network access control lists, to help control access to Amazon EC2 instances in each subnet. Reference:."
      },
      {
        "id": "14_50",
        "text": "If each department within a company has its own AWS account, what is one way to enable consolidated billing?",
        "options": [
          {
            "letter": "A",
            "text": "Use AWS Budgets on each account to pay only to budget."
          },
          {
            "letter": "B",
            "text": "Contact AWS Support for a monthly bill."
          },
          {
            "letter": "C",
            "text": "Create an AWS Organization from the payer account and invite the other accounts to join."
          },
          {
            "letter": "D",
            "text": "Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      }
    ]
  },
  {
    "id": 15,
    "name": "Examen Pratique 15",
    "description": "Examen Pratique 15 - 50 questions",
    "questionCount": 50,
    "duration": 90,
    "questions": [
      {
        "id": "15_1",
        "text": "How do customers benefit from Amazon's massive economies of scale?",
        "options": [
          {
            "letter": "A",
            "text": "Periodic price reductions as the result of Amazon's operational efficiencies"
          },
          {
            "letter": "B",
            "text": "New Amazon EC2 instance types providing the latest hardware"
          },
          {
            "letter": "C",
            "text": "The ability to scale up and down when needed"
          },
          {
            "letter": "D",
            "text": "Increased reliability in the underlying hardware of Amazon EC2 instances"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Periodic price reductions as the result of Amazon's operational efficiencies."
      },
      {
        "id": "15_2",
        "text": "Which AWS services can be used to gather information about AWS account activity? (Select TWO.)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon CloudFront"
          },
          {
            "letter": "B",
            "text": "AWS Cloud9"
          },
          {
            "letter": "C",
            "text": "AWS CloudTrail"
          },
          {
            "letter": "D",
            "text": "AWS CloudHSM"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - AWS offers a solution that uses AWS CloudTrail to log account activity, Amazon Kinesis to compute and stream metrics in real-time, and Amazon DynamoDB to durably store the computed data. - Metrics are calculated for create, modify, and delete API calls for more than 60 supported AWS services. - The solution also features a dashboard that visualizes your account activity in real-time. Reference:."
      },
      {
        "id": "15_3",
        "text": "Which of the following common IT tasks can AWS cover to free up company IT resources? (Select TWO.)",
        "options": [
          {
            "letter": "A",
            "text": "Patching databases software"
          },
          {
            "letter": "B",
            "text": "Testing application releases"
          },
          {
            "letter": "C",
            "text": "Backing up databases"
          },
          {
            "letter": "D",
            "text": "Creating database schema"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Patching databases software."
      },
      {
        "id": "15_4",
        "text": "In which scenario should Amazon EC2 Spot Instances be used?",
        "options": [
          {
            "letter": "A",
            "text": "A company wants to move its main website to AWS from an on-premises web server."
          },
          {
            "letter": "B",
            "text": "A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime."
          },
          {
            "letter": "C",
            "text": "A company's heavily used legacy database is currently running on-premises."
          },
          {
            "letter": "D",
            "text": "A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "15_5",
        "text": "Which AWS feature should a customer leverage to achieve high availability of an application?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "B",
            "text": "Availability Zones"
          },
          {
            "letter": "C",
            "text": "Data centers"
          },
          {
            "letter": "D",
            "text": "Amazon Virtual Private Cloud (Amazon VPC)"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - This is to achieve High Availability for any web application (in this case SwiftCode) deployed in AWS. - The following features will be present: - High availability across multiple instances/multiple availability zones. - Auto Scaling of instances (scale up and scale down) based on number of requests coming in - Additional Security to the instances/database that are in production - No impact to end users during newer version of code deployment - No Impact during patching the instances."
      },
      {
        "id": "15_6",
        "text": "Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?",
        "options": [
          {
            "letter": "A",
            "text": "Enterprise"
          },
          {
            "letter": "B",
            "text": "Business"
          },
          {
            "letter": "C",
            "text": "Developer"
          },
          {
            "letter": "D",
            "text": "Basic"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "15_7",
        "text": "Which AWS service can serve a static website?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon S3"
          },
          {
            "letter": "B",
            "text": "Amazon Route 53"
          },
          {
            "letter": "C",
            "text": "Amazon QuickSight"
          },
          {
            "letter": "D",
            "text": "AWS X-Ray"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - You can host a static website on Amazon Simple Storage Service (Amazon S3). On a static website, individual webpages include static content. - They might also contain client-side scripts. By contrast, a dynamic website relies on server-side processing, including server-side scripts such as PHP, JSP, or ASP.NET. Amazon S3 does not support server-side scripting. Reference:."
      },
      {
        "id": "15_8",
        "text": "How does AWS shorten the time to provision IT resources?",
        "options": [
          {
            "letter": "A",
            "text": "It supplies an online IT ticketing platform for resource requests."
          },
          {
            "letter": "B",
            "text": "It supports automatic code validation services."
          },
          {
            "letter": "C",
            "text": "It provides the ability to programmatically provision existing resources."
          },
          {
            "letter": "D",
            "text": "It automates the resource request process from a company's IT vendor list."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. It provides the ability to programmatically provision existing resources.."
      },
      {
        "id": "15_9",
        "text": "What can AWS edge locations be used for? (Select TWO.)",
        "options": [
          {
            "letter": "A",
            "text": "Hosting applications"
          },
          {
            "letter": "B",
            "text": "Delivering content closer to users"
          },
          {
            "letter": "C",
            "text": "Running NoSQL database caching services"
          },
          {
            "letter": "D",
            "text": "Reducing traffic on the server by caching responses"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - CloudFront delivers your content through a worldwide network of data centers called edge locations. When a user requests content that you're serving with CloudFront, the user is routed to the edge location that provides the lowest latency (time delay), so that content is delivered with the best possible performance. Reference:."
      },
      {
        "id": "15_10",
        "text": "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
        "options": [
          {
            "letter": "A",
            "text": "A public and private key-pair"
          },
          {
            "letter": "B",
            "text": "Amazon Inspector"
          },
          {
            "letter": "C",
            "text": "AWS Identity and Access Management (IAM) policies"
          },
          {
            "letter": "D",
            "text": "Security Groups"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - To allow users to perform S3 actions on the bucket from the VPC endpoints or IP addresses, you must explicitly grant those user-level permissions. - You can grant user-level permissions on either an AWS Identity and Access Management (IAM) policy or another statement in the bucket policy. Reference:."
      },
      {
        "id": "15_11",
        "text": "A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?",
        "options": [
          {
            "letter": "A",
            "text": "Think parallel"
          },
          {
            "letter": "B",
            "text": "Implement elasticity"
          },
          {
            "letter": "C",
            "text": "Decouple your components"
          },
          {
            "letter": "D",
            "text": "Design for failure"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "15_12",
        "text": "Which of the following tasks is the responsibility of AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Encrypting client-side data"
          },
          {
            "letter": "B",
            "text": "Configuring AWS Identity and Access Management (IAM) roles"
          },
          {
            "letter": "C",
            "text": "Securing the Amazon EC2 hypervisor"
          },
          {
            "letter": "D",
            "text": "Setting user password policies"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - In EC2, the AWS IaaS offering, everything from the hypervisor layer down is AWS's responsibility. - A customer's poorly coded applications, misconfigured operating systems, or insecure firewall settings will not affect the hypervisor, it will only affect the customer's virtual machines running on that hypervisor. Reference: - the-cloud/."
      },
      {
        "id": "15_13",
        "text": "One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:",
        "options": [
          {
            "letter": "A",
            "text": "the ability to bid for a lower hourly cost."
          },
          {
            "letter": "B",
            "text": "paying a daily rate regardless of time used."
          },
          {
            "letter": "C",
            "text": "paying only for time used."
          },
          {
            "letter": "D",
            "text": "pre-paying for instances and paying a lower hourly rate."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - On-Demand Capacity Reservations are priced exactly the same as their equivalent (On-Demand) instance usage. - If a Capacity Reservation is fully utilized, you only pay for instance usage and nothing towards the Capacity Reservation - If a Capacity Reservation is partially utilized, you pay for the instance usage and for the unused portion of the Capacity Reservation. Reference:."
      },
      {
        "id": "15_14",
        "text": "An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Well-Architected Framework documentation"
          },
          {
            "letter": "B",
            "text": "Amazon CloudFront"
          },
          {
            "letter": "C",
            "text": "AWS CodeCommit"
          },
          {
            "letter": "D",
            "text": "AWS Quick Start reference deployments"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - Quick Starts are built by AWS solutions architects and partners to help you deploy popular technologies on AWS, based on AWS best practices for security and high availability. - These accelerators reduce hundreds of manual procedures into just a few steps, so you can build your production environment quickly and start using it immediately. Reference:."
      },
      {
        "id": "15_15",
        "text": "Which of the following services is in the category of AWS serverless platform?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EMR"
          },
          {
            "letter": "B",
            "text": "Elastic Load Balancing"
          },
          {
            "letter": "C",
            "text": "AWS Lambda"
          },
          {
            "letter": "D",
            "text": "AWS Mobile Hub"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - AWS provides a set of fully managed services that you can use to build and run serverless applications. - Serverless applications don't require provisioning, maintaining, and administering servers for backend components such as compute, databases, storage, stream processing, message queueing, and more. - You also no longer need to worry about ensuring application fault tolerance and availability. - Instead, AWS handles all of these capabilities for you. Serverless platform includes: AWS lambda, Amazon S3, DynamoDB, API gateway, Amazon SNS, AWS step functions, Amazon kinesis and developing tools and services. Reference:."
      },
      {
        "id": "15_16",
        "text": "Which services are parts of the AWS serverless platform?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EC2, Amazon S3, Amazon Athena"
          },
          {
            "letter": "B",
            "text": "Amazon Kinesis, Amazon SQS, Amazon EMR"
          },
          {
            "letter": "C",
            "text": "AWS Step Functions, Amazon DynamoDB, Amazon SNS"
          },
          {
            "letter": "D",
            "text": "Amazon Athena, Amazon Cognito, Amazon EC2"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - AWS provides a set of fully managed services that you can use to build and run serverless applications. - Serverless applications don't require provisioning, maintaining, and administering servers for backend components such as compute, databases, storage, stream processing, message queueing, and more. You also no longer need to worry about ensuring application fault tolerance and availability. - Instead, AWS handles all of these capabilities for you. - Serverless platform includes: AWS lambda, Amazon S3, DynamoDB, API gateway, Amazon SNS, AWS step functions, Amazon kinesis and developing tools and services. Reference:."
      },
      {
        "id": "15_17",
        "text": "Under the shared responsibility model, which of the following is a shared control between a customer and AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Physical controls"
          },
          {
            "letter": "B",
            "text": "Patch management"
          },
          {
            "letter": "C",
            "text": "Zone security"
          },
          {
            "letter": "D",
            "text": "Data center auditing"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - Shared Controls Controls which apply to both the infrastructure layer and customer layers, but in completely separate contexts or perspectives. - In a shared control, AWS provides the requirements for the infrastructure and the customer must provide their own control implementation within their use of AWS services. - Examples include: - Patch Management AWS is responsible for patching and fixing flaws within the infrastructure, but customers are responsible for patching their guest OS and applications. - Configuration Management AWS maintains the configuration of its infrastructure devices, but a customer is responsible for configuring their own guest operating systems, databases, and applications. - Awareness & Training AWS trains AWS employees, but a customer must train their own employees. - Customer Specific Controls which are solely the responsibility of the customer based on the application they are deploying within AWS services. - Service and Communications Protection or Zone Security which may require a customer to route or zone data within specific security environments. Reference:."
      },
      {
        "id": "15_18",
        "text": "What can AWS edge locations be used for? (Select TWO.)",
        "options": [
          {
            "letter": "A",
            "text": "Hosting applications"
          },
          {
            "letter": "B",
            "text": "Delivering content closer to users"
          },
          {
            "letter": "C",
            "text": "Running NoSQL database caching services"
          },
          {
            "letter": "D",
            "text": "Reducing traffic on the server by caching responses"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - CloudFront delivers your content through a worldwide network of data centers called edge locations. - When a user requests content that you're serving with CloudFront, the user is routed to the edge location that provides the lowest latency (time delay), so that content is delivered with the best possible performance. Reference:."
      },
      {
        "id": "15_19",
        "text": "What technology enables compute capacity to adjust as loads change?",
        "options": [
          {
            "letter": "A",
            "text": "Load balancing"
          },
          {
            "letter": "B",
            "text": "Automatic failover"
          },
          {
            "letter": "C",
            "text": "Round robin"
          },
          {
            "letter": "D",
            "text": "Auto Scaling"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - AWS Auto Scaling monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost. - Using AWS Auto Scaling, it's easy to setup application scaling for multiple resources across multiple services in minutes. - The service provides a simple, powerful user interface that lets you build scaling plans for resources including Amazon EC2 instances and Spot Fleets, Amazon ECS tasks, Amazon DynamoDB tables and indexes, and Amazon Aurora Replicas. - AWS Auto Scaling makes scaling simple with recommendations that allow you to optimize performance, costs, or balance between them. - If you're already using Amazon EC2 Auto Scaling to dynamically scale your Amazon EC2 instances, you can now combine it with AWS Auto Scaling to scale additional resources for other AWS services. - With AWS Auto Scaling, your applications always have the right resources at the right time. Reference:."
      },
      {
        "id": "15_20",
        "text": "Which AWS services are defined as global instead of regional? (Select TWO.)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Route 53"
          },
          {
            "letter": "B",
            "text": "Amazon EC2"
          },
          {
            "letter": "C",
            "text": "Amazon S3"
          },
          {
            "letter": "D",
            "text": "Amazon CloudFront"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "15_21",
        "text": "Which AWS service would you use to obtain compliance reports and certificates?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Artifact"
          },
          {
            "letter": "B",
            "text": "AWS Lambda"
          },
          {
            "letter": "C",
            "text": "Amazon Inspector"
          },
          {
            "letter": "D",
            "text": "AWS Certificate Manager"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - AWS Artifact is your go-to, central resource for compliance-related information that matters to you. - It provides on-demand access to AWS' security and compliance reports and select online agreements. - Reports available in AWS Artifact include our Service Organization Control (SOC) reports, Payment Card Industry (PCI) reports, and certifications from accreditation bodies across geographies and compliance verticals that validate the implementation and operating effectiveness of AWS security controls. - Agreements available in AWS Artifact include the Business Associate Addendum (BAA) and the Nondisclosure Agreement (NDA). Reference:."
      },
      {
        "id": "15_22",
        "text": "Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO.)",
        "options": [
          {
            "letter": "A",
            "text": "Ensuring that application data is encrypted at rest"
          },
          {
            "letter": "B",
            "text": "Ensuring that AWS NTP servers are set to the correct time"
          },
          {
            "letter": "C",
            "text": "Ensuring that users have received security training in the use of AWS services"
          },
          {
            "letter": "D",
            "text": "Ensuring that access to data centers is restricted"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "15_23",
        "text": "Which AWS service can be used to manually launch instances based on resource requirements?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EBS"
          },
          {
            "letter": "B",
            "text": "Amazon S3"
          },
          {
            "letter": "C",
            "text": "Amazon EC2"
          },
          {
            "letter": "D",
            "text": "Amazon ECS"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Amazon EC2."
      },
      {
        "id": "15_24",
        "text": "A company is migrating an application that is running non-interruptible workloads for a three-year time frame. Which pricing construct would provide the MOST cost-effective solution?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EC2 Spot Instances"
          },
          {
            "letter": "B",
            "text": "Amazon EC2 Dedicated Instances"
          },
          {
            "letter": "C",
            "text": "Amazon EC2 On-Demand Instances"
          },
          {
            "letter": "D",
            "text": "Amazon EC2 Reserved Instances"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Amazon EC2 Reserved Instances."
      },
      {
        "id": "15_25",
        "text": "The financial benefits of using AWS are: (Select TWO.)",
        "options": [
          {
            "letter": "A",
            "text": "reduced Total Cost of Ownership (TCO)."
          },
          {
            "letter": "B",
            "text": "increased capital expenditure (capex)."
          },
          {
            "letter": "C",
            "text": "reduced operational expenditure (opex)."
          },
          {
            "letter": "D",
            "text": "deferred payment plans for startups."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. reduced Total Cost of Ownership (TCO).."
      },
      {
        "id": "15_26",
        "text": "Which of the following is entirely the responsibility of AWS, according to the AWS shared responsibility model?",
        "options": [
          {
            "letter": "A",
            "text": "Patching of the guest operating system"
          },
          {
            "letter": "B",
            "text": "Security awareness and training"
          },
          {
            "letter": "C",
            "text": "Physical and environmental controls"
          },
          {
            "letter": "D",
            "text": "Development of an IAM password policy"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Physical and environmental controls."
      },
      {
        "id": "15_27",
        "text": "Which AWS service allows companies to connect an Amazon VPC to an on-premises data center? (Select TWO)",
        "options": [
          {
            "letter": "A",
            "text": "AWS VPN"
          },
          {
            "letter": "B",
            "text": "Amazon Redshift"
          },
          {
            "letter": "C",
            "text": "API Gateway"
          },
          {
            "letter": "D",
            "text": "Amazon Direct Connect"
          }
        ],
        "correctAnswers": [
          "A",
          "D"
        ],
        "explanation": ": - AWS Direct Connect enables you to securely connect your AWS environment to your on-premises data center or office location over a standard 1 gigabit or 10 gigabit Ethernet fiber-optic connection. - AWS Direct Connect offers dedicated high speed, low latency connection, which bypasses internet service providers in your network path. - An AWS Direct Connect location provides access to Amazon Web Services in the region it is associated with, as well as access to other US regions. - AWS Direct Connect allows you to logically partition the fiber-optic connections into multiple logical connections called Virtual Local Area Networks (VLAN). - You can take advantage of these logical connections to improve security, differentiate traffic, and achieve compliance requirements. Reference:."
      },
      {
        "id": "15_28",
        "text": "A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Elastic Compute Cloud (Amazon EC2)"
          },
          {
            "letter": "B",
            "text": "AWS Lambda"
          },
          {
            "letter": "C",
            "text": "Amazon DynamoDB"
          },
          {
            "letter": "D",
            "text": "AWS CodeCommit"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - AWS Lambda is an integral part of coding on AWS. It reduces physical compute footprint by utilizing aws cloud services to run code."
      },
      {
        "id": "15_29",
        "text": "Which AWS service provides alerts when an AWS event may impact a company's AWS resources?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Personal Health Dashboard"
          },
          {
            "letter": "B",
            "text": "AWS Service Health Dashboard"
          },
          {
            "letter": "C",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "D",
            "text": "AWS Infrastructure Event Management"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - AWS Personal Health Dashboard provides alerts and remediation guidance when AWS is experiencing events that may impact you. - While the Service Health Dashboard displays the general status of AWS services, Personal Health Dashboard gives you a personalized view into the performance and availability of the AWS services underlying your AWS resources. Reference:."
      },
      {
        "id": "15_30",
        "text": "Which of the following are categories of AWS Trusted Advisor? (Select TWO.)",
        "options": [
          {
            "letter": "A",
            "text": "Fault Tolerance"
          },
          {
            "letter": "B",
            "text": "Instance Usage"
          },
          {
            "letter": "C",
            "text": "Infrastructure"
          },
          {
            "letter": "D",
            "text": "Performance"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - Like your customized cloud expert, AWS Trusted Advisor analyzes your AWS environment and provides best practice recommendations in five categories: cost optimization, performance, security, fault tolerance and service limits. Reference:."
      },
      {
        "id": "15_31",
        "text": "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking? - A. Amazon RDS",
        "options": [
          {
            "letter": "B",
            "text": "Amazon EC2"
          },
          {
            "letter": "C",
            "text": "Amazon ElastiCache"
          },
          {
            "letter": "D",
            "text": "AWS Fargate"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - The customer is responsible for managing, support, patching and control of the guest operating system and AWS services provided like EC2. Reference:."
      },
      {
        "id": "15_32",
        "text": "A company will be moving from an on-premises data center to the AWS Cloud. What would be one financial difference after the move?",
        "options": [
          {
            "letter": "A",
            "text": "Moving from variable operational expense (opex) to upfront capital expense (capex)."
          },
          {
            "letter": "B",
            "text": "Moving from upfront capital expense (capex) to variable capital expense (capex)."
          },
          {
            "letter": "C",
            "text": "Moving from upfront capital expense (capex) to variable operational expense (opex)."
          },
          {
            "letter": "D",
            "text": "Elimination of upfront capital expense (capex) and elimination of variable operational expense (opex)"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Moving from upfront capital expense (capex) to variable operational expense (opex).."
      },
      {
        "id": "15_33",
        "text": "How should a customer forecast the future costs for running a new web application?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Aurora Backtrack"
          },
          {
            "letter": "B",
            "text": "Amazon CloudWatch Billing Alarms"
          },
          {
            "letter": "C",
            "text": "AWS Simple Monthly Calculator"
          },
          {
            "letter": "D",
            "text": "AWS Cost and Usage report"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - You can use Cost explorer which is part of Cost and Usage report to forecast future costs of running an application. Reference:."
      },
      {
        "id": "15_34",
        "text": "Which is the MINIMUM AWS Support plan that provides technical support through phone calls?",
        "options": [
          {
            "letter": "A",
            "text": "Enterprise"
          },
          {
            "letter": "B",
            "text": "Business"
          },
          {
            "letter": "C",
            "text": "Developer"
          },
          {
            "letter": "D",
            "text": "Basic"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "15_35",
        "text": "According to the AWS shared responsibility model, what is the sole responsibility of AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Application security"
          },
          {
            "letter": "B",
            "text": "Edge location management"
          },
          {
            "letter": "C",
            "text": "Patch management"
          },
          {
            "letter": "D",
            "text": "Client-side data"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - Client-side data, application security is the sole responsibility of the customer. - Patch management is a shared responsibility. That leaves us with edge location management and since this out of the control of the customer, AWS is the one responsible for it. Reference:."
      },
      {
        "id": "15_36",
        "text": "Which AWS IAM feature is used to associate a set of permissions with multiple users?",
        "options": [
          {
            "letter": "A",
            "text": "Multi-factor authentication"
          },
          {
            "letter": "B",
            "text": "Groups"
          },
          {
            "letter": "C",
            "text": "Password policies"
          },
          {
            "letter": "D",
            "text": "Access keys"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - An IAM group is a collection of IAM users. You can use groups to specify permissions for a collection of users, which can make those permissions easier to manage for those users. - For example, you could have a group called Admins and give that group the types of permissions that administrators typically need. Reference:."
      },
      {
        "id": "15_37",
        "text": "Which of the following are benefits of the AWS Cloud? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Unlimited uptime"
          },
          {
            "letter": "B",
            "text": "Elasticity"
          },
          {
            "letter": "C",
            "text": "Agility"
          },
          {
            "letter": "D",
            "text": "Colocation"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - The most celebrated benefit of AWS cloud is elasticity since you can expand the services when you experience more traffic. - Agile developments in AWS Cloud through strategies are day by day becoming more established within the enterprises across the world. - With so much improvement and call for optimization in the cloud, it is necessary that these strategies get established from the ground up within the organizations. - It is highly important as already enterprises have a lot of bequest, politics and hierarchies which act as barriers in their businesses. Reference:."
      },
      {
        "id": "15_38",
        "text": "Which of the following can a customer use to enable single sign-on (SSO) to the AWS Console?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Connect"
          },
          {
            "letter": "B",
            "text": "AWS Directory Service"
          },
          {
            "letter": "C",
            "text": "Amazon Pinpoint"
          },
          {
            "letter": "D",
            "text": "Amazon Rekognition"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - Single sign-on only works when used on a computer that is joined to the AWS Directory Service directory. - It cannot be used on computers that are not joined to the directory. Reference:."
      },
      {
        "id": "15_39",
        "text": "What are the multiple, isolated locations within an AWS Region that are connected by low-latency networks called?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Direct Connects"
          },
          {
            "letter": "B",
            "text": "Amazon VPCs"
          },
          {
            "letter": "C",
            "text": "Edge locations"
          },
          {
            "letter": "D",
            "text": "Availability Zones"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - Each Region is completely independent. Each Availability Zone is isolated, but the Availability Zones in a Region are connected through low-latency links. - A Local Zone is an AWS infrastructure deployment that places select services closer to your end users. - A Local Zone is an extension of a Region that is in a different location from your Region. - It provides a high-bandwidth backbone to the AWS infrastructure and is ideal for latency-sensitive applications, for example machine learning. Reference:."
      },
      {
        "id": "15_40",
        "text": "Which of the following benefits does the AWS Compliance program provide to AWS customers? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "It verifies that hosted workloads are automatically compliant with the controls of supported compliance frameworks."
          },
          {
            "letter": "B",
            "text": "AWS is responsible for the maintenance of common compliance framework documentation."
          },
          {
            "letter": "C",
            "text": "It assures customers that AWS is maintaining physical security and data protection."
          },
          {
            "letter": "D",
            "text": "It ensures the use of compliance frameworks that are being used by other cloud providers."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "15_41",
        "text": "Which of the following services provides on-demand access to AWS compliance reports?",
        "options": [
          {
            "letter": "A",
            "text": "AWS IAM"
          },
          {
            "letter": "B",
            "text": "AWS Artifact"
          },
          {
            "letter": "C",
            "text": "Amazon GuardDuty"
          },
          {
            "letter": "D",
            "text": "AWS KMS"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - AWS Artifact is your go-to, central resource for compliance-related information that matters to you. - It provides on-demand access to AWS' security and compliance reports and select online agreements. - Reports available in AWS Artifact include our Service Organization Control (SOC) reports, Payment Card Industry (PCI) reports, and certifications from accreditation bodies across geographies and compliance verticals that validate the implementation and operating effectiveness of AWS security controls. - Agreements available in AWS Artifact include the Business Associate Addendum (BAA) and the Nondisclosure Agreement (NDA). Reference:."
      },
      {
        "id": "15_42",
        "text": "As part of the AWS shared responsibility model, which of the following operational controls do users fully inherit from AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Security management of data center"
          },
          {
            "letter": "B",
            "text": "Patch management"
          },
          {
            "letter": "C",
            "text": "Configuration management"
          },
          {
            "letter": "D",
            "text": "User and access management"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "15_43",
        "text": "When comparing AWS Cloud with on-premises Total Cost of Ownership, which expenses must be considered? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Software development"
          },
          {
            "letter": "B",
            "text": "Project management"
          },
          {
            "letter": "C",
            "text": "Storage hardware"
          },
          {
            "letter": "D",
            "text": "Physical servers"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "15_44",
        "text": "Under the shared responsibility model, which of the following tasks are the responsibility of the customer? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Maintaining the underlying Amazon EC2 hardware."
          },
          {
            "letter": "B",
            "text": "Managing the VPC network access control lists."
          },
          {
            "letter": "C",
            "text": "Encrypting data in transit and at rest."
          },
          {
            "letter": "D",
            "text": "Replacing failed hard disk drives."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - The hardware related jobs is the prime responsibility of AWS. VPC network access control lists is something a customer has to do himself to secure the applications. - Encrypting data in transit and at rest is a shared responsibility in which AWS plays a part. - All hardware related jobs have nothing to do with the customer. Reference:."
      },
      {
        "id": "15_45",
        "text": "Which scenarios represent the concept of elasticity on AWS? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Scaling the number of Amazon EC2 instances based on traffic."
          },
          {
            "letter": "B",
            "text": "Resizing Amazon RDS instances as business needs change."
          },
          {
            "letter": "C",
            "text": "Automatically directing traffic to less-utilized Amazon EC2 instances."
          },
          {
            "letter": "D",
            "text": "Using AWS compliance documents to accelerate the compliance process."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "15_46",
        "text": "When is it beneficial for a company to use a Spot Instance?",
        "options": [
          {
            "letter": "A",
            "text": "When there is flexibility in when an application needs to run."
          },
          {
            "letter": "B",
            "text": "When there are mission-critical workloads."
          },
          {
            "letter": "C",
            "text": "When dedicated capacity is needed."
          },
          {
            "letter": "D",
            "text": "When an instance should not be stopped."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - The key to understanding spot instances is to look at the way that cloud service providers such as Amazon Web Services (AWS) operate. - Cloud service providers invest in hardware resources and then release those resources (often on a per-hour basis) to subscribers. - One of the problems with this business model, however, is that at any given time, there are likely to be compute resources that are not being utilized. - These resources represent hardware capacity that AWS has paid for but are sitting idle, and not making AWS any money at the moment. - Rather than allowing these computing resources to go to waste, AWS offers them at a substantially discounted rate, with the understanding that if someone needs those resources for running a normal EC2 instance, that instance will take priority over spot instances that are using the hardware resources at a discounted rate. - In fact, spot instances will be stopped if the resources are needed elsewhere. Reference:."
      },
      {
        "id": "15_47",
        "text": "A company is considering moving its on-premises data center to AWS. What factors should be included in doing a Total Cost of Ownership (TCO) analysis? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EC2 instance availability"
          },
          {
            "letter": "B",
            "text": "Power consumption of the data center"
          },
          {
            "letter": "C",
            "text": "Labor costs to replace old servers"
          },
          {
            "letter": "D",
            "text": "Application developer time"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Power consumption of the data center."
      },
      {
        "id": "15_48",
        "text": "How does AWS charge for AWS Lambda?",
        "options": [
          {
            "letter": "A",
            "text": "Users bid on the maximum price they are willing to pay per hour."
          },
          {
            "letter": "B",
            "text": "Users choose a 1-, 3- or 5-year upfront payment term."
          },
          {
            "letter": "C",
            "text": "Users pay for the required permanent storage on a file system or in a database."
          },
          {
            "letter": "D",
            "text": "Users pay based on the number of requests and consumed compute resources."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - AWS Lambda is charging its users by the number of requests for their functions and by the duration, which is the time the code needs to execute. - When code starts running in response to an event, AWS Lambda counts a request. - It will charge the total number of requests across all of the functions used. - Duration is calculated by the time when your code started executing until it returns or until it is terminated, rounded up near to 100ms. - The AWS Lambda pricing depends on the amount of memory that the user used to allocate to the function. Reference:."
      },
      {
        "id": "15_49",
        "text": "What function do security groups serve related Amazon Elastic Compute Cloud (Amazon EC2) instance security?",
        "options": [
          {
            "letter": "A",
            "text": "Act as a virtual firewall for the Amazon EC2 instance."
          },
          {
            "letter": "B",
            "text": "Secure AWS user accounts with AWS identity and Access Management (IAM) policies."
          },
          {
            "letter": "C",
            "text": "Provide DDoS protection with AWS Shield."
          },
          {
            "letter": "D",
            "text": "Use Amazon CloudFront to protect the Amazon EC2 instance."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - AWS Security Groups act like a firewall for your Amazon EC2 instances controlling both inbound and outbound traffic. - When you launch an instance on Amazon EC2, you need to assign it to a particular security group. - After that, you can set up ports and protocols, which remain open for users and computers over the internet. - AWS Security Groups are very flexible. You can use the default security group and still customize it according to your liking (although we don't recommend this practice because groups should be named according to their purpose.) Or you can create a security group that you want for your specific applications. - To do this, you can write the corresponding code or use the Amazon EC2 console to make the process easier. Reference:."
      },
      {
        "id": "15_50",
        "text": "Which disaster recovery scenario offers the lowest probability of down time?",
        "options": [
          {
            "letter": "A",
            "text": "Backup and restore"
          },
          {
            "letter": "B",
            "text": "Pilot light"
          },
          {
            "letter": "C",
            "text": "Warm standby"
          },
          {
            "letter": "D",
            "text": "Multi-site active-active"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - Backup and Restore: a simple, straightforward, cost-effective method that backs up and restores data as needed. - Keep in mind that because none of your data is on standby, this method, while cheap, can be quite time-consuming. - Pilot Light: This method keeps critical applications and data at the ready so that it can be quickly retrieved if needed. - Warm Standby: This method keeps a duplicate version of your business' core elements running on standby at all times, which makes for a little downtime and an almost seamless transition. - Multi-Site Solution: Also known as a Hot Standby, this method fully replicates your company's data/ applications between two or more active locations and splits your traffic/usage between them. - If a disaster strikes, everything is simply rerouted to the unaffected area, which means you'll suffer almost zero downtime. - However, by running two separate environments simultaneously, you will obviously incur much higher costs. Reference:."
      }
    ]
  },
  {
    "id": 16,
    "name": "Examen Pratique 16",
    "description": "Examen Pratique 16 - 50 questions",
    "questionCount": 50,
    "duration": 90,
    "questions": [
      {
        "id": "16_1",
        "text": "What will help a company perform a cost benefit analysis of migrating to the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "Cost Explorer"
          },
          {
            "letter": "B",
            "text": "AWS Total Cost of Ownership (TCO) Calculator"
          },
          {
            "letter": "C",
            "text": "AWS Simple Monthly Calculator"
          },
          {
            "letter": "D",
            "text": "AWS Trusted Advisor"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - AWS TCO calculators allow you to estimate the cost savings when using AWS and provide a detailed set of reports that can be used in executive presentations. - The calculators also give you the option to modify assumptions that best meet your business needs. Reference:."
      },
      {
        "id": "16_2",
        "text": "Which of the following provides the ability to share the cost benefits of Reserved Instances across AWS accounts?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Cost Explorer between AWS accounts"
          },
          {
            "letter": "B",
            "text": "Linked accounts and consolidated billing"
          },
          {
            "letter": "C",
            "text": "Amazon Elastic Compute Cloud (Amazon EC2) Reserved Instance Utilization Report"
          },
          {
            "letter": "D",
            "text": "Amazon EC2 Instance Usage Report between AWS accounts"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - The way that Reserved Instance discounts apply to accounts in an organization's consolidated billing family depends on whether Reserved Instance sharing is turned on or off for the account. - By default, Reserved Instance sharing for all accounts in an organization is turned on. - You can change this setting by Turning Off Reserved Instance Sharing for an account. - The capacity reservation for a Reserved Instance applies only to the account the Reserved Instance was purchased on, regardless of whether Reserved Instance sharing is turned on or off. Reference:."
      },
      {
        "id": "16_3",
        "text": "A company has multiple AWS accounts and wants to simplify and consolidate its billing process. Which AWS service will achieve this?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Cost and Usage Reports"
          },
          {
            "letter": "B",
            "text": "AWS Organizations"
          },
          {
            "letter": "C",
            "text": "AWS Cost Explorer"
          },
          {
            "letter": "D",
            "text": "AWS Budgets"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - You can use the consolidated billing feature in AWS Organizations to consolidate billing and payment for multiple AWS accounts or multiple Amazon Internet Services Pvt. Ltd (AISPL) accounts. - Every organization in AWS Organizations has a master (payer) account that pays the charges of all the member (linked) accounts. Reference:."
      },
      {
        "id": "16_4",
        "text": "A company is designing an application hosted in a single AWS Region serving end-users spread across the world. The company wants to provide the end-users low latency access to the application data. Which of the following services will help fulfill this requirement?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon CloudFront"
          },
          {
            "letter": "B",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "C",
            "text": "Amazon Route 53 global DNS"
          },
          {
            "letter": "D",
            "text": "Amazon Simple Storage Service (Amazon S3) transfer acceleration"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - Amazon CloudFront is a content delivery network (CDN) service that distributes data from multiple locations worldwide, providing low-latency access to end-users."
      },
      {
        "id": "16_5",
        "text": "Which of the following deployment models enables customers to fully trade their capital IT expenses for operational expenses?",
        "options": [
          {
            "letter": "A",
            "text": "On-premises"
          },
          {
            "letter": "B",
            "text": "Hybrid"
          },
          {
            "letter": "C",
            "text": "Cloud"
          },
          {
            "letter": "D",
            "text": "Platform as a service"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - The cloud allows you to trade capital expenses (such as data centers and physical servers) for variable expenses, and only pay for IT as you consume it. - Plus, the variable expenses are much lower than what you would pay to do it yourself because of the economies of scale. Reference:."
      },
      {
        "id": "16_6",
        "text": "How is asset management on AWS easier than asset management in a physical data center?",
        "options": [
          {
            "letter": "A",
            "text": "AWS provides a Configuration Management Database that users can maintain."
          },
          {
            "letter": "B",
            "text": "AWS performs infrastructure discovery scans on the customer's behalf."
          },
          {
            "letter": "C",
            "text": "Amazon EC2 automatically generates an asset report and places it in the customer's specified Amazon S3 bucket."
          },
          {
            "letter": "D",
            "text": "Users can gather asset metadata reliably with a few API calls."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - AWS assets are centrally managed through an inventory management system that stores and tracks owner, location, status, maintenance, and descriptive information for AWS-owned assets. - Following procurement, assets are scanned and tracked, and assets undergoing maintenance are checked and monitored for ownership, status, and resolution. Reference:."
      },
      {
        "id": "16_7",
        "text": "What feature of Amazon RDS helps to create globally redundant databases?",
        "options": [
          {
            "letter": "A",
            "text": "Snapshots"
          },
          {
            "letter": "B",
            "text": "Automatic patching and updating"
          },
          {
            "letter": "C",
            "text": "Cross-Region read replicas"
          },
          {
            "letter": "D",
            "text": "Provisioned IOPS"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "16_8",
        "text": "Using AWS Identity and Access Management (IAM) to grant access only to the resources needed to perform a task is a concept known as:",
        "options": [
          {
            "letter": "A",
            "text": "restricted access."
          },
          {
            "letter": "B",
            "text": "as-needed access."
          },
          {
            "letter": "C",
            "text": "least privilege access."
          },
          {
            "letter": "D",
            "text": "token access."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - When you create IAM policies, follow the standard security advice of granting least privilege, or granting only the permissions required to perform a task. - Determine what users (and roles) need to do and then craft policies that allow them to perform only those tasks. Reference:."
      },
      {
        "id": "16_9",
        "text": "Which methods can be used to identify AWS costs by departments? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Enable multi-factor authentication for the AWS account root user."
          },
          {
            "letter": "B",
            "text": "Create separate accounts for each department."
          },
          {
            "letter": "C",
            "text": "Use Reserved Instances whenever possible."
          },
          {
            "letter": "D",
            "text": "Use tags to associate each instance with a particular department."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - Tags are key-value pairs that allow you to organize your AWS resources into groups. You can use tags to: - Visualize information about tagged resources in one place, in conjunction with Resource Groups. - View billing information using Cost Explorer and the AWS Cost and Usage report. - Send notifications about spending limits using AWS Budgets. - Use logical groupings of your resources that make sense for your infrastructure or business. - For example, you could organize your resources by: - Project - Cost center - Development environment - Application - Department Reference:."
      },
      {
        "id": "16_10",
        "text": "Under the AWS shared responsibility model, customer responsibilities include which one of the following?",
        "options": [
          {
            "letter": "A",
            "text": "Securing the hardware, software, facilities, and networks that run all products and services."
          },
          {
            "letter": "B",
            "text": "Providing certificates, reports, and other documentation directly to AWS customers under NDA."
          },
          {
            "letter": "C",
            "text": "Configuring the operating system, network, and firewall."
          },
          {
            "letter": "D",
            "text": "Obtaining industry certifications and independent third-party attestations."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "16_11",
        "text": "Which managed AWS service provides real-time guidance on AWS security best practices?",
        "options": [
          {
            "letter": "A",
            "text": "AWS X-Ray"
          },
          {
            "letter": "B",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "C",
            "text": "Amazon CloudWatch"
          },
          {
            "letter": "D",
            "text": "AWS Systems Manager"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - AWS offers premium services such as AWS Trusted Advisor, which provides real-time guidance to help you reduce cost, increase performance, and improve security. Reference:."
      },
      {
        "id": "16_12",
        "text": "Which feature adds elasticity to Amazon EC2 instances to handle the changing demand for workloads?",
        "options": [
          {
            "letter": "A",
            "text": "Resource groups"
          },
          {
            "letter": "B",
            "text": "Lifecycle policies"
          },
          {
            "letter": "C",
            "text": "Application Load Balancer"
          },
          {
            "letter": "D",
            "text": "Amazon EC2 Auto Scaling"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - Support for monitoring the health of each service independently, as health checks are defined at the target group level and many CloudWatch metrics are reported at the target group level. - Attaching a target group to an Auto Scaling group enables you to scale each service dynamically based on demand. Reference:."
      },
      {
        "id": "16_13",
        "text": "Under the AWS shared responsibility model, customers are responsible for which aspects of security in the cloud? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Visualization management"
          },
          {
            "letter": "B",
            "text": "Hardware management"
          },
          {
            "letter": "C",
            "text": "Encryption management"
          },
          {
            "letter": "D",
            "text": "Facilities management"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - With the basic Cloud infrastructure secured and maintained by AWS, the responsibility for what goes into the cloud falls on you. This covers both client and server side encryption and network traffic protection, security of the operating system, network, and firewall configuration, followed by application security and identity and access management. - Firewall configuration remains the responsibility of the end user, which integrates at the platform and application management level. For example, RDS utilizes security groups, which you would be responsible for configuring and implementing. Reference:."
      },
      {
        "id": "16_14",
        "text": "Which AWS hybrid storage service enables on-premises applications to seamlessly use AWS Cloud storage through standard file-storage protocols?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "B",
            "text": "AWS Snowball"
          },
          {
            "letter": "C",
            "text": "AWS Storage Gateway"
          },
          {
            "letter": "D",
            "text": "AWS Snowball Edge"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - The AWS Storage Gateway service enables hybrid cloud storage between on-premises environments and the AWS Cloud. - It seamlessly integrates on-premises enterprise applications and workflows with Amazon's block and object cloud storage services through industry standard storage protocols. - It provides low-latency performance by caching frequently accessed data on premises, while storing data securely and durably in Amazon cloud storage services. - It provides an optimized data transfer mechanism and bandwidth management, which tolerates unreliable networks and minimizes the amount of data being transferred. - It brings the security, manageability, durability, and scalability of AWS to existing enterprise environments through native integration with AWS encryption, identity management, monitoring, and storage services. Typical use cases include backup and archiving, disaster recovery, moving data to S3 for in-cloud workloads, and tiered storage. Reference:."
      },
      {
        "id": "16_15",
        "text": "What is a responsibility of AWS in the shared responsibility model?",
        "options": [
          {
            "letter": "A",
            "text": "Updating the network ACLs to block traffic to vulnerable ports."
          },
          {
            "letter": "B",
            "text": "Patching operating systems running on Amazon EC2 instances."
          },
          {
            "letter": "C",
            "text": "Updating the firmware on the underlying EC2 hosts."
          },
          {
            "letter": "D",
            "text": "Updating the security group rules to block traffic to the vulnerable ports."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "16_16",
        "text": "Which architectural principle is used when deploying an Amazon Relational Database Service (Amazon RDS) instance in Multiple Availability Zone mode?",
        "options": [
          {
            "letter": "A",
            "text": "Implement loose coupling."
          },
          {
            "letter": "B",
            "text": "Design for failure."
          },
          {
            "letter": "C",
            "text": "Automate everything that can be automated."
          },
          {
            "letter": "D",
            "text": "Use services, not servers."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - Amazon RDS Multi-AZ deployments provide enhanced availability and durability for Database (DB) Instances, making them a natural fit for production database workloads. - When you provision a Multi-AZ DB Instance, Amazon RDS automatically creates a primary DB Instance and synchronously replicates the data to a standby instance in a different Availability Zone (AZ). - Each AZ runs on its own physically distinct, independent infrastructure, and is engineered to be highly reliable. - In case of an infrastructure failure, Amazon RDS performs an automatic failover to the standby (or to a read replica in the case of Amazon Aurora), so that you can resume database operations as soon as the failover is complete. - Since the endpoint for your DB Instance remains the same after a failover, your application can resume database operation without the need for manual administrative intervention. Reference:."
      },
      {
        "id": "16_17",
        "text": "What does it mean to grant least privilege to AWS IAM users?",
        "options": [
          {
            "letter": "A",
            "text": "It is granting permissions to a single user only."
          },
          {
            "letter": "B",
            "text": "It is granting permissions using AWS IAM policies only."
          },
          {
            "letter": "C",
            "text": "It is granting AdministratorAccess policy permissions to trustworthy users."
          },
          {
            "letter": "D",
            "text": "It is granting only the permissions required to perform a given task."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - When you create IAM policies, follow the standard security advice of granting least privilege, or granting only the permissions required to perform a task. - Determine what users (and roles) need to do and then craft policies that allow them to perform only those tasks. Reference:."
      },
      {
        "id": "16_18",
        "text": "What is a benefit of loose coupling as a principle of cloud architecture design?",
        "options": [
          {
            "letter": "A",
            "text": "It facilitates low-latency request handling."
          },
          {
            "letter": "B",
            "text": "It allows applications to have dependent workflows."
          },
          {
            "letter": "C",
            "text": "It prevents cascading failures between different components."
          },
          {
            "letter": "D",
            "text": "It allows companies to focus on their physical data center operations."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - IT systems should ideally be designed in a way that reduces inter-dependencies. - Your components need to be loosely coupled to avoid changes or failure in one of the components from affecting others. - Your infrastructure also needs to have well defined interfaces that allow the various components to interact with each other only through specific, technology-agnostic interfaces. - Modifying any underlying operations without affecting other components should be made possible. Reference:."
      },
      {
        "id": "16_19",
        "text": "A director has been tasked with investigating hybrid cloud architecture. The company currently accesses AWS over the public internet.\nWhich service will facilitate private hybrid connectivity?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Virtual Private Cloud (Amazon VPC) NAT Gateway"
          },
          {
            "letter": "B",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "C",
            "text": "Amazon Simple Storage Service (Amazon S3) Transfer Acceleration"
          },
          {
            "letter": "D",
            "text": "AWS Web Application Firewall (AWS WAF)"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - Amazon VPC provides multiple network connectivity options for you to leverage depending on your current network designs and requirements. - These connectivity options include leveraging either the internet or an AWS Direct Connect connection as the network backbone and terminating the connection into either AWS or user-managed network endpoints. - Additionally, with AWS, you can choose how network routing is delivered between Amazon VPC and your networks, leveraging either AWS or user-managed network equipment and routes. Reference: introduction.html."
      },
      {
        "id": "16_20",
        "text": "A company's web application currently has tight dependencies on underlying components, so when one component fails the entire web application fails. Applying which AWS Cloud design principle will address the current design issue?",
        "options": [
          {
            "letter": "A",
            "text": "Implementing elasticity, enabling the application to scale up or scale down as demand changes."
          },
          {
            "letter": "B",
            "text": "Enabling several EC2 instances to run in parallel to achieve better performance."
          },
          {
            "letter": "C",
            "text": "Focusing on decoupling components by isolating them and ensuring individual components can function when other components fail."
          },
          {
            "letter": "D",
            "text": "Doubling EC2 computing resources to increase system fault tolerance."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Focusing on decoupling components by isolating them and ensuring individual components can function when other components fail.."
      },
      {
        "id": "16_21",
        "text": "How can a customer increase security to AWS account logons? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Configure AWS Certificate Manager"
          },
          {
            "letter": "B",
            "text": "Enable Multi-Factor Authentication (MFA)"
          },
          {
            "letter": "C",
            "text": "Use Amazon Cognito to manage access"
          },
          {
            "letter": "D",
            "text": "Configure a strong password policy"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - Your root account should always be protected by Multi-Factor Authentication (MFA). - This additional layer of security helps protect against unauthorized logins to your account by requiring two factors: something you know (a password) and something you have (for example, an MFA device). - AWS supports virtual and hardware MFA devices and U2F security keys. - Cognito can be used as an Identity Provider (IdP), where it stores and maintains users and credentials securely for your applications, or it can be integrated with OpenID Connect, SAML, and other popular web identity providers like Amazon.com. - Using Amazon Cognito, you can generate temporary access credentials for your clients to access AWS services, eliminating the need to store long-term credentials in client applications. Reference:."
      },
      {
        "id": "16_22",
        "text": "What AWS service would be used to centrally manage AWS access across multiple accounts?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Service Catalog"
          },
          {
            "letter": "B",
            "text": "AWS Config"
          },
          {
            "letter": "C",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "D",
            "text": "AWS Organizations"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - To improve control over your AWS environment, you can use AWS Organizations to create groups of accounts, and then attach policies to a group to ensure the correct policies are applied across the accounts without requiring custom scripts and manual processes. Reference:."
      },
      {
        "id": "16_23",
        "text": "Which AWS service can a customer use to set up an alert notification when the account is approaching a particular dollar amount?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Cost and Usage reports"
          },
          {
            "letter": "B",
            "text": "AWS Budgets"
          },
          {
            "letter": "C",
            "text": "AWS Cost Explorer"
          },
          {
            "letter": "D",
            "text": "AWS Trusted Advisor"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "16_24",
        "text": "What can users access from AWS Artifact?",
        "options": [
          {
            "letter": "A",
            "text": "AWS security and compliance documents"
          },
          {
            "letter": "B",
            "text": "A download of configuration management details for all AWS resources"
          },
          {
            "letter": "C",
            "text": "Training materials for AWS services"
          },
          {
            "letter": "D",
            "text": "A security assessment of the applications deployed in the AWS Cloud"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - You can use AWS Artifact Reports to download AWS security and compliance documents, such as AWS ISO certifications, Payment Card Industry (PCI), and System and Organization Control (SOC) reports. Reference:."
      },
      {
        "id": "16_25",
        "text": "Which is the MINIMUM AWS Support plan that provides designated Technical Account Managers?",
        "options": [
          {
            "letter": "A",
            "text": "Enterprise"
          },
          {
            "letter": "B",
            "text": "Business"
          },
          {
            "letter": "C",
            "text": "Developer"
          },
          {
            "letter": "D",
            "text": "Basic"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "16_26",
        "text": "Which of the following is an AWS Well-Architected Framework design principle related to reliability?",
        "options": [
          {
            "letter": "A",
            "text": "Deployment to a single Availability Zone"
          },
          {
            "letter": "B",
            "text": "Ability to recover from failure"
          },
          {
            "letter": "C",
            "text": "Design for cost optimization"
          },
          {
            "letter": "D",
            "text": "Perform operations as code"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "16_27",
        "text": "Which type of AWS storage is ephemeral and is deleted when an instance is stopped or terminated?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EBS"
          },
          {
            "letter": "B",
            "text": "Amazon EC2 instance store"
          },
          {
            "letter": "C",
            "text": "Amazon EFS"
          },
          {
            "letter": "D",
            "text": "Amazon S3"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - When you stop or terminate an instance, every block of storage in the instance store is reset. - Therefore, your data cannot be accessed through the instance store of another instance. Reference:."
      },
      {
        "id": "16_28",
        "text": "What is an advantage of using the AWS Cloud over a traditional on-premises solution?",
        "options": [
          {
            "letter": "A",
            "text": "Users do not have to guess about future capacity needs."
          },
          {
            "letter": "B",
            "text": "Users can utilize existing hardware contracts for purchases."
          },
          {
            "letter": "C",
            "text": "Users can fix costs no matter what their traffic is."
          },
          {
            "letter": "D",
            "text": "Users can avoid audits by using reports from AWS."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "16_29",
        "text": "Which of the following is an AWS-managed compute service?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon SWF"
          },
          {
            "letter": "B",
            "text": "Amazon EC2"
          },
          {
            "letter": "C",
            "text": "AWS Lambda"
          },
          {
            "letter": "D",
            "text": "Amazon Aurora"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "16_30",
        "text": "Which of the following is an important architectural principle when designing cloud applications?",
        "options": [
          {
            "letter": "A",
            "text": "Store data and backups in the same region."
          },
          {
            "letter": "B",
            "text": "Design tightly coupled system components."
          },
          {
            "letter": "C",
            "text": "Avoid multi-threading."
          },
          {
            "letter": "D",
            "text": "Design for failure"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - There are six design principles for operational excellence in the cloud: - Perform operations as code - Annotate documentation - Make frequent, small, reversible changes - Refine operations procedures frequently - Anticipate failure - Learn from all operational failures Reference:."
      },
      {
        "id": "16_31",
        "text": "Which mechanism allows developers to access AWS services from application code?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Software Development Kit"
          },
          {
            "letter": "B",
            "text": "AWS Management Console"
          },
          {
            "letter": "C",
            "text": "AWS CodePipeline"
          },
          {
            "letter": "D",
            "text": "AWS Config"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "16_32",
        "text": "Which Amazon EC2 pricing model is the MOST cost efficient for an uninterruptible workload that runs once a year for 24 hours?",
        "options": [
          {
            "letter": "A",
            "text": "On-Demand Instances"
          },
          {
            "letter": "B",
            "text": "Reserved Instances"
          },
          {
            "letter": "C",
            "text": "Spot Instances"
          },
          {
            "letter": "D",
            "text": "Dedicated Instances"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - With On-Demand instances, you pay for compute capacity by the hour or the second depending on which instances you run. - No longer-term commitments or upfront payments are needed. - You can increase or decrease your compute capacity depending on the demands of your application and only pay the specified per hourly rates for the instance you use. Reference:."
      },
      {
        "id": "16_33",
        "text": "Which of the following services is a MySQL-compatible database that automatically grows storage as needed?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Elastic Compute Cloud (Amazon EC2)"
          },
          {
            "letter": "B",
            "text": "Amazon Relational Database Service (Amazon RDS) for MySQL"
          },
          {
            "letter": "C",
            "text": "Amazon Lightsail"
          },
          {
            "letter": "D",
            "text": "Amazon Aurora"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - Amazon Aurora is a relational database service that combines the speed and availability of high-end commercial databases with the simplicity and cost-effectiveness of open source databases. - The MySQL- compatible edition of Aurora delivers up to 5X the throughput of standard MySQL running on the same hardware, and enables existing MySQL applications and tools to run without requiring modification. - Amazon Aurora will automatically grow the size of your database volume as your database storage needs grow. - Your volume will grow in increments of 10 GB up to a maximum of 64 TB. You don't need to provision excess storage for your database to handle future growth. Reference:."
      },
      {
        "id": "16_34",
        "text": "Which Amazon Virtual Private Cloud (Amazon VPC) feature enables users to connect two VPCs together?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon VPC endpoints"
          },
          {
            "letter": "B",
            "text": "Amazon Elastic Compute Cloud (Amazon EC2) ClassicLink"
          },
          {
            "letter": "C",
            "text": "Amazon VPC peering"
          },
          {
            "letter": "D",
            "text": "AWS Direct Connect"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - A VPC peering connection is a networking connection between two VPCs that enables you to route traffic between them using private IPv4 addresses or IPv6 addresses. - Instances in either VPC can communicate with each other as if they are within the same network. - You can create a VPC peering connection between your own VPCs, or with a VPC in another AWS account. - The VPCs can be in different regions (also known as an inter-region VPC peering connection). Reference:."
      },
      {
        "id": "16_35",
        "text": "Which service's PRIMARY purpose is software version control?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon CodeStar"
          },
          {
            "letter": "B",
            "text": "AWS Command Line Interface (AWS CLI)"
          },
          {
            "letter": "C",
            "text": "Amazon Cognito"
          },
          {
            "letter": "D",
            "text": "AWS CodeCommit"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - AWS CodeCommit is a version control service hosted by Amazon Web Services that you can use to privately store and manage assets (such as documents, source code, and binary files) in the cloud. Reference:."
      },
      {
        "id": "16_36",
        "text": "A company is considering migrating its applications to AWS. The company wants to compare the cost of running the workload on-premises to running the equivalent workload on the AWS platform. Which tool can be used to perform this comparison?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Simple Monthly Calculator"
          },
          {
            "letter": "B",
            "text": "AWS Total Cost of Ownership (TCO) Calculator"
          },
          {
            "letter": "C",
            "text": "AWS Billing and Cost Management console"
          },
          {
            "letter": "D",
            "text": "Cost Explorer"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - TCO calculator compare the cost of running your applications in an on-premises or colocation environment to AWS. Reference:."
      },
      {
        "id": "16_37",
        "text": "Which AWS service provides a secure, fast, and cost-effective way to migrate or transport exabyte-scale datasets into AWS?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Batch"
          },
          {
            "letter": "B",
            "text": "AWS Snowball"
          },
          {
            "letter": "C",
            "text": "AWS Migration Hub"
          },
          {
            "letter": "D",
            "text": "AWS Snowmobile"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - AWS Snowmobile is an exabyte-scale data transfer service that can move extremely large amounts of data to AWS in a fast, secure, and cost-effective manner. - You can transfer up to 100PB per Snowmobile, a 45-foot long ruggedized shipping container, pulled by a semi-trailer truck. - Snowmobile makes it easy to move massive volumes of data to the cloud, including video libraries, image repositories, or even a complete data center migration. - All data is encrypted with 256-bit encryption and you can manage your encryption keys with AWS Key Management Service (AWS KMS). - Snowmobile includes GPS tracking, alarm monitoring, 24/7 video surveillance and an optional escort security vehicle while in transit. Reference: - aws-snowmobile/."
      },
      {
        "id": "16_38",
        "text": "Which of the following BEST describe the AWS pricing model? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Fixed-term"
          },
          {
            "letter": "B",
            "text": "Pay-as-you-go"
          },
          {
            "letter": "C",
            "text": "Colocation"
          },
          {
            "letter": "D",
            "text": "Planned"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "16_39",
        "text": "Which load balancer types are available with Elastic Load Balancing (ELB)? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Public load balancers with AWS Application Auto Scaling capabilities"
          },
          {
            "letter": "B",
            "text": "F5 Big-IP and Citrix NetScaler load balancers"
          },
          {
            "letter": "C",
            "text": "Classic Load Balancers"
          },
          {
            "letter": "D",
            "text": "Cross-zone load balancers with public and private IPs"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - Elastic Load Balancing supports the following types of load balancers: Application Load Balancers, Network Load Balancers, and Classic Load Balancers. - Amazon ECS services can use either type of load balancer. - Application Load Balancers are used to route HTTP/HTTPS (or Layer 7) traffic. - Network Load Balancers and Classic Load Balancers are used to route TCP (or Layer 4) traffic. Reference:."
      },
      {
        "id": "16_40",
        "text": "Why should a company choose AWS instead of a traditional data center?",
        "options": [
          {
            "letter": "A",
            "text": "AWS provides users with full control over the underlying resources."
          },
          {
            "letter": "B",
            "text": "AWS does not require long-term contracts and provides a pay-as-you-go model."
          },
          {
            "letter": "C",
            "text": "AWS offers edge locations in every country, supporting global reach."
          },
          {
            "letter": "D",
            "text": "AWS has no limits on the number of resources that can be created."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - AWS offers you a pay-as-you-go approach for pricing for over 160 cloud services. - With AWS you pay only for the individual services you need, for as long as you use them, and without requiring long-term contracts or complex licensing. - AWS pricing is similar to how you pay for utilities like water and electricity. - You only pay for the services you consume, and once you stop using them, there are no additional costs or termination fees. Reference:."
      },
      {
        "id": "16_41",
        "text": "Which solution provides the FASTEST application response times to frequently accessed data to users in multiple AWS Regions?",
        "options": [
          {
            "letter": "A",
            "text": "AWS CloudTrail across multiple Availability Zones"
          },
          {
            "letter": "B",
            "text": "Amazon CloudFront to edge locations"
          },
          {
            "letter": "C",
            "text": "AWS CloudFormation in multiple regions"
          },
          {
            "letter": "D",
            "text": "A virtual private gateway over AWS Direct Connect"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - You can deliver content and decrease end-user latency of your web application using Amazon CloudFront. - CloudFront speeds up content delivery by leveraging its global network of data centers, known as edge locations, to reduce delivery time by caching your content close to your end users. - CloudFront fetches your content from an origin, such as an Amazon S3 bucket, an Amazon EC2 instance, an Amazon Elastic Load Balancing load balancer or your own web server, when it's not already in an edge location. - CloudFront can be used to deliver your entire website or application, including dynamic, static, streaming, and interactive content. Reference:."
      },
      {
        "id": "16_42",
        "text": "Which AWS service provides a self-service portal for on-demand access to AWS compliance reports?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Config"
          },
          {
            "letter": "B",
            "text": "AWS Certificate Manager"
          },
          {
            "letter": "C",
            "text": "Amazon Inspector"
          },
          {
            "letter": "D",
            "text": "AWS Artifact"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - AWS Artifact is your go-to, central resource for compliance-related information that matters to you. - It provides on-demand access to AWS' security and compliance reports and select online agreements. - Reports available in AWS Artifact include our Service Organization Control (SOC) reports, Payment Card Industry (PCI) reports, and certifications from accreditation bodies across geographies and compliance verticals that validate the implementation and operating effectiveness of AWS security controls. - Agreements available in AWS Artifact include the Business Associate Addendum (BAA) and the Nondisclosure Agreement (NDA). Reference:."
      },
      {
        "id": "16_43",
        "text": "Which of the following AWS services can be used to run a self-managed database?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Route 53"
          },
          {
            "letter": "B",
            "text": "AWS X-Ray"
          },
          {
            "letter": "C",
            "text": "AWS Snowmobile"
          },
          {
            "letter": "D",
            "text": "Amazon Elastic Compute Cloud (Amazon EC2)"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "16_44",
        "text": "What exclusive benefit is provided to users with Enterprise Support?",
        "options": [
          {
            "letter": "A",
            "text": "Access to a Technical Project Manager"
          },
          {
            "letter": "B",
            "text": "Access to a Technical Account Manager"
          },
          {
            "letter": "C",
            "text": "Access to a Cloud Support Engineer"
          },
          {
            "letter": "D",
            "text": "Access to a Solutions Architect"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "16_45",
        "text": "How can a user protect against AWS service disruptions if a natural disaster affects an entire geographic area?",
        "options": [
          {
            "letter": "A",
            "text": "Deploy applications across multiple Availability Zones within an AWS Region."
          },
          {
            "letter": "B",
            "text": "Use a hybrid cloud computing deployment model within the geographic area."
          },
          {
            "letter": "C",
            "text": "Deploy applications across multiple AWS Regions."
          },
          {
            "letter": "D",
            "text": "Store application artifacts using AWS Artifact and replicate them across multiple AWS Regions."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - An AWS Region is a geographic location where AWS provides multiple, physically separated and isolated Availability Zones which are connected with low latency, high throughput, and highly redundant networking. Reference:."
      },
      {
        "id": "16_46",
        "text": "How does AWS MOST effectively reduce computing costs for a growing start-up company?",
        "options": [
          {
            "letter": "A",
            "text": "It provides on-demand resources for peak usage."
          },
          {
            "letter": "B",
            "text": "It automates the provisioning of individual developer environments."
          },
          {
            "letter": "C",
            "text": "It automates customer relationship management."
          },
          {
            "letter": "D",
            "text": "It implements a fixed monthly computing budget."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - You can continue to optimize your spend and keep your development costs low by making sure you revisit your architecture often, to adjust to your startup growth. - Manage your cost further by leveraging different options such as S3 CloudFront for caching & offloading to reduce cost of EC2 computing, as well as Elastic Load Balancing which prepares you for massive scale, high reliability and uninterrupted growth. - Another way to keep costs down is to use AWS Identity and Access Management solutions (IAM) to manage governance of your cost drivers effectively and by the right teams. Reference:."
      },
      {
        "id": "16_47",
        "text": "A startup is working on a new application that needs to go to market quickly. The application requirements may need to be adjusted in the near future. Which of the following is a characteristic of the AWS Cloud that would meet this specific need?",
        "options": [
          {
            "letter": "A",
            "text": "Elasticity"
          },
          {
            "letter": "B",
            "text": "Reliability"
          },
          {
            "letter": "C",
            "text": "Performance"
          },
          {
            "letter": "D",
            "text": "Agility"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - Agile is a time boxed, iterative approach to software delivery that builds software incrementally from the start of the project, instead of trying to deliver it all at once near the end. Reference:."
      },
      {
        "id": "16_48",
        "text": "Which AWS Support plan provides a full set of AWS Trusted Advisor checks?",
        "options": [
          {
            "letter": "A",
            "text": "Business and Developer Support"
          },
          {
            "letter": "B",
            "text": "Business and Basic Support"
          },
          {
            "letter": "C",
            "text": "Enterprise and Developer Support"
          },
          {
            "letter": "D",
            "text": "Enterprise and Business Support"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "16_49",
        "text": "Which of the following services have Distributed Denial of Service (DDoS) mitigation features? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "AWS WAF"
          },
          {
            "letter": "B",
            "text": "Amazon DynamoDB"
          },
          {
            "letter": "C",
            "text": "Amazon EC2"
          },
          {
            "letter": "D",
            "text": "Amazon CloudFront"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "16_50",
        "text": "When building a cloud Total Cost of Ownership (TCO) model, which cost elements should be considered for workloads running on AWS? (Choose three.)",
        "options": [
          {
            "letter": "A",
            "text": "Compute costs"
          },
          {
            "letter": "B",
            "text": "Facilities costs"
          },
          {
            "letter": "C",
            "text": "Storage costs"
          },
          {
            "letter": "D",
            "text": "Data transfer costs"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      }
    ]
  },
  {
    "id": 17,
    "name": "Examen Pratique 17",
    "description": "Examen Pratique 17 - 50 questions",
    "questionCount": 50,
    "duration": 90,
    "questions": [
      {
        "id": "17_1",
        "text": "What time-savings advantage is offered with the use of Amazon Rekognition?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Rekognition provides automatic watermarking of images."
          },
          {
            "letter": "B",
            "text": "Amazon Rekognition provides automatic detection of objects appearing in pictures."
          },
          {
            "letter": "C",
            "text": "Amazon Rekognition provides the ability to resize millions of images automatically."
          },
          {
            "letter": "D",
            "text": "Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - Rekognition Image is an image recognition service that detects objects, scenes, and faces; extracts text; recognizes celebrities; and identifies inappropriate content in images. - It also allows you to search and compare faces. - Rekognition Image is based on the same proven, highly scalable, deep learning technology developed by Amazon's computer vision scientists to analyze billions of images daily for Prime Photos. Reference:."
      },
      {
        "id": "17_2",
        "text": "When comparing AWS with on-premises Total Cost of Ownership (TCO), what costs are included?",
        "options": [
          {
            "letter": "A",
            "text": "Data center security"
          },
          {
            "letter": "B",
            "text": "Business analysis"
          },
          {
            "letter": "C",
            "text": "Project management"
          },
          {
            "letter": "D",
            "text": "Operating system administration"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "17_3",
        "text": "According to the AWS shared responsibility model, what is AWS responsible for?",
        "options": [
          {
            "letter": "A",
            "text": "Configuring Amazon VPC"
          },
          {
            "letter": "B",
            "text": "Managing application code"
          },
          {
            "letter": "C",
            "text": "Maintaining application traffic"
          },
          {
            "letter": "D",
            "text": "Managing the network infrastructure"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "17_4",
        "text": "Which service should be used to estimate the costs of running a new project on AWS?",
        "options": [
          {
            "letter": "A",
            "text": "AWS TCO Calculator"
          },
          {
            "letter": "B",
            "text": "AWS Simple Monthly Calculator"
          },
          {
            "letter": "C",
            "text": "AWS Cost Explorer API"
          },
          {
            "letter": "D",
            "text": "AWS Budgets"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - To forecast your costs, use the AWS Cost Explorer. - Use cost allocation tags to divide your resources into groups, and then estimate the costs for each group. Reference:."
      },
      {
        "id": "17_5",
        "text": "Which AWS tool will identify security groups that grant unrestricted Internet access to a limited list of ports?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Organizations"
          },
          {
            "letter": "B",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "C",
            "text": "AWS Usage Report"
          },
          {
            "letter": "D",
            "text": "Amazon EC2 dashboard"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "17_6",
        "text": "Which AWS service can be used to generate alerts based on an estimated monthly bill?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Config"
          },
          {
            "letter": "B",
            "text": "Amazon CloudWatch"
          },
          {
            "letter": "C",
            "text": "AWS X-Ray"
          },
          {
            "letter": "D",
            "text": "AWS CloudTrail"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - You can monitor your estimated AWS charges by using Amazon CloudWatch. - When you enable the monitoring of estimated charges for your AWS account, the estimated charges are calculated and sent several times daily to CloudWatch as metric data. - Billing metric data is stored in the US East (N. Virginia) Region and represents worldwide charges. - This data includes the estimated charges for every service in AWS that you use, in addition to the estimated overall total of your AWS charges. Reference:."
      },
      {
        "id": "17_7",
        "text": "Which Amazon EC2 pricing model offers the MOST significant discount when compared to On-Demand Instances?",
        "options": [
          {
            "letter": "A",
            "text": "Partial Upfront Reserved Instances for a 1-year term"
          },
          {
            "letter": "B",
            "text": "All Upfront Reserved Instances for a 1-year term"
          },
          {
            "letter": "C",
            "text": "All Upfront Reserved Instances for a 3-year term"
          },
          {
            "letter": "D",
            "text": "No Upfront Reserved Instances for a 3-year term"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "17_8",
        "text": "Which of the following is the responsibility of AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Setting up AWS Identity and Access Management (IAM) users and groups"
          },
          {
            "letter": "B",
            "text": "Physically destroying storage media at end of life"
          },
          {
            "letter": "C",
            "text": "Patching guest operating systems"
          },
          {
            "letter": "D",
            "text": "Configuring security settings on Amazon EC2 instances"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - Media storage devices used to store customer data are classified by AWS as Critical and treated accordingly, as high impact, throughout their life-cycles. - AWS has exacting standards on how to install, service, and eventually destroy the devices when they are no longer useful. - When a storage device has reached the end of its useful life, AWS decommissions media using techniques detailed in NIST 800-88. - Media that stored customer data is not removed from AWS control until it has been securely decommissioned. Reference:."
      },
      {
        "id": "17_9",
        "text": "Which of the following is an advantage of using AWS?",
        "options": [
          {
            "letter": "A",
            "text": "AWS audits user data."
          },
          {
            "letter": "B",
            "text": "Data is automatically secure."
          },
          {
            "letter": "C",
            "text": "There is no guessing on capacity needs."
          },
          {
            "letter": "D",
            "text": "AWS manages compliance needs."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - AWS allows you to access as much or as little capacity as you need, and scale up or down as required with only a few minutes’ notice Reference:."
      },
      {
        "id": "17_10",
        "text": "Which AWS service would a customer use with a static website to achieve lower latency and high transfer speeds?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Lambda"
          },
          {
            "letter": "B",
            "text": "Amazon DynamoDB Accelerator"
          },
          {
            "letter": "C",
            "text": "Amazon Route 53"
          },
          {
            "letter": "D",
            "text": "Amazon CloudFront"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds, all within a developer- friendly environment. - CloudFront is integrated with AWS both physical locations that are directly connected to the AWS global infrastructure, as well as other AWS services. Reference:."
      },
      {
        "id": "17_11",
        "text": "Which services manage and automate application deployments on AWS? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Elastic Beanstalk"
          },
          {
            "letter": "B",
            "text": "AWS CodeCommit"
          },
          {
            "letter": "C",
            "text": "AWS Data Pipeline"
          },
          {
            "letter": "D",
            "text": "AWS CloudFormation"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - EBS -> automates deploying code and provisioning infrastructure - CloudFormation -> Use templates to deploy code and infrastructure."
      },
      {
        "id": "17_12",
        "text": "A user wants guidance on possible savings when migrating from on-premises to AWS. Which tool is suitable for this scenario?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Budgets"
          },
          {
            "letter": "B",
            "text": "Cost Explorer"
          },
          {
            "letter": "C",
            "text": "AWS Total Cost of Ownership (TCO) Calculator"
          },
          {
            "letter": "D",
            "text": "AWS Well-Architected Tool"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - The TCO Calculator provides directional guidance on possible realized savings when deploying AWS. - This tool is built on an underlying calculation model, that generates a fair assessment of value that a customer may achieve given the data provided by the user. Reference:."
      },
      {
        "id": "17_13",
        "text": "Which principles are used to architect applications for reliability on the AWS Cloud? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Design for automated failure recovery"
          },
          {
            "letter": "B",
            "text": "Use multiple Availability Zones"
          },
          {
            "letter": "C",
            "text": "Manage changes via documented processes"
          },
          {
            "letter": "D",
            "text": "Test for moderate demand to ensure reliability"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "17_14",
        "text": "What tasks should a customer perform when that customer suspects an AWS account has been compromised? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Rotate passwords and access keys."
          },
          {
            "letter": "B",
            "text": "Remove MFA tokens."
          },
          {
            "letter": "C",
            "text": "Move resources to a different AWS Region."
          },
          {
            "letter": "D",
            "text": "Delete AWS CloudTrail Resources."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "17_15",
        "text": "What is an example of high availability in the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "Consulting AWS technical support at any time day or night"
          },
          {
            "letter": "B",
            "text": "Ensuring an application remains accessible, even if a resource fails"
          },
          {
            "letter": "C",
            "text": "Making any AWS service available for use by paying on demand"
          },
          {
            "letter": "D",
            "text": "Deploying in any part of the world using AWS Regions"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "17_16",
        "text": "Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Inspector"
          },
          {
            "letter": "B",
            "text": "AWS Web Application Firewall (AWS WAF)"
          },
          {
            "letter": "C",
            "text": "Elastic Load Balancing (ELB)"
          },
          {
            "letter": "D",
            "text": "AWS Shield"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards applications running on AWS. - AWS Shield provides always-on detection and automatic inline mitigation's that minimize application downtime and latency, so there is no need to engage AWS Support to benefit from DDoS protection. - There are two tiers of AWS Shield - Standard and Advanced. Reference:."
      },
      {
        "id": "17_17",
        "text": "A company wants to monitor the CPU usage of its Amazon EC2 resources. Which AWS service should the company use?",
        "options": [
          {
            "letter": "A",
            "text": "AWS CloudTrail"
          },
          {
            "letter": "B",
            "text": "Amazon CloudWatch"
          },
          {
            "letter": "C",
            "text": "AWS Cost and Usage report"
          },
          {
            "letter": "D",
            "text": "Amazon Simple Notification Service (Amazon SNS)"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - With Basic monitoring you get data on your cloudwatch metrics every 5 minutes. - Enabling detailed monitoring, you will get the data every one minute. - To check if detailed monitoring is enabled, on your EC2 Console, Select the instance, on the lower plane, Select Monitoring. Reference:."
      },
      {
        "id": "17_18",
        "text": "What is an AWS Identity and Access Management (IAM) role?",
        "options": [
          {
            "letter": "A",
            "text": "A user associated with an AWS resource"
          },
          {
            "letter": "B",
            "text": "A group associated with an AWS resource"
          },
          {
            "letter": "C",
            "text": "An entity that defines a set of permissions for use with an AWS resource"
          },
          {
            "letter": "D",
            "text": "An authentication credential associated with a multi-factor authentication (MFA) token"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely. - Using IAM, you can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources. Reference:."
      },
      {
        "id": "17_19",
        "text": "What are the advantages of Reserved Instances? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "They provide a discount over on-demand pricing."
          },
          {
            "letter": "B",
            "text": "They provide access to additional instance types."
          },
          {
            "letter": "C",
            "text": "They provide additional networking capability."
          },
          {
            "letter": "D",
            "text": "Customers can upgrade instances as new types become available."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "17_20",
        "text": "How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?",
        "options": [
          {
            "letter": "A",
            "text": "They automatically add more instances across multiple AWS Regions based on global demand of the application."
          },
          {
            "letter": "B",
            "text": "They automatically add or replace instances across multiple Availability Zones when the application needs it."
          },
          {
            "letter": "C",
            "text": "They enable the application's static content to reside closer to end users."
          },
          {
            "letter": "D",
            "text": "They are able to distribute incoming requests across a tier of web server instances."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - When the unhealthy Availability Zone returns to a healthy state, Auto Scaling automatically redistributes the application instances evenly across all of the designated Availability Zones. Reference:."
      },
      {
        "id": "17_21",
        "text": "How can one AWS account use Reserved Instances from another AWS account?",
        "options": [
          {
            "letter": "A",
            "text": "By using Amazon EC2 Dedicated Instances"
          },
          {
            "letter": "B",
            "text": "By using AWS Organizations consolidated billing"
          },
          {
            "letter": "C",
            "text": "By using the AWS Cost Explorer tool"
          },
          {
            "letter": "D",
            "text": "By using AWS Budgets"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - The account that originally purchased the Reserved Instance receives the discount first. - If the purchasing account doesn't have any instances that match the terms of the Reserved Instance, the discount for the Reserved Instance is assigned to any matching usage on another account in the organization. Reference:."
      },
      {
        "id": "17_22",
        "text": "A customer runs an On-Demand Amazon Linux EC2 instance for 3 hours, 5 minutes, and 6 seconds. For how much time will the customer be billed?",
        "options": [
          {
            "letter": "A",
            "text": "3 hours, 5 minutes"
          },
          {
            "letter": "B",
            "text": "3 hours, 5 minutes, and 6 seconds"
          },
          {
            "letter": "C",
            "text": "3 hours, 6 minutes"
          },
          {
            "letter": "D",
            "text": "4 hours"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "17_23",
        "text": "Which of the following AWS services provide compute resources? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Lambda"
          },
          {
            "letter": "B",
            "text": "Amazon Elastic Container Service (Amazon ECS)"
          },
          {
            "letter": "C",
            "text": "AWS CodeDeploy"
          },
          {
            "letter": "D",
            "text": "Amazon Glacier"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "17_24",
        "text": "Which AWS service enables users to deploy infrastructure as code by automating the process of provisioning resources?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon GameLift"
          },
          {
            "letter": "B",
            "text": "AWS CloudFormation"
          },
          {
            "letter": "C",
            "text": "AWS Data Pipeline"
          },
          {
            "letter": "D",
            "text": "AWS Glue"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - AWS CloudFormation provides a common language for you to model and provision AWS and third party application resources in your cloud environment. - AWS CloudFormation allows you to use programming languages or a simple text file to model and provision, in an automated and secure manner, all the resources needed for your applications across all regions and accounts. - This gives you a single source of truth for your AWS and third party resources. Reference:."
      },
      {
        "id": "17_25",
        "text": "Which AWS services provide a way to extend an on-premises architecture to the AWS Cloud? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EBS"
          },
          {
            "letter": "B",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "C",
            "text": "Amazon CloudFront"
          },
          {
            "letter": "D",
            "text": "AWS Storage Gateway"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "17_26",
        "text": "Which of the following allows users to provision a dedicated network connection from their internal network to AWS?",
        "options": [
          {
            "letter": "A",
            "text": "AWS CloudHSM"
          },
          {
            "letter": "B",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "C",
            "text": "AWS VPN"
          },
          {
            "letter": "D",
            "text": "Amazon Connect"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - AWS Direct Connect lets you establish a dedicated network connection between your network and one of the AWS Direct Connect locations. - Using industry standard 802.1q VLANs, this dedicated connection can be partitioned into multiple virtual interfaces. - This allows you to use the same connection to access public resources such as objects stored in Amazon S3 using public IP address space, and private resources such as Amazon EC2 instances running within an Amazon Virtual Private Cloud (VPC) using private IP space, while maintaining network separation between the public and private environments. - Virtual interfaces can be reconfigured at any time to meet your changing needs. Reference:."
      },
      {
        "id": "17_27",
        "text": "Which services use AWS edge locations? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon CloudFront"
          },
          {
            "letter": "B",
            "text": "AWS Shield"
          },
          {
            "letter": "C",
            "text": "Amazon EC2"
          },
          {
            "letter": "D",
            "text": "Amazon RDS"
          }
        ],
        "correctAnswers": [
          "A",
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "17_28",
        "text": "Which service would provide network connectivity in a hybrid architecture that includes the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon VPC"
          },
          {
            "letter": "B",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "C",
            "text": "AWS Directory Service"
          },
          {
            "letter": "D",
            "text": "Amazon API Gateway"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - Amazon Virtual Private Cloud (Amazon VPC) is a logically isolated, private section of the AWS Cloud to launch resources in a virtual data center in the cloud. - Amazon VPC allows you to leverage multiple Availability Zones (AZ) within a region so that you can build greater fault tolerance within your workloads. - You have complete control. Reference:."
      },
      {
        "id": "17_29",
        "text": "Which tool can be used to compare the costs of running a web application in a traditional hosting environment to running it on AWS?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Cost Explorer"
          },
          {
            "letter": "B",
            "text": "AWS Budgets"
          },
          {
            "letter": "C",
            "text": "AWS Cost and Usage report"
          },
          {
            "letter": "D",
            "text": "AWS Total Cost of Ownership (TCO) Calculator"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "17_30",
        "text": "What is the value of using third-party software from AWS Marketplace instead of installing third-party software on Amazon EC2? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Users pay for software by the hour or month depending on licensing."
          },
          {
            "letter": "B",
            "text": "AWS Marketplace enables the user to launch applications with 1-Click."
          },
          {
            "letter": "C",
            "text": "AWS Marketplace data encryption is managed by a third-party vendor."
          },
          {
            "letter": "D",
            "text": "AWS Marketplace eliminates the need to upgrade to newer software versions."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "17_31",
        "text": "Which of the following is a cloud architectural design principle?",
        "options": [
          {
            "letter": "A",
            "text": "Scale up, not out."
          },
          {
            "letter": "B",
            "text": "Loosely couple components."
          },
          {
            "letter": "C",
            "text": "Build monolithic systems."
          },
          {
            "letter": "D",
            "text": "Use commercial database software."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - Loosely coupled architectures reduce interdependencies, so that a change or failure in a component does not cascade to other components."
      },
      {
        "id": "17_32",
        "text": "Under the shared responsibility model; which of the following areas are the customer's responsibility? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Firmware upgrades of network infrastructure"
          },
          {
            "letter": "B",
            "text": "Patching of operating systems"
          },
          {
            "letter": "C",
            "text": "Patching of the underlying hypervisor"
          },
          {
            "letter": "D",
            "text": "Physical security of data centers"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "17_33",
        "text": "Which service enables customers to audit and monitor changes in AWS resources?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "B",
            "text": "Amazon GuardDuty"
          },
          {
            "letter": "C",
            "text": "Amazon Inspector"
          },
          {
            "letter": "D",
            "text": "AWS Config"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. - Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations. - With Config, you can review changes in configurations and relationships between AWS resources, dive into detailed resource configuration histories, and determine your overall compliance against the configurations specified in your internal guidelines. - This enables you to simplify compliance auditing, security analysis, change management, and operational troubleshooting. Reference:."
      },
      {
        "id": "17_34",
        "text": "Which AWS service identifies security groups that allow unrestricted access to a user's AWS resources?",
        "options": [
          {
            "letter": "A",
            "text": "AWS CloudTrail"
          },
          {
            "letter": "B",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "C",
            "text": "Amazon CloudWatch"
          },
          {
            "letter": "D",
            "text": "Amazon Inspector"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Trusted Advisor."
      },
      {
        "id": "17_35",
        "text": "According to the AWS shared responsibility model, who is responsible for configuration management?",
        "options": [
          {
            "letter": "A",
            "text": "It is solely the responsibility of the customer."
          },
          {
            "letter": "B",
            "text": "It is solely the responsibility of AWS."
          },
          {
            "letter": "C",
            "text": "It is shared between AWS and the customer."
          },
          {
            "letter": "D",
            "text": "It is not part of the AWS shared responsibility model."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - AWS maintains the configuration of its infrastructure devices, but a customer is responsible for configuring their own guest operating systems, databases, and applications. Reference:."
      },
      {
        "id": "17_36",
        "text": "Which AWS service is a content delivery network that securely delivers data, video, and applications to users globally with low latency and high speeds?",
        "options": [
          {
            "letter": "A",
            "text": "AWS CloudFormation"
          },
          {
            "letter": "B",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "C",
            "text": "Amazon CloudFront"
          },
          {
            "letter": "D",
            "text": "Amazon Pinpoint"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds, all within a developer- friendly environment. - CloudFront is integrated with AWS both physical locations that are directly connected to the AWS global infrastructure, as well as other AWS services. Reference:."
      },
      {
        "id": "17_37",
        "text": "Which benefit of the AWS Cloud supports matching the supply of resources with changing workload demands?",
        "options": [
          {
            "letter": "A",
            "text": "Security"
          },
          {
            "letter": "B",
            "text": "Reliability"
          },
          {
            "letter": "C",
            "text": "Elasticity"
          },
          {
            "letter": "D",
            "text": "High availability"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "17_38",
        "text": "A user is running an application on AWS and notices that one or more AWS-owned IP addresses is involved in a distributed denial-of-service (DDoS) attack. Who should the user contact FIRST about this situation?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Premium Support"
          },
          {
            "letter": "B",
            "text": "AWS Technical Account Manager"
          },
          {
            "letter": "C",
            "text": "AWS Solutions Architect"
          },
          {
            "letter": "D",
            "text": "AWS Abuse team"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "17_39",
        "text": "Which of the following are benefits of hosting infrastructure in the AWS Cloud? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "There are no upfront commitments."
          },
          {
            "letter": "B",
            "text": "AWS manages all security in the cloud."
          },
          {
            "letter": "C",
            "text": "Users have the ability to provision resources on demand."
          },
          {
            "letter": "D",
            "text": "Users have access to free and unlimited storage."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. There are no upfront commitments.."
      },
      {
        "id": "17_40",
        "text": "What AWS service would be used to centrally manage AWS access policies across multiple accounts?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Service Catalog"
          },
          {
            "letter": "B",
            "text": "AWS Config"
          },
          {
            "letter": "C",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "D",
            "text": "AWS Organizations"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - AWS Organizations helps you centrally govern your environment as you grow and scale your workloads on AWS. - Whether you are a growing startup or a large enterprise, Organizations helps you to centrally manage billing; control access, compliance, and security; and share resources across your AWS accounts. Reference:."
      },
      {
        "id": "17_41",
        "text": "What is AWS Trusted Advisor?",
        "options": [
          {
            "letter": "A",
            "text": "It is an AWS staff member who provides recommendations and best practices on how to use AWS."
          },
          {
            "letter": "B",
            "text": "It is a network of AWS partners who provide recommendations and best practices on how to use AWS."
          },
          {
            "letter": "C",
            "text": "It is an online tool with a set of automated checks that provides recommendations on cost optimization, performance, and security."
          },
          {
            "letter": "D",
            "text": "It is another name for AWS Technical Account Managers who provide recommendations on cost optimization, performance, and security."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - AWS Trusted Advisor is an online tool that provides you real time guidance to help you provision your resources following AWS best practices. - Whether establishing new workflows, developing applications, or as part of ongoing improvement, take advantage of the recommendations provided by Trusted Advisor on a regular basis to help keep your solutions provisioned optimally. Reference:."
      },
      {
        "id": "17_42",
        "text": "Which AWS service or feature allows a company to visualize, understand, and manage AWS costs and usage over time?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Budgets"
          },
          {
            "letter": "B",
            "text": "AWS Cost Explorer"
          },
          {
            "letter": "C",
            "text": "AWS Organizations"
          },
          {
            "letter": "D",
            "text": "Consolidated billing"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - AWS Cost Explorer has an easy-to-use interface that lets you visualize, understand, and manage your AWS costs and usage over time. Reference:."
      },
      {
        "id": "17_43",
        "text": "Which AWS service offers on-demand access to AWS security and compliance reports?",
        "options": [
          {
            "letter": "A",
            "text": "AWS CloudTrail"
          },
          {
            "letter": "B",
            "text": "AWS Artifact"
          },
          {
            "letter": "C",
            "text": "AWS Health"
          },
          {
            "letter": "D",
            "text": "Amazon CloudWatch"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - AWS Artifact is your go-to, central resource for compliance-related information that matters to you. - It provides on-demand access to AWS' security and compliance reports and select online agreements. - Reports available in AWS Artifact include our Service Organization Control (SOC) reports, Payment Card Industry (PCI) reports, and certifications from accreditation bodies across geographies and compliance verticals that validate the implementation and operating effectiveness of AWS security controls. - Agreements available in AWS Artifact include the Business Associate Addendum (BAA) and the Nondisclosure Agreement (NDA). Reference:."
      },
      {
        "id": "17_44",
        "text": "What are the benefits of using the AWS Cloud for companies with customers in many countries around the world? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Companies can deploy applications in multiple AWS Regions to reduce latency."
          },
          {
            "letter": "B",
            "text": "Amazon Translate automatically translates third-party website interfaces into multiple languages."
          },
          {
            "letter": "C",
            "text": "Amazon CloudFront has multiple edge locations around the world to reduce latency."
          },
          {
            "letter": "D",
            "text": "Amazon Comprehend allows users to build applications that can respond to user requests in many languages."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": -."
      },
      {
        "id": "17_45",
        "text": "Which AWS service handles the deployment details of capacity provisioning, load balancing, Auto Scaling, and application health monitoring?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Config"
          },
          {
            "letter": "B",
            "text": "AWS Elastic Beanstalk"
          },
          {
            "letter": "C",
            "text": "Amazon Route 53"
          },
          {
            "letter": "D",
            "text": "Amazon CloudFront"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - Upload your code and Elastic Beanstalk automatically handles the deployment, from capacity provisioning, load balancing, auto-scaling to application health monitoring. - At the same time, you retain full control over the AWS resources powering your application and can access the underlying resources at any time. Reference:."
      },
      {
        "id": "17_46",
        "text": "Which AWS service provides inbound and outbound network ACLs to harden external connectivity to Amazon EC2?",
        "options": [
          {
            "letter": "A",
            "text": "AWS IAM"
          },
          {
            "letter": "B",
            "text": "Amazon Connect"
          },
          {
            "letter": "C",
            "text": "Amazon VPC"
          },
          {
            "letter": "D",
            "text": "Amazon API Gateway"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "17_47",
        "text": "When a company provisions web servers in multiple AWS Regions, what is being increased?",
        "options": [
          {
            "letter": "A",
            "text": "Coupling"
          },
          {
            "letter": "B",
            "text": "Availability"
          },
          {
            "letter": "C",
            "text": "Security"
          },
          {
            "letter": "D",
            "text": "Durability"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "17_48",
        "text": "The pay-as-you-go pricing model for AWS services:",
        "options": [
          {
            "letter": "A",
            "text": "reduces capital expenditures."
          },
          {
            "letter": "B",
            "text": "requires payment up front for AWS services."
          },
          {
            "letter": "C",
            "text": "is relevant only for Amazon EC2, Amazon S3, and Amazon RDS."
          },
          {
            "letter": "D",
            "text": "reduces operational expenditures."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "17_49",
        "text": "Under the AWS shared responsibility model, AWS is responsible for which security-related task?",
        "options": [
          {
            "letter": "A",
            "text": "Lifecycle management of IAM credentials"
          },
          {
            "letter": "B",
            "text": "Physical security of global infrastructure"
          },
          {
            "letter": "C",
            "text": "Encryption of Amazon EBS volumes"
          },
          {
            "letter": "D",
            "text": "Firewall configuration"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "17_50",
        "text": "Which AWS service enables users to consolidate billing across multiple accounts?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon QuickSight"
          },
          {
            "letter": "B",
            "text": "AWS Organizations"
          },
          {
            "letter": "C",
            "text": "AWS Budgets"
          },
          {
            "letter": "D",
            "text": "Amazon Forecast"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - You can use the consolidated billing feature in AWS Organizations to consolidate billing and payment for multiple AWS accounts or multiple Amazon Internet Services Pvt. Ltd (AISPL) accounts. - Every organization in AWS Organizations has a master (payer) account that pays the charges of all the member (linked) accounts. Reference:."
      }
    ]
  },
  {
    "id": 18,
    "name": "Examen Pratique 18",
    "description": "Examen Pratique 18 - 50 questions",
    "questionCount": 50,
    "duration": 90,
    "questions": [
      {
        "id": "18_1",
        "text": "Under the AWS shared responsibility model, which of the following is an example of security in the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "Managing edge locations"
          },
          {
            "letter": "B",
            "text": "Physical security"
          },
          {
            "letter": "C",
            "text": "Firewall configuration"
          },
          {
            "letter": "D",
            "text": "Global infrastructure"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "18_2",
        "text": "How can an AWS user with an AWS Basic Support plan obtain technical assistance from AWS?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Senior Support Engineers"
          },
          {
            "letter": "B",
            "text": "AWS Technical Account Managers"
          },
          {
            "letter": "C",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "D",
            "text": "AWS Discussion Forums"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "18_3",
        "text": "Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Multiple Availability Zones"
          },
          {
            "letter": "B",
            "text": "Performance efficiency"
          },
          {
            "letter": "C",
            "text": "Security"
          },
          {
            "letter": "D",
            "text": "Encryption usage"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "18_4",
        "text": "After selecting an Amazon EC2 Dedicated Host reservation, which pricing option would provide the largest discount?",
        "options": [
          {
            "letter": "A",
            "text": "No upfront payment"
          },
          {
            "letter": "B",
            "text": "Hourly on-demand payment"
          },
          {
            "letter": "C",
            "text": "Partial upfront payment"
          },
          {
            "letter": "D",
            "text": "All upfront payment"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "18_5",
        "text": "What is an advantage of deploying an application across multiple Availability Zones?",
        "options": [
          {
            "letter": "A",
            "text": "There is a lower risk of service failure if a natural disaster causes a service disruption in a given AWS Region."
          },
          {
            "letter": "B",
            "text": "The application will have higher availability because it can withstand a service disruption in one Availability Zone."
          },
          {
            "letter": "C",
            "text": "There will be better coverage as Availability Zones are geographically distant and can serve a wider area."
          },
          {
            "letter": "D",
            "text": "There will be decreased application latency that will improve the user experience."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "18_6",
        "text": "A Cloud Practitioner is asked how to estimate the cost of using a new application on AWS. What is the MOST appropriate response?",
        "options": [
          {
            "letter": "A",
            "text": "Inform the user that AWS pricing allows for on-demand pricing."
          },
          {
            "letter": "B",
            "text": "Direct the user to the AWS Simple Monthly Calculator for an estimate."
          },
          {
            "letter": "C",
            "text": "Use Amazon QuickSight to analyze current spending on-premises."
          },
          {
            "letter": "D",
            "text": "Use Amazon AppStream 2.0 for real-time pricing analytics."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "18_7",
        "text": "A company wants to migrate its applications to a VPC on AWS. These applications will need to access on-premises resources. What combination of actions will enable the company to accomplish this goal? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Use the AWS Service Catalog to identify a list of on-premises resources that can be migrated."
          },
          {
            "letter": "B",
            "text": "Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC."
          },
          {
            "letter": "C",
            "text": "Use Amazon Athena to query data from the on-premises database servers."
          },
          {
            "letter": "D",
            "text": "Connect the company's on-premises data center to AWS using AWS Direct Connect."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "18_8",
        "text": "A web application running on AWS has been spammed with malicious requests from a recurring set of IP addresses. Which AWS service can help secure the application and block the malicious traffic?",
        "options": [
          {
            "letter": "A",
            "text": "AWS IAM"
          },
          {
            "letter": "B",
            "text": "Amazon GuardDuty"
          },
          {
            "letter": "C",
            "text": "Amazon Simple Notification Service (Amazon SNS)"
          },
          {
            "letter": "D",
            "text": "AWS WAF"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - AWS WAF is a web application firewall that helps protect web applications from common web exploits that could affect application availability, compromise security, or consume excessive resources. - You can use AWS WAF to define customizable web security rules that control which traffic accesses your web applications. - If you use AWS Shield Advanced, you can use AWS WAF at no extra cost for those protected resources and can engage the DRT to create WAF rules. Reference:."
      },
      {
        "id": "18_9",
        "text": "Treating infrastructure as code in the AWS Cloud allows users to:",
        "options": [
          {
            "letter": "A",
            "text": "automate migration of on-premises hardware to AWS data centers."
          },
          {
            "letter": "B",
            "text": "let a third party automate an audit of the AWS infrastructure."
          },
          {
            "letter": "C",
            "text": "turn over application code to AWS so it can run on the AWS infrastructure."
          },
          {
            "letter": "D",
            "text": "automate the infrastructure provisioning process."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "18_10",
        "text": "A company requires a dedicated network connection between its on-premises servers and the AWS Cloud. Which AWS service should be used?",
        "options": [
          {
            "letter": "A",
            "text": "AWS VPN"
          },
          {
            "letter": "B",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "C",
            "text": "Amazon API Gateway"
          },
          {
            "letter": "D",
            "text": "Amazon Connect"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - You can use AWS Direct Connect to establish a private virtual interface from your on-premise network directly to your Amazon VPC, providing you with a private, high bandwidth network connection between your network and your VPC. - With multiple virtual interfaces, you can even establish private connectivity to multiple VPCs while maintaining network isolation. Reference:."
      },
      {
        "id": "18_11",
        "text": "Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Glue"
          },
          {
            "letter": "B",
            "text": "AWS Data Pipeline"
          },
          {
            "letter": "C",
            "text": "Amazon CloudSearch"
          },
          {
            "letter": "D",
            "text": "Amazon Athena"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - Amazon Athena is defined as \"an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL.\" So, it's another SQL query engine for large data sets stored in S3. - This is very similar to other SQL query engines, such as Apache Drill. - But unlike Apache Drill, Athena is limited to data only from Amazon's own S3 storage service. However, Athena is able to query a variety of file formats, including, but not limited to CSV, Parquet, JSON, etc."
      },
      {
        "id": "18_12",
        "text": "AWS CloudFormation is designed to help the user:",
        "options": [
          {
            "letter": "A",
            "text": "model and provision resources."
          },
          {
            "letter": "B",
            "text": "update application code."
          },
          {
            "letter": "C",
            "text": "set up data lakes."
          },
          {
            "letter": "D",
            "text": "create reports for billing."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - AWS CloudFormation provides a common language for you to model and provision AWS and third party application resources in your cloud environment. - AWS CloudFormation allows you to use programming languages or a simple text file to model and provision, in an automated and secure manner, all the resources needed for your applications across all regions and accounts. - This gives you a single source of truth for your AWS and third party resources. Reference:."
      },
      {
        "id": "18_13",
        "text": "Which of the following is an AWS database service?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Redshift"
          },
          {
            "letter": "B",
            "text": "Amazon Elastic Block Store (Amazon EBS)"
          },
          {
            "letter": "C",
            "text": "Amazon S3 Glacier"
          },
          {
            "letter": "D",
            "text": "AWS Snowball"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "18_14",
        "text": "A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports. What is the SIMPLEST way to do this?",
        "options": [
          {
            "letter": "A",
            "text": "Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0."
          },
          {
            "letter": "B",
            "text": "Run AWS Trusted Advisor and review the findings."
          },
          {
            "letter": "C",
            "text": "Open the AWS IAM console and check the inbound rule filters for open access."
          },
          {
            "letter": "D",
            "text": "In AWS Config, create a custom rule that invokes an AWS Lambda function to review rules for inbound access."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "18_15",
        "text": "What are the benefits of developing and running a new application in the AWS Cloud compared to on-premises? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "AWS automatically distributes the data globally for higher durability."
          },
          {
            "letter": "B",
            "text": "AWS will take care of operating the application."
          },
          {
            "letter": "C",
            "text": "AWS makes it easy to architect for high availability."
          },
          {
            "letter": "D",
            "text": "AWS can easily accommodate application demand changes."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS makes it easy to architect for high availability.."
      },
      {
        "id": "18_16",
        "text": "A user needs an automated security assessment report that will identify unintended network access to Amazon EC2 instances and vulnerabilities on those instances. Which AWS service will provide this assessment report?",
        "options": [
          {
            "letter": "A",
            "text": "EC2 security groups"
          },
          {
            "letter": "B",
            "text": "AWS Config"
          },
          {
            "letter": "C",
            "text": "Amazon Macie"
          },
          {
            "letter": "D",
            "text": "Amazon Inspector"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS. - AmazonInspector automatically assesses applications for exposure, vulnerabilities, and deviations from best practices. - After performing an assessment, Amazon Inspector produces a detailed list of security findings prioritized by level of severity. - These findings can be reviewed directly or as part of detailed assessment reports which are available via the Amazon Inspector console or API. Reference:."
      },
      {
        "id": "18_17",
        "text": "How can a company isolate the costs of production and non-production workloads on AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Create Identity and Access Management (IAM) roles for production and non-production workloads."
          },
          {
            "letter": "B",
            "text": "Use different accounts for production and non-production expenses."
          },
          {
            "letter": "C",
            "text": "Use Amazon EC2 for non-production workloads and other services for production workloads."
          },
          {
            "letter": "D",
            "text": "Use Amazon CloudWatch to monitor the use of services."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "18_18",
        "text": "Where can users find a catalog of AWS-recognized providers of third-party security solutions?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Service Catalog"
          },
          {
            "letter": "B",
            "text": "AWS Marketplace"
          },
          {
            "letter": "C",
            "text": "AWS Quick Start"
          },
          {
            "letter": "D",
            "text": "AWS CodeDeploy"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - AWS Service Catalog Delivery Partners are APN Consulting Partners who help create catalogs of IT services that are approved by the customer's organization for use on AWS. - With AWS Service Catalog, customers and partners can centrally manage commonly deployed IT services to help achieve consistent governance and meet compliance requirements while enabling users to self-provision approved services. Reference:."
      },
      {
        "id": "18_19",
        "text": "A Cloud Practitioner needs to store data for 7 years to meet regulatory requirements. Which AWS service will meet this requirement at the LOWEST cost?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon S3"
          },
          {
            "letter": "B",
            "text": "AWS Snowball"
          },
          {
            "letter": "C",
            "text": "Amazon Redshift"
          },
          {
            "letter": "D",
            "text": "Amazon S3 Glacier"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - S3 Glacier Deep Archive is Amazon S3's lowest-cost storage class and supports long-term retention and digital preservation for data that may be accessed once or twice in a year. - It is designed for customers --particularly those in highly-regulated industries, such as the Financial Services, Healthcare, and Public Sectors -- that retain data sets for 7-10 years or longer to meet regulatory compliance requirements. - S3 Glacier Deep Archive can also be used for backup and disaster recovery use cases, and is a cost-effective and easy-to-manage alternative to magnetic tape systems, whether they are on-premises libraries or off-premises services. Reference:."
      },
      {
        "id": "18_20",
        "text": "What are the immediate benefits of using the AWS Cloud? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Increased IT staff."
          },
          {
            "letter": "B",
            "text": "Capital expenses are replaced with variable expenses."
          },
          {
            "letter": "C",
            "text": "User control of infrastructure."
          },
          {
            "letter": "D",
            "text": "Increased agility."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. User control of infrastructure.."
      },
      {
        "id": "18_21",
        "text": "Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon GuardDuty"
          },
          {
            "letter": "B",
            "text": "Amazon Macie"
          },
          {
            "letter": "C",
            "text": "Amazon Inspector"
          },
          {
            "letter": "D",
            "text": "AWS Shield"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - Amazon Macie is a security service that uses machine learning to automatically discover, classify, and protect sensitive data in AWS. - Macie recognizes sensitive data such as personally identifiable information (PII) or intellectual property. - It provides you with dashboards and alerts that give visibility into how this data is being accessed or moved. Reference:."
      },
      {
        "id": "18_22",
        "text": "What is the purpose of AWS Storage Gateway?",
        "options": [
          {
            "letter": "A",
            "text": "It ensures on-premises data storage is 99.999999999% durable."
          },
          {
            "letter": "B",
            "text": "It transports petabytes of data to and from AWS."
          },
          {
            "letter": "C",
            "text": "It connects to multiple Amazon EC2 instances."
          },
          {
            "letter": "D",
            "text": "It connects on-premises data storage to the AWS Cloud."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - Moving data to the cloud is not quite as simple as flipping a switch. - For companies that have managed their own data centers or server rooms for decades, there are a few steps to consider --and it's not always wise to pull the plug on an internal infrastructure quite so quickly. - If a startup uses on-premise business servers and then experiences unexpected growth, abandoning those servers doesn't make sense (even if the long-term plan is to do exactly that). - AWS Storage Gateway is a way to bridge this gap for companies of any size. - It's a hybrid storage option that connects on-premise storage including age-old tape backup systems to the cloud in a way that also provides one console to access all storage configurations. Reference:."
      },
      {
        "id": "18_23",
        "text": "What should users do if they want to install an application in geographically isolated locations?",
        "options": [
          {
            "letter": "A",
            "text": "Install the application using multiple internet gateways."
          },
          {
            "letter": "B",
            "text": "Deploy the application to an Amazon VPC."
          },
          {
            "letter": "C",
            "text": "Deploy the application to multiple AWS Regions."
          },
          {
            "letter": "D",
            "text": "Configure the application using multiple NAT gateways."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "18_24",
        "text": "A system in the AWS Cloud is designed to withstand the failure of one or more components. What is this an example of?",
        "options": [
          {
            "letter": "A",
            "text": "Elasticity"
          },
          {
            "letter": "B",
            "text": "High Availability"
          },
          {
            "letter": "C",
            "text": "Scalability"
          },
          {
            "letter": "D",
            "text": "Agility"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "18_25",
        "text": "A Cloud Practitioner needs a consistent and dedicated connection between AWS resources and an on-premises system. Which AWS service can fulfill this requirement?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "B",
            "text": "AWS VPN"
          },
          {
            "letter": "C",
            "text": "Amazon Connect"
          },
          {
            "letter": "D",
            "text": "AWS Data Pipeline"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - You can use AWS Direct Connect to establish a private virtual interface from your on-premise network directly to your Amazon VPC, providing you with a private, high bandwidth network connection between your network and your VPC. - With multiple virtual interfaces, you can even establish private connectivity to multiple VPCs while maintaining network isolation. Reference:."
      },
      {
        "id": "18_26",
        "text": "Within the AWS shared responsibility model, who is responsible for security and compliance?",
        "options": [
          {
            "letter": "A",
            "text": "The customer is responsible."
          },
          {
            "letter": "B",
            "text": "AWS is responsible."
          },
          {
            "letter": "C",
            "text": "AWS and the customer share responsibility."
          },
          {
            "letter": "D",
            "text": "AWS shares responsibility with the relevant governing body."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - Security and Compliance is a shared responsibility between AWS and the customer. - This shared model can help relieve the customer's operational burden as AWS operates, manages and controls the components from the host operating system and virtualization layer down to the physical security of the facilities in which the service operates. Reference:."
      },
      {
        "id": "18_27",
        "text": "To use the AWS CLI, users are required to generate:",
        "options": [
          {
            "letter": "A",
            "text": "a password policy."
          },
          {
            "letter": "B",
            "text": "an access/secret key."
          },
          {
            "letter": "C",
            "text": "a managed policy."
          },
          {
            "letter": "D",
            "text": "an API key."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. an access/secret key.."
      },
      {
        "id": "18_28",
        "text": "Which AWS service is used to provide encryption for Amazon EBS?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Certificate Manager"
          },
          {
            "letter": "B",
            "text": "AWS Systems Manager"
          },
          {
            "letter": "C",
            "text": "AWS KMS"
          },
          {
            "letter": "D",
            "text": "AWS Config"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "18_29",
        "text": "How does AWS charge for AWS Lambda usage once the free tier has been exceeded? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "By the time it takes for the Lambda function to execute."
          },
          {
            "letter": "B",
            "text": "By the number of versions of a specific Lambda function."
          },
          {
            "letter": "C",
            "text": "By the number of requests made for a given Lambda function."
          },
          {
            "letter": "D",
            "text": "By the programming language that is used for the Lambda function."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "18_30",
        "text": "Which of the following describes the relationships among AWS Regions, Availability Zones, and edge locations? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "There are more AWS Regions than Availability Zones."
          },
          {
            "letter": "B",
            "text": "There are more edge locations than AWS Regions."
          },
          {
            "letter": "C",
            "text": "An edge location is an Availability Zone."
          },
          {
            "letter": "D",
            "text": "There are more AWS Regions than edge locations."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. There are more edge locations than AWS Regions.."
      },
      {
        "id": "18_31",
        "text": "What does AWS Shield Standard provide?",
        "options": [
          {
            "letter": "A",
            "text": "WAF rules"
          },
          {
            "letter": "B",
            "text": "DDoS protection"
          },
          {
            "letter": "C",
            "text": "Identity and Access Management (IAM) permissions and access to resources"
          },
          {
            "letter": "D",
            "text": "Data encryption"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - AWS Shield Standard provides protection for all AWS customers from common, most frequently occurring network and transport layer DDoS attacks that target your web site or application at no additional charge. Reference:."
      },
      {
        "id": "18_32",
        "text": "A company wants to build its new application workloads in the AWS Cloud instead of using on-premises resources. What expense can be reduced using the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "The cost of writing custom-built Java or Node .js code"
          },
          {
            "letter": "B",
            "text": "Penetration testing for security"
          },
          {
            "letter": "C",
            "text": "hardware required to support new applications"
          },
          {
            "letter": "D",
            "text": "Writing specific test cases for third-party applications."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "18_33",
        "text": "What does AWS Marketplace allow users to do? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Sell unused Amazon EC2 Spot Instances."
          },
          {
            "letter": "B",
            "text": "Sell solutions to other AWS users."
          },
          {
            "letter": "C",
            "text": "Buy third-party software that runs on AWS."
          },
          {
            "letter": "D",
            "text": "Purchase AWS security and compliance documents."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "18_34",
        "text": "What does it mean if a user deploys a hybrid cloud architecture on AWS?",
        "options": [
          {
            "letter": "A",
            "text": "All resources run using on-premises infrastructure."
          },
          {
            "letter": "B",
            "text": "Some resources run on-premises and some run in a colocation center."
          },
          {
            "letter": "C",
            "text": "All resources run in the AWS Cloud."
          },
          {
            "letter": "D",
            "text": "Some resources run on-premises and some run in the AWS Cloud."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "18_35",
        "text": "Which AWS service allows users to identify the changes made to a resource over time?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Inspector"
          },
          {
            "letter": "B",
            "text": "AWS Config"
          },
          {
            "letter": "C",
            "text": "AWS Service Catalog"
          },
          {
            "letter": "D",
            "text": "AWS IAM"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "18_36",
        "text": "How can a company reduce its Total Cost of Ownership (TCO) using AWS?",
        "options": [
          {
            "letter": "A",
            "text": "By minimizing large capital expenditures"
          },
          {
            "letter": "B",
            "text": "By having no responsibility for third-party license costs"
          },
          {
            "letter": "C",
            "text": "By having no operational expenditures"
          },
          {
            "letter": "D",
            "text": "By having AWS manage applications"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - AWS helps you reduce Total Cost of Ownership (TCO) by reducing the need to invest in large capital expenditures and providing a pay-as-you-go model that empowers you to invest in the capacity you need and use it only when the business requires it. Reference:."
      },
      {
        "id": "18_37",
        "text": "Which activity is a customer responsibility in the AWS Cloud according to the AWS shared responsibility model?",
        "options": [
          {
            "letter": "A",
            "text": "Ensuring network connectivity from AWS to the internet"
          },
          {
            "letter": "B",
            "text": "Patching and fixing flaws within the AWS Cloud infrastructure"
          },
          {
            "letter": "C",
            "text": "Ensuring the physical security of cloud data centers"
          },
          {
            "letter": "D",
            "text": "Ensuring Amazon EBS volumes are backed up"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "18_38",
        "text": "What are the advantages of the AWS Cloud? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Fixed rate monthly cost"
          },
          {
            "letter": "B",
            "text": "No need to guess capacity requirements"
          },
          {
            "letter": "C",
            "text": "Increased speed to market"
          },
          {
            "letter": "D",
            "text": "Increased upfront capital expenditure"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "18_39",
        "text": "When comparing the total cost of ownership (TCO) of an on-premises infrastructure to a cloud architecture, what costs should be considered? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "The credit card processing fees for application transactions in the cloud."
          },
          {
            "letter": "B",
            "text": "The cost of purchasing and installing server hardware in the on-premises data."
          },
          {
            "letter": "C",
            "text": "The cost of administering the infrastructure, including operating system and software installations, patches, backups, and recovering from failures."
          },
          {
            "letter": "D",
            "text": "The costs of third-party penetration testing."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "18_40",
        "text": "Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?",
        "options": [
          {
            "letter": "A",
            "text": "Service control policies (SCPs)"
          },
          {
            "letter": "B",
            "text": "Consolidated billing"
          },
          {
            "letter": "C",
            "text": "All Upfront Reserved Instances"
          },
          {
            "letter": "D",
            "text": "AWS Cost Explorer"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "18_41",
        "text": "What is one of the customer's responsibilities according to the AWS shared responsibility model?",
        "options": [
          {
            "letter": "A",
            "text": "Virtualization infrastructure"
          },
          {
            "letter": "B",
            "text": "Network infrastructure"
          },
          {
            "letter": "C",
            "text": "Application security"
          },
          {
            "letter": "D",
            "text": "Physical security of hardware"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "18_42",
        "text": "What helps a company provide a lower latency experience to its users globally?",
        "options": [
          {
            "letter": "A",
            "text": "Using an AWS Region that is central to all users"
          },
          {
            "letter": "B",
            "text": "Using a second Availability Zone in the AWS Region that is using used"
          },
          {
            "letter": "C",
            "text": "Enabling caching in the AWS Region that is being used"
          },
          {
            "letter": "D",
            "text": "Using edge locations to put content closer to all users"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "18_43",
        "text": "How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?",
        "options": [
          {
            "letter": "A",
            "text": "Users do not have to wait for infrastructure provisioning."
          },
          {
            "letter": "B",
            "text": "The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure."
          },
          {
            "letter": "C",
            "text": "AWS takes over application configuration management on behalf of users."
          },
          {
            "letter": "D",
            "text": "Users do not need to address security and compliance issues."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "18_44",
        "text": "Which AWS service provides a quick and automated way to create and manage AWS accounts?",
        "options": [
          {
            "letter": "A",
            "text": "AWS QuickSight"
          },
          {
            "letter": "B",
            "text": "Amazon Lightsail"
          },
          {
            "letter": "C",
            "text": "AWS Organizations"
          },
          {
            "letter": "D",
            "text": "Amazon Connect"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "18_45",
        "text": "Which Amazon RDS feature can be used to achieve high availability?",
        "options": [
          {
            "letter": "A",
            "text": "Multiple Availability Zones"
          },
          {
            "letter": "B",
            "text": "Amazon Reserved Instances"
          },
          {
            "letter": "C",
            "text": "Provisioned IOPS storage"
          },
          {
            "letter": "D",
            "text": "Enhanced monitoring"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - Amazon RDS provides high availability and failover support for DB instances using Multi-AZ deployments. - Amazon RDS uses several different technologies to provide failover support. - Multi-AZ deployments for Oracle, PostgreSQL, MySQL, and MariaDB DB instances use Amazon's failover technology. - SQL Server DB instances use SQL Server Database Mirroring (DBM). Reference:."
      },
      {
        "id": "18_46",
        "text": "Where should users report that AWS resources are being used for malicious purposes?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Abuse team"
          },
          {
            "letter": "B",
            "text": "AWS Shield"
          },
          {
            "letter": "C",
            "text": "AWS Support"
          },
          {
            "letter": "D",
            "text": "AWS Developer Forums"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "18_47",
        "text": "Which AWS service needs to be enabled to track all user account changes within the AWS Management Console?",
        "options": [
          {
            "letter": "A",
            "text": "AWS CloudTrail"
          },
          {
            "letter": "B",
            "text": "Amazon Simple Notification Service (Amazon SNS)"
          },
          {
            "letter": "C",
            "text": "VPC Flow Logs"
          },
          {
            "letter": "D",
            "text": "AWS CloudHSM"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - AWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account. - With CloudTrail, you can log, continuously monitor, and retain account activity related to actions across your AWS infrastructure. - CloudTrail provides event history of your AWS account activity, including actions taken through the AWS Management Console, AWS SDKs, command line tools, and other AWS services. - This event history simplifies security analysis, resource change tracking, and troubleshooting. - In addition, you can use CloudTrail to detect unusual activity in your AWS accounts. - These capabilities help simplify operational analysis and troubleshooting. Reference:."
      },
      {
        "id": "18_48",
        "text": "What is an AWS Cloud design best practice?",
        "options": [
          {
            "letter": "A",
            "text": "Tight coupling of components"
          },
          {
            "letter": "B",
            "text": "Single point of failure"
          },
          {
            "letter": "C",
            "text": "High availability"
          },
          {
            "letter": "D",
            "text": "Overprovisioning of resources"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "18_49",
        "text": "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Elastic Compute Cloud (Amazon EC2) costs are billed on a monthly basis."
          },
          {
            "letter": "B",
            "text": "Customers retain full administrative access to their Amazon EC2 instances."
          },
          {
            "letter": "C",
            "text": "Amazon EC2 instances can be launched on-demand when needed."
          },
          {
            "letter": "D",
            "text": "Customers can permanently run enough instances to handle peak workloads."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - The ability to launch instances on-demand when needed allows customers launch and terminate instances in response to a varying workload. - This is a more economical practice than purchasing enough on-premises servers to handle the peak load."
      },
      {
        "id": "18_50",
        "text": "Which AWS service would simplify migration of a database to AWS?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Storage Gateway"
          },
          {
            "letter": "B",
            "text": "AWS Database Migration Service (AWS DMS)"
          },
          {
            "letter": "C",
            "text": "Amazon Elastic Compute Cloud (Amazon EC2)"
          },
          {
            "letter": "D",
            "text": "Amazon AppStream 2.0"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      }
    ]
  },
  {
    "id": 19,
    "name": "Examen Pratique 19",
    "description": "Examen Pratique 19 - 50 questions",
    "questionCount": 50,
    "duration": 90,
    "questions": [
      {
        "id": "19_1",
        "text": "Which AWS offering enables customers to find, buy, and immediately start using software solutions in their AWS environment?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Config"
          },
          {
            "letter": "B",
            "text": "AWS OpsWorks"
          },
          {
            "letter": "C",
            "text": "AWS SDK"
          },
          {
            "letter": "D",
            "text": "AWS Marketplace"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "19_2",
        "text": "Which AWS networking service enables a company to create a virtual network within AWS?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Config"
          },
          {
            "letter": "B",
            "text": "Amazon Route 53"
          },
          {
            "letter": "C",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "D",
            "text": "Amazon Virtual Private Cloud (Amazon VPC."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "19_3",
        "text": "Which of the following is AWS's responsibility under the AWS shared responsibility model?",
        "options": [
          {
            "letter": "A",
            "text": "Configuring third-party applications"
          },
          {
            "letter": "B",
            "text": "Maintaining physical hardware"
          },
          {
            "letter": "C",
            "text": "Securing application access and data"
          },
          {
            "letter": "D",
            "text": "Managing custom Amazon Machine Images (AMIs)"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "19_4",
        "text": "Which component of AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Regions"
          },
          {
            "letter": "B",
            "text": "AWS edge locations"
          },
          {
            "letter": "C",
            "text": "AWS Availability Zones"
          },
          {
            "letter": "D",
            "text": "Amazon Virtual Private Cloud (Amazon VPC."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "19_5",
        "text": "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",
        "options": [
          {
            "letter": "A",
            "text": "Use AWS Cloud Directory"
          },
          {
            "letter": "B",
            "text": "Audit AWS Identity and Access Management (IAM) roles"
          },
          {
            "letter": "C",
            "text": "Enable Multi-Factor Authentication"
          },
          {
            "letter": "D",
            "text": "Enable AWS CloudTrail"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "19_6",
        "text": "Which service can identify the user that made the API call when an Amazon Elastic Compute Cloud (Amazon EC2) instance is terminated?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon CloudWatch"
          },
          {
            "letter": "B",
            "text": "AWS CloudTrail"
          },
          {
            "letter": "C",
            "text": "AWS X-Ray"
          },
          {
            "letter": "D",
            "text": "AWS Identity and Access Management (AWS IAM)"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "19_7",
        "text": "Which service would you use to send alerts based on Amazon CloudWatch alarms?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Simple Notification Service (Amazon SNS)"
          },
          {
            "letter": "B",
            "text": "AWS CloudTrail"
          },
          {
            "letter": "C",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "D",
            "text": "Amazon Route 53"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "19_8",
        "text": "Where can a customer find information about prohibited actions on AWS infrastructure?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "B",
            "text": "AWS Identity and Access Management (IAM)"
          },
          {
            "letter": "C",
            "text": "AWS Billing Console"
          },
          {
            "letter": "D",
            "text": "AWS Acceptable Use Policy"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "19_9",
        "text": "Which of the following is an example of how moving to the AWS Cloud reduces upfront cost?",
        "options": [
          {
            "letter": "A",
            "text": "By replacing large variable costs with lower capital investments"
          },
          {
            "letter": "B",
            "text": "By replacing large capital investments with lower variable costs"
          },
          {
            "letter": "C",
            "text": "By allowing the provisioning of compute and storage at a fixed level to meet peak demand"
          },
          {
            "letter": "D",
            "text": "By replacing the repeated scaling of virtual servers with a simpler fixed-scale model"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - AWS does not require minimum spend commitments or long-term contracts. - You replace large upfront expenses with low variable payments that only apply to what you use. - With AWS you are not bound to multi-year agreements or complicated licensing models. Reference:."
      },
      {
        "id": "19_10",
        "text": "When designing a typical three-tier web application, which AWS services and/or features improve availability and reduce the impact failures? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Auto Scaling for Amazon EC2 instances"
          },
          {
            "letter": "B",
            "text": "Amazon VPC subnet ACLs to check the health of a service"
          },
          {
            "letter": "C",
            "text": "Distributed resources across multiple Availability Zones"
          },
          {
            "letter": "D",
            "text": "AWS Server Migration Service (AWS SMS) to move Amazon EC2 instances into a different Region"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "19_11",
        "text": "Which cloud design principle aligns with AWS Cloud best practices?",
        "options": [
          {
            "letter": "A",
            "text": "Create fixed dependencies among application components"
          },
          {
            "letter": "B",
            "text": "Aggregate services on a single instance"
          },
          {
            "letter": "C",
            "text": "Deploy applications in a single Availability Zone"
          },
          {
            "letter": "D",
            "text": "Distribute the compute load across multiple resources"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - Use load balancing for offloading encryption termination (TLS) to improve performance and to manage and route traffic effectively. - Distribute traffic across multiple resources or services to allow your workload to take advantage of the elasticity that AWS provides. Reference:."
      },
      {
        "id": "19_12",
        "text": "Which of the following are recommended practices for managing IAM users? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Require IAM users to change their passwords after a specified period of time"
          },
          {
            "letter": "B",
            "text": "Prevent IAM users from reusing previous passwords"
          },
          {
            "letter": "C",
            "text": "Recommend that the same password be used on AWS and other sites"
          },
          {
            "letter": "D",
            "text": "Require IAM users to store their passwords in raw text"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "19_13",
        "text": "A company is migrating from on-premises data centers to the AWS Cloud and is looking for hands-on help with the project. How can the company get this support? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Ask for a quote from the AWS Marketplace team to perform a migration into the company's AWS account."
          },
          {
            "letter": "B",
            "text": "Contact AWS Support and open a case for assistance"
          },
          {
            "letter": "C",
            "text": "Use AWS Professional Services to provide guidance and to set up an AWS Landing Zone in the company's AWS account"
          },
          {
            "letter": "D",
            "text": "Select a partner from the AWS Partner Network (APN) to assist with the migration"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "19_14",
        "text": "How does the AWS Enterprise Support Concierge team help users?",
        "options": [
          {
            "letter": "A",
            "text": "Supporting application development"
          },
          {
            "letter": "B",
            "text": "Providing architecture guidance"
          },
          {
            "letter": "C",
            "text": "Answering billing and account inquires"
          },
          {
            "letter": "D",
            "text": "Answering questions regarding technical support cases"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "19_15",
        "text": "An application designed to span multiple Availability Zones is described as:",
        "options": [
          {
            "letter": "A",
            "text": "being highly available"
          },
          {
            "letter": "B",
            "text": "having global reach"
          },
          {
            "letter": "C",
            "text": "using an economy of scale"
          },
          {
            "letter": "D",
            "text": "having elasticity"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. being highly available."
      },
      {
        "id": "19_16",
        "text": "A new service using AWS must be highly available. Yet, due to regulatory requirements, all of its Amazon EC2 instances must be located in a single geographic area. According to best practices, to meet these requirements, the EC2 instances must be placed in at least two:",
        "options": [
          {
            "letter": "A",
            "text": "AWS Regions"
          },
          {
            "letter": "B",
            "text": "Availability Zones"
          },
          {
            "letter": "C",
            "text": "subnets"
          },
          {
            "letter": "D",
            "text": "placement groups"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "19_17",
        "text": "Which AWS tool is used to compare the cost of running an application on-premises to running the application in the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "B",
            "text": "AWS Simple Monthly Calculator"
          },
          {
            "letter": "C",
            "text": "AWS Pricing Calculator"
          },
          {
            "letter": "D",
            "text": "Cost Explorer"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "19_18",
        "text": "A company has multiple AWS accounts within AWS Organizations and wants to apply the Amazon EC2 Reserved Instances benefit to a single account only. Which action should be taken?",
        "options": [
          {
            "letter": "A",
            "text": "Purchase the Reserved Instances from master payer account and turn off Reserved Instance sharing."
          },
          {
            "letter": "B",
            "text": "Enable billing alerts in the AWS Billing and Cost Management console."
          },
          {
            "letter": "C",
            "text": "Purchase the Reserved Instances in individual linked accounts and turn off Reserved Instance sharing from the payer level."
          },
          {
            "letter": "D",
            "text": "Enable Reserved Instance sharing in the AWS Billing and Cost Management console."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "19_19",
        "text": "Which situation should be reported to the AWS Abuse team?",
        "options": [
          {
            "letter": "A",
            "text": "In Availability Zone has a service disruption"
          },
          {
            "letter": "B",
            "text": "An intrusion attempt is made from an AWS IP address"
          },
          {
            "letter": "C",
            "text": "A user has trouble accessing an Amazon S3 bucket from an AWS IP address"
          },
          {
            "letter": "D",
            "text": "A user needs to change payment methods due to a compromise"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "19_20",
        "text": "A company is planning to launch an ecommerce site in a single AWS Region to a worldwide user base. Which AWS services will allow the company to reach users and provide low latency and high transfer speeds? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Application Load Balancer"
          },
          {
            "letter": "B",
            "text": "AWS Global Accelerator"
          },
          {
            "letter": "C",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "D",
            "text": "Amazon CloudFront"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "19_21",
        "text": "Which AWS service or resource is serverless?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Lambda"
          },
          {
            "letter": "B",
            "text": "Amazon EC2 instances"
          },
          {
            "letter": "C",
            "text": "Amazon Lightsail"
          },
          {
            "letter": "D",
            "text": "Amazon ElastiCache"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "19_22",
        "text": "Which of the following are components of Amazon VPC? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Objects"
          },
          {
            "letter": "B",
            "text": "Subnets"
          },
          {
            "letter": "C",
            "text": "Buckets"
          },
          {
            "letter": "D",
            "text": "Internet gateways"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "19_23",
        "text": "AWS Budgets can be used to:",
        "options": [
          {
            "letter": "A",
            "text": "prevent a given user from creating a resource"
          },
          {
            "letter": "B",
            "text": "send an alert when the utilization of Reserved Instances drops below a certain percentage"
          },
          {
            "letter": "C",
            "text": "set resource limits in AWS accounts to prevent overspending"
          },
          {
            "letter": "D",
            "text": "split an AWS bill across multiple forms of payment"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "19_24",
        "text": "Which of the following will enhance the security of access to the AWS Management Console? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Secrets Manager"
          },
          {
            "letter": "B",
            "text": "AWS Certificate Manager"
          },
          {
            "letter": "C",
            "text": "AWS Multi-Factor Authentication (AWS MFA)"
          },
          {
            "letter": "D",
            "text": "Security groups"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "19_25",
        "text": "The AWS Trusted Advisor checks include recommendations regarding which of the following? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Information on Amazon S3 bucket permissions"
          },
          {
            "letter": "B",
            "text": "AWS service outages"
          },
          {
            "letter": "C",
            "text": "Multi-factor authentication enabled on the AWS account root user"
          },
          {
            "letter": "D",
            "text": "Available software patches"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "19_26",
        "text": "Which functions can users perform using AWS KMS?",
        "options": [
          {
            "letter": "A",
            "text": "Create and manage AWS access keys for the AWS account root user"
          },
          {
            "letter": "B",
            "text": "Create and manage AWS access keys for an AWS account IAM user"
          },
          {
            "letter": "C",
            "text": "Create and manage keys for encryption and decryption of data"
          },
          {
            "letter": "D",
            "text": "Create and manage keys for multi-factor authentication"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "19_27",
        "text": "How does AWS Trusted Advisor provide guidance to users of the AWS Cloud? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "It identifies software vulnerabilities in applications running on AWS"
          },
          {
            "letter": "B",
            "text": "It provides a list of cost optimization recommendations based on current AWS usage"
          },
          {
            "letter": "C",
            "text": "It detects potential security vulnerabilities caused by permissions settings on account resources"
          },
          {
            "letter": "D",
            "text": "It automatically corrects potential security issues caused by permissions settings on account resources"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. It provides a list of cost optimization recommendations based on current AWS usage."
      },
      {
        "id": "19_28",
        "text": "Which of the following are advantages of the AWS Cloud? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "AWS manages the maintenance of the cloud infrastructure"
          },
          {
            "letter": "B",
            "text": "AWS manages the security of applications built on AWS"
          },
          {
            "letter": "C",
            "text": "AWS manages capacity planning for physical servers"
          },
          {
            "letter": "D",
            "text": "AWS manages the development of applications on AWS"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "19_29",
        "text": "A user deploys an Amazon RDS DB instance in multiple Availability Zones. This strategy involves which pillar of the AWS Well-Architected Framework?",
        "options": [
          {
            "letter": "A",
            "text": "Performance efficiency"
          },
          {
            "letter": "B",
            "text": "Reliability"
          },
          {
            "letter": "C",
            "text": "Cost optimization"
          },
          {
            "letter": "D",
            "text": "Security"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "19_30",
        "text": "Which AWS services provide a user with connectivity between the AWS Cloud and on-premises resources? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "AWS VPN"
          },
          {
            "letter": "B",
            "text": "Amazon Connect"
          },
          {
            "letter": "C",
            "text": "Amazon Cognito"
          },
          {
            "letter": "D",
            "text": "AWS Direct Connect"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - -."
      },
      {
        "id": "19_31",
        "text": "Which AWS service is used to pay AWS bills, and monitor usage and budget costs?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Billing and Cost Management"
          },
          {
            "letter": "B",
            "text": "Consolidated billing"
          },
          {
            "letter": "C",
            "text": "Amazon CloudWatch"
          },
          {
            "letter": "D",
            "text": "Amazon QuickSight"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "19_32",
        "text": "Which element of the AWS global infrastructure consists of one or more discrete data centers, each with redundant power, networking, and connectivity, which are housed in separate facilities?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Regions"
          },
          {
            "letter": "B",
            "text": "Availability Zones"
          },
          {
            "letter": "C",
            "text": "Edge locations"
          },
          {
            "letter": "D",
            "text": "Amazon CloudFront"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "19_33",
        "text": "Which Amazon VPC feature enables users to capture information about the IP traffic that reaches Amazon EC2 instances?",
        "options": [
          {
            "letter": "A",
            "text": "Security groups"
          },
          {
            "letter": "B",
            "text": "Elastic network interfaces"
          },
          {
            "letter": "C",
            "text": "Network ACLs"
          },
          {
            "letter": "D",
            "text": "VPC Flow Logs"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ": - VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC. - Flow log data can be published to Amazon CloudWatch Logs or Amazon S3. After you've created a flow log, you can retrieve and view its data in the chosen destination. Reference:."
      },
      {
        "id": "19_34",
        "text": "Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon AutoScaling"
          },
          {
            "letter": "B",
            "text": "Amazon Redshift"
          },
          {
            "letter": "C",
            "text": "AWS CloudTrail"
          },
          {
            "letter": "D",
            "text": "AWS Lambda"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "19_35",
        "text": "AWS Enterprise Support users have access to which service or feature that is not available to users with other AWS Support plans?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "B",
            "text": "AWS Support case"
          },
          {
            "letter": "C",
            "text": "Concierge team"
          },
          {
            "letter": "D",
            "text": "Amazon Connect"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "19_36",
        "text": "A company wants to migrate a MySQL database to AWS but does not have the budget for Database Administrators to handle routine tasks including provisioning, patching, and performing backups. Which AWS service will support this use case?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon RDS"
          },
          {
            "letter": "B",
            "text": "Amazon DynamoDB"
          },
          {
            "letter": "C",
            "text": "Amazon DocumentDB"
          },
          {
            "letter": "D",
            "text": "Amazon ElastiCache"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - Amazon RDS makes it easy to set up, operate, and scale a relational database in the cloud. - It provides cost-efficient and resizable capacity while automating time-consuming administration tasks, such as hardware provisioning, database setup, patching, and backups. - It frees you to focus on your applications, so you can give them the fast performance, high availability, security, and compatibility that they need. Reference:."
      },
      {
        "id": "19_37",
        "text": "A company wants to expand from one AWS Region into a second AWS Region. What does the company need to do to start supporting the new Region?",
        "options": [
          {
            "letter": "A",
            "text": "Contact an AWS Account Manager to sign a new contract"
          },
          {
            "letter": "B",
            "text": "Move an Availability Zone to the new Region"
          },
          {
            "letter": "C",
            "text": "Begin deploying resources in the second Region"
          },
          {
            "letter": "D",
            "text": "Download the AWS Management Console for the new Region"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "19_38",
        "text": "A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. Which Amazon EC2 instance pricing option will meet these requirements?",
        "options": [
          {
            "letter": "A",
            "text": "Dedicated Hosts"
          },
          {
            "letter": "B",
            "text": "Dedicated Instances"
          },
          {
            "letter": "C",
            "text": "Spot Instances"
          },
          {
            "letter": "D",
            "text": "Reserved Instances"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "19_39",
        "text": "Which AWS service will provide a way to generate encryption keys that can be used to encrypt data? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Macie"
          },
          {
            "letter": "B",
            "text": "AWS Certificate Manager"
          },
          {
            "letter": "C",
            "text": "AWS Key Management Service (AWS KMS)"
          },
          {
            "letter": "D",
            "text": "AWS Secrets Manager"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - -."
      },
      {
        "id": "19_40",
        "text": "A company is planning to migrate from on-premises to the AWS Cloud. Which AWS tool or service provides detailed reports on estimated cost savings after migration?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Total Cost of Ownership (TCO) Calculator"
          },
          {
            "letter": "B",
            "text": "Cost Explorer"
          },
          {
            "letter": "C",
            "text": "AWS Budgets"
          },
          {
            "letter": "D",
            "text": "AWS Migration Hub"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": (26)."
      },
      {
        "id": "19_41",
        "text": "What can assist in evaluating an application for migration to the cloud? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "B",
            "text": "AWS Professional Services"
          },
          {
            "letter": "C",
            "text": "AWS Systems Manager"
          },
          {
            "letter": "D",
            "text": "AWS Partner Network (APN)"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Professional Services."
      },
      {
        "id": "19_42",
        "text": "Which AWS service helps users meet contractual and regulatory compliance requirements for data security by using dedicated hardware appliances within the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Secrets Manager"
          },
          {
            "letter": "B",
            "text": "AWS CloudHSM"
          },
          {
            "letter": "C",
            "text": "AWS Key Management Service (AWS KMS)"
          },
          {
            "letter": "D",
            "text": "AWS Directory Service"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - The AWS CloudHSM service helps you meet corporate, contractual, and regulatory compliance requirements for data security by using dedicated Hardware Security Module (HSM) instances within the AWS cloud. - AWS and AWS Marketplace partners offer a variety of solutions for protecting sensitive data within the AWS platform, but for some applications and data subject to contractual or regulatory mandates for managing cryptographic keys, additional protection may be necessary. - CloudHSM complements existing data protection solutions and allows you to protect your encryption keys within HSMs that are designed and validated to government standards for secure key management. - CloudHSM allows you to securely generate, store, and manage cryptographic keys used for data encryption in a way that keys are accessible only by you. Reference:."
      },
      {
        "id": "19_43",
        "text": "Under the AWS shared responsibility model, the customer manages which of the following? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Decommissioning of physical storage devices"
          },
          {
            "letter": "B",
            "text": "Security group and ACL configuration"
          },
          {
            "letter": "C",
            "text": "Patch management of an Amazon RDS instance operating system"
          },
          {
            "letter": "D",
            "text": "Controlling physical access to data centers"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "19_44",
        "text": "Which AWS service is suitable for an event-driven workload?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EC2"
          },
          {
            "letter": "B",
            "text": "AWS Elastic Beanstalk"
          },
          {
            "letter": "C",
            "text": "AWS Lambda"
          },
          {
            "letter": "D",
            "text": "Amazon Lumberyard"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - An easy-to-use service for deploying and scaling web applications and web services developed in a number of programming languages. - You can configure event notifications for your Elastic Beanstalk environment so that notable events can be automatically published to an SNS topic, then pushed to topic subscribers. - As an example, you may use this event-driven architecture to coordinate your continuous integration pipeline (such as Jenkins CI). - That way, whenever an environment is created, Elastic Beanstalk publishes this event to an SNS topic, which triggers a subscribing Lambda function, which then kicks off a CI job against your newly created Elastic Beanstalk environment. Reference:."
      },
      {
        "id": "19_45",
        "text": "What is a value proposition of the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "AWS is responsible for security in the AWS Cloud"
          },
          {
            "letter": "B",
            "text": "No long-term contract is required"
          },
          {
            "letter": "C",
            "text": "Provision new servers in days"
          },
          {
            "letter": "D",
            "text": "AWS manages user applications in the AWS Cloud"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "19_46",
        "text": "What is a characteristic of Amazon S3 cross-region replication?",
        "options": [
          {
            "letter": "A",
            "text": "Both source and destination S3 buckets must have versioning disabled"
          },
          {
            "letter": "B",
            "text": "The source and destination S3 buckets cannot be in different AWS Regions"
          },
          {
            "letter": "C",
            "text": "S3 buckets configured for cross-region replication can be owned by a single AWS account or by different accounts"
          },
          {
            "letter": "D",
            "text": "The source S3 bucket owner must have the source and destination AWS Regions disabled for their account"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "19_47",
        "text": "What is a user responsible for when running an application in the AWS Cloud? - A. Managing physical hardware",
        "options": [
          {
            "letter": "B",
            "text": "Updating the underlying hypervisor"
          },
          {
            "letter": "C",
            "text": "Providing a list of users approved for data center access"
          },
          {
            "letter": "D",
            "text": "Managing application software updates"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "19_48",
        "text": "A company that does business online needs to quickly deliver new functionality in an iterative manner, minimizing the time to market. Which AWS Cloud feature can provide this?",
        "options": [
          {
            "letter": "A",
            "text": "Elasticity"
          },
          {
            "letter": "B",
            "text": "High availability"
          },
          {
            "letter": "C",
            "text": "Agility"
          },
          {
            "letter": "D",
            "text": "Reliability"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "19_49",
        "text": "Which features or services can be used to monitor costs and expenses for an AWS account? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Cost and Usage report"
          },
          {
            "letter": "B",
            "text": "AWS product pages"
          },
          {
            "letter": "C",
            "text": "AWS Simple Monthly Calculator"
          },
          {
            "letter": "D",
            "text": "Billing alerts and Amazon CloudWatch alarms"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "19_50",
        "text": "Amazon Route 53 enables users to:",
        "options": [
          {
            "letter": "A",
            "text": "encrypt data in transit"
          },
          {
            "letter": "B",
            "text": "register DNS domain names"
          },
          {
            "letter": "C",
            "text": "generate and manage SSL certificates"
          },
          {
            "letter": "D",
            "text": "establish a dedicated network connection to AWS"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      }
    ]
  },
  {
    "id": 20,
    "name": "Examen Pratique 20",
    "description": "Examen Pratique 20 - 50 questions",
    "questionCount": 50,
    "duration": 90,
    "questions": [
      {
        "id": "20_1",
        "text": "Which AWS service helps identify malicious or unauthorized activities in AWS accounts and workloads?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Rekognition"
          },
          {
            "letter": "B",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "C",
            "text": "Amazon GuardDuty"
          },
          {
            "letter": "D",
            "text": "Amazon CloudWatch"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "20_2",
        "text": "A company wants to try a third-party ecommerce solution before deciding to use it long term. Which AWS service or tool will support this effort?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Marketplace"
          },
          {
            "letter": "B",
            "text": "AWS Partner Network (APN)"
          },
          {
            "letter": "C",
            "text": "AWS Managed Services"
          },
          {
            "letter": "D",
            "text": "AWS Service Catalog"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "20_3",
        "text": "Which AWS service is a managed NoSQL database?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Redshift"
          },
          {
            "letter": "B",
            "text": "Amazon DynamoDB"
          },
          {
            "letter": "C",
            "text": "Amazon Aurora"
          },
          {
            "letter": "D",
            "text": "Amazon RDS for MariaDB"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "20_4",
        "text": "Which AWS service should be used to create a billing alarm?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "B",
            "text": "AWS CloudTrail"
          },
          {
            "letter": "C",
            "text": "Amazon CloudWatch"
          },
          {
            "letter": "D",
            "text": "Amazon QuickSight"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "20_5",
        "text": "A company is hosting a web application in a Docker container on Amazon EC2. AWS is responsible for which of the following tasks?",
        "options": [
          {
            "letter": "A",
            "text": "Scaling the web application and services developed with Docker"
          },
          {
            "letter": "B",
            "text": "Provisioning or scheduling containers to run on clusters and maintain their availability"
          },
          {
            "letter": "C",
            "text": "Performing hardware maintenance in the AWS facilities that run the AWS Cloud"
          },
          {
            "letter": "D",
            "text": "Managing the guest operating system, including updates and security patches"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "20_6",
        "text": "Users are reporting latency when connecting to a website with a global customer base. Which AWS service will improve the customer experience by reducing latency?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon CloudFront"
          },
          {
            "letter": "B",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "C",
            "text": "Amazon EC2 Auto Scaling"
          },
          {
            "letter": "D",
            "text": "AWS Transit Gateway"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "20_7",
        "text": "Which actions represent best practices for using AWS IAM? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Configure a strong password policy"
          },
          {
            "letter": "B",
            "text": "Share the security credentials among users of AWS accounts who are in the same Region"
          },
          {
            "letter": "C",
            "text": "Use access keys to log in to the AWS Management Console"
          },
          {
            "letter": "D",
            "text": "Rotate access keys on a regular basis"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "20_8",
        "text": "Which AWS feature or service can be used to capture information about incoming and outgoing traffic in an AWS VPC infrastructure?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Config"
          },
          {
            "letter": "B",
            "text": "VPC Flow Logs"
          },
          {
            "letter": "C",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "D",
            "text": "AWS CloudTrail"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "20_9",
        "text": "A company wants to use an AWS service to monitor the health of application endpoints, with the ability to route traffic to healthy regional endpoints to improve application availability. Which service will support these requirements?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Inspector"
          },
          {
            "letter": "B",
            "text": "Amazon CloudWatch"
          },
          {
            "letter": "C",
            "text": "AWS Global Accelerator"
          },
          {
            "letter": "D",
            "text": "Amazon CloudFront"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - AWS Global Accelerator uses the AWS global network to optimize the path from your users to your applications, improving the performance of your traffic by as much as 60%. - AWS Global Accelerator continually monitors the health of your application endpoints and redirects traffic to healthy endpoints in less than 30 seconds. Reference:."
      },
      {
        "id": "20_10",
        "text": "According to the AWS Well-Architected Framework, what change management steps should be taken to achieve reliability in the AWS Cloud? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Use AWS Config to generate an inventory of AWS resources"
          },
          {
            "letter": "B",
            "text": "Use service limits to prevent users from creating or making changes to AWS resources"
          },
          {
            "letter": "C",
            "text": "Use AWS CloudTrail to record AWS API calls into an auditable log file"
          },
          {
            "letter": "D",
            "text": "Use AWS Certificate Manager to whitelist approved AWS resources and services"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Use AWS Config to generate an inventory of AWS resources."
      },
      {
        "id": "20_11",
        "text": "Which service can be used to monitor and receive alerts for AWS account root user AWS Management Console sign-in events?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon CloudWatch"
          },
          {
            "letter": "B",
            "text": "AWS Config"
          },
          {
            "letter": "C",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "D",
            "text": "AWS IAM"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "20_12",
        "text": "Which design principle should be considered when architecting in the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "Think of servers as non-disposable resources"
          },
          {
            "letter": "B",
            "text": "Use synchronous integration of services"
          },
          {
            "letter": "C",
            "text": "Design loosely coupled components"
          },
          {
            "letter": "D",
            "text": "Implement the least permissive rules for security groups"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "20_13",
        "text": "Which AWS services can be used to move data from on-premises data centers to AWS? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Snowball"
          },
          {
            "letter": "B",
            "text": "AWS Lambda"
          },
          {
            "letter": "C",
            "text": "AWS ElastiCache"
          },
          {
            "letter": "D",
            "text": "AWS Database Migration Service (AWS DMS)"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "20_14",
        "text": "A batch workload takes 5 hours to finish on an Amazon EC2 instance. The amount of data to be processed doubles monthly and the processing time is proportional. What is the best cloud architecture to address this consistently growing demand?",
        "options": [
          {
            "letter": "A",
            "text": "Run the application on a bigger EC2 instance size."
          },
          {
            "letter": "B",
            "text": "Switch to an EC2 instance family that better matches batch requirements."
          },
          {
            "letter": "C",
            "text": "Distribute the application across multiple EC2 instances and run the workload in parallel."
          },
          {
            "letter": "D",
            "text": "Run the application on a bare metal EC2 instance."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Distribute the application across multiple EC2 instances and run the workload in parallel.."
      },
      {
        "id": "20_15",
        "text": "Each department within a company has its own independent AWS account and its own payment method. New company leadership wants to centralize departmental governance and consolidate payments. How can this be achieved using AWS services or features?",
        "options": [
          {
            "letter": "A",
            "text": "Forward monthly invoices for each account. Then create IAM roles to allow cross-account access."
          },
          {
            "letter": "B",
            "text": "Create a new AWS account. Then configure AWS Organizations and invite all existing accounts to join."
          },
          {
            "letter": "C",
            "text": "Configure AWS Organizations in each of the existing accounts. Then link all accounts together."
          },
          {
            "letter": "D",
            "text": "Use Cost Explorer to combine costs from all accounts. Then replicate IAM policies across accounts."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "20_16",
        "text": "The ability to horizontally scale Amazon EC2 instances based on demand is an example of which concept in the AWS Cloud value proposition?",
        "options": [
          {
            "letter": "A",
            "text": "Economy of scale"
          },
          {
            "letter": "B",
            "text": "Elasticity"
          },
          {
            "letter": "C",
            "text": "High availability"
          },
          {
            "letter": "D",
            "text": "Agility"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Elasticity."
      },
      {
        "id": "20_17",
        "text": "An ecommerce company anticipates a huge increase in web traffic for two very popular upcoming shopping holidays. Which AWS service or feature can be configured to dynamically adjust resources to meet this change in demand?",
        "options": [
          {
            "letter": "A",
            "text": "AWS CloudTrail"
          },
          {
            "letter": "B",
            "text": "Amazon EC2 Auto Scaling"
          },
          {
            "letter": "C",
            "text": "Amazon Forecast"
          },
          {
            "letter": "D",
            "text": "AWS Config"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "20_18",
        "text": "Which AWS service enables users to securely connect to AWS resources over the public internet?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon VPC peering"
          },
          {
            "letter": "B",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "C",
            "text": "AWS VPN"
          },
          {
            "letter": "D",
            "text": "Amazon Pinpoint"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "20_19",
        "text": "Which tool is used to forecast AWS spending?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "B",
            "text": "AWS Organizations"
          },
          {
            "letter": "C",
            "text": "Cost Explorer"
          },
          {
            "letter": "D",
            "text": "Amazon Inspector"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "20_20",
        "text": "A company is running an ecommerce application hosted in Europe. To decrease latency for users who access the website from other parts of the world, the company would like to cache frequently accessed static content closer to the users. Which AWS service will support these requirements?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon ElastiCache"
          },
          {
            "letter": "B",
            "text": "Amazon CloudFront"
          },
          {
            "letter": "C",
            "text": "Amazon Elastic File System (Amazon EFS)"
          },
          {
            "letter": "D",
            "text": "Amazon Elastic Block Store (Amazon EBS)"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - Amazon CloudFront employs a global network of edge locations and regional edge caches that cache copies of your content close to your viewers. - Amazon CloudFront ensures that end-user requests are served by the closest edge location. - As a result, viewer requests travel a short distance, improving performance for your viewers. - For files not cached at the edge locations and the regional edge caches, Amazon CloudFront keeps persistent connections with your origin servers so that those files can be fetched from the origin servers as quickly as possible. Reference:."
      },
      {
        "id": "20_21",
        "text": "Which of the following is a component of the AWS Global Infrastructure?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Alexa"
          },
          {
            "letter": "B",
            "text": "AWS Regions"
          },
          {
            "letter": "C",
            "text": "Amazon Lightsail"
          },
          {
            "letter": "D",
            "text": "AWS Organizations"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "20_22",
        "text": "Which AWS service will help users determine if an application running on an Amazon EC2 instance has sufficient CPU capacity?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon CloudWatch"
          },
          {
            "letter": "B",
            "text": "AWS Config"
          },
          {
            "letter": "C",
            "text": "AWS CloudTrail"
          },
          {
            "letter": "D",
            "text": "Amazon Inspector"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "20_23",
        "text": "Why is it beneficial to use Elastic Load Balancers with applications?",
        "options": [
          {
            "letter": "A",
            "text": "They allow for the conversion from Application Load Balancers to Classic Load Balancers."
          },
          {
            "letter": "B",
            "text": "They are capable of handling constant changes in network traffic patterns."
          },
          {
            "letter": "C",
            "text": "They automatically adjust capacity."
          },
          {
            "letter": "D",
            "text": "They are provided at no charge to users."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "20_24",
        "text": "Which tasks are the customer's responsibility in the AWS shared responsibility model? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Infrastructure facilities access management"
          },
          {
            "letter": "B",
            "text": "Cloud infrastructure hardware lifecycle management"
          },
          {
            "letter": "C",
            "text": "Configuration management of user's applications"
          },
          {
            "letter": "D",
            "text": "Networking infrastructure protection"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "20_25",
        "text": "IT systems should be designed to reduce interdependencies, so that a change or failure in one component does not cascade to other components. This is an example of which principle of cloud architecture design?",
        "options": [
          {
            "letter": "A",
            "text": "Scalability"
          },
          {
            "letter": "B",
            "text": "Loose coupling"
          },
          {
            "letter": "C",
            "text": "Automation"
          },
          {
            "letter": "D",
            "text": "Automatic scaling"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "20_26",
        "text": "Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "AWS WAF"
          },
          {
            "letter": "B",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "C",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "D",
            "text": "AWS Organizations"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": - -."
      },
      {
        "id": "20_27",
        "text": "An application runs on multiple Amazon EC2 instances that access a shared file system simultaneously. Which AWS storage service should be used?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EBS"
          },
          {
            "letter": "B",
            "text": "Amazon EFS"
          },
          {
            "letter": "C",
            "text": "Amazon S3"
          },
          {
            "letter": "D",
            "text": "AWS Artifact"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "20_28",
        "text": "A web application is hosted on AWS using an Elastic Load Balancer, multiple Amazon EC2 instances, and Amazon RDS. Which security measures fall under the responsibility of AWS? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Running a virus scan on EC2 instances"
          },
          {
            "letter": "B",
            "text": "Protecting against IP spoofing and packet sniffing"
          },
          {
            "letter": "C",
            "text": "Installing the latest security patches on the RDS instance"
          },
          {
            "letter": "D",
            "text": "Encrypting communication between the EC2 instances and the Elastic Load Balancer"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Protecting against IP spoofing and packet sniffing."
      },
      {
        "id": "20_29",
        "text": "What is the benefit of elasticity in the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "Ensure web traffic is automatically spread across multiple AWS Regions."
          },
          {
            "letter": "B",
            "text": "Minimize storage costs by automatically archiving log data."
          },
          {
            "letter": "C",
            "text": "Enable AWS to automatically select the most cost-effective services."
          },
          {
            "letter": "D",
            "text": "Automatically adjust the required compute capacity to maintain consistent performance."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "20_30",
        "text": "The continual reduction of AWS Cloud pricing is due to:",
        "options": [
          {
            "letter": "A",
            "text": "pay-as-you go pricing"
          },
          {
            "letter": "B",
            "text": "the AWS global infrastructure"
          },
          {
            "letter": "C",
            "text": "economies of scale"
          },
          {
            "letter": "D",
            "text": "reserved storage pricing"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. economies of scale."
      },
      {
        "id": "20_31",
        "text": "A company needs an Amazon S3 bucket that cannot have any public objects due to compliance requirements. How can this be accomplished?",
        "options": [
          {
            "letter": "A",
            "text": "Enable S3 Block Public Access from the AWS Management Console."
          },
          {
            "letter": "B",
            "text": "Hold a team meeting to discuss the importance if only uploading private S3 objects."
          },
          {
            "letter": "C",
            "text": "Require all S3 objects to be manually approved before uploading."
          },
          {
            "letter": "D",
            "text": "Create a service to monitor all S3 uploads and remove any public uploads."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "20_32",
        "text": "A Cloud Practitioner identifies a billing issue after examining the AWS Cost and Usage report in the AWS Management Console. Which action can be taken to resolve this?",
        "options": [
          {
            "letter": "A",
            "text": "Open a detailed case related to billing and submit it to AWS Support for help."
          },
          {
            "letter": "B",
            "text": "Upload data describing the issue to a new object in a private Amazon S3 bucket."
          },
          {
            "letter": "C",
            "text": "Create a pricing application and deploy it to a right-sized Amazon EC2 instance for more information."
          },
          {
            "letter": "D",
            "text": "Proceed with creating a new dashboard in Amazon QuickSight."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "20_33",
        "text": "What does the AWS Simple Monthly Calculator do?",
        "options": [
          {
            "letter": "A",
            "text": "Compares on-premises costs to colocation environments"
          },
          {
            "letter": "B",
            "text": "Estimates monthly billing based on projected usage"
          },
          {
            "letter": "C",
            "text": "Estimates power consumption at existing data centers"
          },
          {
            "letter": "D",
            "text": "Estimates CPU utilization"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "20_34",
        "text": "Who is responsible for patching the guest operating system for Amazon RDS?",
        "options": [
          {
            "letter": "A",
            "text": "The AWS Product team"
          },
          {
            "letter": "B",
            "text": "The customer Database Administrator"
          },
          {
            "letter": "C",
            "text": "Managed partners"
          },
          {
            "letter": "D",
            "text": "AWS Support"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "20_35",
        "text": "Which AWS services may be scaled using AWS Auto Scaling? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EC2"
          },
          {
            "letter": "B",
            "text": "Amazon DynamoDB"
          },
          {
            "letter": "C",
            "text": "Amazon S3"
          },
          {
            "letter": "D",
            "text": "Amazon Route 53"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "20_36",
        "text": "Which of the following are benefits of AWS Global Accelerator? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Reduced cost to run services on AWS"
          },
          {
            "letter": "B",
            "text": "Improved availability of applications deployed on AWS"
          },
          {
            "letter": "C",
            "text": "Higher durability of data stored on AWS"
          },
          {
            "letter": "D",
            "text": "Decreased latency to reach applications deployed on AWS"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "20_37",
        "text": "A user who wants to get help with billing and reactivate a suspended account should submit an account and billing request to:",
        "options": [
          {
            "letter": "A",
            "text": "the AWS Support forum"
          },
          {
            "letter": "B",
            "text": "AWS Abuse"
          },
          {
            "letter": "C",
            "text": "an AWS Solutions Architect"
          },
          {
            "letter": "D",
            "text": "AWS Support"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "20_38",
        "text": "Which AWS Cloud best practice uses the elasticity and agility of cloud computing?",
        "options": [
          {
            "letter": "A",
            "text": "Provision capacity based on past usage and theoretical peaks"
          },
          {
            "letter": "B",
            "text": "Dynamically and predictively scale to meet usage demands"
          },
          {
            "letter": "C",
            "text": "Build the application and infrastructure in a data center that grants physical access"
          },
          {
            "letter": "D",
            "text": "Break apart the application into loosely coupled components"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - In a traditional computing environment, you provision capacity based on an estimate of a theoretical maximum peak. - This can result in periods where expensive resources are sitting idle or occasions of insufficient capacity. - With cloud computing, you can access as much or as little capacity as you need and dynamically scale to meet actual demand, while only paying for what you use."
      },
      {
        "id": "20_39",
        "text": "Which method helps to optimize costs of users moving to the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "Paying only for what is used"
          },
          {
            "letter": "B",
            "text": "Purchasing hardware before it is needed"
          },
          {
            "letter": "C",
            "text": "Manually provisioning cloud resources"
          },
          {
            "letter": "D",
            "text": "Purchasing for the maximum possible load"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "20_40",
        "text": "Under the AWS shared responsibility model, which of the following is a customer responsibility?",
        "options": [
          {
            "letter": "A",
            "text": "Installing security patches for the Xen and KVM hypervisors"
          },
          {
            "letter": "B",
            "text": "Installing operating system patches for Amazon DynamoDB"
          },
          {
            "letter": "C",
            "text": "Installing operating system security patches for Amazon EC2 database instances"
          },
          {
            "letter": "D",
            "text": "Installing operating system security patches for Amazon RDS database instances"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "20_41",
        "text": "The AWS Cost Management tools give users the ability to do which of the following? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Terminate all AWS resources automatically if budget thresholds are exceeded."
          },
          {
            "letter": "B",
            "text": "Break down AWS costs by day, service, and linked AWS account."
          },
          {
            "letter": "C",
            "text": "Create budgets and receive notifications if current of forecasted usage exceeds the budgets."
          },
          {
            "letter": "D",
            "text": "Switch automatically to Reserved Instances or Spot Instances, whichever is most cost-effective."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Break down AWS costs by day, service, and linked AWS account.."
      },
      {
        "id": "20_42",
        "text": "Under the AWS shared responsibility model, the security and patching of the guest operating system is the responsibility of:",
        "options": [
          {
            "letter": "A",
            "text": "AWS Support"
          },
          {
            "letter": "B",
            "text": "the customer"
          },
          {
            "letter": "C",
            "text": "AWS Systems Manager"
          },
          {
            "letter": "D",
            "text": "AWS Config"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "20_43",
        "text": "Which AWS service makes it easy to create and manage AWS users and groups, and provide them with secure access to AWS resources at no charge?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "B",
            "text": "Amazon Connect"
          },
          {
            "letter": "C",
            "text": "AWS Identity and Access Management (IAM)"
          },
          {
            "letter": "D",
            "text": "AWS Firewall Manager"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - -."
      },
      {
        "id": "20_44",
        "text": "Which AWS service provides on-demand of AWS security and compliance documentation?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Directory Service"
          },
          {
            "letter": "B",
            "text": "AWS Artifact"
          },
          {
            "letter": "C",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "D",
            "text": "Amazon Inspector"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": ."
      },
      {
        "id": "20_45",
        "text": "Which AWS service can be used to turn text into life-like speech?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Polly"
          },
          {
            "letter": "B",
            "text": "Amazon Transcribe"
          },
          {
            "letter": "C",
            "text": "Amazon Rekognition"
          },
          {
            "letter": "D",
            "text": "Amazon Lex"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ": ."
      },
      {
        "id": "20_46",
        "text": "What is one of the core principles to follow when designing a highly available application in the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "Design using a serverless architecture"
          },
          {
            "letter": "B",
            "text": "Assume that all components within an application can fail"
          },
          {
            "letter": "C",
            "text": "Design AWS Auto Scaling into every application"
          },
          {
            "letter": "D",
            "text": "Design all components using open-source code"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Assume that all components within an application can fail."
      },
      {
        "id": "20_47",
        "text": "A user needs to generate a report that outlines the status of key security checks in an AWS account. The report must include:",
        "options": [
          {
            "letter": "A",
            "text": "Amazon QuickSight dashboard"
          },
          {
            "letter": "B",
            "text": "AWS CloudTrail trails"
          },
          {
            "letter": "C",
            "text": "AWS Trusted Advisor report"
          },
          {
            "letter": "D",
            "text": "IAM credential report"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": #Security."
      },
      {
        "id": "20_48",
        "text": "Which Amazon EC2 pricing model should be used to comply with per-core software license requirements?",
        "options": [
          {
            "letter": "A",
            "text": "Dedicated Hosts"
          },
          {
            "letter": "B",
            "text": "On-Demand Instances"
          },
          {
            "letter": "C",
            "text": "Spot Instances"
          },
          {
            "letter": "D",
            "text": "Reserved Instances"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "20_49",
        "text": "Which of the AWS global infrastructure is used to cache copies of content for faster delivery to users across the globe?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Regions"
          },
          {
            "letter": "B",
            "text": "Availability Zones"
          },
          {
            "letter": "C",
            "text": "Edge locations"
          },
          {
            "letter": "D",
            "text": "Data centers"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ": - When your web traffic is geo-dispersed, it's not always feasible and certainly not cost effective to replicate your entire infrastructure across the globe. - A CDN provides you the ability to utilize its global network of edge locations to deliver a cached copy of web content such as videos, webpages, images and so on to your customers. - To reduce response time, the CDN utilizes the nearest edge location to the customer or originating request location in order to reduce the response time. - Throughput is dramatically increased given that the web assets are delivered from cache. - For dynamic data, many CDNs can be configured to retrieve data from the origin servers. Reference:."
      },
      {
        "id": "20_50",
        "text": "Using AWS Config to record, audit, and evaluate changes to AWS resources to enable traceability is an example of which AWS Well-Architected Framework pillar?",
        "options": [
          {
            "letter": "A",
            "text": "Security"
          },
          {
            "letter": "B",
            "text": "Operational excellence"
          },
          {
            "letter": "C",
            "text": "Performance efficiency"
          },
          {
            "letter": "D",
            "text": "Cost optimization"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      }
    ]
  },
  {
    "id": 21,
    "name": "Examen Pratique 21",
    "description": "Examen Pratique 21 - 50 questions",
    "questionCount": 50,
    "duration": 90,
    "questions": [
      {
        "id": "21_1",
        "text": "A user needs to quickly deploy a non-relational database on AWS. The user does not want to manage the underlying hardware or the database software. Which AWS service can be used to accomplish this?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon RDS"
          },
          {
            "letter": "B",
            "text": "Amazon DynamoDB"
          },
          {
            "letter": "C",
            "text": "Amazon Aurora"
          },
          {
            "letter": "D",
            "text": "Amazon Redshift"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "21_2",
        "text": "A Cloud Practitioner is developing a disaster recovery plan and intends to replicate data between multiple geographic areas. Which of the following meets these requirements?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Accounts"
          },
          {
            "letter": "B",
            "text": "AWS Regions"
          },
          {
            "letter": "C",
            "text": "Availability Zones"
          },
          {
            "letter": "D",
            "text": "Edge locations"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "21_3",
        "text": "Which features and benefits does the AWS Organizations service provide? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Establishing real-time communications between members of an internal team"
          },
          {
            "letter": "B",
            "text": "Facilitating the use of NoSQL databases"
          },
          {
            "letter": "C",
            "text": "Providing automated security checks"
          },
          {
            "letter": "D",
            "text": "Implementing consolidated billing"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "21_4",
        "text": "Which AWS service is used to automate configuration management using Chef and Puppet?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Config"
          },
          {
            "letter": "B",
            "text": "AWS OpsWorks"
          },
          {
            "letter": "C",
            "text": "AWS CloudFormation"
          },
          {
            "letter": "D",
            "text": "AWS Systems Manager"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "21_5",
        "text": "Which tool is best suited for combining the billing of AWS accounts that were previously independent from one another?",
        "options": [
          {
            "letter": "A",
            "text": "Detailed billing report"
          },
          {
            "letter": "B",
            "text": "Consolidated billing"
          },
          {
            "letter": "C",
            "text": "AWS Cost and Usage report"
          },
          {
            "letter": "D",
            "text": "Cost allocation report"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "21_6",
        "text": "The AWS Total Cost of Ownership (TCO) Calculator is used to:",
        "options": [
          {
            "letter": "A",
            "text": "receive reports that break down AWS Cloud compute costs by duration, resource, or tags"
          },
          {
            "letter": "B",
            "text": "estimate savings when comparing the AWS Cloud to an on-premises environment"
          },
          {
            "letter": "C",
            "text": "estimate a monthly bill for the AWS Cloud resources that will be used"
          },
          {
            "letter": "D",
            "text": "enable billing alerts to monitor actual AWS costs compared to estimated costs"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "21_7",
        "text": "Which AWS services can be used to provide network connectivity between an on-premises network and a VPC? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Route 53"
          },
          {
            "letter": "B",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "C",
            "text": "AWS Data Pipeline"
          },
          {
            "letter": "D",
            "text": "AWS VPN"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "21_8",
        "text": "Under the AWS shared responsibility model, which of the following are customer responsibilities? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Setting up server-side encryption on an Amazon S3 bucket"
          },
          {
            "letter": "B",
            "text": "Amazon RDS instance patching"
          },
          {
            "letter": "C",
            "text": "Network and firewall configurations"
          },
          {
            "letter": "D",
            "text": "Physical security of data center facilities"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "21_9",
        "text": "What is the MINIMUM AWS Support plan level that will provide users with access to the AWS Support API?",
        "options": [
          {
            "letter": "A",
            "text": "Developer"
          },
          {
            "letter": "B",
            "text": "Enterprise"
          },
          {
            "letter": "C",
            "text": "Business"
          },
          {
            "letter": "D",
            "text": "Basic"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "21_10",
        "text": "A company has deployed several relational databases on Amazon EC2 instances. Every month, the database software vendor releases new security patches that need to be applied to the databases. What is the MOST efficient way to apply the security patches?",
        "options": [
          {
            "letter": "A",
            "text": "Connect to each database instance on a monthly basis, and download and apply the necessary security patches from the vendor."
          },
          {
            "letter": "B",
            "text": "Enable automatic patching for the instances using the Amazon RDS console."
          },
          {
            "letter": "C",
            "text": "In AWS Config, configure a rule for the instances and the required patch level."
          },
          {
            "letter": "D",
            "text": "Use AWS Systems Manager to automate database patching according to a schedule."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "21_11",
        "text": "A company wants to use Amazon Elastic Compute Cloud (Amazon EC2) to deploy a global commercial application. The deployment solution should be built with the highest redundancy and fault tolerance. Based on this situation, the Amazon EC2 instances should be deployed:",
        "options": [
          {
            "letter": "A",
            "text": "in a single Availability Zone in one AWS Region"
          },
          {
            "letter": "B",
            "text": "with multiple Elastic Network Interfaces belonging to different subnets"
          },
          {
            "letter": "C",
            "text": "across multiple Availability Zones in one AWS Region"
          },
          {
            "letter": "D",
            "text": "across multiple Availability Zones in two AWS Regions"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "21_12",
        "text": "A company has an application with users in both Australia and Brazil. All the company infrastructure is currently provisioned in the Asia Pacific (Sydney) Region in Australia, and Brazilian users are experiencing high latency. What should the company do to reduce latency?",
        "options": [
          {
            "letter": "A",
            "text": "Implement AWS Direct Connect for users in Brazil"
          },
          {
            "letter": "B",
            "text": "Provision resources in the South America (São Paulo) Region in Brazil."
          },
          {
            "letter": "C",
            "text": "Use AWS Transit Gateway to quickly route users from Brazil to the application"
          },
          {
            "letter": "D",
            "text": "Launch additional Amazon EC2 instances in Sydney to handle the demand"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "21_13",
        "text": "An Amazon EC2 instance runs only when needed yet must remain active for the duration of the process. What is the most appropriate purchasing option?",
        "options": [
          {
            "letter": "A",
            "text": "Dedicated Instances"
          },
          {
            "letter": "B",
            "text": "Spot Instances"
          },
          {
            "letter": "C",
            "text": "On-Demand Instances"
          },
          {
            "letter": "D",
            "text": "Reserved Instances"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. On-Demand Instances."
      },
      {
        "id": "21_14",
        "text": "Which AWS dashboard displays relevant and timely information to help users manage events in progress, and provides proactive notifications to help plan for scheduled activities?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Service Health Dashboard"
          },
          {
            "letter": "B",
            "text": "AWS Personal Health Dashboard"
          },
          {
            "letter": "C",
            "text": "AWS Trusted Advisor dashboard"
          },
          {
            "letter": "D",
            "text": "Amazon CloudWatch dashboard"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "21_15",
        "text": "Which AWS hybrid storage service enables a user's on-premises applications to seamlessly use AWS Cloud storage?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Backup"
          },
          {
            "letter": "B",
            "text": "Amazon Connect"
          },
          {
            "letter": "C",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "D",
            "text": "AWS Storage Gateway"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "21_16",
        "text": "Which of the following acts as a virtual firewall at the Amazon EC2 instance level to control traffic for one or more instances?",
        "options": [
          {
            "letter": "A",
            "text": "Access keys"
          },
          {
            "letter": "B",
            "text": "Virtual private gateways"
          },
          {
            "letter": "C",
            "text": "Security groups"
          },
          {
            "letter": "D",
            "text": "Access Control Lists (ACL)"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "21_17",
        "text": "What is the most efficient way to establish network connectivity from on-premises to multiple VPCs in different AWS Regions?",
        "options": [
          {
            "letter": "A",
            "text": "Use AWS Direct Connect"
          },
          {
            "letter": "B",
            "text": "Use AWS VPN"
          },
          {
            "letter": "C",
            "text": "Use AWS Client VPN"
          },
          {
            "letter": "D",
            "text": "Use an AWS Transit Gateway"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "21_18",
        "text": "Which AWS Support plan provides access to architectural and operational reviews, as well as 24/7 access to Senior Cloud Support Engineers through email, online chat, and phone?",
        "options": [
          {
            "letter": "A",
            "text": "Basic"
          },
          {
            "letter": "B",
            "text": "Business"
          },
          {
            "letter": "C",
            "text": "Developer"
          },
          {
            "letter": "D",
            "text": "Enterprise"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "21_19",
        "text": "Which AWS service or feature helps restrict the AWS services, resources, and individual API actions the users and roles in each member account can access?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Cognito"
          },
          {
            "letter": "B",
            "text": "AWS Organizations"
          },
          {
            "letter": "C",
            "text": "AWS Shield"
          },
          {
            "letter": "D",
            "text": "AWS Firewall Manager"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "21_20",
        "text": "What is the best resource for a user to find compliance-related information and reports about AWS?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Artifact"
          },
          {
            "letter": "B",
            "text": "AWS Marketplace"
          },
          {
            "letter": "C",
            "text": "Amazon Inspector"
          },
          {
            "letter": "D",
            "text": "AWS Support"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "21_21",
        "text": "Which Amazon S3 storage class is optimized to provide access to data with lower resiliency requirements, but rapid access when needed such as duplicate backups?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon S3 Standard"
          },
          {
            "letter": "B",
            "text": "Amazon S3 Glacier Deep Archive"
          },
          {
            "letter": "C",
            "text": "Amazon S3 One Zone-Infrequent Access"
          },
          {
            "letter": "D",
            "text": "Amazon S3 Glacier"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "21_22",
        "text": "What is an Availability Zone in AWS?",
        "options": [
          {
            "letter": "A",
            "text": "One or more physical data centers"
          },
          {
            "letter": "B",
            "text": "A completely isolated geographic location"
          },
          {
            "letter": "C",
            "text": "One or more edge locations based around the world"
          },
          {
            "letter": "D",
            "text": "A data center location with a single source of power and networking"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "21_23",
        "text": "Which AWS services can be used as infrastructure automation tools? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "AWS CloudFormation"
          },
          {
            "letter": "B",
            "text": "Amazon CloudFront"
          },
          {
            "letter": "C",
            "text": "AWS Batch"
          },
          {
            "letter": "D",
            "text": "AWS OpsWorks"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "21_24",
        "text": "Which AWS service enables users to create copies of resources across AWS Regions?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon ElastiCache"
          },
          {
            "letter": "B",
            "text": "AWS CloudFormation"
          },
          {
            "letter": "C",
            "text": "AWS CloudTrail"
          },
          {
            "letter": "D",
            "text": "AWS Systems Manager"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "21_25",
        "text": "A user would like to encrypt data that is received, stored, and managed by AWS CloudTrail. Which AWS service will provide this capability?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Secrets Manager"
          },
          {
            "letter": "B",
            "text": "AWS Systems Manager"
          },
          {
            "letter": "C",
            "text": "AWS Key Management Service (AWS KMS)"
          },
          {
            "letter": "D",
            "text": "AWS Certificate Manager"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "21_26",
        "text": "Which AWS Cloud benefit eliminates the need for users to try estimating future infrastructure usage?",
        "options": [
          {
            "letter": "A",
            "text": "Easy and fast deployment of applications in multiple Regions around the world"
          },
          {
            "letter": "B",
            "text": "Security of the AWS Cloud"
          },
          {
            "letter": "C",
            "text": "Elasticity of the AWS Cloud"
          },
          {
            "letter": "D",
            "text": "Lower variable costs due to massive economies of scale"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Elasticity of the AWS Cloud."
      },
      {
        "id": "21_27",
        "text": "What credential components are required to gain programmatic access to an AWS account? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "An access key ID"
          },
          {
            "letter": "B",
            "text": "A primary key"
          },
          {
            "letter": "C",
            "text": "A secret access key"
          },
          {
            "letter": "D",
            "text": "A user ID"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "21_28",
        "text": "Which of the following are AWS compute services? (Select two.)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Lightsail"
          },
          {
            "letter": "B",
            "text": "AWS Systems Manager"
          },
          {
            "letter": "C",
            "text": "AWS CloudFormation"
          },
          {
            "letter": "D",
            "text": "AWS Batch"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "21_29",
        "text": "How can a company separate costs for network traffic, Amazon EC2, Amazon S3, and other AWS services by department?",
        "options": [
          {
            "letter": "A",
            "text": "Add department-specific tags to each resource"
          },
          {
            "letter": "B",
            "text": "Create a separate VPC for each department"
          },
          {
            "letter": "C",
            "text": "Create a separate AWS account for each department"
          },
          {
            "letter": "D",
            "text": "Use AWS Organizations"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Create a separate AWS account for each department."
      },
      {
        "id": "21_30",
        "text": "What is a benefit of consolidated billing for AWS accounts?",
        "options": [
          {
            "letter": "A",
            "text": "Access to AWS Personal Health Dashboard"
          },
          {
            "letter": "B",
            "text": "Combined usage volume discounts"
          },
          {
            "letter": "C",
            "text": "Improved account security"
          },
          {
            "letter": "D",
            "text": "Centralized AWS IAM"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "21_31",
        "text": "Which AWS service will allow a user to set custom cost and usage limits, and will alert when the thresholds are exceeded?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Organizations"
          },
          {
            "letter": "B",
            "text": "AWS Budgets"
          },
          {
            "letter": "C",
            "text": "Cost Explorer"
          },
          {
            "letter": "D",
            "text": "AWS Trusted Advisor"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "21_32",
        "text": "Which AWS service provides the ability to detect inadvertent data leaks of personally identifiable information (PII) and user credential data?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon GuardDuty"
          },
          {
            "letter": "B",
            "text": "Amazon Inspector"
          },
          {
            "letter": "C",
            "text": "Amazon Macie"
          },
          {
            "letter": "D",
            "text": "AWS Shield"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "21_33",
        "text": "Which tool can be used to monitor AWS service limits?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Total Cost of Ownership (TCO) Calculator"
          },
          {
            "letter": "B",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "C",
            "text": "AWS Personal Health Dashboard"
          },
          {
            "letter": "D",
            "text": "AWS Cost and Usage report"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "21_34",
        "text": "A company has distributed its workload on both the AWS Cloud and some on-premises servers. What type of architecture is this?",
        "options": [
          {
            "letter": "A",
            "text": "Virtual private network"
          },
          {
            "letter": "B",
            "text": "Virtual private cloud"
          },
          {
            "letter": "C",
            "text": "Hybrid cloud"
          },
          {
            "letter": "D",
            "text": "Private cloud"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "21_35",
        "text": "Which of the following describes a security best practice that can be implemented using AWS IAM?",
        "options": [
          {
            "letter": "A",
            "text": "Disable AWS Management Console access for all users"
          },
          {
            "letter": "B",
            "text": "Generate secret keys for every IAM user"
          },
          {
            "letter": "C",
            "text": "Grant permissions to users who are required to perform a given task only"
          },
          {
            "letter": "D",
            "text": "Store AWS credentials within Amazon EC2 instances"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "21_36",
        "text": "What can be used to automate and manage secure, well-architected, multi-account AWS environments?",
        "options": [
          {
            "letter": "A",
            "text": "AWS shared responsibility model"
          },
          {
            "letter": "B",
            "text": "AWS Control Tower"
          },
          {
            "letter": "C",
            "text": "AWS Security Hub"
          },
          {
            "letter": "D",
            "text": "AWS Well-Architected Tool"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": - Control Tower automates the process of setting up a new baseline multi-account AWS environment that is secure, well-architected, and ready to use. - Control Tower incorporates the knowledge that AWS Professional Service has gained over the course of thousands of successful customer engagements. Reference:."
      },
      {
        "id": "21_37",
        "text": "Which AWS service or feature allows a user to easily scale connectivity among thousands of VPCs?",
        "options": [
          {
            "letter": "A",
            "text": "VPC peering"
          },
          {
            "letter": "B",
            "text": "AWS Transit Gateway"
          },
          {
            "letter": "C",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "D",
            "text": "AWS Global Accelerator"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "21_38",
        "text": "A company needs protection from expanded distributed denial of service (DDoS) attacks on its website and assistance from AWS experts during such events. Which AWS managed service will meet these requirements?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Shield Advanced"
          },
          {
            "letter": "B",
            "text": "AWS Firewall Manager"
          },
          {
            "letter": "C",
            "text": "AWS WAF"
          },
          {
            "letter": "D",
            "text": "Amazon GuardDuty"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "21_39",
        "text": "A company's application has flexible start and end times. Which Amazon EC2 pricing model will be the MOST cost-effective?",
        "options": [
          {
            "letter": "A",
            "text": "On-Demand Instances"
          },
          {
            "letter": "B",
            "text": "Spot Instances"
          },
          {
            "letter": "C",
            "text": "Reserved Instances"
          },
          {
            "letter": "D",
            "text": "Dedicated Hosts"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "21_40",
        "text": "Under the AWS shared responsibility model, what are the customer's responsibilities? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Physical and environmental security"
          },
          {
            "letter": "B",
            "text": "Physical network devices including firewalls"
          },
          {
            "letter": "C",
            "text": "Storage device decommissioning"
          },
          {
            "letter": "D",
            "text": "Security of data in transit"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Security of data in transit."
      },
      {
        "id": "21_41",
        "text": "A cloud practitioner has a data analysis workload that is infrequently executed and can be interrupted without harm. To optimize for cost, which Amazon EC2 purchasing option should be used?",
        "options": [
          {
            "letter": "A",
            "text": "On-Demand Instances"
          },
          {
            "letter": "B",
            "text": "Reserved Instances"
          },
          {
            "letter": "C",
            "text": "Spot Instances"
          },
          {
            "letter": "D",
            "text": "Dedicated Hosts"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "21_42",
        "text": "Which AWS container service will help a user install, operate, and scale the cluster management infrastructure?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Elastic Container Registry (Amazon ECR)"
          },
          {
            "letter": "B",
            "text": "AWS Elastic Beanstalk"
          },
          {
            "letter": "C",
            "text": "Amazon Elastic Container Service (Amazon ECS)"
          },
          {
            "letter": "D",
            "text": "Amazon Elastic Block Store (Amazon EBS)"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Amazon Elastic Container Service (Amazon ECS)."
      },
      {
        "id": "21_43",
        "text": "Which of the following allows an application running on an Amazon EC2 instance to securely write data to an Amazon S3 bucket without using long term credentials?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Cognito"
          },
          {
            "letter": "B",
            "text": "AWS Shield"
          },
          {
            "letter": "C",
            "text": "AWS IAM role"
          },
          {
            "letter": "D",
            "text": "AWS IAM user access key"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS IAM role."
      },
      {
        "id": "21_44",
        "text": "A company with a Developer-level AWS Support plan provisioned an Amazon RDS database and cannot connect to it. Who should the developer contact for this level of support?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Support using a support case"
          },
          {
            "letter": "B",
            "text": "AWS Professional Services"
          },
          {
            "letter": "C",
            "text": "AWS technical account manager"
          },
          {
            "letter": "D",
            "text": "AWS consulting partners"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Support using a support case."
      },
      {
        "id": "21_45",
        "text": "What is the purpose of having an internet gateway within a VPC?",
        "options": [
          {
            "letter": "A",
            "text": "To create a VPN connection to the VPC"
          },
          {
            "letter": "B",
            "text": "To allow communication between the VPC and the Internet"
          },
          {
            "letter": "C",
            "text": "To impose bandwidth constraints on internet traffic"
          },
          {
            "letter": "D",
            "text": "To load balance traffic from the Internet across Amazon EC2 instances"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. To allow communication between the VPC and the Internet."
      },
      {
        "id": "21_46",
        "text": "A company must ensure that its endpoint for a database instance remains the same after a single Availability Zone service interruption. The application needs to resume database operations without the need for manual administrative intervention. How can these requirements be met?",
        "options": [
          {
            "letter": "A",
            "text": "Use multiple Amazon Route 53 routes to the standby database instance endpoint hosted on AWS Storage Gateway."
          },
          {
            "letter": "B",
            "text": "Configure Amazon RDS Multi-Availability Zone deployments with automatic failover to the standby."
          },
          {
            "letter": "C",
            "text": "Add multiple Application Load Balancers and deploy the database instance with AWS Elastic Beanstalk."
          },
          {
            "letter": "D",
            "text": "Deploy a single Network Load Balancer to distribute incoming traffic across multiple Amazon CloudFront origins."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Configure Amazon RDS Multi-Availability Zone deployments with automatic failover to the standby.."
      },
      {
        "id": "21_47",
        "text": "Which AWS managed service can be used to distribute traffic between one or more Amazon EC2 instances?",
        "options": [
          {
            "letter": "A",
            "text": "NAT gateway"
          },
          {
            "letter": "B",
            "text": "Elastic Load Balancing"
          },
          {
            "letter": "C",
            "text": "Amazon Athena"
          },
          {
            "letter": "D",
            "text": "AWS PrivateLink"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Elastic Load Balancing."
      },
      {
        "id": "21_48",
        "text": "AWS Trusted Advisor provides recommendations on which of the following? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Cost optimization"
          },
          {
            "letter": "B",
            "text": "Auditing"
          },
          {
            "letter": "C",
            "text": "Serverless architecture"
          },
          {
            "letter": "D",
            "text": "Performance"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Cost optimization."
      },
      {
        "id": "21_49",
        "text": "Which of the following tasks can only be performed after signing in with AWS account root user credentials? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Closing an AWS account"
          },
          {
            "letter": "B",
            "text": "Creating a new IAM policy"
          },
          {
            "letter": "C",
            "text": "Changing AWS Support plans"
          },
          {
            "letter": "D",
            "text": "Attaching a role to an Amazon EC2 instance"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Closing an AWS account."
      },
      {
        "id": "21_50",
        "text": "Fault tolerance refers to:",
        "options": [
          {
            "letter": "A",
            "text": "the ability of an application to accommodate growth without changing design"
          },
          {
            "letter": "B",
            "text": "how well and how quickly an application's environment can have lost data restored"
          },
          {
            "letter": "C",
            "text": "how secure your application is"
          },
          {
            "letter": "D",
            "text": "the built-in redundancy of an application's components"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. the built-in redundancy of an application's components."
      }
    ]
  },
  {
    "id": 22,
    "name": "Examen Pratique 22",
    "description": "Examen Pratique 22 - 50 questions",
    "questionCount": 50,
    "duration": 90,
    "questions": [
      {
        "id": "22_1",
        "text": "A company operating in the AWS Cloud requires separate invoices for specific environments, such as development, testing, and production. How can this be achieved?",
        "options": [
          {
            "letter": "A",
            "text": "Use multiple AWS accounts"
          },
          {
            "letter": "B",
            "text": "Use resource tagging"
          },
          {
            "letter": "C",
            "text": "Use multiple VPCs"
          },
          {
            "letter": "D",
            "text": "Use Cost Explorer"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Use multiple AWS accounts."
      },
      {
        "id": "22_2",
        "text": "Which AWS service can be used in the application deployment process?",
        "options": [
          {
            "letter": "A",
            "text": "AWS AppSync"
          },
          {
            "letter": "B",
            "text": "AWS Batch"
          },
          {
            "letter": "C",
            "text": "AWS CodePipeline"
          },
          {
            "letter": "D",
            "text": "AWS DataSync"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS CodePipeline."
      },
      {
        "id": "22_3",
        "text": "What can be used to reduce the cost of running Amazon EC2 instances? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Spot Instances for stateless and flexible workloads"
          },
          {
            "letter": "B",
            "text": "Memory optimized instances for high-compute workloads"
          },
          {
            "letter": "C",
            "text": "On-Demand Instances for high-cost and sustained workloads"
          },
          {
            "letter": "D",
            "text": "Reserved Instances for sustained workloads"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Spot Instances for stateless and flexible workloads."
      },
      {
        "id": "22_4",
        "text": "A company is launching an e-commerce site that will store and process credit card data. The company requires information about AWS compliance reports and AWS agreements. Which AWS service provides on-demand access to these items?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Certificate Manager"
          },
          {
            "letter": "B",
            "text": "AWS Config"
          },
          {
            "letter": "C",
            "text": "AWS Artifact"
          },
          {
            "letter": "D",
            "text": "AWS CloudTrail"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Artifact."
      },
      {
        "id": "22_5",
        "text": "Which AWS service or feature allows the user to manage cross-region application traffic?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon AppStream 2.0"
          },
          {
            "letter": "B",
            "text": "Amazon VPC"
          },
          {
            "letter": "C",
            "text": "Elastic Load Balancer"
          },
          {
            "letter": "D",
            "text": "Amazon Route 53"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Amazon Route 53."
      },
      {
        "id": "22_6",
        "text": "Which AWS service can be used to track unauthorized API calls?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Config"
          },
          {
            "letter": "B",
            "text": "AWS CloudTrail"
          },
          {
            "letter": "C",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "D",
            "text": "Amazon Inspector"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS CloudTrail."
      },
      {
        "id": "22_7",
        "text": "A user needs to regularly audit and evaluate the setup of all AWS resources, identify non-compliant accounts, and be notified when a resource changes. Which AWS service can be used to meet these requirements?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "B",
            "text": "AWS Config"
          },
          {
            "letter": "C",
            "text": "AWS Resource Access Manager"
          },
          {
            "letter": "D",
            "text": "AWS Systems Manager"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. AWS Config."
      },
      {
        "id": "22_8",
        "text": "A user is planning to launch two additional Amazon EC2 instances to increase availability. Which action should the user take?",
        "options": [
          {
            "letter": "A",
            "text": "Launch the instances across multiple Availability Zones in a single AWS Region."
          },
          {
            "letter": "B",
            "text": "Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone."
          },
          {
            "letter": "C",
            "text": "Launch the instances in multiple AWS Regions, but in the same Availability Zone."
          },
          {
            "letter": "D",
            "text": "Launch the instances as EC2 Spot Instances in the same AWS Region, but in different Availability Zones."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Launch the instances across multiple Availability Zones in a single AWS Region.."
      },
      {
        "id": "22_9",
        "text": "A company must store critical business data in Amazon S3 with a backup to another AWS Region. How can this be achieved?",
        "options": [
          {
            "letter": "A",
            "text": "Use an Amazon CloudFront Content Delivery Network (CDN) to cache data globally"
          },
          {
            "letter": "B",
            "text": "Set up Amazon S3 cross-region replication to another AWS Region"
          },
          {
            "letter": "C",
            "text": "Configure the AWS Backup service to back up to the data to another AWS Region"
          },
          {
            "letter": "D",
            "text": "Take Amazon S3 bucket snapshots and copy that data to another AWS Region"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Set up Amazon S3 cross-region replication to another AWS Region."
      },
      {
        "id": "22_10",
        "text": "Which AWS Cloud service can send alerts to customers if custom spending thresholds are exceeded?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Budgets"
          },
          {
            "letter": "B",
            "text": "AWS Cost Explorer"
          },
          {
            "letter": "C",
            "text": "AWS Cost Allocation Tags"
          },
          {
            "letter": "D",
            "text": "AWS Organizations"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Budgets."
      },
      {
        "id": "22_11",
        "text": "What is the recommended method to request penetration testing on AWS resources?",
        "options": [
          {
            "letter": "A",
            "text": "Open a support case"
          },
          {
            "letter": "B",
            "text": "Fill out the Penetration Testing Request Form"
          },
          {
            "letter": "C",
            "text": "Request a penetration test from your technical account manager"
          },
          {
            "letter": "D",
            "text": "Contact your AWS sales representative"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Fill out the Penetration Testing Request Form."
      },
      {
        "id": "22_12",
        "text": "A user needs to automatically discover, classify, and protect sensitive data stored in Amazon S3. Which AWS service can meet these requirements?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Inspector"
          },
          {
            "letter": "B",
            "text": "Amazon Macie"
          },
          {
            "letter": "C",
            "text": "Amazon GuardDuty"
          },
          {
            "letter": "D",
            "text": "AWS Secrets Manager"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Amazon Macie."
      },
      {
        "id": "22_13",
        "text": "Which components are required to build a successful site-to-site VPN connection on AWS? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Internet gateway"
          },
          {
            "letter": "B",
            "text": "NAT gateway"
          },
          {
            "letter": "C",
            "text": "Customer gateway"
          },
          {
            "letter": "D",
            "text": "Transit gateway"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Customer gateway."
      },
      {
        "id": "22_14",
        "text": "Which Amazon EC2 pricing option is best suited for applications with short-term, spiky, or unpredictable workloads that cannot be interrupted?",
        "options": [
          {
            "letter": "A",
            "text": "Spot Instances"
          },
          {
            "letter": "B",
            "text": "Dedicated Hosts"
          },
          {
            "letter": "C",
            "text": "On-Demand Instances"
          },
          {
            "letter": "D",
            "text": "Reserved Instances"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. On-Demand Instances."
      },
      {
        "id": "22_15",
        "text": "Which AWS cloud architecture principle states that systems should reduce interdependencies?",
        "options": [
          {
            "letter": "A",
            "text": "Scalability"
          },
          {
            "letter": "B",
            "text": "Services, not servers"
          },
          {
            "letter": "C",
            "text": "Removing single points of failure"
          },
          {
            "letter": "D",
            "text": "Loose coupling"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Loose coupling."
      },
      {
        "id": "22_16",
        "text": "What is the MOST effective resource for staying up to date on AWS security announcements?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Personal Health Dashboard"
          },
          {
            "letter": "B",
            "text": "AWS Secrets Manager"
          },
          {
            "letter": "C",
            "text": "AWS Security Bulletins"
          },
          {
            "letter": "D",
            "text": "Amazon Inspector"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Security Bulletins."
      },
      {
        "id": "22_17",
        "text": "Which AWS service offers persistent storage for a file system?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon S3"
          },
          {
            "letter": "B",
            "text": "Amazon EC2 instance store"
          },
          {
            "letter": "C",
            "text": "Amazon Elastic Block Store (Amazon EBS)"
          },
          {
            "letter": "D",
            "text": "Amazon ElastiCache"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. Amazon Elastic Block Store (Amazon EBS)."
      },
      {
        "id": "22_18",
        "text": "Which of the following allows AWS users to manage cost allocations for billing?",
        "options": [
          {
            "letter": "A",
            "text": "Tagging resources"
          },
          {
            "letter": "B",
            "text": "Limiting who can create resources"
          },
          {
            "letter": "C",
            "text": "Adding a secondary payment method"
          },
          {
            "letter": "D",
            "text": "Running all operations on a single AWS account"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Tagging resources."
      },
      {
        "id": "22_19",
        "text": "Which AWS service allows users to download security and compliance reports about the AWS infrastructure on demand?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon GuardDuty"
          },
          {
            "letter": "B",
            "text": "AWS Security Hub"
          },
          {
            "letter": "C",
            "text": "AWS Artifact"
          },
          {
            "letter": "D",
            "text": "AWS Shield"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Artifact."
      },
      {
        "id": "22_20",
        "text": "Which of the following AWS services are serverless? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Lambda"
          },
          {
            "letter": "B",
            "text": "Amazon Elasticsearch Service"
          },
          {
            "letter": "C",
            "text": "AWS Elastic Beanstalk"
          },
          {
            "letter": "D",
            "text": "Amazon DynamoDB"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS Lambda."
      },
      {
        "id": "22_21",
        "text": "Which AWS managed services can be used to extend an on-premises data center to the AWS network? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "AWS VPN"
          },
          {
            "letter": "B",
            "text": "NAT gateway"
          },
          {
            "letter": "C",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "D",
            "text": "Amazon Connect"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. AWS VPN."
      },
      {
        "id": "22_22",
        "text": "Which requirement must be met for a member account to be unlinked from an AWS Organizations account?",
        "options": [
          {
            "letter": "A",
            "text": "The linked account must be actively compliant with AWS System and Organization Controls (SOC)."
          },
          {
            "letter": "B",
            "text": "The payer and the linked account must both create AWS Support cases to request that the member account be unlinked from the organization."
          },
          {
            "letter": "C",
            "text": "The member account must meet the requirements of a standalone account."
          },
          {
            "letter": "D",
            "text": "The payer account must be used to remove the linked account from the organization."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. The member account must meet the requirements of a standalone account.."
      },
      {
        "id": "22_23",
        "text": "What AWS benefit refers to a customer's ability to deploy applications that scale up and down the meet variable demand?",
        "options": [
          {
            "letter": "A",
            "text": "Elasticity"
          },
          {
            "letter": "B",
            "text": "Agility"
          },
          {
            "letter": "C",
            "text": "Security"
          },
          {
            "letter": "D",
            "text": "Scalability"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": "La réponse correcte est l'option D. Scalability."
      },
      {
        "id": "22_24",
        "text": "During a compliance review, one of the auditors requires a copy of the AWS SOC 2 report. Which service should be used to submit this request?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Personal Health Dashboard"
          },
          {
            "letter": "B",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "C",
            "text": "AWS Artifact"
          },
          {
            "letter": "D",
            "text": "Amazon S3"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": "La réponse correcte est l'option C. AWS Artifact."
      },
      {
        "id": "22_25",
        "text": "A company wants to set up a highly available workload in AWS with a disaster recovery plan that will allow the company to recover in case of a regional service interruption. Which configuration will meet these requirements?",
        "options": [
          {
            "letter": "A",
            "text": "Run on two Availability Zones in one AWS Region, using the additional Availability Zones in the AWS Region for the disaster recovery site."
          },
          {
            "letter": "B",
            "text": "Run on two Availability Zones in one AWS Region, using another AWS Region for the disaster recovery site."
          },
          {
            "letter": "C",
            "text": "Run on two Availability Zones in one AWS Region, using a local AWS Region for the disaster recovery site."
          },
          {
            "letter": "D",
            "text": "Run across two AWS Regions, using a third AWS Region for the disaster recovery site."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ": Option D increased complexity and cost."
      },
      {
        "id": "22_26",
        "text": "A company has a 500 TB image repository that needs to be transported to AWS for processing. Which AWS service can import this data MOST cost-effectively?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Snowball"
          },
          {
            "letter": "B",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "C",
            "text": "AWS VPN"
          },
          {
            "letter": "D",
            "text": "Amazon S3"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "22_27",
        "text": "Which AWS service can run a managed PostgreSQL database that provides online transaction processing (OLTP)?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon DynamoDB"
          },
          {
            "letter": "B",
            "text": "Amazon Athena"
          },
          {
            "letter": "C",
            "text": "Amazon RDS"
          },
          {
            "letter": "D",
            "text": "Amazon EMR"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "22_28",
        "text": "Which of the following assist in identifying costs by department? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Using tags on resources"
          },
          {
            "letter": "B",
            "text": "Using multiple AWS accounts"
          },
          {
            "letter": "C",
            "text": "Using an account manager"
          },
          {
            "letter": "D",
            "text": "Using AWS Trusted Advisor"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Using tags on resources."
      },
      {
        "id": "22_29",
        "text": "A company wants to allow full access to an Amazon S3 bucket for a particular user. Which element in the S3 bucket policy holds the user details that describe who needs access to the S3 bucket?",
        "options": [
          {
            "letter": "A",
            "text": "Principal"
          },
          {
            "letter": "B",
            "text": "Action"
          },
          {
            "letter": "C",
            "text": "Resource"
          },
          {
            "letter": "D",
            "text": "Statement"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "22_30",
        "text": "Which AWS service allows for effective cost management of multiple AWS accounts?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Organizations"
          },
          {
            "letter": "B",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "C",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "D",
            "text": "Amazon Connect"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "22_31",
        "text": "A company is piloting a new customer-facing application on Amazon Elastic Compute Cloud (Amazon EC2) for one month. What pricing model is appropriate?",
        "options": [
          {
            "letter": "A",
            "text": "Reserved Instances"
          },
          {
            "letter": "B",
            "text": "Spot Instances"
          },
          {
            "letter": "C",
            "text": "On-Demand Instances"
          },
          {
            "letter": "D",
            "text": "Dedicated Hosts"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "22_32",
        "text": "Which AWS tools automatically forecast future AWS costs?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Support Center"
          },
          {
            "letter": "B",
            "text": "AWS Total Cost of Ownership (TCO) Calculator"
          },
          {
            "letter": "C",
            "text": "AWS Simple Monthly Calculator"
          },
          {
            "letter": "D",
            "text": "Cost Explorer"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "22_33",
        "text": "Under the AWS shared responsibility model, which of the following is a responsibility of AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Enabling server-side encryption for objects stored in S3"
          },
          {
            "letter": "B",
            "text": "Applying AWS IAM security policies"
          },
          {
            "letter": "C",
            "text": "Patching the operating system on an Amazon EC2 instance"
          },
          {
            "letter": "D",
            "text": "Applying updates to the hypervisor"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "22_34",
        "text": "A user is able to set up a master payer account to view consolidated billing reports through:",
        "options": [
          {
            "letter": "A",
            "text": "AWS Budgets."
          },
          {
            "letter": "B",
            "text": "Amazon Macie."
          },
          {
            "letter": "C",
            "text": "Amazon QuickSight."
          },
          {
            "letter": "D",
            "text": "AWS Organizations."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "22_35",
        "text": "Performing operations as code is a design principle that supports which pillar of the AWS Well-Architected Framework?",
        "options": [
          {
            "letter": "A",
            "text": "Performance efficiency"
          },
          {
            "letter": "B",
            "text": "Operational excellence"
          },
          {
            "letter": "C",
            "text": "Reliability"
          },
          {
            "letter": "D",
            "text": "Security"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "22_36",
        "text": "Which design principle is achieved by following the reliability pillar of the AWS Well-Architected Framework?",
        "options": [
          {
            "letter": "A",
            "text": "Vertical scaling"
          },
          {
            "letter": "B",
            "text": "Manual failure recovery"
          },
          {
            "letter": "C",
            "text": "Testing recovery procedures"
          },
          {
            "letter": "D",
            "text": "Changing infrastructure manually"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "22_37",
        "text": "What is a characteristic of Convertible Reserved Instances (RIs)?",
        "options": [
          {
            "letter": "A",
            "text": "Users can exchange Convertible RIs for other Convertible RIs from a different instance family with an equal or higher value than the Convertible Reserved Instances that you are exchanging."
          },
          {
            "letter": "B",
            "text": "Users can exchange Convertible RIs for other Convertible RIs in different AWS Regions."
          },
          {
            "letter": "C",
            "text": "Users can sell and buy Convertible RIs on the AWS Marketplace."
          },
          {
            "letter": "D",
            "text": "Users can shorten the term of their Convertible RIs by merging them with other Convertible RIs."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "22_38",
        "text": "The user is fully responsible for which action when running workloads on AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Patching the infrastructure components"
          },
          {
            "letter": "B",
            "text": "Implementing controls to route application traffic"
          },
          {
            "letter": "C",
            "text": "Maintaining physical and environmental controls"
          },
          {
            "letter": "D",
            "text": "Maintaining the underlying infrastructure components"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Implementing controls to route application traffic."
      },
      {
        "id": "22_39",
        "text": "An architecture design includes Amazon EC2, an Elastic Load Balancer, and Amazon RDS. What is the BEST way to get a monthly cost estimation for this architecture?",
        "options": [
          {
            "letter": "A",
            "text": "Open an AWS Support case, provide the architecture proposal, and ask for a monthly cost estimation."
          },
          {
            "letter": "B",
            "text": "Collect the published prices of the AWS services and calculate the monthly estimate."
          },
          {
            "letter": "C",
            "text": "Use the AWS Simple Monthly Calculator to estimate the monthly cost."
          },
          {
            "letter": "D",
            "text": "Use the AWS Total Cost of Ownership (TCO) Calculator to estimate the monthly cost."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "22_40",
        "text": "Which are benefits of using Amazon RDS over Amazon EC2 when running relational databases on AWS? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Automated backups"
          },
          {
            "letter": "B",
            "text": "Schema management"
          },
          {
            "letter": "C",
            "text": "Indexing of tables"
          },
          {
            "letter": "D",
            "text": "Software patching"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "22_41",
        "text": "What does the Amazon S3 Intelligent-Tiering storage class offer?",
        "options": [
          {
            "letter": "A",
            "text": "Payment flexibility by reserving storage capacity"
          },
          {
            "letter": "B",
            "text": "Long-term retention of data by copying the data to an encrypted Amazon Elastic Block Store (Amazon EBS) volume"
          },
          {
            "letter": "C",
            "text": "Automatic cost savings by moving objects between tiers based on access pattern changes"
          },
          {
            "letter": "D",
            "text": "Secure, durable, and lowest cost storage for data archival"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "22_42",
        "text": "A company has multiple data sources across the organization and wants to consolidate data into one data warehouse. Which AWS service can be used to meet this requirement?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon DynamoDB"
          },
          {
            "letter": "B",
            "text": "Amazon Redshift"
          },
          {
            "letter": "C",
            "text": "Amazon Athena"
          },
          {
            "letter": "D",
            "text": "Amazon QuickSight"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "22_43",
        "text": "Which AWS service can be used to track resource changes and establish compliance?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon CloudWatch"
          },
          {
            "letter": "B",
            "text": "AWS Config"
          },
          {
            "letter": "C",
            "text": "AWS CloudTrail"
          },
          {
            "letter": "D",
            "text": "AWS Trusted Advisor"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "22_44",
        "text": "A user has underutilized on-premises resources. Which AWS Cloud concept can BEST address this issue?",
        "options": [
          {
            "letter": "A",
            "text": "High availability"
          },
          {
            "letter": "B",
            "text": "Elasticity"
          },
          {
            "letter": "C",
            "text": "Security"
          },
          {
            "letter": "D",
            "text": "Loose coupling"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "22_45",
        "text": "A user has a stateful workload that will run on Amazon EC2 for the next 3 years. What is the MOST cost-effective pricing model for this workload?",
        "options": [
          {
            "letter": "A",
            "text": "On-Demand Instances"
          },
          {
            "letter": "B",
            "text": "Reserved Instances"
          },
          {
            "letter": "C",
            "text": "Dedicated Instances"
          },
          {
            "letter": "D",
            "text": "Spot Instances"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Reserved Instances."
      },
      {
        "id": "22_46",
        "text": "A cloud practitioner needs an Amazon EC2 instance to launch and run for 7 hours without interruptions. What is the most suitable and cost-effective option for this task?",
        "options": [
          {
            "letter": "A",
            "text": "On-Demand Instance"
          },
          {
            "letter": "B",
            "text": "Reserved Instance"
          },
          {
            "letter": "C",
            "text": "Dedicated Host"
          },
          {
            "letter": "D",
            "text": "Spot Instance"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. On-Demand Instance."
      },
      {
        "id": "22_47",
        "text": "Which of the following are benefits of using AWS Trusted Advisor? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Providing high-performance container orchestration"
          },
          {
            "letter": "B",
            "text": "Creating and rotating encryption keys"
          },
          {
            "letter": "C",
            "text": "Detecting underutilized resources to save costs"
          },
          {
            "letter": "D",
            "text": "Improving security by proactively monitoring the AWS environment"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "22_48",
        "text": "A developer has been hired by a large company and needs AWS credentials. Which are security best practices that should be followed? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Grant the developer access to only the AWS resources needed to perform the job."
          },
          {
            "letter": "B",
            "text": "Share the AWS account root user credentials with the developer."
          },
          {
            "letter": "C",
            "text": "Add the developer to the administrator's group in AWS IAM."
          },
          {
            "letter": "D",
            "text": "Configure a password policy that ensures the developer's password cannot be changed."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Grant the developer access to only the AWS resources needed to perform the job.."
      },
      {
        "id": "22_49",
        "text": "Which AWS storage service is designed to transfer petabytes of data in and out of the cloud?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Storage Gateway"
          },
          {
            "letter": "B",
            "text": "Amazon S3 Glacier Deep Archive"
          },
          {
            "letter": "C",
            "text": "Amazon Lightsail"
          },
          {
            "letter": "D",
            "text": "AWS Snowball"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "22_50",
        "text": "Which service provides a user the ability to warehouse data in the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EFS"
          },
          {
            "letter": "B",
            "text": "Amazon Redshift"
          },
          {
            "letter": "C",
            "text": "Amazon RDS"
          },
          {
            "letter": "D",
            "text": "Amazon VPC"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      }
    ]
  },
  {
    "id": 23,
    "name": "Examen Pratique 23",
    "description": "Examen Pratique 23 - 50 questions",
    "questionCount": 50,
    "duration": 90,
    "questions": [
      {
        "id": "23_1",
        "text": "A user is planning to migrate an application workload to the AWS Cloud. Which control becomes the responsibility of AWS once the migration is complete?",
        "options": [
          {
            "letter": "A",
            "text": "Patching the guest operating system"
          },
          {
            "letter": "B",
            "text": "Maintaining physical and environmental controls"
          },
          {
            "letter": "C",
            "text": "Protecting communications and maintaining zone security"
          },
          {
            "letter": "D",
            "text": "Patching specific applications"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Maintaining physical and environmental controls."
      },
      {
        "id": "23_2",
        "text": "Which services can be used to deploy applications on AWS? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Elastic Beanstalk"
          },
          {
            "letter": "B",
            "text": "AWS Config"
          },
          {
            "letter": "C",
            "text": "AWS OpsWorks"
          },
          {
            "letter": "D",
            "text": "AWS Application Discovery Service"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "23_3",
        "text": "Which AWS service can be used to provide an on-demand, cloud-based contact center?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "B",
            "text": "Amazon Connect"
          },
          {
            "letter": "C",
            "text": "AWS Support Center"
          },
          {
            "letter": "D",
            "text": "AWS Managed Services"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "23_4",
        "text": "What tool enables customers without an AWS account to estimate costs for almost all AWS services?",
        "options": [
          {
            "letter": "A",
            "text": "Cost Explorer"
          },
          {
            "letter": "B",
            "text": "TCO Calculator"
          },
          {
            "letter": "C",
            "text": "AWS Budgets"
          },
          {
            "letter": "D",
            "text": "AWS Pricing Calculator"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "23_5",
        "text": "Which component must be attached to a VPC to enable inbound Internet access?",
        "options": [
          {
            "letter": "A",
            "text": "NAT gateway"
          },
          {
            "letter": "B",
            "text": "VPC endpoint"
          },
          {
            "letter": "C",
            "text": "VPN connection"
          },
          {
            "letter": "D",
            "text": "Internet gateway"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "23_6",
        "text": "Which pricing model would result in maximum Amazon Elastic Compute Cloud (Amazon EC2) savings for a database server that must be online for one year?",
        "options": [
          {
            "letter": "A",
            "text": "Spot Instance"
          },
          {
            "letter": "B",
            "text": "On-Demand Instance"
          },
          {
            "letter": "C",
            "text": "Partial Upfront Reserved Instance"
          },
          {
            "letter": "D",
            "text": "No Upfront Reserved Instance"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "23_7",
        "text": "A company has a MySQL database running on a single Amazon EC2 instance. The company now requires higher availability in the event of an outage. Which set of tasks would meet this requirement?",
        "options": [
          {
            "letter": "A",
            "text": "Add an Application Load Balancer in front of the EC2 instance"
          },
          {
            "letter": "B",
            "text": "Configure EC2 Auto Recovery to move the instance to another Availability Zone"
          },
          {
            "letter": "C",
            "text": "Migrate to Amazon RDS and enable Multi-AZ"
          },
          {
            "letter": "D",
            "text": "Enable termination protection for the EC2 instance to avoid outages"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "23_8",
        "text": "A company wants to ensure that AWS Management Console users are meeting password complexity requirements. How can the company configure password complexity?",
        "options": [
          {
            "letter": "A",
            "text": "Using an AWS IAM user policy"
          },
          {
            "letter": "B",
            "text": "Using an AWS Organizations service control policy (SCP)"
          },
          {
            "letter": "C",
            "text": "Using an AWS IAM account password policy"
          },
          {
            "letter": "D",
            "text": "Using an AWS Security Hub managed insight"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "23_9",
        "text": "Under the AWS shared responsibility model, which of the following is the customer's responsibility?",
        "options": [
          {
            "letter": "A",
            "text": "Patching guest OS and applications"
          },
          {
            "letter": "B",
            "text": "Patching and fixing flaws in the infrastructure"
          },
          {
            "letter": "C",
            "text": "Physical and environmental controls"
          },
          {
            "letter": "D",
            "text": "Configuration of AWS infrastructure devices"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": "La réponse correcte est l'option A. Patching guest OS and applications."
      },
      {
        "id": "23_10",
        "text": "Which of the following tasks is required to deploy a PCI-compliant workload on AWS?",
        "options": [
          {
            "letter": "A",
            "text": "Use any AWS service and implement PCI controls at the application layer"
          },
          {
            "letter": "B",
            "text": "Use an AWS service that is in-scope for PCI compliance and raise an AWS support ticket to enable PCI compliance at the application layer"
          },
          {
            "letter": "C",
            "text": "Use any AWS service and raise an AWS support ticket to enable PCI compliance on that service"
          },
          {
            "letter": "D",
            "text": "Use an AWS service that is in scope for PCI compliance and apply PCI controls at the application layer"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "23_11",
        "text": "A company is building an application that requires the ability to send, store, and receive messages between application components. The company has another requirement to process messages in first-in, first-out (FIFO) order. Which AWS service should the company use?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Step Functions"
          },
          {
            "letter": "B",
            "text": "Amazon Simple Notification Service (Amazon SNS)"
          },
          {
            "letter": "C",
            "text": "Amazon Kinesis Data Streams"
          },
          {
            "letter": "D",
            "text": "Amazon Simple Queue Service (Amazon SQS)"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "23_12",
        "text": "AnyCompany recently purchased Example Corp. Both companies use AWS resources, and AnyCompany wants a single aggregated bill. Which option allows AnyCompany to receive a single bill?",
        "options": [
          {
            "letter": "A",
            "text": "Example Corp. must submit a request to its AWS solutions architect or AWS technical account manager to link the accounts and consolidate billing."
          },
          {
            "letter": "B",
            "text": "AnyCompany must create a new support case in the AWS Support Center requesting that both bills be combined."
          },
          {
            "letter": "C",
            "text": "Send an invitation to join the organization from AnyCompany's AWS Organizations master account to Example Corp."
          },
          {
            "letter": "D",
            "text": "Migrate the Example Corp. VPCs, Amazon EC2 instances, and other resources into the AnyCompany AWS account."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "23_13",
        "text": "Which tool can be used to create alerts when the actual or forecasted cost of AWS services exceeds a certain threshold?",
        "options": [
          {
            "letter": "A",
            "text": "Cost Explorer"
          },
          {
            "letter": "B",
            "text": "AWS Budgets"
          },
          {
            "letter": "C",
            "text": "AWS Cost and Usage Report"
          },
          {
            "letter": "D",
            "text": "AWS CloudTrail"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "23_14",
        "text": "A user has limited knowledge of AWS services, but wants to quickly deploy a scalable Node.js application in the AWS Cloud. Which service should be used to deploy the application?",
        "options": [
          {
            "letter": "A",
            "text": "AWS CloudFormation"
          },
          {
            "letter": "B",
            "text": "AWS Elastic Beanstalk"
          },
          {
            "letter": "C",
            "text": "Amazon EC2"
          },
          {
            "letter": "D",
            "text": "AWS OpsWorks"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "23_15",
        "text": "Which AWS Trusted Advisor check is available to all AWS users?",
        "options": [
          {
            "letter": "A",
            "text": "Core checks"
          },
          {
            "letter": "B",
            "text": "All checks"
          },
          {
            "letter": "C",
            "text": "Cost optimization checks"
          },
          {
            "letter": "D",
            "text": "Fault tolerance checks"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "23_16",
        "text": "A web developer is concerned that a DDoS attack could target an application. Which AWS services or features can help protect against such an attack? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "AWS Shield"
          },
          {
            "letter": "B",
            "text": "AWS CloudTrail"
          },
          {
            "letter": "C",
            "text": "Amazon CloudFront"
          },
          {
            "letter": "D",
            "text": "AWS Support Center"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "23_17",
        "text": "Which AWS service gives users on-demand, self-service access to AWS compliance control reports?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Config"
          },
          {
            "letter": "B",
            "text": "Amazon GuardDuty"
          },
          {
            "letter": "C",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "D",
            "text": "AWS Artifact"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "23_18",
        "text": "A company wants to provide one of its employees with access to Amazon RDS. The company also wants to limit the interaction to only the AWS CLI and AWS software development kits (SDKs). Which combination of actions should the company take to meet these requirements while following the principles of least privilege? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Create an IAM user and provide AWS Management Console access only."
          },
          {
            "letter": "B",
            "text": "Create an IAM user and provide programmatic access only."
          },
          {
            "letter": "C",
            "text": "Create an IAM role and provide AWS Management Console access only."
          },
          {
            "letter": "D",
            "text": "Create an IAM policy with administrator access and attach it to the IAM user."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. Create an IAM user and provide programmatic access only.."
      },
      {
        "id": "23_19",
        "text": "A company has a compliance requirement to record and evaluate configuration changes, as well as perform remediation actions on AWS resources. Which AWS service should the company use?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Config"
          },
          {
            "letter": "B",
            "text": "AWS Secrets Manager"
          },
          {
            "letter": "C",
            "text": "AWS CloudTrail"
          },
          {
            "letter": "D",
            "text": "AWS Trusted Advisor"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "23_20",
        "text": "What are the advantages of deploying an application with Amazon EC2 instances in multiple Availability Zones? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Preventing a single point of failure"
          },
          {
            "letter": "B",
            "text": "Reducing the operational costs of the application"
          },
          {
            "letter": "C",
            "text": "Allowing the application to serve cross-region users with low latency"
          },
          {
            "letter": "D",
            "text": "Increasing the availability of the application"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "23_21",
        "text": "A workload on AWS will run for the foreseeable future by using a consistent number of Amazon EC2 instances. What pricing model will minimize cost while ensuring that compute resources remain available?",
        "options": [
          {
            "letter": "A",
            "text": "Dedicated Hosts"
          },
          {
            "letter": "B",
            "text": "On-Demand Instances"
          },
          {
            "letter": "C",
            "text": "Spot Instances"
          },
          {
            "letter": "D",
            "text": "Reserved Instances"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "23_22",
        "text": "Which tool can be used to identify scheduled changes to the AWS infrastructure?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Personal Health Dashboard"
          },
          {
            "letter": "B",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "C",
            "text": "Billing Dashboard"
          },
          {
            "letter": "D",
            "text": "AWS Config"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "23_23",
        "text": "Which of the following is the customer's responsibility when using Amazon RDS?",
        "options": [
          {
            "letter": "A",
            "text": "Patching the operating system of underlying hardware"
          },
          {
            "letter": "B",
            "text": "Controlling traffic to and from the database through security groups"
          },
          {
            "letter": "C",
            "text": "Running backups that enable point-in-time recovery of a DB instance"
          },
          {
            "letter": "D",
            "text": "Replacing failed DB instances"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "23_24",
        "text": "What is the customer's responsibility when using AWS Lambda?",
        "options": [
          {
            "letter": "A",
            "text": "Operating system configuration"
          },
          {
            "letter": "B",
            "text": "Application management"
          },
          {
            "letter": "C",
            "text": "Platform management"
          },
          {
            "letter": "D",
            "text": "Code encryption"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "23_25",
        "text": "A company wants to be notified when its AWS Cloud costs or usage exceed defined thresholds. Which AWS service will support these requirements?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Budgets"
          },
          {
            "letter": "B",
            "text": "Cost Explorer"
          },
          {
            "letter": "C",
            "text": "AWS CloudTrail"
          },
          {
            "letter": "D",
            "text": "Amazon Macie"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "23_26",
        "text": "Which AWS service provides the ability to host a NoSQL database in the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Aurora"
          },
          {
            "letter": "B",
            "text": "Amazon DynamoDB"
          },
          {
            "letter": "C",
            "text": "Amazon RDS"
          },
          {
            "letter": "D",
            "text": "Amazon Redshift"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "23_27",
        "text": "Which AWS service allows customers to purchase unused Amazon EC2 capacity at an often discounted rate?",
        "options": [
          {
            "letter": "A",
            "text": "Reserved Instances"
          },
          {
            "letter": "B",
            "text": "On-Demand Instances"
          },
          {
            "letter": "C",
            "text": "Dedicated Instances"
          },
          {
            "letter": "D",
            "text": "Spot Instances"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "23_28",
        "text": "Which AWS service or feature requires an internet service provider (ISP) and a colocation facility to be implemented?",
        "options": [
          {
            "letter": "A",
            "text": "AWS VPN"
          },
          {
            "letter": "B",
            "text": "Amazon Connect"
          },
          {
            "letter": "C",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "D",
            "text": "Internet gateway"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "23_29",
        "text": "Which AWS services offer compute capabilities? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Amazon EC2"
          },
          {
            "letter": "B",
            "text": "Amazon S3"
          },
          {
            "letter": "C",
            "text": "Amazon Elastic Block Store (Amazon EBS)"
          },
          {
            "letter": "D",
            "text": "Amazon Cognito"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "23_30",
        "text": "Which AWS service can be used to privately store and manage versions of source code?",
        "options": [
          {
            "letter": "A",
            "text": "AWS CodeBuild"
          },
          {
            "letter": "B",
            "text": "AWS CodeCommit"
          },
          {
            "letter": "C",
            "text": "AWS CodePipeline"
          },
          {
            "letter": "D",
            "text": "AWS CodeStar"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "23_31",
        "text": "Which AWS service should a cloud practitioner use to identify security vulnerabilities of an AWS account?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Secrets Manager"
          },
          {
            "letter": "B",
            "text": "Amazon Cognito"
          },
          {
            "letter": "C",
            "text": "Amazon Macie"
          },
          {
            "letter": "D",
            "text": "AWS Trusted Advisor"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "23_32",
        "text": "A company wants to ensure its infrastructure is designed for fault tolerance and business continuity in the event of an environmental disruption. Which AWS infrastructure component should the company replicate across?",
        "options": [
          {
            "letter": "A",
            "text": "Edge locations"
          },
          {
            "letter": "B",
            "text": "Availability Zones"
          },
          {
            "letter": "C",
            "text": "Regions"
          },
          {
            "letter": "D",
            "text": "Amazon Route 53"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "23_33",
        "text": "Which AWS service or feature is used to send both text and email messages from distributed applications?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon Simple Notification Service (Amazon SNS)"
          },
          {
            "letter": "B",
            "text": "Amazon Simple Email Service (Amazon SES)"
          },
          {
            "letter": "C",
            "text": "Amazon CloudWatch alerts"
          },
          {
            "letter": "D",
            "text": "Amazon Simple Queue Service (Amazon SQS)"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "23_34",
        "text": "Which AWS Cloud design principles can help increase reliability? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Using monolithic architecture"
          },
          {
            "letter": "B",
            "text": "Measuring overall efficiency"
          },
          {
            "letter": "C",
            "text": "Testing recovery procedures"
          },
          {
            "letter": "D",
            "text": "Adopting a consumption model"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "23_35",
        "text": "A company is planning to launch an ecommerce site in a single AWS Region to a worldwide user base. Which AWS services will allow the company to reach users and provide low latency and high transfer speeds? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Application Load Balancer"
          },
          {
            "letter": "B",
            "text": "AWS Global Accelerator"
          },
          {
            "letter": "C",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "D",
            "text": "Amazon CloudFront"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "23_36",
        "text": "A company wants to connect to AWS over a private, low-latency connection from its remote office. What is the recommended method to meet these requirements?",
        "options": [
          {
            "letter": "A",
            "text": "Create a VPN tunnel"
          },
          {
            "letter": "B",
            "text": "Connect across the public internet"
          },
          {
            "letter": "C",
            "text": "Use VPC peering to create a connection."
          },
          {
            "letter": "D",
            "text": "Use AWS Direct Connect."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "23_37",
        "text": "Which AWS service can be used to retrieve compliance reports on demand?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Secrets Manager"
          },
          {
            "letter": "B",
            "text": "AWS Artifact"
          },
          {
            "letter": "C",
            "text": "AWS Security Hub"
          },
          {
            "letter": "D",
            "text": "AWS Certificate Manager"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "23_38",
        "text": "A company has an AWS-hosted website located behind an Application Load Balancer. The company wants to safeguard the website from SQL injection or cross-site scripting. Which AWS service should the company use?",
        "options": [
          {
            "letter": "A",
            "text": "Amazon GuardDuty"
          },
          {
            "letter": "B",
            "text": "AWS WAF"
          },
          {
            "letter": "C",
            "text": "AWS Trusted Advisor"
          },
          {
            "letter": "D",
            "text": "Amazon Inspector"
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": ":."
      },
      {
        "id": "23_39",
        "text": "How should a web application be deployed to ensure high availability in the AWS Cloud?",
        "options": [
          {
            "letter": "A",
            "text": "Deploy multiple instances of the application in multiple Availability Zones."
          },
          {
            "letter": "B",
            "text": "Deploy multiple instances of the application in a single Availability Zone."
          },
          {
            "letter": "C",
            "text": "Deploy the application to a compute-optimized Amazon EC2 instance in a single Availability Zone."
          },
          {
            "letter": "D",
            "text": "Deploy the application in one Amazon EC2 instance in an Auto Scaling group."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "23_40",
        "text": "A company is running a self-managed Oracle database directly on Amazon EC2 for its steady-state database. The company wants to reduce compute costs. Which option should the company use to maximize savings over a 3-year term?",
        "options": [
          {
            "letter": "A",
            "text": "EC2 Dedicated Instances"
          },
          {
            "letter": "B",
            "text": "EC2 Spot Instances"
          },
          {
            "letter": "C",
            "text": "EC2 Reserved Instances"
          },
          {
            "letter": "D",
            "text": "EC2 On-Demand Instances"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "23_41",
        "text": "An external auditor has requested that a company provide a list of all its IAM users, including the status of users' credentials and access keys. What it the SIMPLEST way to provide this information?",
        "options": [
          {
            "letter": "A",
            "text": "Create an IAM user account for the auditor, granting the auditor administrator permissions."
          },
          {
            "letter": "B",
            "text": "Take a screenshot of each user's page in the AWS Management Console, then provide the screenshots to the auditor."
          },
          {
            "letter": "C",
            "text": "Download the IAM credential report, then provide the report to the auditor."
          },
          {
            "letter": "D",
            "text": "Download the AWS Trusted Advisor report, then provide the report to the auditor."
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "23_42",
        "text": "What are the benefits of consolidated billing for AWS Cloud services? (Choose two.)",
        "options": [
          {
            "letter": "A",
            "text": "Volume discounts"
          },
          {
            "letter": "B",
            "text": "A minimal additional fee for use"
          },
          {
            "letter": "C",
            "text": "One bill for multiple accounts"
          },
          {
            "letter": "D",
            "text": "Installment payment options"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "23_43",
        "text": "A company is expecting a short-term spike in internet traffic for its application. During the traffic increase, the application cannot be interrupted. The company also needs to minimize cost and maximize flexibility. Which Amazon EC2 instance type should the company use to meet these requirements?",
        "options": [
          {
            "letter": "A",
            "text": "On-Demand Instances"
          },
          {
            "letter": "B",
            "text": "Spot Instances"
          },
          {
            "letter": "C",
            "text": "Reserved Instances"
          },
          {
            "letter": "D",
            "text": "Dedicated Hosts"
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "23_44",
        "text": "A company wants to track AWS resource configuration changes for compliance reasons. Which AWS feature can be used to meet this requirement?",
        "options": [
          {
            "letter": "A",
            "text": "AWS Cost and Usage Report"
          },
          {
            "letter": "B",
            "text": "AWS Organizations service control policies (SCPs)"
          },
          {
            "letter": "C",
            "text": "AWS Config rules"
          },
          {
            "letter": "D",
            "text": "VPC Flow Logs"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "23_45",
        "text": "A company is building an application that needs to deliver images and videos globally with minimal latency. Which approach can the company use to accomplish this in a cost effective manner?",
        "options": [
          {
            "letter": "A",
            "text": "Deliver the content through Amazon CloudFront."
          },
          {
            "letter": "B",
            "text": "Store the content on Amazon S3 and enable S3 cross-region replication."
          },
          {
            "letter": "C",
            "text": "Implement a VPN across multiple AWS Regions."
          },
          {
            "letter": "D",
            "text": "Deliver the content through AWS PrivateLink."
          }
        ],
        "correctAnswers": [
          "A"
        ],
        "explanation": ":."
      },
      {
        "id": "23_46",
        "text": "The AWS IAM best practice for granting least privilege is to:",
        "options": [
          {
            "letter": "A",
            "text": "apply an IAM policy to an IAM group and limit the size of the group."
          },
          {
            "letter": "B",
            "text": "require multi-factor authentication (MFA) for all IAM users."
          },
          {
            "letter": "C",
            "text": "require each IAM user who has different permissions to have multiple passwords."
          },
          {
            "letter": "D",
            "text": "apply an IAM policy only to IAM users who require it."
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "23_47",
        "text": "Which cloud computing benefit does AWS demonstrate with its ability to offer lower variable costs as a result of high purchase volumes?",
        "options": [
          {
            "letter": "A",
            "text": "Pay-as-you-go pricing"
          },
          {
            "letter": "B",
            "text": "High availability"
          },
          {
            "letter": "C",
            "text": "Global reach"
          },
          {
            "letter": "D",
            "text": "Economies of scale"
          }
        ],
        "correctAnswers": [
          "D"
        ],
        "explanation": ":."
      },
      {
        "id": "23_48",
        "text": "A pharmaceutical company operates its infrastructure in a single AWS Region. The company has thousands of VPCs in a various AWS accounts that it wants to interconnect. Which AWS service or feature should the company use to help simplify management and reduce operational costs?",
        "options": [
          {
            "letter": "A",
            "text": "VPC endpoint"
          },
          {
            "letter": "B",
            "text": "AWS Direct Connect"
          },
          {
            "letter": "C",
            "text": "AWS Transit Gateway"
          },
          {
            "letter": "D",
            "text": "VPC peering"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      },
      {
        "id": "23_49",
        "text": "How can AWS enable a company to control expenses as an application's usage changes unpredictably?",
        "options": [
          {
            "letter": "A",
            "text": "AWS will refund the cost difference if a customer moves to larger servers."
          },
          {
            "letter": "B",
            "text": "The application can be built to scale up or down automatically as resources are needed"
          },
          {
            "letter": "C",
            "text": "Spot instances will automatically be used if the price is lower than on-demand instances."
          },
          {
            "letter": "D",
            "text": "Amazon CloudWatch will automatically predict what resources are needed."
          }
        ],
        "correctAnswers": [
          "B"
        ],
        "explanation": "La réponse correcte est l'option B. The application can be built to scale up or down automatically as resources are needed."
      },
      {
        "id": "23_50",
        "text": "Which AWS service or feature can be used to prevent SQL injection attacks?",
        "options": [
          {
            "letter": "A",
            "text": "Security groups"
          },
          {
            "letter": "B",
            "text": "Network ACLs"
          },
          {
            "letter": "C",
            "text": "AWS WAF"
          },
          {
            "letter": "D",
            "text": "IAM policy"
          }
        ],
        "correctAnswers": [
          "C"
        ],
        "explanation": ":."
      }
    ]
  }
];

// Exporter les données pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { allExams };
}