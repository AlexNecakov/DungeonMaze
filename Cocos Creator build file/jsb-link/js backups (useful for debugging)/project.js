window.__require = function e(t, o, i) {
function n(c, r) {
if (!o[c]) {
if (!t[c]) {
var l = c.split("/");
l = l[l.length - 1];
if (!t[l]) {
var d = "function" == typeof __require && __require;
if (!r && d) return d(l, !0);
if (s) return s(l, !0);
throw new Error("Cannot find module '" + c + "'");
}
}
var a = o[c] = {
exports: {}
};
t[c][0].call(a.exports, function(e) {
return n(t[c][1][e] || e);
}, a, a.exports, e, t, o, i);
}
return o[c].exports;
}
for (var s = "function" == typeof __require && __require, c = 0; c < i.length; c++) n(i[c]);
return n;
}({
AudioMoveTest: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3b377kyDbdAaJARsICQAQnL", "AudioMoveTest");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = this.getComponent(cc.AudioSource);
void 0 != e && 0 == e.isPlaying && e.play();
},
update: function(e) {
this.node.setPosition(this.node.position.x += 100 * e, this.node.position.y += 100 * e);
(Math.abs(this.node.position.x) > Math.abs(this.node.parent.width / 2 - this.node.width / 2) || Math.abs(this.node.position.y) > Math.abs(this.node.parent.height / 2) - this.node.height / 2) && this.node.setPosition(0, 0);
}
});
cc._RF.pop();
}, {} ],
ButtonHandler: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "34ab2WlNPxEI64jC9BJK8UP", "ButtonHandler");
cc.Class({
extends: cc.Component,
properties: {
level: 0
},
onLoad: function() {},
onButtonClick: function() {
return 9 == this.level ? cc.director.loadScene("LevelScene") : 10 == this.level ? cc.director.loadScene("IntroScene") : 1 == this.level ? cc.director.loadScene("Level1") : 2 == this.level ? cc.director.loadScene("Level2") : 3 == this.level ? cc.director.loadScene("Level3") : 4 == this.level ? cc.director.loadScene("Level4") : 5 == this.level ? cc.director.loadScene("Level5") : void 0;
},
start: function() {}
});
cc._RF.pop();
}, {} ],
NextLevel: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c3bafqo/M1L56dCVzgevzdg", "NextLevel");
cc.Class({
extends: cc.Component,
properties: {
nextLevel: 0
},
onLoad: function() {},
onButtonClick: function() {
console.log("Level" + this.nextLevel);
return cc.director.loadScene("Level" + this.nextLevel);
},
start: function() {}
});
cc._RF.pop();
}, {} ],
PlayerJs: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2c64f+uPT1EdapQhfXreYEb", "PlayerJs");
cc.Class({
extends: cc.Component,
properties: {
accelx: 0,
accely: 0,
speedx: 0,
speedy: 0,
spawnX: 0,
spawnY: 0,
Level: 0,
speedMultiplier: 0
},
onLoad: function() {
this.node.setPosition(this.spawnX, this.spawnY);
cc.systemEvent.setAccelerometerEnabled(!0);
cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
cc.director.getCollisionManager().enabledDebugDraw = !0;
cc.director.getCollisionManager().enabled = !0;
cc.director.getCollisionManager().enabledDrawBoundingBox = !0;
},
onDestroy: function() {
cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
},
onCollisionEnter: function(e, t) {
console.log("Currently colliding");
if (1 == e.tag) {
console.log("Wall collide");
cc.systemEvent.setAccelerometerEnabled(!1);
this.speedx = -.5 * this.speedx;
this.speedy = -.5 * this.speedy;
setTimeout(cc.systemEvent.setAccelerometerEnabled(!0), 40);
} else if (2 == e.tag) {
console.log("colliding with hole");
cc.systemEvent.setAccelerometerEnabled(!1);
this.speedx = 0;
this.speedy = 0;
this.node.setPosition(this.spawnX, this.spawnY);
setTimeout(cc.systemEvent.setAccelerometerEnabled(!0), 20);
} else {
if (3 == e.tag) {
console.log("pie is delicious");
return cc.director.loadScene("Intermittent" + this.Level);
}
if (4 == e.tag) {
console.log("colliding with purple guy");
cc.systemEvent.setAccelerometerEnabled(!1);
this.speedx = 0;
this.speedy = 0;
this.node.setPosition(this.spawnX, this.spawnY);
setTimeout(cc.systemEvent.setAccelerometerEnabled(!0), 20);
}
}
},
onCollisionExit: function(e, t) {},
onDeviceMotionEvent: function(e) {
this.accelx = e.acc.x;
this.accely = e.acc.y;
this.speedx += 50 * this.accelx * this.speedMultiplier - .5 * this.speedx;
this.speedy += 50 * this.accely * this.speedMultiplier - .5 * this.speedy;
var t = this.getComponent(cc.AudioSource);
void 0 != t && (Math.abs(this.speedx) > 10 || Math.abs(this.speedy) > 10) && 0 == t.isPlaying && t.play();
},
update: function(e) {
this.node.setPosition(this.node.position.x += this.speedx * e, this.node.position.y += this.speedy * e);
(Math.abs(this.node.position.x) > Math.abs(this.node.parent.width / 2 - this.node.width / 2) || Math.abs(this.node.position.y) > Math.abs(this.node.parent.height / 2) - this.node.height / 2) && this.node.setPosition(this.spawnX, this.spawnY);
}
});
cc._RF.pop();
}, {} ],
PurpleGuyMove: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3f1a8qpDFVBh5YCa2LWkqap", "PurpleGuyMove");
cc.Class({
extends: cc.Component,
properties: {
direction: 0,
spawnX: 0,
spawnY: 0,
speedMultiplier: 0,
leftBound: 0,
rightBound: 0,
spookAudio: {
default: null,
type: cc.AudioClip
}
},
onLoad: function() {
this.node.setPosition(this.spawnX, this.spawnY);
},
update: function(e) {
this.node.setPosition(this.node.position.x += this.speedMultiplier * this.direction * 150 * e, this.node.position.y);
if (this.node.position.x <= this.leftBound || this.node.position.x >= this.rightBound) {
this.direction *= -1;
cc.audioEngine.playEffect(this.spookAudio, !1);
}
}
});
cc._RF.pop();
}, {} ],
Tile: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4e3b8PV6ZpESJ5C5OIiNVrI", "Tile");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {}
});
cc._RF.pop();
}, {} ],
Timer: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7c69dvFAwtIgogtVSLI/rnu", "Timer");
cc.Class({
extends: cc.Component,
properties: {
time: 0,
label: cc.Label
},
onLoad: function() {},
update: function(e) {
cc.log("Timer on");
this.time = this.time + e;
this.label.string = Math.floor(this.time / 60) + ":" + (this.time % 60).toFixed(2);
}
});
cc._RF.pop();
}, {} ],
button2: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2138dnvdrBI2Ik/ta98tqVB", "button2");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
onButtonClick: function() {
return cc.director.loadScene("Level2");
},
start: function() {}
});
cc._RF.pop();
}, {} ],
restartLevel: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "53b4bxHDc9Bm6JVgyrRTrkg", "restartLevel");
cc.Class({
extends: cc.Component,
properties: {
restartLevel: 0
},
onLoad: function() {},
onButtonClick: function() {
console.log("Level" + this.restartLevel);
console.log("clicked!");
return cc.director.loadScene("Level" + this.restartLevel);
},
start: function() {}
});
cc._RF.pop();
}, {} ]
}, {}, [ "AudioMoveTest", "ButtonHandler", "NextLevel", "PlayerJs", "PurpleGuyMove", "Tile", "Timer", "button2", "restartLevel" ]);