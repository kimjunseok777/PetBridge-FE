import styled from "styled-components"
import CheckBox from "../../../../components/CheckBox"
import React from "react"




const TextLayout = () => {

    // 분양글 & 입양자 작성 내용 목데이터 :
    const WriteContentarray = [
        {
            title: "접선 장소",
            content: "광주광역시 북구 000로 000빌라 000호"
        },
        {
            title: "반려인 요구사항",
            content: "반려인 요구사항을 작성해주시면 됩니다."
        },
        {
            title: "입양자 요구사항",
            content: "입양자 요구사항을 작성해주시면 됩니다."
        },
        {
            title: "입양자 연락처",
            content: "000-0000-0000"
        },
    ]

    return <>
        {/*------------ 텍스트 : 고정란 ------------*/}
        {WriteContentarray.map((el, index) => <React.Fragment key={index}>
            <CategoryTitle>{el.title}</CategoryTitle>
            <CategoryContent>{el.content}</CategoryContent>
        </React.Fragment>)}

        {/*------------ 동의 체크란 ------------*/}
        <CheckBox text={"위 내용에 모두 동의하십니까?"} />
        <div style={{ marginBottom: "30px" }}></div>
    </>
}

export default TextLayout

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
    margin-bottom: 20px;
    font-family: "Pretendard-Medium";
    color: #7F7F7F;
`
