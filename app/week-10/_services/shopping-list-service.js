import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function addItem(userId, item) {
    try {
        const itemsCollectionRef = collection(db, "users", userId, "items");
        const docRef = await addDoc(itemsCollectionRef, item);
        return docRef.id;
    } catch (error) {
        console.error("Error adding item: ", error);
        throw error;
    }
}

export async function getItems(userId) {
    try {
        const itemsCollectionRef = collection(db, "users", userId, "items");
        const itemsQuery = query(itemsCollectionRef);
        const querySnapshot = await getDocs(itemsQuery);
        const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return items;
    } catch (error) {
        console.error("Error getting items: ", error);
        throw error;
    }
}