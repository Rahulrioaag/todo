import React from 'react'
import Example from './editTodo'

const TodoItem = (props) => {

  let {elem, handleDelete,i, handleEdit, newState,handleSubmit,handleChange,state}=props

  return (
    <div className='toDoItem d-flex w-  mt-2'>
        <li className='list'>{elem}</li>
        <div className=''>
        <button onClick={()=>handleDelete(i)} className='btn btn-danger mx-1'>delete</button>
        <Example key={i} elem={elem} handleDelete={handleDelete} i={i} handleEdit={handleEdit} newState={newState}
                    handleSubmit={handleSubmit} handleChange={handleChange} state={state} />
        {/* <Example key={i} elem={elem} handleDelete={handleDelete} i={i} handleEdit={handleEdit} newState={newState} /> */}
        {/* <button onClick={()=>handleEdit(i)} className='btn btn-secondary'>Edit</button> */}
        </div>
    </div>
  )
}

export default TodoItem
