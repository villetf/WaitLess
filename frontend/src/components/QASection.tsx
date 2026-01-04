import { useEffect, useState } from 'react';
import QAs from '../assets/QAs.json';
import AccordionItem from './AccordionItem';

function QASection() {
   const [questions, setQuestions] = useState<{question: string, answer: string}[]>([]);

   useEffect(() => {
      setQuestions(QAs);
   }, []);

   return (
      <div className='mx-2 lg:mx-0 lg:w-1/2 text-left flex flex-col gap-2'>
         {questions.map((question, index) => (
            <AccordionItem title={question.question} key={index}>
               <p dangerouslySetInnerHTML={{ __html: question.answer }}></p>
            </AccordionItem>
         ))}
      </div>
   );
}

export default QASection;