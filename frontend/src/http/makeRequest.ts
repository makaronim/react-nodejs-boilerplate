import axios from 'axios';
import {IResponse} from "../types/IResponse.ts";

const BASE_URL = '' //Enter API base URL

//Example how to use makeRequest
// const response: IResponse<ISignInResponse> = await makeRequest({method: methodType.POST, data: data, url: AUTH_ENDPOINTS.LOGIN});

export enum methodType {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
}

type Params<T> = {
    method: methodType;
    url: string;
    data?: T;
    headers?: Record<string, string>;
    queryParams?: Record<string, any>;
    timeout?: number; // Optional timeout
}

const makeRequest = async <TResponse, TData>(params: Params<TData>): Promise<IResponse<TResponse>> => {
    try {
        return await axios({
            baseURL: BASE_URL,
            method: params.method,
            url: params.url,
            data: params.data,
            headers: params.headers,
            params: params.queryParams,
            timeout: params.timeout || 10000, // Default timeout of 10 seconds
        });
    } catch (error: unknown) {
        // Handle the error
        if (axios.isAxiosError(error)) {
            throw error.response?.data;
        } else {
            throw error as IResponse<TResponse>;
        }
    }
};

export default makeRequest;
