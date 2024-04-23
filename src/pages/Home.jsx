import Table from "../components/Table";
import {useContext, useEffect, useState} from "react";
import {TaskContext} from "../utils/context/TaskContext.jsx";

const Home = () => {
    const { tasks } = useContext(TaskContext);
    const [showToDoOnly, setShowToDoOnly] = useState(false);
    const [currentTasks, setCurrentTasks] = useState([]);
    const [showByPriority, setShowByPriority] = useState("all");

    useEffect(() => {
        let filteredTasks = showToDoOnly
            ? tasks.filter((task) => task.taskStatus === "En cours")
            : tasks;

        filteredTasks =
            showByPriority !== "all"
                ? filteredTasks.filter((task) => task.taskPriority === showByPriority)
                : filteredTasks;

        setCurrentTasks(filteredTasks);
    }, [showToDoOnly, showByPriority, tasks]);

    const handleShowToDoOnly = () => {
        setShowToDoOnly(!showToDoOnly);
    };

    const handleShowByPriority = (e) => {
        setShowByPriority(e.target.value);
    }

    return (
        <>
            <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900">Liste des tâches</h1>
            <div className="grid grid-cols-2 gap-4 my-5">
                <div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleShowToDoOnly}>
                        {showToDoOnly ? "Voir toutes les tâches" : "Voir seulement les tâches à faire"}
                    </button>
                </div>
                <div>
                    <select name="priority" id="priority" onChange={handleShowByPriority}
                            className="w-full bg-white border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500">
                        <option value="all">Toutes</option>
                        <option value="Faible">Faible</option>
                        <option value="Moyenne">Moyenne</option>
                        <option value="Haute">Haute</option>
                    </select>
                </div>
            </div>
            <Table tasks={currentTasks}/>
        </>
    );
};

export default Home;
