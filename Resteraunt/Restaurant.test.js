const { expect } = require('@jest/globals');
const Restaurant = require('./Restaurant');
const Menu = require('../Menu/Menu');
const Item = require('../Item/Item');
const Review = require('../Review/review');

describe('Restartaunt', ()=>{
    const restaurant = new Restaurant('Restaurant');
    const menu1 = new Menu('Menu1', 'URL');
    const menu2 = new Menu('Menu2', 'URL');
    const review = new Review('Josh', 5, 'Good!');
    const review2 = new Review('Bob', 3, 'Good!!');
    test('getId should return the restaurant ID', () => {
        expect(restaurant.getId()).toBe(1);
    })
    test('getName should return the restaurants name.', () => {
        expect(restaurant.getName()).toBe('Restaurant');
    })
    test('getMenus should return the array of menus.', () => {
        expect(restaurant.getMenus()).toBeTruthy;
    })
    test('should return the array of reviews.', () => {
        expect(restaurant.getReviews()).toBeTruthy();
    })
    
    test('should be able to change the name of the restaurant.', () => {
        expect(restaurant.getName()).toBe('Restaurant');
        restaurant.setName('New Restaurant');
        expect(restaurant.getName()).toBe('New Restaurant');
    })
    
    test('addMenu should add a menu to the restaurant.', () => {
        expect(restaurant.getMenus().length).toBe(0);
        restaurant.addMenu(menu1);
        expect(restaurant.getMenus().length).toBe(1);
    })
    test('should be able to remove a menu.', () => {
        restaurant.addMenu(menu2);
        expect(restaurant.getMenus().length).toBe(2);
        restaurant.removeMenu(menu2.getId());
        expect(restaurant.getMenus().length).toBe(1);
        expect(restaurant.getMenus()[0].getId()).toBe(1)
    })
    test('should be able to add a review.', () => {
        expect(restaurant.getReviews().length).toBe(0);
        restaurant.addReview(review);
        expect(restaurant.getReviews().length).toBe(1);
    })
    test('should be able to remove a review.', () => {
        restaurant.addReview(review2);
        expect(restaurant.getReviews().length).toBe(2);
        restaurant.removeReview(review.getId());
        expect(restaurant.getReviews().length).toBe(1);
        expect(restaurant.getReviews()[0].getId()).toBe(2);
    })
    
    
    test('A restaurant should be able to see the items on the menus.', () => {
        const item1 = new Item('item1', 50);
        menu1.addItem(item1);
        expect(restaurant.getMenus()[0].getItems()[0].getName()).toBe('item1');
        expect(restaurant.getMenus()[0].getItems()[0].getCost()).toBe(50);
    })
    
    
})