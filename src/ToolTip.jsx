import React from 'react'

import { useState } from 'react'
import ToolCard from "./ToolCard.jsx"
import "./ToolTip.css"
const ToolTip = () => {
const [position,setPosition]=useState("Top");
 


  return <>
       <select value={position}   id='selectOption'  onChange={(e)=>setPosition(e.target.value)}>
            <option value='top' key=''> Top</option>
            <option value='left' key=''> Left</option>
            <option value='right' key=''> Right</option>
            <option value='bottom' key=''> Bootom</option>
       </select>
      <ToolCard position={position} />
  </>
}

export default ToolTip
