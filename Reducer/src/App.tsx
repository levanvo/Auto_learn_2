import React, { useContext, useEffect, useState } from 'react'
import { Share } from './Share/Reducer'
import Button from '@mui/material/Button'
import { ShareData } from './Share/Data';
import { instance } from './Share/api';


const App = () => {
  const { state, dispatch } = useContext(Share);
  const Vole = useContext(ShareData);
  // const {intry,outry} = useContext(ShareData);
  console.log(Vole);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await instance.get("/products")
        Vole.outry({ type: "FetchAPI", payload: data });
        console.log(data);
      } catch (err: any) {
        console.log(err);
      };
    }
    fetch();
  }, []);
  const AddPr=async(data:any)=>{
    Vole.outry({type:"AddPr",payload:data})
    await instance.post(`/products`,data)
    location.reload();
  }
  const Remove=async (products:any)=>{
    // console.log(id);
    Vole.outry({type:"RemovePr",payload:products.id});
    await instance.delete("/products/"+products.id)
    console.log(products);
    
  }
  const Update=async(data:any)=>{
    Vole.outry({type:"UpdatePr",payload:data})
    await instance.put(`/products/${data.id}`,data)
    console.log(data);
    location.reload();
  }
  return (
    <>
      <div className='border border-white overflow-hidden rounded-md w-[326px] ml-[40vw]'>
        <p className='text-center text-2xl rounded-t-md text-yellow-400 bg-gray-700'>{state.count} <span className='text-xl text-green-400 font-thin'>(range)</span></p>
        <Button onClick={() => dispatch({ content: "PLUS" })} variant="contained" color="info">Plus</Button>
        <Button onClick={() => dispatch({ content: "MINUS" })} variant="outlined" color="error"> Minus</Button>
        <Button onClick={() => dispatch({ content: "DOUBLE" })} variant="outlined" color="warning">Double</Button>
        <Button onClick={() => dispatch({ content: "DIVISION" })} variant="outlined" color="primary">Division </Button>
        <Button className='w-full border-none' onClick={() => dispatch({ content: "RETURN" })} variant="outlined" color="secondary">Return</Button>
      </div>
      <div className="w-[500px] bg-gray-500 rounded-md ml-[34vw] mt-5">
        <p className='text-2xl text-center text-gray-200 underline mb-5'>Dashboard</p>
        <div className="flex justify-center">
          <button className='w-96 ' onClick={()=>AddPr({name:`SP-${Math.round(Math.random()*10)}`,price:Math.floor(Math.random()*999)})}>Add Products</button>
        </div>
        <table className='w-[500px] text-center mx-auto'>
          <thead className='border-b border-white'>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Handle</th>
            </tr>
          </thead>
          <tbody>
            {Vole.intry?.data?.map((items: any) => (
              <tr key={items?.id}>
                <td>{items?.id}</td>
                <td>{items?.name}</td>
                <td>{items?.price}</td>
                <td>
                  <button onClick={()=>Remove({id:items.id})}>Remove</button>
                  <button onClick={()=>Update({name:`${items.name}-updated`,price:Math.floor(Math.random()*999),id:items.id})}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>

  )
}

export default App
