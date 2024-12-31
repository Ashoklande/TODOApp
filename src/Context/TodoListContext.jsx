

import React, { createContext } from 'react'
import { useState } from 'react';

export const TodolistContext=createContext();
const TodoListContext = ({children}) => {
  const [Todolist, setTodolist] = useState([{
    Item:'react project',
    Date:'23/3/2024',
},
{
    Item:'Uber Clone',
    Date:'23/2/2024',
},
{
    Item:' Finding InterShip ',
    Date:'2/1/2025',
},
]
)
    



  return (
    <div>
       <TodolistContext.Provider value={{Todolist,setTodolist}}>
        {children}
       </TodolistContext.Provider>
    </div>
  )
}

export default TodoListContext