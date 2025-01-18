import styled from "styled-components"




const ListDataText = ({ el }) => {

    return <div style={{ display: "flex", gap: "16px", marginBottom: "10px" }}>

        {/*------------ 조회수 ------------*/}
        <IconBox>
            <div>좋아요</div>
            <div style={{ opacity: 0.3 }}>|</div>
            <div style={{ color: "#FF9500" }}>{el.view}</div>
        </IconBox>

        {/*------------ 좋아요 ------------*/}
        <IconBox>
            <div>조회수</div>
            <div style={{ opacity: 0.3 }}>|</div>
            <div style={{ color: "#FF9500" }}>{el.likeNum}</div>
        </IconBox>

    </div>
}

export default ListDataText


const IconBox = styled.div`
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    font-size: 16px;
    color: #979797;
    font-family: "Pretendard-SemiBold";
`

