import styled from "styled-components"
import MyHeader from "./components/my-header"
import animal from "../../image/animal.jpg"
import MyListIem from "./components/my-list-item"




const MyMain = () => {

    //------------------------------------------------------------------------
    // 내가 쓴 분양글 목데이터 :
    const ContentMockData = [
        {
            id: Math.floor(Math.random() * 1000000),
            title: "분양글 타이틀",
            content: "분양글 소타이틀이나 상세내용을 작성해주시면 됩니다",
            img: animal,
            likeNum: 27,
            likeState: true,
            view: 218,
        },
        {
            id: Math.floor(Math.random() * 1000000),
            title: "분양글 타이틀",
            content: "분양글 소타이틀이나 상세내용을 작성해주시면 됩니다",
            img: animal,
            likeNum: 27,
            likeState: true,
            view: 218,
        },
    ]
    //------------------------------------------------------------------------


    return <>
        {/* --------------- 상단 타이틀 --------------- */}
        <MyHeader ContentMockData={ContentMockData} />

        {/* --------------- 내 분양글 리스트 --------------- */}
        <ListContainer>
            {ContentMockData.map((el) => <MyListIem el={el} />)}
        </ListContainer>
    </>
}

export default MyMain


const ListContainer = styled.div`
    padding: 16px 16px 80px 16px;
`