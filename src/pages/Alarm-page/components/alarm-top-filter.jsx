import styled from "styled-components"
import TopFilterBtn from "../../list-read-page/topComponents/top-filter-btn"
import { useState } from "react"




const AlarmTopFilter = () => {

    // 상단 필터 목데이터
    const [topFilterState, setTopFilterState] = useState([
        {
            id: 1,
            text: "전체",
            state: true,
        },
        {
            id: 2,
            text: "최신",
            state: false,
        },
        {
            id: 4,
            text: "분양",
            state: false,
        },
    ])

    return <FilterContainer>
        {topFilterState.map((el) => <TopFilterBtn el={el} key={el.id}
            topFilterState={topFilterState} setTopFilterState={setTopFilterState}
        />)}
    </FilterContainer>
}

export default AlarmTopFilter


const FilterContainer = styled.div`
    width: 100%;
    height: 46px;
    border-bottom: 2px solid #E8E8E8;
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 8px;
`