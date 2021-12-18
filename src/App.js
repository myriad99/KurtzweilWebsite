 
import './App.css';
import Navbar from './components/navbar/Navbar';
import Splash from './components/splash/Splash';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Teaching from './components/teaching/Teaching';
import Education from './components/education/Education';
import Accomplishments from './components/accomplishments/Accomplishments';
import Contact from './components/contact/Contact';
import Gallery from './components/gallery/Gallery';

 
function App() {
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

  return (
    <div className="App">

        <Navbar  />
        <Splash />

        <div id="About">
            <About   />
        </div>
        
        <div id = 'Skills'>
            <Skills  />
        </div>
        
        <div id="Experience">
             <Teaching />
        </div>

        <Education />
        <Accomplishments />
        <Gallery />

        <div id="Contact">
            <Contact/>
        </div>
        
    </div>
  );
}

export default App;
