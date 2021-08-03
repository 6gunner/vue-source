const target = {
  a: 1,
  [Symbol("description")]: "平时喜欢做做瑜伽，人家有男朋友，你别指望了",
};
const handler = {
  get: (target, prop, receiver) => {
    // console.log(receiver); // 一个receiver
    if (prop == "name") {
      return "keyang";
    }
    return target[prop];
  },
  set: (target, prop, value) => {
    target[prop] = value;
  },
  has(target, prop) {
    console.log(target[prop]);
    return true;
  },
  ownKeys(target) {
    console.log(arguments);
    return Reflect.ownKeys(target);
  },
  getOwnPropertyDescriptor(target, prop) {
    console.log(arguments);
    return Reflect.getOwnPropertyDescriptor(target, prop);
  },
  has() {
    console.log(arguments);
  },
};
const proxy = new Proxy(target, handler);
// get()
// proxy.a;

// getOwnPropertyDescriptor()
// console.log(Object.getOwnPropertyDescriptor(proxy, "a"));

// ownKeys()
// console.log(Object.getOwnPropertyNames(proxy));
// const symbols = Object.getOwnPropertySymbols(proxy);
// console.log(proxy[symbols[0]]);

for (let key in proxy) {
  console.log(proxy[key]);
}
console.log("a" in proxy);
