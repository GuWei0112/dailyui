import React from 'react'
import {
    FormContainer, FormImg,
    FormWrapper, FormTitle, FormMessage
} from './checkoutsuccess.style'

export default () => {
    return (
        <FormContainer>
            <FormImg />
            <FormWrapper>
                <div style={{height: '100px'}}>
                <FormTitle>Success!</FormTitle>

                </div>
                <FormMessage>Your bill has been successed!</FormMessage>
            </FormWrapper>
        </FormContainer>
    )
}