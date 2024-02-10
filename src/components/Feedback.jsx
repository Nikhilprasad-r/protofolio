import React from 'react'
import styles from './feedback.module.css'

const Feedback = () => {
  return (
  
  
 


     <form action="" className={styles.formStyler}>
      <label htmlFor='fullname'>Name</label>
      <input type='text' name='fullname' id='fullname' required/>
      <label htmlFor='phoneNumber'>Phone</label>
      <input type='text' name='phoneNumber' id='phoneNumber'></input>
      <label htmlFor='email'>email</label>
      <input type='email' name='email' id='email' required></input>
      <label htmlFor="comments">Comments</label>
      <input type='text' name='comments' id='comments' className={styles.comments}></input>
      <input type='submit'></input>
      </form>

  )
}

export default Feedback