import styled from "styled-components"
import CertifyInput from "../../components/Certify-input";
import CertifyButton from "../../components/Certify-button";
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom";



const SignIn = () => {

    const navigate = useNavigate()

    const onPressSignIn = () => {
        alert('분양글 리스트페이지로 이동합니다')
        return navigate("/list-read")
    }

    //----------------------------------------------------------
    const onClickSignUp = () => {
        return navigate("/sign-up")
    }
    //----------------------------------------------------------
    // 로그인 스키마 :
    const signInFormSchema = yup.object().shape({
        email: yup.string().email('이메일 양식이 아닙니다').required("이메일을 입력해주세요"),
        password: yup.string().min(8, '비밀번호는 8글자 이상 입력해주세요').required("비밀번호를 입력해주세요")
    })
    const {
         register,
         formState: {errors, isValid},
         handleSubmit
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(signInFormSchema)
    })
    //----------------------------------------------------------

    return <Container>

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
            안녕하세요 펫브릿지입니다. 통합회원 로그인이 가능합니다.
        </div>

        <LoginForm onSubmit={handleSubmit(onPressSignIn)}>
            <CertifyInput placeholder={'이메일을 입력해주세요'} register={register} name={'email'}
                error={errors.email?.message}
            />
            <CertifyInput placeholder={'비밀번호를 입력해주세요'} register={register} name={'password'}
                error={errors.password?.message}
            />
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

    </Container>
}

export default SignIn


const Container = styled.div`
    padding: 0 16px;
`
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


