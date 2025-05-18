import './css/App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
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
