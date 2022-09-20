import React, { createContext, useState} from "react";
import {collection, getFirestore, getDocs} from "firebase/firestore"

function getMatches(){
  const db = getFirestore()
  const matchesCollection = collection(db,'matches');

  return getDocs(matchesCollection)
}
const MatchesContext = createContext({
  matchesList: []
});

export const MatchesContextProvider = ({children}) => {
  const [matches, setMatches] = useState([])

  getMatches()
    .then(snapshot => {
      setMatches(snapshot.docs.map(d=>{
        return d.data()
      }))
    })
  
  return (
    <MatchesContext.Provider value={
      {matchesList : matches}
    }>
      {children}
    </MatchesContext.Provider>
  )
}
export const MatchContext = MatchesContext;