import { useContext, useActionState } from "react";
import { CartContext } from "../store/cart-context";

export default function CheckoutForm({ onClose, onSuccess }) {
  const { addOrder } = useContext(CartContext);
  const { items } = useContext(CartContext);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  async function sendOrder(prevFormState, formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const street = formData.get("street");
    const code = formData.get("code");
    const city = formData.get("city");

    let errors = [];

    if (/\d/.test(name)) {
      errors.push("Name shouldn't contain numbers");
    }

    if (!email.includes("@")) {
      errors.push("Please write a valid email address.");
    }

    if (street.length < 4) {
      errors.push("Street names must be more than 4 characters.");
    }

    if (city.length == 0) {
      errors.push("City cannot be empty");
    }

    if (errors.length > 0) {
      return { errors, enteredValues: { name, email, street, code, city } };
    }

    try {
      await addOrder({ name, email, street, code, city, totalPrice });
      if (onSuccess) onSuccess();
    } catch (error) {
      return {
        errors: [error.message],
        enteredValues: { name, email, street, code, city },
      };
    }

    return { errors: null };
  }

  const [formState, formAction] = useActionState(sendOrder, { errors: null });

  return (
    <form className="cart" action={formAction}>
      <h2>Checkout</h2>
      <p>Total price: ${totalPrice.toFixed(2)}</p>

      <div className="control">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={formState.enteredValues?.name}
        />
      </div>

      <div className="control">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          defaultValue={formState.enteredValues?.email}
        />
      </div>

      <div className="control">
        <label htmlFor="street">Street</label>
        <input
          type="text"
          name="street"
          id="street"
          defaultValue={formState.enteredValues?.street}
        />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="code">Postal Code</label>
          <input
            type="text"
            name="code"
            id="code"
            defaultValue={formState.enteredValues?.code}
          />
        </div>
        <div className="control">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            defaultValue={formState.enteredValues?.city}
          />
        </div>
      </div>

      {formState.errors && (
        <ul className="errors">
          {formState.errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}

      <br />
      <div className="modal-actions">
        <button type="button" onClick={onClose} className="text-button">
          Close
        </button>
        <button className="button">Submit Order</button>
      </div>
    </form>
  );
}
