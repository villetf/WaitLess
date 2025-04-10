import {
   Link,
} from 'react-router-dom';
import BurgerMenu from './BurgerMenu';
import ParkMenu from './ParkMenu';


function Header() {
   return (
      <header className="w-full bg-[#8DC689] flex font-bold">
         <div className="h-20 w-full flex justify-between items-center">
            <ParkMenu />
            <Link to="/">
               <h1 className='text-2xl ml-10'>WaitLess</h1>
            </Link>
            <BurgerMenu />
         </div>

      </header>
   );
}

export default Header;