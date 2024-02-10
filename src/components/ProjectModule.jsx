import React from 'react'
import ProjectTile from './ProjectTile'
import styles from './ProjectModule.module.css'

const ProjectModule = () => {
  return (
    <div class={styles.mainBox}>
      <ProjectTile/>
      <ProjectTile/>
      <ProjectTile/>
      <ProjectTile/>
    </div>
  )
}

export default ProjectModule