import http from './http';

export default {
    // 选择班级
    // 班级列表
    class_list: opts => {
        const url = '/user/classes/class_list';
        const data = {
            course_category_id: opts.course_category_id
        };
        return http.get(url, data);
    },
    // 选择班级
    select_class: opts => {
        const url = '/user/classes/select_class';
        const data = {
            classes_id: opts.classes_id || '',
            exam_address: opts.exam_address || '',
            user_classes_relation_id: opts.user_classes_relation_id || ''
        };
        return http.post(url, data);
    },
    // pmp网申资料
    // PMP网申资料
    save_pmi_detail: opts => {
        console.log(opts);
        const url = '/user/classes/save_pmi_detail';
        const data = {
            id: opts.id || '',
            has_pmi_account: opts.has_pmi_account || '',
            user_classes_id: opts.user_classes_id || '',
            username: opts.name || '',
            password: opts.pwd || '',
            start_time: opts.materialValidity1 || '',
            end_time: opts.materialValidity2 || '',
            safea_username: opts.memberName || '',
            safea_password: opts.memberPwd || '',

            first_name: opts.firstName || '',
            last_name: opts.lastName || '',
            zhengjian_type: opts.cardType || '',
            zhengjian_id: opts.cardNum || '',
            birthday: opts.birth || '',
            graduate_school: opts.schoolName || '',
            graduate_school_address: opts.schoolAddress || '',
            graduate_day: opts.graduate || '',
            major: opts.major || '',
            xueli: opts.education || '',
            project_experience: JSON.stringify(opts.project) || ''
        };
        return http.post(url, data);
    },
    // 我的考试班级-》查看申请信息
    get_apply_info: opts => {
        const url = '/user/classes/get_apply_info';
        const data = {
            user_class_relation_id: opts.user_class_relation_id || ''
        };
        return http.get(url, data);
    },
    // 填写考试报名信息
    save_examination_registration: opts => {
        const url = 'user/classes/save_examination_registration';
        const data = {
            // 选择班级
            classes_id: opts.classes_id || '',
            exam_address: opts.exam_address || '',
            user_classes_relation_id: opts.user_classes_relation_id || '',
            // 个人信息
            truename: opts.truename || '',
            company: opts.company || '',
            duty: opts.duty || '',
            tel: opts.tel || '',
            email: opts.email || '',
            email_bak: opts.email_bak || '',
            user_detail_id: opts.user_detail_id || '',
            gender: opts.gender || '0',
            post_code: opts.post_code || '',
            department: opts.department || '',
            province: opts.province || '',
            city: opts.city || '',
            area: opts.area || '',
            address: opts.address || '',
            // user_classes_id: opts.user_classes_id || '',
            // classes_id: opts.classes_id || '',
            type: opts.type || '',
            // 填写报名信息
            // id: opts.id || '',
            has_pmi_account: opts.has_pmi_account || '',
            // user_classes_id: opts.user_classes_id || '',
            username: opts.name || '',
            password: opts.pwd || '',
            start_time: opts.materialValidity1 || '',
            end_time: opts.materialValidity2 || '',
            safea_username: opts.memberName || '',
            safea_password: opts.memberPwd || '',

            first_name: opts.firstName || '',
            last_name: opts.lastName || '',
            zhengjian_type: opts.cardType || '',
            zhengjian_id: opts.cardNum || '',
            birthday: opts.birth || '',
            graduate_school: opts.schoolName || '',
            graduate_school_address: opts.schoolAddress || '',
            graduate_day: opts.graduate || '',
            major: opts.major || '',
            xueli: opts.education || '',
            project_experience: JSON.stringify(opts.project) || ''
        };
        return http.post(url, data);
    },
    // 填写考试报名信息
    save_npdp_examination_registration: opts => {
        const url = 'user/classes/save_npdp_examination_registration';
        const data = {
            // 选择班级
            classes_id: opts.classes_id || '',
            exam_address: opts.exam_address || '',
            user_classes_relation_id: opts.user_classes_relation_id || '',
            // 个人信息
            truename: opts.truename || '',
            company: opts.company || '',
            duty: opts.duty || '',
            tel: opts.tel || '',
            email: opts.email || '',
            email_bak: opts.email_bak || '',
            user_detail_id: opts.user_detail_id || '',
            gender: opts.gender || '0',
            post_code: opts.post_code || '',
            department: opts.department || '',
            province: opts.province || '',
            city: opts.city || '',
            area: opts.area || '',
            address: opts.address || '',
            // user_classes_id: opts.user_classes_id || '',
            // classes_id: opts.classes_id || '',
            type: opts.type || '',
            // 填写报名信息
            // id: opts.id || '',
            is_finish_exam: opts.is_finish_exam || '',
            // user_classes_id: opts.user_classes_id || '',
            username: opts.name || '',
            password: opts.pwd || '',

            head: opts.head || '',
            first_name: opts.firstName || '',
            last_name: opts.lastName || '',
            zhengjian_type: opts.cardType || '',
            zhengjian_id: opts.cardNum || '',
            birthday: opts.birth || '',
            graduate_school: opts.schoolName || '',
            graduate_start_day: opts.graduate_start_day || '',
            graduate_end_day: opts.graduate_end_day || '',
            major: opts.major || '',
            xueli: opts.education || '',
            project_experience: JSON.stringify(opts.project) || ''
        };
        return http.post(url, data);
    }
};
