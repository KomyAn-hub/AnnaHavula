import { useState, useRef, useContext } from 'react';
import TaskContext from '../context/TaskContext';

function TaskForm() {

    const [inputValue, setInputValue] = useState('');

    const inputRef = useRef();

    const { addTask } = useContext(TaskContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        addTask(inputValue.trim());

        setInputValue('');
        inputRef.current.focus();
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">

            <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Введіть назву задачі..."
                className="border border-gray-300 rounded px-3 py-2 flex-1 focus:outline-none focus:border-blue-500"
            />

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
                Додати
            </button>
        </form>
    );
}

export default TaskForm;