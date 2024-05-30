import React, {useState} from 'react'
export const EditTodoform = ({editTodo, task}) => {
    const [value, setValue ] = useState(task.task)
    const handleSubmit= e =>{
        e.preventDefault();
        editTodo(value, task.id);
        setValue("")
    }
    return (
        <form className='ToDoform' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' value={value} placeholder='Update tasks' onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
    )
}