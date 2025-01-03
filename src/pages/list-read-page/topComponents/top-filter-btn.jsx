import styled from "styled-components"



const TopFilterBtn = ({el}) => {

    const onPressTopFilter = () => {
        return alert(`${el.text} 필터가 클릭되었습니다`)
    }

    return <BtnBox>
        <BtnText onClick={onPressTopFilter}
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

