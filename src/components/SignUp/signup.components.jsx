import React from 'react'
import { SignUpContainer, SignUpHeader, SignUpLabel, SignUpWrapper, SignUpInput, SignUpButton } from './signup.style'
export default () => {
    return (
        <SignUpContainer>
            <SignUpHeader>Sign Up</SignUpHeader>
            <SignUpWrapper>
                <SignUpLabel email>Email:</SignUpLabel>
                <SignUpInput type='text' />
            </SignUpWrapper>
            <SignUpWrapper>
                <SignUpLabel>Password:</SignUpLabel>
                <SignUpInput type='text' />
            </SignUpWrapper>
            <SignUpButton>Submit</SignUpButton>
        </SignUpContainer>
    )
}