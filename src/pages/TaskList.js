import { useState } from 'react'

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
    <li>
      {isEditing
        ? <input type="text" value={text} placeholder="..." onChange={e => setText(e.target.value)} />
        : <p>{task.text}</p>}
      <div className="flex flex-row">
        {isEditing
          ? (text == "")
            ? <button className="button disabled-button" disabled>Save</button>
            : <button className="button button-dark-blue" onClick={handleEditTask}>Save</button>
          : <button className="button" onClick={toggleMode}>Edit</button>}
        <button className="button" id="delete-button" onClick={() => onDeleteTask(task.id)}>Delete</button>
      </div>
    </li>
  )

}