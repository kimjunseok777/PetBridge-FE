import styled from "styled-components"
import FilterItem from "../../../list-detail-page/content-components/components/filter-item"




const FilterContent = () => {


    return <FirstLayout>
        <FilterItem title={"품종"} content={'웰시코기'} />
        <FilterItem title={"나이"} content={'2살'} />
        <FilterItem title={"성별"} content={'남자'} />
        <FilterItem title={"중성화"} content={'O'} />
        <FilterItem title={"체중"} content={'6kg'} />
        <FilterItem title={"입양계약서"} content={'O'} />
    </FirstLayout>
}

export default FilterContent


const FirstLayout = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
`