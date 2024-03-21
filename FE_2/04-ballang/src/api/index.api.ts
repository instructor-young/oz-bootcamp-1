import axios from "axios";
import productsAPI from "./products/products.api";

const BASE_URL =
  "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app";

export const instance = axios.create({ baseURL: BASE_URL });

const API = {
  products: productsAPI,
};

export default API;
