// Generated by CoffeeScript 1.12.7
(function() {
  var Component_SceneBehavior,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Component_SceneBehavior = (function(superClass) {
    extend(Component_SceneBehavior, superClass);


    /**
    * The base class of all scene-behavior components. A scene-behavior component
    * define the logic of a single game scene.
    *
    * @module gs
    * @class Component_SceneBehavior
    * @extends gs.Component_Container
    * @memberof gs
     */

    function Component_SceneBehavior() {
      Component_SceneBehavior.__super__.constructor.call(this);
      this.loadingScreenVisible = false;
    }


    /**
    * Initializes the scene.
    *
    * @method initialize
    * @abstract
     */

    Component_SceneBehavior.prototype.initialize = function() {};


    /**
    * Disposes the scene.
    *
    * @method dispose
     */

    Component_SceneBehavior.prototype.dispose = function() {
      var ref;
      if (!GameManager.inLivePreview) {
        ResourceManager.dispose();
      }
      return (ref = this.object.events) != null ? ref.emit("dispose", this.object) : void 0;
    };


    /**
    * Called if the preparation and transition
    * is done and the is ready to start.
    *
    * @method start
     */

    Component_SceneBehavior.prototype.start = function() {};


    /**
    * Prepares all visual game object for the scene.
    *
    * @method prepareVisual
    * @abstract
     */

    Component_SceneBehavior.prototype.prepareVisual = function() {};


    /**
    * Prepares all data for the scene and loads the necessary graphic and audio resources.
    *
    * @method prepareData
    * @abstract
     */

    Component_SceneBehavior.prototype.prepareData = function() {};


    /**
    * Prepares for a screen-transition.
    *
    * @method prepareTransition
    * @param {Object} transitionData - Object containing additional data for the transition
    * like graphic, duration and vague.
     */

    Component_SceneBehavior.prototype.prepareTransition = function(transitionData) {
      var ref;
      if ((transitionData != null ? (ref = transitionData.graphic) != null ? ref.name.length : void 0 : void 0) > 0) {
        return ResourceManager.getBitmap(ResourceManager.getPath(transitionData.graphic));
      }
    };


    /**
    * Executes a screen-transition.
    *
    * @method transition
    * @param {Object} transitionData - Object containing additional data for the transition
    * like graphic, duration and vague.
     */

    Component_SceneBehavior.prototype.transition = function(transitionData) {
      var ref;
      if ($PARAMS.preview) {
        return Graphics.transition(0);
      } else {
        transitionData = transitionData || SceneManager.transitionData;
        if ((transitionData != null ? (ref = transitionData.graphic) != null ? ref.name.length : void 0 : void 0) > 0) {
          return Graphics.transition(transitionData.duration, ResourceManager.getBitmap("Graphics/Masks/" + transitionData.graphic.name), transitionData.vague || 30);
        } else {
          return Graphics.transition(transitionData.duration);
        }
      }
    };


    /**
    * Update the scene's content.
    *
    * @method updateContent
    * @abstract
     */

    Component_SceneBehavior.prototype.updateContent = function() {};


    /**
    * Sets up the loading screen.
    *
    * @method prepareLoadingScreen
     */

    Component_SceneBehavior.prototype.prepareLoadingScreen = function() {
      var bitmap;
      this.loadingBackgroundSprite = new gs.Sprite();
      if (gs.Platform.isWeb && !GameManager.inLivePreview) {
        bitmap = new gs.Bitmap(300, 100);
        bitmap.font.name = "Times New Roman";
        bitmap.drawText(0, 0, 300, 100, "NOW LOADING", 1, 1);
        this.loadingBackgroundSprite.x = (Graphics.width - bitmap.width) / 2;
        this.loadingBackgroundSprite.y = (Graphics.height - bitmap.height) / 2;
        this.loadingBackgroundSprite.bitmap = bitmap;
        return this.loadingBackgroundSprite.srcRect = new gs.Rect(0, 0, bitmap.width, bitmap.height);
      }
    };


    /**
    * Disposes the loading screen.
    *
    * @method clearLoadingScreen
     */

    Component_SceneBehavior.prototype.clearLoadingScreen = function() {
      if (this.loadingBackgroundSprite) {
        if (gs.Platform.isWeb && !GameManager.inLivePreview) {
          this.loadingBackgroundSprite.bitmap.dispose();
        }
        this.loadingBackgroundSprite.dispose();
        return this.loadingBackgroundSprite = null;
      }
    };


    /**
    * Called once per frame while a scene is loading. Can be used to display
    * loading-message/animation.
    *
    * @method loading
     */

    Component_SceneBehavior.prototype.loading = function() {
      if (this.loadingBackgroundSprite2 == null) {
        this.loadingBackgroundSprite2 = {};

        /*
        bitmap = new gs.Bitmap(300, 100)
        bitmap.drawText(0, 0, 300, 100, "NOW LOADING", 1, 1)
        @loadingBackgroundSprite = new gs.Sprite()
        @loadingBackgroundSprite.x = (Graphics.width - bitmap.width) / 2
        @loadingBackgroundSprite.y = (Graphics.height - bitmap.height) / 2
        @loadingBackgroundSprite.bitmap = bitmap
        @loadingBackgroundSprite.srcRect = new gs.Rect(0, 0, bitmap.width, bitmap.height)
         */
        if (Graphics.frozen) {
          return this.transition({
            duration: 0
          });
        }
      }
    };


    /**
    * Update the scene.
    *
    * @method update
     */

    Component_SceneBehavior.prototype.update = function() {
      Component_SceneBehavior.__super__.update.call(this);
      if (DataManager.documentsLoaded) {
        if (this.object.loadingData && !this.object.initialized) {
          this.prepareData();
        }
        this.object.loadingData = !DataManager.documentsLoaded;
      }
      if (!this.object.loadingData && ResourceManager.resourcesLoaded) {
        if (this.object.loadingResources && !this.object.initialized) {
          if (!this.loadingScreenVisible) {
            this.prepareVisual();
          }
          this.object.initialized = true;
        }
        this.object.loadingResources = false;
      }
      if (ResourceManager.resourcesLoaded && DataManager.documentsLoaded) {
        this.object.loading = false;
        if (Graphics.frozen && this.object.preparing) {
          return Graphics.update();
        } else {
          if (this.loadingScreenVisible) {
            if (this.object.loaded) {
              this.loadingScreenVisible = false;
              this.object.loaded = true;
              return this.updateContent();
            } else {
              if (!Graphics.frozen) {
                Graphics.freeze();
              }
              this.clearLoadingScreen();
              this.object.loaded = true;
              this.object.setup();
              this.prepareVisual();
              this.loadingScreenVisible = false;
              Graphics.update();
              return Input.update();
            }
          } else {
            this.clearLoadingScreen();
            if (this.object.preparing) {
              this.object.preparing = false;
              this.start();
            }
            Graphics.update();
            if (!Graphics.frozen) {
              this.updateContent();
            }
            return Input.update();
          }
        }
      } else {
        this.loadingScreenVisible = true;
        Graphics.update();
        Input.update();
        return this.loading();
      }
    };

    return Component_SceneBehavior;

  })(gs.Component_Container);

  gs.Component_SceneBehavior = Component_SceneBehavior;

}).call(this);
