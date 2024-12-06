import { useState } from "react"
import TopBar from "../../components/TopBar"
import styled from "styled-components"
import CertifyInput from "../../components/Cerify-input"
import CertifyButton from "../../components/Certify-button"
import SignUpNum1 from "./sign-up-1"
import SignUpNum2 from "./sign-up-2"



const SignUp = () => {

    const [signUpState, setSignUpState] = useState('num1')

    return <>
        {signUpState === 'num1' ? <SignUpNum1 setSignUpState={setSignUpState}/> :
        <SignUpNum2 setSignUpState={setSignUpState}/>}
    </>
}

export default SignUp



