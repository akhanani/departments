describe('mostProfitable',function(){

it('should determine which number of  department are most profitable',function(){
var list = [
            {"name":"Butchery","total":6001},
            {"name":"Bakery","total":7801},
            {"name":"Fresh fruits","total":4519}]

assert.deepEqual(mostProfitable(list), "Bakery")


});
it('should determine the highest department',function(){
var list = [
            {"name":"Butchery","total":6001},
            {"name":"Bakery","total":7801},
            {"name":"Fresh fruits","total":41519}]

assert.deepEqual(mostProfitable(list), "Fresh fruits")


  });
  it('should calculate the totals  mostProfitable',function(){
  var list = [
              {"name":"Butchery","total":16001},
              {"name":"Bakery","total":7801},
              {"name":"Fresh fruits","total":4519}]

  assert.deepEqual(mostProfitable(list), "Butchery")


    });

});
