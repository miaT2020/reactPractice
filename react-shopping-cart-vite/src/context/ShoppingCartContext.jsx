import { createContext, useContext } from "react";

const ShoppingCartContext = createContext({});

//2 export functions
//1. get our context that has shopping cart related information user inteact
// export a custom hook (custom hook start with 'use') call useShoppingCart
//useShoppingCart is a custom hook that returns the shopping cart related information
//need to create  shopping cart context with crateContext

export function useShoppingCart() {
  return useContext(ShoppingCartContext); //before useContext need to createContext for ShoppingCartContext
}

//implement the provider portion of the shopping cart context
//the provider is going to give access all values, and also going to do
//all the code for rendering.
//the provider must have children inside to render with, so we just essatially
//creating a warapper (provider) arround our context that has
//this children object
export function ShoppingCartProvider({ children }) {
  //need to have place to store all our cart information
  //anything changed in the state will trigger a re-render
  const [cartItems, setCartItems] = useState([]);

  function getItemQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  <ShoppingCartContext.Provider
    value={{
      getItemQuantity,
      increaseCartQuantity,
      decreaseCarQuantity,
      removeFromCart,
    }}
  >
    {children}
  </ShoppingCartContext.Provider>;
}
