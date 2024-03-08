import axios from "axios";
const httpCommon = axios.create({
    baseURL: "http://localhost:8000/api/v1/",
    headers: {
      "x-api-key": "",
      "content-type": "application/json",
    },
    
  });
  
  export default httpCommon;