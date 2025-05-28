import React from 'react';
import { Link } from 'react-router-dom';

interface ErrorBoundaryProps {
   children: React.ReactNode;
}

interface ErrorBoundaryState {
   hasError: boolean;
   error: Error | null;
}


class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
   constructor(props: ErrorBoundaryProps) {
      super(props);
      this.state = {
         hasError: false,
         error: null,
      };
   }

   static getDerivedStateFromError(error: Error) {
      return { hasError: true, error };
   }


   render() {
      return (
         this.state.hasError ? (
            <div className='w-full flex flex-col items-center justify-center'>
               <div className='border-2 border-red-500 bg-red-100 p-10 rounded-lg'>
                  <h4 className='text-xl'>Ett fel uppstod:</h4>
                  <h6>{this.state.error?.message}</h6>
                  <h6>Försök igen, <Link to='/contact' className='text-blue-600 underline'>kontakta oss</Link> om felet kvarstår</h6>
               </div>
            </div>
         ) : this.props.children
      );
   }
}

export default ErrorBoundary;