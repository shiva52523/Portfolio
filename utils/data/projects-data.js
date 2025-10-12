
// utils/data/projects-data.js

export const projectsData = [
  {
    id: 1,
    name: 'AI Recruitment Platform',
    description:
      "Built an AI-powered recruitment platform that automates candidate screening, resume parsing, and job matching. Developed scalable REST APIs using FastAPI. Integrated OpenAI for intelligent candidate evaluation and recommendation. Used AWS S3 for resume storage, AWS SES for email notifications, and PostgreSQL for structured candidate data. Implemented authentication with JWT and Google OAuth. Deployed using Docker and Nginx on AWS EC2.",
    tools: [
      'Python',
      'FastAPI',
      'OpenAI API',
      'PostgreSQL',
      'SQLAlchemy',
      'AWS S3',
      'AWS SES',
      'Docker',
      'Nginx',
      'EC2',
      'JWT',
      'Google OAuth',
    ],
    role: 'Backend & AI Developer',
    code: '',
    demo: '',
  },
  {
    id: 2,
    name: 'Agriculture Optimization System',
    description:
      'Developed an AI-powered system to help farmers optimize crop yield and resource usage. Built backend APIs using FastAPI and integrated ML models for crop recommendation and weather prediction. Used PostgreSQL for structured data storage and AWS S3 for storing datasets. Implemented data visualization dashboards and real-time updates using WebSockets.',
    tools: [
      'Python',
      'FastAPI',
      'Scikit-learn',
      'PostgreSQL',
      'Pandas',
      'AWS S3',
      'WebSockets',
      'Docker',
      'Nginx',
    ],
    role: 'Backend & AI Developer',
    code: 'https://github.com/shiva52523/Agriculture-Optimization-System.git',
    demo: '',
  },
  {
    id: 3,
    name: 'Employee Management System',
    description:
      'Built a scalable employee management platform with role-based access control, payroll automation, and performance tracking. Developed APIs using Django REST Framework. Implemented authentication with JWT, scheduled background tasks with Celery & Redis, and integrated email notifications via AWS SES. Deployed on AWS EC2 with Docker.',
    tools: [
      'Python',
      'Django REST Framework',
      'PostgreSQL',
      'Celery',
      'Redis',
      'JWT',
      'AWS SES',
      'Docker',
      'EC2',
      'Nginx',
    ],
    role: 'Backend Developer',
    code: 'https://github.com/shiva52523/Employee-Management.git',
    demo: '',
  },
  {
    id: 4,
    name: 'AI Powered Real Estate',
    description:
      'Developed an AI-powered real estate platform that recommends properties based on user preferences and budget. Integrated OpenAI and computer vision models for property description generation and image classification. Built backend with FastAPI and stored property listings in PostgreSQL. Implemented payment gateway integration and deployed using Docker on AWS.',
    tools: [
      'Python',
      'FastAPI',
      'OpenAI API',
      'TensorFlow',
      'PostgreSQL',
      'Stripe',
      'AWS EC2',
      'Docker',
      'Nginx',
    ],
    role: 'Backend & AI Developer',
    code: '',
    demo: '',
  },
  {
    id: 5,
    name: 'AI Video Interview',
    description:
      'Conduct AI-assisted video interviews and analyze candidate performance automatically. Includes tone, expression, and speech analysis for smart evaluation.',
    tools: ['Python', 'OpenCV', 'DeepFace', 'FastAPI', 'NLP', 'MediaPipe', 'AWS S3'],
    role: 'AI Developer',
    code: '',
    demo: '',
  },
  {
    id: 6,
    name: 'AI Recruitment Platform (Enhanced)',
    description:
      'Advanced version of AI recruitment platform with predictive analytics and AI interview scoring integrated into recruitment workflow.',
    tools: ['Python', 'FastAPI', 'Scikit-learn', 'OpenAI', 'PostgreSQL', 'Pandas'],
    role: 'Backend & AI Developer',
    code: '',
    demo: '',
  },
  {
    id: 7,
    name: 'Resume Parsing',
    description:
      'Extract structured information from resumes using NLP — skills, education, and experience are automatically parsed into structured data.',
    tools: ['Python', 'spaCy', 'Regex', 'FastAPI', 'PostgreSQL'],
    role: 'Python Developer',
    code: '',
    demo: '',
  },
  {
    id: 8,
    name: 'Job Stability Scoring',
    description:
      'AI system to score and rank candidates based on resume quality, experience, and job switching history.',
    tools: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'FastAPI'],
    role: 'ML Engineer',
    code: '',
    demo: '',
  },
  {
    id: 9,
    name: 'Email Campaign Notifier',
    description:
      'Automate email campaigns with AI-powered analytics and notifications. Send personalized emails and track open/click rates.',
    tools: ['Python', 'Flask', 'AWS SES', 'Pandas', 'Matplotlib'],
    role: 'Backend Developer',
    code: '',
    demo: '',
  },
  {
    id: 10,
    name: 'AI Video Analyzer',
    description:
      'Analyze and classify video content using computer vision and AI. Detect objects, emotions, and activities in uploaded videos.',
    tools: ['Python', 'OpenCV', 'TensorFlow', 'FastAPI', 'DeepFace'],
    role: 'AI Engineer',
    code: '',
    demo: '',
  },
  {
    id: 11,
    name: 'Candidate Assessment System',
    description:
      'Automate candidate evaluation on coding, aptitude, and soft skills using AI-based scoring models.',
    tools: ['Python', 'FastAPI', 'OpenAI', 'Flask', 'NLP'],
    role: 'AI Developer',
    code: '',
    demo: '',
  },
  {
    id: 12,
    name: 'Task Management System',
    description:
      'A productivity and task tracking system with user authentication, task assignment, and progress visualization for teams.',
    tools: ['Python', 'Django', 'HTML', 'CSS', 'SQLite', 'Bootstrap'],
    role: 'Full Stack Developer',
    code: 'https://github.com/shiva52523/Task-Management-System.git',
    demo: '',
  },
  {
    id: 13,
    name: 'Real-time Object Detection',
    description:
      'Detect objects in real-time using YOLOv8 and Python. Supports live webcam feed and multiple object tracking.',
    tools: ['Python', 'YOLOv8', 'OpenCV', 'TensorFlow'],
    role: 'AI Engineer',
    code: '',
    demo: '',
  },
  {
    id: 14,
    name: 'Handwriting Recognition',
    description:
      'Classify handwritten characters using CNN deep learning models. Recognize digits and alphabets efficiently.',
    tools: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
    role: 'ML Engineer',
    code: '',
    demo: '',
  },
  {
    id: 15,
    name: 'Stock Price Prediction',
    description:
      'Predict stock prices using historical data and LSTM neural networks built in Python.',
    tools: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'NumPy', 'Matplotlib'],
    role: 'Data Scientist',
    code: '',
    demo: '',
  },
  {
    id: 16,
    name: 'Object Tracking System',
    description:
      'Track multiple objects in videos using Python and OpenCV with real-time frame analysis.',
    tools: ['Python', 'OpenCV', 'NumPy'],
    role: 'Computer Vision Developer',
    code: '',
    demo: '',
  },
  {
    id: 17,
    name: 'Sentiment Analysis Dashboard',
    description:
      'Create a web dashboard to visualize tweet sentiments in real time using Flask and NLP models.',
    tools: ['Python', 'Flask', 'Plotly', 'Pandas', 'NLTK'],
    role: 'Data Analyst',
    code: '',
    demo: '',
  },
  {
    id: 18,
    name: 'Text Summarization',
    description:
      'Summarize long articles using extractive and abstractive models built with BERT and spaCy.',
    tools: ['Python', 'BERT', 'spaCy', 'Transformers'],
    role: 'AI Developer',
    code: '',
    demo: '',
  },
  {
    id: 19,
    name: 'Reinforcement Learning Game AI',
    description:
      'Build AI agents to play games like Flappy Bird using Q-learning and Python.',
    tools: ['Python', 'Gym', 'NumPy', 'Matplotlib'],
    role: 'ML Engineer',
    code: '',
    demo: '',
  },
  {
    id: 20,
    name: 'Image Segmentation using U-Net',
    description:
      'Implement image segmentation tasks using U-Net architecture for object separation.',
    tools: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
    role: 'AI Engineer',
    code: '',
    demo: '',
  },
  {
    id: 21,
    name: 'NLP Chatbot with Transformers',
    description:
      'Build an advanced chatbot using BERT transformers for contextual FAQ automation.',
    tools: ['Python', 'Transformers', 'BERT', 'Flask'],
    role: 'AI Developer',
    code: '',
    demo: '',
  },
  {
    id: 22,
    name: 'Face Recognition System',
    description:
      'Detect and recognize faces using Python and OpenCV in both images and live video feeds.',
    tools: ['Python', 'OpenCV', 'Dlib', 'FaceNet'],
    role: 'Computer Vision Engineer',
    code: '',
    demo: '',
  },
  {
    id: 23,
    name: 'Fraud Detection Model',
    description:
      'Build a machine learning model to detect fraudulent transactions using Random Forest.',
    tools: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    role: 'Data Scientist',
    code: '',
    demo: '',
  },
  {
    id: 24,
    name: 'Speech Recognition System',
    description:
      'Convert human speech to text using Python’s SpeechRecognition and NLP processing.',
    tools: ['Python', 'SpeechRecognition', 'PyAudio', 'NLP'],
    role: 'AI Developer',
    code: '',
    demo: '',
  },
  {
    id: 25,
    name: 'Reinforcement Learning Basics',
    description:
      'Introduction to Q-learning where an AI agent learns to solve a maze autonomously.',
    tools: ['Python', 'Gym', 'NumPy', 'Matplotlib'],
    role: 'ML Developer',
    code: '',
    demo: '',
  },
  {
    id: 26,
    name: 'Time Series Forecasting',
    description:
      'Predict future data points using ARIMA and Prophet models for sales forecasting.',
    tools: ['Python', 'Prophet', 'Statsmodels', 'Pandas', 'Matplotlib'],
    role: 'Data Analyst',
    code: '',
    demo: '',
  },
  {
    id: 27,
    name: 'Recommendation System',
    description:
      'Build a collaborative filtering movie recommendation system using Python and Pandas.',
    tools: ['Python', 'Pandas', 'Scikit-learn', 'NumPy'],
    role: 'Data Scientist',
    code: '',
    demo: '',
  },
  {
    id: 28,
    name: 'Object Detection with OpenCV',
    description:
      'Detect and classify objects in real time using YOLO and OpenCV with Python.',
    tools: ['Python', 'OpenCV', 'YOLO'],
    role: 'Computer Vision Developer',
    code: '',
    demo: '',
  },
  {
    id: 29,
    name: 'Chatbot Development',
    description:
      'Create a simple chatbot using Python and NLP for rule-based conversation automation.',
    tools: ['Python', 'NLTK', 'Flask'],
    role: 'Python Developer',
    code: '',
    demo: '',
  },
  {
    id: 30,
    name: 'Deep Learning Basics',
    description:
      'Understand the fundamentals of deep learning — neural networks, activation functions, and backpropagation.',
    tools: ['Python', 'TensorFlow', 'Keras', 'NumPy'],
    role: 'ML Developer',
    code: '',
    demo: '',
  },
  {
    id: 31,
    name: 'Natural Language Processing with Python',
    description:
      'Perform text classification and sentiment analysis using Python NLP libraries.',
    tools: ['Python', 'NLTK', 'Pandas', 'Scikit-learn'],
    role: 'Data Analyst',
    code: '',
    demo: '',
  },
  {
    id: 32,
    name: 'Image Classifier using CNN',
    description:
      'Build a CNN image classifier using TensorFlow and Keras on the MNIST dataset.',
    tools: ['Python', 'TensorFlow', 'Keras'],
    role: 'ML Engineer',
    code: '',
    demo: '',
  },
  {
    id: 33,
    name: 'Predictive Analytics & Clustering',
    description:
      'Implement regression and clustering techniques for house price prediction and customer segmentation.',
    tools: ['Python', 'Scikit-learn', 'Matplotlib', 'Pandas'],
    role: 'Data Analyst',
    code: '',
    demo: '',
  },
  {
    id: 34,
    name: 'AI Starter Kit',
    description:
      'Basic setup for AI and Python environment including NumPy, Pandas, and scikit-learn — preprocess datasets and train first models.',
    tools: ['Python', 'NumPy', 'Pandas', 'Scikit-learn'],
    role: 'Beginner AI Developer',
    code: '',
    demo: '',
  },
];
