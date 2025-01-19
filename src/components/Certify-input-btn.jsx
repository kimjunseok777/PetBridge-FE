import styled from "styled-components"




const CertifyInputBtn = ({ error, name, register, btnText, func, ...props }) => {
    return <>
        <InputForm>
            <Input {...props} {...register?.(name)} />
            <InputBtn type="button" onClick={func}>{btnText}</InputBtn>
        </InputForm>

        <p style={{
            fontFamily: "Pretendard-SemiBold",
            visibility: error ? "visible" : "hidden",
            color: "#FF9500",
            padding: 0,
            paddingLeft: 10,
            fontSize: 14
        }}
        >{error}</p>
    </>
}

export default CertifyInputBtn


const InputForm = styled.form`
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
    position: relative;
`
const Input = styled.input`
    width: 100%;
    height: 100%;
    border: 1px solid #c9c9c9;
    border-radius: 6px;
    padding-left: 16px;
    font-family: "Pretendard-Medium";
    font-size: 16px;
    color: #22252A;
    padding-right: 120px;
    &::placeholder{
        color: #c9c9c9;
    }
    &:focus{
        border: 2px solid #FF9500;
        outline: none;
    }
    &:disabled{
        background-color: #eeeeee;
        & + button {
            pointer-events: none;
            background-color: #c8c8c8;
        }
    }
`
const InputBtn = styled.button`
    width: 90px;
    height: 36px;
    border-radius: 100px;
    background-color: #FF9500;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: "Pretendard-Medium";
    font-size: 14px;
    position: absolute;
    right: 16px;
`