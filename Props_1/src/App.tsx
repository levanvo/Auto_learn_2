import "./App.css";
import Table from "./Table";
import { useState } from "react";

const dataCarr = [
    { id: 1, name: "Car-1", price: 123, key: "Car" },
    { id: 2, name: "Car-2", price: 456, key: "Car" },
    { id: 3, name: "Car-3", price: 789, key: "Car" }
]
const dataMotoo = [
    { id: 1, name: "Moto-1", price: 111, key: "Moto" },
    { id: 2, name: "Moto-2", price: 222, key: "Moto" },
    { id: 3, name: "Moto-3", price: 333, key: "Moto" }
]
const dataFoodd = [
    { id: 1, name: "Food-1",status:"Ngon", quantity: 111, key: "Food" },
    { id: 2, name: "Food-2",status:"Khong Ngon", quantity: 222, key: "Food" },
    { id: 3, name: "Food-3",status:"Ngon", quantity: 333, key: "Food" }
]
function App() {
    const [getdataCar, setdataCar] = useState(dataCarr);
    const [getdataMoto, setdataMoto] = useState(dataMotoo);
    const [getdataFood, setdataFood] = useState(dataFoodd);

    return (
        <>
            <Table dataCar={getdataCar} dataMoto={getdataMoto} dataFood={getdataFood}/>
        </>
    );
};

export default App;
