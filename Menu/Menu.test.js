const { expect } = require('@jest/globals');
const Menu = require('./Menu');
const Item = require('../Item/Item');
describe('Menu', () => {
    const Menu1 = new Menu('Menu1', 'https://e7.pngegg.com/pngimages/554/203/png-clipart-restaurant-computer-icons-food-menu-menu-text-eating.png');
    const pizza = new Item('Pizza', 15);
    const toast = new Item('Toast', 5);
    test('should have an ID', () => {
        expect(Menu1.getId()).toBe(1);
    })
    test('should return the name of the Menu.', () => {
        expect(Menu1.getName()).toBe('Menu1');
    })
    test('should return the URL for an icon.', () => {
        expect(Menu1.getIcon()).toBe('https://e7.pngegg.com/pngimages/554/203/png-clipart-restaurant-computer-icons-food-menu-menu-text-eating.png')
    })
    test('should return all the items.', () => {
        expect(Menu1.getItems()).toBeTruthy();
    })
    test('should be able to change the title.', () => {
        expect(Menu1.getName()).toBe('Menu1');
        Menu1.setTitle('New Menu');
        expect(Menu1.getName()).toBe('New Menu');
    })
    test('should be able to change the icon.', () => {
        expect(Menu1.getIcon()).toBe('https://e7.pngegg.com/pngimages/554/203/png-clipart-restaurant-computer-icons-food-menu-menu-text-eating.png')
        Menu1.setIcon('test');
        expect(Menu1.getIcon()).toBe('test');
    })
    test('should be able to add an item to the menu.', () => {
        expect(Menu1.getItems().length).toBe(0);
        Menu1.addItem(pizza);
        expect(Menu1.getItems().length).toBe(1);
    })
    test('should be able to remove an item.', () => {
        Menu1.addItem(toast);
        //Currently 2 items in the array.
        expect(Menu1.getItems().length).toBe(2);
        //Remove the item with id 1.
        Menu1.removeItem(1);
        //Should now only be 1 item in the array.
        expect(Menu1.getItems().length).toBe(1);
        //Since item with id 2 was removed, only id 1 should be in the array.
        expect(Menu1.getItems()[0].getId()).toBe(2);

    })
    
    
})
