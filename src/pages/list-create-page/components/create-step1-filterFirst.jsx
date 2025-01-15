import styled from "styled-components"
import CheckBox from "../../../components/CheckBox"
import ItemTitle from "../../../components/Item-Title"




const CreateStep1FilterFirst = () => {

    //-----------------------------------------------------------------------------
    // 성별 only 체크박스:
    const checkOnlyOne = (checkThis) => {
        const checkboxes = document.getElementsByName('gender')
        // checkboxes 의 길이만큼 반복
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i] !== checkThis) {
                checkboxes[i].checked = false
            }
        }
    }
    // 접종내역 목데이터 :
    const inoculationArray = [
        "접종명1", "접종명2", "접종명3", "접종명4",
        "접종명5", "접종명6", "접종명7", "접종명8",
    ]
    //-----------------------------------------------------------------------------

    return <>
        {/*--------------- 중성화 여부 & 체중 ---------------*/}
        <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", width: "50%" }}>
                <ItemTitle item={true}>중성화 여부</ItemTitle>
                <CheckBox />
            </div>
            <div style={{ display: "flex", alignItems: "center", width: "50%" }}>
                <ItemTitle item={true}>체중</ItemTitle>
                <WeightInput placeholder="00" type="number" />
                <KgText>kg</KgText>
            </div>
        </div>

        <div style={{ marginBottom: "20px" }}></div>

        {/*--------------- 성별 ---------------*/}
        <ItemTitle>성별</ItemTitle>
        <div style={{ display: "flex", marginLeft: "-6px", gap: "20px" }}>
            <CheckBox text={'남자'} name="gender" value="1"
                onChange={(e) => checkOnlyOne(e.target)}
            />
            <CheckBox text={'여자'} name="gender" value="2"
                onChange={(e) => checkOnlyOne(e.target)}
            />
        </div>

        <div style={{ marginBottom: "20px" }}></div>

        {/*--------------- 접종 내역 ---------------*/}
        <ItemTitle>접종 내역</ItemTitle>
        <InoculationLayout>
            {inoculationArray.map((el) => <div key={el} style={{ width: "30%" }}>
                <CheckBox text={el} />
            </div>)}
        </InoculationLayout>

        <div style={{ marginBottom: "20px" }}></div>
    </>
}

export default CreateStep1FilterFirst


const WeightInput = styled.input`
    width: 66px;
    height: 28px;
    margin: 0 10px;
    background-color: #F0F0F0;
    border: 1px solid #e4e4e4;
    outline: none;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 0 6px;
    font-family: 'Pretendard-SemiBold';
    color: #555555;
    text-align: center;
    &::placeholder{
        font-family: 'Pretendard-Medium';
        color: #acacac;
        text-align: center;
    }
`
const KgText = styled.div`
    font-family: 'Pretendard-Bold';
    font-size: 20px;
    color: #3a3a3a;
    letter-spacing: -0.5px;
`
const InoculationLayout = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -6px;
    gap: 2px 20px;
`

