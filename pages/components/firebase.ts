import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyBngHtT6Gbg4p_wY36Xn1vobfOi7ux7MIg",
  authDomain: "ecoaching-ma.firebaseapp.com",
  projectId: "ecoaching-ma",
  storageBucket: "ecoaching-ma.appspot.com",
  messagingSenderId: "735548888033",
  appId: "1:735548888033:web:6af0fbfa3965c02ebaf8a0",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
