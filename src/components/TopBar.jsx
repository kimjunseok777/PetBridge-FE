import { useNavigate } from "react-router-dom"
import styled from "styled-components"



const TopBar = () => {

    const navigate = useNavigate()

    return <TopBox>
        <div onClick={() => navigate(-1)} style={{
            cursor: "pointer"
        }}>
            &lt; 뒤로가기
        </div>
    </TopBox>
}

export default TopBar


const TopBox = styled.div`
    /* width: 100%; */
    /* margin-bottom: 20px; */
    height: 60px;
    padding: 0 16px;
    border-bottom: 1px solid #dbdbdb;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Pretendard-Medium";
    color: #a5a5a5;
`;

