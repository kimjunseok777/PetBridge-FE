import { useNavigate } from "react-router-dom"
import CreateBtn from "./components/create-btn"
import CreateStep1Filter from "./components/create-step1-filter"
import CreateStep2Title from "./components/create-step2-title"
import CreateStep3Etc from "./components/create-step3-etc"



const CreateContent = () => {

    const navigate = useNavigate()

    // 등록하기 버튼 :
    const onPressCreateBtn = () => {
        alert("분양글 생성 완료")
        return navigate()
    }

    return <form onSubmit={onPressCreateBtn}>

        {/*--------- 작성란-1 : 필터링 ---------*/}
        <CreateStep1Filter />

        {/*--------- 작성란-2 : 사진 / 타이틀 / 상세내용 ---------*/}
        <CreateStep2Title />

        {/*--------- 작성란-3 : 기타 ---------*/}
        <CreateStep3Etc />

        {/*--------- 등록하기 버튼 ---------*/}
        <CreateBtn />

    </form>
}

export default CreateContent


