import React from 'react'


export default function ArrayOfObjectAsProps(props) {
  return (
    <div>
        <table border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.obj.map((item, index)=>(
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

// Props : {
//     obj : [
//         {id:1, name:'Peter',age:21},
//         {id:2, name:'Parker',age:22},
//         {id:3, name:'John',age:23},
//         {id:4, name:'Rose',age:24},
//         {id:5, name:'Joey',age:25},
//       ]
// }

