const assert = require('assert');
const Record = require('../record.js');

describe('record', function(){

  let record;


    beforeEach(function(){
        record = new Record("Queen", "Innuendo", "Rock", 10);
      });

  it('should have a artist', function(){
    assert.strictEqual(record.artist, "Queen");
  });

  it('should have a title', function(){
    assert.strictEqual(record.title, "Innuendo");
  });

  it ('should have a genre', function(){
    assert.strictEqual(record.genre, "Rock")
  });

  it('should have a price', function(){
    assert.strictEqual(record.price, 10)
  })



});
