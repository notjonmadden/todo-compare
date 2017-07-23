import * as React from "react";
import { TodoList } from "./todo-list";
import { TodoEntry } from "./todo-entry";
import { TodoRepository, Todo } from "../../../lib";

interface AppProps {
    todoRepository: TodoRepository;
}

interface AppState {
    todos: Todo[];
    newTitle: string;
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
            todos: [],
            newTitle: ""
        };
    }

    public render() {
        return (
            <div>
                <TodoList
                    todos={this.state.todos}
                    onTodoDoneClick={t => this.onTodoDoneClick(t)} />
                <TodoEntry
                    title={this.state.newTitle}
                    onSubmit={() => this.onNewTodoSubmit()} 
                    onTitleChange={t => this.onTitleChange(t)}/>
            </div>
        );
    }

    private onTitleChange(value: string) {
        this.setState({ newTitle: value });
    }

    private onNewTodoSubmit() {
        this.props.todoRepository.add(this.state.newTitle)
            .then(t => this.setState({
                newTitle: "",
                todos: [...this.state.todos, t]
            }));
    }

    private onTodoDoneClick(t: Todo) {
        t.done = !t.done;

        this.props.todoRepository.save(t).then(
            t => this.setState({ 
                todos: replace(this.state.todos, t, (a, b) => a.id === b.id)
            }));
    }
}