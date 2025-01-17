import styled from "styled-components"
import animalSole from "../../../../image/animal_sale_icon.png"
import { useNavigate } from "react-router-dom"



const AnimalSaleBtn = () => {

    const navigate = useNavigate()

    const onPressAnimalSaleBtn = () => {
        alert('입양 신청 페이지로 이동합니다.')
        return navigate("/contract-userPage")
    }

    return <Button onClick={onPressAnimalSaleBtn}>
        <img src={animalSole} style={{ width: "20px" }} />
        분양 원해요
    </Button>
}

export default AnimalSaleBtn


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