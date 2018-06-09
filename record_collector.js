const RecordCollector = function(cash){
  this.cash = cash;
  this.collection = [];
};

RecordCollector.prototype.buyRecord = function (record) {
  if(this.cash >= record.price){
    this.cash - record.price
    this.collection.push(record);
  }
};

module.exports = RecordCollector;
