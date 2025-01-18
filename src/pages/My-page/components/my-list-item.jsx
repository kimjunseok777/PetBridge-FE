import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import ListDataText from "./my-list-dataText"



const MyListIem = ({ el, ...props }) => {


    const navigate = useNavigate()

    // 분양글 클릭 :
    const onPressList = () => {
        return navigate("/list-detailPage")
    }
    //-------------------------------------------------
    // 삭제하기 :
    const onPressDeleteBtn = (event) => {
        event.stopPropagation()
        return alert("분양글 삭제")
    }
    //-------------------------------------------------

    return <ListBox onClick={onPressList}>

        {/*------------ 좌측 이미지 ------------*/}
        <Img src={el.img} />

        {/*------------ 우측 텍스트 ------------*/}
        <div style={{ position: "relative" }}>

            {/*--- 텍스트 ---*/}
            <ListTitle>{el.title}</ListTitle>
            <ListDataText el={el} />

            {/*--- 삭제하기 ---*/}
            <DeleteBtn onClick={onPressDeleteBtn}>삭제</DeleteBtn>

        </div>

    </ListBox>
}

export default MyListIem



const ListBox = styled.div`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    background-color: #f4f4f4;
    border: 1px solid #e3e3e3;
    border-radius: 10px;
    margin-bottom: 10px;
    display: flex;
    gap: 16px;
`
// 좌측 이미지 :
const Img = styled.img`
    width: 120px;
    height: 120px;
    aspect-ratio: 1/1;
    border-radius: 10px;
    overflow: hidden;
    object-fit: cover;
`
// 우측 텍스트 :
const ListTitle = styled.div`
    font-family: "Pretendard-Bold";
    color: #444444;
    font-size: 24px;
    letter-spacing: -0.5px;
    margin: 8px 0px 6px 0px;
`
// 삭제하기 버튼 :
const DeleteBtn = styled.button`
    width: 80px;
    height: 36px;
    border-radius: 40px;
    border: none;
    font-family: "Pretendard-Medium";
    font-size: 18px;
    color: white;
    background-color: #ff830f;
    margin-left: -2px;
`
