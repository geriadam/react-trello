import React, { useState, useEffect } from 'react';
import { Label } from '../label/label'
import { PlusCircleIcon } from '../../assets/icons/plus-circle'
import { Task } from '../task/task'
import { EmptyTask } from '../task/empty'
import { CreateTaskForm } from '../forms/CreateTaskForm'
import ItemsService from '../../services/items.service'

export const Group = ({ provided, todo, prev, next, indicator, setIndicator }) => {
  const { id, title, description } = todo
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState("");
  const [showTaskForm, setShowTaskForm] = useState(false)

  const sortTasks = (tasks) => {
    const newTasks = tasks.sort((a, b) => { return Date.parse(b.updated_at) - Date.parse(a.updated_at) })
    setTasks(newTasks);
  }

  useEffect(() => {
    const loadData = () => {
      ItemsService.getItemList(id).then(
        response => {
          setError("");
          sortTasks(response.data)
        },
        error => {
          setError((error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString())
        }
      );
    }

    loadData();
  }, [indicator])

  const onAddTask = async (data) => {
    try {
      const response = await ItemsService.postItem(id, data)
      sortTasks([...tasks, response.data])
      setShowTaskForm(false)
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

  const onEditTask = (data) => {
    const copyTasks = [...tasks]
    const targetIndex = tasks.findIndex(f => f.id === data.id)
    copyTasks[targetIndex] = data
    sortTasks(copyTasks)
    setIndicator(Math.floor(Math.random() * 100))
  }

  const onDeleteTask = (id) => {
    const copyTasks = tasks.filter(task => task.id !== id);
    sortTasks(copyTasks)
  }

  return (
    <>
      <div className="flex flex-col items-start p-4 bg-green-lighter rounded border border-green row-span-4">
        <Label title={title} variant="default" />
        <p className="m-0 mt-2.5 mb-2 font-bold text-xs leading-5 text-gray25">{description}</p>
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {
            tasks &&
            tasks.length > 0 &&
            tasks.map((item, id) => (
              <Task
                key={id}
                todoId={todo.id}
                item={item}
                onEdit={onEditTask}
                onDelete={onDeleteTask}
                prev={prev}
                next={next}
              />
            ))
          }
          {provided.placeholder}
        </div>
        {
          tasks.length === 0 && <EmptyTask />
        }
        <span className="cursor-pointer flex flex-row gap-2" onClick={() => setShowTaskForm(true)}>
          <PlusCircleIcon />
          <p className="m-0 not-italic font-normal text-xs leading-5 text-black-pearl">New Task</p>
        </span>
      </div>
      <CreateTaskForm visible={showTaskForm} onCancel={() => setShowTaskForm(false)} onSubmitForm={(data) => onAddTask(data)} />
    </>
  );
};