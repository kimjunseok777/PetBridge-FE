import styled from "styled-components"
import deleteBtn from "../../image/delete_btn.png"



const RecentSearchTerms = ({text}) => {

    const onPressRecentBtn = () => {
        return alert('최근 검색어 클릭')
    }

    const onPressDeleteBtn = () => {
        return alert('삭제 버튼 클릭')
    }

    return <TextBox onClick={onPressRecentBtn}>
        {text}
        <DeleteBtn src={deleteBtn} onClick={onPressDeleteBtn}/>
    </TextBox>
}

export default RecentSearchTerms


const TextBox = styled.div`
    background-color: white;
    border: 1px solid #DADADA;
    border-radius: 3px;
    padding: 8px 10px;
    margin: 4px 6px 4px 0px;
    font-family: "Pretendard-Medium";
    color: #666666;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
`
const DeleteBtn = styled.img`
    width: 16px;
`

