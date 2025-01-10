import styled from "styled-components";
import FixedBtnFilter from "./Fixed-Btn-filter";
import FixedBtnCreate from "./Fixed-Btn-create";


// 우측 하단 분양글 필터 & 생성 버튼 컴포넌트
const FixedBtn = () => {
    return <FixedBtnLayout>
        <FixedBtnFilter/>
        <FixedBtnCreate/>
    </FixedBtnLayout>
}

export default FixedBtn


const FixedBtnLayout = styled.div`
    z-index: 999;
    width: 74px;
    position: fixed;
    right: 20px;
    bottom: 20px;
`


