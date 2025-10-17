import { Inter } from 'next/font/google'
import TodoApp from './TodoApp.js'
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

const initialTasks = [
  {
    id: 1,
    text: "Program this todo app"
  },
  {
    id: 2,
    text: "A task"
  }
]


export default function Index() {
  // State for position

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [centered, setCentered] = useState(false);

  useEffect(() => {
    // Center the widget on initial render
    const centerX = screen.width / 2 - 200; // Adjust 200 to half widget width
    const centerY = screen.height / 2 - 200;
    setPosition({ x: centerX, y: centerY });
    setCentered(true);
  }, []);

  // Mouse event handlers
  const handleMouseDown = (e) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    // Prevent text selection
    document.body.style.userSelect = 'none';
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
    document.body.style.userSelect = '';
  };

  // Attach listeners on drag
  useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);

  return (
    <div className="flex flex-col items-center justify-center my-20">
      <div className="mb-4 mx-8">
        <h1 className="text-4xl my-2 font-semibold">todo-app</h1>
        <p className="mb-4 text-xl"><i>a simple todo app created with React and Next.js.</i></p>
        <p className="mx-2 font-semibold flex">
          <img className="w-6" src="./github-mark.svg" alt="github mark"></img>
          <a href="https://github.com/colinac" className="font-normal text-blue-700 mx-3">github.com/colinac</a>
        </p>
      </div>
      {!centered && (
        <div className="text-center text-gray-500 my-8">
          Loading widget...
        </div>
      )}
      {centered && (
        <div
          style={{
            position: 'absolute',
            left: position.x,
            top: position.y,
            cursor: dragging ? 'grabbing' : 'grab',
            zIndex: 100,
          }}
          onMouseDown={handleMouseDown}
        >
          <TodoApp initialTasks={initialTasks} />
        </div>
      )}
    </div>
  )
}




