export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const heroRoles = [
  'Frontend Developer',
  'React.js Developer',
  'Python Developer',
  'Full Stack Developer',
];

export const aboutCards = [
  { label: 'Location', value: 'Hyderabad, Telangana, India' },
  { label: 'Qualification', value: 'B.Tech in Computer Science and Engineering' },
  { label: 'Graduation', value: '2025' },
  { label: 'Languages', value: 'English and Telugu' },
  { label: 'Availability', value: 'Immediate' },
  { label: 'Preferred Roles', value: 'Frontend, React, Python & Full Stack' },
];

export const skillGroups = [
  {
    title: 'Frontend Development',
    icon: 'LayoutPanelTop',
    items: [
      { name: 'HTML5', note: 'Semantic layouts and accessible markup' },
      { name: 'CSS3', note: 'Responsive and modern styling' },
      { name: 'JavaScript ES6+', note: 'Clean and efficient UI logic' },
      { name: 'React.js', note: 'Reusable components and stateful interfaces' },
      { name: 'Tailwind CSS', note: 'Fast UI building with utility classes' },
      { name: 'Bootstrap', note: 'Rapid prototyping and UI consistency' },
      { name: 'Responsive Web Design', note: 'Reliable experience across screen sizes' },
    ],
  },
  {
    title: 'Mobile Development',
    icon: 'Smartphone',
    items: [
      { name: 'React Native', note: 'Cross-platform mobile interfaces' },
      { name: 'Expo', note: 'Fast mobile app development workflow' },
      { name: 'React Navigation', note: 'Smooth app navigation flows' },
    ],
  },
  {
    title: 'Backend Development',
    icon: 'ServerCog',
    items: [
      { name: 'Python', note: 'Strong scripting and logic building' },
      { name: 'Django Basics', note: 'Backend fundamentals and CRUD flows' },
      { name: 'Node.js', note: 'Server-side JavaScript solutions' },
      { name: 'Express.js', note: 'Lightweight API development' },
      { name: 'REST API Integration', note: 'Connecting frontends with real services' },
    ],
  },
  {
    title: 'Databases',
    icon: 'Database',
    items: [
      { name: 'MySQL', note: 'Structured data storage and queries' }
      
    ],
  },
  {
    title: 'Development Tools',
    icon: 'Wrench',
    items: [
      { name: 'Git', note: 'Version control and collaboration' },
      { name: 'GitHub', note: 'Project hosting and review workflows' },
      { name: 'VS Code', note: 'Clean and efficient development setup' },
      { name: 'Postman', note: 'API testing and debugging' },
      { name: 'Vercel', note: 'Fast deployment and preview environments' }
      
    ],
  },
  {
    title: 'Programming Concepts',
    icon: 'BrainCircuit',
    items: [
      
      { name: 'React Hooks', note: 'Modern state and lifecycle patterns' },
      { name: 'State Management', note: 'Managing app data confidently' },
      { name: 'Conditional Rendering', note: 'Dynamic UI based on state' },
      { name: 'Event Handling', note: 'Interactive user experiences' },
      { name: 'API Integration', note: 'Data fetching and real-world wiring' },
      { name: 'Error Handling', note: 'Creating reliable user flows' },
      { name: 'SQL Queries', note: 'Fetching and managing data' }
     
    ],
  },
];

export const projects = [
  {
    id: 'vrittify',
    title: 'Vrittify AI – AI-Powered Learning Platform',
    category: 'React',
    description: 'Developed a responsive AI-powered educational platform designed to support teachers and students with personalized learning, assessments, scheduling, and progress tracking while improving the digital learning experience.',
    features: [
      'Built role-based dashboard modules for students and educators',
      'Implemented lesson management and learning content navigation',
      'Created interactive quiz and assessment modules',
      'Developed smart scheduling and task management features',
      'Added a leaderboard system to encourage engagement',
      'Built a doubt-resolution workflow for student support',
      'Optimized the UI for mobile, tablet, and desktop experiences',
    ],
    tech: ['React.js', 'React Router', 'JavaScript', 'CSS', 'Responsive Design'],
    githubUrl: '#',
    liveUrl: 'https://www.vrittifyai.com/',
    image: '/projects/vrittify.png',
    accent: 'from-cyan-500/20 to-blue-500/20',
  },
  
  {
    id: 'qr',
    title: 'QR Code Generator',
    category: 'React',
    description: 'A customizable QR-code generator that creates downloadable QR codes based on user-entered text, selected size, and color.',
    features: [
      'Dynamic QR-code generation',
      'QR-code download',
      'Input validation',
    ],
    tech: ['React.js', 'JavaScript', 'CSS', 'QR Code API'],
    githubUrl: 'https://github.com/raju8143/React_Qr_Code_Generator.git',
    liveUrl: 'https://qr-code-generator-gamma-five.vercel.app/',
    image: '/projects/qr.png',
    accent: 'from-emerald-500/20 to-cyan-500/20',
  },
  {
    id: 'depression',
    title: 'Online Depression Detection System',
    category: 'Machine Learning',
    description: 'An academic machine-learning system that analyzes text, image, and audio inputs to identify potential signs of depression using sentiment analysis and classification.',
    features: [
      'Text sentiment analysis',
      'OCR-based image text extraction',
      'Audio-to-text conversion',
      'NLP preprocessing',
      'SVM classification',
      'Academic project only',
    ],
    tech: ['Python', 'Machine Learning', 'NLP', 'SVM', 'OCR', 'Speech-to-Text'],
    githubUrl: 'https://github.com/raju8143/Online-depression-detection-website.git',
    liveUrl: '#',
    image: '/projects/depression.png',
    accent: 'from-amber-500/20 to-orange-500/20',
  },
  {
    id: 'sign-language',
    title: 'Audio to Sign Language Translator',
    category: 'Python',
    description: 'An accessibility-focused application that converts spoken audio into text and maps processed words to corresponding sign-language visuals.',
    features: [
      'Speech-to-text conversion',
      'Text preprocessing',
      'Sign-language mapping',
      'Animated output',
      'Accessible interface',
    ],
    tech: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'NLP'],
    githubUrl: 'https://github.com/raju8143/Audio-to-sign-language-translator-python.git',
    liveUrl: '#',
    image: '/projects/signlanguage.png',
    accent: 'from-pink-500/20 to-rose-500/20',
  }
  
];

export const projectFilters = ['All', 'React', 'Python', 'Mobile', 'Machine Learning'];

export const education = [
  {
    title: 'B.Tech in Computer Science and Engineering',
    institution: 'Annamacharya Institute of Technology and Sciences',
    extra: 'Affiliated with JNTUH',
    period: 'Graduated: 2025',
  },
  {
    title: 'Intermediate',
    institution: 'Pragathi Junior College',
    extra: 'Nalgonda, Telangana',
    period: 'Completed',
  },
  {
    title: 'Secondary School',
    institution: 'Ramgiri High School',
    extra: 'Nalgonda, Telangana',
    period: 'Completed',
  },
];

export const certifications = [
  {
    name: 'Python Certification',
    organization: 'Simplilearn',
    date: 'Completion date: Available in portfolio data',
    url: '#',
  },
  {
    name: 'Great Learning Certification',
    organization: 'Great Learning',
    date: 'Completion date: Available in portfolio data',
    url: '#',
  },
  {
    name: 'Internship Certificate',
    organization: 'Eevolution Technology',
    date: 'Completion date: Available in portfolio data',
    url: '#',
  },
  {
    name: 'BDA Certificate',
    organization: 'Edzeeta',
    date: 'Completion date: Available in portfolio data',
    url: '#',
  },
];

export const practicalExperience = [
  'Developed responsive user interfaces using React.js',
  'Built reusable components and navigation systems',
  'Integrated REST APIs and handled asynchronous data',
  'Worked with MySQL queries and database-driven features',
  'Developed mobile interfaces with React Native',
  'Used Git and GitHub for version control',
  'Tested and debugged web applications for smoother user experiences',
  'Deployed projects using Vercel',
  'Collaborated on academic team projects with clear communication',
];

export const contactDetails = {
  name: 'Ganji Raju',
  location: 'Hyderabad, Telangana, India',
  email: 'rajunetha2004@gmail.com',
  linkedin: 'https://www.linkedin.com/in/raju-python-developer',
  github: 'https://github.com/raju8143',
};
