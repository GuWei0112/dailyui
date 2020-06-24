import styled from 'styled-components'

export const BallContainer = styled.div`
border-radius: 200px 200px 150px 150px;
border: 1px solid grey;
background-color: black;
width: 80px;
height: 80px;

top: ${props => props.top? props.top-10 + 'px': '106px'};
--left:${props => props.left? props.left + 'px': '10px'};
transform: ${props => props.top && props.left?
     `translate3d(${props.left}px,${props.top}px,${props.zIndex}px) rotate(${props.rotate}deg);`:'translate3d(0px,0px,0px);'}
position: absolute;
z-index: ${props => props.zIndex? props.zIndex : 0};
display: inline;
text-align: center;
`

export const BallTitle = styled.div`
padding: 5px;
margin: auto;
color: white;
margin-top: 25px;
`