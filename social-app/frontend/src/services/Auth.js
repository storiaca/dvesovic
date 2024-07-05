import axios from "axios";

class Auth {
  static login = (data) => axios.post("/auth/login", data);
  static register = (data) => axios.post("/auth/register", data);
}

export default Auth;
