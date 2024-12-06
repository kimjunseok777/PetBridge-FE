import styled from "styled-components"




const CheckBox = ({text}) => {

    return <CheckBoxLayout>
        <InputCheck type="checkBox"/>
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
    }
`

