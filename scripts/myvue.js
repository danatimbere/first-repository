console.log("running m view");

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>[']</li>'
  })


const app = new Vue {(
    el: '#app',
    data: {
        message: 'RCS',
        myNum: 5,
        myDate: new Date(),
        toggleSeen: function () {

            
        }
    }

)}

