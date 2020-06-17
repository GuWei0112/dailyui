import React from 'react'
import { SignUpContainer, SignUpHeader, SignUpWrapper, SignUpLabel } from './signupsuccess.style'

export default ({ account,isBlocking }) => {
    if(!account || isBlocking){
        return (
            <SignUpContainer>
            <SignUpHeader>Success</SignUpHeader>
            <SignUpWrapper>
                <SignUpLabel label>Pending...</SignUpLabel>
            </SignUpWrapper>
        </SignUpContainer>
        )
    }
    return (
        <SignUpContainer>
            <SignUpHeader>Success</SignUpHeader>
            <SignUpWrapper>
                <SignUpLabel>your email: {account.email}</SignUpLabel>
            </SignUpWrapper>
            <SignUpWrapper>
                <SignUpLabel label>Sign up is successful</SignUpLabel>
            </SignUpWrapper>
        </SignUpContainer>
    )
}