export interface Todo {
    id: number;
    title: string;
    done: boolean;
}

export class TodoRepository {
    public getAll(): Promise<Todo[]> {
        return Promise.resolve([
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
        ]);
    }

    public save(t: Todo): Promise<Todo> {
        return Promise.resolve(t);
    }
}