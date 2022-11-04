import { collection, getDocs, getFirestore, orderBy, query, limit } from 'firebase/firestore';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { colors } from './colors';

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
  const matchesCollection = query(collection(db, "matches"), orderBy("date", "desc"));

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

export const swalFire = (props) => {
  Swal.fire({
    title: `${props.name}`,
    html: `
          <p>Partidos: ${props.matches}</p>
          <p>Goles: ${props.goals}</p>
          <p>Incorporación: ${props.inc}</p>
          `,
    confirmButtonText: `Ver estadisticas completas`,
    color: `${colors.hbrown}`,
    background: `${colors.white}`,
    confirmButtonColor: `${colors.lbrown}`
  })
    .then((result) => {
      if (result.isConfirmed) {
        window.location.href = `/players/${props.number}`
      }
    })
}