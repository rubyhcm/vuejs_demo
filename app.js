// const app = Vue.createApp({
//     template: `<h2>I am a template</h2>`,
// })

// app.mount("#app");

// const app = Vue.createApp({
//   data() {
//     return {
//       title: "Hello World",
//       counter: 0,
//     };
//   },
//   methods: {
//     method_1() {
//       this.title = "Changed";
//     },
//     method_2(abc) {
//       this.title = abc;
//     },
//   },
// });

// app.mount("#app");

const app = Vue.createApp({
  data() {
    return {
      show: true,
      title: "Hello World",
      counter: 0,
      x: 0,
      y: 0,
    };
  },
  methods: {
    showHide() {
      this.show = !this.show;
    },
    handeEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handeMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
