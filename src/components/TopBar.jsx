import styled from "styled-components"



const TopBar = () => {
    return <TopBox>
        <div>&lt; 뒤로가기</div>
        <div>펫브릿지</div>
    </TopBox>
}

export default TopBar


const TopBox = styled.div`
    margin-bottom: 50px;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #dbdbdb;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: "Pretendard-Medium";
    color: #7d7d7d;
`;


