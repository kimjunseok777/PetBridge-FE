import styled from "styled-components"
import animal from "../../../image/animal.jpg"
import ListContent from "../../list-read-page/components/list-content"
import { useNavigate } from "react-router-dom"



const LikeList = () => {

    const navigate = useNavigate()

    const onPressListDetail = () => {
        return navigate("/list-detailPage")
    }


    //--------------------------------------------------------------------------------------------
    // 좋아요 리스트 목데이터
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
            likeState: true,
            view: 218,
        },
    ]


    return <Container>
        {ContentMockData.map((el) => <ListContent key={el.id} el={el}
            onClick={onPressListDetail} />)}
    </Container>
}

export default LikeList


const Container = styled.div`
    padding: 16px;
`