import styled from "styled-components"
import filterCancelBtn from "../../../image/filter_cancel_btn.png"
import { useEffect } from "react"
import FilterPopUpBoard from "./filterPopUp-board"
import { usePopUp } from "../../../store/PopUp.store"


// 분양글 필터 기능 :
// 가장 상단 컴포넌트인 RootLayout 에서 import 해줬음
const FilterPopUpMain = () => {

    const { setIsOpenPopUp } = usePopUp()

    const onPressCancel = () => {
        return setIsOpenPopUp(null)
    }

    // 팝업 ON일 때 배경 스크롤 방지
    useEffect(() => {
        document.body.style = `overflow: hidden`;
        return () => document.body.style = `overflow: auto`
    }, [])


    return <FilterBackground>

        <Layout>
            {/*------------------ 필터 닫기 버튼 ------------------*/}
            <FilterCancelBtn onClick={onPressCancel}>
                <img src={filterCancelBtn} style={{
                    width: "50px"
                }} />
            </FilterCancelBtn>

            {/*------------------ 필터 보드 ------------------*/}
            <FilterBoard>
                <FilterPopUpBoard />
            </FilterBoard>

        </Layout>

    </FilterBackground>
}

export default FilterPopUpMain


const FilterBackground = styled.div`
    z-index: 9999;
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    // 애니메이션 :
    animation-name: filterBG;
    animation-duration: 0.3s;
    @keyframes filterBG {
        0% {
            background-color: rgba(0, 0, 0, 0);
        } 100% {
            background-color: rgba(0, 0, 0, 0.3);
        }
    }
`
const Layout = styled.div`
    max-width: 768px;
    min-height: 100vh;
    margin: 0 auto;
    position: relative;
`
const FilterCancelBtn = styled.div`
    cursor: pointer;
    width: 74px;
    height: 74px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 20px;
    bottom: 620px;
    // 애니메이션 :
    animation-name: filterCancel;
    animation-duration: 0.5s;
    @keyframes filterCancel {
        0% {
            opacity: 0;
        } 100% {
            opacity: 1;
        }
    }
`
const FilterBoard = styled.div`
    background-color: white;
    width: 100%;
    height: 600px;
    border-radius: 30px 30px 0px 0px;
    bottom: 0;
    /* overflow: hidden; */
    overflow-y: scroll;
    position: absolute;
    // 애니메이션 :
    animation-name: filterBoard;
    animation-duration: 0.5s;
    @keyframes filterBoard {
        0% {
            bottom: -600px;
        } 100% {
            bottom: 0;
        }
    }
`

