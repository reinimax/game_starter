class Input {
    constructor() {
        this.keys = new Map();
        this.keymap = new Map();
        this.keymap.set('Escape', 'pause');
        document.addEventListener('keydown', this.addKeyPress.bind(this));
        document.addEventListener('keyup', this.removeKeyPress.bind(this));
    }

    addKeyPress(event) {
        console.log('keydown registered');
        if(this.keymap.has(event.key)) {
            this.keys.set(this.keymap.get(event.key), 'pressed');
        }
    }

    update() {
        this.keys.clear();
    }

    removeKeyPress(event) {
        console.log('keyup registered');
        if(this.keymap.has(event.key)) {
            this.keys.set(this.keymap.get(event.key), 'released');
        }
    }
}

export {Input};