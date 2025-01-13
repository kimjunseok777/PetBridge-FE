import styled from "styled-components"



const BannerPage = ({imgLength, bannerCount}) => {

    return <BtnBox>
        <ImgPageCurrent>0{bannerCount}</ImgPageCurrent>
        <ImgPageSlash>/</ImgPageSlash>
        <ImgPageFull>0{imgLength}</ImgPageFull>
    </BtnBox>
}

export default BannerPage


const BtnBox = styled.div`
    position: absolute;
    right: 16px;
    bottom: 16px;
    width: 90px;
    height: 36px;
    border-radius: 100px;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
`
const ImgPageCurrent = styled.div`
    font-family: 'Pretendard-Medium';
    color: white;
`
const ImgPageFull = styled.div`
    font-family: 'Pretendard-Medium';
    color: rgba(255, 255, 255, 0.4);
`
const ImgPageSlash = styled.div`
    font-family: 'Pretendard-Medium';
    color: rgba(255, 255, 255, 0.4);
`
