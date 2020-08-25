
import firebase from "firebase"

const Config = {
  apiKey: "AIzaSyAntC2fRqABYEjaTtu4pEPKiMm2zkAQWdc",
  authDomain: "proje-f1d38.firebaseapp.com",
  databaseURL: "https://proje-f1d38.firebaseio.com",
  projectId: "proje-f1d38",
  storageBucket: "proje-f1d38.appspot.com",
  messagingSenderId: "394682829083",
  appId: "1:394682829083:web:5b41442f427299a2e2ebbe"
};

 const fire =  firebase.initializeApp(Config);
 export const provider = new firebase.auth.FacebookAuthProvider()
 provider.setCustomParameters({
  'display': 'popup'
});

  export default fire