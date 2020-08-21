import { Endpoint } from "./types/config";

const API_UR : string = 'https://api.github.com/search/';

export const getApiUrl = (endpoint : Endpoint) : string => (
    `${API_UR}${endpoint}`
);

