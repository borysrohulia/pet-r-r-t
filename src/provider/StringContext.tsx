import { createContext, useContext } from 'react'

export const StringContext = createContext<string>('')
export const useString = () => useContext(StringContext)