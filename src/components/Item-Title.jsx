import styled from "styled-components";



const ItemTitle = ({ children, item }) => {
    return <>
        <TitleBox $item={item}>
            <Point />
            <Title>{children}</Title>
        </TitleBox>
    </>
}

export default ItemTitle


const TitleBox = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: ${({ $item }) => $item !== true && "4px"};
`
const Point = styled.div`
    width: 4px;
    height: 18px;
    border-radius: 100px;
    background-color: #F47A00;
`
const Title = styled.div`
    font-family: 'Pretendard-Bold';
    font-size: 20px;
    color: #404040;
    letter-spacing: -0.5px;
`
