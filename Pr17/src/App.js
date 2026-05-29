import { useState } from 'react';
import TaskContext from './context/TaskContext';

import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Statistics from './components/Statistics';
import Footer from './components/Footer';

function App() {
    const [tasks, setTasks] = useState([]);
    const addTask = (title) => {

        const newTask = {
            id: Date.now(),

            title: title,

            completed: false,
        };

        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const toggleTask = (id) => {

        setTasks((prevTasks) =>

            prevTasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };
    const deleteTask = (id) => {

        setTasks((prevTasks) =>

            prevTasks.filter((task) => task.id !== id)
        );
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>

            <div className="min-h-screen bg-gray-100 flex flex-col">

                <Header title="📝 Мої задачі" />

                <main className="flex-1 max-w-2xl mx-auto w-full p-4">

                    <Statistics />
                    <div className="bg-white rounded-lg shadow p-4">

                        <TaskForm />

                        <TaskList />
                    </div>
                </main>

                <Footer author="Студент" />
            </div>

        </TaskContext.Provider>
    );
}

export default App;