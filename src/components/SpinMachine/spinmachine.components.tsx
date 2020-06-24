import React,{useState} from 'react'

import { Pool } from "./spinmachine.types";
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
} from "./spinmachine.style";

import Ball from "../../components/Ball/ball.components";

const Balls: Pool = { balls: 20, spinTimes: 0, rewards: [] };

export default () => {
    const [pool, setPool] = useState<Pool | any>(Balls);
    let poolBall = Array.from({ length: pool.balls }, (v, i) => {
      return { name: `#${i + 1}`, id: i, number: i + 1 };
    });
    return (
      <div>
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
      </div>
    );
  };
  