import { TodoList } from "./todo-list";
import { TodoEntry } from "./todo-entry";
import { Todo, TodoRepository } from "../../../lib";
import { querySelectorOrDie } from "../util";

export class App {
    private readonly promiseTodos: Promise<Todo[]>;
    private readonly el: Element;

    constructor(
        el: string,
        private repo: TodoRepository
    ) {
        this.el = querySelectorOrDie(document, el);
        this.promiseTodos = repo.getAll();
    }

    public render(): void {
        this.el.innerHTML =
        `
        <div>
            <div id="list">
            </div>
            <div id="entry">
            </div>
        </div>
        `;
        this.promiseTodos.then(ts => {
            const listComponent = new TodoList("#list", ts);
            const entryComponent = new TodoEntry("#entry");
            listComponent.todoChanged(t => {
                console.log(`todo changed: ${t}`);
            });
            entryComponent.submit(title => {
                console.log(`new title: ${title}`);
            });
            listComponent.render();
            entryComponent.render();
        })
        .catch(err => {
            console.log(err);
        });
    }
}