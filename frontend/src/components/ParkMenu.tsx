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
      <div className='lg:ml-10 flex flex-col lg:flex-row cursor-pointer items-center relative lg:w-80' onClick={() => setMenuIsOpen(!menuIsOpen)}>

         {chosenPark ?
            <>
               <p className='hidden lg:block'>Vald nöjespark:</p>
               <div className='flex'>
                  <i className="fa-solid fa-sort-down lg:ml-5 text-sm lg:text-lg flex items-center mb-2" />
                  <img src={chosenPark.logoUrl} alt={`Logga för ${chosenPark.name}`} className='h-6 lg:h-7 ml-1 lg:ml-2'/>
               </div>
            </> :
            <div className='flex'>
               <p className='text-xs lg:text-base mt-0.5 lg:mt-0'>Välj en nöjespark</p>
               <i className="fa-solid fa-sort-down ml-2 lg:ml-5 text-sm lg:text-lg flex items-center lg:mb-2" />
            </div>
         }

         {menuIsOpen &&
            <div className='absolute lg:w-40 lg:left-35 top-9 lg:top-13.5 bg-[#8DC689] rounded-b-2xl'>
               {allParks
                  .filter(park => park !== chosenPark)
                  .map(park => (
                     <div className='size-auto p-2 lg:p-3 lg:h-15 hover:bg-[#bbe6b8]' onClick={() => setChosenPark(park)} key={park.id}>
                        <img src={park.logoUrl} alt={park.name} className='lg:mt-1 max-h-6 lg:h-7'/>
                     </div>
                  ))}
            </div>
         }
      </div>
   );
}

export default ParkMenu;