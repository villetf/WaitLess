import { useEffect, useState } from 'react';
import { Attraction, Forecast } from '../types';
import CalendarComponent from './CalendarComponent';
import SelectAttractionsList from './SelectAttractionsList';
import Button from './Button';
import toast, { Toaster } from 'react-hot-toast';

function MakeTimeChoices(props: {
      setCurrentStep: (step: number) => void,
      setValuesSearched: (values: number) => void,
      setForecast: (forecast: Forecast) => void
      selectedDates?: [Date, Date],
      setSelectedDates?: (dates: [Date, Date]) => void,
      chosenPark: string | null,
}) {
   const apiUrl = import.meta.env.VITE_API_URL;
   const [attractions, setAttractions] = useState<Attraction[]>([]);
   const [childAttractionsHidden, setChildAttractionsHidden] = useState(false);
   const [chosenAttractions, setChosenAttractions] = useState<Attraction[]>([]);


   useEffect(() => {
      const getAttractions = async() => {
         fetch(`${apiUrl}/api/v1/attractions?park=${props.chosenPark}`)
            .then(res => res.json())
            .then((data) => {
               setAttractions(data);
            });
      };

      getAttractions();
   }, [apiUrl, props.chosenPark]);

   const getForecast = () => {
      let somethingIsWrong = false;
      console.log('proppar', props.selectedDates);
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

      const headers = {
         'Content-Type': 'application/json'
      };

      const body = JSON.stringify({
         park: props.chosenPark,
         attractionIds: chosenAttractions.map((attraction) => attraction.id),
         startDate: props.selectedDates![0],
         endDate: props.selectedDates![1]
      });

      fetch(`${apiUrl}/api/v1/queueForecast/metricsToSearch`, {
         method: 'POST',
         headers: headers,
         body: body
      })
         .then(res => res.json())
         .then((data: number) => {
            props.setValuesSearched(data);
         });

      fetch(`${apiUrl}/api/v1/queueForecast`, {
         method: 'POST',
         headers: headers,
         body: body
      })
         .then(res => res.json())
         .then((data: Forecast) => {
            const forecastWithDates: Forecast = {
               days: data.days.map((day) => ({
                  ...day,
                  date: new Date(day.date)
               }))
            };

            props.setCurrentStep(3);
            props.setForecast(forecastWithDates);
         });
   };

   return (
      <div className='flex flex-col items-center w-full'>
         <Toaster />
         {!props.chosenPark && <div className='text-lg py-5 px-15 border border-red-300 bg-red-200 mt-20 rounded-2xl'>Ingen nöjespark är vald. Välj en park i menyn längst upp till vänster.</div>}
         <div className='flex flex-col items-center w-full' style={!props.chosenPark ? { pointerEvents: 'none', opacity: 0.4 } : {}}>
            <h1 className='mt-20 text-3xl mb-5'>När vill du åka?</h1>
            <h4>För bästa resultat, välj ett stort tidsspann så att det finns många datum att välja mellan.</h4>
            <div className='mt-10'>
               <CalendarComponent setChosenDates={props.setSelectedDates} chosenDates={props.selectedDates}/>
            </div>
            <h1 className='mt-20 text-3xl mb-5'>Vilka attraktioner är du intresserad av?</h1>
            <h4>Prognosen kommer att beräknas utifrån hur kötiderna på dina valda attraktioner sett ut tidigare.</h4>
            <div className='mt-5 mb-3'>
               <label htmlFor="hideChildAttractions" className='mr-2'>Dölj barnattraktioner</label>
               <input type="checkbox" name="hideChildAttractions" id="hideChildAttractions" checked={childAttractionsHidden} onChange={() => setChildAttractionsHidden(!childAttractionsHidden)}/>
            </div>
            <SelectAttractionsList attractions={attractions.filter((attraction) => !childAttractionsHidden || !attraction.childAttraction)} chosenAttractions={chosenAttractions} setChosenAttractions={setChosenAttractions} />
            <Button buttonEvent={getForecast} text='Generera prognos' />
         </div>
      </div>
   );
}

export default MakeTimeChoices;