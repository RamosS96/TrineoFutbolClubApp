import { createContext, useState } from "react";

const DateContext = createContext({
  matchDate : [],
  newsDate : []
})

export const DateContextProvider = ({children}) => {
  const [matchDateSelected, setMatchDateSelected] = useState([])
  const [newsDateSelected, setNewsDateSelected] = useState([])
  
  return (
    <DateContext.provider value={
      {
        matchDate : matchDateSelected,
        newsDate : newsDateSelected,
        setMatchDateSelected,
        setNewsDateSelected
      }
    }>
      {children}
      </DateContext.provider>
  )
} 

export default DateContext;