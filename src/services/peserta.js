import { apiRequest } from "../utils/api";

export const fetchPesertaNoKartu = async (keyword) =>
    apiRequest({
        path: `/peserta/${keyword}`,
        method: "GET"
    });

export const fetchPesertaJenisKartu = async (jenis, nomor) =>
    apiRequest({
        path: `/peserta/${jenis}/${nomor}`,
        method: "GET"
    });