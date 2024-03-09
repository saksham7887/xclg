
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Aboutus, { Aboutus1, Aboutus2 } from './component/AboutUs';
import Contact from './component/Contact';

import { Computerlab, Library, WorkShop } from './component/Facilities';
import Gallery from './component/Gallery';
import { Chemical, Civil, Computer, Electrical, Mechanical } from './component/Department';

import Home from './component/Home';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>



          <Route>
            <Route path='/about' element={<Aboutus />}> </Route>
            <Route path='/About1' element={<Aboutus />}></Route>
            <Route path='/about2' element={<Aboutus2 />}></Route>
          </Route>



          <Route>
            <Route path='/Computer' element={<Computer />}></Route>
            <Route path='/Mechanical' element={<Mechanical />}></Route>
            <Route path='/Civil' element={<Civil />}></Route>
            <Route path='/Electrical' element={<Electrical />}></Route>
            <Route path='/Chemical' element={<Chemical />}></Route>
          </Route>


          <Route>
            <Route path='/Computerlab' element={<Computerlab />}></Route>
            <Route path='/Library' element={<Library />}></Route>
            <Route path='/WorkShop' element={<WorkShop/>}></Route>

          </Route>


          <Route path='/Gallery' element={<Gallery />}></Route>



          <Route path='/Contact' element={<Contact />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
