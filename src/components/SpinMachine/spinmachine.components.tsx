import React, { useState } from "react";
import { useBall } from "../../context/day3/context.components";
import {
  SpinMachineLeft,
  SpinMachineBottom,
  SpinMachineBaseBottom,
  SpinMachineTop,
  SpinMachineButton,
  SpinMachineButtonInside,
  SpinMachineBottomBase,
  SpinMachineBottomArc,
  SpinMachineBox,
  SpinMachineResetButton
} from "./spinmachine.style";

import Ball from "../../components/Ball/ball.components";
import { randomPercent, findBall } from "../../util/lottery.components";
import Snackbar from "@material-ui/core/Snackbar";
export default () => {
  const BallPool = useBall();
  const [open, setOpen] = useState(false);
  const [randomP, setRandomPercent] = useState(randomPercent(20));
  let { all, result } = randomP;

  const handleSpin = () => {
    let number = reRandom(BallPool.state.Pool.balls);
    let ball = findBall(all, result, number);
    if (ball.price != null) {
      let SpinBall = BallPool.state.Pool.balls.find(
        (x: any) => x.number === ball.number
      );
      SpinBall.price = ball.price;
      BallPool.dispatch({ type: "Spin", value: { ...SpinBall } });
    }
    
    setOpen(true);
    setTimeout(() => handleClose(), 1000);
  };

  const handleReset = () => {
    BallPool.dispatch({ type: "Reset", value: {} })
  }

  const handleClearBox = () => {
    BallPool.dispatch({ type: "ClearBox", value: {} })
  }

  const handleClose = () => {    
    setOpen(false);
  };

  const reRandom = (value: any): number => {
    let randomBall = Math.round(Math.random() * 20);
    if (value.length > 0) {
      let findBall = value.find((x: any) => x.number === randomBall);
      if (findBall && findBall !== undefined) {
        return findBall.number;
      } else {
        return reRandom(value);
      }
    } else return 0;
  };
  return (
    <div>
      {BallPool.state.Pool.spinBall && <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical:'bottom', horizontal:'right' }}
        message={`You got the ${BallPool.state.Pool.spinBall.name} $${BallPool.state.Pool.spinBall.price }`}
      />
      }
      <SpinMachineLeft />
      <SpinMachineBottom>
        {BallPool.state.Pool.balls.map((ball: any) => (
          <Ball
            name={ball.name}
            number={ball.number}
            key={ball.number}
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: `${BallPool.state.ballColor.hex}`,
            }}
          />
        ))}
      </SpinMachineBottom>
      <SpinMachineTop />

      <SpinMachineBaseBottom />
      <SpinMachineButton />
      <SpinMachineButtonInside onClick={() => handleSpin()} />
      <SpinMachineResetButton onClick={() => handleReset()}/>
      <SpinMachineBottomBase />
      <SpinMachineBottomArc />
      <SpinMachineBox>
        {BallPool.state.Pool.spinBall && (
          <Ball
            onClick={()=>handleClearBox()}
            name={BallPool.state.Pool.spinBall.name}
            number={BallPool.state.Pool.spinBall.number}
            style={{
              width: "80px",
              height: "80px",
              top: "16px",
              transform: "translate3d(7px, 0px, 0px)",
              backgroundColor: `${BallPool.state.ballColor.hex}`,
            }}
          />
        )}
      </SpinMachineBox>
    </div>
  );
};
