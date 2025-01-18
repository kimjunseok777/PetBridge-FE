import LikeList from "./components/like-list"
import animal from "../../image/animal.jpg"
import LikePageHeader from "./components/like-header"



const LikeMain = () => {


    //------------------------------------------------------------------------
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


    return <>
        {/* --------------- 상단 타이틀 --------------- */}
        <LikePageHeader ContentMockData={ContentMockData} />

        {/* --------------- 찜목록 리스트 --------------- */}
        <LikeList ContentMockData={ContentMockData} />
    </>
}

export default LikeMain

