(function () {
'use strict';

var TodoRepository = (function () {
    function TodoRepository() {
    }
    TodoRepository.prototype.getAll = function () {
        return Promise.resolve([
            {
                done: false,
                id: 0,
                title: "Test A"
            },
            {
                done: false,
                id: 1,
                title: "Test B"
            },
            {
                done: false,
                id: 2,
                title: "Test C"
            }
        ]);
    };
    TodoRepository.prototype.save = function (t) {
        return Promise.resolve(t);
    };
    return TodoRepository;
}());

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

var App = (function () {
    function App(el, repo) {
        this.el = el;
        this.repo = repo;
        this.promiseTodos = repo.getAll();
    }
    App.prototype.render = function () {
        var _this = this;
        this.promiseTodos.then(function (ts) {
            var listComponent = new TodoList(_this.el, ts);
            listComponent.todoChanged(function (t) {
            });
            listComponent.render();
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    return App;
}());

var app = new App("#main", new TodoRepository());
app.render();

}());
