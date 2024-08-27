"use client"

import { TrashIcon } from "@heroicons/react/24/outline"
import { useEffect, useRef, useState } from "react"

type Todo = {
    id: number,
    text: string,
    done: boolean
}

export default function TodoList() {

    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        const localTodos = localStorage.getItem("todos")
        if(localTodos){
            setTodos(JSON.parse(localTodos))
        }
    },[])

    const inputRef = useRef<HTMLInputElement>(null)

    const toggleTodo = (id: number) => {
        const todoIndex = todos.findIndex(todo => todo.id === id)
        const newArr = [...todos]
        newArr[todoIndex].done = !todos[todoIndex].done
        setTodos(newArr)
        localStorage.setItem("todos", JSON.stringify(todos))
    }

    const addTodo = (event : React.FormEvent) => {
        event.preventDefault()
        if(inputRef.current && inputRef.current.value){
            const newArr = [...todos]
            const newTodo = {
                id: todos[0] ? todos[todos.length-1].id + 1 : 1,
                text: inputRef.current.value.trim(),
                done: false
            }
            newArr.push(newTodo)
            setTodos(newArr)
            inputRef.current.value = ''
            localStorage.setItem("todos", JSON.stringify(newArr))
        }
        
    }

    const deleteTodo = (id: number) => {
        const findTodoIndex = todos.findIndex(todo => todo.id === id)
        const newArr = [...todos.slice(0, findTodoIndex), ...todos.slice(findTodoIndex+1)]
        setTodos(newArr)
        localStorage.setItem("todos", JSON.stringify(newArr))
    }

    return (
        <ul className="p-4 space-y-2">
            {
                todos.map(todo => <li key={todo.id} className="flex">
                    <button className="hover:text-lime-400 w-full text-left inline" onClick={() => toggleTodo(todo.id)}>
                        {
                            todo.done ? 
                            `✅ ${todo.text}`
                            :
                            <span className="">▢ {todo.text}</span>
                        }
                    </button>
                    <button className="float-end inline px-3 hover:text-red-400" onClick={() => deleteTodo(todo.id)}>
                        <TrashIcon className="size-4 " />
                    </button>
                </li>)
            }
            <li>
                <form onSubmit={addTodo} className="flex">
                    <input
                        ref={inputRef}
                        type="text"
                        name="todo"
                        className="block border-0 border-b-2 border-white bg-black w-full py-1.5 text-white shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:border-lime-300 sm:text-sm sm:leading-6"
                     />
                    <button className="px-3 text-2xl hover:text-lime-400" type="submit">+</button>
                </form>
            </li>
        </ul>
    )
}
