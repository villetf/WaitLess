import { Link } from 'react-router-dom';

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
            <Link to='/generate' className='text-left'><button className="h-10 w-fit bg-[#4D6E4A] opacity-82 text-white px-5 rounded-3xl cursor-pointer mt-7">Generera ett datum</button></Link>
         </div>
      </>
   );
}

export default Home;