define(['knockout', 'jquery'], function(ko, $) {
var templateFromUrlLoader = {
  loadTemplate: function(name, templateConfig, callback) {
    if (templateConfig.fromUrl) {
      var fullUrl = 'components/' + templateConfig.fromUrl + '?cacheAge=' + templateConfig.maxCacheAge;
      $.get(fullUrl, function(markupString) {
        ko.components.defaultLoader.loadTemplate(name, markupString, callback);
      });
    } else {
      callback(null);
    }
  }
};

ko.components.loaders.unshift(templateFromUrlLoader);
});
