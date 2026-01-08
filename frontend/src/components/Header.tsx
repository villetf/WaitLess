import {
   Link,
} from 'react-router-dom';
import ParkMenu from './ParkMenu';


function Header() {
   return (
      <header className="w-full bg-[#8DC689] flex font-bold">
         <div className="h-15 lg:h-23 w-full grid grid-cols-[1fr_auto_1fr] items-center">
            <div className='ml-5 lg:ml-0 justify-self-start lg:justify-self-center lg:order-2'>
               <Link to="/">
                  <img src="/waitless.svg" alt="Logotyp för WaitLess" className='h-12 lg:h-20' />
               </Link>
            </div>
            <div className='justify-self-center lg:justify-self-end lg:order-3'></div>
            <div className='justify-self-end lg:justify-self-start lg:order-1 mr-5 lg:mr-0'>
               <div>
                  <ParkMenu />
               </div>
            </div>
         </div>

      </header>
   );
}

export default Header;