import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDgzy6s-evCP1mjc05uHALX763qx8NoMUs",
  authDomain: "https://chat-app-lac-ten.vercel.app/",
  projectId: "chat-app-b6fe6",
  storageBucket: "chat-app-b6fe6.appspot.com",
  messagingSenderId: "528225517704",
  appId: "1:528225517704:web:eb1ac7b6039142de5b5f3d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
