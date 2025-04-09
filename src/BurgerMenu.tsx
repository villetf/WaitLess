import { useState } from 'react';
import { Link } from 'react-router-dom';

function BurgerMenu() {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => setIsOpen(!isOpen);
   const closeMenu = () => setIsOpen(false);


   return (
      <>
         <i className="fa-solid fa-bars text-2xl mr-10 cursor-pointer" onClick={toggleMenu}></i>

         {isOpen && (
            <div onClick={closeMenu} className='fixed inset-0 bg-black opacity-50 z-40'></div>
         )}

         <div className={`flex flex-col items-center fixed top-0 right-0 h-full w-100 bg-[#8DC689] z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='flex w-full'><div className='mt-5 ml-7 cursor-pointer' onClick={closeMenu}>X</div></div>
            <div className='mt-20'>
               <Link to='/' onClick={closeMenu}><h1 className='text-3xl'>WaitLess</h1></Link>
            </div>
            <nav className="flex flex-col items-end mt-10 w-1/2 space-y-3">
               <Link to='/generateDate' onClick={closeMenu}><h6>Generera ett datum</h6></Link>
               <Link to='/stats' onClick={closeMenu}><h6>Statistik för nördar</h6></Link>

               <Link to='/about' onClick={closeMenu}><h6>Om WaitLess</h6></Link>
               <Link to='/contact' onClick={closeMenu}><h6>Kontakt</h6></Link>
            </nav>
         </div>
      </>

   );
}

export default BurgerMenu;