// to export only a single class
// to mutiple classes would be at the botton of the page:
// module.exports = {
//      Bakery,
//      NameOfOtherClass; }
module.exports = class Bakery{
    
    constructor(category, name, price, isAvailable, bestBy){
        this._category = category;
        this._name = name;
        this._price = price;
        this._isAvailable = isAvailable;
        this._bestBy = bestBy;
    }

    get category(){
        return this._category;
    }

    get name(){
        return this._name;
    }

    get price(){
        return this._price;
    }

    get isAvailable(){
        return this._isAvailable;
    }

    get bestBy(){
        return this._bestBy;
    }

    setCategory(c){
        this._category = c;
    }

    setName(n){
        this._name = n;
    }

    setPrice(p){
        this._price = p;
    }

    setIsAvailable(i){
        this._isAvailable = i;
    }

    setBestBy(b){
        this._bestBy = b;
    }

}

// let bakery = new Bakery("pastry", ["Danish", "Pain Au chocolate"], 1.35, true, "15/10/21");

// console.log(bakery.category);
// console.log(bakery.name);
// console.log(bakery.price);
// console.log(bakery.isAvailable);
// console.log(bakery.bestBy);