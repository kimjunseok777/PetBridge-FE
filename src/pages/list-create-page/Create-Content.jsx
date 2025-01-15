import { useNavigate } from "react-router-dom"
import CreateBtn from "./components/create-btn"
import CreateStep1FilterFirst from "./components/create-step1-filterFirst"
import CreateStep1FilterSecond from "./components/create-step1-filterSecond"
import CreateStep2Title from "./components/create-step2-title"
import CreateStep3Etc from "./components/create-step3-etc"



const CreateContent = () => {

    const navigate = useNavigate()

    // 등록하기 버튼 :
    const onPressCreateBtn = (event) => {
        event.preventDefault()
        alert("분양글 생성 완료")
        return navigate("/list-create-complete")
    }

    return <form onSubmit={onPressCreateBtn}>
        <div style={{ padding: "16px" }}>
            {/*--------- 작성란-1 : 필터링-1 ---------*/}
            <CreateStep1FilterFirst />

            {/*--------- 작성란-1 : 필터링-2 ---------*/}
            <CreateStep1FilterSecond />
        </div>

        <div style={{ height: 1, backgroundColor: "#dbdbdb" }} />

        <div style={{ padding: "32px 16px 16px" }}>
            {/*--------- 작성란-2 : 사진 / 타이틀 / 상세내용 ---------*/}
            <CreateStep2Title />

            {/*--------- 작성란-3 : 기타 ---------*/}
            <CreateStep3Etc />

            {/*--------- 등록하기 버튼 ---------*/}
            <CreateBtn />
        </div>
    </form>
}

export default CreateContent


