var set = function () {
    this.num_of_values = 0;
    this.values = [];
}

set.prototype.add = function (value) {
    if (!this.values.indexOf(value) > -1) {
        this.values.push(value);
        this.num_of_values++;
    }
}
set.prototype.remove = function (value) {
    if (!this.values.indexOf(value) > -1) {
        this.values.splice(this.values.indexOf(value), 1);
        this.num_of_values--;
    }
}
set.prototype.contains = function (value) {
    return this.values.indexOf(value) > -1;
}

set.prototype.union = function (set1) {
    var newSet = new set();
    set1.values.forEach((ele) => {
        newSet.add(ele);
    }, this);
    this.values.forEach((ele) => {
        newSet.add(ele);
    }, this);

    return newSet;
}

set.prototype.intersect = function (set1) {
    var newSet = new set();
    set1.values.forEach((ele) => {
        if (this.contains(ele)) {
            newSet.add(ele);
        }
    });
    return newSet;
}

set.prototype.difference = function (set1) {
    var newSet = new set();
    this.values.forEach((ele) => {
        if (!set1.contains(ele)) {
            newSet.add(ele);
        }
    });
    return newSet;
};

set.prototype.isSubSet = function (set1) {
    var res=true;
    set1.values.forEach(ele => {
        if (!this.contains(ele)) {
            res= false;
            return;
        }
    });
    return res;
}


var mySet = new set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);

var mySet1 = new set();
mySet1.add(1);
mySet1.add(5);

console.dir(mySet.union(mySet1));
console.dir(mySet.intersect(mySet1));
console.dir(mySet.difference(mySet1));
console.dir(mySet.isSubSet(mySet1));





