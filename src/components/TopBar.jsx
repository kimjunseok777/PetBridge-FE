import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import backIcon from "../image/back_icon.png"
import alarmIcon from "../image/alarm_icon.png"
import alarmIText from "../image/alarm_text.png"
import { useState } from "react"



const TopBar = () => {

    const navigate = useNavigate()

    // 읽지 않은 알람 목데이터 :
    const [alarmState, setAlarmState] = useState(true)

    const onPressAlarm = () => {
        alert("알람 바로가기")
        return navigate()
    }

    return <TopBox>

        {/*-------------- 뒤로가기 --------------*/}
        <BackBtn onClick={() => navigate(-1)}>
            <img src={backIcon} alt="wait..." style={{ width: "14px" }} />
            뒤로가기
        </BackBtn>

        {/*-------------- 알람 --------------*/}
        <AlarmBox>
            <AlarmBtn onClick={onPressAlarm}>
                <img src={alarmIcon} alt="wait..." style={{ width: "16px", paddingBottom: "2px" }} />
            </AlarmBtn>
            {alarmState && <AlarmPoint />}
            {alarmState && <AlarmText src={alarmIText} />}
        </AlarmBox>

    </TopBox>
}

export default TopBar


const TopBox = styled.div`
    height: 60px;
    padding: 0 16px;
    border-bottom: 1px solid #dbdbdb;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Pretendard-Medium";
    color: #a5a5a5;
`;
// 뒤로가기 :
const BackBtn = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
`
// 알람 :
const AlarmBox = styled.div`
    position: relative;
    width: 36px;
    height: 36px;
`

const AlarmBtn = styled.div`
    cursor: pointer;
    height: 100%;
    border-radius: 50%;
    background-color: #C9C9C9;
    display: flex;
    justify-content: center;
    align-items: center;
`
const AlarmPoint = styled.div`
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ff830f;
    left: 0px;
    bottom: 0px;
`
const AlarmText = styled.img`
    position: absolute;
    width: 110px;
    left: -112px;
    bottom: 2px;
`