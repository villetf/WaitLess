import { Link } from 'react-router-dom';
import Button from '../components/Button';

function Home() {
   const imageLink = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Helix%2C_Liseberg_2014-04-26_03.jpg';

   return (
      <div className="flex flex-col min-h-screen">
         <section className='flex flex-col lg:flex-row min-h-[92.5vh] flex-none py-8'>
            <div className="flex-1 flex justify-center items-center px-1 lg:px-6">
               <img src={imageLink} alt="placeholder" className="w-full rounded-4xl mx-auto max-w-2xl" />
            </div>

            <div className="flex-1 flex justify-center flex-col">
               <h1 className="text-5xl lg:text-7xl lg:text-left mb-10 lg:mr-10">Ha kul istället <br />för att stå i kö.</h1>
               <h3 className="lg:text-left text-xl lg:text-3xl lg:mr-20 mx-5 lg:mx-0">Med hjälp av 8 miljoner mätvärden hjälper WaitLess dig att hitta dagarna med minst kö på nöjesparker.</h3>
               <div className='lg:text-left'>
                  <Link to='/generate'><Button text='Generera ett datum' className='mt-7'/></Link>
               </div>
            </div>
         </section>

         <section className='flex flex-col items-center'>
            <img src="/waitless_graph.png" alt="" className='w-3/4 mb-30 hidden lg:block'/>
            {/* <img src="/graph_mobile.png" alt="" className='w-full mb-30 block lg:hidden'/> */}
            <div className='relative w-full mb-30 lg:hidden'>
               <div className='overflow-x-scroll'>
                  <img src="/waitless_graph.png" alt="" className='w-[200%] max-w-none' />
               </div>
               <div className="pointer-events-none absolute top-0 right-0 h-full w-40 bg-linear-to-l from-[#FFFCF1] to-transparent" />
            </div>
            <div className='w-9/10 lg:w-fit'>
               <h1 className='text-4xl lg:text-6xl mb-10 lg:text-left'>Så här funkar det:</h1>
               <ol className='list-decimal list-inside lg:list-outside lg:text-left text-4xl lg:text-6xl'>
                  <li className='mb-5'>Välj datum</li>
                  <li className='mb-5'>Välj attraktioner</li>
                  <li>Få de bästa dagarna</li>
               </ol>
               <div className='text-left flex flex-col lg:flex-row items-center mt-7 gap-4'>
                  <Link to='/generate' className='lg:mr-3'><Button text='Testa nu'></Button></Link>
                  <Link to="/about"><Button text='Se hur det funkar' /></Link>
               </div>
            </div>
         </section>
      </div>
   );
}

export default Home;