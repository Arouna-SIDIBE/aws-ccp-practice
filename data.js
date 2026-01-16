// Structure de données pour les examens
const allExams = [
    {
        id: 1,
        name: "Practice Exam 1",
        description: "Premier examen pratique AWS CCP - 50 questions",
        questionCount: 50,
        duration: 90,
        questions: [
            {
                id: "1_1",
                text: "AWS allows users to manage their resources using a web based user interface. What is the name of this interface?",
                options: [
                    { letter: "A", text: "AWS CLI." },
                    { letter: "B", text: "AWS API." },
                    { letter: "C", text: "AWS SDK." },
                    { letter: "D", text: "AWS Management Console." }
                ],
                correctAnswers: ["D"],
                explanation: "The AWS Management Console is the web-based interface for managing AWS resources."
            },
            {
                id: "1_2",
                text: "Which of the following is an example of horizontal scaling in the AWS Cloud?",
                options: [
                    { letter: "A", text: "Replacing an existing EC2 instance with a larger, more powerful one." },
                    { letter: "B", text: "Increasing the compute capacity of a single EC2 instance to address the growing demands of an application." },
                    { letter: "C", text: "Adding more RAM capacity to an EC2 instance." },
                    { letter: "D", text: "Adding more EC2 instances of the same size to handle an increase in traffic." }
                ],
                correctAnswers: ["D"],
                explanation: "Horizontal scaling (scaling out) involves adding more instances of the same size, while vertical scaling involves increasing the capacity of existing instances."
            },
            // Ajouter les autres questions de l'examen 1...
        ]
    },
    {
        id: 10,
        name: "Practice Exam 10",
        description: "Dixième examen pratique AWS CCP - 50 questions",
        questionCount: 50,
        duration: 90,
        questions: [
            {
                id: "10_1",
                text: "Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO)",
                options: [
                    { letter: "A", text: "AWS Concierge." },
                    { letter: "B", text: "AWS CloudFormation." },
                    { letter: "C", text: "Amazon Simple Storage Service (Amazon S3)." },
                    { letter: "D", text: "Amazon EC2 Auto Scaling." },
                    { letter: "E", text: "AWS Management Console." }
                ],
                correctAnswers: ["B", "E"],
                explanation: "AWS CloudFormation (infrastructure as code) and AWS Management Console (web interface) can both be used to launch RDS clusters."
            },
            // Ajouter les autres questions de l'examen 10...
        ]
    },
    // Ajouter les autres examens...
];

// Exporter les données pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { allExams };
}