
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore/lite";
import { CustomMarker } from "../../screens/MapScreen/useMapScreen";

const experiment = "events_coll_01"
const deployment="deployment"
const firebaseConfig = {
    apiKey: "AIzaSyBbNLvx99WJM4EhXDx4i2RHajBhJkOoFBM",
    authDomain: "ocean-app-test.firebaseapp.com",
    databaseURL: "https://ocean-app-test-default-rtdb.firebaseio.com",
    projectId: "ocean-app-test",
    storageBucket: "ocean-app-test.appspot.com",
    messagingSenderId: "991737569733",
    appId: "1:991737569733:web:da5b31267ed2bf5caf2bac",
    measurementId: "G-V2FQ8ZLMWT"

};
export const retrieveData = async () => {
    const out: CustomMarker[] = [];

    try {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const citiesCol = collection(db, 'deployment');
        const data = await getDocs(citiesCol);
        data.forEach((doc) => {
            console.log(doc.data() as CustomMarker)
            const item = doc.data() as CustomMarker;
            item.id = doc.id;
            out.push(item);
        });
        console.log("Fetched the database");
        return out;
    } catch (err) {
        console.log(`Failure: ${(err as Error).message}`);
        return [];
    }
}

export const partialMatcher = async (part: string) =>{
    const out: {key: string, name: string}[] = [];

    try {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const citiesCol = collection(db, 'deployment');
        const data = await getDocs(query(citiesCol, where("event_name", ">=", part), where("event_name", "<=", part+"\uf8ff")));
        data.forEach((doc) => {
            const item = doc.data() as CustomMarker;
            out.push({key: doc.id, name: item.event_name});
        });
        console.log("Served a query");
        console.log(out)
        return out;
    } catch (err) {
        console.log(`Failure: ${(err as Error).message}`);
        return [];
    }
}