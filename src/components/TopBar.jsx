import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import backIcon from "../image/back_icon.png"
import alarmIcon from "../image/alarm_icon.png"
import alarmIText from "../image/alarm_text.png"
import logoIcon from "../image/animal_sale_icon.png"
import { useState } from "react"



const TopBar = ({ urlMatchData }) => {

    const navigate = useNavigate()

    // 읽지 않은 알람 목데이터 :
    const [alarmState, setAlarmState] = useState(true)

    const onPressAlarm = () => {
        return navigate("/alarmPage")
    }

    return <TopBox>
        {/*-------------- 로고 아이콘 --------------*/}
        {urlMatchData.topLogo && <div style={{ display: "flex", alignItems: "center" }}>
            <LogoBox>
                <img src={logoIcon} alt="wait..." style={{ width: "18px" }} />
            </LogoBox>
            <div>펫브릿지</div>
        </div>}

        {/*-------------- 뒤로가기 --------------*/}
        {urlMatchData.backBtn && <BackBtn onClick={() => navigate(-1)}>
            <img src={backIcon} alt="wait..." style={{ width: "14px" }} />
            뒤로가기
        </BackBtn>}

        <div></div>

        {/*-------------- 알람 --------------*/}
        {urlMatchData.alarmBtn && <AlarmBox>
            <AlarmBtn onClick={onPressAlarm}>
                <img src={alarmIcon} alt="wait..." style={{ width: "16px", paddingBottom: "2px" }} />
            </AlarmBtn>
            {alarmState && <AlarmPoint />}
            {alarmState && <AlarmText src={alarmIText} />}
        </AlarmBox>}

    </TopBox>
}

export default TopBar


const TopBox = styled.div`
    z-index: 999;
    position: fixed;
    width: 100%;
    max-width: 768px;
    height: 60px;
    box-sizing: border-box;
    background-color: white;
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
// 로고 :
const LogoBox = styled.div`
    width: 34px;
    height: 34px;
    border-radius: 6px;
    background-color: #FF9500;
    margin-right: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    & + div {
        /* color: #666666; */
        color: #FF9500;
        font-family: "Pretendard-SemiBold";
    }
`

