import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
padding:20px;
height: 400px;
border-radius: 3px;
`

export default ({ children }) => {
    return (
    <Container>{children}</Container>
    )
}