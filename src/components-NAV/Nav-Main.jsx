import styled from "styled-components"
import navHomeOff from "../image/nav-home-off.png"
import navHomeON from "../image/nav-home-on.png"
import navLikeOff from "../image/nav-like-off.png"
import navLikeOn from "../image/nav-like-on.png"
import navMyOff from "../image/nav-my-off.png"
import navMyOn from "../image/nav-my-on.png"
import { useEffect, useState } from "react"
import NavItem from "./Nav-Item"
import { useLocation } from "react-router-dom"




const NavBar = () => {

    const location = useLocation()

    //-------------------------------------------------------
    // 네비게이션바 데이터 :
    const [navData, setNavData] = useState([
        {
            id: 1,
            text: "홈",
            state: location.pathname === "/list-read" || "/list-search",
            // state: ["/list-read", "/list-search"].includes(location.pathname),
            imgFalse: navHomeOff,
            imgTrue: navHomeON,
            path: "/list-read",
        },
        {
            id: 2,
            text: "찜",
            state: location.pathname === "/likePage",
            imgFalse: navLikeOff,
            imgTrue: navLikeOn,
            path: "/likePage",
        },
        {
            id: 3,
            text: "마이",
            state: location.pathname === "/myPage",
            imgFalse: navMyOff,
            imgTrue: navMyOn,
            path: "/myPage",
        },
    ])
    //-------------------------------------------------------
    // 네브바 true / false 상태 변경
    useEffect(() => {
        setNavData((prev) =>
            prev.map((item) => ({
                ...item,
                state: location.pathname === item.path
            })))
    }, [location.pathname])
    //-------------------------------------------------------

    return <NavBox>
        {navData.map((el) => <NavItem key={el.id} el={el} />)}
    </NavBox>
}

export default NavBar


const NavBox = styled.div`
    z-index: 999;
    position: fixed;
    width: 100%;
    max-width: 768px;
    height: 70px;
    padding: 0px 80px;
    box-sizing: border-box;
    background-color: white;
    display: flex;
    justify-content: space-between;
    bottom: -1px;
    border-top: 2px solid #E8E8E8;
`

