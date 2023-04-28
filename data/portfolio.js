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
    thumbnail: 'images/weather.jpeg',
    name: 'Weather App',
    description: [
      `Individual project. Created a weather app using only JavaScript, able to find the users current location and being able to search any location. Used eventListeners to read user input. Fetched API data from OpenWeatherMap. Deployed webApp on Github pages. `,
    ],
    stack: ['JavaScript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    thumbnail: 'images/memory-master.png',
    name: 'Memory Master App',
    description: [
      `Worked in an agile team to create an app to help students study and practice spaced-repetition. Created a Low and
High-fidelity wire-frame. Managed our tasks using Trello Kanban board. Designed an MVP for our product. Collaborated
in a team of 4 to build the web app in 5-days. Technologies used includes Git, Javascript, ReactJS MaterialUI for design.
Presented our application to a panel of judges.`,
    ],
    stack: ['JavaScript', 'React'],
    sourceCode: 'https://github.com/Jakir9/Memory-Master',
    livePreview: 'https://agileavengers-memory-master.netlify.app',
  },
  {
    thumbnail: 'images/pokemon.png',
    name: 'Pokemon App',
    description: [
      'This app was created in a group hackathon to help users look up stats about their favourite pokemon characters. The app is built with React and uses the PokeAPI to fetch data. Built this web app in a Hackathon. Designed the web app using CSS.',
    ],
    stack: ['JavaScript', 'React'],
    sourceCode: 'https://github.com/Jakir9/Pokemon-PokeDex',
    livePreview: 'https://jakir9-pokemon-pokedex-app.netlify.app',
  },
  // {
  //   thumbnail: 'images/placeholder-image.jpeg',
  //   name: 'Final Project',
  //   description: ['add when completed'],
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
  email: 'hello@jakirashraf.me',
}

export { about, projects, skills, contact }
