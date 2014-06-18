var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var data = require("sdk/self").data;

var button = buttons.ActionButton({
  id: "squirt-link",
  label: "Squirt",
  icon: {
    "16": "./icon-16.png",
    "34": "./icon-32.png",
    "64": "./icon-64.png"
  },

  onClick: function() {
    tabs.activeTab.attach({
      contentScriptFile: [
        data.url("squirt-loader.js"),
        data.url("squirt.js")
      ]
    });
  }
});
