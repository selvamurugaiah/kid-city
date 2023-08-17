import axios from "axios";

const URL = "https://kid-city.onrender.com";

// const URL = "http://localhost:8000";

export default axios.create({
  baseURL: URL,
});

