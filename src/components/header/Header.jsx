import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import { useState, useEffect } from 'react'

const Header = () => {
  const [ loopNum, setLoopNum ] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Yehor Chorniy" ]
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect (()=> {
    let ticker = setInterval (() => {
      tick();
    }, delta)

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta /2)
    }

    if (!isDeleting && updatedText === fullText)  {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }


  return (
    <header>
      <div className="container header__container">
        <h5>Hello I`m</h5>
        <h1>{text}</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src= { Me } alt="Me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header