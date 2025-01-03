import styled from "styled-components"
import CheckBox from "../../../components/CheckBox"


// 이용약관  -->  시간 촉박해서 빼놓기로 했음

const TermsOfUse = () => {
    return <Container>
        <CheckBox text={'안내 사항을 모두 확인하였으면 이에 동의합니다.'}/>
        <CheckBox text={'만 19세 이상입니다(필수)'}/>
    </Container>
}

export default TermsOfUse



const Container = styled.div`
    
`


