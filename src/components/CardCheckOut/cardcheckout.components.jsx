import React, { useState } from 'react'
import {
    FormContainer, FormBanner, FormBannerImg,
    FormBannerTitle, FormWrapper, Total,
    CardNumber, CardContainer, CardBorder, CardNumberInput, SubmitBtn
} from './cardcheckout.style'

export default ({history}) => {
    const [CardNum, setCardNumber] = useState('')
    const [Cvv, setCvv] = useState('')
    const [ValidDt, setValidDate] = useState('')
    const handleUpdateCardNumber = (e) => {
        const re = /^(\d{0,4}\s?){0,4}$/;

        const newCardNumber = e.target.value.replace(/\s/g, "");
        let cardNumber = "";

        for (let i = 0; i < newCardNumber.length; i++) {
            cardNumber += newCardNumber.charAt(i);
            if ([3, 7, 11].includes(i)) {
                cardNumber += " ";
            }
        }
        cardNumber = cardNumber.trim();
        if (newCardNumber === "" || re.test(newCardNumber)) {
            setCardNumber(cardNumber)
        }
    }

    const handleUpdateCVV = (e) => {
        const newValue = e.target.value;
        const re = /^(\d\s?){0,3}$/;
        if (newValue === "" || re.test(newValue)) {
            setCvv(e.target.value)
        }
    }

    const handleUpdateValidDate = (e) => {
        const newValue =e.target.value.replace(/\s/g, "");
        const re = /^(\d{0,2}\s?){0,2}$/;
        // /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/ 2020-06-18
        let validDt = "";

        for (let i = 0; i < newValue.length; i++) {
            validDt += newValue.charAt(i);
            if ([1].includes(i)) {
                validDt += " ";
            }
        }
        validDt = validDt.trim();
        if (newValue === "" || re.test(newValue)) {
            setValidDate(validDt)
        }
    }

    const handleGoToCheckout = () => {
        history.push('/day2/success')
    }

    return (
        <FormContainer>
            <FormBanner>
                <FormBannerImg />
                <FormBannerTitle>It's time for checkout!</FormBannerTitle>
            </FormBanner>
            <FormWrapper>
                <Total>Total : $100</Total>
                <CardContainer>
                    <CardNumber>CardNumber</CardNumber>
                    <CardBorder>
                        <CardNumberInput type='text' onChange={(e) => handleUpdateCardNumber(e)} value={CardNum} />
                    </CardBorder>
                </CardContainer>
                <CardContainer style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <CardNumber>CVV</CardNumber>
                        <CardBorder>
                            <CardNumberInput type='text' onChange={(e) => handleUpdateCVV(e)} value={Cvv}/>
                        </CardBorder>
                    </div>
                    <div>
                        <CardNumber>Valid Date</CardNumber>
                        <CardBorder>
                            <CardNumberInput type='text' onChange={(e) => handleUpdateValidDate(e)} value={ValidDt}/>
                        </CardBorder>
                    </div>
                </CardContainer>
                <SubmitBtn onClick={handleGoToCheckout}>Submit</SubmitBtn>
            </FormWrapper>
        </FormContainer>
    )
}