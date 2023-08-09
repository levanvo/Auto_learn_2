import { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Share } from '../../App';
import { GoTrash } from "react-icons/go"
import { RxUpdate } from "react-icons/rx"

const List = ({DataOk}:any) => {
  const getData: any = useContext(Share);
  const [get, set] = useState([]);
  useEffect(() => {
    set(getData.getData);
  }, [getData.getData]);

  const Remove = (id: any) => {
    const ok = get.filter((item: any) => item.id != id)
    set(ok);
  };
  DataOk(get);
  
  return (
    <div>
      <h2>------------ List Table ------------</h2>
      <table className='w-[440px] mt-6 rounded-md border border-white'>
        <thead>
          <tr className='bg-gray-600 text-yellow-500'>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Handle</th>
          </tr>
        </thead>
        <tbody>
          {get?.map((data: any) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.price}</td>
              <td>
                <button onClick={() => Remove(data.id)} className='active:scale-90 duration-100 border-none bg-red-500'><GoTrash /></button>
                <Link to={`/Update/${data.id}`} className='text-white hover:text-white'>
                  {/* <a href={`/Update/${data.id}`} className='text-white hover:text-white'> */}
                  <button className='active:scale-90 duration-100 border-none bg-blue-500'><RxUpdate /></button>
                  {/* </a> */}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default List
