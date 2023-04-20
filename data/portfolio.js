const about = {
  // all the properties are optional - can be left empty or deleted
  // each element in the description array is a paragraph
  name: 'Jakir Ashraf',
  role: 'Software Developer Bootcamper',
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
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Weather App',
    description: [
      'Built a weather app using an open-source api. Developed the app using vanilla JavaScript, HTML and CSS. The app is fully responsive and works on all devices.',
    ],
    stack: ['JavaScript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Mid Bootcamp Project',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['JavaScript', 'React'],
    sourceCode: 'https://github.com/Jakir9/weatherApp',
    livePreview: 'http://jakirashraf.me/weatherApp/main.html',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Pokemon App',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['JavaScript', 'React'],
    sourceCode: 'https://github.com/Jakir9/pokemonApi',
    livePreview: 'http://jakirashraf.me/pokemonApi/index.html',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Final Project',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node',
      'Express',
      'PostgreSQL',
    ],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Messaging App',
    description: [
      'Client-Server messaging system created in Java. The server is multi-threaded and can handle multiple clients at once. The client can send and receive messages from the server. The server can also send messages to all clients at once. ',
    ],
    stack: ['Java'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },

  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Rock Paper Scissors',
    description: ['Rock Paper Scissors game created using javascript'],
    stack: ['Javascript'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
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
  'SQL',
  'PostgreSQL',
  'Python',
  'Java',
  'Git',
  'Jest',
  'Playwright',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jakirashraf98@googlemail.com',
}

export { about, projects, skills, contact }
