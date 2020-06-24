import React, { useState } from "react";
import { Pool } from "./day3.types";
import {
  FormContainer,
  SpinMachineLeft,
  SpinMachineBottom,
  SpinMachineBaseBottom,
  SpinMachineTop,
  SpinMachineButton,
  SpinMachineButtonInside,
  SpinMachineBottomBase,
  SpinMachineBottomArc,
  SpinMachineBox,
} from "./day3.styles";

import Ball from "../../components/Ball/ball.components";

const Balls: Pool = { balls: 20, spinTimes: 0, rewards: [] };

export default () => {
  const [pool, setPool] = useState<Pool | any>(Balls);
  let poolBall = Array.from({ length: pool.balls }, (v, i) => {
    return { name: `#${i + 1}`, id: i, number: i + 1 };
  });
  return (
    <FormContainer>
      <SpinMachineLeft />
      <SpinMachineBottom>
        {poolBall.map((ball) => (
          <Ball name={ball.name} number={ball.number} key={ball.number}/>
        ))}
      </SpinMachineBottom>
      <SpinMachineTop />

      <SpinMachineBaseBottom />
      <SpinMachineButton />
      <SpinMachineButtonInside />
      <SpinMachineBottomBase />
      <SpinMachineBottomArc />
      <SpinMachineBox />
    </FormContainer>
  );
};
