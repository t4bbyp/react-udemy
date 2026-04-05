import { useContext, useRef } from "react";
import logo from "../assets/logo.jpg";
import { CartContext } from "../store/cart-context";
import CartModal from "./CartModal";

export default function Header() {
  const modal = useRef();
  const { items } = useContext(CartContext);
  const cartQuantity = items.length;

  function openCart() {
    modal.current.open();
  }

  let modalActions = <button className="text-button">Close</button>;
  
  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button className="text-button">Close</button>
        <button className="button">Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} actions={modalActions} />
      <header id="main-header">
        <div id="title">
          <img src={logo} />
          <h1>reactfood</h1>
        </div>
        <button onClick={openCart}>Cart ({cartQuantity})</button>
      </header>
    </>
  );
}
