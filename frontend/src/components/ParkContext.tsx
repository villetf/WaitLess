import { createContext } from 'react';
import { Park } from '../types';

type ParkContextType = {
   chosenPark: Park | null;
   setChosenPark: (park: Park | null) => void;
   allParks: Park[];
}

export const ParkContext = createContext<ParkContextType | undefined>(undefined);

