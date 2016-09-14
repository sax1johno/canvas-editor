import Ember from 'ember';

export default Ember.Mixin.create({
  /**
   * Called when the block content is updated by the user.
   *
   * @method
   */
  blockContentUpdatedLocally() {
    this.get('onBlockContentUpdatedLocally')(this.get('block'));
  },

  /**
   * Called when the block is replaced by the user.
   *
   * @method
   * @param {CanvasEditor.CanvasRealtime.Block} newBlock The block this block
   *   was replaced with
   */
  blockReplacedLocally(newBlock) {
    this.get('onBlockReplacedLocally')(this.get('block'), newBlock);
  },

  /**
   * Called when a new block was inserted locally after this block by the user.
   *
   * @method
   * @param {Array} content The content for the new block
   */
  newBlockInsertedLocally(content) {
    let newBlock;

    if (this.get('block.parent')) {
      newBlock = this.get('nextBlockConstructor').create({
        content,
        parent: this.get('block.parent')
      });
    } else {
      newBlock = this.get('nextBlockConstructor').create({ content });
    }

    this.get('onNewBlockInsertedLocally')(this.get('block'), newBlock);
  }
});