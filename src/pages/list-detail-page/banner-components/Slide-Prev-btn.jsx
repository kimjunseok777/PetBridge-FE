import styled from "styled-components"
import btnPrev from "../../../image/btn-prev.png"



const SlidePrevBtn = ({bannerCount, setBannerCount}) => {

    const onPressPrev = () => {
        if(bannerCount <= 0) return
        return setBannerCount(bannerCount--)
    }

    return <BtnBox onClick={onPressPrev} $btnState={bannerCount <= 1}>
        <BtnImg src={btnPrev} $btnState={bannerCount <= 1}/>
    </BtnBox>
}

export default SlidePrevBtn


const BtnBox = styled.div`
    cursor: pointer;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: ${({$btnState}) => $btnState && "none"};
`
const BtnImg = styled.img`
    width: 26px;
    padding-left: 6px;
    opacity: ${({$btnState}) => $btnState && 0.25};
`
