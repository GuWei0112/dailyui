import styled,{keyframes} from 'styled-components'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export const FormContainer = styled.div`
padding: 10px;
margin: auto;
background-color: white;
height: 500px;
width: 50%;
`

const jump = keyframes`
from { margin-top: 20px; color: yellow; }
to { margin-top: 50px; color: green; }
`

export const FormImg = styled(CheckCircleIcon)`
margin: auto;
display: block;
width: 20%;
height: 20%;
transition: 2s ease-in-out;
animation: ${jump} 2s infinite linear alternate;
`

export const FormWrapper = styled.div`
padding: 10px;
`

export const FormTitle = styled.div`
font-family: 'Balsamiq Sans', cursive;
margin: auto;
font-size: 20px;
text-align: center;
`

export const FormMessage = styled.div`
font-family: 'Balsamiq Sans', cursive;
padding: 20px;
margin: auto;
margin-top: 30px;
font-size: 30px;
text-align: center;
`