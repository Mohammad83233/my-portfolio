// src/data.js

// --- 1. CONTACT & PROFILE DATA ---
export const PROFILE_DATA = {
  name: 'MOHAMMAD NISHAM VM',
  tagline: 'MCA Postgraduate | Python & Web Developer | Machine Learning Enthusiast',
  email: 'nishamnisham659@gmail.com',
  phone: '+971 503852311',
  location: 'Dubai, UAE',
  summary: 'MCA postgraduate with a B.Sc. in Chemistry, passionate about technology, teaching, and continuous learning. Skilled in Python, Django, MySQL, and web development. Proficient in machine learning with hands-on experience using NumPy, Pandas, and Scikit-learn. Strong analytical and problem-solving abilities with a passion for simplifying complex concepts and creating engaging learning environments.',
  visaStatus: 'Visit Visa',
  visaValidity: '09-08-2026',
  availability: 'Immediate',

  // Social Links
  linkedin: 'https://linkedin.com/in/mohammad-nisham',
  github: 'https://github.com/mohammad83233',

  certifications: [
    "DataBase Management System - NPTEL",
    "Data Analytics Essentials - CISCO",
    "Big Data 101 - IBM",
    "NSS - Sree Krishna College, Guruvayur",
  ],
};

// --- 2. SKILLS DATA ---
export const SKILLS_DATA = {
  technical: [
    { name: 'Python', category: 'Programming' },
    { name: 'C', category: 'Programming' },
    { name: 'PHP', category: 'Programming' },
    { name: 'React', category: 'Web Development' },
    { name: 'HTML5', category: 'Web Development' },
    { name: 'CSS3', category: 'Web Development' },
    { name: 'JavaScript', category: 'Web Development' },
    { name: 'MySQL', category: 'Databases' },
    { name: 'MongoDB', category: 'Databases' },
    { name: 'SQLite', category: 'Databases' },
    { name: 'Django', category: 'Frameworks' },
    { name: 'NumPy', category: 'ML Libraries' },
    { name: 'Pandas', category: 'ML Libraries' },
    { name: 'Scikit-learn', category: 'ML Libraries' },
    { name: 'TensorFlow', category: 'Deep Learning' },
    { name: 'PyTorch', category: 'Deep Learning' },
    { name: 'Git', category: 'Tools & Platforms' },
    { name: 'GitHub', category: 'Tools & Platforms' },
    { name: 'VS Code', category: 'Tools & Platforms' },
    { name: 'Colab', category: 'Tools & Platforms' },
  ],
  soft: [
    'Adaptability',
    'Problem Solving',
    'Communication',
    'Time Management',
  ],
};

// --- 3. PROJECTS DATA ---
export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'BookLoop: A Smart Book Exchange Platform',
    description: 'Developed book exchange platform with user accounts, book listings, chat system, and personalised recommendations.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Django'],
    contributions: [
      'Developed the frontend using HTML5, CSS3, and JavaScript for a clean, user-friendly interface.',
      'Built the secure and efficient backend powered by Django.',
      'Implemented key features: user account management, profile management, book listing, and user chat.',
      'Integrated personalized recommendations for book discovery.',
      'Designed admin controls to oversee user activity and maintain platform integrity.',
    ],
    github: 'https://github.com/mohammad83233',
  },
  {
    id: 2,
    title: 'AI Enabled Veterinary Clinical Decision Support System',
    description: 'Developed an AI-powered veterinary clinical decision support system that uses text-based symptom analysis for disease prediction, image-based disease detection, and AI-driven treatment recommendations.',
    technologies: ['Densenet121', 'XGBoost', 'React'],
    contributions: [
      'Built a text-based symptom analysis module for accurate disease prediction.',
      'Implemented image-based disease detection using Densenet121 deep learning model.',
      'Developed AI-driven treatment recommendation engine using XGBoost.',
      'Created an interactive React frontend for veterinary professionals.',
    ],
  },
];

// --- 4. EDUCATION DATA ---
export const EDUCATION_DATA = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Rajiv Gandhi Institute of Technology, Kottayam',
    university: 'APJ Abdul Kalam Technological University',
    year: '2026',
    gpa: '8.34/10',
  },
  {
    degree: 'B.Sc Chemistry',
    institution: 'Sree Krishna College, Guruvayur',
    university: 'University of Calicut',
    year: '2023',
    gpa: '8.5/10',
  },
  {
    degree: 'Higher Secondary',
    institution: 'Govt HSS Kochannur',
    university: '',
    year: '2020',
    grade: '94%',
  },
  {
    degree: 'SSLC',
    institution: 'I.C.A.E.H.S.S',
    university: '',
    year: '2018',
    grade: '98%',
  },
];

// --- 5. LANGUAGES DATA ---
export const LANGUAGES_DATA = ['English', 'Malayalam', 'Hindi'];