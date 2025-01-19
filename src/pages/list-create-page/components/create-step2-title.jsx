import ItemTitle from "../../../components/Item-Title"
import CreateTextArea from "./create-textarea"
import ImageUploader from "./Image-Upload"




const CreateStep2Title = () => {

    //-------------------------------------------------------------------

    //-------------------------------------------------------------------


    return <>
        {/*--------------- 사진 ---------------*/}
        <ItemTitle>사진 첨부</ItemTitle>
        {/*---> 이미지 업로드 <---*/}
        <ImageUploader />

        <div style={{ marginBottom: "24px" }}></div>

        {/*--------------- 타이틀 ---------------*/}
        <ItemTitle>타이틀</ItemTitle>
        <CreateTextArea size={"medium"} placeholder={"타이틀을 입력해주세요."} />

        <div style={{ marginBottom: "24px" }}></div>

        {/*--------------- 상세내용 ---------------*/}
        <ItemTitle>상세내용</ItemTitle>
        <CreateTextArea size={"large"} placeholder={"상세내용을 입력해주세요."} />

        <div style={{ marginBottom: "24px" }}></div>
    </>
}

export default CreateStep2Title

