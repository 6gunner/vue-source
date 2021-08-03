const object = {};

let a = "";
Object.defineProperty(object, "a", {
  configurable: true,
  writable: false,
  value: a,
});

// 在对象中添加一个设置了存取描述符属性的示例
var bValue = 38;
Object.defineProperty({}, "b", {
  // 使用了方法名称缩写（ES2015 特性）
  // 下面两个缩写等价于：
  // get : function() { return bValue; },
  // set : function(newValue) { bValue = newValue; },
  get() {
    return bValue;
  },
  set(newValue) {
    bValue = newValue;
  },
  enumerable: true,
  configurable: true,
});

object.a = "343223";
console.log(object.a);

(function () {
  "use strict";
  var o = {};
  Object.defineProperty(o, "b", {
    value: 2,
    writable: false,
  });
  // o.b = 3; // throws TypeError: "b" is read-only
  console.log(o.b); // returns 2 without the line above
})();

Object.defineProperties(object, {
  s: {
    value: "stupid",
    configurable: true,
    enumerable: true,
    writable: true,
  },
  b: {
    value: "boy",
    configurable: false,
    enumerable: true,
    writable: false,
  },
});
object.b = "body";
for (let key in object) {
  delete object[key];
  console.log(object[key]);
}
