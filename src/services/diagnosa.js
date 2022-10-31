import { apiRequest } from "../utils/api";

export const fetchDiagnosa = async (keyword, start, limit) =>
    apiRequest({
        path: `/diagnosa/${keyword}/${start}/${limit}`,
        method: "GET"
    });