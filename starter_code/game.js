    class Game {
      constructor(ctx) {
        this.ctx = ctx;
        
        this.bg = new Background(ctx)
        this.car = new Car(ctx)  

  }

  run() {
    this.intervalId = setInterval(() => {
      this._clear()
      this._draw()
      this._move()
     // this._clearObstacles()
    }, 1000 / 60)
  }

  _clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }



  _draw() {
    this.bg.draw()
    this.car.draw()

}

_move() {
  this.bg.move()
 
}

}


