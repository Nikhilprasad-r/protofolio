import React from 'react'
import styles from './header.module.css'
import resume from '/src/assets/Nikhil-FSD.pdf'
import { IoMdDownload} from "react-icons/io";


function Header() {
  return (
    <div className={styles.total}>
      <div className={styles.obj1}>Logo</div>
      <div className={styles.downloadButton}><a className={styles.resumeview} href ={resume} attributes-list="true" target='_blank'> Resume</a>
      <a className={styles.resumeDownloads}href ={resume} attributes-list="true" download alt="Click to Download"> <IoMdDownload/> </a>
      </div>
      </div>
  )
}

export default Header