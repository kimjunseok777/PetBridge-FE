import styled from "styled-components"
import FilterItem from "./components/filter-item"
import CheckItem from "./components/check-item"




const ContentFiltering = () => {

    // 접종명 목데이터 :
    const inoculationArray = ["접종명", "접종명", "접종명", "접종명", "접종명"]

    return <>
        <FirstLayout>
            <FilterItem title={"품종"} content={'웰시코기'} />
            <FilterItem title={"나이"} content={'2살'} />
            <FilterItem title={"성별"} content={'남자'} />
            <FilterItem title={"중성화"} content={'O'} />
            <FilterItem title={"체중"} content={'6kg'} />
            <FilterItem title={"입양계약서"} content={'O'} />
        </FirstLayout>

        <div style={{ marginBottom: "20px" }}></div>

        <ItemTitle>접종내역</ItemTitle>
        <SecondLayout>
            {inoculationArray.map((el, index) => <CheckItem key={index} label={el} />)}
        </SecondLayout>

        <div style={{ marginBottom: "20px" }}></div>
    </>
}

export default ContentFiltering


const FirstLayout = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const ItemTitle = styled.div`
    font-family: "Pretendard-Bold";
    font-size: 20px;
    letter-spacing: -0.5px;
    color: #292929;
    margin-bottom: 10px;
`
const SecondLayout = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`