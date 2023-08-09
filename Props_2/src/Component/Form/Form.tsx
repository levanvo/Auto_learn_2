import { useContext, useState } from 'react';
import { Share } from '../../App';

type Pop={
  DataForm:(data:any)=>void
}

const Form = ({DataForm}:Pop) => {
  const [getTemporary, setTemporary]:any = useState({
    name: "",
    price: 0
  });
  const useHook: any = useContext(Share);
  const GetValue_Input = (e: any) => {
    const name=e.target.name;
    const price=e.target.value;
    setTemporary({...getTemporary,[name]:price});
  };

  const AddNew=(e:any)=>{
    e.preventDefault();
      if (Object.keys(getTemporary).some(key1 => getTemporary[key1] == "")) {
        alert("Form empty ?");
      }else{
        DataForm(getTemporary);
        e.target.reset();
        setTemporary({
          name: "",
          price: 0
        });
      };
  };
  
  return (
    <div>
      <p>note: <span className='text-xs text-red-500'>input is different from the repository data</span></p>
      <form onSubmit={AddNew} className='flex space-x-2'>
        <div className="">
          <useHook.Input ChangeInput={GetValue_Input} />
        </div>
        <div className="">
          <useHook.Button />
        </div>
      </form>
    </div>
  )
}

export default Form
