import { Inter } from 'next/font/google'
import TodoApp from './TodoApp.js'

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
  return (
    <div className="flex flex-col items-center justify-center my-20">
      <div className="mb-4 mx-8">
        <h1 className="text-4xl my-2 font-semibold">todo-app</h1>
        <p className="mb-4 text-xl"><i>a simple todo app created with React and Next.js.</i></p>
      </div>
      <TodoApp initialTasks={initialTasks} />
      <div className="flex my-10">
        <p className="mx-2 font-semibold">Github: <a href="https://github.com/colinac" className="font-normal text-blue-700 ">github.com/colinac</a></p>
      </div>
    </div>

  )
}




