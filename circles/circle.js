class Circle {
    constructor(canvas, ctx, { radius, color, x, y }) {
      this.canvas = canvas;
      this.ctx = ctx;
      this.radius = Math.random() * 20 + 5;
      this.color = Circle.colors[parseInt(Math.random() * Circle.colors.length)];
      this.x = x;
      this.y = y;
      this.vx = Math.random() * 10 - 5;
      this.vy = 0.1 + Math.random() * 1;
    }
  
    draw() {
      const ctx = this.ctx;
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  
    move() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += 0.6;
      this.vy = Math.min(30, this.vy);
  
      this._checkCollision();
    }
  
    _checkCollision() {
      this.x = Math.min(this.x, this.canvas.width - this.radius);
      this.x = Math.max(this.x, this.radius);
      this.y = Math.min(this.y, this.canvas.height - this.radius);
      this.y = Math.max(this.y, this.radius);
  
      if (this.x == this.radius) {
        this.vx = Math.abs(this.vx);
      } else if (this.x == this.canvas.width - this.radius) {
        this.vx = -Math.abs(this.vx);
      }
  
      if (this.y == this.radius) {
        this.vy = 0.1;
      } else if (this.y == this.canvas.height - this.radius) {
        this.vy = -Math.abs(this.vy) * 0.8;
        this.radius = Math.max(0.1, this.radius * 0.9);
        this.color =
          Circle.colors[parseInt(Math.random() * Circle.colors.length)];
        if (this.vy > -5) this.vy = 0;
      }
    }
  }
  
  Circle.colors = ["orange", "dodgerblue", "pink", "red", "neon"];
  