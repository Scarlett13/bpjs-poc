import axios from "axios";

const env = process.env.REACT_APP_ENV;
const cfid = process.env.REACT_APP_CFID;
const cskey = process.env.REACT_APP_CSKEY;

export const apiRequest = async ({
    url,
    method,
    timeout,
    headers,
    bodyRequest,
    params,
    path,
}) => {
    const baseUrl = url ? `${url}` : `https://api.ctscope.io/bpjs`;
    const defaultParams = {
        // api_key: "96f786f739c28a69bac8053eab9e0ada",
    };
    const mergedParams = { ...defaultParams, ...params };

    const config = {
        method,
        url: baseUrl + path,
        params: mergedParams,
        headers: {
            cfid: cfid,
            cskey: cskey,
            env: env
        },
    };

    if (headers) {
        config.headers = { ...config.headers, ...headers };
    }

    if (bodyRequest) {
        config.data = bodyRequest;
    }

    if (timeout) {
        config.timeout = timeout;
    }

    return axios(config)
        .then((res) => res)
        .catch((err) => {
            console.info("[ERROR] Api Request: ", err);
            throw err;
        });
};