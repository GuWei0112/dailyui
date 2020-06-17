import React from 'react'
import styled, { keyframes } from 'styled-components'

const BlockingContainer = styled.div`
position: absolute;
width: 94%;
height: 79%;
background-color: white;
opacity: 0.7;
margin: auto;
transition: 2s ease-in-out;
`

const blockingJump = keyframes`
0% {
    transform: translate(0px,60%);
  }
  25% {
    transform: translate(0px,0%);
  }
  50% {
    transform: translate(0px,100%);
  }
  75% {
    transform: translate(0px,60%);
  }
  100% {
    transform: translate(0px,100%);
  }
`

const BlockingCircle = styled.div`

width:50px;
height: 50px;
border-radius: 100%;
margin: auto;
margin-top: 200px;
transition: 2s ease-in-out;
animation: ${blockingJump} 2s infinite cubic-bezier(0, 0.2, 0.8, 1);
z-index: 2;
background-color: #eee;
border: 1px solid white;
`

const blockingTick = keyframes`
0% { background-color: transparent }
  25% { background-color: transparent}
  50% { background-color: #eeeeec; opacity: 0.5; }
  75% {background-color: #eee; opacity: 0.05;}
  100% {background-color: #eee; opacity:1;}
`

const BlockingPoint = styled.div`
width:100px;
z-index:2;
height: 30px;
border-radius: 100%;
background-color: #eee;
margin:auto;
margin-top: 30px;
transition: 2s ease-in-out;
animation: ${blockingTick} 2s infinite cubic-bezier(0, 0.2, 0.8, 1)
`

export default () => {
    return (
        <BlockingContainer>
            <BlockingCircle />
            <BlockingPoint />
        </BlockingContainer>
    )
}