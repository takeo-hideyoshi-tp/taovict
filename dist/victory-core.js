(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["VictoryCore"] = factory(require("react"));
	else
		root["VictoryCore"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _victoryAnimation=__webpack_require__(1);Object.defineProperty(exports,"VictoryAnimation",{enumerable:true,get:function get(){return _interopRequireDefault(_victoryAnimation).default;}});var _victoryContainer=__webpack_require__(12);Object.defineProperty(exports,"VictoryContainer",{enumerable:true,get:function get(){return _interopRequireDefault(_victoryContainer).
	default;}});var _victoryLabel=__webpack_require__(89);Object.defineProperty(exports,"VictoryLabel",{enumerable:true,get:function get(){return _interopRequireDefault(_victoryLabel).
	default;}});var _victoryTransition=__webpack_require__(198);Object.defineProperty(exports,"VictoryTransition",{enumerable:true,get:function get(){return _interopRequireDefault(_victoryTransition).
	default;}});var _victorySharedEvents=__webpack_require__(207);Object.defineProperty(exports,"VictorySharedEvents",{enumerable:true,get:function get(){return _interopRequireDefault(_victorySharedEvents).
	default;}});var _victoryClipContainer=__webpack_require__(208);Object.defineProperty(exports,"VictoryClipContainer",{enumerable:true,get:function get(){return _interopRequireDefault(_victoryClipContainer).
	default;}});var _victoryTheme=__webpack_require__(224);Object.defineProperty(exports,"VictoryTheme",{enumerable:true,get:function get(){return _interopRequireDefault(_victoryTheme).
	default;}});var _victoryTooltip=__webpack_require__(227);Object.defineProperty(exports,"VictoryTooltip",{enumerable:true,get:function get(){return _interopRequireDefault(_victoryTooltip).
	default;}});var _victoryPortal=__webpack_require__(228);Object.defineProperty(exports,"VictoryPortal",{enumerable:true,get:function get(){return _interopRequireDefault(_victoryPortal).
	default;}});var _portal=__webpack_require__(88);Object.defineProperty(exports,"Portal",{enumerable:true,get:function get(){return _interopRequireDefault(_portal).
	default;}});var _index=__webpack_require__(209);Object.defineProperty(exports,"Area",{enumerable:true,get:function get(){return _index.
	
	Area;}});Object.defineProperty(exports,"Bar",{enumerable:true,get:function get(){return _index.Bar;}});Object.defineProperty(exports,"Candle",{enumerable:true,get:function get(){return _index.Candle;}});Object.defineProperty(exports,"ClipPath",{enumerable:true,get:function get(){return _index.ClipPath;}});Object.defineProperty(exports,"Curve",{enumerable:true,get:function get(){return _index.Curve;}});Object.defineProperty(exports,"ErrorBar",{enumerable:true,get:function get(){return _index.ErrorBar;}});Object.defineProperty(exports,"Line",{enumerable:true,get:function get(){return _index.Line;}});Object.defineProperty(exports,"Point",{enumerable:true,get:function get(){return _index.Point;}});Object.defineProperty(exports,"Slice",{enumerable:true,get:function get(){return _index.Slice;}});Object.defineProperty(exports,"Voronoi",{enumerable:true,get:function get(){return _index.Voronoi;}});Object.defineProperty(exports,"Flyout",{enumerable:true,get:function get(){return _index.Flyout;}});var _index2=__webpack_require__(107);Object.defineProperty(exports,"addEvents",{enumerable:true,get:function get(){return _index2.
	
	
	addEvents;}});Object.defineProperty(exports,"Collection",{enumerable:true,get:function get(){return _index2.Collection;}});Object.defineProperty(exports,"Data",{enumerable:true,get:function get(){return _index2.Data;}});Object.defineProperty(exports,"DefaultTransitions",{enumerable:true,get:function get(){return _index2.DefaultTransitions;}});Object.defineProperty(exports,"Domain",{enumerable:true,get:function get(){return _index2.Domain;}});Object.defineProperty(exports,"Events",{enumerable:true,get:function get(){return _index2.Events;}});Object.defineProperty(exports,"Helpers",{enumerable:true,get:function get(){return _index2.Helpers;}});Object.defineProperty(exports,"Log",{enumerable:true,get:function get(){return _index2.Log;}});Object.defineProperty(exports,"PropTypes",{enumerable:true,get:function get(){return _index2.
	PropTypes;}});Object.defineProperty(exports,"Scale",{enumerable:true,get:function get(){return _index2.Scale;}});Object.defineProperty(exports,"Style",{enumerable:true,get:function get(){return _index2.Style;}});Object.defineProperty(exports,"TextSize",{enumerable:true,get:function get(){return _index2.TextSize;}});Object.defineProperty(exports,"Transitions",{enumerable:true,get:function get(){return _index2.Transitions;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);
	var _d3Ease=__webpack_require__(3);var d3Ease=_interopRequireWildcard(_d3Ease);
	var _d3Timer=__webpack_require__(4);
	var _util=__webpack_require__(5);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
	
	VictoryAnimation=function(_React$Component){_inherits(VictoryAnimation,_React$Component);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function VictoryAnimation(props){_classCallCheck(this,VictoryAnimation);var _this=_possibleConstructorReturn(this,(VictoryAnimation.__proto__||Object.getPrototypeOf(VictoryAnimation)).call(this,
	props));
	
	_this.state={
	data:Array.isArray(_this.props.data)?
	_this.props.data[0]:_this.props.data,
	animationInfo:{
	progress:0,
	animating:false}};
	
	
	_this.interpolator=null;
	_this.queue=Array.isArray(_this.props.data)?
	_this.props.data.slice(1):[];
	
	_this.ease=d3Ease[_this.toNewName(_this.props.easing)];
	
	
	
	
	_this.functionToBeRunEachFrame=_this.functionToBeRunEachFrame.bind(_this);return _this;
	}_createClass(VictoryAnimation,[{key:"componentDidMount",value:function componentDidMount()
	
	{
	
	if(this.queue.length){
	this.traverseQueue();
	}
	}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(
	
	
	nextProps){
	
	if(this.timer){
	this.timer.stop();
	}
	
	if(!Array.isArray(nextProps.data)){
	
	
	this.queue.length=0;
	this.queue.push(nextProps.data);
	
	}else{var _queue;
	
	(_queue=this.queue).push.apply(_queue,_toConsumableArray(nextProps.data));
	}
	
	this.traverseQueue();
	}},{key:"componentWillUnmount",value:function componentWillUnmount()
	
	{
	if(this.timer){
	this.timer.stop();
	}
	}},{key:"toNewName",value:function toNewName(
	
	ease){
	
	var capitalize=function capitalize(s){return s&&s[0].toUpperCase()+s.slice(1);};
	return"ease"+capitalize(ease);
	}},{key:"traverseQueue",value:function traverseQueue()
	
	
	{
	if(this.queue.length){
	
	var data=this.queue[0];
	
	this.interpolator=(0,_util.victoryInterpolator)(this.state.data,data);
	
	this.timer=(0,_d3Timer.timer)(this.functionToBeRunEachFrame,this.props.delay);
	}else if(this.props.onEnd){
	this.props.onEnd();
	}
	}},{key:"functionToBeRunEachFrame",value:function functionToBeRunEachFrame(
	
	elapsed){
	
	
	
	
	var step=elapsed/this.props.duration;
	
	if(step>=1){
	this.setState({
	data:this.interpolator(1),
	animationInfo:{
	progress:1,
	animating:false}});
	
	
	this.timer.stop();
	this.queue.shift();
	this.traverseQueue();
	return;
	}
	
	
	
	
	
	this.setState({
	data:this.interpolator(this.ease(step)),
	animationInfo:{
	progress:step,
	animating:step<1}});
	
	
	}},{key:"render",value:function render()
	{
	return this.props.children(this.state.data,this.state.animationInfo);
	}}]);return VictoryAnimation;}(_react2.default.Component);VictoryAnimation.displayName="VictoryAnimation";VictoryAnimation.propTypes={children:_react2.default.PropTypes.func,duration:_react2.default.PropTypes.number,easing:_react2.default.PropTypes.oneOf(["back","backIn","backOut","backInOut","bounce","bounceIn","bounceOut","bounceInOut","circle","circleIn","circleOut","circleInOut","linear","linearIn","linearOut","linearInOut","cubic","cubicIn","cubicOut","cubicInOut","elastic","elasticIn","elasticOut","elasticInOut","exp","expIn","expOut","expInOut","poly","polyIn","polyOut","polyInOut","quad","quadIn","quadOut","quadInOut","sin","sinIn","sinOut","sinInOut"]),delay:_react2.default.PropTypes.number,onEnd:_react2.default.PropTypes.func,data:_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object,_react2.default.PropTypes.array])};VictoryAnimation.defaultProps={duration:1000,easing:"quadInOut",delay:0,data:{}};exports.default=VictoryAnimation;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// https://d3js.org/d3-ease/ Version 1.0.1. Copyright 2016 Mike Bostock.
	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3 = global.d3 || {})));
	}(this, function (exports) { 'use strict';
	
	  function linear(t) {
	    return +t;
	  }
	
	  function quadIn(t) {
	    return t * t;
	  }
	
	  function quadOut(t) {
	    return t * (2 - t);
	  }
	
	  function quadInOut(t) {
	    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
	  }
	
	  function cubicIn(t) {
	    return t * t * t;
	  }
	
	  function cubicOut(t) {
	    return --t * t * t + 1;
	  }
	
	  function cubicInOut(t) {
	    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
	  }
	
	  var exponent = 3;
	
	  var polyIn = (function custom(e) {
	    e = +e;
	
	    function polyIn(t) {
	      return Math.pow(t, e);
	    }
	
	    polyIn.exponent = custom;
	
	    return polyIn;
	  })(exponent);
	
	  var polyOut = (function custom(e) {
	    e = +e;
	
	    function polyOut(t) {
	      return 1 - Math.pow(1 - t, e);
	    }
	
	    polyOut.exponent = custom;
	
	    return polyOut;
	  })(exponent);
	
	  var polyInOut = (function custom(e) {
	    e = +e;
	
	    function polyInOut(t) {
	      return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
	    }
	
	    polyInOut.exponent = custom;
	
	    return polyInOut;
	  })(exponent);
	
	  var pi = Math.PI;
	  var halfPi = pi / 2;
	  function sinIn(t) {
	    return 1 - Math.cos(t * halfPi);
	  }
	
	  function sinOut(t) {
	    return Math.sin(t * halfPi);
	  }
	
	  function sinInOut(t) {
	    return (1 - Math.cos(pi * t)) / 2;
	  }
	
	  function expIn(t) {
	    return Math.pow(2, 10 * t - 10);
	  }
	
	  function expOut(t) {
	    return 1 - Math.pow(2, -10 * t);
	  }
	
	  function expInOut(t) {
	    return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
	  }
	
	  function circleIn(t) {
	    return 1 - Math.sqrt(1 - t * t);
	  }
	
	  function circleOut(t) {
	    return Math.sqrt(1 - --t * t);
	  }
	
	  function circleInOut(t) {
	    return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
	  }
	
	  var b1 = 4 / 11;
	  var b2 = 6 / 11;
	  var b3 = 8 / 11;
	  var b4 = 3 / 4;
	  var b5 = 9 / 11;
	  var b6 = 10 / 11;
	  var b7 = 15 / 16;
	  var b8 = 21 / 22;
	  var b9 = 63 / 64;
	  var b0 = 1 / b1 / b1;
	  function bounceIn(t) {
	    return 1 - bounceOut(1 - t);
	  }
	
	  function bounceOut(t) {
	    return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
	  }
	
	  function bounceInOut(t) {
	    return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
	  }
	
	  var overshoot = 1.70158;
	
	  var backIn = (function custom(s) {
	    s = +s;
	
	    function backIn(t) {
	      return t * t * ((s + 1) * t - s);
	    }
	
	    backIn.overshoot = custom;
	
	    return backIn;
	  })(overshoot);
	
	  var backOut = (function custom(s) {
	    s = +s;
	
	    function backOut(t) {
	      return --t * t * ((s + 1) * t + s) + 1;
	    }
	
	    backOut.overshoot = custom;
	
	    return backOut;
	  })(overshoot);
	
	  var backInOut = (function custom(s) {
	    s = +s;
	
	    function backInOut(t) {
	      return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
	    }
	
	    backInOut.overshoot = custom;
	
	    return backInOut;
	  })(overshoot);
	
	  var tau = 2 * Math.PI;
	  var amplitude = 1;
	  var period = 0.3;
	  var elasticIn = (function custom(a, p) {
	    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
	
	    function elasticIn(t) {
	      return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
	    }
	
	    elasticIn.amplitude = function(a) { return custom(a, p * tau); };
	    elasticIn.period = function(p) { return custom(a, p); };
	
	    return elasticIn;
	  })(amplitude, period);
	
	  var elasticOut = (function custom(a, p) {
	    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
	
	    function elasticOut(t) {
	      return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
	    }
	
	    elasticOut.amplitude = function(a) { return custom(a, p * tau); };
	    elasticOut.period = function(p) { return custom(a, p); };
	
	    return elasticOut;
	  })(amplitude, period);
	
	  var elasticInOut = (function custom(a, p) {
	    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
	
	    function elasticInOut(t) {
	      return ((t = t * 2 - 1) < 0
	          ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
	          : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
	    }
	
	    elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
	    elasticInOut.period = function(p) { return custom(a, p); };
	
	    return elasticInOut;
	  })(amplitude, period);
	
	  exports.easeLinear = linear;
	  exports.easeQuad = quadInOut;
	  exports.easeQuadIn = quadIn;
	  exports.easeQuadOut = quadOut;
	  exports.easeQuadInOut = quadInOut;
	  exports.easeCubic = cubicInOut;
	  exports.easeCubicIn = cubicIn;
	  exports.easeCubicOut = cubicOut;
	  exports.easeCubicInOut = cubicInOut;
	  exports.easePoly = polyInOut;
	  exports.easePolyIn = polyIn;
	  exports.easePolyOut = polyOut;
	  exports.easePolyInOut = polyInOut;
	  exports.easeSin = sinInOut;
	  exports.easeSinIn = sinIn;
	  exports.easeSinOut = sinOut;
	  exports.easeSinInOut = sinInOut;
	  exports.easeExp = expInOut;
	  exports.easeExpIn = expIn;
	  exports.easeExpOut = expOut;
	  exports.easeExpInOut = expInOut;
	  exports.easeCircle = circleInOut;
	  exports.easeCircleIn = circleIn;
	  exports.easeCircleOut = circleOut;
	  exports.easeCircleInOut = circleInOut;
	  exports.easeBounce = bounceOut;
	  exports.easeBounceIn = bounceIn;
	  exports.easeBounceOut = bounceOut;
	  exports.easeBounceInOut = bounceInOut;
	  exports.easeBack = backInOut;
	  exports.easeBackIn = backIn;
	  exports.easeBackOut = backOut;
	  exports.easeBackInOut = backInOut;
	  exports.easeElastic = elasticOut;
	  exports.easeElasticIn = elasticIn;
	  exports.easeElasticOut = elasticOut;
	  exports.easeElasticInOut = elasticInOut;
	
	  Object.defineProperty(exports, '__esModule', { value: true });
	
	}));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// https://d3js.org/d3-timer/ Version 1.0.3. Copyright 2016 Mike Bostock.
	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3 = global.d3 || {})));
	}(this, (function (exports) { 'use strict';
	
	var frame = 0;
	var timeout = 0;
	var interval = 0;
	var pokeDelay = 1000;
	var taskHead;
	var taskTail;
	var clockLast = 0;
	var clockNow = 0;
	var clockSkew = 0;
	var clock = typeof performance === "object" && performance.now ? performance : Date;
	var setFrame = typeof requestAnimationFrame === "function" ? requestAnimationFrame : function(f) { setTimeout(f, 17); };
	function now() {
	  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
	}
	
	function clearNow() {
	  clockNow = 0;
	}
	
	function Timer() {
	  this._call =
	  this._time =
	  this._next = null;
	}
	
	Timer.prototype = timer.prototype = {
	  constructor: Timer,
	  restart: function(callback, delay, time) {
	    if (typeof callback !== "function") throw new TypeError("callback is not a function");
	    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
	    if (!this._next && taskTail !== this) {
	      if (taskTail) taskTail._next = this;
	      else taskHead = this;
	      taskTail = this;
	    }
	    this._call = callback;
	    this._time = time;
	    sleep();
	  },
	  stop: function() {
	    if (this._call) {
	      this._call = null;
	      this._time = Infinity;
	      sleep();
	    }
	  }
	};
	
	function timer(callback, delay, time) {
	  var t = new Timer;
	  t.restart(callback, delay, time);
	  return t;
	}
	
	function timerFlush() {
	  now(); // Get the current time, if not already set.
	  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
	  var t = taskHead, e;
	  while (t) {
	    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
	    t = t._next;
	  }
	  --frame;
	}
	
	function wake() {
	  clockNow = (clockLast = clock.now()) + clockSkew;
	  frame = timeout = 0;
	  try {
	    timerFlush();
	  } finally {
	    frame = 0;
	    nap();
	    clockNow = 0;
	  }
	}
	
	function poke() {
	  var now = clock.now(), delay = now - clockLast;
	  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
	}
	
	function nap() {
	  var t0, t1 = taskHead, t2, time = Infinity;
	  while (t1) {
	    if (t1._call) {
	      if (time > t1._time) time = t1._time;
	      t0 = t1, t1 = t1._next;
	    } else {
	      t2 = t1._next, t1._next = null;
	      t1 = t0 ? t0._next = t2 : taskHead = t2;
	    }
	  }
	  taskTail = t0;
	  sleep(time);
	}
	
	function sleep(time) {
	  if (frame) return; // Soonest alarm already set, or will be.
	  if (timeout) timeout = clearTimeout(timeout);
	  var delay = time - clockNow;
	  if (delay > 24) {
	    if (time < Infinity) timeout = setTimeout(wake, delay);
	    if (interval) interval = clearInterval(interval);
	  } else {
	    if (!interval) interval = setInterval(poke, pokeDelay);
	    frame = 1, setFrame(wake);
	  }
	}
	
	function timeout$1(callback, delay, time) {
	  var t = new Timer;
	  delay = delay == null ? 0 : +delay;
	  t.restart(function(elapsed) {
	    t.stop();
	    callback(elapsed + delay);
	  }, delay, time);
	  return t;
	}
	
	function interval$1(callback, delay, time) {
	  var t = new Timer, total = delay;
	  if (delay == null) return t.restart(callback, delay, time), t;
	  delay = +delay, time = time == null ? now() : +time;
	  t.restart(function tick(elapsed) {
	    elapsed += total;
	    t.restart(tick, total += delay, time);
	    callback(elapsed);
	  }, delay, time);
	  return t;
	}
	
	exports.now = now;
	exports.timer = timer;
	exports.timerFlush = timerFlush;
	exports.timeout = timeout$1;
	exports.interval = interval$1;
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	})));

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});exports.victoryInterpolator=exports.interpolateFunction=exports.interpolateImmediate=exports.isInterpolatable=undefined;var _isPlainObject2=__webpack_require__(6);var _isPlainObject3=_interopRequireDefault(_isPlainObject2);var _d3Interpolate=__webpack_require__(10);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	
	var isInterpolatable=exports.isInterpolatable=function isInterpolatable(obj){
	
	if(obj!==null){
	switch(typeof obj){
	case"undefined":
	return false;
	case"number":
	
	
	return!isNaN(obj)&&obj!==Number.POSITIVE_INFINITY&&obj!==Number.NEGATIVE_INFINITY;
	case"string":
	
	
	return true;
	case"boolean":
	
	
	
	return false;
	case"object":
	
	return obj instanceof Date||Array.isArray(obj)||(0,_isPlainObject3.default)(obj);
	case"function":
	
	
	
	
	
	
	
	
	
	
	return true;}
	
	}
	return false;
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var interpolateImmediate=exports.interpolateImmediate=function interpolateImmediate(a,b){var when=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;
	return function(t){
	return t<when?a:b;
	};
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	var interpolateFunction=exports.interpolateFunction=function interpolateFunction(a,b){
	return function(t){
	if(t>=1){
	return b;
	}
	return function(){
	
	var aval=typeof a==="function"?a.apply(this,arguments):a;
	var bval=typeof b==="function"?b.apply(this,arguments):b;
	return(0,_d3Interpolate.interpolate)(aval,bval)(t);
	};
	};
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var victoryInterpolator=exports.victoryInterpolator=function victoryInterpolator(a,b){
	
	
	
	if(a===b||!isInterpolatable(a)||!isInterpolatable(b)){
	return interpolateImmediate(a,b);
	}
	if(typeof a==="function"||typeof b==="function"){
	return interpolateFunction(a,b);
	}
	return(0,_d3Interpolate.interpolate)(a,b);
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(7),
	    isObjectLike = __webpack_require__(9);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || objectToString.call(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(8);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// https://d3js.org/d3-interpolate/ Version 1.1.1. Copyright 2016 Mike Bostock.
	(function (global, factory) {
	   true ? factory(exports, __webpack_require__(11)) :
	  typeof define === 'function' && define.amd ? define(['exports', 'd3-color'], factory) :
	  (factory((global.d3 = global.d3 || {}),global.d3));
	}(this, function (exports,d3Color) { 'use strict';
	
	  function basis(t1, v0, v1, v2, v3) {
	    var t2 = t1 * t1, t3 = t2 * t1;
	    return ((1 - 3 * t1 + 3 * t2 - t3) * v0
	        + (4 - 6 * t2 + 3 * t3) * v1
	        + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
	        + t3 * v3) / 6;
	  }
	
	  function basis$1(values) {
	    var n = values.length - 1;
	    return function(t) {
	      var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
	          v1 = values[i],
	          v2 = values[i + 1],
	          v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
	          v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
	      return basis((t - i / n) * n, v0, v1, v2, v3);
	    };
	  }
	
	  function basisClosed(values) {
	    var n = values.length;
	    return function(t) {
	      var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
	          v0 = values[(i + n - 1) % n],
	          v1 = values[i % n],
	          v2 = values[(i + 1) % n],
	          v3 = values[(i + 2) % n];
	      return basis((t - i / n) * n, v0, v1, v2, v3);
	    };
	  }
	
	  function constant(x) {
	    return function() {
	      return x;
	    };
	  }
	
	  function linear(a, d) {
	    return function(t) {
	      return a + t * d;
	    };
	  }
	
	  function exponential(a, b, y) {
	    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
	      return Math.pow(a + t * b, y);
	    };
	  }
	
	  function hue(a, b) {
	    var d = b - a;
	    return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
	  }
	
	  function gamma(y) {
	    return (y = +y) === 1 ? nogamma : function(a, b) {
	      return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
	    };
	  }
	
	  function nogamma(a, b) {
	    var d = b - a;
	    return d ? linear(a, d) : constant(isNaN(a) ? b : a);
	  }
	
	  var rgb$1 = (function rgbGamma(y) {
	    var color = gamma(y);
	
	    function rgb(start, end) {
	      var r = color((start = d3Color.rgb(start)).r, (end = d3Color.rgb(end)).r),
	          g = color(start.g, end.g),
	          b = color(start.b, end.b),
	          opacity = color(start.opacity, end.opacity);
	      return function(t) {
	        start.r = r(t);
	        start.g = g(t);
	        start.b = b(t);
	        start.opacity = opacity(t);
	        return start + "";
	      };
	    }
	
	    rgb.gamma = rgbGamma;
	
	    return rgb;
	  })(1);
	
	  function rgbSpline(spline) {
	    return function(colors) {
	      var n = colors.length,
	          r = new Array(n),
	          g = new Array(n),
	          b = new Array(n),
	          i, color;
	      for (i = 0; i < n; ++i) {
	        color = d3Color.rgb(colors[i]);
	        r[i] = color.r || 0;
	        g[i] = color.g || 0;
	        b[i] = color.b || 0;
	      }
	      r = spline(r);
	      g = spline(g);
	      b = spline(b);
	      color.opacity = 1;
	      return function(t) {
	        color.r = r(t);
	        color.g = g(t);
	        color.b = b(t);
	        return color + "";
	      };
	    };
	  }
	
	  var rgbBasis = rgbSpline(basis$1);
	  var rgbBasisClosed = rgbSpline(basisClosed);
	
	  function array(a, b) {
	    var nb = b ? b.length : 0,
	        na = a ? Math.min(nb, a.length) : 0,
	        x = new Array(nb),
	        c = new Array(nb),
	        i;
	
	    for (i = 0; i < na; ++i) x[i] = value(a[i], b[i]);
	    for (; i < nb; ++i) c[i] = b[i];
	
	    return function(t) {
	      for (i = 0; i < na; ++i) c[i] = x[i](t);
	      return c;
	    };
	  }
	
	  function date(a, b) {
	    var d = new Date;
	    return a = +a, b -= a, function(t) {
	      return d.setTime(a + b * t), d;
	    };
	  }
	
	  function number(a, b) {
	    return a = +a, b -= a, function(t) {
	      return a + b * t;
	    };
	  }
	
	  function object(a, b) {
	    var i = {},
	        c = {},
	        k;
	
	    if (a === null || typeof a !== "object") a = {};
	    if (b === null || typeof b !== "object") b = {};
	
	    for (k in b) {
	      if (k in a) {
	        i[k] = value(a[k], b[k]);
	      } else {
	        c[k] = b[k];
	      }
	    }
	
	    return function(t) {
	      for (k in i) c[k] = i[k](t);
	      return c;
	    };
	  }
	
	  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
	  var reB = new RegExp(reA.source, "g");
	  function zero(b) {
	    return function() {
	      return b;
	    };
	  }
	
	  function one(b) {
	    return function(t) {
	      return b(t) + "";
	    };
	  }
	
	  function string(a, b) {
	    var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
	        am, // current match in a
	        bm, // current match in b
	        bs, // string preceding current number in b, if any
	        i = -1, // index in s
	        s = [], // string constants and placeholders
	        q = []; // number interpolators
	
	    // Coerce inputs to strings.
	    a = a + "", b = b + "";
	
	    // Interpolate pairs of numbers in a & b.
	    while ((am = reA.exec(a))
	        && (bm = reB.exec(b))) {
	      if ((bs = bm.index) > bi) { // a string precedes the next number in b
	        bs = b.slice(bi, bs);
	        if (s[i]) s[i] += bs; // coalesce with previous string
	        else s[++i] = bs;
	      }
	      if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
	        if (s[i]) s[i] += bm; // coalesce with previous string
	        else s[++i] = bm;
	      } else { // interpolate non-matching numbers
	        s[++i] = null;
	        q.push({i: i, x: number(am, bm)});
	      }
	      bi = reB.lastIndex;
	    }
	
	    // Add remains of b.
	    if (bi < b.length) {
	      bs = b.slice(bi);
	      if (s[i]) s[i] += bs; // coalesce with previous string
	      else s[++i] = bs;
	    }
	
	    // Special optimization for only a single match.
	    // Otherwise, interpolate each of the numbers and rejoin the string.
	    return s.length < 2 ? (q[0]
	        ? one(q[0].x)
	        : zero(b))
	        : (b = q.length, function(t) {
	            for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
	            return s.join("");
	          });
	  }
	
	  function value(a, b) {
	    var t = typeof b, c;
	    return b == null || t === "boolean" ? constant(b)
	        : (t === "number" ? number
	        : t === "string" ? ((c = d3Color.color(b)) ? (b = c, rgb$1) : string)
	        : b instanceof d3Color.color ? rgb$1
	        : b instanceof Date ? date
	        : Array.isArray(b) ? array
	        : isNaN(b) ? object
	        : number)(a, b);
	  }
	
	  function round(a, b) {
	    return a = +a, b -= a, function(t) {
	      return Math.round(a + b * t);
	    };
	  }
	
	  var degrees = 180 / Math.PI;
	
	  var identity = {
	    translateX: 0,
	    translateY: 0,
	    rotate: 0,
	    skewX: 0,
	    scaleX: 1,
	    scaleY: 1
	  };
	
	  function decompose(a, b, c, d, e, f) {
	    var scaleX, scaleY, skewX;
	    if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
	    if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
	    if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
	    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
	    return {
	      translateX: e,
	      translateY: f,
	      rotate: Math.atan2(b, a) * degrees,
	      skewX: Math.atan(skewX) * degrees,
	      scaleX: scaleX,
	      scaleY: scaleY
	    };
	  }
	
	  var cssNode;
	  var cssRoot;
	  var cssView;
	  var svgNode;
	  function parseCss(value) {
	    if (value === "none") return identity;
	    if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
	    cssNode.style.transform = value;
	    value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
	    cssRoot.removeChild(cssNode);
	    value = value.slice(7, -1).split(",");
	    return decompose(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
	  }
	
	  function parseSvg(value) {
	    if (value == null) return identity;
	    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
	    svgNode.setAttribute("transform", value);
	    if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
	    value = value.matrix;
	    return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
	  }
	
	  function interpolateTransform(parse, pxComma, pxParen, degParen) {
	
	    function pop(s) {
	      return s.length ? s.pop() + " " : "";
	    }
	
	    function translate(xa, ya, xb, yb, s, q) {
	      if (xa !== xb || ya !== yb) {
	        var i = s.push("translate(", null, pxComma, null, pxParen);
	        q.push({i: i - 4, x: number(xa, xb)}, {i: i - 2, x: number(ya, yb)});
	      } else if (xb || yb) {
	        s.push("translate(" + xb + pxComma + yb + pxParen);
	      }
	    }
	
	    function rotate(a, b, s, q) {
	      if (a !== b) {
	        if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
	        q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: number(a, b)});
	      } else if (b) {
	        s.push(pop(s) + "rotate(" + b + degParen);
	      }
	    }
	
	    function skewX(a, b, s, q) {
	      if (a !== b) {
	        q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: number(a, b)});
	      } else if (b) {
	        s.push(pop(s) + "skewX(" + b + degParen);
	      }
	    }
	
	    function scale(xa, ya, xb, yb, s, q) {
	      if (xa !== xb || ya !== yb) {
	        var i = s.push(pop(s) + "scale(", null, ",", null, ")");
	        q.push({i: i - 4, x: number(xa, xb)}, {i: i - 2, x: number(ya, yb)});
	      } else if (xb !== 1 || yb !== 1) {
	        s.push(pop(s) + "scale(" + xb + "," + yb + ")");
	      }
	    }
	
	    return function(a, b) {
	      var s = [], // string constants and placeholders
	          q = []; // number interpolators
	      a = parse(a), b = parse(b);
	      translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
	      rotate(a.rotate, b.rotate, s, q);
	      skewX(a.skewX, b.skewX, s, q);
	      scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
	      a = b = null; // gc
	      return function(t) {
	        var i = -1, n = q.length, o;
	        while (++i < n) s[(o = q[i]).i] = o.x(t);
	        return s.join("");
	      };
	    };
	  }
	
	  var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
	  var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");
	
	  var rho = Math.SQRT2;
	  var rho2 = 2;
	  var rho4 = 4;
	  var epsilon2 = 1e-12;
	  function cosh(x) {
	    return ((x = Math.exp(x)) + 1 / x) / 2;
	  }
	
	  function sinh(x) {
	    return ((x = Math.exp(x)) - 1 / x) / 2;
	  }
	
	  function tanh(x) {
	    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
	  }
	
	  // p0 = [ux0, uy0, w0]
	  // p1 = [ux1, uy1, w1]
	  function zoom(p0, p1) {
	    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
	        ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
	        dx = ux1 - ux0,
	        dy = uy1 - uy0,
	        d2 = dx * dx + dy * dy,
	        i,
	        S;
	
	    // Special case for u0 ≅ u1.
	    if (d2 < epsilon2) {
	      S = Math.log(w1 / w0) / rho;
	      i = function(t) {
	        return [
	          ux0 + t * dx,
	          uy0 + t * dy,
	          w0 * Math.exp(rho * t * S)
	        ];
	      }
	    }
	
	    // General case.
	    else {
	      var d1 = Math.sqrt(d2),
	          b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
	          b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
	          r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
	          r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
	      S = (r1 - r0) / rho;
	      i = function(t) {
	        var s = t * S,
	            coshr0 = cosh(r0),
	            u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
	        return [
	          ux0 + u * dx,
	          uy0 + u * dy,
	          w0 * coshr0 / cosh(rho * s + r0)
	        ];
	      }
	    }
	
	    i.duration = S * 1000;
	
	    return i;
	  }
	
	  function hsl$1(hue) {
	    return function(start, end) {
	      var h = hue((start = d3Color.hsl(start)).h, (end = d3Color.hsl(end)).h),
	          s = nogamma(start.s, end.s),
	          l = nogamma(start.l, end.l),
	          opacity = nogamma(start.opacity, end.opacity);
	      return function(t) {
	        start.h = h(t);
	        start.s = s(t);
	        start.l = l(t);
	        start.opacity = opacity(t);
	        return start + "";
	      };
	    }
	  }
	
	  var hsl$2 = hsl$1(hue);
	  var hslLong = hsl$1(nogamma);
	
	  function lab$1(start, end) {
	    var l = nogamma((start = d3Color.lab(start)).l, (end = d3Color.lab(end)).l),
	        a = nogamma(start.a, end.a),
	        b = nogamma(start.b, end.b),
	        opacity = nogamma(start.opacity, end.opacity);
	    return function(t) {
	      start.l = l(t);
	      start.a = a(t);
	      start.b = b(t);
	      start.opacity = opacity(t);
	      return start + "";
	    };
	  }
	
	  function hcl$1(hue) {
	    return function(start, end) {
	      var h = hue((start = d3Color.hcl(start)).h, (end = d3Color.hcl(end)).h),
	          c = nogamma(start.c, end.c),
	          l = nogamma(start.l, end.l),
	          opacity = nogamma(start.opacity, end.opacity);
	      return function(t) {
	        start.h = h(t);
	        start.c = c(t);
	        start.l = l(t);
	        start.opacity = opacity(t);
	        return start + "";
	      };
	    }
	  }
	
	  var hcl$2 = hcl$1(hue);
	  var hclLong = hcl$1(nogamma);
	
	  function cubehelix$1(hue) {
	    return (function cubehelixGamma(y) {
	      y = +y;
	
	      function cubehelix(start, end) {
	        var h = hue((start = d3Color.cubehelix(start)).h, (end = d3Color.cubehelix(end)).h),
	            s = nogamma(start.s, end.s),
	            l = nogamma(start.l, end.l),
	            opacity = nogamma(start.opacity, end.opacity);
	        return function(t) {
	          start.h = h(t);
	          start.s = s(t);
	          start.l = l(Math.pow(t, y));
	          start.opacity = opacity(t);
	          return start + "";
	        };
	      }
	
	      cubehelix.gamma = cubehelixGamma;
	
	      return cubehelix;
	    })(1);
	  }
	
	  var cubehelix$2 = cubehelix$1(hue);
	  var cubehelixLong = cubehelix$1(nogamma);
	
	  function quantize(interpolator, n) {
	    var samples = new Array(n);
	    for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
	    return samples;
	  }
	
	  exports.interpolate = value;
	  exports.interpolateArray = array;
	  exports.interpolateBasis = basis$1;
	  exports.interpolateBasisClosed = basisClosed;
	  exports.interpolateDate = date;
	  exports.interpolateNumber = number;
	  exports.interpolateObject = object;
	  exports.interpolateRound = round;
	  exports.interpolateString = string;
	  exports.interpolateTransformCss = interpolateTransformCss;
	  exports.interpolateTransformSvg = interpolateTransformSvg;
	  exports.interpolateZoom = zoom;
	  exports.interpolateRgb = rgb$1;
	  exports.interpolateRgbBasis = rgbBasis;
	  exports.interpolateRgbBasisClosed = rgbBasisClosed;
	  exports.interpolateHsl = hsl$2;
	  exports.interpolateHslLong = hslLong;
	  exports.interpolateLab = lab$1;
	  exports.interpolateHcl = hcl$2;
	  exports.interpolateHclLong = hclLong;
	  exports.interpolateCubehelix = cubehelix$2;
	  exports.interpolateCubehelixLong = cubehelixLong;
	  exports.quantize = quantize;
	
	  Object.defineProperty(exports, '__esModule', { value: true });
	
	}));

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// https://d3js.org/d3-color/ Version 1.0.1. Copyright 2016 Mike Bostock.
	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3 = global.d3 || {})));
	}(this, function (exports) { 'use strict';
	
	  function define(constructor, factory, prototype) {
	    constructor.prototype = factory.prototype = prototype;
	    prototype.constructor = constructor;
	  }
	
	  function extend(parent, definition) {
	    var prototype = Object.create(parent.prototype);
	    for (var key in definition) prototype[key] = definition[key];
	    return prototype;
	  }
	
	  function Color() {}
	
	  var darker = 0.7;
	  var brighter = 1 / darker;
	
	  var reHex3 = /^#([0-9a-f]{3})$/;
	  var reHex6 = /^#([0-9a-f]{6})$/;
	  var reRgbInteger = /^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/;
	  var reRgbPercent = /^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/;
	  var reRgbaInteger = /^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/;
	  var reRgbaPercent = /^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/;
	  var reHslPercent = /^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/;
	  var reHslaPercent = /^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/;
	  var named = {
	    aliceblue: 0xf0f8ff,
	    antiquewhite: 0xfaebd7,
	    aqua: 0x00ffff,
	    aquamarine: 0x7fffd4,
	    azure: 0xf0ffff,
	    beige: 0xf5f5dc,
	    bisque: 0xffe4c4,
	    black: 0x000000,
	    blanchedalmond: 0xffebcd,
	    blue: 0x0000ff,
	    blueviolet: 0x8a2be2,
	    brown: 0xa52a2a,
	    burlywood: 0xdeb887,
	    cadetblue: 0x5f9ea0,
	    chartreuse: 0x7fff00,
	    chocolate: 0xd2691e,
	    coral: 0xff7f50,
	    cornflowerblue: 0x6495ed,
	    cornsilk: 0xfff8dc,
	    crimson: 0xdc143c,
	    cyan: 0x00ffff,
	    darkblue: 0x00008b,
	    darkcyan: 0x008b8b,
	    darkgoldenrod: 0xb8860b,
	    darkgray: 0xa9a9a9,
	    darkgreen: 0x006400,
	    darkgrey: 0xa9a9a9,
	    darkkhaki: 0xbdb76b,
	    darkmagenta: 0x8b008b,
	    darkolivegreen: 0x556b2f,
	    darkorange: 0xff8c00,
	    darkorchid: 0x9932cc,
	    darkred: 0x8b0000,
	    darksalmon: 0xe9967a,
	    darkseagreen: 0x8fbc8f,
	    darkslateblue: 0x483d8b,
	    darkslategray: 0x2f4f4f,
	    darkslategrey: 0x2f4f4f,
	    darkturquoise: 0x00ced1,
	    darkviolet: 0x9400d3,
	    deeppink: 0xff1493,
	    deepskyblue: 0x00bfff,
	    dimgray: 0x696969,
	    dimgrey: 0x696969,
	    dodgerblue: 0x1e90ff,
	    firebrick: 0xb22222,
	    floralwhite: 0xfffaf0,
	    forestgreen: 0x228b22,
	    fuchsia: 0xff00ff,
	    gainsboro: 0xdcdcdc,
	    ghostwhite: 0xf8f8ff,
	    gold: 0xffd700,
	    goldenrod: 0xdaa520,
	    gray: 0x808080,
	    green: 0x008000,
	    greenyellow: 0xadff2f,
	    grey: 0x808080,
	    honeydew: 0xf0fff0,
	    hotpink: 0xff69b4,
	    indianred: 0xcd5c5c,
	    indigo: 0x4b0082,
	    ivory: 0xfffff0,
	    khaki: 0xf0e68c,
	    lavender: 0xe6e6fa,
	    lavenderblush: 0xfff0f5,
	    lawngreen: 0x7cfc00,
	    lemonchiffon: 0xfffacd,
	    lightblue: 0xadd8e6,
	    lightcoral: 0xf08080,
	    lightcyan: 0xe0ffff,
	    lightgoldenrodyellow: 0xfafad2,
	    lightgray: 0xd3d3d3,
	    lightgreen: 0x90ee90,
	    lightgrey: 0xd3d3d3,
	    lightpink: 0xffb6c1,
	    lightsalmon: 0xffa07a,
	    lightseagreen: 0x20b2aa,
	    lightskyblue: 0x87cefa,
	    lightslategray: 0x778899,
	    lightslategrey: 0x778899,
	    lightsteelblue: 0xb0c4de,
	    lightyellow: 0xffffe0,
	    lime: 0x00ff00,
	    limegreen: 0x32cd32,
	    linen: 0xfaf0e6,
	    magenta: 0xff00ff,
	    maroon: 0x800000,
	    mediumaquamarine: 0x66cdaa,
	    mediumblue: 0x0000cd,
	    mediumorchid: 0xba55d3,
	    mediumpurple: 0x9370db,
	    mediumseagreen: 0x3cb371,
	    mediumslateblue: 0x7b68ee,
	    mediumspringgreen: 0x00fa9a,
	    mediumturquoise: 0x48d1cc,
	    mediumvioletred: 0xc71585,
	    midnightblue: 0x191970,
	    mintcream: 0xf5fffa,
	    mistyrose: 0xffe4e1,
	    moccasin: 0xffe4b5,
	    navajowhite: 0xffdead,
	    navy: 0x000080,
	    oldlace: 0xfdf5e6,
	    olive: 0x808000,
	    olivedrab: 0x6b8e23,
	    orange: 0xffa500,
	    orangered: 0xff4500,
	    orchid: 0xda70d6,
	    palegoldenrod: 0xeee8aa,
	    palegreen: 0x98fb98,
	    paleturquoise: 0xafeeee,
	    palevioletred: 0xdb7093,
	    papayawhip: 0xffefd5,
	    peachpuff: 0xffdab9,
	    peru: 0xcd853f,
	    pink: 0xffc0cb,
	    plum: 0xdda0dd,
	    powderblue: 0xb0e0e6,
	    purple: 0x800080,
	    rebeccapurple: 0x663399,
	    red: 0xff0000,
	    rosybrown: 0xbc8f8f,
	    royalblue: 0x4169e1,
	    saddlebrown: 0x8b4513,
	    salmon: 0xfa8072,
	    sandybrown: 0xf4a460,
	    seagreen: 0x2e8b57,
	    seashell: 0xfff5ee,
	    sienna: 0xa0522d,
	    silver: 0xc0c0c0,
	    skyblue: 0x87ceeb,
	    slateblue: 0x6a5acd,
	    slategray: 0x708090,
	    slategrey: 0x708090,
	    snow: 0xfffafa,
	    springgreen: 0x00ff7f,
	    steelblue: 0x4682b4,
	    tan: 0xd2b48c,
	    teal: 0x008080,
	    thistle: 0xd8bfd8,
	    tomato: 0xff6347,
	    turquoise: 0x40e0d0,
	    violet: 0xee82ee,
	    wheat: 0xf5deb3,
	    white: 0xffffff,
	    whitesmoke: 0xf5f5f5,
	    yellow: 0xffff00,
	    yellowgreen: 0x9acd32
	  };
	
	  define(Color, color, {
	    displayable: function() {
	      return this.rgb().displayable();
	    },
	    toString: function() {
	      return this.rgb() + "";
	    }
	  });
	
	  function color(format) {
	    var m;
	    format = (format + "").trim().toLowerCase();
	    return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
	        : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
	        : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
	        : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
	        : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
	        : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
	        : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
	        : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
	        : named.hasOwnProperty(format) ? rgbn(named[format])
	        : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
	        : null;
	  }
	
	  function rgbn(n) {
	    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
	  }
	
	  function rgba(r, g, b, a) {
	    if (a <= 0) r = g = b = NaN;
	    return new Rgb(r, g, b, a);
	  }
	
	  function rgbConvert(o) {
	    if (!(o instanceof Color)) o = color(o);
	    if (!o) return new Rgb;
	    o = o.rgb();
	    return new Rgb(o.r, o.g, o.b, o.opacity);
	  }
	
	  function rgb(r, g, b, opacity) {
	    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
	  }
	
	  function Rgb(r, g, b, opacity) {
	    this.r = +r;
	    this.g = +g;
	    this.b = +b;
	    this.opacity = +opacity;
	  }
	
	  define(Rgb, rgb, extend(Color, {
	    brighter: function(k) {
	      k = k == null ? brighter : Math.pow(brighter, k);
	      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
	    },
	    darker: function(k) {
	      k = k == null ? darker : Math.pow(darker, k);
	      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
	    },
	    rgb: function() {
	      return this;
	    },
	    displayable: function() {
	      return (0 <= this.r && this.r <= 255)
	          && (0 <= this.g && this.g <= 255)
	          && (0 <= this.b && this.b <= 255)
	          && (0 <= this.opacity && this.opacity <= 1);
	    },
	    toString: function() {
	      var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
	      return (a === 1 ? "rgb(" : "rgba(")
	          + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
	          + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
	          + Math.max(0, Math.min(255, Math.round(this.b) || 0))
	          + (a === 1 ? ")" : ", " + a + ")");
	    }
	  }));
	
	  function hsla(h, s, l, a) {
	    if (a <= 0) h = s = l = NaN;
	    else if (l <= 0 || l >= 1) h = s = NaN;
	    else if (s <= 0) h = NaN;
	    return new Hsl(h, s, l, a);
	  }
	
	  function hslConvert(o) {
	    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
	    if (!(o instanceof Color)) o = color(o);
	    if (!o) return new Hsl;
	    if (o instanceof Hsl) return o;
	    o = o.rgb();
	    var r = o.r / 255,
	        g = o.g / 255,
	        b = o.b / 255,
	        min = Math.min(r, g, b),
	        max = Math.max(r, g, b),
	        h = NaN,
	        s = max - min,
	        l = (max + min) / 2;
	    if (s) {
	      if (r === max) h = (g - b) / s + (g < b) * 6;
	      else if (g === max) h = (b - r) / s + 2;
	      else h = (r - g) / s + 4;
	      s /= l < 0.5 ? max + min : 2 - max - min;
	      h *= 60;
	    } else {
	      s = l > 0 && l < 1 ? 0 : h;
	    }
	    return new Hsl(h, s, l, o.opacity);
	  }
	
	  function hsl(h, s, l, opacity) {
	    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
	  }
	
	  function Hsl(h, s, l, opacity) {
	    this.h = +h;
	    this.s = +s;
	    this.l = +l;
	    this.opacity = +opacity;
	  }
	
	  define(Hsl, hsl, extend(Color, {
	    brighter: function(k) {
	      k = k == null ? brighter : Math.pow(brighter, k);
	      return new Hsl(this.h, this.s, this.l * k, this.opacity);
	    },
	    darker: function(k) {
	      k = k == null ? darker : Math.pow(darker, k);
	      return new Hsl(this.h, this.s, this.l * k, this.opacity);
	    },
	    rgb: function() {
	      var h = this.h % 360 + (this.h < 0) * 360,
	          s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
	          l = this.l,
	          m2 = l + (l < 0.5 ? l : 1 - l) * s,
	          m1 = 2 * l - m2;
	      return new Rgb(
	        hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
	        hsl2rgb(h, m1, m2),
	        hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
	        this.opacity
	      );
	    },
	    displayable: function() {
	      return (0 <= this.s && this.s <= 1 || isNaN(this.s))
	          && (0 <= this.l && this.l <= 1)
	          && (0 <= this.opacity && this.opacity <= 1);
	    }
	  }));
	
	  /* From FvD 13.37, CSS Color Module Level 3 */
	  function hsl2rgb(h, m1, m2) {
	    return (h < 60 ? m1 + (m2 - m1) * h / 60
	        : h < 180 ? m2
	        : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
	        : m1) * 255;
	  }
	
	  var deg2rad = Math.PI / 180;
	  var rad2deg = 180 / Math.PI;
	
	  var Kn = 18;
	  var Xn = 0.950470;
	  var Yn = 1;
	  var Zn = 1.088830;
	  var t0 = 4 / 29;
	  var t1 = 6 / 29;
	  var t2 = 3 * t1 * t1;
	  var t3 = t1 * t1 * t1;
	  function labConvert(o) {
	    if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
	    if (o instanceof Hcl) {
	      var h = o.h * deg2rad;
	      return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
	    }
	    if (!(o instanceof Rgb)) o = rgbConvert(o);
	    var b = rgb2xyz(o.r),
	        a = rgb2xyz(o.g),
	        l = rgb2xyz(o.b),
	        x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
	        y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.0721750 * l) / Yn),
	        z = xyz2lab((0.0193339 * b + 0.1191920 * a + 0.9503041 * l) / Zn);
	    return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
	  }
	
	  function lab(l, a, b, opacity) {
	    return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
	  }
	
	  function Lab(l, a, b, opacity) {
	    this.l = +l;
	    this.a = +a;
	    this.b = +b;
	    this.opacity = +opacity;
	  }
	
	  define(Lab, lab, extend(Color, {
	    brighter: function(k) {
	      return new Lab(this.l + Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
	    },
	    darker: function(k) {
	      return new Lab(this.l - Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
	    },
	    rgb: function() {
	      var y = (this.l + 16) / 116,
	          x = isNaN(this.a) ? y : y + this.a / 500,
	          z = isNaN(this.b) ? y : y - this.b / 200;
	      y = Yn * lab2xyz(y);
	      x = Xn * lab2xyz(x);
	      z = Zn * lab2xyz(z);
	      return new Rgb(
	        xyz2rgb( 3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
	        xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z),
	        xyz2rgb( 0.0556434 * x - 0.2040259 * y + 1.0572252 * z),
	        this.opacity
	      );
	    }
	  }));
	
	  function xyz2lab(t) {
	    return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
	  }
	
	  function lab2xyz(t) {
	    return t > t1 ? t * t * t : t2 * (t - t0);
	  }
	
	  function xyz2rgb(x) {
	    return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
	  }
	
	  function rgb2xyz(x) {
	    return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
	  }
	
	  function hclConvert(o) {
	    if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
	    if (!(o instanceof Lab)) o = labConvert(o);
	    var h = Math.atan2(o.b, o.a) * rad2deg;
	    return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
	  }
	
	  function hcl(h, c, l, opacity) {
	    return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
	  }
	
	  function Hcl(h, c, l, opacity) {
	    this.h = +h;
	    this.c = +c;
	    this.l = +l;
	    this.opacity = +opacity;
	  }
	
	  define(Hcl, hcl, extend(Color, {
	    brighter: function(k) {
	      return new Hcl(this.h, this.c, this.l + Kn * (k == null ? 1 : k), this.opacity);
	    },
	    darker: function(k) {
	      return new Hcl(this.h, this.c, this.l - Kn * (k == null ? 1 : k), this.opacity);
	    },
	    rgb: function() {
	      return labConvert(this).rgb();
	    }
	  }));
	
	  var A = -0.14861;
	  var B = +1.78277;
	  var C = -0.29227;
	  var D = -0.90649;
	  var E = +1.97294;
	  var ED = E * D;
	  var EB = E * B;
	  var BC_DA = B * C - D * A;
	  function cubehelixConvert(o) {
	    if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
	    if (!(o instanceof Rgb)) o = rgbConvert(o);
	    var r = o.r / 255,
	        g = o.g / 255,
	        b = o.b / 255,
	        l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
	        bl = b - l,
	        k = (E * (g - l) - C * bl) / D,
	        s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
	        h = s ? Math.atan2(k, bl) * rad2deg - 120 : NaN;
	    return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
	  }
	
	  function cubehelix(h, s, l, opacity) {
	    return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
	  }
	
	  function Cubehelix(h, s, l, opacity) {
	    this.h = +h;
	    this.s = +s;
	    this.l = +l;
	    this.opacity = +opacity;
	  }
	
	  define(Cubehelix, cubehelix, extend(Color, {
	    brighter: function(k) {
	      k = k == null ? brighter : Math.pow(brighter, k);
	      return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
	    },
	    darker: function(k) {
	      k = k == null ? darker : Math.pow(darker, k);
	      return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
	    },
	    rgb: function() {
	      var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad,
	          l = +this.l,
	          a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
	          cosh = Math.cos(h),
	          sinh = Math.sin(h);
	      return new Rgb(
	        255 * (l + a * (A * cosh + B * sinh)),
	        255 * (l + a * (C * cosh + D * sinh)),
	        255 * (l + a * (E * cosh)),
	        this.opacity
	      );
	    }
	  }));
	
	  exports.color = color;
	  exports.rgb = rgb;
	  exports.hsl = hsl;
	  exports.lab = lab;
	  exports.hcl = hcl;
	  exports.cubehelix = cubehelix;
	
	  Object.defineProperty(exports, '__esModule', { value: true });
	
	}));

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _omit2=__webpack_require__(13);var _omit3=_interopRequireDefault(_omit2);var _assign2=__webpack_require__(80);var _assign3=_interopRequireDefault(_assign2);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);
	
	var _portal=__webpack_require__(88);var _portal2=_interopRequireDefault(_portal);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
	
	VictoryContainer=function(_React$Component){_inherits(VictoryContainer,_React$Component);function VictoryContainer(){_classCallCheck(this,VictoryContainer);return _possibleConstructorReturn(this,(VictoryContainer.__proto__||Object.getPrototypeOf(VictoryContainer)).apply(this,arguments));}_createClass(VictoryContainer,[{key:"componentWillMount",value:function componentWillMount()
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	{var _this2=this;
	this.savePortalRef=function(portal){return _this2.portalRef=portal;};
	this.portalUpdate=function(key,el){return _this2.portalRef.portalUpdate(key,el);};
	this.portalRegister=function(){return _this2.portalRef.portalRegister();};
	this.portalDeregister=function(key){return _this2.portalRef.portalDeregister(key);};
	}},{key:"getChildContext",value:function getChildContext()
	
	{
	return{
	portalUpdate:this.portalUpdate,
	portalRegister:this.portalRegister,
	portalDeregister:this.portalDeregister};
	
	}},{key:"render",value:function render()
	
	{var _props=
	
	
	this.props;var style=_props.style;var title=_props.title;var desc=_props.desc;var width=_props.width;var height=_props.height;var children=_props.children;var responsive=_props.responsive;var portalComponent=_props.portalComponent;var events=_props.events;
	var svgProps=(0,_assign3.default)(
	{
	"aria-labelledby":"title desc",role:"img",
	style:responsive?style:(0,_omit3.default)(style,["height","width"]),
	viewBox:responsive?"0 0 "+width+" "+height:undefined,
	width:responsive?undefined:width,
	height:responsive?undefined:height},
	
	events);
	
	return(
	_react2.default.createElement("svg",svgProps,
	_react2.default.createElement("title",{id:"title"},title),
	_react2.default.createElement("desc",{id:"desc"},desc),
	children,
	_react2.default.cloneElement(portalComponent,{ref:this.savePortalRef})));
	
	
	}}]);return VictoryContainer;}(_react2.default.Component);VictoryContainer.displayName="VictoryContainer";VictoryContainer.propTypes={style:_react.PropTypes.object,height:_react.PropTypes.number,width:_react.PropTypes.number,events:_react.PropTypes.object,children:_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.node),_react2.default.PropTypes.node]),title:_react.PropTypes.string,desc:_react.PropTypes.string,portalComponent:_react.PropTypes.element,responsive:_react.PropTypes.bool};VictoryContainer.defaultProps={title:"Victory Chart",desc:"",portalComponent:_react2.default.createElement(_portal2.default,null),responsive:true};VictoryContainer.childContextTypes={portalUpdate:_react2.default.PropTypes.func,portalRegister:_react2.default.PropTypes.func,portalDeregister:_react2.default.PropTypes.func};exports.default=VictoryContainer;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(14),
	    baseDifference = __webpack_require__(15),
	    basePick = __webpack_require__(35),
	    flatRest = __webpack_require__(40),
	    getAllKeysIn = __webpack_require__(57),
	    toKey = __webpack_require__(79);
	
	/**
	 * The opposite of `_.pick`; this method creates an object composed of the
	 * own and inherited enumerable string keyed properties of `object` that are
	 * not omitted.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {...(string|string[])} [props] The property identifiers to omit.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.omit(object, ['a', 'c']);
	 * // => { 'b': '2' }
	 */
	var omit = flatRest(function(object, props) {
	  if (object == null) {
	    return {};
	  }
	  props = arrayMap(props, toKey);
	  return basePick(object, baseDifference(getAllKeysIn(object), props));
	});
	
	module.exports = omit;


/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(16),
	    arrayIncludes = __webpack_require__(27),
	    arrayIncludesWith = __webpack_require__(32),
	    arrayMap = __webpack_require__(14),
	    baseUnary = __webpack_require__(33),
	    cacheHas = __webpack_require__(34);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * The base implementation of methods like `_.difference` without support
	 * for excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;
	
	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = arrayMap(values, baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = arrayIncludesWith;
	    isCommon = false;
	  }
	  else if (values.length >= LARGE_ARRAY_SIZE) {
	    includes = cacheHas;
	    isCommon = false;
	    values = new SetCache(values);
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;
	
	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}
	
	module.exports = baseDifference;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(17),
	    setCacheAdd = __webpack_require__(25),
	    setCacheHas = __webpack_require__(26);
	
	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;
	
	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}
	
	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	
	module.exports = SetCache;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(18),
	    listCacheDelete = __webpack_require__(19),
	    listCacheGet = __webpack_require__(22),
	    listCacheHas = __webpack_require__(23),
	    listCacheSet = __webpack_require__(24);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;


/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}
	
	module.exports = listCacheClear;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(20);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}
	
	module.exports = listCacheDelete;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(21);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(20);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(20);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(20);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;


/***/ },
/* 25 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}
	
	module.exports = setCacheAdd;


/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}
	
	module.exports = setCacheHas;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(28);
	
	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array ? array.length : 0;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}
	
	module.exports = arrayIncludes;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(29),
	    baseIsNaN = __webpack_require__(30),
	    strictIndexOf = __webpack_require__(31);
	
	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  return value === value
	    ? strictIndexOf(array, value, fromIndex)
	    : baseFindIndex(array, baseIsNaN, fromIndex);
	}
	
	module.exports = baseIndexOf;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseFindIndex;


/***/ },
/* 30 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}
	
	module.exports = baseIsNaN;


/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function strictIndexOf(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = strictIndexOf;


/***/ },
/* 32 */
/***/ function(module, exports) {

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arrayIncludesWith;


/***/ },
/* 33 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;


/***/ },
/* 34 */
/***/ function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}
	
	module.exports = cacheHas;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var basePickBy = __webpack_require__(36);
	
	/**
	 * The base implementation of `_.pick` without support for individual
	 * property identifiers.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property identifiers to pick.
	 * @returns {Object} Returns the new object.
	 */
	function basePick(object, props) {
	  object = Object(object);
	  return basePickBy(object, props, function(value, key) {
	    return key in object;
	  });
	}
	
	module.exports = basePick;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(37);
	
	/**
	 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property identifiers to pick from.
	 * @param {Function} predicate The function invoked per property.
	 * @returns {Object} Returns the new object.
	 */
	function basePickBy(object, props, predicate) {
	  var index = -1,
	      length = props.length,
	      result = {};
	
	  while (++index < length) {
	    var key = props[index],
	        value = object[key];
	
	    if (predicate(value, key)) {
	      baseAssignValue(result, key, value);
	    }
	  }
	  return result;
	}
	
	module.exports = basePickBy;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(38);
	
	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}
	
	module.exports = baseAssignValue;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(39);
	
	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());
	
	module.exports = defineProperty;


/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	module.exports = getValue;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var flatten = __webpack_require__(41),
	    overRest = __webpack_require__(50),
	    setToString = __webpack_require__(52);
	
	/**
	 * A specialized version of `baseRest` which flattens the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @returns {Function} Returns the new function.
	 */
	function flatRest(func) {
	  return setToString(overRest(func, undefined, flatten), func + '');
	}
	
	module.exports = flatRest;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(42);
	
	/**
	 * Flattens `array` a single level deep.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to flatten.
	 * @returns {Array} Returns the new flattened array.
	 * @example
	 *
	 * _.flatten([1, [2, [3, [4]], 5]]);
	 * // => [1, 2, [3, [4]], 5]
	 */
	function flatten(array) {
	  var length = array ? array.length : 0;
	  return length ? baseFlatten(array, 1) : [];
	}
	
	module.exports = flatten;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(43),
	    isFlattenable = __webpack_require__(44);
	
	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;
	
	  predicate || (predicate = isFlattenable);
	  result || (result = []);
	
	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = baseFlatten;


/***/ },
/* 43 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(45),
	    isArguments = __webpack_require__(48),
	    isArray = __webpack_require__(49);
	
	/** Built-in value references. */
	var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;
	
	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}
	
	module.exports = isFlattenable;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(46);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(47);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 47 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 48 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ },
/* 49 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(51);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}
	
	module.exports = overRest;


/***/ },
/* 51 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	module.exports = apply;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(53),
	    shortOut = __webpack_require__(56);
	
	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);
	
	module.exports = setToString;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(54),
	    defineProperty = __webpack_require__(38),
	    identity = __webpack_require__(55);
	
	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};
	
	module.exports = baseSetToString;


/***/ },
/* 54 */
/***/ function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}
	
	module.exports = constant;


/***/ },
/* 55 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 56 */
/***/ function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 500,
	    HOT_SPAN = 16;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;
	
	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;
	
	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);
	
	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}
	
	module.exports = shortOut;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(58),
	    getSymbolsIn = __webpack_require__(59),
	    keysIn = __webpack_require__(62);
	
	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return baseGetAllKeys(object, keysIn, getSymbolsIn);
	}
	
	module.exports = getAllKeysIn;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(43),
	    isArray = __webpack_require__(49);
	
	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	
	module.exports = baseGetAllKeys;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(43),
	    getPrototype = __webpack_require__(7),
	    getSymbols = __webpack_require__(60),
	    stubArray = __webpack_require__(61);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	
	/**
	 * Creates an array of the own and inherited enumerable symbol properties
	 * of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
	  var result = [];
	  while (object) {
	    arrayPush(result, getSymbols(object));
	    object = getPrototype(object);
	  }
	  return result;
	};
	
	module.exports = getSymbolsIn;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(8),
	    stubArray = __webpack_require__(61);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	
	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
	
	module.exports = getSymbols;


/***/ },
/* 61 */
/***/ function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}
	
	module.exports = stubArray;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(63),
	    baseKeysIn = __webpack_require__(73),
	    isArrayLike = __webpack_require__(77);
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}
	
	module.exports = keysIn;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(64),
	    isArguments = __webpack_require__(48),
	    isArray = __webpack_require__(49),
	    isBuffer = __webpack_require__(65),
	    isIndex = __webpack_require__(68),
	    isTypedArray = __webpack_require__(69);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = arrayLikeKeys;


/***/ },
/* 64 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(46),
	    stubFalse = __webpack_require__(67);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	module.exports = isBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(66)(module)))

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 67 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ },
/* 68 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	module.exports = isIndex;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(70),
	    baseUnary = __webpack_require__(33),
	    nodeUtil = __webpack_require__(72);
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	module.exports = isTypedArray;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(71),
	    isObjectLike = __webpack_require__(9);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}
	
	module.exports = baseIsTypedArray;


/***/ },
/* 71 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(47);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	module.exports = nodeUtil;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(66)(module)))

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(74),
	    isPrototype = __webpack_require__(75),
	    nativeKeysIn = __webpack_require__(76);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];
	
	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeysIn;


/***/ },
/* 74 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 75 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ },
/* 76 */
/***/ function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = nativeKeysIn;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(78),
	    isLength = __webpack_require__(71);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(74);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag || tag == proxyTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 79 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(81),
	    copyObject = __webpack_require__(82),
	    createAssigner = __webpack_require__(83),
	    isArrayLike = __webpack_require__(77),
	    isPrototype = __webpack_require__(75),
	    keys = __webpack_require__(86);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assign({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});
	
	module.exports = assign;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(37),
	    eq = __webpack_require__(21);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}
	
	module.exports = assignValue;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(81),
	    baseAssignValue = __webpack_require__(37);
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	
	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;
	
	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}
	
	module.exports = copyObject;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(84),
	    isIterateeCall = __webpack_require__(85);
	
	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;
	
	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;
	
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(55),
	    overRest = __webpack_require__(50),
	    setToString = __webpack_require__(52);
	
	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}
	
	module.exports = baseRest;


/***/ },
/* 85 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(75),
	    nativeKeys = __webpack_require__(87);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(8);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
	
	Portal=function(_React$Component){_inherits(Portal,_React$Component);
	
	
	
	
	
	
	
	
	
	
	function Portal(props){_classCallCheck(this,Portal);var _this=_possibleConstructorReturn(this,(Portal.__proto__||Object.getPrototypeOf(Portal)).call(this,
	props));
	_this.map={};
	_this.index=1;
	_this.portalUpdate=_this.portalUpdate.bind(_this);
	_this.portalRegister=_this.portalRegister.bind(_this);
	_this.portalDeregister=_this.portalDeregister.bind(_this);return _this;
	}_createClass(Portal,[{key:"portalRegister",value:function portalRegister()
	
	{
	return++this.index;
	}},{key:"portalUpdate",value:function portalUpdate(
	
	key,element){
	this.map[key]=element;
	this.forceUpdate();
	}},{key:"portalDeregister",value:function portalDeregister(
	
	key){
	delete this.map[key];
	}},{key:"render",value:function render()
	
	{var _this2=this;
	return _react2.default.cloneElement(
	this.props.groupComponent,
	{},
	Object.keys(this.map).map(function(key){
	var el=_this2.map[key];
	return el?_react2.default.cloneElement(el,{key:key}):el;
	}));
	
	}}]);return Portal;}(_react2.default.Component);Portal.displayName="Portal";Portal.propTypes={groupComponent:_react.PropTypes.element};Portal.defaultProps={groupComponent:_react2.default.createElement("g",null)};exports.default=Portal;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _pick2=__webpack_require__(90);var _pick3=_interopRequireDefault(_pick2);var _merge2=__webpack_require__(91);var _merge3=_interopRequireDefault(_merge2);var _assign2=__webpack_require__(80);var _assign3=_interopRequireDefault(_assign2);var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);
	var _index=__webpack_require__(107);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
	
	
	var defaultStyles={
	fill:"#252525",
	fontSize:14,
	fontFamily:"'Gill Sans', 'Gill Sans MT', 'Ser­avek', 'Trebuchet MS', sans-serif",
	stroke:"transparent"};var
	
	
	VictoryLabel=function(_React$Component){_inherits(VictoryLabel,_React$Component);function VictoryLabel(){_classCallCheck(this,VictoryLabel);return _possibleConstructorReturn(this,(VictoryLabel.__proto__||Object.getPrototypeOf(VictoryLabel)).apply(this,arguments));}_createClass(VictoryLabel,[{key:"getStyles",value:function getStyles(
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	props){
	var style=props.style?(0,_merge3.default)({},defaultStyles,props.style):defaultStyles;
	var datum=props.datum||props.data;
	var baseStyles=_index.Helpers.evaluateStyle(style,datum);
	return(0,_assign3.default)({},baseStyles,{fontSize:this.getFontSize(baseStyles)});
	}},{key:"getHeight",value:function getHeight(
	
	props,type){
	var datum=props.datum||props.data;
	return _index.Helpers.evaluateProp(props[type],datum);
	}},{key:"getContent",value:function getContent(
	
	props){
	if(props.text!==undefined){
	var datum=props.datum||props.data;
	var child=_index.Helpers.evaluateProp(props.text,datum);
	return(""+child).split("\n");
	}
	return[" "];
	}},{key:"getDy",value:function getDy(
	
	props,content,lineHeight){
	var datum=props.datum||props.data;
	var dy=props.dy?_index.Helpers.evaluateProp(props.dy,datum):0;
	var length=content.length;
	var capHeight=this.getHeight(props,"capHeight");
	var verticalAnchor=props.verticalAnchor?
	_index.Helpers.evaluateProp(props.verticalAnchor,datum):"middle";
	switch(verticalAnchor){
	case"end":
	return dy+capHeight/2+(0.5-length)*lineHeight;
	case"middle":
	return dy+capHeight/2+(0.5-length/2)*lineHeight;
	default:
	return dy+capHeight/2+lineHeight/2;}
	
	}},{key:"getTransform",value:function getTransform(
	
	props){
	var style=this.getStyles(props);var
	datum=props.datum;var x=props.x;var y=props.y;
	var angle=props.angle||style.angle;
	var transform=props.transform||style.transform;
	var transformPart=transform&&_index.Helpers.evaluateProp(transform,datum);
	var rotatePart=angle&&{rotate:[angle,x,y]};
	return transformPart||angle?
	_index.Style.toTransformString(transformPart,rotatePart):undefined;
	}},{key:"getFontSize",value:function getFontSize(
	
	style){
	var baseSize=style&&style.fontSize;
	if(typeof baseSize==="number"){
	return baseSize;
	}else if(baseSize===undefined||baseSize===null){
	return defaultStyles.fontSize;
	}else if(typeof baseSize==="string"){
	var fontSize=+baseSize.replace("px","");
	if(!isNaN(fontSize)){
	return fontSize;
	}else{
	_index.Log.warn("fontSize should be expressed as a number of pixels");
	return defaultStyles.fontSize;
	}
	}
	return defaultStyles.fontSize;
	}},{key:"renderElements",value:function renderElements(
	
	props,content){
	var transform=this.getTransform(props);
	var textProps=(0,_pick3.default)(props,["dx","dy","x","y","style","textAnchor"]);
	var fontSize=this.getFontSize(props.style);
	return(
	_react2.default.createElement("text",_extends({},textProps,{
	transform:transform},
	props.events),
	
	content.map(function(line,i){
	var dy=i?props.lineHeight*fontSize:undefined;
	return(
	_react2.default.createElement("tspan",{key:i,x:props.x,dy:dy},
	line));
	
	
	})));
	
	
	}},{key:"render",value:function render()
	
	{var _props=
	this.props;var datum=_props.datum;var events=_props.events;
	var style=this.getStyles(this.props);
	var lineHeight=this.getHeight(this.props,"lineHeight");
	var textAnchor=this.props.textAnchor?
	_index.Helpers.evaluateProp(this.props.textAnchor,datum):"start";
	var content=this.getContent(this.props);
	var dx=this.props.dx?_index.Helpers.evaluateProp(this.props.dx,datum):0;
	var dy=this.getDy(this.props,content,lineHeight)*style.fontSize;
	var labelProps=(0,_assign3.default)(
	{},this.props,{dy:dy,dx:dx,datum:datum,lineHeight:lineHeight,textAnchor:textAnchor,style:style},events);
	
	return this.renderElements(labelProps,content);
	}}]);return VictoryLabel;}(_react2.default.Component);VictoryLabel.displayName="VictoryLabel";VictoryLabel.propTypes={angle:_react.PropTypes.oneOfType([_react.PropTypes.string,_react.PropTypes.number]),capHeight:_react.PropTypes.oneOfType([_react.PropTypes.string,_index.PropTypes.nonNegative,_react.PropTypes.func]),datum:_react.PropTypes.any,data:_react.PropTypes.array,index:_react.PropTypes.number,events:_react.PropTypes.object,text:_react.PropTypes.oneOfType([_react.PropTypes.string,_react.PropTypes.number,_react.PropTypes.func]),lineHeight:_react.PropTypes.oneOfType([_react.PropTypes.string,_index.PropTypes.nonNegative,_react.PropTypes.func]),style:_react.PropTypes.object,textAnchor:_react.PropTypes.oneOfType([_react.PropTypes.oneOf(["start","middle","end","inherit"]),_react.PropTypes.func]),verticalAnchor:_react.PropTypes.oneOfType([_react.PropTypes.oneOf(["start","middle","end"]),_react.PropTypes.func]),transform:_react.PropTypes.oneOfType([_react.PropTypes.string,_react.PropTypes.object,_react.PropTypes.func]),x:_react.PropTypes.number,y:_react.PropTypes.number,dx:_react.PropTypes.oneOfType([_react.PropTypes.number,_react.PropTypes.string,_react.PropTypes.func]),dy:_react.PropTypes.oneOfType([_react.PropTypes.number,_react.PropTypes.string,_react.PropTypes.func])};VictoryLabel.defaultProps={capHeight:0.71,lineHeight:1};exports.default=VictoryLabel;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(14),
	    basePick = __webpack_require__(35),
	    flatRest = __webpack_require__(40),
	    toKey = __webpack_require__(79);
	
	/**
	 * Creates an object composed of the picked `object` properties.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {...(string|string[])} [props] The property identifiers to pick.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.pick(object, ['a', 'c']);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var pick = flatRest(function(object, props) {
	  return object == null ? {} : basePick(object, arrayMap(props, toKey));
	});
	
	module.exports = pick;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var baseMerge = __webpack_require__(92),
	    createAssigner = __webpack_require__(83);
	
	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});
	
	module.exports = merge;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(93),
	    assignMergeValue = __webpack_require__(94),
	    baseFor = __webpack_require__(95),
	    baseMergeDeep = __webpack_require__(97),
	    isObject = __webpack_require__(74),
	    keysIn = __webpack_require__(62);
	
	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  baseFor(source, function(srcValue, key) {
	    if (isObject(srcValue)) {
	      stack || (stack = new Stack);
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
	        : undefined;
	
	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  }, keysIn);
	}
	
	module.exports = baseMerge;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(18),
	    listCacheDelete = __webpack_require__(19),
	    listCacheGet = __webpack_require__(22),
	    listCacheHas = __webpack_require__(23),
	    listCacheSet = __webpack_require__(24);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(37),
	    eq = __webpack_require__(21);
	
	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}
	
	module.exports = assignMergeValue;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(96);
	
	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },
/* 96 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;
	
	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var assignMergeValue = __webpack_require__(94),
	    cloneBuffer = __webpack_require__(98),
	    cloneTypedArray = __webpack_require__(99),
	    copyArray = __webpack_require__(102),
	    initCloneObject = __webpack_require__(103),
	    isArguments = __webpack_require__(48),
	    isArray = __webpack_require__(49),
	    isArrayLikeObject = __webpack_require__(105),
	    isBuffer = __webpack_require__(65),
	    isFunction = __webpack_require__(78),
	    isObject = __webpack_require__(74),
	    isPlainObject = __webpack_require__(6),
	    isTypedArray = __webpack_require__(69),
	    toPlainObject = __webpack_require__(106);
	
	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = object[key],
	      srcValue = source[key],
	      stacked = stack.get(srcValue);
	
	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;
	
	  var isCommon = newValue === undefined;
	
	  if (isCommon) {
	    var isArr = isArray(srcValue),
	        isBuff = !isArr && isBuffer(srcValue),
	        isTyped = !isArr && !isBuff && isTypedArray(srcValue);
	
	    newValue = srcValue;
	    if (isArr || isBuff || isTyped) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else if (isBuff) {
	        isCommon = false;
	        newValue = cloneBuffer(srcValue, true);
	      }
	      else if (isTyped) {
	        isCommon = false;
	        newValue = cloneTypedArray(srcValue, true);
	      }
	      else {
	        newValue = [];
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      newValue = objValue;
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
	        newValue = initCloneObject(srcValue);
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  assignMergeValue(object, key, newValue);
	}
	
	module.exports = baseMergeDeep;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(46);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
	
	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
	
	  buffer.copy(result);
	  return result;
	}
	
	module.exports = cloneBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(66)(module)))

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(100);
	
	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}
	
	module.exports = cloneTypedArray;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(101);
	
	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}
	
	module.exports = cloneArrayBuffer;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(46);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;


/***/ },
/* 102 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}
	
	module.exports = copyArray;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(104),
	    getPrototype = __webpack_require__(7),
	    isPrototype = __webpack_require__(75);
	
	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}
	
	module.exports = initCloneObject;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(74);
	
	/** Built-in value references. */
	var objectCreate = Object.create;
	
	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());
	
	module.exports = baseCreate;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(77),
	    isObjectLike = __webpack_require__(9);
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	module.exports = isArrayLikeObject;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(82),
	    keysIn = __webpack_require__(62);
	
	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}
	
	module.exports = toPlainObject;


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});exports.Transitions=exports.TextSize=exports.Style=exports.Scale=exports.PropTypes=exports.Log=exports.Helpers=exports.Events=exports.Domain=exports.DefaultTransitions=exports.Data=exports.Collection=exports.addEvents=undefined;var _addEvents=__webpack_require__(108);var _addEvents2=_interopRequireDefault(_addEvents);
	var _collection=__webpack_require__(151);var _collection2=_interopRequireDefault(_collection);
	var _data=__webpack_require__(152);var _data2=_interopRequireDefault(_data);
	var _defaultTransitions=__webpack_require__(184);var DefaultTransitions=_interopRequireWildcard(_defaultTransitions);
	var _domain=__webpack_require__(193);var _domain2=_interopRequireDefault(_domain);
	var _events=__webpack_require__(137);var _events2=_interopRequireDefault(_events);
	var _helpers=__webpack_require__(173);var _helpers2=_interopRequireDefault(_helpers);
	var _log=__webpack_require__(174);var _log2=_interopRequireDefault(_log);
	var _propTypes=__webpack_require__(194);var _propTypes2=_interopRequireDefault(_propTypes);
	var _scale=__webpack_require__(176);var _scale2=_interopRequireDefault(_scale);
	var _style=__webpack_require__(195);var _style2=_interopRequireDefault(_style);
	var _textsize=__webpack_require__(196);var _textsize2=_interopRequireDefault(_textsize);
	var _transitions=__webpack_require__(197);var Transitions=_interopRequireWildcard(_transitions);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.
	
	
	addEvents=_addEvents2.default;exports.
	Collection=_collection2.default;exports.
	Data=_data2.default;exports.
	DefaultTransitions=DefaultTransitions;exports.
	Domain=_domain2.default;exports.
	Events=_events2.default;exports.
	Helpers=_helpers2.default;exports.
	Log=_log2.default;exports.
	PropTypes=_propTypes2.default;exports.
	Scale=_scale2.default;exports.
	Style=_style2.default;exports.
	TextSize=_textsize2.default;exports.
	Transitions=Transitions;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _partialRight2=__webpack_require__(109);var _partialRight3=_interopRequireDefault(_partialRight2);var _isFunction2=__webpack_require__(78);var _isFunction3=_interopRequireDefault(_isFunction2);var _assign2=__webpack_require__(80);var _assign3=_interopRequireDefault(_assign2);var _defaults2=__webpack_require__(134);var _defaults3=_interopRequireDefault(_defaults2);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined;}else{return get(parent,property,receiver);}}else if("value"in desc){return desc.value;}else{var getter=desc.get;if(getter===undefined){return undefined;}return getter.call(receiver);}};
	var _events=__webpack_require__(137);var _events2=_interopRequireDefault(_events);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}exports.default=
	
	function(WrappedComponent){
	return function(_WrappedComponent){_inherits(addEvents,_WrappedComponent);function addEvents(){_classCallCheck(this,addEvents);return _possibleConstructorReturn(this,(addEvents.__proto__||Object.getPrototypeOf(addEvents)).apply(this,arguments));}_createClass(addEvents,[{key:"componentWillMount",value:function componentWillMount()
	
	{
	if((0,_isFunction3.default)(_get(addEvents.prototype.__proto__||Object.getPrototypeOf(addEvents.prototype),"componentWillMount",this))){
	_get(addEvents.prototype.__proto__||Object.getPrototypeOf(addEvents.prototype),"componentWillMount",this).call(this);
	}
	this.state=this.state||{};
	var getScopedEvents=_events2.default.getScopedEvents.bind(this);
	this.getEvents=(0,_partialRight3.default)(_events2.default.getEvents.bind(this),getScopedEvents);
	this.getEventState=_events2.default.getEventState.bind(this);
	this.setupEvents(this.props);
	}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(
	
	newProps){
	if((0,_isFunction3.default)(_get(addEvents.prototype.__proto__||Object.getPrototypeOf(addEvents.prototype),"componentWillReceiveProps",this))){
	_get(addEvents.prototype.__proto__||Object.getPrototypeOf(addEvents.prototype),"componentWillReceiveProps",this).call(this);
	}
	this.setupEvents(newProps);
	}},{key:"setupEvents",value:function setupEvents(
	
	props){var
	sharedEvents=props.sharedEvents;
	var components=WrappedComponent.expectedComponents;
	this.componentEvents=_events2.default.getComponentEvents(props,components);
	this.baseProps=WrappedComponent.getBaseProps(props);
	this.dataKeys=Object.keys(this.baseProps).filter(function(key){return key!=="parent";});
	this.getSharedEventState=sharedEvents&&(0,_isFunction3.default)(sharedEvents.getEventState)?
	sharedEvents.getEventState:function(){return undefined;};
	this.hasEvents=props.events||props.sharedEvents||this.componentEvents;
	}},{key:"getComponentProps",value:function getComponentProps(
	
	component,type,index){var
	role=WrappedComponent.role;
	var key=this.dataKeys&&this.dataKeys[index]||index;
	var baseProps=this.baseProps[key][type]||this.baseProps[key];
	if(!baseProps&&!this.hasEvents){
	return undefined;
	}
	if(this.hasEvents){
	var events=this.getEvents(this.props,type,key);
	var componentProps=(0,_defaults3.default)(
	{index:index,key:role+"-"+type+"-"+key,role:role+"-"+index},
	this.getEventState(key,type),
	this.getSharedEventState(key,type),
	component.props,
	baseProps);
	
	return(0,_assign3.default)(
	{},componentProps,{events:_events2.default.getPartialEvents(events,key,componentProps)});
	
	}
	return(0,_defaults3.default)(
	{index:index,key:role+"-"+type+"-"+key,role:role+"-"+index},
	component.props,
	baseProps);
	
	}}]);return addEvents;}(WrappedComponent);
	
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(84),
	    createWrap = __webpack_require__(110),
	    getHolder = __webpack_require__(127),
	    replaceHolders = __webpack_require__(129);
	
	/** Used to compose bitmasks for function metadata. */
	var PARTIAL_RIGHT_FLAG = 64;
	
	/**
	 * This method is like `_.partial` except that partially applied arguments
	 * are appended to the arguments it receives.
	 *
	 * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
	 * builds, may be used as a placeholder for partially applied arguments.
	 *
	 * **Note:** This method doesn't set the "length" property of partially
	 * applied functions.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Function
	 * @param {Function} func The function to partially apply arguments to.
	 * @param {...*} [partials] The arguments to be partially applied.
	 * @returns {Function} Returns the new partially applied function.
	 * @example
	 *
	 * function greet(greeting, name) {
	 *   return greeting + ' ' + name;
	 * }
	 *
	 * var greetFred = _.partialRight(greet, 'fred');
	 * greetFred('hi');
	 * // => 'hi fred'
	 *
	 * // Partially applied with placeholders.
	 * var sayHelloTo = _.partialRight(greet, 'hello', _);
	 * sayHelloTo('fred');
	 * // => 'hello fred'
	 */
	var partialRight = baseRest(function(func, partials) {
	  var holders = replaceHolders(partials, getHolder(partialRight));
	  return createWrap(func, PARTIAL_RIGHT_FLAG, undefined, partials, holders);
	});
	
	// Assign default placeholders.
	partialRight.placeholder = {};
	
	module.exports = partialRight;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var baseSetData = __webpack_require__(111),
	    createBind = __webpack_require__(112),
	    createCurry = __webpack_require__(114),
	    createHybrid = __webpack_require__(115),
	    createPartial = __webpack_require__(130),
	    getData = __webpack_require__(131),
	    mergeData = __webpack_require__(132),
	    setData = __webpack_require__(121),
	    setWrapToString = __webpack_require__(122),
	    toInteger = __webpack_require__(133);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used to compose bitmasks for function metadata. */
	var BIND_FLAG = 1,
	    BIND_KEY_FLAG = 2,
	    CURRY_FLAG = 8,
	    CURRY_RIGHT_FLAG = 16,
	    PARTIAL_FLAG = 32,
	    PARTIAL_RIGHT_FLAG = 64;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that either curries or invokes `func` with optional
	 * `this` binding and partially applied arguments.
	 *
	 * @private
	 * @param {Function|string} func The function or method name to wrap.
	 * @param {number} bitmask The bitmask flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - `_.bind`
	 *     2 - `_.bindKey`
	 *     4 - `_.curry` or `_.curryRight` of a bound function
	 *     8 - `_.curry`
	 *    16 - `_.curryRight`
	 *    32 - `_.partial`
	 *    64 - `_.partialRight`
	 *   128 - `_.rearg`
	 *   256 - `_.ary`
	 *   512 - `_.flip`
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to be partially applied.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
	  var isBindKey = bitmask & BIND_KEY_FLAG;
	  if (!isBindKey && typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var length = partials ? partials.length : 0;
	  if (!length) {
	    bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
	    partials = holders = undefined;
	  }
	  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
	  arity = arity === undefined ? arity : toInteger(arity);
	  length -= holders ? holders.length : 0;
	
	  if (bitmask & PARTIAL_RIGHT_FLAG) {
	    var partialsRight = partials,
	        holdersRight = holders;
	
	    partials = holders = undefined;
	  }
	  var data = isBindKey ? undefined : getData(func);
	
	  var newData = [
	    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
	    argPos, ary, arity
	  ];
	
	  if (data) {
	    mergeData(newData, data);
	  }
	  func = newData[0];
	  bitmask = newData[1];
	  thisArg = newData[2];
	  partials = newData[3];
	  holders = newData[4];
	  arity = newData[9] = newData[9] == null
	    ? (isBindKey ? 0 : func.length)
	    : nativeMax(newData[9] - length, 0);
	
	  if (!arity && bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG)) {
	    bitmask &= ~(CURRY_FLAG | CURRY_RIGHT_FLAG);
	  }
	  if (!bitmask || bitmask == BIND_FLAG) {
	    var result = createBind(func, bitmask, thisArg);
	  } else if (bitmask == CURRY_FLAG || bitmask == CURRY_RIGHT_FLAG) {
	    result = createCurry(func, bitmask, arity);
	  } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !holders.length) {
	    result = createPartial(func, bitmask, thisArg, partials);
	  } else {
	    result = createHybrid.apply(undefined, newData);
	  }
	  var setter = data ? baseSetData : setData;
	  return setWrapToString(setter(result, newData), func, bitmask);
	}
	
	module.exports = createWrap;


/***/ },
/* 111 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var createCtor = __webpack_require__(113),
	    root = __webpack_require__(46);
	
	/** Used to compose bitmasks for function metadata. */
	var BIND_FLAG = 1;
	
	/**
	 * Creates a function that wraps `func` to invoke it with the optional `this`
	 * binding of `thisArg`.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createBind(func, bitmask, thisArg) {
	  var isBind = bitmask & BIND_FLAG,
	      Ctor = createCtor(func);
	
	  function wrapper() {
	    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	    return fn.apply(isBind ? thisArg : this, arguments);
	  }
	  return wrapper;
	}
	
	module.exports = createBind;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(104),
	    isObject = __webpack_require__(74);
	
	/**
	 * Creates a function that produces an instance of `Ctor` regardless of
	 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	 *
	 * @private
	 * @param {Function} Ctor The constructor to wrap.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createCtor(Ctor) {
	  return function() {
	    // Use a `switch` statement to work with class constructors. See
	    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	    // for more details.
	    var args = arguments;
	    switch (args.length) {
	      case 0: return new Ctor;
	      case 1: return new Ctor(args[0]);
	      case 2: return new Ctor(args[0], args[1]);
	      case 3: return new Ctor(args[0], args[1], args[2]);
	      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
	      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
	      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
	      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
	    }
	    var thisBinding = baseCreate(Ctor.prototype),
	        result = Ctor.apply(thisBinding, args);
	
	    // Mimic the constructor's `return` behavior.
	    // See https://es5.github.io/#x13.2.2 for more details.
	    return isObject(result) ? result : thisBinding;
	  };
	}
	
	module.exports = createCtor;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(51),
	    createCtor = __webpack_require__(113),
	    createHybrid = __webpack_require__(115),
	    createRecurry = __webpack_require__(119),
	    getHolder = __webpack_require__(127),
	    replaceHolders = __webpack_require__(129),
	    root = __webpack_require__(46);
	
	/**
	 * Creates a function that wraps `func` to enable currying.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {number} arity The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createCurry(func, bitmask, arity) {
	  var Ctor = createCtor(func);
	
	  function wrapper() {
	    var length = arguments.length,
	        args = Array(length),
	        index = length,
	        placeholder = getHolder(wrapper);
	
	    while (index--) {
	      args[index] = arguments[index];
	    }
	    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
	      ? []
	      : replaceHolders(args, placeholder);
	
	    length -= holders.length;
	    if (length < arity) {
	      return createRecurry(
	        func, bitmask, createHybrid, wrapper.placeholder, undefined,
	        args, holders, undefined, undefined, arity - length);
	    }
	    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	    return apply(fn, this, args);
	  }
	  return wrapper;
	}
	
	module.exports = createCurry;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var composeArgs = __webpack_require__(116),
	    composeArgsRight = __webpack_require__(117),
	    countHolders = __webpack_require__(118),
	    createCtor = __webpack_require__(113),
	    createRecurry = __webpack_require__(119),
	    getHolder = __webpack_require__(127),
	    reorder = __webpack_require__(128),
	    replaceHolders = __webpack_require__(129),
	    root = __webpack_require__(46);
	
	/** Used to compose bitmasks for function metadata. */
	var BIND_FLAG = 1,
	    BIND_KEY_FLAG = 2,
	    CURRY_FLAG = 8,
	    CURRY_RIGHT_FLAG = 16,
	    ARY_FLAG = 128,
	    FLIP_FLAG = 512;
	
	/**
	 * Creates a function that wraps `func` to invoke it with optional `this`
	 * binding of `thisArg`, partial application, and currying.
	 *
	 * @private
	 * @param {Function|string} func The function or method name to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to prepend to those provided to
	 *  the new function.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [partialsRight] The arguments to append to those provided
	 *  to the new function.
	 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
	  var isAry = bitmask & ARY_FLAG,
	      isBind = bitmask & BIND_FLAG,
	      isBindKey = bitmask & BIND_KEY_FLAG,
	      isCurried = bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG),
	      isFlip = bitmask & FLIP_FLAG,
	      Ctor = isBindKey ? undefined : createCtor(func);
	
	  function wrapper() {
	    var length = arguments.length,
	        args = Array(length),
	        index = length;
	
	    while (index--) {
	      args[index] = arguments[index];
	    }
	    if (isCurried) {
	      var placeholder = getHolder(wrapper),
	          holdersCount = countHolders(args, placeholder);
	    }
	    if (partials) {
	      args = composeArgs(args, partials, holders, isCurried);
	    }
	    if (partialsRight) {
	      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
	    }
	    length -= holdersCount;
	    if (isCurried && length < arity) {
	      var newHolders = replaceHolders(args, placeholder);
	      return createRecurry(
	        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
	        args, newHolders, argPos, ary, arity - length
	      );
	    }
	    var thisBinding = isBind ? thisArg : this,
	        fn = isBindKey ? thisBinding[func] : func;
	
	    length = args.length;
	    if (argPos) {
	      args = reorder(args, argPos);
	    } else if (isFlip && length > 1) {
	      args.reverse();
	    }
	    if (isAry && ary < length) {
	      args.length = ary;
	    }
	    if (this && this !== root && this instanceof wrapper) {
	      fn = Ctor || createCtor(fn);
	    }
	    return fn.apply(thisBinding, args);
	  }
	  return wrapper;
	}
	
	module.exports = createHybrid;


/***/ },
/* 116 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates an array that is the composition of partially applied arguments,
	 * placeholders, and provided arguments into a single array of arguments.
	 *
	 * @private
	 * @param {Array} args The provided arguments.
	 * @param {Array} partials The arguments to prepend to those provided.
	 * @param {Array} holders The `partials` placeholder indexes.
	 * @params {boolean} [isCurried] Specify composing for a curried function.
	 * @returns {Array} Returns the new array of composed arguments.
	 */
	function composeArgs(args, partials, holders, isCurried) {
	  var argsIndex = -1,
	      argsLength = args.length,
	      holdersLength = holders.length,
	      leftIndex = -1,
	      leftLength = partials.length,
	      rangeLength = nativeMax(argsLength - holdersLength, 0),
	      result = Array(leftLength + rangeLength),
	      isUncurried = !isCurried;
	
	  while (++leftIndex < leftLength) {
	    result[leftIndex] = partials[leftIndex];
	  }
	  while (++argsIndex < holdersLength) {
	    if (isUncurried || argsIndex < argsLength) {
	      result[holders[argsIndex]] = args[argsIndex];
	    }
	  }
	  while (rangeLength--) {
	    result[leftIndex++] = args[argsIndex++];
	  }
	  return result;
	}
	
	module.exports = composeArgs;


/***/ },
/* 117 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * This function is like `composeArgs` except that the arguments composition
	 * is tailored for `_.partialRight`.
	 *
	 * @private
	 * @param {Array} args The provided arguments.
	 * @param {Array} partials The arguments to append to those provided.
	 * @param {Array} holders The `partials` placeholder indexes.
	 * @params {boolean} [isCurried] Specify composing for a curried function.
	 * @returns {Array} Returns the new array of composed arguments.
	 */
	function composeArgsRight(args, partials, holders, isCurried) {
	  var argsIndex = -1,
	      argsLength = args.length,
	      holdersIndex = -1,
	      holdersLength = holders.length,
	      rightIndex = -1,
	      rightLength = partials.length,
	      rangeLength = nativeMax(argsLength - holdersLength, 0),
	      result = Array(rangeLength + rightLength),
	      isUncurried = !isCurried;
	
	  while (++argsIndex < rangeLength) {
	    result[argsIndex] = args[argsIndex];
	  }
	  var offset = argsIndex;
	  while (++rightIndex < rightLength) {
	    result[offset + rightIndex] = partials[rightIndex];
	  }
	  while (++holdersIndex < holdersLength) {
	    if (isUncurried || argsIndex < argsLength) {
	      result[offset + holders[holdersIndex]] = args[argsIndex++];
	    }
	  }
	  return result;
	}
	
	module.exports = composeArgsRight;


/***/ },
/* 118 */
/***/ function(module, exports) {

	/**
	 * Gets the number of `placeholder` occurrences in `array`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} placeholder The placeholder to search for.
	 * @returns {number} Returns the placeholder count.
	 */
	function countHolders(array, placeholder) {
	  var length = array.length,
	      result = 0;
	
	  while (length--) {
	    if (array[length] === placeholder) {
	      ++result;
	    }
	  }
	  return result;
	}
	
	module.exports = countHolders;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var isLaziable = __webpack_require__(120),
	    setData = __webpack_require__(121),
	    setWrapToString = __webpack_require__(122);
	
	/** Used to compose bitmasks for function metadata. */
	var BIND_FLAG = 1,
	    BIND_KEY_FLAG = 2,
	    CURRY_BOUND_FLAG = 4,
	    CURRY_FLAG = 8,
	    PARTIAL_FLAG = 32,
	    PARTIAL_RIGHT_FLAG = 64;
	
	/**
	 * Creates a function that wraps `func` to continue currying.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {Function} wrapFunc The function to create the `func` wrapper.
	 * @param {*} placeholder The placeholder value.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to prepend to those provided to
	 *  the new function.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
	  var isCurry = bitmask & CURRY_FLAG,
	      newHolders = isCurry ? holders : undefined,
	      newHoldersRight = isCurry ? undefined : holders,
	      newPartials = isCurry ? partials : undefined,
	      newPartialsRight = isCurry ? undefined : partials;
	
	  bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
	  bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);
	
	  if (!(bitmask & CURRY_BOUND_FLAG)) {
	    bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
	  }
	  var newData = [
	    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
	    newHoldersRight, argPos, ary, arity
	  ];
	
	  var result = wrapFunc.apply(undefined, newData);
	  if (isLaziable(func)) {
	    setData(result, newData);
	  }
	  result.placeholder = placeholder;
	  return setWrapToString(result, func, bitmask);
	}
	
	module.exports = createRecurry;


/***/ },
/* 120 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ },
/* 121 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var getWrapDetails = __webpack_require__(123),
	    insertWrapDetails = __webpack_require__(124),
	    setToString = __webpack_require__(52),
	    updateWrapDetails = __webpack_require__(125);
	
	/**
	 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
	 * with wrapper details in a comment at the top of the source body.
	 *
	 * @private
	 * @param {Function} wrapper The function to modify.
	 * @param {Function} reference The reference function.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @returns {Function} Returns `wrapper`.
	 */
	function setWrapToString(wrapper, reference, bitmask) {
	  var source = (reference + '');
	  return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
	}
	
	module.exports = setWrapToString;


/***/ },
/* 123 */
/***/ function(module, exports) {

	/** Used to match wrap detail comments. */
	var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
	    reSplitDetails = /,? & /;
	
	/**
	 * Extracts wrapper details from the `source` body comment.
	 *
	 * @private
	 * @param {string} source The source to inspect.
	 * @returns {Array} Returns the wrapper details.
	 */
	function getWrapDetails(source) {
	  var match = source.match(reWrapDetails);
	  return match ? match[1].split(reSplitDetails) : [];
	}
	
	module.exports = getWrapDetails;


/***/ },
/* 124 */
/***/ function(module, exports) {

	/** Used to match wrap detail comments. */
	var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
	
	/**
	 * Inserts wrapper `details` in a comment at the top of the `source` body.
	 *
	 * @private
	 * @param {string} source The source to modify.
	 * @returns {Array} details The details to insert.
	 * @returns {string} Returns the modified source.
	 */
	function insertWrapDetails(source, details) {
	  var length = details.length;
	  if (!length) {
	    return source;
	  }
	  var lastIndex = length - 1;
	  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
	  details = details.join(length > 2 ? ', ' : ' ');
	  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
	}
	
	module.exports = insertWrapDetails;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(126),
	    arrayIncludes = __webpack_require__(27);
	
	/** Used to compose bitmasks for function metadata. */
	var BIND_FLAG = 1,
	    BIND_KEY_FLAG = 2,
	    CURRY_FLAG = 8,
	    CURRY_RIGHT_FLAG = 16,
	    PARTIAL_FLAG = 32,
	    PARTIAL_RIGHT_FLAG = 64,
	    ARY_FLAG = 128,
	    REARG_FLAG = 256,
	    FLIP_FLAG = 512;
	
	/** Used to associate wrap methods with their bit flags. */
	var wrapFlags = [
	  ['ary', ARY_FLAG],
	  ['bind', BIND_FLAG],
	  ['bindKey', BIND_KEY_FLAG],
	  ['curry', CURRY_FLAG],
	  ['curryRight', CURRY_RIGHT_FLAG],
	  ['flip', FLIP_FLAG],
	  ['partial', PARTIAL_FLAG],
	  ['partialRight', PARTIAL_RIGHT_FLAG],
	  ['rearg', REARG_FLAG]
	];
	
	/**
	 * Updates wrapper `details` based on `bitmask` flags.
	 *
	 * @private
	 * @returns {Array} details The details to modify.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @returns {Array} Returns `details`.
	 */
	function updateWrapDetails(details, bitmask) {
	  arrayEach(wrapFlags, function(pair) {
	    var value = '_.' + pair[0];
	    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
	      details.push(value);
	    }
	  });
	  return details.sort();
	}
	
	module.exports = updateWrapDetails;


/***/ },
/* 126 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEach;


/***/ },
/* 127 */
/***/ function(module, exports) {

	/**
	 * Gets the argument placeholder value for `func`.
	 *
	 * @private
	 * @param {Function} func The function to inspect.
	 * @returns {*} Returns the placeholder value.
	 */
	function getHolder(func) {
	  var object = func;
	  return object.placeholder;
	}
	
	module.exports = getHolder;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var copyArray = __webpack_require__(102),
	    isIndex = __webpack_require__(68);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;
	
	/**
	 * Reorder `array` according to the specified indexes where the element at
	 * the first index is assigned as the first element, the element at
	 * the second index is assigned as the second element, and so on.
	 *
	 * @private
	 * @param {Array} array The array to reorder.
	 * @param {Array} indexes The arranged array indexes.
	 * @returns {Array} Returns `array`.
	 */
	function reorder(array, indexes) {
	  var arrLength = array.length,
	      length = nativeMin(indexes.length, arrLength),
	      oldArray = copyArray(array);
	
	  while (length--) {
	    var index = indexes[length];
	    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
	  }
	  return array;
	}
	
	module.exports = reorder;


/***/ },
/* 129 */
/***/ function(module, exports) {

	/** Used as the internal argument placeholder. */
	var PLACEHOLDER = '__lodash_placeholder__';
	
	/**
	 * Replaces all `placeholder` elements in `array` with an internal placeholder
	 * and returns an array of their indexes.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {*} placeholder The placeholder to replace.
	 * @returns {Array} Returns the new array of placeholder indexes.
	 */
	function replaceHolders(array, placeholder) {
	  var index = -1,
	      length = array.length,
	      resIndex = 0,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (value === placeholder || value === PLACEHOLDER) {
	      array[index] = PLACEHOLDER;
	      result[resIndex++] = index;
	    }
	  }
	  return result;
	}
	
	module.exports = replaceHolders;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(51),
	    createCtor = __webpack_require__(113),
	    root = __webpack_require__(46);
	
	/** Used to compose bitmasks for function metadata. */
	var BIND_FLAG = 1;
	
	/**
	 * Creates a function that wraps `func` to invoke it with the `this` binding
	 * of `thisArg` and `partials` prepended to the arguments it receives.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} partials The arguments to prepend to those provided to
	 *  the new function.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createPartial(func, bitmask, thisArg, partials) {
	  var isBind = bitmask & BIND_FLAG,
	      Ctor = createCtor(func);
	
	  function wrapper() {
	    var argsIndex = -1,
	        argsLength = arguments.length,
	        leftIndex = -1,
	        leftLength = partials.length,
	        args = Array(leftLength + argsLength),
	        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	
	    while (++leftIndex < leftLength) {
	      args[leftIndex] = partials[leftIndex];
	    }
	    while (argsLength--) {
	      args[leftIndex++] = arguments[++argsIndex];
	    }
	    return apply(fn, isBind ? thisArg : this, args);
	  }
	  return wrapper;
	}
	
	module.exports = createPartial;


/***/ },
/* 131 */
/***/ function(module, exports) {

	/**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
	function noop() {
	  // No operation performed.
	}
	
	module.exports = noop;


/***/ },
/* 132 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 133 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(51),
	    assignInDefaults = __webpack_require__(135),
	    assignInWith = __webpack_require__(136),
	    baseRest = __webpack_require__(84);
	
	/**
	 * Assigns own and inherited enumerable string keyed properties of source
	 * objects to the destination object for all destination properties that
	 * resolve to `undefined`. Source objects are applied from left to right.
	 * Once a property is set, additional values of the same property are ignored.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.defaultsDeep
	 * @example
	 *
	 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	 * // => { 'a': 1, 'b': 2 }
	 */
	var defaults = baseRest(function(args) {
	  args.push(undefined, assignInDefaults);
	  return apply(assignInWith, undefined, args);
	});
	
	module.exports = defaults;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(21);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used by `_.defaults` to customize its `_.assignIn` use.
	 *
	 * @private
	 * @param {*} objValue The destination value.
	 * @param {*} srcValue The source value.
	 * @param {string} key The key of the property to assign.
	 * @param {Object} object The parent object of `objValue`.
	 * @returns {*} Returns the value to assign.
	 */
	function assignInDefaults(objValue, srcValue, key, object) {
	  if (objValue === undefined ||
	      (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
	    return srcValue;
	  }
	  return objValue;
	}
	
	module.exports = assignInDefaults;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(82),
	    createAssigner = __webpack_require__(83),
	    keysIn = __webpack_require__(62);
	
	/**
	 * This method is like `_.assignIn` except that it accepts `customizer`
	 * which is invoked to produce the assigned values. If `customizer` returns
	 * `undefined`, assignment is handled by the method instead. The `customizer`
	 * is invoked with five arguments: (objValue, srcValue, key, object, source).
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias extendWith
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} sources The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 * @see _.assignWith
	 * @example
	 *
	 * function customizer(objValue, srcValue) {
	 *   return _.isUndefined(objValue) ? srcValue : objValue;
	 * }
	 *
	 * var defaults = _.partialRight(_.assignInWith, customizer);
	 *
	 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	 * // => { 'a': 1, 'b': 2 }
	 */
	var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
	  copyObject(source, keysIn(source), object, customizer);
	});
	
	module.exports = assignInWith;


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _isEmpty2=__webpack_require__(138);var _isEmpty3=_interopRequireDefault(_isEmpty2);var _partial2=__webpack_require__(148);var _partial3=_interopRequireDefault(_partial2);var _merge2=__webpack_require__(91);var _merge3=_interopRequireDefault(_merge2);var _extend7=__webpack_require__(149);var _extend8=_interopRequireDefault(_extend7);var _assign2=__webpack_require__(80);var _assign3=_interopRequireDefault(_assign2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}exports.default=
	
	{
	
	
	
	
	
	
	getEvents:function getEvents(props,target,eventKey,getScopedEvents){var _this=this;
	
	var getEventsByTarget=function getEventsByTarget(events){
	var getSelectedEvents=function getSelectedEvents(){
	var targetEvents=events.reduce(function(memo,event){
	if(event.target!==undefined){
	return""+event.target===""+target?memo.concat(event):memo;
	}
	return memo.concat(event);
	},[]);
	
	if(eventKey!==undefined&&target!=="parent"){
	return targetEvents.filter(function(obj){
	var targetKeys=obj.eventKey;
	var useKey=function useKey(key){return key?""+key===""+eventKey:true;};
	return Array.isArray(targetKeys)?
	targetKeys.some(function(k){return useKey(k);}):useKey(targetKeys);
	});
	}
	return targetEvents;
	};
	
	var selectedEvents=getSelectedEvents();
	return Array.isArray(selectedEvents)&&selectedEvents.reduce(function(memo,event){
	return event?(0,_assign3.default)(memo,event.eventHandlers):memo;
	},{});
	};
	
	
	
	
	
	var getAllEvents=function getAllEvents(){
	if(Array.isArray(_this.componentEvents)){var _componentEvents;
	return Array.isArray(props.events)?
	(_componentEvents=_this.componentEvents).concat.apply(_componentEvents,_toConsumableArray(props.events)):_this.componentEvents;
	}
	return props.events;
	};
	
	var allEvents=getAllEvents();
	var ownEvents=allEvents&&getScopedEvents(getEventsByTarget(allEvents),target);
	if(!props.sharedEvents){
	return ownEvents;
	}
	var getSharedEvents=props.sharedEvents.getEvents;
	var sharedEvents=props.sharedEvents.events&&
	getSharedEvents(getEventsByTarget(props.sharedEvents.events),target);
	return(0,_assign3.default)({},sharedEvents,ownEvents);
	},
	
	
	
	
	
	
	getScopedEvents:function getScopedEvents(events,namespace,childType,baseProps){var _this2=this;
	if((0,_isEmpty3.default)(events)){
	return{};
	}
	
	baseProps=baseProps||this.baseProps;
	
	var getTargetProps=function getTargetProps(identifier,type){var
	childName=identifier.childName;var target=identifier.target;var key=identifier.key;
	var baseType=type==="props"?baseProps:_this2.state;
	var base=!childName||!baseType[childName]?baseType:baseType[childName];
	return key==="parent"?base.parent:base[key]&&base[key][target];
	};
	
	
	
	var parseEvent=function parseEvent(eventReturn,eventKey){
	var childNames=namespace==="parent"?
	eventReturn.childName:eventReturn.childName||childType;
	var target=eventReturn.target||namespace;
	
	
	var getKeys=function getKeys(childName){
	if(baseProps.all||baseProps[childName]&&baseProps[childName].all){
	return"all";
	}else if(eventReturn.eventKey==="all"){
	return baseProps[childName]?
	Object.keys(baseProps[childName]):Object.keys(baseProps);
	}else if(eventReturn.eventKey===undefined&&eventKey==="parent"){
	return baseProps[childName]?
	Object.keys(baseProps[childName]):Object.keys(baseProps);
	}
	return eventReturn.eventKey!==undefined?eventReturn.eventKey:eventKey;
	};
	
	
	var getMutationObject=function getMutationObject(key,childName){
	var nullFunction=function nullFunction(){return null;};
	var mutationTargetProps=getTargetProps({childName:childName,key:key,target:target},"props");
	var mutationTargetState=getTargetProps({childName:childName,key:key,target:target},"state");
	var mutation=eventReturn.mutation||nullFunction;
	var mutatedProps=mutation(
	(0,_assign3.default)({},mutationTargetProps,mutationTargetState),baseProps);
	
	var childState=_this2.state[childName]||{};
	return childName?
	(0,_extend8.default)(_this2.state,_defineProperty({},
	childName,(0,_extend8.default)(childState,_defineProperty({},
	key,(0,_extend8.default)(childState[key],_defineProperty({},target,mutatedProps)))))):
	
	
	(0,_extend8.default)(_this2.state,_defineProperty({},
	key,(0,_extend8.default)(_this2.state[key],_defineProperty({},target,mutatedProps))));
	
	};
	
	
	var getReturnByChild=function getReturnByChild(childName){
	var mutationKeys=getKeys(childName);
	return Array.isArray(mutationKeys)?
	mutationKeys.reduce(function(memo,key){
	return(0,_assign3.default)(memo,getMutationObject(key,childName));
	},{}):
	getMutationObject(mutationKeys,childName);
	};
	
	
	return Array.isArray(childNames)?childNames.reduce(function(memo,childName){
	return(0,_assign3.default)(memo,getReturnByChild(childName));
	},{}):getReturnByChild(childNames);
	};
	
	
	var parseEventReturn=function parseEventReturn(eventReturn,eventKey){
	return Array.isArray(eventReturn)?
	eventReturn.reduce(function(memo,props){
	memo=(0,_merge3.default)({},memo,parseEvent(props,eventKey));
	return memo;
	},{}):
	parseEvent(eventReturn,eventKey);
	};
	
	
	
	var onEvent=function onEvent(evt,childProps,eventKey,eventName){
	var eventReturn=events[eventName](evt,childProps,eventKey);
	if(eventReturn){
	_this2.setState(parseEventReturn(eventReturn,eventKey));
	}
	};
	
	
	return Object.keys(events).reduce(function(memo,event){
	memo[event]=onEvent;
	return memo;
	},{});
	},
	
	
	
	
	getPartialEvents:function getPartialEvents(events,eventKey,childProps){
	return events?
	Object.keys(events).reduce(function(memo,eventName){
	
	memo[eventName]=(0,_partial3.default)(
	events[eventName],
	_partial3.default.placeholder,
	childProps,
	eventKey,
	eventName);
	
	return memo;
	},{}):
	{};
	},
	
	
	
	
	getEventState:function getEventState(eventKey,namespace,childType){
	if(!childType){
	return this.state[eventKey]&&this.state[eventKey][namespace];
	}
	return this.state[childType]&&
	this.state[childType][eventKey]&&
	this.state[childType][eventKey][namespace];
	},
	
	
	
	
	getComponentEvents:function getComponentEvents(props,components){
	var events=Array.isArray(components)&&components.reduce(function(memo,componentName){var _memo;
	var component=props[componentName];
	var componentEvents=component&&component.type&&component.type.defaultEvents;
	memo=Array.isArray(componentEvents)?(_memo=memo).concat.apply(_memo,_toConsumableArray(componentEvents)):memo;
	return memo;
	},[]);
	return events&&events.length?events:undefined;
	}};

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var baseKeys = __webpack_require__(139),
	    getTag = __webpack_require__(140),
	    isArguments = __webpack_require__(48),
	    isArray = __webpack_require__(49),
	    isArrayLike = __webpack_require__(77),
	    isBuffer = __webpack_require__(65),
	    isPrototype = __webpack_require__(75),
	    isTypedArray = __webpack_require__(69);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    setTag = '[object Set]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if `value` is an empty object, collection, map, or set.
	 *
	 * Objects are considered empty if they have no own enumerable string keyed
	 * properties.
	 *
	 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	 * jQuery-like collections are considered empty if they have a `length` of `0`.
	 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	 * @example
	 *
	 * _.isEmpty(null);
	 * // => true
	 *
	 * _.isEmpty(true);
	 * // => true
	 *
	 * _.isEmpty(1);
	 * // => true
	 *
	 * _.isEmpty([1, 2, 3]);
	 * // => false
	 *
	 * _.isEmpty({ 'a': 1 });
	 * // => false
	 */
	function isEmpty(value) {
	  if (isArrayLike(value) &&
	      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
	        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
	    return !value.length;
	  }
	  var tag = getTag(value);
	  if (tag == mapTag || tag == setTag) {
	    return !value.size;
	  }
	  if (isPrototype(value)) {
	    return !baseKeys(value).length;
	  }
	  for (var key in value) {
	    if (hasOwnProperty.call(value, key)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = isEmpty;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(75),
	    nativeKeys = __webpack_require__(87);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(141),
	    Map = __webpack_require__(142),
	    Promise = __webpack_require__(143),
	    Set = __webpack_require__(144),
	    WeakMap = __webpack_require__(145),
	    baseGetTag = __webpack_require__(146),
	    toSource = __webpack_require__(147);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	
	var dataViewTag = '[object DataView]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	module.exports = getTag;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(39),
	    root = __webpack_require__(46);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(39),
	    root = __webpack_require__(46);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(39),
	    root = __webpack_require__(46);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(39),
	    root = __webpack_require__(46);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(39),
	    root = __webpack_require__(46);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;


/***/ },
/* 146 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}
	
	module.exports = baseGetTag;


/***/ },
/* 147 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(84),
	    createWrap = __webpack_require__(110),
	    getHolder = __webpack_require__(127),
	    replaceHolders = __webpack_require__(129);
	
	/** Used to compose bitmasks for function metadata. */
	var PARTIAL_FLAG = 32;
	
	/**
	 * Creates a function that invokes `func` with `partials` prepended to the
	 * arguments it receives. This method is like `_.bind` except it does **not**
	 * alter the `this` binding.
	 *
	 * The `_.partial.placeholder` value, which defaults to `_` in monolithic
	 * builds, may be used as a placeholder for partially applied arguments.
	 *
	 * **Note:** This method doesn't set the "length" property of partially
	 * applied functions.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.2.0
	 * @category Function
	 * @param {Function} func The function to partially apply arguments to.
	 * @param {...*} [partials] The arguments to be partially applied.
	 * @returns {Function} Returns the new partially applied function.
	 * @example
	 *
	 * function greet(greeting, name) {
	 *   return greeting + ' ' + name;
	 * }
	 *
	 * var sayHelloTo = _.partial(greet, 'hello');
	 * sayHelloTo('fred');
	 * // => 'hello fred'
	 *
	 * // Partially applied with placeholders.
	 * var greetFred = _.partial(greet, _, 'fred');
	 * greetFred('hi');
	 * // => 'hi fred'
	 */
	var partial = baseRest(function(func, partials) {
	  var holders = replaceHolders(partials, getHolder(partial));
	  return createWrap(func, PARTIAL_FLAG, undefined, partials, holders);
	});
	
	// Assign default placeholders.
	partial.placeholder = {};
	
	module.exports = partial;


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(150);


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(82),
	    createAssigner = __webpack_require__(83),
	    keysIn = __webpack_require__(62);
	
	/**
	 * This method is like `_.assign` except that it iterates over own and
	 * inherited source properties.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias extend
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assign
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assignIn({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
	 */
	var assignIn = createAssigner(function(object, source) {
	  copyObject(source, keysIn(source), object);
	});
	
	module.exports = assignIn;


/***/ },
/* 151 */
/***/ function(module, exports) {

	Object.defineProperty(exports,"__esModule",{value:true});function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}exports.default={
	isNonEmptyArray:function isNonEmptyArray(collection){
	return Array.isArray(collection)&&collection.length>0;
	},
	
	containsStrings:function containsStrings(collection){
	return Array.isArray(collection)&&collection.some(function(value){return typeof value==="string";});
	},
	
	containsDates:function containsDates(collection){
	return Array.isArray(collection)&&collection.some(function(value){return value instanceof Date;});
	},
	
	containsOnlyStrings:function containsOnlyStrings(collection){
	return this.isNonEmptyArray(collection)&&
	collection.every(function(value){return typeof value==="string";});
	},
	
	isArrayOfArrays:function isArrayOfArrays(collection){
	return this.isNonEmptyArray(collection)&&collection.every(Array.isArray);
	},
	
	removeUndefined:function removeUndefined(arr){
	return arr.filter(function(el){return el!==undefined;});
	},
	
	getMaxValue:function getMaxValue(arr){for(var _len=arguments.length,values=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){values[_key-1]=arguments[_key];}
	var array=arr.concat(values);
	return this.containsDates(array)?
	new Date(Math.max.apply(Math,_toConsumableArray(array))):
	Math.max.apply(Math,_toConsumableArray(array));
	},
	
	getMinValue:function getMinValue(arr){for(var _len2=arguments.length,values=Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){values[_key2-1]=arguments[_key2];}
	var array=arr.concat(values);
	return this.containsDates(array)?
	new Date(Math.min.apply(Math,_toConsumableArray(array))):
	Math.min.apply(Math,_toConsumableArray(array));
	}};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _property2=__webpack_require__(153);var _property3=_interopRequireDefault(_property2);var _isFunction2=__webpack_require__(78);var _isFunction3=_interopRequireDefault(_isFunction2);var _last2=__webpack_require__(164);var _last3=_interopRequireDefault(_last2);var _range2=__webpack_require__(165);var _range3=_interopRequireDefault(_range2);var _uniq2=__webpack_require__(169);var _uniq3=_interopRequireDefault(_uniq2);var _assign2=__webpack_require__(80);var _assign3=_interopRequireDefault(_assign2);
	var _helpers=__webpack_require__(173);var _helpers2=_interopRequireDefault(_helpers);
	var _collection=__webpack_require__(151);var _collection2=_interopRequireDefault(_collection);
	var _log=__webpack_require__(174);var _log2=_interopRequireDefault(_log);
	var _scale=__webpack_require__(176);var _scale2=_interopRequireDefault(_scale);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}exports.default=
	
	{
	
	
	
	
	
	getData:function getData(props){
	var data=void 0;
	if(props.data){
	if(props.data.length<1){
	_log2.default.warn("This is an empty dataset.");
	return[];
	}else{
	data=this.formatData(props.data,props);
	}
	}else{
	data=this.formatData(this.generateData(props),props);
	}
	return this.addEventKeys(props,data);
	},
	
	
	
	
	
	
	generateData:function generateData(props){
	
	var propsDomain=props.domain&&Array.isArray(props.domain)?
	props.domain:props.domain&&props.domain.x;
	var domain=propsDomain||_scale2.default.getBaseScale(props,"x").domain();
	var samples=props.samples||1;
	var domainMax=Math.max.apply(Math,_toConsumableArray(domain));
	var domainMin=Math.min.apply(Math,_toConsumableArray(domain));
	var step=(domainMax-domainMin)/samples;
	var values=(0,_range3.default)(domainMin,domainMax,step).map(function(v){
	return{x:v,y:v};
	});
	return(0,_last3.default)(values).x===domainMax?
	values:values.concat([{x:domainMax,y:domainMax}]);
	},
	
	
	
	
	
	
	
	
	formatData:function formatData(dataset,props,stringMap){
	if(!dataset){
	return[];
	}
	stringMap=stringMap||{
	x:this.createStringMap(props,"x"),
	y:this.createStringMap(props,"y")};
	
	var accessor={
	x:_helpers2.default.createAccessor(props.x!==undefined?props.x:"x"),
	y:_helpers2.default.createAccessor(props.y!==undefined?props.y:"y")};
	
	return this.cleanData(dataset,props).map(function(datum,index){
	var evaluatedX=accessor.x(datum);
	var evaluatedY=accessor.y(datum);
	var x=evaluatedX!==undefined?evaluatedX:index;
	var y=evaluatedY!==undefined?evaluatedY:datum;
	return(0,_assign3.default)(
	{},
	datum,
	{x:x,y:y},
	
	typeof x==="string"?{x:stringMap.x[x],xName:x}:{},
	typeof y==="string"?{y:stringMap.y[y],yName:y}:{});
	
	});
	},
	
	
	
	
	
	
	
	
	
	cleanData:function cleanData(dataset,props){
	var scaleType={
	x:_scale2.default.getScaleType(props,"x"),
	y:_scale2.default.getScaleType(props,"y")};
	
	var accessor={
	x:_helpers2.default.createAccessor(props.x),
	y:_helpers2.default.createAccessor(props.y)};
	
	if(scaleType.x!=="log"&&scaleType.y!=="log"){
	return dataset;
	}
	var rules=function rules(datum,axis){
	return scaleType[axis]==="log"?accessor[axis](datum)!==0:true;
	};
	return dataset.filter(function(datum){
	return rules(datum,"x")&&rules(datum,"y");
	});
	},
	
	
	getEventKey:function getEventKey(key){
	
	
	if((0,_isFunction3.default)(key)){
	return key;
	}else if(key===null||typeof key==="undefined"){
	return function(){return undefined;};
	}
	
	return(0,_property3.default)(key);
	},
	
	
	addEventKeys:function addEventKeys(props,data){
	var eventKeyAccessor=this.getEventKey(props.eventKey);
	return data.map(function(datum,index){
	var eventKey=datum.eventKey||eventKeyAccessor(datum)||index;
	return(0,_assign3.default)({eventKey:eventKey},datum);
	});
	},
	
	
	
	
	
	
	
	createStringMap:function createStringMap(props,axis){
	var stringsFromAxes=this.getStringsFromAxes(props,axis);
	var stringsFromCategories=this.getStringsFromCategories(props,axis);
	var stringsFromData=this.getStringsFromData(props,axis);
	
	var allStrings=(0,_uniq3.default)([].concat(_toConsumableArray(stringsFromAxes),_toConsumableArray(stringsFromCategories),_toConsumableArray(stringsFromData)));
	return allStrings.length===0?null:
	allStrings.reduce(function(memo,string,index){
	memo[string]=index+1;
	return memo;
	},{});
	},
	
	
	
	
	
	
	
	getStringsFromData:function getStringsFromData(props,axis){
	if(!props.data){
	return[];
	}
	var key=typeof props[axis]==="undefined"?axis:props[axis];
	var accessor=_helpers2.default.createAccessor(key);
	var dataStrings=props.data.
	map(function(datum){return accessor(datum);}).
	filter(function(datum){return typeof datum==="string";});
	
	return dataStrings.reduce(function(prev,curr){
	if(typeof curr!=="undefined"&&curr!==null&&prev.indexOf(curr)===-1){
	prev.push(curr);
	}
	return prev;
	},[]);
	},
	
	
	
	
	
	
	
	getStringsFromAxes:function getStringsFromAxes(props,axis){
	if(!props.tickValues||!Array.isArray(props.tickValues)&&!props.tickValues[axis]){
	return[];
	}
	var tickValueArray=props.tickValues[axis]||props.tickValues;
	return tickValueArray.filter(function(val){return typeof val==="string";});
	},
	
	
	
	
	
	
	
	getStringsFromCategories:function getStringsFromCategories(props,axis){
	if(!props.categories){
	return[];
	}
	var categories=this.getCategories(props,axis);
	var categoryStrings=categories&&categories.filter(function(val){return typeof val==="string";});
	return categoryStrings?_collection2.default.removeUndefined(categoryStrings):[];
	},
	
	
	
	
	
	
	
	getCategories:function getCategories(props,axis){
	return props.categories&&!Array.isArray(props.categories)?
	props.categories[axis]:props.categories;
	}};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(154),
	    basePropertyDeep = __webpack_require__(155),
	    isKey = __webpack_require__(162),
	    toKey = __webpack_require__(79);
	
	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}
	
	module.exports = property;


/***/ },
/* 154 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(156);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}
	
	module.exports = basePropertyDeep;


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(157),
	    isKey = __webpack_require__(162),
	    toKey = __webpack_require__(79);
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(49),
	    stringToPath = __webpack_require__(158);
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}
	
	module.exports = castPath;


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(159),
	    toString = __webpack_require__(161);
	
	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  string = toString(string);
	
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});
	
	module.exports = stringToPath;


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(160);
	
	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;
	
	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });
	
	  var cache = result.cache;
	  return result;
	}
	
	module.exports = memoizeCapped;


/***/ },
/* 160 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 161 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(49),
	    isSymbol = __webpack_require__(163);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}
	
	module.exports = isKey;


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(9);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ },
/* 164 */
/***/ function(module, exports) {

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array ? array.length : 0;
	  return length ? array[length - 1] : undefined;
	}
	
	module.exports = last;


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var createRange = __webpack_require__(166);
	
	/**
	 * Creates an array of numbers (positive and/or negative) progressing from
	 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
	 * `start` is specified without an `end` or `step`. If `end` is not specified,
	 * it's set to `start` with `start` then set to `0`.
	 *
	 * **Note:** JavaScript follows the IEEE-754 standard for resolving
	 * floating-point values which can produce unexpected results.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {number} [start=0] The start of the range.
	 * @param {number} end The end of the range.
	 * @param {number} [step=1] The value to increment or decrement by.
	 * @returns {Array} Returns the range of numbers.
	 * @see _.inRange, _.rangeRight
	 * @example
	 *
	 * _.range(4);
	 * // => [0, 1, 2, 3]
	 *
	 * _.range(-4);
	 * // => [0, -1, -2, -3]
	 *
	 * _.range(1, 5);
	 * // => [1, 2, 3, 4]
	 *
	 * _.range(0, 20, 5);
	 * // => [0, 5, 10, 15]
	 *
	 * _.range(0, -4, -1);
	 * // => [0, -1, -2, -3]
	 *
	 * _.range(1, 4, 0);
	 * // => [1, 1, 1]
	 *
	 * _.range(0);
	 * // => []
	 */
	var range = createRange();
	
	module.exports = range;


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var baseRange = __webpack_require__(167),
	    isIterateeCall = __webpack_require__(85),
	    toFinite = __webpack_require__(168);
	
	/**
	 * Creates a `_.range` or `_.rangeRight` function.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new range function.
	 */
	function createRange(fromRight) {
	  return function(start, end, step) {
	    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
	      end = step = undefined;
	    }
	    // Ensure the sign of `-0` is preserved.
	    start = toFinite(start);
	    if (end === undefined) {
	      end = start;
	      start = 0;
	    } else {
	      end = toFinite(end);
	    }
	    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
	    return baseRange(start, end, step, fromRight);
	  };
	}
	
	module.exports = createRange;


/***/ },
/* 167 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeCeil = Math.ceil,
	    nativeMax = Math.max;
	
	/**
	 * The base implementation of `_.range` and `_.rangeRight` which doesn't
	 * coerce arguments.
	 *
	 * @private
	 * @param {number} start The start of the range.
	 * @param {number} end The end of the range.
	 * @param {number} step The value to increment or decrement by.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Array} Returns the range of numbers.
	 */
	function baseRange(start, end, step, fromRight) {
	  var index = -1,
	      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
	      result = Array(length);
	
	  while (length--) {
	    result[fromRight ? length : ++index] = start;
	    start += step;
	  }
	  return result;
	}
	
	module.exports = baseRange;


/***/ },
/* 168 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var baseUniq = __webpack_require__(170);
	
	/**
	 * Creates a duplicate-free version of an array, using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons, in which only the first occurrence of each element
	 * is kept. The order of result values is determined by the order they occur
	 * in the array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @returns {Array} Returns the new duplicate free array.
	 * @example
	 *
	 * _.uniq([2, 1, 2]);
	 * // => [2, 1]
	 */
	function uniq(array) {
	  return (array && array.length)
	    ? baseUniq(array)
	    : [];
	}
	
	module.exports = uniq;


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(16),
	    arrayIncludes = __webpack_require__(27),
	    arrayIncludesWith = __webpack_require__(32),
	    cacheHas = __webpack_require__(34),
	    createSet = __webpack_require__(171),
	    setToArray = __webpack_require__(172);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new duplicate free array.
	 */
	function baseUniq(array, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      length = array.length,
	      isCommon = true,
	      result = [],
	      seen = result;
	
	  if (comparator) {
	    isCommon = false;
	    includes = arrayIncludesWith;
	  }
	  else if (length >= LARGE_ARRAY_SIZE) {
	    var set = iteratee ? null : createSet(array);
	    if (set) {
	      return setToArray(set);
	    }
	    isCommon = false;
	    includes = cacheHas;
	    seen = new SetCache;
	  }
	  else {
	    seen = iteratee ? [] : result;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;
	
	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var seenIndex = seen.length;
	      while (seenIndex--) {
	        if (seen[seenIndex] === computed) {
	          continue outer;
	        }
	      }
	      if (iteratee) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	    else if (!includes(seen, computed, comparator)) {
	      if (seen !== result) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}
	
	module.exports = baseUniq;


/***/ },
/* 171 */
/***/ function(module, exports) {

	/**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
	function noop() {
	  // No operation performed.
	}
	
	module.exports = noop;


/***/ },
/* 172 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	module.exports = setToArray;


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _omit2=__webpack_require__(13);var _omit3=_interopRequireDefault(_omit2);var _property2=__webpack_require__(153);var _property3=_interopRequireDefault(_property2);var _isFunction2=__webpack_require__(78);var _isFunction3=_interopRequireDefault(_isFunction2);var _defaults2=__webpack_require__(134);var _defaults3=_interopRequireDefault(_defaults2);
	var _collection=__webpack_require__(151);var _collection2=_interopRequireDefault(_collection);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=
	
	{
	getPadding:function getPadding(props){
	var padding=typeof props.padding==="number"?props.padding:0;
	var paddingObj=typeof props.padding==="object"?props.padding:{};
	return{
	top:paddingObj.top||padding,
	bottom:paddingObj.bottom||padding,
	left:paddingObj.left||padding,
	right:paddingObj.right||padding};
	
	},
	
	getStyles:function getStyles(style,defaultStyles,height,width){
	if(!style){
	return(0,_defaults3.default)({parent:{height:height,width:width}},defaultStyles);
	}var
	
	data=style.data;var labels=style.labels;var parent=style.parent;
	var defaultParent=defaultStyles&&defaultStyles.parent||{};
	var defaultLabels=defaultStyles&&defaultStyles.labels||{};
	var defaultData=defaultStyles&&defaultStyles.data||{};
	return{
	parent:(0,_defaults3.default)({height:height,width:width},parent,defaultParent),
	labels:(0,_defaults3.default)({},labels,defaultLabels),
	data:(0,_defaults3.default)({},data,defaultData)};
	
	},
	
	evaluateProp:function evaluateProp(prop,data,index){
	return(0,_isFunction3.default)(prop)?prop(data,index):prop;
	},
	
	evaluateStyle:function evaluateStyle(style,data,index){var _this=this;
	if(!style||!Object.keys(style).some(function(value){return(0,_isFunction3.default)(style[value]);})){
	return style;
	}
	return Object.keys(style).reduce(function(prev,curr){
	prev[curr]=_this.evaluateProp(style[curr],data,index);
	return prev;
	},{});
	},
	
	getRange:function getRange(props,axis){
	
	var isVertical=axis!=="x";
	var padding=this.getPadding(props);
	if(isVertical){
	return[props.height-padding.bottom,padding.top];
	}
	return[padding.left,props.width-padding.right];
	},
	
	createAccessor:function createAccessor(key){
	
	
	if((0,_isFunction3.default)(key)){
	return key;
	}else if(key===null||typeof key==="undefined"){
	
	return function(x){return x;};
	}
	
	return(0,_property3.default)(key);
	},
	
	modifyProps:function modifyProps(props,fallbackProps,role){
	var theme=props.theme&&props.theme[role]?props.theme[role]:{};
	var themeProps=(0,_omit3.default)(theme,["style"]);
	var baseProps=(0,_defaults3.default)({},props,themeProps,fallbackProps);
	return(0,_defaults3.default)({},baseProps,{clipWidth:baseProps.width,clipHeight:baseProps.height});
	},
	
	
	
	
	
	
	
	
	
	getCurrentAxis:function getCurrentAxis(axis,horizontal){
	var otherAxis=axis==="x"?"y":"x";
	return horizontal?otherAxis:axis;
	},
	
	
	
	
	
	isVertical:function isVertical(props){
	var orientation=props.orientation||(props.dependentAxis?"left":"bottom");
	var vertical={top:false,bottom:false,left:true,right:true};
	return vertical[orientation];
	},
	
	
	
	
	
	stringTicks:function stringTicks(props){
	return props.tickValues!==undefined&&_collection2.default.containsStrings(props.tickValues);
	}};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});exports.default=
	
	
	
	{
	warn:function warn(message){
	if(process.env.NODE_ENV!=="production"){
	if(console&&console.warn){
	console.warn(message);
	}
	}
	}};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(175)))

/***/ },
/* 175 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _isFunction2=__webpack_require__(78);var _isFunction3=_interopRequireDefault(_isFunction2);var _includes2=__webpack_require__(177);var _includes3=_interopRequireDefault(_includes2);
	var _helpers=__webpack_require__(173);var _helpers2=_interopRequireDefault(_helpers);
	var _collection=__webpack_require__(151);var _collection2=_interopRequireDefault(_collection);
	var _d3Scale=__webpack_require__(178);var d3Scale=_interopRequireWildcard(_d3Scale);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var supportedScaleStrings=["linear","time","log","sqrt"];exports.default=
	
	{
	
	getDefaultScale:function getDefaultScale(){
	return d3Scale.scaleLinear();
	},
	
	toNewName:function toNewName(scale){
	
	var capitalize=function capitalize(s){return s&&s[0].toUpperCase()+s.slice(1);};
	return"scale"+capitalize(scale);
	},
	
	validScale:function validScale(scale){
	if(typeof scale==="function"){
	return(0,_isFunction3.default)(scale.copy)&&(0,_isFunction3.default)(scale.domain)&&(0,_isFunction3.default)(scale.range);
	}else if(typeof scale==="string"){
	return(0,_includes3.default)(supportedScaleStrings,scale);
	}
	return false;
	},
	
	isScaleDefined:function isScaleDefined(props,axis){
	if(!props.scale){
	return false;
	}else if(props.scale.x||props.scale.y){
	return props.scale[axis]?true:false;
	}
	return true;
	},
	
	getScaleTypeFromProps:function getScaleTypeFromProps(props,axis){
	if(!this.isScaleDefined(props,axis)){
	return undefined;
	}
	var scale=props.scale[axis]||props.scale;
	return typeof scale==="string"?scale:this.getType(scale);
	},
	
	getScaleFromProps:function getScaleFromProps(props,axis){
	if(!this.isScaleDefined(props,axis)){
	return undefined;
	}
	var scale=props.scale[axis]||props.scale;
	
	if(this.validScale(scale)){
	return(0,_isFunction3.default)(scale)?scale:d3Scale[this.toNewName(scale)]();
	}
	},
	
	getScaleTypeFromData:function getScaleTypeFromData(props,axis){
	if(!props.data){
	return"linear";
	}
	var accessor=_helpers2.default.createAccessor(props[axis]);
	var axisData=props.data.map(accessor);
	return _collection2.default.containsDates(axisData)?"time":"linear";
	},
	
	getBaseScale:function getBaseScale(props,axis){
	var scale=this.getScaleFromProps(props,axis);
	if(scale){
	return scale;
	}
	var dataScale=this.getScaleTypeFromData(props,axis);
	return d3Scale[this.toNewName(dataScale)]();
	},
	
	getType:function getType(scale){
	var duckTypes=[
	{name:"log",method:"base"},
	{name:"ordinal",method:"unknown"},
	{name:"pow-sqrt",method:"exponent"},
	{name:"quantile",method:"quantiles"},
	{name:"quantize-threshold",method:"invertExtent"}];
	
	var scaleType=duckTypes.filter(function(type){
	return scale[type.method]!==undefined;
	})[0];
	return scaleType?scaleType.name:undefined;
	},
	
	getScaleType:function getScaleType(props,axis){
	
	return this.getScaleTypeFromProps(props,axis)||this.getScaleTypeFromData(props,axis);
	}};

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(28);
	
	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array ? array.length : 0;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}
	
	module.exports = arrayIncludes;


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// https://d3js.org/d3-scale/ Version 1.0.3. Copyright 2016 Mike Bostock.
	(function (global, factory) {
	   true ? factory(exports, __webpack_require__(179), __webpack_require__(180), __webpack_require__(10), __webpack_require__(181), __webpack_require__(182), __webpack_require__(183), __webpack_require__(11)) :
	  typeof define === 'function' && define.amd ? define(['exports', 'd3-array', 'd3-collection', 'd3-interpolate', 'd3-format', 'd3-time', 'd3-time-format', 'd3-color'], factory) :
	  (factory((global.d3 = global.d3 || {}),global.d3,global.d3,global.d3,global.d3,global.d3,global.d3,global.d3));
	}(this, function (exports,d3Array,d3Collection,d3Interpolate,d3Format,d3Time,d3TimeFormat,d3Color) { 'use strict';
	
	  var array = Array.prototype;
	
	  var map$1 = array.map;
	  var slice = array.slice;
	
	  var implicit = {name: "implicit"};
	
	  function ordinal(range) {
	    var index = d3Collection.map(),
	        domain = [],
	        unknown = implicit;
	
	    range = range == null ? [] : slice.call(range);
	
	    function scale(d) {
	      var key = d + "", i = index.get(key);
	      if (!i) {
	        if (unknown !== implicit) return unknown;
	        index.set(key, i = domain.push(d));
	      }
	      return range[(i - 1) % range.length];
	    }
	
	    scale.domain = function(_) {
	      if (!arguments.length) return domain.slice();
	      domain = [], index = d3Collection.map();
	      var i = -1, n = _.length, d, key;
	      while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
	      return scale;
	    };
	
	    scale.range = function(_) {
	      return arguments.length ? (range = slice.call(_), scale) : range.slice();
	    };
	
	    scale.unknown = function(_) {
	      return arguments.length ? (unknown = _, scale) : unknown;
	    };
	
	    scale.copy = function() {
	      return ordinal()
	          .domain(domain)
	          .range(range)
	          .unknown(unknown);
	    };
	
	    return scale;
	  }
	
	  function band() {
	    var scale = ordinal().unknown(undefined),
	        domain = scale.domain,
	        ordinalRange = scale.range,
	        range = [0, 1],
	        step,
	        bandwidth,
	        round = false,
	        paddingInner = 0,
	        paddingOuter = 0,
	        align = 0.5;
	
	    delete scale.unknown;
	
	    function rescale() {
	      var n = domain().length,
	          reverse = range[1] < range[0],
	          start = range[reverse - 0],
	          stop = range[1 - reverse];
	      step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
	      if (round) step = Math.floor(step);
	      start += (stop - start - step * (n - paddingInner)) * align;
	      bandwidth = step * (1 - paddingInner);
	      if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
	      var values = d3Array.range(n).map(function(i) { return start + step * i; });
	      return ordinalRange(reverse ? values.reverse() : values);
	    }
	
	    scale.domain = function(_) {
	      return arguments.length ? (domain(_), rescale()) : domain();
	    };
	
	    scale.range = function(_) {
	      return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
	    };
	
	    scale.rangeRound = function(_) {
	      return range = [+_[0], +_[1]], round = true, rescale();
	    };
	
	    scale.bandwidth = function() {
	      return bandwidth;
	    };
	
	    scale.step = function() {
	      return step;
	    };
	
	    scale.round = function(_) {
	      return arguments.length ? (round = !!_, rescale()) : round;
	    };
	
	    scale.padding = function(_) {
	      return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
	    };
	
	    scale.paddingInner = function(_) {
	      return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
	    };
	
	    scale.paddingOuter = function(_) {
	      return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
	    };
	
	    scale.align = function(_) {
	      return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
	    };
	
	    scale.copy = function() {
	      return band()
	          .domain(domain())
	          .range(range)
	          .round(round)
	          .paddingInner(paddingInner)
	          .paddingOuter(paddingOuter)
	          .align(align);
	    };
	
	    return rescale();
	  }
	
	  function pointish(scale) {
	    var copy = scale.copy;
	
	    scale.padding = scale.paddingOuter;
	    delete scale.paddingInner;
	    delete scale.paddingOuter;
	
	    scale.copy = function() {
	      return pointish(copy());
	    };
	
	    return scale;
	  }
	
	  function point() {
	    return pointish(band().paddingInner(1));
	  }
	
	  function constant(x) {
	    return function() {
	      return x;
	    };
	  }
	
	  function number(x) {
	    return +x;
	  }
	
	  var unit = [0, 1];
	
	  function deinterpolate(a, b) {
	    return (b -= (a = +a))
	        ? function(x) { return (x - a) / b; }
	        : constant(b);
	  }
	
	  function deinterpolateClamp(deinterpolate) {
	    return function(a, b) {
	      var d = deinterpolate(a = +a, b = +b);
	      return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
	    };
	  }
	
	  function reinterpolateClamp(reinterpolate) {
	    return function(a, b) {
	      var r = reinterpolate(a = +a, b = +b);
	      return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
	    };
	  }
	
	  function bimap(domain, range, deinterpolate, reinterpolate) {
	    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
	    if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
	    else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
	    return function(x) { return r0(d0(x)); };
	  }
	
	  function polymap(domain, range, deinterpolate, reinterpolate) {
	    var j = Math.min(domain.length, range.length) - 1,
	        d = new Array(j),
	        r = new Array(j),
	        i = -1;
	
	    // Reverse descending domains.
	    if (domain[j] < domain[0]) {
	      domain = domain.slice().reverse();
	      range = range.slice().reverse();
	    }
	
	    while (++i < j) {
	      d[i] = deinterpolate(domain[i], domain[i + 1]);
	      r[i] = reinterpolate(range[i], range[i + 1]);
	    }
	
	    return function(x) {
	      var i = d3Array.bisect(domain, x, 1, j) - 1;
	      return r[i](d[i](x));
	    };
	  }
	
	  function copy(source, target) {
	    return target
	        .domain(source.domain())
	        .range(source.range())
	        .interpolate(source.interpolate())
	        .clamp(source.clamp());
	  }
	
	  // deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
	  // reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
	  function continuous(deinterpolate$$, reinterpolate) {
	    var domain = unit,
	        range = unit,
	        interpolate = d3Interpolate.interpolate,
	        clamp = false,
	        piecewise,
	        output,
	        input;
	
	    function rescale() {
	      piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
	      output = input = null;
	      return scale;
	    }
	
	    function scale(x) {
	      return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate$$) : deinterpolate$$, interpolate)))(+x);
	    }
	
	    scale.invert = function(y) {
	      return (input || (input = piecewise(range, domain, deinterpolate, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
	    };
	
	    scale.domain = function(_) {
	      return arguments.length ? (domain = map$1.call(_, number), rescale()) : domain.slice();
	    };
	
	    scale.range = function(_) {
	      return arguments.length ? (range = slice.call(_), rescale()) : range.slice();
	    };
	
	    scale.rangeRound = function(_) {
	      return range = slice.call(_), interpolate = d3Interpolate.interpolateRound, rescale();
	    };
	
	    scale.clamp = function(_) {
	      return arguments.length ? (clamp = !!_, rescale()) : clamp;
	    };
	
	    scale.interpolate = function(_) {
	      return arguments.length ? (interpolate = _, rescale()) : interpolate;
	    };
	
	    return rescale();
	  }
	
	  function tickFormat(domain, count, specifier) {
	    var start = domain[0],
	        stop = domain[domain.length - 1],
	        step = d3Array.tickStep(start, stop, count == null ? 10 : count),
	        precision;
	    specifier = d3Format.formatSpecifier(specifier == null ? ",f" : specifier);
	    switch (specifier.type) {
	      case "s": {
	        var value = Math.max(Math.abs(start), Math.abs(stop));
	        if (specifier.precision == null && !isNaN(precision = d3Format.precisionPrefix(step, value))) specifier.precision = precision;
	        return d3Format.formatPrefix(specifier, value);
	      }
	      case "":
	      case "e":
	      case "g":
	      case "p":
	      case "r": {
	        if (specifier.precision == null && !isNaN(precision = d3Format.precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
	        break;
	      }
	      case "f":
	      case "%": {
	        if (specifier.precision == null && !isNaN(precision = d3Format.precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
	        break;
	      }
	    }
	    return d3Format.format(specifier);
	  }
	
	  function linearish(scale) {
	    var domain = scale.domain;
	
	    scale.ticks = function(count) {
	      var d = domain();
	      return d3Array.ticks(d[0], d[d.length - 1], count == null ? 10 : count);
	    };
	
	    scale.tickFormat = function(count, specifier) {
	      return tickFormat(domain(), count, specifier);
	    };
	
	    scale.nice = function(count) {
	      var d = domain(),
	          i = d.length - 1,
	          n = count == null ? 10 : count,
	          start = d[0],
	          stop = d[i],
	          step = d3Array.tickStep(start, stop, n);
	
	      if (step) {
	        step = d3Array.tickStep(Math.floor(start / step) * step, Math.ceil(stop / step) * step, n);
	        d[0] = Math.floor(start / step) * step;
	        d[i] = Math.ceil(stop / step) * step;
	        domain(d);
	      }
	
	      return scale;
	    };
	
	    return scale;
	  }
	
	  function linear() {
	    var scale = continuous(deinterpolate, d3Interpolate.interpolateNumber);
	
	    scale.copy = function() {
	      return copy(scale, linear());
	    };
	
	    return linearish(scale);
	  }
	
	  function identity() {
	    var domain = [0, 1];
	
	    function scale(x) {
	      return +x;
	    }
	
	    scale.invert = scale;
	
	    scale.domain = scale.range = function(_) {
	      return arguments.length ? (domain = map$1.call(_, number), scale) : domain.slice();
	    };
	
	    scale.copy = function() {
	      return identity().domain(domain);
	    };
	
	    return linearish(scale);
	  }
	
	  function nice(domain, interval) {
	    domain = domain.slice();
	
	    var i0 = 0,
	        i1 = domain.length - 1,
	        x0 = domain[i0],
	        x1 = domain[i1],
	        t;
	
	    if (x1 < x0) {
	      t = i0, i0 = i1, i1 = t;
	      t = x0, x0 = x1, x1 = t;
	    }
	
	    domain[i0] = interval.floor(x0);
	    domain[i1] = interval.ceil(x1);
	    return domain;
	  }
	
	  function deinterpolate$1(a, b) {
	    return (b = Math.log(b / a))
	        ? function(x) { return Math.log(x / a) / b; }
	        : constant(b);
	  }
	
	  function reinterpolate(a, b) {
	    return a < 0
	        ? function(t) { return -Math.pow(-b, t) * Math.pow(-a, 1 - t); }
	        : function(t) { return Math.pow(b, t) * Math.pow(a, 1 - t); };
	  }
	
	  function pow10(x) {
	    return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
	  }
	
	  function powp(base) {
	    return base === 10 ? pow10
	        : base === Math.E ? Math.exp
	        : function(x) { return Math.pow(base, x); };
	  }
	
	  function logp(base) {
	    return base === Math.E ? Math.log
	        : base === 10 && Math.log10
	        || base === 2 && Math.log2
	        || (base = Math.log(base), function(x) { return Math.log(x) / base; });
	  }
	
	  function reflect(f) {
	    return function(x) {
	      return -f(-x);
	    };
	  }
	
	  function log() {
	    var scale = continuous(deinterpolate$1, reinterpolate).domain([1, 10]),
	        domain = scale.domain,
	        base = 10,
	        logs = logp(10),
	        pows = powp(10);
	
	    function rescale() {
	      logs = logp(base), pows = powp(base);
	      if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
	      return scale;
	    }
	
	    scale.base = function(_) {
	      return arguments.length ? (base = +_, rescale()) : base;
	    };
	
	    scale.domain = function(_) {
	      return arguments.length ? (domain(_), rescale()) : domain();
	    };
	
	    scale.ticks = function(count) {
	      var d = domain(),
	          u = d[0],
	          v = d[d.length - 1],
	          r;
	
	      if (r = v < u) i = u, u = v, v = i;
	
	      var i = logs(u),
	          j = logs(v),
	          p,
	          k,
	          t,
	          n = count == null ? 10 : +count,
	          z = [];
	
	      if (!(base % 1) && j - i < n) {
	        i = Math.round(i) - 1, j = Math.round(j) + 1;
	        if (u > 0) for (; i < j; ++i) {
	          for (k = 1, p = pows(i); k < base; ++k) {
	            t = p * k;
	            if (t < u) continue;
	            if (t > v) break;
	            z.push(t);
	          }
	        } else for (; i < j; ++i) {
	          for (k = base - 1, p = pows(i); k >= 1; --k) {
	            t = p * k;
	            if (t < u) continue;
	            if (t > v) break;
	            z.push(t);
	          }
	        }
	      } else {
	        z = d3Array.ticks(i, j, Math.min(j - i, n)).map(pows);
	      }
	
	      return r ? z.reverse() : z;
	    };
	
	    scale.tickFormat = function(count, specifier) {
	      if (specifier == null) specifier = base === 10 ? ".0e" : ",";
	      if (typeof specifier !== "function") specifier = d3Format.format(specifier);
	      if (count === Infinity) return specifier;
	      if (count == null) count = 10;
	      var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
	      return function(d) {
	        var i = d / pows(Math.round(logs(d)));
	        if (i * base < base - 0.5) i *= base;
	        return i <= k ? specifier(d) : "";
	      };
	    };
	
	    scale.nice = function() {
	      return domain(nice(domain(), {
	        floor: function(x) { return pows(Math.floor(logs(x))); },
	        ceil: function(x) { return pows(Math.ceil(logs(x))); }
	      }));
	    };
	
	    scale.copy = function() {
	      return copy(scale, log().base(base));
	    };
	
	    return scale;
	  }
	
	  function raise(x, exponent) {
	    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
	  }
	
	  function pow() {
	    var exponent = 1,
	        scale = continuous(deinterpolate, reinterpolate),
	        domain = scale.domain;
	
	    function deinterpolate(a, b) {
	      return (b = raise(b, exponent) - (a = raise(a, exponent)))
	          ? function(x) { return (raise(x, exponent) - a) / b; }
	          : constant(b);
	    }
	
	    function reinterpolate(a, b) {
	      b = raise(b, exponent) - (a = raise(a, exponent));
	      return function(t) { return raise(a + b * t, 1 / exponent); };
	    }
	
	    scale.exponent = function(_) {
	      return arguments.length ? (exponent = +_, domain(domain())) : exponent;
	    };
	
	    scale.copy = function() {
	      return copy(scale, pow().exponent(exponent));
	    };
	
	    return linearish(scale);
	  }
	
	  function sqrt() {
	    return pow().exponent(0.5);
	  }
	
	  function quantile$1() {
	    var domain = [],
	        range = [],
	        thresholds = [];
	
	    function rescale() {
	      var i = 0, n = Math.max(1, range.length);
	      thresholds = new Array(n - 1);
	      while (++i < n) thresholds[i - 1] = d3Array.quantile(domain, i / n);
	      return scale;
	    }
	
	    function scale(x) {
	      if (!isNaN(x = +x)) return range[d3Array.bisect(thresholds, x)];
	    }
	
	    scale.invertExtent = function(y) {
	      var i = range.indexOf(y);
	      return i < 0 ? [NaN, NaN] : [
	        i > 0 ? thresholds[i - 1] : domain[0],
	        i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
	      ];
	    };
	
	    scale.domain = function(_) {
	      if (!arguments.length) return domain.slice();
	      domain = [];
	      for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
	      domain.sort(d3Array.ascending);
	      return rescale();
	    };
	
	    scale.range = function(_) {
	      return arguments.length ? (range = slice.call(_), rescale()) : range.slice();
	    };
	
	    scale.quantiles = function() {
	      return thresholds.slice();
	    };
	
	    scale.copy = function() {
	      return quantile$1()
	          .domain(domain)
	          .range(range);
	    };
	
	    return scale;
	  }
	
	  function quantize() {
	    var x0 = 0,
	        x1 = 1,
	        n = 1,
	        domain = [0.5],
	        range = [0, 1];
	
	    function scale(x) {
	      if (x <= x) return range[d3Array.bisect(domain, x, 0, n)];
	    }
	
	    function rescale() {
	      var i = -1;
	      domain = new Array(n);
	      while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
	      return scale;
	    }
	
	    scale.domain = function(_) {
	      return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
	    };
	
	    scale.range = function(_) {
	      return arguments.length ? (n = (range = slice.call(_)).length - 1, rescale()) : range.slice();
	    };
	
	    scale.invertExtent = function(y) {
	      var i = range.indexOf(y);
	      return i < 0 ? [NaN, NaN]
	          : i < 1 ? [x0, domain[0]]
	          : i >= n ? [domain[n - 1], x1]
	          : [domain[i - 1], domain[i]];
	    };
	
	    scale.copy = function() {
	      return quantize()
	          .domain([x0, x1])
	          .range(range);
	    };
	
	    return linearish(scale);
	  }
	
	  function threshold() {
	    var domain = [0.5],
	        range = [0, 1],
	        n = 1;
	
	    function scale(x) {
	      if (x <= x) return range[d3Array.bisect(domain, x, 0, n)];
	    }
	
	    scale.domain = function(_) {
	      return arguments.length ? (domain = slice.call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
	    };
	
	    scale.range = function(_) {
	      return arguments.length ? (range = slice.call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
	    };
	
	    scale.invertExtent = function(y) {
	      var i = range.indexOf(y);
	      return [domain[i - 1], domain[i]];
	    };
	
	    scale.copy = function() {
	      return threshold()
	          .domain(domain)
	          .range(range);
	    };
	
	    return scale;
	  }
	
	  var durationSecond = 1000;
	  var durationMinute = durationSecond * 60;
	  var durationHour = durationMinute * 60;
	  var durationDay = durationHour * 24;
	  var durationWeek = durationDay * 7;
	  var durationMonth = durationDay * 30;
	  var durationYear = durationDay * 365;
	  function date(t) {
	    return new Date(t);
	  }
	
	  function number$1(t) {
	    return t instanceof Date ? +t : +new Date(+t);
	  }
	
	  function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
	    var scale = continuous(deinterpolate, d3Interpolate.interpolateNumber),
	        invert = scale.invert,
	        domain = scale.domain;
	
	    var formatMillisecond = format(".%L"),
	        formatSecond = format(":%S"),
	        formatMinute = format("%I:%M"),
	        formatHour = format("%I %p"),
	        formatDay = format("%a %d"),
	        formatWeek = format("%b %d"),
	        formatMonth = format("%B"),
	        formatYear = format("%Y");
	
	    var tickIntervals = [
	      [second,  1,      durationSecond],
	      [second,  5,  5 * durationSecond],
	      [second, 15, 15 * durationSecond],
	      [second, 30, 30 * durationSecond],
	      [minute,  1,      durationMinute],
	      [minute,  5,  5 * durationMinute],
	      [minute, 15, 15 * durationMinute],
	      [minute, 30, 30 * durationMinute],
	      [  hour,  1,      durationHour  ],
	      [  hour,  3,  3 * durationHour  ],
	      [  hour,  6,  6 * durationHour  ],
	      [  hour, 12, 12 * durationHour  ],
	      [   day,  1,      durationDay   ],
	      [   day,  2,  2 * durationDay   ],
	      [  week,  1,      durationWeek  ],
	      [ month,  1,      durationMonth ],
	      [ month,  3,  3 * durationMonth ],
	      [  year,  1,      durationYear  ]
	    ];
	
	    function tickFormat(date) {
	      return (second(date) < date ? formatMillisecond
	          : minute(date) < date ? formatSecond
	          : hour(date) < date ? formatMinute
	          : day(date) < date ? formatHour
	          : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
	          : year(date) < date ? formatMonth
	          : formatYear)(date);
	    }
	
	    function tickInterval(interval, start, stop, step) {
	      if (interval == null) interval = 10;
	
	      // If a desired tick count is specified, pick a reasonable tick interval
	      // based on the extent of the domain and a rough estimate of tick size.
	      // Otherwise, assume interval is already a time interval and use it.
	      if (typeof interval === "number") {
	        var target = Math.abs(stop - start) / interval,
	            i = d3Array.bisector(function(i) { return i[2]; }).right(tickIntervals, target);
	        if (i === tickIntervals.length) {
	          step = d3Array.tickStep(start / durationYear, stop / durationYear, interval);
	          interval = year;
	        } else if (i) {
	          i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
	          step = i[1];
	          interval = i[0];
	        } else {
	          step = d3Array.tickStep(start, stop, interval);
	          interval = millisecond;
	        }
	      }
	
	      return step == null ? interval : interval.every(step);
	    }
	
	    scale.invert = function(y) {
	      return new Date(invert(y));
	    };
	
	    scale.domain = function(_) {
	      return arguments.length ? domain(map$1.call(_, number$1)) : domain().map(date);
	    };
	
	    scale.ticks = function(interval, step) {
	      var d = domain(),
	          t0 = d[0],
	          t1 = d[d.length - 1],
	          r = t1 < t0,
	          t;
	      if (r) t = t0, t0 = t1, t1 = t;
	      t = tickInterval(interval, t0, t1, step);
	      t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
	      return r ? t.reverse() : t;
	    };
	
	    scale.tickFormat = function(count, specifier) {
	      return specifier == null ? tickFormat : format(specifier);
	    };
	
	    scale.nice = function(interval, step) {
	      var d = domain();
	      return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
	          ? domain(nice(d, interval))
	          : scale;
	    };
	
	    scale.copy = function() {
	      return copy(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
	    };
	
	    return scale;
	  }
	
	  function time() {
	    return calendar(d3Time.timeYear, d3Time.timeMonth, d3Time.timeWeek, d3Time.timeDay, d3Time.timeHour, d3Time.timeMinute, d3Time.timeSecond, d3Time.timeMillisecond, d3TimeFormat.timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
	  }
	
	  function utcTime() {
	    return calendar(d3Time.utcYear, d3Time.utcMonth, d3Time.utcWeek, d3Time.utcDay, d3Time.utcHour, d3Time.utcMinute, d3Time.utcSecond, d3Time.utcMillisecond, d3TimeFormat.utcFormat).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
	  }
	
	  function colors(s) {
	    return s.match(/.{6}/g).map(function(x) {
	      return "#" + x;
	    });
	  }
	
	  var category10 = colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
	
	  var category20b = colors("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6");
	
	  var category20c = colors("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9");
	
	  var category20 = colors("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5");
	
	  var cubehelix$1 = d3Interpolate.interpolateCubehelixLong(d3Color.cubehelix(300, 0.5, 0.0), d3Color.cubehelix(-240, 0.5, 1.0));
	
	  var warm = d3Interpolate.interpolateCubehelixLong(d3Color.cubehelix(-100, 0.75, 0.35), d3Color.cubehelix(80, 1.50, 0.8));
	
	  var cool = d3Interpolate.interpolateCubehelixLong(d3Color.cubehelix(260, 0.75, 0.35), d3Color.cubehelix(80, 1.50, 0.8));
	
	  var rainbow = d3Color.cubehelix();
	
	  function rainbow$1(t) {
	    if (t < 0 || t > 1) t -= Math.floor(t);
	    var ts = Math.abs(t - 0.5);
	    rainbow.h = 360 * t - 100;
	    rainbow.s = 1.5 - 1.5 * ts;
	    rainbow.l = 0.8 - 0.9 * ts;
	    return rainbow + "";
	  }
	
	  function ramp(range) {
	    var n = range.length;
	    return function(t) {
	      return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
	    };
	  }
	
	  var viridis = ramp(colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
	
	  var magma = ramp(colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
	
	  var inferno = ramp(colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
	
	  var plasma = ramp(colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
	
	  function sequential(interpolator) {
	    var x0 = 0,
	        x1 = 1,
	        clamp = false;
	
	    function scale(x) {
	      var t = (x - x0) / (x1 - x0);
	      return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
	    }
	
	    scale.domain = function(_) {
	      return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [x0, x1];
	    };
	
	    scale.clamp = function(_) {
	      return arguments.length ? (clamp = !!_, scale) : clamp;
	    };
	
	    scale.interpolator = function(_) {
	      return arguments.length ? (interpolator = _, scale) : interpolator;
	    };
	
	    scale.copy = function() {
	      return sequential(interpolator).domain([x0, x1]).clamp(clamp);
	    };
	
	    return linearish(scale);
	  }
	
	  exports.scaleBand = band;
	  exports.scalePoint = point;
	  exports.scaleIdentity = identity;
	  exports.scaleLinear = linear;
	  exports.scaleLog = log;
	  exports.scaleOrdinal = ordinal;
	  exports.scaleImplicit = implicit;
	  exports.scalePow = pow;
	  exports.scaleSqrt = sqrt;
	  exports.scaleQuantile = quantile$1;
	  exports.scaleQuantize = quantize;
	  exports.scaleThreshold = threshold;
	  exports.scaleTime = time;
	  exports.scaleUtc = utcTime;
	  exports.schemeCategory10 = category10;
	  exports.schemeCategory20b = category20b;
	  exports.schemeCategory20c = category20c;
	  exports.schemeCategory20 = category20;
	  exports.interpolateCubehelixDefault = cubehelix$1;
	  exports.interpolateRainbow = rainbow$1;
	  exports.interpolateWarm = warm;
	  exports.interpolateCool = cool;
	  exports.interpolateViridis = viridis;
	  exports.interpolateMagma = magma;
	  exports.interpolateInferno = inferno;
	  exports.interpolatePlasma = plasma;
	  exports.scaleSequential = sequential;
	
	  Object.defineProperty(exports, '__esModule', { value: true });
	
	}));

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// https://d3js.org/d3-array/ Version 1.0.1. Copyright 2016 Mike Bostock.
	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3 = global.d3 || {})));
	}(this, function (exports) { 'use strict';
	
	  function ascending(a, b) {
	    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	  }
	
	  function bisector(compare) {
	    if (compare.length === 1) compare = ascendingComparator(compare);
	    return {
	      left: function(a, x, lo, hi) {
	        if (lo == null) lo = 0;
	        if (hi == null) hi = a.length;
	        while (lo < hi) {
	          var mid = lo + hi >>> 1;
	          if (compare(a[mid], x) < 0) lo = mid + 1;
	          else hi = mid;
	        }
	        return lo;
	      },
	      right: function(a, x, lo, hi) {
	        if (lo == null) lo = 0;
	        if (hi == null) hi = a.length;
	        while (lo < hi) {
	          var mid = lo + hi >>> 1;
	          if (compare(a[mid], x) > 0) hi = mid;
	          else lo = mid + 1;
	        }
	        return lo;
	      }
	    };
	  }
	
	  function ascendingComparator(f) {
	    return function(d, x) {
	      return ascending(f(d), x);
	    };
	  }
	
	  var ascendingBisect = bisector(ascending);
	  var bisectRight = ascendingBisect.right;
	  var bisectLeft = ascendingBisect.left;
	
	  function descending(a, b) {
	    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
	  }
	
	  function number(x) {
	    return x === null ? NaN : +x;
	  }
	
	  function variance(array, f) {
	    var n = array.length,
	        m = 0,
	        a,
	        d,
	        s = 0,
	        i = -1,
	        j = 0;
	
	    if (f == null) {
	      while (++i < n) {
	        if (!isNaN(a = number(array[i]))) {
	          d = a - m;
	          m += d / ++j;
	          s += d * (a - m);
	        }
	      }
	    }
	
	    else {
	      while (++i < n) {
	        if (!isNaN(a = number(f(array[i], i, array)))) {
	          d = a - m;
	          m += d / ++j;
	          s += d * (a - m);
	        }
	      }
	    }
	
	    if (j > 1) return s / (j - 1);
	  }
	
	  function deviation(array, f) {
	    var v = variance(array, f);
	    return v ? Math.sqrt(v) : v;
	  }
	
	  function extent(array, f) {
	    var i = -1,
	        n = array.length,
	        a,
	        b,
	        c;
	
	    if (f == null) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) { a = c = b; break; }
	      while (++i < n) if ((b = array[i]) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    }
	
	    else {
	      while (++i < n) if ((b = f(array[i], i, array)) != null && b >= b) { a = c = b; break; }
	      while (++i < n) if ((b = f(array[i], i, array)) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    }
	
	    return [a, c];
	  }
	
	  var array = Array.prototype;
	
	  var slice = array.slice;
	  var map = array.map;
	
	  function constant(x) {
	    return function() {
	      return x;
	    };
	  }
	
	  function identity(x) {
	    return x;
	  }
	
	  function range(start, stop, step) {
	    start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
	
	    var i = -1,
	        n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
	        range = new Array(n);
	
	    while (++i < n) {
	      range[i] = start + i * step;
	    }
	
	    return range;
	  }
	
	  var e10 = Math.sqrt(50);
	  var e5 = Math.sqrt(10);
	  var e2 = Math.sqrt(2);
	  function ticks(start, stop, count) {
	    var step = tickStep(start, stop, count);
	    return range(
	      Math.ceil(start / step) * step,
	      Math.floor(stop / step) * step + step / 2, // inclusive
	      step
	    );
	  }
	
	  function tickStep(start, stop, count) {
	    var step0 = Math.abs(stop - start) / Math.max(0, count),
	        step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
	        error = step0 / step1;
	    if (error >= e10) step1 *= 10;
	    else if (error >= e5) step1 *= 5;
	    else if (error >= e2) step1 *= 2;
	    return stop < start ? -step1 : step1;
	  }
	
	  function sturges(values) {
	    return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
	  }
	
	  function histogram() {
	    var value = identity,
	        domain = extent,
	        threshold = sturges;
	
	    function histogram(data) {
	      var i,
	          n = data.length,
	          x,
	          values = new Array(n);
	
	      for (i = 0; i < n; ++i) {
	        values[i] = value(data[i], i, data);
	      }
	
	      var xz = domain(values),
	          x0 = xz[0],
	          x1 = xz[1],
	          tz = threshold(values, x0, x1);
	
	      // Convert number of thresholds into uniform thresholds.
	      if (!Array.isArray(tz)) tz = ticks(x0, x1, tz);
	
	      // Remove any thresholds outside the domain.
	      var m = tz.length;
	      while (tz[0] <= x0) tz.shift(), --m;
	      while (tz[m - 1] >= x1) tz.pop(), --m;
	
	      var bins = new Array(m + 1),
	          bin;
	
	      // Initialize bins.
	      for (i = 0; i <= m; ++i) {
	        bin = bins[i] = [];
	        bin.x0 = i > 0 ? tz[i - 1] : x0;
	        bin.x1 = i < m ? tz[i] : x1;
	      }
	
	      // Assign data to bins by value, ignoring any outside the domain.
	      for (i = 0; i < n; ++i) {
	        x = values[i];
	        if (x0 <= x && x <= x1) {
	          bins[bisectRight(tz, x, 0, m)].push(data[i]);
	        }
	      }
	
	      return bins;
	    }
	
	    histogram.value = function(_) {
	      return arguments.length ? (value = typeof _ === "function" ? _ : constant(_), histogram) : value;
	    };
	
	    histogram.domain = function(_) {
	      return arguments.length ? (domain = typeof _ === "function" ? _ : constant([_[0], _[1]]), histogram) : domain;
	    };
	
	    histogram.thresholds = function(_) {
	      return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? constant(slice.call(_)) : constant(_), histogram) : threshold;
	    };
	
	    return histogram;
	  }
	
	  function quantile(array, p, f) {
	    if (f == null) f = number;
	    if (!(n = array.length)) return;
	    if ((p = +p) <= 0 || n < 2) return +f(array[0], 0, array);
	    if (p >= 1) return +f(array[n - 1], n - 1, array);
	    var n,
	        h = (n - 1) * p,
	        i = Math.floor(h),
	        a = +f(array[i], i, array),
	        b = +f(array[i + 1], i + 1, array);
	    return a + (b - a) * (h - i);
	  }
	
	  function freedmanDiaconis(values, min, max) {
	    values = map.call(values, number).sort(ascending);
	    return Math.ceil((max - min) / (2 * (quantile(values, 0.75) - quantile(values, 0.25)) * Math.pow(values.length, -1 / 3)));
	  }
	
	  function scott(values, min, max) {
	    return Math.ceil((max - min) / (3.5 * deviation(values) * Math.pow(values.length, -1 / 3)));
	  }
	
	  function max(array, f) {
	    var i = -1,
	        n = array.length,
	        a,
	        b;
	
	    if (f == null) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) { a = b; break; }
	      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
	    }
	
	    else {
	      while (++i < n) if ((b = f(array[i], i, array)) != null && b >= b) { a = b; break; }
	      while (++i < n) if ((b = f(array[i], i, array)) != null && b > a) a = b;
	    }
	
	    return a;
	  }
	
	  function mean(array, f) {
	    var s = 0,
	        n = array.length,
	        a,
	        i = -1,
	        j = n;
	
	    if (f == null) {
	      while (++i < n) if (!isNaN(a = number(array[i]))) s += a; else --j;
	    }
	
	    else {
	      while (++i < n) if (!isNaN(a = number(f(array[i], i, array)))) s += a; else --j;
	    }
	
	    if (j) return s / j;
	  }
	
	  function median(array, f) {
	    var numbers = [],
	        n = array.length,
	        a,
	        i = -1;
	
	    if (f == null) {
	      while (++i < n) if (!isNaN(a = number(array[i]))) numbers.push(a);
	    }
	
	    else {
	      while (++i < n) if (!isNaN(a = number(f(array[i], i, array)))) numbers.push(a);
	    }
	
	    return quantile(numbers.sort(ascending), 0.5);
	  }
	
	  function merge(arrays) {
	    var n = arrays.length,
	        m,
	        i = -1,
	        j = 0,
	        merged,
	        array;
	
	    while (++i < n) j += arrays[i].length;
	    merged = new Array(j);
	
	    while (--n >= 0) {
	      array = arrays[n];
	      m = array.length;
	      while (--m >= 0) {
	        merged[--j] = array[m];
	      }
	    }
	
	    return merged;
	  }
	
	  function min(array, f) {
	    var i = -1,
	        n = array.length,
	        a,
	        b;
	
	    if (f == null) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) { a = b; break; }
	      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
	    }
	
	    else {
	      while (++i < n) if ((b = f(array[i], i, array)) != null && b >= b) { a = b; break; }
	      while (++i < n) if ((b = f(array[i], i, array)) != null && a > b) a = b;
	    }
	
	    return a;
	  }
	
	  function pairs(array) {
	    var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
	    while (i < n) pairs[i] = [p, p = array[++i]];
	    return pairs;
	  }
	
	  function permute(array, indexes) {
	    var i = indexes.length, permutes = new Array(i);
	    while (i--) permutes[i] = array[indexes[i]];
	    return permutes;
	  }
	
	  function scan(array, compare) {
	    if (!(n = array.length)) return;
	    var i = 0,
	        n,
	        j = 0,
	        xi,
	        xj = array[j];
	
	    if (!compare) compare = ascending;
	
	    while (++i < n) if (compare(xi = array[i], xj) < 0 || compare(xj, xj) !== 0) xj = xi, j = i;
	
	    if (compare(xj, xj) === 0) return j;
	  }
	
	  function shuffle(array, i0, i1) {
	    var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
	        t,
	        i;
	
	    while (m) {
	      i = Math.random() * m-- | 0;
	      t = array[m + i0];
	      array[m + i0] = array[i + i0];
	      array[i + i0] = t;
	    }
	
	    return array;
	  }
	
	  function sum(array, f) {
	    var s = 0,
	        n = array.length,
	        a,
	        i = -1;
	
	    if (f == null) {
	      while (++i < n) if (a = +array[i]) s += a; // Note: zero and null are equivalent.
	    }
	
	    else {
	      while (++i < n) if (a = +f(array[i], i, array)) s += a;
	    }
	
	    return s;
	  }
	
	  function transpose(matrix) {
	    if (!(n = matrix.length)) return [];
	    for (var i = -1, m = min(matrix, length), transpose = new Array(m); ++i < m;) {
	      for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
	        row[j] = matrix[j][i];
	      }
	    }
	    return transpose;
	  }
	
	  function length(d) {
	    return d.length;
	  }
	
	  function zip() {
	    return transpose(arguments);
	  }
	
	  exports.bisect = bisectRight;
	  exports.bisectRight = bisectRight;
	  exports.bisectLeft = bisectLeft;
	  exports.ascending = ascending;
	  exports.bisector = bisector;
	  exports.descending = descending;
	  exports.deviation = deviation;
	  exports.extent = extent;
	  exports.histogram = histogram;
	  exports.thresholdFreedmanDiaconis = freedmanDiaconis;
	  exports.thresholdScott = scott;
	  exports.thresholdSturges = sturges;
	  exports.max = max;
	  exports.mean = mean;
	  exports.median = median;
	  exports.merge = merge;
	  exports.min = min;
	  exports.pairs = pairs;
	  exports.permute = permute;
	  exports.quantile = quantile;
	  exports.range = range;
	  exports.scan = scan;
	  exports.shuffle = shuffle;
	  exports.sum = sum;
	  exports.ticks = ticks;
	  exports.tickStep = tickStep;
	  exports.transpose = transpose;
	  exports.variance = variance;
	  exports.zip = zip;
	
	  Object.defineProperty(exports, '__esModule', { value: true });
	
	}));

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// https://d3js.org/d3-collection/ Version 1.0.1. Copyright 2016 Mike Bostock.
	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3 = global.d3 || {})));
	}(this, function (exports) { 'use strict';
	
	  var prefix = "$";
	
	  function Map() {}
	
	  Map.prototype = map.prototype = {
	    constructor: Map,
	    has: function(key) {
	      return (prefix + key) in this;
	    },
	    get: function(key) {
	      return this[prefix + key];
	    },
	    set: function(key, value) {
	      this[prefix + key] = value;
	      return this;
	    },
	    remove: function(key) {
	      var property = prefix + key;
	      return property in this && delete this[property];
	    },
	    clear: function() {
	      for (var property in this) if (property[0] === prefix) delete this[property];
	    },
	    keys: function() {
	      var keys = [];
	      for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
	      return keys;
	    },
	    values: function() {
	      var values = [];
	      for (var property in this) if (property[0] === prefix) values.push(this[property]);
	      return values;
	    },
	    entries: function() {
	      var entries = [];
	      for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
	      return entries;
	    },
	    size: function() {
	      var size = 0;
	      for (var property in this) if (property[0] === prefix) ++size;
	      return size;
	    },
	    empty: function() {
	      for (var property in this) if (property[0] === prefix) return false;
	      return true;
	    },
	    each: function(f) {
	      for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
	    }
	  };
	
	  function map(object, f) {
	    var map = new Map;
	
	    // Copy constructor.
	    if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });
	
	    // Index array by numeric index or specified key function.
	    else if (Array.isArray(object)) {
	      var i = -1,
	          n = object.length,
	          o;
	
	      if (f == null) while (++i < n) map.set(i, object[i]);
	      else while (++i < n) map.set(f(o = object[i], i, object), o);
	    }
	
	    // Convert object to map.
	    else if (object) for (var key in object) map.set(key, object[key]);
	
	    return map;
	  }
	
	  function nest() {
	    var keys = [],
	        sortKeys = [],
	        sortValues,
	        rollup,
	        nest;
	
	    function apply(array, depth, createResult, setResult) {
	      if (depth >= keys.length) return rollup != null
	          ? rollup(array) : (sortValues != null
	          ? array.sort(sortValues)
	          : array);
	
	      var i = -1,
	          n = array.length,
	          key = keys[depth++],
	          keyValue,
	          value,
	          valuesByKey = map(),
	          values,
	          result = createResult();
	
	      while (++i < n) {
	        if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
	          values.push(value);
	        } else {
	          valuesByKey.set(keyValue, [value]);
	        }
	      }
	
	      valuesByKey.each(function(values, key) {
	        setResult(result, key, apply(values, depth, createResult, setResult));
	      });
	
	      return result;
	    }
	
	    function entries(map, depth) {
	      if (++depth > keys.length) return map;
	      var array, sortKey = sortKeys[depth - 1];
	      if (rollup != null && depth >= keys.length) array = map.entries();
	      else array = [], map.each(function(v, k) { array.push({key: k, values: entries(v, depth)}); });
	      return sortKey != null ? array.sort(function(a, b) { return sortKey(a.key, b.key); }) : array;
	    }
	
	    return nest = {
	      object: function(array) { return apply(array, 0, createObject, setObject); },
	      map: function(array) { return apply(array, 0, createMap, setMap); },
	      entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
	      key: function(d) { keys.push(d); return nest; },
	      sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
	      sortValues: function(order) { sortValues = order; return nest; },
	      rollup: function(f) { rollup = f; return nest; }
	    };
	  }
	
	  function createObject() {
	    return {};
	  }
	
	  function setObject(object, key, value) {
	    object[key] = value;
	  }
	
	  function createMap() {
	    return map();
	  }
	
	  function setMap(map, key, value) {
	    map.set(key, value);
	  }
	
	  function Set() {}
	
	  var proto = map.prototype;
	
	  Set.prototype = set.prototype = {
	    constructor: Set,
	    has: proto.has,
	    add: function(value) {
	      value += "";
	      this[prefix + value] = value;
	      return this;
	    },
	    remove: proto.remove,
	    clear: proto.clear,
	    values: proto.keys,
	    size: proto.size,
	    empty: proto.empty,
	    each: proto.each
	  };
	
	  function set(object, f) {
	    var set = new Set;
	
	    // Copy constructor.
	    if (object instanceof Set) object.each(function(value) { set.add(value); });
	
	    // Otherwise, assume it’s an array.
	    else if (object) {
	      var i = -1, n = object.length;
	      if (f == null) while (++i < n) set.add(object[i]);
	      else while (++i < n) set.add(f(object[i], i, object));
	    }
	
	    return set;
	  }
	
	  function keys(map) {
	    var keys = [];
	    for (var key in map) keys.push(key);
	    return keys;
	  }
	
	  function values(map) {
	    var values = [];
	    for (var key in map) values.push(map[key]);
	    return values;
	  }
	
	  function entries(map) {
	    var entries = [];
	    for (var key in map) entries.push({key: key, value: map[key]});
	    return entries;
	  }
	
	  exports.nest = nest;
	  exports.set = set;
	  exports.map = map;
	  exports.keys = keys;
	  exports.values = values;
	  exports.entries = entries;
	
	  Object.defineProperty(exports, '__esModule', { value: true });
	
	}));

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// https://d3js.org/d3-format/ Version 1.0.2. Copyright 2016 Mike Bostock.
	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3 = global.d3 || {})));
	}(this, function (exports) { 'use strict';
	
	  // Computes the decimal coefficient and exponent of the specified number x with
	  // significant digits p, where x is positive and p is in [1, 21] or undefined.
	  // For example, formatDecimal(1.23) returns ["123", 0].
	  function formatDecimal(x, p) {
	    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
	    var i, coefficient = x.slice(0, i);
	
	    // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
	    // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
	    return [
	      coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
	      +x.slice(i + 1)
	    ];
	  }
	
	  function exponent(x) {
	    return x = formatDecimal(Math.abs(x)), x ? x[1] : NaN;
	  }
	
	  function formatGroup(grouping, thousands) {
	    return function(value, width) {
	      var i = value.length,
	          t = [],
	          j = 0,
	          g = grouping[0],
	          length = 0;
	
	      while (i > 0 && g > 0) {
	        if (length + g + 1 > width) g = Math.max(1, width - length);
	        t.push(value.substring(i -= g, i + g));
	        if ((length += g + 1) > width) break;
	        g = grouping[j = (j + 1) % grouping.length];
	      }
	
	      return t.reverse().join(thousands);
	    };
	  }
	
	  function formatDefault(x, p) {
	    x = x.toPrecision(p);
	
	    out: for (var n = x.length, i = 1, i0 = -1, i1; i < n; ++i) {
	      switch (x[i]) {
	        case ".": i0 = i1 = i; break;
	        case "0": if (i0 === 0) i0 = i; i1 = i; break;
	        case "e": break out;
	        default: if (i0 > 0) i0 = 0; break;
	      }
	    }
	
	    return i0 > 0 ? x.slice(0, i0) + x.slice(i1 + 1) : x;
	  }
	
	  var prefixExponent;
	
	  function formatPrefixAuto(x, p) {
	    var d = formatDecimal(x, p);
	    if (!d) return x + "";
	    var coefficient = d[0],
	        exponent = d[1],
	        i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
	        n = coefficient.length;
	    return i === n ? coefficient
	        : i > n ? coefficient + new Array(i - n + 1).join("0")
	        : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
	        : "0." + new Array(1 - i).join("0") + formatDecimal(x, Math.max(0, p + i - 1))[0]; // less than 1y!
	  }
	
	  function formatRounded(x, p) {
	    var d = formatDecimal(x, p);
	    if (!d) return x + "";
	    var coefficient = d[0],
	        exponent = d[1];
	    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
	        : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
	        : coefficient + new Array(exponent - coefficient.length + 2).join("0");
	  }
	
	  var formatTypes = {
	    "": formatDefault,
	    "%": function(x, p) { return (x * 100).toFixed(p); },
	    "b": function(x) { return Math.round(x).toString(2); },
	    "c": function(x) { return x + ""; },
	    "d": function(x) { return Math.round(x).toString(10); },
	    "e": function(x, p) { return x.toExponential(p); },
	    "f": function(x, p) { return x.toFixed(p); },
	    "g": function(x, p) { return x.toPrecision(p); },
	    "o": function(x) { return Math.round(x).toString(8); },
	    "p": function(x, p) { return formatRounded(x * 100, p); },
	    "r": formatRounded,
	    "s": formatPrefixAuto,
	    "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
	    "x": function(x) { return Math.round(x).toString(16); }
	  };
	
	  // [[fill]align][sign][symbol][0][width][,][.precision][type]
	  var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
	
	  function formatSpecifier(specifier) {
	    return new FormatSpecifier(specifier);
	  }
	
	  function FormatSpecifier(specifier) {
	    if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
	
	    var match,
	        fill = match[1] || " ",
	        align = match[2] || ">",
	        sign = match[3] || "-",
	        symbol = match[4] || "",
	        zero = !!match[5],
	        width = match[6] && +match[6],
	        comma = !!match[7],
	        precision = match[8] && +match[8].slice(1),
	        type = match[9] || "";
	
	    // The "n" type is an alias for ",g".
	    if (type === "n") comma = true, type = "g";
	
	    // Map invalid types to the default format.
	    else if (!formatTypes[type]) type = "";
	
	    // If zero fill is specified, padding goes after sign and before digits.
	    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";
	
	    this.fill = fill;
	    this.align = align;
	    this.sign = sign;
	    this.symbol = symbol;
	    this.zero = zero;
	    this.width = width;
	    this.comma = comma;
	    this.precision = precision;
	    this.type = type;
	  }
	
	  FormatSpecifier.prototype.toString = function() {
	    return this.fill
	        + this.align
	        + this.sign
	        + this.symbol
	        + (this.zero ? "0" : "")
	        + (this.width == null ? "" : Math.max(1, this.width | 0))
	        + (this.comma ? "," : "")
	        + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
	        + this.type;
	  };
	
	  var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];
	
	  function identity(x) {
	    return x;
	  }
	
	  function formatLocale(locale) {
	    var group = locale.grouping && locale.thousands ? formatGroup(locale.grouping, locale.thousands) : identity,
	        currency = locale.currency,
	        decimal = locale.decimal;
	
	    function newFormat(specifier) {
	      specifier = formatSpecifier(specifier);
	
	      var fill = specifier.fill,
	          align = specifier.align,
	          sign = specifier.sign,
	          symbol = specifier.symbol,
	          zero = specifier.zero,
	          width = specifier.width,
	          comma = specifier.comma,
	          precision = specifier.precision,
	          type = specifier.type;
	
	      // Compute the prefix and suffix.
	      // For SI-prefix, the suffix is lazily computed.
	      var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
	          suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? "%" : "";
	
	      // What format function should we use?
	      // Is this an integer type?
	      // Can this type generate exponential notation?
	      var formatType = formatTypes[type],
	          maybeSuffix = !type || /[defgprs%]/.test(type);
	
	      // Set the default precision if not specified,
	      // or clamp the specified precision to the supported range.
	      // For significant precision, it must be in [1, 21].
	      // For fixed precision, it must be in [0, 20].
	      precision = precision == null ? (type ? 6 : 12)
	          : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
	          : Math.max(0, Math.min(20, precision));
	
	      function format(value) {
	        var valuePrefix = prefix,
	            valueSuffix = suffix,
	            i, n, c;
	
	        if (type === "c") {
	          valueSuffix = formatType(value) + valueSuffix;
	          value = "";
	        } else {
	          value = +value;
	
	          // Convert negative to positive, and compute the prefix.
	          // Note that -0 is not less than 0, but 1 / -0 is!
	          var valueNegative = (value < 0 || 1 / value < 0) && (value *= -1, true);
	
	          // Perform the initial formatting.
	          value = formatType(value, precision);
	
	          // If the original value was negative, it may be rounded to zero during
	          // formatting; treat this as (positive) zero.
	          if (valueNegative) {
	            i = -1, n = value.length;
	            valueNegative = false;
	            while (++i < n) {
	              if (c = value.charCodeAt(i), (48 < c && c < 58)
	                  || (type === "x" && 96 < c && c < 103)
	                  || (type === "X" && 64 < c && c < 71)) {
	                valueNegative = true;
	                break;
	              }
	            }
	          }
	
	          // Compute the prefix and suffix.
	          valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
	          valueSuffix = valueSuffix + (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + (valueNegative && sign === "(" ? ")" : "");
	
	          // Break the formatted value into the integer “value” part that can be
	          // grouped, and fractional or exponential “suffix” part that is not.
	          if (maybeSuffix) {
	            i = -1, n = value.length;
	            while (++i < n) {
	              if (c = value.charCodeAt(i), 48 > c || c > 57) {
	                valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
	                value = value.slice(0, i);
	                break;
	              }
	            }
	          }
	        }
	
	        // If the fill character is not "0", grouping is applied before padding.
	        if (comma && !zero) value = group(value, Infinity);
	
	        // Compute the padding.
	        var length = valuePrefix.length + value.length + valueSuffix.length,
	            padding = length < width ? new Array(width - length + 1).join(fill) : "";
	
	        // If the fill character is "0", grouping is applied after padding.
	        if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
	
	        // Reconstruct the final output based on the desired alignment.
	        switch (align) {
	          case "<": return valuePrefix + value + valueSuffix + padding;
	          case "=": return valuePrefix + padding + value + valueSuffix;
	          case "^": return padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
	        }
	        return padding + valuePrefix + value + valueSuffix;
	      }
	
	      format.toString = function() {
	        return specifier + "";
	      };
	
	      return format;
	    }
	
	    function formatPrefix(specifier, value) {
	      var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
	          e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
	          k = Math.pow(10, -e),
	          prefix = prefixes[8 + e / 3];
	      return function(value) {
	        return f(k * value) + prefix;
	      };
	    }
	
	    return {
	      format: newFormat,
	      formatPrefix: formatPrefix
	    };
	  }
	
	  var locale;
	  defaultLocale({
	    decimal: ".",
	    thousands: ",",
	    grouping: [3],
	    currency: ["$", ""]
	  });
	
	  function defaultLocale(definition) {
	    locale = formatLocale(definition);
	    exports.format = locale.format;
	    exports.formatPrefix = locale.formatPrefix;
	    return locale;
	  }
	
	  function precisionFixed(step) {
	    return Math.max(0, -exponent(Math.abs(step)));
	  }
	
	  function precisionPrefix(step, value) {
	    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
	  }
	
	  function precisionRound(step, max) {
	    step = Math.abs(step), max = Math.abs(max) - step;
	    return Math.max(0, exponent(max) - exponent(step)) + 1;
	  }
	
	  exports.formatDefaultLocale = defaultLocale;
	  exports.formatLocale = formatLocale;
	  exports.formatSpecifier = formatSpecifier;
	  exports.precisionFixed = precisionFixed;
	  exports.precisionPrefix = precisionPrefix;
	  exports.precisionRound = precisionRound;
	
	  Object.defineProperty(exports, '__esModule', { value: true });
	
	}));

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// https://d3js.org/d3-time/ Version 1.0.4. Copyright 2016 Mike Bostock.
	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3 = global.d3 || {})));
	}(this, (function (exports) { 'use strict';
	
	var t0 = new Date;
	var t1 = new Date;
	
	function newInterval(floori, offseti, count, field) {
	
	  function interval(date) {
	    return floori(date = new Date(+date)), date;
	  }
	
	  interval.floor = interval;
	
	  interval.ceil = function(date) {
	    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
	  };
	
	  interval.round = function(date) {
	    var d0 = interval(date),
	        d1 = interval.ceil(date);
	    return date - d0 < d1 - date ? d0 : d1;
	  };
	
	  interval.offset = function(date, step) {
	    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
	  };
	
	  interval.range = function(start, stop, step) {
	    var range = [];
	    start = interval.ceil(start);
	    step = step == null ? 1 : Math.floor(step);
	    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
	    do range.push(new Date(+start)); while (offseti(start, step), floori(start), start < stop)
	    return range;
	  };
	
	  interval.filter = function(test) {
	    return newInterval(function(date) {
	      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
	    }, function(date, step) {
	      if (date >= date) while (--step >= 0) while (offseti(date, 1), !test(date)) {} // eslint-disable-line no-empty
	    });
	  };
	
	  if (count) {
	    interval.count = function(start, end) {
	      t0.setTime(+start), t1.setTime(+end);
	      floori(t0), floori(t1);
	      return Math.floor(count(t0, t1));
	    };
	
	    interval.every = function(step) {
	      step = Math.floor(step);
	      return !isFinite(step) || !(step > 0) ? null
	          : !(step > 1) ? interval
	          : interval.filter(field
	              ? function(d) { return field(d) % step === 0; }
	              : function(d) { return interval.count(0, d) % step === 0; });
	    };
	  }
	
	  return interval;
	}
	
	var millisecond = newInterval(function() {
	  // noop
	}, function(date, step) {
	  date.setTime(+date + step);
	}, function(start, end) {
	  return end - start;
	});
	
	// An optimized implementation for this simple case.
	millisecond.every = function(k) {
	  k = Math.floor(k);
	  if (!isFinite(k) || !(k > 0)) return null;
	  if (!(k > 1)) return millisecond;
	  return newInterval(function(date) {
	    date.setTime(Math.floor(date / k) * k);
	  }, function(date, step) {
	    date.setTime(+date + step * k);
	  }, function(start, end) {
	    return (end - start) / k;
	  });
	};
	
	var milliseconds = millisecond.range;
	
	var durationSecond = 1e3;
	var durationMinute = 6e4;
	var durationHour = 36e5;
	var durationDay = 864e5;
	var durationWeek = 6048e5;
	
	var second = newInterval(function(date) {
	  date.setTime(Math.floor(date / durationSecond) * durationSecond);
	}, function(date, step) {
	  date.setTime(+date + step * durationSecond);
	}, function(start, end) {
	  return (end - start) / durationSecond;
	}, function(date) {
	  return date.getUTCSeconds();
	});
	
	var seconds = second.range;
	
	var minute = newInterval(function(date) {
	  date.setTime(Math.floor(date / durationMinute) * durationMinute);
	}, function(date, step) {
	  date.setTime(+date + step * durationMinute);
	}, function(start, end) {
	  return (end - start) / durationMinute;
	}, function(date) {
	  return date.getMinutes();
	});
	
	var minutes = minute.range;
	
	var hour = newInterval(function(date) {
	  var offset = date.getTimezoneOffset() * durationMinute % durationHour;
	  if (offset < 0) offset += durationHour;
	  date.setTime(Math.floor((+date - offset) / durationHour) * durationHour + offset);
	}, function(date, step) {
	  date.setTime(+date + step * durationHour);
	}, function(start, end) {
	  return (end - start) / durationHour;
	}, function(date) {
	  return date.getHours();
	});
	
	var hours = hour.range;
	
	var day = newInterval(function(date) {
	  date.setHours(0, 0, 0, 0);
	}, function(date, step) {
	  date.setDate(date.getDate() + step);
	}, function(start, end) {
	  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay;
	}, function(date) {
	  return date.getDate() - 1;
	});
	
	var days = day.range;
	
	function weekday(i) {
	  return newInterval(function(date) {
	    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
	    date.setHours(0, 0, 0, 0);
	  }, function(date, step) {
	    date.setDate(date.getDate() + step * 7);
	  }, function(start, end) {
	    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
	  });
	}
	
	var sunday = weekday(0);
	var monday = weekday(1);
	var tuesday = weekday(2);
	var wednesday = weekday(3);
	var thursday = weekday(4);
	var friday = weekday(5);
	var saturday = weekday(6);
	
	var sundays = sunday.range;
	var mondays = monday.range;
	var tuesdays = tuesday.range;
	var wednesdays = wednesday.range;
	var thursdays = thursday.range;
	var fridays = friday.range;
	var saturdays = saturday.range;
	
	var month = newInterval(function(date) {
	  date.setDate(1);
	  date.setHours(0, 0, 0, 0);
	}, function(date, step) {
	  date.setMonth(date.getMonth() + step);
	}, function(start, end) {
	  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
	}, function(date) {
	  return date.getMonth();
	});
	
	var months = month.range;
	
	var year = newInterval(function(date) {
	  date.setMonth(0, 1);
	  date.setHours(0, 0, 0, 0);
	}, function(date, step) {
	  date.setFullYear(date.getFullYear() + step);
	}, function(start, end) {
	  return end.getFullYear() - start.getFullYear();
	}, function(date) {
	  return date.getFullYear();
	});
	
	// An optimized implementation for this simple case.
	year.every = function(k) {
	  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
	    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
	    date.setMonth(0, 1);
	    date.setHours(0, 0, 0, 0);
	  }, function(date, step) {
	    date.setFullYear(date.getFullYear() + step * k);
	  });
	};
	
	var years = year.range;
	
	var utcMinute = newInterval(function(date) {
	  date.setUTCSeconds(0, 0);
	}, function(date, step) {
	  date.setTime(+date + step * durationMinute);
	}, function(start, end) {
	  return (end - start) / durationMinute;
	}, function(date) {
	  return date.getUTCMinutes();
	});
	
	var utcMinutes = utcMinute.range;
	
	var utcHour = newInterval(function(date) {
	  date.setUTCMinutes(0, 0, 0);
	}, function(date, step) {
	  date.setTime(+date + step * durationHour);
	}, function(start, end) {
	  return (end - start) / durationHour;
	}, function(date) {
	  return date.getUTCHours();
	});
	
	var utcHours = utcHour.range;
	
	var utcDay = newInterval(function(date) {
	  date.setUTCHours(0, 0, 0, 0);
	}, function(date, step) {
	  date.setUTCDate(date.getUTCDate() + step);
	}, function(start, end) {
	  return (end - start) / durationDay;
	}, function(date) {
	  return date.getUTCDate() - 1;
	});
	
	var utcDays = utcDay.range;
	
	function utcWeekday(i) {
	  return newInterval(function(date) {
	    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
	    date.setUTCHours(0, 0, 0, 0);
	  }, function(date, step) {
	    date.setUTCDate(date.getUTCDate() + step * 7);
	  }, function(start, end) {
	    return (end - start) / durationWeek;
	  });
	}
	
	var utcSunday = utcWeekday(0);
	var utcMonday = utcWeekday(1);
	var utcTuesday = utcWeekday(2);
	var utcWednesday = utcWeekday(3);
	var utcThursday = utcWeekday(4);
	var utcFriday = utcWeekday(5);
	var utcSaturday = utcWeekday(6);
	
	var utcSundays = utcSunday.range;
	var utcMondays = utcMonday.range;
	var utcTuesdays = utcTuesday.range;
	var utcWednesdays = utcWednesday.range;
	var utcThursdays = utcThursday.range;
	var utcFridays = utcFriday.range;
	var utcSaturdays = utcSaturday.range;
	
	var utcMonth = newInterval(function(date) {
	  date.setUTCDate(1);
	  date.setUTCHours(0, 0, 0, 0);
	}, function(date, step) {
	  date.setUTCMonth(date.getUTCMonth() + step);
	}, function(start, end) {
	  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
	}, function(date) {
	  return date.getUTCMonth();
	});
	
	var utcMonths = utcMonth.range;
	
	var utcYear = newInterval(function(date) {
	  date.setUTCMonth(0, 1);
	  date.setUTCHours(0, 0, 0, 0);
	}, function(date, step) {
	  date.setUTCFullYear(date.getUTCFullYear() + step);
	}, function(start, end) {
	  return end.getUTCFullYear() - start.getUTCFullYear();
	}, function(date) {
	  return date.getUTCFullYear();
	});
	
	// An optimized implementation for this simple case.
	utcYear.every = function(k) {
	  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
	    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
	    date.setUTCMonth(0, 1);
	    date.setUTCHours(0, 0, 0, 0);
	  }, function(date, step) {
	    date.setUTCFullYear(date.getUTCFullYear() + step * k);
	  });
	};
	
	var utcYears = utcYear.range;
	
	exports.timeInterval = newInterval;
	exports.timeMillisecond = millisecond;
	exports.timeMilliseconds = milliseconds;
	exports.utcMillisecond = millisecond;
	exports.utcMilliseconds = milliseconds;
	exports.timeSecond = second;
	exports.timeSeconds = seconds;
	exports.utcSecond = second;
	exports.utcSeconds = seconds;
	exports.timeMinute = minute;
	exports.timeMinutes = minutes;
	exports.timeHour = hour;
	exports.timeHours = hours;
	exports.timeDay = day;
	exports.timeDays = days;
	exports.timeWeek = sunday;
	exports.timeWeeks = sundays;
	exports.timeSunday = sunday;
	exports.timeSundays = sundays;
	exports.timeMonday = monday;
	exports.timeMondays = mondays;
	exports.timeTuesday = tuesday;
	exports.timeTuesdays = tuesdays;
	exports.timeWednesday = wednesday;
	exports.timeWednesdays = wednesdays;
	exports.timeThursday = thursday;
	exports.timeThursdays = thursdays;
	exports.timeFriday = friday;
	exports.timeFridays = fridays;
	exports.timeSaturday = saturday;
	exports.timeSaturdays = saturdays;
	exports.timeMonth = month;
	exports.timeMonths = months;
	exports.timeYear = year;
	exports.timeYears = years;
	exports.utcMinute = utcMinute;
	exports.utcMinutes = utcMinutes;
	exports.utcHour = utcHour;
	exports.utcHours = utcHours;
	exports.utcDay = utcDay;
	exports.utcDays = utcDays;
	exports.utcWeek = utcSunday;
	exports.utcWeeks = utcSundays;
	exports.utcSunday = utcSunday;
	exports.utcSundays = utcSundays;
	exports.utcMonday = utcMonday;
	exports.utcMondays = utcMondays;
	exports.utcTuesday = utcTuesday;
	exports.utcTuesdays = utcTuesdays;
	exports.utcWednesday = utcWednesday;
	exports.utcWednesdays = utcWednesdays;
	exports.utcThursday = utcThursday;
	exports.utcThursdays = utcThursdays;
	exports.utcFriday = utcFriday;
	exports.utcFridays = utcFridays;
	exports.utcSaturday = utcSaturday;
	exports.utcSaturdays = utcSaturdays;
	exports.utcMonth = utcMonth;
	exports.utcMonths = utcMonths;
	exports.utcYear = utcYear;
	exports.utcYears = utcYears;
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	})));


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// https://d3js.org/d3-time-format/ Version 2.0.2. Copyright 2016 Mike Bostock.
	(function (global, factory) {
	   true ? factory(exports, __webpack_require__(182)) :
	  typeof define === 'function' && define.amd ? define(['exports', 'd3-time'], factory) :
	  (factory((global.d3 = global.d3 || {}),global.d3));
	}(this, function (exports,d3Time) { 'use strict';
	
	  function localDate(d) {
	    if (0 <= d.y && d.y < 100) {
	      var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
	      date.setFullYear(d.y);
	      return date;
	    }
	    return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
	  }
	
	  function utcDate(d) {
	    if (0 <= d.y && d.y < 100) {
	      var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
	      date.setUTCFullYear(d.y);
	      return date;
	    }
	    return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
	  }
	
	  function newYear(y) {
	    return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
	  }
	
	  function formatLocale(locale) {
	    var locale_dateTime = locale.dateTime,
	        locale_date = locale.date,
	        locale_time = locale.time,
	        locale_periods = locale.periods,
	        locale_weekdays = locale.days,
	        locale_shortWeekdays = locale.shortDays,
	        locale_months = locale.months,
	        locale_shortMonths = locale.shortMonths;
	
	    var periodRe = formatRe(locale_periods),
	        periodLookup = formatLookup(locale_periods),
	        weekdayRe = formatRe(locale_weekdays),
	        weekdayLookup = formatLookup(locale_weekdays),
	        shortWeekdayRe = formatRe(locale_shortWeekdays),
	        shortWeekdayLookup = formatLookup(locale_shortWeekdays),
	        monthRe = formatRe(locale_months),
	        monthLookup = formatLookup(locale_months),
	        shortMonthRe = formatRe(locale_shortMonths),
	        shortMonthLookup = formatLookup(locale_shortMonths);
	
	    var formats = {
	      "a": formatShortWeekday,
	      "A": formatWeekday,
	      "b": formatShortMonth,
	      "B": formatMonth,
	      "c": null,
	      "d": formatDayOfMonth,
	      "e": formatDayOfMonth,
	      "H": formatHour24,
	      "I": formatHour12,
	      "j": formatDayOfYear,
	      "L": formatMilliseconds,
	      "m": formatMonthNumber,
	      "M": formatMinutes,
	      "p": formatPeriod,
	      "S": formatSeconds,
	      "U": formatWeekNumberSunday,
	      "w": formatWeekdayNumber,
	      "W": formatWeekNumberMonday,
	      "x": null,
	      "X": null,
	      "y": formatYear,
	      "Y": formatFullYear,
	      "Z": formatZone,
	      "%": formatLiteralPercent
	    };
	
	    var utcFormats = {
	      "a": formatUTCShortWeekday,
	      "A": formatUTCWeekday,
	      "b": formatUTCShortMonth,
	      "B": formatUTCMonth,
	      "c": null,
	      "d": formatUTCDayOfMonth,
	      "e": formatUTCDayOfMonth,
	      "H": formatUTCHour24,
	      "I": formatUTCHour12,
	      "j": formatUTCDayOfYear,
	      "L": formatUTCMilliseconds,
	      "m": formatUTCMonthNumber,
	      "M": formatUTCMinutes,
	      "p": formatUTCPeriod,
	      "S": formatUTCSeconds,
	      "U": formatUTCWeekNumberSunday,
	      "w": formatUTCWeekdayNumber,
	      "W": formatUTCWeekNumberMonday,
	      "x": null,
	      "X": null,
	      "y": formatUTCYear,
	      "Y": formatUTCFullYear,
	      "Z": formatUTCZone,
	      "%": formatLiteralPercent
	    };
	
	    var parses = {
	      "a": parseShortWeekday,
	      "A": parseWeekday,
	      "b": parseShortMonth,
	      "B": parseMonth,
	      "c": parseLocaleDateTime,
	      "d": parseDayOfMonth,
	      "e": parseDayOfMonth,
	      "H": parseHour24,
	      "I": parseHour24,
	      "j": parseDayOfYear,
	      "L": parseMilliseconds,
	      "m": parseMonthNumber,
	      "M": parseMinutes,
	      "p": parsePeriod,
	      "S": parseSeconds,
	      "U": parseWeekNumberSunday,
	      "w": parseWeekdayNumber,
	      "W": parseWeekNumberMonday,
	      "x": parseLocaleDate,
	      "X": parseLocaleTime,
	      "y": parseYear,
	      "Y": parseFullYear,
	      "Z": parseZone,
	      "%": parseLiteralPercent
	    };
	
	    // These recursive directive definitions must be deferred.
	    formats.x = newFormat(locale_date, formats);
	    formats.X = newFormat(locale_time, formats);
	    formats.c = newFormat(locale_dateTime, formats);
	    utcFormats.x = newFormat(locale_date, utcFormats);
	    utcFormats.X = newFormat(locale_time, utcFormats);
	    utcFormats.c = newFormat(locale_dateTime, utcFormats);
	
	    function newFormat(specifier, formats) {
	      return function(date) {
	        var string = [],
	            i = -1,
	            j = 0,
	            n = specifier.length,
	            c,
	            pad,
	            format;
	
	        if (!(date instanceof Date)) date = new Date(+date);
	
	        while (++i < n) {
	          if (specifier.charCodeAt(i) === 37) {
	            string.push(specifier.slice(j, i));
	            if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
	            else pad = c === "e" ? " " : "0";
	            if (format = formats[c]) c = format(date, pad);
	            string.push(c);
	            j = i + 1;
	          }
	        }
	
	        string.push(specifier.slice(j, i));
	        return string.join("");
	      };
	    }
	
	    function newParse(specifier, newDate) {
	      return function(string) {
	        var d = newYear(1900),
	            i = parseSpecifier(d, specifier, string += "", 0);
	        if (i != string.length) return null;
	
	        // The am-pm flag is 0 for AM, and 1 for PM.
	        if ("p" in d) d.H = d.H % 12 + d.p * 12;
	
	        // Convert day-of-week and week-of-year to day-of-year.
	        if ("W" in d || "U" in d) {
	          if (!("w" in d)) d.w = "W" in d ? 1 : 0;
	          var day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
	          d.m = 0;
	          d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
	        }
	
	        // If a time zone is specified, all fields are interpreted as UTC and then
	        // offset according to the specified time zone.
	        if ("Z" in d) {
	          d.H += d.Z / 100 | 0;
	          d.M += d.Z % 100;
	          return utcDate(d);
	        }
	
	        // Otherwise, all fields are in local time.
	        return newDate(d);
	      };
	    }
	
	    function parseSpecifier(d, specifier, string, j) {
	      var i = 0,
	          n = specifier.length,
	          m = string.length,
	          c,
	          parse;
	
	      while (i < n) {
	        if (j >= m) return -1;
	        c = specifier.charCodeAt(i++);
	        if (c === 37) {
	          c = specifier.charAt(i++);
	          parse = parses[c in pads ? specifier.charAt(i++) : c];
	          if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
	        } else if (c != string.charCodeAt(j++)) {
	          return -1;
	        }
	      }
	
	      return j;
	    }
	
	    function parsePeriod(d, string, i) {
	      var n = periodRe.exec(string.slice(i));
	      return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	    }
	
	    function parseShortWeekday(d, string, i) {
	      var n = shortWeekdayRe.exec(string.slice(i));
	      return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	    }
	
	    function parseWeekday(d, string, i) {
	      var n = weekdayRe.exec(string.slice(i));
	      return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	    }
	
	    function parseShortMonth(d, string, i) {
	      var n = shortMonthRe.exec(string.slice(i));
	      return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	    }
	
	    function parseMonth(d, string, i) {
	      var n = monthRe.exec(string.slice(i));
	      return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	    }
	
	    function parseLocaleDateTime(d, string, i) {
	      return parseSpecifier(d, locale_dateTime, string, i);
	    }
	
	    function parseLocaleDate(d, string, i) {
	      return parseSpecifier(d, locale_date, string, i);
	    }
	
	    function parseLocaleTime(d, string, i) {
	      return parseSpecifier(d, locale_time, string, i);
	    }
	
	    function formatShortWeekday(d) {
	      return locale_shortWeekdays[d.getDay()];
	    }
	
	    function formatWeekday(d) {
	      return locale_weekdays[d.getDay()];
	    }
	
	    function formatShortMonth(d) {
	      return locale_shortMonths[d.getMonth()];
	    }
	
	    function formatMonth(d) {
	      return locale_months[d.getMonth()];
	    }
	
	    function formatPeriod(d) {
	      return locale_periods[+(d.getHours() >= 12)];
	    }
	
	    function formatUTCShortWeekday(d) {
	      return locale_shortWeekdays[d.getUTCDay()];
	    }
	
	    function formatUTCWeekday(d) {
	      return locale_weekdays[d.getUTCDay()];
	    }
	
	    function formatUTCShortMonth(d) {
	      return locale_shortMonths[d.getUTCMonth()];
	    }
	
	    function formatUTCMonth(d) {
	      return locale_months[d.getUTCMonth()];
	    }
	
	    function formatUTCPeriod(d) {
	      return locale_periods[+(d.getUTCHours() >= 12)];
	    }
	
	    return {
	      format: function(specifier) {
	        var f = newFormat(specifier += "", formats);
	        f.toString = function() { return specifier; };
	        return f;
	      },
	      parse: function(specifier) {
	        var p = newParse(specifier += "", localDate);
	        p.toString = function() { return specifier; };
	        return p;
	      },
	      utcFormat: function(specifier) {
	        var f = newFormat(specifier += "", utcFormats);
	        f.toString = function() { return specifier; };
	        return f;
	      },
	      utcParse: function(specifier) {
	        var p = newParse(specifier, utcDate);
	        p.toString = function() { return specifier; };
	        return p;
	      }
	    };
	  }
	
	  var pads = {"-": "", "_": " ", "0": "0"};
	  var numberRe = /^\s*\d+/;
	  var percentRe = /^%/;
	  var requoteRe = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
	  function pad(value, fill, width) {
	    var sign = value < 0 ? "-" : "",
	        string = (sign ? -value : value) + "",
	        length = string.length;
	    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
	  }
	
	  function requote(s) {
	    return s.replace(requoteRe, "\\$&");
	  }
	
	  function formatRe(names) {
	    return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
	  }
	
	  function formatLookup(names) {
	    var map = {}, i = -1, n = names.length;
	    while (++i < n) map[names[i].toLowerCase()] = i;
	    return map;
	  }
	
	  function parseWeekdayNumber(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 1));
	    return n ? (d.w = +n[0], i + n[0].length) : -1;
	  }
	
	  function parseWeekNumberSunday(d, string, i) {
	    var n = numberRe.exec(string.slice(i));
	    return n ? (d.U = +n[0], i + n[0].length) : -1;
	  }
	
	  function parseWeekNumberMonday(d, string, i) {
	    var n = numberRe.exec(string.slice(i));
	    return n ? (d.W = +n[0], i + n[0].length) : -1;
	  }
	
	  function parseFullYear(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 4));
	    return n ? (d.y = +n[0], i + n[0].length) : -1;
	  }
	
	  function parseYear(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 2));
	    return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
	  }
	
	  function parseZone(d, string, i) {
	    var n = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(string.slice(i, i + 6));
	    return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
	  }
	
	  function parseMonthNumber(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 2));
	    return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
	  }
	
	  function parseDayOfMonth(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 2));
	    return n ? (d.d = +n[0], i + n[0].length) : -1;
	  }
	
	  function parseDayOfYear(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 3));
	    return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
	  }
	
	  function parseHour24(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 2));
	    return n ? (d.H = +n[0], i + n[0].length) : -1;
	  }
	
	  function parseMinutes(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 2));
	    return n ? (d.M = +n[0], i + n[0].length) : -1;
	  }
	
	  function parseSeconds(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 2));
	    return n ? (d.S = +n[0], i + n[0].length) : -1;
	  }
	
	  function parseMilliseconds(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 3));
	    return n ? (d.L = +n[0], i + n[0].length) : -1;
	  }
	
	  function parseLiteralPercent(d, string, i) {
	    var n = percentRe.exec(string.slice(i, i + 1));
	    return n ? i + n[0].length : -1;
	  }
	
	  function formatDayOfMonth(d, p) {
	    return pad(d.getDate(), p, 2);
	  }
	
	  function formatHour24(d, p) {
	    return pad(d.getHours(), p, 2);
	  }
	
	  function formatHour12(d, p) {
	    return pad(d.getHours() % 12 || 12, p, 2);
	  }
	
	  function formatDayOfYear(d, p) {
	    return pad(1 + d3Time.timeDay.count(d3Time.timeYear(d), d), p, 3);
	  }
	
	  function formatMilliseconds(d, p) {
	    return pad(d.getMilliseconds(), p, 3);
	  }
	
	  function formatMonthNumber(d, p) {
	    return pad(d.getMonth() + 1, p, 2);
	  }
	
	  function formatMinutes(d, p) {
	    return pad(d.getMinutes(), p, 2);
	  }
	
	  function formatSeconds(d, p) {
	    return pad(d.getSeconds(), p, 2);
	  }
	
	  function formatWeekNumberSunday(d, p) {
	    return pad(d3Time.timeSunday.count(d3Time.timeYear(d), d), p, 2);
	  }
	
	  function formatWeekdayNumber(d) {
	    return d.getDay();
	  }
	
	  function formatWeekNumberMonday(d, p) {
	    return pad(d3Time.timeMonday.count(d3Time.timeYear(d), d), p, 2);
	  }
	
	  function formatYear(d, p) {
	    return pad(d.getFullYear() % 100, p, 2);
	  }
	
	  function formatFullYear(d, p) {
	    return pad(d.getFullYear() % 10000, p, 4);
	  }
	
	  function formatZone(d) {
	    var z = d.getTimezoneOffset();
	    return (z > 0 ? "-" : (z *= -1, "+"))
	        + pad(z / 60 | 0, "0", 2)
	        + pad(z % 60, "0", 2);
	  }
	
	  function formatUTCDayOfMonth(d, p) {
	    return pad(d.getUTCDate(), p, 2);
	  }
	
	  function formatUTCHour24(d, p) {
	    return pad(d.getUTCHours(), p, 2);
	  }
	
	  function formatUTCHour12(d, p) {
	    return pad(d.getUTCHours() % 12 || 12, p, 2);
	  }
	
	  function formatUTCDayOfYear(d, p) {
	    return pad(1 + d3Time.utcDay.count(d3Time.utcYear(d), d), p, 3);
	  }
	
	  function formatUTCMilliseconds(d, p) {
	    return pad(d.getUTCMilliseconds(), p, 3);
	  }
	
	  function formatUTCMonthNumber(d, p) {
	    return pad(d.getUTCMonth() + 1, p, 2);
	  }
	
	  function formatUTCMinutes(d, p) {
	    return pad(d.getUTCMinutes(), p, 2);
	  }
	
	  function formatUTCSeconds(d, p) {
	    return pad(d.getUTCSeconds(), p, 2);
	  }
	
	  function formatUTCWeekNumberSunday(d, p) {
	    return pad(d3Time.utcSunday.count(d3Time.utcYear(d), d), p, 2);
	  }
	
	  function formatUTCWeekdayNumber(d) {
	    return d.getUTCDay();
	  }
	
	  function formatUTCWeekNumberMonday(d, p) {
	    return pad(d3Time.utcMonday.count(d3Time.utcYear(d), d), p, 2);
	  }
	
	  function formatUTCYear(d, p) {
	    return pad(d.getUTCFullYear() % 100, p, 2);
	  }
	
	  function formatUTCFullYear(d, p) {
	    return pad(d.getUTCFullYear() % 10000, p, 4);
	  }
	
	  function formatUTCZone() {
	    return "+0000";
	  }
	
	  function formatLiteralPercent() {
	    return "%";
	  }
	
	  var locale;
	  defaultLocale({
	    dateTime: "%x, %X",
	    date: "%-m/%-d/%Y",
	    time: "%-I:%M:%S %p",
	    periods: ["AM", "PM"],
	    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	  });
	
	  function defaultLocale(definition) {
	    locale = formatLocale(definition);
	    exports.timeFormat = locale.format;
	    exports.timeParse = locale.parse;
	    exports.utcFormat = locale.utcFormat;
	    exports.utcParse = locale.utcParse;
	    return locale;
	  }
	
	  var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
	
	  function formatIsoNative(date) {
	    return date.toISOString();
	  }
	
	  var formatIso = Date.prototype.toISOString
	      ? formatIsoNative
	      : exports.utcFormat(isoSpecifier);
	
	  function parseIsoNative(string) {
	    var date = new Date(string);
	    return isNaN(date) ? null : date;
	  }
	
	  var parseIso = +new Date("2000-01-01T00:00:00.000Z")
	      ? parseIsoNative
	      : exports.utcParse(isoSpecifier);
	
	  exports.timeFormatDefaultLocale = defaultLocale;
	  exports.timeFormatLocale = formatLocale;
	  exports.isoFormat = formatIso;
	  exports.isoParse = parseIso;
	
	  Object.defineProperty(exports, '__esModule', { value: true });
	
	}));

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _sum2=__webpack_require__(185);var _sum3=_interopRequireDefault(_sum2);var _min2=__webpack_require__(187);var _min3=_interopRequireDefault(_min2);var _max2=__webpack_require__(190);var _max3=_interopRequireDefault(_max2);var _filter2=__webpack_require__(192);var _filter3=_interopRequireDefault(_filter2);exports.
	
	
	
	
	continuousTransitions=continuousTransitions;exports.
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	discreteTransitions=discreteTransitions;var _helpers=__webpack_require__(173);var _helpers2=_interopRequireDefault(_helpers);var _log=__webpack_require__(174);var _log2=_interopRequireDefault(_log);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function continuousTransitions(){return{onLoad:{duration:2000,entrance:"left",beforeClipPathWidth:function beforeClipPathWidth(data,child,animate){var range=_helpers2.default.getRange(child.props,"x");var paddingLeft=range[0];var paddingRight=child.props.width-range[1];if(animate.onLoad.entrance==="left"){return{clipWidth:paddingLeft+paddingRight};}else if(animate.onLoad.entrance==="right"){return{clipWidth:paddingLeft+paddingRight,translateX:child.props.width-paddingLeft-paddingRight};}else{_log2.default.warn("onLoad entrance should be one of left or right");return{};}},afterClipPathWidth:function afterClipPathWidth(data,child,animate){var range=_helpers2.default.getRange(child.props,"x");if(animate.onLoad.entrance==="left"){return{clipWidth:(0,_sum3.default)(range)};}else if(animate.onLoad.entrance==="right"){return{clipWidth:(0,_sum3.default)(range),translateX:0};}else{_log2.default.warn("onLoad entrance should be one of left or right");return{};}}},onExit:{duration:500,beforeClipPathWidth:function beforeClipPathWidth(data,child,exitingNodes){var filterExit=(0,_filter3.default)(data,function(datum,index){return!exitingNodes[index];});var xVals=filterExit.map(function(datum){return child.type.getScale(child.props).x(datum.x);});var clipPath=(0,_min3.default)(xVals)+(0,_max3.default)(xVals);return clipPath;}},onEnter:{duration:500,beforeClipPathWidth:function beforeClipPathWidth(data,child,enteringNodes){var filterEnter=(0,_filter3.default)(data,function(datum,index){return!enteringNodes[index];});var xVals=filterEnter.map(function(datum){return child.type.getScale(child.props).x(datum.x);});var clipPath=(0,_min3.default)(xVals)+(0,_max3.default)(xVals);return clipPath;},afterClipPathWidth:function afterClipPathWidth(data,child){var xVals=data.map(function(datum){return child.type.getScale(child.props).x(datum.x);});var clipPath=(0,_min3.default)(xVals)+(0,_max3.default)(xVals);return clipPath;}}};}function discreteTransitions(){
	return{
	onLoad:{
	duration:2000,
	before:function before(){return{opacity:0};},
	after:function after(datum){return datum;}},
	
	onExit:{
	duration:600,
	before:function before(){return{opacity:0};}},
	
	onEnter:{
	duration:600,
	before:function before(){return{opacity:0};},
	after:function after(datum){return datum;}}};
	
	
	}

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	var baseSum = __webpack_require__(186),
	    identity = __webpack_require__(55);
	
	/**
	 * Computes the sum of the values in `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.4.0
	 * @category Math
	 * @param {Array} array The array to iterate over.
	 * @returns {number} Returns the sum.
	 * @example
	 *
	 * _.sum([4, 2, 8, 6]);
	 * // => 20
	 */
	function sum(array) {
	  return (array && array.length)
	    ? baseSum(array, identity)
	    : 0;
	}
	
	module.exports = sum;


/***/ },
/* 186 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.sum` and `_.sumBy` without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {number} Returns the sum.
	 */
	function baseSum(array, iteratee) {
	  var result,
	      index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    var current = iteratee(array[index]);
	    if (current !== undefined) {
	      result = result === undefined ? current : (result + current);
	    }
	  }
	  return result;
	}
	
	module.exports = baseSum;


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var baseExtremum = __webpack_require__(188),
	    baseLt = __webpack_require__(189),
	    identity = __webpack_require__(55);
	
	/**
	 * Computes the minimum value of `array`. If `array` is empty or falsey,
	 * `undefined` is returned.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Math
	 * @param {Array} array The array to iterate over.
	 * @returns {*} Returns the minimum value.
	 * @example
	 *
	 * _.min([4, 2, 8, 6]);
	 * // => 2
	 *
	 * _.min([]);
	 * // => undefined
	 */
	function min(array) {
	  return (array && array.length)
	    ? baseExtremum(array, identity, baseLt)
	    : undefined;
	}
	
	module.exports = min;


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(163);
	
	/**
	 * The base implementation of methods like `_.max` and `_.min` which accepts a
	 * `comparator` to determine the extremum value.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The iteratee invoked per iteration.
	 * @param {Function} comparator The comparator used to compare values.
	 * @returns {*} Returns the extremum value.
	 */
	function baseExtremum(array, iteratee, comparator) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    var value = array[index],
	        current = iteratee(value);
	
	    if (current != null && (computed === undefined
	          ? (current === current && !isSymbol(current))
	          : comparator(current, computed)
	        )) {
	      var computed = current,
	          result = value;
	    }
	  }
	  return result;
	}
	
	module.exports = baseExtremum;


/***/ },
/* 189 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.lt` which doesn't coerce arguments.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if `value` is less than `other`,
	 *  else `false`.
	 */
	function baseLt(value, other) {
	  return value < other;
	}
	
	module.exports = baseLt;


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var baseExtremum = __webpack_require__(188),
	    baseGt = __webpack_require__(191),
	    identity = __webpack_require__(55);
	
	/**
	 * Computes the maximum value of `array`. If `array` is empty or falsey,
	 * `undefined` is returned.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Math
	 * @param {Array} array The array to iterate over.
	 * @returns {*} Returns the maximum value.
	 * @example
	 *
	 * _.max([4, 2, 8, 6]);
	 * // => 8
	 *
	 * _.max([]);
	 * // => undefined
	 */
	function max(array) {
	  return (array && array.length)
	    ? baseExtremum(array, identity, baseGt)
	    : undefined;
	}
	
	module.exports = max;


/***/ },
/* 191 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.gt` which doesn't coerce arguments.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if `value` is greater than `other`,
	 *  else `false`.
	 */
	function baseGt(value, other) {
	  return value > other;
	}
	
	module.exports = baseGt;


/***/ },
/* 192 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0,
	      resIndex = 0,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = arrayFilter;


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _isPlainObject2=__webpack_require__(6);var _isPlainObject3=_interopRequireDefault(_isPlainObject2);var _includes2=__webpack_require__(177);var _includes3=_interopRequireDefault(_includes2);var _flatten2=__webpack_require__(41);var _flatten3=_interopRequireDefault(_flatten2);
	var _data=__webpack_require__(152);var _data2=_interopRequireDefault(_data);
	var _scale=__webpack_require__(176);var _scale2=_interopRequireDefault(_scale);
	var _helpers=__webpack_require__(173);var _helpers2=_interopRequireDefault(_helpers);
	var _collection=__webpack_require__(151);var _collection2=_interopRequireDefault(_collection);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}exports.default=
	
	{
	
	
	
	
	
	
	
	getDomain:function getDomain(props,axis){
	var propsDomain=this.getDomainFromProps(props,axis);
	if(propsDomain){
	return this.padDomain(propsDomain,props,axis);
	}
	var categoryDomain=this.getDomainFromCategories(props,axis);
	if(categoryDomain){
	return this.padDomain(categoryDomain,props,axis);
	}
	var dataset=_data2.default.getData(props);
	var domain=this.getDomainFromData(props,axis,dataset);
	return this.cleanDomain(this.padDomain(domain,props,axis),props,axis);
	},
	
	
	
	
	
	
	
	
	
	
	cleanDomain:function cleanDomain(domain,props,axis){
	var scaleType=_scale2.default.getScaleType(props,axis);
	
	if(scaleType!=="log"){
	return domain;
	}
	
	var rules=function rules(dom){
	var almostZero=dom[0]<0||dom[1]<0?-1/Number.MAX_SAFE_INTEGER:
	1/Number.MAX_SAFE_INTEGER;
	var domainOne=dom[0]===0?almostZero:dom[0];
	var domainTwo=dom[1]===0?almostZero:dom[1];
	return[domainOne,domainTwo];
	};
	
	return rules(domain);
	},
	
	
	
	
	
	
	
	
	getDomainWithZero:function getDomainWithZero(props,axis){var _this=this;
	var propsDomain=this.getDomainFromProps(props,axis);
	if(propsDomain){
	return this.cleanDomain(this.padDomain(propsDomain,props,axis),props,axis);
	}var
	horizontal=props.horizontal;
	var ensureZero=function ensureZero(domain){
	var isDependent=axis==="y"&&!horizontal||axis==="x"&&horizontal;
	var min=_collection2.default.getMinValue(domain,0);
	var max=_collection2.default.getMaxValue(domain,0);
	var zeroDomain=isDependent?[min,max]:domain;
	return _this.padDomain(zeroDomain,props,axis);
	};
	var categoryDomain=this.getDomainFromCategories(props,axis);
	if(categoryDomain){
	return this.cleanDomain(this.padDomain(ensureZero(categoryDomain),props,axis),props,axis);
	}
	var dataset=_data2.default.getData(props);
	var domain=ensureZero(this.getDomainFromData(props,axis,dataset));
	return this.cleanDomain(this.padDomain(domain,props,axis),props,axis);
	},
	
	
	
	
	
	
	
	getDomainFromProps:function getDomainFromProps(props,axis){
	if(props.domain&&props.domain[axis]){
	return props.domain[axis];
	}else if(props.domain&&Array.isArray(props.domain)){
	return props.domain;
	}
	},
	
	
	
	
	
	
	
	
	getDomainFromData:function getDomainFromData(props,axis,dataset){
	var currentAxis=_helpers2.default.getCurrentAxis(axis,props.horizontal);
	var allData=(0,_flatten3.default)(dataset).map(function(datum){return datum[currentAxis];});
	
	if(allData.length<1){
	return _scale2.default.getBaseScale(props,axis).domain();
	}
	
	var min=_collection2.default.getMinValue(allData);
	var max=_collection2.default.getMaxValue(allData);
	
	
	if(min===max){
	var adjustedMax=max===0?1:max+max;
	return[0,adjustedMax];
	}
	return[min,max];
	},
	
	
	
	
	
	
	getDomainFromTickValues:function getDomainFromTickValues(props){
	var domain=void 0;
	if(_helpers2.default.stringTicks(props)){
	domain=[1,props.tickValues.length];
	}else{
	
	var ticks=props.tickValues.map(function(value){return+value;});
	domain=[_collection2.default.getMinValue(ticks),_collection2.default.getMaxValue(ticks)];
	}
	if(_helpers2.default.isVertical(props)){
	domain.reverse();
	}
	return domain;
	},
	
	
	
	
	
	
	
	getDomainFromCategories:function getDomainFromCategories(props,axis){
	var categories=_data2.default.getCategories(props,axis);
	if(!categories){
	return undefined;
	}
	var stringArray=_collection2.default.containsStrings(categories)?
	_data2.default.getStringsFromCategories(props,axis):[];
	var stringMap=stringArray.length===0?null:
	stringArray.reduce(function(memo,string,index){
	memo[string]=index+1;
	return memo;
	},{});
	var categoryValues=stringMap?
	categories.map(function(value){return stringMap[value];}):categories;
	return[
	_collection2.default.getMinValue(categoryValues),_collection2.default.getMaxValue(categoryValues)];
	
	},
	
	
	
	
	
	
	
	
	getDomainFromGroupedData:function getDomainFromGroupedData(props,axis,datasets){var
	horizontal=props.horizontal;
	var dependent=axis==="x"&&!horizontal||axis==="y"&&horizontal;
	if(dependent&&props.categories){
	return this.getDomainFromCategories(props,axis);
	}
	var globalDomain=this.getDomainFromData(props,axis,datasets);
	
	
	var cumulativeData=!dependent?
	this.getCumulativeData(props,axis,datasets):[];
	
	var cumulativeMaxArray=cumulativeData.map(function(dataset){
	return dataset.reduce(function(memo,val){
	return val>0?+val+ +memo:memo;
	},0);
	});
	var cumulativeMinArray=cumulativeData.map(function(dataset){
	return dataset.reduce(function(memo,val){
	return val<0?+val+ +memo:memo;
	},0);
	});
	
	var cumulativeMin=Math.min.apply(Math,_toConsumableArray(cumulativeMinArray));
	
	var domainMin=cumulativeMin<0?cumulativeMin:_collection2.default.getMinValue(globalDomain);
	var domainMax=_collection2.default.getMaxValue.apply(_collection2.default,[globalDomain].concat(_toConsumableArray(cumulativeMaxArray)));
	
	
	if(domainMin===domainMax){
	var adjustedMax=domainMax===0?1:domainMax;
	return[0,adjustedMax];
	}
	return[domainMin,domainMax];
	},
	
	
	
	
	
	
	
	
	getCumulativeData:function getCumulativeData(props,axis,datasets){
	var currentAxis=_helpers2.default.getCurrentAxis(axis,props.horizontal);
	var categories=[];
	var axisValues=[];
	datasets.forEach(function(dataset){
	dataset.forEach(function(data){
	if(data.category!==undefined&&!(0,_includes3.default)(categories,data.category)){
	categories.push(data.category);
	}else if(!(0,_includes3.default)(axisValues,data[currentAxis])){
	axisValues.push(data[currentAxis]);
	}
	});
	});
	
	var _dataByCategory=function _dataByCategory(){
	return categories.map(function(value){
	return datasets.reduce(function(prev,data){
	return data.category===value?prev.concat(data[axis]):prev;
	},[]);
	});
	};
	
	var _dataByIndex=function _dataByIndex(){
	return axisValues.map(function(value,index){
	return datasets.map(function(data){return data[index]&&data[index][currentAxis];});
	});
	};
	
	return categories.length===0?_dataByIndex():_dataByCategory();
	},
	
	
	
	
	
	
	
	getDomainPadding:function getDomainPadding(props,axis){
	var formatPadding=function formatPadding(padding){
	return Array.isArray(padding)?
	{left:padding[0],right:padding[1]}:{left:padding,right:padding};
	};
	
	return(0,_isPlainObject3.default)(props.domainPadding)?
	formatPadding(props.domainPadding[axis]):formatPadding(props.domainPadding);
	},
	
	
	
	
	
	
	
	
	padDomain:function padDomain(domain,props,axis){
	if(!props.domainPadding){
	return domain;
	}
	
	var padding=this.getDomainPadding(props,axis);
	if(!padding.left&&!padding.right){
	return domain;
	}
	
	var domainMin=_collection2.default.getMinValue(domain);
	var domainMax=_collection2.default.getMaxValue(domain);
	var range=_helpers2.default.getRange(props,axis);
	var rangeExtent=Math.abs(Math.max.apply(Math,_toConsumableArray(range))-Math.min.apply(Math,_toConsumableArray(range)));
	
	var paddingLeft=Math.abs(domainMax-domainMin)*padding.left/rangeExtent;
	var paddingRight=Math.abs(domainMax-domainMin)*padding.right/rangeExtent;
	
	var adjustedMin=domainMin>=0&&domainMin-paddingLeft<=0?
	0:domainMin.valueOf()-paddingLeft;
	
	var adjustedMax=domainMax<=0&&domainMax+paddingRight>=0?
	0:domainMax.valueOf()+paddingRight;
	
	return domainMin instanceof Date||domainMax instanceof Date?
	[new Date(adjustedMin),new Date(adjustedMax)]:[adjustedMin,adjustedMax];
	},
	
	
	
	
	
	
	
	
	orientDomain:function orientDomain(domain,orientations,axis){
	
	
	var otherAxis=axis==="x"?"y":"x";
	var defaultOrientation=function defaultOrientation(ax){return ax==="x"?"bottom":"left";};
	var flippedAxis=orientations.x==="left"||orientations.x==="right";
	var standardOrientation=flippedAxis?
	orientations[otherAxis]===defaultOrientation(axis):
	orientations[otherAxis]===defaultOrientation(otherAxis);
	if(flippedAxis){
	return standardOrientation?domain.concat().reverse():domain;
	}else{
	return standardOrientation?domain:domain.concat().reverse();
	}
	}};

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports,"__esModule",{value:true});var _isFunction2=__webpack_require__(78);var _isFunction3=_interopRequireDefault(_isFunction2);
	
	var _react=__webpack_require__(2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	
	
	
	
	
	
	
	var makeChainable=function makeChainable(validator){
	
	var _chainable=function _chainable(isRequired,props,propName,componentName){
	var value=props[propName];
	if(typeof value==="undefined"||value===null){
	if(isRequired){
	return new Error("Required `"+
	propName+"` was not specified in `"+componentName+"`.");
	
	}
	return null;
	}for(var _len=arguments.length,rest=Array(_len>4?_len-4:0),_key=4;_key<_len;_key++){rest[_key-4]=arguments[_key];}
	return validator.apply(undefined,[props,propName,componentName].concat(rest));
	};
	var chainable=_chainable.bind(null,false);
	chainable.isRequired=_chainable.bind(null,true);
	return chainable;
	};
	
	var nullConstructor=function nullConstructor(){return null;};
	var undefinedConstructor=function undefinedConstructor(){return undefined;};
	
	
	
	
	
	
	
	var getConstructor=function getConstructor(value){
	if(typeof value==="undefined"){
	return undefinedConstructor;
	}else if(value===null){
	return nullConstructor;
	}else{
	return value.constructor;
	}
	};
	
	
	
	
	
	
	
	
	var getConstructorName=function getConstructorName(value){
	if(typeof value==="undefined"){
	return"undefined";
	}else if(value===null){
	return"null";
	}
	return Object.prototype.toString.call(value).slice(8,-1);
	};exports.default=
	
	{
	
	
	
	
	
	
	
	deprecated:function deprecated(propType,explanation){
	return function(props,propName,componentName){for(var _len2=arguments.length,rest=Array(_len2>3?_len2-3:0),_key2=3;_key2<_len2;_key2++){rest[_key2-3]=arguments[_key2];}
	if(process.env.NODE_ENV!=="production"){
	
	if(typeof console!=="undefined"&&console.error){
	if(props[propName]!==null){
	console.error(false,"\""+
	propName+"\" property of \""+componentName+"\" has been deprecated "+explanation);
	}
	}
	
	}
	return propType.apply(undefined,[props,propName,componentName].concat(rest));
	};
	},
	
	
	
	
	
	
	
	
	allOfType:function allOfType(validators){
	return makeChainable(function(props,propName,componentName){for(var _len3=arguments.length,rest=Array(_len3>3?_len3-3:0),_key3=3;_key3<_len3;_key3++){rest[_key3-3]=arguments[_key3];}
	var error=validators.reduce(function(result,validator){
	return result||validator.apply(undefined,[props,propName,componentName].concat(rest));
	},undefined);
	if(error){
	return error;
	}
	});
	},
	
	
	
	
	nonNegative:makeChainable(function(props,propName,componentName){for(var _len4=arguments.length,rest=Array(_len4>3?_len4-3:0),_key4=3;_key4<_len4;_key4++){rest[_key4-3]=arguments[_key4];}
	var error=_react.PropTypes.number.apply(_react.PropTypes,[props,propName,componentName].concat(rest));
	if(error){
	return error;
	}
	var value=props[propName];
	if(value<0){
	return new Error("`"+
	propName+"` in `"+componentName+"` must be non-negative.");
	
	}
	}),
	
	
	
	
	integer:makeChainable(function(props,propName,componentName){for(var _len5=arguments.length,rest=Array(_len5>3?_len5-3:0),_key5=3;_key5<_len5;_key5++){rest[_key5-3]=arguments[_key5];}
	var error=_react.PropTypes.number.apply(_react.PropTypes,[props,propName,componentName].concat(rest));
	if(error){
	return error;
	}
	var value=props[propName];
	if(value%1!==0){
	return new Error("`"+
	propName+"` in `"+componentName+"` must be an integer.");
	
	}
	}),
	
	
	
	
	greaterThanZero:makeChainable(function(props,propName,componentName){for(var _len6=arguments.length,rest=Array(_len6>3?_len6-3:0),_key6=3;_key6<_len6;_key6++){rest[_key6-3]=arguments[_key6];}
	var error=_react.PropTypes.number.apply(_react.PropTypes,[props,propName,componentName].concat(rest));
	if(error){
	return error;
	}
	var value=props[propName];
	if(value<=0){
	return new Error("`"+
	propName+"` in `"+componentName+"` must be greater than zero.");
	
	}
	}),
	
	
	
	
	domain:makeChainable(function(props,propName,componentName){for(var _len7=arguments.length,rest=Array(_len7>3?_len7-3:0),_key7=3;_key7<_len7;_key7++){rest[_key7-3]=arguments[_key7];}
	var error=_react.PropTypes.array.apply(_react.PropTypes,[props,propName,componentName].concat(rest));
	if(error){
	return error;
	}
	var value=props[propName];
	if(value.length!==2||value[1]===value[0]){
	return new Error("`"+
	propName+"` in `"+componentName+"` must be an array of two unique numeric values.");
	
	}
	}),
	
	
	
	
	scale:makeChainable(function(props,propName,componentName){
	var supportedScaleStrings=["linear","time","log","sqrt"];
	var validScale=function validScale(scl){
	if((0,_isFunction3.default)(scl)){
	return(0,_isFunction3.default)(scl.copy)&&(0,_isFunction3.default)(scl.domain)&&(0,_isFunction3.default)(scl.range);
	}else if(typeof scl==="string"){
	return supportedScaleStrings.indexOf(scl)!==-1;
	}
	return false;
	};
	
	var value=props[propName];
	if(!validScale(value)){
	return new Error("`"+
	propName+"` in `"+componentName+"` must be a d3 scale.");
	
	}
	}),
	
	
	
	
	homogeneousArray:makeChainable(function(props,propName,componentName){for(var _len8=arguments.length,rest=Array(_len8>3?_len8-3:0),_key8=3;_key8<_len8;_key8++){rest[_key8-3]=arguments[_key8];}
	var error=_react.PropTypes.array.apply(_react.PropTypes,[props,propName,componentName].concat(rest));
	if(error){
	return error;
	}
	var value=props[propName];
	if(value.length>1){
	var _constructor=getConstructor(value[0]);
	for(var i=1;i<value.length;i++){
	var otherConstructor=getConstructor(value[i]);
	if(_constructor!==otherConstructor){
	var constructorName=getConstructorName(value[0]);
	var otherConstructorName=getConstructorName(value[i]);
	return new Error(
	"Expected `"+propName+"` in `"+componentName+"` to be a "+("homogeneous array, but found types `"+
	constructorName+"` and ")+("`"+
	otherConstructorName+"`."));
	
	}
	}
	}
	}),
	
	
	
	
	matchDataLength:makeChainable(function(props,propName){
	if(
	props[propName]&&
	Array.isArray(props[propName])&&
	props[propName].length!==props.data.length)
	{
	return new Error("Length of data and "+propName+" arrays must match.");
	}
	})};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(175)))

/***/ },
/* 195 */
/***/ function(module, exports) {

	Object.defineProperty(exports,"__esModule",{value:true});
	
	
	
	
	
	
	
	
	var toTransformString=function toTransformString(obj){for(var _len=arguments.length,more=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){more[_key-1]=arguments[_key];}
	if(more.length>0){
	return more.reduce(function(memo,currentObj){
	return[memo,toTransformString(currentObj)].join(" ");
	},toTransformString(obj));
	}else{
	if(!obj||typeof obj==="string"){
	return obj;
	}
	var transforms=[];
	for(var key in obj){
	if(obj.hasOwnProperty(key)){
	var value=obj[key];
	transforms.push(key+"("+value+")");
	}
	}
	return transforms.join(" ");
	}
	};exports.default=
	
	{
	
	toTransformString:toTransformString,
	
	
	
	
	
	
	
	
	getColorScale:function getColorScale(name){
	var scales={
	grayscale:[
	"#cccccc","#969696","#636363","#252525"],
	
	qualitative:[
	"#334D5C","#45B29D","#EFC94C","#E27A3F","#DF5A49",
	"#4F7DA1","#55DBC1","#EFDA97","#E2A37F","#DF948A"],
	
	heatmap:["#428517","#77D200","#D6D305","#EC8E19","#C92B05"],
	warm:["#940031","#C43343","#DC5429","#FF821D","#FFAF55"],
	cool:["#2746B9","#0B69D4","#2794DB","#31BB76","#60E83B"],
	red:["#611310","#7D1D1D","#B02928","#B02928","#D86B67"],
	blue:["#002C61","#004B8F","#006BC9","#3795E5","#65B4F4"],
	green:["#354722","#466631","#649146","#8AB25C","#A9C97E"]};
	
	return name?scales[name]:scales.greyscale;
	}};

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _defaults2=__webpack_require__(134);var _defaults3=_interopRequireDefault(_defaults2);var _merge2=__webpack_require__(91);var _merge3=_interopRequireDefault(_merge2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	
	var fontDictionary={
	"American Typewriter":2.09,
	"Baskerville":2.51,
	"Georgia":2.27,
	"Hoefler Text":2.39,
	"Palatino":2.26,
	"Times New Roman":2.48,
	"Arial":2.26,
	"Gill Sans":2.47,
	"Gill Sans 300":2.58,
	"Helvetica Neue":2.24,
	"Lucida Grande":2.05,
	"Tahoma":2.25,
	"Trebuchet MS":2.2,
	"Verdana":1.96,
	"Courier New":1.67,
	"cursive":1.84,
	"fantasy":2.09,
	"monospace":1.81,
	"serif":2.04,
	"sans-serif":1.89};
	
	
	
	var absoluteMeasurementUnitsToPixels={
	"mm":3.8,
	"sm":38,
	"pt":1.33,
	"pc":16,
	"in":96,
	"px":1};
	
	var relativeMeasurementUnitsCoef={
	"em":1,
	"ex":0.5};
	
	
	var coefficients={
	averageFontConstant:2.1675,
	widthOverlapCoef:1.25,
	heightOverlapCoef:1.05,
	lineCapitalCoef:1.15,
	lineSpaceHeightCoef:0.2};
	
	var defaultStyle={
	lineHeight:1,
	letterSpacing:"0px",
	fontSize:0,
	angle:0,
	fontFamily:""};
	
	
	var degreeToRadian=function degreeToRadian(angle){return angle*Math.PI/180;};
	
	var getFontCharacterConstant=function getFontCharacterConstant(fontFamily){
	var firstFont=fontFamily.split(",")[0].replace(/'|"/g,"");
	return fontDictionary[firstFont]||coefficients.averageFontConstant;
	};
	
	var splitToLines=function splitToLines(text){return text.toString().split(/\r\n|\r|\n/g);};
	
	var getWidestString=function getWidestString(strings){return strings.reduce(function(max,elem){return(
	max.length>=elem.length?max:elem);});};
	
	
	var getSizeWithRotate=function getSizeWithRotate(axisSize,dependentSize,angle){
	var angleInRadian=degreeToRadian(angle);
	return Math.abs(Math.cos(angleInRadian)*axisSize)+
	Math.abs(Math.sin(angleInRadian)*dependentSize);
	};
	
	var aproximateTextWidthInternal=function aproximateTextWidthInternal(text,style){
	var strLength=getWidestString(splitToLines(text.toString())).length;
	return strLength*style.fontSize/style.characterConstant+
	style.letterSpacing*Math.max(strLength-1,0);
	};
	
	var aproximateTextHeightInternal=function aproximateTextHeightInternal(text,style){
	var splittedTextArray=splitToLines(text);
	var lineCount=splittedTextArray.length;
	var lineHeightNumber=style.fontSize*coefficients.lineCapitalCoef;
	var emptySpace=style.fontSize*coefficients.lineSpaceHeightCoef;
	return style.lineHeight*(lineHeightNumber*lineCount+emptySpace*(lineCount-1));
	};
	
	
	
	
	
	
	
	var convertLengthToPixels=function convertLengthToPixels(length,fontSize){
	var attribute=length.match(/[a-zA-Z%]+/)[0];
	var value=length.match(/[0-9.,]+/);
	var result=void 0;
	if(absoluteMeasurementUnitsToPixels.hasOwnProperty(attribute)){
	result=value*absoluteMeasurementUnitsToPixels[attribute];
	}else if(relativeMeasurementUnitsCoef.hasOwnProperty(attribute)){
	result=(fontSize?value*fontSize:value*coefficients.defaultFontSize)*
	relativeMeasurementUnitsCoef[attribute];
	}else{
	result=value;
	}
	return result;
	};
	
	var prepareParams=function prepareParams(inputStyle){
	var style=(0,_defaults3.default)(inputStyle,defaultStyle);
	return(0,_merge3.default)({},style,{
	characterConstant:style.characterConstant||getFontCharacterConstant(style.fontFamily),
	letterSpacing:convertLengthToPixels(style.letterSpacing,style.fontSize),
	fontSize:typeof style.fontSize==="number"?
	style.fontSize:
	convertLengthToPixels(String(style.fontSize))});
	
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	var approximateTextSize=function approximateTextSize(text,style){
	var params=prepareParams(style);
	var height=aproximateTextHeightInternal(text,params);
	var width=aproximateTextWidthInternal(text,params);
	var widthWithRotate=getSizeWithRotate(width,height,params.angle);
	var heightWithRotate=getSizeWithRotate(height,width,params.angle);
	return{
	width:widthWithRotate*coefficients.widthOverlapCoef,
	height:heightWithRotate*coefficients.heightOverlapCoef};
	
	};exports.default=
	
	{
	approximateTextSize:approximateTextSize,
	convertLengthToPixels:convertLengthToPixels};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _identity2=__webpack_require__(55);var _identity3=_interopRequireDefault(_identity2);var _defaults2=__webpack_require__(134);var _defaults3=_interopRequireDefault(_defaults2);var _assign2=__webpack_require__(80);var _assign3=_interopRequireDefault(_assign2);exports.
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	getInitialTransitionState=getInitialTransitionState;exports.
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	getTransitionPropsFactory=getTransitionPropsFactory;var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function getDatumKey(datum,idx){return(datum.key||idx).toString();}function getKeyedData(data){return data.reduce(function(keyedData,datum,idx){var key=getDatumKey(datum,idx);keyedData[key]=datum;return keyedData;},{});}function getKeyedDataDifference(a,b){var hasDifference=false;var difference=Object.keys(a).reduce(function(_difference,key){if(!(key in b)){hasDifference=true;_difference[key]=true;}return _difference;},{});return hasDifference&&difference;}function getNodeTransitions(oldData,nextData){var oldDataKeyed=oldData&&getKeyedData(oldData);var nextDataKeyed=nextData&&getKeyedData(nextData);return{entering:oldDataKeyed&&getKeyedDataDifference(nextDataKeyed,oldDataKeyed),exiting:nextDataKeyed&&getKeyedDataDifference(oldDataKeyed,nextDataKeyed)};}function getChildData(child){if(child.type&&child.type.getData){return child.type.getData(child.props);}return child.props&&child.props.data||false;}function getInitialTransitionState(oldChildren,nextChildren){var nodesWillExit=false;var nodesWillEnter=false;var getTransition=function getTransition(oldChild,newChild){if(!newChild||oldChild.type!==newChild.type){return{};}var _ref=getNodeTransitions(getChildData(oldChild),getChildData(newChild))||{};var entering=_ref.entering;var exiting=_ref.exiting;nodesWillExit=nodesWillExit||!!exiting;nodesWillEnter=nodesWillEnter||!!entering;return{entering:entering||false,exiting:exiting||false};};var getTransitionsFromChildren=function getTransitionsFromChildren(old,next){return old.map(function(child,idx){if(child&&child.props&&child.props.children){return getTransitionsFromChildren(_react2.default.Children.toArray(old[idx].props.children),_react2.default.Children.toArray(next[idx].props.children));}return getTransition(child,next[idx]);});};var childrenTransitions=getTransitionsFromChildren(_react2.default.Children.toArray(oldChildren),_react2.default.Children.toArray(nextChildren));return{nodesWillExit:nodesWillExit,nodesWillEnter:nodesWillEnter,childrenTransitions:childrenTransitions,nodesShouldEnter:false,nodesShouldLoad:false,nodesDoneLoad:false,nodesDoneClipPathLoad:false,nodesDoneClipPathEnter:false,nodesDoneClipPathExit:false,animating:nodesWillExit||nodesWillEnter||childrenTransitions.length>0};}function getInitialChildProps(animate,data){var after=animate.onEnter&&animate.onEnter.after?animate.onEnter.after:_identity3.default;return{data:data.map(function(datum){return(0,_assign3.default)({},datum,after(datum));})};}function getChildBeforeLoad(animate,child,data,cb){var before=animate.onLoad&&animate.onLoad.before?animate.onLoad.before:_identity3.default;var beforeClipPathWidth=animate.onLoad&&animate.onLoad.beforeClipPathWidth;data=data.map(function(datum){return(0,_assign3.default)({},datum,before(datum));});if(beforeClipPathWidth){var _beforeClipPathWidth=beforeClipPathWidth(data,child,animate);var clipWidth=_beforeClipPathWidth.clipWidth;var translateX=_beforeClipPathWidth.translateX;return{animate:animate,data:data,clipWidth:clipWidth,translateX:translateX,cb:cb};}return{animate:animate,data:data,cb:cb};}function getChildOnLoad(animate,data,cb){animate=(0,_assign3.default)({},animate,{onEnd:cb});var after=animate.onLoad&&animate.onLoad.after?animate.onLoad.after:_identity3.default;data=data.map(function(datum){return(0,_assign3.default)({},datum,after(datum));});return{animate:animate,data:data};}function getChildClipPathToLoad(animate,child,data,cb){animate=(0,_assign3.default)({},animate,{onEnd:cb});var afterClipPathWidth=animate.onLoad&&animate.onLoad.afterClipPathWidth;if(afterClipPathWidth){var _afterClipPathWidth=afterClipPathWidth(data,child,animate);var clipWidth=_afterClipPathWidth.clipWidth;var translateX=_afterClipPathWidth.translateX;return{animate:animate,clipWidth:clipWidth,translateX:translateX};}return{animate:animate};}function getChildClipPathToExit(animate,child,data,exitingNodes,cb){var clipWidth=void 0;if(exitingNodes){animate=(0,_assign3.default)({},animate,{onEnd:cb});var beforeClipPathWidth=animate.onExit&&animate.onExit.beforeClipPathWidth;if(beforeClipPathWidth){clipWidth=beforeClipPathWidth(data,child,exitingNodes);return{animate:animate,clipWidth:clipWidth};}}return{animate:animate};}function getChildPropsOnExit(animate,data,exitingNodes,cb){var onExit=animate&&animate.onExit;animate=(0,_assign3.default)({},animate,onExit);if(exitingNodes){(function(){animate.onEnd=cb;var before=animate.onExit&&animate.onExit.before?animate.onExit.before:_identity3.default;data=data.map(function(datum,idx){var key=(datum.key||idx).toString();return exitingNodes[key]?(0,_assign3.default)({},datum,before(datum)):datum;});})();}return{animate:animate,data:data};}function getChildClipPathToEnter(animate,child,data,enteringNodes,cb){var clipWidth=void 0;if(enteringNodes){animate=(0,_assign3.default)({},animate,{onEnd:cb});var afterClipPathWidth=animate.onEnter&&animate.onEnter.afterClipPathWidth;if(afterClipPathWidth){clipWidth=afterClipPathWidth(data,child);return{animate:animate,clipWidth:clipWidth};}}return{animate:animate};}function getChildPropsBeforeEnter(animate,child,data,enteringNodes,cb){var clipWidth=void 0;if(enteringNodes){var _ret2=function(){animate=(0,_assign3.default)({},animate,{onEnd:cb});var before=animate.onEnter&&animate.onEnter.before?animate.onEnter.before:_identity3.default;var beforeClipPathWidth=animate.onEnter&&animate.onEnter.beforeClipPathWidth;data=data.map(function(datum,idx){var key=(datum.key||idx).toString();return enteringNodes[key]?(0,_assign3.default)({},datum,before(datum)):datum;});if(beforeClipPathWidth){clipWidth=beforeClipPathWidth(data,child,enteringNodes);return{v:{animate:animate,data:data,clipWidth:clipWidth}};}}();if(typeof _ret2==="object")return _ret2.v;}return{animate:animate,data:data};}function getChildPropsOnEnter(animate,data,enteringNodes,cb){var onEnter=animate&&animate.onEnter;animate=(0,_assign3.default)({},animate,onEnter);if(enteringNodes){(function(){animate.onEnd=cb;var after=animate.onEnter&&animate.onEnter.after?animate.onEnter.after:_identity3.default;data=data.map(function(datum,idx){var key=getDatumKey(datum,idx);return enteringNodes[key]?(0,_assign3.default)({},datum,after(datum)):datum;});})();}return{animate:animate,data:data};}function getTransitionPropsFactory(props,state,setState){
	var nodesWillExit=state&&state.nodesWillExit;
	var nodesWillEnter=state&&state.nodesWillEnter;
	var nodesShouldEnter=state&&state.nodesShouldEnter;
	var nodesShouldLoad=state&&state.nodesShouldLoad;
	var nodesDoneLoad=state&&state.nodesDoneLoad;
	var nodesDoneClipPathLoad=state&&state.nodesDoneClipPathLoad;
	var nodesDoneClipPathEnter=state&&state.nodesDoneClipPathEnter;
	var nodesDoneClipPathExit=state&&state.nodesDoneClipPathExit;
	var childrenTransitions=state&&state.childrenTransitions||[];
	var transitionDurations={
	enter:props.animate&&props.animate.onEnter&&props.animate.onEnter.duration,
	exit:props.animate&&props.animate.onExit&&props.animate.onExit.duration,
	load:props.animate&&props.animate.onLoad&&props.animate.onLoad.duration,
	move:props.animate&&props.animate.duration};
	
	
	var onLoad=function onLoad(child,data,animate){
	if(nodesShouldLoad){
	if(!nodesDoneClipPathLoad){
	return getChildClipPathToLoad(animate,child,data,function(){
	setState({nodesDoneClipPathLoad:true});
	});
	}
	return getChildOnLoad(animate,data,function(){
	setState({nodesDoneLoad:true,animating:false});
	});
	}
	
	return getChildBeforeLoad(animate,child,data,function(){
	setState({nodesShouldLoad:true});
	});
	};
	
	var onExit=function onExit(nodes,child,data,animate){
	if(!nodesDoneClipPathExit){
	return getChildClipPathToExit(animate,child,data,nodes,function(){
	setState({nodesDoneClipPathExit:true});
	});
	}
	
	return getChildPropsOnExit(animate,data,nodes,function(){
	setState({nodesWillExit:false,animating:false});
	});
	};
	
	var onEnter=function onEnter(nodes,child,data,animate){
	if(nodesShouldEnter){
	if(!nodesDoneClipPathEnter){
	return getChildClipPathToEnter(animate,child,data,nodes,function(){
	setState({nodesDoneClipPathEnter:true});
	});
	}
	
	return getChildPropsOnEnter(animate,data,nodes,function(){
	setState({nodesWillEnter:false,animating:false});
	});
	}
	
	return getChildPropsBeforeEnter(animate,child,data,nodes,function(){
	setState({nodesShouldEnter:true});
	});
	};
	
	var getChildTransitionDuration=function getChildTransitionDuration(child,type){
	var animate=child.props.animate;
	var defaultTransitions=child.type&&child.type.defaultTransitions;
	if(defaultTransitions){
	var animationDuration=animate[type]&&animate[type].duration;
	return animationDuration!==undefined?
	animationDuration:defaultTransitions[type]&&defaultTransitions[type].duration;
	}
	
	return{};
	};
	
	return function getTransitionProps(child,index){
	var data=getChildData(child)||[];
	var animate=(0,_defaults3.default)({},props.animate,child.props.animate);
	
	animate.onExit=(0,_defaults3.default)(
	{},animate.onExit,child.type.defaultTransitions&&child.type.defaultTransitions.onExit);
	
	animate.onEnter=(0,_defaults3.default)(
	{},animate.onEnter,child.type.defaultTransitions&&child.type.defaultTransitions.onEnter);
	
	animate.onLoad=(0,_defaults3.default)(
	{},animate.onLoad,child.type.defaultTransitions&&child.type.defaultTransitions.onLoad);
	
	
	var childTransitions=childrenTransitions[index]||childrenTransitions[0];
	if(!nodesDoneLoad){
	
	var load=transitionDurations.load!==undefined?
	transitionDurations.load:getChildTransitionDuration(child,"onLoad");
	var animation={duration:load};
	return onLoad(child,data,(0,_assign3.default)({},animate,animation));
	}else if(nodesWillExit){
	var exitingNodes=childTransitions&&childTransitions.exiting;
	var exit=transitionDurations.exit!==undefined?
	transitionDurations.exit:getChildTransitionDuration(child,"onExit");
	
	var _animation=exitingNodes?{duration:exit}:{delay:exit};
	return onExit(exitingNodes,child,data,(0,_assign3.default)({},animate,_animation));
	}else if(nodesWillEnter){
	var enteringNodes=childTransitions&&childTransitions.entering;
	var enter=transitionDurations.enter!==undefined?
	transitionDurations.enter:getChildTransitionDuration(child,"onEnter");
	var move=transitionDurations.move!==undefined?
	transitionDurations.move:child.props.animate&&child.props.animate.duration;
	var _animation2={duration:nodesShouldEnter&&enteringNodes?enter:move};
	return onEnter(enteringNodes,child,data,(0,_assign3.default)({},animate,_animation2));
	}else if(!state&&animate&&animate.onExit){
	
	
	
	
	
	
	
	
	
	return getInitialChildProps(animate,data);
	}
	
	animate.onEnd=function(){setState({animating:false});};
	return{animate:animate,data:data};
	};
	}

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _isEqual2=__webpack_require__(199);var _isEqual3=_interopRequireDefault(_isEqual2);var _identity2=__webpack_require__(55);var _identity3=_interopRequireDefault(_identity2);var _filter2=__webpack_require__(192);var _filter3=_interopRequireDefault(_filter2);var _pick2=__webpack_require__(90);var _pick3=_interopRequireDefault(_pick2);var _isFunction2=__webpack_require__(78);var _isFunction3=_interopRequireDefault(_isFunction2);var _defaults2=__webpack_require__(134);var _defaults3=_interopRequireDefault(_defaults2);var _assign2=__webpack_require__(80);var _assign3=_interopRequireDefault(_assign2);var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);
	var _victoryAnimation=__webpack_require__(1);var _victoryAnimation2=_interopRequireDefault(_victoryAnimation);
	var _index=__webpack_require__(107);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
	
	
	VictoryTransition=function(_React$Component){_inherits(VictoryTransition,_React$Component);
	
	
	
	
	
	
	
	
	function VictoryTransition(props){_classCallCheck(this,VictoryTransition);var _this=_possibleConstructorReturn(this,(VictoryTransition.__proto__||Object.getPrototypeOf(VictoryTransition)).call(this,
	props));
	_this.state={
	nodesShouldLoad:false,
	nodesDoneLoad:false,
	nodesDoneClipPathLoad:false,
	animating:true};
	
	var child=_this.props.children;
	_this.continuous=child.type&&child.type.continuous;
	_this.getTransitionState=_this.getTransitionState.bind(_this);return _this;
	}_createClass(VictoryTransition,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(
	
	nextProps){
	this.setState(this.getTransitionState(this.props,nextProps));
	}},{key:"shouldAnimateProps",value:function shouldAnimateProps(
	
	
	nextProps){
	return!(0,_isEqual3.default)(this.getWhitelistedProps(this.props),this.getWhitelistedProps(nextProps));
	}},{key:"getWhitelistedProps",value:function getWhitelistedProps(
	
	props){
	var childProps=props.children&&props.children.props||{};
	return props.animationWhitelist?(0,_pick3.default)(childProps,props.animationWhitelist):childProps;
	}},{key:"shouldAnimateState",value:function shouldAnimateState(
	
	nextProps,nextState){
	var child=this.props.children;
	
	if(child.type.role&&child.type.role==="axis"){
	return false;
	}
	var parentState=this.getParentState(nextProps,nextState);
	if(!parentState){
	return this.animateState(nextState);
	}
	
	var forceLoad=parentState.animating&&!parentState.nodesDoneLoad;
	return this.animateState(parentState,forceLoad);
	}},{key:"getParentState",value:function getParentState(
	
	nextProps,nextState){
	var props=nextState.oldProps||this.props;
	return props.animate&&props.animate.parentState||
	nextProps.animate&&nextProps.animate.parentState;
	}},{key:"animateState",value:function animateState(
	
	state,forceLoad){var
	
	nodesWillExit=
	
	state.nodesWillExit;var nodesWillEnter=state.nodesWillEnter;var nodesShouldEnter=state.nodesShouldEnter;var nodesShouldLoad=state.nodesShouldLoad;var nodesDoneLoad=state.nodesDoneLoad;var nodesDoneClipPathLoad=state.nodesDoneClipPathLoad;var nodesDoneClipPathEnter=state.nodesDoneClipPathEnter;var nodesDoneClipPathExit=state.nodesDoneClipPathExit;var animating=state.animating;
	var loading=forceLoad||!nodesDoneLoad&&(!!nodesShouldLoad||nodesDoneClipPathLoad);
	var entering=nodesShouldEnter||nodesWillEnter||nodesDoneClipPathEnter;
	var exiting=nodesWillExit||nodesDoneClipPathExit;
	return(animating||this.state.animating)&&(loading||entering||exiting);
	}},{key:"shouldComponentUpdate",value:function shouldComponentUpdate(
	
	nextProps,nextState){
	if(this.shouldAnimateState(nextProps,nextState)){
	return true;
	}else if(this.shouldAnimateProps(nextProps)){
	return true;
	}
	return false;
	}},{key:"componentWillUpdate",value:function componentWillUpdate(
	
	nextProps,nextState){
	if(nextState.animating!==this.state.animating&&nextState.animating===false){
	var onEnd=nextProps&&nextProps.animate&&nextProps.animate.onEnd||_identity3.default;
	onEnd();
	}
	}},{key:"componentDidMount",value:function componentDidMount()
	
	{
	if(this.transitionProps&&this.transitionProps.cb){
	this.transitionProps.cb();
	}
	}},{key:"getTransitionState",value:function getTransitionState(
	
	props,nextProps){var
	animate=props.animate;
	if(!animate){
	return{};
	}else if(animate.parentState){
	var oldProps=animate.parentState.nodesWillExit?props:null;
	return{oldProps:oldProps};
	}else{
	var oldChildren=_react2.default.Children.toArray(props.children);
	var nextChildren=_react2.default.Children.toArray(nextProps.children);var _Transitions$getIniti=
	
	
	
	
	
	
	
	
	
	
	
	_index.Transitions.getInitialTransitionState(oldChildren,nextChildren);var nodesWillExit=_Transitions$getIniti.nodesWillExit;var nodesWillEnter=_Transitions$getIniti.nodesWillEnter;var childrenTransitions=_Transitions$getIniti.childrenTransitions;var nodesShouldEnter=_Transitions$getIniti.nodesShouldEnter;var nodesShouldLoad=_Transitions$getIniti.nodesShouldLoad;var nodesDoneLoad=_Transitions$getIniti.nodesDoneLoad;var nodesDoneClipPathLoad=_Transitions$getIniti.nodesDoneClipPathLoad;var nodesDoneClipPathEnter=_Transitions$getIniti.nodesDoneClipPathEnter;var nodesDoneClipPathExit=_Transitions$getIniti.nodesDoneClipPathExit;var animating=_Transitions$getIniti.animating;
	var transitionState={
	nodesWillExit:nodesWillExit,
	nodesWillEnter:nodesWillEnter,
	childrenTransitions:childrenTransitions,
	nodesShouldEnter:nodesShouldEnter,
	nodesShouldLoad:nodesShouldLoad||this.state.nodesShouldLoad,
	nodesDoneLoad:nodesDoneLoad||this.state.nodesDoneLoad,
	animating:animating||this.state.animating,
	oldProps:nodesWillExit?props:null};
	
	return this.continuous?(0,_assign3.default)(
	{
	nodesDoneClipPathEnter:nodesDoneClipPathEnter,
	nodesDoneClipPathExit:nodesDoneClipPathExit,
	nodesDoneClipPathLoad:nodesDoneClipPathLoad||this.state.nodesDoneClipPathLoad},
	
	transitionState):
	transitionState;
	}
	}},{key:"getDomainFromChildren",value:function getDomainFromChildren(
	
	props,axis){
	var getChildDomains=function getChildDomains(children){
	return children.reduce(function(memo,child){
	if(child.type&&(0,_isFunction3.default)(child.type.getDomain)){
	var childDomain=child.props&&child.type.getDomain(child.props,axis);
	return childDomain?memo.concat(childDomain):memo;
	}else if(child.props&&child.props.children){
	return memo.concat(getChildDomains(_react2.default.Children.toArray(child.props.children)));
	}
	return memo;
	},[]);
	};
	
	var childComponents=_react2.default.Children.toArray(props.children);
	if(props.domain&&(Array.isArray(props.domain)||props.domain[axis])){
	return Array.isArray(props.domain)?props.domain:props.domain[axis];
	}else{
	var childDomains=getChildDomains(childComponents);
	return childDomains.length===0?
	[0,1]:[_index.Collection.getMinValue(childDomains),_index.Collection.getMaxValue(childDomains)];
	}
	}},{key:"getClipPathWhitelist",value:function getClipPathWhitelist(
	
	transitionProps){
	var clipPathWhitelist=["clipWidth","clipHeight","translateX"];
	
	if(this.state&&this.state.nodesDoneClipPathExit&&this.state.nodesWillExit||
	transitionProps.animate&&
	transitionProps.animate.parentState&&
	transitionProps.animate.parentState.nodesDoneClipPathExit&&
	transitionProps.animate.parentState.nodesWillExit){
	return(0,_filter3.default)(clipPathWhitelist,function(list){
	return list!=="clipWidth";
	});
	}
	return clipPathWhitelist;
	}},{key:"render",value:function render()
	
	{var _this2=this;
	var props=this.state&&this.state.nodesWillExit?
	this.state.oldProps:this.props;
	var getTransitionProps=this.props.animate&&this.props.animate.getTransitions?
	this.props.animate.getTransitions:
	_index.Transitions.getTransitionPropsFactory(
	props,
	this.state,
	function(newState){return _this2.setState(newState);});
	
	var child=_react2.default.Children.toArray(props.children)[0];
	var transitionProps=getTransitionProps(child);
	this.transitionProps=transitionProps;
	var domain={
	x:this.getDomainFromChildren(props,"x"),
	y:this.getDomainFromChildren(props,"y")};
	
	var combinedProps=(0,_defaults3.default)(
	{domain:domain},transitionProps,child.props);
	
	var animationWhitelist=props.animationWhitelist||[];
	var whitelist=this.continuous?
	animationWhitelist.concat(this.getClipPathWhitelist(transitionProps)):animationWhitelist;
	var propsToAnimate=whitelist.length?(0,_pick3.default)(combinedProps,whitelist):combinedProps;
	return(
	_react2.default.createElement(_victoryAnimation2.default,_extends({},combinedProps.animate,{data:propsToAnimate}),
	function(newProps){
	if(_this2.continuous){var
	clipWidth=newProps.clipWidth;var clipHeight=newProps.clipHeight;var translateX=newProps.translateX;var padding=newProps.padding;
	var groupComponent=_react2.default.cloneElement(
	child.props.groupComponent,
	{clipWidth:clipWidth,clipHeight:clipHeight,translateX:translateX,padding:padding});
	
	return _react2.default.cloneElement(
	child,(0,_defaults3.default)({animate:null,groupComponent:groupComponent},newProps,combinedProps));
	
	}
	return _react2.default.cloneElement(
	child,(0,_defaults3.default)({animate:null},newProps,combinedProps));
	
	}));
	
	
	}}]);return VictoryTransition;}(_react2.default.Component);VictoryTransition.displayName="VictoryTransition";VictoryTransition.propTypes={animate:_react2.default.PropTypes.object,children:_react2.default.PropTypes.node,animationWhitelist:_react2.default.PropTypes.array};exports.default=VictoryTransition;

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(200);
	
	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are **not** supported.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual(value, other) {
	  return baseIsEqual(value, other);
	}
	
	module.exports = isEqual;


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(201),
	    isObject = __webpack_require__(74),
	    isObjectLike = __webpack_require__(9);
	
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}
	
	module.exports = baseIsEqual;


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(93),
	    equalArrays = __webpack_require__(202),
	    equalByTag = __webpack_require__(204),
	    equalObjects = __webpack_require__(206),
	    getTag = __webpack_require__(140),
	    isArray = __webpack_require__(49),
	    isBuffer = __webpack_require__(65),
	    isTypedArray = __webpack_require__(69);
	
	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;
	
	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;
	
	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}
	
	module.exports = baseIsEqualDeep;


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(16),
	    arraySome = __webpack_require__(203),
	    cacheHas = __webpack_require__(34);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;
	
	  stack.set(array, other);
	  stack.set(other, array);
	
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalArrays;


/***/ },
/* 203 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(45),
	    Uint8Array = __webpack_require__(101),
	    eq = __webpack_require__(21),
	    equalArrays = __webpack_require__(202),
	    mapToArray = __webpack_require__(205),
	    setToArray = __webpack_require__(172);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;
	
	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;
	
	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');
	
	    case mapTag:
	      var convert = mapToArray;
	
	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);
	
	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;
	
	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	      stack['delete'](object);
	      return result;
	
	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ },
/* 205 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	module.exports = mapToArray;


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(86);
	
	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);
	
	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalObjects;


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _defaults2=__webpack_require__(134);var _defaults3=_interopRequireDefault(_defaults2);var _partialRight2=__webpack_require__(109);var _partialRight3=_interopRequireDefault(_partialRight2);var _isFunction2=__webpack_require__(78);var _isFunction3=_interopRequireDefault(_isFunction2);var _assign2=__webpack_require__(80);var _assign3=_interopRequireDefault(_assign2);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();
	var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);
	var _index=__webpack_require__(107);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
	
	VictorySharedEvents=function(_React$Component){_inherits(VictorySharedEvents,_React$Component);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function VictorySharedEvents(){_classCallCheck(this,VictorySharedEvents);var _this=_possibleConstructorReturn(this,(VictorySharedEvents.__proto__||Object.getPrototypeOf(VictorySharedEvents)).call(this));
	
	_this.state={};
	_this.getScopedEvents=_index.Events.getScopedEvents.bind(_this);
	_this.getEventState=_index.Events.getEventState.bind(_this);return _this;
	}_createClass(VictorySharedEvents,[{key:"componentWillMount",value:function componentWillMount()
	
	{
	this.setUpChildren(this.props);
	}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(
	
	newProps){
	this.setUpChildren(newProps);
	}},{key:"setUpChildren",value:function setUpChildren(
	
	props){
	this.childComponents=_react2.default.Children.toArray(props.children);
	var childBaseProps=this.getBasePropsFromChildren(this.childComponents);
	var parentBaseProps=props.container?{parent:props.container.props}:{};
	this.baseProps=(0,_assign3.default)({},childBaseProps,{parent:parentBaseProps});
	}},{key:"getBasePropsFromChildren",value:function getBasePropsFromChildren(
	
	childComponents){
	var getBaseProps=function getBaseProps(children){
	return children.reduce(function(memo,child,index){
	if(child.type&&(0,_isFunction3.default)(child.type.getBaseProps)){
	var baseChildProps=child.props&&child.type.getBaseProps(child.props);
	if(baseChildProps){
	var childKey=child.props.name||index;
	memo[childKey]=baseChildProps;
	return memo;
	}
	return memo;
	}else if(child.props&&child.props.children){
	return getBaseProps(_react2.default.Children.toArray(child.props.children));
	}
	return memo;
	},{});
	};
	return getBaseProps(childComponents);
	}},{key:"getNewChildren",value:function getNewChildren(
	
	props){var _this2=this;var
	events=props.events;var eventKey=props.eventKey;
	var childNames=Object.keys(this.baseProps);
	
	var alterChildren=function alterChildren(children){
	return children.reduce(function(memo,child){
	if(child.type&&(0,_isFunction3.default)(child.type.getBaseProps)){var _ret=function(){
	var name=child.props.name||childNames.shift();
	var childEvents=Array.isArray(events)&&
	events.filter(function(event){
	return Array.isArray(event.childName)?
	event.childName.indexOf(name)>-1:
	event.childName===name||event.childName==="all";
	});
	var sharedEvents={
	events:childEvents,
	getEvents:(0,_partialRight3.default)(_this2.getScopedEvents,name,_this2.baseProps),
	getEventState:(0,_partialRight3.default)(_this2.getEventState,name)};
	
	return{v:memo.concat(_react2.default.cloneElement(child,(0,_assign3.default)(
	{key:"events-"+name,sharedEvents:sharedEvents,eventKey:eventKey},
	child.props)))};}();if(typeof _ret==="object")return _ret.v;
	
	}else if(child.props.children){
	return memo.concat(_react2.default.cloneElement(
	child,
	child.props,
	alterChildren(_react2.default.Children.toArray(child.props.children))));
	
	}else{
	return memo.concat(child);
	}
	},[]);
	};
	
	return alterChildren(this.childComponents);
	}},{key:"getContainer",value:function getContainer(
	
	props,children){
	var parents=Array.isArray(props.events)&&
	props.events.filter(function(event){return event.target==="parent";});
	var sharedEvents=parents.length>0?
	{
	events:parents,
	getEvents:(0,_partialRight3.default)(this.getScopedEvents,null,this.baseProps),
	getEventState:(0,_partialRight3.default)(this.getEventState,null)}:
	null;
	var boundGetEvents=_index.Events.getEvents.bind(this);
	var parentEvents=boundGetEvents({sharedEvents:sharedEvents},"parent");
	var parentProps=(0,_defaults3.default)(
	{},
	this.getEventState("parent","parent"),
	props.container.props,
	this.baseProps.parent);
	
	return _react2.default.cloneElement(
	props.container,
	(0,_assign3.default)(
	{},parentProps,{events:_index.Events.getPartialEvents(parentEvents,"parent",parentProps)}),
	
	children);
	
	}},{key:"render",value:function render()
	
	{
	var children=this.getNewChildren(this.props);
	return this.props.container?this.getContainer(this.props,children):_react2.default.createElement("g",null,children);
	
	}}]);return VictorySharedEvents;}(_react2.default.Component);VictorySharedEvents.displayName="VictorySharedEvents";VictorySharedEvents.role="shared-event-wrapper";VictorySharedEvents.propTypes={children:_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.node),_react2.default.PropTypes.node]),container:_react2.default.PropTypes.node,events:_react.PropTypes.arrayOf(_react.PropTypes.shape({childName:_react.PropTypes.oneOfType([_react.PropTypes.string,_react.PropTypes.array]),target:_react.PropTypes.string,eventKey:_react.PropTypes.oneOfType([_react.PropTypes.array,_react.PropTypes.func,_index.PropTypes.allOfType([_index.PropTypes.integer,_index.PropTypes.nonNegative]),_react.PropTypes.string]),eventHandlers:_react.PropTypes.object})),eventKey:_react.PropTypes.oneOfType([_react.PropTypes.array,_react.PropTypes.func,_index.PropTypes.allOfType([_index.PropTypes.integer,_index.PropTypes.nonNegative]),_react.PropTypes.string])};exports.default=VictorySharedEvents;

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);
	var _index=__webpack_require__(209);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
	
	VictoryClipContainer=function(_React$Component){_inherits(VictoryClipContainer,_React$Component);function VictoryClipContainer(){_classCallCheck(this,VictoryClipContainer);return _possibleConstructorReturn(this,(VictoryClipContainer.__proto__||Object.getPrototypeOf(VictoryClipContainer)).apply(this,arguments));}_createClass(VictoryClipContainer,[{key:"renderClippedGroup",value:function renderClippedGroup(
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	props,clipComponent,clipId){var
	style=props.style;var events=props.events;var transform=props.transform;var children=props.children;
	return(
	_react2.default.createElement("g",_extends({
	style:style},
	events,{
	transform:transform}),
	
	clipComponent,
	_react2.default.createElement("g",{clipPath:"url(#"+clipId+")"},
	children)));
	
	
	
	}},{key:"renderGroup",value:function renderGroup(
	
	props){var
	style=props.style;var events=props.events;var transform=props.transform;var children=props.children;
	return(
	_react2.default.createElement("g",_extends({
	style:style},
	events,{
	transform:transform}),
	
	children));
	
	
	}},{key:"render",value:function render()
	
	{var
	clipWidth=this.props.clipWidth;
	if(clipWidth||clipWidth===0){var _props=
	this.props;var padding=_props.padding;var translateX=_props.translateX;var clipHeight=_props.clipHeight;var clipPathComponent=_props.clipPathComponent;
	var clipId=Math.round(Math.random()*10000);
	var clipComponent=_react2.default.cloneElement(
	clipPathComponent,
	{padding:padding,clipId:clipId,translateX:translateX,clipWidth:clipWidth,clipHeight:clipHeight});
	
	return this.renderClippedGroup(this.props,clipComponent,clipId);
	}
	return this.renderGroup(this.props);
	}}]);return VictoryClipContainer;}(_react2.default.Component);VictoryClipContainer.displayName="VictoryClipContainer";VictoryClipContainer.propTypes={style:_react.PropTypes.object,padding:_react.PropTypes.oneOfType([_react.PropTypes.number,_react.PropTypes.shape({top:_react.PropTypes.number,bottom:_react.PropTypes.number,left:_react.PropTypes.number,right:_react.PropTypes.number})]),clipHeight:_react.PropTypes.number,clipWidth:_react.PropTypes.number,events:_react.PropTypes.object,children:_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.node),_react2.default.PropTypes.node]),clipPathComponent:_react.PropTypes.element,translateX:_react.PropTypes.number,transform:_react.PropTypes.string};VictoryClipContainer.defaultProps={clipPathComponent:_react2.default.createElement(_index.ClipPath,null)};exports.default=VictoryClipContainer;

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});exports.Flyout=exports.Voronoi=exports.Slice=exports.Point=exports.Line=exports.ErrorBar=exports.Curve=exports.ClipPath=exports.Candle=exports.Bar=exports.Area=undefined;var _area=__webpack_require__(210);var _area2=_interopRequireDefault(_area);
	var _bar=__webpack_require__(213);var _bar2=_interopRequireDefault(_bar);
	var _candle=__webpack_require__(214);var _candle2=_interopRequireDefault(_candle);
	var _clipPath=__webpack_require__(215);var _clipPath2=_interopRequireDefault(_clipPath);
	var _curve=__webpack_require__(216);var _curve2=_interopRequireDefault(_curve);
	var _errorBar=__webpack_require__(217);var _errorBar2=_interopRequireDefault(_errorBar);
	var _line=__webpack_require__(218);var _line2=_interopRequireDefault(_line);
	var _point=__webpack_require__(219);var _point2=_interopRequireDefault(_point);
	var _slice=__webpack_require__(221);var _slice2=_interopRequireDefault(_slice);
	var _voronoi=__webpack_require__(222);var _voronoi2=_interopRequireDefault(_voronoi);
	var _flyout=__webpack_require__(223);var _flyout2=_interopRequireDefault(_flyout);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.
	
	
	
	Area=_area2.default;exports.Bar=_bar2.default;exports.Candle=_candle2.default;exports.ClipPath=_clipPath2.default;exports.Curve=_curve2.default;exports.ErrorBar=_errorBar2.default;exports.Line=_line2.default;exports.Point=_point2.default;exports.Slice=_slice2.default;exports.Voronoi=_voronoi2.default;exports.Flyout=_flyout2.default;

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _assign2=__webpack_require__(80);var _assign3=_interopRequireDefault(_assign2);var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);
	
	var _d3Shape=__webpack_require__(211);var d3Shape=_interopRequireWildcard(_d3Shape);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
	
	Area=function(_React$Component){_inherits(Area,_React$Component);function Area(){_classCallCheck(this,Area);return _possibleConstructorReturn(this,(Area.__proto__||Object.getPrototypeOf(Area)).apply(this,arguments));}_createClass(Area,[{key:"toNewName",value:function toNewName(
	
	
	
	
	
	
	
	
	
	
	
	interpolation){
	
	var capitalize=function capitalize(s){return s&&s[0].toUpperCase()+s.slice(1);};
	return"curve"+capitalize(interpolation);
	}},{key:"getAreaPath",value:function getAreaPath(
	
	props){
	var xScale=props.scale.x;
	var yScale=props.scale.y;
	var areaFunction=d3Shape.area().
	curve(d3Shape[this.toNewName(props.interpolation)]).
	x(function(data){return xScale(data.x1||data.x);}).
	y1(function(data){return yScale(data.y1||data.y);}).
	y0(function(data){return yScale(data.y0);});
	return areaFunction(props.data);
	}},{key:"getLinePath",value:function getLinePath(
	
	props){
	var xScale=props.scale.x;
	var yScale=props.scale.y;
	var lineFunction=d3Shape.line().
	curve(d3Shape[this.toNewName(props.interpolation)]).
	x(function(data){return xScale(data.x1||data.x);}).
	y(function(data){return yScale(data.y1);});
	return lineFunction(props.data);
	}},{key:"renderArea",value:function renderArea(
	
	path,style,events){
	var areaStroke=style.stroke?"none":style.fill;
	var areaStyle=(0,_assign3.default)({},style,{stroke:areaStroke});var _props=
	this.props;var role=_props.role;var shapeRendering=_props.shapeRendering;
	return(
	_react2.default.createElement("path",_extends({
	key:"area",
	style:areaStyle,
	shapeRendering:shapeRendering||"auto",
	role:role||"presentation",
	d:path},
	events)));
	
	
	}},{key:"renderLine",value:function renderLine(
	
	path,style,events){
	if(!style.stroke||style.stroke==="none"||style.stroke==="transparent"){
	return undefined;
	}var _props2=
	this.props;var role=_props2.role;var shapeRendering=_props2.shapeRendering;
	var lineStyle=(0,_assign3.default)({},style,{fill:"none"});
	return(
	_react2.default.createElement("path",_extends({
	key:"area-stroke",
	shapeRendering:shapeRendering||"auto",
	style:lineStyle,
	role:role||"presentation",
	d:path},
	events)));
	
	
	}},{key:"render",value:function render()
	
	{var _props3=
	this.props;var events=_props3.events;var groupComponent=_props3.groupComponent;
	var style=(0,_assign3.default)({fill:"black"},this.props.style);
	var area=this.renderArea(this.getAreaPath(this.props),style,events);
	var line=this.renderLine(this.getLinePath(this.props),style,events);
	return _react2.default.cloneElement(groupComponent,{},area,line);
	}}]);return Area;}(_react2.default.Component);Area.propTypes={data:_react.PropTypes.array,events:_react.PropTypes.object,groupComponent:_react.PropTypes.element,interpolation:_react.PropTypes.string,shapeRendering:_react.PropTypes.string,role:_react.PropTypes.string,scale:_react.PropTypes.object,style:_react.PropTypes.object};exports.default=Area;

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	// https://d3js.org/d3-shape/ Version 1.0.3. Copyright 2016 Mike Bostock.
	(function (global, factory) {
	   true ? factory(exports, __webpack_require__(212)) :
	  typeof define === 'function' && define.amd ? define(['exports', 'd3-path'], factory) :
	  (factory((global.d3 = global.d3 || {}),global.d3));
	}(this, (function (exports,d3Path) { 'use strict';
	
	function constant(x) {
	  return function constant() {
	    return x;
	  };
	}
	
	var epsilon = 1e-12;
	var pi = Math.PI;
	var halfPi = pi / 2;
	var tau = 2 * pi;
	
	function arcInnerRadius(d) {
	  return d.innerRadius;
	}
	
	function arcOuterRadius(d) {
	  return d.outerRadius;
	}
	
	function arcStartAngle(d) {
	  return d.startAngle;
	}
	
	function arcEndAngle(d) {
	  return d.endAngle;
	}
	
	function arcPadAngle(d) {
	  return d && d.padAngle; // Note: optional!
	}
	
	function asin(x) {
	  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
	}
	
	function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
	  var x10 = x1 - x0, y10 = y1 - y0,
	      x32 = x3 - x2, y32 = y3 - y2,
	      t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
	  return [x0 + t * x10, y0 + t * y10];
	}
	
	// Compute perpendicular offset line of length rc.
	// http://mathworld.wolfram.com/Circle-LineIntersection.html
	function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
	  var x01 = x0 - x1,
	      y01 = y0 - y1,
	      lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01),
	      ox = lo * y01,
	      oy = -lo * x01,
	      x11 = x0 + ox,
	      y11 = y0 + oy,
	      x10 = x1 + ox,
	      y10 = y1 + oy,
	      x00 = (x11 + x10) / 2,
	      y00 = (y11 + y10) / 2,
	      dx = x10 - x11,
	      dy = y10 - y11,
	      d2 = dx * dx + dy * dy,
	      r = r1 - rc,
	      D = x11 * y10 - x10 * y11,
	      d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)),
	      cx0 = (D * dy - dx * d) / d2,
	      cy0 = (-D * dx - dy * d) / d2,
	      cx1 = (D * dy + dx * d) / d2,
	      cy1 = (-D * dx + dy * d) / d2,
	      dx0 = cx0 - x00,
	      dy0 = cy0 - y00,
	      dx1 = cx1 - x00,
	      dy1 = cy1 - y00;
	
	  // Pick the closer of the two intersection points.
	  // TODO Is there a faster way to determine which intersection to use?
	  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
	
	  return {
	    cx: cx0,
	    cy: cy0,
	    x01: -ox,
	    y01: -oy,
	    x11: cx0 * (r1 / r - 1),
	    y11: cy0 * (r1 / r - 1)
	  };
	}
	
	function arc() {
	  var innerRadius = arcInnerRadius,
	      outerRadius = arcOuterRadius,
	      cornerRadius = constant(0),
	      padRadius = null,
	      startAngle = arcStartAngle,
	      endAngle = arcEndAngle,
	      padAngle = arcPadAngle,
	      context = null;
	
	  function arc() {
	    var buffer,
	        r,
	        r0 = +innerRadius.apply(this, arguments),
	        r1 = +outerRadius.apply(this, arguments),
	        a0 = startAngle.apply(this, arguments) - halfPi,
	        a1 = endAngle.apply(this, arguments) - halfPi,
	        da = Math.abs(a1 - a0),
	        cw = a1 > a0;
	
	    if (!context) context = buffer = d3Path.path();
	
	    // Ensure that the outer radius is always larger than the inner radius.
	    if (r1 < r0) r = r1, r1 = r0, r0 = r;
	
	    // Is it a point?
	    if (!(r1 > epsilon)) context.moveTo(0, 0);
	
	    // Or is it a circle or annulus?
	    else if (da > tau - epsilon) {
	      context.moveTo(r1 * Math.cos(a0), r1 * Math.sin(a0));
	      context.arc(0, 0, r1, a0, a1, !cw);
	      if (r0 > epsilon) {
	        context.moveTo(r0 * Math.cos(a1), r0 * Math.sin(a1));
	        context.arc(0, 0, r0, a1, a0, cw);
	      }
	    }
	
	    // Or is it a circular or annular sector?
	    else {
	      var a01 = a0,
	          a11 = a1,
	          a00 = a0,
	          a10 = a1,
	          da0 = da,
	          da1 = da,
	          ap = padAngle.apply(this, arguments) / 2,
	          rp = (ap > epsilon) && (padRadius ? +padRadius.apply(this, arguments) : Math.sqrt(r0 * r0 + r1 * r1)),
	          rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
	          rc0 = rc,
	          rc1 = rc,
	          t0,
	          t1;
	
	      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
	      if (rp > epsilon) {
	        var p0 = asin(rp / r0 * Math.sin(ap)),
	            p1 = asin(rp / r1 * Math.sin(ap));
	        if ((da0 -= p0 * 2) > epsilon) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
	        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
	        if ((da1 -= p1 * 2) > epsilon) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
	        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
	      }
	
	      var x01 = r1 * Math.cos(a01),
	          y01 = r1 * Math.sin(a01),
	          x10 = r0 * Math.cos(a10),
	          y10 = r0 * Math.sin(a10);
	
	      // Apply rounded corners?
	      if (rc > epsilon) {
	        var x11 = r1 * Math.cos(a11),
	            y11 = r1 * Math.sin(a11),
	            x00 = r0 * Math.cos(a00),
	            y00 = r0 * Math.sin(a00);
	
	        // Restrict the corner radius according to the sector angle.
	        if (da < pi) {
	          var oc = da0 > epsilon ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [x10, y10],
	              ax = x01 - oc[0],
	              ay = y01 - oc[1],
	              bx = x11 - oc[0],
	              by = y11 - oc[1],
	              kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2),
	              lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
	          rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
	          rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
	        }
	      }
	
	      // Is the sector collapsed to a line?
	      if (!(da1 > epsilon)) context.moveTo(x01, y01);
	
	      // Does the sector’s outer ring have rounded corners?
	      else if (rc1 > epsilon) {
	        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
	        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
	
	        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);
	
	        // Have the corners merged?
	        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, Math.atan2(t0.y01, t0.x01), Math.atan2(t1.y01, t1.x01), !cw);
	
	        // Otherwise, draw the two corners and the ring.
	        else {
	          context.arc(t0.cx, t0.cy, rc1, Math.atan2(t0.y01, t0.x01), Math.atan2(t0.y11, t0.x11), !cw);
	          context.arc(0, 0, r1, Math.atan2(t0.cy + t0.y11, t0.cx + t0.x11), Math.atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
	          context.arc(t1.cx, t1.cy, rc1, Math.atan2(t1.y11, t1.x11), Math.atan2(t1.y01, t1.x01), !cw);
	        }
	      }
	
	      // Or is the outer ring just a circular arc?
	      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
	
	      // Is there no inner ring, and it’s a circular sector?
	      // Or perhaps it’s an annular sector collapsed due to padding?
	      if (!(r0 > epsilon) || !(da0 > epsilon)) context.lineTo(x10, y10);
	
	      // Does the sector’s inner ring (or point) have rounded corners?
	      else if (rc0 > epsilon) {
	        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
	        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
	
	        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);
	
	        // Have the corners merged?
	        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, Math.atan2(t0.y01, t0.x01), Math.atan2(t1.y01, t1.x01), !cw);
	
	        // Otherwise, draw the two corners and the ring.
	        else {
	          context.arc(t0.cx, t0.cy, rc0, Math.atan2(t0.y01, t0.x01), Math.atan2(t0.y11, t0.x11), !cw);
	          context.arc(0, 0, r0, Math.atan2(t0.cy + t0.y11, t0.cx + t0.x11), Math.atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
	          context.arc(t1.cx, t1.cy, rc0, Math.atan2(t1.y11, t1.x11), Math.atan2(t1.y01, t1.x01), !cw);
	        }
	      }
	
	      // Or is the inner ring just a circular arc?
	      else context.arc(0, 0, r0, a10, a00, cw);
	    }
	
	    context.closePath();
	
	    if (buffer) return context = null, buffer + "" || null;
	  }
	
	  arc.centroid = function() {
	    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
	        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi / 2;
	    return [Math.cos(a) * r, Math.sin(a) * r];
	  };
	
	  arc.innerRadius = function(_) {
	    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant(+_), arc) : innerRadius;
	  };
	
	  arc.outerRadius = function(_) {
	    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant(+_), arc) : outerRadius;
	  };
	
	  arc.cornerRadius = function(_) {
	    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant(+_), arc) : cornerRadius;
	  };
	
	  arc.padRadius = function(_) {
	    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant(+_), arc) : padRadius;
	  };
	
	  arc.startAngle = function(_) {
	    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), arc) : startAngle;
	  };
	
	  arc.endAngle = function(_) {
	    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), arc) : endAngle;
	  };
	
	  arc.padAngle = function(_) {
	    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), arc) : padAngle;
	  };
	
	  arc.context = function(_) {
	    return arguments.length ? ((context = _ == null ? null : _), arc) : context;
	  };
	
	  return arc;
	}
	
	function Linear(context) {
	  this._context = context;
	}
	
	Linear.prototype = {
	  areaStart: function() {
	    this._line = 0;
	  },
	  areaEnd: function() {
	    this._line = NaN;
	  },
	  lineStart: function() {
	    this._point = 0;
	  },
	  lineEnd: function() {
	    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	    this._line = 1 - this._line;
	  },
	  point: function(x, y) {
	    x = +x, y = +y;
	    switch (this._point) {
	      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	      case 1: this._point = 2; // proceed
	      default: this._context.lineTo(x, y); break;
	    }
	  }
	};
	
	function curveLinear(context) {
	  return new Linear(context);
	}
	
	function x(p) {
	  return p[0];
	}
	
	function y(p) {
	  return p[1];
	}
	
	function line() {
	  var x$$ = x,
	      y$$ = y,
	      defined = constant(true),
	      context = null,
	      curve = curveLinear,
	      output = null;
	
	  function line(data) {
	    var i,
	        n = data.length,
	        d,
	        defined0 = false,
	        buffer;
	
	    if (context == null) output = curve(buffer = d3Path.path());
	
	    for (i = 0; i <= n; ++i) {
	      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
	        if (defined0 = !defined0) output.lineStart();
	        else output.lineEnd();
	      }
	      if (defined0) output.point(+x$$(d, i, data), +y$$(d, i, data));
	    }
	
	    if (buffer) return output = null, buffer + "" || null;
	  }
	
	  line.x = function(_) {
	    return arguments.length ? (x$$ = typeof _ === "function" ? _ : constant(+_), line) : x$$;
	  };
	
	  line.y = function(_) {
	    return arguments.length ? (y$$ = typeof _ === "function" ? _ : constant(+_), line) : y$$;
	  };
	
	  line.defined = function(_) {
	    return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), line) : defined;
	  };
	
	  line.curve = function(_) {
	    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
	  };
	
	  line.context = function(_) {
	    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
	  };
	
	  return line;
	}
	
	function area() {
	  var x0 = x,
	      x1 = null,
	      y0 = constant(0),
	      y1 = y,
	      defined = constant(true),
	      context = null,
	      curve = curveLinear,
	      output = null;
	
	  function area(data) {
	    var i,
	        j,
	        k,
	        n = data.length,
	        d,
	        defined0 = false,
	        buffer,
	        x0z = new Array(n),
	        y0z = new Array(n);
	
	    if (context == null) output = curve(buffer = d3Path.path());
	
	    for (i = 0; i <= n; ++i) {
	      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
	        if (defined0 = !defined0) {
	          j = i;
	          output.areaStart();
	          output.lineStart();
	        } else {
	          output.lineEnd();
	          output.lineStart();
	          for (k = i - 1; k >= j; --k) {
	            output.point(x0z[k], y0z[k]);
	          }
	          output.lineEnd();
	          output.areaEnd();
	        }
	      }
	      if (defined0) {
	        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
	        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
	      }
	    }
	
	    if (buffer) return output = null, buffer + "" || null;
	  }
	
	  function arealine() {
	    return line().defined(defined).curve(curve).context(context);
	  }
	
	  area.x = function(_) {
	    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant(+_), x1 = null, area) : x0;
	  };
	
	  area.x0 = function(_) {
	    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant(+_), area) : x0;
	  };
	
	  area.x1 = function(_) {
	    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant(+_), area) : x1;
	  };
	
	  area.y = function(_) {
	    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant(+_), y1 = null, area) : y0;
	  };
	
	  area.y0 = function(_) {
	    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant(+_), area) : y0;
	  };
	
	  area.y1 = function(_) {
	    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant(+_), area) : y1;
	  };
	
	  area.lineX0 =
	  area.lineY0 = function() {
	    return arealine().x(x0).y(y0);
	  };
	
	  area.lineY1 = function() {
	    return arealine().x(x0).y(y1);
	  };
	
	  area.lineX1 = function() {
	    return arealine().x(x1).y(y0);
	  };
	
	  area.defined = function(_) {
	    return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), area) : defined;
	  };
	
	  area.curve = function(_) {
	    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
	  };
	
	  area.context = function(_) {
	    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
	  };
	
	  return area;
	}
	
	function descending(a, b) {
	  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
	}
	
	function identity(d) {
	  return d;
	}
	
	function pie() {
	  var value = identity,
	      sortValues = descending,
	      sort = null,
	      startAngle = constant(0),
	      endAngle = constant(tau),
	      padAngle = constant(0);
	
	  function pie(data) {
	    var i,
	        n = data.length,
	        j,
	        k,
	        sum = 0,
	        index = new Array(n),
	        arcs = new Array(n),
	        a0 = +startAngle.apply(this, arguments),
	        da = Math.min(tau, Math.max(-tau, endAngle.apply(this, arguments) - a0)),
	        a1,
	        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
	        pa = p * (da < 0 ? -1 : 1),
	        v;
	
	    for (i = 0; i < n; ++i) {
	      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
	        sum += v;
	      }
	    }
	
	    // Optionally sort the arcs by previously-computed values or by data.
	    if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
	    else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });
	
	    // Compute the arcs! They are stored in the original data's order.
	    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
	      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
	        data: data[j],
	        index: i,
	        value: v,
	        startAngle: a0,
	        endAngle: a1,
	        padAngle: p
	      };
	    }
	
	    return arcs;
	  }
	
	  pie.value = function(_) {
	    return arguments.length ? (value = typeof _ === "function" ? _ : constant(+_), pie) : value;
	  };
	
	  pie.sortValues = function(_) {
	    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
	  };
	
	  pie.sort = function(_) {
	    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
	  };
	
	  pie.startAngle = function(_) {
	    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), pie) : startAngle;
	  };
	
	  pie.endAngle = function(_) {
	    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), pie) : endAngle;
	  };
	
	  pie.padAngle = function(_) {
	    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), pie) : padAngle;
	  };
	
	  return pie;
	}
	
	var curveRadialLinear = curveRadial(curveLinear);
	
	function Radial(curve) {
	  this._curve = curve;
	}
	
	Radial.prototype = {
	  areaStart: function() {
	    this._curve.areaStart();
	  },
	  areaEnd: function() {
	    this._curve.areaEnd();
	  },
	  lineStart: function() {
	    this._curve.lineStart();
	  },
	  lineEnd: function() {
	    this._curve.lineEnd();
	  },
	  point: function(a, r) {
	    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
	  }
	};
	
	function curveRadial(curve) {
	
	  function radial(context) {
	    return new Radial(curve(context));
	  }
	
	  radial._curve = curve;
	
	  return radial;
	}
	
	function radialLine(l) {
	  var c = l.curve;
	
	  l.angle = l.x, delete l.x;
	  l.radius = l.y, delete l.y;
	
	  l.curve = function(_) {
	    return arguments.length ? c(curveRadial(_)) : c()._curve;
	  };
	
	  return l;
	}
	
	function radialLine$1() {
	  return radialLine(line().curve(curveRadialLinear));
	}
	
	function radialArea() {
	  var a = area().curve(curveRadialLinear),
	      c = a.curve,
	      x0 = a.lineX0,
	      x1 = a.lineX1,
	      y0 = a.lineY0,
	      y1 = a.lineY1;
	
	  a.angle = a.x, delete a.x;
	  a.startAngle = a.x0, delete a.x0;
	  a.endAngle = a.x1, delete a.x1;
	  a.radius = a.y, delete a.y;
	  a.innerRadius = a.y0, delete a.y0;
	  a.outerRadius = a.y1, delete a.y1;
	  a.lineStartAngle = function() { return radialLine(x0()); }, delete a.lineX0;
	  a.lineEndAngle = function() { return radialLine(x1()); }, delete a.lineX1;
	  a.lineInnerRadius = function() { return radialLine(y0()); }, delete a.lineY0;
	  a.lineOuterRadius = function() { return radialLine(y1()); }, delete a.lineY1;
	
	  a.curve = function(_) {
	    return arguments.length ? c(curveRadial(_)) : c()._curve;
	  };
	
	  return a;
	}
	
	var circle = {
	  draw: function(context, size) {
	    var r = Math.sqrt(size / pi);
	    context.moveTo(r, 0);
	    context.arc(0, 0, r, 0, tau);
	  }
	};
	
	var cross = {
	  draw: function(context, size) {
	    var r = Math.sqrt(size / 5) / 2;
	    context.moveTo(-3 * r, -r);
	    context.lineTo(-r, -r);
	    context.lineTo(-r, -3 * r);
	    context.lineTo(r, -3 * r);
	    context.lineTo(r, -r);
	    context.lineTo(3 * r, -r);
	    context.lineTo(3 * r, r);
	    context.lineTo(r, r);
	    context.lineTo(r, 3 * r);
	    context.lineTo(-r, 3 * r);
	    context.lineTo(-r, r);
	    context.lineTo(-3 * r, r);
	    context.closePath();
	  }
	};
	
	var tan30 = Math.sqrt(1 / 3);
	var tan30_2 = tan30 * 2;
	var diamond = {
	  draw: function(context, size) {
	    var y = Math.sqrt(size / tan30_2),
	        x = y * tan30;
	    context.moveTo(0, -y);
	    context.lineTo(x, 0);
	    context.lineTo(0, y);
	    context.lineTo(-x, 0);
	    context.closePath();
	  }
	};
	
	var ka = 0.89081309152928522810;
	var kr = Math.sin(pi / 10) / Math.sin(7 * pi / 10);
	var kx = Math.sin(tau / 10) * kr;
	var ky = -Math.cos(tau / 10) * kr;
	var star = {
	  draw: function(context, size) {
	    var r = Math.sqrt(size * ka),
	        x = kx * r,
	        y = ky * r;
	    context.moveTo(0, -r);
	    context.lineTo(x, y);
	    for (var i = 1; i < 5; ++i) {
	      var a = tau * i / 5,
	          c = Math.cos(a),
	          s = Math.sin(a);
	      context.lineTo(s * r, -c * r);
	      context.lineTo(c * x - s * y, s * x + c * y);
	    }
	    context.closePath();
	  }
	};
	
	var square = {
	  draw: function(context, size) {
	    var w = Math.sqrt(size),
	        x = -w / 2;
	    context.rect(x, x, w, w);
	  }
	};
	
	var sqrt3 = Math.sqrt(3);
	
	var triangle = {
	  draw: function(context, size) {
	    var y = -Math.sqrt(size / (sqrt3 * 3));
	    context.moveTo(0, y * 2);
	    context.lineTo(-sqrt3 * y, -y);
	    context.lineTo(sqrt3 * y, -y);
	    context.closePath();
	  }
	};
	
	var c = -0.5;
	var s = Math.sqrt(3) / 2;
	var k = 1 / Math.sqrt(12);
	var a = (k / 2 + 1) * 3;
	var wye = {
	  draw: function(context, size) {
	    var r = Math.sqrt(size / a),
	        x0 = r / 2,
	        y0 = r * k,
	        x1 = x0,
	        y1 = r * k + r,
	        x2 = -x1,
	        y2 = y1;
	    context.moveTo(x0, y0);
	    context.lineTo(x1, y1);
	    context.lineTo(x2, y2);
	    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
	    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
	    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
	    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
	    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
	    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
	    context.closePath();
	  }
	};
	
	var symbols = [
	  circle,
	  cross,
	  diamond,
	  square,
	  star,
	  triangle,
	  wye
	];
	
	function symbol() {
	  var type = constant(circle),
	      size = constant(64),
	      context = null;
	
	  function symbol() {
	    var buffer;
	    if (!context) context = buffer = d3Path.path();
	    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
	    if (buffer) return context = null, buffer + "" || null;
	  }
	
	  symbol.type = function(_) {
	    return arguments.length ? (type = typeof _ === "function" ? _ : constant(_), symbol) : type;
	  };
	
	  symbol.size = function(_) {
	    return arguments.length ? (size = typeof _ === "function" ? _ : constant(+_), symbol) : size;
	  };
	
	  symbol.context = function(_) {
	    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
	  };
	
	  return symbol;
	}
	
	function noop() {}
	
	function point(that, x, y) {
	  that._context.bezierCurveTo(
	    (2 * that._x0 + that._x1) / 3,
	    (2 * that._y0 + that._y1) / 3,
	    (that._x0 + 2 * that._x1) / 3,
	    (that._y0 + 2 * that._y1) / 3,
	    (that._x0 + 4 * that._x1 + x) / 6,
	    (that._y0 + 4 * that._y1 + y) / 6
	  );
	}
	
	function Basis(context) {
	  this._context = context;
	}
	
	Basis.prototype = {
	  areaStart: function() {
	    this._line = 0;
	  },
	  areaEnd: function() {
	    this._line = NaN;
	  },
	  lineStart: function() {
	    this._x0 = this._x1 =
	    this._y0 = this._y1 = NaN;
	    this._point = 0;
	  },
	  lineEnd: function() {
	    switch (this._point) {
	      case 3: point(this, this._x1, this._y1); // proceed
	      case 2: this._context.lineTo(this._x1, this._y1); break;
	    }
	    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	    this._line = 1 - this._line;
	  },
	  point: function(x, y) {
	    x = +x, y = +y;
	    switch (this._point) {
	      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	      case 1: this._point = 2; break;
	      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
	      default: point(this, x, y); break;
	    }
	    this._x0 = this._x1, this._x1 = x;
	    this._y0 = this._y1, this._y1 = y;
	  }
	};
	
	function basis(context) {
	  return new Basis(context);
	}
	
	function BasisClosed(context) {
	  this._context = context;
	}
	
	BasisClosed.prototype = {
	  areaStart: noop,
	  areaEnd: noop,
	  lineStart: function() {
	    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
	    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
	    this._point = 0;
	  },
	  lineEnd: function() {
	    switch (this._point) {
	      case 1: {
	        this._context.moveTo(this._x2, this._y2);
	        this._context.closePath();
	        break;
	      }
	      case 2: {
	        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
	        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
	        this._context.closePath();
	        break;
	      }
	      case 3: {
	        this.point(this._x2, this._y2);
	        this.point(this._x3, this._y3);
	        this.point(this._x4, this._y4);
	        break;
	      }
	    }
	  },
	  point: function(x, y) {
	    x = +x, y = +y;
	    switch (this._point) {
	      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
	      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
	      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
	      default: point(this, x, y); break;
	    }
	    this._x0 = this._x1, this._x1 = x;
	    this._y0 = this._y1, this._y1 = y;
	  }
	};
	
	function basisClosed(context) {
	  return new BasisClosed(context);
	}
	
	function BasisOpen(context) {
	  this._context = context;
	}
	
	BasisOpen.prototype = {
	  areaStart: function() {
	    this._line = 0;
	  },
	  areaEnd: function() {
	    this._line = NaN;
	  },
	  lineStart: function() {
	    this._x0 = this._x1 =
	    this._y0 = this._y1 = NaN;
	    this._point = 0;
	  },
	  lineEnd: function() {
	    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
	    this._line = 1 - this._line;
	  },
	  point: function(x, y) {
	    x = +x, y = +y;
	    switch (this._point) {
	      case 0: this._point = 1; break;
	      case 1: this._point = 2; break;
	      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
	      case 3: this._point = 4; // proceed
	      default: point(this, x, y); break;
	    }
	    this._x0 = this._x1, this._x1 = x;
	    this._y0 = this._y1, this._y1 = y;
	  }
	};
	
	function basisOpen(context) {
	  return new BasisOpen(context);
	}
	
	function Bundle(context, beta) {
	  this._basis = new Basis(context);
	  this._beta = beta;
	}
	
	Bundle.prototype = {
	  lineStart: function() {
	    this._x = [];
	    this._y = [];
	    this._basis.lineStart();
	  },
	  lineEnd: function() {
	    var x = this._x,
	        y = this._y,
	        j = x.length - 1;
	
	    if (j > 0) {
	      var x0 = x[0],
	          y0 = y[0],
	          dx = x[j] - x0,
	          dy = y[j] - y0,
	          i = -1,
	          t;
	
	      while (++i <= j) {
	        t = i / j;
	        this._basis.point(
	          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
	          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
	        );
	      }
	    }
	
	    this._x = this._y = null;
	    this._basis.lineEnd();
	  },
	  point: function(x, y) {
	    this._x.push(+x);
	    this._y.push(+y);
	  }
	};
	
	var bundle = (function custom(beta) {
	
	  function bundle(context) {
	    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
	  }
	
	  bundle.beta = function(beta) {
	    return custom(+beta);
	  };
	
	  return bundle;
	})(0.85);
	
	function point$1(that, x, y) {
	  that._context.bezierCurveTo(
	    that._x1 + that._k * (that._x2 - that._x0),
	    that._y1 + that._k * (that._y2 - that._y0),
	    that._x2 + that._k * (that._x1 - x),
	    that._y2 + that._k * (that._y1 - y),
	    that._x2,
	    that._y2
	  );
	}
	
	function Cardinal(context, tension) {
	  this._context = context;
	  this._k = (1 - tension) / 6;
	}
	
	Cardinal.prototype = {
	  areaStart: function() {
	    this._line = 0;
	  },
	  areaEnd: function() {
	    this._line = NaN;
	  },
	  lineStart: function() {
	    this._x0 = this._x1 = this._x2 =
	    this._y0 = this._y1 = this._y2 = NaN;
	    this._point = 0;
	  },
	  lineEnd: function() {
	    switch (this._point) {
	      case 2: this._context.lineTo(this._x2, this._y2); break;
	      case 3: point$1(this, this._x1, this._y1); break;
	    }
	    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	    this._line = 1 - this._line;
	  },
	  point: function(x, y) {
	    x = +x, y = +y;
	    switch (this._point) {
	      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
	      case 2: this._point = 3; // proceed
	      default: point$1(this, x, y); break;
	    }
	    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	  }
	};
	
	var cardinal = (function custom(tension) {
	
	  function cardinal(context) {
	    return new Cardinal(context, tension);
	  }
	
	  cardinal.tension = function(tension) {
	    return custom(+tension);
	  };
	
	  return cardinal;
	})(0);
	
	function CardinalClosed(context, tension) {
	  this._context = context;
	  this._k = (1 - tension) / 6;
	}
	
	CardinalClosed.prototype = {
	  areaStart: noop,
	  areaEnd: noop,
	  lineStart: function() {
	    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
	    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
	    this._point = 0;
	  },
	  lineEnd: function() {
	    switch (this._point) {
	      case 1: {
	        this._context.moveTo(this._x3, this._y3);
	        this._context.closePath();
	        break;
	      }
	      case 2: {
	        this._context.lineTo(this._x3, this._y3);
	        this._context.closePath();
	        break;
	      }
	      case 3: {
	        this.point(this._x3, this._y3);
	        this.point(this._x4, this._y4);
	        this.point(this._x5, this._y5);
	        break;
	      }
	    }
	  },
	  point: function(x, y) {
	    x = +x, y = +y;
	    switch (this._point) {
	      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
	      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
	      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
	      default: point$1(this, x, y); break;
	    }
	    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	  }
	};
	
	var cardinalClosed = (function custom(tension) {
	
	  function cardinal(context) {
	    return new CardinalClosed(context, tension);
	  }
	
	  cardinal.tension = function(tension) {
	    return custom(+tension);
	  };
	
	  return cardinal;
	})(0);
	
	function CardinalOpen(context, tension) {
	  this._context = context;
	  this._k = (1 - tension) / 6;
	}
	
	CardinalOpen.prototype = {
	  areaStart: function() {
	    this._line = 0;
	  },
	  areaEnd: function() {
	    this._line = NaN;
	  },
	  lineStart: function() {
	    this._x0 = this._x1 = this._x2 =
	    this._y0 = this._y1 = this._y2 = NaN;
	    this._point = 0;
	  },
	  lineEnd: function() {
	    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
	    this._line = 1 - this._line;
	  },
	  point: function(x, y) {
	    x = +x, y = +y;
	    switch (this._point) {
	      case 0: this._point = 1; break;
	      case 1: this._point = 2; break;
	      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
	      case 3: this._point = 4; // proceed
	      default: point$1(this, x, y); break;
	    }
	    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	  }
	};
	
	var cardinalOpen = (function custom(tension) {
	
	  function cardinal(context) {
	    return new CardinalOpen(context, tension);
	  }
	
	  cardinal.tension = function(tension) {
	    return custom(+tension);
	  };
	
	  return cardinal;
	})(0);
	
	function point$2(that, x, y) {
	  var x1 = that._x1,
	      y1 = that._y1,
	      x2 = that._x2,
	      y2 = that._y2;
	
	  if (that._l01_a > epsilon) {
	    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
	        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
	    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
	    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
	  }
	
	  if (that._l23_a > epsilon) {
	    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
	        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
	    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
	    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
	  }
	
	  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
	}
	
	function CatmullRom(context, alpha) {
	  this._context = context;
	  this._alpha = alpha;
	}
	
	CatmullRom.prototype = {
	  areaStart: function() {
	    this._line = 0;
	  },
	  areaEnd: function() {
	    this._line = NaN;
	  },
	  lineStart: function() {
	    this._x0 = this._x1 = this._x2 =
	    this._y0 = this._y1 = this._y2 = NaN;
	    this._l01_a = this._l12_a = this._l23_a =
	    this._l01_2a = this._l12_2a = this._l23_2a =
	    this._point = 0;
	  },
	  lineEnd: function() {
	    switch (this._point) {
	      case 2: this._context.lineTo(this._x2, this._y2); break;
	      case 3: this.point(this._x2, this._y2); break;
	    }
	    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	    this._line = 1 - this._line;
	  },
	  point: function(x, y) {
	    x = +x, y = +y;
	
	    if (this._point) {
	      var x23 = this._x2 - x,
	          y23 = this._y2 - y;
	      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
	    }
	
	    switch (this._point) {
	      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	      case 1: this._point = 2; break;
	      case 2: this._point = 3; // proceed
	      default: point$2(this, x, y); break;
	    }
	
	    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
	    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
	    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	  }
	};
	
	var catmullRom = (function custom(alpha) {
	
	  function catmullRom(context) {
	    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
	  }
	
	  catmullRom.alpha = function(alpha) {
	    return custom(+alpha);
	  };
	
	  return catmullRom;
	})(0.5);
	
	function CatmullRomClosed(context, alpha) {
	  this._context = context;
	  this._alpha = alpha;
	}
	
	CatmullRomClosed.prototype = {
	  areaStart: noop,
	  areaEnd: noop,
	  lineStart: function() {
	    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
	    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
	    this._l01_a = this._l12_a = this._l23_a =
	    this._l01_2a = this._l12_2a = this._l23_2a =
	    this._point = 0;
	  },
	  lineEnd: function() {
	    switch (this._point) {
	      case 1: {
	        this._context.moveTo(this._x3, this._y3);
	        this._context.closePath();
	        break;
	      }
	      case 2: {
	        this._context.lineTo(this._x3, this._y3);
	        this._context.closePath();
	        break;
	      }
	      case 3: {
	        this.point(this._x3, this._y3);
	        this.point(this._x4, this._y4);
	        this.point(this._x5, this._y5);
	        break;
	      }
	    }
	  },
	  point: function(x, y) {
	    x = +x, y = +y;
	
	    if (this._point) {
	      var x23 = this._x2 - x,
	          y23 = this._y2 - y;
	      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
	    }
	
	    switch (this._point) {
	      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
	      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
	      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
	      default: point$2(this, x, y); break;
	    }
	
	    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
	    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
	    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	  }
	};
	
	var catmullRomClosed = (function custom(alpha) {
	
	  function catmullRom(context) {
	    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
	  }
	
	  catmullRom.alpha = function(alpha) {
	    return custom(+alpha);
	  };
	
	  return catmullRom;
	})(0.5);
	
	function CatmullRomOpen(context, alpha) {
	  this._context = context;
	  this._alpha = alpha;
	}
	
	CatmullRomOpen.prototype = {
	  areaStart: function() {
	    this._line = 0;
	  },
	  areaEnd: function() {
	    this._line = NaN;
	  },
	  lineStart: function() {
	    this._x0 = this._x1 = this._x2 =
	    this._y0 = this._y1 = this._y2 = NaN;
	    this._l01_a = this._l12_a = this._l23_a =
	    this._l01_2a = this._l12_2a = this._l23_2a =
	    this._point = 0;
	  },
	  lineEnd: function() {
	    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
	    this._line = 1 - this._line;
	  },
	  point: function(x, y) {
	    x = +x, y = +y;
	
	    if (this._point) {
	      var x23 = this._x2 - x,
	          y23 = this._y2 - y;
	      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
	    }
	
	    switch (this._point) {
	      case 0: this._point = 1; break;
	      case 1: this._point = 2; break;
	      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
	      case 3: this._point = 4; // proceed
	      default: point$2(this, x, y); break;
	    }
	
	    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
	    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
	    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	  }
	};
	
	var catmullRomOpen = (function custom(alpha) {
	
	  function catmullRom(context) {
	    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
	  }
	
	  catmullRom.alpha = function(alpha) {
	    return custom(+alpha);
	  };
	
	  return catmullRom;
	})(0.5);
	
	function LinearClosed(context) {
	  this._context = context;
	}
	
	LinearClosed.prototype = {
	  areaStart: noop,
	  areaEnd: noop,
	  lineStart: function() {
	    this._point = 0;
	  },
	  lineEnd: function() {
	    if (this._point) this._context.closePath();
	  },
	  point: function(x, y) {
	    x = +x, y = +y;
	    if (this._point) this._context.lineTo(x, y);
	    else this._point = 1, this._context.moveTo(x, y);
	  }
	};
	
	function linearClosed(context) {
	  return new LinearClosed(context);
	}
	
	function sign(x) {
	  return x < 0 ? -1 : 1;
	}
	
	// Calculate the slopes of the tangents (Hermite-type interpolation) based on
	// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
	// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
	// NOV(II), P. 443, 1990.
	function slope3(that, x2, y2) {
	  var h0 = that._x1 - that._x0,
	      h1 = x2 - that._x1,
	      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
	      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
	      p = (s0 * h1 + s1 * h0) / (h0 + h1);
	  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
	}
	
	// Calculate a one-sided slope.
	function slope2(that, t) {
	  var h = that._x1 - that._x0;
	  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
	}
	
	// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
	// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
	// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
	function point$3(that, t0, t1) {
	  var x0 = that._x0,
	      y0 = that._y0,
	      x1 = that._x1,
	      y1 = that._y1,
	      dx = (x1 - x0) / 3;
	  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
	}
	
	function MonotoneX(context) {
	  this._context = context;
	}
	
	MonotoneX.prototype = {
	  areaStart: function() {
	    this._line = 0;
	  },
	  areaEnd: function() {
	    this._line = NaN;
	  },
	  lineStart: function() {
	    this._x0 = this._x1 =
	    this._y0 = this._y1 =
	    this._t0 = NaN;
	    this._point = 0;
	  },
	  lineEnd: function() {
	    switch (this._point) {
	      case 2: this._context.lineTo(this._x1, this._y1); break;
	      case 3: point$3(this, this._t0, slope2(this, this._t0)); break;
	    }
	    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	    this._line = 1 - this._line;
	  },
	  point: function(x, y) {
	    var t1 = NaN;
	
	    x = +x, y = +y;
	    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
	    switch (this._point) {
	      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	      case 1: this._point = 2; break;
	      case 2: this._point = 3; point$3(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
	      default: point$3(this, this._t0, t1 = slope3(this, x, y)); break;
	    }
	
	    this._x0 = this._x1, this._x1 = x;
	    this._y0 = this._y1, this._y1 = y;
	    this._t0 = t1;
	  }
	}
	
	function MonotoneY(context) {
	  this._context = new ReflectContext(context);
	}
	
	(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
	  MonotoneX.prototype.point.call(this, y, x);
	};
	
	function ReflectContext(context) {
	  this._context = context;
	}
	
	ReflectContext.prototype = {
	  moveTo: function(x, y) { this._context.moveTo(y, x); },
	  closePath: function() { this._context.closePath(); },
	  lineTo: function(x, y) { this._context.lineTo(y, x); },
	  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
	};
	
	function monotoneX(context) {
	  return new MonotoneX(context);
	}
	
	function monotoneY(context) {
	  return new MonotoneY(context);
	}
	
	function Natural(context) {
	  this._context = context;
	}
	
	Natural.prototype = {
	  areaStart: function() {
	    this._line = 0;
	  },
	  areaEnd: function() {
	    this._line = NaN;
	  },
	  lineStart: function() {
	    this._x = [];
	    this._y = [];
	  },
	  lineEnd: function() {
	    var x = this._x,
	        y = this._y,
	        n = x.length;
	
	    if (n) {
	      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
	      if (n === 2) {
	        this._context.lineTo(x[1], y[1]);
	      } else {
	        var px = controlPoints(x),
	            py = controlPoints(y);
	        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
	          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
	        }
	      }
	    }
	
	    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
	    this._line = 1 - this._line;
	    this._x = this._y = null;
	  },
	  point: function(x, y) {
	    this._x.push(+x);
	    this._y.push(+y);
	  }
	};
	
	// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
	function controlPoints(x) {
	  var i,
	      n = x.length - 1,
	      m,
	      a = new Array(n),
	      b = new Array(n),
	      r = new Array(n);
	  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
	  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
	  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
	  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
	  a[n - 1] = r[n - 1] / b[n - 1];
	  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
	  b[n - 1] = (x[n] + a[n - 1]) / 2;
	  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
	  return [a, b];
	}
	
	function natural(context) {
	  return new Natural(context);
	}
	
	function Step(context, t) {
	  this._context = context;
	  this._t = t;
	}
	
	Step.prototype = {
	  areaStart: function() {
	    this._line = 0;
	  },
	  areaEnd: function() {
	    this._line = NaN;
	  },
	  lineStart: function() {
	    this._x = this._y = NaN;
	    this._point = 0;
	  },
	  lineEnd: function() {
	    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
	    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
	  },
	  point: function(x, y) {
	    x = +x, y = +y;
	    switch (this._point) {
	      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	      case 1: this._point = 2; // proceed
	      default: {
	        if (this._t <= 0) {
	          this._context.lineTo(this._x, y);
	          this._context.lineTo(x, y);
	        } else {
	          var x1 = this._x * (1 - this._t) + x * this._t;
	          this._context.lineTo(x1, this._y);
	          this._context.lineTo(x1, y);
	        }
	        break;
	      }
	    }
	    this._x = x, this._y = y;
	  }
	};
	
	function step(context) {
	  return new Step(context, 0.5);
	}
	
	function stepBefore(context) {
	  return new Step(context, 0);
	}
	
	function stepAfter(context) {
	  return new Step(context, 1);
	}
	
	var slice = Array.prototype.slice;
	
	function none(series, order) {
	  if (!((n = series.length) > 1)) return;
	  for (var i = 1, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
	    s0 = s1, s1 = series[order[i]];
	    for (var j = 0; j < m; ++j) {
	      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
	    }
	  }
	}
	
	function none$1(series) {
	  var n = series.length, o = new Array(n);
	  while (--n >= 0) o[n] = n;
	  return o;
	}
	
	function stackValue(d, key) {
	  return d[key];
	}
	
	function stack() {
	  var keys = constant([]),
	      order = none$1,
	      offset = none,
	      value = stackValue;
	
	  function stack(data) {
	    var kz = keys.apply(this, arguments),
	        i,
	        m = data.length,
	        n = kz.length,
	        sz = new Array(n),
	        oz;
	
	    for (i = 0; i < n; ++i) {
	      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
	        si[j] = sij = [0, +value(data[j], ki, j, data)];
	        sij.data = data[j];
	      }
	      si.key = ki;
	    }
	
	    for (i = 0, oz = order(sz); i < n; ++i) {
	      sz[oz[i]].index = i;
	    }
	
	    offset(sz, oz);
	    return sz;
	  }
	
	  stack.keys = function(_) {
	    return arguments.length ? (keys = typeof _ === "function" ? _ : constant(slice.call(_)), stack) : keys;
	  };
	
	  stack.value = function(_) {
	    return arguments.length ? (value = typeof _ === "function" ? _ : constant(+_), stack) : value;
	  };
	
	  stack.order = function(_) {
	    return arguments.length ? (order = _ == null ? none$1 : typeof _ === "function" ? _ : constant(slice.call(_)), stack) : order;
	  };
	
	  stack.offset = function(_) {
	    return arguments.length ? (offset = _ == null ? none : _, stack) : offset;
	  };
	
	  return stack;
	}
	
	function expand(series, order) {
	  if (!((n = series.length) > 0)) return;
	  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
	    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
	    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
	  }
	  none(series, order);
	}
	
	function silhouette(series, order) {
	  if (!((n = series.length) > 0)) return;
	  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
	    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
	    s0[j][1] += s0[j][0] = -y / 2;
	  }
	  none(series, order);
	}
	
	function wiggle(series, order) {
	  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
	  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
	    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
	      var si = series[order[i]],
	          sij0 = si[j][1] || 0,
	          sij1 = si[j - 1][1] || 0,
	          s3 = (sij0 - sij1) / 2;
	      for (var k = 0; k < i; ++k) {
	        var sk = series[order[k]],
	            skj0 = sk[j][1] || 0,
	            skj1 = sk[j - 1][1] || 0;
	        s3 += skj0 - skj1;
	      }
	      s1 += sij0, s2 += s3 * sij0;
	    }
	    s0[j - 1][1] += s0[j - 1][0] = y;
	    if (s1) y -= s2 / s1;
	  }
	  s0[j - 1][1] += s0[j - 1][0] = y;
	  none(series, order);
	}
	
	function ascending(series) {
	  var sums = series.map(sum);
	  return none$1(series).sort(function(a, b) { return sums[a] - sums[b]; });
	}
	
	function sum(series) {
	  var s = 0, i = -1, n = series.length, v;
	  while (++i < n) if (v = +series[i][1]) s += v;
	  return s;
	}
	
	function descending$1(series) {
	  return ascending(series).reverse();
	}
	
	function insideOut(series) {
	  var n = series.length,
	      i,
	      j,
	      sums = series.map(sum),
	      order = none$1(series).sort(function(a, b) { return sums[b] - sums[a]; }),
	      top = 0,
	      bottom = 0,
	      tops = [],
	      bottoms = [];
	
	  for (i = 0; i < n; ++i) {
	    j = order[i];
	    if (top < bottom) {
	      top += sums[j];
	      tops.push(j);
	    } else {
	      bottom += sums[j];
	      bottoms.push(j);
	    }
	  }
	
	  return bottoms.reverse().concat(tops);
	}
	
	function reverse(series) {
	  return none$1(series).reverse();
	}
	
	exports.arc = arc;
	exports.area = area;
	exports.line = line;
	exports.pie = pie;
	exports.radialArea = radialArea;
	exports.radialLine = radialLine$1;
	exports.symbol = symbol;
	exports.symbols = symbols;
	exports.symbolCircle = circle;
	exports.symbolCross = cross;
	exports.symbolDiamond = diamond;
	exports.symbolSquare = square;
	exports.symbolStar = star;
	exports.symbolTriangle = triangle;
	exports.symbolWye = wye;
	exports.curveBasisClosed = basisClosed;
	exports.curveBasisOpen = basisOpen;
	exports.curveBasis = basis;
	exports.curveBundle = bundle;
	exports.curveCardinalClosed = cardinalClosed;
	exports.curveCardinalOpen = cardinalOpen;
	exports.curveCardinal = cardinal;
	exports.curveCatmullRomClosed = catmullRomClosed;
	exports.curveCatmullRomOpen = catmullRomOpen;
	exports.curveCatmullRom = catmullRom;
	exports.curveLinearClosed = linearClosed;
	exports.curveLinear = curveLinear;
	exports.curveMonotoneX = monotoneX;
	exports.curveMonotoneY = monotoneY;
	exports.curveNatural = natural;
	exports.curveStep = step;
	exports.curveStepAfter = stepAfter;
	exports.curveStepBefore = stepBefore;
	exports.stack = stack;
	exports.stackOffsetExpand = expand;
	exports.stackOffsetNone = none;
	exports.stackOffsetSilhouette = silhouette;
	exports.stackOffsetWiggle = wiggle;
	exports.stackOrderAscending = ascending;
	exports.stackOrderDescending = descending$1;
	exports.stackOrderInsideOut = insideOut;
	exports.stackOrderNone = none$1;
	exports.stackOrderReverse = reverse;
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	})));

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	// https://d3js.org/d3-path/ Version 1.0.2. Copyright 2016 Mike Bostock.
	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3 = global.d3 || {})));
	}(this, (function (exports) { 'use strict';
	
	var pi = Math.PI;
	var tau = 2 * pi;
	var epsilon = 1e-6;
	var tauEpsilon = tau - epsilon;
	
	function Path() {
	  this._x0 = this._y0 = // start of current subpath
	  this._x1 = this._y1 = null; // end of current subpath
	  this._ = [];
	}
	
	function path() {
	  return new Path;
	}
	
	Path.prototype = path.prototype = {
	  constructor: Path,
	  moveTo: function(x, y) {
	    this._.push("M", this._x0 = this._x1 = +x, ",", this._y0 = this._y1 = +y);
	  },
	  closePath: function() {
	    if (this._x1 !== null) {
	      this._x1 = this._x0, this._y1 = this._y0;
	      this._.push("Z");
	    }
	  },
	  lineTo: function(x, y) {
	    this._.push("L", this._x1 = +x, ",", this._y1 = +y);
	  },
	  quadraticCurveTo: function(x1, y1, x, y) {
	    this._.push("Q", +x1, ",", +y1, ",", this._x1 = +x, ",", this._y1 = +y);
	  },
	  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
	    this._.push("C", +x1, ",", +y1, ",", +x2, ",", +y2, ",", this._x1 = +x, ",", this._y1 = +y);
	  },
	  arcTo: function(x1, y1, x2, y2, r) {
	    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
	    var x0 = this._x1,
	        y0 = this._y1,
	        x21 = x2 - x1,
	        y21 = y2 - y1,
	        x01 = x0 - x1,
	        y01 = y0 - y1,
	        l01_2 = x01 * x01 + y01 * y01;
	
	    // Is the radius negative? Error.
	    if (r < 0) throw new Error("negative radius: " + r);
	
	    // Is this path empty? Move to (x1,y1).
	    if (this._x1 === null) {
	      this._.push(
	        "M", this._x1 = x1, ",", this._y1 = y1
	      );
	    }
	
	    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
	    else if (!(l01_2 > epsilon)) {}
	
	    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
	    // Equivalently, is (x1,y1) coincident with (x2,y2)?
	    // Or, is the radius zero? Line to (x1,y1).
	    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
	      this._.push(
	        "L", this._x1 = x1, ",", this._y1 = y1
	      );
	    }
	
	    // Otherwise, draw an arc!
	    else {
	      var x20 = x2 - x0,
	          y20 = y2 - y0,
	          l21_2 = x21 * x21 + y21 * y21,
	          l20_2 = x20 * x20 + y20 * y20,
	          l21 = Math.sqrt(l21_2),
	          l01 = Math.sqrt(l01_2),
	          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
	          t01 = l / l01,
	          t21 = l / l21;
	
	      // If the start tangent is not coincident with (x0,y0), line to.
	      if (Math.abs(t01 - 1) > epsilon) {
	        this._.push(
	          "L", x1 + t01 * x01, ",", y1 + t01 * y01
	        );
	      }
	
	      this._.push(
	        "A", r, ",", r, ",0,0,", +(y01 * x20 > x01 * y20), ",", this._x1 = x1 + t21 * x21, ",", this._y1 = y1 + t21 * y21
	      );
	    }
	  },
	  arc: function(x, y, r, a0, a1, ccw) {
	    x = +x, y = +y, r = +r;
	    var dx = r * Math.cos(a0),
	        dy = r * Math.sin(a0),
	        x0 = x + dx,
	        y0 = y + dy,
	        cw = 1 ^ ccw,
	        da = ccw ? a0 - a1 : a1 - a0;
	
	    // Is the radius negative? Error.
	    if (r < 0) throw new Error("negative radius: " + r);
	
	    // Is this path empty? Move to (x0,y0).
	    if (this._x1 === null) {
	      this._.push(
	        "M", x0, ",", y0
	      );
	    }
	
	    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
	    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
	      this._.push(
	        "L", x0, ",", y0
	      );
	    }
	
	    // Is this arc empty? We’re done.
	    if (!r) return;
	
	    // Is this a complete circle? Draw two arcs to complete the circle.
	    if (da > tauEpsilon) {
	      this._.push(
	        "A", r, ",", r, ",0,1,", cw, ",", x - dx, ",", y - dy,
	        "A", r, ",", r, ",0,1,", cw, ",", this._x1 = x0, ",", this._y1 = y0
	      );
	    }
	
	    // Otherwise, draw an arc!
	    else {
	      if (da < 0) da = da % tau + tau;
	      this._.push(
	        "A", r, ",", r, ",0,", +(da >= pi), ",", cw, ",", this._x1 = x + r * Math.cos(a1), ",", this._y1 = y + r * Math.sin(a1)
	      );
	    }
	  },
	  rect: function(x, y, w, h) {
	    this._.push("M", this._x0 = this._x1 = +x, ",", this._y0 = this._y1 = +y, "h", +w, "v", +h, "h", -w, "Z");
	  },
	  toString: function() {
	    return this._.join("");
	  }
	};
	
	exports.path = path;
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	})));

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _assign2=__webpack_require__(80);var _assign3=_interopRequireDefault(_assign2);var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
	
	
	Bar=function(_React$Component){_inherits(Bar,_React$Component);function Bar(){_classCallCheck(this,Bar);return _possibleConstructorReturn(this,(Bar.__proto__||Object.getPrototypeOf(Bar)).apply(this,arguments));}_createClass(Bar,[{key:"getVerticalBarPath",value:function getVerticalBarPath(
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	props,width){var
	x=props.x;var y0=props.y0;var y=props.y;
	var size=width/2;
	return"M "+(x-size)+", "+y0+"\n      L "+(
	x-size)+", "+y+"\n      L "+(
	x+size)+", "+y+"\n      L "+(
	x+size)+", "+y0+"\n      L "+(
	x-size)+", "+y0;
	}},{key:"getHorizontalBarPath",value:function getHorizontalBarPath(
	
	props,width){var
	x=props.x;var y0=props.y0;var y=props.y;
	var size=width/2;
	return"M "+y0+", "+(x-size)+"\n      L "+
	y0+", "+(x+size)+"\n      L "+
	y+", "+(x+size)+"\n      L "+
	y+", "+(x-size)+"\n      L "+
	y0+", "+(x-size);
	}},{key:"getBarPath",value:function getBarPath(
	
	props,width){
	return this.props.horizontal?
	this.getHorizontalBarPath(props,width):this.getVerticalBarPath(props,width);
	}},{key:"getBarWidth",value:function getBarWidth(
	
	props){var
	style=props.style;var width=props.width;var data=props.data;
	var padding=props.padding.left||props.padding;
	var defaultWidth=data.length===0?8:(width-2*padding)/data.length;
	return style&&style.width?style.width:defaultWidth;
	}},{key:"renderBar",value:function renderBar(
	
	path,style,events){var _props=
	this.props;var role=_props.role;var shapeRendering=_props.shapeRendering;
	return(
	_react2.default.createElement("path",_extends({
	d:path,
	style:style,
	role:role||"presentation",
	shapeRendering:shapeRendering||"auto"},
	events)));
	
	
	}},{key:"render",value:function render()
	
	{
	
	var barWidth=this.getBarWidth(this.props);
	var path=typeof this.props.x==="number"?
	this.getBarPath(this.props,barWidth):undefined;
	var style=(0,_assign3.default)({fill:"black",stroke:"none"},this.props.style);
	return this.renderBar(path,style,this.props.events);
	}}]);return Bar;}(_react2.default.Component);Bar.propTypes={datum:_react.PropTypes.object,events:_react.PropTypes.object,horizontal:_react.PropTypes.bool,index:_react.PropTypes.number,role:_react.PropTypes.string,scale:_react.PropTypes.object,shapeRendering:_react.PropTypes.string,style:_react.PropTypes.object,x:_react.PropTypes.number,y:_react.PropTypes.number,y0:_react.PropTypes.number,width:_react.PropTypes.number,padding:_react.PropTypes.oneOfType([_react.PropTypes.number,_react.PropTypes.object]),data:_react.PropTypes.array};exports.default=Bar;

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _assign2=__webpack_require__(80);var _assign3=_interopRequireDefault(_assign2);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
	
	
	
	Candle=function(_React$Component){_inherits(Candle,_React$Component);function Candle(){_classCallCheck(this,Candle);return _possibleConstructorReturn(this,(Candle.__proto__||Object.getPrototypeOf(Candle)).apply(this,arguments));}_createClass(Candle,[{key:"renderWick",value:function renderWick(
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	wickProps){
	return _react2.default.createElement("line",wickProps);
	}},{key:"renderCandle",value:function renderCandle(
	
	candleProps){
	return _react2.default.createElement("rect",candleProps);
	}},{key:"getCandleProps",value:function getCandleProps(
	
	props){var
	width=props.width;var candleHeight=props.candleHeight;var x=props.x;var y=props.y;var data=props.data;var events=props.events;var role=props.role;
	var style=(0,_assign3.default)({stroke:"black"},props.style);
	var padding=props.padding.left||props.padding;
	var candleWidth=style.width||0.5*(width-2*padding)/data.length;
	var candleX=x-candleWidth/2;
	var shapeRendering=props.shapeRendering||"auto";
	return(0,_assign3.default)({
	x:candleX,y:y,style:style,role:role,width:candleWidth,height:candleHeight,shapeRendering:shapeRendering},
	events);
	}},{key:"getWickProps",value:function getWickProps(
	
	props){var
	x=props.x;var y1=props.y1;var y2=props.y2;var events=props.events;
	var style=(0,_assign3.default)({stroke:"black"},props.style);
	var shapeRendering=props.shapeRendering||"auto";
	var role=props.role||"presentation";
	return(0,_assign3.default)({x1:x,x2:x,y1:y1,y2:y2,style:style,role:role,shapeRendering:shapeRendering},events);
	}},{key:"render",value:function render()
	
	{
	var candleProps=this.getCandleProps(this.props);
	var wickProps=this.getWickProps(this.props);
	return _react2.default.cloneElement(
	this.props.groupComponent,{},this.renderWick(wickProps),this.renderCandle(candleProps));
	
	}}]);return Candle;}(_react2.default.Component);Candle.propTypes={index:_react2.default.PropTypes.number,x:_react.PropTypes.number,y1:_react.PropTypes.number,y2:_react.PropTypes.number,y:_react.PropTypes.number,events:_react.PropTypes.object,candleHeight:_react.PropTypes.number,shapeRendering:_react.PropTypes.string,scale:_react.PropTypes.object,style:_react.PropTypes.object,datum:_react.PropTypes.object,width:_react.PropTypes.number,padding:_react.PropTypes.oneOfType([_react.PropTypes.number,_react.PropTypes.object]),data:_react.PropTypes.array,groupComponent:_react.PropTypes.element,role:_react.PropTypes.string};exports.default=Candle;

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);
	var _index=__webpack_require__(107);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
	
	
	
	ClipPath=function(_React$Component){_inherits(ClipPath,_React$Component);function ClipPath(){_classCallCheck(this,ClipPath);return _possibleConstructorReturn(this,(ClipPath.__proto__||Object.getPrototypeOf(ClipPath)).apply(this,arguments));}_createClass(ClipPath,[{key:"renderClipPath",value:function renderClipPath(
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	props,id){
	return(
	_react2.default.createElement("defs",null,
	_react2.default.createElement("clipPath",{id:id},
	_react2.default.createElement("rect",props))));
	
	
	
	}},{key:"render",value:function render()
	
	{var _props=
	
	
	
	
	
	
	this.props;var clipId=_props.clipId;var clipWidth=_props.clipWidth;var clipHeight=_props.clipHeight;var translateX=_props.translateX;var clipPadding=_props.clipPadding;
	
	var padding=_index.Helpers.getPadding(this.props);
	
	var totalPadding=function totalPadding(side){return padding[side]-(clipPadding[side]||0);};
	
	var clipProps={
	x:totalPadding("left")+translateX,
	y:totalPadding("top"),
	width:clipWidth-totalPadding("left")-totalPadding("right"),
	height:clipHeight-totalPadding("top")-totalPadding("bottom")};
	
	
	return this.renderClipPath(clipProps,clipId);
	}}]);return ClipPath;}(_react2.default.Component);ClipPath.propTypes={clipId:_react.PropTypes.number,clipPadding:_react.PropTypes.shape({top:_react.PropTypes.number,bottom:_react.PropTypes.number,left:_react.PropTypes.number,right:_react.PropTypes.number}),clipHeight:_index.PropTypes.nonNegative,clipWidth:_index.PropTypes.nonNegative,padding:_react.PropTypes.oneOfType([_react.PropTypes.number,_react.PropTypes.shape({top:_react.PropTypes.number,bottom:_react.PropTypes.number,left:_react.PropTypes.number,right:_react.PropTypes.number})]),translateX:_react.PropTypes.number};ClipPath.defaultProps={translateX:0,clipPadding:{top:5,bottom:5,left:0,right:0}};exports.default=ClipPath;

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _assign2=__webpack_require__(80);var _assign3=_interopRequireDefault(_assign2);var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);
	
	var _d3Shape=__webpack_require__(211);var d3Shape=_interopRequireWildcard(_d3Shape);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
	
	Curve=function(_React$Component){_inherits(Curve,_React$Component);function Curve(){_classCallCheck(this,Curve);return _possibleConstructorReturn(this,(Curve.__proto__||Object.getPrototypeOf(Curve)).apply(this,arguments));}_createClass(Curve,[{key:"toNewName",value:function toNewName(
	
	
	
	
	
	
	
	
	
	
	
	interpolation){
	
	var capitalize=function capitalize(s){return s&&s[0].toUpperCase()+s.slice(1);};
	return"curve"+capitalize(interpolation);
	}},{key:"renderLine",value:function renderLine(
	
	path,style,events){var _props=
	this.props;var role=_props.role;var shapeRendering=_props.shapeRendering;
	return(
	_react2.default.createElement("path",_extends({
	style:style,
	shapeRendering:shapeRendering||"auto",
	d:path,
	role:role||"presentation"},
	events,{
	vectorEffect:"non-scaling-stroke"})));
	
	
	}},{key:"render",value:function render()
	
	{var _props2=
	this.props;var data=_props2.data;var events=_props2.events;var interpolation=_props2.interpolation;var scale=_props2.scale;var style=_props2.style;
	var xScale=scale.x;
	var yScale=scale.y;
	var lineFunction=d3Shape.line().
	curve(d3Shape[this.toNewName(interpolation)]).
	x(function(d){return xScale(d.x1||d.x);}).
	y(function(d){return yScale(d.y1||d.y);});
	var lineStyle=(0,_assign3.default)({fill:"none",stroke:"black"},style);
	return this.renderLine(lineFunction(data),lineStyle,events);
	}}]);return Curve;}(_react2.default.Component);Curve.propTypes={data:_react.PropTypes.array,events:_react.PropTypes.object,index:_react.PropTypes.number,interpolation:_react.PropTypes.string,role:_react.PropTypes.string,scale:_react.PropTypes.object,shapeRendering:_react.PropTypes.string,style:_react.PropTypes.object};exports.default=Curve;

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _assign2=__webpack_require__(80);var _assign3=_interopRequireDefault(_assign2);var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();
	var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
	
	
	ErrorBar=function(_React$Component){_inherits(ErrorBar,_React$Component);
	function ErrorBar(props){_classCallCheck(this,ErrorBar);return _possibleConstructorReturn(this,(ErrorBar.__proto__||Object.getPrototypeOf(ErrorBar)).call(this,
	props));
	}_createClass(ErrorBar,[{key:"renderLine",value:function renderLine(
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	props,style,events){
	return _react2.default.createElement("line",_extends({},props,{style:style},events));
	}},{key:"renderBorder",value:function renderBorder(
	
	props,errors,type){var
	x=props.x;var y=props.y;var borderWidth=props.borderWidth;var events=props.events;var style=props.style;var role=props.role;var shapeRendering=props.shapeRendering;
	var vertical=type==="Right"||type==="Left";
	var error=errors["error"+type];
	var borderProps={
	role:role,shapeRendering:shapeRendering,
	key:"border"+type,
	x1:vertical?error:x-borderWidth,
	x2:vertical?error:x+borderWidth,
	y1:vertical?y-borderWidth:error,
	y2:vertical?y+borderWidth:error};
	
	return this.renderLine(borderProps,style,events);
	}},{key:"renderCross",value:function renderCross(
	
	props,errors,type){var
	x=props.x;var y=props.y;var events=props.events;var style=props.style;var role=props.role;var shapeRendering=props.shapeRendering;
	var vertical=type==="Top"||type==="Bottom";
	var error=errors["error"+type];
	var borderProps={
	role:role,shapeRendering:shapeRendering,
	key:"cross"+type,
	x1:x,
	x2:vertical?x:error,
	y1:y,
	y2:vertical?error:y};
	
	return this.renderLine(borderProps,style,events);
	}},{key:"renderErrorBar",value:function renderErrorBar(
	
	error,props){var
	groupComponent=props.groupComponent;
	return _react2.default.cloneElement(groupComponent,{},
	error.errorRight?this.renderBorder(props,error,"Right"):null,
	error.errorLeft?this.renderBorder(props,error,"Left"):null,
	error.errorBottom?this.renderBorder(props,error,"Bottom"):null,
	error.errorTop?this.renderBorder(props,error,"Top"):null,
	error.errorRight?this.renderCross(props,error,"Right"):null,
	error.errorLeft?this.renderCross(props,error,"Left"):null,
	error.errorBottom?this.renderCross(props,error,"Bottom"):null,
	error.errorTop?this.renderCross(props,error,"Top"):null);
	
	}},{key:"render",value:function render()
	
	{var _props=
	
	
	this.props;var x=_props.x;var y=_props.y;var borderWidth=_props.borderWidth;var groupComponent=_props.groupComponent;var events=_props.events;var errorX=_props.errorX;var errorY=_props.errorY;var scale=_props.scale;var role=_props.role;var shapeRendering=_props.shapeRendering;var style=_props.style;
	var rangeX=void 0;
	var rangeY=void 0;
	var positiveErrorX=void 0;
	var negativeErrorX=void 0;
	var positiveErrorY=void 0;
	var negativeErrorY=void 0;
	var errorTop=void 0;
	var errorBottom=void 0;
	var errorRight=void 0;
	var errorLeft=void 0;
	
	if(errorX){
	rangeX=scale.x.range();
	positiveErrorX=errorX[0];
	negativeErrorX=errorX[1];
	errorRight=positiveErrorX>=rangeX[1]?rangeX[1]:positiveErrorX;
	errorLeft=negativeErrorX<=rangeX[0]?rangeX[0]:negativeErrorX;
	}
	
	if(errorY){
	rangeY=scale.y.range();
	positiveErrorY=errorY[1];
	negativeErrorY=errorY[0];
	errorTop=positiveErrorY>=rangeY[0]?rangeY[0]:positiveErrorY;
	errorBottom=negativeErrorY<=rangeY[1]?rangeY[1]:negativeErrorY;
	}
	var props={
	x:x,y:y,borderWidth:borderWidth,groupComponent:groupComponent,events:events,
	role:role||"presentation",
	shapeRendering:shapeRendering||"auto",
	style:(0,_assign3.default)({stroke:"black"},style)};
	
	return _react2.default.cloneElement(
	this.props.groupComponent,
	{},
	this.renderErrorBar({errorTop:errorTop,errorBottom:errorBottom,errorRight:errorRight,errorLeft:errorLeft},props));
	
	}}]);return ErrorBar;}(_react2.default.Component);ErrorBar.propTypes={index:_react2.default.PropTypes.number,datum:_react.PropTypes.object,data:_react.PropTypes.array,events:_react.PropTypes.object,scale:_react.PropTypes.object,shapeRendering:_react.PropTypes.string,role:_react.PropTypes.string,style:_react.PropTypes.object,x:_react.PropTypes.number,y:_react.PropTypes.number,errorX:_react.PropTypes.oneOfType([_react.PropTypes.number,_react.PropTypes.array,_react.PropTypes.bool]),errorY:_react.PropTypes.oneOfType([_react.PropTypes.number,_react.PropTypes.array,_react.PropTypes.bool]),borderWidth:_react.PropTypes.number,groupComponent:_react.PropTypes.element};ErrorBar.defaultProps={borderWidth:10};exports.default=ErrorBar;

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _assign2=__webpack_require__(80);var _assign3=_interopRequireDefault(_assign2);var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
	
	
	Line=function(_React$Component){_inherits(Line,_React$Component);function Line(){_classCallCheck(this,Line);return _possibleConstructorReturn(this,(Line.__proto__||Object.getPrototypeOf(Line)).apply(this,arguments));}_createClass(Line,[{key:"renderAxisLine",value:function renderAxisLine(
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	props,style,events){var _props=
	this.props;var role=_props.role;var shapeRendering=_props.shapeRendering;
	return(
	_react2.default.createElement("line",_extends({},
	props,{
	style:style,
	role:role,
	shapeRendering:shapeRendering||"auto",
	vectorEffect:"non-scaling-stroke"},
	events)));
	
	
	}},{key:"render",value:function render()
	
	{var _props2=
	this.props;var x1=_props2.x1;var x2=_props2.x2;var y1=_props2.y1;var y2=_props2.y2;var events=_props2.events;
	var style=(0,_assign3.default)({stroke:"black"},this.props.style);
	return this.renderAxisLine({x1:x1,x2:x2,y1:y1,y2:y2},style,events);
	}}]);return Line;}(_react2.default.Component);Line.propTypes={index:_react.PropTypes.number,datum:_react.PropTypes.any,data:_react.PropTypes.array,x1:_react.PropTypes.number,x2:_react.PropTypes.number,y1:_react.PropTypes.number,y2:_react.PropTypes.number,style:_react.PropTypes.object,events:_react.PropTypes.object,role:_react.PropTypes.string,shapeRendering:_react.PropTypes.string};exports.default=Line;

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);
	var _pathHelpers=__webpack_require__(220);var _pathHelpers2=_interopRequireDefault(_pathHelpers);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
	
	Point=function(_React$Component){_inherits(Point,_React$Component);function Point(){_classCallCheck(this,Point);return _possibleConstructorReturn(this,(Point.__proto__||Object.getPrototypeOf(Point)).apply(this,arguments));}_createClass(Point,[{key:"getPath",value:function getPath(
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	props){
	var pathFunctions={
	circle:_pathHelpers2.default.circle,
	square:_pathHelpers2.default.square,
	diamond:_pathHelpers2.default.diamond,
	triangleDown:_pathHelpers2.default.triangleDown,
	triangleUp:_pathHelpers2.default.triangleUp,
	plus:_pathHelpers2.default.plus,
	star:_pathHelpers2.default.star};
	
	return pathFunctions[props.symbol].call(null,props.x,props.y,props.size);
	}},{key:"renderPoint",value:function renderPoint(
	
	path,style,events){var _props=
	this.props;var role=_props.role;var shapeRendering=_props.shapeRendering;
	return(
	_react2.default.createElement("path",_extends({},
	events,{
	d:path,
	role:role||"presentation",
	shapeRendering:shapeRendering||"auto",
	style:style})));
	
	
	}},{key:"render",value:function render()
	
	{
	return this.renderPoint(this.getPath(this.props),this.props.style,this.props.events);
	}}]);return Point;}(_react2.default.Component);Point.propTypes={datum:_react.PropTypes.object,data:_react.PropTypes.array,events:_react.PropTypes.object,index:_react.PropTypes.number,role:_react.PropTypes.string,size:_react.PropTypes.oneOfType([_react.PropTypes.number,_react.PropTypes.func]),shapeRendering:_react2.default.PropTypes.string,symbol:_react.PropTypes.oneOfType([_react.PropTypes.oneOf(["circle","diamond","plus","square","star","triangleDown","triangleUp"]),_react.PropTypes.func]),scale:_react.PropTypes.object,style:_react.PropTypes.object,x:_react.PropTypes.number,y:_react.PropTypes.number};exports.default=Point;

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _range2=__webpack_require__(165);var _range3=_interopRequireDefault(_range2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=
	
	{
	circle:function circle(x,y,size){
	return"M "+x+", "+y+" m "+-size+", 0\n      a "+
	size+", "+size+" 0 1,0 "+size*2+",0\n      a "+
	size+", "+size+" 0 1,0 "+-size*2+",0";
	},
	
	square:function square(x,y,size){
	var baseSize=0.87*size;
	return"M "+(x-baseSize)+", "+(y+baseSize)+"\n      L "+(
	x+baseSize)+", "+(y+baseSize)+"\n      L "+(
	x+baseSize)+", "+(y-baseSize)+"\n      L "+(
	x-baseSize)+", "+(y-baseSize)+"\n      z";
	
	},
	
	diamond:function diamond(x,y,size){
	var baseSize=0.87*size;
	var length=Math.sqrt(2*(baseSize*baseSize));
	return"M "+x+", "+(y+length)+"\n      L "+(
	x+length)+", "+y+"\n      L "+
	x+", "+(y-length)+"\n      L "+(
	x-length)+", "+y+"\n      z";
	
	},
	
	triangleDown:function triangleDown(x,y,size){
	var height=size/2*Math.sqrt(3);
	return"M "+(x-size)+", "+(y-size)+"\n      L "+(
	x+size)+", "+(y-size)+"\n      L "+
	x+", "+(y+height)+"\n      z";
	
	},
	
	triangleUp:function triangleUp(x,y,size){
	var height=size/2*Math.sqrt(3);
	return"M "+(x-size)+", "+(y+size)+"\n      L "+(
	x+size)+", "+(y+size)+"\n      L "+
	x+", "+(y-height)+"\n      z";
	
	},
	
	plus:function plus(x,y,size){
	var baseSize=1.1*size;
	return"M "+(x-baseSize/2.5)+", "+(y+baseSize)+"\n      L "+(
	x+baseSize/2.5)+", "+(y+baseSize)+"\n      L "+(
	x+baseSize/2.5)+", "+(y+baseSize/2.5)+"\n      L "+(
	x+baseSize)+", "+(y+baseSize/2.5)+"\n      L "+(
	x+baseSize)+", "+(y-baseSize/2.5)+"\n      L "+(
	x+baseSize/2.5)+", "+(y-baseSize/2.5)+"\n      L "+(
	x+baseSize/2.5)+", "+(y-baseSize)+"\n      L "+(
	x-baseSize/2.5)+", "+(y-baseSize)+"\n      L "+(
	x-baseSize/2.5)+", "+(y-baseSize/2.5)+"\n      L "+(
	x-baseSize)+", "+(y-baseSize/2.5)+"\n      L "+(
	x-baseSize)+", "+(y+baseSize/2.5)+"\n      L "+(
	x-baseSize/2.5)+", "+(y+baseSize/2.5)+"\n      z";
	
	},
	
	star:function star(x,y,size){
	var baseSize=1.35*size;
	var angle=Math.PI/5;
	var starCoords=(0,_range3.default)(10).map(function(index){
	var length=index%2===0?baseSize:baseSize/2;
	return length*Math.sin(angle*(index+1))+x+",\n        "+(
	length*Math.cos(angle*(index+1))+y);
	});
	return"M "+starCoords.join("L")+" z";
	}};

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
	
	Slice=function(_React$Component){_inherits(Slice,_React$Component);function Slice(){_classCallCheck(this,Slice);return _possibleConstructorReturn(this,(Slice.__proto__||Object.getPrototypeOf(Slice)).apply(this,arguments));}_createClass(Slice,[{key:"renderSlice",value:function renderSlice(
	
	
	
	
	
	
	
	
	
	
	
	
	path,style,events){var _props=
	this.props;var role=_props.role;var shapeRendering=_props.shapeRendering;
	return(
	_react2.default.createElement("path",_extends({
	d:path,
	role:role||"presentation",
	style:style,
	shapeRendering:shapeRendering||"auto"},
	events)));
	
	
	}},{key:"render",value:function render()
	
	{
	var path=this.props.pathFunction(this.props.slice);var _props2=
	this.props;var style=_props2.style;var events=_props2.events;
	return this.renderSlice(path,style,events);
	}}]);return Slice;}(_react2.default.Component);Slice.propTypes={index:_react.PropTypes.number,slice:_react.PropTypes.object,pathFunction:_react.PropTypes.func,style:_react.PropTypes.object,datum:_react.PropTypes.object,data:_react.PropTypes.array,events:_react.PropTypes.object,role:_react.PropTypes.string,shapeRendering:_react.PropTypes.string};exports.default=Slice;

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
	
	Voronoi=function(_React$Component){_inherits(Voronoi,_React$Component);function Voronoi(){_classCallCheck(this,Voronoi);return _possibleConstructorReturn(this,(Voronoi.__proto__||Object.getPrototypeOf(Voronoi)).apply(this,arguments));}_createClass(Voronoi,[{key:"getVoronoiPath",value:function getVoronoiPath(
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	props){
	return"M "+props.polygon.join("L")+" Z";
	}},{key:"getCirclePath",value:function getCirclePath(
	
	props){var
	x=props.x;var y=props.y;var size=props.size;
	return"M "+x+", "+y+" m "+-size+", 0\n      a "+
	size+", "+size+" 0 1,0 "+size*2+",0\n      a "+
	size+", "+size+" 0 1,0 "+-size*2+",0";
	}},{key:"renderPoint",value:function renderPoint(
	
	paths,style,events){
	var clipId=paths.circle&&"clipPath-"+Math.random();
	var clipPath=paths.circle?"url(#"+clipId+")":undefined;var _props=
	this.props;var role=_props.role;var shapeRendering=_props.shapeRendering;
	var voronoiPath=
	_react2.default.createElement("path",_extends({
	d:paths.circle||paths.voronoi,
	clipPath:clipPath,
	style:style,
	role:role||"presentation",
	shapeRendering:shapeRendering||"auto"},
	events));
	
	
	return paths.circle?
	
	_react2.default.createElement("g",null,
	_react2.default.createElement("defs",null,
	_react2.default.createElement("clipPath",{id:clipId},
	_react2.default.createElement("path",{d:paths.voronoi}))),
	
	
	voronoiPath):
	
	
	voronoiPath;
	}},{key:"render",value:function render()
	
	{
	var paths={
	circle:this.props.size&&this.getCirclePath(this.props),
	voronoi:this.getVoronoiPath(this.props)};var _props2=
	
	this.props;var style=_props2.style;var events=_props2.events;
	return this.renderPoint(paths,style,events);
	}}]);return Voronoi;}(_react2.default.Component);Voronoi.propTypes={datum:_react.PropTypes.object,data:_react.PropTypes.array,events:_react.PropTypes.object,index:_react.PropTypes.number,polygon:_react.PropTypes.array,scale:_react.PropTypes.object,size:_react.PropTypes.number,style:_react.PropTypes.object,x:_react.PropTypes.number,y:_react.PropTypes.number,shapeRendering:_react.PropTypes.string,role:_react.PropTypes.string};exports.default=Voronoi;

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
	
	Flyout=function(_React$Component){_inherits(Flyout,_React$Component);function Flyout(){_classCallCheck(this,Flyout);return _possibleConstructorReturn(this,(Flyout.__proto__||Object.getPrototypeOf(Flyout)).apply(this,arguments));}_createClass(Flyout,[{key:"getVerticalPath",value:function getVerticalPath(
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	props){var
	pointerLength=props.pointerLength;var pointerWidth=props.pointerWidth;var cornerRadius=props.cornerRadius;var orientation=props.orientation;var width=props.width;var height=props.height;
	var sign=orientation==="top"?1:-1;
	var x=props.x+(props.dx||0);
	var y=props.y-sign*(props.dy||0);
	var pointerEdge=y-sign*pointerLength;
	var oppositeEdge=y-sign*pointerLength-sign*height;
	var rightEdge=x+width/2;
	var leftEdge=x-width/2;
	var direction=orientation==="top"?"0 0 0":"0 0 1";
	var arc=cornerRadius+" "+cornerRadius+" "+direction;
	return"M "+(x-pointerWidth/2)+", "+pointerEdge+"\n      L "+
	x+", "+y+"\n      L "+(
	x+pointerWidth/2)+", "+pointerEdge+"\n      L "+(
	rightEdge-cornerRadius)+", "+pointerEdge+"\n      A "+
	arc+" "+rightEdge+", "+(pointerEdge-sign*cornerRadius)+"\n      L "+
	rightEdge+", "+(oppositeEdge+sign*cornerRadius)+"\n      A "+
	arc+" "+(rightEdge-cornerRadius)+", "+oppositeEdge+"\n      L "+(
	leftEdge+cornerRadius)+", "+oppositeEdge+"\n      A "+
	arc+" "+leftEdge+", "+(oppositeEdge+sign*cornerRadius)+"\n      L "+
	leftEdge+", "+(pointerEdge-sign*cornerRadius)+"\n      A "+
	arc+" "+(leftEdge+cornerRadius)+", "+pointerEdge+"\n      z";
	
	}},{key:"getHorizontalPath",value:function getHorizontalPath(
	
	props){var
	pointerLength=props.pointerLength;var pointerWidth=props.pointerWidth;var cornerRadius=props.cornerRadius;var orientation=props.orientation;var width=props.width;var height=props.height;
	var sign=orientation==="right"?1:-1;
	var x=props.x+sign*(props.dx||0);
	var y=props.y-(props.dy||0);
	var pointerEdge=x+sign*pointerLength;
	var oppositeEdge=x+sign*pointerLength+sign*width;
	var bottomEdge=y+height/2;
	var topEdge=y-height/2;
	var direction=orientation==="right"?"0 0 0":"0 0 1";
	var arc=cornerRadius+" "+cornerRadius+" "+direction;
	return"M "+pointerEdge+", "+(y-pointerWidth/2)+"\n      L "+
	x+", "+y+"\n      L "+
	pointerEdge+", "+(y+pointerWidth/2)+"\n      L "+
	pointerEdge+", "+(bottomEdge-cornerRadius)+"\n      A "+
	arc+" "+(pointerEdge+sign*cornerRadius)+", "+bottomEdge+"\n      L "+(
	oppositeEdge-sign*cornerRadius)+", "+bottomEdge+"\n      A "+
	arc+" "+oppositeEdge+", "+(bottomEdge-cornerRadius)+"\n      L "+
	oppositeEdge+", "+(topEdge+cornerRadius)+"\n      A "+
	arc+" "+(oppositeEdge-sign*cornerRadius)+", "+topEdge+"\n      L "+(
	pointerEdge+sign*cornerRadius)+", "+topEdge+"\n      A "+
	arc+" "+pointerEdge+", "+(topEdge+cornerRadius)+"\n      z";
	
	}},{key:"getFlyoutPath",value:function getFlyoutPath(
	
	props){
	var orientation=props.orientation||"top";
	return orientation==="left"||orientation==="right"?
	this.getHorizontalPath(props):this.getVerticalPath(props);
	}},{key:"renderFlyout",value:function renderFlyout(
	
	path,style,events){var _props=
	this.props;var role=_props.role;var shapeRendering=_props.shapeRendering;
	return(
	_react2.default.createElement("path",_extends({
	d:path,
	style:style,
	shapeRendering:shapeRendering||"auto",
	role:role||"presentation"},
	events)));
	
	
	}},{key:"render",value:function render()
	
	{
	var path=this.getFlyoutPath(this.props);
	return this.renderFlyout(path,this.props.style,this.props.events);
	}}]);return Flyout;}(_react2.default.Component);Flyout.propTypes={style:_react.PropTypes.object,x:_react.PropTypes.number,y:_react.PropTypes.number,dx:_react.PropTypes.number,dy:_react.PropTypes.number,datum:_react.PropTypes.object,data:_react.PropTypes.array,index:_react.PropTypes.number,width:_react.PropTypes.number,height:_react.PropTypes.number,orientation:_react.PropTypes.oneOf(["top","bottom","left","right"]),pointerLength:_react.PropTypes.number,pointerWidth:_react.PropTypes.number,cornerRadius:_react.PropTypes.number,events:_react.PropTypes.object,shapeRendering:_react.PropTypes.string,role:_react.PropTypes.string};exports.default=Flyout;

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _material=__webpack_require__(225);var _material2=_interopRequireDefault(_material);
	var _grayscale=__webpack_require__(226);var _grayscale2=_interopRequireDefault(_grayscale);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=
	
	{
	material:_material2.default,
	grayscale:_grayscale2.default};

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _assign2=__webpack_require__(80);var _assign3=_interopRequireDefault(_assign2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	
	
	
	var yellow200="#FFF59D";
	var deepOrange600="#F4511E";
	var lime300="#DCE775";
	var lightGreen500="#8BC34A";
	var teal700="#00796B";
	var cyan900="#006064";
	var colors=[
	deepOrange600,
	yellow200,
	lime300,
	lightGreen500,
	teal700,
	cyan900];
	
	var blueGrey50="#ECEFF1";
	var blueGrey300="#90A4AE";
	var blueGrey700="#455A64";
	var grey900="#212121";
	
	
	
	var sansSerif="'Roboto', 'Helvetica Neue', Helvetica, sans-serif";
	var letterSpacing="normal";
	var fontSize=12;
	
	
	
	var padding=8;
	var baseProps={
	width:350,
	height:350,
	padding:50};
	
	
	
	
	var baseLabelStyles={
	fontFamily:sansSerif,
	fontSize:fontSize,
	letterSpacing:letterSpacing,
	padding:padding,
	fill:blueGrey700};
	
	
	var centeredLabelStyles=(0,_assign3.default)({textAnchor:"middle"},baseLabelStyles);
	
	
	
	var strokeDasharray="10, 5";
	var strokeLinecap="round";
	var strokeLinejoin="round";exports.default=
	
	{
	area:(0,_assign3.default)({
	style:{
	data:{
	fill:grey900},
	
	labels:centeredLabelStyles}},
	
	baseProps),
	axis:(0,_assign3.default)({
	style:{
	axis:{
	fill:"transparent",
	stroke:blueGrey300,
	strokeWidth:2,
	strokeLinecap:strokeLinecap,
	strokeLinejoin:strokeLinejoin},
	
	axisLabel:(0,_assign3.default)({},centeredLabelStyles,{
	padding:padding,
	stroke:"transparent"}),
	
	grid:{
	fill:"transparent",
	stroke:blueGrey50,
	strokeDasharray:strokeDasharray,
	strokeLinecap:strokeLinecap,
	strokeLinejoin:strokeLinejoin},
	
	ticks:{
	fill:"transparent",
	padding:padding,
	size:5,
	stroke:blueGrey300,
	strokeWidth:1,
	strokeLinecap:strokeLinecap,
	strokeLinejoin:strokeLinejoin},
	
	tickLabels:(0,_assign3.default)({},baseLabelStyles,{
	fill:blueGrey700,
	stroke:"transparent"})}},
	
	
	baseProps),
	bar:(0,_assign3.default)({
	style:{
	data:{
	fill:blueGrey700,
	padding:padding,
	stroke:"transparent",
	strokeWidth:0,
	width:5},
	
	labels:baseLabelStyles}},
	
	baseProps),
	candlestick:(0,_assign3.default)({
	style:{
	data:{
	stroke:blueGrey700},
	
	labels:centeredLabelStyles},
	
	candleColors:{
	positive:"#ffffff",
	negative:blueGrey700}},
	
	baseProps),
	chart:baseProps,
	errorbar:(0,_assign3.default)({
	style:{
	data:{
	fill:"transparent",
	opacity:1,
	stroke:blueGrey700,
	strokeWidth:2},
	
	labels:(0,_assign3.default)({},centeredLabelStyles,{
	stroke:"transparent",
	strokeWidth:0})}},
	
	
	baseProps),
	group:(0,_assign3.default)({
	colorScale:colors},
	baseProps),
	line:(0,_assign3.default)({
	style:{
	data:{
	fill:"transparent",
	opacity:1,
	stroke:blueGrey700,
	strokeWidth:2},
	
	labels:(0,_assign3.default)({},baseLabelStyles,{
	stroke:"transparent",
	strokeWidth:0,
	textAnchor:"start"})}},
	
	
	baseProps),
	pie:(0,_assign3.default)({
	colorScale:colors,
	style:{
	data:{
	padding:padding,
	stroke:blueGrey50,
	strokeWidth:1},
	
	labels:(0,_assign3.default)({},baseLabelStyles,{
	padding:20,
	stroke:"transparent",
	strokeWidth:0})}},
	
	
	baseProps),
	scatter:(0,_assign3.default)({
	style:{
	data:{
	fill:blueGrey700,
	opacity:1,
	stroke:"transparent",
	strokeWidth:0},
	
	labels:(0,_assign3.default)({},centeredLabelStyles,{
	stroke:"transparent"})}},
	
	
	baseProps),
	stack:(0,_assign3.default)({
	colorScale:colors},
	baseProps),
	tooltip:(0,_assign3.default)({
	style:{
	data:{
	fill:"transparent",
	stroke:"transparent",
	strokeWidth:0},
	
	labels:centeredLabelStyles,
	flyout:{
	stroke:blueGrey700,
	strokeWidth:1,
	fill:"#f0f0f0"}},
	
	
	flyoutProps:{
	cornerRadius:10,
	pointerLength:10}},
	
	baseProps),
	voronoi:(0,_assign3.default)({
	style:{
	data:{
	fill:"transparent",
	stroke:"transparent",
	strokeWidth:0},
	
	labels:centeredLabelStyles}},
	
	baseProps)};

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _assign2=__webpack_require__(80);var _assign3=_interopRequireDefault(_assign2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	
	
	
	var colors=[
	"#252525",
	"#525252",
	"#737373",
	"#969696",
	"#bdbdbd",
	"#d9d9d9",
	"#f0f0f0"];
	
	
	var charcoal="#252525";
	
	
	
	var sansSerif="'Gill Sans', 'Gill Sans MT', 'Ser­avek', 'Trebuchet MS', sans-serif";
	var letterSpacing="normal";
	var fontSize=14;
	
	
	
	var baseProps={
	width:450,
	height:300,
	padding:50,
	colorScale:colors};
	
	
	
	
	var baseLabelStyles={
	fontFamily:sansSerif,
	fontSize:fontSize,
	letterSpacing:letterSpacing,
	padding:10,
	fill:charcoal,
	stroke:"transparent"};
	
	
	var centeredLabelStyles=(0,_assign3.default)({textAnchor:"middle"},baseLabelStyles);
	
	
	
	var strokeLinecap="round";
	var strokeLinejoin="round";exports.default=
	
	{
	area:(0,_assign3.default)({
	style:{
	data:{
	fill:charcoal},
	
	labels:centeredLabelStyles}},
	
	baseProps),
	axis:(0,_assign3.default)({
	style:{
	axis:{
	fill:"transparent",
	stroke:charcoal,
	strokeWidth:1,
	strokeLinecap:strokeLinecap,
	strokeLinejoin:strokeLinejoin},
	
	axisLabel:(0,_assign3.default)({},centeredLabelStyles,{
	padding:25}),
	
	grid:{
	fill:"transparent",
	stroke:"transparent"},
	
	ticks:{
	fill:"transparent",
	padding:10,
	size:1,
	stroke:"transparent"},
	
	tickLabels:baseLabelStyles}},
	
	baseProps),
	bar:(0,_assign3.default)({
	style:{
	data:{
	fill:charcoal,
	padding:10,
	stroke:"transparent",
	strokeWidth:0,
	width:8},
	
	labels:baseLabelStyles}},
	
	baseProps),
	candlestick:(0,_assign3.default)({
	style:{
	data:{
	stroke:charcoal,
	strokeWidth:1},
	
	labels:centeredLabelStyles},
	
	candleColors:{
	positive:"#ffffff",
	negative:charcoal}},
	
	baseProps),
	chart:baseProps,
	errorbar:(0,_assign3.default)({
	style:{
	data:{
	fill:"transparent",
	stroke:charcoal,
	strokeWidth:2},
	
	labels:centeredLabelStyles}},
	
	baseProps),
	group:(0,_assign3.default)({
	colorScale:colors},
	baseProps),
	line:(0,_assign3.default)({
	style:{
	data:{
	fill:"transparent",
	stroke:charcoal,
	strokeWidth:2},
	
	labels:(0,_assign3.default)({},baseLabelStyles,{
	textAnchor:"start"})}},
	
	
	baseProps),
	pie:{
	style:{
	data:{
	padding:10,
	stroke:"transparent",
	strokeWidth:1},
	
	labels:(0,_assign3.default)({},baseLabelStyles,{
	padding:20})},
	
	
	colorScale:colors,
	width:400,
	height:400,
	padding:50},
	
	scatter:(0,_assign3.default)({
	style:{
	data:{
	fill:charcoal,
	stroke:"transparent",
	strokeWidth:0},
	
	labels:centeredLabelStyles}},
	
	baseProps),
	stack:(0,_assign3.default)({
	colorScale:colors},
	baseProps),
	tooltip:(0,_assign3.default)({
	style:{
	data:{
	fill:"transparent",
	stroke:"transparent",
	strokeWidth:0},
	
	labels:centeredLabelStyles,
	flyout:{
	stroke:charcoal,
	strokeWidth:1,
	fill:"#f0f0f0"}},
	
	
	flyoutProps:{
	cornerRadius:10,
	pointerLength:10}},
	
	baseProps),
	voronoi:(0,_assign3.default)({
	style:{
	data:{
	fill:"transparent",
	stroke:"transparent",
	strokeWidth:0},
	
	labels:centeredLabelStyles}},
	
	baseProps)};

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _defaults2=__webpack_require__(134);var _defaults3=_interopRequireDefault(_defaults2);var _assign2=__webpack_require__(80);var _assign3=_interopRequireDefault(_assign2);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);
	var _index=__webpack_require__(107);
	var _victoryLabel=__webpack_require__(89);var _victoryLabel2=_interopRequireDefault(_victoryLabel);
	var _index2=__webpack_require__(209);
	var _victoryPortal=__webpack_require__(228);var _victoryPortal2=_interopRequireDefault(_victoryPortal);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
	
	
	var defaultStyles={
	stroke:"black",
	strokeWidth:1,
	fill:"#f0f0f0"};
	
	
	var defaultLabelStyles={
	fill:"#252525",
	fontSize:14,
	fontFamily:"'Gill Sans', 'Gill Sans MT', 'Ser­avek', 'Trebuchet MS', sans-serif",
	stroke:"transparent",
	padding:5};var
	
	
	VictoryTooltip=function(_React$Component){_inherits(VictoryTooltip,_React$Component);function VictoryTooltip(){_classCallCheck(this,VictoryTooltip);return _possibleConstructorReturn(this,(VictoryTooltip.__proto__||Object.getPrototypeOf(VictoryTooltip)).apply(this,arguments));}_createClass(VictoryTooltip,[{key:"getEvaluatedProps",value:function getEvaluatedProps(
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	props){var
	
	horizontal=
	
	props.horizontal;var datum=props.datum;var pointerLength=props.pointerLength;var pointerWidth=props.pointerWidth;var cornerRadius=props.cornerRadius;var width=props.width;var height=props.height;var orientation=props.orientation;var dx=props.dx;var dy=props.dy;var text=props.text;var active=props.active;
	var style=_index.Helpers.evaluateStyle(props.style,datum);
	var flyoutStyle=_index.Helpers.evaluateStyle(props.flyoutStyle,datum);
	var padding=flyoutStyle&&flyoutStyle.padding||0;
	var defaultDx=horizontal?padding:0;
	var defaultDy=horizontal?0:padding;
	var getDefaultOrientation=function getDefaultOrientation(){
	var positive=horizontal?"right":"top";
	var negative=horizontal?"left":"bottom";
	return datum&&datum.y<0?negative:positive;
	};
	return(0,_assign3.default)(
	{},
	props,
	{
	style:style,
	flyoutStyle:flyoutStyle,
	dx:dx!==undefined?_index.Helpers.evaluateProp(dx,datum):defaultDx,
	dy:dy!==undefined?_index.Helpers.evaluateProp(dy,datum):defaultDy,
	cornerRadius:_index.Helpers.evaluateProp(cornerRadius,datum),
	pointerLength:_index.Helpers.evaluateProp(pointerLength,datum),
	pointerWidth:_index.Helpers.evaluateProp(pointerWidth,datum),
	orientation:_index.Helpers.evaluateProp(orientation,datum)||getDefaultOrientation(),
	width:_index.Helpers.evaluateProp(width,datum),
	height:_index.Helpers.evaluateProp(height,datum),
	active:_index.Helpers.evaluateProp(active,datum),
	text:_index.Helpers.evaluateProp(text,datum)});
	
	
	}},{key:"getCalculatedValues",value:function getCalculatedValues(
	
	props){var
	style=props.style;var text=props.text;var datum=props.datum;
	var baseLabelStyle=style?
	(0,_defaults3.default)({},style,defaultLabelStyles):defaultLabelStyles;
	var baseFlyoutStyle=props.flyoutStyle?
	(0,_defaults3.default)({},props.flyoutStyle,defaultStyles):defaultStyles;
	var labelStyle=_index.Helpers.evaluateStyle(baseLabelStyle,datum);
	var flyoutStyle=_index.Helpers.evaluateStyle(baseFlyoutStyle,datum);
	var labelSize=_index.TextSize.approximateTextSize(text,labelStyle);
	var flyoutDimensions=this.getDimensions(props,labelSize,labelStyle);
	var flyoutCenter=this.getFlyoutCenter(props,flyoutDimensions);
	return{labelStyle:labelStyle,flyoutStyle:flyoutStyle,labelSize:labelSize,flyoutDimensions:flyoutDimensions,flyoutCenter:flyoutCenter};
	}},{key:"getFlyoutCenter",value:function getFlyoutCenter(
	
	props,dimensions){var
	x=props.x;var y=props.y;var dx=props.dx;var dy=props.dy;var pointerLength=props.pointerLength;var orientation=props.orientation;var
	height=dimensions.height;var width=dimensions.width;
	var sign=orientation==="right"||orientation==="top"?1:-1;
	return{
	x:orientation==="left"||orientation==="right"?
	x+sign*(pointerLength+width/2+dx):x+sign*dx,
	y:orientation==="top"||orientation==="bottom"?
	y-sign*(pointerLength+height/2+dy):y-sign*dy};
	
	}},{key:"getDimensions",value:function getDimensions(
	
	props,labelSize,labelStyle){var
	orientation=props.orientation;var cornerRadius=props.cornerRadius;var pointerLength=props.pointerLength;var pointerWidth=props.pointerWidth;
	var padding=labelStyle&&labelStyle.padding||0;
	var getHeight=function getHeight(){
	var calculatedHeight=labelSize.height+padding;
	var minHeight=orientation==="top"||orientation==="bottom"?
	2*cornerRadius:2*cornerRadius+pointerWidth;
	return Math.max(minHeight,calculatedHeight);
	};
	var getWidth=function getWidth(){
	var calculatedWidth=labelSize.width+padding;
	var minWidth=orientation==="left"||orientation==="right"?
	2*cornerRadius+pointerLength:2*cornerRadius;
	return Math.max(minWidth,calculatedWidth);
	};
	return{
	height:props.height||getHeight(props,labelSize,orientation)+padding/2,
	width:props.width||getWidth(props,labelSize,orientation)+padding};
	
	}},{key:"getLabelProps",value:function getLabelProps(
	
	props,calculatedValues){var
	flyoutCenter=calculatedValues.flyoutCenter;var labelStyle=calculatedValues.labelStyle;var labelSize=calculatedValues.labelSize;var flyoutDimensions=calculatedValues.flyoutDimensions;var
	text=props.text;var datum=props.datum;var labelComponent=props.labelComponent;var index=props.index;
	var textAnchor=labelStyle.textAnchor||"middle";
	var getLabelX=function getLabelX(){
	var sign=textAnchor==="end"?-1:1;
	return flyoutCenter.x-sign*(flyoutDimensions.width-labelSize.width);
	};
	return(0,_defaults3.default)(
	{},
	labelComponent.props,
	{
	key:"label-"+index,
	text:text,datum:datum,textAnchor:textAnchor,
	style:labelStyle,
	x:!labelStyle.textAnchor||labelStyle.textAnchor==="middle"?
	flyoutCenter.x:getLabelX(),
	y:flyoutCenter.y,
	verticalAnchor:"middle",
	angle:labelStyle.angle});
	
	
	}},{key:"getFlyoutProps",value:function getFlyoutProps(
	
	props,calculatedValues){var
	flyoutDimensions=calculatedValues.flyoutDimensions;var flyoutStyle=calculatedValues.flyoutStyle;var
	
	x=
	
	props.x;var y=props.y;var dx=props.dx;var dy=props.dy;var orientation=props.orientation;var pointerLength=props.pointerLength;var pointerWidth=props.pointerWidth;var cornerRadius=props.cornerRadius;var events=props.events;var flyoutComponent=props.flyoutComponent;var index=props.index;
	return(0,_defaults3.default)(
	{},
	flyoutComponent.props,
	{
	x:x,y:y,dx:dx,dy:dy,orientation:orientation,pointerLength:pointerLength,pointerWidth:pointerWidth,cornerRadius:cornerRadius,events:events,
	key:"flyout-"+index,
	width:flyoutDimensions.width,
	height:flyoutDimensions.height,
	style:flyoutStyle});
	
	
	}},{key:"renderTooltip",value:function renderTooltip(
	
	props){
	var evaluatedProps=this.getEvaluatedProps(props);var
	flyoutComponent=evaluatedProps.flyoutComponent;var labelComponent=evaluatedProps.labelComponent;var groupComponent=evaluatedProps.groupComponent;
	var calculatedValues=this.getCalculatedValues(evaluatedProps);
	var children=[
	_react2.default.cloneElement(flyoutComponent,this.getFlyoutProps(evaluatedProps,calculatedValues)),
	_react2.default.cloneElement(labelComponent,this.getLabelProps(evaluatedProps,calculatedValues))];
	
	return _react2.default.cloneElement(groupComponent,{role:"presentation"},children);
	}},{key:"renderEmpty",value:function renderEmpty()
	
	
	{
	return null;
	}},{key:"render",value:function render()
	
	{var _props=
	this.props;var active=_props.active;var renderInPortal=_props.renderInPortal;
	var tooltip=active?this.renderTooltip(this.props):this.renderEmpty();
	return renderInPortal?_react2.default.createElement(_victoryPortal2.default,null,tooltip):tooltip;
	}}]);return VictoryTooltip;}(_react2.default.Component);VictoryTooltip.displayName="VictoryTooltip";VictoryTooltip.propTypes={active:_react.PropTypes.oneOfType([_react.PropTypes.bool,_react.PropTypes.func]),datum:_react.PropTypes.object,data:_react.PropTypes.array,events:_react.PropTypes.object,text:_react.PropTypes.oneOfType([_react.PropTypes.string,_react.PropTypes.number,_react.PropTypes.func]),style:_react.PropTypes.object,flyoutStyle:_react.PropTypes.object,x:_react.PropTypes.number,y:_react.PropTypes.number,dx:_react.PropTypes.oneOfType([_react.PropTypes.number,_react.PropTypes.func]),dy:_react.PropTypes.oneOfType([_react.PropTypes.number,_react.PropTypes.func]),width:_react.PropTypes.oneOfType([_index.PropTypes.nonNegative,_react.PropTypes.func]),height:_react.PropTypes.oneOfType([_index.PropTypes.nonNegative,_react.PropTypes.func]),orientation:_react.PropTypes.oneOfType([_react.PropTypes.oneOf(["top","bottom","left","right"]),_react.PropTypes.func]),pointerLength:_react.PropTypes.oneOfType([_index.PropTypes.nonNegative,_react.PropTypes.func]),pointerWidth:_react.PropTypes.oneOfType([_index.PropTypes.nonNegative,_react.PropTypes.func]),cornerRadius:_react.PropTypes.oneOfType([_index.PropTypes.nonNegative,_react.PropTypes.func]),horizontal:_react.PropTypes.bool,labelComponent:_react.PropTypes.element,flyoutComponent:_react.PropTypes.element,groupComponent:_react.PropTypes.element,index:_react.PropTypes.number,renderInPortal:_react.PropTypes.bool};VictoryTooltip.defaultProps={active:false,renderInPortal:true,cornerRadius:5,pointerLength:10,pointerWidth:10,labelComponent:_react2.default.createElement(_victoryLabel2.default,null),flyoutComponent:_react2.default.createElement(_index2.Flyout,null),groupComponent:_react2.default.createElement("g",null)};VictoryTooltip.defaultEvents=[{target:"data",eventHandlers:{onMouseOver:function onMouseOver(){return{target:"labels",mutation:function mutation(){return{active:true};}};},onMouseOut:function onMouseOut(){return{target:"labels",mutation:function mutation(){return{active:false};}};}}}];exports.default=VictoryTooltip;

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports,"__esModule",{value:true});var _omit2=__webpack_require__(13);var _omit3=_interopRequireDefault(_omit2);var _defaults2=__webpack_require__(134);var _defaults3=_interopRequireDefault(_defaults2);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);
	var _index=__webpack_require__(107);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var
	
	
	VictoryPortal=function(_React$Component){_inherits(VictoryPortal,_React$Component);function VictoryPortal(){_classCallCheck(this,VictoryPortal);return _possibleConstructorReturn(this,(VictoryPortal.__proto__||Object.getPrototypeOf(VictoryPortal)).apply(this,arguments));}_createClass(VictoryPortal,[{key:"componentDidMount",value:function componentDidMount()
	
	
	
	
	
	
	
	
	
	
	{
	if(!this.checkedContext){
	if(typeof this.context.portalUpdate!=="function"){
	var msg="`renderInPortal` is not supported outside of `VictoryContainer`. "+
	"Component will be rendered in place";
	_index.Log.warn(msg);
	this.renderInPlace=true;
	}
	this.checkedContext=true;
	}
	this.forceUpdate();
	}},{key:"componentDidUpdate",value:function componentDidUpdate()
	
	{
	if(!this.renderInPlace){
	this.portalKey=this.portalKey||this.context.portalRegister();
	this.context.portalUpdate(this.portalKey,this.element);
	}
	}},{key:"componentWillUnmount",value:function componentWillUnmount()
	
	{
	if(this.context&&this.context.portalDeregister){
	this.context.portalDeregister(this.portalKey);
	}
	}},{key:"render",value:function render()
	
	{var
	children=this.props.children;
	var childProps=children&&children.props||{};
	var child=children&&_react2.default.cloneElement(
	children,(0,_defaults3.default)({},childProps,(0,_omit3.default)(this.props,"children")));
	
	if(this.renderInPlace){
	return child;
	}
	this.element=child;
	return null;
	}}]);return VictoryPortal;}(_react2.default.Component);VictoryPortal.propTypes={children:_react2.default.PropTypes.node};VictoryPortal.contextTypes={portalUpdate:_react2.default.PropTypes.func,portalRegister:_react2.default.PropTypes.func,portalDeregister:_react2.default.PropTypes.func};exports.default=VictoryPortal;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=victory-core.js.map