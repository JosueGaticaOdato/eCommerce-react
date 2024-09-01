import React, { useContext } from "react";
import { Layout } from "../../Components/Layout/Layout";
import { OrdersCard } from "../../Components/OrdersCard/OrdersCard";
import { ShoppingCartContext } from "../../Context/ShoppingCart";
import { Link, useParams } from "react-router-dom";

export const MyOrders = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex w-80 items-center justify-center relative mb-4">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
};
