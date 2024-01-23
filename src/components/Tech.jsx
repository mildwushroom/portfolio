import React from 'react';
import BallCanvas from './canvas/BallCanvas'
import { SectionWrapper } from '../hoc';
import css from '../assets/tech/css.png'
import docker from '../assets/tech/docker.png'
import figma from '../assets/tech/figma.png'
import git from '../assets/tech/git.png'
import html from '../assets/tech/html.png'
import javascript from '../assets/tech/javascript.png'
import mongo from '../assets/tech/mongodb.png'
import node from '../assets/tech/nodejs.png'
import postgres from '../assets/tech/postgres.png'
import react from '../assets/tech/reactjs.png'
import redux from '../assets/tech/redux.png'
import three from '../assets/tech/threejs.svg'
import typescript from '../assets/tech/typescript.png'
import python from '../assets/tech/python.png'

const technologies = [
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  }, 
  {
    name: 'Python',
    icon: python
  }, 
  {
    name: 'HTML 5',
    icon: html
  }, 
  {
    name: 'CSS 3',
    icon: css
  }, 
  {
    name: 'React JS',
    icon: react
  }, 
  {
    name: 'Redux Toolkit',
    icon: redux
  }, 
  {
    name: 'Node JS',
    icon: node
  },  
  {
    name: 'MongoDB',
    icon: mongo
  },  
  {
    name: 'PostgreSQL',
    icon: postgres
  },  
  {
    name: 'Three JS',
    icon: three
  },  
  {
    name: 'Git/GitHub',
    icon: git
  },  
  {
    name: 'Docker',
    icon: docker
  }, 
  {
    name: 'Figma',
    icon: figma
  }
];

const Tech = () => {
  return (
    <div className="ball-container">
      {technologies.map((technology, index) => (
        <div className="ball" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, 'tech');