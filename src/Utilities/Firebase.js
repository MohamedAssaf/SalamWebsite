import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import swal from "sweetalert";
import { getLanguageError } from "../Utilities/Helpers";

// let firebaseConfig = {
//   apiKey: "AIzaSyAlmJoTiSW7W_s6BDy5Z-MakNTdovzAp9s",
//   authDomain: "salam-c648a.firebaseapp.com",
//   databaseURL:
//     "https://salam-c648a-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "salam-c648a",
//   storageBucket: "salam-c648a.appspot.com",
//   messagingSenderId: "900048046978",
//   appId: "1:900048046978:web:91e0de493e1ee0ffce1d9b",
//   measurementId: "G-N75S8H51C5",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCkyxPPiKIZasyePwUlrKMZr4q4eyUkwRY",
  authDomain: "salam-staging.firebaseapp.com",
  projectId: "salam-staging",
  storageBucket: "salam-staging.appspot.com",
  messagingSenderId: "836740903007",
  appId: "1:836740903007:web:ef4ee12156439bca7aabea",
  measurementId: "G-B3XPTN5RW4"
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
                if (form.type == 0) {
                  const codeRef = db.collection("codes").doc(form.codeId);
                  codeRef
                    .update({ used: true })
                    .then((res) => {
                      console.log(res);
                      console.log("Updated code successfully");
                      window.location = "/home?signedUp=true";
                    })
                    .catch((e) => {
                      console.log("error", e.message);
                    });
                }
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

export const getCode = async (code) => {
  let codesRef = await db
    .collection("codes")
    .where("code", "==", code)
    .limit(1);
  codesRef = await codesRef.get();
  if (codesRef.docs?.length >= 1) {
    let data = {};
    codesRef.forEach((doc) => {
      data = doc.data();
      data.id = doc.id;
    });
    return data;
  } else {
    return false;
  }
};
