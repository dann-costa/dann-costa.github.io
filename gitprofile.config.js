// gitprofile.config.js

const config = {
    github: {
        username: 'dann-costa', // Your GitHub org/user name. (Required)
        sortBy: 'updated', // stars | updated
        limit: 10, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
        },
    },
    social: {
        linkedin: 'daniel-costa-101635122',
        twitter: '',
        facebook: '',
        instagram: '',
        dribbble: '',
        behance: '',
        medium: '',
        dev: '',
        stackoverflow: '', // format: userid/username
        website: 'https://dann-costa.github.io',
        phone: '+5511999233538',
        email: 'daniel2017gma@gmail.com',
    },
    resume: {
        fileUrl: 'resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
    },
    skills: [
        'PHP',
        'Laravel',
        'JavaScript',
        'React.js',
        'Node.js',
        'Nest.js',
        'MySQL',
        'PostgreSQL',
        'Git',
        'Docker',
        'PHPUnit',
        'CSS',
        'Antd',
        'Tailwind',
    ],
    experiences: [
        {
            company: 'DC WebSolutions',
            position: 'CTO',
            from: 'Janeiro de 2016',
            to: 'Presente',
            companyLink: 'https://dcwebsolutions.com.br',
        },
        {
            company: 'Prefeitura Municipal de Guararema',
            position: 'Desenvolvedor',
            from: 'Julho 2015',
            to: 'Julho 2019',
            companyLink: 'https://guararema.sp.gov.br',
        },
    ],
    education: [
        {
            institution: 'Braz Cubas',
            degree: 'Graduação',
            from: '2015',
            to: '2018',
        },
    ],
    // Display blog posts from your medium or dev account. (Optional)
    blog: {
        source: 'dev', // medium | dev
        username: '', // to hide blog section, keep it empty
        limit: 3, // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    },
    // Track visitor interaction and behavior. https://www.hotjar.com
    hotjar: {
        id: '',
        snippetVersion: 6,
    },
    themeConfig: {
        defaultTheme: 'dark',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: true,

        // Should use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded defaultTheme
        respectPrefersColorScheme: false,

        // Hide the ring in Profile picture
        hideAvatarRing: false,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula',
            'cmyk',
            'autumn',
            'business',
            'acid',
            'lemonade',
            'night',
            'coffee',
            'winter',
            'procyon',
        ],

        // Custom theme
        customTheme: {
            primary: '#fc055b',
            secondary: '#219aaf',
            accent: '#e8d03a',
            neutral: '#2A2730',
            'base-100': '#E3E3ED',
            '--rounded-box': '3rem',
            '--rounded-btn': '3rem',
        },
    },
};

export default config;
