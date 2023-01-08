import React from 'react';

export const TextareaField = ({ label, name, register, required, ...restProps }) => {
  return (
    <>
      <label className="font-bold text-xs leading-5 flex items-center text-gray25 mb-2">{label}</label>
      <textarea 
        className='bg-white border-2 border-gray93 text-gray25 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-4 mt-0'
        {...register(name, { required })}
        {...restProps}
      />
    </>
  );
};