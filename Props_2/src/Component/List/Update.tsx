import { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const Update = ({ xemData,updateForm }: any) => {
    // const [getAllData, setAllData]: any = useState(xemData);
    const [getOneData, setOneData]: any = useState({});
    const [getTemporary, setTemporary]: any = useState({
        name:"",
        price:0
    });
    
    const id = Number(useParams().id);
    const navigate=useNavigate();
    useEffect(() => {
        xemData?.map((item: any) => {
            if(item.id==id){
                setOneData(item);
            }
        });
    }, [xemData]);
    
    const ChangeInput = (e: any) => {
        const name = e.target.name;
        const price = e.target.value;
        setTemporary({ ...getTemporary, [name]: price });
    };
    const UpdateForm=(e:any)=>{
        e.preventDefault();
        setOneData({...getTemporary,id:id});
    };
    function Comeback(){
        navigate("/");
    };
    updateForm(getOneData);    
    return (
        <>

            <h2 className='text-center mt-5 text-2xl text-green-500 font-bold'>Update: <span className='text-yellow-500 text-xl'>{getOneData.name}</span> <span className='text-sm text-red-500 font-normal'> (reload page to change name update) </span></h2>
            <form onSubmit={UpdateForm}>
                <div className="">
                    {/* value={getOneData.name} */}
                    <input type="text"  name='name' onChange={ChangeInput} placeholder='name...?' className='w-72 h-8 rounded-sm mb-1 shadow-inner shadow-gray-400 outline-0 pl-2' />
                    <br />
                     {/* value={getOneData.price} */}
                    <input type="number" name='price' onChange={ChangeInput} placeholder='price...?' className='w-72 h-8 rounded-sm mb-1 shadow-inner shadow-gray-400 outline-0 pl-2' />
                </div>
                <p className='text-xs text-red-500'>info input error !</p>
                <div className="flex justify-center">
                    <button>Ok</button>
                    <button onClick={Comeback}>Back</button>
                </div>
            </form>
        </>
    )
}

export default Update
