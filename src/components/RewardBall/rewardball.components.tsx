import React from "react";

import { useBall } from "../../context/day3/context.components";
import {
  BallContainer,
  BallTitle,
  BallItemsContainer,
  BallItemTitle,
  BallItemPrice,
} from "./rewardball.style";

export default () => {
  const BallPool = useBall();
  let money = BallPool.state.Pool.rewards.map((x: any) => x.price);
  let totalMoney = money.reduce(
    (accumulator: any, currentValue: any) => accumulator + currentValue,
    0
  );
  return (
    <BallContainer>
      <BallTitle>Your reward is ${totalMoney > 0 ? totalMoney : 0}</BallTitle>
      {BallPool.state.Pool.rewards.map((x: any) => (
        <BallItemsContainer key={x.name}>
          <BallItemTitle>{x.name}</BallItemTitle>
          <BallItemPrice>${x.price}</BallItemPrice>
        </BallItemsContainer>
      ))}
    </BallContainer>
  );
};
