import {
  updateFoodPosition,
  moveSnake,
  isCollisionWithWall,
  isSelfCollision
} from '../js/snakeLogic';

test('updateFoodPosition чи координати в межах', () => {
  const food = updateFoodPosition();
  expect(food.x).toBeGreaterThanOrEqual(1);
  expect(food.x).toBeLessThanOrEqual(30);
  expect(food.y).toBeGreaterThanOrEqual(1);
  expect(food.y).toBeLessThanOrEqual(30);
});

test('moveSnake чи оновлює координати коректно', () => {
  const result = moveSnake(5, 5, 1, 0);
  expect(result).toEqual({ newX: 6, newY: 5 });
});

test('isCollisionWithWall чи є зіткнення', () => {
  expect(isCollisionWithWall(0, 5)).toBe(true);
  expect(isCollisionWithWall(31, 5)).toBe(true);
  expect(isCollisionWithWall(5, 31)).toBe(true);
  expect(isCollisionWithWall(5, 5)).toBe(false);
});

test('isSelfCollision чи є зіткнення', () => {
  const snake = [[5, 5], [5, 6], [5, 5]];
  expect(isSelfCollision(snake)).toBe(true);

  const safeSnake = [[5, 5], [5, 6], [5, 7]];
  expect(isSelfCollision(safeSnake)).toBe(false);
});
