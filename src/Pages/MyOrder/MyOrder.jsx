import React, { useContext } from "react";
import {  useParams } from "react-router-dom";
import { Layout } from "../../Components/Layout/Layout";
import { ShoppingCartContext } from "../../Context/ShoppingCart";
import { OrderCard } from "../../Components/OrderCard/OrderCard";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";

export const MyOrder = () => {
  const context = useContext(ShoppingCartContext);
  const params = useParams();
  const indexOrderPath = Number(params.id);
  console.log(indexOrderPath);

  return (
    <Layout>
      <div className="flex w-80 items-center justify-center relative  mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {!isNaN(indexOrderPath) &&
          context.order?.[indexOrderPath].products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              img={product.images[0]}
              price={product.price}
            />
          ))}
          {isNaN(indexOrderPath) && context.order?.slice(-1)[0].products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              img={product.images[0]} 
              price={product.price}
            />
          ))}
      </div>
    </Layout>
  );
};
