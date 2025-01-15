import styled from "styled-components"
import CheckBox from "../../../components/CheckBox"
import AnimalKindCheck from "../../../components/CheckBox-AnimalKind"
import ItemTitle from "../../../components/Item-Title"




const CreateStep1FilterSecond = () => {

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
    // 품종종 only 체크박스:
    const checkOnlyOneAnimalKind = (checkThis) => {
        const checkboxes = document.getElementsByName('kind')
        // checkboxes 의 길이만큼 반복
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i] !== checkThis) {
                checkboxes[i].checked = false
            }
        }
    }
    //-----------------------------------------------------------------------------
    // 동물 품종 목데이터 :
    const animalKindArray = [
        "닥스훈트", "비숑", "포메라니안", "품종명",
        "품종명", "품종명", "품종명", "기타",
        "품종명", "품종명", "품종명"
    ]

    return <>
        {/*--------------- 종류 ---------------*/}
        <ItemTitle>종류</ItemTitle>
        <div style={{ display: "flex", marginLeft: "-6px", gap: "20px" }}>
            <CheckBox text={'강아지'} name="types" value="1"
                onChange={(e) => checkOnlyOneTypes(e.target)}
            />
            <CheckBox text={'고양이'} name="types" value="2"
                onChange={(e) => checkOnlyOneTypes(e.target)}
            />
        </div>

        <div style={{ marginBottom: "20px" }}></div>

        {/*--------------- 크기 ---------------*/}
        <ItemTitle>크기</ItemTitle>
        <div style={{ display: "flex", marginLeft: "-6px", gap: "20px", marginBottom: "30px" }}>
            <CheckBox text={'소형'} name="size" value="1"
                onChange={(e) => checkOnlyOneSize(e.target)}
            />
            <CheckBox text={'중형'} name="size" value="2"
                onChange={(e) => checkOnlyOneSize(e.target)}
            />
            <CheckBox text={'대형'} name="size" value="3"
                onChange={(e) => checkOnlyOneSize(e.target)}
            />
        </div>

        <div style={{ marginBottom: "20px" }}></div>

        {/*--------------- 품종 ---------------*/}
        <ItemTitle>품종</ItemTitle>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {animalKindArray.map((el, index) => <AnimalKindCheck name="kind"
                key={index} text={el} onChange={(e) => checkOnlyOneAnimalKind(e.target)}
            />)}
        </div>

        <div style={{ marginBottom: "20px" }}></div>
    </>
}

export default CreateStep1FilterSecond

