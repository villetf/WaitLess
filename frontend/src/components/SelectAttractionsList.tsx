import Select from 'react-select';
import { Attraction } from '../types';

function SelectAttractionsList(props: { attractions: Attraction[], chosenAttractions: Attraction[], setChosenAttractions: (attractions: Attraction[]) => void }) {

   return (
      <Select
         isMulti
         name='attractions'
         options={props.attractions}
         getOptionLabel={(attraction) => attraction.name}
         getOptionValue={(attraction) => String(attraction.id)}
         className="basic-multi-select w-75"
         classNamePrefix="select"
         onChange={(selected) => {
            props.setChosenAttractions(selected as Attraction[]);
         }
         }
         value={props.chosenAttractions}
         closeMenuOnSelect={false}
         placeholder='Välj attraktioner...'
      />
   );
}

export default SelectAttractionsList;