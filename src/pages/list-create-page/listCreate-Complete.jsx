import styled from "styled-components"
import CertifyButton from "../../components/Certify-button"
import { useNavigate } from "react-router-dom"
import pencilWhite from "../../image/create-icon-white.png"
import checkIcon from "../../image/check-icon.png"




const ListCreateComplete = () => {

    const navigate = useNavigate()

    const onPressConfirm = () => {
        alert("리스트 페이지로 이동합니다")
        return navigate("/list-read")
    }

    return <Container>

        {/*-------------- 이미지 레이아웃 --------------*/}
        <Layout>
            {/* 이미지 */}
            <PencilCircle>
                <PencilIcon src={pencilWhite} />
                <CheckCircle><CheckIcon src={checkIcon} /></CheckCircle>
            </PencilCircle>
            {/* 텍스트 */}
            <Text1>분양글 등록이 완료되었습니다!</Text1>
            <Text2>분양글 리스트에서 등록하신 글을 확인할 수 있어요!</Text2>
        </Layout>

        {/*-------------- 확인 버튼 --------------*/}
        <BtnPosition>
            <CertifyButton onClick={onPressConfirm}>확인</CertifyButton>
        </BtnPosition>

    </Container>
}

export default ListCreateComplete


const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 60px);
`
const Layout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: -120px;
`
const PencilCircle = styled.div`
    border-radius: 50%;
    width: 140px;
    height: 140px;
    background-color: #b9b9b9;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    position: relative;
`
const PencilIcon = styled.img`
    width: 60px;
    padding: 10px 6px 0px 0px;
`
const CheckCircle = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ff830f;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
const CheckIcon = styled.img`
    width: 28px;
    padding-top: 4px;
`

const Text1 = styled.div`
    text-align: center;
    font-family: "Pretendard-Bold";
    color: #2d2d2d;
    font-size: 28px;
    letter-spacing: -1px;
    margin: 16px 0px 10px;
`
const Text2 = styled.div`
    text-align: center;
    font-family: "Pretendard-Medium";
    color: #a8a8a8;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.3px;
`

const BtnPosition = styled.div`
    width: calc(100% - 32px);
    position: absolute;
    bottom: 16px;
`

