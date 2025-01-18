import { Outlet, useLocation } from "react-router-dom"
import TopBar from "../components/TopBar"
import styled from "styled-components"
import FilterPopUpMain from "../pages/list-read-page/listFilter-PopUp/filterPopUp-main"
import { useFilter } from "../store/filterPop.store"
import { URL_HELPER } from "./url-helper"
import NavBar from "../components-NAV/Nav-Main"




const RootLayout = () => {

    // 필터 관리 상태
    const { isOpenFilter } = useFilter()

    // 상단바 & 네브바 관리
    const location = useLocation()
    const urlMatchData = URL_HELPER[location.pathname]


    return <Body>

        {/* --------------- 분양글 필터 팝업창 --------------- */}
        {isOpenFilter && <FilterPopUpMain />}

        <Container>

            {/* --------------- 상단 바 --------------- */}
            <TopBar urlMatchData={urlMatchData} />
            <div style={{ height: "60px" }} />

            <Outlet />

            {/* --------------- 하단 바 --------------- */}
            {urlMatchData.nav && <NavBar />}

        </Container>
    </Body>
}

export default RootLayout


//-------------------------------------------------------------
// 앱 화면 뒤 배경
const Body = styled.div`
    margin: 0;
    padding: 0;
    background-color: #f8f8f8;
`
// 앱 화면 사이즈
const Container = styled.div`
    max-width: 768px;
    min-height: 100vh;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
`
//-------------------------------------------------------------

