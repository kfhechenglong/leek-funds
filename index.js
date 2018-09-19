// beginStr [0000-00-00]
// endStr   [0000-00-00]
class getAgeFormat {
  constructor({beginStr,endStr}){
    this.endStr = this.dateToggle('-','-','',beginStr);
    this.beginStr = this.dateToggle('-','-','',endStr);
  }
  getAge:function (beginStr, endStr) {
    if (!beginStr || !endStr) return '';
    var reg = new RegExp(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    var beginArr = beginStr.match(reg);
    var endArr = endStr.match(reg);
    var days = 0;
    var month = 0;
    var year = 0;
    days = endArr[4] - beginArr[4];
    if (days < 0) {
        month = -1;
        days = 30 + days;
    }
    month = month + (endArr[3] - beginArr[3]);
    if (month < 0) {
        year = -1;
        month = 12 + month;
    }
    year = year + (endArr[1] - beginArr[1]);
    var yearString = year > 0 ? year + "岁" : "";
    var mnthString = month > 0 ? month + "月" : "";
    var dayString = days > 0 ? days + "天" : "";
    var result = "";
    if (year >= 1) {
        result = yearString + mnthString;
    } else {
        if (month >= 1) {
            result = days > 0 ? mnthString + dayString : mnthString;
        } else {
            var begDate = new Date(beginStr);
            var endDate = new Date(endStr);
            var between = (endDate.getTime() - begDate.getTime()) / 1000;
            days = Math.floor(between / (24 * 3600));
            var hours = Math.floor(between / 3600 - (days * 24));
            var dayString = days > 0 ? days + "天" : "";
            result = days >= 3 ? dayString : days * 24 + hours + "小时";
        }
    }
    return result;
  }
  //将日期格式转换为0000-00-00
  dateToggle:(year,month,day,data1){
    let date = null;
    if(data1 === undefined){date = new Date()}else{date = new Date(data1);}
    let y = date.getFullYear(); 
    let m = date.getMonth() + 1; 
    m = m < 10 ? '0' + m : m; 
    let d = date.getDate(); 
    d = d < 10 ? ('0' + d) : d; 
    return y + year + m + month + d +day;
  }
}
