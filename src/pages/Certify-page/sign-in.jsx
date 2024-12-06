import styled from "styled-components"
import CertifyInput from "../../components/Cerify-input";
import CertifyButton from "../../components/Certify-button";
import TopBar from "../../components/TopBar";
import {useNavigate} from "react-router-dom"



const SignIn = ({setFormState}) => {

    const navigate = useNavigate()

    const onPressSignIn = (event) => {
        event.preventDefault()
        alert('분양글 리스트페이지')
        return navigate("/list")
    }

    //----------------------------------------------------------
    const onClickSignUp = () => {
        return setFormState(false)
    }
    //----------------------------------------------------------

    return <>
        <TopBar/>

        <LoginTitle>
            안녕하세요:)<br/>
            <name style={{
                fontFamily: "Pretendard-Black"
            }}>펫브릿지</name>입니다.<br/>
        </LoginTitle>

        <div style={{
            color: "#b2b2b2",
            fontFamily: "Pretendard-Medium",
            fontSize: 16,
            marginBottom: 30,
        }}>
            안녕하세요 펫브릿지입니다. 통합회원 로드인이 가능합니다.
        </div>

        <LoginForm onSubmit={onPressSignIn}>
            <CertifyInput placeholder={'이메일을 입력해주세요'}/>
            <CertifyInput placeholder={'비밀번호를 입력해주세요'}/>
            <CertifyButton>로그인</CertifyButton>
        </LoginForm>

        <OtherBtnBox>
            <p>아이디 찾기</p>
            <OtheBtnLine/>
            <p>비밀번호 찾기</p>
            <OtheBtnLine/>
            <p onClick={onClickSignUp}>회원가입</p>
        </OtherBtnBox>

        <SocialLogin>
            <SocialLine/>
            <p style={{
                margin: 30
            }}>SNS계정으로 로그인</p>
            <SocialLine/>
        </SocialLogin>

        <div style={{
            display: "flex",
            justifyContent: "center",
            gap: 10
        }}>
            <SocialIcon/>
            <SocialIcon/>
        </div>
    </>
}

export default SignIn


const LoginTitle = styled.div`
    font-family: "Pretendard-SemiBold";
    font-size: 36px;
    margin: 80px 0px 10px;
    color: #22252A;
`;


const LoginForm = styled.form`
    margin-bottom: 20px;
`;


const OtherBtnBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 60px;
    font-family: "Pretendard-Medium";
    color: #646464;
    margin-bottom: 30px;
    &>p:hover{
        color: #383838;
        cursor: pointer;
    }
`
const OtheBtnLine = styled.div`
    background-color: #D3D3D3;
    width: 1px;
    height: 8px;
`


const SocialLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard-Medium";
    color: #959595;
    font-size: 14px;
`
const SocialLine = styled.div`
    /* width: 32%; */
    min-width: 30%;
    /* max-width: 50%; */
    height: 1px;
    background-color: #D9D9D9;
`


const SocialIcon = styled.div`
    width: 46px;
    height: 46px;
    background-color: #e0e0e0;
    border-radius: 50%;
`


