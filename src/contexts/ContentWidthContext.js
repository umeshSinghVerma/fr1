'use client'

import { createContext, useState } from "react";

export const ContentWidthContext = createContext();

export const ContentWidthContextProvider=({children})=> {
    const [contentWidth,setContentWidth]=useState(null);
  return (
    <ContentWidthContext.Provider value={{contentWidth,setContentWidth}} >
        {children}
    </ContentWidthContext.Provider>
  )
}
