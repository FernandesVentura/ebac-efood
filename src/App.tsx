import {  BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Rotas from './routes' 

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <div className="container">

      </div>
    </BrowserRouter>
  )
}

export default App
