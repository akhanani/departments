describe('grandTotal',function(){

  it('should check the list departments are correctly ',function(){

    toiletriesDept={name : 'toiletries',total:5007},
    groceriesDept= {name:' groceries',total: 11089 },
    pharmacyDept = {name :'pharmacy',total : 7321 },
    bakeryDept = {name :'bakery', total :10073},
    butcheryDept ={name : 'bitchery',total :9053},


    assert.deepEqual(grandTotal(grandTotal,42543,(depts)));

    });

    it ('should check the  departments total is correct',function(){

      toiletriesDept={name : 'toiletries',total:5007},
      groceriesDept= {name:' groceries',total: 11089 },
      pharmacyDept = {name :'pharmacy',total : 7321 },
      bakeryDept = {name :'bakery', total :10073},
      butcheryDept ={name : 'bitchery',total :9053},


      assert.deepEqual(grandTotal(grandTotal,42543,(total)));


    });
    it ('should check  that if the function calculated the total ',function(){

      toiletriesDept={name : 'toiletries',total:5007},
      groceriesDept= {name:' groceries',total: 11089 },
      pharmacyDept = {name :'pharmacy',total : 7321 },
      bakeryDept = {name :'bakery', total :10073},
      butcheryDept ={name : 'bitchery',total :9053},


      assert.deepEqual(grandTotal(grandTotal,42543));
    });
});
