import React,{useState} from 'react'
import { SignUpContainer, SignUpHeader, SignUpLabel, SignUpWrapper, SignUpInput, SignUpButton } from './signup.style'
export default ({ handleBlocking, handleSubmit }) => {
    const [field,setField] = useState({email:'',password:''})

    const handleSubmitField =()=>{
        handleBlocking()
        handleSubmit(field)
    }

    const handleValueChange =(name,value) =>{
        setField({...field, [name]:value})
    }
    return (
        <SignUpContainer>
            <SignUpHeader>Sign Up</SignUpHeader>
            <SignUpWrapper>
                <SignUpLabel email>Email:</SignUpLabel>
                <SignUpInput type='text' value={field.email} onChange={e=> handleValueChange('email',e.target.value)}/>
            </SignUpWrapper>
            <SignUpWrapper>
                <SignUpLabel>Password:</SignUpLabel>
                <SignUpInput type='text' value={field.password} onChange={e=> handleValueChange('password',e.target.value)}/>
            </SignUpWrapper>
            <SignUpButton onClick={()=>handleSubmitField()}>Submit</SignUpButton>
        </SignUpContainer>
    )
}