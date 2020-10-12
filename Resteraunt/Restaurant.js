

class Restaurant {
    static restaurants = [];
    #id;
    #name;
    #menus;
    constructor(name, menus = [], id = (Restaurant.restaurants.length + 1)){
        this.#id = id;
        this.#name = name;
        this.#menus = menus;
        this.constructor.restaurants.push(this);
    }

    /*GETTERS*/
    getId(){
        return this.#id;
    }
    getName(){
        return this.#name;
    }
    getMenus(){
        return this.#menus;
    }

    /*SETTERS*/
    setName(name){
        this.#name = name;
    }
    addMenu(menu){
        this.#menus.push(menu);
    }
    removeMenu(id){
        const newArray = this.#menus.filter(menu =>{ return menu.getId() != id});
        this.#menus = newArray;
    }
}

module.exports = Restaurant;