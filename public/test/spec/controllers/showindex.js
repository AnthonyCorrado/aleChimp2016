'use strict';

describe('Controller: ShowindexCtrl', function () {

  // load the controller's module
  beforeEach(module('aleChimp2016App'));

  var ShowindexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShowindexCtrl = $controller('ShowindexCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ShowindexCtrl.awesomeThings.length).toBe(3);
  });
});
