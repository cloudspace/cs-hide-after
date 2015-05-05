/*global jasmine, describe, afterEach, beforeEach, it, expect, inject, module*/
'use strict';

describe('csHideAfter', function() {
  var scope, element, timeout, tag;
  
  beforeEach(module('csHideAfter'));
  
  beforeEach(inject(function ($compile, $rootScope, $timeout) {
    jasmine.clock().install();
	
	scope = $rootScope.$new();
	timeout = $timeout;

    tag = '<p cs-hide-after="3000">Foobar</p>';

    element = $compile(angular.element(tag))(scope);
    scope.$digest();
  }));
  
  afterEach(function() {
    jasmine.clock().uninstall();
  })

  describe('directive', function() {
	it('has a duration for the timeout', function() {
      expect(element.isolateScope().csHideAfter).toBeDefined();
	});
	
	it('will hide itself after the given amount of time', function() {
	  expect(element.attr('style')).toBeUndefined();
	  timeout.flush();
	  expect(element.attr('style').trim()).toEqual('display: none;');
	});
  });
});