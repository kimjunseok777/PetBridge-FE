import styled from "styled-components"
import Header from "../Contract-User/components/Header"
import FilterContent from "../Contract-User/components/FilterContent"
import CertifyButton from "../../../components/Certify-button"
import TextLayout from "./components/TextLayout"
import { useNavigate } from "react-router-dom"




const ContractWriterPage = () => {

    const navigate = useNavigate()

    const onPressAccept = (event) => {
        event.preventDefault()
        alert('입양 요청을 수락하셨습니다. 입양자에게 연락해주세요.')
        return navigate("/list-read")
    }


    return <Form onSubmit={onPressAccept}>

        {/*------------ 분양글 헤더 (타이틀) ------------*/}
        <Header />

        {/*------------ 필터 콘텐츠 ------------*/}
        <FilterContent />

        {/*------------ 텍스트란 & 입력란 ------------*/}
        <TextLayout />

        {/*------------ 버튼 ------------*/}
        <CertifyButton>입양 수락하기</CertifyButton>

    </Form>
}

export default ContractWriterPage


const Form = styled.form`
    padding: 16px;
`