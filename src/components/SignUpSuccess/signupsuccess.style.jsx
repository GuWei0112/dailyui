import styled from 'styled-components'

export const SignUpContainer = styled.div`
padding: 10px;
text-align:center;
`

export const SignUpHeader = styled.div`
font-size: 2.5rem;
padding: 10px;
text-align: center;
font-family: 'Balsamiq Sans', cursive;
`

export const SignUpWrapper = styled.div`
display: block;
margin: 10px;
margin-top: 50px;
`

export const SignUpLabel = styled.label`
padding: 10px;
font-size: ${props => props.label?'30px':'20px'};
font-family: 'Balsamiq Sans', cursive;
padding-right: 20px;
`