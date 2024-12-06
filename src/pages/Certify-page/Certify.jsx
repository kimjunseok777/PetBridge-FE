import { useState } from "react"
import SignIn from "./sign-in"
import TopBar from "../../components/TopBar"
import SignUp from "./sign-up"



const CertifyPage = () => {

    const [formState, setFormState] = useState('SIGN-IN')

    return <>
        {formState === 'SIGN-IN' ? <SignIn setFormState={setFormState}/> : <SignUp/>}
    </>
}

export default CertifyPage





