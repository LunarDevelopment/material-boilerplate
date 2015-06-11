'use strict';

describe('Filter: nospace', function () {

  // load the filter's module
  beforeEach(module('materialBoilerplateApp'));

  // initialize a new instance of the filter before each test
  var nospace;
  beforeEach(inject(function ($filter) {
    nospace = $filter('nospace');
  }));

  it('should return the input prefixed with "nospace filter:"', function () {
    var text = 'angularjs';
    expect(nospace(text)).toBe('nospace filter: ' + text);
  });

});
