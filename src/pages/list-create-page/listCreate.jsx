import styled from "styled-components"
import createIcon from "../../image/create-icon-btn.png"
import CreateContent from "./Create-Content"




const ListCreate = () => {
    return <>
        {/*------------------ 페이지 헤더 ------------------*/}
        <div style={{ padding: "10px" }}>
            <HeaderBox>
                <div style={{
                    display: "flex", alignItems: "center", margin: "20px 0px 14px 0px"
                }}>
                    <HeaderTitle>분양글 등록하기</HeaderTitle>
                    <img src={createIcon} style={{ width: "36px" }} />
                </div>
                <div style={{ height: "1px", backgroundColor: "#ffa550" }}></div>
                <HeaderContent>
                    아래 나와있는 항목들은 모두 필수 작성 입력란입니다.<br />
                    기재할 내용이 없다면 "없음"으로 입력해주세요.
                </HeaderContent>
            </HeaderBox>
        </div>

        {/*------------------ 분양글 작성 컨텐츠 ------------------*/}
        <CreateContent />
    </>
}

export default ListCreate


const HeaderBox = styled.div`
    padding: 20px;
    border-radius: 10px;
    background-color: #ff8b1f;
`
const HeaderTitle = styled.div`
    font-family: "Pretendard-SemiBold";
    font-size: 36px;
    margin-right: 6px;
    color: white;
`
const HeaderContent = styled.div`
    font-family: "Pretendard-Regular";
    font-size: 17px;
    color: #fff9f3;
    line-height: 24px;
    margin: 16px 0px 20px 0px;
`

