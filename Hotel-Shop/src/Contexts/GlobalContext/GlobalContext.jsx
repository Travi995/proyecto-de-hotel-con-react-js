import React, { createContext,useState } from "react";


export const GlobalContext = createContext({
    viewportLayout: 0,
    setViewportLayout: () => {},
    
})

export const GlobalContextProvider = ({ children }) => {

    const [viewportLayout , setViewportLayout] = useState(1)

    return <GlobalContext.Provider value={{viewportLayout ,setViewportLayout}}>
        
        {children}
   
    </GlobalContext.Provider>
}