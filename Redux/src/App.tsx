import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Skeleton from "react-loading-skeleton";
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux"
import { instance } from './Repositories/Api'
function App() {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((state: any) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await instance.get(`/products`);
        console.log(data);

        dispatch({ type: "product/fetchProducts", payload: data });
      } catch (error: any) {} finally {}
    };
    fetchProducts();
  }, []);
  const addProduct = async (product: any) => {
    try {
      const data = await instance.post(`/products`, product);
      dispatch({ type: "product/addProduct", payload: data });
    } catch (error: any) {} finally {}
  };
  const removeProduct = async (product: any) => {
    try {
      await instance.delete(`/products/${product.id}`);
      dispatch({ type: "product/deleteProduct", payload: product.id });
    } catch (error: any) {} finally {}
  };
  const updateProduct = async (product: any) => {
    try {
      const data = await instance.put(`/products/${product.id}`, product);
      dispatch({ type: "product/updateProduct", payload: data });
    } catch (error: any) {} finally {}
  };

  if (isLoading) return <Skeleton count={3} height={35} />;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {products?.map((item: any) => {
        return <div key={item.id}>{item.name}</div>;
      })}

      <Button className='bg-red-500' onClick={() => addProduct({ name: "Product-3" })}>Add Product
      </Button>

      <Button onClick={() => updateProduct({ name: "Product-3 updated ", id: 3 })}>Update Product
      </Button>

      <Button onClick={() => removeProduct({ id: 3 })}>Delete Product
      </Button>
    </div>
  )
}

export default App
