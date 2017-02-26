var storeType = {
    username: "username",
    userGuid: "userGuid"
};

var localStore = function(storeType) {
    this.storeType = storeType;
};

localStore.prototype.set = function(movements){
    if (!this.storeType)
        return;
    window.localStorage.setItem(this.storeType, JSON.stringify(movements));// helper.angularJsonStringify(movements));
};
localStore.prototype.get = function () {
    if (!this.storeType)
        return null;
    var item =window.localStorage.getItem(this.storeType);
    if (item){
        var movements = JSON.parse(item);
        return movements;
    }

    return "";
};
localStore.prototype.addTo = function(movement) {
    var current = this.get();
    current.push(movement);
    this.set(current);
    return this.get();
};