import styled from "styled-components"
import CheckBox from "../../../../components/CheckBox"
import ItemTitle from "../../../../components/Item-Title"




const FilterFirst = () => {

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
    //-----------------------------------------------------------------------------
    // 접종내역 목데이터 :
    const inoculationArray = [
        "접종명1", "접종명2", "접종명3", "접종명4",
        "접종명5", "접종명6", "접종명7", "접종명8",
    ]
    //-----------------------------------------------------------------------------

    return <div style={{ padding: "16px" }}>
        {/*------------------ 중성화 여부 & 체중 ------------------*/}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "30px" }}>
            {/*------------------ 중성화 여부 ------------------*/}
            <div style={{ display: "flex", alignItems: "center", width: "45%" }}>
                <ItemTitle item={true}>중성화 여부</ItemTitle>
                <CheckBox />
            </div>
            {/*------------------ 체중 ------------------*/}
            <div style={{ display: "flex", alignItems: "center", width: "55%" }}>
                <ItemTitle item={true}>체중</ItemTitle>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", marginLeft: "6px" }}>
                    <WeightInputBox>
                        <WeightText>kg</WeightText>
                        <WeightInput placeholder="00" type="number" />
                    </WeightInputBox>
                    <div style={{ fontFamily: "Pretendard-SemiBold", color: "#575757" }}>~</div>
                    <WeightInputBox>
                        <WeightText>kg</WeightText>
                        <WeightInput placeholder="00" type="number" maxLength="2" />
                    </WeightInputBox>
                </div>
            </div>
        </div>

        {/*------------------ 성별 ------------------*/}
        <ItemTitle>성별</ItemTitle>
        <div style={{ display: "flex", marginLeft: "-6px", gap: "20px" }}>
            <CheckBox text={'전체보기'} name="gender" value="1" checked="on"
                onChange={(e) => checkOnlyOne(e.target)}
            />
            <CheckBox text={'남자'} name="gender" value="2"
                onChange={(e) => checkOnlyOne(e.target)}
            />
            <CheckBox text={'여자'} name="gender" value="3"
                onChange={(e) => checkOnlyOne(e.target)}
            />
        </div>

        <div style={{ marginBottom: "30px" }}></div>

        {/*------------------ 접종 내역 ------------------*/}
        <ItemTitle>접종 내역</ItemTitle>
        <InoculationLayout>
            {inoculationArray.map((el) => <div key={el} style={{ width: "30%" }}>
                <CheckBox text={el} />
            </div>)}
        </InoculationLayout>

        {/* <div style={{marginBottom: "30px"}}></div> */}
    </div>
}

export default FilterFirst


const WeightInputBox = styled.div`
    position: relative;
    width: 66px;
    height: 28px;
    font-family: 'Pretendard-Medium';
    color: #747474;
`
const WeightInput = styled.input`
    width: 100%;
    height: 100%;
    background-color: #F0F0F0;
    border: 1px solid #e4e4e4;
    outline: none;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 0 24px 0 6px;
    font-family: 'Pretendard-SemiBold';
    color: #555555;
    &::placeholder{
        font-family: 'Pretendard-Medium';
        color: #acacac;
    }
`
const WeightText = styled.div`
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'Pretendard-SemiBold';
    color: #8D8D8D;
`
const InoculationLayout = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -6px;
    gap: 2px 20px;
`
