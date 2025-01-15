import styled, { css } from "styled-components"





const CreateTextArea = ({ size, ...props }) => {
    return <TextArea {...{ size }} {...props} />
}

export default CreateTextArea


const TextArea = styled.textarea`
    width: 100%;
    ${({ size }) => sizeCSS[size]}
    border-radius: 10px;
    padding: 16px;
    box-sizing: border-box;
    outline: none;
    background-color: #f6f6f6;
    border: 1px solid #dbdbdb;
    font-family: "Pretendard-SemiBold";
    font-size: 18px;
    color: #535353;
    &::placeholder{
        font-family: "Pretendard-Medium";
        color: #bfbfbf;
    }
`

const sizeCSS = {
    medium: css`
        height: 60px;
    `,
    large: css`
        height: 100px;
    `,
}

