function findIndex<T>(a: T[], f: (e: T) => boolean) {
    for (let i = 0; i < a.length; ++i) {
        if (f(a[i])) {
            return i;
        }
    }

    return -1;
}

function max<T, R>(ts: T[], f: (t: T) => R) {
    return Math.max.apply(ts, ts.map(f));
}

export interface Todo {
    id: number;
    title: string;
    done: boolean;
}

export class TodoRepository {
    private todos: Todo[] = [
        {
            done: false,
            id: 0,
            title: "Test A"
        },
        {
            done: false,
            id: 1,
            title: "Test B"
        },
        {
            done: false,
            id: 2,
            title: "Test C"
        }
    ];
    
    public getAll(): Promise<Todo[]> {
        return Promise.resolve(this.todos);
    }

    public add(title: string): Promise<Todo> {
        const nextId = max(this.todos, t => t.id);
        const todo = { done: false, title: title, id: nextId };
        
        this.todos.push(todo);

        return Promise.resolve(todo);
    }

    public save(t: Todo): Promise<Todo> {
        const idxTodo = findIndex(this.todos, tt => tt.id === t.id);
        if (idxTodo < 0) {
            return Promise.reject("no such todo");
        } else {
            return Promise.resolve(this.todos[idxTodo] = t);
        }
    }

    public delete(id: number): Promise<Todo> {
        const idxTodo = findIndex(this.todos, t => t.id === id);
        if (idxTodo < 0) {
            return Promise.reject("no such todo");
        }

        return Promise.resolve(this.todos.splice(idxTodo, 1)[0]);
    }
}