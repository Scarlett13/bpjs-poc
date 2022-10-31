import { apiRequest } from "../utils/api";

export const fetchKesadaran = async () =>
    apiRequest({
        path: `/kesadaran`,
        method: "GET"
    });