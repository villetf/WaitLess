import { useState } from 'react';
import { Forecast } from '../types';
import CalendarComponent from './CalendarComponent';
import Button from './Button';

function ForecastPresentation(props: {
   selectedDates?: [Date, Date],
   forecast?: Forecast,
}) {
   const [dateToUse, setDateToUse] = useState(0);

   const dateToCleartextLong = (date: Date) => {
      const weekday = date.toLocaleDateString('sv-SE', { weekday: 'long' });
      const actualDate = date.toLocaleDateString('sv-SE', {
         day: 'numeric',
         month: 'long',
         year: 'numeric'
      });
      return `${weekday} den ${actualDate}`;
   };

   const dateToCleartextShort = (date: Date) => {
      return date.toLocaleDateString('sv-SE', {
         day: 'numeric',
         month: 'long',
         year: 'numeric'
      });
   };

   const getPercentageDifference = () => {
      return Math.round(100 - (props.forecast!.days[dateToUse].average / props.forecast!.days[props.forecast!.days.length - 1].average * 100));
   };

   const roundNumber = (number: number) => {
      return number % 1 === 0 ? number.toString() : number.toFixed(2).replace(/\.?0+$/, '').replace('.', ',');
   };

   return (
      <div className='size-full'>
         <div className='mt-20'>
            <h4 className='text-lg'>Valda datum: <strong>{dateToCleartextShort(props.selectedDates![0])}–{dateToCleartextShort(props.selectedDates![1])}</strong></h4>
         </div>
         <div className='w-full h-6/7 flex'>
            <div style={{ pointerEvents: 'none' }} className='w-1/2 flex flex-col items-center justify-center'>
               <CalendarComponent chosenDates={props.forecast!.days[dateToUse].date} />
            </div>
            <div className='w-1/2 flex flex-col justify-center text-left'>
               <div className='mr-40'>
                  <h2 className='text-left text-2xl mb-5'>Ditt bästa datum är <strong>{dateToCleartextLong(props.forecast!.days[dateToUse].date)}</strong>.</h2>
                  <p>Motsvarande datum året innan var kötiderna för dina valda attraktioner <strong>upp till {roundNumber(props.forecast!.days[dateToUse].average)} minuter</strong>.
                     Det är {getPercentageDifference()}% lägre än tidsperiodens mest intensiva dag, då snittkötiden var {roundNumber(props.forecast!.days[props.forecast!.days.length - 1].average)} minuter.</p>
                  <Button text={'Hitta ett annat bra datum'} buttonEvent={() => setDateToUse(dateToUse + 1)}></Button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ForecastPresentation;