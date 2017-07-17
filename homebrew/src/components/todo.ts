import { Todo } from "../../../lib";

type TodoChangedCallback = (t: Todo) => void;

export class TodoListItem {
    private readonly el: Element;
    private checkbox: HTMLInputElement;
    private readonly callbacks: TodoChangedCallback[] = [];

    constructor(
        el: string,
        private todo: Todo
    ) {
        const elOrNull = document.querySelector(el);
        if (!elOrNull) {
            throw Error("No such element");
        }

        this.el = elOrNull;
    }

    public render(): void {
        this.el.innerHTML =
            `
            <div>
                <span>${this.todo.title}</span>
                <input type="checkbox" ${this.todo.done ? "checked" : ""}/>
            </div>
            `;
        
        this.initializeAfterRender();
    }

    public todoChanged(callback: TodoChangedCallback) {
        this.callbacks.push(callback);
    }

    private onTodoChanged() {
        this.callbacks.forEach(c => c(this.todo));
    }

    private initializeAfterRender() {
        const checkboxOrNull = this.el.querySelector("input[type=checkbox]");
        if (!checkboxOrNull) {
            throw Error("checkbox not found");
        }

        this.checkbox = checkboxOrNull as HTMLInputElement
        this.checkbox.addEventListener("click", () => this.onCheckboxClick());
    }

    private onCheckboxClick() {
        this.todo.done = this.checkbox.checked;
        this.onTodoChanged();
    }
}