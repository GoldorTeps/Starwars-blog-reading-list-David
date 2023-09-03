import { apiCall } from "../utils/apiCall";

export const getResources = async (resource) => apiCall(`https://www.swapi.tech/api/${resource}`);
