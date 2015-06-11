'use strict';

describe('Filter: directiveBrackets', function () {

  // load the filter's module
  beforeEach(module('materialBoilerplateApp'));

  // initialize a new instance of the filter before each test
  var directiveBrackets;
  beforeEach(inject(function ($filter) {
    directiveBrackets = $filter('directiveBrackets');
  }));

  it('should return the input prefixed with "directiveBrackets filter:"', function () {
    var text = 'angularjs';
    expect(directiveBrackets(text)).toBe('directiveBrackets filter: ' + text);
  });

});
