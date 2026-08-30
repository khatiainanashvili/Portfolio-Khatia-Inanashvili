import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import DigitalIllustrations from './components/pages/DigitalIllustrations'
import Animations from './components/pages/Animations'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/illustrations" element={<DigitalIllustrations />} />
        <Route path="/animations" element={<Animations />} />
      </Routes>
    </BrowserRouter>
  )
}
