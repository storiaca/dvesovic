import axios from "axios";

class Tags {
  static getAll = () => axios.get("/tags");
}

export default Tags;
