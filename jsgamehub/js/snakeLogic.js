export function updateFoodPosition() {
  return {
    x: Math.floor(Math.random() * 30) + 1,
    y: Math.floor(Math.random() * 30) + 1,
  };
}

export function moveSnake(snakeX, snakeY, velocityX, velocityY) {
  return {
    newX: snakeX + velocityX,
    newY: snakeY + velocityY,
  };
}

export function isCollisionWithWall(x, y) {
  return x <= 0 || x > 30 || y <= 0 || y > 30;
}

export function isSelfCollision(snakeBody) {
  const [headX, headY] = snakeBody[0];
  for (let i = 1; i < snakeBody.length; i++) {
    if (snakeBody[i][0] === headX && snakeBody[i][1] === headY) {
      return true;
    }
  }
  return false;
}
