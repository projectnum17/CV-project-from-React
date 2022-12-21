import React from 'react'
import './services.css'
import { BiCheckDouble } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Skills and Languages</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Hard Skills</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>Fully adaptive responsive layout for all types of devices.</p>
            </li>

            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>Knowledge and use of semantic tags</p>
            </li>

            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>Knowledge of basic SEO</p>
            </li>

            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>Cross-browser layout for all types of browsers from Google Chrome to Safari</p>
            </li>

            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>Use of convenient and modern methods and methods such as: Flexbox and Grid System</p>
            </li>
          </ul>
        </article>
        {/* end */}

        <article className="service">
          <div className="service__head">
            <h3>Soft Skills</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>Good Communication</p>
            </li>

            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>Teamwork</p>
            </li>

            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>Creativity and Willingness to Learn</p>
            </li>


            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>Problem-solving </p>
            </li>

            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>Developed Skills of Time - management</p>
            </li>
          </ul>
        </article>
        {/* end */}

        <article className="service">
          <div className="service__head">
            <h3>Languages</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>English: B1-B2</p>
            </li>

            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>Ukrainian: Native</p>
            </li>

            <li>
              <BiCheckDouble className="service__list-icon" />
              <p>Russian: Native</p>
            </li>
          </ul>
        </article>
        {/* end */}

      </div>
    </section>
  )
}

export default Services