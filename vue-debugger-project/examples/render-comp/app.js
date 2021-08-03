
const Child = Vue.extend({
  props: {
    data: Number,
  },
  created() {
    console.log(`子组件beforeCreate`)
  },
  beforeMount() {
    console.log(`子组件beforeMount`)
  },
  mounted: () => {
    console.log(`子组件mounted`)
  },
  beforeUpdate() {
    console.log(`子组件beforeUpdate`)
  },
  updated() {
    console.log(`子组件updated`)
  },
  template: `<div>
  <h4>
  子组件
  </h4>
  <span>{{data}}</span>

  </div>
  `
})

const App = Vue.extend({
  data() {
    return {number: 0};
  },
  beforeCreate() {
    console.log(`父组件beforeCreate`)
  },
  created() {
    console.log(`父组件created`)
  },
  
  beforeMount() {
    console.log(`父组件beforeMount`)
  },
  beforeUpdate() {
    console.log(`父组件beforeUpdate`)
  },
  updated() {
    console.log(`父组件updated`)
  },
  mounted() {
    console.log(`父组件mounted`)
  },
  methods: {
add() {
  this.number += 1;
}
  },
  components: {
    Child
  },
  template: `<div>
              <h2>父组件</h2>
              <span>{{number}}</span>
              <button @click="add">增加数字</button>
              <Child :data="number"/>
            </div>`
});

new Vue({
  el: '#app',
  components: {
    App,
  },
  render: function (createElement) {
    return createElement('App')
  }
})