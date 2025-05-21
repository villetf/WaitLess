import Calendar from 'react-calendar';
import '../css/calendar.css';

function CalendarComponent(props: { chosenDates: [Date, Date] | Date | undefined, setChosenDates?: (dates: [Date, Date]) => void }) {
   const maxDate = new Date();
   maxDate.setFullYear(maxDate.getFullYear() + 1);

   return (
      <Calendar
         minDate={new Date()}
         maxDate={maxDate}
         onChange={(date) => props.setChosenDates!(date as [Date, Date])}
         selectRange
         value={props.chosenDates}
         next2Label={null}
         prev2Label={null}
      />
   );
}

export default CalendarComponent;