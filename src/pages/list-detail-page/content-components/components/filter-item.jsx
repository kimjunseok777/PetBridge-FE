import styled from "styled-components"




const FilterItem = ({ title, content }) => {
    return <ItemBox>
        <ItemTitle>{title}</ItemTitle>
        <TextGap>|</TextGap>
        <ItemContent>{content}</ItemContent>
    </ItemBox>
}

export default FilterItem


const ItemBox = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    margin-bottom: 10px;
`
const ItemTitle = styled.div`
    font-family: "Pretendard-Bold";
    font-size: 20px;
    letter-spacing: -0.5px;
    color: #292929;
    margin-right: 10px;
`
const ItemContent = styled.div`
    font-family: "Pretendard-SemiBold";
    font-size: 20px;
    letter-spacing: -0.5px;
    color: #FF9500;
`
const TextGap = styled.div`
    margin-right: 10px;
    font-family: "Pretendard-Bold";
    color: #e0e0e0;
`

