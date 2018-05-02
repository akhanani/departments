  describe('mostProfitableDepartment function', function(){
    it(' determine which department is the most profitable',function(){
  var dataSet = [
  {name : "Bakery", total : 7801,},
  {name : "Butchery",total : 4426,},
  {name : "Bakery",total : 9976,},
  {name : "Pharmacy",total : 5648,}
  ];
  assert.deepEqual(mostProfitableDepartment(dataSet),'Bakery');
      });


      it(' determine which department is the most profitable',function(){
      var dataSet8 = [
      {name : "Butchery",total : 1477426},
      {name : "Pharmacy",total : 5648},
      {name : "food",total : 548},
      {name : "Bakery", total : 7801,}
      ];


      assert.deepEqual(mostProfitableDepartment(dataSet8),'Butchery');
      });


  });
