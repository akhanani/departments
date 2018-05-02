function mostProfitable(listDepts){
  var depts = [];

  for(var i=0; i<listDepts.length; i++){
    depts.push(listDepts[i].total)
    var sales = Math.max.apply(null, depts);

 	 if(sales === listDepts[i].total){
       var data = listDepts[i].name;
     }
  }
  return data;
  console.log (data);
}
