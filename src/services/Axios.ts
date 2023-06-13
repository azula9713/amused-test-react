import axios from "axios";

const Server = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1",
});

export default Server;
