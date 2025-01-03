import styled from "styled-components"
import filterIcon from "../../../image/filter.png"



const FixedBtnFilter = () => {

    const onPressFilterBtn = () => {
        return alert("분양글 필터 버튼 클릭")
    }

    return <CircleBox onClick={onPressFilterBtn}>
        <IconImg src={filterIcon}/>
    </CircleBox>
}

export default FixedBtnFilter


const CircleBox = styled.div`
    cursor: pointer;
    aspect-ratio: 1/1;
    background-color: #FF9500;
    border-radius: 50%;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const IconImg = styled.img`
    width: 30px;
`