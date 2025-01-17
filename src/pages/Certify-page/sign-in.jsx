import styled from "styled-components"
import CertifyInput from "../../components/Certify-input";
import CertifyButton from "../../components/Certify-button";
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom";



const SignIn = () => {

    const navigate = useNavigate()

    //----------------------------------------------------------
    // 로그인 기능 :
    const onPressSignIn = async (data) => {
        const response = await fetch("http://54.180.158.123:8080/api/v1/auth/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })

        const response_data = await response.json()

        console.log(response_data)

        if (response.status === 200) {
            alert('분양글 리스트페이지로 이동합니다')
            return navigate("/list-read")
        }
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
        formState: { errors, isValid },
        handleSubmit
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(signInFormSchema)
    })
    //----------------------------------------------------------

    return <Container>

        <div>
            <LoginTitle>
                안녕하세요:)<br />
                <name style={{
                    fontFamily: "Pretendard-Black",
                }}>펫브릿지</name>입니다.<br />
            </LoginTitle>

            <div style={{
                color: "#a3a3a3",
                fontFamily: "Pretendard-Medium",
                fontSize: 17,
                marginBottom: 30,
                lineHeight: 1.4
            }}>
                안녕하세요, 무료분양을 쉽고 빠르게 도와주는 서비스<br />펫브릿지 플랫폼입니다.
            </div>

            {/*------------------------------ 로그인 ------------------------------*/}
            <LoginForm onSubmit={handleSubmit(onPressSignIn)}>
                <CertifyInput placeholder={'이메일을 입력해주세요'} register={register} name={'email'}
                    error={errors.email?.message}
                />
                <CertifyInput placeholder={'비밀번호를 입력해주세요'} register={register} name={'password'}
                    error={errors.password?.message}
                />

                {/*----------------- 로그인 & 회원가입 버튼 -----------------*/}
                <BtnLayout>
                    <CertifyButton>로그인</CertifyButton>
                    <div style={{ height: "10px" }}></div>
                    <SignUpBtn type="button" onClick={onClickSignUp}>회원가입</SignUpBtn>
                </BtnLayout>
            </LoginForm>
        </div>

    </Container>
}

export default SignIn


const Container = styled.div`
    padding: 160px 16px 0px 16px;
    box-sizing: border-box;
    height: calc(100vh - 60px);
`
const LoginTitle = styled.div`
    font-family: "Pretendard-SemiBold";
    font-size: 42px;
    color: #22252A;
    margin-bottom: 8px;
`;
const LoginForm = styled.form`
    margin-bottom: 10px;
`;

// 로그인 & 회원가입 버튼
const SignUpBtn = styled.button`
    width: 100%;
    height: 56px;
    border: none;
    background-color: #afafaf;
    color: white;
    border-radius: 6px;
    font-family: "Pretendard-Medium";
    font-size: 18px;
`
const BtnLayout = styled.div`
    position: absolute;
    bottom: 16px;
    width: calc(100% - 32px);
`
