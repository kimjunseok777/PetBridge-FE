import { useNavigate } from "react-router-dom"
import { usePopUp } from "../../store/PopUp.store"
import styled from "styled-components"
import { useEffect } from "react"
import LogOutPopUpIcon from "./LogOut-popup-icon"
import LogOutBtn from "./LogOut-popup-btn"




const LogOutPopUp = () => {

    const navigate = useNavigate()
    const { setIsOpenPopUp } = usePopUp()

    // 취소 버튼 :
    const onPressCancel = () => {
        return setIsOpenPopUp(null)
    }

    // 로그아웃 버튼 :
    const onPressLogOut = () => {
        setIsOpenPopUp(null)
        return navigate("/")
    }


    //-----------------------------------------------------
    // 팝업 ON일 때 배경 스크롤 방지
    useEffect(() => {
        document.body.style = `overflow: hidden`;
        return () => document.body.style = `overflow: auto`
    }, [])
    //-----------------------------------------------------

    return <LogOutBackground>
        <Layout>
            <WhiteBox>

                {/*-------------- 아이콘 --------------*/}
                <LogOutPopUpIcon />

                {/*-------------- 텍스트 --------------*/}
                <TextFirst>로그아웃</TextFirst>
                <TextSecond>정말 로그아웃 하시겠습니까?</TextSecond>

                {/*-------------- 버튼 --------------*/}
                <BtnLayout>
                    <LogOutBtn state={false} onClick={onPressCancel} />
                    <LogOutBtn state={true} onClick={onPressLogOut} />
                </BtnLayout>

            </WhiteBox>
        </Layout>
    </LogOutBackground>
}

export default LogOutPopUp


const LogOutBackground = styled.div`
    z-index: 9999;
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    // 애니메이션 :
    animation-name: filterBG;
    animation-duration: 0.4s;
    @keyframes filterBG {
        0% {
            background-color: rgba(0, 0, 0, 0);
        } 100% {
            background-color: rgba(0, 0, 0, 0.4);
        }
    }
`
const Layout = styled.div`
    width: 100%;
    max-width: 768px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const WhiteBox = styled.div`
    width: 90%;
    height: 360px;
    border-radius: 10px;
    background-color: white;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 48px;
    box-sizing: border-box;
    // 애니메이션 :
    animation-name: LogOutPopUp;
    animation-duration: 0.4s;
    @keyframes LogOutPopUp {
        0% {
            transform: translateY(60%);
            opacity: 0;
        } 100% {
            transform: translateY(0%);
            opacity: 1;
        }
    }
`
// 텍스트 :
const TextFirst = styled.div`
    font-family: "Pretendard-Bold";
    color: #404040;
    font-size: 30px;
    letter-spacing: -1px;
    margin-bottom: 4px;
`
const TextSecond = styled.div`
    font-family: "Pretendard-Medium";
    color: #898989;
    font-size: 18px;
`
// 로그아웃 버튼 :
const BtnLayout = styled.div`
    position: absolute;
    bottom: 16px;
    width: calc(100% - 32px);
    height: 56px;
    display: flex;
    gap: 10px;
`