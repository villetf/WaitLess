import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import GenerateTime from '../pages/GenerateTime';


function MainContent() {
   return (
      <main className="h-37/40 w-full bg-[#FFFCF1] flex">
         <Routes>
            <Route path='/' element={Home()}/>
            <Route path='/about' element={About()}/>
            <Route path='/generate' element={GenerateTime()}/>
         </Routes>
      </main>
   );
}

export default MainContent;