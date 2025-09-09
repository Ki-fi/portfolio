
import './App.css'
import {Route, Routes} from "react-router-dom";

function App() {

  return (
      <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/projects" element={<div></div>} />
          <Route path="/contact" element={<div></div>} />
          <Route path="*" element={<div></div>} />
      </Routes>
  )
}

export default App
