import React, { useState } from 'react'
import Container from '../../layout/Container.components'
import { SignUpWrapper, SignUpItem } from './day1.style'
import Blocking from '../../util/blocking.components'
import SignUp from '../../components/SignUp/signup.components'
import SignUpSuccess from '../../components/SignUpSuccess/signupsuccess.components'
export default () => {
    const [isBlocking, setIsBlocking] = useState(false)
    const [account, setAccount] = useState({email:'',password:''})

    const setBlocking = () => {
        setIsBlocking(true)
        setTimeout(() => setIsBlocking(false), 2000)
    }

    const handleSubmit = (account) => {
        setAccount(account)
    }

    return (
        <Container>
            {isBlocking && <Blocking />}
            <SignUpWrapper>
                <SignUpItem>
                    <SignUp handleBlocking={() => setBlocking()} handleSubmit={account=> handleSubmit(account)} />
                </SignUpItem>
                <SignUpItem>
                    <SignUpSuccess account={account} isBlocking={isBlocking}/>
                </SignUpItem>
            </SignUpWrapper>
        </Container>
    )
}