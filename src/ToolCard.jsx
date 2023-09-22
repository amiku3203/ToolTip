import React from 'react'
import { Tooltip } from 'react-tooltip'
import "./ToolCard.css"

const ToolCard = ({position}) => {
  return  <>
    <div id='ToolTipElement'>

          <a
  data-tooltip-id="my-tooltip"
  data-tooltip-content="Thanks For Hovering !I am ToolTip"
  data-tooltip-place= {position}
>
   Hover Over Me !
</a>
    </div>
  
 
<Tooltip id="my-tooltip"  />
  </>
}

export default ToolCard
