import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaPinterest} from 'react-icons/fa'

const HeaderSosial = () => {
  return (
    <div className='header__sosial'>
      <a href="https://www.linkedin.com/in/januar-ramadhani-b21582219/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/JanuArt-cod" target="_blank"><FaGithub/></a>
      <a href="https://id.pinterest.com/januarramdhani5/" target="_blank"><FaPinterest/></a>
    </div>
  )
}

export default HeaderSosial