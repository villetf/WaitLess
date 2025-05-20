import { useCallback, useEffect, useRef, useState } from 'react';
import { Park } from '../types';
import { apiUrl } from '../config';

function ParkMenu(props: {chosenPark: string | null, setChosenPark: (park: string) => void}) {
   const [logoLink, setLogoLink] = useState('');
   const [menuIsOpen, setMenuIsOpen] = useState(false);
   const parks = useRef<Park[]>([]);

   // Hämtar alla parkloggor vid första rendering
   useEffect(() => {
      const getAllLogos = async() => {
         const res = await fetch(`${apiUrl}/api/v1/parks/`);
         parks.current = await res.json();
         setParkLogo();
      };
      getAllLogos();
   });


   // Hitta den nuvarande parken i listan med alla, sätt loggan som den nuvarande
   const setParkLogo = useCallback(() => {
      const match = parks.current.find((set) => set.id === props.chosenPark);
      setLogoLink(match ? match.logoUrl : '');
   }, [props.chosenPark]);

   const setParkToLs = useCallback((park: string | null) => park && localStorage.setItem('chosenPark', park), []);

   // Vid byte av park, sätt ny logga
   useEffect(() => {
      setParkLogo();
      setParkToLs(props.chosenPark);
   }, [props.chosenPark, setParkLogo, setParkToLs]);


   return (
      <div className='ml-10 flex cursor-pointer items-center relative w-80' onClick={() => setMenuIsOpen(!menuIsOpen)}>

         {props.chosenPark ?
            <>
               <p>Vald nöjespark:</p>
               <i className="fa-solid fa-sort-down ml-5 text-lg flex items-center mb-2" />
               <img src={logoLink} alt={`Logga för ${props.chosenPark}`} className='h-7 ml-2'/>
            </> :
            <p>Välj en park</p>
         }

         {menuIsOpen && <div className='absolute w-40 left-35 top-13.5 bg-[#8DC689]'>
            {parks.current
               .filter(park => park.name !== props.chosenPark)
               .map(park => (
                  <div className='size-auto p-3 h-15 hover:bg-[#bbe6b8]' onClick={() => props.setChosenPark(park.id)}>
                     <img src={park.logoUrl} alt={park.name} className='pr-2 h-7'/>
                  </div>
               ))}
         </div>}
      </div>
   );
}

export default ParkMenu;