import React, { useState } from 'react'
import TodoItem from './TodoItem'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Todo = () => {
    let [state,setState]=useState("")
    let [newState,setNewState]=useState([])

    let handleChange= (e)=>{
        // console.log(e.target.value);
        setState(e.target.value)

    }

    let handleSubmit=(e)=>{
        setNewState((perVal)=>{
            return [...perVal, state]
        })
        setState("")
        e.preventDefault()
    }

    let handleDelete=(i)=>{
        setNewState(()=>{
            return newState.filter((elem, index)=>{
                return i!== index
            })
        })
    }

    let handleEdit=(i)=>{
         setNewState(()=>{
            return newState.filter((elem, index)=>{
                return i!== index
            })
        })
        
    }
  return (
    <>
        <h1 className='her'>TO-DO LIST</h1>
        
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} className='form-control w-50 mx-2' required value={state} placeholder='enter the task' />
            <button class="todoBtn" className='btn btn-info todoBtn'>Add</button>
        </form>

        <ol>
            {newState.map((elem,i)=>{
                return(
                    <TodoItem key={i} elem={elem} handleDelete={handleDelete} i={i} handleEdit={handleEdit} newState={newState}
                    handleSubmit={handleSubmit} handleChange={handleChange} state={state} />
                )

            })}
        </ol>
    </>
  )
}

export default Todo