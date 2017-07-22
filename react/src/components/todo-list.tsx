import * as React from "react";
import { Todo } from "../../../lib";
import { TodoListItem } from "./todo";

interface TodoListProps {
    todos: Todo[];
    onTodoDoneClick: (t: Todo) => void;
}

export function TodoList(props: TodoListProps) {
    return (
        <ul>
            {props.todos.map(t => <li key={t.id}><TodoListItem todo={t} onDoneClick={() => props.onTodoDoneClick(t)} /></li>)}
        </ul>
    );
}