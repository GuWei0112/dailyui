import { Ball } from "../components/SpinMachine/spinmachine.types";

const randomNumber = (max: any) => {
  const Number = Math.random();
  if (Number < 0.5) return 1;
  else if (Number < 0.65) return 2;
  else if (Number < 0.8) return 3;
  else if (Number < 0.9) return 4;
  else if (Number < 1) return max;
  return 0;
};

const transformMoney = (percent: number) => {
  if (percent > 1 - 0.5) return 100;
  else if (percent > 1 - 0.65) return 200;
  else if (percent > 1 - 0.8) return 300;
  else if (percent > 1 - 0.9) return 500;
  else if (percent > 1 - 0.96) return 1000;
};

export const findBall = (all: any, result: any, randNum: number): Ball => {
  let ball = {} as Ball;
  // transform the money reward
  if (randNum > 0) {
    let ballResult = result.find((x: any) => randNum === x.count);
    let ballNumber = all.find((x: any) => ballResult.number === x.number);
    ball.price = transformMoney(ballNumber.percent);
    ball.number = randNum;
  }  
  return ball;
};

export const randomPercent = (total: number) => {
  let result: any = [];
  let all: any = [];

  /// all of result
  for (var i = 1; i <= total; i++) {
    const number = randomNumber(5);
    result.push({ number, count: i });
  }
  /// calculate any condition
  for (var j in result) {
    let t = all.findIndex((t: any) => t.number === result[j].number);
    if (t > -1) {
      all[t].count++;
      all[t].percent = all[t].count / total;
    } else {
      all.push({ number: result[j].number, count: 1, percent: 1 / total });
    }
  }
  /// summarize the every chance
  result.forEach((r: any) => {
    let t = all.find((t: any) => t.number === r.number);
    if (t) r.percentage = t.percent / t.count;
  });

  return { all, result };
};
