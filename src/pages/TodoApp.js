import TaskList from './TaskList.js'
import InputBar from './InputBar.js'
import { useState } from 'react'

export default function TodoApp({ initialTasks = [] }) {

    const [tasks, setTasks] = useState(initialTasks);
    const [nextId, setNextId] = useState(initialTasks.length + 1)

    function addTask(text) {
        setTasks([
            ...tasks,
            {
                id: nextId,
                text: text
            }
        ]);
        setNextId(nextId + 1)
    }

    function changeTask(editedTask) {
        setTasks(tasks.map(task => {
            if (task.id === editedTask.id) {
                return editedTask;
            }
            return task;
        }))

    }

    function deleteTask(taskId) {
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    return (
        <div id="task-app" className="w-[300px] md:w-[350px] h-[500px]">
            <InputBar onAddTask={addTask} />
            <TaskList
                tasks={tasks}
                onChangeTask={changeTask}
                onDeleteTask={deleteTask}
            />
        </div>
    )

}