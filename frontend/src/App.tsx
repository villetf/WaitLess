import './css/App.css';
import Footer from './Footer';
import Header from './Header';
import MainContent from './MainContent';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

   return (
      <>
         <Router>
            <Header />
            <MainContent />
            <Footer />
         </Router>
      </>
   );
}

export default App;
