import { TodoListItem } from "./todo";
function todoId(t) {
    return "todo-" + t.id;
}
var TodoList = (function () {
    function TodoList(el, todos) {
        this.todos = todos;
        this.callbacks = [];
        var elOrNull = document.querySelector(el);
        if (!elOrNull) {
            throw Error("no such element");
        }
        this.el = elOrNull;
    }
    TodoList.prototype.todoChanged = function (callback) {
        this.callbacks.push(callback);
    };
    TodoList.prototype.onTodoChanged = function (t) {
        this.callbacks.forEach(function (c) { return c(t); });
    };
    TodoList.prototype.render = function () {
        var _this = this;
        this.el.innerHTML = "\n            <ul>" +
            this.todos.map(function (t) { return "<li id=\"" + todoId(t) + "\"></li>"; }).join('') +
            "</ul>\n        ";
        for (var _i = 0, _a = this.todos; _i < _a.length; _i++) {
            var t = _a[_i];
            var id = todoId(t);
            var selector = "#" + id;
            var todoComponent = new TodoListItem(selector, t);
            todoComponent.todoChanged(function (t) { return _this.onTodoChanged(t); });
            todoComponent.render();
        }
    };
    return TodoList;
}());
export { TodoList };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9kby1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFHdEMsZ0JBQWdCLENBQU87SUFDbkIsTUFBTSxDQUFDLFVBQVEsQ0FBQyxDQUFDLEVBQUksQ0FBQztBQUMxQixDQUFDO0FBSUQ7SUFJSSxrQkFDSSxFQUFVLEVBQ0YsS0FBYTtRQUFiLFVBQUssR0FBTCxLQUFLLENBQVE7UUFKUixjQUFTLEdBQTBCLEVBQUUsQ0FBQztRQU1uRCxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNaLE1BQU0sS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUVELElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSw4QkFBVyxHQUFsQixVQUFtQixRQUE2QjtRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU8sZ0NBQWEsR0FBckIsVUFBc0IsQ0FBTztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBSixDQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0seUJBQU0sR0FBYjtRQUFBLGlCQWVDO1FBZEcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsb0JBQ1g7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLGNBQVcsTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFTLEVBQTdCLENBQTZCLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQy9ELGlCQUNILENBQUM7UUFFRixHQUFHLENBQUMsQ0FBWSxVQUFVLEVBQVYsS0FBQSxJQUFJLENBQUMsS0FBSyxFQUFWLGNBQVUsRUFBVixJQUFVO1lBQXJCLElBQU0sQ0FBQyxTQUFBO1lBQ1IsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQU0sUUFBUSxHQUFHLE1BQUksRUFBSSxDQUFDO1lBQzFCLElBQU0sYUFBYSxHQUFHLElBQUksWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVwRCxhQUFhLENBQUMsV0FBVyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO1lBQ3RELGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQyJ9