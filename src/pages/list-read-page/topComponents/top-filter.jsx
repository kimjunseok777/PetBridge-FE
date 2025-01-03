import styled from "styled-components"
import TopFilterBtn from "./top-filter-btn"



const TopFilterBar = () => {

    // 상단 필터 목데이터
    const FILTER_BTN_ARRAY = [
        {
            text: "최신순",
            state: true,
        },
        {
            text: "등록순",
            state: false,
        },
        {
            text: "찜순",
            state: false,
        },
        {
            text: "조회순",
            state: false,
        },
    ]

    return <FilterContainer>
        {FILTER_BTN_ARRAY.map((el) => <TopFilterBtn el={el} key={el.text}/>)}
    </FilterContainer>
}

export default TopFilterBar


const FilterContainer = styled.div`
    width: 100%;
    height: 46px;
    border-bottom: 2px solid #E8E8E8;
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 8px;
`


