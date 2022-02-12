let gameloop = new GameLoop();
let ball = new Ball();

window.onload = function () {
  gameloop.start();
};

gameloop.init = function () {
  console.log("Todo, init game objects");
  ball.init(gameloop.cnv);
};

gameloop.update = function () {
  console.log("todo, update game objects");
  ball.update(gameloop.cnv);
};

gameloop.render = function () {
  console.log("Todo, render game objects");
  gameloop.ctx.fillStyle = "#1bafdb";
  gameloop.ctx.fillRect(0, 0, gameloop.cnv.width, gameloop.cnv.height);
  ball.render(gameloop.ctx);
};
