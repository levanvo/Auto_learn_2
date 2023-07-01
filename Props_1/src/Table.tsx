import React, { useState } from 'react'

type Pop = {
    dataCar: any[],
    dataMoto: any[],
    dataFood: any[],
}
const Table = ({ dataCar, dataMoto, dataFood }: Pop) => {
    const [dataMain,setdataMain]=useState(dataCar)
    const arrayTitle = [//Data - thead
        {
            id: 1,
            name: "Name-Car",
            price: "Price-Car"
        },
        {
            id: 2,
            name: "Name-Moto",
            price: "Price-Moto"
        },
        {
            id: 3,
            name: "Name",
            status: "Status",
            quantity: "Quantity"
        }
    ]



    let title: any = [];
    let title2: any = "";
    const renderTable1: any = dataMain.map((item: any) => {
        if (item.key == "Car") {
            return (
                <tr key={item.id} className='text-green-600 justify-center flex space-x-2'>
                    <td className='w-[191px]'>{item.id}</td>
                    <td className='w-[191px]'>{item.name}</td>
                    <td className='w-[191px]'>{item.price}</td>
                </tr>
            )
        } else if (item.key == "Moto") {
            return (
                <tr key={item.id} className='text-sky-600 justify-center flex space-x-2'>
                    <td className='w-[191px]'>{item.id}</td>
                    <td className='w-[191px]'>{item.name}</td>
                    <td className='w-[191px]'>{item.price}</td>
                </tr>
            )
        } else {
            return (
                <tr key={item.id} className='text-orange-600 justify-center flex space-x-2'>
                    <td className='w-[200px]'>{item.id}</td>
                    <td className='w-[200px]'>{item.name}</td>
                    <td className='w-[200px]'>{item.status}</td>
                    <td className='w-[200px]'>{item.quantity}</td>
                </tr>
            )
        };
    });

    const renderTable2: any = dataMain.map((item: any) => {
        if (item.key == "Car") {
            title2=title2=<h1 className='text-4xl text-center mt-10 mb-5 text-green-500'>Car</h1>;
            for (let ok in arrayTitle[0]) {
                title.push(ok);
            }
            return title = Array.from(new Set(title));

        } else if (item.key == "Moto") {
            title2=<h1 className='text-4xl text-center mt-10 mb-5 text-sky-500'>Moto</h1>;
            for (let ok in arrayTitle[1]) {
                title.push(ok);
            }
            return title = Array.from(new Set(title));

        } else {
            title2=<h1 className='text-4xl text-center mt-10 mb-5 text-orange-500'>Food</h1>;
            for (let ok in arrayTitle[2]) {
                title.push(ok);
            };
            return title = Array.from(new Set(title));
            
        };
    });
    const Car=()=>{
        setdataMain ( dataCar);
    }
    const Moto=()=>{
        setdataMain ( dataMoto);
    }
    const Food=()=>{
        setdataMain ( dataFood);
    }
    return (
        <div>
            <div className="flex space-x-10 justify-center">
                <button onClick={Car}>
                    <img className='w-[300px] active:scale-90 duration-100 h-[190px]' src="https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=612x612&w=0&k=20&c=ecrvXZhimUHnYES-kx7L5b-TDtRU5kAFPpNm0ZtAp1Y=" alt="" />
                </button>
                <button onClick={Moto}>
                    <img className='w-[300px] active:scale-90 duration-100 h-[190px]' src="https://vnn-imgs-f.vgcloud.vn/2019/04/24/10/top-10-moto-nhanh-nhat-nam-2019.jpg" alt="" />
                </button>
                <button onClick={Food}>
                    <img className='w-[300px] active:scale-90 duration-100 h-[190px]' src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Hamburger_%2812164386105%29.jpg" alt="" />
                </button>
            </div>
            <h1 className='text-4xl text-center'>{title2}</h1>
            {/* <table className='w-[400px] text-center mx-auto'>
                <thead>
                    <tr> */}
            <div className="w-[400px] flex justify-center  mx-auto">
                {title.map((item: any) => {
                    return <p key={Math.random()*9999} className='px-[82.5px] bg-gray-500 text-white font-bold'>{item}</p>
                })}
            </div>
            {/* </tr>
                </thead>
                <tbody> */}
            {renderTable1}
            {/* </tbody>
            </table> */}
        </div>
    )

}
export default Table;
//Table not good !!!