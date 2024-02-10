
import Header from './components/Header'
import Tiles from './components/Tiles'

import Feedback from './components/Feedback'

import './App.css'
import ProjectModule from './components/ProjectModule'
import Moreinfo from './components/Moreinfo'

function App() {
  

  return (
   <><div className="mainDiv">
   <Header/>
   <Tiles/>
   <Moreinfo/>
    <ProjectModule/>
   <Feedback/>
   </div>

   </>
  )
}

export default App
