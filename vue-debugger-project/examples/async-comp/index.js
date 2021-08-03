Vue.component('async-example1', function (resolve, reject) {
  setTimeout(function () {
    // Pass the component definition to the resolve callback
    resolve({
      template: '<div>I am async!</div>',
    });
  }, 1000);
});
Vue.component('async-example2', function (resolve, reject) {
  require(['./asyncExample2'], ({default: _}) => {
    resolve(_)
  });
});


Vue.component('async-example3', () => new Promise((resolve) => {
  import('./asyncExample3').then(({default: _}) => {
    resolve(_)
  });
}))


new Vue({
  el: '#app',
  render: (h) => h('div', [
    h('async-example1'),
    h('async-example2'),
    h('async-example3'),
  ]),
  // render: (h) =>h('async-example3'),
});