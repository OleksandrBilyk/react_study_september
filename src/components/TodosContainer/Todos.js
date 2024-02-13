import React, {useEffect, useState} from 'react';

import {todosService} from "../../services/todosService";
import {Todo} from "./Todo";
import style from "./Todo.module.css";

const Todos = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        todosService.getAll()
            .then(({data}) => setTodos(data))
    }, []);
    return (
        <div className={style.todos_page}>
            {todos.map((todo) => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos};