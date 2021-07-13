export default {
  /*****************************************iop督办 */
  getToken: "/getToken", // 接口名
  // excelFile: '/Common/excelFile', // 上传
  findUserInfos : '/Common/findUserInfos', // 获取loginName
  findUserInfo: '/Common/findUserInfo', // 获取用户权限
  prodFindProdInfo: '/IopProdDTableController/findProdInfo', // IOP产品维表查询
  prodExcelFile: '/IopProdDTableController/excelFile', // IOP产品维表导入
  prodUpdateProdInfo: '/IopProdDTableController/updateProdInfo', // IOP产品维表修改
  prodInsertProdInfo: '/IopProdDTableController/insertProdInfo', // IOP产品新增
  prodRemoveProdByCode : '/IopProdDTableController/removeProdByCode', //IOP产品维表删除
  prodCheckProdInfo: '/IopProdDTableController/checkProdInfo', //IOP产品维表导入监测
  // ProdDownloadProdExcel: '/IopChnnlDTableController/downloadProdExcel', // IOP渠道维表下载模板
  // prodDownProdInfo: '/IopProdDTableController/downProdInfo', // IOP导出
  canalExcelFile: '/IopChnnlDTableController/excelFile', // IOP渠道维表导入
  canalFindChnnlInfo : '/IopChnnlDTableController/findChnnlInfo', // IOP渠道维表查询
  canalUpdateChnlInfo: '/IopChnnlDTableController/updateChnlInfo', // IOP渠道维表修改  
  canalInsertProdInfo: '/IopChnnlDTableController/insertChnlInfo', // IOP渠道维表新增
  canalCheckChnnlInfo: '/IopChnnlDTableController/checkChnnlInfo', //IOP渠道维表导入监测
  canalRemoveChnlByCode: '/IopChnnlDTableController/removeChnlByCode', //IOP渠道维表删除

  /*调度协同*****************************************/
  // findCBdiIntfInfo: '/scheduling/schedulingController/findCBdiIntfInfo', //调度协同
  findCBdiIntfInfo: '/schedulingController/findCBdiIntfInfo', 
  findSchedulingReloadInfo: '/CBdiReloadInfoController/findSchedulingReloadInfo', 
  updateSchedulingReloadInfo: '/CBdiReloadInfoController/updateSchedulingReloadInfo', 
  
  /*销售产品列表*****************************************/
  findMenuInfo: '/salesGoods/findMenuInfo', //查询菜单列表
  findProdInfo: '/salesGoods/findProdInfo', //查询产品列表
  updateProdInfo: '/salesGoods/updateProdInfo', //修改产品信息

  /*互动专区*****************************************/
  findActivemonitorHelpInfo: '/BaseController/findActivemonitorHelpInfo', //帮助查询
  importData: '/BaseController/importData', //帮助导入文件
  findActivemonitorQuestionInfo: '/BaseController/findActivemonitorQuestionInfo', //问题与建议查询
  importDataQuestion: '/BaseController/importDataQuestion', //导入


  findActiveOfferOffInfo: "/findActiveOfferOffInfo", // 正式
  findTCkmSegmentInfo: '/CrmProdController/findTCkmSegmentInfo', // 查询客户群id,客户群名称,引到期时间
  findTdCaCrmCampnConfigInfo: '/CrmProdController/findTdCaCrmCampnConfigInfo', // 查询目录
  findTdCaCrmCampnConfigProdInfo: '/CrmProdController/findTdCaCrmCampnConfigProdInfo' // 查询产品id，产品名称，引用客户群数量
  // findActiveOfferOffInfo: '/findActiveOfferActInfo' //  测试 
};
