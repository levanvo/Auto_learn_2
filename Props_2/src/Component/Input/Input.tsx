import React from 'react'

const Input = ({ ChangeInput }: any) => {

  return (
    <>
      <input type="text" onChange={ChangeInput} className='w-96 h-8 rounded-sm mb-1 shadow-inner shadow-gray-400 outline-0 pl-2' placeholder=' name...?' name='name' />
      <br />
      <input type="number" onChange={ChangeInput} min={1} className='w-96 h-8 rounded-sm shadow-inner shadow-gray-400 outline-0 pl-2' placeholder=' price...?' name='price' />
    </>
  );
};

export default Input
