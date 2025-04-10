import {
   Link,
} from 'react-router-dom';
import ParkMenu from './ParkMenu';


function Header() {
   return (
      <header className="w-full bg-[#8DC689] flex font-bold">
         <div className="h-20 w-full flex justify-between items-center">
            <ParkMenu />
            <Link to="/">
               <h1 className='text-2xl'>WaitLess</h1>
            </Link>
         </div>
         <nav className="h-20 w-full flex justify-around items-center">
            <Link to='/about'><div>Om oss</div></Link>
         </nav>
      </header>
   );
}

export default Header;