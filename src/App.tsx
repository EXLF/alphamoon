import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AirdropCenter from './pages/AirdropCenter'
import AlphaMoonTools from './pages/AlphaMoonTools'
import ProjectInsight from './pages/ProjectInsight'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/airdrop-center" element={<AirdropCenter />} />
          <Route path="/tools" element={<AlphaMoonTools />} />
          <Route path="/project-insight" element={<ProjectInsight />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App