function LoadingScreen(props: { valuesSearched: number }) {
   return (
      <div className="flex flex-col items-center justify-center size-full">
         <i className="fa-solid fa-hourglass text-5xl rotating-hourglass"></i>
         <h3 className="text-2xl mb-10 mt-3">Laddar...</h3>
         {props.valuesSearched > 0 && (
            <h4>{props.valuesSearched.toLocaleString()} värden söks igenom...</h4>
         )}
      </div>
   );
}

export default LoadingScreen;