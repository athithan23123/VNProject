var Component_ImageMap,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component_ImageMap = (function(superClass) {
  extend(Component_ImageMap, superClass);


  /**
  * Called if this object instance is restored from a data-bundle. It can be used
  * re-assign event-handler, anonymous functions, etc.
  *
  * @method onDataBundleRestore.
  * @param Object data - The data-bundle
  * @param gs.ObjectCodecContext context - The codec-context.
   */

  Component_ImageMap.prototype.onDataBundleRestore = function(data, context) {
    var bitmap, ground;
    this.setupEventHandlers();
    this.object.addObject(this.ground);
    bitmap = ResourceManager.getBitmap(ResourceManager.getPath(this.object.images[0]));
    ground = new gs.Bitmap(bitmap.width, bitmap.height);
    ground.blt(0, 0, bitmap, new Rect(0, 0, bitmap.width, bitmap.height));
    this.ground.bitmap = ground;
    return this.setupHotspots(this.hotspots);
  };


  /**
  * A component which turns a game object into an interactive image-map.
  *
  * @module gs
  * @class Component_ImageMap
  * @extends gs.Component_Visual
  * @memberof gs
   */

  function Component_ImageMap() {
    Component_ImageMap.__super__.constructor.apply(this, arguments);

    /**
    * The ground/base image.
    * @property ground
    * @type gs.Object_Picture
    * @default null
     */
    this.ground = null;

    /**
    * An array of different hotspots.
    * @property hotspots
    * @type gs.Object_Picture[]
    * @default null
     */
    this.hotspots = null;

    /**
    * The variable context used if a hotspot needs to deal with local variables.
    * @property variableContext
    * @type Object
    * @default null
     */
    this.variableContext = null;

    /**
    * Indicates if the image-map is active. An in-active image-map doesn't respond
    * to any input-event. Hover effects are still working.
    * @property active
    * @type boolean
    * @default yes
     */
    this.active = true;
  }


  /**
  * Adds event-handler for mouse/touch events to update the component only if
  * a user-action happened.
  *
  * @method setupEventHandlers
   */

  Component_ImageMap.prototype.setupEventHandlers = function() {
    gs.GlobalEventManager.offByOwner("mouseUp", this.object);
    return gs.GlobalEventManager.on("mouseUp", ((function(_this) {
      return function(e) {
        var contains, hotspot, j, len, ref, results;
        contains = Rect.contains(_this.object.dstRect.x, _this.object.dstRect.y, _this.object.dstRect.width, _this.object.dstRect.height, Input.Mouse.x - _this.object.origin.x, Input.Mouse.y - _this.object.origin.y);
        if (contains && _this.active) {
          ref = _this.hotspots;
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            hotspot = ref[j];
            if (_this.checkHotspotAction(hotspot)) {
              e.breakChain = true;
              if (hotspot.data.bindToSwitch) {
                hotspot.selected = !hotspot.selected;
              }
              results.push(_this.executeHotspotAction(hotspot));
            } else {
              results.push(void 0);
            }
          }
          return results;
        }
      };
    })(this)), null, this.object);
  };


  /**
  * Initializes the image-map. Creates the background and hotspots.
  *
  * @method setup
   */

  Component_ImageMap.prototype.setup = function() {
    var bitmap, ground;
    this.setupEventHandlers();
    if (this.object.images[0]) {
      bitmap = ResourceManager.getBitmap(ResourceManager.getPath(this.object.images[0]));
      if (bitmap.loaded) {
        bitmap.makeMutable();
        ground = new gs.Bitmap(bitmap.width, bitmap.height);
        ground.blt(0, 0, bitmap, new Rect(0, 0, bitmap.width, bitmap.height));
      }
    }
    this.ground = new gs.Object_Picture();
    this.ground.bitmap = ground;
    this.ground.image = null;
    this.ground.zIndex = this.object.zIndex;
    this.ground.imageHandling = gs.ImageHandling.CUSTOM_SIZE;
    this.object.addObject(this.ground);
    this.setupHotspots();
    if (ground != null) {
      this.ground.srcRect.set(0, 0, ground.width, ground.height);
      this.ground.dstRect.width = ground.width;
      this.ground.dstRect.height = ground.height;
    }
    this.ground.update();
    this.object.dstRect.width = this.ground.dstRect.width;
    return this.object.dstRect.height = this.ground.dstRect.height;
  };


  /**
  * Sets up the hotspots on the image-map. Each hotspot is a gs.Object_ImageMapHotspot
  * object.
  *
  * @method setupHotspots
   */

  Component_ImageMap.prototype.setupHotspots = function(hotspots) {
    return this.hotspots = this.object.hotspots.select((function(_this) {
      return function(v, i) {
        var picture, ref, ref1, ref2, ref3, ref4;
        if ((ref = _this.ground.bitmap) != null) {
          ref.clearRect(v.x, v.y, v.size.width, v.size.height);
        }
        picture = new gs.Object_ImageMapHotspot();
        picture.fixedSize = true;
        picture.srcRect = new Rect(v.x, v.y, v.size.width, v.size.height);
        picture.dstRect = new Rect(v.x, v.y, v.size.width, v.size.height);
        picture.imageHandling = gs.ImageHandling.CUSTOM_SIZE;
        picture.zIndex = _this.object.zIndex + 1;
        picture.selected = (ref1 = hotspots != null ? (ref2 = hotspots[i]) != null ? ref2.selected : void 0 : void 0) != null ? ref1 : false;
        picture.hovered = false;
        picture.enabled = (ref3 = hotspots != null ? (ref4 = hotspots[i]) != null ? ref4.enabled : void 0 : void 0) != null ? ref3 : true;
        picture.actions = v.data.actions;
        picture.data = v.data;
        picture.commonEventId = v.commonEventId;
        picture.anchor.set(0.5, 0.5);
        _this.object.addObject(picture);
        return picture;
      };
    })(this));
  };


  /**
  * Initializes the image-map. Frees ground image.
  *
  * @method dispose
   */

  Component_ImageMap.prototype.dispose = function() {
    var ref;
    Component_ImageMap.__super__.dispose.apply(this, arguments);
    gs.GlobalEventManager.offByOwner("mouseUp", this.object);
    return (ref = this.ground.bitmap) != null ? ref.dispose() : void 0;
  };


  /**
  * Executes a hotspot's associated action. Depending on the configuration a hotspot
  * can trigger a common-event or turn on a switch for example.
  *
  * @method executeHotspotAction
  * @param {gs.Object_Picture} hotspot - The hotspot where the image should be updated.
  * @protected
   */

  Component_ImageMap.prototype.executeHotspotAction = function(hotspot) {
    var domain, ref, ref1, ref2, ref3;
    GameManager.variableStore.setupTempVariables(this.variableContext);
    if (hotspot.data.bindToSwitch) {
      domain = GameManager.variableStore.domain;
      GameManager.variableStore.setBooleanValueTo(hotspot.data["switch"], hotspot.selected);
    }
    if (hotspot.data.bindValueTo) {
      domain = GameManager.variableStore.domain;
      GameManager.variableStore.setNumberValueTo(hotspot.data.bindValueVariable, hotspot.data.bindValue);
    }
    AudioManager.playSound(hotspot.data.onClickSound);
    switch (hotspot.data.action) {
      case 1:
        if ((ref = this.object.events) != null) {
          ref.emit("jumpTo", this.object, {
            label: hotspot.data.label
          });
        }
        break;
      case 2:
        if ((ref1 = this.object.events) != null) {
          ref1.emit("callCommonEvent", this.object, {
            commonEventId: hotspot.data.commonEventId,
            finish: hotspot.data.finish
          });
        }
        break;
      case 3:
        if ((ref2 = this.object.events) != null) {
          ref2.emit("action", this.object, {
            actions: hotspot.data.actions
          });
        }
    }
    if (hotspot.data.finish) {
      return (ref3 = this.object.events) != null ? ref3.emit("finish", this.object) : void 0;
    }
  };


  /**
  * Checks if a hotspot's associated action needs to be executed. Depending on the configuration a hotspot
  * can trigger a common-event or turn on a switch for example.
  *
  * @method updateHotspotAction
  * @param {gs.Object_Picture} hotspot - The hotspot where the image should be updated.
  * @return {boolean} If <b>true</b> the hotspot's action needs to be executed. Otherwise <b>false</b>.
  * @protected
   */

  Component_ImageMap.prototype.checkHotspotAction = function(hotspot) {
    var hovered, result;
    result = false;
    hovered = hotspot.dstRect.contains(Input.Mouse.x - hotspot.origin.x, Input.Mouse.y - hotspot.origin.y);
    if (hovered && hotspot.enabled && Input.Mouse.buttons[Input.Mouse.LEFT] === 2) {
      result = true;
    }
    return result;
  };


  /**
  * Updates a hotspot's image. Depending on the state the image of a hotspot can
  * change for example if the mouse hovers over a hotspot.
  *
  * @method updateHotspotImage
  * @param {gs.Object_Picture} hotspot - The hotspot where the image should be updated.
  * @param {boolean} hovered - Indicates if the hotspot is hovered by mouse/touch cursor.
  * @protected
   */

  Component_ImageMap.prototype.updateHotspotImage = function(hotspot, hovered) {
    var baseImage, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
    baseImage = hotspot.enabled ? this.object.images[2] || this.object.images[0] : this.object.images[0];
    if (hovered && hotspot.enabled) {
      if (hotspot.selected) {
        hotspot.imageFolder = ((ref = this.object.images[4]) != null ? ref.folderPath : void 0) || ((ref1 = this.object.images[1]) != null ? ref1.folderPath : void 0) || (baseImage != null ? baseImage.folderPath : void 0);
        return hotspot.image = ((ref2 = this.object.images[4]) != null ? ref2.name : void 0) || ((ref3 = this.object.images[1]) != null ? ref3.name : void 0) || (baseImage != null ? baseImage.name : void 0);
      } else {
        hotspot.imageFolder = ((ref4 = this.object.images[1]) != null ? ref4.folderPath : void 0) || (baseImage != null ? baseImage.folderPath : void 0);
        return hotspot.image = ((ref5 = this.object.images[1]) != null ? ref5.name : void 0) || (baseImage != null ? baseImage.name : void 0);
      }
    } else {
      if (hotspot.selected) {
        hotspot.imageFolder = ((ref6 = this.object.images[3]) != null ? ref6.folderPath : void 0) || (baseImage != null ? baseImage.folderPath : void 0);
        return hotspot.image = ((ref7 = this.object.images[3]) != null ? ref7.name : void 0) || (baseImage != null ? baseImage.name : void 0);
      } else {
        hotspot.imageFolder = baseImage != null ? baseImage.folderPath : void 0;
        return hotspot.image = baseImage != null ? baseImage.name : void 0;
      }
    }
  };


  /**
  * Updates a hotspot.
  *
  * @method updateHotspot
  * @param {gs.Object_Picture} hotspot - The hotspot to update.
  * @protected
   */

  Component_ImageMap.prototype.updateHotspot = function(hotspot) {
    var hovered;
    hotspot.visible = this.object.visible;
    hotspot.opacity = this.object.opacity;
    hotspot.tone.setFromObject(this.object.tone);
    hotspot.color.setFromObject(this.object.color);
    if (hotspot.data.bindEnabledState) {
      GameManager.variableStore.setupTempVariables(this.variableContext);
      hotspot.enabled = GameManager.variableStore.booleanValueOf(hotspot.data.enabledSwitch);
    }
    if (hotspot.data.bindToSwitch) {
      GameManager.variableStore.setupTempVariables(this.variableContext);
      hotspot.selected = GameManager.variableStore.booleanValueOf(hotspot.data["switch"]);
    }
    hovered = hotspot.dstRect.contains(Input.Mouse.x - hotspot.origin.x, Input.Mouse.y - hotspot.origin.y);
    if (hovered !== hotspot.hovered) {
      hotspot.hovered = hovered;
      if (hovered) {
        AudioManager.playSound(hotspot.data.onHoverSound);
      }
    }
    this.updateHotspotImage(hotspot, hovered);
    return hotspot.update();
  };


  /**
  * Updates the ground-image.
  *
  * @method updateGround
  * @protected
   */

  Component_ImageMap.prototype.updateGround = function() {
    this.ground.visible = this.object.visible;
    this.ground.opacity = this.object.opacity;
    this.ground.anchor.x = 0.5;
    this.ground.anchor.y = 0.5;
    this.ground.tone.setFromObject(this.object.tone);
    this.ground.color.setFromObject(this.object.color);
    return this.ground.update();
  };


  /**
  * Updates the image-map's ground and all hotspots.
  *
  * @method update
   */

  Component_ImageMap.prototype.update = function() {
    var hotspot, j, len, ref;
    Component_ImageMap.__super__.update.call(this);
    this.object.rIndex = this.ground.rIndex;
    this.updateGround();
    ref = this.hotspots;
    for (j = 0, len = ref.length; j < len; j++) {
      hotspot = ref[j];
      this.updateHotspot(hotspot);
    }
    return null;
  };

  return Component_ImageMap;

})(gs.Component_Visual);

gs.Component_ImageMap = Component_ImageMap;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BLElBQUEsa0JBQUE7RUFBQTs7O0FBQU07Ozs7QUFDRjs7Ozs7Ozs7OytCQVFBLG1CQUFBLEdBQXFCLFNBQUMsSUFBRCxFQUFPLE9BQVA7QUFDakIsUUFBQTtJQUFBLElBQUMsQ0FBQSxrQkFBRCxDQUFBO0lBQ0EsSUFBQyxDQUFBLE1BQU0sQ0FBQyxTQUFSLENBQWtCLElBQUMsQ0FBQSxNQUFuQjtJQUVBLE1BQUEsR0FBUyxlQUFlLENBQUMsU0FBaEIsQ0FBMEIsZUFBZSxDQUFDLE9BQWhCLENBQXdCLElBQUMsQ0FBQSxNQUFNLENBQUMsTUFBTyxDQUFBLENBQUEsQ0FBdkMsQ0FBMUI7SUFDVCxNQUFBLEdBQWEsSUFBQSxFQUFFLENBQUMsTUFBSCxDQUFVLE1BQU0sQ0FBQyxLQUFqQixFQUF3QixNQUFNLENBQUMsTUFBL0I7SUFDYixNQUFNLENBQUMsR0FBUCxDQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLE1BQWpCLEVBQTZCLElBQUEsSUFBQSxDQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsTUFBTSxDQUFDLEtBQWxCLEVBQXlCLE1BQU0sQ0FBQyxNQUFoQyxDQUE3QjtJQUNBLElBQUMsQ0FBQSxNQUFNLENBQUMsTUFBUixHQUFpQjtXQUVqQixJQUFDLENBQUEsYUFBRCxDQUFlLElBQUMsQ0FBQSxRQUFoQjtFQVRpQjs7O0FBV3JCOzs7Ozs7Ozs7RUFRYSw0QkFBQTtJQUNULHFEQUFBLFNBQUE7O0FBRUE7Ozs7OztJQU1BLElBQUMsQ0FBQSxNQUFELEdBQVU7O0FBRVY7Ozs7OztJQU1BLElBQUMsQ0FBQSxRQUFELEdBQVk7O0FBRVo7Ozs7OztJQU1BLElBQUMsQ0FBQSxlQUFELEdBQW1COztBQUVuQjs7Ozs7OztJQU9BLElBQUMsQ0FBQSxNQUFELEdBQVU7RUFsQ0Q7OztBQW9DYjs7Ozs7OzsrQkFNQSxrQkFBQSxHQUFvQixTQUFBO0lBQ2hCLEVBQUUsQ0FB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QUM7SUFDekIsSUFBQyxDQUFBLFlBQUQsQ0FBQTtBQUVBO0FBQUEsU0FBQSxxQ0FBQTs7TUFDSSxJQUFDLENBQUEsYUFBRCxDQUFlLE9BQWY7QUFESjtBQUdBLFdBQU87RUFUSDs7OztHQXJScUIsRUFBRSxDQUFDOztBQWdTcEMsRUFBRSxDQUFDLGtCQUFILEdBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4jXG4jICAgU2NyaXB0OiBDb21wb25lbnRfSW1hZ2VNYXBcbiNcbiMgICAkJENPUFlSSUdIVCQkXG4jXG4jID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNsYXNzIENvbXBvbmVudF9JbWFnZU1hcCBleHRlbmRzIGdzLkNvbXBvbmVudF9WaXN1YWxcbiAgICAjIyMqXG4gICAgKiBDYWxsZWQgaWYgdGhpcyBvYmplY3QgaW5zdGFuY2UgaXMgcmVzdG9yZWQgZnJvbSBhIGRhdGEtYnVuZGxlLiBJdCBjYW4gYmUgdXNlZFxuICAgICogcmUtYXNzaWduIGV2ZW50LWhhbmRsZXIsIGFub255bW91cyBmdW5jdGlvbnMsIGV0Yy5cbiAgICAqXG4gICAgKiBAbWV0aG9kIG9uRGF0YUJ1bmRsZVJlc3RvcmUuXG4gICAgKiBAcGFyYW0gT2JqZWN0IGRhdGEgLSBUaGUgZGF0YS1idW5kbGVcbiAgICAqIEBwYXJhbSBncy5PYmplY3RDb2RlY0NvbnRleHQgY29udGV4dCAtIFRoZSBjb2RlYy1jb250ZXh0LlxuICAgICMjI1xuICAgIG9uRGF0YUJ1bmRsZVJlc3RvcmU6IChkYXRhLCBjb250ZXh0KSAtPlxuICAgICAgICBAc2V0dXBFdmVudEhhbmRsZXJzKClcbiAgICAgICAgQG9iamVjdC5hZGRPYmplY3QoQGdyb3VuZClcblxuICAgICAgICBiaXRtYXAgPSBSZXNvdXJjZU1hbmFnZXIuZ2V0Qml0bWFwKFJlc291cmNlTWFuYWdlci5nZXRQYXRoKEBvYmplY3QuaW1hZ2VzWzBdKSlcbiAgICAgICAgZ3JvdW5kID0gbmV3IGdzLkJpdG1hcChiaXRtYXAud2lkdGgsIGJpdG1hcC5oZWlnaHQpXG4gICAgICAgIGdyb3VuZC5ibHQoMCwgMCwgYml0bWFwLCBuZXcgUmVjdCgwLCAwLCBiaXRtYXAud2lkdGgsIGJpdG1hcC5oZWlnaHQpKVxuICAgICAgICBAZ3JvdW5kLmJpdG1hcCA9IGdyb3VuZFxuXG4gICAgICAgIEBzZXR1cEhvdHNwb3RzKEBob3RzcG90cylcblxuICAgICMjIypcbiAgICAqIEEgY29tcG9uZW50IHdoaWNoIHR1cm5zIGEgZ2FtZSBvYmplY3QgaW50byBhbiBpbnRlcmFjdGl2ZSBpbWFnZS1tYXAuXG4gICAgKlxuICAgICogQG1vZHVsZSBnc1xuICAgICogQGNsYXNzIENvbXBvbmVudF9JbWFnZU1hcFxuICAgICogQGV4dGVuZHMgZ3MuQ29tcG9uZW50X1Zpc3VhbFxuICAgICogQG1lbWJlcm9mIGdzXG4gICAgIyMjXG4gICAgY29uc3RydWN0b3I6IC0+XG4gICAgICAgIHN1cGVyXG5cbiAgICAgICAgIyMjKlxuICAgICAgICAqIFRoZSBncm91bmQvYmFzZSBpbWFnZS5cbiAgICAgICAgKiBAcHJvcGVydHkgZ3JvdW5kXG4gICAgICAgICogQHR5cGUgZ3MuT2JqZWN0X1BpY3R1cmVcbiAgICAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICAgICMjI1xuICAgICAgICBAZ3JvdW5kID0gbnVsbFxuXG4gICAgICAgICMjIypcbiAgICAgICAgKiBBbiBhcnJheSBvZiBkaWZmZXJlbnQgaG90c3BvdHMuXG4gICAgICAgICogQHByb3BlcnR5IGhvdHNwb3RzXG4gICAgICAgICogQHR5cGUgZ3MuT2JqZWN0X1BpY3R1cmVbXVxuICAgICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgICAgIyMjXG4gICAgICAgIEBob3RzcG90cyA9IG51bGxcblxuICAgICAgICAjIyMqXG4gICAgICAgICogVGhlIHZhcmlhYmxlIGNvbnRleHQgdXNlZCBpZiBhIGhvdHNwb3QgbmVlZHMgdG8gZGVhbCB3aXRoIGxvY2FsIHZhcmlhYmxlcy5cbiAgICAgICAgKiBAcHJvcGVydHkgdmFyaWFibGVDb250ZXh0XG4gICAgICAgICogQHR5cGUgT2JqZWN0XG4gICAgICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAgICAjIyNcbiAgICAgICAgQHZhcmlhYmxlQ29udGV4dCA9IG51bGxcblxuICAgICAgICAjIyMqXG4gICAgICAgICogSW5kaWNhdGVzIGlmIHRoZSBpbWFnZS1tYXAgaXMgYWN0aXZlLiBBbiBpbi1hY3RpdmUgaW1hZ2UtbWFwIGRvZXNuJ3QgcmVzcG9uZFxuICAgICAgICAqIHRvIGFueSBpbnB1dC1ldmVudC4gSG92ZXIgZWZmZWN0cyBhcmUgc3RpbGwgd29ya2luZy5cbiAgICAgICAgKiBAcHJvcGVydHkgYWN0aXZlXG4gICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICAqIEBkZWZhdWx0IHllc1xuICAgICAgICAjIyNcbiAgICAgICAgQGFjdGl2ZSA9IHllc1xuXG4gICAgIyMjKlxuICAgICogQWRkcyBldmVudC1oYW5kbGVyIGZvciBtb3VzZS90b3VjaCBldmVudHMgdG8gdXBkYXRlIHRoZSBjb21wb25lbnQgb25seSBpZlxuICAgICogYSB1c2VyLWFjdGlvbiBoYXBwZW5lZC5cbiAgICAqXG4gICAgKiBAbWV0aG9kIHNldHVwRXZlbnRIYW5kbGVyc1xuICAgICMjI1xuICAgIHNldHVwRXZlbnRIYW5kbGVyczogLT5cbiAgICAgICAgZ3MuR2xvYmFsRXZlbnRNYW5hZ2VyLm9mZkJ5T3duZXIoXCJtb3VzZVVwXCIsIEBvYmplY3QpXG4gICAgICAgIGdzLkdsb2JhbEV2ZW50TWFuYWdlci5vbiBcIm1vdXNlVXBcIiwgKChlKSA9PlxuICAgICAgICAgICAgY29udGFpbnMgPSBSZWN0LmNvbnRhaW5zKEBvYmplY3QuZHN0UmVjdC54LCBAb2JqZWN0LmRzdFJlY3QueSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBAb2JqZWN0LmRzdFJlY3Qud2lkdGgsIEBvYmplY3QuZHN0UmVjdC5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXQuTW91c2UueCAtIEBvYmplY3Qub3JpZ2luLngsIElucHV0Lk1vdXNlLnkgLSBAb2JqZWN0Lm9yaWdpbi55KVxuXG4gICAgICAgICAgICBpZiBjb250YWlucyBhbmQgQGFjdGl2ZVxuICAgICAgICAgICAgICAgIGZvciBob3RzcG90IGluIEBob3RzcG90c1xuICAgICAgICAgICAgICAgICAgICBpZiBAY2hlY2tIb3RzcG90QWN0aW9uKGhvdHNwb3QpXG4gICAgICAgICAgICAgICAgICAgICAgICBlLmJyZWFrQ2hhaW4gPSB5ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIGhvdHNwb3QuZGF0YS5iaW5kVG9Td2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3RzcG90LnNlbGVjdGVkID0gIWhvdHNwb3Quc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleGVjdXRlSG90c3BvdEFjdGlvbihob3RzcG90KVxuXG4gICAgICAgICksIG51bGwsIEBvYmplY3RcblxuXG4gICAgIyMjKlxuICAgICogSW5pdGlhbGl6ZXMgdGhlIGltYWdlLW1hcC4gQ3JlYXRlcyB0aGUgYmFja2dyb3VuZCBhbmQgaG90c3BvdHMuXG4gICAgKlxuICAgICogQG1ldGhvZCBzZXR1cFxuICAgICMjI1xuICAgIHNldHVwOiAtPlxuICAgICAgICBAc2V0dXBFdmVudEhhbmRsZXJzKClcblxuICAgICAgICBpZiBAb2JqZWN0LmltYWdlc1swXVxuICAgICAgICAgICAgYml0bWFwID0gUmVzb3VyY2VNYW5hZ2VyLmdldEJpdG1hcChSZXNvdXJjZU1hbmFnZXIuZ2V0UGF0aChAb2JqZWN0LmltYWdlc1swXSkpXG4gICAgICAgICAgICBpZiBiaXRtYXAubG9hZGVkXG4gICAgICAgICAgICAgICAgYml0bWFwLm1ha2VNdXRhYmxlKClcbiAgICAgICAgICAgICAgICBncm91bmQgPSBuZXcgZ3MuQml0bWFwKGJpdG1hcC53aWR0aCwgYml0bWFwLmhlaWdodClcbiAgICAgICAgICAgICAgICBncm91bmQuYmx0KDAsIDAsIGJpdG1hcCwgbmV3IFJlY3QoMCwgMCwgYml0bWFwLndpZHRoLCBiaXRtYXAuaGVpZ2h0KSlcblxuICAgICAgICBAZ3JvdW5kID0gbmV3IGdzLk9iamVjdF9QaWN0dXJlKClcbiAgICAgICAgQGdyb3VuZC5iaXRtYXAgPSBncm91bmRcbiAgICAgICAgQGdyb3VuZC5pbWFnZSA9IG51bGxcbiAgICAgICAgQGdyb3VuZC56SW5kZXggPSBAb2JqZWN0LnpJbmRleFxuICAgICAgICBAZ3JvdW5kLmltYWdlSGFuZGxpbmcgPSBncy5JbWFnZUhhbmRsaW5nLkNVU1RPTV9TSVpFXG4gICAgICAgIEBvYmplY3QuYWRkT2JqZWN0KEBncm91bmQpXG5cbiAgICAgICAgQHNldHVwSG90c3BvdHMoKVxuXG4gICAgICAgIGlmIGdyb3VuZD9cbiAgICAgICAgICAgIEBncm91bmQuc3JjUmVjdC5zZXQoMCwgMCwgZ3JvdW5kLndpZHRoLCBncm91bmQuaGVpZ2h0KVxuICAgICAgICAgICAgQGdyb3VuZC5kc3RSZWN0LndpZHRoID0gZ3JvdW5kLndpZHRoXG4gICAgICAgICAgICBAZ3JvdW5kLmRzdFJlY3QuaGVpZ2h0ID0gZ3JvdW5kLmhlaWdodFxuICAgICAgICBAZ3JvdW5kLnVwZGF0ZSgpXG5cbiAgICAgICAgQG9iamVjdC5kc3RSZWN0LndpZHRoID0gQGdyb3VuZC5kc3RSZWN0LndpZHRoXG4gICAgICAgIEBvYmplY3QuZHN0UmVjdC5oZWlnaHQgPSBAZ3JvdW5kLmRzdFJlY3QuaGVpZ2h0XG5cbiAgICAjIyMqXG4gICAgKiBTZXRzIHVwIHRoZSBob3RzcG90cyBvbiB0aGUgaW1hZ2UtbWFwLiBFYWNoIGhvdHNwb3QgaXMgYSBncy5PYmplY3RfSW1hZ2VNYXBIb3RzcG90XG4gICAgKiBvYmplY3QuXG4gICAgKlxuICAgICogQG1ldGhvZCBzZXR1cEhvdHNwb3RzXG4gICAgIyMjXG4gICAgc2V0dXBIb3RzcG90czogKGhvdHNwb3RzKSAtPlxuICAgICAgICBAaG90c3BvdHMgPSBAb2JqZWN0LmhvdHNwb3RzLnNlbGVjdCAodiwgaSkgPT5cbiAgICAgICAgICAgIEBncm91bmQuYml0bWFwPy5jbGVhclJlY3Qodi54LCB2LnksIHYuc2l6ZS53aWR0aCwgdi5zaXplLmhlaWdodClcbiAgICAgICAgICAgIHBpY3R1cmUgPSBuZXcgZ3MuT2JqZWN0X0ltYWdlTWFwSG90c3BvdCgpXG4gICAgICAgICAgICBwaWN0dXJlLmZpeGVkU2l6ZSA9IHRydWVcbiAgICAgICAgICAgIHBpY3R1cmUuc3JjUmVjdCA9IG5ldyBSZWN0KHYueCwgdi55LCB2LnNpemUud2lkdGgsIHYuc2l6ZS5oZWlnaHQpXG4gICAgICAgICAgICBwaWN0dXJlLmRzdFJlY3QgPSBuZXcgUmVjdCh2LngsIHYueSwgdi5zaXplLndpZHRoLCB2LnNpemUuaGVpZ2h0KVxuICAgICAgICAgICAgcGljdHVyZS5pbWFnZUhhbmRsaW5nID0gZ3MuSW1hZ2VIYW5kbGluZy5DVVNUT01fU0laRVxuICAgICAgICAgICAgcGljdHVyZS56SW5kZXggPSBAb2JqZWN0LnpJbmRleCArIDFcbiAgICAgICAgICAgIHBpY3R1cmUuc2VsZWN0ZWQgPSBob3RzcG90cz9baV0/LnNlbGVjdGVkID8gbm9cbiAgICAgICAgICAgIHBpY3R1cmUuaG92ZXJlZCA9IG5vXG4gICAgICAgICAgICBwaWN0dXJlLmVuYWJsZWQgPSBob3RzcG90cz9baV0/LmVuYWJsZWQgPyB5ZXNcbiAgICAgICAgICAgIHBpY3R1cmUuYWN0aW9ucyA9IHYuZGF0YS5hY3Rpb25zXG4gICAgICAgICAgICBwaWN0dXJlLmRhdGEgPSB2LmRhdGFcbiAgICAgICAgICAgIHBpY3R1cmUuY29tbW9uRXZlbnRJZCA9IHYuY29tbW9uRXZlbnRJZFxuICAgICAgICAgICAgcGljdHVyZS5hbmNob3Iuc2V0KDAuNSwgMC41KVxuICAgICAgICAgICAgQG9iamVjdC5hZGRPYmplY3QocGljdHVyZSlcblxuICAgICAgICAgICAgcmV0dXJuIHBpY3R1cmVcblxuICAgICMjIypcbiAgICAqIEluaXRpYWxpemVzIHRoZSBpbWFnZS1tYXAuIEZyZWVzIGdyb3VuZCBpbWFnZS5cbiAgICAqXG4gICAgKiBAbWV0aG9kIGRpc3Bvc2VcbiAgICAjIyNcbiAgICBkaXNwb3NlOiAtPlxuICAgICAgICBzdXBlclxuICAgICAgICBncy5HbG9iYWxFdmVudE1hbmFnZXIub2ZmQnlPd25lcihcIm1vdXNlVXBcIiwgQG9iamVjdClcbiAgICAgICAgQGdyb3VuZC5iaXRtYXA/LmRpc3Bvc2UoKVxuXG4gICAgIyMjKlxuICAgICogRXhlY3V0ZXMgYSBob3RzcG90J3MgYXNzb2NpYXRlZCBhY3Rpb24uIERlcGVuZGluZyBvbiB0aGUgY29uZmlndXJhdGlvbiBhIGhvdHNwb3RcbiAgICAqIGNhbiB0cmlnZ2VyIGEgY29tbW9uLWV2ZW50IG9yIHR1cm4gb24gYSBzd2l0Y2ggZm9yIGV4YW1wbGUuXG4gICAgKlxuICAgICogQG1ldGhvZCBleGVjdXRlSG90c3BvdEFjdGlvblxuICAgICogQHBhcmFtIHtncy5PYmplY3RfUGljdHVyZX0gaG90c3BvdCAtIFRoZSBob3RzcG90IHdoZXJlIHRoZSBpbWFnZSBzaG91bGQgYmUgdXBkYXRlZC5cbiAgICAqIEBwcm90ZWN0ZWRcbiAgICAjIyNcbiAgICBleGVjdXRlSG90c3BvdEFjdGlvbjogKGhvdHNwb3QpIC0+XG4gICAgICAgIEdhbWVNYW5hZ2VyLnZhcmlhYmxlU3RvcmUuc2V0dXBUZW1wVmFyaWFibGVzKEB2YXJpYWJsZUNvbnRleHQpXG4gICAgICAgIGlmIGhvdHNwb3QuZGF0YS5iaW5kVG9Td2l0Y2hcbiAgICAgICAgICAgIGRvbWFpbiA9IEdhbWVNYW5hZ2VyLnZhcmlhYmxlU3RvcmUuZG9tYWluXG4gICAgICAgICAgICBHYW1lTWFuYWdlci52YXJpYWJsZVN0b3JlLnNldEJvb2xlYW5WYWx1ZVRvKGhvdHNwb3QuZGF0YS5zd2l0Y2gsIGhvdHNwb3Quc2VsZWN0ZWQpXG4gICAgICAgIGlmIGhvdHNwb3QuZGF0YS5iaW5kVmFsdWVUb1xuICAgICAgICAgICAgZG9tYWluID0gR2FtZU1hbmFnZXIudmFyaWFibGVTdG9yZS5kb21haW5cbiAgICAgICAgICAgIEdhbWVNYW5hZ2VyLnZhcmlhYmxlU3RvcmUuc2V0TnVtYmVyVmFsdWVUbyhob3RzcG90LmRhdGEuYmluZFZhbHVlVmFyaWFibGUsIGhvdHNwb3QuZGF0YS5iaW5kVmFsdWUpXG5cbiAgICAgICAgQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChob3RzcG90LmRhdGEub25DbGlja1NvdW5kKVxuICAgICAgICBzd2l0Y2ggaG90c3BvdC5kYXRhLmFjdGlvblxuICAgICAgICAgICAgd2hlbiAxICMgSnVtcCBUb1xuICAgICAgICAgICAgICAgIEBvYmplY3QuZXZlbnRzPy5lbWl0KFwianVtcFRvXCIsIEBvYmplY3QsIHsgbGFiZWw6IGhvdHNwb3QuZGF0YS5sYWJlbCB9KVxuICAgICAgICAgICAgd2hlbiAyICMgQ2FsbCBDb21tb24gRXZlbnRcbiAgICAgICAgICAgICAgICBAb2JqZWN0LmV2ZW50cz8uZW1pdChcImNhbGxDb21tb25FdmVudFwiLCBAb2JqZWN0LCB7IGNvbW1vbkV2ZW50SWQ6IGhvdHNwb3QuZGF0YS5jb21tb25FdmVudElkLCBmaW5pc2g6IGhvdHNwb3QuZGF0YS5maW5pc2ggfSlcbiAgICAgICAgICAgIHdoZW4gMyAjIFVJIEFjdGlvblxuICAgICAgICAgICAgICAgIEBvYmplY3QuZXZlbnRzPy5lbWl0KFwiYWN0aW9uXCIsIEBvYmplY3QsIHsgYWN0aW9uczogaG90c3BvdC5kYXRhLmFjdGlvbnMgfSlcblxuICAgICAgICBpZiBob3RzcG90LmRhdGEuZmluaXNoXG4gICAgICAgICAgICBAb2JqZWN0LmV2ZW50cz8uZW1pdChcImZpbmlzaFwiLCBAb2JqZWN0KVxuXG5cbiAgICAjIyMqXG4gICAgKiBDaGVja3MgaWYgYSBob3RzcG90J3MgYXNzb2NpYXRlZCBhY3Rpb24gbmVlZHMgdG8gYmUgZXhlY3V0ZWQuIERlcGVuZGluZyBvbiB0aGUgY29uZmlndXJhdGlvbiBhIGhvdHNwb3RcbiAgICAqIGNhbiB0cmlnZ2VyIGEgY29tbW9uLWV2ZW50IG9yIHR1cm4gb24gYSBzd2l0Y2ggZm9yIGV4YW1wbGUuXG4gICAgKlxuICAgICogQG1ldGhvZCB1cGRhdGVIb3RzcG90QWN0aW9uXG4gICAgKiBAcGFyYW0ge2dzLk9iamVjdF9QaWN0dXJlfSBob3RzcG90IC0gVGhlIGhvdHNwb3Qgd2hlcmUgdGhlIGltYWdlIHNob3VsZCBiZSB1cGRhdGVkLlxuICAgICogQHJldHVybiB7Ym9vbGVhbn0gSWYgPGI+dHJ1ZTwvYj4gdGhlIGhvdHNwb3QncyBhY3Rpb24gbmVlZHMgdG8gYmUgZXhlY3V0ZWQuIE90aGVyd2lzZSA8Yj5mYWxzZTwvYj4uXG4gICAgKiBAcHJvdGVjdGVkXG4gICAgIyMjXG4gICAgY2hlY2tIb3RzcG90QWN0aW9uOiAoaG90c3BvdCkgLT5cbiAgICAgICAgcmVzdWx0ID0gbm9cbiAgICAgICAgaG92ZXJlZCA9IGhvdHNwb3QuZHN0UmVjdC5jb250YWlucyhJbnB1dC5Nb3VzZS54IC0gaG90c3BvdC5vcmlnaW4ueCwgSW5wdXQuTW91c2UueSAtIGhvdHNwb3Qub3JpZ2luLnkpXG5cbiAgICAgICAgaWYgaG92ZXJlZCBhbmQgaG90c3BvdC5lbmFibGVkIGFuZCBJbnB1dC5Nb3VzZS5idXR0b25zW0lucHV0Lk1vdXNlLkxFRlRdID09IDJcbiAgICAgICAgICAgIHJlc3VsdCA9IHllc1xuXG4gICAgICAgIHJldHVybiByZXN1bHRcblxuICAgICMjIypcbiAgICAqIFVwZGF0ZXMgYSBob3RzcG90J3MgaW1hZ2UuIERlcGVuZGluZyBvbiB0aGUgc3RhdGUgdGhlIGltYWdlIG9mIGEgaG90c3BvdCBjYW5cbiAgICAqIGNoYW5nZSBmb3IgZXhhbXBsZSBpZiB0aGUgbW91c2UgaG92ZXJzIG92ZXIgYSBob3RzcG90LlxuICAgICpcbiAgICAqIEBtZXRob2QgdXBkYXRlSG90c3BvdEltYWdlXG4gICAgKiBAcGFyYW0ge2dzLk9iamVjdF9QaWN0dXJlfSBob3RzcG90IC0gVGhlIGhvdHNwb3Qgd2hlcmUgdGhlIGltYWdlIHNob3VsZCBiZSB1cGRhdGVkLlxuICAgICogQHBhcmFtIHtib29sZWFufSBob3ZlcmVkIC0gSW5kaWNhdGVzIGlmIHRoZSBob3RzcG90IGlzIGhvdmVyZWQgYnkgbW91c2UvdG91Y2ggY3Vyc29yLlxuICAgICogQHByb3RlY3RlZFxuICAgICMjI1xuICAgIHVwZGF0ZUhvdHNwb3RJbWFnZTogKGhvdHNwb3QsIGhvdmVyZWQpIC0+XG4gICAgICAgIGJhc2VJbWFnZSA9IGlmIGhvdHNwb3QuZW5hYmxlZCB0aGVuIEBvYmplY3QuaW1hZ2VzWzJdIHx8IEBvYmplY3QuaW1hZ2VzWzBdIGVsc2UgQG9iamVjdC5pbWFnZXNbMF1cbiAgICAgICAgaWYgaG92ZXJlZCBhbmQgaG90c3BvdC5lbmFibGVkXG4gICAgICAgICAgICBpZiBob3RzcG90LnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgaG90c3BvdC5pbWFnZUZvbGRlciA9ICBAb2JqZWN0LmltYWdlc1s0XT8uZm9sZGVyUGF0aCB8fCBAb2JqZWN0LmltYWdlc1sxXT8uZm9sZGVyUGF0aCB8fCBiYXNlSW1hZ2U/LmZvbGRlclBhdGhcbiAgICAgICAgICAgICAgICBob3RzcG90LmltYWdlID0gQG9iamVjdC5pbWFnZXNbNF0/Lm5hbWUgfHwgQG9iamVjdC5pbWFnZXNbMV0/Lm5hbWUgfHwgYmFzZUltYWdlPy5uYW1lXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgaG90c3BvdC5pbWFnZUZvbGRlciA9ICBAb2JqZWN0LmltYWdlc1sxXT8uZm9sZGVyUGF0aCB8fCBiYXNlSW1hZ2U/LmZvbGRlclBhdGhcbiAgICAgICAgICAgICAgICBob3RzcG90LmltYWdlID0gQG9iamVjdC5pbWFnZXNbMV0/Lm5hbWUgfHwgYmFzZUltYWdlPy5uYW1lXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGlmIGhvdHNwb3Quc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICBob3RzcG90LmltYWdlRm9sZGVyID0gIEBvYmplY3QuaW1hZ2VzWzNdPy5mb2xkZXJQYXRoIHx8IGJhc2VJbWFnZT8uZm9sZGVyUGF0aFxuICAgICAgICAgICAgICAgIGhvdHNwb3QuaW1hZ2UgPSBAb2JqZWN0LmltYWdlc1szXT8ubmFtZSB8fCBiYXNlSW1hZ2U/Lm5hbWVcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBob3RzcG90LmltYWdlRm9sZGVyID0gYmFzZUltYWdlPy5mb2xkZXJQYXRoXG4gICAgICAgICAgICAgICAgaG90c3BvdC5pbWFnZSA9IGJhc2VJbWFnZT8ubmFtZVxuXG5cbiAgICAjIyMqXG4gICAgKiBVcGRhdGVzIGEgaG90c3BvdC5cbiAgICAqXG4gICAgKiBAbWV0aG9kIHVwZGF0ZUhvdHNwb3RcbiAgICAqIEBwYXJhbSB7Z3MuT2JqZWN0X1BpY3R1cmV9IGhvdHNwb3QgLSBUaGUgaG90c3BvdCB0byB1cGRhdGUuXG4gICAgKiBAcHJvdGVjdGVkXG4gICAgIyMjXG4gICAgdXBkYXRlSG90c3BvdDogKGhvdHNwb3QpIC0+XG4gICAgICAgIGhvdHNwb3QudmlzaWJsZSA9IEBvYmplY3QudmlzaWJsZVxuICAgICAgICBob3RzcG90Lm9wYWNpdHkgPSBAb2JqZWN0Lm9wYWNpdHlcbiAgICAgICAgaG90c3BvdC50b25lLnNldEZyb21PYmplY3QoQG9iamVjdC50b25lKVxuICAgICAgICBob3RzcG90LmNvbG9yLnNldEZyb21PYmplY3QoQG9iamVjdC5jb2xvcilcbiAgICAgICAgaWYgaG90c3BvdC5kYXRhLmJpbmRFbmFibGVkU3RhdGVcbiAgICAgICAgICAgIEdhbWVNYW5hZ2VyLnZhcmlhYmxlU3RvcmUuc2V0dXBUZW1wVmFyaWFibGVzKEB2YXJpYWJsZUNvbnRleHQpXG4gICAgICAgICAgICBob3RzcG90LmVuYWJsZWQgPSBHYW1lTWFuYWdlci52YXJpYWJsZVN0b3JlLmJvb2xlYW5WYWx1ZU9mKGhvdHNwb3QuZGF0YS5lbmFibGVkU3dpdGNoKVxuICAgICAgICBpZiBob3RzcG90LmRhdGEuYmluZFRvU3dpdGNoXG4gICAgICAgICAgICBHYW1lTWFuYWdlci52YXJpYWJsZVN0b3JlLnNldHVwVGVtcFZhcmlhYmxlcyhAdmFyaWFibGVDb250ZXh0KVxuICAgICAgICAgICAgaG90c3BvdC5zZWxlY3RlZCA9IEdhbWVNYW5hZ2VyLnZhcmlhYmxlU3RvcmUuYm9vbGVhblZhbHVlT2YoaG90c3BvdC5kYXRhLnN3aXRjaClcbiAgICAgICAgaG92ZXJlZCA9IGhvdHNwb3QuZHN0UmVjdC5jb250YWlucyhJbnB1dC5Nb3VzZS54IC0gaG90c3BvdC5vcmlnaW4ueCwgSW5wdXQuTW91c2UueSAtIGhvdHNwb3Qub3JpZ2luLnkpXG4gICAgICAgIGlmIGhvdmVyZWQgIT0gaG90c3BvdC5ob3ZlcmVkXG4gICAgICAgICAgICBob3RzcG90LmhvdmVyZWQgPSBob3ZlcmVkXG4gICAgICAgICAgICBBdWRpb01hbmFnZXIucGxheVNvdW5kKGhvdHNwb3QuZGF0YS5vbkhvdmVyU291bmQpIGlmIGhvdmVyZWRcbiAgICAgICAgQHVwZGF0ZUhvdHNwb3RJbWFnZShob3RzcG90LCBob3ZlcmVkKVxuICAgICAgICBob3RzcG90LnVwZGF0ZSgpXG5cbiAgICAjIyMqXG4gICAgKiBVcGRhdGVzIHRoZSBncm91bmQtaW1hZ2UuXG4gICAgKlxuICAgICogQG1ldGhvZCB1cGRhdGVHcm91bmRcbiAgICAqIEBwcm90ZWN0ZWRcbiAgICAjIyNcbiAgICB1cGRhdGVHcm91bmQ6IC0+XG4gICAgICAgIEBncm91bmQudmlzaWJsZSA9IEBvYmplY3QudmlzaWJsZVxuICAgICAgICBAZ3JvdW5kLm9wYWNpdHkgPSBAb2JqZWN0Lm9wYWNpdHlcbiAgICAgICAgQGdyb3VuZC5hbmNob3IueCA9IDAuNVxuICAgICAgICBAZ3JvdW5kLmFuY2hvci55ID0gMC41XG4gICAgICAgIEBncm91bmQudG9uZS5zZXRGcm9tT2JqZWN0KEBvYmplY3QudG9uZSlcbiAgICAgICAgQGdyb3VuZC5jb2xvci5zZXRGcm9tT2JqZWN0KEBvYmplY3QuY29sb3IpXG4gICAgICAgIEBncm91bmQudXBkYXRlKClcblxuICAgICMjIypcbiAgICAqIFVwZGF0ZXMgdGhlIGltYWdlLW1hcCdzIGdyb3VuZCBhbmQgYWxsIGhvdHNwb3RzLlxuICAgICpcbiAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgIyMjXG4gICAgdXBkYXRlOiAtPlxuICAgICAgICBzdXBlcigpXG5cbiAgICAgICAgQG9iamVjdC5ySW5kZXggPSBAZ3JvdW5kLnJJbmRleFxuICAgICAgICBAdXBkYXRlR3JvdW5kKClcblxuICAgICAgICBmb3IgaG90c3BvdCBpbiBAaG90c3BvdHNcbiAgICAgICAgICAgIEB1cGRhdGVIb3RzcG90KGhvdHNwb3QpXG5cbiAgICAgICAgcmV0dXJuIG51bGxcblxuZ3MuQ29tcG9uZW50X0ltYWdlTWFwID0gQ29tcG9uZW50X0ltYWdlTWFwIl19
//# sourceURL=Component_ImageMap_113.js