(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1920,
	height: 1081,
	fps: 120,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/plc3_atlas_.png?1470816495970", id:"plc3_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"plc3_atlas_", frames: [[431,0,413,447],[431,449,375,137],[0,553,84,17],[0,0,429,551],[0,572,17,16]]}
];


// symbols:



(lib.bg = function() {
	this.spriteSheet = ss["plc3_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.boom = function() {
	this.spriteSheet = ss["plc3_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cylinder = function() {
	this.spriteSheet = ss["plc3_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.king = function() {
	this.spriteSheet = ss["plc3_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.winch = function() {
	this.spriteSheet = ss["plc3_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.winch_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.winch();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17,16);


(lib.tb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AEgAAQAAB3hUBVQhVBUh3AAQh2AAhVhUQhUhVAAh3QAAh2BUhVQBVhUB2AAQB3AABVBUQBUBVAAB2g");
	this.shape.setTransform(28.9,28.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjKDLQhVhUAAh3QAAh2BVhUQBUhVB2AAQB3AABUBVQBVBUAAB2QAAB3hVBUQhUBVh3AAQh2AAhUhVg");
	this.shape_1.setTransform(28.9,28.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,59.7,59.7);


(lib.stopit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4.3).p("Ak6k6IJ1AAIAAJ1Ip1AAg");
	this.shape.setTransform(31.5,31.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ak6E7IAAp1IJ1AAIAAJ1g");
	this.shape_1.setTransform(31.5,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-2.1,67.2,67.2);


(lib.stop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjFDFQhRhRgBh0QABhyBRhTQBThRBygBQB0ABBRBRQBSBTAAByQAAB0hSBRQhRBSh0AAQhyAAhThSg");
	this.shape.setTransform(28,28);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,56);


(lib.redline1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D92F27").ss(4.3).p("EglHAKGIAApKQAAhwBBg5QBGg+CTAAMBA7AAAQBhAAA0gKQA/gMAigfQBEg9AAjHIAAih");
	this.shape.setTransform(237.6,64.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-2.1,482.1,133.4);


(lib.red_up_conv_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D9EDA").ss(4.3).p("AAAHKIAAuT");
	this.shape.setTransform(0,15.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-32.6,4.2,95.9);


(lib.red_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D92F27").ss(4.3).p("AAAHKIAAuT");
	this.shape.setTransform(0,15.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-32.6,4.2,95.9);


(lib.red_box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D92F27").s().p("Ak7BHIAAiNIJ3AAIAACNg");
	this.shape.setTransform(31.6,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.3,14.3);


(lib.pause = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ai4C6QhOhOAAhsQAAhsBOhMQBMhOBsAAQBsAABOBOQBNBMgBBsQABBshNBOQhOBNhsgBQhsABhMhNg");
	this.shape.setTransform(26.3,26.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.6,52.6);


(lib.nullennull = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaAvIAAgKIAXAAIAAhEIgSAAIAAgIIAMgDIAIgEIAHAAIAABTIAUAAIAAAKg");
	this.shape.setTransform(304,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_1.setTransform(296.3,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAvIAAgKIAVAAIAAhEIgRAAIAAgIIALgDIAJgEIAHAAIAABTIAVAAIAAAKg");
	this.shape_2.setTransform(289.1,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_3.setTransform(281.4,12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaAvIAAgKIAXAAIAAhEIgSAAIAAgIIAMgDIAIgEIAIAAIAABTIATAAIAAAKg");
	this.shape_4.setTransform(274.2,12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_5.setTransform(266.5,12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZAvIAAgKIAVAAIAAhEIgRAAIAAgIIALgDIAJgEIAHAAIAABTIAVAAIAAAKg");
	this.shape_6.setTransform(259.3,12);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_7.setTransform(251.6,12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaAvIAAgKIAWAAIAAhEIgRAAIAAgIIAMgDIAIgEIAIAAIAABTIAUAAIAAAKg");
	this.shape_8.setTransform(244.4,12);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_9.setTransform(236.7,12);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaAvIAAgKIAXAAIAAhEIgSAAIAAgIIALgDIAJgEIAHAAIAABTIAUAAIAAAKg");
	this.shape_10.setTransform(229.5,12);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_11.setTransform(221.8,12);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgZAvIAAgKIAVAAIAAhEIgRAAIAAgIIAMgDIAIgEIAIAAIAABTIAUAAIAAAKg");
	this.shape_12.setTransform(214.6,12);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_13.setTransform(206.9,12);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_14.setTransform(199.5,12);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgZAvIAAgKIAVAAIAAhEIgRAAIAAgIIALgDIAJgEIAHAAIAABTIAVAAIAAAKg");
	this.shape_15.setTransform(192.2,12);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgZAvIAAgKIAVAAIAAhEIgRAAIAAgIIAMgDIAIgEIAIAAIAABTIAUAAIAAAKg");
	this.shape_16.setTransform(184.8,12);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_17.setTransform(177.1,12);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_18.setTransform(169.7,12);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgaAvIAAgKIAXAAIAAhEIgSAAIAAgIIALgDIAJgEIAHAAIAABTIAUAAIAAAKg");
	this.shape_19.setTransform(162.4,12);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_20.setTransform(154.8,12);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZAvIAAgKIAVAAIAAhEIgRAAIAAgIIAMgDIAIgEIAIAAIAABTIAUAAIAAAKg");
	this.shape_21.setTransform(147.5,12);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgaAvIAAgKIAXAAIAAhEIgSAAIAAgIIAMgDIAIgEIAIAAIAABTIATAAIAAAKg");
	this.shape_22.setTransform(140.1,12);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_23.setTransform(132.4,12);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgZAvIAAgKIAWAAIAAhEIgSAAIAAgIIALgDIAJgEIAHAAIAABTIAVAAIAAAKg");
	this.shape_24.setTransform(125.2,12);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_25.setTransform(117.5,12);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgaAvIAAgKIAWAAIAAhEIgRAAIAAgIIAMgDIAIgEIAIAAIAABTIATAAIAAAKg");
	this.shape_26.setTransform(110.3,12);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_27.setTransform(102.6,12);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_28.setTransform(95.2,12);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgZAvIAAgKIAVAAIAAhEIgRAAIAAgIIALgDIAJgEIAHAAIAABTIAVAAIAAAKg");
	this.shape_29.setTransform(87.9,12);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgZAvIAAgKIAVAAIAAhEIgRAAIAAgIIAMgDIAIgEIAIAAIAABTIAUAAIAAAKg");
	this.shape_30.setTransform(80.5,12);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_31.setTransform(72.8,12);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgaAvIAAgKIAXAAIAAhEIgSAAIAAgIIALgDIAJgEIAHAAIAABTIAUAAIAAAKg");
	this.shape_32.setTransform(65.6,12);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_33.setTransform(57.9,12);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgZAvIAAgKIAVAAIAAhEIgRAAIAAgIIAMgDIAIgEIAIAAIAABTIAUAAIAAAKg");
	this.shape_34.setTransform(50.7,12);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_35.setTransform(43,12);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgaAvIAAgKIAXAAIAAhEIgSAAIAAgIIALgDIAJgEIAIAAIAABTIATAAIAAAKg");
	this.shape_36.setTransform(35.8,12);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_37.setTransform(28.1,12);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgZAvIAAgKIAVAAIAAhEIgRAAIAAgIIALgDIAJgEIAHAAIAABTIAVAAIAAAKg");
	this.shape_38.setTransform(20.9,12);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgZAvIAAgKIAVAAIAAhEIgRAAIAAgIIAMgDIAIgEIAIAAIAABTIAUAAIAAAKg");
	this.shape_39.setTransform(13.4,12);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_40.setTransform(5.8,12);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgaAvIAAgKIAXAAIAAhEIgSAAIAAgIIALgDIAJgEIAHAAIAABTIAUAAIAAAKg");
	this.shape_41.setTransform(132.6,12);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgaAvIAAgKIAXAAIAAhEIgSAAIAAgIIALgDIAJgEIAHAAIAABTIAUAAIAAAKg");
	this.shape_42.setTransform(95.4,12);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgaAvIAAgKIAXAAIAAhEIgSAAIAAgIIALgDIAJgEIAHAAIAABTIAUAAIAAAKg");
	this.shape_43.setTransform(28.3,12);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgZAvIAAgKIAVAAIAAhEIgRAAIAAgIIALgDIAJgEIAHAAIAABTIAVAAIAAAKg");
	this.shape_44.setTransform(20.9,12);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_45.setTransform(5.8,12);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgaAvIAAgKIAXAAIAAhEIgSAAIAAgIIAMgDIAIgEIAIAAIAABTIATAAIAAAKg");
	this.shape_46.setTransform(140.1,12);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgaAvIAAgKIAXAAIAAhEIgSAAIAAgIIALgDIAJgEIAIAAIAABTIATAAIAAAKg");
	this.shape_47.setTransform(35.8,12);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgaAvIAAgKIAXAAIAAhEIgSAAIAAgIIAMgDIAIgEIAIAAIAABTIATAAIAAAKg");
	this.shape_48.setTransform(6,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40,p:{x:5.8}},{t:this.shape_39},{t:this.shape_38,p:{x:20.9}},{t:this.shape_37,p:{x:28.1}},{t:this.shape_36,p:{x:35.8}},{t:this.shape_35,p:{x:43}},{t:this.shape_34},{t:this.shape_33,p:{x:57.9}},{t:this.shape_32,p:{x:65.6}},{t:this.shape_31,p:{x:72.8}},{t:this.shape_30,p:{x:80.5}},{t:this.shape_29},{t:this.shape_28,p:{x:95.2}},{t:this.shape_27,p:{x:102.6}},{t:this.shape_26,p:{x:110.3}},{t:this.shape_25,p:{x:117.5}},{t:this.shape_24},{t:this.shape_23,p:{x:132.4}},{t:this.shape_22,p:{x:140.1}},{t:this.shape_21},{t:this.shape_20,p:{x:154.8}},{t:this.shape_19,p:{x:162.4}},{t:this.shape_18,p:{x:169.7}},{t:this.shape_17,p:{x:177.1}},{t:this.shape_16,p:{x:184.8}},{t:this.shape_15,p:{x:192.2}},{t:this.shape_14,p:{x:199.5}},{t:this.shape_13,p:{x:206.9}},{t:this.shape_12,p:{x:214.6}},{t:this.shape_11,p:{x:221.8}},{t:this.shape_10,p:{x:229.5}},{t:this.shape_9,p:{x:236.7}},{t:this.shape_8},{t:this.shape_7,p:{x:251.6}},{t:this.shape_6,p:{x:259.3}},{t:this.shape_5,p:{x:266.5}},{t:this.shape_4,p:{x:274.2}},{t:this.shape_3,p:{x:281.4}},{t:this.shape_2,p:{x:289.1}},{t:this.shape_1,p:{x:296.3}},{t:this.shape,p:{x:304}}]}).to({state:[{t:this.shape_45},{t:this.shape_40,p:{x:13.2}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_37,p:{x:35.6}},{t:this.shape_26,p:{x:43.2}},{t:this.shape_35,p:{x:50.5}},{t:this.shape_38,p:{x:58.1}},{t:this.shape_33,p:{x:65.4}},{t:this.shape_4,p:{x:73}},{t:this.shape_31,p:{x:80.3}},{t:this.shape_29},{t:this.shape_42,p:{x:95.4}},{t:this.shape_28,p:{x:102.6}},{t:this.shape_27,p:{x:110.1}},{t:this.shape_30,p:{x:117.7}},{t:this.shape_25,p:{x:125}},{t:this.shape_41,p:{x:132.6}},{t:this.shape_23,p:{x:139.9}},{t:this.shape_21},{t:this.shape_15,p:{x:155}},{t:this.shape_20,p:{x:162.2}},{t:this.shape_36,p:{x:169.9}},{t:this.shape_18,p:{x:177.1}},{t:this.shape_17,p:{x:184.6}},{t:this.shape_6,p:{x:192.2}},{t:this.shape_32,p:{x:199.7}},{t:this.shape_14,p:{x:206.9}},{t:this.shape_13,p:{x:214.4}},{t:this.shape_2,p:{x:222}},{t:this.shape_11,p:{x:229.3}},{t:this.shape,p:{x:236.9}},{t:this.shape_9,p:{x:244.2}},{t:this.shape_16,p:{x:251.8}},{t:this.shape_7,p:{x:259.1}},{t:this.shape_19,p:{x:266.7}},{t:this.shape_5,p:{x:274}},{t:this.shape_12,p:{x:281.6}},{t:this.shape_3,p:{x:288.9}},{t:this.shape_10,p:{x:296.5}},{t:this.shape_1,p:{x:303.8}}]},1).to({state:[{t:this.shape_48},{t:this.shape_40,p:{x:13.2}},{t:this.shape_37,p:{x:20.7}},{t:this.shape_43},{t:this.shape_47},{t:this.shape_35,p:{x:43}},{t:this.shape_16,p:{x:50.7}},{t:this.shape_33,p:{x:57.9}},{t:this.shape_42,p:{x:65.6}},{t:this.shape_31,p:{x:72.8}},{t:this.shape_12,p:{x:80.5}},{t:this.shape_28,p:{x:87.7}},{t:this.shape_41,p:{x:95.4}},{t:this.shape_36,p:{x:102.8}},{t:this.shape_27,p:{x:110.1}},{t:this.shape_25,p:{x:117.5}},{t:this.shape_24},{t:this.shape_23,p:{x:132.4}},{t:this.shape_46},{t:this.shape_20,p:{x:147.3}},{t:this.shape_15,p:{x:155}},{t:this.shape_32,p:{x:162.4}},{t:this.shape_18,p:{x:169.7}},{t:this.shape_26,p:{x:177.3}},{t:this.shape_17,p:{x:184.6}},{t:this.shape_14,p:{x:192}},{t:this.shape_19,p:{x:199.7}},{t:this.shape_22,p:{x:207.1}},{t:this.shape_13,p:{x:214.4}},{t:this.shape_11,p:{x:221.8}},{t:this.shape_10,p:{x:229.5}},{t:this.shape_9,p:{x:236.7}},{t:this.shape_8},{t:this.shape_7,p:{x:251.6}},{t:this.shape_6,p:{x:259.3}},{t:this.shape_5,p:{x:266.5}},{t:this.shape_4,p:{x:274.2}},{t:this.shape_3,p:{x:281.4}},{t:this.shape_2,p:{x:289.1}},{t:this.shape_1,p:{x:296.3}},{t:this.shape,p:{x:304}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,309.6,22.9);


(lib.king_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.king();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,429,551);


(lib.fill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AASAkIgLgRIgEgHIgDgGIAAAAIgEAGIgDAHIgKARIgNAAIAYgkIgWgjIANAAIAKAQIAEAGIABAHIABAAIADgHIAEgGIAIgQIANAAIgWAjIAYAkg");
	this.shape.setTransform(94,9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRAjQgEgCgDgFQgDgFAAgGQAAgMALgFQALgGAVgCIgBgJQgCgEgDgDQgDgDgGAAQgFAAgFADIgKAFIgFgIQAFgEAIgDQAHgDAHAAQANAAAGAIQAGAIAAAOIAAArIgKAAIgBgJIgMAHQgFADgGABQgGAAgFgDgAgCACQgHACgDAEQgDADAAAFQAAAGAEADQADADAGAAQADAAAFgDQAFgCAFgFIAAgSQgMAAgGACg");
	this.shape_1.setTransform(86.6,9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAlAlIAAgrQAAgKgDgFQgDgEgHAAQgEAAgFADQgEACgFAGIAAAzIgLAAIAAgrQAAgKgDgFQgDgEgHAAQgEAAgFADQgFACgFAGIAAAzIgMAAIAAhHIAKAAIABAKIABAAQAEgFAGgDQAGgEAGAAQAJAAAFAEQACADACAHQAGgGAGgEQAGgEAGAAQAMAAAFAHQAGAIAAAOIAAAsg");
	this.shape_2.setTransform(76.7,9.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAQAlIAAgrQAAgKgDgFQgEgEgHAAQgDAAgFADQgEACgGAGIAAAzIgMAAIAAhHIAKAAIABAKIABAAQAFgFAGgDQAFgEAGAAQAMAAAFAHQAGAIgBAOIAAAsg");
	this.shape_3.setTransform(-9,9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAzIAAhHIAJAAIAABHgAgEglQgDgCAAgDQAAgEADgCQACgCACAAQAEAAABACQADACAAAEQAAADgDACQgBACgEABQgCgBgCgCg");
	this.shape_4.setTransform(-15,8.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAlAlIAAgrQAAgKgDgFQgDgEgHAAQgEAAgFADQgEACgFAGIAAAzIgLAAIAAgrQAAgKgDgFQgDgEgHAAQgEAAgFADQgFACgFAGIAAAzIgMAAIAAhHIAKAAIABAKIABAAQAEgFAGgDQAGgEAGAAQAJAAAFAEQACADACAHQAGgGAGgEQAGgEAGAAQAMAAAFAHQAGAIAAAOIAAAsg");
	this.shape_5.setTransform(-23,9.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(4.3).p("AivBQIFKAAIAAifIlKAA");
	this.shape_6.setTransform(15.5,8.1,1,1,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(4.3).p("AivBQIFKAAIAAifIlKAA");
	this.shape_7.setTransform(50.2,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.3,-3.4,130.8,22.8);


(lib.cylinder_fill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.3,-3.9,-0.3,8.2).s().p("AkNAWIAAgrIIbAAIAAArg");
	this.shape.setTransform(27,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,4.5);


(lib.cylinder_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cylinder();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,17);


(lib.btn_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D9EDA").s().p("AjVDWQhYhZAAh9QAAh8BYhZQBZhYB8AAQB9AABZBYQBYBZAAB8QAAB9hYBZQhZBYh9AAQh8AAhZhYg");
	this.shape.setTransform(30.3,30.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.5,60.5);


(lib.boom_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boom();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,375,137);


(lib.blueline1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D9EDA").ss(4.3).p("A6YDTQABgaAAiTQAAhtA6hAQBFhLCNAAMAw5AAA");
	this.shape.setTransform(169,21.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-9.5,344.3,54);


(lib.blue_wide_conv_red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D92F27").s().p("AIiDhI2SAAIAAgrIWSAAQBfAAAzgJQA3gLAfgbQA8g6AAi5IAAh0IArAAIAAB0QAADShLBAQgmAjhEANIAAAAQg2ALhjAAIgBAAg");
	this.shape.setTransform(88.1,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176.3,45.1);


(lib.blue_wide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D9EDA").s().p("AIiDhI2SAAIAAgrIWSAAQBfAAAzgJQA3gLAfgbQA8g6AAi5IAAh0IArAAIAAB0QAADShLBAQgmAjhEANIAAAAQg2ALhjAAIgBAAg");
	this.shape.setTransform(88.1,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176.3,45.1);


(lib.blue_up_conv_red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D92F27").s().p("AgULIIAA2PIApAAIAAWPg");
	this.shape.setTransform(0,71.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,0,4.3,142.5);


(lib.blue_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D9EDA").s().p("AgULIIAA2PIApAAIAAWPg");
	this.shape.setTransform(0,71.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,0,4.3,142.5);


(lib.blue_box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D9EDA").s().p("Ak7BHIAAiNIJ3AAIAACNg");
	this.shape.setTransform(31.6,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.3,14.3);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,413,447);


(lib.arrows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4.3).p("AAAkLIAAIX");
	this.shape.setTransform(224.8,28.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhhhsIDDgBIhdDbg");
	this.shape_1.setTransform(223.8,63.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4.3).p("AAAELIAAoW");
	this.shape_2.setTransform(188.3,50.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEhtIBmDaIjDABg");
	this.shape_3.setTransform(189.3,15.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(4.3).p("AiWkRIEtIj");
	this.shape_4.setTransform(15.1,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhfgbICthbIASDtg");
	this.shape_5.setTransform(29.7,61.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(4.3).p("AiOEWIEdor");
	this.shape_6.setTransform(17.4,49.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhdAaIC6iSIgODxg");
	this.shape_7.setTransform(31.1,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(4.3).p("ABWAAIirAA");
	this.shape_8.setTransform(95.4,55.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(4.3).p("AAABqIAAjT");
	this.shape_9.setTransform(94.8,66.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(4.3).p("ABWAAIirAA");
	this.shape_10.setTransform(132.5,55.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(4.3).p("AAABqIAAjT");
	this.shape_11.setTransform(131.9,66.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(4.3).p("AhVAAICrAA");
	this.shape_12.setTransform(132.5,21.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(4.3).p("AAAhpIAADT");
	this.shape_13.setTransform(133.2,10.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(4.3).p("AhVAAICrAA");
	this.shape_14.setTransform(95.4,21.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(4.3).p("AAAhpIAADT");
	this.shape_15.setTransform(96.1,10.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(4.3).p("AAAl5IAALz");
	this.shape_16.setTransform(158.8,39.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(4.3).p("AAAl5IAALz");
	this.shape_17.setTransform(67.8,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-2.1,235.8,81.2);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWATIAAglIAtAAIAAAlg");
	this.shape.setTransform(2.3,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.3,4.7,4);


(lib._01000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape.setTransform(8.2,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_1.setTransform(8.5,18.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgyBRIAAgMIAqgqQAOgTAJgMQAIgPABgNQAAgOgIgIQgHgJgOAAQgKAAgIAGQgJAFgGAIIgNgMQAKgLAMgGQAMgHAPAAQAUABAMAMQANANABAVQAAAPgJAQQgIANgPARIgfAlIANgBIAMgBIAuAAIAAASg");
	this.shape_2.setTransform(8.1,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfBLQgMgGgIgJIAKgOQAIAIAKAFQAKAGANAAQANAAAJgIQAJgIAAgNQAAgJgEgIQgGgHgLgEQgKgEgRAAIAAgNQAQgBAIgDQAKgEAEgHQAFgHAAgIQAAgMgIgHQgHgGgLgBQgKABgIAEQgJAFgHAHIgLgNQAJgJAMgFQALgGANAAQANAAAKAFQALAEAGAJQAGAJAAANQAAAPgIAJQgHAKgNAEIAAABQAJACAIAEQAIAFAEAIQAFAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgSAAgNgHg");
	this.shape_3.setTransform(7.9,18.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAWAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIAAgLIABgKIgBAAIgGALg");
	this.shape_4.setTransform(8.1,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWBOQgJgEgIgFQgHgEgGgGIALgNQAGAHAKAFQAKAFAOABQAHAAAIgFQAIgEAFgIQAEgJABgLQAAgQgJgJQgKgIgOAAQgHAAgGADQgHACgHADIgKgFIAEhNIBOAAIAAASIg8AAIgEAvIALgEQAHgCAFAAQANAAAMAFQALAFAGALQAHAKAAARQAAARgIAMQgHAMgMAGQgNAHgMAAQgMAAgKgDg");
	this.shape_5.setTransform(8,18.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_6.setTransform(8.3,18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQBPQABgeAEgXQAGgZAHgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgJARgGAPQgEARgDATQgCATgBAXg");
	this.shape_7.setTransform(8.3,18.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_8.setTransform(8.2,18.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfBNQgJgEgGgIIALgMQAFAFAGAEQAIADAHAAQAJAAAKgGQAJgHAGgPQAGgPABgXQgIAHgKAGQgKAFgIAAQgVAAgMgMQgMgKgBgZQAAgPAHgMQAHgLAKgHQALgGANAAQANAAANAIQAMAJAHARQAIARAAAZQAAAegJAUQgIATgPAJQgNAJgOAAQgNAAgKgFgAgWg3QgIAJAAAQQAAAQAHAJQAHAHAQAAQAFAAAJgDQAIgFAJgMQgCgXgKgMQgIgMgNAAQgNAAgHAKg");
	this.shape_9.setTransform(8.1,18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},99).to({state:[{t:this.shape_2}]},100).to({state:[{t:this.shape_3}]},100).to({state:[{t:this.shape_4}]},100).to({state:[{t:this.shape_5}]},100).to({state:[{t:this.shape_6}]},100).to({state:[{t:this.shape_7}]},100).to({state:[{t:this.shape_8}]},100).to({state:[{t:this.shape_9}]},100).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.7,35.5);


(lib._582 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgyBRIAAgMIAqgqQAOgTAJgMQAIgPABgNQAAgOgIgIQgHgJgOAAQgKAAgIAGQgJAFgGAIIgNgMQAKgLAMgGQAMgHAPAAQAUABAMAMQANANABAVQAAAPgJAQQgIANgPARIgfAlIANgBIAMgBIAuAAIAAASg");
	this.shape.setTransform(8.1,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgfBLQgMgGgIgJIAKgOQAIAIAKAFQAKAGANAAQANAAAJgIQAJgIAAgNQAAgJgEgIQgGgHgLgEQgKgEgRAAIAAgNQAQgBAIgDQAKgEAEgHQAFgHAAgIQAAgMgIgHQgHgGgLgBQgKABgIAEQgJAFgHAHIgLgNQAJgJAMgFQALgGANAAQANAAAKAFQALAEAGAJQAGAJAAANQAAAPgIAJQgHAKgNAEIAAABQAJACAIAEQAIAFAEAIQAFAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgSAAgNgHg");
	this.shape_1.setTransform(7.9,18.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAWAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIAAgLIABgKIgBAAIgGALg");
	this.shape_2.setTransform(8.1,18.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWBOQgJgEgIgFQgHgEgGgGIALgNQAGAHAKAFQAKAFAOABQAHAAAIgFQAIgEAFgIQAEgJABgLQAAgQgJgJQgKgIgOAAQgHAAgGADQgHACgHADIgKgFIAEhNIBOAAIAAASIg8AAIgEAvIALgEQAHgCAFAAQANAAAMAFQALAFAGALQAHAKAAARQAAARgIAMQgHAMgMAGQgNAHgMAAQgMAAgKgDg");
	this.shape_3.setTransform(8,18.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_4.setTransform(8.3,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQBPQABgeAEgXQAGgZAHgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgJARgGAPQgEARgDATQgCATgBAXg");
	this.shape_5.setTransform(8.3,18.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_6.setTransform(8.2,18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgfBNQgJgEgGgIIALgMQAFAFAGAEQAIADAHAAQAJAAAKgGQAJgHAGgPQAGgPABgXQgIAHgKAGQgKAFgIAAQgVAAgMgMQgMgKgBgZQAAgPAHgMQAHgLAKgHQALgGANAAQANAAANAIQAMAJAHARQAIARAAAZQAAAegJAUQgIATgPAJQgNAJgOAAQgNAAgKgFgAgWg3QgIAJAAAQQAAAQAHAJQAHAHAQAAQAFAAAJgDQAIgFAJgMQgCgXgKgMQgIgMgNAAQgNAAgHAKg");
	this.shape_7.setTransform(8.1,18.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_8.setTransform(8.2,18.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_9.setTransform(8.5,18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},57).to({state:[{t:this.shape_2}]},58).to({state:[{t:this.shape_3}]},58).to({state:[{t:this.shape_4}]},58).to({state:[{t:this.shape_5}]},58).to({state:[{t:this.shape_6}]},58).to({state:[{t:this.shape_7}]},58).to({state:[{t:this.shape_8}]},58).to({state:[{t:this.shape_9}]},64).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.7,35.5);


(lib._00100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape.setTransform(8.2,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_1.setTransform(8.5,18.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgyBRIAAgMIAqgqQAOgTAJgMQAIgPABgNQAAgOgIgIQgHgJgOAAQgKAAgIAGQgJAFgGAIIgNgMQAKgLAMgGQAMgHAPAAQAUABAMAMQANANABAVQAAAPgJAQQgIANgPARIgfAlIANgBIAMgBIAuAAIAAASg");
	this.shape_2.setTransform(8.1,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfBLQgMgGgIgJIAKgOQAIAIAKAFQAKAGANAAQANAAAJgIQAJgIAAgNQAAgJgEgIQgGgHgLgEQgKgEgRAAIAAgNQAQgBAIgDQAKgEAEgHQAFgHAAgIQAAgMgIgHQgHgGgLgBQgKABgIAEQgJAFgHAHIgLgNQAJgJAMgFQALgGANAAQANAAAKAFQALAEAGAJQAGAJAAANQAAAPgIAJQgHAKgNAEIAAABQAJACAIAEQAIAFAEAIQAFAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgSAAgNgHg");
	this.shape_3.setTransform(7.9,18.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAWAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIAAgLIABgKIgBAAIgGALg");
	this.shape_4.setTransform(8.1,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWBOQgJgEgIgFQgHgEgGgGIALgNQAGAHAKAFQAKAFAOABQAHAAAIgFQAIgEAFgIQAEgJABgLQAAgQgJgJQgKgIgOAAQgHAAgGADQgHACgHADIgKgFIAEhNIBOAAIAAASIg8AAIgEAvIALgEQAHgCAFAAQANAAAMAFQALAFAGALQAHAKAAARQAAARgIAMQgHAMgMAGQgNAHgMAAQgMAAgKgDg");
	this.shape_5.setTransform(8,18.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_6.setTransform(8.3,18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQBPQABgeAEgXQAGgZAHgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgJARgGAPQgEARgDATQgCATgBAXg");
	this.shape_7.setTransform(8.3,18.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_8.setTransform(8.2,18.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfBNQgJgEgGgIIALgMQAFAFAGAEQAIADAHAAQAJAAAKgGQAJgHAGgPQAGgPABgXQgIAHgKAGQgKAFgIAAQgVAAgMgMQgMgKgBgZQAAgPAHgMQAHgLAKgHQALgGANAAQANAAANAIQAMAJAHARQAIARAAAZQAAAegJAUQgIATgPAJQgNAJgOAAQgNAAgKgFgAgWg3QgIAJAAAQQAAAQAHAJQAHAHAQAAQAFAAAJgDQAIgFAJgMQgCgXgKgMQgIgMgNAAQgNAAgHAKg");
	this.shape_9.setTransform(8.1,18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape_4}]},10).to({state:[{t:this.shape_5}]},10).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_7}]},10).to({state:[{t:this.shape_8}]},10).to({state:[{t:this.shape_9}]},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.7,35.5);


(lib._32_rewind = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWBOQgJgEgIgFQgHgEgGgGIALgNQAGAHAKAFQAKAFAOABQAHAAAIgFQAIgEAFgIQAEgJABgLQAAgQgJgJQgKgIgOAAQgHAAgGADQgHACgHADIgKgFIAEhNIBOAAIAAASIg8AAIgEAvIALgEQAHgCAFAAQANAAAMAFQALAFAGALQAHAKAAARQAAARgIAMQgHAMgMAGQgNAHgMAAQgMAAgKgDg");
	this.shape.setTransform(8,18.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAWAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIAAgLIABgKIgBAAIgGALg");
	this.shape_1.setTransform(8.1,18.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfBLQgMgGgIgJIAKgOQAIAIAKAFQAKAGANAAQANAAAJgIQAJgIAAgNQAAgJgEgIQgGgHgLgEQgKgEgRAAIAAgNQAQgBAIgDQAKgEAEgHQAFgHAAgIQAAgMgIgHQgHgGgLgBQgKABgIAEQgJAFgHAHIgLgNQAJgJAMgFQALgGANAAQANAAAKAFQALAEAGAJQAGAJAAANQAAAPgIAJQgHAKgNAEIAAABQAJACAIAEQAIAFAEAIQAFAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgSAAgNgHg");
	this.shape_2.setTransform(7.9,18.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgyBRIAAgMIAqgqQAOgTAJgMQAIgPABgNQAAgOgIgIQgHgJgOAAQgKAAgIAGQgJAFgGAIIgNgMQAKgLAMgGQAMgHAPAAQAUABAMAMQANANABAVQAAAPgJAQQgIANgPARIgfAlIANgBIAMgBIAuAAIAAASg");
	this.shape_3.setTransform(8.1,18.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_4.setTransform(8.5,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_5.setTransform(8.2,18.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgfBNQgJgEgGgIIALgMQAFAFAGAEQAIADAHAAQAJAAAKgGQAJgHAGgPQAGgPABgXQgIAHgKAGQgKAFgIAAQgVAAgMgMQgMgKgBgZQAAgPAHgMQAHgLAKgHQALgGANAAQANAAANAIQAMAJAHARQAIARAAAZQAAAegJAUQgIATgPAJQgNAJgOAAQgNAAgKgFgAgWg3QgIAJAAAQQAAAQAHAJQAHAHAQAAQAFAAAJgDQAIgFAJgMQgCgXgKgMQgIgMgNAAQgNAAgHAKg");
	this.shape_6.setTransform(8.1,18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_7.setTransform(8.2,18.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQBPQABgeAEgXQAGgZAHgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgJARgGAPQgEARgDATQgCATgBAXg");
	this.shape_8.setTransform(8.3,18.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_9.setTransform(8.3,18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},52).to({state:[{t:this.shape_2}]},53).to({state:[{t:this.shape_3}]},53).to({state:[{t:this.shape_4}]},53).to({state:[{t:this.shape_5}]},53).to({state:[{t:this.shape_6}]},53).to({state:[{t:this.shape_7}]},53).to({state:[{t:this.shape_8}]},53).to({state:[{t:this.shape_9}]},53).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.7,35.5);


(lib._32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape.setTransform(8.2,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_1.setTransform(8.5,18.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgyBRIAAgMIAqgqQAOgTAJgMQAIgPABgNQAAgOgIgIQgHgJgOAAQgKAAgIAGQgJAFgGAIIgNgMQAKgLAMgGQAMgHAPAAQAUABAMAMQANANABAVQAAAPgJAQQgIANgPARIgfAlIANgBIAMgBIAuAAIAAASg");
	this.shape_2.setTransform(8.1,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfBLQgMgGgIgJIAKgOQAIAIAKAFQAKAGANAAQANAAAJgIQAJgIAAgNQAAgJgEgIQgGgHgLgEQgKgEgRAAIAAgNQAQgBAIgDQAKgEAEgHQAFgHAAgIQAAgMgIgHQgHgGgLgBQgKABgIAEQgJAFgHAHIgLgNQAJgJAMgFQALgGANAAQANAAAKAFQALAEAGAJQAGAJAAANQAAAPgIAJQgHAKgNAEIAAABQAJACAIAEQAIAFAEAIQAFAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgSAAgNgHg");
	this.shape_3.setTransform(7.9,18.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAWAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIAAgLIABgKIgBAAIgGALg");
	this.shape_4.setTransform(8.1,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWBOQgJgEgIgFQgHgEgGgGIALgNQAGAHAKAFQAKAFAOABQAHAAAIgFQAIgEAFgIQAEgJABgLQAAgQgJgJQgKgIgOAAQgHAAgGADQgHACgHADIgKgFIAEhNIBOAAIAAASIg8AAIgEAvIALgEQAHgCAFAAQANAAAMAFQALAFAGALQAHAKAAARQAAARgIAMQgHAMgMAGQgNAHgMAAQgMAAgKgDg");
	this.shape_5.setTransform(8,18.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_6.setTransform(8.3,18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQBPQABgeAEgXQAGgZAHgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgJARgGAPQgEARgDATQgCATgBAXg");
	this.shape_7.setTransform(8.3,18.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_8.setTransform(8.2,18.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfBNQgJgEgGgIIALgMQAFAFAGAEQAIADAHAAQAJAAAKgGQAJgHAGgPQAGgPABgXQgIAHgKAGQgKAFgIAAQgVAAgMgMQgMgKgBgZQAAgPAHgMQAHgLAKgHQALgGANAAQANAAANAIQAMAJAHARQAIARAAAZQAAAegJAUQgIATgPAJQgNAJgOAAQgNAAgKgFgAgWg3QgIAJAAAQQAAAQAHAJQAHAHAQAAQAFAAAJgDQAIgFAJgMQgCgXgKgMQgIgMgNAAQgNAAgHAKg");
	this.shape_9.setTransform(8.1,18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},52).to({state:[{t:this.shape_2}]},53).to({state:[{t:this.shape_3}]},53).to({state:[{t:this.shape_4}]},53).to({state:[{t:this.shape_5}]},53).to({state:[{t:this.shape_6}]},53).to({state:[{t:this.shape_7}]},53).to({state:[{t:this.shape_8}]},53).to({state:[{t:this.shape_9}]},53).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.7,35.5);


(lib._00010_rewind = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape.setTransform(8.2,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQBPQABgeAEgXQAGgZAHgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgJARgGAPQgEARgDATQgCATgBAXg");
	this.shape_1.setTransform(8.3,18.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_2.setTransform(8.3,18.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWBOQgJgEgIgFQgHgEgGgGIALgNQAGAHAKAFQAKAFAOABQAHAAAIgFQAIgEAFgIQAEgJABgLQAAgQgJgJQgKgIgOAAQgHAAgGADQgHACgHADIgKgFIAEhNIBOAAIAAASIg8AAIgEAvIALgEQAHgCAFAAQANAAAMAFQALAFAGALQAHAKAAARQAAARgIAMQgHAMgMAGQgNAHgMAAQgMAAgKgDg");
	this.shape_3.setTransform(8,18.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAWAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIAAgLIABgKIgBAAIgGALg");
	this.shape_4.setTransform(8.1,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfBLQgMgGgIgJIAKgOQAIAIAKAFQAKAGANAAQANAAAJgIQAJgIAAgNQAAgJgEgIQgGgHgLgEQgKgEgRAAIAAgNQAQgBAIgDQAKgEAEgHQAFgHAAgIQAAgMgIgHQgHgGgLgBQgKABgIAEQgJAFgHAHIgLgNQAJgJAMgFQALgGANAAQANAAAKAFQALAEAGAJQAGAJAAANQAAAPgIAJQgHAKgNAEIAAABQAJACAIAEQAIAFAEAIQAFAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgSAAgNgHg");
	this.shape_5.setTransform(7.9,18.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgyBRIAAgMIAqgqQAOgTAJgMQAIgPABgNQAAgOgIgIQgHgJgOAAQgKAAgIAGQgJAFgGAIIgNgMQAKgLAMgGQAMgHAPAAQAUABAMAMQANANABAVQAAAPgJAQQgIANgPARIgfAlIANgBIAMgBIAuAAIAAASg");
	this.shape_6.setTransform(8.1,18.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_7.setTransform(8.5,18.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_8.setTransform(8.2,18.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfBNQgJgEgGgIIALgMQAFAFAGAEQAIADAHAAQAJAAAKgGQAJgHAGgPQAGgPABgXQgIAHgKAGQgKAFgIAAQgVAAgMgMQgMgKgBgZQAAgPAHgMQAHgLAKgHQALgGANAAQANAAANAIQAMAJAHARQAIARAAAZQAAAegJAUQgIATgPAJQgNAJgOAAQgNAAgKgFgAgWg3QgIAJAAAQQAAAQAHAJQAHAHAQAAQAFAAAJgDQAIgFAJgMQgCgXgKgMQgIgMgNAAQgNAAgHAKg");
	this.shape_9.setTransform(8.1,18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.7,35.5);


(lib._00010 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape.setTransform(8.2,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_1.setTransform(8.5,18.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgyBRIAAgMIAqgqQAOgTAJgMQAIgPABgNQAAgOgIgIQgHgJgOAAQgKAAgIAGQgJAFgGAIIgNgMQAKgLAMgGQAMgHAPAAQAUABAMAMQANANABAVQAAAPgJAQQgIANgPARIgfAlIANgBIAMgBIAuAAIAAASg");
	this.shape_2.setTransform(8.1,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfBLQgMgGgIgJIAKgOQAIAIAKAFQAKAGANAAQANAAAJgIQAJgIAAgNQAAgJgEgIQgGgHgLgEQgKgEgRAAIAAgNQAQgBAIgDQAKgEAEgHQAFgHAAgIQAAgMgIgHQgHgGgLgBQgKABgIAEQgJAFgHAHIgLgNQAJgJAMgFQALgGANAAQANAAAKAFQALAEAGAJQAGAJAAANQAAAPgIAJQgHAKgNAEIAAABQAJACAIAEQAIAFAEAIQAFAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgSAAgNgHg");
	this.shape_3.setTransform(7.9,18.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAWAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIAAgLIABgKIgBAAIgGALg");
	this.shape_4.setTransform(8.1,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWBOQgJgEgIgFQgHgEgGgGIALgNQAGAHAKAFQAKAFAOABQAHAAAIgFQAIgEAFgIQAEgJABgLQAAgQgJgJQgKgIgOAAQgHAAgGADQgHACgHADIgKgFIAEhNIBOAAIAAASIg8AAIgEAvIALgEQAHgCAFAAQANAAAMAFQALAFAGALQAHAKAAARQAAARgIAMQgHAMgMAGQgNAHgMAAQgMAAgKgDg");
	this.shape_5.setTransform(8,18.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_6.setTransform(8.3,18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQBPQABgeAEgXQAGgZAHgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgJARgGAPQgEARgDATQgCATgBAXg");
	this.shape_7.setTransform(8.3,18.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_8.setTransform(8.2,18.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfBNQgJgEgGgIIALgMQAFAFAGAEQAIADAHAAQAJAAAKgGQAJgHAGgPQAGgPABgXQgIAHgKAGQgKAFgIAAQgVAAgMgMQgMgKgBgZQAAgPAHgMQAHgLAKgHQALgGANAAQANAAANAIQAMAJAHARQAIARAAAZQAAAegJAUQgIATgPAJQgNAJgOAAQgNAAgKgFgAgWg3QgIAJAAAQQAAAQAHAJQAHAHAQAAQAFAAAJgDQAIgFAJgMQgCgXgKgMQgIgMgNAAQgNAAgHAKg");
	this.shape_9.setTransform(8.1,18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.7,35.5);


(lib._10s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape.setTransform(8.2,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_1.setTransform(8.5,18.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgyBRIAAgMIAqgqQAOgTAJgMQAIgPABgNQAAgOgIgIQgHgJgOAAQgKAAgIAGQgJAFgGAIIgNgMQAKgLAMgGQAMgHAPAAQAUABAMAMQANANABAVQAAAPgJAQQgIANgPARIgfAlIANgBIAMgBIAuAAIAAASg");
	this.shape_2.setTransform(8.1,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfBLQgMgGgIgJIAKgOQAIAIAKAFQAKAGANAAQANAAAJgIQAJgIAAgNQAAgJgEgIQgGgHgLgEQgKgEgRAAIAAgNQAQgBAIgDQAKgEAEgHQAFgHAAgIQAAgMgIgHQgHgGgLgBQgKABgIAEQgJAFgHAHIgLgNQAJgJAMgFQALgGANAAQANAAAKAFQALAEAGAJQAGAJAAANQAAAPgIAJQgHAKgNAEIAAABQAJACAIAEQAIAFAEAIQAFAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgSAAgNgHg");
	this.shape_3.setTransform(7.9,18.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAWAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIAAgLIABgKIgBAAIgGALg");
	this.shape_4.setTransform(8.1,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWBOQgJgEgIgFQgHgEgGgGIALgNQAGAHAKAFQAKAFAOABQAHAAAIgFQAIgEAFgIQAEgJABgLQAAgQgJgJQgKgIgOAAQgHAAgGADQgHACgHADIgKgFIAEhNIBOAAIAAASIg8AAIgEAvIALgEQAHgCAFAAQANAAAMAFQALAFAGALQAHAKAAARQAAARgIAMQgHAMgMAGQgNAHgMAAQgMAAgKgDg");
	this.shape_5.setTransform(8,18.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_6.setTransform(8.3,18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQBPQABgeAEgXQAGgZAHgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgJARgGAPQgEARgDATQgCATgBAXg");
	this.shape_7.setTransform(8.3,18.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_8.setTransform(8.2,18.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfBNQgJgEgGgIIALgMQAFAFAGAEQAIADAHAAQAJAAAKgGQAJgHAGgPQAGgPABgXQgIAHgKAGQgKAFgIAAQgVAAgMgMQgMgKgBgZQAAgPAHgMQAHgLAKgHQALgGANAAQANAAANAIQAMAJAHARQAIARAAAZQAAAegJAUQgIATgPAJQgNAJgOAAQgNAAgKgFgAgWg3QgIAJAAAQQAAAQAHAJQAHAHAQAAQAFAAAJgDQAIgFAJgMQgCgXgKgMQgIgMgNAAQgNAAgHAKg");
	this.shape_9.setTransform(8.1,18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},35).to({state:[{t:this.shape_2}]},37).to({state:[{t:this.shape_3}]},36).to({state:[{t:this.shape_4}]},37).to({state:[{t:this.shape_5}]},36).to({state:[{t:this.shape_6}]},37).to({state:[{t:this.shape_7}]},36).to({state:[{t:this.shape_8}]},37).to({state:[{t:this.shape_9}]},37).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.7,35.5);


(lib._00001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape.setTransform(8.2,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_1.setTransform(8.5,18.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgxBRIAAgMIAogqQAPgTAIgMQAKgPgBgNQAAgOgHgIQgIgJgNAAQgJAAgJAGQgJAFgHAIIgLgMQAJgLAMgGQAMgHAPAAQAUABAMAMQANANAAAVQABAPgJAQQgIANgPARIggAlIAOgBIALgBIAuAAIAAASg");
	this.shape_2.setTransform(8.2,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfBLQgMgGgIgJIAKgOQAIAIAKAFQAKAGANAAQANAAAJgIQAJgIAAgNQAAgJgEgIQgGgHgLgEQgKgEgRAAIAAgNQAQgBAIgDQAKgEAEgHQAFgHAAgIQAAgMgIgHQgHgGgLgBQgKABgIAEQgJAFgHAHIgLgNQAJgJAMgFQALgGANAAQANAAAKAFQALAEAGAJQAGAJAAANQAAAPgIAJQgHAKgNAEIAAABQAJACAIAEQAIAFAEAIQAFAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgSAAgNgHg");
	this.shape_3.setTransform(7.9,18.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAWAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIAAgLIABgKIgBAAIgGALg");
	this.shape_4.setTransform(8.1,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWBOQgJgEgIgFQgHgEgGgGIALgNQAGAHAKAFQAKAFAOABQAHAAAIgFQAIgEAFgIQAEgJABgLQAAgQgJgJQgKgIgOAAQgHAAgGADQgHACgHADIgKgFIAEhNIBOAAIAAASIg8AAIgEAvIALgEQAHgCAFAAQANAAAMAFQALAFAGALQAHAKAAARQAAARgIAMQgHAMgMAGQgNAHgMAAQgMAAgKgDg");
	this.shape_5.setTransform(8,18.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_6.setTransform(8.3,18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQBPQABgeAEgXQAGgZAHgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgJARgGAPQgEARgDATQgCATgBAXg");
	this.shape_7.setTransform(8.3,18.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_8.setTransform(8.2,18.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfBNQgJgEgGgIIALgMQAFAFAGAEQAIADAHAAQAJAAAKgGQAJgHAGgPQAGgPABgXQgIAHgKAGQgKAFgIAAQgVAAgMgMQgMgKgBgZQAAgPAHgMQAHgLAKgHQALgGANAAQANAAANAIQAMAJAHARQAIARAAAZQAAAegJAUQgIATgPAJQgNAJgOAAQgNAAgKgFgAgWg3QgIAJAAAQQAAAQAHAJQAHAHAQAAQAFAAAJgDQAIgFAJgMQgCgXgKgMQgIgMgNAAQgNAAgHAKg");
	this.shape_9.setTransform(8.1,18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.1,10.4,10.3,16.5);


(lib.up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_5531 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5531).call(this.frame_5531).wait(5532));

	// Layer 30
	this.instance = new lib.red_box();
	this.instance.setTransform(352.8,-19959.3,0.022,1,0,0,0,0,7.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1020).to({_off:false},0).to({scaleX:1},1746).wait(8297));

	// Layer 29
	this.instance_1 = new lib.blue_box();
	this.instance_1.setTransform(352.8,-19880.6,0.022,1,0,0,0,0,7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1020).to({_off:false},0).to({regY:7.1,scaleX:1,y:-19880.5},1746).wait(8297));

	// blue_up
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgULIIAA2PIApAAIAAWPg");
	this.shape.setTransform(583.5,-20014.7);

	this.instance_2 = new lib.blue_up();
	this.instance_2.setTransform(583.5,-19943.4,1,1,0,0,0,0,142.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance_2}]},1020).to({state:[{t:this.instance_2}]},1746).to({state:[{t:this.instance_2}]},2765).to({state:[]},1).wait(5531));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1020).to({_off:false},0).to({scaleY:1.13,x:572.7,y:-19943.5},1746).to({scaleY:1.34,x:555.5,y:-19943.4},2765).to({_off:true},1).wait(5531));

	// blue_wide
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AtwDhIAAgrIWSAAQBeAAAzgJQA4gLAfgbQA8g6AAi5IAAh0IArAAIAAB0QAADShLBAQgmAjhFANQg1ALhkAAg");
	this.shape_1.setTransform(497.5,-19920.9);

	this.instance_3 = new lib.blue_wide();
	this.instance_3.setTransform(497.8,-19922,1,1,0,0,0,88.4,21.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.instance_3}]},1020).to({state:[{t:this.instance_3}]},4511).to({state:[]},1).wait(5531));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1020).to({_off:false},0).to({x:469.8},4511).to({_off:true},1).wait(5531));

	// blue
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4.3).p("A6YDTQABgaAAiTQAAhtA6hAQBFhLCNAAMAw5AAA");
	this.shape_2.setTransform(238.3,-19879.4);

	this.instance_4 = new lib.blueline1();
	this.instance_4.setTransform(239.3,-19883.1,1,1,0,0,0,170,17.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.instance_4}]},1020).to({state:[{t:this.instance_4}]},4511).to({state:[]},1).wait(5531));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1020).to({_off:false},0).wait(4511).to({_off:true},1).wait(5531));

	// red_up
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(4.3).p("AAAHKIAAuT");
	this.shape_3.setTransform(507.5,-20033.1);

	this.instance_5 = new lib.red_up();
	this.instance_5.setTransform(507.5,-20017.9,1,1,0,0,0,0,30.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.instance_5}]},1020).to({state:[{t:this.instance_5}]},4511).to({state:[]},1).wait(5531));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1020).to({_off:false},0).wait(4511).to({_off:true},1).wait(5531));

	// red
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(4.3).p("EglGAKGIAApKQAAhwBBg5QBFg+CTAAMBA7AAAQBhAAA0gKQA/gMAigfQBEg9AAjHIAAig");
	this.shape_4.setTransform(269.9,-19922.8);

	this.instance_6 = new lib.redline1();
	this.instance_6.setTransform(271.2,-19922.8,1,1,0,0,0,238.9,64.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.instance_6}]},1020).to({state:[{t:this.instance_6}]},4511).to({state:[]},1).wait(5531));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1020).to({_off:false},0).wait(4511).to({_off:true},1).wait(5531));

	// cylinder
	this.instance_7 = new lib.cylinder_1();
	this.instance_7.setTransform(507.4,-20076.2,1,1,0,0,0,5,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1020).to({scaleX:1,scaleY:1,rotation:-18.3},1746,cjs.Ease.get(-0.5)).to({scaleX:1,scaleY:1,rotation:-33.8,x:507.5,y:-20075.8},1342).to({regX:4.9,scaleX:1,scaleY:1,rotation:-47.5,x:507.4,y:-20076.2},1423).to({_off:true},1).wait(5531));

	// king
	this.instance_8 = new lib.king_1();
	this.instance_8.setTransform(637.4,-20148.3,1,1,0,0,0,214.5,275.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5531).to({_off:true},1).wait(5531));

	// winch
	this.instance_9 = new lib.winch_1();
	this.instance_9.setTransform(470.4,-20126.3,1,1,0,0,0,8.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5531).to({_off:true},1).wait(5531));

	// boom
	this.instance_10 = new lib.boom_1();
	this.instance_10.setTransform(480.3,-20120.6,1,1,0,0,0,12.4,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1020).to({scaleX:1,scaleY:1,rotation:-17.3},1746,cjs.Ease.get(-0.5)).to({scaleX:1,scaleY:1,rotation:-45,x:480.2},2765).to({_off:true},1).wait(5531));

	// cyl fill
	this.instance_11 = new lib.cylinder_fill();
	this.instance_11.setTransform(571.7,-20083.3,0.337,1,-4.2,0,0,-0.1,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1020).to({regX:0,regY:2.1,scaleX:0.53,scaleY:1,rotation:-21.6,x:564,y:-20103.1},1746,cjs.Ease.get(-0.5)).to({regX:0.1,regY:2.3,scaleX:0.67,scaleY:1,rotation:-37.6,x:563,y:-20122.7},1342).to({regY:2.2,scaleX:0.83,scaleY:1,rotation:-49.2,x:552,y:-20135.7},1423).to({_off:true},1).wait(5531));

	// Layer 13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1NFnIAArNMAqbAAAIAALNg");
	mask.setTransform(50,-19820.2);

	// Layer 11
	this.instance_12 = new lib.arrows();
	this.instance_12.setTransform(52.1,-19821,1,1,0,0,0,115.8,38.5);

	this.instance_12.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1019).to({x:-39.7},1747).to({_off:true},2766).wait(5531));

	// TXT
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgRAXQAKgFAGgIQAEgIAAgHIgBAAIgBAAQgFgBgEgDQgEgEAAgGQAAgHAEgEQAFgEAEAAQAIAAAFAGQAEAHAAALQAAAPgIAMQgJAMgNAGg");
	this.shape_5.setTransform(-685.4,-20160.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgQA5QgHgIgBgLQABgLAHgHQAGgIAKAAQAKAAAIAIQAHAHgBALQABALgHAIQgIAHgKAAQgKAAgGgHgAgQgTQgHgHgBgLQABgLAHgIQAGgHAKAAQAKAAAIAHQAHAIgBALQABALgHAHQgIAIgKAAQgKAAgGgIg");
	this.shape_6.setTransform(-803,-20302.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AggBOQgQgGgNgMIAYgdQAKAHAKAEQAKAFAHAAQAJAAAEgDQAFgDAAgGQAAgFgGgDQgGgEgIgEIgUgIQgJgDgHgHQgIgEgFgJQgEgJAAgLQAAgOAIgMQAIgLANgHQAOgHAQAAQANAAAPAGQAOAFALALIgVAbQgIgGgIgDQgHgDgJAAQgHAAgEADQgEADAAAFQAAAGAGADIAPAIIAUAHQAPAGAJAJQAIALAAARQAAAOgIALQgHAMgOAHQgPAHgSABQgPAAgRgGg");
	this.shape_7.setTransform(-814,-20304.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUBRIAAh9IgrAAIAAgkIB/AAIAAAkIgrAAIAAB9g");
	this.shape_8.setTransform(-827.6,-20304.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUBRIAAihIApAAIAAChg");
	this.shape_9.setTransform(-838.6,-20304.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAWBRIgjhJIgPgiIgBAAIADAcQADAQAAAQIAAAvIgqAAIAAihIAsAAIAjBJIAPAiIABAAIgDgTIgCgUIgBgVIAAgvIAqAAIAAChg");
	this.shape_10.setTransform(-851,-20304.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgxA+QgRgUAAgpIAAhSIAsAAIAABXQAAAVAFAJQAHAJAKAAQANAAAGgJQAGgJAAgVIAAhXIAqAAIAABSQgBApgPAUQgRAUgiAAQggAAgRgUg");
	this.shape_11.setTransform(-867.8,-20304.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgxA+QgQgUAAgpIAAhSIAqAAIAABXQABAVAFAJQAGAJALAAQAMAAAHgJQAGgJAAgVIAAhXIApAAIAABSQAAApgPAUQgRAUgiAAQggAAgRgUg");
	this.shape_12.setTransform(-889.8,-20304.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag0BRIAAihIBnAAIAAAkIg8AAIAAAaIAzAAIAAAiIgzAAIAAAdIA+AAIAAAkg");
	this.shape_13.setTransform(-905,-20304.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAdBHQgJgOgBgZQABgYAJgMQAKgNASAAQAQAAALANQAKAMAAAYQAAAZgKAOQgLANgQAAQgSAAgKgNgAApADQgGAKAAATQAAAUAGAKQAGAKAKAAQAJAAAGgKQAGgKAAgUQAAgTgGgKQgGgHgJAAQgKAAgGAHgAgzBUIBYioIAOAAIhYCogAhTAEQgKgLAAgZQAAgZAKgNQAKgNARgBQARABAKANQAKANABAZQgBAZgKALQgKAOgRAAQgRAAgKgOgAhHg9QgGAJAAAUQAAAUAGAJQAFAIAKABQAKgBAGgIQAGgJAAgUQAAgUgGgJQgGgJgKAAQgKAAgFAJg");
	this.shape_14.setTransform(-649.8,-20250.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAdBHQgJgNgBgaQABgYAJgMQAKgNASAAQAQAAALANQAKAMAAAYQAAAagKANQgLANgQAAQgSAAgKgNgAApADQgGAKAAATQAAAUAGAKQAGAKAKAAQAJAAAGgKQAGgKAAgUQAAgTgGgKQgGgIgJAAQgKAAgGAIgAgzBUIBYioIAOAAIhYCogAhTAEQgKgLAAgZQAAgZAKgNQAKgNARgBQARABAKANQAKANABAZQgBAZgKALQgKAOgRAAQgRAAgKgOgAhHg9QgGAKAAATQAAATAGAKQAFAJAKgBQAKABAGgJQAGgKAAgTQAAgTgGgKQgGgKgKAAQgKAAgFAKg");
	this.shape_15.setTransform(-649.8,-20210.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAbBYIghg6IgWAaIAAAgIgVAAIAAivIAVAAIAAB2IAAAAIAyg+IAXAAIgpAvIAuBIg");
	this.shape_16.setTransform(-831.4,-20251.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgTA4QgNgIgHgOQgIgOAAgUQAAgTAIgOQAIgOAOgIQANgHAOAAQAMAAAIAEQAJAEAGAGIgKAOQgFgFgGgDQgGgDgIAAQgKAAgHAGQgJAGgFAKQgEALgBAMQABAVAKAMQAKANAPAAQAJAAAHgDQAHgEAGgFIAJANQgJAIgKAEQgKAEgLAAQgOAAgNgHg");
	this.shape_17.setTransform(-843.9,-20248.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgJBWIAAh4IATAAIAAB4gAgIg+QgEgEgBgGQABgGAEgEQAEgDAEAAQAGAAAEADQAEAEAAAGQAAAGgEAEQgEADgGAAQgEAAgEgDg");
	this.shape_18.setTransform(-853,-20251.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgLBDQgHgLAAgSIAAhBIgSAAIAAgPIATgCIACgiIAQAAIAAAiIAgAAIAAARIggAAIAABCQgBALAFAGQAEAGAKAAIAHgBIAHgCIAEAPIgLADIgLACQgSgBgIgLg");
	this.shape_19.setTransform(-860.1,-20250.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgXA6QgMgEgJgIIALgNQAIAGAIAEQAJAEAJAAQALAAAGgFQAHgGgBgIQABgGgFgEQgEgEgGgDIgMgGIgQgFQgJgEgFgHQgGgHAAgKQABgJAEgIQAGgIAJgFQAJgEALAAQAMAAAJAEQAKAEAHAGIgKANQgGgFgHgDQgGgDgJAAQgJAAgFAFQgGAFAAAHQAAAGAEAEIAKAGIAMAFIAQAIQAJACAGAHQAFAHABALQgBAKgFAIQgFAIgKAFQgKAFgOAAQgLAAgMgFg");
	this.shape_20.setTransform(-869.8,-20248.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgqBWIgHgCIAEgQIAFABIAEABQALgBAHgHQAGgHAEgLIADgKIgxh3IAVAAIAZBDIAGARIAEAPIABAAIAFgPIAFgRIAWhDIAUAAIguCBQgEAMgFAKQgFAJgIAGQgKAFgLAAIgIAAg");
	this.shape_21.setTransform(-880.8,-20246.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgaA4QgNgIgIgOQgIgOAAgUQAAgTAIgOQAIgOANgIQAMgHAOAAQAPAAAMAHQANAIAIAOQAIAOAAATQAAAUgIAOQgIAOgNAIQgMAHgPAAQgOAAgMgHgAgRgnQgIAGgEAKQgEALgBAMQABAVAJAMQAKANAOAAQAPAAAKgNQAJgMABgVQAAgMgFgLQgEgKgIgGQgIgGgKAAQgJAAgIAGg");
	this.shape_22.setTransform(-893.4,-20248.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgaBMQgLgHgHgNIAPgKQAFAKAHAEQAHAEAJAAQALAAAHgIQAHgIAAgTIAAhvIAVAAIAABxQAAAPgFAMQgFALgKAHQgKAGgPABQgOAAgMgHg");
	this.shape_23.setTransform(-906.8,-20250.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgVA4QgOgIgHgOQgIgOAAgUQAAgSAIgOQAHgPANgHQAMgIAMAAQAYAAAMAPQANAPAAAbIAAAFIAAAEIhRAAQABAUAMALQAKALAQABQAIAAAIgDQAIgCAGgFIAHAOQgIAFgJAEQgKADgNAAQgOAAgNgHgAAhgIQAAgSgIgKQgIgKgOAAQgGAAgIAFQgIAEgEAJQgFAIgCAMIA/AAIAAAAg");
	this.shape_24.setTransform(-762.3,-20208.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKA8Igsh3IAWAAIAWBDIAGASIAEASIABAAIAFgSIAFgSIAYhDIAUAAIgrB3g");
	this.shape_25.setTransform(-774.3,-20208.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgKBTQgFgHAAgOIAAiXIASAAIAACZQAAAFACACQAAAAABABQAAAAABAAQAAABABAAQABAAAAAAIACAAIADgBIACAQIgFACIgHAAQgJAAgFgHg");
	this.shape_26.setTransform(-782.9,-20210.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgdA7QgIgEgEgIQgFgHAAgLQAAgUASgJQASgLAlgEQAAgIgDgHQgBgGgGgFQgGgEgKAAQgIAAgJAEQgKAEgHAFIgHgOQAIgGAMgFQAMgFANAAQAWAAAKAOQAKANAAAXIAABIIgQAAIgDgOIAAAAQgJAHgKAFQgJAFgKAAQgLAAgIgEgAgEADQgMAFgFAGQgFAFAAAIQAAAKAHAFQAFAFAJAAQAHAAAIgEQAIgFAJgIIAAgfQgUABgLADg");
	this.shape_27.setTransform(-793.2,-20208.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgKA8Igsh3IAVAAIAXBDIAGASIAEASIAAAAIAGgSIAGgSIAWhDIAVAAIgrB3g");
	this.shape_28.setTransform(-804.7,-20208.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgJALQgEgEAAgHQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAHgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_29.setTransform(-818.8,-20203.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgzBXIAAirIARAAIABAPIABAAQAJgHAJgGQAKgEAIgBQAQAAALAIQAKAIAGANQAFAOAAAUQAAAVgHAMQgHAPgMAHQgLAIgPAAQgGAAgJgEQgIgDgIgHIAAAVIAAApgAgOhBQgIAEgJAIIAAA+QAJAHAHADQAIADAGgBQANABAJgNQAKgLAAgWQABgVgIgMQgHgMgRAAQgGAAgIAEg");
	this.shape_30.setTransform(-828.2,-20205.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgaA4QgNgIgIgOQgIgOAAgUQAAgTAIgOQAIgOANgIQAMgHAOAAQAPAAAMAHQANAIAIAOQAIAOAAATQAAAUgIAOQgIAOgNAIQgMAHgPAAQgOAAgMgHgAgRgnQgIAGgEAKQgEALgBAMQABAVAJAMQAKANAOAAQAPAAAKgNQAJgMABgVQAAgMgFgLQgEgKgIgGQgIgGgKAAQgJAAgIAGg");
	this.shape_31.setTransform(-842.3,-20208.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AggA+IAAh4IARAAIACAWIABAAQAGgLAGgHQAKgHAKAAIAHABIAGACIgEASIgFgCIgHAAQgHAAgJAGQgGAHgHAPIAABMg");
	this.shape_32.setTransform(-852.1,-20208.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag0BXIAAirIARAAIADAPIAAAAQAIgHAKgGQAKgEAJgBQAQAAAKAIQALAIAFANQAGAOAAAUQAAAVgHAMQgIAPgMAHQgMAIgOAAQgGAAgIgEQgJgDgIgHIAAAVIAAApgAgOhBQgIAEgJAIIAAA+QAIAHAIADQAHADAHgBQANABAKgNQAJgLABgWQAAgVgIgMQgIgMgQAAQgGAAgIAEg");
	this.shape_33.setTransform(-864.1,-20205.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgbAHIAAgNIA3AAIAAANg");
	this.shape_34.setTransform(-875.3,-20208.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ag4BSIAAijIAxAAQAPAAAMAFQANADAHAKQAHAIAAAOQAAANgHAJQgHAKgOAEIAAABQASADAKAIQAKAJAAARQAAAQgIALQgIALgOAFQgOAFgRABgAgjBBIAcAAQAUAAALgIQAMgIAAgRQAAgPgLgHQgMgHgTAAIgdAAgAgjgLIAYAAQATAAAKgHQAJgHAAgOQAAgNgKgGQgKgGgRAAIgZAAg");
	this.shape_35.setTransform(-886,-20210.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAwBSIAAhZIABgPIABgSIABgPIgBAAIgOAkIgfBUIgKAAIgghUIgNgkIgBAAIABAPIACASIAAAPIAABZIgTAAIAAijIAYAAIAgBWIALAiIABAAIALgiIAfhWIAZAAIAACjg");
	this.shape_36.setTransform(-903,-20210.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgWA4QgMgIgIgOQgIgOAAgUQAAgSAIgOQAIgPAMgHQAMgIANAAQAXAAANAPQAMAPAAAbIAAAFIAAAEIhRAAQABAUALALQALALAQABQAIAAAIgDQAHgCAHgFIAHAOQgIAFgKAEQgJADgMAAQgPAAgOgHgAAhgIQAAgSgIgKQgHgKgPAAQgHAAgHAFQgHAEgFAJQgFAIgCAMIA/AAIAAAAg");
	this.shape_37.setTransform(-819.6,-20167.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgKBTQgFgHAAgOIAAiXIASAAIAACZQAAAFACACQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAIACAAIADgBIACAQIgFACIgHAAQgJAAgFgHg");
	this.shape_38.setTransform(-828.6,-20170.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgeBWQgLgEgHgHQgGgHAAgLQAAgIAEgHQAFgHAIgGIAAAAQgEgDgDgFQgDgFAAgHQAAgIAEgEQAEgFAFgEIAAgBQgGgFgFgIQgFgIAAgLQAAgOAHgJQAGgKAKgFQALgGAMAAIAIABIAHACIAqAAIAAAQIgYAAQAEAEADAHQADAGgBAIQABANgGAKQgHAJgJAFQgKAFgLAAIgKgBIgIgDIgFAGQgDACAAAFQAAAFAEAEQAFAEAMAAIAWAAQAVAAALAHQALAHAAAPQgBALgHAKQgIAJgOAGQgNAGgRAAQgPAAgLgEgAgiAsQgCAFgBAFQABAKAJAGQAKAFAQAAQAKAAAIgDQAJgEAFgFQAEgGABgGQAAgJgHgDQgGgDgMAAIgTAAIgIgBIgIgBQgGAFgEAFgAgWhCQgIAHAAAOQAAANAIAIQAHAHALABQAJgBAHgHQAHgIABgNQgBgOgHgHQgHgIgJAAQgLAAgHAIg");
	this.shape_39.setTransform(-838.2,-20165);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAcA+IAAhIQAAgRgGgIQgGgIgLAAQgIAAgHAFQgIAFgJAJIAABWIgUAAIAAh4IARAAIACASIAAAAQAJgJAKgGQAJgFALgBQATAAAJAMQAJANAAAXIAABLg");
	this.shape_40.setTransform(-851.7,-20167.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgdA7QgIgEgEgIQgFgHAAgLQAAgUASgJQASgLAkgEQABgIgCgHQgDgGgFgFQgGgEgKAAQgIAAgJAEQgJAEgIAFIgIgOQAJgGAMgFQAMgFANAAQAWAAAKAOQAKANAAAXIAABIIgRAAIgBgOIgBAAQgJAHgKAFQgJAFgKAAQgKAAgJgEgAgEADQgMAFgFAGQgFAFABAIQgBAKAGAFQAGAFAJAAQAHAAAIgEQAIgFAIgIIAAgfQgUABgKADg");
	this.shape_41.setTransform(-865.2,-20167.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgbAHIAAgNIA3AAIAAANg");
	this.shape_42.setTransform(-875.3,-20167.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("Ag4BRIAAihIAxAAQAPgBAMAFQANADAHAJQAHAJAAAOQAAANgHAJQgHAKgOAEIAAABQASADAKAIQAKAJAAARQAAARgIALQgIAKgOAFQgOAFgRAAgAgjBBIAcAAQAUAAALgIQAMgIAAgRQAAgOgLgIQgMgHgTAAIgdAAgAgjgLIAYAAQATAAAKgHQAJgHAAgOQAAgNgKgGQgKgGgRAAIgZAAg");
	this.shape_43.setTransform(-886,-20169.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAwBRIAAhXIABgRIAAgRIACgPIgCAAIgMAkIggBUIgKAAIgfhUIgNgkIgCAAIACAPIABARIAAARIAABXIgTAAIAAihIAYAAIAgBVIALAiIABAAIALgiIAghVIAYAAIAAChg");
	this.shape_44.setTransform(-903,-20169.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgRAXQAKgEAGgIQAEgJAAgIIgBAAIgBAAQgFAAgEgDQgEgDAAgIQAAgHAEgDQAFgEAEAAQAIAAAFAHQAEAGAAALQAAAOgIANQgJALgNAHg");
	this.shape_45.setTransform(310.6,-20223.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgaAmQgKgOAAgYQAAgYAKgNQAKgNAQAAQAQAAAKANQAKANABAYQgBAYgKAOQgKANgQAAQgQAAgKgNgAgOgcQgGAKAAASQAAATAGAKQAFAKAJAAQAJAAAGgKQAGgKAAgTQAAgSgGgKQgGgJgJAAQgJAAgFAJg");
	this.shape_46.setTransform(-655.5,-20173.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).to({state:[]},5532).wait(5531));

	// Layer 19
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_47.setTransform(-674.6,-20250.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_48.setTransform(-687.1,-20250.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_49.setTransform(-699.3,-20250.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgGA4IAAgxIguAAIAAgNIAuAAIAAgxIANAAIAAAxIAuAAIAAANIguAAIAAAxg");
	this.shape_50.setTransform(-712,-20250.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_51.setTransform(-674.6,-20209.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_52.setTransform(-687.1,-20209.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_53.setTransform(-699.3,-20209.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgGA4IAAgwIguAAIAAgOIAuAAIAAgxIANAAIAAAxIAuAAIAAAOIguAAIAAAwg");
	this.shape_54.setTransform(-712,-20210.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]}).to({state:[]},5532).wait(5531));

	// 1000
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_55.setTransform(-712.4,-20169.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_56.setTransform(-712.2,-20169.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgyBRIAAgMIAqgqQAOgTAJgMQAIgPAAgNQAAgOgHgIQgIgJgNAAQgKAAgIAGQgJAFgHAIIgMgMQAKgLAMgGQALgHAQAAQAUABAMAMQANANAAAVQAAAPgIAQQgIANgPARIgfAlIANgBIAMgBIAtAAIAAASg");
	this.shape_57.setTransform(-712.5,-20169.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgeBLQgNgGgIgJIAKgOQAIAIAJAFQAKAGAOAAQANAAAJgIQAJgIAAgNQAAgJgFgIQgFgHgLgEQgKgEgRAAIAAgNQAQgBAIgDQAKgEAEgHQAEgHAAgIQAAgMgHgHQgHgGgLgBQgKABgIAEQgJAFgHAHIgLgNQAJgJALgFQAMgGANAAQANAAALAFQAKAEAGAJQAGAJABANQgBAPgHAJQgJAKgNAEIAAABQAKACAIAEQAIAFAFAIQAEAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgRAAgNgHg");
	this.shape_58.setTransform(-712.7,-20169.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBChkIAYAAIAABhIAVAAIAAAQIgVAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIAAgLIABgKIgBAAIgGALg");
	this.shape_59.setTransform(-712.6,-20169.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgWBOQgKgEgHgFQgHgEgFgGIAJgNQAIAHAJAFQAJAFAOABQAJAAAIgFQAHgEAFgIQAFgJAAgLQgBgQgIgJQgKgIgOAAQgHAAgGADQgHACgGADIgLgFIAEhNIBOAAIAAASIg7AAIgEAvIAKgEQAGgCAGAAQANAAAMAFQALAFAGALQAHAKAAARQAAARgIAMQgHAMgMAGQgMAHgNAAQgMAAgKgDg");
	this.shape_60.setTransform(-712.7,-20169.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_61.setTransform(-712.3,-20169.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgRBPQACgeAFgXQAFgZAHgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgKARgFAPQgEARgDATQgDATgBAXg");
	this.shape_62.setTransform(-712.4,-20169.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_63.setTransform(-712.4,-20169.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55}]}).to({state:[{t:this.shape_55}]},1020).to({state:[{t:this.shape_56}]},529).to({state:[{t:this.shape_57}]},530).to({state:[{t:this.shape_58}]},530).to({state:[{t:this.shape_59}]},530).to({state:[{t:this.shape_60}]},530).to({state:[{t:this.shape_61}]},530).to({state:[{t:this.shape_62}]},530).to({state:[{t:this.shape_63}]},530).to({state:[]},273).wait(5531));

	// 100
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_64.setTransform(-695.9,-20169.6);

	this.instance_13 = new lib._32();
	this.instance_13.setTransform(-695.8,-20170.5,1,1,0,0,0,8.3,17.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgWBOQgJgEgIgFQgIgEgFgGIALgNQAHAHAJAFQAJAFAPABQAHAAAIgFQAIgEAFgIQAEgJABgLQAAgQgKgJQgJgIgOAAQgIAAgGADQgGACgHADIgLgFIAGhNIBNAAIAAASIg8AAIgEAvIALgEQAGgCAGAAQANAAAMAFQALAFAGALQAHAKABARQgBARgHAMQgIAMgMAGQgMAHgNAAQgMAAgKgDg");
	this.shape_65.setTransform(-696.2,-20169.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64}]}).to({state:[{t:this.instance_13}]},1020).to({state:[{t:this.shape_65}]},4505).to({state:[]},7).wait(5531));

	// 10
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_66.setTransform(-674.8,-20169.3);

	this.instance_14 = new lib._00010();
	this.instance_14.setTransform(-674.7,-20170.3,1,1,0,0,0,8.3,17.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_67.setTransform(-674.8,-20169.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66}]}).to({state:[{t:this.instance_14}]},1020).to({state:[{t:this.shape_67}]},4511).to({state:[]},1).wait(5531));

	// Layer 12
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AA/A+IAAhIQAAgRgGgIQgFgIgLAAQgIAAgHAFQgIAEgIAKIAABWIgTAAIAAhIQAAgRgFgIQgGgIgLAAQgHAAgIAFQgHAEgJAKIAABWIgUAAIAAh4IARAAIACASIAAAAQAIgJAKgGQAJgFALgBQAOAAAIAHQAGAGADALQAKgLAKgGQAKgHAKAAQATAAAJAMQAJANAAAXIAABLg");
	this.shape_68.setTransform(420.3,-20229.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAcBZIAAhKQAAgPgGgIQgGgIgLAAQgIAAgHAEQgIAFgJAHIAABZIgUAAIAAiwIAUAAIAAAwIAAAZQAIgJAKgFQAJgGALAAQATAAAJAMQAJAMAAAVIAABOg");
	this.shape_69.setTransform(403.2,-20232.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgaA4QgNgIgIgOQgIgOAAgUQAAgTAIgOQAIgOANgIQAMgHAOAAQAPAAAMAHQANAIAIAOQAIAOAAATQAAAUgIAOQgIAOgNAIQgMAHgPAAQgOAAgMgHgAgRgnQgIAGgEAKQgEALgBAMQABAVAJAMQAKANAOAAQAPAAAKgNQAJgMABgVQAAgMgFgLQgEgKgIgGQgIgGgKAAQgJAAgIAGg");
	this.shape_70.setTransform(389.5,-20229.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAcBZIgig7IgWAbIAAAgIgVAAIAAiwIAVAAIAAB2IAAAAIAyg+IAWAAIgoAvIAuBJg");
	this.shape_71.setTransform(377.9,-20232.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAsBRIgPgxIg6AAIgQAxIgVAAIA4ihIAVAAIA4ChgAAYAPIgIgYIgIgbIgIgcIAAAAIgHAcIgIAbIgIAYIAvAAg");
	this.shape_72.setTransform(136.9,-20169.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AA/A+IAAhIQAAgRgGgIQgFgIgLAAQgIAAgHAFQgIAEgIAKIAABWIgTAAIAAhIQAAgRgFgIQgGgIgLAAQgHAAgIAFQgHAEgJAKIAABWIgUAAIAAh4IARAAIACASIAAAAQAIgJAKgGQAJgFALgBQAOAAAIAHQAGAGADALQAKgLAKgGQAKgHAKAAQATAAAJAMQAJANAAAXIAABLg");
	this.shape_73.setTransform(119.8,-20167.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgLBRIg0ihIAWAAIAaBWIAJAbIAGAbIABAAIAIgbIAHgbIAahWIAWAAIg0Chg");
	this.shape_74.setTransform(351.8,-20346.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgLBRIg0ihIAWAAIAbBWIAHAbIAHAbIABAAIAHgbIAJgbIAahWIAVAAIg0Chg");
	this.shape_75.setTransform(115.8,-20346.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]}).to({state:[]},5532).wait(5531));

	// 10000
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_76.setTransform(302,-20232);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_77.setTransform(302.1,-20232);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgxBRIAAgMIApgqQAOgTAJgMQAIgPAAgNQAAgOgHgIQgIgJgNAAQgJAAgJAGQgJAFgHAIIgMgMQAKgLAMgGQALgHAQAAQAUABANAMQAMANABAVQgBAPgIAQQgIANgPARIggAlIAOgBIAMgBIAtAAIAAASg");
	this.shape_78.setTransform(302.5,-20232.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgeBLQgNgGgIgJIALgOQAHAIAJAFQALAGANAAQANAAAJgIQAJgIAAgNQABgJgGgIQgFgHgLgEQgKgEgSAAIAAgNQARgBAIgDQAKgEAFgHQADgHAAgIQAAgMgHgHQgHgGgLgBQgKABgIAEQgJAFgHAHIgLgNQAJgJAMgFQALgGANAAQANAAALAFQAKAEAGAJQAHAJAAANQgBAPgIAJQgIAKgMAEIAAABQAJACAIAEQAIAFAEAIQAFAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgSAAgMgHg");
	this.shape_79.setTransform(302.2,-20232);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAWAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIAAgLIABgKIgBAAIgGALg");
	this.shape_80.setTransform(301.9,-20232);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76,p:{x:302}}]}).to({state:[{t:this.shape_76,p:{x:302.1}}]},2766).to({state:[{t:this.shape_77}]},469).to({state:[{t:this.shape_78}]},577).to({state:[{t:this.shape_79}]},582).to({state:[{t:this.shape_80}]},582).to({state:[]},556).wait(5531));

	// 1000
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgxBRIAAgMIApgqQAOgTAIgMQAJgPAAgNQAAgOgHgIQgIgJgNAAQgKAAgIAGQgJAFgHAIIgMgMQAKgLAMgGQAMgHAPAAQAUABAMAMQANANAAAVQAAAPgIAQQgIANgPARIggAlIAOgBIAMgBIAuAAIAAASg");
	this.shape_81.setTransform(320.9,-20232.1);

	this.instance_15 = new lib._582();
	this.instance_15.setTransform(321.2,-20232.9,1,1,0,0,0,8.3,17.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgQBPQAAgeAGgXQAFgZAHgTQAKgVAPgWIhNAAIAAgRIBlAAIAAAMQgOASgKARQgJARgEAPQgGARgCATQgDATgBAXg");
	this.shape_82.setTransform(321.1,-20232);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81}]}).to({state:[{t:this.instance_15}]},2766).to({state:[{t:this.shape_82}]},2650).to({state:[]},116).wait(5531));

	// 100
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgWBOQgJgEgIgFQgHgEgGgGIAKgNQAHAHAKAFQAKAFAOABQAIAAAIgFQAHgEAFgIQAFgJAAgLQgBgQgJgJQgJgIgOAAQgIAAgFADQgHACgGADIgMgFIAGhNIBNAAIAAASIg7AAIgFAvIAMgEQAFgCAGAAQAOAAALAFQALAFAGALQAHAKABARQgBARgIAMQgHAMgMAGQgMAHgNAAQgMAAgKgDg");
	this.shape_83.setTransform(337.3,-20231.8);

	this.instance_16 = new lib._00100();
	this.instance_16.setTransform(337.7,-20232.9,1,1,0,0,0,8.3,17.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgWBOQgJgEgIgFQgHgEgGgGIALgNQAHAHAJAFQAKAFANABQAJAAAIgFQAHgEAFgIQAEgJAAgLQAAgQgJgJQgJgIgOAAQgIAAgGADQgGACgHADIgKgFIAEhNIBOAAIAAASIg7AAIgEAvIALgEQAFgCAGAAQAOAAALAFQALAFAGALQAHAKABARQgBARgIAMQgHAMgMAGQgNAHgMAAQgMAAgKgDg");
	this.shape_84.setTransform(337.3,-20231.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83}]}).to({state:[{t:this.instance_16}]},2766).to({state:[{t:this.shape_84}]},2650).to({state:[]},116).wait(5531));

	// 10
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_85.setTransform(354.1,-20231.7);

	this.instance_17 = new lib._00010();
	this.instance_17.setTransform(354.3,-20232.7,1,1,0,0,0,8.3,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85,p:{x:354.1}}]}).to({state:[{t:this.instance_17}]},2766).to({state:[{t:this.shape_85,p:{x:354.2}}]},2650).to({state:[]},116).wait(5531));

	// 10v right
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_86.setTransform(330.1,-20346);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_87.setTransform(330.3,-20346);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgyBRIAAgMIAqgqQAOgTAIgMQAKgPgBgNQAAgOgHgIQgHgJgOAAQgKAAgIAGQgJAFgHAIIgLgMQAJgLAMgGQAMgHAPAAQAUABAMAMQANANABAVQgBAPgIAQQgIANgPARIggAlIAOgBIAMgBIAtAAIAAASg");
	this.shape_88.setTransform(330,-20346.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgeBLQgNgGgIgJIAKgOQAIAIAKAFQAJAGAOAAQANAAAJgIQAJgIAAgNQABgJgFgIQgGgHgKgEQgLgEgSAAIAAgNQARgBAIgDQAKgEAEgHQAEgHAAgIQAAgMgHgHQgHgGgLgBQgKABgIAEQgJAFgHAHIgLgNQAJgJALgFQAMgGANAAQANAAAKAFQALAEAGAJQAGAJAAANQAAAPgHAJQgJAKgMAEIAAABQAJACAIAEQAIAFAEAIQAFAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgRAAgNgHg");
	this.shape_89.setTransform(329.8,-20346);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAXAAIAABhIAVAAIAAAQIgVAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIABgLIAAgKIgBAAIgGALg");
	this.shape_90.setTransform(329.9,-20346);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgWBOQgKgEgHgFQgIgEgEgGIAJgNQAIAHAJAFQAKAFANABQAIAAAJgFQAHgEAFgIQAFgJAAgLQAAgQgKgJQgJgIgNAAQgIAAgGADQgHACgHADIgLgFIAGhNIBNAAIAAASIg8AAIgDAvIAKgEQAHgCAFAAQAOAAALAFQALAFAHALQAGAKABARQgBARgIAMQgHAMgMAGQgNAHgMAAQgMAAgKgDg");
	this.shape_91.setTransform(329.8,-20345.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_92.setTransform(330.2,-20346);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgRBPQACgeAFgXQAEgZAIgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgJARgFAPQgFARgDATQgDATAAAXg");
	this.shape_93.setTransform(330.1,-20346);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_94.setTransform(330.1,-20346);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgfBNQgJgEgGgIIALgMQAFAFAGAEQAHADAIAAQAJAAAKgGQAJgHAGgPQAGgPABgXQgIAHgKAGQgKAFgIAAQgVAAgMgMQgMgKgBgZQABgPAGgMQAGgLALgHQALgGAMAAQAPAAAMAIQAMAJAHARQAIARAAAZQgBAegIAUQgIATgPAJQgNAJgOAAQgNAAgKgFgAgWg3QgIAJAAAQQAAAQAHAJQAIAHAOAAQAGAAAJgDQAIgFAJgMQgCgXgKgMQgIgMgOAAQgLAAgIAKg");
	this.shape_95.setTransform(330,-20346);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_86}]}).to({state:[{t:this.shape_86}]},2766).to({state:[{t:this.shape_87,p:{x:330.3}}]},276).to({state:[{t:this.shape_88}]},275).to({state:[{t:this.shape_89}]},273).to({state:[{t:this.shape_90}]},276).to({state:[{t:this.shape_91}]},275).to({state:[{t:this.shape_92}]},275).to({state:[{t:this.shape_93}]},274).to({state:[{t:this.shape_94}]},250).to({state:[{t:this.shape_95}]},275).to({state:[{t:this.shape_87,p:{x:317.9}},{t:this.shape_86}]},276).to({state:[]},41).wait(5531));

	// 10000
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_96.setTransform(263.1,-20520.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_97.setTransform(263.3,-20520.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgxBRIAAgMIApgqQAOgTAJgMQAIgPABgNQAAgOgIgIQgIgJgNAAQgKAAgIAGQgJAFgHAIIgLgMQAJgLAMgGQALgHAQAAQAUABANAMQAMANABAVQAAAPgJAQQgIANgPARIggAlIAOgBIALgBIAuAAIAAASg");
	this.shape_98.setTransform(263,-20520.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_96,p:{y:-20520.3}}]}).to({state:[{t:this.shape_96,p:{y:-20520.6}}]},2766).to({state:[{t:this.shape_97}]},998).to({state:[{t:this.shape_98}]},1000).to({state:[]},768).wait(5531));

	// 1000
	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_99.setTransform(279.6,-20520.3);

	this.instance_18 = new lib._01000();
	this.instance_18.setTransform(279.7,-20521.5,1,1,0,0,0,8.3,17.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgQBPQABgeAEgXQAGgZAHgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgKARgFAPQgFARgCATQgDATAAAXg");
	this.shape_100.setTransform(279.6,-20520.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_99}]}).to({state:[{t:this.instance_18}]},2766).to({state:[{t:this.shape_100}]},2698).to({state:[]},68).wait(5531));

	// 100
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_101.setTransform(296.1,-20520.3);

	this.instance_19 = new lib._00100();
	this.instance_19.setTransform(296.2,-20521.5,1,1,0,0,0,8.3,17.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_102.setTransform(296.2,-20520.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_101}]}).to({state:[{t:this.instance_19}]},2766).to({state:[{t:this.shape_102}]},2758).to({state:[]},8).wait(5531));

	// 10
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_103.setTransform(312.7,-20520);

	this.instance_20 = new lib._00010();
	this.instance_20.setTransform(312.8,-20521.3,1,1,0,0,0,8.3,17.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAWAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIABgLIAAgKIgBAAIgGALg");
	this.shape_104.setTransform(312.5,-20520.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_103}]}).to({state:[{t:this.instance_20}]},2766).to({state:[{t:this.shape_104}]},2763).to({state:[]},3).wait(5531));

	// 1
	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_105.setTransform(329.2,-20520);

	this.instance_21 = new lib._00001();
	this.instance_21.setTransform(329.3,-20521.3,1,1,0,0,0,8.3,17.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_106.setTransform(329.2,-20520.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_105}]}).to({state:[{t:this.instance_21}]},2766).to({state:[{t:this.shape_106}]},2765).to({state:[]},1).wait(5531));

	// 10v left
	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_107.setTransform(90.1,-20346);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_108.setTransform(90.3,-20346);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgyBRIAAgMIAqgqQAOgTAIgMQAKgPAAgNQAAgOgIgIQgHgJgOAAQgJAAgJAGQgJAFgGAIIgMgMQAJgLAMgGQAMgHAPAAQAUABANAMQAMANAAAVQABAPgJAQQgIANgPARIgfAlIANgBIALgBIAvAAIAAASg");
	this.shape_109.setTransform(90,-20346.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgfBLQgMgGgIgJIAKgOQAIAIAJAFQALAGANAAQANAAAJgIQAJgIAAgNQAAgJgFgIQgFgHgKgEQgLgEgRAAIAAgNQAQgBAIgDQAKgEAEgHQAEgHABgIQAAgMgIgHQgHgGgLgBQgKABgJAEQgIAFgHAHIgLgNQAJgJAMgFQALgGANAAQANAAAKAFQALAEAGAJQAHAJAAANQgBAPgIAJQgHAKgNAEIAAABQAJACAIAEQAHAFAFAIQAFAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgRAAgOgHg");
	this.shape_110.setTransform(89.8,-20346);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBChkIAXAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIAAgLIABgKIgBAAIgGALg");
	this.shape_111.setTransform(89.9,-20346);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgWBOQgJgEgIgFQgIgEgFgGIALgNQAGAHAKAFQAJAFAPABQAHAAAIgFQAIgEAFgIQAFgJgBgLQAAgQgIgJQgKgIgOAAQgHAAgHADQgGACgGADIgLgFIAEhNIBOAAIAAASIg7AAIgEAvIALgEQAFgCAGAAQANAAAMAFQALAFAGALQAHAKAAARQAAARgHAMQgIAMgMAGQgMAHgNAAQgMAAgKgDg");
	this.shape_112.setTransform(89.8,-20345.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_113.setTransform(90.2,-20346);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgQBPQAAgeAFgXQAGgZAHgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgJARgGAPQgFARgCATQgDATgBAXg");
	this.shape_114.setTransform(90.1,-20346);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_115.setTransform(90.1,-20346);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgfBNQgJgEgHgIIAMgMQAFAFAGAEQAIADAHAAQAJAAAKgGQAJgHAGgPQAGgPAAgXQgHAHgKAGQgKAFgIAAQgVAAgMgMQgMgKgBgZQAAgPAHgMQAGgLALgHQALgGAMAAQAOAAANAIQAMAJAHARQAHARAAAZQABAegJAUQgIATgPAJQgNAJgOAAQgNAAgKgFgAgWg3QgIAJAAAQQAAAQAHAJQAIAHAPAAQAFAAAJgDQAJgFAIgMQgCgXgKgMQgIgMgOAAQgLAAgIAKg");
	this.shape_116.setTransform(90,-20346);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_107}]}).to({state:[{t:this.shape_108,p:{x:90.3}}]},276).to({state:[{t:this.shape_109}]},275).to({state:[{t:this.shape_110}]},273).to({state:[{t:this.shape_111}]},276).to({state:[{t:this.shape_112}]},275).to({state:[{t:this.shape_113}]},275).to({state:[{t:this.shape_114}]},274).to({state:[{t:this.shape_115}]},250).to({state:[{t:this.shape_116}]},275).to({state:[{t:this.shape_108,p:{x:77.9}},{t:this.shape_107}]},276).to({state:[]},2807).wait(5531));

	// 100
	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_117.setTransform(60.1,-20169.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDIAPgHIAOAAIAACMIAgAAIAAARg");
	this.shape_118.setTransform(60.3,-20169.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgxBRIAAgMIAogqQAPgTAJgMQAIgPABgNQgBgOgHgIQgIgJgNAAQgJAAgJAGQgJAFgGAIIgMgMQAJgLAMgGQAMgHAPAAQAUABANAMQAMANABAVQAAAPgJAQQgIANgPARIggAlIAOgBIALgBIAvAAIAAASg");
	this.shape_119.setTransform(60,-20169.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgfBLQgMgGgIgJIALgOQAGAIALAFQAJAGAOAAQANAAAJgIQAJgIAAgNQABgJgGgIQgEgHgMgEQgKgEgSAAIAAgNQARgBAIgDQAKgEAFgHQADgHABgIQgBgMgHgHQgHgGgLgBQgKABgJAEQgIAFgHAHIgLgNQAJgJAMgFQALgGANAAQANAAAKAFQALAEAGAJQAHAJgBANQAAAPgIAJQgHAKgNAEIAAABQAJACAIAEQAHAFAFAIQAFAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgSAAgNgHg");
	this.shape_120.setTransform(59.8,-20169.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAWAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIABgLIAAgKIgBAAIgGALg");
	this.shape_121.setTransform(59.9,-20169.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgWBOQgKgEgHgFQgIgEgEgGIAJgNQAHAHAKAFQAKAFANABQAJAAAHgFQAIgEAFgIQAFgJgBgLQABgQgKgJQgJgIgNAAQgJAAgGADQgGACgGADIgMgFIAFhNIBOAAIAAASIg7AAIgEAvIALgEQAGgCAFAAQAOAAALAFQALAFAHALQAGAKABARQgBARgHAMQgIAMgMAGQgNAHgMAAQgMAAgKgDg");
	this.shape_122.setTransform(59.8,-20169.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_123.setTransform(60.2,-20169.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgRBPQABgeAGgXQAEgZAIgTQAKgVAPgWIhNAAIAAgRIBlAAIAAAMQgOASgKARQgIARgFAPQgFARgDATQgCATgBAXg");
	this.shape_124.setTransform(60.1,-20169.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_117}]}).to({state:[{t:this.shape_118}]},363).to({state:[{t:this.shape_119}]},364).to({state:[{t:this.shape_120}]},364).to({state:[{t:this.shape_121}]},364).to({state:[{t:this.shape_122}]},364).to({state:[{t:this.shape_123}]},364).to({state:[{t:this.shape_124}]},364).to({state:[]},2985).wait(5531));

	// 10
	this.instance_22 = new lib._10s();
	this.instance_22.setTransform(75.7,-20170.2,1,1,0,0,0,8.3,17.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_125.setTransform(75.7,-20169.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22}]}).to({state:[{t:this.shape_125}]},2766).to({state:[]},2766).wait(5531));

	// 1
	this.instance_23 = new lib._00001();
	this.instance_23.setTransform(93.3,-20170,1,1,0,0,0,8.3,17.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_126.setTransform(93.1,-20169.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23}]}).to({state:[{t:this.shape_126}]},2766).to({state:[]},2766).wait(5531));

	// 10000
	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_127.setTransform(27.1,-20520.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_128.setTransform(27.3,-20520.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgyBRIAAgMIAqgqQAOgTAIgMQAKgPAAgNQgBgOgHgIQgIgJgNAAQgKAAgIAGQgJAFgGAIIgMgMQAJgLAMgGQALgHAQAAQAUABANAMQAMANAAAVQAAAPgIAQQgIANgPARIggAlIAOgBIALgBIAuAAIAAASg");
	this.shape_129.setTransform(27,-20520.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_127}]}).to({state:[{t:this.shape_128}]},999).to({state:[{t:this.shape_129}]},1000).to({state:[]},3533).wait(5531));

	// 1000
	this.instance_24 = new lib._01000();
	this.instance_24.setTransform(43.7,-20521.2,1,1,0,0,0,8.3,17.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgRBPQABgeAGgXQAEgZAIgTQAKgVAPgWIhNAAIAAgRIBlAAIAAAMQgOASgKARQgJARgEAPQgGARgCATQgCATgCAXg");
	this.shape_130.setTransform(43.6,-20520.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24}]}).to({state:[{t:this.shape_130}]},2699).to({state:[]},2833).wait(5531));

	// 100
	this.instance_25 = new lib._00100();
	this.instance_25.setTransform(60.2,-20521.2,1,1,0,0,0,8.3,17.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_131.setTransform(60.2,-20520.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25}]}).to({state:[{t:this.shape_131}]},2759).to({state:[]},2773).wait(5531));

	// 10
	this.instance_26 = new lib._00010();
	this.instance_26.setTransform(76.8,-20521,1,1,0,0,0,8.3,17.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAWAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIABgLIAAgKIgBAAIgGALg");
	this.shape_132.setTransform(76.5,-20520);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26}]}).to({state:[{t:this.shape_132}]},2764).to({state:[]},2768).wait(5531));

	// 1
	this.instance_27 = new lib._00001();
	this.instance_27.setTransform(93.3,-20521,1,1,0,0,0,8.3,17.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_133.setTransform(93.3,-20520);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27}]}).to({state:[{t:this.shape_133}]},2766).to({state:[]},2766).wait(5531));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-914.1,-20538.9,1766.1,754.8);


(lib.flow2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrow();
	this.instance.setTransform(2.3,90.3,1,1,0,0,0,2.3,2.3);

	this.instance_1 = new lib.arrow();
	this.instance_1.setTransform(2.3,79.3,1,1,0,0,0,2.3,2.3);

	this.instance_2 = new lib.arrow();
	this.instance_2.setTransform(2.3,68.3,1,1,0,0,0,2.3,2.3);

	this.instance_3 = new lib.arrow();
	this.instance_3.setTransform(2.3,57.3,1,1,0,0,0,2.3,2.3);

	this.instance_4 = new lib.arrow();
	this.instance_4.setTransform(2.3,46.3,1,1,0,0,0,2.3,2.3);

	this.instance_5 = new lib.arrow();
	this.instance_5.setTransform(2.3,35.3,1,1,0,0,0,2.3,2.3);

	this.instance_6 = new lib.arrow();
	this.instance_6.setTransform(2.3,24.3,1,1,0,0,0,2.3,2.3);

	this.instance_7 = new lib.arrow();
	this.instance_7.setTransform(2.3,13.3,1,1,0,0,0,2.3,2.3);

	this.instance_8 = new lib.arrow();
	this.instance_8.setTransform(2.3,2.3,1,1,0,0,0,2.3,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.3,4.7,92);


(lib.flow1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrow();
	this.instance.setTransform(2.3,222.3,1,1,0,0,0,2.3,2.3);

	this.instance_1 = new lib.arrow();
	this.instance_1.setTransform(2.3,211.3,1,1,0,0,0,2.3,2.3);

	this.instance_2 = new lib.arrow();
	this.instance_2.setTransform(2.3,200.3,1,1,0,0,0,2.3,2.3);

	this.instance_3 = new lib.arrow();
	this.instance_3.setTransform(2.3,189.3,1,1,0,0,0,2.3,2.3);

	this.instance_4 = new lib.arrow();
	this.instance_4.setTransform(2.3,178.3,1,1,0,0,0,2.3,2.3);

	this.instance_5 = new lib.arrow();
	this.instance_5.setTransform(2.3,167.3,1,1,0,0,0,2.3,2.3);

	this.instance_6 = new lib.arrow();
	this.instance_6.setTransform(2.3,156.3,1,1,0,0,0,2.3,2.3);

	this.instance_7 = new lib.arrow();
	this.instance_7.setTransform(2.3,145.3,1,1,0,0,0,2.3,2.3);

	this.instance_8 = new lib.arrow();
	this.instance_8.setTransform(2.3,134.3,1,1,0,0,0,2.3,2.3);

	this.instance_9 = new lib.arrow();
	this.instance_9.setTransform(2.3,123.3,1,1,0,0,0,2.3,2.3);

	this.instance_10 = new lib.arrow();
	this.instance_10.setTransform(2.3,112.3,1,1,0,0,0,2.3,2.3);

	this.instance_11 = new lib.arrow();
	this.instance_11.setTransform(2.3,101.3,1,1,0,0,0,2.3,2.3);

	this.instance_12 = new lib.arrow();
	this.instance_12.setTransform(2.3,90.3,1,1,0,0,0,2.3,2.3);

	this.instance_13 = new lib.arrow();
	this.instance_13.setTransform(2.3,79.3,1,1,0,0,0,2.3,2.3);

	this.instance_14 = new lib.arrow();
	this.instance_14.setTransform(2.3,68.3,1,1,0,0,0,2.3,2.3);

	this.instance_15 = new lib.arrow();
	this.instance_15.setTransform(2.3,57.3,1,1,0,0,0,2.3,2.3);

	this.instance_16 = new lib.arrow();
	this.instance_16.setTransform(2.3,46.3,1,1,0,0,0,2.3,2.3);

	this.instance_17 = new lib.arrow();
	this.instance_17.setTransform(2.3,35.3,1,1,0,0,0,2.3,2.3);

	this.instance_18 = new lib.arrow();
	this.instance_18.setTransform(2.3,24.3,1,1,0,0,0,2.3,2.3);

	this.instance_19 = new lib.arrow();
	this.instance_19.setTransform(2.3,13.3,1,1,0,0,0,2.3,2.3);

	this.instance_20 = new lib.arrow();
	this.instance_20.setTransform(2.3,2.3,1,1,0,0,0,2.3,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.3,4.7,224);


(lib.flow_an_small = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flow2();
	this.instance.setTransform(-38.9,108.9,0.911,0.911,0,0,0,2.3,2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:118.9},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,107,4.3,83.8);


(lib.flow_an = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flow1();
	this.instance.setTransform(2.1,-2.4,0.911,0.911,0,0,0,2.3,2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:7.6},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4.2,4.3,204);


(lib.flow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1019 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1019).call(this.frame_1019).wait(1));

	// Layer 3
	this.instance = new lib.flow_an_small();
	this.instance.setTransform(-420.6,-20067.3,1,1,-90,0,0,2.1,97.8);

	this.instance_1 = new lib.flow_an_small();
	this.instance_1.setTransform(-326.4,-20009.6,1,1,180,0,0,-38.9,148.9);

	this.instance_2 = new lib.flow_an_small();
	this.instance_2.setTransform(-503.5,-19973.1,1,1,0,0,0,-38.9,148.9);

	this.instance_3 = new lib.flow_an_small();
	this.instance_3.setTransform(-510.6,-20086.5,1,1,0,0,0,-38.9,148.9);

	this.instance_4 = new lib.flow_an_small();
	this.instance_4.setTransform(-540.8,-20070.4,1,1,180,0,0,-38.9,148.9);

	this.instance_5 = new lib.flow_an();
	this.instance_5.setTransform(-482.7,-20026.3,1,1,-90,0,0,2.1,104.8);

	this.instance_6 = new lib.flow_an_small();
	this.instance_6.setTransform(-588.1,-20101.8,1,1,-90,0,0,2.1,97.8);

	this.instance_7 = new lib.flow_an_small();
	this.instance_7.setTransform(-833.6,-19948,1,1,180,0,0,2.1,97.8);

	this.instance_8 = new lib.flow_an();
	this.instance_8.setTransform(-692.7,-20026.3,1,1,-90,0,0,2.1,104.8);

	this.instance_9 = new lib.flow_an_small();
	this.instance_9.setTransform(-9.7,-19737.8,1,1,180,0,0,2.1,97.8);

	this.instance_10 = new lib.flow_an();
	this.instance_10.setTransform(-39.8,-19757.1,1,1,-90,0,0,2.1,104.8);

	this.instance_11 = new lib.flow_an();
	this.instance_11.setTransform(-109.8,-19757.1,1,1,-90,0,0,2.1,104.8);

	this.instance_12 = new lib.flow_an();
	this.instance_12.setTransform(-319.8,-19757.1,1,1,-90,0,0,2.1,104.8);

	this.instance_13 = new lib.flow_an();
	this.instance_13.setTransform(-529.8,-19757.1,1,1,-90,0,0,2.1,104.8);

	this.instance_14 = new lib.flow_an();
	this.instance_14.setTransform(-621.6,-19855.5,1,1,0,0,0,2.1,104.8);

	this.instance_15 = new lib.flow_an();
	this.instance_15.setTransform(-719.5,-19955.5,1,1,-90,0,0,2.1,104.8);

	this.instance_16 = new lib.flow_an();
	this.instance_16.setTransform(-824.6,-19900.5,1,1,180,0,0,2.1,104.8);

	this.instance_17 = new lib.flow_an_small();
	this.instance_17.setTransform(-763.3,-19814.2,1,1,90,0,0,2.1,97.8);

	this.instance_18 = new lib.flow_an_small();
	this.instance_18.setTransform(-615.3,-19814.2,1,1,90,0,0,2.1,97.8);

	this.instance_19 = new lib.flow_an();
	this.instance_19.setTransform(-641.7,-19779.2,1,1,180,0,0,2.1,104.8);

	this.instance_20 = new lib.flow_an_small();
	this.instance_20.setTransform(-580.8,-19761.2,1,1,0,0,0,2.1,97.8);

	this.instance_21 = new lib.flow_an();
	this.instance_21.setTransform(-528.9,-19732.8,1,1,90,0,0,2.1,104.8);

	this.instance_22 = new lib.flow_an();
	this.instance_22.setTransform(-458.9,-19732.8,1,1,90,0,0,2.1,104.8);

	this.instance_23 = new lib.flow_an();
	this.instance_23.setTransform(-248.9,-19732.8,1,1,90,0,0,2.1,104.8);

	this.instance_24 = new lib.flow_an();
	this.instance_24.setTransform(-38.9,-19732.8,1,1,90,0,0,2.1,104.8);

	this.instance_25 = new lib.flow_an_small();
	this.instance_25.setTransform(108.8,-19790.2,1,1,0,0,0,2.1,97.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1019).wait(1));

	// Layer 2
	this.instance_26 = new lib.flow_an();
	this.instance_26.setTransform(-216.1,-19876.6,0.322,1,0,0,0,2.2,104.8);

	this.instance_27 = new lib.flow_an();
	this.instance_27.setTransform(-218.7,-19789.1,1,1,-90,0,0,2.1,104.8);

	this.instance_28 = new lib.flow_an_small();
	this.instance_28.setTransform(-356.2,-20144.1,1,1,0,0,0,2.1,97.8);

	this.instance_29 = new lib.flow_an();
	this.instance_29.setTransform(-329.7,-20123.8,1,1,90,0,0,2.1,104.8);

	this.instance_30 = new lib.flow_an();
	this.instance_30.setTransform(-119.7,-20123.8,1,1,90,0,0,2.1,104.8);

	this.instance_31 = new lib.flow_an();
	this.instance_31.setTransform(-154.5,-19831.4,0.322,1,0,0,0,2.2,104.8);

	this.instance_32 = new lib.flow_an_small();
	this.instance_32.setTransform(-207.2,-20025.4,1,1,90,0,0,2.1,97.8);

	this.instance_33 = new lib.flow_an_small();
	this.instance_33.setTransform(-243.3,-20125.9,1,1,0,0,0,2.1,97.8);

	this.instance_34 = new lib.flow_an_small();
	this.instance_34.setTransform(-322.9,-20136.9,1,1,-90,0,0,2.1,97.8);

	this.instance_35 = new lib.flow_an_small();
	this.instance_35.setTransform(-360,-20069.2,1,1,180,0,0,2.1,97.8);

	this.instance_36 = new lib.flow_an_small();
	this.instance_36.setTransform(-268.9,-20050.7,1,1,0,0,0,2.1,97.8);

	this.instance_37 = new lib.flow_an();
	this.instance_37.setTransform(-244.9,-20111.1,1,1,-90,0,0,2.1,104.8);

	this.instance_38 = new lib.flow_an();
	this.instance_38.setTransform(-393.1,-20052.9,1,1,-90,0,0,2.1,104.8);

	this.instance_39 = new lib.flow_an();
	this.instance_39.setTransform(-22.6,-20146.9,1,1,0,0,0,2.1,104.8);

	this.instance_40 = new lib.flow_an();
	this.instance_40.setTransform(-216.1,-20006.6,0.322,1,0,0,0,2.2,104.8);

	this.instance_41 = new lib.flow_an();
	this.instance_41.setTransform(-9.1,-20372.4,1,1,0,0,0,2.1,104.8);

	this.instance_42 = new lib.flow_an();
	this.instance_42.setTransform(-9.9,-20462.6,1,1,0,0,0,2.1,104.8);

	this.instance_43 = new lib.flow_an();
	this.instance_43.setTransform(-57.1,-20565.1,1,1,-90,0,0,2.1,104.8);

	this.instance_44 = new lib.flow_an();
	this.instance_44.setTransform(-159.1,-20600,1,1,180,0,0,2.1,104.8);

	this.instance_45 = new lib.flow_an();
	this.instance_45.setTransform(-159.1,-20301.6,1,1,180,0,0,2.1,104.8);

	this.instance_46 = new lib.flow_an();
	this.instance_46.setTransform(-246.7,-20198.4,1,1,-90,0,0,2.1,104.8);

	this.instance_47 = new lib.flow_an();
	this.instance_47.setTransform(-427.2,-20198.4,1,1,-90,0,0,2.1,104.8);

	this.instance_48 = new lib.flow_an();
	this.instance_48.setTransform(-524.1,-20287.5,1,1,0,0,0,2.1,104.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26}]}).wait(1020));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-536.2,-20694.9,574.1,958.5);


(lib.down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_5531 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5531).call(this.frame_5531).wait(5532));

	// Layer 30
	this.instance = new lib.blue_box();
	this.instance.setTransform(352.8,-19959.3,0.022,1,0,0,0,0,7.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1020).to({_off:false},0).to({scaleX:1},1746).wait(8297));

	// Layer 29
	this.instance_1 = new lib.red_box();
	this.instance_1.setTransform(352.8,-19880.6,0.022,1,0,0,0,0,7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1020).to({_off:false},0).to({regY:7.1,scaleX:1,y:-19880.5},1746).wait(8297));

	// blue_up
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUO4IAA9vIApAAIAAdvg");
	this.shape.setTransform(555.5,-20038.7);

	this.instance_2 = new lib.blue_up_conv_red();
	this.instance_2.setTransform(555.5,-19943.4,1,1.337,0,0,0,0,142.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance_2}]},1020).to({state:[{t:this.instance_2}]},1746).to({state:[{t:this.instance_2}]},2765).to({state:[]},1).wait(5531));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1020).to({_off:false},0).to({regX:0.1,scaleY:1.23,x:567.6,y:-19943.3},1746,cjs.Ease.get(-0.5)).to({regX:0,scaleY:1,x:583.5,y:-19943.4},2765).to({_off:true},1).wait(5531));

	// blue_wide
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AtwDhIAAgrIWSAAQBfAAAygJQA4gLAfgbQA8g6AAi5IAAh0IArAAIAAB0QAADShKBAQgnAjhFANQg1ALhkAAg");
	this.shape_1.setTransform(469.5,-19920.9);

	this.instance_3 = new lib.blue_wide_conv_red();
	this.instance_3.setTransform(469.8,-19922,1,1,0,0,0,88.4,21.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.instance_3}]},1020).to({state:[{t:this.instance_3}]},1746).to({state:[{t:this.instance_3}]},2765).to({state:[]},1).wait(5531));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1020).to({_off:false},0).to({x:481.8},1746,cjs.Ease.get(-0.5)).to({x:497.8},2765).to({_off:true},1).wait(5531));

	// blue
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4.3).p("A6YDTQABgaAAiTQAAhtA6hAQBFhLCNAAMAw5AAA");
	this.shape_2.setTransform(238.3,-19879.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#D92F27").ss(4.3).p("A6YDTQABgaAAiTQAAhtA6hAQBFhLCNAAMAw5AAA");
	this.shape_3.setTransform(238.3,-19879.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1020).to({state:[]},4512).wait(5531));

	// red_up
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(4.3).p("AAAHKIAAuT");
	this.shape_4.setTransform(507.5,-20033.1);

	this.instance_4 = new lib.red_up_conv_blue();
	this.instance_4.setTransform(507.5,-20017.9,1,1,0,0,0,0,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.instance_4}]},1020).to({state:[]},4512).wait(5531));

	// red
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(4.3).p("EglGAKGIAApKQAAhwBBg5QBFg+CTAAMBA7AAAQBhAAA0gKQA/gMAigfQBEg9AAjHIAAig");
	this.shape_5.setTransform(269.9,-19922.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1D9EDA").ss(4.3).p("EglGAKGIAApKQAAhwBBg5QBFg+CTAAMBA7AAAQBhAAA0gKQA/gMAigfQBEg9AAjHIAAig");
	this.shape_6.setTransform(269.9,-19922.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1020).to({state:[]},4512).wait(5531));

	// cylinder
	this.instance_5 = new lib.cylinder_1();
	this.instance_5.setTransform(507.4,-20076.2,1,1,-47.5,0,0,4.9,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1020).to({regX:5,scaleX:1,scaleY:1,rotation:-35.9,x:507.6,y:-20076},1092,cjs.Ease.get(-0.5)).to({scaleX:1,scaleY:1,rotation:-30.3,x:507.4,y:-20075.5},654).to({scaleX:1,scaleY:1,rotation:0,y:-20076.2},2765).to({_off:true},1).wait(5531));

	// king
	this.instance_6 = new lib.king_1();
	this.instance_6.setTransform(637.4,-20148.3,1,1,0,0,0,214.5,275.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5531).to({_off:true},1).wait(5531));

	// winch
	this.instance_7 = new lib.winch_1();
	this.instance_7.setTransform(470.4,-20126.3,1,1,0,0,0,8.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5531).to({_off:true},1).wait(5531));

	// boom
	this.instance_8 = new lib.boom_1();
	this.instance_8.setTransform(480.2,-20120.6,1,1,-45,0,0,12.4,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1020).to({regX:12.5,scaleX:1,scaleY:1,rotation:-34.1,x:480.3},1092,cjs.Ease.get(-0.5)).to({regX:12.4,scaleX:1,scaleY:1,rotation:0},3419).to({_off:true},1).wait(5531));

	// cyl fill
	this.instance_9 = new lib.cylinder_fill();
	this.instance_9.setTransform(552,-20135.7,0.825,1,-49.2,0,0,0.1,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1020).to({regY:2.3,scaleX:0.71,scaleY:1,rotation:-38.3,x:556.8,y:-20123},1092,cjs.Ease.get(-0.5)).to({regY:2.2,scaleX:0.63,scaleY:1,rotation:-34.8,x:563.6,y:-20117.6},654).to({regX:-0.1,scaleX:0.34,scaleY:1,rotation:-4.2,x:571.7,y:-20083.3},2765).to({_off:true},1).wait(5531));

	// Layer 13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1NFnIAArNMAqbAAAIAALNg");
	mask.setTransform(50,-19820.2);

	// Layer 11
	this.instance_10 = new lib.arrows();
	this.instance_10.setTransform(52.1,-19821,1,1,0,0,0,115.8,38.5);

	this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1020).to({x:145.3},1746).to({_off:true},2766).wait(5531));

	// TXT
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgRAXQAKgFAGgIQAEgIAAgHIgBAAIgBAAQgFgBgEgDQgEgEAAgGQAAgHAEgEQAFgEAEAAQAIAAAFAGQAEAHAAALQAAAPgIAMQgJAMgNAGg");
	this.shape_7.setTransform(-685.4,-20160.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQA5QgHgIgBgLQABgLAHgHQAGgIAKAAQAKAAAIAIQAHAHgBALQABALgHAIQgIAHgKAAQgKAAgGgHgAgQgTQgHgHgBgLQABgLAHgIQAGgHAKAAQAKAAAIAHQAHAIgBALQABALgHAHQgIAIgKAAQgKAAgGgIg");
	this.shape_8.setTransform(-803,-20302.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AggBOQgQgGgNgMIAYgdQAKAHAKAEQAKAFAHAAQAJAAAEgDQAFgDAAgGQAAgFgGgDQgGgEgIgEIgUgIQgJgDgHgHQgIgEgFgJQgEgJAAgLQAAgOAIgMQAIgLANgHQAOgHAQAAQANAAAPAGQAOAFALALIgVAbQgIgGgIgDQgHgDgJAAQgHAAgEADQgEADAAAFQAAAGAGADIAPAIIAUAHQAPAGAJAJQAIALAAARQAAAOgIALQgHAMgOAHQgPAHgSABQgPAAgRgGg");
	this.shape_9.setTransform(-814,-20304.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUBRIAAh9IgrAAIAAgkIB/AAIAAAkIgrAAIAAB9g");
	this.shape_10.setTransform(-827.6,-20304.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUBRIAAihIApAAIAAChg");
	this.shape_11.setTransform(-838.6,-20304.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWBRIgjhJIgPgiIgBAAIADAcQADAQAAAQIAAAvIgqAAIAAihIAsAAIAjBJIAPAiIABAAIgDgTIgCgUIgBgVIAAgvIAqAAIAAChg");
	this.shape_12.setTransform(-851,-20304.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgxA+QgRgUAAgpIAAhSIAsAAIAABXQAAAVAFAJQAHAJAKAAQANAAAGgJQAGgJAAgVIAAhXIAqAAIAABSQgBApgPAUQgRAUgiAAQggAAgRgUg");
	this.shape_13.setTransform(-867.8,-20304.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgxA+QgQgUAAgpIAAhSIAqAAIAABXQABAVAFAJQAGAJALAAQAMAAAHgJQAGgJAAgVIAAhXIApAAIAABSQAAApgPAUQgRAUgiAAQggAAgRgUg");
	this.shape_14.setTransform(-889.8,-20304.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag0BRIAAihIBnAAIAAAkIg8AAIAAAaIAzAAIAAAiIgzAAIAAAdIA+AAIAAAkg");
	this.shape_15.setTransform(-905,-20304.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAdBHQgJgOgBgZQABgYAJgMQAKgNASAAQAQAAALANQAKAMAAAYQAAAZgKAOQgLANgQAAQgSAAgKgNgAApADQgGAKAAATQAAAUAGAKQAGAKAKAAQAJAAAGgKQAGgKAAgUQAAgTgGgKQgGgHgJAAQgKAAgGAHgAgzBUIBYioIAOAAIhYCogAhTAEQgKgLAAgZQAAgZAKgNQAKgNARgBQARABAKANQAKANABAZQgBAZgKALQgKAOgRAAQgRAAgKgOgAhHg9QgGAJAAAUQAAAUAGAJQAFAIAKABQAKgBAGgIQAGgJAAgUQAAgUgGgJQgGgJgKAAQgKAAgFAJg");
	this.shape_16.setTransform(-649.8,-20250.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAdBHQgJgNgBgaQABgYAJgMQAKgNASAAQAQAAALANQAKAMAAAYQAAAagKANQgLANgQAAQgSAAgKgNgAApADQgGAKAAATQAAAUAGAKQAGAKAKAAQAJAAAGgKQAGgKAAgUQAAgTgGgKQgGgIgJAAQgKAAgGAIgAgzBUIBYioIAOAAIhYCogAhTAEQgKgLAAgZQAAgZAKgNQAKgNARgBQARABAKANQAKANABAZQgBAZgKALQgKAOgRAAQgRAAgKgOgAhHg9QgGAKAAATQAAATAGAKQAFAJAKgBQAKABAGgJQAGgKAAgTQAAgTgGgKQgGgKgKAAQgKAAgFAKg");
	this.shape_17.setTransform(-649.8,-20210.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAbBYIghg6IgWAaIAAAgIgVAAIAAivIAVAAIAAB2IAAAAIAyg+IAXAAIgpAvIAuBIg");
	this.shape_18.setTransform(-831.4,-20251.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgTA4QgNgIgHgOQgIgOAAgUQAAgTAIgOQAIgOAOgIQANgHAOAAQAMAAAIAEQAJAEAGAGIgKAOQgFgFgGgDQgGgDgIAAQgKAAgHAGQgJAGgFAKQgEALgBAMQABAVAKAMQAKANAPAAQAJAAAHgDQAHgEAGgFIAJANQgJAIgKAEQgKAEgLAAQgOAAgNgHg");
	this.shape_19.setTransform(-843.9,-20248.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgJBWIAAh4IATAAIAAB4gAgIg+QgEgEgBgGQABgGAEgEQAEgDAEAAQAGAAAEADQAEAEAAAGQAAAGgEAEQgEADgGAAQgEAAgEgDg");
	this.shape_20.setTransform(-853,-20251.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgLBDQgHgLAAgSIAAhBIgSAAIAAgPIATgCIACgiIAQAAIAAAiIAgAAIAAARIggAAIAABCQgBALAFAGQAEAGAKAAIAHgBIAHgCIAEAPIgLADIgLACQgSgBgIgLg");
	this.shape_21.setTransform(-860.1,-20250.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgXA6QgMgEgJgIIALgNQAIAGAIAEQAJAEAJAAQALAAAGgFQAHgGgBgIQABgGgFgEQgEgEgGgDIgMgGIgQgFQgJgEgFgHQgGgHAAgKQABgJAEgIQAGgIAJgFQAJgEALAAQAMAAAJAEQAKAEAHAGIgKANQgGgFgHgDQgGgDgJAAQgJAAgFAFQgGAFAAAHQAAAGAEAEIAKAGIAMAFIAQAIQAJACAGAHQAFAHABALQgBAKgFAIQgFAIgKAFQgKAFgOAAQgLAAgMgFg");
	this.shape_22.setTransform(-869.8,-20248.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgqBWIgHgCIAEgQIAFABIAEABQALgBAHgHQAGgHAEgLIADgKIgxh3IAVAAIAZBDIAGARIAEAPIABAAIAFgPIAFgRIAWhDIAUAAIguCBQgEAMgFAKQgFAJgIAGQgKAFgLAAIgIAAg");
	this.shape_23.setTransform(-880.8,-20246.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgaA4QgNgIgIgOQgIgOAAgUQAAgTAIgOQAIgOANgIQAMgHAOAAQAPAAAMAHQANAIAIAOQAIAOAAATQAAAUgIAOQgIAOgNAIQgMAHgPAAQgOAAgMgHgAgRgnQgIAGgEAKQgEALgBAMQABAVAJAMQAKANAOAAQAPAAAKgNQAJgMABgVQAAgMgFgLQgEgKgIgGQgIgGgKAAQgJAAgIAGg");
	this.shape_24.setTransform(-893.4,-20248.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgaBMQgLgHgHgNIAPgKQAFAKAHAEQAHAEAJAAQALAAAHgIQAHgIAAgTIAAhvIAVAAIAABxQAAAPgFAMQgFALgKAHQgKAGgPABQgOAAgMgHg");
	this.shape_25.setTransform(-906.8,-20250.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgVA4QgOgIgHgOQgIgOAAgUQAAgSAIgOQAHgPANgHQAMgIAMAAQAYAAAMAPQANAPAAAbIAAAFIAAAEIhRAAQABAUAMALQAKALAQABQAIAAAIgDQAIgCAGgFIAHAOQgIAFgJAEQgKADgNAAQgOAAgNgHgAAhgIQAAgSgIgKQgIgKgOAAQgGAAgIAFQgIAEgEAJQgFAIgCAMIA/AAIAAAAg");
	this.shape_26.setTransform(-762.3,-20208.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgKA8Igsh3IAWAAIAWBDIAGASIAEASIABAAIAFgSIAFgSIAYhDIAUAAIgrB3g");
	this.shape_27.setTransform(-774.3,-20208.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgKBTQgFgHAAgOIAAiXIASAAIAACZQAAAFACACQAAAAABABQAAAAABAAQAAABABAAQABAAAAAAIACAAIADgBIACAQIgFACIgHAAQgJAAgFgHg");
	this.shape_28.setTransform(-782.9,-20210.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgdA7QgIgEgEgIQgFgHAAgLQAAgUASgJQASgLAlgEQAAgIgDgHQgBgGgGgFQgGgEgKAAQgIAAgJAEQgKAEgHAFIgHgOQAIgGAMgFQAMgFANAAQAWAAAKAOQAKANAAAXIAABIIgQAAIgDgOIAAAAQgJAHgKAFQgJAFgKAAQgLAAgIgEgAgEADQgMAFgFAGQgFAFAAAIQAAAKAHAFQAFAFAJAAQAHAAAIgEQAIgFAJgIIAAgfQgUABgLADg");
	this.shape_29.setTransform(-793.2,-20208.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgKA8Igsh3IAVAAIAXBDIAGASIAEASIAAAAIAGgSIAGgSIAWhDIAVAAIgrB3g");
	this.shape_30.setTransform(-804.7,-20208.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgJALQgEgEAAgHQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAHgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_31.setTransform(-818.8,-20203.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgzBXIAAirIARAAIABAPIABAAQAJgHAJgGQAKgEAIgBQAQAAALAIQAKAIAGANQAFAOAAAUQAAAVgHAMQgHAPgMAHQgLAIgPAAQgGAAgJgEQgIgDgIgHIAAAVIAAApgAgOhBQgIAEgJAIIAAA+QAJAHAHADQAIADAGgBQANABAJgNQAKgLAAgWQABgVgIgMQgHgMgRAAQgGAAgIAEg");
	this.shape_32.setTransform(-828.2,-20205.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgaA4QgNgIgIgOQgIgOAAgUQAAgTAIgOQAIgOANgIQAMgHAOAAQAPAAAMAHQANAIAIAOQAIAOAAATQAAAUgIAOQgIAOgNAIQgMAHgPAAQgOAAgMgHgAgRgnQgIAGgEAKQgEALgBAMQABAVAJAMQAKANAOAAQAPAAAKgNQAJgMABgVQAAgMgFgLQgEgKgIgGQgIgGgKAAQgJAAgIAGg");
	this.shape_33.setTransform(-842.3,-20208.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AggA+IAAh4IARAAIACAWIABAAQAGgLAGgHQAKgHAKAAIAHABIAGACIgEASIgFgCIgHAAQgHAAgJAGQgGAHgHAPIAABMg");
	this.shape_34.setTransform(-852.1,-20208.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ag0BXIAAirIARAAIADAPIAAAAQAIgHAKgGQAKgEAJgBQAQAAAKAIQALAIAFANQAGAOAAAUQAAAVgHAMQgIAPgMAHQgMAIgOAAQgGAAgIgEQgJgDgIgHIAAAVIAAApgAgOhBQgIAEgJAIIAAA+QAIAHAIADQAHADAHgBQANABAKgNQAJgLABgWQAAgVgIgMQgIgMgQAAQgGAAgIAEg");
	this.shape_35.setTransform(-864.1,-20205.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgbAHIAAgNIA3AAIAAANg");
	this.shape_36.setTransform(-875.3,-20208.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag4BSIAAijIAxAAQAPAAAMAFQANADAHAKQAHAIAAAOQAAANgHAJQgHAKgOAEIAAABQASADAKAIQAKAJAAARQAAAQgIALQgIALgOAFQgOAFgRABgAgjBBIAcAAQAUAAALgIQAMgIAAgRQAAgPgLgHQgMgHgTAAIgdAAgAgjgLIAYAAQATAAAKgHQAJgHAAgOQAAgNgKgGQgKgGgRAAIgZAAg");
	this.shape_37.setTransform(-886,-20210.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAwBSIAAhZIABgPIABgSIABgPIgBAAIgOAkIgfBUIgKAAIgghUIgNgkIgBAAIABAPIACASIAAAPIAABZIgTAAIAAijIAYAAIAgBWIALAiIABAAIALgiIAfhWIAZAAIAACjg");
	this.shape_38.setTransform(-903,-20210.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgWA4QgMgIgIgOQgIgOAAgUQAAgSAIgOQAIgPAMgHQAMgIANAAQAXAAANAPQAMAPAAAbIAAAFIAAAEIhRAAQABAUALALQALALAQABQAIAAAIgDQAHgCAHgFIAHAOQgIAFgKAEQgJADgMAAQgPAAgOgHgAAhgIQAAgSgIgKQgHgKgPAAQgHAAgHAFQgHAEgFAJQgFAIgCAMIA/AAIAAAAg");
	this.shape_39.setTransform(-819.6,-20167.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgKBTQgFgHAAgOIAAiXIASAAIAACZQAAAFACACQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAIACAAIADgBIACAQIgFACIgHAAQgJAAgFgHg");
	this.shape_40.setTransform(-828.6,-20170.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgeBWQgLgEgHgHQgGgHAAgLQAAgIAEgHQAFgHAIgGIAAAAQgEgDgDgFQgDgFAAgHQAAgIAEgEQAEgFAFgEIAAgBQgGgFgFgIQgFgIAAgLQAAgOAHgJQAGgKAKgFQALgGAMAAIAIABIAHACIAqAAIAAAQIgYAAQAEAEADAHQADAGgBAIQABANgGAKQgHAJgJAFQgKAFgLAAIgKgBIgIgDIgFAGQgDACAAAFQAAAFAEAEQAFAEAMAAIAWAAQAVAAALAHQALAHAAAPQgBALgHAKQgIAJgOAGQgNAGgRAAQgPAAgLgEgAgiAsQgCAFgBAFQABAKAJAGQAKAFAQAAQAKAAAIgDQAJgEAFgFQAEgGABgGQAAgJgHgDQgGgDgMAAIgTAAIgIgBIgIgBQgGAFgEAFgAgWhCQgIAHAAAOQAAANAIAIQAHAHALABQAJgBAHgHQAHgIABgNQgBgOgHgHQgHgIgJAAQgLAAgHAIg");
	this.shape_41.setTransform(-838.2,-20165);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAcA+IAAhIQAAgRgGgIQgGgIgLAAQgIAAgHAFQgIAFgJAJIAABWIgUAAIAAh4IARAAIACASIAAAAQAJgJAKgGQAJgFALgBQATAAAJAMQAJANAAAXIAABLg");
	this.shape_42.setTransform(-851.7,-20167.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgdA7QgIgEgEgIQgFgHAAgLQAAgUASgJQASgLAkgEQABgIgCgHQgDgGgFgFQgGgEgKAAQgIAAgJAEQgJAEgIAFIgIgOQAJgGAMgFQAMgFANAAQAWAAAKAOQAKANAAAXIAABIIgRAAIgBgOIgBAAQgJAHgKAFQgJAFgKAAQgKAAgJgEgAgEADQgMAFgFAGQgFAFABAIQgBAKAGAFQAGAFAJAAQAHAAAIgEQAIgFAIgIIAAgfQgUABgKADg");
	this.shape_43.setTransform(-865.2,-20167.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgbAHIAAgNIA3AAIAAANg");
	this.shape_44.setTransform(-875.3,-20167.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("Ag4BRIAAihIAxAAQAPgBAMAFQANADAHAJQAHAJAAAOQAAANgHAJQgHAKgOAEIAAABQASADAKAIQAKAJAAARQAAARgIALQgIAKgOAFQgOAFgRAAgAgjBBIAcAAQAUAAALgIQAMgIAAgRQAAgOgLgIQgMgHgTAAIgdAAgAgjgLIAYAAQATAAAKgHQAJgHAAgOQAAgNgKgGQgKgGgRAAIgZAAg");
	this.shape_45.setTransform(-886,-20169.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAwBRIAAhXIABgRIAAgRIACgPIgCAAIgMAkIggBUIgKAAIgfhUIgNgkIgCAAIACAPIABARIAAARIAABXIgTAAIAAihIAYAAIAgBVIALAiIABAAIALgiIAghVIAYAAIAAChg");
	this.shape_46.setTransform(-903,-20169.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgRAXQAKgFAGgIQAEgIAAgHIgBAAIgBAAQgFAAgEgEQgEgDAAgIQAAgHAEgDQAFgEAEAAQAIAAAFAGQAEAHAAALQAAAOgIANQgJALgNAHg");
	this.shape_47.setTransform(310.6,-20223.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgaAmQgKgOAAgYQAAgYAKgNQAKgNAQAAQAQAAAKANQAKANABAYQgBAYgKAOQgKANgQAAQgQAAgKgNgAgOgcQgGAKAAASQAAATAGAKQAFAKAJAAQAJAAAGgKQAGgKAAgTQAAgSgGgKQgGgJgJAAQgJAAgFAJg");
	this.shape_48.setTransform(-655.5,-20173.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).to({state:[]},5532).wait(5531));

	// Layer 19
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_49.setTransform(-674.6,-20250.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_50.setTransform(-687.1,-20250.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_51.setTransform(-699.3,-20250.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgbAHIAAgNIA3AAIAAANg");
	this.shape_52.setTransform(-709.6,-20248.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_53.setTransform(-674.6,-20209.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_54.setTransform(-687.1,-20209.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_55.setTransform(-699.3,-20209.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgbAHIAAgNIA3AAIAAANg");
	this.shape_56.setTransform(-709.6,-20208.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]}).to({state:[]},5532).wait(5531));

	// 1000
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_57.setTransform(-712.4,-20169.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgRBPQACgeAFgXQAFgZAHgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgKARgFAPQgEARgDATQgDATgBAXg");
	this.shape_58.setTransform(-712.4,-20169.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_59.setTransform(-712.3,-20169.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgWBOQgKgEgHgFQgHgEgFgGIAJgNQAIAHAJAFQAJAFAOABQAJAAAIgFQAHgEAFgIQAFgJAAgLQgBgQgIgJQgKgIgOAAQgHAAgGADQgHACgGADIgLgFIAEhNIBOAAIAAASIg7AAIgEAvIAKgEQAGgCAGAAQANAAAMAFQALAFAGALQAHAKAAARQAAARgIAMQgHAMgMAGQgMAHgNAAQgMAAgKgDg");
	this.shape_60.setTransform(-712.7,-20169.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBChkIAYAAIAABhIAVAAIAAAQIgVAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIAAgLIABgKIgBAAIgGALg");
	this.shape_61.setTransform(-712.6,-20169.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgeBLQgNgGgIgJIAKgOQAIAIAJAFQAKAGAOAAQANAAAJgIQAJgIAAgNQAAgJgFgIQgFgHgLgEQgKgEgRAAIAAgNQAQgBAIgDQAKgEAEgHQAEgHAAgIQAAgMgHgHQgHgGgLgBQgKABgIAEQgJAFgHAHIgLgNQAJgJALgFQAMgGANAAQANAAALAFQAKAEAGAJQAGAJABANQgBAPgHAJQgJAKgNAEIAAABQAKACAIAEQAIAFAFAIQAEAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgRAAgNgHg");
	this.shape_62.setTransform(-712.7,-20169.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgyBRIAAgMIAqgqQAOgTAJgMQAIgPAAgNQAAgOgHgIQgIgJgNAAQgKAAgIAGQgJAFgHAIIgMgMQAKgLAMgGQALgHAQAAQAUABAMAMQANANAAAVQAAAPgIAQQgIANgPARIgfAlIANgBIAMgBIAtAAIAAASg");
	this.shape_63.setTransform(-712.5,-20169.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_64.setTransform(-712.2,-20169.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_65.setTransform(-712.4,-20169.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57}]}).to({state:[{t:this.shape_57}]},1020).to({state:[{t:this.shape_58}]},317).to({state:[{t:this.shape_59}]},530).to({state:[{t:this.shape_60}]},530).to({state:[{t:this.shape_61}]},530).to({state:[{t:this.shape_62}]},530).to({state:[{t:this.shape_63}]},530).to({state:[{t:this.shape_64}]},530).to({state:[{t:this.shape_65}]},530).to({state:[]},485).wait(5531));

	// 100
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgWBOQgJgEgIgFQgIgEgFgGIALgNQAHAHAJAFQAJAFAPABQAHAAAIgFQAIgEAFgIQAEgJABgLQAAgQgKgJQgJgIgOAAQgIAAgGADQgGACgHADIgLgFIAGhNIBNAAIAAASIg8AAIgEAvIALgEQAGgCAGAAQANAAAMAFQALAFAGALQAHAKABARQgBARgHAMQgIAMgMAGQgMAHgNAAQgMAAgKgDg");
	this.shape_66.setTransform(-696.2,-20169.4);

	this.instance_11 = new lib._32_rewind();
	this.instance_11.setTransform(-695.8,-20170.5,1,1,0,0,0,8.3,17.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_67.setTransform(-695.9,-20169.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66}]}).to({state:[{t:this.instance_11}]},1020).to({state:[{t:this.shape_67}]},4504).to({state:[]},8).wait(5531));

	// 10
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_68.setTransform(-674.8,-20169.3);

	this.instance_12 = new lib._00010_rewind();
	this.instance_12.setTransform(-674.7,-20170.3,1,1,0,0,0,8.3,17.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_69.setTransform(-674.8,-20169.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68}]}).to({state:[{t:this.instance_12}]},1020).to({state:[{t:this.shape_69}]},4511).to({state:[]},1).wait(5531));

	// Layer 12
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AA/A+IAAhIQAAgRgGgIQgFgIgLAAQgIAAgHAFQgIAEgIAKIAABWIgTAAIAAhIQAAgRgFgIQgGgIgLAAQgHAAgIAFQgHAEgJAKIAABWIgUAAIAAh4IARAAIACASIAAAAQAIgJAKgGQAJgFALgBQAOAAAIAHQAGAGADALQAKgLAKgGQAKgHAKAAQATAAAJAMQAJANAAAXIAABLg");
	this.shape_70.setTransform(420.3,-20229.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAcBYIAAhJQAAgPgGgIQgGgIgLAAQgIAAgHAFQgIAEgJAHIAABYIgUAAIAAivIAUAAIAAAwIAAAZQAIgIAKgGQAJgGALAAQATAAAJAMQAJANAAAUIAABNg");
	this.shape_71.setTransform(403.2,-20232.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgaA4QgNgIgIgOQgIgOAAgUQAAgTAIgOQAIgOANgIQAMgHAOAAQAPAAAMAHQANAIAIAOQAIAOAAATQAAAUgIAOQgIAOgNAIQgMAHgPAAQgOAAgMgHgAgRgnQgIAGgEAKQgEALgBAMQABAVAJAMQAKANAOAAQAPAAAKgNQAJgMABgVQAAgMgFgLQgEgKgIgGQgIgGgKAAQgJAAgIAGg");
	this.shape_72.setTransform(389.5,-20229.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAbBYIghg6IgXAbIAAAfIgUAAIAAivIAUAAIAAB2IABAAIAyg+IAXAAIgpAvIAuBIg");
	this.shape_73.setTransform(377.9,-20232.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAsBRIgPgxIg6AAIgQAxIgVAAIA4ihIAVAAIA4ChgAAYAPIgIgYIgIgbIgIgcIAAAAIgHAcIgIAbIgIAYIAvAAg");
	this.shape_74.setTransform(136.9,-20169.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AA/A+IAAhIQAAgRgGgIQgFgIgLAAQgIAAgHAFQgIAEgIAKIAABWIgTAAIAAhIQAAgRgFgIQgGgIgLAAQgHAAgIAFQgHAEgJAKIAABWIgUAAIAAh4IARAAIACASIAAAAQAIgJAKgGQAJgFALgBQAOAAAIAHQAGAGADALQAKgLAKgGQAKgHAKAAQATAAAJAMQAJANAAAXIAABLg");
	this.shape_75.setTransform(119.8,-20167.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgLBRIg0ihIAWAAIAaBWIAJAbIAGAbIABAAIAIgbIAHgbIAahWIAWAAIg0Chg");
	this.shape_76.setTransform(351.8,-20346.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgLBRIg0ihIAWAAIAbBWIAHAbIAHAbIABAAIAHgbIAJgbIAahWIAVAAIg0Chg");
	this.shape_77.setTransform(115.8,-20346.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70}]}).to({state:[]},5532).wait(5531));

	// 10000
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_78.setTransform(302,-20231.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_79.setTransform(302.8,-20231.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgxBRIAAgMIApgqQAOgTAJgMQAIgPAAgNQABgOgIgIQgIgJgNAAQgJAAgJAGQgJAFgHAIIgLgMQAJgLAMgGQALgHAQAAQAUABANAMQAMANABAVQgBAPgIAQQgIANgPARIggAlIAOgBIAMgBIAtAAIAAASg");
	this.shape_80.setTransform(301.7,-20232);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgeBLQgNgGgIgJIALgOQAGAIALAFQAKAGANAAQANAAAJgIQAJgIAAgNQAAgJgFgIQgEgHgMgEQgKgEgRAAIAAgNQAQgBAIgDQAKgEAFgHQADgHABgIQgBgMgHgHQgHgGgLgBQgKABgIAEQgJAFgHAHIgLgNQAJgJAMgFQALgGANAAQANAAAKAFQALAEAGAJQAGAJABANQgBAPgIAJQgHAKgOAEIAAABQAKACAIAEQAHAFAGAIQAEAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgSAAgMgHg");
	this.shape_81.setTransform(301.9,-20231.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAXAAIAABhIAVAAIAAAQIgVAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIABgLIAAgKIgBAAIgGALg");
	this.shape_82.setTransform(301.6,-20231.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_78,p:{x:302,y:-20231.8}}]}).to({state:[{t:this.shape_78,p:{x:301.9,y:-20231.9}}]},2766).to({state:[{t:this.shape_79}]},469).to({state:[{t:this.shape_80}]},577).to({state:[{t:this.shape_81}]},582).to({state:[{t:this.shape_82}]},582).to({state:[]},556).wait(5531));

	// 1000
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgyBRIAAgMIApgqQAPgTAJgMQAJgPAAgNQAAgOgIgIQgHgJgOAAQgJAAgJAGQgJAFgGAIIgMgMQAJgLAMgGQAMgHAPAAQAUABANAMQAMANABAVQAAAPgJAQQgIANgPARIgfAlIANgBIALgBIAuAAIAAASg");
	this.shape_83.setTransform(320.9,-20232);

	this.instance_13 = new lib._582();
	this.instance_13.setTransform(321,-20232.9,1,1,0,0,0,8.3,17.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgRBPQACgeAEgXQAGgZAHgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgOASgJARQgJARgGAPQgFARgCATQgCATgBAXg");
	this.shape_84.setTransform(321.1,-20231.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83}]}).to({state:[{t:this.instance_13}]},2766).to({state:[{t:this.shape_84}]},2650).to({state:[]},116).wait(5531));

	// 100
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgWBOQgJgEgIgFQgIgEgEgGIAKgNQAGAHAKAFQAJAFAPABQAHAAAIgFQAIgEAFgIQAFgJgBgLQAAgQgIgJQgKgIgNAAQgIAAgHADQgGACgHADIgKgFIAEhNIBOAAIAAASIg8AAIgDAvIAKgEQAHgCAFAAQANAAAMAFQALAFAHALQAGAKAAARQAAARgHAMQgIAMgMAGQgMAHgNAAQgMAAgKgDg");
	this.shape_85.setTransform(337.3,-20231.7);

	this.instance_14 = new lib._00100();
	this.instance_14.setTransform(337.5,-20232.9,1,1,0,0,0,8.3,17.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgWBOQgKgEgHgFQgHgEgGgGIAKgNQAHAHAKAFQAKAFAOABQAHAAAIgFQAIgEAFgIQAFgJAAgLQAAgQgJgJQgKgIgOAAQgIAAgFADQgHACgGADIgMgFIAGhNIBNAAIAAASIg8AAIgEAvIAMgEQAGgCAFAAQAOAAALAFQALAFAGALQAHAKAAARQAAARgHAMQgIAMgMAGQgMAHgNAAQgMAAgKgDg");
	this.shape_86.setTransform(337.3,-20231.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85}]}).to({state:[{t:this.instance_14}]},2766).to({state:[{t:this.shape_86}]},2650).to({state:[]},116).wait(5531));

	// 10
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_87.setTransform(354.1,-20231.6);

	this.instance_15 = new lib._00010();
	this.instance_15.setTransform(354.1,-20232.6,1,1,0,0,0,8.3,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_87,p:{y:-20231.6}}]}).to({state:[{t:this.instance_15}]},2766).to({state:[{t:this.shape_87,p:{y:-20231.7}}]},2650).to({state:[]},116).wait(5531));

	// 10v right
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_88.setTransform(330.1,-20346);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_89.setTransform(330.3,-20346);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgyBRIAAgMIAqgqQAOgTAIgMQAKgPgBgNQAAgOgHgIQgHgJgOAAQgKAAgIAGQgJAFgHAIIgLgMQAJgLAMgGQAMgHAPAAQAUABAMAMQANANABAVQgBAPgIAQQgIANgPARIggAlIAOgBIAMgBIAtAAIAAASg");
	this.shape_90.setTransform(330,-20346.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgeBLQgNgGgIgJIAKgOQAIAIAKAFQAJAGAOAAQANAAAJgIQAJgIAAgNQABgJgFgIQgGgHgKgEQgLgEgSAAIAAgNQARgBAIgDQAKgEAEgHQAEgHAAgIQAAgMgHgHQgHgGgLgBQgKABgIAEQgJAFgHAHIgLgNQAJgJALgFQAMgGANAAQANAAAKAFQALAEAGAJQAGAJAAANQAAAPgHAJQgJAKgMAEIAAABQAJACAIAEQAIAFAEAIQAFAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgRAAgNgHg");
	this.shape_91.setTransform(329.8,-20346);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAXAAIAABhIAVAAIAAAQIgVAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIABgLIAAgKIgBAAIgGALg");
	this.shape_92.setTransform(329.9,-20346);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgWBOQgKgEgHgFQgIgEgEgGIAJgNQAIAHAJAFQAKAFANABQAIAAAJgFQAHgEAFgIQAFgJAAgLQAAgQgKgJQgJgIgNAAQgIAAgGADQgHACgHADIgLgFIAGhNIBNAAIAAASIg8AAIgDAvIAKgEQAHgCAFAAQAOAAALAFQALAFAHALQAGAKABARQgBARgIAMQgHAMgMAGQgNAHgMAAQgMAAgKgDg");
	this.shape_93.setTransform(329.8,-20345.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_94.setTransform(330.2,-20346);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgRBPQACgeAFgXQAEgZAIgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgJARgFAPQgFARgDATQgDATAAAXg");
	this.shape_95.setTransform(330.1,-20346);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_96.setTransform(330.1,-20346);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgfBNQgJgEgGgIIALgMQAFAFAGAEQAHADAIAAQAJAAAKgGQAJgHAGgPQAGgPABgXQgIAHgKAGQgKAFgIAAQgVAAgMgMQgMgKgBgZQABgPAGgMQAGgLALgHQALgGAMAAQAPAAAMAIQAMAJAHARQAIARAAAZQgBAegIAUQgIATgPAJQgNAJgOAAQgNAAgKgFgAgWg3QgIAJAAAQQAAAQAHAJQAIAHAOAAQAGAAAJgDQAIgFAJgMQgCgXgKgMQgIgMgOAAQgLAAgIAKg");
	this.shape_97.setTransform(330,-20346);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88}]}).to({state:[{t:this.shape_88}]},2766).to({state:[{t:this.shape_89,p:{x:330.3}}]},276).to({state:[{t:this.shape_90}]},275).to({state:[{t:this.shape_91}]},273).to({state:[{t:this.shape_92}]},276).to({state:[{t:this.shape_93}]},275).to({state:[{t:this.shape_94}]},275).to({state:[{t:this.shape_95}]},274).to({state:[{t:this.shape_96}]},250).to({state:[{t:this.shape_97}]},275).to({state:[{t:this.shape_89,p:{x:317.9}},{t:this.shape_88}]},276).to({state:[]},41).wait(5531));

	// 10000
	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_98.setTransform(263.1,-20520.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_99.setTransform(263.3,-20520.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgxBRIAAgMIApgqQAOgTAJgMQAIgPABgNQAAgOgIgIQgIgJgNAAQgKAAgIAGQgJAFgHAIIgLgMQAJgLAMgGQALgHAQAAQAUABANAMQAMANABAVQAAAPgJAQQgIANgPARIggAlIAOgBIALgBIAuAAIAAASg");
	this.shape_100.setTransform(263,-20520.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98,p:{y:-20520.3}}]}).to({state:[{t:this.shape_98,p:{y:-20520.6}}]},2766).to({state:[{t:this.shape_99}]},998).to({state:[{t:this.shape_100}]},1000).to({state:[]},768).wait(5531));

	// 1000
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_101.setTransform(279.6,-20520.3);

	this.instance_16 = new lib._01000();
	this.instance_16.setTransform(279.7,-20521.5,1,1,0,0,0,8.3,17.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgQBPQABgeAEgXQAGgZAHgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgKARgFAPQgFARgCATQgDATAAAXg");
	this.shape_102.setTransform(279.6,-20520.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_101}]}).to({state:[{t:this.instance_16}]},2766).to({state:[{t:this.shape_102}]},2698).to({state:[]},68).wait(5531));

	// 100
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_103.setTransform(296.1,-20520.3);

	this.instance_17 = new lib._00100();
	this.instance_17.setTransform(296.2,-20521.5,1,1,0,0,0,8.3,17.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_104.setTransform(296.2,-20520.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_103}]}).to({state:[{t:this.instance_17}]},2766).to({state:[{t:this.shape_104}]},2758).to({state:[]},8).wait(5531));

	// 10
	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_105.setTransform(312.7,-20520);

	this.instance_18 = new lib._00010();
	this.instance_18.setTransform(312.8,-20521.3,1,1,0,0,0,8.3,17.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAWAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIABgLIAAgKIgBAAIgGALg");
	this.shape_106.setTransform(312.5,-20520.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_105}]}).to({state:[{t:this.instance_18}]},2766).to({state:[{t:this.shape_106}]},2763).to({state:[]},3).wait(5531));

	// 1
	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_107.setTransform(329.2,-20520);

	this.instance_19 = new lib._00001();
	this.instance_19.setTransform(329.3,-20521.3,1,1,0,0,0,8.3,17.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_108.setTransform(329.2,-20520.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_107}]}).to({state:[{t:this.instance_19}]},2766).to({state:[{t:this.shape_108}]},2765).to({state:[]},1).wait(5531));

	// 10v left
	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_109.setTransform(90.1,-20346);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_110.setTransform(90.3,-20346);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgyBRIAAgMIAqgqQAOgTAIgMQAKgPAAgNQAAgOgIgIQgHgJgOAAQgJAAgJAGQgJAFgGAIIgMgMQAJgLAMgGQAMgHAPAAQAUABANAMQAMANAAAVQABAPgJAQQgIANgPARIgfAlIANgBIALgBIAvAAIAAASg");
	this.shape_111.setTransform(90,-20346.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgfBLQgMgGgIgJIAKgOQAIAIAJAFQALAGANAAQANAAAJgIQAJgIAAgNQAAgJgFgIQgFgHgKgEQgLgEgRAAIAAgNQAQgBAIgDQAKgEAEgHQAEgHABgIQAAgMgIgHQgHgGgLgBQgKABgJAEQgIAFgHAHIgLgNQAJgJAMgFQALgGANAAQANAAAKAFQALAEAGAJQAHAJAAANQgBAPgIAJQgHAKgNAEIAAABQAJACAIAEQAHAFAFAIQAFAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgRAAgOgHg");
	this.shape_112.setTransform(89.8,-20346);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBChkIAXAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIAAgLIABgKIgBAAIgGALg");
	this.shape_113.setTransform(89.9,-20346);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgWBOQgJgEgIgFQgIgEgFgGIALgNQAGAHAKAFQAJAFAPABQAHAAAIgFQAIgEAFgIQAFgJgBgLQAAgQgIgJQgKgIgOAAQgHAAgHADQgGACgGADIgLgFIAEhNIBOAAIAAASIg7AAIgEAvIALgEQAFgCAGAAQANAAAMAFQALAFAGALQAHAKAAARQAAARgHAMQgIAMgMAGQgMAHgNAAQgMAAgKgDg");
	this.shape_114.setTransform(89.8,-20345.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_115.setTransform(90.2,-20346);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgQBPQAAgeAFgXQAGgZAHgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgJARgGAPQgFARgCATQgDATgBAXg");
	this.shape_116.setTransform(90.1,-20346);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_117.setTransform(90.1,-20346);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgfBNQgJgEgHgIIAMgMQAFAFAGAEQAIADAHAAQAJAAAKgGQAJgHAGgPQAGgPAAgXQgHAHgKAGQgKAFgIAAQgVAAgMgMQgMgKgBgZQAAgPAHgMQAGgLALgHQALgGAMAAQAOAAANAIQAMAJAHARQAHARAAAZQABAegJAUQgIATgPAJQgNAJgOAAQgNAAgKgFgAgWg3QgIAJAAAQQAAAQAHAJQAIAHAPAAQAFAAAJgDQAJgFAIgMQgCgXgKgMQgIgMgOAAQgLAAgIAKg");
	this.shape_118.setTransform(90,-20346);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_109}]}).to({state:[{t:this.shape_110,p:{x:90.3}}]},276).to({state:[{t:this.shape_111}]},275).to({state:[{t:this.shape_112}]},273).to({state:[{t:this.shape_113}]},276).to({state:[{t:this.shape_114}]},275).to({state:[{t:this.shape_115}]},275).to({state:[{t:this.shape_116}]},274).to({state:[{t:this.shape_117}]},250).to({state:[{t:this.shape_118}]},275).to({state:[{t:this.shape_110,p:{x:77.9}},{t:this.shape_109}]},276).to({state:[]},2807).wait(5531));

	// 100
	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_119.setTransform(60.1,-20169.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDIAPgHIAOAAIAACMIAgAAIAAARg");
	this.shape_120.setTransform(60.3,-20169.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgxBRIAAgMIAogqQAPgTAJgMQAIgPABgNQgBgOgHgIQgIgJgNAAQgJAAgJAGQgJAFgGAIIgMgMQAJgLAMgGQAMgHAPAAQAUABANAMQAMANABAVQAAAPgJAQQgIANgPARIggAlIAOgBIALgBIAvAAIAAASg");
	this.shape_121.setTransform(60,-20169.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgfBLQgMgGgIgJIALgOQAGAIALAFQAJAGAOAAQANAAAJgIQAJgIAAgNQABgJgGgIQgEgHgMgEQgKgEgSAAIAAgNQARgBAIgDQAKgEAFgHQADgHABgIQgBgMgHgHQgHgGgLgBQgKABgJAEQgIAFgHAHIgLgNQAJgJAMgFQALgGANAAQANAAAKAFQALAEAGAJQAHAJgBANQAAAPgIAJQgHAKgNAEIAAABQAJACAIAEQAHAFAFAIQAFAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgSAAgNgHg");
	this.shape_122.setTransform(59.8,-20169.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAWAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIABgLIAAgKIgBAAIgGALg");
	this.shape_123.setTransform(59.9,-20169.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgWBOQgKgEgHgFQgIgEgEgGIAJgNQAHAHAKAFQAKAFANABQAJAAAHgFQAIgEAFgIQAFgJgBgLQABgQgKgJQgJgIgNAAQgJAAgGADQgGACgGADIgMgFIAFhNIBOAAIAAASIg7AAIgEAvIALgEQAGgCAFAAQAOAAALAFQALAFAHALQAGAKABARQgBARgHAMQgIAMgMAGQgNAHgMAAQgMAAgKgDg");
	this.shape_124.setTransform(59.8,-20169.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_125.setTransform(60.2,-20169.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgRBPQABgeAGgXQAEgZAIgTQAKgVAPgWIhNAAIAAgRIBlAAIAAAMQgOASgKARQgIARgFAPQgFARgDATQgCATgBAXg");
	this.shape_126.setTransform(60.1,-20169.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_119}]}).to({state:[{t:this.shape_120}]},363).to({state:[{t:this.shape_121}]},364).to({state:[{t:this.shape_122}]},364).to({state:[{t:this.shape_123}]},364).to({state:[{t:this.shape_124}]},364).to({state:[{t:this.shape_125}]},364).to({state:[{t:this.shape_126}]},364).to({state:[]},2985).wait(5531));

	// 10
	this.instance_20 = new lib._10s();
	this.instance_20.setTransform(75.7,-20170.2,1,1,0,0,0,8.3,17.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_127.setTransform(75.7,-20169.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20}]}).to({state:[{t:this.shape_127}]},2766).to({state:[]},2766).wait(5531));

	// 1
	this.instance_21 = new lib._00001();
	this.instance_21.setTransform(93.3,-20170,1,1,0,0,0,8.3,17.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_128.setTransform(93.1,-20169.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21}]}).to({state:[{t:this.shape_128}]},2766).to({state:[]},2766).wait(5531));

	// Layer 27
	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgbAHIAAgNIA3AAIAAANg");
	this.shape_129.setTransform(60.8,-20345.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgbAHIAAgNIA3AAIAAANg");
	this.shape_130.setTransform(8.8,-20518.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_130},{t:this.shape_129}]}).wait(11063));

	// 10000
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_131.setTransform(27.1,-20520.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_132.setTransform(27.3,-20520.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgyBRIAAgMIAqgqQAOgTAIgMQAKgPAAgNQgBgOgHgIQgIgJgNAAQgKAAgIAGQgJAFgGAIIgMgMQAJgLAMgGQALgHAQAAQAUABANAMQAMANAAAVQAAAPgIAQQgIANgPARIggAlIAOgBIALgBIAuAAIAAASg");
	this.shape_133.setTransform(27,-20520.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_131}]}).to({state:[{t:this.shape_132}]},999).to({state:[{t:this.shape_133}]},1000).to({state:[]},3533).wait(5531));

	// 1000
	this.instance_22 = new lib._01000();
	this.instance_22.setTransform(43.7,-20521.2,1,1,0,0,0,8.3,17.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgRBPQABgeAGgXQAEgZAIgTQAKgVAPgWIhNAAIAAgRIBlAAIAAAMQgOASgKARQgJARgEAPQgGARgCATQgCATgCAXg");
	this.shape_134.setTransform(43.6,-20520.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22}]}).to({state:[{t:this.shape_134}]},2699).to({state:[]},2833).wait(5531));

	// 100
	this.instance_23 = new lib._00100();
	this.instance_23.setTransform(60.2,-20521.2,1,1,0,0,0,8.3,17.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_135.setTransform(60.2,-20520.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23}]}).to({state:[{t:this.shape_135}]},2759).to({state:[]},2773).wait(5531));

	// 10
	this.instance_24 = new lib._00010();
	this.instance_24.setTransform(76.8,-20521,1,1,0,0,0,8.3,17.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAWAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIABgLIAAgKIgBAAIgGALg");
	this.shape_136.setTransform(76.5,-20520);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24}]}).to({state:[{t:this.shape_136}]},2764).to({state:[]},2768).wait(5531));

	// 1
	this.instance_25 = new lib._00001();
	this.instance_25.setTransform(93.3,-20521,1,1,0,0,0,8.3,17.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_137.setTransform(93.3,-20520);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25}]}).to({state:[{t:this.shape_137}]},2766).to({state:[]},2766).wait(5531));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-914.1,-20538.9,1766.1,754.8);


(lib.btn_playpause = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pause();
	this.instance.setTransform(26.3,26.3,1,1,0,0,0,26.3,26.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.6,52.6);


(lib.flow_backwards = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1019 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1019).call(this.frame_1019).wait(1));

	// Layer 3
	this.instance = new lib.flow_an_small();
	this.instance.setTransform(59.4,-20067.3,1,1,-90,0,0,2.1,97.8);

	this.instance_1 = new lib.flow_an();
	this.instance_1.setTransform(-2.7,-20026.3,1,1,-90,0,0,2.1,104.8);

	this.instance_2 = new lib.flow_an();
	this.instance_2.setTransform(-212.7,-20026.3,1,1,-90,0,0,2.1,104.8);

	this.instance_3 = new lib.flow_an_small();
	this.instance_3.setTransform(-420.6,-20067.3,1,1,-90,0,0,2.1,97.8);

	this.instance_4 = new lib.flow_an_small();
	this.instance_4.setTransform(143.6,-20009.6,1,1,180,0,0,-38.9,148.9);

	this.instance_5 = new lib.flow_an_small();
	this.instance_5.setTransform(-503.5,-19973.1,1,1,0,0,0,-38.9,148.9);

	this.instance_6 = new lib.flow_an_small();
	this.instance_6.setTransform(-510.6,-20086.5,1,1,0,0,0,-38.9,148.9);

	this.instance_7 = new lib.flow_an_small();
	this.instance_7.setTransform(-540.8,-20070.4,1,1,180,0,0,-38.9,148.9);

	this.instance_8 = new lib.flow_an();
	this.instance_8.setTransform(-482.7,-20026.3,1,1,-90,0,0,2.1,104.8);

	this.instance_9 = new lib.flow_an_small();
	this.instance_9.setTransform(-588.1,-20101.8,1,1,-90,0,0,2.1,97.8);

	this.instance_10 = new lib.flow_an_small();
	this.instance_10.setTransform(-833.6,-19948,1,1,180,0,0,2.1,97.8);

	this.instance_11 = new lib.flow_an();
	this.instance_11.setTransform(-692.7,-20026.3,1,1,-90,0,0,2.1,104.8);

	this.instance_12 = new lib.flow_an_small();
	this.instance_12.setTransform(-9.7,-19737.8,1,1,180,0,0,2.1,97.8);

	this.instance_13 = new lib.flow_an();
	this.instance_13.setTransform(-39.8,-19757.1,1,1,-90,0,0,2.1,104.8);

	this.instance_14 = new lib.flow_an();
	this.instance_14.setTransform(-109.8,-19757.1,1,1,-90,0,0,2.1,104.8);

	this.instance_15 = new lib.flow_an();
	this.instance_15.setTransform(-319.8,-19757.1,1,1,-90,0,0,2.1,104.8);

	this.instance_16 = new lib.flow_an();
	this.instance_16.setTransform(-529.8,-19757.1,1,1,-90,0,0,2.1,104.8);

	this.instance_17 = new lib.flow_an();
	this.instance_17.setTransform(-621.6,-19855.5,1,1,0,0,0,2.1,104.8);

	this.instance_18 = new lib.flow_an();
	this.instance_18.setTransform(-719.5,-19955.5,1,1,-90,0,0,2.1,104.8);

	this.instance_19 = new lib.flow_an();
	this.instance_19.setTransform(-824.6,-19900.5,1,1,180,0,0,2.1,104.8);

	this.instance_20 = new lib.flow_an_small();
	this.instance_20.setTransform(-763.3,-19814.2,1,1,90,0,0,2.1,97.8);

	this.instance_21 = new lib.flow_an_small();
	this.instance_21.setTransform(-615.3,-19814.2,1,1,90,0,0,2.1,97.8);

	this.instance_22 = new lib.flow_an();
	this.instance_22.setTransform(-641.7,-19779.2,1,1,180,0,0,2.1,104.8);

	this.instance_23 = new lib.flow_an_small();
	this.instance_23.setTransform(-580.8,-19761.2,1,1,0,0,0,2.1,97.8);

	this.instance_24 = new lib.flow_an();
	this.instance_24.setTransform(-528.9,-19732.8,1,1,90,0,0,2.1,104.8);

	this.instance_25 = new lib.flow_an();
	this.instance_25.setTransform(-458.9,-19732.8,1,1,90,0,0,2.1,104.8);

	this.instance_26 = new lib.flow_an();
	this.instance_26.setTransform(-248.9,-19732.8,1,1,90,0,0,2.1,104.8);

	this.instance_27 = new lib.flow_an();
	this.instance_27.setTransform(-38.9,-19732.8,1,1,90,0,0,2.1,104.8);

	this.instance_28 = new lib.flow_an_small();
	this.instance_28.setTransform(108.8,-19790.2,1,1,0,0,0,2.1,97.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1019).wait(1));

	// Layer 2
	this.instance_29 = new lib.flow_an();
	this.instance_29.setTransform(317.9,-19876.6,0.322,1,0,0,0,2.2,104.8);

	this.instance_30 = new lib.flow_an();
	this.instance_30.setTransform(301.2,-19789.1,1,1,90,0,0,2.1,104.8);

	this.instance_31 = new lib.flow_an();
	this.instance_31.setTransform(6.9,-20053.9,1,1,-90,0,0,2.1,104.8);

	this.instance_32 = new lib.flow_an();
	this.instance_32.setTransform(-154.5,-19831.4,0.322,1,0,0,0,2.2,104.8);

	this.instance_33 = new lib.flow_an_small();
	this.instance_33.setTransform(262.8,-20025.4,1,1,90,0,0,2.1,97.8);

	this.instance_34 = new lib.flow_an_small();
	this.instance_34.setTransform(226.7,-20125.9,1,1,0,0,0,2.1,97.8);

	this.instance_35 = new lib.flow_an_small();
	this.instance_35.setTransform(147.1,-20136.9,1,1,-90,0,0,2.1,97.8);

	this.instance_36 = new lib.flow_an_small();
	this.instance_36.setTransform(110,-20069.2,1,1,180,0,0,2.1,97.8);

	this.instance_37 = new lib.flow_an_small();
	this.instance_37.setTransform(201.1,-20050.7,1,1,0,0,0,2.1,97.8);

	this.instance_38 = new lib.flow_an();
	this.instance_38.setTransform(225.1,-20111.1,1,1,-90,0,0,2.1,104.8);

	this.instance_39 = new lib.flow_an();
	this.instance_39.setTransform(8.4,-20146.9,1,1,0,0,0,2.1,104.8);

	this.instance_40 = new lib.flow_an();
	this.instance_40.setTransform(317.9,-20006.6,0.322,1,0,0,0,2.2,104.8);

	this.instance_41 = new lib.flow_an();
	this.instance_41.setTransform(-9.1,-20372.4,1,1,0,0,0,2.1,104.8);

	this.instance_42 = new lib.flow_an();
	this.instance_42.setTransform(-9.9,-20462.6,1,1,0,0,0,2.1,104.8);

	this.instance_43 = new lib.flow_an();
	this.instance_43.setTransform(-57.1,-20565.1,1,1,-90,0,0,2.1,104.8);

	this.instance_44 = new lib.flow_an();
	this.instance_44.setTransform(-159.1,-20600,1,1,180,0,0,2.1,104.8);

	this.instance_45 = new lib.flow_an();
	this.instance_45.setTransform(-159.1,-20301.6,1,1,180,0,0,2.1,104.8);

	this.instance_46 = new lib.flow_an();
	this.instance_46.setTransform(-246.7,-20198.4,1,1,-90,0,0,2.1,104.8);

	this.instance_47 = new lib.flow_an();
	this.instance_47.setTransform(-427.2,-20198.4,1,1,-90,0,0,2.1,104.8);

	this.instance_48 = new lib.flow_an();
	this.instance_48.setTransform(-524.1,-20287.5,1,1,0,0,0,2.1,104.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29}]}).wait(1020));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-536.2,-20694.9,946.5,958.5);


// stage content:
(lib.plc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		this.goback.addEventListener("click", fl_ClickToGoToAndStopAtFrame_10.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_10()
		{
			this.gotoAndStop(1);
		}
		
		
		
		this.forward.addEventListener("click", fl_ClickToGoToAndStopAtFrame_11.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_11()
		{
			this.gotoAndStop(2);
		}
		
		
		this.clean.addEventListener("click", fl_ClickToGoToAndStopAtFrame_50.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_50()
		{
			this.gotoAndStop(0);
		}
		var fr = 1; //1=normal 0=slow
		var playing=1; //1=playing 0=stopped
		
		//buttons
		this.btn_playpause.addEventListener("click", playPause.bind(this)); //toggle play
		
		
		function playPause() 
		{
			if (playing==1) {
			playing=0;
			this.moving_down.stop();
			this.moving_forward.stop();
			//alert("stopAll");
			}
			else {
			playing=1;
			this.moving_down.play();
			this.moving_forward.play();
			//alert("playAll");
			}
				
		}
	}
	this.frame_1 = function() {
		this.stop();
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.pause.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4()
		{
			this.moving_down.stop();
		}
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer 9
	this.pause = new lib.stopit();
	this.pause.setTransform(744.4,63.5,1,1,0,0,0,31.5,31.5);
	this.pause.alpha = 0;
	this.pause._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pause).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Letters
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQAbQgDgDgCgEQgDgEAAgEQAAgJAIgDQAHgFAOgCQAAgDgCgBQgCgCgCAAIgGABIgIAEIgHgNIAMgFQAHgCAEAAQALAAAGAGQAHAHAAANIAAAeIgQAAIgCgGIgHAFQgCACgFAAQgFAAgEgCgAgCAGQgDACAAACIABADIAEABIACgBIADgDIAAgHQgFABgCACg");
	this.shape.setTransform(1033.4,456.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAKAkIAAgdIgTAAIAAAdIgUAAIAAhHIAUAAIAAAbIATAAIAAgbIAUAAIAABHg");
	this.shape_1.setTransform(1036.8,443.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKAhQgJgEgEgIQgFgIAAgNQAAgKAFgJQAFgIAIgFQAIgEAIgBQAHABAFACQAHADADAEIgLAMIgEgEIgHgBQgEAAgCADQgEACgCAFQgCAFAAAFQAAAKAEAFQAEAGAGAAQAEAAADgCIAFgEIALAMQgEAFgHADQgGADgGAAQgJAAgHgFg");
	this.shape_2.setTransform(1029.8,443.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgCAlIgHgFIgCAGIgPAAIAAhMIAUAAIAAASIgBAIQADgDAEgCQABgBAEAAQAGAAAGAEQAEADADAHQADAEAAAJQAAAJgEAHQgDAHgFADQgFAFgHAAQgDAAgCgDgAgDgBIgDABIAAAVIADACIADABQACAAACgDQADgEAAgIQAAgHgCgCQgCgCgDAAIgDABg");
	this.shape_3.setTransform(1001.5,455.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AALAkIAAgdIgVAAIAAAdIgTAAIAAhHIATAAIAAAbIAVAAIAAgbIATAAIAABHg");
	this.shape_4.setTransform(1004.7,443.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgLAhQgHgEgFgIQgFgIAAgNQAAgKAFgJQAFgIAIgFQAIgEAIgBQAHABAGACQAFADAEAEIgKAMIgGgEIgGgBQgFAAgBADQgEACgCAFQgCAFAAAFQAAAKAEAFQAEAGAFAAQAFAAADgCIAGgEIAKAMQgFAFgFADQgHADgHAAQgIAAgIgFg");
	this.shape_5.setTransform(997.7,443.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMBAQAJgOADgRQADgQAAgRQAAgQgDgQQgDgRgJgOIAIgEQAHAPAFARQAFARAAASQAAATgFARQgFARgHAPg");
	this.shape_6.setTransform(1154.7,590.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeA0IAAhmIAKAAIABAJIAAAAIALgHQAGgDAEAAQAKAAAGAEQAHAFADAIQADAIAAAMQAAAMgEAHQgFAJgHAEQgHAFgIAAIgIgCQgFgCgFgEIAAAMIAAAZgAgIgnIgKAIIAAAkQAFAEAEACQAFACAEAAQAHAAAGgIQAFgGABgNQAAgMgFgIQgEgHgKAAQgDAAgFACg");
	this.shape_7.setTransform(1148.9,592.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgWAeQgGgIABgOIAAgsIAMAAIAAArQAAAKADAFQADAEAIAAQADAAAFgDQAEgDAFgGIAAgyIANAAIAABHIgLAAIgBgLIAAAAQgFAFgGAEQgGAEgFAAQgMgBgFgGg");
	this.shape_8.setTransform(1140.3,591.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHAkQgFgRAAgTQAAgSAFgRQAFgRAHgPIAIAEQgJAOgEARQgCAQAAAQQAAARACAQQAEARAJAOIgIAEQgHgPgFgRg");
	this.shape_9.setTransform(1134.4,590.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgRAjQgEgCgDgFQgDgFAAgGQAAgMALgFQALgGAVgCIgBgJQgCgEgDgDQgDgDgGAAQgFAAgFADIgKAFIgFgIQAFgEAIgDQAHgDAHAAQANAAAGAIQAGAIAAAOIAAArIgKAAIgBgJIgMAHQgFADgGABQgGAAgFgDgAgCACQgHACgDAEQgDADAAAFQAAAGAEADQADADAGAAQADAAAFgDQAFgCAFgFIAAgSQgMAAgGACg");
	this.shape_10.setTransform(1124.7,591.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMBAQAJgOADgRQADgQAAgRQAAgQgDgQQgDgRgJgOIAIgEQAHAPAFARQAFARAAASQAAATgFARQgFARgHAPg");
	this.shape_11.setTransform(693.3,590.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAQAlIAAgrQAAgKgDgFQgEgEgHAAQgDAAgFADQgEACgGAGIAAAzIgMAAIAAhHIAKAAIABAKIABAAQAFgFAGgDQAFgEAGAAQAMAAAFAHQAGAIgBAOIAAAsg");
	this.shape_12.setTransform(687.4,591.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAPAkIgKglIgDgKIgCgLIAAAAIgBALIgDAKIgKAlIgOAAIgVhHIANAAIALAoIACALIACAKIABAAIACgKIADgLIALgoIAKAAIALAoIADALIACAKIABAAIACgKIACgLIALgoIAMAAIgUBHg");
	this.shape_13.setTransform(677.9,591.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgPAhQgIgFgFgIQgEgIAAgMQAAgLAEgIQAFgJAIgEQAHgFAIAAQAIAAAIAFQAIAEAEAJQAFAIAAALQAAAMgFAIQgEAIgIAFQgIAEgIABQgIgBgHgEgAgKgXQgEADgDAHQgDAGAAAHQABAMAFAIQAGAHAIAAQAJAAAGgHQAFgIAAgMQAAgHgCgGQgDgHgFgDQgEgEgGAAQgFAAgFAEg");
	this.shape_14.setTransform(668.5,591.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgXAsQgIgKAAgTQAAgLAFgHQAEgIAHgFQAHgEAIAAQAGAAAEABIAKAHIgBgNIAAgcIAMAAIAABpIgKAAIgBgJIgKAHQgGADgEABQgOgBgJgJgAgHgHQgFADgDAFQgCAGAAAIQAAANAEAIQAGAHAIAAQAEABAFgDQAFgDAEgFIAAgjQgEgFgFgCQgEgCgFAAQgDABgFADg");
	this.shape_15.setTransform(660,589.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHAkQgFgRAAgTQAAgSAFgRQAFgRAHgPIAIAEQgJAOgDARQgDAQAAAQQAAARADAQQADARAJAOIgIAEQgHgPgFgRg");
	this.shape_16.setTransform(654.1,590.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgJAzQgFgCgFgFIgCAIIgJAAIAAhpIAMAAIAAAeIAAAMQAFgEAFgDQAGgCAEAAQAKAAAGAEQAHAFADAIQADAGAAALQAAANgEAIQgFAKgHAEQgHAFgIAAQgDAAgGgDgAgIgIQgFADgFAEIAAAlQAFAEAEACQAFABAEAAQAHABAGgJQAFgHABgOQAAgLgFgGQgEgHgKgBQgDABgFACg");
	this.shape_17.setTransform(644.5,589.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAeBAIAAgmIABgPIACgOIACgPIgBAAIgLAcIgRArIgLAAIgSgrIgKgcIgBAAIACAPIACAOIAAAPIAAAmIgfAAIAAh/IAjAAIAUA2IAGATIAAAAIAIgTIATg2IAjAAIAAB/g");
	this.shape_18.setTransform(977.4,115.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAXBAIgGgcIgiAAIgGAcIgjAAIAnh/IAnAAIAnB/gAALAKIgCgJIgFgSIgEgVIAAAAIgEAVIgFASIgCAJIAWAAg");
	this.shape_19.setTransform(964,115.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAPBAIgUgrIgNAAIAAArIgiAAIAAh/IAxAAQAMAAALAEQAMAEAHAJQAHAJAAAQQAAANgFAIQgHAJgJAFIAcAygAgSgEIAMAAQAJAAAEgFQAFgEABgIQgBgIgFgEQgEgDgJAAIgMAAg");
	this.shape_20.setTransform(952.8,115.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgVA7QgOgHgJgPQgIgPgBgWQABgTAIgPQAJgPAPgIQAPgIAPAAQAOAAAKAFQALAFAHAHIgTAVQgFgEgFgDQgFgCgHAAQgJAAgFAEQgHAFgEAIQgEAIAAALQAAARAIAKQAJAKAPAAIAFgBQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBIAAgRIgTAAIAAgaIAxAAIAAA7QgHAHgMAEQgMAFgNAAQgQAAgPgHg");
	this.shape_21.setTransform(939.4,115.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeA6QgNgIgIgPQgHgPAAgUQAAgUAHgPQAIgPANgIQAOgHAQAAQASAAANAHQANAIAIAPQAHAPABAUQgBAUgHAPQgIAPgNAIQgNAIgSAAQgQAAgOgIgAgRgaQgHAJAAARQAAAQAHALQAHAKAKAAQALAAAHgKQAGgLAAgQQAAgRgGgJQgHgKgLAAQgKAAgHAKg");
	this.shape_22.setTransform(926.3,115.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAPBAIgUgrIgNAAIAAArIgiAAIAAh/IAxAAQALAAAMAEQAMAEAHAJQAHAJAAAQQAAANgFAIQgHAJgJAFIAcAygAgSgEIAMAAQAJAAAEgFQAGgEAAgIQAAgIgGgEQgEgDgJAAIgMAAg");
	this.shape_23.setTransform(913.8,115.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgxBAIAAh/IAxAAQANAAAMAEQALAEAHAJQAHAKAAAQQAAAPgHAJQgHAJgMAFQgMAFgMAAIgPAAIAAApgAgPgCIAOAAQAIAAAFgFQAFgEAAgJQAAgJgGgDQgEgEgIAAIgOAAg");
	this.shape_24.setTransform(901.3,115.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgTAlIAAhHIAKAAIACANIAAAAQAEgHADgEQAGgEAGAAIAEAAIAEACIgDAKIgDAAIgEgBQgEAAgFAEQgEAEgDAJIAAAtg");
	this.shape_25.setTransform(587.3,687);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgRAjQgEgCgDgFQgDgFAAgGQAAgMALgFQALgGAVgCIgBgJQgCgEgDgDQgDgDgGAAQgFAAgFADIgKAFIgFgIQAFgEAIgDQAHgDAHAAQANAAAGAIQAGAIAAAOIAAArIgKAAIgBgJIgMAHQgFADgGABQgGAAgFgDgAgCACQgHACgDAEQgDADAAAFQAAAGAEADQADADAGAAQADAAAFgDQAFgCAFgFIAAgSQgMAAgGACg");
	this.shape_26.setTransform(580.1,687.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgJAzQgFgCgFgEIgCAHIgJAAIAAhpIAMAAIAAAeIAAAMQAFgEAFgCQAGgEAEAAQAKABAGAEQAHAFADAIQADAGAAALQAAANgEAJQgFAIgHAFQgHAEgIABQgDAAgGgDgAgIgIQgFACgFAFIAAAlQAFAEAEABQAFACAEABQAHgBAGgHQAFgIABgOQAAgMgFgFQgEgHgKgBQgDAAgFADg");
	this.shape_27.setTransform(572.6,685.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgNAuIgKgFIgHgGIAGgIQAEAEAGAEQAFADAJAAQAEAAAEgDQAFgDADgEQADgFAAgHQAAgKgGgFQgFgEgIAAQgFAAgDACIgIACIgHgCIADguIAuAAIAAAKIgjAAIgCAdIAHgDIAFgBQAJAAAGADQAHADAEAGQAEAFAAALQAAAKgFAHQgEAHgHAEQgIAEgHAAIgNgCg");
	this.shape_28.setTransform(564.3,686.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAIAvIAAgaIgoAAIAAgIIAmg7IAPAAIAAA5IAMAAIAAAKIgMAAIAAAagAAFgbIgEAHIgVAfIAcAAIAAgaIAAgGIABgGIAAgGIgBAAIgDAGg");
	this.shape_29.setTransform(557,686);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("ABYC4IAAhtIACgrIAFgsIAFgrIgCAAIgfBVIgyB8IgjAAIgzh8IgdhVIgCAAIAFArIAFAsIACArIAABtIhaAAIAAluIBlAAIA6CYIATA7IACAAIAUg7IA4iYIBlAAIAAFug");
	this.shape_30.setTransform(286.8,975.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgbA8QgLgFgHgIIAPgWQAGAGAHADQAGADAHAAQAGAAAFgDQAFgDAAgGQAAgEgCgEQgDgDgGgCQgFgCgNAAIAAgVQAKAAAGgCQAEgCADgDQACgDAAgFQAAgFgDgDQgDgDgFAAQgGAAgFADQgFACgGAFIgRgUQAJgIAKgEQAKgEAMgBQAMAAAKAFQAKAEAGAIQAFAHAAAMQAAAJgFAHQgFAGgKAFIAAABQALABAGAHQAHAIAAAMQAAAMgHAIQgGAIgLAEQgLAFgMAAQgPgBgLgEg");
	this.shape_31.setTransform(1242.4,940.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgbBWIAhiqIAWAAIghCqg");
	this.shape_32.setTransform(1233.9,941.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAEA+IAAgcIg0AAIAAgYIArhHIAoAAIAABFIAOAAIAAAaIgOAAIAAAcgAAAgWIgEALIgMATIAUAAIAAgMIAAgJIAAgLIABgJIgBAAIgEALg");
	this.shape_33.setTransform(1225.4,940.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAXBAIgGgcIgiAAIgGAcIgjAAIAnh/IAnAAIAnB/gAALAKIgCgJIgFgSIgEgVIAAAAIgEAVIgFASIgCAJIAWAAg");
	this.shape_34.setTransform(1225.8,911.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgxBAIAAh/IAuAAQAMAAALADQALADAGAHQAHAHAAAMQAAAGgCAFQgCAGgFAEQgFAFgHACIAAABQANACAHAGQAHAHAAANQAAANgHAIQgHAJgLAEQgMAEgNAAgAgPAmIAOAAQAIAAAFgEQAFgEAAgHQAAgHgFgDQgFgEgIABIgOAAgAgPgMIALAAQAHAAAEgEQAEgEAAgGQAAgGgEgCQgEgDgHAAIgLAAg");
	this.shape_35.setTransform(922.7,911.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgxBAIAAh/IAuAAQAMAAALADQALADAGAHQAHAHAAAMQAAAGgCAFQgCAGgFAEQgFAFgHACIAAABQANACAHAGQAHAHAAANQAAANgHAIQgHAJgLAEQgMAEgNAAgAgPAmIAOAAQAIAAAFgEQAFgEAAgHQAAgHgFgDQgFgEgIABIgOAAgAgPgMIALAAQAHAAAEgEQAEgEAAgGQAAgGgEgCQgEgDgHAAIgLAAg");
	this.shape_36.setTransform(1106.7,811.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAXBAIgGgcIgiAAIgGAcIgjAAIAnh/IAnAAIAnB/gAALAKIgCgJIgFgSIgEgVIAAAAIgEAVIgFASIgCAJIAWAAg");
	this.shape_37.setTransform(1041.8,811.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgQBAIAAhiIghAAIAAgdIBkAAIAAAdIgjAAIAABig");
	this.shape_38.setTransform(1105.9,911.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgxBAIAAh/IAxAAQAMAAANAEQALAEAHAJQAHAKAAAQQAAAPgHAJQgHAJgMAFQgMAFgMAAIgPAAIAAApgAgPgCIAOAAQAIAAAFgFQAFgEAAgJQAAgJgGgDQgEgEgIAAIgOAAg");
	this.shape_39.setTransform(1042.8,911.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAPBAIgUgrIgNAAIAAArIgiAAIAAh/IAwAAQANAAALAEQAMAEAHAJQAHAJAAAQQAAANgGAIQgFAJgKAFIAcAygAgSgEIAMAAQAIAAAGgFQAEgEAAgIQAAgIgEgEQgGgDgIAAIgMAAg");
	this.shape_40.setTransform(1260.6,411.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgpBAIAAh/IBRAAIAAAdIgvAAIAAAUIAoAAIAAAaIgoAAIAAAXIAxAAIAAAdg");
	this.shape_41.setTransform(1248.5,411.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgPBAIAAh/IAfAAIAAB/g");
	this.shape_42.setTransform(1239.7,411.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAPBAIgUgrIgNAAIAAArIgiAAIAAh/IAwAAQANAAALAEQAMAEAHAJQAHAJAAAQQAAANgGAIQgFAJgKAFIAcAygAgSgEIAMAAQAIAAAFgFQAGgEgBgIQABgIgGgEQgFgDgIAAIgMAAg");
	this.shape_43.setTransform(1230.9,411.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAPBAIgUgrIgNAAIAAArIgiAAIAAh/IAxAAQALAAAMAEQAMAEAHAJQAHAJAAAQQAAANgFAIQgHAJgJAFIAcAygAgSgEIAMAAQAJAAAEgFQAGgEAAgIQAAgIgGgEQgEgDgJAAIgMAAg");
	this.shape_44.setTransform(1218.5,411.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAXBAIgGgcIgiAAIgGAcIgjAAIAnh/IAnAAIAnB/gAALAKIgCgJIgFgSIgEgVIAAAAIgEAVIgFASIgCAJIAWAAg");
	this.shape_45.setTransform(1205.9,411.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgxBAIAAh/IAuAAQAMAAALADQALADAGAHQAHAHAAAMQAAAGgCAFQgCAGgFAEQgFAFgHACIAAABQANACAHAGQAHAHAAANQAAANgHAIQgHAJgLAEQgMAEgNAAgAgPAmIAOAAQAIAAAFgEQAFgEAAgHQAAgHgFgDQgFgEgIABIgOAAgAgPgMIALAAQAHAAAEgEQAEgEAAgGQAAgGgEgCQgEgDgHAAIgLAAg");
	this.shape_46.setTransform(1194.5,411.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAJAkIgOghIgHgOIAAAAIACAMIAAAOIAAAVIgSAAIAAhHIATAAIAPAhIAHAOIABAAIgCgJIgBgHIAAgKIAAgVIASAAIAABHg");
	this.shape_47.setTransform(896.1,288.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgcAkIAAhHIAcAAQAHAAAHACQAHACAEAGQADAFAAAJQAAAJgDAEQgFAGgGACQgHADgHAAIgIAAIAAAXgAgIAAIAIAAQAEAAADgDQACgDAAgFQAAgFgDgCQgCgCgEAAIgIAAg");
	this.shape_48.setTransform(889,288.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgcAkIAAhHIAcAAQAHAAAHACQAHACADAGQAEAFAAAJQAAAJgEAEQgEAGgGACQgHADgHAAIgIAAIAAAXgAgIAAIAIAAQAEAAADgDQACgDAAgFQAAgFgCgCQgDgCgEAAIgIAAg");
	this.shape_49.setTransform(867.8,288.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgcAkIAAhHIAWAAQAJAAAIADQAJAEAEAIQAFAIAAAMQAAAMgEAIQgFAJgIADQgJAEgIAAgAgJAVIABAAQAGAAACgCQAEgCADgFQACgEAAgIQAAgHgCgFQgDgEgEgCQgCgCgGAAIgBAAg");
	this.shape_50.setTransform(860.6,288.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgeA6QgNgIgIgPQgHgPgBgUQABgUAHgPQAIgPANgIQAOgHAQAAQARAAAOAHQANAIAIAPQAHAPABAUQgBAUgHAPQgIAPgNAIQgOAIgRAAQgQAAgOgIgAgRgaQgGAJgBARQABAQAGALQAHAKAKAAQALAAAHgKQAHgLAAgQQAAgRgHgJQgHgKgLAAQgKAAgHAKg");
	this.shape_51.setTransform(1021.4,230.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAXBAIgGgcIgiAAIgGAcIgjAAIAnh/IAnAAIAnB/gAALAKIgCgJIgFgSIgEgVIAAAAIgEAVIgFASIgCAJIAWAAg");
	this.shape_52.setTransform(1009,230.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgPBAIAAh/IAgAAIAAB/g");
	this.shape_53.setTransform(1232.8,227.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAXBAIgGgcIgiAAIgGAcIgjAAIAnh/IAnAAIAnB/gAALAKIgCgJIgFgSIgEgVIAAAAIgEAVIgFASIgCAJIAWAAg");
	this.shape_54.setTransform(1223.9,227.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgIAkIAAhHIARAAIAABHg");
	this.shape_55.setTransform(843.9,288.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgcAkIAAhHIAcAAQAHAAAHACQAGACAEAGQAFAFAAAJQAAAJgFAEQgEAGgHACQgGADgHAAIgIAAIAAAXgAgIAAIAIAAQAEAAADgDQADgDAAgFQAAgFgEgCQgDgCgDAAIgIAAg");
	this.shape_56.setTransform(838.9,288.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AARAkIAAgVIABgJIABgHIABgJIgBAAIgGAQIgKAYIgFAAIgKgYIgGgQIgBAAIABAJIABAHIABAJIAAAVIgSAAIAAhHIAUAAIAMAeIACAKIAAAAIAEgKIALgeIAUAAIAABHg");
	this.shape_57.setTransform(830.8,288.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgxBAIAAh/IAxAAQAMAAAMAEQAMAEAHAJQAHAKAAAQQAAAPgHAJQgIAJgLAFQgMAFgMAAIgPAAIAAApgAgPgCIAOAAQAIAAAFgFQAFgEAAgJQAAgJgFgDQgGgEgHAAIgOAAg");
	this.shape_58.setTransform(796.1,411.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgUA7QgOgHgHgPQgJgPAAgWQAAgTAJgPQAJgPANgIQAOgIAQAAQAMAAAKAFQAKAFAHAHIgTAVIgJgHQgFgCgGAAQgIAAgFAEQgGAFgEAIQgDAIAAALQAAARAHAKQAIAKALAAQAGAAAGgDQAGgDAEgEIASAUQgIAKgLAEQgKAFgMAAQgPAAgPgHg");
	this.shape_59.setTransform(784.1,411.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAXBAIgGgcIgiAAIgGAcIgjAAIAnh/IAnAAIAnB/gAALAKIgCgJIgFgSIgEgVIAAAAIgEAVIgFASIgCAJIAWAAg");
	this.shape_60.setTransform(1032.9,411.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAeBAIAAgmIABgPIACgOIACgPIgBAAIgLAcIgRArIgLAAIgSgrIgKgcIgBAAIACAPIACAOIAAAPIAAAmIgfAAIAAh/IAjAAIAUA2IAGATIAAAAIAIgTIATg2IAjAAIAAB/g");
	this.shape_61.setTransform(1019.4,411.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgyBAIAAh/IAmAAQARAAAPAGQAOAHAJAOQAIAOAAAWQAAAWgIAOQgIAOgOAHQgPAHgRAAgAgRAkIADAAQAIABAGgEQAIgDAEgIQAFgIgBgOQABgOgFgIQgEgIgIgDQgGgDgIAAIgDAAg");
	this.shape_62.setTransform(1005.7,411.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgmAxQgNgQgBghIAAhAIAiAAIAABFQABAQAEAIQAFAGAIAAQAKAAAFgGQAFgIgBgQIAAhFIAiAAIAABAQgBAhgMAQQgNAQgbAAQgZAAgNgQg");
	this.shape_63.setTransform(874.9,230.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgxBAIAAh/IAxAAQAMAAAMAEQAMAEAHAJQAHAKAAAQQAAAPgHAJQgIAJgLAFQgMAFgMAAIgPAAIAAApgAgPgCIAOAAQAIAAAFgFQAFgEAAgJQAAgJgFgDQgGgEgHAAIgOAAg");
	this.shape_64.setTransform(862.5,230.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgUA7QgOgHgHgPQgJgPAAgWQAAgTAJgPQAIgPAOgIQAOgIAQAAQAMAAAKAFQAKAFAHAHIgTAVIgJgHQgFgCgGAAQgIAAgFAEQgFAFgFAIQgDAIAAALQgBARAIAKQAHAKAMAAQAGAAAGgDQAFgDAFgEIASAUQgIAKgLAEQgKAFgMAAQgPAAgPgHg");
	this.shape_65.setTransform(850.5,230.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgUA7QgOgHgHgPQgJgPAAgWQAAgTAJgPQAIgPAOgIQAOgIAQAAQAMAAAKAFQAKAFAHAHIgTAVIgJgHQgFgCgGAAQgIAAgFAEQgFAFgEAIQgEAIgBALQAAARAIAKQAHAKAMAAQAGAAAGgDQAFgDAFgEIASAUQgIAKgKAEQgLAFgMAAQgPAAgPgHg");
	this.shape_66.setTransform(651.9,364.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgxBAIAAh/IAxAAQAMAAAMAEQAMAEAHAJQAHAKAAAQQAAAPgHAJQgIAJgLAFQgLAFgNAAIgPAAIAAApgAgPgCIAOAAQAIAAAFgFQAFgEAAgJQAAgJgFgDQgGgEgHAAIgOAAg");
	this.shape_67.setTransform(640.1,364.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AARBAIgbg6IgMgbIAAAAIACAXQABAMAAANIAAAlIggAAIAAh/IAjAAIAbA5IAMAbIAAAAIgBgPIgCgPIAAgRIAAglIAgAAIAAB/g");
	this.shape_68.setTransform(197.7,311.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgpBAIAAh/IBRAAIAAAdIgvAAIAAAUIAoAAIAAAaIgoAAIAAAXIAxAAIAAAdg");
	this.shape_69.setTransform(185.8,311.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgpBAIAAh/IBRAAIAAAdIgvAAIAAAUIAoAAIAAAaIgoAAIAAAXIAxAAIAAAdg");
	this.shape_70.setTransform(174.8,311.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAPBAIgUgrIgNAAIAAArIgiAAIAAh/IAwAAQAMAAAMAEQAMAEAHAJQAHAJAAAQQAAANgGAIQgFAJgKAFIAcAygAgSgEIAMAAQAJAAAEgFQAGgEgBgIQABgIgGgEQgEgDgJAAIgMAAg");
	this.shape_71.setTransform(163.4,311.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgUA7QgOgHgHgPQgJgPAAgWQAAgTAJgPQAIgPAOgIQAOgIAQAAQAMAAAKAFQAKAFAHAHIgTAVIgJgHQgFgCgGAAQgIAAgFAEQgFAFgEAIQgEAIgBALQAAARAIAKQAHAKAMAAQAGAAAGgDQAFgDAFgEIASAUQgIAKgLAEQgKAFgMAAQgPAAgPgHg");
	this.shape_72.setTransform(151.1,311.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgYA+QgNgFgLgJIATgYQAHAGAIADQAIAEAGAAQAHAAAEgDQADgCAAgEQAAgFgEgCIgMgGIgQgGQgHgDgFgFQgGgDgDgHQgEgHgBgJQAAgLAHgJQAGgJALgGQALgFAMAAQALAAALAEQALAEAJAJIgRAVQgGgEgHgDQgGgCgGAAQgFAAgDACQgEACAAAFQAAAEAFADIAMAGIAPAGQAMAEAHAHQAGAJABANQAAALgGAJQgGAKgLAFQgLAGgPAAQgMAAgMgEg");
	this.shape_73.setTransform(139.5,311.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgXALIAAgVIAvAAIAAAVg");
	this.shape_74.setTransform(130.5,313);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgPBAIAAh/IAgAAIAAB/g");
	this.shape_75.setTransform(124,311.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAeBAIAAgmIABgPIACgOIACgPIgBAAIgLAcIgRArIgLAAIgSgrIgKgcIgBAAIACAPIACAOIAAAPIAAAmIgfAAIAAh/IAjAAIAUA2IAGATIAAAAIAIgTIATg2IAjAAIAAB/g");
	this.shape_76.setTransform(113.2,311.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AASBAIAAgzIgkAAIAAAzIgiAAIAAh/IAiAAIAAAwIAkAAIAAgwIAjAAIAAB/g");
	this.shape_77.setTransform(98.8,311.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(3));

	// Boxes
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgZAvIAAgKIAVAAIAAhEIgRAAIAAgIIALgDIAJgEIAHAAIAABTIAVAAIAAAKg");
	this.shape_78.setTransform(1095.5,375);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_79.setTransform(1087.8,375);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgQAuQgIgFgFgJQgFgJAAgQIAAg4IANAAIAAA4QAAAMADAHQADAHAFADQAFADAFAAQAGAAAGgDQAFgDADgHQADgHAAgMIAAg4IAMAAIAAA4QAAAQgFAJQgEAJgIAFQgIAEgKAAQgIAAgIgEg");
	this.shape_80.setTransform(1079.2,375);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgaAxIAAhhIAMAAIAABWIApAAIAAALg");
	this.shape_81.setTransform(1071.7,374.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgaAvIAAgKIAXAAIAAhEIgSAAIAAgIIALgDIAJgEIAHAAIAABTIAUAAIAAAKg");
	this.shape_82.setTransform(995.3,803.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_83.setTransform(987.6,803.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_84.setTransform(980.2,803.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgGAxIgfhhIANAAIAQAzIAFARIADAQIAAAAIAFgQIAFgRIAPgzIANAAIgfBhg");
	this.shape_85.setTransform(972.6,802.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgbAxIAAhhIA3AAIAAALIgqAAIAAAhIAjAAIAAAJIgjAAIAAAsg");
	this.shape_86.setTransform(965.4,802.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgZAvIAAgKIAVAAIAAhEIgRAAIAAgIIALgDIAJgEIAHAAIAABTIAVAAIAAAKg");
	this.shape_87.setTransform(1495,490.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_88.setTransform(1487.3,490.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_89.setTransform(1479.9,490.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgbAxIAAhhIA2AAIAAALIgqAAIAAAfIAjAAIAAAIIgjAAIAAAkIArAAIAAALg");
	this.shape_90.setTransform(1472.5,490.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgPAsQgKgGgFgMQgGgKAAgQQAAgOAGgMQAGgLAKgHQAKgFALAAQAHAAAFABQAGACAEADIAHAFIgHAJQgEgEgFgDQgFgDgIABQgHAAgIAEQgHAFgEAJQgEAJAAALQAAAMAEAJQAEAIAHAFQAHAFAJABQAFAAAFgCQAEgCADgDIAAgZIgVAAIAAgJIAhAAIAAAoQgFAFgIADQgIADgKAAQgLAAgKgGg");
	this.shape_91.setTransform(1463.5,490.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgMAhQgIgFgFgIQgEgJAAgLQAAgLAEgIQAFgJAHgEQAIgFAGAAQAOAAAIAJQAHAJAAAQIAAADIAAACIgvAAQABAMAGAHQAGAGAJABQAFAAAFgCQAEgBAEgDIAFAIIgLAFQgGACgHABQgIgBgIgEgAAUgEQAAgLgFgGQgFgGgIAAQgEAAgEADQgEACgEAFQgDAGAAAHIAlAAIAAAAg");
	this.shape_92.setTransform(1448.9,830.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgTAlIAAhHIALAAIABANIAAAAQAEgHADgEQAFgEAHAAIAEAAIAEACIgDAKIgDAAIgEgBQgFAAgEAEQgEAEgDAJIAAAtg");
	this.shape_93.setTransform(1443.3,830.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgWAeQgGgIABgNIAAgtIAMAAIAAAqQAAALADAFQADAEAIAAQADAAAFgDQAEgDAFgGIAAgyIANAAIAABHIgLAAIgBgMIAAAAQgFAHgGADQgGADgFABQgMgBgFgGg");
	this.shape_94.setTransform(1435.9,830.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgNAjQgHgDgGgFIAHgIQAEAEAGACQAFADAEAAQAHAAAEgDQAEgEAAgEQAAgEgDgDIgGgEIgGgDIgKgDQgFgCgDgEQgDgEgBgGQABgGADgFQADgEAFgDQAGgDAFAAQAIAAAFADQAGACAEADIgGAIQgDgDgFgBQgDgCgGAAQgFAAgDADQgDADAAAEQAAAEACACIAHAEIAGADIAKAEQAFABADAEQADAEAAAHQAAAGgCAFQgEAFgFADQgHACgIABQgGgBgHgCg");
	this.shape_95.setTransform(1428.8,830.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgNAjQgHgDgFgFIAGgIQAEAEAFACQAGADAFAAQAGAAAEgDQAEgEgBgEQABgEgDgDIgGgEIgGgDIgKgDQgFgCgEgEQgCgEgBgGQABgGACgFQADgEAGgDQAFgDAHAAQAGAAAGADQAGACAEADIgGAIQgDgDgEgBQgFgCgEAAQgGAAgCADQgEADAAAEQAAAEACACIAGAEIAGADIALAEQAFABADAEQADAEAAAHQAAAGgDAFQgCAFgHADQgFACgJABQgGgBgHgCg");
	this.shape_96.setTransform(1422.5,830.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgMAhQgIgFgFgIQgEgJAAgLQAAgLAEgIQAFgJAHgEQAIgFAGAAQAOAAAIAJQAHAJAAAQIAAADIAAACIgvAAQABAMAGAHQAGAGAJABQAFAAAFgCQAEgBAEgDIAFAIIgLAFQgGACgHABQgIgBgIgEgAAUgEQAAgLgFgGQgFgGgIAAQgEAAgEADQgEACgEAFQgDAGAAAHIAlAAIAAAAg");
	this.shape_97.setTransform(1415.7,830.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgTAlIAAhHIAKAAIABANIABAAQAEgHADgEQAFgEAHAAIAEAAIAEACIgDAKIgDAAIgEgBQgEAAgGAEQgCAEgFAJIAAAtg");
	this.shape_98.setTransform(1410.2,830.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AggAxIAAhhIAeAAQAJAAAJADQAIADAEAGQAFAHAAAKQAAALgFAGQgEAFgJADQgIAEgJAAIgRAAIAAAngAgTAAIAQAAQALAAAGgDQAGgFAAgLQAAgKgGgEQgGgFgLAAIgQAAg");
	this.shape_99.setTransform(1402.9,828.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAPAkIgKglIgDgLIgCgKIAAAAIgBAKIgDALIgKAlIgOAAIgVhHIANAAIALAoIACAKIACAKIABAAIACgKIADgKIALgoIAKAAIALAoIADAKIACAKIABAAIACgKIACgKIALgoIAMAAIgUBHg");
	this.shape_100.setTransform(1389.9,830.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgPAhQgIgFgFgIQgEgIAAgMQAAgLAEgIQAFgJAIgEQAHgFAIAAQAIAAAIAFQAIAEAEAJQAFAIAAALQAAAMgFAIQgEAIgIAFQgIAEgIABQgIgBgHgEgAgKgXQgEADgDAHQgDAGAAAHQABAMAFAIQAGAHAIAAQAJAAAGgHQAFgIAAgMQAAgHgCgGQgDgHgFgDQgEgEgGAAQgFAAgFAEg");
	this.shape_101.setTransform(1380.5,830.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgFAxQgEgEABgHIAAhbIAKAAIAABbIABAEIACACIABAAIACAAIACAJIgDABIgEAAQgFgBgDgEg");
	this.shape_102.setTransform(1374.8,828.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgbAxIAAhhIA3AAIAAALIgqAAIAAAhIAjAAIAAAJIgjAAIAAAsg");
	this.shape_103.setTransform(1369.3,828.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgMAhQgIgFgFgIQgEgJAAgLQAAgLAEgIQAFgJAHgEQAIgFAGAAQAOAAAIAJQAHAJAAAQIAAADIAAACIgvAAQABAMAGAHQAGAGAJABQAFAAAFgCQAEgBAEgDIAFAIIgLAFQgGACgHABQgIgBgIgEgAAUgEQAAgLgFgGQgFgGgIAAQgEAAgEADQgEACgEAFQgDAGAAAHIAlAAIAAAAg");
	this.shape_104.setTransform(1448.9,696.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgTAlIAAhHIALAAIABANIAAAAQAEgHADgEQAFgEAHAAIAEAAIAEACIgDAKIgDAAIgEgBQgFAAgEAEQgEAEgDAJIAAAtg");
	this.shape_105.setTransform(1443.3,696.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgWAdQgGgHABgNIAAgtIAMAAIAAAqQAAALADAEQADAFAIAAQADAAAFgDQAEgDAFgGIAAgyIANAAIAABHIgLAAIgBgMIAAAAQgFAHgGADQgGADgFABQgMgBgFgHg");
	this.shape_106.setTransform(1435.9,696.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgNAjQgHgDgGgFIAHgIQAEAEAGACQAFADAEAAQAHAAAEgDQAEgEAAgEQAAgEgDgDIgGgEIgGgDIgKgDQgFgCgDgEQgDgEgBgGQABgGADgFQADgEAFgDQAGgDAFAAQAIAAAFADQAGACAEADIgGAIQgDgDgFgBQgDgCgGAAQgFAAgDADQgDADAAAEQAAAEACACIAHAEIAGADIAKAEQAFABADAEQADAEAAAHQAAAGgCAFQgEAFgFADQgHACgIABQgGgBgHgCg");
	this.shape_107.setTransform(1428.8,696.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgNAjQgHgDgFgFIAGgIQAEAEAFACQAGADAFAAQAGAAAEgDQAEgEgBgEQABgEgDgDIgGgEIgGgDIgKgDQgFgCgEgEQgCgEgBgGQABgGACgFQADgEAGgDQAFgDAHAAQAGAAAGADQAGACAEADIgGAIQgDgDgEgBQgFgCgEAAQgGAAgCADQgEADAAAEQAAAEACACIAGAEIAGADIALAEQAFABADAEQADAEAAAHQAAAGgDAFQgCAFgHADQgFACgJABQgGgBgHgCg");
	this.shape_108.setTransform(1422.5,696.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgMAhQgIgFgFgIQgEgJAAgLQAAgLAEgIQAFgJAHgEQAIgFAGAAQAOAAAIAJQAHAJAAAQIAAADIAAACIgvAAQABAMAGAHQAGAGAJABQAFAAAFgCQAEgBAEgDIAFAIIgLAFQgGACgHABQgIgBgIgEgAAUgEQAAgLgFgGQgFgGgIAAQgEAAgEADQgEACgEAFQgDAGAAAHIAlAAIAAAAg");
	this.shape_109.setTransform(1415.7,696.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgTAlIAAhHIAKAAIABANIABAAQAEgHADgEQAFgEAHAAIAEAAIAEACIgDAKIgDAAIgEgBQgEAAgGAEQgCAEgFAJIAAAtg");
	this.shape_110.setTransform(1410.2,696.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AggAxIAAhhIAeAAQAJAAAJADQAIADAEAGQAFAHAAAKQAAALgFAGQgEAFgJADQgIAEgJAAIgRAAIAAAngAgTAAIAQAAQALAAAGgDQAGgFAAgLQAAgKgGgEQgGgFgLAAIgQAAg");
	this.shape_111.setTransform(1402.9,694.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAPAkIgKglIgDgLIgCgKIAAAAIgBAKIgDALIgKAlIgOAAIgVhHIANAAIALAoIACAKIACAKIABAAIACgKIADgKIALgoIAKAAIALAoIADAKIACAKIABAAIACgKIACgKIALgoIAMAAIgUBHg");
	this.shape_112.setTransform(1389.9,696.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgPAhQgIgFgFgIQgEgIAAgMQAAgLAEgIQAFgJAIgEQAHgFAIAAQAIAAAIAFQAIAEAEAJQAFAIAAALQAAAMgFAIQgEAIgIAFQgIAEgIABQgIgBgHgEgAgKgXQgEADgDAHQgDAGAAAHQABAMAFAIQAGAHAIAAQAJAAAGgHQAFgIAAgMQAAgHgCgGQgDgHgFgDQgEgEgGAAQgFAAgFAEg");
	this.shape_113.setTransform(1380.5,696.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgFAxQgEgDABgJIAAhaIAKAAIAABbIABAFIACABIABAAIACAAIACAJIgDABIgEAAQgFAAgDgFg");
	this.shape_114.setTransform(1374.8,694.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgbAxIAAhhIA3AAIAAALIgqAAIAAAhIAjAAIAAAJIgjAAIAAAsg");
	this.shape_115.setTransform(1369.3,694.9);

	this.instance = new lib.fill();
	this.instance.setTransform(1409.8,721.7,1,1,0,0,0,32.9,8.1);

	this.instance_1 = new lib.fill();
	this.instance_1.setTransform(1409.8,801.1,1,1,0,0,0,32.9,8.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(4.3).p("AAAjhIAAHD");
	this.shape_116.setTransform(1016.8,448.4,1,0.811);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("Ag0g1IBpAtIhfA+g");
	this.shape_117.setTransform(522.5,655.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(4.3).p("AhhAAIDDAA");
	this.shape_118.setTransform(508.7,654.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgfgeIA/APIgmAug");
	this.shape_119.setTransform(526.3,680.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(2.1).p("ABHBHIiNiN");
	this.shape_120.setTransform(534.1,688.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(1.4).p("ABOhKIAACMIgyiMIgWCMIgZiMIgjCMIgXhF");
	this.shape_121.setTransform(531,685.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(4.3).p("AkHhtIAADGIIOAAIAAjG");
	this.shape_122.setTransform(520,716.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(4.3).p("ACbChIk1AAIAAlBIE1AAg");
	this.shape_123.setTransform(514.4,655.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgdAfQgNgNgBgSQABgRANgMQAMgOARAAQASAAANAOQANAMgBARQABASgNANQgNANgSgBQgRABgMgNg");
	this.shape_124.setTransform(485,655.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(4.3).p("AYtQdMgxZAAAMAAAgg5MAxZAAAg");
	this.shape_125.setTransform(250.2,445.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("ApQARIAdghIRmAAIAeAhg");
	this.shape_126.setTransform(643,414.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AonASIAbgjIQWAAIAeAjg");
	this.shape_127.setTransform(643.1,409.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(2.1).p("AskAAIZJAA");
	this.shape_128.setTransform(644.2,421.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(2.8).p("AtHAAIaPAA");
	this.shape_129.setTransform(644.2,425);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(2.1).p("AppiEIjeDjIAAAmIaPAAIAAgmIjXjjg");
	this.shape_130.setTransform(644.2,415.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AtGCFIAAgmIDdjjITZAAIDXDjIAAAmg");
	this.shape_131.setTransform(644.2,415.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(2.1).p("AIyE+IxjAAIAAp6IRjAAg");
	this.shape_132.setTransform(644.8,363.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(4.3).p("AJtF/IzZAAIAAr9ITZAAg");
	this.shape_133.setTransform(644.5,363.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(4.3).p("AaRR8Mg0hAAAMAAAgj3MA0hAAAg");
	this.shape_134.setTransform(251.1,445.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(1.4).p("AhNBLIAAiMIAyCMIAWiMIAYCMIAjiMIAYBF");
	this.shape_135.setTransform(928.7,872.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(1.4).p("ABOBKIgCiMIgwCMIgYiLIgWCMIgliLIgWBF");
	this.shape_136.setTransform(1220.4,872.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(4.3).p("AkHhtIAADFIIPAAIAAjF");
	this.shape_137.setTransform(392.8,1004);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(4.3).p("AkHhtIAADGIIOAAIAAjG");
	this.shape_138.setTransform(714,716.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").p("AnslyINyLeIAAh5IhOgZICTggIiRgpICfgdIicgnICWgjIiYgsICYgfIiSgnICBgm");
	this.shape_139.setTransform(303.7,838.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(4.3).p("AAAEQIAAof");
	this.shape_140.setTransform(292.9,885.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(4.3).p("AAAhSIAACl");
	this.shape_141.setTransform(292.9,927.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(4.3).p("AkGhtIAADFIINAAIAAjF");
	this.shape_142.setTransform(1185.8,689);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(1.4).p("ABOhJIAACLIgyiLIgWCLIgZiLIgjCLIgXhF");
	this.shape_143.setTransform(1203,624.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(1.4).p("ABOhKIAACMIgyiMIgWCMIgYiMIgjCMIgYhF");
	this.shape_144.setTransform(731.1,624.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").p("Am6BJQEKiODqgCQCsgCDVBR");
	this.shape_145.setTransform(279.2,890.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AhcAWIAmhSICTB5g");
	this.shape_146.setTransform(331.1,893.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgfAgQgNgOAAgSQAAgRANgOQAOgNARAAQASAAAOANQANANAAASQAAASgNAOQgOANgSAAQgSAAgNgNg");
	this.shape_147.setTransform(342.7,874.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AhAAAICBhZIAACzg");
	this.shape_148.setTransform(260.9,826.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AhdhRIC7BdQgVAVghAxg");
	this.shape_149.setTransform(248.7,797.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(4.3).p("AAAETIAAol");
	this.shape_150.setTransform(280.7,885.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(4.3).p("AipAAIFTAA");
	this.shape_151.setTransform(286.4,913);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(4.3).p("AiQAAIEhAA");
	this.shape_152.setTransform(286.9,919.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(4.3).p("AAAhSIAACl");
	this.shape_153.setTransform(280.7,927.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(4.3).p("AF/AAQAACehwBxQhwBwifAAQidAAhxhwQhwhxAAieQAAieBwhwQBxhwCdAAQCfAABwBwQBwBwAACeg");
	this.shape_154.setTransform(287.1,974.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(4.3).p("AFRAAQAACLhjBjQhjBjiLAAQiKAAhjhjQhjhjAAiLQAAiKBjhjQBjhjCKAAQCLAABjBjQBjBjAACKg");
	this.shape_155.setTransform(288,824.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(4.3).p("ACxBRIlMAAIAAihIFMAA");
	this.shape_156.setTransform(918.8,890.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AhAhPIAsAAIBVBPIhRBQIgwABg");
	this.shape_157.setTransform(909.7,890.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AALBKIhNhJIBQhOIA2AAIAACbg");
	this.shape_158.setTransform(1239,890.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(4.3).p("AivBQIFKAAIAAifIlKAA");
	this.shape_159.setTransform(1230.2,890.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(4.3).p("AVkF6MgrHAAAIAArzMArHAAAg");
	this.shape_160.setTransform(1074.6,861.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(4.3).p("AAAgrIAABX");
	this.shape_161.setTransform(1186.2,634.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAAMANQANANABARQgBASgNANQgMANgSAAQgRAAgNgNg");
	this.shape_162.setTransform(1178.7,586.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(4.3).p("AgqAAIBWAA");
	this.shape_163.setTransform(1186.2,629.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(4.3).p("AggBjIBBjF");
	this.shape_164.setTransform(1175.5,621.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("Agyg4IBlAjIhTBOg");
	this.shape_165.setTransform(1172.5,632.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("Agyg4IBlA1IhXA9g");
	this.shape_166.setTransform(1136,615.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgyAWIBThOIASBxg");
	this.shape_167.setTransform(1177.3,611.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(4.3).p("Ag4BbIBxi1");
	this.shape_168.setTransform(1145.1,628.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(4.3).p("ABEB4IiHjv");
	this.shape_169.setTransform(1142.8,629.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(4.3).p("ACbChIk1AAIAAlBIE1AAg");
	this.shape_170.setTransform(1178.9,621.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(4.3).p("ACuBbIlbAAIAAi1IFbAAg");
	this.shape_171.setTransform(1145.9,628.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(4.3).p("AAAgrIAABX");
	this.shape_172.setTransform(714.4,632.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgeAfQgNgNABgSQgBgRANgMQANgOARAAQASAAAMAOQAOAMAAARQAAASgOANQgMANgSgBQgRABgNgNg");
	this.shape_173.setTransform(698,655.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNg");
	this.shape_174.setTransform(706.8,586.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(4.3).p("AgrAAIBXAA");
	this.shape_175.setTransform(714.3,629.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(4.3).p("AggBjIBBjF");
	this.shape_176.setTransform(703.6,621.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("Agyg4IBlAjIhTBOg");
	this.shape_177.setTransform(700.6,632.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("Agyg4IBlA1IhXA9g");
	this.shape_178.setTransform(664.1,615.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgyAWIBThOIASBxg");
	this.shape_179.setTransform(705.4,611.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(4.3).p("Ag4BbIBxi1");
	this.shape_180.setTransform(673.2,628.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(4.3).p("ABEB4IiHjv");
	this.shape_181.setTransform(670.9,629.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(4.3).p("ACcChIk3AAIAAlBIE3AAg");
	this.shape_182.setTransform(707,621.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(4.3).p("ACtBbIlZAAIAAi1IFZAAg");
	this.shape_183.setTransform(674,628.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(4.3).p("ADwCqInfAAIAAlTIHfAAg");
	this.shape_184.setTransform(789.4,411);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(4.3).p("Ao7AAIR3AA");
	this.shape_185.setTransform(1227,430);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(4.3).p("Ao7AAIR3AA");
	this.shape_186.setTransform(1227,393.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(4.3).p("AI8IiIx3AAIAAxDIR3AAg");
	this.shape_187.setTransform(1227,411);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(4.3).p("AliAAILFAA");
	this.shape_188.setTransform(1017.8,430);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(4.3).p("AliAAILFAA");
	this.shape_189.setTransform(1017.8,393.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(4.3).p("AA8BtIh3AAIAAjZIB3AAg");
	this.shape_190.setTransform(1032.9,510.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(4.3).p("AA8BtIh3AAIAAjZIB3AAg");
	this.shape_191.setTransform(1001.9,510.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(4.3).p("AFjIiIrFAAIAAxDILFAAg");
	this.shape_192.setTransform(1017.8,411);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(4.3).p("AAApjIAATG");
	this.shape_193.setTransform(1242.3,250.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(4.3).p("AAApjIAATG");
	this.shape_194.setTransform(1212.3,250.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(4.3).p("AAApjIAATG");
	this.shape_195.setTransform(1035.3,250.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(4.3).p("AAApjIAATG");
	this.shape_196.setTransform(994.3,250.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(4.3).p("AH7JjIvaAAICpioIiYiYICViVIiOiNICQiOIiaiZICYiYIililIPcAAg");
	this.shape_197.setTransform(1220,250.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(4.3).p("AAAjhIAAHD");
	this.shape_198.setTransform(878.6,288.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(4.3).p("AAAjhIAAHD");
	this.shape_199.setTransform(849.9,288.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(4.3).p("AmkAAINJAA");
	this.shape_200.setTransform(864.1,266);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(4.3).p("AAApjIAATG");
	this.shape_201.setTransform(906.3,250.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(4.3).p("A41JjMAu6AAAICoioIiYiYICWiVIiOiNICPiOIiZiZICYiYIililMgu7AAAg");
	this.shape_202.setTransform(980.9,250.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("Am1FxQhVgbgyhAQg6hLAAhwQgBiqCKhEQBggvBlANIAPACIAHgNQA/h6BjguQBUgnBhAVQBYATBIA5QBBAzAQA3IAEAOIAPACQA9ADAyAyQArAsAKAwIADAMIALAEQBEAUAiA9QAeA5gKA+QgMA+gwAfQg6AjhYgWIgJgCIgHAEQhFArg6AJQhEAKg8ghIgMgGIgKAHQhDAshLABQhEABhAgfIgNgGIgLAKQgmAjhKAKQgZADgZAAQg3AAg0gRg");
	this.shape_203.setTransform(941.5,107.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AnDGaQhiggg5hKIAAAAQhEhVABiAQAAjFChhPQBlgxBpAKQBGh/BqgwQBhgtBvAZQBhAUBQA/QBFA3AWA7QBDAIA5A5IgBAAQAwAxAOA0QBLAdAnBFIABAAQAmBGgOBMIAAABQgPBRhAAoQhEArhmgXQhJArg+AKQhMALhEghQhIAshSACQhHABhEgeQgtAkhPALQgcAEgbAAQg9AAg8gTgAntiTQiLBEABCqQAABwA6BLQAyBABVAbQBNAZBQgLQBKgKAmgjIALgKIANAGQBAAfBEgBQBMgBBCgsIALgHIALAGQA9AhBDgKQA7gJBEgrIAIgEIAJACQBYAWA6gjQAwgfALg+QALg+gfg5Qgig9hDgUIgMgEIgCgMQgKgwgsgsQgygyg8gDIgPgCIgFgOQgPg3hCgzQhIg5hXgTQhhgVhUAnQhkAug/B6IgHANIgOgCQgWgCgWAAQhOAAhLAkg");
	this.shape_204.setTransform(941.5,107.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.instance_1},{t:this.instance},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78}]}).wait(3));

	// overlay
	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AGNVlIAAxBIL4AAIAARBgAy1icIAAzIMAlrAAAIAATIg");
	this.shape_205.setTransform(942.6,327);

	this.timeline.addTween(cjs.Tween.get(this.shape_205).wait(3));

	// Layer 15
	this.numbers = new lib.nullennull();
	this.numbers.setTransform(681.1,464.7,1,1,0,0,0,154.8,11.4);
	this.numbers._off = true;

	this.timeline.addTween(cjs.Tween.get(this.numbers).wait(1).to({_off:false},0).wait(2));

	// Layer 2
	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgQA5QgHgIAAgLQAAgLAHgHQAGgIAKAAQAKAAAIAIQAGAHAAALQAAALgGAIQgIAHgKAAQgKAAgGgHgAgQgTQgHgHAAgLQAAgLAHgIQAGgHAKAAQAKAAAIAHQAGAIAAALQAAALgGAHQgIAIgKAAQgKAAgGgIg");
	this.shape_206.setTransform(221.6,378.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AggBOQgQgGgNgMIAZgdQAIAHALAEQAKAFAHAAQAJAAAEgDQAFgDAAgGQAAgFgGgDQgGgEgIgEIgUgIQgJgDgIgHQgHgEgFgJQgEgJAAgLQAAgOAIgMQAIgLANgHQANgHAQAAQAOAAAPAGQAOAFALALIgVAbQgIgGgIgDQgIgDgJAAQgFAAgFADQgFADAAAFQAAAGAHADIAPAIIAUAHQAPAGAJAJQAIALAAARQAAAOgHALQgIAMgOAHQgPAHgSABQgPAAgRgGg");
	this.shape_207.setTransform(210.5,376.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgUBRIAAh9IgrAAIAAgkIB/AAIAAAkIgrAAIAAB9g");
	this.shape_208.setTransform(196.9,376.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgUBRIAAihIApAAIAAChg");
	this.shape_209.setTransform(185.9,376.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AAWBRIgihJIgQgiIgBAAIADAcQACAQABAQIAAAvIgqAAIAAihIAtAAIAiBJIAPAiIABAAIgDgTIgCgUIgBgVIAAgvIAqAAIAAChg");
	this.shape_210.setTransform(173.6,376.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgxA+QgRgUAAgpIAAhSIArAAIAABXQAAAVAHAJQAFAJALAAQANAAAGgJQAGgJAAgVIAAhXIApAAIAABSQABApgRAUQgQAUgiAAQggAAgRgUg");
	this.shape_211.setTransform(156.8,376.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgxA+QgRgUAAgpIAAhSIAsAAIAABXQgBAVAHAJQAFAJALAAQANAAAGgJQAGgJAAgVIAAhXIApAAIAABSQABApgRAUQgQAUgiAAQggAAgRgUg");
	this.shape_212.setTransform(134.7,376.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("Ag0BRIAAihIBnAAIAAAkIg8AAIAAAaIAzAAIAAAiIgzAAIAAAdIA+AAIAAAkg");
	this.shape_213.setTransform(119.6,376.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AAdBHQgJgNgBgaQABgYAJgLQAKgOASAAQAQAAALAOQAKALAAAYQAAAagKANQgLAOgQAAQgSAAgKgOgAApAEQgGAJAAATQAAAUAGAKQAGAKAKgBQAJABAGgKQAGgKAAgUQAAgTgGgJQgGgJgJABQgKgBgGAJgAgzBVIBYioIAOAAIhYCogAhTAFQgKgMAAgZQAAgZAKgNQAKgNARAAQARAAAKANQAKANABAZQgBAZgKAMQgKANgRAAQgRAAgKgNgAhHg9QgGAKAAATQAAAUAGAJQAFAJAKgBQAKABAGgJQAGgJAAgUQAAgTgGgKQgGgKgKAAQgKAAgFAKg");
	this.shape_214.setTransform(374.7,430.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AAdBHQgJgNgBgaQABgYAJgLQAKgOASAAQAQAAALAOQAKALAAAYQAAAagKANQgLAOgQAAQgSAAgKgOgAApAEQgGAJAAATQAAAUAGAKQAGAKAKgBQAJABAGgKQAGgKAAgUQAAgTgGgJQgGgJgJABQgKgBgGAJgAgzBVIBYioIAOAAIhYCogAhTAFQgKgMAAgZQAAgZAKgNQAKgNARAAQARAAAKANQAKANABAZQgBAZgKAMQgKANgRAAQgRAAgKgNgAhHg9QgGAKAAATQAAAUAGAJQAFAJAKgBQAKABAGgJQAGgJAAgUQAAgTgGgKQgGgKgKAAQgKAAgFAKg");
	this.shape_215.setTransform(374.7,471.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AAbBZIghg7IgWAbIAAAgIgVAAIAAiwIAVAAIAAB2IAAAAIAyg+IAWAAIgoAuIAuBKg");
	this.shape_216.setTransform(193.2,429.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgTA4QgNgIgHgOQgIgOAAgUQAAgTAIgOQAIgOAOgIQANgHAOAAQAMAAAIAEQAJAEAGAGIgKAOQgFgFgGgDQgGgDgIAAQgKAAgHAGQgJAGgFAKQgEALgBAMQABAVAKAMQAKANAPAAQAJAAAHgDQAHgEAGgFIAJANQgJAIgKAEQgKAEgLAAQgOAAgNgHg");
	this.shape_217.setTransform(180.6,432.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgJBWIAAh3IATAAIAAB3gAgIg+QgEgEgBgGQABgGAEgEQAEgDAEAAQAGAAAEADQAEAEAAAGQAAAGgEAEQgEADgGABQgEgBgEgDg");
	this.shape_218.setTransform(171.6,430.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgLBDQgHgLAAgSIAAhBIgSAAIAAgPIATgCIACgiIAQAAIAAAiIAgAAIAAARIggAAIAABCQgBALAFAGQAEAGAKAAIAHgBIAHgCIAEAPIgLADIgLACQgSgBgIgLg");
	this.shape_219.setTransform(164.4,431.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgXA6QgMgEgJgIIALgNQAHAGAJAEQAJAEAJAAQALAAAHgFQAFgGAAgIQAAgGgDgEQgFgEgGgDIgMgGIgRgFQgHgEgGgHQgFgHgBgKQAAgJAGgIQAFgIAIgFQAKgEALAAQAMAAAJAEQAKAEAHAGIgJANQgHgFgHgDQgHgDgHAAQgKAAgFAFQgGAFAAAHQABAGADAEQAEADAGADIALAFIARAIQAJACAGAHQAFAHAAALQABAKgGAIQgFAIgKAFQgKAFgOAAQgMAAgLgFg");
	this.shape_220.setTransform(154.8,432.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgqBWIgHgCIAFgQIAEABIAFABQAKgBAGgHQAIgHADgLIADgKIgxh3IAWAAIAYBDIAGARIAEAPIABAAIAFgPIAFgRIAWhDIAUAAIguCBQgEAMgFAKQgFAJgJAGQgJAFgLAAIgIAAg");
	this.shape_221.setTransform(143.7,435.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgaA4QgNgIgIgOQgIgOAAgUQAAgTAIgOQAIgOANgIQAMgHAOAAQAPAAAMAHQANAIAIAOQAIAOAAATQAAAUgIAOQgIAOgNAIQgMAHgPAAQgOAAgMgHgAgRgnQgIAGgEAKQgEALgBAMQABAVAJAMQAKANAOAAQAPAAAKgNQAJgMABgVQAAgMgFgLQgEgKgIgGQgIgGgKAAQgJAAgIAGg");
	this.shape_222.setTransform(131.2,432.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgaBMQgLgGgHgOIAPgKQAFAKAHAEQAHAFAJgBQALAAAHgIQAHgHAAgUIAAhvIAVAAIAAByQAAAOgFAMQgFALgKAHQgKAHgPAAQgOAAgMgHg");
	this.shape_223.setTransform(117.7,430.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgWA4QgNgIgHgOQgIgOAAgUQAAgSAIgOQAHgPANgHQANgIALAAQAYAAAMAPQANAPAAAbIAAAFIAAAEIhRAAQABAUAMALQAKALAQABQAJAAAHgDQAHgCAHgFIAHAOQgHAFgLAEQgJADgMAAQgPAAgOgHgAAhgIQAAgSgIgKQgHgKgPAAQgGAAgIAFQgIAEgFAJQgEAIgCAMIA/AAIAAAAg");
	this.shape_224.setTransform(262.3,473.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgKA8Igsh3IAVAAIAXBDIAGASIAEASIAAAAIAGgSIAFgSIAYhDIAUAAIgrB3g");
	this.shape_225.setTransform(250.2,473.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgKBTQgFgHAAgOIAAiXIASAAIAACZQAAAFACACQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAIACAAIADgBIACAQIgFABIgHABQgJAAgFgHg");
	this.shape_226.setTransform(241.7,470.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgdA7QgIgEgEgIQgFgHAAgLQAAgUASgJQASgLAkgEQABgIgDgHQgCgGgFgFQgGgEgKAAQgIAAgJAEQgKAEgHAFIgIgOQAJgGAMgFQAMgFANAAQAWAAAKAOQAKANAAAXIAABIIgRAAIgCgOIAAAAQgJAHgKAFQgJAFgKAAQgLAAgIgEgAgEADQgMAFgFAGQgFAFAAAIQAAAKAGAFQAGAFAJAAQAHAAAIgEQAIgFAIgIIAAgfQgUABgKADg");
	this.shape_227.setTransform(231.4,473.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgKA8Igsh3IAVAAIAXBDIAGASIAEASIAAAAIAGgSIAGgSIAWhDIAVAAIgrB3g");
	this.shape_228.setTransform(219.8,473.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgJALQgEgEgBgHQABgGAEgEQAFgEAEAAQAGAAAEAEQAEAEABAGQgBAHgEAEQgEAEgGAAQgEAAgFgEg");
	this.shape_229.setTransform(205.8,478);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgzBYIAAirIARAAIACANIAAAAQAJgGAJgFQAKgFAIgBQAQABALAHQAKAIAGANQAGAOAAATQgBAVgGANQgIAOgMAIQgMAIgOAAQgGAAgIgDQgJgEgIgHIAAAVIAAAqgAgOhBQgIAEgJAJIAAA9QAJAHAHADQAHADAHgBQANAAAJgMQAKgLAAgXQAAgUgHgMQgIgMgQAAQgGAAgIAEg");
	this.shape_230.setTransform(196.4,475.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgaA4QgNgIgIgOQgIgOAAgUQAAgTAIgOQAIgOANgIQAMgHAOAAQAPAAAMAHQANAIAIAOQAIAOAAATQAAAUgIAOQgIAOgNAIQgMAHgPAAQgOAAgMgHgAgRgnQgIAGgEAKQgEALgBAMQABAVAJAMQAKANAOAAQAPAAAKgNQAJgMABgVQAAgMgFgLQgEgKgIgGQgIgGgKAAQgJAAgIAGg");
	this.shape_231.setTransform(182.2,473.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AggA+IAAh4IARAAIACAWIAAAAQAHgLAHgHQAJgHAKAAIAHABIAGACIgEASIgGgCIgFAAQgIAAgJAGQgGAHgHAPIAABMg");
	this.shape_232.setTransform(172.4,473.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgzBYIAAirIARAAIACANIAAAAQAIgGAKgFQAKgFAIgBQARABAKAHQALAIAFANQAGAOAAATQgBAVgGANQgIAOgMAIQgMAIgOAAQgGAAgJgDQgIgEgJgHIABAVIAAAqgAgOhBQgIAEgJAJIAAA9QAIAHAIADQAIADAGgBQANAAAJgMQAKgLAAgXQABgUgIgMQgIgMgQAAQgGAAgIAEg");
	this.shape_233.setTransform(160.5,475.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgbAHIAAgNIA3AAIAAANg");
	this.shape_234.setTransform(149.2,473);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("Ag4BSIAAijIAxAAQAPAAAMAFQANAEAHAIQAHAJAAAPQAAAMgHAJQgHAKgOAEIAAABQASADAKAIQAKAJAAARQAAAQgIALQgIALgOAFQgOAFgRABgAgjBBIAcAAQAUAAALgIQAMgIAAgRQAAgOgLgIQgMgHgTAAIgdAAgAgjgLIAYAAQATAAAKgHQAJgHAAgNQAAgOgKgGQgKgGgRAAIgZAAg");
	this.shape_235.setTransform(138.6,471.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AAwBSIAAhYIAAgQIACgRIABgQIgBAAIgOAkIgfBUIgKAAIgfhUIgOgkIgBAAIABAQIACARIAAAQIAABYIgTAAIAAijIAYAAIAgBWIALAiIAAAAIAMgiIAghWIAYAAIAACjg");
	this.shape_236.setTransform(121.5,471.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgWA4QgMgIgIgOQgIgOAAgUQAAgSAIgOQAIgPAMgHQAMgIAMAAQAYAAANAPQAMAPAAAbIAAAFIgBAEIhQAAQACAUALALQAKALAQABQAIAAAIgDQAIgCAGgFIAHAOQgHAFgKAEQgLADgMAAQgOAAgOgHgAAhgIQAAgSgIgKQgIgKgOAAQgHAAgHAFQgIAEgEAJQgFAIgCAMIA/AAIAAAAg");
	this.shape_237.setTransform(204.9,513.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgKBTQgFgHAAgOIAAiXIASAAIAACZQAAAFACACQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAIACAAIADgBIACAQIgFABIgHABQgJAAgFgHg");
	this.shape_238.setTransform(195.9,511.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgfBWQgKgEgHgHQgGgHAAgLQAAgIAEgHQAFgHAJgGIAAAAQgFgDgDgFQgDgFAAgHQAAgIAEgEQAEgFAFgEIAAgBQgGgFgFgIQgEgIgBgLQABgOAGgJQAGgKAKgFQALgGAMAAIAHABIAIACIAqAAIAAAQIgZAAQAFAEADAHQACAGAAAIQAAANgFAKQgHAJgJAFQgLAFgKAAIgKgBIgJgDIgEAGQgDACAAAFQAAAFAEAEQAFAEANAAIAVAAQAVAAALAHQAKAHAAAPQAAALgHAKQgIAJgOAGQgNAGgRAAQgPAAgMgEgAgiAsQgCAFAAAFQAAAKAJAGQAKAFAQAAQAJAAAJgDQAJgEAFgFQAEgGAAgGQAAgJgGgDQgGgDgMAAIgTAAIgIgBIgIgBQgHAFgDAFgAgWhCQgIAHABAOQgBANAIAIQAHAHALABQAJgBAHgHQAHgIABgNQgBgOgHgHQgHgIgJAAQgLAAgHAIg");
	this.shape_239.setTransform(186.3,516.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AAcA+IAAhIQAAgRgGgIQgGgIgLAAQgIAAgHAFQgIAFgJAJIAABWIgUAAIAAh4IARAAIACASIAAAAQAJgJAKgGQAJgFALgBQATAAAJAMQAJANAAAXIAABLg");
	this.shape_240.setTransform(172.8,513.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgdA7QgIgEgEgIQgFgHAAgLQAAgUASgJQASgLAkgEQABgIgDgHQgCgGgFgFQgGgEgKAAQgIAAgJAEQgKAEgHAFIgIgOQAJgGAMgFQAMgFANAAQAWAAAKAOQAKANAAAXIAABIIgRAAIgCgOIAAAAQgJAHgKAFQgJAFgKAAQgLAAgIgEgAgEADQgMAFgFAGQgFAFAAAIQAAAKAGAFQAGAFAJAAQAHAAAIgEQAIgFAIgIIAAgfQgUABgKADg");
	this.shape_241.setTransform(159.3,513.7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgbAHIAAgNIA3AAIAAANg");
	this.shape_242.setTransform(149.2,513.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("Ag4BSIAAijIAxAAQAPAAAMAFQANAEAHAIQAHAJAAAPQAAAMgHAJQgHAKgOAEIAAABQASADAKAIQAKAJAAARQAAAQgIALQgIALgOAFQgOAFgRABgAgjBBIAcAAQAUAAALgIQAMgIAAgRQAAgOgLgIQgMgHgTAAIgdAAgAgjgLIAYAAQATAAAKgHQAJgHAAgNQAAgOgKgGQgKgGgRAAIgZAAg");
	this.shape_243.setTransform(138.6,511.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AAwBSIAAhYIAAgQIACgRIABgQIgBAAIgOAkIgfBUIgKAAIgfhUIgOgkIgBAAIABAQIACARIAAAQIAABYIgTAAIAAijIAYAAIAgBWIALAiIAAAAIAMgiIAghWIAYAAIAACjg");
	this.shape_244.setTransform(121.5,511.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgRAXQAKgFAGgHQAEgIAAgIIgBAAIgBAAQgFgBgEgDQgEgDAAgIQAAgGAEgEQAFgEAEAAQAIAAAFAGQAEAHAAALQAAAPgIALQgJANgNAGg");
	this.shape_245.setTransform(1335.1,458.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_246.setTransform(349.9,431.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_247.setTransform(349.9,471.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_248.setTransform(349.7,512.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AA/A+IAAhIQAAgRgGgIQgFgIgLAAQgIAAgHAFQgIAEgIAKIAABWIgTAAIAAhIQAAgRgFgIQgGgIgLAAQgHAAgIAFQgHAEgJAKIAABWIgUAAIAAh4IARAAIACASIAAAAQAIgJAKgGQAJgFALgBQAOAAAIAHQAGAGADALQAKgLAKgGQAKgHAKAAQATAAAJAMQAJANAAAXIAABLg");
	this.shape_249.setTransform(1444.8,451.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AAcBZIAAhKQAAgQgGgHQgGgIgLAAQgIAAgHAFQgIAEgJAHIAABZIgUAAIAAixIAUAAIAAAxIAAAZQAIgIAKgGQAJgFALgBQATAAAJAMQAJANAAAUIAABOg");
	this.shape_250.setTransform(1427.7,449.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgaA4QgNgIgIgOQgIgOAAgUQAAgTAIgOQAIgOANgIQAMgHAOAAQAPAAAMAHQANAIAIAOQAIAOAAATQAAAUgIAOQgIAOgNAIQgMAHgPAAQgOAAgMgHgAgRgnQgIAGgEAKQgEALgBAMQABAVAJAMQAKANAOAAQAPAAAKgNQAJgMABgVQAAgMgFgLQgEgKgIgGQgIgGgKAAQgJAAgIAGg");
	this.shape_251.setTransform(1414,451.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AAbBZIghg7IgWAaIAAAhIgVAAIAAixIAVAAIAAB3IAAAAIAyg+IAWAAIgoAvIAuBJg");
	this.shape_252.setTransform(1402.4,449.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AAsBSIgPgzIg6AAIgPAzIgWAAIA4ijIAVAAIA4CjgAAYAOIgIgXIgIgbIgIgcIAAAAIgIAcIgIAbIgIAXIAwAAg");
	this.shape_253.setTransform(1161.5,512.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AA/A+IAAhIQAAgRgGgIQgFgIgLAAQgIAAgHAFQgIAEgIAKIAABWIgTAAIAAhIQAAgRgFgIQgGgIgLAAQgHAAgIAFQgHAEgJAKIAABWIgUAAIAAh4IARAAIACASIAAAAQAIgJAKgGQAJgFALgBQAOAAAIAHQAGAGADALQAKgLAKgGQAKgHAKAAQATAAAJAMQAJANAAAXIAABLg");
	this.shape_254.setTransform(1144.3,514.1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgLBSIg0iiIAWAAIAbBWIAIAcIAGAbIABAAIAIgbIAIgcIAahWIAVAAIg0Cig");
	this.shape_255.setTransform(1376.4,335.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgLBSIg0iiIAWAAIAbBWIAIAcIAGAbIABAAIAIgbIAHgcIAahWIAWAAIg0Cig");
	this.shape_256.setTransform(1140.4,335.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgyBRIAAgMIAqgqQAOgTAJgMQAIgPABgNQAAgOgIgIQgHgJgOAAQgKAAgIAGQgJAFgHAIIgMgMQAKgLAMgGQAMgHAPAAQAUABAMAMQANANABAVQAAAPgJAQQgIANgPARIgfAlIANgBIAMgBIAuAAIAAASg");
	this.shape_257.setTransform(1345.4,449.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgWBOQgJgEgIgFQgHgEgFgGIAKgNQAGAHAKAFQAKAFANABQAJAAAHgFQAIgEAFgIQAEgJAAgLQABgQgKgJQgJgIgOAAQgHAAgGADQgHACgHADIgLgFIAGhNIBNAAIAAASIg7AAIgFAvIALgEQAHgCAFAAQANAAAMAFQALAFAHALQAGAKAAARQAAARgHAMQgIAMgMAGQgNAHgMAAQgMAAgKgDg");
	this.shape_258.setTransform(1361.8,449.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_259.setTransform(1378.6,449.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_260.setTransform(1354.6,335.4);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_261.setTransform(1304.1,161.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_262.setTransform(1320.6,161.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_263.setTransform(1337.2,161.4);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_264.setTransform(1114.6,335.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_265.setTransform(1084.6,512.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_266.setTransform(1100.1,512.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_267.setTransform(1117.6,512.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_268.setTransform(1051.6,161.1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_269.setTransform(1068.1,161.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_270.setTransform(1084.6,161.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_271.setTransform(1101.2,161.4);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("EhNcAb9QgKgNAAgaQAAgZAKgMQAKgOARAAQARAAAKAOQAKAMAAAZQAAAagKANQgKAOgRAAQgRAAgKgOgEhNRAa6QgGAJAAATQAAAUAGAKQAGAKAKAAQAKAAAFgKQAGgKAAgUQAAgTgGgJQgFgKgKAAQgKAAgGAKgEBH+ATIQgNgVAAgpQAAgoANgVQAOgVAYAAQAYAAANAVQAOAVAAAoQAAApgOAVQgNAVgYAAQgYAAgOgVgEBINARYQgIAQAAAiQAAAjAIAQQAJAQAOAAQAOAAAIgQQAJgQAAgjQAAgigJgQQgIgPgOAAQgOAAgJAPgEBMOgZ3QgNgVAAgpQAAgoANgVQAOgVAYAAQAYAAANAVQAOAVAAAoQAAApgOAVQgNAVgYAAQgYAAgOgVgEBMdgbnQgIAQAAAiQAAAjAIAQQAJAQAOAAQAOAAAIgQQAJgQAAgjQAAgigJgQQgIgPgOgBQgOABgJAPgEAnWgZ3QgNgVAAgpQAAgoANgVQAOgVAYAAQAYAAANAVQAOAVAAAoQAAApgOAVQgNAVgYAAQgYAAgOgVgEAnlgbnQgIAQAAAiQAAAjAIAQQAJAQAOAAQAOAAAIgQQAJgQAAgjQAAgigJgQQgIgPgOgBQgOABgJAPgEBB5gZ6QgNgVAAgpQAAgoANgUQAOgWAYAAQAYAAANAWQAOAUAAAoQAAApgOAVQgNAWgYAAQgYAAgOgWgEBCIgbpQgIAPAAAiQAAAkAIAPQAJAQAOABQAOgBAIgQQAJgPAAgkQAAgigJgPQgIgQgOAAQgOAAgJAQg");
	this.shape_272.setTransform(862.1,333.2);

	this.moving_down = new lib.up();
	this.moving_down.setTransform(1144.7,10473.9,1,1,0,0,0,120.1,-10207.5);

	this.moving_forward = new lib.down();
	this.moving_forward.setTransform(1144.7,10473.9,1,1,0,0,0,120.1,-10207.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206}]}).to({state:[{t:this.moving_down}]},1).to({state:[{t:this.moving_forward}]},1).wait(1));

	// Layer 4
	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#000000").ss(4.3).p("EglHARFIAApKQAAhyBBg5QBGg+CTAAMBA7AAAQBgAAA1gKQA+gMAjgfQBDg9AAjFIAAw0A/VRFQABgbAAiTQAAhuA7hAQBEhMCNAAMAw6AAA");
	this.shape_273.setTransform(1294.2,713.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AtwOpIAAgVIAAgVIWSAAQBeAAAzgKQA4gLAfgbQA8g6ABi7IAA4CIAqAAIAAYCQAADUhLBBQgmAihFAOQg2AKhjAAg");
	this.shape_274.setTransform(1521.8,689.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_274},{t:this.shape_273}]}).to({state:[]},1).wait(2));

	// Layer 8
	this.instance_2 = new lib.cylinder_1();
	this.instance_2.setTransform(1531.7,605.3,1,1,0,0,0,5,12.6);

	this.instance_3 = new lib.king_1();
	this.instance_3.setTransform(1661.7,533.2,1,1,0,0,0,214.5,275.5);

	this.instance_4 = new lib.winch_1();
	this.instance_4.setTransform(1494.7,555.1,1,1,0,0,0,8.5,8);

	this.instance_5 = new lib.boom_1();
	this.instance_5.setTransform(1504.6,560.8,1,1,0,0,0,12.4,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).to({state:[]},1).wait(2));

	// Layer 10
	this.instance_6 = new lib.bg_1();
	this.instance_6.setTransform(1681.5,489.5,1,1,0,0,0,206.5,223.5);
	this.instance_6.alpha = 0.328;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3));

	// Layer 7
	this.instance_7 = new lib.flow_backwards();
	this.instance_7.setTransform(902.5,499.1,1,1,0,0,0,-122.1,-20182.3);

	this.instance_8 = new lib.flow();
	this.instance_8.setTransform(902.5,499.1,1,1,0,0,0,-122.1,-20182.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

	// Layer 6
	this.btn_playpause = new lib.btn_playpause();
	this.btn_playpause.setTransform(633.4,73.4,1,1,0,0,0,26.3,26.3);
	new cjs.ButtonHelper(this.btn_playpause, 0, 1, 1);

	this.clean = new lib.stop();
	this.clean.setTransform(435.3,58,1,1,0,0,0,28,28);
	this.clean.alpha = 0.02;

	this.goback = new lib.btn_blue();
	this.goback.setTransform(559.1,149.5,1,1,0,0,0,30.3,30.3);
	this.goback.alpha = 0.02;

	this.forward = new lib.tb();
	this.forward.setTransform(437.2,148.1,1,1,0,0,0,28.9,28.9);
	this.forward.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.forward},{t:this.goback},{t:this.clean},{t:this.btn_playpause}]}).wait(3));

	// Layer 11
	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgVAvQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAAhRQgBgDACgBQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAuAAIABAAIAAACIABADIAAADIAAAEIgBACIAAABIgBAAIghAAIAAAYIAbAAIABAAIABABIABACIAAAEIAAACIgBABIgBACIgBAAIgbAAIAAAbIAhAAIABAAIABABIAAADIAAADIAAAEIAAADIgBABIgBAAg");
	this.shape_275.setTransform(583.2,58.7);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgMAwIgHgCIgFgCIgDgDIgCgDIgBgFIABgEIAAgCIABgBIACAAIACABIAFACIAHADIAJABIAFgBIAFgCIADgEIAAgFQAAgDgBgDIgFgEIgEgDIgHgEIgIgDIgHgEQgDgDgBgEQgCgEAAgGQAAgHADgFQACgGAFgCQAEgEAGgCQAFgBAFgBIAHABIAGABIAFADIADACIACABIAAABIAAACIAAADIAAAEIAAACIgBACIgCAAIgCgBIgEgCIgGgDIgIAAIgDAAIgEACIgCAEIgBAEQAAADACACIAEAEIAEADIAIAEIAIAEQAEACACACQADACACAFQABAEAAAGQAAAHgCAFQgDAHgFADQgFAEgGACQgGACgGgBIgJAAg");
	this.shape_276.setTransform(575.8,58.7);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgPAuQgHgDgFgEQgFgFgDgGQgCgHAAgJIAAg4IAAgBIACgBIADgBIAEAAIAFAAIADABIABABIABABIAAA2QAAAGABAEIAFAHIAGAEIAGABQAFAAADgBIAGgEIAEgHIABgJIAAg3IABgBIABgBIADgBIAFAAIAEAAIADABIACABIAAABIAAA3QAAAJgDAHQgCAGgFAFQgFAFgHACQgHADgJAAQgIAAgHgCg");
	this.shape_277.setTransform(567.4,58.7);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AAiAvIgGAAIgDAAIgCgBIgBgCIgFgTIgiAAIgHATIAAABIgBACIgEAAIgEAAIgGAAIgCgBQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIABgFIAdhSIABgCIACgBIADAAIAGAAIAFAAIAFAAIABABIABADIAeBSIABAEQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgEABIgFAAgAgNAKIAZAAIgMgmg");
	this.shape_278.setTransform(558.3,58.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgaAvIgDgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIgBgBIAAhTQAAgEACgBQACgCADAAIAWAAIAEAAIAIABIAIADQAFADADADQADAEABAEQACAFAAAGQAAAIgDAGQgCAEgFAEQgFAEgGADQgHACgIAAIgIAAIAAAeIAAABIgCABIgDABIgEAAIgFAAgAgMAAIAJAAIAGAAQADgBACgDQACgCABgDIABgHQAAgFgCgDIgEgFIgGgCIgDAAIgJAAg");
	this.shape_279.setTransform(551,58.7);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgaAvIgDgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIgBgBIAAhTQAAgEACgBQACgCADAAIAWAAIAEAAIAIABIAIADQAFADADADQADAEABAEQACAFAAAGQAAAIgDAGQgCAEgFAEQgFAEgGADQgHACgIAAIgIAAIAAAeIAAABIgCABIgDABIgEAAIgFAAgAgMAAIAJAAIAGAAQADgBACgDQACgCABgDIABgHQAAgFgCgDIgEgFIgGgCIgDAAIgJAAg");
	this.shape_280.setTransform(447.1,58.7);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgTAuQgIgDgFgGQgGgGgDgJQgCgKAAgMQAAgKADgJQACgIAGgHQAGgGAJgEQAIgDAJgBQALAAAIAEQAJADAFAFQAGAGADAJQACAJAAAMQAAAKgDAKQgDAJgFAHQgGAGgJAEQgIACgKAAQgKABgJgDgAgKgdQgFACgDAFQgDAFgBAFQgBAHAAAFIABANQABAHADAEQADAEAEACQAFADAGAAQAGAAAFgDQAFgDADgEQADgFABgGQABgFAAgHQAAgGgBgGQgBgGgDgEQgDgFgFgCQgEgCgHgBQgFABgFACg");
	this.shape_281.setTransform(437.8,58.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgDAvIgDgBIgCgBIAAgBIAAhKIgYAAIgBgBIgBgBIgBgCIAAgEIAAgEIABgCIABgCIABAAIBBAAIABAAIABACIAAACIABAEIgBAEIAAACIgBABIgBABIgYAAIAABKIAAABIgCABIgDABIgEAAIgDAAg");
	this.shape_282.setTransform(429.4,58.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgMAwIgHgCIgFgCIgEgDIgBgDIgBgFIABgEIAAgCIABgBIACAAIADABIAEACIAHADIAJABIAFgBIAEgCIAEgEIABgFQgBgDgBgDIgFgEIgEgDIgHgEIgIgDIgHgEQgDgDgBgEQgCgEAAgGQAAgHADgFQACgGAEgCQAFgEAGgCQAGgBAEgBIAHABIAGABIAGADIACACIABABIAAABIABACIAAADIAAAEIgBACIAAACIgCAAIgCgBIgFgCIgFgDIgIAAIgDAAIgEACIgCAEIgBAEQAAADACACIAEAEIAEADIAIAEIAIAEQAEACACACQADACACAFQABAEAAAGQAAAHgCAFQgDAHgFADQgEAEgHACQgGACgGgBIgJAAg");
	this.shape_283.setTransform(422.3,58.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgaAvIgDgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIgBgBIAAhTQAAgEACgBQACgCADAAIAWAAIAEAAIAIABIAIADQAFADADADQADAEABAEQACAFAAAGQAAAIgDAGQgCAEgFAEQgFAEgGADQgHACgIAAIgIAAIAAAeIAAABIgCABIgDABIgEAAIgFAAgAgMAAIAJAAIAGAAQADgBACgDQACgCABgDIABgHQAAgFgCgDIgEgFIgGgCIgDAAIgJAAg");
	this.shape_284.setTransform(562.7,148.7);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgPAuQgHgDgFgEQgFgFgDgGQgCgHAAgJIAAg4IAAgBIACgBIACgBIAGAAIAEAAIADABIACABIAAABIAAA2QAAAGABAEIAFAHIAFAEIAHABQAEAAAEgBIAGgEIAEgHIABgJIAAg3IAAgBIACgBIADgBIAEAAIAGAAIACABIABABIABABIAAA3QAAAJgDAHQgCAGgFAFQgFAFgHACQgIADgIAAQgIAAgHgCg");
	this.shape_285.setTransform(553.6,148.7);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgiAvIgCgBIgBgBIAAgBIAAhTQAAgEACgBQACgCACAAIAKAAIAFAAIADACIAEADIACAFIAQAjIAEAEIADAGIADAGIACAGIAAgLIAAgKIAAgrIAAgBIACgCIADAAIAEAAIAEAAIADAAIABACIAAABIAABTIAAADIgBACIgDACIgDAAIgIAAIgFgBIgDgBIgDgEIgDgGIgWgqIgEgJIgEgJIAAALIAAAKIAAAwIAAABIgBABIgDABIgEAAIgFAAg");
	this.shape_286.setTransform(456.7,148.7);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AAcAvIgGAAIgEgBIgDgBIgBgDIgOg6IgNA6IgBADIgCABIgEABIgHAAIgHAAIgEgBIgCgBIgBgDIgVhRIgBgEIABgCIADgBIAGAAIAFAAIADAAIACABIAAACIARBHIARhGIABgCIACgCIADAAIADAAIAGAAIADAAIABACIABACIASBGIARhGIAAgCIACgCIADAAIAFAAIAFAAIADABIAAACIAAAEIgWBRIgBADIgDABIgEABIgGAAg");
	this.shape_287.setTransform(444.9,148.7);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgTAuQgIgDgFgGQgGgGgDgJQgCgKAAgMQAAgKADgJQACgIAGgHQAGgHAJgDQAIgDAJgBQALAAAIAEQAJADAFAFQAGAGADAJQACAJAAAMQAAAKgDAKQgDAJgFAHQgGAGgJAEQgIACgKAAQgKABgJgDgAgKgdQgFACgDAFQgDAFgBAFQgBAHAAAFIABANQABAHADAEQADAEAEACQAFADAGAAQAGAAAFgDQAFgDADgEQADgFABgGQABgFAAgHQAAgGgBgGQgBgGgDgFQgDgEgFgCQgEgCgHgBQgFABgFACg");
	this.shape_288.setTransform(433.2,148.7);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AggAvQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAhRQAAgDACgBQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAYAAQALAAAJADQAIADAHAGQAGAGADAIQADAJAAALQAAALgEAJQgDAKgGAGQgHAFgJAEQgJACgLAAgAgTAgIAKAAQAIAAAEgDQAFgBAEgFQADgEACgGQACgGAAgHQAAgGgCgGQgBgGgEgEQgDgEgGgDQgDgCgJAAIgKAAg");
	this.shape_289.setTransform(423.7,148.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275}]}).wait(3));

	// Layer 3
	this.instance_9 = new lib.arrows();
	this.instance_9.setTransform(1076.6,860.4,1,1,0,0,0,115.8,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},1).wait(2));

	// Layer 5
	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgYA+QgNgFgLgJIATgYQAHAGAIADQAIAEAGAAQAHAAAEgDQADgCAAgEQAAgFgEgCIgMgGIgQgGQgHgDgFgFQgGgDgDgHQgEgHgBgJQAAgLAHgJQAGgJAKgGQAMgFAMAAQALAAALAEQALAEAJAJIgRAVQgGgEgHgDQgGgCgGAAQgFAAgDACQgEACAAAFQAAAEAFADIAMAGIAPAGQAMAEAHAHQAGAJABANQAAALgGAJQgGAKgLAFQgLAGgPAAQgMAAgMgEg");
	this.shape_290.setTransform(504.9,227.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgZA7QgKgHgHgLIAXgSQADAGAEAEQAFACAEAAQAFAAAEgDQADgFAAgMIAAhPIAiAAIAABSQAAANgEALQgFAKgKAHQgJAGgPAAQgOAAgLgGg");
	this.shape_291.setTransform(493.5,227.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AhcBdQgngnAAg2QAAg2AngmQAngnA1AAQA2AAAoAnQAmAmAAA2QAAA2gmAnQgoAng2AAQg1AAgngng");
	this.shape_292.setTransform(502.2,116.9);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#000000").ss(11.3).p("AAAFoIAArP");
	this.shape_293.setTransform(501.7,152.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#000000").ss(4.3).p("ABGBnIiLAAIAAjNICLAAg");
	this.shape_294.setTransform(500.4,276.1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#000000").ss(4.3).p("AFoGBIrPAAIAAsBILPAAg");
	this.shape_295.setTransform(499.8,227.2);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#000000").ss(4.3).p("AlmmAIEbAAICHAAIEsAAIAAMBIrOAAgAl6mAIAUAA");
	this.shape_296.setTransform(499.8,227.2);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AlnGBIAAsBIEcAAIAAAxICHAAIAAgxIErAAIAAMBg");
	this.shape_297.setTransform(499.8,227.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AkdD0IHrnnIBQBQImYGXg");
	this.shape_298.setTransform(522.2,162.8);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#000000").ss(4.3).p("ABYmAIAsAAIDkAAIAAMBIrOAAIAArsAl8mAIAWAA");
	this.shape_299.setTransform(499.8,227.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AiwEGIAAgWIEuAAIm3m6IBQhQIIjIfIgsAAIAMAVIgcAAIgGAAIgGAAIiJAAIkZABg");
	this.shape_300.setTransform(481.6,162.5);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AlnGBIAArsIEcAAIAAAcICHAAIAAgcIAGAAIAGAHIAAgHIAcAAIgNgVIAtAAIDjAAIAAMBg");
	this.shape_301.setTransform(499.8,227.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292,p:{rotation:0,x:502.2,y:116.9}},{t:this.shape_291},{t:this.shape_290}]}).to({state:[{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_294},{t:this.shape_292,p:{rotation:45,x:546.9,y:143}},{t:this.shape_291},{t:this.shape_290}]},1).to({state:[{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_294},{t:this.shape_292,p:{rotation:45,x:458.7,y:143}},{t:this.shape_291},{t:this.shape_290}]},1).wait(1));

	// Layer 1
	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#8D8279").ss(4.3).p("AAAh8IAAD5");
	this.shape_302.setTransform(1497.6,529.5,1,1.712);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#8D8279").ss(4.3).p("AAAh8IAAD5");
	this.shape_303.setTransform(1364,509.5,1,10.86,-90);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#D92F27").s().p("AAADEQgBAAgDgDQgCgCABgCIAAhPQgBgCACgCQADgDABAAQACAAACADQADACgBACIAABPQABACgDACQgCADgCAAIAAAAgAAABiQgBAAgDgDQgCgCABgCIAAhQQgBgDACgDQADgCABAAQACAAACACQADADgBADIAABQQABACgDACQgCACgCABIAAAAgAAAAAQgBAAgDgDQgCgCABgCIAAhQQgBgDACgDQADgCABAAQACAAACACQADADgBADIAABQQABACgDACQgCADgCAAIAAAAgAAAhlQgBABgDgDQgCgCABgCIAAhQQgBgDACgDQADgCABAAQACAAACACQADADgBADIAABQQABACgDACQgCACgCAAIAAAAg");
	this.shape_304.setTransform(520.4,690.1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#D92F27").s().p("AiICnQgCAAgCgCQgDgCAAgDIAAhQQAAgDADgCQACgCACAAQADAAADACQACACgBADIAABQQABADgCACQgDACgCAAIgBAAgAiIBDQgCAAgCgCQgDgCAAgDIAAhOQAAgDADgCQACgCACAAQADAAADACQACACgBADIAABOQABADgCACQgDACgCAAIgBAAgACJADQgDAAgDgCQgCgBABgCIAAg0QgBgDACgCQADgCADAAQACAAACACQADACgBADIAAA0QABACgDABQgCACgCAAIAAAAgAiIgfQgCAAgCgCQgDgCAAgDIAAhQQAAgDADgCQACgCACAAQADAAADACQACACgBADIAABQQABADgCACQgDACgCAAIgBAAgACJhDQgDAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCADAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAiIiDQgCAAgCgCQgDgCAAgDIAAgVQAAgDADgCQACgCACAAIA8AAQACAAACACQADACAAADQAAADgDACQgCACgCAAIg1AAIAAAOQABADgCACQgDACgCAAIgBAAgAB6iYIhRAAQgCAAgCgCQgDgCAAgDQAAgDADgCQACgCACAAIBRAAQACAAADACQACACAAADQAAADgCACQgDACgCAAIAAAAgAAWiYIhOAAQgDAAgDgCQgCgCAAgDQAAgDACgCQADgCADAAIBOAAQACAAACACQADACAAADQAAADgDACQgCACgCAAIAAAAg");
	this.shape_305.setTransform(498.8,637.8);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#D92F27").s().p("ABEAGIgmAAQgCABgCgCQgDgDAAgCQAAgBADgCQACgDACABIAmAAQADgBACADQADACgBABQABACgDADQgCABgCAAIgBAAgAALAGIhPAAQgCABgCgCQgDgDAAgCQAAgBADgCQACgDACABIBPAAQACgBADADQACACAAABQAAACgCADQgDABgCAAIAAAAg");
	this.shape_306.setTransform(491.9,655.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#8D8279").ss(4.3).p("AAAh8IAAD5");
	this.shape_307.setTransform(1228.3,488.6,1,1.844);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#8D8279").ss(4.3).p("AAAjgIAAHB");
	this.shape_308.setTransform(1228.3,333.8);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#1D9EDA").ss(4.3).p("Eg12AHWIAAm5MBrtAAAIAAny");
	this.shape_309.setTransform(747.5,946);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#16AFC4").ss(4.3).p("AlCuUIJvAAIAAc+");
	this.shape_310.setTransform(352.7,917.9);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#D92F27").ss(4.3).p("Eg6kAAIIoSAAIAAvnIfsAAIAAe/MBmBAAAIAAj/");
	this.shape_311.setTransform(627.9,825.3);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#D92F27").ss(4.3).p("AzlFtIAArEMAnhAAA");
	this.shape_312.setTransform(357.4,689.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#D92F27").s().p("ACbCQIhQAAQgDAAgCgDQgCgCAAgCQAAgDACgDQACgCADAAIBQAAQADAAACACQACADAAADQAAACgCACQgCACgDABIAAAAgAA3CQIg0AAQgDAAAAgDQgCgCAAgCQAAgDACgDQAAgCADAAIA0AAQADAAACACQACADAAADQAAACgCACQgCACgDABIAAAAgACgCAQgDABgCgCQgCgDAAgDIAAhQQAAgCACgCQACgDADABQADgBACADQACACAAACIAABQQAAADgCADQgCACgDAAIAAgBgACgAdQgDAAgCgCQgCgDAAgDIAAhOQAAgCACgCQACgDADAAQADAAACADQACACAAACIAABOQAAADgCADQgCACgDAAIAAAAgACghFQgDAAgCgCQgCgDAAgDIAAg0IgOAAQgDABgCgDQgCgCAAgDQAAgCACgCQACgDADABIAVAAQADgBACADQACACAAACIAAA7QAAADgCADQgCACgDAAIAAAAgAB3iBIhQAAQgDABgCgDQgCgCAAgDQAAgCACgCQACgDADABIBQAAQADgBACADQACACAAACQAAADgCACQgCACgDAAIAAAAgAATiBIhOAAQgDABgCgDQgCgCAAgDQAAgCACgCQACgDADABIBOAAQADgBACADQACACAAACQAAADgCACQgCACgDAAIAAAAgAhPiBIhQAAQgDABgCgDQgCgCAAgDQAAgCACgCQACgDADABIBQAAQADgBACADQACACAAACQAAADgCACQgCACgDAAIAAAAg");
	this.shape_313.setTransform(1194.8,600.5);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#D92F27").s().p("EAyBABdIgIAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIABAAIAAhCQAAgDACgCQACgCADAAQADAAACACQACACAAADIAABJQAAADgCACQgCACgDAAIAAAAgEAxlABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAwBABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAudABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAs5ABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEArVABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEApxABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAoNABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAmpABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAlFABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAjhABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAh9ABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAgZABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAe1BdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAdRBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAbtBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAaJBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAYlBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAXBBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAVdBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAT5BdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgASVBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAQxBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAPNBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgANpBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAMFBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAKhBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAI9BdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAHZBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAF1BdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAERBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgACtBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgABJBdIhOAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBOAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAgZBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAh9BdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAjhBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAlFBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAmpBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAoNBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgApxBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgArVBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAs5BdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAudBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAwBBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAxlBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAzJBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgA0tBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgA2RBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgA31BdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgA5ZBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgA69BdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgA8hBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgA+FBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgA/pBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEghNABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgixABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgkVABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgl5ABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgndABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgpBABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgqlABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgsJABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgttABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgvRABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgw1ABdIhLAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBLAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAyBAAAQgDAAgCAAQgCgCAAgDIAAhQQAAgDACgCQACgCADAAQADAAACACQACACAAADIAABQQAAADgCACQgCAAgDAAIAAAAg");
	this.shape_314.setTransform(850.1,646.4);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#D92F27").ss(1.4).p("AAVAAIgpAA");
	this.shape_315.setTransform(1247.9,890.7);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#D92F27").s().p("AGiAGIhGAAQgCABgCgDQgDgCABgCQgBgBADgDQACgCACABIBGAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAgAFIAGIhGAAQgCABgCgDQgDgCABgCQgBgBADgDQACgCACABIBGAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAgADuAGIhGAAQgCABgCgDQgDgCABgCQgBgBADgDQACgCACABIBGAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAgACUAGIhGAAQgCABgCgDQgDgCABgCQgBgBADgDQACgCACABIBGAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAgAA6AGIhEAAQgCABgCgDQgDgCABgCQgBgBADgDQACgCACABIBEAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAgAgeAGIhGAAQgCABgCgDQgDgCABgCQgBgBADgDQACgCACABIBGAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAgAh4AGIhGAAQgCABgCgDQgDgCABgCQgBgBADgDQACgCACABIBGAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAgAjSAGIhGAAQgCABgCgDQgDgCABgCQgBgBADgDQACgCACABIBGAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAgAksAGIhGAAQgCABgCgDQgDgCABgCQgBgBADgDQACgCACABIBGAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAgAmGAGIgcAAQgCABgDgDQgCgCAAgCQAAgBACgDQADgCACABIAcAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAg");
	this.shape_316.setTransform(1293.3,890.7);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#D92F27").ss(1.4).p("AARgXIAAAoIgoAA");
	this.shape_317.setTransform(1340.3,888.9);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#D92F27").s().p("AAAYCQgBAAgDgCQgCgCAAgDIAAg/QAAgDACgCQADgCABAAQACAAACACQADACAAADIAAA/QAAADgDACQgCACgCAAIAAAAgAAAWvQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAVLQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAATnQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAASDQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAQfQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAO7QgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAANXQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAALzQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAKPQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAIrQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAHHQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAFjQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAD/QgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAACbQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAA3QgBAAgDgCQgCgCAAgDIAAhOQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABOQAAADgDACQgCACgCAAIAAAAgAAAgrQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAiPQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAjzQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAlXQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAm7QgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAofQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAqDQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAArnQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAtLQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAuvQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAwTQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAx3QgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAzbQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAA0/QgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAA2jQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAg");
	this.shape_318.setTransform(1342.1,731.9);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#D92F27").ss(1.4).p("AgXgQIAoAAIAAAo");
	this.shape_319.setTransform(1340.3,573.4);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#D92F27").s().p("ALwAGIgFAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIAFAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgALXAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAJzAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAIPAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAGrAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAFHAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgADjAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAB/AGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAAbAGIhOAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBOAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAhHAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAirAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAkPAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAlzAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAnXAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAo7AGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAqfAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAg");
	this.shape_320.setTransform(1261.1,571.7);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#D92F27").ss(1.4).p("AgQAYIAAgoIAoAA");
	this.shape_321.setTransform(1180.5,573.4);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#D92F27").s().p("AAABsQgBABgDgDQgCgCAAgCIAAhQQAAgDACgDQADgCABABQACgBACACQADADAAADIAABQQAAACgDACQgCACgCAAIAAAAgAAAAIQgBABgDgDQgCgCAAgDIAAhNQAAgDACgDQADgCABABQACgBACACQADADAAADIAABNQAAADgDACQgCACgCAAIAAAAgAAAhaQgBABgDgCQgCgDAAgDIAAgDQAAgDACgDQADgCABAAQACAAACACQADADAAADIAAADQAAADgDADQgCABgCAAIAAAAg");
	this.shape_322.setTransform(1178.7,587.5);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#D92F27").ss(1.4).p("AAAAVIAAgp");
	this.shape_323.setTransform(1178.7,602.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#D92F27").s().p("AAADgQgBAAgCgDQgDgCAAgCIAAgjQAAgCADgCQACgDABAAQACAAADADQACACAAACIAAAjQAAACgCACQgDACgCABIAAAAgAAACqQgBAAgCgDQgDgCAAgCIAAhRQAAgCADgDQACgCABAAQACAAADACQACADAAACIAABRQAAACgCACQgDACgCABIAAAAgAAABGQgBAAgCgDQgDgCAAgCIAAhOQAAgDADgDQACgCABAAQACAAADACQACADAAADIAABOQAAACgCACQgDADgCAAIAAAAgAAAgdQgBABgCgDQgDgCAAgCIAAhQQAAgDADgDQACgCABAAQACAAADACQACADAAADIAABQQAAACgCACQgDACgCAAIAAAAgAAAiBQgBABgCgDQgDgCAAgCIAAhQQAAgDADgDQACgCABABQACgBADACQACADAAADIAABQQAAACgCACQgDACgCAAIAAAAg");
	this.shape_324.setTransform(1186.2,659.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#D92F27").s().p("ACaCQIhQAAQgDAAgCgDQgCgCAAgCQAAgDACgDQACgCADAAIBQAAQADAAACACQACADAAADQAAACgCACQgCACgDABIAAAAgAA2CQIgzAAQgDAAAAgDQgCgCAAgCQAAgDACgDQAAgCADAAIAzAAQADAAACACQACADAAADQAAACgCACQgCACgDABIAAAAgACgCAQgDABgCgCQgCgDAAgDIAAhQQAAgCACgCQACgDADABQADgBACADQACACAAACIAABQQAAADgCADQgCACgDAAIAAgBgACgAdQgDAAgCgCQgCgDAAgDIAAhOQAAgCACgCQACgDADAAQADAAACADQACACAAACIAABOQAAADgCADQgCACgDAAIAAAAgACghFQgDAAgCgCQgCgDAAgDIAAg0IgOAAQgDABgCgDQgCgCAAgDQAAgCACgCQACgDADABIAVAAQADgBACADQACACAAACIAAA7QAAADgCADQgCACgDAAIAAAAgAB3iBIhQAAQgDABgCgDQgCgCAAgDQAAgCACgCQACgDADABIBQAAQADgBACADQACACAAACQAAADgCACQgCACgDAAIAAAAgAATiBIhOAAQgDABgCgDQgCgCAAgDQAAgCACgCQACgDADABIBOAAQADgBACADQACACAAACQAAADgCACQgCACgDAAIAAAAgAhPiBIhQAAQgDABgCgDQgCgCAAgDQAAgCACgCQACgDADABIBQAAQADgBACADQACACAAACQAAADgCACQgCACgDAAIAAAAg");
	this.shape_325.setTransform(722.9,600.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#D92F27").s().p("AAABdQgBAAgDgCQgCgCABgDIAAhJQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABJQABADgDACQgCACgCAAIAAAAgAAAAAQgBAAgDAAQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCAAgCAAIAAAAg");
	this.shape_326.setTransform(698.4,646.4);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#D92F27").ss(1.4).p("AgUAAIApAA");
	this.shape_327.setTransform(898.3,891.2);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#D92F27").s().p("AGFAIIhQgBQgCAAgCgCQgDgCAAgDQAAgBADgCQACgCACAAIBQABQADAAADACQACACAAABQAAADgCACQgDACgCAAIgBAAgAEhAHIhQAAQgCAAgCgCQgDgCAAgDQAAgBADgCQACgCACAAIBQAAQADAAADACQACACAAABQAAADgCACQgDACgCAAIgBAAgAC+AHIhRgBQgCAAgDgCQgCgCAAgCQAAgCACgCQADgCACAAIBRABQACAAACACQADACAAABQAAADgDACQgCACgCAAIAAAAgABaAGIhQgBQgDAAgDgCQgCgCAAgBQAAgDACgCQADgCADAAIBQABQACAAACACQADACAAACQAAACgDACQgCACgCAAIAAAAgAgIAFIhQAAQgDAAgDgCQgCgCAAgBQAAgDACgCQADgCADAAIBQAAQACAAACACQADACgBADQABABgDACQgCACgCAAIAAAAgAhsAFIhQAAQgDAAgDgCQgCgCABgBQgBgDACgCQADgCADAAIBQAAQACAAACACQADACgBADQABABgDACQgCACgCAAIAAAAgAjRAFIhPAAQgDAAgDgCQgCgCABgBQgBgDACgCQADgCADAAIBPAAQADAAACACQADACgBADQABABgDACQgCACgCAAIgBAAgAk1AFIhQAAQgCAAgCgCQgDgCABgBQgBgDADgCQACgCACAAIBQAAQADAAADACQACACgBADQABABgCACQgDACgCAAIgBAAg");
	this.shape_328.setTransform(854.6,891);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#D92F27").ss(1.4).p("AgQgXIAAAoIAoAA");
	this.shape_329.setTransform(810.3,889.1);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#D92F27").s().p("AAAYDQgBAAgDgCQgCgCABgDIAAhBQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABBQABADgDACQgCACgCAAIAAAAgAAAWuQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAVKQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAATmQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAASCQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAQeQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAO6QgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAANWQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAALyQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAKOQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAIqQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAHGQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAFiQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAD+QgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAACaQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAA2QgBAAgDgCQgCgCABgDIAAhOQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABOQABADgDACQgCACgCAAIAAAAgAAAgsQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAiQQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAj0QgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAlYQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAm8QgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAogQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAqEQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAroQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAtMQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAuwQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAwUQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAx4QgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAzcQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAA1AQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAA2kQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAg");
	this.shape_330.setTransform(808.5,732);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#D92F27").ss(1.4).p("AgXgQIAoAAIAAAo");
	this.shape_331.setTransform(806.7,573.4);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#D92F27").s().p("AG3AGIhQAAQgCABgCgDQgDgCABgCQgBgBADgDQACgCACABIBQAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAgAFTAGIhQAAQgCABgCgDQgDgCAAgCQAAgBADgDQACgCACABIBQAAQADgBADACQACADAAABQAAACgCACQgDACgCAAIgBAAgADvAGIhQAAQgCABgCgDQgDgCAAgCQAAgBADgDQACgCACABIBQAAQADgBADACQACADAAABQAAACgCACQgDACgCAAIgBAAgACMAGIhRAAQgCABgDgDQgCgCAAgCQAAgBACgDQADgCACABIBRAAQACgBACACQADADAAABQAAACgDACQgCACgCAAIAAAAgAAoAGIhOAAQgDABgDgDQgCgCAAgCQAAgBACgDQADgCADABIBOAAQACgBACACQADADAAABQAAACgDACQgCACgCAAIAAAAgAg6AGIhQAAQgDABgDgDQgCgCABgCQgBgBACgDQADgCADABIBQAAQACgBACACQADADgBABQABACgDACQgCACgCAAIAAAAgAieAGIhQAAQgDABgDgDQgCgCABgCQgBgBACgDQADgCADABIBQAAQACgBACACQADADgBABQABACgDACQgCACgCAAIAAAAgAkDAGIhPAAQgDABgDgDQgCgCABgCQgBgBACgDQADgCADABIBPAAQADgBACACQADADgBABQABACgDACQgCACgCAAIgBAAgAlnAGIhQAAQgCABgCgDQgDgCABgCQgBgBADgDQACgCACABIBQAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAg");
	this.shape_332.setTransform(757.9,571.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#D92F27").ss(1.4).p("AgQAYIAAgoIAoAA");
	this.shape_333.setTransform(708.6,573.4);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#D92F27").s().p("AAABsQgBABgCgDQgDgCAAgCIAAhQQAAgDADgDQACgCABABQACgBADACQACADAAADIAABQQAAACgCACQgDACgCAAIAAAAgAAAAIQgBABgCgDQgDgCAAgDIAAhNQAAgDADgDQACgCABABQACgBADACQACADAAADIAABNQAAADgCACQgDACgCAAIAAAAgAAAhaQgBABgCgCQgDgDAAgDIAAgDQAAgDADgDQACgCABAAQACAAADACQACADAAADIAAADQAAADgCADQgDABgCAAIAAAAg");
	this.shape_334.setTransform(706.9,587.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#D92F27").ss(1.4).p("AAAAVIAAgp");
	this.shape_335.setTransform(706.9,602.5);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#1D9EDA").s().p("AAAFrQgBAAgCgDQgDgCAAgCIAAgNQAAgCADgCQACgDABABQACgBADADQACACgBACIAAANQABACgCACQgDADgCAAIAAAAgAAAFKQgBABgCgCQgDgDAAgDIAAhQQAAgCADgCQACgDABABQACgBADADQACACgBACIAABQQABADgCADQgDACgCgBIAAAAgAAADnQgBAAgCgCQgDgDAAgDIAAhQQAAgCADgCQACgDABAAQACAAADADQACACgBACIAABQQABADgCADQgDACgCAAIAAAAgAAACDQgBAAgCgCQgDgDAAgDIAAhQQAAgCADgCQACgDABAAQACAAADADQACACgBACIAABQQABADgCADQgDACgCAAIAAAAgAAAAfQgBAAgCgDQgDgCAAgCIAAhPQAAgCADgDQACgCABAAQACAAADACQACADgBACIAABPQABACgCACQgDACgCABIAAAAgAAAhDQgBAAgCgDQgDgCAAgCIAAhQQAAgDADgDQACgCABAAQACAAADACQACADgBADIAABQQABACgCACQgDADgCAAIAAAAgAAAioQgBABgCgDQgDgCAAgCIAAhQQAAgDADgDQACgCABAAQACAAADACQACADgBADIAABQQABACgCACQgDACgCAAIAAAAgAAAkMQgBABgCgDQgDgCAAgCIAAhQQAAgDADgDQACgCABABQACgBADACQACADgBADIAABQQABACgCACQgDACgCAAIAAAAg");
	this.shape_336.setTransform(714.4,673.4);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#8D8279").ss(4.3).p("AHlIKIuzAAIAAwo");
	this.shape_337.setTransform(1079.3,576.1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#8D8279").ss(4.3).p("AAAipIAAFT");
	this.shape_338.setTransform(1032.9,482.7);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#8D8279").ss(4.3).p("AdPogIAAFnMg6dAAAIAALEIEiAA");
	this.shape_339.setTransform(814.8,576.3);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#8D8279").ss(4.3).p("AAAipIAAFT");
	this.shape_340.setTransform(1001.9,482.7);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#8D8279").ss(4.3).p("AAAjgIAAHB");
	this.shape_341.setTransform(1015.3,333.8);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#8D8279").ss(4.3).p("AybmfMAkiAAAIAANU");
	this.shape_342.setTransform(1111,145.1);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#00A69B").ss(4.3).p("Ag3lZIBaAAIAALI");
	this.shape_343.setTransform(1011.1,150.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#00A69B").ss(4.3).p("AgqF1IAArUIBqAA");
	this.shape_344.setTransform(869.7,151.5);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#000000").ss(2.1).p("EAkxgPpIAAfJMhJsAAA");
	this.shape_345.setTransform(657.1,413.8);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#00A69B").ss(4.3).p("AchrRIAAadMg5BAAAIAA+s");
	this.shape_346.setTransform(682.9,385.8);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#000000").ss(4.3).p("AEHAAIoNAA");
	this.shape_347.setTransform(739.2,411);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#000000").ss(4.3).p("ABjnwIAAPMIjaAA");
	this.shape_348.setTransform(825.5,363.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302}]}).wait(3));

	// Slider
	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("rgba(204,204,204,0.2)").s().p("A6neCIAAlMIPkAAIAAFMgAKdUSIAAlMIXxAAIAAFMgAKdCTIAAlKIMhAAIAAFKgA6FCTIAAlKIMhAAIAAFKgACV41IAAlMITZAAIAAFMgEgiNgY1IAAlMITZAAIAAFMg");
	this.shape_349.setTransform(1243.9,335.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_349).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1040.9,570.5,1807.1,988.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;