const assert = require('assert');
const RecordStore = require('../record_store.js');

describe('recordStore', function(){

  let recordStore;


    beforeEach(function(){
        recordStore = new RecordStore("Sifter's", "Manchester");
      });

  it('should have a name', function(){
    assert.strictEqual(recordStore.name, "Sifter's");
  });

  it('should have a name', function(){
    assert.strictEqual(recordStore.city, "Manchester");
  });





});
