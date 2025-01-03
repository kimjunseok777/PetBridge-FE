import styled from "styled-components"
import CertifyButton from "../../components/Certify-button"
import { useNavigate } from "react-router-dom"
import CheckIcon from "../../image/check-icon.png"



const SignUpComplete = () => {

    const navigate = useNavigate()

    const onPressSignIn = () => {
        return navigate("/")
    }

    return <Container>
        <Layout>
            <CheckCircle><Img src={CheckIcon}/></CheckCircle>
            <Text1>회원가입 완료</Text1>
            <Text2>펫브릿지에 오신 것을 환영합니다!<br/>회원가입을 완료하셨습니다, 로그인 페이지로 이동합니다.</Text2>
        </Layout>
        <CertifyButton onClick={onPressSignIn}>로그인 바로가기</CertifyButton>
    </Container>
}

export default SignUpComplete


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40% 16px;
`
const Layout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const CheckCircle = styled.div`
    border-radius: 50%;
    width: 80px;
    height: 80px;
    background-color: #FF9500;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Img = styled.img`
    width: 40px;
    padding-top: 10px;
`
const Text1 = styled.div`
    text-align: center;
    font-family: "Pretendard-Bold";
    color: #2d2d2d;
    font-size: 40px;
    letter-spacing: -1.5px;
    margin: 16px 0px;
`
const Text2 = styled.div`
    text-align: center;
    font-family: "Pretendard-SemiBold";
    color: #a8a8a8;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 30px;
`


