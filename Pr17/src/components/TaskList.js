import { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import TaskItem from './TaskItem';
function TaskList() {

    const { tasks } = useContext(TaskContext);

    return (
        <div>
            {tasks.length === 0 ? (
                <p className="text-center text-gray-500 py-8">
                    Немає задач. Додайте першу задачу! 👆
                </p>

            ) : (

                <div>
                    {tasks.map((task) => (
                        <TaskItem key={task.id} task={task} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default TaskList;