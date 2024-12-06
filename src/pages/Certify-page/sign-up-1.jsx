import styled from "styled-components"
import CertifyInput from "../../components/Cerify-input"
import CertifyButton from "../../components/Certify-button"
import TopBar from "../../components/TopBar"
import CheckBox from "../../components/CheckBox"




const SignUpNum1 = ({setSignUpState}) => {

    const onPressSignUp = (event) =>{
        event.preventDefault()
        return setSignUpState('num2')
    }

    return <>
        <TopBar/>

        <p style={{
            fontFamily: "Pretendard-SemiBold",
            fontSize: 36
        }}>회원가입</p>

        <SignUpForm onSubmit={onPressSignUp}>
            <CertifyInput placeholder={'이메일 입력'}/>
            <CertifyInput placeholder={'비밀번호 입력'}/>
            <CertifyInput placeholder={'비밀번호 확인'}/>

            <p style={{
                fontFamily: "Pretendard-Bold",
                color: "#1b1b1b",
                fontSize: 24
            }}>알림동의</p>


            <form typeof="radio" style={{
                display: 'flex',
                gap: 50
            }}>
                <CheckBox text={'메일'}/>
                <CheckBox text={'메세지'}/>
            </form>


            <p style={{
                fontFamily: "Pretendard-Bold",
                color: "#1b1b1b",
                fontSize: 24
            }}>이용약관</p>

            <CertifyButton>다음</CertifyButton>
        </SignUpForm>
    </>
}

export default SignUpNum1


const SignUpForm = styled.form`
    margin-bottom: 20px;
`
