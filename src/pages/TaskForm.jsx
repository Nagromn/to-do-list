import { useState, useContext } from "react";
import { TaskContext } from "../utils/context/TaskContext";

const TaskForm = () => {
    const { addTask } = useContext(TaskContext);
    const [formData, setFormData] = useState({
        taskName: "",
        taskDate: "",
        taskPriority: "",
        taskStatus: "En cours",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(formData);
        setFormData({
            taskName: "",
            taskDate: "",
            taskPriority: "",
            taskStatus: "",
        });
    };

    return (
        <>
            <div className="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <form name="addTask" onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <div>
                                <label htmlFor="taskName">
                                    Nom de la tâche
                                </label>
                            </div>
                            <input
                                type="text"
                                className="border-solid border-2 rounded-md p-2"
                                name="taskName"
                                value={formData.taskName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mt-4">
                            <div>
                                <label htmlFor="taskDate">Date</label>
                            </div>
                            <input
                                type="date"
                                className="border-solid border-2 rounded-md p-2"
                                name="taskDate"
                                value={formData.taskDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mt-4">
                            <div>
                                <label htmlFor="taskPriority">
                                    Choisir une priorité
                                </label>
                            </div>
                            <select
                                className="border-solid border-2 rounded-md p-2"
                                name="taskPriority"
                                value={formData.taskPriority}
                                onChange={handleChange}
                            >
                                <option defaultValue>--</option>
                                <option value="Faible">Faible</option>
                                <option value="Moyenne">Moyenne</option>
                                <option value="Haute">Haute</option>
                            </select>
                        </div>
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white rounded-md py-2 px-4"
                            >
                                Valider
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    );
};

export default TaskForm;
