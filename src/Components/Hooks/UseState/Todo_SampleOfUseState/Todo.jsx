import React, { useState } from "react";

export default function Todo() {

  const [username, setUsername] = useState("Peter")
  const [newTodo, setNewTodo] = useState()
  const [show, setShow] = useState(false)
  const [todoItems, setTodoItems] = useState([
    { action: "Buy Tickets for movie", done: true },
    { action: "Meeting at 6", done: true },
    { action: "Exercise", done: false },
    { action: "Medicine", done: true },
    { action: "Appointment", done: false },
  ])

  const AddToDo = () => {
    const findTodo = todoItems.find((item) => item.action === newTodo)

    if (findTodo) {
      alert("The task is already exist");
    } else {
      setTodoItems([...todoItems, { action: newTodo, done: false }])
    }
  };

  const UpdateToDo = (arg) => {
    let updatedList = todoItems.map((item) => {
      if (item.action === arg) {
        return { ...item, done: !item.done };
      }
      return item;
    })

    setTodoItems(updatedList);
  }

  const tableRows = (arg) => {
    return todoItems
      .filter((item) => item.done === arg)
      .map((item, index) => (
        <tr key={index}>
          <td>{item.action}</td>
          <td>
            <input
              type="checkbox"
              onChange={() => UpdateToDo(item.action)}
              checked={item.done}
            />
          </td>
        </tr>
      ))
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <h4 className="bg-primary text-white text-center">
            {username}, Task Remaining -{" "}
            {todoItems.filter((item) => !item.done).length}
          </h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-warning" onClick={AddToDo}>
            Add Todo
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Description of Task</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>{tableRows(false)}</tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          Show Completed Task{" "}
          <input type="checkbox" onChange={() => setShow(!show)} />
        </div>
      </div>
      {show && (
        <div className="row">
          <div className="col-md-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Description of Task</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>{tableRows(show)}</tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
