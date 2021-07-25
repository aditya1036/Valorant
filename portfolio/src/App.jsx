import Contact from "./components/contact/contact";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Testimonial from "./components/testimonials/testimonial";
import Topbar from "./components/topbar/topbar";
import Work from "./components/work/work";
import './app.scss'
import { useState , useEffect } from "react";
import Menu from "./components/menu/Menu";

function App() {


  const [menuOpen , setMenu] = useState(false)
  return (
   <div className="app">
    <Topbar menuOpen={menuOpen} setMenu={setMenu} />
    <Menu menuOpen={menuOpen} setMenu={setMenu}/>
        <div className="sections">
          <Intro />
          <Portfolio />
          <Work  />
          <Testimonial />
          <Contact />

        </div>
   </div>
  );
}

export default App;
