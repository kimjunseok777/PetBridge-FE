import styled from "styled-components"




const LogOutBtn = ({ state, ...props }) => {
    return <Button $state={state} {...props}>
        {state ? "로그아웃" : "취소"}
    </Button>
}

export default LogOutBtn


const Button = styled.button`
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    font-family: "Pretendard-Medium";
    font-size: 18px;
    color: white;
    background-color: ${({ $state }) => $state ? "#FF9500" : "#a4a4a4"};
`