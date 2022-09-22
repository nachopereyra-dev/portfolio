import React, { useRef } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header';
import Contenido from './Contenido'

function App() {

    const homeRef = useRef()

    function homeRefClick() {
      homeRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  
    const projectRef = useRef()
  
    function projectRefClick() {
      projectRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    
    const aboutmeRef = useRef()
  
    function aboutmeRefClick() {
      aboutmeRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const contactRef = useRef()
  
    function contactRefClick() {
      contactRef.current.scrollIntoView({ behavior: 'smooth' })
    }

  return (
    <BrowserRouter>
      <Header homeRefClick={homeRefClick} projectRefClick={projectRefClick} aboutmeRefClick={aboutmeRefClick} contactRefClick={contactRefClick}/>
      <Contenido homeRef={homeRef} projectRefClick={projectRefClick} aboutmeRefClick={aboutmeRefClick} projectRef={projectRef}  aboutmeRef={aboutmeRef} contactRef={contactRef} />
    </BrowserRouter>
  );
}

export default App;
