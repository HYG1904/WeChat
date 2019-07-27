// api.js  专门管理后台请求地址

const host = "http://59.110.138.169/admin/xy/";

export default {
  host,

  // 获取班级列表
  classLs: `${host}clazz/list`,

  // 获取宿舍列表
  dormLs: `${host}dorm/list`,

  // 占座申请
  hold: `${host}lite/student/orderZhan`,

  // 入学申请
  study: `${host}lite/student/orderRu`,

  // 学员申请状态
  status: `${host}lite/student/getUserStatus`,

  // 学员信息明细
  detail: `${host}lite/student/detail`,

  // 查看学员缴费
  pay: `${host}lite/student/costList`

}