import React from 'react'
import style from './Moreinfo.module.css'
const Moreinfo = () => {
  return (
    <div className={style.moreInfo}>
      <h1>I am</h1>
      <p>Upcoming fullstack developer experimenting and learning a lot about web development and web based application developement.</p>
      <h1>Education</h1>
      <p>B.E Computer science Engineering-2022-6.1cgpa</p>
      <div className={style.split}>
      <ul className={style.skills}><h1>Skills</h1>
        <li>Java</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>React.js</li>
        <li>Express.js</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>SQL</li>
        <li>Dart</li>
        <li>Flutter</li>

      </ul>
      <ol className={style.languages}><h1>Languages</h1>
        <li>English</li>
        <li>Hindi</li>
        <li>Tamil</li>
        <li>Kannada</li>
        <li>Telugu</li>
      </ol>
    
      </div>
    
    
    
    
    
    </div>
  )
}

export default Moreinfo