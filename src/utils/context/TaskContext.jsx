import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const handleTaskStatusChange = (taskName, isChecked) => {
        setTasks((tasks) =>
            tasks.map((task) =>
                task.taskName === taskName
                    ? {
                          ...task,
                          taskStatus: isChecked ? "Terminé" : "En cours",
                      }
                    : task
            )
        );
    };

    return (
        <TaskContext.Provider
            value={{ tasks, addTask, handleTaskStatusChange }}
        >
            {children}
        </TaskContext.Provider>
    );
};

TaskProvider.propTypes = {
    children: PropTypes.node,
};
