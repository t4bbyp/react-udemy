export default function Input({ labelName, ...props }) {
  return (
    <div className="yes">
      <label>{labelName}</label>
      <input {...props} />
    </div>
  );
}
