import { useNavigate } from "react-router-dom"
import TopSearchBar from "./topComponents/top-search"
import TopFilterBar from "./topComponents/top-filter"
import styled from "styled-components"
import ListContent from "./components/list-content"
import animal from "../../image/animal.jpg"
import FixedBtnFilter from "./components/Fixed-Btn-filter"
import FixedBtnCreate from "./components/Fixed-Btn-create"



const ListRead = () => {

    const navigate = useNavigate()

    const onPressSearchBar = () => {
        return navigate("/list-search")
    }

    //--------------------------------------------------------------------------------------------
    // 분양글 리스트 목데이터
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
            likeState: false,
            view: 218,
        },
        {
            id: Math.floor(Math.random() * 1000000),
            title: "분양글 타이틀",
            content: "분양글 소타이틀이나 상세내용을 작성해주시면 됩니다",
            img: animal,
            likeNum: 27,
            likeState: false,
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
            likeState: false,
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
    //--------------------------------------------------------------------------------------------

    return <>
        {/* --------------- 상단 검색 & 필터 --------------- */}
        <TopSearchBar onClick={onPressSearchBar}/>
        <TopFilterBar/>

        {/* --------------- 분양글 리스트 --------------- */}
        <ListContainer>
            {ContentMockData.map((el) => <ListContent key={el.id} el={el}/>)}
        </ListContainer>

        {/* --------------- 검색필터 & 분양글생성 버튼 --------------- */}
        <FixedBtn>
            <FixedBtnFilter/>
            <FixedBtnCreate/>
        </FixedBtn>
    </>
}

export default ListRead


const ListContainer = styled.div`
    padding: 16px 16px 200px 16px;
`
// 우측 하단 fixed 버튼
const FixedBtn = styled.div`
    z-index: 999;
    width: 74px;
    position: fixed;
    right: 20px;
    bottom: 20px;
`


