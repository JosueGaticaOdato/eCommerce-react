import { useState, useEffect } from "react";
import { Card } from "../../Components/Card/Card";
import { Layout } from "../../Components/Layout/Layout";
import { ProductDetail } from "../../Components/ProductDetail/ProductDetail";

export const apiUrl = "https://api.escuelajs.co/api/v1";

export const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch(`${apiUrl}/products`)
        const data = await response.json()
        setItems(data) 
      } catch (error){
        console.error(`Ocurrio un error: ${error}`)
      }
    }
    fetchData()
  },[])

  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
      {items?.map(item => (
        <Card key={item.id} data={item} />
      ))}
      </div>
      <ProductDetail/>
      
    </Layout>
  );
};
