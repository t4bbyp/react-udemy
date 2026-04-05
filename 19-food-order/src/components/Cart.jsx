import { CartContext } from "../store/cart-context";
import { useContext } from "react";

export default function Cart() {
  const { items, updateItemQuantity } = useContext(CartContext);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {items.length === 0 && <p>No items in the cart!</p>}
      {items.length > 0 && (
        <ul>
          {items.map((item) => {
            //const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id} className="cart-item">
                <p>
                  {item.name} - {item.quantity} x {item.price}
                </p>
                <div className="cart-item-actions">
                  <button onClick={() => updateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <p className="cart-total">
        <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
