import axios from "axios";

class Auth {
    static login = (data) => axios.post("/auth/login", data);
}

export default Auth;