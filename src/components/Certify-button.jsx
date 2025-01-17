import styled from "styled-components"




const CertifyButton = ({ children, ...props }) => {
    return <Button
        {...props}
    >{children}</Button>
}

export default CertifyButton

const Button = styled.button`
    width: 100%;
    height: 56px;
    border: none;
    background-color: #FF9500;
    color: white;
    border-radius: 6px;
    font-family: "Pretendard-Medium";
    font-size: 18px;
`
