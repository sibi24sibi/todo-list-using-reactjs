export default function Input({ label, textarea, ...props }) {
  const inputClasses =
    "text-stone-600 focus:outline-none focus:border-stone-600 w-full p-1 border-b-2 border-stone-300  bg-stone-300";
  return (
    <div className="flex flex-col gap-1 my-4  ">
      <label className="font-normal">{label}</label>
      {textarea ? (
        <textarea className={inputClasses} {...props}></textarea>
      ) : (
        <input className={inputClasses} {...props}></input>
      )}
    </div>
  );
}
