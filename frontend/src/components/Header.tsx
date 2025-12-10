import {
   Link,
} from 'react-router-dom';
import ParkMenu from './ParkMenu';


function Header() {
   return (
      <header className="w-full bg-[#8DC689] flex font-bold">
         <div className="h-15 lg:h-23 w-full grid grid-cols-[1fr_auto_1fr] items-center">
            <div className='justify-self-start'>
               <div className='lg:block hidden'>
                  <ParkMenu />
               </div>
            </div>
            <div className='justify-self-center'>
               <Link to="/">
                  <img src="/waitless.svg" alt="Logotyp för WaitLess" className='h-15 lg:h-20' />
               </Link>
            </div>
            <div className='justify-self-end'>
               {/* <BurgerMenu>
                  <div className='mt-20'>
                     <Link to='/'><h1 className='text-3xl'>WaitLess</h1></Link>
                  </div>
                  <nav className="flex flex-col items-center mt-10 w-1/2 space-y-3">
                     <Link to='/generate'><h6>Generera ett datum</h6></Link>
                     <Link to='/stats'><h6>Statistik för nördar</h6></Link>

                     <Link to='/about'><h6>Om WaitLess</h6></Link>
                     <Link to='/contact'><h6>Kontakt</h6></Link>
                  </nav>
               </BurgerMenu> */}
            </div>
         </div>

      </header>
   );
}

export default Header;