import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components"




const NavItem = ({ el, navData, setNavData }) => {

    const navigate = useNavigate()

    //------------------------------------------------------------------
    // 탭 클릭 경로이동 함수 :
    const onPressNavTap = (pathName) => {
        return navigate(pathName)
    }

    //------------------------------------------------------------------

    return <ItemBox onClick={() => onPressNavTap(el.path)}>

        {/*------------- 포인트 막대기 -------------*/}
        <PointBar $state={el.state} />

        {/*------------- 아이콘 -------------*/}
        {el.state ? <Img src={el.imgTrue} /> : <Img src={el.imgFalse} />}

        {/*------------- 텍스트 -------------*/}
        <CateText $state={el.state}>{el.text}</CateText>

    </ItemBox>
}

export default NavItem


const ItemBox = styled.div`
    cursor: pointer;
    width: 60px;
    height: 70px;
    margin-top: -2px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const PointBar = styled.div`
    width: 50%;
    height: 4px;
    margin-bottom: 8px;
    background-color: ${({ $state }) => $state ? "#FF9500" : null};
`
const Img = styled.img`
    height: 24px;
    margin-bottom: 4px;
`
const CateText = styled.div`
    font-size: 16px;
    color: ${({ $state }) => $state ? "#FF9500" : "#A8A8A8"};
    font-family: ${({ $state }) => $state ? "Pretendard-Bold" : "Pretendard-Medium"};
`

