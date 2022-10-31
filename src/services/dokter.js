import { apiRequest } from "../utils/api";

export const fetchDokter = async (start, limit) =>
    apiRequest({
        path: `/dokter/${start}/${limit}`,
        method: "GET"
    });