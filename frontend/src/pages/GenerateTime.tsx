import { useEffect, useState } from 'react';
import MakeTimeChoices from '../components/MakeTimeChoices';
import { Forecast } from '../types';
import LoadingScreen from '../components/LoadingScreen';
import ForecastPresentation from '../components/ForecastPresentation';
import { useLocation } from 'react-router-dom';


function GenerateTime(props: {chosenPark: string | null}) {
   const [currentStep, setCurrentStep] = useState(1);
   const [valuesSearched, setValuesSearched] = useState(0);
   const [forecast, setForecast] = useState<Forecast>();
   const [selectedDates, setSelectedDates] = useState<[Date, Date] | undefined>(undefined);
   const location = useLocation();

   useEffect(() => {
      setCurrentStep(1);
      setSelectedDates(undefined);
      setValuesSearched(0);
   }, [location.pathname]);

   return (
      currentStep === 1 ? (
         <MakeTimeChoices
            setCurrentStep={setCurrentStep}
            setValuesSearched={setValuesSearched}
            setForecast={setForecast}
            selectedDates={selectedDates}
            setSelectedDates={setSelectedDates}
            chosenPark={props.chosenPark}
         />
      ) : currentStep === 2 ? (
         <LoadingScreen valuesSearched={valuesSearched} />
      ) : (
         <ForecastPresentation selectedDates={selectedDates} forecast={forecast} />
      )
   );
}

export default GenerateTime;