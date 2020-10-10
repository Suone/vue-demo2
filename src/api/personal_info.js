import http from './http';

export default {
    modify_person_info: opts => {
        const url = '/user/classes/modify_person_info';
        const data = {
            truename: opts.truename || '',
            company: opts.company || '',
            duty: opts.duty || '',
            tel: opts.tel || '',
            email: opts.email || '',
            email_bak: opts.email_bak || '',
            id: opts.id || '',
            gender: opts.gender || '0',
            post_code: opts.post_code || '',
            department: opts.department || '',
            province: opts.province || '',
            city: opts.city || '',
            area: opts.area || '',
            address: opts.address || '',
            user_classes_id: opts.user_classes_id || '',
            classes_id: opts.classes_id || '',
            type: opts.type || ''
        };
        return http.post(url, data);
    },
    // 获取用户详情信息 加入班级
    get_class_person_info: opts => {
        const url = '/user/classes/get_person_info';
        const data = {
            user_detail_id: opts.user_detail_id || '',
            user_classes_id: opts.user_classes_id || '',
            classes_id: opts.classes_id || ''
        };
        return http.get(url, data);
    },
    // 网课获取个人信息
    // modify_online_person_info: opts => {
    //     const url = '/user/order/modify_person_info';
    //     const data = {
    //         truename: opts.truename || '',
    //         company: opts.company || '',
    //         duty: opts.duty || '',
    //         tel: opts.tel || '',
    //         email: opts.email || '',
    //         email_bak: opts.email_bak || '',
    //         id: opts.id || '',
    //         gender: opts.gender || '0',
    //         post_code: opts.post_code || '',
    //         department: opts.department || '',
    //         province: opts.province || '',
    //         city: opts.city || '',
    //         area: opts.area || '',
    //         address: opts.address || '',
    //         user_classes_id: opts.user_classes_id || '',
    //         type: opts.type || ''
    //     };
    //     return http.post(url, data);
    // },
    // 获取用户详情信息 网课
    // get_online_person_info: opts => {
    //     const url = '/user/order/get_person_info';
    //     const data = {
    //         user_detail_id: opts.user_detail_id || ''
    //     };
    //     return http.get(url, data);
    // },
    // 获取阿里云oss参数副本
    fetchUpUrl: opts => {
        const url = '/user/utils/aliyun_conf';
        const data = {
            dir: opts.dir || '',
            type: opts.type || ''
        };
        return http.get(url, data);
    },
    // 订单信息
    order_info: opts => {
        const url = '/user/order/info';
        const data = {
            order_id: opts.order_id || ''
        };
        return http.get(url, data);
    }
};
