import styled,{keyframes} from 'styled-components'
import CreditCardIcon from '@material-ui/icons/CreditCard';

export const FormContainer = styled.div`
padding: 10px;
margin: auto;
background-color: white;
height: 500px;
width: 50%;
`

export const FormBanner = styled.div`
padding: 10px;
margin: auto;
width: 80%;
--background-color: #ffaa01;
display: flex;
flex-direction: column;
`

const scale = keyframes`
0%{transfrom: scale(0.05)}
100%{transform: scale(1.2)}
`

export const FormBannerImg = styled(CreditCardIcon)`
width: 100px;
height: 100px;
margin: auto;
animation: ${scale} 2s infinite linear alternate;
&:hover {
    transform: rotateY(180deg);
}
`

export const FormBannerTitle = styled.div`
margin: auto;
font-family: 'Balsamiq Sans', cursive;
font-size: 20px;
`

export const FormWrapper = styled.div`
padding: 10px;
margin: auto;
`

export const Total = styled.div`
background-color: black;
padding: 10px;
margin: auto;
border-radius: 10px;
font-family: 'Balsamiq Sans', cursive;
font-size: 20px;
text-align: center;
width: 50%;
color:white;
`

export const CardContainer = styled.div`
width: 50%;
height: 50%;
padding-top: 30px;
font-family: 'Balsamiq Sans', cursive;
margin: auto;
`

export const CardNumber = styled.label`
float: left;
margin-top: -10px;
margin-left: -10px;
padding: 5px;
background-color: white;
`

export const CardBorder = styled.div`
border:2px solid #eee;
border-radius: 10px;
margin: auto 10px;
`

export const CardNumberInput = styled.input`
margin: 10px;
width: 90%;
height: 80%;
border: none;
--border-bottom: 2px solid #eee;
font-size: 15px;

&:focus, &:active, &:after, &:before {
    outline: none;
    --border: none;
}

`

export const SubmitBtn = styled.button`
margin: auto;
margin-top: 20px;
padding: 10px;
text-align: center;
font-family: 'Balsamiq Sans', cursive;
width: 50%;
display: block;
background-color: black;
color: white;
border-radius: 10px;
font-size: 15px;
outline: none;
border: none;
`