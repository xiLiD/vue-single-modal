import { requestGet, requestPost, requestFile, requestExcel, urlGetRequest } from "@/api/request";
import url from "./url";
import base from "@/api/baseUrl";
function getParams(params, name) {
    let baseUrl = process.env.NODE_ENV === "development" ? base.development : base.production;
    name = name ? name : "/iop2/monitoring/ActiveController";
    // let linkUrl = params.url.indexOf('?') == -1 ? params.url + '?r=' + new Date().getTime() : params.url + '&r=' + new Date().getTime();
    // console.log(linkUrl)
    return Object.assign(
        {},
        {
            url: baseUrl + name + params.url,
            data: params.data,
            showLoading: params.showLoading,
            timeOut: params.timeOut,
            loadingTime: params.loadingTime,
            isLoading: params.isLoading
        }
    );
}
function getStatic() {
    let baseUrl = process.env.NODE_ENV === "development" ? base.development : base.production;
    return Object.assign(
        {},
        {
            url: baseUrl + params.url,
            data: params.data,
            showLoading: params.showLoading,
            timeOut: params.timeOut,
            loadingTime: params.loadingTime,
            isLoading: params.isLoading,
            cache: false
        }
    );
}
const findActiveOfferOffInfo = function (params = {}) {
    params.url = url.findActiveOfferOffInfo;
    return requestPost(getParams(params));
};

const findActiveOfferActInfo = function (params = {}) {
    params.url = url.findActiveOfferActInfo;
    return requestPost(getParams(params));
};

const findTCkmSegmentInfo = function (params = {}) {
    params.url = url.findTCkmSegmentInfo;
    return requestPost(getParams(params, '/iop2/monitoring'));
};


const findTdCaCrmCampnConfigInfo = function (params = {}) {
    params.url = url.findTdCaCrmCampnConfigInfo;
    params.data = {
        r: new Date().getTime()
    }
    return requestPost(getParams(params, '/iop2/monitoring'));
};

const findTdCaCrmCampnConfigProdInfo = function (params = {}) {
    params.url = url.findTdCaCrmCampnConfigProdInfo;
    return requestPost(getParams(params, '/iop2/monitoring'));
};



export default {
    findActiveOfferOffInfo,
    findActiveOfferActInfo,
    findTCkmSegmentInfo,
    findTdCaCrmCampnConfigInfo,
    findTdCaCrmCampnConfigProdInfo
};
