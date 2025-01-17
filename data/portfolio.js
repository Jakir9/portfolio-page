const about = {
  // all the properties are optional - can be left empty or deleted
  // each element in the description array is a paragraph
  name: 'Jakir Ashraf',
  role: 'Full Stack Developer',
  //company: 'School of Code',
  description: [
    ` I enjoy tackling complex problems with elegant solutions and aspire to create impactful products. 
     Currently learning NodeJS and TypeScript `,
  ],
  resume: `https://www.linkedin.com/in/jakirashraf/details/featured/`,
  social: {
    linkedin: 'https://linkedin.com/in/jakirashraf',
    github: 'https://github.com/Jakir9',
  },
  greetingEmoji: '👋🏽',
}

const projects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  // each element in the description array is a paragraph
  {
    thumbnail: '/images/weatherApp.png',
    name: 'Weather App',
    description: [
      'Built a weather app using an open-source api. Developed the app using vanilla JavaScript, HTML and CSS. The app is fully responsive and works on all devices.',
    ],
    stack: ['JavaScript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/Jakir9/weatherApp',
    livePreview: 'https://jakir9.github.io/weatherApp/main.html',
  },
  {
    thumbnail: '/images/memoryMaster.png',
    name: 'Memory Master',
    description: [
      'Created Memory Master, an application designed to help students improve their learning and retention through the practice of spaced-repetition.',
    ],
    stack: ['React'],
    sourceCode: 'https://github.com/Jakir9/Memory-Master',
    livePreview: 'https://agileavengers-memory-master.netlify.app',
  },
  {
    thumbnail: '/images/pokemonApp.png',
    name: 'Pokemon App',
    description: [
      'Pokemon Database library built using React. The app uses an open-source api to fetch data. The app is fully responsive and works on all devices.',
    ],
    stack: ['React', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/Jakir9/Pokemon-PokeDex',
    livePreview: 'https://jakir9-pokemon-pokedex-app.netlify.app',
  },
  
  {
    thumbnail: 'images/memorycompanion.jpeg',
    name: 'Memory Companion',
    description: [
      `Many individuals suffering from dementia and other conditions struggle to retain memories, follow daily activities, and maintain independence due to memory loss. This user-friendly application provides a centralised platform for storing memories, visual and audio prompts, and daily activity reminders, tailored to the individual's objectives. This application supports multiple users, facilitating social care and improving the overall quality of life for those affected by dementia and other conditions.`,
    ],
    stack: [
      'JavaScript',
      'React',
      'Node',
      'PostgreSQL',
    ],
    sourceCode: 'https://github.com/Jakir9/ByteSquad-frontend-MemoryCompanion',
    livePreview: 'https://byte-squad-frontend-memory-companion.vercel.app/',
  },
  {
    thumbnail: '/images/messageApp.png',
    name: 'Messaging App',
    description: [
      'Client-Server messaging App created in NodeJS. The server can handle multiple clients at once.',
    ],
    stack: ['NodeJS'],
    sourceCode: 'https://github.com/Jakir9/RealTimeMessagingApp',
    // livePreview: 'https://github.com',
  },

  // {
  //   thumbnail: 'images/placeholder-image.jpeg',
  //   name: 'Rock Paper Scissors',
  //   description: ['Rock Paper Scissors game created using javascript'],
  //   stack: ['Javascript'],
  //   sourceCode: 'https://github.com',
  //   // livePreview: 'https://github.com',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Node',
  'Express',
  'PostgreSQL',
  'Python',
  'Java',
  'Git',
  'Jest',
  'Playwright',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jakir@jakirashraf.me',
}

export { about, projects, skills, contact }
