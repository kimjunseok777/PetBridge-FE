import styled from "styled-components"
import CheckBox from "../../../../components/CheckBox"




const FilterSecond = () => {

    //-----------------------------------------------------------------------------
    // 동물종류 only 체크박스:
    const checkOnlyOneTypes = (checkThis) => {
        const checkboxes = document.getElementsByName('types')
            // checkboxes 의 길이만큼 반복
            for (let i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i] !== checkThis) {
                checkboxes[i].checked = false
            }
        }
    }
    // 견종크기 only 체크박스:
    const checkOnlyOneSize = (checkThis) => {
        const checkboxes = document.getElementsByName('size')
            // checkboxes 의 길이만큼 반복
            for (let i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i] !== checkThis) {
                checkboxes[i].checked = false
            }
        }
    }
    //-----------------------------------------------------------------------------

    return <div style={{padding: "16px"}}>
        {/*------------------ 동물종류 ------------------*/}
        <CheckTitle>동물 종류</CheckTitle>
        <div style={{display: "flex", marginLeft: "-6px", gap: "20px", marginBottom: "20px"}}>
            <CheckBox text={'전체보기'} name="types" value="1" checked="on"
                onChange={(e) => checkOnlyOneTypes(e.target)}
            />
            <CheckBox text={'강아지'} name="types" value="2"
                onChange={(e) => checkOnlyOneTypes(e.target)}
            />
            <CheckBox text={'고양이'} name="types" value="3"
                onChange={(e) => checkOnlyOneTypes(e.target)}
            />
        </div>

        {/*------------------ 견종 크기 ------------------*/}
        <CheckTitle>견종 크기</CheckTitle>
        <div style={{display: "flex", marginLeft: "-6px", gap: "20px"}}>
            <CheckBox text={'소형'} name="size" value="1" checked="on"
                onChange={(e) => checkOnlyOneSize(e.target)}
            />
            <CheckBox text={'중형'} name="size" value="2"
                onChange={(e) => checkOnlyOneSize(e.target)}
            />
            <CheckBox text={'대형'} name="size" value="3"
                onChange={(e) => checkOnlyOneSize(e.target)}
            />
        </div>
        
        {/*------------------ 품종 ------------------*/}
        {/* <CheckTitle>품종</CheckTitle> */}
    </div>
}

export default FilterSecond


const CheckTitle = styled.div`
    font-family: 'Pretendard-Bold';
    font-size: 18px;
    color: #404040;
    letter-spacing: -0.5px;
`
// const InoculationLayout = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     margin-left: -6px;
//     gap: 2px 20px;
// `