import { getFirestore } from "firebase/firestore";
import firebaseApp from "@/fireBase/firebaseConfig";

const db = getFirestore(firebaseApp);
export default db;
