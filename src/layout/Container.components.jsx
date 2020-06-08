import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
padding:20px;
height: 600px;
--background-color: #3f51b5;
border-radius: 3px;
`

export default ({ children }) => {
    return (
    <Container>{children}</Container>
    )
}