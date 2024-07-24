import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const inputClasses =
    "text-stone-600 focus:outline-none focus:border-stone-600 w-full p-1 border-b-2 border-stone-300  bg-stone-300";
  return (
    <div className="flex flex-col gap-1 my-4  ">
      <label className="font-normal">{label}</label>
      {textarea ? (
        <textarea ref={ref} className={inputClasses} {...props}></textarea>
      ) : (
        <input ref={ref} className={inputClasses} {...props}></input>
      )}
    </div>
  );
});

export default Input;
