// src/data.js

// --- 1. CONTACT & PROFILE DATA ---
export const PROFILE_DATA = {
  name: 'MOHAMMAD NISHAM VM',
  tagline: 'Motivated Graduate | MCA Student | Python & Web Developer',
  email: 'mohammadnisham547@gmail.com',
  phone: '+919605088773',
  location: 'Thrissur, Kerala',
  summary: 'I am a motivated graduate with a B.Sc. in Chemistry and currently pursuing MCA. Skilled in Python, Django, MySQL, and web development, I have project experience through BookLoop, a smart book exchange platform. With strong problem-solving, adaptability, and teamwork skills, I am eager to start my IT career, contribute to impactful projects, and continue growing professionally.',

  // ADDED: The certifications array with clean text
  certifications: [
    "DataBase Management System - NPTEL",
    "Data Analytics Essentials - CISCO",
    "Big Data 101 - IBM",
    // You can add NSS here if you have a component for it
  ],
};

// --- 2. SKILLS DATA ---
export const SKILLS_DATA = {
  technical: [
    { name: 'Python', category: 'Programming' },
    { name: 'C', category: 'Programming' },
    { name: 'HTML', category: 'Web Development' },
    { name: 'CSS', category: 'Web Development' },
    { name: 'JavaScript', category: 'Web Development' },
    { name: 'MySQL', category: 'Databases' },
    { name: 'MongoDB', category: 'Databases' },
    { name: 'SQLite', category: 'Databases' },
    { name: 'Django', category: 'Frameworks' },
    { name: 'Git', category: 'Tools & Platforms' },
    { name: 'GitHub', category: 'Tools & Platforms' },
    { name: 'VS Code', category: 'Tools & Platforms' },
    { name: 'Colab', category: 'Tools & Platforms' },
  ],
  soft: [
    'Problem Solving',
    'Adaptability',
    'Time Management',
    'Communication',
    'Leadership',
  ],
};

// --- 3. PROJECTS DATA ---
export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'BOOKLOOP: A SMART BOOK EXCHANGE PLATFORM',
    description: 'An online platform for sharing, exchanging, and discovering books.',
    technologies: ['Django (Backend)', 'HTML', 'CSS', 'JavaScript'],
    contributions: [
      'Developed the frontend using HTML, CSS, and JavaScript for a simple and user-friendly interface.',
      'Built the secure and efficient backend powered by Django.',
      'Implemented key features: user account management, profile management, book listing, and user chat.',
      'Integrated personalized recommendations for book discovery.',
      'Designed admin controls to oversee user activity and maintain platform integrity.',
    ],
    // Add GitHub/Live links here when available
  },
  // You can add more projects here
];

// --- 4. EDUCATION DATA ---
export const EDUCATION_DATA = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Rajiv Gandhi Institute of Technology, Kottayam',
    university: 'APJ Abdul Kalam Technological University',
    year: 'Ongoing (2026)',
    gpa: '8.05/10',
  },
  {
    degree: 'Bsc Chemistry',
    institution: 'Sree Krishna College, Guruvayur',
    university: 'University of Calicut',
    year: '2023',
    gpa: '8.5/10',
  },
  // Include Diploma or other degrees if you want them on the portfolio
];