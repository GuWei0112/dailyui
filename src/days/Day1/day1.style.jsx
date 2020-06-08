import styled from 'styled-components'

export const SignUpHeader = styled.div`
padding: 10px;
padding-bottom:20px;
text-align: center;
font-size: 2.5rem;
font-weight: 800;
`

export const SignUpWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
grid-column-gap:100px;
`

export const SignUpItem = styled.div`
grid-area:1;
background-color: white;
height: 420px;
border-radius: 10px;
box-shadow: 1px 1px #eeeeec;
width: 400px;
margin: auto;
`