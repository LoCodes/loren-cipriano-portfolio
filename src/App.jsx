import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false) // created state 
  return (
    <div className="app"> 
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> 

      {/* sec  -intro -portfolio -work -testimonials  */}

      <div className="sections">
        blah blah 
        <Intro />
        <Portfolio />
        <Works /> 
        <Testimonials />
        <Contact /> 
      </div>
      
    </div>
  ) ;
}

export default App;
