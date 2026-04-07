import { useContext, useRef, useState } from "react";
import logo from "../assets/logo.jpg";
import { CartContext } from "../store/cart-context";
import CartModal from "./CartModal";

export default function Header() {
  const cartModal = useRef();
  const { items } = useContext(CartContext);
  const cartQuantity = items.length;
  const [modalView, setModalView] = useState("");

  function openCart() {
    setModalView("cart");
    cartModal.current.open();
  }

  function openCheckout() {
    setModalView("checkout");
  }

  let cartModalActions = <button className="text-button">Close</button>;

  if (cartQuantity > 0) {
    cartModalActions = (
      <>
        <button className="text-button">Close</button>
        <button type="button" className="button" onClick={openCheckout}>
          Checkout
        </button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={cartModal}
        actions={cartModalActions}
        view={modalView}
        onClose={() => cartModal.current.close()}
        setModalView={setModalView}
      />

      <header id="main-header">
        <div id="title">
          <img src={logo} />
          <h1>reactfood</h1>
        </div>
        <button onClick={openCart} className="text-button">
          Cart ({cartQuantity})
        </button>
      </header>
    </>
  );
}
