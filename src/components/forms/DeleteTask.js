import React from 'react';
import { Button } from '../button/button'

export const DeleteTask = ({
  visible,
  onCancel,
  onDelete
}) => {
  return (
    <div tabIndex="-1" className={`${visible ? "block" : "hidden"} bg-gray25 bg-opacity-50 inset-0 fixed top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}>
      <div className="relative flex justify-center items-center h-full">
        <div className="relative bg-white rounded-lg shadow" style={{ width: 420 }}>
          <div className="flex items-center justify-between p-6 rounded-t">
            <div className='flex items-center gap-2'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9V11M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z" stroke="#E11428" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="font-bold text-lg leading-7 flex items-center text-black-pearl">
                Delete Task
              </h3>
            </div>
            <button onClick={onCancel} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="create-task-modal">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="px-6">
            <div className='mb-4'>
              <p className='m-0 font-normal text-sm leading-6 text-gray25'>Are you sure want to delete this task? your action can’t be reverted.</p>
            </div>
          </div>
          <div className="flex justify-end items-center px-6 pb-6 space-x-2  rounded-b">
            <Button type="button" variant="default" size="lg" onClick={onCancel}>Cancel</Button>
            <Button type="submit" variant="danger" size="lg" onClick={() => onDelete()}>Delete</Button>
          </div>
        </div>
      </div>
    </div>
  );
};