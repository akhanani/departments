describe('mostProfitableDay function', function(){
  it(' determine which day of department is the most profitable',function(){
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
      assert.deepEqual(mostProfitableDay(dataset),'Tuesday');
    });

      it('should calculate the total of departments', function(){
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
            assert.notDeepEqual(mostProfitableDay(dataset),27851);
});


});
