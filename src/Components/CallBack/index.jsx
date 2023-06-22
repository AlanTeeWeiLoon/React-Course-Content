import React, { useState } from "react";
import CallBack from "./CallBack";

export default function Index() {
  const [list, setList] = useState(["Peter", "John", "Ross", "Joey"]);

  const promoteName = (arg) => { // argurments pass when call back
    let temp = [arg, ...list.filter((val) => val != arg)] // set the received argurment at the 1st of Array, then unpack others and put in array accordingly
    setList(temp);
  };

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (

            // When onclick in CallBack components will call back promoteName function in this component
            <CallBack index={index} Name={item} promoteName={promoteName} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
