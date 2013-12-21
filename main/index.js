'use strict';
var util = require('util');
var path = require('path');
var ScriptBase = require('../script-base.js');
var yeoman = require('yeoman-generator');


var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);

  // Get configuration
  this.config = this.options['config'];
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createAppFile = function createAppFile() {
  this.angularModules = this.env.options.angularDeps;
  this.ngRoute = this.env.options.ngRoute;
  this.appTemplate('app', path.join(this.config.source.path, '/app'));
};
