import { Outlet, useLocation } from "react-router-dom"
import styled from "styled-components"
import FilterPopUpMain from "../pages/list-read-page/listFilter-PopUp/filterPopUp-main"
import { URL_HELPER } from "./url-helper"
import NavBar from "../components-NAV/Nav-Main"
import FixedBtn from "../pages/list-read-page/components/Fixed-Btn"
import TopBar from "../components-TOP/TopBar"
import { usePopUp } from "../store/PopUp.store"
import LogOutPopUp from "../components-TOP/components/LogOut-popup"




const RootLayout = () => {

    // 필터 관리 상태
    const { isOpenPopUp } = usePopUp()

    // 상단바 & 네브바 관리
    const location = useLocation()
    const urlMatchData = URL_HELPER[location.pathname]


    return <Body>

        {/* --------------- 로그아웃 팝업창 --------------- */}
        {isOpenPopUp === "logOut" && <LogOutPopUp />}

        {/* --------------- 분양글 필터 팝업창 --------------- */}
        {isOpenPopUp === "filter" && <FilterPopUpMain />}

        <Container>

            {/* --------------- 상단 바 --------------- */}
            <TopBar urlMatchData={urlMatchData} />
            <div style={{ height: "60px" }} />

            <Outlet />

            {/* --------------- 검색필터 & 생성 고정 버튼 --------------- */}
            {urlMatchData.fixedBtn && <FixedBtn />}

            {/* --------------- 하단 바 (네브바) --------------- */}
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

