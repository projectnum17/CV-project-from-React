import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'GoSurf Landing',
    github: 'https://github.com/projectnum17/GoSurfLand',
    demo: 'https://projectnum17.github.io/GoSurfLand/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Art Landing',
    github: 'https://github.com/projectnum17/The-Art-of-Arita-',
    demo: 'https://projectnum17.github.io/The-Art-of-Arita-/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'MyBand Landing',
    github: 'https://github.com/projectnum17/red_hot_landing',
    demo: 'https://projectnum17.github.io/red_hot_landing/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Earth Landing',
    github: 'https://github.com/projectnum17/motherEarth',
    demo: 'https://projectnum17.github.io/motherEarth/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Virtual Courses Landing',
    github: 'https://github.com/projectnum17/Robo-School',
    demo: 'https://projectnum17.github.io/Robo-School/'
  },
  {
    id: 6,
    image: IMG7,
    title: 'GPT-3',
    github: 'https://github.com/projectnum17/GPT-3',
    demo: 'https://projectnum17.github.io/GPT-3/'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='___blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='___blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio