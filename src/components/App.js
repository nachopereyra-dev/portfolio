import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header';
import Contenido from './Contenido'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Contenido />
    </BrowserRouter>
  );
}

export default App;
