import { ReactNode, useEffect, useState } from 'react';
import { ParkContext } from './ParkContext';
import { Park } from '../types';
import { fetchParks } from '../services/apiCalls';

export const ParkProvider = ({ children }: { children: ReactNode }) => {
   const [chosenPark, setChosenPark] = useState<Park | null>(null);
   const [allParks, setAllParks] = useState<Park[]>([]);

   // Hämtar alla parkloggor vid första rendering
   useEffect(() => {
      const getAllParks = async() => {
         const fetchedParks = await fetchParks();
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