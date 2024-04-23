/* eslint-disable */
import { useContext } from "react";
import { TaskContext } from "../utils/context/TaskContext";
import "../assets/styles/table.css"
import trash from "../assets/icons/trash-solid.svg"

const Table = ({ tasks }) => {
    const { handleTaskStatusChange, removeTask } = useContext(TaskContext);

    return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-6 py-4">
                                        Nom
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                        Priorité
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                        Statut
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                        Action
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* eslint-disable-next-line react/prop-types */}
                                {tasks.length > 0 &&
                                    // eslint-disable-next-line react/prop-types
                                        tasks.map((task, index) => (
                                            <tr
                                                key={index}
                                                className="border-b dark:border-neutral-500"
                                            >
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                    {task.taskName}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    {task.taskDate}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <span
                                                        className={`inline-block whitespace-nowrap rounded-[0.27rem] px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none ${
                                                            task.taskPriority ===
                                                            "Moyenne"
                                                                ? "bg-yellow-500 text-black"
                                                                : task.taskPriority ===
                                                                "Haute"
                                                                    ? "bg-red-500 text-white"
                                                                    : "bg-green-500 text-white"
                                                        }`}
                                                    >
                                                        {task.taskPriority}
                                                    </span>
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <input
                                                        type="checkbox"
                                                        checked={
                                                            task.taskStatus ===
                                                            "Terminé"
                                                        }
                                                        onChange={(e) =>
                                                            handleTaskStatusChange(
                                                                task.taskName,
                                                                e.target.checked
                                                            )
                                                        }
                                                    />
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <img onClick={() => removeTask(task.taskName)} className="trash-icon" src={trash} alt="Icone poubelle"/>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Table;
