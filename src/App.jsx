import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/Home/Home'
import Education from './pages/Education/Education'
import Contact from './pages/Contact/Contact'
import Project from './pages/Projects/Projects'

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default App
