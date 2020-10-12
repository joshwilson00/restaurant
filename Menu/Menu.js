const { objectExpression } = require('@babel/types');
const Item = require('../Item/Item');
class Menu {
    static menus = [];
    #id;
    #title;
    #icon;
    #items;
    constructor(title, icon, items=[], id = (Menu.menus.length + 1)){
        this.#id = id;
        this.#title = title;
        this.#icon = icon;
        this.#items = items;
        this.constructor.menus.push(this);
    }

    /* GETTERS */
    getId(){
        return this.#id;
    }
    getName(){
        return this.#title;
    }
    getIcon(){
        return this.#icon;
    }
    getItems(){
        return this.#items;
    }

    /* SETTERS */
    setTitle(title){
        this.#title = title;
    }
    setIcon(url){
        this.#icon = url;
    }
    addItem(item){
        this.#items.push(item);
    }
    removeItem(id){
        const newArray = this.#items.filter(item =>{ return item.getId() != id});
        this.#items = newArray;
    }
}

module.exports = Menu;