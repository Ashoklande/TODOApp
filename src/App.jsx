import React, { useContext } from 'react'
import AddList from './Components/AddList'
import ListComponent from './Components/ListComponent'
import { TodolistContext } from './Context/TodoListContext'

const App = () => {

  const {Todolist,setTodolist}=useContext(TodolistContext)
  console.log(Todolist);
  
//Adding new Item into existing Array of List 
  const newTodolist=(item)=>{
    setTodolist([item,...Todolist]);
  }

  //Remove Item from list 
  const RemoveItem=(item)=>{
    const filteredArray = Todolist.filter(obj => obj.Item !== item);
    setTodolist([...filteredArray]);
  }
  
  return (
   <>
    <div className='w-full flex flex-col items-center justify-center'>
    <h1 className='text-3xl font-semibold mt-2 '>TODO App</h1>

     <div className='w-2/5 p-3 ' >
   <AddList newTodolist={newTodolist} />
   </div>

      <div className='w-full p-3' >
       {
       Todolist.map(function(ele){
       return <ListComponent RemoveItem={RemoveItem} value={ele}/>
       })
       }
      </div>

    </div>
  
   
   </>
  )
}

export default App