import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Function to retrieve all items for a specific user from Firestore
async function getItems(userId) {
    const items = [];
    const q = query(collection(db, `users/${userId}/items`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, data: doc.data() });
    });
    return items;
}

// Function to add a new item to a specific user's list of items in Firestore
async function addItem(userId, item) {
    try {
        const docRef = await addDoc(collection(db, `users/${userId}/items`), item);
        return docRef.id;
    } catch (error) {
        console.error("Error adding document: ", error);
        throw new Error("Failed to add item.");
    }
}

export { getItems, addItem };
