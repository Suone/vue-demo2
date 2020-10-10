import http from './http';
let yijianId = '3';
export default {
    // 练习
    // 创建练习
    create_practice: opts => {
        const url = '/user/practice/create_practice';
        const data = {
            // practice_type: opts.practice_type || '',
            practice_category_id: opts.practice_category_id || '',
            // question_count: opts.question_count || '',
            exam_paper_id: opts.exam_paper_id || '',
            question_way: opts.question_way || '',
            course_chapter_id: opts.course_chapter_id || '',
            course_category_id: opts.course_category_id || '',
            practice_record_id: opts.practice_record_id || '',
            course_id: opts.course_category_id === yijianId ? opts.course_id : ''
        };
        return http.get(url, data);
    },
    // 获取题数
    count_question: opts => {
        const url = '/user/practice/count_question';
        const data = {
            practice_category_id: opts.practice_category_id || '',
            course_category_id: opts.course_category_id || ''
        };
        return http.get(url, data);
    },
    // 提交练习
    save_chapter_practice: opts => {
        const url = '/user/practice/save_chapter_practice';
        const data = {
            chapter_params: JSON.stringify(opts.chapter_params)
        };
        return http.post(url, data);
    },
    // 提交单题练习
    save_question_answer: opts => {
        const url = '/user/practice/save_question_answer';
        const data = {
            practice_category_id: opts.practice_category_id,
            question_id: opts.question_id,
            user_answer: opts.user_answer,
            practice_record_id: opts.practice_record_id,
            practice_type: opts.practice_type,
            speed_time: opts.speed_time,
            all_speed_time: opts.all_speed_time
        };
        return http.post(url, data);
    },
    // 考题练习侧边数据
    examination_left_info: opts => {
        const url = '/user/practice/examination_left_info';
        const data = {
            practice_record_id: opts.practice_record_id
        };
        return http.get(url, data);
    },
    // 查看成绩和题解
    look_report: opts => {
        const url = '/user/practice/look_report';
        const data = {
            practice_record_id: opts.practice_record_id || '',
            practice_category_id: opts.practice_category_id || '',
            course_category_id: opts.course_category_id || ''
        };
        return http.get(url, data);
    },
    // 更新记录耗时时间
    update_speed_time: opts => {
        const url = '/user/practice/update_speed_time';
        const data = {
            practice_record_id: opts.practice_record_id || '',
            speed_time: opts.speed_time || ''
        };
        return http.post(url, data);
    },
    // 获取视频信息
    chapter_detail: opts => {
        const url = '/user/course/chapter_detail';
        const data = {
            chapter_id: opts.chapter_id || ''
        };
        return http.get(url, data);
    },
    // 获取是视频播放凭证
    get_play_auth: opts => {
        const url = '/user/utils/get_play_auth';
        const data = {
            video_id: opts.video_id || ''
        };
        return http.get(url, data);
    },
    // 阿里云日志
    aliyun_log: opts => {
        const url = '/user/course/aliyun_log';
        const data = {
            chapter_id: opts.chapter_id || '',
            fail_time: opts.fail_time || '',
            aliyun_response_code: opts.aliyun_response_code || '',
            aliyun_response: opts.aliyun_response || '',
            resolution_ratio: opts.resolution_ratio || ''
        };
        return http.post(url, data);
    },
    // 提问的列表
    ask_list: opts => {
        const url = '/user/course/ask_list';
        const data = {
            type: opts.type || '',
            course_chapter_id: opts.course_chapter_id || '',
            page: opts.page || 1,
            page_size: opts.page_size || ''
        };
        return http.get(url, data);
    },
    // 保存章节学习情况
    save_chapter_study: opts => {
        const url = '/user/course/save_chapter_study';
        const data = {
            record_id: opts.record_id || '',
            chapter_id: opts.chapter_id || '',
            start_time: opts.start_time || '',
            current_time: opts.current_time || '',
            finish_speed: opts.finish_speed || ''
        };
        return http.post(url, data);
    },
    // 用户提问
    submit_ask: opts => {
        const url = '/user/course/submit_ask';
        const data = {
            course_chapter_id: opts.course_chapter_id || '',
            timer: opts.timer || '',
            desc: opts.desc || ''
        };
        return http.post(url, data);
    },
    // 用户收藏题目
    collect: opts => {
        const url = '/user/collect/save';
        const data = {
            practice_category_id: opts.practice_category_id || '',
            question_id: opts.question_id || '',
            practice_record_id: opts.practice_record_id || '',
            user_answer: opts.user_answer || '',
            is_delete: opts.is_delete || '',
            collect_id: opts.collect_id || ''
        };
        return http.post(url, data);
    },
    // 用户取消收藏题目
    cancel_collect: opts => {
        const url = '/user/collect/cancel_collect';
        const data = {
            question_id: opts.question_id || ''
        };
        return http.post(url, data);
    },
    // 练习收藏的题目
    get_collect: opts => {
        const url = '/user/collect/index';
        const data = {
            practice_category_id: opts.practice_category_id || '',
            practice_record_id: opts.practice_record_id || '',
            exam_paper_id: opts.exam_paper_id || '',
            course_id: opts.course_category_id === yijianId ? opts.course_id : ''
        };
        return http.get(url, data);
    },
    // 提交答卷，更新练习状态
    submit_paper: opts => {
        const url = '/user/practice/submit_paper';
        const data = {
            practice_record_id: opts.practice_record_id || ''
        };
        return http.post(url, data);
    }
};
