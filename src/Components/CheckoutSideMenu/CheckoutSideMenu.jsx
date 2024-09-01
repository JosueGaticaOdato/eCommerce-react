import "./styles.css";
import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context/ShoppingCart";
import { OrderCard } from "../OrderCard/OrderCard";

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  //console.log("Product to show:", context.productToShow);
  //console.log(context.isCheckoutSideMenuOpen);
  console.log("Cart: ", context.cartProducts);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id) //Quedan los que no coinciden
    context.setCartProducts(filteredProducts)
  }

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed top-20 right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
        <div className="px-6 overflow-y-scroll">

      {context.cartProducts.map(product => (
        <OrderCard
          key={product.id}
          id={product.id}
          title={product.title}
          imageUrl={product.images}
          price={product.prices}
          handleDelete={handleDelete}
        />
      ))}
        </div>
    </aside>
  );
};
