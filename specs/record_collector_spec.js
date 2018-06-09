const assert = require('assert');
const RecordCollector = require('../record_collector.js');


describe('recordCollector', function(){

  let recordCollector;



    beforeEach(function(){
        recordCollector1 = new RecordCollector(100);
      });

  it('should have a cash', function(){
    assert.strictEqual(recordCollector1.cash, 100);
  });



});
