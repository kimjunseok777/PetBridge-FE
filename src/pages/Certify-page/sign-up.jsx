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
        email: yup.string().email('이메일 양식이 아닙니다').required("이메일을 입력해주세요요"),
        password: yup.string().min(8, '비밀번호는 8글자 이상 입력해주세요').required("비밀번호를 입력해주세요요"),
        "password-confirm": yup.string().oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다다").required("비밀번호 확인을 입력해주세요"),
        // 본인인증 :
        nickName: yup.string().required("닉네임을 입력해주세요"),
        userName: yup.string().required("이름을 입력해주세요"),
        birthdate: yup.string().matches(/^\d{8}$/, "생년월일은 8자리로 입력해주세요.").required("생년월일을 입력해주세요"),
        phoneNumber: yup.string().matches(/^\d{10,11}$/, "올바른 전화번호 형식을 입력해주세요.").required("전화번호를 입력해주세요"),
        vertificationCode: yup.string().required("인증번호를 입력해주세요")
    })
    //--------------------------------------------------------------------------------------------
    const {
        register,
        formState: {errors, isValid}, 
        handleSubmit,
        watch
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(signUpFormSchema)
    })
    //----------------------------------------------------------
    const onPressSignUp = () => {
        return navigate("/sign-up-complete")
    }

    console.log(watch("email")) //==>  name 으로 걸어준 input 의 value값을 가져올 수 있다


    return <Form onSubmit={handleSubmit(onPressSignUp)}>
        <p></p>
        {/* ---------------------------- 회원가입 ---------------------------- */}
        <InputTitle>회원가입</InputTitle>

        <CertifyInput placeholder={'이메일 입력'} register={register}
            name={'email'} error={errors.email?.message}
        />
        <CertifyInput placeholder={'비밀번호 입력'} register={register}
            name={'password'} error={errors.password?.message}
        />
        <CertifyInput placeholder={'비밀번호 확인'} register={register}
            name={'password-confirm'} error={errors["password-confirm"]?.message}
        />


        {/* ---------------------------- 본인인증 ---------------------------- */}
        <InputTitle>본인인증</InputTitle>

        <CertifyInputBtn placeholder={'닉네임 입력'} name={'nickName'}
            btnText={'중복확인'} register={register} error={errors.nickName?.message}
        />
        <CertifyInput placeholder={'이름'} name={'userName'}
            register={register} error={errors.userName?.message}
        />
        <CertifyInput placeholder={'생년월일 8자리'} name={'birthdate'}
            register={register} error={errors.birthdate?.message}
        />
        <CertifyInputBtn placeholder={'휴대전화번호'} name={'phoneNumber'}
            btnText={'인증요청'} register={register} error={errors.phoneNumber?.message}
        />
        <CertifyInput placeholder={'인증번호 입력'} name={'vertificationCode'}
            register={register} error={errors.vertificationCode?.message}
        />


        <CertifyButton>회원가입</CertifyButton>
    </Form>
}

export default SignUp


const Form = styled.form`
    margin-bottom: 20px;
    padding: 0 16px;
`
const InputTitle = styled.div`
    font-family: "Pretendard-Bold";
    color: #22252A;
    font-size: 30px;
    padding: 20px 0px;
`
