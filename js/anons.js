
game.Anons = [];

game.Anons[0] = me.Sprite.extend({
  init : function () {
      var image = me.loader.getImage("anon1");

      // this._super(me.Sprite, "init", [
      //     me.game.viewport.width / 2 - image.width / 2,
      //     me.game.viewport.height - image.height - 20,
      //     { image : image }
      // ]);
			
      this._super(me.Sprite, "init", [0, 0, { image : image } ]);

  }
});
