export const skills = [
    { name: 'React.js', level: 95, category: 'framework' },
    { name: 'JavaScript (ES6+)', level: 90, category: 'language' },
    { name: 'Redux', level: 85, category: 'framework' },
    { name: 'HTML', level: 95, category: 'language' },
    { name: 'CSS', level: 90, category: 'language' },
    { name: 'Node.js', level: 90, category: 'language' },
    { name: 'Express.js', level: 90, category: 'language' },
    { name: 'MongoDB', level: 90, category: 'language' },
    { name: 'Tailwind CSS', level: 85, category: 'framework' },
    { name: 'Material UI', level: 88, category: 'framework' },
    { name: 'Jest', level: 75, category: 'testing' },
  ];

export const experience = {
    company: 'Varchai',
    location: 'Bengaluru',
    role: 'Frontend Developer (Associate Consultant Trainee)',
    achievements: [
      'Streamlined SAP Business Partner creation by enhancing UI usability',
      'Refactored RPA-driven applications, improving processing time by 30%',
      'Implemented Redux-based state management, optimizing performance',
      'Built responsive components reducing application load time by 20%',
      'Integrated RESTful APIs, reducing data latency by 15%',
      'Followed secure coding practices for production deployments'
    ]
  };

export  const education = [
    {
      degree: 'Master of Computer Applications',
      institution: 'Jain (Deemed-to-be University)',
      location: 'Bengaluru',
      period: '2023 - 2025',
      gpa: '9.3'
    },
    {
      degree: 'MERN Bootcamp Training',
      institution: 'The 10xAcademy',
      period: '2022 - 2023'
    },
    {
      degree: 'Bachelor of Computer Application',
      institution: 'REVA University',
      location: 'Bengaluru',
      period: '2018 - 2023',
      gpa: '8.31'
    }
  ];

 export const certifications = [
    { name: 'McKinsey.org Forward Program', issuer: 'McKinsey & Company', date: 'December 2025' },
    { name: 'JavaScript (Basic)', issuer: 'HackerRank', date: 'August 2025' },
    { name: 'Building Monorepos on GitHub', issuer: 'LinkedIn', date: 'June 2025' }
  ];

 export const projects = [
    {
      title: "Media Connect",
      description: 'This is a kind of application where user can post the images with description.',
      technologies: ["React.js" , "Node.js", "MongoDB","Express.js"],
      github: 'https://github.com/RAKESH40-lgtm/mediaConnectReactjs.git',
      live: null,
      highlights: [
        'Images are convert to using filebase64 and stored in database.',
        'It can be view in PostView page.'
      ]
    },
    {
      title: 'Laundry Service',
      description: 'Another project description highlighting your skills and the technologies you used to build it.',
      technologies: ["React.js" , "Node.js", "MongoDB","Express.js"],
      github: 'https://github.com/RAKESH40-lgtm/Laundry-Services.git.',
      live: null,
      highlights: [
        'Full-stack application develop with team',
        'I built create order where user can create his/her order and can see summary of order.',
        'Send data to database through Backend(Node.js)'
      ]
    },
    {
      title: 'FoodOrdering (React Mastery Journey)',
      description: "Built a modern React application from scratch to deeply understand core concepts, architecture, and real-world best practices."
,
      technologies: ["React.js" , "HTML" , "Cascading Style Sheets (CSS)" , "JavaScript" ,"Redux.js" , "Jest" , "React testing library" ,"Tailwind CSS"],
      github: 'https://github.com/RAKESH40-lgtm/FoodOrdering',
      live: 'https://food-ordering-rho-plum.vercel.app/', // Set to null if no live demo available
      highlights: [
        'Engineered a scalable React application from scratch, strengthening core fundamentals and production-level architecture skills.',
        'Implemented dynamic routing and integrated live restaurant data (Swiggy/NamasteDev API), delivering a real-time, responsive user experience.',
        'Optimized global state management using Redux Toolkit for efficient and maintainable data flow.',
        'Improved application reliability by writing unit tests with Jest and React Testing Library.'
      ]
    }
  ];