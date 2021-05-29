import {Loading} from 'element-ui';

let loadingInstance

function startLoading() {
    loadingInstance = Loading.service({
        fullscreen: true,
        lock: true,
        text: 'Loading......',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}

function endLoading() {
    loadingInstance.close();
}

let needLoadingRequestCount = 0

export function showFullScreenLoading() {
    if (needLoadingRequestCount === 0) {
        startLoading()
    }
    needLoadingRequestCount++
}

export function tryHideScreenLoading() {
    if (needLoadingRequestCount <= 0) return
    needLoadingRequestCount--
    if(needLoadingRequestCount===0){
        endLoading();
    }
}
