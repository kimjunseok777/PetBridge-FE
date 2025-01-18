import styled from "styled-components"
import myPageIcon from "../../../image/my-icon.png"




const MyHeader = ({ ContentMockData }) => {

    return <div style={{ padding: "16px 16px 0px 16px" }}>
        <HeaderBox>

            {/*---------------- 타이틀 ----------------*/}
            <div style={{ display: "flex", alignItems: "center" }}>
                <MyPageCircle>
                    <img src={myPageIcon} style={{ width: "20px" }} />
                </MyPageCircle>
                <div>
                    <TextFirst>마이페이지</TextFirst>
                    <TextSecond>내가 쓴 분양글을 확인할 수 있어요.</TextSecond>
                </div>
            </div>

            {/*---------------- 내가쓴 분양글 수 ----------------*/}
            <LikeNumBox>
                {ContentMockData.length}개
            </LikeNumBox>

        </HeaderBox>
    </div>
}

export default MyHeader


const HeaderBox = styled.div`
    width: 100%;
    padding: 20px 10px;
    background-color: #f4f4f4;
    border: 1px solid #e3e3e3;
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const MyPageCircle = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #ff830f;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    box-sizing: border-box;
    padding-bottom: 2px;
`
const TextFirst = styled.div`
    font-family: "Pretendard-Bold";
    color: #3f3f3f;
    font-size: 24px;
    margin-bottom: 2px;
`
const TextSecond = styled.div`
    font-family: "Pretendard-Medium";
    color: #acacac;
    font-size: 16px;
    letter-spacing: -0.3px;
`
const LikeNumBox = styled.div`
    font-family: "Pretendard-Medium";
    font-size: 16px;
    color: white;
    padding: 6px 18px;
    border-radius: 50px;
    background-color: rgba(0, 0, 0, 0.25);
`