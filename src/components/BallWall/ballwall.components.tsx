import React from 'react'
import { BallWall, CirclePickerItem } from "./ballwall.style";
import Ball from "../../components/Ball/ball.components";
import { ballColor } from "../../days/Day3/day3.types";
import {useBall} from "../../context/day3/context.components";

export default () => {
    const BallPool = useBall() 
    const handleChangeColor = (color: ballColor) => {
      BallPool.dispatch({type: 'ColorChange', value: color.hex})
    };
    return (
        <div>
        <BallWall>
          <Ball
            style={{
              width: "300px",
              height: "300px",
              top: "90px",
              transform: "translate3d(0px,0px,0px)",
              border: "none",
              backgroundColor: BallPool.state.ballColor.hex,
            }}
          />
          <CirclePickerItem
            onChange={(color: ballColor) => handleChangeColor(color)}
          />
        </BallWall>
        </div>
    )
}