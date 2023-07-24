import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'animate.css';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from "react-redux"
import { instance } from './Redux/Api'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CartData from './Redux/cart';

function App() {
  const [getValue, setValue] = useState(1);
  const dispatch = useDispatch();
  const { products } = useSelector((states: any) => states.products);
  console.log(products);
  const ok = CartData();
  // +++++++Products
  useEffect(() => {
    const fetch = async () => {
      const { data } = await instance.get("/products");
      dispatch({ type: "fetchProducts", payload: data })
    };
    fetch();
  }, []);

  const AddProduct = async () => {
    if(products.length<1){
      const data = await instance.post("/products", {
      id: 1,
      name: "Product-" + Math.floor(Math.random() * 33),
      price: Math.floor(Math.random() * 9999),
      available: Math.floor(Math.random() * 99),
    });
    dispatch({ type: "addProduct", payload: data });
    }else{
      const data = await instance.post("/products", {
      id: products[products.length - 1].id + 1,
      name: "Product-" + Math.floor(Math.random() * 33),
      price: Math.floor(Math.random() * 9999),
      available: Math.floor(Math.random() * 99),
    });
    dispatch({ type: "addProduct", payload: data });
    }
  };
  const UpdateProduct = async (data: any) => {
    const data2 = await instance.put(`/products/${data.id}`, {
      id: data.id,
      name: data.name + " - updated",
      price: Math.floor(Math.random() * 9999),
      available: Math.floor(Math.random() * 99),
    });
    dispatch({ type: "updateProduct", payload: data2 });
  };
  const RemoveProduct = async (id: any) => {
    let okk = true;
    ok.map((item: any) => {
      if (item.id == id) {
        okk = false;
      }
    });
    if (okk) {
      await instance.delete(`/products/${id}`);
      dispatch({ type: "deleteProduct", payload: id });
    } else {
      await instance.delete(`/products/${id}`);
      await instance.delete(`/carts/${id}`);
      dispatch({ type: "deleteProduct", payload: id });
      dispatch({ type: "deleteCart", payload: id });
    };
  };
  // +++++++Carts
  useEffect(() => {
    const fetch = async () => {
      const { data } = await instance.get("/carts");
      dispatch({ type: "fetchCart", payload: data })
    };
    fetch();
  }, []);
  const AddCartProduct = async (data: any) => {
    let okk = true;
    ok.map((item: any) => {
      if (item.id == data.id) {
        alert("Giỏ hàng đã có, hãy mua SP mới ?!");
        okk = false;
      };
    });
    if (okk) {
      await instance.post(`/carts`, { ...data, quantity: 1 });
      dispatch({ type: "addCart", payload: { ...data, quantity: 1 } });
    };
  };
  const RemoveCartProduct = async (id: any) => {
    await instance.delete(`/carts/${id}`);
    dispatch({ type: "deleteCart", payload: id });
  };
  const Plus = async (id: any) => {
    dispatch({ type: "PlusCart", payload: id });

  };
  const Minus = async (id: any) => {
    dispatch({ type: "MinusCart", payload: id });

  };
  // const BuyCart = async (data: any) => {
  //   if (getValue < 1) {
  //     const decide = window.confirm("Giới hạn dưới 1(SP), bạn muốn xóa ??");
  //     if (decide) {
  //       await instance.delete(`/carts/${data.id}`);
  //       dispatch({ type: "deleteCart", payload: data.id });
  //     }
  //   } else if (getValue > data.available) {
  //     window.confirm(`Giới hạn trên ${data.available}(SP), không đủ hàng tồn kho !!`);
  //     return;
  //   } else {
  //     alert(`Buy: "${data.name}" -->Your total is: ${data.price * getValue} (VND)`);
  //   }
  // };
  const ResultPayment=()=>{
    const Payment=ok?.reduce(function result (sum: any, item: any) {
      return sum + item.price * item.quantity;
    },0)
    alert(`Your bills: `+ Payment+ ` (VND)`);
    
  }
  return (
    <>
      {/* Show Cart */}
      <div className="flex justify-center space-x-2">
        <input type="checkbox" hidden id='cart' />
        <Button onClick={() => AddProduct()} variant='contained' color="info" sx={{ fontFamily: "sussi" }}>Add-product</Button>
        <label htmlFor="cart" className='bg-gray-600 p-2 pl-2 pr-2 rounded-md cursor-pointer active:scale-90 duration-100'><ShoppingCartIcon /> {ok.length}</label>
        <div className="dataCart w-[600px] text-gray-700 rounded-md font-medium bg-white">
          <p className='bg-green-500 font-bold text-2xl text-white mb-3 rounded-t-md'>My Cart</p>
          {ok.length != 0 ?
            ok?.map((items: any) => (
              <div className=" border-b border-yellow-500" key={items.id}>
                <div className="flex">
                  <div className="w-[200px]">{items.name}</div>
                  <div className="w-[200px]">{items.price} <span className='text-red-500'>(VND)</span></div>
                  <div className="w-[200px]">{items.available} <span className='text-yellow-500 font-normal'>(available)</span></div>
                  <div className="w-[100px]">
                    <button onClick={() => RemoveCartProduct(items.id)} className='bg-red-500 rounded-md text-white w-[100px] h-10 leading-3'>Remove</button>
                  </div>
                </div>
                <div className="flex justify-center text-white font-bold">
                  <button onClick={() => Minus(items.id)} className='active:scale-90 h-10 leading-5'>-</button>
                  <button onClick={() => Plus(items.id)} className='active:scale-90 h-10 leading-5'>+</button>
                  <p className='text-black leading-10 ml-3'>{items.quantity}</p>
                  {/* <button onClick={() => BuyCart(items)} className='rounded-l-none rounded-r-md bg-sky-500 active:scale-90 h-10 leading-5'>Buy</button> */}
                </div>
              </div>
            )) : <p className='text-red-400 animate__animated animate__flash animate__infinite'>Gian hàng của bạn đang trống, GoShop ngay nào !</p>}

          <div className="flex justify-center space-x-2">
            <button onClick={()=>ResultPayment()} className='w-44 bg-sky-500 text-white font-bold active:scale-90'>Pay</button>
            <p className='mt-2'>Total: {
              ok?.reduce(function result (sum: any, item: any) {
                return sum + item.price * item.quantity;
              },0)
            } (VND)</p>
          </div>
        </div>
      </div>
      {/* Show products */}
      <table className='w-[700px] mx-auto text-center'>
        <thead className='border-b border-white'>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Handle</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((items: any) => (
            <tr key={items.id} className='hover:bg-gray-700'>
              <td className='text-green-500'>{items.id}</td>
              <td>{items.name}</td>
              <td>{items.price} <span className='text-orange-500'>(VND)</span></td>
              <td>{items.available}</td>
              <td>
                <Button onClick={() => RemoveProduct(items.id)} sx={{ margin: "5px 5px 5px 0" }} variant="contained" color="error">Remove</Button>
                <Button onClick={() => UpdateProduct(items)} sx={{ margin: "0px 5px 0px 0" }} variant="contained" color="success">Update</Button>
                <Button onClick={() => AddCartProduct(items)} variant="contained" color="secondary"><AddShoppingCartIcon /></Button>
              </td>
            </tr>

          ))}
        </tbody>
      </table>
    </>
  )
}

export default App;
