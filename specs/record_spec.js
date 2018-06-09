const assert = require('assert');
const Record = require('../record.js');

describe('record', function(){

  let record;


    beforeEach(function(){
        record = new Record("Queen", "Innuendo");
      });

  it('should have a artist', function(){
    assert.strictEqual(record.artist, "Queen");
  });

  it('should have a title', function(){
    assert.strictEqual(record.title, "Innuendo");
  });



});
