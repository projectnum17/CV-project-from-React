import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://instagram.com/old.kentucky?igshid=NDRkN2NkYzU=" target="__blank"> <BsInstagram /> </a>
        <a href="https://github.com/projectnum17" target="__blank"> <FaGithub /> </a>
        <a href="https://t.me/oldkentucky" target="__blank"> <FaTelegramPlane /> </a>
    </div>
  )
}

export default HeaderSocials
