import React, { useState } from 'react'
import { ToDoform } from './ToDoform'
import { v4 as uuidv4 } from 'uuid';
import { ToDo } from './ToDo';
import { EditTodoform } from './EditTodoform';
uuidv4();
export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])
    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
        console.log(todos);
    }
    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, completed: !todo.completed
        } : todo))
    }
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const editTodo = id =>{
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, isEditing: !todo.isEditing} : todo
        ))
    }
    const editTask= (task, id)=>{
        setTodos(todos.map(todo => todo.id ===id ? {...todo, task, isEditing: !todo.isEditing} : todo ))
    }
    return (
        <div className='TodoWrapper'>
            <h1>Get things done!</h1>
            <ToDoform addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoform editTodo={editTask} task={todo}/>
                ): (
            <ToDo task={todo} key={index} 
            toggleComplete={toggleComplete} 
            deleteTodo={deleteTodo} 
            editTodo={editTodo}/>
        )

            ))

            }

        </div>
    )
}