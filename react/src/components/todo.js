import * as React from "react";
export function TodoListItem(props) {
    return (React.createElement("div", null,
        React.createElement("span", null, props.todo.title),
        React.createElement("input", { type: "checkbox", checked: props.todo.done, onClick: function () { return props.onDoneClick(); } })));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvZG8udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBUy9CLE1BQU0sdUJBQXVCLEtBQXdCO0lBQ2pELE1BQU0sQ0FBQyxDQUNIO1FBQ0ksa0NBQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQVE7UUFDL0IsK0JBQU8sSUFBSSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLGNBQU0sT0FBQSxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQW5CLENBQW1CLEdBQUksQ0FDckYsQ0FDVCxDQUFDO0FBQ04sQ0FBQyJ9