import { ref } from "vue";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const user = ref(auth.currentUser);

onAuthStateChanged(auth, (_user) => {
    user.value = _user;
    console.log("user changed", _user);
})

const getUser = () => {
    return {user}

}


export default getUser;