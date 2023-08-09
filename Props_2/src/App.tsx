import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Form from './Component/Form/Form';
import Input from './Component/Input/Input';
import Button from './Component/Button/Button';
import { createContext, useEffect, useState } from 'react';
import List from './Component/List/List';
import { Routes, Route } from 'react-router-dom';
import Update from './Component/List/Update';



export const Share = createContext<any>({} as any);
function App() {
  // const [status,setStatus]:any=useState(false);
  
  // data Main
  const [getData, setData] = useState(
    [
      { id: 1, name: "Car-1", price: 111 },
      { id: 2, name: "Car-2", price: 222 },
      { id: 3, name: "Car-3", price: 333 }
    ]
  );
  const [dataOk, setdataOk] = useState(getData);

  // data add
  function GetDataAdd(data: { id: number | string, name: string, price: number }) {
    setData([...getData, { ...data, id: Math.round(Math.random() * 999) }]);
  };
  // data remove
  function GetDataRemove(data: any) {
    setdataOk(data);
  };
  // Warning: data update (loi update khi ta muon set lai data Main: da check 4 cach)
  function GetDataUpdate(data:any){
    const reNew=getData.filter((item:any)=>item.id!=data.id);
    reNew.push(data);
    // setData(reNew);

    // setdataOk(reNew);

    // useEffect(()=>{
    //   setData(reNew)
    // },[reNew]);

    // useEffect(() => {
    //   if (!status) {
    //     setData(reNew);
    //     setStatus(true);
    //   }
    // }, [status]);
    console.log(reNew);
  };

  const KeyData = {
    getData,
    Input,
    Button
  }
// ham none (xet sau khi update se ve trang chu ==> thong qua function nay, neu thay function None -> function List cung Ok nhung khong thẩm mĩ do 'table*2')
  function None() {
    return (<></>)
  }

  return (
    <Share.Provider value={KeyData}>
      <Form DataForm={GetDataAdd} />
      <List DataOk={GetDataRemove} />
      <Routes>
        <Route path='/' element={<None />} />
        <Route path='Update/:id' element={<Update xemData={dataOk} updateForm={GetDataUpdate}/>} />
      </Routes>
    </Share.Provider>
  );
};

export default App
