import QASection from '../components/QASection';

function Contact() {
   return (
      <>
         <div className="w-full flex flex-col items-center justify-start mt-40">
            <div className="w-1/2 flex justify-start flex-col items-start text-left mb-30">
               <h1 className="text-4xl font-bold">Vårt mål:</h1>
               <h1 className="text-6xl font-bold">Mer åktid</h1>
               <h1 className="text-6xl mb-7 font-bold">Mindre kötid</h1>
               <p className="mb-7 text-xl">Därför har WaitLess samlat in ködata från Sveriges två största nöjesparker sedan 2023.</p>
            </div>

            <div>
               {/* <h2 className='text-3xl mb-10'>Så här funkar det:</h2> */}
               <img src="./waitless_flowchart.svg" alt="Image describing how WaitLess works" className='mb-20' />
            </div>

            <div className='w-full'>
               <div className='bg-[#8DC689] h-100 w-1/2 flex items-center'>
                  <img src="./porträtt.png" alt="Bild på Vilhelm" className='rounded-full border-20 border-[#FFFCF1]' />
                  <div>
                     <h2>Vilhelm Fontell</h2>
                     <h3>Systemutvecklare</h3>
                     <h4><strong>Bor: </strong>Jönköping</h4>
                     <h4><strong>Gör: </strong>Skriver all kod som ligger bakom WaitLess.</h4>
                     <h4><strong>Gör annars: </strong>Studerar till webbutvecklare med .NET-inriktning på Jönköping University.</h4>
                  </div>
                  <div className='flex flex-col gap-5'>
                     <i className="fa-brands fa-square-linkedin border-10 border-[#FFFCF1]"></i>
                     <i className="fa-brands fa-github border-10 border-[#FFFCF1]"></i>
                     <i className="fa-solid fa-globe border-10 border-[#FFFCF1]"></i>
                  </div>
               </div>
            </div>
            <QASection />
         </div>
      </>
   );
}

export default Contact;