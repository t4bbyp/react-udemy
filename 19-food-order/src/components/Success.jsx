import { useContext } from "react";
import { CartContext } from "../store/cart-context";

export default function Success({ onClose }) {
    const {clearCart} = useContext(CartContext);

    function handleClose() {
        clearCart();
        onClose();
    }

  return (
    <div className="cart">
      <h2>Success!</h2>
      <p>Your order was submitted successfully.</p>
      <p>We will get back to you with more details via email within the next few minutes.</p>

      <div className="modal-actions">
        <button type="button" className="button" onClick={handleClose}>
          Okay
        </button>
      </div>
    </div>
  );
}
