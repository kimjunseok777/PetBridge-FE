import styled from "styled-components"
import ListContentLike from "./list-content-like"




const ListContent = ({el, ...props}) => {

    return <ContentContainer {...props}>

        {/*------------ 좌측 이미지 ------------*/}
        <ImgContainer>
            <Img src={el.img}/>
            <ListContentLike likeNum={el.likeNum} likeState={el.likeState}/>
        </ImgContainer>

        {/*------------ 우측 텍스트 ------------*/}
        <TextLayout>
            <ContentTitle>{el.title}</ContentTitle>
            <ContentComment>{el.content}</ContentComment>
            <ContentViewers>조회수 {el.view}</ContentViewers>
        </TextLayout>

    </ContentContainer>
}

export default ListContent


const ContentContainer = styled.div`
    /* width: 100%; */
    height: 200px;
    margin-bottom: 16px;
    display: flex;
    cursor: pointer;
`

// 좌측 이미지 :
const ImgContainer = styled.div`
    position: relative;
    width: 200px;

    /* height: 100%; */
    border-radius: 10px;
    overflow: hidden;
    background-color: #ececec;
`
const Img = styled.img`
    width: 100%;
    /* height: 100%; */
    object-fit: cover;
`

// 우측 텍스트 :
const TextLayout = styled.div`
    padding: 16px;
    box-sizing: border-box;
    width: calc(100% - 200px);
    position: relative;
`
const ContentTitle = styled.div`
    font-family: "Pretendard-SemiBold";
    color: #5B5B5B;
    font-size: 24px;
    margin-bottom: 8px;
`
const ContentComment = styled.div`
    font-family: "Pretendard-Medium";
    color: #AAAAAA;
    margin-bottom: 8px;
`
const ContentViewers = styled.div`
    font-family: "Pretendard-SemiBold";
    color: #FF9500;
    position: absolute;
    left: 16px;
    bottom: 16px;
`

