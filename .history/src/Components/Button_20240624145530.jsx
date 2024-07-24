export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 hover:text-slate-400 text-slate-900 md:text-base rounded-md hover:bg-slate-800 bg-slate-400"
    >
      {children}
    </button>
  );
}
