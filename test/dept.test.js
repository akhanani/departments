describe('grandTotal',function(){

  it('should check the list departments are correctly ',function(){

  var  toiletriesDept=[
      {'name' : 'toiletries','total':5007},
      {'name':' groceries','total': 11089 },
      {'name' :'pharmacy','total' : 7321 },
      {'name' :'bakery', 'total' :10073},
      {'name' : 'bitchery','total' :9053}
    ]


    assert.deepEqual(grandTotal(toiletriesDept),42543);

    });

    it ('should check the  departments total is correct',function(){

      var  toiletriesDept=[
          {'name' : 'toiletries','total':5007},
          {'name':' groceries','total': 11089 },
          {'name' :'pharmacy','total' : 7321 },
          {'name' :'bakery', 'total' :10073},
          {'name' : 'bitchery','total' :8000}
        ]


        assert.deepEqual(grandTotal(toiletriesDept),41490);


    });
    it ('should check  that if the function calculated the total ',function(){

      var  toiletriesDept=[
          {'name' : 'toiletries','total':6007},
          {'name':' groceries','total': 11089 },
          {'name' :'pharmacy','total' : 7321 },
          {'name' :'bakery', 'total' :10073},
          {'name' : 'bitchery','total' :8000}
        ]


    assert.deepEqual(grandTotal(toiletriesDept),42490);
    });
});
