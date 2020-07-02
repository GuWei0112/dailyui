export const poolBall = Array.from({ length: 20 }, (v, i) => {
    return {
      name: `#${i + 1}`,
      id: i,
      number: i + 1,
      price: 0,
    };
  });