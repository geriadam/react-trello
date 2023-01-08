import React from 'react';
import { useForm } from "react-hook-form"
import { Button } from '../button/button'
import { InputField } from './fields/input'
import { TextareaField } from './fields/textarea';

export const CreateGroupForm = ({
  visible,
  onCancel,
  onSubmitForm
}) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => onSubmitForm(data);
  return (
    <div tabIndex="-1" className={`${visible ? "block" : "hidden"} bg-gray25 bg-opacity-50 inset-0 fixed top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}>
      <div className="relative flex justify-center items-center h-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative bg-white rounded-lg shadow" style={{ width: 420 }}>
            <div className="flex items-center justify-between p-6 rounded-t">
              <h3 className="font-bold text-lg leading-7 flex items-center text-black-pearl">
                Add New Group
              </h3>
              <button onClick={onCancel} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="create-task-modal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6L18 18" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="px-6">
              <div className='mb-4'>
                <InputField label="Title" name="title" register={register} required placeholder="Title" />
              </div>
              <div className='mb-4'>
                <TextareaField label="Description" name="description" register={register} required placeholder="lorem ipsum dolor sit amet consectetur adipiscing elit"/>
              </div>
            </div>
            <div className="flex justify-end items-center px-6 pb-6 space-x-2  rounded-b">
                <Button type="button" variant="default" size="lg" onClick={onCancel}>Cancel</Button>
                <Button type="submit" variant="primary" size="lg">Save Task</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};