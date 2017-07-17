import * as React from "react";
import { TodoListItem } from "./todo";
export function TodoList(props) {
    return (React.createElement("ul", null, props.todos.map(function (t) { return React.createElement("li", { key: t.id },
        React.createElement(TodoListItem, { todo: t, onDoneClick: function () { return props.onTodoDoneClick(t); } })); })));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9kby1saXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUUvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBUXRDLE1BQU0sbUJBQW1CLEtBQW9CO0lBQ3pDLE1BQU0sQ0FBQyxDQUNILGdDQUNNLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsNEJBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQUUsb0JBQUMsWUFBWSxJQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLGNBQU0sT0FBQSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUF4QixDQUF3QixHQUFJLENBQUssRUFBMUYsQ0FBMEYsQ0FBQyxDQUNqSCxDQUNSLENBQUM7QUFDTixDQUFDIn0=