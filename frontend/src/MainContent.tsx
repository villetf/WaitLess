import { Routes, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';


function MainContent() {
   return (
      <main className="h-37/40 w-full bg-[#FFFCF1] flex">
         <Routes>
            <Route path='/' element={Home()}/>
            <Route path='/about' element={About()}/>
         </Routes>
      </main>
   );
}

export default MainContent;