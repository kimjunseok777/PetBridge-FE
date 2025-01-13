import { useState } from "react";
import styled from "styled-components";
import BannerPage from "./Banner_Page";
import BannerLikeBtn from "./Banner_Like_btn";
import SlidePrevBtn from "./Slide-Prev-btn";
import SlideNextBtn from "./Slide-Next-btn";


const Banner = () => {

    // 동물 이미지 목데이터 :
    const animalImgArray = [1, 2, 3, 4]

    // 배너 슬라이드 상태 :
    const [bannerCount, setBannerCount] = useState(1)


    return <div style={{position: "relative"}}>
        {/*------- 슬라이드 배너 -------*/}
        <SlideBannerBox>
            <BannerLayout>
                {animalImgArray.map((el, index) =>
                <BannerItem key={index} $bannerCount={bannerCount}>
                    {el}
                </BannerItem>)}
            </BannerLayout>
        </SlideBannerBox>

        {/*------- Prev 버튼 -------*/}
        <SlidePrevBtn 
            imgLength={animalImgArray.length}
            bannerCount={bannerCount} setBannerCount={setBannerCount}
        />
        {/*------- Next 버튼 -------*/}
        <SlideNextBtn
            imgLength={animalImgArray.length}
            bannerCount={bannerCount} setBannerCount={setBannerCount}
        />
        {/*------- 좋아요 버튼 -------*/}
        <BannerLikeBtn/>
        {/*------- 배너 페이지 -------*/}
        <BannerPage
            imgLength={animalImgArray.length}
            bannerCount={bannerCount}
        />
    </div>
} 

export default Banner


// 슬라이드 배너 CSS :
const SlideBannerBox = styled.div`
    width: 100%;
    max-width: 768px;
    height: 340px;
    background-color: #cacaca;
    overflow: hidden;
`
const BannerLayout = styled.div`
    height: 100%;
    display: flex;
`
const BannerItem = styled.div`
    width: 100%;
    max-width: 768px;
    background-color: #9c9c9c;
    flex-shrink: 0;
    // 슬라이드 애니메이션 :
    transform: ${({$bannerCount}) => `translateX(calc(-100% * ${$bannerCount-1}))`};
    transition: all 0.3s ease-out;
    // 백엔드와 API 통신 하면 삭제 CSS :
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 30px;
`