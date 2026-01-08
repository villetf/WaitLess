import { useContext, useEffect, useState } from 'react';
import { Attraction, Forecast } from '../types';
import CalendarComponent from './CalendarComponent';
import SelectAttractionsList from './SelectAttractionsList';
import Button from './Button';
import toast, { Toaster } from 'react-hot-toast';
import { ParkContext } from './ParkContext';
import { fetchAttractions, fetchMetricsToSearch, fetchQueueForecast } from '../services/apiCalls';

function MakeTimeChoices(props: {
      setCurrentStep: (step: number) => void,
      setValuesSearched: (values: number) => void,
      setForecast: (forecast: Forecast) => void
      selectedDates?: [Date, Date],
      setSelectedDates?: (dates: [Date, Date]) => void,
      setError: (error: Error) => void
}) {

   const [attractions, setAttractions] = useState<Attraction[]>([]);
   const [childAttractionsHidden, setChildAttractionsHidden] = useState(false);
   const [chosenAttractions, setChosenAttractions] = useState<Attraction[]>([]);

   const setError = props.setError;


   const parkContext = useContext(ParkContext);
   if (!parkContext) {
      throw new Error('MakeTimeChoices must be used within a ParkProvider');
   }

   const { chosenPark } = parkContext;


   useEffect(() => {
      const getAttractions = async() => {
         if (!chosenPark) {
            return;
         }
         fetchAttractions(chosenPark.id)
            .then(setAttractions)
            .catch(error => {
               setError(error);
            });
      };

      getAttractions();
   }, [chosenPark, setError]);

   useEffect(() => {
      setChosenAttractions([]);
   }, [chosenPark]);

   const getForecast = () => {
      let somethingIsWrong = false;
      if (!props.selectedDates) {
         toast.error('Du måste välja ett datumspann.');
         somethingIsWrong = true;
      }

      if (chosenAttractions.length === 0) {
         toast.error('Du måste välja minst en attraktion.');
         somethingIsWrong = true;
      }

      if (somethingIsWrong) {
         return;
      }

      props.setCurrentStep(2);


      fetchMetricsToSearch(chosenPark!.id, chosenAttractions, props.selectedDates![0], props.selectedDates![1])
         .then((data: number) => {
            props.setValuesSearched(data);
         });

      fetchQueueForecast(chosenPark!.id, chosenAttractions, props.selectedDates![0], props.selectedDates![1])
         .then((data: Forecast) => {
            const forecastWithDates: Forecast = {
               days: data.days.map((day) => ({
                  ...day,
                  date: new Date(day.date)
               }))
            };

            props.setCurrentStep(3);
            props.setForecast(forecastWithDates);
         })
         .catch(error => {
            setError(error);
         });
   };

   return (
      <div className='flex flex-col items-center w-full'>
         <Toaster />
         {!chosenPark && <div className='text-md lg:text-lg mx-3 py-5 px-15 border border-red-300 bg-red-200 mt-20 rounded-2xl'>Ingen nöjespark är vald. Välj en park i den övre menyn.</div>}
         <div className='flex flex-col items-center w-full px-3' style={!chosenPark ? { pointerEvents: 'none', opacity: 0.4 } : {}}>
            <h1 className='mt-20 text-3xl mb-5'>När vill du åka?</h1>
            <h4>För bästa resultat, välj ett stort tidsspann så att det finns många datum att välja mellan.</h4>
            <div className='mt-10 max-w-[95vw]'>
               <CalendarComponent setChosenDates={props.setSelectedDates} chosenDates={props.selectedDates} />
            </div>
            <h1 className='mt-20 text-3xl mb-5'>Vilka attraktioner är du intresserad av?</h1>
            <h4>Prognosen kommer att beräknas utifrån hur kötiderna på dina valda attraktioner sett ut tidigare.</h4>
            <div className='mt-5 mb-3'>
               <label htmlFor="hideChildAttractions" className='mr-2'>Dölj barnattraktioner</label>
               <input type="checkbox" name="hideChildAttractions" id="hideChildAttractions" checked={childAttractionsHidden} onChange={() => setChildAttractionsHidden(!childAttractionsHidden)}/>
            </div>
            <SelectAttractionsList
               attractions={attractions
                  .filter((attraction) => !childAttractionsHidden || !attraction.childAttraction)
                  .slice()
                  .sort((a, b) => a.name.localeCompare(b.name, 'sv', { sensitivity: 'base' }))}
               chosenAttractions={chosenAttractions}
               setChosenAttractions={setChosenAttractions}
            />
            <Button buttonEvent={getForecast} text='Generera prognos' className='mt-7'/>
         </div>
      </div>
   );
}

export default MakeTimeChoices;