import { createContext, useContext, useState } from "react";


const FilterContext = createContext()
export const useFilter = () => useContext(FilterContext)


const FilterProvider = ({children}) => {

    const [isOpenFilter, setIsOpenFilter] = useState(false)

    return <FilterContext.Provider value={{isOpenFilter, setIsOpenFilter}}>
        {children}
    </FilterContext.Provider>
}

export default FilterProvider




