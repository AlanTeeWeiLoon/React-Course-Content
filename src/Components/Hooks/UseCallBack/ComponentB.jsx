import React, { memo } from 'react'


function ComponentB({sample}) {
  console.log("Component B is running")
  return (
    <div>
      {" "}
    </div>
  )
}
export default memo(ComponentB)