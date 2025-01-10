import styled from "styled-components"



const TopFilterBtn = ({el, topFilterState, setTopFilterState}) => {

    const onPressTopFilter = (clickId) => {
        const temp_FilterArray = [...topFilterState]
        const selectFilterIndex = topFilterState.findIndex((el) => el.id === clickId)
        // 배열 순회해서 state : false 로 초기화 시켜준다 :
        for(el of topFilterState) {
            el.state = false
        }
        // 클릭된 배열 요소만 state : true 로 바꿔준다 :
        temp_FilterArray[selectFilterIndex] = {
            ...temp_FilterArray[selectFilterIndex],
            state: true
        }
        return setTopFilterState(temp_FilterArray)
    }

    return <BtnBox>
        <BtnText onClick={() => onPressTopFilter(el.id)}
            $isSelected={el.state}
        >
            {el.text}
        </BtnText>
        <BtnLine $isSelected={el.state}/>
    </BtnBox>
}

export default TopFilterBtn


const BtnBox = styled.div`
    width: 66px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    bottom: -2px;
    padding: 10px 0;
`
const BtnText  = styled.div`
    cursor: pointer;
    padding-top: 4px;
    color: ${(props) => props.$isSelected ? "#FF9500" : "#959595"};
    font-family: ${({$isSelected}) => $isSelected ? "Pretendard-SemiBold" : "Pretendard-Medium"}
`
const BtnLine = styled.div`
    width: 20px;
    height: 3px;
    position: absolute;
    bottom: -2px;
    background-color: ${({$isSelected}) => $isSelected && "#FF9500"};
`

