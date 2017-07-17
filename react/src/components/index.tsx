import * as React from "react";
import { TodoList } from "./todo-list";
import { TodoRepository, Todo } from "../../../lib";

interface AppProps {
    todoRepository: TodoRepository;
}

interface AppState {
    todos: Todo[];
}

function replace<T>(ts: T[], t: T, comp: (a: T, b: T) => boolean): T[] {
    for (let i = 0; i < ts.length; ++i) {
        if (comp(ts[i], t)) {
            ts.splice(i, 0, t);
            break;
        }
    }

    return ts;
}

export class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.props.todoRepository.getAll().then(ts => {
            this.setState({ todos: ts });
        })
        .catch(err => {
            console.log(err);
        });

        this.state = {
            todos: []
        };
    }

    public render() {
        return <TodoList todos={this.state.todos} onTodoDoneClick={t => this.onTodoDoneClick(t)} />;
    }

    private onTodoDoneClick(t: Todo) {
        t.done = !t.done;

        this.props.todoRepository.save(t).then(
            t => this.setState({ 
                todos: replace(this.state.todos, t, (a, b) => a.id === b.id)
            }));
    }
}