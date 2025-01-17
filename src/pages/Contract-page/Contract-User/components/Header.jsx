import styled from "styled-components"




const Header = () => {
    return <div style={{ display: "flex", alignItems: "center", marginBottom: "30px" }}>
        <Img />
        <div>
            <HeaderTitle>분양글 타이틀</HeaderTitle>
            <HeaderContent>분양글에 대한 소타이틀이나 상세내용 등을 작성해주시면 됩니다.</HeaderContent>
        </div>
    </div>
}

export default Header


const Img = styled.img`
    background-color: #e0e0e0;
    width: 140px;
    height: 140px;
    aspect-ratio: 1/1;
    border-radius: 14px;
    margin-right: 12px;
`
const HeaderTitle = styled.div`
    font-family: "Pretendard-Bold";
    font-size: 28px;
    color: #292929;
    margin-bottom: 4px;
`
const HeaderContent = styled.div`
    font-family: "Pretendard-Medium";
    color: #969696;
`