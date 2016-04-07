'use strict';

new Polymer({
  is: 'loading-container',

  properties: {
    loading: {
      reflectToAttribute: true,
      type: Boolean,
      value: false
    }
  }

});
