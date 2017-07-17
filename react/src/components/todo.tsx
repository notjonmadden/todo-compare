import * as React from "react";
import { Todo } from "../../../lib";

interface TodoListItemProps {
    todo: Todo;

    onDoneClick: () => void;
}

export function TodoListItem(props: TodoListItemProps) {
    return (
        <div>
            <span>{props.todo.title}</span>
            <input type="checkbox" checked={props.todo.done} onClick={() => props.onDoneClick()} />
        </div>
    );
}
