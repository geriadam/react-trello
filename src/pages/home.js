import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Navbar } from '../components/navbar/navbar'
import { Group } from '../components/group/group'
import { CreateGroupForm } from '../components/forms/CreateGroupForm'
import TodosService from '../services/todos.service'
import ItemsService from '../services/items.service'

function HomePage() {
  const [showGroupForm, setShowGroupForm] = useState(false);
  const [indicator, setIndicator] = useState(null);
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = () => {
      TodosService.getTodoLists().then(
        response => {
          setError("");
          setTodos(response.data);
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

  const onAddGroup = async (data) => {
    try {
      const response = await TodosService.postTodo(data)
      setTodos([...todos, response.data])
      setShowGroupForm(false)
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

  const onDragEnd = async (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const updatedData = { target_todo_id: destination.droppableId }
      try {
        const response = await ItemsService.patchItem(source.droppableId, source.index, updatedData)
        setIndicator(Math.floor(Math.random() * 100))
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
  }

  return (
    <div>
      <div className="flex h-full flex-col">
        <Navbar title="Product Roadmap" onAdd={() => setShowGroupForm(true)} />
        <div className="mx-auto w-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 px-5 pb-8 md:max-w-8xl short:pb-2 short:pt-2">
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result)}
          >
            {
              todos &&
              todos.length > 0 &&
              todos.map((todo, i) => (
                <Droppable key={todo.id} droppableId={todo.id.toString()}>
                  {(provided, snapshot) => (
                    <Group
                      key={i}
                      provided={provided}
                      todo={todo}
                      prev={todos[i - 1] ?? null}
                      next={todos[i + 1] ?? null}
                      indicator={indicator}
                      setIndicator={setIndicator}
                    />
                  )}
                </Droppable>
              ))
            }
          </DragDropContext>
        </div>
      </div>
      <CreateGroupForm visible={showGroupForm} onCancel={() => setShowGroupForm(false)} onSubmitForm={(data) => onAddGroup(data)} />
    </div>
  );
}

export default HomePage;
