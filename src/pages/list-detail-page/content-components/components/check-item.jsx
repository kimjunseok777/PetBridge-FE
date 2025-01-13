import styled from "styled-components"
import checkIcon from "../../../../image/check-icon.png"



const CheckItem = ({ label }) => {
    return <CheckBoxLayout>
        <InputCheck />
        <Label>{label}</Label>
    </CheckBoxLayout>
}

export default CheckItem


const CheckBoxLayout = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    margin: 0px 6px 10px 0px;
    width: 30%;
`
const InputCheck = styled.div`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    /* background-color: #ff8b1f; */
    background-color: #FF9500;
    border: 1px solid #FF9500;
    background-image: url(${checkIcon});
    background-size: 16px;
    background-repeat: no-repeat;
    background-position: 50% 55%;
`
const Label = styled.label`
    font-family: "Pretendard-SemiBold";
    color: #777777;
    font-size: 18px;
    letter-spacing: -0.5px;
`