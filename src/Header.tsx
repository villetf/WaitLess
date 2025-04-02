import {
   Link,
} from 'react-router-dom';


function Header() {
   return (
      <header className="w-full bg-[#8DC689] flex font-bold">
         <div className="w-50 flex justify-center items-center">
            <Link to="/">
               <h1 className='text-2xl'>WaitLess</h1>
            </Link>
         </div>
         <nav className="h-20 w-full flex justify-around items-center">
            <Link to='/businessplan'><div>Affärsplan</div></Link>
            <Link to='/projectidea'><div>Projektidé</div></Link>
            <Link to='/about'><div>Om oss</div></Link>
         </nav>
      </header>
   );
}

export default Header;