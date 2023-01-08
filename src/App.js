import React, { useState } from 'react'
import { Navbar } from './components/navbar/navbar'
import { Group } from './components/group/group'
import { CreateGroupForm } from './components/forms/CreateGroupForm'

function App() {
  const [showGroupForm, setShowGroupForm] = useState(false)
  const tasks1 = [
    {
      "id": 1,
      "name": "Redesign page",
      "done": null,
      "todo_id": 1,
      "created_at": "2021-04-21T00:12:06.116Z",
      "updated_at": "2021-04-21T00:12:06.116Z",
      "progress_percentage": null
    },
    {
      "id": 5,
      "name": "Bundle interplanetary analytics for improved transmission",
      "done": null,
      "todo_id": 1,
      "created_at": "2021-04-21T00:14:38.397Z",
      "updated_at": "2021-04-21T00:14:38.397Z",
      "progress_percentage": 90
    }
  ]
  const tasks2 = []
  const tasks3 = [
    {
      "id": 3,
      "name": "Data Migration: Performance & Culture End Game",
      "done": null,
      "todo_id": 1,
      "created_at": "2021-04-21T00:14:38.397Z",
      "updated_at": "2021-04-21T00:14:38.397Z",
      "progress_percentage": 10
    }
  ]
  const tasks4 = [
    {
      "id": 4,
      "name": "Bundle interplanetary analytics for improved transmission",
      "done": null,
      "todo_id": 1,
      "created_at": "2021-04-21T00:14:38.397Z",
      "updated_at": "2021-04-21T00:14:38.397Z",
      "progress_percentage": 30
    }
  ]
  return (
    <div>
      <div className="flex h-full flex-col">
        <Navbar title="Product Roadmap" onAdd={() => setShowGroupForm(true)} />
        <div className="mx-auto w-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 px-6 pb-8 md:max-w-8xl lg:px-8 short:pb-2 short:pt-2">
          <Group tasks={tasks1} />
          <Group tasks={tasks2} />
          <Group tasks={tasks3} />
          <Group tasks={tasks4}/>
        </div>
      </div>
      <CreateGroupForm visible={showGroupForm} onCancel={() => setShowGroupForm(false)} onSubmitForm={(data) => console.log(data)} />
    </div>
  );
}

export default App;
