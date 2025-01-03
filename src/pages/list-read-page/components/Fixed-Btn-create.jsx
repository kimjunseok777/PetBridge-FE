import styled from "styled-components"
import pencilIcon from "../../../image/pencil.png"
import { useNavigate } from "react-router-dom"




const FixedBtnCreate = () => {

    const navigate = useNavigate()

    const onPressCreateBtn = () => {
        alert("분양글 생성페이지로 이동합니다")
        return navigate("/list-create")
    }

    return <CircleBox onClick={onPressCreateBtn}>
        <IconImg src={pencilIcon}/>
    </CircleBox>
}

export default FixedBtnCreate


const CircleBox = styled.div`
    cursor: pointer;
    width: 100%;
    aspect-ratio: 1/1;
    background-color: #949494;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const IconImg = styled.img`
    width: 30px;
`