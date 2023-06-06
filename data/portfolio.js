const about = {
  // all the properties are optional - can be left empty or deleted
  // each element in the description array is a paragraph
  name: 'Jakir Ashraf',
  role: 'Full Stack Developer',
  company: 'School of Code',
  description: [
    `I am a driven software developer. I enjoy tackling complex problems with elegant solutions and aspire to create impactful products. Let's connect and build something great! `,
  ],
  resume: 'http://jakirashraf.me',
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
  ,
  // {
  //   thumbnail: 'images/placeholder-image.jpeg',
  //   name: 'Final Project',
  //   description: [
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   ],
  //   stack: [
  //     'JavaScript',
  //     'TypeScript',
  //     'React',
  //     'Node',
  //     'Express',
  //     'PostgreSQL',
  //   ],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
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
