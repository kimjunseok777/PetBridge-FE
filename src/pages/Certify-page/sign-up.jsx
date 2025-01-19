import styled from "styled-components"
import CertifyInput from "../../components/Certify-input"
import CertifyButton from "../../components/Certify-button"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom"
import CertifyInputBtn from "../../components/Certify-input-btn"
import { useState } from "react"
import myIcon from "../../image/my-icon.png"



const SignUp = () => {

    const navigate = useNavigate()

    // 중복확인 & 인증확인 유효성 검사 --> 버튼 활성화로 이러진다
    const [signUpState, setSignUpState] = useState({
        nameState: false,
        codeState: false
    })

    //--------------------------------------------------------------------------------------------
    // 스키마 정의 :
    const signUpFormSchema = yup.object().shape({
        // 회원가입 :
        nickName: yup.string().min(2, '닉네임은 2글자 이상 입력해주세요').max(12, '닉네임은 12글자 이하로 입력해주세요').required("닉네임을 입력해주세요"),
        email: yup.string().email('이메일 양식이 아닙니다').required("이메일을 입력해주세요요"),
        vertificationCode: yup.string().required("인증번호를 입력해주세요"),
        password: yup.string().min(8, '비밀번호는 8글자 이상 입력해주세요').max(16, '비밀번호는 16글자 이하로 입력해주세요').required("비밀번호를 입력해주세요요"),
        "password-confirm": yup.string().oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다다").required("비밀번호 확인을 입력해주세요"),
    })
    //--------------------------------------------------------------------------------------------
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        watch
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(signUpFormSchema)
    })
    //--------------------------------------------------------------------------------------------
    // 닉네임 중복확인 버튼 :
    const onPressCheckOverlapNickName = async () => {
        const response = await fetch(`/api/v1/member/nickname/${watch("nickName")}`, {
            method: "get",
        })
        if (response.status !== 200) return alert('사용할 수 없는 닉네임입니다.')
        if (watch("nickName").length < 2) return alert('닉네임은 2글자 이상 입력해주세요')
        if (12 < watch("nickName").length) return alert('닉네임은 12글자 이하로 입력해주세요')
        if (response.status === 200) {
            // 중복확인 검사
            setSignUpState({
                ...signUpState,
                nameState: true
            })
            return alert('사용가능한 닉네임입니다.')
        }
    }
    //--------------------------------------------------------------------------------------------
    // 인증요청 버튼 :
    const onPressCertificationReq = async () => {
        const response = await fetch("/api/v1/email/emailCode", {
            method: "post",
            body: JSON.stringify({
                email: watch("email"),
            })
        })
        if (response.status !== 200) return alert('인증번호 전송에 실패하였습니다.')
        if (watch("email").trim().length < 1) return alert('이메일을 입력해주세요')
        if (response.status === 200) return alert('인증번호가 전송되었습니다. 메일을 확인해주세요.')
    }
    //--------------------------------------------------------------------------------------------
    // 인증확인 버튼 :
    const onPressCheckCertificationNum = async () => {
        const response = await fetch("/api/v1/email/emailCode", {
            method: "post",
            body: JSON.stringify({
                code: watch("vertificationCode"),
            })
        })
        if (response.status !== 200) return alert('인증이 실패하였습니다.')
        if (watch("vertificationCode").trim().length < 1) return alert('인증번호 입력해주세요')
        if (response.status === 200) {
            // 인증확인 검사
            setSignUpState({
                ...signUpState,
                codeState: true
            })
            return alert('인증이 완료되었습니다.')
        }
    }
    //--------------------------------------------------------------------------------------------
    // 회원가입 버튼 :
    const onPressSignUp = async (data) => {
        const response = await fetch("http://54.180.158.123:8080/api/v1/auth/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
                nickname: data.nickName,
            })
        })

        if (!signUpState.nameState) return alert('닉네임 중복확인을 해주세요.')
        if (!signUpState.codeState) return alert('인증번호 확인을 해주세요.')

        if (response.status === 201) {
            alert("회원가입 완료")
            return navigate("/sign-up-complete")
        }
    }
    //--------------------------------------------------------------------------------------------


    return <Form onSubmit={handleSubmit(onPressSignUp)}>
        <HeaderBox>
            <HeaderIcon>
                <img src={myIcon} style={{ width: "18px" }} />
            </HeaderIcon>
            <HeaderTitle>회원가입</HeaderTitle>
        </HeaderBox>

        {/*------------------------------- 닉네임 -------------------------------*/}
        <CertifyInputBtn placeholder={'닉네임 입력'} name={'nickName'}
            btnText={'중복확인'} register={register} error={errors.nickName?.message}
            func={onPressCheckOverlapNickName}
            disabled={signUpState.nameState}
        />

        {/*------------------------------- 이메일 -------------------------------*/}
        <CertifyInputBtn placeholder={'이메일 입력'} name={'email'}
            btnText={'인증요청'} register={register} error={errors.email?.message}
            func={onPressCertificationReq}
            disabled={signUpState.codeState}
        />

        {/*------------------------------- 인증번호 -------------------------------*/}
        <CertifyInputBtn placeholder={'인증번호 입력'} name={'vertificationCode'}
            btnText={'인증확인'} register={register} error={errors.vertificationCode?.message}
            func={onPressCheckCertificationNum}
            disabled={signUpState.codeState}
        />

        {/*------------------------------- 비밀번호 -------------------------------*/}
        <CertifyInput placeholder={'비밀번호 입력'} register={register}
            type="password" name={'password'} error={errors.password?.message}
        />

        {/*------------------------------- 비번확인 -------------------------------*/}
        <CertifyInput placeholder={'비밀번호 확인'} register={register}
            type="password" name={'password-confirm'} error={errors["password-confirm"]?.message}
        />

        <BtnPosition>
            <CertifyButton>회원가입</CertifyButton>
        </BtnPosition>
    </Form>
}

export default SignUp


const Form = styled.form`
    padding: 36px 16px 16px;
    position: relative;
    height: calc(100vh - 60px);
    box-sizing: border-box;
`
const HeaderBox = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 20px;
`
const HeaderIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ff830f;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2px;
    box-sizing: border-box;
`
const HeaderTitle = styled.div`
    font-family: "Pretendard-Bold";
    color: #22252A;
    font-size: 30px;
`
const BtnPosition = styled.div`
    width: calc(100% - 32px);
    position: absolute;
    bottom: 16px;
`
