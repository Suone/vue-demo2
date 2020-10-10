export default {
    USER_NOT_LOGINED: '0', // 用户未登录
    USER_LOGINED: '1', // 用户已登陆
    CHAPER_NOT_STUDY: 0, // 课程章节未开始
    CHAPER_STUDYING: 1, // 课程章节学习中
    CHAPER_ALREADY_STUDY: 2, // 课程章节已学完
    CHAPER_ALL: 3, // 全部课程章节
    EXAM_CHECK_FILL: 0, // 填写信息
    EXAM_CHECK_PENDING: 1, // 待审核
    EXAM_CHECK_PASS: 2, // 审核通过
    EXAM_CHECK_REFUSED: 3, // 审核拒绝
    CLASS_END: 0, // 考试班级已结束
    CLASS_NOT_END: 1, // 考试班级未结束
    // 网申
    HAVE_FINISH_PMP: 1, // 已完成PMP
    NEED_PMP: 0, // 需新睿智业代理PMP网申
    HAVE_FINISH_NPDP: 1, // 已完成NPDP
    NEED_NPDP: 0, // 需新睿智业代理NPDP网申
    NET_STUDY: '0', // 网授班
    FACE_STUDY: '1', // 面授班
    // 练习
    CHAPTER_PRACTICE: '0', // 章节练习
    KAOTI_PRACTICE: '1', // 考题练习
    MONI_PRACTICE: '2', // 模拟考试
    FINAL_PRACTICE: '3', // 结业测试
    ZHANGJIE_TOTAL: 10, // 章节数量
    KAOTI_TOATL: 20, // 考题数量
    MOMI_TOTAL: 20, // 模拟考试数量
    // 每页条数
    PAGESIZE: 10, // 每页条数
    // apply续证申请条数
    APPLY_PAGE_SIZE: 5,
    // 课程id
    PMP_ID: '1', // pmpid
    PDU_ID: '2', // pduid
    YIJIAN_ID: '3', // 一建
    NPDP_ID: '4', // NPDP
    PDU_MY_LESSON: 'my_lesson', // 我的课单
    PDU_APPLY: 'pdu_apply', // 续证申请
    // pdu课程的四个状态
    ALL: 'all',
    FINISHED: 'finished',
    STUDYING: 'studying',
    NOTSTART: 'notStart',
    DISABLED: 'disabled',
    IS_PDU: 'pdu', // pdu
    // 订单状态
    NEED_PAY: '0', // 待支付
    FINISHED_PAY: '1', // 已完成
    CLOSE_PAY: '4', // 订单已关闭
    ORDER_ALL: 'all', // 全部订单
    // 答案选项
    MULTIPLE_CHOICE: '1', // 多选
    ONE_CHOICE: '0', // 单选
    SHORT_ANSWER: '2', // 简答题
    // 班型
    CLASSES_TYPE: ['单年保过班', '协议保过班', '全程保障班'],
    CLASSES_TYPE1: '1',
    CLASSES_TYPE2: '2',
    CLASSES_TYPE3: '3',
    RESTUDY_PENDING: '0', // 未审核
    RESTUDY_PASS: '1', // 审核通过
    RESTUDY_REFUSED: '2', // 审核拒绝
    // 支付
    PAY: 'http://test.51pm.cn/order/pay/alipay?'
};
