export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-slate-400 hover:text-gray-950 md:text-base rounded-md  bg-gray-900  hover:bg-slate-400 "
      {...props}
    >
      {children}
    </button>
  );
}
