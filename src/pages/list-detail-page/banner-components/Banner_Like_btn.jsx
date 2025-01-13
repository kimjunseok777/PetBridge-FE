import styled from "styled-components"
import likeTrueIcon from "../../../image/like-true.png"
import likeFalseIcon from "../../../image/like-false.png"
import { useState } from "react"



const BannerLikeBtn = () => {

    // 좋아요 목데이터 :
    const [isLikeState, setIsLikeState] = useState(false)

    const onPressLikeBtn = () => {
        return setIsLikeState(!isLikeState)
    }

    return <BtnBox onClick={onPressLikeBtn} $isLikeState={isLikeState}>
        <LikeIcon src={isLikeState ? likeTrueIcon : likeFalseIcon}/>
        <LikeText $isLikeState={isLikeState}>찜하기</LikeText>
    </BtnBox>
}

export default BannerLikeBtn


const BtnBox = styled.div`
    cursor: pointer;
    position: absolute;
    left: 16px;
    bottom: 16px;
    width: 104px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 100px;
    background-color: ${({$isLikeState}) => $isLikeState ?
    "rgba(255, 255, 255, 1) ": "rgba(0, 0, 0, 0.2)"};
`
const LikeIcon = styled.img`
    width: 20px;
`
const LikeText = styled.div`
    font-family: 'Pretendard-Medium';
    color: ${({$isLikeState}) => $isLikeState ? "#747474" : "White"};
    font-family: ${({$isLikeState}) => $isLikeState ? 'Pretendard-Bold' : 'Pretendard-Medium'};
`

