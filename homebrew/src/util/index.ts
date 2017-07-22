export function querySelectorOrDie(element: Element | HTMLDocument, selector: string): Element {
    const selectedElementOrNull = element.querySelector(selector);
    if (!selectedElementOrNull) {
        throw Error(`Element not found: ${selector}`);
    }

    return selectedElementOrNull;
}