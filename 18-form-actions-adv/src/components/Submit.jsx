//this hook cant be used in the component w the form action,
// only in a nested component
import { useFormStatus } from "react-dom";


//you can use this system to update the form's UI based on the
//form's state (the pending thing for example)
export default function Submit() {
  const { pending } = useFormStatus();

  return (
    <p className="actions">
      <button type="submit" disabled={pending}>
        {pending ? 'Submitting...' : 'Submit'}
      </button>
    </p>
  );
}
