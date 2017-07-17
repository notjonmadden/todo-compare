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
export { TodoRepository };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtJQUFBO0lBd0JBLENBQUM7SUF2QlUsK0JBQU0sR0FBYjtRQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ25CO2dCQUNJLElBQUksRUFBRSxLQUFLO2dCQUNYLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEtBQUssRUFBRSxRQUFRO2FBQ2xCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsS0FBSyxFQUFFLFFBQVE7YUFDbEI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsS0FBSztnQkFDWCxFQUFFLEVBQUUsQ0FBQztnQkFDTCxLQUFLLEVBQUUsUUFBUTthQUNsQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSw2QkFBSSxHQUFYLFVBQVksQ0FBTztRQUNmLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkMifQ==