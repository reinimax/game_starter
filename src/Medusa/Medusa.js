class Medusa {
    constructor() {
        this.spritesheet = new Image();
        this.spritesheet.src = 'assets/Medusa.png';
        this.spriteRows = 36;
        this.frame = 0;
        this.singleSpriteWidth = 8748 / 36;
        this.singleSpriteHeight = 197;
        // Random coordinatas on the canvas.
        this.x = 100;
        this.y = 100;
    }

    update() {
        if (this.frame < this.spriteRows - 1) {
            this.frame++;
        } else {
            this.frame = 0;
        }
    }

    render(ctx) {
        ctx.drawImage(this.spritesheet, this.singleSpriteWidth * this.frame, 0, this.singleSpriteWidth, this.singleSpriteHeight,
            this.x, this.y, this.singleSpriteWidth, this.singleSpriteHeight);
    }
}

export { Medusa };