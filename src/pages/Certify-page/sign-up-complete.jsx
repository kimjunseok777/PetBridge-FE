import styled from "styled-components"
import CertifyButton from "../../components/Certify-button"
import { useNavigate } from "react-router-dom"
import checkIcon from "../../image/check-icon.png"
import peopleIcon from "../../image/my-icon.png"



const SignUpComplete = () => {

    const navigate = useNavigate()

    const onPressSignIn = () => {
        return navigate("/")
    }

    return <Container>

        {/*-------------- 이미지 레이아웃 --------------*/}
        <Layout>
            {/* 이미지 */}
            <PeopleCircle>
                <PeopleIcon src={peopleIcon} />
                <CheckCircle><CheckIcon src={checkIcon} /></CheckCircle>
            </PeopleCircle>
            {/* 텍스트 */}
            <Text1>회원가입 완료</Text1>
            <Text2>펫브릿지의 회원이 되신 것을 환영합니다.<br />로그인 페이지로 이동합니다.</Text2>
        </Layout>

        {/*-------------- 확인 버튼 --------------*/}
        <BtnPosition>
            <CertifyButton onClick={onPressSignIn}>로그인 바로가기</CertifyButton>
        </BtnPosition>

    </Container>
}

export default SignUpComplete


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 60px);
    position: relative;
`
const Layout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: -120px;
`
// 아이콘
const PeopleCircle = styled.div`
    border-radius: 50%;
    width: 140px;
    height: 140px;
    background-color: #b9b9b9;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    position: relative;
`
const PeopleIcon = styled.img`
    width: 60px;
`
const CheckCircle = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ff830f;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
const CheckIcon = styled.img`
    width: 28px;
    padding-top: 4px;
`

// 텍스트
const Text1 = styled.div`
    text-align: center;
    font-family: "Pretendard-Bold";
    color: #2d2d2d;
    font-size: 36px;
    letter-spacing: -1px;
    margin: 16px 0px 10px;
`
const Text2 = styled.div`
    text-align: center;
    font-family: "Pretendard-Medium";
    color: #a8a8a8;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px;
`
const BtnPosition = styled.div`
    width: calc(100% - 32px);
    position: absolute;
    bottom: 16px;
`


