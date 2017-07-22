import * as React from "react";

interface TodoEntryProps {
    title: string;

    onSubmit(): void;
    onTitleChange(title: string): void;
}

export function TodoEntry(props: TodoEntryProps) {
    return (
        <div>
            <input type="text" value={props.title} onChange={e => props.onTitleChange(e.target.value)} />
            <button onClick={() => props.onSubmit()}>Add Todo</button>
        </div>
    )
}