import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import "./app.scss"


function App() {
  return (
    <div className="app"> 
      <Topbar />
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
