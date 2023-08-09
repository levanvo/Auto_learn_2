import { ICar } from "../../interfaces/Car";
import { GoTrash } from "react-icons/go";
import Button from "../Button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type ItemProps = {
    car: ICar;
    onRemove: (car: ICar) => void;
    load?: boolean
};

const Item = ({ car, onRemove, load }: ItemProps) => {

    function Spin_1() {
        return <Button type="danger" onClick={() => onRemove(car)} icon={<GoTrash />} />
    }
    function Spin_2() {
        return (
            <button className="bg-red-500 p-2">
                <p className="spinDer"><AiOutlineLoading3Quarters/></p>
            </button>
        )
    }
    return (
        <li className="flex justify-between items-center p-2 border-b border-red-200">
            {car.name}
            <div>
                {load==false?Spin_1():Spin_2()}
            </div>
        </li>
    );
};

export default Item;
