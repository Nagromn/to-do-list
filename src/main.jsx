import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { BrowserRouter } from "react-router-dom";
import { TaskProvider } from "./utils/context/TaskContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <TaskProvider>
                <App />
            </TaskProvider>
        </BrowserRouter>
    </React.StrictMode>
);
