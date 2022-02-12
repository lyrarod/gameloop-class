class Ball {
  constructor() {
    this.xpos = 0;
    this.ypos = 0;
    this.xvel = 3;
    this.yvel = 3;
    this.size = 30;
    this.color = "white";
  }

  init = (cnv) => {
    this.xpos = (cnv.width - this.size) / 2;
    this.ypos = (cnv.height - this.size) / 2;
  };

  render = (ctx) => {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.xpos, this.ypos, this.size, 0, Math.PI * 2, true);
    ctx.fill();
  };

  update = (cnv) => {
    this.xpos += this.xvel;
    this.ypos += this.yvel;
    this.checkForCollisions(cnv);
  };

  checkForCollisions = (cnv) => {
    if (this.xpos + this.size >= cnv.width || this.xpos - this.size <= 0) {
      this.xvel = -this.xvel;
    }
    if (this.ypos + this.size >= cnv.height || this.ypos - this.size <= 0) {
      this.yvel = -this.yvel;
    }
  };
}
