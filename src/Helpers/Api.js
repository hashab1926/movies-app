import axios from 'axios';
import qs from 'querystring';
class Api {
    #API_URL = 'https://api.themoviedb.org/3';
    #API_KEY = '94330fa0367db32c4c538532f820360d';

    constructor() {
        this.headers = {};
        this.data = {};
        this.withCredentials = false;
        this.config = {};
    }

    setHeader(config, value) {
        if (typeof config === 'object')
            Object.assign(this.headers, config);
        else {
            const newHeader = { [config]: value };
            Object.assign(this.headers, newHeader);
        }

        return this;
    }

    setPayload(data) {
        this.data = data;
        return this;
    }

    setCredentials(bool) {
        this.withCredentials = bool;
        return this;
    }

    async get(endpoint, objQueryString = {}) {
        try {
            objQueryString = {
                ...objQueryString,
                api_key: this.#API_KEY
            };

            objQueryString = qs.stringify(objQueryString);
            this.config = {
                crossDomain: true,
                method: 'get',
                url: `${this.#API_URL}/${endpoint}?${objQueryString}`,

            };

            if (this.withCredentials)
                Object.assign(this.config, true);

            // request api
            const response = await axios(this.config);

            //check respose
            if (response.status !== 200)
                throw response.statusText ?? "Sedang terjadi masalah silahkan coba beberapa saat lagi";

            // return data
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    async post(endpoint, payload = null) {
        try {
            this.config = {
                method: 'post',
                url: `${this.#API_URL}/${endpoint}`,
                headers: this.headers,
                withCredentials: true,
                data: qs.stringify(payload ?? this.data)
            };

            // request api 
            const response = await axios(this.config);

            //check respose
            if (response.data.status !== 200)
                throw response.data.message;

            // if success
            return response.data;
        } catch (error) {
            throw error
        }

    }


}
export default (new Api());