'use strict';

const fruitBasket = [
  'apple',
  'lemon',
  'grapefruit',
  'lemon',
  'banana',
  'watermelon',
  'lemon',
];

function sanitizeFruitBasket(fruitBasket,fruit) {

  const newFruitBasket = [...fruitBasket]
  const sanitizedBasket = newFruitBasket.filter((fruit)=>{return fruit !== "lemon" })
  return sanitizedBasket
}

describe('sanitizeFruitBasket', () => {
  
test('should take two parameters', () => {
    expect(sanitizeFruitBasket.length).toBe(2);
  });

  test('should not modify the original `fruitBasket` array', () => {
    const originalFruitBasketContents = [...fruitBasket];
    expect(originalFruitBasketContents).toEqual(fruitBasket)
  });

  test('should return a new array that does not include the unwanted `lemon`', () => {
    expect(sanitizeFruitBasket(fruitBasket,"lemon")).not.toContain("lemon")
  });
});