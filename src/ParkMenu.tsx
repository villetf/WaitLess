import { useCallback, useEffect, useRef, useState } from 'react';
import { Park } from './types';

function ParkMenu() {
   const [chosenPark, setChosenPark] = useState(localStorage.getItem('chosenPark'));
   const [logoLink, setLogoLink] = useState('');
   const [menuIsOpen, setMenuIsOpen] = useState(false);
   const parks = useRef<Park[]>([]);

   // Hämtar alla parkloggor vid första rendering
   useEffect(() => {
      const getAllLogos = async() => {
         const res = await fetch('/parkLogos.json');
         parks.current = await res.json();
         setParkLogo();
      };
      getAllLogos();
   });


   // Hitta den nuvarande parken i listan med alla, sätt loggan som den nuvarande
   const setParkLogo = useCallback(() => {
      const match = parks.current.find((set) => set.name === chosenPark);
      setLogoLink(match ? match.logo : '');
   }, [chosenPark]);

   const setParkToLs = useCallback((park: string | null) => park && localStorage.setItem('chosenPark', park), []);

   // Vid byte av park, sätt ny logga
   useEffect(() => {
      setParkLogo();
      setParkToLs(chosenPark);
   }, [chosenPark, setParkLogo, setParkToLs]);


   return (
      <div className='ml-10 flex cursor-pointer items-center relative w-70' onClick={() => setMenuIsOpen(!menuIsOpen)}>

         {chosenPark ?
            <>
               <p>Vald park:</p>
               <i className="fa-solid fa-sort-down ml-5 text-lg flex items-center mb-2" />
               <img src={logoLink} alt={`Logga för ${chosenPark}`} className='h-7 ml-2'/>
            </> :
            <p>Välj en park</p>
         }

         {menuIsOpen && <div className='absolute w-40 left-27 top-13.5 bg-[#8DC689]'>
            {parks.current
               .filter(park => park.name !== chosenPark)
               .map(park => (
                  <div className='size-auto p-3 h-15 hover:bg-[#bbe6b8]' onClick={() => setChosenPark(park.name)}>
                     <img src={park.logo} alt={park.name} className='pr-2 h-7'/>
                  </div>
               ))}
         </div>}
      </div>
   );
}

export default ParkMenu;