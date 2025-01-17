import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Header from "./components/Header"
import FilterContent from "./components/FilterContent"
import TextLayout from "./components/TextLayout"
import CertifyButton from "../../../components/Certify-button"




const ContractUserPage = () => {

    const navigate = useNavigate()

    // 입양 요청하기 버튼 :
    const onPressReq = (event) => {
        event.preventDefault()
        alert("입양 요청이 전송되었습니다. 리스트 페이지로 이동합니다.")
        return navigate("/list-read")
    }

    //---------------------------------------------------------------

    return <Form onSubmit={onPressReq}>

        {/*------------ 분양글 헤더 (타이틀) ------------*/}
        <Header />

        {/*------------ 필터 콘텐츠 ------------*/}
        <FilterContent />

        {/*------------ 텍스트란 & 입력란 ------------*/}
        <TextLayout />

        {/*------------ 버튼 ------------*/}
        <CertifyButton>입양 요청하기</CertifyButton>

    </Form>
}

export default ContractUserPage


const Form = styled.form`
    padding: 16px;
`
