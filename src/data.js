import PokeRandom from './images/PokeRandom.png'
import RickAndMorty from './images/rick-and-morty.png'
import ToDoList from './images/todolist.png'

import ReactLogo from './images/react.svg'
import HTML from './images/html5.svg'
import CSS from './images/css3.svg'
import JS from './images/javascript.svg'
import node from './images/nodejs.svg'
import express from './images/express.svg'
import postgreSQL from './images/postgresql.svg'
import sequelize from './images/Sequelize.svg'
import mongodb from './images/mongodb.png'

export const techs = [
  {
    name: 'HTML',
    img: HTML,
  },
  {
    name: 'CSS',
    img: CSS,
  },
  {
    name: 'JavaScript',
    img: JS,
  },
  {
    name: 'React',
    img: ReactLogo,
  },
  {
    name: 'NodeJS',
    img: node,
  },
  {
    name: 'Express',
    img: express,
  },
  {
    name: 'PostgreSQL',
    img: postgreSQL,
  },
  {
    name: 'Sequelize',
    img: sequelize,
  },
  {
    name: 'MongoDB',
    img: mongodb,
  }
]

export const projects = [
  {
    title: 'Rick and Morty API',
    description: 'Una aplicación donde se puede ver la información de los personajes de Rick and Morty, incluye una barra de busqueda para buscar determinados personajes',
    img: RickAndMorty,
    github: 'https://github.com/lnahuelfb/rick-and-morty',
    link: 'https://rick-and-morty-app-lnahuelfb.vercel.app/',
    technologies: 'Hecho con: HTML, CSS, React y React Context'
  },
  {
    title: 'ToDo List',
    description: 'Una aplicación donde se puede crear, editar y eliminar tareas',
    img: ToDoList,
    github: 'https://github.com/lnahuelfb/toDoList-fullstack-backend',
    link: 'https://to-do-list-nahuelfb.vercel.app/',
    technologies: 'Hecho con: HTML, CSS, React, NodeJS, Express'
  },
  {
    title: 'PokeRandom-React',
    description: 'Una aplicación donde al tocar un boton te devuelve un pokemon al azar',
    img: PokeRandom,
    github: 'https://github.com/lnahuelfb/PokeRandom-React',
    link: 'https://poke-random-react.vercel.app/',
    technologies: 'Hecho con: HTML, Styled Components, JS y React'
  },
  {
    title: 'PokeRandom-JS',
    description: 'Es la misma app que PokeRandom pero con Vanila JS',
    img: PokeRandom,
    github: 'https://github.com/lnahuelfb/PokeRandom-js-vanila',
    link: 'https://pokerandom-js.netlify.app/',
    technologies: 'Hecho con: HTML, CSS y JavaScript'
  },
]