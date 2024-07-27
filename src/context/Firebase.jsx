import { createContext, useContext } from 'react'
import {firebaseConfig} from '../config/Firebase'
import { initializeApp } from "firebase/app";

const FirebaseContext = createContext(null);

export const useFirebase = (FirebaseContext)=>useContext(FirebaseContext);

export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseProvider = (props)=>{
    return (
        <FirebaseContext.Provider>
            {props.children}
        </FirebaseContext.Provider>
    )
}