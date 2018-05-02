function mostProfitableDay(deptDay){
  //console.log(list)
  var days = {};
  var proftDay = "";
  var mostList = 0;
  for(var i = 0; i < deptDay.length;i++){
    var getDay = deptDay[i].day;
    if(days[getDay]===undefined){
      days[getDay] = 0;
    }
    days[getDay]+=deptDay[i].total;

    if(days[getDay]>mostList){
    mostList = days[getDay];
      proftDay = getDay;

    }

}
//console.log(mostPro);
return proftDay;
}
