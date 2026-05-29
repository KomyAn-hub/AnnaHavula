import { useContext } from 'react';
import TaskContext from '../context/TaskContext';

function Statistics() {

    const { tasks } = useContext(TaskContext);

    const total = tasks.length;

    const completed = tasks.filter((task) => task.completed).length;

    const pending = total - completed;

    if (total === 0) return null;

    return (
        <div className="grid grid-cols-3 gap-3 mb-6">

            <div className="bg-blue-50 border border-blue-200 rounded p-3 text-center">
                <div className="text-2xl font-bold text-blue-600">{total}</div>
                <div className="text-xs text-blue-500 mt-1">Всього</div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded p-3 text-center">
                <div className="text-2xl font-bold text-green-600">{completed}</div>
                <div className="text-xs text-green-500 mt-1">Виконано</div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded p-3 text-center">
                <div className="text-2xl font-bold text-orange-600">{pending}</div>
                <div className="text-xs text-orange-500 mt-1">Залишилось</div>
            </div>
        </div>
    );
}

export default Statistics;