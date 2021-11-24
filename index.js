'use strict';

let Funnel = require('broccoli-funnel');
let mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: require('./package').name,

  // Override treeForPublic to be able to servce the service worker from /mockServiceWorker.js
  treeForPublic: function (tree) {
    let assetsTree = new Funnel('public');
    return mergeTrees([tree, assetsTree], {
      overwrite: true,
    });
  },
};
