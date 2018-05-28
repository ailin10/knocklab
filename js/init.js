require('./../css/main.less');
require('./templateLoader.js');

define(['knockout', './viewModel.js'], function(ko, viewModel) {
  ko.applyBindings(new viewModel());
});
