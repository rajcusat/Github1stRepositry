/*global QUnit*/

sap.ui.define([
	"mod_hw3/controller/hw2.controller"
], function (Controller) {
	"use strict";

	QUnit.module("hw2 Controller");

	QUnit.test("I should test the hw2 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
