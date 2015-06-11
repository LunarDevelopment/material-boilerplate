'use strict';

describe('Controller: BottomsheetCtrl', function () {

  // load the controller's module
  beforeEach(module('materialBoilerplateApp'));

  var BottomsheetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BottomsheetCtrl = $controller('BottomsheetCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
