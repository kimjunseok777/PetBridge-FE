import styled from "styled-components"
import CertifyButton from "../../../components/Certify-button"
import resetBtn from "../../../image/reset_btn.png"
import filterIcon from "../../../image/filter.png"
import CheckBox from "../../../components/CheckBox"
import FilterFirst from "./components/filter-first"
import FilterSecond from "./components/firter-second"



const FilterPopUpBoard = () => {

    const onPressResetBtn = () => {
        return alert('필터 초기화')
    }

    return <>

        {/*------------------ 필터 헤더 ------------------*/}
        <FilterHeader>
            <div style={{ display: "flex", alignItems: "center" }}>
                <HeaderCircleIcon>
                    <img src={filterIcon} style={{ width: 20 }} />
                </HeaderCircleIcon>
                <HeaderText>필터</HeaderText>
            </div>
            <ResetBtn onClick={onPressResetBtn}>
                <img src={resetBtn} style={{ width: 24 }} />
                필터 초기화
            </ResetBtn>
        </FilterHeader>

        <div style={{ height: 1, backgroundColor: "#dbdbdb" }} />

        {/*---------------------- 필터링 ----------------------*/}
        {/*--> 이 form 태그 내에서만 스크롤이 됐으면 좋겠음 */}
        <form style={{ marginTop: "80px" }}>
            {/*------------------ 필터링 첫번째 ------------------*/}
            <FilterFirst />

            <div style={{ height: 1, backgroundColor: "#dbdbdb" }} />
            {/*------------------ 필터링 두번째 ------------------*/}
            <FilterSecond />


            <div style={{ padding: "6px 16px 16px" }}>
                <CertifyButton>307개의 분양글 보기</CertifyButton>
            </div>
        </form>
    </>
}

export default FilterPopUpBoard


const FilterHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 16px;
    background-color: white;
    position: fixed;
    width: calc(100% - 32px);
    max-width: 768px;
    height: 80px;
    border-bottom: 1px solid #dbdbdb;
    z-index: 99;
    border-radius: 26px 26px 0 0;
`
const HeaderCircleIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #F47A00;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 6px;
`
const HeaderText = styled.div`
    font-family: "Pretendard-SemiBold";
    color: #F47A00;
    font-size: 26px;
`
const ResetBtn = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard-Medium";
    color: #fff;
    background-color: #B0B0B0;
    padding: 8px 16px;
    border-radius: 50px;
    gap: 4px;
`
//-------------------------------------------------
