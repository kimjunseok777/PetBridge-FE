import styled from "styled-components"
import checkIcon from "../image/check-icon.png"
import checkIconGray from "../image/check-icon-gray.png"
import { useState } from "react";



const CheckBox = ({text, ...props}) => {

    // 하나만 선택 돼야 하는 체크박스가 있고, 중복 선택 돼도 괜찮은 체크 박스가 있다
    return <CheckBoxLayout>
        <InputCheck type="checkBox" {...props}/>
        <label style={{
            fontFamily: 'Pretendard-SemiBold',
            color: '#777777',
            letterSpacing: "-0.5px",
        }}>{text}</label>
    </CheckBoxLayout>
}

export default CheckBox

const CheckBoxLayout = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
`

const InputCheck = styled.input`
    width: 28px;
    height: 28px;
    appearance: none;
    border-radius: 50%;
    border: 3px solid #dedede;
    background-image: url(${checkIconGray});
    background-size: 16px;
    background-repeat: no-repeat;
    background-position: 50% 60%;
    &:checked{
        background-color: #ff8b1f;
        border: 3px solid #ff8b1f;
        background-image: url(${checkIcon});
        background-size: 16px;
        background-repeat: no-repeat;
        background-position: 50% 60%;
    }
`

