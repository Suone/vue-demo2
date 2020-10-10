import http from './http';

export default {
    // 创建订单
    create_order: opts => {
        const url = '/user/architect/create_order';
        const data = {
            order_params: opts.order_params || [],
            scene_type: opts.scene_type || ''
        };
        return http.post(url, data);
    },
    // 获取班级列表数据
    get_architect_class: opts => {
        const url = '/user/architect/get_architect_class';
        const data = {
            classes_id: opts.classes_id || ''
        };
        return http.get(url, data);
    },
    // 申请免费重学
    architect_reapply: opts => {
        const url = '/user/architect/architect_reapply';
        const data = {
            user_classes_id: opts.user_classes_id || '',
            course_id: opts.course_id || '',
            grade_prove: opts.grade_prove || ''
        };
        return http.post(url, data);
    },
    // 获取重学课程
    get_again_course: opts => {
        const url = '/user/architect/get_again_course';
        const data = {
            user_classes_id: opts.user_classes_id || ''
        };
        return http.get(url, data);
    }
};
