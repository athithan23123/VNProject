// Generated by CoffeeScript 1.12.7
(function() {
  var LivePreviewInfo;

  LivePreviewInfo = (function() {

    /**
    * Stores internal preview-info if the game runs currently in Live-Preview.
    *
    * @module gs
    * @class LivePreviewInfo
    * @memberof gs
     */
    function LivePreviewInfo() {

      /**
      * Timer ID if a timeout for live-preview was configured to exit the game loop after a certain amount of time.
      * @property timeout
      * @type number
       */
      this.timeout = null;

      /**
      * Indicates if Live-Preview is currently waiting for the next user-action. (Selecting another command, etc.)
      * @property waiting
      * @type boolean
       */
      this.waiting = false;

      /**
      * Counts the amount of executed commands since the last
      * interpreter-pause(waiting, etc.). If its more than 500, the interpreter will automatically pause for 1 frame to
      * avoid that Live-Preview freezes the Editor in case of endless loops.
      * @property executedCommands
      * @type number
       */
      this.executedCommands = 0;

      /**
      * Indicates that the command to skip to has not been found.
      * @property commandNotFound
      * @type boolean
       */
      this.commandNotFound = false;
    }

    return LivePreviewInfo;

  })();

  gs.LivePreviewInfo = LivePreviewInfo;

}).call(this);
