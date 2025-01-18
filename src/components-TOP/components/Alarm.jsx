import styled from "styled-components"
import alarmIcon from "../../image/alarm_icon.png"
import alarmIText from "../../image/alarm_text.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



const Alarm = () => {

    const navigate = useNavigate()

    //-------------------------------------------------------
    // 읽지 않은 알람 목데이터 :
    const [alarmState, setAlarmState] = useState(true)

    // 알람 버튼 클릭 :
    const onPressAlarm = () => {
        return navigate("/alarmPage")
    }
    //-------------------------------------------------------

    return <AlarmBox>
        <AlarmBtn onClick={onPressAlarm}>
            <img src={alarmIcon} alt="wait..." style={{ width: "16px", paddingBottom: "2px" }} />
        </AlarmBtn>
        {alarmState && <AlarmPoint />}
        {alarmState && <AlarmImg src={alarmIText} />}
    </AlarmBox>
}

export default Alarm


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
const AlarmImg = styled.img`
    position: absolute;
    width: 110px;
    left: -112px;
    bottom: 2px;
`