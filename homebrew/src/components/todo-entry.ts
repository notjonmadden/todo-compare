import { querySelectorOrDie } from "../util";

export class TodoEntry {
    private readonly el: Element;
    private readonly callbacks: ((title: string) => void)[] = [];

    private input: HTMLInputElement;
    private button: HTMLButtonElement;

    constructor(
        el: string
    ) {
        this.el = querySelectorOrDie(document, el);
    }

    public render() {
        this.el.innerHTML = 
        `
        <div>
            <input type="text" />
            <button>Add Todo</button>
        </div>
        `;

        this.input = querySelectorOrDie(this.el, "input") as HTMLInputElement;
        this.button = querySelectorOrDie(this.el, "button") as HTMLButtonElement;
        this.button.addEventListener("click", () => this.onSubmitClick());
    }

    private onSubmitClick() {
        const title = this.input.value;

        this.callbacks.forEach(c => c(title));
        this.input.value = "";
    }

    public submit(callback: (title: string) => void) {
        this.callbacks.push(callback);
    }
}