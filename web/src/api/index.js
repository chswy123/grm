import request from '@/utils/request';

export const openDb = data => {
    return request({
        url: 'api/index/open',
        method: 'post',
        data
    });
};

export const getKeys = data => {
    return request({
        url: 'api/index/getkeys',
        method: 'post',
        data
    });
};

export const getKeyType = data => {
    return request({
        url: 'api/index/getkeytype',
        method: 'post',
        data
    });
};

export const delKeys = data => {
    return request({
        url: 'api/index/delkey',
        method: 'post',
        data
    });
};

export const ttlKey = data => {
    return request({
        url: 'api/index/ttlkey',
        method: 'post',
        data
    });
};

export const serInfo = data => {
    return request({
        url: 'api/index/serinfo',
        method: 'post',
        data
    });
}

export const luaRun = data => {
    return request({
        url: 'api/index/luarun',
        method: 'post',
        data
    });
}

export const setting = data => {
    return request({
        url: 'api/index/setting',
        method: 'post',
        data
    });
}

export const getSetting = () => {
    return request({
        url: 'api/index/setting',
        method: 'get'
    });
};