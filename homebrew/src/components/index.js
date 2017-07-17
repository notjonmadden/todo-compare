import { TodoList } from "./todo-list";
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
export { App };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3ZDO0lBR0ksYUFDWSxFQUFVLEVBQ1YsSUFBb0I7UUFEcEIsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLFNBQUksR0FBSixJQUFJLENBQWdCO1FBRTVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFTSxvQkFBTSxHQUFiO1FBQUEsaUJBV0M7UUFWRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7WUFDckIsSUFBTSxhQUFhLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNoRCxhQUFhLENBQUMsV0FBVyxDQUFDLFVBQUEsQ0FBQztZQUUzQixDQUFDLENBQUMsQ0FBQztZQUNILGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxVQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQyJ9