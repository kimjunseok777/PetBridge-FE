import styled from "styled-components"




const CertifyInput = ({error, name, register, ...props}) => {
    return <>
        <InputBox>
            <Input {...props} {...register?.(name)}/>
        </InputBox>
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

export default CertifyInput


const  InputBox = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
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
    &::placeholder{
        color: #c9c9c9;
    }
    &:focus{
        border: 2px solid #FF9500;
        outline: none;
    }
`

