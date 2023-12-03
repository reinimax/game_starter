class RunningState {
    constructor() {
        this.renderables = [];
        this.updateables = [];
        this.canTransition = true;
    }

    /** Executed when state is entered. */
    enter(game) {
        console.log('RunningState entered.');
    }

    /** Executed when state is exited. */
    exit(game) {
        console.log('RunningState exited.');
        this.canTransition = false;
    }

    execute(game) {
        if (game.input.keys.get('pause') === 'released') {
            this.canTransition = true;
        }

        if (game.input.keys.get('pause') === 'pressed' && this.canTransition) {
            game.transitionStateTo('paused');
        }

        for (const updateable of this.updateables) {
            updateable.update();
        }

        for (const renderable of this.renderables) {
            renderable.render(game.ctx);
        }
    }
}

export { RunningState }