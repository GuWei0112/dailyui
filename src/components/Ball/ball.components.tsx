import React from 'react'
import {BallContainer, BallTitle} from './ball.style'
import {Props} from './ball.types'

const Ball : React.FC<Props> = ({ name, number }) => {
    let rotate = Math.round(Math.random()*100)
    let zIndex = Math.round(Math.random()*10)
    return (
        <BallContainer top={number+rotate+20} left={number *5+70} rotate={rotate} zIndex={zIndex}>
            <BallTitle>
            {name} : {number}
            </BallTitle>
        </BallContainer>
    )
}

export default Ball