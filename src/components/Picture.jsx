import React from 'react'
import photo from '/src/assets/Nikhil.jpg'
import styles from './picture.module.css'

const Picture = () => {
  return (
    <img src={photo} className={styles.dp}></img>
  )
}

export default Picture