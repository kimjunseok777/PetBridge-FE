import styled from "styled-components";
import myIcon from "../../image/my-icon.png"



const LogOutPopUpIcon = () => {
    return <IconBox>
        <img src={myIcon} style={{ width: "60px", paddingBottom: "8px" }} />
        <PointIcon>
            <PointLine />
        </PointIcon>
    </IconBox>
}

export default LogOutPopUpIcon


const IconBox = styled.div`
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #bebebe;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`
const PointIcon = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #ff830f;
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
const PointLine = styled.div`
    background-color: white;
    width: 30px;
    height: 6px;
    border-radius: 10px;
`