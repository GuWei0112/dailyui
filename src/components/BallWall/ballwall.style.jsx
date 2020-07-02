import styled from 'styled-components'
import {CirclePicker} from 'react-color'

export const BallWall = styled.div`
position: absolute;
top: 50px;
left: calc(10% - 30px);
width: 400px;
height: 400px;
`

export const CirclePickerItem = styled(CirclePicker)`
position: absolute;
top: 400px;
margin-left: 28px;
margin-top: 28px;
`