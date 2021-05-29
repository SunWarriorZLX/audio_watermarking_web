import axios from "axios";
import global from './globle/globleApi';
import {showFullScreenLoading, tryHideScreenLoading} from "@/loading";

axios.defaults.timeout = 5000;//超时终止请求
axios.defaults.baseURL = global.baseURL;//配置请求地址

import router from '../router/index'
import {extractDateFormat, use} from "element-ui";

//http request 拦截器
axios.interceptors.request.use(
    config => {
        config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type': 'application/json;charset=UTF-8'
        }
        var token = getCookie("token")
        if (token) {
            config.headers.token = token
        }
        showFullScreenLoading()
        return config;
    },
    error => {
        return Promise.reject(error)
    }
);

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then()
    })
}