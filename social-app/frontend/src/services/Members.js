import axios from "axios";

class Members {
  static getMembers = () => axios.get("/member");
}

export default Members;
