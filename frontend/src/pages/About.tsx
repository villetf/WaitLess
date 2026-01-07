import QASection from '../components/QASection';

function Contact() {
   return (
      <>
         <div className="w-full flex flex-col items-center justify-start mt-20 lg:mt-40">
            <section className="w-4/5 lg:w-1/2 flex justify-start flex-col items-start text-left mb-30">
               <h1 className="text-4xl font-medium">Vårt mål:</h1>
               <h1 className="text-6xl font-medium">Mer åktid</h1>
               <h1 className="text-6xl mb-7 font-medium">Mindre kötid</h1>
               <p className="mb-7 text-xl">Därför har WaitLess samlat in ködata från Sveriges två största nöjesparker sedan 2023.</p>
            </section>

            <section>
               <img src="./Waitless_flowchart_mobile.svg" alt="Image describing how WaitLess works" className='mb-30 px-5 lg:hidden' />
               <img src="./waitless_flowchart.svg" alt="Image describing how WaitLess works" className='mb-30 hidden lg:block' />
            </section>

            <section className='w-full flex flex-col items-center mb-20'>
               <h2 className='text-2xl lg:text-3xl mb-23 lg:mb-5'>Bakom WaitLess</h2>
               <div className='bg-[#8DC689] lg:ml-15 lg:h-70 mx-10 lg:mx-0 min-w-1/2 flex flex-col lg:flex-row items-center rounded-[40px] sm:mx-20 md:mx-50'>
                  <img src="./portratt.png" alt="Bild på Vilhelm" className='rounded-full border-15 lg:border-20 border-[#FFFCF1] w-2/3 sm:w-1/2 lg:w-auto lg:h-3/4 -mt-20 lg:mt-0 lg:-ml-20' />
                  <div className='text-left'>
                     <div className='mb-5 text-center lg:text-left lg:ml-5 mt-4 lg:mt-5'>
                        <h2 className='text-4xl font-medium'>Vilhelm Fontell</h2>
                        <h3 className='text-2xl font-medium ml-1 mt-1'>Systemutvecklare</h3>
                     </div>
                     <div className='mx-5 mb-5 lg:mb-0'>
                        <h4 className='text-md mb-3'><span className='font-semibold'>Bor: </span>Jönköping</h4>
                        <h4 className='text-md mb-3'><span className='font-semibold'>Gör: </span>Skriver all kod som ligger bakom WaitLess.</h4>
                        <h4 className='text-md'><span className='font-semibold'>Gör annars: </span>Studerar till webbutvecklare med .NET-inriktning på Jönköping University.</h4>
                     </div>
                  </div>
                  <div className='flex lg:flex-col gap-8 lg:gap-5 -mb-5'>
                     <a href="https://www.linkedin.com/in/vilhelm-fontell/" target='_blank'>
                        <i className="fa-brands fa-linkedin-in text-3xl bg-[#FFFCF1] border-13 border-[#FFFCF1] rounded-full lg:-mr-5 px-0.5"></i>
                     </a>
                     <a href="https://github.com/villetf" target='_blank'>
                        <i className="fa-brands fa-github text-3xl bg-[#FFFCF1] border-13 border-[#FFFCF1] rounded-full lg:-mr-5"></i>
                     </a>
                     <a href="https://villetf.github.io/cv/" target='_blank'>
                        <i className="fa-solid fa-globe text-3xl bg-[#FFFCF1] border-13 border-[#FFFCF1] rounded-full lg:-mr-5"></i>
                     </a>
                  </div>
               </div>
            </section>
            <h2 className='text-2xl lg:text-3xl mb-5 lg:mb-10'>Vanliga frågor</h2>
            <QASection />
         </div>
      </>
   );
}

export default Contact;