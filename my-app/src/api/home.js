import request from './../utils/request'

export function getTopAdList (params) {
    return request.post('', params)
}

export function getBestRecommend (params) {
    return request.get('/top/navigation/navigationStationGetAll', { params })
}