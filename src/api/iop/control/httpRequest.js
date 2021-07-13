import { requestGet, requestPost, requestFile, requestExcel, urlGetRequest } from "@/api/request";
import url from "./url";
import base from "@/api/baseUrl";
function getParams(params, name) {
    let baseUrl = process.env.NODE_ENV === "development" ? base.development : base.production;
    name = name ? name : "";
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
const checkExcel = function (params = {}) {
    params.url = url.checkExcel;
    return requestFile(getParams(params));
};

const excelFile = function (params = {}) {
    params.url = url.excelFile;
    return requestFile(getParams(params));
};

const findCntyVo = function (params = {}) {
    params.url = url.findCntyVo;
    console.log(params)
    return requestPost(getParams(params));
};

const findSatisfatChnlInfo = function (params = {}) {
    params.url = url.findSatisfatChnlInfo;
    return requestPost(getParams(params));
};

const findGsmLvlInfo = function (params = {}) {
    params.url = url.findGsmLvlInfo;
    return requestPost(getParams(params));
};

const findServiceTypeInfo = function (params = {}) {
    params.url = url.findServiceTypeInfo;
    return requestPost(getParams(params));
};

const findSevenCatalogInfo = function (params = {}) {
    params.url = url.findSevenCatalogInfo;
    return requestPost(getParams(params));
};

const findIndexInfo = function (params = {}) {
    params.url = url.findIndexInfo;
    return requestPost(getParams(params));
};






export default {
    checkExcel,
    excelFile,
    findCntyVo,
    findGsmLvlInfo,
    findSatisfatChnlInfo,
    findServiceTypeInfo,
    findSevenCatalogInfo,
    findIndexInfo
};
