const assert = require('assert');
const RecordCollector = require('../record_collector.js');
const Record = require('../record.js');

describe('recordCollector', function(){

  let recordCollector;
  let record;



    beforeEach(function(){
        recordCollector1 = new RecordCollector(100);
        record1 = new Record("Queen", "Innuendo", "Rock", 10);
        record2 = new Record("Eminem", "The Marshall Mathers LP", "Rap", 10);
        record3 = new Record("Mcfly", "Motion in the Ocean", "Pop", 10);
      });

  it('should have a cash', function(){
    assert.strictEqual(recordCollector1.cash, 100);
  });

  it('should have a collection of records that starts empty', function(){
    assert.strictEqual(recordCollector1.collection.length, 0);
  });

  it('should be able to buy record if they have enough money', function(){
    recordCollector1.buyRecord(record2)
    assert.strictEqual(recordCollector1.collection.length, 1);
  });

  it('should be able to sell record', function(){
    recordCollector1.buyRecord(record1)
    recordCollector1.buyRecord(record2)
    recordCollector1.buyRecord(record3)
    recordCollector1.sellRecord(record1)
    assert.strictEqual(recordCollector1.collection.length, 2);
    assert.strictEqual(recordCollector1.cash, 80);
  });



});
