
import About from './component/About';
import Contact from './component/Contact';
import Education from './component/Education';
import Home from './component/Home';
import Services from './component/Services';
import Work from './component/Work';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home value="0"/>}/>
        <Route path='/about' element={<About value="1"/>}/>
        <Route path='/services' element={<Services value="0"/>}/>
        <Route path='/education' element={<Education value="1"/>}/>
        <Route path='/works' element={<Work value="0"/>}/>
        <Route path='/contact' element={<Contact value="1"/>}/>
      </Routes>
    </div>
  );
}

export default App;
