import styled from "styled-components"
import searchIcon from "../../image/search-icon.png"
import FixedBtn from "../list-read-page/components/Fixed-Btn"
import RecentSearchTerms from "./recent-search"




const ListSearch = () => {

    // 최그 검색어 목데이터
    const recentMockData = [
        "시바견 분양",
        "비숑",
        "러시안 블루",
        "치와와",
        "포메라니안",
        "닥스훈트",
        "고양이",
        "푸들 분양",
        "믹스견"
    ]

    const onPressDeleteAll = () => {
        return alert('모두삭제 버튼 클릭')
    }

    return <>
        {/*------------------- 상단 검색바 -------------------*/}
        <InputBox>
            <SearchImg src={searchIcon} />
            <Input placeholder="입양하고 싶은 아이를 검색해보세요!" />
        </InputBox>

        {/*------------------- 최근 검색어 -------------------*/}
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <RecentTitle>최근 검색어</RecentTitle>
            <DeleteAll onClick={onPressDeleteAll}>모두삭제</DeleteAll>
        </div>
        <RecentBox>
            {recentMockData.map((el) => <RecentSearchTerms text={el} key={el} />)}
        </RecentBox>

        {/*------------------- 하단 버튼 -------------------*/}
        <FixedBtn />
    </>
}

export default ListSearch


const InputBox = styled.div`
    width: 100%;
    height: 60px;
    position: relative;
    display: flex;
    align-items: center;
`
const SearchImg = styled.img`
    width: 26px;
    position: absolute;
    left: 16px;
`
const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    background-color: #EBEBEB;
    outline: none;
    font-family: "Pretendard-Medium";
    font-size: 16px;
    &::placeholder {
        color: #A2A1A2;
    }
    padding: 0 52px;
`
const RecentTitle = styled.div`
    font-family: "Pretendard-Bold";
    color: #22252A;
    font-size: 30px;
    letter-spacing: -1px;
    padding: 50px 0px 20px 16px;
`
const DeleteAll = styled.div`
    text-decoration: underline;
    margin-right: 16px;
    padding-top: 26px;
    font-family: "Pretendard-Medium";
    color: #737373;
    cursor: pointer;
`

const RecentBox = styled.div`
    padding: 0px 16px;
    display: flex;
    flex-wrap: wrap;
`
