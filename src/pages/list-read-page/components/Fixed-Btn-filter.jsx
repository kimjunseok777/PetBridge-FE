import styled from "styled-components"
import filterIcon from "../../../image/filter.png"
import { useFilter } from "../../../store/filterPop.store"



const FixedBtnFilter = () => {

    const {setIsOpenFilter} = useFilter()

    // filter 기능 ON
    const onPressFilterBtn = () => {
        // alert('필터 기능 활성화')
        return setIsOpenFilter(true)
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





