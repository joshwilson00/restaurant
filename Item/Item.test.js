const { expect } = require('@jest/globals');
const Item = require('./Item');

describe('Item', ()=>{
    const pizza = new Item('Pizza', 15);
    test('An item should have an ID.', () => {
        expect(pizza.getId()).toBe(1);
    })
    test('should have a name.', () => {
        expect(pizza.getName()).toBe('Pizza');
    })
    test('should be able to get the cost.', () => {
        expect(pizza.getCost()).toBe(15);
    })
    test('should be able to change the name of the item.', () => {
        expect(pizza.getName()).toBe('Pizza');
        pizza.setName('Ham Pizza');
        expect(pizza.getName()).toBe('Ham Pizza');
    })
    test('should be able to change the price of an item.', () => {
        expect(pizza.getCost()).toBe(15);
        pizza.setCost(20);
        expect(pizza.getCost()).toBe(20);
    })
    
})