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
            <QASection />
         </div>
      </>
   );
}

export default Contact;