
import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Projects from "./pages/projects/Projects.jsx";
import Petnet from "./pages/petnet/Petnet.jsx";

function App() {

  return (
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<div></div>} />
          <Route path="/petnet" element={<Petnet/>} />
          <Route path="*" element={<div></div>} />
      </Routes>
  )
}

export default App
