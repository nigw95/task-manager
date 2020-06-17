import React, { useContext } from "react"
import { TaskListContext } from "../context/TaskListContext"

import Task from "./task"

import listStyles from "./styles/tasklist.module.css"

const TaskList = () => {
  const { tasks } = useContext(TaskListContext)
  return (
    <div className={listStyles.listDiv}>
      {tasks.length ? (
        <ul className={listStyles.list}>
          {tasks.map(task => {
            return <Task task={task} key={task.id} />
          })}
        </ul>
      ) : (
        <div className={listStyles.noTasks}>No Tasks!</div>
      )}
    </div>
  )
}

export default TaskList
