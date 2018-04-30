describe('mostProfitableDay function', function(){
  var dataset = [
  {
      name : "Bakery",
      total : 7801,
      day : "Monday",
  },{
      name : "Butchery",
      total : 4426,
      day : "Wednesday",
  },{
      name : "Bakery",
      total : 9976,
      day : "Tuesday",
  },{
      name : "Pharmacy",
      total : 5648,
      day : "Friday",
  }];
it(' determine which day of department is the most profitable',function(){
      assert.deepEqual(mostProfitableDay(dataset),'Tuesday');
    });
      it('should calculate the total of departments', function(){
            assert.notDeepEqual(mostProfitableDay('total'),27851);
});
it(' determine which day of department is the lowest profit', function(){
  assert.equal(mostProfitableDay(dataset),'Tuesday');

});

});
