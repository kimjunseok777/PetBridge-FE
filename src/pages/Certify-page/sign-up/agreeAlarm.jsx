import styled from "styled-components"
import CheckBox from "../../../components/CheckBox"


// 알람동의  -->  일단 알람동의 컴포넌트는 사용X  -->  시간 촉박해서 빼놓기로 했음

const AgreeAlarm = () => {

    //-----------------------------------------------------------------------------
    // 체크박스 하나만 선택 함수 (checkThis로 선택한 체크 박스의 value를 받는다)
    const checkOnlyOne = (checkThis) => {
        const checkboxes = document.getElementsByName('agreeAlarm')
            // checkboxes 의 길이만큼 반복
            for (let i = 0; i < checkboxes.length; i++) {
                // checkboxes 체크한 것과 일치하지 않으면 false로 바꿔서 체크를 해제시켜준다
                if (checkboxes[i] !== checkThis) {
                checkboxes[i].checked = false
            }
        }
    }
    //-----------------------------------------------------------------------------


    return <Container>
        <CheckBox text={'메일'} name="agreeAlarm" value="1" onChange={(e) => checkOnlyOne(e.target)}/>
        <CheckBox text={'메세지'} name="agreeAlarm" value="2" onChange={(e) => checkOnlyOne(e.target)}/>
    </Container>
}

export default AgreeAlarm


const Container = styled.div`
    display: flex;
    gap: 50px;
`
