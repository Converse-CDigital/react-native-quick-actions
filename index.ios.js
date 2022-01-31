import { NativeModules, NativeEventEmitter } from 'react-native';

var RNQuickActionManager = NativeModules.RNQuickActionManager;
var _initialAction = RNQuickActionManager && RNQuickActionManager.initialAction;

module.exports = {
  /**
   * An initial action will be available if the app was cold-launched
   * from an action.
   *
   * The first caller of `popInitialAction` will get the initial
   * action object, or `null`. Subsequent invocations will return null.
   */
  popInitialAction: function() {
    return new Promise((resolve) => {
      var initialAction = _initialAction;
      _initialAction = null;
      resolve(initialAction);
    })
  },

  quickActionEmitter: new NativeEventEmitter(RNQuickActionManager),
  quickActionEventName: 'quickActionShortcut',

  /**
   * Adds shortcut items to application
   */
  setShortcutItems: function(items) {
    RNQuickActionManager.setShortcutItems(items);
  },

  /**
   * Clears all previously set dynamic icons
   */
  clearShortcutItems: function() {
    RNQuickActionManager.clearShortcutItems();
  },

  /**
   * Check if quick actions are supported
   */
   isSupported: function(callback) {
     RNQuickActionManager.isSupported(callback);
   }
};
