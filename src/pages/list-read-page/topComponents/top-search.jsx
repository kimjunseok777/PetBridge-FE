import styled from "styled-components"
import searchIcon from "../../../image/search-icon.png"



const TopSearchBar = ({...props}) => {
    return <InputBox {...props}>
        <SearchImg src={searchIcon}/>
        <SearchText>입양하고 싶은 아이를 검색해보세요!</SearchText>
    </InputBox>
}

export default TopSearchBar


const InputBox = styled.div`
    background-color: #EBEBEB;
    cursor: pointer;
    width: 100%;
    height: 60px;
    padding: 0 16px;
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
`
const SearchImg = styled.img`
    width: 26px;
`
const SearchText = styled.div`
    color: #A2A1A2;
    font-family: "Pretendard-Medium";
`


