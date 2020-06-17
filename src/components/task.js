import React, { useContext } from "react"
import { TaskListContext } from "../context/TaskListContext"

import IconButton from "@material-ui/core/IconButton"
import { FaPen, FaTrashAlt } from "react-icons/fa"
import listStyles from "./styles/tasklist.module.css"

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext)

  return (
    <li className={listStyles.listItem}>
      <span className={listStyles.taskTitle}>{task.title}</span>
      <div className={listStyles.buttonDiv}>
        <button
          onClick={() => findItem(task.id)}
          className={listStyles.btnDelete}
        >
          <IconButton>
            <FaPen size={16} />
          </IconButton>
        </button>
        <button
          onClick={() => removeTask(task.id)}
          className={listStyles.btnEdit}
        >
          <IconButton>
            <FaTrashAlt size={16} />
          </IconButton>
        </button>
      </div>
    </li>
  )
}

export default Task
