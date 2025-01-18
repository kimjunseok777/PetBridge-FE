import { createContext, useContext, useState } from "react";


const PopUpContext = createContext()
export const usePopUp = () => useContext(PopUpContext)


const PopUpProvider = ({children}) => {

    const [isOpenPopUp, setIsOpenPopUp] = useState(null)

    return <PopUpContext.Provider value={{isOpenPopUp, setIsOpenPopUp}}>
        {children}
    </PopUpContext.Provider>
}

export default PopUpProvider




