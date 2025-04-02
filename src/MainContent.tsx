import { Routes, Route } from 'react-router-dom';
import BusinessPlan from './BusinessPlan';
import About from './About';
import ProjectIdea from './ProjectIdea';
import Home from './Home';


function MainContent() {
   return (
      <main className="h-37/40 w-full bg-[#FFFCF1] flex">
         <Routes>
            <Route path='/' element={Home()}/>
            <Route path='/businessplan' element={BusinessPlan()}/>
            <Route path='/projectidea' element={ProjectIdea()}/>
            <Route path='/about' element={About()}/>
         </Routes>
      </main>
   );
}

export default MainContent;