import styled from "styled-components"
import btnNext from "../../../image/btn-next.png"



const SlideNextBtn = ({imgLength, bannerCount, setBannerCount}) => {

    const onPressNext = () => {
        if(bannerCount > imgLength) return
        return setBannerCount(bannerCount++)
    }

    return <BtnBox onClick={onPressNext} $btnState={bannerCount >= imgLength}>
        <BtnImg src={btnNext} $btnState={bannerCount >= imgLength}/>
    </BtnBox>
}

export default SlideNextBtn


const BtnBox = styled.div`
    cursor: pointer;
    position: absolute;
    right: 16px;
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
    padding-right: 6px;
    opacity: ${({$btnState}) => $btnState && 0.25};
`

