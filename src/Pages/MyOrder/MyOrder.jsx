import React, { useContext } from 'react'
import { Layout } from '../../Components/Layout/Layout'
import { ShoppingCartContext } from '../../Context/ShoppingCart';
import { OrderCard } from '../../Components/OrderCard/OrderCard';

export const MyOrder = () => {

  const context = useContext(ShoppingCartContext);
  
  return (
    <Layout>
      MyOrder
      <div className="flex flex-col w-80">
        {context.order?.slice(-1)[0].products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.prices}
          />
        ))}
      </div>
    </Layout>
  )
}
