(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1920,
	height: 1081,
	fps: 120,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.boom = function() {
	this.spriteSheet = ss["plc_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cylinder = function() {
	this.spriteSheet = ss["plc_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.king = function() {
	this.spriteSheet = ss["plc_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.winch = function() {
	this.spriteSheet = ss["plc_atlas_"];
	this.gotoAndStop(3);
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


(lib.red_up_flipped = function(mode,startPosition,loop) {
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


(lib.king_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.king();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,429,551);


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


(lib.blue_wide_flipped = function(mode,startPosition,loop) {
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


(lib.blue_up_flipped = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},31).to({state:[{t:this.shape_2}]},32).to({state:[{t:this.shape_3}]},32).to({state:[{t:this.shape_4}]},32).to({state:[{t:this.shape_5}]},32).to({state:[{t:this.shape_6}]},32).to({state:[{t:this.shape_7}]},31).to({state:[{t:this.shape_8}]},32).to({state:[{t:this.shape_9}]},32).wait(34));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},31).to({state:[{t:this.shape_2}]},32).to({state:[{t:this.shape_3}]},32).to({state:[{t:this.shape_4}]},32).to({state:[{t:this.shape_5}]},32).to({state:[{t:this.shape_6}]},32).to({state:[{t:this.shape_7}]},31).to({state:[{t:this.shape_8}]},32).to({state:[{t:this.shape_9}]},32).wait(34));

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

	// blue_up
	this.instance = new lib.blue_up();
	this.instance.setTransform(555.5,-19943.4,1,1.337,0,0,0,0,142.5);

	this.instance_1 = new lib.blue_up_flipped();
	this.instance_1.setTransform(555.5,-19943.4,1,1.337,0,0,0,0,142.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleY:1.337,x:555.5}}]}).to({state:[{t:this.instance_1}]},2766).to({state:[{t:this.instance,p:{scaleY:1,x:583.5}}]},2765).to({state:[]},1).wait(5531));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2766).to({_off:false},0).to({_off:true,scaleY:1,x:583.5},2765).wait(5532));

	// blue_wide
	this.instance_2 = new lib.blue_wide();
	this.instance_2.setTransform(469.8,-19922,1,1,0,0,0,88.4,21.4);

	this.instance_3 = new lib.blue_wide_flipped();
	this.instance_3.setTransform(469.8,-19922,1,1,0,0,0,88.4,21.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{x:469.8}}]}).to({state:[{t:this.instance_3}]},2766).to({state:[{t:this.instance_2,p:{x:497.8}}]},2765).to({state:[]},1).wait(5531));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2766).to({_off:false},0).to({_off:true,x:497.8},2765).wait(5532));

	// blue
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D9EDA").ss(4.3).p("A6YDTQABgaAAiTQAAhtA6hAQBFhLCNAAMAw5AAA");
	this.shape.setTransform(238.3,-19879.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#D92F27").ss(4.3).p("A6YDTQABgaAAiTQAAhtA6hAQBFhLCNAAMAw5AAA");
	this.shape_1.setTransform(238.3,-19879.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2766).to({state:[]},2766).wait(5531));

	// red_up
	this.instance_4 = new lib.red_up();
	this.instance_4.setTransform(507.5,-20017.9,1,1,0,0,0,0,30.5);

	this.instance_5 = new lib.red_up_flipped();
	this.instance_5.setTransform(507.5,-20017.9,1,1,0,0,0,0,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},2766).to({state:[]},2766).wait(5531));

	// red
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#D92F27").ss(4.3).p("EglGAKGIAApKQAAhwBBg5QBFg+CTAAMBA7AAAQBhAAA0gKQA/gMAigfQBEg9AAjHIAAig");
	this.shape_2.setTransform(269.9,-19922.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1D9EDA").ss(4.3).p("EglGAKGIAApKQAAhwBBg5QBFg+CTAAMBA7AAAQBhAAA0gKQA/gMAigfQBEg9AAjHIAAig");
	this.shape_3.setTransform(269.9,-19922.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},2766).to({state:[]},2766).wait(5531));

	// cylinder
	this.instance_6 = new lib.cylinder_1();
	this.instance_6.setTransform(507.4,-20076.2,1,1,-47.5,0,0,4.9,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2766).to({regX:5,rotation:0},2765).to({_off:true},1).wait(5531));

	// king
	this.instance_7 = new lib.king_1();
	this.instance_7.setTransform(637.4,-20148.3,1,1,0,0,0,214.5,275.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5531).to({_off:true},1).wait(5531));

	// winch
	this.instance_8 = new lib.winch_1();
	this.instance_8.setTransform(470.4,-20126.3,1,1,0,0,0,8.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5531).to({_off:true},1).wait(5531));

	// boom
	this.instance_9 = new lib.boom_1();
	this.instance_9.setTransform(480.2,-20120.6,1,1,-45,0,0,12.4,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2766).to({rotation:0,x:480.3},2765).to({_off:true},1).wait(5531));

	// cyl fill
	this.instance_10 = new lib.cylinder_fill();
	this.instance_10.setTransform(552,-20135.7,0.825,1,-49.2,0,0,0.1,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2766).to({regX:-0.1,scaleX:0.34,rotation:-4.2,x:571.7,y:-20083.3},2765).to({_off:true},1).wait(5531));

	// Layer 13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1NFnIAArNMAqbAAAIAALNg");
	mask.setTransform(50,-19820.2);

	// Layer 11
	this.instance_11 = new lib.arrows();
	this.instance_11.setTransform(52.1,-19821,1,1,0,0,0,115.8,38.5);

	this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1019).to({x:145.3},1747).to({_off:true},2766).wait(5531));

	// TXT
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgRAXQAKgFAGgIQAEgIAAgHIgBAAIgBAAQgFgBgEgDQgEgEAAgGQAAgHAEgEQAFgEAEAAQAIAAAFAGQAEAHAAALQAAAPgIAMQgJAMgNAGg");
	this.shape_4.setTransform(-685.4,-20160.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQA5QgHgIgBgLQABgLAHgHQAGgIAKAAQAKAAAIAIQAHAHgBALQABALgHAIQgIAHgKAAQgKAAgGgHgAgQgTQgHgHgBgLQABgLAHgIQAGgHAKAAQAKAAAIAHQAHAIgBALQABALgHAHQgIAIgKAAQgKAAgGgIg");
	this.shape_5.setTransform(-803,-20302.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggBOQgQgGgNgMIAYgdQAKAHAKAEQAKAFAHAAQAJAAAEgDQAFgDAAgGQAAgFgGgDQgGgEgIgEIgUgIQgJgDgHgHQgIgEgFgJQgEgJAAgLQAAgOAIgMQAIgLANgHQAOgHAQAAQANAAAPAGQAOAFALALIgVAbQgIgGgIgDQgHgDgJAAQgHAAgEADQgEADAAAFQAAAGAGADIAPAIIAUAHQAPAGAJAJQAIALAAARQAAAOgIALQgHAMgOAHQgPAHgSABQgPAAgRgGg");
	this.shape_6.setTransform(-814,-20304.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUBRIAAh9IgrAAIAAgkIB/AAIAAAkIgrAAIAAB9g");
	this.shape_7.setTransform(-827.6,-20304.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUBRIAAihIApAAIAAChg");
	this.shape_8.setTransform(-838.6,-20304.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAWBRIgjhJIgPgiIgBAAIADAcQADAQAAAQIAAAvIgqAAIAAihIAsAAIAjBJIAPAiIABAAIgDgTIgCgUIgBgVIAAgvIAqAAIAAChg");
	this.shape_9.setTransform(-851,-20304.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgxA+QgRgUAAgpIAAhSIAsAAIAABXQAAAVAFAJQAHAJAKAAQANAAAGgJQAGgJAAgVIAAhXIAqAAIAABSQgBApgPAUQgRAUgiAAQggAAgRgUg");
	this.shape_10.setTransform(-867.8,-20304.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgxA+QgQgUAAgpIAAhSIAqAAIAABXQABAVAFAJQAGAJALAAQAMAAAHgJQAGgJAAgVIAAhXIApAAIAABSQAAApgPAUQgRAUgiAAQggAAgRgUg");
	this.shape_11.setTransform(-889.8,-20304.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag0BRIAAihIBnAAIAAAkIg8AAIAAAaIAzAAIAAAiIgzAAIAAAdIA+AAIAAAkg");
	this.shape_12.setTransform(-905,-20304.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAdBHQgJgOgBgZQABgYAJgMQAKgNASAAQAQAAALANQAKAMAAAYQAAAZgKAOQgLANgQAAQgSAAgKgNgAApADQgGAKAAATQAAAUAGAKQAGAKAKAAQAJAAAGgKQAGgKAAgUQAAgTgGgKQgGgHgJAAQgKAAgGAHgAgzBUIBYioIAOAAIhYCogAhTAEQgKgLAAgZQAAgZAKgNQAKgNARgBQARABAKANQAKANABAZQgBAZgKALQgKAOgRAAQgRAAgKgOgAhHg9QgGAJAAAUQAAAUAGAJQAFAIAKABQAKgBAGgIQAGgJAAgUQAAgUgGgJQgGgJgKAAQgKAAgFAJg");
	this.shape_13.setTransform(-649.8,-20250.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAdBHQgJgNgBgaQABgYAJgMQAKgNASAAQAQAAALANQAKAMAAAYQAAAagKANQgLANgQAAQgSAAgKgNgAApADQgGAKAAATQAAAUAGAKQAGAKAKAAQAJAAAGgKQAGgKAAgUQAAgTgGgKQgGgIgJAAQgKAAgGAIgAgzBUIBYioIAOAAIhYCogAhTAEQgKgLAAgZQAAgZAKgNQAKgNARgBQARABAKANQAKANABAZQgBAZgKALQgKAOgRAAQgRAAgKgOgAhHg9QgGAKAAATQAAATAGAKQAFAJAKgBQAKABAGgJQAGgKAAgTQAAgTgGgKQgGgKgKAAQgKAAgFAKg");
	this.shape_14.setTransform(-649.8,-20210.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAdBHQgJgOgBgZQABgYAJgMQAKgNASAAQAQAAALANQAKAMAAAYQAAAZgKAOQgLAOgQAAQgSAAgKgOgAApADQgGAKAAATQAAAUAGAKQAGAKAKgBQAJABAGgKQAGgKAAgUQAAgTgGgKQgGgHgJgBQgKABgGAHgAgzBVIBYioIAOAAIhYCogAhTAEQgKgLAAgZQAAgZAKgNQAKgNARAAQARAAAKANQAKANABAZQgBAZgKALQgKAOgRAAQgRAAgKgOgAhHg9QgGAJAAAUQAAATAGAKQAFAJAKAAQAKAAAGgJQAGgKAAgTQAAgUgGgJQgGgKgKAAQgKAAgFAKg");
	this.shape_15.setTransform(-649.8,-20169.8);

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
	this.shape_45.graphics.f("#000000").s().p("AgRAXQAKgFAGgIQAEgIAAgHIgBAAIgBAAQgFgBgEgDQgEgEAAgGQAAgHAEgEQAFgEAEAAQAIAAAFAGQAEAHAAALQAAAPgIAMQgJAMgNAGg");
	this.shape_45.setTransform(285.1,-20160.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[]},5532).wait(5531));

	// Layer 19
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_46.setTransform(-674.6,-20250.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_47.setTransform(-687.1,-20250.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_48.setTransform(-699.3,-20250.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgbAHIAAgNIA3AAIAAANg");
	this.shape_49.setTransform(-709.6,-20248.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_50.setTransform(-674.6,-20209.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_51.setTransform(-687.1,-20209.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_52.setTransform(-699.3,-20209.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgbAHIAAgNIA3AAIAAANg");
	this.shape_53.setTransform(-709.6,-20208.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]}).to({state:[]},5532).wait(5531));

	// 1000
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_54.setTransform(-712.4,-20169.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgRBPQACgeAFgXQAFgZAHgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgKARgFAPQgEARgDATQgDATgBAXg");
	this.shape_55.setTransform(-712.4,-20169.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_56.setTransform(-712.3,-20169.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgWBOQgKgEgHgFQgHgEgFgGIAJgNQAIAHAJAFQAJAFAOABQAJAAAIgFQAHgEAFgIQAFgJAAgLQgBgQgIgJQgKgIgOAAQgHAAgGADQgHACgGADIgLgFIAEhNIBOAAIAAASIg7AAIgEAvIAKgEQAGgCAGAAQANAAAMAFQALAFAGALQAHAKAAARQAAARgIAMQgHAMgMAGQgMAHgNAAQgMAAgKgDg");
	this.shape_57.setTransform(-712.7,-20169.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBChkIAYAAIAABhIAVAAIAAAQIgVAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIAAgLIABgKIgBAAIgGALg");
	this.shape_58.setTransform(-712.6,-20169.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgeBLQgNgGgIgJIAKgOQAIAIAJAFQAKAGAOAAQANAAAJgIQAJgIAAgNQAAgJgFgIQgFgHgLgEQgKgEgRAAIAAgNQAQgBAIgDQAKgEAEgHQAEgHAAgIQAAgMgHgHQgHgGgLgBQgKABgIAEQgJAFgHAHIgLgNQAJgJALgFQAMgGANAAQANAAALAFQAKAEAGAJQAGAJABANQgBAPgHAJQgJAKgNAEIAAABQAKACAIAEQAIAFAFAIQAEAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgRAAgNgHg");
	this.shape_59.setTransform(-712.7,-20169.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgyBRIAAgMIAqgqQAOgTAJgMQAIgPAAgNQAAgOgHgIQgIgJgNAAQgKAAgIAGQgJAFgHAIIgMgMQAKgLAMgGQALgHAQAAQAUABAMAMQANANAAAVQAAAPgIAQQgIANgPARIgfAlIANgBIAMgBIAtAAIAAASg");
	this.shape_60.setTransform(-712.5,-20169.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_61.setTransform(-712.2,-20169.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_62.setTransform(-712.4,-20169.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54}]}).to({state:[{t:this.shape_54}]},2766).to({state:[{t:this.shape_55}]},320).to({state:[{t:this.shape_56}]},320).to({state:[{t:this.shape_57}]},320).to({state:[{t:this.shape_58}]},320).to({state:[{t:this.shape_59}]},320).to({state:[{t:this.shape_60}]},320).to({state:[{t:this.shape_61}]},320).to({state:[{t:this.shape_62}]},320).to({state:[]},206).wait(5531));

	// 100
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgWBOQgJgEgIgFQgIgEgFgGIALgNQAHAHAJAFQAJAFAPABQAHAAAIgFQAIgEAFgIQAEgJABgLQAAgQgKgJQgJgIgOAAQgIAAgGADQgGACgHADIgLgFIAGhNIBNAAIAAASIg8AAIgEAvIALgEQAGgCAGAAQANAAAMAFQALAFAGALQAHAKABARQgBARgHAMQgIAMgMAGQgMAHgNAAQgMAAgKgDg");
	this.shape_63.setTransform(-696.2,-20169.4);

	this.instance_12 = new lib._32_rewind();
	this.instance_12.setTransform(-695.8,-20170.5,1,1,0,0,0,8.3,17.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_64.setTransform(-695.9,-20169.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63}]}).to({state:[{t:this.instance_12}]},2766).to({state:[{t:this.shape_64}]},2721).to({state:[]},45).wait(5531));

	// 10
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_65.setTransform(-674.8,-20169.3);

	this.instance_13 = new lib._00010_rewind();
	this.instance_13.setTransform(-674.7,-20170.3,1,1,0,0,0,8.3,17.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_66.setTransform(-674.8,-20169.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65}]}).to({state:[{t:this.instance_13}]},2766).to({state:[{t:this.shape_66}]},2729).to({state:[]},37).wait(5531));

	// Layer 12
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AA/A+IAAhIQAAgRgGgIQgFgIgLAAQgIAAgHAFQgIAEgIAKIAABWIgTAAIAAhIQAAgRgFgIQgGgIgLAAQgHAAgIAFQgHAEgJAKIAABWIgUAAIAAh4IARAAIACASIAAAAQAIgJAKgGQAJgFALgBQAOAAAIAHQAGAGADALQAKgLAKgGQAKgHAKAAQATAAAJAMQAJANAAAXIAABLg");
	this.shape_67.setTransform(394.9,-20167.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAcBYIAAhKQAAgPgGgHQgGgJgLABQgIAAgHAEQgIAFgJAIIAABXIgUAAIAAivIAUAAIAAAwIAAAZQAIgIAKgGQAJgGALAAQATAAAJAMQAJAMAAAVIAABNg");
	this.shape_68.setTransform(377.8,-20169.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgaA4QgNgIgIgOQgIgOAAgUQAAgTAIgOQAIgOANgIQAMgHAOAAQAPAAAMAHQANAIAIAOQAIAOAAATQAAAUgIAOQgIAOgNAIQgMAHgPAAQgOAAgMgHgAgRgnQgIAGgEAKQgEALgBAMQABAVAJAMQAKANAOAAQAPAAAKgNQAJgMABgVQAAgMgFgLQgEgKgIgGQgIgGgKAAQgJAAgIAGg");
	this.shape_69.setTransform(364.1,-20167.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAcBYIgig6IgWAaIAAAgIgVAAIAAivIAVAAIAAB2IAAAAIAyg+IAXAAIgpAvIAuBIg");
	this.shape_70.setTransform(352.5,-20169.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAsBRIgPgxIg6AAIgQAxIgVAAIA4ihIAVAAIA4ChgAAYAPIgIgYIgIgbIgIgcIAAAAIgHAcIgIAbIgIAYIAvAAg");
	this.shape_71.setTransform(136.9,-20169.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AA/A+IAAhIQAAgRgGgIQgFgIgLAAQgIAAgHAFQgIAEgIAKIAABWIgTAAIAAhIQAAgRgFgIQgGgIgLAAQgHAAgIAFQgHAEgJAKIAABWIgUAAIAAh4IARAAIACASIAAAAQAIgJAKgGQAJgFALgBQAOAAAIAHQAGAGADALQAKgLAKgGQAKgHAKAAQATAAAJAMQAJANAAAXIAABLg");
	this.shape_72.setTransform(119.8,-20167.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgLBRIg0ihIAWAAIAaBWIAJAbIAGAbIABAAIAIgbIAHgbIAahWIAWAAIg0Chg");
	this.shape_73.setTransform(351.8,-20346.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgLBRIg0ihIAWAAIAbBWIAHAbIAHAbIABAAIAHgbIAJgbIAahWIAVAAIg0Chg");
	this.shape_74.setTransform(115.8,-20346.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67}]}).to({state:[]},5532).wait(5531));

	// 10000
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_75.setTransform(276.6,-20169.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_76.setTransform(276.8,-20169.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgyBRIAAgMIApgqQAPgTAJgMQAIgPAAgNQAAgOgHgIQgHgJgOAAQgJAAgJAGQgJAFgGAIIgMgMQAJgLAMgGQAMgHAPAAQAUABANAMQAMANAAAVQAAAPgIAQQgIANgPARIgfAlIANgBIALgBIAuAAIAAASg");
	this.shape_77.setTransform(276.5,-20169.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgfBLQgMgGgIgJIALgOQAHAIAJAFQALAGANAAQANAAAJgIQAJgIAAgNQABgJgGgIQgFgHgLgEQgKgEgRAAIAAgNQAQgBAIgDQAKgEAEgHQAEgHAAgIQAAgMgHgHQgHgGgLgBQgKABgJAEQgIAFgHAHIgLgNQAJgJAMgFQALgGANAAQANAAALAFQAKAEAGAJQAGAJAAANQAAAPgIAJQgHAKgOAEIAAABQAKACAIAEQAIAFAFAIQAEAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgSAAgNgHg");
	this.shape_78.setTransform(276.3,-20169.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAXAAIAABhIAVAAIAAAQIgVAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIABgLIAAgKIgBAAIgGALg");
	this.shape_79.setTransform(276.7,-20169.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75}]}).to({state:[{t:this.shape_75}]},2766).to({state:[{t:this.shape_76}]},469).to({state:[{t:this.shape_77}]},577).to({state:[{t:this.shape_78}]},582).to({state:[{t:this.shape_79}]},582).to({state:[]},556).wait(5531));

	// 1000
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgyBRIAAgMIApgqQAPgTAJgMQAIgPAAgNQAAgOgHgIQgHgJgOAAQgJAAgJAGQgJAFgGAIIgMgMQAJgLAMgGQAMgHAPAAQAUABANAMQAMANAAAVQAAAPgIAQQgIANgPARIgfAlIANgBIALgBIAuAAIAAASg");
	this.shape_80.setTransform(295.5,-20169.7);

	this.instance_14 = new lib._582();
	this.instance_14.setTransform(295.7,-20170.5,1,1,0,0,0,8.3,17.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgQBPQABgeAEgXQAGgZAHgTQAKgVAPgWIhNAAIAAgRIBlAAIAAAMQgPASgJARQgIARgFAPQgFARgDATQgCATgBAXg");
	this.shape_81.setTransform(295.9,-20169.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80}]}).to({state:[{t:this.instance_14}]},2766).to({state:[{t:this.shape_81}]},2650).to({state:[]},116).wait(5531));

	// 100
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgWBOQgJgEgIgFQgHgEgGgGIALgNQAHAHAJAFQAKAFAOABQAIAAAHgFQAIgEAFgIQAEgJAAgLQABgQgKgJQgJgIgNAAQgJAAgGADQgGACgHADIgLgFIAGhNIBNAAIAAASIg8AAIgEAvIAMgEQAFgCAGAAQAOAAALAFQALAFAHALQAGAKABARQgBARgHAMQgIAMgMAGQgMAHgNAAQgMAAgKgDg");
	this.shape_82.setTransform(311.8,-20169.4);

	this.instance_15 = new lib._00100();
	this.instance_15.setTransform(312.2,-20170.5,1,1,0,0,0,8.3,17.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgWBOQgKgEgHgFQgHgEgFgGIAJgNQAHAHAKAFQAJAFAOABQAIAAAJgFQAHgEAFgIQAEgJAAgLQAAgQgIgJQgKgIgNAAQgIAAgGADQgHACgGADIgLgFIAEhNIBOAAIAAASIg7AAIgEAvIAKgEQAGgCAGAAQANAAAMAFQALAFAHALQAGAKAAARQAAARgIAMQgHAMgMAGQgNAHgMAAQgMAAgKgDg");
	this.shape_83.setTransform(312.1,-20169.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_82}]}).to({state:[{t:this.instance_15}]},2766).to({state:[{t:this.shape_83}]},2650).to({state:[]},116).wait(5531));

	// 10
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_84.setTransform(328.7,-20169.3);

	this.instance_16 = new lib._00010();
	this.instance_16.setTransform(328.8,-20170.3,1,1,0,0,0,8.3,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84,p:{x:328.7}}]}).to({state:[{t:this.instance_16}]},2766).to({state:[{t:this.shape_84,p:{x:328.9}}]},2650).to({state:[]},116).wait(5531));

	// 10v right
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_85.setTransform(330.1,-20346);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_86.setTransform(330.3,-20346);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgyBRIAAgMIAqgqQAOgTAIgMQAKgPgBgNQAAgOgHgIQgHgJgOAAQgKAAgIAGQgJAFgHAIIgLgMQAJgLAMgGQAMgHAPAAQAUABAMAMQANANABAVQgBAPgIAQQgIANgPARIggAlIAOgBIAMgBIAtAAIAAASg");
	this.shape_87.setTransform(330,-20346.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgeBLQgNgGgIgJIAKgOQAIAIAKAFQAJAGAOAAQANAAAJgIQAJgIAAgNQABgJgFgIQgGgHgKgEQgLgEgSAAIAAgNQARgBAIgDQAKgEAEgHQAEgHAAgIQAAgMgHgHQgHgGgLgBQgKABgIAEQgJAFgHAHIgLgNQAJgJALgFQAMgGANAAQANAAAKAFQALAEAGAJQAGAJAAANQAAAPgHAJQgJAKgMAEIAAABQAJACAIAEQAIAFAEAIQAFAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgRAAgNgHg");
	this.shape_88.setTransform(329.8,-20346);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAXAAIAABhIAVAAIAAAQIgVAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIABgLIAAgKIgBAAIgGALg");
	this.shape_89.setTransform(329.9,-20346);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgWBOQgKgEgHgFQgIgEgEgGIAJgNQAIAHAJAFQAKAFANABQAIAAAJgFQAHgEAFgIQAFgJAAgLQAAgQgKgJQgJgIgNAAQgIAAgGADQgHACgHADIgLgFIAGhNIBNAAIAAASIg8AAIgDAvIAKgEQAHgCAFAAQAOAAALAFQALAFAHALQAGAKABARQgBARgIAMQgHAMgMAGQgNAHgMAAQgMAAgKgDg");
	this.shape_90.setTransform(329.8,-20345.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_91.setTransform(330.2,-20346);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgRBPQACgeAFgXQAEgZAIgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgJARgFAPQgFARgDATQgDATAAAXg");
	this.shape_92.setTransform(330.1,-20346);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_93.setTransform(330.1,-20346);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgfBNQgJgEgGgIIALgMQAFAFAGAEQAHADAIAAQAJAAAKgGQAJgHAGgPQAGgPABgXQgIAHgKAGQgKAFgIAAQgVAAgMgMQgMgKgBgZQABgPAGgMQAGgLALgHQALgGAMAAQAPAAAMAIQAMAJAHARQAIARAAAZQgBAegIAUQgIATgPAJQgNAJgOAAQgNAAgKgFgAgWg3QgIAJAAAQQAAAQAHAJQAIAHAOAAQAGAAAJgDQAIgFAJgMQgCgXgKgMQgIgMgOAAQgLAAgIAKg");
	this.shape_94.setTransform(330,-20346);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85}]}).to({state:[{t:this.shape_85}]},2766).to({state:[{t:this.shape_86,p:{x:330.3}}]},276).to({state:[{t:this.shape_87}]},275).to({state:[{t:this.shape_88}]},273).to({state:[{t:this.shape_89}]},276).to({state:[{t:this.shape_90}]},275).to({state:[{t:this.shape_91}]},275).to({state:[{t:this.shape_92}]},274).to({state:[{t:this.shape_93}]},250).to({state:[{t:this.shape_94}]},275).to({state:[{t:this.shape_86,p:{x:317.9}},{t:this.shape_85}]},276).to({state:[]},41).wait(5531));

	// 10000
	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_95.setTransform(263.1,-20520.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_96.setTransform(263.3,-20520.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgxBRIAAgMIApgqQAOgTAJgMQAIgPABgNQAAgOgIgIQgIgJgNAAQgKAAgIAGQgJAFgHAIIgLgMQAJgLAMgGQALgHAQAAQAUABANAMQAMANABAVQAAAPgJAQQgIANgPARIggAlIAOgBIALgBIAuAAIAAASg");
	this.shape_97.setTransform(263,-20520.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95,p:{y:-20520.3}}]}).to({state:[{t:this.shape_95,p:{y:-20520.6}}]},2766).to({state:[{t:this.shape_96}]},998).to({state:[{t:this.shape_97}]},1000).to({state:[]},768).wait(5531));

	// 1000
	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_98.setTransform(279.6,-20520.3);

	this.instance_17 = new lib._01000();
	this.instance_17.setTransform(279.7,-20521.5,1,1,0,0,0,8.3,17.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgQBPQABgeAEgXQAGgZAHgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgKARgFAPQgFARgCATQgDATAAAXg");
	this.shape_99.setTransform(279.6,-20520.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98}]}).to({state:[{t:this.instance_17}]},2766).to({state:[{t:this.shape_99}]},2698).to({state:[]},68).wait(5531));

	// 100
	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_100.setTransform(296.1,-20520.3);

	this.instance_18 = new lib._00100();
	this.instance_18.setTransform(296.2,-20521.5,1,1,0,0,0,8.3,17.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_101.setTransform(296.2,-20520.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100}]}).to({state:[{t:this.instance_18}]},2766).to({state:[{t:this.shape_101}]},2758).to({state:[]},8).wait(5531));

	// 10
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_102.setTransform(312.7,-20520);

	this.instance_19 = new lib._00010();
	this.instance_19.setTransform(312.8,-20521.3,1,1,0,0,0,8.3,17.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAWAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIABgLIAAgKIgBAAIgGALg");
	this.shape_103.setTransform(312.5,-20520.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_102}]}).to({state:[{t:this.instance_19}]},2766).to({state:[{t:this.shape_103}]},2763).to({state:[]},3).wait(5531));

	// 1
	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_104.setTransform(329.2,-20520);

	this.instance_20 = new lib._00001();
	this.instance_20.setTransform(329.3,-20521.3,1,1,0,0,0,8.3,17.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_105.setTransform(329.2,-20520.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_104}]}).to({state:[{t:this.instance_20}]},2766).to({state:[{t:this.shape_105}]},2765).to({state:[]},1).wait(5531));

	// 10v left
	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_106.setTransform(90.1,-20346);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_107.setTransform(90.3,-20346);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgyBRIAAgMIAqgqQAOgTAIgMQAKgPAAgNQAAgOgIgIQgHgJgOAAQgJAAgJAGQgJAFgGAIIgMgMQAJgLAMgGQAMgHAPAAQAUABANAMQAMANAAAVQABAPgJAQQgIANgPARIgfAlIANgBIALgBIAvAAIAAASg");
	this.shape_108.setTransform(90,-20346.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgfBLQgMgGgIgJIAKgOQAIAIAJAFQALAGANAAQANAAAJgIQAJgIAAgNQAAgJgFgIQgFgHgKgEQgLgEgRAAIAAgNQAQgBAIgDQAKgEAEgHQAEgHABgIQAAgMgIgHQgHgGgLgBQgKABgJAEQgIAFgHAHIgLgNQAJgJAMgFQALgGANAAQANAAAKAFQALAEAGAJQAHAJAAANQgBAPgIAJQgHAKgNAEIAAABQAJACAIAEQAHAFAFAIQAFAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgRAAgOgHg");
	this.shape_109.setTransform(89.8,-20346);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBChkIAXAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIAAgLIABgKIgBAAIgGALg");
	this.shape_110.setTransform(89.9,-20346);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgWBOQgJgEgIgFQgIgEgFgGIALgNQAGAHAKAFQAJAFAPABQAHAAAIgFQAIgEAFgIQAFgJgBgLQAAgQgIgJQgKgIgOAAQgHAAgHADQgGACgGADIgLgFIAEhNIBOAAIAAASIg7AAIgEAvIALgEQAFgCAGAAQANAAAMAFQALAFAGALQAHAKAAARQAAARgHAMQgIAMgMAGQgMAHgNAAQgMAAgKgDg");
	this.shape_111.setTransform(89.8,-20345.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_112.setTransform(90.2,-20346);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgQBPQAAgeAFgXQAGgZAHgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgJARgGAPQgFARgCATQgDATgBAXg");
	this.shape_113.setTransform(90.1,-20346);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_114.setTransform(90.1,-20346);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgfBNQgJgEgHgIIAMgMQAFAFAGAEQAIADAHAAQAJAAAKgGQAJgHAGgPQAGgPAAgXQgHAHgKAGQgKAFgIAAQgVAAgMgMQgMgKgBgZQAAgPAHgMQAGgLALgHQALgGAMAAQAOAAANAIQAMAJAHARQAHARAAAZQABAegJAUQgIATgPAJQgNAJgOAAQgNAAgKgFgAgWg3QgIAJAAAQQAAAQAHAJQAIAHAPAAQAFAAAJgDQAJgFAIgMQgCgXgKgMQgIgMgOAAQgLAAgIAKg");
	this.shape_115.setTransform(90,-20346);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_106}]}).to({state:[{t:this.shape_107,p:{x:90.3}}]},276).to({state:[{t:this.shape_108}]},275).to({state:[{t:this.shape_109}]},273).to({state:[{t:this.shape_110}]},276).to({state:[{t:this.shape_111}]},275).to({state:[{t:this.shape_112}]},275).to({state:[{t:this.shape_113}]},274).to({state:[{t:this.shape_114}]},250).to({state:[{t:this.shape_115}]},275).to({state:[{t:this.shape_107,p:{x:77.9}},{t:this.shape_106}]},276).to({state:[]},2807).wait(5531));

	// 100
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_116.setTransform(60.1,-20169.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDIAPgHIAOAAIAACMIAgAAIAAARg");
	this.shape_117.setTransform(60.3,-20169.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgxBRIAAgMIAogqQAPgTAJgMQAIgPABgNQgBgOgHgIQgIgJgNAAQgJAAgJAGQgJAFgGAIIgMgMQAJgLAMgGQAMgHAPAAQAUABANAMQAMANABAVQAAAPgJAQQgIANgPARIggAlIAOgBIALgBIAvAAIAAASg");
	this.shape_118.setTransform(60,-20169.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgfBLQgMgGgIgJIALgOQAGAIALAFQAJAGAOAAQANAAAJgIQAJgIAAgNQABgJgGgIQgEgHgMgEQgKgEgSAAIAAgNQARgBAIgDQAKgEAFgHQADgHABgIQgBgMgHgHQgHgGgLgBQgKABgJAEQgIAFgHAHIgLgNQAJgJAMgFQALgGANAAQANAAAKAFQALAEAGAJQAHAJgBANQAAAPgIAJQgHAKgNAEIAAABQAJACAIAEQAHAFAFAIQAFAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgSAAgNgHg");
	this.shape_119.setTransform(59.8,-20169.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAWAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIABgLIAAgKIgBAAIgGALg");
	this.shape_120.setTransform(59.9,-20169.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgWBOQgKgEgHgFQgIgEgEgGIAJgNQAHAHAKAFQAKAFANABQAJAAAHgFQAIgEAFgIQAFgJgBgLQABgQgKgJQgJgIgNAAQgJAAgGADQgGACgGADIgMgFIAFhNIBOAAIAAASIg7AAIgEAvIALgEQAGgCAFAAQAOAAALAFQALAFAHALQAGAKABARQgBARgHAMQgIAMgMAGQgNAHgMAAQgMAAgKgDg");
	this.shape_121.setTransform(59.8,-20169.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_122.setTransform(60.2,-20169.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgRBPQABgeAGgXQAEgZAIgTQAKgVAPgWIhNAAIAAgRIBlAAIAAAMQgOASgKARQgIARgFAPQgFARgDATQgCATgBAXg");
	this.shape_123.setTransform(60.1,-20169.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_116}]}).to({state:[{t:this.shape_117}]},363).to({state:[{t:this.shape_118}]},364).to({state:[{t:this.shape_119}]},364).to({state:[{t:this.shape_120}]},364).to({state:[{t:this.shape_121}]},364).to({state:[{t:this.shape_122}]},364).to({state:[{t:this.shape_123}]},364).to({state:[]},2985).wait(5531));

	// 10
	this.instance_21 = new lib._10s();
	this.instance_21.setTransform(75.7,-20170.2,1,1,0,0,0,8.3,17.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_124.setTransform(75.7,-20169.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21}]}).to({state:[{t:this.shape_124}]},2766).to({state:[]},2766).wait(5531));

	// 1
	this.instance_22 = new lib._00001();
	this.instance_22.setTransform(93.3,-20170,1,1,0,0,0,8.3,17.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_125.setTransform(93.1,-20169.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22}]}).to({state:[{t:this.shape_125}]},2766).to({state:[]},2766).wait(5531));

	// 10000
	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_126.setTransform(27.1,-20520.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_127.setTransform(27.3,-20520.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgyBRIAAgMIAqgqQAOgTAIgMQAKgPAAgNQgBgOgHgIQgIgJgNAAQgKAAgIAGQgJAFgGAIIgMgMQAJgLAMgGQALgHAQAAQAUABANAMQAMANAAAVQAAAPgIAQQgIANgPARIggAlIAOgBIALgBIAuAAIAAASg");
	this.shape_128.setTransform(27,-20520.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_126}]}).to({state:[{t:this.shape_127}]},999).to({state:[{t:this.shape_128}]},1000).to({state:[]},3533).wait(5531));

	// 1000
	this.instance_23 = new lib._01000();
	this.instance_23.setTransform(43.7,-20521.2,1,1,0,0,0,8.3,17.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgRBPQABgeAGgXQAEgZAIgTQAKgVAPgWIhNAAIAAgRIBlAAIAAAMQgOASgKARQgJARgEAPQgGARgCATQgCATgCAXg");
	this.shape_129.setTransform(43.6,-20520.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23}]}).to({state:[{t:this.shape_129}]},2699).to({state:[]},2833).wait(5531));

	// 100
	this.instance_24 = new lib._00100();
	this.instance_24.setTransform(60.2,-20521.2,1,1,0,0,0,8.3,17.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_130.setTransform(60.2,-20520.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24}]}).to({state:[{t:this.shape_130}]},2759).to({state:[]},2773).wait(5531));

	// 10
	this.instance_25 = new lib._00010();
	this.instance_25.setTransform(76.8,-20521,1,1,0,0,0,8.3,17.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAWAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIABgLIAAgKIgBAAIgGALg");
	this.shape_131.setTransform(76.5,-20520);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25}]}).to({state:[{t:this.shape_131}]},2764).to({state:[]},2768).wait(5531));

	// 1
	this.instance_26 = new lib._00001();
	this.instance_26.setTransform(93.3,-20521,1,1,0,0,0,8.3,17.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_132.setTransform(93.3,-20520);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26}]}).to({state:[{t:this.shape_132}]},2766).to({state:[]},2766).wait(5531));

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
p.nominalBounds = new cjs.Rectangle(0,-4.2,4.3,204.1);


(lib.flow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.flow_an();
	this.instance.setTransform(-216.1,-19876.6,0.322,1,0,0,0,2.2,104.8);

	this.instance_1 = new lib.flow_an();
	this.instance_1.setTransform(-218.7,-19789.1,1,1,-90,0,0,2.1,104.8);

	this.instance_2 = new lib.flow_an_small();
	this.instance_2.setTransform(-356.2,-20144.1,1,1,0,0,0,2.1,97.8);

	this.instance_3 = new lib.flow_an();
	this.instance_3.setTransform(-329.7,-20123.8,1,1,90,0,0,2.1,104.8);

	this.instance_4 = new lib.flow_an();
	this.instance_4.setTransform(-119.7,-20123.8,1,1,90,0,0,2.1,104.8);

	this.instance_5 = new lib.flow_an_small();
	this.instance_5.setTransform(-420.6,-20067.3,1,1,-90,0,0,2.1,97.8);

	this.instance_6 = new lib.flow_an_small();
	this.instance_6.setTransform(-326.4,-20009.6,1,1,180,0,0,-38.9,148.9);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-856.3,-20695,926.5,1026.8);


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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5531).call(this.frame_5531).wait(6492));

	// blue_up
	this.instance = new lib.blue_up();
	this.instance.setTransform(583.5,-19943.4,1,1,0,0,0,0,142.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2766).to({scaleY:1.34,x:555.5},2766).to({_off:true},960).wait(5531));

	// blue_wide
	this.instance_1 = new lib.blue_wide();
	this.instance_1.setTransform(497.8,-19922,1,1,0,0,0,88.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2766).to({x:469.8},2766).to({_off:true},960).wait(5531));

	// blue
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D9EDA").ss(4.3).p("A6YDTQABgaAAiTQAAhtA6hAQBFhLCNAAMAw5AAA");
	this.shape.setTransform(238.3,-19879.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(5532).to({_off:true},960).wait(5531));

	// red_up
	this.instance_2 = new lib.red_up();
	this.instance_2.setTransform(507.5,-20017.9,1,1,0,0,0,0,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5532).to({_off:true},960).wait(5531));

	// red
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#D92F27").ss(4.3).p("EglGAKGIAApKQAAhwBBg5QBFg+CTAAMBA7AAAQBhAAA0gKQA/gMAigfQBEg9AAjHIAAig");
	this.shape_1.setTransform(269.9,-19922.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(5532).to({_off:true},960).wait(5531));

	// cylinder
	this.instance_3 = new lib.cylinder_1();
	this.instance_3.setTransform(507.4,-20076.2,1,1,0,0,0,5,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2766).to({regX:4.9,rotation:-47.5},2766).to({_off:true},960).wait(5531));

	// king
	this.instance_4 = new lib.king_1();
	this.instance_4.setTransform(637.4,-20148.3,1,1,0,0,0,214.5,275.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5532).to({_off:true},960).wait(5531));

	// winch
	this.instance_5 = new lib.winch_1();
	this.instance_5.setTransform(470.4,-20126.3,1,1,0,0,0,8.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5532).to({_off:true},960).wait(5531));

	// boom
	this.instance_6 = new lib.boom_1();
	this.instance_6.setTransform(480.3,-20120.6,1,1,0,0,0,12.4,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2766).to({rotation:-45,x:480.2},2766).to({_off:true},960).wait(5531));

	// cyl fill
	this.instance_7 = new lib.cylinder_fill();
	this.instance_7.setTransform(571.7,-20083.3,0.337,1,-4.2,0,0,-0.1,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2766).to({regX:0.1,scaleX:0.83,rotation:-49.2,x:552,y:-20135.7},2766).to({_off:true},960).wait(5531));

	// Layer 13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1NFnIAArNMAqbAAAIAALNg");
	mask.setTransform(50,-19820.2);

	// Layer 11
	this.instance_8 = new lib.arrows();
	this.instance_8.setTransform(52.1,-19821,1,1,0,0,0,115.8,38.5);

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(109).to({x:-39.7},2657).to({_off:true},2766).wait(6491));

	// TXT
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRAXQAKgFAGgIQAEgIAAgHIgBAAIgBAAQgFgBgEgDQgEgEAAgGQAAgHAEgEQAFgEAEAAQAIAAAFAGQAEAHAAALQAAAPgIAMQgJAMgNAGg");
	this.shape_2.setTransform(-685.4,-20160.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQA5QgHgIgBgLQABgLAHgHQAGgIAKAAQAKAAAIAIQAHAHgBALQABALgHAIQgIAHgKAAQgKAAgGgHgAgQgTQgHgHgBgLQABgLAHgIQAGgHAKAAQAKAAAIAHQAHAIgBALQABALgHAHQgIAIgKAAQgKAAgGgIg");
	this.shape_3.setTransform(-803,-20302.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AggBOQgQgGgNgMIAYgdQAKAHAKAEQAKAFAHAAQAJAAAEgDQAFgDAAgGQAAgFgGgDQgGgEgIgEIgUgIQgJgDgHgHQgIgEgFgJQgEgJAAgLQAAgOAIgMQAIgLANgHQAOgHAQAAQANAAAPAGQAOAFALALIgVAbQgIgGgIgDQgHgDgJAAQgHAAgEADQgEADAAAFQAAAGAGADIAPAIIAUAHQAPAGAJAJQAIALAAARQAAAOgIALQgHAMgOAHQgPAHgSABQgPAAgRgGg");
	this.shape_4.setTransform(-814,-20304.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUBRIAAh9IgrAAIAAgkIB/AAIAAAkIgrAAIAAB9g");
	this.shape_5.setTransform(-827.6,-20304.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUBRIAAihIApAAIAAChg");
	this.shape_6.setTransform(-838.6,-20304.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAWBRIgjhJIgPgiIgBAAIADAcQADAQAAAQIAAAvIgqAAIAAihIAsAAIAjBJIAPAiIABAAIgDgTIgCgUIgBgVIAAgvIAqAAIAAChg");
	this.shape_7.setTransform(-851,-20304.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgxA+QgRgUAAgpIAAhSIAsAAIAABXQAAAVAFAJQAHAJAKAAQANAAAGgJQAGgJAAgVIAAhXIAqAAIAABSQgBApgPAUQgRAUgiAAQggAAgRgUg");
	this.shape_8.setTransform(-867.8,-20304.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgxA+QgQgUAAgpIAAhSIAqAAIAABXQABAVAFAJQAGAJALAAQAMAAAHgJQAGgJAAgVIAAhXIApAAIAABSQAAApgPAUQgRAUgiAAQggAAgRgUg");
	this.shape_9.setTransform(-889.8,-20304.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag0BRIAAihIBnAAIAAAkIg8AAIAAAaIAzAAIAAAiIgzAAIAAAdIA+AAIAAAkg");
	this.shape_10.setTransform(-905,-20304.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAdBHQgJgOgBgZQABgYAJgMQAKgNASAAQAQAAALANQAKAMAAAYQAAAZgKAOQgLANgQAAQgSAAgKgNgAApADQgGAKAAATQAAAUAGAKQAGAKAKAAQAJAAAGgKQAGgKAAgUQAAgTgGgKQgGgHgJAAQgKAAgGAHgAgzBUIBYioIAOAAIhYCogAhTAEQgKgLAAgZQAAgZAKgNQAKgNARgBQARABAKANQAKANABAZQgBAZgKALQgKAOgRAAQgRAAgKgOgAhHg9QgGAJAAAUQAAAUAGAJQAFAIAKABQAKgBAGgIQAGgJAAgUQAAgUgGgJQgGgJgKAAQgKAAgFAJg");
	this.shape_11.setTransform(-649.8,-20250.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAdBHQgJgNgBgaQABgYAJgMQAKgNASAAQAQAAALANQAKAMAAAYQAAAagKANQgLANgQAAQgSAAgKgNgAApADQgGAKAAATQAAAUAGAKQAGAKAKAAQAJAAAGgKQAGgKAAgUQAAgTgGgKQgGgIgJAAQgKAAgGAIgAgzBUIBYioIAOAAIhYCogAhTAEQgKgLAAgZQAAgZAKgNQAKgNARgBQARABAKANQAKANABAZQgBAZgKALQgKAOgRAAQgRAAgKgOgAhHg9QgGAKAAATQAAATAGAKQAFAJAKgBQAKABAGgJQAGgKAAgTQAAgTgGgKQgGgKgKAAQgKAAgFAKg");
	this.shape_12.setTransform(-649.8,-20210.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAdBHQgJgOgBgZQABgYAJgMQAKgNASAAQAQAAALANQAKAMAAAYQAAAZgKAOQgLAOgQAAQgSAAgKgOgAApADQgGAKAAATQAAAUAGAKQAGAKAKgBQAJABAGgKQAGgKAAgUQAAgTgGgKQgGgHgJgBQgKABgGAHgAgzBVIBYioIAOAAIhYCogAhTAEQgKgLAAgZQAAgZAKgNQAKgNARAAQARAAAKANQAKANABAZQgBAZgKALQgKAOgRAAQgRAAgKgOgAhHg9QgGAJAAAUQAAATAGAKQAFAJAKAAQAKAAAGgJQAGgKAAgTQAAgUgGgJQgGgKgKAAQgKAAgFAKg");
	this.shape_13.setTransform(-649.8,-20169.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAbBYIghg6IgWAaIAAAgIgVAAIAAivIAVAAIAAB2IAAAAIAyg+IAXAAIgpAvIAuBIg");
	this.shape_14.setTransform(-831.4,-20251.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTA4QgNgIgHgOQgIgOAAgUQAAgTAIgOQAIgOAOgIQANgHAOAAQAMAAAIAEQAJAEAGAGIgKAOQgFgFgGgDQgGgDgIAAQgKAAgHAGQgJAGgFAKQgEALgBAMQABAVAKAMQAKANAPAAQAJAAAHgDQAHgEAGgFIAJANQgJAIgKAEQgKAEgLAAQgOAAgNgHg");
	this.shape_15.setTransform(-843.9,-20248.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgJBWIAAh4IATAAIAAB4gAgIg+QgEgEgBgGQABgGAEgEQAEgDAEAAQAGAAAEADQAEAEAAAGQAAAGgEAEQgEADgGAAQgEAAgEgDg");
	this.shape_16.setTransform(-853,-20251.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgLBDQgHgLAAgSIAAhBIgSAAIAAgPIATgCIACgiIAQAAIAAAiIAgAAIAAARIggAAIAABCQgBALAFAGQAEAGAKAAIAHgBIAHgCIAEAPIgLADIgLACQgSgBgIgLg");
	this.shape_17.setTransform(-860.1,-20250.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgXA6QgMgEgJgIIALgNQAIAGAIAEQAJAEAJAAQALAAAGgFQAHgGgBgIQABgGgFgEQgEgEgGgDIgMgGIgQgFQgJgEgFgHQgGgHAAgKQABgJAEgIQAGgIAJgFQAJgEALAAQAMAAAJAEQAKAEAHAGIgKANQgGgFgHgDQgGgDgJAAQgJAAgFAFQgGAFAAAHQAAAGAEAEIAKAGIAMAFIAQAIQAJACAGAHQAFAHABALQgBAKgFAIQgFAIgKAFQgKAFgOAAQgLAAgMgFg");
	this.shape_18.setTransform(-869.8,-20248.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgqBWIgHgCIAEgQIAFABIAEABQALgBAHgHQAGgHAEgLIADgKIgxh3IAVAAIAZBDIAGARIAEAPIABAAIAFgPIAFgRIAWhDIAUAAIguCBQgEAMgFAKQgFAJgIAGQgKAFgLAAIgIAAg");
	this.shape_19.setTransform(-880.8,-20246.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgaA4QgNgIgIgOQgIgOAAgUQAAgTAIgOQAIgOANgIQAMgHAOAAQAPAAAMAHQANAIAIAOQAIAOAAATQAAAUgIAOQgIAOgNAIQgMAHgPAAQgOAAgMgHgAgRgnQgIAGgEAKQgEALgBAMQABAVAJAMQAKANAOAAQAPAAAKgNQAJgMABgVQAAgMgFgLQgEgKgIgGQgIgGgKAAQgJAAgIAGg");
	this.shape_20.setTransform(-893.4,-20248.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgaBMQgLgHgHgNIAPgKQAFAKAHAEQAHAEAJAAQALAAAHgIQAHgIAAgTIAAhvIAVAAIAABxQAAAPgFAMQgFALgKAHQgKAGgPABQgOAAgMgHg");
	this.shape_21.setTransform(-906.8,-20250.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgVA4QgOgIgHgOQgIgOAAgUQAAgSAIgOQAHgPANgHQAMgIAMAAQAYAAAMAPQANAPAAAbIAAAFIAAAEIhRAAQABAUAMALQAKALAQABQAIAAAIgDQAIgCAGgFIAHAOQgIAFgJAEQgKADgNAAQgOAAgNgHgAAhgIQAAgSgIgKQgIgKgOAAQgGAAgIAFQgIAEgEAJQgFAIgCAMIA/AAIAAAAg");
	this.shape_22.setTransform(-762.3,-20208.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgKA8Igsh3IAWAAIAWBDIAGASIAEASIABAAIAFgSIAFgSIAYhDIAUAAIgrB3g");
	this.shape_23.setTransform(-774.3,-20208.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgKBTQgFgHAAgOIAAiXIASAAIAACZQAAAFACACQAAAAABABQAAAAABAAQAAABABAAQABAAAAAAIACAAIADgBIACAQIgFACIgHAAQgJAAgFgHg");
	this.shape_24.setTransform(-782.9,-20210.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgdA7QgIgEgEgIQgFgHAAgLQAAgUASgJQASgLAlgEQAAgIgDgHQgBgGgGgFQgGgEgKAAQgIAAgJAEQgKAEgHAFIgHgOQAIgGAMgFQAMgFANAAQAWAAAKAOQAKANAAAXIAABIIgQAAIgDgOIAAAAQgJAHgKAFQgJAFgKAAQgLAAgIgEgAgEADQgMAFgFAGQgFAFAAAIQAAAKAHAFQAFAFAJAAQAHAAAIgEQAIgFAJgIIAAgfQgUABgLADg");
	this.shape_25.setTransform(-793.2,-20208.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgKA8Igsh3IAVAAIAXBDIAGASIAEASIAAAAIAGgSIAGgSIAWhDIAVAAIgrB3g");
	this.shape_26.setTransform(-804.7,-20208.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgJALQgEgEAAgHQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAHgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_27.setTransform(-818.8,-20203.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgzBXIAAirIARAAIABAPIABAAQAJgHAJgGQAKgEAIgBQAQAAALAIQAKAIAGANQAFAOAAAUQAAAVgHAMQgHAPgMAHQgLAIgPAAQgGAAgJgEQgIgDgIgHIAAAVIAAApgAgOhBQgIAEgJAIIAAA+QAJAHAHADQAIADAGgBQANABAJgNQAKgLAAgWQABgVgIgMQgHgMgRAAQgGAAgIAEg");
	this.shape_28.setTransform(-828.2,-20205.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgaA4QgNgIgIgOQgIgOAAgUQAAgTAIgOQAIgOANgIQAMgHAOAAQAPAAAMAHQANAIAIAOQAIAOAAATQAAAUgIAOQgIAOgNAIQgMAHgPAAQgOAAgMgHgAgRgnQgIAGgEAKQgEALgBAMQABAVAJAMQAKANAOAAQAPAAAKgNQAJgMABgVQAAgMgFgLQgEgKgIgGQgIgGgKAAQgJAAgIAGg");
	this.shape_29.setTransform(-842.3,-20208.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AggA+IAAh4IARAAIACAWIABAAQAGgLAGgHQAKgHAKAAIAHABIAGACIgEASIgFgCIgHAAQgHAAgJAGQgGAHgHAPIAABMg");
	this.shape_30.setTransform(-852.1,-20208.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag0BXIAAirIARAAIADAPIAAAAQAIgHAKgGQAKgEAJgBQAQAAAKAIQALAIAFANQAGAOAAAUQAAAVgHAMQgIAPgMAHQgMAIgOAAQgGAAgIgEQgJgDgIgHIAAAVIAAApgAgOhBQgIAEgJAIIAAA+QAIAHAIADQAHADAHgBQANABAKgNQAJgLABgWQAAgVgIgMQgIgMgQAAQgGAAgIAEg");
	this.shape_31.setTransform(-864.1,-20205.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgbAHIAAgNIA3AAIAAANg");
	this.shape_32.setTransform(-875.3,-20208.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag4BSIAAijIAxAAQAPAAAMAFQANADAHAKQAHAIAAAOQAAANgHAJQgHAKgOAEIAAABQASADAKAIQAKAJAAARQAAAQgIALQgIALgOAFQgOAFgRABgAgjBBIAcAAQAUAAALgIQAMgIAAgRQAAgPgLgHQgMgHgTAAIgdAAgAgjgLIAYAAQATAAAKgHQAJgHAAgOQAAgNgKgGQgKgGgRAAIgZAAg");
	this.shape_33.setTransform(-886,-20210.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAwBSIAAhZIABgPIABgSIABgPIgBAAIgOAkIgfBUIgKAAIgghUIgNgkIgBAAIABAPIACASIAAAPIAABZIgTAAIAAijIAYAAIAgBWIALAiIABAAIALgiIAfhWIAZAAIAACjg");
	this.shape_34.setTransform(-903,-20210.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgWA4QgMgIgIgOQgIgOAAgUQAAgSAIgOQAIgPAMgHQAMgIANAAQAXAAANAPQAMAPAAAbIAAAFIAAAEIhRAAQABAUALALQALALAQABQAIAAAIgDQAHgCAHgFIAHAOQgIAFgKAEQgJADgMAAQgPAAgOgHgAAhgIQAAgSgIgKQgHgKgPAAQgHAAgHAFQgHAEgFAJQgFAIgCAMIA/AAIAAAAg");
	this.shape_35.setTransform(-819.6,-20167.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgKBTQgFgHAAgOIAAiXIASAAIAACZQAAAFACACQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAIACAAIADgBIACAQIgFACIgHAAQgJAAgFgHg");
	this.shape_36.setTransform(-828.6,-20170.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgeBWQgLgEgHgHQgGgHAAgLQAAgIAEgHQAFgHAIgGIAAAAQgEgDgDgFQgDgFAAgHQAAgIAEgEQAEgFAFgEIAAgBQgGgFgFgIQgFgIAAgLQAAgOAHgJQAGgKAKgFQALgGAMAAIAIABIAHACIAqAAIAAAQIgYAAQAEAEADAHQADAGgBAIQABANgGAKQgHAJgJAFQgKAFgLAAIgKgBIgIgDIgFAGQgDACAAAFQAAAFAEAEQAFAEAMAAIAWAAQAVAAALAHQALAHAAAPQgBALgHAKQgIAJgOAGQgNAGgRAAQgPAAgLgEgAgiAsQgCAFgBAFQABAKAJAGQAKAFAQAAQAKAAAIgDQAJgEAFgFQAEgGABgGQAAgJgHgDQgGgDgMAAIgTAAIgIgBIgIgBQgGAFgEAFgAgWhCQgIAHAAAOQAAANAIAIQAHAHALABQAJgBAHgHQAHgIABgNQgBgOgHgHQgHgIgJAAQgLAAgHAIg");
	this.shape_37.setTransform(-838.2,-20165);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAcA+IAAhIQAAgRgGgIQgGgIgLAAQgIAAgHAFQgIAFgJAJIAABWIgUAAIAAh4IARAAIACASIAAAAQAJgJAKgGQAJgFALgBQATAAAJAMQAJANAAAXIAABLg");
	this.shape_38.setTransform(-851.7,-20167.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgdA7QgIgEgEgIQgFgHAAgLQAAgUASgJQASgLAkgEQABgIgCgHQgDgGgFgFQgGgEgKAAQgIAAgJAEQgJAEgIAFIgIgOQAJgGAMgFQAMgFANAAQAWAAAKAOQAKANAAAXIAABIIgRAAIgBgOIgBAAQgJAHgKAFQgJAFgKAAQgKAAgJgEgAgEADQgMAFgFAGQgFAFABAIQgBAKAGAFQAGAFAJAAQAHAAAIgEQAIgFAIgIIAAgfQgUABgKADg");
	this.shape_39.setTransform(-865.2,-20167.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgbAHIAAgNIA3AAIAAANg");
	this.shape_40.setTransform(-875.3,-20167.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("Ag4BRIAAihIAxAAQAPgBAMAFQANADAHAJQAHAJAAAOQAAANgHAJQgHAKgOAEIAAABQASADAKAIQAKAJAAARQAAARgIALQgIAKgOAFQgOAFgRAAgAgjBBIAcAAQAUAAALgIQAMgIAAgRQAAgOgLgIQgMgHgTAAIgdAAgAgjgLIAYAAQATAAAKgHQAJgHAAgOQAAgNgKgGQgKgGgRAAIgZAAg");
	this.shape_41.setTransform(-886,-20169.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAwBRIAAhXIABgRIAAgRIACgPIgCAAIgMAkIggBUIgKAAIgfhUIgNgkIgCAAIACAPIABARIAAARIAABXIgTAAIAAihIAYAAIAgBVIALAiIABAAIALgiIAghVIAYAAIAAChg");
	this.shape_42.setTransform(-903,-20169.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgRAXQAKgFAGgIQAEgIAAgHIgBAAIgBAAQgFgBgEgDQgEgEAAgGQAAgHAEgEQAFgEAEAAQAIAAAFAGQAEAHAAALQAAAPgIAMQgJAMgNAGg");
	this.shape_43.setTransform(285.1,-20160.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[]},5532).wait(6491));

	// Layer 19
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_44.setTransform(-674.6,-20250.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_45.setTransform(-687.1,-20250.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_46.setTransform(-699.3,-20250.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgGA4IAAgxIguAAIAAgNIAuAAIAAgxIANAAIAAAxIAuAAIAAANIguAAIAAAxg");
	this.shape_47.setTransform(-712,-20250.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_48.setTransform(-674.6,-20209.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_49.setTransform(-687.1,-20209.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_50.setTransform(-699.3,-20209.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgGA4IAAgwIguAAIAAgOIAuAAIAAgxIANAAIAAAxIAuAAIAAAOIguAAIAAAwg");
	this.shape_51.setTransform(-712,-20210.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]}).to({state:[]},6492).wait(5531));

	// 1000
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_52.setTransform(-712.4,-20169.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_53.setTransform(-712.2,-20169.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgyBRIAAgMIAqgqQAOgTAJgMQAIgPAAgNQAAgOgHgIQgIgJgNAAQgKAAgIAGQgJAFgHAIIgMgMQAKgLAMgGQALgHAQAAQAUABAMAMQANANAAAVQAAAPgIAQQgIANgPARIgfAlIANgBIAMgBIAtAAIAAASg");
	this.shape_54.setTransform(-712.5,-20169.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgeBLQgNgGgIgJIAKgOQAIAIAJAFQAKAGAOAAQANAAAJgIQAJgIAAgNQAAgJgFgIQgFgHgLgEQgKgEgRAAIAAgNQAQgBAIgDQAKgEAEgHQAEgHAAgIQAAgMgHgHQgHgGgLgBQgKABgIAEQgJAFgHAHIgLgNQAJgJALgFQAMgGANAAQANAAALAFQAKAEAGAJQAGAJABANQgBAPgHAJQgJAKgNAEIAAABQAKACAIAEQAIAFAFAIQAEAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgRAAgNgHg");
	this.shape_55.setTransform(-712.7,-20169.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBChkIAYAAIAABhIAVAAIAAAQIgVAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIAAgLIABgKIgBAAIgGALg");
	this.shape_56.setTransform(-712.6,-20169.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgWBOQgKgEgHgFQgHgEgFgGIAJgNQAIAHAJAFQAJAFAOABQAJAAAIgFQAHgEAFgIQAFgJAAgLQgBgQgIgJQgKgIgOAAQgHAAgGADQgHACgGADIgLgFIAEhNIBOAAIAAASIg7AAIgEAvIAKgEQAGgCAGAAQANAAAMAFQALAFAGALQAHAKAAARQAAARgIAMQgHAMgMAGQgMAHgNAAQgMAAgKgDg");
	this.shape_57.setTransform(-712.7,-20169.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_58.setTransform(-712.3,-20169.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgRBPQACgeAFgXQAFgZAHgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgKARgFAPQgEARgDATQgDATgBAXg");
	this.shape_59.setTransform(-712.4,-20169.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_60.setTransform(-712.4,-20169.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52}]}).to({state:[{t:this.shape_52}]},2766).to({state:[{t:this.shape_53}]},320).to({state:[{t:this.shape_54}]},320).to({state:[{t:this.shape_55}]},320).to({state:[{t:this.shape_56}]},320).to({state:[{t:this.shape_57}]},320).to({state:[{t:this.shape_58}]},320).to({state:[{t:this.shape_59}]},320).to({state:[{t:this.shape_60}]},320).to({state:[]},206).wait(6491));

	// 100
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_61.setTransform(-695.9,-20169.6);

	this.instance_9 = new lib._32();
	this.instance_9.setTransform(-695.8,-20170.5,1,1,0,0,0,8.3,17.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgWBOQgJgEgIgFQgIgEgFgGIALgNQAHAHAJAFQAJAFAPABQAHAAAIgFQAIgEAFgIQAEgJABgLQAAgQgKgJQgJgIgOAAQgIAAgGADQgGACgHADIgLgFIAGhNIBNAAIAAASIg8AAIgEAvIALgEQAGgCAGAAQANAAAMAFQALAFAGALQAHAKABARQgBARgHAMQgIAMgMAGQgMAHgNAAQgMAAgKgDg");
	this.shape_62.setTransform(-696.2,-20169.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61}]}).to({state:[{t:this.instance_9}]},2766).to({state:[{t:this.shape_62}]},2721).to({state:[]},45).wait(6491));

	// 10
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_63.setTransform(-674.8,-20169.3);

	this.instance_10 = new lib._00010();
	this.instance_10.setTransform(-674.7,-20170.3,1,1,0,0,0,8.3,17.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_64.setTransform(-674.8,-20169.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63}]}).to({state:[{t:this.instance_10}]},2766).to({state:[{t:this.shape_64}]},2729).to({state:[]},37).wait(6491));

	// Layer 12
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AA/A+IAAhIQAAgRgGgIQgFgIgLAAQgIAAgHAFQgIAEgIAKIAABWIgTAAIAAhIQAAgRgFgIQgGgIgLAAQgHAAgIAFQgHAEgJAKIAABWIgUAAIAAh4IARAAIACASIAAAAQAIgJAKgGQAJgFALgBQAOAAAIAHQAGAGADALQAKgLAKgGQAKgHAKAAQATAAAJAMQAJANAAAXIAABLg");
	this.shape_65.setTransform(394.9,-20167.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAcBYIAAhKQAAgPgGgHQgGgJgLABQgIAAgHAEQgIAFgJAIIAABXIgUAAIAAivIAUAAIAAAwIAAAZQAIgIAKgGQAJgGALAAQATAAAJAMQAJAMAAAVIAABNg");
	this.shape_66.setTransform(377.8,-20169.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgaA4QgNgIgIgOQgIgOAAgUQAAgTAIgOQAIgOANgIQAMgHAOAAQAPAAAMAHQANAIAIAOQAIAOAAATQAAAUgIAOQgIAOgNAIQgMAHgPAAQgOAAgMgHgAgRgnQgIAGgEAKQgEALgBAMQABAVAJAMQAKANAOAAQAPAAAKgNQAJgMABgVQAAgMgFgLQgEgKgIgGQgIgGgKAAQgJAAgIAGg");
	this.shape_67.setTransform(364.1,-20167.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAcBYIgig6IgWAaIAAAgIgVAAIAAivIAVAAIAAB2IAAAAIAyg+IAXAAIgpAvIAuBIg");
	this.shape_68.setTransform(352.5,-20169.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAsBRIgPgxIg6AAIgQAxIgVAAIA4ihIAVAAIA4ChgAAYAPIgIgYIgIgbIgIgcIAAAAIgHAcIgIAbIgIAYIAvAAg");
	this.shape_69.setTransform(136.9,-20169.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AA/A+IAAhIQAAgRgGgIQgFgIgLAAQgIAAgHAFQgIAEgIAKIAABWIgTAAIAAhIQAAgRgFgIQgGgIgLAAQgHAAgIAFQgHAEgJAKIAABWIgUAAIAAh4IARAAIACASIAAAAQAIgJAKgGQAJgFALgBQAOAAAIAHQAGAGADALQAKgLAKgGQAKgHAKAAQATAAAJAMQAJANAAAXIAABLg");
	this.shape_70.setTransform(119.8,-20167.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgLBRIg0ihIAWAAIAaBWIAJAbIAGAbIABAAIAIgbIAHgbIAahWIAWAAIg0Chg");
	this.shape_71.setTransform(351.8,-20346.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgLBRIg0ihIAWAAIAbBWIAHAbIAHAbIABAAIAHgbIAJgbIAahWIAVAAIg0Chg");
	this.shape_72.setTransform(115.8,-20346.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]}).to({state:[]},5532).wait(6491));

	// 10000
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_73.setTransform(276.6,-20169.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_74.setTransform(276.8,-20169.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgyBRIAAgMIApgqQAPgTAJgMQAIgPAAgNQAAgOgHgIQgHgJgOAAQgJAAgJAGQgJAFgGAIIgMgMQAJgLAMgGQAMgHAPAAQAUABANAMQAMANAAAVQAAAPgIAQQgIANgPARIgfAlIANgBIALgBIAuAAIAAASg");
	this.shape_75.setTransform(276.5,-20169.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgfBLQgMgGgIgJIALgOQAHAIAJAFQALAGANAAQANAAAJgIQAJgIAAgNQABgJgGgIQgFgHgLgEQgKgEgRAAIAAgNQAQgBAIgDQAKgEAEgHQAEgHAAgIQAAgMgHgHQgHgGgLgBQgKABgJAEQgIAFgHAHIgLgNQAJgJAMgFQALgGANAAQANAAALAFQAKAEAGAJQAGAJAAANQAAAPgIAJQgHAKgOAEIAAABQAKACAIAEQAIAFAFAIQAEAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgSAAgNgHg");
	this.shape_76.setTransform(276.3,-20169.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAXAAIAABhIAVAAIAAAQIgVAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIABgLIAAgKIgBAAIgGALg");
	this.shape_77.setTransform(276.7,-20169.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73}]}).to({state:[{t:this.shape_73}]},2766).to({state:[{t:this.shape_74}]},469).to({state:[{t:this.shape_75}]},577).to({state:[{t:this.shape_76}]},582).to({state:[{t:this.shape_77}]},582).to({state:[]},556).wait(6491));

	// 1000
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgyBRIAAgMIApgqQAPgTAJgMQAIgPAAgNQAAgOgHgIQgHgJgOAAQgJAAgJAGQgJAFgGAIIgMgMQAJgLAMgGQAMgHAPAAQAUABANAMQAMANAAAVQAAAPgIAQQgIANgPARIgfAlIANgBIALgBIAuAAIAAASg");
	this.shape_78.setTransform(295.5,-20169.7);

	this.instance_11 = new lib._582();
	this.instance_11.setTransform(295.7,-20170.5,1,1,0,0,0,8.3,17.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgQBPQABgeAEgXQAGgZAHgTQAKgVAPgWIhNAAIAAgRIBlAAIAAAMQgPASgJARQgIARgFAPQgFARgDATQgCATgBAXg");
	this.shape_79.setTransform(295.9,-20169.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_78}]}).to({state:[{t:this.instance_11}]},2766).to({state:[{t:this.shape_79}]},2650).to({state:[]},116).wait(6491));

	// 100
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgWBOQgJgEgIgFQgHgEgGgGIALgNQAHAHAJAFQAKAFAOABQAIAAAHgFQAIgEAFgIQAEgJAAgLQABgQgKgJQgJgIgNAAQgJAAgGADQgGACgHADIgLgFIAGhNIBNAAIAAASIg8AAIgEAvIAMgEQAFgCAGAAQAOAAALAFQALAFAHALQAGAKABARQgBARgHAMQgIAMgMAGQgMAHgNAAQgMAAgKgDg");
	this.shape_80.setTransform(311.8,-20169.4);

	this.instance_12 = new lib._00100();
	this.instance_12.setTransform(312.2,-20170.5,1,1,0,0,0,8.3,17.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgWBOQgKgEgHgFQgHgEgFgGIAJgNQAHAHAKAFQAJAFAOABQAIAAAJgFQAHgEAFgIQAEgJAAgLQAAgQgIgJQgKgIgNAAQgIAAgGADQgHACgGADIgLgFIAEhNIBOAAIAAASIg7AAIgEAvIAKgEQAGgCAGAAQANAAAMAFQALAFAHALQAGAKAAARQAAARgIAMQgHAMgMAGQgNAHgMAAQgMAAgKgDg");
	this.shape_81.setTransform(312.1,-20169.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80}]}).to({state:[{t:this.instance_12}]},2766).to({state:[{t:this.shape_81}]},2650).to({state:[]},116).wait(6491));

	// 10
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_82.setTransform(328.7,-20169.3);

	this.instance_13 = new lib._00010();
	this.instance_13.setTransform(328.8,-20170.3,1,1,0,0,0,8.3,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_82,p:{x:328.7}}]}).to({state:[{t:this.instance_13}]},2766).to({state:[{t:this.shape_82,p:{x:328.9}}]},2650).to({state:[]},116).wait(6491));

	// 10v right
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_83.setTransform(330.1,-20346);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_84.setTransform(330.3,-20346);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgyBRIAAgMIAqgqQAOgTAIgMQAKgPgBgNQAAgOgHgIQgHgJgOAAQgKAAgIAGQgJAFgHAIIgLgMQAJgLAMgGQAMgHAPAAQAUABAMAMQANANABAVQgBAPgIAQQgIANgPARIggAlIAOgBIAMgBIAtAAIAAASg");
	this.shape_85.setTransform(330,-20346.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgeBLQgNgGgIgJIAKgOQAIAIAKAFQAJAGAOAAQANAAAJgIQAJgIAAgNQABgJgFgIQgGgHgKgEQgLgEgSAAIAAgNQARgBAIgDQAKgEAEgHQAEgHAAgIQAAgMgHgHQgHgGgLgBQgKABgIAEQgJAFgHAHIgLgNQAJgJALgFQAMgGANAAQANAAAKAFQALAEAGAJQAGAJAAANQAAAPgHAJQgJAKgMAEIAAABQAJACAIAEQAIAFAEAIQAFAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgRAAgNgHg");
	this.shape_86.setTransform(329.8,-20346);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAXAAIAABhIAVAAIAAAQIgVAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIABgLIAAgKIgBAAIgGALg");
	this.shape_87.setTransform(329.9,-20346);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgWBOQgKgEgHgFQgIgEgEgGIAJgNQAIAHAJAFQAKAFANABQAIAAAJgFQAHgEAFgIQAFgJAAgLQAAgQgKgJQgJgIgNAAQgIAAgGADQgHACgHADIgLgFIAGhNIBNAAIAAASIg8AAIgDAvIAKgEQAHgCAFAAQAOAAALAFQALAFAHALQAGAKABARQgBARgIAMQgHAMgMAGQgNAHgMAAQgMAAgKgDg");
	this.shape_88.setTransform(329.8,-20345.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_89.setTransform(330.2,-20346);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgRBPQACgeAFgXQAEgZAIgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgJARgFAPQgFARgDATQgDATAAAXg");
	this.shape_90.setTransform(330.1,-20346);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_91.setTransform(330.1,-20346);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgfBNQgJgEgGgIIALgMQAFAFAGAEQAHADAIAAQAJAAAKgGQAJgHAGgPQAGgPABgXQgIAHgKAGQgKAFgIAAQgVAAgMgMQgMgKgBgZQABgPAGgMQAGgLALgHQALgGAMAAQAPAAAMAIQAMAJAHARQAIARAAAZQgBAegIAUQgIATgPAJQgNAJgOAAQgNAAgKgFgAgWg3QgIAJAAAQQAAAQAHAJQAIAHAOAAQAGAAAJgDQAIgFAJgMQgCgXgKgMQgIgMgOAAQgLAAgIAKg");
	this.shape_92.setTransform(330,-20346);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83}]}).to({state:[{t:this.shape_83}]},2766).to({state:[{t:this.shape_84,p:{x:330.3}}]},276).to({state:[{t:this.shape_85}]},275).to({state:[{t:this.shape_86}]},273).to({state:[{t:this.shape_87}]},276).to({state:[{t:this.shape_88}]},275).to({state:[{t:this.shape_89}]},275).to({state:[{t:this.shape_90}]},274).to({state:[{t:this.shape_91}]},250).to({state:[{t:this.shape_92}]},275).to({state:[{t:this.shape_84,p:{x:317.9}},{t:this.shape_83}]},276).to({state:[]},41).wait(6491));

	// 10000
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_93.setTransform(263.1,-20520.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_94.setTransform(263.3,-20520.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgxBRIAAgMIApgqQAOgTAJgMQAIgPABgNQAAgOgIgIQgIgJgNAAQgKAAgIAGQgJAFgHAIIgLgMQAJgLAMgGQALgHAQAAQAUABANAMQAMANABAVQAAAPgJAQQgIANgPARIggAlIAOgBIALgBIAuAAIAAASg");
	this.shape_95.setTransform(263,-20520.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93,p:{y:-20520.3}}]}).to({state:[{t:this.shape_93,p:{y:-20520.6}}]},2766).to({state:[{t:this.shape_94}]},998).to({state:[{t:this.shape_95}]},1000).to({state:[]},768).wait(6491));

	// 1000
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_96.setTransform(279.6,-20520.3);

	this.instance_14 = new lib._01000();
	this.instance_14.setTransform(279.7,-20521.5,1,1,0,0,0,8.3,17.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgQBPQABgeAEgXQAGgZAHgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgKARgFAPQgFARgCATQgDATAAAXg");
	this.shape_97.setTransform(279.6,-20520.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_96}]}).to({state:[{t:this.instance_14}]},2766).to({state:[{t:this.shape_97}]},2698).to({state:[]},68).wait(6491));

	// 100
	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_98.setTransform(296.1,-20520.3);

	this.instance_15 = new lib._00100();
	this.instance_15.setTransform(296.2,-20521.5,1,1,0,0,0,8.3,17.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_99.setTransform(296.2,-20520.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98}]}).to({state:[{t:this.instance_15}]},2766).to({state:[{t:this.shape_99}]},2758).to({state:[]},8).wait(6491));

	// 10
	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_100.setTransform(312.7,-20520);

	this.instance_16 = new lib._00010();
	this.instance_16.setTransform(312.8,-20521.3,1,1,0,0,0,8.3,17.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAWAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIABgLIAAgKIgBAAIgGALg");
	this.shape_101.setTransform(312.5,-20520.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100}]}).to({state:[{t:this.instance_16}]},2766).to({state:[{t:this.shape_101}]},2763).to({state:[]},3).wait(6491));

	// 1
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_102.setTransform(329.2,-20520);

	this.instance_17 = new lib._00001();
	this.instance_17.setTransform(329.3,-20521.3,1,1,0,0,0,8.3,17.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_103.setTransform(329.2,-20520.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_102}]}).to({state:[{t:this.instance_17}]},2766).to({state:[{t:this.shape_103}]},2765).to({state:[]},1).wait(6491));

	// 10v left
	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_104.setTransform(90.1,-20346);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_105.setTransform(90.3,-20346);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgyBRIAAgMIAqgqQAOgTAIgMQAKgPAAgNQAAgOgIgIQgHgJgOAAQgJAAgJAGQgJAFgGAIIgMgMQAJgLAMgGQAMgHAPAAQAUABANAMQAMANAAAVQABAPgJAQQgIANgPARIgfAlIANgBIALgBIAvAAIAAASg");
	this.shape_106.setTransform(90,-20346.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgfBLQgMgGgIgJIAKgOQAIAIAJAFQALAGANAAQANAAAJgIQAJgIAAgNQAAgJgFgIQgFgHgKgEQgLgEgRAAIAAgNQAQgBAIgDQAKgEAEgHQAEgHABgIQAAgMgIgHQgHgGgLgBQgKABgJAEQgIAFgHAHIgLgNQAJgJAMgFQALgGANAAQANAAAKAFQALAEAGAJQAHAJAAANQgBAPgIAJQgHAKgNAEIAAABQAJACAIAEQAHAFAFAIQAFAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgRAAgOgHg");
	this.shape_107.setTransform(89.8,-20346);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBChkIAXAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIAAgLIABgKIgBAAIgGALg");
	this.shape_108.setTransform(89.9,-20346);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgWBOQgJgEgIgFQgIgEgFgGIALgNQAGAHAKAFQAJAFAPABQAHAAAIgFQAIgEAFgIQAFgJgBgLQAAgQgIgJQgKgIgOAAQgHAAgHADQgGACgGADIgLgFIAEhNIBOAAIAAASIg7AAIgEAvIALgEQAFgCAGAAQANAAAMAFQALAFAGALQAHAKAAARQAAARgHAMQgIAMgMAGQgMAHgNAAQgMAAgKgDg");
	this.shape_109.setTransform(89.8,-20345.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_110.setTransform(90.2,-20346);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgQBPQAAgeAFgXQAGgZAHgTQAKgVAQgWIhOAAIAAgRIBlAAIAAAMQgPASgIARQgJARgGAPQgFARgCATQgDATgBAXg");
	this.shape_111.setTransform(90.1,-20346);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_112.setTransform(90.1,-20346);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgfBNQgJgEgHgIIAMgMQAFAFAGAEQAIADAHAAQAJAAAKgGQAJgHAGgPQAGgPAAgXQgHAHgKAGQgKAFgIAAQgVAAgMgMQgMgKgBgZQAAgPAHgMQAGgLALgHQALgGAMAAQAOAAANAIQAMAJAHARQAHARAAAZQABAegJAUQgIATgPAJQgNAJgOAAQgNAAgKgFgAgWg3QgIAJAAAQQAAAQAHAJQAIAHAPAAQAFAAAJgDQAJgFAIgMQgCgXgKgMQgIgMgOAAQgLAAgIAKg");
	this.shape_113.setTransform(90,-20346);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_104}]}).to({state:[{t:this.shape_105,p:{x:90.3}}]},276).to({state:[{t:this.shape_106}]},275).to({state:[{t:this.shape_107}]},273).to({state:[{t:this.shape_108}]},276).to({state:[{t:this.shape_109}]},275).to({state:[{t:this.shape_110}]},275).to({state:[{t:this.shape_111}]},274).to({state:[{t:this.shape_112}]},250).to({state:[{t:this.shape_113}]},275).to({state:[{t:this.shape_105,p:{x:77.9}},{t:this.shape_104}]},276).to({state:[]},2807).wait(6491));

	// 100
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_114.setTransform(60.1,-20169.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDIAPgHIAOAAIAACMIAgAAIAAARg");
	this.shape_115.setTransform(60.3,-20169.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgxBRIAAgMIAogqQAPgTAJgMQAIgPABgNQgBgOgHgIQgIgJgNAAQgJAAgJAGQgJAFgGAIIgMgMQAJgLAMgGQAMgHAPAAQAUABANAMQAMANABAVQAAAPgJAQQgIANgPARIggAlIAOgBIALgBIAvAAIAAASg");
	this.shape_116.setTransform(60,-20169.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgfBLQgMgGgIgJIALgOQAGAIALAFQAJAGAOAAQANAAAJgIQAJgIAAgNQABgJgGgIQgEgHgMgEQgKgEgSAAIAAgNQARgBAIgDQAKgEAFgHQADgHABgIQgBgMgHgHQgHgGgLgBQgKABgJAEQgIAFgHAHIgLgNQAJgJAMgFQALgGANAAQANAAAKAFQALAEAGAJQAHAJgBANQAAAPgIAJQgHAKgNAEIAAABQAJACAIAEQAHAFAFAIQAFAJAAALQAAAOgHAKQgHAKgMAGQgMAFgOAAQgSAAgNgHg");
	this.shape_117.setTransform(59.8,-20169.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAWAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIABgLIAAgKIgBAAIgGALg");
	this.shape_118.setTransform(59.9,-20169.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgWBOQgKgEgHgFQgIgEgEgGIAJgNQAHAHAKAFQAKAFANABQAJAAAHgFQAIgEAFgIQAFgJgBgLQABgQgKgJQgJgIgNAAQgJAAgGADQgGACgGADIgMgFIAFhNIBOAAIAAASIg7AAIgEAvIALgEQAGgCAFAAQAOAAALAFQALAFAHALQAGAKABARQgBARgHAMQgIAMgMAGQgNAHgMAAQgMAAgKgDg");
	this.shape_119.setTransform(59.8,-20169.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_120.setTransform(60.2,-20169.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgRBPQABgeAGgXQAEgZAIgTQAKgVAPgWIhNAAIAAgRIBlAAIAAAMQgOASgKARQgIARgFAPQgFARgDATQgCATgBAXg");
	this.shape_121.setTransform(60.1,-20169.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_114}]}).to({state:[{t:this.shape_115}]},363).to({state:[{t:this.shape_116}]},364).to({state:[{t:this.shape_117}]},364).to({state:[{t:this.shape_118}]},364).to({state:[{t:this.shape_119}]},364).to({state:[{t:this.shape_120}]},364).to({state:[{t:this.shape_121}]},364).to({state:[]},2985).wait(6491));

	// 10
	this.instance_18 = new lib._10s();
	this.instance_18.setTransform(75.7,-20170.2,1,1,0,0,0,8.3,17.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_122.setTransform(75.7,-20169.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18}]}).to({state:[{t:this.shape_122}]},2766).to({state:[]},2766).wait(6491));

	// 1
	this.instance_19 = new lib._00001();
	this.instance_19.setTransform(93.3,-20170,1,1,0,0,0,8.3,17.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_123.setTransform(93.1,-20169.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19}]}).to({state:[{t:this.shape_123}]},2766).to({state:[]},2766).wait(6491));

	// 10000
	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_124.setTransform(27.1,-20520.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgrBPIAAgRIAkAAIAAhzIgdAAIAAgOQALgBAIgDQAIgDAHgEIAOAAIAACMIAgAAIAAARg");
	this.shape_125.setTransform(27.3,-20520.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgyBRIAAgMIAqgqQAOgTAIgMQAKgPAAgNQgBgOgHgIQgIgJgNAAQgKAAgIAGQgJAFgGAIIgMgMQAJgLAMgGQALgHAQAAQAUABANAMQAMANAAAVQAAAPgIAQQgIANgPARIggAlIAOgBIALgBIAuAAIAAASg");
	this.shape_126.setTransform(27,-20520.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_124}]}).to({state:[{t:this.shape_125}]},999).to({state:[{t:this.shape_126}]},1000).to({state:[]},3533).wait(6491));

	// 1000
	this.instance_20 = new lib._01000();
	this.instance_20.setTransform(43.7,-20521.2,1,1,0,0,0,8.3,17.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgRBPQABgeAGgXQAEgZAIgTQAKgVAPgWIhNAAIAAgRIBlAAIAAAMQgOASgKARQgJARgEAPQgGARgCATQgCATgCAXg");
	this.shape_127.setTransform(43.6,-20520.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20}]}).to({state:[{t:this.shape_127}]},2699).to({state:[]},2833).wait(6491));

	// 100
	this.instance_21 = new lib._00100();
	this.instance_21.setTransform(60.2,-20521.2,1,1,0,0,0,8.3,17.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgXBKQgMgJgHgRQgIgRAAgZQAAgeAJgUQAIgUAOgIQAOgJAOAAQANAAAJAFQAKAEAGAIIgLAMQgFgFgHgEQgHgDgHAAQgKAAgJAGQgJAHgGAPQgGAPAAAXQAHgIAKgFQAKgFAIAAQAVAAAMAMQAMAKABAZQgBAPgGAMQgGALgLAHQgLAGgNAAQgOAAgMgIgAgNACQgJAFgIALQACAYAJAMQAJAMANAAQAMAAAIgKQAIgJAAgQQAAgQgHgJQgIgHgPAAQgFAAgJADg");
	this.shape_128.setTransform(60.2,-20520.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21}]}).to({state:[{t:this.shape_128}]},2759).to({state:[]},2773).wait(6491));

	// 10
	this.instance_22 = new lib._00010();
	this.instance_22.setTransform(76.8,-20521,1,1,0,0,0,8.3,17.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AAPBPIAAgsIhGAAIAAgNIBDhkIAWAAIAABhIAWAAIAAAQIgWAAIAAAsgAAJgtIgHALIgjA1IAwAAIAAgtIAAgJIABgLIAAgKIgBAAIgGALg");
	this.shape_129.setTransform(76.5,-20520);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22}]}).to({state:[{t:this.shape_129}]},2764).to({state:[]},2768).wait(6491));

	// 1
	this.instance_23 = new lib._00001();
	this.instance_23.setTransform(93.3,-20521,1,1,0,0,0,8.3,17.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgZBMQgMgFgHgKQgGgKAAgNQAAgKAEgIQAEgIAHgGQAHgGAIgCIAAgBQgKgHgGgJQgGgJgBgMQAAgNAGgJQAGgJAKgFQALgFAKAAQAPAAAKAFQAKAGAFAJQAFAKABAMQgBAJgDAHQgDAHgFAGIgKAKIAAAAQAHADAGAFQAGAGAEAHQAEAIAAALQAAAMgGAJQgHAKgLAFQgMAGgPAAQgNAAgMgGgAgaARQgGAJAAAKQAAAJAFAHQAEAHAIAEQAHAEAIAAQAOAAAJgIQAIgHAAgNQAAgKgGgHQgFgGgKgFIgUgJQgJAGgHAJgAgQg7QgIAHAAAMQAAAJAFAGQAGAHAIAEQAGAFAKADQAIgHAEgIQAFgIAAgJQAAgMgHgIQgIgIgNAAQgJAAgHAHg");
	this.shape_130.setTransform(93.3,-20520);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23}]}).to({state:[{t:this.shape_130}]},2766).to({state:[]},2766).wait(6491));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-914.1,-20538.9,1766.1,754.8);


(lib.flow_backwards = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.flow_an();
	this.instance.setTransform(317.9,-19876.6,0.322,1,0,0,0,2.2,104.8);

	this.instance_1 = new lib.flow_an();
	this.instance_1.setTransform(301.2,-19789.1,1,1,90,0,0,2.1,104.8);

	this.instance_2 = new lib.flow_an();
	this.instance_2.setTransform(6.9,-20053.9,1,1,-90,0,0,2.1,104.8);

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

	this.instance_29 = new lib.flow_an();
	this.instance_29.setTransform(-154.5,-19831.4,0.322,1,0,0,0,2.2,104.8);

	this.instance_30 = new lib.flow_an_small();
	this.instance_30.setTransform(262.8,-20025.4,1,1,90,0,0,2.1,97.8);

	this.instance_31 = new lib.flow_an_small();
	this.instance_31.setTransform(226.7,-20125.9,1,1,0,0,0,2.1,97.8);

	this.instance_32 = new lib.flow_an_small();
	this.instance_32.setTransform(147.1,-20136.9,1,1,-90,0,0,2.1,97.8);

	this.instance_33 = new lib.flow_an_small();
	this.instance_33.setTransform(110,-20069.2,1,1,180,0,0,2.1,97.8);

	this.instance_34 = new lib.flow_an_small();
	this.instance_34.setTransform(201.1,-20050.7,1,1,0,0,0,2.1,97.8);

	this.instance_35 = new lib.flow_an();
	this.instance_35.setTransform(225.1,-20111.1,1,1,-90,0,0,2.1,104.8);

	this.instance_36 = new lib.flow_an();
	this.instance_36.setTransform(8.4,-20146.9,1,1,0,0,0,2.1,104.8);

	this.instance_37 = new lib.flow_an();
	this.instance_37.setTransform(317.9,-20006.6,0.322,1,0,0,0,2.2,104.8);

	this.instance_38 = new lib.flow_an();
	this.instance_38.setTransform(-9.1,-20372.4,1,1,0,0,0,2.1,104.8);

	this.instance_39 = new lib.flow_an();
	this.instance_39.setTransform(-9.9,-20462.6,1,1,0,0,0,2.1,104.8);

	this.instance_40 = new lib.flow_an();
	this.instance_40.setTransform(-57.1,-20565.1,1,1,-90,0,0,2.1,104.8);

	this.instance_41 = new lib.flow_an();
	this.instance_41.setTransform(-159.1,-20600,1,1,180,0,0,2.1,104.8);

	this.instance_42 = new lib.flow_an();
	this.instance_42.setTransform(-159.1,-20301.6,1,1,180,0,0,2.1,104.8);

	this.instance_43 = new lib.flow_an();
	this.instance_43.setTransform(-246.7,-20198.4,1,1,-90,0,0,2.1,104.8);

	this.instance_44 = new lib.flow_an();
	this.instance_44.setTransform(-427.2,-20198.4,1,1,-90,0,0,2.1,104.8);

	this.instance_45 = new lib.flow_an();
	this.instance_45.setTransform(-524.1,-20287.5,1,1,0,0,0,2.1,104.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-856.3,-20695,1266.6,1026.8);


// stage content:



(lib.plc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.goback.addEventListener("click", fl_ClickToGoToAndStopAtFrame_10.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_10()
		{
			this.gotoAndStop(1);
		}
		
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.forward.addEventListener("click", fl_ClickToGoToAndStopAtFrame_11.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_11()
		{
			this.gotoAndStop(2);
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
	this.pause._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pause).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Letters
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAvQgGgEgEgHQgDgHAAgIQgBgQANgGQANgJAagDQAAgGgEgCQgDgCgEgBQgGAAgGACIgNAHIgMgWQAKgHALgDQALgDAJgBQAUAAALALQAKAMAAAYIAAA1IgbAAIgDgKIAAAAQgGAGgHADQgFADgIABQgJgBgHgEgAgFAKQgFAEAAAEQAAADACADQADABAEAAQACAAADgBIAFgFIAAgOQgKACgEADg");
	this.shape.setTransform(1148.3,598.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEBCQgGgDgGgGIgBAAIgDAKIgbAAIAAiIIAiAAIAAAhIAAAOQAFgFAGgCQAFgDAGAAQAMAAAIAGQAJAGAFAMQAEAJAAAPQABARgHAMQgFAMgJAGQgKAHgLAAQgGAAgEgEgAgGgDQgEACgDACIAAAkIAHAEIAGABQAEAAAFgGQAEgFAAgOQAAgMgDgFQgEgEgGAAQgDAAgDABg");
	this.shape_1.setTransform(676.1,597);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUA7QgNgHgIgPQgJgPgBgWQABgTAJgPQAIgPAPgIQAOgIAOAAQANAAAKAFQAKAFAHAHIgTAVIgJgHQgFgCgGAAQgIAAgFAEQgFAFgFAIQgDAIAAALQAAARAHAKQAIAKAKAAQAHAAAGgDQAGgDAEgEIATAUQgJAKgLAEQgKAFgMAAQgPAAgPgHg");
	this.shape_2.setTransform(980.8,115.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQBAIAAh/IAgAAIAAB/g");
	this.shape_3.setTransform(971.7,115.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVA7QgOgHgJgPQgIgPgBgWQABgTAIgPQAJgPAPgIQAPgIAPAAQAOAAAKAFQALAFAHAHIgTAVQgFgEgFgDQgFgCgHAAQgJAAgFAEQgHAFgEAIQgEAIAAALQAAARAIAKQAJAKAPAAIAFgBQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBIAAgRIgTAAIAAgaIAxAAIAAA7QgHAHgMAEQgMAFgNAAQgQAAgPgHg");
	this.shape_4.setTransform(962,115.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeA6QgNgIgIgPQgHgPgBgUQABgUAHgPQAIgPANgIQANgHARAAQARAAAOAHQANAIAIAPQAHAPAAAUQAAAUgHAPQgIAPgNAIQgOAIgRAAQgRAAgNgIgAgRgaQgGAJgBARQABAQAGALQAHAKAKAAQALAAAHgKQAHgLAAgQQAAgRgHgJQgHgKgLAAQgKAAgHAKg");
	this.shape_5.setTransform(948.9,115.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgoBAIAAh/IAiAAIAABiIAvAAIAAAdg");
	this.shape_6.setTransform(937.9,115.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeA6QgNgIgIgPQgHgPgBgUQABgUAHgPQAIgPANgIQANgHARAAQASAAANAHQANAIAIAPQAHAPAAAUQAAAUgHAPQgIAPgNAIQgNAIgSAAQgRAAgNgIgAgRgaQgGAJAAARQAAAQAGALQAHAKAKAAQALAAAHgKQAHgLgBgQQABgRgHgJQgHgKgLAAQgKAAgHAKg");
	this.shape_7.setTransform(921.3,115.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAPBAIgUgrIgNAAIAAArIgiAAIAAh/IAwAAQAMAAAMAEQAMAEAHAJQAHAJAAAQQAAANgGAIQgFAJgKAFIAcAygAgSgEIAMAAQAIAAAGgFQAEgEAAgIQAAgIgEgEQgGgDgIAAIgMAAg");
	this.shape_8.setTransform(908.8,115.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgxBAIAAh/IAxAAQAMAAAMAEQAMAEAHAJQAHAKAAAQQAAAPgHAJQgIAJgLAFQgMAFgMAAIgPAAIAAApgAgPgCIAOAAQAIAAAFgFQAFgEAAgJQAAgJgFgDQgGgEgHAAIgOAAg");
	this.shape_9.setTransform(896.3,115.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgiAyIAAhhIAbAAIADARIABAAQADgKAIgEQAHgFAIAAIAHABIAFABIgGAdIgFgBIgGAAQgFAAgGADQgFAEgCAJIAAA1g");
	this.shape_10.setTransform(593.5,687.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdAvQgGgEgEgHQgDgHAAgIQgBgPANgIQANgIAagDQAAgFgEgDQgDgCgEAAQgGAAgGACIgNAGIgMgXQAKgFALgEQALgDAJAAQAUAAALALQAKALAAAYIAAA1IgbAAIgDgJIAAAAQgGAFgHADQgFADgIAAQgJAAgHgEgAgFALQgFADAAAEQAAADACACQADACAEAAQACAAADgCIAFgEIAAgOQgKACgEAEg");
	this.shape_11.setTransform(583.2,687.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgFBCQgFgDgGgGIgBAAIgDAKIgbAAIAAiIIAiAAIAAAhIAAAOQAFgFAGgCQAFgDAGAAQAMAAAIAGQAJAGAFAMQAEAJAAAPQABARgHAMQgFAMgJAGQgKAHgKAAQgHAAgFgEgAgGgDQgEACgDACIAAAkIAHAEIAGABQAEAAAFgGQADgFABgOQAAgMgDgFQgEgEgGAAQgDAAgDABg");
	this.shape_12.setTransform(572.7,685.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgaA7QgMgGgHgIIAPgVQAFAGAHADQAGADAIAAQAGAAAFgEQAFgEAAgJQgBgHgEgFQgFgDgFAAIgGAAIgFACIgHADIgOgJIADg+IBJAAIAAAcIgsAAIgBASIAEgBIAFgBQAMAAAIAEQAKAFAFAIQAGAHAAANQAAAOgHAKQgGAKgLAFQgKAFgMAAQgPAAgLgEg");
	this.shape_13.setTransform(561.1,686.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAEA+IAAgcIg0AAIAAgYIArhHIAoAAIAABFIAOAAIAAAaIgOAAIAAAcgAAAgWIgEALIgMATIAUAAIAAgMIAAgJIAAgLIABgJIgBAAIgEALg");
	this.shape_14.setTransform(550.6,686.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABYC4IAAhtIACgrIAFgsIAFgrIgCAAIgfBVIgyB8IgjAAIgzh8IgdhVIgCAAIAFArIAFAsIACArIAABtIhaAAIAAluIBlAAIA6CYIATA7IACAAIAUg7IA4iYIBlAAIAAFug");
	this.shape_15.setTransform(286.8,975.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgbA8QgLgFgHgIIAPgWQAGAGAHADQAGADAHAAQAGAAAFgDQAFgDAAgGQAAgEgCgEQgDgDgGgCQgFgCgNAAIAAgVQAKAAAGgCQAEgCADgDQACgDAAgFQAAgFgDgDQgDgDgFAAQgGAAgFADQgFACgGAFIgRgUQAJgIAKgEQAKgEAMgBQAMAAAKAFQAKAEAGAIQAFAHAAAMQAAAJgFAHQgFAGgKAFIAAABQALABAGAHQAHAIAAAMQAAAMgHAIQgGAIgLAEQgLAFgMAAQgPgBgLgEg");
	this.shape_16.setTransform(1242.4,940.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgbBWIAhiqIAWAAIghCqg");
	this.shape_17.setTransform(1233.9,941.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAEA+IAAgcIg0AAIAAgYIArhHIAoAAIAABFIAOAAIAAAaIgOAAIAAAcgAAAgWIgEALIgMATIAUAAIAAgMIAAgJIAAgLIABgJIgBAAIgEALg");
	this.shape_18.setTransform(1225.4,940.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAXBAIgGgcIgiAAIgGAcIgjAAIAnh/IAnAAIAnB/gAALAKIgCgJIgFgSIgEgVIAAAAIgEAVIgFASIgCAJIAWAAg");
	this.shape_19.setTransform(1225.8,911.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgxBAIAAh/IAuAAQAMAAALADQALADAGAHQAHAHAAAMQAAAGgCAFQgCAGgFAEQgFAFgHACIAAABQANACAHAGQAHAHAAANQAAANgHAIQgHAJgLAEQgMAEgNAAgAgPAmIAOAAQAIAAAFgEQAFgEAAgHQAAgHgFgDQgFgEgIABIgOAAgAgPgMIALAAQAHAAAEgEQAEgEAAgGQAAgGgEgCQgEgDgHAAIgLAAg");
	this.shape_20.setTransform(922.7,911.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgxBAIAAh/IAuAAQAMAAALADQALADAGAHQAHAHAAAMQAAAGgCAFQgCAGgFAEQgFAFgHACIAAABQANACAHAGQAHAHAAANQAAANgHAIQgHAJgLAEQgMAEgNAAgAgPAmIAOAAQAIAAAFgEQAFgEAAgHQAAgHgFgDQgFgEgIABIgOAAgAgPgMIALAAQAHAAAEgEQAEgEAAgGQAAgGgEgCQgEgDgHAAIgLAAg");
	this.shape_21.setTransform(1106.7,811.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAXBAIgGgcIgiAAIgGAcIgjAAIAnh/IAnAAIAnB/gAALAKIgCgJIgFgSIgEgVIAAAAIgEAVIgFASIgCAJIAWAAg");
	this.shape_22.setTransform(1041.8,811.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgQBAIAAhiIghAAIAAgdIBkAAIAAAdIgjAAIAABig");
	this.shape_23.setTransform(1105.9,911.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgxBAIAAh/IAxAAQAMAAANAEQALAEAHAJQAHAKAAAQQAAAPgHAJQgHAJgMAFQgMAFgMAAIgPAAIAAApgAgPgCIAOAAQAIAAAFgFQAFgEAAgJQAAgJgGgDQgEgEgIAAIgOAAg");
	this.shape_24.setTransform(1042.8,911.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAPBAIgUgrIgNAAIAAArIgiAAIAAh/IAwAAQANAAALAEQAMAEAHAJQAHAJAAAQQAAANgGAIQgFAJgKAFIAcAygAgSgEIAMAAQAIAAAGgFQAEgEAAgIQAAgIgEgEQgGgDgIAAIgMAAg");
	this.shape_25.setTransform(1260.6,411.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgpBAIAAh/IBRAAIAAAdIgvAAIAAAUIAoAAIAAAaIgoAAIAAAXIAxAAIAAAdg");
	this.shape_26.setTransform(1248.5,411.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgPBAIAAh/IAfAAIAAB/g");
	this.shape_27.setTransform(1239.7,411.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAPBAIgUgrIgNAAIAAArIgiAAIAAh/IAwAAQANAAALAEQAMAEAHAJQAHAJAAAQQAAANgGAIQgFAJgKAFIAcAygAgSgEIAMAAQAIAAAFgFQAGgEgBgIQABgIgGgEQgFgDgIAAIgMAAg");
	this.shape_28.setTransform(1230.9,411.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAPBAIgUgrIgNAAIAAArIgiAAIAAh/IAxAAQALAAAMAEQAMAEAHAJQAHAJAAAQQAAANgFAIQgHAJgJAFIAcAygAgSgEIAMAAQAJAAAEgFQAGgEAAgIQAAgIgGgEQgEgDgJAAIgMAAg");
	this.shape_29.setTransform(1218.5,411.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAXBAIgGgcIgiAAIgGAcIgjAAIAnh/IAnAAIAnB/gAALAKIgCgJIgFgSIgEgVIAAAAIgEAVIgFASIgCAJIAWAAg");
	this.shape_30.setTransform(1205.9,411.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgxBAIAAh/IAuAAQAMAAALADQALADAGAHQAHAHAAAMQAAAGgCAFQgCAGgFAEQgFAFgHACIAAABQANACAHAGQAHAHAAANQAAANgHAIQgHAJgLAEQgMAEgNAAgAgPAmIAOAAQAIAAAFgEQAFgEAAgHQAAgHgFgDQgFgEgIABIgOAAgAgPgMIALAAQAHAAAEgEQAEgEAAgGQAAgGgEgCQgEgDgHAAIgLAAg");
	this.shape_31.setTransform(1194.5,411.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAJAkIgOghIgHgOIAAAAIACAMIAAAOIAAAVIgSAAIAAhHIATAAIAPAhIAHAOIABAAIgCgJIgBgHIAAgKIAAgVIASAAIAABHg");
	this.shape_32.setTransform(896.1,288.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgcAkIAAhHIAcAAQAHAAAHACQAHACAEAGQADAFAAAJQAAAJgDAEQgFAGgGACQgHADgHAAIgIAAIAAAXgAgIAAIAIAAQAEAAADgDQACgDAAgFQAAgFgDgCQgCgCgEAAIgIAAg");
	this.shape_33.setTransform(889,288.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgcAkIAAhHIAcAAQAHAAAHACQAHACADAGQAEAFAAAJQAAAJgEAEQgEAGgGACQgHADgHAAIgIAAIAAAXgAgIAAIAIAAQAEAAADgDQACgDAAgFQAAgFgCgCQgDgCgEAAIgIAAg");
	this.shape_34.setTransform(867.8,288.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgcAkIAAhHIAWAAQAJAAAIADQAJAEAEAIQAFAIAAAMQAAAMgEAIQgFAJgIADQgJAEgIAAgAgJAVIABAAQAGAAACgCQAEgCADgFQACgEAAgIQAAgHgCgFQgDgEgEgCQgCgCgGAAIgBAAg");
	this.shape_35.setTransform(860.6,288.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgeA6QgNgIgIgPQgHgPgBgUQABgUAHgPQAIgPANgIQAOgHAQAAQARAAAOAHQANAIAIAPQAHAPABAUQgBAUgHAPQgIAPgNAIQgOAIgRAAQgQAAgOgIgAgRgaQgGAJgBARQABAQAGALQAHAKAKAAQALAAAHgKQAHgLAAgQQAAgRgHgJQgHgKgLAAQgKAAgHAKg");
	this.shape_36.setTransform(1021.4,230.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAXBAIgGgcIgiAAIgGAcIgjAAIAnh/IAnAAIAnB/gAALAKIgCgJIgFgSIgEgVIAAAAIgEAVIgFASIgCAJIAWAAg");
	this.shape_37.setTransform(1009,230.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgPBAIAAh/IAgAAIAAB/g");
	this.shape_38.setTransform(1232.8,227.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAXBAIgGgcIgiAAIgGAcIgjAAIAnh/IAnAAIAnB/gAALAKIgCgJIgFgSIgEgVIAAAAIgEAVIgFASIgCAJIAWAAg");
	this.shape_39.setTransform(1223.9,227.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgIAkIAAhHIARAAIAABHg");
	this.shape_40.setTransform(843.9,288.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgcAkIAAhHIAcAAQAHAAAHACQAGACAEAGQAFAFAAAJQAAAJgFAEQgEAGgHACQgGADgHAAIgIAAIAAAXgAgIAAIAIAAQAEAAADgDQADgDAAgFQAAgFgEgCQgDgCgDAAIgIAAg");
	this.shape_41.setTransform(838.9,288.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AARAkIAAgVIABgJIABgHIABgJIgBAAIgGAQIgKAYIgFAAIgKgYIgGgQIgBAAIABAJIABAHIABAJIAAAVIgSAAIAAhHIAUAAIAMAeIACAKIAAAAIAEgKIALgeIAUAAIAABHg");
	this.shape_42.setTransform(830.8,288.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgxBAIAAh/IAxAAQAMAAAMAEQAMAEAHAJQAHAKAAAQQAAAPgHAJQgIAJgLAFQgMAFgMAAIgPAAIAAApgAgPgCIAOAAQAIAAAFgFQAFgEAAgJQAAgJgFgDQgGgEgHAAIgOAAg");
	this.shape_43.setTransform(796.1,411.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgUA7QgOgHgHgPQgJgPAAgWQAAgTAJgPQAJgPANgIQAOgIAQAAQAMAAAKAFQAKAFAHAHIgTAVIgJgHQgFgCgGAAQgIAAgFAEQgGAFgEAIQgDAIAAALQAAARAHAKQAIAKALAAQAGAAAGgDQAGgDAEgEIASAUQgIAKgLAEQgKAFgMAAQgPAAgPgHg");
	this.shape_44.setTransform(784.1,411.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAXBAIgGgcIgiAAIgGAcIgjAAIAnh/IAnAAIAnB/gAALAKIgCgJIgFgSIgEgVIAAAAIgEAVIgFASIgCAJIAWAAg");
	this.shape_45.setTransform(1032.9,411.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAeBAIAAgmIABgPIACgOIACgPIgBAAIgLAcIgRArIgLAAIgSgrIgKgcIgBAAIACAPIACAOIAAAPIAAAmIgfAAIAAh/IAjAAIAUA2IAGATIAAAAIAIgTIATg2IAjAAIAAB/g");
	this.shape_46.setTransform(1019.4,411.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgyBAIAAh/IAmAAQARAAAPAGQAOAHAJAOQAIAOAAAWQAAAWgIAOQgIAOgOAHQgPAHgRAAgAgRAkIADAAQAIABAGgEQAIgDAEgIQAFgIgBgOQABgOgFgIQgEgIgIgDQgGgDgIAAIgDAAg");
	this.shape_47.setTransform(1005.7,411.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgmAxQgNgQgBghIAAhAIAiAAIAABFQABAQAEAIQAFAGAIAAQAKAAAFgGQAFgIgBgQIAAhFIAiAAIAABAQgBAhgMAQQgNAQgbAAQgZAAgNgQg");
	this.shape_48.setTransform(874.9,230.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgxBAIAAh/IAxAAQAMAAAMAEQAMAEAHAJQAHAKAAAQQAAAPgHAJQgIAJgLAFQgMAFgMAAIgPAAIAAApgAgPgCIAOAAQAIAAAFgFQAFgEAAgJQAAgJgFgDQgGgEgHAAIgOAAg");
	this.shape_49.setTransform(862.5,230.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgUA7QgOgHgHgPQgJgPAAgWQAAgTAJgPQAIgPAOgIQAOgIAQAAQAMAAAKAFQAKAFAHAHIgTAVIgJgHQgFgCgGAAQgIAAgFAEQgFAFgFAIQgDAIAAALQgBARAIAKQAHAKAMAAQAGAAAGgDQAFgDAFgEIASAUQgIAKgLAEQgKAFgMAAQgPAAgPgHg");
	this.shape_50.setTransform(850.5,230.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgUA7QgOgHgHgPQgJgPAAgWQAAgTAJgPQAIgPAOgIQAOgIAQAAQAMAAAKAFQAKAFAHAHIgTAVIgJgHQgFgCgGAAQgIAAgFAEQgFAFgEAIQgEAIgBALQAAARAIAKQAHAKAMAAQAGAAAGgDQAFgDAFgEIASAUQgIAKgKAEQgLAFgMAAQgPAAgPgHg");
	this.shape_51.setTransform(651.9,364.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgxBAIAAh/IAxAAQAMAAAMAEQAMAEAHAJQAHAKAAAQQAAAPgHAJQgIAJgLAFQgLAFgNAAIgPAAIAAApgAgPgCIAOAAQAIAAAFgFQAFgEAAgJQAAgJgFgDQgGgEgHAAIgOAAg");
	this.shape_52.setTransform(640.1,364.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AARBAIgbg6IgMgbIAAAAIACAXQABAMAAANIAAAlIggAAIAAh/IAjAAIAbA5IAMAbIAAAAIgBgPIgCgPIAAgRIAAglIAgAAIAAB/g");
	this.shape_53.setTransform(197.7,311.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgpBAIAAh/IBRAAIAAAdIgvAAIAAAUIAoAAIAAAaIgoAAIAAAXIAxAAIAAAdg");
	this.shape_54.setTransform(185.8,311.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgpBAIAAh/IBRAAIAAAdIgvAAIAAAUIAoAAIAAAaIgoAAIAAAXIAxAAIAAAdg");
	this.shape_55.setTransform(174.8,311.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAPBAIgUgrIgNAAIAAArIgiAAIAAh/IAwAAQAMAAAMAEQAMAEAHAJQAHAJAAAQQAAANgGAIQgFAJgKAFIAcAygAgSgEIAMAAQAJAAAEgFQAGgEgBgIQABgIgGgEQgEgDgJAAIgMAAg");
	this.shape_56.setTransform(163.4,311.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgUA7QgOgHgHgPQgJgPAAgWQAAgTAJgPQAIgPAOgIQAOgIAQAAQAMAAAKAFQAKAFAHAHIgTAVIgJgHQgFgCgGAAQgIAAgFAEQgFAFgEAIQgEAIgBALQAAARAIAKQAHAKAMAAQAGAAAGgDQAFgDAFgEIASAUQgIAKgLAEQgKAFgMAAQgPAAgPgHg");
	this.shape_57.setTransform(151.1,311.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgYA+QgNgFgLgJIATgYQAHAGAIADQAIAEAGAAQAHAAAEgDQADgCAAgEQAAgFgEgCIgMgGIgQgGQgHgDgFgFQgGgDgDgHQgEgHgBgJQAAgLAHgJQAGgJALgGQALgFAMAAQALAAALAEQALAEAJAJIgRAVQgGgEgHgDQgGgCgGAAQgFAAgDACQgEACAAAFQAAAEAFADIAMAGIAPAGQAMAEAHAHQAGAJABANQAAALgGAJQgGAKgLAFQgLAGgPAAQgMAAgMgEg");
	this.shape_58.setTransform(139.5,311.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgXALIAAgVIAvAAIAAAVg");
	this.shape_59.setTransform(130.5,313);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgPBAIAAh/IAgAAIAAB/g");
	this.shape_60.setTransform(124,311.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAeBAIAAgmIABgPIACgOIACgPIgBAAIgLAcIgRArIgLAAIgSgrIgKgcIgBAAIACAPIACAOIAAAPIAAAmIgfAAIAAh/IAjAAIAUA2IAGATIAAAAIAIgTIATg2IAjAAIAAB/g");
	this.shape_61.setTransform(113.2,311.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AASBAIAAgzIgkAAIAAAzIgiAAIAAh/IAiAAIAAAwIAkAAIAAgwIAjAAIAAB/g");
	this.shape_62.setTransform(98.8,311.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(3));

	// Boxes
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("Ag0g1IBpAtIhfA+g");
	this.shape_63.setTransform(522.5,655.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(4.3).p("AhhAAIDDAA");
	this.shape_64.setTransform(508.7,654.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgfgeIA/APIgmAug");
	this.shape_65.setTransform(526.3,680.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(2.1).p("ABHBHIiNiN");
	this.shape_66.setTransform(534.1,688.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(1.4).p("ABOhKIAACMIgyiMIgWCMIgZiMIgjCMIgXhF");
	this.shape_67.setTransform(531,685.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(4.3).p("AkHhtIAADGIIOAAIAAjG");
	this.shape_68.setTransform(520,716.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(4.3).p("ACbChIk1AAIAAlBIE1AAg");
	this.shape_69.setTransform(514.4,655.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgdAfQgNgNgBgSQABgRANgMQAMgOARAAQASAAANAOQANAMgBARQABASgNANQgNANgSgBQgRABgMgNg");
	this.shape_70.setTransform(485,655.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(4.3).p("AYtQdMgxZAAAMAAAgg5MAxZAAAg");
	this.shape_71.setTransform(250.2,445.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("ApQARIAdghIRmAAIAeAhg");
	this.shape_72.setTransform(643,414.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AonASIAbgjIQWAAIAeAjg");
	this.shape_73.setTransform(643.1,409.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(2.1).p("AskAAIZJAA");
	this.shape_74.setTransform(644.2,421.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(2.8).p("AtHAAIaPAA");
	this.shape_75.setTransform(644.2,425);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(2.1).p("AppiEIjeDjIAAAmIaPAAIAAgmIjXjjg");
	this.shape_76.setTransform(644.2,415.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AtGCFIAAgmIDdjjITZAAIDXDjIAAAmg");
	this.shape_77.setTransform(644.2,415.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(2.1).p("AIyE+IxjAAIAAp6IRjAAg");
	this.shape_78.setTransform(644.8,363.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(4.3).p("AJtF/IzZAAIAAr9ITZAAg");
	this.shape_79.setTransform(644.5,363.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(4.3).p("AaRR8Mg0hAAAMAAAgj3MA0hAAAg");
	this.shape_80.setTransform(251.1,445.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(1.4).p("AhNBLIAAiMIAyCMIAWiMIAYCMIAjiMIAYBF");
	this.shape_81.setTransform(928.7,872.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(1.4).p("ABOBKIgCiMIgwCMIgYiLIgWCMIgliLIgWBF");
	this.shape_82.setTransform(1220.4,872.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(4.3).p("AkHhtIAADFIIPAAIAAjF");
	this.shape_83.setTransform(392.8,1004);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(4.3).p("AkHhtIAADGIIOAAIAAjG");
	this.shape_84.setTransform(714,716.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").p("AnslyINyLeIAAh5IhOgZICTggIiRgpICfgdIicgnICWgjIiYgsICYgfIiSgnICBgm");
	this.shape_85.setTransform(303.7,838.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(4.3).p("AAAEQIAAof");
	this.shape_86.setTransform(292.9,885.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(4.3).p("AAAhSIAACl");
	this.shape_87.setTransform(292.9,927.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(4.3).p("AkGhtIAADFIINAAIAAjF");
	this.shape_88.setTransform(1185.8,689);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(1.4).p("ABOhJIAACLIgyiLIgWCLIgZiLIgjCLIgXhF");
	this.shape_89.setTransform(1203,624.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(1.4).p("ABOhKIAACMIgyiMIgWCMIgYiMIgjCMIgYhF");
	this.shape_90.setTransform(731.1,624.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").p("Am6BJQEKiODqgCQCsgCDVBR");
	this.shape_91.setTransform(279.2,890.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AhcAWIAmhSICTB5g");
	this.shape_92.setTransform(331.1,893.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgfAgQgNgOAAgSQAAgRANgOQAOgNARAAQASAAAOANQANANAAASQAAASgNAOQgOANgSAAQgSAAgNgNg");
	this.shape_93.setTransform(342.7,874.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AhAAAICBhZIAACzg");
	this.shape_94.setTransform(260.9,826.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AhdhRIC7BdQgVAVghAxg");
	this.shape_95.setTransform(248.7,797.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(4.3).p("AAAETIAAol");
	this.shape_96.setTransform(280.7,885.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(4.3).p("AipAAIFTAA");
	this.shape_97.setTransform(286.4,913);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(4.3).p("AiQAAIEhAA");
	this.shape_98.setTransform(286.9,919.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(4.3).p("AAAhSIAACl");
	this.shape_99.setTransform(280.7,927.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(4.3).p("AF/AAQAACehwBxQhwBwifAAQidAAhxhwQhwhxAAieQAAieBwhwQBxhwCdAAQCfAABwBwQBwBwAACeg");
	this.shape_100.setTransform(287.1,974.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(4.3).p("AFRAAQAACLhjBjQhjBjiLAAQiKAAhjhjQhjhjAAiLQAAiKBjhjQBjhjCKAAQCLAABjBjQBjBjAACKg");
	this.shape_101.setTransform(288,824.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(4.3).p("ACxBRIlMAAIAAihIFMAA");
	this.shape_102.setTransform(918.8,890.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AhAhPIAsAAIBVBPIhRBQIgwABg");
	this.shape_103.setTransform(909.7,890.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AALBKIhNhJIBQhOIA2AAIAACbg");
	this.shape_104.setTransform(1239,890.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(4.3).p("AivBQIFKAAIAAifIlKAA");
	this.shape_105.setTransform(1230.2,890.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(4.3).p("AVkF6MgrHAAAIAArzMArHAAAg");
	this.shape_106.setTransform(1074.6,861.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(4.3).p("AAAgrIAABX");
	this.shape_107.setTransform(1186.2,634.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAAMANQANANABARQgBASgNANQgMANgSAAQgRAAgNgNg");
	this.shape_108.setTransform(1178.7,586.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(4.3).p("AgqAAIBWAA");
	this.shape_109.setTransform(1186.2,629.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(4.3).p("AggBjIBBjF");
	this.shape_110.setTransform(1175.5,621.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("Agyg4IBlAjIhTBOg");
	this.shape_111.setTransform(1172.5,632.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("Agyg4IBlA1IhXA9g");
	this.shape_112.setTransform(1136,615.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgyAWIBThOIASBxg");
	this.shape_113.setTransform(1177.3,611.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(4.3).p("Ag4BbIBxi1");
	this.shape_114.setTransform(1145.1,628.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(4.3).p("ABEB4IiHjv");
	this.shape_115.setTransform(1142.8,629.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(4.3).p("ACbChIk1AAIAAlBIE1AAg");
	this.shape_116.setTransform(1178.9,621.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(4.3).p("ACuBbIlbAAIAAi1IFbAAg");
	this.shape_117.setTransform(1145.9,628.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(4.3).p("AAAgrIAABX");
	this.shape_118.setTransform(714.4,632.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgeAfQgNgNABgSQgBgRANgMQANgOARAAQASAAAMAOQAOAMAAARQAAASgOANQgMANgSgBQgRABgNgNg");
	this.shape_119.setTransform(698,655.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNg");
	this.shape_120.setTransform(706.8,586.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(4.3).p("AgrAAIBXAA");
	this.shape_121.setTransform(714.3,629.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(4.3).p("AggBjIBBjF");
	this.shape_122.setTransform(703.6,621.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("Agyg4IBlAjIhTBOg");
	this.shape_123.setTransform(700.6,632.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("Agyg4IBlA1IhXA9g");
	this.shape_124.setTransform(664.1,615.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgyAWIBThOIASBxg");
	this.shape_125.setTransform(705.4,611.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(4.3).p("Ag4BbIBxi1");
	this.shape_126.setTransform(673.2,628.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(4.3).p("ABEB4IiHjv");
	this.shape_127.setTransform(670.9,629.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(4.3).p("ACcChIk3AAIAAlBIE3AAg");
	this.shape_128.setTransform(707,621.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(4.3).p("ACtBbIlZAAIAAi1IFZAAg");
	this.shape_129.setTransform(674,628.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(4.3).p("ADwCqInfAAIAAlTIHfAAg");
	this.shape_130.setTransform(789.4,411);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(4.3).p("Ao7AAIR3AA");
	this.shape_131.setTransform(1227,430);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(4.3).p("Ao7AAIR3AA");
	this.shape_132.setTransform(1227,393.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(4.3).p("AI8IiIx3AAIAAxDIR3AAg");
	this.shape_133.setTransform(1227,411);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(4.3).p("AliAAILFAA");
	this.shape_134.setTransform(1017.8,430);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(4.3).p("AliAAILFAA");
	this.shape_135.setTransform(1017.8,393.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(4.3).p("AA8BtIh3AAIAAjZIB3AAg");
	this.shape_136.setTransform(1032.9,510.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(4.3).p("AA8BtIh3AAIAAjZIB3AAg");
	this.shape_137.setTransform(1001.9,510.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(4.3).p("AFjIiIrFAAIAAxDILFAAg");
	this.shape_138.setTransform(1017.8,411);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(4.3).p("AAApjIAATG");
	this.shape_139.setTransform(1242.3,250.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(4.3).p("AAApjIAATG");
	this.shape_140.setTransform(1212.3,250.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(4.3).p("AAApjIAATG");
	this.shape_141.setTransform(1035.3,250.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(4.3).p("AAApjIAATG");
	this.shape_142.setTransform(994.3,250.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(4.3).p("AH7JjIvaAAICpioIiYiYICViVIiOiNICQiOIiaiZICYiYIililIPcAAg");
	this.shape_143.setTransform(1220,250.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(4.3).p("AAAjhIAAHD");
	this.shape_144.setTransform(878.6,288.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(4.3).p("AAAjhIAAHD");
	this.shape_145.setTransform(849.9,288.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(4.3).p("AmkAAINJAA");
	this.shape_146.setTransform(864.1,266);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(4.3).p("AAApjIAATG");
	this.shape_147.setTransform(906.3,250.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(4.3).p("A41JjMAu6AAAICoioIiYiYICWiVIiOiNICPiOIiZiZICYiYIililMgu7AAAg");
	this.shape_148.setTransform(980.9,250.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("Am1FxQhVgbgyhAQg6hLAAhwQgBiqCKhEQBggvBlANIAPACIAHgNQA/h6BjguQBUgnBhAVQBYATBIA5QBBAzAQA3IAEAOIAPACQA9ADAyAyQArAsAKAwIADAMIALAEQBEAUAiA9QAeA5gKA+QgMA+gwAfQg6AjhYgWIgJgCIgHAEQhFArg6AJQhEAKg8ghIgMgGIgKAHQhDAshLABQhEABhAgfIgNgGIgLAKQgmAjhKAKQgZADgZAAQg3AAg0gRg");
	this.shape_149.setTransform(941.5,107.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AnDGaQhiggg5hKIAAAAQhEhVABiAQAAjFChhPQBlgxBpAKQBGh/BqgwQBhgtBvAZQBhAUBQA/QBFA3AWA7QBDAIA5A5IgBAAQAwAxAOA0QBLAdAnBFIABAAQAmBGgOBMIAAABQgPBRhAAoQhEArhmgXQhJArg+AKQhMALhEghQhIAshSACQhHABhEgeQgtAkhPALQgcAEgbAAQg9AAg8gTgAntiTQiLBEABCqQAABwA6BLQAyBABVAbQBNAZBQgLQBKgKAmgjIALgKIANAGQBAAfBEgBQBMgBBCgsIALgHIALAGQA9AhBDgKQA7gJBEgrIAIgEIAJACQBYAWA6gjQAwgfALg+QALg+gfg5Qgig9hDgUIgMgEIgCgMQgKgwgsgsQgygyg8gDIgPgCIgFgOQgPg3hCgzQhIg5hXgTQhhgVhUAnQhkAug/B6IgHANIgOgCQgWgCgWAAQhOAAhLAkg");
	this.shape_150.setTransform(941.5,107.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]}).wait(3));

	// overlay
	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AGNVlIAAxBIL4AAIAARBgAy1icIAAzIMAlrAAAIAATIg");
	this.shape_151.setTransform(942.6,327);

	this.timeline.addTween(cjs.Tween.get(this.shape_151).wait(3));

	// Layer 2
	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgRAXQAKgFAGgHQAEgJAAgHIgBAAIgBAAQgFAAgEgEQgEgEAAgHQAAgHAEgDQAFgEAEAAQAIAAAFAGQAEAHAAALQAAAOgIAMQgJAMgNAHg");
	this.shape_152.setTransform(339.1,520.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgQA5QgHgIAAgLQAAgLAHgHQAGgIAKAAQAKAAAIAIQAGAHAAALQAAALgGAIQgIAHgKAAQgKAAgGgHgAgQgTQgHgHAAgLQAAgLAHgIQAGgHAKAAQAKAAAIAHQAGAIAAALQAAALgGAHQgIAIgKAAQgKAAgGgIg");
	this.shape_153.setTransform(221.6,378.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AggBOQgQgGgNgMIAZgdQAIAHALAEQAKAFAHAAQAJAAAEgDQAFgDAAgGQAAgFgGgDQgGgEgIgEIgUgIQgJgDgIgHQgHgEgFgJQgEgJAAgLQAAgOAIgMQAIgLANgHQANgHAQAAQAOAAAPAGQAOAFALALIgVAbQgIgGgIgDQgIgDgJAAQgFAAgFADQgFADAAAFQAAAGAHADIAPAIIAUAHQAPAGAJAJQAIALAAARQAAAOgHALQgIAMgOAHQgPAHgSABQgPAAgRgGg");
	this.shape_154.setTransform(210.5,376.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgUBRIAAh9IgrAAIAAgkIB/AAIAAAkIgrAAIAAB9g");
	this.shape_155.setTransform(196.9,376.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgUBRIAAihIApAAIAAChg");
	this.shape_156.setTransform(185.9,376.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AAWBRIgihJIgQgiIgBAAIADAcQACAQABAQIAAAvIgqAAIAAihIAtAAIAiBJIAPAiIABAAIgDgTIgCgUIgBgVIAAgvIAqAAIAAChg");
	this.shape_157.setTransform(173.6,376.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgxA+QgRgUAAgpIAAhSIArAAIAABXQAAAVAHAJQAFAJALAAQANAAAGgJQAGgJAAgVIAAhXIApAAIAABSQABApgRAUQgQAUgiAAQggAAgRgUg");
	this.shape_158.setTransform(156.8,376.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgxA+QgRgUAAgpIAAhSIAsAAIAABXQgBAVAHAJQAFAJALAAQANAAAGgJQAGgJAAgVIAAhXIApAAIAABSQABApgRAUQgQAUgiAAQggAAgRgUg");
	this.shape_159.setTransform(134.7,376.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("Ag0BRIAAihIBnAAIAAAkIg8AAIAAAaIAzAAIAAAiIgzAAIAAAdIA+AAIAAAkg");
	this.shape_160.setTransform(119.6,376.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AAdBHQgJgNgBgaQABgYAJgLQAKgOASAAQAQAAALAOQAKALAAAYQAAAagKANQgLAOgQAAQgSAAgKgOgAApAEQgGAJAAATQAAAUAGAKQAGAKAKgBQAJABAGgKQAGgKAAgUQAAgTgGgJQgGgJgJABQgKgBgGAJgAgzBVIBYioIAOAAIhYCogAhTAFQgKgMAAgZQAAgZAKgNQAKgNARAAQARAAAKANQAKANABAZQgBAZgKAMQgKANgRAAQgRAAgKgNgAhHg9QgGAKAAATQAAAUAGAJQAFAJAKgBQAKABAGgJQAGgJAAgUQAAgTgGgKQgGgKgKAAQgKAAgFAKg");
	this.shape_161.setTransform(374.7,430.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AAdBHQgJgNgBgaQABgYAJgLQAKgOASAAQAQAAALAOQAKALAAAYQAAAagKANQgLAOgQAAQgSAAgKgOgAApAEQgGAJAAATQAAAUAGAKQAGAKAKgBQAJABAGgKQAGgKAAgUQAAgTgGgJQgGgJgJABQgKgBgGAJgAgzBVIBYioIAOAAIhYCogAhTAFQgKgMAAgZQAAgZAKgNQAKgNARAAQARAAAKANQAKANABAZQgBAZgKAMQgKANgRAAQgRAAgKgNgAhHg9QgGAKAAATQAAAUAGAJQAFAJAKgBQAKABAGgJQAGgJAAgUQAAgTgGgKQgGgKgKAAQgKAAgFAKg");
	this.shape_162.setTransform(374.7,471.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AAdBHQgJgNgBgaQABgYAJgLQAKgOASAAQAQAAALAOQAKALAAAYQAAAagKANQgLAOgQAAQgSAAgKgOgAApAEQgGAJAAATQAAAUAGAKQAGAKAKgBQAJABAGgKQAGgKAAgUQAAgTgGgJQgGgJgJABQgKgBgGAJgAgzBVIBYioIAOAAIhYCogAhTAEQgKgLAAgZQAAgZAKgNQAKgNARAAQARAAAKANQAKANABAZQgBAZgKALQgKAOgRAAQgRAAgKgOgAhHg9QgGAKAAATQAAAUAGAKQAFAIAKgBQAKABAGgIQAGgKAAgUQAAgTgGgKQgGgKgKAAQgKAAgFAKg");
	this.shape_163.setTransform(374.7,511.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AAbBZIghg7IgWAbIAAAgIgVAAIAAiwIAVAAIAAB2IAAAAIAyg+IAWAAIgoAuIAuBKg");
	this.shape_164.setTransform(193.2,429.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgTA4QgNgIgHgOQgIgOAAgUQAAgTAIgOQAIgOAOgIQANgHAOAAQAMAAAIAEQAJAEAGAGIgKAOQgFgFgGgDQgGgDgIAAQgKAAgHAGQgJAGgFAKQgEALgBAMQABAVAKAMQAKANAPAAQAJAAAHgDQAHgEAGgFIAJANQgJAIgKAEQgKAEgLAAQgOAAgNgHg");
	this.shape_165.setTransform(180.6,432.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgJBWIAAh3IATAAIAAB3gAgIg+QgEgEgBgGQABgGAEgEQAEgDAEAAQAGAAAEADQAEAEAAAGQAAAGgEAEQgEADgGABQgEgBgEgDg");
	this.shape_166.setTransform(171.6,430.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgLBDQgHgLAAgSIAAhBIgSAAIAAgPIATgCIACgiIAQAAIAAAiIAgAAIAAARIggAAIAABCQgBALAFAGQAEAGAKAAIAHgBIAHgCIAEAPIgLADIgLACQgSgBgIgLg");
	this.shape_167.setTransform(164.4,431.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgXA6QgMgEgJgIIALgNQAHAGAJAEQAJAEAJAAQALAAAHgFQAFgGAAgIQAAgGgDgEQgFgEgGgDIgMgGIgRgFQgHgEgGgHQgFgHgBgKQAAgJAGgIQAFgIAIgFQAKgEALAAQAMAAAJAEQAKAEAHAGIgJANQgHgFgHgDQgHgDgHAAQgKAAgFAFQgGAFAAAHQABAGADAEQAEADAGADIALAFIARAIQAJACAGAHQAFAHAAALQABAKgGAIQgFAIgKAFQgKAFgOAAQgMAAgLgFg");
	this.shape_168.setTransform(154.8,432.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgqBWIgHgCIAFgQIAEABIAFABQAKgBAGgHQAIgHADgLIADgKIgxh3IAWAAIAYBDIAGARIAEAPIABAAIAFgPIAFgRIAWhDIAUAAIguCBQgEAMgFAKQgFAJgJAGQgJAFgLAAIgIAAg");
	this.shape_169.setTransform(143.7,435.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgaA4QgNgIgIgOQgIgOAAgUQAAgTAIgOQAIgOANgIQAMgHAOAAQAPAAAMAHQANAIAIAOQAIAOAAATQAAAUgIAOQgIAOgNAIQgMAHgPAAQgOAAgMgHgAgRgnQgIAGgEAKQgEALgBAMQABAVAJAMQAKANAOAAQAPAAAKgNQAJgMABgVQAAgMgFgLQgEgKgIgGQgIgGgKAAQgJAAgIAGg");
	this.shape_170.setTransform(131.2,432.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgaBMQgLgGgHgOIAPgKQAFAKAHAEQAHAFAJgBQALAAAHgIQAHgHAAgUIAAhvIAVAAIAAByQAAAOgFAMQgFALgKAHQgKAHgPAAQgOAAgMgHg");
	this.shape_171.setTransform(117.7,430.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgWA4QgNgIgHgOQgIgOAAgUQAAgSAIgOQAHgPANgHQANgIALAAQAYAAAMAPQANAPAAAbIAAAFIAAAEIhRAAQABAUAMALQAKALAQABQAJAAAHgDQAHgCAHgFIAHAOQgHAFgLAEQgJADgMAAQgPAAgOgHgAAhgIQAAgSgIgKQgHgKgPAAQgGAAgIAFQgIAEgFAJQgEAIgCAMIA/AAIAAAAg");
	this.shape_172.setTransform(262.3,473.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgKA8Igsh3IAVAAIAXBDIAGASIAEASIAAAAIAGgSIAFgSIAYhDIAUAAIgrB3g");
	this.shape_173.setTransform(250.2,473.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgKBTQgFgHAAgOIAAiXIASAAIAACZQAAAFACACQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAIACAAIADgBIACAQIgFABIgHABQgJAAgFgHg");
	this.shape_174.setTransform(241.7,470.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgdA7QgIgEgEgIQgFgHAAgLQAAgUASgJQASgLAkgEQABgIgDgHQgCgGgFgFQgGgEgKAAQgIAAgJAEQgKAEgHAFIgIgOQAJgGAMgFQAMgFANAAQAWAAAKAOQAKANAAAXIAABIIgRAAIgCgOIAAAAQgJAHgKAFQgJAFgKAAQgLAAgIgEgAgEADQgMAFgFAGQgFAFAAAIQAAAKAGAFQAGAFAJAAQAHAAAIgEQAIgFAIgIIAAgfQgUABgKADg");
	this.shape_175.setTransform(231.4,473.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgKA8Igsh3IAVAAIAXBDIAGASIAEASIAAAAIAGgSIAGgSIAWhDIAVAAIgrB3g");
	this.shape_176.setTransform(219.8,473.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgJALQgEgEgBgHQABgGAEgEQAFgEAEAAQAGAAAEAEQAEAEABAGQgBAHgEAEQgEAEgGAAQgEAAgFgEg");
	this.shape_177.setTransform(205.8,478);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgzBYIAAirIARAAIACANIAAAAQAJgGAJgFQAKgFAIgBQAQABALAHQAKAIAGANQAGAOAAATQgBAVgGANQgIAOgMAIQgMAIgOAAQgGAAgIgDQgJgEgIgHIAAAVIAAAqgAgOhBQgIAEgJAJIAAA9QAJAHAHADQAHADAHgBQANAAAJgMQAKgLAAgXQAAgUgHgMQgIgMgQAAQgGAAgIAEg");
	this.shape_178.setTransform(196.4,475.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgaA4QgNgIgIgOQgIgOAAgUQAAgTAIgOQAIgOANgIQAMgHAOAAQAPAAAMAHQANAIAIAOQAIAOAAATQAAAUgIAOQgIAOgNAIQgMAHgPAAQgOAAgMgHgAgRgnQgIAGgEAKQgEALgBAMQABAVAJAMQAKANAOAAQAPAAAKgNQAJgMABgVQAAgMgFgLQgEgKgIgGQgIgGgKAAQgJAAgIAGg");
	this.shape_179.setTransform(182.2,473.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AggA+IAAh4IARAAIACAWIAAAAQAHgLAHgHQAJgHAKAAIAHABIAGACIgEASIgGgCIgFAAQgIAAgJAGQgGAHgHAPIAABMg");
	this.shape_180.setTransform(172.4,473.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgzBYIAAirIARAAIACANIAAAAQAIgGAKgFQAKgFAIgBQARABAKAHQALAIAFANQAGAOAAATQgBAVgGANQgIAOgMAIQgMAIgOAAQgGAAgJgDQgIgEgJgHIABAVIAAAqgAgOhBQgIAEgJAJIAAA9QAIAHAIADQAIADAGgBQANAAAJgMQAKgLAAgXQABgUgIgMQgIgMgQAAQgGAAgIAEg");
	this.shape_181.setTransform(160.5,475.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgbAHIAAgNIA3AAIAAANg");
	this.shape_182.setTransform(149.2,473);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("Ag4BSIAAijIAxAAQAPAAAMAFQANAEAHAIQAHAJAAAPQAAAMgHAJQgHAKgOAEIAAABQASADAKAIQAKAJAAARQAAAQgIALQgIALgOAFQgOAFgRABgAgjBBIAcAAQAUAAALgIQAMgIAAgRQAAgOgLgIQgMgHgTAAIgdAAgAgjgLIAYAAQATAAAKgHQAJgHAAgNQAAgOgKgGQgKgGgRAAIgZAAg");
	this.shape_183.setTransform(138.6,471.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AAwBSIAAhYIAAgQIACgRIABgQIgBAAIgOAkIgfBUIgKAAIgfhUIgOgkIgBAAIABAQIACARIAAAQIAABYIgTAAIAAijIAYAAIAgBWIALAiIAAAAIAMgiIAghWIAYAAIAACjg");
	this.shape_184.setTransform(121.5,471.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgWA4QgMgIgIgOQgIgOAAgUQAAgSAIgOQAIgPAMgHQAMgIAMAAQAYAAANAPQAMAPAAAbIAAAFIgBAEIhQAAQACAUALALQAKALAQABQAIAAAIgDQAIgCAGgFIAHAOQgHAFgKAEQgLADgMAAQgOAAgOgHgAAhgIQAAgSgIgKQgIgKgOAAQgHAAgHAFQgIAEgEAJQgFAIgCAMIA/AAIAAAAg");
	this.shape_185.setTransform(204.9,513.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgKBTQgFgHAAgOIAAiXIASAAIAACZQAAAFACACQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAIACAAIADgBIACAQIgFABIgHABQgJAAgFgHg");
	this.shape_186.setTransform(195.9,511.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgfBWQgKgEgHgHQgGgHAAgLQAAgIAEgHQAFgHAJgGIAAAAQgFgDgDgFQgDgFAAgHQAAgIAEgEQAEgFAFgEIAAgBQgGgFgFgIQgEgIgBgLQABgOAGgJQAGgKAKgFQALgGAMAAIAHABIAIACIAqAAIAAAQIgZAAQAFAEADAHQACAGAAAIQAAANgFAKQgHAJgJAFQgLAFgKAAIgKgBIgJgDIgEAGQgDACAAAFQAAAFAEAEQAFAEANAAIAVAAQAVAAALAHQAKAHAAAPQAAALgHAKQgIAJgOAGQgNAGgRAAQgPAAgMgEgAgiAsQgCAFAAAFQAAAKAJAGQAKAFAQAAQAJAAAJgDQAJgEAFgFQAEgGAAgGQAAgJgGgDQgGgDgMAAIgTAAIgIgBIgIgBQgHAFgDAFgAgWhCQgIAHABAOQgBANAIAIQAHAHALABQAJgBAHgHQAHgIABgNQgBgOgHgHQgHgIgJAAQgLAAgHAIg");
	this.shape_187.setTransform(186.3,516.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AAcA+IAAhIQAAgRgGgIQgGgIgLAAQgIAAgHAFQgIAFgJAJIAABWIgUAAIAAh4IARAAIACASIAAAAQAJgJAKgGQAJgFALgBQATAAAJAMQAJANAAAXIAABLg");
	this.shape_188.setTransform(172.8,513.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgdA7QgIgEgEgIQgFgHAAgLQAAgUASgJQASgLAkgEQABgIgDgHQgCgGgFgFQgGgEgKAAQgIAAgJAEQgKAEgHAFIgIgOQAJgGAMgFQAMgFANAAQAWAAAKAOQAKANAAAXIAABIIgRAAIgCgOIAAAAQgJAHgKAFQgJAFgKAAQgLAAgIgEgAgEADQgMAFgFAGQgFAFAAAIQAAAKAGAFQAGAFAJAAQAHAAAIgEQAIgFAIgIIAAgfQgUABgKADg");
	this.shape_189.setTransform(159.3,513.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgbAHIAAgNIA3AAIAAANg");
	this.shape_190.setTransform(149.2,513.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("Ag4BSIAAijIAxAAQAPAAAMAFQANAEAHAIQAHAJAAAPQAAAMgHAJQgHAKgOAEIAAABQASADAKAIQAKAJAAARQAAAQgIALQgIALgOAFQgOAFgRABgAgjBBIAcAAQAUAAALgIQAMgIAAgRQAAgOgLgIQgMgHgTAAIgdAAgAgjgLIAYAAQATAAAKgHQAJgHAAgNQAAgOgKgGQgKgGgRAAIgZAAg");
	this.shape_191.setTransform(138.6,511.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AAwBSIAAhYIAAgQIACgRIABgQIgBAAIgOAkIgfBUIgKAAIgfhUIgOgkIgBAAIABAQIACARIAAAQIAABYIgTAAIAAijIAYAAIAgBWIALAiIAAAAIAMgiIAghWIAYAAIAACjg");
	this.shape_192.setTransform(121.5,511.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgRAXQAKgFAGgHQAEgJAAgHIgBAAIgBAAQgFAAgEgEQgEgEAAgHQAAgHAEgDQAFgEAEAAQAIAAAFAGQAEAHAAALQAAAOgIAMQgJAMgNAHg");
	this.shape_193.setTransform(1309.7,520.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_194.setTransform(349.9,431.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_195.setTransform(349.9,471.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_196.setTransform(328.6,511.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_197.setTransform(349.7,512.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AA/A+IAAhIQAAgRgGgIQgFgIgLAAQgIAAgHAFQgIAEgIAKIAABWIgTAAIAAhIQAAgRgFgIQgGgIgLAAQgHAAgIAFQgHAEgJAKIAABWIgUAAIAAh4IARAAIACASIAAAAQAIgJAKgGQAJgFALgBQAOAAAIAHQAGAGADALQAKgLAKgGQAKgHAKAAQATAAAJAMQAJANAAAXIAABLg");
	this.shape_198.setTransform(1419.4,514.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AAcBZIAAhLQAAgPgGgHQgGgJgLABQgIAAgHAEQgIAGgJAHIAABYIgUAAIAAiwIAUAAIAAAwIAAAZQAIgJAKgFQAJgFALgBQATAAAJAMQAJAMAAAVIAABOg");
	this.shape_199.setTransform(1402.3,511.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgaA4QgNgIgIgOQgIgOAAgUQAAgTAIgOQAIgOANgIQAMgHAOAAQAPAAAMAHQANAIAIAOQAIAOAAATQAAAUgIAOQgIAOgNAIQgMAHgPAAQgOAAgMgHgAgRgnQgIAGgEAKQgEALgBAMQABAVAJAMQAKANAOAAQAPAAAKgNQAJgMABgVQAAgMgFgLQgEgKgIgGQgIgGgKAAQgJAAgIAGg");
	this.shape_200.setTransform(1388.6,514.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AAbBZIghg7IgWAaIAAAhIgVAAIAAiwIAVAAIAAB2IAAAAIAyg+IAXAAIgpAvIAuBJg");
	this.shape_201.setTransform(1377,511.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AAsBSIgPgzIg6AAIgPAzIgWAAIA4ijIAVAAIA4CjgAAYAOIgIgXIgIgbIgIgcIAAAAIgIAcIgIAbIgIAXIAwAAg");
	this.shape_202.setTransform(1161.5,512.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AA/A+IAAhIQAAgRgGgIQgFgIgLAAQgIAAgHAFQgIAEgIAKIAABWIgTAAIAAhIQAAgRgFgIQgGgIgLAAQgHAAgIAFQgHAEgJAKIAABWIgUAAIAAh4IARAAIACASIAAAAQAIgJAKgGQAJgFALgBQAOAAAIAHQAGAGADALQAKgLAKgGQAKgHAKAAQATAAAJAMQAJANAAAXIAABLg");
	this.shape_203.setTransform(1144.3,514.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgLBSIg0iiIAWAAIAbBWIAIAcIAGAbIABAAIAIgbIAIgcIAahWIAVAAIg0Cig");
	this.shape_204.setTransform(1376.4,335.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgLBSIg0iiIAWAAIAbBWIAIAcIAGAbIABAAIAIgbIAHgcIAahWIAWAAIg0Cig");
	this.shape_205.setTransform(1140.4,335.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgxBRIAAgMIApgqQAOgTAIgMQAJgPAAgNQABgOgIgIQgIgJgNAAQgJAAgJAGQgJAFgHAIIgLgMQAJgLAMgGQAMgHAPAAQAUABAMAMQANANABAVQAAAPgJAQQgIANgPARIggAlIAOgBIALgBIAuAAIAAASg");
	this.shape_206.setTransform(1320,511.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgWBOQgJgEgIgFQgHgEgGgGIALgNQAGAHAKAFQAKAFANABQAIAAAIgFQAIgEAFgIQAEgJABgLQAAgQgJgJQgKgIgOAAQgHAAgGADQgHACgHADIgKgFIAEhNIBOAAIAAASIg8AAIgDAvIAKgEQAHgCAFAAQANAAAMAFQALAFAGALQAHAKAAARQAAARgIAMQgHAMgMAGQgNAHgMAAQgMAAgKgDg");
	this.shape_207.setTransform(1336.4,512);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_208.setTransform(1353.2,512.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_209.setTransform(1354.6,335.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_210.setTransform(1304.1,161.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_211.setTransform(1320.6,161.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_212.setTransform(1337.2,161.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_213.setTransform(1114.6,335.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_214.setTransform(1084.6,512.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_215.setTransform(1100.1,512.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_216.setTransform(1117.6,512.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_217.setTransform(1051.6,161.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_218.setTransform(1068.1,161.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_219.setTransform(1084.6,161.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgkA9QgOgWAAgnQAAgnAOgVQANgVAXAAQAYAAANAVQANAVABAnQgBAngNAWQgNAVgYAAQgXAAgNgVgAgVgxQgIAPgBAiQABAiAIAQQAIAQANAAQAOAAAIgQQAIgQABgiQgBgigIgPQgIgQgOAAQgNAAgIAQg");
	this.shape_220.setTransform(1101.2,161.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("EBIkAcWQgOgVAAgpQAAgoAOgVQANgVAZAAQAYAAANAVQANAVABAoQgBApgNAVQgNAVgYABQgZgBgNgVgEBIzAamQgIAQgBAiQABAjAIAQQAIAQAPAAQAOAAAIgQQAIgQABgjQgBgigIgQQgIgPgOAAQgPAAgIAPgEhR8AcWQgOgVAAgpQAAgoAOgVQANgVAZAAQAYAAANAVQANAVABAoQgBApgNAVQgNAVgYABQgZgBgNgVgEhRtAamQgIAQgBAiQABAjAIAQQAIAQAPAAQAOAAAIgQQAIgQABgjQgBgigIgQQgIgPgOAAQgPAAgIAPgEBQygaYQgOgWAAgoQAAgoAOgVQANgVAZAAQAYAAANAVQANAVABAoQgBAogNAWQgNAVgYAAQgZAAgNgVgEBRBgcIQgIAPgBAjQABAjAIAQQAIAQAPAAQAOAAAIgQQAIgQABgjQgBgjgIgPQgIgQgOAAQgPAAgIAQgEAr6gaYQgOgWAAgoQAAgoAOgVQANgVAZAAQAYAAANAVQANAVABAoQgBAogNAWQgNAVgYAAQgZAAgNgVgEAsJgcIQgIAPgBAjQABAjAIAQQAIAQAPAAQAOAAAIgQQAIgQABgjQgBgjgIgPQgIgQgOAAQgPAAgIAQgEBGdgabQgOgVAAgpQAAgoAOgVQANgVAZAAQAYAAANAVQANAVABAoQgBApgNAVQgNAVgYABQgZgBgNgVgEBGsgcLQgIAQgBAiQABAjAIAQQAIAQAPAAQAOAAAIgQQAIgQABgjQgBgigIgQQgIgPgOAAQgPAAgIAPg");
	this.shape_221.setTransform(832.9,336.5);

	this.moving_down = new lib.up();
	this.moving_down.setTransform(1144.7,10473.9,1,1,0,0,0,120.1,-10207.5);

	this.moving_forward = new lib.down();
	this.moving_forward.setTransform(1144.7,10473.9,1,1,0,0,0,120.1,-10207.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152}]}).to({state:[{t:this.moving_down}]},1).to({state:[{t:this.moving_forward}]},1).wait(1));

	// Layer 4
	this.instance = new lib.blue_up();
	this.instance.setTransform(1607.8,738,1,1,0,0,0,0,142.5);

	this.instance_1 = new lib.blue_wide();
	this.instance_1.setTransform(1522,759.4,1,1,0,0,0,88.4,21.4);

	this.instance_2 = new lib.red_up();
	this.instance_2.setTransform(1531.8,663.6,1,1,0,0,0,0,30.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#1D9EDA").ss(4.3).p("A6YDTQABgaAAiTQAAhtA6hAQBFhLCNAAMAw5AAA");
	this.shape_222.setTransform(1262.5,802.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#D92F27").ss(4.3).p("EglHAKGIAApKQAAhwBBg6QBGg9CTAAMBA7AAAQBgAAA1gKQA+gMAjgfQBDg9AAjIIAAig");
	this.shape_223.setTransform(1294.2,758.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_223},{t:this.shape_222},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(2));

	// Layer 8
	this.instance_3 = new lib.cylinder_1();
	this.instance_3.setTransform(1531.7,605.3,1,1,0,0,0,5,12.6);

	this.instance_4 = new lib.king_1();
	this.instance_4.setTransform(1661.7,533.2,1,1,0,0,0,214.5,275.5);

	this.instance_5 = new lib.winch_1();
	this.instance_5.setTransform(1494.7,555.1,1,1,0,0,0,8.5,8);

	this.instance_6 = new lib.boom_1();
	this.instance_6.setTransform(1504.6,560.8,1,1,0,0,0,12.4,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[]},1).wait(2));

	// Layer 7
	this.instance_7 = new lib.flow_backwards();
	this.instance_7.setTransform(902.5,499.1,1,1,0,0,0,-122.1,-20182.3);

	this.instance_8 = new lib.flow();
	this.instance_8.setTransform(902.5,499.1,1,1,0,0,0,-122.1,-20182.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

	// Layer 6
	this.goback = new lib.btn_blue();
	this.goback.setTransform(437.3,148.3,1,1,0,0,0,30.3,30.3);

	this.forward = new lib.tb();
	this.forward.setTransform(559.7,148.1,1,1,0,0,0,28.9,28.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.forward},{t:this.goback}]}).wait(3));

	// Layer 3
	this.instance_9 = new lib.arrows();
	this.instance_9.setTransform(1076.6,860.4,1,1,0,0,0,115.8,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},1).wait(2));

	// Layer 5
	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgYA+QgNgFgLgJIATgYQAHAGAIADQAIAEAGAAQAHAAAEgDQADgCAAgEQAAgFgEgCIgMgGIgQgGQgHgDgFgFQgGgDgDgHQgEgHgBgJQAAgLAHgJQAGgJAKgGQAMgFAMAAQALAAALAEQALAEAJAJIgRAVQgGgEgHgDQgGgCgGAAQgFAAgDACQgEACAAAFQAAAEAFADIAMAGIAPAGQAMAEAHAHQAGAJABANQAAALgGAJQgGAKgLAFQgLAGgPAAQgMAAgMgEg");
	this.shape_224.setTransform(504.9,227.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgZA7QgKgHgHgLIAXgSQADAGAEAEQAFACAEAAQAFAAAEgDQADgFAAgMIAAhPIAiAAIAABSQAAANgEALQgFAKgKAHQgJAGgPAAQgOAAgLgGg");
	this.shape_225.setTransform(493.5,227.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AhcBdQgngnAAg2QAAg2AngmQAngnA1AAQA2AAAoAnQAmAmAAA2QAAA2gmAnQgoAng2AAQg1AAgngng");
	this.shape_226.setTransform(502.2,116.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").ss(11.3).p("AAAFoIAArP");
	this.shape_227.setTransform(501.7,152.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(4.3).p("ABGBnIiLAAIAAjNICLAAg");
	this.shape_228.setTransform(500.4,276.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").ss(4.3).p("AFoGBIrPAAIAAsBILPAAg");
	this.shape_229.setTransform(499.8,227.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(4.3).p("ABYmAIAsAAIDkAAIAAMBIrOAAIAArsAl8mAIAWAA");
	this.shape_230.setTransform(499.8,227.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AiwEGIAAgWIEuAAIm3m6IBQhQIIjIfIgsAAIAMAVIgcAAIgGAAIgGAAIiJAAIkZABg");
	this.shape_231.setTransform(481.6,162.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AlnGBIAArsIEcAAIAAAcICHAAIAAgcIAGAAIAGAHIAAgHIAcAAIgNgVIAtAAIDjAAIAAMBg");
	this.shape_232.setTransform(499.8,227.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(4.3).p("AlmmAIEbAAICHAAIEsAAIAAMBIrOAAgAl6mAIAUAA");
	this.shape_233.setTransform(499.8,227.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AlnGBIAAsBIEcAAIAAAxICHAAIAAgxIErAAIAAMBg");
	this.shape_234.setTransform(499.8,227.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AkdD0IHrnnIBQBQImYGXg");
	this.shape_235.setTransform(522.2,162.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226,p:{rotation:0,x:502.2,y:116.9}},{t:this.shape_225},{t:this.shape_224}]}).to({state:[{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_228},{t:this.shape_226,p:{rotation:45,x:458.7,y:143}},{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_228},{t:this.shape_226,p:{rotation:45,x:546.9,y:143}},{t:this.shape_225},{t:this.shape_224}]},1).wait(1));

	// Layer 1
	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#D92F27").s().p("AAADEQgBAAgDgDQgCgCABgCIAAhPQgBgCACgCQADgDABAAQACAAACADQADACgBACIAABPQABACgDACQgCADgCAAIAAAAgAAABiQgBAAgDgDQgCgCABgCIAAhQQgBgDACgDQADgCABAAQACAAACACQADADgBADIAABQQABACgDACQgCACgCABIAAAAgAAAAAQgBAAgDgDQgCgCABgCIAAhQQgBgDACgDQADgCABAAQACAAACACQADADgBADIAABQQABACgDACQgCADgCAAIAAAAgAAAhlQgBABgDgDQgCgCABgCIAAhQQgBgDACgDQADgCABAAQACAAACACQADADgBADIAABQQABACgDACQgCACgCAAIAAAAg");
	this.shape_236.setTransform(520.4,690.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#D92F27").s().p("AiICnQgCAAgCgCQgDgCAAgDIAAhQQAAgDADgCQACgCACAAQADAAADACQACACgBADIAABQQABADgCACQgDACgCAAIgBAAgAiIBDQgCAAgCgCQgDgCAAgDIAAhOQAAgDADgCQACgCACAAQADAAADACQACACgBADIAABOQABADgCACQgDACgCAAIgBAAgACJADQgDAAgDgCQgCgBABgCIAAg0QgBgDACgCQADgCADAAQACAAACACQADACgBADIAAA0QABACgDABQgCACgCAAIAAAAgAiIgfQgCAAgCgCQgDgCAAgDIAAhQQAAgDADgCQACgCACAAQADAAADACQACACgBADIAABQQABADgCACQgDACgCAAIgBAAgACJhDQgDAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCADAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAiIiDQgCAAgCgCQgDgCAAgDIAAgVQAAgDADgCQACgCACAAIA8AAQACAAACACQADACAAADQAAADgDACQgCACgCAAIg1AAIAAAOQABADgCACQgDACgCAAIgBAAgAB6iYIhRAAQgCAAgCgCQgDgCAAgDQAAgDADgCQACgCACAAIBRAAQACAAADACQACACAAADQAAADgCACQgDACgCAAIAAAAgAAWiYIhOAAQgDAAgDgCQgCgCAAgDQAAgDACgCQADgCADAAIBOAAQACAAACACQADACAAADQAAADgDACQgCACgCAAIAAAAg");
	this.shape_237.setTransform(498.8,637.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#D92F27").s().p("ABEAGIgmAAQgCABgCgCQgDgDAAgCQAAgBADgCQACgDACABIAmAAQADgBACADQADACgBABQABACgDADQgCABgCAAIgBAAgAALAGIhPAAQgCABgCgCQgDgDAAgCQAAgBADgCQACgDACABIBPAAQACgBADADQACACAAABQAAACgCADQgDABgCAAIAAAAg");
	this.shape_238.setTransform(491.9,655.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#8D8279").ss(4.3).p("AAAh8IAAD5");
	this.shape_239.setTransform(1228.3,478.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#8D8279").ss(4.3).p("AAAjgIAAHB");
	this.shape_240.setTransform(1228.3,333.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#1D9EDA").ss(4.3).p("Eg12AHWIAAm5MBrtAAAIAAny");
	this.shape_241.setTransform(747.5,946);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#16AFC4").ss(4.3).p("AlCuUIJvAAIAAc+");
	this.shape_242.setTransform(352.7,917.9);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#D92F27").ss(4.3).p("Eg6kAAIIoSAAIAAvnIfsAAIAAe/MBmBAAAIAAj/");
	this.shape_243.setTransform(627.9,825.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#D92F27").ss(4.3).p("AzlFtIAArEMAnhAAA");
	this.shape_244.setTransform(357.4,689.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#D92F27").s().p("ACbCQIhQAAQgDAAgCgDQgCgCAAgCQAAgDACgDQACgCADAAIBQAAQADAAACACQACADAAADQAAACgCACQgCACgDABIAAAAgAA3CQIg0AAQgDAAAAgDQgCgCAAgCQAAgDACgDQAAgCADAAIA0AAQADAAACACQACADAAADQAAACgCACQgCACgDABIAAAAgACgCAQgDABgCgCQgCgDAAgDIAAhQQAAgCACgCQACgDADABQADgBACADQACACAAACIAABQQAAADgCADQgCACgDAAIAAgBgACgAdQgDAAgCgCQgCgDAAgDIAAhOQAAgCACgCQACgDADAAQADAAACADQACACAAACIAABOQAAADgCADQgCACgDAAIAAAAgACghFQgDAAgCgCQgCgDAAgDIAAg0IgOAAQgDABgCgDQgCgCAAgDQAAgCACgCQACgDADABIAVAAQADgBACADQACACAAACIAAA7QAAADgCADQgCACgDAAIAAAAgAB3iBIhQAAQgDABgCgDQgCgCAAgDQAAgCACgCQACgDADABIBQAAQADgBACADQACACAAACQAAADgCACQgCACgDAAIAAAAgAATiBIhOAAQgDABgCgDQgCgCAAgDQAAgCACgCQACgDADABIBOAAQADgBACADQACACAAACQAAADgCACQgCACgDAAIAAAAgAhPiBIhQAAQgDABgCgDQgCgCAAgDQAAgCACgCQACgDADABIBQAAQADgBACADQACACAAACQAAADgCACQgCACgDAAIAAAAg");
	this.shape_245.setTransform(1194.8,600.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#D92F27").s().p("EAyBABdIgIAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIABAAIAAhCQAAgDACgCQACgCADAAQADAAACACQACACAAADIAABJQAAADgCACQgCACgDAAIAAAAgEAxlABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAwBABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAudABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAs5ABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEArVABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEApxABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAoNABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAmpABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAlFABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAjhABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAh9ABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAgZABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAe1BdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAdRBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAbtBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAaJBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAYlBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAXBBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAVdBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAT5BdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgASVBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAQxBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAPNBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgANpBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAMFBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAKhBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAI9BdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAHZBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAF1BdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAERBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgACtBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgABJBdIhOAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBOAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAgZBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAh9BdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAjhBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAlFBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAmpBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAoNBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgApxBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgArVBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAs5BdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAudBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAwBBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAxlBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgAzJBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgA0tBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgA2RBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgA31BdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgA5ZBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgA69BdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgA8hBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgA+FBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgA/pBdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEghNABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgixABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgkVABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgl5ABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgndABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgpBABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgqlABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgsJABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgttABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgvRABdIhQAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBQAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEgw1ABdIhLAAQgDAAgCgCQgCgCAAgDQAAgDACgCQACgCADAAIBLAAQADAAACACQACACAAADQAAADgCACQgCACgDAAIAAAAgEAyBAAAQgDAAgCAAQgCgCAAgDIAAhQQAAgDACgCQACgCADAAQADAAACACQACACAAADIAABQQAAADgCACQgCAAgDAAIAAAAg");
	this.shape_246.setTransform(850.1,646.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#D92F27").ss(1.4).p("AAVAAIgpAA");
	this.shape_247.setTransform(1247.9,890.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#D92F27").s().p("AGiAGIhGAAQgCABgCgDQgDgCABgCQgBgBADgDQACgCACABIBGAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAgAFIAGIhGAAQgCABgCgDQgDgCABgCQgBgBADgDQACgCACABIBGAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAgADuAGIhGAAQgCABgCgDQgDgCABgCQgBgBADgDQACgCACABIBGAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAgACUAGIhGAAQgCABgCgDQgDgCABgCQgBgBADgDQACgCACABIBGAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAgAA6AGIhEAAQgCABgCgDQgDgCABgCQgBgBADgDQACgCACABIBEAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAgAgeAGIhGAAQgCABgCgDQgDgCABgCQgBgBADgDQACgCACABIBGAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAgAh4AGIhGAAQgCABgCgDQgDgCABgCQgBgBADgDQACgCACABIBGAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAgAjSAGIhGAAQgCABgCgDQgDgCABgCQgBgBADgDQACgCACABIBGAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAgAksAGIhGAAQgCABgCgDQgDgCABgCQgBgBADgDQACgCACABIBGAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAgAmGAGIgcAAQgCABgDgDQgCgCAAgCQAAgBACgDQADgCACABIAcAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAg");
	this.shape_248.setTransform(1293.3,890.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#D92F27").ss(1.4).p("AARgXIAAAoIgoAA");
	this.shape_249.setTransform(1340.3,888.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#D92F27").s().p("AAAYCQgBAAgDgCQgCgCAAgDIAAg/QAAgDACgCQADgCABAAQACAAACACQADACAAADIAAA/QAAADgDACQgCACgCAAIAAAAgAAAWvQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAVLQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAATnQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAASDQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAQfQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAO7QgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAANXQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAALzQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAKPQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAIrQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAHHQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAFjQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAD/QgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAACbQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAA3QgBAAgDgCQgCgCAAgDIAAhOQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABOQAAADgDACQgCACgCAAIAAAAgAAAgrQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAiPQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAjzQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAlXQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAm7QgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAofQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAqDQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAArnQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAtLQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAuvQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAwTQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAx3QgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAAzbQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAA0/QgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAgAAA2jQgBAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCABAAQACAAACACQADACAAADIAABQQAAADgDACQgCACgCAAIAAAAg");
	this.shape_250.setTransform(1342.1,731.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#D92F27").ss(1.4).p("AgXgQIAoAAIAAAo");
	this.shape_251.setTransform(1340.3,573.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#D92F27").s().p("ALwAGIgFAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIAFAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgALXAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAJzAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAIPAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAGrAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAFHAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgADjAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAB/AGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAAbAGIhOAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBOAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAhHAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAirAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAkPAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAlzAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAnXAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAo7AGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAgAqfAGIhQAAQgDABgCgDQgCgCAAgCQAAgBACgDQACgCADABIBQAAQADgBACACQACADAAABQAAACgCACQgCACgDAAIAAAAg");
	this.shape_252.setTransform(1261.1,571.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#D92F27").ss(1.4).p("AgQAYIAAgoIAoAA");
	this.shape_253.setTransform(1180.5,573.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#D92F27").s().p("AAABsQgBABgDgDQgCgCAAgCIAAhQQAAgDACgDQADgCABABQACgBACACQADADAAADIAABQQAAACgDACQgCACgCAAIAAAAgAAAAIQgBABgDgDQgCgCAAgDIAAhNQAAgDACgDQADgCABABQACgBACACQADADAAADIAABNQAAADgDACQgCACgCAAIAAAAgAAAhaQgBABgDgCQgCgDAAgDIAAgDQAAgDACgDQADgCABAAQACAAACACQADADAAADIAAADQAAADgDADQgCABgCAAIAAAAg");
	this.shape_254.setTransform(1178.7,587.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#D92F27").ss(1.4).p("AAAAVIAAgp");
	this.shape_255.setTransform(1178.7,602.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#D92F27").s().p("AAADgQgBAAgCgDQgDgCAAgCIAAgjQAAgCADgCQACgDABAAQACAAADADQACACAAACIAAAjQAAACgCACQgDACgCABIAAAAgAAACqQgBAAgCgDQgDgCAAgCIAAhRQAAgCADgDQACgCABAAQACAAADACQACADAAACIAABRQAAACgCACQgDACgCABIAAAAgAAABGQgBAAgCgDQgDgCAAgCIAAhOQAAgDADgDQACgCABAAQACAAADACQACADAAADIAABOQAAACgCACQgDADgCAAIAAAAgAAAgdQgBABgCgDQgDgCAAgCIAAhQQAAgDADgDQACgCABAAQACAAADACQACADAAADIAABQQAAACgCACQgDACgCAAIAAAAgAAAiBQgBABgCgDQgDgCAAgCIAAhQQAAgDADgDQACgCABABQACgBADACQACADAAADIAABQQAAACgCACQgDACgCAAIAAAAg");
	this.shape_256.setTransform(1186.2,659.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#D92F27").s().p("ACaCQIhQAAQgDAAgCgDQgCgCAAgCQAAgDACgDQACgCADAAIBQAAQADAAACACQACADAAADQAAACgCACQgCACgDABIAAAAgAA2CQIgzAAQgDAAAAgDQgCgCAAgCQAAgDACgDQAAgCADAAIAzAAQADAAACACQACADAAADQAAACgCACQgCACgDABIAAAAgACgCAQgDABgCgCQgCgDAAgDIAAhQQAAgCACgCQACgDADABQADgBACADQACACAAACIAABQQAAADgCADQgCACgDAAIAAgBgACgAdQgDAAgCgCQgCgDAAgDIAAhOQAAgCACgCQACgDADAAQADAAACADQACACAAACIAABOQAAADgCADQgCACgDAAIAAAAgACghFQgDAAgCgCQgCgDAAgDIAAg0IgOAAQgDABgCgDQgCgCAAgDQAAgCACgCQACgDADABIAVAAQADgBACADQACACAAACIAAA7QAAADgCADQgCACgDAAIAAAAgAB3iBIhQAAQgDABgCgDQgCgCAAgDQAAgCACgCQACgDADABIBQAAQADgBACADQACACAAACQAAADgCACQgCACgDAAIAAAAgAATiBIhOAAQgDABgCgDQgCgCAAgDQAAgCACgCQACgDADABIBOAAQADgBACADQACACAAACQAAADgCACQgCACgDAAIAAAAgAhPiBIhQAAQgDABgCgDQgCgCAAgDQAAgCACgCQACgDADABIBQAAQADgBACADQACACAAACQAAADgCACQgCACgDAAIAAAAg");
	this.shape_257.setTransform(722.9,600.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#D92F27").s().p("AAABdQgBAAgDgCQgCgCABgDIAAhJQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABJQABADgDACQgCACgCAAIAAAAgAAAAAQgBAAgDAAQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCAAgCAAIAAAAg");
	this.shape_258.setTransform(698.4,646.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#D92F27").ss(1.4).p("AgUAAIApAA");
	this.shape_259.setTransform(898.3,891.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#D92F27").s().p("AGFAIIhQgBQgCAAgCgCQgDgCAAgDQAAgBADgCQACgCACAAIBQABQADAAADACQACACAAABQAAADgCACQgDACgCAAIgBAAgAEhAHIhQAAQgCAAgCgCQgDgCAAgDQAAgBADgCQACgCACAAIBQAAQADAAADACQACACAAABQAAADgCACQgDACgCAAIgBAAgAC+AHIhRgBQgCAAgDgCQgCgCAAgCQAAgCACgCQADgCACAAIBRABQACAAACACQADACAAABQAAADgDACQgCACgCAAIAAAAgABaAGIhQgBQgDAAgDgCQgCgCAAgBQAAgDACgCQADgCADAAIBQABQACAAACACQADACAAACQAAACgDACQgCACgCAAIAAAAgAgIAFIhQAAQgDAAgDgCQgCgCAAgBQAAgDACgCQADgCADAAIBQAAQACAAACACQADACgBADQABABgDACQgCACgCAAIAAAAgAhsAFIhQAAQgDAAgDgCQgCgCABgBQgBgDACgCQADgCADAAIBQAAQACAAACACQADACgBADQABABgDACQgCACgCAAIAAAAgAjRAFIhPAAQgDAAgDgCQgCgCABgBQgBgDACgCQADgCADAAIBPAAQADAAACACQADACgBADQABABgDACQgCACgCAAIgBAAgAk1AFIhQAAQgCAAgCgCQgDgCABgBQgBgDADgCQACgCACAAIBQAAQADAAADACQACACgBADQABABgCACQgDACgCAAIgBAAg");
	this.shape_260.setTransform(854.6,891);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#D92F27").ss(1.4).p("AgQgXIAAAoIAoAA");
	this.shape_261.setTransform(810.3,889.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#D92F27").s().p("AAAYDQgBAAgDgCQgCgCABgDIAAhBQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABBQABADgDACQgCACgCAAIAAAAgAAAWuQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAVKQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAATmQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAASCQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAQeQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAO6QgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAANWQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAALyQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAKOQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAIqQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAHGQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAFiQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAD+QgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAACaQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAA2QgBAAgDgCQgCgCABgDIAAhOQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABOQABADgDACQgCACgCAAIAAAAgAAAgsQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAiQQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAj0QgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAlYQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAm8QgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAogQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAqEQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAroQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAtMQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAuwQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAwUQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAx4QgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAAzcQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAA1AQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAgAAA2kQgBAAgDgCQgCgCABgDIAAhQQgBgDACgCQADgCABAAQACAAACACQADACgBADIAABQQABADgDACQgCACgCAAIAAAAg");
	this.shape_262.setTransform(808.5,732);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#D92F27").ss(1.4).p("AgXgQIAoAAIAAAo");
	this.shape_263.setTransform(806.7,573.4);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#D92F27").s().p("AG3AGIhQAAQgCABgCgDQgDgCABgCQgBgBADgDQACgCACABIBQAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAgAFTAGIhQAAQgCABgCgDQgDgCAAgCQAAgBADgDQACgCACABIBQAAQADgBADACQACADAAABQAAACgCACQgDACgCAAIgBAAgADvAGIhQAAQgCABgCgDQgDgCAAgCQAAgBADgDQACgCACABIBQAAQADgBADACQACADAAABQAAACgCACQgDACgCAAIgBAAgACMAGIhRAAQgCABgDgDQgCgCAAgCQAAgBACgDQADgCACABIBRAAQACgBACACQADADAAABQAAACgDACQgCACgCAAIAAAAgAAoAGIhOAAQgDABgDgDQgCgCAAgCQAAgBACgDQADgCADABIBOAAQACgBACACQADADAAABQAAACgDACQgCACgCAAIAAAAgAg6AGIhQAAQgDABgDgDQgCgCABgCQgBgBACgDQADgCADABIBQAAQACgBACACQADADgBABQABACgDACQgCACgCAAIAAAAgAieAGIhQAAQgDABgDgDQgCgCABgCQgBgBACgDQADgCADABIBQAAQACgBACACQADADgBABQABACgDACQgCACgCAAIAAAAgAkDAGIhPAAQgDABgDgDQgCgCABgCQgBgBACgDQADgCADABIBPAAQADgBACACQADADgBABQABACgDACQgCACgCAAIgBAAgAlnAGIhQAAQgCABgCgDQgDgCABgCQgBgBADgDQACgCACABIBQAAQADgBADACQACADgBABQABACgCACQgDACgCAAIgBAAg");
	this.shape_264.setTransform(757.9,571.7);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#D92F27").ss(1.4).p("AgQAYIAAgoIAoAA");
	this.shape_265.setTransform(708.6,573.4);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#D92F27").s().p("AAABsQgBABgCgDQgDgCAAgCIAAhQQAAgDADgDQACgCABABQACgBADACQACADAAADIAABQQAAACgCACQgDACgCAAIAAAAgAAAAIQgBABgCgDQgDgCAAgDIAAhNQAAgDADgDQACgCABABQACgBADACQACADAAADIAABNQAAADgCACQgDACgCAAIAAAAgAAAhaQgBABgCgCQgDgDAAgDIAAgDQAAgDADgDQACgCABAAQACAAADACQACADAAADIAAADQAAADgCADQgDABgCAAIAAAAg");
	this.shape_266.setTransform(706.9,587.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#D92F27").ss(1.4).p("AAAAVIAAgp");
	this.shape_267.setTransform(706.9,602.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#1D9EDA").s().p("AAAFrQgBAAgCgDQgDgCAAgCIAAgNQAAgCADgCQACgDABABQACgBADADQACACgBACIAAANQABACgCACQgDADgCAAIAAAAgAAAFKQgBABgCgCQgDgDAAgDIAAhQQAAgCADgCQACgDABABQACgBADADQACACgBACIAABQQABADgCADQgDACgCgBIAAAAgAAADnQgBAAgCgCQgDgDAAgDIAAhQQAAgCADgCQACgDABAAQACAAADADQACACgBACIAABQQABADgCADQgDACgCAAIAAAAgAAACDQgBAAgCgCQgDgDAAgDIAAhQQAAgCADgCQACgDABAAQACAAADADQACACgBACIAABQQABADgCADQgDACgCAAIAAAAgAAAAfQgBAAgCgDQgDgCAAgCIAAhPQAAgCADgDQACgCABAAQACAAADACQACADgBACIAABPQABACgCACQgDACgCABIAAAAgAAAhDQgBAAgCgDQgDgCAAgCIAAhQQAAgDADgDQACgCABAAQACAAADACQACADgBADIAABQQABACgCACQgDADgCAAIAAAAgAAAioQgBABgCgDQgDgCAAgCIAAhQQAAgDADgDQACgCABAAQACAAADACQACADgBADIAABQQABACgCACQgDACgCAAIAAAAgAAAkMQgBABgCgDQgDgCAAgCIAAhQQAAgDADgDQACgCABABQACgBADACQACADgBADIAABQQABACgCACQgDACgCAAIAAAAg");
	this.shape_268.setTransform(714.4,673.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#8D8279").ss(4.3).p("AHlIKIuzAAIAAwo");
	this.shape_269.setTransform(1079.3,576.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#8D8279").ss(4.3).p("AAAipIAAFT");
	this.shape_270.setTransform(1032.9,482.7);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#8D8279").ss(4.3).p("AdPogIAAFnMg6dAAAIAALEIEiAA");
	this.shape_271.setTransform(814.8,576.3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#8D8279").ss(4.3).p("AAAipIAAFT");
	this.shape_272.setTransform(1001.9,482.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#8D8279").ss(4.3).p("AAAjgIAAHB");
	this.shape_273.setTransform(1015.3,333.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#8D8279").ss(4.3).p("AybmfMAkiAAAIAANU");
	this.shape_274.setTransform(1111,145.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#00A69B").ss(4.3).p("Ag3lZIBaAAIAALI");
	this.shape_275.setTransform(1011.1,150.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#00A69B").ss(4.3).p("AgqF1IAArUIBqAA");
	this.shape_276.setTransform(869.7,151.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#000000").ss(2.1).p("EAkxgPpIAAfJMhJsAAA");
	this.shape_277.setTransform(657.1,413.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#00A69B").ss(4.3).p("AchrRIAAadMg5BAAAIAA+s");
	this.shape_278.setTransform(682.9,385.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#000000").ss(4.3).p("AEHAAIoNAA");
	this.shape_279.setTransform(739.2,411);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(4.3).p("ABjnwIAAPMIjaAA");
	this.shape_280.setTransform(825.5,363.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236}]}).wait(3));

	// Slider
	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("rgba(204,204,204,0.2)").s().p("AIeeCIAAlMIXxAAIAAFMgA4oeCIAAlMIPkAAIAAFMgAMcCTIAAlKIMhAAIAAFKgA4GCTIAAlKIMhAAIAAFKgAEU41IAAlMITZAAIAAFMgEggOgY1IAAlMITZAAIAAFMg");
	this.shape_281.setTransform(1231.2,335.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_281).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1040.9,605.5,1795.3,953.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;