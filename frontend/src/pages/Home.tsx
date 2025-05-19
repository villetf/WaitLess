import { Link } from 'react-router-dom';
import Button from '../components/Button';

function Home() {
   const imageLink = 'https://firstbenefits.org/wp-content/uploads/2017/10/placeholder.png';

   return (
      <>
         <div className="h-full w-1/2 flex justify-center items-center">
            <img src={imageLink} alt="placeholder" className="h-100" />
         </div>

         <div className="h-full w-1/2 flex justify-center flex-col">
            <h1 className="text-7xl text-left mb-10 mr-10">Ha kul istället <br />för att stå i kö.</h1>
            <h3 className="text-left text-3xl mr-20">Med hjälp av 8 miljoner mätvärden hjälper WaitLess dig att hitta dagarna med minst kö på nöjesparker.</h3>
            <div className='text-left'>
               <Link to='/generate'><Button text='Generera ett datum' /></Link>
            </div>
         </div>
      </>
   );
}

export default Home;