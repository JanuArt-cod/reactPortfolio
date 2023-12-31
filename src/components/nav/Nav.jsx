import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUserPin} from 'react-icons/bi'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import {MdOutlineDesignServices} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => { 
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><BiUserPin/></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><BsJournalBookmarkFill/></a>
      <a href='#service' onClick={()=> setActiveNav('#service')} className={activeNav==='#service' ? 'active' : ''}><MdOutlineDesignServices/></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><RiMessengerLine/></a>
    </nav>
  )
}

export default Nav