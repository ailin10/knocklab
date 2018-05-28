define(['knockout'], function(ko) {

  ko.components.register('navigation', {
    viewModel: function(params) {
      this.text = ko.observable(params && params.initialText || '');
    },
    template: { fromUrl: 'nav.html', maxCacheAge: 1900 }
  });

  ko.components.register('color-card', {
    viewModel: function(params) {

      this.colorPalette = [{
        hex: '#00ffff',
        colorVarName: '@static-color-aqua',
        colorClassName: 'color-static-aqua'
      }, {
        hex: '#ff0000',
        colorVarName: '@static-color-red',
        colorClassName: 'color-static-aqua'
      }];

    },
    template: { fromUrl: 'color-card.html', maxCacheAge: 1900 }
  });

  return function viewModel() {
    this.colorPalette = [{
      hex: '#00ffff',
      varName: '@static-color-aqua'
    }, {
      hex: '#ff0000',
      varName: '@static-color-red'
    }];
  };
});
