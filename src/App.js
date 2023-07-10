
import About from './component/About';
import Contact from './component/Contact';
import Education from './component/Education';
import Footer from './component/Footer';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Services from './component/Services';
import Work from './component/Work';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/works' element={<Work/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
