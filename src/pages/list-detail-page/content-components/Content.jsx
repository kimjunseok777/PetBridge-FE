import AnimalSaleBtn from "./components/animalSale-btn"
import ContentFiltering from "./Content-Filtering"
import ContentHeader from "./Content-Header"
import ContentWrite from "./Content-Write"



const Content = () => {
    return <div style={{ padding: "20px" }}>
        {/*----- 분양글 헤더 -----*/}
        <ContentHeader />

        {/*----- 분양글 필터링 내용 -----*/}
        <ContentFiltering />

        {/*----- 분양글 작성 내용 -----*/}
        <ContentWrite />

        {/*----- 분양원해요 버튼 -----*/}
        <AnimalSaleBtn />
    </div>
}

export default Content


