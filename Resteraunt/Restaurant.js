

class Restaurant {
    static restaurants = [];
    #id;
    #name;
    #menus;
    #reviews;
    constructor(name, menus = [], reviews = [], id = (Restaurant.restaurants.length + 1)){
        this.#id = id;
        this.#name = name;
        this.#menus = menus;
        this.#reviews = reviews;
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
    getReviews(){
        return this.#reviews;
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
    addReview(review){
        this.#reviews.push(review);
    }
    removeReview(id){
        const newArray = this.#reviews.filter(review=>{return review.getId() != id});
        this.#reviews = newArray;
    }
}

module.exports = Restaurant;