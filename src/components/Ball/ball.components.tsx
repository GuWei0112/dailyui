import React, {useState} from 'react'
import {BallContainer, BallTitle} from './ball.style'
import {Props} from './ball.types'

const Ball : React.FC<Props> = ({ name, number, style, onClick }) => {
    const [rotate,setRotate] = useState(Math.round(Math.random()*100))
    const [zIndex,setZIndex] = useState(Math.round(Math.random()*10))
    return (
        <BallContainer onClick={onClick} top={number+rotate+20} left={number *5+70} rotate={rotate} zIndex={zIndex} style={style}>
            <BallTitle>
            {name}{number}
            </BallTitle>
        </BallContainer>
    )
}

export default Ball