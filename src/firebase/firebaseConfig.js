import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_API_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const getPiosenki = async (id) => {
	try {
		const piosenkiCollection = collection(db, 'piosenki');
		const docSnapshot = await getDocs(piosenkiCollection);
		return docSnapshot.docs.map(doc => ({
			id: doc.id,...doc.data(),
		}));
	} catch (error) {
		console.error('getPiosenki', error);
	}
};

export const getPiosenkiByLetter = async (letter) => {
	try {
		const piosenkiCollection = doc(db, 'piosenki', letter);
		const docSnapshot = await getDoc(piosenkiCollection);
		if (docSnapshot.exists()) {
			return {
				letter: docSnapshot.letter, ...docSnapshot.data(),
			};
		}
	} catch (error) {
		console.error('getPiosenkiByLetter', error);
	}
};

export const getPiosenkiById = async (id) => {
	try {
		const piosenkiCollection = doc(db, 'piosenki', id);
		const docSnapshot = await getDoc(piosenkiCollection);
		if (docSnapshot.exists()) {
			return {
				id: docSnapshot.id, ...docSnapshot.data(),
			};
		}
	} catch (error) {
		console.error('getPiosenkiById', error);
	}
};