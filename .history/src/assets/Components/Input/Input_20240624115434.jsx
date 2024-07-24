export default function Input({ label, textarea, ...props }) {
  return (
    <div>
      <label>{label}</label>
      {textarea ? <textarea {...props}></textarea> : <input {...props}></input>}
    </div>
  );
}
