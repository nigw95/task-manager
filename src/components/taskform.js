import React, { useContext, useState, useEffect } from "react"
import { TaskListContext } from "../context/TaskListContext"
import { confirmAlert } from "react-confirm-alert"

import "react-confirm-alert/src/react-confirm-alert.css"
import formStyles from "./styles/taskform.module.css"

const TaskForm = () => {
  const { addTask, clearList, editItem, editTask } = useContext(TaskListContext)

  const [title, setTitle] = useState("")

  const changeHandler = e => {
    setTitle(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault()

    if (!editItem) {
      if (title.trim() !== "") {
        addTask(title)
      }

      setTitle("")
    } else {
      if (title.trim() !== "") {
        editTask(title, editItem.id)
      }

      setTitle("")
    }
  }

  const clearHandler = e => {
    confirmAlert({
      title: "Clear the list?",
      buttons: [
        {
          label: "Yes",
          onClick: () => clearList(),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
      onClickOutside: () => {},
      onKeypressEscape: () => {},
    })
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
    } else {
      setTitle("")
    }
  }, [editItem])

  return (
    <form onSubmit={submitHandler} className={formStyles.form}>
      <input
        type="text"
        value={title}
        aria-label="taskinput"
        className={formStyles.taskInput}
        placeholder="Add Task"
        onChange={changeHandler}
      />
      <div className={formStyles.buttons}>
        <button type="submit" className={formStyles.btnAdd}>
          {editItem ? "Edit Task" : "Add Task"}
        </button>
        <button onClick={clearHandler} className={formStyles.btnClear}>
          Clear
        </button>
      </div>
    </form>
  )
}

export default TaskForm
