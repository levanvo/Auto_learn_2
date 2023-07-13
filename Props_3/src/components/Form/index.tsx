import { useState } from "react";
import { Button, Input } from "..";
import { AiOutlinePlus, AiFillCamera, AiOutlineLoading3Quarters } from "react-icons/ai";
import { ICar } from "../../interfaces/Car";

type FormProps = {
    onAdd: (car: ICar) => void;
};

const Form = ({ onAdd }: FormProps) => {
    const [valueInput, setValueInput] = useState<string>("");
    const [getLoading, setLoading] = useState<boolean>(true);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (valueInput !== "") {
            setLoading(false);
            setTimeout(() => {
                onAdd({
                    id: Math.floor(Math.random() * 1000),
                    name: valueInput,
                });

                const form = e.target as HTMLFormElement;
                form.reset();
                setValueInput("");
            }, 2000);

        }
        setTimeout(() => {
            setLoading(true);
        }, 2000)
    };

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.target.value);
    };

    function Loading1() {
        return <Button type="primary" icon={<AiOutlinePlus />} />
    }
    function Loading2() {
        return (
            <button className="bg-blue-500 p-2">
                <p className="spinDer"><AiOutlineLoading3Quarters/></p>
            </button>
        )
    }
    return (
        <form onSubmit={onSubmit} className="border-b mb-3 p-3 flex justify-between items-center">
            <Input placeholder="Car Name" onChange={onHandleChange} prefix={<AiFillCamera />} />
            {getLoading == true ? Loading1() : Loading2()}
        </form>
    );
};

export default Form;
