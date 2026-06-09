
import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Projects from "./pages/projects/Projects.jsx";
import Petnet from "./pages/petnet/Petnet.jsx";
import Services from "./pages/services/Services.jsx";
import Accessibility from "./pages/accessibility/Accessibility.jsx";
import Privacy from "./pages/privacy/Privacy.jsx";

function App() {

  return (
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<div>Coming soon</div>} />
          <Route path="/services" element={<Services />} />
          <Route path="/petnet" element={<Petnet/>} />
          <Route path="/toegankelijkheid" element={<Accessibility/>} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="*" element={<div></div>} />
      </Routes>
  )
}

export default App
