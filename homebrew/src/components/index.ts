import { TodoList } from "./todo-list";
import { Todo, TodoRepository } from "../../../lib";

export class App {
    private readonly promiseTodos: Promise<Todo[]>;

    constructor(
        private el: string,
        private repo: TodoRepository
    ) {
        this.promiseTodos = repo.getAll();
    }

    public render(): void {
        this.promiseTodos.then(ts => {
            const listComponent = new TodoList(this.el, ts);
            listComponent.todoChanged(t => {
                
            });
            listComponent.render();
        })
        .catch(err => {
            console.log(err);
        });
    }
}