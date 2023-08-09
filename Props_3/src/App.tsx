import { useEffect, useState,useContext } from "react";
import "./App.css";
import { Form, List } from "./components";
import { ICar } from "./interfaces/Car";
import { instance } from "./api/instance";
import { pause } from "./utils/pause";
import "react-loading-skeleton/dist/skeleton.css";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Share } from "./ShareContext";


function App() {
    const [cars, setCars] = useState<ICar[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<null>(null);
    // ====================
    const [loadingRemove, setLoadingRemove] = useState(false);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {
                await pause(1000);
                setCars(await instance.get("/cars"));
                setIsLoading(false);
            } catch (error: any) {
                setError(error.message);
                setIsLoading(false);
            }
        })();
    }, []);
    const addCar = async (car: ICar) => {
        setCars([...cars, car]);
        await instance.post("/cars", car)
    };
    const removeCar = (car: ICar) => {
        setLoadingRemove(true);
        setTimeout(async () => {
            setCars(cars.filter((item) => item.id !== car.id));
            await instance.delete(`/cars/${car.id}`)
        }, 2000);
        setTimeout(() => {
            setLoadingRemove(false);
        }, 2000);
    };

    // set  + -
    const getShare=useContext(Share);
    console.log(getShare);
    
    return (
        <div>
            <p className="text-center text-2xl">Number: <span className="text-4xl text-yellow-400 textNumber">{getShare.number}</span></p>
            <Stack sx={{display:"flex",justifyContent:"center", mb:5}} direction="row" spacing={2}>
                <Button onClick={getShare.Plus} variant="contained" color="success">Plus</Button>
                <Button onClick={getShare.Minus} variant="outlined" color="error">Minus</Button>
            </Stack>


            <div className="w-96 mx-auto border">
                <Form onAdd={addCar} />
                <List cars={cars} onRemove={removeCar} loading={isLoading} loading2={loadingRemove} />
                <hr />
                <h2>Table Component</h2>
            </div>
        </div>
    );
}

export default App;
