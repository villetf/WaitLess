function Button( props: { text: string, buttonEvent?: (() => void), className?: string } ) {
   return (
      <button
         className={`h-10 w-fit bg-[#4D6E4A] opacity-82 text-white px-5 rounded-3xl cursor-pointer ${props.className}`}
         {...(props.buttonEvent ? { onClick: props.buttonEvent } : {})}
      >
         {props.text}
      </button>
   );
}

export default Button;