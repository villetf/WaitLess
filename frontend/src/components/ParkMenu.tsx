import { useCallback, useContext, useEffect, useState } from 'react';
import { Park } from '../types';
import { ParkContext } from './ParkContext';

function ParkMenu() {
   const parkContext = useContext(ParkContext);
   if (!parkContext) {
      throw new Error('ParkMenu must be used within a ParkProvider');
   }

   const { chosenPark, setChosenPark, allParks } = parkContext;
   const [menuIsOpen, setMenuIsOpen] = useState(false);



   const setParkToLs = useCallback((park: Park | null) => park && localStorage.setItem('chosenPark', park.id), []);

   // Vid byte av park, spara till localStorage
   useEffect(() => {
      setParkToLs(chosenPark);
   }, [chosenPark, setParkToLs]);


   return (
      <div className='ml-10 flex cursor-pointer items-center relative w-80' onClick={() => setMenuIsOpen(!menuIsOpen)}>

         {chosenPark ?
            <>
               <p>Vald nöjespark:</p>
               <i className="fa-solid fa-sort-down ml-5 text-lg flex items-center mb-2" />
               <img src={chosenPark.logoUrl} alt={`Logga för ${chosenPark.name}`} className='h-7 ml-2'/>
            </> :
            <>
               <p>Välj en nöjespark</p>
               <i className="fa-solid fa-sort-down ml-5 text-lg flex items-center mb-2" />
            </>
         }

         {menuIsOpen && <div className='absolute w-40 left-35 top-13.5 bg-[#8DC689]'>
            {allParks
               .filter(park => park !== chosenPark)
               .map(park => (
                  <div className='size-auto p-3 h-15 hover:bg-[#bbe6b8]' onClick={() => setChosenPark(park)} key={park.id}>
                     <img src={park.logoUrl} alt={park.name} className='pr-2 h-7'/>
                  </div>
               ))}
         </div>}
      </div>
   );
}

export default ParkMenu;