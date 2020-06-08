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
font-family: 'Balsamiq Sans', cursive;
padding-right:${props=> props.email?'47px':'20px'};
`

export const SignUpInput = styled.input`
padding: 5px;
border: 1px solid #eeeeee;
background:#ccc;
font-family: 'Balsamiq Sans', cursive;
border-radius: 3px;

&:active {
    background-color: grey;
    transition: .2s ease-in-out;
}

&:focus {
    background-color: transparent;
    transition: .2s ease-in-out;
}
`

export const SignUpButton = styled.button`
padding: 10px;
width: 275px;
border-radius: 3px;
margin: 50px auto;
border: 1px solid transparent;
font-family: 'Balsamiq Sans', cursive;

&:active {
    background-color: grey;
    border: 1px solid transparent;
    transition: .2s ease-in-out;
}

&:focus {
    background-color: transparent;
    transition: .2s ease-in-out;
}
`