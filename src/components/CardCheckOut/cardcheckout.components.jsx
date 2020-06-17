import React,{useState} from 'react'
import {
    FormContainer, FormBanner, FormBannerImg,
    FormBannerTitle, FormWrapper, Total,
    CardNumber, CardContainer, CardBorder, CardNumberInput
} from './cardcheckout.style'

export default () => {
    const [CardNum, setCardNumber] = useState('')
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
            // dispatch({ type: "updateCardNumber", payload: cardNumber });
        }
    }

    return (
        <FormContainer>
            <FormBanner>
                <FormBannerImg />
                <FormBannerTitle>It's time for checkout!</FormBannerTitle>
            </FormBanner>
            <FormWrapper>
                <Total>$100</Total>
                <CardContainer>
                    <CardNumber>CardNumber</CardNumber>
                    <CardBorder>
                        <CardNumberInput type='text' onChange={(e)=>handleUpdateCardNumber(e)} value={CardNum}/>
                    </CardBorder>
                </CardContainer>
            </FormWrapper>
        </FormContainer>
    )
}