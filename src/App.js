
import About from './component/About';
import Contact from './component/Contact';
import Education from './component/Education';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Services from './component/Services';
import Work from './component/Work';

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Work/>
      <Education/>
      <Contact/>
    </div>
  );
}

export default App;
