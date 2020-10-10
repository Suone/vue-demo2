import http from './http';

export default {
    // 登录
    login: opts => {
        const url = '/user/login/login_check';
        const data = {
            username: opts.username || '',
            password: opts.password || '',
            code: opts.code || ''
        };
        return http.post(url, data);
    },
    // 注册
    register: opts => {
        const url = '/user/register/save';
        const data = {
            password: opts.password || '',
            password2: opts.password2 || '',
            truename: opts.truename || '',
            mobile: opts.mobile || '',
            email: opts.email || '',
            mobile_code: opts.mobile_code || ''
        };
        return http.post(url, data);
    },
    // 注册发送验证码
    mobileCode: opts => {
        const url = '/user/register/regist_sms';
        const params = {
            mobile: opts.mobile || ''
        };
        return http.post(url, params);
    },
    // 忘记密码发送验证码
    reset_sms: opts => {
        const url = '/user/register/reset_sms';
        const params = {
            mobile: opts.mobile || ''
        };
        return http.post(url, params);
    },
    // 通过手机重置密码
    resetByMobile: opts => {
        const url = '/user/login/reset_by_mobile';
        const params = {
            mobile: opts.mobile || '',
            img_code: opts.img_code || '',
            mobile_code: opts.mobile_code || '',
            password: opts.password || '',
            password2: opts.password2 || ''
        };
        return http.post(url, params);
    },
    // 通过邮箱找回密码
    findByEmail: opts => {
        const url = '/user/login/forget_password';
        const params = {
            email: opts.email || '',
            code: opts.code || ''
        };
        return http.post(url, params);
    },
    // 忘记密码通过邮箱重置密码
    forgetReset: opts => {
        const url = '/user/login/forget_reset';
        const params = {
            email: opts.email || '',
            token: opts.token || '',
            password: opts.password || '',
            password2: opts.password2 || '',
            code: opts.code || ''
        };
        return http.post(url, params);
    }
};
