import styled, {keyframes} from 'styled-components'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

export const FormContainer = styled.div`
padding: 10px;
margin: auto;
background-color: white;
height: 500px;
width: 50%;
`

export const FormWrapper = styled.div`
padding: 10px;
margin: auto;
width: 80%;
display: flex;
flex-direction: column;
`

export const FormBanner = styled.div`
margin-bottom:10px;
text-align: center;
height: 150px;
`

const swing = keyframes`
0% {transform: rotate(10deg)}
100% {transform: rotate(-10deg)}
`

export const FormBannerImg = styled(ShoppingBasketIcon)`
width: 100px;
height: 100px;
transition: 2s ease-in-out;
animation: ${swing} 2s infinite linear alternate;
`

export const FormBannerTitle = styled.div`
font-family: 'Balsamiq Sans', cursive;
font-size: 20px;
padding: 10px;
`

export const FormItems = styled.div`
flex: 1;
margin: 5px;
padding:5px;
display: flex;
flex-direction: row;
`

export const FormItemTitle = styled.div`
flex: 1;
line-height: 24px;
margin-left: 10px;
font-family: 'Balsamiq Sans', cursive;
`

export const FormItemStatus = styled(LocalAtmIcon)`
flex: 1;
margin-left: 340px;
`

export const BlankLine = styled.div`
padding: 10px;
width: 80%;
height: 3%;
margin: auto;
border-bottom: 2px solid #eee;
`

export const Total = styled.div`
flex: 1;
text-align: right;
margin-top: 15px;
font-weight: bold;
font-family: 'Balsamiq Sans', cursive;
`

export const CheckoutButton = styled.button`
width: 50%;
margin: auto;
margin-top: 10px;
border: 1px solid #eee;
color: white;
background-color: black;
padding: 10px;
border-radius: 10px;
font-family: 'Balsamiq Sans', cursive;
`