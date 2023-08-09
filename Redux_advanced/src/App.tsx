import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
// import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from 'redux';
import { Action_appTS, addProduct1, removeProduct1, updateProduct1 } from "./Action_store/Action_appTS"


function App() {
  const dispatch: Dispatch<any> = useDispatch();
  const { products, isLoading, error } = useSelector((state: any) => state.products);
  const [getTime, setTime] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTime(true);
    }, 500);
    setTime(false);
    dispatch(Action_appTS());
  }, []);
  // console.log(products.data);
  const addProduct = async (product: any) => {
    dispatch(addProduct1(product));
    location.reload()
  }
  const updateProduct = async (product: any) => {
    dispatch(updateProduct1(product));
    location.reload()
  }
  const removeProduct = async (product: any) => {
    dispatch(removeProduct1(product));
    location.reload()
  }


  // if (isLoading) return <Skeleton count={3} height={35} />;
  // if (error) return <div>{error}</div>;

  function susi() {
    if (getTime == false) {
      return (
        <Stack spacing={2}>
          <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
          <div className="flex justify-center space-x-10">
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="circular" width={40} height={40} />
          </div>
          <Skeleton variant="rectangular" width={610} height={60} />
          <Skeleton variant="rounded" width={610} height={60} />
        </Stack>
      )
    }
    return (
      <div className="">
        <p className='mb-7 text-2xl text-sky-400'>Redux_thunk + store</p>
        <button className='mx-auto w-96' onClick={() => addProduct({ name: "Product-" + Math.floor(Math.random() * 99) })}>Add</button>
        <table className='text-center mx-auto w-[700px]'>
          <thead className='border-b border-white'>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Handle</th>
            </tr>
          </thead>
          <br />
          <tbody>
            {products?.data?.map((item: any) => {
              return <tr key={item.id} className='mb-2'>

                <td className='text-yellow-400'>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <button onClick={() => updateProduct({ name: item.name + " updated ", id: item.id })}>Update</button>
                  <button onClick={() => removeProduct({ id: item.id })}>Remove</button>
                </td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    )


  }
  return (
    susi()
  )
}

export default App
