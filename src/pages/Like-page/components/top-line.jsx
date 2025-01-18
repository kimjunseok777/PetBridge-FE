import styled from "styled-components"
import TopFilterBtn from "../../list-read-page/topComponents/top-filter-btn"




const TopLine = () => {

    const topText = {
        text: "전체보기",
        state: true
    }

    return <TopContainer>
        <TopFilterBtn el={topText} />
    </TopContainer>
}

export default TopLine


const TopContainer = styled.div`
    width: 100%;
    height: 46px;
    border-bottom: 2px solid #E8E8E8;
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 8px;
`