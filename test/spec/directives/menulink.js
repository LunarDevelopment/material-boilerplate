'use strict';

describe('Directive: menuLink', function () {

  // load the directive's module
  beforeEach(module('materialBoilerplateApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<menu-link></menu-link>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the menuLink directive');
  }));
});
