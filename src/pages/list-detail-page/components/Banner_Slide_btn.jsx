import styled from "styled-components"
import btnPrev from "../../../image/btn-prev.png"
import btnNext from "../../../image/btn-next.png"



const BannerSlideBtn = () => {

    const onPressPrev = () => {
        return alert("Prev Btn")
    }
    const onPressNext = () => {
        return alert("Next Btn")
    }

    //-----------------------------------------------------------------

    return <BtnBox>
        <img src={btnPrev} style={{width: "18px", cursor: "pointer"}}
            onClick={onPressPrev}
        />

        <div style={{display: "flex", alignItems: "center", gap: "4px"}}>
            <ImgPageCurrent>01</ImgPageCurrent>
            <ImgPageSlash>/</ImgPageSlash>
            <ImgPageFull>08</ImgPageFull>
        </div>

        <img src={btnNext} style={{width: "18px", cursor: "pointer"}}
            onClick={onPressNext}
        />
    </BtnBox>
}

export default BannerSlideBtn


const BtnBox = styled.div`
    position: absolute;
    right: 16px;
    bottom: 16px;
    width: 100px;
    height: 36px;
    border-radius: 100px;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 8px;
`
const ImgPageCurrent = styled.div`
    font-family: 'Pretendard-Medium';
    color: white;
`
const ImgPageFull = styled.div`
    font-family: 'Pretendard-Medium';
    color: rgba(255, 255, 255, 0.6);
`
const ImgPageSlash = styled.div`
    font-family: 'Pretendard-Medium';
    color: rgba(255, 255, 255, 0.6);
`

