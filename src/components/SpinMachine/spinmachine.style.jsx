
export const SpinMachineLeft = styled.div`
position:absolute;
width: 90px;
height: 425px;
right:32.6vw;
top:18vh;
margin: auto;
z-index: 1;
background-color: #3f51b5;
border-radius:10px 33px 53px 9px;
transform-style:3d;
transform: perspective(1000px) rotateY(60deg);
`


export const SpinMachineBottom = styled.div`
position: absolute;
width: 300px;
height: 300px;
left: 41vw;
margin: auto;
perspective: 500px;
background-color: #eee;
opacity: 0.5;
border-radius:137px 10px 10px 137px;
transform-style:3d;
transform: perspective(1000px) rotateY(0deg);
`

export const SpinMachineTop = styled.div`
position: absolute;
width: 351px;
height: 113px;
left: 40.5vw;
top: 11.9vh;
margin: auto;
perspective: 500px;
background-color: #3f51b5;
border-radius:72px 111px 79px 108px;
transform-style:3d;
transform: perspective(1000px) rotateY(140deg) rotateX(116deg);
`

export const SpinMachineBaseBottom = styled.div`
position: absolute;
width: 223px;
height: 150px;
left: 46.5vw;
top: 61.9vh;
margin: auto;
background-color: #3f51b5;
border-radius:62px 14px 5px 76px;
transform-style:3d;
`

export const SpinMachineButton = styled.div`
position: absolute;
width: 75px;
height: 75px;
top: 68vh;
left: 52vw;
border-radius: 100px;
background-color: #eee;
`

export const SpinMachineButtonInside = styled.div`
position: absolute;
width: 48px;
height: 19px;
top: 72.5vh;
left: 53vw;
border-radius: 100px;
background-color: #3f51b5;
&:hover {
    transition: 2s ease-in-out;
    transform: rotate(180deg);
}
`

export const SpinMachineBottomBase = styled.div`
position: absolute;
width: 300px;
height: 200px;
top: 77.0vh;
left: 43vw;
border-radius: 184px 30px 1px 155px;
background-color: #eee;
z-index: -1;
`

export const SpinMachineBottomArc = styled.div`
position: absolute;
width: 100px;
height: 200px;
top: 77.0vh;
left: 43vw;
background-color: #eee;
border-radius: 150px 20px 11px 10px;
z-index: -1;
`

export const SpinMachineBox = styled.div`
position: absolute;
width: 90px;
height: 100px;
top: 89vh;
left: 51vw;
background-color: white;
border-radius: 20px 20px 0px 0px;
z-index: 0;
`