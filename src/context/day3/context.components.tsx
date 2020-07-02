import React, { createContext, useReducer, useContext, Reducer } from "react";
import {
  BallProps,
  InitContextProps,
  BallProviderProps,
  Actions,
} from "./context.types";
import {poolBall} from '../../constants/day3.components'

export const BallContext = createContext({} as InitContextProps);
export const BallProvider: React.FC<BallProviderProps> = ({
  reducer,
  initState,
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const value = { state, dispatch };
  return <BallContext.Provider value={value}>{children}</BallContext.Provider>;
};
export const useBall = () => useContext(BallContext);

const BallController: React.FC = ({ children }) => {
  
  const initState: BallProps = {
    ballColor: {
      hex: "rgb(33, 150, 243)",
    },
    Pool: {
      balls: poolBall,
      spinBall: null,
      spinTimes: 0,
      rewards: [],
      spin: () => {},
    },
  };

  const reducer: Reducer<BallProps, Actions> = (state, action) => {
    switch (action.type) {
      case "Spin":
        return {
          ...state,
          Pool: {
            ...state.Pool,
            balls: state.Pool.balls.filter(
              (x: any) => x.number !== action.value.number
            ),
            spinBall: {
              name: action.value.name,
              price: action.value.price,
              id: action.value.id,
              number: action.value.number,
            },
            spinTimes: state.Pool.spinTimes + 1,
            rewards: [
              ...state.Pool.rewards,
              { name: action.value.name, price: action.value.price },
            ],
          },
        };
      case "ColorChange":
        return {
          ...state,
          ballColor: {
            hex: action.value,
          },
        };
      case 'ClearBox':
        return {
          ...state,
          Pool:{
            ...state.Pool,
            spinBall: null
          }
        }
      case 'Reset':
        return initState
      default:
        return state;
    }
  };

  return (
    <BallProvider reducer={reducer} initState={initState}>
      {children}
    </BallProvider>
  );
};

export default BallController;
