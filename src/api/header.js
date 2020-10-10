import http from './http';

export default {
    nav: opts => {
        const url = '/user/nav/index';
        const data = {};
        return http.get(url, data);
    },
    banner: opts => {
        const url = '/user/nav/banner';
        const data = {};
        return http.get(url, data);
    }
};
