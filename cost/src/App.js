import {BrowserRouter as Router, Routes,Route,} from 'react-router-dom'
import Home from './components/pages/Home'
import Contato from './components/pages/Contato'
import Empresa from './components/pages/Empresa'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

import Container from './components/pages/Layout/Container'
import Navbar from './components/pages/Layout/Navbar'
import Footer from './components/pages/Layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />
    <Container customClass="min-height">
       <Routes>
         <Route  path="/" element={<Home />}></Route>
         <Route  path="/projects" element={<Projects />}></Route>
         <Route  path="/empresa" element={<Empresa/>}></Route>
         <Route path="/contato" element={<Contato/>}></Route>
         <Route path="/newproject" element={<NewProject/>}></Route>
         <Route path="/project/:id" element={<Project/>}></Route>
      </Routes>
    </Container>
      <Footer />
    </Router>

  )
}

export default App;
