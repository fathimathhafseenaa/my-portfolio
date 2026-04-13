// Portfolio Data
export const portfolioData = {
    // Personal Information
    personal: {
        name: "FATHIMATH HAFSEENA",
        title: "Full-Stack MERN/LARAVEL Developer",
        tagline: "Building Scalable Web Applications",
        email: "fathimathhafseenaa@gmail.com",
        phone: "+971 508856081 ",
        location: "Dubai, UAE",
        availability: "Available for hire",
        yearsOfExperience: 1,
        projectsCompleted: 15,
        happyClients: 10,
        // coffeeCups: 1000,
    },

    // Social Links
    social: {
        github: "https://github.com/fathimathhafseenaa",
        linkedin: "'https://www.linkedin.com/in/fathimath-hafseena/",
        // twitter: "https://twitter.com/yourusername",
        email: "mailto:fathimathhafseenaa@gmail.com",
    },

    // About
    about: {
        bio: "I'm a passionate Full Stack Developer with 1+ year of professional experience building scalable web applications using MERN Stack and Laravel. I specialize in developing RESTful APIs, implementing secure authentication systems, and optimizing backend performance for production-level applications." + "<br>" + "I have hands-on experience in MVC architecture, OOP principles, database optimization, and VPS deployment. I enjoy building clean, maintainable solutions and continuously improving performance and user experience.",
        highlights: [
            "1+ year professional experience",
            "3+ scalable web applications developed",
            "15+ RESTful APIs implemented",
            "30% performance improvement achieved",
            "VPS deployment & production management experience",
        ],
        funFacts: [

            "Production Deployment Specialist",
            "API & Backend Optimization Focused",
            "Continuous learner",
            "Problem Solver"
        ],
    },

    // Skills
    skills: {
        frontend: [
            { name: "React.js", proficiency: 88, icon: "⚛️" },
            { name: "JavaScript (ES6+)", proficiency: 90, icon: "🟨" },
            { name: "HTML5", proficiency: 92, icon: "🌐" },
            { name: "CSS3", proficiency: 88, icon: "🎨" },
            { name: "Redux", proficiency: 80, icon: "🔄" },
            { name: "Next.js", proficiency: 75, icon: "▲" },
            { name: "Tailwind CSS", proficiency: 85, icon: "💨" },
            { name: "Material-UI", proficiency: 80, icon: "🎭" },
        ],
        backend: [
            { name: "Node.js", proficiency: 85, icon: "🟢" },
            { name: "Express.js", proficiency: 85, icon: "🚂" },
            { name: "Laravel", proficiency: 85, icon: "🔌" },
            { name: "RESTful APIs", proficiency: 90, icon: "🔌" },
            { name: "JWT Authentication", proficiency: 85, icon: "📊" },
            { name: "Socket.io", proficiency: 80, icon: "🔌" },
        ],
        database: [
            { name: "MongoDB", proficiency: 85, icon: "🍃" },
            { name: "Mongoose", proficiency: 80, icon: "🦡" },
            { name: "MySQL", proficiency: 80, icon: "🐬" },
            // { name: "PostgreSQL", proficiency: 70, icon: "🐘" },
            // { name: "Redis", proficiency: 65, icon: "🔴" },
        ],
        devops: [
            { name: "VPS Deployment", proficiency: 85 },
            { name: "Apache / cPanel", proficiency: 85 },
            { name: "Vercel", proficiency: 85 },
            { name: "Netlify", proficiency: 85 }

        ],
        other: [
            { name: "Git", proficiency: 90 },
            { name: "GitHub", proficiency: 90 },
            { name: "Postman", proficiency: 85 },
            { name: "VS Code", proficiency: 90 }
        ],
    },

    // Projects
    // Projects
    projects: [
        {
            id: 1,
            title: "UK Granite Co",
            category: "Full-Stack (Laravel)",
            description: "A corporate website for a granite and stone company, showcasing premium products, services, and project portfolio with a clean and professional design.",
            longDescription: "Developed a dynamic corporate website for UK Granite Co using Laravel and MySQL following MVC architecture. The platform highlights granite collections, completed projects, and company services with a structured and responsive layout. Implemented secure contact forms, backend data management, reusable Blade components, and optimized database queries to improve performance and maintainability. Deployed and managed the application on a live VPS environment.",
            image: "/projects/uk.png",
            tags: ["Laravel", "MySQL", "Blade", "Bootstrap", "MVC", "VPS Deployment"],
            liveUrl: "http://ukgraniteco.com",
            // githubUrl: "",
            // featured: true,
            role: "Full Stack Developer",
        },
        {
            id: 2,
            title: "SL Logistics",
            category: "Full-Stack",
            description: "A responsive logistics company website designed to showcase transportation services, business operations, and customer-focused solutions with a clean and professional UI.",
            longDescription: "Developed the SL Logistics website using Laravel and PHP for the backend with a responsive frontend built using HTML, CSS, and JavaScript. Created structured service pages highlighting logistics, transportation, and supply chain solutions. Integrated MySQL database for efficient data handling and implemented contact and inquiry features for customer engagement. Focused on clean UI/UX, performance optimization, and deployed the project on a live server for seamless accessibility.",
            image: "/projects/sl.png",
            tags: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript", "Responsive Design", "Deployment"],
            liveUrl: "http://sllogistics.co.in/",
            githubUrl: "",
            // featured: true,
            role: "Full Stack Developer"
        },
        {
            id: 3,
            title: "Granite Udyog",
            category: "Full-Stack",
            description: "A responsive business website for Granite Udyog, designed to showcase granite products, manufacturing expertise, and company services with a clean and professional UI.",
            longDescription: "Developed the Granite Udyog website using Laravel and PHP for the backend and a responsive frontend with HTML, CSS, and JavaScript. Implemented dynamic product showcase pages, structured company information, and optimized UI for industrial branding. Integrated MySQL database for efficient data handling and built user-friendly contact and inquiry features. Ensured clean architecture, performance optimization, and deployed the project on a live server for production use.",
            image: "/projects/udyog.png",
            tags: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript", "Responsive Design", "Deployment"],
            liveUrl: "https://graniteudyog.com/",
            githubUrl: "",
            // featured: true,
            role: "Full Stack Developer"
        },
        {
            id: 4,
            title: "Perfect Tour Planners",
            category: "Full-Stack (Laravel)",
            description: "A dynamic travel and tourism website built to showcase tour packages, destinations, and customer inquiries with a structured and responsive design.",
            longDescription: "Developed a full-featured travel and tourism platform using Laravel and MySQL following MVC architecture. The website allows users to explore domestic and international tour packages with detailed itineraries and inquiry functionality. Implemented secure form handling, backend data management, and reusable Blade components for maintainable development. Optimized database queries and ensured responsive design across devices. Deployed and maintained the application on a live VPS environment.",
            image: "/projects/perfect.png",
            tags: ["Laravel", "MySQL", "Blade", "Bootstrap", "MVC", "VPS Deployment"],
            liveUrl: "https://perfecttourplanners.com/",
            githubUrl: "",
            // featured: true,
            role: "Full Stack Developer",
        },
        {
            id: 5,
            title: "HireHub App Backend",
            category: "Backend",
            description: "Backend system developed for the HireHub mobile application, handling user management, job listings, and secure API integrations.",
            longDescription: "Developed the backend for the HireHub mobile application using Laravel and PHP, focusing on scalable architecture and secure API development. Implemented RESTful APIs for user authentication, job postings, applications, and admin functionalities. Integrated MySQL database for efficient data management and ensured secure data handling and validation. Optimized performance for mobile app interactions and supported seamless communication between frontend and backend services.",
            image: "/projects/hirehub.png",
            tags: ["Laravel", "PHP", "MySQL", "REST API", "Authentication", "Backend Development"],
            liveUrl: "https://play.google.com/store/apps/details?id=com.astra.hirehub",
            githubUrl: "",
            // featured: true,
            role: "Backend Developer"
        },
        {
            id: 6,
            title: "Sthapathi",
            category: "Full-Stack",
            description: "A sleek architectural services website integrating design services with dynamic project showcases and client interactions.",
            longDescription: "Built a full-stack web application for Sthapathi featuring architectural service listings, project galleries, and dynamic content management. Developed the frontend using React.js for performant, responsive UI and integrated it with a Node.js and Express backend to handle data APIs, contact submissions, and service details. Designed database schemas in MongoDB for efficient project and service data storage. Ensured clean code architecture, optimized API performance, secure routing, and successful deployment on a VPS server for production use.",
            image: "/projects/sthapathi.png",
            tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "VPS Deployment"],
            liveUrl: "https://sthapathi.co.in/",
            githubUrl: "",
            // featured: true,
            role: "Full Stack Developer",
        },
        {
            id: 7,
            title: "ShopLoc",
            category: "Full-Stack (E-Commerce)",
            description: "A full-featured e-commerce platform for ShopLoc, showcasing products, cart functionality, secure checkout, and user account features with responsive UI.",
            longDescription: "Built a complete e-commerce web application for ShopLoc using React.js for the frontend and Node.js + Express.js for the backend. Designed and developed secure user authentication, cart management, dynamic product listing, order processing, and integrated RESTful APIs for seamless frontend-backend interaction. Implemented MongoDB for data storage, optimized database queries, and ensured responsive design across devices. Successfully deployed the application to a live production environment with performance optimizations and secure routing.",
            image: "/projects/shoploc.png",
            tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "RESTful APIs", "VPS Deployment"],
            liveUrl: "https://shoploc.in/",
            githubUrl: "",
            featured: true,
            role: "Full Stack Developer",
        },
        {
            id: 8,
            title: "Dwaraka Holidays",
            category: "Full-Stack (React + Node.js)",
            description: "A dynamic travel booking and tour management platform designed to showcase tour packages, enable online inquiries, and provide seamless user experience.",
            longDescription: "Developed a full-stack travel web application for Dwaraka Holidays using React.js for the frontend and Node.js + Express.js for the backend. Built key features including tour listings, booking inquiries, dynamic content rendering, and secure user interactions. Implemented RESTful APIs using Express, structured database schemas in MongoDB, and ensured clean code architecture. Focused on responsive UI design, optimized performance, and deployed the application on a live VPS environment with secure routing and production readiness.",
            image: "/projects/dwaraka.png",
            tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "RESTful APIs", "VPS Deployment"],
            liveUrl: "https://dwarakaholidays.in/",
            githubUrl: "",
            // featured: true,
            role: "Full Stack Developer",
        },
        {
            id: 9,
            title: "Tsi Care Home",
            category: "Full-Stack (React + Node.js)",
            description: "A professional care services website for TSI Care Home with service listings, contact forms, and a clean, responsive interface tailored for users seeking home care solutions.",
            longDescription: "Developed a full-stack web application for TSI Care Home using React.js on the frontend and Node.js with Express on the backend. Built service pages, implemented contact request forms, and structured RESTful API endpoints for seamless frontend-backend communication. Utilized MongoDB for data storage and ensured a responsive, accessible UI across devices. Focused on clean code architecture, performance optimizations, and deployed the application on a live VPS production environment.",
            image: "/projects/tsi.png",
            tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "RESTful APIs", "VPS Deployment"],
            liveUrl: "https://tsicarehome.com/",
            githubUrl: "",
            featured: false,
            role: "Full Stack Developer",
        },
        {
            id: 10,
            title: "SkinTone Beauty",
            category: "Full-Stack",
            description: "A modern beauty services platform with product showcases, service details, and dynamic content designed for a seamless user experience.",
            longDescription: "Developed the SkinTone Beauty web application using React.js for the frontend and Node.js with Express.js for the backend. Built dynamic product/service pages, integrated secure RESTful APIs, and implemented responsive layouts for optimal performance across devices. Utilized MongoDB for efficient data storage, ensured reliable contact forms, and focused on clean architecture and performance. Deployed the application on a live VPS with optimized routing and production readiness.",
            image: "/projects/skintone.png",
            tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "RESTful APIs", "VPS Deployment"],
            liveUrl: "https://skintone.beauty/",
            githubUrl: "",
            // featured: true,
            role: "Full Stack Developer"
        },
       

    ],

    // Experience
    experience: [
        {
            id: 1,
            company: "AstraZ Software Solution",
            position: "Full-Stack Developer",
            duration: "2025 - 2026",
            location: "On-site",
            description: "Developed and maintained scalable web applications using MERN Stack and Laravel for live production environments.",
            responsibilities: [
                "Built and deployed 6+ live web applications",
                "Designed and implemented 20+ RESTful APIs",
                "Optimized backend performance and database queries (30% improvement)",
                "Implemented JWT-based authentication & role-based access control",
                "Managed VPS deployments and resolved production-level issues",
                "Collaborated with UI/UX designers to deliver responsive, maintainable solutions",
            ],
            logo: "https://via.placeholder.com/100x100/667eea/ffffff?text=TC",
        },
        {
            id: 2,
            company: "Livewire Kasaragod",
            position: "Full-Stack Developer (Internship)",
            duration: "2024 - 2025",
            location: "kasaragod, Kerala",
            description: "Developed custom web solutions for various clients across different industries.",
            responsibilities: [
                "Building responsive front end designs",
                "API development and integration",
                "Database design and optimization",
                "Client communication and project management",
            ],
            logo: "https://via.placeholder.com/100x100/764ba2/ffffff?text=DA",
        },
        // {
        //     id: 3,
        //     company: "Freelancer",
        //     position: "Full-Stack Developer",
        //     duration: "2024 - present",
        //     location: "Remote",
        //     description: "Started my professional journey building MVPs and prototypes.",
        //     responsibilities: [
        //         "Frontend development with React",
        //         "RESTful API integration",
        //         "Bug fixing and testing",
        //         "Learning and implementing best practices",
        //     ],
        //     logo: "https://via.placeholder.com/100x100/00d4ff/ffffff?text=SC",
        // },
    ],

    // Education
    education: [
        {
            id: 1,
            degree: "Bachelor of Computer Application",
            institution: "Bangalore City University",
            duration: "2021 - 2024",
            description: "Graduated with honors. Focused on web technologies and software engineering.",
        },
        {
            id: 2,
            degree: "Full Stack Development (MERN)",
            institution: "Livewire Kasaragod",
            duration: "2024 - 2025",
            description: "Completed a comprehensive full-stack development program with a focus on MERN technologies.",
        },
    ],

    // Certifications
    certifications: [
        {
            id: 1,
            name: "MongoDB Certified Developer",
            issuer: "MongoDB University",
            date: "2022",
        },
        {
            id: 2,
            name: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "2021",
        },
        {
            id: 3,
            name: "React - The Complete Guide",
            issuer: "Udemy",
            date: "2020",
        },
    ],

    // Services
    services: [
        {
            id: 1,
            icon: "💻",
            title: "Full-Stack Web Development",
            description: "End-to-end web application development using MERN stack with modern best practices.",
        },
        {
            id: 2,
            icon: "⚛️",
            title: "Frontend Development",
            description: "Building responsive, interactive user interfaces with React, Next.js, and modern CSS.",
        },
        {
            id: 3,
            icon: "🔧",
            title: "Backend Development",
            description: "Scalable server-side applications with Node.js, Express, and database integration.",
        },
        {
            id: 4,
            icon: "🔌",
            title: "API Development & Integration",
            description: "RESTful and GraphQL API development, third-party API integration.",
        },
        {
            id: 5,
            icon: "🗄️",
            title: "Database Design & Optimization",
            description: "Efficient database schema design, query optimization, and data modeling.",
        },
        {
            id: 6,
            icon: "🛒",
            title: "E-commerce Solutions",
            description: "Complete e-commerce platforms with payment integration and inventory management.",
        },
        {
            id: 7,
            icon: "🎨",
            title: "Custom Web Applications",
            description: "Tailored web solutions to meet your specific business requirements.",
        },
        {
            id: 8,
            icon: "🔧",
            title: "Maintenance & Support",
            description: "Ongoing website maintenance, updates, and technical support.",
        },
    ],

    // Testimonials
    testimonials: [
        {
            id: 1,
            name: "John Doe",
            position: "CEO, Tech Startup",
            company: "TechCo",
            image: "https://via.placeholder.com/100x100/667eea/ffffff?text=JD",
            rating: 5,
            text: "Outstanding work! The application exceeded our expectations in terms of performance and user experience. Highly recommended!",
        },
        {
            id: 2,
            name: "Jane Smith",
            position: "Product Manager",
            company: "Digital Agency",
            image: "https://via.placeholder.com/100x100/764ba2/ffffff?text=JS",
            rating: 5,
            text: "Professional, reliable, and delivers high-quality code. Great communication throughout the project.",
        },
        {
            id: 3,
            name: "Mike Johnson",
            position: "CTO",
            company: "E-commerce Co",
            image: "https://via.placeholder.com/100x100/00d4ff/ffffff?text=MJ",
            rating: 5,
            text: "Excellent developer with deep knowledge of the MERN stack. Our platform is now faster and more scalable.",
        },
    ],

    // Blog Posts
    blogs: [
        {
            id: 1,
            title: "Building Scalable Applications with MERN Stack",
            excerpt: "Learn best practices for building scalable web applications using MongoDB, Express, React, and Node.js.",
            image: "https://via.placeholder.com/600x400/667eea/ffffff?text=MERN+Stack",
            category: "Tutorial",
            date: "2024-01-15",
            readTime: "8 min read",
            tags: ["MERN", "Web Development", "Best Practices"],
        },
        {
            id: 2,
            title: "React Performance Optimization Techniques",
            excerpt: "Discover advanced techniques to optimize your React applications for better performance.",
            image: "https://via.placeholder.com/600x400/764ba2/ffffff?text=React+Performance",
            category: "Tutorial",
            date: "2024-01-10",
            readTime: "6 min read",
            tags: ["React", "Performance", "Optimization"],
        },
        {
            id: 3,
            title: "Modern Authentication with JWT and OAuth",
            excerpt: "A comprehensive guide to implementing secure authentication in your web applications.",
            image: "https://via.placeholder.com/600x400/00d4ff/ffffff?text=Authentication",
            category: "Security",
            date: "2024-01-05",
            readTime: "10 min read",
            tags: ["Authentication", "Security", "JWT", "OAuth"],
        },
    ],
};
