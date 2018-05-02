function mostProfitableDepartment (dataSet){
  //console.log(dataSet)

 var mostProf = '';
  var depMap = {};
  for (var i = 0;i<dataSet.length;i++){
    var current =dataSet[i].name;
     if (depMap[current]===undefined){
        depMap[current] = 0;
     }
    depMap[current]+=dataSet[i].total;
    //console.log(depMap)
  }

  for (var currentDep in depMap){
    console.log(currentDep)
      if (depMap[currentDep] >= mostProf){
         mostProf = currentDep;
    }
  }

  //console.log(depMap)

  return mostProf;
 }

/*if (dataSet[i].total >= profit){
         mostProf = dataSet[i].name;
         profit = dataSet[i].total;
    } */
