import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyDAllVDfv90tKwfUrtDMot9XZUY8Ee1MeQ",
  authDomain: "coni-gym-tracker.firebaseapp.com",
  projectId: "coni-gym-tracker",
  storageBucket: "coni-gym-tracker.firebasestorage.app",
  messagingSenderId: "165711638021",
  appId: "1:165711638021:web:2bf459a3df1413c8a7b66c"
};

const app = initializeApp(firebaseConfig);

// Offline-first: writes go to IndexedDB immediately and sync when back online.
// This prevents "Failed to save" errors on slow/restricted gym WiFi.
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});
