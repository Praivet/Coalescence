import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDj4jA2Tm0aTkUbMwCNxqUPh169rUkRpoE',
    authDomain: 'coalescence-82f9c.firebaseapp.com',
    projectId: 'coalescence-82f9c',
    storageBucket: 'coalescence-82f9c.firebasestorage.app',
    messagingSenderId: '882644592722',
    appId: '1:882644592722:web:20e94050dba74236c7978b',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);