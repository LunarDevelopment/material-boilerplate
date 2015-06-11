'use strict';

describe('Filter: humanizeDoc', function () {

  // load the filter's module
  beforeEach(module('materialBoilerplateApp'));

  // initialize a new instance of the filter before each test
  var humanizeDoc;
  beforeEach(inject(function ($filter) {
    humanizeDoc = $filter('humanizeDoc');
  }));

  it('should return the input prefixed with "humanizeDoc filter:"', function () {
    var text = 'angularjs';
    expect(humanizeDoc(text)).toBe('humanizeDoc filter: ' + text);
  });

});
