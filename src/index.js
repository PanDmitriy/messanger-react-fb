import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCOxls92_urhSUof-MtUow95Ac7LQpSobE",
  authDomain: "pochiri-chat.firebaseapp.com",
  projectId: "pochiri-chat",
  storageBucket: "pochiri-chat.appspot.com",
  messagingSenderId: "703226145127",
  appId: "1:703226145127:web:278072c501195b389da7c2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore()

export const PropsContext = createContext(null)

// Render App
ReactDOM.render(
  <PropsContext.Provider value={{
    firebase,
    auth,
    firestore,
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PropsContext.Provider>,
  document.getElementById('root')
);
