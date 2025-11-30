import { motion } from 'framer-motion';
import { useState, useRef, useLayoutEffect } from 'react';

function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
   const [open, setOpen] = useState(false);
   const [height, setHeight] = useState<number | 'auto'>('auto');
   const contentRef = useRef<HTMLDivElement>(null);
   const headerRef = useRef<HTMLButtonElement>(null);

   useLayoutEffect(() => {
      const headerHeight = headerRef.current?.offsetHeight ?? 0;
      const contentHeight = contentRef.current?.scrollHeight ?? 0;

      setHeight(open ? headerHeight + contentHeight : headerHeight);
   }, [open, title, children]);

   return (
      <motion.div
         animate={{ height }}
         transition={{ duration: 0.3, ease: 'easeInOut' }}
         className="w-full border border-gray-300 rounded-2xl overflow-hidden"
         style={{ height: height === 'auto' ? 'auto' : height }}
      >
         <div className="mx-5">
            <button
               ref={headerRef}
               onClick={() => setOpen(!open)}
               className="w-full flex justify-between items-center py-3 text-left cursor-pointer"
            >
               <span className="text-lg font-medium">{title}</span>
               <span
                  className="transition-transform duration-200"
                  style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
               >
            ▼
               </span>
            </button>

            <div ref={contentRef} className="pb-3" style={{ display: open ? 'block' : 'none' }}>
               {children}
            </div>
         </div>
      </motion.div>
   );
}

export default AccordionItem;