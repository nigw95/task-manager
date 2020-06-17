import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"
import TaskList from "../components/tasklist"
import TaskForm from "../components/taskform"
import TaskListContextProvider from "../context/TaskListContext"
import Task from "../components/task"

import indexStyles from "../components/styles/index.module.css"

const IndexPage = () => (
  <TaskListContextProvider>
    <Layout>
      <div className={indexStyles.container}>
        <div className={indexStyles.appWrapper}>
          <Header />
          <div className={indexStyles.main}>
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </Layout>
  </TaskListContextProvider>
)

export default IndexPage
