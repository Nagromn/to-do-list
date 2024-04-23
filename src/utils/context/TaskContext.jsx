/* eslint-disable */
import { createContext, useState } from "react";

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

    const removeTask = (taskName) => {
        const newTasks = tasks.filter((task) => task.taskName !== taskName);
        setTasks(newTasks);
    }

    return (
        <TaskContext.Provider
            value={{ tasks, addTask, handleTaskStatusChange, removeTask }}
        >
            {children}
        </TaskContext.Provider>
    );
};
