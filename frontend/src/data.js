import PokeRandom from 'images/PokeRandom.png'
import RickAndMorty from 'images/rick-and-morty.png'
import ToDoList from 'images/todolist.png'
import Variocolorida from 'images/variocolorida.png'
import Weather from 'images/sun.svg'

const techs = [
  {
    name: 'HTML',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png?20170517184425',
  },
  {
    name: 'CSS',
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
  },
  {
    name: 'JavaScript',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902',
  },
  {
    name: 'TypeScript',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png',
  },
  {
    name: 'React',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207',
  },
  {
    name: 'Next.JS',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/640px-Nextjs-logo.svg.png'
  },
  {
    name: 'NodeJS',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/640px-Node.js_logo_2015.svg.png',
  },
  {
    name: 'Express',
    img: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg',
  },
  {
    name: 'PostgreSQL',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png',
  },
  {
    name: 'Sequelize',
    img: 'https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png',
  },
  {
    name: 'MongoDB',
    img: 'https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress',
  },
  {
    name: 'Vue 3 (Aprendiendo)',
    img: 'https://blog.vuejs.org/logo.svg'
  },
  {
    name: 'Nuxt (Aprendiendo)',
    img: 'https://nuxtjs.org/design-kit/colored-logo.svg'
  }
]

const projects = [
  {
    title: 'Variocolorida',
    description: 'Proyecto freelance para una diseñadora grafica. En este se verán sus trabajos y podrán contactarla mediante un formulario.',
    img: Variocolorida,
    link: 'https://variocolorida.vercel.app',
    github: 'https://github.com/lnahuelfb/variocolorida',
    technologies: ['HTML', 'CSS', 'React', 'NextJS', 'MongoDB']
  },
  {
    title: 'Weather App (En desarrollo)',
    description: 'Una aplicación web que permite ver el clima de una ciudad',
    github: 'https://github.com/lnahuelfb/weather-app',
    img: Weather,
    technologies: ['HTML', 'CSS', 'TypeScript', 'React', 'React Context', 'Node + TypeScript', 'Express'],
  },
  {
    title: 'Rick and Morty API',
    description: 'Una aplicación donde se puede ver la información de los personajes de Rick and Morty, incluye una barra de busqueda para buscar determinados personajes',
    img: RickAndMorty,
    github: 'https://github.com/lnahuelfb/rick-and-morty',
    link: 'https://rick-and-morty-app-lnahuelfb.vercel.app/',
    technologies: ['HTML', 'CSS', 'React', 'React Context']
  },
  {
    title: 'ToDo List',
    description: 'Una aplicación donde se puede crear, editar y eliminar tareas',
    img: ToDoList,
    github: 'https://github.com/lnahuelfb/toDoList-fullstack-backend',
    link: 'https://to-do-list-nahuelfb.vercel.app/',
    technologies: ['HTML', 'CSS', 'React', 'NodeJS', 'Express']
  },
  {
    title: 'PokeRandom-React',
    description: 'Una aplicación donde al tocar un boton te devuelve un pokemon al azar',
    img: PokeRandom,
    github: 'https://github.com/lnahuelfb/PokeRandom-React',
    link: 'https://poke-random-react.vercel.app/',
    technologies: ['HTML', 'Styled Components', 'React']
  },
  {
    title: 'PokeRandom-JS',
    description: 'Es la misma app que PokeRandom pero con Vanila JS',
    img: PokeRandom,
    github: 'https://github.com/lnahuelfb/PokeRandom-js-vanila',
    link: 'https://pokerandom-js.netlify.app/',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
]

export { techs, projects }