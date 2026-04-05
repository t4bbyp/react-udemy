import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload.id,
    );

    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      updatedItems[existingCartItemIndex] = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
    } else {
      updatedItems.push({
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        quantity: 1,
      });
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId,
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  return state;
}

export default function CartContextProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, { items: [] });

  function handleAddItemToCart(meal) {
    cartDispatch({
      type: "ADD_ITEM",
      payload: meal,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    cartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId,
        amount,
      },
    });
  }

  const ctxValue = {
    items: cartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return <CartContext value={ctxValue}>{children}</CartContext>;
}
