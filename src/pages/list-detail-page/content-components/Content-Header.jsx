import styled from "styled-components"




const ContentHeader = () => {
    return <div>
        <PageTitle>분양글 타이틀</PageTitle>
        <PageContents>
            분양글에 대한 소타이틀이나 상세내용 등을 작성해주시면 됩니다.
            분양글 생성에서 작성 가능합니다.
        </PageContents>
    </div>
}

export default ContentHeader



const PageTitle = styled.div`
    font-family: "Pretendard-Bold";
    font-size: 34px;
    letter-spacing: -1px;
    margin: 10px 0px;
    color: #292929;
`
const PageContents = styled.div`
    font-family: "Pretendard-Medium";
    font-size: 18px;
    color: #969696;
    margin-bottom: 30px;
`