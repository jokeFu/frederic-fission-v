/**
 * Created by Administrator on 2018/6/24.
 */
//导入public.js
import http from '../../../base/api/public'
import sysConfig from '../../../../config/sysConfig'
let xcApiUrlPre = sysConfig.xcApiUrlPre
import querystring from 'querystring'
//     import http from '@/base/api/public'
//定义一个js方法并且直接导出
// page，int类型，size int类型，params：json对象
export const page_list = (page, size, params) => {
    //http请求服务端的url
    //使用axios进行http的访问
    let query = querystring.stringify(params);
    return http.requestQuickGet("/api/cms/page/list/" + page + "/" + size + "/?" + query);

  }
//页面新增
export  const page_add = (params) => {

   return http.requestPost("/api/cms/page/add",params)
}
//页面单个查询
export  const page_get = (params) => {

  return http.requestGet("/api/cms/page/get/" + params);
}
//单个修改
export  const page_edit = (id,params) => {
  // let id = querystring.stringify(pageId);
  // let query = querystring.stringify(params);
  return http.requestPut(xcApiUrlPre+"/cms/page/edit/"+id,params);
}



export  const site_list = () => {
  // let id = querystring.stringify(pageId);
  // let query = querystring.stringify(params);
  return http.requestGet("/api/cms/site/list");
}
export  const template_list = () => {
  // let id = querystring.stringify(pageId);
  // let query = querystring.stringify(params);
  return http.requestGet("/api/cms/template/list");
}



