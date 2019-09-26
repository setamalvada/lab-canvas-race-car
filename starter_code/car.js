class Car {
    constructor(ctx) {
      this.ctx = ctx
      this.x = this.ctx.canvas.width/2
      this.y0 = 380
      this.y = this.y0
      this.w = 50
      this.h0 = 100
      this.h = this.h0
      this.vx = 0
      this.img = new Image()
      this.img.src = "images/car.png"
      this.img.frames = 3
      this.img.frameIndex = 0
  
      this.tick = 0
  
      //this._setListeners()
  
      this.bullets = []
    }
  
    draw() {
        this.ctx.drawImage(
          this.img,
          this.img.frameIndex * this.img.width / 3,
          0,
          this.img.width,
          this.img.height,
          this.x,
          this.y,
          this.w,
          this.h
        );
    
        
      }
}