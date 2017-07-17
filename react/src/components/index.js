var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import { TodoList } from "./todo-list";
function replace(ts, t, comp) {
    for (var i = 0; i < ts.length; ++i) {
        if (comp(ts[i], t)) {
            ts.splice(i, 0, t);
            break;
        }
    }
    return ts;
}
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.props.todoRepository.getAll().then(function (ts) {
            _this.setState({ todos: ts });
        })
            .catch(function (err) {
            console.log(err);
        });
        _this.state = {
            todos: []
        };
        return _this;
    }
    App.prototype.render = function () {
        var _this = this;
        return React.createElement(TodoList, { todos: this.state.todos, onTodoDoneClick: function (t) { return _this.onTodoDoneClick(t); } });
    };
    App.prototype.onTodoDoneClick = function (t) {
        var _this = this;
        t.done = !t.done;
        this.props.todoRepository.save(t).then(function (t) { return _this.setState({
            todos: replace(_this.state.todos, t, function (a, b) { return a.id === b.id; })
        }); });
    };
    return App;
}(React.Component));
export { App };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQy9CLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFXdkMsaUJBQW9CLEVBQU8sRUFBRSxDQUFJLEVBQUUsSUFBNkI7SUFDNUQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDakMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25CLEtBQUssQ0FBQztRQUNWLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQUUsQ0FBQztBQUNkLENBQUM7QUFFRDtJQUF5Qix1QkFBbUM7SUFDeEQsYUFBWSxLQUFlO1FBQTNCLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBWWY7UUFWRyxLQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFO1lBQ3RDLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxLQUFLLEVBQUUsRUFBRTtTQUNaLENBQUM7O0lBQ04sQ0FBQztJQUVNLG9CQUFNLEdBQWI7UUFBQSxpQkFFQztRQURHLE1BQU0sQ0FBQyxvQkFBQyxRQUFRLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLGVBQWUsRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQXZCLENBQXVCLEdBQUksQ0FBQztJQUNoRyxDQUFDO0lBRU8sNkJBQWUsR0FBdkIsVUFBd0IsQ0FBTztRQUEvQixpQkFPQztRQU5HLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRWpCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ2xDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQztZQUNmLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBYixDQUFhLENBQUM7U0FDL0QsQ0FBQyxFQUZHLENBRUgsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUNMLFVBQUM7QUFBRCxDQUFDLEFBNUJELENBQXlCLEtBQUssQ0FBQyxTQUFTLEdBNEJ2QyJ9