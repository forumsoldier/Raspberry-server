// Garden Gnome Software - Skin
// Pano2VR pro 5.0beta3a/11769
// Filename: Martin Linge Skin - Copy.ggsk
// Generated ma okt 26 13:52:46 2015

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._map=document.createElement('div');
		this._map__img=document.createElement('img');
		this._map__img.className='ggskin ggskin_image';
		this._map__img.setAttribute('src',basePath + 'images/map.png');
		this._map__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;');
		this._map__img.className='ggskin ggskin_image';
		this._map__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._map__img);
		this._map.appendChild(this._map__img);
		this._map.ggId="Map";
		this._map.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map.ggVisible=true;
		this._map.className='ggskin ggskin_image ';
		this._map.ggType='image';
		hs ='';
		hs+='height : 700px;';
		hs+='left : -159px;';
		hs+='position : absolute;';
		hs+='top : 170px;';
		hs+='visibility : inherit;';
		hs+='width : 131px;';
		this._map.setAttribute('style',hs);
		this._map.style[domTransform + 'Origin']='0% 0%';
		me._map.ggIsActive=function() {
			return false;
		}
		me._map.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._map.ggCurrentLogicStateScaling = -1;
		me._map.ggCurrentLogicStateAlpha = -1;
		this._map.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().height < 860)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map.ggCurrentLogicStateScaling = newLogicStateScaling;
				if (me._map.ggCurrentLogicStateScaling == 0) {
					me._map.style[domTransition]=cssPrefix + 'transform none,' + cssPrefix + 'transform none';
					me._map.ggParameter.sx = 0.8;
					me._map.ggParameter.sy = 0.8;
					me._map.style[domTransform]=parameterToTransform(me._map.ggParameter);
				}
				else {
					me._map.style[domTransition]=cssPrefix + 'transform none,' + cssPrefix + 'transform none';
					me._map.ggParameter.sx = 1;
					me._map.ggParameter.sy = 1;
					me._map.style[domTransform]=parameterToTransform(me._map.ggParameter);
				}
			}
		}
		this._map.ggUpdateConditionNodeChange=function () {
			var newLogicStateAlpha;
			if (
				(me.ggUserdata.tags.indexOf("Matrix") != -1)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				if (me._map.ggCurrentLogicStateAlpha == 0) {
					me._map.style[domTransition]='opacity none';
					me._map.style.visibility=me._map.ggVisible?'inherit':'hidden';
					me._map.style.opacity=0;
				}
				else {
					me._map.style[domTransition]='opacity none';
					me._map.style.visibility=me._map.ggVisible?'inherit':'hidden';
					me._map.style.opacity=1;
				}
			}
		}
		this._map.ggUpdatePosition=function () {
			me._map.ggUpdateConditionResize();
		}
		this._map.ggNodeChange=function () {
			me._map.ggUpdateConditionNodeChange();
		}
		this.__1=document.createElement('div');
		this.__1.ggMarkerNodeId='{node1}';
		nodeMarker.push(this.__1);
		this.__1.ggId="1";
		this.__1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__1.ggVisible=true;
		this.__1.className='ggskin ggskin_mark ';
		this.__1.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : -4px;';
		hs+='position : absolute;';
		hs+='top : 598px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this.__1.setAttribute('style',hs);
		this.__1.style[domTransform + 'Origin']='50% 50%';
		me.__1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me.__1.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this.__1.onclick=function () {
			me.player.openNext('{node1}');
		}
		this.__1.ggUpdateConditionNodeChange=function () {
				me.__1__normal.ggNodeChangeMain();
				me.__1__active.ggNodeChangeMain();
		}
		this.__1.ggUpdatePosition=function () {
		}
		this.__1.ggNodeChange=function () {
			me.__1.ggUpdateConditionNodeChange();
		}
		this._map.appendChild(this.__1);
		this.__7=document.createElement('div');
		this.__7.ggMarkerNodeId='{node7}';
		nodeMarker.push(this.__7);
		this.__7.ggId="7";
		this.__7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__7.ggVisible=true;
		this.__7.className='ggskin ggskin_mark ';
		this.__7.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 74px;';
		hs+='position : absolute;';
		hs+='top : 654px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this.__7.setAttribute('style',hs);
		this.__7.style[domTransform + 'Origin']='50% 50%';
		me.__7.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me.__7.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this.__7.onclick=function () {
			me.player.openNext('{node7}');
		}
		this.__7.ggUpdateConditionNodeChange=function () {
				me.__7__normal.ggNodeChangeMain();
				me.__7__active.ggNodeChangeMain();
		}
		this.__7.ggUpdatePosition=function () {
		}
		this.__7.ggNodeChange=function () {
			me.__7.ggUpdateConditionNodeChange();
		}
		this._map.appendChild(this.__7);
		this.__27=document.createElement('div');
		this.__27.ggMarkerNodeId='{node34}';
		nodeMarker.push(this.__27);
		this.__27.ggId="27";
		this.__27.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__27.ggVisible=true;
		this.__27.className='ggskin ggskin_mark ';
		this.__27.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 83px;';
		hs+='position : absolute;';
		hs+='top : 501px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this.__27.setAttribute('style',hs);
		this.__27.style[domTransform + 'Origin']='50% 50%';
		me.__27.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me.__27.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this.__27.onclick=function () {
			me.player.openNext('{node34}');
		}
		this.__27.ggUpdateConditionNodeChange=function () {
				me.__27__normal.ggNodeChangeMain();
				me.__27__active.ggNodeChangeMain();
		}
		this.__27.ggUpdatePosition=function () {
		}
		this.__27.ggNodeChange=function () {
			me.__27.ggUpdateConditionNodeChange();
		}
		this._map.appendChild(this.__27);
		this.__22=document.createElement('div');
		this.__22.ggMarkerNodeId='{node29}';
		nodeMarker.push(this.__22);
		this.__22.ggId="22";
		this.__22.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__22.ggVisible=true;
		this.__22.className='ggskin ggskin_mark ';
		this.__22.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this.__22.setAttribute('style',hs);
		this.__22.style[domTransform + 'Origin']='50% 50%';
		me.__22.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me.__22.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this.__22.onclick=function () {
			me.player.openNext('{node29}');
		}
		this.__22.ggUpdateConditionNodeChange=function () {
				me.__22__normal.ggNodeChangeMain();
				me.__22__active.ggNodeChangeMain();
		}
		this.__22.ggUpdatePosition=function () {
		}
		this.__22.ggNodeChange=function () {
			me.__22.ggUpdateConditionNodeChange();
		}
		this._map.appendChild(this.__22);
		this.__33=document.createElement('div');
		this.__33.ggMarkerNodeId='{node40}';
		nodeMarker.push(this.__33);
		this.__33.ggId="33";
		this.__33.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__33.ggVisible=true;
		this.__33.className='ggskin ggskin_mark ';
		this.__33.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 47px;';
		hs+='position : absolute;';
		hs+='top : 607px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this.__33.setAttribute('style',hs);
		this.__33.style[domTransform + 'Origin']='50% 50%';
		me.__33.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me.__33.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this.__33.onclick=function () {
			me.player.openNext('{node40}');
		}
		this.__33.ggUpdateConditionNodeChange=function () {
				me.__33__normal.ggNodeChangeMain();
				me.__33__active.ggNodeChangeMain();
		}
		this.__33.ggUpdatePosition=function () {
		}
		this.__33.ggNodeChange=function () {
			me.__33.ggUpdateConditionNodeChange();
		}
		this._map.appendChild(this.__33);
		this.__25=document.createElement('div');
		this.__25.ggMarkerNodeId='{node32}';
		nodeMarker.push(this.__25);
		this.__25.ggId="25";
		this.__25.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__25.ggVisible=true;
		this.__25.className='ggskin ggskin_mark ';
		this.__25.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 54px;';
		hs+='position : absolute;';
		hs+='top : 130px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this.__25.setAttribute('style',hs);
		this.__25.style[domTransform + 'Origin']='50% 50%';
		me.__25.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me.__25.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this.__25.onclick=function () {
			me.player.openNext('{node32}');
		}
		this.__25.ggUpdateConditionNodeChange=function () {
				me.__25__normal.ggNodeChangeMain();
				me.__25__active.ggNodeChangeMain();
		}
		this.__25.ggUpdatePosition=function () {
		}
		this.__25.ggNodeChange=function () {
			me.__25.ggUpdateConditionNodeChange();
		}
		this._map.appendChild(this.__25);
		this.divSkin.appendChild(this._map);
		this._hide_template=document.createElement('div');
		this._hide_template.ggId="hide_template";
		this._hide_template.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_template.ggVisible=false;
		this._hide_template.className='ggskin ggskin_container ';
		this._hide_template.ggType='container';
		hs ='';
		hs+='height : 121px;';
		hs+='left : 107px;';
		hs+='position : absolute;';
		hs+='top : 573px;';
		hs+='visibility : hidden;';
		hs+='width : 86px;';
		this._hide_template.setAttribute('style',hs);
		this._hide_template.style[domTransform + 'Origin']='50% 50%';
		me._hide_template.ggIsActive=function() {
			return false;
		}
		me._hide_template.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._hide_template.ggUpdatePosition=function () {
		}
		this._markertemplate=document.createElement('div');
		this._markertemplate.ggMarkerNodeId='';
		nodeMarker.push(this._markertemplate);
		this._markertemplate.ggId="markertemplate";
		this._markertemplate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._markertemplate.ggVisible=true;
		this._markertemplate.className='ggskin ggskin_mark ';
		this._markertemplate.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 179px;';
		hs+='position : absolute;';
		hs+='top : -228px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._markertemplate.setAttribute('style',hs);
		this._markertemplate.style[domTransform + 'Origin']='50% 50%';
		me._markertemplate.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._markertemplate.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._markertemplate.ggUpdateConditionNodeChange=function () {
				me._markertemplate__normal.ggNodeChangeMain();
				me._markertemplate__active.ggNodeChangeMain();
		}
		this._markertemplate.ggUpdatePosition=function () {
		}
		this._markertemplate.ggNodeChange=function () {
			me._markertemplate.ggUpdateConditionNodeChange();
		}
		this._hide_template.appendChild(this._markertemplate);
		this.divSkin.appendChild(this._hide_template);
		this._hotspots=document.createElement('div');
		this._hotspots.ggId="hotspots";
		this._hotspots.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hotspots.ggVisible=true;
		this._hotspots.className='ggskin ggskin_container ';
		this._hotspots.ggType='container';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 261px;';
		hs+='position : absolute;';
		hs+='top : 650px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._hotspots.setAttribute('style',hs);
		this._hotspots.style[domTransform + 'Origin']='50% 50%';
		me._hotspots.ggIsActive=function() {
			return false;
		}
		me._hotspots.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._hotspots.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._hotspots);
		this._logo=document.createElement('div');
		this._logo__img=document.createElement('img');
		this._logo__img.className='ggskin ggskin_button';
		this._logo__img.setAttribute('src',basePath + 'images/logo.png');
		this._logo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;');
		this._logo__img.className='ggskin ggskin_button';
		this._logo__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._logo__img);
		this._logo.appendChild(this._logo__img);
		this._logo.ggId="Logo";
		this._logo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._logo.ggVisible=true;
		this._logo.className='ggskin ggskin_button ';
		this._logo.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 77px;';
		hs+='left : 42px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		this._logo.setAttribute('style',hs);
		this._logo.style[domTransform + 'Origin']='50% 50%';
		me._logo.ggIsActive=function() {
			return false;
		}
		me._logo.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._logo.ondblclick=function () {
			var list=me.findElements("hs_std",true);
			if (list.length>0) {
				var e=list[0];
				var flag=e.ggOpacitiyActive;
			}
			while(list.length>0) {
				var e=list.pop();
				if (me.player.transitionsDisabled) {
					e.style[domTransition]='none';
				} else {
					e.style[domTransition]='all 500ms ease-out 0ms';
				}
				if (flag) {
					e.style.opacity='1';
					e.style.visibility=e.ggVisible?'inherit':'hidden';
				} else {
					e.style.opacity='0';
					e.style.visibility='hidden';
				}
				e.ggOpacitiyActive=!flag;
			}
		}
		this._logo.onmousedown=function () {
			var flag=me._map.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._map.style[domTransition]='none';
			} else {
				me._map.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._map.ggParameter.rx=0;me._map.ggParameter.ry=0;
				me._map.style[domTransform]=parameterToTransform(me._map.ggParameter);
			} else {
				me._map.ggParameter.rx=185;me._map.ggParameter.ry=0;
				me._map.style[domTransform]=parameterToTransform(me._map.ggParameter);
			}
			me._map.ggPositonActive=!flag;
		}
		this._logo.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._logo);
		this._matrix=document.createElement('div');
		this._matrix.ggId="Matrix";
		this._matrix.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._matrix.ggVisible=false;
		this._matrix.className='ggskin ggskin_container ';
		this._matrix.ggType='container';
		hs ='';
		hs+='height : 350px;';
		hs+='left : 11px;';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		this._matrix.setAttribute('style',hs);
		this._matrix.style[domTransform + 'Origin']='0% 0%';
		me._matrix.ggIsActive=function() {
			return false;
		}
		me._matrix.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._matrix.ggCurrentLogicStateVisible = -1;
		this._matrix.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.ggUserdata.tags.indexOf("Matrix") != -1)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(me.ggUserdata.tags.indexOf("Matrix") == -1)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._matrix.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._matrix.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._matrix.ggCurrentLogicStateVisible == 0) {
					me._matrix.style.visibility="inherit";
					me._matrix.ggVisible=true;
				}
				else if (me._matrix.ggCurrentLogicStateVisible == 1) {
					me._matrix.style.visibility="hidden";
					me._matrix.ggVisible=false;
				}
				else {
					me._matrix.style.visibility="hidden";
					me._matrix.ggVisible=false;
				}
			}
		}
		this._matrix.ggUpdatePosition=function () {
		}
		this._matrix.ggNodeChange=function () {
			me._matrix.ggUpdateConditionNodeChange();
		}
		this._rectangle_2=document.createElement('div');
		this._rectangle_2.ggId="Rectangle 2";
		this._rectangle_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_2.ggVisible=true;
		this._rectangle_2.className='ggskin ggskin_rectangle ';
		this._rectangle_2.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 220px;';
		hs+='left : 33px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		this._rectangle_2.setAttribute('style',hs);
		this._rectangle_2.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rectangle_2.ggUpdatePosition=function () {
		}
		this._matrix.appendChild(this._rectangle_2);
		this._marker_9=document.createElement('div');
		this._marker_9.ggMarkerNodeId='{node17}';
		nodeMarker.push(this._marker_9);
		this._marker_9.ggId="Marker 9";
		this._marker_9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_9.ggVisible=true;
		this._marker_9.className='ggskin ggskin_mark ';
		this._marker_9.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 204px;';
		hs+='position : absolute;';
		hs+='top : 195px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_9.setAttribute('style',hs);
		this._marker_9.style[domTransform + 'Origin']='50% 50%';
		me._marker_9.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_9.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_9.onclick=function () {
			me.player.openNext('{node17}');
		}
		this._marker_9.ggUpdateConditionNodeChange=function () {
				me._marker_9__normal.ggNodeChangeMain();
				me._marker_9__active.ggNodeChangeMain();
		}
		this._marker_9.ggUpdatePosition=function () {
		}
		this._marker_9.ggNodeChange=function () {
			me._marker_9.ggUpdateConditionNodeChange();
		}
		this._matrix.appendChild(this._marker_9);
		this._marker_8=document.createElement('div');
		this._marker_8.ggMarkerNodeId='{node18}';
		nodeMarker.push(this._marker_8);
		this._marker_8.ggId="Marker 8";
		this._marker_8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_8.ggVisible=true;
		this._marker_8.className='ggskin ggskin_mark ';
		this._marker_8.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 124px;';
		hs+='position : absolute;';
		hs+='top : 195px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_8.setAttribute('style',hs);
		this._marker_8.style[domTransform + 'Origin']='50% 50%';
		me._marker_8.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_8.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_8.onclick=function () {
			me.player.openNext('{node18}');
		}
		this._marker_8.ggUpdateConditionNodeChange=function () {
				me._marker_8__normal.ggNodeChangeMain();
				me._marker_8__active.ggNodeChangeMain();
		}
		this._marker_8.ggUpdatePosition=function () {
		}
		this._marker_8.ggNodeChange=function () {
			me._marker_8.ggUpdateConditionNodeChange();
		}
		this._matrix.appendChild(this._marker_8);
		this._marker_7=document.createElement('div');
		this._marker_7.ggMarkerNodeId='{node19}';
		nodeMarker.push(this._marker_7);
		this._marker_7.ggId="Marker 7";
		this._marker_7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_7.ggVisible=true;
		this._marker_7.className='ggskin ggskin_mark ';
		this._marker_7.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 44px;';
		hs+='position : absolute;';
		hs+='top : 195px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_7.setAttribute('style',hs);
		this._marker_7.style[domTransform + 'Origin']='50% 50%';
		me._marker_7.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_7.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_7.onclick=function () {
			me.player.openNext('{node19}');
		}
		this._marker_7.ggUpdateConditionNodeChange=function () {
				me._marker_7__normal.ggNodeChangeMain();
				me._marker_7__active.ggNodeChangeMain();
		}
		this._marker_7.ggUpdatePosition=function () {
		}
		this._marker_7.ggNodeChange=function () {
			me._marker_7.ggUpdateConditionNodeChange();
		}
		this._matrix.appendChild(this._marker_7);
		this._marker_6=document.createElement('div');
		this._marker_6.ggMarkerNodeId='{node22}';
		nodeMarker.push(this._marker_6);
		this._marker_6.ggId="Marker 6";
		this._marker_6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_6.ggVisible=true;
		this._marker_6.className='ggskin ggskin_mark ';
		this._marker_6.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 204px;';
		hs+='position : absolute;';
		hs+='top : 115px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_6.setAttribute('style',hs);
		this._marker_6.style[domTransform + 'Origin']='50% 50%';
		me._marker_6.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_6.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_6.onclick=function () {
			me.player.openNext('{node22}');
		}
		this._marker_6.ggUpdateConditionNodeChange=function () {
				me._marker_6__normal.ggNodeChangeMain();
				me._marker_6__active.ggNodeChangeMain();
		}
		this._marker_6.ggUpdatePosition=function () {
		}
		this._marker_6.ggNodeChange=function () {
			me._marker_6.ggUpdateConditionNodeChange();
		}
		this._matrix.appendChild(this._marker_6);
		this._marker_5=document.createElement('div');
		this._marker_5.ggMarkerNodeId='{node23}';
		nodeMarker.push(this._marker_5);
		this._marker_5.ggId="Marker 5";
		this._marker_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_5.ggVisible=true;
		this._marker_5.className='ggskin ggskin_mark ';
		this._marker_5.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 124px;';
		hs+='position : absolute;';
		hs+='top : 115px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_5.setAttribute('style',hs);
		this._marker_5.style[domTransform + 'Origin']='50% 50%';
		me._marker_5.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_5.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_5.onclick=function () {
			me.player.openNext('{node23}');
		}
		this._marker_5.ggUpdateConditionNodeChange=function () {
				me._marker_5__normal.ggNodeChangeMain();
				me._marker_5__active.ggNodeChangeMain();
		}
		this._marker_5.ggUpdatePosition=function () {
		}
		this._marker_5.ggNodeChange=function () {
			me._marker_5.ggUpdateConditionNodeChange();
		}
		this._matrix.appendChild(this._marker_5);
		this._marker_4=document.createElement('div');
		this._marker_4.ggMarkerNodeId='{node24}';
		nodeMarker.push(this._marker_4);
		this._marker_4.ggId="Marker 4";
		this._marker_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_4.ggVisible=true;
		this._marker_4.className='ggskin ggskin_mark ';
		this._marker_4.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 43px;';
		hs+='position : absolute;';
		hs+='top : 115px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_4.setAttribute('style',hs);
		this._marker_4.style[domTransform + 'Origin']='50% 50%';
		me._marker_4.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_4.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_4.onclick=function () {
			me.player.openNext('{node24}');
		}
		this._marker_4.ggUpdateConditionNodeChange=function () {
				me._marker_4__normal.ggNodeChangeMain();
				me._marker_4__active.ggNodeChangeMain();
		}
		this._marker_4.ggUpdatePosition=function () {
		}
		this._marker_4.ggNodeChange=function () {
			me._marker_4.ggUpdateConditionNodeChange();
		}
		this._matrix.appendChild(this._marker_4);
		this._marker_3=document.createElement('div');
		this._marker_3.ggMarkerNodeId='{node16}';
		nodeMarker.push(this._marker_3);
		this._marker_3.ggId="Marker 3";
		this._marker_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_3.ggVisible=true;
		this._marker_3.className='ggskin ggskin_mark ';
		this._marker_3.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 204px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_3.setAttribute('style',hs);
		this._marker_3.style[domTransform + 'Origin']='50% 50%';
		me._marker_3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_3.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_3.onclick=function () {
			me.player.openNext('{node16}');
		}
		this._marker_3.ggUpdateConditionNodeChange=function () {
				me._marker_3__normal.ggNodeChangeMain();
				me._marker_3__active.ggNodeChangeMain();
		}
		this._marker_3.ggUpdatePosition=function () {
		}
		this._marker_3.ggNodeChange=function () {
			me._marker_3.ggUpdateConditionNodeChange();
		}
		this._matrix.appendChild(this._marker_3);
		this._marker_2=document.createElement('div');
		this._marker_2.ggMarkerNodeId='{node15}';
		nodeMarker.push(this._marker_2);
		this._marker_2.ggId="Marker 2";
		this._marker_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_2.ggVisible=true;
		this._marker_2.className='ggskin ggskin_mark ';
		this._marker_2.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 124px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_2.setAttribute('style',hs);
		this._marker_2.style[domTransform + 'Origin']='50% 50%';
		me._marker_2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_2.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_2.onclick=function () {
			me.player.openNext('{node15}');
		}
		this._marker_2.ggUpdateConditionNodeChange=function () {
				me._marker_2__normal.ggNodeChangeMain();
				me._marker_2__active.ggNodeChangeMain();
		}
		this._marker_2.ggUpdatePosition=function () {
		}
		this._marker_2.ggNodeChange=function () {
			me._marker_2.ggUpdateConditionNodeChange();
		}
		this._matrix.appendChild(this._marker_2);
		this._marker_1=document.createElement('div');
		this._marker_1.ggMarkerNodeId='{node14}';
		nodeMarker.push(this._marker_1);
		this._marker_1.ggId="Marker 1";
		this._marker_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_1.ggVisible=true;
		this._marker_1.className='ggskin ggskin_mark ';
		this._marker_1.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 44px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_1.setAttribute('style',hs);
		this._marker_1.style[domTransform + 'Origin']='50% 50%';
		me._marker_1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_1.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_1.onclick=function () {
			me.player.openNext('{node14}');
		}
		this._marker_1.ggUpdateConditionNodeChange=function () {
				me._marker_1__normal.ggNodeChangeMain();
				me._marker_1__active.ggNodeChangeMain();
		}
		this._marker_1.ggUpdatePosition=function () {
		}
		this._marker_1.ggNodeChange=function () {
			me._marker_1.ggUpdateConditionNodeChange();
		}
		this._matrix.appendChild(this._marker_1);
		this._marker_10_exit=document.createElement('div');
		this._marker_10_exit.ggMarkerNodeId='{node7}';
		nodeMarker.push(this._marker_10_exit);
		this._marker_10_exit.ggId="Marker 10 exit";
		this._marker_10_exit.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_10_exit.ggVisible=true;
		this._marker_10_exit.className='ggskin ggskin_mark ';
		this._marker_10_exit.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 44px;';
		hs+='position : absolute;';
		hs+='top : 264px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		this._marker_10_exit.setAttribute('style',hs);
		this._marker_10_exit.style[domTransform + 'Origin']='50% 50%';
		me._marker_10_exit.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_10_exit.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_10_exit.onclick=function () {
			me.player.openNext('{node7}');
		}
		this._marker_10_exit.ggUpdateConditionNodeChange=function () {
				me._marker_10_exit__normal.ggNodeChangeMain();
				me._marker_10_exit__active.ggNodeChangeMain();
		}
		this._marker_10_exit.ggUpdatePosition=function () {
		}
		this._marker_10_exit.ggNodeChange=function () {
			me._marker_10_exit.ggUpdateConditionNodeChange();
		}
		this._matrix.appendChild(this._marker_10_exit);
		this.divSkin.appendChild(this._matrix);
		this._matrixsplash=document.createElement('div');
		this._matrixsplash.ggId="MatrixSplash";
		this._matrixsplash.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._matrixsplash.ggVisible=true;
		this._matrixsplash.className='ggskin ggskin_container ';
		this._matrixsplash.ggType='container';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 300px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		this._matrixsplash.setAttribute('style',hs);
		this._matrixsplash.style[domTransform + 'Origin']='50% 50%';
		me._matrixsplash.ggIsActive=function() {
			return false;
		}
		me._matrixsplash.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._matrixsplash.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._matrixsplash);
		this._text_1=document.createElement('div');
		this._text_1__text=document.createElement('div');
		this._text_1.className='ggskin ggskin_textdiv';
		this._text_1.ggTextDiv=this._text_1__text;
		this._text_1.ggId="Text 1";
		this._text_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_1.ggVisible=true;
		this._text_1.className='ggskin ggskin_text ';
		this._text_1.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -620px;';
		hs+='position : absolute;';
		hs+='top : 145px;';
		hs+='visibility : inherit;';
		hs+='width : 298px;';
		this._text_1.setAttribute('style',hs);
		this._text_1.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.784314);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(117,120,123,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_1__text.setAttribute('style',hs);
		this._text_1__text.innerHTML="<span style=\"font-size: 24px; font-family: Calibri ;\">Klikk p\xe5 matrisen for \xe5 navigere p\xe5 blokkveggen. <br> Trykk \"X\" for \xe5 g\xe5 tilbake.<\/span> ";
		this._text_1.appendChild(this._text_1__text);
		me._text_1.ggIsActive=function() {
			return false;
		}
		me._text_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._text_1.ggCurrentLogicStatePosition = -1;
		this._text_1.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.ggUserdata.tags.indexOf("MatrixStart") != -1) && 
				(me.player.nodeVisited(me._text_1.ggElementNodeId()) == false)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(me.ggUserdata.tags.indexOf("MatrixStart") == -1) || 
				(me.player.nodeVisited(me._text_1.ggElementNodeId()) == true)
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._text_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._text_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				if (me._text_1.ggCurrentLogicStatePosition == 0) {
					me._text_1.style[domTransition]='left 1000ms ease 0ms, top 1000ms ease 0ms';
					me._text_1.style.left='300px';
					me._text_1.style.top='145px';
				}
				else if (me._text_1.ggCurrentLogicStatePosition == 1) {
					me._text_1.style[domTransition]='left 1000ms ease 0ms, top 1000ms ease 0ms';
					me._text_1.style.left='-620px';
					me._text_1.style.top='145px';
				}
				else {
					me._text_1.style[domTransition]='left 1000ms ease 0ms, top 1000ms ease 0ms';
					me._text_1.style.left='-620px';
					me._text_1.style.top='145px';
				}
			}
		}
		this._text_1.ggUpdatePosition=function () {
		}
		this._text_1.ggNodeChange=function () {
			me._text_1.ggUpdateConditionNodeChange();
		}
		this.divSkin.appendChild(this._text_1);
		this._rectangle_1=document.createElement('div');
		this._rectangle_1.ggId="Rectangle 1";
		this._rectangle_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_1.ggVisible=true;
		this._rectangle_1.className='ggskin ggskin_rectangle ';
		this._rectangle_1.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='height : 1999px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 2599px;';
		this._rectangle_1.setAttribute('style',hs);
		this._rectangle_1.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			return false;
		}
		me._rectangle_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._rectangle_1.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._rectangle_1);
		this._splash=document.createElement('div');
		this._splash__img=document.createElement('img');
		this._splash__img.className='ggskin ggskin_button';
		this._splash__img.setAttribute('src',basePath + 'images/splash.jpg');
		this._splash__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;');
		this._splash__img.className='ggskin ggskin_button';
		this._splash__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._splash__img);
		this._splash.appendChild(this._splash__img);
		this._splash.ggId="Splash";
		this._splash.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._splash.ggVisible=true;
		this._splash.className='ggskin ggskin_button ';
		this._splash.ggType='button';
		hs ='';
		hs+='height : 1080px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 1920px;';
		this._splash.setAttribute('style',hs);
		this._splash.style[domTransform + 'Origin']='50% 50%';
		me._splash.ggIsActive=function() {
			return false;
		}
		me._splash.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._splash.onmousedown=function () {
			me._splash.style[domTransition]='none';
			me._splash.style.visibility='hidden';
			me._splash.ggVisible=false;
			me._rectangle_1.style[domTransition]='none';
			me._rectangle_1.style.visibility='hidden';
			me._rectangle_1.ggVisible=false;
		}
		me._splash.ggCurrentLogicStateSize = -1;
		this._splash.ggUpdateConditionResize=function () {
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width < 1600)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._splash.ggCurrentLogicStateSize != newLogicStateSize) {
				me._splash.ggCurrentLogicStateSize = newLogicStateSize;
				if (me._splash.ggCurrentLogicStateSize == 0) {
					me._splash.style[domTransition]='width none, height none';
					me._splash.style.width='1280px';
					me._splash.style.height='720px';
				}
				else {
					me._splash.style[domTransition]='width none, height none';
					me._splash.style.width='1920px';
					me._splash.style.height='1080px';
				}
			}
		}
		this._splash.ggUpdatePosition=function () {
			me._splash.ggUpdateConditionResize();
		}
		this.divSkin.appendChild(this._splash);
		this.__1__normal=new SkinElement_inactive_Class(this,this.__1);
		this.__1__normal.style.visibility='inherit';
		this.__1__normal.style.left='0px';
		this.__1__normal.style.top='0px';
		this.__1.ggMarkerNormal=this.__1__normal;
		this.__1__active=new SkinElement_active_Class(this,this.__1);
		this.__1__active.style.visibility='hidden';
		this.__1__active.style.left='0px';
		this.__1__active.style.top='0px';
		this.__1.ggMarkerActive=this.__1__active;
		if (this.__1.firstChild) {
			this.__1.insertBefore(this.__1__active,this.__1.firstChild);
		} else {
			this.__1.appendChild(this.__1__active);
		}
		if (this.__1.firstChild) {
			this.__1.insertBefore(this.__1__normal,this.__1.firstChild);
		} else {
			this.__1.appendChild(this.__1__normal);
		}
		this.__7__normal=new SkinElement_inactive_Class(this,this.__7);
		this.__7__normal.style.visibility='inherit';
		this.__7__normal.style.left='0px';
		this.__7__normal.style.top='0px';
		this.__7.ggMarkerNormal=this.__7__normal;
		this.__7__active=new SkinElement_active_Class(this,this.__7);
		this.__7__active.style.visibility='hidden';
		this.__7__active.style.left='0px';
		this.__7__active.style.top='0px';
		this.__7.ggMarkerActive=this.__7__active;
		if (this.__7.firstChild) {
			this.__7.insertBefore(this.__7__active,this.__7.firstChild);
		} else {
			this.__7.appendChild(this.__7__active);
		}
		if (this.__7.firstChild) {
			this.__7.insertBefore(this.__7__normal,this.__7.firstChild);
		} else {
			this.__7.appendChild(this.__7__normal);
		}
		this.__27__normal=new SkinElement_inactive_Class(this,this.__27);
		this.__27__normal.style.visibility='inherit';
		this.__27__normal.style.left='0px';
		this.__27__normal.style.top='0px';
		this.__27.ggMarkerNormal=this.__27__normal;
		this.__27__active=new SkinElement_active_Class(this,this.__27);
		this.__27__active.style.visibility='hidden';
		this.__27__active.style.left='0px';
		this.__27__active.style.top='0px';
		this.__27.ggMarkerActive=this.__27__active;
		if (this.__27.firstChild) {
			this.__27.insertBefore(this.__27__active,this.__27.firstChild);
		} else {
			this.__27.appendChild(this.__27__active);
		}
		if (this.__27.firstChild) {
			this.__27.insertBefore(this.__27__normal,this.__27.firstChild);
		} else {
			this.__27.appendChild(this.__27__normal);
		}
		this.__22__normal=new SkinElement_inactive_Class(this,this.__22);
		this.__22__normal.style.visibility='inherit';
		this.__22__normal.style.left='0px';
		this.__22__normal.style.top='0px';
		this.__22.ggMarkerNormal=this.__22__normal;
		this.__22__active=new SkinElement_active_Class(this,this.__22);
		this.__22__active.style.visibility='hidden';
		this.__22__active.style.left='0px';
		this.__22__active.style.top='0px';
		this.__22.ggMarkerActive=this.__22__active;
		if (this.__22.firstChild) {
			this.__22.insertBefore(this.__22__active,this.__22.firstChild);
		} else {
			this.__22.appendChild(this.__22__active);
		}
		if (this.__22.firstChild) {
			this.__22.insertBefore(this.__22__normal,this.__22.firstChild);
		} else {
			this.__22.appendChild(this.__22__normal);
		}
		this.__33__normal=new SkinElement_inactive_Class(this,this.__33);
		this.__33__normal.style.visibility='inherit';
		this.__33__normal.style.left='0px';
		this.__33__normal.style.top='0px';
		this.__33.ggMarkerNormal=this.__33__normal;
		this.__33__active=new SkinElement_active_Class(this,this.__33);
		this.__33__active.style.visibility='hidden';
		this.__33__active.style.left='0px';
		this.__33__active.style.top='0px';
		this.__33.ggMarkerActive=this.__33__active;
		if (this.__33.firstChild) {
			this.__33.insertBefore(this.__33__active,this.__33.firstChild);
		} else {
			this.__33.appendChild(this.__33__active);
		}
		if (this.__33.firstChild) {
			this.__33.insertBefore(this.__33__normal,this.__33.firstChild);
		} else {
			this.__33.appendChild(this.__33__normal);
		}
		this.__25__normal=new SkinElement_inactive_Class(this,this.__25);
		this.__25__normal.style.visibility='inherit';
		this.__25__normal.style.left='0px';
		this.__25__normal.style.top='0px';
		this.__25.ggMarkerNormal=this.__25__normal;
		this.__25__active=new SkinElement_active_Class(this,this.__25);
		this.__25__active.style.visibility='hidden';
		this.__25__active.style.left='0px';
		this.__25__active.style.top='0px';
		this.__25.ggMarkerActive=this.__25__active;
		if (this.__25.firstChild) {
			this.__25.insertBefore(this.__25__active,this.__25.firstChild);
		} else {
			this.__25.appendChild(this.__25__active);
		}
		if (this.__25.firstChild) {
			this.__25.insertBefore(this.__25__normal,this.__25.firstChild);
		} else {
			this.__25.appendChild(this.__25__normal);
		}
		this._markertemplate__normal=new SkinElement_inactive_Class(this,this._markertemplate);
		this._markertemplate__normal.style.visibility='inherit';
		this._markertemplate__normal.style.left='0px';
		this._markertemplate__normal.style.top='0px';
		this._markertemplate.ggMarkerNormal=this._markertemplate__normal;
		this._markertemplate__active=new SkinElement_active_Class(this,this._markertemplate);
		this._markertemplate__active.style.visibility='hidden';
		this._markertemplate__active.style.left='0px';
		this._markertemplate__active.style.top='0px';
		this._markertemplate.ggMarkerActive=this._markertemplate__active;
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__active,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__active);
		}
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__normal,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__normal);
		}
		this._marker_9__normal=new SkinElement_m_inactive_Class(this,this._marker_9);
		this._marker_9__normal.style.visibility='inherit';
		this._marker_9__normal.style.left='0px';
		this._marker_9__normal.style.top='0px';
		this._marker_9.ggMarkerNormal=this._marker_9__normal;
		this._marker_9__active=new SkinElement_m_active_Class(this,this._marker_9);
		this._marker_9__active.style.visibility='hidden';
		this._marker_9__active.style.left='0px';
		this._marker_9__active.style.top='0px';
		this._marker_9.ggMarkerActive=this._marker_9__active;
		if (this._marker_9.firstChild) {
			this._marker_9.insertBefore(this._marker_9__active,this._marker_9.firstChild);
		} else {
			this._marker_9.appendChild(this._marker_9__active);
		}
		if (this._marker_9.firstChild) {
			this._marker_9.insertBefore(this._marker_9__normal,this._marker_9.firstChild);
		} else {
			this._marker_9.appendChild(this._marker_9__normal);
		}
		this._marker_8__normal=new SkinElement_m_inactive_Class(this,this._marker_8);
		this._marker_8__normal.style.visibility='inherit';
		this._marker_8__normal.style.left='0px';
		this._marker_8__normal.style.top='0px';
		this._marker_8.ggMarkerNormal=this._marker_8__normal;
		this._marker_8__active=new SkinElement_m_active_Class(this,this._marker_8);
		this._marker_8__active.style.visibility='hidden';
		this._marker_8__active.style.left='0px';
		this._marker_8__active.style.top='0px';
		this._marker_8.ggMarkerActive=this._marker_8__active;
		if (this._marker_8.firstChild) {
			this._marker_8.insertBefore(this._marker_8__active,this._marker_8.firstChild);
		} else {
			this._marker_8.appendChild(this._marker_8__active);
		}
		if (this._marker_8.firstChild) {
			this._marker_8.insertBefore(this._marker_8__normal,this._marker_8.firstChild);
		} else {
			this._marker_8.appendChild(this._marker_8__normal);
		}
		this._marker_7__normal=new SkinElement_m_inactive_Class(this,this._marker_7);
		this._marker_7__normal.style.visibility='inherit';
		this._marker_7__normal.style.left='0px';
		this._marker_7__normal.style.top='0px';
		this._marker_7.ggMarkerNormal=this._marker_7__normal;
		this._marker_7__active=new SkinElement_m_active_Class(this,this._marker_7);
		this._marker_7__active.style.visibility='hidden';
		this._marker_7__active.style.left='0px';
		this._marker_7__active.style.top='0px';
		this._marker_7.ggMarkerActive=this._marker_7__active;
		if (this._marker_7.firstChild) {
			this._marker_7.insertBefore(this._marker_7__active,this._marker_7.firstChild);
		} else {
			this._marker_7.appendChild(this._marker_7__active);
		}
		if (this._marker_7.firstChild) {
			this._marker_7.insertBefore(this._marker_7__normal,this._marker_7.firstChild);
		} else {
			this._marker_7.appendChild(this._marker_7__normal);
		}
		this._marker_6__normal=new SkinElement_m_inactive_Class(this,this._marker_6);
		this._marker_6__normal.style.visibility='inherit';
		this._marker_6__normal.style.left='0px';
		this._marker_6__normal.style.top='0px';
		this._marker_6.ggMarkerNormal=this._marker_6__normal;
		this._marker_6__active=new SkinElement_m_active_Class(this,this._marker_6);
		this._marker_6__active.style.visibility='hidden';
		this._marker_6__active.style.left='0px';
		this._marker_6__active.style.top='0px';
		this._marker_6.ggMarkerActive=this._marker_6__active;
		if (this._marker_6.firstChild) {
			this._marker_6.insertBefore(this._marker_6__active,this._marker_6.firstChild);
		} else {
			this._marker_6.appendChild(this._marker_6__active);
		}
		if (this._marker_6.firstChild) {
			this._marker_6.insertBefore(this._marker_6__normal,this._marker_6.firstChild);
		} else {
			this._marker_6.appendChild(this._marker_6__normal);
		}
		this._marker_5__normal=new SkinElement_m_inactive_Class(this,this._marker_5);
		this._marker_5__normal.style.visibility='inherit';
		this._marker_5__normal.style.left='0px';
		this._marker_5__normal.style.top='0px';
		this._marker_5.ggMarkerNormal=this._marker_5__normal;
		this._marker_5__active=new SkinElement_m_active_Class(this,this._marker_5);
		this._marker_5__active.style.visibility='hidden';
		this._marker_5__active.style.left='0px';
		this._marker_5__active.style.top='0px';
		this._marker_5.ggMarkerActive=this._marker_5__active;
		if (this._marker_5.firstChild) {
			this._marker_5.insertBefore(this._marker_5__active,this._marker_5.firstChild);
		} else {
			this._marker_5.appendChild(this._marker_5__active);
		}
		if (this._marker_5.firstChild) {
			this._marker_5.insertBefore(this._marker_5__normal,this._marker_5.firstChild);
		} else {
			this._marker_5.appendChild(this._marker_5__normal);
		}
		this._marker_4__normal=new SkinElement_m_inactive_Class(this,this._marker_4);
		this._marker_4__normal.style.visibility='inherit';
		this._marker_4__normal.style.left='0px';
		this._marker_4__normal.style.top='0px';
		this._marker_4.ggMarkerNormal=this._marker_4__normal;
		this._marker_4__active=new SkinElement_m_active_Class(this,this._marker_4);
		this._marker_4__active.style.visibility='hidden';
		this._marker_4__active.style.left='0px';
		this._marker_4__active.style.top='0px';
		this._marker_4.ggMarkerActive=this._marker_4__active;
		if (this._marker_4.firstChild) {
			this._marker_4.insertBefore(this._marker_4__active,this._marker_4.firstChild);
		} else {
			this._marker_4.appendChild(this._marker_4__active);
		}
		if (this._marker_4.firstChild) {
			this._marker_4.insertBefore(this._marker_4__normal,this._marker_4.firstChild);
		} else {
			this._marker_4.appendChild(this._marker_4__normal);
		}
		this._marker_3__normal=new SkinElement_m_inactive_Class(this,this._marker_3);
		this._marker_3__normal.style.visibility='inherit';
		this._marker_3__normal.style.left='0px';
		this._marker_3__normal.style.top='0px';
		this._marker_3.ggMarkerNormal=this._marker_3__normal;
		this._marker_3__active=new SkinElement_m_active_Class(this,this._marker_3);
		this._marker_3__active.style.visibility='hidden';
		this._marker_3__active.style.left='0px';
		this._marker_3__active.style.top='0px';
		this._marker_3.ggMarkerActive=this._marker_3__active;
		if (this._marker_3.firstChild) {
			this._marker_3.insertBefore(this._marker_3__active,this._marker_3.firstChild);
		} else {
			this._marker_3.appendChild(this._marker_3__active);
		}
		if (this._marker_3.firstChild) {
			this._marker_3.insertBefore(this._marker_3__normal,this._marker_3.firstChild);
		} else {
			this._marker_3.appendChild(this._marker_3__normal);
		}
		this._marker_2__normal=new SkinElement_m_inactive_Class(this,this._marker_2);
		this._marker_2__normal.style.visibility='inherit';
		this._marker_2__normal.style.left='0px';
		this._marker_2__normal.style.top='0px';
		this._marker_2.ggMarkerNormal=this._marker_2__normal;
		this._marker_2__active=new SkinElement_m_active_Class(this,this._marker_2);
		this._marker_2__active.style.visibility='hidden';
		this._marker_2__active.style.left='0px';
		this._marker_2__active.style.top='0px';
		this._marker_2.ggMarkerActive=this._marker_2__active;
		if (this._marker_2.firstChild) {
			this._marker_2.insertBefore(this._marker_2__active,this._marker_2.firstChild);
		} else {
			this._marker_2.appendChild(this._marker_2__active);
		}
		if (this._marker_2.firstChild) {
			this._marker_2.insertBefore(this._marker_2__normal,this._marker_2.firstChild);
		} else {
			this._marker_2.appendChild(this._marker_2__normal);
		}
		this._marker_1__normal=new SkinElement_m_inactive_Class(this,this._marker_1);
		this._marker_1__normal.style.visibility='inherit';
		this._marker_1__normal.style.left='0px';
		this._marker_1__normal.style.top='0px';
		this._marker_1.ggMarkerNormal=this._marker_1__normal;
		this._marker_1__active=new SkinElement_m_active_Class(this,this._marker_1);
		this._marker_1__active.style.visibility='hidden';
		this._marker_1__active.style.left='0px';
		this._marker_1__active.style.top='0px';
		this._marker_1.ggMarkerActive=this._marker_1__active;
		if (this._marker_1.firstChild) {
			this._marker_1.insertBefore(this._marker_1__active,this._marker_1.firstChild);
		} else {
			this._marker_1.appendChild(this._marker_1__active);
		}
		if (this._marker_1.firstChild) {
			this._marker_1.insertBefore(this._marker_1__normal,this._marker_1.firstChild);
		} else {
			this._marker_1.appendChild(this._marker_1__normal);
		}
		this._marker_10_exit__normal=new SkinElement_exit_Class(this,this._marker_10_exit);
		this._marker_10_exit__normal.style.visibility='inherit';
		this._marker_10_exit__normal.style.left='0px';
		this._marker_10_exit__normal.style.top='0px';
		this._marker_10_exit.ggMarkerNormal=this._marker_10_exit__normal;
		this._marker_10_exit__active=new SkinElement_exit_Class(this,this._marker_10_exit);
		this._marker_10_exit__active.style.visibility='hidden';
		this._marker_10_exit__active.style.left='0px';
		this._marker_10_exit__active.style.top='0px';
		this._marker_10_exit.ggMarkerActive=this._marker_10_exit__active;
		if (this._marker_10_exit.firstChild) {
			this._marker_10_exit.insertBefore(this._marker_10_exit__active,this._marker_10_exit.firstChild);
		} else {
			this._marker_10_exit.appendChild(this._marker_10_exit__active);
		}
		if (this._marker_10_exit.firstChild) {
			this._marker_10_exit.insertBefore(this._marker_10_exit__normal,this._marker_10_exit.firstChild);
		} else {
			this._marker_10_exit.appendChild(this._marker_10_exit__normal);
		}
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
			me._matrix.style[domTransition]='none';
			me._matrix.style.visibility='inherit';
			me._matrix.ggVisible=true;
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
		me._map.ggNodeChange();
		me.__1.ggNodeChange();
		me.__7.ggNodeChange();
		me.__27.ggNodeChange();
		me.__22.ggNodeChange();
		me.__33.ggNodeChange();
		me.__25.ggNodeChange();
		me._markertemplate.ggNodeChange();
		me._matrix.ggNodeChange();
		me._marker_9.ggNodeChange();
		me._marker_8.ggNodeChange();
		me._marker_7.ggNodeChange();
		me._marker_6.ggNodeChange();
		me._marker_5.ggNodeChange();
		me._marker_4.ggNodeChange();
		me._marker_3.ggNodeChange();
		me._marker_2.ggNodeChange();
		me._marker_1.ggNodeChange();
		me._marker_10_exit.ggNodeChange();
		me._text_1.ggNodeChange();
		var newMarker=[];
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		{
			this.__div=document.createElement('div');
			this.__div.ggId="hs_std";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 273px;';
			hs+='position : absolute;';
			hs+='top : -75px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._hs_std_text=document.createElement('div');
			this._hs_std_text__text=document.createElement('div');
			this._hs_std_text.className='ggskin ggskin_textdiv';
			this._hs_std_text.ggTextDiv=this._hs_std_text__text;
			this._hs_std_text.ggId="hs_std_text";
			this._hs_std_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hs_std_text.ggVisible=true;
			this._hs_std_text.className='ggskin ggskin_text ';
			this._hs_std_text.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : -109px;';
			hs+='position : absolute;';
			hs+='top : 39px;';
			hs+='visibility : inherit;';
			hs+='width : 198px;';
			this._hs_std_text.setAttribute('style',hs);
			this._hs_std_text.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='border: 0px solid #ffffff;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hs_std_text__text.setAttribute('style',hs);
			this._hs_std_text__text.innerHTML=me.hotspot.title;
			this._hs_std_text.appendChild(this._hs_std_text__text);
			me._hs_std_text.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hs_std_text.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hs_std_text.ggUpdatePosition=function () {
				this.style[domTransition]='none';
				this.style.left=(-109 + (198-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._hs_std_text);
			this._button_std=document.createElement('div');
			this._button_std__img=document.createElement('img');
			this._button_std__img.className='ggskin ggskin_button';
			this._button_std__img.setAttribute('src',basePath + 'images/button_std.png');
			this._button_std__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;');
			this._button_std__img.className='ggskin ggskin_button';
			this._button_std__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._button_std__img);
			this._button_std.appendChild(this._button_std__img);
			this._button_std.ggId="Button std";
			this._button_std.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._button_std.ggVisible=true;
			this._button_std.className='ggskin ggskin_button ';
			this._button_std.ggType='button';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 70px;';
			hs+='left : -45px;';
			hs+='position : absolute;';
			hs+='top : -35px;';
			hs+='visibility : inherit;';
			hs+='width : 70px;';
			this._button_std.setAttribute('style',hs);
			this._button_std.style[domTransform + 'Origin']='50% 50%';
			me._button_std.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._button_std.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._button_std.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._button_std);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	function SkinElement_inactive_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._inactive=document.createElement('div');
		this._inactive__img=document.createElement('img');
		this._inactive__img.className='ggskin ggskin_image';
		this._inactive__img.setAttribute('src',basePath + 'images/inactive.png');
		this._inactive__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;');
		this._inactive__img.className='ggskin ggskin_image';
		this._inactive__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._inactive__img);
		this._inactive.appendChild(this._inactive__img);
		this._inactive.ggId="inactive";
		this._inactive.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._inactive.ggVisible=true;
		this._inactive.className='ggskin ggskin_image ';
		this._inactive.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 168px;';
		hs+='position : absolute;';
		hs+='top : -298px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		this._inactive.setAttribute('style',hs);
		this._inactive.style[domTransform + 'Origin']='50% 50%';
		me._inactive.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._inactive.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._inactive.ggUpdatePosition=function () {
		}
		this._inactive.ggNodeChangeMain=function() {
		}
		return this._inactive;
	};
	function SkinElement_active_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._active=document.createElement('div');
		this._active__img=document.createElement('img');
		this._active__img.className='ggskin ggskin_image';
		this._active__img.setAttribute('src',basePath + 'images/active.png');
		this._active__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;');
		this._active__img.className='ggskin ggskin_image';
		this._active__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._active__img);
		this._active.appendChild(this._active__img);
		this._active.ggId="active";
		this._active.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._active.ggVisible=true;
		this._active.className='ggskin ggskin_image ';
		this._active.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 168px;';
		hs+='position : absolute;';
		hs+='top : -298px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		this._active.setAttribute('style',hs);
		this._active.style[domTransform + 'Origin']='50% 50%';
		me._active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._active.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._active.ggUpdatePosition=function () {
		}
		this._active.ggNodeChangeMain=function() {
		}
		return this._active;
	};
	function SkinElement_exit_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._exit=document.createElement('div');
		this._exit__img=document.createElement('img');
		this._exit__img.className='ggskin ggskin_image';
		this._exit__img.setAttribute('src',basePath + 'images/exit.png');
		this._exit__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;');
		this._exit__img.className='ggskin ggskin_image';
		this._exit__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._exit__img);
		this._exit.appendChild(this._exit__img);
		this._exit.ggId="Exit";
		this._exit.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._exit.ggVisible=false;
		this._exit.className='ggskin ggskin_image ';
		this._exit.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 239px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		this._exit.setAttribute('style',hs);
		this._exit.style[domTransform + 'Origin']='50% 50%';
		me._exit.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._exit.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		this._exit.ggUpdatePosition=function () {
		}
		this._exit.ggNodeChangeMain=function() {
		}
		return this._exit;
	};
	function SkinElement_m_active_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._m_active=document.createElement('div');
		this._m_active__img=document.createElement('img');
		this._m_active__img.className='ggskin ggskin_image';
		this._m_active__img.setAttribute('src',basePath + 'images/m_active.png');
		this._m_active__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;');
		this._m_active__img.className='ggskin ggskin_image';
		this._m_active__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._m_active__img);
		this._m_active.appendChild(this._m_active__img);
		this._m_active.ggId="M_Active";
		this._m_active.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._m_active.ggVisible=true;
		this._m_active.className='ggskin ggskin_image ';
		this._m_active.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 293px;';
		hs+='position : absolute;';
		hs+='top : 27px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		this._m_active.setAttribute('style',hs);
		this._m_active.style[domTransform + 'Origin']='50% 50%';
		me._m_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._m_active.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._m_active.ggUpdatePosition=function () {
		}
		this._m_active.ggNodeChangeMain=function() {
		}
		return this._m_active;
	};
	function SkinElement_m_inactive_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._m_inactive=document.createElement('div');
		this._m_inactive__img=document.createElement('img');
		this._m_inactive__img.className='ggskin ggskin_image';
		this._m_inactive__img.setAttribute('src',basePath + 'images/m_inactive.png');
		this._m_inactive__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;');
		this._m_inactive__img.className='ggskin ggskin_image';
		this._m_inactive__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._m_inactive__img);
		this._m_inactive.appendChild(this._m_inactive__img);
		this._m_inactive.ggId="M_Inactive";
		this._m_inactive.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._m_inactive.ggVisible=true;
		this._m_inactive.className='ggskin ggskin_image ';
		this._m_inactive.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 293px;';
		hs+='position : absolute;';
		hs+='top : 27px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		this._m_inactive.setAttribute('style',hs);
		this._m_inactive.style[domTransform + 'Origin']='50% 50%';
		me._m_inactive.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._m_inactive.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._m_inactive.ggUpdatePosition=function () {
		}
		this._m_inactive.ggNodeChangeMain=function() {
		}
		return this._m_inactive;
	};
	this.addSkin();
};