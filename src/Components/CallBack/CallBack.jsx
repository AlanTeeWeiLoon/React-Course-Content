import React from "react";

export default function CallBack(props) {
  return (
    <tr key={props.index}>
      <td>{props.index + 1}</td>
      <td>{props.Name}</td>
      <td>
        {/* call promoteName function in parent component */}
        <button onClick={() => props.promoteName(props.Name)}>Promote</button>
      </td>
    </tr>
  );
}
