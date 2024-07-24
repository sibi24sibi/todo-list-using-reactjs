export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 text-slate-800 hover:text-slate-900 md:text-base rounded-md  bg-gray-900 hover:bg-slate-400"
    >
      {children}
    </button>
  );
}
