import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";
import CheckoutForm from "./CheckoutForm";
import Success from "./Success";

const CartModal = forwardRef(function Modal({ actions, view, onClose, setModalView }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {view === "cart" && <Cart actions={actions} onClose={onClose} />}
      {view === "checkout" && (
        <CheckoutForm
          onClose={onClose}
          onSuccess={() => setModalView("success")}
        />
      )}
      {view === "success" && <Success onClose={onClose} />}
    </dialog>,
    document.getElementById("modal"),
  );
});

export default CartModal;
