const Base64 = require('js-base64').Base64;

/**
 * 判断是否为json字符串
 * @param {*} str 需要判断的字符串
 */
function isJsonString(str) {
    try {
        if (typeof JSON.parse(str) === 'object') {
            return true;
        }
    } catch (e) {}
    return false;
}

/**
 * base64 加密
 * @param {*} obj 需要加密的对象
 */
const encrypt = obj => {
    let data = '';
    if (typeof obj === 'object') {
        let str = JSON.stringify(obj);
        data = Base64.encodeURI(str);
    }
    return data;
};

/**
 * base64 解密
 * @param {*} s 需要解密的字符串
 */
const decrypt = s => {
    let data = {};
    if (typeof s === 'string') {
        try {
            let str = Base64.decode(s);
            if (isJsonString(str)) {
                data = JSON.parse(str);
            }
        } catch (e) {}
        // console.log(s);
        // Base64.decode(s);
        // let str = Base64.decode(s);
        // if (isJsonString(str)) {
        //     data = JSON.parse(str);
        // }
    }
    return data;
};

export default {
    encrypt,
    decrypt
};
