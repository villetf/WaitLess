import './css/App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import { BrowserRouter as Router } from 'react-router-dom';
import { ParkProvider } from './components/ParkProvider';

function App() {
   return (
      <>
         <Router>
            <ParkProvider>
               <Header />
               <MainContent />
            </ParkProvider>
         </Router>
      </>
   );
}

export default App;
