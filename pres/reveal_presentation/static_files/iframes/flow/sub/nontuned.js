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
		{src:"images/nontuned_atlas_.png?1472458460253", id:"nontuned_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"nontuned_atlas_", frames: [[431,0,413,447],[0,553,375,137],[0,692,84,17],[431,449,370,310],[0,0,429,551],[86,692,17,16]]}
];


// symbols:



(lib.bg = function() {
	this.spriteSheet = ss["nontuned_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.boom = function() {
	this.spriteSheet = ss["nontuned_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cylinder = function() {
	this.spriteSheet = ss["nontuned_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hmi2 = function() {
	this.spriteSheet = ss["nontuned_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.king = function() {
	this.spriteSheet = ss["nontuned_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.winch = function() {
	this.spriteSheet = ss["nontuned_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.yellowglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgcBGIAFgEIAEAEgAAaBGIgagtIA8heIBcAAIAACLgAiXBGIAAiLIAzAAIA2BdIgdAugAg0hFIA+AAIgfA2g");
	this.shape.setTransform(15.3,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.6,14.2);


(lib.winch_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.winch();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17,16);


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


(lib.spake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcBdQgngnAAg2QAAg2AngmQAngnA1AAQA2AAAoAnQAmAmAAA2QAAA2gmAnQgoAng2AAQg1AAgngng");
	this.shape.setTransform(53.4,13.3,1,1,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkhDOIH0nsIBPBQIn0Htg");
	this.shape_1.setTransform(20.3,45.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,0,75.4,73.9);


(lib.redline1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D92F27").ss(4.3).p("EglHAKGIAApKQAAhwBBg5QBGg+CTAAMBA7AAAQBhAAA0gKQA/gMAigfQBEg9AAjHIAAih");
	this.shape.setTransform(237.6,64.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-2.1,482.1,133.4);


(lib.redglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DA1C1C").s().p("Ah4A8IAAh3IDxAAIhDA7IBDA8g");
	this.shape.setTransform(12.1,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.3,12.1);


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


(lib.nullennull = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAXAvIguAAIAAAAIgBgBIAAgBIAAgBIAAgCIAAgBIABgBIAAAAIAVAAIAAhMIgUAMIgBABIgBAAIgBgBIAAgCIAAgCIAAgBIABgBIABgBIAWgOIABgBIAAAAIAAAAIACAAIABAAIACAAIAAABIAAABIAABUIASAAIACAAIABABIAAABIAAACIAAABIAAABIgCABIgBAAg");
	this.shape.setTransform(307.1,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOAtQgGgDgDgGQgFgHgBgIQgCgJABgMQgBgJACgJQABgJAFgHQAEgGAGgEQAGgDAIAAQAIAAAGADQAGADADAGQAFAGABAJQABAJAAALQAAAKgBAJQgBAJgFAGQgEAHgGADQgGAEgIAAQgIAAgGgDgAgKgkQgFADgCAGQgCAGgBAHIgBAOQgBAKACAHQABAIADAGQACAEAFADQAEACAFABQAEgBADgBIAHgEIAEgHIADgIIABgJIABgLIgBgLIgCgKIgDgIQgBgEgDgCQgDgCgDgBIgHgBQgGgBgEAEg");
	this.shape_1.setTransform(299.2,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAXAvIguAAIAAAAIgBgBIAAgBIAAgBIAAgCIAAgBIABgBIAAAAIAVAAIAAhMIgUAMIgBABIgBAAIgBgBIAAgCIAAgCIAAgBIABgBIABgBIAXgOIAAgBIAAAAIAAAAIABAAIACAAIACAAIAAABIAAABIAABUIASAAIACAAIABABIAAABIAAACIAAABIAAABIgBABIgCAAg");
	this.shape_2.setTransform(291.9,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOAtQgGgDgDgGQgFgHgBgIQgBgJgBgMQABgJABgJQABgJAFgHQAEgGAGgEQAGgDAIAAQAIAAAGADQAGADADAGQAFAGABAJQACAJgBALQABAKgCAJQgBAJgFAGQgEAHgGADQgGAEgIAAQgIAAgGgDgAgKgkQgFADgCAGQgCAGgCAHIgBAOQABAKABAHQABAIADAGQADAEAEADQAEACAFABQAEgBADgBIAHgEIAEgHIADgIIABgJIAAgLIAAgLIgCgKIgDgIQgBgEgDgCQgDgCgDgBIgHgBQgFgBgFAEg");
	this.shape_3.setTransform(284,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAYAvIgvAAIAAAAIgBgBIgBgBIAAgBIAAgCIABgBIAAgBIABAAIAWAAIAAhMIgVAMIgCABIgBAAIAAgBIAAgCIAAgCIAAgBIABgBIAAgBIAYgOIAAgBIAAAAIAAAAIABAAIACAAIACAAIABABIAAABIAABUIASAAIABAAIABABIAAABIAAACIAAABIAAABIgBABIgBAAg");
	this.shape_4.setTransform(276.7,11.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOAtQgGgDgDgGQgEgHgCgIQgBgJgBgMQABgJABgJQACgJAEgHQADgGAHgEQAGgDAIAAQAIAAAGADQAGADADAGQAEAGACAJQACAJgBALQABAKgCAJQgCAJgEAGQgEAHgGADQgGAEgIAAQgIAAgGgDgAgKgkQgEADgDAGQgDAGgBAHIgBAOQABAKABAHQABAIADAGQACAEAFADQAEACAFABQAEgBAEgBIAGgEIAEgHIACgIIACgJIAAgLIAAgLIgCgKIgDgIQgBgEgDgCQgDgCgDgBIgHgBQgFgBgFAEg");
	this.shape_5.setTransform(268.8,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAYAvIgvAAIAAAAIgBgBIgBgBIAAgBIAAgCIABgBIAAgBIABAAIAWAAIAAhMIgVAMIgCABIgBAAIAAgBIAAgCIAAgCIAAgBIABgBIAAgBIAYgOIAAgBIAAAAIAAAAIABAAIACAAIACAAIABABIAAABIAABUIASAAIABAAIABABIAAABIAAACIAAABIAAABIgBABIgBAAg");
	this.shape_6.setTransform(261.5,11.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOAtQgGgDgDgGQgEgHgCgIQgBgJgBgMQABgJABgJQACgJAEgHQADgGAHgEQAGgDAIAAQAIAAAGADQAGADAEAGQAEAGABAJQABAJAAALQAAAKgBAJQgBAJgEAGQgFAHgGADQgGAEgIAAQgIAAgGgDgAgKgkQgEADgDAGQgDAGgBAHIgBAOQABAKABAHQABAIADAGQADAEAEADQAEACAFABQAEgBAEgBIAGgEIAEgHIACgIIACgJIAAgLIAAgLIgCgKIgDgIQgCgEgCgCQgDgCgDgBIgHgBQgGgBgEAEg");
	this.shape_7.setTransform(253.6,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAYAvIgvAAIAAAAIgBgBIgBgBIAAgBIAAgCIABgBIAAgBIABAAIAWAAIAAhMIgUAMIgDABIgBAAIAAgBIAAgCIAAgCIAAgBIABgBIAAgBIAYgOIAAgBIAAAAIAAAAIABAAIADAAIABAAIABABIAAABIAABUIASAAIABAAIAAABIABABIAAACIAAABIgBABIAAABIgBAAg");
	this.shape_8.setTransform(246.3,11.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgOAtQgGgDgEgGQgDgHgCgIQgCgJAAgMQAAgJACgJQACgJADgHQAEgGAHgEQAGgDAIAAQAIAAAGADQAGADAEAGQAEAGABAJQABAJAAALQAAAKgBAJQgBAJgEAGQgFAHgGADQgGAEgIAAQgIAAgGgDgAgKgkQgEADgDAGQgCAGgCAHIgBAOQAAAKACAHQABAIADAGQADAEAEADQAEACAFABQAEgBAEgBIAGgEIAEgHIACgIIACgJIAAgLIAAgLIgCgKIgDgIQgCgEgCgCQgDgCgDgBIgHgBQgGgBgEAEg");
	this.shape_9.setTransform(238.4,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAYAvIguAAIgBAAIgBgBIgBgBIAAgBIAAgCIABgBIAAgBIACAAIAVAAIAAhMIgUAMIgDABIgBAAIAAgBIAAgCIAAgCIAAgBIABgBIAAgBIAXgOIABgBIAAAAIAAAAIABAAIADAAIABAAIABABIAAABIAABUIASAAIABAAIAAABIABABIAAACIAAABIgBABIAAABIgBAAg");
	this.shape_10.setTransform(231.1,11.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgOAtQgGgDgEgGQgEgHgBgIQgCgJAAgMQAAgJACgJQABgJAEgHQAFgGAGgEQAGgDAHAAQAJAAAGADQAGADAEAGQAEAGABAJQACAJAAALQAAAKgCAJQgBAJgEAGQgFAHgGADQgGAEgIAAQgIAAgGgDgAgKgkQgEADgDAGQgCAGgBAHIgCAOQAAAKACAHQABAIADAGQADAEAEADQAEACAFABQAEgBAEgBIAGgEIAEgHIACgIIACgJIABgLIgBgLIgCgKIgDgIQgCgEgCgCQgCgCgEgBIgHgBQgFgBgFAEg");
	this.shape_11.setTransform(223.2,11.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAYAvIguAAIgBAAIgBgBIgBgBIAAgBIAAgCIABgBIABgBIABAAIAVAAIAAhMIgUAMIgCABIgCAAIAAgBIAAgCIAAgCIAAgBIABgBIABgBIAWgOIABgBIAAAAIAAAAIACAAIACAAIABAAIAAABIAAABIAABUIATAAIABAAIAAABIABABIAAACIAAABIgBABIgBABIAAAAg");
	this.shape_12.setTransform(215.9,11.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgOAtQgGgDgEgGQgEgHgBgIQgBgJAAgMQAAgJABgJQABgJAEgHQAFgGAGgEQAGgDAHAAQAJAAAGADQAGADAEAGQADAGACAJQACAJAAALQAAAKgCAJQgCAJgDAGQgEAHgHADQgGAEgIAAQgIAAgGgDgAgKgkQgEADgDAGQgDAGAAAHIgBAOQAAAKABAHQABAIADAGQADAEAEADQAEACAFABQAEgBAEgBIAGgEIAEgHIACgIIACgJIABgLIgBgLIgCgKIgDgIQgCgEgCgCQgCgCgEgBIgHgBQgFgBgFAEg");
	this.shape_13.setTransform(208,11.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgOAtQgGgDgDgGQgEgHgCgIQgBgJgBgMQABgJABgJQACgJAEgHQADgGAHgEQAGgDAIAAQAIAAAGADQAGADADAGQAEAGACAJQACAJgBALQABAKgCAJQgCAJgEAGQgEAHgGADQgGAEgIAAQgIAAgGgDgAgKgkQgEADgDAGQgDAGgBAHIgBAOQABAKABAHQABAIADAGQACAEAFADQAEACAFABQAEgBAEgBIAGgEIAEgHIADgIIABgJIAAgLIAAgLIgCgKIgDgIQgBgEgDgCQgDgCgDgBIgHgBQgFgBgFAEg");
	this.shape_14.setTransform(200.4,11.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAYAvIgvAAIAAAAIgBgBIgBgBIAAgBIAAgCIABgBIAAgBIABAAIAWAAIAAhMIgVAMIgCABIgBAAIAAgBIAAgCIAAgCIAAgBIABgBIAAgBIAYgOIAAgBIAAAAIAAAAIABAAIACAAIACAAIABABIAAABIAABUIASAAIABAAIABABIAAABIAAACIAAABIAAABIgBABIgBAAg");
	this.shape_15.setTransform(193.1,11.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAXAvIgtAAIgBAAIgBgBIAAgBIAAgBIAAgCIAAgBIABgBIABAAIAUAAIAAhMIgUAMIgBABIgBAAIgBgBIAAgCIAAgCIAAgBIABgBIABgBIAWgOIABgBIAAAAIAAAAIACAAIABAAIACAAIAAABIAAABIAABUIASAAIACAAIAAABIABABIAAACIAAABIgBABIgBABIgBAAg");
	this.shape_16.setTransform(185.5,11.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgOAtQgGgDgDgGQgEgHgCgIQgCgJABgMQgBgJACgJQACgJAEgHQAEgGAGgEQAGgDAHAAQAJAAAGADQAGADADAGQAEAGACAJQABAJABALQgBAKgBAJQgCAJgEAGQgDAHgHADQgGAEgIAAQgIAAgGgDgAgKgkQgFADgCAGQgCAGgBAHIgBAOQgBAKACAHQABAIADAGQACAEAFADQAEACAFABQAEgBADgBIAHgEIAEgHIADgIIABgJIABgLIgBgLIgCgKIgDgIQgBgEgDgCQgDgCgDgBIgHgBQgGgBgEAEg");
	this.shape_17.setTransform(177.6,11.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgOAtQgGgDgEgGQgDgHgCgIQgCgJAAgMQAAgJACgJQACgJADgHQAEgGAHgEQAGgDAHAAQAJAAAGADQAGADAEAGQAEAGABAJQABAJAAALQAAAKgBAJQgBAJgEAGQgFAHgGADQgGAEgIAAQgIAAgGgDgAgKgkQgEADgDAGQgCAGgCAHIgBAOQAAAKACAHQABAIADAGQADAEAEADQAEACAFABQAEgBAEgBIAGgEIAEgHIACgIIACgJIAAgLIAAgLIgCgKIgDgIQgCgEgCgCQgDgCgDgBIgHgBQgGgBgEAEg");
	this.shape_18.setTransform(170,11.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAYAvIguAAIgBAAIgBgBIgBgBIAAgBIAAgCIABgBIAAgBIACAAIAVAAIAAhMIgUAMIgDABIgBAAIAAgBIAAgCIAAgCIAAgBIABgBIAAgBIAXgOIABgBIAAAAIAAAAIABAAIADAAIABAAIABABIAAABIAABUIASAAIABAAIAAABIABABIAAACIAAABIgBABIgBABIAAAAg");
	this.shape_19.setTransform(162.7,11.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgOAtQgGgDgEgGQgEgHgBgIQgCgJAAgMQAAgJACgJQABgJAEgHQAFgGAGgEQAGgDAHAAQAJAAAGADQAGADAEAGQAEAGABAJQACAJAAALQAAAKgCAJQgBAJgEAGQgFAHgGADQgGAEgIAAQgIAAgGgDgAgKgkQgEADgDAGQgCAGgBAHIgCAOQAAAKACAHQABAIADAGQADAEAEADQAEACAFABQAEgBAEgBIAGgEIAEgHIACgIIACgJIABgLIgBgLIgCgKIgDgIQgCgEgCgCQgCgCgEgBIgHgBQgFgBgFAEg");
	this.shape_20.setTransform(154.8,11.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAXAvIgtAAIgBAAIgBgBIgBgBIAAgBIAAgCIABgBIABgBIABAAIAUAAIAAhMIgTAMIgCABIgCAAIAAgBIAAgCIAAgCIAAgBIABgBIABgBIAWgOIABgBIAAAAIAAAAIACAAIACAAIABAAIABABIAAABIAABUIARAAIACAAIAAABIABABIAAACIAAABIgBABIgBABIgBAAg");
	this.shape_21.setTransform(147.5,11.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAYAvIgvAAIAAAAIgBgBIAAgBIAAgBIAAgCIAAgBIAAgBIABAAIAWAAIAAhMIgVAMIgCABIAAAAIgBgBIAAgCIAAgCIAAgBIABgBIAAgBIAYgOIAAgBIAAAAIAAAAIABAAIACAAIACAAIABABIAAABIAABUIASAAIABAAIABABIAAABIAAACIAAABIAAABIgBABIgBAAg");
	this.shape_22.setTransform(139.9,11.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgOAtQgGgDgDgGQgEgHgCgIQgBgJgBgMQABgJABgJQACgJAEgHQADgGAHgEQAGgDAIAAQAIAAAGADQAGADADAGQAEAGACAJQACAJgBALQABAKgCAJQgCAJgEAGQgEAHgGADQgGAEgIAAQgIAAgGgDgAgKgkQgEADgDAGQgDAGgBAHIgBAOQABAKABAHQABAIADAGQACAEAFADQAEACAFABQAEgBAEgBIAGgEIAEgHIACgIIACgJIAAgLIAAgLIgCgKIgDgIQgBgEgDgCQgDgCgDgBIgHgBQgFgBgFAEg");
	this.shape_23.setTransform(132,11.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAYAvIgvAAIAAAAIgBgBIgBgBIAAgBIAAgCIABgBIAAgBIABAAIAWAAIAAhMIgVAMIgCABIgBAAIAAgBIAAgCIAAgCIAAgBIABgBIAAgBIAYgOIAAgBIAAAAIAAAAIABAAIACAAIACAAIABABIAAABIAABUIASAAIABAAIABABIAAABIAAACIAAABIAAABIgBABIgBAAg");
	this.shape_24.setTransform(124.7,11.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgOAtQgGgDgEgGQgDgHgCgIQgBgJgBgMQABgJABgJQACgJADgHQAEgGAHgEQAGgDAIAAQAIAAAGADQAGADAEAGQAEAGABAJQABAJAAALQAAAKgBAJQgBAJgEAGQgFAHgGADQgGAEgIAAQgIAAgGgDgAgKgkQgFADgCAGQgDAGgBAHIgBAOQABAKABAHQABAIADAGQADAEAEADQAEACAFABQAEgBAEgBIAGgEIAEgHIACgIIACgJIAAgLIAAgLIgCgKIgDgIQgCgEgCgCQgDgCgDgBIgHgBQgGgBgEAEg");
	this.shape_25.setTransform(116.8,11.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAYAvIgvAAIAAAAIgBgBIgBgBIAAgBIAAgCIABgBIAAgBIABAAIAWAAIAAhMIgUAMIgDABIgBAAIAAgBIAAgCIAAgCIAAgBIABgBIAAgBIAYgOIAAgBIAAAAIAAAAIABAAIADAAIABAAIABABIAAABIAABUIASAAIABAAIAAABIABABIAAACIAAABIgBABIAAABIgBAAg");
	this.shape_26.setTransform(109.5,11.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgOAtQgGgDgEgGQgDgHgCgIQgCgJAAgMQAAgJACgJQACgJADgHQAEgGAHgEQAGgDAHAAQAJAAAGADQAGADAEAGQAEAGABAJQABAJAAALQAAAKgBAJQgBAJgEAGQgFAHgGADQgGAEgIAAQgIAAgGgDgAgKgkQgEADgDAGQgCAGgCAHIgBAOQAAAKACAHQABAIADAGQADAEAEADQAEACAFABQAEgBAEgBIAGgEIAEgHIACgIIACgJIAAgLIAAgLIgCgKIgDgIQgCgEgCgCQgDgCgDgBIgHgBQgGgBgEAEg");
	this.shape_27.setTransform(101.6,11.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgOAtQgGgDgDgGQgFgHgBgIQgCgJABgMQgBgJACgJQABgJAFgHQAEgGAGgEQAGgDAIAAQAIAAAGADQAGADADAGQAFAGABAJQABAJAAALQAAAKgBAJQgBAJgFAGQgEAHgGADQgGAEgIAAQgIAAgGgDgAgKgkQgFADgCAGQgCAGgCAHIAAAOQgBAKACAHQABAIADAGQACAEAFADQAEACAFABQAEgBADgBIAHgEIAEgHIADgIIABgJIAAgLIAAgLIgCgKIgDgIQgBgEgDgCQgDgCgDgBIgHgBQgGgBgEAEg");
	this.shape_28.setTransform(94,11.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAXAvIguAAIAAAAIgBgBIAAgBIAAgBIAAgCIAAgBIABgBIAAAAIAVAAIAAhMIgUAMIgBABIgBAAIgBgBIAAgCIAAgCIAAgBIABgBIABgBIAXgOIAAgBIAAAAIAAAAIABAAIACAAIACAAIAAABIAAABIAABUIASAAIACAAIABABIAAABIAAACIAAABIAAABIgBABIgCAAg");
	this.shape_29.setTransform(86.7,11.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAXAvIgtAAIgBAAIgBgBIgBgBIAAgBIAAgCIABgBIABgBIABAAIAUAAIAAhMIgTAMIgCABIgCAAIAAgBIAAgCIAAgCIAAgBIABgBIABgBIAWgOIABgBIAAAAIAAAAIACAAIACAAIABAAIABABIAAABIAABUIARAAIACAAIAAABIABABIAAACIAAABIgBABIgBABIgBAAg");
	this.shape_30.setTransform(79.1,11.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgOAtQgGgDgEgGQgEgHgBgIQgBgJAAgMQAAgJABgJQABgJAEgHQAFgGAGgEQAGgDAHAAQAJAAAGADQAGADAEAGQADAGACAJQACAJAAALQAAAKgCAJQgCAJgDAGQgEAHgHADQgGAEgIAAQgIAAgGgDgAgKgkQgEADgDAGQgDAGAAAHIgBAOQAAAKABAHQABAIADAGQADAEAEADQAEACAFABQAEgBADgBIAHgEIAEgHIACgIIACgJIABgLIgBgLIgCgKIgDgIQgCgEgCgCQgCgCgEgBIgHgBQgFgBgFAEg");
	this.shape_31.setTransform(71.2,11.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAXAvIgtAAIgBAAIgBgBIAAgBIAAgBIAAgCIAAgBIABgBIABAAIAUAAIAAhMIgTAMIgCABIgBAAIgBgBIAAgCIAAgCIAAgBIABgBIABgBIAWgOIABgBIAAAAIAAAAIACAAIACAAIABAAIAAABIAAABIAABUIASAAIACAAIAAABIABABIAAACIAAABIgBABIgBABIgBAAg");
	this.shape_32.setTransform(63.9,11.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgOAtQgGgDgEgGQgEgHgBgIQgBgJAAgMQAAgJABgJQABgJAEgHQAFgGAGgEQAGgDAHAAQAJAAAGADQAGADAEAGQADAGACAJQABAJABALQgBAKgBAJQgCAJgDAGQgEAHgHADQgGAEgIAAQgIAAgGgDgAgKgkQgEADgDAGQgDAGAAAHIgBAOQAAAKABAHQABAIADAGQACAEAFADQAEACAFABQAEgBADgBIAHgEIAEgHIADgIIABgJIABgLIgBgLIgCgKIgDgIQgCgEgCgCQgCgCgEgBIgHgBQgFgBgFAEg");
	this.shape_33.setTransform(56,11.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAXAvIgtAAIgBAAIgBgBIAAgBIAAgBIAAgCIAAgBIABgBIABAAIAUAAIAAhMIgUAMIgBABIgBAAIgBgBIAAgCIAAgCIAAgBIABgBIABgBIAWgOIABgBIAAAAIAAAAIACAAIABAAIACAAIAAABIAAABIAABUIASAAIACAAIAAABIABABIAAACIAAABIgBABIgBABIgBAAg");
	this.shape_34.setTransform(48.7,11.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgOAtQgGgDgDgGQgEgHgCgIQgCgJABgMQgBgJACgJQACgJAEgHQAEgGAGgEQAGgDAHAAQAJAAAGADQAGADADAGQAEAGACAJQABAJABALQgBAKgBAJQgCAJgEAGQgDAHgHADQgGAEgIAAQgIAAgGgDgAgKgkQgFADgCAGQgCAGgBAHIgBAOQgBAKACAHQABAIADAGQACAEAFADQAEACAFABQAEgBADgBIAHgEIAEgHIADgIIABgJIABgLIgBgLIgCgKIgDgIQgBgEgDgCQgDgCgDgBIgHgBQgGgBgEAEg");
	this.shape_35.setTransform(40.8,11.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAXAvIguAAIAAAAIgBgBIAAgBIAAgBIAAgCIAAgBIABgBIAAAAIAVAAIAAhMIgUAMIgBABIgBAAIgBgBIAAgCIAAgCIAAgBIABgBIABgBIAWgOIABgBIAAAAIAAAAIACAAIABAAIACAAIAAABIAAABIAABUIASAAIACAAIABABIAAABIAAACIAAABIAAABIgCABIgBAAg");
	this.shape_36.setTransform(33.5,11.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgOAtQgGgDgDgGQgFgHgBgIQgCgJABgMQgBgJACgJQABgJAFgHQAEgGAGgEQAGgDAIAAQAIAAAGADQAGADADAGQAFAGABAJQABAJAAALQAAAKgBAJQgBAJgFAGQgEAHgGADQgGAEgIAAQgIAAgGgDgAgKgkQgFADgCAGQgCAGgCAHIAAAOQgBAKACAHQABAIADAGQACAEAFADQAEACAFABQAEgBADgBIAHgEIAEgHIADgIIABgJIAAgLIAAgLIgCgKIgDgIQgBgEgDgCQgDgCgDgBIgHgBQgGgBgEAEg");
	this.shape_37.setTransform(25.6,11.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAXAvIguAAIAAAAIgBgBIAAgBIAAgBIAAgCIAAgBIAAgBIABAAIAVAAIAAhMIgUAMIgCABIAAAAIgBgBIAAgCIAAgCIAAgBIABgBIAAgBIAYgOIAAgBIAAAAIAAAAIABAAIACAAIACAAIAAABIAAABIAABUIASAAIACAAIABABIAAABIAAACIAAABIAAABIgBABIgCAAg");
	this.shape_38.setTransform(18.3,11.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAYAvIguAAIgBAAIgBgBIgBgBIAAgBIAAgCIABgBIABgBIABAAIAUAAIAAhMIgTAMIgCABIgCAAIAAgBIAAgCIAAgCIAAgBIABgBIABgBIAWgOIABgBIAAAAIAAAAIACAAIACAAIABAAIAAABIAAABIAABUIATAAIABAAIAAABIABABIAAACIAAABIgBABIgBABIAAAAg");
	this.shape_39.setTransform(10.7,11.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgOAtQgGgDgEgGQgEgHgBgIQgBgJAAgMQAAgJABgJQABgJAEgHQAFgGAGgEQAGgDAHAAQAJAAAGADQAGADAEAGQADAGACAJQACAJAAALQAAAKgCAJQgCAJgDAGQgEAHgHADQgGAEgIAAQgIAAgGgDgAgKgkQgEADgDAGQgDAGAAAHIgBAOQAAAKABAHQABAIADAGQADAEAEADQAEACAFABQAEgBADgBIAHgEIAEgHIACgIIACgJIABgLIgBgLIgCgKIgDgIQgCgEgCgCQgCgCgEgBIgHgBQgFgBgFAEg");
	this.shape_40.setTransform(2.8,11.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgOAtQgGgDgEgGQgDgHgCgIQgCgJAAgMQAAgJACgJQACgJADgHQAEgGAHgEQAGgDAHAAQAJAAAGADQAGADAEAGQAEAGABAJQABAJAAALQAAAKgBAJQgBAJgEAGQgFAHgGADQgGAEgIAAQgIAAgGgDgAgKgkQgEADgDAGQgDAGgBAHIgBAOQAAAKACAHQABAIADAGQADAEAEADQAEACAFABQAEgBAEgBIAGgEIAEgHIACgIIACgJIAAgLIAAgLIgCgKIgDgIQgCgEgCgCQgDgCgDgBIgHgBQgGgBgEAEg");
	this.shape_41.setTransform(306.8,11.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgOAtQgGgDgEgGQgEgHgBgIQgBgJAAgMQAAgJABgJQABgJAEgHQAFgGAGgEQAGgDAHAAQAJAAAGADQAGADADAGQAEAGACAJQABAJABALQgBAKgBAJQgCAJgEAGQgDAHgHADQgGAEgIAAQgIAAgGgDgAgKgkQgEADgDAGQgDAGAAAHIgBAOQAAAKABAHQABAIADAGQACAEAFADQAEACAFABQAEgBADgBIAHgEIAEgHIADgIIABgJIABgLIgBgLIgCgKIgDgIQgCgEgCgCQgCgCgEgBIgHgBQgFgBgFAEg");
	this.shape_42.setTransform(261.2,11.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAXAvIgtAAIgBAAIgBgBIAAgBIAAgBIAAgCIAAgBIABgBIABAAIAUAAIAAhMIgTAMIgCABIgBAAIgBgBIAAgCIAAgCIAAgBIABgBIABgBIAWgOIABgBIAAAAIAAAAIACAAIACAAIABAAIAAABIAAABIAABUIASAAIACAAIAAABIABABIAAACIAAABIgBABIgBABIgBAAg");
	this.shape_43.setTransform(253.9,11.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgOAtQgGgDgDgGQgFgHgBgIQgBgJgBgMQABgJABgJQABgJAFgHQAEgGAGgEQAGgDAIAAQAIAAAGADQAGADADAGQAFAGABAJQACAJgBALQABAKgCAJQgBAJgFAGQgEAHgGADQgGAEgIAAQgIAAgGgDgAgKgkQgFADgCAGQgCAGgCAHIAAAOQAAAKABAHQABAIADAGQADAEAEADQAEACAFABQAEgBADgBIAHgEIAEgHIADgIIABgJIAAgLIAAgLIgCgKIgDgIQgBgEgDgCQgDgCgDgBIgHgBQgFgBgFAEg");
	this.shape_44.setTransform(215.6,11.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAXAvIgtAAIgBAAIgBgBIAAgBIAAgBIAAgCIAAgBIABgBIABAAIAUAAIAAhMIgTAMIgCABIgBAAIgBgBIAAgCIAAgCIAAgBIABgBIABgBIAWgOIABgBIAAAAIAAAAIACAAIACAAIABAAIAAABIAAABIAABUIASAAIACAAIAAABIABABIAAACIAAABIgBABIgBABIgBAAg");
	this.shape_45.setTransform(200.7,11.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgOAtQgGgDgEgGQgDgHgCgIQgBgJgBgMQABgJABgJQACgJADgHQAEgGAHgEQAGgDAIAAQAIAAAGADQAGADAEAGQAEAGABAJQABAJAAALQAAAKgBAJQgBAJgEAGQgFAHgGADQgGAEgIAAQgIAAgGgDgAgKgkQgFADgCAGQgDAGgBAHIgBAOQABAKABAHQABAIADAGQADAEAEADQAEACAFABQAEgBAEgBIAGgEIAEgHIACgIIACgJIAAgLIAAgLIgCgKIgDgIQgCgEgCgCQgDgCgDgBIgHgBQgFgBgFAEg");
	this.shape_46.setTransform(185.2,11.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAXAvIgtAAIgBAAIgBgBIAAgBIAAgBIAAgCIAAgBIABgBIABAAIAUAAIAAhMIgTAMIgCABIgBAAIgBgBIAAgCIAAgCIAAgBIABgBIABgBIAWgOIABgBIAAAAIAAAAIACAAIACAAIABAAIAAABIAAABIAABUIASAAIACAAIAAABIABABIAAACIAAABIgBABIgBABIgBAAg");
	this.shape_47.setTransform(132.3,11.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgOAtQgGgDgDgGQgEgHgCgIQgCgJABgMQgBgJACgJQACgJAEgHQAEgGAGgEQAGgDAHAAQAJAAAGADQAGADADAGQAEAGACAJQABAJABALQgBAKgBAJQgCAJgEAGQgDAHgHADQgGAEgIAAQgIAAgGgDgAgKgkQgFADgCAGQgCAGgBAHIgBAOQgBAKACAHQABAIADAGQACAEAFADQAEACAFABQAEgBADgBIAHgEIAEgHIADgIIABgJIABgLIgBgLIgCgKIgDgIQgBgEgDgCQgDgCgDgBIgHgBQgGgBgEAEg");
	this.shape_48.setTransform(109.2,11.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgOAtQgGgDgDgGQgFgHgBgIQgBgJgBgMQABgJABgJQABgJAFgHQAEgGAGgEQAGgDAIAAQAIAAAGADQAGADADAGQAFAGABAJQACAJgBALQABAKgCAJQgBAJgFAGQgEAHgGADQgGAEgIAAQgIAAgGgDgAgKgkQgFADgCAGQgCAGgCAHIAAAOQAAAKABAHQABAIADAGQADAEAEADQAEACAFABQAEgBADgBIAHgEIAEgHIADgIIABgJIAAgLIAAgLIgCgKIgDgIQgBgEgDgCQgDgCgDgBIgHgBQgFgBgFAEg");
	this.shape_49.setTransform(78.8,11.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgOAtQgGgDgDgGQgEgHgCgIQgBgJgBgMQABgJABgJQACgJAEgHQADgGAHgEQAGgDAIAAQAIAAAGADQAGADADAGQAEAGACAJQACAJgBALQABAKgCAJQgCAJgEAGQgEAHgGADQgGAEgIAAQgIAAgGgDgAgKgkQgEADgDAGQgDAGgBAHIgBAOQABAKABAHQABAIADAGQADAEAEADQAEACAFABQAEgBAEgBIAGgEIAEgHIACgIIACgJIAAgLIAAgLIgCgKIgDgIQgBgEgDgCQgDgCgDgBIgHgBQgFgBgFAEg");
	this.shape_50.setTransform(63.6,11.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAYAvIguAAIgBAAIgBgBIgBgBIAAgBIAAgCIABgBIAAgBIACAAIAVAAIAAhMIgUAMIgDABIgBAAIAAgBIAAgCIAAgCIAAgBIABgBIAAgBIAXgOIABgBIAAAAIAAAAIABAAIADAAIABAAIABABIAAABIAABUIASAAIABAAIAAABIABABIAAACIAAABIgBABIAAABIgBAAg");
	this.shape_51.setTransform(25.9,11.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAXAvIguAAIAAAAIgBgBIAAgBIAAgBIAAgCIAAgBIAAgBIABAAIAVAAIAAhMIgUAMIgCABIAAAAIgBgBIAAgCIAAgCIAAgBIABgBIAAgBIAYgOIAAgBIAAAAIAAAAIABAAIACAAIACAAIAAABIAAABIAABUIASAAIACAAIABABIAAABIAAACIAAABIAAABIgBABIgCAAg");
	this.shape_52.setTransform(18.3,11.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgOAtQgGgDgEgGQgEgHgBgIQgBgJAAgMQAAgJABgJQABgJAEgHQAFgGAGgEQAGgDAHAAQAJAAAGADQAGADAEAGQADAGACAJQACAJAAALQAAAKgCAJQgCAJgDAGQgEAHgHADQgGAEgIAAQgIAAgGgDgAgKgkQgEADgDAGQgDAGAAAHIgBAOQAAAKABAHQABAIADAGQADAEAEADQAEACAFABQAEgBADgBIAHgEIAEgHIACgIIACgJIABgLIgBgLIgCgKIgDgIQgCgEgCgCQgCgCgEgBIgHgBQgFgBgFAEg");
	this.shape_53.setTransform(2.8,11.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgOAtQgGgDgDgGQgFgHgBgIQgBgJAAgMQAAgJABgJQABgJAFgHQAEgGAGgEQAGgDAIAAQAIAAAGADQAGADADAGQAFAGABAJQACAJgBALQABAKgCAJQgBAJgFAGQgEAHgGADQgGAEgIAAQgIAAgGgDgAgKgkQgFADgCAGQgCAGgCAHIgBAOQABAKABAHQABAIADAGQADAEAEADQAEACAFABQAEgBADgBIAHgEIAEgHIADgIIABgJIAAgLIAAgLIgCgKIgDgIQgBgEgDgCQgDgCgDgBIgHgBQgFgBgFAEg");
	this.shape_54.setTransform(147.2,11.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgOAtQgGgDgEgGQgEgHgBgIQgBgJAAgMQAAgJABgJQABgJAEgHQAFgGAGgEQAGgDAHAAQAJAAAGADQAGADAEAGQADAGACAJQABAJABALQgBAKgBAJQgCAJgDAGQgEAHgHADQgGAEgIAAQgIAAgGgDgAgKgkQgEADgDAGQgDAGAAAHIgBAOQAAAKABAHQABAIADAGQACAEAFADQAEACAFABQAEgBADgBIAHgEIAEgHIADgIIABgJIABgLIgBgLIgCgKIgDgIQgCgEgCgCQgCgCgEgBIgHgBQgFgBgFAEg");
	this.shape_55.setTransform(56,11.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAXAvIguAAIAAAAIgBgBIAAgBIAAgBIAAgCIAAgBIABgBIAAAAIAVAAIAAhMIgUAMIgBABIgBAAIgBgBIAAgCIAAgCIAAgBIABgBIABgBIAWgOIABgBIAAAAIAAAAIACAAIABAAIACAAIAAABIAAABIAABUIASAAIACAAIABABIAAABIAAACIAAABIAAABIgCABIgBAAg");
	this.shape_56.setTransform(33.5,11.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAYAvIguAAIgBAAIgBgBIgBgBIAAgBIAAgCIABgBIAAgBIACAAIAVAAIAAhMIgUAMIgDABIgBAAIAAgBIAAgCIAAgCIAAgBIABgBIAAgBIAXgOIABgBIAAAAIAAAAIABAAIADAAIABAAIABABIAAABIAABUIASAAIABAAIAAABIABABIAAACIAAABIgBABIAAABIgBAAg");
	this.shape_57.setTransform(25.9,11.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgOAtQgGgDgEgGQgEgHgBgIQgCgJAAgMQAAgJACgJQABgJAEgHQAFgGAGgEQAGgDAHAAQAJAAAGADQAGADAEAGQAEAGABAJQACAJAAALQAAAKgCAJQgBAJgEAGQgFAHgGADQgGAEgIAAQgIAAgGgDgAgKgkQgEADgDAGQgCAGgBAHIgCAOQAAAKACAHQABAIADAGQADAEAEADQAEACAFABQAEgBAEgBIAGgEIAEgHIACgIIACgJIABgLIgBgLIgCgKIgDgIQgCgEgCgCQgCgCgEgBIgHgBQgFgBgFAEg");
	this.shape_58.setTransform(18,11.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgOAtQgGgDgDgGQgFgHgBgIQgBgJgBgMQABgJABgJQABgJAFgHQAEgGAGgEQAGgDAIAAQAIAAAGADQAGADADAGQAFAGABAJQACAJgBALQABAKgCAJQgBAJgFAGQgEAHgGADQgGAEgIAAQgIAAgGgDgAgKgkQgFADgCAGQgCAGgCAHIgBAOQABAKABAHQABAIADAGQADAEAEADQAEACAFABQAEgBADgBIAHgEIAEgHIADgIIABgJIAAgLIAAgLIgCgKIgDgIQgBgEgDgCQgDgCgDgBIgHgBQgFgBgFAEg");
	this.shape_59.setTransform(10.4,11.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAYAvIgvAAIAAAAIgBgBIgBgBIAAgBIAAgCIABgBIAAgBIABAAIAWAAIAAhMIgVAMIgCABIgBAAIAAgBIAAgCIAAgCIAAgBIABgBIAAgBIAYgOIAAgBIAAAAIAAAAIABAAIACAAIACAAIABABIAAABIAABUIASAAIABAAIABABIAAABIAAACIAAABIAAABIgBABIgBAAg");
	this.shape_60.setTransform(3.1,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40,p:{x:2.8}},{t:this.shape_39},{t:this.shape_38,p:{x:18.3}},{t:this.shape_37,p:{x:25.6}},{t:this.shape_36,p:{x:33.5}},{t:this.shape_35,p:{x:40.8}},{t:this.shape_34},{t:this.shape_33,p:{x:56}},{t:this.shape_32,p:{x:63.9}},{t:this.shape_31,p:{x:71.2}},{t:this.shape_30,p:{x:79.1}},{t:this.shape_29,p:{x:86.7}},{t:this.shape_28,p:{x:94}},{t:this.shape_27,p:{x:101.6}},{t:this.shape_26,p:{x:109.5}},{t:this.shape_25,p:{x:116.8}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:147.5}},{t:this.shape_20,p:{x:154.8}},{t:this.shape_19,p:{x:162.7}},{t:this.shape_18,p:{x:170}},{t:this.shape_17,p:{x:177.6}},{t:this.shape_16,p:{x:185.5}},{t:this.shape_15,p:{x:193.1}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:223.2}},{t:this.shape_10,p:{x:231.1}},{t:this.shape_9},{t:this.shape_8,p:{x:246.3}},{t:this.shape_7},{t:this.shape_6,p:{x:261.5}},{t:this.shape_5},{t:this.shape_4,p:{x:276.7}},{t:this.shape_3,p:{x:284}},{t:this.shape_2,p:{x:291.9}},{t:this.shape_1},{t:this.shape,p:{x:307.1}}]}).to({state:[{t:this.shape_53},{t:this.shape_3,p:{x:10.4}},{t:this.shape_52},{t:this.shape_51,p:{x:25.9}},{t:this.shape_27,p:{x:33.2}},{t:this.shape_8,p:{x:41.1}},{t:this.shape_25,p:{x:48.4}},{t:this.shape_15,p:{x:56.3}},{t:this.shape_50},{t:this.shape_6,p:{x:71.5}},{t:this.shape_49},{t:this.shape_29,p:{x:86.7}},{t:this.shape_10,p:{x:94.3}},{t:this.shape_18,p:{x:101.6}},{t:this.shape_48},{t:this.shape_16,p:{x:117.1}},{t:this.shape_33,p:{x:124.4}},{t:this.shape_47},{t:this.shape_40,p:{x:139.6}},{t:this.shape_30,p:{x:147.5}},{t:this.shape_2,p:{x:155.1}},{t:this.shape_37,p:{x:162.4}},{t:this.shape_36,p:{x:170.3}},{t:this.shape_35,p:{x:177.6}},{t:this.shape_46},{t:this.shape_4,p:{x:193.1}},{t:this.shape_45},{t:this.shape_13},{t:this.shape_44},{t:this.shape_38,p:{x:223.5}},{t:this.shape_28,p:{x:230.8}},{t:this.shape,p:{x:238.7}},{t:this.shape_17,p:{x:246}},{t:this.shape_43,p:{x:253.9}},{t:this.shape_42},{t:this.shape_32,p:{x:269.1}},{t:this.shape_31,p:{x:276.4}},{t:this.shape_21,p:{x:284.3}},{t:this.shape_11,p:{x:291.6}},{t:this.shape_19,p:{x:299.5}},{t:this.shape_41}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_35,p:{x:40.8}},{t:this.shape_16,p:{x:48.7}},{t:this.shape_55},{t:this.shape_43,p:{x:63.9}},{t:this.shape_31,p:{x:71.2}},{t:this.shape_21,p:{x:79.1}},{t:this.shape_20,p:{x:86.4}},{t:this.shape_51,p:{x:94.3}},{t:this.shape_36,p:{x:101.9}},{t:this.shape_17,p:{x:109.2}},{t:this.shape_25,p:{x:116.8}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_54},{t:this.shape_29,p:{x:155.1}},{t:this.shape_19,p:{x:162.7}},{t:this.shape_18,p:{x:170}},{t:this.shape_26,p:{x:177.9}},{t:this.shape_46},{t:this.shape_33,p:{x:192.8}},{t:this.shape_32,p:{x:200.7}},{t:this.shape_15,p:{x:208.3}},{t:this.shape_44},{t:this.shape_11,p:{x:223.2}},{t:this.shape_10,p:{x:231.1}},{t:this.shape_9},{t:this.shape_8,p:{x:246.3}},{t:this.shape_7},{t:this.shape_6,p:{x:261.5}},{t:this.shape_5},{t:this.shape_4,p:{x:276.7}},{t:this.shape_3,p:{x:284}},{t:this.shape_2,p:{x:291.9}},{t:this.shape_1},{t:this.shape,p:{x:307.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,0,315.8,22.4);


(lib.NOV_Logo_RGB_Fai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// NOV_Logo_RGB_F.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#75787B").s().p("ADuErQBDg1AmhNQAohQAAhZQAAhYgohQQgmhMhDg2IEEAAIAADgICHjgIDoAAIluJVgAnzErIiHjfIAADfIjmAAIAApVIDoAAICHDgIAAjgIEEAAQhEA2gmBMQgnBQAABYQAABZAnBQQAmBNBEA1g");
	this.shape.setTransform(86.6,32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA291C").s().p("AiJEgQg+gegtg2QBMAJB2gkQBZgbBWhCQBKg4A1hEIgEgTQg7A7hMAvQhUA1hPAUQh5AehHgVQgtgMgSgfIgCgDQgLgqAAgpQAAiDBehdQBdheCDAAQCEAABeBeQBdBdAACDQAACEhdBeQheBdiEAAQhIAAhBgfg");
	this.shape_1.setTransform(86.6,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173.2,64);


(lib.maxmin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgXAgIgBAAIAAgBIAAgBIAqg8IABgBIAAgBIACAAIABAAIACAAIABABIAAABIAAAAIgqA9IgBABIgBAAIgBAAIgCABIgBgBgAAMAfIgEgDIgDgGIAAgHIAAgHIADgEQABgDADgBQADAAADAAQAEAAADAAIAEAEIACAEIABAHIgBAHQgBADgCACQgBACgDACIgGAAIgGAAgAAPAEIgCADIgBADIgBAFIABAGIABADIACACIADAAIAEgBIACgCIABgDIAAgFIgBgEIgBgEIgCgCIgDgBIgDAAgAgXAAIgFgCIgCgGIgBgGIABgHQABgDACgCQABgCADgCQACgBAEAAQAEAAACABQADACACACIACAFIAAAHIAAAGIgDAFIgEADIgGAAIgGAAgAgUgZIgCACIgBADIgBAGIABAFIABAEIACABIADABIADgBIACgCIABgEIABgEIgBgFIgBgDIgCgDIgDgBIgDABg");
	this.shape.setTransform(12.8,-44.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgJAeQgEgDgDgEQgCgEgBgGIgBgNIABgMIAEgKQACgFAFgCQAEgCAEAAQAGAAAEACQAEACADAFQACADABAHIABAMIgBANQgBAFgCAFQgDAEgEADQgFACgFAAQgFAAgEgCgAgFgWQgDACgBADIgCAIIgBAJIABALIACAIQACADACABQADACACAAIAEgBQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAIACgFIACgEIABgHIAAgGIAAgGIgBgHIgCgFIgDgDIgDgCIgEgBQgCAAgDACg");
	this.shape_1.setTransform(6.7,-44.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgIAfIgEgBIgEgBIgCgBIAAgBIgBgBIAAAAIAAgCIAAgBIABgCIAAAAIABgBIABABIADACIAEABIAHABIAEgBIAEgDIADgEIACgGIgCgFIgDgEQgBgCgDAAIgFAAIgGAAIgEAAIgCAAIgBgCIAAgZIACgDIACgBIAaAAIAAAAIABABIAAACIAAABIAAACIgBABIgVAAIAAASIAEAAIADAAQAEAAADABQAFABACADIAEADQACAEAAAEQgBAFgCAEQgBAEgDADIgHAEQgFACgDAAIgGgBg");
	this.shape_2.setTransform(1.7,-44.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgJADIgBgBIAAgCIAAgBIABgBIATAAIABAAIAAABIAAABIAAAAIAAACIgBABg");
	this.shape_3.setTransform(-2.4,-43.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgXAgIgBAAIAAgBIAAgBIAqg8IABgBIAAgBIACAAIABAAIACAAIABABIAAABIAAAAIgqA9IgBABIgBAAIgBAAIgCABIgBgBgAAMAfIgEgDIgDgGIAAgHIAAgHIADgEQABgDADgBQADAAADAAQAEAAADAAIAEAEIACAEIABAHIgBAHQgBADgCACQgBACgDACIgGAAIgGAAgAAPAEIgCADIgBADIgBAFIABAGIABADIACACIADAAIAEgBIACgCIABgDIAAgFIgBgEIgBgEIgCgCIgDgBIgDAAgAgXAAIgFgCIgCgGIgBgGIABgHQABgDACgCQABgCADgCQACgBAEAAQAEAAACABQADACACACIACAFIAAAHIAAAGIgDAFIgEADIgGAAIgGAAgAgUgZIgCACIgBADIgBAGIABAFIABAEIACABIADABIADgBIACgCIABgEIABgEIgBgFIgBgDIgCgDIgDgBIgDABg");
	this.shape_4.setTransform(100.6,-44.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgJAeQgEgDgDgEQgCgEgBgGIgBgNIABgMIAEgKQACgFAFgCQAEgCAEAAQAGAAAEACQAEACADAFQACADABAHIABAMIgBANQgBAFgCAFQgDAEgEADQgFACgFAAQgFAAgEgCgAgFgWQgDACgBADIgCAIIgBAJIABALIACAIQACADACABQADACACAAIAEgBQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAIACgFIACgEIABgHIAAgGIAAgGIgBgHIgCgFIgDgDIgDgCIgEgBQgCAAgDACg");
	this.shape_5.setTransform(94.5,-44.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgIAfIgEgBIgEgBIgCgBIAAgBIgBgBIAAAAIAAgCIAAgBIABgCIAAAAIABgBIABABIADACIAEABIAHABIAEgBIAEgDIADgEIACgGIgCgFIgDgEQgBgCgDAAIgFAAIgGAAIgEAAIgCAAIgBgCIAAgZIACgDIACgBIAaAAIABAAIAAABIAAACIAAABIAAACIgBABIgVAAIAAASIAEAAIADAAQAEAAADABQAFABACADIAEADQACAEAAAEQgBAFgCAEQgBAEgDADIgIAEQgEACgDAAIgGgBg");
	this.shape_6.setTransform(89.4,-44.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgXAgIgBAAIAAAAIAAgCIAqg8IABgBIAAgBIACAAIABAAIACAAIABABIAAABIAAABIgqA9IgBAAIgBAAIgBAAIgCABIgBgBgAAMAfIgEgEIgDgFIAAgHIAAgHIADgEQABgDADgBQADAAADAAQAEAAADAAIAEAEIACAEIABAHIgBAHQgBADgCACQgBADgDABIgGABIgGgBgAAPAFIgCACIgBADIgBAFIABAGIABADIACACIADAAIAEgBIACgCIABgDIAAgFIgBgEIgBgEIgCgCIgDgBIgDABgAgXAAIgFgCIgCgGIgBgGIABgHQABgDACgCQABgCADgBQACgCAEAAQAEAAACACQADABACACIACAFIAAAHIAAAGIgDAGIgEACIgGAAIgGAAgAgUgZIgCACIgBADIgBAGIABAFIABAEIACABIADABIADgBIACgCIABgEIABgEIgBgFIgBgDIgCgDIgDgBIgDABg");
	this.shape_7.setTransform(47.9,-53.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgJAeQgEgDgDgEQgCgEgBgFIgBgOIABgLIAEgLQACgEAFgDQAEgCAEAAQAGAAAEACQAEACADAFQACADABAHIABAMIgBANQgBAFgCAFQgDAEgEADQgFACgFAAQgFAAgEgCgAgFgWQgDACgBADIgCAIIgBAJIABALIACAIQACADACABQADACACAAIAEgBQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAIACgFIACgEIABgHIAAgGIAAgHIgBgGIgCgFIgDgDIgDgCIgEgBQgCAAgDACg");
	this.shape_8.setTransform(41.8,-53.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AgXAgIgBAAIAAgBIAAgBIAqg9IABgBIAAAAIACAAIABAAIACAAIABAAIAAABIAAABIgqA9IgBABIgBAAIgBAAIgCABIgBgBgAAMAeIgEgCIgDgGIAAgHIAAgGIADgGQABgCADgBQADAAADAAQAEAAADAAIAEADIACAGIABAGIgBAHQgBADgCACQgBACgDABIgGABIgGgBgAAPAEIgCADIgBADIgBAFIABAFIABAEIACACIADABIAEgBIACgDIABgDIAAgFIgBgEIgBgEIgCgCIgDgBIgDAAgAgXAAIgFgCIgCgFIgBgHIABgHQABgDACgCQABgDADgBQACgBAEAAQAEAAACABQADABACADIACAFIAAAHIAAAHIgDAEIgEADIgGAAIgGAAgAgUgZIgCACIgBADIgBAGIABAFIABAEIACABIADAAIADAAIACgCIABgEIABgEIgBgFIgBgEIgCgCIgDAAIgDAAg");
	this.shape_9.setTransform(-19.5,-23.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgJAeQgEgDgDgEQgCgDgBgHIgBgNIABgMIAEgKQACgFAFgCQAEgCAEAAQAGAAAEACQAEACADAEQACAFABAFIABANIgBAMQgBAGgCAFQgDAEgEACQgFADgFAAQgFAAgEgCgAgFgXQgDADgBADIgCAIIgBAJIABALIACAIQACADACABQADACACAAIAEgBQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBIACgDIACgGIABgGIAAgGIAAgGIgBgIIgCgEIgDgEIgDgBIgEgBQgCAAgDABg");
	this.shape_10.setTransform(-25.6,-23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgJAeQgEgDgDgEQgCgDgBgHIgBgNIABgMIAEgKQACgFAFgCQAEgCAEAAQAGAAAEACQAEACADAEQACAFABAFIABANIgBAMQgBAGgCAFQgDAEgEACQgFADgFAAQgFAAgEgCgAgFgXQgDADgBADIgCAIIgBAJIABALIACAIQACADACABQADACACAAIAEgBQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBIACgDIACgGIABgGIAAgGIAAgGIgBgIIgCgEIgDgEIgDgBIgEgBQgCAAgDABg");
	this.shape_11.setTransform(-30.6,-23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AAQAfIgfAAIAAAAIgBAAIAAgCIgBgBIABgCIAAgBIABAAIAAAAIANAAIAAgvIgMAIIgBAAIgBAAIgBgBIAAgCIAAgBIABgBIAAgBIABAAIAOgKIAAAAIABAAIAAAAIABAAIACAAIABAAIAAAAIAAABIAAA2IAMAAIAAAAIACAAIAAABIAAACIAAABIgBACIgBAAg");
	this.shape_12.setTransform(-35.5,-23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgJADIgBgBIAAgCIAAgBIABgBIATAAIABAAIAAABIAAABIAAAAIAAACIgBABg");
	this.shape_13.setTransform(-39.7,-22.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AgXAgIgBAAIAAgBIAAgBIAqg9IABgBIAAAAIACAAIABAAIACAAIABAAIAAABIAAABIgqA9IgBABIgBAAIgBAAIgCABIgBgBgAAMAeIgEgCIgDgGIAAgHIAAgGIADgGQABgCADgBQADAAADAAQAEAAADAAIAEADIACAGIABAGIgBAHQgBADgCACQgBACgDABIgGABIgGgBgAAPAEIgCADIgBADIgBAFIABAFIABAEIACACIADABIAEgBIACgDIABgDIAAgFIgBgEIgBgEIgCgCIgDgBIgDAAgAgXAAIgFgCIgCgFIgBgHIABgHQABgDACgCQABgDADgBQACgBAEAAQAEAAACABQADABACADIACAFIAAAHIAAAHIgDAEIgEADIgGAAIgGAAgAgUgZIgCACIgBADIgBAGIABAFIABAEIACABIADAAIADAAIACgCIABgEIABgEIgBgFIgBgEIgCgCIgDAAIgDAAg");
	this.shape_14.setTransform(138.5,-23.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgJAeQgEgDgDgEQgCgDgBgHIgBgNIABgMIAEgKQACgFAFgCQAEgCAEAAQAGAAAEACQAEACADAEQACAFABAFIABANIgBAMQgBAGgCAFQgDAEgEACQgFADgFAAQgFAAgEgCgAgFgXQgDADgBADIgCAIIgBAJIABALIACAIQACADACABQADACACAAIAEgBQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBIACgDIACgGIABgGIAAgGIAAgGIgBgIIgCgEIgDgEIgDgBIgEgBQgCAAgDABg");
	this.shape_15.setTransform(132.4,-23.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgJAeQgEgDgDgEQgCgDgBgHIgBgNIABgMIAEgKQACgFAFgCQAEgCAEAAQAGAAAEACQAEACADAEQACAFABAFIABANIgBAMQgBAGgCAFQgDAEgEACQgFADgFAAQgFAAgEgCgAgFgXQgDADgBADIgCAIIgBAJIABALIACAIQACADACABQADACACAAIAEgBQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBIACgDIACgGIABgGIAAgGIAAgGIgBgIIgCgEIgDgEIgDgBIgEgBQgCAAgDABg");
	this.shape_16.setTransform(127.3,-23.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AAQAfIgfAAIAAAAIgBAAIAAgCIgBgBIABgCIAAgBIABAAIAAAAIANAAIAAgvIgMAIIgBAAIgBAAIgBgBIAAgCIAAgBIABgBIAAgBIABAAIAOgKIAAAAIABAAIAAAAIABAAIACAAIABAAIAAAAIAAABIAAA2IAMAAIAAAAIACAAIAAABIAAACIAAABIgBACIgBAAg");
	this.shape_17.setTransform(122.5,-23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#DA291C","#84BD00"],[0,1],-74.8,3.3,73.4,3.3).s().p("AFmEIQiXiXjTAAQjWAAiXCXQgUAUgSAWIkUktQAWgYAYgZQEHkFFzAAQFwAAEGEFQAfAfAaAeIkgEhQgSgWgUgUg");
	this.shape_18.setTransform(52.1,-11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.2,-61.6,187.5,80.9);


(lib.lift = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHCBIgFgBIgDgCIAAgCIAAj0IAAgDIADgCIAEgBIAHAAIAHAAIAEABIACACIABADIAAAYIAPgPQAIgGAHgDQAIgFAIgCQAGgCAIAAQAUAAANAIQAOAHAIANQAJANADARQAEARAAATQAAAXgFARQgFASgJANQgKANgOAHQgOAGgTAAQgGAAgGgBIgNgFQgHgDgGgFIgNgMIAABYIgBACIgCACIgFABIgIABIgIgBgAgHhjQgGACgGAEQgHAEgHAGQgHAHgHAJIAABEQANARAMAIQAMAJALAAQANAAAIgGQAJgGAFgKQAGgKACgKQADgMAAgMQAAgOgCgMQgCgNgFgJQgFgKgJgGQgIgGgNAAQgEAAgGACg");
	this.shape.setTransform(69.7,64.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmB6QgSgGgMgLQgMgMgHgSQgHgSAAgXIAAibIABgDIADgBIAFgCIAIAAIAIAAIAGACIACABIABADIAACXQAAARAEANQAEAOAJAIQAIAJALAEQAMAFAMAAQAOAAAMgFQALgEAIgIQAIgJAEgNQAEgMAAgRIAAiZIABgDIADgBIAFgCIAIAAIAIAAIAFACIADABIABADIAACYQAAAXgHATQgHASgMAMQgNANgSAGQgSAGgUAAQgVAAgRgGg");
	this.shape_1.setTransform(45.8,57.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A6093D").s().p("AmnGoQiviwAAj4QAAj3CvivQCwiwD3gBQD4ABCwCwQCvCvAAD3QAAD4ivCwQiwCvj4AAQj3AAiwivg");
	this.shape_2.setTransform(55.4,60);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#930836").s().p("AmnGoQiviwAAj4QAAj3CvivQCwiwD3gBQD4ABCwCwQCvCvAAD3QAAD4ivCwQiwCvj4AAQj3AAiwivg");
	this.shape_3.setTransform(55.4,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,0,120,120);


(lib.king_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.king();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,429,551);


(lib.j10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4FFFF").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape.setTransform(7.3,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4FFFF").s().p("AAgA/Ig+AAIgBAAIgBgBIgBgCIAAgCIAAgCIABgCIABgBIABAAIAcAAIAAhlIgbAQIgCABIgCAAIgBgCIAAgDIAAgCIABgBIAAgCIACgBIAdgTIABgBIABAAIAAAAIACAAIACAAIACAAIABABIABACIAABwIAYAAIABAAIABABIABACIAAACIAAACIgBACIgBABIgBAAg");
	this.shape_1.setTransform(7.6,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4FFFF").s().p("AggBAIgCgBIgCAAIAAgCIgBgDIAAgCIABgCIABgBIABgCIAagcIANgSIAJgMQADgHABgFIABgKQAAgEgBgFQgCgEgDgDQgDgDgFgCQgDgCgFAAQgFAAgFABIgJAEIgGAEIgDACIgBgBIgBAAIgBgCIAAgCIAAgCIAAgCIABgBIACgBIADgDIAHgEIAJgCIAKgBQAHAAAHACQAHADADAEQAFAFADAGQABAFAAAHIgBAMQgBAGgDAHIgKAOQgGAIgKALIgWAZIA4AAIACAAIABABIABACIAAACIAAADIgBABIgBABIgCABg");
	this.shape_2.setTransform(7.3,14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4FFFF").s().p("AgOA/IgKgCIgHgDIgEgCIgBgCIAAgBIgBgCIAAgCIABgEIACgBIADABIAHAEIAKADQAGACAGAAQAFAAAGgCQAFgCAEgDQADgDACgFQACgFAAgFQAAgGgCgFQgDgEgEgEQgFgDgGgCQgFgCgHAAIgNAAIgBAAIgBgBIgBgCIAAAAIAAgCIABgCIABgBIABAAIALAAQAHAAAEgCQAFgCAEgDQAEgEACgFQACgFAAgGIgBgIIgEgHQgDgDgEgBQgFgCgDAAQgGAAgFACIgJAEIgGAEIgDABIgBAAIgBgBIgBgBIAAgDIAAgCIABgBIAAgCIACgBIADgDIAHgDIAJgDIALgBQAGAAAHACQAGACAEAFQAFAEACAFQACAGAAAGQAAAGgCAGIgFAJQgDAEgEADQgFACgGABIAAABQAHAAAFABQAGACAEAEQAEAEACAGQADAFAAAGQAAAIgDAHQgDAHgFAFQgFAFgIADQgIACgJAAIgLgBg");
	this.shape_3.setTransform(7.1,14.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4FFFF").s().p("AASA/IgCAAIgCAAIgBgBIAAgBIAAgdIg1AAIgBAAIgBgBIgBgBIAAgDIAAgCIAAgCIABgCIABgCIAvhOIABgCIACgBIACAAIAEAAIAEAAIADABIACAAIABACIAABRIAQAAIADABIAAAEIAAAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgQAAIAAAdIAAABIgBABIgDAAIgDAAgAgfAWIAsAAIAAhJIgBAAg");
	this.shape_4.setTransform(7.2,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4FFFF").s().p("AgQA/IgJgDIgIgCIgCgBIgBgBIgBgCIAAgCIAAgCIAAgCIABgBIAAgBIABgBIADACIAGACIAJADQAFABAHAAQAFAAAHgCQAFgBAFgEQAEgDADgGQACgGAAgIQAAgHgCgFQgCgFgEgDQgFgDgGgBQgHgCgHAAIgKABIgIABIgEgBIgBgFIAAgyQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIAzAAIABABIACABIAAACIABACIgBADQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIguAAIAAAnIAHAAIAJAAQAJAAAJACQAHADAGAFQAFACADAHQADAHgBAIQAAAJgCAJQgEAHgGAFQgGAGgJADQgIADgIAAIgLgBg");
	this.shape_5.setTransform(7.1,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F4FFFF").s().p("AgNA/QgGgCgFgEIgGgJQgEgFgCgHIgCgOIgBgSIABgPQABgIACgIIAHgOQADgHAGgFQAGgFAIgCQAGgDAKAAIAHAAIAHABIAFACIADACIABABIAAABIAAABIAAACIAAACIAAABIAAABIgBAAIgDAAIgFgCIgHgBIgJgBQgJAAgGAEQgGAEgFAHQgFAHgCAJQgCAJgBAKIAHgDIAHgDIAJgCIAHgBQAKAAAIADQAHADAEAFQAFADABAHQACAGAAAIQAAAHgDAIQgBAHgGAGQgFAGgIAEQgIADgJAAQgHAAgGgBgAgFgBIgIABIgHACIgHAEQAAANACAKQACAJAEAGQAEAFAFADQAFACAFAAQAHAAAFgCQAGgDADgFQADgEACgGIABgKQAAgGgBgGQgBgFgDgDQgDgEgFAAQgFgCgIAAIgGABg");
	this.shape_6.setTransform(7.4,14.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F4FFFF").s().p("AgQA/IgCAAIgCgBIgBgBIABgDIAvhtIg/AAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgEIABgCIAAgBIABgBIABgBIBHAAIACABIACABIABABIAAACIAAADIAAACIgBACIgBACIguBsIgBACIgBABIgCAAIgEAAg");
	this.shape_7.setTransform(7.3,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F4FFFF").s().p("AgQA+QgHgCgGgDQgFgEgDgGQgDgGAAgHQAAgHACgFQADgFAEgEIAJgIIANgFIgMgHIgIgHIgEgJQgCgEAAgGQAAgGACgFQACgGAFgEQAEgEAIgDQAHgCAIAAQAIAAAHACQAHACAFAEQAEAEACAFQACAFAAAGQAAAFgCAFIgEAJIgJAIQgEAEgHADIANAFIAKAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgFAEgJACQgHACgJAAQgIAAgIgCgAgMAKIgJAGQgDAEgBAEQgDAEAAAEQAAALAIAGQAHAFANAAQAOAAAHgFQAIgGAAgKQAAgFgCgEQgCgEgEgEQgEgDgFgDIgMgHIgMAHgAgQgwQgHAFABAKQgBAEACADQABAEAEADIAHAHIAKAGQAKgGAHgGQAGgHAAgJQAAgEgCgEQgCgDgCgDQgDgDgFgBQgEgBgGAAQgKAAgGAFg");
	this.shape_8.setTransform(7.3,14.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4FFFF").s().p("AgUBAIgHgBIgEgCIgEgCIgBgCIAAgDIAAgCIAAgCIABAAIACgBIACABIAFACIAHABIAJABQAKAAAFgEQAIgEAFgHQAEgGADgJQACgJABgKIgOAFQgHADgJAAQgKAAgIgDQgHgDgEgFQgFgDgCgHQgBgHAAgHQAAgIACgHQADgIAEgFQAFgGAIgEQAIgDAJAAQAIAAAGACQAFACAEADQAFAEADAGQAEAFABAHIADAOIABARIgBAPIgEAQQgCAIgEAGQgEAHgGAFQgGAFgIADQgGACgLAAIgIAAgAgMgzQgFADgEAEQgCAFgCAFQgCAFAAAGQAAAGACAFQABAFADAEQAEADAFABQAEACAIAAQAGAAAIgCQAIgBAGgEQgBgNgCgKQgCgJgDgGQgEgGgFgDQgFgCgGAAQgHAAgFACg");
	this.shape_9.setTransform(7.2,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},27).to({state:[{t:this.shape_2}]},27).to({state:[{t:this.shape_3}]},28).to({state:[{t:this.shape_4}]},28).to({state:[{t:this.shape_5}]},27).to({state:[{t:this.shape_6}]},28).to({state:[{t:this.shape_7}]},28).to({state:[{t:this.shape_8}]},27).to({state:[{t:this.shape_9}]},28).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.4,28.4);


(lib.fill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAXAjIgDAAIgBgBIgBAAIgBgBIgRgcIgQAcIgBABIgBAAIgBABIgDAAIgCAAIgCgBIAAgBIAAgCIAWgfIgVgfIAAgBIAAgBIACgBIADAAIACAAIACABIAAAAIABABIAPAaIARgaIABgBIAAAAIACgBIACAAIADAAIABABIABABIgBABIgVAfIAWAfIAAACIAAABIgCABIgCAAg");
	this.shape.setTransform(93.3,9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAiIgHgEQgDgCgBgEQgCgDAAgFQAAgFACgEQACgFAFgCQAEgBAGgBQAFgCAGAAIALAAIAAgFIgCgIQgBgDgCgCQgBgDgDgBIgIgBIgGABIgGADIgEACIgDABIgBAAIgBgBIAAgBIAAgBIAAgCIABgCIAEgDIAFgCIAGgCIAGAAQAGAAAFABQAFACADADQADADABAFIABAKIAAArIgBABIgBABIgCAAIgCAAIgBgBIAAgBIAAgIQgFAFgFADQgGACgEAAIgJgBgAgDACQgEABgDACIgEAFIAAAGQAAAFADAEQADADAHAAQADAAAFgDQAEgCAGgGIAAgPIgNAAIgHAAg");
	this.shape_1.setTransform(86.6,9.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AArAjIgCAAIgCgBIgBAAIAAgBIAAgnIgBgIQAAgEgCgDIgFgEQgDgCgDAAQgFAAgFAEQgEADgGAIIAAAtIAAABIgBAAIgBABIgCAAIAAAAIgCgBIAAAAIgBgBIAAgnIAAgIIgDgHQgCgDgDgBQgCgCgEAAQgFAAgEAEQgFADgGAIIAAAtIAAABIgBAAIgBABIgCAAIgCAAIgCgBIAAAAIgBgBIAAhAIABgBIAAAAIACgBIACAAIACAAIABABIABAAIAAABIAAAJQAFgGAGgDQAFgDAFAAIAHABIAGADIADAEIACAFIAHgGIAFgEIAGgCIAFgBQAGAAAEACIAHAGQADAEABAFIABALIAAAnIAAABIgBAAIgBABIgCAAg");
	this.shape_2.setTransform(77.3,9.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWAjIgCAAIgCgBIAAAAIAAgBIAAglIgBgKIgDgHIgFgEQgDgCgEAAQgDAAgFAEQgFADgFAIIAAAtIgBABIAAAAIgBABIgDAAIgCAAIgCgBIAAAAIAAgBIAAhAIAAgBIAAAAIACgBIACAAIACAAIABABIABAAIAAABIAAAJQAGgGAFgDQAFgDAEAAQAGAAAFACQAEACADAEIAFAJIABAMIAAAmIAAABIgBAAIgBABIgDAAg");
	this.shape_3.setTransform(-9.5,9.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAwIgBAAIgBgBIgBAAIAAgBIAAhAIAAgBIABgBIABAAIABAAIACAAIABAAIAAABIABABIAABAIgBABIAAAAIgBABIgCAAgAgDgkQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBIABgFIADgBQAAAAABAAQABAAAAABQABAAAAAAQAAAAABAAQABACAAADQAAABAAABQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_4.setTransform(-15.1,8.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AArAjIgCAAIgCgBIgBAAIAAgBIAAgnIgBgIQAAgEgCgDIgFgEQgDgCgDAAQgFAAgFAEQgEADgGAIIAAAtIAAABIgBAAIgBABIgCAAIAAAAIgCgBIAAAAIgBgBIAAgnIAAgIIgDgHQgCgDgDgBQgCgCgEAAQgFAAgEAEQgFADgGAIIAAAtIAAABIgBAAIgBABIgCAAIgCAAIgCgBIAAAAIgBgBIAAhAIABgBIAAAAIACgBIACAAIACAAIABABIABAAIAAABIAAAJQAFgGAGgDQAFgDAFAAIAHABIAGADIADAEIACAFIAHgGIAFgEIAGgCIAFgBQAGAAAEACIAHAGQADAEABAFIABALIAAAnIAAABIgBAAIgBABIgCAAg");
	this.shape_5.setTransform(-22.7,9.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(4.3).p("AivBQIFKAAIAAifIlKAA");
	this.shape_6.setTransform(15.5,8.1,1,1,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(4.3).p("AivBQIFKAAIAAifIlKAA");
	this.shape_7.setTransform(50.2,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-3.4,129.2,22.3);


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


(lib.btn_playpause = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdBaQgQgGgMgMQgLgMgGgRQgFgSgBgZQABgUAFgSQAGgSAMgNQALgNAPgGQAPgHASAAQAVAAAPAGQAOAIAJAKQAJAMAFAPQAFAPgBASIAAAFQAAAGgDADQgEADgFAAIhyAAQAAAPADAMQADAMAHAHQAHAJAKAFQALAEAOAAQANAAAKgCIARgFIALgEIAIgCIACABIACACIAAADIABAGIAAAFIgBADIgBACIgCADIgGAEQgFACgIACIgUAFQgLABgNAAQgTAAgQgGgAgShBQgIAEgHAHQgGAIgDAKQgDAKgBAKIBeAAQAAgZgMgOQgLgPgXAAQgKAAgKAFg");
	this.shape.setTransform(93.5,61);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXBfIgPgEIgMgEIgGgFQgCgCgCgDIgBgKIAAgHIABgDIADgDIACgBQACAAAEAEIALAFIAOAGQAJADAKgBQAGAAAHgBQAHgCAEgEQAGgDACgFQADgGAAgGQAAgIgEgFQgEgGgGgDQgGgEgIgDIgOgHIgQgHQgIgCgHgGQgGgHgEgHQgDgJAAgMQAAgKADgKQAEgJAIgHQAIgIANgDQAMgFAOAAIANABIAOADIAJAEIAHAEIACACIABADIAAAEIABAFIgBAGIAAADIgCADIgDABIgEgCQgDgDgGgCIgMgFQgIgCgIAAQgHAAgGACQgHACgEADQgEAEgCAEQgCAFAAAFQAAAIAFAGQADAEAHAFIAMAGIAQAHIARAHQAHADAHAFQAGAGAEAIQADAJABALQgBANgEALQgFALgJAGQgKAIgNAEQgMADgNAAIgSgBg");
	this.shape_1.setTransform(75.7,61);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpBZQgMgGgHgKQgIgKgDgOQgDgNAAgTIAAhoIAAgDIADgCIAFgCIAIAAIAIAAIAFACQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIABADIAABjQAAAQACAJQADAJAEAIQAFAGAHAEQAHADAJAAQAKAAAMgJQAMgIAOgRIAAh4IABgDQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAFgCIAIAAIAIAAIAFACIACACIABADIAACtIAAADIgDABIgEACIgHAAIgIAAIgEgCIgCgBIgBgDIAAgXQgPARgPAHQgOAIgNgBQgSABgMgGg");
	this.shape_2.setTransform(57.4,61.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjBdQgLgEgIgHQgIgHgEgJQgFgKAAgNQAAgPAGgLQAGgLAMgGQALgGAQgEQARgDASAAIAZAAIAAgPQAAgJgDgIQgCgIgEgFQgFgGgIgCQgIgDgKAAQgLAAgJADQgKADgHADIgMAGQgEADgDAAIgCgBIgCgCIgCgDIAAgGIABgIQAAgDADgCIAJgGIAPgHIASgEQAKgCAIAAQATAAANAFQAOADAIAJQAIAIAEANQAEAMAAARIAAB0QAAABAAAAQgBAAAAABQAAAAAAABQgBAAAAAAIgEACIgIABIgIgBIgFgCQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIAAgSQgMAMgOAHQgOAHgOAAQgOAAgLgDgAgJAKQgKACgGAEQgHAFgDAGQgDAGAAAIQAAAOAJAIQAJAIAPAAQALAAALgHQALgGAMgNIAAgmIgcAAQgMABgJACg");
	this.shape_3.setTransform(36.8,61);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7B+IgIAAIgGgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIgBgDIAAjnQAAgIAEgDQAEgDAFAAIA2AAIAOAAIASADQAKACALAHQAKAGAIAJQAHAJAEAMQAEALAAAPQAAASgGAQQgGAPgMAJQgMAKgQAGQgRAGgWAAIgdAAIAABbIAAADIgDACIgFABIgIAAgAgrACIAfAAQANAAAKgCQAKgEAHgHQAHgHADgKQAEgJAAgMQAAgPgGgLQgGgKgIgFQgJgFgJgBIgQgCIgfAAg");
	this.shape_4.setTransform(19.1,57.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A499").s().p("AmnGoQiviwAAj4QAAj3CvivQCwiwD3gBQD4ABCwCwQCvCvAAD3QAAD4ivCwQiwCvj4AAQj3AAiwivg");
	this.shape_5.setTransform(55.4,60);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009187").s().p("AmnGoQiviwAAj4QAAj3CvivQCwiwD3gBQD4ABCwCwQCvCvAAD3QAAD4ivCwQiwCvj4AAQj3AAiwivg");
	this.shape_6.setTransform(55.4,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,0,120,120);


(lib.btn_play = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfCAIgFgCIgCgDIABgFIAZg9IgEgCIgCgEIg/imIgBgGQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAGgCIAJAAIAJAAIAFABIADACIACAEIAwCLIABAAIAwiMQABgDACgBIAFgCIAKAAIAJAAIAFACQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIgBAFIg/CtIgVBBQgBADgFACQgFABgKAAIgIAAg");
	this.shape.setTransform(82.3,64.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjBdQgLgEgIgHQgIgHgEgJQgFgKAAgNQAAgPAGgLQAGgLAMgGQALgGAQgEQARgDASAAIAZAAIAAgPQAAgJgDgIQgCgIgEgFQgFgGgIgCQgIgDgKAAQgLAAgJADQgKADgHADIgMAGQgEADgDAAIgCgBIgCgCIgCgDIAAgGIABgIQAAgDADgCIAJgGIAPgHIASgEQAKgCAIAAQATAAANAFQAOADAIAJQAIAIAEANQAEAMAAARIAAB0QAAABAAAAQAAAAgBABQAAAAAAABQgBAAAAAAIgEACIgIABIgIgBIgFgCQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIAAgSQgMAMgOAHQgOAHgOAAQgOAAgLgDgAgJAKQgKACgGAEQgHAFgDAGQgDAGAAAIQAAAOAJAIQAJAIAPAAQALAAALgHQALgGAMgNIAAgmIgcAAQgMABgJACg");
	this.shape_1.setTransform(63.9,61);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAACIIgHAAIgEgCIgDgBIAAgDIAAkDIAAgDIADgBIAEgBIAHgBIAHABIAGABIACABIAAADIAAEDIAAADIgCABIgGACIgHAAg");
	this.shape_2.setTransform(50.3,56.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag7B+IgIAAIgGgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIgBgDIAAjnQAAgIAEgDQAEgDAFAAIA2AAIAOAAIASADQAKACALAHQAKAGAIAJQAHAJAEAMQAEALAAAPQAAASgGAQQgGAPgMAJQgMAKgQAGQgRAGgWAAIgdAAIAABbIAAADIgDACIgFABIgIAAgAgrACIAfAAQANAAAKgCQAKgEAHgHQAHgHADgKQAEgJAAgMQAAgPgGgLQgGgKgIgFQgJgFgJgBIgQgCIgfAAg");
	this.shape_3.setTransform(36.1,57.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#84BD00").s().p("AmnGoQiviwAAj4QAAj3CvivQCwiwD3gBQD4ABCwCwQCvCvAAD3QAAD4ivCwQiwCvj4AAQj3AAiwivg");
	this.shape_4.setTransform(55.4,60);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#74A800").s().p("AmnGoQiviwAAj4QAAj3CvivQCwiwD3gBQD4ABCwCwQCvCvAAD3QAAD4ivCwQiwCvj4AAQj3AAiwivg");
	this.shape_5.setTransform(55.4,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,0,120,120);


(lib.btn_lower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA7BfIgIAAIgFgCIgCgBIgBgDIAAhlQAAgPgDgJQgCgJgEgHQgFgHgHgDQgHgEgKAAQgKAAgMAJQgMAIgNARIAAB5IgBADIgCABIgFACIgIAAIgIAAIgFgCIgDgBIAAgDIAAiuIAAgCQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAIAEgCIAHAAIAIAAIAEACIACACIABACIAAAXQAPgQAOgIQAPgIANAAQASAAAMAGQAMAGAHAKQAIAKADAOQADANAAATIAABpIgBADIgCABIgFACIgIAAg");
	this.shape.setTransform(92.7,60.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA5BdIgKAAIgGgBIgEgCIgCgEIgjh9IAAgCIgBACIgiB9IgBAEIgEACIgHABIgKAAIgKAAIgGgBIgEgCIgBgEIg0ilIgBgEIAAgEIAAgDIADgBIAFgBIAIAAIAIAAIAFABIADACIABADIArCPIAAABIABgBIAmiPIACgDIACgCIAFgBIAHAAIAHAAIAFABIACACIABACIAqCQIABABIAAgBIAqiPIABgDIADgCIAFgBIAIAAIAIAAIAEABIACABIABADIAAAEIgCAEIgzClIgCAEIgEACIgGABIgKAAg");
	this.shape_1.setTransform(67.9,61);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmBaQgRgHgKgMQgLgMgFgSQgGgRABgXQgBgTAGgSQAFgTAMgMQALgNARgIQARgHAUAAQAWAAAQAGQAQAHALAMQALANAFARQAGARgBAXQAAATgFASQgGATgLANQgMAMgQAIQgRAHgVAAQgVAAgQgGgAgWg/QgLAFgGAKQgIAIgCANQgEANAAAOQAAANADANQACANAHAKQAGAJAKAFQALAGAOAAQAOAAAKgFQAKgFAHgJQAGgKAEgMQADgNAAgPQAAgMgDgNQgDgMgGgKQgFgKgLgGQgLgFgPAAQgMAAgKAFg");
	this.shape_2.setTransform(43.2,61);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhTB+QgFAAgEgDQgEgDAAgIIAAjfQAAgIAEgDQAEgDAFAAIA5AAQAfAAAXAJQAWAIAQAQQAPAQAIAXQAIAWAAAdQAAAegJAZQgIAZgQAQQgQAQgYAIQgXAIgfAAgAg+BiIAjAAQAYAAAOgGQARgGALgNQALgMAGgTQAFgTAAgYQAAgUgFgSQgFgSgLgNQgLgNgQgHQgPgHgaAAIgiAAg");
	this.shape_3.setTransform(21.1,57.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Layer 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A6093D").s().p("AmnGoQiviwAAj4QAAj3CvivQCwiwD3gBQD4ABCwCwQCvCvAAD3QAAD4ivCwQiwCvj4AAQj3AAiwivg");
	this.shape_4.setTransform(55.4,60);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#930836").s().p("AmnGoQiviwAAj4QAAj3CvivQCwiwD3gBQD4ABCwCwQCvCvAAD3QAAD4ivCwQiwCvj4AAQj3AAiwivg");
	this.shape_5.setTransform(55.4,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,0,120,120);


(lib.btn_clean = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHCBIgFgBIgDgCIAAgCIAAj0IAAgDIADgCIAEgBIAHAAIAHAAIAEABIACACIABADIAAAYIAPgPQAIgGAHgDQAIgFAIgCQAGgCAIAAQAUAAANAIQAOAHAIANQAJANADARQAEARAAATQAAAXgFARQgFASgJANQgKANgOAHQgOAGgTAAQgGAAgGgBIgNgFQgHgDgGgFIgNgMIAABYIgBACIgCACIgFABIgIABIgIgBgAgHhjQgGACgGAEQgHAEgHAGQgHAHgHAJIAABEQANARAMAIQAMAJALAAQANAAAIgGQAJgGAFgKQAGgKACgKQADgMAAgMQAAgOgCgMQgCgNgFgJQgFgKgJgGQgIgGgNAAQgEAAgGACg");
	this.shape.setTransform(84.5,64.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmBaQgRgHgKgMQgLgMgFgSQgGgRABgXQgBgTAGgSQAFgTAMgMQALgNARgIQARgHAUAAQAWAAAQAGQAQAHALAMQALANAFARQAGARgBAXQAAATgFASQgGATgLANQgMAMgQAIQgRAHgVAAQgVAAgQgGgAgWg/QgLAFgGAKQgIAIgCANQgEANAAAOQAAANADANQACANAHAKQAGAJAKAFQALAGAOAAQANAAALgFQAKgFAHgJQAGgKAEgMQADgNAAgPQAAgMgDgNQgDgMgGgKQgFgKgLgGQgLgFgPAAQgMAAgKAFg");
	this.shape_1.setTransform(63,61);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AABBzQgIgEgGgHQgHgIgCgLQgDgLAAgPIAAhlIgZAAQgCAAgCgDQgCgDAAgIIABgGIABgEIACgCIACgBIAZAAIAAgqIABgCIACgCIAFgCIAIAAIAIAAIADACIACACIABACIAAAqIAuAAIACABQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIABAEIABAGQAAAIgCADQgCADgCAAIguAAIAABgQAAASAFAJQAGAKAOAAIAIgBIAGgCIAFgCIAEgBIABABIABABIABAEIABAGIgBAJIgCAFIgFADIgHACIgIABIgJABQgPAAgJgDg");
	this.shape_2.setTransform(45.8,58.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeB/QgLgBgJgDIgOgHQgGgEgCgCQgCgCgBgDIgBgKIAAgHIABgFQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAAAgBIADAAQADAAAFADIAMAHIATAIQALADAPAAQAJAAAJgDQAJgDAGgFQAHgGADgHQAEgIAAgKQAAgLgFgHQgFgIgIgGQgIgGgKgEIgTgKQgLgFgKgEQgKgGgIgJQgIgIgFgKQgFgMAAgPQAAgQAGgMQAFgNALgJQAKgHAOgFQAOgFAPABIARABIAQAEIANAGIAIAEIACAEIABACIABAEIAAAGIAAAHIgBAEIgCADIgCABQgDAAgEgEIgLgFQgHgEgJgCQgJgDgMAAQgIAAgIADQgIACgFAFQgFAFgCAGQgDAGAAAIQAAAKAFAIQAFAIAIAFIASALIATAKIAWALQAKAEAIAIQAIAIAFALQAFALAAAPQAAASgGAOQgHAOgMAJQgLAKgQAFQgQAFgQgBQgNAAgKgCg");
	this.shape_3.setTransform(30.2,57.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Layer 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8C8279").s().p("AmnGoQiviwAAj4QAAj3CvivQCwiwD3gBQD4ABCwCwQCvCvAAD3QAAD4ivCwQiwCvj4AAQj3AAiwivg");
	this.shape_4.setTransform(55.4,60);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B736B").s().p("AmnGoQiviwAAj4QAAj3CvivQCwiwD3gBQD4ABCwCwQCvCvAAD3QAAD4ivCwQiwCvj4AAQj3AAiwivg");
	this.shape_5.setTransform(55.4,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,0,120,120);


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
	this.shape.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape.setTransform(7.1,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAgA/Ig+AAIgBAAIgCgBIAAgCIgBgCIABgCIAAgCIACgBIABAAIAcAAIAAhlIgbAQIgCABIgCAAIgBgCIAAgDIAAgCIAAgBIABgCIACgBIAegTIAAgBIABAAIAAAAIACAAIADAAIABAAIABABIABACIAABwIAYAAIABAAIABABIABACIAAACIAAACIgBACIgBABIgBAAg");
	this.shape_1.setTransform(7.4,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggBAIgCgBIgCAAIAAgCIgBgDIAAgCIABgCIABgBIABgCIAagcIAOgSIAIgMQADgHABgFIABgKQAAgEgCgFQgBgEgDgDQgDgDgEgCQgFgCgDAAQgHAAgEABIgJAEIgGAEIgDACIgBgBIgCAAIAAgCIAAgCIAAgCIAAgCIABgBIACgBIADgDIAHgEIAJgCIALgBQAGAAAHACQAHADAEAEQAEAFADAGQACAFAAAHIgBAMQgBAGgEAHIgKAOQgGAIgKALIgWAZIA4AAIABAAIABABIACACIAAACIAAADIgCABIgBABIgBABg");
	this.shape_2.setTransform(7.1,14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOA/IgKgCIgHgDIgEgCIgBgCIAAgBIgBgCIAAgCIABgEIACgBIADABIAHAEIAKADQAGACAGAAQAFAAAGgCQAFgCAEgDQADgDACgFQACgFAAgFQAAgGgCgFQgDgEgEgEQgFgDgGgCQgFgCgHAAIgNAAIgBAAIgBgBIgBgCIAAAAIAAgCIABgCIABgBIABAAIALAAQAHAAAEgCQAFgCAEgDQAEgEACgFQACgFAAgGIgBgIIgEgHQgDgDgEgBQgFgCgDAAQgGAAgFACIgJAEIgGAEIgDABIgBAAIgBgBIgBgBIAAgDIAAgCIABgBIAAgCIACgBIADgDIAHgDIAJgDIALgBQAGAAAHACQAGACAEAFQAFAEACAFQACAGAAAGQAAAGgCAGIgFAJQgDAEgEADQgFACgGABIAAABQAHAAAFABQAGACAEAEQAEAEACAGQADAFAAAGQAAAIgDAHQgDAHgFAFQgFAFgIADQgIACgJAAIgLgBg");
	this.shape_3.setTransform(6.9,14.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AATA/IgDAAIgCAAIgBgBIAAgBIAAgdIg1AAIgBAAIgBgBIgBgBIAAgDIAAgCIABgCIAAgCIABgCIAvhOIABgCIACgBIACAAIAEAAIAEAAIADABIACAAIABACIAABRIAPAAIAEABIAAAEIAAAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgPAAIAAAdIAAABIgCABIgCAAIgCAAgAgfAWIAsAAIAAhJIgBAAg");
	this.shape_4.setTransform(7,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQA/IgJgDIgHgCIgDgBIgCgBIAAgCIAAgCIgBgCIABgCIAAgBIABgBIABgBIADACIAGACIAJADQAFABAHAAQAGAAAFgCQAHgBAEgEQAEgDACgGQADgGAAgIQAAgHgCgFQgCgFgEgDQgFgDgHgBQgGgCgHAAIgKABIgIABIgEgBIgBgFIAAgyQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIA0AAIABABIABABIAAACIABACIgBADQAAABgBAAQAAABAAAAQAAAAgBAAQAAABAAAAIgvAAIAAAnIAHAAIAJAAQAJAAAIACQAJADAFAFQAGACACAHQACAHABAIQAAAJgDAJQgEAHgGAFQgGAGgJADQgIADgIAAIgLgBg");
	this.shape_5.setTransform(6.9,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNA/QgGgCgFgEIgHgJQgDgFgBgHIgDgOIgBgSIABgPQABgIACgIQADgIAEgGQAEgHAFgFQAGgFAIgCQAFgDALAAIAHAAIAHABIAFACIADACIABABIAAABIABABIAAACIAAACIAAABIgBABIgBAAIgEAAIgEgCIgHgBIgJgBQgJAAgGAEQgGAEgFAHQgFAHgCAJQgDAJABAKIAGgDIAHgDIAIgCIAIgBQALAAAGADQAIADAEAFQAEADACAHQACAGAAAIQAAAHgDAIQgCAHgFAGQgFAGgIAEQgIADgJAAQgIAAgFgBgAgFgBIgIABIgHACIgGAEQAAANABAKQACAJAEAGQADAFAGADQAEACAGAAQAHAAAFgCQAFgDAEgFQADgEACgGIABgKQABgGgCgGQgBgFgDgDQgDgEgFAAQgFgCgIAAIgGABg");
	this.shape_6.setTransform(7.2,14.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPA/IgDAAIgDgBIAAgBIABgDIAvhtIg+AAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgEIAAgCIABgBIABgBIACgBIBHAAIABABIACABIAAABIABACIAAADIgBACIAAACIgBACIgtBsIgBACIgCABIgCAAIgDAAg");
	this.shape_7.setTransform(7.1,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQA+QgIgCgFgDQgFgEgDgGQgDgGAAgHQAAgHACgFQADgFAEgEIAJgIIANgFIgLgHIgJgHIgFgJQgBgEAAgGQAAgGACgFQACgGAFgEQAFgEAHgDQAHgCAHAAQAKAAAGACQAHACAEAEQAFAEACAFQACAFAAAGIgCAKIgEAJIgJAIQgFAEgGADIANAFIAKAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgFAEgJACQgHACgJAAQgJAAgHgCgAgMAKIgIAGQgEAEgCAEQgCAEAAAEQABALAHAGQAIAFAMAAQAOAAAIgFQAGgGABgKQgBgFgCgEQgBgEgEgEQgEgDgFgDIgMgHIgMAHgAgRgwQgFAFAAAKQAAAEABADQABAEADADIAIAHIAJAGQALgGAHgGQAGgHAAgJQAAgEgCgEQgBgDgEgDQgDgDgEgBQgEgBgGAAQgLAAgGAFg");
	this.shape_8.setTransform(7.1,14.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTBAIgIgBIgEgCIgEgCIgBgCIAAgDIAAgCIAAgCIABAAIABgBIADABIAFACIAHABIAJABQAKAAAGgEQAHgEAFgHQAEgGADgJQACgJAAgKIgMAFQgJADgHAAQgMAAgGgDQgIgDgEgFQgEgDgCgHQgCgHAAgHQAAgIACgHQADgIAFgFQAEgGAIgEQAIgDAJAAQAHAAAHACQAFACAFADQAEAEADAGQADAFACAHIADAOIABARIgBAPIgEAQQgCAIgEAGQgEAHgGAFQgGAFgIADQgGACgKAAIgIAAgAgMgzQgFADgDAEQgDAFgCAFQgBAFgBAGQABAGABAFQABAFADAEQADADAGABQAEACAIAAQAGAAAIgCQAIgBAFgEQAAgNgCgKQgCgJgDgGQgEgGgFgDQgFgCgGAAQgHAAgFACg");
	this.shape_9.setTransform(7,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},99).to({state:[{t:this.shape_2}]},100).to({state:[{t:this.shape_3}]},100).to({state:[{t:this.shape_4}]},100).to({state:[{t:this.shape_5}]},100).to({state:[{t:this.shape_6}]},100).to({state:[{t:this.shape_7}]},100).to({state:[{t:this.shape_8}]},100).to({state:[{t:this.shape_9}]},100).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.4,28.4);


(lib._582 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggBAIgCgBIgCAAIAAgCIgBgDIAAgCIABgCIABgBIABgCIAagcIAOgSIAIgMQADgHABgFIABgKQAAgEgCgFQgBgEgDgDQgDgDgEgCQgFgCgDAAQgHAAgEABIgJAEIgGAEIgDACIgBgBIgCAAIAAgCIAAgCIAAgCIAAgCIABgBIACgBIADgDIAHgEIAJgCIALgBQAGAAAHACQAHADAEAEQAEAFADAGQACAFAAAHIgBAMQgBAGgEAHIgKAOQgGAIgKALIgWAZIA4AAIABAAIABABIACACIAAACIAAADIgCABIgBABIgBABg");
	this.shape.setTransform(7.1,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOA/IgKgCIgHgDIgEgCIgBgCIAAgBIgBgCIAAgCIABgEIACgBIADABIAHAEIAKADQAGACAGAAQAFAAAGgCQAFgCAEgDQADgDACgFQACgFAAgFQAAgGgCgFQgDgEgEgEQgFgDgGgCQgFgCgHAAIgNAAIgBAAIgBgBIgBgCIAAAAIAAgCIABgCIABgBIABAAIALAAQAHAAAEgCQAFgCAEgDQAEgEACgFQACgFAAgGIgBgIIgEgHQgDgDgEgBQgFgCgDAAQgGAAgFACIgJAEIgGAEIgDABIgBAAIgBgBIgBgBIAAgDIAAgCIABgBIAAgCIACgBIADgDIAHgDIAJgDIALgBQAGAAAHACQAGACAEAFQAFAEACAFQACAGAAAGQAAAGgCAGIgFAJQgDAEgEADQgFACgGABIAAABQAHAAAFABQAGACAEAEQAEAEACAGQADAFAAAGQAAAIgDAHQgDAHgFAFQgFAFgIADQgIACgJAAIgLgBg");
	this.shape_1.setTransform(6.9,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AATA/IgDAAIgCAAIgBgBIAAgBIAAgdIg1AAIgBAAIgBgBIgBgBIAAgDIAAgCIABgCIAAgCIABgCIAvhOIABgCIACgBIACAAIAEAAIAEAAIADABIACAAIABACIAABRIAPAAIAEABIAAAEIAAAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgPAAIAAAdIAAABIgCABIgCAAIgCAAgAgfAWIAsAAIAAhJIgBAAg");
	this.shape_2.setTransform(7,14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQA/IgJgDIgHgCIgDgBIgCgBIAAgCIAAgCIgBgCIABgCIAAgBIABgBIABgBIADACIAGACIAJADQAFABAHAAQAGAAAFgCQAHgBAEgEQAEgDACgGQADgGAAgIQAAgHgCgFQgCgFgEgDQgFgDgHgBQgGgCgHAAIgKABIgIABIgEgBIgBgFIAAgyQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIA0AAIABABIABABIAAACIABACIgBADQAAABgBAAQAAABAAAAQAAAAgBAAQAAABAAAAIgvAAIAAAnIAHAAIAJAAQAJAAAIACQAJADAFAFQAGACACAHQACAHABAIQAAAJgDAJQgEAHgGAFQgGAGgJADQgIADgIAAIgLgBg");
	this.shape_3.setTransform(6.9,14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNA/QgGgCgFgEIgHgJQgDgFgBgHIgDgOIgBgSIABgPQABgIACgIQADgIAEgGQAEgHAFgFQAGgFAIgCQAFgDALAAIAHAAIAHABIAFACIADACIABABIAAABIABABIAAACIAAACIAAABIgBABIgBAAIgEAAIgEgCIgHgBIgJgBQgJAAgGAEQgGAEgFAHQgFAHgCAJQgDAJABAKIAGgDIAHgDIAIgCIAIgBQALAAAGADQAIADAEAFQAEADACAHQACAGAAAIQAAAHgDAIQgCAHgFAGQgFAGgIAEQgIADgJAAQgIAAgFgBgAgFgBIgIABIgHACIgGAEQAAANABAKQACAJAEAGQADAFAGADQAEACAGAAQAHAAAFgCQAFgDAEgFQADgEACgGIABgKQABgGgCgGQgBgFgDgDQgDgEgFAAQgFgCgIAAIgGABg");
	this.shape_4.setTransform(7.2,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgPA/IgDAAIgDgBIAAgBIABgDIAvhtIg+AAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgEIAAgCIABgBIABgBIACgBIBHAAIABABIACABIAAABIABACIAAADIgBACIAAACIgBACIgtBsIgBACIgCABIgCAAIgDAAg");
	this.shape_5.setTransform(7.1,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgQA+QgIgCgFgDQgFgEgDgGQgDgGAAgHQAAgHACgFQADgFAEgEIAJgIIANgFIgLgHIgJgHIgFgJQgBgEAAgGQAAgGACgFQACgGAFgEQAFgEAHgDQAHgCAHAAQAKAAAGACQAHACAEAEQAFAEACAFQACAFAAAGIgCAKIgEAJIgJAIQgFAEgGADIANAFIAKAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgFAEgJACQgHACgJAAQgJAAgHgCgAgMAKIgIAGQgEAEgCAEQgCAEAAAEQABALAHAGQAIAFAMAAQAOAAAIgFQAGgGABgKQgBgFgCgEQgBgEgEgEQgEgDgFgDIgMgHIgMAHgAgRgwQgFAFAAAKQAAAEABADQABAEADADIAIAHIAJAGQALgGAHgGQAGgHAAgJQAAgEgCgEQgBgDgEgDQgDgDgEgBQgEgBgGAAQgLAAgGAFg");
	this.shape_6.setTransform(7.1,14.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTBAIgIgBIgEgCIgEgCIgBgCIAAgDIAAgCIAAgCIABAAIABgBIADABIAFACIAHABIAJABQAKAAAGgEQAHgEAFgHQAEgGADgJQACgJAAgKIgMAFQgJADgHAAQgMAAgGgDQgIgDgEgFQgEgDgCgHQgCgHAAgHQAAgIACgHQADgIAFgFQAEgGAIgEQAIgDAJAAQAHAAAHACQAFACAFADQAEAEADAGQADAFACAHIADAOIABARIgBAPIgEAQQgCAIgEAGQgEAHgGAFQgGAFgIADQgGACgKAAIgIAAgAgMgzQgFADgDAEQgDAFgCAFQgBAFgBAGQABAGABAFQABAFADAEQADADAGABQAEACAIAAQAGAAAIgCQAIgBAFgEQAAgNgCgKQgCgJgDgGQgEgGgFgDQgFgCgGAAQgHAAgFACg");
	this.shape_7.setTransform(7,14.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_8.setTransform(7.1,14.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAgA/Ig+AAIgBAAIgCgBIAAgCIgBgCIABgCIAAgCIACgBIABAAIAcAAIAAhlIgbAQIgCABIgCAAIgBgCIAAgDIAAgCIAAgBIABgCIACgBIAegTIAAgBIABAAIAAAAIACAAIADAAIABAAIABABIABACIAABwIAYAAIABAAIABABIABACIAAACIAAACIgBACIgBABIgBAAg");
	this.shape_9.setTransform(7.4,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},57).to({state:[{t:this.shape_2}]},58).to({state:[{t:this.shape_3}]},58).to({state:[{t:this.shape_4}]},58).to({state:[{t:this.shape_5}]},58).to({state:[{t:this.shape_6}]},58).to({state:[{t:this.shape_7}]},58).to({state:[{t:this.shape_8}]},58).to({state:[{t:this.shape_9}]},64).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.4,28.4);


(lib._00100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape.setTransform(7.1,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAgA/Ig+AAIgBAAIgCgBIAAgCIgBgCIABgCIAAgCIACgBIABAAIAcAAIAAhlIgbAQIgCABIgCAAIgBgCIAAgDIAAgCIAAgBIABgCIACgBIAegTIAAgBIABAAIAAAAIACAAIADAAIABAAIABABIABACIAABwIAYAAIABAAIABABIABACIAAACIAAACIgBACIgBABIgBAAg");
	this.shape_1.setTransform(7.4,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggBAIgCgBIgCAAIAAgCIgBgDIAAgCIABgCIABgBIABgCIAagcIAOgSIAIgMQADgHABgFIABgKQAAgEgCgFQgBgEgDgDQgDgDgEgCQgFgCgDAAQgHAAgEABIgJAEIgGAEIgDACIgBgBIgCAAIAAgCIAAgCIAAgCIAAgCIABgBIACgBIADgDIAHgEIAJgCIALgBQAGAAAHACQAHADAEAEQAEAFADAGQACAFAAAHIgBAMQgBAGgEAHIgKAOQgGAIgKALIgWAZIA4AAIABAAIABABIACACIAAACIAAADIgCABIgBABIgBABg");
	this.shape_2.setTransform(7.1,14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOA/IgKgCIgHgDIgEgCIgBgCIAAgBIgBgCIAAgCIABgEIACgBIADABIAHAEIAKADQAGACAGAAQAFAAAGgCQAFgCAEgDQADgDACgFQACgFAAgFQAAgGgCgFQgDgEgEgEQgFgDgGgCQgFgCgHAAIgNAAIgBAAIgBgBIgBgCIAAAAIAAgCIABgCIABgBIABAAIALAAQAHAAAEgCQAFgCAEgDQAEgEACgFQACgFAAgGIgBgIIgEgHQgDgDgEgBQgFgCgDAAQgGAAgFACIgJAEIgGAEIgDABIgBAAIgBgBIgBgBIAAgDIAAgCIABgBIAAgCIACgBIADgDIAHgDIAJgDIALgBQAGAAAHACQAGACAEAFQAFAEACAFQACAGAAAGQAAAGgCAGIgFAJQgDAEgEADQgFACgGABIAAABQAHAAAFABQAGACAEAEQAEAEACAGQADAFAAAGQAAAIgDAHQgDAHgFAFQgFAFgIADQgIACgJAAIgLgBg");
	this.shape_3.setTransform(6.9,14.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AATA/IgDAAIgCAAIgBgBIAAgBIAAgdIg1AAIgBAAIgBgBIgBgBIAAgDIAAgCIABgCIAAgCIABgCIAvhOIABgCIACgBIACAAIAEAAIAEAAIADABIACAAIABACIAABRIAPAAIAEABIAAAEIAAAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgPAAIAAAdIAAABIgCABIgCAAIgCAAgAgfAWIAsAAIAAhJIgBAAg");
	this.shape_4.setTransform(7,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQA/IgJgDIgHgCIgDgBIgCgBIAAgCIAAgCIgBgCIABgCIAAgBIABgBIABgBIADACIAGACIAJADQAFABAHAAQAGAAAFgCQAHgBAEgEQAEgDACgGQADgGAAgIQAAgHgCgFQgCgFgEgDQgFgDgHgBQgGgCgHAAIgKABIgIABIgEgBIgBgFIAAgyQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIA0AAIABABIABABIAAACIABACIgBADQAAABgBAAQAAABAAAAQAAAAgBAAQAAABAAAAIgvAAIAAAnIAHAAIAJAAQAJAAAIACQAJADAFAFQAGACACAHQACAHABAIQAAAJgDAJQgEAHgGAFQgGAGgJADQgIADgIAAIgLgBg");
	this.shape_5.setTransform(6.9,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNA/QgGgCgFgEIgHgJQgDgFgBgHIgDgOIgBgSIABgPQABgIACgIQADgIAEgGQAEgHAFgFQAGgFAIgCQAFgDALAAIAHAAIAHABIAFACIADACIABABIAAABIABABIAAACIAAACIAAABIgBABIgBAAIgEAAIgEgCIgHgBIgJgBQgJAAgGAEQgGAEgFAHQgFAHgCAJQgDAJABAKIAGgDIAHgDIAIgCIAIgBQALAAAGADQAIADAEAFQAEADACAHQACAGAAAIQAAAHgDAIQgCAHgFAGQgFAGgIAEQgIADgJAAQgIAAgFgBgAgFgBIgIABIgHACIgGAEQAAANABAKQACAJAEAGQADAFAGADQAEACAGAAQAHAAAFgCQAFgDAEgFQADgEACgGIABgKQABgGgCgGQgBgFgDgDQgDgEgFAAQgFgCgIAAIgGABg");
	this.shape_6.setTransform(7.2,14.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPA/IgDAAIgDgBIAAgBIABgDIAvhtIg+AAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgEIAAgCIABgBIABgBIACgBIBHAAIABABIACABIAAABIABACIAAADIgBACIAAACIgBACIgtBsIgBACIgCABIgCAAIgDAAg");
	this.shape_7.setTransform(7.1,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQA+QgIgCgFgDQgFgEgDgGQgDgGAAgHQAAgHACgFQADgFAEgEIAJgIIANgFIgLgHIgJgHIgFgJQgBgEAAgGQAAgGACgFQACgGAFgEQAFgEAHgDQAHgCAHAAQAKAAAGACQAHACAEAEQAFAEACAFQACAFAAAGIgCAKIgEAJIgJAIQgFAEgGADIANAFIAKAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgFAEgJACQgHACgJAAQgJAAgHgCgAgMAKIgIAGQgEAEgCAEQgCAEAAAEQABALAHAGQAIAFAMAAQAOAAAIgFQAGgGABgKQgBgFgCgEQgBgEgEgEQgEgDgFgDIgMgHIgMAHgAgRgwQgFAFAAAKQAAAEABADQABAEADADIAIAHIAJAGQALgGAHgGQAGgHAAgJQAAgEgCgEQgBgDgEgDQgDgDgEgBQgEgBgGAAQgLAAgGAFg");
	this.shape_8.setTransform(7.1,14.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTBAIgIgBIgEgCIgEgCIgBgCIAAgDIAAgCIAAgCIABAAIABgBIADABIAFACIAHABIAJABQAKAAAGgEQAHgEAFgHQAEgGADgJQACgJAAgKIgMAFQgJADgHAAQgMAAgGgDQgIgDgEgFQgEgDgCgHQgCgHAAgHQAAgIACgHQADgIAFgFQAEgGAIgEQAIgDAJAAQAHAAAHACQAFACAFADQAEAEADAGQADAFACAHIADAOIABARIgBAPIgEAQQgCAIgEAGQgEAHgGAFQgGAFgIADQgGACgKAAIgIAAgAgMgzQgFADgDAEQgDAFgCAFQgBAFgBAGQABAGABAFQABAFADAEQADADAGABQAEACAIAAQAGAAAIgCQAIgBAFgEQAAgNgCgKQgCgJgDgGQgEgGgFgDQgFgCgGAAQgHAAgFACg");
	this.shape_9.setTransform(7,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape_4}]},10).to({state:[{t:this.shape_5}]},10).to({state:[{t:this.shape_6}]},10).to({state:[{t:this.shape_7}]},10).to({state:[{t:this.shape_8}]},10).to({state:[{t:this.shape_9}]},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.4,28.4);


(lib._32_rewind = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4FFFF").s().p("AgQA/IgJgDIgHgCIgDgBIgCgBIAAgCIAAgCIgBgCIABgCIAAgBIABgBIABgBIADACIAGACIAJADQAFABAHAAQAGAAAFgCQAHgBAEgEQAEgDACgGQADgGAAgIQAAgHgCgFQgCgFgEgDQgFgDgHgBQgGgCgHAAIgKABIgIABIgEgBIgBgFIAAgyQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIA0AAIABABIABABIAAACIABACIgBADQAAABgBAAQAAABAAAAQAAAAgBAAQAAABAAAAIgvAAIAAAnIAHAAIAJAAQAJAAAIACQAJADAFAFQAGACACAHQACAHABAIQAAAJgDAJQgEAHgGAFQgGAGgJADQgIADgIAAIgLgBg");
	this.shape.setTransform(6.9,14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4FFFF").s().p("AATA/IgDAAIgCAAIgBgBIAAgBIAAgdIg1AAIgBAAIgBgBIgBgBIAAgDIAAgCIABgCIAAgCIABgCIAvhOIABgCIACgBIACAAIAEAAIAEAAIADABIACAAIABACIAABRIAPAAIAEABIAAAEIAAAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgPAAIAAAdIAAABIgCABIgCAAIgCAAgAgfAWIAsAAIAAhJIgBAAg");
	this.shape_1.setTransform(7,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4FFFF").s().p("AgOA/IgKgCIgHgDIgEgCIgBgCIAAgBIgBgCIAAgCIABgEIACgBIADABIAHAEIAKADQAGACAGAAQAFAAAGgCQAFgCAEgDQADgDACgFQACgFAAgFQAAgGgCgFQgDgEgEgEQgFgDgGgCQgFgCgHAAIgNAAIgBAAIgBgBIgBgCIAAAAIAAgCIABgCIABgBIABAAIALAAQAHAAAEgCQAFgCAEgDQAEgEACgFQACgFAAgGIgBgIIgEgHQgDgDgEgBQgFgCgDAAQgGAAgFACIgJAEIgGAEIgDABIgBAAIgBgBIgBgBIAAgDIAAgCIABgBIAAgCIACgBIADgDIAHgDIAJgDIALgBQAGAAAHACQAGACAEAFQAFAEACAFQACAGAAAGQAAAGgCAGIgFAJQgDAEgEADQgFACgGABIAAABQAHAAAFABQAGACAEAEQAEAEACAGQADAFAAAGQAAAIgDAHQgDAHgFAFQgFAFgIADQgIACgJAAIgLgBg");
	this.shape_2.setTransform(6.9,14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4FFFF").s().p("AggBAIgCgBIgCAAIAAgCIgBgDIAAgCIABgCIABgBIABgCIAagcIAOgSIAIgMQADgHABgFIABgKQAAgEgCgFQgBgEgDgDQgDgDgEgCQgFgCgDAAQgHAAgEABIgJAEIgGAEIgDACIgBgBIgCAAIAAgCIAAgCIAAgCIAAgCIABgBIACgBIADgDIAHgEIAJgCIALgBQAGAAAHACQAHADAEAEQAEAFADAGQACAFAAAHIgBAMQgBAGgEAHIgKAOQgGAIgKALIgWAZIA4AAIABAAIABABIACACIAAACIAAADIgCABIgBABIgBABg");
	this.shape_3.setTransform(7.1,14.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4FFFF").s().p("AAgA/Ig+AAIgBAAIgCgBIAAgCIgBgCIABgCIAAgCIACgBIABAAIAcAAIAAhlIgbAQIgCABIgCAAIgBgCIAAgDIAAgCIAAgBIABgCIACgBIAegTIAAgBIABAAIAAAAIACAAIADAAIABAAIABABIABACIAABwIAYAAIABAAIABABIABACIAAACIAAACIgBACIgBABIgBAAg");
	this.shape_4.setTransform(7.4,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4FFFF").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_5.setTransform(7.1,14.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F4FFFF").s().p("AgTBAIgIgBIgEgCIgEgCIgBgCIAAgDIAAgCIAAgCIABAAIABgBIADABIAFACIAHABIAJABQAKAAAGgEQAHgEAFgHQAEgGADgJQACgJAAgKIgMAFQgJADgHAAQgMAAgGgDQgIgDgEgFQgEgDgCgHQgCgHAAgHQAAgIACgHQADgIAFgFQAEgGAIgEQAIgDAJAAQAHAAAHACQAFACAFADQAEAEADAGQADAFACAHIADAOIABARIgBAPIgEAQQgCAIgEAGQgEAHgGAFQgGAFgIADQgGACgKAAIgIAAgAgMgzQgFADgDAEQgDAFgCAFQgBAFgBAGQABAGABAFQABAFADAEQADADAGABQAEACAIAAQAGAAAIgCQAIgBAFgEQAAgNgCgKQgCgJgDgGQgEgGgFgDQgFgCgGAAQgHAAgFACg");
	this.shape_6.setTransform(7,14.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F4FFFF").s().p("AgQA+QgIgCgFgDQgFgEgDgGQgDgGAAgHQAAgHACgFQADgFAEgEIAJgIIANgFIgLgHIgJgHIgFgJQgBgEAAgGQAAgGACgFQACgGAFgEQAFgEAHgDQAHgCAHAAQAKAAAGACQAHACAEAEQAFAEACAFQACAFAAAGIgCAKIgEAJIgJAIQgFAEgGADIANAFIAKAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgFAEgJACQgHACgJAAQgJAAgHgCgAgMAKIgIAGQgEAEgCAEQgCAEAAAEQABALAHAGQAIAFAMAAQAOAAAIgFQAGgGABgKQgBgFgCgEQgBgEgEgEQgEgDgFgDIgMgHIgMAHgAgRgwQgFAFAAAKQAAAEABADQABAEADADIAIAHIAJAGQALgGAHgGQAGgHAAgJQAAgEgCgEQgBgDgEgDQgDgDgEgBQgEgBgGAAQgLAAgGAFg");
	this.shape_7.setTransform(7.1,14.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F4FFFF").s().p("AgPA/IgDAAIgDgBIAAgBIABgDIAvhtIg+AAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgEIAAgCIABgBIABgBIACgBIBHAAIABABIACABIAAABIABACIAAADIgBACIAAACIgBACIgtBsIgBACIgCABIgCAAIgDAAg");
	this.shape_8.setTransform(7.1,14.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4FFFF").s().p("AgNA/QgGgCgFgEIgHgJQgDgFgBgHIgDgOIgBgSIABgPQABgIACgIQADgIAEgGQAEgHAFgFQAGgFAIgCQAFgDALAAIAHAAIAHABIAFACIADACIABABIAAABIABABIAAACIAAACIAAABIgBABIgBAAIgEAAIgEgCIgHgBIgJgBQgJAAgGAEQgGAEgFAHQgFAHgCAJQgDAJABAKIAGgDIAHgDIAIgCIAIgBQALAAAGADQAIADAEAFQAEADACAHQACAGAAAIQAAAHgDAIQgCAHgFAGQgFAGgIAEQgIADgJAAQgIAAgFgBgAgFgBIgIABIgHACIgGAEQAAANABAKQACAJAEAGQADAFAGADQAEACAGAAQAHAAAFgCQAFgDAEgFQADgEACgGIABgKQABgGgCgGQgBgFgDgDQgDgEgFAAQgFgCgIAAIgGABg");
	this.shape_9.setTransform(7.2,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},52).to({state:[{t:this.shape_2}]},53).to({state:[{t:this.shape_3}]},53).to({state:[{t:this.shape_4}]},53).to({state:[{t:this.shape_5}]},53).to({state:[{t:this.shape_6}]},53).to({state:[{t:this.shape_7}]},53).to({state:[{t:this.shape_8}]},53).to({state:[{t:this.shape_9}]},53).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.4,28.4);


(lib._32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4FFFF").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape.setTransform(7.1,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4FFFF").s().p("AAgA/Ig+AAIgBAAIgCgBIAAgCIgBgCIABgCIAAgCIACgBIABAAIAcAAIAAhlIgbAQIgCABIgCAAIgBgCIAAgDIAAgCIAAgBIABgCIACgBIAegTIAAgBIABAAIAAAAIACAAIADAAIABAAIABABIABACIAABwIAYAAIABAAIABABIABACIAAACIAAACIgBACIgBABIgBAAg");
	this.shape_1.setTransform(7.4,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4FFFF").s().p("AggBAIgCgBIgCAAIAAgCIgBgDIAAgCIABgCIABgBIABgCIAagcIAOgSIAIgMQADgHABgFIABgKQAAgEgCgFQgBgEgDgDQgDgDgEgCQgFgCgDAAQgHAAgEABIgJAEIgGAEIgDACIgBgBIgCAAIAAgCIAAgCIAAgCIAAgCIABgBIACgBIADgDIAHgEIAJgCIALgBQAGAAAHACQAHADAEAEQAEAFADAGQACAFAAAHIgBAMQgBAGgEAHIgKAOQgGAIgKALIgWAZIA4AAIABAAIABABIACACIAAACIAAADIgCABIgBABIgBABg");
	this.shape_2.setTransform(7.1,14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4FFFF").s().p("AgOA/IgKgCIgHgDIgEgCIgBgCIAAgBIgBgCIAAgCIABgEIACgBIADABIAHAEIAKADQAGACAGAAQAFAAAGgCQAFgCAEgDQADgDACgFQACgFAAgFQAAgGgCgFQgDgEgEgEQgFgDgGgCQgFgCgHAAIgNAAIgBAAIgBgBIgBgCIAAAAIAAgCIABgCIABgBIABAAIALAAQAHAAAEgCQAFgCAEgDQAEgEACgFQACgFAAgGIgBgIIgEgHQgDgDgEgBQgFgCgDAAQgGAAgFACIgJAEIgGAEIgDABIgBAAIgBgBIgBgBIAAgDIAAgCIABgBIAAgCIACgBIADgDIAHgDIAJgDIALgBQAGAAAHACQAGACAEAFQAFAEACAFQACAGAAAGQAAAGgCAGIgFAJQgDAEgEADQgFACgGABIAAABQAHAAAFABQAGACAEAEQAEAEACAGQADAFAAAGQAAAIgDAHQgDAHgFAFQgFAFgIADQgIACgJAAIgLgBg");
	this.shape_3.setTransform(6.9,14.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4FFFF").s().p("AATA/IgDAAIgCAAIgBgBIAAgBIAAgdIg1AAIgBAAIgBgBIgBgBIAAgDIAAgCIABgCIAAgCIABgCIAvhOIABgCIACgBIACAAIAEAAIAEAAIADABIACAAIABACIAABRIAPAAIAEABIAAAEIAAAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgPAAIAAAdIAAABIgCABIgCAAIgCAAgAgfAWIAsAAIAAhJIgBAAg");
	this.shape_4.setTransform(7,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4FFFF").s().p("AgQA/IgJgDIgHgCIgDgBIgCgBIAAgCIAAgCIgBgCIABgCIAAgBIABgBIABgBIADACIAGACIAJADQAFABAHAAQAGAAAFgCQAHgBAEgEQAEgDACgGQADgGAAgIQAAgHgCgFQgCgFgEgDQgFgDgHgBQgGgCgHAAIgKABIgIABIgEgBIgBgFIAAgyQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIA0AAIABABIABABIAAACIABACIgBADQAAABgBAAQAAABAAAAQAAAAgBAAQAAABAAAAIgvAAIAAAnIAHAAIAJAAQAJAAAIACQAJADAFAFQAGACACAHQACAHABAIQAAAJgDAJQgEAHgGAFQgGAGgJADQgIADgIAAIgLgBg");
	this.shape_5.setTransform(6.9,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F4FFFF").s().p("AgNA/QgGgCgFgEIgHgJQgDgFgBgHIgDgOIgBgSIABgPQABgIACgIQADgIAEgGQAEgHAFgFQAGgFAIgCQAFgDALAAIAHAAIAHABIAFACIADACIABABIAAABIABABIAAACIAAACIAAABIgBABIgBAAIgEAAIgEgCIgHgBIgJgBQgJAAgGAEQgGAEgFAHQgFAHgCAJQgDAJABAKIAGgDIAHgDIAIgCIAIgBQALAAAGADQAIADAEAFQAEADACAHQACAGAAAIQAAAHgDAIQgCAHgFAGQgFAGgIAEQgIADgJAAQgIAAgFgBgAgFgBIgIABIgHACIgGAEQAAANABAKQACAJAEAGQADAFAGADQAEACAGAAQAHAAAFgCQAFgDAEgFQADgEACgGIABgKQABgGgCgGQgBgFgDgDQgDgEgFAAQgFgCgIAAIgGABg");
	this.shape_6.setTransform(7.2,14.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F4FFFF").s().p("AgPA/IgDAAIgDgBIAAgBIABgDIAvhtIg+AAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgEIAAgCIABgBIABgBIACgBIBHAAIABABIACABIAAABIABACIAAADIgBACIAAACIgBACIgtBsIgBACIgCABIgCAAIgDAAg");
	this.shape_7.setTransform(7.1,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F4FFFF").s().p("AgQA+QgIgCgFgDQgFgEgDgGQgDgGAAgHQAAgHACgFQADgFAEgEIAJgIIANgFIgLgHIgJgHIgFgJQgBgEAAgGQAAgGACgFQACgGAFgEQAFgEAHgDQAHgCAHAAQAKAAAGACQAHACAEAEQAFAEACAFQACAFAAAGIgCAKIgEAJIgJAIQgFAEgGADIANAFIAKAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgFAEgJACQgHACgJAAQgJAAgHgCgAgMAKIgIAGQgEAEgCAEQgCAEAAAEQABALAHAGQAIAFAMAAQAOAAAIgFQAGgGABgKQgBgFgCgEQgBgEgEgEQgEgDgFgDIgMgHIgMAHgAgRgwQgFAFAAAKQAAAEABADQABAEADADIAIAHIAJAGQALgGAHgGQAGgHAAgJQAAgEgCgEQgBgDgEgDQgDgDgEgBQgEgBgGAAQgLAAgGAFg");
	this.shape_8.setTransform(7.1,14.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4FFFF").s().p("AgTBAIgIgBIgEgCIgEgCIgBgCIAAgDIAAgCIAAgCIABAAIABgBIADABIAFACIAHABIAJABQAKAAAGgEQAHgEAFgHQAEgGADgJQACgJAAgKIgMAFQgJADgHAAQgMAAgGgDQgIgDgEgFQgEgDgCgHQgCgHAAgHQAAgIACgHQADgIAFgFQAEgGAIgEQAIgDAJAAQAHAAAHACQAFACAFADQAEAEADAGQADAFACAHIADAOIABARIgBAPIgEAQQgCAIgEAGQgEAHgGAFQgGAFgIADQgGACgKAAIgIAAgAgMgzQgFADgDAEQgDAFgCAFQgBAFgBAGQABAGABAFQABAFADAEQADADAGABQAEACAIAAQAGAAAIgCQAIgBAFgEQAAgNgCgKQgCgJgDgGQgEgGgFgDQgFgCgGAAQgHAAgFACg");
	this.shape_9.setTransform(7,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},52).to({state:[{t:this.shape_2}]},53).to({state:[{t:this.shape_3}]},53).to({state:[{t:this.shape_4}]},53).to({state:[{t:this.shape_5}]},53).to({state:[{t:this.shape_6}]},53).to({state:[{t:this.shape_7}]},53).to({state:[{t:this.shape_8}]},53).to({state:[{t:this.shape_9}]},53).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.4,28.4);


(lib._00010black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape.setTransform(7.1,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAgA/Ig+AAIgBAAIgCgBIAAgCIgBgCIABgCIAAgCIACgBIABAAIAcAAIAAhlIgbAQIgCABIgCAAIgBgCIAAgDIAAgCIAAgBIABgCIACgBIAegTIAAgBIABAAIAAAAIACAAIADAAIABAAIABABIABACIAABwIAYAAIABAAIABABIABACIAAACIAAACIgBACIgBABIgBAAg");
	this.shape_1.setTransform(7.4,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggBAIgCgBIgCAAIAAgCIgBgDIAAgCIABgCIABgBIABgCIAagcIAOgSIAIgMQADgHABgFIABgKQAAgEgCgFQgBgEgDgDQgDgDgEgCQgFgCgDAAQgHAAgEABIgJAEIgGAEIgDACIgBgBIgCAAIAAgCIAAgCIAAgCIAAgCIABgBIACgBIADgDIAHgEIAJgCIALgBQAGAAAHACQAHADAEAEQAEAFADAGQACAFAAAHIgBAMQgBAGgEAHIgKAOQgGAIgKALIgWAZIA4AAIABAAIABABIACACIAAACIAAADIgCABIgBABIgBABg");
	this.shape_2.setTransform(7.1,14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOA/IgKgCIgHgDIgEgCIgBgCIAAgBIgBgCIAAgCIABgEIACgBIADABIAHAEIAKADQAGACAGAAQAFAAAGgCQAFgCAEgDQADgDACgFQACgFAAgFQAAgGgCgFQgDgEgEgEQgFgDgGgCQgFgCgHAAIgNAAIgBAAIgBgBIgBgCIAAAAIAAgCIABgCIABgBIABAAIALAAQAHAAAEgCQAFgCAEgDQAEgEACgFQACgFAAgGIgBgIIgEgHQgDgDgEgBQgFgCgDAAQgGAAgFACIgJAEIgGAEIgDABIgBAAIgBgBIgBgBIAAgDIAAgCIABgBIAAgCIACgBIADgDIAHgDIAJgDIALgBQAGAAAHACQAGACAEAFQAFAEACAFQACAGAAAGQAAAGgCAGIgFAJQgDAEgEADQgFACgGABIAAABQAHAAAFABQAGACAEAEQAEAEACAGQADAFAAAGQAAAIgDAHQgDAHgFAFQgFAFgIADQgIACgJAAIgLgBg");
	this.shape_3.setTransform(6.9,14.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AATA/IgDAAIgCAAIgBgBIAAgBIAAgdIg1AAIgBAAIgBgBIgBgBIAAgDIAAgCIABgCIAAgCIABgCIAvhOIABgCIACgBIACAAIAEAAIAEAAIADABIACAAIABACIAABRIAPAAIAEABIAAAEIAAAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgPAAIAAAdIAAABIgCABIgCAAIgCAAgAgfAWIAsAAIAAhJIgBAAg");
	this.shape_4.setTransform(7,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQA/IgJgDIgHgCIgDgBIgCgBIAAgCIAAgCIgBgCIABgCIAAgBIABgBIABgBIADACIAGACIAJADQAFABAHAAQAGAAAFgCQAHgBAEgEQAEgDACgGQADgGAAgIQAAgHgCgFQgCgFgEgDQgFgDgHgBQgGgCgHAAIgKABIgIABIgEgBIgBgFIAAgyQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIA0AAIABABIABABIAAACIABACIgBADQAAABgBAAQAAABAAAAQAAAAgBAAQAAABAAAAIgvAAIAAAnIAHAAIAJAAQAJAAAIACQAJADAFAFQAGACACAHQACAHABAIQAAAJgDAJQgEAHgGAFQgGAGgJADQgIADgIAAIgLgBg");
	this.shape_5.setTransform(6.9,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNA/QgGgCgFgEIgHgJQgDgFgBgHIgDgOIgBgSIABgPQABgIACgIQADgIAEgGQAEgHAFgFQAGgFAIgCQAFgDALAAIAHAAIAHABIAFACIADACIABABIAAABIABABIAAACIAAACIAAABIgBABIgBAAIgEAAIgEgCIgHgBIgJgBQgJAAgGAEQgGAEgFAHQgFAHgCAJQgDAJABAKIAGgDIAHgDIAIgCIAIgBQALAAAGADQAIADAEAFQAEADACAHQACAGAAAIQAAAHgDAIQgCAHgFAGQgFAGgIAEQgIADgJAAQgIAAgFgBgAgFgBIgIABIgHACIgGAEQAAANABAKQACAJAEAGQADAFAGADQAEACAGAAQAHAAAFgCQAFgDAEgFQADgEACgGIABgKQABgGgCgGQgBgFgDgDQgDgEgFAAQgFgCgIAAIgGABg");
	this.shape_6.setTransform(7.2,14.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPA/IgDAAIgDgBIAAgBIABgDIAvhtIg+AAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgEIAAgCIABgBIABgBIACgBIBHAAIABABIACABIAAABIABACIAAADIgBACIAAACIgBACIgtBsIgBACIgCABIgCAAIgDAAg");
	this.shape_7.setTransform(7.1,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQA+QgIgCgFgDQgFgEgDgGQgDgGAAgHQAAgHACgFQADgFAEgEIAJgIIANgFIgLgHIgJgHIgFgJQgBgEAAgGQAAgGACgFQACgGAFgEQAFgEAHgDQAHgCAHAAQAKAAAGACQAHACAEAEQAFAEACAFQACAFAAAGIgCAKIgEAJIgJAIQgFAEgGADIANAFIAKAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgFAEgJACQgHACgJAAQgJAAgHgCgAgMAKIgIAGQgEAEgCAEQgCAEAAAEQABALAHAGQAIAFAMAAQAOAAAIgFQAGgGABgKQgBgFgCgEQgBgEgEgEQgEgDgFgDIgMgHIgMAHgAgRgwQgFAFAAAKQAAAEABADQABAEADADIAIAHIAJAGQALgGAHgGQAGgHAAgJQAAgEgCgEQgBgDgEgDQgDgDgEgBQgEgBgGAAQgLAAgGAFg");
	this.shape_8.setTransform(7.1,14.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTBAIgIgBIgEgCIgEgCIgBgCIAAgDIAAgCIAAgCIABAAIABgBIADABIAFACIAHABIAJABQAKAAAGgEQAHgEAFgHQAEgGADgJQACgJAAgKIgMAFQgJADgHAAQgMAAgGgDQgIgDgEgFQgEgDgCgHQgCgHAAgHQAAgIACgHQADgIAFgFQAEgGAIgEQAIgDAJAAQAHAAAHACQAFACAFADQAEAEADAGQADAFACAHIADAOIABARIgBAPIgEAQQgCAIgEAGQgEAHgGAFQgGAFgIADQgGACgKAAIgIAAgAgMgzQgFADgDAEQgDAFgCAFQgBAFgBAGQABAGABAFQABAFADAEQADADAGABQAEACAIAAQAGAAAIgCQAIgBAFgEQAAgNgCgKQgCgJgDgGQgEgGgFgDQgFgCgGAAQgHAAgFACg");
	this.shape_9.setTransform(7,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.4,28.4);


(lib._00010_rewind = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4FFFF").s().p("AgQA+QgHgCgGgDQgFgEgDgGQgDgGAAgHQAAgHACgFQADgFAEgEIAJgIIANgFIgMgHIgIgHIgEgJQgCgEAAgGQAAgGACgFQACgGAFgEQAEgEAIgDQAHgCAIAAQAIAAAHACQAHACAFAEQAEAEACAFQACAFAAAGQAAAFgCAFIgEAJIgJAIQgEAEgHADIANAFIAKAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgFAEgJACQgHACgJAAQgIAAgIgCgAgMAKIgJAGQgDAEgBAEQgDAEAAAEQAAALAIAGQAHAFANAAQAOAAAHgFQAIgGAAgKQAAgFgCgEQgCgEgEgEQgEgDgFgDIgMgHIgMAHgAgQgwQgHAFABAKQgBAEACADQABAEAEADIAHAHIAKAGQAKgGAHgGQAGgHAAgJQAAgEgCgEQgCgDgCgDQgDgDgFgBQgEgBgGAAQgKAAgGAFg");
	this.shape.setTransform(-46.7,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4FFFF").s().p("AgQA/IgCAAIgCgBIgBgCIABgCIAvhtIg/AAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgEIABgCIAAgBIABgBIABgBIBHAAIACABIACABIABABIAAACIAAACIAAADIgBACIgBACIguBrIgBACIgBACIgCAAIgEAAg");
	this.shape_1.setTransform(-46.7,13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4FFFF").s().p("AgNA/QgGgCgFgEIgGgJQgEgFgCgHIgCgOIgBgSIABgPQABgIACgIQADgIAEgGQADgHAGgFQAGgFAIgCQAGgDAKAAIAHAAIAHABIAFACIADACIAAABIABABIAAABIAAACIAAACIAAABIgBABIAAAAIgDAAIgFgCIgHgBIgJgBQgJAAgGAEQgGAEgFAHQgFAHgCAJQgCAJgBAKIAHgDIAHgDIAJgCIAHgBQAKAAAIADQAHADAEAFQAFADABAHQACAGAAAIQAAAHgDAIQgBAHgGAGQgFAGgIAEQgIADgJAAQgHAAgGgBgAgFgBIgIABIgHACIgHAEQAAANACAKQACAJAEAGQAEAFAFADQAFACAFAAQAHAAAFgCQAGgDADgFQADgEACgGIABgKQAAgGgBgGQgBgFgDgDQgDgEgFAAQgFgCgIAAIgGABg");
	this.shape_2.setTransform(-46.6,13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4FFFF").s().p("AgQA/IgJgCIgIgDIgCgCIgBgBIgBgBIAAgCIAAgBIAAgDIABgCIAAgBIABAAIADABIAGAEIAJACQAFACAHgBQAFAAAHgBQAFgCAFgEQAEgDADgGQACgGAAgIQAAgHgCgFQgCgFgEgEQgFgCgGAAQgHgCgHAAIgKABIgIAAIgEgBIgBgFIAAgxQAAgBAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAgBIA0AAIABABIACABIAAABIABADIgBADQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIguAAIAAApIAHgBIAJAAQAJAAAJADQAHACAGAFQAFADADAGQADAHgBAIQAAAJgCAJQgEAIgGAEQgGAGgJADQgIADgIgBIgLAAg");
	this.shape_3.setTransform(-46.9,13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4FFFF").s().p("AASA/IgCAAIgCAAIgBgBIAAgBIAAgdIg1AAIgBAAIgBgBIgBgBIAAgDIAAgCIAAgCIABgCIABgCIAvhOIABgCIACgBIACAAIAEAAIAEAAIADABIACAAIABACIAABRIAQAAIADABIAAAEIAAAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgQAAIAAAdIAAABIgBABIgDAAIgDAAgAgfAWIAsAAIAAhJIgBAAg");
	this.shape_4.setTransform(-46.8,13.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4FFFF").s().p("AgOA/IgKgCIgHgDIgEgCIgBgCIAAgBIgBgCIAAgCIABgEIACgBIADABIAHAEIAKADQAGACAGAAQAFAAAGgCQAFgCAEgDQADgDACgFQACgFAAgFQAAgGgCgFQgDgEgEgEQgFgDgGgCQgFgCgHAAIgNAAIgBAAIgBgBIgBgCIAAAAIAAgCIABgCIABgBIABAAIALAAQAHAAAEgCQAFgCAEgDQAEgEACgFQACgFAAgGIgBgIIgEgHQgDgDgEgBQgFgCgDAAQgGAAgFACIgJAEIgGAEIgDABIgBAAIgBgBIgBgBIAAgDIAAgCIABgBIAAgCIACgBIADgDIAHgDIAJgDIALgBQAGAAAHACQAGACAEAFQAFAEACAFQACAGAAAGQAAAGgCAGIgFAJQgDAEgEADQgFACgGABIAAABQAHAAAFABQAGACAEAEQAEAEACAGQADAFAAAGQAAAIgDAHQgDAHgFAFQgFAFgIADQgIACgJAAIgLgBg");
	this.shape_5.setTransform(-46.9,13.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F4FFFF").s().p("AggBAIgCgBIgCgBIAAgCIgBgCIAAgCIABgCIABgCIABgBIAagcIANgSIAJgMQADgGABgGIABgKQAAgFgBgEQgCgEgDgDQgDgDgFgCQgDgCgFAAQgFAAgFACIgJADIgGAEIgDACIgBAAIgBgBIgBgCIAAgCIAAgCIAAgBIABgCIACgCIADgCIAHgDIAJgEIAKgBQAHAAAHADQAHADADAEQAFAEADAHQABAGAAAGIgBAMQgBAGgDAIIgKANQgGAJgKALIgWAYIA4AAIACAAIABABIABACIAAACIAAACIgBACIgBABIgCABg");
	this.shape_6.setTransform(-46.7,13.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F4FFFF").s().p("AAgA/Ig+AAIgBAAIgBgBIgBgBIAAgDIAAgCIABgCIABgBIABAAIAcAAIAAhmIgbAQIgCACIgCgBIgBgBIAAgDIAAgCIABgCIAAgBIACgBIAdgTIABgBIABAAIAAAAIACAAIACAAIACAAIABABIABABIAABxIAYAAIABAAIABABIABACIAAACIAAADIgBABIgBABIgBAAg");
	this.shape_7.setTransform(-46.4,13.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F4FFFF").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_8.setTransform(-46.7,13.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4FFFF").s().p("AgUBAIgHgBIgEgCIgEgCIgBgCIAAgDIAAgCIAAgCIABAAIACgBIACABIAFACIAHABIAJABQAKAAAFgEQAIgEAFgHQAEgGADgJQACgJABgKIgOAFQgHADgJAAQgKAAgIgDQgHgDgEgFQgFgDgCgHQgBgHAAgHQAAgIACgHQADgIAEgFQAFgGAIgEQAIgDAJAAQAIAAAFACQAGACAEADQAFAEADAGQAEAFABAHIADAOIABARIgBAPIgEAQQgCAIgEAGQgEAHgGAFQgGAFgIADQgGACgLAAIgIAAgAgMgzQgFADgEAEQgCAFgCAFQgCAFAAAGQAAAGACAFQABAFADAEQAEADAFABQAEACAIAAQAGAAAIgCQAIgBAGgEQgBgNgCgKQgCgJgDgGQgEgGgFgDQgFgCgGAAQgHAAgFACg");
	this.shape_9.setTransform(-46.8,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.8,-1.2,14.3,28.4);


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
	this.shape.graphics.f("#F4FFFF").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape.setTransform(7.1,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4FFFF").s().p("AAgA/Ig+AAIgBAAIgCgBIAAgCIgBgCIABgCIAAgCIACgBIABAAIAcAAIAAhlIgbAQIgCABIgCAAIgBgCIAAgDIAAgCIAAgBIABgCIACgBIAegTIAAgBIABAAIAAAAIACAAIADAAIABAAIABABIABACIAABwIAYAAIABAAIABABIABACIAAACIAAACIgBACIgBABIgBAAg");
	this.shape_1.setTransform(7.4,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4FFFF").s().p("AggBAIgCgBIgCAAIAAgCIgBgDIAAgCIABgCIABgBIABgCIAagcIAOgSIAIgMQADgHABgFIABgKQAAgEgCgFQgBgEgDgDQgDgDgEgCQgFgCgDAAQgHAAgEABIgJAEIgGAEIgDACIgBgBIgCAAIAAgCIAAgCIAAgCIAAgCIABgBIACgBIADgDIAHgEIAJgCIALgBQAGAAAHACQAHADAEAEQAEAFADAGQACAFAAAHIgBAMQgBAGgEAHIgKAOQgGAIgKALIgWAZIA4AAIABAAIABABIACACIAAACIAAADIgCABIgBABIgBABg");
	this.shape_2.setTransform(7.1,14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4FFFF").s().p("AgOA/IgKgCIgHgDIgEgCIgBgCIAAgBIgBgCIAAgCIABgEIACgBIADABIAHAEIAKADQAGACAGAAQAFAAAGgCQAFgCAEgDQADgDACgFQACgFAAgFQAAgGgCgFQgDgEgEgEQgFgDgGgCQgFgCgHAAIgNAAIgBAAIgBgBIgBgCIAAAAIAAgCIABgCIABgBIABAAIALAAQAHAAAEgCQAFgCAEgDQAEgEACgFQACgFAAgGIgBgIIgEgHQgDgDgEgBQgFgCgDAAQgGAAgFACIgJAEIgGAEIgDABIgBAAIgBgBIgBgBIAAgDIAAgCIABgBIAAgCIACgBIADgDIAHgDIAJgDIALgBQAGAAAHACQAGACAEAFQAFAEACAFQACAGAAAGQAAAGgCAGIgFAJQgDAEgEADQgFACgGABIAAABQAHAAAFABQAGACAEAEQAEAEACAGQADAFAAAGQAAAIgDAHQgDAHgFAFQgFAFgIADQgIACgJAAIgLgBg");
	this.shape_3.setTransform(6.9,14.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4FFFF").s().p("AATA/IgDAAIgCAAIgBgBIAAgBIAAgdIg1AAIgBAAIgBgBIgBgBIAAgDIAAgCIABgCIAAgCIABgCIAvhOIABgCIACgBIACAAIAEAAIAEAAIADABIACAAIABACIAABRIAPAAIAEABIAAAEIAAAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgPAAIAAAdIAAABIgCABIgCAAIgCAAgAgfAWIAsAAIAAhJIgBAAg");
	this.shape_4.setTransform(7,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4FFFF").s().p("AgQA/IgJgDIgHgCIgDgBIgCgBIAAgCIAAgCIgBgCIABgCIAAgBIABgBIABgBIADACIAGACIAJADQAFABAHAAQAGAAAFgCQAHgBAEgEQAEgDACgGQADgGAAgIQAAgHgCgFQgCgFgEgDQgFgDgHgBQgGgCgHAAIgKABIgIABIgEgBIgBgFIAAgyQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIA0AAIABABIABABIAAACIABACIgBADQAAABgBAAQAAABAAAAQAAAAgBAAQAAABAAAAIgvAAIAAAnIAHAAIAJAAQAJAAAIACQAJADAFAFQAGACACAHQACAHABAIQAAAJgDAJQgEAHgGAFQgGAGgJADQgIADgIAAIgLgBg");
	this.shape_5.setTransform(6.9,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F4FFFF").s().p("AgNA/QgGgCgFgEIgHgJQgDgFgBgHIgDgOIgBgSIABgPQABgIACgIQADgIAEgGQAEgHAFgFQAGgFAIgCQAFgDALAAIAHAAIAHABIAFACIADACIABABIAAABIABABIAAACIAAACIAAABIgBABIgBAAIgEAAIgEgCIgHgBIgJgBQgJAAgGAEQgGAEgFAHQgFAHgCAJQgDAJABAKIAGgDIAHgDIAIgCIAIgBQALAAAGADQAIADAEAFQAEADACAHQACAGAAAIQAAAHgDAIQgCAHgFAGQgFAGgIAEQgIADgJAAQgIAAgFgBgAgFgBIgIABIgHACIgGAEQAAANABAKQACAJAEAGQADAFAGADQAEACAGAAQAHAAAFgCQAFgDAEgFQADgEACgGIABgKQABgGgCgGQgBgFgDgDQgDgEgFAAQgFgCgIAAIgGABg");
	this.shape_6.setTransform(7.2,14.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F4FFFF").s().p("AgPA/IgDAAIgDgBIAAgBIABgDIAvhtIg+AAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgEIAAgCIABgBIABgBIACgBIBHAAIABABIACABIAAABIABACIAAADIgBACIAAACIgBACIgtBsIgBACIgCABIgCAAIgDAAg");
	this.shape_7.setTransform(7.1,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F4FFFF").s().p("AgQA+QgIgCgFgDQgFgEgDgGQgDgGAAgHQAAgHACgFQADgFAEgEIAJgIIANgFIgLgHIgJgHIgFgJQgBgEAAgGQAAgGACgFQACgGAFgEQAFgEAHgDQAHgCAHAAQAKAAAGACQAHACAEAEQAFAEACAFQACAFAAAGIgCAKIgEAJIgJAIQgFAEgGADIANAFIAKAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgFAEgJACQgHACgJAAQgJAAgHgCgAgMAKIgIAGQgEAEgCAEQgCAEAAAEQABALAHAGQAIAFAMAAQAOAAAIgFQAGgGABgKQgBgFgCgEQgBgEgEgEQgEgDgFgDIgMgHIgMAHgAgRgwQgFAFAAAKQAAAEABADQABAEADADIAIAHIAJAGQALgGAHgGQAGgHAAgJQAAgEgCgEQgBgDgEgDQgDgDgEgBQgEgBgGAAQgLAAgGAFg");
	this.shape_8.setTransform(7.1,14.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4FFFF").s().p("AgTBAIgIgBIgEgCIgEgCIgBgCIAAgDIAAgCIAAgCIABAAIABgBIADABIAFACIAHABIAJABQAKAAAGgEQAHgEAFgHQAEgGADgJQACgJAAgKIgMAFQgJADgHAAQgMAAgGgDQgIgDgEgFQgEgDgCgHQgCgHAAgHQAAgIACgHQADgIAFgFQAEgGAIgEQAIgDAJAAQAHAAAHACQAFACAFADQAEAEADAGQADAFACAHIADAOIABARIgBAPIgEAQQgCAIgEAGQgEAHgGAFQgGAFgIADQgGACgKAAIgIAAgAgMgzQgFADgDAEQgDAFgCAFQgBAFgBAGQABAGABAFQABAFADAEQADADAGABQAEACAIAAQAGAAAIgCQAIgBAFgEQAAgNgCgKQgCgJgDgGQgEgGgFgDQgFgCgGAAQgHAAgFACg");
	this.shape_9.setTransform(7,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.4,28.4);


(lib._10s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape.setTransform(7.1,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAgA/Ig+AAIgBAAIgCgBIAAgCIgBgCIABgCIAAgCIACgBIABAAIAcAAIAAhlIgbAQIgCABIgCAAIgBgCIAAgDIAAgCIAAgBIABgCIACgBIAegTIAAgBIABAAIAAAAIACAAIADAAIABAAIABABIABACIAABwIAYAAIABAAIABABIABACIAAACIAAACIgBACIgBABIgBAAg");
	this.shape_1.setTransform(7.4,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggBAIgCgBIgCAAIAAgCIgBgDIAAgCIABgCIABgBIABgCIAagcIAOgSIAIgMQADgHABgFIABgKQAAgEgCgFQgBgEgDgDQgDgDgEgCQgFgCgDAAQgHAAgEABIgJAEIgGAEIgDACIgBgBIgCAAIAAgCIAAgCIAAgCIAAgCIABgBIACgBIADgDIAHgEIAJgCIALgBQAGAAAHACQAHADAEAEQAEAFADAGQACAFAAAHIgBAMQgBAGgEAHIgKAOQgGAIgKALIgWAZIA4AAIABAAIABABIACACIAAACIAAADIgCABIgBABIgBABg");
	this.shape_2.setTransform(7.1,14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOA/IgKgCIgHgDIgEgCIgBgCIAAgBIgBgCIAAgCIABgEIACgBIADABIAHAEIAKADQAGACAGAAQAFAAAGgCQAFgCAEgDQADgDACgFQACgFAAgFQAAgGgCgFQgDgEgEgEQgFgDgGgCQgFgCgHAAIgNAAIgBAAIgBgBIgBgCIAAAAIAAgCIABgCIABgBIABAAIALAAQAHAAAEgCQAFgCAEgDQAEgEACgFQACgFAAgGIgBgIIgEgHQgDgDgEgBQgFgCgDAAQgGAAgFACIgJAEIgGAEIgDABIgBAAIgBgBIgBgBIAAgDIAAgCIABgBIAAgCIACgBIADgDIAHgDIAJgDIALgBQAGAAAHACQAGACAEAFQAFAEACAFQACAGAAAGQAAAGgCAGIgFAJQgDAEgEADQgFACgGABIAAABQAHAAAFABQAGACAEAEQAEAEACAGQADAFAAAGQAAAIgDAHQgDAHgFAFQgFAFgIADQgIACgJAAIgLgBg");
	this.shape_3.setTransform(6.9,14.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AATA/IgDAAIgCAAIgBgBIAAgBIAAgdIg1AAIgBAAIgBgBIgBgBIAAgDIAAgCIABgCIAAgCIABgCIAvhOIABgCIACgBIACAAIAEAAIAEAAIADABIACAAIABACIAABRIAPAAIAEABIAAAEIAAAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgPAAIAAAdIAAABIgCABIgCAAIgCAAgAgfAWIAsAAIAAhJIgBAAg");
	this.shape_4.setTransform(7,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQA/IgJgDIgHgCIgDgBIgCgBIAAgCIAAgCIgBgCIABgCIAAgBIABgBIABgBIADACIAGACIAJADQAFABAHAAQAGAAAFgCQAHgBAEgEQAEgDACgGQADgGAAgIQAAgHgCgFQgCgFgEgDQgFgDgHgBQgGgCgHAAIgKABIgIABIgEgBIgBgFIAAgyQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIA0AAIABABIABABIAAACIABACIgBADQAAABgBAAQAAABAAAAQAAAAgBAAQAAABAAAAIgvAAIAAAnIAHAAIAJAAQAJAAAIACQAJADAFAFQAGACACAHQACAHABAIQAAAJgDAJQgEAHgGAFQgGAGgJADQgIADgIAAIgLgBg");
	this.shape_5.setTransform(6.9,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNA/QgGgCgFgEIgHgJQgDgFgBgHIgDgOIgBgSIABgPQABgIACgIQADgIAEgGQAEgHAFgFQAGgFAIgCQAFgDALAAIAHAAIAHABIAFACIADACIABABIAAABIABABIAAACIAAACIAAABIgBABIgBAAIgEAAIgEgCIgHgBIgJgBQgJAAgGAEQgGAEgFAHQgFAHgCAJQgDAJABAKIAGgDIAHgDIAIgCIAIgBQALAAAGADQAIADAEAFQAEADACAHQACAGAAAIQAAAHgDAIQgCAHgFAGQgFAGgIAEQgIADgJAAQgIAAgFgBgAgFgBIgIABIgHACIgGAEQAAANABAKQACAJAEAGQADAFAGADQAEACAGAAQAHAAAFgCQAFgDAEgFQADgEACgGIABgKQABgGgCgGQgBgFgDgDQgDgEgFAAQgFgCgIAAIgGABg");
	this.shape_6.setTransform(7.2,14.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPA/IgDAAIgDgBIAAgBIABgDIAvhtIg+AAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgEIAAgCIABgBIABgBIACgBIBHAAIABABIACABIAAABIABACIAAADIgBACIAAACIgBACIgtBsIgBACIgCABIgCAAIgDAAg");
	this.shape_7.setTransform(7.1,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQA+QgIgCgFgDQgFgEgDgGQgDgGAAgHQAAgHACgFQADgFAEgEIAJgIIANgFIgLgHIgJgHIgFgJQgBgEAAgGQAAgGACgFQACgGAFgEQAFgEAHgDQAHgCAHAAQAKAAAGACQAHACAEAEQAFAEACAFQACAFAAAGIgCAKIgEAJIgJAIQgFAEgGADIANAFIAKAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgFAEgJACQgHACgJAAQgJAAgHgCgAgMAKIgIAGQgEAEgCAEQgCAEAAAEQABALAHAGQAIAFAMAAQAOAAAIgFQAGgGABgKQgBgFgCgEQgBgEgEgEQgEgDgFgDIgMgHIgMAHgAgRgwQgFAFAAAKQAAAEABADQABAEADADIAIAHIAJAGQALgGAHgGQAGgHAAgJQAAgEgCgEQgBgDgEgDQgDgDgEgBQgEgBgGAAQgLAAgGAFg");
	this.shape_8.setTransform(7.1,14.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTBAIgIgBIgEgCIgEgCIgBgCIAAgDIAAgCIAAgCIABAAIABgBIADABIAFACIAHABIAJABQAKAAAGgEQAHgEAFgHQAEgGADgJQACgJAAgKIgMAFQgJADgHAAQgMAAgGgDQgIgDgEgFQgEgDgCgHQgCgHAAgHQAAgIACgHQADgIAFgFQAEgGAIgEQAIgDAJAAQAHAAAHACQAFACAFADQAEAEADAGQADAFACAHIADAOIABARIgBAPIgEAQQgCAIgEAGQgEAHgGAFQgGAFgIADQgGACgKAAIgIAAgAgMgzQgFADgDAEQgDAFgCAFQgBAFgBAGQABAGABAFQABAFADAEQADADAGABQAEACAIAAQAGAAAIgCQAIgBAFgEQAAgNgCgKQgCgJgDgGQgEgGgFgDQgFgCgGAAQgHAAgFACg");
	this.shape_9.setTransform(7,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},35).to({state:[{t:this.shape_2}]},37).to({state:[{t:this.shape_3}]},36).to({state:[{t:this.shape_4}]},37).to({state:[{t:this.shape_5}]},36).to({state:[{t:this.shape_6}]},37).to({state:[{t:this.shape_7}]},36).to({state:[{t:this.shape_8}]},37).to({state:[{t:this.shape_9}]},37).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.4,28.4);


(lib._00001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape.setTransform(7.1,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAgA/Ig+AAIgBAAIgCgBIAAgCIgBgCIABgCIAAgCIACgBIABAAIAcAAIAAhlIgbAQIgCABIgCAAIgBgCIAAgDIAAgCIAAgBIABgCIACgBIAegTIAAgBIABAAIAAAAIACAAIADAAIABAAIABABIABACIAABwIAYAAIABAAIABABIABACIAAACIAAACIgBACIgBABIgBAAg");
	this.shape_1.setTransform(7.4,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggBAIgCgBIgCAAIAAgCIgBgDIAAgCIABgCIABgBIABgCIAagcIAOgSIAIgMQADgHABgFIABgKQAAgEgCgFQgBgEgDgDQgDgDgEgCQgFgCgDAAQgHAAgEABIgJAEIgGAEIgDACIgBgBIgCAAIAAgCIAAgCIAAgCIAAgCIABgBIACgBIADgDIAHgEIAJgCIALgBQAGAAAHACQAHADAEAEQAEAFADAGQACAFAAAHIgBAMQgBAGgEAHIgKAOQgGAIgKALIgWAZIA4AAIABAAIABABIACACIAAACIAAADIgCABIgBABIgBABg");
	this.shape_2.setTransform(7.1,14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOA/IgKgCIgHgDIgEgCIgBgCIAAgBIgBgCIAAgCIABgEIACgBIADABIAHAEIAKADQAGACAGAAQAFAAAGgCQAFgCAEgDQADgDACgFQACgFAAgFQAAgGgCgFQgDgEgEgEQgFgDgGgCQgFgCgHAAIgNAAIgBAAIgBgBIgBgCIAAAAIAAgCIABgCIABgBIABAAIALAAQAHAAAEgCQAFgCAEgDQAEgEACgFQACgFAAgGIgBgIIgEgHQgDgDgEgBQgFgCgDAAQgGAAgFACIgJAEIgGAEIgDABIgBAAIgBgBIgBgBIAAgDIAAgCIABgBIAAgCIACgBIADgDIAHgDIAJgDIALgBQAGAAAHACQAGACAEAFQAFAEACAFQACAGAAAGQAAAGgCAGIgFAJQgDAEgEADQgFACgGABIAAABQAHAAAFABQAGACAEAEQAEAEACAGQADAFAAAGQAAAIgDAHQgDAHgFAFQgFAFgIADQgIACgJAAIgLgBg");
	this.shape_3.setTransform(6.9,14.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AATA/IgDAAIgCAAIgBgBIAAgBIAAgdIg1AAIgBAAIgBgBIgBgBIAAgDIAAgCIABgCIAAgCIABgCIAvhOIABgCIACgBIACAAIAEAAIAEAAIADABIACAAIABACIAABRIAPAAIAEABIAAAEIAAAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgPAAIAAAdIAAABIgCABIgCAAIgCAAgAgfAWIAsAAIAAhJIgBAAg");
	this.shape_4.setTransform(7,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQA/IgJgDIgHgCIgDgBIgCgBIAAgCIAAgCIgBgCIABgCIAAgBIABgBIABgBIADACIAGACIAJADQAFABAHAAQAGAAAFgCQAHgBAEgEQAEgDACgGQADgGAAgIQAAgHgCgFQgCgFgEgDQgFgDgHgBQgGgCgHAAIgKABIgIABIgEgBIgBgFIAAgyQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIA0AAIABABIABABIAAACIABACIgBADQAAABgBAAQAAABAAAAQAAAAgBAAQAAABAAAAIgvAAIAAAnIAHAAIAJAAQAJAAAIACQAJADAFAFQAGACACAHQACAHABAIQAAAJgDAJQgEAHgGAFQgGAGgJADQgIADgIAAIgLgBg");
	this.shape_5.setTransform(6.9,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNA/QgGgCgFgEIgHgJQgDgFgBgHIgDgOIgBgSIABgPQABgIACgIQADgIAEgGQAEgHAFgFQAGgFAIgCQAFgDALAAIAHAAIAHABIAFACIADACIABABIAAABIABABIAAACIAAACIAAABIgBABIgBAAIgEAAIgEgCIgHgBIgJgBQgJAAgGAEQgGAEgFAHQgFAHgCAJQgDAJABAKIAGgDIAHgDIAIgCIAIgBQALAAAGADQAIADAEAFQAEADACAHQACAGAAAIQAAAHgDAIQgCAHgFAGQgFAGgIAEQgIADgJAAQgIAAgFgBgAgFgBIgIABIgHACIgGAEQAAANABAKQACAJAEAGQADAFAGADQAEACAGAAQAHAAAFgCQAFgDAEgFQADgEACgGIABgKQABgGgCgGQgBgFgDgDQgDgEgFAAQgFgCgIAAIgGABg");
	this.shape_6.setTransform(7.2,14.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPA/IgDAAIgDgBIAAgBIABgDIAvhtIg+AAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgEIAAgCIABgBIABgBIACgBIBHAAIABABIACABIAAABIABACIAAADIgBACIAAACIgBACIgtBsIgBACIgCABIgCAAIgDAAg");
	this.shape_7.setTransform(7.1,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQA+QgIgCgFgDQgFgEgDgGQgDgGAAgHQAAgHACgFQADgFAEgEIAJgIIANgFIgLgHIgJgHIgFgJQgBgEAAgGQAAgGACgFQACgGAFgEQAFgEAHgDQAHgCAHAAQAKAAAGACQAHACAEAEQAFAEACAFQACAFAAAGIgCAKIgEAJIgJAIQgFAEgGADIANAFIAKAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgFAEgJACQgHACgJAAQgJAAgHgCgAgMAKIgIAGQgEAEgCAEQgCAEAAAEQABALAHAGQAIAFAMAAQAOAAAIgFQAGgGABgKQgBgFgCgEQgBgEgEgEQgEgDgFgDIgMgHIgMAHgAgRgwQgFAFAAAKQAAAEABADQABAEADADIAIAHIAJAGQALgGAHgGQAGgHAAgJQAAgEgCgEQgBgDgEgDQgDgDgEgBQgEgBgGAAQgLAAgGAFg");
	this.shape_8.setTransform(7.1,14.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTBAIgIgBIgEgCIgEgCIgBgCIAAgDIAAgCIAAgCIABAAIABgBIADABIAFACIAHABIAJABQAKAAAGgEQAHgEAFgHQAEgGADgJQACgJAAgKIgMAFQgJADgHAAQgMAAgGgDQgIgDgEgFQgEgDgCgHQgCgHAAgHQAAgIACgHQADgIAFgFQAEgGAIgEQAIgDAJAAQAHAAAHACQAFACAFADQAEAEADAGQADAFACAHIADAOIABARIgBAPIgEAQQgCAIgEAGQgEAHgGAFQgGAFgIADQgGACgKAAIgIAAgAgMgzQgFADgDAEQgDAFgCAFQgBAFgBAGQABAGABAFQABAFADAEQADADAGABQAEACAIAAQAGAAAIgCQAIgBAFgEQAAgNgCgKQgCgJgDgGQgEgGgFgDQgFgCgGAAQgHAAgFACg");
	this.shape_9.setTransform(7,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.4,28.4);


(lib.yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yellowglow();
	this.instance.setTransform(15.3,7,1,1,0,0,0,15.3,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},24).to({alpha:1},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.6,14.2);


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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5531).call(this.frame_5531).wait(6744));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnmH0IAAvnIPNAAIAAPng");
	mask.setTransform(-500.9,-20401);

	// Layer 4
	this.instance = new lib.spake();
	this.instance.setTransform(-522.8,-20352.7,1,1,-45.4,0,0,1.8,63.4);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:63.3,rotation:-0.4,x:-522.6},1020).wait(11255));

	// Layer 30
	this.instance_1 = new lib.red_box();
	this.instance_1.setTransform(325.3,-19959.3,0.022,1,0,0,0,0,7.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1020).to({_off:false},0).to({scaleX:1,x:326.3},1746).to({_off:true},8297).wait(1212));

	// Layer 29
	this.instance_2 = new lib.blue_box();
	this.instance_2.setTransform(325.3,-19880.6,0.022,1,0,0,0,0,7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1020).to({_off:false},0).to({regY:7.1,scaleX:1,x:326.3,y:-19880.5},1746).to({_off:true},8297).wait(1212));

	// blue_up
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgULIIAA2PIApAAIAAWPg");
	this.shape.setTransform(583.5,-20014.7);

	this.instance_3 = new lib.blue_up();
	this.instance_3.setTransform(583.5,-19943.4,1,1,0,0,0,0,142.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance_3}]},1020).to({state:[{t:this.instance_3}]},1746).to({state:[{t:this.instance_3}]},2765).to({state:[]},1).wait(6743));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1020).to({_off:false},0).to({scaleY:1.13,x:572.7,y:-19943.5},1746).to({scaleY:1.34,x:555.5,y:-19943.4},2765).to({_off:true},1).wait(6743));

	// blue_wide
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AtwDhIAAgrIWSAAQBeAAAzgJQA4gLAfgbQA8g6AAi5IAAh0IArAAIAAB0QAADShLBAQgmAjhFANQg1ALhkAAg");
	this.shape_1.setTransform(497.5,-19920.9);

	this.instance_4 = new lib.blue_wide();
	this.instance_4.setTransform(497.8,-19922,1,1,0,0,0,88.4,21.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.instance_4}]},1020).to({state:[{t:this.instance_4}]},4511).to({state:[]},1).wait(6743));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1020).to({_off:false},0).to({x:469.8},4511).to({_off:true},1).wait(6743));

	// blue
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4.3).p("A6YDTQABgaAAiTQAAhtA6hAQBFhLCNAAMAw5AAA");
	this.shape_2.setTransform(238.3,-19879.4);

	this.instance_5 = new lib.blueline1();
	this.instance_5.setTransform(239.3,-19883.1,1,1,0,0,0,170,17.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.instance_5}]},1020).to({state:[{t:this.instance_5}]},4511).to({state:[]},1).wait(6743));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1020).to({_off:false},0).wait(4511).to({_off:true},1).wait(6743));

	// red_up
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(4.3).p("AAAHKIAAuT");
	this.shape_3.setTransform(507.5,-20033.1);

	this.instance_6 = new lib.red_up();
	this.instance_6.setTransform(507.5,-20017.9,1,1,0,0,0,0,30.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.instance_6}]},1020).to({state:[{t:this.instance_6}]},4511).to({state:[]},1).wait(6743));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1020).to({_off:false},0).wait(4511).to({_off:true},1).wait(6743));

	// red
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(4.3).p("EglGAKGIAApKQAAhwBBg5QBFg+CTAAMBA7AAAQBhAAA0gKQA/gMAigfQBEg9AAjHIAAig");
	this.shape_4.setTransform(269.9,-19922.8);

	this.instance_7 = new lib.redline1();
	this.instance_7.setTransform(271.2,-19922.8,1,1,0,0,0,238.9,64.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.instance_7}]},1020).to({state:[{t:this.instance_7}]},4511).to({state:[]},1).wait(6743));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1020).to({_off:false},0).wait(4511).to({_off:true},1).wait(6743));

	// cylinder
	this.instance_8 = new lib.cylinder_1();
	this.instance_8.setTransform(507.4,-20076.2,1,1,0,0,0,5,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1020).to({scaleX:1,scaleY:1,rotation:-18.3},1746,cjs.Ease.get(-0.5)).to({scaleX:1,scaleY:1,rotation:-33.8,x:507.5,y:-20075.8},1342).to({regX:4.9,scaleX:1,scaleY:1,rotation:-47.5,x:507.4,y:-20076.2},1423).to({_off:true},1).wait(6743));

	// king
	this.instance_9 = new lib.king_1();
	this.instance_9.setTransform(637.4,-20148.3,1,1,0,0,0,214.5,275.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5531).to({_off:true},1).wait(6743));

	// winch
	this.instance_10 = new lib.winch_1();
	this.instance_10.setTransform(470.4,-20126.3,1,1,0,0,0,8.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(5531).to({_off:true},1).wait(6743));

	// boom
	this.instance_11 = new lib.boom_1();
	this.instance_11.setTransform(480.3,-20120.6,1,1,0,0,0,12.4,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1020).to({scaleX:1,scaleY:1,rotation:-17.3},1746,cjs.Ease.get(-0.5)).to({scaleX:1,scaleY:1,rotation:-45,x:480.2},2765).to({_off:true},1).wait(6743));

	// cyl fill
	this.instance_12 = new lib.cylinder_fill();
	this.instance_12.setTransform(571.7,-20083.3,0.337,1,-4.2,0,0,-0.1,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1020).to({regX:0,regY:2.1,scaleX:0.53,scaleY:1,rotation:-21.6,x:564,y:-20103.1},1746,cjs.Ease.get(-0.5)).to({regX:0.1,regY:2.3,scaleX:0.67,scaleY:1,rotation:-37.6,x:563,y:-20122.7},1342).to({regY:2.2,scaleX:0.83,scaleY:1,rotation:-49.2,x:552,y:-20135.7},1423).to({_off:true},1).wait(6743));

	// Layer 13 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A1NFnIAArNMAqbAAAIAALNg");
	mask_1.setTransform(50,-19820.2);

	// Layer 11
	this.instance_13 = new lib.arrows();
	this.instance_13.setTransform(52.1,-19821,1,1,0,0,0,115.8,38.5);

	this.instance_13.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1019).to({x:-39.7},1747).to({_off:true},2766).wait(6743));

	// TXT
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4FFFF").s().p("AgJAXIgCAAIgBgBIgBAAIABgBIAMgZIAAgLIAAgDIABgDIACAAIAEgBIADABIACAAIABADIABADIAAAFIgBAEIgCAEIgCACIgMAVIgBABIgBAAIgCABIgCAAg");
	this.shape_5.setTransform(-736.4,-20167.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F4FFFF").s().p("AgsBCIgCAAIgCgBIAAgBIABgCIBUh+IABgBIACAAIABgBIADAAIACABIACABIAAABIgBACIhUB9IgBABIgCABIgBAAIgDAAgAAZA+QgFgCgDgEQgEgEgBgHQgCgGAAgHQAAgIACgGQABgGAEgEQADgFAFgCQAFgBAGAAQAIAAAFABQAFACADAFQADAEABAGIABANQAAAHgBAHQgCAGgDAEQgEAEgEADQgFADgHgBQgHABgEgDgAAdAJQgDABgBAEQgCACgBAFIgBAKQAAAHABAEQABAFACADQACADADABIAHABQAEAAADgBQADgCACgEIACgHIABgJIgBgLIgDgHQgCgDgDgBQgDgDgEAAQgEAAgDACgAgvAAQgFgBgDgEQgDgFgCgGQgBgFAAgJQAAgHABgGQACgGADgEQADgFAFgCQAFgDAHAAQAHAAAFADQAFADADAEQADAEABAGQACAHAAAGQAAAIgCAFQgCAHgDAEQgDAEgFACQgFABgHAAQgGAAgFgBgAgqg0QgDACgCACIgDAHIgBAKIABANIADAHIAFAEIAHABQAFAAACgCIAFgEIACgIIABgKIgBgKQgBgEgCgDQgBgEgDgBQgDgBgFAAQgDgBgDACg");
	this.shape_6.setTransform(-709.2,-20242.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F4FFFF").s().p("AgsBDIgCAAIgCgCIAAgBIABgCIBUh+IABgBIACAAIABgBIADAAIACABIACABIAAACIgBABIhUB9IgBABIgCABIgBABIgDAAgAAZA+QgFgCgDgEQgEgEgBgGQgCgHAAgHQAAgIACgGQABgFAEgFQADgFAFgCQAFgBAGAAQAIAAAFABQAFACADAFQADAFABAFIABANQAAAHgBAHQgCAGgDAEQgEAEgEADQgFACgHAAQgHAAgEgCgAAdAJQgDABgBADIgDAIIgBAKQAAAHABAEQABAFACADQACADADABIAHABQAEAAADgCQADgBACgEIACgHIABgJIgBgKIgDgIQgCgDgDgCQgDgBgEgBQgEABgDABgAgvAAQgFgBgDgEQgDgEgCgHQgBgGAAgIQAAgHABgGQACgGADgFQADgEAFgCQAFgDAHABQAHgBAFADQAFACADAFQADAEABAHQACAGAAAGQAAAHgCAGQgCAGgDAFQgDAEgFACQgFABgHAAQgGAAgFgBgAgqg0QgDABgCADIgDAHIgBAKIABAMIADAIQACADADABIAHABQAFAAACgBIAFgGIACgHIABgKIgBgKIgDgHQgBgEgDgBQgDgBgFgBQgDABgDABg");
	this.shape_7.setTransform(-709.2,-20208);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F4FFFF").s().p("AAbBEIgDAAIgCgBIgCgBIgBgBIgngyIAAAyIgBABIgBABIgBABIgDAAIgDAAIgCgBIgBgBIAAgBIAAiBIAAgBIABgBIACgBIADAAIADAAIABABIABABIABABIAABPIAigkIACgBIACgBIACAAIADgBIADAAIACABIABABIAAABIAAACIgCACIgiAfIAmAvIABADIABABIAAABIgBABIgCABIgDAAg");
	this.shape_8.setTransform(-836.1,-20242.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4FFFF").s().p("AgLAsQgHgDgFgGQgFgGgCgIQgCgJAAgMQgBgLAEgJQADgJAFgGQAFgGAIgCQAHgDAFAAIAJABIAHACIAGADIAFADIABACIAAABIABACIAAACIgBAEIgBABIgEgCIgFgDQgDgDgEgBQgFgCgGAAQgLAAgHAKQgGAJAAARQAAAJABAHQACAHADAFQAEAEAFADQAFACAEAAQAGAAAFgCIAHgEIAGgEIADgCIABABIABABIABABIAAADIAAACIgBABIgBACIgBABIgEAEIgHADIgIADIgJAAQgHAAgHgDg");
	this.shape_9.setTransform(-845.2,-20240.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F4FFFF").s().p("AAABAIgBAAIgCgBIgBgBIAAgBIAAhWIAAgBIABgBIACAAIABgBIADABIABAAIABABIABABIAABWIgBABIgBABIgBABIgDAAgAgEgwQgCgCAAgFQAAgEACgCQABgCADAAQAEAAACACQABABAAAFQAAAFgBABQgCACgEAAQgDAAgBgBg");
	this.shape_10.setTransform(-851.8,-20242.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F4FFFF").s().p("AAMA7QgGgBgFgBQgCgCgEgEQgCgDgBgFQgCgGAAgIIAAg0IgOAAIgBgBIgBgFIAAgBIABgCIABgBIAAgBIAOAAIAAgVIAAgBIABgBIACgBIACAAIADAAIACABIAAABIAAABIAAAVIAYAAIABABIABABIABACIAAABIgBAFIgCABIgYAAIAAAzQAAAKACAFQAEAFAHABIAEgBIAEgBIACgBIACgBIABAAIABACIAAAAIAAADIAAADIgBACIgCACIgEAAIgEACIgEAAg");
	this.shape_11.setTransform(-857.4,-20241.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F4FFFF").s().p("AgKAvIgIgCIgFgDIgEgCIgBgCIAAgEIAAgCIAAgCIABgBIABAAIADABIAFADIAHADQAFABAFAAIAGgBIAHgDIAEgFQABgDAAgEQAAgEgCgDQgCgDgCgCIgHgDIgHgEIgIgCIgHgEQgEgDgCgFQgBgEAAgFIABgJQACgFAEgDQADgEAGgCQAFgCAGAAIAHAAIAGACIAFACIADABIABACIAAABIABABIAAACIAAACIgBACIAAABIgBAAIgDgBIgEgCIgGgCIgIgBIgGABIgGADIgDAEQgCADAAADQAAAEADADQABADAEACIAHAEIAHADIAIADIAHAEQAEADABAEQADAEAAAFQAAAHgDAFQgCAFgEADQgFAEgGACQgGABgGAAIgIAAg");
	this.shape_12.setTransform(-864.2,-20240.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F4FFFF").s().p("AgOBAIgCgBIAAgBIAAgCIAMggIgBgBIgBgBIgghUIAAgCIAAgCIACAAIADgBIAEABIABAAIACABIAAABIAaBLIAchLIABgCIACAAIADgBIAEABIABAAIAAACIAAACIghBWIgKAhIgCACIgFABIgDAAg");
	this.shape_13.setTransform(-872.2,-20238.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F4FFFF").s().p("AgSAsQgHgDgGgGQgFgGgCgJQgDgJAAgLQAAgIADgJQACgJAGgGQAFgHAIgEQAIgDAJAAQALAAAHADQAIADAFAGQAGAGACAJQADAJAAAKQAAAJgDAJQgDAJgFAHQgGAGgIAEQgIADgJAAQgKAAgIgDgAgMghQgGADgDAFQgEAFgCAHQgCAGAAAHQAAAHACAHQABAHAEAFQADAFAGADQAGADAHAAQAHAAAGgDQAGgDADgFQAEgFACgGQABgHAAgIIgBgNQgBgGgEgGQgDgFgGgDQgGgDgIAAQgGAAgGADg");
	this.shape_14.setTransform(-881.8,-20240.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F4FFFF").s().p("AgIA/IgFgBIgDgBIgDgCIAAgBIgBgBIAAgCIAAgCIAAgCIAAgCIABgBIABAAIACABIAEACIAEABIAFABIAFgBQACgBACgCQACgDAAgEIABgMIAAhaIAAgBIABgBIACgBIADAAIADAAIACABIABABIAAABIAABcQAAAHgBAGQgBAGgDAEQgDAEgFADQgFACgGAAIgFgBg");
	this.shape_15.setTransform(-891,-20242.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F4FFFF").s().p("AgNAsQgIgDgGgGQgFgGgDgJQgDgJAAgLQAAgJADgJQADgJAGgGQAFgHAIgDQAHgDAHAAQAKAAAHADQAHADAFAGQAEAGADAHQACAIAAAIIAAACQAAABAAABQgBABAAAAQAAAAAAAAQgBAAAAAAIgEABIg6AAQAAAIACAHQABAHAEAEQAEAFAGADQAFACAHAAIALgBIAJgCIAGgDIADgBIABABIABABIAAABIAAADIAAABIAAABIgBABIAAABIgDACIgHACIgJACIgMABQgIAAgIgDgAgJgiQgFADgEAEQgDAEgCAFQgCAGAAAGIA0AAQAAgOgHgIQgHgIgMAAQgFAAgFACg");
	this.shape_16.setTransform(-776.6,-20206.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F4FFFF").s().p("AAAAuIgBAAIgDAAIgBgBIgBgBIgghUIAAgCIgBAAIAAgBIABgBIABgBIABAAIADAAIAEAAIABAAIACABIAAABIAaBMIAAAAIAAAAIAchMIAAgBIABgBIACAAIADAAIADAAIACAAIAAABIAAABIAAABIAAAAIAAABIAAABIggBUIgBABIgCABIgBAAIgDAAg");
	this.shape_17.setTransform(-785.7,-20206.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F4FFFF").s().p("AAABEIgBAAIgCgBIgBgBIAAgBIAAiBIAAgBIABgBIACgBIABAAIACAAIACABIABABIAAABIAACBIAAABIgBABIgCABIgCAAg");
	this.shape_18.setTransform(-792.3,-20208.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F4FFFF").s().p("AgPAuQgGgCgEgEQgDgDgDgFQgBgFAAgFQgBgIAEgFQACgGAGgDQAGgCAHgCQAIgBAIAAIAOAAIAAgIIgBgKQgBgEgDgDQgDgDgDgCQgFgBgGAAQgEAAgEABIgJADIgFAEIgEABIgBAAIgBgBIAAgBIgBgCIABgEIACgCIAEgDIAHgDIAIgCIAIgBQAJAAAGACQAHACADAEQAFAEABAGQABAGAAAIIAAA6IAAABIgBABIgDAAIgDAAIgCgBIgBgBIAAgKQgGAGgGAEQgIADgGAAQgHAAgFgBgAgEADQgGACgDACIgFAGQgCADAAAFQAAAHAFAFQAEAEAKAAQAEAAAGgDQAHgEAGgHIAAgVIgQAAIgKABg");
	this.shape_19.setTransform(-799.5,-20206.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F4FFFF").s().p("AAAAuIgCAAIgBAAIgCgBIgBgBIgghUIAAgCIAAAAIAAgBIAAgBIABgBIACAAIACAAIADAAIADAAIAAABIABABIAaBMIAAAAIAAAAIAbhMIABgBIABgBIACAAIADAAIADAAIABAAIACABIAAABIAAABIAAAAIgBABIAAABIggBUIgBABIgBABIgDAAIgCAAg");
	this.shape_20.setTransform(-808,-20206.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F4FFFF").s().p("AgFAHQgCgCAAgFQAAgEACgCQACgCADAAQAEAAACACQACACAAAEQAAAFgCACQgCACgEAAQgEAAgBgCg");
	this.shape_21.setTransform(-819.4,-20202.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F4FFFF").s().p("AgfBAIgDAAIgCAAIgBgBIAAgBIAAh6IAAgBIABgBIACAAIACAAIACAAIACAAIABABIAAABIAAANIAIgHIAHgFIAJgDIAGgBQAJAAAHAEQAGADAFAGQAEAHACAIQACAJAAAJQAAAMgDAHQgCAJgFAGQgFAGgHAEQgHADgJAAIgGAAIgGgDIgHgEIgHgHIAAAuIAAABIgBABIgCAAIgCAAgAgDg0IgHADIgHAGIgJAJIAAAkQAIAJAGAFQAHAEAFAAQAHAAAFgDQAFgDADgFQADgGABgEIACgOQAAgHgCgHQAAgHgEgFQgCgGgFgDQgEgDgHAAIgFABg");
	this.shape_22.setTransform(-826.7,-20204.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F4FFFF").s().p("AgSAsQgHgDgGgGQgFgGgCgJQgDgJAAgLQAAgIADgJQACgJAGgGQAFgHAIgEQAIgDAJAAQALAAAHADQAIADAFAGQAGAGACAJQADAJAAAKQAAAJgDAJQgDAJgFAHQgGAGgIAEQgIADgJAAQgKAAgIgDgAgMghQgGADgDAFQgEAFgCAHQgCAGAAAHQAAAHACAHQABAHAEAFQADAFAGADQAGADAHAAQAHAAAGgDQAGgDADgFQAEgFACgGQABgHAAgIIgBgNQgBgGgEgGQgDgFgGgDQgGgDgIAAQgGAAgGADg");
	this.shape_23.setTransform(-837.4,-20206.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F4FFFF").s().p("AgSAvIgCAAIgCgBIgBgBIAAgBIAAhWIAAgBIABgBIACAAIACgBIADABIACAAIABABIAAABIAAAOIAHgJQADgEACgBIAFgDIAGgBIADABIADAAIAEABIABABIABABIABABIAAABIAAACIAAADIAAACIgBABIgBAAIgCgBIgDAAIgDgBIgEgBIgGABIgEAEIgFAGIgHALIAAA5IAAABIAAABIgDABIgDAAg");
	this.shape_24.setTransform(-845,-20206.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F4FFFF").s().p("AgfBAIgDAAIgCAAIgBgBIAAgBIAAh6IAAgBIABgBIACAAIACAAIACAAIACAAIABABIAAABIAAANIAIgHIAHgFIAJgDIAFgBQAKAAAHAEQAGADAFAGQAEAHACAIQACAJAAAJQAAAMgDAHQgCAJgFAGQgFAGgHAEQgHADgJAAIgGAAIgGgDIgHgEIgHgHIAAAuIAAABIgBABIgBAAIgDAAgAgDg0IgHADIgHAGIgJAJIAAAkQAIAJAGAFQAHAEAFAAQAHAAAFgDQAFgDADgFQADgGABgEIACgOQAAgHgCgHQAAgHgEgFQgCgGgFgDQgEgDgHAAIgFABg");
	this.shape_25.setTransform(-854,-20204.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F4FFFF").s().p("AgTAEIgCgBIgBgDIABgCIACgCIAnAAIABABIABABIABABIAAABIgBADIgCABg");
	this.shape_26.setTransform(-862.6,-20206.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F4FFFF").s().p("AggA/QgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIAAhwQAAgEACgBQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAbAAQAJAAAHADQAGACAFAEQAEAEADAGQABAGAAAHIgBAJIgDAHIgEAHQgEADgEACQAFABAEABQAFACAEAEQADAEACAGQACAFAAAGQAAAGgBAFQgCAFgDADIgFAHIgIAGIgKADIgKABgAgaA0IAaAAQAGAAAEgBQAFgCADgDQAEgDACgEQACgFAAgGQAAgGgCgFQgCgEgEgEQgDgDgHgCQgFgBgHAAIgWAAgAgagGIAWAAQAFAAAEgCQAEgBADgEQADgDABgEQACgEAAgFQAAgFgCgEQgBgEgDgDQgDgDgFgBQgEgCgHAAIgTAAg");
	this.shape_27.setTransform(-870.5,-20208);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F4FFFF").s().p("AA8A/IgDAAIgCAAIgBgCIgBgBIAAhwIgxBxIgBABIgBABIgBAAIgBAAIgCAAIgCAAIgBgBIgBgBIguhxIAABwIgBABIgBACIgCAAIgDAAIgDAAIgBAAIgBgCIgBgBIAAhzQAAgEACgBQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIAHAAIADAAIAEADIADABIABAEIApBjIAAAAIArhjIACgEIACgCIADgCIADAAIAHAAIACAAIACACIABABIAAAEIAABzIAAABIgBACIgBAAIgDAAg");
	this.shape_28.setTransform(-884.8,-20208);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F4FFFF").s().p("AgNAsQgIgDgGgGQgFgGgDgJQgDgJAAgLQAAgJADgJQADgJAGgGQAFgHAIgDQAHgDAHAAQAKAAAHADQAHADAFAGQAEAGADAHQACAIAAAIIAAACQAAABAAABQAAABgBAAQAAAAAAAAQgBAAAAAAIgEABIg6AAQAAAIACAHQABAHAEAEQAEAFAGADQAFACAHAAIALgBIAJgCIAGgDIADgBIABABIABABIAAABIAAADIAAABIAAABIgBABIAAABIgDACIgHACIgJACIgMABQgIAAgIgDgAgJgiQgFADgEAEQgDAEgCAFQgCAGAAAGIA0AAQAAgOgHgIQgHgIgMAAQgFAAgFACg");
	this.shape_29.setTransform(-821,-20172.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F4FFFF").s().p("AAABEIgBAAIgCgBIgBgBIAAgBIAAiBIAAgBIABgBIACgBIABAAIACAAIACABIABABIAAABIAACBIAAABIgBABIgCABIgCAAg");
	this.shape_30.setTransform(-828.1,-20174.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F4FFFF").s().p("AgSA/QgHgCgFgDQgFgEgCgEQgCgEAAgFIABgHQABgDACgCIAEgGIAFgFQgFgCgCgEQgDgEAAgEQAAgEADgEIAFgJQgDgDgBgFQgCgEAAgGQAAgIADgGQACgGAFgEQAEgEAGgCQAGgCAHAAIAGAAIAGABIAaAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABADIgBAEIgCABIgOAAQAEAEACAFQABAFAAAGQAAAHgCAGQgDAGgEAEQgEAEgHACQgGACgFAAQgGAAgFgBQgGgCgDgCIgDAEQgBACAAACQAAAEADACQAEADAGAAIAWABIALACQAFABAEADQAEADADAEQACAEAAAGQAAAGgCAFQgDAGgFAEQgFAEgIACQgHACgJAAQgLAAgHgBgAgVAaIgEAFIgCAFIAAAEQAAAHAHAEQAHAEANAAQAHAAAFgCIAJgEQADgDACgDIABgHQAAgHgFgDQgFgEgJAAIgYgBIgFAFgAgKg0QgEACgDADQgCADgBAEQgCAEAAAFQAAAJAGAGQAFAGAKAAQAEAAAEgCQADgCADgDQADgDABgEQABgEAAgEQAAgKgFgGQgGgFgIAAQgFAAgEABg");
	this.shape_31.setTransform(-835.1,-20170.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F4FFFF").s().p("AAdAvIgCAAIgCgBIgBgBIAAgBIAAgyQAAgIgCgFQgBgGgCgDQgDgEgEgCQgEgCgFAAQgFAAgHAFQgGAFgIAJIAAA9IAAABIgBABIgCABIgDAAIgCAAIgCgBIgBgBIAAgBIAAhWIAAgBIABgBIABAAIADgBIADABIACAAIAAABIABABIAAAMQAHgIAIgEQAHgEAFAAQAJAAAGADQAGADADAFQAEAFACAHQABAGAAAKIAAAzIAAABIgBABIgCABIgDAAg");
	this.shape_32.setTransform(-844.9,-20172.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F4FFFF").s().p("AgPAuQgGgCgEgEQgDgDgCgFQgDgFAAgFQABgIACgFQAEgGAFgDQAGgCAIgCQAHgBAIAAIAOAAIAAgIIgBgKQgBgEgDgDQgCgDgEgCQgFgBgGAAQgEAAgFABIgIADIgFAEIgEABIgBAAIAAgBIgBgBIgBgCIABgEIACgCIAEgDIAHgDIAJgCIAHgBQAJAAAGACQAGACAFAEQAEAEABAGQABAGAAAIIAAA6IAAABIgBABIgEAAIgCAAIgCgBIAAgBIAAgKQgGAGgHAEQgIADgFAAQgHAAgGgBgAgFADQgFACgDACIgFAGQgCADAAAFQAAAHAFAFQAFAEAIAAQAGAAAFgDQAGgEAHgHIAAgVIgQAAIgLABg");
	this.shape_33.setTransform(-855.1,-20172.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F4FFFF").s().p("AgTAEIgCgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAIACgBIAnAAIABAAIABABIAAACIABAAIgBADIgCABg");
	this.shape_34.setTransform(-862.6,-20172.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F4FFFF").s().p("AggA/QgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIAAhwQAAgEACgBQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAbAAQAJAAAGADQAHACAFAEQAEAEADAGQABAGAAAHIgBAJIgDAHIgEAHQgDADgFACQAFABAEABQAFACAEAEQADAEACAGQACAFAAAGQAAAGgCAFQgBAFgDADQgCAEgEADIgHAGIgKADIgKABgAgaA0IAaAAQAFAAAFgBQAFgCADgDQAEgDACgEQACgFAAgGQAAgGgCgFQgCgEgEgEQgDgDgGgCQgGgBgHAAIgWAAgAgagGIAWAAQAEAAAFgCQAEgBAEgEQACgDACgEQABgEAAgFQAAgFgBgEQgCgEgDgDQgDgDgEgBQgFgCgHAAIgTAAg");
	this.shape_35.setTransform(-870.5,-20173.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F4FFFF").s().p("AA7A/IgCAAIgCgBIgBAAIAAgCIAAhvIgzBwIAAABIgBAAIgCABIAAAAIgCAAIgBgBIgCAAIgBgBIgvhwIAABvIAAACIgBAAIgCABIgDAAIgCAAIgDgBIAAAAIgBgCIAAhzQAAgEADgCQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAGAAIAEABIAEABIADADIABADIApBiIAAAAIAqhiIADgDIACgDIADgBIADgBIAHAAIACABIABAAIACADIABADIAABzIgBACIgBAAIgCABIgDAAg");
	this.shape_36.setTransform(-884.8,-20173.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgJAXIgCAAIgBgBIgBAAIABgBIAMgZIAAgLIAAgDIABgDIACAAIAEgBIADABIACAAIABADIABADIAAAFIgBAEIgCAEIgCACIgMAVIgBABIgBAAIgCABIgCAAg");
	this.shape_37.setTransform(309.4,-20229.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F4FFFF").s().p("AgLAeQgEgCgEgEQgCgEgCgGQgBgGAAgIQAAgGABgGQACgGACgEQAEgEAFgDQAFgCAFAAQAHAAAFACQAFADADAEQADAFABAGQACAGgBAFQABAHgCAGQgCAGgDAEQgEAFgFACQgFACgFAAQgFAAgGgCgAgFgVQgDACgDADIgCAHIgBAJIABALQABAEACADQACADADABIAFABQAEAAADgBIAFgFIACgIIABgJIgBgIQgBgFgCgDQgCgDgDgCQgDgBgDAAQgDAAgCABg");
	this.shape_38.setTransform(-712.8,-20177.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).to({state:[]},5532).wait(6743));

	// J3
	this.joyplus = new lib.j10();
	this.joyplus.setTransform(-729.6,-20243.1,1,1,0,0,0,7.2,14.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F4FFFF").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_39.setTransform(-729.6,-20242.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.joyplus}]}).to({state:[{t:this.shape_39}]},2766).to({state:[]},1212).wait(8297));

	// J2
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F4FFFF").s().p("AAgA/Ig+AAIgBAAIgBgBIgBgCIgBgCIABgCIABgCIABAAIABgBIAcAAIAAhmIgbAQIgCACIgCgBIgBgBIAAgDIAAgCIAAgCIABgBIACgBIAegTIABgBIAAAAIAAAAIACAAIACAAIADAAIAAABIABACIAABwIAYAAIABABIACAAIAAACIAAACIAAACIgBACIgBABIgBAAg");
	this.shape_40.setTransform(-739.4,-20242.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F4FFFF").s().p("AggBAIgCgBIgBAAIgBgDIgBgCIAAgCIABgCIABgCIABgBIAagcIAOgSIAIgMQADgGABgGIABgKQAAgFgCgDQgBgFgDgDQgDgDgEgCQgFgCgEAAQgGAAgEACIgJAEIgGADIgDACIgBgBIgCgBIAAgBIAAgCIAAgCIAAgBIABgCIACgCIADgCIAHgEIAJgCIALgBQAGgBAHADQAGADAEAEQAFAFACAFQACAHABAGIgBAMQgBAGgEAHIgKAOQgGAJgKALIgWAYIA4AAIABAAIACABIABACIAAACIAAACIgBACIgCABIgBABg");
	this.shape_41.setTransform(-739.8,-20242.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F4FFFF").s().p("AgOA/IgKgCIgHgDIgEgCIgBgCIAAgBIgBgCIAAgCIABgEIACgBIADABIAHAEIAKADQAGACAGAAQAFAAAGgCQAFgCAEgDQADgDACgFQACgFAAgFQAAgGgCgFQgDgEgEgEQgFgDgGgCQgFgCgHAAIgNAAIgBAAIgBgBIgBgCIAAAAIAAgCIABgCIABgBIABAAIALAAQAHAAAEgCQAFgCAEgDQAEgEACgFQACgFAAgGQAAgEgBgEIgEgHQgDgDgEgBQgFgCgDAAQgGAAgFACIgJAEIgGAEIgDABIgBAAIgBgBIgBgBIAAgDIAAgCIABgBIAAgCIACgBIADgDIAHgDIAJgDIALgBQAGAAAHACQAGACAEAFQAFAEACAFQACAGAAAGQAAAGgCAGIgFAJQgDAEgEADQgFACgGABIAAABQAHAAAFABQAGACAEAEQAEAEACAGQADAFAAAGQAAAIgDAHQgDAHgFAFQgFAFgIADQgIACgJAAIgLgBg");
	this.shape_42.setTransform(-739.9,-20242.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F4FFFF").s().p("AASA/IgCAAIgCAAIgBgBIAAgBIAAgdIg0AAIgCAAIgBgBIgBgBIAAgDIAAgCIAAgCIABgCIABgCIAvhOIABgCIACgBIACAAIAEAAIAEAAIADABIACAAIAAACIAABRIAQAAIADABIABAEIgBAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgQAAIAAAdIAAABIAAABIgDAAIgDAAgAgeAWIArAAIAAhJIgBAAg");
	this.shape_43.setTransform(-739.8,-20242.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F4FFFF").s().p("AgQA/IgJgDIgIgCIgDgCIAAgBIgBgBIAAgCIAAgCIAAgCIABgCIAAgBIABAAIAEABIAFAEIAJACQAFACAHAAQAFAAAGgDQAHgBAEgEQAEgEADgFQACgGAAgIQAAgHgCgFQgCgFgFgEQgEgCgHAAQgGgDgIAAIgKABIgHABIgEgBIgBgFIAAgxQAAgBAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIAzAAIACAAIABABIAAACIABACIgBADQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIguAAIAAAoIAHgBIAJAAQAJAAAIAEQAIACAGAFQAFACADAHQACAHABAHQAAAKgDAIQgEAIgGAFQgGAGgJADQgIACgIAAIgLAAg");
	this.shape_44.setTransform(-739.9,-20242.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F4FFFF").s().p("AgNA/QgGgCgFgEIgGgJQgDgFgDgHIgCgOIgBgSIABgPQABgIADgIQACgIADgGQAFgHAFgFQAGgFAIgCQAGgDAKAAIAHAAIAHABIAFACIADACIAAABIABABIAAABIAAACIAAACIAAABIgBABIAAAAIgDAAIgFgCIgHgBIgJgBQgJAAgFAEQgIAEgEAHQgFAHgCAJQgDAJAAAKIAGgDIAIgDIAIgCIAIgBQALAAAHADQAHADAEAFQAEADACAHQACAGAAAIQAAAHgDAIQgBAHgGAGQgFAGgIAEQgIADgJAAQgIAAgFgBgAgFgBIgIABIgHACIgHAEQABANACAKQABAJAEAGQAEAFAEADQAGACAFAAQAHAAAFgCQAGgDADgFQADgEACgGIABgKQABgGgCgGQgBgFgDgDQgDgEgFAAQgFgCgHAAIgHABg");
	this.shape_45.setTransform(-739.6,-20242.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F4FFFF").s().p("AgQA/IgDAAIgBgBIgBgBIABgDIAwhtIg/AAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgDIABgDIAAgCIABAAIACgBIBGAAIACABIACAAIABACIAAADIAAABIAAADIgBACIgBACIgtBrIgBACIgCACIgCAAIgEAAg");
	this.shape_46.setTransform(-739.7,-20242.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F4FFFF").s().p("AgQA+QgIgCgFgDQgFgEgDgGQgDgGAAgHQAAgHACgFQACgFAFgEIAJgIIANgFIgLgHIgIgHIgGgJQgBgEAAgGQAAgGACgFQADgGAEgEQAEgEAIgDQAHgCAIAAQAJAAAGACQAHACAFAEQAEAEACAFQACAFAAAGIgBAKIgGAJIgIAIQgEAEgHADIANAFIAKAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgGAEgIACQgHACgJAAQgJAAgHgCgAgMAKIgIAGQgEAEgBAEQgDAEAAAEQAAALAIAGQAHAFANAAQAOAAAIgFQAHgGAAgKQgBgFgCgEQgBgEgEgEQgDgDgHgDIgLgHIgMAHgAgQgwQgGAFAAAKQgBAEACADQABAEAEADIAHAHIAKAGQALgGAGgGQAGgHAAgJQAAgEgCgEQgCgDgDgDQgCgDgFgBQgEgBgGAAQgLAAgFAFg");
	this.shape_47.setTransform(-739.8,-20242.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F4FFFF").s().p("AgTBAIgIgBIgEgCIgDgCIgCgCIAAgDIAAgCIAAgCIABAAIABgBIADABIAFACIAHABIAJABQAKAAAFgEQAIgEAFgHQAEgGADgJQACgJAAgKIgNAFQgIADgIAAQgKAAgHgDQgIgDgEgFQgEgDgCgHQgCgHAAgHQAAgIACgHQACgIAFgFQAFgGAIgEQAIgDAJAAQAHAAAHACQAFACAEADQAFAEADAGQAEAFABAHIADAOIABARIgBAPIgDAQQgDAIgEAGQgEAHgGAFQgGAFgIADQgGACgLAAIgHAAgAgMgzQgFADgEAEQgDAFgBAFQgCAFAAAGQAAAGACAFQABAFADAEQADADAGABQAEACAIAAQAGAAAIgCQAIgBAFgEQAAgNgBgKQgCgJgEgGQgEgGgFgDQgGgCgFAAQgHAAgFACg");
	this.shape_48.setTransform(-739.9,-20242.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F4FFFF").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_49.setTransform(-739.8,-20242.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_40}]},276).to({state:[{t:this.shape_41}]},276).to({state:[{t:this.shape_42}]},277).to({state:[{t:this.shape_43}]},276).to({state:[{t:this.shape_44}]},277).to({state:[{t:this.shape_45}]},276).to({state:[{t:this.shape_46}]},277).to({state:[{t:this.shape_47}]},276).to({state:[{t:this.shape_48}]},277).to({state:[{t:this.shape_49}]},278).to({state:[]},1212).wait(8297));

	// J1
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F4FFFF").s().p("AAgA/Ig+AAIgCAAIAAgBIgBgCIgBgCIABgCIABgCIAAAAIACgBIAcAAIAAhmIgbAQIgDACIgBgBIgBgBIAAgDIAAgCIAAgCIABgBIABgBIAfgTIABgBIAAAAIAAAAIACAAIACAAIADAAIAAABIABACIAABwIAYAAIABABIACAAIAAACIAAACIAAACIgBACIgBABIgBAAg");
	this.shape_50.setTransform(-749.6,-20242.6);
	this.shape_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_50).wait(2766).to({_off:false},0).to({_off:true},1212).wait(8297));

	// J0
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F4FFFF").s().p("AgBAsIgCAAIgBgBIgBgBIAAglIggAAIgCAAIgBgBIAAgCIAAgCIAAgBIAAgCIABgBIACAAIAgAAIAAglIABgBIABgBIACgBIABAAIACAAIABABIACABIAAABIAAAlIAhAAIABAAIABABIABACIABABIgBACIgBACIgBABIgBAAIghAAIAAAlIAAABIgCABIgBAAIgCABIgBgBg");
	this.shape_51.setTransform(-761.2,-20241.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_51).to({_off:true},3978).wait(8297));

	// MB3
	this.mbplus = new lib.j10();
	this.mbplus.setTransform(-729.6,-20207.3,1,1,0,0,0,7.2,14.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F4FFFF").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_52.setTransform(-729.6,-20206.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mbplus}]}).to({state:[{t:this.shape_52}]},2766).to({state:[]},1212).wait(8297));

	// MB2
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F4FFFF").s().p("AAgA/Ig+AAIgBAAIgCgBIAAgBIgBgDIABgCIAAgCIACgBIABAAIAcAAIAAhlIgbAPIgCACIgCAAIgBgCIAAgDIAAgCIAAgCIABgBIACgBIAdgTIACgBIAAAAIAAAAIACAAIADAAIABAAIABABIABABIAABxIAYAAIABAAIABABIABACIAAACIAAADIgBABIgBABIgBAAg");
	this.shape_53.setTransform(-739.4,-20206.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F4FFFF").s().p("AggBAIgCgBIgBgBIgBgCIAAgCIAAgCIAAgCIABgBIABgCIAagcIANgSIAJgMQADgHABgFIABgKQAAgEgBgFQgCgEgDgDQgDgEgFgBQgDgCgFAAQgGAAgFABIgIAFIgGADIgDACIgBgBIgCAAIAAgCIAAgCIAAgCIAAgBIABgCIACgCIADgCIAHgEIAJgDIALgBQAGAAAHADQAHACADAFQAFAFACAGQADAFAAAHIgCAMQgBAGgDAIIgKANQgGAIgKAMIgWAYIA4AAIACAAIAAABIABACIAAACIAAACIgBACIAAABIgCABg");
	this.shape_54.setTransform(-739.8,-20206.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F4FFFF").s().p("AgOA/IgKgCIgHgDIgEgCIgBgCIAAgBIgBgCIAAgCIABgEIACgBIADABIAHAEIAKADQAGACAGAAQAFAAAGgCQAFgCAEgDQADgDACgFQACgFAAgFQAAgGgCgFQgDgEgEgEQgFgDgGgCQgFgCgHAAIgNAAIgBAAIgBgBIgBgCIAAAAIAAgCIABgCIABgBIABAAIALAAQAHAAAEgCQAFgCAEgDQAEgEACgFQACgFAAgGIgBgIIgEgHQgDgDgEgBQgFgCgDAAQgGAAgFACIgJAEIgGAEIgDABIgBAAIgBgBIgBgBIAAgDIAAgCIABgBIAAgCIACgBIADgDIAHgDIAJgDIALgBQAGAAAHACQAGACAEAFQAFAEACAFQACAGAAAGQAAAGgCAGIgFAJQgDAEgEADQgFACgGABIAAABQAHAAAFABQAGACAEAEQAEAEACAGQADAFAAAGQAAAIgDAHQgDAHgFAFQgFAFgIADQgIACgJAAIgLgBg");
	this.shape_55.setTransform(-739.9,-20206.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F4FFFF").s().p("AASA/IgCAAIgCAAIgBgBIAAgBIAAgdIg1AAIgBAAIgBgBIgBgBIAAgDIAAgCIAAgCIABgCIABgCIAvhOIABgCIACgBIACAAIAEAAIAEAAIADABIACAAIAAACIAABRIARAAIADABIAAAEIAAAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgRAAIAAAdIAAABIAAABIgDAAIgDAAgAgeAWIArAAIAAhJIAAAAg");
	this.shape_56.setTransform(-739.8,-20206.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F4FFFF").s().p("AgQA/IgKgDIgHgCIgDgCIgBAAIAAgCIAAgBIAAgDIAAgCIAAgCIABAAIABgBIAEABIAFAEIAJACQAFACAHgBQAGAAAFgCQAGgBAFgEQAEgDACgGQADgGAAgIQAAgHgCgFQgCgFgFgEQgEgCgHgBQgGgCgHAAIgKABIgIABIgEgBIgBgFIAAgxQAAgBAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIAzAAIABABIACABIAAABIABADIgBAEQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIguAAIAAApIAHgBIAJAAQAJAAAIACQAIADAGAFQAFACADAHQADAHgBAIQAAAJgDAJQgDAHgGAGQgGAFgIADQgJACgIAAIgLAAg");
	this.shape_57.setTransform(-739.9,-20206.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F4FFFF").s().p("AgNA/QgGgCgEgEIgHgJQgDgFgDgHIgCgOIgBgSIABgPQABgIADgIQACgIADgGQAFgHAFgFQAGgFAIgCQAFgDALAAIAHAAIAHABIAFACIADACIABABIAAABIABABIAAACIAAACIAAABIgBABIgCAAIgCAAIgFgCIgHgBIgIgBQgKAAgFAEQgHAEgFAHQgFAHgCAJQgCAJAAAKIAGgDIAHgDIAIgCIAIgBQALAAAHADQAHADAEAFQAEADACAHQACAGAAAIQAAAHgCAIQgDAHgFAGQgFAGgIAEQgIADgJAAQgIAAgFgBgAgFgBIgIABIgHACIgGAEQAAANABAKQACAJAEAGQADAFAFADQAGACAFAAQAHAAAFgCQAFgDAEgFQADgEACgGIACgKQAAgGgCgGQgBgFgDgDQgDgEgFAAQgFgCgIAAIgGABg");
	this.shape_58.setTransform(-739.6,-20206.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F4FFFF").s().p("AgPA/IgDAAIgDgBIAAgCIABgCIAwhtIhAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBIgBgDIAAgDIABgBIABgCIABAAIBHAAIADAAIABACIAAABIABADIAAABIgBACIAAADIgBACIguBsIAAABIgCABIgCABIgDAAg");
	this.shape_59.setTransform(-739.7,-20206.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F4FFFF").s().p("AgQA+QgIgCgFgDQgFgEgDgGQgDgGAAgHQAAgHACgFQACgFAFgEIAJgIQAFgEAIgBIgMgHIgHgHIgGgJQgBgEAAgGQAAgGACgFQADgGAEgEQAFgEAHgDQAHgCAIAAQAIAAAHACQAHACAFAEQAEAEACAFQACAFAAAGQAAAFgBAFIgGAJIgIAIQgFAEgGADIANAFIAKAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgGAEgIACQgHACgJAAQgIAAgIgCgAgMAKIgJAGQgDAEgBAEQgDAEAAAEQABALAHAGQAHAFANAAQAOAAAIgFQAHgGAAgKQAAgFgDgEQgBgEgEgEQgEgDgFgDIgMgHIgMAHgAgRgwQgGAFABAKQAAAEABADQACAEACADIAIAHIAKAGQAKgGAHgGQAGgHAAgJQAAgEgCgEQgCgDgCgDQgEgDgEgBQgEgBgGAAQgLAAgGAFg");
	this.shape_60.setTransform(-739.8,-20206.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F4FFFF").s().p("AgUBAIgHgBIgEgCIgDgCIgBgCIgBgDIAAgCIABgCIAAAAIABgBIADABIAFACIAHABIAJABQAKAAAGgEQAHgEAFgHQAEgGADgJQACgJAAgKIgNAFQgHADgJAAQgKAAgIgDQgHgDgEgFQgEgDgCgHQgCgHAAgHQAAgIACgHQADgIAEgFQAFgGAIgEQAIgDAJAAQAHAAAGACQAGACAEADQAFAEADAGQADAFACAHIADAOIABARIgBAPIgDAQQgDAIgEAGQgEAHgGAFQgGAFgIADQgGACgLAAIgIAAgAgMgzQgFADgDAEQgDAFgCAFQgCAFAAAGQAAAGACAFQABAFADAEQAEADAEABQAFACAIAAQAGAAAIgCQAIgBAFgEQAAgNgBgKQgCgJgEgGQgEgGgFgDQgFgCgGAAQgHAAgFACg");
	this.shape_61.setTransform(-739.9,-20206.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F4FFFF").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_62.setTransform(-739.8,-20206.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_53}]},276).to({state:[{t:this.shape_54}]},276).to({state:[{t:this.shape_55}]},277).to({state:[{t:this.shape_56}]},276).to({state:[{t:this.shape_57}]},277).to({state:[{t:this.shape_58}]},276).to({state:[{t:this.shape_59}]},277).to({state:[{t:this.shape_60}]},276).to({state:[{t:this.shape_61}]},277).to({state:[{t:this.shape_62}]},278).to({state:[]},1212).wait(8297));

	// MB1
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F4FFFF").s().p("AAgA/Ig+AAIgCAAIgBgBIAAgBIAAgDIAAgCIAAgCIABgBIACAAIAcAAIAAhlIgbAPIgDACIgBAAIgBgCIAAgDIAAgCIABgCIAAgBIABgBIAegTIABgBIABAAIAAAAIACAAIACAAIADAAIAAABIABABIAABxIAYAAIABAAIACABIAAACIAAACIAAADIgBABIgBABIgBAAg");
	this.shape_63.setTransform(-749.6,-20206.8);
	this.shape_63._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_63).wait(2766).to({_off:false},0).to({_off:true},1212).wait(8297));

	// MB0
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F4FFFF").s().p("AgBAsIgCAAIgBgBIgBgBIAAglIggAAIgBAAIgCgBIgBgCIAAgCIAAgBIABgCIACgBIABAAIAgAAIAAglIABgBIABgBIACgBIABAAIACAAIABABIACABIAAABIAAAlIAhAAIABAAIACABIAAACIAAABIAAACIAAACIgCABIgBAAIghAAIAAAlIAAABIgCABIgBAAIgCABIgBgBg");
	this.shape_64.setTransform(-761.2,-20207.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_64).to({_off:true},3978).wait(8297));

	// 1000
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F4FFFF").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOQgCgGgCgFQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_65.setTransform(-753.2,-20174.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAgA/Ig+AAIgCAAIAAgBIgBgBIAAgDIAAgCIABgBIAAgCIACAAIAcAAIAAhmIgbAQIgDACIgBgBIgBgBIAAgDIAAgCIABgCIAAgBIABgBIAfgTIAAAAIABgBIAAAAIACAAIADAAIABABIACAAIAAABIAABxIAYAAIABAAIACACIAAABIAAACIAAADIgBABIgBABIgBAAg");
	this.shape_66.setTransform(-752.8,-20174.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AghBAIgBgBIgBgBIgBgBIgBgDIAAgCIABgCIABgBIABgCIAagcIAOgSIAIgMQADgHABgFIABgKQAAgEgBgFQgCgEgDgDQgDgEgEgBQgFgCgDAAQgGAAgGACIgIADIgGAEIgDACIgCgBIgBgBIAAgBIAAgCIAAgCIAAgCIABgBIACgCIADgCIAHgDIAJgEIAKAAQAHgBAHADQAHACAEAFQAEAEADAGQABAGAAAHIAAAMQgCAGgDAIIgKANQgGAJgKALIgWAYIA4AAIABAAIABABIACACIAAACIAAADIgCABIgBABIgBABg");
	this.shape_67.setTransform(-753.2,-20174.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgOA/IgKgCIgHgDIgEgCIgBgCIAAgBIgBgCIAAgCIABgEIACgBIADABIAHAEIAKADQAGACAGAAQAFAAAGgCQAFgCAEgDQADgDACgFQACgFAAgFQAAgGgCgFQgDgEgEgEQgFgDgGgCQgFgCgHAAIgNAAIgBAAIgBgBIgBgCIAAAAIAAgCIABgCIABgBIABAAIALAAQAHAAAEgCQAFgCAEgDQAEgEACgFQACgFAAgGIgBgIIgEgHQgDgDgEgBQgFgCgDAAQgGAAgFACIgJAEIgGAEIgDABIgBAAIgBgBIgBgBIAAgDIAAgCIABgBIAAgCIACgBIADgDIAHgDIAJgDIALgBQAGAAAHACQAGACAEAFQAFAEACAFQACAGAAAGQAAAGgCAGIgFAJQgDAEgEADQgFACgGABIAAABQAHAAAFABQAGACAEAEQAEAEACAGQADAFAAAGQAAAIgDAHQgDAHgFAFQgFAFgIADQgIACgJAAIgLgBg");
	this.shape_68.setTransform(-753.3,-20174.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AASA/IgCAAIgCAAIgBgBIAAgBIAAgdIg1AAIgBAAIgBgBIgBgBIAAgDIAAgCIAAgCIABgCIABgCIAvhOIABgCIACgBIADAAIADAAIAEAAIADABIACAAIABACIAABRIAPAAIAEABIAAAEIAAAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgPAAIAAAdIAAABIgBABIgDAAIgDAAgAgfAWIAsAAIAAhJIAAAAg");
	this.shape_69.setTransform(-753.2,-20174.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgQA/IgJgDIgIgCIgDgCIgBgBIAAgBIAAgCIAAgCIAAgCIAAgCIABgBIABAAIADABIAGADIAJADQAFABAHAAQAFAAAGgCQAHgBAEgEQAEgEADgFQACgGAAgIQAAgHgCgFQgCgFgFgEQgEgCgHgBQgGgCgIAAIgJABIgIABIgEgBIgBgFIAAgyQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAIA1AAIAAABIACABIABACIAAACIgBADQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgvAAIAAAoIAHAAIAJAAQAJgBAJAEQAHACAGAFQAGADACAGQACAHABAHQgBALgCAIQgEAHgGAFQgGAGgIADQgJACgIABIgLgBg");
	this.shape_70.setTransform(-753.3,-20174.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgNA/QgGgCgEgEIgIgJQgCgFgCgHIgDgOIgBgSIABgPQABgIACgIQADgIAEgGQADgHAGgFQAGgFAIgCQAGgDAKAAIAHAAIAHABIAFACIADACIAAABIABABIAAABIAAACIAAACIAAABIgBABIAAAAIgEAAIgEgCIgHgBIgIgBQgKAAgFAEQgHAEgFAHQgFAHgCAJQgDAJAAAKIAHgDIAHgDIAJgCIAHgBQAKAAAIADQAHADAEAFQAFADABAHQACAGAAAIQAAAHgDAIQgBAHgGAGQgFAGgIAEQgIADgJAAQgIAAgFgBgAgFgBIgIABIgHACIgHAEQAAANADAKQABAJAEAGQADAFAFADQAGACAFAAQAHAAAFgCQAFgDAEgFQAEgEABgGIACgKQAAgGgCgGQgBgFgDgDQgDgEgFAAQgFgCgHAAIgHABg");
	this.shape_71.setTransform(-753,-20174.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgPA/IgEAAIgBgBIgBgCIABgCIAvhtIg+AAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgEIAAgCIABgCIABgBIACAAIBGAAIADAAIABABIAAACIABACIAAACIgBACIAAADIgBACIgtBrIgBACIgCABIgCABIgDAAg");
	this.shape_72.setTransform(-753.1,-20174.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgQA+QgHgCgGgDQgFgEgDgGQgDgGAAgHQAAgHACgFQADgFAEgEIAJgIQAFgEAIgBIgMgHIgIgHIgFgJQgBgEAAgGQAAgGACgFQACgGAFgEQAFgEAHgDQAHgCAHAAQAKAAAGACQAHACAEAEQAFAEACAFQACAFAAAGIgBAKIgFAJQgEAEgFAEQgFAEgGADIANAFIAKAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgGAEgIACQgHACgJAAQgIAAgIgCgAgMAKIgJAGQgDAEgCAEQgBAEAAAEQgBALAIAGQAIAFAMAAQAOAAAIgFQAGgGAAgKQAAgFgBgEQgCgEgEgEQgEgDgGgDIgLgHIgMAHgAgRgwQgFAFAAAKQAAAEABADQACAEACADIAIAHIAJAGQALgGAHgGQAGgHAAgJQAAgEgCgEQgCgDgCgDQgEgDgEgBQgEgBgGAAQgKAAgHAFg");
	this.shape_73.setTransform(-753.2,-20174.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_65}]},1020).to({state:[{t:this.shape_66}]},529).to({state:[{t:this.shape_67}]},530).to({state:[{t:this.shape_68}]},530).to({state:[{t:this.shape_69}]},530).to({state:[{t:this.shape_70}]},530).to({state:[{t:this.shape_71}]},530).to({state:[{t:this.shape_72}]},530).to({state:[{t:this.shape_73}]},530).to({state:[]},273).wait(6743));

	// 100
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F4FFFF").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_74.setTransform(-741.8,-20174.4);

	this.fourteen = new lib._32();
	this.fourteen.setTransform(-740.5,-20171.4,1,1,0,0,0,8.3,17.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgQA/IgJgDIgIgCIgDgCIgBgBIAAgBIAAgCIAAgCIAAgCIAAgCIABgBIABAAIADABIAGADIAJADQAFABAHAAQAFAAAHgCQAGgBAEgEQAEgEADgFQACgGAAgIQAAgHgCgFQgCgFgFgEQgEgCgGgBQgHgCgHAAIgKABIgIABIgEgBIgBgFIAAgyQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAIA1AAIAAABIACABIABACIAAACIgBADQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgvAAIAAAoIAHAAIAJAAQAJgBAJAEQAHACAGAFQAGADACAGQADAHAAAHQAAALgEAIQgDAHgGAFQgGAGgIADQgJACgIABIgLgBg");
	this.shape_75.setTransform(-741.9,-20174.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74}]}).to({state:[{t:this.fourteen}]},1020).to({state:[{t:this.shape_75}]},4505).to({state:[]},7).wait(6743));

	// 10
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F4FFFF").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_76.setTransform(-729.7,-20174.5);

	this.fifteen = new lib._00010();
	this.fifteen.setTransform(-728.6,-20171.5,1,1,0,0,0,8.3,17.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgQA+QgIgCgFgDQgFgEgDgGQgDgGAAgHQAAgHACgFQACgFAFgEIAJgIQAFgEAIgBIgLgHIgIgHIgGgJQgBgEAAgGQAAgGACgFQADgGAEgEQAEgEAIgDQAHgCAIAAQAIAAAIACQAGACAFAEQAEAEACAFQACAFAAAGQAAAFgCAFIgFAJIgIAIQgFAEgGADIAOAFIAJAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgFAEgIACQgIACgJAAQgJAAgHgCgAgMAKIgIAGQgEAEgBAEQgCAEAAAEQAAALAHAGQAHAFANAAQAOAAAHgFQAIgGAAgKQAAgFgDgEQgBgEgEgEQgDgDgHgDIgLgHIgMAHgAgQgwQgGAFgBAKQAAAEACADQACAEADADIAHAHIAKAGQALgGAGgGQAGgHAAgJQAAgEgCgEQgBgDgEgDQgCgDgFgBQgFgBgFAAQgKAAgGAFg");
	this.shape_77.setTransform(-729.9,-20174.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76}]}).to({state:[{t:this.fifteen}]},1020).to({state:[{t:this.shape_77}]},4511).to({state:[]},1).wait(6743));

	// Layer 12
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AA4AvIgDAAIgBgBIgBgBIgBgBIAAg0IAAgLQgCgGgCgDQgDgEgDgCQgDgCgGAAQgGAAgGAFQgGAFgIAJIAAA9IAAABIgBABIgCABIgCAAIgCAAIgBgBIgBgBIgBgBIAAg0IgBgLIgDgJQgCgEgEgCQgEgCgFAAQgGAAgGAFQgGAFgIAJIAAA9IgBABIAAABIgCABIgDAAIgCAAIgDgBIAAgBIAAgBIAAhWIAAgBIAAgBIACAAIADgBIACABIADAAIAAABIAAABIAAAMQAIgIAHgEQAGgEAIAAQAFAAAFACQADABAEACQADADACADIACAHIAJgIIAIgGIAHgDIAHgBQAIAAAFADQAHADADAFQADAFACAHQACAGgBAIIAAA1IAAABIgBABIgCABIgDAAg");
	this.shape_78.setTransform(407.6,-20233.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAdBEIgCAAIgCgBIgBgBIAAgBIAAg0QAAgIgCgFQgBgEgCgDQgDgEgEgCQgEgCgFAAQgFAAgHAFQgGAFgIAHIAAA/IAAABIgBABIgCABIgDAAIgCAAIgCgBIgBgBIAAgBIAAiBIAAgBIABgBIACgBIACAAIADAAIACABIABABIAAABIAAA3QAHgIAIgEQAHgEAFAAQAJAAAGADQAGADADAFQAEAFACAHQABAEAAAKIAAA1IAAABIgBABIgCABIgDAAg");
	this.shape_79.setTransform(394.5,-20235.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgSAsQgHgDgGgGQgFgGgCgJQgDgJAAgLQAAgIADgJQACgJAGgGQAFgHAIgEQAIgDAJAAQALAAAHADQAIADAFAGQAGAGACAJQADAJAAAKQAAAJgDAJQgDAJgFAHQgGAGgIAEQgIADgJAAQgKAAgIgDgAgMghQgGADgDAFQgEAFgCAHQgCAGAAAHQAAAHACAHQABAHAEAFQADAFAGADQAGADAHAAQAHAAAGgDQAGgDADgFQAEgFACgGQABgHAAgIIgBgNQgBgGgEgGQgDgFgGgDQgGgDgIAAQgGAAgGADg");
	this.shape_80.setTransform(384.1,-20233.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAbBEIgDAAIgCgBIgCgBIgBgBIgngyIAAAyIgBABIgBABIgBABIgDAAIgDAAIgCgBIgBgBIAAgBIAAiBIAAgBIABgBIACgBIADAAIADAAIABABIABABIABABIAABPIAigkIADgBIABgBIACAAIADgBIADAAIACABIABABIAAABIAAACIgCACIgiAfIAmAvIACADIAAABIAAABIgBABIgCABIgDAAg");
	this.shape_81.setTransform(375.8,-20235.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAuA/IgDAAIgDAAIgBgBIAAgBIgMgiIg1AAIgMAiIgBABIgBABIgCAAIgDAAIgEAAIgBgBIgBgBIABgCIAsh2IAAgCIACgBIACAAIACAAIADAAIABAAIACABIABACIAsB2IABACIgBACIgCAAIgDAAgAgXARIAuAAIgXhCIAAAAg");
	this.shape_82.setTransform(130.8,-20173);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AA4AvIgDAAIgBgBIgBgBIAAgBIAAg0IgCgLQAAgGgDgDQgCgEgEgCQgEgCgEAAQgHAAgGAFQgHAFgHAJIAAA9IAAABIgBABIgCABIgCAAIgCAAIgBgBIgBgBIgBgBIAAg0IgBgLIgDgJQgDgEgDgCQgEgCgFAAQgGAAgHAFQgGAFgHAJIAAA9IAAABIgBABIgCABIgDAAIgCAAIgDgBIAAgBIAAgBIAAhWIAAgBIAAgBIACAAIADgBIACABIADAAIAAABIABABIAAAMQAHgIAHgEQAHgEAHAAQAFAAAEACQAFABADACQAEADABADIADAHIAIgIIAIgGIAHgDIAGgBQAJAAAGADQAFADAEAFQAEAFABAHQACAGAAAIIAAA1IgBABIgBABIgBABIgEAAg");
	this.shape_83.setTransform(117.3,-20171.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAAA/IgBAAIgCAAIgBAAIgBgBIgBAAIAAgBIgrh3IgBgCIABgBIACgBIAEAAIADAAIABAAIABABIAAABIAmBuIAmhuIAAgBIACgBIACAAIADAAIAEAAIABABIABABIgBACIgrB3IgBABIgBABIgCAAIgDAAg");
	this.shape_84.setTransform(350.9,-20350);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAAA/IgBAAIgCAAIgBAAIgBgBIgBAAIAAgBIgsh3IAAgCIAAgBIADgBIAEAAIADAAIABAAIABABIAAABIAmBuIAmhuIAAgBIACgBIACAAIADAAIAEAAIABABIABABIgBACIgrB3IgBABIgBABIgDAAIgCAAg");
	this.shape_85.setTransform(114.9,-20350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78}]}).to({state:[]},5532).wait(6743));

	// 10000
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_86.setTransform(299.6,-20235.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAgA/Ig+AAIgBAAIgBgBIgBgBIgBgDIABgCIABgBIABgBIABgBIAcAAIAAhlIgbAQIgCABIgCgBIgBgBIAAgDIAAgCIAAgBIABgCIACgBIAdgTIACgBIAAAAIAAAAIACAAIADAAIABAAIACABIAAABIAABxIAYAAIABABIABABIABABIAAACIAAADIgBABIgBABIgBAAg");
	this.shape_87.setTransform(301,-20235.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AghA/IgBAAIgCAAIAAgDIAAgCIAAgCIAAgCIABgBIABgCIAagbIAOgTQAFgFADgHQADgHABgFIABgKQAAgFgCgEQgBgEgDgDQgDgEgEgBQgFgCgDAAQgHAAgFACIgIADIgGAEIgEACIgBgBIAAgBIgBgBIAAgCIAAgCIAAgBIABgCIABgCIAEgCIAHgEIAJgDIALAAQAGgBAHADQAHACADAFQAFAEACAGQACAGABAHIgBAMQgBAGgEAHIgKAOQgGAIgKALIgWAZIA4AAIABAAIABABIACACIAAACIAAACIgCACIgBABIgBAAg");
	this.shape_88.setTransform(301.4,-20236);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgOA/IgKgCIgHgDIgEgCIgBgCIAAgBIgBgCIAAgCIABgEIACgBIADABIAHAEIAKADQAGACAGAAQAFAAAGgCQAFgCAEgDQADgDACgFQACgFAAgFQAAgGgCgFQgDgEgEgEQgFgDgGgCQgFgCgHAAIgNAAIgBAAIgBgBIgBgCIAAAAIAAgCIABgCIABgBIABAAIALAAQAHAAAEgCQAFgCAEgDQAEgEACgFQACgFAAgGQAAgEgBgEIgEgHQgDgDgEgBQgFgCgDAAQgGAAgFACIgJAEIgGAEIgDABIgBAAIgBgBIgBgBIAAgDIAAgCIABgBIAAgCIACgBIADgDIAHgDIAJgDIALgBQAGAAAHACQAGACAEAFQAFAEACAFQACAGAAAGQAAAGgCAGIgFAJQgDAEgEADQgFACgGABIAAABQAHAAAFABQAGACAEAEQAEAEACAGQADAFAAAGQAAAIgDAHQgDAHgFAFQgFAFgIADQgIACgJAAIgLgBg");
	this.shape_89.setTransform(301.2,-20235.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AATA/IgDAAIgCAAIgBgBIAAgBIAAgdIg0AAIgCAAIgBgBIgBgBIAAgDIAAgCIABgCIAAgCIABgCIAvhOIABgCIACgBIADAAIADAAIAEAAIADABIACAAIABACIAABRIAQAAIADABIAAAEIAAAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgQAAIAAAdIAAABIgCABIgBAAIgDAAgAgeAWIArAAIAAhJIAAAAg");
	this.shape_90.setTransform(300.9,-20235.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_86,p:{x:299.6}}]}).to({state:[{t:this.shape_86,p:{x:300.9}}]},2766).to({state:[{t:this.shape_87}]},469).to({state:[{t:this.shape_88}]},577).to({state:[{t:this.shape_89}]},582).to({state:[{t:this.shape_90}]},582).to({state:[]},556).wait(6743));

	// 1000
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AghA/IgBAAIgCAAIAAgDIgBgCIAAgCIABgCIABgBIABgCIAagbIAOgTQAFgFADgHQADgHABgFIABgKQAAgFgBgEQgCgEgDgDQgDgEgEgBQgFgCgDAAQgGAAgGACIgIADIgGAEIgDACIgCgBIgBgBIAAgBIAAgCIAAgCIAAgBIABgCIACgCIADgCIAHgEIAJgDIAKAAQAHgBAHADQAHACADAFQAFAEADAGQABAGAAAHIAAAMQgBAGgEAHIgKAOQgGAIgKALIgWAZIA4AAIABAAIACABIAAACIAAACIAAACIAAACIgCABIgBAAg");
	this.shape_91.setTransform(319.9,-20236);

	this.eleven = new lib._582();
	this.eleven.setTransform(321.2,-20232.9,1,1,0,0,0,8.3,17.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgPA/IgDAAIgCgBIgBgCIABgBIAwhuIhAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBIgBgDIAAgDIABgCIABgBIABAAIBHAAIADAAIABABIABACIAAADIAAABIAAACIgBADIgBACIguBrIAAACIgCACIgCAAIgDAAg");
	this.shape_92.setTransform(320,-20235.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_91}]}).to({state:[{t:this.eleven}]},2766).to({state:[{t:this.shape_92}]},2650).to({state:[]},116).wait(6743));

	// 100
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgQA/IgJgDIgIgCIgDgCIgBgBIAAgBIAAgCIAAgCIAAgCIAAgCIABgBIABAAIAEABIAFAEIAJACQAFABAHAAQAFAAAGgCQAHgBAEgEQAEgEADgFQACgGAAgIQAAgHgCgFQgCgFgEgEQgFgCgHgBQgGgBgIAAIgKAAIgHABIgEgBIgBgFIAAgxQAAgBAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIA0AAIAAABIACABIABACIAAACIgBAEQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgvAAIAAAoIAHgBIAJAAQAJAAAJAEQAIACAFAFQAGACACAHQADAHgBAHQAAAKgCAJQgEAIgGAEQgGAGgIADQgJACgIAAIgLAAg");
	this.shape_93.setTransform(336.2,-20235.8);

	this.twelve = new lib._00100();
	this.twelve.setTransform(337.7,-20232.9,1,1,0,0,0,8.3,17.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgQA/IgJgDIgHgCIgDgCIgCgBIAAgBIAAgCIgBgCIABgCIAAgCIABgBIABAAIAEABIAFAEIAJACQAFABAHAAQAFAAAHgCQAGgBAEgEQAEgEADgFQACgGAAgIQAAgHgCgFQgCgFgFgEQgEgCgGgBQgHgBgIAAIgKAAIgHABIgEgBIgBgFIAAgxQAAgBAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAIA0AAIABABIACABIAAACIABACIgBAEQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIguAAIAAAoIAHgBIAJAAQAJAAAIAEQAIACAGAFQAFACADAHQACAHABAHQgBAKgCAJQgEAIgGAEQgGAGgJADQgIACgIAAIgLAAg");
	this.shape_94.setTransform(336.3,-20235.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93}]}).to({state:[{t:this.twelve}]},2766).to({state:[{t:this.shape_94}]},2650).to({state:[]},116).wait(6743));

	// 10
	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_95.setTransform(353,-20235.7);

	this.thirteen = new lib._00010black();
	this.thirteen.setTransform(354.3,-20232.7,1,1,0,0,0,8.3,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95}]}).to({state:[{t:this.thirteen}]},2766).to({state:[{t:this.shape_95}]},2650).to({state:[]},116).wait(6743));

	// 10v right
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_96.setTransform(331.2,-20350);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAgA/Ig+AAIgCAAIAAgBIgBgBIgBgDIABgCIABgCIAAAAIACgBIAcAAIAAhmIgbAQIgDACIgBgBIgBgBIAAgDIAAgCIAAgCIABgBIABgBIAegTIABgBIABAAIAAAAIACAAIACAAIACAAIACABIAAACIAABwIAYAAIABABIABAAIABACIAAACIAAADIgBABIgBABIgBAAg");
	this.shape_97.setTransform(331.6,-20350);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AggA/IgCAAIgCgBIAAgCIAAgCIAAgCIAAgCIABgCIABgBIAagcIAOgRIAIgNQADgHABgFIABgKQAAgFgBgDQgCgFgDgDQgDgDgEgCQgFgCgEAAQgFAAgFABIgJAFIgGADIgEACIAAgBIgCAAIAAgCIAAgCIAAgCIAAgCIABgBIABgCIAEgCIAHgEIAJgCIALgCQAGAAAHADQAGACAFAFQAEAFADAGQACAFAAAHIgCAMQAAAGgEAIIgKANQgGAIgKAMIgWAYIA4AAIABAAIACABIAAACIAAACIAAACIAAACIgCABIgBAAg");
	this.shape_98.setTransform(331.2,-20350);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgOA/IgKgCIgHgDIgEgCIgBgCIAAgBIgBgCIAAgCIABgEIACgBIADABIAHAEIAKADQAGACAGAAQAFAAAGgCQAFgCAEgDQADgDACgFQACgFAAgFQAAgGgCgFQgDgEgEgEQgFgDgGgCQgFgCgHAAIgNAAIgBAAIgBgBIgBgCIAAAAIAAgCIABgCIABgBIABAAIALAAQAHAAAEgCQAFgCAEgDQAEgEACgFQACgFAAgGQAAgEgBgEIgEgHQgDgDgEgBQgFgCgDAAQgGAAgFACIgJAEIgGAEIgDABIgBAAIgBgBIgBgBIAAgDIAAgCIABgBIAAgCIACgBIADgDIAHgDIAJgDIALgBQAGAAAHACQAGACAEAFQAFAEACAFQACAGAAAGQAAAGgCAGIgFAJQgDAEgEADQgFACgGABIAAABQAHAAAFABQAGACAEAEQAEAEACAGQADAFAAAGQAAAIgDAHQgDAHgFAFQgFAFgIADQgIACgJAAIgLgBg");
	this.shape_99.setTransform(331.1,-20350);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AATA/IgDAAIgCAAIgBgBIAAgBIAAgdIg1AAIgBAAIgBgBIgBgBIAAgDIAAgCIABgCIAAgCIABgCIAvhOIABgCIACgBIADAAIADAAIAEAAIADABIACAAIAAACIAABRIAQAAIADABIABAEIgBAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgQAAIAAAdIAAABIAAABIgCAAIgDAAgAgeAWIArAAIAAhJIgBAAg");
	this.shape_100.setTransform(331.2,-20350);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgQA/IgJgDIgHgCIgEgCIAAAAIgBgCIAAgCIgBgCIABgCIABgBIAAgCIABAAIAEACIAFACIAJADQAFACAHAAQAFAAAGgCQAHgCAEgEQAEgEACgFQADgGAAgIQAAgHgCgFQgCgFgEgEQgFgCgHgBQgGgCgIAAIgJACIgIAAIgEgBIgBgFIAAgyQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIA0AAIAAAAIACABIAAABIABADIgBADQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgvAAIAAAoIAHgBIAJAAQAJAAAIADQAJADAFAFQAFACADAHQADAHAAAHQgBAKgDAIQgDAJgGAEQgGAGgJADQgIACgIAAIgLAAg");
	this.shape_101.setTransform(331.1,-20349.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgNA/QgGgCgFgEIgHgJQgCgFgDgHIgCgOIgBgSIABgPQABgIACgIQADgIAEgGQAEgHAFgFQAGgFAIgCQAFgDALAAIAHAAIAHABIAFACIADACIAAABIABABIABABIAAACIAAACIAAABIgCABIAAAAIgDAAIgFgCIgGgBIgKgBQgJAAgFAEQgIAEgEAHQgFAHgCAJQgCAJAAAKIAFgDIAIgDIAIgCIAIgBQAKAAAIADQAHADAEAFQAFADABAHQACAGAAAIQAAAHgCAIQgDAHgFAGQgFAGgIAEQgIADgJAAQgIAAgFgBgAgFgBIgIABIgHACIgGAEQAAANACAKQABAJAEAGQAEAFAFADQAEACAGAAQAHAAAFgCQAFgDAEgFQADgEACgGIACgKQAAgGgCgGQgBgFgDgDQgDgEgFAAQgFgCgHAAIgHABg");
	this.shape_102.setTransform(331.4,-20350);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgPA/IgEAAIgBgBIgBgBIABgDIAwhtIhAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgEIABgCIAAgCIABAAIABgBIBHAAIACABIACAAIABACIAAACIAAACIAAADIgBACIgBACIguBrIAAACIgCABIgCABIgDAAg");
	this.shape_103.setTransform(331.3,-20349.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgQA+QgIgCgFgDQgFgEgDgGQgDgGAAgHQAAgHACgFIAGgJIAKgIIANgFIgLgHIgJgHIgFgJQgBgEAAgGQAAgGACgFQADgGAEgEQAFgEAHgDQAHgCAIAAQAIAAAHACQAHACAEAEQAFAEACAFQACAFAAAGQAAAFgCAFIgEAJIgJAIQgFAEgGADIANAFIAKAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgFAEgJACQgHACgJAAQgIAAgIgCgAgMAKIgIAGQgEAEgBAEQgCAEAAAEQAAALAHAGQAHAFANAAQAOAAAHgFQAHgGAAgKQAAgFgBgEQgCgEgEgEQgDgDgHgDIgLgHIgMAHgAgRgwQgFAFAAAKQgBAEACADQACAEACADIAIAHIAKAGQAKgGAHgGQAGgHAAgJQAAgEgCgEQgCgDgCgDQgDgDgFgBQgEgBgGAAQgKAAgHAFg");
	this.shape_104.setTransform(331.2,-20350);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgTBAIgHgBIgFgCIgEgCIAAgCIgBgDIAAgCIABgCIAAAAIACgBIACABIAFACIAHABIAJABQAKAAAFgEQAIgEAFgHQAFgGACgJQACgJABgKIgOAFQgHADgJAAQgKAAgHgDQgIgDgEgFQgEgDgDgHQgBgHAAgHQAAgIACgHQADgIAEgFQAFgGAIgEQAIgDAJAAQAHAAAHACQAFACAFADQAEAEADAGQAEAFABAHIADAOIABARIgBAPIgEAQQgCAIgEAGQgEAHgGAFQgGAFgIADQgGACgLAAIgHAAgAgMgzQgFADgEAEQgCAFgCAFQgBAFAAAGQAAAGABAFQABAFADAEQAEADAFABQAFACAHAAQAGAAAIgCQAIgBAGgEQAAgNgCgKQgCgJgEgGQgEgGgFgDQgFgCgGAAQgHAAgFACg");
	this.shape_105.setTransform(331.1,-20350);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAgA/Ig+AAIgCAAIAAgBIgBgBIgBgDIABgCIABgCIAAAAIACgBIAcAAIAAhmIgbAQIgDACIgBgBIgBgBIAAgDIAAgCIAAgCIABgBIABgBIAfgTIAAgBIABAAIAAAAIACAAIACAAIACAAIABABIABACIAABwIAYAAIABABIACAAIAAACIAAACIAAADIgBABIgBABIgBAAg");
	this.shape_106.setTransform(321.4,-20350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_96}]}).to({state:[{t:this.shape_96}]},2766).to({state:[{t:this.shape_97}]},276).to({state:[{t:this.shape_98}]},275).to({state:[{t:this.shape_99}]},273).to({state:[{t:this.shape_100}]},276).to({state:[{t:this.shape_101}]},275).to({state:[{t:this.shape_102}]},275).to({state:[{t:this.shape_103}]},274).to({state:[{t:this.shape_104}]},250).to({state:[{t:this.shape_105}]},275).to({state:[{t:this.shape_106},{t:this.shape_96}]},276).to({state:[]},41).wait(6743));

	// 10000
	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_107.setTransform(262,-20524.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAgA/Ig+AAIgCAAIAAgBIgBgBIAAgDIAAgCIABgCIAAgBIACAAIAcAAIAAhmIgbAQIgDACIgBgBIgBgBIAAgDIAAgCIABgCIAAgBIABgBIAfgTIAAgBIABAAIAAAAIACAAIADAAIACAAIAAACIABAAIAABxIAYAAIABAAIABABIABACIAAACIAAADIgBABIgBABIgBAAg");
	this.shape_108.setTransform(262.3,-20524.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AggBAIgCgBIgBgBIgBgCIgBgCIAAgCIABgCIABgCIABgBIAagcIANgSIAJgMQADgGABgGIABgKQAAgEgCgFQgBgEgDgDQgDgEgFgBQgEgCgEAAQgGAAgEABIgJAEIgGAEIgEACIAAgBIgCAAIAAgCIAAgCIAAgCIAAgBIABgCIABgBIAEgDIAHgEIAJgDIAKgBQAHAAAHADQAGACAEAFQAFAEADAHQACAFAAAHIgCAMQgBAGgDAHIgJAOQgHAIgKAMIgWAYIA4AAIABAAIACABIAAACIAAACIAAACIAAACIgCABIgBABg");
	this.shape_109.setTransform(261.9,-20524.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_107,p:{x:262,y:-20524.2}}]}).to({state:[{t:this.shape_107,p:{x:261.9,y:-20524.5}}]},2766).to({state:[{t:this.shape_108}]},998).to({state:[{t:this.shape_109}]},1000).to({state:[]},768).wait(6743));

	// 1000
	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOQgCgGgCgFQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_110.setTransform(278.4,-20524.2);

	this.seven = new lib._01000();
	this.seven.setTransform(279.7,-20521.5,1,1,0,0,0,8.3,17.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgQA/IgCAAIgDgBIAAgCIABgBIAvhuIg+AAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgEIABgCIAAgBIABgCIACAAIBHAAIACAAIABACIAAABIABACIAAACIgBACIAAADIgBACIguBrIAAACIgCACIgCAAIgEAAg");
	this.shape_111.setTransform(278.5,-20524.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_110}]}).to({state:[{t:this.seven}]},2766).to({state:[{t:this.shape_111}]},2698).to({state:[]},68).wait(6743));

	// 100
	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_112.setTransform(294.9,-20524.2);

	this.eight = new lib._00100();
	this.eight.setTransform(296.2,-20521.5,1,1,0,0,0,8.3,17.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgNA/QgGgCgFgEIgHgJQgDgFgCgHIgCgOIgBgSIABgPQABgIADgIQACgIADgGQAFgHAFgFQAGgFAIgCQAGgDAKAAIAHAAIAHABIAFACIADACIAAABIABABIABABIAAACIAAACIAAABIgCABIAAAAIgDAAIgFgCIgHgBIgJgBQgJAAgGAEQgGAEgFAHQgFAHgCAJQgCAJAAAKIAFgDIAIgDIAJgCIAHgBQAKAAAIADQAHADAEAFQAEADACAHQACAGAAAIQAAAHgCAIQgDAHgFAGQgFAGgIAEQgIADgJAAQgIAAgFgBgAgFgBIgIABIgHACIgGAEQAAANACAKQABAJAEAGQAEAFAEADQAGACAFAAQAHAAAFgCQAFgDAEgFQADgEACgGIACgKQAAgGgCgGQgBgFgDgDQgDgEgFAAQgFgCgIAAIgGABg");
	this.shape_113.setTransform(295.1,-20524.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_112}]}).to({state:[{t:this.eight}]},2766).to({state:[{t:this.shape_113}]},2758).to({state:[]},8).wait(6743));

	// 10
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOQgCgGgCgFQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_114.setTransform(311.5,-20524);

	this.nine = new lib._00010black();
	this.nine.setTransform(312.8,-20521.3,1,1,0,0,0,8.3,17.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AATA/IgDAAIgCAAIgBgBIAAgBIAAgdIg1AAIgBAAIgBgBIgBgBIAAgDIAAgCIAAgCIABgCIABgCIAvhOIABgCIACgBIACAAIAEAAIAEAAIADABIACAAIAAACIAABRIARAAIACABIABAEIgBAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgRAAIAAAdIAAABIgBABIgCAAIgCAAgAgfAWIAsAAIAAhJIAAAAg");
	this.shape_115.setTransform(311.5,-20524.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_114}]}).to({state:[{t:this.nine}]},2766).to({state:[{t:this.shape_115}]},2763).to({state:[]},3).wait(6743));

	// 1
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOQgCgGgCgFQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_116.setTransform(327.9,-20524);

	this.ten = new lib._00001();
	this.ten.setTransform(329.3,-20521.3,1,1,0,0,0,8.3,17.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgQA+QgIgCgFgDQgFgEgDgGQgDgGAAgHQAAgHACgFIAGgJIAKgIQAFgEAIgBIgLgHIgIgHIgFgJQgCgEAAgGQAAgGACgFQADgGAEgEQAEgEAIgDQAHgCAHAAQAJAAAIACQAGACAEAEQAFAEACAFQACAFAAAGQAAAFgCAFIgFAJIgIAIQgEAEgHADIAOAFIAJAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgGAEgHACQgIACgJAAQgJAAgHgCgAgMAKIgIAGQgEAEgBAEQgDAEAAAEQABALAHAGQAIAFAMAAQAOAAAIgFQAGgGABgKQAAgFgCgEQgCgEgEgEQgEgDgFgDIgMgHIgMAHgAgQgwQgHAFAAAKQABAEABADQACAEADADIAHAHIAJAGQAMgGAGgGQAGgHAAgJQAAgEgCgEQgCgDgDgDQgDgDgEgBQgFgBgFAAQgLAAgFAFg");
	this.shape_117.setTransform(328,-20524.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_116}]}).to({state:[{t:this.ten}]},2766).to({state:[{t:this.shape_117}]},2765).to({state:[]},1).wait(6743));

	// 10v left
	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_118.setTransform(91.2,-20350);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAgA/Ig+AAIgCAAIAAgBIgBgBIgBgDIABgCIABgCIAAAAIACgBIAcAAIAAhmIgbAQIgDACIgBgBIgBgBIAAgDIAAgCIAAgCIABgBIABgBIAegTIABgBIABAAIAAAAIACAAIACAAIACAAIACABIAAACIAABwIAYAAIABABIABAAIABACIAAACIAAADIgBABIgBABIgBAAg");
	this.shape_119.setTransform(91.6,-20350);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AghA/IgBAAIgCgBIAAgCIAAgCIAAgCIAAgCIABgCIABgBIAagcIANgRIAJgNQADgHABgFIABgKQAAgFgBgDQgCgFgDgDQgDgDgFgCQgDgCgFAAQgGAAgEABIgJAFIgGADIgDACIgCgBIgBAAIAAgCIAAgCIAAgCIAAgCIABgBIACgCIADgCIAHgEIAJgCIALgCQAGAAAHADQAHACAEAFQAEAFADAGQACAFAAAHIgCAMQgBAGgDAIIgKANQgGAIgKAMIgWAYIA4AAIABAAIACABIAAACIAAACIAAACIAAACIgCABIgBAAg");
	this.shape_120.setTransform(91.2,-20350);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgOA/IgKgCIgHgDIgEgCIgBgCIAAgBIgBgCIAAgCIABgEIACgBIADABIAHAEIAKADQAGACAGAAQAFAAAGgCQAFgCAEgDQADgDACgFQACgFAAgFQAAgGgCgFQgDgEgEgEQgFgDgGgCQgFgCgHAAIgNAAIgBAAIgBgBIgBgCIAAAAIAAgCIABgCIABgBIABAAIALAAQAHAAAEgCQAFgCAEgDQAEgEACgFQACgFAAgGQAAgEgBgEIgEgHQgDgDgEgBQgFgCgDAAQgGAAgFACIgJAEIgGAEIgDABIgBAAIgBgBIgBgBIAAgDIAAgCIABgBIAAgCIACgBIADgDIAHgDIAJgDIALgBQAGAAAHACQAGACAEAFQAFAEACAFQACAGAAAGQAAAGgCAGIgFAJQgDAEgEADQgFACgGABIAAABQAHAAAFABQAGACAEAEQAEAEACAGQADAFAAAGQAAAIgDAHQgDAHgFAFQgFAFgIADQgIACgJAAIgLgBg");
	this.shape_121.setTransform(91.1,-20350);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AATA/IgDAAIgCAAIgBgBIAAgBIAAgdIg1AAIgBAAIgBgBIgBgBIAAgDIAAgCIABgCIAAgCIABgCIAvhOIABgCIACgBIADAAIADAAIAEAAIADABIACAAIAAACIAABRIAQAAIADABIABAEIgBAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgQAAIAAAdIAAABIAAABIgDAAIgCAAgAgfAWIAsAAIAAhJIgBAAg");
	this.shape_122.setTransform(91.2,-20350);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgWBOQgJgEgIgFQgIgEgFgGIALgNQAGAHAKAFQAJAFAPABQAHAAAIgFQAIgEAFgIQAFgJgBgLQAAgQgIgJQgKgIgOAAQgHAAgHADQgGACgGADIgLgFIAEhNIBOAAIAAASIg7AAIgEAvIALgEQAFgCAGAAQANAAAMAFQALAFAGALQAHAKAAARQAAARgHAMQgIAMgMAGQgMAHgNAAQgMAAgKgDg");
	this.shape_123.setTransform(89.8,-20345.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgNA/QgGgCgEgEQgFgEgCgFQgEgFgBgHIgDgOIgBgSIABgPQABgIACgIQADgIAEgGQADgHAGgFQAGgFAIgCQAGgDAKAAIAHAAIAHABIAFACIADACIAAABIABABIAAABIAAACIAAACIAAABIgBABIAAAAIgEAAIgEgCIgGgBIgJgBQgKAAgFAEQgHAEgFAHQgFAHgCAJQgDAJABAKIAFgDIAIgDIAIgCIAIgBQALAAAHADQAHADAEAFQAFADABAHQACAGAAAIQAAAHgCAIQgCAHgGAGQgFAGgIAEQgIADgJAAQgHAAgGgBgAgFgBIgIABIgHACIgGAEQAAANACAKQABAJAEAGQADAFAFADQAGACAFAAQAHAAAFgCQAFgDAEgFQADgEACgGIABgKQAAgGgBgGQgBgFgDgDQgDgEgFAAQgFgCgIAAIgGABg");
	this.shape_124.setTransform(91.4,-20350);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgPA/IgDAAIgCgBIgBgBIABgDIAwhtIhAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgEIABgCIAAgCIABAAIABgBIBHAAIACABIACAAIAAACIABACIAAACIgBADIAAACIgBACIguBrIAAACIgCABIgCABIgDAAg");
	this.shape_125.setTransform(91.3,-20349.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgQA+QgIgCgFgDQgFgEgDgGQgDgGAAgHQAAgHACgFQACgFAFgEIAJgIIANgFIgLgHIgJgHIgFgJQgBgEAAgGQAAgGACgFQADgGAEgEQAEgEAIgDQAHgCAHAAQAKAAAGACQAHACAFAEQAEAEACAFQACAFAAAGIgBAKIgFAJIgJAIQgEAEgHADIANAFIAKAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgFAEgJACQgHACgJAAQgIAAgIgCgAgMAKIgIAGQgEAEgCAEQgBAEAAAEQAAALAHAGQAIAFAMAAQAOAAAHgFQAIgGgBgKQAAgFgCgEQgBgEgEgEQgDgDgHgDIgLgHIgMAHgAgRgwQgFAFAAAKQAAAEABADQACAEACADIAIAHIAJAGQAMgGAGgGQAGgHAAgJQAAgEgCgEQgCgDgCgDQgDgDgFgBQgFgBgFAAQgKAAgHAFg");
	this.shape_126.setTransform(91.2,-20350);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgTBAIgHgBIgGgCIgDgCIAAgCIgBgDIAAgCIABgCIAAAAIACgBIACABIAFACIAHABIAJABQAKAAAFgEQAIgEAFgHQAFgGACgJQACgJAAgKIgMAFQgJADgIAAQgKAAgHgDQgIgDgEgFQgFgDgBgHQgCgHAAgHQAAgIACgHQADgIAEgFQAFgGAIgEQAIgDAJAAQAIAAAFACQAGACAFADQAEAEADAGQADAFACAHIADAOIABARIgBAPIgDAQQgDAIgEAGQgEAHgGAFQgGAFgIADQgGACgKAAIgIAAgAgMgzQgFADgEAEQgCAFgCAFQgBAFAAAGQAAAGABAFQABAFADAEQADADAGABQAEACAIAAQAHAAAHgCQAIgBAFgEQAAgNgBgKQgCgJgEgGQgEgGgFgDQgFgCgGAAQgHAAgFACg");
	this.shape_127.setTransform(91.1,-20350);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AAgA/Ig+AAIgCAAIAAgBIgBgBIgBgDIABgCIABgCIAAAAIACgBIAcAAIAAhmIgbAQIgDACIgBgBIgBgBIAAgDIAAgCIAAgCIABgBIABgBIAfgTIAAgBIABAAIAAAAIACAAIACAAIACAAIACABIAAACIAABwIAYAAIABABIABAAIABACIAAACIAAADIgBABIgBABIgBAAg");
	this.shape_128.setTransform(81.4,-20350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_118}]}).to({state:[{t:this.shape_119}]},276).to({state:[{t:this.shape_120}]},275).to({state:[{t:this.shape_121}]},273).to({state:[{t:this.shape_122}]},276).to({state:[{t:this.shape_123}]},275).to({state:[{t:this.shape_124}]},275).to({state:[{t:this.shape_125}]},274).to({state:[{t:this.shape_126}]},250).to({state:[{t:this.shape_127}]},275).to({state:[{t:this.shape_128},{t:this.shape_118}]},276).to({state:[]},2807).wait(6743));

	// 100
	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_129.setTransform(58.9,-20173.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAgA/Ig+AAIgBAAIgBgBIgBgCIgBgCIABgCIABgCIABAAIABgBIAcAAIAAhmIgbAQIgCACIgCAAIgBgCIAAgDIAAgCIAAgBIABgCIACgBIAdgTIACgBIAAAAIAAAAIACAAIACAAIADAAIAAABIABACIAABwIAYAAIABABIABAAIABACIAAACIAAACIgBACIgBABIgBAAg");
	this.shape_130.setTransform(59.3,-20173.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AggA/IgCAAIgBgBIgBgBIAAgDIAAgCIAAgCIABgBIABgCIAagcIAOgRIAIgNQADgGABgGIABgKQAAgEgBgFQgCgEgDgDQgDgEgEgBQgFgCgEAAQgFAAgFABIgJAEIgGAEIgDACIgBgBIgCAAIAAgCIAAgCIAAgCIAAgCIABgBIACgCIADgCIAHgEIAJgDIALAAQAGAAAHACQAGACAEAFQAFAEACAHQADAGAAAGIgCAMQgBAGgDAIIgJANQgHAIgKALIgWAZIA4AAIACAAIABABIAAACIAAACIAAADIAAABIgBABIgCAAg");
	this.shape_131.setTransform(58.9,-20173.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgOA/IgKgCIgHgDIgEgCIgBgCIAAgBIgBgCIAAgCIABgEIACgBIADABIAHAEIAKADQAGACAGAAQAFAAAGgCQAFgCAEgDQADgDACgFQACgFAAgFQAAgGgCgFQgDgEgEgEQgFgDgGgCQgFgCgHAAIgNAAIgBAAIgBgBIgBgCIAAAAIAAgCIABgCIABgBIABAAIALAAQAHAAAEgCQAFgCAEgDQAEgEACgFQACgFAAgGQAAgEgBgEIgEgHQgDgDgEgBQgFgCgDAAQgGAAgFACIgJAEIgGAEIgDABIgBAAIgBgBIgBgBIAAgDIAAgCIABgBIAAgCIACgBIADgDIAHgDIAJgDIALgBQAGAAAHACQAGACAEAFQAFAEACAFQACAGAAAGQAAAGgCAGIgFAJQgDAEgEADQgFACgGABIAAABQAHAAAFABQAGACAEAEQAEAEACAGQADAFAAAGQAAAIgDAHQgDAHgFAFQgFAFgIADQgIACgJAAIgLgBg");
	this.shape_132.setTransform(58.8,-20173.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AASA/IgCAAIgCAAIgBgBIAAgBIAAgdIg0AAIgCAAIgBgBIgBgBIAAgDIAAgCIAAgCIABgCIABgCIAvhOIABgCIACgBIACAAIAEAAIAEAAIADABIACAAIABACIAABRIAQAAIACABIABAEIgBAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgQAAIAAAdIAAABIgCABIgBAAIgEAAgAgfAWIAsAAIAAhJIAAAAg");
	this.shape_133.setTransform(58.9,-20173.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgQA/IgKgDIgHgCIgCgCIgCgBIAAgBIAAgCIAAgCIAAgCIAAgBIABgCIABAAIAEACIAFACIAJADQAFACAHAAQAFAAAHgDQAGgBAEgEQAEgEACgFQADgGAAgIQAAgHgCgFQgCgFgFgDQgEgDgGgBQgHgCgHAAIgLABIgHABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIgBgFIAAgyQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAIA0AAIABABIACABIABABIAAADIgBADQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIguAAIAAApIAHgCIAJAAQAJABAJACQAIADAFAFQAGADACAGQADAHAAAHQAAALgEAHQgDAJgGAEQgGAGgIADQgJACgIAAIgLAAg");
	this.shape_134.setTransform(58.8,-20173.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgNA/QgGgCgFgEQgEgEgCgFQgEgFgCgHIgCgOIgBgSIABgPQABgIADgIQACgIADgGQAFgHAFgFQAGgFAIgCQAGgDAKAAIAHAAIAHABIAFACIADACIAAABIABABIABABIAAACIAAACIAAABIgCABIgBAAIgDAAIgEgCIgGgBIgKgBQgJAAgFAEQgIAEgEAHQgFAHgCAJQgDAJABAKIAFgDIAIgDIAIgCIAIgBQAKAAAHADQAIADAEAFQAFADABAHQACAGAAAIQAAAHgDAIQgCAHgFAGQgFAGgIAEQgIADgJAAQgIAAgFgBgAgFgBIgIABIgHACIgGAEQAAANABAKQACAJAEAGQADAFAGADQAFACAFAAQAHAAAFgCQAFgDAEgFQADgEACgGIACgKQAAgGgCgGQgBgFgDgDQgDgEgFAAQgFgCgIAAIgGABg");
	this.shape_135.setTransform(59.1,-20173.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgQA/IgDAAIgBgBIgBgCIABgBIAwhuIhAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgEIAAgCIABgCIABgBIABAAIBIAAIABAAIACABIABACIAAACIAAACIAAACIgBADIgBACIguBsIAAABIgCACIgCAAIgEAAg");
	this.shape_136.setTransform(59,-20173.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_129}]}).to({state:[{t:this.shape_130}]},363).to({state:[{t:this.shape_131}]},364).to({state:[{t:this.shape_132}]},364).to({state:[{t:this.shape_133}]},364).to({state:[{t:this.shape_134}]},364).to({state:[{t:this.shape_135}]},364).to({state:[{t:this.shape_136}]},364).to({state:[]},2985).wait(6743));

	// 10
	this.five = new lib._10s();
	this.five.setTransform(75.7,-20170.2,1,1,0,0,0,8.3,17.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgNA/QgGgCgEgEIgIgJQgCgFgCgHIgDgOIgBgSIABgPQABgIACgIIAHgOQAEgHAFgFQAGgFAIgCQAGgDAKAAIAHAAIAHABIAFACIADACIABABIAAABIAAABIAAACIAAACIAAABIAAABIgBAAIgDAAIgFgCIgHgBIgIgBQgKAAgGAEQgHAEgEAHQgFAHgCAJQgDAJAAAKIAHgDIAHgDIAJgCIAHgBQALAAAHADQAHADAEAFQAFADABAHQACAGAAAIQAAAHgCAIQgDAHgFAGQgFAGgIAEQgIADgJAAQgIAAgFgBgAgFgBIgIABIgHACIgHAEQABANACAKQABAJAEAGQAEAFAEADQAFACAGAAQAHAAAFgCQAGgDADgFQAEgEABgGIABgKQAAgGgBgGQgBgFgDgDQgDgEgFAAQgFgCgHAAIgHABg");
	this.shape_137.setTransform(74.6,-20173.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.five}]}).to({state:[{t:this.shape_137}]},2766).to({state:[]},2766).wait(6743));

	// 1
	this.six = new lib._00001();
	this.six.setTransform(93.3,-20170,1,1,0,0,0,8.3,17.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_138.setTransform(91.9,-20173.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.six}]}).to({state:[{t:this.shape_138}]},2766).to({state:[]},2766).wait(6743));

	// 10000
	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOQgCgGgCgFQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_139.setTransform(25.9,-20524.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AAgA/Ig+AAIgCAAIAAgBIgBgCIgBgCIABgCIABgCIAAAAIACgBIAcAAIAAhmIgbAQIgDACIgBgBIgBgBIAAgDIAAgCIAAgCIABgBIABgBIAegTIACgBIAAAAIAAAAIACAAIADAAIABAAIACACIAAABIAABwIAYAAIABABIACAAIAAACIAAACIAAACIgBACIgBABIgBAAg");
	this.shape_140.setTransform(26.3,-20524.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AggBAIgCgBIgBgBIgBgBIgBgDIAAgCIABgCIABgCIABgBIAagcIANgSIAJgMQADgHABgFIABgKQAAgFgCgDQgBgFgDgDQgDgDgFgCQgDgCgFAAQgGAAgEABIgJAEIgGAEIgEACIAAgBIgCAAIAAgCIAAgCIAAgCIAAgCIABgBIABgBIAEgDIAHgEIAJgCIAKgBQAHgBAHADQAGACAEAFQAFAEADAHQACAFAAAHIgCAMQgBAGgDAHIgJAOQgHAIgKALIgWAZIA4AAIABAAIACABIAAACIAAACIAAADIAAABIgCABIgBABg");
	this.shape_141.setTransform(25.9,-20524.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_139}]}).to({state:[{t:this.shape_140}]},999).to({state:[{t:this.shape_141}]},1000).to({state:[]},3533).wait(6743));

	// 1000
	this.one = new lib._01000();
	this.one.setTransform(43.7,-20521.2,1,1,0,0,0,8.3,17.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgPA/IgDAAIgCgBIgBgCIABgCIAvhtIg+AAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgEIAAgCIABgCIABgBIACAAIBGAAIACAAIACABIAAACIABACIAAACIgBACIAAADIgBACIguBsIAAABIgCABIgCABIgDAAg");
	this.shape_142.setTransform(42.5,-20524.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.one}]}).to({state:[{t:this.shape_142}]},2699).to({state:[]},2833).wait(6743));

	// 100
	this.two = new lib._00100();
	this.two.setTransform(60.2,-20521.2,1,1,0,0,0,8.3,17.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgNA/QgGgCgFgEIgHgJQgCgFgDgHIgCgOIgBgSIABgPQABgIADgIQACgIADgGQAEgHAGgFQAGgFAIgCQAFgDALAAIAHAAIAHABIAFACIADACIAAABIABABIABABIAAACIAAACIAAABIgCABIAAAAIgDAAIgFgCIgHgBIgJgBQgJAAgFAEQgHAEgFAHQgFAHgCAJQgCAJAAAKIAFgDIAIgDIAJgCIAHgBQAKAAAIADQAHADAEAFQAEADACAHQACAGAAAIQAAAHgCAIQgCAHgGAGQgFAGgIAEQgIADgJAAQgIAAgFgBgAgFgBIgIABIgHACIgGAEQAAANACAKQABAJAEAGQAEAFAFADQAEACAGAAQAHAAAFgCQAFgDAEgFQADgEACgGIACgKQgBgGgBgGQgBgFgDgDQgDgEgFAAQgFgCgIAAIgGABg");
	this.shape_143.setTransform(59.1,-20524.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.two}]}).to({state:[{t:this.shape_143}]},2759).to({state:[]},2773).wait(6743));

	// 10
	this.three = new lib._00010black();
	this.three.setTransform(76.8,-20521,1,1,0,0,0,8.3,17.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AASA/IgCAAIgCAAIgBgBIAAgBIAAgdIg0AAIgCAAIgBgBIgBgBIAAgDIAAgCIABgCIAAgCIABgCIAvhOIABgCIACgBIACAAIAEAAIAEAAIADABIACAAIABACIAABRIAPAAIAEABIAAAEIAAAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgPAAIAAAdIAAABIgCABIgBAAIgEAAgAgfAWIAsAAIAAhJIAAAAg");
	this.shape_144.setTransform(75.5,-20524);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.three}]}).to({state:[{t:this.shape_144}]},2764).to({state:[]},2768).wait(6743));

	// 1
	this.four = new lib._00001();
	this.four.setTransform(93.3,-20521,1,1,0,0,0,8.3,17.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgQA+QgHgCgGgDQgFgEgDgGQgDgGAAgHQAAgHACgFQACgFAEgEIAKgIIANgFIgLgHIgJgHIgFgJQgBgEAAgGQAAgGACgFQACgGAFgEQAEgEAIgDQAHgCAHAAQAKAAAHACQAGACAEAEQAFAEACAFQACAFAAAGIgBAKIgFAJIgJAIQgEAEgHADIANAFIAKAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgGAEgHACQgIACgJAAQgJAAgHgCgAgMAKIgIAGQgEAEgBAEQgCAEAAAEQgBALAIAGQAIAFAMAAQAOAAAIgFQAGgGAAgKQABgFgCgEQgCgEgEgEQgDgDgGgDIgMgHIgMAHgAgRgwQgFAFAAAKQAAAEABADQABAEADADIAIAHIAJAGQALgGAHgGQAGgHAAgJQAAgEgCgEQgBgDgDgDQgDgDgFgBQgFgBgFAAQgLAAgGAFg");
	this.shape_145.setTransform(92.2,-20524);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.four}]}).to({state:[{t:this.shape_145}]},2766).to({state:[]},2766).wait(6743));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-895.2,-20538.9,1747.2,754.8);


(lib.glow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.redglow();
	this.instance.setTransform(12.1,6,1,1,0,0,0,12.1,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},24).to({alpha:1},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.3,12.1);


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

	// Layer 6
	this.instance = new lib.yellow();
	this.instance.setTransform(-350.6,-20052.8,1,1,0,0,0,15.3,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1020));

	// Layer 5
	this.instance_1 = new lib.glow();
	this.instance_1.setTransform(-102.7,-19790.5,1.049,1,0,0,180,12.2,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1020));

	// Layer 3
	this.instance_2 = new lib.flow_an_small();
	this.instance_2.setTransform(-420.6,-20067.3,1,1,-90,0,0,2.1,97.8);

	this.instance_3 = new lib.flow_an_small();
	this.instance_3.setTransform(-326.4,-20009.6,1,1,180,0,0,-38.9,148.9);

	this.instance_4 = new lib.flow_an_small();
	this.instance_4.setTransform(-503.5,-19973.1,1,1,0,0,0,-38.9,148.9);

	this.instance_5 = new lib.flow_an_small();
	this.instance_5.setTransform(-510.6,-20086.5,1,1,0,0,0,-38.9,148.9);

	this.instance_6 = new lib.flow_an_small();
	this.instance_6.setTransform(-540.8,-20070.4,1,1,180,0,0,-38.9,148.9);

	this.instance_7 = new lib.flow_an();
	this.instance_7.setTransform(-482.7,-20026.3,1,1,-90,0,0,2.1,104.8);

	this.instance_8 = new lib.flow_an_small();
	this.instance_8.setTransform(-588.1,-20101.8,1,1,-90,0,0,2.1,97.8);

	this.instance_9 = new lib.flow_an_small();
	this.instance_9.setTransform(-833.6,-19948,1,1,180,0,0,2.1,97.8);

	this.instance_10 = new lib.flow_an();
	this.instance_10.setTransform(-692.7,-20026.3,1,1,-90,0,0,2.1,104.8);

	this.instance_11 = new lib.flow_an_small();
	this.instance_11.setTransform(-9.7,-19737.8,1,1,180,0,0,2.1,97.8);

	this.instance_12 = new lib.flow_an();
	this.instance_12.setTransform(-39.8,-19757.1,1,1,-90,0,0,2.1,104.8);

	this.instance_13 = new lib.flow_an();
	this.instance_13.setTransform(-109.8,-19757.1,1,1,-90,0,0,2.1,104.8);

	this.instance_14 = new lib.flow_an();
	this.instance_14.setTransform(-319.8,-19757.1,1,1,-90,0,0,2.1,104.8);

	this.instance_15 = new lib.flow_an();
	this.instance_15.setTransform(-529.8,-19757.1,1,1,-90,0,0,2.1,104.8);

	this.instance_16 = new lib.flow_an();
	this.instance_16.setTransform(-621.6,-19855.5,1,1,0,0,0,2.1,104.8);

	this.instance_17 = new lib.flow_an();
	this.instance_17.setTransform(-719.5,-19955.5,1,1,-90,0,0,2.1,104.8);

	this.instance_18 = new lib.flow_an();
	this.instance_18.setTransform(-824.6,-19900.5,1,1,180,0,0,2.1,104.8);

	this.instance_19 = new lib.flow_an_small();
	this.instance_19.setTransform(-763.3,-19814.2,1,1,90,0,0,2.1,97.8);

	this.instance_20 = new lib.flow_an_small();
	this.instance_20.setTransform(-615.3,-19814.2,1,1,90,0,0,2.1,97.8);

	this.instance_21 = new lib.flow_an();
	this.instance_21.setTransform(-641.7,-19779.2,1,1,180,0,0,2.1,104.8);

	this.instance_22 = new lib.flow_an_small();
	this.instance_22.setTransform(-580.8,-19761.2,1,1,0,0,0,2.1,97.8);

	this.instance_23 = new lib.flow_an();
	this.instance_23.setTransform(-528.9,-19732.8,1,1,90,0,0,2.1,104.8);

	this.instance_24 = new lib.flow_an();
	this.instance_24.setTransform(-458.9,-19732.8,1,1,90,0,0,2.1,104.8);

	this.instance_25 = new lib.flow_an();
	this.instance_25.setTransform(-248.9,-19732.8,1,1,90,0,0,2.1,104.8);

	this.instance_26 = new lib.flow_an();
	this.instance_26.setTransform(-38.9,-19732.8,1,1,90,0,0,2.1,104.8);

	this.instance_27 = new lib.flow_an_small();
	this.instance_27.setTransform(108.8,-19790.2,1,1,0,0,0,2.1,97.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1019).wait(1));

	// Layer 2
	this.instance_28 = new lib.flow_an_small();
	this.instance_28.setTransform(-483.3,-20263.9,1,1,0,0,0,2.1,97.8);

	this.instance_29 = new lib.flow_an();
	this.instance_29.setTransform(-216.1,-19876.6,0.322,1,0,0,0,2.2,104.8);

	this.instance_30 = new lib.flow_an();
	this.instance_30.setTransform(-218.7,-19789.1,1,1,-90,0,0,2.1,104.8);

	this.instance_31 = new lib.flow_an_small();
	this.instance_31.setTransform(-356.2,-20144.1,1,1,0,0,0,2.1,97.8);

	this.instance_32 = new lib.flow_an();
	this.instance_32.setTransform(-329.7,-20123.8,1,1,90,0,0,2.1,104.8);

	this.instance_33 = new lib.flow_an();
	this.instance_33.setTransform(-119.7,-20123.8,1,1,90,0,0,2.1,104.8);

	this.instance_34 = new lib.flow_an_small();
	this.instance_34.setTransform(-207.2,-20025.4,1,1,90,0,0,2.1,97.8);

	this.instance_35 = new lib.flow_an_small();
	this.instance_35.setTransform(-243.3,-20125.9,1,1,0,0,0,2.1,97.8);

	this.instance_36 = new lib.flow_an_small();
	this.instance_36.setTransform(-322.9,-20136.9,1,1,-90,0,0,2.1,97.8);

	this.instance_37 = new lib.flow_an_small();
	this.instance_37.setTransform(-360,-20069.2,1,1,180,0,0,2.1,97.8);

	this.instance_38 = new lib.flow_an_small();
	this.instance_38.setTransform(-268.9,-20050.7,1,1,0,0,0,2.1,97.8);

	this.instance_39 = new lib.flow_an();
	this.instance_39.setTransform(-244.9,-20111.1,1,1,-90,0,0,2.1,104.8);

	this.instance_40 = new lib.flow_an();
	this.instance_40.setTransform(-393.1,-20052.9,1,1,-90,0,0,2.1,104.8);

	this.instance_41 = new lib.flow_an();
	this.instance_41.setTransform(-22.6,-20146.9,1,1,0,0,0,2.1,104.8);

	this.instance_42 = new lib.flow_an();
	this.instance_42.setTransform(-216.1,-20006.6,0.322,1,0,0,0,2.2,104.8);

	this.instance_43 = new lib.flow_an();
	this.instance_43.setTransform(-9.1,-20372.4,1,1,0,0,0,2.1,104.8);

	this.instance_44 = new lib.flow_an();
	this.instance_44.setTransform(-9.9,-20462.6,1,1,0,0,0,2.1,104.8);

	this.instance_45 = new lib.flow_an();
	this.instance_45.setTransform(-57.1,-20565.1,1,1,-90,0,0,2.1,104.8);

	this.instance_46 = new lib.flow_an();
	this.instance_46.setTransform(-159.1,-20600,1,1,180,0,0,2.1,104.8);

	this.instance_47 = new lib.flow_an();
	this.instance_47.setTransform(-159.1,-20301.6,1,1,180,0,0,2.1,104.8);

	this.instance_48 = new lib.flow_an();
	this.instance_48.setTransform(-246.7,-20198.4,1,1,-90,0,0,2.1,104.8);

	this.instance_49 = new lib.flow_an();
	this.instance_49.setTransform(-427.2,-20198.4,1,1,-90,0,0,2.1,104.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28}]}).wait(1020));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-536.2,-20694.9,574.1,913.3);


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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5531).call(this.frame_5531).wait(6744));

	// Layer 34 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AniHmIAAvLIPFAAIAAPLg");
	mask.setTransform(-546.9,-20401.4);

	// Layer 31
	this.instance = new lib.spake();
	this.instance.setTransform(-522.8,-20352.7,1,1,-45.4,0,0,1.8,63.4);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:63.3,rotation:-90.4,x:-523.1},1020).wait(11255));

	// Layer 30
	this.instance_1 = new lib.blue_box();
	this.instance_1.setTransform(325.3,-19959.3,0.022,1,0,0,0,0,7.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1020).to({_off:false},0).to({scaleX:1,x:326.3},1746).to({_off:true},8297).wait(1212));

	// Layer 29
	this.instance_2 = new lib.red_box();
	this.instance_2.setTransform(325.3,-19880.6,0.022,1,0,0,0,0,7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1020).to({_off:false},0).to({regY:7.1,scaleX:1,x:326.3,y:-19880.5},1746).to({_off:true},8297).wait(1212));

	// blue_up
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUO4IAA9vIApAAIAAdvg");
	this.shape.setTransform(555.5,-20038.7);

	this.instance_3 = new lib.blue_up_conv_red();
	this.instance_3.setTransform(555.5,-19943.4,1,1.337,0,0,0,0,142.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance_3}]},1020).to({state:[{t:this.instance_3}]},1746).to({state:[{t:this.instance_3}]},2765).to({state:[]},1).wait(6743));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1020).to({_off:false},0).to({regX:0.1,scaleY:1.23,x:567.6,y:-19943.3},1746,cjs.Ease.get(-0.5)).to({regX:0,scaleY:1,x:583.5,y:-19943.4},2765).to({_off:true},1).wait(6743));

	// blue_wide
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AtwDhIAAgrIWSAAQBfAAAygJQA4gLAfgbQA8g6AAi5IAAh0IArAAIAAB0QAADShKBAQgnAjhFANQg1ALhkAAg");
	this.shape_1.setTransform(469.5,-19920.9);

	this.instance_4 = new lib.blue_wide_conv_red();
	this.instance_4.setTransform(469.8,-19922,1,1,0,0,0,88.4,21.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.instance_4}]},1020).to({state:[{t:this.instance_4}]},1746).to({state:[{t:this.instance_4}]},2765).to({state:[]},1).wait(6743));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1020).to({_off:false},0).to({x:481.8},1746,cjs.Ease.get(-0.5)).to({x:497.8},2765).to({_off:true},1).wait(6743));

	// blue
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4.3).p("A6YDTQABgaAAiTQAAhtA6hAQBFhLCNAAMAw5AAA");
	this.shape_2.setTransform(238.3,-19879.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#D92F27").ss(4.3).p("A6YDTQABgaAAiTQAAhtA6hAQBFhLCNAAMAw5AAA");
	this.shape_3.setTransform(238.3,-19879.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1020).to({state:[]},4512).wait(6743));

	// red_up
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(4.3).p("AAAHKIAAuT");
	this.shape_4.setTransform(507.5,-20033.1);

	this.instance_5 = new lib.red_up_conv_blue();
	this.instance_5.setTransform(507.5,-20017.9,1,1,0,0,0,0,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.instance_5}]},1020).to({state:[]},4512).wait(6743));

	// red
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(4.3).p("EglGAKGIAApKQAAhwBBg5QBFg+CTAAMBA7AAAQBhAAA0gKQA/gMAigfQBEg9AAjHIAAig");
	this.shape_5.setTransform(269.9,-19922.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1D9EDA").ss(4.3).p("EglGAKGIAApKQAAhwBBg5QBFg+CTAAMBA7AAAQBhAAA0gKQA/gMAigfQBEg9AAjHIAAig");
	this.shape_6.setTransform(269.9,-19922.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1020).to({state:[]},4512).wait(6743));

	// cylinder
	this.instance_6 = new lib.cylinder_1();
	this.instance_6.setTransform(507.4,-20076.2,1,1,-47.5,0,0,4.9,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1020).to({regX:5,scaleX:1,scaleY:1,rotation:-35.9,x:507.6,y:-20076},1092,cjs.Ease.get(-0.5)).to({scaleX:1,scaleY:1,rotation:-30.3,x:507.4,y:-20075.5},654).to({scaleX:1,scaleY:1,rotation:0,y:-20076.2},2765).to({_off:true},1).wait(6743));

	// king
	this.instance_7 = new lib.king_1();
	this.instance_7.setTransform(637.4,-20148.3,1,1,0,0,0,214.5,275.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5531).to({_off:true},1).wait(6743));

	// winch
	this.instance_8 = new lib.winch_1();
	this.instance_8.setTransform(470.4,-20126.3,1,1,0,0,0,8.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5531).to({_off:true},1).wait(6743));

	// boom
	this.instance_9 = new lib.boom_1();
	this.instance_9.setTransform(480.2,-20120.6,1,1,-45,0,0,12.4,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1020).to({regX:12.5,scaleX:1,scaleY:1,rotation:-34.1,x:480.3},1092,cjs.Ease.get(-0.5)).to({regX:12.4,scaleX:1,scaleY:1,rotation:0},3419).to({_off:true},1).wait(6743));

	// cyl fill
	this.instance_10 = new lib.cylinder_fill();
	this.instance_10.setTransform(552,-20135.7,0.825,1,-49.2,0,0,0.1,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1020).to({regY:2.3,scaleX:0.71,scaleY:1,rotation:-38.3,x:556.8,y:-20123},1092,cjs.Ease.get(-0.5)).to({regY:2.2,scaleX:0.63,scaleY:1,rotation:-34.8,x:563.6,y:-20117.6},654).to({regX:-0.1,scaleX:0.34,scaleY:1,rotation:-4.2,x:571.7,y:-20083.3},2765).to({_off:true},1).wait(6743));

	// Layer 13 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A1NFnIAArNMAqbAAAIAALNg");
	mask_1.setTransform(50,-19820.2);

	// Layer 11
	this.instance_11 = new lib.arrows();
	this.instance_11.setTransform(52.1,-19821,1,1,0,0,0,115.8,38.5);

	this.instance_11.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1020).to({x:145.3},1746).to({_off:true},2766).wait(6743));

	// TXT
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F4FFFF").s().p("AgJAXIgCAAIgBgBIgBAAIABgBIAMgZIAAgLIAAgDIABgDIACAAIAEgBIADABIACAAIABADIABADIAAAFIgBAEIgCAEIgCACIgMAVIgBABIgBAAIgCABIgCAAg");
	this.shape_7.setTransform(-736.3,-20167.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F4FFFF").s().p("AgsBCIgCAAIgCgBIAAgBIABgCIBUh+IABgBIACAAIABgBIADAAIACABIACABIAAABIgBADIhUB8IgBABIgCABIgBAAIgDAAgAAZA+QgFgCgDgEQgEgEgBgHQgCgGAAgHQAAgIACgFQABgHAEgEQADgFAFgCQAFgBAGAAQAIAAAFABQAFACADAFQADAEABAHIABAMQAAAIgBAGQgCAGgDAEQgEAFgEACQgFACgHAAQgHABgEgDgAAdAJQgDABgBADIgDAIIgBAKQAAAHABAFQABAEACADQACADADABIAHABQAEAAADgCQADgBACgDIACgIIABgJIgBgKIgDgIQgCgDgDgCQgDgCgEAAQgEAAgDACgAgvAAQgFgBgDgEQgDgEgCgHQgBgFAAgJQAAgHABgGQACgGADgFQADgEAFgCQAFgDAHAAQAHAAAFADQAFACADAFQADAEABAGQACAHAAAGQAAAHgCAHQgCAFgDAFQgDAFgFABQgFABgHAAQgGAAgFgBgAgqg0QgDACgCACIgDAHIgBAKIABAMQABAFACADIAFAEIAHABQAFAAACgCQADgBACgEIACgHIABgJIgBgKQgBgFgCgDQgBgDgDgCQgDgCgFAAQgDAAgDACg");
	this.shape_8.setTransform(-709.2,-20242.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4FFFF").s().p("AgsBCIgCAAIgCgBIAAgBIABgCIBUh+IABgBIACAAIABgBIADAAIACABIACABIAAACIgBABIhUB+IgBAAIgCABIgBAAIgDAAgAAZA+QgFgCgDgEQgEgEgBgHQgCgGAAgIQAAgHACgGQABgGAEgEQADgEAFgDQAFgBAGAAQAIAAAFABQAFADADAEQADAEABAGIABANQAAAIgBAGQgCAGgDAEQgEAFgEACQgFACgHABQgHgBgEgCgAAdAJQgDABgBADIgDAIIgBAKQAAAHABAEQABAFACADQACADADABIAHABQAEAAADgCQADgBACgEIACgHIABgKIgBgKIgDgHQgCgDgDgBQgDgDgEAAQgEAAgDACgAgvAAQgFgBgDgEQgDgFgCgGQgBgGAAgIQAAgHABgGQACgGADgFQADgDAFgDQAFgCAHAAQAHgBAFADQAFACADAFQADAEABAGQACAGAAAHQAAAHgCAHQgCAFgDAFQgDAEgFACQgFABgHAAQgGAAgFgBgAgqg0QgDABgCAEIgDAGIgBALIABALQABAFACADIAFAEIAHABQAFAAACgCIAFgEIACgIIABgKIgBgKIgDgHQgBgEgDgBQgDgCgFAAQgDAAgDACg");
	this.shape_9.setTransform(-709.2,-20208.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F4FFFF").s().p("AAbBEIgDAAIgDgBIgBgBIgBgBIgngyIAAAyIgBABIAAABIgCABIgEAAIgCAAIgCgBIgBgBIAAgBIAAiBIAAgBIABgBIACgBIACAAIAEAAIACABIAAABIABABIAABPIAjgkIACgBIABgBIADAAIACgBIADAAIACABIACABIAAABIgBACIgCACIgiAfIAmAvIACADIAAABIAAABIgBABIgCABIgDAAg");
	this.shape_10.setTransform(-836.2,-20242.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F4FFFF").s().p("AgLAsQgHgDgFgGQgFgGgCgIQgCgJgBgMQABgLACgJQAEgJAFgGQAFgGAHgCQAIgDAGAAIAIABIAIACIAGADIADADIACACIABABIAAACIAAACIAAAEIgDABIgDgCIgFgDQgDgDgEgBQgFgCgGAAQgLAAgHAKQgHAJAAARQAAAJACAHQACAHADAFQAEAEAFADQAFACAEAAQAGAAAFgCIAIgEIAFgEIADgCIACABIAAABIAAABIAAADIAAACIAAABIAAACIgCABIgEAEIgHADIgIADIgJAAQgHAAgHgDg");
	this.shape_11.setTransform(-845.3,-20240.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F4FFFF").s().p("AAABAIgBAAIgCgBIgBgBIAAgBIAAhWIAAgBIABgBIACAAIABgBIACABIADAAIAAABIABABIAABWIgBABIAAABIgDABIgCAAgAgFgwQgBgCAAgFQAAgEABgCQADgCACAAQAEAAACACQABABAAAFQAAAFgBABQgCACgEAAQgDAAgCgBg");
	this.shape_12.setTransform(-851.9,-20242.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F4FFFF").s().p("AAMA7QgGAAgFgDQgDgBgCgEQgEgDgBgGQgBgFAAgIIAAg0IgNAAIgCgCIgBgEIAAgCIABgBIAAgBIACgBIANAAIAAgVIAAgBIABgBIACAAIADAAIADAAIABAAIAAABIAAABIAAAVIAYAAIABABIABABIAAABIABACIgBAEIgCACIgYAAIAAAzQAAAKADAFQACAFAIAAIAEAAIADgBIADgBIACgBIABAAIAAACIABAAIAAADIgBADIAAACIgDABIgDABIgEACIgEAAg");
	this.shape_13.setTransform(-857.5,-20241.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F4FFFF").s().p("AgKAvIgHgCIgGgDIgDgCIgCgCIgBgEIAAgCIABgCIABgBIABAAIADABIAFADIAIADQADABAGAAIAHgBIAGgDIAEgFQABgDAAgEQAAgEgBgDIgGgFIgGgDIgHgEIgIgCIgIgEQgCgDgCgFQgCgEgBgFQAAgFACgEQACgFADgDQAFgEAFgCQAFgCAHAAIAGAAIAGACIAEACIADABIACACIABABIAAABIAAACIAAACIAAACIgCABIgBAAIgCgBIgEgCIgGgCIgIgBIgGABIgGADIgDAEQgBADAAADQAAAEABADQADADADACIAHAEIAHADIAIADIAHAEQAEADACAEQABAEAAAFQABAHgDAFQgCAFgFADQgEAEgGACQgGABgFAAIgJAAg");
	this.shape_14.setTransform(-864.3,-20240.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F4FFFF").s().p("AgOBAIgCgBIgBgBIABgCIAMggIgBgBIgBgBIgghUIgBgCIABgCIACAAIADgBIADABIADAAIAAABIABABIAaBLIAchLIAAgCIADAAIADgBIADABIACAAIABACIgBACIghBWIgKAhIgCACIgFABIgDAAg");
	this.shape_15.setTransform(-872.3,-20238.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F4FFFF").s().p("AgSAsQgHgDgGgGQgFgGgCgJQgDgJAAgLQAAgIADgJQACgJAGgGQAFgHAIgEQAIgDAJAAQALAAAHADQAIADAFAGQAGAGACAJQADAJAAAKQAAAJgDAJQgDAJgFAHQgGAGgIAEQgIADgJAAQgKAAgIgDgAgMghQgGADgDAFQgEAFgCAHQgCAGAAAHQAAAHACAHQABAHAEAFQADAFAGADQAGADAHAAQAHAAAGgDQAGgDADgFQAEgFACgGQABgHAAgIIgBgNQgBgGgEgGQgDgFgGgDQgGgDgIAAQgGAAgGADg");
	this.shape_16.setTransform(-881.8,-20240.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F4FFFF").s().p("AgIA/IgFgBIgDgBIgDgCIAAgBIgBgBIAAgCIAAgCIAAgCIAAgCIABgBIABAAIACABIAEACIAEABIAFABIAFgBQACgBACgCQACgDAAgEIABgMIAAhaIAAgBIABgBIACgBIADAAIADAAIACABIABABIAAABIAABcQAAAHgBAGQgBAGgDAEQgDAEgFADQgFACgGAAIgFgBg");
	this.shape_17.setTransform(-891,-20242.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F4FFFF").s().p("AgNAsQgIgDgGgGQgFgGgDgJQgDgJAAgLQAAgJADgJQADgJAGgGQAFgHAIgDQAHgDAHAAQAKAAAHADQAHADAFAGQAEAGADAHQACAIAAAIIAAACQAAABAAABQgBABAAAAQAAAAAAAAQgBAAAAAAIgEABIg6AAQAAAIACAHQABAHAEAEQAEAFAGADQAFACAHAAIALgBIAJgCIAGgDIADgBIABABIABABIAAABIAAADIAAABIAAABIgBABIAAABIgDACIgHACIgJACIgMABQgIAAgIgDgAgJgiQgFADgEAEQgDAEgCAFQgCAGAAAGIA0AAQAAgOgHgIQgHgIgMAAQgFAAgFACg");
	this.shape_18.setTransform(-776.7,-20206.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F4FFFF").s().p("AAAAuIgCAAIgBAAIgCgBIgBgBIgghUIAAgCIAAAAIAAgBIAAgBIABgBIABAAIADAAIADAAIADAAIABABIAAABIAaBMIAAAAIAAAAIAchMIAAgBIABgBIACAAIADAAIADAAIABAAIABABIAAABIAAABIAAAAIAAABIAAABIggBUIgBABIgCABIgBAAIgDAAg");
	this.shape_19.setTransform(-785.8,-20206.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F4FFFF").s().p("AAABEIgBAAIgCgBIgBgBIAAgBIAAiBIAAgBIABgBIACgBIABAAIACAAIACABIABABIAAABIAACBIAAABIgBABIgCABIgCAAg");
	this.shape_20.setTransform(-792.4,-20208.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F4FFFF").s().p("AgPAuQgFgCgFgEQgDgDgCgFQgDgFAAgFQAAgIADgFQAEgGAGgDQAFgCAHgCQAIgBAIAAIAOAAIAAgIIgBgKQgBgEgDgDQgDgDgDgCQgFgBgGAAQgEAAgEABIgIADIgGAEIgEABIgBAAIAAgBIgBgBIgBgCIABgEIACgCIAEgDIAHgDIAJgCIAHgBQAJAAAHACQAFACAFAEQAEAEABAGQACAGAAAIIAAA6IgBABIgBABIgEAAIgCAAIgCgBIAAgBIAAgKQgGAGgHAEQgIADgFAAQgHAAgGgBgAgFADQgEACgEACIgGAGQgBADAAAFQAAAHAFAFQAFAEAJAAQAFAAAGgDQAGgEAGgHIAAgVIgQAAIgLABg");
	this.shape_21.setTransform(-799.6,-20206.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F4FFFF").s().p("AAAAuIgBAAIgCAAIgCgBIgBgBIgghUIAAgCIgBAAIAAgBIABgBIABgBIACAAIACAAIAEAAIABAAIABABIABABIAaBMIAAAAIAAAAIAbhMIABgBIABgBIACAAIADAAIADAAIACAAIABABIAAABIAAABIAAAAIgBABIAAABIggBUIgBABIgBABIgDAAIgCAAg");
	this.shape_22.setTransform(-808.1,-20206.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F4FFFF").s().p("AgFAHQgCgCAAgFQAAgEACgCQACgCADAAQAEAAACACQACACAAAEQAAAFgCACQgCACgEAAQgDAAgCgCg");
	this.shape_23.setTransform(-819.4,-20202.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F4FFFF").s().p("AgfBAIgDAAIgCAAIgBgBIAAgBIAAh6IAAgBIABgBIABAAIADAAIACAAIACAAIABABIAAABIAAANIAJgHIAHgFIAIgDIAFgBQAKAAAHAEQAGADAFAGQAEAHACAIQACAJAAAJQAAAMgCAHQgDAJgFAGQgEAGgIAEQgHADgJAAIgGAAIgGgDIgGgEIgHgHIAAAuIgBABIgBABIgBAAIgDAAgAgDg0IgHADIgHAGIgIAJIAAAkQAHAJAHAFQAGAEAGAAQAGAAAFgDQAFgDADgFQADgGABgEIACgOQAAgHgCgHQAAgHgEgFQgCgGgFgDQgFgDgGAAIgFABg");
	this.shape_24.setTransform(-826.8,-20204.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F4FFFF").s().p("AgSAsQgHgDgGgGQgFgGgCgJQgDgJAAgLQAAgIADgJQACgJAGgGQAFgHAIgEQAIgDAJAAQALAAAHADQAIADAFAGQAGAGACAJQADAJAAAKQAAAJgDAJQgDAJgFAHQgGAGgIAEQgIADgJAAQgKAAgIgDgAgMghQgGADgDAFQgEAFgCAHQgCAGAAAHQAAAHACAHQABAHAEAFQADAFAGADQAGADAHAAQAHAAAGgDQAGgDADgFQAEgFACgGQABgHAAgIIgBgNQgBgGgEgGQgDgFgGgDQgGgDgIAAQgGAAgGADg");
	this.shape_25.setTransform(-837.5,-20206.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F4FFFF").s().p("AgRAvIgDAAIgCgBIgBgBIAAgBIAAhWIAAgBIABgBIACAAIADgBIACABIACAAIAAABIABABIAAAOIAHgJQADgEACgBIAFgDIAFgBIADABIAEAAIADABIADABIAAABIABABIAAABIAAACIAAADIAAACIgBABIgBAAIgCgBIgDAAIgEgBIgDgBIgFABIgFAEIgFAGIgHALIAAA5IAAABIgBABIgBABIgDAAg");
	this.shape_26.setTransform(-845.1,-20206.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F4FFFF").s().p("AggBAIgCAAIgCAAIgBgBIAAgBIAAh6IAAgBIABgBIABAAIADAAIADAAIABAAIABABIAAABIAAANIAJgHIAHgFIAHgDIAGgBQAKAAAHAEQAHADAEAGQAEAHACAIQACAJAAAJQAAAMgCAHQgDAJgFAGQgEAGgIAEQgHADgJAAIgGAAIgGgDIgGgEIgHgHIAAAuIgBABIgBABIgBAAIgEAAgAgEg0IgGADIgIAGIgHAJIAAAkQAHAJAHAFQAGAEAGAAQAGAAAFgDQAFgDADgFQADgGACgEQABgHAAgHQAAgHgBgHQgCgHgDgFQgCgGgFgDQgFgDgHAAIgFABg");
	this.shape_27.setTransform(-854.1,-20204.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F4FFFF").s().p("AgTAEIgCAAIgBgEIABgCIACgCIAnAAIABABIABABIABABIAAABIgBAEIgCAAg");
	this.shape_28.setTransform(-862.6,-20206.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F4FFFF").s().p("AghA/QAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIAAhwQAAgEACgBQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAIAcAAQAJAAAGADQAHACAFAEQAEAEACAGQADAGAAAHIgCAJIgCAHIgGAHQgCADgFACIAKACQAEACADAEQAEAEACAGQACAFAAAGQAAAGgBAFQgCAFgCADIgGAHIgIAGIgKADIgKABgAgaA0IAaAAQAGAAAEgBQAFgCADgDQAEgDACgEQACgFAAgGQAAgGgCgFQgCgEgEgEQgDgDgHgCQgFgBgHAAIgWAAgAgagGIAVAAQAFAAAFgCQAEgBAEgEQACgDACgEQABgEAAgFQAAgFgBgEQgCgEgDgDQgDgDgFgBQgEgCgGAAIgUAAg");
	this.shape_29.setTransform(-870.6,-20208);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F4FFFF").s().p("AA7A/IgDAAIgBgBIgBgBIgBAAIAAhwIgxBwIgBABIgBAAIgCABIAAAAIgCAAIgCgBIgBAAIAAgBIgwhwIAABwIAAAAIgBABIgCABIgDAAIgCAAIgDgBIAAgBIAAAAIAAh1QAAgDABgCQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIAGAAIAEAAIAEACIACACIACAEIApBiIAAAAIAqhiIADgEIACgCIADgCIADAAIAHAAIACAAIABABIACADIABACIAAB1IgBAAIgBABIgBABIgEAAg");
	this.shape_30.setTransform(-884.8,-20207.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F4FFFF").s().p("AgNAsQgIgDgGgGQgFgGgDgJQgDgJAAgLQAAgJADgJQADgJAGgGQAFgHAIgDQAHgDAHAAQAKAAAHADQAHADAFAGQAEAGADAHQACAIAAAIIAAACQAAABAAABQAAABgBAAQAAAAAAAAQgBAAAAAAIgEABIg6AAQAAAIACAHQABAHAEAEQAEAFAGADQAFACAHAAIALgBIAJgCIAGgDIADgBIABABIABABIAAABIAAADIAAABIAAABIgBABIAAABIgDACIgHACIgJACIgMABQgIAAgIgDgAgJgiQgFADgEAEQgDAEgCAFQgCAGAAAGIA0AAQAAgOgHgIQgHgIgMAAQgFAAgFACg");
	this.shape_31.setTransform(-821.1,-20172.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F4FFFF").s().p("AAABEIgBAAIgCgBIgBgBIAAgBIAAiBIAAgBIABgBIACgBIABAAIACAAIACABIABABIAAABIAACBIAAABIgBABIgCABIgCAAg");
	this.shape_32.setTransform(-828.2,-20174.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F4FFFF").s().p("AgSA/QgHgCgFgDQgFgEgCgEQgCgEAAgFIABgHQABgDACgCIAEgGIAFgFQgFgCgCgEQgDgEAAgEQAAgEADgEIAFgJQgDgDgBgFQgCgEAAgGQAAgIADgGQACgGAFgEQAEgEAGgCQAGgCAHAAIAGAAIAGABIAaAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABADQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgCABIgOAAQAEAEACAFQABAFAAAGQAAAHgCAGQgDAGgEAEQgEAEgHACQgGACgFAAQgGAAgFgBQgGgCgDgCIgDAEQgBACAAACQAAAEADACQAEADAGAAIAWABIALACQAFABAEADQAEADADAEQACAEAAAGQAAAGgCAFQgDAGgFAEQgFAEgIACQgHACgJAAQgLAAgHgBgAgVAaIgEAFIgCAFIAAAEQAAAHAHAEQAHAEANAAQAHAAAFgCIAJgEQADgDACgDIABgHQAAgHgFgDQgFgEgJAAIgYgBIgFAFgAgKg0QgEACgDADQgCADgBAEQgCAEAAAFQAAAJAGAGQAFAGAKAAQAEAAAEgCQADgCADgDQADgDABgEQABgEAAgEQAAgKgFgGQgGgFgIAAQgFAAgEABg");
	this.shape_33.setTransform(-835.1,-20170.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F4FFFF").s().p("AAdAvIgCAAIgCgBIgBgBIAAgBIAAgyQAAgIgCgFQgBgGgCgDQgDgEgEgCQgEgCgFAAQgFAAgHAFQgGAFgIAJIAAA9IAAABIgBABIgCABIgDAAIgCAAIgCgBIgBgBIAAgBIAAhWIAAgBIABgBIABAAIADgBIADABIACAAIAAABIABABIAAAMQAHgIAIgEQAHgEAFAAQAJAAAGADQAGADADAFQAEAFACAHQABAGAAAKIAAAzIAAABIgBABIgCABIgDAAg");
	this.shape_34.setTransform(-845,-20172.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F4FFFF").s().p("AgPAuQgFgCgFgEQgDgDgCgFQgCgFgBgFQAAgIAEgFQACgGAGgDQAGgCAHgCQAIgBAIAAIAOAAIAAgIIgBgKQgBgEgDgDQgCgDgFgCQgEgBgGAAQgEAAgFABIgIADIgFAEIgEABIgBAAIgBgBIAAgBIgBgCIABgEIACgCIAEgDIAHgDIAJgCIAHgBQAJAAAHACQAFACAEAEQAFAEABAGQABAGAAAIIAAA6IAAABIgBABIgDAAIgDAAIgCgBIAAgBIAAgKQgHAGgHAEQgHADgFAAQgIAAgFgBgAgFADQgEACgEACQgEADgBADQgCADAAAFQAAAHAFAFQAEAEAKAAQAEAAAGgDQAHgEAGgHIAAgVIgQAAIgLABg");
	this.shape_35.setTransform(-855.2,-20172.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F4FFFF").s().p("AgTAFIgCgCIgBgDIABgCIACgCIAnAAIABABIABABIABABIAAABIgBADIgCACg");
	this.shape_36.setTransform(-862.6,-20172.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F4FFFF").s().p("AghA/QAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIAAhwQAAgEACgBQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAIAbAAQAJAAAIADQAGACAFAEQAEAEADAGQABAGAAAHIAAAJIgEAHIgEAHQgEADgEACQAFABAEABQAFACADAEQAEAEACAGQACAFAAAGQAAAGgBAFQgCAFgCADIgHAHIgHAGIgKADIgKABgAgaA0IAaAAQAFAAAFgBQAEgCAFgDQADgDACgEQACgFAAgGQAAgGgCgFQgCgEgDgEQgFgDgGgCQgFgBgGAAIgXAAgAgagGIAWAAQAFAAAEgCQAFgBACgEQADgDABgEQACgEAAgFQAAgFgCgEQgBgEgDgDQgDgDgFgBQgEgCgHAAIgTAAg");
	this.shape_37.setTransform(-870.6,-20174.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F4FFFF").s().p("AA7A/IgDAAIgBgBIgBAAIAAgBIAAhwIgyBwIgBABIgBAAIgCABIAAAAIgCAAIgCgBIgBAAIAAgBIgvhwIAABwIgBABIgBAAIgCABIgDAAIgCAAIgDgBIAAAAIAAgBIAAh0QAAgEABgCQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIAHAAIAEAAIADACIADACIABAEIApBiIAAAAIArhiIACgEIACgCIADgCIADAAIAHAAIACAAIABABIACACIABAEIAAB0IgBABIgBAAIgBABIgEAAg");
	this.shape_38.setTransform(-884.8,-20174);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgJAXIgCAAIgBgBIgBAAIABgBIAMgZIAAgLIAAgDIABgDIACAAIAEgBIADABIACAAIABADIABADIAAAFIgBAEIgCAEIgCACIgMAVIgBABIgBAAIgCABIgCAAg");
	this.shape_39.setTransform(309.4,-20229);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F4FFFF").s().p("AgKAeQgFgCgDgEQgEgEgBgGQgCgGAAgIQAAgGACgGQABgGAEgEQADgEAFgDQAFgCAFAAQAHAAAFACQAFADADAEQADAFABAGQABAGAAAFQAAAHgBAGIgFAKQgDAFgFACQgGACgFAAQgGAAgEgCgAgFgVQgEACgBADIgDAHIgBAJIABALQABAEACADIAFAEIAFABQAEAAADgBIAFgFIACgIIABgJIgBgIQgBgFgCgDQgBgDgEgCQgCgBgEAAQgDAAgCABg");
	this.shape_40.setTransform(-712.9,-20177.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).to({state:[]},5532).wait(6743));

	// J3
	this.joy = new lib.j10();
	this.joy.setTransform(-729.6,-20243.1,1,1,0,0,0,7.2,14.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F4FFFF").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_41.setTransform(-729.6,-20242.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.joy}]}).to({state:[{t:this.shape_41}]},2766).to({state:[]},1212).wait(8297));

	// J2
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F4FFFF").s().p("AAgA/Ig+AAIgBAAIgBgBIgBgCIgBgCIABgCIABgCIABAAIABgBIAcAAIAAhmIgbAQIgCACIgCgBIgBgBIAAgDIAAgCIAAgCIABgBIACgBIAegTIABgBIAAAAIAAAAIACAAIACAAIADAAIAAABIABACIAABwIAYAAIABABIACAAIAAACIAAACIAAACIgBACIgBABIgBAAg");
	this.shape_42.setTransform(-739.4,-20242.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F4FFFF").s().p("AggBAIgCgBIgBAAIgBgDIgBgCIAAgCIABgCIABgCIABgBIAagcIAOgSIAIgMQADgGABgGIABgKQAAgFgCgDQgBgFgDgDQgDgDgEgCQgFgCgEAAQgGAAgEACIgJAEIgGADIgDACIgBgBIgCgBIAAgBIAAgCIAAgCIAAgBIABgCIACgCIADgCIAHgEIAJgCIALgBQAGgBAHADQAGADAEAEQAFAFACAFQACAHABAGIgBAMQgBAGgEAHIgKAOQgGAJgKALIgWAYIA4AAIABAAIACABIABACIAAACIAAACIgBACIgCABIgBABg");
	this.shape_43.setTransform(-739.8,-20242.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F4FFFF").s().p("AgOA/IgKgCIgHgDIgEgCIgBgCIAAgBIgBgCIAAgCIABgEIACgBIADABIAHAEIAKADQAGACAGAAQAFAAAGgCQAFgCAEgDQADgDACgFQACgFAAgFQAAgGgCgFQgDgEgEgEQgFgDgGgCQgFgCgHAAIgNAAIgBAAIgBgBIgBgCIAAAAIAAgCIABgCIABgBIABAAIALAAQAHAAAEgCQAFgCAEgDQAEgEACgFQACgFAAgGQAAgEgBgEIgEgHQgDgDgEgBQgFgCgDAAQgGAAgFACIgJAEIgGAEIgDABIgBAAIgBgBIgBgBIAAgDIAAgCIABgBIAAgCIACgBIADgDIAHgDIAJgDIALgBQAGAAAHACQAGACAEAFQAFAEACAFQACAGAAAGQAAAGgCAGIgFAJQgDAEgEADQgFACgGABIAAABQAHAAAFABQAGACAEAEQAEAEACAGQADAFAAAGQAAAIgDAHQgDAHgFAFQgFAFgIADQgIACgJAAIgLgBg");
	this.shape_44.setTransform(-739.9,-20242.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F4FFFF").s().p("AASA/IgCAAIgCAAIgBgBIAAgBIAAgdIg0AAIgCAAIgBgBIgBgBIAAgDIAAgCIAAgCIABgCIABgCIAvhOIABgCIACgBIACAAIAEAAIAEAAIADABIACAAIAAACIAABRIAQAAIADABIABAEIgBAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgQAAIAAAdIAAABIAAABIgDAAIgDAAgAgeAWIArAAIAAhJIgBAAg");
	this.shape_45.setTransform(-739.8,-20242.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F4FFFF").s().p("AgQA/IgJgDIgIgCIgDgCIAAgBIgBgBIAAgCIAAgCIAAgCIABgCIAAgBIABAAIAEABIAFAEIAJACQAFACAHAAQAFAAAGgDQAHgBAEgEQAEgEADgFQACgGAAgIQAAgHgCgFQgCgFgFgEQgEgCgHAAQgGgDgIAAIgKABIgHABIgEgBIgBgFIAAgxQAAgBAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIAzAAIACAAIABABIAAACIABACIgBADQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIguAAIAAAoIAHgBIAJAAQAJAAAIAEQAIACAGAFQAFACADAHQACAHABAHQAAAKgDAIQgEAIgGAFQgGAGgJADQgIACgIAAIgLAAg");
	this.shape_46.setTransform(-739.9,-20242.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F4FFFF").s().p("AgNA/QgGgCgFgEIgGgJQgDgFgDgHIgCgOIgBgSIABgPQABgIADgIQACgIADgGQAFgHAFgFQAGgFAIgCQAGgDAKAAIAHAAIAHABIAFACIADACIAAABIABABIAAABIAAACIAAACIAAABIgBABIAAAAIgDAAIgFgCIgHgBIgJgBQgJAAgFAEQgIAEgEAHQgFAHgCAJQgDAJAAAKIAGgDIAIgDIAIgCIAIgBQALAAAHADQAHADAEAFQAEADACAHQACAGAAAIQAAAHgDAIQgBAHgGAGQgFAGgIAEQgIADgJAAQgIAAgFgBgAgFgBIgIABIgHACIgHAEQABANACAKQABAJAEAGQAEAFAEADQAGACAFAAQAHAAAFgCQAGgDADgFQADgEACgGIABgKQABgGgCgGQgBgFgDgDQgDgEgFAAQgFgCgHAAIgHABg");
	this.shape_47.setTransform(-739.6,-20242.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F4FFFF").s().p("AgQA/IgDAAIgBgBIgBgBIABgDIAwhtIg/AAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgDIABgDIAAgCIABAAIACgBIBGAAIACABIACAAIABACIAAADIAAABIAAADIgBACIgBACIgtBrIgBACIgCACIgCAAIgEAAg");
	this.shape_48.setTransform(-739.7,-20242.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F4FFFF").s().p("AgQA+QgIgCgFgDQgFgEgDgGQgDgGAAgHQAAgHACgFQACgFAFgEIAJgIIANgFIgLgHIgIgHIgGgJQgBgEAAgGQAAgGACgFQADgGAEgEQAEgEAIgDQAHgCAIAAQAJAAAGACQAHACAFAEQAEAEACAFQACAFAAAGIgBAKIgGAJIgIAIQgEAEgHADIANAFIAKAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgGAEgIACQgHACgJAAQgJAAgHgCgAgMAKIgIAGQgEAEgBAEQgDAEAAAEQAAALAIAGQAHAFANAAQAOAAAIgFQAHgGAAgKQgBgFgCgEQgBgEgEgEQgDgDgHgDIgLgHIgMAHgAgQgwQgGAFAAAKQgBAEACADQABAEAEADIAHAHIAKAGQALgGAGgGQAGgHAAgJQAAgEgCgEQgCgDgDgDQgCgDgFgBQgEgBgGAAQgLAAgFAFg");
	this.shape_49.setTransform(-739.8,-20242.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F4FFFF").s().p("AgTBAIgIgBIgEgCIgDgCIgCgCIAAgDIAAgCIAAgCIABAAIABgBIADABIAFACIAHABIAJABQAKAAAFgEQAIgEAFgHQAEgGADgJQACgJAAgKIgNAFQgIADgIAAQgKAAgHgDQgIgDgEgFQgEgDgCgHQgCgHAAgHQAAgIACgHQACgIAFgFQAFgGAIgEQAIgDAJAAQAHAAAHACQAFACAEADQAFAEADAGQAEAFABAHIADAOIABARIgBAPIgDAQQgDAIgEAGQgEAHgGAFQgGAFgIADQgGACgLAAIgHAAgAgMgzQgFADgEAEQgDAFgBAFQgCAFAAAGQAAAGACAFQABAFADAEQADADAGABQAEACAIAAQAGAAAIgCQAIgBAFgEQAAgNgBgKQgCgJgEgGQgEgGgFgDQgGgCgFAAQgHAAgFACg");
	this.shape_50.setTransform(-739.9,-20242.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F4FFFF").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_51.setTransform(-739.8,-20242.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_42}]},276).to({state:[{t:this.shape_43}]},276).to({state:[{t:this.shape_44}]},277).to({state:[{t:this.shape_45}]},276).to({state:[{t:this.shape_46}]},277).to({state:[{t:this.shape_47}]},276).to({state:[{t:this.shape_48}]},277).to({state:[{t:this.shape_49}]},276).to({state:[{t:this.shape_50}]},277).to({state:[{t:this.shape_51}]},278).to({state:[]},1212).wait(8297));

	// J1
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F4FFFF").s().p("AAgA/Ig+AAIgCAAIAAgBIgBgCIgBgCIABgCIABgCIAAAAIACgBIAcAAIAAhmIgbAQIgDACIgBgBIgBgBIAAgDIAAgCIAAgCIABgBIABgBIAfgTIABgBIAAAAIAAAAIACAAIACAAIADAAIAAABIABACIAABwIAYAAIABABIACAAIAAACIAAACIAAACIgBACIgBABIgBAAg");
	this.shape_52.setTransform(-749.6,-20242.6);
	this.shape_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_52).wait(2766).to({_off:false},0).to({_off:true},1212).wait(8297));

	// J0
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F4FFFF").s().p("AgTAEIgCgBIgBgDIABgCIACgBIAnAAIABAAIABABIAAABIABABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgCABg");
	this.shape_53.setTransform(-759.3,-20241.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_53).to({_off:true},3978).wait(8297));

	// MB3
	this.mb = new lib.j10();
	this.mb.setTransform(-729.6,-20207.3,1,1,0,0,0,7.2,14.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F4FFFF").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_54.setTransform(-729.6,-20206.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mb}]}).to({state:[{t:this.shape_54}]},2766).to({state:[]},1212).wait(8297));

	// MB2
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F4FFFF").s().p("AAgA/Ig+AAIgBAAIgCgBIAAgBIgBgDIABgCIAAgCIACgBIABAAIAcAAIAAhlIgbAPIgCACIgCAAIgBgCIAAgDIAAgCIAAgCIABgBIACgBIAdgTIACgBIAAAAIAAAAIACAAIADAAIABAAIABABIABABIAABxIAYAAIABAAIABABIABACIAAACIAAADIgBABIgBABIgBAAg");
	this.shape_55.setTransform(-739.4,-20206.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F4FFFF").s().p("AggBAIgCgBIgBgBIgBgCIAAgCIAAgCIAAgCIABgBIABgCIAagcIANgSIAJgMQADgHABgFIABgKQAAgEgBgFQgCgEgDgDQgDgEgFgBQgDgCgFAAQgGAAgFABIgIAFIgGADIgDACIgBgBIgCAAIAAgCIAAgCIAAgCIAAgBIABgCIACgCIADgCIAHgEIAJgDIALgBQAGAAAHADQAHACADAFQAFAFACAGQADAFAAAHIgCAMQgBAGgDAIIgKANQgGAIgKAMIgWAYIA4AAIACAAIAAABIABACIAAACIAAACIgBACIAAABIgCABg");
	this.shape_56.setTransform(-739.8,-20206.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F4FFFF").s().p("AgOA/IgKgCIgHgDIgEgCIgBgCIAAgBIgBgCIAAgCIABgEIACgBIADABIAHAEIAKADQAGACAGAAQAFAAAGgCQAFgCAEgDQADgDACgFQACgFAAgFQAAgGgCgFQgDgEgEgEQgFgDgGgCQgFgCgHAAIgNAAIgBAAIgBgBIgBgCIAAAAIAAgCIABgCIABgBIABAAIALAAQAHAAAEgCQAFgCAEgDQAEgEACgFQACgFAAgGIgBgIIgEgHQgDgDgEgBQgFgCgDAAQgGAAgFACIgJAEIgGAEIgDABIgBAAIgBgBIgBgBIAAgDIAAgCIABgBIAAgCIACgBIADgDIAHgDIAJgDIALgBQAGAAAHACQAGACAEAFQAFAEACAFQACAGAAAGQAAAGgCAGIgFAJQgDAEgEADQgFACgGABIAAABQAHAAAFABQAGACAEAEQAEAEACAGQADAFAAAGQAAAIgDAHQgDAHgFAFQgFAFgIADQgIACgJAAIgLgBg");
	this.shape_57.setTransform(-739.9,-20206.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F4FFFF").s().p("AASA/IgCAAIgCAAIgBgBIAAgBIAAgdIg1AAIgBAAIgBgBIgBgBIAAgDIAAgCIAAgCIABgCIABgCIAvhOIABgCIACgBIACAAIAEAAIAEAAIADABIACAAIAAACIAABRIARAAIADABIAAAEIAAAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgRAAIAAAdIAAABIAAABIgDAAIgDAAgAgeAWIArAAIAAhJIAAAAg");
	this.shape_58.setTransform(-739.8,-20206.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F4FFFF").s().p("AgQA/IgKgDIgHgCIgDgCIgBAAIAAgCIAAgBIAAgDIAAgCIAAgCIABAAIABgBIAEABIAFAEIAJACQAFACAHgBQAGAAAFgCQAGgBAFgEQAEgDACgGQADgGAAgIQAAgHgCgFQgCgFgFgEQgEgCgHgBQgGgCgHAAIgKABIgIABIgEgBIgBgFIAAgxQAAgBAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIAzAAIABABIACABIAAABIABADIgBAEQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIguAAIAAApIAHgBIAJAAQAJAAAIACQAIADAGAFQAFACADAHQADAHgBAIQAAAJgDAJQgDAHgGAGQgGAFgIADQgJACgIAAIgLAAg");
	this.shape_59.setTransform(-739.9,-20206.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F4FFFF").s().p("AgNA/QgGgCgEgEIgHgJQgDgFgDgHIgCgOIgBgSIABgPQABgIADgIQACgIADgGQAFgHAFgFQAGgFAIgCQAFgDALAAIAHAAIAHABIAFACIADACIABABIAAABIABABIAAACIAAACIAAABIgBABIgCAAIgCAAIgFgCIgHgBIgIgBQgKAAgFAEQgHAEgFAHQgFAHgCAJQgCAJAAAKIAGgDIAHgDIAIgCIAIgBQALAAAHADQAHADAEAFQAEADACAHQACAGAAAIQAAAHgCAIQgDAHgFAGQgFAGgIAEQgIADgJAAQgIAAgFgBgAgFgBIgIABIgHACIgGAEQAAANABAKQACAJAEAGQADAFAFADQAGACAFAAQAHAAAFgCQAFgDAEgFQADgEACgGIACgKQAAgGgCgGQgBgFgDgDQgDgEgFAAQgFgCgIAAIgGABg");
	this.shape_60.setTransform(-739.6,-20206.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F4FFFF").s().p("AgPA/IgDAAIgDgBIAAgCIABgCIAwhtIhAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBIgBgDIAAgDIABgBIABgCIABAAIBHAAIADAAIABACIAAABIABADIAAABIgBACIAAADIgBACIguBsIAAABIgCABIgCABIgDAAg");
	this.shape_61.setTransform(-739.7,-20206.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F4FFFF").s().p("AgQA+QgIgCgFgDQgFgEgDgGQgDgGAAgHQAAgHACgFQACgFAFgEIAJgIQAFgEAIgBIgMgHIgHgHIgGgJQgBgEAAgGQAAgGACgFQADgGAEgEQAFgEAHgDQAHgCAIAAQAIAAAHACQAHACAFAEQAEAEACAFQACAFAAAGQAAAFgBAFIgGAJIgIAIQgFAEgGADIANAFIAKAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgGAEgIACQgHACgJAAQgIAAgIgCgAgMAKIgJAGQgDAEgBAEQgDAEAAAEQABALAHAGQAHAFANAAQAOAAAIgFQAHgGAAgKQAAgFgDgEQgBgEgEgEQgEgDgFgDIgMgHIgMAHgAgRgwQgGAFABAKQAAAEABADQACAEACADIAIAHIAKAGQAKgGAHgGQAGgHAAgJQAAgEgCgEQgCgDgCgDQgEgDgEgBQgEgBgGAAQgLAAgGAFg");
	this.shape_62.setTransform(-739.8,-20206.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F4FFFF").s().p("AgUBAIgHgBIgEgCIgDgCIgBgCIgBgDIAAgCIABgCIAAAAIABgBIADABIAFACIAHABIAJABQAKAAAGgEQAHgEAFgHQAEgGADgJQACgJAAgKIgNAFQgHADgJAAQgKAAgIgDQgHgDgEgFQgEgDgCgHQgCgHAAgHQAAgIACgHQADgIAEgFQAFgGAIgEQAIgDAJAAQAHAAAGACQAGACAEADQAFAEADAGQADAFACAHIADAOIABARIgBAPIgDAQQgDAIgEAGQgEAHgGAFQgGAFgIADQgGACgLAAIgIAAgAgMgzQgFADgDAEQgDAFgCAFQgCAFAAAGQAAAGACAFQABAFADAEQAEADAEABQAFACAIAAQAGAAAIgCQAIgBAFgEQAAgNgBgKQgCgJgEgGQgEgGgFgDQgFgCgGAAQgHAAgFACg");
	this.shape_63.setTransform(-739.9,-20206.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F4FFFF").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_64.setTransform(-739.8,-20206.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_55}]},276).to({state:[{t:this.shape_56}]},276).to({state:[{t:this.shape_57}]},277).to({state:[{t:this.shape_58}]},276).to({state:[{t:this.shape_59}]},277).to({state:[{t:this.shape_60}]},276).to({state:[{t:this.shape_61}]},277).to({state:[{t:this.shape_62}]},276).to({state:[{t:this.shape_63}]},277).to({state:[{t:this.shape_64}]},278).to({state:[]},1212).wait(8297));

	// MB1
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F4FFFF").s().p("AAgA/Ig+AAIgCAAIgBgBIAAgBIAAgDIAAgCIAAgCIABgBIACAAIAcAAIAAhlIgbAPIgDACIgBAAIgBgCIAAgDIAAgCIABgCIAAgBIABgBIAegTIABgBIABAAIAAAAIACAAIACAAIADAAIAAABIABABIAABxIAYAAIABAAIACABIAAACIAAACIAAADIgBABIgBABIgBAAg");
	this.shape_65.setTransform(-749.6,-20206.8);
	this.shape_65._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_65).wait(2766).to({_off:false},0).to({_off:true},1212).wait(8297));

	// MB0
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F4FFFF").s().p("AgTAEIgCAAIgBgEIABgCIACgCIAnAAIABABIABABIABACIAAAAIgBAEIgCAAg");
	this.shape_66.setTransform(-759.3,-20206.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_66).to({_off:true},3978).wait(8297));

	// 1000
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F4FFFF").s().p("AgQA+QgIgCgFgDQgFgEgDgGQgDgGAAgHQAAgHACgFQACgFAFgEIAJgIIANgFIgLgHIgIgHIgGgJQgBgEAAgGQAAgGACgFQADgGAEgEQAFgEAHgDQAHgCAHAAQAJAAAIACQAGACAEAEQAFAEACAFQACAFAAAGQAAAFgCAFIgEAJIgJAIQgEAEgHADIANAFIAKAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgGAEgHACQgIACgJAAQgJAAgHgCgAgMAKIgIAGQgEAEgCAEQgBAEAAAEQAAALAHAGQAHAFANAAQAOAAAIgFQAHgGAAgKQAAgFgDgEQgBgEgEgEQgDgDgHgDIgLgHIgMAHgAgQgwQgHAFAAAKQAAAEACADQABAEAEADIAHAHIAJAGQAMgGAGgGQAGgHAAgJQAAgEgCgEQgCgDgCgDQgEgDgEgBQgFgBgFAAQgLAAgFAFg");
	this.shape_67.setTransform(-753.1,-20174.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F4FFFF").s().p("AgQA/IgDAAIgBgBIgBgBIABgDIAwhtIg/AAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgEIAAgCIABgCIABgBIACAAIBHAAIABAAIACABIABACIAAACIAAADIAAABIgBADIgBACIguBsIAAABIgCABIgCABIgEAAg");
	this.shape_68.setTransform(-753.1,-20174.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F4FFFF").s().p("AgNA/QgGgCgFgEIgHgJQgCgFgDgHIgCgOIgBgSIABgPQABgIACgIQADgIAEgGQADgHAGgFQAGgFAIgCQAFgDALAAIAHAAIAHABIAFACIADACIAAABIABABIABABIAAACIAAACIAAABIgCABIgBAAIgDAAIgEgCIgHgBIgJgBQgJAAgFAEQgHAEgFAHQgFAHgCAJQgCAJgBAKIAHgDIAHgDIAIgCIAIgBQAKAAAIADQAHADAEAFQAEADACAHQACAGAAAIQAAAHgDAIQgBAHgGAGQgFAGgIAEQgIADgJAAQgHAAgGgBgAgFgBIgIABIgHACIgHAEQAAANADAKQABAJAEAGQADAFAGADQAFACAFAAQAHAAAFgCQAFgDAEgFQADgEACgGIACgKQAAgGgCgGQgBgFgDgDQgDgEgFAAQgFgCgIAAIgGABg");
	this.shape_69.setTransform(-753,-20174.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F4FFFF").s().p("AgQA/IgKgCIgHgDIgDgBIgBgBIAAgCIAAgCIAAgCIAAgCIAAgCIABgBIABAAIAEABIAFADIAJADQAFABAHAAQAFAAAHgCQAGgBAEgEQAEgEACgFQADgGAAgIQAAgHgCgFQgCgFgEgEQgFgCgGAAQgHgDgHAAIgLABIgHABIgEgBIgBgFIAAgyQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAIA0AAIABABIACABIABABIAAADIgBADQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIguAAIAAAnIAHAAIAJAAQAJgBAJADQAIADAFAFQAGACACAHQADAHAAAHQAAALgEAHQgDAJgGAEQgGAGgIADQgJADgIAAIgLgBg");
	this.shape_70.setTransform(-753.3,-20174.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F4FFFF").s().p("AATA/IgDAAIgCAAIgBgBIAAgBIAAgdIg1AAIgBAAIgBgBIgBgBIAAgDIAAgCIABgCIAAgCIABgCIAvhOIABgCIACgBIADAAIADAAIAEAAIADABIACAAIAAACIAABRIAQAAIADABIABAEIgBAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgQAAIAAAdIAAABIAAABIgDAAIgCAAgAgeAWIArAAIAAhJIgBAAg");
	this.shape_71.setTransform(-753.2,-20174.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F4FFFF").s().p("AgOA/IgKgCIgHgDIgEgCIgBgCIAAgBIgBgCIAAgCIABgEIACgBIADABIAHAEIAKADQAGACAGAAQAFAAAGgCQAFgCAEgDQADgDACgFQACgFAAgFQAAgGgCgFQgDgEgEgEQgFgDgGgCQgFgCgHAAIgNAAIgBAAIgBgBIgBgCIAAAAIAAgCIABgCIABgBIABAAIALAAQAHAAAEgCQAFgCAEgDQAEgEACgFQACgFAAgGIgBgIIgEgHQgDgDgEgBQgFgCgDAAQgGAAgFACIgJAEIgGAEIgDABIgBAAIgBgBIgBgBIAAgDIAAgCIABgBIAAgCIACgBIADgDIAHgDIAJgDIALgBQAGAAAHACQAGACAEAFQAFAEACAFQACAGAAAGQAAAGgCAGIgFAJQgDAEgEADQgFACgGABIAAABQAHAAAFABQAGACAEAEQAEAEACAGQADAFAAAGQAAAIgDAHQgDAHgFAFQgFAFgIADQgIACgJAAIgLgBg");
	this.shape_72.setTransform(-753.3,-20174.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F4FFFF").s().p("AggBAIgCgBIgBgBIgBgCIAAgCIAAgCIAAgCIABgCIABgBIAagcIAOgSIAIgMQADgGABgGIABgKQAAgEgBgFQgCgEgDgDQgDgDgEgCQgFgCgEAAQgGAAgFABIgIAEIgGAEIgDACIgBgBIgCgBIAAgBIAAgCIAAgCIAAgCIABgBIACgCIADgCIAHgEIAJgDIAKgBQAHAAAHADQAHADADAEQAFAEADAGQABAGAAAHIgBAMQAAAGgEAIIgJANQgHAIgKAMIgWAYIA4AAIABAAIACABIABACIAAACIAAACIgBACIgCABIgBABg");
	this.shape_73.setTransform(-753.1,-20174.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F4FFFF").s().p("AAgA/Ig+AAIgCAAIgBgBIAAgCIAAgCIAAgCIAAgCIABgBIACAAIAcAAIAAhmIgbAQIgDACIgBAAIgBgCIAAgDIAAgCIABgCIAAgBIABgBIAegTIABAAIABgBIAAAAIACAAIACAAIADABIABAAIAAABIAABxIAYAAIABAAIACABIAAACIAAACIAAACIgBACIgBABIgBAAg");
	this.shape_74.setTransform(-752.8,-20174.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F4FFFF").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOQgCgGgCgFQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_75.setTransform(-753.1,-20174.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67}]}).to({state:[{t:this.shape_67}]},1020).to({state:[{t:this.shape_68}]},317).to({state:[{t:this.shape_69}]},530).to({state:[{t:this.shape_70}]},530).to({state:[{t:this.shape_71}]},530).to({state:[{t:this.shape_72}]},530).to({state:[{t:this.shape_73}]},530).to({state:[{t:this.shape_74}]},530).to({state:[{t:this.shape_75}]},530).to({state:[]},485).to({state:[]},5531).wait(1212));

	// 100
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F4FFFF").s().p("AgQA/IgKgCIgGgDIgDgBIgBgBIgBgCIAAgCIgBgCIABgCIABgCIAAgBIABAAIAEABIAFADIAJADQAFABAIAAQAEAAAGgCQAGgBAFgEQAEgEACgFQADgGAAgIQAAgHgCgFQgCgFgEgEQgFgCgHAAQgGgDgIAAIgKABIgHABIgEgBIgBgFIAAgyQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIAzAAIACABIABABIAAABIABADIgBADQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIguAAIAAAnIAHAAIAJAAQAJgBAIADQAJADAFAFQAFACADAHQADAHgBAHQAAALgDAHQgDAJgGAEQgGAGgJADQgIADgIAAIgLgBg");
	this.shape_76.setTransform(-741.8,-20174.2);

	this.fourteen = new lib._32_rewind();
	this.fourteen.setTransform(-740.4,-20171.3,1,1,0,0,0,8.3,17.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F4FFFF").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOQgCgGgCgFQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_77.setTransform(-741.7,-20174.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76}]}).to({state:[{t:this.fourteen}]},1020).to({state:[{t:this.shape_77}]},4504).to({state:[]},8).to({state:[]},5531).wait(1212));

	// 10
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F4FFFF").s().p("AgQA+QgIgCgFgDQgFgEgDgGQgDgGAAgHQAAgHACgFQACgFAFgEIAJgIQAFgEAIgBIgLgHIgIgHIgGgJQgBgEAAgGQAAgGACgFQADgGAEgEQAEgEAIgDQAHgCAIAAQAIAAAIACQAGACAFAEQAEAEACAFQACAFAAAGQAAAFgCAFIgFAJIgIAIQgFAEgGADIAOAFIAJAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgFAEgIACQgIACgJAAQgJAAgHgCgAgMAKIgIAGQgEAEgBAEQgCAEAAAEQAAALAHAGQAHAFANAAQAOAAAHgFQAIgGAAgKQAAgFgDgEQgBgEgEgEQgDgDgHgDIgLgHIgMAHgAgQgwQgGAFgBAKQAAAEACADQACAEADADIAHAHIAKAGQALgGAGgGQAGgHAAgJQAAgEgCgEQgBgDgEgDQgCgDgFgBQgFgBgFAAQgKAAgGAFg");
	this.shape_78.setTransform(-729.9,-20174.4);

	this.fifteen = new lib._00010_rewind();
	this.fifteen.setTransform(-674.7,-20170.3,1,1,0,0,0,8.3,17.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F4FFFF").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_79.setTransform(-729.8,-20174.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_78}]}).to({state:[{t:this.fifteen}]},1020).to({state:[{t:this.shape_79}]},4511).to({state:[]},1).to({state:[]},5531).wait(1212));

	// Layer 12
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AA5AvIgDAAIgCgBIgBgBIAAgBIAAg0IgCgLQAAgGgDgDQgDgEgDgCQgEgCgEAAQgHAAgGAFQgHAFgHAJIAAA9IAAABIgBABIgCABIgCAAIgBAAIgDgBIAAgBIAAgBIAAg0IgBgLIgEgJQgDgEgDgCQgEgCgFAAQgGAAgGAFQgHAFgHAJIAAA9IAAABIgBABIgCABIgDAAIgDAAIgCgBIgBgBIAAgBIAAhWIAAgBIABgBIACAAIADgBIADABIABAAIABABIABABIAAAMQAHgIAHgEQAHgEAGAAQAGAAAEACQAFABADACQAEADABADIADAHIAIgIIAIgGIAHgDIAGgBQAJAAAFADQAHADADAFQADAFACAHQABAGAAAIIAAA1IAAABIgBABIgCABIgCAAg");
	this.shape_80.setTransform(407.6,-20233.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAdBEIgCAAIgCgBIgBgBIAAgBIAAg0QAAgIgCgFQgBgEgCgDQgDgEgEgCQgEgCgFAAQgFAAgHAFQgGAFgIAHIAAA/IAAABIgBABIgCABIgDAAIgCAAIgCgBIgBgBIAAgBIAAiBIAAgBIABgBIACgBIACAAIADAAIACABIABABIAAABIAAA3QAHgIAIgEQAHgEAFAAQAJAAAGADQAGADADAFQAEAFACAHQABAEAAAKIAAA1IAAABIgBABIgCABIgDAAg");
	this.shape_81.setTransform(394.5,-20235.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgSAsQgHgDgGgGQgFgGgCgJQgDgJAAgLQAAgIADgJQACgJAGgGQAFgHAIgEQAIgDAJAAQALAAAHADQAIADAFAGQAGAGACAJQADAJAAAKQAAAJgDAJQgDAJgFAHQgGAGgIAEQgIADgJAAQgKAAgIgDgAgMghQgGADgDAFQgEAFgCAHQgCAGAAAHQAAAHACAHQABAHAEAFQADAFAGADQAGADAHAAQAHAAAGgDQAGgDADgFQAEgFACgGQABgHAAgIIgBgNQgBgGgEgGQgDgFgGgDQgGgDgIAAQgGAAgGADg");
	this.shape_82.setTransform(384.1,-20233.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAbBEIgDAAIgCgBIgCgBIgBgBIgogyIAAAyIAAABIAAABIgDABIgDAAIgCAAIgCgBIgBgBIAAgBIAAiBIAAgBIABgBIACgBIACAAIADAAIADABIAAABIAAABIAABPIAkgkIABgBIACgBIADAAIACgBIADAAIACABIABABIAAABIAAACIgCACIgiAfIAmAvIABADIABABIAAABIgBABIgCABIgDAAg");
	this.shape_83.setTransform(375.8,-20235.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAuA/IgDAAIgDAAIgBgBIAAgBIgMgiIg1AAIgMAiIgBABIgBABIgCAAIgDAAIgEAAIgBgBIgBgBIABgCIAsh2IAAgCIACgBIACAAIACAAIADAAIABAAIACABIABACIAsB2IABACIgBACIgCAAIgDAAgAgXARIAuAAIgXhCIAAAAg");
	this.shape_84.setTransform(130.8,-20173);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AA4AvIgDAAIgBgBIgBgBIAAgBIAAg0IgCgLQAAgGgDgDQgCgEgEgCQgEgCgEAAQgHAAgGAFQgHAFgHAJIAAA9IAAABIgBABIgCABIgCAAIgCAAIgBgBIgBgBIgBgBIAAg0IgBgLIgDgJQgDgEgDgCQgEgCgFAAQgGAAgHAFQgGAFgHAJIAAA9IAAABIgBABIgCABIgDAAIgCAAIgDgBIAAgBIAAgBIAAhWIAAgBIAAgBIACAAIADgBIACABIADAAIAAABIABABIAAAMQAHgIAHgEQAHgEAHAAQAFAAAEACQAFABADACQAEADABADIADAHIAIgIIAIgGIAHgDIAGgBQAJAAAGADQAFADAEAFQAEAFABAHQACAGAAAIIAAA1IgBABIgBABIgBABIgEAAg");
	this.shape_85.setTransform(117.3,-20171.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAAA/IgBAAIgCAAIgBAAIgBgBIgBAAIAAgBIgrh3IgBgCIABgBIACgBIAEAAIADAAIABAAIABABIAAABIAmBuIAmhuIAAgBIACgBIACAAIADAAIAEAAIABABIABABIgBACIgrB3IgBABIgBABIgCAAIgDAAg");
	this.shape_86.setTransform(350.9,-20350);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAAA/IgBAAIgCAAIgBAAIgBgBIgBAAIAAgBIgsh3IAAgCIAAgBIADgBIAEAAIADAAIABAAIABABIAAABIAmBuIAmhuIAAgBIACgBIACAAIADAAIAEAAIABABIABABIgBACIgrB3IgBABIgBABIgDAAIgCAAg");
	this.shape_87.setTransform(114.9,-20350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]}).to({state:[]},5532).wait(6743));

	// 10000
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOQgCgGgCgFQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_88.setTransform(300.8,-20235.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAgA/Ig+AAIgCAAIAAgBIgBgCIgBgCIABgCIABgCIAAgBIACAAIAcAAIAAhmIgbAQIgDACIgBgBIgBgBIAAgDIAAgCIAAgCIABgBIABgBIAfgTIABgBIAAAAIAAAAIACAAIACAAIADAAIAAABIABACIAABwIAYAAIABAAIACABIAAACIAAACIAAACIgBACIgBABIgBAAg");
	this.shape_89.setTransform(301.8,-20235.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AghA/IgBAAIgCgBIAAgCIAAgCIAAgCIAAgCIABgCIABgBIAagbIAOgTIAIgMQADgGABgGIABgKQAAgFgBgDQgCgFgDgDQgDgEgEgBQgFgCgDAAQgHAAgFACIgIADIgGAEIgEACIgBgBIAAgBIgBgBIAAgCIAAgCIAAgBIABgCIABgCIAEgCIAHgEIAJgDIALgBQAGAAAHADQAHACADAFQAFAFACAFQACAHABAGIgBAMQgBAGgEAHIgKAOQgGAJgKAKIgWAZIA4AAIABAAIACABIABACIAAACIAAACIgBACIgCABIgBAAg");
	this.shape_90.setTransform(300.6,-20235.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgOA/IgKgCIgHgDIgEgCIgBgCIAAgBIgBgCIAAgCIABgEIACgBIADABIAHAEIAKADQAGACAGAAQAFAAAGgCQAFgCAEgDQADgDACgFQACgFAAgFQAAgGgCgFQgDgEgEgEQgFgDgGgCQgFgCgHAAIgNAAIgBAAIgBgBIgBgCIAAAAIAAgCIABgCIABgBIABAAIALAAQAHAAAEgCQAFgCAEgDQAEgEACgFQACgFAAgGIgBgIIgEgHQgDgDgEgBQgFgCgDAAQgGAAgFACIgJAEIgGAEIgDABIgBAAIgBgBIgBgBIAAgDIAAgCIABgBIAAgCIACgBIADgDIAHgDIAJgDIALgBQAGAAAHACQAGACAEAFQAFAEACAFQACAGAAAGQAAAGgCAGIgFAJQgDAEgEADQgFACgGABIAAABQAHAAAFABQAGACAEAEQAEAEACAGQADAFAAAGQAAAIgDAHQgDAHgFAFQgFAFgIADQgIACgJAAIgLgBg");
	this.shape_91.setTransform(300.9,-20235.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AATA/IgDAAIgCAAIgBgBIAAgBIAAgdIg0AAIgCAAIgBgBIgBgBIAAgDIAAgCIABgCIAAgCIABgCIAvhOIABgCIACgBIACAAIAEAAIAEAAIADABIACAAIAAACIAABRIAQAAIADABIABAEIgBAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgQAAIAAAdIAAABIgBABIgCAAIgCAAgAgfAWIAsAAIAAhJIAAAAg");
	this.shape_92.setTransform(300.5,-20235.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88}]}).to({state:[{t:this.shape_88}]},2766).to({state:[{t:this.shape_89}]},469).to({state:[{t:this.shape_90}]},577).to({state:[{t:this.shape_91}]},582).to({state:[{t:this.shape_92}]},582).to({state:[]},556).wait(6743));

	// 1000
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AggA/IgCAAIgBgBIgBgCIAAgCIAAgCIAAgCIABgCIABgBIAagbIANgTIAJgMQADgGABgGIABgKQAAgFgCgDQgBgFgDgDQgDgEgFgBQgDgCgFAAQgGAAgEACIgJADIgGAEIgEACIAAgBIgBgBIgBgBIAAgCIAAgCIAAgBIABgCIABgCIAEgCIAHgEIAJgDIALgBQAGAAAHADQAGACAFAFQAEAFACAFQADAHAAAGIgCAMQgBAGgDAHIgJAOQgHAJgKAKIgWAZIA4AAIACAAIAAABIACACIAAACIAAACIgCACIAAABIgCAAg");
	this.shape_93.setTransform(319.9,-20235.8);

	this.eleven = new lib._582();
	this.eleven.setTransform(321,-20232.9,1,1,0,0,0,8.3,17.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgQA/IgDAAIgBgBIgBgCIABgBIAvhuIg+AAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgEIABgCIAAgCIABgBIACAAIBHAAIACAAIABABIAAACIABACIAAACIgBACIAAADIgBACIgtBsIgCABIgBABIgCABIgEAAg");
	this.shape_94.setTransform(319.9,-20235.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93}]}).to({state:[{t:this.eleven}]},2766).to({state:[{t:this.shape_94}]},2650).to({state:[]},116).wait(6743));

	// 100
	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgQA/IgKgDIgGgCIgEgCIAAAAIgBgCIAAgCIgBgCIABgCIABgCIAAAAIABgBIADABIAGAEIAJACQAFABAIAAQAFAAAGgCQAFgBAFgEQAEgEACgFQADgGAAgIQAAgHgCgFQgCgFgFgEQgEgCgGgBQgHgBgHAAIgKAAIgIABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIgBgFIAAgyQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAIA0AAIACABIABABIAAABIABADIgBAEQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIguAAIAAAoIAHAAIAJAAQAJgBAIAEQAJACAFAFQAGACACAHQADAHAAAHQAAAKgEAJQgDAIgGAEQgGAGgJADQgIADgIgBIgLAAg");
	this.shape_95.setTransform(336.2,-20235.7);

	this.twelve = new lib._00100();
	this.twelve.setTransform(337.5,-20232.9,1,1,0,0,0,8.3,17.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgQA/IgKgDIgHgCIgDgCIgBAAIAAgCIAAgBIAAgDIAAgCIAAgBIABgBIABgBIAEACIAFACIAJADQAFABAHAAQAGAAAFgBQAHgCAEgEQAEgDADgGQACgGAAgIQAAgHgCgFQgCgFgEgEQgFgCgHAAQgGgCgIAAIgKAAIgHABIgEgBIgBgFIAAgxQAAgBAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIA0AAIAAAAIACABIABABIAAADIgBADQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgvAAIAAAoIAHAAIAJAAQAJgBAJADQAHADAGAFQAFACADAHQADAHgBAHQABALgEAHQgDAIgGAGQgGAFgIADQgJACgIAAIgLAAg");
	this.shape_96.setTransform(336.2,-20235.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95}]}).to({state:[{t:this.twelve}]},2766).to({state:[{t:this.shape_96}]},2650).to({state:[]},116).wait(6743));

	// 10
	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_97.setTransform(353,-20235.5);

	this.thirteen = new lib._00010();
	this.thirteen.setTransform(354.1,-20232.6,1,1,0,0,0,8.3,17.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOQgCgGgCgFQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_98.setTransform(353,-20235.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_97}]}).to({state:[{t:this.thirteen}]},2766).to({state:[{t:this.shape_98}]},2650).to({state:[]},116).wait(6743));

	// 10v right
	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_99.setTransform(331.2,-20350);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAgA/Ig+AAIgCAAIAAgBIgBgBIgBgDIABgCIABgCIAAAAIACgBIAcAAIAAhmIgbAQIgDACIgBgBIgBgBIAAgDIAAgCIAAgCIABgBIABgBIAegTIABgBIABAAIAAAAIACAAIACAAIACAAIACABIAAACIAABwIAYAAIABABIABAAIABACIAAACIAAADIgBABIgBABIgBAAg");
	this.shape_100.setTransform(331.6,-20350);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AggA/IgCAAIgCgBIAAgCIAAgCIAAgCIAAgCIABgCIABgBIAagcIAOgRIAIgNQADgHABgFIABgKQAAgFgBgDQgCgFgDgDQgDgDgEgCQgFgCgEAAQgFAAgFABIgJAFIgGADIgEACIAAgBIgCAAIAAgCIAAgCIAAgCIAAgCIABgBIABgCIAEgCIAHgEIAJgCIALgCQAGAAAHADQAGACAFAFQAEAFADAGQACAFAAAHIgCAMQAAAGgEAIIgKANQgGAIgKAMIgWAYIA4AAIABAAIACABIAAACIAAACIAAACIAAACIgCABIgBAAg");
	this.shape_101.setTransform(331.2,-20350);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgOA/IgKgCIgHgDIgEgCIgBgCIAAgBIgBgCIAAgCIABgEIACgBIADABIAHAEIAKADQAGACAGAAQAFAAAGgCQAFgCAEgDQADgDACgFQACgFAAgFQAAgGgCgFQgDgEgEgEQgFgDgGgCQgFgCgHAAIgNAAIgBAAIgBgBIgBgCIAAAAIAAgCIABgCIABgBIABAAIALAAQAHAAAEgCQAFgCAEgDQAEgEACgFQACgFAAgGQAAgEgBgEIgEgHQgDgDgEgBQgFgCgDAAQgGAAgFACIgJAEIgGAEIgDABIgBAAIgBgBIgBgBIAAgDIAAgCIABgBIAAgCIACgBIADgDIAHgDIAJgDIALgBQAGAAAHACQAGACAEAFQAFAEACAFQACAGAAAGQAAAGgCAGIgFAJQgDAEgEADQgFACgGABIAAABQAHAAAFABQAGACAEAEQAEAEACAGQADAFAAAGQAAAIgDAHQgDAHgFAFQgFAFgIADQgIACgJAAIgLgBg");
	this.shape_102.setTransform(331.1,-20350);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AATA/IgDAAIgCAAIgBgBIAAgBIAAgdIg1AAIgBAAIgBgBIgBgBIAAgDIAAgCIABgCIAAgCIABgCIAvhOIABgCIACgBIADAAIADAAIAEAAIADABIACAAIAAACIAABRIAQAAIADABIABAEIgBAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgQAAIAAAdIAAABIAAABIgCAAIgDAAgAgeAWIArAAIAAhJIgBAAg");
	this.shape_103.setTransform(331.2,-20350);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgQA/IgJgDIgHgCIgEgCIAAAAIgBgCIAAgCIgBgCIABgCIABgBIAAgCIABAAIAEACIAFACIAJADQAFACAHAAQAFAAAGgCQAHgCAEgEQAEgEACgFQADgGAAgIQAAgHgCgFQgCgFgEgEQgFgCgHgBQgGgCgIAAIgJACIgIAAIgEgBIgBgFIAAgyQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIA0AAIAAAAIACABIAAABIABADIgBADQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgvAAIAAAoIAHgBIAJAAQAJAAAIADQAJADAFAFQAFACADAHQADAHAAAHQgBAKgDAIQgDAJgGAEQgGAGgJADQgIACgIAAIgLAAg");
	this.shape_104.setTransform(331.1,-20349.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgNA/QgGgCgFgEIgHgJQgCgFgDgHIgCgOIgBgSIABgPQABgIACgIQADgIAEgGQAEgHAFgFQAGgFAIgCQAFgDALAAIAHAAIAHABIAFACIADACIAAABIABABIABABIAAACIAAACIAAABIgCABIAAAAIgDAAIgFgCIgGgBIgKgBQgJAAgFAEQgIAEgEAHQgFAHgCAJQgCAJAAAKIAFgDIAIgDIAIgCIAIgBQAKAAAIADQAHADAEAFQAFADABAHQACAGAAAIQAAAHgCAIQgDAHgFAGQgFAGgIAEQgIADgJAAQgIAAgFgBgAgFgBIgIABIgHACIgGAEQAAANACAKQABAJAEAGQAEAFAFADQAEACAGAAQAHAAAFgCQAFgDAEgFQADgEACgGIACgKQAAgGgCgGQgBgFgDgDQgDgEgFAAQgFgCgHAAIgHABg");
	this.shape_105.setTransform(331.4,-20350);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgRBPQACgeAFgXQAEgZAIgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgJARgFAPQgFARgDATQgDATAAAXg");
	this.shape_106.setTransform(330.1,-20346);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgQA+QgIgCgFgDQgFgEgDgGQgDgGAAgHQAAgHACgFIAGgJIAKgIIANgFIgLgHIgJgHIgFgJQgBgEAAgGQAAgGACgFQADgGAEgEQAFgEAHgDQAHgCAIAAQAIAAAHACQAHACAEAEQAFAEACAFQACAFAAAGQAAAFgCAFIgEAJIgJAIQgFAEgGADIANAFIAKAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgFAEgJACQgHACgJAAQgIAAgIgCgAgMAKIgIAGQgEAEgBAEQgCAEAAAEQAAALAHAGQAHAFANAAQAOAAAHgFQAHgGAAgKQAAgFgBgEQgCgEgEgEQgDgDgHgDIgLgHIgMAHgAgRgwQgFAFAAAKQgBAEACADQACAEACADIAIAHIAKAGQAKgGAHgGQAGgHAAgJQAAgEgCgEQgCgDgCgDQgDgDgFgBQgEgBgGAAQgKAAgHAFg");
	this.shape_107.setTransform(331.2,-20350);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgTBAIgHgBIgFgCIgEgCIAAgCIgBgDIAAgCIABgCIAAAAIACgBIACABIAFACIAHABIAJABQAKAAAFgEQAIgEAFgHQAFgGACgJQACgJABgKIgOAFQgHADgJAAQgKAAgHgDQgIgDgEgFQgEgDgDgHQgBgHAAgHQAAgIACgHQADgIAEgFQAFgGAIgEQAIgDAJAAQAHAAAHACQAFACAFADQAEAEADAGQAEAFABAHIADAOIABARIgBAPIgEAQQgCAIgEAGQgEAHgGAFQgGAFgIADQgGACgLAAIgHAAgAgMgzQgFADgEAEQgCAFgCAFQgBAFAAAGQAAAGABAFQABAFADAEQAEADAFABQAFACAHAAQAGAAAIgCQAIgBAGgEQAAgNgCgKQgCgJgEgGQgEgGgFgDQgFgCgGAAQgHAAgFACg");
	this.shape_108.setTransform(331.1,-20350);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAgA/Ig+AAIgCAAIAAgBIgBgBIgBgDIABgCIABgCIAAAAIACgBIAcAAIAAhmIgbAQIgDACIgBgBIgBgBIAAgDIAAgCIAAgCIABgBIABgBIAfgTIAAgBIABAAIAAAAIACAAIACAAIACAAIABABIABACIAABwIAYAAIABABIACAAIAAACIAAACIAAADIgBABIgBABIgBAAg");
	this.shape_109.setTransform(321.4,-20350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_99}]}).to({state:[{t:this.shape_99}]},2766).to({state:[{t:this.shape_100}]},276).to({state:[{t:this.shape_101}]},275).to({state:[{t:this.shape_102}]},273).to({state:[{t:this.shape_103}]},276).to({state:[{t:this.shape_104}]},275).to({state:[{t:this.shape_105}]},275).to({state:[{t:this.shape_106}]},274).to({state:[{t:this.shape_107}]},250).to({state:[{t:this.shape_108}]},275).to({state:[{t:this.shape_109},{t:this.shape_99}]},276).to({state:[]},41).wait(6743));

	// 10000
	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOQgCgGgCgFQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_110.setTransform(261.9,-20524.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_111.setTransform(261.9,-20524.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAgA/Ig+AAIgCAAIAAgBIgBgBIAAgDIAAgCIABgCIAAgBIACAAIAcAAIAAhmIgbAQIgDACIgBgBIgBgBIAAgDIAAgCIABgCIAAgBIABgBIAfgTIAAgBIABAAIAAAAIACAAIADAAIACAAIAAACIABAAIAABxIAYAAIABAAIABABIABACIAAACIAAADIgBABIgBABIgBAAg");
	this.shape_112.setTransform(262.3,-20524.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AggBAIgCgBIgBgBIgBgCIgBgCIAAgCIABgCIABgCIABgBIAagcIANgSIAJgMQADgGABgGIABgKQAAgEgCgFQgBgEgDgDQgDgEgFgBQgEgCgEAAQgGAAgEABIgJAEIgGAEIgEACIAAgBIgCAAIAAgCIAAgCIAAgCIAAgBIABgCIABgBIAEgDIAHgEIAJgDIAKgBQAHAAAHADQAGACAEAFQAFAEADAHQACAFAAAHIgCAMQgBAGgDAHIgJAOQgHAIgKAMIgWAYIA4AAIABAAIACABIAAACIAAACIAAACIAAACIgCABIgBABg");
	this.shape_113.setTransform(261.9,-20524.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_110}]}).to({state:[{t:this.shape_111}]},2766).to({state:[{t:this.shape_112}]},998).to({state:[{t:this.shape_113}]},1000).to({state:[]},768).wait(6743));

	// 1000
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOQgCgGgCgFQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_114.setTransform(278.4,-20524.2);

	this.seven = new lib._01000();
	this.seven.setTransform(279.7,-20521.5,1,1,0,0,0,8.3,17.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgQA/IgCAAIgDgBIAAgCIABgBIAvhuIg+AAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgEIABgCIAAgBIABgCIACAAIBHAAIACAAIABACIAAABIABACIAAACIgBACIAAADIgBACIguBrIAAACIgCACIgCAAIgEAAg");
	this.shape_115.setTransform(278.5,-20524.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_114}]}).to({state:[{t:this.seven}]},2766).to({state:[{t:this.shape_115}]},2698).to({state:[]},68).wait(6743));

	// 100
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_116.setTransform(294.9,-20524.2);

	this.eight = new lib._00100();
	this.eight.setTransform(296.2,-20521.5,1,1,0,0,0,8.3,17.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgNA/QgGgCgFgEIgHgJQgDgFgCgHIgCgOIgBgSIABgPQABgIADgIQACgIADgGQAFgHAFgFQAGgFAIgCQAGgDAKAAIAHAAIAHABIAFACIADACIAAABIABABIABABIAAACIAAACIAAABIgCABIAAAAIgDAAIgFgCIgHgBIgJgBQgJAAgGAEQgGAEgFAHQgFAHgCAJQgCAJAAAKIAFgDIAIgDIAJgCIAHgBQAKAAAIADQAHADAEAFQAEADACAHQACAGAAAIQAAAHgCAIQgDAHgFAGQgFAGgIAEQgIADgJAAQgIAAgFgBgAgFgBIgIABIgHACIgGAEQAAANACAKQABAJAEAGQAEAFAEADQAGACAFAAQAHAAAFgCQAFgDAEgFQADgEACgGIACgKQAAgGgCgGQgBgFgDgDQgDgEgFAAQgFgCgIAAIgGABg");
	this.shape_117.setTransform(295.1,-20524.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_116}]}).to({state:[{t:this.eight}]},2766).to({state:[{t:this.shape_117}]},2758).to({state:[]},8).wait(6743));

	// 10
	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOQgCgGgCgFQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_118.setTransform(311.5,-20524);

	this.nine = new lib._00010black();
	this.nine.setTransform(312.8,-20521.3,1,1,0,0,0,8.3,17.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AATA/IgDAAIgCAAIgBgBIAAgBIAAgdIg1AAIgBAAIgBgBIgBgBIAAgDIAAgCIAAgCIABgCIABgCIAvhOIABgCIACgBIACAAIAEAAIAEAAIADABIACAAIAAACIAABRIARAAIACABIABAEIgBAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgRAAIAAAdIAAABIgBABIgCAAIgCAAgAgfAWIAsAAIAAhJIAAAAg");
	this.shape_119.setTransform(311.5,-20524.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_118}]}).to({state:[{t:this.nine}]},2766).to({state:[{t:this.shape_119}]},2763).to({state:[]},3).wait(6743));

	// 1
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOQgCgGgCgFQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_120.setTransform(327.9,-20524.2);

	this.ten = new lib._00001();
	this.ten.setTransform(329.3,-20521.3,1,1,0,0,0,8.3,17.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgQA+QgIgCgFgDQgFgEgDgGQgDgGAAgHQAAgHACgFIAGgJIAKgIQAFgEAIgBIgLgHIgIgHIgFgJQgCgEAAgGQAAgGACgFQADgGAEgEQAEgEAIgDQAHgCAHAAQAJAAAIACQAGACAEAEQAFAEACAFQACAFAAAGQAAAFgCAFIgFAJIgIAIQgEAEgHADIAOAFIAJAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgGAEgHACQgIACgJAAQgJAAgHgCgAgMAKIgIAGQgEAEgBAEQgDAEAAAEQABALAHAGQAIAFAMAAQAOAAAIgFQAGgGABgKQAAgFgCgEQgCgEgEgEQgEgDgFgDIgMgHIgMAHgAgQgwQgHAFAAAKQABAEABADQACAEADADIAHAHIAJAGQAMgGAGgGQAGgHAAgJQAAgEgCgEQgCgDgDgDQgDgDgEgBQgFgBgFAAQgLAAgFAFg");
	this.shape_121.setTransform(328,-20524.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_120}]}).to({state:[{t:this.ten}]},2766).to({state:[{t:this.shape_121}]},2765).to({state:[]},1).wait(6743));

	// 10v left
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_122.setTransform(91.2,-20350);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAgA/Ig+AAIgCAAIAAgBIgBgBIgBgDIABgCIABgCIAAAAIACgBIAcAAIAAhmIgbAQIgDACIgBgBIgBgBIAAgDIAAgCIAAgCIABgBIABgBIAegTIABgBIABAAIAAAAIACAAIACAAIACAAIACABIAAACIAABwIAYAAIABABIABAAIABACIAAACIAAADIgBABIgBABIgBAAg");
	this.shape_123.setTransform(91.6,-20350);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AghA/IgBAAIgCgBIAAgCIAAgCIAAgCIAAgCIABgCIABgBIAagcIANgRIAJgNQADgHABgFIABgKQAAgFgBgDQgCgFgDgDQgDgDgFgCQgDgCgFAAQgGAAgEABIgJAFIgGADIgDACIgCgBIgBAAIAAgCIAAgCIAAgCIAAgCIABgBIACgCIADgCIAHgEIAJgCIALgCQAGAAAHADQAHACAEAFQAEAFADAGQACAFAAAHIgCAMQgBAGgDAIIgKANQgGAIgKAMIgWAYIA4AAIABAAIACABIAAACIAAACIAAACIAAACIgCABIgBAAg");
	this.shape_124.setTransform(91.2,-20350);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgOA/IgKgCIgHgDIgEgCIgBgCIAAgBIgBgCIAAgCIABgEIACgBIADABIAHAEIAKADQAGACAGAAQAFAAAGgCQAFgCAEgDQADgDACgFQACgFAAgFQAAgGgCgFQgDgEgEgEQgFgDgGgCQgFgCgHAAIgNAAIgBAAIgBgBIgBgCIAAAAIAAgCIABgCIABgBIABAAIALAAQAHAAAEgCQAFgCAEgDQAEgEACgFQACgFAAgGQAAgEgBgEIgEgHQgDgDgEgBQgFgCgDAAQgGAAgFACIgJAEIgGAEIgDABIgBAAIgBgBIgBgBIAAgDIAAgCIABgBIAAgCIACgBIADgDIAHgDIAJgDIALgBQAGAAAHACQAGACAEAFQAFAEACAFQACAGAAAGQAAAGgCAGIgFAJQgDAEgEADQgFACgGABIAAABQAHAAAFABQAGACAEAEQAEAEACAGQADAFAAAGQAAAIgDAHQgDAHgFAFQgFAFgIADQgIACgJAAIgLgBg");
	this.shape_125.setTransform(91.1,-20350);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AATA/IgDAAIgCAAIgBgBIAAgBIAAgdIg1AAIgBAAIgBgBIgBgBIAAgDIAAgCIABgCIAAgCIABgCIAvhOIABgCIACgBIADAAIADAAIAEAAIADABIACAAIAAACIAABRIAQAAIADABIABAEIgBAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgQAAIAAAdIAAABIAAABIgDAAIgCAAgAgfAWIAsAAIAAhJIgBAAg");
	this.shape_126.setTransform(91.2,-20350);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgQA/IgJgDIgHgCIgEgCIAAAAIgBgCIAAgCIAAgCIAAgCIABgBIAAgCIABAAIADACIAGACIAJADQAFACAIAAQAEAAAGgCQAHgCAEgEQAEgEACgFQADgGAAgIQAAgHgCgFQgCgFgEgEQgFgCgHgBQgGgCgIAAIgKACIgHAAIgEgBIgBgFIAAgyQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIA0AAIACAAIABABIAAABIABADIgBADQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIguAAIAAAoIAHgBIAJAAQAJAAAJADQAHADAGAFQAFACADAHQACAHABAHQAAAKgEAIQgDAJgGAEQgGAGgJADQgIACgIAAIgLAAg");
	this.shape_127.setTransform(91.1,-20349.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgNA/QgGgCgEgEQgFgEgCgFQgEgFgBgHIgDgOIgBgSIABgPQABgIACgIQADgIAEgGQADgHAGgFQAGgFAIgCQAGgDAKAAIAHAAIAHABIAFACIADACIAAABIABABIAAABIAAACIAAACIAAABIgBABIAAAAIgEAAIgEgCIgGgBIgJgBQgKAAgFAEQgHAEgFAHQgFAHgCAJQgDAJABAKIAFgDIAIgDIAIgCIAIgBQALAAAHADQAHADAEAFQAFADABAHQACAGAAAIQAAAHgCAIQgCAHgGAGQgFAGgIAEQgIADgJAAQgHAAgGgBgAgFgBIgIABIgHACIgGAEQAAANACAKQABAJAEAGQADAFAFADQAGACAFAAQAHAAAFgCQAFgDAEgFQADgEACgGIABgKQAAgGgBgGQgBgFgDgDQgDgEgFAAQgFgCgIAAIgGABg");
	this.shape_128.setTransform(91.4,-20350);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgPA/IgDAAIgCgBIgBgBIABgDIAwhtIhAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgEIABgCIAAgCIABAAIABgBIBHAAIACABIACAAIAAACIABACIAAACIgBADIAAACIgBACIguBrIAAACIgCABIgCABIgDAAg");
	this.shape_129.setTransform(91.3,-20349.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgQA+QgIgCgFgDQgFgEgDgGQgDgGAAgHQAAgHACgFQACgFAFgEIAJgIIANgFIgLgHIgJgHIgFgJQgBgEAAgGQAAgGACgFQADgGAEgEQAEgEAIgDQAHgCAHAAQAKAAAGACQAHACAFAEQAEAEACAFQACAFAAAGIgBAKIgFAJIgJAIQgEAEgHADIANAFIAKAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgFAEgJACQgHACgJAAQgIAAgIgCgAgMAKIgIAGQgEAEgCAEQgBAEAAAEQAAALAHAGQAIAFAMAAQAOAAAHgFQAIgGgBgKQAAgFgCgEQgBgEgEgEQgDgDgHgDIgLgHIgMAHgAgRgwQgFAFAAAKQAAAEABADQACAEACADIAIAHIAJAGQAMgGAGgGQAGgHAAgJQAAgEgCgEQgCgDgCgDQgDgDgFgBQgFgBgFAAQgKAAgHAFg");
	this.shape_130.setTransform(91.2,-20350);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgTBAIgHgBIgGgCIgDgCIAAgCIgBgDIAAgCIABgCIAAAAIACgBIACABIAFACIAHABIAJABQAKAAAFgEQAIgEAFgHQAFgGACgJQACgJAAgKIgMAFQgJADgIAAQgKAAgHgDQgIgDgEgFQgFgDgBgHQgCgHAAgHQAAgIACgHQADgIAEgFQAFgGAIgEQAIgDAJAAQAIAAAFACQAGACAFADQAEAEADAGQADAFACAHIADAOIABARIgBAPIgDAQQgDAIgEAGQgEAHgGAFQgGAFgIADQgGACgKAAIgIAAgAgMgzQgFADgEAEQgCAFgCAFQgBAFAAAGQAAAGABAFQABAFADAEQADADAGABQAEACAIAAQAHAAAHgCQAIgBAFgEQAAgNgBgKQgCgJgEgGQgEgGgFgDQgFgCgGAAQgHAAgFACg");
	this.shape_131.setTransform(91.1,-20350);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAgA/Ig+AAIgCAAIAAgBIgBgBIgBgDIABgCIABgCIAAAAIACgBIAcAAIAAhmIgbAQIgDACIgBgBIgBgBIAAgDIAAgCIAAgCIABgBIABgBIAfgTIAAgBIABAAIAAAAIACAAIACAAIACAAIACABIAAACIAABwIAYAAIABABIABAAIABACIAAACIAAADIgBABIgBABIgBAAg");
	this.shape_132.setTransform(81.4,-20350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_122}]}).to({state:[{t:this.shape_123}]},276).to({state:[{t:this.shape_124}]},275).to({state:[{t:this.shape_125}]},273).to({state:[{t:this.shape_126}]},276).to({state:[{t:this.shape_127}]},275).to({state:[{t:this.shape_128}]},275).to({state:[{t:this.shape_129}]},274).to({state:[{t:this.shape_130}]},250).to({state:[{t:this.shape_131}]},275).to({state:[{t:this.shape_132},{t:this.shape_122}]},276).to({state:[]},2807).wait(6743));

	// 100
	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_133.setTransform(58.9,-20173.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAgA/Ig+AAIgBAAIgBgBIgBgCIgBgCIABgCIABgCIABAAIABgBIAcAAIAAhmIgbAQIgCACIgCAAIgBgCIAAgDIAAgCIAAgBIABgCIACgBIAdgTIACgBIAAAAIAAAAIACAAIACAAIADAAIAAABIABACIAABwIAYAAIABABIABAAIABACIAAACIAAACIgBACIgBABIgBAAg");
	this.shape_134.setTransform(59.3,-20173.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AggA/IgCAAIgBgBIgBgBIAAgDIAAgCIAAgCIABgBIABgCIAagcIAOgRIAIgNQADgGABgGIABgKQAAgEgBgFQgCgEgDgDQgDgEgEgBQgFgCgEAAQgFAAgFABIgJAEIgGAEIgDACIgBgBIgCAAIAAgCIAAgCIAAgCIAAgCIABgBIACgCIADgCIAHgEIAJgDIALAAQAGAAAHACQAGACAEAFQAFAEACAHQADAGAAAGIgCAMQgBAGgDAIIgJANQgHAIgKALIgWAZIA4AAIACAAIABABIAAACIAAACIAAADIAAABIgBABIgCAAg");
	this.shape_135.setTransform(58.9,-20173.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgOA/IgKgCIgHgDIgEgCIgBgCIAAgBIgBgCIAAgCIABgEIACgBIADABIAHAEIAKADQAGACAGAAQAFAAAGgCQAFgCAEgDQADgDACgFQACgFAAgFQAAgGgCgFQgDgEgEgEQgFgDgGgCQgFgCgHAAIgNAAIgBAAIgBgBIgBgCIAAAAIAAgCIABgCIABgBIABAAIALAAQAHAAAEgCQAFgCAEgDQAEgEACgFQACgFAAgGQAAgEgBgEIgEgHQgDgDgEgBQgFgCgDAAQgGAAgFACIgJAEIgGAEIgDABIgBAAIgBgBIgBgBIAAgDIAAgCIABgBIAAgCIACgBIADgDIAHgDIAJgDIALgBQAGAAAHACQAGACAEAFQAFAEACAFQACAGAAAGQAAAGgCAGIgFAJQgDAEgEADQgFACgGABIAAABQAHAAAFABQAGACAEAEQAEAEACAGQADAFAAAGQAAAIgDAHQgDAHgFAFQgFAFgIADQgIACgJAAIgLgBg");
	this.shape_136.setTransform(58.8,-20173.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AASA/IgCAAIgCAAIgBgBIAAgBIAAgdIg0AAIgCAAIgBgBIgBgBIAAgDIAAgCIAAgCIABgCIABgCIAvhOIABgCIACgBIACAAIAEAAIAEAAIADABIACAAIABACIAABRIAQAAIACABIABAEIgBAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgQAAIAAAdIAAABIgCABIgBAAIgEAAgAgfAWIAsAAIAAhJIAAAAg");
	this.shape_137.setTransform(58.9,-20173.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgQA/IgKgDIgHgCIgCgCIgCgBIAAgBIAAgCIAAgCIAAgCIAAgBIABgCIABAAIAEACIAFACIAJADQAFACAHAAQAFAAAHgDQAGgBAEgEQAEgEACgFQADgGAAgIQAAgHgCgFQgCgFgFgDQgEgDgGgBQgHgCgHAAIgLABIgHABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIgBgFIAAgyQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAIA0AAIABABIACABIABABIAAADIgBADQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIguAAIAAApIAHgCIAJAAQAJABAJACQAIADAFAFQAGADACAGQADAHAAAHQAAALgEAHQgDAJgGAEQgGAGgIADQgJACgIAAIgLAAg");
	this.shape_138.setTransform(58.8,-20173.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgNA/QgGgCgFgEQgEgEgCgFQgEgFgCgHIgCgOIgBgSIABgPQABgIADgIQACgIADgGQAFgHAFgFQAGgFAIgCQAGgDAKAAIAHAAIAHABIAFACIADACIAAABIABABIABABIAAACIAAACIAAABIgCABIgBAAIgDAAIgEgCIgGgBIgKgBQgJAAgFAEQgIAEgEAHQgFAHgCAJQgDAJABAKIAFgDIAIgDIAIgCIAIgBQAKAAAHADQAIADAEAFQAFADABAHQACAGAAAIQAAAHgDAIQgCAHgFAGQgFAGgIAEQgIADgJAAQgIAAgFgBgAgFgBIgIABIgHACIgGAEQAAANABAKQACAJAEAGQADAFAGADQAFACAFAAQAHAAAFgCQAFgDAEgFQADgEACgGIACgKQAAgGgCgGQgBgFgDgDQgDgEgFAAQgFgCgIAAIgGABg");
	this.shape_139.setTransform(59.1,-20173.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgQA/IgDAAIgBgBIgBgCIABgBIAwhuIhAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgEIAAgCIABgCIABgBIABAAIBIAAIABAAIACABIABACIAAACIAAACIAAACIgBADIgBACIguBsIAAABIgCACIgCAAIgEAAg");
	this.shape_140.setTransform(59,-20173.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_133}]}).to({state:[{t:this.shape_134}]},363).to({state:[{t:this.shape_135}]},364).to({state:[{t:this.shape_136}]},364).to({state:[{t:this.shape_137}]},364).to({state:[{t:this.shape_138}]},364).to({state:[{t:this.shape_139}]},364).to({state:[{t:this.shape_140}]},364).to({state:[]},2985).wait(6743));

	// 10
	this.five = new lib._10s();
	this.five.setTransform(75.7,-20170.2,1,1,0,0,0,8.3,17.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgNA/QgGgCgEgEIgIgJQgCgFgCgHIgDgOIgBgSIABgPQABgIACgIIAHgOQAEgHAFgFQAGgFAIgCQAGgDAKAAIAHAAIAHABIAFACIADACIABABIAAABIAAABIAAACIAAACIAAABIAAABIgBAAIgDAAIgFgCIgHgBIgIgBQgKAAgGAEQgHAEgEAHQgFAHgCAJQgDAJAAAKIAHgDIAHgDIAJgCIAHgBQALAAAHADQAHADAEAFQAFADABAHQACAGAAAIQAAAHgCAIQgDAHgFAGQgFAGgIAEQgIADgJAAQgIAAgFgBgAgFgBIgIABIgHACIgHAEQABANACAKQABAJAEAGQAEAFAEADQAFACAGAAQAHAAAFgCQAGgDADgFQAEgEABgGIABgKQAAgGgBgGQgBgFgDgDQgDgEgFAAQgFgCgHAAIgHABg");
	this.shape_141.setTransform(74.6,-20173.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.five}]}).to({state:[{t:this.shape_141}]},2766).to({state:[]},2766).wait(6743));

	// 1
	this.six = new lib._00001();
	this.six.setTransform(93.3,-20170,1,1,0,0,0,8.3,17.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_142.setTransform(91.9,-20173.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.six}]}).to({state:[{t:this.shape_142}]},2766).to({state:[]},2766).wait(6743));

	// Layer 27
	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgTAFIgCgCIgBgDIABgCIACgBIAnAAIABAAIABABIABABIAAABIgBADIgCACg");
	this.shape_143.setTransform(59.9,-20349.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgTAFIgCgCIgBgDIABgCIACgBIAnAAIABAAIABABIAAACIABAAIgBADIgCACg");
	this.shape_144.setTransform(7.9,-20522.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_144},{t:this.shape_143}]}).to({state:[]},11063).wait(1212));

	// 10000
	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOQgCgGgCgFQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_145.setTransform(25.9,-20524.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AAgA/Ig+AAIgCAAIAAgBIgBgCIgBgCIABgCIABgCIAAAAIACgBIAcAAIAAhmIgbAQIgDACIgBgBIgBgBIAAgDIAAgCIAAgCIABgBIABgBIAegTIACgBIAAAAIAAAAIACAAIADAAIABAAIACACIAAABIAABwIAYAAIABABIACAAIAAACIAAACIAAACIgBACIgBABIgBAAg");
	this.shape_146.setTransform(26.3,-20524.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AggBAIgCgBIgBgBIgBgBIgBgDIAAgCIABgCIABgCIABgBIAagcIANgSIAJgMQADgHABgFIABgKQAAgFgCgDQgBgFgDgDQgDgDgFgCQgDgCgFAAQgGAAgEABIgJAEIgGAEIgEACIAAgBIgCAAIAAgCIAAgCIAAgCIAAgCIABgBIABgBIAEgDIAHgEIAJgCIAKgBQAHgBAHADQAGACAEAFQAFAEADAHQACAFAAAHIgCAMQgBAGgDAHIgJAOQgHAIgKALIgWAZIA4AAIABAAIACABIAAACIAAACIAAADIAAABIgCABIgBABg");
	this.shape_147.setTransform(25.9,-20524.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_145}]}).to({state:[{t:this.shape_146}]},999).to({state:[{t:this.shape_147}]},1000).to({state:[]},3533).wait(6743));

	// 1000
	this.one = new lib._01000();
	this.one.setTransform(43.7,-20521.2,1,1,0,0,0,8.3,17.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgPA/IgDAAIgCgBIgBgCIABgCIAvhtIg+AAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgBgEIAAgCIABgCIABgBIACAAIBGAAIACAAIACABIAAACIABACIAAACIgBACIAAADIgBACIguBsIAAABIgCABIgCABIgDAAg");
	this.shape_148.setTransform(42.5,-20524.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.one}]}).to({state:[{t:this.shape_148}]},2699).to({state:[]},2833).wait(6743));

	// 100
	this.two = new lib._00100();
	this.two.setTransform(60.2,-20521.2,1,1,0,0,0,8.3,17.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgNA/QgGgCgFgEIgHgJQgCgFgDgHIgCgOIgBgSIABgPQABgIADgIQACgIADgGQAEgHAGgFQAGgFAIgCQAFgDALAAIAHAAIAHABIAFACIADACIAAABIABABIABABIAAACIAAACIAAABIgCABIAAAAIgDAAIgFgCIgHgBIgJgBQgJAAgFAEQgHAEgFAHQgFAHgCAJQgCAJAAAKIAFgDIAIgDIAJgCIAHgBQAKAAAIADQAHADAEAFQAEADACAHQACAGAAAIQAAAHgCAIQgCAHgGAGQgFAGgIAEQgIADgJAAQgIAAgFgBgAgFgBIgIABIgHACIgGAEQAAANACAKQABAJAEAGQAEAFAFADQAEACAGAAQAHAAAFgCQAFgDAEgFQADgEACgGIACgKQgBgGgBgGQgBgFgDgDQgDgEgFAAQgFgCgIAAIgGABg");
	this.shape_149.setTransform(59.1,-20524.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.two}]}).to({state:[{t:this.shape_149}]},2759).to({state:[]},2773).wait(6743));

	// 10
	this.three = new lib._00010black();
	this.three.setTransform(76.8,-20521,1,1,0,0,0,8.3,17.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AASA/IgCAAIgCAAIgBgBIAAgBIAAgdIg0AAIgCAAIgBgBIgBgBIAAgDIAAgCIABgCIAAgCIABgCIAvhOIABgCIACgBIACAAIAEAAIAEAAIADABIACAAIABACIAABRIAPAAIAEABIAAAEIAAAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgPAAIAAAdIAAABIgCABIgBAAIgEAAgAgfAWIAsAAIAAhJIAAAAg");
	this.shape_150.setTransform(75.5,-20524);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.three}]}).to({state:[{t:this.shape_150}]},2764).to({state:[]},2768).wait(6743));

	// 1
	this.four = new lib._00001();
	this.four.setTransform(93.3,-20521,1,1,0,0,0,8.3,17.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgQA+QgHgCgGgDQgFgEgDgGQgDgGAAgHQAAgHACgFQACgFAEgEIAKgIIANgFIgLgHIgJgHIgFgJQgBgEAAgGQAAgGACgFQACgGAFgEQAEgEAIgDQAHgCAHAAQAKAAAHACQAGACAEAEQAFAEACAFQACAFAAAGIgBAKIgFAJIgJAIQgEAEgHADIANAFIAKAIQAEAEACAFQACAEAAAGQAAAIgDAGQgDAHgFAEQgGAEgHACQgIACgJAAQgJAAgHgCgAgMAKIgIAGQgEAEgBAEQgCAEAAAEQgBALAIAGQAIAFAMAAQAOAAAIgFQAGgGAAgKQABgFgCgEQgCgEgEgEQgDgDgGgDIgMgHIgMAHgAgRgwQgFAFAAAKQAAAEABADQABAEADADIAIAHIAJAGQALgGAHgGQAGgHAAgJQAAgEgCgEQgBgDgDgDQgDgDgFgBQgFgBgFAAQgLAAgGAFg");
	this.shape_151.setTransform(92.2,-20524);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.four}]}).to({state:[{t:this.shape_151}]},2766).to({state:[]},2766).wait(6743));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-895.3,-20538.9,1747.2,754.8);


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

	// Layer 5
	this.instance = new lib.yellow();
	this.instance.setTransform(121.4,-20052.8,1,1,0,0,0,15.3,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1020));

	// Layer 4
	this.instance_1 = new lib.glow();
	this.instance_1.setTransform(202.3,-19790.5,1,1,0,0,0,12.1,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1020));

	// Layer 3
	this.instance_2 = new lib.flow_an_small();
	this.instance_2.setTransform(59.4,-20067.3,1,1,-90,0,0,2.1,97.8);

	this.instance_3 = new lib.flow_an();
	this.instance_3.setTransform(-2.7,-20026.3,1,1,-90,0,0,2.1,104.8);

	this.instance_4 = new lib.flow_an();
	this.instance_4.setTransform(-212.7,-20026.3,1,1,-90,0,0,2.1,104.8);

	this.instance_5 = new lib.flow_an_small();
	this.instance_5.setTransform(-420.6,-20067.3,1,1,-90,0,0,2.1,97.8);

	this.instance_6 = new lib.flow_an_small();
	this.instance_6.setTransform(143.6,-20009.6,1,1,180,0,0,-38.9,148.9);

	this.instance_7 = new lib.flow_an_small();
	this.instance_7.setTransform(-503.5,-19973.1,1,1,0,0,0,-38.9,148.9);

	this.instance_8 = new lib.flow_an_small();
	this.instance_8.setTransform(-510.6,-20086.5,1,1,0,0,0,-38.9,148.9);

	this.instance_9 = new lib.flow_an_small();
	this.instance_9.setTransform(-540.8,-20070.4,1,1,180,0,0,-38.9,148.9);

	this.instance_10 = new lib.flow_an();
	this.instance_10.setTransform(-482.7,-20026.3,1,1,-90,0,0,2.1,104.8);

	this.instance_11 = new lib.flow_an_small();
	this.instance_11.setTransform(-588.1,-20101.8,1,1,-90,0,0,2.1,97.8);

	this.instance_12 = new lib.flow_an_small();
	this.instance_12.setTransform(-833.6,-19948,1,1,180,0,0,2.1,97.8);

	this.instance_13 = new lib.flow_an();
	this.instance_13.setTransform(-692.7,-20026.3,1,1,-90,0,0,2.1,104.8);

	this.instance_14 = new lib.flow_an_small();
	this.instance_14.setTransform(-9.7,-19737.8,1,1,180,0,0,2.1,97.8);

	this.instance_15 = new lib.flow_an();
	this.instance_15.setTransform(-39.8,-19757.1,1,1,-90,0,0,2.1,104.8);

	this.instance_16 = new lib.flow_an();
	this.instance_16.setTransform(-109.8,-19757.1,1,1,-90,0,0,2.1,104.8);

	this.instance_17 = new lib.flow_an();
	this.instance_17.setTransform(-319.8,-19757.1,1,1,-90,0,0,2.1,104.8);

	this.instance_18 = new lib.flow_an();
	this.instance_18.setTransform(-529.8,-19757.1,1,1,-90,0,0,2.1,104.8);

	this.instance_19 = new lib.flow_an();
	this.instance_19.setTransform(-621.6,-19855.5,1,1,0,0,0,2.1,104.8);

	this.instance_20 = new lib.flow_an();
	this.instance_20.setTransform(-719.5,-19955.5,1,1,-90,0,0,2.1,104.8);

	this.instance_21 = new lib.flow_an();
	this.instance_21.setTransform(-824.6,-19900.5,1,1,180,0,0,2.1,104.8);

	this.instance_22 = new lib.flow_an_small();
	this.instance_22.setTransform(-763.3,-19814.2,1,1,90,0,0,2.1,97.8);

	this.instance_23 = new lib.flow_an_small();
	this.instance_23.setTransform(-615.3,-19814.2,1,1,90,0,0,2.1,97.8);

	this.instance_24 = new lib.flow_an();
	this.instance_24.setTransform(-641.7,-19779.2,1,1,180,0,0,2.1,104.8);

	this.instance_25 = new lib.flow_an_small();
	this.instance_25.setTransform(-580.8,-19761.2,1,1,0,0,0,2.1,97.8);

	this.instance_26 = new lib.flow_an();
	this.instance_26.setTransform(-528.9,-19732.8,1,1,90,0,0,2.1,104.8);

	this.instance_27 = new lib.flow_an();
	this.instance_27.setTransform(-458.9,-19732.8,1,1,90,0,0,2.1,104.8);

	this.instance_28 = new lib.flow_an();
	this.instance_28.setTransform(-248.9,-19732.8,1,1,90,0,0,2.1,104.8);

	this.instance_29 = new lib.flow_an();
	this.instance_29.setTransform(-38.9,-19732.8,1,1,90,0,0,2.1,104.8);

	this.instance_30 = new lib.flow_an_small();
	this.instance_30.setTransform(108.8,-19790.2,1,1,0,0,0,2.1,97.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1019).wait(1));

	// Layer 2
	this.instance_31 = new lib.flow_an_small();
	this.instance_31.setTransform(154.2,-20042.1,1,1,180,0,0,-38.9,148.9);

	this.instance_32 = new lib.flow_an_small();
	this.instance_32.setTransform(-483.3,-20263.9,1,1,0,0,0,2.1,97.8);

	this.instance_33 = new lib.flow_an();
	this.instance_33.setTransform(6.9,-20053.9,1,1,-90,0,0,2.1,104.8);

	this.instance_34 = new lib.flow_an_small();
	this.instance_34.setTransform(262.8,-20025.4,1,1,90,0,0,2.1,97.8);

	this.instance_35 = new lib.flow_an_small();
	this.instance_35.setTransform(226.7,-20125.9,1,1,0,0,0,2.1,97.8);

	this.instance_36 = new lib.flow_an_small();
	this.instance_36.setTransform(147.1,-20136.9,1,1,-90,0,0,2.1,97.8);

	this.instance_37 = new lib.flow_an_small();
	this.instance_37.setTransform(110,-20069.2,1,1,180,0,0,2.1,97.8);

	this.instance_38 = new lib.flow_an_small();
	this.instance_38.setTransform(201.1,-20050.7,1,1,0,0,0,2.1,97.8);

	this.instance_39 = new lib.flow_an();
	this.instance_39.setTransform(8.4,-20146.9,1,1,0,0,0,2.1,104.8);

	this.instance_40 = new lib.flow_an();
	this.instance_40.setTransform(-9.1,-20372.4,1,1,0,0,0,2.1,104.8);

	this.instance_41 = new lib.flow_an();
	this.instance_41.setTransform(-9.9,-20462.6,1,1,0,0,0,2.1,104.8);

	this.instance_42 = new lib.flow_an();
	this.instance_42.setTransform(-57.1,-20565.1,1,1,-90,0,0,2.1,104.8);

	this.instance_43 = new lib.flow_an();
	this.instance_43.setTransform(-159.1,-20600,1,1,180,0,0,2.1,104.8);

	this.instance_44 = new lib.flow_an();
	this.instance_44.setTransform(-159.1,-20301.6,1,1,180,0,0,2.1,104.8);

	this.instance_45 = new lib.flow_an();
	this.instance_45.setTransform(-246.7,-20198.4,1,1,-90,0,0,2.1,104.8);

	this.instance_46 = new lib.flow_an();
	this.instance_46.setTransform(-427.2,-20198.4,1,1,-90,0,0,2.1,104.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31}]}).wait(1020));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-536.2,-20694.9,789.8,910.5);


// stage content:
(lib.nontuned = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		
		
		//Lift crane - goto frame
		this.btn_lift.addEventListener("click", lift.bind(this));
		function lift()
		{
			this.gotoAndStop(1);
			this.down.play();
			this.down.one.play();
			this.down.two.play();
			this.down.three.play();
			this.down.four.play();
			this.down.five.play();
			this.down.six.play();
			this.down.seven.play();
			this.down.eight.play();
			this.down.nine.play();
			this.down.ten.play();
			this.down.eleven.play();
			this.down.twelve.play();
			this.down.thirteen.play();
			this.down.fourteen.play();
			this.down.fifteen.play();
			this.down.joy.play();
			this.down.mb.play();
			this.up.play();
			this.up.one.play();
			this.up.two.play();
			this.up.three.play();
			this.up.four.play();
			this.up.five.play();
			this.up.six.play();
			this.up.seven.play();
			this.up.eight.play();
			this.up.nine.play();
			this.up.ten.play();
			this.up.eleven.play();
			this.up.twelve.play();
			this.up.thirteen.play();
			this.up.fourteen.play();
			this.up.fifteen.play();
			this.up.joyplus.play();
			this.up.mbplus.play();
			this.numbers.play();
			this.upflow.play();
			this.downflow.play();
		}
		
		
		
		//Lower crane - goto frame
		this.btn_lower.addEventListener("click", lower.bind(this));
		function lower()
		{
			this.gotoAndStop(2);
			this.down.play();
			this.down.one.play();
			this.down.two.play();
			this.down.three.play();
			this.down.four.play();
			this.down.five.play();
			this.down.six.play();
			this.down.seven.play();
			this.down.eight.play();
			this.down.nine.play();
			this.down.ten.play();
			this.down.eleven.play();
			this.down.twelve.play();
			this.down.thirteen.play();
			this.down.fourteen.play();
			this.down.fifteen.play();
			this.down.joy.play();
			this.down.mb.play();
			this.up.play();
			this.up.one.play();
			this.up.two.play();
			this.up.three.play();
			this.up.four.play();
			this.up.five.play();
			this.up.six.play();
			this.up.seven.play();
			this.up.eight.play();
			this.up.nine.play();
			this.up.ten.play();
			this.up.eleven.play();
			this.up.twelve.play();
			this.up.thirteen.play();
			this.up.fourteen.play();
			this.up.fifteen.play();
			this.up.joyplus.play();
			this.up.mbplus.play();
			this.numbers.play();
			this.upflow.play();
			this.downflow.play();
		}
		
		
		//Stop - blank all - goto frame
		this.btn_clean.addEventListener("click", clear.bind(this));
		function clear()
		{
			this.gotoAndStop(0);
			this.down.gotoAndStop(0);
			this.down.one.gotoAndStop(0);
			this.down.two.gotoAndStop(0);
			this.down.three.gotoAndStop(0);
			this.down.four.gotoAndStop(0);
			this.down.five.gotoAndStop(0);
			this.down.six.gotoAndStop(0);
			this.down.seven.gotoAndStop(0);
			this.down.eight.gotoAndStop(0);
			this.down.nine.gotoAndStop(0);
			this.down.ten.gotoAndStop(0);
			this.down.eleven.gotoAndStop(0);
			this.down.twelve.gotoAndStop(0);
			this.down.thirteen.gotoAndStop(0);
			this.down.fourteen.gotoAndStop(0);
			this.down.fifteen.gotoAndStop(0);
			this.up.gotoAndStop(0);
			this.up.one.gotoAndStop(0);
			this.up.two.gotoAndStop(0);
			this.up.three.gotoAndStop(0);
			this.up.four.gotoAndStop(0);
			this.up.five.gotoAndStop(0);
			this.up.six.gotoAndStop(0);
			this.up.seven.gotoAndStop(0);
			this.up.eight.gotoAndStop(0);
			this.up.nine.gotoAndStop(0);
			this.up.ten.gotoAndStop(0);
			this.up.eleven.gotoAndStop(0);
			this.up.twelve.gotoAndStop(0);
			this.up.thirteen.gotoAndStop(0);
			this.up.fourteen.gotoAndStop(0);
			this.up.fifteen.gotoAndStop(0);
			this.numbers.gotoAndStop(0);
			this.upflow.gotoAndStop(0);
			this.downflow.gotoAndStop(0);
		}
		
		
		//Freeze
		this.btn_pause.addEventListener("click", fl_ClickToGoToAndStopAtFrame_13.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_13()
		{
			this.down.stop();
			this.down.one.stop();
			this.down.two.stop();
			this.down.three.stop();
			this.down.four.stop();
			this.down.five.stop();
			this.down.six.stop();
			this.down.seven.stop();
			this.down.eight.stop();
			this.down.nine.stop();
			this.down.ten.stop();
			this.down.eleven.stop();
			this.down.twelve.stop();
			this.down.thirteen.stop();
			this.down.fourteen.stop();
			this.down.fifteen.stop();
			this.up.stop();
			this.up.one.stop();
			this.up.two.stop();
			this.up.three.stop();
			this.up.four.stop();
			this.up.five.stop();
			this.up.six.stop();
			this.up.seven.stop();
			this.up.eight.stop();
			this.up.nine.stop();
			this.up.ten.stop();
			this.up.eleven.stop();
			this.up.twelve.stop();
			this.up.thirteen.stop();
			this.up.fourteen.stop();
			this.up.fifteen.stop();
			this.numbers.stop();	
			this.upflow.stop();
			this.downflow.stop();
		}
		
		//Continue
		this.btn_play.addEventListener("click", fl_ClickToGoToAndStopAtFrame_14.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_14()
		{
			this.down.play();
			this.down.one.play();
			this.down.two.play();
			this.down.three.play();
			this.down.four.play();
			this.down.five.play();
			this.down.six.play();
			this.down.seven.play();
			this.down.eight.play();
			this.down.nine.play();
			this.down.ten.play();
			this.down.eleven.play();
			this.down.twelve.play();
			this.down.thirteen.play();
			this.down.fourteen.play();
			this.down.fifteen.play();
			this.up.play();
			this.up.one.play();
			this.up.two.play();
			this.up.three.play();
			this.up.four.play();
			this.up.five.play();
			this.up.six.play();
			this.up.seven.play();
			this.up.eight.play();
			this.up.nine.play();
			this.up.ten.play();
			this.up.eleven.play();
			this.up.twelve.play();
			this.up.thirteen.play();
			this.up.fourteen.play();
			this.up.fifteen.play();
			this.numbers.play();
			this.upflow.play();
			this.downflow.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 9
	this.pause = new lib.stopit();
	this.pause.setTransform(744.4,63.5,1,1,0,0,0,31.5,31.5);
	this.pause.alpha = 0;
	this.pause._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pause).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Letters
	this.txt_sub = new cjs.Text("Flow Control", "45px 'Calibri'", "#75787B");
	this.txt_sub.name = "txt_sub";
	this.txt_sub.lineHeight = 57;
	this.txt_sub.setTransform(86,177.7);

	this.txt_header = new cjs.Text("Untuned", "100px 'Calibri'", "#DA291C");
	this.txt_header.name = "txt_header";
	this.txt_header.lineHeight = 124;
	this.txt_header.setTransform(86,62);

	this.instance = new lib.NOV_Logo_RGB_Fai("synched",0);
	this.instance.setTransform(151.5,989,0.78,0.779,0,0,0,86.6,32);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOA/IgKgDIgHgDIgEgDIgCgCIAAgGIAAgDIAAgDIABgBIACAAIAEABIAGAFIAKADQAFABAHAAQADAAAFgBQAFgBADgDQADgDABgEQADgEAAgFQAAgFgDgEIgGgGIgJgFIgJgFIgKgDIgJgHQgEgEgCgGQgDgGAAgHQAAgIADgGQACgGAGgEQAFgFAHgCQAHgCAGAAIAJABIAHACIAHACIAEADIABACIABABIAAABIAAADIAAAEIgBACIAAABIgCABIgDgCIgFgCIgIgEQgFgBgFAAQgEAAgDABQgEACgDACIgEAFIgBAHQAAAGADADQABAEAFADIAIAGIAJAEIALAGQAFAAAEAEQAEAFACAFQADAFAAAIQAAAIgEAIQgCAHgHAEQgFAFgIADQgHACgHAAIgMgBg");
	this.shape.setTransform(502.5,366.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJA/IgFgCIgEgBIgCgBIgBgBIAAgCIAAgCIgBgDIABgDIAAgCIABgCIABAAIACAAIADACIAEACIAFABIAFgBQABgBACgDIACgFIABgKIAAhYIAAgBIACgCIACAAIAEAAIAEAAIADAAIABACIABABIAABZQAAAIgCAFQgBAHgDAEQgEAEgFADQgFACgGAAIgGAAg");
	this.shape_1.setTransform(494,366.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJAaIgFgDIgEgFQgBgDAAgDQAAgFACgDQABgDADgBIAJgCIAIgBIAHAAIAAgEIgBgFIgBgDIgFgDIgEAAIgEAAIgGACIgDACIgBABIgBAAIgBgBIAAgBIAAgCIAAgCIABgBIACgCIAFgCIAEgBIAFgBIAJABIAFAEQADACABAEIABAIIAAAfIAAABIgCABIgCAAIgDAAIgBgBIAAgBIAAgFQgDAEgEACQgEACgDAAIgHgBgAgCACIgEACIgCADIgCAEQAAAEADACQACADAEAAQADAAACgCQADgCAEgEIAAgKIgIAAIgFAAg");
	this.shape_2.setTransform(1033.4,455.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASAjIgBAAIgBgBIAAAAIAAggIgfAAIAAAgIAAAAIgBABIgBAAIgDAAIgCAAIgBAAIgBgBIAAAAIAAhDIAAgBIABAAIABgBIACAAIADAAIABABIABAAIAAABIAAAcIAfAAIAAgcIAAgBIABAAIABgBIACAAIADAAIABABIABAAIAAABIAABDIAAAAIgBABIgBAAIgDAAIgCAAg");
	this.shape_3.setTransform(1036.5,442.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHAiQgFgDgEgEQgEgFgCgGQgCgHAAgJQAAgGACgHQACgHAEgFQAEgFAGgCQAGgDAFAAIAGABIAFABIAFACIADACIAAABIABABIAAABIAAACIAAACIAAABIgBABIgBAAIgCgBIgDgCIgGgDIgHgBQgFAAgCACQgEACgDAEQgCADgCAGQgBAFAAAFQAAAHABAFQACAFACAEQADADAEACQACACAFAAIAIgBIAFgDIAEgCIACgBIABAAIAAABIAAABIAAACIAAACIAAABIAAABIgBABIgCABIgFADIgGABIgHABQgFAAgGgCg");
	this.shape_4.setTransform(1030.1,442.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBAmIgEgBIgEgDIgEgEIAAAGIAAABIgBABIgBAAIgCAAIgCAAIgBAAIgBgBIAAgBIAAhIIAAgBIABAAIABAAIACgBIACABIACAAIABAAIAAABIAAAeIAEgEIAEgCIAEgBIACgBQAGAAAEACIAGAGQACADABAEIABAKQAAAGgBAFQgBAFgDAEQgDADgEADQgEACgFAAIgCgBgAgBgFIgDABIgEADIgEADIAAAUIAHAHQADACACAAQAEgBACgBQADgCABgDIACgFIABgHIgBgIIgCgEQgBgDgDgBQgCgCgDAAIgCABg");
	this.shape_5.setTransform(1001.5,454.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AASAjIgBAAIgBgBIAAAAIAAggIgfAAIAAAgIAAAAIgBABIgBAAIgDAAIgCAAIgBAAIgBgBIAAAAIAAhDIAAgBIABAAIABgBIACAAIADAAIABABIABAAIAAABIAAAcIAfAAIAAgcIAAgBIABAAIABgBIACAAIADAAIABABIABAAIAAABIAABDIAAAAIgBABIgBAAIgDAAIgCAAg");
	this.shape_6.setTransform(1004.4,442.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHAiQgFgDgEgEQgEgFgCgGQgCgHAAgJQAAgGACgHQACgHAEgFQAEgFAGgCQAGgDAFAAIAGABIAFABIAFACIADACIAAABIABABIAAABIAAACIAAACIAAABIgBABIgBAAIgCgBIgDgCIgGgDIgHgBQgFAAgCACQgEACgDAEQgCADgCAGQgBAFAAAFQAAAHABAFQACAFACAEQADADAEACQACACAFAAIAIgBIAFgDIAEgCIACgBIABAAIAAABIAAABIAAACIAAACIAAABIAAABIgBABIgCABIgFADIgGABIgHABQgFAAgGgCg");
	this.shape_7.setTransform(998,442.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgHBAIgCAAIgBgBIgBgBIABgBQAHgPADgQQACgPAAgPQAAgOgCgQQgDgQgIgPIAAAAIABgBIABgBIACAAIACAAIABAAIABABIAAAAQAFAPAFAQQAFAQAAAPIgBAQQgBAIgDAIIgFAPIgFAPIAAABIgBAAIgBABIgCAAg");
	this.shape_8.setTransform(1153.8,590.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgVAwIgCAAIgCAAIgBAAIgBgBIAAgBIAAhaIAAgBIABAAIABgBIABAAIACAAIACABIABAAIAAABIAAAJIAFgFIAGgEIAGgCIAEgBQAHAAAFADQAGADACAEQAEAFABAGQABAHAAAHQAAAIgBAFQgCAHgEAFQgDAFgGACQgFACgHABIgEgBIgEgCIgGgDIgEgFIAAAiIgBABIAAABIgCAAgAgCgnIgFACIgGAFIgFAGIAAAbIAKALQAFADADABQAFgBAEgCQAEgDACgEQACgEACgCIAAgKIAAgLIgDgJQgDgEgDgDQgEgCgFAAIgDAAg");
	this.shape_9.setTransform(1147.9,592.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgNAhQgEgCgDgEQgDgEgBgFIgBgMIAAgmIAAgBIABAAIABgBIACAAIACAAIACABIAAAAIAAABIAAAlIABAKQABAEACADQACADADABQADACAEAAQADAAAFgEIALgKIAAguIAAgBIABAAIABgBIACAAIACAAIACABIAAAAIAAABIAABAIAAABIAAABIgCAAIgCAAIgCAAIgBAAIgBgBIAAgBIAAgJQgGAGgFADQgGADgDAAQgGAAgFgCg");
	this.shape_10.setTransform(1139.8,591.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AAIBAIgCAAIgBgBIAAAAIgBgBIgFgPIgGgPIgCgQIgBgQIABgPQABgIACgIIAFgQIAFgPIAAAAIABgBIABAAIACAAIACAAIABABIAAABIAAAAQgIAPgDAQQgCAQABAOQAAAPABAPQAEAQAHAPIAAABIAAABIgBABIgCAAg");
	this.shape_11.setTransform(1133.8,590.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgLAiIgHgEQgDgCgBgEQgCgDAAgFQAAgFADgEQABgFAFgCQAEgBAGgBQAFgCAGAAIAKAAIAAgFIAAgIQgBgDgCgCQgDgDgDgBIgHgBIgGABIgGADIgFACIgCABIgBAAIAAgBIAAgBIgBgBIABgCIABgCIACgDIAGgCIAGgCIAFAAQAIAAAEABQAFACADADQACADACAFIABAKIAAArIgBABIAAABIgCAAIgDAAIgBgBIgBgBIAAgIQgEAFgGADQgFACgDAAIgKgBgAgDACQgEABgDACIgDAFIgCAGQAAAFAEAEQAEADAGAAQADAAAFgDQAFgCAEgGIAAgPIgLAAIgIAAg");
	this.shape_12.setTransform(1124.3,591.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgHBAIgCAAIgBgBIAAgBIAAgBQAHgPADgQQACgPAAgPQAAgOgCgQQgDgQgHgPIAAAAIAAgBIABgBIACAAIACAAIABAAIABABIAAAAQAFAPAFAQQAFAQAAAPIgCAQQgBAIgCAIIgFAPIgFAPIAAABIgBAAIgCABIgBAAg");
	this.shape_13.setTransform(691.9,590.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AAWAjIgCAAIgBAAIgBgBIAAgBIAAgmIgBgJIgDgHIgFgEQgDgBgEAAQgDgBgFAEQgFAEgGAGIAAAuIAAABIgBABIgBAAIgCAAIgCAAIgBAAIgBgBIgBgBIAAhAIABgBIABAAIABgBIACAAIACAAIABABIABAAIAAABIAAAJQAFgGAGgDQAFgDAEAAQAGAAAFACQAFADADADIADAJIABAMIAAAmIAAABIgBABIgBAAIgCAAg");
	this.shape_14.setTransform(685.8,591.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AAVAiIgDAAIgCAAIgBgBIAAAAIgPgzIAAgBIAAABIgNAzIgBAAIgBABIgCAAIgDAAIgCAAIgCAAIgBgBIAAAAIgVg/IAAgBIAAgBIAAgBIABgBIABAAIACAAIADAAIABABIABABIAAABIASA3IAAAAIAAAAIAQg3IAAgBIABgBIABgBIABAAIABAAIACABIABABIAAABIARA3IASg3IAAgBIABgBIABgBIADAAIACAAIABAAIAAACIAAAAIAAABIAAABIgUA/IgBAAIgBABIgCAAIgCAAgAAVAYIAAAAg");
	this.shape_15.setTransform(676.6,591.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgNAhQgGgCgEgFQgEgFgBgGQgCgHAAgIQAAgGACgGQACgHAEgFQAEgFAGgCQAGgDAGAAQAIAAAGACQAFADAEAEQAEAFACAGQACAHAAAHQAAAHgCAHQgCAGgEAFQgEAFgGADQgGACgHAAQgHAAgGgCgAgJgYQgEACgDADQgDAEgBAFQgBAFAAAFIABAKIAEAJQACAEAEACQAFADAFAAQAFAAAEgCQAFgDADgDQACgEACgFIABgLIgBgJQgBgFgDgEQgCgEgFgCQgEgDgGAAQgEAAgFADg");
	this.shape_16.setTransform(667.5,591.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgNAwQgFgDgDgEQgDgFgCgGQgBgHAAgHQAAgJABgGQACgFAEgFQADgFAGgCQAFgDAGAAQAFAAAFADQAFADAFAFIAAgoIAAgBIABAAIABgBIACAAIACAAIACABIAAAAIAAABIAABgIAAABIAAABIgCAAIgBAAIgCAAIgCAAIAAgBIgBgBIAAgJQgFAFgGAEQgFADgFAAQgHAAgFgDgAgIgJQgEADgCAEIgDAGIgBALIABAKQAAAFADAFQACAEADACQAEADAFAAIADgBIAFgDIAGgEIAGgHIAAgdQgGgEgFgEQgFgDgEAAQgFAAgDACg");
	this.shape_17.setTransform(659.5,589.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AAIBAIgCAAIgBgBIAAAAIgBgBIgFgPIgGgPIgCgQIgBgQIABgPQABgIACgIIAFgQIAFgPIAAAAIABgBIABAAIACAAIACAAIABABIABABIgBAAQgIAPgDAQQgBAQAAAOQAAAPABAPQAEAQAHAPIABABIgBABIgBABIgCAAg");
	this.shape_18.setTransform(653.6,590.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgEAyIgEgBIgGgEIgGgFIAAAJIAAAAIAAABIgCAAIgBAAIgCAAIgBAAIgBgBIAAAAIAAhhIAAgBIABAAIABgBIACAAIACAAIABABIABAAIABABIAAApIAFgGIAGgDIAFgCIAEgBQAHAAAFAEQAFACADAFQAEAEABAFQABAHAAAGQAAAJgBAHQgCAHgEAEQgDAFgGADQgFACgHAAIgEgBgAgCgLIgFADIgGAEIgFAFIAAAdIAKAKQAFAEAEAAQAEAAAFgDQADgCACgEQACgEACgFIABgKIgBgLIgDgHQgDgEgDgDQgDgCgGAAIgDAAg");
	this.shape_19.setTransform(644.2,589.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AA7A+IgEAAIgCAAIgBgBIgBgCIAAhrIgsBsIgBABIgBABIgDAAIgCAAIgDAAIgDAAIgBgBIgBgBIgqhsIAABrIAAACIgCABIgCAAIgEAAIgEAAIgCAAIgCgBIgBgCIAAhxQAAgEADgCQAAAAABAAQABgBAAAAQABAAAAAAQABAAAAAAIALAAIAFAAIAEACIAEADIACAFIAiBYIAAAAIAlhYIACgFIADgDIADgCIAFAAIALAAIACAAIACABIACADIABADIAABxIAAACIgCABIgDAAIgEAAg");
	this.shape_20.setTransform(973.8,115.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAtA+IgEAAIgDAAIgBgBIgBgBIgLgfIgyAAIgKAeIgBABIgBACIgDAAIgFAAIgEAAIgDgBIAAgBIABgEIAphyIACgCIABgBIADgBIAEAAIAEAAIAEABIACABIABACIAqByIAAAEIAAABIgDABIgFAAgAgVAQIAqAAIgVg9g");
	this.shape_21.setTransform(959.6,115.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAgA+IgEAAIgCAAIgCgCIgBgCIgLgdIgEgJIgGgIQgCgDgDgBQgEgCgFAAIgLAAIAAA1IgBACIgBABIgDAAIgEAAIgEAAIgCAAIgCgBIAAgCIAAhyQAAgDACgCQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIAbAAIAHAAIAEAAIANAEQAGADADAEQAEAEACAGQACAFAAAHQAAAGgCAFIgFAJIgHAGIgKADQADABACADIAFAEIAEAHIAEAJIALAbIACAFIAAACIAAACIgBABIgDAAIgFAAgAgXgFIAQAAQAGAAADgCIAIgEQADgDACgEQABgEAAgFQAAgHgDgFQgDgFgIgCIgDgBIgIgBIgOAAg");
	this.shape_22.setTransform(949,115.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgOA8QgLgFgIgIQgIgJgEgLQgEgMAAgOQAAgNAEgMQAFgMAIgJQAIgIALgFQAMgFAMAAQAHAAAGACIALADIAJADIAEAEIACACIAAAFIAAADIAAADIgBABIgCAAIgEgBIgHgEIgLgFQgGgBgJAAQgKAAgGADQgIAEgGAHQgGAHgDAJQgDAJAAAJQAAAMADAJQAEAJAGAHQAGAGAIADQAGADAKAAIALgBQAGgBAFgDIAAglIgdAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIgBgFIAAgBIABgDIABgBIABAAIAoAAIACAAIACABIACACIAAACIAAAvIgBAFIgDADIgIADIgJADIgJABIgKABQgNAAgLgEg");
	this.shape_23.setTransform(936.6,115.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgYA8QgKgEgHgIQgHgJgDgMQgDgMAAgPQAAgMADgNQAEgMAHgIQAHgJALgEQAKgFANAAQANAAALAEQAKAEAHAJQAHAHADAMQADAMABAPQgBANgDAMQgEAMgHAJQgHAJgLAFQgKAEgNAAQgOAAgKgEgAgQgtQgIAEgFAHQgEAHgCAJQgCAJAAAJQAAAKACAJQACAKAEAGQAFAHAHAEQAHADAKABQAKAAAIgFQAHgDAEgIQAFgGACgKQACgJAAgJQAAgJgCgJQgCgKgFgHQgDgGgIgEQgHgEgLABQgJAAgHADg");
	this.shape_24.setTransform(924.1,115.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAgA+IgEAAIgCAAIgCgCIgBgCIgLgdIgEgJIgGgIQgCgDgDgBQgEgCgFAAIgLAAIAAA1IgBACIgBABIgDAAIgEAAIgEAAIgCAAIgCgBIAAgCIAAhyQAAgDACgCQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIAbAAIAHAAIAEAAIANAEQAGADADAEQAEAEACAGQACAFAAAHQAAAGgCAFIgFAJIgHAGIgKADQADABACADIAFAEIAEAHIAEAJIALAbIACAFIAAACIAAACIgBABIgDAAIgFAAgAgXgFIAQAAQAGAAADgCIAIgEQADgDACgEQABgEAAgFQAAgHgDgFQgDgFgIgCIgDgBIgIgBIgOAAg");
	this.shape_25.setTransform(912.8,115.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgcA+IgFAAIgCAAIgBgBIgBgCIAAhxQAAgEACgCQAAAAABAAQABgBAAAAQABAAAAAAQABAAAAAAIAbAAIAGAAIAJABIAKAFQAGADADAEQAEAFACAFQACAGAAAHQAAAKgDAHQgDAIgGADQgGAFgIADQgJADgJAAIgOAAIAAAtIAAACIgCABIgDAAIgDAAgAgUABIAOAAQAGAAAGgBQAEgBAEgEQADgDACgFQABgFAAgFQAAgIgDgFQgCgFgFgDQgEgCgEgBIgHgBIgPAAg");
	this.shape_26.setTransform(902.3,115.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgMAjIgCAAIgCgBIAAAAIgBgBIAAhAIABgBIAAgBIACAAIACAAIABAAIABAAIABABIAAABIAAAKIAGgGIADgFIADgCIAFAAIACAAIADAAIACABIACABIABAAIAAACIAAABIAAABIAAACIAAABIAAABIgCAAIgBAAIgCgBIgCgBIgEAAIgEABIgDADIgDAEIgFAIIAAArIgBABIAAAAIgBABIgCAAg");
	this.shape_27.setTransform(586.4,686.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgLAiIgHgEQgDgCgCgEQgBgDAAgFQAAgFACgEQADgFAEgCQAEgBAGgBQAFgCAGAAIALAAIAAgFIgBgIQgBgDgDgCQgCgDgCgBIgIgBIgGABIgGADIgFACIgCABIgBAAIAAgBIAAgBIgBgBIABgCIABgCIACgDIAGgCIAGgCIAFAAQAIAAAEABQAFACADADQACADACAFIABAKIAAArIAAABIgBABIgDAAIgCAAIgBgBIgBgBIAAgIQgEAFgFADQgGACgDAAIgKgBgAgDACQgEABgCACIgFAFIgBAGQAAAFAEAEQADADAHAAQAEAAAEgDQAFgCAFgGIAAgPIgMAAIgIAAg");
	this.shape_28.setTransform(579.6,686.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgDAzIgGgDIgEgDIgGgFIAAAIIAAABIgBABIgBABIgDAAIgBAAIgCgBIAAgBIAAgBIAAhgIAAgBIAAgBIACAAIACAAIADAAIABAAIAAABIAAABIAAApIAHgGIAFgDIAGgCIADAAQAHAAAFACQAGADADAFQADAFABAEQABAGAAAIQAAAIgBAHQgCAGgDAGQgFAEgEACQgGADgHAAIgDAAgAgCgKIgFACIgFAEIgHAFIAAAdIALAKQAFAEADAAQAGAAADgCQAEgDACgEQADgEAAgFIABgKIgBgLIgCgHQgDgEgDgCQgDgDgGAAIgDABg");
	this.shape_29.setTransform(572.6,685.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgMAvIgHgBIgFgCIgCgBIgBgCIAAgBIgBgBIAAgBIABgCIAAgBIAAgBIABAAIADABIAEACIAHACIAJABQADAAAFgCQAEAAADgDQAEgDACgEQACgEAAgHQAAgFgCgDQgCgFgDgCQgDgCgFAAIgKgBIgIABIgGAAIgCgBIgBgEIAAglIABgDIADgCIAmAAIABABIABABIABABIAAACIgBACIgCABIgiAAIAAAfIAFAAIAHgBQAGAAAHADQAGACAEADQAEABACAFQACAFAAAHQAAAHgDAFQgCAHgFADQgEAEgGADQgHABgFAAIgJAAg");
	this.shape_30.setTransform(564.6,685.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AAOAvIgCAAIgBAAIgBgBIAAgBIAAgVIgnAAIgBAAIgBgBIgBgBIAAgCIAAgCIABgBIAAgBIABgCIAig6IABgBIABgBIACAAIAEAAIACAAIACAAIACABIABABIAAA8IAMAAIABABIABADIgBADIgBABIgMAAIAAAVIgBABIgBABIgBAAIgCAAgAgWAQIAgAAIAAg2g");
	this.shape_31.setTransform(557.1,685.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("ACdCzIgKgDQgEgBgCgCQgBgCgBgDIAAkhIgBAAIhnEhQgBADgDADIgHADQgDACgIAAIgOAAIgPAAIgLgCIgHgEQgDgCgBgDIhkkhIAAAAIAAEhQAAADgBACQgCACgFABIgKADIgRAAIgRAAIgKgDQgEgBgBgCQgCgCAAgDIAAk9QAAgOAHgIQAIgHAMAAIAwAAQAMAAAKACQAJACAHAFQAGAFAEAIQAFAHADAMIBMDTIABAAIBQjSIAIgUQAEgIAGgFQAGgFAHgCQAIgCAKAAIAyAAQAHAAAFACQAFACAEAEQADADADAGQABAFAAAHIAAE9QAAADgBACQgCACgEABIgKADIgRAAIgRAAg");
	this.shape_32.setTransform(287.6,973.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgOA/IgKgDIgHgDIgDgCIgBgBIgBgBIAAgCIAAgDIAAgEIACgBIAEABIAGAEIAKAEQAGABAGAAQAFAAAGgBQAFgDADgDQAEgDACgFQACgEAAgGQAAgFgDgFQgCgFgEgDQgFgEgGgBQgFgCgHAAIgNAAIgBgBIgBgBIgBgBIAAAAIAAgCIABgCIABgBIABgBIALAAQAHAAAEgBQAFgCAEgEQAEgDACgEQACgFAAgHIgBgIQgCgDgDgDIgGgFQgFgBgDAAQgGAAgFABIgJAEIgGAEIgDABIgBAAIgBgBIAAgBIgBgCIABgDIAAgBIABgBIABgCIADgCIAHgEIAJgDIALAAQAGAAAHABQAGADAEAEQAEAEACAGQACAFAAAGQAAAHgBAFQgCAFgDAEQgDAEgEACQgFADgGACQAHAAAFABQAGACAEAEQAEAEACAGQACAFAAAFQAAAJgCAHQgDAHgFAEQgGAFgHADQgIADgIgBIgMAAg");
	this.shape_33.setTransform(1242.1,939.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgdBTIgCAAIgCgBIgBgBIAAgDIA5icIABgDIABgBIACAAIADAAIACAAIACABIABACIAAABIg5CdIgBADIgCABIgBAAIgDAAg");
	this.shape_34.setTransform(1233.7,939.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AASA/IgCAAIgCgBIgBgBIAAgBIAAgcIg0AAIgCAAIgBgCIgBgBIAAgDIAAgBIAAgCIABgCIABgCIAvhOIABgBIACgBIACgBIAEAAIAEAAIADABIACABIABABIAABQIAPAAQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAIABADIgBAEIgDACIgPAAIAAAcIgBABIgBABIgCABIgDAAgAgeAVIArAAIAAhIg");
	this.shape_35.setTransform(1225,939.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AAtA/IgDAAIgCgBIgBgBIAAgBIgMghIg1AAIgMAhIAAABIgBABIgCABIgDAAIgEAAIgCgBIAAgBIAAgDIAsh1IABgBIABgBIADAAIABAAIADAAIACAAIABABIABABIAsB1IAAADIAAABIgCABIgEAAgAgXARIAuAAIgXhCg");
	this.shape_36.setTransform(1225.6,911.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AggA+IgEgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIAAhvQAAgBABgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAEgCIAbAAQAIAAAIACQAGACAFAFQAEADACAHQACAFAAAHIgBAJIgDAHIgFAHIgHAEQAFABAEACQAFACADAEQADAEADAGQACAFAAAGQgBAGgBAEIgEAJIgFAHIgIAFIgKADIgKABgAgaA0IAaAAQAGAAAEgCQAEgBAEgDQADgDACgFQACgEAAgGQAAgGgBgFQgCgEgEgEQgEgDgGgCQgFgCgGAAIgXAAgAgagGIAWAAQAEAAAFgBQAEgDADgDQADgDABgEIABgJIgBgJQgBgEgDgCQgDgEgEgBQgFgBgGgBIgUAAg");
	this.shape_37.setTransform(922,911.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AghA+IgDgCQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIAAhvQAAgBABgBQAAAAAAgBQAAAAAAgBQABAAAAAAIADgCIAbAAQAKAAAGACQAHADAEAEQAFADACAHQACAGAAAGIgBAJIgDAHIgFAHIgHAEQAFABAFACQAEACADAEQADAEACAFQACAGAAAGQAAAFgBAGIgDAIIgHAHIgIAFIgJADIgKABgAgaAzIAaAAQAFAAAFgBQAEgBAEgDQADgDADgFQACgEAAgGQAAgGgCgFQgCgFgEgDQgEgDgFgCQgGgCgHAAIgWAAgAgagFIAVAAQAGAAAEgCQAEgDADgDQADgDACgEIABgJIgBgJQgCgEgDgCQgDgEgFgBQgEgCgHABIgTAAg");
	this.shape_38.setTransform(1106,811.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AAtA/IgDAAIgCgBIgBgBIAAgBIgMghIg1AAIgMAhIAAABIgBABIgCABIgDAAIgEAAIgCgBIAAgCIAAgCIAsh1IABgBIABgBIADAAIABAAIADAAIACAAIABABIABABIAsB1IAAACIAAACIgCABIgEAAgAgXARIAuAAIgXhCg");
	this.shape_39.setTransform(1041.6,811.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AAAA+IgBAAIgCAAIgBgBIAAgBIAAhvIgmAAIgBAAIgBgBIAAgCIgBgCIABgCIAAgCIABgBIABAAIBVAAIABAAIABABIABACIAAACIAAACIgBACIgBABIgBAAIglAAIAABvIgBABIgBABIgCAAIgCAAg");
	this.shape_40.setTransform(1105,911.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgdA+IgCAAIgDAAIgBgBIAAgBIAAhzQAAgBABgBQAAgBAAAAQAAgBAAAAQABgBAAAAIADgBIAaAAIAGAAIAIABIAKAFQAFADADAEQADAEACAGQACAGAAAHQAAAIgDAHQgDAIgFADQgGAFgHADQgJADgIAAIgRAAIAAAwIAAABIgBABIgCAAIgDAAgAgXACIARAAQAGAAAGgCQAFgBAEgDQAEgEACgFQACgFAAgGQAAgJgDgFQgEgGgEgDQgFgCgEgBIgIgBIgSAAg");
	this.shape_41.setTransform(1041.7,911.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAgA+IgEAAIgCAAIgCgCIgBgCIgLgdIgEgJIgGgIQgCgDgDgBQgEgCgFAAIgLAAIAAA1IgBACIgBABIgDAAIgEAAIgEAAIgCAAIgCgBIAAgCIAAhyQAAgDACgCQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIAbAAIAHAAIAEAAIANAEQAGADADAEQAEAEACAGQACAFAAAHQAAAGgCAFIgFAJIgHAGIgKADQADABACADIAFAEIAEAHIAEAJIALAbIACAFIAAACIAAACIgBABIgDAAIgFAAgAgXgFIAQAAQAGAAADgCIAIgEQADgDACgEQABgEAAgFQAAgHgDgFQgDgFgIgCIgDgBIgIgBIgOAAg");
	this.shape_42.setTransform(1257,411.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgbA+QAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgCgCAAgEIAAhtQAAgEACgCQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAAAIA5AAIACABIABAAIABADIAAADIAAADIgBACIgBABIgCAAIguAAIAAAoIAnAAIACABIABAAIABACIAAAEIAAABIgBACIgBABIgCAAIgnAAIAAAtIAvAAIACAAIABACIAAACIAAADIAAADIAAADIgBABIgCAAg");
	this.shape_43.setTransform(1246.6,411.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAAA/IgCAAIgDgBIgCgBIAAgBIAAh3IAAgBIACgBIADAAIACAAIAEAAIACAAIABABIABABIAAB3IgBABIgBABIgCABIgEAAg");
	this.shape_44.setTransform(1239.1,411.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAgA+IgEAAIgCAAIgCgCIgBgCIgLgdIgEgJIgGgIQgCgDgDgBQgEgCgFAAIgLAAIAAA1IgBACIgBABIgDAAIgEAAIgEAAIgCAAIgCgBIAAgCIAAhyQAAgDACgCQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIAbAAIAHAAIAEAAIANAEQAGADADAEQAEAEACAGQACAFAAAHQAAAGgCAFIgFAJIgHAGIgKADQADABACADIAFAEIAEAHIAEAJIALAbIACAFIAAACIAAACIgBABIgDAAIgFAAgAgXgFIAQAAQAGAAADgCIAIgEQADgDACgEQABgEAAgFQAAgHgDgFQgDgFgIgCIgDgBIgIgBIgOAAg");
	this.shape_45.setTransform(1231.6,411.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAgA+IgEAAIgCAAIgCgCIgBgCIgLgdIgEgJIgGgIQgCgDgDgBQgEgCgFAAIgLAAIAAA1IgBACIgBABIgDAAIgEAAIgEAAIgCAAIgCgBIAAgCIAAhyQAAgDACgCQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIAbAAIAHAAIAEAAIANAEQAGADADAEQAEAEACAGQACAFAAAHQAAAGgCAFIgFAJIgHAGIgKADQADABACADIAFAEIAEAHIAEAJIALAbIACAFIAAACIAAACIgBABIgDAAIgFAAgAgXgFIAQAAQAGAAADgCIAIgEQADgDACgEQABgEAAgFQAAgHgDgFQgDgFgIgCIgDgBIgIgBIgOAAg");
	this.shape_46.setTransform(1220.9,411.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAtA/IgEAAIgDgBIgBgBIgBgBIgLgfIgyAAIgKAeIgBACIgBABIgDABIgFAAIgEAAIgDgBIAAgCIABgEIAphyIACgCIABgBIADAAIAEAAIAEAAIAEAAIACABIABACIAqByIAAAEIAAACIgDABIgFAAgAgVAQIAqAAIgVg8g");
	this.shape_47.setTransform(1209.3,411.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AghA+QgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQgCgCAAgEIAAhtQAAgEACgCQABAAAAAAQABAAAAgBQABAAABAAQAAAAABAAIAcAAQAJAAAHACQAIACAEAEQAFAFADAFQACAGAAAHIgBAJIgDAHIgFAHQgEADgEABQAFABAFACQAEABAEAEQADAEACAGQACAFAAAGQAAAGgCAFIgEAJIgGAHIgJAFIgKADIgLABgAgXAwIAXAAQAFAAAEgBQAEgBADgDIAGgHQABgDAAgGQAAgFgBgFQgCgEgEgDQgDgDgFgBQgFgCgGAAIgUAAgAgXgHIATAAQAEAAAEgBIAHgFIAEgHIABgIIgBgIIgEgHQgDgCgEgBQgEgCgGAAIgRAAg");
	this.shape_48.setTransform(1198.8,411.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgXAjIgBAAIgBAAIAAgBIAAhBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAIACgBIAFAAIADAAIACABIABABIADADIAOAeIADAGIADAEIACAGIADAFIAAgJIAAgJIAAglIAAAAIABgBIACAAIACAAIACAAIACAAIAAABIABAAIAABAIgBACIgBABIgCABIgBAAIgDAAIgCAAIgDgBIgCgDIgBgDIgVgnIgDgGIgDgHIAAAJIAAAIIAAApIAAABIgBAAIgCAAIgCABIgCgBg");
	this.shape_49.setTransform(894.8,288.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgSAjIgBAAIgBAAIAAgBIAAhBIABgCIACgBIAQAAIACAAIAFABIAGACQADABACAEIADAFIACAHQgBAGgCAEQgBAEgDABQgDADgFACQgGACgEAAIgIAAIAAAaIAAABIgBAAIgCAAIgCABIgCgBgAgLAAIAJAAIAEAAIAGgCIACgFIABgGQAAgEgBgDIgEgEQgBgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgDAAIgJAAg");
	this.shape_50.setTransform(888.4,288.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgSAjIgCAAIgBAAIAAgBIAAhBIABgCIADgBIAPAAIADAAIAFABIAGACQADABACAEIADAFIABAHQAAAGgBAEQgCAEgEABQgDADgEACQgGACgEAAIgIAAIAAAaIAAABIgBAAIgCAAIgCABIgCgBgAgLAAIAIAAIAFAAIAGgCIACgFIABgGQABgEgCgDIgFgEQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgDAAIgJAAg");
	this.shape_51.setTransform(867,288.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgXAjIgCgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAg9IABgDIACgBIARAAQAHAAAHACQAGADAEAEQAFAFABAGQADAGAAAIQAAAIgDAHQgCAHgEAEQgFAFgHACQgGACgHAAgAgQAbIAJAAQAHAAADgBQAFgCADgEQADgDABgFQACgGAAgGQAAgFgCgFQgBgFgDgEQgDgDgFgCQgDgCgHAAIgJAAg");
	this.shape_52.setTransform(860.6,288.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgYA7QgKgDgHgJQgHgIgDgLQgDgNgBgPQABgNADgMQAEgMAHgIQAHgJALgFQAKgEANAAQANAAALAEQAKAFAHAHQAHAJADALQAEAMAAAPQAAANgEANQgDALgIAJQgHAJgLAEQgLAFgMAAQgOAAgKgFgAgRgsQgHAEgFAGQgEAHgCAJQgCAJAAAJQAAAKACAKQACAJAEAHQAEAGAIAEQAHAEAKgBQAKAAAHgDQAIgFAFgGQAEgIACgIQACgKAAgJQAAgKgCgJQgCgIgEgHQgFgHgHgEQgIgDgKgBQgJAAgIAFg");
	this.shape_53.setTransform(1021,229.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAtA/IgEAAIgDgBIgBgBIgBgCIgLgeIgyAAIgKAeIgBABIgBACIgDABIgFAAIgEAAIgDgBIAAgDIABgDIAphyIACgCIABgBIADAAIAEAAIAEAAIAEAAIACABIABACIAqByIAAADIAAADIgDABIgFAAgAgVAQIAqAAIgVg8g");
	this.shape_54.setTransform(1008.9,229.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAAA+IgDAAIgCAAIgCgBIAAgCIAAh1IAAgCIACgBIACgBIADAAIADAAIADABIACABIAAACIAAB1IAAACIgCABIgDAAIgDAAg");
	this.shape_55.setTransform(1232.1,226.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAtA+IgEAAIgDAAIgBgBIgBgCIgLgeIgyAAIgKAeIgBABIgBACIgDAAIgFAAIgEAAIgDgBIAAgCIABgDIAphyIACgCIABgBIADgBIAEAAIAEAAIAEABIACABIABACIAqByIAAADIAAACIgDABIgFAAgAgVAQIAqAAIgVg9g");
	this.shape_56.setTransform(1223.9,226.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgBAjIgBAAIgBAAIAAgBIAAhDIAAAAIABgBIABAAIABAAIACAAIABAAIABABIAAAAIAABDIAAABIgBAAIgBAAIgCABIgBgBg");
	this.shape_57.setTransform(843.3,288.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgSAjIgCAAIgBAAIAAgBIAAhBIABgCIADgBIAPAAIADAAIAFABIAGACQADABACAEIAEAFIABAHQAAAGgCAEQgCAEgEABQgCADgGACQgEACgFAAIgIAAIAAAaIAAABIgBAAIgBAAIgDABIgCgBgAgLAAIAIAAIAGAAIAEgCIAEgFIABgGQgBgEgBgDIgFgEQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgDAAIgJAAg");
	this.shape_58.setTransform(839.2,288.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAfAjIgBAAIgBAAIAAgBIAAg8IgZA8IgBABIgBAAIgBABIgBAAIgBgBIgBAAIgBAAIgBgBIgYg8IAAA8IAAABIgBAAIgBAAIgDABIgCgBIgBAAIgBAAIAAgBIAAhAIABgDIADgBIAGAAIADAAIACABIACACIABACIATAyIAAAAIAVgyIABgDIACgBIACgBIACAAIAGAAIACAAIABABIABABIAAACIAABAIAAABIgBAAIgBAAIgCABIgDgBg");
	this.shape_59.setTransform(831.2,288.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgdA+IgEAAIgCAAIgBgBIgBgCIAAhxQAAgEACgCQAAAAABAAQABgBAAAAQABAAAAAAQABAAAAAAIAbAAIAGAAIAJABIAKAFQAGADADAEQAEAFACAFQACAGAAAHQAAAKgDAHQgDAIgGADQgGAFgIADQgJADgJAAIgOAAIAAAtIgBACIgBABIgCAAIgFAAgAgUABIAOAAQAHAAAEgBQAFgBADgEQAEgDACgFQACgFgBgFQAAgIgCgFQgDgFgFgDQgDgCgFgBIgHgBIgPAAg");
	this.shape_60.setTransform(794.1,411.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgNA7QgKgDgGgJQgHgHgEgMQgEgLAAgQQAAgNAEgMQAEgNAHgIQAIgJAKgEQAKgFAKABIALABIAJACIAIADIAFAEIABACIABABIAAACIAAAEIAAADIAAACIgBACIgCAAIgDgCIgHgEQgDgDgGgBQgGgCgHAAQgIAAgFADQgHADgFAHQgFAHgDAJQgCAJAAAKQAAAMACAJQADAJAFAHQAFAFAGAEQAGADAIAAQAIAAAFgCIAKgEIAGgEIAEgCIACAAIAAABIABACIAAAFIAAACIAAACIgBABIgCACIgEADIgHAEIgLAEIgNABQgKAAgKgFg");
	this.shape_61.setTransform(783.5,411.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAtA/IgEAAIgDgBIgBgBIgBgBIgLgfIgyAAIgKAeIgBACIgBABIgDABIgFAAIgEAAIgDgBIAAgCIABgEIAphyIACgCIABgBIADAAIAEAAIAEAAIAEAAIACABIABACIAqByIAAAEIAAACIgDABIgFAAgAgVAQIAqAAIgVg8g");
	this.shape_62.setTransform(1033.9,411.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AA7A+IgEAAIgCAAIgBgBIgBgCIAAhrIgsBsIgBABIgBABIgDAAIgCAAIgDAAIgDAAIgBgBIgBgBIgqhsIAABrIAAACIgCABIgCAAIgEAAIgEAAIgCAAIgCgBIgBgCIAAhxQAAgEADgCQAAAAABAAQABgBAAAAQABAAAAAAQABAAAAAAIALAAIAGAAIADACIAEADIABAFIAjBYIAAAAIAlhYIACgFIADgDIADgCIAFAAIALAAIACAAIACABIACADIABADIAABxIAAACIgCABIgDAAIgEAAg");
	this.shape_63.setTransform(1019.7,411.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgoA+QgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQgCgCAAgEIAAhtQAAgEACgCQABAAAAAAQABAAAAgBQABAAABAAQAAAAABAAIAcAAQAOAAALAEQAMAFAHAHQAIAIAEAMQAEALAAAOQAAAOgFAMQgEAMgIAIQgIAIgLAEQgMAEgOAAgAgeAwIARAAQAMAAAGgDQAJgDAFgGQAGgGACgKQADgJAAgLQAAgKgCgIQgDgKgFgGQgGgGgIgDQgGgEgNgBIgRAAg");
	this.shape_64.setTransform(1005.5,411.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgSA8QgJgDgGgGQgGgGgEgIQgCgJAAgMIAAhLIAAgCIABgBIACAAIAFAAIADAAIADAAIABABIABACIAABJQAAAJACAGQACAHAEAEQAEAFAGACQAFACAGAAQAHAAAFgCQAGgCAEgFQAEgEACgGQACgGAAgJIAAhKIAAgCIACgBIADAAIADAAIAFAAIACAAIABABIAAACIAABKQAAALgCAJQgEAJgGAHQgHAGgIADQgJADgKAAQgKAAgIgDg");
	this.shape_65.setTransform(871.6,229.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgdA+IgDAAIgDAAIgCgBIAAgCIAAhxQAAgEACgCQAAAAABAAQABgBAAAAQABAAAAAAQABAAAAAAIAcAAIAGAAIAIABIAKAFQAFADAEAEQAEAFACAFQACAGAAAHQAAAKgDAHQgDAIgGADQgFAFgJADQgIADgKAAIgOAAIAAAtIgBACIgBABIgCAAIgFAAgAgUABIAPAAQAFAAAFgBQAFgBADgEQAEgDACgFQABgFABgFQAAgIgDgFQgDgFgEgDQgFgCgEgBIgHgBIgPAAg");
	this.shape_66.setTransform(860.5,229.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgNA7QgKgDgGgJQgHgIgEgLQgEgMAAgPQAAgNAEgMQAEgNAHgIQAIgJAKgEQAKgFAKABIALABIAJACIAIADIAFAEIABACIABABIAAACIAAAEIAAADIAAACIgBABIgCABIgDgCIgHgEQgDgDgGgBQgGgCgHAAQgIAAgFADQgHAEgFAGQgFAHgDAJQgCAJAAAKQAAAMACAJQADAJAFAHQAFAFAGAEQAGADAIAAQAIAAAFgCIAKgEIAGgEIAEgCIACABIAAABIABABIAAAFIAAACIAAACIgBABIgCACIgEADIgHAEIgLAEIgNABQgKAAgKgFg");
	this.shape_67.setTransform(849.9,229.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgNA7QgKgEgGgHQgHgJgEgLQgEgMAAgPQAAgNAEgMQAEgNAHgIQAIgJAKgEQAKgFAKAAIALACIAJACIAIADIAFAEIABACIABABIAAACIAAAEIAAADIAAACIgBABIgCABIgDgCIgHgEQgDgCgGgCQgGgCgHAAQgIAAgFADQgHAEgFAGQgFAGgDAKQgCAJAAAKQAAAMACAJQADAJAFAHQAFAFAGAEQAGADAIAAQAIAAAFgCIAKgEIAGgEIAEgCIACABIAAABIABABIAAAFIAAACIAAACIgBABIgCACIgEADIgHAEIgLAEIgNABQgKgBgKgEg");
	this.shape_68.setTransform(649.3,363.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgcA+IgFAAIgCAAIgBgBIgBgCIAAhxQAAgEACgCQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIAbAAIAFAAIAJABIALAFQAEADAFAEQADAFACAFQACAGAAAHQAAAKgDAHQgDAIgGADQgFAFgJADQgJADgJAAIgOAAIAAAtIAAACIgCABIgDAAIgDAAgAgUABIAOAAQAGAAAGgBQAEgBAEgEQADgDACgFQABgFAAgFQAAgIgDgFQgCgFgFgDQgEgCgEgBIgHgBIgPAAg");
	this.shape_69.setTransform(639.1,363.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.txt_header},{t:this.txt_sub}]}).wait(3));

	// Boxes
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgaAvIAAgKIAXAAIAAhEIgSAAIAAgIIALgDIAJgEIAHAAIAABTIAUAAIAAAKg");
	this.shape_70.setTransform(1094.4,375);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgVAkQgIgNAAgXQAAgXAIgNQAIgMANAAQAOAAAIAMQAIANAAAXQAAAXgIANQgIANgOAAQgNAAgIgNgAgMgdQgFAJAAAUQAAAUAFAKQAFAJAHAAQAIAAAFgJQAFgKAAgUQAAgUgFgJQgFgJgIAAQgHAAgFAJg");
	this.shape_71.setTransform(1086.7,375);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgQAuQgIgFgFgJQgFgJAAgQIAAg4IANAAIAAA4QAAAMADAHQADAHAFADQAFADAFAAQAGAAAGgDQAFgDADgHQADgHAAgMIAAg4IAMAAIAAA4QAAAQgFAJQgEAJgIAFQgIAEgKAAQgIAAgIgEg");
	this.shape_72.setTransform(1078.1,375);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgQAEIAAgHIAhAAIAAAHg");
	this.shape_73.setTransform(1071,376);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAYAvIgvAAIAAAAIgBgBIgBgBIAAgBIAAgCIABgBIAAgBIABAAIAWAAIAAhMIgUAMIgDABIgBAAIAAgBIAAgCIAAgCIAAgBIABgBIAAgBIAYgOIAAgBIAAAAIAAAAIABAAIADAAIABAAIABABIAAABIAABUIASAAIABAAIAAABIABABIAAACIAAABIgBABIAAABIgBAAg");
	this.shape_74.setTransform(995.5,802.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgOAtQgGgDgEgGQgDgHgCgIQgCgJAAgMQAAgJACgJQACgJADgHQAEgGAHgEQAGgDAHAAQAJAAAGADQAGADAEAGQAEAHABAIQABAJAAALQAAAKgBAJQgBAJgEAGQgFAHgGADQgGAEgIAAQgIAAgGgDgAgKgkQgEADgDAGQgDAGgBAHIgBAOQAAAKACAHQABAIADAGQADAEAEADQAEACAFABQAEgBAEgBIAGgEIAEgHIACgIIACgJIAAgLIAAgLIgCgKIgDgIQgCgEgCgCQgDgCgDgBIgHgBQgGgBgEAEg");
	this.shape_75.setTransform(987.7,802.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgOAtQgGgDgDgGQgFgHgBgIQgCgJABgMQgBgJACgJQABgJAFgHQAEgGAGgEQAGgDAIAAQAIAAAGADQAGADADAGQAEAHACAIQABAJABALQgBAKgBAJQgCAJgEAGQgEAHgGADQgGAEgIAAQgIAAgGgDgAgKgkQgFADgCAGQgCAGgCAHIAAAOQgBAKACAHQABAIADAGQACAEAFADQAEACAFABQAEgBADgBIAHgEIAEgHIADgIIABgJIAAgLIAAgLIgCgKIgDgIQgBgEgDgCQgDgCgDgBIgHgBQgGgBgEAEg");
	this.shape_76.setTransform(980.1,802.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAAAvIAAAAIgBAAIgBAAIgBgBIgBAAIAAgBIgghYIgBgCIABgBIABAAIADAAIACAAIACAAIAAABIABAAIAbBSIAchSIABAAIABgBIABAAIADAAIACAAIACAAIAAABIgBACIggBYIAAABIgBABIgCAAIgCAAg");
	this.shape_77.setTransform(972.1,802.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgSAvIgDAAIgBAAIAAgBIAAgBIAAhWQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIADgBIAoAAIABAAIAAABIABABIAAACIAAACIgBABIAAABIgBAAIgiAAIAAAkIAgAAIABAAIABABIAAABIAAAAIAAABIAAACIgBAAIgBABIggAAIAAApIgBABIAAABIgCAAIgCAAg");
	this.shape_78.setTransform(964.9,802.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAXAvIgtAAIgBAAIgBgBIAAgBIAAgBIAAgCIAAgBIABgBIABAAIAUAAIAAhMIgTAMIgCABIgBAAIgBgBIAAgCIAAgCIAAgBIABgBIABgBIAWgOIABgBIAAAAIAAAAIACAAIABAAIACAAIAAABIAAABIAABUIASAAIACAAIAAABIABABIAAACIAAABIgBABIgBABIgBAAg");
	this.shape_79.setTransform(1495,490.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgOAtQgGgDgEgGQgDgHgCgJQgCgJABgLQgBgJACgJQACgJADgHQAFgGAGgEQAGgDAHAAQAJAAAGADQAGADADAGQAEAGACAKQABAIABALQgBAKgBAJQgCAJgEAHQgDAGgHAEQgGADgIAAQgIAAgGgDgAgKgkQgFAEgCAFQgCAGgBAHIgBAOQgBAKACAHQABAJADAEQACAGAFACQAEADAFAAQAEAAADgCIAHgEIAEgHIADgIIABgKIABgKIgBgLIgCgLIgDgHQgBgEgDgCQgDgCgDgBIgHgCQgGAAgEAEg");
	this.shape_80.setTransform(1487.1,490.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgOAtQgGgDgEgGQgDgHgCgJQgCgJAAgLQAAgJACgJQACgJADgHQAEgGAHgEQAGgDAHAAQAJAAAGADQAGADAEAGQAEAGABAKQABAIAAALQAAAKgBAJQgBAJgEAHQgFAGgGAEQgGADgIAAQgIAAgGgDgAgKgkQgFAEgCAFQgCAGgCAHIgBAOQAAAKACAHQABAJADAEQADAGAEACQAEADAFAAQAEAAAEgCIAGgEIAEgHIACgIIACgKIAAgKIAAgLIgCgLIgDgHQgCgEgCgCQgDgCgDgBIgHgCQgGAAgEAEg");
	this.shape_81.setTransform(1479.5,490.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAXAvIgrAAIgDgBIgBgDIAAhUQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAAAIADgCIAqAAIABABIABABIAAAAIAAACIAAACIAAACIgBAAIgBAAIglAAIAAAhIAgAAIABABIAAAAIABACIAAACIAAAAIgBAAIAAABIgBAAIggAAIAAAmIAmAAIABAAIAAABIABACIAAABIAAACIgBABIAAABIgBAAg");
	this.shape_82.setTransform(1472.3,490.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgKAtQgIgEgGgGQgGgHgDgIQgDgJAAgLQAAgIAEgJQACgKAHgHQAFgGAJgEQAIgDAIAAIALABIAHACQAEABADACIAEADIABACIAAACIAAACIAAABIgBABIgBABIgDgCIgFgDIgIgDQgGgCgGAAQgHAAgGAEQgHADgEAFQgFAFgCAHQgDAIAAAHQAAAJAEAIQACAHAFAFQAEAGAHACQAFADAHAAIALgCQAFAAAFgDIAAgfIgZAAIgBgBIgBgDIABAAIAAAAIABgBIAAgBIAdAAIACABIACAAIAAABIABABIAAAjIgBADIgDADIgEACIgHACIgIABIgHABQgIAAgJgDg");
	this.shape_83.setTransform(1463.5,490.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AArAjIgCAAIgCgBIgBAAIAAgBIAAgnIgBgJQAAgDgCgDIgFgEQgDgBgDgBQgFABgFADQgEADgGAIIAAAtIAAABIgBAAIgBABIgCAAIAAAAIgCgBIAAAAIgBgBIAAgnIAAgJIgDgGQgCgCgDgCQgCgBgEgBQgFABgEADQgFADgGAIIAAAtIAAABIgBAAIgBABIgCAAIgCAAIgCgBIAAAAIgBgBIAAhAIABgBIAAgBIACAAIACAAIACAAIABAAIABABIAAABIAAAJQAFgGAGgDQAFgDAFAAIAHABIAGADIADAEIACAGIAHgHIAFgEIAGgCIAFgBQAGAAAEACIAHAGQADAEABAFIABAKIAAAoIAAABIgBAAIgBABIgCAAg");
	this.shape_84.setTransform(1402.1,829.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgWA/IgCAAIAAgBIgBgBIAAgBIArh3IABgBIAAgBIABgBIACAAIACAAIACABIABABIgBACIgqB2IgBACIgBAAIgCABIgCAAg");
	this.shape_85.setTransform(1393.5,829);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAAAzIgBAAIgBgBIgBAAIAAgBIAAhhIAAgBIABAAIABgBIABAAIACAAIABABIABAAIAAABIAABhIAAABIgBAAIgBABIgCAAg");
	this.shape_86.setTransform(1389.1,828.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAVAjIgDAAIgCgBIgBgBIAAgBIgPgyIAAgBIAAABIgNAyIgBABIgBABIgCABIgDAAIgCAAIgCgBIgBgBIAAgBIgVg+IAAgBIAAgBIAAgBIABAAIABAAIACAAIADAAIABAAIABABIAAAAIASA4IAAAAIAAAAIAQg4IAAAAIABgBIABAAIABAAIABAAIACAAIABABIAAAAIARA4IASg4IAAAAIABgBIABAAIADAAIACAAIABAAIAAABIAAAAIAAABIAAABIgUA+IgBABIgBABIgCABIgCAAgAAVAYIAAAAg");
	this.shape_87.setTransform(1378.8,830);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgNAhQgGgCgEgFQgEgFgBgGQgCgHAAgIQAAgGACgGQACgHAEgFQAEgFAGgCQAGgDAGAAQAIAAAGACQAFADAEAEQAEAFACAGQACAHAAAHQAAAHgCAHQgCAGgEAFQgEAFgGADQgGACgHAAQgHAAgGgCgAgJgYQgEACgDADQgDAEgBAFQgBAFAAAFIABAKIAEAJQACAEAEACQAFADAFAAQAFAAAEgCQAFgDADgDQACgEACgFIABgLIgBgJQgBgFgDgEQgCgEgFgCQgEgDgGAAQgEAAgFADg");
	this.shape_88.setTransform(1369.7,829.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAAAzIgBAAIgBgBIAAAAIgBgBIAAhhIABgBIAAAAIABgBIABAAIACAAIABABIABAAIAAABIAABhIAAABIgBAAIgBABIgCAAg");
	this.shape_89.setTransform(1364.2,828.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgSAvIgDAAIAAAAIgBgBIAAgBIAAhWQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIACgBIAoAAIABAAIAAABIABABIAAACIAAACIgBABIAAABIgBAAIgiAAIAAAkIAgAAIABAAIABABIABABIAAAAIAAABIgBACIgBAAIgBABIggAAIAAApIgBABIAAABIgCAAIgCAAg");
	this.shape_90.setTransform(1359.4,828.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AArAjIgCAAIgCgBIgBAAIAAgBIAAgnIgBgJQAAgDgCgDIgFgEQgDgBgDgBQgFABgFADQgEADgGAIIAAAtIAAABIgBAAIgBABIgCAAIAAAAIgCgBIAAAAIgBgBIAAgnIAAgJIgDgGQgCgCgDgCQgCgBgEgBQgFABgEADQgFADgGAIIAAAtIAAABIgBAAIgBABIgCAAIgCAAIgCgBIAAAAIgBgBIAAhAIABgBIAAgBIACAAIACAAIACAAIABAAIABABIAAABIAAAJQAFgGAGgDQAFgDAFAAIAHABIAGADIADAEIACAGIAHgHIAFgEIAGgCIAFgBQAGAAAEACIAHAGQADAEABAFIABAKIAAAoIAAABIgBAAIgBABIgCAAg");
	this.shape_91.setTransform(1402.1,695.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgWA/IgCAAIAAgBIgBgBIAAgBIArh3IABgBIAAgBIABgBIACAAIACAAIACABIABABIgBACIgqB2IgBACIgBAAIgCABIgCAAg");
	this.shape_92.setTransform(1393.5,695);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAAAzIgBAAIgBgBIgBAAIAAgBIAAhhIAAgBIABAAIABgBIABAAIACAAIABABIABAAIAAABIAABhIAAABIgBAAIgBABIgCAAg");
	this.shape_93.setTransform(1389.1,694.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAVAjIgDAAIgCgBIgBAAIAAgCIgPgyIAAAAIAAAAIgNAyIgBACIgBAAIgCABIgDAAIgCAAIgCgBIgBAAIAAgCIgVg+IAAgBIAAgBIAAgBIABAAIABAAIACAAIADAAIABAAIABAAIAAABIASA4IAAABIAAgBIAQg4IAAgBIABAAIABAAIABAAIABAAIACAAIABAAIAAABIARA4IASg4IAAgBIABAAIABAAIADAAIACAAIABAAIAAAAIAAABIAAABIAAABIgUA+IgBACIgBAAIgCABIgCAAgAAVAZIAAgBg");
	this.shape_94.setTransform(1378.8,696);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgNAhQgGgCgEgFQgEgFgBgGQgCgHAAgIQAAgGACgGQACgHAEgFQAEgFAGgCQAGgDAGAAQAIAAAGACQAFADAEAEQAEAFACAGQACAHAAAHQAAAHgCAHQgCAGgEAFQgEAFgGADQgGACgHAAQgHAAgGgCgAgJgYQgEACgDADQgDAEgBAFQgBAFAAAFIABAKIAEAJQACAEAEACQAFADAFAAQAFAAAEgCQAFgDADgDQACgEACgFIABgLIgBgJQgBgFgDgEQgCgEgFgCQgEgDgGAAQgEAAgFADg");
	this.shape_95.setTransform(1369.7,695.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAAAzIgBAAIgBgBIAAAAIgBgBIAAhhIABgBIAAAAIABgBIABAAIACAAIABABIABAAIAAABIAABhIAAABIgBAAIgBABIgCAAg");
	this.shape_96.setTransform(1364.2,694.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgSAvIgDAAIAAAAIgBgBIAAgBIAAhWQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIACgBIAoAAIABAAIAAABIABABIAAACIAAACIgBABIAAABIgBAAIgiAAIAAAkIAgAAIABAAIABABIABABIAAAAIAAABIgBACIgBAAIgBABIggAAIAAApIgBABIAAABIgCAAIgCAAg");
	this.shape_97.setTransform(1359.4,694.7);

	this.instance_1 = new lib.fill();
	this.instance_1.setTransform(1382.8,721.7,1,1,0,0,0,32.9,8.1);

	this.instance_2 = new lib.fill();
	this.instance_2.setTransform(1382.8,801.1,1,1,0,0,0,32.9,8.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(4.3).p("AAAjhIAAHD");
	this.shape_98.setTransform(1016.8,448.4,1,0.811);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("Ag0g1IBpAtIhfA+g");
	this.shape_99.setTransform(522.5,655.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(4.3).p("AhhAAIDDAA");
	this.shape_100.setTransform(508.7,654.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgfgeIA/APIgmAug");
	this.shape_101.setTransform(526.3,680.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(2.1).p("ABHBHIiNiN");
	this.shape_102.setTransform(534.1,688.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(1.4).p("ABOhKIAACMIgyiMIgWCMIgZiMIgjCMIgXhF");
	this.shape_103.setTransform(531,685.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(4.3).p("AkHhtIAADGIIOAAIAAjG");
	this.shape_104.setTransform(520,716.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(4.3).p("ACbChIk1AAIAAlBIE1AAg");
	this.shape_105.setTransform(514.4,655.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgdAfQgNgNgBgSQABgRANgMQAMgOARAAQASAAANAOQANAMgBARQABASgNANQgNANgSgBQgRABgMgNg");
	this.shape_106.setTransform(485,655.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("ApQARIAdghIRmAAIAeAhg");
	this.shape_107.setTransform(643,414.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AonASIAbgjIQWAAIAeAjg");
	this.shape_108.setTransform(643.1,409.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(2.1).p("AskAAIZJAA");
	this.shape_109.setTransform(644.2,421.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(2.8).p("AtHAAIaPAA");
	this.shape_110.setTransform(644.2,425);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(2.1).p("AppiEIjeDjIAAAmIaPAAIAAgmIjXjjg");
	this.shape_111.setTransform(644.2,415.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AtGCFIAAgmIDdjjITZAAIDXDjIAAAmg");
	this.shape_112.setTransform(644.2,415.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(2.1).p("AIyE+IxjAAIAAp6IRjAAg");
	this.shape_113.setTransform(644.8,363.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(4.3).p("AJtF/IzZAAIAAr9ITZAAg");
	this.shape_114.setTransform(644.5,363.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(1.4).p("AhNBLIAAiMIAyCMIAWiMIAYCMIAjiMIAYBF");
	this.shape_115.setTransform(928.7,872.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(1.4).p("ABOBKIgCiMIgwCMIgYiLIgWCMIgliLIgWBF");
	this.shape_116.setTransform(1220.4,872.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(4.3).p("AkHhtIAADFIIPAAIAAjF");
	this.shape_117.setTransform(392.8,1004);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(4.3).p("AkHhtIAADGIIOAAIAAjG");
	this.shape_118.setTransform(714,716.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").p("AnslyINyLeIAAh5IhOgZICTggIiRgpICfgdIicgnICWgjIiYgsICYgfIiSgnICBgm");
	this.shape_119.setTransform(303.7,838.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(4.3).p("AAAEQIAAof");
	this.shape_120.setTransform(292.9,885.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(4.3).p("AAAhSIAACl");
	this.shape_121.setTransform(292.9,927.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(4.3).p("AkGhtIAADFIINAAIAAjF");
	this.shape_122.setTransform(1185.8,689);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(1.4).p("ABOhJIAACLIgyiLIgWCLIgZiLIgjCLIgXhF");
	this.shape_123.setTransform(1203,624.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(1.4).p("ABOhKIAACMIgyiMIgWCMIgYiMIgjCMIgYhF");
	this.shape_124.setTransform(731.1,624.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").p("Am6BJQEKiODqgCQCsgCDVBR");
	this.shape_125.setTransform(279.2,890.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AhcAWIAmhSICTB5g");
	this.shape_126.setTransform(331.1,893.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgfAgQgNgOAAgSQAAgRANgOQAOgNARAAQASAAAOANQANANAAASQAAASgNAOQgOANgSAAQgSAAgNgNg");
	this.shape_127.setTransform(342.7,874.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AhAAAICBhZIAACzg");
	this.shape_128.setTransform(260.9,826.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AhdhRIC7BdQgVAVghAxg");
	this.shape_129.setTransform(248.7,797.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(4.3).p("AAAETIAAol");
	this.shape_130.setTransform(280.7,885.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(4.3).p("AipAAIFTAA");
	this.shape_131.setTransform(286.4,913);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(4.3).p("AiQAAIEhAA");
	this.shape_132.setTransform(286.9,919.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(4.3).p("AAAhSIAACl");
	this.shape_133.setTransform(280.7,927.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(4.3).p("AF/AAQAACehwBxQhwBwifAAQidAAhxhwQhwhxAAieQAAieBwhwQBxhwCdAAQCfAABwBwQBwBwAACeg");
	this.shape_134.setTransform(287.1,974.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(4.3).p("AFRAAQAACLhjBjQhjBjiLAAQiKAAhjhjQhjhjAAiLQAAiKBjhjQBjhjCKAAQCLAABjBjQBjBjAACKg");
	this.shape_135.setTransform(288,824.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(4.3).p("ACxBRIlMAAIAAihIFMAA");
	this.shape_136.setTransform(918.8,890.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AhAhPIAsAAIBVBPIhRBQIgwABg");
	this.shape_137.setTransform(909.7,890.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AALBKIhNhJIBQhOIA2AAIAACbg");
	this.shape_138.setTransform(1239,890.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(4.3).p("AivBQIFKAAIAAifIlKAA");
	this.shape_139.setTransform(1230.2,890.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(4.3).p("AVkF6MgrHAAAIAArzMArHAAAg");
	this.shape_140.setTransform(1074.6,861.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(4.3).p("AAAgrIAABX");
	this.shape_141.setTransform(1186.2,634.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAAMANQANANABARQgBASgNANQgMANgSAAQgRAAgNgNg");
	this.shape_142.setTransform(1178.7,586.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(4.3).p("AgqAAIBWAA");
	this.shape_143.setTransform(1186.2,629.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(4.3).p("AggBjIBBjF");
	this.shape_144.setTransform(1175.5,621.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("Agyg4IBlAjIhTBOg");
	this.shape_145.setTransform(1172.5,632.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("Agyg4IBlA1IhXA9g");
	this.shape_146.setTransform(1136,615.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgyAWIBThOIASBxg");
	this.shape_147.setTransform(1177.3,611.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(4.3).p("Ag4BbIBxi1");
	this.shape_148.setTransform(1145.1,628.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(4.3).p("ABEB4IiHjv");
	this.shape_149.setTransform(1142.8,629.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(4.3).p("ACbChIk1AAIAAlBIE1AAg");
	this.shape_150.setTransform(1178.9,621.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(4.3).p("ACuBbIlbAAIAAi1IFbAAg");
	this.shape_151.setTransform(1145.9,628.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(4.3).p("AAAgrIAABX");
	this.shape_152.setTransform(714.4,632.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgeAfQgNgNABgSQgBgRANgMQANgOARAAQASAAAMAOQAOAMAAARQAAASgOANQgMANgSgBQgRABgNgNg");
	this.shape_153.setTransform(698,655.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNg");
	this.shape_154.setTransform(706.8,586.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(4.3).p("AgrAAIBXAA");
	this.shape_155.setTransform(714.3,629.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(4.3).p("AggBjIBBjF");
	this.shape_156.setTransform(703.6,621.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("Agyg4IBlAjIhTBOg");
	this.shape_157.setTransform(700.6,632.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("Agyg4IBlA1IhXA9g");
	this.shape_158.setTransform(664.1,615.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgyAWIBThOIASBxg");
	this.shape_159.setTransform(705.4,611.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(4.3).p("Ag4BbIBxi1");
	this.shape_160.setTransform(673.2,628.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(4.3).p("ABEB4IiHjv");
	this.shape_161.setTransform(670.9,629.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(4.3).p("ACcChIk3AAIAAlBIE3AAg");
	this.shape_162.setTransform(707,621.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(4.3).p("ACtBbIlZAAIAAi1IFZAAg");
	this.shape_163.setTransform(674,628.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(4.3).p("ADwCqInfAAIAAlTIHfAAg");
	this.shape_164.setTransform(789.4,411);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(4.3).p("Ao7AAIR3AA");
	this.shape_165.setTransform(1227,430);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(4.3).p("Ao7AAIR3AA");
	this.shape_166.setTransform(1227,393.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(4.3).p("AI8IiIx3AAIAAxDIR3AAg");
	this.shape_167.setTransform(1227,411);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(4.3).p("AliAAILFAA");
	this.shape_168.setTransform(1017.8,430);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(4.3).p("AliAAILFAA");
	this.shape_169.setTransform(1017.8,393.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(4.3).p("AA8BtIh3AAIAAjZIB3AAg");
	this.shape_170.setTransform(1032.9,510.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(4.3).p("AA8BtIh3AAIAAjZIB3AAg");
	this.shape_171.setTransform(1001.9,510.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(4.3).p("AFjIiIrFAAIAAxDILFAAg");
	this.shape_172.setTransform(1017.8,411);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(4.3).p("AAApjIAATG");
	this.shape_173.setTransform(1242.3,250.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(4.3).p("AAApjIAATG");
	this.shape_174.setTransform(1212.3,250.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(4.3).p("AAApjIAATG");
	this.shape_175.setTransform(1035.3,250.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(4.3).p("AAApjIAATG");
	this.shape_176.setTransform(994.3,250.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(4.3).p("AH7JjIvaAAICpioIiYiYICViVIiOiNICQiOIiaiZICYiYIililIPcAAg");
	this.shape_177.setTransform(1220,250.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(4.3).p("AAAjhIAAHD");
	this.shape_178.setTransform(878.6,288.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(4.3).p("AAAjhIAAHD");
	this.shape_179.setTransform(849.9,288.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(4.3).p("AmkAAINJAA");
	this.shape_180.setTransform(864.1,266);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(4.3).p("AAApjIAATG");
	this.shape_181.setTransform(906.3,250.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(4.3).p("A41JjMAu6AAAICoioIiYiYICWiVIiOiNICPiOIiZiZICYiYIililMgu7AAAg");
	this.shape_182.setTransform(980.9,250.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("Am1FxQhVgbgyhAQg6hLAAhwQgBiqCKhEQBggvBlANIAPACIAHgNQA/h6BjguQBUgnBhAVQBYATBIA5QBBAzAQA3IAEAOIAPACQA9ADAyAyQArAsAKAwIADAMIALAEQBEAUAiA9QAeA5gKA+QgMA+gwAfQg6AjhYgWIgJgCIgHAEQhFArg6AJQhEAKg8ghIgMgGIgKAHQhDAshLABQhEABhAgfIgNgGIgLAKQgmAjhKAKQgZADgZAAQg3AAg0gRg");
	this.shape_183.setTransform(941.5,107.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AnDGaQhiggg5hKIAAAAQhEhVABiAQAAjFChhPQBlgxBpAKQBGh/BqgwQBhgtBvAZQBhAUBQA/QBFA3AWA7QBDAIA5A5IgBAAQAwAxAOA0QBLAdAnBFIABAAQAmBGgOBMIAAABQgPBRhAAoQhEArhmgXQhJArg+AKQhMALhEghQhIAshSACQhHABhEgeQgtAkhPALQgcAEgbAAQg9AAg8gTgAntiTQiLBEABCqQAABwA6BLQAyBABVAbQBNAZBQgLQBKgKAmgjIALgKIANAGQBAAfBEgBQBMgBBCgsIALgHIALAGQA9AhBDgKQA7gJBEgrIAIgEIAJACQBYAWA6gjQAwgfALg+QALg+gfg5Qgig9hDgUIgMgEIgCgMQgKgwgsgsQgygyg8gDIgPgCIgFgOQgPg3hCgzQhIg5hXgTQhhgVhUAnQhkAug/B6IgHANIgOgCQgWgCgWAAQhOAAhLAkg");
	this.shape_184.setTransform(941.5,107.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.instance_2},{t:this.instance_1},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70}]}).wait(3));

	// overlay
	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(2.1).p("EAmVgPpIAAfJMhMzAAA");
	this.shape_185.setTransform(647.1,413.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("EAJeBAFIAAqMIAdAAIAApUMBHvAAAIAATggEg4lgU6IAAxAIL5AAIAARAgEhRpgs8IAAzIMAltAAAIAATIg");
	this.shape_186.setTransform(1344.5,599.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(2.1).p("EAmagPpIAAfJMhM+AAA");
	this.shape_187.setTransform(646.6,413.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AGNVlIAAxBIL4AAIAARBgAy1icIAAzIMAlrAAAIAATIg");
	this.shape_188.setTransform(942.6,327);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_186},{t:this.shape_185}]}).to({state:[{t:this.shape_188},{t:this.shape_187}]},1).wait(2));

	// Numbers
	this.numbers = new lib.nullennull();
	this.numbers.setTransform(681.1,464.7,1,1,0,0,0,154.8,11.4);
	this.numbers._off = true;

	this.timeline.addTween(cjs.Tween.get(this.numbers).wait(1).to({_off:false},0).wait(2));

	// Animations
	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#F4FFFF").s().p("AgsBDIgCAAIgCgBIAAgCIABgCIBUh+IABAAIACgBIABAAIADAAIACAAIACABIAAABIgBACIhUB9IgBACIgCAAIgBABIgDAAgAAZA+QgFgCgDgEQgEgEgBgHQgCgGAAgHQAAgHACgHQABgFAEgFQADgFAFgCQAFgBAGAAQAIAAAFABQAFACADAFQADAFABAFIABANQAAAHgBAHQgCAGgDAEQgEAEgEADQgFACgHAAQgHAAgEgCgAAdAJQgDACgBADIgDAHIgBAKQAAAHABAEQABAFACADQACADADABIAHABQAEAAADgCQADgBACgDIACgIIABgJIgBgKIgDgIQgCgDgDgCQgDgCgEAAQgEABgDABgAgvAAQgFgBgDgEQgDgEgCgHQgBgFAAgJQAAgHABgGQACgGADgFQADgDAFgDQAFgCAHgBQAHABAFACQAFACADAFQADAFABAFQACAHAAAGQAAAIgCAFQgCAHgDAEQgDAEgFACQgFABgHAAQgGAAgFgBgAgqg0QgDACgCADIgDAHIgBAKIABALIADAIIAFAEIAHABQAFAAACgCIAFgEIACgIIABgJIgBgKIgDgIQgBgDgDgCQgDgBgFgBQgDABgDABg");
	this.shape_189.setTransform(315.3,438.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#F4FFFF").s().p("AgsBDIgCAAIgCgBIAAgCIABgCIBUh+IABgBIACAAIABAAIADAAIACAAIACABIAAABIgBACIhUB+IgBABIgCAAIgBABIgDAAgAAZA+QgFgCgDgEQgEgEgBgHQgCgGAAgHQAAgIACgGQABgGAEgEQADgFAFgCQAFgBAGAAQAIAAAFABQAFACADAFQADAEABAGIABANQAAAHgBAHQgCAGgDAEQgEAFgEACQgFADgHAAQgHAAgEgDgAAdAJQgDACgBADIgDAHIgBAKQAAAHABAEQABAFACADQACADADABIAHABQAEAAADgCQADgBACgDIACgIIABgJIgBgKIgDgIQgCgDgDgCQgDgCgEAAQgEABgDABgAgvAAQgFgBgDgEQgDgEgCgHQgBgFAAgJQAAgHABgGQACgGADgFQADgEAFgCQAFgCAHgBQAHABAFACQAFACADAFQADAEABAGQACAHAAAGQAAAIgCAFQgCAHgDAEQgDAEgFACQgFABgHAAQgGAAgFgBgAgqg0QgDACgCADIgDAHIgBAKIABALIADAIIAFAEIAHABQAFAAACgCIAFgEIACgIIABgJIgBgKIgDgIQgBgEgDgBQgDgBgFgBQgDABgDABg");
	this.shape_190.setTransform(315.3,473.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#F4FFFF").s().p("AAbBEIgDAAIgDgBIgBgBIgBgBIgogyIAAAyIAAABIgBABIgCABIgCAAIgDAAIgCgBIgBgBIAAgBIAAiBIAAgBIABgBIACgBIADAAIACAAIACABIABABIAAABIAABPIAkgkIACgBIABgBIACAAIADgBIADAAIACABIABABIAAABIAAACIgCACIgiAfIAmAvIACADIAAABIAAABIgBABIgCABIgDAAg");
	this.shape_191.setTransform(188.5,438.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#F4FFFF").s().p("AgLAsQgHgDgFgGQgFgGgCgIQgCgJgBgMQAAgLADgJQAEgJAFgGQAFgGAIgCQAHgDAFAAIAJABIAHACIAHADIADADIACACIAAABIABACIAAACIgBAEIgCABIgDgCIgFgDQgDgDgFgBQgEgCgGAAQgLAAgHAKQgGAJgBARQAAAJACAHQACAHADAFQAEAEAFADQAFACAEAAQAGAAAEgCIAIgEIAGgEIADgCIABABIABABIABABIAAADIAAACIgBABIgBACIgBABIgEAEIgHADIgIADIgJAAQgHAAgHgDg");
	this.shape_192.setTransform(179.4,440.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#F4FFFF").s().p("AAABAIgBAAIgCgBIgBgBIAAgBIAAhWIAAgBIABgBIACAAIABgBIADABIACAAIAAABIAAABIAABWIAAABIAAABIgCABIgDAAgAgEgwQgCgCAAgFQAAgEACgCQACgCACAAQAEAAABACQACABAAAFQAAAFgCABQgBACgEAAQgDAAgBgBg");
	this.shape_193.setTransform(172.8,439);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#F4FFFF").s().p("AAMA6QgGABgFgCQgCgCgDgEQgEgDgBgGQgBgFAAgHIAAg1IgOAAIgCgBIAAgFIAAgBIAAgCIABgBIABAAIAOAAIAAgWIAAgBIABgBIACAAIADAAIADAAIABAAIAAABIAAABIAAAWIAYAAIABAAIABABIAAACIABABIgBAFIgCABIgYAAIAAAzQAAAKADAFQADAFAHABIAEgBIAEgBIACgBIACAAIAAAAIABABIABABIAAACIgBADIgBACIgBACIgEABIgEAAIgEAAg");
	this.shape_194.setTransform(167.2,439.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#F4FFFF").s().p("AgKAvIgHgCIgGgDIgDgCIgCgCIgBgEIAAgCIABgCIABgBIABAAIADABIAFADIAHADQAEABAGAAIAGgBIAHgDIAEgFQACgDAAgEQAAgEgDgDIgEgFIgIgDIgGgEIgIgCIgIgEQgDgDgBgFQgCgEAAgFIABgJQACgFADgDQAFgEAFgCQAFgCAGAAIAHAAIAGACIAFACIACABIACACIAAABIABABIAAACIAAACIgBACIgBABIgBAAIgCgBIgEgCIgGgCIgIgBIgGABIgGADIgDAEQgCADABADQAAAEABADQACADAEACIAHAEIAGADIAJADIAHAEQAEADACAEQABAEAAAFQAAAHgCAFQgDAFgEADQgEAEgGACQgGABgGAAIgIAAg");
	this.shape_195.setTransform(160.4,440.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#F4FFFF").s().p("AgOBAIgCgBIAAgBIAAgCIAMggIgBgBIgBgBIgghUIgBgCIABgCIACAAIADgBIADABIADAAIABABIAAABIAaBLIAchLIABgCIACAAIADgBIADABIACAAIAAACIAAACIghBWIgKAhIgCACIgFABIgDAAg");
	this.shape_196.setTransform(152.4,442.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#F4FFFF").s().p("AgSAsQgHgDgGgGQgFgGgCgJQgDgJAAgLQAAgIADgJQACgJAGgGQAFgHAIgEQAIgDAJAAQALAAAHADQAIADAFAGQAGAGACAJQADAJAAAKQAAAJgDAJQgDAJgFAHQgGAGgIAEQgIADgJAAQgKAAgIgDgAgMghQgGADgDAFQgEAFgCAHQgCAGAAAHQAAAHACAHQABAHAEAFQADAFAGADQAGADAHAAQAHAAAGgDQAGgDADgFQAEgFACgGQABgHAAgIIgBgNQgBgGgEgGQgDgFgGgDQgGgDgIAAQgGAAgGADg");
	this.shape_197.setTransform(142.8,440.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#F4FFFF").s().p("AgIA/IgFgBIgDgBIgDgCIAAgBIgBgBIAAgCIAAgCIAAgCIAAgCIABgBIABAAIACABIAEACIAEABIAFABIAFgBQACgBACgCQACgDAAgEIABgMIAAhaIAAgBIABgBIACgBIADAAIADAAIACABIABABIAAABIAABcQAAAHgBAGQgBAGgDAEQgDAEgFADQgFACgGAAIgFgBg");
	this.shape_198.setTransform(133.6,439.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#F4FFFF").s().p("AgNAsQgIgDgGgGQgFgGgDgJQgDgJAAgLQAAgJADgJQADgJAGgGQAFgHAIgDQAHgDAHAAQAKAAAHADQAHADAFAGQAEAGADAHQACAIAAAIIAAACQAAABAAABQAAABgBAAQAAAAAAAAQgBAAAAAAIgEABIg6AAQAAAIACAHQABAHAEAEQAEAFAGADQAFACAHAAIALgBIAJgCIAGgDIADgBIABABIABABIAAABIAAADIAAABIAAABIgBABIAAABIgDACIgHACIgJACIgMABQgIAAgIgDgAgJgiQgFADgEAEQgDAEgCAFQgCAGAAAGIA0AAQAAgOgHgIQgHgIgMAAQgFAAgFACg");
	this.shape_199.setTransform(248,475.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#F4FFFF").s().p("AAAAuIgBAAIgDAAIgBgBIgBgBIgghUIAAgCIgBAAIAAgBIABgBIABgBIACAAIACAAIADAAIADAAIABABIAAABIAaBMIAAAAIAAAAIAbhMIABgBIABgBIACAAIADAAIADAAIABAAIABABIAAABIAAABIAAAAIAAABIAAABIggBUIgBABIgCABIgCAAIgCAAg");
	this.shape_200.setTransform(238.9,475.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#F4FFFF").s().p("AAABEIgBAAIgCgBIgBgBIAAgBIAAiBIAAgBIABgBIACgBIABAAIACAAIACABIABABIAAABIAACBIAAABIgBABIgCABIgCAAg");
	this.shape_201.setTransform(232.3,473);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#F4FFFF").s().p("AgPAuQgFgCgEgEQgEgDgDgFQgBgFAAgFQAAgIACgFQAEgGAFgDQAGgCAIgCQAHgBAIAAIAOAAIAAgIIgBgKQgBgEgDgDQgCgDgEgCQgFgBgGAAQgEAAgFABIgHADIgGAEIgEABIgBAAIgBgBIAAgBIgBgCIABgEIABgCIAFgDIAHgDIAJgCIAHgBQAJAAAGACQAGACAFAEQAEAEABAGQABAGAAAIIAAA6IAAABIgCABIgCAAIgDAAIgCgBIgBgBIAAgKQgGAGgGAEQgIADgGAAQgGAAgGgBgAgEADQgFACgEACIgGAGQgBADAAAFQAAAHAFAFQAFAEAIAAQAGAAAGgDQAFgEAHgHIAAgVIgQAAIgKABg");
	this.shape_202.setTransform(225.1,475.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#F4FFFF").s().p("AAAAuIgBAAIgCAAIgCgBIgBgBIgghUIAAgCIAAAAIAAgBIAAgBIABgBIABAAIADAAIAEAAIACAAIAAABIABABIAaBMIAAAAIAAAAIAbhMIABgBIABgBIACAAIADAAIADAAIABAAIACABIAAABIAAABIAAAAIgBABIAAABIggBUIgBABIgBABIgDAAIgCAAg");
	this.shape_203.setTransform(216.6,475.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#F4FFFF").s().p("AgFAHQgCgCAAgFQAAgEACgCQACgCADAAQAEAAACACQACACAAAEQAAAFgCACQgCACgEAAQgDAAgCgCg");
	this.shape_204.setTransform(205.2,478.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#F4FFFF").s().p("AgfBAIgDAAIgCAAIgBgBIAAgBIAAh6IAAgBIABgBIABAAIADAAIADAAIABAAIABABIAAABIAAANIAIgHIAIgFIAIgDIAGgBQAJAAAHAEQAGADAFAGQAEAHACAIQACAJAAAJQAAAMgDAHQgCAJgFAGQgEAGgIAEQgHADgJAAIgFAAIgHgDIgHgEIgHgHIAAAuIAAABIgBABIgCAAIgCAAgAgDg0IgHADIgIAGIgIAJIAAAkQAIAJAHAFQAGAEAFAAQAHAAAFgDQAFgDADgFQADgGABgEIACgOQAAgHgCgHQgBgHgCgFQgDgGgEgDQgFgDgHAAIgFABg");
	this.shape_205.setTransform(197.9,476.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#F4FFFF").s().p("AgSAsQgHgDgGgGQgFgGgCgJQgDgJAAgLQAAgIADgJQACgJAGgGQAFgHAIgEQAIgDAJAAQALAAAHADQAIADAFAGQAGAGACAJQADAJAAAKQAAAJgDAJQgDAJgFAHQgGAGgIAEQgIADgJAAQgKAAgIgDgAgMghQgGADgDAFQgEAFgCAHQgCAGAAAHQAAAHACAHQABAHAEAFQADAFAGADQAGADAHAAQAHAAAGgDQAGgDADgFQAEgFACgGQABgHAAgIIgBgNQgBgGgEgGQgDgFgGgDQgGgDgIAAQgGAAgGADg");
	this.shape_206.setTransform(187.2,475.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#F4FFFF").s().p("AgRAvIgDAAIgCgBIgBgBIAAgBIAAhWIAAgBIABgBIACAAIADgBIACABIACAAIAAABIABABIAAAOIAHgJQADgEACgBIAFgDIAFgBIAEABIADAAIADABIADABIAAABIABABIAAABIAAACIAAADIAAACIgBABIgBAAIgCgBIgDAAIgDgBIgFgBIgEABIgFAEIgFAGIgGALIAAA5IgBABIgBABIgCABIgCAAg");
	this.shape_207.setTransform(179.6,475.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#F4FFFF").s().p("AggBAIgCAAIgCAAIgBgBIAAgBIAAh6IAAgBIABgBIABAAIADAAIADAAIABAAIABABIABABIAAANIAIgHIAHgFIAHgDIAGgBQAKAAAHAEQAHADAEAGQAEAHACAIQACAJAAAJQAAAMgDAHQgCAJgFAGQgFAGgHAEQgHADgJAAIgGAAIgGgDIgGgEIgIgHIAAAuIAAABIAAABIgCAAIgEAAgAgEg0IgGADIgHAGIgJAJIAAAkQAIAJAHAFQAGAEAFAAQAHAAAFgDQAFgDADgFQADgGACgEIABgOQAAgHgBgHQgBgHgEgFQgCgGgEgDQgFgDgIAAIgFABg");
	this.shape_208.setTransform(170.6,476.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#F4FFFF").s().p("AgTAFIgCgBIgBgEIABgCIACgBIAnAAIABAAIABABIABACIAAAAIgBAEIgCABg");
	this.shape_209.setTransform(162,474.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#F4FFFF").s().p("AggA/QgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAhwQAAgEACgBQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAbAAQAIAAAIADQAGACAFAEQAEAEADAGQABAGAAAHIAAAJIgDAHIgGAHQgDADgEACQAFABAEABQAFACADAEQAEAEACAGQACAFAAAGQAAAGgBAFQgCAFgDADIgFAHIgIAGIgKADIgKABgAgaA0IAaAAQAFAAAFgBQAEgCAFgDQADgDACgEQACgFAAgGQAAgGgCgFQgCgEgDgEQgFgDgFgCQgGgBgHAAIgWAAgAgagGIAVAAQAFAAAFgCQAEgBADgEQADgDACgEQABgEAAgFQAAgFgBgEQgCgEgDgDQgDgDgFgBQgEgCgGAAIgUAAg");
	this.shape_210.setTransform(154.1,473.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#F4FFFF").s().p("AA8A/IgDAAIgCgBIgBgBIgBAAIAAhxIgxBxIgBABIgBAAIgCABIAAAAIgCAAIgBgBIgCAAIAAgBIgwhxIAABxIAAAAIgBABIgCABIgDAAIgDAAIgCgBIAAgBIgBAAIAAh0QABgEABgCQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIAGAAIAFAAIADACIACADIACADIApBiIAAAAIAqhiIADgDIACgDIADgCIADAAIAHAAIACAAIABABIACACIABAEIAAB0IgBAAIgBABIgCABIgCAAg");
	this.shape_211.setTransform(139.8,473.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#F4FFFF").s().p("AgNAsQgIgDgGgGQgFgGgDgJQgDgJAAgLQAAgJADgJQADgJAGgGQAFgHAIgDQAHgDAHAAQAKAAAHADQAHADAFAGQAEAGADAHQACAIAAAIIAAACQAAABAAABQAAABgBAAQAAAAAAAAQgBAAAAAAIgEABIg6AAQAAAIACAHQABAHAEAEQAEAFAGADQAFACAHAAIALgBIAJgCIAGgDIADgBIABABIABABIAAABIAAADIAAABIAAABIgBABIAAABIgDACIgHACIgJACIgMABQgIAAgIgDgAgJgiQgFADgEAEQgDAEgCAFQgCAGAAAGIA0AAQAAgOgHgIQgHgIgMAAQgFAAgFACg");
	this.shape_212.setTransform(203.6,509.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#F4FFFF").s().p("AAABEIgBAAIgCgBIgBgBIAAgBIAAiBIAAgBIABgBIACgBIABAAIACAAIACABIABABIAAABIAACBIAAABIgBABIgCABIgCAAg");
	this.shape_213.setTransform(196.5,507);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#F4FFFF").s().p("AgSA/QgHgCgFgDQgFgEgCgEQgCgEAAgFIABgHQABgDACgCIAEgGIAFgFQgFgCgCgEQgDgEAAgEQAAgEADgEIAFgJQgDgDgBgFQgCgEAAgGQAAgIADgGQACgGAFgEQAEgEAGgCQAGgCAHAAIAGAAIAGABIAaAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABADIgBAEIgCABIgOAAQAEAEACAFQABAFAAAGQAAAHgCAGQgDAGgEAEQgEAEgHACQgGACgFAAQgGAAgFgBQgGgCgDgCIgDAEQgBACAAACQAAAEADACQAEADAGAAIAWABIALACQAFABAEADQAEADADAEQACAEAAAGQAAAGgCAFQgDAGgFAEQgFAEgIACQgHACgJAAQgLAAgHgBgAgVAaIgEAFIgCAFIAAAEQAAAHAHAEQAHAEANAAQAHAAAFgCIAJgEQADgDACgDIABgHQAAgHgFgDQgFgEgJAAIgYgBIgFAFgAgKg0QgEACgDADQgCADgBAEQgCAEAAAFQAAAJAGAGQAFAGAKAAQAEAAAEgCQADgCADgDQADgDABgEQABgEAAgEQAAgKgFgGQgGgFgIAAQgFAAgEABg");
	this.shape_214.setTransform(189.5,510.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#F4FFFF").s().p("AAdAvIgCAAIgCgBIgBgBIAAgBIAAgyQAAgIgCgFQgBgGgCgDQgDgEgEgCQgEgCgFAAQgFAAgHAFQgGAFgIAJIAAA9IAAABIgBABIgCABIgDAAIgCAAIgCgBIgBgBIAAgBIAAhWIAAgBIABgBIABAAIADgBIADABIACAAIAAABIABABIAAAMQAHgIAIgEQAHgEAFAAQAJAAAGADQAGADADAFQAEAFACAHQABAGAAAKIAAAzIAAABIgBABIgCABIgDAAg");
	this.shape_215.setTransform(179.7,509.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#F4FFFF").s().p("AgPAuQgGgCgDgEQgEgDgDgFQgCgFABgFQAAgIACgFQAEgGAFgDQAGgCAIgCQAHgBAIAAIAOAAIAAgIIgBgKQgBgEgDgDQgDgDgDgCQgFgBgGAAQgEAAgEABIgIADIgHAEIgDABIgBAAIAAgBIgBgBIgBgCIABgEIACgCIAEgDIAHgDIAJgCIAHgBQAJAAAHACQAFACAFAEQAEAEABAGQACAGAAAIIAAA6IgBABIgCABIgDAAIgCAAIgCgBIgBgBIAAgKQgFAGgHAEQgIADgGAAQgGAAgGgBgAgFADQgEACgEACIgFAGQgCADAAAFQAAAHAFAFQAFAEAIAAQAFAAAHgDQAFgEAHgHIAAgVIgQAAIgLABg");
	this.shape_216.setTransform(169.5,509.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#F4FFFF").s().p("AgTAFIgCgBIgBgEIABgCIACgBIAnAAIABAAIABABIABABIAAABIgBAEIgCABg");
	this.shape_217.setTransform(162,508.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#F4FFFF").s().p("AggA/QgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAhwQAAgEACgBQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAbAAQAIAAAIADQAGACAFAEQAEAEADAGQABAGAAAHIAAAJIgDAHIgGAHQgDADgEACQAFABAEABQAFACADAEQAEAEACAGQACAFAAAGQAAAGgBAFQgCAFgDADIgFAHIgIAGIgKADIgKABgAgaA0IAaAAQAFAAAFgBQAEgCAFgDQADgDACgEQACgFAAgGQAAgGgCgFQgCgEgDgEQgFgDgFgCQgGgBgHAAIgWAAgAgagGIAVAAQAFAAAFgCQAEgBADgEQADgDACgEQABgEAAgFQAAgFgBgEQgCgEgDgDQgDgDgFgBQgEgCgGAAIgUAAg");
	this.shape_218.setTransform(154.1,507.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#F4FFFF").s().p("AA8A/IgDAAIgCgBIgBgBIgBgBIAAhwIgxBxIgBABIgBAAIgCABIAAAAIgCAAIgBgBIgCAAIAAgBIgwhxIAABwIAAABIgBABIgCABIgDAAIgDAAIgCgBIAAgBIgBgBIAAhzQABgEABgCQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIAGAAIAFAAIADADIACACIACADIApBiIAAAAIAqhiIADgDIACgDIADgCIADAAIAHAAIACAAIABABIACADIABADIAABzIgBABIgBABIgCABIgCAAg");
	this.shape_219.setTransform(139.8,507.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#F4FFFF").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_220.setTransform(294.9,439);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#F4FFFF").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_221.setTransform(294.9,473.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#F4FFFF").s().p("AgTA8QgIgEgFgIQgFgIgCgMQgCgMAAgQQAAgMACgMQACgMAFgJQAFgJAJgEQAIgFALAAQALAAAIAEQAIAEAFAIQAFAIACANQACAMAAAOQAAAOgCAMQgCALgFAJQgGAJgIAFQgIAEgLAAQgLAAgIgEgAgOgxQgGAFgDAHQgEAIgBAKIgBATQAAANACALQABAKAEAHQAEAHAFADQAGADAHAAQAFAAAFgCQAFgCADgEQAEgDACgFIAEgLIABgNIABgOIgBgPIgCgOIgEgLQgCgEgEgDQgDgDgFgCQgEgBgFAAQgIAAgGAEg");
	this.shape_222.setTransform(294.7,507);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#F4FFFF").s().p("AgLAeQgEgCgDgEQgEgEgBgGQgCgGABgIQgBgGACgGQABgGAEgEQADgEAFgDQAFgCAFAAQAHAAAFACQAFADADAEQADAFABAGQACAGAAAFQAAAHgCAGQgCAGgDAEQgEAFgEACQgFACgGAAQgFAAgGgCgAgGgVQgCACgDADIgCAHIgBAJIABALIADAHIAFAEIAFABQAFAAACgBIAFgFIACgIIABgJIgBgIIgDgIQgCgDgCgCQgDgBgEAAQgDAAgDABg");
	this.shape_223.setTransform(311.7,503.7);

	this.down = new lib.up();
	this.down.setTransform(1144.7,10473.9,1,1,0,0,0,120.1,-10207.5);

	this.up = new lib.down();
	this.up.setTransform(1144.7,10473.9,1,1,0,0,0,120.1,-10207.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189}]}).to({state:[{t:this.down}]},1).to({state:[{t:this.up}]},1).wait(1));

	// Lines default
	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").ss(4.3).p("EglHARFIAApKQAAhyBBg5QBGg+CTAAMBA7AAAQBgAAA1gKQA+gMAjgfQBDg9AAjFIAAw0A/VRFQABgbAAiTQAAhuA7hAQBEhMCNAAMAw6AAA");
	this.shape_224.setTransform(1294.2,713.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AtwOpIAAgVIAAgVIWSAAQBeAAAzgKQA4gLAfgbQA8g6ABi7IAA4CIAqAAIAAYCQAADUhLBBQgmAihFAOQg2AKhjAAg");
	this.shape_225.setTransform(1521.8,689.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_225},{t:this.shape_224}]}).to({state:[]},1).wait(2));

	// Crane default
	this.instance_3 = new lib.cylinder_1();
	this.instance_3.setTransform(1531.7,605.3,1,1,0,0,0,5,12.6);

	this.instance_4 = new lib.king_1();
	this.instance_4.setTransform(1661.7,533.2,1,1,0,0,0,214.5,275.5);

	this.instance_5 = new lib.winch_1();
	this.instance_5.setTransform(1494.7,555.1,1,1,0,0,0,8.5,8);

	this.instance_6 = new lib.boom_1();
	this.instance_6.setTransform(1504.6,560.8,1,1,0,0,0,12.4,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[]},1).wait(2));

	// Crane background
	this.instance_7 = new lib.bg_1();
	this.instance_7.setTransform(1681.5,489.5,1,1,0,0,0,206.5,223.5);
	this.instance_7.alpha = 0.328;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3));

	// Dots
	this.upflow = new lib.flow_backwards();
	this.upflow.setTransform(902.5,499.1,1,1,0,0,0,-122.1,-20182.3);

	this.downflow = new lib.flow();
	this.downflow.setTransform(902.5,499.1,1,1,0,0,0,-122.1,-20182.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.upflow}]},1).to({state:[{t:this.downflow}]},1).wait(1));

	// Joystick
	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AhcBdQgngnAAg2QAAg2AngmQAngnA1AAQA2AAAoAnQAmAmAAA2QAAA2gmAnQgoAng2AAQg1AAgngng");
	this.shape_226.setTransform(502.2,256.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").ss(11.3).p("AAAFoIAArP");
	this.shape_227.setTransform(501.7,292.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(4.3).p("ABGBnIiLAAIAAjNICLAAg");
	this.shape_228.setTransform(500.4,416.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").ss(4.3).p("AFoGBIrPAAIAAsBILPAAg");
	this.shape_229.setTransform(499.8,367.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(4.3).p("Al6mAIAUAAIEbAAICHAAIEsAAIAAMBIrOAAIAAsB");
	this.shape_230.setTransform(499.8,367.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AlnGBIAAsBIEcAAIAAAxICHAAIAAgxIErAAIAAMBg");
	this.shape_231.setTransform(499.8,367.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AlnGBIAArrIEcgBIAAAcICHAAIAAgcIAGAAIAGAGIAAgGIAcAAIgNgVIEQAAIAAMBg");
	this.shape_232.setTransform(499.8,367.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226}]}).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_228}]},1).to({state:[{t:this.shape_232},{t:this.shape_228},{t:this.shape_229}]},1).wait(1));

	// Layer 2
	this.instance_8 = new lib.maxmin();
	this.instance_8.setTransform(501.5,329,1,1,0,0,0,51.5,51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3));

	// Btn
	this.btn_play = new lib.btn_play();
	this.btn_play.setTransform(1742.8,887.3);
	new cjs.ButtonHelper(this.btn_play, 0, 1, 2, false, new lib.btn_play(), 3);

	this.btn_clean = new lib.btn_clean();
	this.btn_clean.setTransform(1465,915.3,1,1,0,0,0,28,28);
	new cjs.ButtonHelper(this.btn_clean, 0, 1, 2, false, new lib.btn_clean(), 3);

	this.btn_lower = new lib.btn_lower();
	this.btn_lower.setTransform(1619.6,99.9,1,1,0,0,0,28.9,28.9);
	new cjs.ButtonHelper(this.btn_lower, 0, 1, 2, false, new lib.btn_lower(), 3);

	this.btn_lift = new lib.lift();
	this.btn_lift.setTransform(1766.1,101.3,1,1,0,0,0,30.3,30.3);
	new cjs.ButtonHelper(this.btn_lift, 0, 1, 2, false, new lib.lift(), 3);

	this.btn_pause = new lib.btn_playpause();
	this.btn_pause.setTransform(1617,913.6,1,1,0,0,0,26.3,26.3);
	new cjs.ButtonHelper(this.btn_pause, 0, 1, 2, false, new lib.btn_playpause(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_pause},{t:this.btn_lift},{t:this.btn_lower},{t:this.btn_clean},{t:this.btn_play}]}).wait(3));

	// Slider_default
	this.instance_9 = new lib.arrows();
	this.instance_9.setTransform(1076.6,860.4,1,1,0,0,0,115.8,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},1).wait(2));

	// Lines
	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#8D8279").ss(4.3).p("AAAh8IAAD5");
	this.shape_233.setTransform(1497.6,529.5,1,1.712);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#8D8279").ss(4.3).p("AAAh8IAAD5");
	this.shape_234.setTransform(1364,509.5,1,10.86,-90);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#D92F27").s().p("AAADEQgBAAgDgDQgCgCABgCIAAhPQgBgCACgCQADgDABAAQACAAACADQADACgBACIAABPQABACgDACQgCADgCAAIAAAAgAAABiQgBAAgDgDQgCgCABgCIAAhQQgBgDACgDQADgCABAAQACAAACACQADADgBADIAABQQABACgDACQgCACgCABIAAAAgAAAAAQgBAAgDgDQgCgCABgCIAAhQQgBgDACgDQADgCABAAQACAAACACQADADgBADIAABQQABACgDACQgCADgCAAIAAAAgAAAhlQgBABgDgDQgCgCABgCIAAhQQgBgDACgDQADgCABAAQACAAACACQADADgBADIAABQQABACgDACQgCACgCAAIAAAAg");
	this.shape_235.setTransform(520.4,690.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#D92F27").s().p("AiICnQgCAAgCgCQgDgCAAgDIAAhQQAAgDADgCQACgCACAAQADAAADACQACACgBADIAABQQABADgCACQgDACgCAAIgBAAgAiIBDQgCAAgCgCQgDgCAAgDIAAhOQAAgDADgCQACgCACAAQADAAADACQACACgBADIAABOQABADgCACQgDACgCAAIgBAAgACJADQgDAAgDgCQgCgBABgCIAAg0QgBgDACgCQADgCADAAQACAAACACQADACgBADIAAA0QABACgDABQgCACgCAAIAAAAgAiIgfQgCAAgCgCQgDgCAAgDIAAhQQAAgDADgCQACgCACAAQADAAADACQACACgBADIAABQQABADgCACQgDACgCAAIgBAAgACJhDQgDAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCADAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAiIiDQgCAAgCgCQgDgCAAgDIAAgVQAAgDADgCQACgCACAAIA8AAQACAAACACQADACAAADQAAADgDACQgCACgCAAIg1AAIAAAOQABADgCACQgDACgCAAIgBAAgAB6iYIhRAAQgCAAgCgCQgDgCAAgDQAAgDADgCQACgCACAAIBRAAQACAAADACQACACAAADQAAADgCACQgDACgCAAIAAAAgAAWiYIhOAAQgDAAgDgCQgCgCAAgDQAAgDACgCQADgCADAAIBOAAQACAAACACQADACAAADQAAADgDACQgCACgCAAIAAAAg");
	this.shape_236.setTransform(498.8,637.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#D92F27").s().p("ABEAGIgmAAQgCABgCgCQgDgDAAgCQAAgBADgCQACgDACABIAmAAQADgBACADQADACgBABQABACgDADQgCABgCAAIgBAAgAALAGIhPAAQgCABgCgCQgDgDAAgCQAAgBADgCQACgDACABIBPAAQACgBADADQACACAAABQAAACgCADQgDABgCAAIAAAAg");
	this.shape_237.setTransform(491.9,655.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#8D8279").ss(4.3).p("AAAh8IAAD5");
	this.shape_238.setTransform(1228.3,488.6,1,1.844);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#8D8279").ss(4.3).p("AAAjgIAAHB");
	this.shape_239.setTransform(1228.3,333.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#1D9EDA").ss(4.3).p("Eg12AHWIAAm5MBrtAAAIAAny");
	this.shape_240.setTransform(747.5,946);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#16AFC4").ss(4.3).p("AlCuUIJvAAIAAc+");
	this.shape_241.setTransform(352.7,917.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#D92F27").ss(4.3).p("Eg6kAAIIoSAAIAAvnIfsAAIAAe/MBmBAAAIAAj/");
	this.shape_242.setTransform(627.9,825.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#D92F27").ss(4.3).p("AzlFtIAArEMAnhAAA");
	this.shape_243.setTransform(357.4,689.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#D92F27").s().p("ACbCQIhQAAQgDAAgCgDQgCgCAAgCQAAgDACgDQACgCADAAIBQAAQADAAACACQACADAAADQAAACgCACQgCACgDABIAAAAgAA3CQIg0AAQgDAAAAgDQgCgCAAgCQAAgDACgDQAAgCADAAIA0AAQADAAACACQACADAAADQAAACgCACQgCACgDABIAAAAgACgCAQgDABgCgCQgCgDAAgDIAAhQQAAgCACgCQACgDADABQADgBACADQACACAAACIAABQQAAADgCADQgCACgDAAIAAgBgACgAdQgDAAgCgCQgCgDAAgDIAAhOQAAgCACgCQACgDADAAQADAAACADQACACAAACIAABOQAAADgCADQgCACgDAAIAAAAgACghFQgDAAgCgCQgCgDAAgDIAAg0IgOAAQgDABgCgDQgCgCAAgDQAAgCACgCQACgDADABIAVAAQADgBACADQACACAAACIAAA7QAAADgCADQgCACgDAAIAAAAgAB3iBIhQAAQgDABgCgDQgCgCAAgDQAAgCACgCQACgDADABIBQAAQADgBACADQACACAAACQAAADgCACQgCACgDAAIAAAAgAATiBIhOAAQgDABgCgDQgCgCAAgDQAAgCACgCQACgDADABIBOAAQADgBACADQACACAAACQAAADgCACQgCACgDAAIAAAAgAhPiBIhQAAQgDABgCgDQgCgCAAgDQAAgCACgCQACgDADABIBQAAQADgBACADQACACAAACQAAADgCACQgCACgDAAIAAAAg");
	this.shape_244.setTransform(1194.8,600.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#D92F27").s().p("EAyBABdIgIAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIABAAIAAhCQAAgDACgCQACgCADAAQADAAACACQACACAAADIAABJQAAADgCACQgCACgDAAIAAAAgEAxlABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAwBABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAudABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAs5ABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEArVABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEApxABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAoNABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAmpABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAlFABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAjhABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAh9ABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAgZABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAe1BdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAdRBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAbtBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAaJBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAYlBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAXBBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAVdBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAT5BdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgASVBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAQxBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAPNBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgANpBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAMFBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAKhBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAI9BdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAHZBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAF1BdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAERBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgACtBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgABJBdIhOAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBOAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAgZBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAh9BdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAjhBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAlFBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAmpBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAoNBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgApxBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgArVBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAs5BdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAudBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAwBBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAxlBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAzJBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgA0tBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgA2RBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgA31BdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgA5ZBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgA69BdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgA8hBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgA+FBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgA/pBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEghNABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgixABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgkVABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgl5ABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgndABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgpBABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgqlABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgsJABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgttABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgvRABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgw1ABdIhLAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBLAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAyBAAAQgDAAgCAAQgCgCAAgDIAAhQQAAgDACgCQACgCADAAQADAAACACQACACAAADIAABQQAAADgCACQgCAAgDAAIAAAAg");
	this.shape_245.setTransform(850.1,646.4);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#D92F27").ss(1.4).p("AAVAAIgpAA");
	this.shape_246.setTransform(1247.9,890.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#D92F27").s().p("ADhAGIhGAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBGAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgACHAGIhGAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBGAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAAtAGIhEAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBEAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAgrAGIhGAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBGAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAiFAGIhGAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBGAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAjfAGIgBAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIABAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAg");
	this.shape_247.setTransform(1273.9,890.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#D92F27").ss(1.4).p("AARgXIAAAoIgoAA");
	this.shape_248.setTransform(1295.3,888.9);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#D92F27").s().p("AAAYCQgBAAgDgCQgCgCABgDIAAg/QgBgDACgCQADgCABAAQACAAACACQADACgBADIAAA/QABADgDACQgCACgCAAIAAAAgAAAWvQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAVLQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAATnQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAASDQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAQfQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAO7QgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAANXQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAALzQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAKPQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAIrQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAHHQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAFjQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAD/QgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAACbQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAA3QgBAAgDgCQgCgCABgDIAAhOQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABOQABADgDACQgCACgCAAIAAAAgAAAgrQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAiPQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAjzQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAlXQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAm7QgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAofQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAqDQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAArnQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAtLQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAuvQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAwTQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAx3QgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAzbQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAA0/QgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAA2jQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAg");
	this.shape_249.setTransform(1297.1,731.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#D92F27").ss(1.4).p("AgXgQIAoAAIAAAo");
	this.shape_250.setTransform(1295.3,573.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#D92F27").s().p("AItAGIgPAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIAPAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAIKAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAGmAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAFCAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgADeAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAB6AGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAAWAGIhOAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBOAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAhMAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAiwAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAkUAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAl4AGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAncAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAg");
	this.shape_251.setTransform(1241.7,571.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#D92F27").ss(1.4).p("AgQAYIAAgoIAoAA");
	this.shape_252.setTransform(1180.5,573.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#D92F27").s().p("AAABsQgBABgDgDQgCgCAAgCIAAhQQAAgDACgDQADgCABABQACgBACACQADADAAADIAABQQAAACgDACQgCACgCAAIAAAAgAAAAIQgBABgDgDQgCgCAAgDIAAhNQAAgDACgDQADgCABABQACgBACACQADADAAADIAABNQAAADgDACQgCACgCAAIAAAAgAAAhaQgBABgDgCQgCgDAAgDIAAgDQAAgDACgDQADgCABAAQACAAACACQADADAAADIAAADQAAADgDADQgCABgCAAIAAAAg");
	this.shape_253.setTransform(1178.7,587.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#D92F27").ss(1.4).p("AAAAVIAAgp");
	this.shape_254.setTransform(1178.7,602.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#D92F27").s().p("AAADgQgBAAgCgDQgDgCAAgCIAAgjQAAgCADgCQACgDABAAQACAAADADQACACAAACIAAAjQAAACgCACQgDACgCABIAAAAgAAACqQgBAAgCgDQgDgCAAgCIAAhRQAAgCADgDQACgCABAAQACAAADACQACADAAACIAABRQAAACgCACQgDACgCABIAAAAgAAABGQgBAAgCgDQgDgCAAgCIAAhOQAAgDADgDQACgCABAAQACAAADACQACADAAADIAABOQAAACgCACQgDADgCAAIAAAAgAAAgdQgBABgCgDQgDgCAAgCIAAhQQAAgDADgDQACgCABAAQACAAADACQACADAAADIAABQQAAACgCACQgDACgCAAIAAAAgAAAiBQgBABgCgDQgDgCAAgCIAAhQQAAgDADgDQACgCABABQACgBADACQACADAAADIAABQQAAACgCACQgDACgCAAIAAAAg");
	this.shape_255.setTransform(1186.2,659.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#D92F27").s().p("ACaCQIhQAAQgDAAgCgDQgCgCAAgCQAAgDACgDQACgCADAAIBQAAQADAAACACQACADAAADQAAACgCACQgCACgDABIAAAAgAA2CQIgzAAQgDAAAAgDQgCgCAAgCQAAgDACgDQAAgCADAAIAzAAQADAAACACQACADAAADQAAACgCACQgCACgDABIAAAAgACgCAQgDABgCgCQgCgDAAgDIAAhQQAAgCACgCQACgDADABQADgBACADQACACAAACIAABQQAAADgCADQgCACgDAAIAAgBgACgAdQgDAAgCgCQgCgDAAgDIAAhOQAAgCACgCQACgDADAAQADAAACADQACACAAACIAABOQAAADgCADQgCACgDAAIAAAAgACghFQgDAAgCgCQgCgDAAgDIAAg0IgOAAQgDABgCgDQgCgCAAgDQAAgCACgCQACgDADABIAVAAQADgBACADQACACAAACIAAA7QAAADgCADQgCACgDAAIAAAAgAB3iBIhQAAQgDABgCgDQgCgCAAgDQAAgCACgCQACgDADABIBQAAQADgBACADQACACAAACQAAADgCACQgCACgDAAIAAAAgAATiBIhOAAQgDABgCgDQgCgCAAgDQAAgCACgCQACgDADABIBOAAQADgBACADQACACAAACQAAADgCACQgCACgDAAIAAAAgAhPiBIhQAAQgDABgCgDQgCgCAAgDQAAgCACgCQACgDADABIBQAAQADgBACADQACACAAACQAAADgCACQgCACgDAAIAAAAg");
	this.shape_256.setTransform(722.9,600.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#D92F27").s().p("AAABdQgBAAgDgCQgCgCABgDIAAhJQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABJQABADgDACQgCACgCAAIAAAAgAAAAAQgBAAgDAAQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCAAgCAAIAAAAg");
	this.shape_257.setTransform(698.4,646.4);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#D92F27").ss(1.4).p("AgUAAIApAA");
	this.shape_258.setTransform(898.3,891.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#D92F27").s().p("AGFAIIhQgBQgCAAgCgCQgDgCAAgDQAAgBADgCQACgCACAAIBQABQADAAADACQACACAAABQAAADgCACQgDACgCAAIgBAAgAEhAHIhQAAQgCAAgCgCQgDgCAAgDQAAgBADgCQACgCACAAIBQAAQADAAADACQACACAAABQAAADgCACQgDACgCAAIgBAAgAC+AHIhRgBQgCAAgDgCQgCgCAAgCQAAgCACgCQADgCACAAIBRABQACAAACACQADACAAABQAAADgDACQgCACgCAAIAAAAgABaAGIhQgBQgDAAgDgCQgCgCAAgBQAAgDACgCQADgCADAAIBQABQACAAACACQADACAAACQAAACgDACQgCACgCAAIAAAAgAgIAFIhQAAQgDAAgDgCQgCgCAAgBQAAgDACgCQADgCADAAIBQAAQACAAACACQADACgBADQABABgDACQgCACgCAAIAAAAgAhsAFIhQAAQgDAAgDgCQgCgCABgBQgBgDACgCQADgCADAAIBQAAQACAAACACQADACgBADQABABgDACQgCACgCAAIAAAAgAjRAFIhPAAQgDAAgDgCQgCgCABgBQgBgDACgCQADgCADAAIBPAAQADAAACACQADACgBADQABABgDACQgCACgCAAIgBAAgAk1AFIhQAAQgCAAgCgCQgDgCABgBQgBgDADgCQACgCACAAIBQAAQADAAADACQACACgBADQABABgCACQgDACgCAAIgBAAg");
	this.shape_259.setTransform(854.6,891);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#D92F27").ss(1.4).p("AgQgXIAAAoIAoAA");
	this.shape_260.setTransform(810.3,889.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#D92F27").s().p("AAAYDQgBAAgDgCQgCgCABgDIAAhBQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABBQABADgDACQgCACgCAAIAAAAgAAAWuQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAVKQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAATmQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAASCQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAQeQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAO6QgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAANWQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAALyQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAKOQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAIqQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAHGQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAFiQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAD+QgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAACaQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAA2QgBAAgDgCQgCgCABgDIAAhOQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABOQABADgDACQgCACgCAAIAAAAgAAAgsQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAiQQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAj0QgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAlYQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAm8QgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAogQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAqEQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAroQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAtMQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAuwQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAwUQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAx4QgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAzcQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAA1AQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAA2kQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAg");
	this.shape_261.setTransform(808.5,732);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#D92F27").ss(1.4).p("AgXgQIAoAAIAAAo");
	this.shape_262.setTransform(806.7,573.4);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#D92F27").s().p("AG3AGIhQAAQgCABgCgDQgDgCABgCQgBgBADgDQACgCACABIBQAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAgAFTAGIhQAAQgCABgCgDQgDgCAAgCQAAgBADgDQACgCACABIBQAAQADgBADACQACADAAABQAAACgCACQgDACgCAAIgBAAgADvAGIhQAAQgCABgCgDQgDgCAAgCQAAgBADgDQACgCACABIBQAAQADgBADACQACADAAABQAAACgCACQgDACgCAAIgBAAgACMAGIhRAAQgCABgDgDQgCgCAAgCQAAgBACgDQADgCACABIBRAAQACgBACACQADADAAABQAAACgDACQgCACgCAAIAAAAgAAoAGIhOAAQgDABgDgDQgCgCAAgCQAAgBACgDQADgCADABIBOAAQACgBACACQADADAAABQAAACgDACQgCACgCAAIAAAAgAg6AGIhQAAQgDABgDgDQgCgCABgCQgBgBACgDQADgCADABIBQAAQACgBACACQADADgBABQABACgDACQgCACgCAAIAAAAgAieAGIhQAAQgDABgDgDQgCgCABgCQgBgBACgDQADgCADABIBQAAQACgBACACQADADgBABQABACgDACQgCACgCAAIAAAAgAkDAGIhPAAQgDABgDgDQgCgCABgCQgBgBACgDQADgCADABIBPAAQADgBACACQADADgBABQABACgDACQgCACgCAAIgBAAgAlnAGIhQAAQgCABgCgDQgDgCABgCQgBgBADgDQACgCACABIBQAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAg");
	this.shape_263.setTransform(757.9,571.7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#D92F27").ss(1.4).p("AgQAYIAAgoIAoAA");
	this.shape_264.setTransform(708.6,573.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#D92F27").s().p("AAABsQgBABgCgDQgDgCAAgCIAAhQQAAgDADgDQACgCABABQACgBADACQACADAAADIAABQQAAACgCACQgDACgCAAIAAAAgAAAAIQgBABgCgDQgDgCAAgDIAAhNQAAgDADgDQACgCABABQACgBADACQACADAAADIAABNQAAADgCACQgDACgCAAIAAAAgAAAhaQgBABgCgCQgDgDAAgDIAAgDQAAgDADgDQACgCABAAQACAAADACQACADAAADIAAADQAAADgCADQgDABgCAAIAAAAg");
	this.shape_265.setTransform(706.9,587.5);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#D92F27").ss(1.4).p("AAAAVIAAgp");
	this.shape_266.setTransform(706.9,602.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#1D9EDA").s().p("AAAFrQgBAAgCgDQgDgCAAgCIAAgNQAAgCADgCQACgDABABQACgBADADQACACgBACIAAANQABACgCACQgDADgCAAIAAAAgAAAFKQgBABgCgCQgDgDAAgDIAAhQQAAgCADgCQACgDABABQACgBADADQACACgBACIAABQQABADgCADQgDACgCgBIAAAAgAAADnQgBAAgCgCQgDgDAAgDIAAhQQAAgCADgCQACgDABAAQACAAADADQACACgBACIAABQQABADgCADQgDACgCAAIAAAAgAAACDQgBAAgCgCQgDgDAAgDIAAhQQAAgCADgCQACgDABAAQACAAADADQACACgBACIAABQQABADgCADQgDACgCAAIAAAAgAAAAfQgBAAgCgDQgDgCAAgCIAAhPQAAgCADgDQACgCABAAQACAAADACQACADgBACIAABPQABACgCACQgDACgCABIAAAAgAAAhDQgBAAgCgDQgDgCAAgCIAAhQQAAgDADgDQACgCABAAQACAAADACQACADgBADIAABQQABACgCACQgDADgCAAIAAAAgAAAioQgBABgCgDQgDgCAAgCIAAhQQAAgDADgDQACgCABAAQACAAADACQACADgBADIAABQQABACgCACQgDACgCAAIAAAAgAAAkMQgBABgCgDQgDgCAAgCIAAhQQAAgDADgDQACgCABABQACgBADACQACADgBADIAABQQABACgCACQgDACgCAAIAAAAg");
	this.shape_267.setTransform(714.4,673.4);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#8D8279").ss(4.3).p("AHlIKIuzAAIAAwo");
	this.shape_268.setTransform(1079.3,576.1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#8D8279").ss(4.3).p("AAAipIAAFT");
	this.shape_269.setTransform(1032.9,482.7);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#8D8279").ss(4.3).p("AdPogIAAFnMg6dAAAIAALEIEiAA");
	this.shape_270.setTransform(814.8,576.3);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#8D8279").ss(4.3).p("AAAipIAAFT");
	this.shape_271.setTransform(1001.9,482.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#8D8279").ss(4.3).p("AAAjgIAAHB");
	this.shape_272.setTransform(1015.3,333.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#8D8279").ss(4.3).p("AybmfMAkiAAAIAANU");
	this.shape_273.setTransform(1111,145.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#00A69B").ss(4.3).p("Ag3lZIBaAAIAALI");
	this.shape_274.setTransform(1011.1,150.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#00A69B").ss(4.3).p("AgqF1IAArUIBqAA");
	this.shape_275.setTransform(869.7,151.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#00A69B").ss(4.3).p("AchtYIAAacMg5BAAAIAAow");
	this.shape_276.setTransform(682.9,399.3);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#000000").ss(4.3).p("AEHAAIoNAA");
	this.shape_277.setTransform(739.2,411);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").ss(4.3).p("ABjnwIAAPMIjaAA");
	this.shape_278.setTransform(825.5,363.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233}]}).wait(3));

	// HMI-screen
	this.instance_10 = new lib.hmi2();
	this.instance_10.setTransform(43,319);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(3));

	// Grey background
	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("rgba(206,243,255,0.298)").s().p("A6fdGIAAjTIPCAAIAADTgALRTUIAAjSIUbAAIAADSgAJYBbIAAjPINyAAIAADPgA7bBbIAAjPINxAAIAADPgAFJ5zIAAjSINxAAIAADSgA/r5zIAAjSINyAAIAADSg");
	this.shape_279.setTransform(1240.4,332.5);
	this.shape_279._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_279).wait(1).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1003,600.5,1845,958.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;