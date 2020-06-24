export interface Pool {
    balls: number,
    spinTimes?: number | null,
    rewards?: Array<Reward> | null,
    spin?: ()=> void
}

export interface Reward {
    name: string,
    price: number
}