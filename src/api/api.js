import axios from "axios";

export const CatalogApi = axios.create({
    baseURL: "https://628e1fc9a339dfef87a80623.mockapi.io/shoes-catalog",
});
