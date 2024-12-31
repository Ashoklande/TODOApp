import React from 'react';



const ListComponent = (props) => { 
  return (
    <div>
         <div className='flex  items-center mt-4  gap-6 justify-center'>
          <h4 className='text-lg font-medium break-words w-1/3 '>{props.value.Item}</h4>
          <h4 className='text-lg font-medium w-1/2 '>{props.value.Date}</h4>
          <button onClick={()=>{
            props.RemoveItem(props.value.Item)
          }} className='text-white text-base rounded-lg w-3/3 bg-red-600 px-4 py-3 font-semibold'>Delete</button>
        </div>
    </div>
  )
}

export default ListComponent