import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import swal from "sweetalert";
import { getLanguageError } from "../Utilities/Helpers";

let firebaseConfig = {
  apiKey: "AIzaSyAlmJoTiSW7W_s6BDy5Z-MakNTdovzAp9s",
  authDomain: "salam-c648a.firebaseapp.com",
  databaseURL:
    "https://salam-c648a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "salam-c648a",
  storageBucket: "salam-c648a.appspot.com",
  messagingSenderId: "900048046978",
  appId: "1:900048046978:web:91e0de493e1ee0ffce1d9b",
  measurementId: "G-N75S8H51C5",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

export const signUp = async (lang, form, files = []) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(form.email, form.password)
    .then((userCredential) => {
      let user = userCredential.user;
      delete form.password;
      if (files.length > 0) {
        let promisesArray = [];
        files?.forEach((file) => {
          if (file.path) {
            var storageRef = storage.ref(file.path + file.name);
            promisesArray.push(storageRef.put(file.file));
          } else {
            let storageRef = storage.ref("images/" + file.name);
            promisesArray.push(storageRef.put(file.file));
          }
        });
        Promise.all(promisesArray).then((results) => {
          let urlsPromisesArray = [];
          results.forEach((result) => {
            urlsPromisesArray.push(result.ref.getDownloadURL());
          });
          Promise.all(urlsPromisesArray).then((downloadUrls) => {
            downloadUrls.forEach((url, i) => {
              form[files[i].id] = { url };
            });
            db.collection("users")
              .doc(user.uid)
              .set(form, { merge: true })
              .then(() => {
                console.log("Document successfully written!");
                window.location = "/home?signedUp=true";
              })
              .catch((error) => {
                let errorMessage =
                  lang == "ar"
                    ? getLanguageError(lang, error.code)
                    : error.message;
                console.log(error);
                swal(errorMessage, "", "error");
                console.error("Error writing document: ", error);
              });
          });
        });
      } else {
        db.collection("users")
          .doc(user.uid)
          .set(form, { merge: true })
          .then(() => {
            console.log("Document successfully written!");
            window.location = "/home?signedUp=true";
          })
          .catch((error) => {
            let errorMessage =
              lang == "ar" ? getLanguageError(lang, error.code) : error.message;
            console.log(error);
            swal(errorMessage, "", "error");
            console.error("Error writing document: ", error);
          });
      }
    })
    .catch((error) => {
      let errorMessage =
        lang == "ar" ? getLanguageError(lang, error.code) : error.message;
      // ..
      console.log(error);

      swal(errorMessage, "", "error");
    });
};
