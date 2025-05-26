import { ReactNode, useEffect, useState } from 'react';
import { ParkContext } from './ParkContext';
import { Park } from '../types';
import { apiUrl } from '../config';

export const ParkProvider = ({ children }: { children: ReactNode }) => {
   const [chosenPark, setChosenPark] = useState<Park | null>(null);
   const [allParks, setAllParks] = useState<Park[]>([]);

   // Hämtar alla parkloggor vid första rendering
   useEffect(() => {
      const getAllParks = async() => {
         const res = await fetch(`${apiUrl}/api/v1/parks/`);
         const fetchedParks = await res.json();
         setAllParks(fetchedParks);

         const savedParkId = localStorage.getItem('chosenPark');
         if (savedParkId) {
            const savedPark = fetchedParks.find((park: Park) => park.id === savedParkId);
            if (savedPark) {
               setChosenPark(savedPark);
            }
         }
      };
      getAllParks();
   }, []);

   return (
      <ParkContext.Provider value={{ chosenPark, setChosenPark, allParks }}>
         {children}
      </ParkContext.Provider>
   );
};