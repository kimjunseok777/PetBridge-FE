import styled from "styled-components"
import ListContent from "../../list-read-page/components/list-content"
import { useNavigate } from "react-router-dom"



const LikeList = ({ ContentMockData }) => {

    const navigate = useNavigate()

    const onPressListDetail = () => {
        return navigate("/list-detailPage")
    }


    return <Container>
        {ContentMockData.map((el) => <ListContent key={el.id} el={el}
            onClick={onPressListDetail} />)}
    </Container>
}

export default LikeList


const Container = styled.div`
    padding: 16px 16px 80px 16px;
`