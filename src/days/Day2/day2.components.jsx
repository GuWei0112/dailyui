import React from 'react'
import {
    FormContainer, FormWrapper,
    FormItems, FormBanner,
    FormBannerTitle, FormBannerImg, FormItemTitle,
    FormItemStatus, BlankLine, Total,
    CheckoutButton
} from './day2.style'

export default ({ history }) => {
    const handleGoToCheckout = () => {
        history.push('/day2/checkout')
    }
    return (
        <FormContainer>
            <FormBanner>
                <FormBannerImg />
                <FormBannerTitle>We are almost there!</FormBannerTitle>
            </FormBanner>
            <FormWrapper>
                <FormItems>
                    <FormItemTitle>Apples</FormItemTitle>
                    <FormItemStatus />
                </FormItems>
                <FormItems>
                    <FormItemTitle>Bananas</FormItemTitle>
                    <FormItemStatus />
                </FormItems>
                <FormItems>
                    <FormItemTitle>Cherries</FormItemTitle>
                    <FormItemStatus />
                </FormItems>
            </FormWrapper>
            <BlankLine />
            <FormWrapper>
                <FormItems>
                    <Total>Total: $1000</Total>
                </FormItems>
                <CheckoutButton onClick={handleGoToCheckout}>Checkout</CheckoutButton>
            </FormWrapper>
        </FormContainer>
    )
}