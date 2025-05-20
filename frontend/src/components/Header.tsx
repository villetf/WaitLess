import {
   Link,
} from 'react-router-dom';
import BurgerMenu from './BurgerMenu';
import ParkMenu from './ParkMenu';


function Header(props: {chosenPark: string | null, setChosenPark: (park: string) => void}) {
   return (
      <header className="w-full bg-[#8DC689] flex font-bold">
         <div className="h-28 w-full grid grid-cols-[1fr_auto_1fr] items-center">
            <div className='justify-self-start'>
               <ParkMenu chosenPark={props.chosenPark} setChosenPark={props.setChosenPark}/>
            </div>
            <div className='justify-self-center'>
               <Link to="/">
                  <img src="/waitless.svg" alt="Logotyp för WaitLess" className='h-25' />
               </Link>
            </div>
            <div className='justify-self-end'>
               <BurgerMenu />
            </div>
         </div>

      </header>
   );
}

export default Header;