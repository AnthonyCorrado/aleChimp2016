'use strict';

describe('Directive: validateEqual', function () {

  // load the directive's module
  beforeEach(module('aleChimp2016App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<validate-equal></validate-equal>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the validateEqual directive');
  }));
});
