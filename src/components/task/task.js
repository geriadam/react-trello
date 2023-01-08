import React, { useState } from 'react';
import { SettingIcon } from '../../assets/icons/setting'
import { ArrowRightIcon } from '../../assets/icons/arrow-right'
import { ArrowLeftIcon } from '../../assets/icons/arrow-left'
import { PencilIcon } from '../../assets/icons/pencil'
import { TrashIcon } from '../../assets/icons/trash'
import { Progress } from '../progress/progress'
import { EditTaskForm } from '../forms/EditTaskForm'
import { DeleteTask } from '../forms/DeleteTask'
import ItemsService from '../../services/items.service';

export const Task = ({ todoId, item, prev, next, onEdit, onDelete }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false)
  const [showEditForm, setShowEditForm] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [error, setError] = useState("")
  const newItem = { ...item, target_todo_id: todoId }
  function openDropdownPopover() {
    setDropdownPopoverShow(true)
  }

  function closeDropdownPopover() {
    setDropdownPopoverShow(false)
  }

  const onEditTask = async (data, targetTodoId = null) => {
    const newData = { ...data, target_todo_id: targetTodoId ?? todoId }
    try {
      const response = await ItemsService.patchItem(todoId, newData.id, newData)
      setShowEditForm(false)
      closeDropdownPopover()
      onEdit(response.data)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      setError(message)
      console.log(message)
    }
  }

  const onDeleteTask = async () => {
    try {
      const itemId = item.id
      const response = await ItemsService.deleteItem(todoId, itemId)
      setShowDeleteModal(false)
      closeDropdownPopover()
      onDelete(itemId)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      setError(message)
      console.log(message)
    }
  }

  return (
    <div className="w-full relative flex flex-col items-start p-4 bg-gray98 rounded border border-gray88 mb-3">
      <span className="pb-2 mb-2.5 border-b border-dashed border-gray88">
        <p className="m-0 font-bold text-sm leading-6 text-gray25">{item.name}</p>
      </span>
      <div className="w-full relative flex flex-row gap-4 items-center">
        <div className="w-full">
          <Progress width={item.progress_percentage} />
        </div>
        <button
          type="button"
          className="hover:bg-gray93 rounded cursor-pointer"
          onClick={() => {
            dropdownPopoverShow
              ? closeDropdownPopover()
              : openDropdownPopover();
          }}
        >
          <SettingIcon />
        </button>
      </div>
      <div className={`${dropdownPopoverShow ? "block " : "hidden "} top-full left-3/4 z-10 absolute bg-white divide-y divide-gray-100 rounded-lg drop-shadow-lg w-80 dropdown-menu`}>
        <ul className="py-3.5 px-4 text-sm" aria-labelledby="dropdownMenuIconHorizontalButton">
          {
            next !== null && (
              <li onClick={() => onEditTask(item, next.id)} className="flex flex-row justify-start items-center gap-5 mb-3 cursor-pointer dropdown-menu-primary">
                <ArrowRightIcon /><span className="font-semibold text-sm leading-6 text-gray20">Move Right</span>
              </li>
            )
          }
          {
            prev !== null && (
              <li onClick={() => onEditTask(item, prev.id)} className="flex flex-row justify-start items-center gap-5 mb-3 cursor-pointer dropdown-menu-primary">
                <ArrowLeftIcon /><span className="font-semibold text-sm leading-6 text-gray20">Move Left</span>
              </li>
            )
          }
          <li className="flex flex-row justify-start items-center gap-5 mb-3 cursor-pointer dropdown-menu-primary" onClick={() => setShowEditForm(true)}>
            <PencilIcon /><span className="font-semibold text-sm leading-6 text-gray20">Edit</span>
          </li>
          <li className="flex flex-row justify-start items-center gap-5 mb-3 cursor-pointer dropdown-menu-danger" onClick={() => setShowDeleteModal(true)}>
            <TrashIcon /><span className="font-semibold text-sm leading-6 text-gray20">Delete</span>
          </li>
        </ul>
      </div>
      <EditTaskForm visible={showEditForm} onCancel={() => setShowEditForm(false)} onSubmitForm={(data) => onEditTask(data)} data={newItem} />
      <DeleteTask visible={showDeleteModal} onCancel={() => setShowDeleteModal(false)} onDelete={() => onDeleteTask()} />
    </div>
  );
};