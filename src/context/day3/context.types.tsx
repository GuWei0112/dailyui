import {Dispatch, Reducer} from 'react'
import {ballColor} from '../../days/Day3/day3.types'
import {Pool} from '../../components/SpinMachine/spinmachine.types'

export interface BallProps {
    ballColor : ballColor
    Pool: Pool
}

export interface Actions {
    type: string;
    value: any;
}

export interface BallProviderProps {
    reducer: Reducer<BallProps, Actions>;
    initState: BallProps;
}

export interface InitContextProps {
    state: BallProps;
    dispatch: Dispatch<Actions>;
}