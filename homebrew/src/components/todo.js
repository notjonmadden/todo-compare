var TodoListItem = (function () {
    function TodoListItem(el, todo) {
        this.todo = todo;
        this.callbacks = [];
        var elOrNull = document.querySelector(el);
        if (!elOrNull) {
            throw Error("No such element");
        }
        this.el = elOrNull;
    }
    TodoListItem.prototype.render = function () {
        this.el.innerHTML =
            "\n            <div>\n                <span>" + this.todo.title + "</span>\n                <input type=\"checkbox\" " + (this.todo.done ? "checked" : "") + "/>\n            </div>\n            ";
        this.initializeAfterRender();
    };
    TodoListItem.prototype.todoChanged = function (callback) {
        this.callbacks.push(callback);
    };
    TodoListItem.prototype.onTodoChanged = function () {
        var _this = this;
        this.callbacks.forEach(function (c) { return c(_this.todo); });
    };
    TodoListItem.prototype.initializeAfterRender = function () {
        var _this = this;
        var checkboxOrNull = this.el.querySelector("input[type=checkbox]");
        if (!checkboxOrNull) {
            throw Error("checkbox not found");
        }
        this.checkbox = checkboxOrNull;
        this.checkbox.addEventListener("click", function () { return _this.onCheckboxClick(); });
    };
    TodoListItem.prototype.onCheckboxClick = function () {
        this.todo.done = this.checkbox.checked;
        this.onTodoChanged();
    };
    return TodoListItem;
}());
export { TodoListItem };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvZG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7SUFLSSxzQkFDSSxFQUFVLEVBQ0YsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFKTCxjQUFTLEdBQTBCLEVBQUUsQ0FBQztRQU1uRCxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNaLE1BQU0sS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUVELElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSw2QkFBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTO1lBQ2IsZ0RBRVksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLDJEQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsR0FBRyxFQUFFLDBDQUUzRCxDQUFDO1FBRU4sSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVNLGtDQUFXLEdBQWxCLFVBQW1CLFFBQTZCO1FBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTyxvQ0FBYSxHQUFyQjtRQUFBLGlCQUVDO1FBREcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxFQUFaLENBQVksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTyw0Q0FBcUIsR0FBN0I7UUFBQSxpQkFRQztRQVBHLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDckUsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBa0MsQ0FBQTtRQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsRUFBRSxFQUF0QixDQUFzQixDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVPLHNDQUFlLEdBQXZCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFuREQsSUFtREMifQ==