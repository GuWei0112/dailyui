import React, { } from "react";
import SpinMachine from "../../components/SpinMachine/spinmachine.components";
import { FormContainer} from "./day3.styles";
import BallController from "../../context/day3/context.components";
import BallWall from '../../components/BallWall/ballwall.components'
import BallReward from '../../components/RewardBall/rewardball.components'

export default () => {

  return (
    <BallController>
      <FormContainer>
        <BallWall />
        <SpinMachine />
        <BallReward />
      </FormContainer>
    </BallController>
  );
};
