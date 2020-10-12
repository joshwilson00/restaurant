const Review = require('./review');

describe('Review', () => {
    const review = new Review('Josh', 5, 'Really Good!');
    test('should return the id of the review.', () => {
        expect(review.getId()).toBe(1);
    })
    test('should return the author of the review', () => {
        expect(review.getAuthor()).toBe('Josh');
    })
    test('should return the rating of the review.', () => {
        expect(review.getRating()).toBe(5);
    })
    test('should return the description of the review.', () => {
        expect(review.getDescription()).toBe('Really Good!');
    })
    test('should be able to change the name of the author.', () => {
        expect(review.getAuthor()).toBe('Josh');
        review.setAuthor('Bob');
        expect(review.getAuthor()).toBe('Bob');
    })
    test('should be able to change the rating.', () => {
        expect(review.getRating()).toBe(5);
        review.setRating(4);
        expect(review.getRating()).toBe(4)
    })
    test('should not be able to have a rating above 5', () => {
        expect(()=>review.setRating(6)).toThrowError('Rating has to be between 0 and 5!');
    })
    test('should not be able to have a rating below 0', () => {
        expect(()=>review.setRating(-1)).toThrowError('Rating has to be between 0 and 5!');
    })
    test('should be able to edit the description.', () => {
        expect(review.getDescription()).toBe('Really Good!');
        review.setDescription('Great!');
        expect(review.getDescription()).toBe('Great!');
    })
    
    
    
})
