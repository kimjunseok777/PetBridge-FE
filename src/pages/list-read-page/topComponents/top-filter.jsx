import styled from "styled-components"
import TopFilterBtn from "./top-filter-btn"
import { useState } from "react"



const TopFilterBar = () => {


    // 상단 필터 목데이터
    const [topFilterState, setTopFilterState] = useState([
        {
            id: 1,
            text: "최신순",
            state: true,
        },
        {
            id: 2,
            text: "등록순",
            state: false,
        },
        {
            id: 3,
            text: "찜순",
            state: false,
        },
        {
            id: 4,
            text: "조회순",
            state: false,
        },
    ])


    return <FilterContainer>
        {topFilterState.map((el) => <TopFilterBtn el={el} key={el.id}
            topFilterState={topFilterState} setTopFilterState={setTopFilterState}
        />)}
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


