import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import GenerateTime from '../pages/GenerateTime';
import ErrorBoundary from './ErrorBoundary';


function MainContent() {
   return (
      <main className="w-full min-h-screen bg-[#FFFCF1] pb-40">
         <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/generate' element={
               <ErrorBoundary>
                  <GenerateTime />
               </ErrorBoundary>
            }/>
         </Routes>
      </main>
   );
}

export default MainContent;