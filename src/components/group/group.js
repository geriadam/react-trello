import React, { useState } from 'react';
import { Label } from '../label/label'
import { PlusCircleIcon } from '../../assets/icons/plus-circle'
import { Task } from '../task/task'
import { EmptyTask } from '../task/empty'
import { CreateTaskForm } from '../forms/CreateTaskForm'

export const Group = ({
  tasks
}) => {
  const [showTaskForm, setShowTaskForm] = useState(false)
  return (
    <>
      <div className="flex flex-col items-start p-4 bg-green-lighter rounded border border-green row-span-4">
        <Label title="Group Task 1" variant="default" />
        <p className="m-0 mt-2.5 mb-2 font-bold text-xs leading-5 text-gray25">January - March</p>
        {
          tasks.length > 0 && tasks.map((item, id) => {
            return (
              <Task key={id} item={item} />
            )
          })
        }
        {
          tasks.length === 0 && <EmptyTask />
        }
        <span className="cursor-pointer flex flex-row gap-2" onClick={() => setShowTaskForm(true)}>
          <PlusCircleIcon />
          <p className="m-0 not-italic font-normal text-xs leading-5 text-black-pearl">New Task</p>
        </span>
      </div>
      <CreateTaskForm visible={showTaskForm} onCancel={() => setShowTaskForm(false)} onSubmitForm={(data) => console.log(data)} />
    </>
  );
};