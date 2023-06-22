import React, { useState } from "react";

export default function ArrayOfObjectsUsingUseState() {
    
  const [username, setUsername] = useState("Peter")

  const [todoItems, setTodoItems] = useState([ // initial set a list of todo action objects into todoItems state
    { action: "Buy Tickets for movie", done: true },
    { action: "Meeting at 6", done: true },
    { action: "Exercise", done: false },
    { action: "Medicine", done: true },
    { action: "Appointment", done: false },
  ])

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
        <div className="col-md-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Description of Task</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {todoItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.action}</td>
                  <td>
                    <input type="checkbox" checked={item.done} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
