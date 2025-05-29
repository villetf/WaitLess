import { ReactNode, useState } from 'react';

interface BurgerMenuProps {
   children: ReactNode;
   backgroundColor?: string;
}

function BurgerMenu({children, backgroundColor}: BurgerMenuProps) {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => setIsOpen(!isOpen);
   const closeMenu = () => setIsOpen(false);
   const closeMenuOnLinkClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if ((event.target as HTMLElement).closest('a')) {
         closeMenu();
      }
   };

   let bgColor;
   if (backgroundColor) {
      bgColor = backgroundColor;
   } else {
      bgColor = '#8DC689';
   }

   return (
      <>
         <div className="space-y-[5px] cursor-pointer mr-8 p-2" onClick={toggleMenu}>
            <div className="w-6 h-[3px] bg-black rounded-3xl"></div>
            <div className="w-6 h-[3px] bg-black rounded-3xl"></div>
            <div className="w-6 h-[3px] bg-black rounded-3xl"></div>
         </div>

         {isOpen && (
            <div onClick={closeMenu} className='fixed inset-0 bg-black opacity-50 z-40'></div>
         )}

         <div className={`flex flex-col items-center fixed top-0 right-0 h-full w-100 bg-[${bgColor}] z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='flex w-full'>
               <div className='mt-5 ml-7 cursor-pointer' onClick={closeMenu}>X</div>
            </div>
            <div className='w-full flex flex-col items-center' onClick={closeMenuOnLinkClick}>
               {children}
            </div>
         </div>
      </>
   );
}

export default BurgerMenu;