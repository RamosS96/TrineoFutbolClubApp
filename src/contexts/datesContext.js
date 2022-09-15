import React, { createContext, useState } from "react";

const DatesContext = createContext({
  dateList: [],
  addProductCart: () => { }
  
});

export const DateContextProvider = ({ children }) => {
  const [date, setDate] = useState([]);

  const addDayList = (product) => {
    setDate([product]) 
  };



  return (
    <DatesContext.Provider value={
      { dateList: date,
      addDayList,
    }
    }>
      {children}
    </DatesContext.Provider>
  )
}

export default DatesContext;