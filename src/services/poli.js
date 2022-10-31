import { apiRequest } from "../utils/api";

export const fetchPoli = async (start, limit) =>
    apiRequest({
        path: `/poli/fktp/${start}/${limit}`,
        method: "GET"
    });