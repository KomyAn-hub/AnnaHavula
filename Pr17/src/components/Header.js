import { useContext } from 'react';
import TaskContext from '../context/TaskContext';

function Header({ title }) {

    const { tasks } = useContext(TaskContext);

    return (
        <header className="bg-blue-600 text-white p-4 shadow-md">

            <div className="max-w-2xl mx-auto flex items-center justify-between">

                <h1 className="text-2xl font-bold">{title}</h1>

                {tasks.length > 0 && (
                    <span className="bg-white text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
                        Задач: {tasks.length}
          </span>
                )}
            </div>
        </header>
    );
}
export default Header;