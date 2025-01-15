import styled from "styled-components"
import checkIcon from "../image/check-icon.png"
import animalImg from "../image//animal.jpg"



const AnimalKindCheck = ({ text, ...props }) => {
    return <CheckBoxLayout>
        <InputCheck type="checkBox" {...props} />
        <TypeText>{text}</TypeText>
    </CheckBoxLayout>
}

export default AnimalKindCheck


const CheckBoxLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    margin-bottom: 10px;
`
const InputCheck = styled.input`
    cursor: pointer;
    width: 64px;
    height: 64px;
    appearance: none;
    border-radius: 50%;
    border: 3px solid #dedede;
    background-image: url(${animalImg});
    background-size: 150%;
    background-repeat: no-repeat;
    background-position: 50% 50%;

    &:checked{
        background-color: #ff8b1f;
        border: 3px solid #ff8b1f;
        background-image: url(${checkIcon});
        background-size: 30px;
        background-repeat: no-repeat;
        background-position: 50% 55%;
    }
`
const TypeText = styled.div`
    font-family: "Pretendard-SemiBold";
    color: #777777;
`
