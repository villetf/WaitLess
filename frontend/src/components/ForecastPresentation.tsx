import { useState } from 'react';
import { Forecast } from '../types';
import CalendarComponent from './CalendarComponent';
import Button from './Button';
import { Link } from 'react-router-dom';

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
      <div className='w-full h-[90vh]'>
         <div className='mt-10 lg:mt-20 mb-10 lg:mb-0'>
            <h4 className='text-lg'>Valda datum: <br className='lg:hidden'/><strong>{dateToCleartextShort(props.selectedDates![0])}–{dateToCleartextShort(props.selectedDates![1])}</strong></h4>
         </div>
         <div className='w-full h-6/7 flex flex-col lg:flex-row'>
            <div style={{ pointerEvents: 'none' }} className='lg:w-1/2 flex flex-col items-center justify-center mx-2 lg:mx-0'>
               <CalendarComponent chosenDates={props.forecast!.days[dateToUse].date} />
            </div>
            <div className='lg:w-1/2 flex flex-col justify-center text-left'>
               <div className='text-center lg:text-left lg:mr-40 mx-5 mt-10 lg:mx-0 lg:mt-0'>
                  <h2 className='text-2xl mb-5'>Ditt bästa datum är <br className='lg:hidden' /><strong>{dateToCleartextLong(props.forecast!.days[dateToUse].date)}</strong>.</h2>
                  <p>Motsvarande datum året innan var kötiderna för dina valda attraktioner <strong>upp till {roundNumber(props.forecast!.days[dateToUse].average)} minuter</strong>.
                     Det är <strong>{getPercentageDifference()}% lägre</strong> än tidsperiodens mest intensiva dag, då snittkötiden var {roundNumber(props.forecast!.days[props.forecast!.days.length - 1].average)} minuter.</p>
                  <Button text={'Hitta ett annat bra datum'} buttonEvent={() => setDateToUse(dateToUse + 1)} className='mt-7'></Button>
                  <br className='lg:hidden' />
                  <Link to='/generate' className='lg:mr-3 lg:hidden'><Button text='Generera ett nytt datum' className='mt-3'></Button></Link>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ForecastPresentation;