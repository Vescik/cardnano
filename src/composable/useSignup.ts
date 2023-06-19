import { ref } from "vue";
import { auth } from "../db/settings.js";
import  {createUserWithEmailAndPassword } from "firebase/auth";

const error= ref("");

const signup = async (email:string,password:string) => {
    error.value = "";
    
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const res = userCredential.user;
        error.value = "";
        return res;
    } catch (err:unknown) {
        console.log(err.message);
        error.value = "Incorrect login credentials";
    }
    }

const useSignup = () => {
    return { error, signup };
}

export default useSignup;
