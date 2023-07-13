
import { ICar } from "../../interfaces/Car";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Item from "../Item";

type ListProps = {
    cars: ICar[];
    onRemove: (car: ICar) => void;
    loading?: boolean;
    loading2?:boolean
};

const List = ({ cars, onRemove, loading ,loading2}: ListProps) => {
    return (
        <>
            {loading ? (
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton count={5} height={35} />
                </SkeletonTheme>
            ) : (
                <ul>
                    {cars?.map((car: ICar) => (
                        <Item load={loading2} key={car.id} car={car} onRemove={onRemove} />
                    ))}
                </ul>
            )}
        </>
    );
};

export default List;
