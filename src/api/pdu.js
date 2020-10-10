import http from './http';

export default {
    // 续证申请列表
    apply_list: opts => {
        const url = '/user/pmp_pdu/apply_list';
        const data = {};
        return http.get(url, data);
    },
    // 获取学时信息
    getClassHour: opts => {
        const url = '/user/pmp_pdu/get_class_hour';
        const data = {};
        return http.get(url, data);
    },
    // 获取个人信息
    getPersonInfo: opts => {
        const url = '/user/pmp_pdu/get_person_info';
        const data = {
            user_detail_id: opts.user_detail_id || '',
            apply_id: opts.apply_id || ''
        };
        return http.get(url, data);
    },
    // 获取PMP证书信息
    getPMPCertificate: opts => {
        const url = '/user/user/get_pmp_certificate';
        const data = {};
        return http.get(url, data);
    },
    // 提交个人资料
    savePersonInfo: opts => {
        const url = '/user/pmp_pdu/save_person_info';
        const data = {
            id: opts.id || '',
            truename: opts.username || '',
            company: opts.company || '',
            duty: opts.duty || '',
            tel: opts.tel || '',
            mobile: opts.mobile || '',
            email: opts.email1 || '',
            email_bak: opts.email2 || '',
            gender: opts.sex || '',
            post_code: opts.postcode || '',
            department: opts.department || '',
            province: opts.province || '',
            city: opts.city || '',
            area: opts.area || '',
            address: opts.address || '',
            class_hour_id: opts.period_id || '',
            renew_free_type: opts.payment_id || '',
            apply_id: opts.pmp_id || '',
            pmp_cert_number: opts.pmp_cert_number || '',
            end_time: opts.end_time / 1000 || '',
            pmi_id: opts.pmi_id || '',
            pmi_username: opts.pmi_username || '',
            pmi_password: opts.pmi_password || ''
        };
        return http.post(url, data);
    },
    // 提交PMP证书信息
    savePMPCertificate: opts => {
        const url = '/user/user/save_pmp_certificate';
        const data = {
            id: opts.pmp_id || '',
            pmp_cert_number: opts.pmp_cert_number || '',
            end_time: opts.end_time / 1000 || '',
            pmi_id: opts.pmi_id || '',
            pmi_username: opts.pmi_username || '',
            pmi_password: opts.pmi_password || ''
        };
        return http.post(url, data);
    },
    // 支付成功验证
    checkPayment: opts => {
        const url = '/user/order/info';
        const data = {
            order_id: opts.order_id || ''
        };
        return http.get(url, data);
    },
    // 增加学时
    addClassHour: opts => {
        const url = '/user/pmp_pdu/add_class_hour';
        const data = {
            class_hour_id: opts.class_hour_id || '',
            pmp_pdu_apply_id: opts.pmp_pdu_apply_id || '',
            renew_free_type: opts.renew_free_type || ''
        };
        return http.post(url, data);
    },
    // /api/user/order/check_pdu_order_status
    checkPduOrderStatus: opts => {
        const url = '/user/order/check_pdu_order_status';
        const data = {
            pmp_pdu_apply_id: opts.pmp_pdu_apply_id || ''
        };
        return http.get(url, data);
    },
    checkPduApplyStatus: opts => {
        const url = '/user/pmp_pdu/check_pdu_apply_status';
        const data = {
            pmp_pdu_apply_id: opts.pmp_pdu_apply_id || ''
        };
        return http.post(url, data);
    }
};
