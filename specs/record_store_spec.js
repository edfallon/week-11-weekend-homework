const assert = require('assert');
const RecordStore = require('../record_store.js');
const Record = require('../record.js');

describe('recordStore', function(){

  let recordStore;
  let record;


    beforeEach(function(){
        recordStore = new RecordStore("Sifter's", "Manchester", 1000);
        record1 = new Record("Queen", "Innuendo", "Rock", 10);
        record2 = new Record("Eminem", "The Marshall Mathers LP", "Rap", 10);
        record3 = new Record("Mcfly", "Motion in the Ocean", "Pop", 10);
      });

  it('should have a name', function(){
    assert.strictEqual(recordStore.name, "Sifter's");
  });

  it('should have a name', function(){
    assert.strictEqual(recordStore.city, "Manchester");
  });

  it('should have an inventory that starts empty', function(){
    assert.strictEqual(recordStore.inventory.length, 0);
  });

  it('should have a balance', function(){
    assert.strictEqual(recordStore.balance, 1000);
  });

  it('should have 3 albums in the inventory', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
    assert.strictEqual(recordStore.inventory.length, 3);
  });

  it('should print out records properties', function(){
    assert.strictEqual(recordStore.printProperties(record1),"Artist: Queen, Title: Innuendo, Genre: Rock, Price: 10");
  });

  it('should list all inventory', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    assert.deepStrictEqual(recordStore.listInventory(), [record1, record2]);
  });





});
