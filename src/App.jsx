import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Explore from './pages/Explore';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="galeria" element={<Gallery />} />
        <Route path="explorar" element={<Explore />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="fotografo" element={<About />} />
        <Route path="coleccion" element={<Gallery />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  )
}

export default App
