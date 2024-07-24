export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 text-slate-400 hover:text-slate-900 md:text-base rounded-md bg-slate-600 hover:bg-slate-400"
    >
      {children}
    </button>
  );
}
