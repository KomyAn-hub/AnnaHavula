import { useContext } from 'react';
import TaskContext from '../context/TaskContext';

function TaskItem({ task }) {

    const { toggleTask, deleteTask } = useContext(TaskContext);

    return (
        <div className="flex items-center justify-between p-3 mb-2 border rounded bg-white shadow-sm">

            <div className="flex items-center gap-3">

                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}

                    className="w-4 h-4 cursor-pointer"
                />

                <span
                    className={
                        task.completed
                            ? 'line-through text-gray-400'
                            : 'text-gray-800'
                    }
                >
                    {task.title}
        </span>
            </div>

            <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
            >
                Видалити
            </button>
        </div>
    );
}

export default TaskItem;