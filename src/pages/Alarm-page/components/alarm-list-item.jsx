import styled from "styled-components"
import alarmIcon from "../../../image/alarm_icon.png"
import { useNavigate } from "react-router-dom"



const AlarmListItem = ({ el }) => {

    const navigate = useNavigate()

    const onPressContractAlarm = (contractState) => {
        // 계약서 알람 상태가 false 라면 그냥 return 한다
        if (!contractState) return
        alert("입양 수락 페이지로 이동합니다.")
        return navigate("/contract-writerPage")
    }


    return <ListBox onClick={() => onPressContractAlarm(el.contractAlarm)}
        $cursorPoint={el.contractAlarm}
    >

        {/* --------------- 아이콘 --------------- */}
        <AlarmIconCircle>
            <img src={alarmIcon} style={{ width: "30px", paddingBottom: "8px" }} />
            <ContractPoint $state={el.contractAlarm}>
                {el.contractAlarm ? "분양" : "일반"}
            </ContractPoint>
        </AlarmIconCircle>

        {/* --------------- 텍스트 --------------- */}
        <div styled={{ width: "50px" }}>
            <AlarmTitle>{el.title}</AlarmTitle>
            <AlarmContent>{el.content}</AlarmContent>
            <AlarmDate>{el.date}</AlarmDate>
        </div>

        {/* <div style={{ display: "flex" }}></div> */}
    </ListBox>
}

export default AlarmListItem


const ListBox = styled.div`
    width: 100%;
    padding: 26px 16px;
    box-sizing: border-box;
    background-color: #F0F0F0;
    border-radius: 10px;
    margin-bottom: 14px;
    display: flex;
    gap: 14px;
    ${({ $cursorPoint }) => $cursorPoint && 'cursor: pointer'}
`
// 알람 아이콘 :
const AlarmIconCircle = styled.div`
    width: 70px;
    height: 70px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: #C9C9C9;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
const ContractPoint = styled.div`
    background-color: #ff830f;
    padding: 2px 12px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard-SemiBold";
    color: white;
    position: absolute;
    bottom: -10px;
    background-color: ${({ $state }) => $state ? "#ff830f" : "#a0a0a0"};
`
// 알람 텍스트 :
const AlarmTitle = styled.div`
    font-family: "Pretendard-SemiBold";
    color: #333333;
    font-size: 24px;
    letter-spacing: -0.5px;
    margin-bottom: 2px;
`
const AlarmContent = styled.div`
    font-family: "Pretendard-Medium";
    color: #8d8d8d;
    /* letter-spacing: -0.5px; */
    margin-bottom: 4px;
`
const AlarmDate = styled.div`
    font-family: "Pretendard-SemiBold";
    color: #ffa82f;
    font-size: 14px;
    letter-spacing: -0.3px;
`

