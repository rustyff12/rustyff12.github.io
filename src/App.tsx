import { Routes, Route } from "react-router"
import Layout from "./components/layout/Layout"
import Home from "./components/pages/Home"
import Projects from "./components/pages/Projects"
import Settings from "./components/pages/Settings"
function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        
        <Route index element={<Home />} /> 
        <Route path="projects" element={<Projects />} /> 
        <Route path="settings" element={<Settings />} /> 
      </Route>
    </Routes>
  )
}

export default App
