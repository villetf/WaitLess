import './css/App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';

function App() {
   const [chosenPark, setChosenPark] = useState(localStorage.getItem('chosenPark'));

   return (
      <>
         <Router>
            <Header chosenPark={chosenPark} setChosenPark={setChosenPark}/>
            <MainContent chosenPark={chosenPark} />
            <Footer />
         </Router>
      </>
   );
}

export default App;
