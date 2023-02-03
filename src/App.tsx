import { Header } from "./components/header";
import { Input } from "./components/Input";
import { List } from "./components/List";
import { EmptyList } from "./components/EmptyList";
import { TaskCounter } from "./components/TaskCounter";
import { CreateButton } from "./components/CreateButton";
import { useEffect, useState } from 'react'
import { v4 as uuidV4 } from 'uuid'


import'./global.css';

interface Task{
  id:string
  content:string
  done:boolean
}

export function App(){


  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskText,setNewTaskText] = useState('')

  function handleCreateNewTask(e:any){
    const newTask = {
      id:uuidV4(),
      content:newTaskText,
      done:false
    }

   setTasks(state =>[...state, newTask ])
   setNewTaskText('')
   e.preventDefault()
  }

  const handleOnChange = function(id:any){
     tasks.map((task) => {
      if(id === task.id){
        task.done = !task.done
      }
    })
    setTasks(state => [...state])
  }

 
  const completedTasks = tasks.filter(task => task.done === true).length

  return (
    <div>
      <Header />
      <main>
        <form 
         onSubmit={handleCreateNewTask}
         className="inputContainer">
          <Input
           onChange={(e => setNewTaskText(e.target.value))}
           value={newTaskText}
          />
          <CreateButton  />
        </form>
        <div className="tasks">
          <div className="info">
            <TaskCounter  task={'Tarefas criadas'} quantity = {tasks.length}/>
            <TaskCounter  task ={'Concluídas'} quantity={completedTasks + " de " + tasks.length }/>
          </div>
          <div>
            {
              tasks.map((task) => {
                return (
                  <List
                    id={task.id}
                    key = {task.id}
                    content={task.content}
                    onChange={() => handleOnChange(task.id)}
                    checked={task.done}
                  />
                )
              })
            }
            {tasks.length === 0 && (
                <EmptyList />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
