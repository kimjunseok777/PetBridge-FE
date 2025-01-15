import ItemTitle from "../../../components/Item-Title"
import CreateTextArea from "./create-textarea"




const CreateStep3Etc = () => {
    return <>
        {/*--------------- 분양 희망 지역 ---------------*/}
        <ItemTitle>분양 희망 지역</ItemTitle>
        <CreateTextArea size={"medium"} placeholder={"분양 희망 지역을 입력해주세요."} />
        <div style={{ marginBottom: "24px" }}></div>

        {/*--------------- 좋아해요 ---------------*/}
        <ItemTitle>좋아해요</ItemTitle>
        <CreateTextArea size={"large"} placeholder={"아이가 좋아하는 것을 입력해주세요."} />
        <div style={{ marginBottom: "24px" }}></div>

        {/*--------------- 싫어해요 ---------------*/}
        <ItemTitle>싫어해요</ItemTitle>
        <CreateTextArea size={"large"} placeholder={"아이가 싫어하는 것을 입력해주세요."} />
        <div style={{ marginBottom: "24px" }}></div>

        {/*--------------- 가진 질병 ---------------*/}
        <ItemTitle>가진 질병</ItemTitle>
        <CreateTextArea size={"large"} placeholder={"아이가 가진 질병을 입력해주세요."} />
        <div style={{ marginBottom: "24px" }}></div>

        {/*--------------- 가졌던 질병 ---------------*/}
        <ItemTitle>가졌던 질병</ItemTitle>
        <CreateTextArea size={"large"} placeholder={"아이가 가졌던 질병을 입력해주세요."} />
        <div style={{ marginBottom: "24px" }}></div>

        {/*--------------- 분양자 요구사항 ---------------*/}
        <ItemTitle>분양자 요구사항</ItemTitle>
        <CreateTextArea size={"large"} placeholder={"분양시 입양자에게 요구하는 사항을 입력해주세요."} />
        <div style={{ marginBottom: "24px" }}></div>
    </>
}

export default CreateStep3Etc