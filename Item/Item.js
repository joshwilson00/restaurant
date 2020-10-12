

class Item {
    static items = [];
    #id;
    #name;
    #cost;
    constructor(name, cost, id = (Item.items.length + 1)){
        this.#id = id;
        this.#name = name;
        this.#cost = cost;
        this.constructor.items.push(this);
    }

    /* GETTERS */
    getId(){
        return this.#id
    }
    getName(){
        return this.#name;
    }
    getCost(){
        return this.#cost;
    }

    /* SETTERS */
    setName(name){
        this.#name = name;
    }
    setCost(cost){
        this.#cost = cost;
    }
}

module.exports = Item;