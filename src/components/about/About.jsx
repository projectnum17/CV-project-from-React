import React from 'react'
import './about.css'
import Me from '../../assets/meabout.gif'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscRootFolderOpened } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={Me} alt="about Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscRootFolderOpened className='about__icon' />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>

          <p> <b>Hello again everyone!</b> So, you already know that my name is Egor. A little about myself: I'm 23 years old, I'm into music, I love creativity since childhood, I live in Odessa, Ukraine.
          </p>
          <p>
            <b>Why Front End?</b> Everything is elementary - I like it, the profession of the future, thanks to which I can provide for myself and fulfill my dream - travel.
          </p>
          <p>
            <b>Why should you choose me?</b> I approach each order with great responsibility and love, because I want to make a name for myself, eliminate plagiarism and negligence, fully study the project, the client and its target audience, work for quality, trying to make the order as quickly and unique as possible, taking into account all the changes and wishes.
          </p>
          <p>
            <b>By trusting me</b>, you will get the most out of your project, save your nerves and time.
            If you are interested in me, want to know something else or use my services, then below I will provide all my contacts.
          </p>

          <a href="#contact" className='btn btn-primary'>Let`s Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About