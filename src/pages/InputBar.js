import { useState } from "react";

export default function InputBar({onAddTask}) {

    const [text, setText] = useState('');

    function handleAddTask() {
        setText('');
        onAddTask(text);
    }
    return (
      <div id="task-input-bar">
        <input 
          id="task-input-bar-field" 
          type="text" 
          placeholder="Enter a task" 
          value={text} onChange={e => setText(e.target.value)}
          />
        { (text == "")
          ? <button className="button disabled-button" id="add-button" disabled>Add</button>
          : <button className="button button-success" id="add-button" onClick={handleAddTask}>Add</button>
        }
      </div>
    )
  }