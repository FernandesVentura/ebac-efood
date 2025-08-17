import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Profiles from './pages/Profiles'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cardapio/:id" element={<Profiles />} />
  </Routes>
)

export default Rotas
