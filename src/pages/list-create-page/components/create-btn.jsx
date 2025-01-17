import styled from "styled-components"
import createIcon from "../../../image/create-icon-btn.png"



const CreateBtn = ({ ...props }) => {
    return <Button {...props}>
        <img src={createIcon} style={{ width: "26px" }} />
        등록하기
    </Button>
}

export default CreateBtn


const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    width: 100%;
    height: 60px;
    border: none;
    background-color: #FF9500;
    color: white;
    border-radius: 6px;
    font-family: "Pretendard-Medium";
    font-size: 18px;
    &:hover{
        background-color: #d56700;
    }
`

