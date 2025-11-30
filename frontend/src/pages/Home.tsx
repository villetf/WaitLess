import { Link } from 'react-router-dom';
import Button from '../components/Button';

function Home() {
   const imageLink = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Helix%2C_Liseberg_2014-04-26_03.jpg';

   return (
      <div className="flex flex-col min-h-screen">
         <section className='flex min-h-[92.5vh] flex-none py-8'>
            <div className="flex-1 flex justify-center items-center">
               <img src={imageLink} alt="placeholder" className="h-120" />
            </div>

            <div className="flex-1 flex justify-center flex-col">
               <h1 className="text-7xl text-left mb-10 mr-10">Ha kul istället <br />för att stå i kö.</h1>
               <h3 className="text-left text-3xl mr-20">Med hjälp av 8 miljoner mätvärden hjälper WaitLess dig att hitta dagarna med minst kö på nöjesparker.</h3>
               <div className='text-left'>
                  <Link to='/generate'><Button text='Generera ett datum' /></Link>
               </div>
            </div>
         </section>

         <section className='flex flex-col items-center'>
            <img src="/waitless_graph.png" alt="" className='w-3/4 mb-30'/>
            <div>
               <h1 className='text-6xl mb-10 text-left'>Så här funkar det:</h1>
               <ol className='list-decimal text-left text-6xl'>
                  <li className='mb-5'>Välj datum</li>
                  <li className='mb-5'>Välj attraktioner</li>
                  <li>Få de bästa dagarna</li>
               </ol>
               <div className='text-left'>
                  <Link to='/generate' className='mr-3'><Button text='Testa nu'></Button></Link>
                  <Link to="/about"><Button text='Se hur det funkar' /></Link>
               </div>
            </div>
         </section>
      </div>
   );
}

export default Home;