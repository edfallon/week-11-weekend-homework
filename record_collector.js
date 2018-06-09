const RecordCollector = function(cash){
  this.cash = cash;
  this.collection = [];
};

RecordCollector.prototype.buyRecord = function (record) {
  if(this.cash >= record.price){
    this.cash -= record.price
    this.collection.push(record);
  }
};

RecordCollector.prototype.sellRecord = function (record) {
  let index = this.collection.indexOf(record);
  if(index !== -1) {
  this.collection.splice(index, 1);
  this.cash += record.price;
}
};

module.exports = RecordCollector;
