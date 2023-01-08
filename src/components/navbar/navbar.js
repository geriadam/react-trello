import React from 'react'
import { Button } from '../button/button'
import { PlusIcon } from '../../assets/icons/plus'

export const Navbar = ({title, onAdd}) => {
  return (
    <div className="mb-6">
      <div className="flex justify-start items-center flex-col md:flex-row p-5 short:h-auto gap-3 border-b border-gray88">
        <p className="text-xl font-bold text-center text-black-russian">{title}</p>
        <Button variant="primary" size="md" onClick={onAdd}>
          <div className="flex justify-center items-center gap-2">
            <PlusIcon />
            Add New Group
          </div>
        </Button>
      </div>
      <hr></hr>
    </div>
  )
}