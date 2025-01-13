import { Outlet } from "react-router-dom"
import TopBar from "../components/TopBar"
import styled from "styled-components"
import FilterPopUpMain from "../pages/list-read-page/listFilter-PopUp/filterPopUp-main"
import { useFilter } from "../store/filterPop.store"




const RootLayout = () => {

    const { isOpenFilter } = useFilter()

    return <Body>

        {/* --------------- 분양글 필터 팝업창 --------------- */}
        {isOpenFilter && <FilterPopUpMain />}

        <Container>

            {/* 로그인 페이지와 기본 리스트 페이지에서는 상단에 뒤로가기 바가 나오지 않게 해야한다 */}
            <TopBar />

            {/* route.js 에서 이 컴포넌트의 자식 컴포넌트를 Outlet으로 보여주는 것이다 */}
            <Outlet />

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

