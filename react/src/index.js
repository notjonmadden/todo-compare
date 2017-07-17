import * as React from "react";
import * as ReactDom from "react-dom";
import { App } from "./components";
import { TodoRepository } from "../../lib";
var repo = new TodoRepository();
ReactDom.render(React.createElement(App, { todoRepository: repo }), document.getElementById("main"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxLQUFLLFFBQVEsTUFBTSxXQUFXLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTNDLElBQU0sSUFBSSxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7QUFFbEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxHQUFHLElBQUMsY0FBYyxFQUFFLElBQUksR0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyJ9