

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

    public save(t: Todo): Promise<Todo> {
        return Promise.resolve(t);
    }

    public delete(id: number): Promise<Todo> {
        
    }
}