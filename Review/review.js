
class Review {
    static reviews = [];
    static ratingCheck(rating){
        if (rating > 5 || rating < 0) {
            throw new Error('Rating has to be between 0 and 5!')
        }
        return rating;
    }
    #id;
    #author;
    #rating;
    #description;
    constructor(author, rating, description, id=(Review.reviews.length+1)){
        this.#id = id;
        this.#author = author;
        this.#rating = this.constructor.ratingCheck(rating);
        this.#description = description;
        this.constructor.reviews.push(this);
    }

    /* GETTERS */
    getId(){
        return this.#id;
    }
    getAuthor(){
        return this.#author;
    }
    getRating(){
        return this.#rating;
    }
    getDescription(){
        return this.#description;
    }

    /* SETTERS */
    setAuthor(name){
        this.#author = name;
    }
    setRating(rating){
        this.#rating = Review.ratingCheck(rating);
    }
    setDescription(description){
        this.#description = description;
    }

}

module.exports = Review;