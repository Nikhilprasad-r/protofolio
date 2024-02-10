import React from 'react'
import styles from './tiles.module.css'
import Picture from './Picture'
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const Tiles = () => {
  return (
    <div className={styles.component}>
<a href='https://nikhilprasad.info/' alt="Home"> <span className={styles.wave}>Hi!</span> I am Nikhil Prasad</a>
    <Picture/>
    
    <h1>Full Stack web Developer</h1>
    <p>MERN stack</p>
   <div className={styles.iconSocial}> 
    <a href="https://www.linkedin.com/in/nikhilprasad-r/" className={styles.styleIcons}target='_blank'><FaLinkedin/></a>
    <a href='https://github.com/Nikhilprasad-r' className={styles.styleIcons} target='_blank'><FaGithub /></a> 
    <a href='https://leetcode.com/nikhilprasad_r/' className={styles.styleIcons} target='_blank'><SiLeetcode /></a> 
    </div>
    </div>
  )
}

export default Tiles