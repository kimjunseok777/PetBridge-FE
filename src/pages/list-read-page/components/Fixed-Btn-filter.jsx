import styled from "styled-components"
import filterIcon from "../../../image/filter.png"
import { usePopUp } from "../../../store/PopUp.store"



const FixedBtnFilter = () => {

    const { setIsOpenPopUp } = usePopUp()

    // filter 기능 ON
    const onPressFilterBtn = () => {
        // alert('필터 기능 활성화')
        return setIsOpenPopUp("filter")
    }

    return <CircleBox onClick={onPressFilterBtn}>
        <IconImg src={filterIcon} />
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





