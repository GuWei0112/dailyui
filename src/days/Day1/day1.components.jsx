import React, { useState } from 'react'
import Container from '../../layout/Container.components'
import { SignUpHeader, SignUpWrapper, SignUpItem } from './day1.style'
import SignUp from '../../components/SignUp/signup.components'
export default () => {
    return (
        <Container>
            {/* <SignUpHeader>Sign up Page</SignUpHeader> */}
            <SignUpWrapper>
                <SignUpItem>
                    <SignUp />
                </SignUpItem>
                <SignUpItem>

                </SignUpItem>
            </SignUpWrapper>
        </Container>
    )
}