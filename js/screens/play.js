game.PlayScreen = me.ScreenObject.extend({
	/**
	*  action to perform on state change
	*/
	onResetEvent: function() {
		// reset the score
		game.data.score = 0;

		// Add our HUD to the game world, add it last so that this is on top of the rest.
		// Can also be forced by specifying a "Infinity" z value to the addChild function.

		me.game.world.addChild(new me.ColorLayer("background", "#FFFFFF"), 0);

		this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);

		me.game.world.addChild( me.pool.pull("anon1") );

	},

	/**
	*  action to perform when leaving this screen (state change)
	*/
	onDestroyEvent: function() {
		// remove the HUD from the game world
		me.game.world.removeChild(this.HUD);
	}
});
