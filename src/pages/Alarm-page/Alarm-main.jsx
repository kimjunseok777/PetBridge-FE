import styled from "styled-components"
import AlarmTopFilter from "./components/alarm-top-filter"
import alarmIcon from "../../image/alarm_icon.png"
import AlarmListItem from "./components/alarm-list-item"




const AlarmMain = () => {

    // 알람 목데이터 :
    const alarmMockArray = [
        {
            id: 1,
            title: "분양 계약서 작성 알림",
            content: "OOO 유저가 입양 계약서를 작성 중이에요! 분양 계약서를 작성해주세요!",
            date: "2024-01-15",
            contractAlarm: true,
        },
        {
            id: 2,
            title: "환영해요!",
            content: "펫브릿지에 오신 것을 환영합니다! 입양 & 분양 매칭 NO.1 플랫폼 펫브릿지.",
            date: "2024-01-15",
            contractAlarm: false,
        },
        {
            id: 3,
            title: "환영해요!",
            content: "펫브릿지에 오신 것을 환영합니다! 입양 & 분양 매칭 NO.1 플랫폼 펫브릿지.",
            date: "2024-01-15",
            contractAlarm: false,
        },
    ]


    return <>
        {/* --------------- 상단 타이틀 --------------- */}
        <div style={{ padding: "20px 20px 8px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <AlarmCircle>
                    <img src={alarmIcon} style={{ width: "18px", paddingBottom: "2px" }} />
                </AlarmCircle>
                <AlarmText>알람</AlarmText>
            </div>
        </div>

        {/* --------------- 상단 필터 --------------- */}
        <AlarmTopFilter />

        {/* --------------- 알람 리스트 --------------- */}
        <div style={{ padding: "16px" }}>
            {alarmMockArray.map((el) => <AlarmListItem key={el.id} el={el} />)}
        </div>
    </>
}

export default AlarmMain


const AlarmCircle = styled.div`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: #ff830f;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
`
const AlarmText = styled.div`
    font-family: "Pretendard-Bold";
    color: #3f3f3f;
    font-size: 28px;
    letter-spacing: -0.5px;
`