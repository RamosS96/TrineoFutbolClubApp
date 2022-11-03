import { collection, getDocs, getFirestore, orderBy, query, limit } from 'firebase/firestore';

export const getNews = () => {
  const db = getFirestore();
  const newsCollection = query(collection(db, "news"), orderBy("date", "desc"), limit(5));

  return getDocs(newsCollection);
}

export const getResults = () => {
  const db = getFirestore();
  const resultsCollection = query(collection(db, "results"), orderBy("date", "desc"), limit(4));

  return getDocs(resultsCollection);
}

export const getDateStamp = (mili) => {
  const miliseconds = mili * 1000;
  const dateObj = new Date(miliseconds);
  return dateObj.toLocaleString()
}

export const getResume = (cont) => {
  if (cont.length > 85) {
    const newCont = cont.splice(0, 80)
    newCont.push("(...)")
    return newCont
  } else {
    return cont
  }
}

export const getMatches = () => {
  const db = getFirestore()
  const matchesCollection = query(collection(db, "matches"), orderBy("date","desc"));

  return getDocs(matchesCollection)
}

export const getPlayers = () => {
  const db = getFirestore();
  const playersCollection = collection(db, 'players');
  return getDocs(playersCollection);
}

export const getNewsComplete = () => {
  const db = getFirestore();
  const newsCollection = collection(db, "news");
  return getDocs(newsCollection)
}