import styled from "styled-components"
import CertifyInput from "../../components/Certify-input"
import CertifyButton from "../../components/Certify-button"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom"
import TermsOfUse from "./sign-up/termsOfUse"
import CertifyInputBtn from "../../components/Certify-input-btn"



const SignUp = () => {

    const navigate = useNavigate()

    //--------------------------------------------------------------------------------------------
    // 스키마 정의 :
    const signUpFormSchema = yup.object().shape({
        // 회원가입 :
        nickName: yup.string().required("닉네임을 입력해주세요"),
        email: yup.string().email('이메일 양식이 아닙니다').required("이메일을 입력해주세요요"),
        vertificationCode: yup.string().required("인증번호를 입력해주세요"),
        password: yup.string().min(8, '비밀번호는 8글자 이상 입력해주세요').required("비밀번호를 입력해주세요요"),
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

        if (response.status === 201) {
            alert("회원가입 완료")
            return navigate("/sign-up-complete")
        }
    }
    //--------------------------------------------------------------------------------------------

    // 중복확인 버튼 :
    const onPressCheckOverlapNickName = async () => {
        const reponse = await fetch(`/api/v1/member/nickname/${watch("nickName")}`, {
            method: "get",
            // body: JSON.stringify({
            //     nickName: watch("nickName"),
            // })
        })
        // 백엔드에게 응답받은 데이터  -->  response_data
        const response_data = await reponse.json()
        // console.log(watch("nickName"))
        //==>  nickName 으로 걸어준 input 의 value값을 가져올 수 있다
        if (response_data.status === 200) {
            alert('사용가능한 닉네임입니다.')
        }
    }

    // 인증요청 버튼 :
    const onPressCertificationReq = async () => {
        const reponse = await fetch("/api/v1/email/emailCode", {
            method: "post",
            body: JSON.stringify({
                email: watch("email"),
            })
        })
        const response_data = await reponse.json()
    }

    // 인증확인 버튼 :
    const onPressCheckCertificationNum = async () => {
        const reponse = await fetch("/api/v1/email/emailCode", {
            method: "post",
            body: JSON.stringify({
                nickName: watch("vertificationCode"),
            })
        })
        const response_data = await reponse.json()
    }
    //--------------------------------------------------------------------------------------------


    return <Form onSubmit={handleSubmit(onPressSignUp)}>
        <InputTitle>회원가입</InputTitle>

        {/*------------------------------- 닉네임 -------------------------------*/}
        <CertifyInputBtn placeholder={'닉네임 입력'} name={'nickName'}
            btnText={'중복확인'} register={register} error={errors.nickName?.message}
            func={onPressCheckOverlapNickName}
        />

        {/*------------------------------- 이메일 -------------------------------*/}
        <CertifyInputBtn placeholder={'이메일 입력'} name={'email'}
            btnText={'인증요청'} register={register} error={errors.email?.message}
            func={onPressCertificationReq}
        />

        {/*------------------------------- 인증번호 -------------------------------*/}
        <CertifyInputBtn placeholder={'인증번호 입력'} name={'vertificationCode'}
            btnText={'인증확인'} register={register} error={errors.vertificationCode?.message}
            func={onPressCheckCertificationNum}
        />

        {/*------------------------------- 비밀번호 -------------------------------*/}
        <CertifyInput placeholder={'비밀번호 입력'} register={register}
            name={'password'} error={errors.password?.message}
        />

        {/*------------------------------- 비번확인 -------------------------------*/}
        <CertifyInput placeholder={'비밀번호 확인'} register={register}
            name={'password-confirm'} error={errors["password-confirm"]?.message}
        />

        <BtnPosition>
            <CertifyButton>회원가입</CertifyButton>
        </BtnPosition>
    </Form>
}

export default SignUp


const Form = styled.form`
    padding: 16px;
    position: relative;
    height: calc(100vh - 60px);
    box-sizing: border-box;
`
const InputTitle = styled.div`
    font-family: "Pretendard-Bold";
    color: #22252A;
    font-size: 30px;
    padding: 20px 0px;
`
const BtnPosition = styled.div`
    width: calc(100% - 32px);
    position: absolute;
    bottom: 16px;
`