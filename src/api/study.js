import http from './http';

export default {
    // 班级
    // 考试班级
    exam_class: opts => {
        const url = '/user/classes/exam_class';
        const data = {};
        return http.get(url, data);
    },
    // 课程
    // 培训课程类别列表及子菜单
    category_list: opts => {
        const url = '/user/course/category_list';
        const data = {};
        return http.get(url, data);
    },
    // 课程章节列表
    chapter_list: opts => {
        const url = '/user/course/chapter_list';
        const data = {
            course_id: opts.course_id || '',
            pid: opts.pid || '',
            scene_type: opts.scene_type || '',
            page: opts.page || '',
            page_size: opts.page_size || '',
            status: opts.status || ''
        };
        return http.get(url, data);
    },
    // 练习
    // 我的练习课程类别
    course_type: opts => {
        const url = '/user/practice/index';
        const data = {};
        return http.get(url, data);
    },
    // 我的练习记录
    practice_record: opts => {
        const url = '/user/practice/practice_record';
        const data = {
            practice_category_id: opts.practice_category_id || '0',
            course_category_id: opts.course_category_id || '',
            course_id: opts.course_id || '',
            page: opts.page || '1',
            page_size: opts.page_size || 10
        };
        return http.get(url, data);
    },
    // 个人中心
    // 修改个人信息
    modify_person_info: opts => {
        const url = '/user/user/modify_person_info';
        const data = {
            header: opts.header || '',
            truename: opts.truename || '',
            company: opts.company || '',
            duty: opts.duty || '',
            tel: opts.tel || '',
            email: opts.email || '',
            email_bak: opts.email_bak || '',
            id: opts.id || '0',
            gender: opts.gender || '0',
            post_code: opts.post_code || '',
            department: opts.department || '',
            province: opts.province || '',
            city: opts.city || '',
            area: opts.area || '',
            address: opts.address || '',
            user_classes_id: opts.user_classes_id || '',
            type: opts.type || '',
            is_default: opts.is_default || ''
        };
        return http.post(url, data);
    },
    // 修改手机号发送验证码
    modify_mobile_sms: opts => {
        const url = '/user/register/modify_mobile_sms';
        const data = {
            mobile: opts.mobile || ''
        };
        return http.post(url, data);
    },
    // 修改邮箱发送验证码
    modify_email_code: opts => {
        const url = '/user/user/modify_email_code';
        const data = {
            email: opts.email || ''
        };
        return http.post(url, data);
    },
    // 修改手机号
    modify_mobile: opts => {
        const url = '/user/user/modify_mobile';
        const data = {
            mobile: opts.mobile || '',
            mobile_code: opts.mobile_code || '',
            password: opts.password || ''
        };
        return http.post(url, data);
    },
    // 修改邮箱
    modify_email: opts => {
        const url = '/user/user/modify_email';
        const data = {
            email: opts.email || '',
            email_code: opts.email_code || '',
            password: opts.password || ''
        };
        return http.post(url, data);
    },
    // 重新发送激活邮件
    active_email: opts => {
        const url = '/user/user/active_email';
        const data = {};
        return http.get(url, data);
    },
    // 修改密码发送验证码
    modify_pass_sms: opts => {
        const url = '/user/user/modify_pass_sms';
        const data = {};
        return http.get(url, data);
    },
    // 修改密码
    reset_password: opts => {
        const url = '/user/user/reset_password';
        const data = {
            mobile_code: opts.mobile_code || '',
            old_password: opts.old_password || '',
            new_password: opts.new_password || '',
            new_password2: opts.new_password2 || ''
        };
        return http.post(url, data);
    },
    // 获取用户详情信息
    get_person_info: opts => {
        const url = '/user/user/get_person_info';
        const data = {
            is_default: opts.is_default || '0',
            user_detail_id: opts.user_detail_id || ''
        };
        return http.get(url, data);
    },
    // 获取pmp证书信息
    get_pmp_certificate: opts => {
        const url = '/user/user/get_pmp_certificate';
        const data = {};
        return http.get(url, data);
    },
    // 修改pmp证书信息
    save_pmp_certificate: opts => {
        const url = '/user/user/save_pmp_certificate';
        const data = {
            pmp_cert_number: opts.pmp_cert_number || '',
            end_time: opts.end_time || '',
            pmi_id: opts.pmi_id || '',
            pmi_username: opts.pmi_username || '',
            pmi_password: opts.pmi_password || '',
            id: opts.id || ''
        };
        return http.post(url, data);
    },
    // 获取npdp证书信息
    get_npdp_certificate: opts => {
        const url = '/user/user/get_npdp_certificate';
        const data = {};
        return http.get(url, data);
    },
    // 修改npdp证书信息
    save_npdp_certificate: opts => {
        const url = '/user/user/save_npdp_certificate';
        const data = {
            npdp_cert_number: opts.npdp_cert_number || '',
            end_time: opts.end_time || '',
            npdp_username: opts.npdp_username || '',
            npdp_password: opts.npdp_password || '',
            id: opts.id || ''
        };
        return http.post(url, data);
    },
    // 我的考试班级-》查看申请信息
    // 获取用户详情信息
    get_apply_info: opts => {
        const url = '/user/classes/get_apply_info';
        const data = {
            user_class_relation_id: opts.id || ''
        };
        return http.get(url, data);
    },
    // 订单
    // 订单列表
    order: opts => {
        const url = '/user/order';
        const data = {};
        return http.get(url, data);
    },
    // 支付缴费
    alipay: opts => {
        const url = '/user/pay/alipay';
        const data = {
            order_id: opts.order_id || ''
        };
        return http.get(url, data);
    },
    // 订单删除
    detele_order: opts => {
        const url = '/user/order/del';
        const data = {
            id: opts.id || ''
        };
        return http.post(url, data);
    },
    // 账号信息
    account_info: opts => {
        const url = '/user/user/account_info';
        const data = {};
        return http.get(url, data);
    },
    // 我的学习资料
    learning_materials: opts => {
        const url = '/user/learning_materials/category_list';
        const data = {};
        return http.get(url, data);
    },
    // 学习资料列表
    materials_list: opts => {
        const url = '/user/learning_materials/download_list';
        const data = {
            course_category_id: opts.course_category_id || '',
            page: opts.page || '',
            page_size: opts.page_size || 10
        };
        return http.get(url, data);
    }
};
