export interface Pool {
    balls: Array<Ball> | any,
    spinBall: Ball | null,
    spinTimes: number,
    rewards: Array<Reward>,
    spin: ()=> void | null
}

export interface Reward {
    name: string,
    price: number
}

export interface Ball {
    name: string,
    number: number,
    id: number,
    price: number | any
}