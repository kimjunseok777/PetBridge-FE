import styled from "styled-components"
import React from "react"



const ContentWrite = () => {

    // 분양글 작성 내용 목데이터 :
    const WriteContentarray = [
        {
            title: "상세내용",
            content: "가족처럼 함께할 따뜻한 마음을 가진 분께 인연을 찾습니다. 메세지 가능합니다. 언제든지 연락주세요."
        },
        {
            title: "분양 희망 장소",
            content: "서울특별시 언주로 605 작심하우스 214호"
        },
        {
            title: "좋아해요",
            content: "분양 보낼 반려동물의 좋아하는 부분을 분양자가 분양 글을 등록할 때 작성하면 됩니다."
        },
        {
            title: "싫어해요",
            content: "분양 보낼 반려동물의 좋아하는 부분을 분양자가 분양 글을 등록할 때 작성하면 됩니다."
        },
        {
            title: "가진 질병",
            content: "분양 보낼 반려동물의 좋아하는 부분을 분양자가 분양 글을 등록할 때 작성하면 됩니다."
        },
        {
            title: "가졌던 질병",
            content: "분양 보낼 반려동물의 좋아하는 부분을 분양자가 분양 글을 등록할 때 작성하면 됩니다."
        },
    ]

    return <>
        {WriteContentarray.map((el, index) => <React.Fragment key={index}>
            <CategoryTitle>{el.title}</CategoryTitle>
            <CategoryContent>{el.content}</CategoryContent>
        </React.Fragment>)}

        <div style={{ marginBottom: "20px" }}></div>
    </>
}

export default ContentWrite


const CategoryTitle = styled.div`
    font-family: "Pretendard-Bold";
    font-size: 20px;
    letter-spacing: -0.5px;
    color: #292929;
    margin-bottom: 8px;
`
const CategoryContent = styled.div`
    background-color: #F0F0F0;
    border: 1px solid #e6e6e6;
    border-radius: 6px;
    padding: 12px;
    margin-bottom: 30px;
    font-family: "Pretendard-Medium";
    color: #7F7F7F;
`
