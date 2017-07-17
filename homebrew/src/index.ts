import { TodoRepository } from "../../lib";
import { App } from "./components";

const app = new App("#main", new TodoRepository());

app.render();