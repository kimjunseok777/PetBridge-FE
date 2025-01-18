import styled from "styled-components"
import likeIcon from "../../image/like-icon.png"
import TopLine from "./components/top-line"
import LikeList from "./components/like-list"



const LikeMain = () => {

    return <>
        {/* --------------- 상단 타이틀 --------------- */}
        <div style={{ padding: "20px 20px 8px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <LikeCircle>
                    <img src={likeIcon} style={{ width: "30px" }} />
                </LikeCircle>
                <LikeText>찜목록</LikeText>
            </div>
        </div>

        {/* --------------- 상단 라인 --------------- */}
        <TopLine />

        {/* --------------- 찜목록 리스트 --------------- */}
        <LikeList />

    </>
}

export default LikeMain


const LikeCircle = styled.div`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: #ff830f;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
`
const LikeText = styled.div`
    font-family: "Pretendard-Bold";
    color: #3f3f3f;
    font-size: 28px;
    letter-spacing: -0.5px;
`