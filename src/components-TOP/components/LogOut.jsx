import styled from "styled-components"
import myIcon from "../../image/my-icon.png"
import { usePopUp } from "../../store/PopUp.store"



const LogOut = () => {

    const { setIsOpenPopUp } = usePopUp()

    // 로그아웃 버튼 클릭
    const onPressLogOut = () => {
        return setIsOpenPopUp("logOut")
    }


    return <LogOutBox onClick={onPressLogOut}>

        {/*------------ 아이콘 ------------*/}
        <LogOutIcon>
            <LogOutImg src={myIcon} />
            <LogOutPoint>
                <PointLine />
            </LogOutPoint>
        </LogOutIcon>

        {/*------------ 텍스트 ------------*/}
        <LogOutText>로그아웃</LogOutText>

    </LogOutBox>
}

export default LogOut


const LogOutBox = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
`
const LogOutIcon = styled.div`
    position: relative;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #c2c2c2;
    display: flex;
    justify-content: center;
    align-items: center;
`
const LogOutImg = styled.img`
    width: 16px;
`
const LogOutPoint = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #ff830f;
    display: flex;
    justify-content: center;
    align-items: center;
`
const PointLine = styled.div`
    background-color: white;
    width: 10px;
    height: 2px;
    border-radius: 10px;
`
const LogOutText = styled.div`
    font-family: "Pretendard-Medium";
    color: #a5a5a5;
`