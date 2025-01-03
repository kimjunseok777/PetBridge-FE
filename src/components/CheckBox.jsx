import styled from "styled-components"
// import checkIcon from "../image/check-icon.png"



const CheckBox = ({text, ...props}) => {

    // 하나만 선택 돼야 하는 체크박스가 있고, 중복 선택 돼도 괜찮은 체크 박스가 있다
    return <CheckBoxLayout>
        <InputCheck type="checkBox" {...props}/>
        <label style={{
            fontFamily: 'Pretendard-Medium',
            color: '#5f5f5f'
        }}>{text}</label>
    </CheckBoxLayout>
}

export default CheckBox

const CheckBoxLayout = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`

const InputCheck = styled.input`
    width: 30px;
    height: 30px;
    appearance: none;
    border-radius: 50%;
    border: 3px solid #cacaca;
    &:checked{
        background-color: #ff8b1f;
        border: 3px solid #ff8b1f;
        background-image: url("../image/check-icon.png");
    }
`

