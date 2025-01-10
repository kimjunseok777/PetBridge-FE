import styled from "styled-components"
import BannerSlideBtn from "./components/Banner_Slide_btn"
import BannerLikeBtn from "./components/Banner_Like_btn"
import FilterContent from "./components/filter-content"
import BannerSlide from "./components/BannerSlide"




const ListDetail = () => {

    // 동물 이미지 목데이터
    const animalImgArray = []

    return <>
        {/*-------------------- 분양 이미지 (배너) --------------------*/}
        <div style={{position: "relative"}}>
            <SlideBannerLayout>
                <BannerSlide/>
            </SlideBannerLayout>
            <BannerLikeBtn/> {/*--> 찜하기(좋아요) 버튼*/}
            <BannerSlideBtn/> {/*--> 배너 슬라이드 버튼*/}
        </div>

        {/*-------------------- 분양 상세페이지 내용 --------------------*/}
        <div style={{padding: "20px"}}>

            {/*----- 분양글 타이틀 -----*/}
            <DetailPageTitle>분양글 타이틀</DetailPageTitle>
            <DetailPageContent>
                분양글에 대한 소타이틀이나 상세내용 등을 작성해주시면 됩니다.
                분양글 생성에서 작성 가능합니다.
            </DetailPageContent>

            {/*----- 분양글 필터링 -----*/}
            <FilterContent/>

            {/*----- 분양글 상세내용 -----*/}

        </div>
    </>
}

export default ListDetail


const SlideBannerLayout = styled.div`
    width: 100%;
    height: 340px;
    background-color: #e0e0e0;
`
const DetailPageTitle = styled.div`
    font-family: "Pretendard-Bold";
    font-size: 34px;
    letter-spacing: -1px;
    margin: 10px 0px;
    color: #292929;
`
const DetailPageContent = styled.div`
    font-family: "Pretendard-Medium";
    font-size: 18px;
    color: #969696;
    margin-bottom: 10px;
`

