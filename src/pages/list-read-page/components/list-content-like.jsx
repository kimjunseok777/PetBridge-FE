import styled from "styled-components"
import likeTrueIcon from "../../../image/like-true.png"
import likeFalseIcon from "../../../image/like-false.png"




const ListContentLike = ({likeNum, likeState}) => {

    const onPressLikeBtn = () => {
        return alert('좋아요 버튼 클릭')
    }

    return <LikeBox onClick={onPressLikeBtn} $isState={likeState}>
        <LikeIcon src={likeState ? likeTrueIcon : likeFalseIcon}/>
        <LikeNum $isState={likeState}>{likeNum}</LikeNum>
    </LikeBox>
}

export default ListContentLike


const LikeBox = styled.div`
    cursor: pointer;
    position: absolute;
    padding: 0px 16px;
    height: 36px;
    background-color: white;
    border-radius: 200px;
    right: 10px;
    bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    background-color: ${({$isState}) => $isState ? "#fff" : "rgba(0, 0, 0, 0.15)"};
`
const LikeIcon = styled.img`
    width: 20px;
`
const LikeNum = styled.div`
    font-family: "Pretendard-Medium";
    color: #747474;
    color: ${({$isState}) => $isState ? "#747474" : "#fff"};
`