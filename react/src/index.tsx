import * as React from "react";
import * as ReactDom from "react-dom";
import { App } from "./components";
import { TodoRepository } from "../../lib";

const repo = new TodoRepository();

ReactDom.render(<App todoRepository={repo}/>, document.getElementById("main"));