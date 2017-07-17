import { TodoListItem } from "./todo";
import { Todo } from "../../../lib";

function todoId(t: Todo) {
    return `todo-${t.id}`;
}

type TodoChangedCallback = (t: Todo) => void;

export class TodoList {
    private readonly el: Element;
    private readonly callbacks: TodoChangedCallback[] = [];

    constructor(
        el: string,
        private todos: Todo[]
    ) {
        const elOrNull = document.querySelector(el);
        if (!elOrNull) {
            throw Error("no such element");
        }

        this.el = elOrNull;
    }
    
    public todoChanged(callback: TodoChangedCallback) {
        this.callbacks.push(callback);
    }

    private onTodoChanged(t: Todo) {
        this.callbacks.forEach(c => c(t));
    }

    public render(): void {
        this.el.innerHTML = `
            <ul>` +
                this.todos.map(t => `<li id="${todoId(t)}"></li>`).join('') +
            `</ul>
        `;

        for (const t of this.todos) {
            const id = todoId(t);
            const selector = `#${id}`;
            const todoComponent = new TodoListItem(selector, t);

            todoComponent.todoChanged(t => this.onTodoChanged(t));
            todoComponent.render();
        }
    }
}