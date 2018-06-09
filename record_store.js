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





// Bank.prototype.businessAccounts = function() {
//   let foundAccounts = [];
//
//   this.accounts.forEach(function(account) {
//     if (account.type === 'business') {
//       foundAccounts.push(account);
//     }
//   })
//
//   return foundAccounts;
// };

module.exports = RecordStore;
