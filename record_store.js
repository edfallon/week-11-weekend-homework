const RecordStore = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = balance;

};

RecordStore.prototype.addRecord = function (record) {
  this.inventory.push(record);
};

RecordStore.prototype.printProperties = function (record) {
  return "Artist: " + record.artist+"," + " Title: " + record.title+","+ " Genre: " + record.genre+","+ " Price: " + record.price.toString();
};

RecordStore.prototype.listInventory = function() {
  return this.inventory;
};

RecordStore.prototype.sellRecord = function (record) {
  let index = this.inventory.indexOf(record);
  if(index !== -1) {
  this.inventory.splice(index, 1);
  this.balance += record.price;
}
};

module.exports = RecordStore;
