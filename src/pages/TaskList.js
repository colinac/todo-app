import { useState } from 'react'
import { PencilSquareIcon, TrashIcon, CheckIcon } from '@heroicons/react/24/solid'

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  const taskListItems = tasks && tasks.map(task => {
    return (<TaskListItem
      key={task.id}
      task={task}
      onChangeTask={onChangeTask}
      onDeleteTask={onDeleteTask}
    />)
  });

  return (
    <ul id="task-list">
      {taskListItems}
    </ul>
  )
}

function TaskListItem({ task, onChangeTask, onDeleteTask }) {

  function toggleMode() {
    setMode(!isEditing);
  }

  const [isEditing, setMode] = useState(false);
  const [text, setText] = useState(task.text);

  function handleEditTask() {
    onChangeTask({
      id: task.id,
      text: text
    });
    toggleMode();
  }


  return (
    <li className="flex items-center justify-between py-2">
      <div className="flex-1">
        {isEditing
          ? <input
              type="text"
              value={text}
              placeholder="..."
              onChange={e => setText(e.target.value)}
              className="border rounded px-2 py-1 w-full"
            />
          : <p>{task.text}</p>}
      </div>
      <div className="flex flex-row gap-2 ml-4">
        {isEditing ? (
          text === ""
            ? <button className="p-0 h-6 w-6 flex items-center justify-center disabled:opacity-50" disabled>
                <CheckIcon className="h-5 w-5" />
              </button>
            : <button className="p-0 h-6 w-6 flex items-center justify-center" onClick={handleEditTask}>
                <CheckIcon className="h-5 w-5" />
              </button>
        ) : (
          <button className="p-0 h-6 w-6 flex items-center justify-center" onClick={toggleMode}>
            <PencilSquareIcon className="h-5 w-5" />
          </button>
        )}
        <button className="p-0 h-6 w-6 flex items-center justify-center" id="delete-button" onClick={() => onDeleteTask(task.id)}>
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
    </li>
  )

}